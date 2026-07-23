# Rapport final : audit pré-lancement V2 (synthèse)

**Date :** 22/07/2026
**Destinataire :** XIII (Nathanaël Da Costa), co-fondateur
**Périmètre :** synthèse des 9 dimensions de l'audit pré-lancement V2 (`docs/audit-prelancement-v2/01-seo-technique.md` à `09-design.md`), après vérification adversariale (`10-verification.md`). Comparaison avec l'audit pré-lancement V1 du 21/07/2026 (`docs/audit-prelancement/RAPPORT-FINAL.md`).

---

## 1. Verdict

**Note globale V2 : 85/100** (moyenne arrondie des 9 dimensions : 82, 80, 92, 74, 84, 92, 83, 85, 89 ; somme 761 / 9 = 84,6, arrondi à 85).

**Comparaison directe avec le 21/07 :** 76/100 en V1, 85/100 en V2. **Progression de +9 points en 24 heures.** Cette progression n'est pas cosmétique : elle vient de corrections de code et de contenu réellement vérifiées sur pièces (JSON-LD LocalBusiness inliné, llms.txt complété, dates E-E-A-T recalées, silo Web dé-cannibalisé, homepage dé-fusionnée sur le SAV, témoignages rééquilibrés IT/Web), pas d'un changement de barème.

**Le site est-il publiable ? Oui, avec une seule correction préalable.** Un unique bloquant pré-lancement subsiste après vérification adversariale (section 3 ci-dessous) : une promesse commerciale intenable sur une seule page (`commerce-de-detail`), corrigeable en 2 lignes sur les 2 shells. Une fois ce point traité (et validé par XIII, cf. process page publication-ready), rien d'autre dans le code n'empêche la mise en ligne. Le silo Maintenance Informatique reste volontairement gelé (placeholder en attente de la grille tarifaire de Clément) et n'entre dans aucun blocage de ce lancement.

---

## 2. Tableau des 9 dimensions

| # | Dimension | Note V1 | Note V2 | Delta | Bloquants restants après vérification |
|---|---|---|---|---|---|
| 1 | SEO technique et on-page | 75 (`docs/audit-prelancement/03-seo-technique.md`) | 82 (`01-seo-technique.md`) | +7 | 0 (les 2 bloquants V1 sont recadrés en gaps du silo IT gelé, non actionnables) |
| 2 | GEO / AI search | 66 (`04-geo-ai.md` V1) | 80 (`02-geo-ai.md`) | +14 | 0 |
| 3 | QA mécanique | 60 brut / 100 ajustée (`01-qa-mecanique.md` V1, ajustement documenté dans `docs/audit-prelancement/RAPPORT-FINAL.md`) | 92 (`03-qa-mecanique.md`) | -8 vs ajustée V1* | 0 après vérification (BOM manquant sur `merci/index.html` requalifié **mineur** par `10-verification.md`, impact réel nul grâce au `meta charset`) |
| 4 | GEO local et fiche GBP | 60 (`05-seo-local-gbp.md` V1) | 74 (`04-geo-local-gbp.md`) | +14 | 1 bloquant **hors code** non re-vérifiable en session (ancrage GPS GBP, mur anti-bot Google rencontré) : action XIII, cf. section 7 |
| 5 | Cannibalisation | 63 (`06-cannibalisation.md` V1) | 84 (`05-cannibalisation.md`) | +21 | 0 (le bloquant silo Web de V1 est résolu et vérifié) |
| 6 | Cohérence des claims + parité mobile | 80 (`02-coherence.md` V1) | 92 (`06-coherence.md`) | +12 | 0 (les 3 bloquants V1 sont corrigés et vérifiés sur fichier) |
| 7 | Marketing / message | 69 (`08b-marketing.md` V1) | 83 (`07-marketing.md`) | +14 | 1 : le bloquant unique du site (section 3) |
| 8 | Conversion (CRO) | 78 (`08a-cro.md` V1) | 85 (`08-cro.md`) | +7 | 0 (le bloquant V1, tarif IT factice, est recadré en silo IT gelé) |
| 9 | Design / a11y / cohérence visuelle | Pas de dimension équivalente en V1 (`09-design.md` : "la campagne v1 n'avait pas de dimension design/a11y dédiée") | 89 (`09-design.md`) | Nouveau | 0 (aucun bloquant dur) |

