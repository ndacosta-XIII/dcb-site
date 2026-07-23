# Audit dégel silo IT : cannibalisation

**Source auditée :** worktree `deploy-it` (= branche `deploy` = live `https://dcb-technologies.fr/new/`). Périmètre : `maintenance-informatique/` refondu (hub + 5 sous-pages nouveaux slugs) face au reste du site du même worktree (silo caisse, silo Web, blog).

**Note : 71/100**

Silo neuf, bien cloisonné sur le fond (5 verticales distinctes, aucun H1 dupliqué, FAQ à intention propre par page). Mais la refonte a introduit une régression volontaire sur le title du hub par rapport au v1 : le hub nomme maintenant explicitement les mots-clés de ses deux plus grosses sous-pages dans son propre title, et une question FAQ est reprise mot pour mot entre le hub et `infogerance-maintenance`. Un vrai chevauchement de fond existe aussi entre `emails-pro-collaboration` (silo IT) et `hebergement` (silo Web) sur l'email professionnel, sans aucun lien ni distinction éditoriale entre les deux pages.

## 1. Collisions internes au silo (matrice title / H1 / meta)

| Page | Title | H1 | Meta description (extrait) |
|---|---|---|---|
| Hub (`index.html`) | Maintenance Informatique PME : dépannage, infogérance \| DCB Technologies | Un seul interlocuteur pour tout votre informatique | Infogérance, maintenance informatique, dépannage, cybersécurité et emails pro pour PME. Techniciens salariés... |
| `infogerance-maintenance/` | Infogérance et Maintenance Informatique Sur Mesure pour PME \| DCB Technologies | Le service informatique de votre PME, sur mesure | Service informatique sur mesure pour PME : surveillance, maintenance préventive et curative... |
| `depannage-assistance/` | Dépannage informatique & assistance utilisateurs \| DCB Technologies | Dépannage informatique et assistance utilisateurs | Dépannage informatique et assistance utilisateurs pour PME. Diagnostic à distance... |
| `cybersecurite-sauvegarde/` | Cybersécurité & sauvegarde PME \| DCB Technologies | Cybersécurité et sauvegarde : protégez vos données d'entreprise | Cybersécurité et sauvegarde pour PME : sauvegarde externalisée, antivirus managé... |
| `emails-pro-collaboration/` | Email professionnel & outils collaboratifs : Microsoft 365, Google Workspace \| DCB Technologies | Votre email pro et vos outils collaboratifs | Adresse mail professionnelle à votre nom de domaine et outils collaboratifs... |
| `materiel-reseaux/` | Matériel Informatique et Réseaux d'Entreprise \| DCB Technologies | Matériel informatique et réseaux d'entreprise | Matériel informatique et réseaux d'entreprise : postes, serveurs, NAS, switchs... |

Les H1 sont bien distincts (aucun mot-racine partagé entre deux H1). Les 4 sous-pages `depannage-assistance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration`, `materiel-reseaux` ont un title propre, sans recoupement mutuel. Le problème se concentre sur le hub, qui vise deux requêtes à la fois plutôt que de rester un agrégateur neutre (voir Majeur 1 ci-dessous).

## BLOQUANTS pré-lancement

Aucun bloquant identifié sur cette dimension.

## MAJEURS (à corriger avant lancement, non bloquants au sens strict)

### M1. Le title du hub nomme littéralement les deux mots-clés de ses sous-pages les plus proches

