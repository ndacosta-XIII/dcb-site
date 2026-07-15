# Référence contenu DCB Technologies
# Ce fichier trace les formulations validées par page pour éviter le duplicate content.
# Mise à jour : 2026-06-03

---

## Formulations transversales (utilisables sur toutes les pages, non dupliquées entre elles)

### Hiérarchie d'intervention SAV — règle absolue
Toujours dans cet ordre :
1. Télémaintenance à distance IMMÉDIATE (quelques minutes)
2. Sur site en moins de 4h si déplacement nécessaire

Ne jamais réduire à "intervention en moins de 4h" seul : le cerveau lit ça comme une attente.

### Numéro de téléphone
04 82 53 05 10 — à citer dans Pain SAV de chaque page quand pertinent.

### Zone d'intervention
Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)
Villes nommées : Lyon, Mâcon, Chalon-sur-Saône, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial

### NF525 — formulation de référence
"Certifié NF525 par l'AFNOR — attestation accessible à tout moment depuis votre caisse."
Ne pas utiliser : "conforme", "agréé" seul sans mention AFNOR.

### Amende NF525 — formulation de référence
"7 500 € d'amende par caisse non conforme en cas de contrôle fiscal."
Source implicite : loi anti-fraude TVA du 1er janvier 2018.

---

## Hub Caisse Enregistreuse (`caisse-enregistreuse/index.html`)

### Lede hero

**Desktop :**
Votre caisse tombe un samedi matin : on prend la main à distance en quelques minutes. Si un passage est nécessaire, un technicien DCB est chez vous en moins de 4 heures en Saône-et-Loire, Rhône, Ain ou Loire. Packs à partir de 59 €/mois, installés sur place.

**Mobile :**
Panne un samedi matin : prise en main à distance immédiate. Sur place en moins de 4h si besoin. Packs à partir de 59 €/mois, en 71, 69, 01 et 42.

### Pain 1 — SAV

**Desktop :**
Avec SumUp ou un revendeur en ligne, une panne c'est un ticket, un chatbot, et 48 heures à compter vos ventes à la main. Chez DCB, vous appelez le 04 82 53 05 10 : on prend la main à distance immédiatement. Si le problème nécessite un déplacement, un technicien est chez vous en moins de 4 heures.

**Mobile :**
Ailleurs, une panne c'est un ticket et 48h d'attente. Chez DCB, vous appelez le 04 82 53 05 10. Prise en main à distance immédiate. Sur place en moins de 4h si nécessaire.

### CashMag lede

**Desktop + Mobile (identique) :**
On a choisi CashMag parce qu'il est certifié NF525 par l'AFNOR et qu'on maîtrise chaque paramètre de sa configuration. Notre valeur ajoutée : on vient sur place, on prend le temps de comprendre votre activité, et on configure tout avant la mise en service. En cas de problème, vous n'appelez pas un standard. Vous appelez votre technicien, celui qui a installé votre caisse.

### CTA final

**Desktop :**
Parlez à un technicien, pas à un commercial.
[sous-texte bouton] Diagnostic gratuit, sans engagement

**Mobile :**
Parlez à un technicien DCB — diagnostic gratuit, sans engagement.

---

## Sous-pages Caisse (à compléter au fur et à mesure)

### Boulangerie (`caisse-enregistreuse/boulangerie/index.html`)
- Pain SAV : variante "ouverture 5h30, caisse prête avant le premier client"
- NE PAS réutiliser : lede hero hub mot pour mot

### Restaurant (`caisse-enregistreuse/restaurant/index.html`)
- Pain SAV : variante "service du midi, panne à 12h"
- NE PAS réutiliser : lede hero hub mot pour mot

### Commerce de détail (`caisse-enregistreuse/commerce-de-detail/index.html`)
- Pain SAV : variante "samedi marché, file d'attente"
- NE PAS réutiliser : lede hero hub mot pour mot

### Coiffure (`caisse-enregistreuse/coiffure/index.html`)
- Pain SAV : variante "agenda en ligne bloqué, RDV perdus"
- NE PAS réutiliser : lede hero hub mot pour mot

---

## Pages locales Caisse par département

Texte complet rédigé dans `docs/content-departements-redige.md`. Formulations propres par page (garde-fou anti-duplicate). Angle 71 = base technique réelle (atelier Paray-le-Monial). Angle 69 = siège social réel à Dardilly + techniciens salariés (proximité). ATTENTION : DCB n'a PAS de stock/entrepôt local (ni à Lyon/Dardilly) : ne jamais écrire "stock" ou "entrepôt" DCB (faux fait banni le 01/07/2026). Angle 01/42 = réactivité sans base locale (télémaintenance 20 min + sur site <4h), aucune base/stock/agence suggérée.

