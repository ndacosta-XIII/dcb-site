# Audit Pré-Lancement V2 : GEO / AI Search

**Dimension :** Generative Engine Optimization (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews)
**Date :** 22/07/2026
**Agent :** seo-expert (sonnet)
**Périmètre :** repo local `dcb-site-clean` (miroir exact de la version LIVE `https://dcb-technologies.fr/new/`, synchro `f390257`), 33 pages référencées dans `sitemap.xml`. Audité en local (lecture directe des fichiers) + échantillon HTTP sur le live (`llms.txt`, `robots.txt` récupérés en direct sur `dcb-technologies.fr/new/`, contenu identique à l'octet près à la version locale).
**Règle respectée :** aucune recommandation `aggregateRating`/`Review` (confirmé absent des 33 pages par grep, section SAIN).

---

## NOTE : 80/100

**Barème (100 points, 6 critères), comparé à v1 :**

| Critère | Points | Score v1 (21/07) | Score v2 (22/07) |
|---|---|---|---|
| `llms.txt` (existence, exhaustivité, qualité) | /20 | 9 | 18 |
| Citabilité du contenu (structure Q/R, définitions autoportantes, chiffres sourcés) | /20 | 17 | 18 |
| `FAQPage` JSON-LD (couverture, autoportance) | /15 | 13 | 13 |
| Clarté d'entité (Organization/LocalBusiness/Person, `@id`, NAP) | /20 | 12 | 15 |
| Fraîcheur (dates "Mis à jour le" + `lastmod` sitemap, plausibilité réelle) | /15 | 6 | 14 |
| Article pilote NF525 (positionnement source citée) | /10 | 9 | 9 |
| **Total** | **100** | **66** | **80** |

**Lecture :** les deux bloquants de v1 sont résolus. `llms.txt` référence désormais la totalité du contenu stratégique (blog, pages département, hairnet, contact, notre-adn), vérifié identique en local et en direct sur `https://dcb-technologies.fr/new/llms.txt`. Les dates "Mis à jour le" ont été recalées sur la date réelle de dernière modification substantielle (21 ou 22 juillet selon la page), conformes à l'historique Git. Il reste un chantier d'unification d'entité (notre-adn, blog) non traité, classé Majeur comme en v1, pas bloquant.

---

## BLOQUANTS PRÉ-LANCEMENT

Aucun bloquant identifié sur cette dimension. Les deux bloquants de v1 sont vérifiés résolus (détail dans la section Delta ci-dessous).

---

## Majeurs (non bloquants, à traiter en post-lancement rapide)

### 1. Entité "DCB Technologies" encore fragmentée sur `notre-adn/` et le blog (contact corrigé)

**Ce qui est corrigé depuis v1 :** `contact/index.html` L438-439 déclare désormais `"@type": "LocalBusiness", "@id": "https://dcb-technologies.fr/#localbusiness"`, soit le même identifiant que l'homepage (`index.html` L275) et que les hubs/sous-pages caisse et web. C'est le bon pattern, appliqué correctement.

**Ce qui reste cassé :**
- `notre-adn/index.html` L43-44 déclare toujours un `Organization` séparé avec son propre `@id` : `https://dcb-technologies.fr/notre-adn/#organization`, non lié au nœud canonique. Les deux `Person` fondateurs (L74, L80) sont toujours inline sans `@id`, alors que l'homepage déclare déjà des `Person` canoniques réutilisables (`index.html` L325 `"@id": "https://dcb-technologies.fr/#nathanael"`, L332 `"@id": "https://dcb-technologies.fr/#clement"`).
- `blog/norme-nf525-caisse-enregistreuse/index.html` L236 (et les 3 autres articles, ligne identique) déclare toujours `"author": {"@type": "Person", "name": "Nathanaël Da Costa", ..., "worksFor": {"@type": "Organization", "name": "DCB Technologies"}}` sans aucun `@id`, donc un 3e nœud Organization anonyme distinct de `#localbusiness` et de `notre-adn/#organization`.

**Correction proposée (fix mécanique, faible risque, faisable en une passe) :** remplacer `notre-adn/index.html` L43-44 par une référence `{"@id": "https://dcb-technologies.fr/#localbusiness"}` réutilisant les propriétés déjà déclarées sur l'homepage (ou dupliquer les propriétés en gardant le même `@id`, comme fait sur `visibilite-web/index.html` L167 pour `Service.provider`, pattern déjà validé). Faire pointer les deux `Person` de `notre-adn/` vers `{"@id": "https://dcb-technologies.fr/#nathanael"}` et `{"@id": "https://dcb-technologies.fr/#clement"}`. Faire pointer `author`/`worksFor` des 4 articles de blog vers ces mêmes `@id`.

### 2. `FAQPage` toujours absente sur `contact/`, `notre-adn/`, `blog/` (hub)

Inchangé depuis v1, confirmé par grep sur les 33 pages : 28 portent un bloc `FAQPage`, 3 non (`contact/index.html`, `notre-adn/index.html`, `blog/index.html`). Grep ciblé "faq|question" sur `contact/index.html` et `notre-adn/index.html` : zéro occurrence, y compris hors JSON-LD (pas de FAQ visible sur la page à défaut du schema). Pour le hub blog, l'absence reste normale (page de listing). Pour `contact/` et `notre-adn/`, l'absence prive ces deux pages d'un format que Perplexity et les AI Overviews favorisent pour l'extraction directe.

### 3. Toujours aucun schema `WebSite` + `SearchAction`

Confirmé par grep sur les 33 pages : `SearchAction`/`potentialAction` n'apparaît nulle part. L'entité `WebSite` existe (`index.html` L338-343, `@id` `.../#website`) mais sans `potentialAction`. Impact mineur pour la citation IA (surtout utile pour les sitelinks Google classiques), inchangé depuis v1.

---

## Améliorations post-lancement

- Ajouter une ligne "dernière mise à jour" dans `llms.txt` (le fichier n'en porte aucune alors que sa fraîcheur compte pour les moteurs génératifs qui le lisent en priorité).
- Toujours pas de fichier `pricing.md`/`pricing.txt` dédié. Non bloquant : `llms.txt` contient déjà l'essentiel des prix en texte, et une bonne partie du catalogue (IT, hébergement, SEO/SEA) est sur devis donc peu transposable en grille figée.
- Le `legalName` "SAS DCB TECHNOLOGIES" (`index.html` L268) et le `foundingDate` "2025" (`notre-adn/index.html` L47) restent des affirmations non recoupables depuis le repo (aucune autre trace dans CLAUDE.md ni la doc) : à confirmer avec XIII avant mise en ligne, signalé en v1, toujours pertinent.

---

## Section IT gelé (constats hors périmètre actionnable, silo `maintenance-informatique/` gelé en attente Clément)

- `maintenance-informatique/index.html` porte une `FAQPage` correcte (6 questions, chiffres cohérents avec le reste du site : "moins de 4 heures sur site", télémaintenance "immédiate pendant les heures ouvrées") et un `Service` avec `areaServed` détaillé (4 départements + 5 villes). Le socle GEO du hub IT est déjà sain.
- Date affichée du hub IT toujours figée à `2026-04-23` (`datetime="2026-04-23"`), alors que les autres hubs (caisse, web) affichent désormais le 21 ou 22 juillet 2026. Cohérent avec le gel : le hub IT n'a pas été retouché dans la vague de correction du 21-22/07, donc sa date n'a pas été bumpée, ce qui est normal tant que le silo reste gelé. À ne pas corriger isolément : ce sera traité avec le reste du silo lors du dégel.
- `maintenance-informatique/infogerance-pme/index.html` reste absent de `sitemap.xml` (33 URLs, cette page n'y figure pas) alors qu'il porte bien une `FAQPage` et un canonical. Cette page reste également absente de `llms.txt` (choix assumé dans `pour-clement/proposition-llms.md`, à ne pas ajouter tant que le silo est gelé). Aucune action attendue avant dégel.
- Les montants factices de la grille tarifaire de contrat IT (notés dans la roadmap `CLAUDE.md` comme "à remplacer AVANT mise en ligne") sont un risque de citabilité fausse si un moteur IA les reprend tels quels une fois indexés : à garder en tête au dégel du silo, pas un constat GEO nouveau, déjà tracé ailleurs.

---

## Ce qui est SAIN (confirmé stable ou renforcé depuis v1)

1. **`robots.txt` toujours exemplaire.** Vérifié identique en local et en direct sur `https://dcb-technologies.fr/new/robots.txt` : les 8 crawlers IA (`GPTBot`, `ChatGPT-User`, `Claude-Web`, `ClaudeBot`, `anthropic-ai`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`) sont explicitement autorisés, sitemap référencé. Rien à corriger.
2. **`llms.txt` corrigé et vérifié en production.** Comparaison octet à octet entre le fichier local et la réponse HTTP de `https://dcb-technologies.fr/new/llms.txt` : identiques. Les 9 sections attendues sont toutes présentes (services, pages métier caisse, pages locales caisse, pages IT, pages web, pages institutionnelles, blog, informations essentielles, différenciation), y compris le blog (4 articles + hub), les 4 pages département, hairnet, contact, notre-adn. Seule absence volontaire : `infogerance-pme` (silo IT gelé, décision assumée dans `pour-clement/proposition-llms.md`).
3. **Zéro `aggregateRating`/`Review` sur les 33 pages** (grep exhaustif confirmé, inchangé).
4. **Fraîcheur E-E-A-T recalée sur la réalité Git.** Vérifié sur 7 pages échantillon (`index.html`, `caisse-enregistreuse/index.html`, `caisse-enregistreuse/commerce-de-detail/index.html`, `blog/index.html`, `blog/norme-nf525-caisse-enregistreuse/index.html`, `contact/index.html`, `notre-adn/index.html`) : les dates affichées (21 ou 22 juillet 2026) correspondent à la date réelle de la dernière modification de contenu substantiel (les commits de fond du 21/07 16h-17h47, `44ff206` à `5275c59`), la commande d'audit du 22/07 n'ayant modifié que des métadonnées OG/twitter sans update de date sur les pages où le contenu texte n'a pas bougé (ex. `notre-adn/`, dont seule l'image OG a changé). `sitemap.xml` : `lastmod` recalculés en cohérence (ex. homepage, hub caisse, hub web à `2026-07-22`).
5. **Article pilote NF525 toujours au niveau, désormais indexé.** `blog/norme-nf525-caisse-enregistreuse/index.html` conserve tous ses atouts GEO (définition autoportante, 4 sources officielles datées, chiffres précis, `BlogPosting`+`FAQPage`+`BreadcrumbList`), et son défaut unique en v1 (absence de `llms.txt`) est résolu.
6. **FAQ hyper-locales des 4 pages département : toujours sans duplication.** Contenu réellement unique par département (villes, kilométrages, arguments propres), confirmé toujours en place.
7. **Hub web enrichi en JSON-LD `Service` détaillé** (`visibilite-web/index.html` L161-227) : `areaServed` avec 4 départements et 7 villes, `OfferCatalog` avec 3 offres. Ce point figurait comme manquant dans la roadmap `CLAUDE.md` ("Hub Visibilité Web : JSON-LD Service détaillé") et apparaît désormais implémenté.
8. **`Service.provider` référencé par `@id` cohérent, étendu à `contact/` en plus des 13 pages déjà conformes en v1.**

---

## Delta avec le rapport v1 (`docs/audit-prelancement/04-geo-ai.md`, 21/07/2026, note 66/100)

| Constat v1 | Statut v2 |
|---|---|
| [BLOQUANT] `llms.txt` omet ~40% du site (blog, département, hairnet, contact, notre-adn) | **CORRIGÉ.** Vérifié local + live, fichier complet et identique aux deux. |
| [BLOQUANT] Dates E-E-A-T fausses sur 30 pages (contenu modifié sans bump de date) | **CORRIGÉ.** Dates recalées sur la date réelle de dernière édition substantielle, cohérence Git vérifiée sur 7 pages échantillon. |
| Majeur : entité fragmentée (contact, notre-adn, blog non liés au `@id` canonique) | **PARTIELLEMENT CORRIGÉ.** `contact/` corrigé. `notre-adn/` et les 4 articles de blog toujours en nœuds séparés/anonymes. |
| Majeur : `FAQPage` absente sur contact/notre-adn/blog hub | **INCHANGÉ.** Toujours 28/33 pages, mêmes 3 absentes. |
| Majeur : pas de `WebSite`+`SearchAction` | **INCHANGÉ.** Toujours absent. |
| Majeur : pas de `pricing.md` dédié | **INCHANGÉ.** Reste une amélioration non bloquante. |
| Mineur : `llms.txt` sans ligne de fraîcheur | **INCHANGÉ.** |
| Mineur : `legalName`/`foundingDate` non recoupables | **INCHANGÉ.** |
| Mineur : `dateModified` BlogPosting NF525 pas bumpé après édition CTA | **RÉSOLU EN PASSANT.** L'édition du 21/07 (CTA) a bien mis à jour `dateModified` à `2026-07-21` (`blog/norme-nf525-caisse-enregistreuse/index.html` L243). |

**Progression nette : 66 → 80.** Les deux points qui pesaient le plus lourd (llms.txt et fraîcheur, 29 points de barème à eux deux) sont résolus. Le reliquat (unification d'entité notre-adn/blog, FAQ contact/notre-adn) est mineur en score (5 points de barème) mais reste la prochaine étape logique, mécanique et à faible risque.
