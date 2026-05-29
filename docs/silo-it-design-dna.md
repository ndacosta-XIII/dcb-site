# ADN Design Silo IT — Source de vérité pour l'harmonisation silo Web

**Date :** 30 avril 2026
**Pages analysées :** 5 (1 hub + 4 sous-pages)
**Périmètre :** `maintenance-informatique/**/*.html`
**Usage :** Guide de référence pour harmoniser `visibilite-web/`

---

## 1. Classes Tailwind par type de section

### Hero

```html
<section class="bg-gradient-to-br from-[#HEX] to-[#HEX] py-12 lg:py-16 relative overflow-hidden dcb-parallax">
  <div class="absolute inset-0 opacity-10 pointer-events-none dcb-parallax-layer" data-speed="0.35">
    <div class="absolute -top-24 -right-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
    <div class="lg:col-span-7 space-y-6 dcb-stagger"><!-- contenu --></div>
    <div class="hidden lg:block lg:col-span-5 relative pt-8"><!-- visuel --></div>
  </div>
</section>
```

- Spacing : `py-12 lg:py-16`
- Container : `max-w-7xl mx-auto px-6`
- Grid : `grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16` (7+5 cols sur lg)
- Animations : `dcb-parallax`, `dcb-parallax-layer`

---

### Trust Bar

```html
<section class="py-6 bg-white border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4 dcb-stagger">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#ACCENT] text-3xl" style="font-variation-settings:'FILL' 1">ICON</span>
        <span class="font-semibold text-base md:text-xl text-slate-500">Texte</span>
      </div>
      <span class="hidden md:inline text-slate-300 text-xl">|</span>
      <!-- x4 items -->
    </div>
  </div>
</section>
```

- Spacing : `py-6`
- Grid mobile : `grid-cols-2 gap-5`
- Flex desktop : `md:flex md:flex-wrap md:gap-y-4`

---

### Problème / Constat (3 cards)

```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl dcb-reveal">
      <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ACCENT] mb-4">Le constat</p>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] mb-6 leading-tight">Titre</h2>
      <p class="text-slate-500 text-base leading-relaxed mb-8">Lead</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 dcb-stagger">
      <div class="bg-white p-6 rounded-xl tonal-shift-elevation">
        <span class="material-symbols-outlined text-[#ACCENT] text-2xl mb-3 block" style="font-variation-settings:'FILL' 1">ICON</span>
        <h3 class="font-sora font-semibold text-[#0B3D91] mb-2">Titre</h3>
        <p class="text-slate-500 text-sm leading-relaxed">Texte</p>
      </div>
    </div>
  </div>
</section>
```

---

### Features (sticky sidebar 4+8)

```html
<section class="py-12 lg:py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      <div class="lg:col-span-4 lg:sticky lg:top-24 dcb-reveal">
        <span class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase block mb-3">La solution</span>
        <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4 leading-tight">Titre</h2>
        <p class="text-slate-500 text-base leading-relaxed">Lead</p>
      </div>
      <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 dcb-stagger">
        <div class="space-y-3">
          <div class="w-11 h-11 bg-[#ACCENT]/10 flex items-center justify-center rounded-lg">
            <span class="material-symbols-outlined text-[#ACCENT]">ICON</span>
          </div>
          <h3 class="font-sora text-lg font-semibold text-[#0B3D91]">Titre</h3>
          <p class="text-slate-500 text-sm leading-relaxed">Texte</p>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

### Stats / Chiffres

```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mb-10 dcb-reveal">
      <span class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase block mb-3">Label</span>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4 leading-tight">Titre</h2>
      <p class="text-slate-500 text-base leading-relaxed">Lead</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center dcb-stagger">
      <div>
        <div class="font-sora text-5xl md:text-6xl font-bold text-[#ACCENT]">STAT</div>
        <div class="text-[11px] font-bold tracking-[0.2em] text-slate-400 uppercase mt-3">Label</div>
      </div>
    </div>
  </div>
</section>
```

---

### Pricing (3 colonnes + form)

```html
<section id="tarifs" class="py-12 lg:py-16 bg-[#F8F9FA] scroll-mt-24">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-10 dcb-stagger">
      <!-- Card standard -->
      <div class="bg-white p-7 rounded-xl tonal-shift-elevation border border-slate-100 flex flex-col">...</div>
      <!-- Card featured -->
      <div class="bg-white p-7 rounded-xl border-2 border-[#ACCENT] ring-4 ring-[#ACCENT]/5 flex flex-col relative transform md:scale-105 z-10 dcb-featured">
        <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ACCENT] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">Le plus choisi</div>
        ...
      </div>
      <div class="bg-white p-7 rounded-xl tonal-shift-elevation border border-slate-100 flex flex-col">...</div>
    </div>
    <div id="devis-form" class="bg-white p-8 rounded-xl tonal-shift-elevation border border-slate-100 mt-6">
      <!-- Form -->
    </div>
  </div>