### Saône-et-Loire (`caisse-enregistreuse/saone-et-loire/index.html`)
- Angle : "Votre technicien ne vient pas de Lyon, il vient de Paray." Base et stock à Paray-le-Monial.
- Trust bar validée : "Intervention sous 4h en Saône-et-Loire" (et non "en 71").
- FAQ H2 validée : "Questions fréquentes en Saône-et-Loire."

### Rhône (`caisse-enregistreuse/rhone/index.html`)
- Angle propre : "Notre siège est à Dardilly, à dix minutes du centre de Lyon." Techniciens salariés sur place (JAMAIS de stock/entrepôt DCB : faux fait).
- Accroche SAV propre : "A Lyon, les revendeurs ne manquent pas. Les techniciens qui répondent, si."
- Card 3 propre : "Un prestataire sans ancrage local" (solutions nationales sans adresse physique).
- Techniciens lede propre : "qui peut sortir de Dardilly en cas d'urgence".
- CTA final : "Parlez à un technicien DCB dans le Rhône."

### Ain (`caisse-enregistreuse/ain/index.html`)
- Angle propre : "La réactivité ne se mesure pas en kilomètres." 8 pannes sur 10 réglées à distance en 20 min.
- Accroche hero propre : "Une panne à Bourg-en-Bresse un samedi matin. Le temps qu'un revendeur lointain vous rappelle, on a déjà pris la main."
- Card 3 propre : "Installé de loin, jamais formé" (caisse reçue par la poste).
- Eyebrow techniciens propre : "Expertise sans frontière".
- Argument Pays de Gex : télémaintenance évite de traverser l'agglomération genevoise.
- CTA final : "Parlez à un technicien DCB dans l'Ain."

### Loire (`caisse-enregistreuse/loire/index.html`)
- Angle propre : "Saint-Etienne, Roanne, Montbrison : trois bassins, une seule équipe." Saint-Etienne = 173 000 hab, peu de spécialistes NF525 qui se déplacent.
- Card 3 propre : "Une caisse pas configurée pour vous" (boucher de Roanne / brasserie stéphanoise / boulangerie de Montbrison).
- Argument stéphanois propre : "la différence entre lever le rideau et le laisser baissé".
- CTA final : "Parlez à un technicien DCB dans la Loire."

### Architecture anti-redondance DE-DUP 2026-06-15 (4 pages dpt)
Chaque zone a un rôle distinct pour ne pas répéter les mêmes arguments :
- Trust bar IDENTIQUE 4 pages (réassurances marque) : "Intervention <4h" / "Garantie 5 ans" / "Certifié NF525" / "Zéro sous-traitance". (71 : item 1 = "Intervention sous 4h en Saône-et-Loire".) Plus de "Télémaintenance 20 min" en trust bar.
- Checklist proximité IDENTIQUE 4 pages (engagements SAV chiffrés) : "Télémaintenance 7j/7 en moins de 20 minutes" / "Sur site en moins de 4h si besoin" / "Remplacement de matériel sous 48h". Sans "8 pannes sur 10" (puce 1) ni "zéro sous-traitance" (déjà trust bar).
- Cards "Pourquoi changer" = 3 PROBLÈMES vécus, 1 mention courte de la solution max (card 1).
- Texte final dans content-departements-redige.md, section "VERSION DE-DUP 2026-06-15".

### Anti-duplicate : blocs partagés assumés (information fonctionnelle/légale)
- Card 2 "Un logiciel non conforme" (NF525 + amende 7 500 €) : quasi identique sur les 4 pages.
- Section 4 métiers, section 7 périphériques, piliers NF525 (section 6) : repris du template 71.
- Ratio cible respecté : 60-65% unique par page.

## Silo IT (`maintenance-informatique/`)

Garde-fou anti-duplicate posé le 02/07/2026 d'après `pour-clement/strategie_IT.md` (spec validée client), AVANT la réécriture des 6 pages. C'est la cause racine des recyclages relevés par `pour-clement/analyse_IT.md` : elle n'existait pas.

Slugs cibles validés (renommages sans coût SEO, site pas en ligne) :
- `maintenance-depannage/` devient `depannage-informatique/`
- `cloud-securite/` devient `cybersecurite/`
- Les quatre autres slugs restent inchangés (`maintenance-informatique/`, `infogerance-pme/`, `outils-collaboratifs/`, `location-vente-installation/`).

### Règles transverses du silo IT (s'appliquent aux 6 pages)

