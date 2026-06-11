/**
 * capture.js : DCB Visual Test : capture baseline ou current
 *
 * Usage :
 *   node capture.js --mode baseline   (ecrit dans baseline/)
 *   node capture.js --mode check      (ecrit dans current/)
 *
 * Pages : decouverte automatique de tous les index.html du projet
 * (hors .claude/, tools/, node_modules/, "Logo et images/", tests/)
 *
 * Viewports : desktop 1440x900 + mobile 390x844
 * Stabilisation : reducedMotion, injection CSS freeze, attente fonts + networkidle
 */

'use strict';

const fs   = require('fs');
const path = require('path');
const http = require('http');
const { chromium } = require('playwright');

// ── Chemin racine du projet (deux niveaux au-dessus de tests/visual) ──
const PROJECT_ROOT = path.resolve(__dirname, '..', '..');

// ── Dossiers de sortie ─────────────────────────────────────────────────
const MODE = process.argv.includes('--mode') ? process.argv[process.argv.indexOf('--mode') + 1] : 'baseline';
if (!['baseline', 'check'].includes(MODE)) {
  console.error('Usage : node capture.js --mode baseline|check');
  process.exit(1);
}

const OUTPUT_DIR = path.join(__dirname, MODE === 'baseline' ? 'baseline' : 'current');
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

// ── Viewports ──────────────────────────────────────────────────────────
const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
];

// ── CSS de stabilisation ───────────────────────────────────────────────
const FREEZE_CSS = `
*,
*::before,
*::after {
  animation: none !important;
  transition: none !important;
  animation-duration: 0s !important;
  transition-duration: 0s !important;
  animation-play-state: paused !important;
  caret-color: transparent !important;
  /* Remplacer les web fonts par des fonts systeme pour eliminer la variabilite
     de chargement des fonts Google entre les runs. */
  font-family: system-ui, -apple-system, sans-serif !important;
}
/* Figer les carousels / marquees a la position initiale */
.carousel-track,
.marquee-track,
.h-partners-track,
[class*="marquee-track"],
[class*="carousel-track"] {
  transform: translateX(0) !important;
  transition: none !important;
  animation: none !important;
  animation-play-state: paused !important;
}
/* Figer les elements avec scrolling JS (ex: div.flex a defilement inline) */
.flex.flex-nowrap[style*="animation"] {
  animation: none !important;
  transform: translateX(0) !important;
}
/* Masquer les images distantes potentiellement flaky */
img[src*="lh3.googleusercontent.com"],
img[src*="googleusercontent.com"],
img[src*="ggpht.com"] {
  visibility: hidden !important;
}
/* Stabiliser les icones Material Symbols (font externe flaky) :
   remplacer par des espaces visuels stables */
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined', system-ui !important;
  font-size: 1em !important;
}
`;

// ── JS de stabilisation : gele les animations inline + carousels ───────
const FREEZE_JS = `
(function () {
  // 1. Stopper et geler toutes les Web Animations API en cours
  document.getAnimations().forEach(function(anim) {
    try {
      anim.pause();
      // Ramener a la frame 0
      if (anim.effect && anim.effect.getTiming) {
        anim.currentTime = 0;
      }
    } catch(e) {}
  });

  // 2. Reset les containers scrollants (marquee, carousel, partenaires)
  //    via setProperty avec !important pour surpasser les styles inline
  var containerSelectors = [
    '.marquee-track',
    '.carousel-track',
    '.h-partners-track',
    '.flex.flex-nowrap',
  ];
  containerSelectors.forEach(function(sel) {
    document.querySelectorAll(sel).forEach(function(el) {
      el.style.setProperty('animation',  'none',          'important');
      el.style.setProperty('transition', 'none',          'important');
      el.style.setProperty('transform',  'translateX(0)', 'important');
    });
  });

  // 3. Figer les elements avec animation inline (style="animation:...")
  //    Traiter specialement les grands containers de defilement horizontal
  document.querySelectorAll('[style*="animation"]').forEach(function(el) {
    // Conteneur de defilement : children > 3 = probablement une track
    if (el.children.length > 3 || el.getAttribute('style').indexOf('translateX') !== -1) {
      el.style.setProperty('animation',  'none',          'important');
      el.style.setProperty('transition', 'none',          'important');
      el.style.setProperty('transform',  'translateX(0)', 'important');
    } else {
      // Element simple : retirer seulement la propriete animation
      var s = el.getAttribute('style') || '';
      s = s.replace(/animation\\s*:[^;]+;?/gi, '');
      el.setAttribute('style', s);
    }
  });

  // 4. Forcer un reflow pour que les changements de style prennent effet
  //    avant que Playwright prenne le screenshot
  void document.body.getBoundingClientRect();
})();
`;

