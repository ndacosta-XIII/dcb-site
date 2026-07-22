# Rapport final : audit pré-lancement DCB Technologies

**Date :** 21/07/2026
**Destinataire :** XIII (Nathanaël Da Costa), co-fondateur
**Périmètre :** site entier `/new/` (silos Caisse, IT, Web, homepage, pages département, contact, ADN, blog, légales) + données réelles (GSC, GA4, Google Ads, Meta Ads, fiche GBP).

## Méthodologie (5 lignes)

9 dimensions auditées par 11 agents spécialisés (QA, cohérence, SEO technique, GEO/AI, SEO local/GBP, cannibalisation, tracking/Ads, CRO, marketing), chacun rendant une note sur 100 avec barème explicite et preuve fichier/ligne ou re-mesure de compte.
Chaque bloquant a ensuite subi une vérification adversariale : re-lecture du code (grep, git log) pour les 13 bloquants de contenu/technique, re-mesure MCP indépendante (GA4, Google Ads, Meta, GBP) pour les 4 bloquants de compte.
Résultat de la vérification : 1 faux positif éliminé (cache-bust), 2 bloquants re-périmètrés (hub Web = collision réelle mais pas verbatim ; SAV fusionné = homepage seule, pas le hub caisse), tous les autres confirmés.
Un artefact d'orchestration a aussi été neutralisé : le "retard de 232 commits" du rapport d'inventaire est un décalage d'historique Git, pas de contenu ; XIII a redéployé le 21/07 (Last-Modified du jour + contenu vérifié en live).
Ce rapport ne retient que les bloquants confirmés, avec leur périmètre corrigé.

## Notes par dimension

| # | Dimension | Note brute | Note ajustée | Verdict une ligne |
|---|---|---|---|---|
| 00 | Inventaire live | 32/100 | **90/100** | Bloquant unique (232 commits) neutralisé : artefact Git + redéploiement fait ; 33/33 pages en 200, noindex et assets sains. |
| 01 | QA mécanique | 60/100 | **100/100** | Unique déduction (cache-bust, -40) infirmée : compteurs par fichier corrects. Em dash, liens, JSON-LD, dual-shell, encodage : tous PASS. |
| 02 | Cohérence éditoriale | 80/100 | 80/100 | Socle sain (référentiel canonique propagé), 3 bloquants résiduels localisés. |
| 03 | SEO technique + on-page | 75/100 | 75/100 | Fondations solides (canoniques, JSON-LD, maillage, fonts), 2 bloquants + gaps de finition métadonnées. |
| 04 | GEO / AI search | 66/100 | 66/100 | Article NF525 exemplaire, discipline anti-duplicate rare ; 2 angles morts (llms.txt incomplet, dates fausses). |
| 05 | SEO local + GBP | 60/100 | 60/100 | Pages département et NAP sains ; 2 bloquants (pin GPS GBP, @id LocalBusiness non résolvable). |
| 06 | Cannibalisation | 63/100 | 63/100 | Silos Caisse et IT conformes ; 1 bloquant sur le silo Web (collision hub/enfants). |
| 07 | Tracking + readiness SEA | 51/100 | 51/100 | Le code est devenu sain (send.php, dataLayer, Consent Mode v2, GTM 35/35) ; la config compte n'a pas suivi (4 bloquants). |
| 08a | Conversion (CRO) | 78/100 | 78/100 | Architecture de conversion saine, /merci exemplaire ; 1 bloquant = grille IT factice. |
| 08b | Marketing | 69/100 | 69/100 | Positionnement et ton sains ; 2 bloquants de copy (stock, SAV). |

### Détail de l'ajustement QA (01)

Barème d'origine de l'agent : em dash -50, cache-bust divergent -40, lien cassé -15/page, JSON-LD invalide -20, dual-shell manquant -15/page, mojibake -25, artefact IA -50. Toutes les catégories sont PASS sauf le cache-bust, seul poste ayant coûté 40 points (100 - 40 = 60). La vérification 09a a établi que `style.css?v=18` et `scripts.js?v=49` sont chacun uniformes sur les 35 pages, et que la règle projet n'a jamais exigé que les deux fichiers partagent le même numéro (compteurs indépendants par fichier). La déduction de 40 points ne s'applique donc pas : **note recalculée selon le barème de l'agent = 100/100**.

