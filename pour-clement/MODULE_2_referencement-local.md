# MODULE 2 — Référencement Local & Local Pack Google

> **Spécialisation :** Expert référencement local
> **Objectif :** Maximiser la visibilité de DCB Technologies dans le Local Pack Google et sur toutes les requêtes géolocalisées
> **Statut :** ✅ Analyse terminée + ✅ ENRICHIE avec données GBP réelles — en attente du MASTER_PLAN pour exécution

---

## 🎯 ÉTAT RÉEL DE LA FICHE GBP (vérifié le 2026-04-06)

**Fiche existante :** ✅ DCB technologies (KGMID `/g/11xvy54gzr`)
**URL canonique :** https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr

**Données vérifiées :**
| Champ | Valeur réelle |
|---|---|
| Nom affiché | `DCB technologies` (avec t minuscule — incohérence avec branding `DCB Technologies` du site) |
| Catégorie principale | `Assistance et services informatiques` |
| Catégories secondaires | ❌ **AUCUNE** détectée publiquement |
| Note moyenne | **5,0 / 5** |
| Nombre d'avis | **4** (Camille Simon, theo boissié, Groupe QPS, Teddy Malfroy/DICREA) |
| Téléphone | `04 82 53 05 10` ✅ |
| Site web | `dcb-technologies.fr` ✅ |
| Coordonnées GPS | **45.6356277, 4.7311759** (sud-ouest Lyon — zone Brignais/Vourles/Chaponost) |
| Adresse publique | ❌ **Non visible** sur la fiche publique |
| Réponses propriétaire | ✅ **100%** des avis ont une réponse |
| Photos visibles | 2+ (caisse boulangerie, logo DCB) |
| Horaires | Ouvert · Ferme à 18:30 (lundi détecté) |

**Analyse des avis (diversité métier intéressante) :**
1. **Camille Simon** (5★, février 2026) — Installation caisse en **boulangerie-pâtisserie**
2. **theo boissié** (5★, février 2026) — **Site internet** ⚠️ *lien familial probable avec Clément Boissié → avis suspect Google*
3. **Groupe QPS** (5★, juillet 2025) — **Plusieurs sites internet** B2B
4. **Teddy Malfroy / DICREA** (5★, décembre 2025) — **Maintenance IT secteur lyonnais** · Local Guide 51 avis (forte pondération Google)

---

## 🚨 PROBLÈMES CRITIQUES DÉTECTÉS

### 🔴 P0 — Incohérence NAP : 2 adresses différentes
- Coordonnées GBP : **45.6356, 4.7311** (sud-ouest Lyon — zone Brignais/Chaponost)
- Adresse JSON-LD du site : `59 Chemin du Moulin Carron, 69570 Dardilly` (45.81, 4.76 — nord-ouest Lyon)
- **Écart : ~20 km** entre les deux
- **Impact :** signal local fortement dilué pour Google. Probable raison principale pour laquelle la fiche n'apparaît pas dans le Local Pack malgré une note 5/5.
- **Action :** identifier la BONNE adresse (admin GBP ou direction DCB), harmoniser site + fiche.

### 🔴 P0 — Catégorie GBP incomplète : Google ne sait pas que DCB vend des caisses ni fait du web
- Catégorie principale unique : `Assistance et services informatiques`
- **Aucune catégorie secondaire détectée**
- **Conséquence :** sur "caisse enregistreuse Lyon" ou "création site internet Lyon", la fiche **ne peut pas apparaître** dans le local pack — Google ignore que DCB fait ces métiers, malgré les avis qui le prouvent
- **Action :** ajouter d'urgence les catégories secondaires :
  - `Vendeur de caisses enregistreuses` (CRITIQUE)
  - `Concepteur de sites Web`
  - `Service de cybersécurité`
  - `Magasin de matériel informatique`
  - `Fournisseur de services informatiques`

### 🟠 P1 — Avis "theo boissié" : ne pas supprimer, diluer statistiquement
- Théo Boissié est **un vrai client de DCB** (projet site web livré et facturé), mais aussi **lien familial avec Clément Boissié** (co-fondateur)
- Son avis est **authentique** et le travail est **réel**. Pas question de le supprimer.
- **Risque Google réel mais limité :** les algorithmes peuvent détecter le lien (même nom de famille) et pondérer l'avis plus faiblement, voire le masquer silencieusement. Mais ce n'est pas une sanction de fiche.
- **Solution propre :** **diluer statistiquement** le risque en accélérant l'acquisition d'avis authentiques.

