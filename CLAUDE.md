# DCB Site V2 — Instructions de projet

Site marketing statique pour **DCB Technologies** (B2B local : caisses, IT, web) couvrant 71/69/01/42.

---

## 🔧 GIT WORKFLOW — RÈGLES

Le projet est versionné. Repo privé GitHub : `ndacosta-XIII/dcb-site` (branche `main`).

### Avant de modifier
1. `git status` pour voir l'état courant.
2. `git pull` si on revient après un temps (au cas où Clément ait pushé).

### Règles de commit
- **Une tâche logique = un commit.** Ne pas empiler 10 sujets dans un seul commit.
- Message en français, format `Sujet court : action concrète`. Ex : `Hub Web : harmonisation accent rouge sur SEO-SEA`.
- **Toujours rebuild Tailwind avant commit** si des classes ont changé (cf. section build).
- **Toujours grep `—` (em dash) sur les fichiers modifiés** avant commit. Zéro tolérance.
- Stage explicite : `git add chemin/du/fichier.html` plutôt que `git add -A` (évite d'ajouter par mégarde des reliques).

### Workflow standard
```bash
git status
git add <fichiers>
git commit -m "<sujet> : <action>"
git push
```

### Ne jamais committer
- `tools/` (binaire Tailwind 129 MB)
- `Logo et images/` (assets de référence locaux)
- `node_modules/`, `.cache/`, `dist/`
- `.env`, `*.key`, secrets
- Scripts PowerShell jetables (`test-*.ps1`, `scan-*.ps1`, `propagate-*.ps1`)
- Fichiers preview/temp (`_preview-*.html`, `test.html`, `*.bak`)
- Scripts Python locaux (`*.py`)

Cf. `.gitignore` à la racine.

### Ne jamais utiliser
- `git push --force` (sauf demande explicite utilisateur)
- `git reset --hard` sur main
- `git commit --amend` après un push
- `--no-verify` ou `--no-gpg-sign`

---

## 🚫 RÈGLE ABSOLUE — ZÉRO TIRET CADRATIN

**JAMAIS de `—` (em dash) dans le contenu écrit du site.** Marqueur typique IA, banni par le client.

Remplacer par : `:`, `.`, `,`, `|`, `·`, ou parenthèses.

S'applique à : titres HTML, meta description, H1/H2/H3, body, FAQ, JSON-LD, options de formulaire, alt texts.

**Après chaque édition de contenu :** grep `—` sur le fichier modifié. Si match, corriger avant de répondre.

---

## ⚙️ Tech Stack

- **HTML5 + Tailwind CSS v3.4.17 (build statique) + Vanilla JS.**
- Pas de npm, pas de framework. Tailwind compilé via le binaire standalone `tools/tailwindcss.exe`.
- Dev local : ouvrir en `file://`, via `serve.ps1` ou serveur statique.

### Rebuild Tailwind (à chaque changement de classe HTML/JS)
```bash
./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
```
Scan : `./*.html`, `./**/*.html`, `./js/**/*.js`. Les classes utilisées uniquement dans `scripts.js` sont bien capturées.

### Cache-bust
- `css/style.css?v=8`
- `js/scripts.js?v=21`

Incrémenter à chaque modif structurelle de ces fichiers, sur **toutes** les pages.

---

## 🏗️ Architecture

### Structure
```
dcb-site-clean/
  index.html                                       Homepage
  caisse-enregistreuse/                            Hub + 8 sous-pages métier/produit
  maintenance-informatique/                        Hub IT + 5 sous-pages (slug SEO renommé)
  visibilite-web/                                  Hub Web + 3 sous-pages
  blog/, contact/, notre-adn/                      Pages éditoriales
  mentions-legales/, confidentialite/, cgv/        Pages légales
  assets/                                          Logos, photos, vidéos
  css/style.css                                    Composants
  css/tailwind.min.css                             Build Tailwind
  js/scripts.js                                    Nav, footer, FAB, menu mobile, carousel, sheet
  m/css/mobile.css                                 Styles mobile partagés (shell .m-shell)
  m/js/mobile.js                                   Script mobile partagé
  docs/                                            Documentation interne (standards, audits)
  seo-analyse/                                     Modules SEO + master plan
  AUDIT_SEO.md                                     Audit technique SEO
  PRODUCT.md, DESIGN.md                            Brief & design system pour skills
  robots.txt, sitemap.xml, .htaccess, llms.txt     SEO infra
```

### Dual-shell mobile/desktop (un seul fichier par page)
- `.m-shell` (mobile ≤640px) + `.d-shell` (desktop >640px) cohabitent dans le même HTML.
- Desktop : `@media(min-width:641px){.m-shell{display:none}}`.
- Mobile : `@media(max-width:640px){.d-shell{display:none}.m-shell{display:block}#dcb-phone-fab{display:none!important}}`.
- IDs mobiles préfixés `m-` pour éviter conflits scripts.js (`m-pg`, `m-main`, `m-nav`, `m-menu`, `m-fab`, `m-sheet`, `m-footer`).
- Frame mobile DRY : header/menu/FAB/sheet/footer injectés par scripts.js dans les placeholders. Ne jamais hardcoder.
- Standard complet : `docs/mobile-standard.md`.

### Composants partagés (scripts.js)
- Nav desktop, footer (avec atlas typographique 4 départements + filet orange signature), FAB téléphone, menu mobile burger, carousel témoignages, bottom-sheet formulaire.
- **Ne jamais modifier sans trigger words : `13header` ou `13footer`.**

### CTA Final v3 « Le Seuil »
Bandeau CTA en fin de chaque page (desktop `.d-cta-final` + mobile `.m-cta-final`), piloté par CSS variables `--accent` et `--accent-dark` propres à la narration de la page. Les couleurs métier/narration ci-dessous sont injectées via ces variables.

---

## 🎨 Design System

### Couleurs DCB (marque)
| Token | Hex | Usage |
|---|---|---|
| Primary | `#0B3D91` | Titres, liens actifs, hero |
| Primary Dark | `#072B6B` | Footer, gradient fin |
| CTA Orange | `#F57C00` | **Boutons CTA uniquement** + filet signature footer |
| Surface 0 | `#FFFFFF` | Fond blanc |
| Surface 1 | `#F8F9FA` | Section alternée |
| Surface 2 | `#F3F4F5` | Surface medium |
| Text Muted | `#4A5568` (≈ `text-slate-500`) | Texte secondaire |

### Accents métier (silo caisse)
| Métier | Accent |
|---|---|
| Boulangerie | `#F59E0B` ambre |
| Restaurant | `#EF4444` coral |
| Commerce de détail | `#0D9488` teal |
| Coiffure | `#A855F7` violet |
| Borne de commande | `#4F46E5` indigo |
| Monnayeur | `#059669` vert |
| CashMag (hero produit) | `#76B737` vert partenaire |
| Hairnet (partenaire) | `#4527A4` violet / `#C59C45` or |

### Accents narration (silos IT & Web)
| Page | Accent | Narration |
|---|---|---|
| `maintenance-depannage` | `#EF4444` | Urgence |
| `cloud-securite` | `#0D9488` | Éducation |
| `location-vente-installation` | `#4F46E5` | Décision |
| `outils-collaboratifs` | `#A855F7` | Démo |
| `infogerance-pme` | `#F59E0B` | Pricing récurrent |
| `creation-site-internet` | `#7C3AED` | Process |
| `seo-sea-local` | `#EF4444` | Résultats (aligné rouge restaurant, source de vérité) |
| `hebergement` | `#0D9488` | Comparatif |

### Règles design absolues
- **Zéro `backdrop-blur`** sur la nav (fond blanc uni).
- **Orange `#F57C00` uniquement sur CTA + filet signature footer.** Jamais comme fond ou accent décoratif.
- **Zéro bordure 1px** entre sections. Séparation par shift tonal.
- **Ombres tintées bleu** : `rgba(7,43,107,0.04)`.
- **Une seule référence pour le rouge** : `#EF4444` (restaurant). Toutes les pages rouges s'alignent dessus.

### Typo
- `--font-title` Sora (700/800) pour titres
- `--font-body` Inter (400/500/600) pour body
- H2 standard : `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]`
- Labels : `text-[11px] font-bold tracking-[0.2em] uppercase`

### Conventions Tailwind
1. `corePlugins: { container: false }` sur chaque page (évite conflit nav).
2. Sections : `py-12 lg:py-16`.
3. Containers : `max-w-7xl mx-auto px-6`.
4. Cards : `rounded-xl` ou `rounded-2xl`, classe `tonal-shift-elevation`.
5. CTA buttons : `rounded-[14px]`.
6. `<main>` : `pt-[76px]` (hauteur nav).
7. `data-base` sur `<html>` : `./` racine, `../` depth 1, `../../` depth 2.

---

## 🧠 Skills obligatoires

### Tout sujet UI/UX/design
**`ui-ux-pro-max`** — Base locale dans `.claude/skills/ui-ux-pro-max/`. Toujours invoquer pour : choix style, couleurs, fonts, layout, animations, a11y, audit visuel.

```powershell
$PYTHON = "C:\Users\Dacos\AppData\Local\Programs\Python\Python312\python.exe"
& $PYTHON .claude\skills\ui-ux-pro-max\scripts\search.py "<query>" --design-system
& $PYTHON .claude\skills\ui-ux-pro-max\scripts\search.py "<query>" --domain <ux|style|color|typography|landing|chart|product|web>
```

### Intégration shell mobile
Trois skills dans l'ordre, non négociables :
1. **`page-cro`** : auditer l'ordre des sections pour la narration mobile (l'ordre desktop n'est pas forcément optimal).
2. **`impeccable craft`** : brief shape validé par l'utilisateur avant tout HTML.
3. **`ui-ux-pro-max`** (`--domain ux` + `--domain landing`) : pendant l'écriture des sections.

### SEO/contenu
Avant toute tâche SEO, balises, JSON-LD, maillage, mise en ligne : lire `AUDIT_SEO.md` + `seo-analyse/` (modules + master plan).

---

## 📊 État actuel du projet

### Pages complètes (contenu + structure + JSON-LD + E-E-A-T + mobile)
- **Homepage** ✅
- **Silo Caisse** (9 pages) ✅ — JSON-LD Service + HowTo + Product, date E-E-A-T, NF525 reformulé anti-duplicate
- **Silo IT** (6 pages) ✅ — harmonisation atomes visuels + JSON-LD Service + breadcrumb + cross-sell inter-pilier
- **Pages légales** (mentions, confidentialité, CGV) ✅
- **Contact, Notre ADN, Blog hub + article pilote** ✅ (raffinements en attente cf. roadmap)

### Pages partielles
- **Silo Web hub + 3 sous-pages** : structure OK, manque JSON-LD Service détaillé sur le hub, date E-E-A-T systématique, harmonisation finale.

### Mobile (dual-shell appliqué)
- [x] Homepage
- [x] Caisse hub + sous-pages
- [x] Maintenance Informatique hub + sous-pages
- [x] Visibilité Web hub + sous-pages
- [x] Contact, Notre ADN
- Standard : `docs/mobile-standard.md`

---

## 🗺️ Roadmap restante

### Bloqué — attente client
- Logos partenaires réels pour bandeau Accueil (actuellement `<span>` texte).
- Photos produits réelles → remplacer 8 URLs `lh3.googleusercontent.com` (RGPD + LCP).
- Témoignages réels (noms, photos, entreprises).
- Métriques trust bar réelles par page.

### Silo Web — finition
- Hub Visibilité Web : JSON-LD `Service` détaillé (`areaServed`), date E-E-A-T, breadcrumb.
- 3 sous-pages Web : date E-E-A-T systématique, JSON-LD Service.
- Témoignages × 4 carrousel (attente contenu).

### Pages spéciales
- Contact : LocalBusiness JSON-LD dupliqué + `ContactPage` + horaires.
- Notre ADN : polish (CSS mort `.adn-signature*`, JSON-LD AboutPage + Organization + BreadcrumbList, og:image, date E-E-A-T).
- Notre ADN : structurer pour E-E-A-T (parcours fondateurs, dates, certifications).

### Audit P1 — restant
- Mockup iPhone hub Web (en attente décision visuelle).
- Contact : externaliser CSS inline.
- Glow halo boutons pricing IT (4 pages).
- Hero blobs radial-gradient décoratifs (15 instances IT+Web).

### SEO technique post-lancement
- Soumettre `sitemap.xml` à Google Search Console + Bing Webmaster.
- Compléter `sameAs` LocalBusiness avec URL Google Business Profile officielle.
- Optimiser fiche GBP existante.
- Auto-héberger fonts (woff2 dans `/assets/fonts/`) — gain LCP ~0.3s + RGPD.
- Open Graph tags sur 4 pages manquantes (blog ×2, contact, notre-adn).
- Schema BlogPosting sur article blog.
- Cross-sell inter-piliers sur sous-pages IT et Web (cf. master plan Sprint 5).
- Fil d'Ariane visuel + BreadcrumbList JSON-LD sous-pages (Sprint 6).
- Blog + Notre ADN dans la nav (Sprint 4).

### Images (dès réception client)
- Conversion WebP qualité 82, `width`/`height` explicites partout (zéro CLS), `loading="lazy" decoding="async"` hors LCP, `loading="eager" fetchpriority="high"` sur hero.
- Créer OG images 1200×630 par hub (`og-homepage.jpg` existe, manquent `og-caisse`, `og-it`, `og-web`).

---

## 🏢 Informations DCB Technologies

- **Téléphone :** 04 82 53 05 10
- **Email :** contact@dcb-technologies.fr
- **Co-fondateurs :** Nathanaël Da Costa & Clément Boissié
- **Siège :** Paray-le-Monial (71600)
- **Zone d'intervention :** Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)
- **Logiciel caisse :** CashMag (certifié NF525)
- **Matériel :** OXHOO, AURES, Lenovo
- **Délai SAV :** intervention sous 4h sur site
- **Partenaires :** NF525, CashMag, Hairnet, OXHOO, AURES, Lenovo, iMin, Yavin, Pedro Porto
- **Hébergement live :** `https://blissful-bhabha.91-134-132-127.plesk.page` (Plesk)
- **Repo Git :** `ndacosta-XIII/dcb-site` (privé, GitHub)
