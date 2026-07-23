# 07 · Audit pré-lancement V2 : dimension MARKETING / MESSAGE

- **Cible :** version LIVE https://dcb-technologies.fr/new/ (miroir repo local).
- **Date :** 22/07/2026
- **Agent :** marketing-strategist (opus)
- **Périmètre :** homepage + 3 hubs (caisse, IT, web) + pages caisse métier + comparatif concurrents. Le silo IT (`maintenance-informatique/`) est GELÉ : ses constats sont sortis dans la section « IT gelé », jamais en bloquant actionnable.
- **Cadre de jugement :** doctrines business établies (priorité V2 = émerger IT et Web ; caisse = cycle long, se vend à l'appel ; blog ne porte pas les prix ; comparatif honnête). Acquis ETAT.md respectés : « Matériel en stock » validé (non flaggé), 7 avis multi-pages assumés, aucun plan d'avis GBP.

---

## NOTE : 83 / 100

| Critère | Poids | Score | Commentaire |
|---|---|---|---|
| 1. Clarté du positionnement (5 sec) | 20 | 18 | Homepage et 3 hubs limpides sur quoi/où/pourquoi. « Pour qui » toujours implicite sur le hero. |
| 2. Hiérarchie des piliers vs priorité V2 | 15 | 9 | Hero et témoignages à parité désormais, mais les blocs de PREUVE (garanties + logos) restent caisse à 100%. |
| 3. Différenciation prouvée vs affirmée | 20 | 16 | Proximité, accompagnement, transparence web : prouvés. « Technicien attitré » sur-promet un dédié qu'une équipe de 2 ne garantit pas. |
| 4. Cohérence de l'offre (vendable au téléphone) | 20 | 14 | Les 2 bloquants v1 résolus sur la homepage. Un résidu invendable survit sur commerce-de-detail (voir B1). |
| 5. Comparatif + différenciation par page métier | 10 | 9 | Comparatif honnête, disclaimer assumé. Chaque page métier a un angle réel, zéro remplissage interchangeable. |
| 6. Funnel (next step adapté par pilier) | 10 | 9 | Caisse métier = appel, IT = diagnostic gratuit, Web = audit gratuit : aligné. Hub caisse mène au formulaire (voir m2). |
| 7. Ton (humain/local vs corporate) | 5 | 5 | Première personne, voix d'artisan sur les pages non gelées. Jargon résiduel isolé sur l'IT (gelé). |

**Verdict : publiable après correction de B1 (copy, 1 page, 2 lignes).** Le message a nettement progressé depuis v1 (69/100) : les deux claims invendables de la homepage sont corrigés, les témoignages donnent enfin une voix à l'IT et au web, aucune métrique factice ne subsiste. Le plafond à 83 tient à une seule chose non résolue depuis v1 : sur le pilier que la V2 veut pousser, la preuve affichée reste 100% caisse.

---

## [BLOQUANT]

### B1. Promesse intenable « technicien sur site disponible 7j/7 24h/24 » sur commerce-de-detail
`caisse-enregistreuse/commerce-de-detail/index.html:304` (desktop) et `:727` (mobile)
```
Titre    : Technicien sur site en moins de 4h
Sous-titre : Votre technicien attitré, formé à votre parc, disponible 7j/7 24h/24
```
C'est exactement le défaut B2 que la homepage a corrigé (elle affiche maintenant la formule validée « Sur site sous 4h 7j/7, astreinte 24h/24 », `index.html:473,1038`), mais qui survit ici sur une page de conversion. Le « disponible 24h/24 » qualifie directement le technicien sur site : lu au premier degré, il engage un technicien chez le client à 3h du matin un dimanche. La formulation canonique validée (acquis ETAT.md) sépare les deux registres : sur site sous 4h 7j/7 d'un côté, astreinte/télémaintenance 24h/24 de l'autre. Correction (copywriter-site) : aligner le sous-titre sur « Formé à votre parc, astreinte 7j/7 » ou « télémaintenance 24h/24, sur site sous 4h ». Deux lignes, deux shells, une page.

Note de périmètre : les occurrences « SAV 7j/7 24h/24 avec intervention sur site en moins de 4h » (borne-de-commande:151, monnayeur:151, cashmag:612, hairnet:613) sont défendables car elles rattachent le 24h/24 au SAV/astreinte, pas au déplacement. Seul commerce-de-detail accole le 24h/24 au technicien sur site. Bloquant isolé, pas systémique.

---

## Majeurs

### M1. La preuve affichée reste caisse-first, à contre-courant de la priorité V2 (INCHANGÉ depuis v1)
La priorité V2 est de faire émerger IT et Web. Le hero (3 cards à parité) et les témoignages (2 caisse, 1 IT « DICREA secteur lyonnais », 1 web « Groupe QPS ») donnent désormais une voix aux trois piliers, ce qui est une vraie progression. Mais les deux blocs de PREUVE de la homepage restent caisse à 100% :
- Section « Trois garanties vérifiables » (`index.html:523-615`) : NF525, CashMag, fondateurs. Zéro preuve IT, zéro preuve web.
- Bandeau partenaires (`index.html:626-644`) : CashMag, NF525, Hairnet, OXHOO, AURES, iMin, Pedro Porto, Yavin (8 logos caisse/paiement), un seul IT (Lenovo), zéro web.

Un dirigeant venu pour son informatique ou son site voit une entreprise dont toute la crédibilité institutionnelle affichée est « caisse ». Le sous-texte contredit l'ambition V2. Piste marketing (pas front) : introduire au moins une garantie IT tenable et une réalisation web dans le bloc garanties, et desserrer le bandeau logos vers l'IT/web dès que des références existent. C'est le seul frein stratégique non traité depuis v1.

### M2. Objection « et si vous fermez / vous êtes trop petits » toujours non traitée sur les pages de conversion
`PRODUCT.md` liste cette objection comme n°2, attendue face à une société de 2 fondateurs vendant du récurrent (caisse en LTV, contrats IT). La réponse existe dans le brief (expérience cumulée, deux bases) mais n'apparaît sur aucune page de conversion : ni homepage, ni hubs. Le seul écho est « 22 ans cumulés » dans le bloc fondateurs, qui parle d'expertise, pas de pérennité. Pour un cycle caisse long et des contrats récurrents, l'angle « on est là depuis X, deux bases, on ne disparaît pas » doit être visible avant le formulaire. Angle mort à combler (copywriter-site).

### M3. « Technicien attitré » sur-promet un dédié qu'une équipe de 2 ne garantit pas
`index.html:901,1270` (comparatif), `caisse-enregistreuse/commerce-de-detail/index.html:304,306,727`, `cashmag:759`, `hairnet:806`. La promesse « votre technicien attitré » (renforcée par « toujours le même technicien », commerce:306) affirme un interlocuteur technique dédié et nominatif. Pour une structure de 2 fondateurs plus quelques salariés, ce n'est pas structurellement tenable à chaque intervention, et la doctrine `content-reference.md` proscrit « attitré exclusif » au profit de « référent épaulé par une équipe ». Le différenciateur reste fort sans sur-promettre : « un référent qui connaît votre parc », « pas de hotline anonyme ». Aligner le mot pour rester vendable et vrai. Non bloquant (le fond est juste, seul le mot sur-vend).

---

## Mineurs

- **m1. « Pour qui » absent du hero homepage (persiste v1).** H1 « Votre expert local en caisse, informatique et site internet » + lede nomment le quoi/où/pourquoi mais pas la cible (commerçants, artisans, TPE/PME) ; elle n'apparaît qu'en descendant sur les cards. Un mot de cible dans le lede renforcerait l'auto-identification en 5 secondes.
- **m2. Le hub caisse mène au formulaire, pas à l'appel.** `caisse-enregistreuse/index.html:328` : CTA hero primaire « Demander un devis » vers le formulaire, alors que la doctrine (« la caisse se vend à l'appel ») et les pages métier (restaurant et boulangerie mènent avec `tel:`) privilégient l'appel. Le hub est une page d'orientation, c'est défendable, mais un hero caisse orienté « Appeler » serait plus cohérent avec le reste du silo et le cycle de vente réel.
- **m3. Zéro lead magnet ni entrée basse pression hors appel/devis.** Toutes les portes d'entrée (diagnostic gratuit, audit gratuit, vérifier l'éligibilité) débouchent sur le temps des fondateurs, identifié comme goulot. Une entrée sans appel qui capte un email et nourrit un prospect en cycle long (guide conformité NF525, checklist « avant de signer un site ») reste absente. À arbitrer avec la stratégie d'acquisition, pas un défaut du site en soi.

