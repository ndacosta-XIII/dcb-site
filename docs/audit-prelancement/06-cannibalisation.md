# Audit Cannibalisation SEO

**Dimension :** Cannibalisation (collision de requête-cible entre pages du même site)
**Date :** 21/07/2026
**Agent :** seo-expert (Sonnet 5)
**Périmètre :** repo local `C:\Users\Dacos\Downloads\dcb-site-clean`, branche `main`. Comparaison title/H1/meta/JSON-LD sur : hub caisse + 4 pages département (rhone, saone-et-loire, ain, loire) + 8 sous-pages métier/produit (boulangerie, restaurant, coiffure, commerce-de-detail, borne-de-commande, monnayeur, cashmag, hairnet) ; hub IT + 5 sous-pages (infogerance-pme, maintenance-depannage, cloud-securite, location-vente-installation, outils-collaboratifs) ; hub Web + 3 sous-pages (creation-site-internet, seo-sea-local, hebergement) ; blog (4 articles) vs pages transactionnelles. Données Google Search Console de la propriété `https://dcb-technologies.fr/` (12 mois, 21/07/2025 au 20/07/2026, dimensions `query` et `query,page`), qui mesurent le site **V1** encore en ligne à la racine : utilisées ici comme signal de demande réelle et de cannibalisation passée, pas comme mesure du code V2 (en local, non déployé).

