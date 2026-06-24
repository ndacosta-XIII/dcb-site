# Plan SEA complet DCB Technologies V2 (production agent ads-creator, 17/06/2026)

> Acquisition payante 100% digitale (Google Ads + Meta), ambitieuse, faible taux d'échec par la discipline.

## Diagnostic de l'ancienne campagne (982€/4 conv fantômes)
Tracking cassé (action principale REMOVED, GA4 non importé), budget dpt trop bas (IS perdu 29-33% par budget), "Campagne mot clef strict 71" 459€/0 conv (mots trop larges), groupes Concurrents POOR strength 0 conv, négatifs quasi absents, landers sans formulaire above the fold, prix 89€ obsolète, aucune campagne IT/Web/Meta.

## 1. Pages SEA figées

### Caisse (Google Search + Meta selon la page)
- `/caisse-enregistreuse/` hub : Meta remarketing uniquement (intention trop large en Search).
- `/boulangerie/`, `/restaurant/`, `/commerce-de-detail/`, `/coiffure/` : Search + Meta (métiers).
- À CRÉER : `/macon/` (P1), `/chalon-sur-saone/` (P1), `/roanne/` (P2), `/bourg-en-bresse/` (P2), `/alternative-jdc/` (P3), `/obligation-nf525/` (P3).

### IT
- `/maintenance-depannage/` : Search (intention max, volume modeste).
- `/infogerance-pme/` : Search + Meta (géo serré 71/69).
- `/maintenance-informatique/` hub : Meta remarketing.

### Web
- `/creation-site-internet/` : Search (faible concurrence locale, CPC accessible).
- `/seo-sea-local/` : Meta uniquement.

### NE SONT PAS landers SEA
cashmag, monnayeur, borne, hairnet, pages département (orphelines SEO, zéro formulaire), cloud-securite, outils-collaboratifs, location-vente-installation, hebergement, contact, notre-adn, blog.

## 2. Optimisation contenu par lander (règle message match)
Mot-clé de l'annonce = H1. Preuve principale (prix/délai/NF525) sans scroll. CTA formulaire + tel cliquable above the fold. LCP < 3s. URL exacte (casse).
- **Boulangerie** : H1 "caisse enregistreuse boulangerie", prix 59€ + badge NF525 above fold, gestion par article/poids/prix, formation incluse, phrase proximité Paray 4h.
- **Restaurant** : H1 + ancrage local, NF525/prix/4h above fold, gestion tables + envoi cuisine + TVA différenciée.
- **Commerce** : H1 + zone, stocks temps réel + fidélité + ticket numérique, cross-sell IT discret.
- **Coiffure** : H1 salon, insister simplicité (prise en main 2h) + agenda + encaissement CB, NF525 secondaire.
- **Dépannage IT** : H1 "dépannage informatique 71 sous 4h", 4h en badge hero, tel prioritaire sur formulaire.
- **Infogérance** : H1 contrat tout-inclus, prix 59€ + 3 piliers, "techniciens salariés pas de sous-traitants", champ "nombre de postes".
- **Création site** : H1 + zone, prix "à partir de 1200€", délai + hébergement local + pas d'abonnement plateforme.
- **Pages ville (à créer)** : H1 "Caisse enregistreuse à [Ville] : installation et SAV sous 4h", proximité chiffrée depuis Paray, métiers locaux nommés, témoignage local, JSON-LD areaServed, formulaire dédié.
- **Alternative JDC (à créer)** : H1 comparatif, tableau DCB vs JDC (proximité, 4h, prix 59€, salariés), faits vérifiables zéro dénigrement.

## 3. Structure Google Ads (budget 500€/mois)
| Campagne | Budget/jour | /mois |
|---|---|---|
| Caisse 71 Search | 7€ | 210€ |
| Caisse 69 Search | 4€ | 120€ |
| Caisse 01+42 Search | 3€ | 90€ |
| IT dépannage Search | 2€ | 60€ |
| Web création Search | 1€ | 30€ |
Géo PRESENCE (pas INTEREST). Enchères : Maximiser clics + CPC max au départ, Target CPA après 20 conversions. Meta en phase 2 (mois 2, 150€ : remarketing + prospection).

Groupes Caisse 71 : Générique 71, Restaurant, Boulangerie, Commerce, NF525/conformité (mots exacts type [caisse enregistreuse macon], [caisse enregistreuse boulangerie 71], [nf525 caisse enregistreuse]). Caisse 69 : Générique (dont [caisse enregistreuse lyon] = money keyword pos 49), Restaurant, Commerce. IT : Dépannage urgent + Infogérance. Web : création site 71.

## 4. Négatifs obligatoires (compte)
gratuit, formation, logiciel gratuit, ipad, sumup/tiller/lightspeed/hiboutik/popina (sauf page alternative), monnayeur automatique (sauf lander), casio, amazon, darty, occasion, reconditionné, telecharger, tutoriel, emploi, pressing, wino, marché (forains), olympia + maintenir les exclusions existantes (jdc service client, dish pos, casio ses100).

## 5. Annonces RSA (15 titres + 4 desc, pin position 1 sur le keyword)
Titres caisse : Caisse Enregistreuse [Ville] / NF525 Certifié AFNOR / dès 59€/mois Tout Inclus / SAV moins de 4h / Technicien Local pas de Centre d'Appel / Devis Gratuit 24h / Installation + Formation / Garantie 5 ans / Zéro Apport / 3 Offres Caisse IT Web. Descriptions : proximité Paray 4h, CashMag NF525 anti-amende, comparatif vs JDC/SumUp, métier adapté prise en main 2h. Extensions : call (lun-sam 8h-18h), sitelinks (tarifs, restaurant, boulangerie, contact), callouts (technicien local, 4h, NF525, 59€/mois), structured snippets services.

## 6. Meta phase 2 (mois 2, 150€)
Remarketing visiteurs 30j (Pixel). Prospection caisse (intérêts boulangerie/resto/commerce/coiffure + Small Business Owners, lookalike dès 100 clients) avec 3 concepts (preuve localité, prix transparent vs concurrents, 3-en-1). Prospection IT (dirigeants PME). Image forte (badge NF525 + prix), pas de vidéo au stade actuel.

## 7. Tracking (prérequis bloquant, dans l'ordre)
1. GTM sur toutes les pages. 2. GA4 events contact_form_submit + phone_click marqués conversions. 3. Import GA4 dans Google Ads, désactiver les anciennes actions cassées. 4. Pixel Meta + event Lead. 5. Checklist message match par lander avant activation. 6. Auto-tagging + UTM Meta. 7. 30j calibration en Maximiser clics. 8. Tableau de bord 5 métriques, alerte si coût/lead > 150€.

## Séquence
S1 tracking + formulaire ; S2 créer Mâcon/Chalon + message match + tel cliquable ; S3 lancer Search + extensions + négatifs ; M2 Meta + Roanne/Bourg ; M3 Target CPA + page JDC + éval Web.

## À confirmer (Keyword Planner bloqué, accès de base à demander)
Volumes : caisse Mâcon (50-200/mois, quasi-monopole), dépannage 71 (20-50, CPC 2-4€), création site 71 (100-300, CPC 1,5-3€), caisse Lyon (500-2000, CPC 3-6€, concurrence nationale).