</section>
```

---

### Témoignages (carrousel)

```html
<section class="py-12 lg:py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-10 dcb-reveal">
      <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F57C00] mb-4">Ils nous font confiance</p>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Ce que disent nos clients.</h2>
    </div>
    <div data-dcb-carousel class="dcb-reveal dcb-reveal-scale">
      <div data-dcb-track>
        <div class="bg-[#F8F9FA] p-10 rounded-2xl tonal-shift-elevation flex flex-col justify-between">
          <div>
            <span class="material-symbols-outlined text-[#F57C00] text-4xl mb-6 block" style="font-variation-settings:'FILL' 1">format_quote</span>
            <p class="text-lg text-slate-700 italic leading-relaxed mb-6">Citation</p>
          </div>
          <div class="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-[#0B3D91] rounded-full flex items-center justify-center text-white font-bold shrink-0 overflow-hidden">
              <img src="..." alt="..." class="w-full h-full object-cover">
            </div>
            <div>
              <p class="font-bold text-[#0B3D91]">Nom</p>
              <p class="text-slate-500 text-sm">Titre, Ville (Dept)</p>
              <p class="text-[#F57C00] text-xs font-medium mt-1">★★★★★</p>
            </div>
          </div>
        </div>
      </div>
      <div class="dcb-carousel-controls">
        <button type="button" data-dcb-prev aria-label="Précédent"><span class="material-symbols-outlined">arrow_back</span></button>
        <div data-dcb-dots></div>
        <button type="button" data-dcb-next aria-label="Suivant"><span class="material-symbols-outlined">arrow_forward</span></button>
      </div>
    </div>
  </div>
</section>
```

---

### Process / Timeline (4 étapes)

```html
<section class="py-12 lg:py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-10 dcb-reveal">
      <span class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase block mb-2">Notre méthode</span>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Titre</h2>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 dcb-stagger">
      <div class="bg-white p-6 rounded-xl tonal-shift-elevation text-center">
        <div class="w-12 h-12 bg-[#ACCENT] text-white rounded-full flex items-center justify-center font-sora font-bold mx-auto mb-4">1</div>
        <h3 class="font-sora font-bold text-[#0B3D91] mb-2">Étape</h3>
        <p class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase mb-3">Timing</p>
        <p class="text-slate-500 text-sm leading-relaxed">Description</p>
      </div>
    </div>
  </div>
</section>
```

---

### Comparatif (2 colonnes gap-px)

```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 overflow-hidden rounded-2xl shadow-sm dcb-reveal dcb-reveal-scale">
      <div class="bg-white p-8">
        <h3 class="text-slate-400 font-bold uppercase tracking-widest text-xs mb-8 h-16 flex flex-col justify-center">Sans DCB</h3>
        <ul class="space-y-5">
          <li class="flex items-start gap-4">
            <span class="material-symbols-outlined text-slate-300 text-xl shrink-0 mt-0.5">close</span>
            <span class="text-slate-500">Point négatif</span>
          </li>
        </ul>
      </div>
      <div class="bg-white p-8">
        <h3 class="font-sora font-bold text-[#0B3D91] text-xl mb-8 h-16 flex flex-col justify-center">Avec DCB</h3>
        <ul class="space-y-5">
          <li class="flex items-start gap-4">
            <span class="material-symbols-outlined text-[#F57C00] text-xl shrink-0 mt-0.5" style="font-variation-settings:'FILL' 1">check_circle</span>
            <span class="text-[#0B3D91] font-bold">Point positif</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

**Pattern distinctif :** `gap-px bg-slate-200` crée la bordure entre colonnes.

---

### FAQ

```html
<section class="bg-[#F8F9FA] py-12 lg:py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-10 dcb-reveal">
        <span class="text-[#F57C00] text-[11px] font-bold tracking-[0.2em] uppercase block mb-3">FAQ</span>
        <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Questions fréquentes</h2>
      </div>
      <div class="flex flex-col gap-3 dcb-reveal">
        <details class="faq-item">
          <summary><span>Question ?</span><span class="material-symbols-outlined expand-icon">expand_more</span></summary>
          <div class="faq-item__body">Réponse</div>
        </details>
      </div>
    </div>
  </div>
</section>
```

---

### CTA Final

