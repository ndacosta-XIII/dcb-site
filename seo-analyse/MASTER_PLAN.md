# MASTER PLAN SEO + GEO — DCB Technologies

> **Synthèse exécutable des 4 modules d'analyse SEO + stratégie GEO**
> Modules sources : `MODULE_1_audit-technique.md` · `MODULE_2_referencement-local.md` · `MODULE_3_architecture.md` · `MODULE_4_donnees-structurees.md`
> Ce plan est la **seule source de vérité** pour l'exécution. Les modules restent en référence pour le détail.
> **Date de création :** 2026-04-06
> **Dernière mise à jour :** 2026-04-21 (silo caisse complet + footer + NF525)

---

## 🤖 STRATÉGIE GEO (Generative Engine Optimization)

### Objectif
Faire citer DCB Technologies dans les réponses générées par ChatGPT, Perplexity, Google AI Overviews, Bing Copilot quand un utilisateur demande "meilleure caisse enregistreuse boulangerie Mâcon" ou "maintenance informatique PME Lyon".

### Fichiers GEO créés
- ✅ `/llms.txt` — Index structuré du site pour les LLMs (format Markdown, spec llmstxt.org)
- ✅ `/robots.txt` — Bots IA autorisés explicitement (GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, Google-Extended, Applebot-Extended)

### 7 piliers GEO appliqués à chaque page

| # | Pilier | Application |
|---|---|---|
| 1 | `llms.txt` | ✅ Créé, à maintenir à chaque nouvelle page |
| 2 | Contenu AI-citable | Réponses directes à des questions conversationnelles dans le body |
| 3 | Stats et citations sourcées | Min 3 données factuelles vérifiables par page (prix, délais, certifications) |
| 4 | JSON-LD renforcé | `knowsAbout`, `hasOfferCatalog`, `aggregateRating` (quand 10+ avis) |
| 5 | Fraîcheur contenu | Mise à jour trimestrielle obligatoire, `lastmod` sitemap |
| 6 | Accès AI crawlers | ✅ robots.txt OK, HTML statique server-side ✅ |
| 7 | Comparatifs nommés | Chaque hub a un comparatif visible (DCB vs SumUp, CashMag vs Lightspeed) |

### Mesure GEO (post-lancement)
- Tester mensuellement sur ChatGPT, Perplexity, Google AI Overviews : 10 requêtes cibles
- Tracker si DCB est cité, avec quelles infos, vs quels concurrents
- Ajuster le contenu en fonction des résultats

---

## 🎯 OBJECTIF GLOBAL

> **Rendre DCB Technologies #1 du Local Pack Google sur 5 villes (Mâcon, Chalon, Bourg-en-Bresse, Roanne, Paray-le-Monial) en 6 mois, et top 5 sur Lyon en 12 mois — sans perdre l'expérience utilisateur.**

**Cible chiffrée à 6 mois :**
- 35 avis Google (vs 4 actuellement)
- Top 3 Local Pack sur 5 villes faiblement concurrentielles
- 26 → 33 pages indexées (avec 7 hubs locaux + pages service×ville)
- Score SEO technique : 75 → 90/100
- CTR moyen sur requêtes brandées : +20 % minimum

---

## 🧭 DÉCISIONS STRUCTURANTES (rappel — déjà validées)

| # | Décision | Source | Impact |
|---|---|---|---|
| 1 | Tailwind compilé en statique (pas de CDN runtime) | M1 | LCP −2 à −3s |
| 2 | Migration slug `/service-it-360/` → `/maintenance-informatique/` | M1 | Volume SEO +14k recherches/mois potentielles |
| 3 | Une **seule** fiche GBP en mode **Service-Area Business** (pas 2) | M2 | Conforme business model DCB sans local d'accueil |
| 4 | Garder l'avis "Théo Boissié" et **diluer par volume** (campagne avis) | M2 | Éthique + statistiquement neutralisé à 22 avis |
| 5 | Pages locales en **2 vagues** : 7 hubs `/zones/` puis 4 combos service+ville | M2+M3 | SEO local progressif |
| 6 | Refactoring JSON-LD Accueil en `@graph` unifié avec `@id` linkés | M4 | Knowledge graph Google fort |
| 7 | `aggregateRating` JSON-LD **interdit jusqu'à 10+ avis Google** | M4 | Évite sanction CNIL/Google |
| 8 | NAP référence : `DCB Technologies` (T majuscule) — copier-coller depuis fichier central | M2 | Cohérence locale |

---

## ✅ DÉJÀ FAIT (ne pas refaire — acquis Phase 0 + Phase 1 contenu)

