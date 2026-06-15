# Plan de contenu : Pages caisse enregistreuse par département
# Auteur : seo-expert | Date : 2026-06-15
# Usage : brief copywriter pour la création des 4 pages locales du silo caisse

---

## NOTES PRÉLIMINAIRES ET CORRECTIONS SUR LE TEMPLATE 71

Avant de créer les 3 nouvelles pages, 3 corrections à apporter sur la page 71 existante
(caisse-enregistreuse/saone-et-loire/index.html) lors de l'intégration par le front-builder :

1. **H2 FAQ visible : wording robotique à corriger**
   Actuel (ligne 546) : "Vos questions sur la caisse en 71."
   A remplacer par : "Questions fréquentes en Saône-et-Loire."
   Le JSON-LD FAQPage n'utilise pas ce texte, seule la balise HTML visible est à corriger.

2. **Trust bar (ligne 171) : wording robotique à corriger**
   Actuel : "Intervention <4h en 71"
   A remplacer par : "Intervention sous 4h en Saône-et-Loire"
   Note : le code département peut rester dans les chips/badges du hero (ex. le chip "Saône-et-Loire (71)" est correct).

3. **Section 8 Techniciens : ligne caption photo (ligne 503)**
   Actuel : "Paray-le-Monial · Mâcon · Chalon-sur-Saône · Autun et tout le Charolais-Brionnais"
   Formulation correcte, aucune modification.

---

## TABLEAU DE SIMILARITE : GARDE-FOU ANTI-DUPLICATE CONTENT

| Bloc | Statut | Pages concernées |
|---|---|---|
| Section 1 Hero (chips, H1, lede, checklist) | UNIQUE 100% | Chacune des 4 pages |
| Section 2 Trust bar | UNIQUE (libellés territoriaux) | Chacune des 4 pages |
| Section 3 Pourquoi changer (eyebrow, H2, 3 cards titres+textes) | UNIQUE 60% min | Chacune des 4 pages : seule la card NF525 est quasi-partagée (information légale) |
| Section 4 Metiers (cards 4 métiers) | PARTAGE : identique sur les 4 pages | Toutes : le maillage interne est le même |
| Section 5 Témoignages (eyebrow, H2, 2 cards) | UNIQUE 100% | Clients propres à chaque département |
| Section 6 NF525 (H2, lede, 3 piliers, bloc amende) | PARTAGE : information légale identique, sauf H2 territorial | H2 unique par page, corps partagé |
| Section 7 Périphériques (borne, monnayeur) | PARTAGE : identique sur les 4 pages | Toutes |
| Section 8 Techniciens/Proximité (eyebrow, H2, lede, checklist, légende photo) | UNIQUE 100% | Angle narratif par département |
| Section 9 FAQ 10 questions + JSON-LD FAQPage | UNIQUE 100% | Questions propres à chaque territoire |
| Section 10 CTA final (H2, lede, CTA bouton) | UNIQUE (territoire nommé naturellement) | Chacune des 4 pages |
| JSON-LD Service (serviceType, areaServed, villes) | UNIQUE 100% | Villes du département uniquement |
| JSON-LD BreadcrumbList | UNIQUE (position 3 = département) | Chacune des 4 pages |

Ratio résultant : 60-65% de contenu unique par page, 35-40% partagé.
Les blocs partagés (métiers, périphériques, piliers NF525) sont de l'information fonctionnelle ou légale,
non du contenu marketing : risque duplicate content minimal selon les guidelines Google.

---

## NOTE SEA : MESSAGE MATCH ET QUALITY SCORE (valable pour les 4 pages)

Exigences Quality Score Google Ads applicables à ces landing pages :

- Le mot-clé de l'annonce doit apparaitre dans le H1 ou les 200 premiers mots de la page.
  Le H1 de chaque page contient "Caisse enregistreuse NF525" + le territoire : match exact possible.
- Le CTA de l'annonce ("Demander un devis", "Appeler DCB") doit correspondre au CTA visible above the fold.
  Les boutons hero ("Demander un devis" + numéro de téléphone cliquable) assurent ce match.
- Le numéro de téléphone 04 82 53 05 10 doit etre cliquable (balise tel:) sur mobile.
  Structure template confirmée : bouton tel: dans hero + CTA final.
- Prix visible above the fold : "à partir de 59 €/mois" dans le lede hero ou les chips.
  A maintenir sur les 4 pages pour Quality Score optimal.
- Pas de popup, pas de bandeau consent bloquant le CTA au chargement.
  Site statique sans cookie wall : conforme.

Annonces recommandées par page (titre/description alignés sur le H1) :
- 69 : titre "Caisse NF525 à Lyon et dans le Rhône | DCB Technologies"
- 01 : titre "Caisse enregistreuse dans l'Ain | DCB Technologies"
- 42 : titre "Caisse NF525 Roanne Saint-Etienne | DCB Technologies"
- 71 : titre "Caisse NF525 en Saône-et-Loire | DCB Technologies" (existant à ajuster)

---

## FORMULATIONS INTERDITES (rappel pour le copywriter)

JAMAIS dans une phrase rédigée lue par un humain :
- "en 71", "en 69", "en 01", "en 42"
- "Intervention <4h en 71" ou variantes avec code seul
- "Demander un devis 71"
- "Vos questions sur la caisse en 69"
- Tout groupe "verbe + code département seul"

AUTORISE dans les chips/badges visuels et balises title/meta :
- "(71)", "(69)", "(01)", "(42)" entre parenthèses dans un chip ou après le nom du département
- Dans le title HTML : "Saône-et-Loire (71)", "Rhône (69)", etc.

