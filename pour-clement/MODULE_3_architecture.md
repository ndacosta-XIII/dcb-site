# MODULE 3 — Architecture SEO & Maillage Interne

> **Spécialisation :** Architecte SEO
> **Objectif :** Concevoir la structure de pages et le maillage interne pour maximiser PageRank, guider les crawlers, convertir les visiteurs.
> **Statut :** ✅ Analyse terminée — en attente du MASTER_PLAN pour exécution

---

## SYNTHÈSE EXÉCUTIVE

- **Pages actuelles du site :** 26
- **Pages à créer recommandées :** 14 (Phase 1 : 8 critiques | Phase 2 : 6 ouverture)
- **Score maillage actuel estimé : Moyen+** (footer riche ✅, breadcrumbs JSON-LD ✅, mais 0 cross-link inter-silos dans le body, 0 page locale, 0 cross-link inter-sous-pages dans un même silo)

**Verdict :** L'arborescence en 3 silos verticaux est saine et pure. Le maillage transversal est anémique : Google reçoit le signal "DCB Technologies = 3 piliers étanches" alors que la valeur business est dans la vente croisée.

---

## ARBORESCENCE RECOMMANDÉE

```
dcb-technologies.fr/
│
├── / (Accueil)                                          ← Niveau 0 — Pilier MARQUE
│
├── caisse-enregistreuse/                                ← Niveau 1 — Pilier #1 (HUB)
│   ├── cashmag/                                         ← Niveau 2 — Pilier produit (logiciel)
│   ├── boulangerie/                                     ← Niveau 2 — Satellite métier
│   ├── restaurant/                                      ← Niveau 2 — Satellite métier
│   ├── commerce-de-detail/                              ← Niveau 2 — Satellite métier
│   ├── coiffure/                                        ← Niveau 2 — Satellite métier
│   ├── borne-de-commande/                               ← Niveau 2 — Satellite produit
│   └── monnayeur/                                       ← Niveau 2 — Satellite produit
│
├── maintenance-informatique/                            ← Niveau 1 — Pilier #2 (HUB)
│   ├── maintenance-depannage/                           ← Niveau 2
│   ├── cloud-securite/                                  ← Niveau 2
│   ├── location-vente-installation/                     ← Niveau 2
│   └── outils-collaboratifs/                            ← Niveau 2
│
├── visibilite-web/                                      ← Niveau 1 — Pilier #3 (HUB)
│   ├── creation-site-internet/                          ← Niveau 2
│   ├── seo-sea-local/                                   ← Niveau 2
│   └── hebergement/                                     ← Niveau 2
│
├── 🆕 zones/                                            ← Niveau 1 — Pilier #4 GEO (À CRÉER)
│   ├── 🆕 lyon/                                         ← Niveau 2 — Hub local Lyon (69)
│   ├── 🆕 macon/                                        ← Niveau 2 — Hub local Mâcon (71)
│   ├── 🆕 chalon-sur-saone/                             ← Niveau 2 — Hub local Chalon (71)
│   ├── 🆕 villefranche-sur-saone/                       ← Niveau 2 — Hub local Villefranche (69)
│   ├── 🆕 bourg-en-bresse/                              ← Niveau 2 — Hub local Bourg (01)
│   ├── 🆕 roanne/                                       ← Niveau 2 — Hub local Roanne (42)
│   └── 🆕 paray-le-monial/                              ← Niveau 2 — Hub local Paray (71)
│
├── 🆕 caisse-enregistreuse/lyon/                        ← Niveau 2 — Combo service+ville #1
├── 🆕 caisse-enregistreuse/macon/                       ← Niveau 2 — Combo service+ville #2
├── 🆕 maintenance-informatique/lyon/                    ← Niveau 2 — Combo service+ville #3
├── 🆕 maintenance-informatique/macon/                   ← Niveau 2 — Combo service+ville #4
│
├── blog/                                                ← Niveau 1 — Pilier #5 contenu (HUB éditorial)
│   ├── digitaliser-point-de-vente/                      ← Niveau 2 — Article (existant)
│   └── 🆕 [11+ articles à créer cf. cluster topical]   ← Niveau 2
│
├── notre-adn/                                           ← Niveau 1 — Page institutionnelle (E-E-A-T)
├── contact/                                             ← Niveau 1 — Page conversion
│
└── mentions-legales/, confidentialite/, cgv/            ← Niveau 1 — Pages légales
```