*\* La dimension QA est le seul cas où le delta brut est négatif. En V1, la note brute de l'agent était 60/100 (une seule déduction, le cache-bust, invalidée ensuite comme faux positif et remontée à 100/100 dans `docs/audit-prelancement/RAPPORT-FINAL.md`). En V2, l'agent QA a trouvé un fait réel nouveau (BOM UTF-8 absent sur `merci/index.html`) qu'il a coté "bloquant" (d'où 92 et non plus haut) ; `10-verification.md` requalifie ce point en **mineur** (le `meta charset="utf-8"` présent neutralise tout risque de rendu cassé). Le delta n'est donc pas une régression de fond, c'est un artefact de notation ponctuel sur un fait mineur.*

**Périmètre non repris dans cette moyenne V2** : les dimensions V1 "Inventaire live" (90/100) et "Tracking/Ads" (51/100) n'ont pas de rapport V2 dédié dans ce cycle (`ETAT.md` ne liste que 9 lots). Elles ne sont ni corrigées ni dégradées ici, simplement hors du périmètre relancé ; leurs actions restent celles de `docs/audit-prelancement/RAPPORT-FINAL.md` (config comptes, cf. section 7).

---

## 3. LE bloquant pré-lancement (unique, post-vérification)

**Constat :** `caisse-enregistreuse/commerce-de-detail/index.html`, ligne 304 (desktop) et ligne 727 (mobile).

```
Titre      : Technicien sur site en moins de 4h
Sous-titre : Votre technicien attitré, formé à votre parc, disponible 7j/7 24h/24
```

Le "disponible 7j/7 24h/24" qualifie directement le technicien sur site, immédiatement après "en moins de 4h" : lu au premier degré, la phrase engage un déplacement physique à 3h du matin un dimanche. C'est exactement le défaut que la homepage portait en V1 et qui y a été corrigé (`index.html:473` et `:1038` affichent désormais la formule validée). Il survit uniquement ici, sur une page de conversion.

**Confirmé par deux rapports indépendants** : `07-marketing.md` (B1) et `10-verification.md` (B2, verdict CONFIRMÉ). Périmètre vérifié étroit : les occurrences "SAV 7j/7 24h/24 avec intervention sur site en moins de 4h" sur `borne-de-commande`, `monnayeur`, `cashmag`, `hairnet` sont défendables car elles rattachent le 24h/24 au SAV/astreinte, pas au déplacement physique. Seul `commerce-de-detail` fait l'amalgame.

**Correction :** aligner le sous-titre sur la formule canonique homepage : **« Sur site sous 4h 7j/7, astreinte 24h/24 »**, en séparant bien les deux registres (déplacement physique sous 4h d'un côté, astreinte/télémaintenance 24h/24 de l'autre). Deux lignes de texte, deux shells (desktop + mobile), une seule page.

**Qui :** validation XIII puis `copywriter-site` (texte seul, aucun changement de structure). **Effort :** 15 minutes.

---

## 4. Majeurs confirmés

Corrections recommandées avant ou juste après lancement (non bloquantes), toutes confirmées par `10-verification.md`.

### M1. Title du hub Web dupliquant la tête du title de `creation-site-internet`
- **Preuve :** hub `Création de site internet et SEO local` vs enfant `Création Site Internet Professionnel PME` : même syntagme de tête "Création [de] site internet". Les hubs caisse et IT ne reprennent aucun title d'enfant.
- **Source :** `05-cannibalisation.md` (Majeur 1), confirmé `10-verification.md` (M1).
- **Correction :** retitrer le hub sur l'offre globale sans répéter "création de site internet" mot pour mot (registre déjà choisi pour le H1 : "présence en ligne", "visibilité web"). `copywriter-site` après validation XIII.