FORMULER a la place :
- "en Saône-et-Loire", "dans le Rhône", "dans l'Ain", "dans la Loire"
- "à Lyon et alentours", "autour de Mâcon", "en Bresse et Bugey"
- Ou tourner la phrase sans mention géographique si le contexte est clair

---

## 1. SAONE-ET-LOIRE (71) : PAGE EXISTANTE A VALIDER ET CORRIGER

URL : caisse-enregistreuse/saone-et-loire/index.html
Statut GSC : position 5.2, 5 clics, 47 impressions : page en bonne voie, priorité = consolider.

### Balises (a valider, corriger si wording robotique)

**Title actuel (63 car.) :**
"Caisse enregistreuse en Saône-et-Loire (71) : Mâcon, Chalon, Paray | DCB Technologies"
Verdict : correct. Densité hub respectée. Villes nommées, code département entre parenthèses. A conserver.

**Meta description actuelle (155 car.) :**
"Caisse enregistreuse NF525 en Saône-et-Loire (71) : techniciens salariés basés à Paray-le-Monial, intervention sous 4h à Mâcon, Chalon-sur-Saône, Charolles, Autun. Dès 59 €/mois."
Verdict : correct. A conserver.

**H1 actuel :**
"Caisse enregistreuse NF525 en Saône-et-Loire, techniciens basés à Paray-le-Monial"
Verdict : correct. Densité hub. A conserver.

**Corrections de wording robotique a appliquer (cf. section Notes préliminaires) :**
- Trust bar : "Intervention <4h en 71" -> "Intervention sous 4h en Saône-et-Loire"
- FAQ H2 visible : "Vos questions sur la caisse en 71." -> "Questions fréquentes en Saône-et-Loire."

### Slots de contenu : état actuel validé

Les slots ci-dessous sont considérés comme validés et ne nécessitent pas de réécriture.
Seules les 2 corrections de wording ci-dessus sont a appliquer.

**Hero chips :**
- "Saône-et-Loire (71)" (chip orange : correct)
- "Base Paray-le-Monial" (chip blanc : correct)
- "Intervention <4h" (chip blanc : correct dans un badge, pas dans une phrase)

**Lede hero :**
"Votre technicien DCB ne vient pas de Lyon, il vient de Paray. Atelier technique, stock matériel et techniciens salariés sur place. Mâcon, Chalon, Charolles, Autun ou Tournus : intervention sous 4h, prise en main à distance dans les 20 minutes. Packs caisse tactile à partir de 59 €/mois."
Verdict : angle narratif fort ("ne vient pas de Lyon, il vient de Paray"), densité correcte. A conserver.

**Section 3 : Pourquoi changer (H2 + 3 cards) :**
H2 : "Votre caisse actuelle vous freine." : correct, densité hub.
Card 1 "Un SAV injoignable" : contient "en Saône-et-Loire" et "en moins de 4 heures" : correct.
Card 2 "Un logiciel non conforme" : information légale NF525, formulation reference.md. Correct.
Card 3 "Une caisse pas faite pour vous" : générique, partageable. Correct.

**Section 5 : Témoignages :**
Julien L., Boulangerie du Vieux Mâcon (71) : A valider avec client (placeholder a confirmer).
Emma M., Salon Émeraude, Chalon-sur-Saône (71) : A valider avec client (placeholder a confirmer).

**Section 8 : Techniciens :**
H2 : "Vos techniciens en Saône-et-Loire" : correct.
Lede : "Chaque client a un interlocuteur identifié, quelqu'un qui connaît son installation, son activité, ses horaires. Pas un numéro de ticket : un nom, un téléphone, une présence à Paray-le-Monial." : correct.
Légende photo : "Paray-le-Monial · Mâcon · Chalon-sur-Saône · Autun et tout le Charolais-Brionnais" : correct.

**FAQ H2 (section 9) :** corriger "en 71" comme indiqué ci-dessus.

**CTA final H2 :**
"Parlez à un technicien DCB en Saône-et-Loire." : correct, territoire naturel.

### JSON-LD : état validé

Service.serviceType : "Caisse enregistreuse NF525 en Saône-et-Loire" : correct.
areaServed : Saône-et-Loire (71) + 12 villes (Mâcon, Chalon, Paray, Charolles, Digoin, Gueugnon, Autun, Tournus, Cluny, Montceau-les-Mines, Chauffailles, Marcigny) : correct.
FAQPage : 10 questions territorialisées Saône-et-Loire : correct.
BreadcrumbList : 3 niveaux correct.

---

## 2. RHONE (69) : PAGE A CREER

URL cible : caisse-enregistreuse/rhone/index.html
Statut GSC : position 15.4, 0 clic, 17 impressions : potentiel énorme avec Lyon (109 impressions "caisse enregistreuse lyon" pos. 29).
Angle narratif : "Une vraie présence à Lyon" : siège Dardilly réel, stock sur place, Grand Lyon + Beaujolais.

### Balises

**Title (59 car.) :**
Caisse enregistreuse Lyon et Rhône (69) | DCB Technologies

**Meta description (154 car.) :**
Caisse enregistreuse NF525 à Lyon et dans le Rhône : siège DCB à Dardilly, stock et techniciens sur place. Lyon, Villeurbanne, Villefranche, Beaujolais. Dès 59 €/mois.

**H1 :**
Caisse enregistreuse NF525 à Lyon et dans le Rhône, techniciens basés à Dardilly

### Section 1 : Hero

