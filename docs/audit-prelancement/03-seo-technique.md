# Audit SEO Technique + On-Page Pré-Lancement

**Dimension :** SEO technique et on-page (titles, meta, Hn, canoniques, sitemap, robots/llms, maillage, JSON-LD, Open Graph, images, fonts)
**Date :** 21/07/2026
**Agent :** seo-expert (Sonnet 5)
**Périmètre :** repo local `C:\Users\Dacos\Downloads\dcb-site-clean`, branche `main`, 35 fichiers `index.html` (34 pages indexables + `/merci/` en noindex volontaire). Silos Caisse (13 pages), Maintenance Informatique (6 pages), Visibilité Web (4 pages), Blog (5 pages), pages département (4), Contact, Notre ADN, 3 pages légales, Homepage.

Rappels de cadrage respectés dans cet audit : le header `X-Robots-Tag: noindex` du live `/new/` n'est pas compté (staging volontaire) ; les canoniques/sitemap pointant vers `dcb-technologies.fr` racine sont attendus (domaine cible non déployé) ; les liens `tmp-dept-link` du footer sont un retrait déjà planifié ; aucune recommandation `aggregateRating`/`Review` n'a été faite (confirmé : zéro occurrence sur les 35 pages, conforme à la règle absolue du projet).

---

## NOTE : 75/100

**Barème (10 catégories, 10 points chacune) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | Titles (unicité, longueur, intention) | 6/10 | Uniques sur 35/35, mais 12 pages dépassent 65 caractères dont 4 au-delà de 85c |
| 2 | Meta descriptions (unicité, longueur) | 6/10 | Uniques et présentes sur 35/35, mais 15 pages business hors fourchette 140-160c, 6 au-delà de 180c |
| 3 | Structure Hn | 9/10 | H1 présent et hiérarchie H2/H3 correcte sans saut sur toutes les pages testées ; nuance dual-shell (voir plus bas) |
| 4 | Canoniques | 10/10 | 34/34 pages indexables ont une canonique auto-référente cohérente avec le sitemap |
| 5 | Sitemap.xml | 7/10 | 33 des 34 pages indexables présentes, bien organisées ; 1 page business absente (bloquant), quelques `lastmod` désynchronisés |
| 6 | robots.txt / llms.txt | 7/10 | robots.txt propre et correctement configuré (crawlers IA explicites) ; llms.txt existe mais incomplet (page absente, 4 pages département absentes) |
| 7 | Maillage interne | 9/10 | Zéro page orpheline détectée, ancres descriptives, breadcrumbs visuels, nav avec Blog + Notre ADN |
| 8 | JSON-LD | 9/10 | 100% des blocs sont un JSON valide, types riches (Service, FAQPage, HowTo, Product, BreadcrumbList, LocalBusiness), `areaServed` présent partout où pertinent, zéro `aggregateRating` |
| 9 | Open Graph | 4/10 | Complet sur 27/34 pages, mais ABSENT sur tout un silo (6 pages IT) et image générique dupliquée sur 24 pages |
| 10 | Images / fonts | 8/10 | Zéro URL `lh3.googleusercontent.com` restante, 100% des `<img>` ont un `alt`, fonts auto-hébergées partout ; quelques images sans `width`/`height` |

**Total : 75/100.** Fondations techniques solides (canoniques, JSON-LD, maillage, fonts) mais 2 bloquants de lancement et des gaps de finition récurrents sur les métadonnées.

**Bloquants identifiés : 2**

---

## [BLOQUANT] 1 : la page Infogérance PME (silo IT) est absente du sitemap.xml