// ── Exclusions ─────────────────────────────────────────────────────────
const EXCLUDE_PATTERNS = [
  /[/\\]\.claude[/\\]/,
  /[/\\]tools[/\\]/,
  /[/\\]node_modules[/\\]/,
  /[/\\]Logo et images[/\\]/,
  /[/\\]tests[/\\]/,
  /[/\\]memory[/\\]/,
  /[/\\]docs[/\\]/,
  /[/\\]seo-analyse[/\\]/,
];

// ── Decouverte des pages ───────────────────────────────────────────────
function findPages(dir, found = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!EXCLUDE_PATTERNS.some(re => re.test(fullPath + path.sep))) {
        findPages(fullPath, found);
      }
    } else if (entry.name === 'index.html') {
      if (!EXCLUDE_PATTERNS.some(re => re.test(fullPath))) {
        found.push(fullPath);
      }
    }
  }
  return found;
}

// ── Convertit un chemin absolu en URL relative au projet ───────────────
function pageToUrl(absPath, basePort) {
  const rel = path.relative(PROJECT_ROOT, absPath)
    .replace(/\\/g, '/')   // Windows -> POSIX
    .replace(/index\.html$/, '');
  return `http://localhost:${basePort}/${rel}`;
}

// ── Serveur statique local ─────────────────────────────────────────────
function startServer(root, port) {
  const serveStatic  = require('serve-static');
  const finalhandler = require('finalhandler');
  const serve = serveStatic(root, { index: ['index.html'] });
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      serve(req, res, finalhandler(req, res));
    });
    server.listen(port, '127.0.0.1', () => {
      console.log(`Serveur statique sur http://localhost:${port}`);
      resolve(server);
    });
  });
}

// ── Trouve un port libre ───────────────────────────────────────────────
function findFreePort(start = 7777) {
  return new Promise((resolve, reject) => {
    const server = http.createServer();
    server.listen(start, '127.0.0.1', () => {
      const { port } = server.address();
      server.close(() => resolve(port));
    });
    server.on('error', () => findFreePort(start + 1).then(resolve, reject));
  });
}

