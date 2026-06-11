# Audit styles et bonnes pratiques (11/06/2026)

Audit du code CSS/HTML des 27 pages `index.html` du site (hors `.claude/`, `Logo et images/`, `tools/`). Lecture seule : aucune correction appliquée. Référentiels de contrôle : `CLAUDE.md` (section "Grammaire visuelle"), `docs/front-library.md`.

## Synthèse

État général : la grammaire de couleur est globalement respectée (un accent dominant par page, CTA final desktop entièrement tokenisé via `var(--accent)` dans `style.css`). Les écarts sont surtout structurels (duplication CSS massive) et résiduels (quelques atomes orange en dur).

Top 3 des problèmes :
1. Duplication CSS de grande ampleur : le bloc `.m-cta-final` (≈10 règles) est recopié inline sur 22 pages, `.tonal-shift-elevation` sur 23 pages, le re-déclaratif `.material-symbols-outlined` sur 27 pages (déjà présent dans `style.css` et `mobile.css`). Et 873 attributs `style="font-variation-settings:'FILL' 1"` identiques (29 pour cent de tous les inline styles du site).
2. Couleurs en dur dans les atomes du CTA final mobile : le pattern non canonique `.resto` (base orange en dur + override) subsiste sur restaurant, caisse hub, saone-et-loire ; blog et notre-adn hardcodent `#F57C00` au lieu de `var(--accent,#F57C00)`.
3. Accents hors table : `#1D9E75` (vert inventé, accent complet du pilier caisse sur la home, 22 occurrences), `#1E5BD9` (bleu d'avatars sur 17 pages), plus les paires claires des top-stripes (slop différé). (Correction post-audit : le cas Hairnet initialement signalé était une erreur de scan, la page utilise bien `#4527A4` 62x et `#C59C45` 71x, table conforme.)

---

## 1. Couleurs en dur vs var(--accent) dans les atomes du CTA final

Desktop : RAS. Le CTA final desktop est entièrement tokenisé dans `css/style.css` (L457 à L486, `.d-cta-final .filet/.btn--primary/.d-tel .gly` utilisent tous `var(--accent)`). Les 23 sections `.d-cta-final` injectent leur accent via `style="--accent:...;--accent-dark:..."`, restaurant compris (`--accent:#EF4444`). Aucun hex en dur dans un atome desktop.

Mobile : le bloc `.m-cta-final` est inline sur chaque page. Deux familles coexistent.

Famille canonique (correcte) : `background:var(--accent,#F57C00)` sur `.topbar`, `.btn.btn-pri`, `.dpx-tel .gly`. L'accent vient du `style="--accent:..."` sur la section. 16 pages OK : boulangerie, commerce-de-detail, coiffure, monnayeur, borne-de-commande, cashmag, hairnet, maintenance-depannage, cloud-securite, location-vente-installation, outils-collaboratifs, infogerance-pme, creation-site-internet, seo-sea-local, hebergement, et les hubs IT + Web + home.

Famille `.resto` (dérive, pattern non canonique) :
- `caisse-enregistreuse/restaurant/index.html` L878 (`.topbar background:#F57C00`) et L887 (`.dpx-tel .gly color:#F57C00`) : base orange en dur, puis override `.resto` L879 à L881 vers `#EF4444`. Rendu correct (rouge) mais fragile : si la classe `.resto` saute, l'orange réapparait. Sévérité : important (dette technique, dérive documentée dans CLAUDE.md).
- `caisse-enregistreuse/index.html` L1594/L1601 et `caisse-enregistreuse/saone-et-loire/index.html` L1065/L1072 : même base orange en dur + règle `.resto` morte (les sections n'ont pas la classe `.resto`). Pages marque, donc l'orange rendu est correct, mais le code porte une règle inutile et n'utilise pas `var()`. Sévérité : cosmétique.

Hardcode orange direct (sans var, pages marque, rendu correct mais non canonique) :
- `blog/digitaliser-point-de-vente/index.html` L527, L531, L534 : `#F57C00` en dur sur `.topbar`, `.btn-pri`, `.dpx-tel .gly`. Sévérité : cosmétique.
- `notre-adn/index.html` L51, L57 : `#F57C00` en dur sur `.topbar` et `.dpx-tel .gly`. Sévérité : cosmétique.

Bilan : aucune page ne REND une couleur qui combat son accent. La seule vraie dérive structurelle est restaurant (base orange en dur masquée par un override). Les autres sont des pages marque dont l'orange est légitime mais codé en dur au lieu de `var(--accent,#F57C00)`.

---

## 2. Violations de grammaire (orange #F57C00 sur pages narration)

Pages narration testées : 6 sous-pages caisse, 5 sous-pages IT, 3 sous-pages Web, + cashmag et hairnet. Total `#F57C00` par page : la plupart à 3 (les 3 fallbacks `var(--accent,#F57C00)`, non comptés comme orange réel). Pages propres confirmées (orange = uniquement fallbacks ou cross-sell vers marque) : seo-sea-local, hebergement, outils-collaboratifs, cloud-securite, infogerance-pme, hairnet, maintenance-depannage.

Orange légitime (exceptions autorisées, ne PAS corriger) :
- Cross-sell vers une page marque ou un hub : `hover:text-[#F57C00]` et `cx-link/cx-arrow` orange sur les liens "Créer mon site", "En savoir plus sur CashMag/Hairnet", "Découvrir la maintenance IT", "Voir les solutions caisse". Présents sur boulangerie, restaurant, commerce-de-detail, coiffure, borne, location-vente-installation, etc. Orange = couleur de destination. Conforme.

Violations réelles (orange décoratif sur page narration) :
- Étoiles de notation témoignage en orange en dur. `caisse-enregistreuse/monnayeur/index.html` L937 à L958 (10 étoiles `style="...color:#F57C00"`) et `caisse-enregistreuse/borne-de-commande/index.html` L878 à L899 (10 étoiles). La page monnayeur est verte (`#059669`), la borne est indigo (`#4F46E5`) : les étoiles devraient porter l'accent de la page ou un or neutre, pas l'orange DCB. Sévérité : important.
- Badge de cross-sell orange alors que le reste de la card porte la couleur de destination. Les 8 cards de cross-sell intra-caisse ont un `cx-badge text-[#F57C00] bg-[#F57C00]/10`, alors que dans la MÊME card l'icône, le lien et la flèche utilisent correctement l'accent de destination. Exemple net : `caisse-enregistreuse/restaurant/index.html` L481 (badge "+20% panier moyen" orange) dans la card pointant vers borne-de-commande, dont l'icône L480 et le lien L486 sont bien en indigo `#4F46E5`. Le badge est le seul atome resté orange. Idem sur boulangerie L462, commerce-de-detail L497/L514, coiffure L479/L496, borne L631. Sévérité : important (incohérence interne à la card).
- Mockup de mini-site DCB orange dans le hero web. `visibilite-web/creation-site-internet/index.html` L61 à L114 : composant `.site-*` et `.fres-item.winner` en `#F57C00` (mini-aperçu d'un site dans le duo MacBook + iPhone). La page narration est violette (`#7C3AED`). Si le mockup represente la marque DCB c'est defendable, mais il introduit une tension orange/violet forte. Sévérité : important, décision design requise (pas une correction mécanique).

---

## 3. Styles inline vs classes

Volume `style="..."` par page (hors `.claude/`) : 2992 au total. Pages légales à 0, contact à 2, notre-adn à 7, blog à 33, puis tout le reste entre 77 et 203 (home 203, hub IT 202, hebergement 194, commerce-de-detail 193, location 184).

Le plus gros gisement, transverse à 3+ pages :
- `style="font-variation-settings:'FILL' 1"` sur les icônes Material : 873 occurrences identiques (29 pour cent de tous les inline styles). Une classe utilitaire existe déjà côté mobile (`.material-symbols-outlined.fill`, cf. `mobile.css`). Côté desktop, l'atome est recopié inline partout. Candidat n°1 à la classe partagée (`.material-symbols-outlined.fill { font-variation-settings:'FILL' 1 }` dans `style.css`). Sévérité : important (volume), risque faible.
- `style="...font-variation-settings...color:#hex"` (icônes colorées, dont les étoiles) : 184 occurrences. Mélange fill + couleur en dur, à factoriser via classes accentuées. Sévérité : cosmétique.
- Sur la home et les hubs : nombreux `style="--accent:...;--accent-shadow:..."` et tweaks layout one-off (positions absolues des blobs, gradients de hero) difficilement mutualisables (variantes par page). À laisser inline.

---

## 4. CSS dupliqué dans les `<style>` des pages

Blocs recopiés à l'identique (ou quasi) sur 3+ pages :

- Bloc `.m-cta-final { ... }` : inline sur 22 pages, environ 10 règles chacune, soit de l'ordre de 200 à 220 lignes dupliquées. Variantes : la plupart utilisent `var(--accent,#F57C00)` (mutualisable tel quel), restaurant/caisse-hub/saone utilisent la variante `.resto` en dur. Proposition : déplacer le squelette commun dans `m/css/mobile.css` (toutes les règles structurelles + `var(--accent)`), ne laisser inline que le `style="--accent:..."` sur la section. Prudence : vérifier la variante `.resto` et le bloc legèrement different du blog (`.btn-pri` avec padding/radius propres, L531) avant de globaliser. Sévérité : important, mais régression à tester page par page.
- Re-déclaratif `.material-symbols-outlined { font-variation-settings:... }` dans le `<head><style>` : 27 pages. Déjà défini dans `style.css` (L55) ET `mobile.css` (L19). Redondance pure. Proposition : supprimer les 27 copies inline (la définition centrale suffit). Sévérité : important, risque très faible (vérifier que les valeurs inline ne divergent pas avant suppression).
- `.tonal-shift-elevation { box-shadow:4px 4px 0px 0px rgba(7,43,107,0.04) }` : inline sur 23 pages, ABSENT de `style.css`. Identique partout, zéro variante. Proposition : ajouter une fois dans `style.css`, retirer les 23 inline. Sévérité : important, risque quasi nul (candidat le plus sûr).
- `@keyframes hero-blob-a/b` + `.hero-blob-a/b` + garde `prefers-reduced-motion` : 8 pages, bloc identique (canonique dans front-library P-01). Mutualisable dans `style.css`. Sévérité : cosmétique.
- Bloc `.faq-item{background:#F8F9FA}` (et variantes faq) : 4 pages. Sévérité : cosmétique.

Estimation lignes dupliquées mutualisables (cta-final + tonal-shift + material-symbols + blobs) : de l'ordre de 450 à 550 lignes cumulées sur l'ensemble du site.

---

## 5. Accents hors table

Inventaire des hex saturés ni dans la table des accents, ni dans les paires dark, ni dans les neutres (gris/slate Tailwind), ni dans les couleurs de mockup légitimes (chrome macOS `#FF5F57/#FEBC2E/#28C840`, Google SERP `#4285F4/#EA4335/#FBBC05/#34A853/#1A73E8/#5F6368/#202124`).

Hors table à signaler maintenant :
- `#1D9E75` (vert émeraude inventé, 22 occurrences) : accent COMPLET du pilier "caisse" sur la home (`index.html` L117 à L135 sur les `.bar/.ic/.pill/.feats/.go/.tab`, L434 à L448 sur la card desktop) et repris sur `caisse-enregistreuse/cashmag/index.html` L623 à L630. Ce n'est pas qu'un top-stripe : c'est l'icône, les pills, les puces, les dots, le tab actif. Vert le plus proche en table : teal `#0D9488` ou vert `#059669`. Sévérité : important (accent inventé porteur d'identité).
- `#1E5BD9` (bleu moyen, 17 pages) : gradient des pastilles d'avatar témoignage (`linear-gradient(135deg,#0B3D91,#1E5BD9)`). Décoratif mais systémique. Sévérité : cosmétique.
- `#FF9933` (orange, home + caisse hub) : à vérifier en contexte (probable mockup ou puce), proche d'un orange non `#F57C00`. Sévérité : cosmétique.

Top-stripes de cards (slop confirmé, NE PAS compter comme correction immédiate, phase anti-AI-slop différée) :
- `#345BAF` (home L122/L452/L465, cashmag L635) : fin de gradient stripe pilier IT.
- `#FF9800` (home L127/L470, cashmag L647) : fin de gradient stripe pilier web (orange Material, pas `#F57C00`).
- `#C084FC` (saone-et-loire L302, cashmag, caisse hub, hub IT) : fin de gradient stripe violet (`#A855F7 to #C084FC`).
Ces fins de gradient de stripes relèvent de la suppression des top-stripes prévue plus tard.

Verts "statut/succès" non documentés (tolérés, à formaliser) : `#16A34A`, `#22C55E`, `#10B981`, `#15803D`, `#166534`, `#14B8A6`. Usage sémantique (coches conformité NF525, dot "Online" du dashboard IT). `#10B981` est dans le pattern canonique P-01b (front-library), donc sanctionné. Les autres devraient être unifiés en un seul vert succès documenté ou remplacés par l'accent de page. Sévérité : cosmétique.

Cas Hairnet : FAUSSE ALERTE, corrigée après contre-vérification par l'orchestrateur. La page `caisse-enregistreuse/hairnet/index.html` utilise bien le couple de marque : `#4527A4` (62 occurrences) et `#C59C45` (71 occurrences), plus `#A855F7` (13 occurrences) sur les éléments cross-sell vers la page coiffure (couleur de destination, conforme à la grammaire). La table d'accents CLAUDE.md est correcte. Aucune action.

---

## 6. Bonnes pratiques techniques

Images sans `width`/`height` explicites : 30 sur 157 balises `<img>` (les mêmes 30 sont aussi sans `loading`). Répartition : avatars témoignages IT (environ 18, conteneurs flex à taille fixe, risque CLS faible mais dims manquantes), logos partenaires NF525/CashMag/Hairnet (certains ont une largeur via `style` inline), images produit borne K1 (`object-contain` en conteneur fixe), et le hero du hub caisse (`caisse-enregistreuse/index.html`) sur URL `lh3.googleusercontent.com` (déjà au backlog RGPD/LCP). Sévérité : important (CLS), atténuée par les conteneurs dimensionnés. La roadmap "Images dès réception client" couvre déjà le passage width/height systématique.

Animations hors système `dcb-reveal`/`dcb-stagger` :
- Sanctionnées : `hero-blob-a/b` (8 pages, canonique front-library P-01, avec garde reduced-motion).
- Hors système, one-off décoratives : `iphone-breathe`/`phone-breathe`/`kpi-*-breathe` (respiration des mockups device), `badge-pop`, `form-card-in`, marquees `h-partners-scroll`/`alan-scroll`, blobs `hubc-blob-a/b`, spinners `spin`/`c-spin`/`b-spin-anim`. Per doctrine, toute animation hors système doit être justifiée (référentiel anti-AI-slop). Les respirations device et `badge-pop` sont des candidats slop. Sévérité : cosmétique (sauf a11y ci-dessous).
- Manque de garde `prefers-reduced-motion` (a11y) sur 4 pages portant des animations infinies/entrée : `blog/index.html` (spinner `b-spin-anim` L416), `visibilite-web/creation-site-internet/index.html` (`iphone-breathe` 7s infinite L84), `visibilite-web/index.html` (`iphone-breathe` L91), `visibilite-web/seo-sea-local/index.html` (`phone-breathe` L88 + `badge-pop` L94/L101). Sévérité : important (accessibilité, mouvement non réductible).

z-index : valeurs dans une petite échelle cohérente (`z-index:0` à `6`, plus Tailwind `z-0/10/20/30`). Aucun outlier hors échelle. RAS.

---

## Plan de correction recommandé (priorisé)

### A. Corrections mécaniques sûres (faible risque)
1. Étoiles témoignage orange sur monnayeur (L937 à L958) et borne (L878 à L899) : passer à l'accent de page (`#059669` / `#4F46E5`) ou un or neutre. Catégorie 2.
2. Badge de cross-sell orange : aligner les 8 `cx-badge` sur la couleur de destination de leur card (restaurant L481, boulangerie L462, commerce L497/L514, coiffure L479/L496, borne L631). Catégorie 2.
3. Mobile CTA final : remplacer les `#F57C00` en dur de blog (L527/531/534) et notre-adn (L51/57) par `var(--accent,#F57C00)` ; supprimer la règle `.resto` morte sur caisse hub (L1595). Restaurant : convertir base + override `.resto` en `var(--accent)` unique avec `--accent:#EF4444` sur la section. Catégorie 1. (Note : saone-et-loire déjà corrigée par la réparation du pilote 71, commit ddbf918.)
4. (Supprimé : le cas Hairnet était une fausse alerte, cf. catégorie 5.)

### B. Mutualisations CSS (gain volume, régression à tester)
5. `.tonal-shift-elevation` : ajouter une fois dans `style.css`, retirer les 23 copies inline. Le plus sûr.
6. Re-déclaratif `.material-symbols-outlined` du `<head>` : supprimer les 27 copies inline (déjà central). Vérifier qu'aucune valeur inline ne diverge avant suppression.
7. Classe `.material-symbols-outlined.fill` desktop dans `style.css`, puis remplacer progressivement les 873 `style="font-variation-settings:'FILL' 1"`.
8. Bloc `.m-cta-final` structurel vers `m/css/mobile.css` (garder `style="--accent:..."` inline). Tester page par page, attention variantes `.resto` et blog. Le plus risqué des 4.

### C. À traiter en phase anti-AI-slop (différé, ne pas compter comme correction immédiate)
9. Suppression des top-stripes de cards (slop confirmé) : emporte avec elle les fins de gradient `#345BAF`, `#FF9800`, `#C084FC`.
10. Revue des animations one-off (respirations device, `badge-pop`, marquees) au regard du référentiel anti-slop.
11. Reconsidérer l'accent inventé `#1D9E75` du pilier caisse et le bleu d'avatar `#1E5BD9` lors du repassage identité.

### D. A11y et perf (à planifier hors slop)
12. Ajouter `prefers-reduced-motion` aux 4 pages non gardées (blog, creation-site-internet, web hub, seo-sea-local).
13. Width/height + loading sur les 30 images (couvert par la roadmap images).