**Preuve :** `sitemap.xml` liste 4 sous-pages du silo Maintenance Informatique (`maintenance-depannage`, `cloud-securite`, `location-vente-installation`, `outils-collaboratifs`, lignes 108-132) mais **pas** `maintenance-informatique/infogerance-pme/`. Le fichier existe bel et bien (`maintenance-informatique/infogerance-pme/index.html`), a un canonical propre (`https://dcb-technologies.fr/maintenance-informatique/infogerance-pme/`), un JSON-LD `Service` complet et un `BreadcrumbList`. La page n'est pas orpheline : elle est linkée depuis la nav (`js/scripts.js` lignes 68, 103, 148, 243, 457), le hub IT et 2 articles de blog.

**Impact :** c'est la page qui porte l'offre contrat/infogérance (money page du silo IT selon `docs/content-reference.md`). Sans entrée sitemap, elle dépend uniquement du maillage interne pour être découverte et son signal de priorité/fraîcheur auprès de Google est nul.

**Correction :** ajouter une entrée `<url>` pour cette page dans `sitemap.xml`, dans le bloc "SOUS-PAGES MAINTENANCE INFORMATIQUE" (après ligne 132), avec un `lastmod` reflétant sa dernière modification réelle (23/24 avril 2026, cf. bloquant E-E-A-T ci-dessous).

---

## [BLOQUANT] 2 : Open Graph et Twitter Card totalement absents sur tout le silo Maintenance Informatique (6 pages)

**Preuve :** recherche de `property="og:` sur les 35 pages : présent sur 27, absent sur les 6 pages suivantes (aucune ligne `og:title`, `og:description`, `og:image`, `og:type` ni `twitter:card`) :
- `maintenance-informatique/index.html` (hub)
- `maintenance-informatique/cloud-securite/index.html`
- `maintenance-informatique/infogerance-pme/index.html`
- `maintenance-informatique/location-vente-installation/index.html`
- `maintenance-informatique/maintenance-depannage/index.html`
- `maintenance-informatique/outils-collaboratifs/index.html`

Les 2 autres hubs business (Caisse, Web) et leurs sous-pages ont tous les 5 tags. Les pages légales (`cgv`, `confidentialite`, `mentions-legales`) et `merci/` (noindex) sont logiquement sans OG, ce n'est pas compté ici.

**Impact :** tout partage d'une page IT (LinkedIn, Facebook, WhatsApp, Slack) affiche un aperçu vide ou dégradé (fallback navigateur, souvent le premier `<img>` de la page ou rien). C'est aussi un tiers du site qui perd le bénéfice `og:type=website` + `og:image` pour les moteurs IA qui s'appuient sur ces métadonnées en complément du JSON-LD.

**Correction :** dupliquer le bloc OG + Twitter Card des pages Caisse/Web (structure déjà validée) sur les 6 pages IT, avec title/description propres à chaque page (ne pas copier mot pour mot, cf. règle anti-duplicate `docs/content-reference.md`).

---

## Majeurs

### M1 : image Open Graph générique dupliquée sur 24 des 27 pages qui ont un OG complet