// ── Slug pour le nom de fichier ────────────────────────────────────────
function pageSlug(absPath) {
  const rel = path.relative(PROJECT_ROOT, absPath)
    .replace(/\\/g, '/')
    .replace(/\/index\.html$/, '')
    .replace(/^index\.html$/, 'home')
    .replace(/\//g, '--');
  return rel || 'home';
}

// ── Capture principale ─────────────────────────────────────────────────
async function main() {
  const pages = findPages(PROJECT_ROOT);
  console.log(`Pages decouvertes : ${pages.length}`);
  pages.forEach(p => console.log('  ' + path.relative(PROJECT_ROOT, p)));

  const port   = await findFreePort(7777);
  const server = await startServer(PROJECT_ROOT, port);

  const browser = await chromium.launch({
    args: ['--disable-gpu', '--no-sandbox', '--disable-setuid-sandbox'],
  });

  const errors = [];
  let count = 0;

  for (const viewport of VIEWPORTS) {
    const context = await browser.newContext({
      viewport:             { width: viewport.width, height: viewport.height },
      deviceScaleFactor:    1,
      reducedMotion:        'reduce',
      colorScheme:          'light',
      locale:               'fr-FR',
      // Bloquer les ressources externes lourdes pour stabilite, sauf fonts Google
      // (on laisse passer les fonts pour le rendu fidele)
    });

    // Intercepter les ressources externes non reproductibles :
    // - images googleusercontent (potentiellement flaky)
    // - Google Fonts CSS/woff2 (timing de chargement variable => reflow de layout)
    // Les fonts systeme du FREEZE_CSS garantissent un rendu stable.
    await context.route('**/*', (route) => {
      const url = route.request().url();
      // Bloquer les fonts externes (Google Fonts, gstatic)
      if (/fonts\.googleapis\.com|fonts\.gstatic\.com/.test(url)) {
        route.abort('blockedbyclient');
        return;
      }
      // Bloquer les images googleusercontent
      if (/googleusercontent\.com|ggpht\.com/.test(url) &&
          /\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(url)) {
        route.abort('blockedbyclient');
        return;
      }
      route.continue();
    });

    for (const pagePath of pages) {
      const url  = pageToUrl(pagePath, port);
      const slug = pageSlug(pagePath);
      const file = path.join(OUTPUT_DIR, `${slug}--${viewport.name}.png`);

      try {
        const page = await context.newPage();

        // Injecter via addInitScript (s'execute avant le HTML) :
        // 1. Surcharger requestAnimationFrame pour bloquer les animations JS
        // 2. Injecter le CSS freeze des que documentElement est disponible
        // 3. Intercepter MutationObserver pour activer loading="eager" sur les nouvelles images
        await page.addInitScript({ content: `
          (function() {
            // Bloquer les animations JS (rafId enregistres mais jamais executes)
            var _raf = window.requestAnimationFrame;
            var _caf = window.cancelAnimationFrame;
            window.requestAnimationFrame = function(cb) { return 0; };
            window.cancelAnimationFrame  = function(id) {};
            window.mozRequestAnimationFrame    = window.requestAnimationFrame;
            window.webkitRequestAnimationFrame = window.requestAnimationFrame;

            // Injecter le CSS freeze au tout debut de <html>
            var style = document.createElement('style');
            style.id = 'dcb-freeze-early';
            style.textContent = ${JSON.stringify(FREEZE_CSS)};
            var root = document.documentElement;
            if (root) root.insertBefore(style, root.firstChild);

            // Forcer loading="eager" sur toutes les images lazy (y compris futures)
            function eagerify(node) {
              if (node.nodeName === 'IMG' && node.loading === 'lazy') {
                node.loading = 'eager';
              }
              if (node.querySelectorAll) {
                node.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
                  img.loading = 'eager';
                });
              }
            }
            eagerify(document);
            var mo = new MutationObserver(function(mutations) {
              mutations.forEach(function(m) {
                m.addedNodes.forEach(eagerify);
              });
            });
            mo.observe(document, { childList: true, subtree: true });

            // Reactiver rAF apres DOMContentLoaded pour les scripts d'initialisation
            document.addEventListener('DOMContentLoaded', function() {
              window.requestAnimationFrame = _raf;
              window.cancelAnimationFrame  = _caf;
            });
          })();
        ` });

        // Aller sur la page, attendre networkidle
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

        // Attente supplementaire pour les scripts d'hydratation (nav/footer injecte par scripts.js)
        await page.waitForFunction(() => {
          const nav = document.querySelector('[data-dcb-nav], nav, #dcb-nav, .nav__inner');
          return nav !== null;
        }, { timeout: 5000 }).catch(() => {
          // La nav peut ne pas exister sur certaines pages legales, ce n'est pas bloquant
        });

        // Injecter CSS de stabilisation une seconde fois (apres hydratation scripts)
        await page.addStyleTag({ content: FREEZE_CSS });

        // Attendre que les fonts soient chargees et le layout stable
        await page.evaluate(() => document.fonts.ready);

        // Geler les animations inline et les marquees/carousels via JS
        await page.evaluate(new Function(FREEZE_JS));

        // Forcer le chargement de toutes les images lazy (Playwright ne scrolle pas
        // reellement la page, donc les images loading="lazy" hors viewport ne se chargent pas)
        await page.evaluate(async () => {
          // 1. Convertir tous les loading="lazy" en eager + forcer re-fetch du src
          document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
            img.setAttribute('loading', 'eager');
            // Re-assigner src pour forcer le navigateur a re-evaluer le chargement
            var src = img.src;
            if (src) {
              img.src = '';
              img.src = src;
            }
          });

          // 2. Attendre que toutes les images soient chargees (ou en erreur)
          var images = Array.from(document.images);
          await Promise.allSettled(images.map(function(img) {
            if (img.complete && img.naturalHeight > 0) return Promise.resolve();
            return new Promise(function(resolve) {
              img.addEventListener('load',  resolve, { once: true });
              img.addEventListener('error', resolve, { once: true });
              // Timeout de securite : 3s max par image
              setTimeout(resolve, 3000);
            });
          }));

          // 3. Forcer decode() sur les images chargees
          await Promise.allSettled(
            Array.from(document.images)
              .filter(function(img) { return img.complete && img.naturalHeight > 0; })
              .map(function(img) { return img.decode ? img.decode() : Promise.resolve(); })
          );
        });

        // Attente pour le rendu apres chargement/decode des images
        await page.waitForTimeout(500);

        // Screenshot pleine page
        await page.screenshot({
          path:     file,
          fullPage: true,
          animations: 'disabled',
        });

        await page.close();
        count++;
        console.log(`[${MODE}] ${slug} @ ${viewport.name} -> ${path.basename(file)}`);
      } catch (err) {
        errors.push({ page: slug, viewport: viewport.name, error: err.message });
        console.error(`[ERREUR] ${slug} @ ${viewport.name} : ${err.message}`);
      }
    }

    await context.close();
  }

  await browser.close();
  server.close();

  console.log(`\nCaptures : ${count}/${pages.length * VIEWPORTS.length} OK`);

  if (errors.length > 0) {
    console.error('\nErreurs :');
    errors.forEach(e => console.error(`  ${e.page} @ ${e.viewport} : ${e.error}`));
    process.exit(1);
  }

  console.log('Capture terminee avec succes.');
}

main().catch(err => {
  console.error('Erreur fatale :', err);
  process.exit(1);
});
