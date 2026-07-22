# Vérification adversariale des bloquants comptes externes

**Objectif :** contre-vérifier par re-mesure indépendante (MCP GA4, MCP Google Ads, MCP Meta Ads, navigateur en direct) les 4 bloquants issus de `07-tracking-ads.md` et `05-seo-local-gbp.md`. Aucune modification de compte, lecture seule.

**Date :** 21/07/2026
**Méthode :** requêtes MCP relancées indépendamment des rapports d'origine (nouvelles requêtes GAQL, nouveaux appels dataset Meta, nouvelle navigation live sur la fiche GBP via une méthode différente de celle du rapport source).

---

## Tableau de synthèse

| # | Bloquant (source) | Verdict | Donnée re-mesurée |
|---|---|---|---|
| 1 | GA4 : zéro Key Event actif, alors que les événements arrivent (07-tracking-ads) | CONFIRMÉ | Rapport `eventName` x `isKeyEvent` sur 30 jours glissants (propriété 505863722) : `isKeyEvent = (not set)` sur les 7 lignes, y compris `phone_call_click` (4) et `generate_lead` (3), comptes identiques à ceux du rapport d'origine (90 jours). Aucun Key Event actif. |
| 2a | Google Ads : 4 conversions GA4 référencent des noms d'événements inexistants | CONFIRMÉ | Requête `conversion_action.google_analytics_4_settings.event_name` : `close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`, statut HIDDEN, `metrics.all_conversions = 0` pour les 4. Aucun ne correspond à un `eventName` réel de la propriété GA4 (liste réelle : page_view, session_start, first_visit, user_engagement, scroll, phone_call_click, generate_lead, click). |
| 2b | Google Ads : zéro conversion action sur le clic-to-call du site | NUANCÉ | Aucune conversion action ne référence l'événement GA4 `phone_call_click` : confirmé. Mais la conversion `Calls from ads` (AD_CALL) n'est pas totalement morte comme l'indiquait le tableau du rapport source ("jamais, epoch 1970") : `metrics.conversion_last_conversion_date = 2026-01-14`, `metrics.all_conversions = 2` (cumul historique). Ces 2 conversions viennent du mécanisme natif Google (numéro de suivi sur l'annonce), pas d'un clic sur le numéro affiché en dur sur le site. Le "jamais" du rapport portait sur `conversion_last_received_request_date_time` (upload API), pas sur `conversion_last_conversion_date` : la conclusion opérationnelle reste vraie (rien ne capte le clic sur le numéro affiché du site) mais l'action n'est pas 100% inerte historiquement. |
| 2c | Google Ads : toutes les campagnes PAUSED/REMOVED | CONFIRMÉ | 8 campagnes interrogées directement : 3 REMOVED, 5 PAUSED, zéro ENABLED. Coût, impressions, clics = 0 sur les 30 derniers jours pour les 8. |
| 3 | Meta : pixel actif uniquement via le V1, zéro trace sur le V2 | CONFIRMÉ | Dataset `4184805238436735` : `last_fired_time` re-mesuré à aujourd'hui 21/07/2026 09:26 (plus récent que le rapport source, confirme l'activité continue), `server_last_fired_time` toujours figé au 24/03/2026 (CAPI abandonné). Répartition événements 7 jours : PageView/Lead/Contact quotidiens, pic de 5 Contact le 17/07 (identique au rapport source). Source des événements (agrégation host/URL) : exclusivement `dcb-technologies.fr` racine, jamais `/new/`. `ads_get_dataset_quality` ne renvoie qu'un canal `web`, aucun canal serveur actif. Grep frais sur le repo V2 (`fbq\(`, `connect.facebook.net`, `facebook.com/tr`) : zéro occurrence. |
| 4 | GBP : pin GPS à ~20 km de l'adresse réelle | CONFIRMÉ | Re-vérification par une méthode différente de celle du rapport source : résolution du CID de la fiche (`1597326073311273094`, extrait du panneau de connaissance Google Search) vers `google.com/maps?cid=...`, qui redirige vers les coordonnées `45.6356277, 4.7311759` (même KGMID `/g/11xvy54gzr`). Comparé aux coordonnées réelles utilisées dans le JSON-LD du site (`45.8136, 4.7553`, Dardilly) : distance calculée ≈ 19,8 km, soit la confirmation quasi exacte du "~20 km" annoncé. Cohérence NAP re-vérifiée au passage sur le panneau Google Search : nom `DCB technologies` (t minuscule), catégorie unique `Assistance et services informatiques`, 7 avis, note 5,0/5, téléphone `04 82 53 05 10` identique au site. |

---

## Détail des re-mesures

### 1. GA4 Key Events (CONFIRMÉ)

Requête `run_report` sur `properties/505863722`, dimensions `eventName` + `isKeyEvent`, métrique `eventCount`, période 30 jours glissants :

| eventName | isKeyEvent | eventCount |
|---|---|---|
| page_view | (not set) | 73 |
| session_start | (not set) | 60 |
| first_visit | (not set) | 56 |
| user_engagement | (not set) | 41 |
| scroll | (not set) | 10 |
| phone_call_click | (not set) | 4 |
| generate_lead | (not set) | 3 |

Zéro ligne avec `isKeyEvent = true`. Les comptes de `phone_call_click` (4) et `generate_lead` (3) sont strictement identiques à ceux cités dans le rapport source sur une fenêtre de 90 jours : toute l'activité de ces deux événements est donc concentrée dans les 30 derniers jours. Le tuyau fonctionne (les événements arrivent), la configuration Key Event reste à zéro. Bloquant confirmé sans nuance.

### 2. Google Ads (3 sous-points vérifiés séparément)

