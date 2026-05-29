# Plan d'harmonisation : silo informatique

**Référence** : `docs/silo-caisse-design-dna.md`
**Pages ciblées** : 5 (hub + 4 sous-pages)
**Date d'audit** : 2026-04-23

> ⚠️ **Rappel** : ce plan harmonise les atomes visuels et les micro-structures. Les narrations uniques (Phase 7 du CLAUDE.md) sont préservées. L'ordre des sections ne change pas.

## ✅ Décisions utilisateur validées (2026-04-23)

1. **Hero H1 sur sous-pages IT** : option **A** (aligner sur DNA caisse `text-4xl md:text-[2.75rem] lg:text-5xl`)
2. **Orange `#F57C00` sur quote icons et ratings** : option **B** (accent métier de chaque sous-page)
   - Dépannage : `#EF4444`
   - Cloud-sécurité : `#0D9488`
   - Location : `#0B3D91`
   - Outils collaboratifs : `#A855F7`
3. **Trust bar** : **OUI**, à créer sur les 4 sous-pages, personnalisée par narration
4. **Location card comparative border-t-4** : option **B** (remplacer par pattern DNA `<div class="h-[3px] bg-gradient-to-r from-[#0B3D91] to-[#345baf]"></div>` pour cohérence)

---

## Synthèse globale des divergences

| Divergence | Hub | Dépannage | Cloud | Location | Outils | Sévérité |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| Breadcrumb visuel `<nav aria-label>` absent | ✓ (ok hub) | ⚠️ textuel | ❌ absent | ❌ absent | ❌ absent | HAUTE |
| Date E-E-A-T "Mis à jour le" absente | ❌ | ❌ | ❌ | ❌ | ❌ | HAUTE |
| JSON-LD Service absent | ❌ | ❌ | ❌ | ❌ | ❌ | HAUTE |
| JSON-LD BreadcrumbList | ⚠️ incomplet | ✓ | ✓ | ✓ | ✓ | BASSE |
| Trust bar pattern DNA (4 items + séparateurs) | ✓ | ❌ absent | ❌ absent | ❌ absent | ❌ absent | HAUTE |
| Hero H1 trop gros (`text-5xl md:text-6xl` vs DNA) | ok | ❌ | ❌ | ❌ | ❌ | MOYENNE |
| Pricing cards `rounded-xl` au lieu de `rounded-2xl` | n/a | ❌ | ❌ | ❌ | ❌ | MOYENNE |
| Pricing featured `ring-4 .../5` au lieu de `ring-2 ...` | n/a | ❌ | ok | n/a | ok | MOYENNE |
| Orange `#F57C00` sur quote icons / ratings (hors CTA) | ok | ❌ | ❌ | ❌ | ❌ | MOYENNE |
| Hub : CTA `rounded-[14px]` | ❌ | n/a | n/a | n/a | n/a | BASSE |
| Hub : cards avec `border border-slate-100` (règle zéro bordure) | ❌ | n/a | n/a | n/a | n/a | MOYENNE |
| Location : `border-t-4 border-[#0B3D91]` (bordure colorée) | n/a | n/a | n/a | ⚠️ à valider | n/a | BASSE |

Légende : ✓ conforme · ❌ à corriger · ⚠️ ambigu, à valider · n/a non applicable

---

## ⚠️ Ambiguïtés à trancher avec l'utilisateur AVANT application

### 1. Hero H1 sur sous-pages IT : `text-5xl md:text-6xl`
Le DNA caisse utilise `text-4xl md:text-[2.75rem] lg:text-5xl`. Les 4 sous-pages IT utilisent une taille plus grande.

**Options :**
- **A.** Aligner strictement sur le DNA caisse (cohérence maximale).
- **B.** Conserver la surcharge comme signature du silo IT (narration "urgence/expertise" plus affirmée).

**Recommandation** : A (alignement). L'écart de taille n'apporte pas de valeur narrative et crée du bruit visuel inter-silos.

### 2. Orange `#F57C00` sur quote icons et ratings dans les témoignages
Le CLAUDE.md dit "Orange `#F57C00` uniquement sur les boutons CTA, jamais comme couleur de section". Les 3 sous-pages IT (et dépannage selon check) utilisent `#F57C00` sur les icônes de quote et les étoiles de notation.