**Profondeur de clic max :** 2 pour pages business, 3 pour articles blog.
**Pages orphelines actuelles à connecter :** `/blog/` et `/notre-adn/` ne sont pas dans la nav principale.

---

## MATRICE DE MAILLAGE — Top 25 liens prioritaires

| # | Page source | Page cible | Ancre recommandée | Type | Prio |
|---|---|---|---|---|---|
| 1 | `/caisse-enregistreuse/boulangerie/` | `/caisse-enregistreuse/monnayeur/` | "monnayeur automatique pour boulangerie" | Exact partial | 🔴 |
| 2 | `/caisse-enregistreuse/boulangerie/` | `/maintenance-informatique/maintenance-depannage/` | "maintenance informatique pour commerçants" | Partial | 🔴 |
| 3 | `/caisse-enregistreuse/restaurant/` | `/caisse-enregistreuse/borne-de-commande/` | "borne de commande pour restaurant" | Exact match | 🔴 |
| 4 | `/caisse-enregistreuse/restaurant/` | `/maintenance-informatique/cloud-securite/` | "sauvegarde cloud pour restaurateurs" | Partial | 🟠 |
| 5 | `/caisse-enregistreuse/commerce-de-detail/` | `/visibilite-web/creation-site-internet/` | "site e-commerce pour boutique" | Partial | 🟠 |
| 6 | `/caisse-enregistreuse/coiffure/` | `/visibilite-web/seo-sea-local/` | "référencement local pour salon de coiffure" | Partial | 🟠 |
| 7 | `/caisse-enregistreuse/` (hub) | `/maintenance-informatique/` (hub) | "maintenance informatique de votre commerce" | Partial | 🔴 |
| 8 | `/maintenance-informatique/` (hub) | `/caisse-enregistreuse/` (hub) | "solutions de caisse enregistreuse" | Exact match | 🔴 |
| 9 | `/visibilite-web/` (hub) | `/caisse-enregistreuse/cashmag/` | "logiciel CashMag certifié NF525" | Brand+keyword | 🟠 |
| 10 | `/maintenance-informatique/cloud-securite/` | `/caisse-enregistreuse/cashmag/` | "back-office cloud CashMag" | Brand+keyword | 🟠 |
| 11 | `/maintenance-informatique/outils-collaboratifs/` | `/maintenance-informatique/cloud-securite/` | "sécurité Microsoft 365" | Partial | 🟢 |
| 12 | `/visibilite-web/seo-sea-local/` | 🆕 `/zones/lyon/` | "SEO local à Lyon" | Exact partial | 🔴 |
| 13 | `/visibilite-web/seo-sea-local/` | 🆕 `/zones/macon/` | "agence SEO Mâcon" | Exact partial | 🔴 |
| 14 | 🆕 `/zones/lyon/` | 🆕 `/caisse-enregistreuse/lyon/` | "caisse enregistreuse à Lyon" | Exact match | 🔴 |
| 15 | 🆕 `/zones/lyon/` | 🆕 `/maintenance-informatique/lyon/` | "maintenance informatique à Lyon" | Exact match | 🔴 |
| 16 | `/contact/` | 🆕 `/zones/[ville]/` × 7 | nom de la ville | Exact local | 🟠 |
| 17 | `/notre-adn/` | `/maintenance-informatique/` | "expertise informatique 360°" | Brand+context | 🟢 |
| 18 | `/blog/digitaliser-point-de-vente/` | `/caisse-enregistreuse/cashmag/` | "logiciel de caisse CashMag" | Exact match | 🔴 |
| 19 | `/blog/digitaliser-point-de-vente/` | `/caisse-enregistreuse/borne-de-commande/` | "borne de commande tactile" | Exact match | 🟠 |
| 20 | Accueil `/` | `/blog/` | "Conseils & guides DCB" | Brand+context | 🟠 |
| 21 | Accueil `/` | `/notre-adn/` | "Découvrir notre équipe" | Generic-OK | 🟠 |
| 22 | `/caisse-enregistreuse/cashmag/` | `/caisse-enregistreuse/` (hub) | "Voir toutes nos solutions de caisse" | Generic+context | 🟠 |
| 23 | `/maintenance-informatique/maintenance-depannage/` | `/contact/` | "Demander une intervention" | CTA | 🔴 |
| 24 | Footer (toutes pages) | 🆕 `/zones/[ville]/` × 7 | nom ville en gras | Exact local | 🔴 |
| 25 | `/caisse-enregistreuse/[métier]/` | 🆕 `/blog/[article-métier]/` | "Guide complet [métier]" | Exact partial | 🟢 |

