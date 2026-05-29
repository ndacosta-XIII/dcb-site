# Plan de rédaction : silo informatique

**Référence qualité** : silo caisse (finalisé)
**Date d'audit** : 2026-04-24
**Pages ciblées** : 6 (hub + 5 sous-pages, incluant la nouvelle `infogerance-pme/`)

> Synthèse : le silo IT est déjà à un niveau de complétude élevé (85 à 95 %). Les gaps sont principalement des enrichissements ciblés, pas une rédaction de fond. Zéro em dash détecté dans le silo.

---

## Synthèse par page

| Page | Narration | Complétude estimée | Effort enrichissement |
|---|---|:---:|---|
| `maintenance-informatique/` (hub) | informationnel (silo entier) | 85 % | court (meta, intro services) |
| `maintenance-depannage/` | urgence | 95 % | négligeable |
| `infogerance-pme/` | partenariat / coût maîtrisé | 92 % | moyen (section tarifs/offres) |
| `cloud-securite/` | éducation | 88 % | moyen (problème + cas d'usage) |
| `location-vente-installation/` | décision | 88 % | moyen (TCO + process) |
| `outils-collaboratifs/` | démo-first | 87 % | moyen (features + différenciateur) |

---

## 1. Hub `maintenance-informatique/index.html`

**État** : trust bar, stats, problème/solution, pricing, features, témoignages, timeline, cross-sell, FAQ (6 Q/R), JSON-LD Service + FAQ. Tous présents et cohérents.

**Blocs à produire** :
1. **Meta description** (optionnel) `court`
   Actuel : 174 chars, un peu longue. Cible : 150-160 chars, même promesse.
2. **Title tag** `court` : actuel `Maintenance Informatique PME : Intervention <4h | DCB Technologies` (conforme, pas de changement recommandé).
3. **Section "Notre offre IT" intro** (optionnel) `moyen`
   3 lignes entre hero et stats pour clarifier le périmètre des 5 sous-pages (dépannage, infogérance, cloud, location, outils). Gain SEO discret, clarté parcours.

---

## 2. `maintenance-depannage/` (narration urgence)

**État** : trust bar urgence, stats <4h/7j7/0, problème, pricing 3 formules, features, portrait techniciens, témoignages x3, timeline 4 étapes, cross-sell, FAQ 6 Q/R, JSON-LD complets.

**Blocs à produire** : aucun. Page de référence du silo IT.

---

## 3. `infogerance-pme/` (narration partenariat / coût maîtrisé)

**État** : trust bar, problème/solution comparatif (CDI / prestataire au ticket / DCB), features 6 items, comparatif 2x5, témoignages x3, timeline onboarding 3 étapes, cross-sell, FAQ 6 Q/R, JSON-LD.

**Gap principal** : pas de section **offres / tarifs**. Contrairement au pattern `boulangerie/` ou `dépannage/` qui affichent 3 formules + prix.

**Blocs à produire** :
1. **Section "Nos formules d'infogérance"** `moyen`
   Placer avant le cross-sell. 3 cards (Starter / PME Complète / Entreprise sur mesure) alignées sur le pattern pricing du silo caisse. Prix à valider avec DCB avant publication (placeholders sinon).
2. **JSON-LD Service** : ajouter un bloc `offers` si les prix sont validés. Sinon laisser tel quel.

---

## 4. `cloud-securite/` (narration éducation)

**État** : trust bar (99.9 % / AES-256 / 3-2-1 / RGPD), problème, pricing, features, stats, timeline, cross-sell, FAQ 6 Q/R, JSON-LD.

**Blocs à produire** :
1. **Enrichissement section Problème/Solution** `moyen`
   Passer de ~70 mots par card à ~100 mots. Contextualiser chaque menace avec un scénario métier réel (panne disque sans sauvegarde / cryptolocker sur partage réseau / phishing sur comptable).
2. **Section "Cas d'usage par profil"** (optionnel) `moyen`
   3 personas PME (commerce, service, artisan) avec leurs enjeux cloud/sécurité distincts. Renforce la narration éducation sans gonfler la FAQ.
3. **Meta description** (optionnel) `court`
   Actuelle : 175 chars, trop longue. Cible : 150-160.

---

## 5. `location-vente-installation/` (narration décision)

**État** : trust bar décision (sans apport / garantie 5 ans / installation incluse / support 7j/7), comparatif "louer vs acheter" 2 cards, features 4 cards, process 4 étapes, FAQ 6 Q/R, JSON-LD.

**Blocs à produire** :
1. **Enrichissement "Louer vs Acheter"** `court`
   Ajouter un sous-bullet TCO chiffré sur 3 ans par card (ex : "LLD 36 mois : ~110 €/mois TTC, matériel renouvelé en fin de contrat").
2. **Enrichissement process 4 étapes** `moyen`
   Passer de ~80 à ~100-110 mots par étape. Détails concrets (audit sur site, tests, formation des équipes, SAV activé).
3. **Section "ROI visible" ou "Récapitulatif budgétaire"** (optionnel) `moyen`
   Tableau comparatif simple (achat cash vs LLD) pour cristalliser la décision avant la FAQ.

---

## 6. `outils-collaboratifs/` (narration démo-first)

**État** : trust bar M365/Workspace, features 4 cards, stats productivité, process 4 étapes, FAQ 6 Q/R, JSON-LD.

**Blocs à produire** :
1. **Enrichissement "Les outils"** `moyen`
   Passer de ~80 à ~120 mots par feature. Ajouter un cas d'usage concret par outil (Teams pour atelier distant, OneDrive pour partage devis/factures, SharePoint pour intranet interne).
2. **Matrice décisionnelle "Microsoft 365 vs Google Workspace"** `moyen`
   Tableau 5-6 critères (interface, intégration Office, budget, partage externe, gouvernance) avec recommandation DCB selon le profil PME. Signal fort sur la narration démo-first.
3. **Stats productivité** `court`
   Remplacer les chiffres génériques par des métriques DCB client (temps gagné déploiement, nb jours formation, taux adoption) si disponibles. Sinon marquer explicitement placeholder.

---

## Témoignages placeholders

Les 3 hubs IT (hub + 2 sous-pages avec carrousel) ont déjà 3 à 4 témoignages avec prénom + initiale + entreprise fictive + ville. Rien à ajouter sauf si l'utilisateur demande un carrousel de 4 à la place de 3.

Marquage recommandé : ajouter `<!-- PLACEHOLDER : à remplacer par vrai témoignage client -->` autour de chaque bloc si absent (à vérifier page par page lors de l'exécution).

---

## JSON-LD : vérifications rapides

| Page | FAQPage | Service | À faire |
|---|:---:|:---:|---|
| Hub | ✓ | ✓ | RAS |
| Dépannage | ✓ | ✓ | RAS |
| Infogérance | ✓ | ✓ | ajouter `offers` si prix validés |
| Cloud | ✓ | ✓ | synchroniser description avec enrichissement problème |
| Location | ✓ | ✓ | RAS |
| Outils | ✓ | ✓ | RAS |

---

## Maillage interne inter-pilier (contexte body)

Le cross-sell 3-cards est déjà planifié par `docs/harmonization-plan-informatique.md` (section "Matrice de maillage cible"). Les liens contextuels body à injecter pendant la rédaction de contenu :

- `dépannage/` : mention "intégration caisse CashMag" → `/caisse-enregistreuse/cashmag/`
- `cloud-securite/` : mention "conformité NF525" → `/caisse-enregistreuse/`
- `location-vente-installation/` : mention "borne de commande" → `/caisse-enregistreuse/borne-de-commande/`
- `outils-collaboratifs/` : mention "SEO local équipe" → `/visibilite-web/seo-sea-local/`

À vérifier si déjà présents pendant l'enrichissement des sections body.

---

## Ordre d'exécution recommandé

1. **Pilote : `infogerance-pme/`** (gap le plus clair : section tarifs manquante)
   Valider le pattern avec l'utilisateur avant de répliquer.
2. **`cloud-securite/`** (enrichissement problème + cas d'usage)
3. **`location-vente-installation/`** (TCO + process)
4. **`outils-collaboratifs/`** (features + matrice M365/Google)
5. **Hub** (intro services + tweak meta)
6. **`maintenance-depannage/`** : rien à faire (page gabarit)

---

## Règles absolues pendant la rédaction

- Zéro em dash (`—`). Grep de vérification après chaque fichier.
- Respecter la narration unique de chaque page (cf. tableau `CLAUDE.md` Phase 7).
- Ne jamais modifier header/footer (scripts.js) sans trigger `13header` / `13footer`.
- Ne pas toucher aux classes Tailwind harmonisées par `/silo-structure`.
- Chiffres placeholders marqués explicitement (commentaire HTML ou TODO visible) tant que non validés par DCB.

---

**Document généré le 2026-04-24.**
**À valider avant passage à l'étape 2 (pilote) du workflow `/silo-contenu`.**