- Preuve : `maintenance-informatique/index.html:10` → `<title>Maintenance Informatique PME : dépannage, infogérance | DCB Technologies</title>`
- Comparaison : `maintenance-informatique/infogerance-maintenance/index.html:10` contient « Infogérance » et « Maintenance Informatique » ; `maintenance-informatique/depannage-assistance/index.html:10` contient « Dépannage informatique ».
- Le hub reprend donc les deux noyaux exacts (« dépannage », « infogérance ») de ses deux enfants dans son propre title. C'est une régression par rapport au v1 audité en juillet (`docs/audit-prelancement/06-cannibalisation.md:80-83`), où le title hub était « Maintenance Informatique PME : Intervention <4h » (mot-clé de service absent, collision jugée mineure car limitée au mot-racine « Maintenance Informatique »).
- Risque réel : sur la requête « maintenance informatique PME » ou « dépannage informatique PME », Google doit arbitrer entre 2 à 3 URLs qui partagent le même triplet de mots. Le H1 reste différenciateur donc le risque n'est pas critique, mais le title est le signal le plus fort pour le moteur.
- Correction proposée : recentrer le title du hub sur un rôle d'agrégateur générique (ex. reprendre l'esprit du H1 : « Maintenance informatique PME : infogérance, dépannage, sécurité (71/69/01/42) » en gardant le verbe qui l'ancre comme porte d'entrée, ou revenir à un format proche du v1 sans lister « dépannage » et « infogérance » comme les deux premiers mots après les deux-points). Alternative : garder la liste mais retirer un des deux mots (l'un des deux, pas les deux, pour casser la paire exacte reprise par les sous-pages).

### M2. FAQ : question strictement identique entre le hub et `infogerance-maintenance`

- Preuve : `maintenance-informatique/index.html:179` → `"name": "Qu'est-ce que l'infogérance informatique ?"` (JSON-LD FAQPage), répétée en visible à `maintenance-informatique/index.html:960` et `:1687`.
- `maintenance-informatique/infogerance-maintenance/index.html:127` → même question mot pour mot : `"name":"Qu'est-ce que l'infogérance informatique ?"`, répétée en visible à `:730` et `:1224`.
- Les réponses diffèrent (paraphrase différente), mais la question posée est identique caractère pour caractère sur deux URLs distinctes. Pour un featured snippet ou un FAQ rich result Google, c'est la même question qui concourt sur deux pages : dilution, pas de gain.
- Correction proposée : reformuler la question du hub pour rester au niveau agrégateur (ex. « Qu'est-ce que l'infogérance et à qui s'adresse-t-elle ? » ou fusionner avec une question plus généraliste type « Infogérance, dépannage, cybersécurité : quelle différence ? »), en laissant la question précise « Qu'est-ce que l'infogérance informatique ? » exclusivement à `infogerance-maintenance/`.

## 2. Collisions inter-silos

### Silo caisse (SAV) vs `depannage-assistance` (IT)

Aucune collision. Le hub caisse (`caisse-enregistreuse/index.html:9`, title « Caisse enregistreuse NF525 : installation et SAV sur site ») et son H1 (`:1045`) portent exclusivement sur le SAV matériel de caisse enregistreuse (remplacement, intervention sur le TPV). `depannage-assistance/` porte sur le poste de travail / parc informatique générique (PC, écran noir, disque dur, données). Intentions de recherche différentes malgré le mot commun « SAV » / « dépannage » ; aucun chevauchement de requête plausible (« SAV caisse enregistreuse » vs « dépannage informatique »).

### `materiel-reseaux` (IT) vs silo caisse

Le silo caisse actuel ne contient plus de page « location-vente-installation » (confirmé absente de l'arborescence `caisse-enregistreuse/`, slug supprimé lors d'une refonte antérieure). `materiel-reseaux` couvre postes, serveurs, NAS, switchs, Wi-Fi, financement leasing pour le parc informatique général : aucun recoupement de requête avec la caisse enregistreuse elle-même. Pas de cannibalisation.

Point de code annexe (hors périmètre cannibalisation mais détecté en creusant ce comparatif) : `materiel-reseaux/index.html` contient encore, à la ligne 594 (`<div class="m-shell" data-metier="location-vente">`) et dans les sélecteurs CSS lignes 24-32, l'attribut `data-metier="location-vente"` hérité du gabarit indigo `location-vente-installation` de l'ancien silo caisse. Ça n'a aucun effet SEO (attribut non lu par les moteurs) mais c'est un résidu de copier-coller qui mérite un nettoyage cosmétique.

### `emails-pro-collaboration` (IT) vs `hebergement` (silo Web)

**Chevauchement réel, à traiter.** `hebergement/index.html` vend un hébergement web dont l'email fait partie du bundle : H3 dédié « Emails professionnels inclus » (`visibilite-web/hebergement/index.html:277-278`, « Boîtes email illimitées sur votre nom de domaine... Anti-spam, webmail... »), une option de formulaire « Emails professionnels » (`:317`), et une question FAQ dédiée « Combien d'adresses email sont incluses ? » (`:58` / `:436`).

`emails-pro-collaboration/index.html` vend un service différent en nature (migration vers Microsoft 365 ou Google Workspace, avec Teams/SharePoint, formation, télétravail) mais sur le même mot-clé de tête : « email professionnel » / « adresse mail professionnelle ».

- Aucun lien croisé entre les deux pages dans un sens ou l'autre (vérifié par grep : `hebergement` n'apparaît pas dans `emails-pro-collaboration/index.html`, et `emails-pro-collaboration` n'apparaît pas dans `hebergement/index.html`).
- Un visiteur ou un moteur qui cherche « email professionnel PME » ne sait pas laquelle des deux pages DCB doit gagner : la offre basique incluse dans l'hébergement, ou l'offre premium Microsoft 365/Google Workspace.
- Correction proposée (post-lancement, pas bloquant) : ajouter une phrase de distinction sur `hebergement/` (ex. « Pour une suite collaborative complète avec Microsoft 365 ou Google Workspace, voir notre offre dédiée » en lien vers `emails-pro-collaboration/`), et symétriquement un renvoi discret depuis `emails-pro-collaboration/` vers `hebergement/` pour le cas d'une boîte mail simple sans collaboration. Ça clarifie l'intention pour Google (deux pages qui se citent avec un rôle différent, plutôt que deux pages muettes l'une sur l'autre).

## 3. Blog vs nouveau silo

`blog/maintenance-informatique-preventive/index.html` (title « Maintenance informatique préventive : anticiper la panne | DCB », H1 identique) pointe correctement vers les NOUVEAUX slugs : 5 occurrences de `maintenance-informatique/infogerance-maintenance/index.html` (lignes 451, 478, 637, 678) et 2 occurrences du hub (lignes 482, 684). Aucun résidu vers l'ancien slug `infogerance-pme`.

La FAQ du blog reprend le même sujet de fond que la FAQ du hub (préventif vs curatif) mais avec un phrasé et un angle différents : blog = conversationnel/pédagogique (« C'est quoi la différence entre maintenance préventive et curative ? », réponse développée avec du contexte), hub = commercial court (« Quelle est la différence entre maintenance informatique préventive et curative ? »). Conforme à la doctrine : le blog reste informationnel et redescend vers la page transac, pas de prix ni de délai DCB dans l'article, pas de duplication de type FAQPage identique. Pas de cannibalisation constatée.

## 4. Duplicate content interne au silo IT

FAQ : les 6 jeux de questions JSON-LD (`index.html`, `infogerance-maintenance`, `depannage-assistance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration`, `materiel-reseaux`) sont distincts, sauf le doublon exact signalé en M2. Aucune autre question strictement identique trouvée.

Marquee / trust bar : chaque page a un jeu d'icônes et de labels propres (`infogerance-maintenance` : « 4 départements » ; `depannage-assistance` : « Diagnostic à distance », « Techniciens salariés » ; `cybersecurite-sauvegarde` : « 99.9% uptime », « Chiffré AES-256 », « Sauvegarde externalisée » ; `emails-pro-collaboration` : « Migration sans perte » ; `materiel-reseaux` : « Financement leasing », « Installation incluse », « Techniciens salariés »). Pas de duplication de bloc.

Phrase récurrente « techniciens salariés » / « zéro sous-traitance » : présente sur 4 des 6 pages, mais toujours dans une phrase reformulée au contexte (jamais la même phrase mot pour mot recopiée d'une page à l'autre). C'est un marqueur de marque répété volontairement (cf. acquis ETAT.md), pas un duplicate content au sens Google.

## 5. FAQ inter-pages (silo IT)

Un seul doublon strict trouvé : M2 ci-dessus (« Qu'est-ce que l'infogérance informatique ? », hub vs `infogerance-maintenance`). Aucun autre chevauchement de question détecté entre les 6 pages du silo, ni entre le silo IT et les FAQ du silo caisse ou du silo Web échantillonnées pour comparaison.

## Améliorations post-lancement

- Distinguer éditorialement `hebergement` et `emails-pro-collaboration` (cf. section 2).
- Nettoyer le résidu `data-metier="location-vente"` dans `materiel-reseaux/index.html` (cosmétique, zéro impact SEO).
- Une fois du volume de recherche réel disponible (Search Console sur le domaine live), vérifier laquelle des deux pages (hub ou `depannage-assistance`) capte effectivement « dépannage informatique [ville] » et ajuster le title du hub en conséquence si un split de trafic est constaté.

## Comparaison avec le rapport v1 (`docs/audit-prelancement/06-cannibalisation.md`)

Le v1 notait le silo IT à 16/20 sur ce point précis, avec un seul majeur : proximité de title entre le hub (alors « Intervention <4h ») et `maintenance-depannage` (ancien slug), jugée limitée grâce à des H1 différenciés. La refonte a changé les slugs et les titles : le nouveau hub title est en réalité PLUS proche de ses sous-pages qu'avant (il nomme littéralement « dépannage » et « infogérance », les deux mots-clés de tête des deux sous-pages concernées, alors que le v1 ne partageait que le mot-racine « Maintenance Informatique »). S'y ajoute un doublon FAQ strict qui n'existait pas dans le v1 (FAQ hub et FAQ `infogerance-pme` avaient été vérifiées « sans recoupement » à l'époque). Le chevauchement `emails-pro-collaboration` / `hebergement` est nouveau : la sous-page emails n'existait pas en v1 sous cette forme. Delta net : légèrement négatif sur le sous-thème hub-vs-enfant malgré une architecture globale plus propre (5 verticales bien séparées contre l'ancien silo à 5 pages moins distinctes sur le fond, cf. `pour-clement/analyse_IT.md:93` qui notait déjà une cannibalisation de fond entre infogérance et maintenance-dépannage en v1, résolue ici par la refonte).
