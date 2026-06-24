# Scope SEO + GEO : DCB Technologies V2
# Document stratégique d'acquisition organique

> Produit le 17/06/2026. Base : données GSC réelles (90j, propriété https://dcb-technologies.fr/), GA4 prop 505863722, inventaire repo V2, audits antérieurs (AUDIT_SEO.md, plan-seo-geo-local.md, brief-pages-departement.md, strategie-canaux.md). Ce document ne modifie aucun fichier de production : il est la source de vérité SEO pour calibrer le contenu avant mise en ligne.

---

## PARTIE 1 : DIAGNOSTIC DE SITUATION

### 1.1 Ce que dit la donnée réelle (GSC 90j)

Le site V1 live génère 27 sessions organiques sur 90 jours (GA4). C'est le plancher de départ. Quatre constats structurent tout le plan.

**Constat 1 : le trafic caisse existe mais est enterré en page 2-3.**
Le hub /caisse-enregistreuse/ accumule 2 404 impressions sur 90j avec une position moyenne de 22,4. CTR à 0,33%. Si la position passait de 22 à 8 (objectif réaliste à 6 mois), le CTR passerait mécaniquement de 0,3% à 3-4% sur ces mêmes impressions. Gain attendu : +70 à +90 clics/mois uniquement sur cette page.

**Constat 2 : les pages département convertissent l'impression en clic : quand elles rankent.**
/saone-et-loire/ : 79 impressions, 12 clics, CTR 15,2%. /ain/ : 128 impressions, position 12,2. /loire/ : 58 impressions, position 14,7. /rhone/ : 12 impressions, position 16. La page qui range le mieux (71 en position 5 selon les données du brief-pages-departement) génère un CTR de 15% contre 0,33% pour le hub. La conclusion est nette : une page département bien positionnée vaut 45x le hub en CTR. Le hub sert à accumuler les impressions sur les requêtes génériques ; les pages département doivent capter les requêtes géo-spécifiques.

**Constat 3 : le défaut géo est le problème n°1.**
Les requêtes qui impriment sont des villes hors zone : Besançon (144 impr pos 26), Coulaines (32 impr), Bouguenais (29 impr), Épagny (17 impr), Angers (16 impr), Dijon (21 impr pos 38), Grenoble (10 impr). Sur Lyon (le money keyword de la zone), 0 impression significative. Sur Mâcon, Chalon, Bourg-en-Bresse, Roanne, Villefranche : quasi zéro. Le contenu rang pour la mauvaise géographie. C'est la conséquence directe de l'absence de signaux géo-spécifiques (entités locales nommées, areaServed, phrase d'entité, LocalBusiness bien ancré).

**Constat 4 : IT et Web sont invisibles.**
/service-it-360/ (ancienne URL IT) : 267 impressions, position 23,2, 0 clic. /site-internet/ (ancienne URL Web) : 148 impressions, position 19,7, 0 clic. Les redirections 301 vers les nouvelles URLs V2 (/maintenance-informatique/ et /visibilite-web/) n'ont pas été appliquées. Le jus SEO accumulé sur ces URLs V1 est perdu. C'est un quick win technique P0 : appliquer les redirections au moment du déploiement.

---

## PARTIE 2 : INVENTAIRE ET RÔLE DE CHAQUE PAGE V2

### 2.1 Tableau complet (34 pages dans le repo)

| URL V2 | Type | Rôle SEO | Cluster cible | Intention | Statut contenu |
|---|---|---|---|---|---|
| `/` | Page marque | Hub principal, entité, brand | "DCB Technologies", "expert local caisse IT web 71" | Brand + navigationnelle | Pret : polish E-E-A-T |
| `/caisse-enregistreuse/` | Money page | Hub silo caisse, volume max impressions | "caisse enregistreuse NF525", "caisse tactile NF525", "logiciel caisse [ville]" | Transactionnelle | Pret : title/meta/comparatif/JSON-LD Service a finaliser |
| `/caisse-enregistreuse/saone-et-loire/` | Money page geo | Page département 71, convertion impression-clic | "caisse enregistreuse Mâcon", "caisse Chalon", "caisse Paray" | Transactionnelle locale | Pret : differenciation substance a finaliser (brief-dpt OK) |
| `/caisse-enregistreuse/rhone/` | Money page geo | Page département 69, gisement Lyon | "caisse enregistreuse Lyon", "caisse tactile Lyon", "caisse restaurant Lyon" | Transactionnelle locale | A calibrer en priorité absolue (P0) |
| `/caisse-enregistreuse/ain/` | Money page geo | Page département 01 | "caisse enregistreuse Bourg-en-Bresse", "caisse Oyonnax" | Transactionnelle locale | A calibrer (P0) |
| `/caisse-enregistreuse/loire/` | Money page geo | Page département 42 | "caisse enregistreuse Saint-Etienne", "caisse Roanne" | Transactionnelle locale | A calibrer (P0) |
| `/caisse-enregistreuse/boulangerie/` | Money page métier | SEA + SEO métier, volume fort | "caisse enregistreuse boulangerie", "caisse boulangerie NF525" | Transactionnelle métier | Pret : brief contenu SEA a aligner |
| `/caisse-enregistreuse/restaurant/` | Money page métier | SEA + SEO métier | "caisse enregistreuse restaurant NF525", "caisse restaurant Lyon" | Transactionnelle métier | Pret |
| `/caisse-enregistreuse/commerce-de-detail/` | Money page métier | SEO métier | "caisse commerce de détail NF525" | Transactionnelle métier | Pret |
| `/caisse-enregistreuse/coiffure/` | Money page métier | SEO métier + Hairnet | "caisse coiffure NF525", "Hairnet caisse coiffure" | Transactionnelle métier | Pret |
| `/caisse-enregistreuse/cashmag/` | Page support | Entité logiciel, citabilité IA, maillage | "CashMag", "logiciel caisse NF525 Android" | Informationnelle | Pret : SoftwareApplication JSON-LD a ajouter |
| `/caisse-enregistreuse/borne-de-commande/` | Page support | SEO niche restauration | "borne de commande restaurant", "borne commande tactile" | Transactionnelle | Pret |
| `/caisse-enregistreuse/monnayeur/` | Page support | SEO niche boulangerie | "monnayeur automatique boulangerie" | Transactionnelle | Pret |
| `/caisse-enregistreuse/hairnet/` | Page support | Entité partenaire, maillage coiffure | "Hairnet logiciel coiffure", "agenda coiffure NF525" | Informationnelle | Pret : JSON-LD a verifier |
| `/maintenance-informatique/` | Money page | Hub silo IT | "maintenance informatique Lyon", "infogérance PME 71" | Transactionnelle | A calibrer (P1) : title, JSON-LD Service, date E-E-A-T manquants |
| `/maintenance-informatique/maintenance-depannage/` | Money page | SEA P0 IT, cash rapide | "dépannage informatique 71", "dépannage informatique urgence Lyon" | Transactionnelle urgente | A calibrer (P1) |
| `/maintenance-informatique/cloud-securite/` | Money page | Cluster sauvegarde prouvé | "sauvegarde externalisée PME Lyon", "cybersécurité TPE 71" | Transactionnelle | A calibrer (P1) |
| `/maintenance-informatique/infogerance-pme/` | Money page | LTV récurrente, SEA | "infogérance PME Lyon", "infogérance PME Mâcon" | Transactionnelle | A calibrer (P1) |
| `/maintenance-informatique/location-vente-installation/` | Page support | Maillage IT, non SEA | "installation réseau PME", "location matériel informatique" | Informationnelle | Pret (sans priorité SEO forte) |
| `/maintenance-informatique/outils-collaboratifs/` | Page support | Maillage IT | "Microsoft 365 PME Lyon", "Google Workspace PME" | Informationnelle | Pret (sans priorité SEO forte) |
| `/visibilite-web/` | Money page | Hub silo Web | "création site internet Mâcon", "agence web 71" | Transactionnelle | A calibrer (P1) : JSON-LD Service, date E-E-A-T |
| `/visibilite-web/creation-site-internet/` | Money page | SEA + SEO Web, cash rapide | "création site internet Mâcon", "création site commerce 71" | Transactionnelle | A calibrer (P1) |
| `/visibilite-web/seo-sea-local/` | Money page | SEO + référencement local | "référencement local Mâcon", "Google Business Profile 71" | Transactionnelle | A calibrer (P1) |
| `/visibilite-web/hebergement/` | Page support | Maillage Web | "hébergement site internet France", "hébergement sécurisé PME" | Informationnelle | Pret (faible priorité SEO) |
| `/contact/` | Page conversion | Conversion finale, entité LocalBusiness | Brand + navigationnelle | Conversion | A finaliser : LocalBusiness @id, ContactPage JSON-LD, horaires |
| `/notre-adn/` | Page E-E-A-T | Confiance, fondateurs, Person JSON-LD | "DCB Technologies fondateurs", brand | Navigationnelle + trust | A finaliser : AboutPage, Person, BreadcrumbList JSON-LD |
| `/blog/` | Hub éditorial | Autorité thématique, longue traîne | Requêtes informationnelles multi-silos | Informationnelle | Structure ok : pas de BlogPosting JSON-LD |
| `/blog/digitaliser-point-de-vente/` | Article | Longue traîne + maillage hub caisse | "digitaliser point de vente", "caisse connectée commerce" | Informationnelle | Pret : BlogPosting JSON-LD manquant |
| `/mentions-legales/` | Page légale | Obligatoire | -- | -- | Pret |
| `/confidentialite/` | Page légale | Obligatoire | -- | -- | Pret |
| `/cgv/` | Page légale | Obligatoire | -- | -- | Pret |

Pages présentes dans le repo mais absentes du sitemap : `/caisse-enregistreuse/hairnet/` (à ajouter au sitemap).

---

## PARTIE 3 : PAGES MANQUANTES : CHIFFRAGE ET PRIORISATION

### 3.1 Bilan : 34 pages dans le repo, 7 pages manquantes identifiées

Le scope de couverture cible est de 41 pages pour couvrir la carte de mots-clés de la zone sans extension de périmètre. 7 pages sont à créer.

| Page à créer | Justification GSC/volume | Anti-cannibalisation | Priorité |
|---|---|---|---|
| `/caisse-enregistreuse/rhone/lyon/` ou bien integration dans `/caisse-enregistreuse/rhone/` | "caisse enregistreuse Lyon" = 109 impr pos 29 sur l'ancien site. Gisement n°1. La page /rhone/ couvre Lyon mais sa position reste mauvaise (16). Une page ville dédiée permet le message match exact sur la requête "caisse enregistreuse Lyon" sans cannibaliser /rhone/ (qui cible l'ensemble du département). Note : arbitrage à trancher Council : voir partie 6. | /rhone/ cible département, /lyon/ cible ville. Intention différente. Cross-link obligatoire mais pas de cannibalisation. | P0 sprint |
| `/caisse-enregistreuse/macon/` | Coeur du 71, base opérationnelle DCB à Paray (50 km). Volume estimé 50-200/mois. Quasi-monopole possible (peu de concurrents installateurs locaux). Message match SEA + SEO. | /saone-et-loire/ cible département, /macon/ cible ville. Complementaires. | P0 sprint |
| `/caisse-enregistreuse/conformite-nf525/` | "passer en NF525" / "caisse obligatoire NF525" / "NF525 2026" = requêtes déclencheur d'achat. Volume estimé 100-300/mois sur l'ensemble. Intention forte : le commerçant qui cherche cette requête a déjà décidé de changer. Pas de page dédiée dans le repo. | Hub /caisse-enregistreuse/ répond à "caisse NF525" générique. /conformite-nf525/ répond à l'intention réglementaire. Pas de cannibalisation, maillage fort vers le hub. | P0 sprint |
| `/maintenance-informatique/lyon/` | "maintenance informatique Lyon" = 480/mois (estimé). Absence totale de signaux IT pour Lyon. Siège DCB à Dardilly = proximité réelle. | Hub /maintenance-informatique/ couvre la zone, /lyon/ cible ville avec message match. | P1 |
| `/caisse-enregistreuse/alternative-sumup/` | "alternative SumUp" / "remplacer SumUp" / "SumUp NF525" = 200-500/mois. Intention de switch forte. DCB est la réponse naturelle (installateur NF525 local vs plateforme nationale sans SAV). | Cluster distinct de l'achat caisse neuf. Maille vers hub + pages métier. | P1 |
| `/caisse-enregistreuse/chalon/` | "caisse enregistreuse Chalon-sur-Saône" = requête de volume dans le 71. Chalon est la 2e ville du département (45 000 hab.). Cohérent avec la stratégie villes P0. | Même arbitrage que /macon/ vs /saone-et-loire/. | P2 |
| `/blog/nf525-obligatoire-2026/` (article M2) | Déclencheur réglementaire à pics saisonniers. Sert de passerelle vers /conformite-nf525/ et le hub caisse. | Article informatif, pas de cannibalisation avec les money pages. | P0 sprint (dès que /conformite-nf525/ existe) |

**Total : 7 pages manquantes.** Priorité P0 sprint (3 pages + 1 article) : créer avant la mise en ligne. Priorité P1 (2 pages) : premier mois post-lancement. Priorité P2 (1 page) : mois 2-3.

---

## PARTIE 4 : PROJECTION DE RANKING CHIFFRÉE

### Méthodologie
Projection ancrée sur les impressions GSC réelles. Le CTR estimé par position utilise les courbes standards Google (pos 1 : 28%, pos 3 : 11%, pos 5 : 7%, pos 8 : 4%, pos 10 : 3%, pos 15 : 1,5%, pos 20 : 0,8%, pos 25 : 0,4%). Les fourchettes basses/hautes tiennent compte de l'incertitude sur le volume réel et la concurrence.

### 4.1 Hub caisse /caisse-enregistreuse/

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| Aujourd'hui | 22,4 | ~800 | 0,33% | ~3 | -- |
| M+3 | 12-15 | ~1 200 | 1,5-2% | 18-24 | Title/meta optimisé, JSON-LD Service, phrase entité, comparatif SumUp visible |
| M+6 | 7-10 | ~1 500 | 3-5% | 45-75 | Maillage hub/dpt/métier complet, blog M1/M2 maillant vers hub, avis GBP |
| M+12 | 4-7 | ~2 000 | 5-7% | 100-140 | Autorité domaine montante, backlinks CCI + éditeur CashMag, 12 articles |

### 4.2 Page département /caisse-enregistreuse/saone-et-loire/

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| Aujourd'hui | ~5-15 (oscillation) | ~26 | ~15% | ~4 | -- |
| M+3 | 3-5 | ~80 | 11-15% | 9-12 | Differenciation substance, phrase entité, meta robots max-snippet, cross-links dpts |
| M+6 | 2-4 | ~150 | 14-18% | 21-27 | Avis GBP Paray/Mâcon, article blog M4 maillant, /macon/ qui aspire requêtes ville |
| M+12 | 1-3 | ~250 | 18-28% | 45-70 | Autorité locale, Local Pack Mâcon/Chalon/Paray, /chalon/ créée |

### 4.3 Page département /caisse-enregistreuse/rhone/ (priorité absolue)

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| Aujourd'hui | 16 | ~4 | 0% | 0 | Aucun signal geo Lyon, Écully sans accent |
| M+3 | 10-14 | ~60 | 1,5-3% | 1-2 | Correction accent JSON-LD, Givors + Techlid reintégrés, restauration en tête, phrase entité Lyon |
| M+6 | 7-11 | ~150 | 2-4% | 3-6 | Page /lyon/ créée (aspire les clics "ville", libère /rhone/ pour "département"), GBP Dardilly actif |
| M+12 | 5-9 | ~300 | 3-5% | 9-15 | Autorité Lyon montante, article M12 "caisse Lyon installateur local", Local Pack Lyon naissant |

Note : "caisse enregistreuse Lyon" à 109 impr pos 29 = le gisement le plus sous-exploité. La page /lyon/ dédiée (P0 sprint) est le levier le plus impactant seul.

### 4.4 Page ville à créer /caisse-enregistreuse/lyon/

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| J+0 (création) | Non indexée | 0 | -- | 0 | -- |
| M+3 (3 mois post-lancement) | 20-30 | ~80 | 0,4-1% | 0-1 | Indexation, maillage depuis /rhone/ + hub |
| M+6 | 12-18 | ~200 | 1-2% | 2-4 | Contenu métier + prix + témoignage local, GBP Dardilly SEA "caisse Lyon" |
| M+12 | 7-12 | ~400 | 2-4% | 8-16 | Backlinks presse locale, avis 20+, /alternative-sumup/ maillant |

### 4.5 Page /caisse-enregistreuse/macon/ (à créer, P0 sprint)

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| M+3 (post-lancement) | 15-25 | ~40 | 0,4-1% | 0-1 | Indexation, message match, maillage /71/ |
| M+6 | 6-12 | ~80 | 3-5% | 2-4 | Quasi-monopole local, GBP Paray actif (50km), 0 concurrent installateur Mâcon |
| M+12 | 2-5 | ~150 | 7-14% | 10-21 | Top Local Pack Mâcon, article M6 "prix site Mâcon" cross-sell |

### 4.6 Hub IT /maintenance-informatique/

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| Aujourd'hui (/service-it-360/ V1) | 23,2 | ~90 | 0% | 0 | Slug hors-SEO, 0 clic |
| M+3 (V2 avec redirections) | 25-35 | ~80 | 0,2-0,4% | 0-1 | Redirections 301 appliquées, title corrigé, JSON-LD Service |
| M+6 | 15-20 | ~150 | 0,8-1,5% | 1-2 | Cluster sauvegarde /cloud-securite/, article M1 blog, /maintenance-informatique/lyon/ créée |
| M+12 | 10-15 | ~400 | 1,5-2,5% | 6-10 | Autorité thématique IT construite, Local Pack IT, /infogerance-pme/ optimisée |

### 4.7 Hub Web /visibilite-web/

| Horizon | Position | Impressions/mois | CTR | Clics/mois | Levier |
|---|---|---|---|---|---|
| Aujourd'hui (/site-internet/ V1) | 19,7 | ~50 | 0% | 0 | Slug obsolète, 0 redirect |
| M+3 (V2 avec redirections) | 25-35 | ~50 | 0,2-0,4% | 0 | Redirections + title |
| M+6 | 18-25 | ~100 | 0,5-1% | 0-1 | JSON-LD Service, /creation-site-internet/ optimisée, article M5 blog |
| M+12 | 12-18 | ~200 | 1-2% | 2-4 | Longue traîne blog + faible concurrence locale sur "création site Mâcon" |

### 4.8 Synthèse trafic organique total projeté

| Horizon | Clics organiques/mois (non-marque) | Commentaire |
|---|---|---|
| Aujourd'hui | ~9 | Base GSC 90j divisée par 3 |
| M+3 | 35-55 | Hub caisse + dpts améliorés + redirections appliquées |
| M+6 | 100-180 | Pages villes créées, blog 3-4 articles, GBP actif |
| M+12 | 250-450 | Autorité locale construite, 12 articles, Local Pack 5 villes |

Ces projections excluent le trafic de marque (~9 clics/mois actuels) et le trafic SEA. Elles supposent l'application des quick wins techniques pré-lancement (partie 7).

---

## PARTIE 5 : GEO (GENERATIVE ENGINE OPTIMIZATION)

### 5.1 Diagnostic de citabilité actuelle

Test de citabilité IA à effectuer (manuel, 15 min) : requêtes "qui installe une caisse enregistreuse NF525 en Saône-et-Loire", "dépannage informatique Mâcon", "prestataire informatique Lyon PME", "agence web Mâcon". Hypothèse de départ : DCB n'est pas cité. Les signaux d'entité nécessaires (phrase d'entité, FAQ conversationnelle structurée, sources tierces pointant vers DCB) sont incomplets ou absents.

### 5.2 Actions GEO classées par ROI

**Niveau 1 : Impact immédiat, effort faible (pré-lancement, 2-4h)**

Action 1 : Phrase d'entité factuelle sur chaque page.
Formule : "DCB Technologies est l'installateur de caisses enregistreuses NF525 basé à Paray-le-Monial (71600), intervenant dans [département] sous 4h." Placer cette phrase dans le premier paragraphe visible (pas seulement dans le JSON-LD). Les LLM citent ce qui est visible dans le body, pas uniquement dans les scripts. Chaque page département, chaque hub, la homepage. 30 minutes d'application par page.

Action 2 : FAQ conversationnelle au format réponse d'abord.
Les FAQ actuelles existent mais manquent du format GEO optimal : réponse directe en chapeau (1-2 phrases), puis développement. Questions prioritaires à structurer :
- "Qui installe une caisse NF525 à Lyon / Mâcon / [ville] ?" : réponse directe avec NAP complet.
- "Combien coûte une caisse enregistreuse NF525 pour un restaurant ?" : fourchette prix + lien vers page.
- "Une caisse peut-elle fonctionner sans internet en zone rurale ?" : réponse mode hors-ligne.
- "CashMag est-il certifié NF525 ?" : oui + numéro attestation + lien DGFIP.
- "Quel délai d'intervention en Saône-et-Loire ?" : 4h sur site, 20 min télémaintenance.
- "Combien coûte un site internet pour un commerce à Mâcon ?" : fourchette + délai 30j.
Ces FAQ en HTML + FAQPage JSON-LD synchronisé.

Action 3 : Enrichissement llms.txt et création llms-full.txt.
Le llms.txt actuel est caisse-centré (50% caisse, 30% IT superficiel, 20% web superficiel). Corrections immédiates : ajouter pricing IT (dès 89 €/mois, 5 postes), pricing Web (site vitrine dès 1 200 €, délai 30 jours), ajouter Lenovo au matériel IT, rééquilibrer. Créer llms-full.txt avec : NAP complet, 3 offres x 3 packs avec prix, 14 villes de la zone, 20 FAQ conversationnelles, certifications (NF525 + CashMag revendeur agréé), profils fondateurs (Nathanaël Da Costa, Clément Boissié), glossaire (NF525, TPV, infogérance, CashMag, OXHOO, AURES, Hairnet), différenciateurs (zéro sous-traitance, techniciens salariés, 3-en-1).

**Niveau 2 : Impact fort, effort moyen (pré-lancement ou semaine 1 post-lancement, 4-8h)**

Action 4 : Complétion du graphe JSON-LD @graph sur la homepage.
Actuellement : LocalBusiness + FAQPage + BreadcrumbList. A ajouter : WebSite + SearchAction (sitelinks search box), Person (Nathanaël Da Costa + Clément Boissié avec jobTitle + sameAs LinkedIn), SoftwareApplication (CashMag, applicationCategory "BusinessApplication", offers), Organization sameAs avec URL GBP quand disponible.

Action 5 : LocalBusiness avec @id sur chaque page clé.
L'@id `https://dcb-technologies.fr/#localbusiness` doit être défini sur la homepage et la page contact. Les pages département et les hubs peuvent le référencer via `"provider": {"@id": "..."}`. Aujourd'hui cette référence est cassée (le @id pointé n'existe pas sur la page contact).

Action 6 : HowTo JSON-LD sur les pages à fort potentiel AI Overviews.
Pages cibles : /conformite-nf525/ (HowTo "Comment passer en conformité NF525"), /boulangerie/ (HowTo "Comment choisir sa caisse boulangerie"), /cloud-securite/ (HowTo "Comment sauvegarder son informatique de PME"). Format HowTo : 3-5 étapes, temps estimé, image de contexte.

**Niveau 3 : Impact progressif, off-site (post-lancement, mois 1-3)**

Action 7 : Présence sur sources tierces citées par les LLM.
Priorité décroissante : (1) Annuaire revendeurs CashMag officiel : DCB doit y apparaître avec lien vers le site. Contact à l'éditeur CashMag pour confirmer le statut "revendeur agréé" et l'inclusion. (2) CCI Saone-et-Loire + CCI Lyon Métropole : fiche entreprise avec URL site. (3) France Num (opérateur de compétences PME numérique) : profil partenaire. (4) AFNOR / annuaire NF525 si accessible. (5) LinkedIn page entreprise + profils fondateurs pointant vers dcb-technologies.fr. (6) Kompass, Société.com, Pages Jaunes avec NAP exact. (7) Presse locale (JSL, Le Progrès Lyon) : article portrait fondateurs ou annonce ouverture.

Action 8 : robots.txt et accessibilité IA.
robots.txt actuel autorise ClaudeBot + anthropic-ai (fait). Verifier que GPTBot, PerplexityBot, GoogleBot-Extended, Bingbot ne sont pas bloqués pour les pages de contenu. Aucune directive `Disallow` ne doit toucher les pages money.

### 5.3 Requêtes GEO cibles (à être cité dans les 6 premiers mois)

| Requête | LLM cible | Condition de citation |
|---|---|---|
| "Qui installe une caisse NF525 en Saône-et-Loire" | ChatGPT, Perplexity, Gemini | Phrase d'entité + FAQ + annuaire revendeur CashMag |
| "Installateur caisse enregistreuse Lyon" | Perplexity, Google AI Overview | Page /lyon/ + GBP Dardilly + sources tierces |
| "Dépannage informatique Mâcon urgent" | Perplexity local | GBP Paray + page /maintenance-depannage/ entité |
| "Création site internet Mâcon" | Perplexity, Google AI Overview | Page /creation-site-internet/ + FAQ prix |
| "CashMag NF525 différence SumUp" | ChatGPT, Perplexity | Page /alternative-sumup/ + FAQ comparatif + /cashmag/ |

---

## PARTIE 6 : BRIEFS CONTENU PAR PAGE P0

Les briefs suivants sont calibrés pour le copywriter. Ils définissent le cadre SEO sans rédiger le texte final. Chaque brief respecte les règles absolues : zéro tiret cadratin, encodage UTF-8, cohérence NAP.

---

### BRIEF P0-A : /caisse-enregistreuse/rhone/

**Title cible (55 caractères max) :** Caisse enregistreuse Lyon, Villefranche | DCB Technologies

**H1 :** Une caisse enregistreuse NF525 à Lyon, installée et garantie par un technicien local

**Intention :** Transactionnelle locale. Le prospect cherche un installateur à Lyon ou en Rhône. Il compare DCB (local, 4h, salarié) vs SumUp/Zettle (national, pas de SAV terrain) vs JDC ou autres revendeurs.

**Mots-clés principaux :** caisse enregistreuse Lyon (109 impr GSC), caisse tactile Lyon (10 impr), caisse restaurant Lyon, logiciel caisse Lyon, caisse enregistreuse Villefranche-sur-Saône, caisse Saint-Genis-Laval (14 impr), Techlid (zone activité Dardilly)

**Mots-clés secondaires :** NF525 Lyon, CashMag Lyon, installation caisse Lyon, SAV caisse Lyon sous 4h, dépannage caisse Lyon

**Sections obligatoires (dans cet ordre) :**
1. Hero : phrase d'entité directe ("DCB Technologies installe et maintient les caisses NF525 à Lyon et dans tout le Rhône depuis son siège de Dardilly."), prix dès 59€/mois, badge 4h, badge NF525.
2. Pourquoi un installateur local à Lyon : argument Dardilly (siège DCB, Techlid), techniciens salariés, pas de hotline nationale, délai 4h chiffré.
3. Section métiers : restauration (bouchons lyonnais, brasseries urbaines, restauration rapide) en tête, puis commerce, boulangerie, coiffure. Chaque card avec prix + lien vers page métier.
4. NF525 à Lyon : exemple d'application restauration lyonnaise (jamais générique), amende 7 500 €, lien DGFIP.
5. Zone d'intervention Rhône : villes nommées (Lyon, Villefranche-sur-Saône, Givors, Saint-Genis-Laval, Écully, Dardilly, Meyzieu, Bron). Distances depuis Dardilly chiffrées.
6. FAQ (5 questions) : "Qui installe une caisse NF525 à Lyon ?", "Caisse enregistreuse Lyon prix ?", "Intervention sous 4h possible à Villefranche ?", "CashMag certifié NF525 Lyon ?", "Que se passe-t-il si ma caisse tombe en panne un samedi ?"
7. Cross-sell discret vers les 3 autres pages département.
8. CTA final.

**JSON-LD :** Service (serviceType "Caisse enregistreuse NF525", areaServed incluant Lyon, Villefranche-sur-Saône, Givors, Écully, Dardilly, Meyzieu, Bron, Saint-Genis-Laval, Tassin-la-Demi-Lune), FAQPage. Corriger l'accent dans "Écully" (présent dans la version actuelle sans accent).

**Longueur cible :** 900-1 200 mots de contenu visible (excluant FAQ). Ne pas gonfler : reecrire les sections communes, ne pas empiler.

**Anti-duplicate :** La carte des métiers doit mettre la restauration en 1ère position (vs boulangerie en premier sur les pages 71/42/01). L'exemple NF525 doit citer un type de restaurant lyonnais. La section zone d'intervention doit citer Techlid et Givors absents des 3 autres pages département.

---

### BRIEF P0-B : /caisse-enregistreuse/ain/

**Title cible (55 caractères max) :** Caisse enregistreuse Bourg-en-Bresse | DCB Technologies

**H1 :** Caisse enregistreuse NF525 dans l'Ain : installation et SAV à Bourg-en-Bresse, Oyonnax, Gex

**Intention :** Transactionnelle locale. Volume plus faible que 71/69 mais position déjà à 12,2 sur 128 impressions. Objectif : consolider dans le top 5 et améliorer le CTR (titre sans ville = perte de clics qualifiés).

**Mots-clés principaux :** caisse enregistreuse Bourg-en-Bresse, caisse enregistreuse Ain, caisse NF525 Ain, caisse Oyonnax, caisse Pays de Gex

**Sections obligatoires :**
1. Hero : phrase d'entité ("DCB Technologies intervient dans tout l'Ain pour l'installation et le SAV de caisses NF525."), prix, 4h, NF525.
2. Ancrage terrain 01 : Bresse (volaille, restauration de terroir), Pays de Gex (frontalier Suisse, pouvoir d'achat, flux travailleurs), Plastics Valley Oyonnax (commerce et artisanat industriel), Dombes (restauration rurale).
3. Section métiers : order selon le tissu 01 (restauration Bresse en tête, commerce, boulangerie, coiffure).
4. NF525 dans l'Ain : exemple d'application restauration bresseuse ou commerce Oyonnax.
5. Zone d'intervention : Bourg-en-Bresse, Oyonnax, Ambérieu-en-Bugey, Bellegarde, Gex, Pont-de-Veyle. Distance depuis Paray (~75 km Bourg) à mentionner honnêtement.
6. FAQ (5 questions géo-spécifiques 01).
7. Cross-sell vers 3 autres départements.

**JSON-LD :** areaServed ajouter Pont-de-Veyle (présent dans le FAQ existant mais absent du schema actuel).

**Longueur cible :** 800-1 000 mots.

**Anti-duplicate :** L'angle Pays de Gex frontalier Suisse est unique à cette page. La Plastics Valley Oyonnax est unique. Ne pas utiliser ces éléments ailleurs.

---

### BRIEF P0-C : /caisse-enregistreuse/loire/

**Title cible (55 caractères max) :** Caisse enregistreuse Saint-Étienne, Roanne | DCB Technologies

(Note : rétablir "DCB Technologies" complet : le title actuel tronque en "DCB".)

**H1 :** Caisse enregistreuse NF525 dans la Loire : Saint-Etienne, Roanne, le Forez

**Intention :** Transactionnelle locale. Position déjà à 14,7 sur 58 impressions. Page déjà bien classée selon le brief-dpt (pos 3,7 dans une autre mesure). Consolider sans dégrader.

**Mots-clés principaux :** caisse enregistreuse Saint-Etienne, caisse enregistreuse Loire, caisse NF525 Loire, caisse Roanne, caisse enregistreuse Forez

**Sections obligatoires :**
1. Hero : phrase d'entité Loire.
2. Ancrage terrain 42 : agglomération stéphanoise dense (restauration urbaine, commerce de centre-ville), Roannais gastronomique (galaxie Troisgros, restauration haut de gamme), zones rurales Forez et Pilat (commerce de proximité, épiceries, boulangeries).
3. Section métiers : restauration stéphanoise en tête, puis boulangerie (Roannais), commerce, coiffure.
4. NF525 Loire : exemple d'application restaurant stéphanois ou brasserie Roanne.
5. Zone d'intervention : Saint-Etienne, Roanne, Montbrison, Firminy, Le Chambon-sur-Lignon, Boën-sur-Lignon (présent dans le FAQ actuel, à ajouter au JSON-LD areaServed).
6. FAQ (5 questions).
7. Cross-sell.

**JSON-LD :** Corriger l'accent dans "Saint-Etienne" (actuellement sans accent dans le JSON-LD). Ajouter Boën-sur-Lignon au areaServed.

**Longueur cible :** 800-1 000 mots.

**Anti-duplicate :** Le Roannais gastronomique (Troisgros) est un ancrage unique à cette page. Le Pilat (randonnée, tourisme rural) est un contexte unique. Ne pas réutiliser ailleurs.

---

### BRIEF P0-D : /caisse-enregistreuse/macon/ (page à créer)

**URL :** /caisse-enregistreuse/macon/

**Title cible :** Caisse enregistreuse Mâcon : installation NF525 | DCB Technologies

**H1 :** Caisse enregistreuse NF525 à Mâcon : installation, formation et SAV en moins de 4h

**Intention :** Transactionnelle locale pure. Le prospect est à Mâcon ou dans l'agglomération, il cherche un installateur de proximité. Quasi-monopole possible (peu de concurrents installateurs locaux sur cette requête).

**Mots-clés principaux :** caisse enregistreuse Mâcon, caisse enregistreuse NF525 Mâcon, installateur caisse Mâcon, SAV caisse Mâcon, caisse tactile Mâcon

**Données locales à intégrer :**
- Paray-le-Monial à 53 km de Mâcon : délai 4h réaliste et vérifiable.
- Mâcon : préfecture de Saône-et-Loire, 35 000 hab., tissu commerce et restauration dense (route des vins de Bourgogne, AOC Mâcon, tourisme viticole).
- Secteurs prioritaires : restauration (vignerons, auberges, restauration traditionnelle), commerce de centre-ville, boulangerie artisanale.

**Sections obligatoires :**
1. Hero : phrase d'entité ("DCB Technologies installe et maintient les caisses NF525 à Mâcon et dans l'agglomération mâconnaise depuis sa base de Paray-le-Monial, à 53 km."), prix 59€/mois, 4h, NF525.
2. Proximité terrain : argument Paray (53 km, intervention rapide), techniciens salariés, pas de franchise ni sous-traitance.
3. Métiers Mâcon : restauration viticole et traditionnelle en tête, commerce de centre-ville (piétonnier Mâcon), boulangerie artisanale.
4. NF525 à Mâcon : exemple concret (restaurant viticole AOC Mâcon, boulangerie centre-ville).
5. Zone d'intervention : Mâcon, Charnay-lès-Mâcon, Cluny (25 km), Tournus (27 km), Pont-de-Vaux, Saint-Laurent-sur-Saône (rive droite). Distances chiffrées.
6. FAQ (5 questions) : "Qui installe une caisse enregistreuse NF525 à Mâcon ?", "Délai d'intervention à Mâcon ?", "Caisse pour restaurant viticole Mâcon ?", "Prix d'une caisse NF525 à Mâcon ?", "Caisse sans internet à Mâcon ?"
7. CTA + formulaire.
8. Cross-link vers /saone-et-loire/ (vue département) et /caisse-enregistreuse/ (hub).

**JSON-LD :** Service avec areaServed (Mâcon, Charnay-lès-Mâcon, Cluny, Tournus, Pont-de-Vaux, Saint-Laurent-sur-Saône), FAQPage, LocalBusiness provider @id.

**Longueur cible :** 700-900 mots. Page ville = concision et densité locale, pas encyclopédique.

**Maillage :** La page /macon/ doit recevoir un lien depuis /saone-et-loire/ (section zone ou cross-sell), depuis le hub /caisse-enregistreuse/ (si une section villes est ajoutée), et depuis les articles de blog citant Mâcon. Elle doit pointer vers /saone-et-loire/ (département), /caisse-enregistreuse/ (hub), et la page métier la plus pertinente (restaurant ou boulangerie selon l'angle retenu).

---

### BRIEF P0-E : /caisse-enregistreuse/conformite-nf525/ (page à créer)

**URL :** /caisse-enregistreuse/conformite-nf525/

**Title cible :** Passer en NF525 : obligation, délai, amende | DCB Technologies

**H1 :** NF525 obligatoire : comment mettre sa caisse en conformité sans amende

**Intention :** Informationnelle-transactionnelle. Le commerçant a entendu parler de NF525, ne sait pas si sa caisse est conforme, craint l'amende de 7 500 €. C'est la requête déclencheur d'achat la plus forte : quelqu'un qui cherche "passer en NF525" a déjà presque décidé de changer.

**Mots-clés principaux :** passer en NF525, conformité NF525, caisse obligatoire NF525, NF525 amende, caisse non conforme que faire, NF525 2026

**Structure de la page :**
1. Chapeau extractable (GEO) : "Depuis le 1er janvier 2018, tout logiciel de caisse doit être certifié NF525. Une caisse non conforme expose son exploitant à une amende de 7 500 euros par logiciel. DCB Technologies installe CashMag, certifié NF525 par l'AFNOR, à Lyon, Mâcon, Chalon et dans les départements 71, 69, 01 et 42."
2. Qu'est-ce que NF525 (définition factuelle : inalterabilité, sécurisation, conservation, archivage : les 4 piliers DGFIP). Liens sortants : DGFIP, AFNOR.
3. Comment savoir si ma caisse est conforme : vérifications pratiques (attestation de conformité, date d'installation, logiciel concerné).
4. Que faire si ma caisse n'est pas conforme : étapes (contacter un revendeur agréé, choisir un logiciel certifié, installer et former). CTA devis DCB.
5. CashMag et NF525 : attestation de conformité éditable depuis CashMag, AFNOR, revendeur agréé DCB.
6. FAQ NF525 : "SumUp est-il NF525 ?", "Mon iPad avec Square est-il conforme ?", "L'amende est-elle systématique ?", "CashMag est-il certifié NF525 ?", "Combien coûte un logiciel NF525 ?"
7. CTA conversion : devis installation.
8. Cross-link vers hub /caisse-enregistreuse/ et pages départements.

**JSON-LD :** FAQPage, HowTo ("Comment passer en conformité NF525" : 5 étapes), Service provider DCB.

**Longueur cible :** 800-1 100 mots. Article de référence, pas page produit.

**Anti-duplicate :** Cette page couvre le "pourquoi changer" et la réglementation. Les pages département et le hub couvrent le "quoi choisir" et "qui appeler". Ne pas dupliquer les sections NF525 descriptives qui existent dans les pages département : reformuler avec l'angle réglementaire.

---

### BRIEF P0-F : Hub /caisse-enregistreuse/ (polish final)

Cette page existe et est correcte structurellement. Les points à calibrer pour le sprint :

**Title actuel (à vérifier et conserver si <60c) :** Caisse enregistreuse NF525 Lyon, Mâcon, Chalon | DCB Technologies

**H1 :** Garder tel quel (ne pas dégrader ce qui fonctionne).

**Actions contenu à finaliser :**
1. Comparatif visible "DCB vs SumUp vs Zettle vs Hiboutik" en corps de page (table 4-5 critères, pas seulement en FAQ). Critères : certification NF525, SAV terrain, délai intervention, prix moyen, présence locale.
2. JSON-LD Service avec areaServed complet (14 villes) et AggregateOffer (59-115 €/mois selon formule).
3. Section entité factuelle en intro : phrase citant explicitement Paray-le-Monial, les 4 départements, CashMag revendeur agréé.
4. Cross-link vers /conformite-nf525/ une fois la page créée.

---

### BRIEF P0-G : /contact/ (finalisation LocalBusiness)

**Actions uniquement JSON-LD et meta (pas de refonte contenu) :**
1. Ajouter le bloc LocalBusiness complet avec @id `https://dcb-technologies.fr/#localbusiness` incluant : name, address (Dardilly + Paray), telephone, email, openingHours, areaServed (4 départements), priceRange, sameAs (LinkedIn, GBP quand disponible).
2. Ajouter ContactPage JSON-LD.
3. Title à corriger si générique : "Contact DCB Technologies : caisse, informatique, web 71 69 01 42" (55c).

---

## PARTIE 7 : QUICK WINS TECHNIQUES PRE-LANCEMENT

Classés par impact / effort. A appliquer avant le déploiement ou dans les 48h post-déploiement.

### QW-1 : Redirections 301 V1 vers V2 (bloquant, impact fort)

| URL V1 (live actuelle) | URL V2 cible | Impressions GSC V1 |
|---|---|---|
| /service-it-360/ | /maintenance-informatique/ | 267 impr, pos 23 |
| /site-internet/ | /visibilite-web/ | 148 impr, pos 20 |
| /foire-aux-questions/ | /caisse-enregistreuse/ (FAQ intégrée) ou /blog/ | 163 impr, pos 11 |
| /question/* (URLs FAQ individuelles V1) | /caisse-enregistreuse/ ou page correspondante | Impr dispersées |

Ces redirections doivent être posées dans le .htaccess au moment du déploiement. Sans elles, le jus SEO de /service-it-360/ (267 impr) et /site-internet/ (148 impr) est perdu.

### QW-2 : Correction du géo-ciblage (P0, impact très fort)

Le problème n°1 identifié (impressions sur Besançon, Angers, Perpignan) vient de l'absence de signaux géo forts. Actions :

a) Appliquer la phrase d'entité géo sur chaque page (cf. Partie 5, Action 1). 30 min par page.

b) Dans le JSON-LD LocalBusiness de la homepage et du contact : ajouter `"areaServed"` avec les 4 départements explicites (Saône-et-Loire, Rhône, Ain, Loire) ET les villes (Lyon, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Saint-Etienne, Roanne, Paray-le-Monial, Villefranche-sur-Saône, Givors). La précision des villes prime sur des éléments vagues.

c) Ajouter `"serviceArea"` sur chaque Service JSON-LD de sous-page avec les villes exactes de la zone couverte. Google utilise ce signal pour le géo-ciblage organique.

d) Corriger le bug GPS GBP (coordonnées situées à ~20 km, cause probable de l'absence Local Pack). C'est la priorité absolue post-déploiement.

### QW-3 : Meta robots max-snippet sur les 4 pages département (P0, impact CTR fort)

Ajouter sur chaque page département :
```html
<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large">
```
Sans cette directive, Google limite l'extrait de snippet dans les SERP. Les pages département avec FAQ longues perdent leur avantage dans les résultats enrichis.

### QW-4 : Corrections JSON-LD accents (P0, 30 min)

- /caisse-enregistreuse/rhone/ : "Ecully" -> "Ecully" avec accent ("Écully")
- /caisse-enregistreuse/loire/ : "Saint-Etienne" -> "Saint-Etienne" avec accent ("Saint-Etienne")
Les LLM et l'algorithme de Google matchent sur l'orthographe officielle INSEE.

Note : dans ce document les accents sur E et E sont orthographiés sans accent pour éviter tout risque d'encodage dans le markdown. Dans les fichiers HTML, utiliser les caractères Unicode exacts : E avec accent aigu (U+00C9), e avec accent aigu (U+00E9).

### QW-5 : Title et meta sur les 3 hubs sous-exploités (P0, 1h)

| Page | Title actuel | Title cible (< 60c) |
|---|---|---|
| /maintenance-informatique/ | "Service IT 360 | DCB Technologies" | "Maintenance informatique Lyon, Mâcon | DCB Technologies" |
| /visibilite-web/ | "Visibilité Web | DCB Technologies" | "Création site internet Mâcon, Lyon | DCB Technologies" |
| /notre-adn/ | "Notre ADN | DCB Technologies" | "DCB Technologies : expert local caisse IT web 71 69" |

### QW-6 : Maillage hub-département-métier (P0, 2h)

Schéma de maillage cible. Il n'existe pas encore de liens systématiques entre les niveaux.

Hub /caisse-enregistreuse/ doit pointer vers : les 4 pages département (liens déjà présents?), les 6 pages métier, /conformite-nf525/ (une fois créée), /cashmag/.

Pages département doivent pointer vers : hub (déjà), les 4 pages métier les plus pertinentes du département, les 3 autres pages département (cross-link discret "Nous intervenons aussi dans..."), /conformite-nf525/ (une fois créée).

Pages métier doivent pointer vers : hub, page département la plus pertinente (ex : /boulangerie/ -> /saone-et-loire/ si ancrage 71 fort), /cashmag/ ou /hairnet/, cross-sell IT ou Web discret.

Pages ville à créer (/macon/, /lyon/) doivent pointer vers : hub, département correspondant, page métier principale locale, /conformite-nf525/.

### QW-7 : og:locale et og:updated_time (P0, 30 min)

Absent sur les 4 pages département. Ajouter :
```html
<meta property="og:locale" content="fr_FR">
<meta property="article:modified_time" content="2026-06-17">
```

### QW-8 : Sitemap.xml : ajout /hairnet/ et mise à jour lastmod (P0, 10 min)

La page /caisse-enregistreuse/hairnet/ existe dans le repo mais est absente du sitemap. L'ajouter avec priority 0.6. Mettre à jour les lastmod des pages département (actuellement 2026-06-15 : OK) et des hubs (actuellement 2026-04-06 : mettre à jour au moment du déploiement).

---

## PARTIE 8 : ARBITRAGES A SOUMETTRE AU COUNCIL

Ces points ne peuvent pas être tranchés unilatéralement par le scope SEO. Ils ont un impact sur la stratégie et nécessitent une décision client avant exécution.

**Arbitrage 1 : Page /lyon/ : URL dans /caisse-enregistreuse/ ou standalone ?**
Option A : /caisse-enregistreuse/lyon/ (cohérence avec le silo, maillage naturel).
Option B : /lyon/ standalone (futur hub ville "caisse + IT + web à Lyon", scalable si IT et Web prennent du volume à Lyon).
Recommandation SEO : Option A à court terme (6 mois), migration vers Option B possible ensuite. L'URL /lyon/ standalone n'a de sens que si au moins 2 silos y ont du contenu (caisse + IT ou web).

**Arbitrage 2 : Anti-cannibalisation hub caisse vs pages département : ligne de démarcation définitive.**
Le hub /caisse-enregistreuse/ capte 2 404 impressions sur des requêtes génériques ("caisse enregistreuse NF525", "logiciel caisse", "caisse tactile NF525"). Les pages département captent les requêtes géo ("caisse Lyon", "caisse Mâcon"). Il n'y a PAS de cannibalisation si le hub ne cible pas les requêtes ville et si les pages département ne ciblent pas les requêtes génériques sans ville. La règle à entériner : (1) Les pages département ne ciblent que des requêtes avec nom de ville ou de département. (2) Le hub ne doit pas avoir de section "caisse enregistreuse à Lyon" dans son contenu principal. (3) La page /macon/ et la page /rhone/ coexistent sur le même sujet (caisse à Lyon) : seule la granularité ville vs département les distingue. Est-ce que le client valide cette coexistence ?

**Arbitrage 3 : Saône-et-Loire comme ancrage principal de la communication vs montée en charge Lyon.**
La stratégie actuelle met Paray-le-Monial et le 71 comme terrain prioritaire (proximité, quasi-monopole, délai 4h crédible). Lyon est un marché 10x plus grand mais 10x plus concurrentiel. La projection M+12 indique 8-16 clics/mois sur Lyon : contre 45-70 clics/mois sur le 71. Faut-il investir en budget contenu (pages + articles) sur Lyon dès le sprint 0, ou le laisser à P1 et concentrer les ressources sur le 71 d'abord ?

**Arbitrage 4 : Pages département IT (analogues aux pages département caisse).**
Aucune page département IT n'existe dans le repo (seulement /maintenance-informatique/lyon/ à créer en P1). Faut-il créer /maintenance-informatique/saone-et-loire/ et /maintenance-informatique/rhone/ pour couvrir le cluster IT local, ou limiter à /maintenance-informatique/lyon/ (seule ville avec volume suffisant) ? Recommandation : ne pas créer de pages département IT avant M+6 : le cluster IT ne génère pas encore d'impressions suffisantes pour justifier ces pages. Confirmer ?

**Arbitrage 5 : Ouverture d'une deuxième fiche GBP (Paray-le-Monial).**
AUDIT_SEO.md préconise 2 fiches GBP (Dardilly + Paray). Google accepte 2 fiches pour une entreprise avec 2 adresses physiques réelles. Est-ce que Paray-le-Monial est une adresse avec présence physique permanente (local ouvert au public) ou uniquement une base technique d'intervention ? Si bureau physique non ouvert au public, Google peut rejeter ou suspendre la fiche. A confirmer avant création.

---

## PARTIE 9 : SPRINTS ET SEQUENCEMENT

### Sprint 0 : Pré-lancement (avant déploiement, estimé 3-5 jours)

| Tâche | Responsable | Effort | Dépendance |
|---|---|---|---|
| QW-1 Redirections 301 dans .htaccess | seo-expert + front | 1h | Accès hébergement OVH |
| QW-4 Corrections accents JSON-LD Écully / Saint-Étienne | site-qa | 30 min | Aucune |
| QW-3 Meta robots max-snippet 4 pages dpt | site-qa | 30 min | Aucune |
| QW-7 og:locale + og:updated_time 4 pages dpt | site-qa | 30 min | Aucune |
| QW-5 Titles hubs IT/Web/Notre ADN | seo-expert | 30 min | Aucune |
| Brief P0-A /rhone/ : differenciation substance | copywriter-site | 3-4h | Brief P0-A ci-dessus |
| Brief P0-B /ain/ : differenciation substance | copywriter-site | 2-3h | Brief P0-B ci-dessus |
| Brief P0-C /loire/ : differenciation substance + title marque | copywriter-site | 2-3h | Brief P0-C ci-dessus |
| JSON-LD Service hub caisse (areaServed + AggregateOffer) | seo-expert | 1h | Aucune |
| LocalBusiness @id sur /contact/ | seo-expert | 45 min | Aucune |
| Phrase d'entité dans body des 4 pages dpt + hubs | copywriter-site | 2h | Aucune |
| Enrichissement llms.txt (pricing IT + Web) | seo-expert | 30 min | Aucune |
| QW-8 Sitemap : ajout hairnet + lastmod | seo-expert | 10 min | Aucune |
| site-qa final (em dash, JSON-LD, liens, cache-bust) | site-qa | 1h | Tout le sprint |

### Sprint 1 : Semaine 1-2 post-lancement

| Tâche | Priorité | Effort |
|---|---|---|
| Création page /caisse-enregistreuse/macon/ (Brief P0-D) | P0 | Copywriter 3h + front 2h + seo 1h |
| Création page /caisse-enregistreuse/conformite-nf525/ (Brief P0-E) | P0 | Copywriter 3h + front 2h + seo 1h |
| Correction GPS GBP (bug ~20 km) | P0 | 30 min client |
| Correction catégories GBP (5 catégories) | P0 | 30 min client |
| Soumission sitemap GSC V2 | P0 | 15 min |
| Demande d'indexation 26 URLs dans GSC | P0 | 30 min |
| QW-6 Maillage hub-dpt-métier complet | P1 | 2h front/seo |
| polish hub /caisse-enregistreuse/ (comparatif SumUp, JSON-LD) | P1 | Copywriter 2h + seo 1h |

### Sprint 2 : Mois 1-2

| Tâche | Priorité |
|---|---|
| Création /caisse-enregistreuse/lyon/ | P1 |
| Création /maintenance-informatique/lyon/ | P1 |
| Création /caisse-enregistreuse/alternative-sumup/ | P1 |
| Calibrage contenu /maintenance-informatique/ hub + sous-pages (JSON-LD, date E-E-A-T) | P1 |
| Calibrage contenu /visibilite-web/ hub + sous-pages | P1 |
| Article blog M1 (sauvegarde externalisée PME 71) | P1 |
| Article blog M2 (NF525 obligatoire 2026) | P1 |
| llms-full.txt création (FAQ 20 questions, glossaire) | P1 |
| Campagne avis GBP (objectif 12 avis M+1) | P1 |

### Sprint 3+ : Mois 2-6

- /caisse-enregistreuse/chalon/ (P2)
- Articles blog M3 a M6 selon calendrier editorial
- Citations NAP off-site (CCI, annuaire CashMag, France Num, Kompass)
- HowTo JSON-LD sur /conformite-nf525/ + /boulangerie/ + /cloud-securite/
- BreadcrumbList visible + JSON-LD sur toutes les sous-pages
- Notre ADN : AboutPage + Person JSON-LD + og:image
- AggregateRating JSON-LD sur homepage une fois 5 avis GBP collectés

---

## PARTIE 10 : SYNTHESE MESURABLE

### Pages touchées par ce scope (pré-lancement + sprint 1)

15 pages modifiées ou créées :
- Modifiées (corrections techniques + contenu) : /caisse-enregistreuse/, /caisse-enregistreuse/rhone/, /caisse-enregistreuse/ain/, /caisse-enregistreuse/loire/, /caisse-enregistreuse/saone-et-loire/, /contact/, /maintenance-informatique/, /visibilite-web/, index.html
- Créées : /caisse-enregistreuse/macon/, /caisse-enregistreuse/conformite-nf525/
- Fichiers techniques : sitemap.xml, llms.txt, .htaccess (redirections), robots.txt (vérification)

### KPIs de validation

| Indicateur | Avant sprint | Cible M+3 | Cible M+6 |
|---|---|---|---|
| Clics organiques non-marque / mois | ~9 | 35-55 | 100-180 |
| Position hub caisse | 22 | 12-15 | 7-10 |
| Position page /saone-et-loire/ | ~5-15 (oscillation) | 3-5 | 2-4 |
| Position page /rhone/ | 16 | 10-14 | 7-11 |
| Impressions totales (toutes pages) | ~3 300/90j | ~5 000/mois | ~8 000/mois |
| Pages dans Local Pack | 0 | 1-2 (Mâcon ou Paray post-GBP) | 3-5 |
| Requêtes GEO avec citation DCB | 0 (estimé) | 2-3 | 5-8 |

---

*Scope produit par l'agent seo-expert, 17/06/2026. Ancré sur les données GSC 90j et GA4 réels. Aucun fichier de production modifié. Documents de référence lus : AUDIT_SEO.md, plan-seo-geo-local.md, brief-pages-departement.md, strategie-canaux.md, intrants-lancement.md, plan-sea.md, llms.txt, sitemap.xml.*