**Ratio cible profil d'ancres internes :**
- 40% Exact / Partial match
- 25% Brand + keyword
- 20% Longue traîne contextuelle
- 10% Marque seule
- 5% Generic + contexte (jamais "cliquez ici" seul)

---

## ANALYSE PAR AXE

### AXE 1 — ARBORESCENCE
**Constat :** Structure 3 silos propre, profondeur 2, URLs FR kebab-case ✅. Mais 0 page locale, blog/notre-adn orphelins de la nav.
**Prescription :**
- 🔴 Créer pilier `/zones/` avec 7 hubs locaux
- 🔴 Ajouter `/blog/` et `/notre-adn/` dans la nav principale
- 🟠 Créer 4 pages "service × ville" (caisse+lyon, caisse+macon, IT+lyon, IT+macon)

### AXE 2 — PILIERS
**5 piliers identifiés :**
| Pilier | Type | Satellites actuels | Cibles |
|---|---|---|---|
| `/caisse-enregistreuse/` | Service vertical | 7 | 11 |
| `/maintenance-informatique/` | Service vertical | 4 | 8 |
| `/visibilite-web/` | Service vertical | 3 | 5 |
| `/blog/` | Contenu éditorial | 1 | 12+ |
| 🆕 `/zones/` | Géographique | 0 | 7 |

**Règles pilier ↔ satellite (à appliquer strictement) :**
1. Chaque satellite linke vers son pilier (1 lien minimum, ancre exact ou partielle)
2. Chaque pilier linke vers tous ses satellites (cards de navigation)
3. Chaque satellite linke vers 2-3 satellites frères dans le même silo
4. Chaque satellite linke vers 1-2 satellites d'un autre silo (cross-link inter-piliers)
5. Le pilier `/zones/[ville]/` linke vers tous les services disponibles dans cette ville

### AXE 3 — MAILLAGE
**Constat :** Footer riche ✅, nav avec dropdowns ✅, breadcrumbs JSON-LD ✅. Mais 0 cross-link inter-silos body, 0 cross-link inter-sous-pages d'un même silo, breadcrumbs absents visuellement.

**Pages prioritaires à recevoir le plus de liens internes :**
| Rang | Page | Liens reçus | Cible | Type |
|---|---|---|---|---|
| 1 | `/contact/` | ~6 | **40+** | Conversion ★★★★★ |
| 2 | `/caisse-enregistreuse/` | ~10 | **30+** | Pilier #1 |
| 3 | `/maintenance-informatique/` | ~6 | **25+** | Pilier #2 |
| 4 | `/caisse-enregistreuse/cashmag/` | ~3 | **20+** | Différenciateur |
| 5 | `/visibilite-web/` | ~5 | **20+** | Pilier #3 |
| 6 | 🆕 `/zones/lyon/` | 0 | **15+** | Pilier local #1 |
| 7 | 🆕 `/zones/macon/` | 0 | **12+** | Pilier local #2 |

**Prescription :**
- 🔴 Créer matrice cross-links inter-silos (cf. Top 25)
- 🔴 Implémenter fil d'Ariane visuel sur 26 pages (composant `scripts.js`)
- 🔴 Augmenter maillage vers `/contact/` (cible 40+ liens reçus)
- 🟠 Section "Vous pourriez aussi avoir besoin de" en bas de chaque sous-page (3 cards : 2 même silo + 1 cross-silo)

### AXE 4 — PAGES LOCALES
**Constat :** 🔴 Aucune page locale → plus gros trou SEO du site.

**Stratégie en 2 vagues :**
- **Vague 1 (P0)** : 7 hubs locaux `/zones/{ville}/` — présentent toute l'offre DCB pour cette ville
- **Vague 2 (P1)** : 4 pages "service × ville" prioritaires — rankent sur longue traîne ultra-ciblée

