# Brief SEO : pages departement caisse (71 / 01 / 42 / 69)

Document de briefing pour l'agent qui travaille sur les 4 pages. Synthese de 2 audits SEO + des donnees reelles Google Search Console de l'ancien site (3 mois, 2 mars au 4 juin 2026).

Cible : `caisse-enregistreuse/saone-et-loire/` (71), `caisse-enregistreuse/ain/` (01), `caisse-enregistreuse/loire/` (42), `caisse-enregistreuse/rhone/` (69).

Exigence du client : l'ancien site etait une Twingo d'occasion, ces pages doivent etre un Rafale. La cannibalisation "moderee" est INACCEPTABLE.

---

## 0. Ce que disent les donnees reelles (a garder en tete pour tout le brief)

- Les anciennes pages utilisaient EXACTEMENT les memes URLs que la V2. Le jus SEO se transfere : on ne part pas de zero, on doit ne rien perdre et faire mieux.
- Le site ne convertit quasi rien hors marque (52 clics sur 3 mois, dont 21 sur "dcb technologies"). Quasi 0 clic sur les requetes metier malgre les impressions. Probleme de CTR (titres/meta) ET de position.
- Etat actuel des 4 pages dans Search Console :
  - 71 saone-et-loire : position 5,2 (classe bien) mais seulement 47 impressions.
  - 42 loire : position 3,7 (classe tres bien) mais 36 impressions.
  - 01 ain : position 11,5 / 98 impressions.
  - 69 rhone : position 15,4 / 17 impressions (sous-exploitee).
  - Hub `/caisse-enregistreuse/` : position 23 mais 2097 impressions.
- Lecture strategique : la concurrence n'est PAS entre les 4 pages departement (chacune cible une requete geo distincte). Le foyer de cannibalisation, c'est le HUB qui aspire le volume en se classant mal, pendant que les pages specifiques bien classees sont privees d'impressions. La differenciation de contenu sert donc deux buts : (a) sortir chaque page de l'ombre du hub, (b) lui donner la substance locale qui matche sa demande reelle.
- La plus grosse requete en zone : "caisse enregistreuse lyon" = 109 impressions, position 29. C'est le travail de la page Rhone, aujourd'hui ratee.

---

## 1. P0 : CANNIBALISATION (tolerance zero)

### Le diagnostic
~50 a 60 % du contenu editorial est STRICTEMENT identique entre les 4 pages. Sections copiees a l'identique :
1. Trust bar (3 items sur 4 identiques).
2. "Une solution pour chaque metier" : 4 cards (Boulangerie, Restauration & Bar, Commerce de detail, Beaute & Bien-etre), listes a puces et prix identiques.
3. Bloc NF525 : piliers Inalterabilite / Securisation / Conservation + phrase des 7 500 euros, identiques (seul le H2 change de departement).
4. Cross-sell Borne / Monnayeur : textes descriptifs identiques.
5. H2 "Optimisez votre point de vente" et "Une solution pour chaque metier" identiques mot pour mot.

### La regle de differenciation (CRITIQUE, anti-slop)
La differenciation doit etre de SUBSTANCE, jamais cosmetique.
- INTERDIT : remplacer des mots par des synonymes, injecter mecaniquement le nom du departement dans chaque phrase ("la boulangerie en Saone-et-Loire" / "la boulangerie dans l'Ain"). C'est du slop, Google le detecte, et ca ne change rien au probleme.
- EXIGE : ancrer chaque section dans la realite economique locale reelle ET dans la demande de recherche reelle du departement (cf. section 4 de ce brief). L'ordre des cards metier, le metier mis en avant, l'exemple cite dans le bloc NF525, l'angle du cross-sell PEUVENT et DOIVENT varier selon le poids reel de chaque secteur dans le departement.

### Definition of Done (barre mesurable, a respecter par l'agent)
- Aucun paragraphe de plus de 2 phrases ne doit etre identique entre 2 pages, hors definition technique factuelle (cf. ci-dessous).
- Chaque section cible porte au moins 1 element concret unique au departement (ville, secteur dominant, exemple, distance, contexte) absent des 3 autres pages.
- Les cards metier : memes 4 metiers et memes liens href (vers les memes sous-pages cibles), mais l'ORDRE et le texte d'accroche refletent le secteur dominant du departement.
- Ce qui peut legitimement rester proche : la DEFINITION technique de NF525 (inalterabilite, securisation, conservation, archivage) est factuelle et doit rester coherente d'une page a l'autre. C'est l'EXEMPLE d'application qui doit etre local. Ne pas sur-differencier au point de perdre la coherence de marque ou d'inventer des faits.

---

## 2. P0/P1 : gaps techniques par page