**Options :**
- **A.** Remplacer par `#0B3D91` (primary) sur les quote icons + ratings.
- **B.** Remplacer par l'accent métier de chaque page (EF4444 urgence, 0D9488 cloud, 0B3D91 location, A855F7 outils).
- **C.** Conserver l'orange comme marqueur "qualité client" cross-page.

**Recommandation** : B. Chaque sous-page a un accent métier, l'utiliser renforce la narration sans violer la règle CTA.

### 3. Trust bar absent sur les 3 sous-pages récentes (cloud, location, outils)
Le DNA prévoit une trust bar après le hero. Les 3 sous-pages n'en ont pas.

**Options :**
- **A.** Ajouter une trust bar personnalisée par narration (4 items) sur les 3 pages.
- **B.** Considérer que la trust bar est optionnelle selon narration (Phase 7).

**Recommandation** : A. Signal de réassurance important, gain SEO/UX, facile à produire (déjà fait pour le silo caisse en Phase 7).

### 4. Location-vente-installation : `border-t-4 border-[#0B3D91]` en haut d'une card
Bordure 4px colorée sur une card comparative. Pas au DNA mais cohérent avec le pattern "top border gradient" utilisé sur les cross-sell inter-silo.

**Options :**
- **A.** Remplacer par un `h-[3px] bg-gradient-to-r` (pattern inter-silo).
- **B.** Conserver car c'est une section différenciateur unique.

**Recommandation** : B, mais vérifier cohérence visuelle lors de l'application.

---

## Corrections par page (actionables)

### 1. `maintenance-informatique/index.html` (hub IT)

**HAUTE**
- [ ] Ajouter date E-E-A-T `<p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">Mis à jour le <time datetime="2026-04-23">23 avril 2026</time></p>` avant le footer
- [ ] Ajouter JSON-LD Service (provider `@id`, areaServed 71/69/01/42 + villes principales)

**MOYENNE**
- [ ] Retirer `border border-slate-100` des feature cards section "Problèmes IT" (lignes ~174, 180, 186), garder `tonal-shift-elevation` seul
- [ ] Compléter JSON-LD BreadcrumbList (3 positions minimum) si incomplet

**BASSE**
- [ ] Remplacer `rounded-[14px]` par `rounded-lg` sur les CTA hero (lignes 74, 77). Cosmétique : `rounded-lg` = 14px dans la config Tailwind du projet donc même rendu mais meilleure sémantique.

### 2. `maintenance-informatique/maintenance-depannage/index.html` (dépannage, narration urgence)

**HAUTE**
- [ ] Remplacer breadcrumb textuel (ligne ~49) par pattern DNA `<nav aria-label="Fil d'Ariane">` avec `<ol>` + séparateurs `·`
- [ ] Ajouter date E-E-A-T en fin de page
- [ ] Ajouter JSON-LD Service
- [ ] Ajouter trust bar (4 items personnalisés "urgence") après le hero

**MOYENNE**
- [ ] Aligner hero H1 : `text-4xl md:text-[2.75rem] lg:text-5xl` (option A recommandée)
- [ ] Pricing featured card : `ring-4 ring-[#EF4444]/5` → `ring-2 ring-[#EF4444]` (ligne ~154)
- [ ] Quote icons et ratings témoignages : `#F57C00` → `#EF4444` (accent urgence, option B)
- [ ] Ajouter classe `cta-final dcb-reveal` sur le wrapper CTA final (ligne ~426)

### 3. `maintenance-informatique/cloud-securite/index.html` (cloud, narration éducation)

**HAUTE**
- [ ] Ajouter breadcrumb visuel HTML (JSON-LD déjà présent)
- [ ] Ajouter date E-E-A-T
- [ ] Ajouter JSON-LD Service
- [ ] Ajouter trust bar personnalisée "éducation/sécurité" (ex : "99.9% uptime", "Chiffrement bout-en-bout", "Certifié ISO 27001 partenaires", "Conforme RGPD")

**MOYENNE**
- [ ] Hero H1 : `text-5xl md:text-6xl` → `text-4xl md:text-[2.75rem] lg:text-5xl`
- [ ] Pricing cards : `rounded-xl` → `rounded-2xl`
- [ ] Quote icons + ratings témoignages : `#F57C00` → `#0D9488` (accent cloud)

### 4. `maintenance-informatique/location-vente-installation/index.html` (location, narration décision)

