# DCB Site V2 — Instructions de projet

Site marketing statique pour **DCB Technologies** (B2B local : caisses, IT, web) couvrant 71/69/01/42.

---

## 🤖 AGENTS : RÈGLE DE DÉLÉGATION (PRIORITÉ ABSOLUE)

**Le modèle principal est un ORCHESTRATEUR. Il n'exécute JAMAIS lui-même une tâche couverte par un agent ci-dessous : il la délègue via le tool Agent/Task, puis vérifie et synthétise.** Exécuter soi-même une tâche d'un domaine couvert est une violation des instructions projet. Seules exceptions : micro-modifications triviales (typo, valeur d'attribut) et questions de pure lecture.

| Domaine de la tâche | Agent | Modèle |
|---|---|---|
| Page/section desktop, HTML/CSS/Tailwind, intégration maquette | `front-builder` | opus |
| Shell mobile `.m-shell`, responsive ≤640px, dual-shell | `mobile-builder` | opus |
| Audit UI/UX, a11y, cohérence visuelle, motion | `design-reviewer` | opus |
| Textes du site : titres, sections, FAQ, meta, CTA, humanisation | `copywriter-site` | opus |
| SEO, GEO, balises, JSON-LD, maillage, sitemap | `seo-expert` | sonnet |
| Conversion : audit CRO, formulaires, ordre sections, A/B | `cro-expert` | opus |
| Audit pub payante : Google/Meta/LinkedIn/TikTok Ads, budget, tracking | `ads-auditor` | sonnet |
| Création pub : plan média, copy d'annonces, visuels ads | `ads-creator` | sonnet |
| Stratégie marketing : contenu, emails, social, pricing, concurrents | `marketing-strategist` | opus |
| Harmonisation d'un silo entier, propagation multi-pages | `silo-harmonizer` | sonnet |
| QA mécanique pré-commit : em dash, Tailwind, cache-bust, liens, JSON-LD | `site-qa` | haiku |
| Pub vidéo Remotion (pipeline complet) | `pub-strategist` → `pub-copywriter` → `motion-director` → `remotion-builder` → `frame-auditor` (+ `ui-faithful` si UI tierce) | mixte |

**Règles d'orchestration :**
- Tâche multi-domaines : décomposer et déléguer en chaîne (ex. nouvelle page = `cro-expert` (ordre sections) → `copywriter-site` (textes) → `front-builder` (desktop) → `mobile-builder` (mobile) → `seo-expert` (balises/JSON-LD) → `site-qa` (vérif) ).
- Avant chaque commit multi-fichiers : passage `site-qa` obligatoire.
- Les agents chargent eux-mêmes leurs skills : ne pas invoquer un skill d'un domaine couvert depuis le modèle principal.

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

### Tests visuels (filet regression CSS/HTML transverses)

Avant tout lot de modifications CSS/HTML transverses : `cd tests/visual && npm run baseline`.
Apres le lot : `npm run check` (tableau PASS/FAIL par page+viewport, code de sortie non-zero si regression).
Toute diff non voulue = regression a corriger avant commit.
Refaire la baseline apres validation d'un lot voulu pour mettre a jour la reference.

---

## 🚫 RÈGLE ABSOLUE — ZÉRO TIRET CADRATIN

**JAMAIS de `—` (em dash) dans le contenu écrit du site.** Marqueur typique IA, banni par le client.

Remplacer par : `:`, `.`, `,`, `|`, `·`, ou parenthèses.

S'applique à : titres HTML, meta description, H1/H2/H3, body, FAQ, JSON-LD, options de formulaire, alt texts.

**Après chaque édition de contenu :** grep `—` sur le fichier modifié. Si match, corriger avant de répondre.

---

## 🔤 RÈGLE ABSOLUE — ENCODAGE UTF-8 PRÉSERVÉ (anti-mojibake)

Les pages sont en **UTF-8 avec BOM** (`EF BB BF`). Une corruption d'encodage (double UTF-8 / passage par CP1252 : `é`→`Ã©`, `€`→`�`, `Ê`→`�`) est un défaut grave, invisible au grep em dash. **Elle ne doit jamais se produire**, pas seulement être détectée.

**Cause à proscrire :** réécrire un fichier de contenu d'une manière qui le fait transiter par l'encodage console/ANSI de Windows. Donc :

- **JAMAIS** manipuler un fichier HTML/CSS/JS de contenu via PowerShell `Get-Content` / `Set-Content` / `Out-File` ni via un pipeline texte (`... | Set-Content`). Ces commandes ne garantissent pas l'UTF-8 sur une machine FR.
- Pour **créer ou modifier** du contenu : utiliser EXCLUSIVEMENT les outils du harness `Write` / `Edit` (UTF-8 garanti). Privilégier `Edit` ciblé à un `Write` qui régénère un gros fichier.
- Pour **intégrer un clone** (`_preview-*.html`) dans une page de production : **copie binaire** d'abord (`Copy-Item $clone $cible -Force`, qui préserve les octets à l'identique), PUIS `Edit` ciblés pour le head (cache-bust `?v=`) et les liens relatifs. Ne JAMAIS régénérer le corps de la page.
- Manipulation d'octets autorisée uniquement pour une **réparation** d'encodage : repartir d'une source git sans perte, transformer en CP1252→UTF-8, réécrire en UTF-8 **avec BOM**, dry-run de contrôle (mojibake=0, `�` U+FFFD=0, em dash=0) avant écriture.

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
`css/style.css?v=N` et `js/scripts.js?v=N` : N identique sur TOUTES les pages, incrémenté à chaque modif structurelle de ces fichiers. Ne jamais écrire le numéro courant dans la doc : la vérité est dans les pages (vérification : agent site-qa, point 3).

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
  pour-clement/                                    Modules SEO + master plan + chantier go-live (partagé Clément)
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