## NOTE GLOBALE : 76/100

Pondération (les dimensions qui décident du go/no-go de lancement pèsent plus ; le tracking pèse moins car il conditionne les campagnes, pas l'indexation) :

| Dimension | Poids | Note ajustée | Contribution |
|---|---|---|---|
| 02 Cohérence | 2,0 | 80 | 160,0 |
| 01 QA | 1,5 | 100 | 150,0 |
| 03 SEO technique | 1,5 | 75 | 112,5 |
| 08a CRO | 1,5 | 78 | 117,0 |
| 08b Marketing | 1,5 | 69 | 103,5 |
| 00 Inventaire | 1,0 | 90 | 90,0 |
| 04 GEO/AI | 1,0 | 66 | 66,0 |
| 05 SEO local/GBP | 1,0 | 60 | 60,0 |
| 06 Cannibalisation | 1,0 | 63 | 63,0 |
| 07 Tracking/Ads | 0,5 | 51 | 25,5 |
| **Total** | **12,5** | | **947,5** |

947,5 / 12,5 = **75,8, arrondi à 76/100.**

Lecture : le site est proche du publiable. Aucun bloquant n'est un chantier ; ce sont des corrections localisées (copy, JSON-LD, sitemap, dates) et de la configuration de comptes. Le principal risque n'est pas la qualité du site mais deux faits faux visibles (stock, SAV) et une couche de mesure branchée sur l'ancien site.

---

## Bloquants pré-lancement (à corriger avant d'indexer)

Douze bloquants confirmés. Ordre : d'abord les faits faux visibles (risque commercial et juridique immédiat), puis le technique d'indexation.

### 1. Fait faux : "Matériel en stock" sur le hero du hub caisse
**Preuve :** `caisse-enregistreuse/index.html` L339 `<p ...>Matériel en stock</p>`, sous "Installé sous 48h" (L338), sur le badge flottant du hero le plus consulté du silo. `docs/content-reference.md` L89 bannit explicitement ce claim (faux fait banni le 01/07/2026 : DCB n'a pas de stock/entrepôt local).
**Action :** reformuler (ex. retirer la 2e ligne, ou "Approvisionnement rapide"). Vérifier les autres occurrences de "stock" hors pages département.
**Qui :** validation XIII puis `copywriter-site` (texte seul). **Effort :** 15 min. **Dépendances :** aucune.

### 2. Promesse intenable : "SAV en moins de 4h, 7j/7 24h/24" (homepage uniquement)
**Preuve :** `index.html` L473 (desktop) et L1038 (mobile), les deux fusionnent les deux registres en une seule phrase, qui se lit "technicien sur site en 4h à toute heure de la nuit". `docs/content-reference.md` (verrou 21/07) sépare strictement : sur site "sous 4h, 7j/7", astreinte/télémaintenance "7j/7 24h/24". Périmètre corrigé par 09a : **le hub caisse n'est pas concerné** (la citation du rapport 08b était erronée, L324 dit seulement "assistance 7j/7 24h/24" sans "4h").
**Action :** scinder les deux registres dans la card pilier homepage, desktop et mobile.
**Qui :** validation XIII puis `copywriter-site`. **Effort :** 15 min. **Dépendances :** aucune.

### 3. "la majorité" au lieu de "95%" (hub caisse + commerce-de-detail)
**Preuve :** `caisse-enregistreuse/index.html` (JSON-LD L219, desktop L986, mobile L1441) et `caisse-enregistreuse/commerce-de-detail/index.html` (JSON-LD L71, desktop L536, mobile L921). Le référentiel verrouille "95%, jamais 'la majorité'". Toutes les autres pages caisse affichent bien 95%. 6 emplacements (3 par page).
**Action :** remplacer "la majorité" par "95%" aux 6 emplacements.
**Qui :** validation XIII puis `copywriter-site`. **Effort :** 15 min. **Dépendances :** aucune.

### 4. Page coiffure : Dardilly absent, une seule base citée
**Preuve :** `caisse-enregistreuse/coiffure/index.html` (JSON-LD L71/L94, desktop L519, mobile L869) dit "Nos techniciens partent de Paray-le-Monial", zéro occurrence de "Dardilly". Coiffure est une page métier (neutre au département), pas une page département : elle doit citer les deux bases comme le fait `restaurant`.
**Action :** aligner sur la formulation "nos deux bases, Paray-le-Monial et Dardilly" dans les 3 shells.
**Qui :** validation XIII puis `copywriter-site`. **Effort :** 10 min. **Dépendances :** aucune.

### 5. Témoignage Teddy Malfroy (Dicrea) dupliqué homepage + hub IT
**Preuve :** `maintenance-informatique/index.html` (desktop L596-602, mobile L1317-1319, photo réelle) et `index.html` (desktop L683, mobile L1152, avatar générique, attribution dégradée). `docs/content-reference.md` réserve cet avis au hub IT uniquement. Vrai client, vrai avis, recyclé hors contexte (l'avis parle d'informatique, il se retrouve mêlé aux avis caisse/web sur la homepage).
**Action :** retirer l'occurrence homepage, garder le hub IT.
**Qui :** validation XIII puis `copywriter-site`. **Effort :** 10 min. **Dépendances :** aucune.

### 6. Grille tarifaire IT factice (89 / 149 euros par mois)
**Preuve :** `maintenance-informatique/maintenance-depannage/index.html` L376, L392 (desktop), L814, L830 (mobile), L441, L442 (options de formulaire). Montants précis mais faux, qui partent dans le POST du lead. Déjà tracé en roadmap.
**Action :** remplacer par la grille réelle, ou basculer en "sur devis après audit gratuit" (la FAQ L625 le dit déjà). Vérifier aussi les euros par mois sur `cloud-securite` et `outils-collaboratifs`.
**Qui :** **Clément** (fournir la grille) puis `front-builder`. **Effort :** dépend de Clément (production de la grille), 30 min d'intégration ensuite. **Dépendances :** grille réelle de Clément (goulot connu).

### 7. Page infogerance-pme absente du sitemap.xml
**Preuve :** `sitemap.xml` liste 4 sous-pages IT mais pas `maintenance-informatique/infogerance-pme/`, qui est la money page du silo IT (fichier existant, canonical propre, JSON-LD complet, linkée depuis nav/hub/blog).
**Action :** ajouter l'entrée `<url>` dans le bloc sous-pages IT avec un `lastmod` réel.
**Qui :** `seo-expert`. **Effort :** 10 min. **Dépendances :** croiser avec le bloquant 10 (dates) pour le lastmod.

### 8. Open Graph + Twitter Card absents sur les 6 pages du silo IT
**Preuve :** grep `property="og:` et `name="twitter:` = 0 sur hub IT + `cloud-securite`, `infogerance-pme`, `location-vente-installation`, `maintenance-depannage`, `outils-collaboratifs`. Les silos Caisse et Web ont les 5 tags partout. Tout partage social/Slack d'une page IT affiche un aperçu vide.
**Action :** dupliquer le bloc OG + Twitter des pages Caisse/Web avec title/description propres à chaque page IT (pas de copie mot pour mot).
**Qui :** `seo-expert` ou `front-builder`. **Effort :** 45 min. **Dépendances :** l'image générique `og-homepage.jpg` fera l'affaire au lancement (les images OG par silo sont un point post-lancement, cf. majeurs).

### 9. llms.txt omet environ 40% du site
**Preuve :** `llms.txt` référence 19 pages (3 hubs + 6 métier caisse + 4 IT + 3 web), absents : blog + 4 articles, 4 pages département, `hairnet`, `infogerance-pme`, `contact`, `notre-adn`. Le blog (article NF525, la source la plus citable) et les pages département (seul contenu hyper-local) sont les deux clusters les plus stratégiques manquants.
**Action :** ajouter les pages manquantes dans les sections correspondantes de `llms.txt`.
**Qui :** `seo-expert`. **Effort :** 20 min. **Dépendances :** aucune.

### 10. Dates "Mis à jour le" et lastmod sitemap périmés sur environ 30 pages
**Preuve :** 6/6 pages testées ont un dernier commit du 21/07 mais affichent une date figée (23 avril à 15 juillet, écart 17 jours à 3 mois) ; `sitemap.xml` a la majorité des `<lastmod>` à `2026-04-06`. Signal de fraîcheur faux, à l'opposé de l'effet E-E-A-T/GEO recherché.
**Action :** régénérer les dates affichées et les lastmod à la date de la dernière réécriture réelle de chaque page, au moment de la mise en ligne. Ne bumper que les pages ayant reçu une vraie réécriture de contenu (un bump de cache-bust seul ne justifie pas une nouvelle date).
**Qui :** `seo-expert` ou `site-qa`. **Effort :** 1h (arbitrage page par page). **Dépendances :** à faire juste avant l'indexation pour rester exact.

### 11. JSON-LD provider @id non résolvable sur 19 pages
**Preuve :** l'entité `LocalBusiness` complète n'existe en clair que sur 3 pages (accueil, hub caisse, hub web). Les 19 autres (hub IT + 4 sous-pages IT + 7 sous-pages caisse + hairnet + 3 web + 4 pages département) ont `"provider": {"@id": "...#localbusiness"}` sans définition inline. Les outils de test de données structurées analysent une URL à la fois : la référence pointe dans le vide pour ces pages, en particulier les 4 pages département censées porter le signal local page par page.
**Action :** remplacer la référence `@id` seule par l'objet `LocalBusiness` complet (déjà utilisé sur hub caisse/web), en conservant le même `@id`. Enrichissement JSON-LD, aucun changement de texte.
**Qui :** `seo-expert`. **Effort :** 1h à 1h30 (19 pages, mécanique). **Dépendances :** aligner au passage la page Contact qui a un `@id` divergent (majeur M4 du rapport 05).

### 12. Le hub Visibilité Web cannibalise ses deux sous-pages
**Preuve (périmètre corrigé par 09a) :** ce n'est pas une duplication verbatim des titles (3 formulations distinctes). C'est une collision réelle sur deux surfaces : le H1 du hub ouvre par "Création de site internet et référencement local", reprenant mot pour mot les syntagmes-cibles de `creation-site-internet` et `seo-sea-local` ; et le FAQPage du hub duplique 3 paires question/réponse (prix, délai, SEO vs SEA) avec les mêmes chiffres que les sous-pages, éligibles au même rich result FAQ. Les hubs caisse et IT sont neutres par construction, le hub Web est le seul à répéter le nom de ses enfants.
**Action :** neutraliser l'ouverture du H1 du hub (décrire l'offre globale sans reprendre le syntagme-cible d'un enfant) et retirer les 3 FAQ dupliquées du hub (le hub renvoie vers les sous-pages par lien).
**Qui :** validation XIII puis `copywriter-site`. **Effort :** 30 min. **Dépendances :** aucune.

---

## Configuration des comptes (en parallèle, indispensable avant toute campagne)

Ces points ne bloquent pas l'indexation du site, mais si une campagne démarre sur les pages V2, la quasi-totalité des appels et devis resteront invisibles côté Ads. Le code de tracking est sain (send.php, dataLayer, Consent Mode v2, GTM sur 35/35 pages) : ce sont uniquement des réglages de comptes.

| # | Action | Qui | Effort | Dépendances |
|---|---|---|---|---|
| C1 | GA4 (propriété 505863722) : marquer `generate_lead` et `phone_call_click` comme Key Events. Les événements arrivent déjà, ils ne sont juste pas marqués. | XIII / `marketing-strategist` | 10 min | Aucune. Débloque C2. |
| C2 | Google Ads (customer 6265603123) : créer 2 conversions GA4-import propres sur ces Key Events, supprimer les 4 conversions GA4 mortes (`close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`) et les orphelines REMOVED. | XIII / `ads-auditor` | 30 min | Dépend de C1. |
| C3 | Google Ads : nettoyer le lien GA4 orphelin (customer 3104358068, non accessible par le MCC actuel) pour éviter le double comptage. | XIII | 10 min | Aucune. |
| C4 | ~~Meta : ajouter le pixel au GTM du V2~~ **RETIRÉ (erratum 22/07)** : le conteneur GTM publié contient bien le pixel Meta (fbevents.js vérifié dans gtm.js public) et la config GA4. Le constat "zéro trace sur V2" venait d'un grep du repo, aveugle aux tags injectés par GTM ; l'activité "V1 only" reflète juste le trafic (le /new/ est en noindex). Rien à faire côté pixel de base. Reste optionnel post-lancement : CAPI (Phase 3 déjà planifiée). | Personne | 0 | Sans objet. |
| C5 | GBP : corriger le pin GPS (actuellement à 19,8 km de Dardilly, zone Brignais). C'est très probablement la cause n°1 du non-classement dans le Local Pack malgré 5,0/5. | XIII | 15 min | Accès admin GBP. |
| C6 | GBP : passer le nom en "DCB Technologies" (majuscule) et ajouter la catégorie secondaire "Vendeur de caisses enregistreuses" (sans elle, la fiche ne peut pas apparaître sur les requêtes caisse). | XIII | 10 min | Accès admin GBP. |

Note optionnelle mais utile : décider d'un numéro de suivi d'appel (Google forwarding number) pour rendre vivante la conversion `AD_CALL` et mesurer la durée réelle des appels ; le mode de conversion caisse prioritaire est l'appel, aujourd'hui non mesuré.

---

## Post-lancement (planifiable)

| Élément | Dimension | Priorité | Qui |
|---|---|---|---|
| Images OG par silo (`og-caisse.jpg`, `og-it.jpg`, `og-web.jpg`, 1200x630) : aujourd'hui `og-homepage.jpg` sur 24 pages | 03 SEO | Majeur | XIII (assets) + `seo-expert` |
| 12 titles > 65c (4 au-delà de 85c) et 15 meta descriptions hors 140-160c à resserrer | 03 SEO | Majeur | `copywriter-site` |
| Entité DCB fragmentée en plusieurs @id non liés (contact, notre-adn, blog) à consolider en @graph | 04 GEO | Majeur | `seo-expert` |
| FAQPage absente sur contact et notre-adn ; schema WebSite + SearchAction manquant | 04 GEO | Majeur | `seo-expert` |
| Héros mobiles silo caisse : téléphone rétrogradé en icône muette (contre la doctrine "appel = CTA roi") | 08a CRO | Majeur | `mobile-builder` |
| Numéro nav caché sous 1280px (`hidden xl:flex` -> `lg:flex`) + pas de FAB tel desktop | 08a CRO | Majeur | `front-builder` |
| Preuve homepage 100% caisse (garanties, logos), à contre-courant de la priorité IT/Web V2 | 08b Marketing | Majeur | `marketing-strategist` |
| Transparence non prouvée sur le pilier IT (aucun prix), objection "petite structure" non traitée, zéro lead magnet | 08b Marketing | Majeur | `marketing-strategist` |
| Avis GBP : géré directement par XIII (80% des clients laissent déjà un avis, le volume suit la base clients), aucune action agent | 05 GBP | Retiré | XIII |
| Citations locales / annuaires (10 généralistes + 10 sectoriels), à soumettre une fois le site en ligne | 05 GBP | Majeur | XIII / `seo-expert` |
| Page 404 dédiée + redirection V1 `/site-internet/` -> `/visibilite-web/` dans `.htaccess` | 03 SEO | Mineur | Clément |
| Faute de genre H1 hub IT ("tout" -> "toute votre informatique"), jargon "monitoring", "technicien attitré" | 08b Marketing | Mineur | `copywriter-site` |
| Silo IT gelé : "92%" à aligner sur "95%", areaServed sans Paray, ton "leader" à polir (au dégel) | 02 Cohérence | Mineur | `silo-harmonizer` |
| Retirer les `tmp-dept-link` et l'atlas footer avant lancement racine ; retirer le noindex Plesk | 00 Inventaire | Bloquant infra | Clément |
| seo-sea-local : bottom-sheet propre au lieu d'un renvoi vers /contact ; 5 metas caisse à villes identiques | 07 / 06 | Mineur | `mobile-builder` / `copywriter-site` |

---

## Ce qui est sain et validé (ne pas ré-auditer)

Consolidé des 9 dimensions, pour éviter de rouvrir des non-problèmes.

**Mécanique et encodage (01, 00)**
- Zéro em dash sur les 35 pages. Zéro mojibake, BOM UTF-8 préservé. Zéro artefact de tool-calling.
- Liens internes relatifs corrects, dual-shell présent sur toutes les pages business, JSON-LD parse à 100%.
- Cache-bust conforme (compteurs par fichier uniformes sur 35/35, faux positif écarté).
- 33/33 pages du sitemap en HTTP 200, assets sans 404, noindex staging bien appliqué au niveau Plesk.

**Cohérence (02)**
- Référentiel canonique propagé : deux bases (Paray + Dardilly), délai 4h sur site, télémaintenance 20 min, clôture 3 min, formation demi-journée, remplacement 48h, no-show divisé par 3, zone 71/69/01/42, amende NF525 7 500 euros, horaires 08:30-18:30, garantie 5 ans (exception monnayeur).
- NF525 : aucune page n'affirme la certification "obligatoire" ; cadrage réforme 2026 correct partout.
- Parité desktop/mobile du fond : les promesses centrales sont présentes des deux côtés, le mobile raccourcit la forme sans amputer le fond.

**SEO technique (03)**
- Canoniques 34/34 auto-référentes cohérentes avec le sitemap. JSON-LD riche et valide (Service, FAQPage, HowTo, Product, BreadcrumbList, LocalBusiness).
- Fonts 100% auto-hébergées (RGPD + LCP), zéro image `lh3.googleusercontent.com`, 100% des img avec alt, zéro ancre générique, zéro page orpheline.
- `.htaccess` solide (HTTPS forcé, www -> apex 301, HSTS, headers sécurité, cache, compression). robots.txt exemplaire (8 crawlers IA autorisés). Blog et Notre ADN dans la nav.

**GEO / AI (04)**
- Article pilote NF525 de très haut niveau GEO (définition autoportante, tableau chronologique, 4 sources officielles datées, FAQ autoportante). FAQ hyper-locales des 4 pages département réellement uniques (villages, distances, vocabulaire local). Discipline anti-duplicate-content documentée et rare.

**SEO local (05)**
- Téléphone 100% cohérent (390 occurrences, zéro variante). Adresse siège exacte au registre légal (SIREN 988632089). LocalBusiness canonique complet sur l'accueil (@graph, areaServed, sameAs vers GBP vérifié fonctionnel). Les 4 pages département conformes au brief (accents, meta robots, og, villes réelles, différenciation non mécanique). Footer déjà nettoyé des tmp-dept-link.

**Cannibalisation (06)**
- Hub caisse neutre au département (aucune ville dans title/H1). 4 pages département à H1 "à [ville]" uniques. 8 pages métier à H1 produit distinct. Hub IT agrégateur générique. Blog sans prix DCB, maillage descendant vers les pages transac vérifié. Silo Web sans pages département (doctrine respectée).

**Tracking (07)**
- GTM identique sur 35/35 pages. Consent Mode v2 fonctionnel (pattern Advanced, vérifié en direct). Formulaire + bottom-sheet réellement branchés (send.php, anti-flood, honeypot, redirection /merci, generate_lead). Tous les clics tel/mailto/sheet trackés. Protection noindex staging effective côté serveur. Canonical déjà pointé vers la prod.

**CRO (08a)**
- Homepage phone-first (appel = bouton primaire). Témoignages = vrais avis Google nommés, zéro placeholder sur les pages de conversion. Page /merci exemplaire. Formulaires courts avec traçabilité source/page/métier. Ordre des sections respecte "preuve avant demande". Cohérence message-page SEA solide (H1 et FAQ localisés).

**Marketing (08b)**
- Positionnement clair en 5 secondes (quoi/où/pourquoi eux). Ton humain et local conforme au brand voice. Comparatif concurrents honnête avec disclaimer assumé. Différenciation proximité/accompagnement prouvée (bases nommées, techniciens salariés, fondateurs joignables avec vraies photos). Logos partenaires réels (fin des spans texte) et témoignages homepage réels : deux bloquants connus désormais résolus.