### Phase 0 — Bloquants techniques (Module 1)
- ✅ Build Tailwind statique (`css/tailwind.min.css` 53 KB)
- ✅ `robots.txt` + `sitemap.xml` (26 URLs)
- ✅ `.htaccess` (HTTPS forcé, www→apex, 5 redirects 301 migration slug, cache, sécurité)
- ✅ Suppression `index.backup.html`
- ✅ Migration complète `/service-it-360/` → `/maintenance-informatique/` (17 fichiers)
- ✅ Réécriture 6 titles génériques + meta description Accueil
- ✅ `sameAs` LocalBusiness avec Facebook + Instagram
- ✅ `.gitignore` créé
- ✅ `CLAUDE.md` mis à jour

### Phase 1 contenu — Accueil + Caisse Hub
- ✅ Footer enrichi 12 villes (présent sur 26 pages)
- ✅ Section "Proximité locale" Accueil enrichie avec mention 6 villes naturelles
- ✅ Témoignages × 4 en carrousel sur Accueil (couvrant 4 métiers + 4 villes)
- ✅ Témoignages × 4 en carrousel sur Caisse Hub (idem)
- ✅ Carrousel JS réutilisable dans `scripts.js` (data-dcb-carousel, scroll-snap, dots, prev/next)
- ✅ JSON-LD `Service` × 3 sur Accueil (Caisse / IT / Web avec areaServed)
- ✅ JSON-LD `Service` détaillé sur Caisse Hub (12 villes, 4 offers tarifées, brand CashMag)
- ✅ BreadcrumbList JSON-LD enrichi sur Caisse Hub

### Phase 1 contenu — Silo Caisse complet (sessions 15–21 avril 2026)
- ✅ HowTo JSON-LD (3 étapes : installation/configuration/formation) sur borne-de-commande + monnayeur
- ✅ Product JSON-LD sur borne-de-commande (brands : iMin, CashMag, Pedro Porto, OXHOO — 2 offres tarifées) + monnayeur (brand : CashMag — F26 Metal 258€/mois, DESKTOP Metal 339€/mois)
- ✅ Signal E-E-A-T : date "Mis à jour le 21 avril 2026" sur les 9 pages du silo caisse (inside section container, text-center)
- ✅ Footer : zones d'intervention en 3 lignes horizontales (grandes villes bold / petites villes / départements)
- ✅ Footer : ajout liens "Logiciel CashMag" + "Logiciel Hairnet" dans la colonne Solutions Caisse
- ✅ NF525/7 500 € reformulé "par système de caisse non conforme" sur tout le silo caisse (7 pages)
  - Formulations uniques par page métier (boulangerie/restaurant/commerce/coiffure) pour éviter le duplicate content
  - cashmag, hairnet, hub caisse : corrections "par poste" / "par logiciel" → "par système de caisse non conforme"
  - JSON-LD et HTML visible FAQ mis à jour partout, liens AFNOR préservés
- ✅ `scripts.js` passé en version `?v=6` sur les 25 pages HTML
- ✅ JSON-LD `Service` avec `areaServed` (12 villes) confirmé présent sur les 8 sous-pages caisse
- **Silo caisse 100% complet côté contenu + schemas**

---

## 🔒 BLOQUEURS IDENTIFIÉS (à débloquer par le client)

### Bloqueur 1 — Images réelles (impact P0)
**Concerné :** logos partenaires (NF525, CashMag, OXHOO, AURES, Lenovo, Pedroporto), photos produits, photos équipe, OG images (1200×630), photos GBP supplémentaires.
**Impact :** bloque 100% de la finalisation Phase 0 + 50% des photos GBP.
**Action client :** récupérer/produire 30+ visuels.
**Quand :** dès que possible.

### Bloqueur 2 — Données NAP manquantes (impact P0)
**Concerné :** adresse exacte de la base technique Paray-le-Monial (rue + numéro), SIREN, code APE/NAF.
**Impact :** bloque la création du document NAP central et donc la cohérence des annuaires + GBP.
**Action client :** retrouver ces 3 infos auprès de Nathanaël/Clément (15 minutes).
**Quand :** **avant Sprint 2** au plus tard.