## 🎨 Grammaire visuelle du site

Gouvernance : **une règle n'existe ici que si le code la prouve** (audit du 11/06/2026, comptage d'occurrences sur les 28 pages). Toute règle contredite par le code est corrigée (ici + `docs/front-library.md` + agents) dans le même commit. Aucun numéro de version ni valeur volatile en dur dans la doc.

### Les deux familles de pages (règle maîtresse)
| Famille | Pages | Rôle de l'orange `#F57C00` |
|---|---|---|
| **Pages marque** (DCB parle) | Accueil, hub caisse, hub IT, hub web, contact, notre-adn, blog, pages locales (saone-et-loire), cashmag | Couleur IDENTITÉ : eyebrows, icônes, badges, CTA, CTA final (`--accent:#F57C00`), sur base bleu primaire |
| **Pages narration** (le métier parle) | Toutes les sous-pages métier/service | **ZÉRO orange** : l'accent de la page habille TOUT, y compris la frame (téléphone nav, FAB, bottom-sheet) via `--page-accent` lu par scripts.js. Exceptions : le filet signature footer (orange constant, marque) et les cards cross-sell vers une page marque (orange = couleur de destination) |

⚠️ **État d'implémentation de la ligne "pages narration"** : le contenu des pages respecte déjà la règle (accent dominant à 117-155 occurrences, orange résiduel 3-17). La partie FRAME (`--page-accent` dans scripts.js : téléphone nav, FAB, sheet) est une CIBLE à implémenter, pas l'état actuel ; elle nécessite les trigger words `13header`/`13footer`. D'ici là, ne pas "corriger" l'orange de la frame page par page.

### Couleurs de base
| Token | Hex | Usage |
|---|---|---|
| Primary | `#0B3D91` | Titres, liens actifs, hero |
| Primary Dark | `#072B6B` | Footer, fin du gradient hero marque |
| Surface 0/1/2 | `#FFFFFF` / `#F8F9FA` / `#F3F4F5` | Alternance par shift tonal |
| Text Muted | `#4A5568` (≈ `text-slate-500`) | Texte secondaire |

### Accents par page : paires `--accent` / `--accent-dark`
| Pages | Accent | Dark |
|---|---|---|
| boulangerie, infogerance-pme | `#F59E0B` ambre | `#D97706` |
| restaurant, maintenance-depannage, seo-sea-local | `#EF4444` rouge | `#DC2626` |
| commerce-de-detail, cloud-securite, hebergement | `#0D9488` teal | `#0F766E` |
| coiffure, outils-collaboratifs | `#A855F7` violet | `#9333EA` |
| borne-de-commande, location-vente-installation | `#4F46E5` indigo | `#4338CA` |
| monnayeur | `#059669` vert | `#047857` |
| creation-site-internet | `#7C3AED` violet web | `#6D28D9` |
| cashmag (vert partenaire) | `#76B737` | `#5E9028` |
| hairnet | `#4527A4` + or `#C59C45` | : |
| pages marque (orange DCB) | `#F57C00` | `#E06E00` |

