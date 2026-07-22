# 08b · Audit pré-lancement : dimension MARKETING

- **Dimension :** Marketing (positionnement, message, offre) du SITE comme outil de vente. Pas d'acquisition (voir `pour-clement/STRATEGIE-ACQUISITION-MASTER.md`), pas de CRO mécanique (voir cro-expert), pas de SEO (voir 03/04/05).
- **Date :** 21/07/2026
- **Agent :** marketing-strategist
- **Périmètre :** homepage + 3 hubs (caisse, IT, web) + comparatif concurrents. Sources : `PRODUCT.md`, `.agents/product-marketing-context.md`, `docs/content-reference.md`. Silo IT gelé (grille tarifaire en attente Clément) : audité pour le message, pas pour les montants.
- **Méthode de note :** 7 critères pondérés, note plafonnée par les claims non tenables (une promesse invendable pèse plus qu'un joli hero).

---

## NOTE : 69 / 100

Barème :

| Critère | Poids | Score | Commentaire |
|---|---|---|---|
| 1. Clarté du positionnement (5 sec) | 20 | 17 | Hero homepage et 3 hubs limpides sur quoi/où/pourquoi. "Pour qui" implicite sur le hero. |
| 2. Hiérarchie des 3 piliers vs priorité V2 (IT+Web) | 15 | 9 | Nav et cards à parité, mais la preuve et les logos restent caisse-first. |
| 3. Différenciation prouvée vs affirmée | 20 | 14 | Proximité et accompagnement prouvés. Transparence prouvée sur web, absente sur IT (aucun prix). |
| 4. Cohérence de l'offre (vendable au téléphone) | 20 | 12 | Deux promesses intenables/fausses sur des pages phares (voir bloquants). |
| 5. Comparatif concurrents | 10 | 8 | Honnête, concret, disclaimer assumé. Solide, pas mou. |
| 6. Angles morts (objections, lead magnet) | 10 | 5 | Objection continuité "et si vous fermez" non traitée. Zéro lead magnet. |
| 7. Ton (humain/local vs corporate) | 5 | 4 | Très humain dans l'ensemble, poches de jargon IT + une faute de genre. |

Verdict : **proche du publiable, pas publiable en l'état.** Les deux bloquants sont des corrections de copy (délégables à copywriter-site), pas des chantiers. Une fois traités, la dimension marketing passe au-dessus de 80.

---

## [BLOQUANT]

### B1. Claim faux : "Matériel en stock" sur le hero du hub caisse
`caisse-enregistreuse/index.html:338-339`
```
Installé sous 48h
Matériel en stock
```
Le référentiel de faits canoniques interdit explicitement d'affirmer un stock ou un entrepôt DCB (faux fait banni le 01/07/2026, `MEMORY.md` + `content-reference.md`). Le badge flottant du hero le fait pourtant en toutes lettres, sur le hub le plus consulté du silo caisse. C'est un fait vérifiable et faux : un prospect qui demande "je peux venir chercher aujourd'hui ?" met Nathanaël en porte-à-faux. À reformuler (ex. "Installé sous 48h" + "Approvisionnement rapide" ou retrait de la seconde ligne). Vérifier aussi les autres occurrences de "stock" hors dept pages.

### B2. Promesse intenable : "SAV en moins de 4h, 7j/7 24h/24"
`index.html:473` (card pilier caisse homepage) et hub caisse `caisse-enregistreuse/index.html:324` ("Formation sur site incluse, assistance 7j/7 24h/24").
Le référentiel canonique (`content-reference.md`, verrou 21/07/2026) tranche : l'intervention sur site est "sous 4h" et **jamais assortie de 24h/24** (pas de 4h sur site la nuit). La card homepage fusionne les deux en une seule promesse. Lue au premier degré, elle engage un technicien chez le client en 4h à 3h du matin un dimanche. C'est invendable au téléphone et juridiquement risqué sur un contrat. Séparer les deux registres : astreinte/télémaintenance 7j/7 24h/24 d'un côté, sur site "sous 4h, 7j/7" de l'autre. La card pilier homepage est l'endroit le plus visible du site à corriger.

> Note : les bloquants déjà connus (métriques trust bar placeholder, grille IT factice) ne sont pas re-listés ici. En revanche, deux "bloquants connus" sont **résolus** et reclassés en SAIN ci-dessous (logos partenaires, témoignages homepage).

---

## Majeurs

### M1. La preuve et les logos restent caisse-first, à contre-courant de la priorité V2
La priorité V2 est de faire émerger IT et Web (`MEMORY.md` project_priorites_v2). Le hero et les 3 cards piliers donnent bien une parité visuelle. Mais les deux blocs de **preuve** de la homepage sont caisse à 100 % :
- Section "Ce qui nous engage" / "Trois garanties vérifiables" (`index.html:523-615`) : NF525, CashMag, fondateurs. Zéro preuve IT, zéro preuve Web.
- Bandeau partenaires (`index.html:626-644`) : CashMag, NF525, Hairnet, OXHOO, AURES, iMin, Pedro Porto, Yavin. Huit logos caisse/paiement, un seul IT (Lenovo), zéro Web.

Un dirigeant venu pour son informatique ou son site voit une entreprise dont toute la crédibilité affichée est "caisse". Le sous-texte contredit l'ambition V2. Piste marketing (pas front) : introduire au moins une preuve IT et une preuve Web dans le bloc garanties (ex. un chiffre d'engagement IT tenable, une réalisation web), et desserrer le bandeau logos vers l'IT/Web quand des références existent.

