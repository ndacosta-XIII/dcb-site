/* ============================================================
   DCB TECHNOLOGIES — COMPOSANTS PARTAGES (Tailwind)
   Source unique : modifier ici = applique partout
   Chaque page declare data-base sur <html> pour les chemins
   Fonctionne en file:// et via serveur local
   ============================================================ */

(function () {
  var base = document.documentElement.dataset.base || './';

  /* ── DROPDOWN ITEM HELPER ────────────────────────────────── */
  function ddItem(href, bg, color, icon, title, desc) {
    return '<a href="' + base + href + '" class="group/item flex items-center gap-3 py-2 px-2.5 rounded-[0.625rem] no-underline hover:bg-[#F0F5FF]">' +
      '<span class="w-[2.125rem] h-[2.125rem] rounded-lg flex items-center justify-center shrink-0" style="background:' + bg + '">' +
      '<span class="material-symbols-outlined mat-filled text-[1.1rem]" style="color:' + color + '">' + icon + '</span></span>' +
      '<div><div class="font-headline font-bold text-[0.8125rem] text-[#0B3D91] group-hover/item:text-[#F57C00]">' + title + '</div>' +
      (desc ? '<div class="font-body text-[0.72rem] text-gray-500 mt-0.5">' + desc + '</div>' : '') +
      '</div></a>';
  }

  /* ── DROPDOWN PANEL HELPER ───────────────────────────────── */
  function ddPanel(items) {
    return '<div class="dcb-dd absolute top-full left-1/2 -translate-x-1/2 -translate-y-1 pt-2.5 min-w-[300px] opacity-0 pointer-events-none transition-all duration-[180ms] z-[200] group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0">' +
      '<div class="bg-white rounded-2xl shadow-[0_24px_56px_-8px_rgba(7,43,107,0.2),0_0_0_1px_rgba(7,43,107,0.06)] p-2.5">' + items + '</div></div>';
  }

  /* ── NAV LINK HELPER ─────────────────────────────────────── */
  var navLinkCls = 'dcb-nav-link font-headline font-bold text-[0.9375rem] tracking-[-0.02em] text-[#0B3D91] no-underline flex items-center whitespace-nowrap py-2 px-3 rounded-lg transition-colors duration-150 group-hover:text-[#F57C00]';
  var arrowHtml = '<span class="material-symbols-outlined mat-filled text-[1.2rem] leading-none ml-0.5 transition-transform duration-200 group-hover:rotate-180 group-hover:text-[#F57C00]">arrow_drop_down</span>';

  /* ── MOBILE LINK HELPER ──────────────────────────────────── */
  function mobLink(href, icon, color, label) {
    return '<a href="' + base + href + '" onclick="dcbMobClose()" class="dcb-mob-link flex items-center gap-3 py-2.5 px-2 no-underline rounded-lg hover:bg-[#F0F5FF]">' +
      '<span class="material-symbols-outlined mat-filled text-base" style="color:' + color + '">' + icon + '</span>' +
      '<span class="font-body font-semibold text-sm text-slate-800">' + label + '</span></a>';
  }

  /* ── MOBILE SECTION HELPER ───────────────────────────────── */
  function mobSection(id, label, links) {
    return '<div>' +
      '<button onclick="dcbMobToggle(\'' + id + '\')" class="flex justify-between items-center w-full py-3.5 bg-transparent border-none border-b border-gray-100 cursor-pointer">' +
      '<span class="font-headline font-bold text-[0.9375rem] text-[#0B3D91]">' + label + '</span>' +
      '<span id="arr-' + id + '" class="material-symbols-outlined mat-filled text-[1.2rem] text-[#0B3D91] transition-transform duration-200">arrow_drop_down</span>' +
      '</button>' +
      '<div id="' + id + '" class="hidden py-2 pb-3">' + links + '</div></div>';
  }

  /* ── FOOTER LINK HELPER ──────────────────────────────────── */
  function fl(href, label) {
    return '<a href="' + base + href + '" class="block py-1 text-slate-400 font-body text-sm no-underline hover:text-white transition-colors duration-150">' + label + '</a>';
  }

  /* ── DROPDOWNS DESKTOP ───────────────────────────────────── */
  var ddCaisse = ddPanel(
    ddItem('caisse-enregistreuse/index.html',                    '#E6EEF9','#0B3D91','point_of_sale',  'Toutes nos caisses',              'Vue d\u2019ensemble, tarifs, m\u00e9tiers') +
    ddItem('caisse-enregistreuse/boulangerie/index.html',        '#FEF3C7','#F59E0B','bakery_dining',  'Boulangerie &amp; P\u00e2tisserie','Caisse tactile, gestion stock') +
    ddItem('caisse-enregistreuse/restaurant/index.html',         '#FEE2E2','#EF4444','restaurant',     'Bar, Brasserie &amp; Resto',      'Commande table, ticket rapide') +
    ddItem('caisse-enregistreuse/commerce-de-detail/index.html', '#CCFBF1','#0D9488','storefront',     'Mode &amp; Commerce D\u00e9tail',  'Inventaire, fid\u00e9lit\u00e9, multi-caisse') +
    ddItem('caisse-enregistreuse/coiffure/index.html',           '#F3E8FF','#A855F7','content_cut',    'Coiffure &amp; Beaut\u00e9',       'Rendez-vous, cartes fid\u00e9lit\u00e9') +
    '<div class="grid grid-cols-2 gap-1 mt-1.5 pt-2 border-t border-gray-100">' +
    ddItem('caisse-enregistreuse/borne-de-commande/index.html',  '#E0E7FF','#4F46E5','point_of_sale',  'Borne commande','') +
    ddItem('caisse-enregistreuse/monnayeur/index.html',          '#D1FAE5','#059669','payments',       'Monnayeur auto','') +
    '</div>'
  );

  var ddIT = ddPanel(
    ddItem('maintenance-informatique/index.html',                           '#E6EEF9','#0B3D91','build',          'Toute notre offre IT',           'Vue d\u2019ensemble, services, tarifs') +
    ddItem('maintenance-informatique/infogerance-maintenance/index.html',           '#FEF3C7','#F59E0B','manage_accounts','Infog\u00e9rance et maintenance',            'Technicien attibr\u00e9, co\u00fbt fixe') +
    ddItem('maintenance-informatique/depannage-assistance/index.html',      '#FEE2E2','#EF4444','build',          'D\u00e9pannage et assistance','Intervention &lt;4h sur site') +
    ddItem('maintenance-informatique/cybersecurite-sauvegarde/index.html',             '#CCFBF1','#0D9488','cloud_done',     'Cybers\u00e9curit\u00e9 &amp; sauvegarde',  'Sauvegarde, antivirus, firewall') +
    ddItem('maintenance-informatique/materiel-reseaux/index.html','#E0E7FF','#4F46E5','router',         'Mat\u00e9riel et r\u00e9seaux',     'R\u00e9seaux, postes, serveurs') +
    ddItem('maintenance-informatique/emails-pro-collaboration/index.html',       '#F3E8FF','#A855F7','groups',         'Emails Pro et collaboration',            'Messagerie, visio, partage')
  );

  var ddWeb = ddPanel(
    ddItem('visibilite-web/index.html',                        '#E6EEF9','#0B3D91','language',       'Toute notre offre Web',          'Vue d\u2019ensemble, services') +
    ddItem('visibilite-web/creation-site-internet/index.html', '#F3E8FF','#7C3AED','design_services','Cr\u00e9ation de Site Web',      'Vitrine, e-commerce, sur-mesure') +
    ddItem('visibilite-web/seo-sea-local/index.html',          '#FEE2E2','#EF4444','trending_up',    'SEO &amp; SEA Local',            'R\u00e9f\u00e9rencement Google, ads locaux') +
    ddItem('visibilite-web/hebergement/index.html',            '#CCFBF1','#0D9488','dns',            'H\u00e9bergement',               'Serveur rapide, SSL, mails pro')
  );

  var ddApropos = ddPanel(
    ddItem('notre-adn/index.html', '#E6EEF9','#0B3D91','favorite',   'Notre ADN',     'Nos valeurs, notre histoire') +
    ddItem('blog/index.html',      '#FEF3C7','#F59E0B','article',     'Blog &amp; Actus', 'Conseils, guides, actualit\u00e9s')
  );

  /* ── MOBILE MENU ─────────────────────────────────────────── */
  var mobileMenu =
    '<div id="dcb-mobile-menu" class="hidden lg:hidden absolute top-[76px] left-0 right-0 bg-white border-t border-gray-100 px-5 pb-6 pt-3 shadow-[0_20px_40px_-10px_rgba(7,43,107,0.15)] max-h-[calc(100vh-76px)] overflow-y-auto z-40">' +

    mobSection('dcb-m-caisse','Caisse enregistreuse',
      mobLink('caisse-enregistreuse/index.html',                   'point_of_sale','#0B3D91','Toutes nos caisses') +
      mobLink('caisse-enregistreuse/boulangerie/index.html',       'bakery_dining','#F59E0B','Boulangerie & P\u00e2tisserie') +
      mobLink('caisse-enregistreuse/restaurant/index.html',        'restaurant',   '#EF4444','Bar, Brasserie & Resto') +
      mobLink('caisse-enregistreuse/commerce-de-detail/index.html','storefront',   '#0D9488','Mode & Commerce D\u00e9tail') +
      mobLink('caisse-enregistreuse/coiffure/index.html',          'content_cut',  '#A855F7','Coiffure & Beaut\u00e9') +
      mobLink('caisse-enregistreuse/borne-de-commande/index.html', 'point_of_sale','#4F46E5','Borne de commande') +
      mobLink('caisse-enregistreuse/monnayeur/index.html',         'payments',     '#059669','Monnayeur automatique')
    ) +

    mobSection('dcb-m-it','Informatique',
      mobLink('maintenance-informatique/index.html',                            'hub',           '#0B3D91','Tous nos services IT') +
      mobLink('maintenance-informatique/infogerance-maintenance/index.html',            'manage_accounts','#F59E0B','Infog\u00e9rance et maintenance') +
      mobLink('maintenance-informatique/depannage-assistance/index.html',      'build',         '#EF4444','D\u00e9pannage et assistance') +
      mobLink('maintenance-informatique/cybersecurite-sauvegarde/index.html',             'cloud_done',    '#0D9488','Cybers\u00e9curit\u00e9 & sauvegarde') +
      mobLink('maintenance-informatique/materiel-reseaux/index.html','router',        '#4F46E5','Mat\u00e9riel et r\u00e9seaux') +
      mobLink('maintenance-informatique/emails-pro-collaboration/index.html',       'groups',        '#A855F7','Emails Pro et collaboration')
    ) +

    mobSection('dcb-m-web','Visibilit\u00e9 Web',
      mobLink('visibilite-web/index.html',                        'language',      '#0B3D91','Tous nos services web') +
      mobLink('visibilite-web/creation-site-internet/index.html', 'design_services','#7C3AED','Cr\u00e9ation de Site Web') +
      mobLink('visibilite-web/seo-sea-local/index.html',          'trending_up',   '#EF4444','SEO & SEA Local') +
      mobLink('visibilite-web/hebergement/index.html',            'dns',           '#0D9488','H\u00e9bergement')
    ) +

    mobSection('dcb-m-apropos', 'À propos',
      mobLink('notre-adn/index.html', 'favorite', '#0B3D91', 'Notre ADN') +
      mobLink('blog/index.html',      'article',  '#F59E0B', 'Blog &amp; Actus')
    ) +
    '<a href="' + base + 'contact/index.html" onclick="dcbMobClose()" class="block py-3.5 font-headline font-bold text-[0.9375rem] text-[#0B3D91] no-underline border-b border-gray-100">Contact</a>' +

    '<div class="mt-5 flex flex-col gap-3">' +
      '<a href="tel:0482530510" class="flex items-center justify-center gap-2 py-3 rounded-[0.625rem] bg-[#F0F5FF] font-headline font-bold text-[0.9375rem] text-[#0B3D91] no-underline">' +
        '<span class="material-symbols-outlined mat-filled text-[1.1rem] text-[#F57C00]">call</span>04 82 53 05 10</a>' +
      '<a href="' + base + 'contact/index.html" onclick="dcbMobClose()" class="block text-center py-3.5 rounded-[0.625rem] bg-[#F57C00] text-white font-headline font-bold text-[0.9375rem] no-underline hover:bg-[#e06f00] transition-colors duration-150">Demander un devis</a>' +
    '</div>' +
    '</div>';

  /* ── NAV ACCENT : detection page metier ──────────────────────
     Sur les pages metier (sous-pages caisse/IT/Web avec couleur narration),
     le CTA 'Demander un devis' + l'icone tel prennent la couleur narration.
     Sur les autres pages (hubs, homepage, contact, ADN, blog, legales) :
     reste sur l'orange brand #F57C00. */
  var navAccentMap = {
    'caisse-enregistreuse/boulangerie':       '#F59E0B',
    'caisse-enregistreuse/restaurant':        '#EF4444',
    'caisse-enregistreuse/commerce-de-detail':'#0D9488',
    'caisse-enregistreuse/coiffure':          '#A855F7',
    'caisse-enregistreuse/borne-de-commande': '#4F46E5',
    'caisse-enregistreuse/monnayeur':         '#059669',
    'caisse-enregistreuse/cashmag':           '#F57C00',
    'caisse-enregistreuse/hairnet':           '#c59c45',
    'maintenance-informatique/depannage-assistance':       '#EF4444',
    'maintenance-informatique/cybersecurite-sauvegarde':              '#0D9488',
    'maintenance-informatique/materiel-reseaux': '#4F46E5',
    'maintenance-informatique/emails-pro-collaboration':        '#A855F7',
    'maintenance-informatique/infogerance-maintenance':             '#F59E0B',
    'visibilite-web/creation-site-internet': '#A855F7',
    'visibilite-web/seo-sea-local':          '#EF4444',
    'visibilite-web/hebergement':            '#0D9488'
  };
  var navAccent = '#F57C00';
  (function () {
    var pth = window.location.pathname;
    for (var k in navAccentMap) {
      if (pth.indexOf(k) !== -1) { navAccent = navAccentMap[k]; return; }
    }
  })();

  /* ── NAV ──────────────────────────────────────────────────── */
  var nav =
    '<nav id="dcb-navbar" class="fixed top-0 w-full h-[76px] z-50 bg-white shadow-[4px_4px_0px_0px_rgba(7,43,107,0.04)]">' +
      '<div class="flex justify-between items-center max-w-[80rem] mx-auto px-6 h-full">' +

        '<!-- Left: Logo + Desktop Links -->' +
        '<div class="flex items-center gap-8">' +
          '<a href="' + base + 'index.html" class="no-underline shrink-0"><img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" class="h-10"></a>' +
          '<div class="hidden lg:flex items-center gap-0.5">' +

            '<div class="group relative">' +
              '<a href="' + base + 'caisse-enregistreuse/index.html" class="' + navLinkCls + '">Caisse ' + arrowHtml + '</a>' +
              ddCaisse +
            '</div>' +

            '<div class="group relative">' +
              '<a href="' + base + 'maintenance-informatique/index.html" class="' + navLinkCls + '">Informatique ' + arrowHtml + '</a>' +
              ddIT +
            '</div>' +

            '<div class="group relative">' +
              '<a href="' + base + 'visibilite-web/index.html" class="' + navLinkCls + '">Web ' + arrowHtml + '</a>' +
              ddWeb +
            '</div>' +

            '<div class="group relative">' +
              '<a href="' + base + 'notre-adn/index.html" class="' + navLinkCls + '">À propos ' + arrowHtml + '</a>' +
              ddApropos +
            '</div>' +
            '<a href="' + base + 'contact/index.html" class="font-headline font-bold text-[0.9375rem] tracking-[-0.02em] text-[#0B3D91] no-underline py-2 px-3 rounded-lg transition-colors duration-150 hover:text-[#F57C00]">Contact</a>' +

          '</div>' +
        '</div>' +

        '<!-- Right: Phone + CTA + Burger -->' +
        '<div class="flex items-center gap-5">' +
          '<a href="tel:0482530510" class="hidden xl:flex items-center gap-2 py-2.5 font-headline font-bold text-[0.9375rem] tracking-[-0.02em] text-[#0B3D91] no-underline whitespace-nowrap">' +
            '<span class="material-symbols-outlined mat-filled text-[1.2rem] leading-none" style="color:' + navAccent + '">call</span>04 82 53 05 10</a>' +
          '<a href="' + base + 'contact/index.html" class="hidden min-[480px]:inline-block text-white py-3 px-6 rounded-[14px] font-headline text-[0.9375rem] font-bold no-underline whitespace-nowrap shadow-sm hover:brightness-95 transition-all duration-150" style="background:' + navAccent + '">Demander un devis</a>' +
          '<button id="dcb-burger" onclick="dcbBurgerToggle()" aria-label="Menu" class="flex lg:hidden flex-col justify-center items-center gap-[5px] w-11 h-11 bg-transparent border-none cursor-pointer p-1.5 rounded-lg">' +
            '<span id="dcb-b1" class="block w-[22px] h-[2.5px] bg-[#0B3D91] rounded-sm transition-transform duration-[250ms] origin-center"></span>' +
            '<span id="dcb-b2" class="block w-[22px] h-[2.5px] bg-[#0B3D91] rounded-sm transition-opacity duration-[250ms]"></span>' +
            '<span id="dcb-b3" class="block w-[22px] h-[2.5px] bg-[#0B3D91] rounded-sm transition-transform duration-[250ms] origin-center"></span>' +
          '</button>' +
        '</div>' +

      '</div>' +
      mobileMenu +
    '</nav>';

  /* ── FOOTER ──────────────────────────────────────────────── */
  var footer =
    '<footer id="dcb-footer-desktop" class="bg-[#072B6B] text-white pt-20 pb-10">' +
      '<div class="max-w-[80rem] mx-auto px-6">' +
        '<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 sm:gap-8 lg:gap-14 mb-16">' +

          '<!-- Col 1: Brand -->' +
          '<div>' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" class="h-10 brightness-0 invert mb-4">' +
            '<p class="text-slate-400 font-body text-sm leading-relaxed mb-4">Votre partenaire technologique de proximit\u00e9 pour le commerce et l\u2019entreprise.</p>' +
            '<a href="tel:0482530510" class="inline-flex items-center gap-2 py-2.5 -my-2.5 text-white font-headline font-bold text-[0.9375rem] no-underline mb-6">' +
              '<span class="material-symbols-outlined mat-filled text-[1.1rem] text-[#F57C00]">call</span>04 82 53 05 10</a>' +
            '<a href="mailto:contact@dcb-technologies.fr" class="inline-flex items-center gap-2 py-2.5 -my-2.5 text-slate-400 font-body text-sm no-underline hover:text-white transition-colors duration-150">' +
              '<span class="material-symbols-outlined mat-filled text-base text-slate-400">mail</span>contact@dcb-technologies.fr</a>' +
          '</div>' +

          '<!-- Col 2: Solutions Caisse -->' +
          '<div>' +
            '<h3 class="font-sora font-bold text-base text-white mt-0 mb-4">Solutions Caisse</h3>' +
            fl('caisse-enregistreuse/cashmag/index.html',           'Logiciel CashMag') +
            fl('caisse-enregistreuse/boulangerie/index.html',       'Boulangerie &amp; P\u00e2tisserie') +
            fl('caisse-enregistreuse/restaurant/index.html',        'Bar, Brasserie &amp; Resto') +
            fl('caisse-enregistreuse/commerce-de-detail/index.html','Mode &amp; Commerce D\u00e9tail') +
            fl('caisse-enregistreuse/coiffure/index.html',          'Coiffure &amp; Beaut\u00e9') +
            fl('caisse-enregistreuse/hairnet/index.html',           'Logiciel Hairnet') +
            fl('caisse-enregistreuse/borne-de-commande/index.html', 'Borne de commande') +
            fl('caisse-enregistreuse/monnayeur/index.html',         'Monnayeur automatique') +
          '</div>' +

          '<!-- Col 3: IT & Web -->' +
          '<div>' +
            '<h3 class="font-sora font-bold text-base text-white mt-0 mb-4">IT &amp; Digital</h3>' +
            fl('maintenance-informatique/infogerance-maintenance/index.html',            'Infog\u00e9rance et maintenance') +
            fl('maintenance-informatique/depannage-assistance/index.html',      'D\u00e9pannage et assistance') +
            fl('maintenance-informatique/cybersecurite-sauvegarde/index.html',             'Cybers\u00e9curit\u00e9 &amp; sauvegarde') +
            fl('maintenance-informatique/materiel-reseaux/index.html','Mat\u00e9riel et r\u00e9seaux') +
            fl('maintenance-informatique/emails-pro-collaboration/index.html',       'Emails Pro et collaboration') +
            '<h3 class="font-sora font-bold text-base text-white mt-8 mb-4">Visibilit\u00e9 Web</h3>' +
            fl('visibilite-web/creation-site-internet/index.html', 'Cr\u00e9ation de Site Web') +
            fl('visibilite-web/seo-sea-local/index.html',          'SEO &amp; SEA Local') +
            fl('visibilite-web/hebergement/index.html',            'H\u00e9bergement') +
          '</div>' +

          '<!-- Col 4: Entreprise (Legal -> bottom-bar uniquement) -->' +
          '<div>' +
            '<h3 class="font-sora font-bold text-base text-white mt-0 mb-4">L\u2019Entreprise</h3>' +
            fl('notre-adn/index.html', 'Notre ADN') +
            fl('contact/index.html',   'Contact') +
            fl('blog/index.html',      'Blog &amp; Actus') +
          '</div>' +

        '</div>' +

        '<!-- Bottom bar -->' +
        '<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 flex-wrap">' +
          '<p class="text-slate-500 font-body text-xs">\u00a9 2025 DCB Technologies. Tous droits r\u00e9serv\u00e9s.</p>' +
          '<div class="flex flex-wrap gap-2">' +
            '<a href="' + base + 'mentions-legales/index.html" class="inline-flex items-center px-3 py-2.5 text-slate-400 font-body text-xs no-underline hover:text-white transition-colors duration-150">Mentions L\u00e9gales</a>' +
            '<a href="' + base + 'confidentialite/index.html" class="inline-flex items-center px-3 py-2.5 text-slate-400 font-body text-xs no-underline hover:text-white transition-colors duration-150">Confidentialit\u00e9</a>' +
            '<a href="' + base + 'cgv/index.html" class="inline-flex items-center px-3 py-2.5 text-slate-400 font-body text-xs no-underline hover:text-white transition-colors duration-150">CGV</a>' +
          '</div>' +
        '</div>' +

      '</div>' +
    '</footer>';

  /* ── CSS (injecte une seule fois) ────────────────────────── */
  if (!document.getElementById('dcb-comp-css')) {
    var style = document.createElement('style');
    style.id = 'dcb-comp-css';
    style.textContent =
      '.mat-filled{font-variation-settings:"FILL" 1,"wght" 400,"GRAD" 0,"opsz" 24;}' +
      '#dcb-navbar a{transition:color 0.15s;}' +
      '#dcb-phone-fab{position:fixed;bottom:1.5rem;right:1.5rem;z-index:999;display:none;flex-direction:column;align-items:flex-end;gap:0.5rem;}' +
      '#dcb-phone-fab a{display:flex;align-items:center;gap:0.625rem;background:#F57C00;color:#fff;' +
        'padding:0.875rem 1.25rem;border-radius:3rem;' +
        'box-shadow:0 6px 18px rgba(0,0,0,0.18);' +
        'font-family:"Plus Jakarta Sans","Inter",sans-serif;font-weight:700;font-size:0.9375rem;' +
        'text-decoration:none;white-space:nowrap;transition:transform 0.15s,box-shadow 0.15s;}' +
      '#dcb-phone-fab a:hover{transform:translateY(-1px);box-shadow:0 8px 22px rgba(0,0,0,0.22);}' +
      '@media(max-width:640px){#dcb-phone-fab{display:flex;}}';
    document.head.appendChild(style);
  }

  /* ── FONT ─────────────────────────────────────────────────────
     Plus Jakarta Sans (FAB) auto-hébergée : @font-face dans css/style.css
     (woff2 local ../assets/fonts/). Plus aucune dépendance CDN Google Fonts. */

  /* ── JS HANDLERS ─────────────────────────────────────────── */
  window.dcbBurgerToggle = function () {
    var menu = document.getElementById('dcb-mobile-menu');
    var b1 = document.getElementById('dcb-b1');
    var b2 = document.getElementById('dcb-b2');
    var b3 = document.getElementById('dcb-b3');
    if (!menu) return;
    var open = !menu.classList.contains('hidden');
    menu.classList.toggle('hidden');
    if (b1) {
      b1.style.transform = open ? '' : 'rotate(45deg) translate(5px, 5px)';
      b2.style.opacity = open ? '1' : '0';
      b3.style.transform = open ? '' : 'rotate(-45deg) translate(5px, -5px)';
    }
  };

  window.dcbMobClose = function () {
    var menu = document.getElementById('dcb-mobile-menu');
    if (menu) menu.classList.add('hidden');
    var b1 = document.getElementById('dcb-b1');
    if (b1) {
      b1.style.transform = '';
      document.getElementById('dcb-b2').style.opacity = '1';
      document.getElementById('dcb-b3').style.transform = '';
    }
  };

  window.dcbMobToggle = function (id) {
    var panel = document.getElementById(id);
    var arrow = document.getElementById('arr-' + id);
    if (!panel) return;
    var open = !panel.classList.contains('hidden');
    panel.classList.toggle('hidden');
    if (arrow) arrow.style.transform = open ? '' : 'rotate(180deg)';
  };

  /* ── INJECTION ───────────────────────────────────────────── */
  var navEl = document.getElementById('dcb-nav');
  if (navEl) navEl.outerHTML = nav;

  var footerEl = document.getElementById('dcb-footer');
  if (footerEl) footerEl.outerHTML = footer;

  /* ── DROPDOWNS NAV : click toggle (fallback hover, supporte touch + edge cases) ──
     Style inline pour activer/desactiver l'etat dd-open sans toucher au CSS Tailwind. */
  (function () {
    var navbar = document.getElementById('dcb-navbar');
    if (!navbar) return;
    var openClass = 'dd-open';
    function closeAll() {
      navbar.querySelectorAll('.group.' + openClass).forEach(function (g) {
        g.classList.remove(openClass);
        var pnl = g.querySelector('.dcb-dd');
        if (pnl) { pnl.style.opacity = ''; pnl.style.pointerEvents = ''; pnl.style.transform = ''; }
      });
    }
    navbar.querySelectorAll('.group').forEach(function (grp) {
      var link = grp.querySelector('a');
      if (!link) return;
      link.addEventListener('click', function (e) {
        var pnl = grp.querySelector('.dcb-dd');
        if (!pnl) return;
        var isOpen = grp.classList.contains(openClass);
        closeAll();
        if (!isOpen) {
          e.preventDefault();
          grp.classList.add(openClass);
          pnl.style.opacity = '1';
          pnl.style.pointerEvents = 'auto';
          pnl.style.transform = 'translate(-50%, 0)';
        }
      });
    });
    document.addEventListener('click', function (e) {
      if (!e.target.closest('#dcb-navbar')) closeAll();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeAll();
    });
  })();

  /* ── INJECTION M-SHELL ─────────────────────────────────────────
     Pages avec .m-shell : injecte le frame mobile (header, menu,
     FAB, bottom-sheet, footer) via des placeholders ID.
     - data-metier sur .m-shell pré-sélectionne le métier dans la sheet
     - mobile.js est chargé en fin d'injection, uniquement sur mobile
  ─────────────────────────────────────────────────────────────── */
  (function () {
    var ms = document.querySelector('.m-shell');
    if (!ms) return;

    var metier = ms.getAttribute('data-metier') || '';

    /* aria-current detection */
    var pth = window.location.pathname;
    function msAct(kw) { return pth.indexOf(kw) !== -1 ? ' aria-current="page"' : ''; }

    /* ── Header ── */
    var msHead =
      '<header class="top" id="m-top">' +
        '<div class="lg">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="100" height="28">' +
          '</a>' +
        '</div>' +
        '<div class="grp">' +
          '<button id="btnMenu" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="menu">' +
            '<span class="material-symbols-outlined">menu</span>' +
          '</button>' +
        '</div>' +
      '</header>';

    /* ── Menu : helpers accordéon ── */
    function msGrp(kw, icon, iconBg, label, links) {
      var isOpen = pth.indexOf(kw) !== -1;
      return '<div class="mgrp' + (isOpen ? ' open' : '') + '">' +
        '<div class="mgrp-hd">' +
          '<span class="mgrp-ic" style="background:' + iconBg + '" aria-hidden="true">' +
            '<span class="material-symbols-outlined">' + icon + '</span>' +
          '</span>' +
          '<a href="' + base + kw + '/index.html" class="mgrp-lbl">' + label + '</a>' +
          '<button class="mgrp-tog" type="button" aria-label="Afficher les sous-pages de ' + label + '">' +
            '<span class="material-symbols-outlined ch" aria-hidden="true">expand_more</span>' +
          '</button>' +
        '</div>' +
        '<ul class="msub">' + links + '</ul>' +
      '</div>';
    }
    function msSub(href, icon, color, label) {
      var active = pth.indexOf(href.replace('index.html', '')) !== -1 && pth.indexOf(href.replace('index.html', '')) > pth.indexOf('/') + 1;
      return '<li><a href="' + base + href + '"' + (active ? ' aria-current="page"' : '') + '>' +
        '<span class="material-symbols-outlined msub-ic" style="color:' + color + '" aria-hidden="true">' + icon + '</span>' +
        label +
      '</a></li>';
    }

    /* ── Menu plein écran ── */
    var msMenu =
      '<div class="menu" id="menu" role="dialog" aria-modal="true" aria-labelledby="menu-title" aria-hidden="true">' +
        '<h2 id="menu-title" class="sr-only" tabindex="-1">Menu principal</h2>' +
        '<div class="mtop">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="90" height="24">' +
          '</a>' +
          '<button class="x" id="btnClose" aria-label="Fermer le menu">' +
            '<span class="material-symbols-outlined">close</span>' +
          '</button>' +
        '</div>' +
        '<nav aria-label="Menu principal mobile">' +
          msGrp('caisse-enregistreuse', 'point_of_sale', '#0D9488', 'Caisse enregistreuse',
            msSub('caisse-enregistreuse/boulangerie/index.html',        'bakery_dining', '#F59E0B', 'Boulangerie &amp; Pâtisserie') +
            msSub('caisse-enregistreuse/restaurant/index.html',         'restaurant',    '#EF4444', 'Bar, Brasserie &amp; Resto') +
            msSub('caisse-enregistreuse/commerce-de-detail/index.html', 'storefront',    '#0D9488', 'Mode &amp; Commerce détail') +
            msSub('caisse-enregistreuse/coiffure/index.html',           'content_cut',   '#A855F7', 'Coiffure &amp; Beauté') +
            msSub('caisse-enregistreuse/borne-de-commande/index.html',  'point_of_sale', '#4F46E5', 'Borne de commande') +
            msSub('caisse-enregistreuse/monnayeur/index.html',          'payments',      '#059669', 'Monnayeur automatique')
          ) +
          msGrp('maintenance-informatique', 'build', '#345BAF', 'Informatique',
            msSub('maintenance-informatique/infogerance-maintenance/index.html',            'manage_accounts','#F59E0B', 'Infogérance et maintenance') +
            msSub('maintenance-informatique/depannage-assistance/index.html',      'build',          '#EF4444', 'Dépannage et assistance') +
            msSub('maintenance-informatique/cybersecurite-sauvegarde/index.html',             'cloud_done',     '#0D9488', 'Cybersécurité &amp; sauvegarde') +
            msSub('maintenance-informatique/materiel-reseaux/index.html','router',         '#4F46E5', 'Matériel et réseaux') +
            msSub('maintenance-informatique/emails-pro-collaboration/index.html',       'groups',         '#A855F7', 'Emails Pro et collaboration')
          ) +
          msGrp('visibilite-web', 'language', '#F57C00', 'Visibilité web',
            msSub('visibilite-web/creation-site-internet/index.html', 'design_services', '#C084FC', 'Création de site web') +
            msSub('visibilite-web/seo-sea-local/index.html',          'trending_up',     '#F87171', 'SEO &amp; SEA local') +
            msSub('visibilite-web/hebergement/index.html',            'dns',             '#2DD4BF', 'Hébergement')
          ) +
          '<div class="mutil">' +
            '<a href="' + base + 'notre-adn/index.html"' + msAct('notre-adn') + '>Notre ADN</a>' +
            '<span class="mdot" aria-hidden="true">·</span>' +
            '<a href="' + base + 'blog/index.html"' + msAct('blog') + '>Blog</a>' +
            '<span class="mdot" aria-hidden="true">·</span>' +
            '<a href="' + base + 'contact/index.html"' + msAct('contact') + '>Contact</a>' +
          '</div>' +
        '</nav>' +
        '<div class="mbot">' +
          '<button class="btn btn-pri" data-sheet>Devis gratuit<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>' +
          '<a href="tel:0482530510" class="menu-tel" aria-label="Appeler DCB Technologies au 04 82 53 05 10">' +
            '<span class="material-symbols-outlined" style="font-variation-settings:\'FILL\' 1" aria-hidden="true">call</span>' +
            '04 82 53 05 10' +
          '</a>' +
        '</div>' +
      '</div>';

    /* ── Sheet : bouton segment métier ── */
    function msSegBtn(m, icon, label) {
      return '<button type="button" data-metier="' + m + '"' + (metier === m ? ' class="on"' : '') +
        ' role="radio" aria-checked="' + (metier === m ? 'true' : 'false') + '">' +
        '<span class="material-symbols-outlined" aria-hidden="true">' + icon + '</span>' + label + '</button>';
    }

    /* ── Bottom-sheet devis ── */
    var msSheet =
      '<div class="sheet-bg" id="sheetbg"></div>' +
      '<div class="sheet" id="sheet" role="dialog" aria-modal="true" aria-labelledby="sheet-title" aria-hidden="true">' +
        '<div class="grab" aria-hidden="true"></div>' +
        '<button type="button" id="btnCloseSheet" class="sheet-close" aria-label="Fermer">' +
          '<span class="material-symbols-outlined" aria-hidden="true">close</span>' +
        '</button>' +
        '<h3 id="sheet-title" tabindex="-1">Demander un devis</h3>' +
        '<p class="sub">Réponse d\'un technicien sous 2h ouvrées. Sans engagement.</p>' +
        '<form action="' + base + 'send.php" method="post">' +
          '<input type="text" name="hp_website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px;opacity:0">' +
          '<input type="hidden" name="source" value="sheet-devis">' +
          '<input type="hidden" name="metier" id="sheet-metier">' +
          '<input type="hidden" name="page" id="sheet-page">' +
          '<fieldset class="field">' +
            '<legend class="field-lbl">Mon métier</legend>' +
            '<div class="seg">' +
              msSegBtn('boulangerie', 'bakery_dining', 'Boulangerie') +
              msSegBtn('restaurant', 'restaurant', 'Resto') +
              msSegBtn('commerce', 'storefront', 'Commerce') +
              msSegBtn('beaute', 'content_cut', 'Beauté') +
            '</div>' +
          '</fieldset>' +
          '<div class="field" id="field-formule">' +
            '<label class="field-lbl" id="lbl-formule">Formule souhaitée</label>' +
            '<div class="csel" id="csel-formule" role="combobox" aria-labelledby="lbl-formule" aria-expanded="false" aria-haspopup="listbox" tabindex="0">' +
              '<span class="csel-val placeholder" id="csel-formule-val">Choisissez une formule</span>' +
              '<span class="material-symbols-outlined csel-arr" aria-hidden="true">expand_more</span>' +
              '<ul class="csel-list" role="listbox" id="csel-formule-list"></ul>' +
            '</div>' +
            '<input type="hidden" name="formule" id="sheet-formule">' +
          '</div>' +
          '<div class="field">' +
            '<label for="sheet-prenom">Prénom</label>' +
            '<input id="sheet-prenom" name="prenom" type="text" placeholder="Marie" autocomplete="given-name" required>' +
          '</div>' +
          '<div class="field">' +
            '<label for="sheet-tel">Téléphone</label>' +
            '<input id="sheet-tel" name="telephone" type="tel" inputmode="tel" placeholder="06 12 34 56 78" autocomplete="tel" required>' +
          '</div>' +
          '<div class="field">' +
            '<label for="sheet-email">Email</label>' +
            '<input id="sheet-email" name="email" type="email" inputmode="email" placeholder="marie@moncommerce.fr" autocomplete="email" required>' +
          '</div>' +
          '<button type="submit" class="btn btn-pri" style="width:100%;margin-top:6px">Envoyer ma demande<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></button>' +
          '<p id="sheet-status" aria-live="polite" aria-atomic="true" class="sr-only"></p>' +
        '</form>' +
      '</div>';

    /* ── FAB sticky ──
       Silo caisse : bouton ouvre la bottom-sheet devis intégrée.
       Toutes les autres pages : lien direct vers la page contact. */
    var isCaisse = pth.indexOf('/caisse-enregistreuse/') !== -1;
    var msFab =
      '<div class="fab hidden" role="group" aria-label="Actions rapides">' +
        (isCaisse
          ? '<button class="b1" id="fabDevis" aria-label="Demander un devis">' +
              'Demander un devis<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>' +
            '</button>'
          : '<a class="b1" href="' + base + 'contact/index.html" aria-label="Demander un devis">' +
              'Demander un devis<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>' +
            '</a>') +
        '<a class="b2" href="tel:0482530510" aria-label="Appeler DCB Technologies au 04 82 53 05 10">' +
          '<span class="material-symbols-outlined" style="font-variation-settings:\'FILL\' 1">call</span>' +
        '</a>' +
      '</div>';

    /* ── Footer accordéon ── */
    var msFooter =
      '<footer class="footer" id="dcb-mobile-footer">' +
        '<div class="brand-row">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="100" height="28">' +
          '</a>' +
        '</div>' +
        '<p class="tag">Votre partenaire technologique de proximité pour le commerce et l\'entreprise.</p>' +
        '<div class="contact">' +
          '<a href="tel:0482530510" class="tel" aria-label="Appeler DCB Technologies au 04 82 53 05 10">' +
            '<span class="material-symbols-outlined" aria-hidden="true" style="font-variation-settings:\'FILL\' 1">call</span>' +
            '04 82 53 05 10' +
          '</a>' +
          '<a href="mailto:contact@dcb-technologies.fr" class="em" aria-label="Envoyer un email à contact@dcb-technologies.fr">' +
            '<span class="material-symbols-outlined" aria-hidden="true" style="font-variation-settings:\'FILL\' 1">mail</span>' +
            'contact@dcb-technologies.fr' +
          '</a>' +
        '</div>' +
        '<details>' +
          '<summary>Solutions Caisse<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></summary>' +
          '<ul>' +
            '<li><a href="' + base + 'caisse-enregistreuse/boulangerie/index.html">Boulangerie &amp; Pâtisserie</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/restaurant/index.html">Bar, Brasserie &amp; Resto</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/commerce-de-detail/index.html">Mode &amp; Commerce détail</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/coiffure/index.html">Coiffure &amp; Beauté</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/borne-de-commande/index.html">Borne de commande</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/monnayeur/index.html">Monnayeur automatique</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/cashmag/index.html">Logiciel CashMag</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>IT &amp; Digital<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></summary>' +
          '<ul>' +
            '<li><a href="' + base + 'maintenance-informatique/depannage-assistance/index.html">Dépannage et assistance</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/cybersecurite-sauvegarde/index.html">Cybersécurité &amp; sauvegarde</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/materiel-reseaux/index.html">Matériel et réseaux</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/emails-pro-collaboration/index.html">Emails Pro et collaboration</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>Visibilité Web<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></summary>' +
          '<ul>' +
            '<li><a href="' + base + 'visibilite-web/creation-site-internet/index.html">Création de site web</a></li>' +
            '<li><a href="' + base + 'visibilite-web/seo-sea-local/index.html">SEO &amp; SEA local</a></li>' +
            '<li><a href="' + base + 'visibilite-web/hebergement/index.html">Hébergement</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>L\'entreprise<span class="material-symbols-outlined" aria-hidden="true">expand_more</span></summary>' +
          '<ul>' +
            '<li><a href="' + base + 'notre-adn/index.html">Notre ADN</a></li>' +
            '<li><a href="' + base + 'contact/index.html">Contact</a></li>' +
            '<li><a href="' + base + 'blog/index.html">Blog &amp; Actus</a></li>' +
          '</ul>' +
        '</details>' +
        '<div class="bottom">' +
          '<div class="cp">© 2026 DCB Technologies. Tous droits réservés.</div>' +
          '<div class="lg">' +
            '<a href="' + base + 'mentions-legales/index.html">Mentions légales</a>' +
            '<a href="' + base + 'confidentialite/index.html">Confidentialité</a>' +
            '<a href="' + base + 'cgv/index.html">CGV</a>' +
          '</div>' +
        '</div>' +
      '</footer>';

    /* ── Injection via placeholders ── */
    var hPh = document.getElementById('m-nav');
    if (hPh) hPh.outerHTML = msHead;

    var menuPh = document.getElementById('m-menu');
    if (menuPh) {
      menuPh.outerHTML = msMenu;
      /* Wire accordéon : toggle .open sur .mgrp au clic du bouton chevron */
      document.querySelectorAll('.mgrp-tog').forEach(function (btn) {
        btn.addEventListener('click', function () {
          var grp = btn.closest('.mgrp');
          if (grp) grp.classList.toggle('open');
        });
      });
    }

    var sheetPh = document.getElementById('m-sheet');
    if (sheetPh) sheetPh.outerHTML = msSheet;

    /* ── Patch borne + monnayeur : remplace "Mon métier" par un nudge appel ── */
    if (metier === 'borne' || metier === 'monnayeur') {
      var bFieldset = document.querySelector('.sheet fieldset');
      if (bFieldset) {
        var bNudge = document.createElement('a');
        bNudge.href = 'tel:0482530510';
        bNudge.setAttribute('aria-label', 'Appeler DCB Technologies au 04 82 53 05 10');
        bNudge.className = metier === 'monnayeur' ? 'sheet-monn-call' : 'sheet-borne-call';
        bNudge.innerHTML =
          '<span class="material-symbols-outlined bc-ic" aria-hidden="true">call</span>' +
          '<div class="bc-txt">' +
            '<strong>04 82 53 05 10</strong>' +
            '<span class="bc-sub">Réponse immédiate · lun-ven 8h30-18h30</span>' +
          '</div>' +
          '<span class="material-symbols-outlined bc-arr" aria-hidden="true">chevron_right</span>';
        var bSep = document.createElement('p');
        bSep.className = 'sheet-borne-sep';
        bSep.textContent = 'ou laissez votre numéro pour être rappelé';
        bFieldset.parentNode.insertBefore(bNudge, bFieldset);
        bFieldset.parentNode.insertBefore(bSep, bFieldset);
        bFieldset.style.display = 'none';
      }
    }

    var fabPh = document.getElementById('m-fab');
    if (fabPh) fabPh.outerHTML = msFab;

    var footerPh = document.getElementById('m-footer');
    if (footerPh) footerPh.outerHTML = msFooter;

    /* ── Packs par métier — select dynamique dans le form ── */
    var PACKS = {
      boulangerie: ['Essentiel · 59 €/mois', 'Pack Boulangerie · 77 €/mois', 'Sur mesure'],
      restaurant:  ['Pack Comptoir · 77 €/mois', 'Pack Service · 114 €/mois', 'Sur mesure'],
      commerce:    ['Pack Boutique · 83 €/mois', 'Pack Commerce · 143 €/mois', 'Sur mesure'],
      beaute:      ['Pack Fauteuil · 115 €/mois', 'Pack Salon · 117 €/mois', 'Sur mesure'],
      borne:       ['Borne 16 pouces · 127 €/mois', 'Borne 32 pouces · 145 €/mois', 'Sur mesure'],
      monnayeur:   ['Monnayeur F26 Metal · 258 €/mois', 'Monnayeur DESKTOP Metal · 339 €/mois', 'Sur mesure']
    };

    /* ── Custom select helpers ── */
    function cselSetValue(v) {
      var hidden = document.getElementById('sheet-formule');
      var valEl  = document.getElementById('csel-formule-val');
      var list   = document.getElementById('csel-formule-list');
      if (hidden) hidden.value = v;
      if (valEl) {
        valEl.textContent = v || 'Choisissez une formule';
        valEl.classList.toggle('placeholder', !v);
      }
      if (list) {
        Array.from(list.children).forEach(function (li) {
          li.setAttribute('aria-selected', li.textContent === v ? 'true' : 'false');
        });
      }
    }

    function cselClose() {
      var csel = document.getElementById('csel-formule');
      if (csel) { csel.classList.remove('open'); csel.setAttribute('aria-expanded', 'false'); }
    }

    function updatePacks(m, preselect) {
      var list = document.getElementById('csel-formule-list');
      if (!list) return;
      var packs = PACKS[m] || [];
      list.innerHTML = '';
      packs.forEach(function (p) {
        var li = document.createElement('li');
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', 'false');
        li.textContent = p;
        li.addEventListener('click', function (e) {
          e.stopPropagation();
          cselSetValue(p);
          cselClose();
        });
        list.appendChild(li);
      });
      cselSetValue(preselect || '');
    }

    /* ── Sync de l'etat metier dans le sheet (segment .on + couleur scoped + packs) ──
       Si m === metier (page courante), on enleve l'override data-form-metier pour que le
       sheet herite de la couleur de la page. Sinon on pose l'override pour repeindre
       UNIQUEMENT le formulaire via .sheet[data-form-metier="X"] dans mobile.css. */
    function setSheetMetier(m, preselect) {
      updatePacks(m, preselect);
      document.querySelectorAll('.seg button[data-metier]').forEach(function (b) {
        var active = (b.getAttribute('data-metier') === m);
        b.classList.toggle('on', active);
        b.setAttribute('aria-checked', active ? 'true' : 'false');
      });
      var sheetEl = document.getElementById('sheet');
      if (sheetEl) {
        if (m === metier) {
          sheetEl.removeAttribute('data-form-metier');
        } else {
          sheetEl.setAttribute('data-form-metier', m);
        }
      }
    }

    /* Init avec le metier de la page courante */
    updatePacks(metier);

    /* ── Pre-selection pack via data-plan (borne, monnayeur, etc.) ──
       On RESET d'abord au metier de la page (segment .on + couleur sheet) pour eviter
       que l'etat persiste si l'utilisateur avait change de metier dans une ouverture
       precedente du sheet. Puis on applique le pack preselectionne. */
    document.querySelectorAll('[data-sheet][data-plan]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var plan = btn.getAttribute('data-plan');
        setSheetMetier(metier, plan || '');
      });
    });

    /* Mise a jour quand l'utilisateur change de metier dans le formulaire (packs + theme couleur scoped). */
    document.querySelectorAll('.seg button[data-metier]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setSheetMetier(btn.getAttribute('data-metier'));
      });
    });

    /* Expose globalement pour que mobile.js openSheet() puisse reset le sheet a chaque ouverture */
    window.dcbResetSheetMetier = function () { setSheetMetier(metier); };

    /* ── Wire custom select toggle ── */
    var cselEl = document.getElementById('csel-formule');
    if (cselEl) {
      cselEl.addEventListener('click', function () {
        var isOpen = cselEl.classList.contains('open');
        if (isOpen) { cselClose(); } else {
          cselEl.classList.add('open');
          cselEl.setAttribute('aria-expanded', 'true');
        }
      });
      /* Ferme si clic en dehors */
      document.addEventListener('click', function (e) {
        if (cselEl && !cselEl.contains(e.target)) cselClose();
      }, true);
      /* Clavier */
      cselEl.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); cselEl.click(); }
        if (e.key === 'Escape') cselClose();
      });
    }

    /* Expose pour usage page-spécifique (pré-sélection pack via data-plan) */
    window.dcbUpdatePacks = updatePacks;

    /* ── Charge mobile.js si viewport mobile ── */
    if (window.matchMedia('(max-width:640px)').matches) {
      var mjs = document.createElement('script');
      mjs.src = base + 'm/js/mobile.js?v=8';
      document.body.appendChild(mjs);
    }
  })();

  /* ── FIL D'ARIANE VISUEL ─────────────────────────────────
     Ajouter data-breadcrumb="Accueil|/,Caisse|/caisse-enregistreuse/,CashMag"
     sur <main> pour activer le breadcrumb visuel.
     Le dernier item (sans URL) est la page courante.
  ───────────────────────────────────────────────────────── */
  var mainEl = document.querySelector('main[data-breadcrumb]');
  if (mainEl) {
    var raw = mainEl.getAttribute('data-breadcrumb');
    var items = raw.split(',');
    var html = '<nav aria-label="Fil d\'Ariane" class="max-w-7xl mx-auto px-6 py-3"><ol class="flex flex-wrap items-center gap-1.5 text-sm text-slate-400">';
    items.forEach(function (item, i) {
      var parts = item.split('|');
      var label = parts[0].trim();
      var url = parts[1] ? parts[1].trim() : null;
      if (i > 0) html += '<li class="flex items-center gap-1.5"><span class="material-symbols-outlined text-xs">chevron_right</span></li>';
      if (url && i < items.length - 1) {
        html += '<li><a href="' + base + url.replace(/^\//, '') + 'index.html" class="hover:text-[#0B3D91] transition-colors">' + label + '</a></li>';
      } else {
        html += '<li class="text-[#0B3D91] font-medium">' + label + '</li>';
      }
    });
    html += '</ol></nav>';
    mainEl.insertAdjacentHTML('afterbegin', html);
  }

  /* FAB telephone sticky mobile */
  if (!document.getElementById('dcb-phone-fab')) {
    var fab = document.createElement('div');
    fab.id = 'dcb-phone-fab';
    fab.innerHTML =
      '<a href="tel:0482530510">' +
      '<span class="material-symbols-outlined mat-filled" style="font-size:1.25rem;line-height:1;">call</span>' +
      '04 82 53 05 10</a>';
    document.body.appendChild(fab);
  }

  /* Ferme le menu mobile si on resize vers desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) dcbMobClose();
  });

  /* ── CARROUSEL TEMOIGNAGES ─────────────────────────────────
     Active automatiquement tout element [data-dcb-carousel].
     Structure attendue :
       <div data-dcb-carousel>
         <div data-dcb-track> ... cards ... </div>
         <button data-dcb-prev></button>
         <button data-dcb-next></button>
         <div data-dcb-dots></div>
       </div>
  ───────────────────────────────────────────────────────────── */
  function initCarousels() {
    var carousels = document.querySelectorAll('[data-dcb-carousel]');
    carousels.forEach(function (root) {
      var track = root.querySelector('[data-dcb-track]');
      var prev  = root.querySelector('[data-dcb-prev]');
      var next  = root.querySelector('[data-dcb-next]');
      var dots  = root.querySelector('[data-dcb-dots]');
      if (!track) return;
      var slides = track.children;
      if (slides.length === 0) return;

      function visibleCount() { return window.innerWidth >= 768 ? 2 : 1; }
      function pageCount() { return Math.max(1, slides.length - visibleCount() + 1); }
      function slideWidth() { return slides[0].getBoundingClientRect().width + 24; /* gap-6 = 1.5rem */ }

      function goTo(i) {
        var max = pageCount() - 1;
        if (i < 0) i = 0;
        if (i > max) i = max;
        track.scrollTo({ left: i * slideWidth(), behavior: 'smooth' });
      }

      function currentIndex() {
        if (!slides[0]) return 0;
        return Math.round(track.scrollLeft / slideWidth());
      }

      function buildDots() {
        if (!dots) return;
        dots.innerHTML = '';
        var n = pageCount();
        for (var i = 0; i < n; i++) {
          var b = document.createElement('button');
          b.className = 'dcb-dot';
          b.type = 'button';
          b.setAttribute('aria-label', 'Aller au témoignage ' + (i + 1));
          (function (idx) { b.addEventListener('click', function () { goTo(idx); }); })(i);
          dots.appendChild(b);
        }
        updateDots();
      }

      function updateDots() {
        if (!dots) return;
        var idx = currentIndex();
        Array.prototype.forEach.call(dots.children, function (d, i) {
          d.classList.toggle('is-active', i === idx);
        });
      }

      if (prev) prev.addEventListener('click', function () { goTo(currentIndex() - 1); });
      if (next) next.addEventListener('click', function () { goTo(currentIndex() + 1); });
      track.addEventListener('scroll', updateDots, { passive: true });
      window.addEventListener('resize', buildDots);
      buildDots();
    });
  }

  /* CSS minimal du carrousel (injecte une seule fois) */
  if (!document.getElementById('dcb-carousel-css')) {
    var carouselStyle = document.createElement('style');
    carouselStyle.id = 'dcb-carousel-css';
    carouselStyle.textContent =
      '[data-dcb-track]{display:flex;gap:1.5rem;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-ms-overflow-style:none;padding-bottom:0.5rem;}' +
      '[data-dcb-track]::-webkit-scrollbar{display:none;}' +
      '[data-dcb-track]>*{flex:0 0 100%;scroll-snap-align:start;}' +
      '@media(min-width:768px){[data-dcb-track]>*{flex:0 0 calc(50% - 0.75rem);}}' +
      '.dcb-carousel-controls{display:flex;align-items:center;justify-content:center;gap:1.25rem;margin-top:2rem;}' +
      '.dcb-carousel-controls button[data-dcb-prev],.dcb-carousel-controls button[data-dcb-next]{' +
        'width:44px;height:44px;border-radius:50%;background:#fff;border:1px solid #E5E7EB;' +
        'display:flex;align-items:center;justify-content:center;cursor:pointer;' +
        'box-shadow:0 4px 12px rgba(11,61,145,0.08);transition:all 0.18s;color:#0B3D91;}' +
      '.dcb-carousel-controls button[data-dcb-prev]:hover,.dcb-carousel-controls button[data-dcb-next]:hover{' +
        'background:#0B3D91;color:#fff;transform:translateY(-1px);box-shadow:0 6px 16px rgba(11,61,145,0.18);}' +
      '[data-dcb-dots]{display:flex;gap:0.125rem;align-items:center;}' +
      '.dcb-dot{width:44px;height:44px;border-radius:50%;background:transparent;border:none;cursor:pointer;padding:0;display:inline-flex;align-items:center;justify-content:center;position:relative;}' +
      '.dcb-dot::before{content:"";display:block;width:8px;height:8px;border-radius:50%;background:#CBD5E0;transition:all 0.18s;}' +
      '.dcb-dot:hover::before{background:#94A3B8;}' +
      '.dcb-dot.is-active::before{background:#F57C00;width:24px;border-radius:4px;}';
    document.head.appendChild(carouselStyle);
  }

  /* Init au load */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCarousels);
  } else {
    initCarousels();
  }

  /* ─────────────────────────────────────────────────────────────
     DCB SCROLL REVEAL — IntersectionObserver
     Cherche les .dcb-reveal et .dcb-stagger, les révèle au scroll
     ───────────────────────────────────────────────────────────── */
  function initScrollReveal() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var targets = document.querySelectorAll('.dcb-reveal, .dcb-stagger');
    if (!targets.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      /* Fallback : tout visible immédiatement */
      targets.forEach(function(el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    targets.forEach(function(el) { observer.observe(el); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initScrollReveal);
  } else {
    initScrollReveal();
  }

  /* ─────────────────────────────────────────────────────────────
     DCB COUNTERS — anime les chiffres de 0 → data-target au reveal
     Usage : <span class="dcb-counter" data-target="95" data-suffix="%">0</span>
     ───────────────────────────────────────────────────────────── */
  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-target')) || 0;
    var duration = parseInt(el.getAttribute('data-duration') || '1400', 10);
    var prefix = el.getAttribute('data-prefix') || '';
    var suffix = el.getAttribute('data-suffix') || '';
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var padZero = el.hasAttribute('data-pad-zero');
    var startTime = null;

    function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }

    function step(ts) {
      if (!startTime) startTime = ts;
      var progress = Math.min((ts - startTime) / duration, 1);
      var eased = easeOutCubic(progress);
      var value = target * eased;
      var display = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
      if (padZero && display.length < String(Math.round(target)).length + 1) {
        display = display.padStart(2, '0');
      }
      el.textContent = prefix + display + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var counters = document.querySelectorAll('.dcb-counter[data-target]');
    if (!counters.length) return;

    if (reducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach(function(el) {
        var t = el.getAttribute('data-target');
        var prefix = el.getAttribute('data-prefix') || '';
        var suffix = el.getAttribute('data-suffix') || '';
        el.textContent = prefix + t + suffix;
      });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(function(el) { observer.observe(el); });
  }

  /* ─────────────────────────────────────────────────────────────
     DCB PARALLAX — translation douce sur le scroll
     Usage : <div class="dcb-parallax"><div class="dcb-parallax-layer" data-speed="0.3">...bg</div></div>
     ───────────────────────────────────────────────────────────── */
  function initParallax() {
    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    var layers = document.querySelectorAll('.dcb-parallax-layer');
    if (!layers.length) return;

    var rafId = null;
    function update() {
      layers.forEach(function(layer) {
        var parent = layer.closest('.dcb-parallax');
        if (!parent) return;
        var rect = parent.getBoundingClientRect();
        var vh = window.innerHeight;
        /* Parent hors écran : pas de maj */
        if (rect.bottom < 0 || rect.top > vh) return;
        var speed = parseFloat(layer.getAttribute('data-speed') || '0.3');
        /* Offset relatif : 0 quand parent haut = haut viewport, augmente au scroll */
        var offset = (rect.top - vh) * speed;
        layer.style.transform = 'translate3d(0,' + offset + 'px,0)';
      });
      rafId = null;
    }
    function onScroll() {
      if (rafId) return;
      rafId = requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      initCounters();
      initParallax();
    });
  } else {
    initCounters();
    initParallax();
  }

  /* ── MOBILE FRAME GLOBAL — nav + footer pour pages sans .m-shell ──
     Injecte le header mobile, le menu plein écran, le FAB et le footer
     accordéon sur toutes les pages qui n'ont pas encore de .m-shell.
     Utilise mobile-global.css (styles frame uniquement, sans resets globaux).
  ─────────────────────────────────────────────────────────────────── */
  if (window.innerWidth <= 640 && !document.querySelector('.m-shell')) {

    /* 1. CSS frame mobile */
    var mgl = document.createElement('link');
    mgl.rel = 'stylesheet';
    mgl.href = base + 'm/css/mobile-global.css?v=4';
    mgl.media = 'screen and (max-width:640px)';
    document.head.appendChild(mgl);

    /* 2. Ajuste le padding-top du <main> (compense la nav fixe mobile) */
    var mainTag = document.querySelector('main');
    if (mainTag) {
      mainTag.style.paddingTop = '72px';
    }

    /* 3. Active page detection pour aria-current */
    var pth = window.location.pathname;
    function mAct(kw) {
      return pth.indexOf(kw) !== -1 ? ' aria-current="page"' : '';
    }

    /* 4. Skip link + progress bar + header .top */
    var mHead =
      '<a class="skip-link" href="#main-content">Aller au contenu principal</a>' +
      '<div class="progress" aria-hidden="true"><span id="m-pg"></span></div>' +
      '<header class="top" id="m-top">' +
        '<div class="lg">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="100" height="28">' +
          '</a>' +
        '</div>' +
        '<div class="grp">' +
          '<button id="btnMenu" aria-label="Ouvrir le menu" aria-expanded="false" aria-controls="menu">' +
            '<span class="material-symbols-outlined">menu</span>' +
          '</button>' +
        '</div>' +
      '</header>';

    /* 5. Menu plein écran */
    var mMenu =
      '<div class="menu" id="menu" role="dialog" aria-modal="true"' +
          ' aria-labelledby="menu-title" aria-hidden="true">' +
        '<h2 id="menu-title" class="sr-only" tabindex="-1">Menu principal</h2>' +
        '<div class="mtop">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="90" height="24">' +
          '</a>' +
          '<button class="x" id="btnClose" aria-label="Fermer le menu">' +
            '<span class="material-symbols-outlined">close</span>' +
          '</button>' +
        '</div>' +
        '<nav aria-label="Menu principal mobile">' +
          '<a href="' + base + 'caisse-enregistreuse/index.html"' + mAct('caisse-enregistreuse') + '>' +
            'Caisse enregistreuse<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
          '<a href="' + base + 'maintenance-informatique/index.html"' + mAct('maintenance-informatique') + '>' +
            'Maintenance informatique<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
          '<a href="' + base + 'visibilite-web/index.html"' + mAct('visibilite-web') + '>' +
            'Visibilité web<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
          '<a href="' + base + 'notre-adn/index.html"' + mAct('notre-adn') + '>' +
            'Notre ADN<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
          '<a href="' + base + 'blog/index.html"' + mAct('blog') + '>' +
            'Blog<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
          '<a href="' + base + 'contact/index.html"' + mAct('contact') + '>' +
            'Contact<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span></a>' +
        '</nav>' +
        '<div class="mbot">' +
          '<a href="tel:0482530510" class="menu-tel"' +
              ' aria-label="Appeler DCB Technologies au 04 82 53 05 10">' +
            '<span class="material-symbols-outlined"' +
                ' style="font-variation-settings:\'FILL\' 1" aria-hidden="true">call</span>' +
            '04 82 53 05 10' +
          '</a>' +
          '<a class="btn btn-pri" href="' + base + 'contact/index.html">' +
            'Demander un devis' +
            '<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>' +
          '</a>' +
        '</div>' +
      '</div>';

    /* 6. FAB (lien direct contact — pas de bottom-sheet sur pages sans shell) */
    var mFab =
      '<div class="fab" role="group" aria-label="Actions rapides">' +
        '<a class="b1" href="' + base + 'contact/index.html"' +
            ' aria-label="Demander un devis">' +
          'Demander un devis' +
          '<span class="material-symbols-outlined" aria-hidden="true">arrow_forward</span>' +
        '</a>' +
        '<a class="b2" href="tel:0482530510"' +
            ' aria-label="Appeler DCB Technologies">' +
          '<span class="material-symbols-outlined"' +
              ' style="font-variation-settings:\'FILL\' 1">call</span>' +
        '</a>' +
      '</div>';

    /* 7. Footer accordéon */
    var mFooter =
      '<footer class="footer" id="dcb-mobile-footer">' +
        '<div class="brand-row">' +
          '<a href="' + base + 'index.html" aria-label="DCB Technologies, retour accueil">' +
            '<img src="' + base + 'assets/logo-dcb.svg" alt="DCB Technologies" width="100" height="28">' +
          '</a>' +
        '</div>' +
        '<p class="tag">Votre partenaire technologique de proximité pour le commerce et l\'entreprise.</p>' +
        '<div class="contact">' +
          '<a href="tel:0482530510" class="tel"' +
              ' aria-label="Appeler DCB Technologies au 04 82 53 05 10">' +
            '<span class="material-symbols-outlined" aria-hidden="true"' +
                ' style="font-variation-settings:\'FILL\' 1">call</span>' +
            '04 82 53 05 10' +
          '</a>' +
          '<a href="mailto:contact@dcb-technologies.fr" class="em"' +
              ' aria-label="Envoyer un email à contact@dcb-technologies.fr">' +
            '<span class="material-symbols-outlined" aria-hidden="true"' +
                ' style="font-variation-settings:\'FILL\' 1">mail</span>' +
            'contact@dcb-technologies.fr' +
          '</a>' +
        '</div>' +
        '<details>' +
          '<summary>Solutions Caisse' +
            '<span class="material-symbols-outlined" aria-hidden="true">expand_more</span>' +
          '</summary>' +
          '<ul>' +
            '<li><a href="' + base + 'caisse-enregistreuse/boulangerie/index.html">Boulangerie &amp; Pâtisserie</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/restaurant/index.html">Bar, Brasserie &amp; Resto</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/commerce-de-detail/index.html">Mode &amp; Commerce détail</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/coiffure/index.html">Coiffure &amp; Beauté</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/borne-de-commande/index.html">Borne de commande</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/monnayeur/index.html">Monnayeur automatique</a></li>' +
            '<li><a href="' + base + 'caisse-enregistreuse/cashmag/index.html">Logiciel CashMag</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>IT &amp; Digital' +
            '<span class="material-symbols-outlined" aria-hidden="true">expand_more</span>' +
          '</summary>' +
          '<ul>' +
            '<li><a href="' + base + 'maintenance-informatique/depannage-assistance/index.html">Dépannage et assistance</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/cybersecurite-sauvegarde/index.html">Cybersécurité &amp; sauvegarde</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/materiel-reseaux/index.html">Matériel et réseaux</a></li>' +
            '<li><a href="' + base + 'maintenance-informatique/emails-pro-collaboration/index.html">Emails Pro et collaboration</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>Visibilité Web' +
            '<span class="material-symbols-outlined" aria-hidden="true">expand_more</span>' +
          '</summary>' +
          '<ul>' +
            '<li><a href="' + base + 'visibilite-web/creation-site-internet/index.html">Création de site web</a></li>' +
            '<li><a href="' + base + 'visibilite-web/seo-sea-local/index.html">SEO &amp; SEA local</a></li>' +
            '<li><a href="' + base + 'visibilite-web/hebergement/index.html">Hébergement</a></li>' +
          '</ul>' +
        '</details>' +
        '<details>' +
          '<summary>L\'entreprise' +
            '<span class="material-symbols-outlined" aria-hidden="true">expand_more</span>' +
          '</summary>' +
          '<ul>' +
            '<li><a href="' + base + 'notre-adn/index.html">Notre ADN</a></li>' +
            '<li><a href="' + base + 'contact/index.html">Contact</a></li>' +
            '<li><a href="' + base + 'blog/index.html">Blog &amp; Actus</a></li>' +
          '</ul>' +
        '</details>' +
        '<div class="bottom">' +
          '<div class="cp">© 2026 DCB Technologies. Tous droits réservés.</div>' +
          '<div class="lg">' +
            '<a href="' + base + 'mentions-legales/index.html">Mentions légales</a>' +
            '<a href="' + base + 'confidentialite/index.html">Confidentialité</a>' +
            '<a href="' + base + 'cgv/index.html">CGV</a>' +
          '</div>' +
        '</div>' +
      '</footer>';

    /* 8. Injection */
    document.body.insertAdjacentHTML('afterbegin', mHead + mMenu);
    document.body.insertAdjacentHTML('beforeend', mFab + mFooter);

    /* 9. Charge mobile.js pour burger + scroll + progress bar */
    var mjs = document.createElement('script');
    mjs.src = base + 'm/js/mobile.js?v=8';
    /* FAB visible dès le départ : pas de .hero à observer sur ces pages */
    mjs.onload = function () {
      var fabEl = document.querySelector('.fab');
      if (fabEl) fabEl.classList.remove('hidden');
    };
    document.body.appendChild(mjs);
  }

})();