### Règles de couleur (prouvées par le code)
- **Un seul accent dominant par sous-page**, aucun accent concurrent.
- **Le cross-sell porte la couleur de sa page de DESTINATION** (card monnayeur verte dans boulangerie, card borne indigo dans restaurant, card vers un hub = orange).
- **Hub = multi-accent** : chaque card enfant porte l'accent de sa sous-page cible, l'orange identité autour.
- **Le CTA final et ses atomes (topbar, icône tel) utilisent TOUJOURS `var(--accent)`**, jamais de couleur en dur (dérive constatée sur restaurant L878/L887, à corriger lors de l'implémentation frame).
- Rouge : référence `#EF4444`. Déclinaisons `#F87171` (clair), `#DC2626`/`#B91C1C` (foncé) autorisées UNIQUEMENT en gradients et dark pairs.
- Pages légales : sobres, zéro accent.
- **Pastille d'icône = surface OPPOSÉE à celle de la section** (grise `#F8F9FA` sur section blanche, blanche sur section grise), icône orange sur pages marque, JAMAIS d'ombre sous les pastilles. (Validé client 12/06/2026, pilote hub caisse.)
- Zéro `backdrop-blur` sur la nav (fond blanc uni). Zéro bordure 1px entre sections (shift tonal). Ombres tintées bleu `rgba(7,43,107,0.04)`.
- **Tooltips/abbr : jamais de soulignement pointillé ni surlignage.** Pas d'attribut `title` sur les `<abbr>` : utiliser `data-tooltip` + `aria-label` uniquement.

### Signatures transverses (présentes sur tout le site, ne jamais casser)
- **CTA final v3** ("Le Seuil" desktop / "Le Bord Tranché" mobile) en fin de chaque page, piloté par `--accent`/`--accent-dark`.
- **Date E-E-A-T** "Mis à jour le ..." dans le CTA final (desktop + mobile, 23 pages).
- **Animations : uniquement le système maison** `dcb-reveal` / `dcb-stagger` + hovers standards. Toute animation hors système doit être justifiée (référentiel pour la chasse à l'AI slop).
- Élévation cards : `tonal-shift-elevation`.
- Gradient hero pages marque : `#0B3D91 → #072B6B`.
- Filet signature orange : footer (constant sur tout le site) + CTA final.

### Typo
- `--font-title` Sora (700/800) pour titres
- `--font-body` Inter (400/500/600) pour body
- H2 standard : `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]`
- Labels/eyebrows : `text-[11px] font-bold tracking-[0.2em] uppercase`

### Conventions Tailwind
1. `corePlugins: { container: false }` sur chaque page (évite conflit nav).
2. Sections : `py-12 lg:py-16`.
3. Containers : `max-w-7xl mx-auto px-6`.
4. Cards : `rounded-xl` ou `rounded-2xl`, classe `tonal-shift-elevation`.
5. CTA buttons : `rounded-[14px]`.
6. `<main>` : `pt-[76px]` (hauteur nav).
7. `data-base` sur `<html>` : `./` racine, `../` depth 1, `../../` depth 2.

---

## 🧠 Skills et sources de vérité

Les skills sont chargés PAR LES AGENTS (cf. table de délégation en tête de fichier), pas par le modèle principal. Chaque agent documente dans son fichier `.claude/agents/<nom>.md` les skills de son domaine et leur ordre d'invocation.

Sources de vérité transverses (tout agent front/contenu doit les respecter) :
- **`docs/front-library.md`** : bibliothèque officielle des sections (code canonique desktop + mobile). Toute nouvelle page/section part d'un pattern de cette bibliothèque, JAMAIS d'une invention.
- `docs/mobile-standard.md` : référentiel shell mobile.
- `docs/content-reference.md` : formulations validées (anti duplicate content).
- `AUDIT_SEO.md` + `pour-clement/` (ex-`seo-analyse/`, renommé pour partage Clément) : avant toute tâche SEO.

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

### Avant mise en ligne
- Retirer les liens temporaires footer vers les pages departement (tmp-dept-link dans scripts.js) avant mise en ligne.

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
- **Siège social :** Dardilly (69570) · **Base technique et atelier :** Paray-le-Monial (71600). Les deux sont réels : "deux bases opérationnelles" est une formulation valide. L'ancrage terrain du discours commercial reste Paray.
- **Zone d'intervention :** Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)
- **Logiciel caisse :** CashMag (certifié NF525)
- **Matériel :** OXHOO, AURES, Lenovo
- **Délai SAV :** intervention sous 4h sur site
- **Partenaires :** NF525, CashMag, Hairnet, OXHOO, AURES, Lenovo, iMin, Yavin, Pedro Porto
- **Hébergement :** PAS ENCORE DE VERSION LIVE (l'ancien Plesk concernait le projet V1, obsolète). Dev local : `file://` ou `serve.ps1`. Domaine cible des URLs canoniques/sitemap : `dcb-technologies.fr` (non déployé).
- **Repo Git :** `ndacosta-XIII/dcb-site` (privé, GitHub)
