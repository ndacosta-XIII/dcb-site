# Audit Cannibalisation SEO (V2, reprise)

**Dimension :** Cannibalisation (collision de requête cible entre pages du même site)
**Date :** 22/07/2026
**Agent :** seo-expert (Sonnet 5)
**Cible :** version LIVE https://dcb-technologies.fr/new/ (repo local = miroir, branche deploy synchro 394ad40 = main f390257)
**Périmètre :** les 28 pages du repo (hub caisse + 4 pages département + 8 sous-pages métier/produit, hub IT + 5 sous-pages, hub Web + 3 sous-pages, blog 4 articles, pages spéciales). Comparaison title/H1/meta/JSON-LD sur fichier, plus vérification GSC de la propriété `https://dcb-technologies.fr/` (30 jours, dimensions `query,page`).

Rappel méthodologique (déjà posé en v1, toujours vrai) : `/new/` porte un `noindex` intentionnel (staging, cf. Acquis ETAT.md), donc la Search Console ne mesure encore que l'ancien site V1 à la racine. Les URLs vues dans GSC (`caisse-enregistreuse/metiers/boulangerie-patisserie/`, `caisse-enregistreuse/paray-le-monial/`) n'existent pas dans l'arborescence V2 : c'est bien la V1, pas une régression V2. La donnée sert de signal de demande et de collision passée, pas de mesure du code V2.