**HAUTE**
- [ ] Ajouter breadcrumb visuel HTML
- [ ] Ajouter date E-E-A-T
- [ ] Ajouter JSON-LD Service
- [ ] Ajouter trust bar personnalisée "décision/flexibilité" (ex : "Location ou achat", "Installation incluse", "Support 7j/7", "Matériel OXHOO/AURES/Lenovo")

**MOYENNE**
- [ ] Hero H1 : `text-5xl md:text-6xl` → `text-4xl md:text-[2.75rem] lg:text-5xl`
- [ ] Pricing cards : `rounded-xl` → `rounded-2xl`
- [ ] Quote icons + ratings : `#F57C00` → `#0B3D91` (primary, accent de la page)

**À VALIDER**
- [ ] Card comparative avec `border-t-4 border-[#0B3D91]` : garder ou remplacer par `h-[3px] bg-gradient-to-r from-[#0B3D91] to-[#345baf]` ?

### 5. `maintenance-informatique/outils-collaboratifs/index.html` (outils, narration démo-first)

**HAUTE**
- [ ] Ajouter breadcrumb visuel HTML
- [ ] Ajouter date E-E-A-T
- [ ] Ajouter JSON-LD Service
- [ ] Ajouter trust bar personnalisée "démo/collaboration" (ex : "Microsoft 365 partenaire", "Google Workspace expert", "Migration sans perte", "Formation incluse")

**MOYENNE**
- [ ] Hero H1 : `text-5xl md:text-6xl` → `text-4xl md:text-[2.75rem] lg:text-5xl`
- [ ] Pricing cards : `rounded-xl` → `rounded-2xl`
- [ ] Quote icons + ratings : `#F57C00` → `#A855F7` (accent outils collaboratifs)

---

## Patterns de sections manquants (transversal)

### Trust bar (DNA 2.2) à injecter sur 3 pages + éventuellement dépannage

Template à personnaliser par narration :
```html
<section class="py-6 bg-white border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4 dcb-stagger">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#ACCENT_METIER] text-3xl" style="font-variation-settings:'FILL' 1">ICON</span>
        <span class="font-semibold text-base md:text-xl text-slate-500">Métrique ou engagement</span>
      </div>
      <span class="hidden md:inline text-slate-300 text-xl">|</span>
      <!-- 3 autres items -->
    </div>
  </div>
</section>
```

### Breadcrumb visuel (DNA section 6)
```html
<nav aria-label="Fil d'Ariane" class="max-w-7xl mx-auto px-6 pt-6 text-sm text-slate-500">
  <ol class="flex flex-wrap items-center gap-2">
    <li><a href="../../index.html" class="hover:text-[#0B3D91]">Accueil</a></li>
    <li aria-hidden="true">·</li>
    <li><a href="../index.html" class="hover:text-[#0B3D91]">Maintenance informatique</a></li>
    <li aria-hidden="true">·</li>
    <li aria-current="page" class="text-[#0B3D91] font-medium">Nom de la page</li>
  </ol>
</nav>
```

### Date E-E-A-T (DNA section 7)
```html
<p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">
  Mis à jour le <time datetime="2026-04-23">23 avril 2026</time>
</p>
```
À insérer en bas du main, avant le footer.

### JSON-LD Service (DNA section 8) : modèle à personnaliser par page
```json
{
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Maintenance informatique entreprise [spécialité]",
  "description": "Description de 150-200 caractères.",
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
  "serviceType": "Maintenance informatique",
  "areaServed": [
    {"@type":"AdministrativeArea","name":"Saône-et-Loire (71)"},
    {"@type":"AdministrativeArea","name":"Rhône (69)"},
    {"@type":"AdministrativeArea","name":"Ain (01)"},
    {"@type":"AdministrativeArea","name":"Loire (42)"},
    {"@type":"City","name":"Lyon"},
    {"@type":"City","name":"Mâcon"},
    {"@type":"City","name":"Chalon-sur-Saône"},
    {"@type":"City","name":"Paray-le-Monial"}
  ],
  "url": "https://dcb-technologies.fr/maintenance-informatique/[slug]/"
}
```

---

## Maillage interne silo IT (état actuel)

### Présent
- Hub IT → 4 sous-pages IT ✓
- Sous-pages IT → hub IT (retour) ✓
- Sous-pages IT → CTA `/contact/` ✓
- Sous-pages IT → liens cross-sell vers 2 sous-pages IT sœurs ✓
- Hub IT → cross-sell caisse + web (2 cards) ✓

