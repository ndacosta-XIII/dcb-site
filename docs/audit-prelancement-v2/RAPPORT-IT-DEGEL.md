# RAPPORT DE SYNTHÈSE : AUDIT DÉGEL SILO IT

Source : docs/audit-prelancement-v2/it-01-qa.md à it-06-design.md, vérifiés par it-07-verification.md (vérité finale sur les sévérités, cf. ETAT.md). Périmètre : `maintenance-informatique/` (hub + 5 sous-pages, nouveaux slugs : infogerance-maintenance, depannage-assistance, cybersecurite-sauvegarde, emails-pro-collaboration, materiel-reseaux). Source auditée : worktree `deploy-it` (= branche deploy = live https://dcb-technologies.fr/new/).

---

## 1. Verdict

**Note globale silo IT : 74/100** (moyenne arrondie des 6 dimensions : 72, 58, 71, 68, 82, 90 = 441/6 = 73,5).

Verdict d'alignement : le silo IT dégelé n'est pas encore au niveau du standard du reste du site. Le reste du site (hors IT) est audité à 85/100 (RAPPORT-FINAL.md) ; l'écart de 11 points n'est pas cosmétique, il porte sur des points déjà résolus ailleurs (OG/Twitter, LocalBusiness inliné, parité mobile) que le dégel IT n'a pas rattrapés, alors que ce sont exactement les points que la checklist du dégel demandait de traiter (ETAT.md, référence RAPPORT-FINAL.md section 6).

**Ce que Clément a réussi :**
- Grammaire visuelle (90/100, it-06) : les 5 paires accent/accent-dark migrées à l'identique depuis les anciens slugs, un seul accent dominant par page, CTA final v3 piloté à 100% par variables CSS (mieux que la référence restaurant, qui a une dérive en dur), motion gardée par `prefers-reduced-motion` partout, zéro bloquant design.
- Formulaire unifié sur `send.php` (it-05) : le point noir historique du silo (formulaire factice, non branché en v1) est résolu. `send.php` est réel, sécurisé (honeypot, rate-limit, anti header-injection), en ligne, avec `/merci` fonctionnel et `generate_lead` câblé au tracking GTM.
- Zéro em dash sur les 6 pages (it-01).
- Zéro résidu Allier : le lot de commits ajout/retrait de l'Allier a été intégralement purgé, les 6 blocs `areaServed` listent bien 71/69/01/42 (it-04).
- Redirections 301 des anciens slugs anticipées dans `.htaccess`, dormantes sous `/new/` mais correctement écrites pour la bascule racine (tranché en faveur de it-02, cf. section 7).
- « Sur devis » généralisé, conforme à la doctrine : zéro prix factice, la seule grille tarifaire (materiel-reseaux) affiche un audit gratuit réel à 0€ et deux offres « sur devis ».

**Ce qui manque :** aucun des points techniques de la checklist du dégel n'est réellement traité (OG/Twitter, LocalBusiness inliné, gabarit des meta descriptions), et la refonte a introduit 3 défauts nouveaux qui n'existaient pas dans le silo gelé de la v1 (astreinte incohérente, FAQ mobile tronquée, accent perdu sur « Mis à jour »), en plus de ne pas avoir corrigé un défaut déjà signalé au v1 (Paray-le-Monial absent d'infogerance-maintenance).

---

## 2. Tableau des 6 dimensions

| # | Dimension | Agent | Note /100 | Bloquants | Rapport source |
|---|---|---|---|---|---|
| 1 | QA mécanique | site-qa | 72 | BOM (requalifié mineur), assets (confirmé) | it-01-qa.md |
| 2 | SEO technique + intégration | seo-expert | 58 | OG/Twitter, LocalBusiness, meta descriptions, image hero cassée | it-02-seo.md |
| 3 | Cannibalisation | seo-expert | 71 | Aucun | it-03-cannibalisation.md |
| 4 | Cohérence claims + parité mobile | general-purpose | 68 | Astreinte, Paray-le-Monial, FAQ mobile, accent | it-04-coherence.md |
| 5 | CRO + formulaires | cro-expert | 82 | Aucun | it-05-cro-formulaires.md |
| 6 | Design / grammaire visuelle | design-reviewer | 90 | Aucun | it-06-design.md |
| V | Vérification adversariale | general-purpose | : | 3 confirmés, 1 arbitrage XIII | it-07-verification.md |

Le plancher de la note globale est la dimension SEO technique (58/100) : c'est la seule dimension où le dégel n'a quasiment rien corrigé de la checklist promise. La dimension design (90/100) est la plus solide.

---

## 3. Les 3 bloquants confirmés (sévérités selon it-07)

### B2 : 3 images hero absentes, 404 en live

**Constat.** `hero-cybersecurite-sauvegarde.jpg`, `hero-outils-collaboratifs.jpg` (emails-pro-collaboration), `hero-location-it.jpg` (materiel-reseaux) sont référencées mais absentes d'`assets/`.

**Preuve.** `assets/` ne contient que `hero-infogerance.webp` et `hero-maintenance.webp`/`hero-maintenance-it.webp`. Les 3 fichiers `.jpg` attendus sont introuvables. Vérification live : les 3 URLs renvoient 404 (`it-07`, section B2 ; `it-02`, section 8). Le fallback `onerror` bascule proprement vers `placeholder-photo.svg` (pas d'icône cassée visible), mais l'élément hero LCP (`fetchpriority="high"`) affiche un placeholder générique sur 3 des 5 sous-pages stratégiques du silo.

**Correction proposée.** Fournir les 3 vraies photos (Clément) ou, en attendant, réutiliser une image existante équivalente (`hero-maintenance.webp`) en fallback temporaire pour éviter le placeholder générique au lancement.

**Agent responsable.** `front-builder` (branchement de l'asset de secours + vérification des chemins) ; livraison finale des photos hors périmètre agent (attente client).

### B3 : Open Graph / Twitter Card absents des 6 pages

**Constat.** Aucune balise `og:` ni `twitter:` sur les 6 pages du silo IT, régression totale par rapport au reste du site.

**Preuve.** `grep -c "og:"` = 0 et `grep -c "twitter:"` = 0 sur les 6 fichiers. Le standard silo caisse porte 7 OG + 4 Twitter par page (référence `boulangerie/index.html:11-21`). Aucune image OG dédiée dans `assets/` pour le silo IT (`og-maintenance-informatique*.jpg` inexistant), alors que tous les autres silos en ont une (`og-caisse-enregistreuse.jpg`, `og-visibilite-web.jpg`, `og-boulangerie.jpg`).

**Impact.** Tout partage social (LinkedIn, WhatsApp, Facebook) du silo IT au lancement affichera une carte vide.

**Correction proposée.** Ajouter les 8 balises OG/Twitter standard sur les 6 pages (titre, description, image, url, type) et produire au moins 1 image OG dédiée au hub IT (à défaut, une image partagée pour les 5 sous-pages en attendant des visuels dédiés).

**Agent responsable.** `seo-expert` (balises) en coordination avec `front-builder` (intégration HTML) ; création des visuels OG hors périmètre agent si photos client nécessaires.

### B8 : FAQ mobiles amputées sur 4 pages sur 6, incohérence JSON-LD vs DOM

**Constat.** Le nombre de questions FAQ visibles en `.m-shell` est inférieur au nombre de questions du JSON-LD FAQPage (= vérité de contenu, identique au `.d-shell`) sur infogerance-maintenance, depannage-assistance, cybersecurite-sauvegarde et materiel-reseaux. Ce n'est pas une réduction de densité, mais la suppression pure de questions entières.

**Preuve (comptage `<summary>` par shell, it-07 recoupé avec it-04) :**

| Page | Desktop | Mobile | JSON-LD | Manque au mobile |
|---|---|---|---|---|
| hub | 6 | 6 | 6 | Parité OK |
| emails-pro-collaboration | 7 | 7 | 7 | Parité OK |
| infogerance-maintenance | 7 | 5 | 7 | « Quelle est la différence avec la maintenance à la panne ? » + « Êtes-vous disponibles pour les urgences ? » (la question qui explique l'astreinte, cf. section 4) |
| depannage-assistance | 8 | 5 | 8 | 3 questions |
| cybersecurite-sauvegarde | 6 | 4 | 6 | 2 questions |
| materiel-reseaux | 6 | 4 | 6 | 2 questions |

Le JSON-LD FAQPage déclare donc plus de questions que le DOM mobile n'en montre : incohérence FAQ JSON-LD vs DOM mobile, contraire à la doctrine parité du projet (« la forme raccourcit, pas le fond »). Ironie relevée par it-07 : la question qui explique l'astreinte disparaît précisément sur mobile infogerance-maintenance, alors que c'est le point le plus sensible du silo (cf. arbitrage XIII ci-dessous).

**Correction proposée.** Dupliquer côté `.m-shell` les questions manquantes des 4 pages (contenu déjà rédigé côté desktop, aucune réécriture nécessaire).

**Agent responsable.** `mobile-builder`.

---

## 4. L'arbitrage XIII : B6, astreinte « en option » vs « astreinte 24h/24 »

**Formulations exactes relevées :**

- **Homepage** (`index.html:473` et `:1038`) : « Sur site sous 4h 7j/7, astreinte 24h/24 ». Présentée comme un acquis SAV standard, sans réserve (formule verrouillée validée, cf. ETAT.md « Acquis »).
- **Hub IT** (`maintenance-informatique/index.html:703` desktop, `:1469` mobile) : « Astreinte urgences critiques en option ».
- **FAQ infogerance-maintenance** (`infogerance-maintenance/index.html:768-772`) : « Une astreinte pour les urgences critiques peut être ajoutée à votre contrat si votre activité l'exige. (...) Si vous n'en avez pas besoin, vous ne la payez pas. »

**La tension.** La formule canonique « astreinte 24h/24 » n'apparaît pas littéralement dans le silo IT : il n'y a donc pas de contradiction mot pour mot. Mais il y a une contradiction de fond sur ce que le client obtient sans surcoût : la homepage promet l'astreinte 24h/24 sans condition, tandis que le silo IT la présente comme une option payante ajoutable au contrat. Un visiteur qui compare les deux pages reçoit deux promesses différentes sur le même point de preuve SAV. Une lecture défendable existe (SAV matériel/caisse inclus par défaut vs contrat IT à la carte), mais elle n'est écrite nulle part explicitement pour lever l'ambiguïté.

**Les 2 options de résolution (sans trancher) :**

1. **Préciser la homepage** : ajouter une réserve de périmètre à la formule homepage (ex. « astreinte 24h/24 » = SAV matériel/caisse, à distinguer explicitement du contrat IT à la carte). Conserve la promesse commerciale forte de la homepage, clarifie qu'elle ne s'étend pas telle quelle au silo IT.
2. **Aligner le silo IT** : retirer la mention « en option » si l'astreinte peut en réalité être incluse par défaut comme le reste du site le laisse entendre, ou a minima présenter l'option comme une extension au-delà d'un socle déjà couvert plutôt que comme un ajout payant de zéro.

Décision produit, pas un correctif de code : à trancher par XIII avant d'assigner la correction à un agent (probablement `copywriter-site` une fois l'option choisie).

---

## 5. Majeurs confirmés/requalifiés

### B4 : LocalBusiness jamais inliné (standard 16 pages)
**Constat.** Les 6 pages posent `"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}`, une référence nue, jamais l'objet `LocalBusiness` complet. Le standard appliqué sur 16 pages du reste du site (commit f390257) inline l'objet complet (`@type`, `name`, `telephone`, `email`, `address`) en plus de l'`@id` (référence `boulangerie/index.html:82-96`). `grep LocalBusiness` = 0 sur les 6 pages IT.
**Correction proposée.** Inliner l'objet `LocalBusiness` complet dans le `provider` des 6 pages, à l'identique du standard silo caisse.
**Agent responsable.** `seo-expert`.

### B5 : meta descriptions hors gabarit sur 6/6 pages
**Constat.** Longueurs unicode mesurées : hub 179, infogerance-maintenance 201, depannage-assistance 180, cybersecurite-sauvegarde 179, emails-pro-collaboration 198, materiel-reseaux 194 caractères. Le gabarit du site est 140-160 caractères. Régression par rapport à l'état pré-dégel (4/6 hors gabarit avant, 6/6 après). Troncature SERP systématique, perte de l'argument de clôture (devis gratuit, zone 71/69/01/42).
**Correction proposée.** Raccourcir les 6 meta descriptions dans le gabarit 140-160 caractères en conservant l'argument de clôture.
**Agent responsable.** `seo-expert` (calibrage) en lien avec `copywriter-site` (reformulation).

### B7 : areaServed d'infogerance-maintenance sans Paray-le-Monial
**Constat.** Seule page du site (silo caisse + silo IT) à omettre la base technique de Paray-le-Monial dans son `areaServed`. La liste porte Lyon, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Roanne, Villefranche-sur-Saône : Roanne occupe la place de Paray. Défaut déjà signalé au v1 sur l'ancien slug `infogerance-pme`, non corrigé, transporté tel quel sous le nouveau nom.
**Correction proposée.** Ajouter `{"@type":"City","name":"Paray-le-Monial"}` dans le tableau `areaServed`, à l'identique des 5 autres pages du silo.
**Agent responsable.** `seo-expert`.

### M1 : title du hub reprenant « dépannage » + « infogérance »
**Constat.** Title du hub : « Maintenance Informatique PME : dépannage, infogérance | DCB Technologies ». Il nomme littéralement les deux noyaux exacts de ses deux plus grosses sous-pages (« Infogérance et Maintenance Informatique Sur Mesure pour PME », « Dépannage informatique & assistance utilisateurs »). Régression par rapport au v1, où le title hub était « Maintenance Informatique PME : Intervention <4h » (mot-clé de service absent). Les H1 restent différenciateurs (risque non critique), mais le title est le signal le plus fort pour le moteur.
**Correction proposée.** Recentrer le title du hub sur un rôle d'agrégateur générique (ex. reprendre l'esprit du H1, ou retirer un des deux mots pour casser la paire exacte reprise par les sous-pages).
**Agent responsable.** `seo-expert` (calibrage), `copywriter-site` (reformulation).

### M3 : friction du parcours (requalifié en détail par it-07)
**Constat.** Sur desktop, aucune des 5 sous-pages n'a de formulaire inline sauf `emails-pro-collaboration` (`<form id="devis-collab-form" action="../../send.php" method="post">`, L550) : l'asymétrie concerne 4 des 5 sous-pages, pas 5 (correction de la formulation initiale d'it-05, cf. section 7). Sur mobile, un script inline (`waitFab`) présent sur les 6 pages remplace le FAB `fabDevis` par un simple lien vers `../../contact/index.html`, désactivant la bottom-sheet devis. Conséquence : `data-sheet` = 0 partout, `sheet_opened` ne se déclenche jamais sur le silo IT, la micro-conversion mobile est aveugle. Le silo IT, pilier prioritaire V2 à pousser, offre ainsi le parcours le plus friction du site.
**Correction proposée.** Mobile : retirer le script `waitFab`, rebrancher le FAB sur la bottom-sheet devis standard avec un `metier` IT dédié. Desktop : intégrer le pattern `#devis-form` inline du silo caisse au moins sur le hub et infogerance-maintenance, sans en inventer un nouveau (réutiliser `docs/front-library.md`).
**Agent responsable.** `mobile-builder` (mobile) + `front-builder` (desktop), ne pas toucher à `send.php` ni `/merci`.

---

## 6. Mineurs

- **B1 (BOM, requalifié mineur).** 4 fichiers sur 6 (cybersecurite-sauvegarde, depannage-assistance, emails-pro-collaboration, materiel-reseaux) n'ont pas le BOM UTF-8 (`EF BB BF`). Meta charset UTF-8 présente, mojibake = 0, servi correctement en HTTP : impact de rendu nul. À corriger par hygiène et conformité au standard du projet (CLAUDE.md), pas un blocage de bascule. Agent : correction mécanique, `site-qa` ou copie binaire ciblée.
- **M2 : FAQ dupliquée hub/infogerance-maintenance.** Question identique caractère pour caractère (« Qu'est-ce que l'infogérance informatique ? ») sur les deux pages ; les réponses diffèrent (paraphrase). Dilution légère pour un featured snippet. Correction : reformuler la question du hub pour rester au niveau agrégateur.
- **M4 : accent « Mis a jour » sans accent grave côté desktop, sur les 6 pages.** Faute de frappe ponctuelle dans le template desktop du bloc date (`<time class="d-updated">`), répétée à l'identique sur les 6 pages. La version mobile est correcte partout. Correction triviale : ajouter l'accent grave.
- **M5 : dates périmées.** infogerance-maintenance affiche « 24 avril 2026 » ET le hub affiche « 23 avril 2026 », alors que les 4 autres sous-pages affichent « 22 juillet 2026 » (date de la refonte). Deux pages à resynchroniser, pas une seule (élargissement du constat initial d'it-05 qui ne citait qu'infogerance-maintenance).
- **M6 : paramètres `?offre=` morts.** materiel-reseaux passe `?offre=lvi-audit`, `?offre=lvi-leasing`, `?offre=lvi-achat` vers `contact/index.html`, qui ne lit aucun paramètre d'URL (`scripts.js` et `mobile.js` non plus). L'intention (audit/leasing/achat) est perdue au closing. Pré-existant (boulangerie fait de même), non spécifique à l'IT.
- **M7 : chevauchement emails-pro-collaboration / hebergement sans lien croisé.** 0 lien dans les deux sens alors que `hebergement` porte 4 mentions « Emails professionnels » et une FAQ dédiée. À distinguer éditorialement post-lancement (silo Web vs IT).

---

## 7. Faux positifs éliminés par la vérification

C'est la valeur ajoutée de la méthode adversariale (it-07) : trois affirmations internes aux rapports sources se sont révélées fausses ou surévaluées à la vérification.

1. **it-01 affirme à tort que le hub porte « FAQPage + LocalBusiness inliné ».** Faux : le hub porte FAQPage + Service + BreadcrumbList + OfferCatalog, et `"provider":{"@id":...}` reste une référence nue. `grep LocalBusiness` = 0 sur le hub comme sur les 5 sous-pages. C'est it-02 (B4) qui a raison. La ligne it-01 correspondante est à ignorer.
2. **it-01 déclare les redirections 301 « actives » (PASS).** Surévalué. Elles existent bien dans `.htaccess` mais ciblent des chemins racine sans le préfixe `/new/` : sous le staging actuel, elles sont dormantes (404 constaté en live sur les anciens slugs), pas cassées. Elles s'activeront à la bascule racine, quand `deploy` prendra le docroot avec ce même `.htaccess`. Enjeu SEO faible (silo jamais public ni indexé), mais à tester en direct au moment de la bascule.
3. **it-05 affirme « aucun `<form>` sur les 5 sous-pages ».** Inexact : `emails-pro-collaboration/index.html:550` porte un `<form id="devis-collab-form" action="../../send.php" method="post">` inline en desktop. L'asymétrie de friction (M3) concerne 4 des 5 sous-pages, pas 5. Le fond du constat (friction supérieure, bottom-sheet mobile désactivée) reste valide.
4. **it-05 ne cite qu'infogerance-maintenance pour la date périmée.** Le hub est également resté en avril alors que son contenu a été retravaillé au dégel de juillet (cf. M5, élargi par it-07).

---

## 8. Plan de correction ordonné

**Préalable de process, avant toute correction :** le travail de Clément vit uniquement sur la branche `deploy` (commits d6cb24b, 131c562, fd64274, 795fc36). Le `main` local ne le contient pas. Il faut rapatrier `deploy` dans `main` (merge ou rebase, à discuter selon la politique du repo) avant d'ouvrir la moindre correction : appliquer les correctifs directement sur `main` sans ce rapatriement créerait une divergence entre les deux branches et un conflit certain à la prochaine synchronisation avec Clément.

**Lot 1 : bloquants (avant toute bascule ou communication publique du silo IT).**
- B2 : `front-builder` (fallback hero temporaire, en attendant les 3 photos).
- B3 : `seo-expert` (balises OG/Twitter) + `front-builder` (intégration).
- B8 : `mobile-builder` (parité FAQ mobile, 4 pages).

**Lot 2 : majeurs mécaniques (correctifs de code sans décision produit).**
- B4 : `seo-expert` (LocalBusiness inliné, 6 pages).
- B5 : `seo-expert` + `copywriter-site` (recalibrage 6 meta descriptions).
- B7 : `seo-expert` (Paray-le-Monial dans areaServed d'infogerance-maintenance).
- M1 : `seo-expert` + `copywriter-site` (title du hub).
- M3 : `mobile-builder` + `front-builder` (friction desktop/mobile).
- Mineurs B1, M2, M4, M5, M6 : lot mécanique groupé, agents front-builder/seo-expert/copywriter-site selon le point, à faire passer par `site-qa` avant commit.

**Arbitrage XIII (bloque le lot 2 sur ce point précis) :** trancher B6 (astreinte) avant d'assigner la correction texte à `copywriter-site`. Sans arbitrage, ne pas toucher au texte de l'astreinte : les deux options proposées en section 4 ont des implications produit différentes.

**Lot 3 : post-lancement (non bloquant).** M7 (cross-link emails-pro/hebergement), cross-sell inter-piliers IT/Web (chantier déjà identifié en roadmap CLAUDE.md), vérification réelle des 5 redirections 301 en HTTP au moment de la bascule racine.

**Avant tout commit multi-fichiers de ce plan : passage `site-qa` obligatoire** (grep em dash, cache-bust, BOM, liens, JSON-LD), conformément à la règle d'orchestration CLAUDE.md.