Rappels de doctrine respectés dans cet audit (non re-signalés s'ils sont conformes) : pages métier neutres au département ; pages département = landers locaux avec villes réelles ; silo Web volontairement sans pages département ; blog ne porte jamais les prix/délais DCB ; `seo-sea-local` = lander SEA/GBP, pas un pari organique ; aucune page ne porte de schéma `aggregateRating`/`Review`.

---

## NOTE : 84/100

**Barème (5 catégories, 100 points), avec note v1 entre parenthèses :**

| # | Catégorie | Points | v1 | Note |
|---|---|---|---|---|
| 1 | Silo Caisse : hub vs 4 pages département vs 8 pages métier/produit | 23/25 | 22/25 | Inchangé et toujours sain (hub neutre, H1 département uniques, aucun doublon FAQ). Léger mieux sur le mineur des metas dupliquées (boulangerie n'en fait plus partie, reste 4 pages sur 5 avec la même formule ville). Coiffure/Hairnet toujours en chevauchement thématique title+H1 (inchangé, voir Majeurs) |
| 2 | Silo IT : hub vs 5 sous-pages | 16/20 | 16/20 | Inchangé (silo gelé, voir section IT gelé) |
| 3 | Silo Web : hub vs `seo-sea-local` vs `creation-site-internet` | 22/25 | 6/25 | **Bloquant v1 résolu.** H1 du hub reformulé (`Votre présence en ligne, du site au référencement, visible quand le client cherche votre métier`), ne reprend plus le H1 d'aucun enfant. Les 3 paires de questions/réponses FAQPage dupliquées (prix, délai, SEO vs SEA) ont été retirées du hub et remplacées par 7 questions à thème propre (fiche Google vs site, Maps, mobile/vocal, migration, reprise de maintenance, hébergement). Déduction résiduelle : le `<title>` du hub (`Création de site internet et SEO local`) reprend encore verbatim la tête du title de `creation-site-internet` (`Création Site Internet Professionnel PME`) et la meta description cite les 3 offres des 3 enfants ; ce n'est plus une collision H1 ni un doublon de texte FAQ, juste une proximité de title, voir Majeurs |
| 4 | Blog vs pages transactionnelles | 15/15 | 15/15 | Inchangé et toujours sain : zéro prix DCB dans le corps et le FAQPage vérifiés, maillage descendant vers la page transac intact (4 occurrences vérifiées sur l'article prix, contre 3 en v1) |
| 5 | Couverture requête réelle (GSC 30 jours, hors marque) | 8/15 | 4/15 | Amélioré mécaniquement par la résolution du point 3 (le seul vrai doublon de texte mesurable a disparu) mais la lacune structurelle demeure : la demande IT locale réelle (sauvegarde externalisée Mâcon, Villefranche) n'a toujours aucune page V2 dédiée (doctrine assumée, non remise en cause). Sur Caisse, la collision hub/page Rhône toujours visible sur le V1 (`caisse enregistreuse lyon` : hub 19 impr. position 11,9 sur 30 jours vs page Rhône 62 impr. position 14,4) confirme que le V2, non encore indexé, doit impérativement remplacer ce comportement une fois en ligne |

**Total : 84/100** (v1 : 63/100, delta +21). Le point qui plombait la note v1, le silo Web, est corrigé sur les deux preuves concrètes (H1 et FAQ dupliquée). Il reste une collision de second ordre (title) sur ce même silo, et les deux majeurs v1 (IT, coiffure/hairnet) n'ont pas bougé.

**Bloquants identifiés : 0** (v1 : 1, résolu)

---

## Vérification du correctif silo Web (demandé explicitement)

**H1 hub, `visibilite-web/index.html`**
Desktop, ligne 250-252 :
```html
<h1 class="font-sora text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
  Votre présence en ligne, du site au référencement, <br><span class="text-[#F57C00] italic font-semibold">visible quand le client cherche votre métier</span>
</h1>
```
Mobile (`.m-shell`), ligne 861 :
```html
<h1>Votre présence en ligne, du site au référencement, <em>visible quand le client cherche votre métier.</em></h1>
```
Parité desktop/mobile confirmée. Le H1 ne reprend plus ni « Création de site internet » (H1 de `creation-site-internet`, ligne 749) ni « Référencement local et Google Ads » (H1 de `seo-sea-local`, ligne 437). Correctif effectif.

**FAQPage hub, `visibilite-web/index.html` lignes 148-154**
Les 3 questions dupliquées identifiées en v1 (« Combien coûte un site internet chez DCB Technologies ? », « En combien de temps mon site est-il livré ? », « Quelle est la différence entre le SEO et le SEA ? ») sont absentes. Les 7 questions actuelles du hub (fiche Google vs site, visibilité Maps, mobile/vocal/IA, migration sans perte de référencement, référencement local par ville, reprise de maintenance, contenu de l'hébergement) ont été comparées une à une aux FAQ de `creation-site-internet/index.html` (lignes 100-109), `seo-sea-local/index.html` (lignes 61-68) et `hebergement/index.html` (lignes 54-59) : aucune paire question/réponse identique ou quasi identique. Correctif effectif, zéro duplicate content FAQ restant dans le silo Web.

**Résidu non demandé mais détecté à l'audit : proximité de `<title>`**
```
Hub          : Création de site internet et SEO local | DCB Technologies
Sous-page 1  : Création Site Internet Professionnel PME | DCB Technologies
Sous-page 2  : Référencement local : SEO et Google Ads | DCB Technologies
```
Le title du hub commence par « Création de site internet », identique à la tête du title de `creation-site-internet`. Ce n'est plus une collision H1 (corrigée) ni un doublon FAQ (corrigé), seulement un chevauchement de balise `<title>`, moins grave que le bloquant v1 mais qui mérite d'être desserré pour laisser le hub à un rôle purement agrégateur, sur le modèle des deux autres hubs du site (`Caisse enregistreuse NF525 : installation et SAV sur site`, `Maintenance Informatique PME : Intervention <4h`, aucun des deux ne reprend le title d'un enfant). Non bloquant, classé en Majeur ci-dessous.

---

## Majeurs

### 1. [Silo Web] Proximité de `<title>` hub / `creation-site-internet` (nouveau, résidu du bloquant v1 corrigé)

Voir preuve ci-dessus. Correction proposée : retitrer le hub sur l'offre globale sans répéter « création de site internet » mot pour mot, par exemple sur le registre déjà choisi pour le H1 (« présence en ligne », « visibilité web »). Tâche de contenu, à confier à `copywriter-site` après validation de XIII (process page publication-ready), pas d'application directe ici.

### 2. [Silo IT, GELÉ] Proximité de title hub / `maintenance-depannage` : inchangé depuis v1

`maintenance-informatique/index.html:10` : `Maintenance Informatique PME : Intervention &lt;4h`. `maintenance-informatique/maintenance-depannage/index.html:9` : `Maintenance & Dépannage Informatique`. Mêmes constats qu'en v1 : H1 différenciés (`Un seul interlocuteur pour tout votre informatique` ligne 879 vs `Maintenance et dépannage informatique` ligne 682), pas de FAQ dupliquée. Reporté en section IT gelé, non actionnable ici.

### 3. [Silo Caisse] Chevauchement thématique coiffure / Hairnet : inchangé depuis v1

`caisse-enregistreuse/coiffure/index.html:9` (title `Caisse enregistreuse coiffure NF525`, H1 ligne 141 `Caisse enregistreuse coiffure NF525, agenda et fidélité intégrés`) et `caisse-enregistreuse/hairnet/index.html:9` (title `Logiciel Hairnet coiffure NF525`, H1 ligne 738 `Logiciel Hairnet NF525, dédié aux salons de coiffure`) partagent toujours le couple « coiffure » + « NF525 » en title et H1, à l'identique de v1. Aucune modification détectée sur ces deux fichiers depuis le rapport précédent. Toujours non vérifiable par GSC (pages inexistantes en V1, donc pas de séparation de trafic mesurable), à surveiller une fois le V2 indexé.

---

## Mineurs

### 1. Répétition de la même liste de villes dans les metas description du silo Caisse : amélioré (5 pages en v1, 4 aujourd'hui)

`restaurant`, `coiffure`, `borne-de-commande` et `monnayeur` reprennent toujours mot pour mot « à Mâcon, Lyon, Roanne et Bourg-en-Bresse » dans leur meta description. `boulangerie/index.html:10` ne porte plus cette formule (remplacée par « Demandez un devis »), ce qui réduit le duplicate de gabarit de 5 à 4 pages. Toujours pas une collision de requête cible (mot-clé produit distinct par page), signal de contenu template à varier lors d'un prochain passage `copywriter-site`.

### 2. Demande IT locale réelle sans page V2 dédiée : inchangé depuis v1

Cf. section IT gelé.

---

## Ce qui est SAIN (reconduit de v1, revérifié conforme)

- Hub caisse toujours neutre au département (`caisse-enregistreuse/index.html:9-10`, aucune ville dans title/H1).
- Les 4 pages département portent chacune un H1 « à [ville] » unique, non dupliqué entre elles (vérifié inchangé sur rhone, saone-et-loire, ain, loire).
- Les 8 pages métier/produit du silo Caisse ont chacune un H1 produit distinct, sans doublon de FAQPage avec le hub.
- Le blog ne porte toujours aucun prix DCB (grep `950`/`1200`/`1 200` sur `combien-coute-un-site-internet/index.html` : zéro résultat) et le maillage descendant vers les 4 pages transac reste vérifié.
- Silo Web toujours sans page département (conforme à la doctrine, aucun sous-dossier département sous `visibilite-web/`).
- **Nouveau par rapport à v1** : le silo Web ne porte plus aucun duplicate content FAQ ni collision H1, le seul vrai bloquant du rapport précédent est refermé.

---

## Section IT gelé

Silo `maintenance-informatique/` gelé (placeholder en attente de la grille tarifaire Clément, cf. CLAUDE.md). Constats de cannibalisation sortis ici, non actionnables avant dégel :

- Proximité de `<title>` entre le hub et `maintenance-depannage` (Majeur 2 ci-dessus), inchangée depuis v1.
- Demande IT locale réelle mesurée sur le V1 (« sauvegarde externalisée Villefranche-sur-Saône », « sauvegarde externalisée Mâcon », « infogérance cloud Mâcon ») sans page V2 dédiée, faute de pages département sur ce silo (doctrine assumée). Non vérifié à nouveau dans le détail GSC cette fois-ci (déjà tracé en v1, aucun changement de doctrine ou de code depuis).

---

## Carte requête-page (delta v1 uniquement, silo Web)

| Requête / intention | Page V2 cible | Collision v1 | Collision v2 (aujourd'hui) |
|---|---|---|---|
| création de site internet | `creation-site-internet/index.html` et hub | BLOQUANT : H1 hub = H1 enfant | Résolu (H1 distinct) ; résidu Majeur sur le title |
| référencement local / SEO-SEA | `seo-sea-local/index.html` et hub | BLOQUANT : H1 + FAQ dupliqués | Résolu (H1 distinct, FAQ sans recoupement) |
| hébergement web professionnel | `hebergement/index.html` | Aucune | Aucune, inchangé |

Les autres lignes de la carte requête-page (Caisse, IT, Blog) sont inchangées depuis v1, cf. `docs/audit-prelancement/06-cannibalisation.md` pour le détail complet, non reproduit ici pour éviter le duplicate content entre rapports.

---

*Fin de l'audit. Aucune page modifiée par cet audit. Correctif du title résiduel du hub Web à confier à `copywriter-site` après validation de XIII, conformément au process page publication-ready.*
