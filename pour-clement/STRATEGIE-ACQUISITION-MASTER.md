# Stratégie d'acquisition 100% digital : DCB Technologies
# Document maître (SEA + SEO + GEO)

> Produit le 17/06/2026. Synthèse orchestrée : agents seo-expert (scope SEO/GEO) + ads-auditor (scope SEA) + Council (4 voix). Ancré sur données réelles GSC (90j, https://dcb-technologies.fr/), GA4 (prop 505863722), Google Ads (compte 6265603123), Meta Ads.
> Documents de détail : [scope-seo-geo.md](scope-seo-geo.md), [scope-sea.md](scope-sea.md).
> Objet : débloquer la phase contenu, finaliser et mettre en ligne la V2, relancer les ADS de façon pilotable.

---

## 0. SYNTHÈSE EXÉCUTIVE (à lire en premier)

Trois faits réels recadrent toute la stratégie :

1. **Le tracking de conversion est mort.** GA4 remonte `keyEvents = 0` sur tous les canaux depuis 90 jours. Les 982 € dépensés en Google Ads (déc.→avril) ont produit **0 lead pilotable**. Tant que ce n'est pas réparé, aucune projection n'est fiable et toute relance pub répète l'erreur.
2. **Pour la caisse, l'événement de conversion est l'APPEL, pas le formulaire.** Panier 2000-4500 €, vente conseil : le prospect téléphone. Le tracking doit prioriser un numéro de **call-tracking**. (Point soulevé indépendamment par 3 voix du Council.)
3. **Les 2 fondateurs sont le goulot de vente, pas le volume de leads.** Avant de payer pour des leads, le cash le plus rapide est la **réactivation de la base clients + le parrainage** (zéro budget, jours et non trimestres).

**La règle d'or du trimestre : on ne remet pas 1 € en média avant qu'un lead vérifié (appel + formulaire) ne se déclenche dans GA4 et Google Ads. Cap dur : 10 jours.**

**Le cap stratégique :** zone **71 d'abord** (quasi-monopole, ROI rapide, base Paray), Lyon **pas ce trimestre** (10x volume mais 10x concurrence = incinérateur de cash). Caisse + Web pour le cash court terme, IT en construction lente. Google Ads gardé **léger** (cher), bascule progressive vers Meta + SEO/GEO.

---

## 1. DIAGNOSTIC CHIFFRÉ (données réelles 90j)

| Signal | Valeur réelle | Lecture |
|---|---|---|
| Sessions organiques (GA4) | 27 / 90j | Plancher de départ très bas |
| keyEvents (toutes sources) | **0** | Tracking cassé, pilotage impossible |
| Hub `/caisse-enregistreuse/` | 2 404 impr, **pos 22**, CTR 0,33% | Gros gisement enterré en page 2-3 |
| `/saone-et-loire/` | 79 impr, **CTR 15%**, pos 15 | Le format page-département marche |
| `/ain/` `/loire/` `/rhone/` | pos 12 / 15 / 16 | Money pages géo proches du top 10 |
| Requêtes qui impriment | Besançon 144, Dijon, Angers, Grenoble... | **Mauvais géo-ciblage** (villes hors zone) |
| Lyon / Mâcon / Bourg / Roanne | ~0 impression | La zone cible n'est pas captée |
| IT `/service-it-360/` | 267 impr, pos 23, **0 clic** | Invisible, redirection 301 jamais faite |
| Web `/site-internet/` | 148 impr, pos 20, **0 clic** | Invisible, redirection 301 jamais faite |
| Google Ads déc.→avril | 982 €, ~5 conv non fiables | Budget éclaté sur 4 dpt, CPC 2-4,5 €, 0 tracking |

**Les 4 défauts à corriger :** (1) tracking, (2) géo-ciblage, (3) redirections V1→V2 perdues, (4) money pages géo bloquées juste hors du top 10.

---

## 2. LES 2 CHANTIERS BLOQUANTS (avant tout euro de média)

### 2.1 Chantier TRACKING (cap dur 10 jours, zéro dépense média avant validation)

Ordre d'exécution (détail dans [scope-sea.md](scope-sea.md), section Priorité 0) :

1. **Call-tracking en priorité** : numéro de renvoi (forwarding Google gratuit pour Ads + numéro Meta), car la caisse se vend au téléphone. Événements `phone_click` (nav/fab/cta/footer) dans scripts.js.
2. Page `/merci.html` avec snippet de conversion au chargement (déclencheur fiable en site statique).
3. Événement `contact_form_submit` (paramètre `offre` = caisse/it/web) dans scripts.js, marqué Événement clé GA4.
4. Purge des 5 actions de conversion orphelines du compte Ads ; 3 actions propres (Lead formulaire, Appel annonce, Appel site).
5. Import GA4 → Google Ads ; pixel Meta + Lead sur `/merci`.
6. **Test end-to-end** (formulaire + clic-to-call + GA4 DebugView) avant de remettre 1 €.

### 2.2 Chantier DÉPLOIEMENT V2 + REDIRECTIONS (protéger l'actif organique)

- **Redirections 301 V1→V2 dans .htaccess** : `/service-it-360/`→`/maintenance-informatique/`, `/site-internet/`→`/visibilite-web/`, etc. Sans ça le jus IT/Web est définitivement perdu.
- **Protéger `/caisse-enregistreuse/saone-et-loire/`** (seul actif organique qui marche, CTR 15%) : URL conservée, pas de collision de canonical V1/V2 pendant la bascule.
- Ajouter `/caisse-enregistreuse/hairnet/` au sitemap.xml (absente). Soumettre sitemap + demande d'indexation post-bascule.

---

## 3. SCOPE SEO + GEO

### 3.1 Rôle de chaque page (synthèse ; tableau complet 34 pages dans [scope-seo-geo.md](scope-seo-geo.md))

| Famille | Pages | Rôle |
|---|---|---|
| **Money pages (11)** | hub caisse, 4 dpt caisse (71/69/01/42), 4 métiers caisse, hub IT, hub Web | Cibles SEO/SEA prioritaires |
| **Support (8)** | cashmag, hairnet, borne, monnayeur, cloud-securite, infogerance-pme, creation-site-internet, seo-sea-local | Maillage + citabilité IA + trafic transactionnel |
| **Structurelles (5)** | contact, notre-adn, blog + article, légales | Entité, E-E-A-T |

Principe tranché : **le hub caisse accumule les impressions génériques ; les pages département captent le géo-spécifique.** Une page dpt bien positionnée vaut ~45x le hub en CTR.

### 3.2 Pages manquantes : 7 (chiffrage seo-expert)

| Page | Priorité | Justification |
|---|---|---|
| `/caisse-enregistreuse/macon/` | **P0 sprint** | Cœur du 71, quasi-monopole, base Paray à 53 km |
| `/caisse-enregistreuse/conformite-nf525/` | **P0 sprint** | Requête déclencheur d'achat la plus forte |
| Article blog NF525 2026 | **P0 sprint** | Appuie /conformite-nf525/ dès la mise en ligne |
| `/caisse-enregistreuse/lyon/` | **P1 (post-71)** | "caisse Lyon" = gisement n°1 MAIS Council = pas ce trimestre |
| `/maintenance-informatique/lyon/` | P1 | "maintenance informatique Lyon" |
| `/caisse-enregistreuse/alternative-sumup/` | P1 | Capter les switcheurs SumUp |
| `/caisse-enregistreuse/chalon/` | P2 | 2e ville du 71 |

### 3.3 Projection ranking (ancrée GSC réel ; détail [scope-seo-geo.md](scope-seo-geo.md))

| Page | Aujourd'hui | M+6 | Levier |
|---|---|---|---|
| Hub caisse | pos 22, ~3 clics/mois | pos 7-10, **+45 à +75 clics/mois** | title/meta, JSON-LD Service, comparatif, maillage |
| `/saone-et-loire/` | pos 15, CTR 15% | top 3, **45-70 clics/mois (M+12)** | différenciation substance, /macon/ qui aspire les villes |
| `/macon/` (à créer) | inexistante | pos 2-5, 10-21 clics/mois (M+12) | quasi-monopole local |
| `/rhone/` | pos 16, 0 clic | pos 7-11, +3 à +6 clics/mois | dépend de /lyon/ pour libérer la position dpt |

**Trafic organique non-marque projeté : 9 clics/mois aujourd'hui → 35-55 (M+3) → 100-180 (M+6) → 250-450 (M+12).** Hypothèses réalistes, pas de promesse.

### 3.4 GEO (Generative Engine Optimization)

Objectif : être cité par ChatGPT / Perplexity / AI Overviews / Gemini sur les requêtes caisse et web locales. Leviers priorisés : JSON-LD Service complet (areaServed + AggregateOffer) sur le hub caisse, LocalBusiness `@id` réel sur `/contact/` (référencé partout mais inexistant), format Q/R, enrichissement `llms.txt` (pricing IT + Web), `sameAs` vers la fiche GBP. Détail dans [scope-seo-geo.md](scope-seo-geo.md).

### 3.5 Brief contenu = le déblocage du sprint

Le livrable qui débloque la rédaction est le **brief contenu par page P0** (title, H1, intention, mots-clés, sections, longueur, angle anti-duplicate) dans [scope-seo-geo.md](scope-seo-geo.md). Source prête à dégainer : `brief-pages-departement.md` pour /rhone/ /ain/ /loire/. Le copywriter-site peut attaquer immédiatement.

---

## 4. SCOPE SEA

### 4.1 Ce qu'il ne faut PAS reproduire

Budget éclaté sur 4 départements (campagne 71 sous-alimentée à 19 €/mois), "Campagne mot clef strict 71" = 459 € (47% du budget) à 0 conversion sur des mots-clés hors intention, CPC laissé déraper à 6-10 €, et surtout 0 tracking.

### 4.2 Structure de relance (Google léger + Meta phase 2)

| Campagne | Géo (strict) | Budget/mois | Landing V2 |
|---|---|---|---|
| Caisse 71 Search | Saône-et-Loire | 210 € | /saone-et-loire/ + métiers |
| Caisse 69 Search | Métropole Lyon | 120 € | /rhone/ |
| Caisse 01+42 Search | Ain + Loire | 60 € | /ain/, /loire/ |
| IT Dépannage Search | 71 + 69 | 60 € | /maintenance-depannage/ |
| Web Création Search | 71 + 69 | 30 € | /creation-site-internet/ |

Enchères : Maximiser clics + plafond CPC 4 € (bloque les dérapages), bascule Maximiser conversions à 20 conversions. Négatifs de compte obligatoires (gratuit, occasion, sumup, square, amazon, emploi, hors zone...). Meta en mois 2 : remarketing caisse (150 €) + prospection intérêts métiers (100 €), géo 80 km Paray / 40 km Dardilly.

### 4.3 Projection CA par scénario (hypothèses explicites : CPC 3 €, conv landing 3-6%, closing 50%, panier caisse 3 000 €)

| Scénario | Budget/mois | Leads/mois | Ventes/mois | CA brut estimé | CAC |
|---|---|---|---|---|---|
| Lean | 500 € | 4-9 | 2-4 | 6 000-12 000 € | 55-125 € |
| **Recommandé** | **750 €** | **8-18** | **4-9** | **12 000-27 000 €** | 83-187 € |
| Scale | 1 000 € | 11-23 | 5-11 | 15 000-33 000 € | 90-200 € |

**Avertissement (Council) : ce modèle empile 3 hypothèses non encore mesurées (taux de conversion landing, closing, géo-ciblage corrigé). C'est une fourchette de cadrage, pas une promesse.** Le paramètre le plus sensible est le taux de conversion landing : sous 2%, les projections sont divisées par 2. C'est exactement pourquoi le tracking passe avant la dépense.

### 4.4 Déclencheur d'embauche du commercial

**15 leads qualifiés/mois pendant 2 mois consécutifs (dont 8 caisse minimum).** À ce niveau, le digital déborde la capacité des 2 fondateurs et le commercial s'autofinance. Tant que ce seuil n'est pas atteint, l'enjeu n'est pas plus de leads mais plus de closing (voir levier base chaude, §5).

---

## 5. PLAN 90 JOURS SÉQUENCÉ

### Semaine 0 (avant déploiement) : le cash gratuit + le sprint contenu réduit
- **Levier #1 immédiat, zéro budget (Council) : réactivation base clients + parrainage.** Liste d'appels + offre de parrainage. C'est le cash le plus rapide, indépendant du site et des ADS.
- Sprint contenu **réduit aux money pages P0** : hub caisse + /saone-et-loire/ + /rhone/ + /ain/ + /loire/ + 1-2 métiers + /macon/ + /conformite-nf525/. Les 24 autres pages peuvent suivre après le go-live (ne pas geler la mise en ligne dessus).
- Corrections techniques sans risque (site-qa) : meta robots, accents JSON-LD, og:locale, titles hubs IT/Web, /hairnet/ au sitemap.

### Semaines 1-2 : tracking + déploiement (zéro média)
- Tracking complet (call-tracking d'abord) + test end-to-end validé.
- Déploiement V2 + HTTPS + redirections 301 + soumission sitemap GSC.
- Correction GPS de la fiche GBP (action client, levier n°1 du Local Pack).

### Semaines 3-4 : lancement SEA lean (Google Search seul)
- Activer **Caisse 71 + Caisse 69** uniquement (~330 €/mois). Vérifier les termes de recherche à J+3, exclure les hors-sujet.
- Étendre IT + Web + 01/42 en fin de semaine 4 si pas d'anomalie.

### Mois 2 : apprentissage + Meta + SEO qui monte
- Analyse CPL réel vs projeté ; kill des groupes à CTR < 2%.
- Activer Meta remarketing caisse (dès 100 visiteurs cookiés).
- Les money pages 71 commencent à gagner des positions (effet contenu + redirections).

### Mois 3 : scale sur ce qui marche
- +30% sur les campagnes à CPL < 150 € ; pause de toute campagne à 0 conv sur 50 clics.
- Si Caisse 69 viable ET seuil de closing tenu, **alors seulement** créer /caisse-enregistreuse/lyon/ (vague 2).
- Bilan : a-t-on atteint le déclencheur d'embauche (15 leads/mois) ?

---

## 6. ARBITRAGES TRANCHÉS PAR LE COUNCIL

| Arbitrage | Décision |
|---|---|
| Lancer la pub avant tracking ? | **Non.** Cap dur 10 jours pour réparer, puis lancer. |
| V1 ou V2 ? | **V2** (déploiement sous quelques jours). Ne pas dépenser sur V1. |
| Lyon maintenant ? | **Non, pas ce trimestre.** 71 d'abord, Lyon en vague 2 sur preuve. |
| /rhone/ + /lyon/ cannibalisation ? | Non : dpt vs ville. Décision de principe validée. |
| Split canaux | Google seul mois 1, **Meta mois 2** (70/30 ensuite). |
| Split caisse/web/IT | **70/20/10** (web CPC bas = cash rapide). |
| Compte Ads | Réutiliser après purge complète. |
| Cash le plus rapide | **Base chaude + parrainage** avant la pub. |

---

## 7. KPIs DE PILOTAGE

- **Préalable (binaire) :** un appel ET un formulaire test remontent dans GA4 + Google Ads. Sans ça, média = stop.
- **Hebdo SEA :** CPL par campagne, CTR par groupe, termes de recherche nettoyés.
- **Mensuel SEO :** positions des 4 money pages géo + hub, clics organiques non-marque (cible 35-55 à M+3).
- **Business :** leads qualifiés/mois (cible 15, dont 8 caisse), ventes closes, CA, CAC réel (cible < 200 €).
- **Goulot :** taux de closing des fondateurs. Si les leads montent mais le closing sature, le sujet devient la capacité commerciale, pas l'acquisition.
