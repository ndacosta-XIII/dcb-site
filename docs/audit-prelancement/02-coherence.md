# Audit pré-lancement DCB Technologies

**Dimension :** Cohérence éditoriale
**Date :** 21/07/2026
**Agent :** general-purpose (audit de lecture, aucune page modifiée)
**Périmètre :** 33 pages HTML de production (homepage, silo caisse + 4 pages département, silo IT, silo Web, blog x4, contact, notre-adn, pages légales). Exclus : `Logo et images/`, `_mockup_tmp/`, `tests/visual/node_modules/`, `.claude/skills/`.
**Méthode :** vérification en 2 passes (texte visible tags retirés + valeurs d'attributs/JSON-LD) de chaque page, croisée avec le référentiel canonique verrouillé le jour même dans `docs/content-reference.md` (section "Référentiel de valeurs canoniques") et avec le diagnostic préalable `docs/audit-coherence-juillet-2026.md`. Chaque constat ci-dessous a été re-vérifié sur le fichier réel au moment de l'audit, pas recopié du rapport précédent : plusieurs points signalés le même jour comme "à corriger" étaient déjà corrigés, d'autres non.

---

## NOTE : 80/100

Barème (100 pts) :
- Cohérence des valeurs canoniques transverses (SAV, délais, horaires, NF525, garantie, formation, clôture, zone) : 32/40
- Absence de contradictions inter-pages sur un même claim : 16/20
- Parité desktop/mobile du fond (promesses identiques, forme raccourcie) : 18/20
- Absence de claims invérifiables ou juridiquement risqués (avis, superlatifs, stats) : 14/20

Le socle est sain : la quasi-totalité des 19 sujets du référentiel canonique (bases opérationnelles, délai 4h, télémaintenance 20 min, clôture 3 min, formation demi-journée, remplacement 48h, no-show divisé par 3, NF525 non obligatoire, amende 7 500 euros, zone 71/69/01/42) est désormais alignée partout où elle apparaît, y compris dans les 3 shells (JSON-LD, desktop, mobile). Les points bloquants ci-dessous sont localisés et rapides à corriger, pas une dérive générale.

---

## [BLOQUANT]

### 1. Taux de résolution à distance : "la majorité" au lieu de 95% sur 2 pages (hub caisse + commerce-de-detail)

Le référentiel verrouillé dit explicitement : *"Taux de résolution à distance : 95%. Jamais 92 / 9-sur-10 / 8-sur-10 / 'la majorité'."* Deux pages utilisent pourtant cette formulation interdite, dans leurs 3 shells.

**`caisse-enregistreuse/index.html`** (JSON-LD L219, desktop L968, mobile L1441, texte identique aux 3 emplacements) :
> "la télémaintenance résout la majorité des incidents en moins de 20 minutes, 7j/7"

**`caisse-enregistreuse/commerce-de-detail/index.html`** (JSON-LD L71, desktop L536, mobile L921, texte identique) :
> "On prend la main à distance immédiatement : dans la majorité des cas, c'est suffisant."

Toutes les autres pages du silo caisse (ain, rhône, loire, coiffure, cashmag, borne-de-commande, monnayeur) affichent bien "95%". Ces deux pages sont les seules à ne pas avoir été alignées. Correction : remplacer "la majorité" par "95%" aux 6 emplacements (3 par page).

### 2. Page coiffure : une seule base citée (Paray-le-Monial), Dardilly absent

Le référentiel dit : *"Bases opérationnelles : 'nos deux bases, Paray-le-Monial (71) et Dardilly (69)'. Jamais Lyon comme base, jamais agences."* La page `caisse-enregistreuse/coiffure/index.html` affirme, dans ses 3 shells (JSON-LD L71, desktop L519, mobile L869, texte identique) :

> "Nous couvrons quatre départements : Saône-et-Loire, Rhône, Ain et Loire. Nos techniciens partent de Paray-le-Monial et interviennent sur Lyon, Villefranche-sur-Saône, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse et Roanne."

C'est un fait incomplet, pas une variante acceptable : la page métier `restaurant` (même famille de page, même question FAQ) dit correctement "Nos techniciens partent de nos deux bases, Paray-le-Monial et Dardilly" (L69/L874). Les pages département (`saone-et-loire`, `rhone`) ont légitimement une seule base par doctrine locale ("Angle 71 = Paray", "Angle 69 = Dardilly", cf. `docs/content-departements-redige.md`), mais coiffure n'est pas une page département : c'est une page métier censée rester neutre. Un lecteur du Rhône lisant "nos techniciens partent de Paray-le-Monial" sur la page coiffure peut raisonnablement conclure, à tort, que DCB n'a pas de présence à Dardilly.

### 3. Témoignage réel (Teddy Malfroy, Dicrea) dupliqué entre la homepage et le hub IT, hors de la règle documentée

`docs/content-reference.md` (section Silo IT) est explicite : *"L'avis réel Teddy Malfroy (Agence de communication Dicrea, Lyon 69) vit sur le hub UNIQUEMENT, en carte unique centrée."* Or la citation identique, mot pour mot, apparaît aussi sur la homepage :

**`maintenance-informatique/index.html`** (desktop L590-591, mobile L1317-1319, avec photo réelle `testimonial-tm.png` et attribution "Agence de communication Dicrea, Lyon (69)") :
> "Nous pouvons compter sur DCB technologies pour toutes nos demandes informatiques dans le secteur lyonnais ! Hyper pro & réactif !"

**`index.html`** (desktop L678/L683-684, mobile L1152-1153, dans le carrousel "Ce que disent nos clients" mêlé aux avis caisse et web, avatar générique "TM" sans la vraie photo, attribution différente "DICREA, secteur lyonnais · Avis Google") :
> même citation exacte, même nom "Teddy Malfroy".

C'est une vraie personne et une vraie entreprise cliente, réutilisée dans un second contexte non prévu, avec une attribution moins précise (perte du "Agence de communication", perte de la photo). Au-delà de la règle interne enfreinte, cela expose DCB si le client découvre son avis recyclé sur une page qu'il n'a pas eu en tête en le laissant (l'avis parle d'"informatique", pas de caisse ni de web, et se retrouve mélangé aux deux sur la homepage). Retirer l'un des deux emplacements, garder le hub IT comme prévu.

---

## Majeurs

### 4. `infogerance-pme` : areaServed JSON-LD toujours sans Paray-le-Monial

Incohérence déjà signalée dans `docs/audit-coherence-juillet-2026.md` (#11), toujours présente : `maintenance-informatique/infogerance-pme/index.html` L67-72 liste "Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42), Lyon" mais pas Paray-le-Monial, alors que le hub caisse, cashmag, le hub IT, cybersécurité, location-vente-installation et outils-collaboratifs l'incluent tous. Invisible au visiteur, mais un signal SEO local incohérent pour la seule page du silo IT concernée. Silo IT gelé : correction à faire au dégel, pas maintenant.

### 5. Silo IT gelé : "92%" contredit le "95%" verrouillé partout ailleurs

`maintenance-informatique/infogerance-pme/index.html` L218 et L681 (desktop + mobile, texte identique) :
> "Télémaintenance prioritaire : Prise en main sécurisée en moins de 20 minutes. Résolution immédiate pour 92% des incidents."

Contredit le "95%" désormais uniforme sur tout le silo caisse. C'est un des 8 points documentés comme "IT en pause" dans le référentiel canonique : aucune action requise avant le dégel du silo, mais à ne pas oublier au moment de la vraie grille tarifaire.

---

## Mineurs

### 6. Formulation "leader/incontournable" ponctuelle (silo IT, gelé)
`maintenance-informatique/location-vente-installation/index.html` ("les marques leaders", L46/L191/L537/L681) et `outils-collaboratifs/index.html` ("suites collaboratives leaders du marché", L180/L596) : vocabulaire promotionnel léger, sans chiffre inventé ni promesse invérifiable, mais à surveiller dans l'esprit anti-slop du site. Pas un claim faux, juste un ton à polir au dégel IT.

### 7. `caisse-enregistreuse/index.html` : "conformité NF525 reste incontournable" (H2, L750/L1304)
Le mot "incontournable" ici décrit l'importance de la conformité (juste, la conformité logicielle reste bien obligatoire), pas la certification NF525 elle-même : ce n'est pas une contradiction avec la doctrine "NF525 plus obligatoire depuis février 2026", simplement une formulation qui peut prêter à une lecture rapide erronée. Aucune correction requise, signalé par prudence.

---

## Parité desktop/mobile du fond

Vérification par sondage sur les pages signalées "contenu mobile très réduit" par `docs/audit-parite-mobile.md` (monnayeur Δ0.36, borne-de-commande Δ0.41, hairnet Δ0.47) : dans les 3, les promesses centrales (SAV 95%/20 min/4h, garantie matériel, durée d'engagement 24-60 mois, prix, clôture) sont bien présentes côté `.m-shell`, avec un texte plus court mais un fond identique, conforme à la doctrine "le mobile raccourcit la forme, pas le fond". L'écart de word-count vient de tableaux comparatifs desktop (ex. "Ce que DCB fait que le revendeur en ligne ne fera jamais", 340+ mots) condensés en un bloc "Aller plus loin" plus court côté mobile : c'est une restructuration de présentation, pas une perte de promesse.

Point d'attention non bloquant : `docs/audit-parite-mobile.md` est un rapport généré automatiquement, daté avant plusieurs corrections déjà appliquées (il liste encore par exemple des H2 "dominer Google" sur `seo-sea-local` qui n'existent plus dans le fichier réel). Le fichier de suivi est à régénérer après le prochain lot de modifications pour éviter de rouvrir des non-problèmes.

---

## Ce qui est SAIN

- **Bases opérationnelles** : "nos deux bases, Paray-le-Monial et Dardilly" est désormais correct sur restaurant, hub caisse, contact, notre-adn (l'erreur "Lyon comme base" documentée dans l'audit du même jour est corrigée). Les pages département (saone-et-loire = Paray, rhône = Dardilly) suivent leur doctrine locale assumée, pas une erreur.
- **Horaires d'ouverture** : "08:30-18:30" identique en JSON-LD et en texte visible sur `index.html` et `contact/index.html` (l'incohérence 8h30 vs 9h-19h documentée le même jour est déjà résolue).
- **Clôture de caisse (hors monnayeur)** : "3 minutes" uniforme sur boulangerie, coiffure, restaurant, dans les 3 shells. Le monnayeur (30 secondes) reste bien un cas produit distinct et assumé.
- **Durée de formation** : "une demi-journée" uniforme sur ain, hairnet, saone-et-loire, cashmag, commerce-de-detail, rhône, hub caisse, loire.
- **No-show coiffure/Hairnet** : "divisés par 3" désormais identique sur hub caisse, coiffure et hairnet (l'ancienne divergence "chutent nettement" sur hairnet est corrigée).
- **NF525** : aucune page n'affirme la certification "obligatoire" ; toutes les mentions (index, blog pilier, commerce-de-detail, coiffure) sont correctement cadrées "plus obligatoire depuis février 2026, conformité du logiciel oui, label non". Cohérent sur tout le site.
- **Zone géographique** : plus aucune occurrence d'"Auxois" (hors zone 71) sur `saone-et-loire`, corrigée depuis l'audit de diagnostic.
- **Devis borne/monnayeur** : "devis sous 24h" uniforme sur les deux pages, l'ancien conflit interne avec un "RDV sous 5 jours ouvrés" sur la même page a disparu.
- **Garantie matériel** : la règle "5 ans" en général et l'exception monnayeur ("1 an + extension +4 ans") cohabitent proprement, sans contradiction : le monnayeur ne revendique jamais "5 ans" en direct, seulement la somme documentée comme exception.
- **Amende NF525 7 500 euros** : constante partout où le sujet est abordé.
- **Avis clients** : aucun `aggregateRating`/`Review` schema (conforme à la doctrine anti-avis auto-servis), chaque témoignage porte un nom et une source "Avis Google" (hors le point 3 ci-dessus sur la duplication Dicrea).

---

## Note méthodologique

Le rapport `docs/audit-coherence-juillet-2026.md`, écrit le même jour, documentait 17 incohérences. À la vérification directe des fichiers, la majorité (bases Lyon/restaurant, horaires, clôture Z, no-show, Auxois, devis borne/monnayeur, formation commerce-de-detail) était déjà corrigée au moment de cet audit : le référentiel canonique de `docs/content-reference.md` a donc bien été propagé sur l'essentiel des pages caisse dans l'intervalle. Les 3 points bloquants et 2 majeurs ci-dessus sont les résidus confirmés sur le fichier réel, pas une redite du diagnostic précédent.
