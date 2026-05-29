# Instructions de Projet : DCB Site V2

## 🚫 RÈGLE ABSOLUE — ZÉRO TIRET CADRATIN (em dash)
**JAMAIS de `—` (em dash) dans le contenu écrit du site.** Aucune exception, même si le contenu du juge / brief client en contient. C'est un marqueur typique de contenu IA et le client l'a explicitement banni.

Remplacer systématiquement par :
- `:` quand c'est une introduction/explication
- `.` ou `,` dans une phrase continue
- `|` ou `·` comme séparateur dans les titres/meta/options
- `(...)` en incise si nécessaire

**Cela s'applique à :** titres HTML, meta description, H1/H2/H3, body, FAQ, JSON-LD, options de formulaires, alt texts, tout.

**Workflow obligatoire :** après chaque édition de contenu, grep `—` sur le fichier modifié. Si un match apparaît, corriger avant de répondre à l'utilisateur.

## 🎨 SKILL UI/UX PRO MAX (installé le 22/04/2026)

Base de design intelligence installée localement dans `.claude/skills/ui-ux-pro-max/` (41 fichiers, 1.8 MB). Contient :
- 67 styles UI, 161 palettes, 57 pairings de fonts, 161 product types, 99 guidelines UX, 25 types de charts
- Moteur de recherche BM25 + reasoning rules
- SKILL.md auto-chargé par Claude Code

**Toujours utiliser le skill** quand la tâche concerne : choix de style, couleurs, fonts, layout, animations, accessibilité, audit UX, review visuel.

### Invocation (Python spécifique Windows)

`python3` et `py` pointent vers le stub Microsoft Store sur cette machine. Utiliser le chemin complet :

```powershell
$PYTHON = "C:\Users\Dacos\AppData\Local\Programs\Python\Python312\python.exe"
& $PYTHON .claude\skills\ui-ux-pro-max\scripts\search.py "<query>" --design-system
& $PYTHON .claude\skills\ui-ux-pro-max\scripts\search.py "<query>" --domain <ux|style|color|typography|landing|chart|product|react|web|prompt>
```

### Domaines disponibles
- `product` — recommandations par type de produit (SaaS, e-commerce, B2B service, etc.)
- `style` — styles UI + prompts AI + keywords CSS (glassmorphism, minimalism, trust-authority, etc.)
- `color` — palettes par industrie
- `typography` — pairings de fonts Google
- `landing` — patterns de landing page + stratégies CTA
- `ux` — 99 best practices/anti-patterns (10 catégories prioritaires dans SKILL.md)
- `chart` — recommandations de visualisations data
- `web` — guidelines interface web/mobile (accessibilité, safe areas, etc.)

### Workflow recommandé

1. **Audit ou nouvelle page :** `--design-system` avec query produit-industrie-style-keywords
2. **Deep-dive sur un aspect :** `--domain <domain>` avec keyword précis
3. **Appliquer** les recommandations en cohérence avec notre design system DCB (primary `#0B3D91`, CTA `#F57C00`, font Sora + Inter)

## 📱 STANDARD MOBILE — docs/mobile-standard.md

**Lire ce document avant toute refonte mobile.** Il contient le standard complet établi sur `caisse-enregistreuse/index.html` (phase 11) et sert de référence pour répliquer la fusion sur toutes les autres pages.

**Fichiers de référence :**
- `docs/mobile-standard.md` — documentation technique complète (~700 lignes)
- `m/css/mobile.css` — feuille de style mobile partagée (source de vérité CSS)
- `m/js/mobile.js` — script mobile partagé (menu, carousel, bottom-sheet, FAB)

**Ce que contient `docs/mobile-standard.md` :**
- Architecture dual-shell (`.m-shell`/`.d-shell`) avec règles CSS exactes
- Setup `<head>` (viewport `viewport-fit=cover`, media-link, preload)
- 7 éléments de frame (skip-link, progress bar, header, menu, FAB, sheet, footer)
- 11 sections de contenu (Hero à CTA Final) avec skeleton HTML + tokens `[PLACEHOLDER]`
- Variables CSS et échelle z-index
- Checklist de réplication (étapes A-D, ~40 min par page)