### Bloqueur 3 — Témoignages clients réels (impact P1)
**Concerné :** 4-8 vrais témoignages clients DCB avec noms, entreprises, villes, photos.
**Impact :** les placeholders actuels (Sophie Moreau, David K., etc.) sont crédibles mais fictifs.
**Action client :** demander aux clients existants un témoignage écrit court + photo.
**Quand :** sous 1 mois (en parallèle de la campagne d'avis Google).

### Bloqueur 4 — Volumes mots-clés à valider (impact P2)
**Concerné :** les estimations de volume Module 2 (480/mois pour "maintenance informatique Lyon", etc.) sont basées sur Google Keyword Planner public sans données précises.
**Impact :** affine la priorisation, pas bloquant pour l'exécution.
**Action client :** créer un compte Google Ads gratuit pour accéder au Keyword Planner.
**Quand :** Sprint 5 ou plus tard.

---

## 🚀 SPRINTS D'EXÉCUTION (10 sprints chronologiques)

### Légende
- 🔴 **P0 BLOQUANT** : à faire en priorité absolue, bloque les sprints suivants
- 🟠 **P1 CRITIQUE** : forte valeur, à enchaîner après P0
- 🟢 **P2 IMPORTANT** : valeur réelle, à faire dans le mois
- 🔵 **CONTINU** : à exécuter en parallèle, sans interruption

---

### 🟢 SPRINT 1 — QUICK WINS GBP (action externe, 30 min, P0)

**Objectif :** débloquer 60 % du potentiel local en optimisant la fiche GBP existante.
**Effort :** 30 minutes (admin GBP, aucun code)
**Bloqueurs :** aucun (admin GBP disponible côté Nathanaël)

| Action | Durée | Validation |
|---|---|---|
| Renommer `DCB technologies` → `DCB Technologies` | 1 min | Voir le nom corrigé sur la fiche publique |
| Activer mode **Service-Area Business** + ajouter 12 villes + 4 départements | 5 min | Fiche affiche les zones d'intervention au lieu de l'adresse |
| Ajouter **5 catégories secondaires** (Vendeur de caisses enregistreuses CRITIQUE + 4 autres) | 5 min | Catégories visibles dans admin |
| Coller la description optimisée 745c (cf. M2) | 5 min | Description visible sur la fiche publique |
| Activer **8 attributs** (devis, RDV, livraison, install, SAV, paiements, petite entreprise, mode SAB) | 5 min | Attributs visibles |
| Importer **8 photos** supplémentaires (équipe, locaux, intervention, matériel) avec nommage SEO + EXIF | 10 min | 10 photos minimum sur la fiche |

**Critère de succès Sprint 1 :** la fiche GBP affiche 5 catégories, 12 zones d'intervention, description longue, et 10+ photos.

---

### 🔴 SPRINT 2 — REFACTORING JSON-LD ACCUEIL (modifications site, 1h, P0)

**Objectif :** unifier le JSON-LD de l'Accueil en `@graph` linké pour booster le knowledge graph DCB côté Google.
**Effort :** 1 heure (1 fichier modifié : `index.html`)
**Dépendance :** aucune (les coordonnées GBP sont déjà connues)

| Action | Détail |
|---|---|
| Remplacer les blocs JSON-LD séparés (LocalBusiness + FAQPage + BreadcrumbList + Service ×3) par UN seul `@graph` | cf. Schema 1 du Module 4 |
| Ajouter dans `sameAs` la 3ème URL : URL canonique GBP (déjà récupérée) | URL longue Maps avec data=... |
| Ajouter `Person` schemas pour Nathanaël et Clément (sans photos pour l'instant) | cf. Schema 1 du Module 4 |
| Ajouter `WebSite + SearchAction` (sitelinks searchbox) | cf. Schema 1 |
| Ajouter `Organization` séparé linké à `LocalBusiness` via `parentOrganization` | idem |
| **NE PAS** ajouter `aggregateRating` (4 avis insuffisants) | Bloc commenté dans le code |

**Critère de succès Sprint 2 :** le test Google Rich Results sur `index.html` retourne 6 entités détectées sans erreur (Organization, LocalBusiness, WebSite, Person ×2, FAQPage).

**Fichiers modifiés :** `index.html` uniquement.

---

### 🔴 SPRINT 3 — JSON-LD SERVICE SUR HUBS IT ET WEB (45 min, P0)

**Objectif :** rendre les hubs IT et Web visibles par Google comme entités Service avec areaServed.
**Effort :** 45 minutes (2 fichiers modifiés)
**Dépendance :** Sprint 2 terminé (cohérence `@id` linkés)

| Action | Fichier |
|---|---|
| Coller `Service` JSON-LD complet (cf. Schema 3b Module 4) | `maintenance-informatique/index.html` |
| Coller `Service` JSON-LD complet (cf. Schema 3c Module 4) | `visibilite-web/index.html` |
| Vérifier que les `@id` provider pointent vers le LocalBusiness Accueil | Test cohérence |
| Tester les 2 pages avec Google Rich Results Test | https://search.google.com/test/rich-results |

**Critère de succès Sprint 3 :** les 3 hubs business ont chacun un Service JSON-LD avec areaServed (12 villes + 4 départements) et un OfferCatalog des sous-services.

---

### 🟠 SPRINT 4 — QUICK WINS MAILLAGE (1h30, P1)

**Objectif :** corriger les ancres faibles, ajouter Blog/Notre ADN dans la nav, dupliquer LocalBusiness sur Contact.
**Effort :** 1h30 (3-4 fichiers modifiés)
**Dépendance :** aucune

| Action | Fichier | Détail |
|---|---|---|
| Réviser les **3 ancres "Découvrir"** des cards piliers Accueil | `index.html` | "Découvrir nos caisses NF525", "Découvrir notre maintenance informatique", "Découvrir nos services web" |
| Ajouter **Blog** + **Notre ADN** dans la nav principale (dropdown ou directement) | `js/scripts.js` | Au moins en dropdown "Entreprise" avec accès au blog |
| Dupliquer le bloc `LocalBusiness` JSON-LD sur la page Contact | `contact/index.html` | + ajouter schema `ContactPage` |
| Vérifier que l'embed Google Maps existe sur la page Contact | `contact/index.html` | Sinon ajouter (centré sur Dardilly ou Lyon métropole) |

**Critère de succès Sprint 4 :** Blog et Notre ADN accessibles depuis la nav, ancres "Découvrir" enrichies, Contact a son propre LocalBusiness JSON-LD.

---

### 🟠 SPRINT 5 — CROSS-LINKS INTER-SILOS BODY (3h, P1)

**Objectif :** implémenter les 25 liens prioritaires de la matrice de maillage Module 3 dans le body des pages.
**Effort :** 3 heures (12-15 fichiers modifiés)
**Dépendance :** Sprint 4 terminé (cohérence ancres)

**Implémentation :**
- Sur chaque sous-page caisse (boulangerie, restaurant, commerce, coiffure) : ajouter en bas de page une **section "Vous pourriez aussi avoir besoin de"** avec 3 cards (2 même silo + 1 cross-silo)
- Sur chaque sous-page IT : idem (cross-link vers Caisse pertinent + Web pertinent)
- Sur chaque sous-page Web : idem (cross-link vers Caisse pertinent + IT pertinent)

**Composant réutilisable :** créer dans `js/scripts.js` une fonction `dcbRelatedSection(items)` qui prend un array de 3 cards et les injecte. Évite la duplication HTML.

**Liens prioritaires (cf. matrice Module 3, top 25) :**
1. boulangerie → monnayeur ("monnayeur automatique pour boulangerie")
2. boulangerie → maintenance-depannage ("maintenance informatique pour commerçants")
3. restaurant → borne-de-commande ("borne de commande pour restaurant")
4. restaurant → cloud-securite ("sauvegarde cloud pour restaurateurs")
5. commerce → creation-site-internet ("site e-commerce pour boutique")
6. coiffure → seo-sea-local ("référencement local pour salon de coiffure")
7-25. cf. Module 3 matrice complète

**Critère de succès Sprint 5 :** chaque sous-page métier/service contient au moins 3 liens contextuels en body vers d'autres pages du site, avec ancres optimisées.

---

### 🟠 SPRINT 6 — FIL D'ARIANE VISUEL + BREADCRUMB JSON-LD (2h, P1)

**Objectif :** implémenter le fil d'Ariane visuel sur les 26 pages + dupliquer le BreadcrumbList JSON-LD propre par page.
**Effort :** 2 heures (1 composant scripts.js + 14 ajouts JSON-LD)
**Dépendance :** Sprints 2-3 terminés

| Action | Détail |
|---|---|
| Créer composant `dcbBreadcrumb()` dans `js/scripts.js` | Lit `data-breadcrumb` sur `<main>`, génère le HTML |
| Ajouter `<div id="dcb-breadcrumb">` après la nav sur chaque sous-page | Position : sous nav, au-dessus du H1 |
| Style : `text-sm text-slate-500` avec séparateurs `›` | Discret, alan.com-style |
| Ajouter `BreadcrumbList` JSON-LD sur les 14 sous-pages restantes | (les hubs ont déjà) |

**Format breadcrumb visuel :**
```
Accueil › Caisse Enregistreuse › Boulangerie & Pâtisserie
```

**Critère de succès Sprint 6 :** fil d'Ariane visuel présent sur les 26 pages, BreadcrumbList JSON-LD validé sur toutes les sous-pages.

---

### 🟢 SPRINT 7 — CRÉATION DU PILIER `/zones/` ET 7 HUBS LOCAUX (2 jours, P2)

**Objectif :** créer le 4ème pilier business — Zones d'intervention — avec 7 hubs locaux.
**Effort :** 2 jours (1 jour template + 1 jour rédaction des 7 pages)
**Dépendance :** Sprints 2-6 terminés (architecture stable)

**Structure :**
```
/zones/
├── index.html                  ← hub global (présentation des zones)
├── lyon/index.html             ← hub local Lyon (69)
├── macon/index.html            ← hub local Mâcon (71)
├── chalon-sur-saone/           ← hub local Chalon (71)
├── villefranche-sur-saone/     ← hub local Villefranche (69)
├── bourg-en-bresse/            ← hub local Bourg (01)
├── roanne/                     ← hub local Roanne (42)
└── paray-le-monial/            ← hub local Paray (71)
```

**Template type d'une page locale (cf. Module 3 axe 4) :**
1. HERO avec H1 incluant la ville
2. Trust bar locale ("X clients à Lyon", "Y interventions/mois sur le Rhône")
3. Intro 150 mots 100% rédigée pour la ville
4. Services DCB disponibles (3 cards Caisse / IT / Web)
5. Zones couvertes dans la ville (arrondissements, quartiers, communes voisines)
6. Témoignage client localisé
7. Carte Google Maps embed (centrée sur la ville)
8. Processus d'intervention DCB
9. FAQ locale (3-5 questions spécifiques)
10. CTA final
11. JSON-LD `LocalBusiness` (areaServed = ville spécifique)
12. JSON-LD `BreadcrumbList`

**Contenu minimum unique par page locale :** **400 mots uniques** + 1 témoignage + 1 carte + 5 FAQ.

**Critère de succès Sprint 7 :** 8 nouvelles pages indexables, chacune avec contenu unique et JSON-LD propre.

---

### 🟢 SPRINT 8 — 4 PAGES SERVICE × VILLE PRIORITAIRES (1 jour, P2)

**Objectif :** créer les 4 pages combo qui rankent sur les requêtes les plus juteuses.
**Effort :** 1 jour (4 pages × 2h chacune)
**Dépendance :** Sprint 7 terminé (les hubs `/zones/` linkent vers ces pages)

**Pages à créer :**
1. `/caisse-enregistreuse/lyon/` — cible "caisse enregistreuse Lyon" (140/mois)
2. `/caisse-enregistreuse/macon/` — cible "caisse enregistreuse Mâcon" (30/mois faible concurrence)
3. `/maintenance-informatique/lyon/` — cible "maintenance informatique Lyon" (480/mois — gros)
4. `/maintenance-informatique/macon/` — cible "maintenance informatique Mâcon" (50/mois faible concurrence)

**Template :** dérivé du Sprint 7 mais focalisé sur UN service spécifique dans UNE ville (pas tous les services).

**Critère de succès Sprint 8 :** 4 nouvelles pages, chacune ciblée sur 1 mot-clé "service+ville" précis avec H1, title, JSON-LD Service spécifique.

---

### 🟢 SPRINT 9 — PHASE 1 CONTENU SUR HUBS IT ET WEB (1 jour, P2)

**Objectif :** appliquer aux hubs Maintenance Informatique et Visibilité Web le même traitement Phase 1 que Caisse Hub.
**Effort :** 1 jour (2 fichiers modifiés)
**Dépendance :** Sprint 3 terminé (Service JSON-LD déjà fait)

| Action | Hub IT | Hub Web |
|---|---|---|
| Témoignages × 4 en carrousel | ✅ ajouter | ✅ ajouter |
| FAQ visible (3-5 questions) + JSON-LD FAQPage | ✅ ajouter | ✅ ajouter |
| Section "Pourquoi DCB" différenciante | ✅ vérifier | ✅ vérifier |
| Cross-sell vers Caisse + Web | ✅ ajouter | ✅ ajouter vers Caisse + IT |
| Vérifier title et meta description SEO | ✅ déjà fait Sprint 7 M1 | ✅ déjà fait |

**Critère de succès Sprint 9 :** les 3 hubs ont la même qualité de contenu et de signaux SEO.

---

### 🟢 SPRINT 10 — PHASE 1 CONTENU SOUS-PAGES MÉTIERS / SERVICES (3 jours, P2)

**Objectif :** étendre le travail Phase 1 à toutes les sous-pages restantes.
**Effort :** 3 jours (12 fichiers : 6 sous-pages caisse + 4 IT + 3 Web — sans cashmag, déjà à part)
**Dépendance :** Sprints 5-6 terminés (cross-links + breadcrumbs en place)

**Pour chaque sous-page :**
- Vérifier title + meta description SEO local
- Ajouter `Service` JSON-LD spécifique au métier/service avec areaServed
- Ajouter 3-5 questions FAQ + FAQPage JSON-LD ciblées sur les requêtes du métier
- Ajouter section témoignages métier (au moins 2 cards si pertinentes)
- Ajouter cross-links body (déjà fait Sprint 5)

**Critère de succès Sprint 10 :** les 14 sous-pages business ont chacune un titlSEO local + Service JSON-LD + FAQPage + cross-links.

---

## 🔵 ACTIONS PARALLÈLES CONTINUES (à exécuter dès Sprint 1, en arrière-plan)

### Action parallèle 1 — Campagne d'acquisition d'avis Google
**Démarrage :** Sprint 1 (J+0)
**Effort :** ~30 min/jour pendant 2-3 semaines, puis process automatique
**Objectif :** passer de 4 → 22 avis en 3 mois

**Vague 1 (semaine 1-2) — Appels personnalisés :**
- Lister les 15 meilleurs clients récents
- Appel téléphonique (Nathanaël ou Clément) → demande directe
- SMS de relance avec lien dans la foulée
- Cible : 8 nouveaux avis = 12 total

**Vague 2 (mois 1-2) — Process systématique :**
- Sticker QR code (100 imprimés) collé sur chaque livraison
- Email J+7 + SMS J+15 automatisés
- Cible : +6 avis = 18 total

**Vague 3 (mois 3) — Consolidation :**
- Process autonome
- Cible : +4 avis = 22 total

### Action parallèle 2 — Soumission annuaires
**Démarrage :** Sprint 1
**Effort :** ~3-4h sur 2 semaines

**P0 (semaine 1-2) — 10 annuaires généralistes :** Pages Jaunes, Bing Places, Apple Business Connect, Société.com, Kompass, Mappy, PagesPro, Cylex, Yelp France, Google Business Profile (déjà existant).

**P1 (semaine 3-4) — 10 annuaires sectoriels :** CCI Rhône, CCI Saône-et-Loire, CCI Lyon, Lyon Entreprises, Mâconnais Beaujolais, France Num, Frenchtech Lyon, annuaire revendeurs CashMag, POS Sphere, annuaire installateurs NF525.

**Règle absolue :** copier-coller le NAP officiel central. Aucune variation.

### Action parallèle 3 — Posts Google Business Profile
**Démarrage :** Sprint 1 (semaine 1)
**Effort :** ~30 min/post × 2 posts/semaine = 1h/semaine

**Format de rotation hebdomadaire :**
- Lundi : actualité produit / nouveau client
- Vendredi : témoignage client visuel + photo

**Cible :** 8 posts à 1 mois, 24 à 3 mois, 48 à 6 mois.

### Action parallèle 4 — Photos GBP
**Démarrage :** Sprint 1 (en même temps que les posts)
**Effort :** 2-3 photos/semaine

**Catégories à couvrir :** logo (déjà), couverture, intérieur (Dardilly + Paray), équipe (Nathanaël/Clément/techniciens), produits installés (caisse en boulangerie, borne dans resto), interventions terrain.

**Nommage SEO + géolocalisation EXIF activée.**

**Cible :** 30 photos à 6 mois.

### Action parallèle 5 — Préparation contenus blog (cluster topical)
**Démarrage :** mois 2 (après stabilisation Phase 1)
**Effort :** 1 article/mois minimum, idéalement 2/mois

**Cluster topical autour des 3 piliers :**
- Caisse : "Comment choisir sa caisse NF525 en 2026", "5 erreurs des commerçants avec leur caisse", "Boulangerie : optimiser sa caisse pour le rush du matin"...
- IT : "Cybersécurité PME : 7 réflexes essentiels", "Migrer vers le cloud sans se planter", "Microsoft 365 vs Google Workspace pour les petites équipes"...
- Web : "SEO local 2026 : ce qui marche encore", "Combien coûte vraiment un site internet ?", "5 signes que votre site doit être refait"...

**Cible :** 11 nouveaux articles à 6 mois (1 actuel + 11 = 12 total).

---

## 📊 PLANNING GLOBAL — VUE TIMELINE

```
SEMAINE 1
├─ Sprint 1 (GBP optimization, 30 min)              ← P0 EXTERNE
├─ Sprint 2 (Refactoring JSON-LD Accueil, 1h)       ← P0 SITE
├─ Sprint 3 (Service JSON-LD hubs IT/Web, 45 min)   ← P0 SITE
├─ Action parallèle 1 (campagne avis vague 1)
├─ Action parallèle 2 (10 annuaires généralistes)
├─ Action parallèle 3 (premiers posts GBP)
└─ Action parallèle 4 (premières photos GBP)

SEMAINE 2
├─ Sprint 4 (Quick wins maillage, 1h30)             ← P1
├─ Sprint 5 (Cross-links inter-silos body, 3h)      ← P1
├─ Action parallèle 1 (suite campagne avis)
└─ Action parallèle 2 (annuaires généralistes finis)

SEMAINE 3
├─ Sprint 6 (Fil d'Ariane visuel + JSON-LD, 2h)     ← P1
├─ Action parallèle 2 (10 annuaires sectoriels)
├─ Action parallèle 3 (8 posts GBP)
└─ Continue acquisition avis (objectif +5 = 9 avis)

SEMAINE 4 - MOIS 2
├─ Sprint 7 (Pilier /zones/ + 7 hubs locaux, 2j)    ← P2
├─ Sprint 8 (4 pages service×ville, 1j)             ← P2
├─ Action parallèle 1 (avis = 12 total)
└─ Action parallèle 5 (1er nouvel article blog)

MOIS 2-3
├─ Sprint 9 (Phase 1 contenu hubs IT/Web, 1j)       ← P2
├─ Sprint 10 (Phase 1 sous-pages métiers, 3j)       ← P2
├─ Action parallèle 1 (avis = 18 total)
├─ Action parallèle 5 (3 articles blog cumulés)
└─ Backlinks locaux (CCI, presse locale)

MOIS 3-6
├─ Process avis autonome (objectif 35 avis)
├─ 1-2 articles blog/mois (cluster topical)
├─ Posts GBP 2/sem
├─ Veille concurrentielle mensuelle
├─ Audit Search Console mensuel
└─ Photos GBP (+30 cumulées)

MOIS 6+
├─ Top 3 Local Pack sur 5 villes faibles
├─ Top 5 Local Pack Lyon
└─ Décision : créer pages locales supplémentaires ?
```

---

## 📈 KPIs DE SUIVI

| Indicateur | Aujourd'hui | M+1 | M+3 | M+6 | M+12 |
|---|---|---|---|---|---|
| **Score SEO technique** | 75/100 | 82 | 88 | 90 | 95 |
| **Pages indexées Google** | 26 | 26 | 33 | 35 | 45+ |
| **Avis Google Business** | 4 | 12 | 22 | 35 | 70 |
| **Note moyenne GBP** | 5,0 | ≥4.9 | ≥4.9 | ≥4.8 | ≥4.8 |
| **Posts GBP cumulés** | 0 | 8 | 24 | 48 | 96 |
| **Photos GBP** | 2 | 12 | 24 | 30 | 50+ |
| **Annuaires soumis** | 0 | 10 | 20 | 25 | 30+ |
| **Pages dans Top 3 local pack (villes faibles)** | 0 | 0 | 1-2 | 3-5 | 5 |
| **Position moyenne sur Lyon** | — | >50 | 25 | 15 | <10 |
| **Articles blog publiés** | 1 | 1 | 4 | 8 | 12+ |
| **Cross-links inter-silos body** | 0 | 25 | 25 | 35 | 50+ |
| **CTR organique moyen** | baseline | +5% | +12% | +20% | +30% |

---

## 🔧 OUTILS RECOMMANDÉS (gratuits sauf mention)

| Outil | Usage | Coût |
|---|---|---|
| **Google Search Console** | Monitoring indexation, requêtes, erreurs | Gratuit |
| **Google Business Profile** | Gestion fiche GBP | Gratuit |
| **Google Keyword Planner** | Validation volumes mots-clés | Gratuit (compte Ads requis) |
| **Google Rich Results Test** | Validation JSON-LD | Gratuit |
| **Schema.org Validator** | Validation stricte schemas | Gratuit |
| **PageSpeed Insights** | Mesure Core Web Vitals | Gratuit |
| **BrightLocal Citation Tracker** | Audit cohérence NAP annuaires | Gratuit (limité) |
| **Ubersuggest** | Tracking positions, idées de contenu | Gratuit (limité) |
| **Notion / Google Docs** | Document NAP central | Gratuit |
| **valentin.app/google-tool** | Recherche locale forcée (test concurrents) | Gratuit |

---

## 🎯 RÈGLES D'EXÉCUTION (à respecter strictement)

1. **Toujours faire les sprints dans l'ordre.** Les dépendances entre sprints sont conçues pour éviter les retouches.
2. **Valider visuellement après chaque sprint** avant de passer au suivant (Hard refresh `Ctrl+Shift+R`).
3. **Recompiler Tailwind** (`./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify`) après toute modification HTML qui ajoute de nouvelles classes Tailwind.
4. **Tester chaque schema JSON-LD** avec Google Rich Results Test après modification.
5. **Ne jamais committer le binaire Tailwind** (déjà gitignoré).
6. **Document NAP central** : copier-coller pour TOUTE saisie d'adresse/téléphone/nom DCB.
7. **Pause après chaque sprint si tu sens que ça part en vrille** : mieux vaut interroger qu'exécuter à l'aveugle.
8. **Quick win prioritaire absolu :** SPRINT 1 (GBP) — c'est 30 minutes de travail externe qui débloquent 60 % du potentiel local. À faire MÊME si tu ne fais rien d'autre cette semaine.

---

## 📋 RÉCAP EFFORT TOTAL

| Phase | Effort | Durée calendrier |
|---|---|---|
| Sprints 1-3 (Quick wins SEO) | ~2h30 | Semaine 1 |
| Sprints 4-6 (Maillage + breadcrumbs) | ~6h30 | Semaine 2-3 |
| Sprints 7-8 (Pages locales) | ~3 jours | Semaine 4-5 |
| Sprints 9-10 (Hubs IT/Web + sous-pages) | ~4 jours | Semaine 6-9 |
| Actions parallèles GBP/avis/annuaires | ~10h cumulées | Semaines 1-12 |
| Plan éditorial blog | 1-2 articles/mois | Mois 2-12 |

**Total agent (modifications site) : ~9-10 jours de travail répartis sur 2 mois**
**Total client (actions externes) : ~15-20h cumulées sur 3 mois**

---

## 🚦 ÉTAT D'AVANCEMENT MASTER PLAN

| Sprint | Statut | Date début | Date fin | Notes |
|---|---|---|---|---|
| Sprint 1 — Quick wins GBP | ⏳ Non démarré | — | — | Bloqueur : aucun |
| Sprint 2 — Refactoring JSON-LD Accueil | ⏳ Non démarré | — | — | Bloqueur : aucun |
| Sprint 3 — Service JSON-LD hubs IT/Web | ⏳ Non démarré | — | — | Dépend Sprint 2 |
| Sprint 4 — Quick wins maillage | ⏳ Non démarré | — | — | Bloqueur : aucun |
| Sprint 5 — Cross-links inter-silos | ⏳ Non démarré | — | — | Dépend Sprint 4 |
| Sprint 6 — Fil d'Ariane visuel | ⏳ Non démarré | — | — | Dépend Sprints 2-3 |
| Sprint 7 — Pilier /zones/ + 7 hubs | ⏳ Non démarré | — | — | Dépend Sprints 4-6 |
| Sprint 8 — 4 pages service×ville | ⏳ Non démarré | — | — | Dépend Sprint 7 |
| Sprint 9 — Phase 1 hubs IT/Web | ⏳ Non démarré | — | — | Dépend Sprint 3 |
| Sprint 10 — Sous-pages métiers | ⏳ Non démarré | — | — | Dépend Sprints 5-6 |

---

## 🆘 EN CAS DE BLOCAGE

**Si tu ne sais pas par où reprendre après une pause :** ouvre ce document, regarde la dernière ligne du tableau "État d'avancement" qui n'est pas ✅, et c'est le prochain sprint à exécuter.

**Si un sprint te paraît trop gros :** découpe-le en mini-sprints de 30-45 min max, et fais des commits Git intermédiaires si possible.

**Si tu hésites sur une décision :** relis les "Décisions structurantes" en haut de ce document. Si la décision n'y est pas, demande-moi avant d'exécuter.

**Si quelque chose casse :** le fait d'avoir Tailwind compilé en statique + un .htaccess bien configuré + le carrousel JS isolé dans scripts.js limite les risques. Mais en cas de doute, vérifie d'abord le rendu visuel sur l'Accueil et la Caisse Hub avant de continuer.

---

**Document maintenu par :** Marc Durand (consultant SEO senior) — synthèse des 4 modules d'analyse SEO DCB Technologies.
**Dernière révision :** 2026-04-06
**Prochaine révision recommandée :** après Sprint 3 (vérification que les quick wins fonctionnent), puis mensuelle.