```html
<section class="bg-white py-12 lg:py-16">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mx-auto">
      <div class="cta-final dcb-reveal">
        <h3 class="font-sora text-2xl font-bold text-[#0B3D91] mb-4">Titre CTA</h3>
        <p class="text-slate-600 mb-8">Sous-titre</p>
        <div class="cta-final__actions">
          <a href="../../contact/index.html" class="btn btn--primary text-lg">Demander un devis</a>
          <div class="cta-tel">
            <div class="cta-tel__icon"><span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">call</span></div>
            <div>
              <div class="cta-tel__label">Appelez-nous</div>
              <a href="tel:0482530510" class="cta-tel__num">04 82 53 05 10</a>
            </div>
          </div>
        </div>
      </div>
      <p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">
        Mis à jour le <time datetime="2026-04-30">30 avril 2026</time>
      </p>
    </div>
  </div>
</section>
```

---

## 2. Typographie H2

```html
<!-- Standard (sections de contenu) -->
<h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] mb-6 leading-tight">Titre</h2>

<!-- Hero H1 -->
<h1 class="font-sora text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">Titre</h1>

<!-- CTA final H3 -->
<h3 class="font-sora text-2xl font-bold text-[#0B3D91] mb-4">Titre</h3>
```

---

## 3. Pattern de cards

### Card simple (problème, features)

```html
<div class="bg-white p-6 rounded-xl tonal-shift-elevation">
  <span class="material-symbols-outlined text-[#ACCENT] text-2xl mb-3 block" style="font-variation-settings:'FILL' 1">ICON</span>
  <h3 class="font-sora font-semibold text-[#0B3D91] mb-2">Titre</h3>
  <p class="text-slate-500 text-sm leading-relaxed">Texte</p>
</div>
```

### Card service (image droite)

```html
<a href="..." class="group bg-white rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 tonal-shift-elevation hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)] grid grid-cols-1 sm:grid-cols-2">
  <div class="p-7 lg:p-8 flex flex-col">
    <div class="flex items-center justify-between mb-6">
      <div class="w-14 h-14 rounded-xl bg-[#ACCENT]/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        <span class="material-symbols-outlined text-[#ACCENT] text-3xl">ICON</span>
      </div>
      <span class="text-[11px] font-bold uppercase tracking-widest text-[#ACCENT] bg-[#ACCENT]/10 px-3 py-1 rounded-full">Badge</span>
    </div>
    <h3 class="font-sora font-bold text-2xl text-[#0B3D91] mb-2">Titre</h3>
    <p class="text-slate-500 text-sm mb-3">Description</p>
    <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
      <span class="font-bold text-[#0B3D91] group-hover:text-[#ACCENT] transition-colors">Découvrir</span>
      <span class="w-10 h-10 rounded-full bg-[#0B3D91]/5 flex items-center justify-center group-hover:bg-[#ACCENT] transition-all">
        <span class="material-symbols-outlined text-[#0B3D91] text-lg group-hover:text-white group-hover:translate-x-0.5 transition-all">arrow_forward</span>
      </span>
    </div>
  </div>
  <div class="relative overflow-hidden min-h-[220px] sm:min-h-0">
    <img src="..." alt="..." class="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
  </div>
</a>
```

---

## 4. Labels de section

```html
<span class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ACCENT] mb-4">Label</span>
```

- Taille : `text-[11px]`
- Tracking : `tracking-[0.2em]`
- Casse : `uppercase`
- Couleur : accent de la page
- Margin : `mb-4` ou `mb-3`

---

## 5. Boutons CTA

```html
<!-- Primaire -->
<a href="..." class="dcb-btn-hover bg-[#ACCENT] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3">
  CTA <span class="material-symbols-outlined">arrow_forward</span>
</a>

<!-- Secondaire (tel) -->
<a href="tel:0482530510" class="dcb-btn-hover border-2 border-white text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
  <span class="material-symbols-outlined">call</span> 04 82 53 05 10
</a>

<!-- Tertaire (card) -->
<a href="..." class="mt-auto w-full border-2 border-[#ACCENT] text-[#ACCENT] py-3 rounded-lg font-bold hover:bg-[#ACCENT]/5 transition-colors text-sm text-center block">
  Choisir
</a>
```

---

## 6. Structure JSON-LD Service (exemple sous-page)

```json
{
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Maintenance et dépannage informatique entreprise",
  "description": "Contrat de maintenance informatique avec monitoring préventif 24/7...",
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
  "serviceType": "Maintenance informatique",
  "areaServed": [
    {"@type": "AdministrativeArea", "name": "Saône-et-Loire (71)"},
    {"@type": "AdministrativeArea", "name": "Rhône (69)"},
    {"@type": "AdministrativeArea", "name": "Ain (01)"},
    {"@type": "AdministrativeArea", "name": "Loire (42)"},
    {"@type": "City", "name": "Lyon"},
    {"@type": "City", "name": "Mâcon"},
    {"@type": "City", "name": "Chalon-sur-Saône"},
    {"@type": "City", "name": "Paray-le-Monial"},
    {"@type": "City", "name": "Villefranche-sur-Saône"},
    {"@type": "City", "name": "Bourg-en-Bresse"}
  ],
  "url": "https://dcb-technologies.fr/maintenance-informatique/maintenance-depannage/",
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "EUR",
    "lowPrice": "89",
    "highPrice": "149",
    "offerCount": "3"
  }
}
```

