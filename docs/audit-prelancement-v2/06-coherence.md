# Audit pré-lancement V2 : Cohérence (claims + valeurs canoniques + parité mobile)

**Date :** 22/07/2026
**Agent :** general-purpose (audit de lecture, aucune page modifiée)
**Périmètre :** 33 pages HTML de production (homepage, silo caisse + 4 pages département, silo IT gelé, silo Web, blog x4, contact, notre-adn, merci, pages légales). Échantillon renforcé sur homepage, hub caisse, hub web, contact, boulangerie, coiffure, restaurant, commerce-de-detail, cashmag, monnayeur, borne-de-commande, ain, loire, rhone, saone-et-loire.
**Méthode :** script Python de vérification en 2 passes (texte visible tags retirés via regex + valeurs d'attributs bruts sur les fichiers réels), croisée avec le référentiel canonique de `docs/content-reference.md` (section "Référentiel de valeurs canoniques", verrouillée le 21/07/2026), avec `docs/council-b5-parite-mobile-juillet-2026.md` (décision GO_CADRE du 21/07) et avec le rapport v1 `docs/audit-prelancement/02-coherence.md`.

---

## NOTE : 92/100

Barème (100 pts, même grille que v1 pour comparabilité) :
- Cohérence des valeurs canoniques transverses (SAV, délais, NF525, formation, clôture, zone, partenaires) : 38/40
- Absence de contradictions inter-pages sur un même claim : 19/20
- Parité desktop/mobile du fond (promesses identiques, forme raccourcie) : 18/20
- Absence de claims invérifiables ou juridiquement risqués : 17/20

Constat principal : le lot de corrections du 22/07 (commit `f390257`) a soldé les 3 bloquants de v1 et exécuté l'essentiel du cadre validé par le council B5 (réconciliation FAQPage JSON-LD ↔ DOM mobile sur les 13 pages concernées, clarification "24 à 60 mois" sur les pages département et métier, fond monétaire rapatrié en accordéon mobile). Vérifié directement sur le code, page par page, pas recopié des rapports précédents. Les points restants sont deux gaps de parité ciblés et deux typos cosmétiques, pas une dérive.

---

## [BLOQUANT]

**Aucun bloquant nouveau.** Les 3 bloquants de `docs/audit-prelancement/02-coherence.md` sont corrigés, vérifiés sur le fichier réel :

1. "La majorité" → "95%" : `caisse-enregistreuse/index.html` (JSON-LD L219, desktop L986, mobile L1441) et `caisse-enregistreuse/commerce-de-detail/index.html` (JSON-LD L71, desktop L550, mobile L935) disent bien "95%" dans les 3 shells.
2. Coiffure, base unique : `caisse-enregistreuse/coiffure/index.html` L71/L533/L883 dit désormais "nos deux bases, Paray-le-Monial et Dardilly" dans les 3 shells.
3. Teddy Malfroy dupliqué (homepage + hub IT) : toujours dupliqué dans le code (`index.html` L683/L1152, `maintenance-informatique/index.html` L601/L1317), mais ce point est sorti des bloquants par décision explicite de XIII (cf. `ETAT.md` "Acquis : réutilisation des 7 avis clients sur plusieurs pages : assumée"). Ne pas re-flaguer.

---

## Majeurs

### 1. Contact : date "Mis à jour le" et bloc NAP absents du bureau (présents en mobile uniquement)

`contact/index.html` : le `.d-shell` (L498-L710) ne contient aucune date de fraîcheur ni bloc "DCB Technologies · Paray-le-Monial (71) · Intervention 71 / 69 / 01 / 42". Ces deux lignes n'existent que dans le `.m-shell`, section "S4 : FOOTER INFO" :

```
714: <p class="c-info-text">DCB Technologies · Paray-le-Monial (71) · Intervention 71 / 69 / 01 / 42</p>
715: <p class="c-info-text">Mis à jour le <time datetime="2026-07-21">21 juillet 2026</time></p>
```

Toutes les autres pages dual-shell du site (homepage, hub caisse, hub web, silo IT, blog, notre-adn) ont un `<time class="d-updated">` équivalent côté desktop. Contact est la seule page où le signal E-E-A-T de fraîcheur est visible sur mobile mais absent sur desktop : c'est l'inverse du défaut habituel (mobile amputé), mais c'est bien un défaut de parité. Correction : dupliquer les 2 lignes dans le `.d-shell` (section footer/CTA équivalente), coût quasi nul, texte-only.

### 2. Restaurant : argument différenciateur "Addition contestée" absent du mobile

`caisse-enregistreuse/restaurant/index.html`, section desktop "Ce que vivent la plupart des restaurateurs avant de nous appeler" (H2 L273) :

```
291: <h3 ...>Addition contestée, aucune preuve</h3>
292: <p ...>Sans traçabilité, chaque contestation devient un moment délicat face au client. CashMag archive chaque ligne de commande avec son horodatage et le code du serveur. En cas de litige, vous avez la réponse en quelques secondes.</p>
```

Cette section (et son argument unique "traçabilité horodatée") n'a aucun équivalent dans le `.m-shell` (vérifié : `grep` sur la zone mobile ne retourne aucune occurrence de "horodatage" ni "Addition contestée"). C'est le seul endroit du site qui porte cet argument, et il est invisible au premier crawl mobile (index mobile-first) et à la majorité des visiteurs réels. C'était l'un des points du cadre council B5 (point 6) : les 2 FAQ ("titres-restaurant", "menus du jour") ont bien été rapatriées en mobile, mais pas cette section problème/solution. Correction : condenser le paragraphe en 1-2 phrases dans un bloc mobile existant (pas de rebuild Tailwind nécessaire), cohérent avec la doctrine "la forme raccourcit, pas le fond".

---

## Mineurs

### 3. "Oxhoo" au lieu de "OXHOO" sur la homepage

`index.html` L629 (`alt="Oxhoo, matériel caisse tactile"`) et L987 (`<li>Oxhoo, matériel caisse tactile</li>`) : partout ailleurs sur le site (7 occurrences), le partenaire s'écrit "OXHOO" en majuscules. Cosmétique, à corriger dans la même passe que le point 1.

### 4. Silo IT gelé : "Mis a jour le" sans accent sur le "à" (desktop uniquement)

Les 6 pages du silo `maintenance-informatique/` ont, côté `.d-shell` uniquement, la balise `<time class="d-updated">Mis a jour le ...</time>` (accent manquant sur "à"), alors que le `.m-shell` de la même page affiche correctement "Mis à jour le". Exemple : `maintenance-informatique/index.html` L846 (desktop, sans accent) vs L1523 (mobile, correct). Même défaut sur `cloud-securite`, `infogerance-pme`, `location-vente-installation`, `maintenance-depannage`, `outils-collaboratifs`. Typo, pas une corruption d'encodage (le reste du fichier est propre). Silo gelé : à corriger au dégel, pas maintenant.

---

## Section IT gelé (maintenance-informatique/, hors blocage go-live)

Constats déjà documentés en v1, revérifiés sur le fichier réel : statut inchangé, aucune action requise avant lancement.

- **`infogerance-pme/index.html` L67-72** : `areaServed` JSON-LD toujours sans Paray-le-Monial (liste 71/69/01/42/Lyon uniquement). Inchangé depuis v1 (finding #4).
- **`infogerance-pme/index.html` L218 et L681** : "Résolution immédiate pour 92% des incidents" contredit toujours le "95%" verrouillé partout ailleurs sur le site. Inchangé depuis v1 (finding #5).
- **`location-vente-installation/index.html`** ("les marques leaders", L46/L537/L917) et **`outils-collaboratifs/index.html`** ("suites collaboratives leaders du marché", L180) : vocabulaire promotionnel léger, inchangé depuis v1 (finding #6).
- **Nouveau, mineur** : "Mis a jour le" sans accent sur les 6 pages du silo (cf. Mineur #4 ci-dessus), desktop uniquement.

---

## Ce qui a changé depuis le council B5 (21/07) : delta très positif

Vérification directe du cadre "GO_CADRE" décidé le 21/07 (`docs/council-b5-parite-mobile-juillet-2026.md`) :

- **Socle point 1 (réconciliation FAQPage JSON-LD ↔ DOM mobile)** : vérifié sur 13 pages (monnayeur, borne-de-commande, restaurant, commerce-de-detail, coiffure, cashmag, ain, loire, rhone, saone-et-loire, hub caisse, hub web, creation-site-internet). Sur chacune, le nombre de `"@type": "Question"` en JSON-LD est strictement égal au nombre de blocs `.ans` réellement rendus en mobile. Zéro écart résiduel sur l'échantillon vérifié.
- **Socle point 2 ("60 mois" = lock-in)** : la clarification "engagement de 24 à 60 mois, flexible" est bien présente en mobile sur commerce-de-detail, coiffure, ain, loire, rhone, saone-et-loire.
- **Point 3 (dept : financement + objection anti-concurrent)** : "24 à 60 mois" et l'objection "revendeurs nationaux" sont bien rapatriés en mobile sur ain, loire, rhone, saone-et-loire.
- **Point 4 (cashmag)** : les 3 FAQ décisionnelles (différenciateur vs caisse en ligne, RGPD, migration) sont bien présentes en mobile.
- **Point 5 (hub caisse)** : la FAQ décomposition prix 59€ vs 77€ est bien présente en mobile.
- **Point 6 (restaurant)** : les 2 FAQ (titres-restaurant, menus du jour) sont rapatriées en mobile ; la section problème/solution "Addition contestée" ne l'est PAS (cf. Majeur #2 ci-dessus). Le cadre est donc appliqué à 90%, pas à 100%.

Ce delta est la nouvelle la plus importante de cet audit : un chantier estimé "~1 jour" par le council a bien été exécuté à quasi-totalité en une passe, sans rebuild Tailwind, texte-only comme prévu.

---

## Ce qui est sain (reconfirmé)

- Téléphone `04 82 53 05 10` : zéro variante sur les 33 pages, y compris `tel:0482530510` et JSON-LD `+33482530510`.
- Email `contact@dcb-technologies.fr` : zéro variante (seule autre adresse trouvée, `contact@votre-entreprise.fr`, est un exemple placeholder assumé sur `visibilite-web/hebergement/index.html`).
- Zone 71/69/01/42 : toujours les 4 départements ensemble, jamais un sous-ensemble ni un département hors zone.
- NF525 : toutes les mentions (blog pilier, homepage, silo caisse) disent correctement "n'est plus obligatoire depuis février 2026", jamais "obligatoire". Cohérent.
- Clôture caisse : "3 minutes" uniforme (boulangerie, coiffure, restaurant), monnayeur "30 secondes" reste l'exception assumée.
- Formation : "demi-journée" uniforme partout où une durée est précisée (ain, loire, rhone, saone-et-loire, hub caisse, commerce-de-detail).
- Dates E-E-A-T "Mis à jour le" : parfaitement synchronisées entre `.d-shell` et `.m-shell` sur les 33 pages, à la seule exception de contact (Majeur #1) et du typo IT (Mineur #4).
- Formulaires/CTA : tous les `action="...send.php"` pointent vers le même script quelle que soit la profondeur, toutes les redirections aboutissent à `/merci/`, aucun lien de formulaire cassé détecté.
- Claims chiffrés : "+20% panier moyen" (borne de commande) uniforme sur 6 pages, "95%" uniforme sur tout le silo caisse hors IT gelé, "22 ans cumulés" fondateurs (10 + 12) cohérent entre homepage et notre-adn.
- Comparatif concurrents : réécriture assainie (commit `5275c59`), plus aucun claim faux détecté dans le comparatif.

---

## Améliorations post-lancement

- `docs/audit-parite-mobile.md` est un rapport généré automatiquement et maintenant significativement périmé : les écarts Δ qu'il liste (monnayeur 0.36, borne 0.41, hairnet 0.47, etc.) datent d'avant les corrections FAQ mobile du 22/07, qui ont mécaniquement remonté le mot-compte mobile sur toutes les pages concernées. À régénérer avant de s'en servir pour prioriser un futur chantier.
- Corriger les 2 mineurs (Oxhoo, accent "Mis a jour") dans un commit texte-only unique, avec grep em dash + validation à l'agent `site-qa`.
- Différencier plus nettement, dans le prochain audit, "argument différenciateur unique" (à traiter comme du fond) de "densité redondante" (coupe légitime), pour éviter que des points comme le restaurant (Majeur #2) se perdent dans un chantier de coupe plus large.

---

## Note méthodologique

Contrairement à v1, cet audit a pu s'appuyer sur un référentiel canonique déjà verrouillé (`docs/content-reference.md`) et une décision de council déjà exécutée (`docs/council-b5-parite-mobile-juillet-2026.md`), ce qui a permis de vérifier des engagements précis (comptage JSON-LD vs DOM mobile, page par page) plutôt que de redécouvrir des écarts. Les 2 majeurs relevés ici sont des résidus fins d'un chantier par ailleurs bien exécuté, pas une régression.
