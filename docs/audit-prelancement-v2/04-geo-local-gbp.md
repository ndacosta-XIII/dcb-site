# Audit Pré-Lancement V2 : GEO Local + Fiche Google Business Profile

**Dimension :** signaux locaux on-site (NAP, LocalBusiness JSON-LD, pages département), doctrine géo pages métier, cohérence site/fiche Google Business Profile.
**Date :** 22/07/2026
**Agent :** seo-expert (Sonnet 5)
**Cible :** version LIVE https://dcb-technologies.fr/new/, repo local miroir exact. Vérification directe du code sur 26 pages porteuses de signal local (Homepage, 3 hubs, 18 sous-pages métier/service, 4 pages département, Contact, Notre ADN).
**Limite de session à signaler :** la fiche Google Business Profile n'a pas pu être re-vérifiée en direct aujourd'hui. La tentative de navigation (Google Maps, recherche locale par KGMID) a été interrompue par une page anti-bot Google ("trafic exceptionnel détecté", vérification humaine requise) : conformément à la règle du projet, aucune tentative de contournement de ce mur n'a été faite. Les données GBP de ce rapport s'appuient sur (a) l'état transmis par XIII cette semaine (config admin faite, faisant foi comme état acquis) et (b) le dernier relevé fiable en direct, celui du rapport V1 daté du 21/07/2026 (soit la veille), pour tout ce que XIII n'a pas mentionné avoir changé.

Rappels de cadrage respectés : Service Area Business sans adresse affichée = décision définitive, non rediscutée. Dardilly (siège) et Paray-le-Monial (base technique) sont deux adresses réelles. Zéro `aggregateRating`/`Review` recherché et confirmé absent. Aucune recommandation ni commentaire sur le rythme ou la stratégie d'avis GBP (XIII gère ce levier lui-même). `seo-sea-local` non jugée comme pari de ranking organique (lander SEA/GBP assumé).

---

## NOTE : 74/100

**Barème (6 catégories, identique à V1 pour comparabilité) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | NAP interne (téléphone, adresse, cohérence footer/JSON-LD) | 12/15 | Téléphone 100 % cohérent partout (inchangé). Adresse siège toujours exacte au registre légal. Nouveau point d'attention : `contact/` et `notre-adn/` déclarent la même adresse avec un format `addressRegion` différent de celui de l'Accueil, et sous des cardinalités différentes (cf. Majeur 1) |
| 2 | LocalBusiness JSON-LD (complétude, résolution par page) | 17/20 | **Progression majeure** : le bloquant de V1 (référence `@id` non résolvable sur 19 pages) est corrigé, vérifié par lecture directe du code. Retenue de 3 points pour la divergence de données sur le nœud partagé `contact/` (cf. Majeur 1) |
| 3 | Pages département (doctrine, technique, contenu, maillage) | 20/20 | Le seul gap de V1 (LocalBusiness non inliné) est corrigé. Doctrine intégralement vérifiée : villes réelles et différenciées, zéro duplication de FAQ, maillage hub→dept intact, zéro lien dept→dept (conforme à la doctrine actuelle) |
| 4 | Fiche Google Business Profile (config, cohérence NAP) | 19/30 | Progrès admin réels cette semaine (nom, 4 catégories posées, zones nettoyées, description prête) mais plusieurs éléments encore incomplets (description non collée, services/photos/posts non faits) et le point le plus lourd de V1 (ancrage GPS) reste sans confirmation de correction |
| 5 | Signal Search Console (money keyword, cannibalisation) | 5/10 | Identique à V1 : mesure du site V1 encore en ligne, non représentative du code V2 |
| 6 | Citations locales / annuaires (readiness) | 1/5 | Inchangé, 0 citation soumise, cohérent avec le statut pré-lancement |

**Total : 74/100** (V1 : 60/100). La progression vient presque intégralement d'une correction de code réelle et vérifiée (LocalBusiness inliné sur les 19 pages hors silo IT gelé, y compris les 4 pages département) et d'un travail admin GBP engagé cette semaine. Ce qui plombe encore la note : un résidu de divergence NAP sur `contact/`/`notre-adn/`, une fiche GBP dont le point le plus critique (ancrage GPS) n'est pas confirmé corrigé, et un signal GSC qui reste celui de l'ancien site.