Rappels de doctrine respectés dans cet audit (non re-signalés s'ils sont conformes) : pages métier neutres au département ; pages département = landers locaux avec villes réelles ; silo Web volontairement sans pages département ; blog ne porte jamais les prix/délais DCB (ils vivent sur la page transac) ; `seo-sea-local` = lander SEA/GBP, pas un pari organique ; aucune page ne porte de schéma `aggregateRating`/`Review` (non re-vérifié ici, déjà tracé ailleurs).

---

## NOTE : 63/100

**Barème (5 catégories, 100 points) :**

| # | Catégorie | Points | Note |
|---|---|---|---|
| 1 | Silo Caisse : hub vs 4 pages département vs 8 pages métier/produit | 22/25 | Hub neutre au département confirmé dans le code (title/H1 sans ville) ; chaque page département possède le seul H1 "à [ville]" de sa requête ; chaque page métier possède un H1 produit distinct. Cela corrige exactement le pattern de cannibalisation que la GSC montre encore sur le V1. Déduction pour le doublon thématique coiffure/hairnet (title et H1 tous deux bâtis sur "coiffure" + "NF525") |
| 2 | Silo IT : hub vs 5 sous-pages | 16/20 | Les 5 sous-pages ciblent 5 verticales distinctes sans H1 dupliqué, FAQ hub et FAQ sous-pages non redondantes. Déduction pour la proximité de title/mot-racine entre le hub (`Maintenance Informatique PME`) et la sous-page `maintenance-depannage` (`Maintenance & Dépannage Informatique`) |
| 3 | Silo Web : hub vs `seo-sea-local` vs `creation-site-internet` | 6/25 | [BLOQUANT] Le hub reprend verbatim les deux requêtes cœur de ses propres enfants dans son title et son H1, et duplique quasi mot pour mot 3 paires de questions/réponses FAQPage (prix, délai, différence SEO/SEA) avec les deux sous-pages concernées |
| 4 | Blog vs pages transactionnelles | 15/15 | Titles et H1 de format distinct (question/année vs produit), maillage descendant vérifié par lien direct vers la page transac correspondante sur les 2 articles vérifiés, aucun prix DCB dans le corps ni le FAQPage du blog (doctrine respectée) |
| 5 | Couverture requête réelle (GSC 12 mois, hors marque) : une page cible claire par intention à fort volume | 4/15 | Le seul vrai gisement de volume en zone est capté proprement par le V2 (voir carte). Mais la demande IT locale réelle ("sauvegarde externalisée Villefranche-sur-Saône" 176 impr., "sauvegarde externalisée Mâcon" position 10,2) n'a aujourd'hui aucune page V2 dédiée puisque le silo IT n'a pas de pages département (doctrine assumée, non remise en cause ici) ; et le silo Web n'a quasiment aucune impression non-marque sur 12 mois, donc la collision hub/sous-pages du point 3 n'est validée que par l'analyse de code, pas encore par une preuve de perte de trafic |

**Total : 63/100.** Le trou principal est un seul silo (Web), avec une preuve texte-à-texte très nette. Les silos Caisse et IT, eux, appliquent correctement la doctrine de neutralité qui manquait au V1.

**Bloquants identifiés : 1**

---

## [BLOQUANT] Le hub Visibilité Web cannibalise ses deux propres sous-pages (title, H1 et FAQPage dupliqués)

**Preuve 1 : title et H1 du hub reprennent verbatim les mots-clés des deux enfants.**

Hub (`visibilite-web/index.html` lignes 9-10) :
```
<title>Création de site internet et SEO local | DCB Technologies</title>
<meta name="description" content="Création de site internet, référencement local et hébergement pour commerces et PME en 71, 69, 01 et 42. Techniciens basés en Saône-et-Loire.">
```
H1 (ligne 867) : `Création de site internet et référencement local, visible quand le client cherche votre métier.`

Sous-page `creation-site-internet/index.html` (ligne 9) :
```
<title>Création Site Internet Professionnel PME | DCB Technologies</title>
```
H1 (ligne 735) : `Création de site internet, livré en 7 jours.`

Sous-page `seo-sea-local/index.html` (ligne 9) :
```
<title>Référencement local : SEO et Google Ads | DCB Technologies</title>
```
H1 (ligne 423) : `Référencement local et Google Ads, pour que vos clients vous trouvent.`

Le hub commence son H1 par exactement les mêmes trois premiers mots que `creation-site-internet` ("Création de site internet") et reprend le même syntagme central que `seo-sea-local` ("référencement local"). À titre de comparaison, les deux autres hubs du site sont neutres par construction : hub caisse = `Caisse enregistreuse NF525, installation, formation et SAV sur site` (aucune ville, aucun métier nommé) ; hub IT = `Un seul interlocuteur pour tout votre informatique` (aucune verticale nommée). Le hub Web est le seul des trois à répéter le nom exact de ses enfants dans son propre H1.

**Preuve 2 : le FAQPage du hub duplique quasi mot pour mot 3 paires question/réponse des sous-pages.**

Sur le prix (hub, `visibilite-web/index.html` ligne 151) :
```
{"@type": "Question", "name": "Combien coûte un site internet chez DCB Technologies ?", "acceptedAnswer": {"@type": "Answer", "text": "Un site vitrine one-page coûte 950 € HT. Un site 5 pages coûte 1 200 € HT. L'hébergement (domaine inclus, serveur en France, sauvegarde quotidienne) est proposé sur devis, adapté à votre site."}}
```
vs sous-page `creation-site-internet/index.html` ligne 101 :
```
{"@type": "Question", "name": "Combien coûte un site internet chez DCB ?", "acceptedAnswer": {"@type": "Answer", "text": "Un site one page démarre à 950 euros HT et un site jusqu'à 5 pages à 1200 euros HT. Les projets sur mesure et e-commerce sont chiffrés sur devis. La formation à la prise en main est toujours incluse et l'hébergement est proposé en option."}}
```

Sur le délai (hub ligne 155) : `"En combien de temps mon site est-il livré ?"` réponse "7 jours pour un one-page, 7 jours à 3 semaines pour un 5 pages" vs sous-page ligne 100 : `"Combien de temps faut-il pour créer mon site ?"` réponse "livré en 7 jours [...] de 7 jours à 3 semaines pour un site de 5 pages" (mêmes chiffres, même phrasé).

Sur SEO vs SEA (hub ligne 149) : `"Quelle est la différence entre le SEO et le SEA ?"` vs sous-page `seo-sea-local/index.html` ligne 62 : `"Quelle est la différence entre SEO et SEA ?"` (question identique à un mot près, réponse au même fond : SEO = organique long terme, SEA = payant immédiat).

**Impact :** deux surfaces de risque distinctes. (1) Requête textuelle : "création de site internet [ville]" et "référencement local" peuvent faire hésiter Google entre le hub et la sous-page correspondante, qui portent le même H1 de tête ; en cas de doute, Google choisit souvent la page la plus généraliste (le hub), ce qui prive la sous-page transactionnelle (tarifs, CTA devis) du clic. (2) FAQPage rich result : les 3 paires dupliquées sont éligibles au rich snippet FAQ sur Google ; avoir la même question/réponse sur 2 URLs (hub et sous-page) est un signal de contenu dupliqué au sens strict, pas seulement un chevauchement thématique.

**Correction :** garder le hub agrégateur factuel (comme les hubs caisse et IT) : title/H1 neutres décrivant l'offre globale sans répéter le nom exact d'une sous-page ni le syntagme qui sert de requête-cible à un enfant. Retirer du FAQPage du hub les 3 questions dupliquées (prix, délai, SEO vs SEA) : ce contenu doit vivre uniquement sur `creation-site-internet` et `seo-sea-local`, le hub peut renvoyer vers elles par lien plutôt que par répétition du texte. Tâche de contenu : à confier à `copywriter-site` (texte) une fois validé par XIII, pas d'application directe ici (cf. process page publication-ready).

---

## Majeurs

### 1. Silo IT : proximité de title entre le hub et `maintenance-depannage`

Hub IT (`maintenance-informatique/index.html` ligne 10) : `<title>Maintenance Informatique PME : Intervention &lt;4h | DCB Technologies</title>`.
Sous-page `maintenance-depannage/index.html` (ligne 9) : `<title>Maintenance & Dépannage Informatique | DCB Technologies</title>`.

Les deux titles partagent le même noyau "Maintenance ... Informatique", qui est aussi littéralement le nom du dossier hub (`/maintenance-informatique/`). Les H1 restent différenciés (hub : `Un seul interlocuteur pour tout votre informatique` / sous-page : `Maintenance et dépannage informatique`), ce qui limite le risque par rapport au cas Web (pas de collision H1, pas de FAQ dupliquée détectée : FAQ hub et FAQ `infogerance-pme` vérifiées sans recoupement). Recommandation : sur la requête "maintenance informatique [ville]", s'assurer que la page qui doit gagner est clairement identifiée (probablement le hub, porte d'entrée de silo) et que le title de `maintenance-depannage` se démarque davantage (ex. insister sur "dépannage urgent" plutôt que répéter "maintenance informatique").

