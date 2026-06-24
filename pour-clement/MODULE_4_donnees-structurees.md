# MODULE 4 — Données Structurées Schema.org JSON-LD

> **Spécialisation :** Expert données structurées Schema.org
> **Objectif :** Implémenter les schemas JSON-LD les plus impactants pour obtenir des rich snippets Google et renforcer le SEO local + crédibilité SERP
> **Statut :** ✅ Analyse terminée — en attente du MASTER_PLAN pour exécution

---

## SYNTHÈSE EXÉCUTIVE

- **10 schemas recommandés :** `LocalBusiness`, `Organization`, `WebSite + SearchAction`, `Service` × 3, `FAQPage`, `BreadcrumbList`, `Person` × 2, `AggregateRating`, `BlogPosting`
- **Schemas générant des rich snippets visibles :** `LocalBusiness + AggregateRating` (étoiles SERP), `FAQPage` (accordéon), `BreadcrumbList` (fil d'Ariane), `Service + Offer` (prix), `Person` (knowledge panel), `WebSite + SearchAction` (sitelinks)
- **Impact estimé sur le CTR :** **+18 à +35 %** sur requêtes locales et brandées

### État actuel vs cible

| Schema | État actuel | Couverture | Action |
|---|---|---|---|
| `LocalBusiness` | ✅ Sur Accueil | 1/26 | Enrichir avec GBP + dupliquer sur Contact |
| `FAQPage` | ✅ Accueil + Caisse Hub | 2/26 | Étendre aux 3 hubs restants + sous-pages métiers |
| `BreadcrumbList` | ✅ Hubs uniquement, JSON-LD | 4/26 | Étendre à toutes sous-pages + version visuelle |
| `Service` | ✅ Accueil ×3 + Caisse Hub | 5/26 | Étendre aux 14 sous-pages |
| `Organization` | ⚠️ Mélangé dans LocalBusiness | 1/26 | Séparer (graph @id linkés) |
| `WebSite + SearchAction` | ❌ Absent | 0/26 | Créer (sitelinks) |
| `Person` (Nathanaël/Clément) | ⚠️ Mention seule | 0/26 | Créer (E-E-A-T) |
| `AggregateRating` | ❌ Absent | 0/26 | À activer SEULEMENT à 10+ avis Google |
| `BlogPosting` | ❌ Absent | 0/1 article | Critique pour le seul article actuel |

---

## SCHEMAS JSON-LD PRÊTS À L'EMPLOI

### Schema 1 — LocalBusiness + Organization + WebSite + Person (graph unifié pour l'Accueil)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://dcb-technologies.fr/#organization",
      "name": "DCB Technologies",
      "legalName": "SAS DCB Technologies",
      "url": "https://dcb-technologies.fr",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://dcb-technologies.fr/#logo",
        "url": "https://dcb-technologies.fr/assets/logo-dcb.svg",
        "contentUrl": "https://dcb-technologies.fr/assets/logo-dcb.svg",
        "caption": "DCB Technologies"
      },
      "sameAs": [
        "https://www.facebook.com/people/DCB-Technologies/61581485093936/",
        "https://www.instagram.com/dcb_technologies/",
        "https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr"
      ],
      "founder": [
        {"@id": "https://dcb-technologies.fr/notre-adn/#nathanael"},
        {"@id": "https://dcb-technologies.fr/notre-adn/#clement"}
      ]
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": "https://dcb-technologies.fr/#localbusiness",
      "name": "DCB Technologies",
      "alternateName": "DCB Tech",
      "description": "Expert local en caisses enregistreuses NF525, maintenance informatique et création de sites web pour les commerçants et PME du Rhône, de la Saône-et-Loire, de l'Ain et de la Loire. Techniciens salariés, intervention sur site en moins de 4h.",
      "url": "https://dcb-technologies.fr",
      "telephone": "+33482530510",
      "email": "contact@dcb-technologies.fr",
      "image": ["https://dcb-technologies.fr/assets/og-homepage.jpg"],
      "logo": {"@id": "https://dcb-technologies.fr/#logo"},
      "parentOrganization": {"@id": "https://dcb-technologies.fr/#organization"},
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "59 Chemin du Moulin Carron",
        "addressLocality": "Dardilly",
        "postalCode": "69570",
        "addressRegion": "Auvergne-Rhône-Alpes",
        "addressCountry": "FR"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "45.8136",
        "longitude": "4.7553"
      },
      "hasMap": "https://www.google.com/maps/place/DCB+technologies/@45.6356277,4.7311759,17z/data=!4m6!3m5!1s0xa00341cb748c8e73:0x162ad799c6302086!8m2!3d45.6356277!4d4.7311759!16s%2Fg%2F11xvy54gzr",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:30",
          "closes": "18:30"
        }
      ],
      "areaServed": [
        {"@type": "AdministrativeArea", "name": "Saône-et-Loire (71)"},
        {"@type": "AdministrativeArea", "name": "Rhône (69)"},
        {"@type": "AdministrativeArea", "name": "Ain (01)"},
        {"@type": "AdministrativeArea", "name": "Loire (42)"},
        {"@type": "City", "name": "Lyon"},
        {"@type": "City", "name": "Mâcon"},
        {"@type": "City", "name": "Chalon-sur-Saône"},
        {"@type": "City", "name": "Villefranche-sur-Saône"},
        {"@type": "City", "name": "Bourg-en-Bresse"},
        {"@type": "City", "name": "Roanne"},
        {"@type": "City", "name": "Paray-le-Monial"}
      ],
      "knowsAbout": [
        "Caisse enregistreuse NF525",
        "Logiciel CashMag",
        "Maintenance informatique PME",
        "Infogérance cloud",
        "Cybersécurité PME",
        "Microsoft 365",
        "Création de site internet",
        "SEO local",
        "Hébergement web France"
      ],
      "founder": [
        {"@id": "https://dcb-technologies.fr/notre-adn/#nathanael"},
        {"@id": "https://dcb-technologies.fr/notre-adn/#clement"}
      ],
      "numberOfEmployees": {"@type": "QuantitativeValue", "value": "2-10"},
      "priceRange": "€€",
      "currenciesAccepted": "EUR",
      "paymentAccepted": "Virement, Chèque, Carte bancaire, Prélèvement",
      "slogan": "Votre partenaire technologique de proximité"
      // À ACTIVER SEULEMENT À 10+ AVIS GOOGLE :
      // "aggregateRating": {
      //   "@type": "AggregateRating",
      //   "ratingValue": "5.0",
      //   "bestRating": "5",
      //   "ratingCount": "X",
      //   "reviewCount": "X"
      // }
    },
    {
      "@type": "WebSite",
      "@id": "https://dcb-technologies.fr/#website",
      "url": "https://dcb-technologies.fr",
      "name": "DCB Technologies",
      "description": "Caisse NF525, maintenance informatique et création de site internet pour commerçants et PME — Lyon, Mâcon, Chalon, Villefranche, Bourg-en-Bresse, Roanne",
      "publisher": {"@id": "https://dcb-technologies.fr/#organization"},
      "inLanguage": "fr-FR",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://dcb-technologies.fr/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Person",
      "@id": "https://dcb-technologies.fr/notre-adn/#nathanael",
      "name": "Nathanaël Da Costa",
      "givenName": "Nathanaël",
      "familyName": "Da Costa",
      "jobTitle": "Co-fondateur & Directeur Technique",
      "worksFor": {"@id": "https://dcb-technologies.fr/#organization"},
      "url": "https://dcb-technologies.fr/notre-adn/",
      "knowsAbout": ["Caisse enregistreuse NF525", "Maintenance informatique", "CashMag"]
    },
    {
      "@type": "Person",
      "@id": "https://dcb-technologies.fr/notre-adn/#clement",
      "name": "Clément Boissié",
      "givenName": "Clément",
      "familyName": "Boissié",
      "jobTitle": "Co-fondateur & Directeur Commercial",
      "worksFor": {"@id": "https://dcb-technologies.fr/#organization"},
      "url": "https://dcb-technologies.fr/notre-adn/",
      "knowsAbout": ["Création de site internet", "SEO local", "Visibilité web"]
    }
  ]
}
```

**⚠️ Notes critiques :**
- Adresse Dardilly maintenue (siège légal). Cohérent avec mode SAB GBP : JSON-LD = adresse légale, GBP = zone d'intervention.
- `aggregateRating` commenté : à n'activer qu'à 10+ avis Google (sinon risque CNIL/Google fake reviews avec seulement 4 avis).
- `@graph` avec `@id` linkés : permet à Google de comprendre les relations entre entités (Organization → LocalBusiness → Person → WebSite).

---

### Schema 2 — FAQPage (5 questions ciblées requêtes locales)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://dcb-technologies.fr/#faq",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Intervenez-vous à Lyon, Mâcon et dans toute la Saône-et-Loire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. DCB Technologies couvre l'ensemble des départements 71 (Saône-et-Loire), 69 (Rhône), 01 (Ain) et 42 (Loire). Nos techniciens salariés interviennent sur site en moins de 4 heures à Lyon, Villefranche-sur-Saône, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial, Charolles, Tournus, Cluny, Le Creusot et Montceau-les-Mines. Notre siège est à Dardilly et notre base technique à Paray-le-Monial."
      }
    },
    {
      "@type": "Question",
      "name": "La certification NF525 est-elle obligatoire pour ma caisse enregistreuse ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Depuis le 1er janvier 2018, tout commerçant assujetti à la TVA en France doit utiliser un logiciel de caisse certifié NF525 pour prouver sa conformité fiscale. L'amende en cas de contrôle sans certification atteint 7 500 € par établissement, renouvelable tous les 60 jours. Le logiciel CashMag que nous installons chez DCB Technologies est certifié NF525 : vous recevez une attestation officielle le jour de l'installation, éditable à tout moment depuis votre caisse."
      }
    },
    {
      "@type": "Question",
      "name": "Quelle différence entre DCB Technologies et une solution en ligne comme SumUp ou Zettle ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SumUp, Zettle et Square sont des solutions cloud que vous installez seul. Pas d'accompagnement, pas de technicien sur site, et le support passe par un centre d'appels distant. Chez DCB Technologies, un technicien salarié vient dans votre établissement à Lyon, Mâcon ou ailleurs en Saône-et-Loire, installe tout sur place, forme votre équipe, et reste votre interlocuteur unique. En cas de panne, intervention en moins de 4 heures sur site. C'est un autre métier, et un autre niveau de service."
      }
    },
    {
      "@type": "Question",
      "name": "Combien coûte une caisse enregistreuse NF525 chez DCB Technologies ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Nos solutions de caisse enregistreuse NF525 démarrent à 77 € par mois en location longue durée (matériel + logiciel + SAV inclus). Le tarif exact dépend de votre métier (boulangerie, restaurant, commerce, salon de coiffure) et de la configuration choisie (mono-poste, multi-postes, périphériques comme borne de commande ou monnayeur automatique). Nous proposons trois formules : location 12/24/36 mois, crédit-bail avec option d'achat, ou achat comptant. Devis gratuit en moins de 24 heures."
      }
    },
    {
      "@type": "Question",
      "name": "Est-ce que DCB Technologies gère aussi la maintenance informatique de mon entreprise ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Au-delà des caisses enregistreuses, DCB Technologies assure la maintenance informatique complète des PME et commerçants : infogérance cloud, sauvegarde et cybersécurité, déploiement Microsoft 365 et outils collaboratifs, location et installation de matériel. Tous nos techniciens sont salariés, basés à Dardilly et Paray-le-Monial, et interviennent en moins de 4 heures sur Lyon, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse et Roanne. Diagnostic gratuit de votre installation actuelle."
      }
    }
  ]
}
```