**Liste noire des claims interdits (spec 6.1, confirmés faux ou non vendus par Clément le 02/07/2026).** Aucun de ces énoncés ne doit apparaître sur une page IT, ni en corps, ni en badge, ni en trust bar, ni en JSON-LD :
- « M365 Gold Partner » (fausse allégation de partenariat Microsoft)
- « SOC managé », « RSSI dédié », « ISO 27001 assistée » (vocabulaire grand compte non vendu)
- « 92% des tickets », « 80% des incidents », « une PME sur deux », « 15 000 EUR », « 20 000 EUR » (stats non sourcées)
- « 80% de nos clients choisissent la LLD » (chiffre inventé)
- « garantie 5 ans » en absolu (parler uniquement de « garantie constructeur selon matériel »)
- « partenaire » suivi d'un nom de constructeur (« compte pro Lenovo » est permis si utile)
- Mot « régie » : banni. La formule présence se nomme « technicien sur site ».

**Seules affirmations chiffrées autorisées :** les engagements mécaniques DCB, vérifiables et tenus. Télémaintenance immédiate, sur site en moins de 4h, audit gratuit, qualification en moins de 15 min, rapport sous 24h, restitution des accès à tout moment, restauration en moins de 4h (sauvegarde 3-2-1). Rien d'autre.

**Hiérarchie SAV partout, heros compris.** Ordre absolu, jamais inversé, jamais raccourci : 1) télémaintenance à distance immédiate, 2) sur site en moins de 4h si un déplacement est nécessaire. Plus jamais « moins de 4h » seul (le cerveau le lit comme une attente). La déclinaison de ce message est propre à chaque page (voir bloc SAV ci-dessous) : même fond, formulation unique, jamais deux pages identiques.

**Doctrine prix (spec section 2).** Une seule doctrine pour tout le silo, fini le mélange constaté par l'audit :
- Contrat (`infogerance-pme/`) : seule offre à grille affichée. Montants factices plausibles tant que la vraie grille n'existe pas (à remplacer avant mise en ligne, tracé roadmap CLAUDE.md). Les 89/149 EUR de l'ancienne page dépannage étaient fictifs eux aussi : ils ne font pas référence.
- Ponctuel (`depannage-informatique/`) : mécanisme affiché, aucun montant public. Formulation validée : « facturé à l'heure, tarif annoncé avant intervention selon l'expertise requise, zéro surprise ».
- Tout le reste (protéger, communiquer, équiper) : sur devis après audit gratuit. Emplacement prévu pour accueillir une grille quand une offre sera productisée (VoIP en premier, cf. annexe A de la spec).

**Témoignages.** L'avis réel Teddy Malfroy (Agence de communication Dicrea, Lyon 69) vit sur le hub UNIQUEMENT, en carte unique centrée. Zéro témoignage sur les 5 sous-pages tant qu'aucun vrai avis n'est collecté : une section absente vaut mieux qu'un faux avis. Sections réactivables à réception d'avis réels distincts (6 castings distincts exigés à la livraison, jamais le même personnage recyclé de page en page).

**Audit gratuit = porte d'entrée du silo.** Mis en évidence sur le hub comme offre à risque zéro. CTA secondaire sur toutes les pages, décliné (pas mot pour mot) autour de l'idée : « on regarde votre installation gratuitement, on vous dit où vous en êtes ».

**Maillage.** Les 3 pages besoin (protéger, communiquer, équiper) concluent par « qui gère tout ça ? » vers les 2 pages maintenance. Les 2 pages maintenance se renvoient l'une à l'autre via le bloc échelle et les phrases de cadrage (frontière contrat / ponctuel). Le hub route vers tout. Cross-sell inter-piliers (caisse, web) conservé.