### 2. Silo Caisse : chevauchement thématique coiffure / Hairnet non vérifiable par la donnée

`coiffure/index.html` (title : `Caisse enregistreuse coiffure NF525`, H1 : `Caisse enregistreuse coiffure NF525, agenda et fidélité intégrés.`) et `hairnet/index.html` (title : `Logiciel Hairnet coiffure NF525`, H1 : `Logiciel Hairnet NF525, dédié aux salons de coiffure.`) partagent tous deux le couple "coiffure" + "NF525" en title et H1. La différence d'intention (solution générique vs recherche de marque logicielle "Hairnet") est réelle et plausible, mais aucune des deux pages n'existait sous cette forme en V1 : les requêtes GSC liées à la coiffure ("logiciel coiffeur nf525", 5 impr., pos. 75,6 ; "caisse enregistreuse obligatoire coiffure", 27 impr., pos. 76,9 ; "obligation caisse enregistreuse coiffeur", 2 impr.) pointaient toutes vers le seul hub caisse du V1, faute de page dédiée à l'époque. Impossible donc de confirmer ou d'infirmer la collision par la donnée ; à surveiller une fois le V2 indexé (Search Console, requêtes contenant "coiffure").

---

## Mineurs

### 1. Répétition de la même liste de villes dans 5 metas description du silo Caisse

`boulangerie`, `restaurant`, `coiffure`, `borne-de-commande` et `monnayeur` reprennent, à l'identique ou quasi, la formule "à Mâcon, Lyon, Roanne et Bourg-en-Bresse" dans leur meta description (ex. `borne-de-commande/index.html` ligne 10, `monnayeur/index.html` ligne 10, `coiffure/index.html` ligne 10). Ce n'est pas une collision de requête-cible (le mot-clé produit de chaque page reste distinct : boulangerie vs restaurant vs coiffure vs borne vs monnayeur), mais c'est une formule dupliquée mot pour mot sur 5 pages différentes, un signal de contenu template que Google peut repérer. Pas bloquant, à varier lors d'un prochain passage `copywriter-site`.

### 2. Demande IT locale réelle sans page V2 dédiée

La donnée GSC 12 mois montre une vraie demande locale IT non captée par une URL V2 spécifique : "sauvegarde externalisee villefranche sur saone" (176 impr., position 19,8 sur le V1, page `service-it-360`, une URL qui n'existe pas dans l'arborescence V2), "sauvegarde externalisee macon" (6 impr., position 10,2), "stockage donnees villefranche sur saone" (25 impr.), "infogerance cloud macon" (8 impr.), etc. Ce n'est pas une cannibalisation (il n'y a qu'une page candidate, le hub IT, puisque le silo IT n'a pas de pages département par doctrine assumée), c'est un gisement de volume que seul le `areaServed` du hub et de `cloud-securite` peut capter aujourd'hui. À noter pour un futur travail d'architecture, pas une action de cet audit.