**Bloquants pré-lancement actionnables en code : 0**

---

## BLOQUANTS

### [BLOQUANT hors code, action externe] 1 : l'ancrage GPS interne de la fiche GBP, non re-confirmé aujourd'hui, très probablement toujours erroné

**Constat :** le rapport V1 (21/07/2026) documentait un pin GBP calé sur 45.6356277, 4.7311759 (secteur Brignais/Vourles/Chaponost), à environ 20 km de la vraie zone d'opération (Dardilly, 45.8136/4.7553, coordonnées du JSON-LD du site). C'est un bug déjà identifié en avril 2026, non corrigé depuis.

Cette semaine, XIII a fait un travail de configuration GBP réel : nom, 4 catégories, zones desservies nettoyées, description prête. Aucun de ces éléments transmis ne mentionne l'ancrage GPS. Je n'ai pas pu re-vérifier ce point en direct aujourd'hui (mur anti-bot Google rencontré lors de la tentative, non contourné). En l'absence de tout signal indiquant une correction, la meilleure hypothèse reste que l'ancrage est toujours faux.

**Preuve :** `docs/audit-prelancement/05-seo-local-gbp.md` (21/07/2026), section [BLOQUANT] 1. Adresse réelle vérifiée au registre légal (SIREN 988632089) : 59 Chemin du Moulin Carron, 69570 Dardilly, identique au JSON-LD `index.html:284-291`.

**Impact :** en mode Service Area Business, ce point de calcul interne reste le facteur numéro un du classement Local Pack sur les requêtes locales ("caisse enregistreuse Lyon", "maintenance informatique Dardilly"). Un pin à 20 km de la vraie zone continue de fausser tout calcul de proximité, quel que soit le travail éditorial fait sur le site ou les catégories/zones nouvellement posées.

**Correction :** action externe déjà détaillée et prête à l'emploi dans `docs/audit-prelancement/FICHE-GBP-PLAN.md` (section 1). Pas de nouveau plan à produire ici. Recommandation : demander à XIII de confirmer si ce point a été traité en même temps que le reste cette semaine ou s'il reste à faire.

---

## MAJEURS

### M1 : `contact/` partage désormais le bon `@id` LocalBusiness, mais avec des données d'adresse divergentes de l'Accueil

**Ce qui est corrigé depuis V1 :** `contact/index.html:439` déclare `"@id": "https://dcb-technologies.fr/#localbusiness"`, exactement le même identifiant que l'Accueil (`index.html:275`). Le doublon d'entité signalé en V1 (M4, deux `@id` distincts pour la même société) est réglé. C'est le bon pattern.