---

## Ce qui est SAIN

- **Positionnement 5 secondes : très clair.** Homepage `index.html:449` : « Un seul interlocuteur, des techniciens salariés qui se déplacent chez vous sur les départements 71, 69, 01 et 42. Zéro sous-traitance, zéro centre d'appels. » Les 3 hubs ont chacun un H1 net et un lede ancré dans une scène concrète (le meilleur : « boulanger ouvert le dimanche à Mâcon », `visibilite-web/index.html:253`).
- **Les 2 bloquants v1 corrigés sur la homepage.** « Matériel en stock » désormais assumé et validé (acquis). La card pilier caisse affiche la formule séparée validée « Sur site sous 4h 7j/7, astreinte 24h/24 » (`index.html:473`), fin de la fusion invendable.
- **Témoignages rééquilibrés et crédibles.** 4 avis Google réels et attribués couvrant les 3 piliers (Camille Simon caisse, Teddy Malfroy/DICREA IT lyonnais, Groupe QPS web, Adrien Desforges caisse). L'IT et le web ont enfin une voix client, là où v1 les trouvait muets. Aucun aggregateRating (conforme à la doctrine anti self-serving).
- **Aucune métrique factice sur les pages auditées.** Grep sur homepage et hubs : zéro « +200 clients », zéro « 98% de satisfaction ». Les trust bars sont qualitatives (4 départements, techniciens salariés, intervention 4h, garantie 5 ans, NF525). Le risque « placeholder à masquer » signalé en roadmap n'existe pas sur ces pages.
- **Différenciation par page métier : réelle, pas interchangeable.** Boulangerie (rush 7h, formules, invendus, monnayeur zéro contact pain/argent), restaurant (plan de salle, envoi cuisine), coiffure (agenda, rappels SMS, fiches clients), commerce (stocks temps réel, fidélité, boutique en ligne), borne (autonomie clients), monnayeur (erreurs de caisse). Chaque hero part d'une scène du métier, pas d'un gabarit rempli.
- **Transparence prouvée sur le web.** Prix affiché dès le hero (« 950€ HT · One-page », `visibilite-web/index.html:246,255`), délai annoncé (7 jours), ton qui incarne la promesse (« On s'occupe de ça, avec des tarifs clairs et un interlocuteur joignable »). Sur le pilier web, la transparence n'est pas seulement dite, elle est démontrée.
- **Comparatif concurrents honnête.** `index.html:864-908` : 5 lignes concrètes par colonne et un disclaimer assumé (« Comparatif à titre indicatif. Les prestataires spécialisés peuvent convenir aux grandes entreprises avec DSI interne »). Ni mou, ni trompeur. Aucun claim invérifiable résiduel, sauf le mot « attitré » (voir M3).
- **Ton humain et première personne.** « On prend la main à distance », « un samedi matin », « on vous dit la vérité même si ça nous coûte une vente ». Voix d'artisan visée, pas de SaaS générique. Les CTA blog sont bien passés à la première personne.
- **NF525 aligné sur la réforme 2026.** FAQ homepage `index.html:918` : « Non, plus depuis février 2026 », deux preuves acceptées, amende 7 500 € correctement cadrée. Le piège « NF525 obligatoire » est évité partout.

---

## IT gelé (constats non actionnables, silo `maintenance-informatique/` en attente Clément)

Sortis en section séparée conformément à ETAT.md. À traiter quand Clément livre la grille et débloque le silo, jamais en bloquant de lancement.

- **Transparence non prouvée sur le pilier IT.** Le hub IT ne porte aucun signal de prix (contrairement au web à 950€). Sur le pilier que la V2 veut pousser, la transparence reste affirmée et non démontrée. Cohérent avec la grille factice en attente, mais côté message il faudra au minimum un cadrage « voici comment on chiffre : audit gratuit puis devis clair » mis en avant, comme sur seo-sea-local.
- **Faute de genre sur le H1 du hub IT.** `maintenance-informatique/index.html:118` : « tout votre informatique » (informatique est féminin, lire « toute votre informatique »). Vitrine du hub, à corriger au déblocage.
- **Jargon résiduel sur le hub IT.** Card flottante « 4 départements monitorés 24/7 » (`:163`) et « monitoring sur mesure » (card homepage `index.html:489`). Seuls anglicismes tech non traduits qui subsistent, sur le pilier le plus exposé au jargon. Préférer « surveillés » / « supervision ».

---

## Delta avec v1 (`docs/audit-prelancement/08b-marketing.md`, 69/100)

| Constat v1 | Statut V2 |
|---|---|
| B1 « Matériel en stock » (bloquant) | RÉSOLU : formulation validée par XIII, dé-bannie (acquis ETAT.md). |
| B2 fusion SAV 4h + 24h/24 sur card homepage (bloquant) | RÉSOLU sur homepage. Survit sur commerce-de-detail uniquement, reclassé B1 étroit (copy, 1 page). |
| M1 preuve/logos caisse-first (majeur) | INCHANGÉ. Seul frein stratégique non traité. Reste M1. |
| M2 transparence non prouvée IT (majeur) | Déplacé en « IT gelé » (silo gelé, hors bloquant). |
| M3 objection continuité non traitée (majeur) | INCHANGÉ. Reste M2. |
| M4 aucun lead magnet (majeur) | INCHANGÉ mais rétrogradé mineur m3 (brique d'acquisition, pas défaut du site). |
| m1 faute de genre H1 IT (mineur) | Déplacé en « IT gelé ». |
| m2 « technicien attitré » (mineur) | AGGRAVÉ : présent sur homepage + 4 pages caisse. Promu M3. |
| m4 « pour qui » absent hero (mineur) | INCHANGÉ. Reste m1. |
| m5 jargon monitoring (mineur) | Déplacé en « IT gelé ». |

Progression nette : 69 vers 83. Les deux corrections de copy structurantes de la homepage ont été appliquées, les témoignages rééquilibrés, aucune métrique factice ne subsiste. Le seul bloquant restant est une correction de 2 lignes sur une page. Le seul frein stratégique de fond (preuve caisse-first) reste ouvert.