**Preuve :** `grep "property=\"og:image\"" **/*.html` montre `https://dcb-technologies.fr/assets/og-homepage.jpg` sur les 13 pages du silo Caisse, les 4 pages du silo Web, `contact/index.html` et `notre-adn/index.html` (24 pages au total). Seuls les 4 articles de blog ont une image OG propre (ex. `blog/norme-nf525-caisse-enregistreuse/index.html:18` pointe vers `caisse-tactile-cashmag-boulangerie.webp`). Vérification fichier : `assets/og-homepage.jpg` est la seule image `og-*` présente dans `/assets/` (`og-caisse.jpg`, `og-it.jpg`, `og-web.jpg` n'existent pas), ce qui confirme un gap déjà identifié dans `AUDIT_SEO.md` (section Silo 2A) mais toujours non résolu à date.

**Impact :** un partage de la page CashMag, du hub Caisse ou de n'importe quelle page département affiche visuellement la même image que la homepage. Perte de différenciation et de CTR social/AI Overview.

**Correction :** créer `og-caisse.jpg`, `og-it.jpg`, `og-web.jpg` (1200×630) et les affecter par silo a minima (roadmap déjà tracée dans `AUDIT_SEO.md`, bloquée sur réception d'assets visuels réels).

### M2 : dates E-E-A-T "Mis à jour le" obsolètes sur tout le silo IT (6 pages)

**Preuve :** les 6 pages du silo Maintenance Informatique affichent toutes une date de mise à jour du 23 ou 24 avril 2026 :
- `maintenance-informatique/index.html:1523` → `2026-04-23`
- `maintenance-informatique/cloud-securite/index.html:839` → `2026-04-23`
- `maintenance-informatique/infogerance-pme/index.html:845` → `2026-04-24`
- `maintenance-informatique/location-vente-installation/index.html:938` → `2026-04-23`
- `maintenance-informatique/maintenance-depannage/index.html:962` → `2026-04-23`
- `maintenance-informatique/outils-collaboratifs/index.html:838` → `2026-04-23`

Or `docs/content-reference.md` (section "Silo IT") documente un garde-fou anti-duplicate posé le 02/07/2026 explicitement "AVANT la réécriture des 6 pages" (renommages de slugs validés, nouvelle doctrine SAV, nouvelle doctrine prix, liste noire de claims retirés). Le contenu de ces 6 pages a donc été substantiellement réécrit après le 02/07/2026, mais la date affichée au visiteur et aux moteurs (signal E-E-A-T de fraîcheur) est restée figée à fin avril.

**Impact :** signal de fraîcheur trompeur (E-E-A-T et GEO), à l'opposé de l'effet recherché par cette mention. Pour comparaison, les autres silos ont des dates cohérentes avec leurs dernières réécritures connues (silo Web : 15 juillet 2026, silo Caisse : 29 juin/2 juillet 2026).

**Correction :** mettre à jour les 6 `<time datetime="...">` à la date réelle de la dernière réécriture IT.

### M3 : 12 titles dépassent 65 caractères, 4 au-delà de 85 caractères

**Preuve (longueur exacte, caractères visibles décodés) :**

| Page | Longueur | Title |
|---|---|---|
| `caisse-enregistreuse/saone-et-loire/index.html:9` | 89c | "Caisse enregistreuse à Mâcon et en Saône-et-Loire (71) : Chalon, Paray \| DCB Technologies" |
| `caisse-enregistreuse/loire/index.html:9` | 87c | "Installateur caisse enregistreuse Loire (42) : Saint-Étienne, Roanne \| DCB Technologies" |
| `notre-adn/index.html:9` | 78c | "Qui sommes-nous ? Techniciens caisse & IT en Saône-et-Loire \| DCB Technologies" |
| `caisse-enregistreuse/ain/index.html:9` | 76c | "Caisse enregistreuse à Bourg-en-Bresse et dans l'Ain (01) \| DCB Technologies" |
| `caisse-enregistreuse/index.html:9` | 76c | "Caisse enregistreuse NF525 : installation et SAV sur site \| DCB Technologies" |
| `maintenance-informatique/infogerance-pme/index.html:9` | 75c | "Infogérance PME : Technicien Informatique Dédié sur Site \| DCB Technologies" |
| `blog/index.html:9` | 73c | "Blog & Actualités \| Conseils & Guides pour Commerçants \| DCB Technologies" |
| `maintenance-informatique/outils-collaboratifs/index.html:9` | 72c | "Outils Collaboratifs Microsoft 365 & Google Workspace \| DCB Technologies" |
| `contact/index.html:9` | 71c | "Contact DCB Technologies · caisse, IT et web en Saône-et-Loire et Rhône" |
| `caisse-enregistreuse/rhone/index.html:9` | 66c | "Caisse enregistreuse Lyon, Givors et Rhône (69) \| DCB Technologies" |
| `index.html:9` | 66c | "DCB Technologies \| Caisse NF525, informatique et web · 71 69 01 42" |
| `maintenance-informatique/index.html:10` | 66c | "Maintenance Informatique PME : Intervention <4h \| DCB Technologies" |

**Impact :** Google tronque généralement au-delà de ~60-65 caractères (variable selon la largeur des caractères et le device). Les 4 titles à 75c+ seront tronqués de façon quasi certaine, perdant la marque "DCB Technologies" en fin de SERP mobile.

**Correction :** raccourcir en priorité les 4 titles > 75c (`saone-et-loire`, `loire`, `notre-adn`, `ain`/`caisse-enregistreuse/index`), en gardant le mot-clé local en tête et la marque en fin si la place le permet, sinon l'omettre plutôt que tronquer au milieu d'un mot.

### M4 : 15 meta descriptions hors fourchette recommandée 140-160 caractères, dont 6 au-delà de 180c

**Preuve (longueur exacte, hors pages légales) :**

| Page | Longueur |
|---|---|
| `caisse-enregistreuse/monnayeur/index.html:10` | 206c |
| `caisse-enregistreuse/hairnet/index.html:10` | 203c |
| `caisse-enregistreuse/saone-et-loire/index.html:10` | 193c |
| `caisse-enregistreuse/borne-de-commande/index.html:10` | 187c |
| `caisse-enregistreuse/coiffure/index.html:10` | 184c |
| `maintenance-informatique/infogerance-pme/index.html:10` | 182c |
| `caisse-enregistreuse/cashmag/index.html:10` | 180c |
| `caisse-enregistreuse/commerce-de-detail/index.html:10` | 179c |
| `caisse-enregistreuse/restaurant/index.html:10` | 176c |
| `maintenance-informatique/cloud-securite/index.html:10` | 176c |
| `caisse-enregistreuse/ain/index.html:10` | 174c |
| `contact/index.html:10` | 167c |
| `caisse-enregistreuse/rhone/index.html:10` | 166c |
| `maintenance-informatique/outils-collaboratifs/index.html:10` | 166c |
| `maintenance-informatique/index.html:11` | 163c |

**Impact :** au-delà de ~155-160c, Google tronque la meta description en plein milieu de phrase (parfois en plein milieu d'un mot ou d'un chiffre de prix/délai, ce qui est particulièrement dommageable ici vu que ces pages mettent en avant des prix et délais comme argument de clic). Les 6 descriptions au-delà de 180c perdent quasi systématiquement leur dernière phrase entière.

**Correction :** resserrer à 150-155c en gardant la promesse principale (prix ou délai) dans les 120 premiers caractères.

### M5 : llms.txt incomplet vis-à-vis de l'inventaire réel de pages

**Preuve :** `llms.txt` section "Pages maintenance informatique" (lignes 21-26) liste 4 pages (Maintenance & Dépannage, Cloud & Cybersécurité, Location & Installation, Outils Collaboratifs) mais pas `infogerance-pme` (page Contrat/Infogérance, cf. bloquant 1). La section "Pages métier caisse enregistreuse" (lignes 12-19) ne mentionne aucune des 4 pages département (`ain`, `loire`, `rhone`, `saone-et-loire`), ni la page `hairnet`.

**Impact :** un moteur IA qui lit `llms.txt` pour se faire une carte du site n'a pas connaissance de l'offre contrat IT ni de la couverture géographique par département, ce qui réduit ses chances de citer DCB sur des requêtes locales par département ou sur l'infogérance.

**Correction :** ajouter une ligne pour `infogerance-pme` dans la section IT, et une sous-section ou des lignes pour les 4 pages département + `hairnet` dans la section caisse.

---

## Mineurs

### m1 : 10 images sans `width`/`height` explicites

**Preuve :** avatars de témoignages sur 5 pages du silo IT (`maintenance-informatique/cloud-securite/index.html`, `infogerance-pme/index.html`, `location-vente-installation/index.html`, `maintenance-depannage/index.html`, `outils-collaboratifs/index.html`, 2-4 images chacune, ex. `<img src="../../assets/testimonial-pg.jpg" alt="Philippe Garnier" class="w-full h-full object-cover" ...>` sans attribut `width`/`height`) et 2 images sur `visibilite-web/creation-site-internet/index.html`. Risque de CLS atténué : ces images sont wrappées dans des conteneurs à taille fixe (avatar rond) ou utilisent `aspect-[4/3]` en Tailwind (réserve déjà l'espace via CSS), donc l'impact réel sur le Cumulative Layout Shift est faible, mais Lighthouse continue de signaler l'absence d'attributs HTML explicites.

**Correction :** ajouter `width="48" height="48"` (ou dimensions réelles) sur les avatars, `width`/`height` cohérents avec le ratio CSS sur les 2 images `creation-site-internet`.

### m2 : balise meta robots incohérente d'une page à l'autre

**Preuve :** 6 pages seulement portent une balise `<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large">` explicite (`caisse-enregistreuse/ain`, `loire`, `rhone`, `saone-et-loire`, `contact`, `notre-adn`). Les 28 autres pages indexables n'ont aucune balise robots (donc `index, follow` implicite par défaut, ce qui reste correct fonctionnellement).

**Impact :** aucun impact fonctionnel (le défaut navigateur/Google est `index, follow`), mais incohérence de traitement page à page qui trahit un travail fait par lots plutôt qu'un standard appliqué uniformément.

**Correction :** non bloquant, à uniformiser si un passage de polish global est fait sur le `<head>`.

### m3 : pas de page 404 dédiée

**Preuve :** `.htaccess` ligne 82-83 : `# ── 10. Pages d'erreur (à créer en Phase 1) ──` et `# ErrorDocument 404 /404.html` (commenté, jamais activé). Aucun fichier `404.html` à la racine du repo.

**Correction :** créer une page 404 avec navigation vers les hubs, avant mise en ligne (item déjà identifié comme "Phase 1" dans le fichier lui-même).

### m4 : 2 balises `<h1>` dans le DOM brut de chaque page business (par design, pas un bug)

**Preuve :** comptage `<h1` sur `caisse-enregistreuse/index.html` = 2 (une dans `.d-shell` ligne ~à confirmer visuellement, une dans `.m-shell`). C'est vrai sur les 30 pages business/éditoriales (silo Caisse, IT, Web, blog, contact, homepage) et cohérent avec l'architecture dual-shell documentée dans `CLAUDE.md` (`.d-shell`/`.m-shell` cohabitent dans le même fichier, un seul est affiché selon le breakpoint CSS). Les pages légales et `merci/` (single-shell) n'ont qu'un seul `<h1>`.

**Impact :** un crawler qui lit le HTML statique sans exécuter le CSS voit 2 `<h1>` par page. Google gère ce cas (contenu caché par CSS media query, pas par `display:none` permanent) sans pénalité connue, mais ce n'est pas un "un seul H1" au sens strict du HTML sémantique. Signalé pour mémoire, aucune correction recommandée : c'est l'architecture assumée du site, casser ça casserait le dual-shell.

### m5 : redirection V1 `/site-internet/` → `/visibilite-web/` non posée dans `.htaccess`

**Preuve :** `.htaccess` ne contient que les redirections `/service-it-360/` → `/maintenance-informatique/` (lignes 25-29). `pour-clement/REPARATIONS-TECHNIQUES-GO-LIVE.md` (section P0, point 2) liste explicitement `/site-internet/` → `/visibilite-web/` comme redirection à écrire avant bascule, non cochée.

**Impact :** hors périmètre de cet agent (infra, à la charge de Clément), mentionné ici uniquement parce que c'est un risque SEO réel si des URLs V1 `/site-internet/` sont indexées et perdraient leur jus organique sans ce mapping. Déjà tracé, pas une découverte nouvelle.

---

## Ce qui est SAIN (ne pas ré-auditer)

- **Zéro image `lh3.googleusercontent.com` restante** sur les 35 pages (recherche exhaustive) : le gap placeholder Google signalé dans `AUDIT_SEO.md` (Silo 2A) est résolu.
- **100% des balises `<img>` ont un attribut `alt`** sur les 35 pages, y compris les avatars et logos partenaires.
- **Fonts 100% auto-hébergées** (`assets/fonts/*.woff2` en `<link rel="preload">`), zéro appel à `fonts.googleapis.com`/`fonts.gstatic.com` détecté. Le gap RGPD/LCP de `AUDIT_SEO.md` est résolu.
- **Canoniques 34/34 correctes et auto-référentes**, toutes cohérentes avec les URLs du sitemap (aucune divergence protocole/domaine/trailing slash détectée).
- **JSON-LD valide à 100%** (aucune erreur de parsing JSON sur l'ensemble des blocs `application/ld+json` du site) avec des types riches et appropriés : `Service` + `areaServed` sur toutes les pages business, `FAQPage` partout où pertinent, `HowTo` + `Product` sur `borne-de-commande` et `monnayeur`, `BreadcrumbList` sur toutes les pages à plus d'un niveau de profondeur (y compris le hub IT, qui l'a bien mais avec un balisage `<script>` multi-lignes qui a produit un faux négatif en première passe d'audit, corrigé après vérification manuelle).
- **Zéro `aggregateRating`/`Review`** détecté nulle part sur le site : conforme à la règle absolue du projet.
- **Zéro page orpheline** : les 4 pages département et `hairnet` sont bien linkées depuis le hub Caisse (`caisse-enregistreuse/index.html` lignes 861 et 1348, desktop et mobile), `infogerance-pme` est linkée depuis la nav, le hub IT et 2 articles de blog.
- **Blog et Notre ADN sont dans la nav** (`js/scripts.js` lignes 469-471 desktop, 118 mobile) : l'item roadmap `CLAUDE.md` "Sprint 4" est fait, la documentation est en retard sur l'état réel du code.
- **Zéro ancre générique** ("cliquez ici", "en savoir plus", "lire la suite") détectée sur les 35 pages.
- **`.htaccess` solide** : HTTPS forcé, `www` → apex en 301, redirections 301 de la migration `/service-it-360/`, HSTS déjà actif (pas seulement commenté), `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, cache `Expires` et compression `DEFLATE` configurés.
- **`sameAs` du `LocalBusiness` homepage rempli** (Facebook, Instagram, lien Google Business Profile) : le gap "sameAs vide" de `AUDIT_SEO.md` est résolu.
- **Hiérarchie Hn sans saut** vérifiée sur les pages échantillonnées (H1 → H2 → H3, jamais de saut direct H1 → H3 ni de H4 orphelin).
- **`robots.txt` propre** : autorise les 8 crawlers IA explicitement nommés (GPTBot, ChatGPT-User, Claude-Web, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, Applebot-Extended), référence le sitemap, bloque les fichiers techniques sans bloquer de contenu utile.

---

## Récapitulatif pour mise à jour du master plan (`pour-clement/MASTER_PLAN.md`)

Les Sprints 2, 3, 4 et 9 du master plan (JSON-LD Accueil, Service JSON-LD hubs IT/Web, quick wins maillage, Phase 1 contenu hubs IT/Web) sont marqués "⏳ Non démarré" dans le tableau de suivi mais sont en réalité **déjà exécutés** d'après l'état du code observé ici (JSON-LD Service + BreadcrumbList sur les 3 hubs, nav avec Blog/Notre ADN, `sameAs` rempli). Ce rapport ne modifie pas le master plan (hors périmètre de cette tâche), mais toute personne qui le consulte pour savoir "par où reprendre" doit d'abord vérifier l'état réel du code plutôt que le tableau, qui date du 06/04/2026.