**Contenu minimum par page locale (anti-duplicate) :**
- H1 inclut nom de la ville
- Intro 150-200 mots 100% rédigée pour la ville
- 1 témoignage client localisé
- Stats locales (distance, délai depuis Paray/Dardilly)
- Mini-carte
- 3-5 FAQ spécifiques à la ville
- **Min 400 mots uniques** total
- Internal linking vers services pertinents

**Template type page locale :** voir document complet original (10 sections : Hero, Trust bar locale, Problème ville-spécifique, Services DCB disponibles, Zones couvertes, Témoignage local, Carte, Processus, FAQ locale, CTA final)

### AXE 5 — ANCRES
**Cas problématiques détectés :**

| Page | Ancre actuelle | Recommandée |
|---|---|---|
| Accueil card pilier Caisse | `"Découvrir"` | `"Découvrir nos caisses NF525"` |
| Accueil card pilier IT | `"Découvrir"` | `"Découvrir notre maintenance informatique"` |
| Accueil card pilier Web | `"Découvrir"` | `"Découvrir nos services web"` |

**Ancres à BANNIR :** "cliquez ici" seul, "en savoir plus" seul, URL nue, ancre identique répétée 10+ fois sur la même page, sur-optimisation 100% exact match.

**Prescription :**
- 🔴 Réviser les 3 ancres "Découvrir" de l'Accueil (5 min, gain immédiat)
- 🟠 Audit page-par-page : chaque sous-page doit avoir min 1 ancre longue traîne vers son pilier + 1 ancre exact match vers une page sœur

---

## PLAN D'ACTION SYNTHÉTIQUE (à intégrer au MASTER_PLAN)

### 🔴 P0 — Architecture
1. Créer pilier `/zones/` + 7 hubs locaux (Lyon, Mâcon, Chalon, Villefranche, Bourg, Roanne, Paray)
2. Implémenter cross-links body inter-silos : 25 liens prioritaires
3. Section "Vous pourriez aussi avoir besoin de" en bas des 14 sous-pages
4. Fil d'Ariane visuel sur 26 pages (composant scripts.js)
5. Réviser les 3 ancres "Découvrir" de l'accueil
6. Ajouter `/blog/` et `/notre-adn/` dans la nav principale

### 🟠 P1 — Approfondissement
7. Créer 4 pages service × ville (caisse+lyon, caisse+macon, IT+lyon, IT+macon)
8. Augmenter maillage vers `/contact/` (CTA persistant en milieu de page)
9. Plan éditorial blog : 12 articles cluster sur 6 mois

### 🟢 P2 — Optimisation continue
10. Audit semestriel des ancres
11. Mise à jour pages locales avec retours clients réels
12. Schema BreadcrumbList sur sous-pages métiers

---

## OUTPUT JSON

```json
{
  "pages_existantes": 26,
  "pages_a_creer_total": 14,
  "pages_a_creer_p0": 8,
  "pages_a_creer_p1": 6,
  "silos_identifies": [
    "Caisse Enregistreuse (vertical service) — 7 satellites + 4 locales = 11",
    "Maintenance Informatique (vertical service) — 4 satellites + 4 locales = 8",
    "Visibilité Web (vertical service) — 3 satellites + 2 locales = 5",
    "Zones d'intervention (horizontal géographique) — 7 hubs à créer",
    "Blog (vertical éditorial) — 1 actuel + 11 à créer en cluster topical"
  ],
  "regles_maillage_cles": [
    "Chaque satellite linke vers son pilier",
    "Chaque pilier linke vers tous ses satellites",
    "Chaque sous-page linke vers 2-3 sœurs du même silo",
    "Chaque sous-page linke vers 1-2 cross-silos",
    "Section 'Vous pourriez aussi avoir besoin de' obligatoire en bas",
    "/contact/ doit recevoir 40+ liens internes",
    "Profil ancres : 40% exact/partial, 25% brand+kw, 20% longue traîne, 10% marque, 5% generic+contexte",
    "Profondeur clic max : 2 pour business, 3 pour blog",
    "Pages locales : min 400 mots uniques + témoignage local + carte + 5 FAQ"
  ]
}
```
