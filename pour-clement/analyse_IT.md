# Audit éditorial silo Informatique (date du jour : 24/06/2026)

Périmètre : les 6 pages du silo `maintenance-informatique/` (hub + 5 sous-pages). Audit "juge extrême" : zéro complaisance, chaque reproche étayé par un extrait réel. Source de vérité métier : PRODUCT.md, CLAUDE.md, docs/content-reference.md. Aucun fait métier inventé ; toute reco qui suppose un fait non confirmé est marquée "(hypothèse à valider avec le client)".

Méthode : lecture du contenu narratif desktop (hero, ledes, eyebrows, H2/H3, body, comparatifs, témoignages, FAQ, CTA) des 6 pages. Comptage octet du tiret cadratin (U+2014 = E2 80 94) sur chaque fichier.

---

## Mise à jour 24/06/2026 : corrections appliquées sur le Hub IT

Depuis l'audit initial ci-dessous, seul le hub (`maintenance-informatique/index.html`) a été corrigé. Les 5 sous-pages ne sont PAS encore traitées : les constats les concernant restent valables. Corrections du hub :

- **"J+1" supprimé partout.** Lede hero reformulé en vraie phrase : "On vous dépanne à distance, sans attendre. Techniciens salariés, zéro sous-traitance." Hiérarchie SAV respectée (prise à distance immédiate d'abord, sur site en moins de 4h si besoin).
- **Stats fabriquées retirées du hub.** "92% des tickets dès J+1" remplacé par une formulation qualitative ("La plupart des incidents réglés à distance, sans déplacement") ; "15 000 €" (ransomware) passé en "des dizaines de milliers d'euros". Plus aucune stat chiffrée non sourcée sur le hub.
- **Témoignages assainis.** Les avis recyclés (Garnier, Lefebvre, Renaud, Leclerc) ont été retirés. Un seul vrai avis client reste (Teddy Malfroy, Agence de communication Dicrea, Lyon 69), en carte unique centrée (carousel retiré, rétablissable quand d'autres avis arrivent).
- **Badge "100% sécurisé"** (card Cloud desktop) remplacé par "Sauvegarde 3-2-1", aligné sur le mobile.
- **Positionnement "technicien attitré" reformulé en "technicien référent".** On ne promet plus un technicien exclusif (faux le jour où il est indisponible) : un référent prioritaire suit le client, épaulé par une équipe qui connaît son dossier ("votre installation est documentée, vous ne réexpliquez jamais tout"). Appliqué sur les deux shells.

Le **Hub IT passe de 7/10 à 9/10** (voir sa section détaillée plus bas). Le **verdict global du silo (6,5/10) ci-dessous reste l'état initial** et ne bouge pas tant que les 5 sous-pages ne sont pas traitées.

---

## Verdict global : 6,5 / 10

Le silo est solide sur la forme et sur le message de marque (technicien attitré, salarié, zéro sous-traitance, hiérarchie SAV). Il est cohérent visuellement et structurellement. Mais il pèche par trois défauts qui, pris ensemble, plombent la note : un recyclage de témoignages et de structures qui frôle le copier-coller, des chiffres avancés sans source qui exposent juridiquement et minent la confiance, et des trous métier réels sur les sujets qui font signer une PME sans DSI (sauvegarde/PRA détaillée, RGPD concret, réversibilité, audit, téléphonie).

### 3 forces majeures

1. **Un positionnement différenciant tenu de bout en bout.** Le triptyque "technicien salarié attitré + zéro sous-traitance + intervention garantie" est martelé sur les 6 pages sans dériver. Le comparatif "Chez les autres / DCB" (hub) et "CDI IT / Prestataire / Infogérance DCB" (infogérance) sont du vrai copywriting de contraste, pas du remplissage : "Hotline délocalisée, serveur vocal" vs "Technicien attitré local, numéro direct".
2. **Des hooks "pain" concrets et locaux.** Les sections constat évitent le creux : "Un poste qui rame, une impression qui plante, une mise à jour qui bloque" (hub), "On a failli perdre notre serveur un vendredi à 18h" (témoignage). Le ton artisan-expert demandé par PRODUCT.md est globalement respecté.
3. **Transparence prix sur 3 pages.** maintenance-depannage (89/149€/sur mesure), cloud-securite (49/79€/sur mesure), outils-collaboratifs (6/12,50€) affichent des grilles claires avec "sans engagement". C'est rare en infogérance B2B et c'est un argument de conversion fort pour une cible "sensible au prix" (PRODUCT.md).

### 3 faiblesses majeures

1. **Recyclage de témoignages entre pages : faute éditoriale grave.** "Philippe Garnier, Cabinet comptable, Mâcon (71)" apparaît tel quel sur le hub, maintenance-depannage, cloud-securite ET location-vente-installation, avec des citations différentes à chaque fois. "Marc Lefebvre" sort le même "vendredi à 18h, serveur, vingt minutes" sur le hub et sur maintenance-depannage. C'est une violation directe de content-reference.md règle 4 ("chaque page a ses propres témoignages, pas de répétition entre pages") et un risque de crédibilité : un visiteur qui parcourt deux pages voit la supercherie.
2. **Chiffres non sourcés présentés comme des faits.** "92% des tickets résolus dès J+1", "Une attaque par ransomware coûte en moyenne 15 000 €", "Rançon moyenne exigée : 20 000€", "une PME sur deux a subi une cyberattaque", "80% des incidents partent d'un clic humain". Aucun de ces chiffres n'est dans PRODUCT.md ni content-reference.md. Le skill copywriting interdit les statistiques fabriquées ("Fabricated statistics erode trust and create legal liability"). Soit on source, soit on retire.
3. **Trous métier sur les sujets qui rassurent vraiment une TPE/PME sans DSI.** Le mot RGPD apparaît en badge ("Conforme RGPD") mais n'est jamais expliqué. La sauvegarde "3-2-1" est citée comme un slogan sans dire ce que le client récupère ni en combien de temps de manière complète. La réversibilité des données (que se passe-t-il si je quitte DCB ?), le PRA pour une vraie PME, la téléphonie/VoIP, le wifi/réseau pour les non-techniques : sous-traités ou absents.

---

## Analyse page par page

### 1. Hub IT (`maintenance-informatique/index.html`) : 9 / 10 (corrigé le 24/06/2026, était 7/10)

Bon chapeau, désormais nettoyé. Le hub joue son rôle d'aiguillage : 5 cartes vers les sous-pages, une carte vedette infogérance bien hiérarchisée, un comparatif marque fort, une section "Nos techniciens à vos côtés" qui incarne le discours.

**Ce qui va**
- Hook hero clair : "Un seul interlocuteur pour tout votre informatique." Lede reformulé en vraie phrase : "On vous dépanne à distance, sans attendre. Techniciens salariés, zéro sous-traitance."
- Hiérarchie SAV désormais respectée dans le hero : prise à distance immédiate d'abord, sur site en moins de 4h si besoin.
- Positionnement "technicien référent" (et non plus "attitré" exclusif) : un référent prioritaire suit le client, épaulé par une équipe qui connaît son dossier ("votre installation est documentée, vous ne réexpliquez jamais tout"). Plus honnête et plus différenciant.
- Le comparatif "Chez les autres / DCB" reste le meilleur bloc du silo (relabellisé "Technicien référent local, numéro direct").
- Cross-sell inter-pilier propre (caisse + web), cohérent avec le positionnement "trois piliers, une équipe".
- Plus aucune stat fabriquée. Mécanique propre : 0 tiret cadratin, 0 mojibake, BOM préservé.

**Ce qui ne va pas (résiduel, mineur)**
- Preuve sociale à un seul avis (Teddy Malfroy) : assumé pour l'instant (les placeholders recyclés ont été retirés), à muscler dès réception de 3-4 vrais avis. L'avis actuel est court et générique ("Hyper pro & réactif"), peu spécifique.
- Le comparatif mobile (4 lignes) reste plus pauvre que le desktop (6 lignes) : il devrait être aussi riche, pas appauvri (règle mobile = même info plus dense).
- H2 templatisés ("Ce que disent nos clients.", "Questions fréquentes", "Aller plus loin") non personnalisés par métier (point transverse mineur).
- RGPD encore en badge non explicité (commun à tout le silo, à traiter au niveau silo, cf. Complétude métier).

**Résolu depuis l'audit initial (24/06/2026)** : hero qui réduisait le SAV à "<4h" ; "Réactivité J+1" et "92% des tickets dès J+1" ; "15 000 €" non sourcé ; témoignages recyclés (Garnier, Lefebvre) ; badge "100% sécurisé" ; promesse de "technicien attitré" exclusif.

### 2. Infogérance PME (`infogerance-pme/index.html`) : 7,5 / 10

La meilleure page du silo sur le fond. Angle clair (le 3e chemin entre le CDI et le prestataire au ticket), preuves chiffrées d'arbitrage, process en 3 étapes daté.

**Ce qui va**
- Hook hero excellent et humain : "Votre informatique maîtrisée, par un technicien qui vous connaît." Le lede enchaîne bien : "Vous gérez votre métier, nous gérons votre infrastructure."
- Le triangle de douleur est juste pour la cible : "Personne ne surveille" / "Chaque incident, un inconnu" / "Un CDI IT, inaccessible" avec le chiffre d'arbitrage "Plus de 40 000 euros par an charges comprises pour un poste IT junior".
- Comparatif "CDI IT ou prestataire classique / Infogérance DCB" très convaincant, traite l'objection coût frontalement.
- Process daté et rassurant : "Audit offert / Jour J", "Jour J+5", "Jour J+10", "comptez 10 jours ouvrés".
- FAQ pédagogique qui définit l'infogérance (bon pour une cible non-DSI et pour le SEO/GEO).

**Ce qui ne va pas**
- **Chiffre non sourcé répété** : "Résolution immédiate pour 92% des incidents". Même problème que le hub.
- **Frontière floue avec maintenance-depannage** : cette page vend déjà "Télémaintenance prioritaire", "Interventions sur site incluses", "Surveillance 24/7", monitoring. La page maintenance vend exactement les mêmes briques. Le lecteur ne sait pas laquelle choisir (voir chevauchements).
- **Témoignage "Pierre Beaumont, PME industrielle, Mâcon (71)"** : encore une PME industrielle, encore Mâcon. Le casting de témoignages tourne en boucle sur 3-4 archétypes (comptable, PME industrielle, RH) dans les mêmes villes sur tout le silo.
- Pas un mot sur la réversibilité alors que la FAQ parle de "documentation complète de votre parc, mots de passe tracés" : c'est le moment idéal pour rassurer sur "et si je pars, je récupère tout".

### 3. Maintenance & Dépannage (`maintenance-depannage/index.html`) : 6,5 / 10

Page riche et bien construite (constat, solution, comparatif, prix, process en 4 étapes). Mais c'est aussi la plus redondante avec infogérance, et le casting de témoignages est partagé avec le hub.

**Ce qui va**
- Le process "Que se passe-t-il quand vous nous appelez ?" est la meilleure incarnation de la hiérarchie SAV de tout le silo : "Qualification immédiate < 15 min" puis "Télémaintenance tentée < 30 min" puis "Intervention sur site < 4h" puis "Rapport post-incident sous 24h". C'est exactement l'ordre exigé par content-reference.md. À ériger en modèle pour les autres pages.
- "Remplacement J+1" avec "stock tampon dédié" et "matériel de rechange dans chaque camion" : preuve concrète, locale, crédible.
- Comparatif "Prestataire à la panne / Contrat DCB" net.
- Grille de prix la plus lisible du silo (Starter 89€ / Business 149€ / Sur mesure).

**Ce qui ne va pas**
- **Hero qui réduit le SAV à "moins de 4h"** : "interviennent en moins de 4 heures" dans le lede, sans la télémaintenance immédiate d'abord. Le process plus bas le corrige, mais le hero, lui, viole la règle.
- **Témoignages partagés** : Philippe Garnier (Mâcon) et Marc Lefebvre (Bourg-en-Bresse) sont déjà sur le hub. Pire, Marc Lefebvre raconte le même incident "vendredi à 18h, serveur, vingt minutes" sur les deux pages, avec une fin de phrase différente. Faute.
- **Cannibalisation avec infogérance** : les deux pages se vendent mutuellement en cross-sell ("Passez de la panne subie au suivi maîtrisé"), preuve que la frontière n'est pas claire. Infogérance = maintenance préventive + technicien attitré ; maintenance-depannage = maintenance préventive + technicien attitré + monitoring. Le client lit deux fois la même chose.
- "Que couvre la maintenance préventive ?" en FAQ ici, et "Quelle est la différence entre l'infogérance et la maintenance à la panne ?" en FAQ infogérance : on rustine un problème d'architecture par des FAQ, au lieu de clarifier le périmètre.

### 4. Cloud & Sécurité (`cloud-securite/index.html`) : 6 / 10

Page la plus "technique" et la plus dense (sauvegarde, antivirus, firewall, messagerie, PRA). Bon potentiel SEO/GEO. Mais c'est la page qui empile le plus de chiffres non sourcés et qui survend des notions (RGPD, ISO 27001) sans les démontrer.

**Ce qui va**
- Le triangle de menaces est concret et anxiogène au bon sens : "Un clic sur une pièce jointe malveillante et c'est tout votre réseau qui est chiffré", "Votre messagerie est la porte d'entrée n°1 des cyberattaques".
- La sauvegarde "3-2-1 avec copies immuables, rétention 90 jours, restauration garantie en moins de 4 heures" est l'argument le plus solide et le plus différenciant du silo. À mettre encore plus en avant.
- "Hébergement France / datacenters certifiés ISO 27001 / Aucune donnée ne transite hors de l'UE" : excellent pour une cible sensible à la souveraineté.
- Section "Un expert sécurité, pas un bouton anti-virus" : bon angle anti-commodité.

**Ce qui ne va pas**
- **Empilement de chiffres non sourcés** : "En 2024, une PME sur deux a subi une cyberattaque", "Rançon moyenne exigée : 20 000€", "80% des incidents partent d'un clic humain", "moins de 2% de CPU". Aucun dans les référentiels. C'est la page la plus exposée juridiquement.
- **"Conforme RGPD" en badge, jamais expliqué.** Pour une PME, le RGPD est une peur concrète (amende CNIL, registre, sous-traitant). Le badge ne rassure pas, il survole. Trou métier majeur sur la page qui devrait justement le traiter.
- **"Conformité RGPD et ISO 27001 assistée", "SOC managé", "Interlocuteur RSSI dédié"** (offre sur mesure) : vocabulaire de grand compte plaqué sur une cible TPE/PME sans DSI. PRODUCT.md décrit des "gérants de commerces indépendants, décideurs directs, pas de DSI". RSSI et SOC vont leur passer au-dessus. (hypothèse à valider avec le client : DCB propose-t-il vraiment un SOC managé et un RSSI dédié ? Si non, à retirer.)
- **Témoignage Philippe Garnier encore là** ("Après une tentative de ransomware..."), 3e occurrence du même personnage sur le silo.
- Frontière floue avec infogérance et outils-collaboratifs sur la messagerie (voir chevauchements).

### 5. Outils Collaboratifs (`outils-collaboratifs/index.html`) : 6,5 / 10

Page claire, pédagogique, bien ciblée M365 vs Workspace. Le meilleur traitement "conseil" du silo (la FAQ aide vraiment à choisir). Mais c'est la page la plus "catalogue" et la moins ancrée localement.

**Ce qui va**
- Le lede hero est concret : "Email pro, visio, partage de fichiers : tout déployé et configuré par nos experts."
- La FAQ est la plus utile du silo : "Quelle est la différence entre Microsoft 365 et Google Workspace ?", "Peut-on mélanger Microsoft 365 et Google dans la même entreprise ?". Vrai rôle de conseil pour une cible qui hésite.
- Prix transparents avec distinction licence éditeur + prestation DCB : honnête.
- Process en 4 étapes avec "Migration des données : Zéro donnée perdue, zéro temps d'arrêt" : traite l'objection n°1 (peur de perdre ses mails).

**Ce qui ne va pas**
- **Page la moins locale du silo.** Le hook hero "Optimisez le travail d'équipe avec les meilleures solutions cloud" pourrait servir à n'importe quelle ESN nationale. Test de validité copywriter-site échoué : "si le texte pourrait servir à une agence nationale, il est refusé." Aucune ville dans le corps avant les témoignages.
- **"M365 Gold Partner"** en trust bar : c'est une certification précise. DCB est-il réellement Microsoft Gold Partner ? (hypothèse à valider avec le client : sinon c'est une fausse allégation de partenariat, risque réel.)
- **Témoignage "Patrick Girard, Cabinet comptable, Mâcon (71)"** : variation transparente du Philippe Garnier des autres pages (même métier, même ville, prénom changé). Le lecteur attentif le voit.
- Chevauchement frontal avec cloud-securite sur la messagerie et le stockage (voir chevauchements).
- Zéro traitement de l'objection prix réelle : "+ prestation DCB sur devis" répété 3 fois sans aucune fourchette, alors que les autres pages affichent des montants. Incohérence de transparence dans le silo.

### 6. Location · Vente · Installation (`location-vente-installation/index.html`) : 7 / 10

Page la plus aboutie sur l'argumentaire financier. Le "Louer ou acheter ?" est un vrai contenu d'aide à la décision, pas un argumentaire déguisé. Bon ancrage fiscal (déductibilité), bonne mécanique.

**Ce qui va**
- Angle hero net et orienté bénéfice trésorerie : "Du matériel de pointe sans impact sur votre trésorerie."
- Le comparatif "Achat classique / Location longue durée (LLD)" est riche et honnête : "Loyers 100 % déductibles en charges / Aucun impact sur votre bilan, déduction fiscale immédiate". Parle le langage du dirigeant de PME.
- Note de bas de comparatif équilibrée : "L'achat peut convenir si vous disposez d'un budget immédiat". La nuance crédibilise (effet Pratfall, cf. marketing-psychology).
- Marques nommées en FAQ : "HP, Lenovo, Dell... OXHOO et AURES... Ubiquiti et Cisco". Concret. (Note : PRODUCT.md liste OXHOO, AURES, Lenovo ; HP/Dell/Ubiquiti/Cisco sont à confirmer. hypothèse à valider avec le client.)
- Cross-sell vers la caisse (OXHOO/AURES) bien trouvé, cohérent avec les 3 piliers.

**Ce qui ne va pas**
- **"80% de nos clients choisissent la location longue durée"** : chiffre non sourcé présenté comme un fait. Idem "Garantie 5 ans" affichée partout comme un absolu (la FAQ dit "Garantie constructeur 5 ans" : est-ce vrai pour HP/Lenovo/Dell sur tout le matériel ? hypothèse à valider).
- **Incohérence prix avec le reste du silo** : ici "Sur devis" partout, alors que maintenance et cloud affichent des montants. Le silo n'a pas de doctrine prix unifiée.
- **4 témoignages, dont Philippe Garnier (Mâcon) une 4e fois** et Nathalie Rousseau (Villefranche) déjà vue ailleurs. Le casting est épuisé.
- Le hero ne mentionne ni le SAV ni la hiérarchie d'intervention : la page renvoie la maintenance au cross-sell, ce qui est logique, mais le lien "même interlocuteur gère votre parc et votre sécurité" pourrait être plus appuyé dans le corps.

---

## Cohérence éditoriale inter-pages

**Diagnostic général : cohérence FORTE sur la marque, FAIBLE sur la singularité de chaque page.** Le silo raconte bien une histoire unique (technicien salarié attitré, zéro sous-traitance, local, un seul interlocuteur). Le ton est homogène, le vocabulaire de marque est tenu. Mais cette cohérence vire à la monotonie templatisée : les mêmes blocs, les mêmes H2, le même casting reviennent page après page.

**Le hub est un bon chapeau** : ses 5 cartes correspondent aux 5 sous-pages, les accents couleur sont cohérents (ambre infogérance, rouge maintenance, teal cloud, violet outils, indigo location), le cross-sell pointe vers les bons piliers. Rien à redire sur la fonction d'aiguillage.

**Risques duplicate content (sérieux) :**

1. **Témoignages recyclés (le problème n°1).** "Philippe Garnier, Cabinet comptable, Mâcon (71)" sur hub + maintenance + cloud + location (4 pages), décliné en "Patrick Girard, Cabinet comptable, Mâcon" sur outils. "Marc Lefebvre, Bourg-en-Bresse" sur hub + maintenance avec le MÊME incident "vendredi 18h / serveur / vingt minutes". "Nathalie Rousseau/Roussel/Renaud, Villefranche-sur-Saône" sur cloud + outils + location. Violation de content-reference.md règle 4. À noter : CLAUDE.md roadmap dit que les témoignages sont des placeholders en attente de contenu client : c'est donc tolérable AVANT mise en ligne, mais il faut absolument 6 castings distincts à la livraison, sinon c'est un défaut visible et un signal de faux avis.

2. **H2 dupliqués mot pour mot.** "Ce que disent nos clients." (4 pages), "Questions fréquentes" (6 pages, normal), "Opérationnel en 4 étapes" / "Opérationnel en 3 étapes" (3 pages), "Aller plus loin" en eyebrow (5 pages). Les structures se répètent utilement (le lecteur se repère), mais les titres de section gagneraient à être personnalisés par métier pour le SEO et pour casser la sensation de gabarit.

3. **Formules SAV dupliquées.** "intervention sur site en moins de 4h", "zéro sous-traitance", "technicien salarié attitré" apparaissent quasi à l'identique partout. C'est de l'information de marque récurrente (acceptable, comme le NF525 sur les pages caisse), mais content-reference.md exige que la formulation SAV soit "déclinée différemment sur chaque page : même message, contexte métier différent". Or ici elle n'est presque pas déclinée par métier.

4. **content-reference.md Hub IT non rempli.** La section "## Hub IT" du référentiel anti-duplicate est vide ("# À remplir"). Le garde-fou qui a structuré le silo caisse (rôles distincts par page, ratio cible 60-65% unique) n'a jamais été posé pour le silo IT. C'est la cause racine des recyclages ci-dessus.

**Qualité du maillage narratif / cross-sell : bonne.** Chaque sous-page cross-sell vers 2 autres pages du silo de façon logique (infogérance vers cloud + maintenance ; maintenance vers cloud + infogérance ; cloud vers maintenance + location ; outils vers stockage + infogérance ; location vers maintenance + caisse). Le maillage est cohérent et oriente vers la conversion. Seul bémol : il renforce le sentiment que toutes les pages vendent la même chose, parce que les frontières de périmètre ne sont pas nettes.

---

## Complétude métier

Pour une activité d'infogérance / maintenance IT B2B visant des TPE/PME locales sans DSI, voici ce qui MANQUE, classé par priorité.

### Manques critiques (P0)

1. **Réversibilité des données (manque réel).** Aucune page ne répond à "si je quitte DCB, est-ce que je récupère mes données, mes mots de passe, mes accès, sans friction ?". C'est l'objection n°1 qui bloque une PME au moment de signer un contrat d'infogérance (peur du verrouillage). L'infogérance parle de "documentation complète, mots de passe tracés" : il manque juste la phrase qui dit "et tout vous appartient, restituable à tout moment".

2. **RGPD concret (manque réel).** "Conforme RGPD" / "Conformité RGPD assistée" en badges, jamais expliqué. Une PME a peur de l'amende CNIL et du registre des traitements. Il manque un bloc qui explique ce que DCB fait concrètement (hébergement UE, contrat de sous-traitance RGPD, registre, chiffrement). Le sujet est effleuré sur cloud-securite mais reste slogan.

3. **Hiérarchie SAV dans les heros (manque de conformité, pas de contenu).** La règle absolue (télémaintenance immédiate PUIS sur site <4h) n'est respectée que dans le process de maintenance-depannage. Les heros du hub et de maintenance réduisent à "<4h". À corriger partout, c'est une règle client non négociable.

### Manques importants (P1)

4. **PRA / continuité d'activité pour une vraie PME (sous-traité).** Le "Plan de reprise d'activité (PRA) personnalisé" est relégué à l'offre "sur mesure +20 utilisateurs" de cloud-securite. Or une PME de 8 personnes a aussi besoin de savoir "combien de temps pour repartir après un sinistre". La restauration "<4h" existe mais n'est pas reliée à un récit de continuité d'activité accessible.

5. **Téléphonie / VoIP (absent, à confirmer comme offre).** Aucune mention. Pour une TPE/PME, la téléphonie d'entreprise est souvent couplée à l'IT. (hypothèse à valider avec le client : DCB propose-t-il la VoIP ? Si oui, c'est un trou ; si non, ignorer.)

6. **Réseau / wifi expliqué pour non-techniciens (sous-traité).** Le wifi/réseau n'apparaît que sur location-vente-installation ("Wi-Fi professionnel, configuration switch"). Une PME qui a des soucis de wifi ne pensera jamais à aller sur la page "Location". Sujet mal rangé.

7. **Audit initial gratuit : présent mais sous-exploité comme hook.** L'audit gratuit est mentionné (infogérance, location, cloud) mais jamais érigé en porte d'entrée à risque zéro sur le hub. C'est le meilleur outil de réduction de friction (cf. marketing-psychology, activation energy) et il est noyé.

8. **Supervision / monitoring proactif : bien couvert mais dispersé.** Présent sur 4 pages, c'est bien, mais cela alimente la confusion de périmètre (voir chevauchements).

### Manques mineurs / à arbitrer (P2)

9. **Mobilité / télétravail (effleuré).** "VPN sécurisé pour le télétravail" (cloud), "équipes mobiles" (outils) : présent en filigrane, jamais traité comme un besoin en soi.
10. **Parc matériel / renouvellement : bien couvert** (location + infogérance "Conseil renouvellement"). RAS.
11. **Microsoft 365 / Google Workspace : bien couvert** (page dédiée). RAS.
12. **Contrats / forfaits / transparence prix : couvert sur 3 pages, absent sur 2** (outils et location en "sur devis"). Incohérence à arbitrer.

**Sujets bien couverts (pour mémoire) :** technicien attitré, zéro sous-traitance, comparatif vs ESN/CDI, sauvegarde 3-2-1, antivirus/firewall, location vs achat, migration M365/Workspace, process d'onboarding daté.

---

## Chevauchements / cannibalisation entre pages

La frontière de périmètre n'est nette nulle part. Quatre zones de recouvrement :

1. **Infogérance PME vs Maintenance & Dépannage (cannibalisation forte).** Les deux vendent : surveillance/monitoring 24/7, télémaintenance, intervention sur site <4h, technicien attitré, rapport, coût mensuel fixe. La seule différence réelle (infogérance = abonnement global préventif ; maintenance = contrat de SAV qui peut être souscrit seul) n'est jamais énoncée clairement en haut de page. Preuve : les deux pages se cross-sellent l'une l'autre. Risque : le visiteur ne sait pas laquelle prendre, ou pense payer deux fois. **Reco : poser en une phrase, en haut de chaque page, ce que la page couvre et ne couvre pas.** (Ex : infogérance = "tout votre IT en abonnement" ; maintenance = "le SAV seul, si vous gérez le reste".)

2. **Cloud & Sécurité vs Outils Collaboratifs (chevauchement sur messagerie + stockage).** Cloud vend "Messagerie pro sécurisée" et "Solutions collaboratives souveraines" ; Outils vend "Messagerie Exchange / Gmail pro" et "OneDrive / Google Drive". Le client ne sait pas où acheter sa messagerie. **Reco : Cloud = la couche sécurité/sauvegarde/protection ; Outils = la suite bureautique/collaboration. Énoncer la division explicitement.**

3. **Cloud & Sécurité vs Infogérance (chevauchement sur antivirus/sauvegarde).** Infogérance liste "antivirus" dans les mises à jour proactives ; cloud-securite en fait son coeur. Acceptable si infogérance dit "la sécurité avancée, voir page Cloud", ce qu'elle fait à moitié.

4. **Location/Installation vs Outils (chevauchement sur déploiement logiciel).** Location "Paramétrage complet" inclut "installation des logiciels métier (y compris suites de productivité et outils collaboratifs)" : c'est le sujet d'Outils. Mineur, mais à border.

**Synthèse : le silo a 5 sous-pages mais 3 périmètres réellement distincts (gestion globale / matériel / suites logicielles), avec la sécurité et le SAV qui débordent partout.** Ce n'est pas un défaut rédhibitoire, mais sans phrase de cadrage en tête de chaque page, le silo se cannibalise.

---

## Marqueurs IA relevés (pires exemples)

Le silo est globalement propre côté slop (zéro em dash, peu de vocabulaire IA, ton concret). Mais quelques tics reviennent :

- **Rule of three systématique dans les heros et ledes.** Quasi chaque lede liste trois éléments : "Email pro, visio, partage de fichiers" (outils), "Sauvegarde automatique, antivirus managé, firewall et messagerie" (cloud), "Pannes imprévisibles, prestataires interchangeables, factures surprises" (infogérance), "postes, serveurs, réseau" (location). Une ou deux fois c'est rythmé ; sur 6 pages c'est un gabarit reconnaissable.
- **H2 templatisés en title case implicite et formules creuses.** "Opérationnel en 4 étapes" répété ; "Aller plus loin" en eyebrow sur 5 pages ; "Ce que disent nos clients." sur 4 pages. Sent le remplissage de gabarit.
- **Absolus publicitaires vides** (le skill humanizer pointe la "promotional language") : "100% sécurisé" (badge hub), "le meilleur matériel disponible" (location), "les meilleures solutions cloud" / "les suites collaboratives leaders du marché" (outils). "Leaders du marché" est exactement le type d'affirmation non étayée que copy-editing (sweep "Prove It") demande de retirer.
- **Chiffres ronds qui sentent le fabriqué** (cf. specificity sweep, mais ici à l'envers : trop ronds, non sourcés) : "92%", "80%", "une PME sur deux", "15 000 €", "20 000€". Paradoxe : ils visent la précision mais, sans source, ils sonnent inventés.
- **Intros un peu vides** : "Optimisez le travail d'équipe avec les meilleures solutions cloud" (outils, H1 lede) est une phrase qui ne dit rien de spécifique à DCB ni au local.

Aucun marqueur grave (pas de "It's not just X, it's Y", pas de "-ing" superficiels en cascade, pas de tapestry/testament). Le silo est dans le bon tiers, mais les chiffres non sourcés et les absolus sont les vrais points à nettoyer.

---

## Tableau récapitulatif priorisé

| Priorité | Page(s) | Problème | Recommandation concrète |
|---|---|---|---|
| P0 | Toutes (témoignages) | Témoignages recyclés entre pages (Philippe Garnier sur 4 pages, Marc Lefebvre même incident sur 2). Viole content-reference.md règle 4. | Produire 6 castings de témoignages 100% distincts (noms, villes, métiers, incidents) avant mise en ligne. Marquer placeholders en attente client. **Hub : fait (24/06) : avis recyclés retirés, 1 vrai avis (Teddy Malfroy). Restent les 5 sous-pages.** |
| P0 | Toutes (sauf maintenance process) | Chiffres non sourcés présentés comme faits : "92%", "15 000€", "20 000€", "une PME sur deux", "80%". Risque légal (copywriting : statistiques fabriquées). | Sourcer chaque chiffre (rapport nommé + année) ou le retirer. Si interne DCB, écrire "sur nos contrats" + valider le chiffre réel. **Hub : fait (24/06) : "92%" et "15 000 €" retirés. Restent cloud, location, infogérance.** |
| P0 | Hub, maintenance-depannage (heros) | Hero réduit le SAV à "moins de 4h" sans la télémaintenance immédiate d'abord. Viole la règle SAV absolue. | Réécrire les heros : "télémaintenance immédiate, puis sur site en moins de 4h si nécessaire". Modèle = le process de maintenance-depannage. **Hub : fait (24/06). Reste maintenance-depannage.** |
| P0 | content-reference.md | Section Hub IT vide ("# À remplir") : aucun garde-fou anti-duplicate posé pour le silo. | Remplir la section : rôle distinct de chaque page, formules SAV déclinées par métier, ratio unique cible (60-65% comme le silo caisse). |
| P1 | Infogérance vs Maintenance | Cannibalisation : mêmes briques vendues (monitoring, télémaintenance, <4h, technicien attitré). | Ajouter une phrase de cadrage en tête de chaque page : ce qu'elle couvre / ne couvre pas. Différencier abonnement global vs SAV seul. |
| P1 | Cloud vs Outils | Messagerie et stockage vendus des deux côtés. | Diviser explicitement : Cloud = sécurité/sauvegarde/protection ; Outils = bureautique/collaboration. Renvois croisés clairs. |
| P1 | Cloud, hub | RGPD et "Conforme RGPD" en slogan, jamais expliqué. | Bloc concret : hébergement UE, contrat sous-traitant RGPD, registre, chiffrement. Traiter la peur CNIL. |
| P1 | Infogérance (et silo) | Réversibilité des données absente. Objection de signature non levée. | Ajouter "vos données et accès vous appartiennent, restituables à tout moment" dans infogérance + cloud. |
| P1 | Cloud (offre sur mesure) | Vocabulaire grand compte (SOC, RSSI, ISO 27001 assistée) sur cible TPE sans DSI. | Vérifier que ces services existent (hypothèse à valider). Sinon retirer. Si oui, traduire en langage PME. |
| P1 | Outils | "M365 Gold Partner" : allégation de partenariat à vérifier. | Confirmer le statut Microsoft réel (hypothèse à valider). Fausse allégation = risque. |
| P2 | Outils | Page la moins locale ("meilleures solutions cloud", aucune ville avant témoignages). | Ancrer : exemple PME nommée (Mâcon, Lyon), reformuler le hook hors registre générique national. |
| P2 | Outils, location | "Sur devis" partout alors que maintenance/cloud affichent des prix. Incohérence de transparence. | Décider d'une doctrine prix de silo : fourchette indicative partout, ou "sur devis" partout, pas un mélange. |
| P2 | Location | "80% de nos clients choisissent la LLD", "Garantie 5 ans" sur tout le matériel. | Sourcer le 80% (interne) ou retirer. Vérifier que la garantie 5 ans couvre HP/Lenovo/Dell (hypothèse à valider). |
| P2 | Silo (réseau/wifi, VoIP, mobilité) | Réseau/wifi rangé sous "Location" ; VoIP absente ; mobilité effleurée. | Vérifier le périmètre d'offre réel (hypothèse à valider). Si offerts, leur donner une visibilité propre. |
| P2 | Toutes | H2 templatisés ("Aller plus loin", "Opérationnel en X étapes", "Ce que disent nos clients."). | Personnaliser 1-2 titres de section par métier pour casser le gabarit et gagner en SEO. |

---

Fin de l'audit initial. Le Hub IT a depuis été corrigé (voir "Mise à jour 24/06/2026" en tête) ; les 5 sous-pages restent à traiter. Tiret cadratin (U+2014) : 0 sur les 6 pages (vérifié au niveau octet).