### M2. Divergence JSON-LD d'adresse entre `contact/` et `notre-adn/`, même `@id` LocalBusiness
- **Preuve :** homepage (`index.html:284-291`) = objet d'adresse unique, `addressRegion "Auvergne-Rhône-Alpes"`, avec `geo`. `contact/index.html:444-459` = tableau de 2 adresses, régions "Rhône"/"Saône-et-Loire", sans `geo`. `notre-adn/index.html:44-71` = encore un `@id` distinct (`.../notre-adn/#organization`), même tableau. Trois représentations contradictoires d'une même entité.
- **Source :** `04-geo-local-gbp.md` (Majeur M1) et `02-geo-ai.md` (Majeur 1), confirmé `10-verification.md` (M2).
- **Correction :** aligner `addressRegion` sur une seule convention ("Auvergne-Rhône-Alpes") et ajouter `geo` sur `contact/`, ou mieux : faire porter le tableau à 2 adresses uniquement sur le nœud canonique de l'Accueil et faire pointer `contact/`/`notre-adn/` vers `{"@id": "...#localbusiness"}` en référence pure, comme déjà fait pour `provider` sur 13 pages caisse/web. `seo-expert`.

### M3. Parité contact : date "Mis à jour le" et bloc NAP présents en mobile, absents du desktop
- **Preuve :** `contact/index.html`, `.d-shell` (L498-625) ne contient ni date de fraîcheur ni bloc NAP. Les deux lignes (`.c-info-text` L714, "Mis à jour le" L715) n'existent que dans le `.m-shell`. Seule page du site où le défaut de parité va dans le sens inverse de l'habituel (desktop amputé, pas mobile).
- **Source :** `06-coherence.md` (Majeur 1), confirmé `10-verification.md` (M3).
- **Correction :** dupliquer les 2 lignes dans le `.d-shell` (section footer/CTA équivalente). Texte seul, coût quasi nul.

### M4. Parité restaurant : différenciateur "addition contestée / traçabilité horodatée" absent du mobile
- **Preuve :** `caisse-enregistreuse/restaurant/index.html` L291-292 (desktop uniquement) : argument unique du site sur la traçabilité horodatée des litiges. Grep "horodat/Addition contest/traçabilité/litige" sur le `.m-shell` = 0 résultat.
- **Source :** `06-coherence.md` (Majeur 2), confirmé `10-verification.md` (M4). Signalé dans le cadre du council B5 (point 6, réconciliation mobile) comme le seul point non traité à 100%.
- **Correction :** condenser le paragraphe en 1-2 phrases dans un bloc mobile existant, sans rebuild Tailwind. Doctrine "la forme raccourcit, pas le fond".

### M6. Héros mobiles : téléphone réduit à une icône muette (canal prioritaire)
- **Preuve :** `boulangerie/index.html:571`, `restaurant/index.html:616`, `rhone/index.html:716`, `seo-sea-local/index.html:461`, hub Web `index.html:942` : bouton `btn btn-icon` icône "call" seule, `aria-label` présent mais aucun numéro/libellé visible. Contraste : homepage mobile (`index.html:976`) affiche un bouton plein "Appeler le 04 82 53 05 10".
- **Source :** `08-cro.md` (A1), confirmé `10-verification.md` (M6). 80% du trafic est mobile.
- **Correction :** remonter le téléphone d'une pastille icône à un bouton libellé à parité visuelle avec le devis, en reprenant le duo du héros mobile homepage. `mobile-builder`, rebuild Tailwind si classes neuves, passage `site-qa`.

### M7. Nav desktop : numéro de téléphone invisible entre 1024px et 1279px
- **Preuve :** `js/scripts.js:197`, le lien `tel:` de la nav est en `hidden xl:flex` (visible seulement dès 1280px). Le FAB `#dcb-phone-fab` n'apparaît qu'en `@media(max-width:640px)`. Entre 641 et 1279px (une partie significative des laptops), ni numéro nav, ni FAB.
- **Source :** `08-cro.md` (A2), confirmé `10-verification.md` (M7).
- **Correction :** passer `hidden xl:flex` à `hidden lg:flex` dans `js/scripts.js:197`. Vérifier l'absence de débordement nav 1024-1279px. `front-builder`, rebuild Tailwind, cache-bust `scripts.js` incrémenté sur toutes les pages, passage `site-qa`.

