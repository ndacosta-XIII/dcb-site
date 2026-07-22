# Audit Tracking + Readiness SEA Pré-Lancement

**Dimension :** Tracking (GA4/GTM/consentement), formulaires et clics tel:, comptes Google Ads et Meta Ads, readiness des landers SEA du V2
**Date :** 21/07/2026
**Agent :** ads-auditor (Sonnet 5)
**Périmètre :** repo local `C:\Users\Dacos\Downloads\dcb-site-clean` branche `main` (39 fichiers `index.html`, 35 hors node_modules de test) ; live staging `https://dcb-technologies.fr/new/` (noindex volontaire) ; live racine `https://dcb-technologies.fr` (V1 WordPress, toujours en ligne et indexé) ; GA4 propriété 505863722 ; Google Ads customer 6265603123 ; Meta Ads account 24932449326430977. Accès en LECTURE SEULE : aucune campagne, aucun compte, aucune page modifiés. Une seule action interactive a été faite sur le site en direct pour vérifier le tracking : accepter le bandeau de cookies sur `/new/contact/` (aucune donnée personnelle saisie, aucun formulaire soumis).

Rappel de cadrage : cet audit dit ce qui est vrai AUJOURD'HUI (21/07/2026), pas ce qui était vrai lors de l'audit d'acquisition de juin. Plusieurs points se sont améliorés depuis (formulaire, dataLayer) ; d'autres bloquants sont différents de ceux de juin.

---

## NOTE : 51/100

**Barème (6 catégories) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | Tag GA4/GTM et consentement (code) | 18/20 | GTM-MXK7RX9P présent et identique sur 35/35 pages réelles, Consent Mode v2 correctement implémenté et vérifié en direct (default denied, update granted, tags Google non bloqués) |
| 2 | Key Events GA4 configurés | 2/20 | Zéro key event actif dans la propriété 505863722 aujourd'hui, alors que les événements custom (phone_call_click, generate_lead) arrivent bien dans GA4 |
| 3 | Conversions Google Ads | 5/20 | 10 conversion actions dans le compte, la plupart orphelines ou mal alignées avec les événements réels du V2 ; aucune campagne active ; aucune conversion ne couvre le clic-to-call du site |
| 4 | Pixel/CAPI Meta sur le V2 | 5/15 | Le pixel Meta existe et reçoit des événements réels chaque jour, mais uniquement via le V1 (WordPress) ; zéro trace du pixel sur le code V2, confirmé en code et en direct |
| 5 | Formulaire et clics tel: (branchement réel) | 13/15 | Formulaire contact + bottom-sheet réellement fonctionnels (send.php, anti-flood, honeypot, redirection /merci), tous les clics tel:/mailto/sheet trackés en dataLayer |
| 6 | Readiness landers SEA (dept + seo-sea-local) | 8/10 | Numéro cliquable au-dessus de la ligne de flottaison sur les 5 landers testés, CTA devis présent sur les 4 pages département, noindex du staging correctement isolé côté serveur |

**Total : 51/100.** Le tuyau technique côté code s'est nettement amélioré depuis juin (formulaire réellement branché, dataLayer complet et cohérent, Consent Mode v2 fonctionnel). Mais la couche de configuration business (GA4 key events, conversions Google Ads, pixel Meta) n'a pas suivi : elle référence encore l'ancien site ou des événements qui n'existent pas sur le V2. **Si une campagne est lancée demain sur les pages V2, la quasi-totalité des appels et devis resteront invisibles côté Ads.**

**Bloquants identifiés : 4**

---

## [BLOQUANT] 1 : zéro Key Event configuré dans GA4, alors que les événements arrivent correctement