---

## 7. Breadcrumb

**JSON-LD uniquement (pas de HTML visuel).**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://dcb-technologies.fr/"},
    {"@type": "ListItem", "position": 2, "name": "Maintenance informatique", "item": "https://dcb-technologies.fr/maintenance-informatique/"},
    {"@type": "ListItem", "position": 3, "name": "Maintenance et dépannage"}
  ]
}
```

---

## 8. Date E-E-A-T

```html
<p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">
  Mis à jour le <time datetime="2026-04-23">23 avril 2026</time>
</p>
```

Placée dans la section CTA final, avant `</main>`.

---

## 9. Couleurs accent par page

| Page | Accent | Hex |
|------|--------|-----|
| Hub maintenance-informatique | Orange | `#F57C00` |
| maintenance-depannage | Rouge | `#EF4444` |
| cloud-securite | Teal | `#0D9488` |
| location-vente-installation | Indigo | `#4F46E5` |
| outils-collaboratifs | Violet | `#A855F7` |

Usage par couleur : hero gradient, labels H2, card icons bg (`/10`), trust bar icons, pricing border featured, CTA buttons, hover link.

---

## 10. Cross-sell inter-pilier

### Pattern cross-sell (card 2 colonnes)

```html
<a href="../../caisse-enregistreuse/index.html" class="group bg-white rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 tonal-shift-elevation hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)] grid grid-cols-1 sm:grid-cols-2">
  <div class="p-7 flex flex-col justify-center">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-11 h-11 rounded-xl bg-[#0B3D91]/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        <span class="material-symbols-outlined text-[#0B3D91] text-2xl" style="font-variation-settings:'FILL' 1">point_of_sale</span>
      </div>
      <span class="text-[11px] font-bold uppercase tracking-widest text-[#0B3D91] bg-[#0B3D91]/10 px-3 py-1 rounded-full">Badge</span>
    </div>
    <h3 class="font-sora font-bold text-xl text-[#0B3D91] mb-2">Titre</h3>
    <p class="text-slate-500 text-sm mb-4">Description</p>
    <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
      <span class="font-bold text-[#0B3D91] text-sm group-hover:text-[#F57C00] transition-colors">Découvrir</span>
      <span class="w-8 h-8 rounded-full bg-[#0B3D91]/5 flex items-center justify-center group-hover:bg-[#0B3D91] transition-all">
        <span class="material-symbols-outlined text-[#0B3D91] text-sm group-hover:text-white group-hover:translate-x-0.5 transition-all">arrow_forward</span>
      </span>
    </div>
  </div>
  <div class="relative overflow-hidden min-h-[220px] sm:min-h-0">
    <img src="../../assets/crosssell-caisse.webp" alt="..." loading="lazy" decoding="async" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105">
    <div class="absolute inset-0 bg-gradient-to-tr from-[#0B3D91]/60 via-[#0B3D91]/10 to-transparent pointer-events-none"></div>
  </div>
</a>
```

### Liens cross-sell présents (hub IT)

| Cible | URL | Ancre |
|-------|-----|-------|
| Caisse enregistreuse | `../../caisse-enregistreuse/index.html` | "Découvrir nos caisses" |
| Visibilité web | `../../visibilite-web/index.html` | "Découvrir la visibilité web" |

### Liens cross-sell présents (sous-pages IT)

Les sous-pages croisent 2 autres services du même silo IT.

---

## Résumé — Checklist d'harmonisation pour le silo Web

Pour chaque page `visibilite-web/` :

- [ ] Spacing sections : `py-12 lg:py-16` partout
- [ ] Container : `max-w-7xl mx-auto px-6` partout
- [ ] H2 : `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] leading-tight`
- [ ] Labels : `text-[11px] font-bold tracking-[0.2em] uppercase text-[#ACCENT]`
- [ ] Cards : `bg-white p-6 rounded-xl tonal-shift-elevation`
- [ ] CTA primaire : `bg-[ACCENT] text-white px-8 py-4 rounded-lg font-bold`
- [ ] JSON-LD Service avec `areaServed` (4 départements + 6 villes)
- [ ] JSON-LD BreadcrumbList
- [ ] JSON-LD FAQPage
- [ ] Date E-E-A-T : `<time datetime="2026-04-30">30 avril 2026</time>`
- [ ] Cross-sell inter-pilier (vers caisse + IT)
- [ ] `dcb-stagger`, `dcb-reveal`, `dcb-parallax` sur les sections