---

## Ce qui est SAIN

- **Le hub caisse est neutre au département, contrairement au V1.** Title `Caisse enregistreuse NF525 : installation et SAV sur site` et H1 `Caisse enregistreuse NF525, installation, formation et SAV sur site.` ne nomment aucune ville. Ceci corrige directement le problème que la GSC montre encore actif sur le V1 : la requête "caisse enregistreuse lyon" s'y partage entre le hub (235 impressions, position 46,4) et la page Rhône (56 impressions, position 14,4) ; c'est la page département, mieux positionnée, qui doit gagner, et le V2 retire au hub tout ce qui pourrait le faire concourir sur cette requête.
- **Les 4 pages département portent chacune un H1 "à [ville]" unique et non dupliqué entre elles** : Rhône = `Caisse enregistreuse NF525 à Lyon et dans le Rhône.` ; Saône-et-Loire = `Caisse enregistreuse NF525 à Mâcon et en Saône-et-Loire.` ; Ain = `Caisse enregistreuse NF525 à Bourg-en-Bresse et dans l'Ain.` ; Loire = `Caisse enregistreuse NF525 à Saint-Étienne et dans la Loire.`
- **Les 8 pages métier/produit du silo Caisse ont chacune un H1 produit distinct** (boulangerie, restaurant, coiffure, commerce de détail, borne de commande, monnayeur, CashMag, Hairnet), sans doublon de FAQPage avec le hub (vérifié : les 6 questions FAQ du hub caisse concernent la conformité NF525/technique générale, les 6 questions FAQ de `boulangerie` concernent des cas d'usage métier propres, aucun recoupement de texte).
- **Le hub IT est un agrégateur générique sans reprendre le nom d'aucune sous-page** (`Maintenance Informatique PME : Intervention <4h`, H1 `Un seul interlocuteur pour tout votre informatique`), et les 5 sous-pages ciblent 5 verticales IT bien distinctes (infogérance dédiée, dépannage, cloud/cybersécurité, location-vente-installation, outils collaboratifs) sans H1 dupliqué.
- **Le blog ne porte aucun prix DCB.** Vérifié texte intégral + FAQPage de l'article `combien-coute-un-site-internet` : tous les montants cités (800 €, 6 000 €, 1 500 à 4 000 €, 29 €/mois, etc.) sont des fourchettes de marché génériques, jamais le tarif DCB (950 €/1 200 € HT), qui n'apparaît que sur `creation-site-internet`.
- **Maillage descendant blog → transac vérifié et présent** : `combien-coute-un-site-internet` lie explicitement vers `visibilite-web/creation-site-internet/` (3 occurrences, dont un CTA "Voir nos tarifs et nos délais de création de site") ; `norme-nf525-caisse-enregistreuse` lie vers `caisse-enregistreuse/` et `caisse-enregistreuse/saone-et-loire/` (3 occurrences) ; `maintenance-informatique-preventive` lie vers `maintenance-informatique/infogerance-pme/` et le hub IT (3 occurrences) ; `referencement-google-my-business` lie vers `visibilite-web/seo-sea-local/` et le hub Web (3 occurrences, dont un lien contextuel "offre de référencement local" dans le corps du texte). Les titles des 4 articles (format question ou année : "Combien coûte...", "Norme NF525... conformité 2026", "Référencement Google My Business : le guide...", "Maintenance informatique préventive...") ne recoupent aucun title de page transac.
- **Les pages département ne volent pas la vedette aux pages métier** : la grille de cartes métier présente sur `rhone/index.html` (liens vers `../restaurant/`, `../boulangerie/`, `../coiffure/`, `../commerce-de-detail/`) est un maillage de type navigation (label court, ex. "Caisse boulangerie et pâtisserie, dès 59 euros par mois"), pas une section H2 pleine qui concurrencerait le H1 de la page métier sur sa propre requête.
- **Silo Web sans pages département**, conforme à la doctrine (aucun sous-dossier département sous `visibilite-web/`, vérifié par listing).
- **Aucune requête "site internet" / "référencement" / "création" à volume dans les 300 requêtes GSC les plus vues sur 12 mois** : le silo Web démarre d'une base non-marque quasi nulle sur le V1, donc la collision du point [BLOQUANT] n'a pas encore causé de perte de trafic mesurable ; c'est un risque à corriger avant que le silo ne commence à ranker, pas un incendie en cours.

---

## Carte requête-page (V2)

| Requête / intention (issue de la doctrine + GSC 12 mois hors marque) | Page V2 cible prévue | Collision détectée |
|---|---|---|
| caisse enregistreuse NF525 (générique, non géolocalisé) | `caisse-enregistreuse/index.html` (hub) | Aucune |
| caisse enregistreuse Lyon / Rhône (69) | `caisse-enregistreuse/rhone/index.html` | Aucune dans le V2 (hub neutre) ; collision active mesurée sur le V1 (voir "Ce qui est SAIN") |
| caisse enregistreuse Mâcon / Saône-et-Loire (71) | `caisse-enregistreuse/saone-et-loire/index.html` | Aucune |
| caisse enregistreuse Bourg-en-Bresse / Ain (01) | `caisse-enregistreuse/ain/index.html` | Aucune |
| caisse enregistreuse Saint-Étienne / Loire (42) | `caisse-enregistreuse/loire/index.html` | Aucune |
| caisse enregistreuse boulangerie | `caisse-enregistreuse/boulangerie/index.html` | Aucune |
| caisse enregistreuse restaurant | `caisse-enregistreuse/restaurant/index.html` | Aucune |
| caisse enregistreuse / logiciel coiffeur NF525 | `caisse-enregistreuse/coiffure/index.html` | Majeur 2 : chevauchement thématique avec `hairnet/` (title+H1 partagent "coiffure"+"NF525"), non vérifiable par GSC (page inexistante en V1) |
| logiciel Hairnet coiffure | `caisse-enregistreuse/hairnet/index.html` | Voir ci-dessus |
| caisse enregistreuse commerce / boutique | `caisse-enregistreuse/commerce-de-detail/index.html` | Aucune |
| borne de commande restaurant | `caisse-enregistreuse/borne-de-commande/index.html` | Aucune |
| monnayeur automatique | `caisse-enregistreuse/monnayeur/index.html` | Aucune |
| logiciel CashMag | `caisse-enregistreuse/cashmag/index.html` | Aucune |
| maintenance informatique PME (générique) | `maintenance-informatique/index.html` (hub) | Majeur 1 : proximité title avec `maintenance-depannage/` |
| infogérance / technicien dédié | `maintenance-informatique/infogerance-pme/index.html` | Aucune |
| dépannage informatique urgent | `maintenance-informatique/maintenance-depannage/index.html` | Majeur 1 (réciproque) |
| cloud / cybersécurité PME | `maintenance-informatique/cloud-securite/index.html` | Aucune |
| location-vente-installation matériel IT | `maintenance-informatique/location-vente-installation/index.html` | Aucune |
| Microsoft 365 / Google Workspace | `maintenance-informatique/outils-collaboratifs/index.html` | Aucune |
| sauvegarde externalisée / infogérance Mâcon-Villefranche (demande GSC réelle, 176 impr. max) | Aucune page dédiée (doctrine : pas de pages département IT) | Mineur 2 : gisement de volume non capté par une URL spécifique |
| création de site internet | `visibilite-web/creation-site-internet/index.html` **ET** `visibilite-web/index.html` (hub) | **BLOQUANT : title/H1 du hub reprennent le H1 de la sous-page** |
| référencement local / SEO-SEA | `visibilite-web/seo-sea-local/index.html` **ET** `visibilite-web/index.html` (hub) | **BLOQUANT : title/H1 du hub reprennent le syntagme de la sous-page + FAQ dupliquée** |
| hébergement web professionnel | `visibilite-web/hebergement/index.html` | Aucune (title/H1 propres, non repris par le hub) |
| combien coûte un site internet (informationnel, fourchettes marché) | `blog/combien-coute-un-site-internet/index.html` | Aucune (maillage descendant vers `creation-site-internet/`, pas de prix DCB dans le blog) |
| norme NF525 conformité 2026 (informationnel) | `blog/norme-nf525-caisse-enregistreuse/index.html` | Aucune (maillage descendant vers `caisse-enregistreuse/` et `caisse-enregistreuse/saone-et-loire/`) |
| référencement Google My Business (informationnel) | `blog/referencement-google-my-business/index.html` | Aucune (maillage descendant vers `visibilite-web/seo-sea-local/`) |
| maintenance informatique préventive (informationnel) | `blog/maintenance-informatique-preventive/index.html` | Aucune (maillage descendant vers `maintenance-informatique/infogerance-pme/`) |

---

*Fin de l'audit. Aucune page modifiée. Correction du bloquant Web à confier à `copywriter-site` après validation de XIII, conformément au process page publication-ready.*