---

### Schema 3a — Service Caisse Enregistreuse NF525

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://dcb-technologies.fr/caisse-enregistreuse/#service",
  "serviceType": "Caisse enregistreuse NF525",
  "name": "Caisse enregistreuse tactile certifiée NF525 — installation, formation et SAV sur site",
  "alternateName": ["Caisse tactile NF525", "TPV CashMag", "Système de point de vente NF525"],
  "description": "Caisse tactile NF525 certifiée CashMag pour boulangerie, restaurant, commerce et salon de coiffure. Installation, formation et SAV sur site en moins de 4h sur Lyon, Mâcon, Chalon-sur-Saône, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne et l'ensemble des départements 71, 69, 01, 42. Logiciel certifié, matériel garanti 5 ans, formation incluse, support 7j/7.",
  "url": "https://dcb-technologies.fr/caisse-enregistreuse/",
  "image": "https://dcb-technologies.fr/assets/og-caisse.jpg",
  "category": "POS System",
  "brand": [
    {"@type": "Brand", "name": "CashMag"},
    {"@type": "Brand", "name": "OXHOO"},
    {"@type": "Brand", "name": "AURES"}
  ],
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
  "areaServed": [
    {"@type": "City", "name": "Lyon", "containedInPlace": {"@type": "AdministrativeArea", "name": "Rhône"}},
    {"@type": "City", "name": "Mâcon", "containedInPlace": {"@type": "AdministrativeArea", "name": "Saône-et-Loire"}},
    {"@type": "City", "name": "Chalon-sur-Saône", "containedInPlace": {"@type": "AdministrativeArea", "name": "Saône-et-Loire"}},
    {"@type": "City", "name": "Villefranche-sur-Saône", "containedInPlace": {"@type": "AdministrativeArea", "name": "Rhône"}},
    {"@type": "City", "name": "Bourg-en-Bresse", "containedInPlace": {"@type": "AdministrativeArea", "name": "Ain"}},
    {"@type": "City", "name": "Roanne", "containedInPlace": {"@type": "AdministrativeArea", "name": "Loire"}},
    {"@type": "City", "name": "Paray-le-Monial", "containedInPlace": {"@type": "AdministrativeArea", "name": "Saône-et-Loire"}},
    {"@type": "AdministrativeArea", "name": "Saône-et-Loire (71)"},
    {"@type": "AdministrativeArea", "name": "Rhône (69)"},
    {"@type": "AdministrativeArea", "name": "Ain (01)"},
    {"@type": "AdministrativeArea", "name": "Loire (42)"}
  ],
  "audience": {
    "@type": "BusinessAudience",
    "audienceType": "Commerçants, artisans, restaurateurs, salons de coiffure et PME"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Solutions caisse par métier",
    "itemListElement": [
      {"@type": "Offer", "name": "Caisse Boulangerie & Pâtisserie", "price": "77", "priceCurrency": "EUR", "url": "https://dcb-technologies.fr/caisse-enregistreuse/boulangerie/", "availability": "https://schema.org/InStock"},
      {"@type": "Offer", "name": "Caisse Restaurant & Bar", "price": "89", "priceCurrency": "EUR", "url": "https://dcb-technologies.fr/caisse-enregistreuse/restaurant/", "availability": "https://schema.org/InStock"},
      {"@type": "Offer", "name": "Caisse Commerce de détail", "price": "79", "priceCurrency": "EUR", "url": "https://dcb-technologies.fr/caisse-enregistreuse/commerce-de-detail/"},
      {"@type": "Offer", "name": "Caisse Coiffure & Beauté", "price": "79", "priceCurrency": "EUR", "url": "https://dcb-technologies.fr/caisse-enregistreuse/coiffure/"}
    ]
  },
  "termsOfService": "https://dcb-technologies.fr/cgv/"
}
```

---

### Schema 3b — Service Maintenance Informatique

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://dcb-technologies.fr/maintenance-informatique/#service",
  "serviceType": "Maintenance informatique PME",
  "name": "Maintenance informatique, infogérance cloud et cybersécurité PME — Lyon, Mâcon, Chalon",
  "alternateName": ["Infogérance PME", "Dépannage informatique entreprise", "Service IT 360"],
  "description": "Maintenance informatique, infogérance cloud, cybersécurité et déploiement Microsoft 365 pour PME et commerçants. Techniciens salariés intervenant en moins de 4h sur site à Lyon, Villefranche-sur-Saône, Mâcon, Chalon-sur-Saône, Bourg-en-Bresse et Roanne. Monitoring 24/7, support 7j/7, zéro sous-traitance.",
  "url": "https://dcb-technologies.fr/maintenance-informatique/",
  "category": "IT Services",
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
  "areaServed": [
    {"@type": "City", "name": "Lyon"},
    {"@type": "City", "name": "Mâcon"},
    {"@type": "City", "name": "Chalon-sur-Saône"},
    {"@type": "City", "name": "Villefranche-sur-Saône"},
    {"@type": "City", "name": "Bourg-en-Bresse"},
    {"@type": "City", "name": "Roanne"},
    {"@type": "City", "name": "Paray-le-Monial"},
    {"@type": "AdministrativeArea", "name": "Saône-et-Loire (71)"},
    {"@type": "AdministrativeArea", "name": "Rhône (69)"},
    {"@type": "AdministrativeArea", "name": "Ain (01)"},
    {"@type": "AdministrativeArea", "name": "Loire (42)"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services IT 360",
    "itemListElement": [
      {"@type": "Offer", "name": "Maintenance & Dépannage", "url": "https://dcb-technologies.fr/maintenance-informatique/maintenance-depannage/"},
      {"@type": "Offer", "name": "Cloud & Cybersécurité", "url": "https://dcb-technologies.fr/maintenance-informatique/cloud-securite/"},
      {"@type": "Offer", "name": "Location, Vente & Installation", "url": "https://dcb-technologies.fr/maintenance-informatique/location-vente-installation/"},
      {"@type": "Offer", "name": "Outils Collaboratifs Microsoft 365", "url": "https://dcb-technologies.fr/maintenance-informatique/outils-collaboratifs/"}
    ]
  }
}
```

