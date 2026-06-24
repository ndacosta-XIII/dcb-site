# Scope SEA : DCB Technologies V2
# Plan d'acquisition payante prêt au lancement

> Produit le 17/06/2026. Données réelles : compte Google Ads 6265603123 (décembre 2025 - avril 2026), GA4 propriété 505863722, Meta Ads compte 24932449326430977. Économie unitaire validée client.

---

## 1. AUDIT FLASH DU COMPTE MORT (982 €, résultat zéro pilotable)

### Chiffres réels extraits du compte (MCP Google Ads, pas d'hypothèse)

| Campagne | Statut | Dépense | Clics | Impressions | Conv. | CPC moyen |
|---|---|---|---|---|---|---|
| Campagne mot clef strict 71 | PAUSED | 459 € | 102 | 3 796 | 0 | 4,51 € |
| 01 - Search - Caisse Tactile | PAUSED | 177 € | 72 | 1 130 | 2* | 2,46 € |
| 69 - Search - Caisse Tactile | PAUSED | 175 € | 62 | 1 599 | 0 | 2,82 € |
| 71 - Search - Caisse Tactile | PAUSED | 94 € | 33 | 370 | 2* | 2,84 € |
| 42 - Search - Caisse Tactile | PAUSED | 53 € | 22 | 299 | 0 | 2,42 € |
| Caisse 71 Broad Local | REMOVED | 22 € | 6 | 242 | 0 | 3,74 € |
| Landing page 1 | REMOVED | 1 € | 1 | 8 | 0 | 1,48 € |
| **TOTAL** | | **982 €** | **298** | **7 444** | **4** | **~3,30 €** |

*Les 4 conversions déclarées sont NON FIABLES (voir problème tracking ci-dessous).

### Les 5 causes d'échec, par ordre d'impact

**1. Tracking cassé (cause racine, invalide TOUT le reste)**
L'audit des actions de conversion révèle un chaos complet :
- "Envoi de formulaire de lead" (id 7411324443) : statut REMOVED. Tag snippet présent mais orphelin.
- "Envoi de formulaire caisse enregistreuse" (id 7412664633) : statut REMOVED.
- "Formulaire de contact - Envoyer" (id 7411103977) : statut ENABLED, type LEAD_FORM_SUBMIT (formulaire natif Google Ads, pas le formulaire du site).
- "Calls from ads" (id 7455549738) : statut ENABLED mais type AD_CALL (fonctionne uniquement depuis l'extension d'appel dans l'annonce, pas les appels depuis la page).
- Actions GA4 importées (close_convert_lead, qualify_lead, purchase, SUBMIT_LEAD_FORM) : toutes en statut HIDDEN, donc NON utilisées pour les enchères.
- "Envoi de formulaire de lead du site" (id 7481448601) : statut ENABLED, tag snippet présent MAIS GA4 remonte 0 keyEvents sur 90 jours. Le formulaire du site V1 ne tirait probablement pas l'événement gtag().

Résultat : les 982 € ont été dépensés en enchères sans signal de conversion. Les 4 "conversions" comptabilisées correspondent probablement à des clics sur l'extension d'appel (AD_CALL), pas à des leads qualifiés. CPA apparent 245 € pour des leads non vérifiables.

**2. Budget éclaté sous le seuil de viabilité**
4 campagnes géographiques parallèles sur la même thématique caisse. Budget effectif par campagne : 10 à 40 €/mois pour 69 et 42. À CPC 2,50-3,00 €, cela représente 4 à 16 clics/mois par campagne. L'algorithme de Google ne peut pas apprendre (minimum 30 conversions/mois pour Target CPA). Le 71, pourtant le territoire prioritaire, ne recevait que 94 € sur 5 mois = 19 €/mois.

**3. "Campagne mot clef strict 71" : 459 € pour 0 conversion, CPC 4,51 €**
C'est 47 % du budget total dépensé en pure perte. L'analyse des mots-clés révèle le problème : ciblage hors-intention (monnayeur automatique commerce 59 €/0 conv, borne de commande fast food 25 €/0 conv, NF525 seul 36 €/0 conv, prix caisse enregistreuse 26 €/0 conv). Ces requêtes sont soit des produits différents (monnayeur, borne), soit des recherches informationnelles de prix sans géolocalisation. Aucun mot-clé ville dans cette campagne.

**4. Mots-clés trop génériques, sans ancrage géographique**
Les annonces "logiciel de caisse" (49 €, 17 clics), "enregistreuse caisse" (56 €, 23 clics), "caisse enregistreuse" générique captaient des acheteurs nationaux qui ne se trouvaient pas dans la zone 71/69/01/42. Le ciblage géo PRESENCE était probablement actif, mais sur des zones trop larges sans exclusions fines.

**5. Groupes Concurrents sous-performants et non négatifs**
Les groupes Concurrents (JDC phrase, 14-20 €/0 conv) ciblaient des requêtes de navigation marque, pas des requêtes d'intention de switch. "jdc service client" devait être en négatif, pas en positif. Ces groupes ont été mis en pause mais pas avant d'avoir consommé du budget.

### Ce qui n'a pas été testé et qui aurait dû l'être
- Zéro campagne IT (dépannage, infogérance).
- Zéro campagne Web (création site).
- Zéro Meta Ads.
- Zéro annonce spécifique métier avec landing dédiée (boulangerie, restaurant, coiffure).
- Zéro extension de prix.
- Zéro numéro de tracking d'appel dédié (seule extension d'appel, non traçable côté site).