### M8. Homepage : preuves et bandeau logos 100% caisse, à contre-courant de la priorité V2 (IT/Web)
- **Preuve :** bloc "Trois garanties vérifiables" (`index.html:523-615`) = NF525, CashMag, fondateurs, zéro preuve IT/web. Bandeau partenaires (`index.html:626-644`) = 8 logos caisse/paiement, 1 IT (Lenovo), 0 web.
- **Source :** `07-marketing.md` (M1, frein de fond inchangé depuis V1), confirmé `10-verification.md` (M8).
- **Correction :** introduire au moins une garantie IT tenable et une réalisation web dans le bloc garanties, desserrer le bandeau logos vers IT/web dès que des références existent. `marketing-strategist`, tâche de fond, pas un fix mécanique.

### M9 (volet titles). 12 titles dépassent 65 caractères, dont 4 au-delà de 75c
- **Preuve :** `saone-et-loire` 89c, `loire` 87c, `notre-adn` 78c, `caisse-enregistreuse/index` 76c, `ain` 76c, `blog` 73c, `contact` 71c, `rhone` 66c, `index` (homepage) 66c, + 3 titles IT (hors périmètre bloquant).
- **Source :** `01-seo-technique.md` (M2), confirmé `10-verification.md` (M9, volet titles). Le volet "15 meta descriptions" du même constat est requalifié : le compte exact hors IT est 20, dont 11 réellement trop longues (>160c) et 5 courtes légitimes (légal/merci, pas un défaut).
- **Correction :** raccourcir en priorité `saone-et-loire`, `loire`, `notre-adn`, `caisse-enregistreuse/index`, `ain`. `copywriter-site`, post-lancement acceptable.

### M10. 4 groupes d'images Open Graph : URLs uniques par page mais fichiers binaires identiques
- **Preuve (MD5) :** `og-ain.jpg` = `og-caisse-enregistreuse.jpg` = `og-commerce-de-detail.jpg` = `og-loire.jpg` = `og-rhone.jpg` = `og-saone-et-loire.jpg` (6 fichiers identiques) ; `og-boulangerie.jpg` = `og-cashmag.jpg` = `og-coiffure.jpg` (3 fichiers) ; `og-blog.jpg` = `og-blog-norme-nf525...jpg` (2) ; `og-contact.jpg` = `og-notre-adn.jpg` (2).
- **Source :** `01-seo-technique.md` (M1), confirmé `10-verification.md` (M10).
- **Correction :** non bloquant, déjà tracé dans `CLAUDE.md` ("Bloqué : attente client, photos produits réelles"). Un partage de ces pages affichera la même image tant que les vraies photos ne sont pas reçues.