### M2. La transparence, différenciateur clé, n'est pas prouvée sur le pilier IT
La transparence est un différenciateur revendiqué (`PRODUCT.md`, `product-marketing-context.md`). Elle est **prouvée** sur le web (prix affiché 950€ HT dès le hero, `visibilite-web/index.html:249,258`) et **incarnée** dans le ton ("On refuse de vendre ce qui ne sert à rien", "on vous dit la vérité même si ça nous coûte une vente", `visibilite-web/index.html:635-636`). Mais le hub IT ne porte **aucun signal de prix** (grep : zéro occurrence de tarif, `maintenance-informatique/index.html`). Résultat : sur le pilier que la V2 veut pousser, la promesse de transparence n'est pas démontrée, seulement affirmée. C'est cohérent avec la grille factice en attente de Clément, mais côté message il faut au minimum un cadrage "voici comment on chiffre / audit gratuit puis devis clair" mis en avant, comme sur seo-sea-local, pour ne pas laisser un trou là où la marque promet de la clarté.

### M3. Objection "et si vous fermez / vous êtes trop petits" non traitée sur les pages de conversion
`PRODUCT.md` liste cette objection comme n°2 ("Vous êtes une petite structure, j'ai peur du manque de continuité"), attendue face à une société de 2 fondateurs vendant du récurrent. La réponse existe dans le brief (22 ans cumulés, 2 bases, portefeuille limité) mais n'apparaît sur aucune page de conversion auditée : ni homepage, ni hubs. Le seul écho est "22 ans cumulés" dans le bloc fondateurs, qui parle d'expertise, pas de pérennité. Pour un cycle caisse long et des contrats IT récurrents, l'angle "on ne va pas disparaître, on est là depuis X, deux bases" doit être visible avant le formulaire. Angle mort à combler (copywriter-site).

### M4. Aucun lead magnet ni raison de laisser un email hors appel
Les seules portes d'entrée sont l'appel, le formulaire de devis, et une newsletter (blog uniquement, `blog/index.html:677`). Toutes les offres à risque zéro ("Diagnostic gratuit", "Audit gratuit sous 48h", "Vérifier l'éligibilité") débouchent sur un contact humain, donc sur le temps des fondateurs, identifié comme goulot de vente (`MEMORY.md`). Il manque une entrée basse pression, sans appel, qui capte un email et nourrit un prospect en cycle long : par exemple un guide de conformité (NF525 : quelle preuve me protège en contrôle), une checklist "avant de signer un site internet", ou un simulateur "ce que coûte une panne un samedi". Ce n'est pas un défaut du site, c'est une brique d'acquisition absente qui pèse d'autant plus que la vente repose sur 2 personnes. À arbitrer avec la stratégie d'acquisition existante.

---

## Mineurs