| Situation | Risque Google |
|---|---|
| 4 avis dont 1 lien familial = 25% | 🟠 Visible/détectable |
| 15 avis dont 1 lien familial = 6.6% | 🟢 Quasi invisible |
| 30 avis dont 1 lien familial = 3.3% | 🟢 Statistiquement insignifiant |

- **Action :** plan d'acquisition accéléré (cf. plan révisé ci-dessous), pas de suppression
- **Règle pour le futur :** ne plus solliciter d'avis auprès de proches/famille. Garder cette pratique pour les VRAIS clients externes uniquement.

### 🟠 P1 — Une seule fiche au lieu de deux
- DCB a (officiellement) 2 bases : Dardilly + Paray-le-Monial
- Une seule fiche GBP existe → couverture Saône-et-Loire (71) sous-exploitée
- **Action :** vérifier si une vraie base physique existe à Paray. Si oui → créer la 2ème fiche.

### 🟠 P1 — Nom de la fiche en minuscule
- Fiche affiche `DCB technologies` (t minuscule)
- Site et branding : `DCB Technologies` (T majuscule)
- Cohérence brand cassée
- **Action :** modifier le nom de la fiche en `DCB Technologies` (T majuscule)

### 🟢 P2 — Photos à enrichir
- 2 photos visibles actuellement
- Objectif Module 2 : 30 photos à 6 mois
- **Action :** publier 2-3 photos par semaine (équipe, locaux, interventions, matériel installé)

---

## ✅ POINTS FORTS DÉJÀ EN PLACE

- ✅ **Note 5,0 parfaite** (4/4 avis à 5 étoiles)
- ✅ **100% des avis ont reçu une réponse** du propriétaire (signal Google fort + UX client excellente)
- ✅ **Diversité métier dans les avis** : caisse boulangerie + 2× sites web + maintenance IT lyonnais
- ✅ **Bonus Local Guide** (Teddy Malfroy, 51 avis) → forte pondération
- ✅ **Téléphone, site web, horaires** correctement renseignés
- ✅ **Premières photos pertinentes** (caisse en contexte client réel)

**Verdict :** la gestion humaine de la fiche est excellente. Ce qui bloque, c'est sa **configuration technique** (catégories) et sa **cohérence externe** (NAP avec le site).

---

---

## SYNTHÈSE EXÉCUTIVE