### M12. Entités GEO/AI : Organization fragmentée, FAQPage manquantes, pas de WebSite + SearchAction
- **Preuve :** `notre-adn/index.html` déclare un `Organization` à `@id` propre non lié au canonique, avec 2 `Person` sans `@id` (alors que l'homepage a des `Person` canoniques `#nathanael`/`#clement`). Les 4 articles de blog déclarent `author`/`worksFor` sans `@id` (3e nœud anonyme). `FAQPage` absente sur `contact/`, `notre-adn/`, hub blog (28/33 pages en ont une). `SearchAction`/`potentialAction` absent des 33 pages malgré un `WebSite` déjà déclaré.
- **Source :** `02-geo-ai.md` (Majeurs 1, 2, 3), confirmé `10-verification.md` (M12).
- **Correction :** fix mécanique à faible risque : faire pointer `notre-adn/` et les 4 articles blog vers les `@id` canoniques existants (`#localbusiness`, `#nathanael`, `#clement`) ; ajouter `FAQPage` sur `contact/` et `notre-adn/` ; ajouter `potentialAction` (`SearchAction`) au `WebSite` de l'homepage. `seo-expert`, post-lancement acceptable.

---

## 5. Mineurs

| # | Constat | Source | Statut / correction |
|---|---|---|---|
| 1 | BOM UTF-8 absent sur `merci/index.html` | `03-qa-mecanique.md`, requalifié par `10-verification.md` (B1) | Fait vrai, impact réel nul (`meta charset="utf-8"` présent, zéro mojibake). À corriger par cohérence (préfixer le BOM), fix trivial. `site-qa`. |
| 2 | Badges `flsp`/`flsp-mon` (borne-de-commande, monnayeur) sans garde `prefers-reduced-motion` | `09-design.md` (P1), confirmé `10-verification.md` (M5) | Oscillation `translateY` infinie non coupée. Ajouter `.flsp,.flsp-mon{animation:none!important}` au bloc reduced-motion existant. |
| 3 | Casse "Oxhoo" vs "OXHOO" | `06-coherence.md` (mineur 3), **requalifié** par `10-verification.md` (M11) | Le rapport 06 visait la homepage comme anomalie ; en réalité "Oxhoo" est la forme **dominante** du site (78 occurrences vs 8 "OXHOO"). Le vrai correctif, si décidé, est une harmonisation site-wide vers "OXHOO" (canonique CLAUDE.md), pas un patch homepage. Décision à prendre avant d'agir. |
| 4 | 30 images sans `width`/`height` explicites (dont `partenaire-nf525.webp` sur 7 pages Caisse, nouveau résidu) | `01-seo-technique.md` (m1) | Risque CLS faible, non bloquant. |
| 5 | `og:updated_time` incohérent (présent sur 3/24 pages OG seulement, date antérieure à la date E-E-A-T affichée) | `01-seo-technique.md` (m2) | Généraliser ou retirer la balise. Non bloquant. |
| 6 | Tiret cadratin résiduel dans 2 commentaires techniques (`robots.txt:2`, `.htaccess:2`) | `01-seo-technique.md` (m3) | Zéro impact SEO/GEO (jamais servi comme contenu), zéro occurrence dans le contenu écrit réel. Cosmétique. |
| 7 | Pas de page 404 dédiée | `01-seo-technique.md` (m4), déjà dans v1 | À créer avant bascule, déjà tracé "Phase 1" dans `.htaccess`. |
| 8 | Redirection V1 `/site-internet/` → `/visibilite-web/` manquante | `01-seo-technique.md` (m5), déjà dans v1 | Infra, relève de Clément. |
| 9 | Card formulaire contact : bordure 1px au lieu de l'élévation tonale `tonal-shift-elevation` | `09-design.md` (P4) | Cosmétique, n'enfreint pas la règle "zéro bordure entre sections" (bordure interne à une card). |
| 10 | 2 cross-sell portent l'orange marque au hover au lieu de la couleur de destination (coiffure → Hairnet, boulangerie → CashMag) | `09-design.md` (P3) | Passer ces 2 hovers à la couleur de la page de destination (violet Hairnet, vert CashMag). |
| 11 | Animations hors système maison à justifier ou retirer (`cm-kpi-in-top/bot`, `form-card-in`) | `09-design.md` (P2) | Phase de-slop déjà planifiée (cf. mémoire projet "Plan dette technique"), pas une urgence de lancement. |

---

## 6. Section IT gelé (consolidée)

Le silo `maintenance-informatique/` (hub + 5 sous-pages) est un placeholder en attente de la grille tarifaire réelle de Clément (`CLAUDE.md`, roadmap "Bloqué : attente client"). Tous les constats ci-dessous sont réels, vérifiés, mais **hors périmètre actionnable de ce lancement**. Consolidation des 9 rapports :

**SEO / technique** (`01-seo-technique.md`)
- Open Graph et Twitter Card totalement absents sur les 6 pages.
- `infogerance-pme` absent de `sitemap.xml` (33 entrées vs 34 pages réelles) et de `llms.txt`.
- `sitemap.xml` : `lastmod` du hub IT désynchronisé de sa date E-E-A-T réelle.
- `provider` du schéma `Service` non inliné sur les 6 pages (référence `@id` nue sans objet `LocalBusiness` dans le même document).
- 3 titles IT >65c (`infogerance-pme` 75c, `outils-collaboratifs` 72c, hub IT 69c) et 4 meta descriptions IT hors gabarit (`infogerance-pme` 182c, `cloud-securite` 176c, `outils-collaboratifs` 166c, hub IT 163c).

**GEO / AI** (`02-geo-ai.md`)
- Date affichée du hub IT figée à `2026-04-23` (cohérent avec le gel, à ne pas corriger isolément).
- Montants factices de la grille tarifaire : risque de citabilité fausse si un moteur IA les reprend une fois le silo dégelé et indexé.
- Point positif à conserver : `FAQPage` du hub IT déjà correcte (6 questions, chiffres cohérents), `areaServed` détaillé.

**QA mécanique** (`03-qa-mecanique.md`)
- BOM UTF-8 absent sur 4 pages : `cloud-securite`, `location-vente-installation`, `maintenance-depannage`, `outils-collaboratifs`.

**Cannibalisation** (`05-cannibalisation.md`)
- Proximité de title hub IT / `maintenance-depannage` (inchangée depuis V1).
- Demande IT locale réelle mesurée sur le V1 ("sauvegarde externalisée Villefranche-sur-Saône", "sauvegarde externalisée Mâcon") sans page V2 dédiée (doctrine assumée, pas une découverte).

**Cohérence** (`06-coherence.md`)
- `infogerance-pme` : `areaServed` toujours sans Paray-le-Monial.
- `infogerance-pme` : "Résolution immédiate pour 92% des incidents" contredit le "95%" canonique verrouillé partout ailleurs.
- `location-vente-installation` et `outils-collaboratifs` : vocabulaire promotionnel léger ("les marques leaders", "suites collaboratives leaders du marché").
- "Mis a jour le" sans accent sur le "à", desktop uniquement, sur les 6 pages du silo.

**Marketing** (`07-marketing.md`)
- Transparence non prouvée sur le pilier IT (aucun signal de prix, contrairement au web à 950€).
- Faute de genre H1 hub IT : "tout votre informatique" devrait être "toute votre informatique".
- Jargon résiduel : "4 départements monitorés 24/7", "monitoring sur mesure".

**CRO** (`08-cro.md`)
- Grille tarifaire IT factice (89€/149€ par mois) sur `maintenance-depannage` (desktop L376/L392, mobile L814, options formulaire L441/L442, paramètre `?offre=` L386). À vérifier aussi sur `cloud-securite` et `outils-collaboratifs` au dégel.

**Design** (`09-design.md`)
- Aucun défaut design bloquant propre au silo IT au-delà du gel de contenu. `animate-ping` (indicateur "Système Online") conforme au système, accents couleur par page corrects : rien à corriger ici.

### Liste exacte pour le jour du dégel Clément
1. Fournir la grille tarifaire réelle du contrat de maintenance (ou valider le basculement en "sur devis après diagnostic gratuit").
2. Remplacer les montants factices (`maintenance-depannage` : L376, L392, L814, L441, L442, `?offre=` L386) + vérifier `cloud-securite` et `outils-collaboratifs`.
3. Ajouter Open Graph + Twitter Card sur les 6 pages.
4. Ajouter `infogerance-pme` à `sitemap.xml` et `llms.txt`.
5. Inliner `LocalBusiness` dans `provider` sur les 6 pages (au lieu de la référence `@id` nue).
6. Recaler les dates E-E-A-T + `lastmod` sitemap sur la réalité du dégel.
7. Corriger "92%" en "95%" sur `infogerance-pme`.
8. Ajouter Paray-le-Monial à `l'areaServed` d'`infogerance-pme`.
9. Corriger "Mis a jour le" (accent) sur les 6 pages, desktop.
10. Corriger la faute de genre H1 hub IT ("toute votre informatique").
11. Remplacer le jargon ("monitoring" → "supervision/surveillance").
12. Adoucir le vocabulaire promotionnel ("leaders du marché").
13. Resserrer les 3 titles et 4 meta descriptions IT hors gabarit.
14. Traiter la proximité de title hub IT / `maintenance-depannage`.

---

## 7. Actions côté XIII (comptes, hors agents)

Ces actions ne relèvent d'aucun agent (accès interface/compte requis) :

1. **Ancre GPS Google Business Profile** : confirmer dans l'interface GBP que le pin a bien été recalé sur le siège Dardilly (59 Chemin du Moulin Carron, 69570). Le dernier relevé fiable (V1, 21/07) situait le pin à environ 20 km de la vraie zone (secteur Brignais), cause probable n°1 du non-classement en Local Pack. Non re-vérifiable en session (mur anti-bot Google), aucun signal de correction transmis cette semaine. Source : `04-geo-local-gbp.md` (bloquant hors code).
2. **Coller la description GBP** déjà rédigée (orientée humain, "un seul interlocuteur") dans l'interface : prête mais pas encore collée au moment de l'audit. Source : `04-geo-local-gbp.md`.
3. **Services GBP** : renseigner les libellés de services par catégorie (détail déjà prêt dans `docs/audit-prelancement/FICHE-GBP-PLAN.md`, sections 4, 6, 7 pour services/photos/posts). Confirmer aussi que les 2 catégories manquantes sur les 4 posées correspondent bien à "Concepteur de sites Web" et "Service d'hébergement de site Web" (silo Web), pas une substitution. Source : `04-geo-local-gbp.md`.
4. **Import des conversions Google Ads** : sera fait via l'extension Chrome (action XIII annoncée). Rappel du contexte déjà tracé côté compte (`docs/audit-prelancement/RAPPORT-FINAL.md`, config comptes C1/C2) : marquer `generate_lead` et `phone_call_click` comme Key Events dans GA4 avant de créer les conversions d'import côté Google Ads, pour que l'import remonte des données propres.

---

## 8. Checklist de lancement ordonnée

**1. Ce qui bloque (à faire avant mise en ligne) :**
- Corriger `commerce-de-detail` (section 3), 2 lignes, 2 shells. Validation XIII puis `copywriter-site`. 15 minutes.

**2. Ce qui se corrige en un lot agent (recommandé avant lancement, non bloquant) :**
- BOM `merci/index.html` (mineur, `site-qa`).
- Title hub Web vs `creation-site-internet` (M1, `copywriter-site` après validation XIII).
- Unification JSON-LD adresse `contact/`/`notre-adn/` (M2, `seo-expert`).
- Parité `contact` (date + NAP absents desktop, M3) et parité `restaurant` (argument mobile absent, M4) : texte seul, `copywriter-site`/`mobile-builder`.
- Héros mobiles tel muet (M6) et nav tel `hidden xl:flex` → `lg:flex` (M7) : `mobile-builder` + `front-builder`, rebuild Tailwind, cache-bust, passage `site-qa` obligatoire avant commit.
- `flsp`/`flsp-mon` sans garde reduced-motion (mineur a11y, fix 1 ligne CSS par page).
- Décision de casse "Oxhoo" vs "OXHOO" (mineur, à trancher avant d'agir : la forme dominante actuelle est "Oxhoo").

**3. Ce qui peut attendre juste après le lancement (post-lancement acceptable) :**
- 12 titles >65c, doublons binaires OG (M9, M10).
- Entités GEO AI : Organization fragmentée, FAQPage manquantes sur contact/notre-adn, WebSite+SearchAction (M12).
- Preuve homepage 100% caisse (M8) : chantier de fond marketing, pas un fix mécanique.
- Page 404 dédiée, redirection `/site-internet/`, nuances cross-sell couleur, card contact bordure 1px, animations hors système (mineurs).

**4. Ce qui attend le dégel Clément :**
- Tout le silo Maintenance Informatique (liste exacte section 6).

**5. La bascule racine (au moment du go-live effectif) :**
- Retirer le `X-Robots-Tag: noindex` posé au niveau Plesk sur `/new/` (intentionnel en staging, à retirer uniquement à la bascule).
- Le nettoyage du footer (`tmp-dept-link`, atlas département) est **déjà fait** (vérifié sain dans `04-geo-local-gbp.md`), rien à refaire ici.
- Actions côté XIII (section 7) à traiter en parallèle, idéalement avant que le trafic ne remonte sur les pages V2.

---

**Document produit par :** orchestrateur (synthèse des 9 rapports + vérification adversariale), aucune page modifiée, aucune recommandation nouvelle introduite hors des 9 rapports sources et de `10-verification.md`.
