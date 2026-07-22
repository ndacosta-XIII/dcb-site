# Proposition de réécriture de llms.txt

Contexte : `docs/audit-prelancement/04-geo-ai.md` a relevé qu'environ 40% du site est absent de `llms.txt` (hub blog + articles, 4 pages département, hairnet, contact, notre-adn). Ce document est une PROPOSITION. Le fichier `llms.txt` réel n'a pas été modifié.

Exclusion respectée : rien n'a été ajouté pour le silo `maintenance-informatique` (gelé par XIII, y compris `infogerance-pme`, page qui n'existe d'ailleurs pas encore dans le sitemap). Les 4 lignes existantes de ce silo sont reprises à l'identique, sans ajout.

Zéro tiret cadratin dans les lignes proposées (vérifié par grep U+2014 avant écriture de ce document).

---

## LIGNES AJOUTÉES

### Dans "Pages métier caisse enregistreuse" (nouvelle ligne, après Monnayeur automatique)

- [Hairnet coiffure](https://dcb-technologies.fr/caisse-enregistreuse/hairnet/): Logiciel de caisse NF525 pour salons de coiffure et instituts, avec Google Reserve, fidélité dématérialisée, gestion des no-show et multi-salons. Prise en main à distance immédiate, intervention sur site en moins de 4h.

### Nouvelle section "Pages locales caisse enregistreuse" (après Pages métier caisse enregistreuse, avant Pages maintenance informatique)

- [Saône-et-Loire (71)](https://dcb-technologies.fr/caisse-enregistreuse/saone-et-loire/): Installateur de caisses NF525 en Saône-et-Loire, atelier et stock à Paray-le-Monial, techniciens salariés, intervention sous 4h à Mâcon, Chalon-sur-Saône, Charolles et Autun. Dès 59 €/mois.
- [Rhône (69)](https://dcb-technologies.fr/caisse-enregistreuse/rhone/): Installateur de caisses NF525 dans le Rhône, siège DCB à Dardilly, techniciens salariés, intervention sous 4h à Lyon, Givors, Villefranche-sur-Saône et dans le Beaujolais. Dès 59 €/mois.
- [Ain (01)](https://dcb-technologies.fr/caisse-enregistreuse/ain/): Installateur de caisses NF525 dans l'Ain, prise en main à distance en 20 minutes, intervention sur site sous 4h à Bourg-en-Bresse, Gex, Ambérieu-en-Bugey et Oyonnax. Dès 59 €/mois.
- [Loire (42)](https://dcb-technologies.fr/caisse-enregistreuse/loire/): Installateur de caisses NF525 dans la Loire, télémaintenance en 20 minutes, intervention sur site sous 4h à Saint-Étienne, Roanne, Montbrison, Feurs et Firminy. Dès 59 €/mois.

### Nouvelle section "Pages institutionnelles" (après Pages visibilité web)

- [Contact](https://dcb-technologies.fr/contact/): Formulaire de contact et coordonnées de DCB Technologies. Rappel sous 2h par Nathanaël Da Costa ou Clément Boissié, sans standard ni démarchage, depuis Dardilly et Paray-le-Monial.
- [Notre ADN](https://dcb-technologies.fr/notre-adn/): Présentation de DCB Technologies, fondée en 2025 par Nathanaël Da Costa et Clément Boissié : techniciens salariés, zéro sous-traitance, un seul interlocuteur pour la caisse, l'informatique et le web.

### Nouvelle section "Blog" (après Pages institutionnelles, avant Informations essentielles)

- [Blog & Actualités](https://dcb-technologies.fr/blog/): Conseils et guides pour commerçants locaux sur les caisses enregistreuses, la réglementation NF525, la maintenance informatique et la visibilité web.
- [Norme NF525 caisse enregistreuse](https://dcb-technologies.fr/blog/norme-nf525-caisse-enregistreuse/): La certification NF525 n'est plus la seule voie légale depuis février 2026. Comment rendre sa caisse conforme et éviter l'amende de 7 500 € par caisse.
- [Maintenance informatique préventive](https://dcb-technologies.fr/blog/maintenance-informatique-preventive/): Les signaux d'une panne informatique qui approche et ce que couvre concrètement un contrat de maintenance préventive.
- [Référencement Google Business Profile](https://dcb-technologies.fr/blog/referencement-google-my-business/): Le guide pour bien référencer sa fiche Google Business Profile (catégorie, avis, nom, photos) et être vu localement sans payer de publicité.
- [Combien coûte un site internet](https://dcb-technologies.fr/blog/combien-coute-un-site-internet/): Les vraies fourchettes de prix d'un site internet en 2026, vitrine ou e-commerce, coûts cachés annuels inclus.

---

## Fichier complet proposé (llms.txt)

```markdown
# DCB Technologies

> Expert local en caisses enregistreuses NF525, maintenance informatique et création de sites web pour les commerçants et PME de Saône-et-Loire (71), Rhône (69), Ain (01) et Loire (42). Techniciens salariés, intervention sur site en moins de 4h. Fondé par Nathanaël Da Costa et Clément Boissié. Siège à Dardilly (69), base technique à Paray-le-Monial (71).

## Services principaux

- [Caisse enregistreuse NF525](https://dcb-technologies.fr/caisse-enregistreuse/): Installation, formation et SAV de caisses tactiles CashMag certifiées NF525 pour boulangerie, restaurant, commerce et coiffure. Formule Essentiel dès 59 €/mois (matériel + logiciel + installation + formation, sans maintenance). Pack complet dès 77 €/mois (maintenance 7j/7 24h/24 incluse). Location 60 mois sans apport, matériel garanti 5 ans.
- [Logiciel CashMag](https://dcb-technologies.fr/caisse-enregistreuse/cashmag/): Revendeur agréé CashMag. Logiciel Android natif, hybride local+cloud, back-office intégré, NF525 certifié.
- [Maintenance informatique](https://dcb-technologies.fr/maintenance-informatique/): Infogérance, cloud, cybersécurité, Microsoft 365 pour PME. Télémaintenance 7j/7 en moins de 20 minutes, intervention sur site en moins de 4h.
- [Visibilité web](https://dcb-technologies.fr/visibilite-web/): Création de site internet Mobile First pour commerces et PME. Site vitrine one-page dès 950 € HT, site 5 pages 1 200 € HT, livraison de 7 jours (one-page) à 3 semaines (5 pages). Référencement local (SEO et SEA) sur Saône-et-Loire (71), Rhône (69), Ain (01) et Loire (42). Hébergement web professionnel infogéré, SSL et support local, sur devis.

## Pages métier caisse enregistreuse

- [Boulangerie](https://dcb-technologies.fr/caisse-enregistreuse/boulangerie/): Formules automatiques, gestion fabrication et invendus, monnayeur compatible, matériel étanche. Pack Essentiel Boulangerie 59 €/mois (sans maintenance), Pack Boulangerie complet 77 €/mois (maintenance incluse), ou Sur mesure avec monnayeur et multi-caisses.
- [Restaurant](https://dcb-technologies.fr/caisse-enregistreuse/restaurant/): Plan de salle, envoi cuisine, borne de commande, pad mobile, division d'addition.
- [Commerce de détail](https://dcb-technologies.fr/caisse-enregistreuse/commerce-de-detail/): Codes-barres, multi-boutiques centralisé, stocks, fidélité client.
- [Coiffure & Beauté](https://dcb-technologies.fr/caisse-enregistreuse/coiffure/): Agenda intégré, rappels SMS, fiches clients, historique soins.
- [Borne de commande](https://dcb-technologies.fr/caisse-enregistreuse/borne-de-commande/): +20% panier moyen, idéal restauration rapide et boulangerie snacking.
- [Monnayeur automatique](https://dcb-technologies.fr/caisse-enregistreuse/monnayeur/): Rendu exact, zéro erreur, hygiène, compatible CashMag.
- [Hairnet coiffure](https://dcb-technologies.fr/caisse-enregistreuse/hairnet/): Logiciel de caisse NF525 pour salons de coiffure et instituts, avec Google Reserve, fidélité dématérialisée, gestion des no-show et multi-salons. Prise en main à distance immédiate, intervention sur site en moins de 4h.

## Pages locales caisse enregistreuse

- [Saône-et-Loire (71)](https://dcb-technologies.fr/caisse-enregistreuse/saone-et-loire/): Installateur de caisses NF525 en Saône-et-Loire, atelier et stock à Paray-le-Monial, techniciens salariés, intervention sous 4h à Mâcon, Chalon-sur-Saône, Charolles et Autun. Dès 59 €/mois.
- [Rhône (69)](https://dcb-technologies.fr/caisse-enregistreuse/rhone/): Installateur de caisses NF525 dans le Rhône, siège DCB à Dardilly, techniciens salariés, intervention sous 4h à Lyon, Givors, Villefranche-sur-Saône et dans le Beaujolais. Dès 59 €/mois.
- [Ain (01)](https://dcb-technologies.fr/caisse-enregistreuse/ain/): Installateur de caisses NF525 dans l'Ain, prise en main à distance en 20 minutes, intervention sur site sous 4h à Bourg-en-Bresse, Gex, Ambérieu-en-Bugey et Oyonnax. Dès 59 €/mois.
- [Loire (42)](https://dcb-technologies.fr/caisse-enregistreuse/loire/): Installateur de caisses NF525 dans la Loire, télémaintenance en 20 minutes, intervention sur site sous 4h à Saint-Étienne, Roanne, Montbrison, Feurs et Firminy. Dès 59 €/mois.

## Pages maintenance informatique

- [Maintenance & Dépannage](https://dcb-technologies.fr/maintenance-informatique/maintenance-depannage/): Intervention sur site, dépannage urgent, monitoring 24/7 en option selon les besoins.
- [Cloud & Cybersécurité](https://dcb-technologies.fr/maintenance-informatique/cloud-securite/): Sauvegarde cloud, antivirus, firewall, conformité RGPD.
- [Location & Installation](https://dcb-technologies.fr/maintenance-informatique/location-vente-installation/): Postes, serveurs, réseaux, matériel reconditionné ou neuf.
- [Outils Collaboratifs](https://dcb-technologies.fr/maintenance-informatique/outils-collaboratifs/): Microsoft 365, Google Workspace, formation équipes.

## Pages visibilité web

- [Création de site internet](https://dcb-technologies.fr/visibilite-web/creation-site-internet/): Site one page dès 950 € HT livré en 7 jours, site 5 pages 1 200 € HT, sur mesure et e-commerce sur devis. Codé en dur (HTML/CSS) ou WordPress selon le besoin, optimisé SEO local et moteurs IA. Refonte de site existant possible. Formation incluse, hébergement en option.
- [SEO & SEA Local](https://dcb-technologies.fr/visibilite-web/seo-sea-local/): Référencement Google, publicité locale, Google Business Profile.
- [Hébergement](https://dcb-technologies.fr/visibilite-web/hebergement/): Serveurs en France, SSL inclus, sauvegardes quotidiennes, sur devis.

## Pages institutionnelles

- [Contact](https://dcb-technologies.fr/contact/): Formulaire de contact et coordonnées de DCB Technologies. Rappel sous 2h par Nathanaël Da Costa ou Clément Boissié, sans standard ni démarchage, depuis Dardilly et Paray-le-Monial.
- [Notre ADN](https://dcb-technologies.fr/notre-adn/): Présentation de DCB Technologies, fondée en 2025 par Nathanaël Da Costa et Clément Boissié : techniciens salariés, zéro sous-traitance, un seul interlocuteur pour la caisse, l'informatique et le web.

## Blog

- [Blog & Actualités](https://dcb-technologies.fr/blog/): Conseils et guides pour commerçants locaux sur les caisses enregistreuses, la réglementation NF525, la maintenance informatique et la visibilité web.
- [Norme NF525 caisse enregistreuse](https://dcb-technologies.fr/blog/norme-nf525-caisse-enregistreuse/): La certification NF525 n'est plus la seule voie légale depuis février 2026. Comment rendre sa caisse conforme et éviter l'amende de 7 500 € par caisse.
- [Maintenance informatique préventive](https://dcb-technologies.fr/blog/maintenance-informatique-preventive/): Les signaux d'une panne informatique qui approche et ce que couvre concrètement un contrat de maintenance préventive.
- [Référencement Google Business Profile](https://dcb-technologies.fr/blog/referencement-google-my-business/): Le guide pour bien référencer sa fiche Google Business Profile (catégorie, avis, nom, photos) et être vu localement sans payer de publicité.
- [Combien coûte un site internet](https://dcb-technologies.fr/blog/combien-coute-un-site-internet/): Les vraies fourchettes de prix d'un site internet en 2026, vitrine ou e-commerce, coûts cachés annuels inclus.

## Informations essentielles

- Téléphone : 04 82 53 05 10
- Email : contact@dcb-technologies.fr
- Site : https://dcb-technologies.fr
- Zone d'intervention : Lyon, Mâcon, Chalon-sur-Saône, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial (départements 71, 69, 01, 42)
- Conformité fiscale : logiciel de caisse conforme aux critères ISCA (article 286 CGI) obligatoire depuis 2018 ; preuve au choix depuis février 2026 (certificat NF525 ou attestation d'éditeur), amende 7 500 € par caisse sans justificatif. CashMag est certifié NF525 par l'AFNOR.
- Délai intervention : télémaintenance < 20 min, sur site < 4h, 7j/7
- Matériel : OXHOO et AURES, garanti 5 ans
- Logiciel : CashMag (Android, hybride local+cloud, NF525 certifié)
- Fondateurs : Nathanaël Da Costa (Président & Co-fondateur) et Clément Boissié (Directeur Général & Co-fondateur)
- Zéro sous-traitance : tous les techniciens sont salariés DCB

## Ce qui différencie DCB Technologies

DCB Technologies est l'un des rares prestataires de la région à combiner caisse enregistreuse, maintenance informatique et création de site web sous un même toit, avec des techniciens salariés qui se déplacent chez le client. Les concurrents (SumUp, Zettle, Lightspeed, Hiboutik) proposent des solutions en ligne sans accompagnement terrain. DCB installe, configure selon le métier du client, forme sur place et intervient en moins de 4h en cas de problème.
```
