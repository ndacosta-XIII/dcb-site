# Audit SEO Technique et On-Page V2 (pré-lancement)

**Dimension :** SEO technique et on-page (titles, meta, canoniques, Open Graph, sitemap, robots/llms, JSON-LD, maillage, images, dates E-E-A-T)
**Date :** 22/07/2026
**Agent :** seo-expert (Sonnet 5)
**Cible :** version LIVE https://dcb-technologies.fr/new/, contre-vérifiée par curl sur un échantillon (headers, sitemap.xml, llms.txt, robots.txt, une image OG). Le repo local reflète exactement le live sur tous les points vérifiés.
**Périmètre :** 35 fichiers `index.html` (34 pages indexables + `/merci/` en noindex volontaire). Silo Caisse (13 pages dont 4 département), silo Maintenance Informatique (6 pages, GELÉ), silo Visibilité Web (4 pages), Blog (5 pages), Contact, Notre ADN, 3 pages légales, Homepage.

Rappels de cadrage respectés (cf. `docs/audit-prelancement-v2/ETAT.md`) : le `X-Robots-Tag: noindex` du live `/new/` n'est pas compté (staging volontaire, confirmé par curl) ; canoniques/sitemap pointant `dcb-technologies.fr` racine sans `/new/` sont attendus ; zéro `aggregateRating`/`Review` recherché et confirmé absent ; le silo Maintenance Informatique est GELÉ (placeholder en attente de Clément) et tous ses constats sortent dans la section dédiée, jamais en bloquant actionnable.

---

## NOTE : 82/100