---

## 2. PRIORITE 0 : PLAN DE TRACKING (préalable absolu)

Aucun euro de média ne repart avant que les 7 étapes suivantes soient validées. Durée estimée : 2 semaines avec les bons accès.

### 2.1 Les conversions à mesurer

| Événement | Type | Priorité | Valeur indicative |
|---|---|---|---|
| Soumission formulaire devis (page /merci) | Primary conversion | Bloquant | 150 € (valeur lead caisse) |
| Clic-to-call 04 82 53 05 10 (mobile) | Primary conversion | Bloquant | 100 € (valeur lead générique) |
| Clic-to-call depuis extension d'annonce | Primary conversion | Bloquant | 100 € |
| Clic email contact@dcb-technologies.fr | Secondary (micro) | Important | 30 € |
| Ouverture bottom-sheet formulaire (mobile) | Micro-conversion | Utile | 10 € |

Les valeurs en euros sont des valeurs de lead (pas de vente), calibrées sur LTV caisse et taux de closing 50%. Elles servent à classer les leads entre eux dans les rapports, pas à calculer un ROAS.

### 2.2 Implémentation technique étape par étape

**Etape 1 : Créer la page /merci (bloquant)**
Une page de remerciement dédiée (/merci ou /merci.html) est l'unique moyen de tracer la soumission formulaire de façon fiable en site statique sans GTM. La page charge le snippet gtag conversion au page load. Elle doit être hors du menu, hors du sitemap, hors du footer.

**Etape 2 : Purger les actions de conversion orphelines**
Dans le compte Google Ads 6265603123, mettre en REMOVED toutes les actions dont le statut est déjà REMOVED ou HIDDEN : id 7411324443, 7411433219, 7411433222, 7411433225, 7411433228, 7412664633. Garder uniquement "Calls from ads" (7455549738) et créer les nouvelles actions propres.

**Etape 3 : Créer 3 actions de conversion propres dans Google Ads**
- "Lead formulaire devis" : type WEBPAGE, déclencheur = page /merci chargée. Comptage : ONE_PER_CLICK. Valeur : 150 €.
- "Appel depuis annonce" : type AD_CALL (déjà existant 7455549738, vérifier durée min 60 s). Valeur : 100 €.
- "Appel depuis site" : type WEBSITE_CALL (numéro de remplacement Google). Valeur : 100 €. Nécessite un numéro de forwarding Google Ads gratuit.