**Ratio cible : 60-65% de contenu unique par page**, comme le silo caisse. Les briques de marque récurrentes (positionnement technicien salarié, zéro sous-traitance, hiérarchie SAV, zone d'intervention) sont de l'information de marque assumée ; tout le reste (angle, moment du visiteur, sections produits, H2, exemples locaux) doit être singulier.

**Anti-gabarit.** H2 personnalisés par page (fini « Aller plus loin » sur 5 pages). Ancrage local 4 départements équilibré (modèle silo caisse), villes nommées : Lyon, Mâcon, Chalon-sur-Saône, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial. Zéro tiret cadratin. UTF-8 BOM préservé.

### Déclinaison SAV par page (le garde-fou n°1 : jamais deux formulations identiques)

Même message sur les 6 pages (télémaintenance immédiate d'abord, sur site en moins de 4h ensuite), contexte et angle différents à chaque fois. Formulation réservée à la page indiquée.

1. **Hub :** « Un poste qui rame, un serveur qui tombe, une boîte mail bloquée : un seul numéro, le 04 82 53 05 10. On prend la main à distance dans la foulée. Si le souci résiste, un technicien salarié DCB est chez vous en moins de 4h, en Saône-et-Loire, Rhône, Ain ou Loire. »

2. **Contrat (`infogerance-pme/`) :** « Sous contrat, on surveille votre parc en continu : souvent, le problème est réglé à distance avant même que vous le remarquiez. Quand vous appelez, votre référent connaît déjà votre installation, prend la main sans vous faire tout réexpliquer, et se déplace en moins de 4h si la panne l'exige. »

3. **Ponctuel (`depannage-informatique/`) :** « Vous appelez, on qualifie le problème en moins de 15 minutes, on tente la reprise à distance dans la foulée. Si le déplacement s'impose, un technicien est chez vous en moins de 4h, et vous recevez un rapport sous 24h. Facturé à l'heure, tarif annoncé avant d'intervenir. »

4. **Protéger (`cybersecurite/`) :** « Cliqué sur la mauvaise pièce jointe ? Chaque minute compte : on prend la main à distance immédiatement pour isoler le poste touché, technicien sur place en moins de 4h si l'attaque s'étend. Grâce à la sauvegarde 3-2-1, vos données sont restaurées et vous repartez en moins de 4 heures. »

5. **Communiquer (`outils-collaboratifs/`) :** « Une messagerie coupée ou un standard muet, c'est votre entreprise injoignable. On rétablit à distance dès votre appel au 04 82 53 05 10, et un technicien passe en moins de 4h si la coupure vient du matériel. Vos clients ne tombent jamais dans le vide. »

6. **Équiper (`location-vente-installation/`) :** « Le matériel qu'on installe, on le suit : un poste qui lâche, c'est un salarié à l'arrêt. On diagnostique à distance dès votre appel, on intervient sur site en moins de 4h, et on organise le remplacement du matériel défaillant. Vous ne restez pas planté avec une machine morte. »

### 1. Hub (`maintenance-informatique/`)

- **Rôle éditorial :** page d'aiguillage du silo. Elle route le visiteur vers la bonne sous-page en deux groupes (« Comment on travaille » : contrat / ponctuel ; « Ce dont votre entreprise a besoin » : protéger / communiquer / équiper) et incarne la marque. Déjà à 9/10 : on réorganise, on ne refait pas.
- **Angle :** « Toute la technologie de votre entreprise, un seul interlocuteur » (téléphonie comprise). Élargissement de l'ancien « un seul interlocuteur pour tout votre informatique ».
- **Requêtes cibles :** maintenance informatique entreprise, infogérance PME + villes, prestataire informatique local.
- **Formulations réservées au hub :**
  - Le comparatif « Chez les autres / DCB » (meilleur bloc du silo, à ne dupliquer nulle part).
  - L'avis Teddy Malfroy (hub uniquement).
  - Le positionnement « technicien référent » (référent prioritaire épaulé par une équipe qui connaît le dossier ; « votre installation est documentée, vous ne réexpliquez jamais tout »). Ne plus promettre un technicien « attitré » exclusif.
  - Le bloc échelle en version courte (les 2 pages maintenance en portent la version complète).
  - L'audit gratuit érigé en porte d'entrée à risque zéro.
- **NE PAS réutiliser ailleurs :** l'angle « un seul interlocuteur pour tout », le comparatif marque, l'avis Teddy Malfroy.

### 2. Contrat (`infogerance-pme/`)

- **Rôle éditorial :** page de réassurance pour le dirigeant qui envisage de déléguer son informatique. Elle vend la relation sous contrat (2 formules), pas une brique technique.
- **Moment du visiteur :** dirigeant fatigué de gérer l'IT lui-même ou déçu d'un prestataire. Il compare, il veut être rassuré.
- **Angle :** « Votre service informatique, sans embaucher. » Le contrat remplace le poste IT interne qu'une PME ne peut pas se payer.
- **Requêtes cibles :** contrat de maintenance informatique, infogérance PME, externalisation informatique. Le title porte les deux vocabulaires (contrat de maintenance + infogérance).
- **Formulations réservées au Contrat :**
  - Le comparatif des **deux formules** présenté comme un choix, pas une hiérarchie : « formule technicien sur site » (un technicien DCB travaille dans les locaux du client, sur des missions de durée ; JAMAIS « régie ») et « formule à distance » (supervision, télémaintenance, interventions sur site quand il faut).
  - La **réversibilité**, objection n°1 de signature : « vos données, vos accès, votre documentation vous appartiennent, restituables à tout moment ».
  - L'arbitrage coût : « plus de 40 000 EUR par an, charges comprises, pour un poste IT junior ».
  - Le comparatif « CDI IT ou prestataire classique / Infogérance DCB ».
  - Le process d'onboarding daté (Jour J / J+5 / J+10).
  - La grille du contrat affichée (montants factices plausibles pour l'instant).
  - La phrase de cadrage sous le hero (frontière avec le ponctuel) : « Besoin d'un dépannage ponctuel, sans engagement ? » + lien vers `depannage-informatique/`.
- **NE PAS réutiliser ailleurs :** « technicien sur site », la réversibilité, la grille tarifaire, l'arbitrage 40 000 EUR, l'onboarding daté.

### 3. Ponctuel (`depannage-informatique/`, ex `maintenance-depannage/`)

- **Rôle éditorial :** page transactionnelle pour qui a une panne maintenant ou un besoin one-shot. Un numéro, un délai, un prix. Pas un argumentaire.
- **Moment du visiteur :** quelque chose est cassé, ou besoin ponctuel sans engagement.
- **Angle :** « Un problème, un expert, une facture claire. » Dépannage professionnel facturé à l'heure, sans contrat.
- **Requêtes cibles :** dépannage informatique + villes, réparation ordinateur entreprise, maintenance informatique ponctuelle. Page de destination naturelle des futures campagnes SEA « dépannage informatique ».
- **Formulations réservées au Ponctuel :**
  - Le mécanisme prix : « facturé à l'heure, tarif annoncé avant intervention selon l'expertise requise, zéro surprise ». Aucun montant public.
  - Le process en 4 étapes (modèle SAV du silo) : qualification en moins de 15 min, télémaintenance tentée en moins de 30 min, sur site en moins de 4h, rapport post-incident sous 24h. Ce process devient le modèle du hero, il ne le contredit pas.
  - « Sans engagement, sans contrat » comme signature.
  - Le cross-sell de montée en gamme (le funnel), en bas de page : « si c'est votre deuxième panne cette année, elle devrait être la dernière payée à l'heure » + lien vers `infogerance-pme/`.
- **Retiré :** l'ancienne grille 89/149 EUR/mois (montants fictifs, et c'était un contrat : la grille vit sur la page Contrat).
- **NE PAS réutiliser ailleurs :** « facturé à l'heure », le process en 4 étapes chiffré, le funnel « deuxième panne ».

### 4. Protéger (`cybersecurite/`, ex `cloud-securite/`, accent teal conservé)

- **Rôle éditorial :** page besoin « protéger ses données, éviter le piratage », expliquée sans jargon, tout géré par DCB.
- **Moment du visiteur :** il a reçu un mail de phishing, un confrère s'est fait chiffrer, ou il se demande s'il est en règle. Il a peur, sans vocabulaire technique.
- **Angle :** la protection complète de l'entreprise, sans jargon, gérée par DCB.
- **Requêtes cibles :** cybersécurité entreprise, protection informatique PME, sauvegarde informatique entreprise.
- **Formulations réservées à Protéger :**
  - Les sections produits sécurité : pare-feu, antivirus / protection des postes, VPN et télétravail sécurisé, **formation cybersécurité des équipes** (nouveau).
  - Le bloc majeur, argument le plus différenciant du silo : **sauvegarde 3-2-1 + restauration en moins de 4h + continuité d'activité**.
  - Le bloc **RGPD concret** (ce que DCB fait vraiment : hébergement UE, contrat de sous-traitance, chiffrement), à la place du badge « Conforme RGPD ».
- **Retiré :** toutes les stats non sourcées (« une PME sur deux », « 20 000 EUR », « 80% ») et le jargon grand compte (SOC managé, RSSI dédié, ISO 27001 assistée).
- **NE PAS réutiliser ailleurs :** le RGPD concret, la sauvegarde 3-2-1, la restauration en moins de 4h, la continuité d'activité, la formation cybersécurité.

### 5. Communiquer (`outils-collaboratifs/`, accent violet conservé)

- **Rôle éditorial :** page besoin « passer à la vitesse supérieure, gagner en crédibilité professionnelle ». Elle vend l'image et le fonctionnement d'une vraie entreprise.
- **Moment du visiteur :** adresse mail encore en @gmail.com, standard téléphonique vieillissant, équipes qui travaillent mal ensemble.
- **Angle :** passer à la vitesse supérieure, crédibilité professionnelle.
- **Requêtes cibles :** téléphonie VoIP entreprise, mail professionnel entreprise, Microsoft 365 PME, standard téléphonique PME.
- **Formulations réservées à Communiquer :**
  - Le mail professionnel comme argument crédibilité : « @votre-entreprise.fr ».
  - La **téléphonie VoIP** (nouveau : standard, numéros, mobilité ; premier emplacement de tarif productisé à venir).
  - M365 / Google Workspace avec migration zéro perte, et la FAQ conseil « Microsoft 365 vs Google Workspace » (la meilleure du silo, à conserver).
  - La visio.
- **Corrigé :** ancrage local rétabli (page la moins locale du silo selon l'audit), badge « M365 Gold Partner » supprimé (faux).
- **NE PAS réutiliser ailleurs :** « @votre-entreprise.fr », la téléphonie VoIP, la FAQ conseil M365 vs Workspace.

### 6. Équiper (`location-vente-installation/`, accent indigo conservé)

- **Rôle éditorial :** page besoin « s'équiper sans plomber la trésorerie ». Aide à la décision acheter / louer, et qui installe.
- **Moment du visiteur :** création, embauche, croissance, ou un parc qui rame. Question de fond : acheter ou louer, et qui installe.
- **Angle :** du matériel de pointe sans plomber la trésorerie. Le comparatif fiscal achat / LLD reste le contenu pilier.
- **Requêtes cibles :** location matériel informatique, location ordinateur entreprise, installation réseau entreprise, wifi entreprise.
- **Formulations réservées à Équiper :**
  - Le **financement LOA** (location avec option d'achat) via un organisme bailleur, à combiner à l'angle trésorerie (achat / LLD / LOA). Ne JAMAIS nommer le bailleur sur le site.
  - L'argument d'**indépendance des marques** : « nos grossistes nous permettent de fournir quasiment toutes les marques : on vous conseille la machine qui convient à votre besoin, pas celle qu'on doit écouler ». « Compte pro Lenovo » possible ; jamais « partenaire » d'un constructeur.
  - La section **wifi et réseau pro** rendue visible (les recherches « wifi entreprise » atterrissent ici, plus enterrée).
  - Postes et serveurs (location LLD / vente), installation et paramétrage, SAV matériel.
  - Garantie évoquée uniquement en termes génériques : « garantie constructeur selon matériel ».
- **Retiré :** « 80% de nos clients choisissent la LLD » (faux), « garantie 5 ans » en absolu.
- **NE PAS réutiliser ailleurs :** la LOA, l'argument trésorerie / comparatif fiscal, l'indépendance des marques, la section wifi et réseau.

## Silo Web (`visibilite-web/`)

### Hub (`visibilite-web/index.html`)
# À remplir

### Création de site (`visibilite-web/creation-site-internet/index.html`)

- **Rôle éditorial :** page transactionnelle du silo Web. Elle porte prix, délais et devis (le blog n'en porte jamais, cf. règle Blog ci-dessus). Cible le mot-clé porteur "création de site internet" en exact match (title + H1).
- **Requêtes cibles :** création de site internet (+ Mâcon, Lyon, Bourg-en-Bresse, Roanne en corps de texte), refonte site internet, site vitrine une page.

**Lede hero (douleur, desktop + mobile, formulation quasi identique, longueur adaptée) :**
« Aujourd'hui, un client vérifie votre commerce en ligne avant de pousser la porte. Sans site, ou avec une vitrine vieillissante dont vous n'êtes plus très fier, c'est le concurrent d'à côté qu'il trouve à votre place. »

**Argument propriété vs abonnement (FAQ "À qui appartiennent le site et le nom de domaine ?") :**
« Le site et le nom de domaine vous appartiennent, dès le premier jour. C'est toute la différence avec une plateforme en abonnement type Wix ou Squarespace : là-bas, vous louez un emplacement chez un géant américain, mois après mois, et le jour où vous arrêtez de payer, il ne vous reste rien. Chez DCB, vous payez une fois, le site est à vous, hébergé où vous voulez et récupérable à tout moment. Vous êtes propriétaire, pas locataire. »

**Réponse refonte (FAQ "Pouvez-vous refaire mon site existant ?") :**
« Oui, la refonte de site est une part importante de notre activité. Refaire un site internet vieillissant, c'est repartir de ce qui fonctionne déjà (vos textes, vos photos, votre nom de domaine, le référencement que vous avez acquis) et remettre le reste à niveau : design plus moderne, chargement plus rapide, affichage mobile impeccable et structure optimisée pour Google et les moteurs IA. On commence par un audit de l'existant pour vous dire ce qui vaut la peine d'être conservé et ce qu'il faut refaire, puis on vous chiffre la refonte au devis, sans facturer une création complète quand une remise à neuf suffit. »
Point d'attention : cette réponse reste aujourd'hui le seul point d'entrée du cluster "refonte" (confirmé par volume Keyword Planner dans `pour-clement/audit-motscles-hub-web.md`) ; une section H2/H3 dédiée en corps de page est validée par XIII mais pas encore rédigée (cf. roadmap CLAUDE.md / audit `campagnes/audit-creation-site-seo.md` P1 n°1). Ne pas dupliquer cette formulation mot pour mot tant que cette section n'existe pas ailleurs.

**Logique de gamme pricing (intro section Tarifs) :**
« Nos tarifs sont publics : pas de devis à l'aveugle, vous connaissez le prix avant même de nous appeler. Ailleurs, un site professionnel se facture souvent plusieurs milliers d'euros ; chez DCB, vous payez une fois et le site vous appartient, sans abonnement à vie comme sur une plateforme en location. Le One Page va à l'essentiel pour une présence locale, le 5 Pages part du même socle et ajoute les pages, le blog et les formulaires : d'où un écart de prix contenu. »
Prix de référence (identiques hub + sous-page + `llms.txt`, à ne pas faire dériver) : Site One Page à partir de 950€ HT (livré en 7 jours), Site 5 Pages à partir de 1200€ HT (livré en 7 jours à 3 semaines), Sur mesure / E-commerce sur devis. Formation à la prise en main toujours incluse, hébergement toujours en option.

- **NE PAS réutiliser ailleurs dans le silo Web :** le lede douleur du hero (vitrine vieillissante / concurrent d'à côté), l'argument propriété vs abonnement Wix/Squarespace, la réponse refonte détaillée, la logique de gamme pricing One Page/5 Pages.

### SEO et SEA local (`visibilite-web/seo-sea-local/index.html`)

- **Rôle éditorial :** page service référencement local + gestion Google Ads en continu, vendue SUR DEVIS (le hub, lui, présente le SEO on-page "inclus" livré avec un site : pas de contradiction, ce sont deux offres distinctes). Mot-clé porteur : "référencement local" (décision XIII 09/07, désormais en tête du title et du H1).
- **Signature honnêteté (le différenciateur de la page, calqué sur la transparence prix de creation-site) :** distinguer ce que DCB CONTRÔLE (fiche Google Business, SEO technique et on-page, pilotage des campagnes Google Ads, reporting mensuel) de ce qui ne se GARANTIT jamais (la position organique). Ne jamais réintroduire "dominer Google", "vos clients en premier", "Top 3" présenté comme acquis, ni de stat moyenne non sourcée (×3, +240%, 80%).

**H1 (desktop + mobile) :** « Référencement local et Google Ads, pour que vos clients vous trouvent. »

**Lede hero (desktop) :** « Fiche Google optimisée, campagnes Ads pilotées, SEO local sur devis. On met en place tout ce qui vous rend visible, et on vous montre les résultats en toute transparence. »

**Cadrage honnête (section "Ce qu'on pilote pour vous", remplace l'ancien bloc de faux chiffres) :** « On ne vous promet pas la première place : personne ne peut la garantir honnêtement. Ce qu'on maîtrise, on le met en place, et on vous le prouve chaque mois. » Les 3 colonnes portent des leviers, pas des chiffres : Fiche (Google Business optimisée de A à Z) / Ads (campagnes locales pilotées en continu) / Suivi (positions, appels et ROI, chaque mois).

**FAQ prix (sur devis) :** « Chaque commerce part d'une situation différente : votre fiche Google, votre site, votre concurrence locale et vos objectifs ne sont jamais les mêmes. On établit donc un devis sur mesure après un audit gratuit de votre référencement, sans engagement de longue durée. Le budget de vos campagnes Google Ads reste séparé et vous appartient : vous le fixez, nous le pilotons. »

**FAQ GEO / moteurs IA (hedge propre à cette page, ne pas dupliquer verbatim celui du hub ou de creation-site) :** « Les moteurs IA comme ChatGPT, Perplexity, Gemini ou les AI Overviews de Google s'appuient largement sur les mêmes signaux que le référencement local : une fiche Google Business complète et cohérente, des informations à jour partout sur le web, un contenu clair et structuré. En travaillant ces bases, on maximise vos chances d'être repris par ces outils. Personne, nous compris, ne peut garantir une citation : leurs algorithmes évoluent en permanence et ne sont pas publics. »

- **NE PAS réutiliser ailleurs :** la signature "ce qu'on pilote / ce qu'on ne garantit pas", le hedge GEO ci-dessus, la FAQ prix "budget Ads séparé et vous appartient".

### Hébergement web (`visibilite-web/hebergement/index.html`)

- **Rôle éditorial :** page de COMPLÉMENT, pas moteur d'acquisition (cluster à faible volume, cf. `pour-clement/audit-motscles-hub-web.md`). Sa mission : rassurer (données en France, SSL, sauvegardes, support local) et servir de CROSS-SELL depuis création-site et SEO. Angle propre à cette page : **héberger chez celui qui a fait votre site, un seul interlocuteur** (site + emails + hébergement chez le même prestataire local). Ne jamais la vendre comme un produit autonome.
- **Offre SUR DEVIS (décision XIII 15/07/2026) :** la grille 3 formules (Starter/Pro/Business, XX€/mois) et le JSON-LD `AggregateOffer` 29-99€/mois ont été retirés (front-builder + seo-expert). Le prix se cadre en transparence, jamais en forfait générique : "on dimensionne l'hébergement selon votre site et vos besoins réels". Ne jamais réintroduire de prix ferme sur cette page tant que l'arbitrage prix du silo (hub `visibilite-web/` et `llms.txt` portent encore 264€ HT/an) n'est pas tranché.
- **Cadrage infra honnête (engagement de MOYENS, calqué sur la transparence de seo-sea-local) :** DCB revend une infrastructure tierce et ne maîtrise pas seul les garanties dures. Bannis en tant que faits mesurés ou garanties fermes : "99,9% uptime / SLA", "142 ms", "0 incident/an", "réponse sous 15 min", "chargement divisé par 3", et "ISO 27001" présenté comme une certification maison. Remplacés partout (hero, trust bar, comparatif, FAQ, dashboard) par des engagements réels et vérifiables : **serveurs supervisés en continu, données hébergées en France, sauvegardes quotidiennes, SSL inclus, support local réactif 7j/7**.

**H1 (desktop + mobile) :** « Hébergement web en France, SSL et support local 7j/7. »

**Lede hero (desktop) :** « Vos données sur des serveurs en France, SSL automatique, sauvegardes quotidiennes et un support humain local qui répond vraiment. »

**Comparatif "Hébergeur mutualisé vs DCB" (signature propre à cette page, ne pas dupliquer ailleurs) :** intro « Un hébergeur low-cost peut sembler suffisant. Jusqu'au jour où votre site tombe un samedi matin et que personne ne répond. » Colonne DCB en engagements de moyens : ressources dédiées (SSD NVMe, datacenter en France), support humain local qui répond vite (pas un robot de ticketing), SSL gratuit auto, sauvegardes quotidiennes sur 30 jours, migration offerte et sans coupure.

**FAQ panne (engagement de moyens, formulation validée) :** « Nos serveurs sont supervisés en continu. En cas d'incident, notre équipe est alertée et intervient sans tarder, et les sauvegardes quotidiennes permettent de restaurer votre site sans perte de données. »

**FAQ engagement (sur devis) :** « L'hébergement est proposé sans engagement de longue durée. Les modalités précises sont définies avec vous dans le devis, selon votre site et vos besoins. »

- **NE PAS réutiliser ailleurs :** le comparatif "mutualisé vs DCB", l'angle "un seul interlocuteur pour votre site, vos emails et votre hébergement", le cadrage infra "engagement de moyens" ci-dessus.

---

## Blog : "Combien coûte un site internet ?" (`blog/combien-coute-un-site-internet/index.html`)

### FAQ "Quel est le prix minimum d'un vrai site internet professionnel ?" (formulation validée 07/07/2026)
Correction post-publication : l'ancienne réponse posait 1 500 € comme plancher de qualité ("en dessous = travail bâclé"), ce qui dénigrait implicitement le positionnement prix de DCB (offres phares sous 1 500 € HT, non citées dans l'article). Nouvelle doctrine : découpler le prix du jugement de qualité. Un prix bas n'est pas un signal négatif en soi ; ce qui doit alerter, c'est ce que le prix cache (modèle standard vendu comme sur-mesure, textes non compris, site non possédé, coûts cachés), jamais le montant seul.

**Réponse validée (identique JSON-LD + FAQ desktop + FAQ mobile, mot pour mot) :**
« Un prix bas n'est pas en soi un mauvais signe : un professionnel efficace et transparent peut très bien vous livrer une vraie vitrine de qualité pour bien moins que 1 500 €. Ce qui doit vous alerter, ce n'est pas le montant, c'est ce qu'il cache : un modèle standard vendu comme du sur-mesure, des textes que personne n'a écrits pour vous, un site que vous ne possédez pas vraiment, ou des coûts qui tombent une fois que vous avez signé. Le bon réflexe, c'est de regarder ce qui est inclus (rédaction, référencement, propriété du site, accompagnement après la mise en ligne), pas le chiffre en bas du devis. »

Ne jamais réintroduire "en dessous de 1 500 € = travail bâclé" ni "le plancher réaliste tourne autour de 1 500 €". Les autres mises en garde de l'article (site loué 29 €/mois, e-commerce clé en main à 1 500 €, template rempli à la va-vite) restent valables : toujours reliées au modèle/à ce qui manque, jamais au prix bas en tant que tel. Les prix DCB (950 €/1 200 € HT) ne sont jamais cités dans cet article : ils vivent sur `visibilite-web/creation-site-internet/index.html`.

---

## Règles duplicate content

1. Le lede hero du hub = formulation unique. Les sous-pages utilisent leur propre angle métier.
2. La formulation SAV (télémaintenance + <4h) est déclinée différemment sur chaque page : même message, contexte métier différent.
3. La description NF525 peut être identique sur hub + sous-pages caisse (c'est de l'information légale, pas du contenu marketing).
4. Les témoignages : chaque page a ses propres témoignages, pas de répétition entre pages.
5. Les JSON-LD FAQ : questions différentes entre hub et sous-pages.