**Barème (10 catégories, 10 points chacune), silo IT neutralisé dans la notation (ses gaps n'abaissent pas la note, cf. section IT gelé) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | Titles (unicité, longueur, intention) | 6/10 | Uniques sur 34/34, mais 12 pages dépassent 65 caractères dont 4 au-delà de 75c. Inchangé depuis V1 |
| 2 | Meta descriptions (unicité, longueur) | 6/10 | Uniques et présentes sur 34/34, mais 15 pages hors fourchette 140-160c dont 6 au-delà de 180c. Inchangé depuis V1 |
| 3 | Structure Hn | 9/10 | H1 présent, hiérarchie H2/H3 sans saut, nuance dual-shell assumée (2 `<h1>` par fichier, un par shell) |
| 4 | Canoniques | 10/10 | 33/33 pages hors silo IT (+ 6 IT) ont une canonique auto-référente cohérente avec le sitemap |
| 5 | Sitemap.xml | 9/10 (hors IT) | 33/33 pages indexables hors silo IT présentes avec `lastmod` à jour (22/07 ou 21/07/2026) ; seul manque = `infogerance-pme` (silo IT, cf. section dédiée) |
| 6 | robots.txt / llms.txt | 8/10 | robots.txt inchangé, propre. **llms.txt amélioré depuis V1** : les 4 pages département et `hairnet` sont maintenant listées ; seul `infogerance-pme` manque encore (silo IT) |
| 7 | Maillage interne | 10/10 | Zéro lien interne cassé détecté sur l'ensemble des `href` du site (vérification exhaustive), zéro page orpheline, ancres descriptives |
| 8 | JSON-LD | 10/10 | 100% des blocs sont un JSON valide (aucune exception, y compris les blocs multi-lignes qui avaient produit un faux négatif en V1), types riches partout, `LocalBusiness` inliné avec `@id` strictement identique (`#localbusiness`, même nom/adresse/téléphone) sur 19 pages, `BreadcrumbList` présent sur toutes les pages à plus d'un niveau, zéro `aggregateRating` |
| 9 | Open Graph | 9/10 (hors IT) | **Amélioration majeure depuis V1** : 24 pages ont maintenant chacune une image OG dédiée à son URL (`og-ain.jpg`, `og-boulangerie.jpg`, etc., toutes vérifiées existantes et servies en live) au lieu de l'image générique unique de V1. Reste un résidu de duplication binaire (voir Majeur M1) et le silo IT toujours sans OG (section dédiée) |
| 10 | Images / fonts | 8/10 | Zéro `lh3.googleusercontent.com`, 100% des `<img>` ont un `alt`, fonts auto-hébergées, LCP/lazy-loading corrects ; 30 images sans `width`/`height` (dont un résidu nouveau hors IT, voir Mineur m1) |

**Total : 82/100.** Progression nette depuis les 75/100 de V1, portée par la correction complète des images OG dédiées et l'amélioration de llms.txt. Les 2 bloquants de V1 ont disparu de la liste actionnable : celui du sitemap se confirme identique mais est désormais recadré en gap du silo IT gelé (pas un blocage de lancement), celui de l'OG IT reste vrai mais pour la même raison.

**Bloquants pré-lancement actionnables : 0**

Aucun des deux bloquants de V1 ne reste actionnable au sens de ce lancement : les deux sont internes au silo Maintenance Informatique, explicitement gelé en attente de la grille tarifaire réelle de Clément (cf. `CLAUDE.md`, roadmap "Bloqué : attente client"). Ils sont documentés dans la section « IT gelé » ci-dessous pour ne pas être perdus, mais ne bloquent pas la mise en ligne du reste du site.

---

## Majeurs

### M1 : les images OG dédiées sont bien des URLs uniques par page, mais 4 groupes sont des doublons binaires identiques

**Preuve (empreinte MD5 des fichiers `assets/og-*.jpg`) :**
- `f866491ecc...` : `og-ain.jpg`, `og-caisse-enregistreuse.jpg`, `og-commerce-de-detail.jpg`, `og-loire.jpg`, `og-rhone.jpg`, `og-saone-et-loire.jpg` (6 fichiers strictement identiques)
- `6fec9c6c84...` : `og-boulangerie.jpg`, `og-cashmag.jpg`, `og-coiffure.jpg` (3 fichiers identiques)
- `96bf8705d4...` : `og-contact.jpg`, `og-notre-adn.jpg` (2 fichiers identiques)
- `e4c38e1e66...` : `og-blog.jpg`, `og-blog-norme-nf525-caisse-enregistreuse.jpg` (2 fichiers identiques)

Vérifié en live : `curl -I https://dcb-technologies.fr/new/assets/og-ain.jpg` renvoie 66779 octets, identique au fichier local.

**Impact :** le point technique de V1 (une seule URL `og-homepage.jpg` partout) est résolu, chaque page a désormais sa propre URL d'image et son propre `og:title`/`og:description`. Mais visuellement, un partage de la page hub Caisse, Ain, Loire, Rhône, Saône-et-Loire ou Commerce de détail affichera la même photo sur LinkedIn/Facebook/WhatsApp : la différenciation visuelle recherchée par la correction n'est que partiellement atteinte (6 pages à fort enjeu SEO local partagent la même image).

**Correction :** non bloquant (amélioration nette actée), mais à finir dès réception des visuels produits réels (déjà tracé dans `CLAUDE.md` section "Bloqué : attente client" : photos produits réelles).

### M2 : 12 titles dépassent 65 caractères, 4 au-delà de 75 caractères (inchangé depuis V1)

**Preuve (longueur exacte, entités HTML décodées) :**

| Page | Longueur | Title |
|---|---|---|
| `caisse-enregistreuse/saone-et-loire/index.html:9` | 89c | "Caisse enregistreuse à Mâcon et en Saône-et-Loire (71) : Chalon, Paray \| DCB Technologies" |
| `caisse-enregistreuse/loire/index.html:9` | 87c | "Installateur caisse enregistreuse Loire (42) : Saint-Étienne, Roanne \| DCB Technologies" |
| `notre-adn/index.html:9` | 78c | "Qui sommes-nous ? Techniciens caisse & IT en Saône-et-Loire \| DCB Technologies" |
| `caisse-enregistreuse/index.html:9` | 76c | "Caisse enregistreuse NF525 : installation et SAV sur site \| DCB Technologies" |
| `caisse-enregistreuse/ain/index.html:9` | 76c | "Caisse enregistreuse à Bourg-en-Bresse et dans l'Ain (01) \| DCB Technologies" |
| `blog/index.html:9` | 73c | "Blog & Actualités \| Conseils & Guides pour Commerçants \| DCB Technologies" |
| `contact/index.html:9` | 71c | "Contact DCB Technologies : caisse, IT et web en Saône-et-Loire et Rhône" |
| `caisse-enregistreuse/rhone/index.html:9` | 66c | "Caisse enregistreuse Lyon, Givors et Rhône (69) \| DCB Technologies" |
| `index.html:9` | 66c | "DCB Technologies \| Caisse NF525, informatique et web : 71 69 01 42" |

(3 titles supplémentaires du silo IT >65c omis ici, cf. section IT gelé)

**Impact :** identique à V1, aucune correction appliquée. Google tronque au-delà de ~60-65 caractères, perte de la marque en fin de SERP mobile sur les 4 titles à 76c et plus.

**Correction :** raccourcir en priorité `saone-et-loire` (89c), `loire` (87c), `notre-adn` (78c), `caisse-enregistreuse/index` et `ain` (76c chacun), en gardant le mot-clé local en tête.

### M3 : 15 meta descriptions hors fourchette 140-160c, dont 6 au-delà de 180c (inchangé depuis V1)

**Preuve (longueur exacte, hors silo IT) :**

| Page | Longueur |
|---|---|
| `caisse-enregistreuse/monnayeur/index.html:10` | 206c |
| `caisse-enregistreuse/hairnet/index.html:10` | 203c |
| `caisse-enregistreuse/saone-et-loire/index.html:10` | 193c |
| `caisse-enregistreuse/borne-de-commande/index.html:10` | 187c |
| `caisse-enregistreuse/coiffure/index.html:10` | 184c |
| `caisse-enregistreuse/cashmag/index.html:10` | 180c |
| `caisse-enregistreuse/commerce-de-detail/index.html:10` | 179c |
| `caisse-enregistreuse/restaurant/index.html:10` | 176c |
| `caisse-enregistreuse/ain/index.html:10` | 174c |
| `contact/index.html:10` | 167c |
| `caisse-enregistreuse/rhone/index.html:10` | 166c |

(4 lignes supplémentaires du silo IT omises ici, cf. section IT gelé)

**Impact :** identique à V1. Au-delà de ~155-160c, Google tronque en plein milieu de phrase, parfois en plein milieu d'un prix ou d'un délai (l'argument de clic principal de ces pages).

**Correction :** resserrer à 150-155c en gardant la promesse principale (prix ou délai) dans les 120 premiers caractères. Priorité aux 6 descriptions au-delà de 180c.

---

## Mineurs

### m1 : 30 images sans `width`/`height` explicites, dont un résidu nouveau hors silo IT

**Preuve :** le badge partenaire `assets/partenaire-nf525.webp` est sans `width`/`height` sur 7 pages du silo Caisse (`ain`, `cashmag`, `hairnet`, `index` (hub), `loire`, `rhone`, `saone-et-loire`), plus `hairnet-logo-blanc.webp` sur `cashmag/index.html` et une image décorative `hero-bg-datacenter.webp` sur `index.html` (root, `aria-hidden="true"`, position absolue, zéro impact CLS réel car décorative). Le reste (23 images) est concentré dans le silo IT (avatars témoignages) et 2 images sur `visibilite-web/creation-site-internet/index.html`, déjà signalé en V1.

**Impact :** risque de CLS faible (badges de petite taille, souvent contraints par CSS), mais Lighthouse continue de le signaler. Le badge `partenaire-nf525.webp` est un ajout récent (probablement lié au retrait du claim NF525 obligatoire, cf. mémoire projet) qui n'a pas reçu ses attributs dimensionnels contrairement au reste des logos partenaires.

**Correction :** ajouter `width`/`height` réels sur `partenaire-nf525.webp` (7 pages Caisse) et `hairnet-logo-blanc.webp` (1 page), non bloquant.

### m2 : `og:updated_time` incohérent : présent sur seulement 3 des 24 pages avec OG, et daté antérieurement à la date E-E-A-T affichée

**Preuve :** `og:updated_time` n'existe que sur `caisse-enregistreuse/saone-et-loire/index.html:20` (`2026-07-02`), `caisse-enregistreuse/ain/index.html:20` (`2026-07-02`) et `caisse-enregistreuse/rhone/index.html:20` (`2026-07-01`). Les 21 autres pages OG n'ont pas cette balise. Sur les 3 pages qui l'ont, la date affiche fin juin/début juillet alors que le `<time datetime>` E-E-A-T visible de la même page indique le 21/07/2026.

**Impact :** signal mineur pour les crawlers sociaux/IA qui lisent cette balise en complément du JSON-LD, incohérence interne à la page.

**Correction :** soit généraliser `og:updated_time` sur les 24 pages OG en le synchronisant avec la date E-E-A-T, soit la retirer partout (elle n'est pas obligatoire). Non bloquant.

### m3 : tiret cadratin résiduel dans 2 commentaires de code non indexés

**Preuve :** `robots.txt:2` et `.htaccess:2` contiennent chacun un caractère tiret cadratin (U+2014) dans leur ligne de commentaire d'en-tête ("DCB TECHNOLOGIES [tiret cadratin] robots.txt" / "[tiret cadratin] Configuration Apache"). Ce sont des commentaires techniques, jamais servis comme contenu ni affichés à un visiteur ou un moteur ; zéro occurrence dans le contenu écrit réel du site (titres, meta, JSON-LD, FAQ : grep exhaustif à 0 résultat).

**Impact :** aucun sur le SEO ou le GEO. Signalé uniquement parce que la règle projet est "zéro tolérance" sans distinction de portée.

**Correction :** cosmétique, à corriger seulement si un passage est fait sur ces fichiers pour une autre raison.

### m4 : pas de page 404 dédiée (inchangé depuis V1)

**Preuve :** `.htaccess:82-83`, la ligne `ErrorDocument 404 /404.html` reste commentée, aucun fichier `404.html` à la racine.

**Correction :** à créer avant bascule, déjà tracé comme "Phase 1" dans le fichier lui-même.

### m5 : redirection V1 `/site-internet/` manquante (inchangé depuis V1, hors périmètre SEO)

**Preuve :** `.htaccess` ne contient toujours que les redirections `/service-it-360/`. `pour-clement/REPARATIONS-TECHNIQUES-GO-LIVE.md` liste `/site-internet/` → `/visibilite-web/` comme non cochée.

**Impact :** risque SEO réel si des URLs V1 sont encore indexées, mais relève de l'infra (déjà tracé, pas une découverte nouvelle de cet audit).

---

## Section IT gelé (silo Maintenance Informatique : constats sortis de la notation et des bloquants)

Le silo `maintenance-informatique/` (hub + 5 sous-pages) est un placeholder en attente de la grille tarifaire réelle de Clément (cf. `CLAUDE.md`). Les constats ci-dessous sont réels et identiques à V1 (aucune régression, aucune correction), mais restent, par consigne du cadrage V2, hors notation et hors bloquant actionnable pour ce lancement.

- **Open Graph et Twitter Card totalement absents sur les 6 pages** (`index`, `cloud-securite`, `infogerance-pme`, `location-vente-installation`, `maintenance-depannage`, `outils-collaboratifs`). Aucune balise `og:title`/`og:description`/`og:image`/`twitter:card`.
- **`infogerance-pme` absent de `sitemap.xml`** (33 entrées vs 34 pages indexables réelles, confirmé identique en live par `curl` : le fichier existe, répond 200, a un canonical propre, mais zéro entrée sitemap) et **absent de `llms.txt`** (les autres pages IT y figurent).
- **Dates E-E-A-T figées à avril 2026** sur les 6 pages (`2026-04-23` ou `2026-04-24`), alors que le contenu du silo a été retouché depuis (doctrine SAV/prix documentée dans `docs/content-reference.md`). Petite incohérence supplémentaire notée cette fois : le `<time>` desktop affiche "Mis a jour" sans accent sur l'à, contrairement au reste du site ("Mis à jour").
- **`sitemap.xml` : `lastmod` du hub IT à `2026-06-24`**, désynchronisé de la date E-E-A-T réelle affichée sur la page (`2026-04-23`).
- **`provider` du schéma `Service` non inliné** sur les 6 pages : `"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}` est une référence nue, sans qu'aucun objet `LocalBusiness` portant cet `@id` ne soit défini dans le même document JSON-LD de la page (contrairement aux 19 pages hors IT où le `LocalBusiness` est intégralement inliné dans le `provider`). Le JSON reste syntaxiquement valide, mais un validateur de rich results peut ne pas résoudre la référence inter-documents et remonter un `provider` incomplet.
- **12 titles/15 descriptions hors gabarit** (cf. Majeurs M2/M3) : 3 titles IT (`infogerance-pme` 75c, `outils-collaboratifs` 72c, hub IT 69c) et 4 descriptions IT (`infogerance-pme` 182c, `cloud-securite` 176c, `outils-collaboratifs` 166c, hub IT 163c) partagent le même défaut que le reste du site, à traiter dans le même lot le jour où le silo sera dégelé.

Aucune action requise avant lancement sur cette section : à reprendre uniquement quand Clément livre la grille tarifaire réelle et que le silo sort du statut gelé.

---

## Ce qui est SAIN (ne pas ré-auditer)

- **Zéro lien interne cassé** sur l'ensemble du site (vérification exhaustive de tous les `href` internes contre le système de fichiers réel), zéro page orpheline, maillage nav + hub + cross-sell intact.
- **JSON-LD 100% valide** sur les 31 fichiers qui en portent (aucune erreur de parsing, y compris sur les blocs `<script>` avec attributs multi-lignes qui avaient produit un faux négatif en V1, revérifiés ici avec un parseur tolérant à la mise en forme).
- **`LocalBusiness` cohérent** : sur les 19 pages où il est inliné (homepage, contact, hub Caisse + 8 sous-pages + 4 département, hub Web + 3 sous-pages), l'`@id` (`https://dcb-technologies.fr/#localbusiness`), le nom, l'adresse (Dardilly 69570) et le téléphone sont identiques à chaque occurrence : aucune divergence NAP détectée.
- **`BreadcrumbList` présent sur toutes les pages à plus d'un niveau de profondeur**, y compris le hub IT (vérifié malgré le piège de mise en forme signalé en V1).
- **Canoniques 33/33 (hors IT) + 6/6 (IT) auto-référentes et cohérentes** avec le sitemap, aucune divergence protocole/domaine/trailing slash.
- **llms.txt amélioré depuis V1** : les 4 pages département et `hairnet` y figurent désormais (gap V1 comblé), seul `infogerance-pme` manque encore (silo IT gelé).
- **24 pages ont chacune une image Open Graph dédiée à son URL** (gap majeur de V1 comblé au niveau des URLs, résidu de duplication binaire signalé en M1) ; toutes vérifiées existantes sur le live par `curl`.
- **Zéro `lh3.googleusercontent.com`**, **100% des `<img>` ont un `alt`**, fonts 100% auto-hébergées, `fetchpriority="high"` sur les heros de 29 pages, `loading="lazy"` largement appliqué hors LCP.
- **Zéro `aggregateRating`/`Review`** nulle part sur le site.
- **`.htaccess` inchangé et toujours solide** : HTTPS forcé, `www` → apex, redirections `/service-it-360/`, HSTS actif, headers de sécurité, cache et compression.
- **`robots.txt` inchangé, propre**, crawlers IA explicitement autorisés, sitemap référencé.
- **X-Robots-Tag `noindex` confirmé en direct par `curl`** sur `/new/` (staging intentionnel, conforme au cadrage).

---

## Comparaison avec le rapport V1 (`docs/audit-prelancement/03-seo-technique.md`)

| Constat V1 | Statut V2 |
|---|---|
| Bloquant 1 : `infogerance-pme` absent du sitemap | **Identique**, mais recadré hors bloquant actionnable (silo IT gelé) |
| Bloquant 2 : OG absent sur les 6 pages IT | **Identique**, recadré hors bloquant actionnable (silo IT gelé) |
| M1 : image OG générique unique dupliquée sur 24 pages | **Corrigé pour l'essentiel** : chaque page a maintenant sa propre URL dédiée. Résidu : 4 groupes de fichiers restent des doublons binaires identiques (nouveau Majeur M1 de ce rapport, portée réduite) |
| M2 : dates E-E-A-T obsolètes sur le silo IT | **Identique**, silo IT gelé |
| M3 : 12 titles >65c | **Identique**, non corrigé |
| M4 : 15 meta descriptions hors fourchette | **Identique**, non corrigé |
| M5 : llms.txt incomplet (dept + hairnet absents) | **Corrigé** : dept + hairnet ajoutés. Seul `infogerance-pme` manque encore (IT) |
| m1 : 10 images sans width/height | **Élargi** : 30 images concernées désormais, dont un résidu nouveau hors IT (`partenaire-nf525.webp` sur 7 pages Caisse) |
| m2 : meta robots incohérente | Non revérifié en détail cette fois (non bloquant, jugé stable) |
| m3 : pas de page 404 | **Identique**, non corrigé |
| m4 : 2 `<h1>` par page (dual-shell) | **Assumé**, architecture inchangée, aucune action |
| m5 : redirection `/site-internet/` manquante | **Identique**, hors périmètre SEO (infra) |
| Sain V1 (lh3, alt, fonts, canoniques, JSON-LD, maillage, sameAs, robots.txt) | **Toujours sain**, reconfirmé |

**Delta net : note passée de 75/100 à 82/100.** La progression vient de deux corrections réelles et vérifiées (OG dédié par page, llms.txt complété pour le silo Caisse) pendant que les gaps de finition (titles/meta descriptions longs, page 404) n'ont pas bougé et que les deux bloquants V1 sont désormais correctement compris comme relevant du silo IT gelé plutôt que comme blocages du lancement.