/* ═══════════════════════════════════════════════════════════════
   CONSENTEMENT (RGPD, Consent Mode v2) + couche dataLayer -> GTM
   Le default 'denied' est pose dans le <head> AVANT GTM. Ici : l'UI
   du bandeau + l'update de consentement + les events (delegation sur
   document, donc couvre le chrome injecte au runtime : sheet, FAB, tel).
═══════════════════════════════════════════════════════════════ */
(function () {
  var STORE = 'dcb-consent';
  var base = document.documentElement.getAttribute('data-base') || './';
  function gt() { if (typeof window.gtag === 'function') window.gtag.apply(null, arguments); }

  window.dataLayer = window.dataLayer || [];
  function track(event, params) {
    var o = { event: event };
    if (params) { for (var k in params) { if (params.hasOwnProperty(k)) o[k] = params[k]; } }
    window.dataLayer.push(o);
  }
  window.dcbTrack = track;

  /* ── Clics (delegation unique) ── */
  document.addEventListener('click', function (e) {
    var t = e.target;
    if (!t || !t.closest) return;
    var tel = t.closest('a[href^="tel:"]');
    if (tel) { track('phone_call_click', { location: tel.getAttribute('data-loc') || 'lien', page_path: location.pathname }); return; }
    var mail = t.closest('a[href^="mailto:"]');
    if (mail) { track('email_click', { page_path: location.pathname }); return; }
    var sh = t.closest('[data-sheet]');
    if (sh) { var ms = document.querySelector('.m-shell'); track('sheet_opened', { metier: ms ? (ms.getAttribute('data-metier') || '') : '', page_path: location.pathname }); }
    var dt = t.closest('[data-track]');
    if (dt) { track(dt.getAttribute('data-track'), { label: dt.getAttribute('data-track-label') || (dt.textContent || '').trim().slice(0, 60), page_path: location.pathname }); }
  }, true);

  /* ── form_start : premier focus dans un formulaire ── */
  document.addEventListener('focusin', function (e) {
    var f = e.target.closest ? e.target.closest('form') : null;
    if (!f || f.__dcbStarted || !e.target.matches('input,textarea,select')) return;
    f.__dcbStarted = true;
    track('form_start', { form_id: f.id || 'form', page_path: location.pathname });
  });

  /* ── generate_lead : page /merci (issue de la redirection 303 serveur) ── */
  if (/\/merci\/?($|\?)/.test(location.pathname)) {
    track('generate_lead', { form_type: 'devis', page_path: location.pathname });
  }

  /* ── Bandeau de consentement ── */
  var stored = null; try { stored = localStorage.getItem(STORE); } catch (e) {}
  function setConsent(v) {
    try { localStorage.setItem(STORE, v); } catch (e) {}
    if (v === 'granted') {
      gt('consent', 'update', { ad_storage: 'granted', analytics_storage: 'granted', ad_user_data: 'granted', ad_personalization: 'granted' });
      track('consent_granted');
    } else {
      track('consent_denied');
    }
  }
  var bar = null;
  function closeBar() { if (bar && bar.parentNode) { bar.parentNode.removeChild(bar); } bar = null; }
  function render() {
    var st = document.createElement('style');
    st.textContent = '#dcb-cc{position:fixed;left:12px;right:12px;bottom:12px;z-index:2147483000;max-width:680px;margin:0 auto;background:#fff;border:1px solid #E2E8F0;border-radius:14px;box-shadow:0 14px 38px -12px rgba(7,43,107,.3);padding:16px 18px;display:flex;flex-wrap:wrap;gap:10px 16px;align-items:center;font-family:Inter,system-ui,sans-serif}'
      + '#dcb-cc p{margin:0;flex:1 1 260px;font-size:13px;line-height:1.5;color:#4A5568}'
      + '#dcb-cc a{color:#0B3D91;text-decoration:underline}'
      + '#dcb-cc .b{display:flex;gap:10px;flex:0 0 auto}'
      + '#dcb-cc button{font:600 13px/1 Inter,system-ui,sans-serif;padding:11px 20px;border-radius:10px;cursor:pointer;border:1px solid transparent}'
      + '#dcb-cc .no{background:#fff;border-color:#CBD5E1;color:#4A5568}#dcb-cc .no:hover{background:#F8F9FB}'
      + '#dcb-cc .yes{background:#F57C00;color:#fff}#dcb-cc .yes:hover{background:#D96A00}'
      + '@media(max-width:520px){#dcb-cc .b{flex:1 1 100%}#dcb-cc button{flex:1}}';
    document.head.appendChild(st);
    bar = document.createElement('div');
    bar.id = 'dcb-cc';
    bar.setAttribute('role', 'dialog');
    bar.setAttribute('aria-label', 'Consentement aux cookies');
    bar.innerHTML = '<p>Cookies de mesure d\'audience et de publicité, pour améliorer le site et nos campagnes. Vous pouvez accepter ou refuser. <a href="' + base + 'confidentialite/">En savoir plus</a>.</p>'
      + '<div class="b"><button type="button" class="no">Refuser</button><button type="button" class="yes">Accepter</button></div>';
    document.body.appendChild(bar);
    bar.querySelector('.yes').addEventListener('click', function () { setConsent('granted'); closeBar(); });
    bar.querySelector('.no').addEventListener('click', function () { setConsent('denied'); closeBar(); });
  }
  if (!stored) { render(); }
})();
