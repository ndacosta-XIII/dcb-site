# AUDIT DÉGEL SILO IT : Cohérence claims + valeurs canoniques + parité mobile

**Périmètre :** 6 pages `maintenance-informatique/` (hub + infogerance-maintenance, depannage-assistance, cybersecurite-sauvegarde, materiel-reseaux, emails-pro-collaboration).
**Source auditée :** worktree `deploy-it` (= origin/deploy = live https://dcb-technologies.fr/new/), PAS le repo main local.
**Méthode claims :** 2 passes (texte visible balises strippées + valeurs d'attributs data-tooltip/aria-label/alt/meta) sur les 6 fichiers, shells desktop et mobile séparément.

## Note : 68/100

4 bloquants. Le résidu Allier (le risque n°1 signalé par la mission) est totalement absent : zéro trace sur les 6 pages, les deux shells et les 6 JSON-LD `areaServed`. En revanche, la parité mobile et une incohérence de fond sur l'astreinte plombent la note, et un défaut de zone locale déjà signalé au tour précédent (v1) n'a pas été corrigé au dégel comme prévu.

---

## 1. Résidu Allier (priorité 1) : CLEAN, zéro trace

Chasse exhaustive sur les 6 pages, les deux shells, JSON-LD, FAQ, trust bars, metas, alt, tooltips :
- `Allier`, `Moulins`, `Vichy`, `Montluçon` : 0 occurrence sur les 6 fichiers.
- `5 départements` / `cinq départements` : 0 occurrence.
- Les seules occurrences de « 03 » sont des numéros d'étape de listes (`<div class="n">03</div>`, badges `01/02/03/04`), aucune n'est le département de l'Allier.
- Les 6 blocs `areaServed` JSON-LD listent tous exactement `Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)` + villes, jamais l'Allier.
- Le trust bar du hub affiche explicitement « **4 départements couverts** » (`maintenance-informatique/index.html:316`), confirmant la zone canonique en toutes lettres.

Le lot de commits `fd64274` (ajout Allier) → `795fc36` (retrait) a bien été purgé intégralement dans le dernier état livré. Aucune action requise.

---

## 2. Valeurs canoniques

| Valeur | Constat |
|---|---|
| Téléphone `04 82 53 05 10` | Identique sur les 6 pages, desktop + mobile (`tel:0482530510` cohérent partout). |
| Email `contact@dcb-technologies.fr` | Aucune occurrence dans les formulaires visibles (formulaires postent vers `send.php`), pas de faute trouvée. |
| Partenaires (Lenovo, HP, Dell, Synology, Ubiquiti, Cisco, OXHOO, AURES) | Cohérents entre `materiel-reseaux` (FAQ + JSON-LD description + sections) et le cross-sell caisse du hub. |
| Prix / « sur devis » | `materiel-reseaux` est la seule page avec une grille tarifaire (Audit gratuit `0€`, Leasing `Sur devis`, Achat `Sur devis`) : légitime, `0€` = audit gratuit réel, pas un prix factice. Les 5 autres pages ne chiffrent aucun prix (uniquement « devis gratuit », « réponse sous 24h »). Aucun montant EUR factice trouvé, à l'exception de deux statistiques marché légitimes (rançongiciel moyen 20 000€, coût CDI IT 40 000€/an) utilisées en comparatif, pas comme prix DCB. |
| Délais chiffrés | `<4h` (intervention), `sous 24h` (devis/rappel), `sous 48h` (audit cybersécurité initial) : aucune contradiction interne, les seuls chiffres `48-72h` visibles sont attribués aux concurrents dans le comparatif « Chez les autres ». |

### BLOQUANT B1 : contradiction sur l'astreinte (« en option » vs SAV canonique)

La formule verrouillée du site (homepage `index.html:473`, `:1038`) est **« Sur site sous 4h 7j/7, astreinte 24h/24 »**, présentée comme un acquis standard. Le silo IT contredit cette promesse à deux endroits :
- `maintenance-informatique/index.html:703` (desktop) et `:1469` (mobile) : comparatif "Chez DCB" liste **« Astreinte urgences critiques en option »**.
- `maintenance-informatique/infogerance-maintenance/index.html:766-771` (FAQ, desktop) : *« Une astreinte pour les urgences critiques **peut être ajoutée à votre contrat** si votre activité l'exige (...) Si vous n'en avez pas besoin, **vous ne la payez pas**. »*

Le visiteur qui compare la homepage (astreinte 24h/24 incluse, sans réserve) et le silo IT (astreinte = extra payant optionnel) reçoit deux promesses différentes sur le même point de preuve SAV. La formule canonique elle-même (« astreinte 24h/24 ») n'apparaît nulle part dans les 6 pages IT, donc pas de contradiction littérale mot pour mot, mais une contradiction de fond sur ce que le client obtient par défaut.
**Correction proposée :** aligner soit la homepage (préciser que l'astreinte 24h/24 concerne le SAV matériel/caisse, l'IT ayant un régime contractuel différent), soit le silo IT (retirer « en option » si l'astreinte est en réalité incluse comme le reste du site le promet). Décision produit à trancher par XIII, ce n'est pas un simple correctif texte.

---

## 3. Claims inter-silos (IT vs homepage / silo caisse)

- « Un seul interlocuteur / un seul numéro » : cohérent entre homepage (`index.html:449` : *« Un seul interlocuteur, des techniciens salariés (...) »*) et hub IT (`maintenance-informatique/index.html:262-263`, `:1096`). Pas de contradiction.
- « 100% techniciens salariés, zéro sous-traitance » : cohérent entre hub IT et le reste du site.
- Cross-sell vers la caisse (hub IT, `Caisse enregistreuse NF525`) : ne réintroduit pas « NF525 obligatoire », conforme à la doctrine réforme 2026.
- Partenaires TPV (OXHOO, AURES) mentionnés dans `materiel-reseaux` cohérents avec le silo caisse.
- Voir bloquant B1 ci-dessus pour la seule vraie contradiction trouvée.

### BLOQUANT B2 : `infogerance-maintenance` toujours sans Paray-le-Monial dans `areaServed` (régression non corrigée depuis le v1)

Le rapport v1 (`docs/audit-prelancement/02-coherence.md`, point 4) signalait déjà, sur l'ancien slug `infogerance-pme` : *« liste Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42), Lyon mais pas Paray-le-Monial, alors que le hub caisse, cashmag, le hub IT, cybersécurité, location-vente-installation et outils-collaboratifs l'incluent tous (...) Silo IT gelé : correction à faire au dégel, pas maintenant. »*

Au dégel, le nouveau `maintenance-informatique/infogerance-maintenance/index.html` (JSON-LD `areaServed`, ~L147-159) liste : Lyon, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Roanne, Villefranche-sur-Saône. **Toujours pas de Paray-le-Monial**, alors que les 5 autres pages du silo (hub, cybersecurite-sauvegarde, depannage-assistance, materiel-reseaux, emails-pro-collaboration) l'incluent toutes. C'est la seule page de tout le site (silo caisse + silo IT) à ne pas ancrer Paray-le-Monial. Signal SEO local incohérent, invisible au visiteur mais détecté par les moteurs, et correction explicitement promise pour ce dégel.
**Correction proposée :** ajouter `{"@type":"City","name":"Paray-le-Monial"}` dans le tableau `areaServed` de `infogerance-maintenance/index.html`, à l'identique des 5 autres pages du silo.

---

## 4. Parité desktop/mobile (page par page)

### BLOQUANT B3 : FAQ tronquée sur mobile (4 pages sur 6)

Comparaison du nombre de questions FAQ entre `.d-shell` (`<details class="faq-item">`) et `.m-shell` (`<details><summary>`) :

| Page | FAQ desktop | FAQ mobile | Questions absentes du mobile |
|---|---|---|---|
| hub (index) | 6 | 6 | Parité OK |
| emails-pro-collaboration | 7 | 7 | Parité OK |
| **cybersecurite-sauvegarde** | 6 | **4** | « Comment reconnaître un mail frauduleux ou de phishing ? », « Quel antivirus choisir pour une entreprise ? » |
| **depannage-assistance** | 8 | **5** | « Quelles pannes informatiques prenez-vous en charge ? », « Pouvez-vous récupérer les données d'un disque dur en panne ? », « Faut-il apporter l'ordinateur ou intervenez-vous sur place ? » |
| **infogerance-maintenance** | 7 | **5** | « Quelle est la différence avec la maintenance à la panne ? », **« Êtes-vous disponibles pour les urgences ? »** (= la FAQ qui explique l'astreinte, cf. bloquant B1, disparaît purement et simplement sur mobile) |
| **materiel-reseaux** | 6 | **4** | « Proposez-vous des NAS pour la sauvegarde ? », « L'installation est-elle incluse ? » |

Ce n'est pas une réduction de densité (raccourcir le texte) mais une suppression pure et simple de questions entières : le visiteur mobile n'a pas accès à la même information que le visiteur desktop, sur 4 pages sur 6. Contrevient directement à la doctrine parité (« même contenu, la forme raccourcit pas le fond »).
**Correction proposée :** ajouter les questions manquantes aux blocs FAQ mobiles des 4 pages concernées (contenu déjà rédigé côté desktop, à dupliquer).

### Autres écarts mineurs de parité (non bloquants)

- Hub : le trust bar desktop affiche « **4 départements couverts** » (`index.html:316`) ; côté mobile, cette accroche n'apparaît pas telle quelle dans le marquee S2 (qui affiche « Dépannage immédiat », « Techniciens salariés », « Support local », « 0 sous-traitance »). La zone géographique reste présente ailleurs sur mobile (hero : « Saône-et-Loire, Rhône, Ain, Loire »), donc pas de perte d'information, juste une reformulation différente. Amélioration post-lancement, pas un bloquant.
- Intitulés de H2 parfois reformulés entre desktop et mobile sur la section comparatif du hub (« Ce que nos clients ne trouvent nulle part ailleurs » desktop vs « DCB ou une ESN : ce qui change vraiment » mobile) : le contenu de la section (items du comparatif) est identique des deux côtés, seul le titre diffère. Cosmétique, sans impact sur la promesse.

---

## 5. Dates « Mis à jour »

### BLOQUANT B4 : accent manquant sur « Mis à jour » côté desktop, sur les 6 pages

| Page | Desktop (`.d-updated`) | Mobile (`.m-updated`) |
|---|---|---|
| hub | `Mis a jour le 23 avril 2026` | `Mis à jour le 23 avril 2026` |
| cybersecurite-sauvegarde | `Mis a jour le 22 juillet 2026` | `Mis à jour le 22 juillet 2026` |
| depannage-assistance | `Mis a jour le 22 juillet 2026` | `Mis à jour le 22 juillet 2026` |
| emails-pro-collaboration | `Mis a jour le 22 juillet 2026` | `Mis à jour le 22 juillet 2026` |
| infogerance-maintenance | `Mis a jour le 24 avril 2026` | `Mis à jour le 24 avril 2026` |
| materiel-reseaux | `Mis a jour le 22 juillet 2026` | `Mis à jour le 22 juillet 2026` |

Sur les 6 pages, sans exception, le bloc desktop (`<time class="d-updated">`) écrit **« Mis a jour »** (accent grave absent sur le a), alors que le bloc mobile équivalent (`<p class="m-updated">`) l'écrit correctement **« Mis à jour »**. Vérifié : ce n'est pas un problème d'encodage global du fichier (le `à` s'affiche correctement ailleurs sur la même page, y compris dans le bloc mobile juste en dessous) : c'est une faute de frappe ponctuelle introduite dans le template desktop du bloc date, répétée à l'identique sur les 6 pages. Comparaison : les pages de référence (`index.html`, `caisse-enregistreuse/index.html`) écrivent correctement « Mis à jour » des deux côtés.

Dates identiques entre les deux shells de chaque page (pas de dérive de date), seul l'accent manque côté desktop.
**Correction proposée :** ajouter l'accent grave dans les 6 occurrences `<time class="d-updated">Mis a jour le ...` → `Mis à jour le ...`.

---

## 6. Cohérence de désignation (nav, footer, breadcrumb, cross-sell, sitemap)

Noms des 5 sous-pages comparés dans `js/scripts.js` (dropdown desktop, sheet mobile, footer, menu burger), les `BreadcrumbList` JSON-LD de chaque page, les cartes cross-sell du hub, et `sitemap.xml` :

| Page | Nom utilisé |
|---|---|
| Infogérance et maintenance | Identique partout (nav, footer, breadcrumb, cross-sell, sitemap). |
| Dépannage et assistance | Identique partout. |
| Cybersécurité et/& sauvegarde | Contenu H1 et breadcrumb : « Cybersécurité **et** sauvegarde ». Nav desktop, footer, sheet mobile et cross-sell hub : « Cybersécurité **&** sauvegarde ». Le menu burger mobile (`scripts.js` ligne ~105, fonction `mobLink`) est la seule occurrence à écrire l'esperluette en caractère brut (`&`) au lieu de l'entité `&amp;` utilisée partout ailleurs dans le même fichier. Rendu visuel identique, aucun impact utilisateur ; à corriger par cohérence de code lors d'un futur passage `13header`/`13footer`. |
| Matériel et réseaux | Identique partout. |
| Emails Pro et collaboration | Identique partout. |

Slugs `sitemap.xml` (`infogerance-maintenance`, `depannage-assistance`, `cybersecurite-sauvegarde`, `materiel-reseaux`, `emails-pro-collaboration`) correspondent exactement aux dossiers réels et aux liens de nav/footer/cross-sell. Pas de résidu vers les anciens slugs supprimés (`infogerance-pme`, `maintenance-depannage`, `cloud-securite`, `outils-collaboratifs`, `location-vente-installation`) dans les `<a href>` : les seules occurrences restantes de ces chaînes sont des **noms de fichiers image** hérités (`maintenance-depannage-technicien-intervention.webp`, `cloud-securite-technicien-baie-reseau.webp`, `infogerance-pme-bureau-supervision.webp`), invisibles au visiteur, aucun lien cassé.

---

## Comparaison avec le v1 (`docs/audit-prelancement/02-coherence.md`)

Le v1 avait figé le silo IT (« gelé ») et listé 3 points à traiter au dégel :
1. Citation Teddy Malfroy dupliquée homepage/hub (hors périmètre de cet audit, silo homepage).
2. **Paray-le-Monial absent de `infogerance-pme`** : **toujours présent après renommage** en `infogerance-maintenance` → **bloquant B2 ci-dessus, non résolu**.
3. Stat « 92% contredit le 95% verrouillé » sur `infogerance-pme` : **résolu**, la statistique a été retirée du nouveau texte, aucune occurrence de pourcentage trouvée sur les 6 pages.
4. Vocabulaire « leader/incontournable » à surveiller : toujours présent (« marques leaders » pour HP/Lenovo/Dell/OXHOO/AURES sur `materiel-reseaux`) mais décrit des marques tierces, pas une auto-promotion DCB : accepté comme au v1, pas un claim faux.

Le dégel a donc introduit 3 défauts nouveaux non présents dans le silo gelé du v1 (B1 astreinte, B3 FAQ mobile tronquée, B4 accent « Mis à jour ») en plus de ne pas avoir corrigé le défaut B2 déjà identifié.

---

## Récapitulatif bloquants

| # | Constat | Preuve | Correction |
|---|---|---|---|
| B1 | Astreinte « en option » (IT) contredit « astreinte 24h/24 » (homepage) | `maintenance-informatique/index.html:703,1469` ; `infogerance-maintenance/index.html:766-771` | Trancher la formulation avec XIII (contrat IT différent du SAV matériel, ou alignement) |
| B2 | `infogerance-maintenance` sans Paray-le-Monial dans `areaServed`, seule page du site dans ce cas, déjà signalé au v1 | `infogerance-maintenance/index.html` bloc `areaServed` ~L147-159 | Ajouter `{"@type":"City","name":"Paray-le-Monial"}` |
| B3 | FAQ mobile tronquée (2 à 3 questions manquantes) sur 4 pages sur 6 | Voir tableau section 4 | Dupliquer les questions FAQ manquantes côté `.m-shell` |
| B4 | « Mis a jour » sans accent côté desktop sur les 6 pages | `<time class="d-updated">` des 6 fichiers, voir tableau section 5 | Ajouter l'accent grave : « Mis à jour » |

## Améliorations post-lancement (non bloquantes)

- Trust bar « 4 départements couverts » absent du marquee mobile du hub (info présente ailleurs, reformulation seulement).
- `scripts.js` : uniformiser l'esperluette (`&amp;` partout) dans le menu burger mobile pour « Cybersécurité & sauvegarde » (trigger `13header`/`13footer` requis).
- Noms de fichiers image conservant les anciens slugs (`maintenance-depannage-*.webp`, `cloud-securite-*.webp`, `infogerance-pme-*.webp`) : dette technique cosmétique, aucun lien cassé.