### Manquant (traité ci-dessous dans la matrice)

## Matrice de maillage cible (étape 3 validée)

Pattern DNA (section 2.12) appliqué : section "3 cards inter-silo" avant la FAQ sur chaque sous-page IT. Combinaison **1 intra-silo IT + 1 caisse + 1 web** pour maximiser le crosswalk entre piliers.

### Hub IT : cross-sell inter-pilier
**Décision** : rester à **2 cards** (caisse hub + web hub). Un hub de pilier relie aux 2 autres piliers, pas besoin d'une 3ème card. Structure actuelle conservée, mais pattern DNA à appliquer (gradient top 3px + hover tinté bleu).

### Sous-page `maintenance-depannage/` (narration urgence)

| Position | Cible | Couleur accent | Icône | Ancre suggérée |
|---|---|---|---|---|
| Card 1 (intra-IT) | `/maintenance-informatique/cloud-securite/` | `#0D9488` | `shield` | "Sécurisez vos données avant l'incident" |
| Card 2 (caisse) | `/caisse-enregistreuse/` | `#0B3D91` | `point_of_sale` | "Panne caisse : SAV matériel inclus" |
| Card 3 (web) | `/visibilite-web/hebergement/` | `#0D9488` | `dns` | "Hébergement monitoré 24/7" |

**Liens contextuels body** (à ajouter dans le corps de page) :
- Mentionner "intégration avec caisse CashMag" dans une FAQ ou section technique → lien vers `/caisse-enregistreuse/cashmag/`
- Dans les features, mentionner "monitoring serveur" → lien vers `/visibilite-web/hebergement/`

### Sous-page `cloud-securite/` (narration éducation)

| Position | Cible | Couleur accent | Icône | Ancre suggérée |
|---|---|---|---|---|
| Card 1 (intra-IT) | `/maintenance-informatique/maintenance-depannage/` | `#EF4444` | `build_circle` | "Panne détectée : intervention 4h" |
| Card 2 (caisse) | `/caisse-enregistreuse/` | `#0B3D91` | `verified_user` | "Sécurité données NF525" |
| Card 3 (web) | `/visibilite-web/hebergement/` | `#0D9488` | `dns` | "Hébergement sécurisé SSL" |

**Liens contextuels body** :
- Mentionner "conformité NF525 pour vos caisses" → lien vers `/caisse-enregistreuse/` ou `/caisse-enregistreuse/cashmag/`
- Dans RGPD, mentionner "hébergement conforme" → lien vers `/visibilite-web/hebergement/`

### Sous-page `location-vente-installation/` (narration décision)

| Position | Cible | Couleur accent | Icône | Ancre suggérée |
|---|---|---|---|---|
| Card 1 (intra-IT) | `/maintenance-informatique/maintenance-depannage/` | `#EF4444` | `support_agent` | "SAV inclus après installation" |
| Card 2 (caisse) | `/caisse-enregistreuse/` | `#0B3D91` | `point_of_sale` | "Matériel TPV OXHOO/AURES" |
| Card 3 (web) | `/visibilite-web/creation-site-internet/` | `#0B3D91` | `language` | "Site vitrine pour votre activité" |

**Liens contextuels body** :
- Mentionner "borne de commande" → lien vers `/caisse-enregistreuse/borne-de-commande/`
- Mentionner "outils Microsoft 365 compatibles" → lien vers `/maintenance-informatique/outils-collaboratifs/`

### Sous-page `outils-collaboratifs/` (narration démo)

| Position | Cible | Couleur accent | Icône | Ancre suggérée |
|---|---|---|---|---|
| Card 1 (intra-IT) | `/maintenance-informatique/cloud-securite/` | `#0D9488` | `cloud_sync` | "Stockage cloud sécurisé" |
| Card 2 (caisse) | `/caisse-enregistreuse/` | `#0B3D91` | `point_of_sale` | "Intégration click & collect" |
| Card 3 (web) | `/visibilite-web/creation-site-internet/` | `#0B3D91` | `language` | "Présentez votre équipe en ligne" |

**Liens contextuels body** :
- Mentionner "SEO local pour votre équipe" → lien vers `/visibilite-web/seo-sea-local/`
- Mentionner "maintenance des postes" → lien vers `/maintenance-informatique/maintenance-depannage/`