**Règles clés de l'architecture :**
- `.m-shell{display:none}` + `@media(max-width:640px){.m-shell{display:block}.d-shell{display:none}}`
- `#dcb-phone-fab{display:none!important}` OBLIGATOIRE dans le bloc `@media(max-width:640px)` (FAB injecté par scripts.js hors des shells)
- IDs mobiles préfixés `m-` pour éviter les conflits avec scripts.js (`id="m-pg"`, `id="m-main"`)
- Profondeur de chemin : depth 1 = `../m/css/mobile.css`, depth 2 = `../../m/css/mobile.css`
- JS conditionnel via IIFE — ne jamais charger mobile.js inconditionnellement

**Pages où le standard est appliqué :**
- [x] `caisse-enregistreuse/index.html` (référence validée)
- [ ] `maintenance-informatique/index.html`
- [ ] `visibilite-web/index.html`
- [ ] `index.html` (homepage)

---

## ⚠️ DOCUMENTS SEO DE RÉFÉRENCE
**TOUJOURS lire ces documents avant toute tâche liée au SEO, au contenu, aux balises, à la performance, aux JSON-LD, au maillage interne ou à la mise en ligne :**

1. **`AUDIT_SEO.md`** (à la racine) — Audit technique SEO complet (Module 1) + plan d'action Phase 0 partiellement exécuté
2. **`seo-analyse/`** (dossier) — Modules d'analyse SEO en cours de récolte :
   - `seo-analyse/README.md` — méthode et statut des modules
   - `seo-analyse/MODULE_1_audit-technique.md` — pointeur vers AUDIT_SEO.md
   - `seo-analyse/MODULE_3_architecture.md` — Architecture & maillage interne
   - `seo-analyse/MODULE_2_*.md`, `MODULE_4_*.md`, `MODULE_5_*.md` — à recevoir
   - `seo-analyse/MASTER_PLAN.md` — synthèse exécutable (créée APRÈS réception des 5 modules)

**Règle d'or :** Pas d'exécution sur le code tant que les 5 modules ne sont pas reçus et que le MASTER_PLAN n'est pas validé. Cela évite les conflits entre recommandations et le travail en double.

## ⚠️ TRAVAIL IMAGES — EN ATTENTE (à faire dès réception)
Les images réelles ne sont pas encore fournies par le client. Tâches techniques à exécuter **dès qu'elles arrivent** :
- [ ] Remplacer les 8 URLs `lh3.googleusercontent.com/aida-public/...` (placeholders Stitch) par des images locales dans `/assets/`
  - `caisse-enregistreuse/index.html` (hero TPV CashMag)
  - `caisse-enregistreuse/boulangerie/index.html`
  - `caisse-enregistreuse/restaurant/index.html`
  - `caisse-enregistreuse/commerce-de-detail/index.html`
  - `caisse-enregistreuse/coiffure/index.html`
  - `caisse-enregistreuse/borne-de-commande/index.html`
  - `caisse-enregistreuse/monnayeur/index.html`
  - `contact/index.html` (image bureaux)
