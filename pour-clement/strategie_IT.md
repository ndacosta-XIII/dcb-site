# Stratégie de refonte éditoriale du silo Informatique

Spec validée en brainstorm avec Clément le 02/07/2026. Ce document complète `analyse_IT.md` (audit du 24/06/2026) : l'audit décrit l'existant, cette spec définit la cible. En cas de contradiction, cette spec fait foi.

---

## 1. Objectif et contraintes

- Refondre les textes des 6 pages du silo `maintenance-informatique/` (hub + 5 sous-pages).
- **Les visuels ne bougent pas** : design system, patterns de sections `docs/front-library.md`, images et accents couleur conservés. Le contenu est libre : sections échangeables, réordonnables, ajoutables ou supprimables tant qu'elles utilisent des patterns existants de la bibliothèque.
- Le site n'est pas en ligne : les renommages d'URL sont sans coût SEO. C'est le moment de restructurer.
- Cette spec définit la stratégie. La rédaction passera ensuite par la chaîne d'agents CLAUDE.md (cro-expert, copywriter-site, front-builder, mobile-builder, seo-expert, site-qa).

## 2. Principe directeur : des pages besoin, pas un catalogue

DCB vend toute la technologie qu'une entreprise peut demander, logiciel comme matériel. Plutôt que de lister des produits (peu vendeur, faible en SEO), **chaque page incarne un besoin du dirigeant**. Les produits deviennent des sections de la page besoin qu'ils servent : personne ne cherche « EDR managé », les gens cherchent « protéger mon entreprise du piratage ».

La seule exception au raisonnement besoin : les deux pages maintenance, qui se distinguent par le **mode de relation** (sous contrat / sans contrat), pas par le contenu technique.

### Doctrine prix