### Hub IT : liens contextuels supplémentaires (hors section cross-sell dédiée)
Dans le body du hub, insérer 2-3 liens contextuels vers des sous-pages caisse/web pertinentes :
- Section comparatif ou problème : "gérer caisse + IT ensemble" → lien `/caisse-enregistreuse/`
- Section process : "site web professionnel" → lien `/visibilite-web/creation-site-internet/`

---

## Template HTML du cross-sell 3 cards (DNA section 2.12)

À appliquer identiquement sur les 4 sous-pages IT, en variant uniquement les cibles et couleurs selon matrice ci-dessus :

```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center max-w-2xl mx-auto mb-10 dcb-reveal">
      <span class="text-[11px] font-bold tracking-[0.2em] text-[#0B3D91] uppercase block mb-3">Nos autres expertises</span>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] leading-tight">Un partenaire unique pour votre informatique, vos caisses et votre visibilité web</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 dcb-stagger">
      <!-- Card 1 : intra-silo IT -->
      <a href="../[slug-intra]/index.html" class="group bg-white rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 tonal-shift-elevation hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)]">
        <div class="h-[3px] bg-gradient-to-r from-[#COLOR_A] to-[#COLOR_A_DARK]"></div>
        <div class="p-6 flex flex-col">
          <div class="w-11 h-11 rounded-xl bg-[#COLOR_A]/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 mb-4">
            <span class="material-symbols-outlined text-[#COLOR_A] text-2xl">ICON_A</span>
          </div>
          <h3 class="font-sora font-bold text-lg text-[#0B3D91] mb-2">Titre card 1</h3>
          <p class="text-slate-500 text-sm mb-4">Accroche card 1.</p>
          <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="font-bold text-[#0B3D91] text-sm group-hover:text-[#COLOR_A] transition-colors">Découvrir</span>
            <span class="w-8 h-8 rounded-full bg-[#0B3D91]/5 flex items-center justify-center group-hover:bg-[#COLOR_A] transition-all">
              <span class="material-symbols-outlined text-[#0B3D91] text-sm group-hover:text-white group-hover:translate-x-0.5 transition-all">arrow_forward</span>
            </span>
          </div>
        </div>
      </a>
      <!-- Card 2 : caisse (répéter structure avec COLOR_B) -->
      <!-- Card 3 : web (répéter structure avec COLOR_C) -->
    </div>
  </div>
</section>
```

Placement : avant la FAQ, après les témoignages. Pattern identique sur les 4 sous-pages.

---

## Résumé des actions par sévérité

### Actions HAUTES (prioritaires, bloquantes SEO)
1. Ajouter breadcrumb visuel sur 3 sous-pages (cloud, location, outils) + reformater sur dépannage
2. Ajouter date E-E-A-T sur les 5 pages IT
3. Ajouter JSON-LD Service sur les 5 pages IT
4. Ajouter trust bar sur les 4 sous-pages (cloud, location, outils + dépannage)

### Actions MOYENNES (cohérence visuelle)
1. Harmoniser hero H1 sur 4 sous-pages (`text-4xl md:text-[2.75rem] lg:text-5xl`)
2. Harmoniser pricing cards (`rounded-2xl` + ring pattern conforme)
3. Remplacer `#F57C00` par accent métier sur quote icons et ratings
4. Retirer border-slate-100 des feature cards du hub
5. Ajouter classe `cta-final` manquante sur dépannage

### Actions BASSES (nice to have)
1. Remplacer `rounded-[14px]` → `rounded-lg` (cosmétique, même rendu)
2. Compléter BreadcrumbList JSON-LD du hub
3. Valider le pattern border-t-4 sur location

---

## Ordre d'application recommandé (étape 4 du workflow)

1. **Page pilote** : `maintenance-informatique/maintenance-depannage/index.html` (narration urgence = la plus riche, test du pattern)
   - Appliquer TOUTES les corrections (HAUTE + MOYENNE) sur cette page uniquement
   - **Stop** : faire valider le rendu par l'utilisateur avant de répliquer
2. **Hub** : `maintenance-informatique/index.html` (priorité SEO hub)
3. **Reste des sous-pages** : cloud → location → outils, dans cet ordre (logique narration)
4. Rebuild Tailwind après chaque groupe de 2 pages :
   ```bash
   ./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
   ```
5. Grep final em dashes sur les 5 pages : zéro match attendu.

---

**Document généré le 2026-04-23 par audit parallèle (2 agents).**
**À relire avant application pour trancher les ambiguïtés marquées ⚠️.**
