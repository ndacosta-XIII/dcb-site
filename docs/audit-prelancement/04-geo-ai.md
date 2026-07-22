# Audit Pré-Lancement : GEO / AI Search

**Dimension :** Generative Engine Optimization (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews)
**Date :** 21/07/2026
**Agent :** seo-expert (sonnet)
**Périmètre :** repo local `dcb-site-clean` branche `main`, 33 pages (llms.txt, robots.txt, sitemap.xml, JSON-LD toutes pages, silos Caisse/IT/Web, blog 4 articles, contact, notre-adn, pages département 71/69/01/42). Audit de READINESS (le site est en noindex staging, pas de visibilité actuelle à mesurer).
**Règle respectée :** aucune recommandation `aggregateRating`/`Review` (confirmé absent du code, cf. section SAIN).

---

## NOTE : 66/100

**Barème (100 points, 6 critères) :**

| Critère | Points | Score |
|---|---|---|
| `llms.txt` (existence, exhaustivité, qualité) | /20 | 9 |
| Citabilité du contenu (structure Q/R, définitions autoportantes, chiffres sourcés) | /20 | 17 |
| `FAQPage` JSON-LD (couverture, autoportance) | /15 | 13 |
| Clarté d'entité (Organization/LocalBusiness/Person, `@id`, NAP) | /20 | 12 |
| Fraîcheur (dates "Mis à jour le" + `lastmod` sitemap, plausibilité réelle) | /15 | 6 |
| Article pilote NF525 (positionnement source citée) | /10 | 9 |
| **Total** | **100** | **66** |

**Lecture :** fondations techniques solides (robots.txt exemplaire, discipline anti-duplicate-content rare, article NF525 de très haut niveau GEO) mais deux angles morts systémiques qui coûtent le plus de points : `llms.txt` n'indexe pas le contenu le plus citable du site (le blog, dont l'article pilote NF525), et les signaux de fraîcheur affichés sur ~30 pages sont actuellement faux (dates figées alors que le contenu a été modifié le jour même).

---

## [BLOQUANT] `llms.txt` n'référence ni le blog, ni les pages département, ni 3 autres pages : le fichier omet le contenu le plus citable du site

**Preuve :** `llms.txt` (5 785 octets, dernière modification 15/07/2026) contre `sitemap.xml` qui liste 33 URLs. Comparaison :

Pages présentes dans `sitemap.xml` mais **absentes de `llms.txt`** :
- `blog/` (hub) et ses 4 articles : `blog/norme-nf525-caisse-enregistreuse/`, `blog/maintenance-informatique-preventive/`, `blog/referencement-google-my-business/`, `blog/combien-coute-un-site-internet/`. **Le blog n'est mentionné nulle part dans `llms.txt`**, alors qu'il contient l'article pilote NF525 explicitement destiné à être LA source citée sur la réforme 2026 (cf. bloquant suivant pour la qualité de cet article, qui ne compense pas son invisibilité dans l'index LLM).
- `caisse-enregistreuse/saone-et-loire/`, `caisse-enregistreuse/rhone/`, `caisse-enregistreuse/ain/`, `caisse-enregistreuse/loire/` : les 4 pages département, alors que ce sont elles qui répondent le mieux aux requêtes de type "caisse enregistreuse Mâcon" citées dans le brief de cet audit (FAQ hyper-locales vérifiées ci-dessous, section SAIN).
- `contact/`, `notre-adn/` : aucune mention, alors que `notre-adn/` est la page qui porte l'identité vérifiable des fondateurs (E-E-A-T).

Page hors sitemap mais bien réelle, également absente de `llms.txt` :
- `maintenance-informatique/infogerance-pme/index.html` (canonical présent L11, linkée depuis `maintenance-informatique/index.html`, `maintenance-depannage/`, `outils-collaboratifs/`, `js/scripts.js`) : absente à la fois de `sitemap.xml` ET de `llms.txt`, alors que la section "Pages maintenance informatique" de `llms.txt` liste bien les 4 autres sous-pages IT (`maintenance-depannage/`, `cloud-securite/`, `location-vente-installation/`, `outils-collaboratifs/`) mais pas celle-ci.
- `caisse-enregistreuse/hairnet/index.html` (logiciel caisse coiffure, pourtant listé dans `sitemap.xml`) : absent de `llms.txt`.