### Sur les 4 pages
- AJOUTER `<meta name="robots" content="index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large">` dans le `<head>`. Absente partout. L'ancien site l'avait (Rank Math). Sans elle, pas d'extraits enrichis etendus.
- ENTITE LocalBusiness : le JSON-LD `provider` reference `{"@id": "https://dcb-technologies.fr/#localbusiness"}` qui doit exister quelque part avec cet @id EXACT. Verifier la home et la page contact. Si absent, ajouter un bloc LocalBusiness avec cet @id (la page contact est le lieu naturel, cf. roadmap CLAUDE.md). Sinon la reference est cassee.
- PHRASE D'ENTITE DIRECTE manquante dans le corps visible (pas seulement la FAQ) : ajouter une phrase factuelle citable type "DCB Technologies est le prestataire de caisse enregistreuse NF525 base a [ville], couvrant l'ensemble du departement [numero]." Cle pour la citation par ChatGPT / Perplexity / AI Overviews.
- CROSS-LINK entre les 4 pages departement : aucun aujourd'hui. Ajouter un bloc discret avant le CTA final ("Nous intervenons aussi dans...") avec liens vers les 3 autres departements, ancres geo-specifiques. NE PAS passer par la nav (ce sont des pages orphelines volontaires, anti-cannibalisation hub : NE PAS les ajouter a la nav).
- `og:locale` (fr_FR) et `og:updated_time` absents (l'ancien site les avait).

### Specifique 42 Loire
- "Saint-Etienne" sans accent dans le JSON-LD `areaServed`. Corriger en "Saint-Etienne" avec l'accent aigu sur le e. Les LLM matchent sur l'orthographe officielle.

### Specifique 69 Rhone
- "Ecully" sans accent dans le JSON-LD. Corriger avec l'accent.
- Title sans seconde ville. Givors (45 000 hab., presente sur l'ancien site, generait des impressions) totalement absente corps + JSON-LD : a reintegrer. Terme "Techlid" (zone d'activite de Dardilly, recherche locale pro) absent : a reintegrer.

### Specifique 01 Ain
- Title sans aucune ville citee. Perte sur "caisse enregistreuse bourg-en-bresse". Ajouter au moins une ville dans le title.

### Specifique 42 Loire (title)
- Le title tronque la marque en "DCB" au lieu de "DCB Technologies". Retablir la marque complete.

### Titres et meta (probleme de CTR transverse)
Le CTR est a 0 % sur quasi toutes les requetes : les titles/meta ne donnent pas envie de cliquer OU les positions sont trop basses. Chaque title doit : mot-cle geo en tete, au moins une ville phare, marque complete "DCB Technologies", rester sous ~60 caracteres. Chaque meta description doit tenir sous 155 caracteres (certaines depassent et seront tronquees sur mobile : 79 % du trafic non-marque est sur ordinateur mais le mobile a le meilleur CTR).

---

## 3. JSON-LD : enrichissements

- Ajouter au `areaServed` les zones citees dans la FAQ mais absentes du schema : Le Creusot (71), Pont-de-Veyle (01), Boen-sur-Lignon (42, present dans le corps), Tassin et Givors (69).
- Pas de `sameAs` : ajouter l'URL Google Business Profile quand disponible (post-lancement, a signaler).
- Exposer la date de mise a jour aussi en meta (la date E-E-A-T existe dans le `<time datetime>` du CTA final mais pas en OG).

---

## 4. Ponderation par la demande reelle (Search Console) : ce que chaque page doit capter

La differenciation de substance doit etre orientee vers ces requetes reelles, pas vers des angles decoratifs.

### 69 Rhone : PRIORITE ABSOLUE = Lyon urbain + restauration
Requetes reelles : "caisse enregistreuse lyon" (109 impr, pos 29), "caisse tactile lyon" (10), "caisse enregistreuse restaurant lyon" (5), "caisse tactile villeurbanne" (1), "logiciel de caisse lyon" (1), "caisse enregistreuse saint-genis-laval" (14). 
Angle de substance : metropole lyonnaise dense, restauration urbaine (bouchons, brasseries), forte concurrence et exigence, siege DCB a Dardilly (proximite reelle). La card "Restauration & Bar" doit remonter en tete des cards metier. L'exemple NF525 doit etre un cas de restaurant/brasserie lyonnais. C'est la page avec le plus gros potentiel de gain (pos 29 a recuperer sur 109 impressions).

### 01 Ain : Bourg-en-Bresse + Pays de Gex frontalier
Caisse : la page a deja 98 impressions. Angle : Bresse (volaille, restauration de terroir), Pays de Gex frontalier suisse (pouvoir d'achat, flux transfrontalier), Plastics Valley Oyonnax, Dombes. Citer Bourg-en-Bresse dans le title.

### 71 Saone-et-Loire : consolider (deja pos 5,2)
Angle : tissu rural et bourgs (Charolais, Brionnais, Maconnais viticole), marches, commerces de proximite, distances reelles a la base technique de Paray-le-Monial (argument de proximite fort et verifiable). Ne pas casser ce qui marche, enrichir la substance locale.

### 42 Loire : consolider (deja pos 3,7)
Angle : agglomeration stephanoise dense (restauration urbaine), Roannais gastronomique (galaxie Troisgros), zones rurales Forez / Pilat. Page deja bien classee : differencier sans deteriorer.

### Generique national : c'est le travail du HUB, PAS des pages departement
"caisse enregistreuse nf525" (47), "caisse tactile nf525" (46), "caisse enregistreuse tactile nf525" (37), "solution d'encaissement haute cadence" (59), "caisse enregistreuse traiteur" (38). Les pages departement ne doivent PAS se battre sur ces requetes sans ville : elles renvoient vers le hub. (L'arbitrage hub vs pages est un chantier connexe, hors de ce brief mais a signaler.)

### Hors perimetre : ne pas cibler
Besancon, Narbonne, Bayonne, Tarbes, Perpignan, Dijon, Nantes, Angers, Strasbourg, Marseille, etc. = bruit hors zone 71/69/01/42. Ne jamais elargir le perimetre geo.

---

## 5. Couverture semantique heritee de l'ancien site a NE PAS perdre

L'ancien site couvrait ces sujets, repris partiellement ou absents en V2. Ils generaient des impressions et repondent a des intentions reelles :
- Mode hors-ligne / autonomie si coupure internet (requete recurrente en zone rurale 71 et 42). L'ancien site avait une page dediee qui captait des impressions.
- Connexion du TPE bancaire a la caisse.
- Gestion multi-boutiques / suivi a distance via back-office (argument pour commerces multi-sites, pertinent 69).
- Materiel durci : TPV Android, dalle etanche, onduleur (E-E-A-T produit, differenciation face aux tablettes grand public).
- Temoignage nomme et localise (preuve sociale geo-ancrée).
A traiter via la FAQ geo-specifique (deja le point fort des pages) et/ou le corps, sans gonfler artificiellement (anti-slop : reecrire/remplacer, pas empiler).

---

## 6. GEO / AI Search

Points forts a preserver : FAQ 10 questions geo-specifiques par page (principal differenciateur et facteur de citabilite), faits chiffres extractibles (distances en km, taux de resolution a distance), JSON-LD Service avec areaServed detaille.
A ajouter : phrase d'entite directe (cf. section 2), LocalBusiness avec address/telephone/openingHours sur la page elle-meme pour les AI Overviews locales, section courte "A propos de DCB en [departement]" factuelle.

---

## 7. Contraintes projet ABSOLUES (non negociables)

- ZERO tiret cadratin. Remplacer par . , : | ou parentheses. Grep obligatoire sur chaque fichier modifie avant de rendre.
- Encodage UTF-8 avec BOM preserve : modifier via Edit cible uniquement, jamais Get/Set-Content PowerShell, jamais regenerer le corps de page par Write.
- Pas d'invention de faits sur DCB (offres, prix, partenaires). Reutiliser ce qui existe, ne changer que l'angle et l'ancrage local.
- Pas d'extension du perimetre geo (71/69/01/42).
- Pas de refonte structurelle ni de nouvelles classes Tailwind : on remplace du TEXTE dans des blocs existants. Si une vraie differenciation impose un changement de structure, le signaler, ne pas l'executer d'office.
- Anti-slop : retirer / reecrire, pas gonfler. Garder un volume comparable section par section (densite deja calibree).
- Les pages departement restent orphelines de la nav (volontaire).
- Rebuild Tailwind seulement si des classes changent. Passage site-qa obligatoire avant commit (grep em dash, liens, JSON-LD valide, cache-bust).

---

## 8. Ordre d'execution suggere

1. Corrections techniques rapides sur les 4 pages : meta robots, accents JSON-LD (Saint-Etienne, Ecully), titles (Loire marque, Ain ville), og:locale.
2. Verifier / poser l'entite LocalBusiness (@id) sur la page contact ou home.
3. Page 69 Rhone d'abord (plus gros gain) : differenciation de substance Lyon + restauration, reintegration Givors / Techlid, phrase d'entite.
4. Pages 01, 71, 42 : differenciation de substance selon les angles de la section 4.
5. Cross-link entre les 4 pages (bloc avant CTA).
6. Enrichissement JSON-LD areaServed + FAQ (sujets herites section 5).
7. site-qa : grep em dash, validite JSON-LD, liens, parite dual-shell mobile/desktop, cache-bust.
8. Verifier que la differenciation mobile (.m-shell) suit la differenciation desktop (les memes textes dupliques existent probablement dans les deux shells).

---

## 9. Critere de reussite

- Cannibalisation : aucun paragraphe identique (> 2 phrases) entre 2 pages hors definition technique NF525. Chaque section cible porte un element local unique.
- Zero em dash, encodage intact, JSON-LD valide, parite dual-shell.
- Chaque title/meta optimise pour le CTR et la ville cible.
- Couverture semantique de l'ancien site preservee ou amelioree.
- La page Rhone arme pour "caisse enregistreuse lyon".