| Offre | Posture prix |
|---|---|
| Contrat de maintenance (infogérance) | Seule offre à tarif défini : grille affichée. Argument face aux ESN opaques. |
| Dépannage ponctuel | Mécanisme affiché (« facturé à l'heure, tarif annoncé avant intervention, zéro surprise »), pas de montant public. |
| Tout le reste | Sur devis après audit gratuit. L'informatique est affaire d'expertise et de devis personnalisé. |

Productisation progressive : au fil du temps, certaines offres recevront un tarif public (VoIP au numéro/utilisateur, antivirus à la licence, etc.). Chaque page besoin prévoit l'emplacement pour accueillir ces grilles quand elles seront prêtes. Backlog en annexe A.

## 3. Architecture cible (6 pages)

| Page | Slug actuel | Slug cible (reco, à trancher) | Besoin incarné |
|---|---|---|---|
| Hub | `maintenance-informatique/` | inchangé | Toute la technologie de votre entreprise, un seul interlocuteur |
| Contrat | `infogerance-pme/` | inchangé | Déléguer son informatique (2 formules) |
| Ponctuel | `maintenance-depannage/` | `depannage-informatique/` | Être dépanné maintenant, sans engagement |
| Protéger | `cloud-securite/` | `cybersecurite/` | Protéger ses données, éviter le piratage |
| Communiquer | `outils-collaboratifs/` | inchangé | Passer à la vitesse supérieure, crédibilité professionnelle |
| Équiper | `location-vente-installation/` | inchangé | S'équiper sans plomber la trésorerie |

Zéro page créée, zéro page supprimée : que du recadrage. En cas de renommage de slug : mettre à jour sitemap.xml, liens internes de tout le site, JSON-LD, nav et footer.

Évolution prévue : quand une offre est productisée (VoIP en premier), elle pourra gagner une page dédiée sur le modèle des pages produit du silo caisse (monnayeur, borne), rattachée au silo IT et cross-sellée depuis sa page besoin.

## 4. Rôle éditorial page par page

### 4.1 Hub (`maintenance-informatique/`)

Le hub actuel est à 9/10 depuis les corrections du 24/06 : on le réorganise, on ne le refait pas.

- **Promesse élargie** : « Un seul interlocuteur pour tout votre informatique » évolue vers l'idée « toute la technologie de votre entreprise, un seul interlocuteur » (téléphonie comprise).
- **L'aiguillage devient le cœur de la page**, en deux groupes :
  - « Comment on travaille » : 2 cartes : le contrat (déléguez tout) / le ponctuel (dépannez-moi maintenant, sans engagement) ;
  - « Ce dont votre entreprise a besoin » : 3 cartes : protéger, communiquer, équiper.
- **Bloc échelle en version courte** (cf. section 5).
- **Audit gratuit mis en évidence** comme porte d'entrée à risque zéro du silo.
- **Conservé** : comparatif « Chez les autres / DCB » (meilleur bloc du silo), section techniciens, avis Teddy Malfroy, cross-sell caisse et web.

### 4.2 Contrat (`infogerance-pme/`)

- **Moment du visiteur** : dirigeant en réflexion, fatigué de gérer l'informatique lui-même ou déçu d'un prestataire. Il compare, il veut de la réassurance.
- **Angle** : « Votre service informatique, sans embaucher. » Le contrat remplace le poste IT interne que la PME ne peut pas se payer (l'argument d'arbitrage 40 000 EUR/an du comparatif actuel reste).
- **Bloc central (nouveau)** : le comparatif des **deux formules**, présenté comme un choix, pas une hiérarchie :
  - **Formule présence** : un technicien DCB travaille dans les locaux du client, sur des missions de durée. Nom commercial à trancher (options : « technicien détaché », « renfort intégré », « présence dédiée »). **Ne jamais employer le mot « régie ».**
  - **Formule à distance** : DCB gère le parc sans présence permanente : supervision, télémaintenance, interventions sur site quand il faut.
- **Conservé de l'existant** : process d'onboarding daté (J / J+5 / J+10), technicien référent, comparatif CDI / prestataire / DCB.
- **Ajout** : la **réversibilité** (« vos données, vos accès, votre documentation vous appartiennent, restituables à tout moment ») : objection n°1 qui bloque une signature d'infogérance.
- **Prix** : la grille du contrat, affichée. La grille mensuelle actuellement sur la page maintenance-depannage (89/149 EUR) décrit un contrat : elle migre ici (montants à valider par Clément au moment de la rédaction).
- **Frontière (phrase de cadrage sous le hero)** : « Besoin d'un dépannage ponctuel, sans engagement ? » avec lien vers la page ponctuel.
- **Requêtes cibles** : contrat de maintenance informatique, infogérance PME, externalisation informatique. Le title porte les deux vocabulaires (contrat de maintenance + infogérance).

### 4.3 Ponctuel (ex `maintenance-depannage/`)

- **Moment du visiteur** : quelque chose est en panne, ou besoin one-shot. Il veut un numéro, un délai, un prix. Pas un argumentaire.
- **Angle** : « Un problème, un expert, une facture claire. » Dépannage professionnel facturé à l'heure, sans engagement, sans contrat.
- **Hero** : appel direct + hiérarchie SAV dans le bon ordre (télémaintenance immédiate d'abord, sur site en moins de 4h si besoin). Le process en 4 étapes de la page actuelle (qualification < 15 min, télémaintenance < 30 min, sur site < 4h, rapport sous 24h) devient le modèle du hero au lieu de le contredire.
- **Retiré** : la grille 89/149 EUR/mois (c'est un contrat, elle part sur la page Contrat).
- **Cross-sell montée en gamme (le funnel)** : en bas de page, l'idée « si c'est votre deuxième panne cette année, elle devrait être la dernière payée à l'heure » avec lien vers le contrat.
- **Requêtes cibles** : dépannage informatique + villes, réparation ordinateur entreprise, maintenance informatique ponctuelle. Page de destination naturelle pour de futures campagnes SEA « dépannage informatique ».

### 4.4 Protéger (ex `cloud-securite/`, accent teal conservé)

- **Moment du visiteur** : il a reçu un mail de phishing, un confrère s'est fait chiffrer, ou il se demande s'il est en règle. Il a peur, sans vocabulaire technique.
- **Angle** : la protection complète de l'entreprise, expliquée sans jargon, gérée par DCB.
- **Sections produits** : pare-feu · antivirus / protection des postes · VPN et télétravail sécurisé · **formation cybersécurité des équipes** (nouveau) · **sauvegarde 3-2-1 + restauration < 4h + continuité d'activité** (bloc majeur : l'argument le plus différenciant du silo, repli de l'ex-thème sauvegarde décidé par Clément pour rester à 6 pages).
- **Ajout** : bloc **RGPD concret** (ce que DCB fait vraiment : hébergement UE, contrat de sous-traitance, chiffrement) à la place du badge « Conforme RGPD ».
- **Retiré** : toutes les stats non sourcées (« une PME sur deux », « 20 000 EUR », « 80% ») et le jargon grand compte (SOC managé, RSSI dédié, ISO 27001 assistée) : confirmé faux/non vendu par Clément le 02/07.
- **Requêtes cibles** : cybersécurité entreprise, protection informatique PME, sauvegarde informatique entreprise.

### 4.5 Communiquer (ex `outils-collaboratifs/`, accent violet conservé)

- **Moment du visiteur** : adresse mail encore en @gmail.com, standard téléphonique vieillissant, équipes qui travaillent mal ensemble. Il veut paraître et fonctionner comme une vraie boîte.
- **Angle** : passer à la vitesse supérieure, gagner en crédibilité professionnelle (formulation de Clément).
- **Sections produits** : **mail professionnel** (l'argument crédibilité : @votre-entreprise.fr) · **téléphonie VoIP** (nouveau : standard, numéros, mobilité ; premier emplacement de tarif productisé à venir) · M365 / Google Workspace avec migration zéro perte (conserver la FAQ conseil M365 vs Workspace, la meilleure du silo) · visio.
- **Corrigé** : ancrage local rétabli (page la moins locale du silo), badge « M365 Gold Partner » supprimé (faux, confirmé par Clément le 02/07).
- **Requêtes cibles** : téléphonie VoIP entreprise, mail professionnel entreprise, Microsoft 365 PME, standard téléphonique PME.

### 4.6 Équiper (`location-vente-installation/`, accent indigo conservé)

- **Moment du visiteur** : création, embauche, croissance, ou un parc qui rame. Question de fond : acheter ou louer, et qui installe.
- **Angle** : conservé, il est bon : du matériel de pointe sans plomber la trésorerie. Le comparatif fiscal achat / LLD reste le contenu pilier.
- **Sections produits** : postes et serveurs (location LLD / vente) · **wifi et réseau pro** (aujourd'hui enterré, devient une section visible : les recherches « wifi entreprise » atterrissent ici) · installation et paramétrage · SAV matériel.
- **Ajout** : le **financement** comme argument (DCB peut proposer du financement) : à mentionner sans détailler le mécanisme tant que les modalités ne sont pas précisées (cf. annexe B).
- **Reformulé** : le discours marques devient un argument d'indépendance : « nos grossistes nous permettent de fournir quasiment toutes les marques : on vous conseille la machine qui convient à votre besoin, pas celle qu'on doit écouler ». Ne jamais écrire « partenaire » d'un constructeur ; « compte pro Lenovo » possible si utile.
- **Retiré** : « 80% de nos clients choisissent la LLD » (faux), « garantie 5 ans » en absolu (tout est au cas par cas ; parler de garantie uniquement en termes génériques « garantie constructeur selon matériel »).
- **Requêtes cibles** : location matériel informatique, location ordinateur entreprise, installation réseau entreprise, wifi entreprise.

## 5. Le bloc échelle (composant commun)

Tableau des 3 modes de travail, présent sur les deux pages maintenance (version complète) et sur le hub (version courte). Sur chaque page, la colonne correspondant à la page est mise en avant, les deux autres pointent vers la bonne page.

| | Ponctuel | Contrat à distance | Contrat avec présence |
|---|---|---|---|
| Vous payez | à l'heure | abonnement | abonnement |
| Engagement | aucun | contrat | contrat |
| Supervision continue | non | oui | oui |
| Technicien dans vos locaux | si intervention | si besoin | en mission chez vous |

(Contenu indicatif : lignes exactes à affiner à la rédaction. Le principe est contractuel : montrer le spectre complet sur chaque page pour que le visiteur se situe, et servir la montée en gamme ponctuel vers contrat.)

## 6. Doctrine transverse du silo

1. **Vérité des faits.** Zéro statistique, zéro pourcentage, zéro garantie absolue. Confirmés faux ou non vendus par Clément (02/07/2026), donc interdits : « M365 Gold Partner », « SOC managé », « RSSI dédié », « ISO 27001 assistée », « 92% des tickets », « 80% des incidents », « une PME sur deux », « 15 000 / 20 000 EUR », « 80% de nos clients choisissent la LLD », « garantie 5 ans » en absolu, « partenaire » + nom de constructeur. Seules affirmations chiffrées autorisées : les engagements mécaniques DCB (télémaintenance immédiate, sur site < 4h, audit gratuit, restitution des accès, qualification < 15 min, rapport sous 24h).
2. **Hiérarchie SAV partout, heros compris** : télémaintenance immédiate D'ABORD, sur site < 4h ensuite. Plus jamais « < 4h » seul.
3. **Les deux objections qui font signer** : réversibilité sur la page Contrat ; RGPD concret sur la page Protéger.
4. **Témoignages** : l'avis réel Teddy Malfroy sur le hub uniquement. Zéro témoignage sur les sous-pages tant qu'aucun vrai avis n'est collecté (une section absente vaut mieux qu'un faux avis). Sections réactivables à réception d'avis réels.
5. **Audit gratuit = porte d'entrée du silo** : mis en évidence sur le hub, CTA secondaire sur toutes les pages (« on regarde votre installation gratuitement, on vous dit où vous en êtes »).
6. **Financement** : DCB peut proposer du financement. Mentionner comme leveur d'objection (Équiper en premier lieu), sans détailler le mécanisme tant que les modalités ne sont pas précisées.
7. **Maillage** : les 3 pages besoin concluent par « qui gère tout ça ? » vers les 2 pages maintenance. Les 2 pages maintenance se renvoient l'une à l'autre via le bloc échelle et les phrases de cadrage. Le hub route tout. Cross-sell inter-piliers (caisse, web) conservé.
8. **Anti-gabarit** : H2 personnalisés par page (fini « Aller plus loin » sur 5 pages), formule SAV déclinée différemment selon le contexte de chaque page, ancrage local 4 départements équilibré (modèle silo caisse).
9. **Vocabulaire interdit** : « régie » (remplacé par le nom commercial retenu pour la formule présence). Zéro tiret cadratin. UTF-8 BOM préservé (règles CLAUDE.md).

## 7. Gouvernance et implémentation

- **Avant rédaction** : remplir la section « Hub IT » de `docs/content-reference.md` (vide à ce jour, cause racine des recyclages selon l'audit) avec les rôles de pages définis ici + les formulations SAV déclinées.
- **Ordre de chantier proposé** : Contrat + Ponctuel (le cœur, et la frontière entre les deux doit naître en même temps) → Protéger → Communiquer → Équiper → Hub en dernier (il route vers des pages finalisées).
- **Chaque page** : desktop + mobile dual-shell traités ensemble, JSON-LD Service aligné sur le nouveau rôle, title/meta refaits, date E-E-A-T.
- **QA** : baseline visuelle avant le lot (`tests/visual`), passage site-qa avant chaque commit multi-fichiers, grep tiret cadratin systématique.

## Annexe A : backlog de productisation (pour Clément)

Offres à travailler côté DCB pour leur donner un tarif public, par ordre de facilité/impact. Quand une offre a son tarif : ajouter la grille à sa section dans la page besoin, puis envisager une page produit dédiée.

| # | Offre | Unité de tarification à définir |
|---|---|---|
| 1 | Téléphonie VoIP | par utilisateur ou numéro / mois + installation |
| 2 | Antivirus managé | licence par poste / mois |
| 3 | Mail professionnel | par boîte / mois |
| 4 | Sauvegarde externalisée | par poste ou serveur / mois, rétention incluse |
| 5 | Pare-feu managé | matériel + abonnement supervision |
| 6 | Migration M365 / Workspace | forfait par boîte migrée + licences |
| 7 | Location poste de travail (LLD) | EUR / mois par poste type |
| 8 | Wifi / réseau | forfait par borne ou prise installée |
| 9 | Formation cybersécurité | par session ou par salarié |
| 10 | Mise à disposition de personnel | par jour / mission (à cadrer, sans « régie ») |

## Annexe B : points ouverts à trancher à la relecture

1. **Slugs** : renommer `maintenance-depannage/` en `depannage-informatique/` et `cloud-securite/` en `cybersecurite/`, ou garder les slugs actuels ?
2. **Nom commercial de la formule présence** : « technicien détaché », « renfort intégré », « présence dédiée », autre ?
3. **Modalités du financement** : leasing via organisme, paiement étalé, autre ? (Conditionne ce qu'on a le droit d'écrire.)
4. **Grille du contrat** : les montants 89/149 EUR actuels sont-ils la vraie grille à afficher sur la page Contrat ?
5. **Taux horaire du ponctuel** : posture actée « mécanisme sans montant » ; à réévaluer plus tard si Clément veut afficher le taux.