**Impact :** `llms.txt` est le fichier que Perplexity, ChatGPT et les autres moteurs génératifs sont censés lire en priorité pour comprendre la structure du site (spec llmstxt.org, section "GEO" du `pour-clement/MASTER_PLAN.md` L16-18 : "Index structuré du site pour les LLMs"). Sur 33 pages de contenu, il en référence 19 explicitement (services + pages métier + pages web), soit environ 40% du site absent de son propre index LLM, dont les deux clusters les plus stratégiques pour la citation IA : le blog (contenu éditorial sourcé, seul format du site pensé pour être cité comme référence) et les pages département (seul contenu hyper-local du site).

---

## [BLOQUANT] Les dates "Mis à jour le" (E-E-A-T) sont fausses sur au moins 30 pages : le contenu a été modifié le jour de l'audit sans que la date affichée change

**Preuve :** le signal de fraîcheur existe bien partout (31/31 pages de contenu portent une balise `<time>` "Mis à jour le", vérifié par grep exhaustif : c'est un vrai acquis, cf. section SAIN). Le problème n'est pas l'absence du signal, c'est son exactitude.

`git log --since="2026-07-21 00:00"` (jour de l'audit) montre 30 fichiers HTML modifiés aujourd'hui même par des commits de contenu substantiel :
- `5275c59` "Comparatif concurrents : reecriture honnete" a réécrit `caisse-enregistreuse/index.html` et `caisse-enregistreuse/commerce-de-detail/index.html` aujourd'hui. Preuve : `caisse-enregistreuse/index.html` L1013 affiche toujours `<time class="d-updated" datetime="2026-04-23">Mis à jour le 23 avril 2026</time>`, soit 89 jours de retard sur l'édition réelle. `caisse-enregistreuse/commerce-de-detail/index.html` L559 affiche `datetime="2026-06-29"`, soit 22 jours de retard.
- `e1c2fc6` "Blog : CTA a la premiere personne" a modifié les 5 fichiers du blog (hub + 4 articles) aujourd'hui. `blog/index.html` affiche toujours `datetime="2026-04-23"` (96 jours de retard).
- `15f8ece` "Coherence #2" a modifié 14 fichiers aujourd'hui (silo caisse complet + homepage + hébergement), sans qu'aucun ne voie sa date bumpée.

Sur les 30 fichiers HTML touchés aujourd'hui, aucun n'affiche la date du jour (21 juillet 2026) : les dates relevées vont du 23 avril au 15 juillet.

Le même problème existe au niveau de `sitemap.xml` : la majorité des `<lastmod>` sont figées à `2026-04-06` (ex. `<loc>https://dcb-technologies.fr/</loc>` L4-5, `<loc>.../caisse-enregistreuse/</loc>`) alors que ces pages ont été modifiées plusieurs fois depuis (dernière fois : aujourd'hui).

**Impact :** la fraîcheur est un signal explicite de citation pour les moteurs génératifs (pilier GEO documenté dans `pour-clement/MASTER_PLAN.md` L28 : "Fraîcheur contenu : mise à jour trimestrielle obligatoire, `lastmod` sitemap"). Une date affichée plus ancienne que la dernière modification réelle n'est pas neutre : c'est une information fausse présentée comme un fait vérifiable sur une page publique, du même ordre que les autres inexactitudes déjà traquées par l'audit de cohérence (`docs/audit-coherence-juillet-2026.md`). Cela affaiblit aussi la confiance E-E-A-T si un humain ou un modèle croise la date affichée avec l'historique Git ou Wayback Machine après mise en ligne.

**Note :** certains des 30 fichiers n'ont reçu que des changements mécaniques (bump de cache-bust `?v=`) qui ne justifient pas une nouvelle date ; mais `caisse-enregistreuse/index.html`, `caisse-enregistreuse/commerce-de-detail/index.html` et les 5 pages du blog ont reçu une réécriture de contenu visible (texte du comparatif concurrents, CTA) qui aurait dû déclencher la mise à jour de la date selon la logique même du site.

---

## Majeurs

### 1. Entité "DCB Technologies" fragmentée en 3 nœuds `@id` distincts et non liés (contact, notre-adn) + nœuds anonymes (blog)

**Ce qui fonctionne bien (base de comparaison) :** l'homepage déclare l'entité canonique `"@id": "https://dcb-technologies.fr/#localbusiness"` (`index.html` L274). Les 3 hubs et 10 sous-pages vérifiées (`caisse-enregistreuse/{saone-et-loire,rhone,ain,loire,hairnet,cashmag}/index.html`, `maintenance-informatique/{index,infogerance-pme}/index.html`, `visibilite-web/{creation-site-internet,seo-sea-local,hebergement}/index.html`) réutilisent TOUTES ce même `@id` exact dans leur `Service.provider` (`"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}`). C'est le bon pattern, appliqué de façon disciplinée sur l'essentiel du site.

**Ce qui casse le pattern :**
- `contact/index.html` L439 déclare un `LocalBusiness` séparé avec son propre `@id`: `"https://dcb-technologies.fr/contact/#localbusiness"`, jamais lié au nœud canonique de l'homepage.
- `notre-adn/index.html` L44 déclare un `Organization` séparé avec son propre `@id`: `"https://dcb-technologies.fr/notre-adn/#organization"`, également non lié. Les fondateurs y sont déclarés en `Person` inline sans `@id` (L74-84), donc non réutilisables ailleurs.
- Les 4 articles de blog (`blog/norme-nf525-caisse-enregistreuse/index.html` L236 et les 3 autres, ligne identique) déclarent un `author` avec un `Person` inline SANS `@id`, et un `worksFor` avec un `Organization` inline SANS `@id` : `{"@type": "Person", "name": "Nathanaël Da Costa", "url": "...notre-adn/", "worksFor": {"@type": "Organization", "name": "DCB Technologies"}}`. Ce nœud Organization anonyme est encore différent des deux précédents.

**Impact :** un moteur génératif qui construit un graphe d'entités à partir de plusieurs pages ne peut consolider "DCB Technologies" en une seule entité forte que si les déclarations pointent vers le même identifiant. Là, il en existe potentiellement 4 versions non reliées (homepage, contact, notre-adn, blog), ce qui dilue exactement le signal que `Sprint 2` du `MASTER_PLAN.md` (L163-181) visait à renforcer via un `@graph` unifié. Fix mécanique et à faible risque : remplacer les déclarations inline de `contact/` et `notre-adn/` par des références `{"@id": "https://dcb-technologies.fr/#localbusiness"}`, et faire pointer `author`/`worksFor` du blog vers des `@id` de personnes déclarés une seule fois sur l'homepage (`index.html` L322-334 déclare déjà `Person` Nathanaël et Clément avec `@id`).

### 2. `FAQPage` absente sur 3 pages : `contact/`, `notre-adn/`, `blog/` (hub)

Confirmé par grep sur les 33 pages HTML de contenu : 28 portent un bloc `FAQPage`, 3 n'en ont aucun (`contact/index.html`, `notre-adn/index.html`, `blog/index.html`). Pour le hub blog (page de listing), l'absence est normale. Pour `contact/` (questions probables : horaires, délai de réponse, zones couvertes) et `notre-adn/` (questions probables : qui sont les fondateurs, depuis quand, zéro sous-traitance), l'absence prive ces deux pages d'un format que Perplexity et les AI Overviews favorisent explicitement pour l'extraction directe.

### 3. Aucun schema `WebSite` + `SearchAction` (sitelinks searchbox)

Confirmé par grep : `SearchAction` n'apparaît dans aucune page HTML du site. L'entité `WebSite` existe bien (`index.html`, `@id` `.../#website`) mais sans `potentialAction`. Recommandation déjà documentée dans `pour-clement/MODULE_4_donnees-structurees.md` L146-153 (Schema 1), jamais implémentée. Impact mineur pour la citation IA (plus utile pour les sitelinks Google classiques), mais rapide à ajouter puisque l'entité `WebSite` existe déjà.

### 4. Pas de fichier `pricing.md` / `pricing.txt` complémentaire à `llms.txt`

`llms.txt` contient déjà les prix clés en texte (59-77 €/mois caisse, 950-1200 € HT site web) donc l'information n'est pas cachée. Mais un fichier dédié `/pricing.md` structuré par offre (comme documenté dans le skill `ai-seo`) faciliterait l'extraction par des agents IA qui comparent des prestataires programmatiquement. Amélioration, pas un manque bloquant : DCB vend des prestations sur devis pour une bonne partie du catalogue (IT, hébergement, SEO/SEA), donc une grille figée type SaaS n'est pas totalement transposable.

---

## Mineurs

- `llms.txt` n'a pas de ligne "dernière mise à jour" alors que le fichier a clairement une date de fraîcheur qui compte (dernière modif 15/07/2026, mais le contenu du site a bougé depuis sur plusieurs pages citées dedans, ex. prix hébergement).
- Le `legalName` "SAS DCB TECHNOLOGIES" (`index.html` L268) et le `foundingDate` "2025" (`notre-adn/index.html` L47) sont des affirmations factuelles fortes (forme juridique, date de création) qui n'apparaissent nulle part ailleurs dans le repo pour recoupement (ni CLAUDE.md, ni docs) : à vérifier avec XIII avant mise en ligne, pas une erreur constatée mais une donnée non recoupable depuis le repo.
- `blog/norme-nf525-caisse-enregistreuse/index.html` a été modifié aujourd'hui (commit `e1c2fc6`, changement du CTA) sans que `dateModified` du schema `BlogPosting` (L243, toujours `"2026-07-06"`) ni la date affichée (L548, "6 juillet 2026") ne changent. Changement mineur (CTA), mais même angle mort que le bloquant fraîcheur ci-dessus.

---

## Ce qui est SAIN

1. **`robots.txt` exemplaire pour le GEO.** Les 8 crawlers IA sont explicitement autorisés (`GPTBot`, `ChatGPT-User`, `Claude-Web`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`), en plus du sitemap référencé. Rien à corriger ici.

2. **Zéro `aggregateRating`/`Review` sur les 33 pages** (grep exhaustif confirmé). La règle projet est respectée intégralement, y compris sur les pages avec le plus de tentation (hub caisse, homepage).

3. **L'article pilote NF525 est un exemple GEO de très haut niveau.** `blog/norme-nf525-caisse-enregistreuse/index.html` coche presque tous les piliers GEO documentés : définition autoportante en tête d'article, tableau chronologique sourcé (LF 2025 vs LF 2026), 4 sources officielles citées avec URL et date (economie.gouv.fr, service-public.gouv.fr, BOFiP x2, LégiFiscal), ton d'autorité assumé ("On va être clairs..."), chiffres précis (7 500 €, 60 jours, 21 février 2026), `BlogPosting` + `FAQPage` + `BreadcrumbList` JSON-LD complets, FAQ visible identique au JSON-LD (autoportante hors contexte). Le contenu affirme correctement que la NF525 n'est plus obligatoire depuis le 21 février 2026 et que deux preuves sont recevables (certificat ou attestation), conforme à la réforme réelle. Seul défaut : son invisibilité dans `llms.txt` (bloquant ci-dessus), qui n'est pas un défaut de l'article lui-même.

4. **FAQ hyper-locales des 4 pages département : aucune duplication, contenu réellement unique.** Vérifié en comparant les 9-10 questions JSON-LD de `saone-et-loire/`, `rhone/`, `ain/`, `loire/` : chaque page a ses propres villages, distances, arguments (ex. Saône-et-Loire cite Charolles/Digoin/Gueugnon avec kilométrages depuis Paray ; Ain cite le Pays de Gex et la frontière genevoise ; Loire cite le vocabulaire stéphanois). C'est exactement le type de contenu autoportant et spécifique qu'un moteur génératif peut citer sans ambiguïté sur "caisse enregistreuse Mâcon" vs "caisse enregistreuse Lyon" vs les autres villes.

5. **Discipline anti-duplicate-content documentée et globalement respectée.** `docs/content-reference.md` trace explicitement quelles formulations sont réservées à quelle page (60 %, "Architecture anti-redondance DE-DUP 2026-06-15"), avec un référentiel de valeurs canoniques daté du 21/07/2026 qui verrouille les chiffres transverses (95% résolution à distance, 4h sur site, etc.). Les seules duplications trouvées (trust bar départements, amende NF525) sont des blocs d'information légale/factuelle assumés comme tels dans la doc, pas des raccourcis de rédaction. Peu de sites de cette taille ont ce niveau de gouvernance.

6. **Cohérence NF525 vérifiée sur 100% des occurrences.** Grep de toutes les occurrences "NF525" + "obligatoire" sur les 33 pages : aucune ne réintroduit l'ancien discours "NF525 obligatoire" (l'obligation porte partout sur la conformité ISCA du logiciel, la certification NF525 étant présentée comme une des deux preuves possibles). Alignement total entre homepage, hub, 6 sous-pages caisse et l'article blog.

7. **Dates de fraîcheur présentes structurellement sur 31/31 pages de contenu.** Le mécanisme lui-même (balise `<time>` visible desktop + mobile) est en place partout : le problème documenté en bloquant plus haut porte sur l'exactitude des valeurs, pas sur l'existence du système.

8. **`Service.provider` référencé par `@id` de façon cohérente sur au moins 13 pages** (3 hubs + 10 sous-pages vérifiées), preuve que le pattern d'entité unifiée est déjà maîtrisé sur l'essentiel du site : le travail restant (majeur n°1) est localisé sur 2 pages + 4 articles, pas une refonte.

---

**Prochaine étape suggérée (hors périmètre de ce rapport) :** `05-seo-local-gbp.md` couvrira le référencement local et la fiche GBP ; `03-seo-technique.md` couvrira le `sitemap.xml` manquant pour `infogerance-pme` sous l'angle SEO technique classique (indexation), ce rapport ne fait que signaler l'impact GEO de cette même absence sur `llms.txt`.