**Chips :**
- "Rhône (69)" (chip orange)
- "Siège à Dardilly" (chip blanc)
- "Intervention sous 4h" (chip blanc)

**H1 :** voir ci-dessus

**Lede hero :**
Votre technicien DCB n'arrive pas d'une ville lointaine : notre siège social est à Dardilly, à 10 minutes du centre de Lyon. Stock matériel et techniciens salariés sur place. Lyon, Villeurbanne, Vénissieux, Villefranche, Beaujolais : prise en main à distance dans les 20 minutes, sur site en moins de 4h. Packs caisse tactile à partir de 59 €/mois.

**Checklist hero (3 items) :**
- Siège social et stock matériel à Dardilly (69570)
- Couverture Grand Lyon, Monts d'Or, Beaujolais et Rhône rural
- Logiciel CashMag certifié NF525, conforme loi anti-fraude TVA

**Visuel carte flottante :**
Contenu : "Siège social" / "Dardilly" (remplace "Base technique" / "Paray-le-Monial" du template 71)

### Section 2 : Trust bar

- "Siège à Dardilly" (icône location_on)
- "Intervention sous 4h" (icône speed)
- "Certifié NF525" (icône verified)
- "Zéro sous-traitance" (icône groups)

### Section 3 : Pourquoi changer (H2 unique, 3 cards uniques)

**Eyebrow :** Pourquoi changer ?
**H2 :** Votre caisse actuelle vous freine.

**Card 1 : Un SAV injoignable (unique Rhône)**
Titre : Un SAV injoignable
Texte : A Lyon, les revendeurs sont nombreux mais les techniciens rares. Avec SumUp ou un revendeur en ligne, une panne c'est un ticket, un chatbot, et 48 heures à compter vos ventes à la main. Chez DCB, vous appelez le 04 82 53 05 10 : on prend la main à distance immédiatement. Si un passage est nécessaire, un technicien sort de Dardilly.

**Card 2 : Un logiciel non conforme (quasi-partagée, information légale)**
Titre : Un logiciel non conforme
Texte : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. L'amende est de 7 500 € par système de caisse non conforme. CashMag est certifié NF525 par l'AFNOR : attestation accessible à tout moment depuis votre caisse.

**Card 3 : Un interlocuteur générique (unique Rhône)**
Titre : Un prestataire sans ancrage local
Texte : Lyon concentre beaucoup de solutions nationales sans présence physique. Chez DCB, vous avez un technicien identifié, pas un centre d'appels. Notre siège à Dardilly signifie que votre dossier reste dans la même équipe, du devis à la maintenance.

### Section 5 : Témoignages (2 placeholders à valider client : marqués [A CONFIRMER])

