# SEO : volumes de recherche mots-clés (source Keyword Planner)

Document de référence pour tous les agents (seo-expert, copywriter-site, cro-expert, marketing-strategist, ads-*).
Sert de source de vérité pour prioriser contenu blog, pages silo, campagnes SEA et maillage.

## Source et méthode

- **Source** : Google Ads Keyword Planner, compte DCB Technologies (6265603123), onglet "Données historiques".
- **Période** : 1 juin 2025 au 31 mai 2026 (12 mois glissants).
- **Lieu** : France (volume NATIONAL). Langue : français.

> ATTENTION géo : tous les volumes ci-dessous sont NATIONAUX. Pour un B2B local (zone 71/42/69/01), le national surestime la demande réellement adressable. Un batch géo-ciblé sur les 4 départements est en cours (relance des mêmes mots-clés avec Lieu = Saône-et-Loire + Loire + Rhône + Ain). À l'arrivée, ajouter une colonne "volume zone 4 dép." à côté du volume national. Règle d'usage : le volume NATIONAL sert à jauger le potentiel d'un article de blog informationnel (qui peut ranker et être lu nationalement, utile pour l'autorité et l'AI search) ; le volume LOCAL sert à jauger les pages silo et département (demande réellement convertible). Les deux se lisent ensemble, pas l'un contre l'autre.
- **Export de référence** : `Keyword Stats 2026-07-06 at 10_59_10.csv` (batch 1, fourni par XIII le 06/07/2026).

### Lecture des volumes (IMPORTANT)

Le Keyword Planner ne donne PAS un chiffre exact tant que le compte n'a pas dépensé assez. Les volumes sont des **tranches** (buckets). Correspondance utilisée dans ce doc :

| Valeur brute CSV | Tranche réelle | Libellé retenu |
|---|---|---|
| `500.0` | 100 à 1 000 recherches/mois | **100-1K** |
| `50.0` | 10 à 100 recherches/mois | **10-100** |
| vide | sous le seuil de mesure (négligeable) | **vide** |

