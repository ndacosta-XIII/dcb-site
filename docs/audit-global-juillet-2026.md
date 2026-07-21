# Audit global DCB Technologies : rapport de mise en ligne

Date : juillet 2026
Destinataire : Nathanael Da Costa (XIII), co-fondateur, decideur go-live
Redige par : direction de l'audit global

## Perimetre et methode

Perimetre : 22 pages du site V2 statique (accueil, silo caisse complet, silo web hub + 3 sous-pages, blog hub + 4 articles, contact, notre-adn). Le silo IT (`maintenance-informatique/`) est exclu de cet audit.

Methode : 36 auditeurs repartis sur 6 dimensions, verification adversariale de chaque constat, 19 faux positifs ecartes. Chaque constat retenu est trace a un extrait exact et un numero de ligne. Cinq bloquants ont ete recontroles a la main dans le code avant redaction (residus d'outil IA, image 404, newsletter simulee, attribution temoignages, etiquette d'attribution Rhone) : les cinq sont confirmes.

Reserve de sincerite : la dimension "Marketing et conversion" n'a pas rendu de synthese exploitable (contenu placeholder "Test"). Elle est donc absente de l'analyse detaillee et ne pese pas dans la note globale. Un vrai passage `cro-expert` reste a faire avant de considerer la conversion comme auditee. Le site n'est pas encore en ligne (staging `dcb-technologies.fr/new`, noindex), donc tout ce qui suit est corrigeable a froid, sans cout de redirection.

## Mise a jour au 21 juillet 2026 : etat des bloquants (verifie dans le code)

Trois des cinq bloquants sont purges, un est ecarte par decision, un reste en attente. Verification faite fichier par fichier.

| Bloquant | Etat au 21/07 | Preuve |
|---|---|---|
| B1 Newsletter fantome | RESOLU | desktop L677 et mobile L841 postent sur `../send.php`, plus aucun `setTimeout` de confirmation simulee |
| B2 Residus d'outil IA + "C'est faux." | RESOLU | zero `</invoke>`, `</content>`, `antml`, `function_calls` dans `blog/` ; "C'est faux." absent de nf525 |
| B3 Image d'article en 404 | ECARTE (decision XIII) | reference `infogerance-pme-bureau-supervision.webp` encore presente en code, non retenue comme bloquant go-live |
| B4 Temoignages multi-departement | RESOLU | rhone et saone alignes sur "Ce que nos clients racontent.", eyebrow "Avis Google verifies" retire (commit d8499ae) |
| B5 Parite mobile (FAQ) | RESOLU (audit live 21/07) | 17/17 pages du perimetre a parite FAQ mobile = JSON-LD sur dcb-technologies.fr/new, verifie par 4 agents dedies |

### Deja resolu au 21/07 (detail et preuve)

Trois bloquants sont purges et verifies dans le code. Rattachement aux commits pour tracabilite.

- B1 Newsletter fantome : RESOLU (commit 8a99642 "formulaires newsletter fonctionnels"). Desktop L677 et mobile L841 postent desormais sur `../send.php` avec champs caches `name` et `source`. Plus aucun `setTimeout` de confirmation simulee (grep = 0). Le "C'est faux." orphelin du callout NF525 est aussi supprime.
- B2 Residus d'outil IA : RESOLU (commit 8a99642 "nettoyage pre-lancement"). Les deux articles ne se terminent plus par `</content></invoke>`. Grep de garde sur `invoke`, `content>`, `antml`, `function_calls` dans `blog/` = 0 occurrence.
- B4 Temoignages multi-departement : RESOLU (commit d8499ae "retrait de l'attribution geographique des avis"). rhone (L339) et saone (L336) affichent le gabarit neutre "Ce que nos clients racontent.". L'eyebrow "Avis Google verifies", les titres "clients lyonnais" et "clients en 71" ont disparu. Plus d'attribution geographique contradictoire des trois avis nommes.

Effet sur les notes : B1, B2, B4 et B5 (ce dernier verifie sur la version live, voir plus bas) sont credites dans les notes revisees ci-dessous. Global 61 vers 69. B3 est ecarte par decision.

