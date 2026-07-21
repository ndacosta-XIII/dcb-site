# Audit de cohérence transverse | DCB Technologies

**Date :** 21 juillet 2026
**Périmètre :** ensemble des pages du site (homepage, silo caisse + pages département, silo IT, silo Web, pages spéciales et légales), avec lecture réelle du corps desktop (`.d-shell`), du corps mobile (`.m-shell`) et du `head` (JSON-LD).
**Méthode :** extraction verbatim de chaque affirmation "cohérence-sensible" (délais SAV, taux, durées d'engagement, garanties, prix, horaires, bases/zone, comparatifs concurrents, promesses fortes), normalisation par sujet, puis croisement entre pages pour détecter les valeurs qui s'affrontent. On ne juge pas si un chiffre est bon : on vérifie qu'un même sujet dit la même chose partout.

---

## Constat global

Le site est **globalement cohérent sur ses socles durs** (délai 4h sur site, amende NF525 7 500 EUR, grille de prix caisse et web, adresse siège, zone 71/69/01/42, téléphone). Mais **17 sujets se contredisent d'une page à l'autre**, dont **4 majeurs** qui exposent un vrai risque de crédibilité ou d'erreur factuelle. Le plus grave est une erreur de fait pure (Lyon présenté comme une base sur la page restaurant, y compris dans le JSON-LD indexé) et un métrique de résolution à distance décliné en **cinq valeurs différentes** (95 / 92 / 90 / 80 / "la majorité"). **8 des 17 incohérences touchent le silo IT**, dont les corrections sont en pause : elles sont signalées mais à ne pas appliquer maintenant.

---

## La matrice des incohérences

Triée par gravité (majeur d'abord) puis par catégorie. "IT en pause" = correction à ne pas appliquer tant que le silo IT est gelé.

### MAJEUR

| # | Sujet | Valeurs qui s'affrontent | Pages | Canonique recommandé | IT en pause |
|---|---|---|---|---|---|
| 1 | Bases opérationnelles | "Paray + Dardilly" (correct) VS **"Paray + Lyon" (ERREUR de fait)** VS "Paray seul" VS "deux agences" | Correct : index, contact, notre-adn. Erreur Lyon : `caisse-enregistreuse/restaurant/index.html` (json-ld L69, desktop L518, mobile L874). Paray seul : `coiffure` (json-ld L71, L519, L869). "agences" : index mobile L1206 | "nos deux bases, Paray-le-Monial (71) et Dardilly (69)". **Corriger d'urgence restaurant : remplacer Lyon par Dardilly (x3).** Uniformiser le mot "bases". | Non |
| 2 | Horaires d'ouverture | **08:30-18:30** VS **09:00-19:00**, les deux en JSON-LD indexé | index json-ld L306-307 (8h30-18h30) VS contact json-ld L469-470 + desktop L554 + mobile L665 (9h-19h) | À trancher avec Clément. La page contact fait foi (9h-19h) : aligner l'homepage dessus sauf avis contraire. | Non |
| 3 | Taux de résolution à distance | **95% VS 92% VS 9/10 (90%) VS 8/10 (80%) VS "la majorité"** | 95% : cashmag, coiffure, borne, monnayeur. 92% : `infogerance-pme` L218. 9/10 : `rhone` L593. 8/10 : `ain` (L534, json-ld L111), `loire` L584. Non chiffré : hub caisse, commerce-de-detail, hub IT, maintenance-depannage | À trancher avec Clément (vraie mesure). Choisir UNE valeur. À défaut de mesure fiable, "la majorité des incidents en moins de 20 min". Sinon propager la valeur retenue partout. | Oui (partiel) |
| 4 | Durée d'engagement location caisse | **12/24/36 (max 36) VS 12 à 60 (min 12) VS 24 à 60 (min 24) VS base tarif 60 mois** | Max 36 : hub caisse (FAQ L933, json-ld L213, mobile L1416). 12-60 : coiffure, commerce-de-detail. 24-60 : boulangerie, restaurant, borne, monnayeur, pages dept. Base 60 : index json-ld L385, hub L968 | À trancher avec Clément. Contradiction réelle : le hub plafonne à 36 mois alors que le prix mensuel est calculé "sur base 60 mois". Définir une fourchette unique (ex 24 à 60 + base tarif 60) et propager, FAQ hub compris. | Non |

### MINEUR

| # | Sujet | Valeurs qui s'affrontent | Pages | Canonique recommandé | IT en pause |
|---|---|---|---|---|---|
| 5 | Engagement contrats IT | 12/24/36 selon formule VS "sans engagement" VS LLD 24/36/48 | hub IT json-ld L48 + L819, infogerance json-ld L53 VS maintenance-depannage L377 (Starter sans engagement) + cloud-securite L353 VS location-vente json-ld L43 | Préciser que la maintenance est sans engagement (ou 12/24/36) de façon unique, distinguer la LLD matériel (24/36/48) qui est un autre produit. À confirmer Clément. | Oui |
| 6 | Délai remplacement matériel | **sous 48h (caisse) VS J+1 / sous 24h (IT)** | 48h : index mobile L1221, hub caisse L880, ain, loire, rhone, saone-et-loire. J+1/24h : maintenance-depannage (L110, json-ld L48, L309), location-vente json-ld L44/L135 | Contextes différents (matériel caisse vs parc IT), pas strictement fautif mais lisible comme contradiction. Harmoniser le vocabulaire ou assumer 48h caisse / J+1 IT explicitement. | Oui |
| 7 | Délai télémaintenance | **moins de 20 min VS moins de 30 min** | 20 min : partout (index, hub caisse, cashmag, hairnet, hub IT, tooltips). 30 min : `maintenance-depannage` L540 (carte étape) | Uniformiser sur "moins de 20 minutes" (valeur dominante, reprise dans le tooltip de la même page). Corriger le "< 30 min" L540. | Oui |
| 8 | Disponibilité SAV/support | **7j/7 24h/24 VS 7j/7 (sans 24h/24)** | 24h/24 : index json-ld L385, hub caisse L324, trust bars métiers. Sans : cashmag L213, hairnet L267, pages dept, hub IT L192, hebergement L110/154 | Choisir une promesse unique selon la réalité de l'astreinte : soit 24h/24 partout, soit le retirer partout. À trancher Clément. | Oui (partiel) |
| 9 | Garantie matériel (claim général 5 ans) | **garanti 5 ans VS 1 an + extension +4 ans (monnayeur)** | 5 ans : index L470/L1035, hub caisse L307, métiers, dept, location-vente L46. 1 an : `monnayeur` L332/L882 + extension L382 | Exception produit légitime (monnayeur 1 an + extension) mais le claim transverse "5 ans" ne le couvre pas. Nuancer en "jusqu'à 5 ans selon matériel" ou assumer l'exception. | Non |
| 10 | Durée clôture Z | **3 min VS 5 min VS 2 min VS 30 s** | 3 min : boulangerie L236/L607. 5 min : restaurant json-ld L66 + L515. 2 min : coiffure L450. 30 s : monnayeur L222/L462 + og L13 | Variation contextuelle acceptable si intentionnelle (le monnayeur automatise, d'où 30s), mais 2/3/5 min pour la même clôture Z CashMag étonne. Harmoniser la clôture "logiciel" (hors monnayeur) sur une valeur. | Non |
| 11 | Villes areaServed (JSON-LD) | Liste avec Paray VS liste **sans Paray** (+ Roanne) VS liste + Saint-Etienne | Avec Paray : hub caisse, cashmag, hub web, creation-site, hub IT, cloud, location-vente, outils. Sans : `infogerance-pme` L72. + Saint-Etienne : `seo-sea-local` L86 | Harmoniser la liste areaServed par silo. infogerance devrait inclure Paray comme les autres pages IT. Enjeu SEO, invisible prospect. | Oui (partiel) |
| 12 | Villes/régions hors périmètre | **"Auxois" cité dans la couverture 71** (Auxois = Côte-d'Or 21, hors zone) | `caisse-enregistreuse/saone-et-loire/index.html` hero L153 | Retirer "Auxois", remplacer par une micro-région réellement dans le 71 (Autunois, Bresse louhannaise). | Non |
| 13 | Réduction no-show (coiffure/Hairnet) | **"divisés par 3" VS "chutent nettement" (non chiffré)** | Par 3 : hub caisse L689, coiffure L292/L669. Non chiffré : `hairnet` L141/L1029 | Une seule formulation. Si "divisé par 3" (donnée Hairnet) est défendable, l'appliquer sur hairnet aussi ; sinon rabattre coiffure/hub sur "chutent nettement". À trancher Clément. | Non |
| 14 | Délai de réponse commerciale | **moins de 2h VS sous 24h VS sous 48h** | 2h : contact (meta L10, L523/L607, L639/L707). 24h : pages métier caisse, hub IT L834, outils, creation-site, seo-sea-local. 48h : hub web L830/L1291, infogerance L378, cloud json-ld L48 | Pas forcément fautif (livrables distincts : rappel 2h, devis 24h, audit 48h) mais l'écart peut sembler contradictoire. Clarifier que chaque délai = un livrable, ou aligner les rappels. À cadrer Clément. | Oui (partiel) |
| 15 | Contact borne/monnayeur (RDV vs devis) | **RDV sous 5 jours ouvrés VS devis sous 24h, sur la même page** | `borne-de-commande` L397 (RDV 5j) + L402 (devis 24h). Idem `monnayeur` L398 + L403 | Incohérence interne à la même page. Aligner sur le standard du site ("devis sous 24h") ou distinguer clairement les deux étapes. | Non |
| 16 | Durée formation à l'installation | **une demi-journée VS 2 à 3 heures** | Demi-journée : hub caisse L942, cashmag, hairnet, pages dept. 2-3h : `commerce-de-detail` json-ld L67 + L225 | Harmoniser. "Une demi-journée" domine : retenir cette valeur (ou une fourchette unique) sauf raison métier documentée. | Non |
| 17 | Délai concurrent (comparatifs) | **48h VS 48-72h VS 24-72h VS 5-10 jours** | 48h : hub caisse L382. 48-72h : commerce-de-detail, hub IT. 24-72h : maintenance-depannage, infogerance. 5-10j (retour fabricant, cas distinct) : borne L508, monnayeur L563 | Claims juridiquement sensibles. Harmoniser la fourchette "support concurrent" sur une valeur prudente et sourçable (ex 48 à 72h). Le "5-10j" vise le retour fabricant, à garder distinct. | Oui (partiel) |

---

## Référentiel canonique proposé

Base de travail pour `docs/content-reference.md` : un sujet, une valeur. Les lignes marquées **[Clément]** ne peuvent pas être décidées sans DCB (vraie mesure ou vraie politique commerciale).

| Sujet | Valeur canonique à verrouiller |
|---|---|
| Bases opérationnelles | "nos deux bases, Paray-le-Monial (71) et Dardilly (69)". Jamais "Lyon" comme base, jamais "agences". |
| Délai intervention sur site | "sous 4h" (déjà cohérent, à préserver). |
| Délai télémaintenance | "moins de 20 minutes". |
| Délai remplacement matériel | 48h côté caisse / J+1 côté IT, à assumer explicitement OU **[Clément]** valeur unique. |
| Taux résolution à distance | **[Clément]** valeur mesurée unique, ou formulation "la majorité des incidents en moins de 20 min". |
| Durée engagement location caisse | **[Clément]** fourchette unique (proposée : 24 à 60 mois, base tarif 60 mois), FAQ hub inclus. |
| Engagement contrats IT | **[Clément]** maintenance sans engagement ou 12/24/36, LLD matériel 24/36/48 distincte. |
| Disponibilité SAV | **[Clément]** "7j/7 24h/24" partout OU "7j/7" partout, selon l'astreinte réelle. |
| Garantie matériel | "jusqu'à 5 ans selon matériel" (couvre l'exception monnayeur 1 an + extension). |
| Horaires | **[Clément]** valeur unique (proposée : 9h-19h, alignée sur contact). |
| Durée clôture Z (hors monnayeur) | valeur unique à retenir (monnayeur = 30s assumé à part). |
| No-show coiffure | **[Clément]** "divisés par 3" partout OU "chutent nettement" partout. |
| Durée formation | "une demi-journée". |
| Délai réponse commerciale | rappel 2h / devis 24h / audit 48h, présentés comme livrables distincts. |
| Contact borne/monnayeur | "devis sous 24h" (retirer ou requalifier le RDV 5 jours). |
| Délai concurrent (comparatif) | "48 à 72h" (retour fabricant 5-10j gardé distinct). |
| areaServed JSON-LD | liste de villes-piliers identique par silo, Paray inclus partout. |
| Zone / villes | 71/69/01/42 uniquement, retirer "Auxois" (hors zone). |
| Amende NF525 | 7 500 EUR par caisse (déjà cohérent). |
| NF525 obligation | plus obligatoire depuis février 2026 (déjà aligné, ne jamais réécrire "obligatoire"). |
| Prix caisse / web / IT | grilles déjà cohérentes (préserver), grille IT restant factice à remplacer avant mise en ligne. |

---

## Ce qui est déjà cohérent (rassurant)

- **Délai sur site "sous 4h"** : identique partout (homepage, hub, métiers, dept, IT, blog). Seules des variantes de formulation, aucune divergence de valeur.
- **Amende NF525 : 7 500 EUR par caisse**, partout. Le blog précise "2 caisses = 15 000 EUR" et "60 jours pour régulariser" de façon cohérente.
- **Prix caisse par métier** : boulangerie 59 EUR, comptoir 77 EUR, boutique 83 EUR, fauteuil 115 EUR, borne 127 EUR, monnayeur F26 258 EUR : cohérents hub / sous-pages / dept, y compris JSON-LD AggregateOffer (59-258).
- **Prix création site web** : one-page 950 EUR HT, 5 pages 1 200 EUR HT, identiques hub et sous-page.
- **Prix IT** : maintenance 89/149, cloud 49/79, M365/Workspace 6/12,50, coût CDI comparé 40 000 EUR/an, cohérents (grille encore factice, à remplacer avant lancement).
- **Expérience fondateurs** : Nathanaël 10 ans, Clément 12 ans, "22 ans cumulés", cohérent.
- **Année de fondation** : 2025, cohérente (meta + JSON-LD + corps).
- **Zone** : 71/69/01/42 stable sur tout le site (hors le "Auxois" à corriger).
- **Adresse siège** : Dardilly 69570, 59 Chemin du Moulin Carron, identique dans tous les JSON-LD.
- **Livraison site web** : one-page 7 jours, 5 pages 7 jours à 3 semaines, cohérent.
- **Premiers résultats SEO** : 3 à 6 mois, Google Ads dès les premières semaines, cohérent.
- **Gain borne** : +20% de panier moyen, cohérent.
- **Reconnexion CashMag hors-ligne** : au moins une fois toutes les 72h, cohérent (desktop, mobile, JSON-LD).
- **Téléphone 04 82 53 05 10** : constant (n'est pas une incohérence).
- **NF525 non obligatoire depuis février 2026** : site aligné sur la réforme, aucune page ne dit "obligatoire".

---

## Ordre d'harmonisation recommandé (hors silo IT gelé)

1. **Urgence factuelle (front-builder ou copywriter-site) :** corriger la page `restaurant` (remplacer "Lyon" par "Dardilly" x3, desktop + mobile + JSON-LD). C'est une erreur de fait, pas un choix éditorial. Faire dans la foulée le retrait d'"Auxois" (saone-et-loire) et le "deux agences" de l'index mobile.
2. **Décisions Clément d'abord :** collecter les vraies valeurs sur taux de résolution à distance, durée d'engagement location, horaires, disponibilité SAV (24h/24 ou non), no-show. Rien à propager tant que ces valeurs ne sont pas tranchées.
3. **`seo-expert` (JSON-LD) :** une fois les valeurs arbitrées, aligner les blocs JSON-LD divergents (horaires homepage, durée d'engagement, areaServed par silo). Le JSON-LD est indexé : ses contradictions sont les plus coûteuses.
4. **`copywriter-site` (formulations) :** unifier clôture Z, durée de formation, garantie "jusqu'à 5 ans selon matériel", contact borne/monnayeur (devis 24h), et clarifier les trois délais de réponse commerciale comme livrables distincts.
5. **`silo-harmonizer` (propagation) :** une fois chaque sujet fixé sur une valeur unique, propager à l'identique sur toutes les pages du silo caisse et graver le référentiel dans `docs/content-reference.md`.
6. **`site-qa` :** passe finale avant tout commit multi-fichiers (grep em dash, encodage UTF-8, liens, JSON-LD valide).

Le silo IT (incohérences 3, 5, 6, 7, 8, 11, 14, 17 en tout ou partie) reste **en pause** : documenté ici, à traiter quand le gel sera levé, en même temps que le remplacement de la grille tarifaire factice.