**Témoignage 1 :**
Citation : "On cherchait un fournisseur local, pas une hotline. Le fait que DCB soit basé à Dardilly a tout changé : le technicien connaissait déjà les boulangeries du secteur et a configuré la caisse en deux heures chrono."
Initiales : PB (fond ambre #F59E0B)
Nom : Pierre B. [A CONFIRMER]
Etablissement : Boulangerie des Monts d'Or, Limonest (69) [A CONFIRMER]
Etoiles : 5/5

**Témoignage 2 :**
Citation : "Restaurant de 40 couverts, service du midi à partir de 12h. Quand la caisse a bloqué un jeudi matin, la prise en main à distance a réglé le problème avant l'ouverture. On n'a perdu aucun service."
Initiales : SR (fond rouge #EF4444)
Nom : Sophie R. [A CONFIRMER]
Etablissement : Le Comptoir Lyonnais, Villeurbanne (69) [A CONFIRMER]
Etoiles : 5/5

### Section 6 : NF525

**H2 :** Pourquoi la certification NF525 n'est pas une option dans le Rhône
Corps : identique au template 71 (information légale partagée). Lede : remplacer "en Saône-et-Loire" par "dans le Rhône".

### Section 8 : Techniciens / Proximité (unique Rhône)

**Eyebrow :** Expertise de proximité
**H2 :** Vos techniciens dans le Rhône
**Lede :** A Lyon, trouver un prestataire est facile. Trouver un technicien qui connaît votre installation, qui répond quand vous appelez et qui sort de Dardilly en cas d'urgence, c'est différent. C'est le modèle DCB : zéro sous-traitance, un nom, un téléphone.

**Checklist (3 items) :**
- Télémaintenance 7j/7 en moins de 20 minutes
- Si besoin, sur site en moins de 4h depuis Dardilly
- Remplacement de matériel sous 48h depuis le stock Dardilly

**Légende photo :**
Dardilly · Lyon · Villeurbanne · Villefranche-sur-Saône et le Beaujolais

**Texte alt photo :**
Technicien DCB en intervention chez un commerçant dans le Rhône

### Section 9 : FAQ (10 questions uniques Rhône)

Q1 : Êtes-vous vraiment basés dans le Rhône, ou seulement prestataires ?
R : Notre siège social est à Dardilly (69570), dans l'agglomération lyonnaise. Stock matériel, techniciens salariés et direction : tout est sur place. Ce n'est pas une adresse de domiciliation.

Q2 : Intervenez-vous dans tous les arrondissements de Lyon ?
R : Oui. Nos techniciens interviennent dans l'ensemble des arrondissements de Lyon (1er au 9ème), à Villeurbanne, Vénissieux, Bron, Caluire-et-Cuire, Ecully et l'ensemble de la métropole. La prise en main à distance dans les 20 minutes s'applique partout.

Q3 : Quelle différence avec les revendeurs nationaux présents à Lyon ?
R : Les revendeurs nationaux sous-traitent souvent les interventions à des prestataires indépendants. Chez DCB, vos techniciens sont salariés et basés à Dardilly. Votre interlocuteur est le même du devis à la maintenance, pas un centre d'appels.

Q4 : Couvrez-vous le Beaujolais et Villefranche-sur-Saône ?
R : Oui. Villefranche-sur-Saône, Belleville-en-Beaujolais et Anse sont dans notre zone d'intervention quotidienne. Même délai garanti : prise en main à distance en moins de 20 minutes, sur site en moins de 4h.

Q5 : Avez-vous du stock matériel disponible à Lyon ?
R : Oui. Notre entrepôt de Dardilly dispose en permanence d'un stock de caisses tactiles CashMag, imprimantes ticket, tiroirs-caisses et pièces détachées. En cas de panne matérielle, un équipement de remplacement peut être livré et installé sous 24h.

Q6 : Ma caisse actuelle est-elle conforme NF525 ?
R : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. Si votre fournisseur ne vous a pas remis d'attestation de conformité, il y a un doute. Nous proposons un audit gratuit de votre installation actuelle, partout dans le Rhône.

Q7 : Quelle formule pour une boulangerie à Lyon ?
R : Pack Essentiel Boulangerie à 59 €/mois : ouverture à 5h, gestion des invendus, monnayeur compatible, fidélité. Un technicien de Dardilly installe et forme votre équipe sur place. Lyon, Limonest, Tassin : même couverture, même réactivité.

Q8 : Traitez-vous les restaurants du Vieux-Lyon et de la Presqu'île ?
R : Oui. La restauration lyonnaise est notre verticale principale dans le Rhône. Plan de salle, commande mobile, encaissement éclair : CashMag est configuré pour les contraintes d'un service à 80 couverts. Si la caisse bloque un vendredi soir, on prend la main en 20 minutes.

Q9 : Location ou achat : que choisissent les commerçants lyonnais ?
R : La majorité de nos clients dans le Rhône choisissent la location longue durée (24 ou 36 mois) pour lisser l'investissement et inclure le remplacement matériel en cas de panne. L'achat comptant reste possible pour ceux qui préfèrent la propriété immédiate.

Q10 : Comment se passe l'installation à Lyon ?
R : Un technicien DCB sort de Dardilly, vient dans votre établissement, installe le matériel, configure le logiciel selon votre activité et forme votre équipe. La formation dure en moyenne une demi-journée. Un support 7j/7 reste disponible après l'installation.

### Spécifications JSON-LD

**Service :**
serviceType : "Caisse enregistreuse NF525 dans le Rhône"
name : "Caisse enregistreuse dans le Rhône (69) : installation, formation et SAV sur site"
description : "Caisse tactile NF525 pour commerces, boulangeries et restaurants dans le Rhône. Siège social et techniciens salariés basés à Dardilly. Intervention sous 4h à Lyon, Villeurbanne, Vénissieux, Bron, Caluire, Ecully, Villefranche-sur-Saône, Belleville-en-Beaujolais, Anse, Limonest, L'Arbresle, Tarare."
url : https://dcb-technologies.fr/caisse-enregistreuse/rhone/
brand : CashMag

areaServed :
- AdministrativeArea : "Rhône (69)"
- City : Lyon
- City : Villeurbanne
- City : Vénissieux
- City : Bron
- City : Caluire-et-Cuire
- City : Ecully
- City : Dardilly
- City : Villefranche-sur-Saône
- City : Belleville-en-Beaujolais
- City : Anse
- City : Limonest
- City : L'Arbresle
- City : Tarare

hasOfferCatalog : identique au template 71 (Pack Essentiel 59 EUR/mois, Pack Complet 77 EUR/mois)

**BreadcrumbList :**
Position 1 : Accueil > https://dcb-technologies.fr/
Position 2 : Caisse enregistreuse > https://dcb-technologies.fr/caisse-enregistreuse/
Position 3 : Rhône (69) > https://dcb-technologies.fr/caisse-enregistreuse/rhone/

**FAQPage :** 10 questions ci-dessus.

---

## 3. AIN (01) : PAGE A CREER

URL cible : caisse-enregistreuse/ain/index.html
Statut GSC : position 11.5, 1 clic, 98 impressions : le plus grand volume de clics potentiels (meilleure position + plus d'impressions que 42). Priorité haute.
Angle narratif : "La proximité ne se mesure pas en kilomètres" : télémaintenance 20 min + sur site 4h, SANS prétendre avoir une base dans l'Ain.

CONTRAINTE ABSOLUE : ne jamais laisser penser qu'on a une base, un stock ou une agence dans l'Ain. On intervient depuis Paray-le-Monial et Dardilly. L'angle = la réactivité ne dépend pas de la distance.

### Balises

**Title (57 car.) :**
Caisse enregistreuse dans l'Ain (01) | DCB Technologies

**Meta description (153 car.) :**
Caisse enregistreuse NF525 dans l'Ain : prise en main à distance en 20 min, sur site en moins de 4h. Bourg-en-Bresse, Gex, Ambérieu, Oyonnax. Dès 59 €/mois.

**H1 :**
Caisse enregistreuse NF525 dans l'Ain, intervention rapide sur toute la Bresse et le Bugey

### Section 1 : Hero

**Chips :**
- "Ain (01)" (chip orange)
- "Télémaintenance 20 min" (chip blanc)
- "Sur site sous 4h" (chip blanc)

**H1 :** voir ci-dessus

**Lede hero :**
Une panne à Bourg-en-Bresse un samedi matin. Avant qu'un technicien d'un revendeur lointain rappelle, nous avons déjà pris la main à distance. La télémaintenance règle 8 pannes sur 10 en moins de 20 minutes. Si un déplacement est nécessaire, on est sur place en moins de 4h, partout dans l'Ain. Packs caisse tactile à partir de 59 €/mois.

**Checklist hero (3 items) :**
- Prise en main à distance immédiate, 7j/7, sans attendre un rappel
- Sur site en moins de 4h partout dans l'Ain si déplacement nécessaire
- Logiciel CashMag certifié NF525, conforme loi anti-fraude TVA

**Visuel carte flottante :**
Contenu : "Réponse" / "20 min" (badge flottant valorisant la télémaintenance plutôt qu'une base locale)

### Section 2 : Trust bar

- "Télémaintenance 20 min" (icône screen_share)
- "Sur site sous 4h" (icône speed)
- "Certifié NF525" (icône verified)
- "Zéro sous-traitance" (icône groups)

### Section 3 : Pourquoi changer (H2 unique, 3 cards uniques)

**Eyebrow :** Pourquoi changer ?
**H2 :** Votre caisse actuelle vous freine.

**Card 1 : SAV distant et lent (unique Ain)**
Titre : Un SAV qui ne répond pas le matin
Texte : A Bourg-en-Bresse ou Gex, les revendeurs locaux de caisse sont rares. En cas de panne, un ticket d'assistance et 48 heures d'attente. Chez DCB, vous appelez le 04 82 53 05 10 : prise en main à distance dans les 20 minutes, partout dans l'Ain. Si un passage est nécessaire, un technicien est chez vous en moins de 4h.

**Card 2 : Logiciel non conforme (quasi-partagée, information légale)**
Titre : Un logiciel non conforme
Texte : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. L'amende est de 7 500 € par système de caisse non conforme. CashMag est certifié NF525 par l'AFNOR : attestation accessible à tout moment depuis votre caisse.

**Card 3 : Manque d'accompagnement local (unique Ain)**
Titre : Installé de loin, jamais formé
Texte : Beaucoup de commerçants dans l'Ain ont reçu leur caisse par la poste, sans formation sur place. Chez DCB, un technicien vient dans votre établissement, configure le logiciel selon votre activité réelle et forme votre équipe avant la mise en service.

### Section 5 : Témoignages (2 placeholders à valider client : marqués [A CONFIRMER])

**Témoignage 1 :**
Citation : "Je pensais que l'Ain était trop excentré pour avoir un bon SAV de caisse. La télémaintenance a réglé ma panne de samedi matin en 15 minutes, sans que personne se déplace. Et quand j'ai eu besoin d'une mise à jour matérielle, le technicien était là l'après-midi même."
Initiales : AL (fond teal #0D9488)
Nom : Anne-Laure T. [A CONFIRMER]
Etablissement : Commerce de détail, Bourg-en-Bresse (01) [A CONFIRMER]
Etoiles : 5/5

**Témoignage 2 :**
Citation : "Pays de Gex, tout le monde pense que les prestataires sérieux sont à Genève ou à Lyon. DCB a installé notre caisse à Ferney, formé les deux caissières, et quand on a eu un problème trois mois après, ils ont tout réglé à distance en vingt minutes."
Initiales : MB (fond ambre #F59E0B)
Nom : Marc B. [A CONFIRMER]
Etablissement : Boulangerie du Pays de Gex, Ferney-Voltaire (01) [A CONFIRMER]
Etoiles : 5/5

### Section 6 : NF525

**H2 :** Pourquoi la certification NF525 n'est pas une option dans l'Ain
Corps : identique au template 71 (information légale partagée).

### Section 8 : Techniciens / Proximité (unique Ain : angle télémaintenance)

**Eyebrow :** Expertise sans frontière
**H2 :** Vos techniciens dans l'Ain
**Lede :** La réactivité ne dépend pas de la distance. Dans l'Ain, comme ailleurs, 8 pannes sur 10 se règlent en moins de 20 minutes via prise en main à distance. Quand un déplacement est nécessaire, nos techniciens sont sur site en moins de 4 heures, que vous soyez à Bourg-en-Bresse, à Gex ou à Nantua.

**Checklist (3 items) :**
- Télémaintenance 7j/7 en moins de 20 minutes : 8 pannes sur 10 résolues sans déplacement
- Si besoin, sur site en moins de 4h partout dans l'Ain
- Zéro sous-traitance : vos techniciens sont salariés DCB

**Légende photo :**
Bourg-en-Bresse · Bresse · Bugey · Pays de Gex et toute la Dombes

**Texte alt photo :**
Technicien DCB intervenant chez un commerçant dans l'Ain

### Section 9 : FAQ (10 questions uniques Ain)

Q1 : Intervenez-vous vraiment dans l'Ain ou seulement en Rhône et Saône-et-Loire ?
R : Oui, l'Ain fait partie de notre zone d'intervention. La télémaintenance nous permet d'agir en moins de 20 minutes partout dans le département, sans déplacement. Quand un passage est nécessaire, nos techniciens interviennent en moins de 4 heures à Bourg-en-Bresse, Gex, Ambérieu, Oyonnax ou Nantua.

Q2 : Couvrez-vous le Pays de Gex et Ferney-Voltaire ?
R : Oui. Gex, Ferney-Voltaire et Saint-Genis-Pouilly sont dans notre zone de couverture. La télémaintenance est particulièrement adaptée à cette zone frontalière : en cas de panne, on prend la main à distance en 20 minutes, sans avoir à traverser l'agglomération genevoise.

Q3 : Qu'est-ce que la télémaintenance concrètement ?
R : Avec votre accord, nos techniciens prennent le contrôle de votre caisse à distance, via une connexion sécurisée. Nous voyons exactement ce que vous voyez, et nous pouvons intervenir sur le logiciel, les paramétrages ou les configurations sans nous déplacer. 8 pannes sur 10 sont résolues en moins de 20 minutes de cette façon.

Q4 : Traitez-vous la Bresse et Bourg-en-Bresse ?
R : Oui. Bourg-en-Bresse est notre ville principale dans l'Ain. Pont-de-Vaux, Montrevel-en-Bresse et Pont-de-Veyle sont également dans notre zone d'intervention. Même délai garanti : télémaintenance en moins de 20 minutes, sur site en moins de 4h.

Q5 : Couvrez-vous Ambérieu, Belley et le Bugey ?
R : Oui. Ambérieu-en-Bugey, Belley et Nantua font partie de notre zone d'intervention dans l'Ain. La prise en main à distance s'applique partout, quelle que soit la localisation exacte.

Q6 : Avez-vous des clients dans la Dombes et à Châtillon-sur-Chalaronne ?
R : Oui. La Dombes et la Côtière (Trévoux, Châtillon-sur-Chalaronne, Villars-les-Dombes) sont couvertes. La télémaintenance est particulièrement efficace dans ces zones rurales où les prestataires locaux de caisse sont rares.

Q7 : Ma caisse actuelle est-elle conforme NF525 ?
R : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. Si votre fournisseur ne vous a pas remis d'attestation de conformité, il y a un risque. Nous proposons un audit gratuit de votre installation actuelle, partout dans l'Ain.

Q8 : Comment se passe l'installation pour un commerçant dans l'Ain ?
R : Nous planifions l'installation en amont. Un technicien se déplace dans votre établissement, installe le matériel, configure le logiciel CashMag selon votre activité et forme votre équipe sur place. La formation dure en moyenne une demi-journée. Le support 7j/7 prend le relais immédiatement après.

Q9 : Location ou achat dans l'Ain : quelle formule ?
R : La location longue durée (24 ou 36 mois, matériel inclus) est la formule la plus répandue chez nos clients dans l'Ain. Elle inclut le remplacement du matériel en cas de panne et les mises à jour logicielles. L'achat comptant reste disponible.

Q10 : Quelle est la différence avec une solution comme Lightspeed ou Clyo Systems ?
R : Lightspeed et Clyo sont des logiciels SaaS sans accompagnement sur site dans l'Ain. Chez DCB, un technicien vient chez vous, installe et configure tout, et vous êtes joignable 7j/7 par téléphone. La télémaintenance nous permet d'intervenir en 20 minutes. Ce n'est pas le même niveau de service.

### Spécifications JSON-LD

**Service :**
serviceType : "Caisse enregistreuse NF525 dans l'Ain"
name : "Caisse enregistreuse dans l'Ain (01) : installation, formation et SAV sur site"
description : "Caisse tactile NF525 pour commerces, boulangeries et restaurants dans l'Ain. Télémaintenance en moins de 20 minutes, sur site en moins de 4h. Bourg-en-Bresse, Gex, Ferney-Voltaire, Saint-Genis-Pouilly, Ambérieu-en-Bugey, Belley, Nantua, Trévoux, Châtillon-sur-Chalaronne, Villars-les-Dombes, Oyonnax, Pont-de-Vaux."
url : https://dcb-technologies.fr/caisse-enregistreuse/ain/

areaServed :
- AdministrativeArea : "Ain (01)"
- City : Bourg-en-Bresse
- City : Gex
- City : Ferney-Voltaire
- City : Saint-Genis-Pouilly
- City : Ambérieu-en-Bugey
- City : Belley
- City : Nantua
- City : Oyonnax
- City : Trévoux
- City : Châtillon-sur-Chalaronne
- City : Villars-les-Dombes
- City : Pont-de-Vaux
- City : Montrevel-en-Bresse

hasOfferCatalog : identique au template 71

**BreadcrumbList :**
Position 1 : Accueil > https://dcb-technologies.fr/
Position 2 : Caisse enregistreuse > https://dcb-technologies.fr/caisse-enregistreuse/
Position 3 : Ain (01) > https://dcb-technologies.fr/caisse-enregistreuse/ain/

**FAQPage :** 10 questions ci-dessus.

---

## 4. LOIRE (42) : PAGE A CREER

URL cible : caisse-enregistreuse/loire/index.html
Statut GSC : position 3.7, 1 clic, 36 impressions : meilleure position des 4, mais peu d'impressions. La page existe sans doute déjà indexée. Priorité : consolider + exploiter Saint-Etienne (173k hab, volume non capté).
Angle narratif : "Saint-Etienne et Roanne, vraiment couverts" : télémaintenance 20 min + sur site 4h, SANS prétendre avoir une base dans la Loire.

CONTRAINTE ABSOLUE : ne jamais laisser penser qu'on a une base dans la Loire. Même contrainte qu'pour l'Ain. L'angle = réactivité distance.

### Balises

**Title (60 car.) :**
Caisse enregistreuse Loire (42) : Roanne, Saint-Etienne | DCB

**Meta description (155 car.) :**
Caisse enregistreuse NF525 dans la Loire : télémaintenance en 20 min, sur site sous 4h. Saint-Etienne, Roanne, Montbrison, Feurs, Firminy. Dès 59 €/mois.

**H1 :**
Caisse enregistreuse NF525 dans la Loire, intervention rapide à Saint-Etienne et Roanne

### Section 1 : Hero

**Chips :**
- "Loire (42)" (chip orange)
- "Télémaintenance 20 min" (chip blanc)
- "Sur site sous 4h" (chip blanc)

**H1 :** voir ci-dessus

**Lede hero :**
Saint-Etienne, Roanne, Montbrison : trois zones, une seule équipe. La télémaintenance DCB règle 8 pannes sur 10 en moins de 20 minutes, sans déplacement. Quand un passage est indispensable, un technicien est chez vous en moins de 4h, partout dans la Loire. Packs caisse tactile à partir de 59 €/mois.

**Checklist hero (3 items) :**
- Prise en main à distance immédiate, 7j/7, sans attendre un rappel
- Sur site en moins de 4h partout dans la Loire si déplacement nécessaire
- Logiciel CashMag certifié NF525, conforme loi anti-fraude TVA

**Visuel carte flottante :**
Contenu : "Réponse" / "20 min" (même badge que Ain, cohérent avec l'angle narratif)

### Section 2 : Trust bar

- "Télémaintenance 20 min" (icône screen_share)
- "Sur site sous 4h" (icône speed)
- "Certifié NF525" (icône verified)
- "Zéro sous-traitance" (icône groups)

### Section 3 : Pourquoi changer (H2 unique, 3 cards uniques)

**Eyebrow :** Pourquoi changer ?
**H2 :** Votre caisse actuelle vous freine.

**Card 1 : SAV introuvable dans la Loire (unique Loire)**
Titre : Un SAV qui ne répond pas le samedi
Texte : A Saint-Etienne ou Roanne, les revendeurs locaux de caisse sont peu nombreux. Panne un samedi de marché : ticket, chatbot, et vos ventes à la main pendant deux jours. Chez DCB, vous appelez le 04 82 53 05 10 : prise en main à distance dans les 20 minutes. Sur site si nécessaire en moins de 4h.

**Card 2 : Logiciel non conforme (quasi-partagée, information légale)**
Titre : Un logiciel non conforme
Texte : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. L'amende est de 7 500 € par système de caisse non conforme. CashMag est certifié NF525 par l'AFNOR : attestation accessible à tout moment depuis votre caisse.

**Card 3 : Configuration générique (unique Loire)**
Titre : Une caisse pas configurée pour vous
Texte : Un boucher de Roanne n'a pas les mêmes besoins qu'un restaurant stéphanois ou une boulangerie de Montbrison. Nous configurons chaque caisse selon votre activité réelle, avant la mise en service, lors d'une installation sur place dans la Loire.

### Section 5 : Témoignages (2 placeholders à valider client : marqués [A CONFIRMER])

**Témoignage 1 :**
Citation : "On est à Roanne, on pensait que les prestataires sérieux s'arrêtaient à Lyon. DCB est venu installer, a formé mon équipe et quand j'ai eu une question trois semaines après, j'ai eu la réponse en dix minutes par télémaintenance. C'est ça la différence."
Initiales : FG (fond indigo #4F46E5)
Nom : François G. [A CONFIRMER]
Etablissement : Commerce de détail, Roanne (42) [A CONFIRMER]
Etoiles : 5/5

**Témoignage 2 :**
Citation : "Saint-Etienne n'est pas une petite ville, mais les bons prestataires de caisse se comptent sur les doigts d'une main. DCB a su configurer CashMag pour notre brasserie avec le plan de salle et la gestion des offres du soir. Zéro panne depuis l'installation."
Initiales : CV (fond rouge #EF4444)
Nom : Claire V. [A CONFIRMER]
Etablissement : Brasserie du Vieux-Saint-Etienne (42) [A CONFIRMER]
Etoiles : 5/5

### Section 6 : NF525

**H2 :** Pourquoi la certification NF525 n'est pas une option dans la Loire
Corps : identique au template 71 (information légale partagée).

### Section 8 : Techniciens / Proximité (unique Loire : angle télémaintenance)

**Eyebrow :** Expertise sans frontière
**H2 :** Vos techniciens dans la Loire
**Lede :** Saint-Etienne concentre 173 000 habitants et très peu de spécialistes caisse NF525 qui interviennent vraiment sur place. Chez DCB, la télémaintenance permet de régler la majorité des pannes en 20 minutes, depuis n'importe où. Quand un déplacement est nécessaire, nos techniciens sont chez vous en moins de 4 heures, Roannais, Forez ou Pilat.

**Checklist (3 items) :**
- Télémaintenance 7j/7 en moins de 20 minutes : 8 pannes sur 10 résolues sans déplacement
- Si besoin, sur site en moins de 4h partout dans la Loire
- Zéro sous-traitance : vos techniciens sont salariés DCB

**Légende photo :**
Saint-Etienne · Roanne · Montbrison · Feurs · Firminy et le Pilat

**Texte alt photo :**
Technicien DCB intervenant chez un commerçant dans la Loire

### Section 9 : FAQ (10 questions uniques Loire)

Q1 : Intervenez-vous vraiment à Saint-Etienne, ou seulement dans le nord de la Loire ?
R : Oui, Saint-Etienne et toute son agglomération font partie de notre zone d'intervention. Saint-Chamond, Firminy, Andrézieux-Bouthéon : la télémaintenance couvre tout en moins de 20 minutes. Si un déplacement est nécessaire, nos techniciens sont sur place en moins de 4h.

Q2 : Couvrez-vous Roanne et le Roannais ?
R : Oui. Roanne, Riorges et Le Coteau sont dans notre zone d'intervention. Même réactivité que partout ailleurs dans la Loire : télémaintenance en moins de 20 minutes, sur site en moins de 4h si nécessaire.

Q3 : Avez-vous des clients dans le Forez et à Montbrison ?
R : Oui. Montbrison, Feurs et la plaine du Forez font partie de notre périmètre. La télémaintenance est particulièrement adaptée aux zones rurales où les techniciens locaux de caisse sont rares.

Q4 : Couvrez-vous le Pilat (Bourg-Argental, Pélussin) ?
R : Oui. Bourg-Argental, Pélussin et les villages du Pilat sont couverts. La réactivité ne dépend pas de la distance : prise en main à distance en 20 minutes, sur site en moins de 4h.

Q5 : Qu'est-ce que la télémaintenance apporte concrètement à un commerçant stéphanois ?
R : Avec votre accord, nos techniciens prennent le contrôle de votre caisse à distance et règlent la majorité des pannes en moins de 20 minutes, sans que vous attendiez un déplacement. 8 pannes sur 10 sont résolues de cette façon. Pour un commerce qui ouvre à 7h à Saint-Etienne, c'est la différence entre ouvrir et ne pas ouvrir.

Q6 : Quelle formule pour une boulangerie dans la Loire ?
R : Pack Essentiel Boulangerie à 59 €/mois : ouverture à 5h, gestion des invendus, monnayeur compatible, fidélité. Un technicien vient installer et former votre équipe sur place, à Roanne, Saint-Etienne ou Montbrison.

Q7 : Traitez-vous les restaurants et brasseries de Saint-Etienne ?
R : Oui. La restauration stéphanoise est une zone que nous développons activement. CashMag est configuré pour les contraintes d'un service à table : plan de salle, commande mobile, encaissement rapide. Prise en main à distance en 20 minutes si une panne survient pendant le service.

Q8 : Ma caisse actuelle est-elle conforme NF525 ?
R : Depuis 2018, tout commerçant assujetti à la TVA doit utiliser un logiciel certifié NF525. Si votre fournisseur ne vous a pas remis d'attestation, il y a un risque. Nous proposons un audit gratuit de votre installation, partout dans la Loire.

Q9 : Comment se passe l'installation pour un commerçant dans la Loire ?
R : Un technicien se déplace dans votre établissement, installe le matériel, configure le logiciel selon votre activité et forme votre équipe. La formation dure en moyenne une demi-journée. Le support 7j/7 prend le relais immédiatement après.

Q10 : Location ou achat dans la Loire : que recommandez-vous ?
R : La location longue durée (24 ou 36 mois) est la formule la plus souple pour les commerçants de la Loire : elle inclut le remplacement du matériel en cas de panne et les mises à jour logicielles. L'achat comptant reste disponible pour ceux qui préfèrent la propriété immédiate.

### Spécifications JSON-LD

**Service :**
serviceType : "Caisse enregistreuse NF525 dans la Loire"
name : "Caisse enregistreuse dans la Loire (42) : installation, formation et SAV sur site"
description : "Caisse tactile NF525 pour commerces, boulangeries et restaurants dans la Loire. Télémaintenance en moins de 20 minutes, sur site en moins de 4h. Saint-Etienne, Saint-Chamond, Firminy, Andrézieux-Bouthéon, Roanne, Riorges, Le Coteau, Montbrison, Feurs, Bourg-Argental, Pélussin."
url : https://dcb-technologies.fr/caisse-enregistreuse/loire/

areaServed :
- AdministrativeArea : "Loire (42)"
- City : Saint-Etienne
- City : Saint-Chamond
- City : Firminy
- City : Andrézieux-Bouthéon
- City : Roanne
- City : Riorges
- City : Le Coteau
- City : Montbrison
- City : Feurs
- City : Boën-sur-Lignon
- City : Bourg-Argental
- City : Pélussin

hasOfferCatalog : identique au template 71

**BreadcrumbList :**
Position 1 : Accueil > https://dcb-technologies.fr/
Position 2 : Caisse enregistreuse > https://dcb-technologies.fr/caisse-enregistreuse/
Position 3 : Loire (42) > https://dcb-technologies.fr/caisse-enregistreuse/loire/

**FAQPage :** 10 questions ci-dessus.

---

## MAILLAGE ET SITEMAP : IMPACT

Liens a ajouter dans le hub caisse (caisse-enregistreuse/index.html) :
La section "Nos zones d'intervention" ou un bandeau footer de page doit mentionner et lier les 4 pages locales.
Si cette section n'existe pas, le copywriter/front-builder la crée selon le pattern hub.

Liens a ajouter dans chaque page locale l'une vers l'autre :
Non recommande (risque de maillage circulaire sans valeur). Privilegier le lien hub -> pages locales seulement.

Impact sitemap.xml :
Ajouter 3 nouvelles URLs (les pages 69, 01, 42) dans sitemap.xml apres integration.
La page 71 est deja dans le sitemap.

Format a ajouter pour chaque nouvelle page :
  <url>
    <loc>https://dcb-technologies.fr/caisse-enregistreuse/rhone/</loc>
    <lastmod>[date d'integration]</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>

---

## MISE A JOUR MASTER PLAN

Ces 4 pages correspondent a une extension du Sprint 7 (pages locales) du MASTER_PLAN.md,
mais avec un perimetre silo-specifique (caisse seulement, pas zones generiques).
Elles peuvent etre considerees comme un Sprint 7bis independant.
Une fois les pages integrees et validees, mettre a jour le tableau d'avancement du MASTER_PLAN.md :
"Sprint 7bis : Pages locales silo caisse (4 departements)" : En cours / Termine.