Recadrage de B5 : le constat d'origine (amputation du FOND en mobile, cible d'ecart < 15 %) n'est pas retenu. La reduction de densite mobile est volontaire et conforme au standard. Le seul defaut reel a corriger est l'ecart FAQ : les pages declarent plus de questions en JSON-LD qu'elles n'en rendent en mobile (exemple rhone : 10 declarees, 6 rendues). Le chantier se limite donc a re-importer les Q/R FAQ manquantes en mobile, rien de plus. LIVRE ET VERIFIE (voir "Audit live de B5" ci-dessous) : les notes SEO, GEO local et coherence sont desormais creditees.

### Audit live de B5 (21/07, 4 agents dedies sur dcb-technologies.fr/new)

Contre-verifie page par page sur la version deployee (curl du HTML live, comptage des <summary> rendus dans le `.m-shell` versus le nombre de Questions declarees dans le FAQPage JSON-LD). Resultat : 17 pages sur 17 a parite exacte (mobile = JSON-LD), ratio desktop:mobile:JSON-LD de 1:1:1 partout.

| Perimetre | Pages | A parite |
|---|---|---|
| Hub caisse + 4 departement (ain, rhone, saone, loire) | 5 | 5/5 |
| boulangerie, restaurant, commerce-de-detail, coiffure | 4 | 4/4 |
| borne-de-commande, monnayeur, cashmag, hairnet | 4 | 4/4 |
| Silo web (hub, creation-site, seo-sea-local, hebergement) | 4 | 4/4 |

Les deux pages citees comme les plus amputees dans l'audit d'origine (monnayeur, borne) rendent maintenant 9/9 questions en mobile. Les 4 pages departement, qui rendaient 6/10, rendent 10/10. B5, dans son perimetre recadre (FAQ), est clos.

Note complementaire toujours ouverte : `data-metier="caisse-71"` sur la page Rhone (L656) n'est pas corrige. A basculer en `caisse-69` avant toute depense pub 69.

### Verification du constat "chiffres contradictoires" (21/07, contre-audit dans le code)

Le constat d'origine (dimensions GEO AI et Discours) parlait d'une "dizaine de chiffres contradictoires" justifiant un referentiel de 2 jours. Contre-verifie ligne par ligne : les pages du silo caisse sont validees et propres. Le seul vrai conflit est une incoherence de valeur sur un meme fait. Le reste des contradictions annoncees n'existe pas dans le code.

Vraie incoherence retenue : duree de location. Le FAQ du hub caisse affiche "12, 24 ou 36 mois" (L213 JSON-LD, L933 desktop, L1416 mobile) alors que son propre schema Service dit "Location 60 mois" (L274) et que TOUTES les sous-pages validees disent "24 a 60 mois" (ain, saone, rhone, boulangerie L296, borne, restaurant). Le FAQ du hub est la relique non alignee. Correction reelle : 3 lignes du hub a passer sur "24 a 60 mois". Micro-fix, pas un chantier.

Faux positifs ecartes (introuvables ou mal lus dans l'audit d'origine) :
- "taux de resolution 90% vs 80%" : introuvable. Les seuls 80% sont "80% des incidents partent d'un clic humain" (cloud-securite, phishing) et "80% de nos clients choisissent la location" (location-vente) : deux sujets sans rapport avec un taux de resolution.
- "95% (cashmag) vs la majorite (hub)" : fausse comparaison. "95%" = taux de resolution telemaintenance (identique sur monnayeur, coiffure, borne, cashmag, donc coherent) ; "la majorite" = part de clients qui choisissent la location. Deux phrases differentes, aucun conflit.
- "8/10 vs 9/10 pour la meme stat" : aucune occurrence dans le code.

Chiffres non sources mais coherents (choix editorial deja valide, PAS une incoherence) : "no-show divises par trois" (coiffure seulement), "1,75% de frais" (commerce, meme valeur deux fois), "25 a 30% plus cher" (blog, deja attribue a "une source tierce"). Les garder ou les sourcer est une decision produit, pas une correction d'audit.

Consequence : le point 7 du plan (referentiel unique, 2 j) est ramene a un micro-fix de 0,1 j (duree location hub). Voir annotation au plan.

## Verdict global

Quatre bloquants sur cinq sont purges (newsletter, residus IA, temoignages, parite FAQ mobile verifiee live), le cinquieme est ecarte par decision (image). Il ne reste aucun bloquant go-live au sens de l'audit. Point ouvert avant depense pub 69 : le `data-metier="caisse-71"` de la page Rhone, a basculer en `caisse-69`. Les chantiers de fond restants (cannibalisation hub Web, NAP visible, graphe d'entite, chiffres non sources, cohérence visuelle) sont de la finition, pas des bloquants. La qualite de fond reste le point fort (voix de marque, fondations SEO, JSON-LD partout).

