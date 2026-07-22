# Guide config comptes : les 6 actions C1 à C6

**Pour :** XIII
**Contexte :** l'audit pré-lancement (`RAPPORT-FINAL.md`, section "Configuration des comptes") a identifié 6 réglages à faire toi-même dans les interfaces d'admin. Le code du site est déjà sain (GTM, formulaire, dataLayer). Ce qui manque, c'est uniquement la configuration côté comptes. Sans ça, si une campagne démarre demain, la quasi-totalité des appels et devis restent invisibles côté Ads.
**Temps total estimé :** environ 2h15, répartissables sur plusieurs sessions.
**Rien ici ne modifie le site.** Tout se passe dans des interfaces externes (GA4, Google Ads, GTM, Meta, Google Business Profile).

---

## Ordre conseillé

Fais les 6 dans cet ordre, en 3 blocs (tu peux espacer les blocs sur plusieurs jours) :

1. **Bloc GA4 + Google Ads (même session, ouvre les deux onglets)** : C1 puis C2 puis C3. C1 débloque C2 (Google Ads ne peut importer un Key Event qui n'existe pas encore). C3 se fait dans la foulée puisque tu es déjà dans Google Ads.
2. **Bloc Google Business Profile (session à part, 25 min)** : C5 puis C6. Rien à voir avec le tracking, mais c'est rapide et c'est probablement la cause n°1 pour laquelle la fiche ne sort pas dans le Local Pack malgré ses 5,0/5.
3. **Bloc GTM + Meta (le plus long, prévoir un créneau dédié ou le faire avec Clément)** : C4 en dernier, parce que c'est la seule action à 1h et qu'elle touche à un conteneur GTM partagé avec le V1 (donc à faire calmement, pas entre deux rendez-vous).

---

## C1. GA4 : marquer `generate_lead` et `phone_call_click` comme Key Events

**Pourquoi :** ces deux événements arrivent déjà correctement dans GA4 (le code fonctionne), mais aucun n'est marqué comme Key Event. Résultat : l'onglet "Conversions" de GA4 reste vide, et Google Ads ne pourra jamais importer ces conversions tant qu'elles ne sont pas des Key Events.

**Chemin de clics (interface 2026) :**
1. Va sur `analytics.google.com`, vérifie en haut à gauche que tu es bien sur la propriété **505863722** (nom affiché : DCB Technologies, ou équivalent).
2. Menu latéral gauche, en bas : **Admin** (icône engrenage).
3. Colonne "Property" : clique sur **Événements** (`Events`).
4. Tu vois la liste des événements des 30 derniers jours : `page_view`, `session_start`, `first_visit`, `user_engagement`, `scroll`, `phone_call_click`, `generate_lead`, `click`.
5. Repère la ligne `generate_lead` : tout à droite, il y a un interrupteur/toggle sous la colonne **"Marquer comme événement clé"** (`Mark as key event`). Active-le.
6. Fais la même chose pour la ligne `phone_call_click`.

**Valeurs à saisir :** aucune, c'est un simple interrupteur ON/OFF, pas de champ à remplir.

**Pièges connus :**
- Si `phone_call_click` ou `generate_lead` n'apparaissent pas dans la liste, c'est probablement une question de fenêtre de date en haut de la page (mets-la sur 30 jours minimum). Ne crée surtout pas de nouvel événement ou de nouveau flux de données : le flux existant qui émet le tag GA4 `G-ZR1K13HSW6` (visible dans le conteneur GTM-MXK7RX9P) est le bon, il ne faut pas en créer un second.
- Il n'y a **rien à créer** ici, uniquement à activer un toggle sur un événement déjà existant.
- Ne touche pas aux autres événements (`click`, `scroll`, etc.) : seuls `generate_lead` et `phone_call_click` sont concernés.

**Temps estimé :** 10 minutes.

**Tu sauras que c'est bon quand :** dans l'onglet Admin > Événements, les lignes `generate_lead` et `phone_call_click` affichent le toggle activé (généralement en bleu/vert). Attention : le comptage réel dans l'onglet "Rapports > Conversions" (ex-Key Events) met **environ 24h** à apparaître après l'activation, c'est normal, ne recommence pas la manipulation si le rapport reste vide le jour même.

---

## C2. Google Ads : conversions propres + suppression des 4 mortes

**Dépend de :** C1 fait et confirmé (attends l'apparition du Key Event dans GA4 avant de commencer, sinon l'import Google Ads ne trouvera rien à rattacher).

**Pourquoi :** le compte (`6265603123`, "DCB TECHNOLOGIES") a aujourd'hui 10 actions de conversion. 4 sont des imports GA4 mortes (statut HIDDEN, elles pointent vers des noms d'événements qui n'existent pas sur le V2 : `close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM`). Aucune ne couvre le clic sur le numéro de téléphone affiché sur le site.

**Chemin de clics (interface 2026) :**
1. Va sur `ads.google.com`, vérifie que tu es sur le compte **6265603123** (DCB TECHNOLOGIES).
2. Menu latéral gauche : **Objectifs** (`Goals`) > **Conversions** > **Résumé** (`Summary`).
3. Pour importer les 2 nouvelles conversions propres : bouton **"+ Nouvelle action de conversion"** > choisis **"Importer"** (`Import`) > source **"Google Analytics (GA4)"** > sélectionne la propriété 505863722 > tu devrais voir apparaître `generate_lead` et `phone_call_click` dans la liste des événements disponibles (ils n'apparaîtront que si C1 est bien fait et propagé). Coche les deux, valide l'import.
4. Pour chacune des 2 conversions importées, configure : **catégorie** = "Prospect" (`Lead`) pour `generate_lead`, "Contact" ou "Prospect" selon la liste proposée pour `phone_call_click` ; **valeur** = "Ne pas utiliser de valeur" (pas de montant fixe pertinent ici) ; **fenêtre de conversion** = 30 jours (comportement standard, cohérent avec un cycle de vente à base d'appels/devis) ; **mode de comptage** = "Une seule" (une conversion par clic, pas "Chaque").
5. Pour supprimer les 4 conversions GA4 mortes : dans le tableau des conversions, coche `close_convert_lead`, `qualify_lead`, `purchase`, `manual_event_SUBMIT_LEAD_FORM` (les 4 avec le statut "Masquée"/`HIDDEN`) > bouton **"Modifier"** (`Edit`) > **"Supprimer"** (`Remove`). Elles passeront au statut REMOVED (Google Ads ne supprime jamais vraiment une conversion, il l'archive).
6. Fais la même chose pour les conversions déjà en statut REMOVED ou orphelines si elles apparaissent encore dans ta vue par défaut (filtre "Toutes" au lieu de "Actives").

**Valeurs à saisir :**
- Nom de la conversion : garde le nom auto-proposé par l'import GA4 (il reprendra `generate_lead` et `phone_call_click`), ou renomme en clair "Formulaire de contact (GA4)" et "Clic appel (GA4)" si tu veux un libellé plus lisible dans les rapports. Les deux fonctionnent, seul l'ID interne compte pour le tracking.
- Catégorie, valeur, fenêtre : voir étape 4 ci-dessus.

**Pièges connus :**
- Ne touche pas à la conversion **"Envoi de formulaire de lead caisse enregistreuse"** ni **"Envoi de formulaire de lead du site"** (les 2 seules `WEBPAGE` actives ayant reçu des données réelles) sans vérifier d'abord si elles sont encore utiles : elles datent d'avant le V2 et sont probablement liées au V1, mais ne les supprime pas à l'aveugle si une campagne future doit encore cibler l'ancien site.
- La conversion **"Calls from ads"** (type `AD_CALL`) n'est pas à supprimer : elle capte les appels via un numéro de suivi Google affiché sur les annonces, pas le numéro fixe du site. Elle reste utile si tu actives un jour le numéro de suivi (call tracking), donc laisse-la, mais ne t'attends pas à ce qu'elle se déclenche sur un simple clic `tel:` du site.
- L'import GA4 ne proposera `generate_lead`/`phone_call_click` dans la liste **que si C1 a eu le temps de se propager** (jusqu'à 24h). Si la liste est vide ou incomplète, ferme et réessaie le lendemain plutôt que de forcer une conversion "Site web" manuelle qui dupliquerait le signal.

**Temps estimé :** 30 minutes.

**Tu sauras que c'est bon quand :** l'onglet Conversions > Résumé affiche exactement 2 conversions actives liées à GA4 (`generate_lead` et `phone_call_click`, statut ENABLED), les 4 anciennes GA4 sont passées en REMOVED, et le compte total de conversions "actives et propres" est net (plus de doublons ni d'orphelines visibles dans la vue par défaut). Le vrai test arrive au premier clic réel après lancement de campagne : la colonne "Conversions" du compte doit remonter un chiffre non nul dans les jours qui suivent, pas rester à 0 indéfiniment.

---

## C3. Google Ads : nettoyer le lien GA4 orphelin (customer 3104358068)

**Pourquoi :** la propriété GA4 505863722 a 2 liens Google Ads actifs : le bon compte (`6265603123`, utilisé partout ailleurs) et un compte orphelin (`3104358068`) qui n'apparaît dans aucun accès géré aujourd'hui. Si ce lien redevient actif un jour, tu risques un double comptage des conversions ou une confusion entre deux comptes qui importent les mêmes événements.

**Chemin de clics (interface 2026) :**
1. Ce lien se gère depuis **GA4** (Admin > Property > Google Ads Links), pas depuis Google Ads : va sur `analytics.google.com`, Admin (engrenage en bas à gauche), colonne "Property", clique sur **"Liens Google Ads"** (`Google Ads Links`).
2. Tu dois voir 2 lignes : une pour `6265603123` (à garder), une pour `3104358068` (à supprimer).
3. Coche la ligne `3104358068` > bouton **"Supprimer"** (`Unlink` ou icône poubelle) > confirme.

**Valeurs à saisir :** aucune, c'est une suppression de lien, pas une configuration.

**Pièges connus :**
- Ne supprime surtout pas le lien `6265603123` par erreur : c'est le compte réel, actif, non-manager, en euros, fuseau Europe/Paris, celui utilisé partout dans l'audit. Vérifie bien le numéro avant de cliquer sur "Supprimer".
- Si tu n'as pas les droits pour voir ou supprimer ce lien orphelin depuis GA4 (ça arrive si le compte `3104358068` appartient à un accès Google Ads que tu ne gères pas), la suppression peut aussi se faire côté Google Ads, dans le compte orphelin lui-même, sous **Outils > Comptes associés > Google Analytics (GA4)**. Si tu n'as accès ni à l'un ni à l'autre, ce point devient "à surveiller" plutôt que "à corriger" : il ne bloque rien tant que ce lien reste inactif.

**Temps estimé :** 10 minutes.

**Tu sauras que c'est bon quand :** la page "Liens Google Ads" de GA4 n'affiche plus qu'une seule ligne, `6265603123`.

---

## C5. Google Business Profile : recentrer le pin GPS

**Pourquoi :** la fiche GBP est aujourd'hui géolocalisée à environ 20 km de la vraie adresse (zone Brignais/Vourles/Chaponost, au lieu de Dardilly). En mode "zone de service", ce point interne reste le facteur numéro un du classement dans le Local Pack sur les requêtes locales ("caisse enregistreuse Lyon", "maintenance informatique Dardilly", etc.). C'est très probablement la cause principale pour laquelle la fiche ne sort jamais dans le Local Pack malgré une note de 5,0/5 et 7 avis.

**Chemin de clics (interface 2026) :**
1. Va sur `business.google.com`, connecte-toi avec le compte gestionnaire de la fiche "DCB technologies".
2. Sur le tableau de bord de la fiche, clique sur **"Modifier le profil"** (`Edit profile`) ou l'onglet **"Infos"** (`Info`).
3. Section **"Adresse"** ou **"Zone de service"** (`Service area`) selon le mode configuré : cherche le champ carte / repère GPS. Si la fiche est en mode "zone de service" (adresse masquée au public), le champ à corriger est généralement listé comme **"Emplacement de l'entreprise"** (`Business location`), visible uniquement en admin, pas au public.
4. Sur la carte, fais glisser le repère (pin) vers les coordonnées réelles, ou saisis l'adresse réelle dans le champ de recherche de la carte : **59 Chemin du Moulin Carron, 69570 Dardilly**. La carte doit se recentrer sur environ **45,81 N / 4,76 E**.
5. Valide/enregistre.

**Valeurs à saisir :** adresse `59 Chemin du Moulin Carron, 69570 Dardilly` dans le champ de recherche de la carte, ou coordonnées `45.8136, 4.7553` si l'interface permet une saisie manuelle en latitude/longitude.

**Pièges connus :**
- Si la fiche est en mode "zone de service" (Service-Area Business), Google Business Profile peut refuser d'afficher publiquement l'adresse exacte même après correction : c'est normal et volontaire (le SAB masque l'adresse au public), le pin interne sert uniquement au calcul de proximité, pas à l'affichage.
- Un déplacement de pin déclenche parfois une demande de **revérification** de la fiche (courrier postal, appel, ou vérification vidéo) si Google juge le changement "important". Prévois ce délai possible (quelques jours à quelques semaines) et ne panique pas si la fiche passe temporairement en "En attente de vérification".
- Ne coche pas "Adresse physique visible" si DCB ne reçoit pas de clients sur place à Dardilly : garde le mode zone de service, corrige uniquement le point GPS interne.

**Temps estimé :** 15 minutes (hors délai éventuel de revérification Google).

**Tu sauras que c'est bon quand :** en recherchant "DCB Technologies" sur Google Maps et en cliquant sur la fiche, les coordonnées affichées dans l'URL (`@lat,lng`) correspondent à Dardilly (environ 45.81, 4.75) et non plus à 45.6356277, 4.7311759. Le vrai effet sur le classement Local Pack prend plusieurs semaines à se mesurer, ne juge pas sur les premiers jours.

---

## C6. Google Business Profile : nom "DCB Technologies" + catégorie secondaire

**Pourquoi :** deux écarts simples avec un vrai impact. Le nom affiché est actuellement "DCB technologies" (t minuscule), incohérent avec le branding du site. Et il n'y a qu'une seule catégorie ("Assistance et services informatiques") : sans la catégorie secondaire "Vendeur de caisses enregistreuses", la fiche ne peut structurellement pas apparaître dans le Local Pack sur les requêtes caisse enregistreuse, quel que soit le travail fait sur les pages du site.

**Chemin de clics (interface 2026) :**
1. Sur `business.google.com`, onglet **"Infos"** (`Info`) de la fiche.
2. Champ **"Nom de l'entreprise"** (`Business name`) : clique sur le crayon/modifier, remplace "DCB technologies" par **"DCB Technologies"** (majuscule au T). Valide.
3. Champ **"Catégorie"** (`Category`) juste en dessous : tu verras la catégorie principale actuelle. Cherche le lien ou bouton **"Ajouter une autre catégorie"** (`Add another category`), ou l'icône "+".
4. Tape "caisse" dans le champ de recherche de catégorie, sélectionne **"Vendeur de caisses enregistreuses"** (ou l'intitulé le plus proche proposé par Google, généralement en anglais "Cash register store" si la liste ne se traduit pas parfaitement). Valide.

**Valeurs à saisir :**
- Nom : `DCB Technologies`
- Catégorie secondaire : `Vendeur de caisses enregistreuses`

**Pièges connus :**
- Un changement de nom d'entreprise sur GBP déclenche parfois une **revérification**, comme pour le pin GPS. Si tu fais C5 et C6 dans la même session, ne t'étonne pas d'un seul passage en "En attente de vérification" qui couvre les deux changements.
- N'invente pas de catégorie tertiaire supplémentaire non liée à l'activité réelle (le risque est une suspension pour non-conformité si Google juge la catégorie trompeuse) : reste sur ce qui correspond vraiment à l'activité (informatique + caisse enregistreuse), pas plus.
- Certaines interfaces limitent le nombre de catégories secondaires visibles publiquement même si plusieurs sont enregistrées en admin. Si "Vendeur de caisses enregistreuses" n'apparaît pas tout de suite publiquement, ce n'est pas forcément un échec de sauvegarde, laisse quelques jours de propagation avant de re-tester.

**Temps estimé :** 10 minutes.

**Tu sauras que c'est bon quand :** en recherchant "DCB Technologies Dardilly" sur Google, le panneau de connaissance affiche "DCB Technologies" avec un T majuscule, et sous le nom apparaît "Assistance et services informatiques · Vendeur de caisses enregistreuses" (deux catégories séparées par un point).

---

## C4. Meta : DÉJÀ FAIT, rien à configurer (erratum du 22/07)

L'audit initial affirmait que le conteneur GTM n'avait aucune balise Meta : c'était une erreur de méthode de l'agent vérificateur (grep du code des pages, aveugle aux balises injectées par GTM). Vérification directe du conteneur publié `GTM-MXK7RX9P` (gtm.js public) : le chargeur du pixel Meta (`connect.facebook.net/en_US/fbevents.js`) et la config GA4 (`G-ZR1K13HSW6`) y sont bien. Les balises Meta-Pixel (PageView), Meta-Lead (`generate_lead`) et Meta-Contact (`phone_call_click`) ont été publiées et testées en live le 17/07, avec consentement `ad_storage` respecté.

**Action requise : aucune.**

**Contrôle optionnel (5 min) si tu veux te rassurer :** Meta Events Manager > dataset `4184805238436735` > onglet "Test des événements", puis navigue sur une page `/new/` en acceptant les cookies : tu dois voir un `PageView` arriver avec une URL source `dcb-technologies.fr/new/...`. L'activité quotidienne du dataset vient aujourd'hui du V1 simplement parce que le V2 en staging n'a pas de trafic.

**Chantier futur (post-lancement, pas maintenant) :** le canal serveur CAPI du dataset est figé depuis mars 2026 ; sa réactivation est la Phase 3 du plan tracking, indépendante de ce guide.