**Ce qui reste divergent, sur ce même `@id` :**
- Accueil (`index.html:284-291`) : `address` est un objet unique (Dardilly, `addressRegion: "Auvergne-Rhône-Alpes"`), avec `geo` (lat/long).
- `contact/index.html:444-459` : `address` est un tableau de deux `PostalAddress` (Dardilly + Paray-le-Monial), avec `addressRegion: "Rhône"` puis `"Saône-et-Loire"`. Pas de `geo`.
- `notre-adn/index.html:56-71` : même tableau de deux adresses, mêmes valeurs `addressRegion`, mais sous un `@id` encore différent (`https://dcb-technologies.fr/notre-adn/#organization`), point déjà documenté comme Majeur dans `docs/audit-prelancement-v2/02-geo-ai.md` (fragmentation d'entité, non re-signalé ici en détail).

**Impact :** pour un même `@id` partagé entre l'Accueil et Contact, Google peut lire deux représentations contradictoires de la même propriété `address` (un objet vs un tableau, un format de région vs un autre) selon la page qu'il analyse. C'est un signal de cohérence d'entité plus faible que ce que le score brut de correction (@id unifié) suggère. La présence des deux adresses (Dardilly + Paray) sur Contact reste correcte sur le fond (doctrine "deux bases opérationnelles") : le problème est uniquement le format `addressRegion` et l'absence d'alignement avec le nœud canonique.

**Correction proposée (mécanique, faible risque) :** aligner `addressRegion` sur une seule convention partout ("Auvergne-Rhône-Alpes", la région administrative réelle) et ajouter la propriété `geo` sur le nœud de `contact/` pour qu'elle corresponde à l'Accueil. Alternative plus propre : faire porter `address` (tableau à 2 entrées) uniquement sur le nœud canonique de l'Accueil, et faire pointer `contact/` vers `{"@id": "https://dcb-technologies.fr/#localbusiness"}` en référence pure sans redéclarer `address`, comme c'est déjà fait pour `provider` sur 13 des pages caisse/web.

### M2 : plusieurs champs GBP modifiés dans la même session (nom, 4 catégories, zones)

**Constat :** le plan `FICHE-GBP-PLAN.md` (section 1) prévenait explicitement que modifier plusieurs champs majeurs (nom, adresse, catégorie, horaires) en une seule session déclenche une revue automatique Google supplémentaire et peut réduire temporairement la visibilité de la fiche. La combinaison réalisée cette semaine (nom + 4 catégories + zones desservies, tous les trois dans la même passe) n'est pas exactement celle visée par l'avertissement (qui portait sur nom+adresse+catégorie+horaires), mais reste plusieurs changements structurants en même temps.

**Impact :** aucune action corrective nécessaire, simple point de vigilance. Une période de vérification ou de visibilité réduite dans les jours suivants serait normale et ne signalerait pas un problème nouveau.

**Correction :** aucune, à titre informatif pour ne pas confondre une éventuelle baisse de visibilité passagère avec un échec de la configuration.

---

## Améliorations post-lancement

- **Description GBP** : prête (orientée humain, "un seul interlocuteur"), pas encore collée dans l'interface au moment de cet audit. Action XIII, hors code.
- **Services, photos, posts GBP** : pas encore renseignés selon l'état transmu. Le détail (libellés de services par catégorie, liste de 8-10 photos, cadence de posts) est déjà prêt dans `docs/audit-prelancement/FICHE-GBP-PLAN.md` sections 4, 6, 7. Rien à ajouter ici.
- **Confirmer l'alignement des 4 catégories posées avec le plan** : seules 2 des 4 ont été nommées dans le brief transmis ("Fournisseur de terminaux de point de vente", "Assistance et services informatiques"). Le plan en prévoyait 2 autres ("Concepteur de sites Web", "Service d'hébergement de site Web"), cohérentes avec le hub Web du site. À confirmer avec XIII que ce sont bien les 2 catégories manquantes, pas une substitution.
- **Zones desservies Loire (Montbrison/Feurs en fallback)** : vérifié cohérent avec le site. `caisse-enregistreuse/loire/index.html:100-101` cite déjà Montbrison et Feurs dans son `areaServed`, en plus de Saint-Étienne et Roanne. Le choix de XIII de ne pas déclarer "Loire" comme département entier mais des villes précises est prudent et n'introduit aucune incohérence avec le contenu du site.
- **`sameAs` GBP** : toujours fonctionnel (vérifié en V1 le 21/07), rien à refaire ici. Rappel : le lien `share.google/...` reste un raccourci fragile, préférer l'URL Maps longue à terme.
- **Homogénéiser `addressRegion`** : cf. Majeur M1, à traiter avec la fusion d'entité `notre-adn` déjà prévue dans `02-geo-ai.md`.

---

## Détail par point demandé

### 1. Signaux locaux on-site (NAP, JSON-LD LocalBusiness, contact et notre-adn)

Téléphone (`04 82 53 05 10` / `+33482530510`) et email (`contact@dcb-technologies.fr`) 100 % cohérents sur l'ensemble des pages vérifiées, aucune variante trouvée. `@id` canonique `https://dcb-technologies.fr/#localbusiness` désormais partagé et inliné sur les 19 pages hors silo IT gelé (vérifié par lecture directe : hub caisse, 8 sous-pages caisse, 4 pages département, hub web, 3 sous-pages web, homepage, contact). Divergence résiduelle de format d'adresse entre Accueil et Contact/Notre ADN : cf. Majeur M1.

### 2. Pages département (doctrine, unicité, maillage)

Les 4 pages (`ain`, `loire`, `rhone`, `saone-et-loire`) inlinent chacune l'objet `LocalBusiness` complet dans leur `provider` (vérifié sur `saone-et-loire` L76-91, `loire` L76-90, `rhone` équivalent) : le seul gap que V1 avait laissé sur ces pages est corrigé. FAQ vérifiées réellement distinctes d'une page à l'autre (comparaison directe Saône-et-Loire vs Rhône : aucune formulation copiée-collée, arguments et villes propres à chaque zone). Maillage hub → 4 pages département confirmé présent en desktop (`caisse-enregistreuse/index.html:861`) et mobile (`caisse-enregistreuse/index.html:1348`). Aucun lien dept→dept, conforme à la doctrine actuelle du projet (jugé inutile, pas un défaut).

### 3. Doctrine géo pages métier (neutralité départementale, spread des villes)

Échantillon vérifié sur 3 pages (une par silo) : `caisse-enregistreuse/boulangerie/index.html` (Lyon, Mâcon, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne), `maintenance-informatique/maintenance-depannage/index.html` (Lyon, Mâcon, Paray-le-Monial, Villefranche-sur-Saône, Bourg-en-Bresse), `visibilite-web/creation-site-internet/index.html` (Mâcon, Lyon, Bourg-en-Bresse, Roanne, Paray-le-Monial). Les 3 pages spreadent bien sur les 4 départements sans favoriser un pôle unique, aucune dérive vers un angle "métier orienté Lyon" détectée. Doctrine respectée.

### 4. Cohérence site ↔ fiche GBP

- **Catégories vs offres du site** : les 2 catégories nommées dans le brief ("Fournisseur de terminaux de point de vente", "Assistance et services informatiques") correspondent exactement aux silos Caisse et IT du site. Les 2 catégories non nommées, si elles suivent le plan, couvriraient le silo Web (création de site + hébergement). À confirmer avec XIII (cf. Améliorations).
- **Zones GBP vs `areaServed` du site** : cohérent. Le site déclare les 4 départements complets partout (`areaServed` 71/69/01/42 sur 26 pages). La fiche GBP, elle, semble avoir fait un choix plus prudent sur la Loire (villes précises plutôt que le département entier) : ce n'est pas une incohérence, les deux niveaux (site = ambition à 4 départements, fiche = zone de service réaliste) peuvent coexister sans se contredire, et les villes choisies (Montbrison, Feurs) sont bien celles déjà présentes sur `caisse-enregistreuse/loire/`.
- **Lien vers le bon domaine** : non re-vérifiable en direct aujourd'hui (mur anti-bot). Dernière donnée fiable (V1, 21/07) : champ site web de la fiche = `dcb-technologies.fr`, cohérent avec le domaine cible des canoniques/sitemap du V2. Aucune action requise avant bascule.

### 5. Signal GSC (requêtes locales, cannibalisation)

Re-vérifié directement via `mcp__gsc__get_search_by_page_query` sur la propriété `https://dcb-technologies.fr/` (fenêtre 90 jours se terminant aujourd'hui) :
- `/caisse-enregistreuse/rhone/` : 66 impressions, 0 clic, requête "caisse enregistreuse lyon" en position 14,4 (62 impressions).
- `/caisse-enregistreuse/` (hub) : 146 impressions, 2 clics, même requête en position 12,9 (47 impressions).

Chiffres essentiellement identiques à ceux cités en V1 (fenêtre glissante d'un jour), confirmant que la cannibalisation hub/page département documentée en V1 est toujours active sur les données actuellement mesurées. Rappel : cette mesure porte sur le site V1 en ligne, pas sur le code V2 audité ici, non déployé à la racine du domaine.

### 6. Readiness citations locales

Non re-vérifié par recherche externe cette session (aucun changement de statut attendu : le plan reste `pour-clement/MODULE_2_referencement-local.md` Axe 5, à exécuter uniquement après mise en ligne effective). Statut inchangé depuis V1 : 0 citation soumise.

---

## Ce qui est SAIN

- **Bloquant JSON-LD de V1 corrigé et vérifié** : `LocalBusiness` inliné avec `@id` identique sur les 19 pages hors silo IT (au lieu d'une simple référence non résolvable), y compris les 4 pages département qui étaient la priorité du brief initial.
- **`contact/` ne déclare plus un `@id` distinct** : le doublon d'entité de V1 est corrigé, même si les valeurs de la propriété `address` restent à harmoniser (M1).
- **Téléphone et email 100 % cohérents** sur l'ensemble des pages vérifiées, aucune régression.
- **4 pages département** : doctrine intégralement respectée (villes réelles et différenciées, zéro duplication FAQ, maillage hub→dept intact des deux côtés desktop/mobile, zéro lien dept→dept conforme à la doctrine actuelle).
- **Doctrine "pages métier neutres au département"** : confirmée sur l'échantillon des 3 silos, spread réel sur les 4 départements.
- **Zéro `aggregateRating`/`Review`** sur l'ensemble des pages vérifiées.
- **Travail admin GBP réel engagé cette semaine** (nom, 4 catégories, zones nettoyées, description prête), première progression concrète sur cette fiche depuis l'audit d'avril.
- **Choix des zones Loire (Montbrison/Feurs)** : cohérent avec le contenu réel de la page département, pas une invention.

---

## Comparaison avec le rapport V1 (`docs/audit-prelancement/05-seo-local-gbp.md`, 60/100)

| Constat V1 | Statut V2 |
|---|---|
| [BLOQUANT] 1 : ancrage GPS GBP à 20 km (Brignais) | **Non re-vérifiable aujourd'hui** (mur anti-bot Google). Aucun signal de correction dans les changements transmis cette semaine. Traité à nouveau en bloquant hors code par prudence |
| [BLOQUANT] 2 : `LocalBusiness` référencé par `@id` non résolvable sur 19 pages | **CORRIGÉ.** Vérifié par lecture directe du code sur les 19 pages concernées, y compris les 4 département |
| M1 (GBP) : catégorie secondaire absente, nom en minuscule | **Progrès transmis mais non re-vérifiable en direct** : nom et 4 catégories dits "posés" cette semaine, en attente de confirmation/validation Google |
| M2 (GBP) : rythme d'avis en retard | **Hors périmètre de ce rapport**, XIII gère ce levier lui-même |
| M3 : cannibalisation "caisse enregistreuse lyon" hub/dept | **Inchangé**, re-mesuré aujourd'hui, chiffres quasi identiques (mesure V1 toujours en ligne) |
| M4 : `contact/` entité dupliquée avec `@id` différent | **Partiellement corrigé** : `@id` unifié (bon), mais valeurs `address` toujours divergentes du nœud canonique (nouveau Majeur M1 de ce rapport, portée réduite et déplacée) |
| M5 : 0 citation locale soumise | **Inchangé**, cohérent avec le statut pré-lancement |
| Sain V1 (téléphone, adresse siège, hubs Caisse/Web inlinés, doctrine dept, doctrine pages neutres, footer nettoyé) | **Toujours sain**, reconfirmé |

**Delta net : note passée de 60/100 à 74/100.** La progression vient d'une correction de code réelle et vérifiée (résolution `@id` LocalBusiness, le point le plus lourd de la notation V1) et d'un travail de configuration GBP engagé cette semaine. Le point le plus critique pour le classement local (ancrage GPS) reste non confirmé corrigé et devra être revérifié dès que possible, idéalement en direct par XIII dans l'interface GBP plutôt qu'en scraping externe (bloqué par la détection anti-bot de Google aujourd'hui).

---

**Document produit par :** seo-expert (Sonnet 5)
**Prochaine révision recommandée :** confirmation directe par XIII de l'état de l'ancrage GPS GBP et de la validation des 4 catégories, puis re-mesure GSC 4 à 8 semaines après la mise en ligne effective du V2 à la racine du domaine.