Note globale : 69 / 100 (61 avant purge des bloquants, 64 avant resolution de B5).

## Notes par dimension

Notes revisees au 21/07 apres resolution de B5 (colonnes : note initiale, apres B1/B2/B4, apres B5 verifie live, gain total).

| Dimension | Initiale | Apres B1/B2/B4 | Apres B5 (live) | Gain vs audit |
|---|---|---|---|---|
| SEO technique et on-page | 68 | 70 | 78 | +10 |
| GEO AI (citabilite LLM) | 62 | 66 | 67 | +5 |
| GEO local (NAP, zone) | 61 | 62 | 65 | +4 |
| Discours, ton, humanisation | 61 | 65 | 65 | +4 |
| Coherence transverse | 58 | 61 | 72 | +14 |
| Marketing et conversion | non rendu | non rendu | non rendu | : |
| GLOBAL | 61 | 64 | 69 | +8 |

Detail du gain apporte par B5 seul (colonne "apres B1/B2/B4" vers "apres B5") : SEO +8, Coherence +11, GEO local +3, GEO AI +1, Discours +0, global +5. B5 pesait surtout sur SEO (defaut systemique) et Coherence (driver principal du dual-shell). Les points restants de chaque dimension (cannibalisation hub Web, NAP visible, graphe d'entite, chiffres non sources) ne relevent pas de B5 et restent ouverts.

Etat par dimension :
- SEO 78 : fondations solides, image 404 ecartee, parite FAQ mobile atteinte. Reste : cannibalisation hub Web / creation-site, budget SERP, hygiene JSON-LD.
- GEO AI 67 : residu IA purge, FAQ mobile a parite. Reste : zone Auxois, stats non sourcees, graphe d'entite, llms.txt.
- GEO local 65 : sur-declaration FAQ mobile corrigee. Reste : NAP adresse invisible, erreurs geo (Lyon base, Valserhone), graphe @id.
- Discours 65 : newsletter et temoignages assainis. B5 neutre ici. Reste : chiffres de resultat non sources (choix editorial), persona fictif blog.
- Coherence 72 : B1, B4 purges et B5 (driver structurel) resolu ; contradictions chiffrees quasi toutes debunkees (seule la duree location hub restait). Reste : hero Hairnet, cross-sell violet, hero mobile Rhone, "deux agences".

## Les bloquants (interdisent la publication)

Etat au 21/07 : B1, B2, B4 RESOLUS ; B3 ECARTE (decision) ; B5 EN ATTENTE (recadre). Le detail d'origine est conserve ci-dessous pour tracabilite, avec le statut en tete de chaque point.

### B1. RESOLU. Newsletter blog : inscription confirmee et lead jete
`blog/index.html`. Mobile L1135 affiche `Inscription confirmee` puis L1138 `Merci. Premier guide envoye le 15 du mois prochain.` via un simple `setTimeout`, sans aucun appel reseau. Desktop L677 : `onsubmit=preventDefault` et bouton sans handler. L'email n'est envoye nulle part (grep newsletter dans `scripts.js` = 0). Le prospect laisse son adresse, lit une confirmation fausse, et ne recevra jamais rien : mensonge assume par le code, sur la page qui revendique "que du concret". A rapprocher du "C'est faux." orphelin du callout NF525 (`blog/norme-nf525-caisse-enregistreuse/` L402), residu d'edition a supprimer.
Correction : brancher le champ sur `send.php` et ne confirmer qu'apres reponse serveur, sinon retirer le bloc et le remplacer par le CTA contact. Jamais de succes simule. Aligner desktop et mobile.

### B2. RESOLU. Residus d'outil IA laisses en production
`blog/norme-nf525-caisse-enregistreuse/index.html` (L770-771) et `blog/maintenance-informatique-preventive/index.html` (L737-738) se terminent par `</content></invoke>` apres `</html>`. Verifie : ces deux fichiers uniquement, les deux autres articles se terminent proprement. Empreinte litterale de tool-call d'assistant IA, ingeree par tout crawler lisant le HTML brut (GPTBot, ClaudeBot, PerplexityBot sont autorises dans robots.txt), precisement sur les deux articles dont l'argument de citabilite repose sur l'experience terrain signee par un fondateur. Invisible au grep em dash : a survecu a la publication.
Correction : Edit cible pour supprimer les deux lignes de chaque fichier (jamais Set-Content, UTF-8 avec BOM). Ajouter au `site-qa` un grep de garde sur `</invoke>`, `</content>`, `antml`, `<function_calls>`.

### B3. ECARTE (decision XIII). Image d'article en 404 dur + image trompeuse sur le guide GMB
`assets/infogerance-pme-bureau-supervision.webp` est ABSENT du disque (verifie : seul `infogerance-supervision-parc-it.webp` existe) mais reference 8 fois dans `blog/maintenance-informatique-preventive/` : hero LCP L361 (`loading=eager fetchpriority=high`), og:image L18, twitter:image L22, JSON-LD BlogPosting L248, plus 3 cards dans `blog/index.html`. Consequence : le LCP est un 404, la card du hub est cassee, tout partage social s'affiche sans visuel, le JSON-LD est invalide. Sur `blog/referencement-google-my-business/`, les 7 emplacements servent une image de boutique e-commerce (deja utilisee sur `commerce-de-detail`) avec un alt qui parle de fiche Google : l'image ne montre aucune fiche.
Correction : basculer les 8 references du premier article sur `assets/infogerance-supervision-parc-it.webp` (present, coherent). GMB : basculer sur `assets/referencement-local-google-mobile.webp` et corriger l'alt. Verifier width/height contre le fichier retenu (sinon CLS).

### B4. RESOLU. Trois avis nommes attribues a deux departements a la fois, sous "Avis Google verifies"
`caisse-enregistreuse/rhone/` et `caisse-enregistreuse/saone-et-loire/`. Les trois memes cartes (Camille Simon boulangerie, Antoine Lacroix boucherie, Adrien Desforges bar), identiques mot pour mot, sont coiffees de "Ce que disent nos clients lyonnais" sur la page 69 (L338-339) et de "Avis Google verifies" + "Ce que disent nos clients en 71" sur la page 71 (L335-336). Un meme avis nomme ne peut emaner des deux departements : au moins une attribution est fausse, et l'eyebrow "verifies" transforme l'approximation en affirmation de verification. Les deux pages sont a deux clics l'une de l'autre. Ain et loire sont deja neutres ("Ce que nos clients racontent"), donc le gabarit correct existe.
Correction : aligner rhone et saone sur le gabarit neutre d'ain/loire (titres et versions mobiles), retirer l'eyebrow "Avis Google verifies". Ne reintroduire une attribution geographique que sur avis GBP a commune prouvee, avec la ville en signature. Aucun schema Review ni aggregateRating (doctrine).

### B5. EN ATTENTE (recadre). Parite desktop/mobile : seul l'ecart FAQ mobile est retenu
Recadrage 21/07 : le constat d'amputation du FOND n'est pas retenu (reduction de densite mobile volontaire et conforme au standard). Seul l'ecart FAQ (moins de Q/R rendues en mobile que declarees en JSON-LD) est a corriger, par re-import des Q/R manquantes, rien de plus. Chantier en cours. Constat d'origine conserve ci-dessous.
Systemique. Le `.d-shell` est `display:none` en mobile, or l'indexation est mobile-first : Googlebot smartphone ne voit que le `.m-shell`, sous-construit. Exemples verifies : monnayeur ne rend que 37% de sa substance en mobile (le sujet "amortissement" n'existe nulle part en mobile, unique occurrence L478 dans le desktop) ; borne 41% ; la section Hairnet entiere du hub caisse (CTA L725 vers `/hairnet/`) est absente du mobile, seul lien sortant vers cette page ; les FAQ declarent 9 a 11 questions en JSON-LD mais n'en rendent que 4 a 6 en mobile, sur une quinzaine de pages dont celles qui portent le prix et le financement (loire L587, rhone L608) et le silo Web prioritaire. Ce n'est pas une reduction de densite, c'est une amputation de sujet, sur un trafic local majoritairement mobile.
Correction : chantier `mobile-builder` par lots. Porter dans chaque `.m-shell` les sections et Q/R desktop-only, en version condensee mais complete sur le fond, en recopiant depuis le HTML visible desktop (jamais depuis le JSON-LD). Priorite : monnayeur et borne, puis section Hairnet du hub, puis FAQ du cluster caisse et du silo Web. Cible : ecart de contenu inferieur a 15%, FAQ mobile couvrant le JSON-LD.

