# Audit SEO Local + Fiche Google Business Profile

**Dimension :** SEO local (NAP, LocalBusiness JSON-LD, pages département) et Google Business Profile
**Date :** 21/07/2026
**Agent :** seo-expert (Sonnet 5)
**Périmètre :** repo local `C:\Users\Dacos\Downloads\dcb-site-clean`, branche `main`, 26 pages `index.html` porteuses de signal local (Homepage, 3 hubs, 18 sous-pages métier/service, 4 pages département, Contact) + fiche Google Business Profile publique de DCB Technologies (KGMID `/g/11xvy54gzr`) + données Google Search Console de la propriété `https://dcb-technologies.fr/` (90 jours, 22/04 au 21/07/2026) + registre légal (`annuaire-entreprises.data.gouv.fr`, SIREN 988632089).

Rappels de cadrage respectés : pages métier neutres au département (doctrine confirmée, non re-signalée) ; silo Web volontairement sans pages département (décision council, non re-signalée) ; siège Dardilly + base Paray sont tous les deux réels ; page `seo-sea-local` = lander SEA/GBP, pas un pari organique (non auditée ici) ; aucune recommandation `aggregateRating`/`Review` (confirmé : zéro occurrence, conforme). La propriété GSC interrogée est celle du domaine `dcb-technologies.fr`, actuellement occupé par le site V1 WordPress (le V2 audité ici tourne en local, pas encore déployé) : les URLs des pages département existent à l'identique en V1 (cf. `pour-clement/brief-pages-departement.md` §0), donc les données GSC sont un vrai signal de demande et de cannibalisation actuelle, mais ne mesurent PAS encore les correctifs déjà appliqués au code V2 local.

---

## NOTE : 60/100

**Barème (6 catégories) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | NAP interne (téléphone, adresse, cohérence footer/JSON-LD/llms.txt) | 14/15 | Téléphone 100% cohérent partout ; adresse siège identique au registre légal officiel ; une variation de format mineure (`addressRegion`) |
| 2 | LocalBusiness JSON-LD (complétude, résolution par page) | 8/20 | Nœud canonique riche sur l'Accueil, mais 19 pages sur 23 référencent l'entité par un `@id` non résolvable en isolation ; page Contact = entité dupliquée divergente |
| 3 | Pages département (conformité doctrine, technique, contenu, maillage) | 18/20 | Quasi tous les correctifs du brief appliqués et vérifiés dans le code ; ne manque que le LocalBusiness autonome par page (doublon du point 2) |
| 4 | Fiche Google Business Profile (config, cohérence NAP, avis) | 14/30 | Fiche vivante et bien tenue humainement (5,0/5, réponses 100%), mais bug GPS non corrigé, catégorie unique, nom en minuscule, rythme d'avis très en retard sur le plan |
| 5 | Signal Search Console (money keyword, cannibalisation) | 5/10 | Cannibalisation hub/page département toujours active sur "caisse enregistreuse lyon" au 21/07 (mesure V1, non représentative du code V2 corrigé) |
| 6 | Citations locales / annuaires (readiness) | 1/5 | 0 citation soumise à ce jour ; plan détaillé existant, cohérent avec le statut pré-lancement |

**Total : 60/100.** Le travail éditorial et technique sur le site (pages département, JSON-LD hubs) est solide et vérifié dans le code. Ce qui plombe la note, c'est un point technique transverse peu visible (résolution du `@id` LocalBusiness page par page) et un point externe hors du contrôle du code (la fiche GBP, dont le bug GPS de l'audit d'avril n'a toujours pas été corrigé aujourd'hui).

**Bloquants identifiés : 2**

---

## [BLOQUANT] 1 : la fiche Google Business Profile est toujours géolocalisée à ~20 km de la vraie adresse DCB

**Preuve :** fiche consultée en direct aujourd'hui (21/07/2026, via Google Maps, KGMID `/g/11xvy54gzr`, URL `https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/...`) : le pin reste sur les coordonnées **45.6356277, 4.7311759**, soit la zone Brignais/Vourles/Chaponost, au sud-ouest de Lyon. C'est exactement le même bug que celui documenté dans `pour-clement/MODULE_2_referencement-local.md` (audit du 06/04/2026, "Écart : ~20 km"), non corrigé depuis 3 mois et demi.

