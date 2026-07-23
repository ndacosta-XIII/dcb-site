# IT-07 : VÉRIFICATION ADVERSARIALE (dégel silo IT)

Auditeur : general-purpose (opus), posture sceptique (chaque constat réfuté sur pièces avant validation).
Date : 23/07/2026.
Source de vérité : worktree `deploy-it` (= branche `deploy` = live https://dcb-technologies.fr/new/, contre-vérifications HTTP GET uniquement).
Méthode : lecture d'octets (BOM), grep tag-stripped + attribut-aware, mesure de longueur unicode (perl), comptage de shells (frontière `class="m-shell"`), curl live sur les 3 images et les slugs.

## Résumé exécutif

10 candidats testés. **6 confirmés, 0 réfuté, 4 requalifiés** (dont B1 BOM et B6 astreinte). En creusant, **3 faux positifs internes aux rapports it-01 et it-05** ont été isolés (voir section dédiée). La contradiction sur les redirections 301 est tranchée en faveur de it-02.

---

## Tableau verdict par constat

| # | Constat candidat | Verdict | Sévérité finale | Preuve |
|---|---|---|---|---|
| B1 | BOM absent sur 4/6 pages IT | **REQUALIFIÉ** | Mineur | Octets confirmés, mais meta charset utf-8 présent + mojibake=0 + servi en HTTP. Impact réel nul (précédent merci/). |
| B2 | 3 images hero absentes + 404 live | **CONFIRMÉ** | Bloquant | Les 3 `.jpg` absents d'`assets/`, 404 live sur les 3, hero LCP dégradé en placeholder générique sur 3 pages. |
| B3 | OG/Twitter absents des 6 pages | **CONFIRMÉ** | Bloquant | og=0 twitter=0 sur les 6 vs 7 og + 4 twitter sur caisse. |
| B4 | LocalBusiness jamais inliné | **CONFIRMÉ** | Majeur | `"provider":{"@id":...}` nu sur les 6, `grep LocalBusiness`=0. (it-01 se contredit, voir plus bas.) |
| B5 | 6/6 meta descriptions hors gabarit | **CONFIRMÉ** | Majeur | Longueurs unicode 179 / 201 / 180 / 179 / 198 / 194 caractères. Régression (4/6 avant). |
| B6 | Astreinte « en option » IT vs « 24h/24 » homepage | **REQUALIFIÉ** | Arbitrage XIII | Tension de fond réelle documentée, décision produit, pas un correctif code. |
| B7 | infogerance-maintenance sans Paray-le-Monial | **CONFIRMÉ** | Majeur | Seule des 6 pages avec `grep Paray`=0 ; liste Roanne à sa place. |
| B8 | FAQ mobiles tronquées sur 4/6 pages | **CONFIRMÉ** | Bloquant | Comptage shells : infogerance 7/5, depannage 8/5, cyber 6/4, materiel 6/4. JSON-LD = desktop. Question astreinte absente du mobile infogerance. |
| M1 | Title hub reprend « dépannage » + « infogérance » | **CONFIRMÉ** | Majeur | Titles exacts extraits, voir ci-dessous. |
| M2 | FAQ identique hub vs infogerance | **CONFIRMÉ** | Mineur | Question identique caractère pour caractère, **réponses différentes** (paraphrase). |
| M3 | Friction : pas de form desktop + sheet mobile désactivée | **CONFIRMÉ (détail requalifié)** | Majeur | waitFab rewire le FAB vers contact sur les 6, `data-sheet`=0 (sheet_opened jamais). Mais emails-pro A un form desktop. |
| M4 | « Mis a jour » sans accent desktop ×6 | **CONFIRMÉ** | Mineur | 1 sans accent (desktop) + 1 avec accent (mobile) par page. |
| M5 | Date 24 avril sur infogerance | **CONFIRMÉ (plus large)** | Mineur | infogerance 24/04 ET hub 23/04, tous deux périmés vs refonte 22/07. |
| M6 | Params `?offre=` morts | **CONFIRMÉ** | Mineur | 3 `?offre=` passés, contact + scripts.js + mobile.js ne lisent aucun param. |
| M7 | Chevauchement emails-pro / hebergement sans lien croisé | **CONFIRMÉ** | Mineur (post-lancement) | 0 lien dans les deux sens, hebergement a 4 mentions « Emails professionnels ». |

---

## Détail des vérifications

### B1 (REQUALIFIÉ mineur) : BOM
Octets des 3 premiers de chaque page : hub et `infogerance-maintenance` = `ef bb bf` (BOM présent) ; `depannage-assistance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration`, `materiel-reseaux` = `3c 21 44` (`<!D`, BOM absent). Le fait est réel. Mais sur ces 4 fichiers : `<meta charset="utf-8">` présent (1 occurrence chacun), mojibake (`Ã©`, `Â`, `�`) = 0, et le contenu est servi en HTTP où c'est la meta charset qui gouverne le rendu. Impact réel de rendu = nul, exactement comme le BOM absent de `merci/index.html` requalifié mineur au tour précédent. **À corriger pour conformité au standard projet (CLAUDE.md), pas un blocage de bascule.**

### B2 (CONFIRMÉ bloquant) : 3 heroes 404
`hero-cybersecurite-sauvegarde.jpg` (cyber L115 desktop + L403 mobile), `hero-outils-collaboratifs.jpg` (emails-pro L190 + L805), `hero-location-it.jpg` (materiel L115 + L613). Aucun présent dans `assets/` (qui n'a que `hero-infogerance.webp`, `hero-maintenance.webp`, `hero-maintenance-it.webp`). Live : les 3 renvoient **404**. Fallback `onerror` vers `placeholder-photo.svg` en place (pas d'icône cassée), mais l'élément hero LCP (`fetchpriority="high"`) affiche un placeholder générique sur 3 des 5 sous-pages stratégiques. Réel.

### B3 (CONFIRMÉ bloquant) : OG/Twitter
`property="og:` = 0 et `name="twitter:` = 0 sur les 6 pages. Référence caisse/boulangerie : 7 OG + 4 Twitter. Partage social (LinkedIn, WhatsApp, Facebook) rendra une carte vide sur tout le silo IT au lancement.

### B4 (CONFIRMÉ majeur) : LocalBusiness non inliné
Les 6 pages : `"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}` seul. `grep LocalBusiness` = 0 sur les 6. Référence caisse/boulangerie L82 : `"provider": {` ouvrant un objet `"@type": "LocalBusiness"` complet (name, url, telephone, email, address). Écart avec le standard 16 pages. Référence `@id` potentiellement pendante si aucune page crawlable ne définit l'entité complète à cet `@id`.

### B5 (CONFIRMÉ majeur) : meta descriptions
Longueurs unicode mesurées : hub 179, infogerance 201, depannage 180, cyber 179, emails-pro 198, materiel 194. Les 6 hors gabarit 140-160, régression vs 4/6 avant dégel. Troncature SERP systématique, perte de l'argument de clôture. SEO qualité, pas un blocage fonctionnel.

### B6 (REQUALIFIÉ arbitrage XIII) : astreinte
Formulations exactes relevées, à trancher par XIII :
- **Homepage** (`index.html:473` et `:1038`) : « Sur site sous 4h 7j/7, astreinte 24h/24 » (présentée comme acquis SAV standard, sans réserve ; formule verrouillée validée cf. ETAT.md acquis).
- **Hub IT** (`maintenance-informatique/index.html:703` desktop, `:1469` mobile) : « Astreinte urgences critiques en option ».
- **infogerance FAQ** (`infogerance-maintenance/index.html:768-772`) : « Une astreinte pour les urgences critiques peut être ajoutée à votre contrat si votre activité l'exige. (...) Si vous n'en avez pas besoin, vous ne la payez pas. »

Tension de fond réelle : le client obtient l'astreinte 24h/24 par défaut (homepage) ou en option payante (IT). La formule canonique « astreinte 24h/24 » n'apparaît pas littéralement dans le silo IT, donc pas de contradiction mot pour mot, mais deux promesses différentes sur ce que le client obtient sans surcoût. Nuance défendable (SAV matériel/caisse inclus vs contrat IT à la carte), mais la homepage l'affirme sans condition. **Décision produit, pas un correctif code.** À arbitrer par XIII : préciser la homepage (astreinte 24h/24 = périmètre SAV matériel) ou aligner l'IT.

### B7 (CONFIRMÉ majeur) : Paray-le-Monial
`grep Paray-le-Monial` : hub 1, infogerance **0**, depannage 1, cyber 1, emails-pro 1, materiel 1. `areaServed` de infogerance liste Lyon, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Roanne, Villefranche : **Roanne occupe la place de Paray**. Seule page du site (silo caisse + IT) à omettre la base technique. Déjà signalé v1 sur l'ancien slug, non corrigé, transporté sous le nouveau nom. Fix d'une ligne JSON-LD.

### B8 (CONFIRMÉ bloquant) : FAQ mobile tronquée
Comptage `<summary>` par shell (frontière `class="m-shell"`), recoupé au JSON-LD FAQPage (= vérité de contenu) :

| Page | Desktop | Mobile | JSON-LD | Manque au mobile |
|---|---|---|---|---|
| hub | 6 | 6 | 6 | Parité OK |
| emails-pro | 7 | 7 | 7 | Parité OK |
| infogerance | 7 | **5** | 7 | « Quelle est la différence avec la maintenance à la panne ? » + **« Êtes-vous disponibles pour les urgences ? » (l'astreinte)** |
| depannage | 8 | **5** | 8 | 3 questions |
| cyber | 6 | **4** | 6 | 2 questions |
| materiel | 6 | **4** | 6 | 2 questions |

Suppression de questions entières (pas une réduction de densité), sur 4 pages. Le JSON-LD FAQPage déclare plus de questions que le DOM mobile n'en montre : **incohérence FAQ JSON-LD vs DOM mobile** (le schéma promet des Q/R invisibles au visiteur mobile). Contrevient à la doctrine parité (la forme raccourcit, pas le fond). Ironie : la question qui explique l'astreinte (B6) disparaît sur mobile infogerance.

### M1 (CONFIRMÉ majeur) : titles
- Hub : `Maintenance Informatique PME : dépannage, infogérance | DCB Technologies`
- infogerance : `Infogérance et Maintenance Informatique Sur Mesure pour PME | DCB Technologies`
- depannage : `Dépannage informatique & assistance utilisateurs | DCB Technologies`

Le hub nomme littéralement « dépannage » et « infogérance », les deux noyaux exacts de ses deux plus grosses sous-pages. Les H1 restent différenciateurs (risque non critique), mais le title est le signal le plus fort. Régression vs v1 (« Intervention <4h »).

### M2 (CONFIRMÉ mineur) : FAQ doublon
Question identique caractère pour caractère (« Qu'est-ce que l'infogérance informatique ? ») sur hub et infogerance. **Les réponses diffèrent** : hub = « supervise vos postes, serveurs et réseaux (...) pour un budget mensuel fixe » ; infogerance = « une équipe de techniciens salariés avec un référent attitré (...) pour un coût mensuel fixe ». Le doublon porte sur la question (ce qui concourt en FAQ rich result), pas sur la réponse. Dilution légère.

### M3 (CONFIRMÉ, détail requalifié) : friction
Mécanisme vérifié dans le script inline de chaque page : `waitFab()` récupère `#fabDevis`, crée un `<a href="../../contact/index.html">` avec les classes/innerHTML du bouton, et remplace le FAB par ce lien (`btn.parentNode.replaceChild(a, btn)`). Présent sur les 6 pages. `data-sheet` = 0 partout : **la bottom-sheet mobile est neutralisée et `sheet_opened` ne se déclenche jamais sur le silo IT** (micro-conversion mobile aveugle). Confirmé.
**Requalification de détail :** it-05 écrit « aucun `<form>` sur les 5 sous-pages ». **Inexact** : `emails-pro-collaboration/index.html:550` porte un `<form id="devis-collab-form" action="../../send.php" method="post">` inline dans le shell desktop. L'asymétrie desktop concerne 4 des 5 sous-pages, pas 5. Le fond du constat (friction supérieure, sheet mobile off) tient.

### M4 (CONFIRMÉ mineur) : accent « Mis à jour »
1 occurrence « Mis a jour » (bloc desktop `d-updated`) + 1 occurrence « Mis à jour » (bloc mobile `m-updated`) par page, sur les 6. Vérifié sur le hub : sans-accent en L1038 (avant m-shell L1050 = desktop), avec-accent en L1755 (mobile). Faute de frappe template desktop répétée 6 fois.

### M5 (CONFIRMÉ, plus large que it-05) : dates périmées
hub « 23 avril 2026 » (datetime 2026-04-23), infogerance « 24 avril 2026 » (2026-04-24), les 4 autres « 22 juillet 2026 ». **Deux pages périmées, pas une** : it-05 ne signalait que infogerance, mais le hub est aussi resté en avril alors que son contenu a été retravaillé au dégel de juillet.

### M6 (CONFIRMÉ mineur) : params morts
materiel-reseaux passe `?offre=lvi-audit`, `?offre=lvi-leasing`, `?offre=lvi-achat`. `contact/index.html` : 0 lecture de param (pas de `URLSearchParams`/`location.search`/`offre`). `scripts.js` : les 2 occurrences « offre » sont des libellés de menu (« Toute notre offre IT/Web »), pas de la lecture d'URL. `mobile.js` : 0. Intention (audit/leasing/achat) perdue au closing. Pré-existant (boulangerie idem).

### M7 (CONFIRMÉ mineur, post-lancement) : chevauchement emails-pro / hebergement
`emails-pro-collaboration` -> `hebergement` : 0 lien. `hebergement` -> `emails-pro-collaboration` : 0 lien. `hebergement` porte pourtant 4 mentions « Emails professionnels ». Deux pages muettes l'une sur l'autre sur le mot-clé « email professionnel ». À distinguer éditorialement (cf. it-03), non bloquant.

---

## Contradiction tranchée : redirections 301

**it-01** : « redirections 301 actives » (PASS). **it-02** : « présentes dans .htaccess mais invérifiables en HTTP sous /new », live = 404 sur les anciens slugs.

**Verdict : it-02 a raison, it-01 est surévalué (faux positif de réassurance).**

Preuves :
- Les 5 règles existent bien dans `.htaccess` (L42-46), forme `Redirect 301 /maintenance-informatique/<ancien-slug>/ /maintenance-informatique/<nouveau-slug>/`, plus le bloc historique `/service-it-360/` (L34-38). Chemins **relatifs à la racine** (commencent par `/`, sans `/new/`).
- Les 5 dossiers anciens slugs sont **supprimés** du worktree (vérifié : tous « absent »).
- Live sous `/new/` : `.../infogerance-pme/` et `.../cloud-securite/` = 404. **Attendu et cohérent** : `Redirect` (mod_alias) matche le début du chemin URL. Sous staging le chemin réel est `/new/maintenance-informatique/infogerance-pme/`, qui ne commence PAS par `/maintenance-informatique/...` : la règle ne se déclenche pas, le dossier est absent, donc 404. Ce n'est pas une règle cassée, c'est une règle **dormante** sous le sous-dossier de staging.

**Ce qui se passera à la bascule racine :** quand le contenu de `deploy` prend la racine du domaine, le chemin d'un ancien slug devient `/maintenance-informatique/infogerance-pme/`, qui **matche** la règle -> **301** vers le nouveau slug. `Redirect` (mod_alias) s'évalue au mapping d'URL, indépendamment de l'existence du fichier : la suppression du dossier n'empêche pas le 301. Les redirections fonctionneront donc **à condition que ce même `.htaccess` soit au docroot** au moment de la bascule (aujourd'hui WordPress occupe la racine avec son propre `.htaccess`).

**Enjeu :** faible. Les anciens slugs n'ont jamais été publics ni indexés (silo noindex depuis sa création), aucune link equity ni position à préserver. Seul risque résiduel : liens internes déjà partagés (devis, emails clients) pointant vers un ancien slug. **Action : tester en direct les 5 anciens slugs immédiatement après la bascule racine pour confirmer le 301 réel.** Pas un bloquant de code.

---

## Faux positifs et contradictions internes aux rapports (à corriger en synthèse)

1. **it-01 se contredit avec it-02 sur LocalBusiness.** it-01 (L58) affirme « Hub IT : 2 blocs (FAQPage + LocalBusiness inliné) ». **Faux** : le hub porte FAQPage + Service + BreadcrumbList + OfferCatalog (types comptés), et `"provider":{"@id":...}` nu, `grep LocalBusiness`=0. Aucun LocalBusiness inliné sur le hub. it-02 (B4) a raison. La ligne it-01 est à ignorer en synthèse.
2. **it-01 « redirections 301 actives (PASS) »** : surévalué, cf. contradiction tranchée ci-dessus. Actuellement 404, actives seulement post-bascule.
3. **it-05 « aucun `<form>` sur les 5 sous-pages »** : inexact, emails-pro-collaboration a un form desktop inline (L550). Le fond du constat A1 (friction, sheet mobile off) reste valide, la formulation « 5 sous-pages sans form » est à corriger en « 4/5 ».
4. **it-05 date périmée** : ne cite que infogerance, alors que le hub est aussi périmé (M5).

---

## Sévérités finales consolidées (pour la synthèse RAPPORT-IT-DEGEL)

**Bloquants réels (3) :** B2 (3 heroes 404), B3 (OG/Twitter absents), B8 (FAQ mobile amputée sur 4 pages).
**Arbitrage XIII (1) :** B6 (astreinte, décision produit).
**Majeurs (4) :** B4 (LocalBusiness non inliné), B5 (meta descriptions), B7 (Paray-le-Monial), M1 (title hub), M3 (friction).
**Mineurs (6) :** B1 (BOM, conformité standard), M2 (FAQ doublon), M4 (accent), M5 (dates), M6 (params morts), M7 (cross-link).

Aucun constat réfuté sur le fond. Deux constats initialement notés « Critique/bloquant » redescendus (B1 mineur, B5/B4/B7 majeurs), un requalifié en décision produit (B6). Zéro tiret cadratin dans ce rapport.