Note complementaire, non bloquant mais a corriger avant toute depense pub 69 : la page Rhone porte `data-metier="caisse-71"` (L656, verifie), donc tout lead mobile capte sur le money keyword "caisse enregistreuse lyon" part etiquete 71 dans le dataLayer et le champ cache. A basculer en `caisse-69`.

## Analyse par dimension

### SEO technique et on-page : 78/100 (initiale 68, +10)
Verdict : fondations techniques solides (JSON-LD partout, canonicals et sitemap coherents, breadcrumbs, dates E-E-A-T, doctrine geo et absence d'aggregateRating respectees) minees par un defaut systemique unique, la parite mobile (B5). S'y ajoutent l'image 404 (B3) et une cannibalisation hub / creation-site-internet sur le pilier Web.

Constats majeurs :
- Cannibalisation hub Web / creation-site-internet : les deux URL revendiquent "creation de site internet" en title, H1 et alternateName, avec les memes villes (hub L9/L253/L167 vs sous-page L9/L224/L120). Le hub est le plus lie en interne alors que c'est la sous-page qui porte la grille et les CTA devis. Repositionner le hub sur l'intention parapluie, laisser le mot-cle transactionnel a la sous-page. A trancher par `copywriter-site` + `seo-expert`.
- NAP incoherent : horaires 9h-19h (contact L466-471, visible L554/L665) vs 8h30-18h30 (accueil L306-307, bottom-sheet scripts.js L657) pour la meme entite, y compris au sein de la page Contact. Plus entite DCB eclatee sous trois `@id` non relies (contact `#localbusiness`, notre-adn `#organization`, accueil `#localbusiness`). Voir GEO local.
- Title borne : "Borne de commande restaurant NF525" (L9) alors que la page explique elle-meme 3 fois que la borne n'a pas a etre certifiee (FAQ L70, desktop L659, mobile L951). og:title et twitter:title disent deja "Borne de commande tactile restaurant". Aligner L9 sur "Borne de commande self-service restaurant".

Constats mineurs (polish, apres go-live) : titles et meta descriptions hors budget SERP (hub caisse 76, saone 89, monnayeur 206 car.) ; maillage vers URL `/index.html` non canoniques (301 defensive .htaccess sur requete externe, ne pas reecrire les href) ; structure de titres cassee (accueil H1 vers H3 sans H2 ; callouts blog en h4) ; hygiene JSON-LD (HowTo fantome borne/monnayeur, offers sans price cashmag/hairnet, offers vs hasOfferCatalog creation-site) ; og:image homepage generique partout, logo NF525 sans width/height sur 7 pages.

### GEO AI (citabilite LLM) : 67/100 (initiale 62, +5)
Verdict : la couche structuree existe partout mais elle est truffee de contradictions machine-lisibles sur des faits opposables, et de chiffres auto-declares que les moteurs generatifs refusent de citer. Le residu d'outil IA (B2) est le seul defaut vraiment bloquant.

Constats majeurs :
- Faits chiffres contradictoires jusque dans le JSON-LD : duree de location caisse 12/24/36 mois (hub L213) vs 60 mois (L217, Service L274, llms.txt L7), les deux dans le meme FAQPage ; taux de resolution 90% (rhone) vs 80% (ain/loire) ; delai "4h garanti" (hairnet, seule page a ecrire "garanti") vs conditionnel partout ; "95% des soucis" (cashmag) vs "la majorite" (hub). Trancher une valeur reelle par fait, la propager en HTML des deux shells ET dans le JSON-LD.
- Zone non fiable : l'Auxois (Cote-d'Or, 21, hors zone 71/69/01/42) presente comme couvert sur la page 71, 7 occurrences dont le FAQPage (L116, L153, L532...). Remplacer par "Autunois" (Autun, Le Creusot, Montceau, reellement en 71).
- Statistiques et superlatifs non sources : "la meilleure caisse tactile Android du marche" (accueil L594, sous le H2 "garanties verifiables sans marketing"), "no-show divises par trois en moyenne" (coiffure, sans population ni source), "Divises par 3 Donnee Hairnet" (hub L689, chiffre absent de la page hairnet cible). La page borne prouve que le silo SAIT sourcer (L441 "Moyenne clients DCB restauration 2024-2025") : appliquer partout cette discipline ou supprimer le chiffre.
- Graphe d'entite non resolvable : `@id #localbusiness` reference sur 8 pages filles mais defini seulement sur l'accueil, donc provider/seller resolvent vers le vide. Voir GEO local.
- llms.txt sous-exploite : blog absent, 4 pages departement absentes, Hairnet absent, ligne SEO-SEA vide. Le seul artefact destine aux LLM ne pointe que vers du promotionnel. Cout de correction quasi nul.