- La colonne **Concurrence (indice 0-100)** est fiable et exploitable telle quelle (plus l'indice est bas, plus le mot-clé est gagnable vite).
- La colonne **CPC haut de page (fourchette EUR)** sert au SEA, pas au blog.
- La colonne **variation YoY** du Keyword Planner est **peu fiable** en dessous des gros volumes (beaucoup de valeurs figées à -90% qui sont un artefact de bucket). **Seule exception notable et confirmée : le +900% sur "logiciel de caisse certifié nf525".** Ne pas surinterpréter les autres pourcentages.

### Marché DCB : niche B2B locale à faible volume

Aucun mot-clé du périmètre ne dépasse la tranche 100-1K. C'est normal pour du B2B local (caisses, IT, web sur 71/69/01/42). **Conséquence stratégique : le levier n'est pas le volume brut mais la concurrence faible + l'intention.** Un mot-clé informationnel à 100-1K et concurrence < 25 est plus gagnable qu'un mot-clé transactionnel à 100-1K et concurrence > 80.

## Tableau des volumes (batch 1)

Trié par silo, puis par volume décroissant. Intention : INFO = informationnel (terrain du blog), TRANSAC = transactionnel (terrain des pages silo / SEA), MIXTE = les deux.

### Silo Caisse

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| caisse enregistreuse nf525 | 100-1K | Élevée (100) | 4,01 - 8,92 | TRANSAC |
| logiciel de caisse certifié nf525 | 100-1K | Élevée (83) | 4,15 - 13,68 | TRANSAC |
| logiciel caisse restaurant | 100-1K | Moyenne (50) | 6,39 - 25,48 | TRANSAC |
| tpe android | 100-1K | Élevée (100) | 1,94 - 7,26 | MIXTE |
| norme nf525 caisse enregistreuse | 10-100 | Moyenne (57) | : | INFO |
| caisse enregistreuse conforme | 10-100 | Élevée (71) | 3,45 - 11,10 | TRANSAC |
| caisse enregistreuse mâcon | vide | : | : | TRANSAC (local) |
| caisse enregistreuse sans internet | vide | : | : | INFO |
| caisse enregistreuse sans connexion | vide | : | : | INFO |
| caisse tactile hors ligne | vide | : | : | INFO |
| optimiser rotation tables restaurant | vide | : | : | INFO |
| terminal de paiement android commerce | vide | : | : | MIXTE |

Note : "caisse sans internet / sans connexion / hors ligne" ont un volume Keyword Planner vide mais 16 impressions GSC latentes (question JSON-LD existante, position 10). Intérêt réel mais sous le seuil : sujet de cadence, pas de lancement.

### Silo IT (maintenance informatique)

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| cybersécurité pme | 100-1K | Faible (23) | 4,08 - 11,24 | INFO |
| maintenance informatique préventive | 100-1K | Faible (1) | : | INFO |
| maintenance informatique entreprise | 100-1K | Faible (9) | 1,95 - 19,13 | INFO |
| sauvegarde externalisée | 100-1K | Faible (8) | 3,65 - 12,20 | INFO |
| sécurité informatique entreprise | 100-1K | Faible (8) | 3,09 - 9,35 | INFO |
| infogérance pme | 100-1K | Faible (13) | 4,73 - 18,84 | MIXTE |
| contrat de maintenance informatique | 100-1K | Faible (9) | 1,56 - 17,48 | TRANSAC |
| méthode 3-2-1 sauvegarde | 10-100 | Faible (10) | : | INFO |
| sauvegarde cloud entreprise | 10-100 | Faible (6) | 7,15 - 18,49 | INFO |
| sauvegarde de données entreprise | 10-100 | Faible (0) | : | INFO |
| dépannage informatique mâcon | 10-100 | non renseignée | : | TRANSAC (local) |
| maintenance informatique mâcon | 10-100 | non renseignée | : | TRANSAC (local) |
| infogérance mâcon | vide | : | : | TRANSAC (local) |
| protéger données clients entreprise | vide | : | : | INFO |

Le silo IT est le plus riche en mots-clés informationnels à volume réel ET concurrence faible (indice 1 à 23). Terrain idéal pour émerger vite via le blog.

### Silo Web (visibilité web)

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| pourquoi mon site n'apparaît pas sur google | 100-1K | Faible (25) | 0,94 - 3,99 | INFO |
| référencement google my business | 100-1K | Faible (3) | 1,59 - 6,21 | INFO |
| combien coûte un site internet | 100-1K | Moyenne (54) | 0,82 - 2,90 | INFO |
| création site internet mâcon | 100-1K | Faible (4) | : | TRANSAC (local) |
| prix site internet professionnel | 10-100 | Faible (29) | 1,12 - 3,75 | INFO |
| tarif création site vitrine | 10-100 | Faible (8) | 1,01 - 3,13 | INFO |
| référencement local commerce | vide | : | : | INFO |
| référencement local mâcon | vide | : | : | TRANSAC (local) |
| être visible sur google commerce | vide | : | : | INFO |

Contrairement à ce que suggérait l'absence de trafic GSC historique, le silo Web A de la demande informationnelle réelle et gagnable (3 termes à 100-1K, concurrence 3 à 54). Feu vert data pour prioriser le Web.

## Tableau des volumes (batch 2, découverte élargie)

Export `Keyword Stats 2026-07-06 at 11_06_28.csv` (batch 2, 06/07/2026). Objectif : découverte (pas seulement validation des 8 articles pressentis) + spread local sur les 4 départements. Total France batch 2 : ~6 300/mois.

### Silo Caisse (batch 2)

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| borne de commande restaurant | 100-1K | Élevée (100) | 2,83 - 16,78 | TRANSAC |
| caisse enregistreuse tactile prix | 100-1K | Moyenne (37) | 2,04 - 7,65 | MIXTE |
| logiciel caisse gratuit | 100-1K | Élevée (77) | 1,51 - 6,55 | INFO (intention "gratuit", faible valeur commerciale) |
| sumup avis | 100-1K | Élevée (84) | 0,24 - 2,66 | INFO (concurrent, angle comparatif) |
| monnayeur automatique commerce | 10-100 | Élevée (87) | 5,22 - 15,57 | TRANSAC |
| tva restauration 2026 | 10-100 | Moyenne (64) | : | INFO (saisonnier) |
| zettle vs sumup | 10-100 | Élevée (94) | : | INFO (concurrent) |
| encaissement sans contact commerce | vide | : | : | INFO |

### Silo IT (batch 2)

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| audit informatique pme | 100-1K | Faible (3) | 4,37 - 24,01 | MIXTE |
| microsoft 365 entreprise | 100-1K | Faible (33) | 1,34 - 11,00 | MIXTE |
| onduleur serveur | 100-1K | Élevée (100) | 0,31 - 1,13 | TRANSAC |
| assistance informatique à distance | 10-100 | Faible (23) | 0,90 - 3,10 | MIXTE |
| messagerie professionnelle sécurisée | 10-100 | Faible (32) | : | INFO |
| ransomware entreprise | 10-100 | Faible (5) | : | INFO |
| rgpd tpe pme | 10-100 | Élevée (71) | : | INFO |
| serveur nas entreprise | 10-100 | Élevée (70) | 3,00 - 10,35 | TRANSAC |
| externalisation informatique pme | 10-100 | Faible (0) | : | MIXTE |
| protection ransomware pme | 10-100 | Faible (0) | : | INFO |
| télésauvegarde entreprise | vide | : | : | INFO |
| vpn entreprise | vide | : | : | MIXTE |

### Silo Web (batch 2)

| Mot-clé | Volume/mois | Concurrence (indice) | CPC EUR (bas-haut) | Intention |
|---|---|---|---|---|
| refonte site internet | 100-1K | Faible (19) | 3,05 - 12,13 | MIXTE |
| référencement naturel définition | 100-1K | Faible (3) | 0,21 - 2,54 | INFO (TOFU pur, faible valeur commerciale) |
| site e-commerce prix | 100-1K | Moyenne (35) | 0,82 - 1,98 | INFO |
| avis google entreprise | 10-100 | Faible (25) | 0,91 - 2,29 | INFO |
| nom de domaine professionnel | 10-100 | Moyenne (59) | 1,24 - 7,49 | INFO |
| vitesse chargement site | 10-100 | Faible (21) | 0,87 - 1,27 | INFO |
| agence web locale | 10-100 | Faible (27) | : | TRANSAC |
| créer site internet soi-même | 10-100 | Élevée (80) | 1,44 - 6,15 | INFO (intention DIY, faible valeur) |
| google ads ou seo | vide | : | : | INFO |
| site internet vitrine artisan | vide | : | : | TRANSAC |

### Spread local 4 départements (batch 2)

| Mot-clé | Volume/mois | Concurrence | Intention |
|---|---|---|---|
| maintenance informatique villefranche-sur-saône | 10-100 | non renseignée | TRANSAC (local) |
| caisse enregistreuse chalon-sur-saône | vide | : | TRANSAC (local) |
| caisse enregistreuse roanne | vide | : | TRANSAC (local) |
| maintenance informatique chalon-sur-saône | vide | : | TRANSAC (local) |
| création site internet le creusot | vide | : | TRANSAC (local) |
| infogérance bourg-en-bresse | vide | : | TRANSAC (local) |
| dépannage informatique dardilly | vide | : | TRANSAC (local) |

**Constat local majeur** : hors Mâcon (seul "création site internet mâcon" = 100-1K), TOUS les mots-clés locaux des autres villes sont vides ou 10-100 en Keyword Planner. Les pages département ne peuvent donc PAS être justifiées par le volume : ce sont un pari SEO longue traîne (capter le peu de demande locale existante, angle local réel), pas un levier de volume. Cohérent avec la doctrine pages département (landers SEA + angle local, faible volume assumé).

### Nouveaux candidats blog issus du batch 2

- **audit informatique pme** (IT, 100-1K, concurrence 3) : un des meilleurs couples volume/concurrence de tout le périmètre. Candidat blog IT fort.
- **refonte site internet** (Web, 100-1K, concurrence 19) : gros volume relatif, concurrence faible, proche du commercial. Candidat blog Web fort.
- **caisse enregistreuse tactile prix** (Caisse, 100-1K, concurrence 37) : le seul vrai mot-clé caisse à la fois à volume 100-1K ET concurrence non prohibitive ET angle contenu possible. Meilleur candidat blog caisse que "norme nf525" (10-100).
- **microsoft 365 entreprise** (IT, 100-1K, concurrence 33) et **site e-commerce prix** (Web, 100-1K, concurrence 35) : candidats secondaires solides.
- Angle concurrents (**sumup avis** 100-1K, zettle vs sumup) : concurrence élevée mais stratégiquement utile (positionnement anti-SumUp déjà identifié). Terrain comparatif, à manier avec un angle DCB différenciant.

## Batch géo : zone 4 départements (71 / 42 / 69 / 01)

Export `Keyword Stats 2026-07-06 at 11_16_25.csv` (06/07/2026), Lieux cumulés Saône-et-Loire + Loire + Rhône + Ain, mêmes mots-clés que batch 1+2.

### Répartition du volume par département (tous mots-clés cumulés)

| Département | Volume/mois cumulé | Part |
|---|---|---|
| Rhône (69) | 1 112 | 45% |
| Loire (42) | 527 | 22% |
| Ain (01) | 440 | 18% |
| **Saône-et-Loire (71)** | **371** | **15%** |
| **Total zone** | **2 450** | 100% |

Contre ~6 300 à 7 950 en national sur les mêmes listes. La zone pèse donc environ un tiers du national.

### Constats géo majeurs

1. **Le 71, siège historique et cible prioritaire d'émergence, est le PLUS PETIT marché des 4** (371/mois, 15%). Le Rhône (Lyon) pèse 3 fois plus (1 112, 45%). Fait stratégique à assumer : vouloir "émerger dans le 71" vise la zone la moins pourvue en volume de recherche. Le volume est à Lyon.
2. **À l'échelle départementale, TOUT s'écrase à 10-100/mois ou vide.** Aucun mot-clé n'atteint 100-1K localement. Le volume cesse d'être un facteur de tri local : il est uniformément faible partout.
3. **Conséquence pour le blog** : le blog ne peut PAS être un levier de volume local (il n'y en a pas). Son volume vit au national. Rôle du blog = autorité, top-of-funnel, AI search, et soutien par maillage des pages qui, elles, convertissent le local. Les pages silo et département portent l'intention locale (faible volume, longue traîne, tri par concurrence et pertinence, pas par volume).
4. **La concurrence se recompose localement** (indices recalculés sur la zone). Restent faibles localement ET nationalement (donc gagnables des deux côtés) : sécurité informatique entreprise (17), microsoft 365 entreprise (22), infogérance pme (27), audit informatique pme (36), maintenance informatique préventive (0), prix site internet professionnel (25), vitesse chargement site (14), avis google entreprise (21), référencement naturel définition (29). Deviennent chers localement alors qu'ils étaient faibles au national : cybersécurité pme (23 national vers 76 local), référencement google my business (3 vers 67), combien coûte un site internet (54 vers 79). Lecture prudente : à 10-100 de volume, l'indice de concurrence local est bruité (petit échantillon), à croiser avec le national plutôt qu'à lire seul.

### Doctrine consolidée volume national vs local

- **Blog (contenu informationnel)** : piloter par le volume NATIONAL (IT et Web y ont du 100-1K gagnable). Ne pas attendre de trafic blog local, l'assumer.
- **Pages silo et département (contenu transactionnel local)** : volume local faible et plat, piloter par l'intention et la concurrence, pas par le volume. Pari longue traîne assumé, cohérent avec la doctrine pages département.
- **Priorité géographique du volume** : si un jour l'objectif devient le volume brut, il est dans le Rhône (Lyon), pas dans le 71. Décision business (terrain 71 d'abord) à garder consciente de cet arbitrage.

## Enseignements transverses

1. **Blog = INFO, pages silo + SEA = TRANSAC.** Aucun article de blog ne doit viser un mot-clé TRANSAC à concurrence > 50 : il ne dépassera pas une page produit optimisée. Réserver ces termes aux pages silo et aux campagnes Search.
2. **Priorité de contenu = volume 100-1K croisé avec concurrence faible.** Champions actuels : maintenance informatique préventive (concurrence 1), référencement google my business (concurrence 3), création site internet mâcon (concurrence 4, local), sauvegarde externalisée / sécurité informatique entreprise (concurrence 8).
3. **La caisse n'a du volume que sur du transactionnel ultra-concurrentiel** (nf525 100, certifié nf525 83, tpe android 100). Le silo caisse se joue en pages silo et SEA, pas en blog. Le blog caisse se limite aux rares angles INFO (norme nf525).
4. **Le local à Mâcon existe surtout côté Web** (création site internet mâcon = 100-1K) et faiblement côté IT (dépannage / maintenance mâcon = 10-100). La caisse locale (caisse enregistreuse mâcon) est vide en Keyword Planner. À croiser avec les pages département.

## Intel SEA / page silo (hors blog)

**"logiciel de caisse certifié nf525"** : volume 100-1K, concurrence Élevée (83), **variation +900% sur 12 mois** (seule tendance forte confirmée du batch). Demande qui monte vite sur un terme où DCB a une légitimité produit réelle (CashMag certifié NF525). Actions recommandées, à traiter par ads-* et seo-expert hors blog :
- Vérifier que la formulation exacte figure dans le title / H1 / JSON-LD du hub caisse et de la future page conformité-nf525.
- Évaluer l'ouverture d'un ad-group Search dédié à ce terme plutôt que de le laisser dilué dans la campagne caisse existante.

## Lacunes connues et prochains batchs

Batch 1 (validation des 8 articles pressentis) et batch 2 (découverte élargie + spread local) sont intégrés ci-dessus. Pistes restantes pour un éventuel batch 3 :
- Comparatifs concurrents caisse supplémentaires (Tiller, Popina, Lightspeed, JDC) pour affiner l'angle anti-concurrent.
- Requêtes très longue traîne métier x ville (ex. "caisse boulangerie + ville") si l'on veut sécuriser des pages département par métier.
- Termes GEO/IA (formulations en question longue) pour l'optimisation AI search, non couverts par le Keyword Planner classique.

Mettre à jour ce document à chaque nouvel export Keyword Planner (ajouter un bloc "batch N", conserver la même structure et le même codage des tranches).