L'adresse légale réelle, vérifiée aujourd'hui sur `annuaire-entreprises.data.gouv.fr` (SIREN **988632089**), est **59 Chemin du Moulin Carron, 69570 Dardilly** : coordonnées attendues ≈ 45,81 N / 4,76 E, soit au nord-ouest de Lyon. C'est très exactement l'adresse et les coordonnées déjà utilisées dans le JSON-LD `LocalBusiness` du site (`index.html` lignes 286-296). Le site est donc correct ; c'est la fiche GBP qui ne l'est pas.

**Impact :** en mode Service-Area Business, l'adresse publique est masquée mais le point d'ancrage géographique interne reste le facteur numéro un du classement dans le Local Pack et sur les requêtes "près de moi". Avec un pin à 20 km de la vraie zone d'opération, Google calcule la proximité aux requêtes locales (ex. "caisse enregistreuse Lyon", "maintenance informatique Dardilly") à partir du mauvais point de référence. C'est très probablement la cause principale du non-classement de la fiche dans le Local Pack malgré une note de 5,0/5 : le NAP dilué identifié par le Module 2 n'a pas été résolu par la mise à jour du JSON-LD (qui, elle, ne pilote pas la position de la fiche GBP elle-même).

**Correction :** action externe, non exécutable en code. Corriger la position de la fiche via l'interface admin Google Business Profile (déplacer le repère sur Dardilly ou sur une zone de service plus proche de la réalité), déjà identifiée en P1-5 dans `pour-clement/REPARATIONS-TECHNIQUES-GO-LIVE.md` ("Corriger le bug GPS de la fiche"). Ce document reste correct sur ce point ; l'action n'a simplement pas encore été faite.

---

## [BLOQUANT] 2 : le `LocalBusiness` référencé par 19 pages sur 23 est un `@id` non résolvable page par page

**Preuve :** l'entité `LocalBusiness` complète (nom, téléphone, adresse, geo, `areaServed`, `openingHoursSpecification`) n'existe en clair qu'à 3 endroits : le `@graph` unifié de `index.html` (lignes 269-322), et les blocs `Service` de `caisse-enregistreuse/index.html` (lignes 235-249) et `visibilite-web/index.html` (lignes 169-184), qui recopient l'objet complet tout en gardant le même `@id`.

Sur les 19 autres pages porteuses de `Service` JSON-LD, la propriété `provider` est réduite à une simple référence :
```json
"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}
```
sans aucune propriété inline (ni `name`, ni `telephone`, ni `address`). Vérifié par grep sur l'ensemble des pages : `maintenance-informatique/index.html` (hub IT, ligne 60), ses 4 sous-pages, les 7 sous-pages caisse (boulangerie, restaurant, commerce-de-detail, coiffure, borne-de-commande, monnayeur, cashmag, hairnet), les 3 sous-pages web (creation-site-internet, hebergement, seo-sea-local), et les **4 pages département** (`ain`, `loire`, `rhone`, `saone-et-loire`) qui sont le cœur de cet audit.

C'est exactement le problème anticipé par `pour-clement/brief-pages-departement.md` (§2, "L'ENTITE LocalBusiness ... doit exister quelque part avec cet @id EXACT") mais mal résolu : le document supposait qu'il suffisait que le nœud existe "quelque part" sur le site. Ce n'est pas comment les outils de test de données structurées de Google fonctionnent : ils analysent **une URL à la fois**. Un `@id` qui ne pointe vers rien de résolvable dans le document courant reste une référence dans le vide pour cette page précise. Testable immédiatement sur `https://dcb-technologies.fr/caisse-enregistreuse/rhone/` avec le Rich Results Test de Google dès la mise en ligne : le `provider` de son `Service` n'aura ni nom ni coordonnées exploitables.

**Impact :** sur 19 pages, l'entité locale (téléphone, adresse, horaires) associée au service décrit n'est pas lisible en isolation par les robots/LLMs qui analysent cette page précise, exactement l'inverse de l'objectif GEO du brief département (section 6 : "LocalBusiness avec address/telephone/openingHours sur la page elle-même pour les AI Overviews locales"). C'est un vrai manque à gagner GEO/AI Overviews sur les 4 pages département en particulier, puisque ce sont les pages censées porter le signal local page par page.

**Correction :** sur les 19 pages concernées (dont les 4 pages département en priorité), remplacer la référence `{"@id": ...}` par l'objet complet déjà utilisé sur `caisse-enregistreuse/index.html` et `visibilite-web/index.html` (nom, téléphone, email, adresse), en conservant le même `@id` pour permettre à Google de consolider l'entité à travers les pages. Pas de changement de structure ni de nouveau contenu texte : uniquement un enrichissement JSON-LD.