- [ ] Convertir toutes les images en **WebP** (qualité 82, fallback JPG si besoin)
- [ ] Ajouter `width="..."` et `height="..."` sur **toutes** les `<img>` (zéro CLS)
- [ ] Ajouter `loading="lazy" decoding="async"` sur toutes les images **non-LCP**
- [ ] Ajouter `loading="eager" fetchpriority="high"` sur l'image hero LCP de chaque page
- [ ] Créer `/assets/og-homepage.jpg` (1200×630) — référencée dans `index.html`
- [ ] Créer `/assets/og-caisse.jpg` (1200×630) — référencée dans `caisse-enregistreuse/index.html`
- [ ] Créer un OG image par hub (`og-it.jpg`, `og-web.jpg`)
- [ ] Vérifier RGPD : zéro ressource externe Google sur les pages (les `lh3.googleusercontent.com` leak l'IP visiteur)
- [ ] Tester Lighthouse avant/après pour mesurer le gain LCP/CLS

**Tant que les vraies images ne sont pas disponibles**, les placeholders Google restent en place — mais ils sont marqués comme bloquants pour la mise en ligne dans `AUDIT_SEO.md` (Phase 0, Étape 2).

## Objectif
Site marketing statique pour DCB Technologies, B2B tech local (caisses, IT, web) — Tailwind CSS, moderne, inspire alan.com.

## Tech Stack
- **HTML5** + **Tailwind CSS v3.4.17 (build statique)** + **Vanilla JS** (scripts.js pour nav/footer)
- Pas de npm — Tailwind compilé via le binaire standalone `tools/tailwindcss.exe`
- Ouvrir en `file://`, via `serve.ps1` ou serveur local

## Build CSS — IMPORTANT
**Tailwind est compilé en statique** (`css/tailwind.min.css`) — plus de CDN runtime.
**À chaque modification d'une classe Tailwind dans un fichier HTML ou dans `js/scripts.js`**, relancer :

```bash
./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
```

Le scan inclut : `./*.html`, `./**/*.html`, `./js/**/*.js`, `./components/**/*.html`.
Toute classe utilisée uniquement dans `scripts.js` (nav/footer dynamiques) est bien capturée.

Le binaire `tools/tailwindcss.exe` (~129 MB) est versionné/local — ne pas committer si dépôt git public, l'ajouter au `.gitignore`.

## Structure du Projet
```
dcb-site-clean/
  index.html                              Homepage (8 sections)
  assets/
    logo-dcb.svg                          Logo SVG (Fichier 18 v2)
    borne-k1.png                          Image borne de commande
    monnayeur-3d.webm                     Video 3D monnayeur
    cashmag-demo.mp4                      Video demo CashMag
  css/
    design-system.css                     Tokens CSS
    style.css                             Classes composants (.btn, .faq-item, .cta-final, etc.)
  js/
    scripts.js                            Nav + Footer embarques (logo SVG, h-10)
  components/
    header.html                           Reference (non utilise au runtime)
    footer.html                           Reference (non utilise au runtime)
  caisse-enregistreuse/
    index.html                            Hub caisse (10 sections)
    cashmag/index.html                    Page dediee CashMag (9 sections, hero vert #76B737)
    boulangerie/index.html                Accent #F59E0B — narration "prix-sensible" (8 sections)
    restaurant/index.html                 Accent #EF4444 — narration "workflow-first" (8 sections)
    commerce-de-detail/index.html         Accent #0D9488 — narration "comparaison" (8 sections)
    coiffure/index.html                   Accent #A855F7 — narration "emotion-first" (8 sections)
    borne-de-commande/index.html          Accent #4F46E5 (10 sections)
    monnayeur/index.html                  Accent #059669 (10 sections)
  maintenance-informatique/                Hub IT (slug renomme depuis service-it-360 pour SEO)
    index.html                            Hub IT (10 sections)
    maintenance-depannage/index.html      Accent #EF4444 — narration "urgence" (8 sections)
    cloud-securite/index.html             Accent #0D9488 — narration "education" (8 sections)
    location-vente-installation/index.html Accent #0B3D91 — narration "decision" (7 sections)
    outils-collaboratifs/index.html       Accent #A855F7 — narration "demo-first" (7 sections)
  visibilite-web/
    index.html                            Hub Web (10 sections)
    creation-site-internet/index.html     Accent #0B3D91 — narration "process-first" (7 sections)
    seo-sea-local/index.html              Accent #F57C00 — narration "resultats" (7 sections)
    hebergement/index.html                Accent #0D9488 — narration "comparatif" (7 sections)
  blog/
    index.html                            Hub blog
    digitaliser-point-de-vente/index.html Article
  contact/index.html                      Page contact (carte Google Maps)
  notre-adn/index.html                    Page ADN/valeurs
  mentions-legales/index.html             Page legale
  confidentialite/index.html              Politique confidentialite
  cgv/index.html                          Conditions generales de vente

  robots.txt                              SEO indexation
  sitemap.xml                             Sitemap 26 URLs (cf AUDIT_SEO.md)
  .htaccess                               HTTPS, redirects 301, cache, securite
  tailwind.config.js                      Config build Tailwind
  tools/tailwindcss.exe                   Binaire standalone (gitignore)
  css/tailwind.min.css                    Output build (genere)
  css/tailwind-input.css                  Input @tailwind directives
```

## Conventions de Code (STRICT)
1. **Tailwind config** sur chaque page : `corePlugins: { container: false }`, `fontFamily` (sora, body, headline), `borderRadius` (lg: 14px, xl: 24px)
2. **Sections** : `py-12 lg:py-16` (compact, alan-style)
3. **Containers** : `max-w-7xl mx-auto px-6` (aligne avec nav h-[76px])
4. **H2** : `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]`
5. **Labels** : `text-[11px] font-bold tracking-[0.2em] uppercase`
6. **Cards** : `tonal-shift-elevation`, `rounded-xl` ou `rounded-2xl`
7. **Boutons** : `rounded-lg` (14px), CTA orange `#F57C00`
8. **Zero inline style** sauf `font-variation-settings:'FILL' 1` sur icones Material
9. **CSS style.css?v=2** lie sur toutes les pages (cache-bust)
10. **pt-[76px]** sur `<main>` (hauteur nav)
11. **data-base** sur `<html>` : `"./"` racine, `"../"` depth 1, `"../../"` depth 2

## Header & Footer (scripts.js)
- Ne jamais modifier sauf trigger words : `13header` ou `13footer`
- Logo : `assets/logo-dcb.svg` en `h-10`, footer en `brightness-0 invert`
- Nav : `h-[76px]`, liens `text-[0.9375rem]`, CTA `rounded-[14px] py-3 px-6`

## Design System — Couleurs
| Token | Hex | Usage |
|---|---|---|
| Primary | `#0B3D91` | Titres, liens, fond hero |
| Primary Dark | `#072B6B` | Footer, gradient fin |
| CTA Orange | `#F57C00` | Boutons CTA uniquement |
| Surface 0 | `#FFFFFF` | Fond blanc |
| Surface 1 | `#F8F9FA` | Fond gris leger |
| Surface 2 | `#F3F4F5` | Fond gris moyen |
| Text Muted | `#4A5568` → `text-slate-500` | Texte secondaire |
| CashMag Green | `#76B737` | Hero CashMag uniquement |
| Boulangerie | `#F59E0B` | Accent metier |
| Restaurant | `#EF4444` | Accent metier |
| Commerce | `#0D9488` | Accent metier |
| Coiffure | `#A855F7` | Accent metier |

## Narrations par Page (Phase 7)
Chaque sous-page a une narration unique qui determine l'ordre des sections :

### Caisse sous-pages
| Page | Narration | Section #2 | Sections | Supprime |
|---|---|---|---|---|
| Boulangerie | Prix-sensible | Trust bar (specifique) | 8 | Process, Techniciens |
| Restaurant | Workflow-first | Comment ca marche | 8 | Trust bar, Techniciens |
| Commerce | Comparaison | Trust bar (specifique) | 8 | Process, Techniciens, Cross-sell |
| Coiffure | Emotion-first | Probleme/Solution | 8 | Trust bar, Techniciens |

### IT sous-pages
| Page | Narration | Section #2 | Sections | Supprime |
|---|---|---|---|---|
| Maintenance | Urgence | Stats/Chiffres | 8 | Trust bar, Process, Techniciens |
| Cloud | Education | Probleme/Solution | 8 | Trust bar, Techniciens, Stats |
| Location | Decision | Differenciateur | 7 | Trust bar, Probleme, Techniciens |
| Outils | Demo-first | Features | 7 | Trust bar, Probleme, Techniciens |

### Web sous-pages
| Page | Narration | Section #2 | Sections | Supprime |
|---|---|---|---|---|
| Creation site | Process-first | Comment ca marche | 7 | Trust bar, Probleme, Techniciens |
| SEO/SEA | Resultats | Stats/Resultats | 7 | Trust bar, Process, Diff, Techniciens |
| Hebergement | Comparatif | Differenciateur | 8 | Probleme, Process, Techniciens |

## Signatures Visuelles par Page
- **Homepage** : 3 pillar cards + bandeau partenaires defilant + arguments icones centrees
- **Caisse hub** : Hardware cards (borne image + monnayeur video)
- **IT 360 hub** : Comparatif fond bleu fonce
- **Web hub** : Methodologie timeline (J+3, J+10, J+25, J+30) + differenciateur fond teal
- **CashMag** : Hero vert #76B737 + video demo
- **Restaurant + Coiffure** : Layout features inverse (sidebar droite)
- **Commerce** : Section differenciateur "DCB vs logiciel en ligne"
- **Maintenance** : Section stats urgence (<4h, 7j/7, 0)
- **SEO/SEA** : Section stats resultats (x3, +240%, Top 3)
- **Hebergement** : Section stats tech (99.9%, 0€ SSL, 24/7)

## Travail Realise

### Phase 1 — Nettoyage
- [x] Extraction header/footer en composants (scripts.js)
- [x] Nettoyage Tailwind 23 pages (~1400 inline styles -> ~30)
- [x] Suppression onmouseenter/onmouseleave -> hover:
- [x] Correction doublons class et style
- [x] Liens internes verifies
- [x] Suppression ancien components.js

### Phase 2 — Alignement & Coherence
- [x] Alignement contenu avec header (px-6 partout, .container 1.5rem)
- [x] corePlugins container:false sur 22 pages (fix conflit Tailwind)
- [x] Cache-bust style.css?v=2
- [x] Nav scalee : h-[76px], logo h-10, liens 15px, CTA rounded-[14px]
- [x] pt-[76px] sur 22 pages

### Phase 3 — Integration Design Stitch
- [x] Page IT 360 : hero + cards + sections mises a jour
- [x] Page Contact : hero + form + carte Google Maps Paray-le-Monial
- [x] Page Caisse hub : borne (image K1) + monnayeur (video 3D)
- [x] Logo SVG integre (nav + footer)

### Phase 4 — Redesign Homepage (inspiration alan.com)
- [x] Hero : gradient bleu, single-col, stats row, badges
- [x] Bandeau partenaires : defilement alan-style
- [x] 3 pillar cards : gradient top bar, icone, features, cercle fleche hover
- [x] Arguments : icones centrees (pas numeros)
- [x] Temoignages + FAQ + JSON-LD ajoutes

### Phase 5 — Restructuration 10 Sections
- [x] 4 sous-pages Caisse : 10 sections + JSON-LD
- [x] Page CashMag creee (angle DCB expert + CashMag outil)
- [x] 3 hubs (Caisse, IT, Web) : 10 sections + trust bar + probleme/solution + FAQ JSON-LD
- [x] 4 sous-pages IT + 3 sous-pages Web : 10 sections + JSON-LD
- [x] Borne + Monnayeur : 10 sections + JSON-LD
- [x] Notre-ADN + Blog x2 : normalises Tailwind inline
- [x] Breadcrumbs ajoutes sur sous-pages

### Phase 6 — Variations Visuelles
- [x] Homepage : arguments icones centrees (signature)
- [x] IT 360 hub : comparatif fond bleu fonce
- [x] Web hub : differenciateur fond teal
- [x] Restaurant + Coiffure : layout features inverse (sidebar droite)

### Phase 7 — Casser le Template Rigide
- [x] 4 sous-pages Caisse : narrations uniques (prix, workflow, comparaison, emotion)
- [x] 4 sous-pages IT : narrations uniques (urgence, education, decision, demo)
- [x] 3 sous-pages Web : narrations uniques (process, resultats, comparatif)
- [x] Sections Trust Bar et Techniciens supprimees des sous-pages (contenu fusionne)
- [x] Trust bars personnalisees (200+ boulangeries, 150+ boutiques)
- [x] Sections nouvelles creees (Stats urgence, Stats resultats, Differenciateur commerce)
- [x] Aucune page n'a le meme ordre de sections qu'une autre

### Phase 8 — P0 Fixes
- [x] Contact : py-24 -> py-12 lg:py-16
- [x] Borne + Monnayeur : py-[clamp()] -> py-12 lg:py-16
- [x] JSON-LD FAQ ajoute sur borne + monnayeur

### Phase 9 — SEO Phase 0 (Bloquants pre-lancement)
- [x] Build Tailwind statique (suppression CDN runtime, gain LCP -2 a -3s)
- [x] Migration slug /service-it-360/ -> /maintenance-informatique/ (volume SEO)
- [x] Creation robots.txt + sitemap.xml (26 URLs)
- [x] Creation .htaccess (HTTPS force, www -> apex, 301 migration, cache, securite)
- [x] Suppression index.backup.html
- [x] Reecriture 6 titles generiques + meta description Accueil
- [x] sameAs LocalBusiness : Facebook + Instagram ajoutes

### Phase 10 — Contenu Silo Caisse + Footer (sessions 15-21 avril 2026)
- [x] HowTo JSON-LD (3 etapes) sur borne-de-commande + monnayeur
- [x] Product JSON-LD (prix physiques, brands multiples) sur borne-de-commande + monnayeur
- [x] Signal E-E-A-T : "Mis a jour le 21 avril 2026" sur les 9 pages du silo caisse
- [x] Footer : zones d'intervention en 3 lignes (grandes villes bold / petites villes / departements)
- [x] Footer : "Logiciel CashMag" + "Logiciel Hairnet" ajoutes dans Solutions Caisse
- [x] NF525/7 500€ reformule "par systeme de caisse non conforme" sur tout le silo caisse (7 pages)
  - Formulations uniques par page metier (anti-duplicate content)
  - cashmag, hairnet, hub caisse : corrections "par poste"/"par logiciel" incluses
  - JSON-LD + HTML visible FAQ + liens AFNOR preserves partout
- [x] scripts.js passe en version ?v=6 sur les 25 pages HTML

## Phase 11 — Version Mobile Hub Caisse + Sous-pages (en cours)

### Architecture retenue : un seul fichier, deux shells CSS
- Approche : `.m-shell` (visible mobile <=640px) + `.d-shell` (visible desktop >640px)
- Desktop : contenu et visuel INCHANGES (garanti par `display:none` sur `.m-shell` en >640px)
- Mobile : design "mix" validé (carousel métiers, FAB, bottom-sheet, menu burger, footer accordéon)
- CSS mobile : `m/css/mobile.css` inclus via `<link media="screen and (max-width:640px)">`
- **Frame DRY** : header/menu/FAB/sheet/footer injectés par `scripts.js` via placeholders `id="m-nav|m-menu|m-fab|m-sheet|m-footer"` (ne pas hardcoder)
- `data-metier="[valeur]"` sur `.m-shell` pré-sélectionne le segment métier du formulaire
- Standard documenté dans `docs/mobile-standard.md`

### Statut
- [x] Fusion `.m-shell` dans `caisse-enregistreuse/index.html` (hub caisse)
- [x] DRY injection frame mobile via scripts.js (hub caisse + boulangerie)
- [x] Fusion `.m-shell` dans `caisse-enregistreuse/boulangerie/index.html` (sous-page pilote)
- [x] Corrections visuelles : logo CashMag vert (logo-cashmag-logiciel-caisse-nf525.png, 419x80)
- [x] Typography fixes : font-weight h3 cross-sell, labels form 11px/0.2em
- [x] Menu burger : fond uni #0B3D91 (suppression gradient)
- [x] Tailles logo nav/menu : .top .lg img 32px, .menu .mtop img 36px
- [x] Suppression `m/caisse-enregistreuse/` (prototype orphelin supprimé)
- [x] Documentation standard mobile + anti-patterns (`docs/mobile-standard.md` §8)
- [ ] Appliquer le pattern DRY aux autres sous-pages caisse (restaurant, commerce-de-detail, coiffure, borne, monnayeur)
- [ ] Appliquer la fusion aux autres hubs (maintenance-informatique, visibilite-web, index)

## Skills Mobile — Obligatoires a chaque integration

Ne jamais intégrer un shell mobile sans passer par ces 3 skills dans l'ordre :

1. **`page-cro`** — Avant tout code. Auditer l'ordre des sections pour la narration mobile de la page (visiteur qualifié, scroll court, intention précise). L'ordre desktop n'est pas forcément optimal mobile.
2. **`impeccable craft`** — Brief shape validé par l'utilisateur avant d'écrire du HTML. Confirme la structure narrative, les sections à inclure/exclure, les accents visuels.
3. **`ui-ux-pro-max`** (`--domain ux` + `--domain landing`) — Pendant l'écriture des sections. Vérifie densité texte, hiérarchie, touch targets, lisibilité, patterns de conversion mobile.

**Ces 3 skills sont non négociables.** Procéder sans eux produit des shells qui copient mécaniquement le desktop sans optimisation mobile.

---

## Anti-patterns Mobile — Erreurs a ne pas reproduire

Erreurs commises lors de l'integration Phase 11. Lecture obligatoire avant toute nouvelle integration mobile.

### Frame : ne jamais hardcoder dans .m-shell
Le header, menu, FAB, sheet et footer sont injectes par `scripts.js`. Dans `.m-shell`, mettre uniquement :
```html
<div id="m-nav"></div>      <!-- injecte par scripts.js -->
<!-- ... contenu ... -->
<div id="m-footer"></div>
<div id="m-fab"></div>
<div id="m-sheet"></div>
<div id="m-menu"></div>
```

### Verifier le bon fichier avant d'editer
Le dossier `m/` ne contient plus que les assets partagés (`m/css/`, `m/js/`). Le prototype `m/caisse-enregistreuse/` est supprime. Avant toute edit, verifier dans DevTools quel fichier est servi (le `src` des ressources indique la profondeur reelle).

### Badges .pp dans .peri-a : zero inline style
Les couleurs des badges sont definies par `.b1 .pp` (indigo `#4F46E5`) et `.b2 .pp` (vert `#059669`) dans mobile.css. Un `style="..."` inline ecrase ces regles. Ne jamais en ajouter.

### Textes cross-sell sous-pages : garder les marqueurs metier
Reduire la densite = max 2 phrases par card. Mais conserver au moins un element specifique a la page (ex : "pain/argent", "7h en plein rush", "carte des pains"). Si le texte simplifie pourrait etre sur le hub, il cree du duplicate content — le reecrire.

### Labels formulaire : convention DCB = 11px / 0.2em
```css
/* CORRECT */
.field label { font-size:11px; letter-spacing:0.2em; }
/* FAUX — ne pas faire */
.field label { font-size:13px; letter-spacing:0.08em; }
```

### Menu burger : fond uni, pas de gradient
```css
.menu { background: #0B3D91; }  /* CORRECT */
/* FAUX : background:linear-gradient(160deg,#0B3D91,#051d4b) */
```

### Logo CashMag : fichier et dimensions corrects
- Fichier : `assets/logo-cashmag-logiciel-caisse-nf525.png` (vert, 419x80px)
- Ne pas utiliser `partenaire-cashmag.webp` (ancienne version grise, trop petite)
- CSS : `width:59%;max-width:224px;height:auto;margin:14px 0`

---

## TODO — Prochaines Sessions

### Silo Caisse — Reste a faire
**Accueil (`index.html`)**
- [ ] Bandeau partenaires : `<span>` → `<img alt>` avec vrais logos. **BLOQUE : attente logos client**

**Caisse Hub (`caisse-enregistreuse/index.html`)**
- [ ] Section comparative visible "DCB vs SumUp / Zettle / Square" (5-6 criteres). Argument commercial fort + signal contenu Google. ~30 min.
- [ ] Cross-sell vers `/maintenance-informatique/` en bas de page. Nice to have. ~15 min.

**Sous-pages metiers + produits Caisse (8 sous-pages)**
- ✅ JSON-LD `Service` avec `areaServed` (12 villes) deja present sur les 8 sous-pages
- ✅ NF525 reformule, date E-E-A-T, HowTo + Product JSON-LD (borne+monnayeur)
**Silo caisse 100% complet cote contenu + schemas.**

### Silo IT (structure harmonisee — 30/04/2026)
- [x] Hub Maintenance Informatique : JSON-LD `Service` detaille (areaServed, offers) — Sprint 3
- [x] Hub Maintenance Informatique : date E-E-A-T — Sprint 9
- [x] 4 sous-pages IT : date E-E-A-T, JSON-LD Service, breadcrumb, cross-sell inter-pilier
- [x] Harmonisation atoms visuels (spacing, typo, cards, CTA) alignee silo caisse
- [ ] Hub Maintenance Informatique : temoignages × 4 carrousel — cf. Sprint 9 (attente contenu client)

### Silo Web (structure en cours — 30/04/2026)
- [ ] Hub Visibilite Web : JSON-LD `Service` detaille (areaServed) — cf. Sprint 3
- [ ] Hub Visibilite Web : date E-E-A-T + breadcrumb
- [ ] 3 sous-pages Web : date E-E-A-T, JSON-LD Service, breadcrumb, cross-sell inter-pilier
- [ ] Harmonisation atoms visuels alignee silo caisse
- [ ] Hub Visibilite Web : temoignages × 4 carrousel — cf. Sprint 9 (attente contenu client)

### Pages speciales
- [ ] Contact : LocalBusiness JSON-LD duplique + schema `ContactPage` + horaires
- [ ] Notre ADN : structurer pour E-E-A-T (parcours fondateurs, dates, certifications)

### SEO Technique (post-lancement — actions externes)
- [ ] Completer "sameAs" avec URL Google Business Profile officielle
- [ ] Soumettre sitemap.xml dans Google Search Console + Bing Webmaster
- [ ] Optimiser fiche GBP existante (cf. MASTER_PLAN.md Sprint 1 — 30 min)
- [ ] Auto-hebergement fonts (woff2 dans /assets/fonts/) — gain LCP ~0.3s + RGPD
- [ ] Open Graph tags sur 4 pages manquantes (blog x2, contact, notre-adn)

### Contenu (bloque — attente client)
- [ ] Temoignages reels (noms, entreprises, villes, photos) — actuellement placeholders
- [ ] Images produits reelles → remplacer lh3.googleusercontent.com (8 URLs)
- [ ] Trust bar metriques reelles par page

### Structure
- [ ] Cross-sell inter-piliers sur sous-pages IT et Web (cf. MASTER_PLAN.md Sprint 5)
- [ ] Fil d'Ariane visuel + BreadcrumbList JSON-LD sous-pages (cf. Sprint 6)
- [ ] Blog/Notre-ADN dans la nav (cf. Sprint 4)
- [ ] Schema BlogPosting sur article blog

## Informations DCB Technologies
- **Telephone :** 04 82 53 05 10
- **Email :** contact@dcb-technologies.fr
- **Co-fondateurs :** Nathanael Da Costa & Clement Boissie
- **Siege :** Paray-le-Monial (71600)
- **Zone d'intervention :** Saone-et-Loire (71), Rhone (69), Ain (01), Loire (42)
- **Logiciel caisse :** CashMag (certifie NF525)
- **Materiel :** OXHOO, AURES, Lenovo
- **Delai intervention SAV :** < 4h sur site
- **Partenaires :** NF525, CashMag, OXHOO, AURES, Lenovo, Pedroporto