**Etape 4 : Instrumenter GA4 (propriété 505863722)**
Ajouter dans js/scripts.js (sans casser l'existant) :
- Événement `contact_form_submit` au clic sur le bouton de soumission du formulaire. Paramètres : `form_type` (devis/contact), `page_path`, `offre` (caisse/it/web détecté depuis l'URL).
- Événement `phone_click` au clic sur tout lien `href="tel:..."`. Paramètres : `source` (nav/fab/cta/footer).
- Ces événements doivent être marqués comme "Événements clés" dans l'interface GA4.

**Etape 5 : Importer les événements GA4 dans Google Ads**
Dans Google Ads, Outils > Mesure > Conversions > Importer depuis GA4. Sélectionner `contact_form_submit` et `phone_click`. Désactiver le dernier clic, activer le basé sur les données (Data-Driven) dès 300 conversions disponibles.

**Etape 6 : Pixel Meta + CAPI basique**
Compte Meta 24932449326430977. Créer un pixel si absent, ou vérifier son statut dans Events Manager. Événements à tracker : `Lead` (soumission formulaire, déclencher depuis la page /merci), `Contact` (clic-to-call). Pour le CAPI côté serveur sur un site statique hébergé : utiliser le webhook Zapier/Make depuis le formulaire vers l'API Meta Conversions. Optionnel en phase 1, obligatoire avant de lancer Meta Ads.

**Etape 7 : Validation avant relance**
Checklist de validation : ouvrir le site en navigation normale, soumettre un formulaire test, vérifier que /merci charge + que GA4 DebugView montre `contact_form_submit` + que Google Ads Diagnostic de conversion remonte "Enregistrement récent". Faire un clic-to-call test depuis mobile. Vérifier que les 3 nouvelles actions de conversion remontent "Active" dans Google Ads. Ce test prend 30 minutes mais conditionne l'intégralité du pilotage.

---

## 3. STRUCTURE SEA DE RELANCE

### 3.1 Principes directeurs (tirés de l'audit)

- Google Ads : uniquement haute intention, zone stricte, budget concentré.
- Meta Ads : prospection semi-intention et retargeting, CPC plus bas, visuel-first.
- Pas de Microsoft Ads (trop peu de volume B2B local en zone 71/69/01/42).
- Pas de LinkedIn Ads (CPC 8-15 €, inadapté au ticket caisse et au budget PME).
- Géo : PRESENCE uniquement (pas INTEREST). Rayon : pas de cercle kilométrique, ciblage par département ou ville exacte.

### 3.2 Architecture Google Ads (restructurée)

Compte 6265603123 existant à réutiliser (ne pas créer de compte neuf : historique de qualité, même partiel, vaut mieux qu'un score de zéro).

**Campagne 1 : Caisse 71 Search (priorité absolue)**
Budget : 7 €/jour (210 €/mois)
Géo : Saône-et-Loire (71) PRESENCE
Groupes d'annonces :
- "Caisse générique 71" : [caisse enregistreuse 71], [caisse enregistreuse saone et loire], "caisse enregistreuse Mâcon", "caisse enregistreuse Chalon", "caisse enregistreuse Paray"
- "NF525 et conformité" : [caisse nf525], [obligation caisse enregistreuse], [caisse enregistreuse obligatoire], "caisse conforme nf525 71"
- "Boulangerie" : [caisse enregistreuse boulangerie], "caisse boulangerie 71", "logiciel caisse boulangerie"
- "Restaurant" : [caisse enregistreuse restaurant 71], "caisse restaurant Mâcon", "logiciel caisse restaurant"
- "Commerce et coiffure" : [caisse enregistreuse commerce], [caisse enregistreuse coiffure], "logiciel caisse coiffure"
Landers cibles : /caisse-enregistreuse/saone-et-loire/ puis métiers selon groupe
Enchère : Maximiser clics + plafond CPC 4,00 € (évite les dérapages constatés à 5,9-9,9 € dans l'ancienne structure)

**Campagne 2 : Caisse 69 Search**
Budget : 4 €/jour (120 €/mois)
Géo : Métropole de Lyon + Villefranche-sur-Saône PRESENCE
Groupes :
- "Caisse Lyon" : [caisse enregistreuse lyon], "caisse enregistreuse rhone", "installateur caisse lyon"
- "Métiers Lyon" : boulangerie, restaurant, commerce avec ville
Lander cible : /caisse-enregistreuse/rhone/ (page existante)
Note : "caisse enregistreuse lyon" = money keyword identifié dans GSC (109 imp, position 29). C'est le seul mot-clé où une position payante est justifiée immédiatement.

**Campagne 3 : Caisse 01+42 Search**
Budget : 2 €/jour (60 €/mois)
Géo : Ain (01) + Loire (42) PRESENCE
Groupes :
- "Caisse Ain" : [caisse enregistreuse ain], "caisse Bourg-en-Bresse", "caisse Oyonnax"
- "Caisse Loire" : [caisse enregistreuse roanne], "caisse Saint-Étienne"
Landers : /caisse-enregistreuse/ain/ et /caisse-enregistreuse/loire/
Note : budget intentionnellement bas. Tester l'intention avant de scaler.

**Campagne 4 : IT Dépannage Search**
Budget : 2 €/jour (60 €/mois)
Géo : 71 + 69 PRESENCE
Groupes :
- "Dépannage urgent" : [dépannage informatique 71], [dépannage informatique Mâcon], "technicien informatique urgent", "panne informatique"
- "Infogérance PME" : [infogérance PME], "contrat informatique PME 71", "prestataire informatique Saône et Loire"
Lander cible : /maintenance-informatique/maintenance-depannage/ (intention max, délai 4h)
Note : CPC IT estimé 2-4 €. Volume faible (20-50 requêtes/mois en 71). Campagne de test, pas de scale avant 5 leads.

**Campagne 5 : Web Création Search**
Budget : 1 €/jour (30 €/mois)
Géo : 71 + 69 PRESENCE
Groupe unique : [création site internet 71], "création site Mâcon", "agence web Saône et Loire", "site internet commerce 71"
Lander cible : /visibilite-web/creation-site-internet/
Note : CPC création site 1,5-3 €. Concurrence locale faible. Test à 30 €/mois, scale rapide si leads.

**Négatifs obligatoires (liste de compte, s'applique à tout)**
Ajouter en correspondance exacte et expression : gratuit, formation, occasion, reconditionné, amazon, darty, casio, fnac, boulanger, cdiscount, sumup, tiller, lightspeed, hiboutik, popina, square, zettle, wino, telecharger, tutoriel, emploi, stage, alternance, marché forain, monnayeur (sauf campagne spécifique), borne de commande (sauf campagne spécifique), pressing (si absent des métiers cibles), ipad, iphone application.

### 3.3 Architecture Meta Ads (phase 2, mois 2)

Le compte 24932449326430977 est accessible. Lancement après validation du pixel et stabilisation des campagnes Google (mois 2).

**Campagne Meta A : Remarketing visiteurs caisse (150 €/mois)**
Audience : visiteurs /caisse-enregistreuse/* des 30 derniers jours (pixel)
Créatif : 3 visuels statiques. Format 1080x1080. Concept : "Devis gratuit, technicien à Paray" + badge NF525 + prix 59 €/mois. Pas de vidéo au stade actuel.
Objectif : Leads. CPC cible < 1,50 €.
Lander : /caisse-enregistreuse/saone-et-loire/ ou métier selon page de départ.

**Campagne Meta B : Prospection caisse 71/69 (100 €/mois)**
Audience : géo Saône-et-Loire + Rhône 50 km, intérêts : boulangerie, restauration, coiffure, commerce de détail, small business, retail.
Exclusion : clients existants (liste email si disponible).
Créatif : 2 concepts. A = "Le samedi où votre caisse plante" (problème) + 04 82 53 05 10. B = "1 technicien, 3 solutions : caisse, informatique, site web" (3-en-1 DCB).
Objectif : Traffic vers lander + Lead form natif Meta (si lander pas encore en ligne).

**Campagne Meta C : Prospection web/IT (optionnel mois 3, 50 €/mois)**
Audience : dirigeants PME 71/69, intérêts IT, création d'entreprise, commerce.
Créatif : "Votre site internet ou votre informatique méritent un interlocuteur local".
Objectif : Lead.

### 3.4 Répartition budgétaire recommandée

**Budget 500 €/mois (scénario lean) :**
| Canal | Campagne | Budget/mois |
|---|---|---|
| Google Search | Caisse 71 | 180 € |
| Google Search | Caisse 69 | 100 € |
| Google Search | Caisse 01+42 | 60 € |
| Google Search | IT dépannage | 60 € |
| Google Search | Web création | 30 € |
| Frais gestion/outils | | 70 € |
| Meta Ads (mois 1) | 0 €, tracking d'abord | 0 € |
| **Total** | | **500 €** |

**Budget 750 €/mois (scénario recommandé, mois 2+) :**
| Canal | Campagne | Budget/mois |
|---|---|---|
| Google Search | Caisse 71 | 210 € |
| Google Search | Caisse 69 | 130 € |
| Google Search | Caisse 01+42 | 70 € |
| Google Search | IT dépannage | 70 € |
| Google Search | Web création | 40 € |
| Meta Ads | Remarketing + prospection caisse | 150 € |
| Frais gestion/outils | | 80 € |
| **Total** | | **750 € ** |

**Budget 1000 €/mois (scénario scale mois 3+) :**
| Canal | Campagne | Budget/mois |
|---|---|---|
| Google Search | Caisse 71 | 250 € |
| Google Search | Caisse 69 | 170 € |
| Google Search | Caisse 01+42 | 80 € |
| Google Search | IT dépannage | 100 € |
| Google Search | Web création | 60 € |
| Meta Ads | Remarketing + prospection caisse | 200 € |
| Meta Ads | Prospection web/IT | 50 € |
| Frais gestion/outils | | 90 € |
| **Total** | | **1 000 €** |

---

## 4. PROJECTION CA CHIFFREE PAR SCENARIO

### Hypothèses de calcul (explicites et défendables)

| Paramètre | Valeur retenue | Source |
|---|---|---|
| CPC Google Search | 2,50 - 3,50 € (moy. 3,00 €) | Données réelles compte (2,46 - 4,51 €, plafond à 4 € appliqué) |
| Taux de conversion landing vers lead | 3 % (prudent) à 6 % (optimiste) | Benchmark B2B local Search, lander optimisé avec form above fold |
| Taux de closing lead vers vente | 50 % | Validé client |
| Panier caisse moyen | 3 000 € (première vente matériel + install) | Fourchette client 2 000-4 500 €, médiane conservative |
| LTV caisse (abonnement 59 €/mois x 36 mois) | + 2 124 € sur 3 ans | Économie unitaire validée |
| Panier web (création site) | 1 500 € (base, sans récurrent) | Fourchette 1 200-3 000 € |
| Panier IT (dépannage first contact) | 300 € (intervention ponctuelle) | Ticket moyen estimé, hors contrat |
| CPC Meta Ads | 0,80 - 1,50 € | Benchmark Meta B2B local France 2025 |
| Taux conv. Meta vers lead | 1,5 % (prospection) à 5 % (remarketing) | Benchmark |

### Tableau de projection mensuelle (régime stabilisé, mois 3+)

| Scenario | Budget total | Dont Google | Clics Google | Leads Google | Leads Meta | Leads total | Ventes closes | CA estimé mois | CAC réel |
|---|---|---|---|---|---|---|---|---|---|
| Lean 500 € | 500 € | 430 € | 143 | 4 à 9 | 0 | 4 à 9 | 2 à 4 | 6 000 à 12 000 € | 55 à 125 € |
| Recommandé 750 € | 750 € | 520 € | 173 | 5 à 10 | 3 à 8 | 8 à 18 | 4 à 9 | 12 000 à 27 000 € | 83 à 187 € |
| Scale 1 000 € | 1 000 € | 660 € | 220 | 7 à 13 | 4 à 10 | 11 à 23 | 5 à 11 | 15 000 à 33 000 € | 90 à 200 € |

**Détail scénario recommandé 750 €/mois (prudent vs optimiste) :**

Caisse 71 (210 €, Google) : 70 clics à 3,00 € CPC. 70 x 3 % = 2 leads. 70 x 6 % = 4 leads. 1 à 2 ventes. CA : 3 000 à 6 000 €.
Caisse 69 (130 €, Google) : 43 clics. 1 à 3 leads. 1 à 1 vente. CA : 3 000 €.
Meta caisse (150 €) : CPM 8 € = ~19 000 impressions. CTR 1,5 % = 285 clics vers lander. Conv 2 % = 6 leads. 3 ventes. CA : 9 000 €.
IT (70 €, Google) : 23 clics à 3 €. 1 lead (taux conv 4 %). 1 vente IT devis. CA : 500 € one-shot + potentiel contrat 59 €/mois.
Web (40 €, Google) : 16 clics. 1 lead. 1 vente possible. CA : 1 200 €.

**Total scenario recommandé prudent : 4 à 5 ventes, 12 000 à 18 000 € CA brut mensuel.**
**Total scenario recommandé optimiste : 8 à 9 ventes, 20 000 à 27 000 € CA brut mensuel.**

### Lecture LTV (pourquoi le CAC 125-200 € reste rentable)

Vente caisse = 3 000 € matériel + 59 €/mois abonnement. Sur 36 mois : LTV totale 5 124 €. Marge 50-66 % = 2 562 à 3 382 € de marge brute par client. CAC 200 € = ratio LTV:CAC de 13:1 à 17:1. C'est excellent. Le payback est atteint en 1 transaction sur le matériel seul.

### Honnêteté sur l'incertitude

Le taux de conversion landing est le paramètre le plus sensible et le moins connu. Avec les pages V2 actuelles (formulaire présent, message match à finaliser), 3 % est une hypothèse réaliste mais non garantie. En dessous de 2 %, les projections s'effondrent. C'est pourquoi le tracking formulaire est bloquant : sans lui, impossible de mesurer et d'optimiser ce paramètre.

Les 4 "conversions" de l'ancien compte ne fournissent AUCUNE base statistique (4 events sur 5 mois = bruit). Les projections ci-dessus reposent sur des benchmarks sectoriels, pas sur l'historique DCB.

---

## 5. SEQUENCEMENT

### Semaines 1-2 : Tracking + Structure (avant tout lancement)

| Tâche | Responsable | Durée |
|---|---|---|
| Créer page /merci.html avec snippet conversion formulaire | Développeur site | 2h |
| Purger les 5 actions de conversion orphelines dans Google Ads | Gestionnaire Ads | 30 min |
| Créer 3 nouvelles actions de conversion propres (formulaire, appel annonce, appel site) | Gestionnaire Ads | 1h |
| Instrumenter GA4 : events contact_form_submit + phone_click dans scripts.js | Développeur | 2h |
| Marquer les events GA4 comme Événements clés | Admin GA4 | 15 min |
| Importer events GA4 dans Google Ads | Gestionnaire Ads | 30 min |
| Vérifier auto-tagging Google Ads actif | Gestionnaire Ads | 5 min |
| Vérifier pixel Meta présent et actif | Gestionnaire Ads | 15 min |
| Déploiement V2 HTTPS + redirections 301 /service-it-360/ | Hébergeur | Bloquant site |
| Test de validation end-to-end (formulaire + appel) | Toute l'équipe | 30 min |
| Ajouter numéro de forwarding Google Ads (appels depuis site) | Gestionnaire Ads | 15 min |
| Vérifier GBP : coordonnées GPS + accès gestionnaire | Nathanael/Clement | 30 min |

### Semaines 3-4 : Lancement lean (Google Search uniquement)

| Tâche | Détail |
|---|---|
| Restructurer le compte : 5 nouvelles campagnes | Architecture section 3.2 |
| Charger la liste de négatifs de compte | Section 3.2 |
| Créer les groupes d'annonces prioritaires | Caisse 71 en 5 groupes, autres en 2-3 groupes |
| Rédiger les RSA (15 titres + 4 descriptions) | Message match par groupe et lander |
| Activer les extensions | Appel, lieu GBP, accroches, prix, liens annexes |
| Lancer Caisse 71 + Caisse 69 uniquement | Budget 330 €/mois, Maximiser clics, plafond CPC 4 € |
| Vérifier les premiers termes de recherche à J+3 | Exclure immédiatement les hors-sujet |

Caisse 01+42, IT et Web lancés en fin de semaine 4 si les deux premières campagnes ne montrent pas d'anomalie.

### Mois 2 : Apprentissage + Meta

| Tâche | Déclencheur |
|---|---|
| Analyser les termes de recherche réels | J+14 après lancement |
| Enrichir les négatifs | Toute requête hors-zone ou hors-offre |
| Activer Meta Ads (remarketing caisse) | Dès que pixel a 100 visiteurs cookiés |
| Analyser CTR par groupe (seuil kill : CTR < 2 %) | Fin mois 1 |
| Analyser CPC réel vs hypothèse | Recalibrer les plafonds si nécessaire |
| Première projection CAC réel vs projeté | Fin mois 1 si 5+ conversions |
| Activer Meta prospection caisse si remarketing positif | Mois 2 |

### Mois 3 : Scale sur ce qui marche

| Condition | Action |
|---|---|
| Campagne avec CPA < 150 € et 5+ conversions | Augmenter budget de 30 % |
| Campagne avec 0 conversion sur 50 clics | Mettre en pause, analyser termes |
| Caisse 69 (Lyon) viable | Créer page /caisse-enregistreuse/lyon/ dédiée si absente |
| 20 conversions en compte | Passer de Maximiser clics à Maximiser conversions |
| 50 conversions en compte | Tester Target CPA à 120 € sur Caisse 71 |

### Déclencheur d'embauche du commercial

Le commercial est rentable quand le digital génère des leads en excès de ce que les deux fondateurs peuvent traiter seuls.

Hypothèse de capacité actuelle : 2 fondateurs = 15-20 RDV/mois traités en parallèle du technique. Taux de closing 50 % = 7-10 ventes/mois maximum sans commercial.

**Seuil de déclenchement : 15 leads qualifiés/mois pendant 2 mois consécutifs, dont au moins 8 leads caisse.**

A 15 leads/mois et 50 % closing = 7 ventes + contrats. CA brut estimé : 21 000 € (7 x 3 000 €). Charge commercial (salaire + charges) : environ 3 000-3 500 €/mois. Le commercial s'autofinance dès le premier mois plein si il signe 2 clients de plus que ce que les fondateurs auraient fermé seuls.

Indicateur de surveillance mensuel : nombre de leads entrants (formulaires + appels depuis site + appels depuis annonce) traçables via GA4 + Google Ads. Si le tracking est cassé, ce KPI est aveugle et la décision d'embauche ne peut pas être objectivée.

---

## 6. POINTS D'ARBITRAGE POUR LE COUNCIL

### Arbitrage 1 : Lancer Google Ads avant ou après le déploiement V2 ?

Option A : Lancer sur V1 dès que le tracking est en place.
Pour : du CA vite, pas d'attente.
Contre : les pages V1 n'ont pas de message match optimisé, formulaire potentiellement limité, URLs différentes (redirections 301 à gérer).

Option B : Attendre V2 déployée.
Pour : message match parfait, formulaires optimisés, landers SEA construites.
Contre : 2 à 6 semaines de perte de leads.

Recommandation : Option B si V2 déployée sous 3 semaines. Option A sur les 2-3 pages les plus proches du prêt (dépannage IT, caisse 71) si V2 dépasse 6 semaines.

### Arbitrage 2 : Répartition budget Google vs Meta

Option A : 100 % Google Search au départ (500 €/mois Google, 0 € Meta).
Pour : haute intention, signal direct, apprentissage pur. Moins de variables à gérer.
Contre : coût par lead plus élevé, pas de warm-up audience.

Option B : 70 % Google / 30 % Meta dès le départ.
Pour : Meta CPC 3x moins cher, teste le remarketing très tôt.
Contre : pixel Meta sans données les 4 premières semaines = audience vide.

Recommandation : Option A en mois 1 (Google only), Option B à partir du mois 2 une fois que le pixel a accumulé 100-200 visiteurs.

### Arbitrage 3 : Répartition budget caisse vs web vs IT

Le CA vite = caisse (panier 3 000 € one-shot) et web (panier 1 200-3 000 € one-shot). IT dépannage génère du cash mais en petits montants, et l'infogérance nécessite un closing long.

Option A : 80 % caisse, 10 % IT, 10 % web.
Option B : 70 % caisse, 20 % web, 10 % IT (web est scalable rapidement si CPC bas).

Recommandation : Option B. La création de site a un CPC faible et un time-to-close court (devis en 24h). C'est un levier cash rapide souvent sous-estimé.

### Arbitrage 4 : Ancien compte Google Ads vs compte neuf

Le compte 6265603123 a un quality score historique nul (aucune conversion validée), mais les structures existent (moins de travail). Un compte neuf part avec un historique vierge mais peut bénéficier de bonnes pratiques dès le premier euro.

Recommandation : Réutiliser l'ancien compte APRES purge complète des actions de conversion orphelines et des campagnes mortes. Le quality score se reconstruit rapidement avec un bon CTR et des landers pertinentes. Ne pas garder de campagne à l'état PAUSED qui polluent le score.

### Arbitrage 5 : Attendre les témoignages réels avant de lancer ?

Les témoignages réels nommés (bloqués côté client) améliorent le taux de conversion landing de 10 à 30 % selon les benchmarks CRO. Mais les attendre peut reporter de 2 à 3 mois le lancement.

Recommandation : Lancer sans témoignages réels mais avec les preuves disponibles (NF525, délai 4h, prix 59 €). Planifier une mise à jour de la page lander dès réception des témoignages (1 jour de travail). Ne pas bloquer le SEA sur ce point.

---

## 7. INDICATEURS DE PILOTAGE (tableau de bord 5 métriques)

À suivre hebdomadairement, alerte déclenchée aux seuils indiqués.

| Metrique | Cible mois 1 | Alerte si | Source |
|---|---|---|---|
| Coût par lead (CPL) | < 120 € | CPL > 200 € 2 semaines | Google Ads + GA4 |
| Nombre de leads total | 5+/mois | 0 après 50 clics | GA4 keyEvents |
| CTR annonces Search | > 5 % | CTR < 2 % sur groupe | Google Ads |
| Taux conv. landing | > 3 % | < 1,5 % sur 30 clics | GA4 |
| Part de voix (IS) | > 40 % sur Caisse 71 | IS < 20 % | Google Ads rapports |

Règle de mise en pause immédiate : toute campagne ayant dépensé 100 € sans aucune conversion est mise en pause et auditée avant de reprendre.