### GEO local (NAP, zone, entite) : 65/100 (initiale 61, +4)
Verdict : la doctrine geo de contenu est saine (spread equilibre 4 departements, neutralite des pages metier, aucune orientation Lyon/Paray abusive, zero avis auto-declare), mais la couche donnee structuree et le NAP visible sont bâcles.

Constats majeurs :
- Le A du NAP (adresse postale) n'est affiche NULLE PART en visible, meme sur la page Contact et le footer sitewide. Contact ne montre que tel/email/horaires ; le footer partage (scripts.js L219-224) porte logo/tel/email, aucune adresse. Ajouter un bloc adresse visible sur Contact (siege Dardilly 69570 + base technique Paray 71600, les deux reels) et dans le footer (trigger word 13footer requis). Ne jamais supprimer une des deux bases.
- Erreurs factuelles de geographie : "nos deux bases, Paray-le-Monial et Lyon" (restaurant L69 FAQPage + L518 : Lyon n'est pas une base, le siege est Dardilly) ; "un atelier du Rhone" (rhone L535, contredit L202 "siege a Dardilly") ; "Bellegarde-Valserhone" (ain, forme non officielle, la commune est Valserhone depuis 2019).
- FAQPage sur-declare vs rendu mobile : 4 pages departement declarent 10 questions en JSON-LD mais n'en rendent que 6 en mobile, les perdues etant les plus locales. Meme cause que B5.
- Systemique : `@id #localbusiness` reference a nu sur ~20 pages, defini seulement sur l'accueil. Decision unique a prendre : inliner le noeud LocalBusiness complet sur chaque page qui reference l'`@id` (priorite 4 pages departement), ou assumer le stub partout. A traiter avant alignement de la fiche GBP.

Constats mineurs : graphe d'entite non consolide (3 `@id`, doubles PostalAddress, addressRegion "Auvergne-Rhone-Alpes" vs "Rhone") ; la section Proximite de l'accueil nomme 4 departements et 6 villes sans un seul lien vers les pages departement (transformer les mentions L826 en liens) ; areaServed incoherent d'une page a l'autre ; alternateName detourne en liste de mots-cles geo sur 2 pages Web (a supprimer) ; image du noeud LocalBusiness en SVG (ignoree par Google, pointer vers og-homepage.jpg) et sameAs GBP sur lien share.google non canonique.

### Discours, ton et humanisation : 65/100 (initiale 61)
Verdict : la voix de marque est le point fort reel du site (ton concret, incarne, differencie, tres superieur au marketing generique du secteur), mais elle est minee par un pattern qui la contredit frontalement : une dizaine de chiffres de resultat inventes ou non sources, et des promesses ou le site se dement lui-meme. Le paradoxe est que ces defauts frappent exactement le differenciateur revendique (transparence).

Constats majeurs :
- Chiffres de resultat inventes ou non sources, repetes sur tout le silo caisse et le blog (pattern dominant) : "95% des cas resolus en moins de 20 minutes" (monnayeur, coiffure, borne, JSON-LD inclus), "no-show divises par trois", 8/10 vs 9/10 pour la meme stat selon la page, "1,75%" non date, "25 a 30% source tierce" jamais nommee. Deux valeurs differentes pour la meme stat prouvent qu'aucune n'est mesuree. Regle unique a propager : tout chiffre est date et source sur le modele borne L441, ou supprime au profit de la formule qualitative deja validee ailleurs.
- Attribution temoignages contradictoire sous "Avis Google verifies" : c'est B4.
- Newsletter qui simule un succes : c'est B1.
- Promesses que le site se dement a lui-meme : "en moins de 2h" vs "2h ouvrees" sur le meme ecran contact (L523/L607), "7j/7" inconditionnel (accueil) vs "astreinte 7j/7 sur contrat" (notre-adn L304), "une coupure ne bloque jamais votre activite" (hub L977) vs "reconnexion au moins toutes les 72h" (cashmag L226). Retenir partout la formulation la plus prudente deja ecrite ailleurs.
- Persona fictif "Nos conseillers / Nos experts" dans 10 CTA blog, alors que le corps parle a la premiere personne ("on prend la main a distance") et que les articles sont signes d'un co-fondateur. Remplacer par la voix reelle du corps ("On vous rappelle sous 24h").
- Publicite comparative nominative inventee : "SumUp, un chatbot et 48 heures" (hub L382, canal et chiffre inventes) ; "ces fonctionnalites, SumUp, Zettle et Lightspeed ne les proposent pas" (commerce L254) dementi par son propre tableau L264-265. Le mobile est deja plus prudent : aligner le desktop dessus.

### Coherence transverse : 72/100 (initiale 58, +14)
Verdict : le maillon faible, pour une raison structurelle unique, le dual-shell mobile construit comme un jumeau reduit qui coupe du FOND (B5). Second pattern : la derive de chiffres et de promesses d'une page a l'autre, souvent recopiee dans des JSON-LD FAQ indexables, exactement l'axe transparence revendique.

Constats majeurs (au-dela de B1/B4/B5 deja listes) :
- Bases operationnelles fausses ou effacees : "Paray-le-Monial et Lyon" (restaurant), "Deux agences" (accueil mobile L1206, terme jamais employe en desktop qui dit "deux bases operationnelles"), Dardilly efface du mobile Contact L714. Formulation unique exacte partout : "deux bases operationnelles, Paray-le-Monial et Dardilly".
- Page Hairnet (coiffure) : le hero affiche le visuel CashMag de la boulangerie (L55/L141/L575, alt "CashMag") sur une page dont la marque JSON-LD est Hairnet. Assets Hairnet salon disponibles et inutilises. Remplacer.
- Cross-sell vers Creation de site : violet `#7C3AED` hors charte (cable dans css/style.css L989) au lieu de l'accent de destination `#A855F7` (129 occurrences sur la page cible). Corriger les cards et le CSS, puis rebuild Tailwind. La couleur promise au clic n'est pas celle qui accueille le visiteur, sur le chemin d'acquisition Web prioritaire.
- Hero mobile Rhone : CTA inverse, le numero (canal de vente le plus rentable) enterre en icone muette L701-702, alors que les 3 soeurs mettent le numero en clair sur le bouton primaire. Inverser.

Constats mineurs : grammaire visuelle avec source de verite contradictoire (`#1D9E75` canonise par front-library mais qualifie d'invente par docs/audit-styles ; accent cashmag inverse qui eclaircit le hover du CTA) ; code mort (design-system.css charge nulle part d'utile sur notre-adn, observer fabDevis inerte) ; fils d'Ariane visibles incomplets vs BreadcrumbList ; eyebrows FAQ departement desalignes.

## Plan d'action priorise

Ordre par ratio impact/effort. Effort en jours-homme indicatif.

### Vague 1 : bloquants go-live (obligatoire avant publication)
1. Newsletter blog : brancher sur send.php avec confirmation apres reponse serveur, ou retirer le bloc. Supprimer le "C'est faux." orphelin nf525 L402. Agent : `front-builder` (+ `cro-expert` sur la decision brancher/retirer). Effort : 0,5 j.
2. Supprimer les residus `</content></invoke>` sur les 2 articles blog et ajouter le grep de garde au `site-qa`. Agent : `site-qa`. Effort : 0,25 j.
3. Corriger les images blog : 8 references sur maintenance-preventive, 7 sur GMB, alt inclus, width/height verifies. Agent : `front-builder`. Effort : 0,5 j.
4. Neutraliser l'attribution des temoignages rhone + saone sur le gabarit ain/loire, retirer "Avis Google verifies". Validation XIII avant application. Agent : `copywriter-site`. Effort : 0,5 j.
5. Corriger `data-metier="caisse-71"` en `caisse-69` sur Rhone avant toute depense pub 69. Agent : `front-builder`. Effort : 0,1 j.

### Vague 2 : chantier structurant (avant go-live, par lots)
6. Parite desktop/mobile : porter le fond desktop-only dans les `.m-shell`, priorite monnayeur, borne, section Hairnet du hub, FAQ cluster caisse et silo Web. Passer la baseline visuelle avant/apres. Agent : `mobile-builder`. Effort : 4 a 6 j.
7. Referentiel unique de chiffres et promesses : trancher chaque valeur reelle avec Clement (duree location, garantie, taux, delais, horaires), verrouiller dans docs/content-reference.md, appliquer au visible ET aux JSON-LD des deux shells. Agent : `copywriter-site` + `silo-harmonizer`. Effort : 2 j.
   REVISION 21/07 (voir "Verification du constat chiffres contradictoires") : contre-audit dans le code, les pages silo sont propres. Une seule vraie incoherence : la duree de location du FAQ hub caisse (12/24/36) contre le 24-60 de tout le reste. Effort reel ramene a 0,1 j (aligner les 3 lignes du hub sur "24 a 60 mois"). Les autres contradictions annoncees sont des faux positifs. Sourcer/dater les chiffres non sources (no-show, 95%) reste une decision produit optionnelle, hors correction d'audit.
8. Purger les chiffres de resultat non sources : sourcer sur le modele borne L441 ou remplacer par la formule qualitative. Agent : `copywriter-site`. Effort : 1,5 j.
9. Corriger les faits geo (Auxois, "Lyon comme base", Valserhone) et ajouter l'adresse postale visible (Contact + footer, trigger 13footer). Agent : `copywriter-site` + `front-builder`. Effort : 1 j.
10. Persona fictif : remplacer les 10 "Nos conseillers/experts" par la voix reelle. Agent : `copywriter-site`. Effort : 0,25 j.
11. Visuel hero Hairnet + cross-sell violet `#A855F7` + hero mobile Rhone inverse. Agent : `front-builder` + `design-reviewer`. Effort : 0,75 j.

### Vague 3 : positionnement et hygiene (peut chevaucher le go-live)
12. Trancher la cannibalisation hub / creation-site-internet (title, H1, alternateName). Agent : `copywriter-site` + `seo-expert`. Effort : 0,5 j.
13. Consolider le graphe d'entite : un seul `@id #localbusiness`, inliner ou stub, harmoniser addressRegion, resoudre les 3 noeuds. Agent : `seo-expert`. Effort : 1,5 j.
14. Hygiene JSON-LD (HowTo fantome, offers sans price, offers vs hasOfferCatalog, alternateName geo a retirer) + llms.txt enrichi (blog, departement, Hairnet, prix). Agent : `seo-expert`. Effort : 1 j.
15. Title borne, budget SERP titles/meta, structure Hn, liens accueil vers pages departement. Agent : `seo-expert` + `copywriter-site`. Effort : 1 j.

### Vague 4 : dette et post-lancement
16. Refaire un vrai audit conversion (`cro-expert`) : la synthese initiale etait un placeholder, la conversion n'est pas auditee.
17. og:image dediees par hub, logo NF525 avec dimensions, code mort notre-adn, grammaire visuelle (`#1D9E75`, accent cashmag), 301 defensive .htaccess. Agents : `front-builder`, `design-reviewer`, `silo-harmonizer`.

## Ce qui est deja bon

Le site a de vraies forces, a ne pas casser en corrigeant le reste.

- Voix de marque : ton concret, incarne, premiere personne, tres au-dessus du marketing generique du secteur. C'est le differenciateur le mieux tenu du site.
- Doctrine geo de contenu saine : spread equilibre sur les 4 departements, neutralite assumee des pages metier, aucune orientation Lyon/Paray abusive, pages departement qui portent le local.
- Discipline anti-slop respectee sur les fondamentaux : zero aggregateRating/Review schema (conforme a la penalite Google 2019), alignement NF525 de fevrier 2026 tenu dans le contenu, systeme d'animation maison.
- Fondations SEO techniques presentes partout : JSON-LD sur chaque page, canonicals et sitemap coherents, breadcrumbs, dates E-E-A-T, robots.txt et .htaccess en place.
- Les gabarits corrects existent deja quand il faut corriger un defaut : ain/loire pour les temoignages neutres, borne L441 pour le sourcage des chiffres, le mobile souvent plus prudent que le desktop sur les claims. Les corrections consistent surtout a generaliser un bon pattern deja present, pas a inventer.
- Aucun defaut structurel : tout est corrigeable a froid, le site n'etant pas encore indexe a la racine. La fenetre pour corriger avant indexation est ouverte : c'est le bon moment.