**Preuve (MCP GA4, propriété `properties/505863722`) :** rapport `eventName` x `keyEvents` sur 90 jours glissants montre `keyEvents = 0` pour TOUTES les lignes, y compris `phone_call_click` (4 occurrences) et `generate_lead` (3 occurrences). Ces deux événements proviennent bien du code V2 : filtrés sur `pagePathPlusQueryString` commençant par `/new/`, on retrouve exactement les mêmes totaux (4 et 3), preuve que ce sont des tests QA sur le staging et que le tuyau fonctionne de bout en bout (le clic déclenche l'event dataLayer, l'event atteint GA4).

Côté code, ces events sont bien émis (`js/scripts.js` lignes 1296-1321) :
- `phone_call_click` sur tout `a[href^="tel:"]` (délégation globale, couvre nav, FAB, bottom-sheet)
- `generate_lead` sur la page `/merci/` (issue de la redirection 303 de `send.php`)
- `sheet_opened` à l'ouverture de la bottom-sheet, `form_start` au premier focus dans un formulaire

**Impact :** aucun de ces événements n'est aujourd'hui marqué comme Key Event dans l'admin GA4. Concrètement : le rapport « Conversions » de GA4 restera vide, et surtout, si un lien Google Ads <-> GA4 doit un jour importer des conversions depuis GA4 (option "Google Analytics 4" dans les conversion actions Google Ads, déjà utilisée par le passé, cf. bloquant 2), il importera des zéros. C'est un correctif de configuration pur (quelques clics dans l'admin GA4), aucune modification de code n'est nécessaire.

---

## [BLOQUANT] 2 : les conversions Google Ads référencent des événements qui n'existent pas sur le V2, et aucune ne couvre le clic-to-call du site

**Preuve (MCP Google Ads, customer `6265603123`, requête `conversion_action`) :** 10 conversion actions au total.

| Nom | Statut | Type | Dernier événement reçu |
|---|---|---|---|
| Formulaire de contact - Envoyer | ENABLED | LEAD_FORM_SUBMIT | jamais (epoch 1970) |
| Envoi de formulaire de lead | REMOVED | WEBPAGE_CODELESS | jamais |
| DCB Technologies (web) close_convert_lead | HIDDEN | GA4 (import auto) | jamais |
| DCB Technologies (web) qualify_lead | HIDDEN | GA4 (import auto) | jamais |
| DCB Technologies (web) purchase | HIDDEN | GA4 (import auto) | jamais |
| DCB Technologies (web) manual_event_SUBMIT_LEAD_FORM | HIDDEN | GA4 (import auto) | jamais |
| Envoi de formulaire caisse enregistreuse | REMOVED | WEBPAGE | jamais |
| Envoi de formulaire de lead caisse enregistreuse | ENABLED | WEBPAGE | 22/01/2026 |
| Calls from ads | ENABLED | AD_CALL | jamais (epoch 1970) |
| Envoi de formulaire de lead du site | ENABLED | WEBPAGE | 08/04/2026 |

Les 4 conversions importées depuis GA4 (`close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`) sont **masquées (HIDDEN)** et pointent vers des noms d'événements GA4 qui n'apparaissent nulle part dans les données réelles de la propriété 505863722 (la liste réelle des eventName est : `page_view`, `session_start`, `first_visit`, `user_engagement`, `scroll`, `phone_call_click`, `generate_lead`, `click`). Même démasquées, elles ne se déclencheraient jamais tant que le code n'émet pas ces noms précis.

La conversion « Calls from ads » (type `AD_CALL`, tracking d'appel natif Google) n'a jamais reçu de données : ce mécanisme suppose un numéro de suivi Google (forwarding number) affiché dans l'annonce ou sur la page, or le site affiche partout le numéro réel en dur (`tel:0482530510`, vérifié sur 39 pages). Il n'existe donc **aucune conversion action qui capte un clic sur le numéro affiché sur le site** (`phone_call_click`), qui est pourtant le mode de conversion caisse prioritaire selon le contexte de la mission.

Les deux seules conversions ENABLED ayant reçu des données réelles (22/01/2026 et 08/04/2026) sont de type `WEBPAGE` (tag de conversion posé sur une URL, pattern typique d'un site WordPress avec plugin de conversion) : elles datent d'avant le lancement du V2 et sont vraisemblablement liées au V1, pas au nouveau `send.php`/`/merci/`.

**Campagnes (requête `campaign`, 30 derniers jours) :** 8 campagnes au total, **toutes REMOVED ou PAUSED**. Zéro campagne ENABLED, coût = 0€, impressions = 0, clics = 0 sur la période. Budgets historiques entre 10€ et 22€/jour (cohérent avec l'enveloppe de 500€/mois évoquée).

**Impact :** si une campagne Google Ads est réactivée ou créée demain sur les landers V2, elle n'a **aucune conversion action prête à l'emploi** : les 4 GA4 sont mortes-nées (bloquant 1 + mismatch de noms), les 2 WEBPAGE actives ciblent probablement l'ancien site, et rien ne couvre l'appel téléphonique du site. Il faut recréer au minimum deux conversions avant tout spend : une conversion GA4-import sur `generate_lead` (après correction du bloquant 1) et une conversion GA4-import ou native sur `phone_call_click`.

---

## [BLOQUANT] 3 : le pixel Meta est actif et reçoit des données tous les jours, mais exclusivement via l'ancien site (V1) ; le V2 n'a aucun pixel

**Preuve code :** recherche de `fbq(`, `connect.facebook.net` et de l'ID de dataset Meta sur l'ensemble du repo V2 (`grep -r` sur `.html`/`.js`) : zéro occurrence en dehors de fichiers de skills Claude non liés au site.

**Preuve MCP Meta Ads (ad account `24932449326430977`) :** dataset `Prospect sur site web` (id `4184805238436735`) actif, `last_fired_time` le 20/07/2026 (hier), volume quotidien réel sur les 7 derniers jours : événements `PageView`, `Lead`, et `Contact` par dizaines sur la semaine (ex. 5 x `Contact` le 17/07, plusieurs `Lead` chaque jour). `server_last_fired_time` (CAPI) figé au 24/03/2026 : le canal serveur a été testé une fois puis abandonné, seul le pixel navigateur tourne encore.

**Preuve en direct (navigateur, page `https://dcb-technologies.fr/new/contact/`) :** la page charge bien le conteneur GTM-MXK7RX9P (confirmé via `window.google_tag_manager`, qui contient une balise GA4 `G-ZR1K13HSW6`), mais après acceptation du bandeau de consentement (donc `ad_storage` et `ad_user_data` passés à `granted`), **aucune requête réseau vers un domaine `facebook.*` n'a été observée**, ni au chargement ni après l'acceptation. Sur la page d'accueil V1 en revanche (`https://dcb-technologies.fr/`), le HTML contient bien un appel `fbq(` direct.

**Conclusion :** le pixel Meta qui alimente le dataset consulté par Meta Ads est branché sur le V1 (probablement un plugin WordPress dédié, indépendant du conteneur GTM partagé), pas sur le conteneur GTM utilisé par le V2. Le conteneur GTM-MXK7RX9P est lui-même partagé entre le V1 (indexé, en ligne à la racine) et le V2 (staging `/new/`, noindex), mais la balise Meta Pixel n'y est apparemment pas configurée, ou pas déclenchée sur les pages/événements du V2.

**Impact :** une campagne Meta pointant vers une page du V2 (dept, seo-sea-local, ou la home une fois live) n'aura **aucun signal Lead/Contact/PageView remontant côté Meta**, ni optimisation d'enchère possible sur les conversions, tant que le pixel n'est pas explicitement ajouté au conteneur GTM du V2 (ou codé en direct) avec les bons triggers sur `generate_lead` / `phone_call_click` / `sheet_opened`.

---

## [BLOQUANT] 4 : deux comptes Google Ads liés à la propriété GA4, un seul accessible et actif

**Preuve (MCP GA4, `list_google_ads_links`) :** la propriété 505863722 a deux liens Google Ads actifs :
- `customer_id 3104358068`, créé le 23/10/2025, `ads_personalization_enabled: false`
- `customer_id 6265603123` (compte DCB Technologies utilisé dans cet audit), créé le 08/12/2025, `ads_personalization_enabled: true`

Le customer `3104358068` **n'apparaît pas** dans la liste des comptes accessibles via le token MCC actuel (`6265603123`, `6175008680` = Alter Perception, `9625269280`, `9798111178`). C'est un lien orphelin ou un compte antérieur non géré par l'accès actuel.

**Impact :** risque de double comptage ou de confusion si ce lien redevient actif un jour (deux comptes Ads important les mêmes conversions GA4), et signal `ads_personalization_enabled` incohérent entre les deux liens. À nettoyer avant tout démarrage de campagne pour éviter d'importer des conversions vers un compte fantôme.

---

## Majeurs

**1. `send.php` n'a pas de continuité de conversion vers Google Ads / Meta au niveau serveur.** Le script (`send.php`, racine du repo) envoie un e-mail et redirige en 303 vers `/merci/`, ce qui déclenche `generate_lead` côté client uniquement. Aucun Enhanced Conversion (email/téléphone hashé) n'est envoyé à Google Ads, aucun CAPI n'est appelé côté serveur pour Meta. Avec un cycle de vente à base d'appels (goulot connu : conversion = appel plus que formulaire), la déperdition de signal est structurelle tant que rien ne remonte l'appel téléphonique lui-même (call tracking) ni le pixel côté serveur.

**2. Aucun suivi d'appel réel (call tracking).** Le numéro affiché est statique (`tel:0482530510`) sur tout le site. `phone_call_click` ne mesure que le clic sur le lien, pas si l'appel a réellement abouti ni sa durée. Sans numéro de suivi (Google forwarding number ou solution tierce), impossible de distinguer un clic accidentel d'un appel qualifié, ni de nourrir la conversion `AD_CALL` déjà créée dans le compte Google Ads (actuellement morte).

**3. Compte publicitaire Meta secondaire sans nom ni moyen de paiement.** Le compte `24848418444809686` (aucun nom, `has_payment_method: false`) existe à côté du compte actif `24932449326430977`. Sans risque immédiat (pas de moyen de paiement), mais source de confusion si une campagne y est créée par erreur.

**4. seo-sea-local n'a pas de formulaire ou de bottom-sheet propre.** Les CTA de la page (`visibilite-web/seo-sea-local/index.html`, lignes 128, 390, 446, 690) renvoient tous vers `../../contact/index.html` plutôt que d'ouvrir une bottom-sheet in-page comme le fait le silo caisse. Ce n'est pas un mismatch de message (le contact fonctionne), mais une étape de clic supplémentaire pour un lander SEA dont l'objectif est justement la conversion directe.

---

## Mineurs

- Les 4 pages département (saone-et-loire, ain, loire, rhone) sont strictement identiques en instrumentation (7 occurrences tel:/data-sheet chacune) : la remarque de juin sur des pages "template" concerne le contenu, pas le tracking, qui est déjà homogène sur les 4.
- `conversion_action.click_through_lookback_window_days` très hétérogène selon les actions (1, 7, 30, 90 jours) sans logique apparente entre les conversions actives ; à harmoniser une fois le ménage fait (bloquant 2).
- Le `<meta name="robots">` codé en dur dans chaque page V2 dit `index, follow` (valeur pensée pour la prod), alors que le staging affiche un contenu potentiellement dupliqué du V1 sous les mêmes URLs relatives. Ce n'est pas un bug : la protection réelle vient du header serveur (voir "Ce qui est sain"), mais le mélange des deux signaux (meta index / header noindex) mérite d'être documenté pour ne pas être "corrigé" par erreur avant le lancement.

---

## Ce qui est SAIN

- **Le tag GTM-MXK7RX9P est présent et strictement identique sur les 35 pages réelles du V2** (vérifié par recherche exhaustive, aucune divergence d'ID, `noscript` présent sur les 35 mêmes pages).
- **Consent Mode v2 est correctement implémenté et vérifié en fonctionnement réel** : `gtag('consent','default', {...denied...})` posé avant le chargement de GTM (`index.html` lignes 7-8, répliqué identiquement sur toutes les pages), bandeau UI avec Accepter/Refuser (`js/scripts.js` lignes 1323-1358), et test en direct confirmant que GTM se charge malgré le refus par défaut (pattern Advanced, pas Basic) et que le passage à `granted` fonctionne (`window.dataLayer` contient bien l'event `consent` puis `gtm.load`).
- **Le formulaire de contact et la bottom-sheet sont réellement fonctionnels aujourd'hui**, contrairement au constat de juin : `send.php` (racine du repo) traite un vrai POST, avec anti-flood par IP (5 envois/10 min), honeypot anti-bot, validation d'email, en-têtes anti-injection, et redirection 303 vers `/merci/` qui déclenche `generate_lead`. Confirmé vivant en direct : `document.getElementById('contact-form').action` se résout en `https://dcb-technologies.fr/new/send.php`.
- **Tous les clics tel:/mailto/sheet sont trackés par délégation d'événement unique** (`js/scripts.js` lignes 1296-1316), ce qui couvre aussi le chrome injecté au runtime (FAB, bottom-sheet mobile) sans dépendre d'un binding par page.
- **La protection anti-indexation du staging fonctionne réellement**, pas seulement en apparence : le header HTTP `X-Robots-Tag: noindex, nofollow, noarchive` est bien envoyé par le serveur sur `/new/*` (vérifié par une requête `fetch()` en direct sur `/new/contact/`), ce qui prime sur le `<meta name="robots">` de la page qui dit `index, follow`. Le `<link rel="canonical">` de chaque page `/new/` pointe déjà vers l'URL de production finale (`https://dcb-technologies.fr/...` sans `/new/`), donc aucun changement n'est requis dans le HTML au moment du lancement.
- **Numéro de téléphone cliquable au-dessus de la ligne de flottaison** sur les 5 landers testés (4 pages département + seo-sea-local) : présent en dur dans le hero HTML (pas seulement injecté par JS), donc visible même avant exécution du JavaScript.
- **Le compte Google Ads (`6265603123`, "DCB TECHNOLOGIES") est le bon compte réel**, non-manager, non test, devise EUR, fuseau Europe/Paris.

---

## Ce qu'il faut faire avant tout lancement de campagne (ordre d'impact)

1. Marquer `generate_lead` et `phone_call_click` comme Key Events dans l'admin GA4 (propriété 505863722). Gratuit, quelques minutes, débloque tout le reste.
2. Dans Google Ads, créer/démasquer deux conversions GA4-import propres sur ces deux Key Events (une fois l'étape 1 faite), et désactiver ou supprimer les 4 conversions GA4 mortes (`close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`) ainsi que les conversions `REMOVED`/orphelines pour ne garder qu'un jeu propre.
3. Décider d'un numéro de suivi d'appel (Google forwarding number a minima sur les annonces, idéalement aussi affiché sur les landers SEA) pour rendre `AD_CALL` vivant et mesurer la durée réelle des appels.
4. Ajouter le pixel Meta (et idéalement une CAPI) au conteneur GTM du V2, avec des triggers sur `generate_lead`, `phone_call_click`, `sheet_opened`, avant toute réactivation de la campagne Meta `Campagne prospects`.
5. Nettoyer le lien GA4 <-> Google Ads orphelin (`customer_id 3104358068`) et le compte Meta secondaire sans nom.
6. Optionnel mais utile pour un lander SEA : donner à seo-sea-local sa propre bottom-sheet plutôt qu'un renvoi vers `/contact/`.