---

## MAJEURS

### M1 : Fiche GBP, catégorie secondaire toujours absente, nom toujours en minuscule

**Preuve :** fiche consultée en direct aujourd'hui : le nom affiché reste **"DCB technologies"** (t minuscule, incohérent avec le branding "DCB Technologies" du site) et une seule catégorie visible, **"Assistance et services informatiques"**, sans catégorie secondaire affichée à côté (contrairement à un commerce multi-catégories où Google affiche "Catégorie A · Catégorie B"). Ce sont les 2 mêmes points déjà identifiés comme critiques dans `pour-clement/MODULE_2_referencement-local.md` (06/04/2026), non corrigés 3 mois et demi plus tard.

**Impact :** sans la catégorie secondaire "Vendeur de caisses enregistreuses" en particulier, la fiche ne peut structurellement pas apparaître dans le Local Pack sur les requêtes caisse enregistreuse, quel que soit le travail éditorial fait sur les pages département.

**Correction :** action externe admin GBP (déjà détaillée dans `MODULE_2`, section "Actions GBP P0"), aucune dépendance code.

### M2 : rythme d'acquisition d'avis très en retard sur le plan

**Preuve :** fiche consultée en direct aujourd'hui : **7 avis**, note 5,0/5, 100% de réponses du propriétaire. Le plan `MODULE_2_referencement-local.md` visait 12 avis à M+1 et 22 avis à M+3 depuis l'audit du 06/04/2026. Au 21/07/2026 (soit environ 3,5 mois après l'audit de référence), le compteur n'a progressé que de 4 à 7 (+3), très en dessous même du palier "Mois 1" du plan.

Nouveaux avis identifiés (vs les 4 d'avril) : Jonathan Kalifat (agence audiovisuelle, accompagnement IT/web), Adrien Desforges (Local Guide, achat caisse enregistreuse pour bar éphémère). L'avis "theo boissié" (lien familial avec le co-fondateur Clément Boissié, déjà signalé comme authentique mais à diluer statistiquement) est toujours présent et pèse encore 1/7 (14%), au lieu de la cible ≤6,6% prévue à 15 avis.

**Impact :** l'avis est un facteur de classement Local Pack de premier plan ; le retard sur ce levier limite la progression malgré le travail éditorial fait sur le site.

**Correction :** relancer la campagne d'avis décrite dans `MODULE_2` (appels aux clients récents, sticker QR, email J+7/SMS J+15), aucune dépendance code.

### M3 : cannibalisation hub / page département toujours active sur la requête la plus importante ("caisse enregistreuse lyon")

**Preuve :** données GSC (90 jours, propriété `https://dcb-technologies.fr/`, actuellement le site V1) :
- Requête "caisse enregistreuse lyon" via `/caisse-enregistreuse/` (hub) : 47 impressions, position moyenne **12,9**.
- La même requête via `/caisse-enregistreuse/rhone/` (page département) : 58 impressions, position moyenne **14,4**.
- CTR = 0% sur les deux pages pour cette requête (0 clic sur 90 jours).

C'est exactement le diagnostic de `pour-clement/brief-pages-departement.md` (§0) : "le foyer de cannibalisation, c'est le HUB qui aspire le volume ... pendant que les pages spécifiques ... sont privées d'impressions". Au 21/07/2026, le hub reste légèrement mieux positionné que la page Rhône dédiée sur la requête la plus importante de toute la zone (109 impressions cumulées sur la période citée par le brief).

**Important : cette mesure porte sur le site V1 actuellement en ligne, pas sur le code V2 audité par ailleurs dans ce rapport.** Les correctifs de contenu/différenciation appliqués à `caisse-enregistreuse/rhone/index.html` (vérifiés dans le code : villes réelles, Givors, Techlid, exemples de restauration lyonnaise, cf. section "Ce qui est sain") ne sont pas encore mesurables puisque le V2 n'est pas déployé. Ce point reste donc un signal de risque à surveiller après mise en ligne, pas une preuve d'échec du travail déjà fait.

**Correction :** aucune action code supplémentaire identifiée ici (le brief département a déjà été exécuté côté contenu) ; à re-mesurer sur GSC 4 à 8 semaines après le déploiement du V2 pour vérifier si la différenciation de contenu a effectivement redistribué le classement vers la page Rhône.

### M4 : page Contact, `LocalBusiness` dupliqué avec un `@id` différent, moins complet, non aligné en format

**Preuve :** `contact/index.html` lignes 437-472 déclare son propre nœud avec `"@id": "https://dcb-technologies.fr/contact/#localbusiness"`, distinct de l'`@id` canonique `https://dcb-technologies.fr/#localbusiness` utilisé partout ailleurs. Différences constatées avec le nœud canonique de l'Accueil :
- Pas de propriété `geo` (présente sur l'Accueil).
- `address` est un tableau de 2 `PostalAddress` (Dardilly + Paray-le-Monial) avec `"addressRegion": "Rhône"` / `"Saône-et-Loire"`, alors que l'Accueil utilise `"addressRegion": "Auvergne-Rhône-Alpes"` pour la même entité : format incohérent d'une page à l'autre pour la même donnée.
- Pas de `sameAs`.

**Impact :** Google voit potentiellement 2 entités `LocalBusiness` distinctes pour la même société (une par `@id`), ce qui dilue plutôt que consolide le signal de knowledge graph. C'est therefore contraire à l'esprit du Sprint 2 du `MASTER_PLAN.md` (refactoring en `@graph` unifié justement pour éviter ce genre de doublon).

**Correction :** faire référencer le nœud canonique `https://dcb-technologies.fr/#localbusiness` depuis la page Contact plutôt que d'en créer un second, ou a minima aligner `addressRegion` et ajouter `geo` + `sameAs` sur le nœud existant. Note : la présence des 2 adresses (Dardilly + Paray) sur cette page reflète correctement la doctrine "deux bases opérationnelles" ; le problème est uniquement la duplication d'`@id` et l'incohérence de format, pas le contenu.

### M5 : citations locales, 0 annuaire soumis à ce jour

**Preuve :** recherche web ce jour pour "DCB Technologies" sur Pages Jaunes, Société.com, Kompass : aucune fiche dédiée à l'entreprise trouvée (seulement des pages de catégorie générique pour la commune de Dardilly). Cohérent avec `pour-clement/MODULE_2_referencement-local.md` (0 citation soumise) et le statut "site pas encore en ligne" du projet.

**Impact :** aucun, tant que le site n'est pas publié (les annuaires renverraient vers une URL non fonctionnelle). Signalé uniquement comme état des lieux, conformément au périmètre demandé.

**Correction :** aucune action avant mise en ligne. Le plan (10 annuaires généralistes + 10 sectoriels, `MODULE_2` Axe 5) est prêt à exécuter en post-lancement.

---

## MINEURS

- **`sameAs` GBP fonctionnel mais fragile** : le 3ᵉ lien `sameAs` de l'Accueil (`https://share.google/x3xb57FXP7zvC2c9l`) a été vérifié aujourd'hui : il redirige bien vers le panneau local de la fiche DCB Technologies (même KGMID `/g/11xvy54gzr` que la fiche auditée). C'est donc **déjà fait**, contrairement à ce que laisse penser la roadmap de `CLAUDE.md` ("Compléter sameAs LocalBusiness avec URL Google Business Profile officielle" listé en item restant). À noter pour mise à jour de la roadmap. Reste fragile : un lien `share.google` est un raccourci, pas l'URL Maps canonique ; préférer l'URL longue `https://www.google.com/maps/place/...` pour la pérennité.
- **Roadmap `CLAUDE.md` légèrement obsolète sur le footer** : l'item "Retirer les liens temporaires footer vers les pages département (tmp-dept-link)" est déjà fait : `js/scripts.js` ne contient plus aucune mention de ville ni de lien vers les pages département dans le footer généré (vérifié lignes 212-275). Le maillage vers les 4 pages département passe uniquement par le hub caisse (desktop + mobile, lignes 861 et 1348 de `caisse-enregistreuse/index.html`), ce qui est correct et suffisant.
- **`openingHoursSpecification` sans samedi** : le JSON-LD (Accueil, Contact) déclare Lundi-Vendredi 08:30-18:30 uniquement. Si DCB ferme réellement le samedi, c'est correct ; sinon à corriger. Non vérifiable depuis le code seul.

---

## Détail par point demandé

### 1. NAP (Nom, Adresse, Téléphone)

**Sain.** Téléphone `04 82 53 05 10` / `+33482530510` : recherché sur l'ensemble du repo, 100% cohérent (237 occurrences au format espacé, 153 en `tel:0482530510`, zéro variante). Les autres motifs numériques détectés par le grep (`06 12 34 56 78`, etc.) sont des `placeholder` de champs de formulaire (`<input placeholder="06 12 34 56 78">`), pas des données NAP.

Adresse : `59 Chemin du Moulin Carron, 69570 Dardilly` sur le JSON-LD de l'Accueil correspond exactement à l'adresse enregistrée au registre légal (SIREN 988632089, vérifié sur `annuaire-entreprises.data.gouv.fr` ce jour). C'est le seul point de comparaison externe fiable disponible (la fiche GBP masque son adresse en mode Service-Area Business). Seule incohérence : le format d'`addressRegion` diffère entre l'Accueil (`"Auvergne-Rhône-Alpes"`) et la page Contact (`"Rhône"` / `"Saône-et-Loire"`), cf. M4.

### 2. LocalBusiness JSON-LD : complétude et pages concernées

Cf. [BLOQUANT] 2 ci-dessus pour le détail technique. En résumé : entité complète sur 3 pages (Accueil, hub Caisse, hub Web), référence non résolvable sur 19 pages (hub IT + 18 sous-pages/pages département), entité dupliquée divergente sur la page Contact. `areaServed` (71/69/01/42) est en revanche présent et correct sur toutes les 26 pages qui en ont besoin.

### 3. Les 4 pages département : conformité doctrine

**Très majoritairement sain**, vérifié directement dans le code contre les exigences de `pour-clement/brief-pages-departement.md` :
- Accents corrigés : "Saint-Étienne" (Loire) et "Écully" (Rhône) bien accentués dans le JSON-LD et le HTML visible.
- `meta name="robots"` avec `max-snippet:-1` présent sur les 4 pages.
- `og:locale` et `og:updated_time` présents sur les 4 pages.
- Titres corrigés : Ain cite "Bourg-en-Bresse", Loire cite "DCB Technologies" en toutes lettres (plus de troncature "DCB"), Rhône cite "Lyon, Givors".
- Rhône : "Givors" et "Techlid" réintégrés dans le corps et le JSON-LD comme demandé.
- Différenciation de contenu réelle et vérifiée (pas de synonymes mécaniques) : angle Lyon urbain/restauration pour le Rhône, Bresse/Pays de Gex frontalier pour l'Ain, Charolais/Brionnais/Paray pour la Saône-et-Loire, Stéphanois/Roannais pour la Loire.
- `provider` de chaque page Service référence le bon `@id` canonique (`https://dcb-technologies.fr/#localbusiness`), conforme à l'exigence du brief, même si la résolution technique de cette référence reste imparfaite (cf. bloquant 2).
- Maillage : le hub `/caisse-enregistreuse/` lie bien les 4 pages département (desktop et mobile), ce qui satisfait la doctrine actuelle ("dept liées depuis le hub"). Les pages département ne sont pas dans la nav (volontaire, conforme).
- Pas de cross-link département-à-département : absent du code, mais ce n'est **pas un défaut** au regard de la doctrine actuelle du projet, qui a explicitement révisé cette exigence du brief initial ("lien dept→dept inutile").

Seul manque réel : l'absence de `LocalBusiness` autonome par page (cf. bloquant 2), qui est la seule recommandation du brief département non appliquée.

### 4. Fiche Google Business Profile

Données relevées en direct aujourd'hui (21/07/2026), fiche KGMID `/g/11xvy54gzr` :

| Champ | Valeur constatée aujourd'hui | Évolution vs audit du 06/04/2026 |
|---|---|---|
| Nom affiché | `DCB technologies` (t minuscule) | Inchangé |
| Catégorie principale | `Assistance et services informatiques` | Inchangée |
| Catégorie(s) secondaire(s) visible(s) | Aucune détectée | Inchangé |
| Note moyenne | 5,0 / 5 | Inchangée |
| Nombre d'avis | 7 | +3 (était 4) |
| Téléphone | 04 82 53 05 10 | Cohérent avec le site |
| Site web | dcb-technologies.fr | Cohérent |
| Horaires | Ouvert, ferme à 18:30 | Cohérent avec JSON-LD (08:30-18:30) |
| Coordonnées GPS | 45.6356277, 4.7311759 (Brignais/Vourles/Chaponost) | **Inchangées, toujours ~20 km de Dardilly** |
| Réponses du propriétaire | 100% des avis avec réponse visible | Maintenu |

Nouveaux avis (depuis avril) : Jonathan Kalifat (site web/IT, agence audiovisuelle), Adrien Desforges (Local Guide, achat caisse enregistreuse). L'avis "theo boissié" (lien familial, authentique) est toujours présent, cf. M2. Cohérence NAP fiche vs site : téléphone et site web identiques ; adresse non comparable (masquée par le mode SAB), seul le pin GPS est comparable et il reste erroné (bloquant 1).

### 5. Requêtes locales GSC : "caisse enregistreuse lyon"

Cf. M3 pour le détail chiffré. Verdict : la page qui devrait ranker (Rhône, `/caisse-enregistreuse/rhone/`) ne rank pas mieux que le hub généraliste sur la requête cible, et aucune des deux pages n'obtient de clic (CTR 0% sur 90 jours). C'est la mesure du site V1 actuellement en ligne : elle documente un problème réel de cannibalisation historique, mais ne permet pas encore de juger si les correctifs V2 (vérifiés dans le code, cf. point 3) auront résolu le problème, puisqu'ils ne sont pas déployés.

### 6. Readiness citations locales (annuaires)

État : 0 citation soumise (vérifié par recherche web ce jour sur Pages Jaunes, Société.com, Kompass : aucune fiche DCB Technologies trouvée). Un plan détaillé et priorisé existe déjà (`pour-clement/MODULE_2_referencement-local.md`, Axe 5 : 10 annuaires généralistes P0, 10 sectoriels P1). Cohérent avec le statut "site pas encore en ligne" : soumettre des annuaires vers une URL non publiée serait prématuré. Pas de plan supplémentaire à produire ici, conformément au périmètre demandé.

---

## Ce qui est SAIN

- **Téléphone 100% cohérent** sur l'ensemble du repo (237+153 occurrences, zéro variante), y compris `llms.txt`.
- **Adresse du siège légal exacte** : `59 Chemin du Moulin Carron, 69570 Dardilly` dans le JSON-LD correspond mot pour mot au registre légal officiel (SIREN 988632089, vérifié `annuaire-entreprises.data.gouv.fr`).
- **`LocalBusiness` canonique de l'Accueil** : `@graph` unifié, complet (adresse, geo, `openingHoursSpecification`, `areaServed` 71/69/01/42, `sameAs` incluant Facebook, Instagram et un lien vers la fiche GBP réelle, `founder` reliant les deux co-fondateurs comme entités `Person`). Conforme au Sprint 2 du `MASTER_PLAN.md`.
- **Hubs Caisse et Web** : inlinent l'objet `LocalBusiness` complet dans leur `Service` JSON-LD tout en conservant le même `@id` que l'Accueil, la bonne pratique technique (contrairement au hub IT et aux 19 autres pages, cf. bloquant 2).
- **Les 4 pages département** : la quasi-totalité des correctifs demandés par `pour-clement/brief-pages-departement.md` ont été appliqués et vérifiés dans le code (accents, meta robots, og tags, titres, villes réelles, Givors/Techlid, différenciation de contenu réelle et non mécanique).
- **Doctrine "pages neutres au département" et "silo Web sans pages département"** : respectées, aucune dérive constatée.
- **Aucune trace de `aggregateRating`/`Review` JSON-LD** sur l'ensemble du site : la règle absolue du projet est respectée partout.
- **Fiche GBP humainement bien tenue** : note parfaite maintenue (5,0/5), 100% des avis avec une réponse du propriétaire, diversité métier réelle dans les avis (caisse, IT, web), téléphone et site web exacts.
- **`sameAs` vers la fiche GBP déjà en place** et vérifié fonctionnel aujourd'hui (contrairement à ce que suggère la roadmap `CLAUDE.md`).
- **Footer** : plus aucune trace de l'ancien atlas de villes ni de `tmp-dept-link` (déjà nettoyé), maillage vers les pages département assuré uniquement par le hub, ce qui est suffisant et évite la duplication signalée sans gain SEO par le projet.

---

**Document produit par :** seo-expert (Sonnet 5)
**Prochaine révision recommandée :** après correction du bug GPS GBP (bloquant 1) et après mise en ligne du V2 + 4-8 semaines de données GSC fraîches (pour re-mesurer M3).