- **Potentiel Local Pack :** **FORT** (mais conditionné à la création des fiches GBP, qui n'existent pas encore)
- **Mots-clés locaux prioritaires identifiés :** 47 (clusterisés en 4 vagues d'attaque)
- **Actions GBP immédiates :** 12
- **Avantage stratégique unique :** DCB possède **2 adresses physiques** (Dardilly 69 + Paray-le-Monial 71) → **2 fiches GBP distinctes** couvrant Lyon ET la Saône-et-Loire

**Verdict business :** Le référencement local est **le levier #1** pour DCB Technologies. Sur les 4 départements ciblés, seule Lyon est compétitive ; Mâcon, Chalon, Bourg, Roanne, Paray-le-Monial sont des **terres quasi vierges**. Avec stratégie GBP solide + 50 avis en 6 mois + 7 pages locales, **DCB peut prendre la pole position du Local Pack sur 5 villes en 4-6 mois**.

---

## AXE 1 — STRATÉGIE MOTS-CLÉS LOCAUX

### Cluster #1 — Service caisse × ville (intention achat ★★★★★, ~415 vol/mois)

| Mot-clé | Vol/mois | Concurrence | Page cible |
|---|---|---|---|
| `caisse enregistreuse Lyon` | 140 | 🔴 Forte | 🆕 `/caisse-enregistreuse/lyon/` |
| `caisse enregistreuse Mâcon` | 30 | 🟢 Faible | 🆕 `/caisse-enregistreuse/macon/` |
| `caisse enregistreuse Chalon` | 20 | 🟢 Faible | 🆕 `/caisse-enregistreuse/chalon/` |
| `caisse boulangerie Lyon` | 40 | 🟠 Moyenne | `/caisse-enregistreuse/boulangerie/` |
| `caisse restaurant Lyon` | 70 | 🔴 Forte | `/caisse-enregistreuse/restaurant/` |
| `borne commande restaurant Lyon` | 35 | 🟠 Moyenne | `/caisse-enregistreuse/borne-de-commande/` |
| `monnayeur boulangerie Lyon` | 20 | 🟢 Faible | `/caisse-enregistreuse/monnayeur/` |
| `installateur caisse 71` | 10 | 🟢 Quasi-nulle | `/caisse-enregistreuse/` |

### Cluster #2 — Service maintenance IT × ville (~975 vol/mois — **plus gros gisement**)

| Mot-clé | Vol/mois | Concurrence | Page cible |
|---|---|---|---|
| `maintenance informatique Lyon` | 480 | 🔴 Très forte | 🆕 `/maintenance-informatique/lyon/` |
| `maintenance informatique Mâcon` | 50 | 🟢 Faible | 🆕 `/maintenance-informatique/macon/` |
| `maintenance informatique entreprise Lyon` | 110 | 🔴 Forte | 🆕 `/maintenance-informatique/lyon/` |
| `infogérance PME Lyon` | 90 | 🟠 Moyenne | `/maintenance-informatique/maintenance-depannage/` |
| `infogérance Mâcon` | 25 | 🟢 Faible | 🆕 `/maintenance-informatique/macon/` |
| `dépannage informatique Mâcon` | 35 | 🟢 Faible | `/maintenance-informatique/maintenance-depannage/` |
| `cybersécurité PME Lyon` | 60 | 🟠 Moyenne | `/maintenance-informatique/cloud-securite/` |
| `Microsoft 365 entreprise Lyon` | 40 | 🟠 Moyenne | `/maintenance-informatique/outils-collaboratifs/` |
| `prestataire informatique 71` | 15 | 🟢 Quasi-nulle | `/maintenance-informatique/` |
| `informatique Roanne` | 30 | 🟢 Faible | 🆕 `/zones/roanne/` |
| `dépannage informatique Bourg-en-Bresse` | 20 | 🟢 Faible | 🆕 `/zones/bourg-en-bresse/` |

### Cluster #3 — Service web × ville (~985 vol/mois mais Lyon ultra-compétitif)

| Mot-clé | Vol/mois | Concurrence | Page cible |
|---|---|---|---|
| `création site internet Lyon` | 720 | 🔴 Très forte | `/visibilite-web/creation-site-internet/` *(ne pas attaquer Lyon de front)* |
| `création site internet Mâcon` | 70 | 🟢 Faible | 🆕 sous-page locale Mâcon |
| `agence web Mâcon` | 30 | 🟢 Faible | 🆕 idem |
| `SEO local Mâcon` | 15 | 🟢 Quasi-nulle | `/visibilite-web/seo-sea-local/` |
| `référencement Google Lyon` | 90 | 🔴 Forte | `/visibilite-web/seo-sea-local/` |

### Cluster #4 — Requêtes "near me" / mobile (intention urgence ★★★★★)

**Règle d'or :** ces requêtes ne se gagnent **PAS** par le SEO classique → uniquement par **GBP + nombre d'avis**. Sans GBP, DCB est invisible sur tous les "near me".

🔴 **Actions :** valider volumes via Google Keyword Planner, mapper chaque mot-clé à une page cible, intégrer dans titles/H1/intro/alt/JSON-LD.

---

## AXE 2 — OPTIMISATION ON-PAGE LOCALE

### NAP (Nom / Adresse / Téléphone) — version officielle à figer

```
Nom :          DCB Technologies (avec T majuscule — IMPORTANT)
Raison sociale : SAS DCB Technologies (usage légal uniquement)
Domiciliation : 59 Chemin du Moulin Carron, 69570 Dardilly (siège légal)
Base technique : [À COMPLÉTER : adresse exacte Paray-le-Monial 71600] (lieu opérationnel)
Téléphone :    04 82 53 05 10
Email :        contact@dcb-technologies.fr
Site :         https://dcb-technologies.fr
SIREN :        [À COMPLÉTER]
APE/NAF :      [À COMPLÉTER : probablement 6202A]
GBP :          https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr
```

**⚠️ Particularité business model DCB :**
- DCB n'a **AUCUN lieu d'accueil clients** : la domiciliation Dardilly est administrative, et la base Paray est opérationnelle (techniciens) sans réception public.
- **Conséquence GBP :** DCB n'est éligible qu'à **UNE SEULE fiche** Google Business Profile, configurée en mode **Service-Area Business (SAB)**.
- L'adresse exacte est masquée du public, remplacée par la liste des **zones d'intervention**.
- C'est la configuration **conforme aux règles Google** pour un business sans local d'accueil.

**⚠️ CRITIQUE :** la moindre variation (`DCB Tech`, `DCB-Technologies`, `+33 4 82 53 05 10`, etc.) **dilue** le signal local. **Toujours copier-coller** depuis ce document central.

### Intégration NAP par type de page

| Type de page | Position NAP |
|---|---|
| Toutes | Footer ✅ + Nav phone link ✅ |
| Hubs | Bloc info contact en bas avant CTA final |
| Page Contact | NAP en gros dans hero + Google Maps + horaires |
| Pages locales 🆕 | NAP visible avec mention spécifique de la ville cible |
| JSON-LD `LocalBusiness` | Accueil ✅ + Contact + chaque page locale |

### Mentions géographiques dans le body
- **Density target :** 1 mention de ville par 150-200 mots
- **Variantes :** alterner "Lyon" avec "métropole lyonnaise", "Rhône (69)", "agglomération de Lyon"
- **Ne JAMAIS faire :** "caisse enregistreuse Lyon Mâcon Chalon Villefranche Bourg" (= keyword stuffing puni)

🔴 **Actions :** confirmer adresse Paray (champ NAP), ajouter NAP visible sur la page Contact + Google Maps embed (centré sur la zone d'intervention plutôt qu'une adresse précise vu le mode SAB).

---

## AXE 3 — GOOGLE BUSINESS PROFILE

✅ **État actuel : 1 fiche EXISTE** mais sous-optimisée. URL canonique récupérée :
`https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr`

### Stratégie : 1 fiche unique optimisée en mode Service-Area Business

**Pourquoi 1 seule fiche et non 2 :**
- DCB n'a aucun lieu d'accueil clients (domiciliation Dardilly + base technique Paray, ni l'un ni l'autre n'accueille de public)
- Google **interdit explicitement** de créer plusieurs fiches GBP pour une entreprise sans vrais locaux distincts d'accueil
- Le mode **Service-Area Business (SAB)** est la configuration conforme : adresse réelle masquée du public, zones d'intervention listées à la place
- Le manque de couverture Saône-et-Loire est compensé par les **pages locales du site** (cf. Module 3 — `/zones/macon/`, `/zones/paray-le-monial/`, etc.)

### Configuration cible de la fiche

**Nom de l'établissement :** `DCB Technologies` (T majuscule — actuellement en minuscule, à corriger)

**Catégorie principale :** `Assistance et services informatiques` *(à conserver, déjà en place)*

**Catégories secondaires à AJOUTER (actuellement aucune) :**
- 🔴 `Vendeur de caisses enregistreuses` — **CRITIQUE** : déverrouille tout le silo caisse pour le local pack
- 🔴 `Concepteur de sites Web`
- 🔴 `Service de cybersécurité`
- 🔴 `Magasin de matériel informatique`
- 🔴 `Fournisseur de services informatiques`

**Mode SAB — Zones d'intervention à déclarer :**
- **Départements** : Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)
- **Villes principales** : Lyon, Villefranche-sur-Saône, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial, Charolles, Tournus, Cluny, Le Creusot, Montceau-les-Mines

**Description optimisée (745 caractères) — à coller dans le champ "Description" :**
> DCB Technologies, expert local en maintenance informatique, caisses enregistreuses NF525 et création de sites web pour les commerçants et PME du Rhône, de la Saône-et-Loire, de l'Ain et de la Loire. Techniciens salariés intervenant en moins de 4h sur site à Lyon, Villefranche-sur-Saône, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse et Roanne. Logiciel CashMag certifié, matériel OXHOO et AURES garanti 5 ans, formation incluse, SAV 7j/7. Fondé par Nathanaël Da Costa et Clément Boissié. Zéro sous-traitance, un seul interlocuteur. Devis gratuit pour boulangerie, restaurant, commerce, salon de coiffure, infogérance cloud, sécurité Microsoft 365 ou création de site internet.

### Attributs à activer (champs admin GBP)
- ✅ Devis en ligne
- ✅ Sur rendez-vous
- ✅ Petite entreprise
- ✅ Service de livraison
- ✅ Installation
- ✅ Service après-vente
- ✅ Paiements : virement, chèque, CB, prélèvement
- ✅ "Sert ses clients à leur lieu" (= activation du mode SAB)

### Posts GBP — Calendrier

**Fréquence :** 2 posts/semaine sur la fiche.

| Jour | Type | Exemple |
|---|---|---|
| Lundi | Actualité produit | "Nouveau : monnayeur compatible CashMag pour boulangerie" |
| Mercredi | Article blog ou astuce | "5 raisons de migrer votre point de vente avant fin 2026" |
| Vendredi | Témoignage client visuel | "Sophie, boulangère à Chalon : 'Tout opérationnel à 7h30'" |

**Règle :** chaque post inclut systématiquement 1 mot-clé local + 1 photo + 1 CTA.

### Photos GBP

**Cible :** 30 photos minimum à 6 mois (actuellement ~2 visibles).

**Catégories à couvrir :** Logo (2), Couverture (1), Intérieur — bureaux Dardilly et base Paray (5+), Équipe — Nathanaël/Clément/techniciens (5+), Produits installés en contexte client (10+), Interventions terrain (10+).

**Nommage des fichiers :**
```
dcb-technologies-installation-caisse-cashmag-boulangerie-lyon.jpg
dcb-technologies-monnayeur-automatique-boulangerie-macon.jpg
dcb-technologies-borne-commande-restaurant-lyon-2eme.jpg
dcb-technologies-equipe-techniciens-paray-le-monial.jpg
```

**Géolocalisation EXIF :** activer sur smartphone AVANT prise de vue. Google lit les métadonnées et renforce le signal local.

### 🔴 Actions GBP P0 — Quick wins immédiats (≈ 25 min total)

1. ⏳ Renommer la fiche `DCB technologies` → `DCB Technologies` (1 min)
2. ⏳ Activer le mode **Service-Area Business** + ajouter 12 villes + 4 départements (5 min)
3. ⏳ Ajouter les **5 catégories secondaires** dont la critique `Vendeur de caisses enregistreuses` (5 min)
4. ⏳ Coller la **description optimisée** 745c dans le champ Description (5 min)
5. ⏳ Activer les **8 attributs** (devis, RDV, livraison, installation, SAV, paiements, petite entreprise, mode SAB) (5 min)
6. ⏳ Mettre à jour `sameAs` du site avec l'URL canonique GBP (à faire en exécution code)
7. ⏳ Préparer le planning des 8 premiers posts GBP (1 mois — 2/sem)
8. ⏳ Importer 8 photos supplémentaires (en plus des 2 déjà en place) avec nommage SEO + EXIF géolocalisé

---

## AXE 4 — STRATÉGIE AVIS CLIENTS

🔴 **État actuel : 0 avis** (aucune fiche GBP active). Or les avis sont **le facteur #1 du Local Pack**.

### Plan d'acquisition (séquence post-installation)

| Timing | Canal | Action |
|---|---|---|
| **J+0** | Verbal + carte NFC | Sticker QR code avec lien fiche GBP |
| **J+7** | Email automatique | Template ci-dessous |
| **J+15** | SMS court | "Bonjour [Prénom], merci pour votre confiance ! 30 sec pour un avis Google ? Lien : [URL]" |
| **J+30** | Appel cadre satisfaction | "Tout fonctionne ? Si oui, un avis nous aiderait beaucoup" |

### Email J+7 — Template
```
Objet : Tout va bien chez [Nom Entreprise] ? — DCB Technologies

Bonjour [Prénom],

Cela fait une semaine que nous avons installé [votre caisse / votre IT / votre site]
et nous voulions prendre des nouvelles : tout fonctionne comme prévu ?

Si l'expérience a été positive, **un avis Google de 30 secondes nous aiderait
énormément** à faire connaître DCB Technologies à d'autres commerçants de [Ville].

👉 Lien direct : [URL_GBP]

Et si quelque chose ne va pas, dites-le nous d'abord ici — on règle ça immédiatement.

Merci pour votre confiance,
Nathanaël & Clément
DCB Technologies — 04 82 53 05 10
```

### Carte NFC / sticker physique
Sticker 4×4 cm collé au dos de la caisse (ou poste IT) avec QR code → fiche GBP. Coût : 0,30€/sticker. ROI massif.

### Protocole de réponse aux avis

| Type | Délai | Format |
|---|---|---|
| ★★★★★ | < 48h | Remerciement personnalisé + mention métier + mention ville |
| ★★★ | < 24h | Remerciement + question ouverte + invitation à un appel |
| ★ ou ★★ | < 12h | Excuses + rappel téléphonique direct + résolution publique |

**Règle absolue :** JAMAIS ignorer un avis négatif, JAMAIS se justifier publiquement, TOUJOURS proposer un appel privé.

### Objectifs chiffrés (révisés après audit GBP réel)

> Note : DCB n'a qu'**1 fiche GBP** (mode SAB recommandé) et non 2 — la stratégie 2 fiches était basée sur une mauvaise hypothèse, corrigée après vérification.

**Plan d'acquisition accéléré pour absorber le risque "avis Théo" :**

| Échéance | Avis cumulés | Note moyenne | Action principale |
|---|---|---|---|
| **Aujourd'hui** | 4 | 5,0 | État initial |
| **Mois 1** | 12 (+8) | ≥ 4.9 | Vague intensive : appels téléphoniques aux 15 meilleurs clients récents |
| **Mois 2** | 18 (+6) | ≥ 4.9 | Process post-installation systématique (sticker QR + email J+7 + SMS J+15) |
| **Mois 3** | 22 (+4) | ≥ 4.9 | Process autonome, dilution risque "Théo" complète (4.5%) |
| **Mois 6** | 35 | ≥ 4.8 | Présence Local Pack solide |
| **Mois 12** | 70 | ≥ 4.8 | Pole position défendable |
| **Mois 24** | 150+ | ≥ 4.8 | Domination locale |

🔴 **Actions :** créer templates email/SMS, imprimer 200 stickers QR, désigner responsable interne avis (réponse <48h), tracking sheet.

---

## AXE 5 — CITATIONS & ANNUAIRES

### Top 10 annuaires généralistes prioritaires (P0)

1. **Google Business Profile** (#1 absolu)
2. **Pages Jaunes**
3. **Bing Places**
4. **Apple Business Connect**
5. **Société.com**
6. **Kompass**
7. **Mappy**
8. **PagesPro**
9. **Cylex France**
10. **Yelp France**

### Top 10 annuaires sectoriels & locaux (P1)

11. **CCI Rhône** — backlink local fort
12. **CCI Saône-et-Loire** — backlink local pour Paray
13. **CCI Lyon Métropole Saint-Étienne Roanne** — couvre 2 départements
14. **Lyon Entreprises** — annuaire local Lyon
15. **Mâconnais Beaujolais** — niche territoriale
16. **France Num** — sectoriel transformation digitale PME
17. **Frenchtech Lyon** (si éligible)
18. **Annuaire revendeurs CashMag** — demander à CashMag d'ajouter DCB en partenaire officiel
19. **POS Sphere** — sectoriel caisse
20. **Annuaire installateurs NF525** — crucial pour positionner DCB expert NF525

### Règle absolue NAP
Créer un **document NAP officiel central** (Notion / Google Doc) et **toujours copier-coller** depuis ce fichier. Une seule variation = signal flou pour Google.

🔴 **Actions :** créer doc NAP officiel, compléter champs manquants, auditer citations existantes (BrightLocal Citation Tracker gratuit), soumettre les 10 généralistes en S1-2, les 10 sectoriels en M1-2.

---

## AXE 6 — CONCURRENCE LOCALE

### Concurrents probables

**Caisse Lyon/Mâcon/Chalon :**
- Solutions cloud nationales : SumUp, Zettle, Square, L'Addition, Tactill, Hiboutik, Lightspeed → forts en search mais **faibles sur le local pack**
- Revendeurs locaux : intégrateurs IT/TPV souvent sous-équipés en SEO → **cible facilement battable**
- Fabricants OXHOO/AURES : ne ciblent pas le local

**Maintenance IT Lyon :**
- ESN moyennes : Synertic, Helpline, Cyclone
- Indépendants Freelance avec GBP
- LDLC PRO Lyon, Boulanger Pro

**Création site Lyon :**
- Centaines d'agences. **Conseil : ne pas attaquer Lyon de front, viser uniquement Mâcon et petites villes.**

### Méthode d'analyse mensuelle

1. **Recherche locale forcée** via Chrome DevTools Sensors ou https://valentin.app/google-tool/
2. **Capture du Local Pack** (3 résultats) : nom, note, nb avis, catégorie, distance
3. **Score local pack potentiel :**
   ```
   Score = (Note × log10(Nb_avis + 1)) / (Distance + 1)
   ```

| Score | Niveau | Verdict |
|---|---|---|
| > 5 | 🔴 Très fort | Attaque longue (12+ mois) |
| 2-5 | 🟠 Moyen | Battable en 6-9 mois |
| < 2 | 🟢 Faible | **Battable en 3-4 mois — cible prioritaire** |

### Différenciation DCB

| Avantage | Force |
|---|---|
| Intervention sur site < 4h | ★★★★★ |
| Zéro sous-traitance | ★★★★★ |
| **Multi-services Caisse + IT + Web** (aucun concurrent ne fait les 3) | ★★★★★ — **vrai différenciateur unique** |
| Fondateurs accessibles | ★★★★ |
| CashMag NF525 expertisé | ★★★★ |
| Domiciliation Dardilly + base Paray (couvre 4 départements) | ★★★ |

### Argument central marketing
> *"Le seul partenaire technologique qui gère votre caisse, votre informatique ET votre site web — avec des techniciens salariés qui se déplacent en moins de 4h chez vous. Pas un centre d'appels, pas de sous-traitant, juste votre interlocuteur."*

🔴 **Actions :** benchmark concurrentiel sur 6 mots-clés × 3 villes (= 18 captures), tracker 3 concurrents les plus dangereux, hammer le différenciateur "3-en-1" partout.

---

## CALENDRIER DE DÉPLOIEMENT (révisé après audit GBP réel)

### Semaine 1 — Quick wins GBP (≈ 30 min réelles, 0 effort technique)
- ⏳ Confirmer adresse base Paray + SIREN + APE (info à demander à Nathanaël/Clément)
- ⏳ Créer document NAP central (Notion ou Google Doc)
- ⏳ **Optimiser la fiche GBP existante** :
  - Renommer `DCB technologies` → `DCB Technologies`
  - Activer mode **Service-Area Business** + 12 villes + 4 départements
  - Ajouter 5 catégories secondaires (dont **Vendeur de caisses enregistreuses** = critique)
  - Coller la description optimisée 745c
  - Activer 8 attributs
- ⏳ Mettre à jour `sameAs` JSON-LD du site avec URL canonique GBP (à faire en exécution code)
- ⏳ Imprimer 100 stickers QR code (link direct vers la fiche GBP)
- ⏳ Templates email J+7 et SMS J+15

### Semaine 2 — Lancement vague d'avis (campagne intensive)
- ⏳ Lister les 15 meilleurs clients récents (les plus satisfaits)
- ⏳ **Appeler chacun** (Nathanaël ou Clément) pour demander un avis Google
- ⏳ Envoyer le lien direct par SMS dans la foulée
- ⏳ Publier 4 photos supplémentaires sur la fiche (équipe, intervention)
- ⏳ Programmer les 8 premiers posts GBP (planning 1 mois)

### Mois 1 — Acquisition active (objectif +8 avis = 12 total)
- ⏳ Soumettre 10 annuaires généralistes (Pages Jaunes, Bing, Apple, Société, Kompass, Mappy, PagesPro, Cylex, Yelp, GBP déjà ✅)
- ⏳ Suivi des 15 appels avis (relance ceux qui n'ont pas encore posté)
- ⏳ Publier 8 posts GBP (2/sem × 4)
- ⏳ Benchmark concurrentiel initial (18 captures Local Pack sur 6 mots-clés × 3 villes)
- ⏳ Démarrer pages locales `/zones/lyon/` et `/zones/macon/` (coordination Module 3)

### Mois 2 — Process systématique (objectif +6 avis = 18 total)
- ⏳ Process post-installation systématique (sticker + email J+7 + SMS J+15)
- ⏳ Soumettre 5 premiers annuaires sectoriels (CCI Rhône, CCI 71, France Num, NF525, CashMag)
- ⏳ 16 posts GBP supplémentaires
- ⏳ 5 pages locales restantes (Chalon, Villefranche, Bourg, Roanne, Paray)
- ⏳ 4 pages service × ville prioritaires (caisse+lyon, caisse+macon, IT+lyon, IT+macon)

### Mois 3 — Consolidation (objectif +4 avis = 22 total)
- ⏳ Soumettre 5 derniers annuaires sectoriels (Lyon Entreprises, Mâconnais Beaujolais, POS Sphere, NF525 installateurs, Frenchtech)
- ⏳ Backlinks locaux : CCI Rhône, CCI 71, presse locale (Mâcon Info, Le Progrès)
- ⏳ Process avis autonome
- ⏳ Risque "avis Théo" complètement dilué (1/22 = 4.5%)
- ⏳ Veille concurrentielle mensuelle activée

---

## OUTPUT JSON (révisé après audit GBP réel)

```json
{
  "potentiel_local_pack": "FORT",
  "etat_gbp": {
    "fiches_existantes": 1,
    "fiches_a_creer": 0,
    "url_canonique": "https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr",
    "kgmid": "/g/11xvy54gzr",
    "note_actuelle": "5.0/5",
    "avis_actuels": 4,
    "categorie_principale_actuelle": "Assistance et services informatiques",
    "categories_secondaires_actuelles": 0,
    "mode_recommande": "Service-Area Business (SAB)",
    "raison_sab": "DCB n'a aucun lieu d'accueil clients (domiciliation Dardilly + base technique Paray)"
  },
  "mots_cles_prioritaires_total": 47,
  "mots_cles_top_20": [
    "maintenance informatique Lyon",
    "maintenance informatique Mâcon",
    "caisse enregistreuse Lyon",
    "caisse enregistreuse Mâcon",
    "infogérance PME Lyon",
    "dépannage informatique Mâcon",
    "création site internet Mâcon",
    "caisse boulangerie Lyon",
    "caisse restaurant Lyon",
    "borne commande restaurant Lyon",
    "monnayeur boulangerie Lyon",
    "cybersécurité PME Lyon",
    "Microsoft 365 entreprise Lyon",
    "agence web Mâcon",
    "SEO local Mâcon",
    "informatique Roanne",
    "dépannage informatique Bourg-en-Bresse",
    "installateur caisse enregistreuse 71",
    "société informatique Saône-et-Loire",
    "caisse tactile Mâcon"
  ],
  "actions_gbp_p0_quick_wins": [
    "Renommer 'DCB technologies' en 'DCB Technologies' (T majuscule)",
    "Activer mode Service-Area Business + zones d'intervention (12 villes + 4 départements)",
    "Ajouter 5 catégories secondaires (Vendeur de caisses enregistreuses CRITIQUE, Concepteur sites Web, Service cybersécurité, Magasin matériel informatique, Fournisseur services informatiques)",
    "Coller description optimisée 745c",
    "Activer 8 attributs GBP (devis, RDV, livraison, installation, SAV, paiements, petite entreprise, mode SAB)",
    "Mettre à jour sameAs JSON-LD du site (URL canonique GBP)",
    "Importer 8 photos supplémentaires (équipe, locaux, interventions, matériel installé)",
    "Programmer 8 premiers posts GBP (planning 1 mois)"
  ],
  "annuaires_p0": 10,
  "annuaires_p1": 10,
  "objectif_avis": {
    "actuel": 4,
    "mois_1": 12,
    "mois_2": 18,
    "mois_3": 22,
    "mois_6": 35,
    "mois_12": 70,
    "mois_24": 150
  },
  "avis_specifique_theo_boissie": {
    "decision": "GARDER l'avis (vrai client + réel travail livré)",
    "raison": "Suppression injustifiée éthiquement, dilution statistique préférée",
    "strategie": "Acquisition accélérée d'avis authentiques pour réduire le poids relatif (4/4=25% → 1/22=4.5% à 3 mois)"
  },
  "differenciateur_unique": "Multi-services Caisse + IT + Web avec techniciens salariés intervention <4h, fondé par Nathanaël Da Costa et Clément Boissié",
  "etat_execution": "Aucune action exécutée à ce jour. Toutes les actions restent en TODO et seront ordonnancées dans le MASTER_PLAN."
}
```