**a) Conversions GA4 mortes-nées.** Requête directe sur `conversion_action.google_analytics_4_settings.event_name` : les 4 actions `HIDDEN` référencent bien `close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`, avec `metrics.all_conversions = 0` chacune. Ces noms n'apparaissent dans aucune ligne du rapport GA4 ci-dessus. Confirmé.

**b) Clic-to-call non couvert.** Champ par champ sur les 10 conversion actions : aucune ne référence `phone_call_click`. La conversion `Calls from ads` (AD_CALL, ENABLED) a été creusée spécifiquement car son mécanisme (numéro de suivi Google sur l'annonce) est le seul candidat plausible. Résultat : `metrics.conversion_last_conversion_date = 2026-01-14`, `metrics.all_conversions = 2` sur toute la période interrogeable. C'est une conversion réelle, mais elle ne mesure pas un clic sur le numéro affiché du site (le site affiche `tel:0482530510` en dur, jamais de numéro de suivi). Le rapport source disait "jamais (epoch 1970)" en lisant `conversion_last_received_request_date_time`, un champ qui ne s'applique qu'aux conversions uploadées par API et reste à zéro par construction pour un AD_CALL natif : ce n'est pas une erreur de fait, mais un raccourci qui masque que la conversion a bien vécu 2 fois. Conclusion opérationnelle du rapport source inchangée : aucune conversion ne capte le clic sur le numéro du site. Verdict : nuancé sur le détail, confirmé sur l'impact.

**c) Campagnes toutes à l'arrêt.** 8 campagnes, statuts : `REMOVED` x3, `PAUSED` x5, zéro `ENABLED`. Coût/impressions/clics = 0 sur les 30 derniers jours pour chacune. Confirmé à l'identique du rapport source.

### 3. Meta Pixel/CAPI (CONFIRMÉ)

Dataset `4184805238436735` ("Prospect sur site web") : `is_active = true`, `last_fired_time` re-mesuré à 2026-07-21 09:26 (heure locale du dataset), soit AUJOURD'HUI, plus récent que le 20/07 cité dans le rapport source, ce qui confirme une activité continue et non un signal isolé. `server_last_fired_time` reste figé au 24/03/2026.

Répartition par événement sur 7 jours : PageView et Lead quotidiens, pic de 5 `Contact` le 17/07/2026, cohérent avec le rapport source au chiffre près.

Répartition par host/URL sur 7 jours : 100% des événements proviennent de `dcb-technologies.fr` (racine), jamais de `/new/`. `ads_get_dataset_quality` ne renvoie qu'un canal `web` (Lead, PageView), confirmant qu'aucun canal serveur/CAPI n'est aujourd'hui actif.

Vérification code indépendante (grep frais sur le repo V2 complet, motifs `fbq\(`, `connect.facebook.net`, `facebook.com/tr`) : zéro occurrence. Confirmé sans nuance.

### 4. Fiche GBP, pin GPS (CONFIRMÉ)

Le rapport source citait l'URL `google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,...`. Pour éviter de simplement reformater la même donnée, la re-vérification est passée par un chemin différent : recherche Google Search classique ("DCB Technologies Dardilly avis"), lecture du panneau de connaissance en direct, extraction du CID de la fiche (`ludocid=1597326073311273094`) depuis un lien du panneau, puis résolution de `https://www.google.com/maps?cid=1597326073311273094`.

Résultat de la redirection : `.../maps/place/DCB+technologies/@45.6356277,4.7311759,7z/data=...16s%2Fg%2F11xvy54gzr...`, soit les mêmes coordonnées et le même KGMID que dans le rapport source, obtenus par une méthode de recherche indépendante.

Comparaison avec les coordonnées réelles utilisées dans le JSON-LD du site (`index.html`, lignes 294-295 : `latitude 45.8136`, `longitude 4.7553`, Dardilly) : distance approximative calculée à partir des deux points ≈ 19,8 km. Le "~20 km" du rapport source est confirmé à moins de 200 m près sur le calcul de distance.

En parallèle, le panneau Google Search a permis de recontrôler au passage : nom affiché `DCB technologies` (t minuscule), une seule catégorie visible `Assistance et services informatiques` (le panneau "Suggérer une modification" ne propose qu'un seul champ catégorie, confirmant l'absence de catégorie secondaire), 7 avis, note 5,0/5, téléphone `04 82 53 05 10` identique au site. Ces points annexes du rapport `05-seo-local-gbp.md` (M1) sont donc également recoupés et confirmés au passage.

---

## Bloquants survivants après vérification adversariale

Les 4 bloquants tiennent la contre-vérification. Aucun n'est infirmé. Un seul comporte une nuance factuelle qui n'inverse pas la conclusion :

1. **GA4 : zéro Key Event configuré** (confirmé sans nuance).
2. **Google Ads : conversions mal alignées, zéro campagne active.** Confirmé sur les 3 sous-points, avec une nuance sur le sous-point clic-to-call : la conversion `AD_CALL` "Calls from ads" a réellement enregistré 2 conversions le 2026-01-14 (mécanisme natif Google, sans lien avec le numéro affiché sur le site), ce qui ne change rien à l'impact annoncé (aucune conversion ne capte un clic sur le numéro du site) mais nuance la formulation "jamais" du tableau source.
3. **Meta : pixel actif uniquement sur le V1, zéro trace sur le V2.** Confirmé, avec une donnée encore plus fraîche que le rapport source (activité mesurée jusqu'à aujourd'hui même).
4. **GBP : pin GPS à ~20 km de l'adresse réelle.** Confirmé par une méthode de mesure indépendante, distance calculée à 19,8 km.