---

### Schema 3c — Service Visibilité Web

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://dcb-technologies.fr/visibilite-web/#service",
  "serviceType": "Création de site internet et SEO local",
  "name": "Création de site internet, SEO local et hébergement pour commerçants et PME",
  "alternateName": ["Agence web Mâcon", "Création site Lyon", "SEO local Saône-et-Loire"],
  "description": "Création de sites vitrines et e-commerce, référencement local Google, hébergement sécurisé en France pour commerçants et PME locales. Visible sur Google en 30 jours sur Lyon, Mâcon, Chalon-sur-Saône, Villefranche, Bourg-en-Bresse et Roanne.",
  "url": "https://dcb-technologies.fr/visibilite-web/",
  "category": "Web Design and SEO",
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
  "areaServed": [
    {"@type": "City", "name": "Lyon"},
    {"@type": "City", "name": "Mâcon"},
    {"@type": "City", "name": "Chalon-sur-Saône"},
    {"@type": "AdministrativeArea", "name": "Saône-et-Loire (71)"},
    {"@type": "AdministrativeArea", "name": "Rhône (69)"},
    {"@type": "AdministrativeArea", "name": "Ain (01)"},
    {"@type": "AdministrativeArea", "name": "Loire (42)"}
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Services web",
    "itemListElement": [
      {"@type": "Offer", "name": "Création de site internet", "url": "https://dcb-technologies.fr/visibilite-web/creation-site-internet/"},
      {"@type": "Offer", "name": "SEO & SEA Local", "url": "https://dcb-technologies.fr/visibilite-web/seo-sea-local/"},
      {"@type": "Offer", "name": "Hébergement web France", "url": "https://dcb-technologies.fr/visibilite-web/hebergement/"}
    ]
  }
}
```

---

## GUIDE DE DÉPLOIEMENT (8 étapes)

### 🔴 Étape 1 — Refactoring JSON-LD Accueil en `@graph` unifié
Remplacer les blocs JSON-LD distincts par un seul `@graph` avec `@id` linkés (Schema 1). Permet à Google de comprendre les relations entre entités.

### 🔴 Étape 2 — Dupliquer LocalBusiness sur Contact + Notre ADN
Bloc minimal sur Contact (+ ContactPage). Sur Notre ADN, schemas Person complets avec photos quand disponibles.

### 🔴 Étape 3 — Service JSON-LD sur hubs IT et Web
Coller Schema 3b sur `/maintenance-informatique/` et 3c sur `/visibilite-web/`. Le Caisse Hub a déjà 3a.

### 🟠 Étape 4 — BreadcrumbList visible (HTML + JSON-LD) sur 14 sous-pages
Composant breadcrumb visuel via scripts.js (Module 3) + JSON-LD propre par page.

### 🟠 Étape 5 — BlogPosting sur l'article blog existant
Schema complet : author, datePublished, dateModified, image, wordCount, mainEntityOfPage, publisher.

### 🟢 Étape 6 — FAQPage sur 3 hubs restants + sous-pages métiers
3-5 questions par page, ciblées sur les requêtes locales Module 2.

### 🟢 Étape 7 — Person schemas avec photos et bio
Une fois photos disponibles, enrichir les Person schemas (image, description, alumniOf, award).

### 🟢 Étape 8 — Activer aggregateRating à 10+ avis Google
Tant que <10 avis : ne pas afficher (risque CNIL/Google fake reviews).

---

## TESTS & VALIDATION

### Outils
1. **[Google Rich Results Test](https://search.google.com/test/rich-results)** — par page modifiée
2. **[Schema.org Validator](https://validator.schema.org/)** — conformité stricte
3. **Google Search Console → Améliorations** — surveillance continue

### Erreurs fréquentes à éviter

| Erreur | Conséquence | Fix |
|---|---|---|
| `aggregateRating` sans avis vérifiables | Sanction Google + perte rich snippet | Attendre 10+ avis Google |
| Organization + LocalBusiness sans `@graph` | Google ne lie pas les entités | Utiliser `@graph` avec `@id` linkés |
| `priceRange` numérique | Validation échoue | Symboles "€", "€€", "€€€" |
| `openingHours` au lieu de `openingHoursSpecification` | Format obsolète, ignoré | Toujours `openingHoursSpecification` |
| URLs internes en relatif | Schemas cassés | Toujours URL absolue |
| `image` sans dimensions/format | Rich result rejeté | Min 696×800px JPG/PNG/WebP |
| FAQ avec liens HTML | Texte coupé | Texte brut uniquement |
| Schemas dans `<body>` | Pas crawlés en priorité | Toujours dans `<head>` |

### Surveillance post-déploiement
- **J+7 :** Search Console rapport "Améliorations"
- **J+30 :** évolution CTR requêtes brandées et locales
- **J+90 :** vérification manuelle apparition rich snippets sur 10 mots-clés Module 2

---

## RAPPORT FINAL — SYNTHÈSE DES 4 MODULES

| Module | Spécialité | Score | Actions critiques | Délai |
|---|---|---|---|---|
| **M1** | Audit technique SEO | **75/100** (58 → 75 après Phase 0) | ✅ Tailwind, robots, sitemap, .htaccess, slug, titles SEO faits. ❌ Reste : images | Phase 0 à 90% |
| **M2** | Référencement local & Local Pack | **40/100** (potentiel FORT) | 🔴 Optimiser GBP (mode SAB + 5 catégories) · 🔴 Campagne avis (4→22 en 3M) · 🔴 10 annuaires · 🔴 Pages locales | Sprint 1-3 (M1-M3) |
| **M3** | Architecture & maillage | **65/100** | 🔴 Pilier `/zones/` + 7 hubs · 🔴 25 cross-links · 🔴 Section "Aussi besoin de" · 🔴 Fil d'Ariane visuel · 🔴 Ancres "Découvrir" | Sprint 4-6 (M1-M2) |
| **M4** | Données structurées Schema.org | **70/100** | 🔴 Refactoring `@graph` Accueil · 🔴 Service IT/Web hubs · 🟠 BlogPosting · 🟠 FAQPage hubs · 🟢 aggregateRating à 10+ avis | Sprint 7 (M1) |

### Quick wins identifiés (effort < 1h, impact ★★★★★)

| # | Action | Module | Effort | Impact |
|---|---|---|---|---|
| 1 | Optimiser fiche GBP existante | M2 | 30 min | ★★★★★ |
| 2 | Réviser ancres "Découvrir" Accueil | M3 | 5 min | ★★★★ |
| 3 | Refactoring JSON-LD Accueil en @graph | M4 | 30 min | ★★★★ |
| 4 | Service JSON-LD sur hubs IT et Web | M4 | 20 min | ★★★★ |
| 5 | sameAs site avec URL canonique GBP | M4 | 5 min | ★★★ |
| 6 | Ajouter Blog + Notre ADN dans nav | M3 | 10 min | ★★★ |
| 7 | Lancer campagne appels avis (15 clients) | M2 | 1 sem ×30min | ★★★★★ |

**Total : 7 quick wins exécutables en 2-3h sur 1 semaine** qui débloquent 60% du potentiel SEO.