- **m1. Faute de genre sur le H1 du hub IT.** `maintenance-informatique/index.html:118` et mobile `:879` : "tout votre informatique" (informatique est féminin, lire "toute votre informatique"). Le H1 d'un hub est une vitrine : la faute écorne le sérieux. Correction copywriter-site.
- **m2. "Technicien attitré" contredit la doctrine IT "référent".** Comparatif homepage `index.html:901-902` promet un "technicien attitré". La doctrine du silo IT (`content-reference.md`) proscrit "attitré exclusif" au profit de "référent épaulé par une équipe". Aligner le mot pour ne pas sur-promettre un interlocuteur unique dédié.
- **m3. Lede hero caisse alourdi et redondant.** `caisse-enregistreuse/index.html:312` finit par "Packs caisse tactile à partir de 59 €/mois, un technicien DCB vient chez vous." : le membre final est décroché et répète l'idée du déplacement déjà posée en début de lede. Resserrer.
- **m4. "Pour qui" absent du hero homepage.** H1 "Votre expert local en caisse, informatique et site internet" + lede ne nomment pas la cible (commerçants, artisans, TPE/PME) ; elle n'apparaît qu'en descendant sur les cards. Un mot de cible dans le lede renforcerait l'auto-identification en 5 secondes.
- **m5. Poches de jargon sur le hub IT.** Cards flottantes "Système Online / 4 départements monitorés 24/7" (`maintenance-informatique/index.html:162-163`) et "monitoring sur mesure" (card homepage `index.html:489`). "Monitorés 24/7" et "monitoring" sont les seuls anglicismes tech non traduits qui subsistent, sur le pilier justement le plus exposé au jargon. Préférer "surveillance" / "supervisés". Reste marginal.

---

## Ce qui est SAIN

- **Positionnement 5 secondes : très clair.** Homepage : "Un seul interlocuteur, des techniciens salariés qui se déplacent chez vous sur les départements 71, 69, 01 et 42. Zéro sous-traitance, zéro centre d'appels." (`index.html:449`). Quoi (3 piliers), où (départements nommés), pourquoi eux (interlocuteur unique, salariés, pas de hotline) sont livrés d'emblée. Les 3 hubs ont chacun un H1 net et un lede ancré dans une scène concrète (le meilleur : "boulanger ouvert le dimanche à Mâcon", `visibilite-web/index.html:256`).
- **Ton globalement humain et local, comme promis.** "On prend la main à distance", "un samedi matin", "On n'a pas réinventé le web. On a juste décidé d'être joignables." (`visibilite-web/index.html:614`), "On refuse de vendre ce qui ne sert à rien". C'est la voix d'artisan visée par le brand voice, pas du SaaS générique.
- **Comparatif concurrents honnête et efficace.** "DCB ou 3 prestataires distincts" (`index.html:864-909`) : 5 lignes concrètes par colonne, et surtout un disclaimer assumé ("Comparatif à titre indicatif. Les prestataires spécialisés peuvent convenir aux grandes entreprises avec DSI interne.", `:908`). Cette honnêteté est un différenciateur en soi et évite le comparatif malhonnête classique. Le hub IT porte sa propre version "DCB vs une ESN". Ni mou, ni trompeur.
- **Différenciation proximité et accompagnement : prouvée, pas seulement dite.** Deux bases nommées (Paray + Dardilly), villes citées, techniciens salariés, formation sur site incluse, fondateurs joignables avec leurs vraies photos et parcours (`index.html:601-610`). Concret et vérifiable.
- **Cohérence NF525 alignée sur la réforme 2026.** La FAQ homepage répond "Non, plus obligatoire depuis février 2026" avec les deux preuves acceptées (`index.html:918`). Le piège du "NF525 obligatoire" est évité. L'amende 7 500 € reste comme enjeu réel, correctement cadrée.
- **[Bloquant connu RÉSOLU] Logos partenaires.** La roadmap listait "logos partenaires en texte" comme bloquant. Le bandeau homepage utilise désormais de vrais fichiers image (`partenaire-cashmag.webp`, `partenaire-nf525.webp`, etc., `index.html:626-644`). Plus de spans texte. À confirmer visuellement mais le markup est propre.
- **[Bloquant connu partiellement RÉSOLU] Témoignages homepage.** Les 4 témoignages homepage citent des avis Google réels et attribués (Camille Simon, Teddy Malfroy / DICREA, Groupe QPS, Adrien Desforges, tous "Avis Google", `index.html:658-720`), là où `product-marketing-context.md` liste encore les anciens placeholders (Sophie Moreau, etc.). Doc en retard sur le site. Absence assumée d'aggregateRating (conforme à la doctrine anti self-serving). Reste à vérifier que les sous-pages ne conservent pas d'anciens placeholders.
- **Offre de conversion à risque zéro bien posée.** "Diagnostic gratuit sans engagement", "Audit web sous 48h sans engagement", "Vérifier l'éligibilité" : le premier pas est systématiquement dédramatisé, cohérent avec un public commerçant averse au risque et au piège contractuel.
