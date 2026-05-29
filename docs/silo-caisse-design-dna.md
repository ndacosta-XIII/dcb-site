# Silo Caisse : Design DNA

**Source de vérité** pour l'harmonisation des silos IT et Web.
Scan exhaustif des 9 pages du silo caisse (hub + 8 sous-pages) le 2026-04-23.

> ⚠️ **Règle absolue du projet** : zéro `—` (em dash) dans tout contenu écrit (HTML, JSON-LD, meta, FAQ, body, alt, titres). Ce document sert à répliquer les patterns visuels. La narration (ordre des sections) reste unique par page, conformément à Phase 7 "Casser le Template Rigide" du CLAUDE.md.

---

## 1. Tokens atomiques (utilisés réellement)

### Spacing
| Usage | Classes |
|---|---|
| Section vertical | `py-12 lg:py-16` (obligatoire, standard du projet) |
| Container principal | `max-w-7xl mx-auto px-6` |
| Container texte étroit | `max-w-3xl` |
| Grid gap cards 3 cols | `gap-6` |
| Grid gap hero | `gap-12 lg:gap-16` |
| Vertical stack cards | `space-y-3`, `space-y-6`, `space-y-8` |

### Typographie
| Élément | Classes |
|---|---|
| H1 hero | `font-sora text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white leading-[1.1] tracking-tight` |
| H2 section | `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] leading-tight` |
| H3 card | `font-sora font-semibold text-[#0B3D91]` (tailles `text-lg` à `text-2xl`) |
| Body muted | `text-slate-500 leading-relaxed` |
| Label uppercase | `text-[11px] font-bold tracking-[0.2em] uppercase` |
| Lead paragraph | `text-lg md:text-xl leading-relaxed` |

### Border radius
| Usage | Classe |
|---|---|
| Boutons, inputs | `rounded-lg` (14px dans la config Tailwind du projet) |
| Cards features, **cards pricing (dont featured)** | `rounded-xl` (12px) |
| Cards testimonials, banner cross-sell, cards métier hub | `rounded-2xl` (16px) |
| Badge, avatar | `rounded-full` |
| Hero imagery, div placeholder hero | `rounded-3xl` (24px) |

⚠️ **Correction 2026-04-23** : les cards pricing utilisent `rounded-xl` (pas `rounded-2xl`) dans le silo caisse. Les cards témoignages utilisent `rounded-2xl`.

### Couleurs
- Primary : `#0B3D91` (tous H2/H3, liens actifs)
- Primary dark : `#072B6B` (hero fond)
- CTA orange : `#F57C00` (boutons CTA uniquement)
- Backgrounds sections alternées : `bg-white` / `bg-[#F8F9FA]`
- Text muted : `text-slate-500` (body), `text-slate-600` (fort), `text-slate-400` (date E-E-A-T)
- Bordures : `border-slate-100`, `border-slate-200`

### Accents métier (silo caisse, pour référence)
| Métier | Accent |
|---|---|
| Boulangerie | `#F59E0B` (ambre) |
| Restaurant | `#EF4444` / hero `#991B1B` |
| Commerce | `#0D9488` / hero `#115E59` |
| Coiffure | `#A855F7` / hero `#581C87` |
| Borne | `#4F46E5` |
| Monnayeur | `#059669` / hero `#065F46` |
| CashMag | `#76B737` (logiciel) |
| Hairnet | `#c59c45` (logiciel) |

### Ombres et élévations
- Classe custom projet : `tonal-shift-elevation` (utilisée sur toutes les cards)
- Hover tinté bleu : `hover:shadow-[0_20px_50px_-15px_rgba(11,61,145,0.2)]`
- Hover léger : `hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)]`
- **Règle absolue** : zéro bordure 1px entre sections (séparation par shift tonal uniquement)

### Opacity modifiers récurrents
`bg-[COLOR]/10` (icon bg), `/20` (hero overlay), `text-white/65` et `text-white/80` (hero body), `border-white/20` et `/30`.

---

## 2. Patterns de sections

### 2.1 HERO (pattern universel sous-pages) ⚠️ SANS breadcrumb visuel
```html
<section class="bg-gradient-to-br from-[#HERO_DARK] to-[#HERO] py-12 lg:py-16 relative overflow-hidden">
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div class="hero-blob-a absolute top-0 right-0 w-[560px] h-[560px] bg-white/10 rounded-full blur-3xl"></div>
    <div class="hero-blob-b absolute bottom-0 left-1/4 w-[460px] h-[460px] bg-[#ACCENT]/12 rounded-full blur-3xl"></div>
  </div>
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
    <div class="lg:col-span-7 space-y-6 dcb-stagger">
      <!-- PAS DE BREADCRUMB VISUEL ICI : seul le JSON-LD BreadcrumbList est présent (voir section 6) -->
      <div class="flex flex-wrap gap-3">
        <span class="bg-[#ACCENT]/20 text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border border-[#ACCENT]/40">BADGE MÉTIER</span>
        <!-- autres badges secondaires -->
      </div>
      <h1 class="font-sora text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white leading-[1.1] tracking-tight">
        Titre <span class="text-[#ACCENT]">avec accent</span>
      </h1>
      <p class="text-white/65 text-lg md:text-xl max-w-xl leading-relaxed">Sous-titre descriptif.</p>
      <!-- optionnel : checklist items avec check_circle -->
      <div class="flex flex-wrap gap-4 pt-2">
        <a href="#tarifs" class="dcb-btn-hover bg-[#ACCENT] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3">
          CTA primaire <span class="material-symbols-outlined">arrow_forward</span>
        </a>
        <a href="tel:0482530510" class="dcb-btn-hover border-2 border-white text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
          <span class="material-symbols-outlined">call</span> 04 82 53 05 10
        </a>
      </div>
    </div>
    <!-- HERO RIGHT COL : image + floating badge bottom-left -->
    <div class="hidden lg:block lg:col-span-5 relative">
      <img alt="Photo métier contextuelle" class="rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 w-full" src="../../assets/placeholder-hero-METIER.jpg">
      <div class="absolute -bottom-4 -left-4 bg-white p-5 rounded-xl shadow-xl">
        <p class="text-[11px] font-bold uppercase tracking-widest text-[#ACCENT] mb-1">Tagline courte</p>
        <p class="font-sora text-xl font-bold text-[#0B3D91]">Phrase de promesse</p>
      </div>
    </div>
  </div>
</section>
```

⚠️ **Hero right col sans image disponible (placeholder)** : utiliser une div gradient avec grand Material Symbol + garder le badge flottant :
```html
<div class="aspect-[4/3] w-full rounded-3xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-gradient-to-br from-[#0B3D91] via-[#DARK] to-[#ACCENT] flex items-center justify-center relative overflow-hidden" role="img" aria-label="Placeholder visuel">
  <span class="material-symbols-outlined text-white/50 relative z-10" style="font-size: 180px; font-variation-settings:'FILL' 1, 'wght' 200;">engineering</span>
</div>
```

### 2.2 TRUST BAR
Pattern standard, 4 items après hero :
```html
<section class="py-6 bg-white border-b border-slate-100">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-2 gap-5 md:flex md:flex-wrap md:items-center md:justify-between md:gap-y-4 dcb-stagger">
      <div class="flex items-center gap-3">
        <span class="material-symbols-outlined text-[#ACCENT] text-3xl" style="font-variation-settings:'FILL' 1">verified_user</span>
        <span class="font-semibold text-base md:text-xl text-slate-500">200+ boulangeries</span>
      </div>
      <span class="hidden md:inline text-slate-300 text-xl">|</span>
      <!-- 3 autres items -->
    </div>
  </div>
</section>
```

### 2.3 FEATURES 3 colonnes
```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="max-w-3xl mb-10 dcb-reveal">
      <span class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase block mb-3">LABEL</span>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] leading-tight mb-4">Titre</h2>
      <p class="text-slate-500 leading-relaxed">Intro.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 dcb-stagger">
      <div class="bg-white p-6 rounded-xl tonal-shift-elevation">
        <span class="material-symbols-outlined text-[#ACCENT] text-2xl mb-3 block" style="font-variation-settings:'FILL' 1">icon</span>
        <h3 class="font-sora font-semibold text-[#0B3D91] mb-2">Titre feature</h3>
        <p class="text-slate-500 text-sm leading-relaxed">Desc.</p>
      </div>
      <!-- x3 -->
    </div>
  </div>
</section>
```

### 2.4 STICKY SIDEBAR + grille 2x2
Variante riche (CashMag, Hairnet section 4) :
```html
<section class="py-12 lg:py-16 bg-white">
  <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
    <div class="lg:col-span-4 lg:sticky lg:top-24 dcb-reveal dcb-reveal-left">
      <span class="text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase block mb-3">LABEL</span>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91] mb-4 leading-tight">Titre</h2>
      <p class="text-slate-500 text-base leading-relaxed">Intro.</p>
    </div>
    <div class="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 dcb-stagger">
      <div class="space-y-3">
        <div class="w-11 h-11 bg-[#ACCENT]/10 flex items-center justify-center rounded-lg">
          <span class="material-symbols-outlined text-[#ACCENT]" style="font-variation-settings:'FILL' 1">icon</span>
        </div>
        <h3 class="font-sora text-lg font-semibold text-[#0B3D91]">Titre</h3>
        <p class="text-slate-500 text-sm leading-relaxed">Desc.</p>
      </div>
      <!-- x4 en 2x2 -->
    </div>
  </div>
</section>
```

### 2.5 PROCESS en 4 étapes numérotées
```html
<div class="grid grid-cols-1 md:grid-cols-4 gap-6 dcb-stagger">
  <div class="bg-white p-6 rounded-xl tonal-shift-elevation text-center">
    <div class="w-12 h-12 bg-[#ACCENT] text-white rounded-full flex items-center justify-center font-sora font-bold mx-auto mb-4 dcb-counter" data-target="1">1</div>
    <h3 class="font-sora font-bold text-[#0B3D91] mb-2">Étape</h3>
    <p class="text-slate-500 text-sm">Desc.</p>
  </div>
</div>
```

### 2.6 STATS animées
Fond coloré, counter animé :
```html
<section class="py-12 lg:py-16 bg-[#ACCENT]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center dcb-stagger">
      <div class="space-y-2">
        <div class="font-sora text-5xl md:text-6xl font-bold text-white dcb-counter" data-target="12000">0</div>
        <p class="text-white/80 text-base">Libellé stat</p>
      </div>
    </div>
  </div>
</section>
```

### 2.7 PRICING 3 cards avec featured au centre (pattern boulangerie/CashMag)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mb-10 dcb-stagger">
  <!-- Card standard (gauche et droite) -->
  <div class="bg-white p-7 rounded-xl tonal-shift-elevation border border-slate-100 flex flex-col">
    <h3 class="font-sora font-bold text-lg mb-2">Plan</h3>
    <div class="font-sora text-3xl font-bold text-[#ACCENT] leading-none mb-1">59€<span class="text-sm font-normal text-slate-400">/mois</span></div>
    <p class="text-xs text-slate-400 mb-6">note billing</p>
    <ul class="list-none flex flex-col gap-3 mb-6 text-sm">
      <li class="flex items-center gap-2"><span class="material-symbols-outlined text-[#ACCENT] text-base">check</span>Feature</li>
    </ul>
    <a href="" class="mt-auto w-full border-2 border-[#ACCENT] text-[#ACCENT] py-3 rounded-lg font-bold hover:bg-[#ACCENT]/5 transition-colors text-sm text-center block">CTA</a>
  </div>
  <!-- Card featured (centre) -->
  <div class="bg-white p-7 rounded-xl border-2 border-[#ACCENT] ring-4 ring-[#ACCENT]/5 flex flex-col relative transform md:scale-105 z-10 dcb-featured">
    <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#ACCENT] text-white px-4 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase whitespace-nowrap">Le plus choisi</div>
    <h3 class="font-sora font-bold text-lg mb-2">Plan featured</h3>
    <!-- ... -->
    <a href="" class="mt-auto w-full bg-[#ACCENT] text-white py-3 rounded-lg font-bold shadow-lg shadow-[#ACCENT]/20 hover:brightness-110 transition-all text-sm text-center block">CTA featured</a>
  </div>
</div>
```

⚠️ **Attention aux tokens exacts** :
- `rounded-xl` (pas `rounded-2xl`)
- `ring-4 ring-[#ACCENT]/5` (pas `ring-2 ring-[#ACCENT]`)
- Card featured a `border-2 border-[#ACCENT]` en plus du `ring-4`
- Layout `md:scale-105 z-10` + classe `dcb-featured`

### 2.7-bis FORM DEVIS inline (sous le pricing) : pattern single-column
```html
<div class="border-t border-slate-200 my-2"></div>
<div id="devis-form" class="bg-white p-8 rounded-xl tonal-shift-elevation border border-slate-100 mt-6">
  <h3 class="font-sora font-bold text-lg text-[#0B3D91] mb-1 no-underline">Recevoir mon devis par email</h3>
  <p class="text-slate-500 text-sm mb-6">Devis détaillé sous 24h. Pas de démarchage, pas d'engagement.</p>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
    <div class="space-y-1">
      <label class="text-[11px] font-bold tracking-widest text-slate-400 uppercase block">Prénom</label>
      <input class="w-full bg-[#F8F9FA] border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#ACCENT]/20" placeholder="..." type="text">
    </div>
    <!-- 3 autres champs dans grid 2x2 : Email, Téléphone, Offre/select -->
  </div>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
    <button class="bg-[#ACCENT] text-white py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all">Recevoir mon devis <span class="material-symbols-outlined text-sm">mail</span></button>
    <a href="tel:0482530510" class="border-2 border-[#0B3D91] text-[#0B3D91] py-3 rounded-lg font-bold text-sm flex items-center justify-center gap-2 hover:bg-[#0B3D91]/5 transition-colors"><span class="material-symbols-outlined text-sm">call</span> 04 82 53 05 10</a>
  </div>
  <p class="text-slate-400 text-xs mt-3 flex items-center gap-1.5"><span class="material-symbols-outlined text-sm">lock</span> Vos données restent confidentielles.</p>
</div>
```
⚠️ **Structure single-column** (pas de layout 2 colonnes avec panneau "Appel prioritaire"). Inputs `bg-[#F8F9FA]`. 2 boutons côte à côte : CTA accent + tel outline bleu.

### 2.8 TÉMOIGNAGES carousel (⚠️ pattern caisse : orange partout)
```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-10 dcb-reveal">
      <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#F57C00] mb-4">Ils nous font confiance</p>
      <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Ce que disent nos clients.</h2>
    </div>
    <div data-dcb-carousel class="dcb-reveal dcb-reveal-scale">
      <div data-dcb-track>
        <div class="bg-white p-10 rounded-2xl tonal-shift-elevation flex flex-col justify-between">
          <div>
            <span class="material-symbols-outlined text-[#F57C00] text-4xl mb-6 block" style="font-variation-settings:'FILL' 1">format_quote</span>
            <p class="text-lg text-slate-700 italic leading-relaxed mb-6">"Quote."</p>
          </div>
          <div class="flex items-center gap-4 pt-6 border-t border-slate-100">
            <div class="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold shrink-0">PN</div>
            <div>
              <p class="font-bold text-[#0B3D91]">Prénom N.</p>
              <p class="text-slate-500 text-sm">Ville</p>
              <p class="text-[#F57C00] text-xs font-medium mt-1">★★★★★</p>
            </div>
          </div>
        </div>
        <!-- 3 autres cards, avec avatars bg variés : #F59E0B, #0B3D91, #0D9488, #A855F7 -->
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

### 2.9 FAQ accordéon
```html
<section class="py-12 lg:py-16 bg-[#F8F9FA]">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-center mb-8 font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Questions fréquentes</h2>
    <div class="flex flex-col gap-3 mb-12 max-w-3xl mx-auto dcb-reveal">
      <details class="faq-item">
        <summary>Question ? <span class="material-symbols-outlined expand-icon">expand_more</span></summary>
        <div class="faq-item__body"><p>Réponse avec éventuels <a href="" class="underline hover:text-[#ACCENT] transition-colors">liens</a>.</p></div>
      </details>
      <!-- 4 à 8 items -->
    </div>
  </div>
</section>
```
Cible : 4 à 8 items par page, réponse 40 à 60 mots (featured snippets).

⚠️ **Pattern témoignages : orange `#F57C00` autorisé**
Exception à la règle "CTA orange uniquement" : dans les sections témoignages du silo caisse, `#F57C00` est utilisé comme signal de confiance sur :
- Le label uppercase "Ils nous font confiance"
- L'icône `format_quote` de chaque card
- Les étoiles de notation (★★★★★)

**Ne pas remplacer par accent métier.** Les avatars ronds gardent des backgrounds variés (`#F59E0B`, `#0B3D91`, `#0D9488`, `#A855F7`) pour la diversité visuelle.

### 2.10 CTA FINAL
```html
<div class="cta-final dcb-reveal">
  <h3 class="font-sora text-2xl font-bold text-[#0B3D91] mb-4">Titre CTA</h3>
  <p class="text-slate-600 mb-8">Phrase d'accroche.</p>
  <div class="cta-final__actions">
    <a href="../../contact/index.html" class="btn btn--primary text-lg">CTA principal</a>
    <div class="cta-tel">
      <div class="cta-tel__icon"><span class="material-symbols-outlined" style="font-variation-settings:'FILL' 1">call</span></div>
      <div>
        <div class="cta-tel__label">Appelez-nous</div>
        <a href="tel:0482530510" class="cta-tel__num">04 82 53 05 10</a>
      </div>
    </div>
  </div>
</div>
```

### 2.11 CROSS-SELL BANNER (vers produit vedette)
```html
<a href="../cashmag/index.html" class="block rounded-2xl overflow-hidden no-underline bg-white border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(11,61,145,0.2)] tonal-shift-elevation dcb-reveal dcb-reveal-scale">
  <div class="flex flex-col md:flex-row items-stretch">
    <div class="md:w-[280px] md:shrink-0 p-8 md:p-10 flex flex-col justify-between" style="background-color:#PRODUCT_COLOR;">
      <div>
        <span class="bg-white/10 text-white px-4 py-1.5 rounded-full text-[11px] font-bold tracking-widest uppercase border border-white/20 inline-block mb-6">Logiciel signature</span>
        <p class="font-sora text-4xl font-extrabold text-white leading-none">Nom produit</p>
        <p class="font-sora text-sm font-medium text-white/80 mt-2">Certifié NF525</p>
      </div>
    </div>
    <div class="flex-1 p-8 md:p-10 flex flex-col justify-center">
      <p class="text-[11px] font-bold tracking-[0.2em] uppercase mb-3" style="color:#PRODUCT_COLOR;">Sous-titre</p>
      <h3 class="font-sora text-xl md:text-2xl font-bold text-[#0B3D91] mb-3 leading-tight">Titre cross-sell</h3>
      <p class="text-slate-500 text-sm md:text-base leading-relaxed mb-5 max-w-2xl">Accroche.</p>
      <span class="inline-flex items-center gap-2 text-sm font-bold" style="color:#PRODUCT_COLOR;">
        Découvrir <span class="material-symbols-outlined text-base">arrow_forward</span>
      </span>
    </div>
  </div>
</a>
```

### 2.11-bis CROSS-SELL standard caisse (2 cards avec panneau coloré)
Pattern boulangerie section 7 : 2 cards riches (texte + panneau visuel demi-largeur avec gradient, video ou icon géant).
```html
<div class="mb-10 max-w-3xl dcb-reveal">
  <p class="text-[11px] font-bold tracking-[0.2em] uppercase text-[#ACCENT] mb-4">Aller plus loin</p>
  <h2 class="font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]">Titre évocatif court</h2>
  <p class="text-slate-500 text-lg mt-3">Intro paragraph.</p>
</div>
<div class="grid grid-cols-1 md:grid-cols-2 gap-6 dcb-stagger">
  <a class="group bg-white rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 tonal-shift-elevation hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)] grid grid-cols-1 sm:grid-cols-2">
    <div class="p-7 flex flex-col justify-center">
      <!-- contenu textuel + CTA -->
    </div>
    <div class="bg-gradient-to-br from-[#ACCENT] to-[#DARK] flex items-center justify-center p-4 overflow-hidden">
      <!-- visuel : video, image, ou icon géant 120px -->
    </div>
  </a>
</div>
```

### 2.12 INTER-SILO cross-sell (3 cards, pattern Hairnet)
```html
<div class="grid grid-cols-1 md:grid-cols-3 gap-8 dcb-stagger">
  <a href="" class="group bg-white rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 tonal-shift-elevation hover:shadow-[0_15px_40px_-10px_rgba(11,61,145,0.2)]">
    <div class="h-[3px] bg-gradient-to-r from-[#COLOR_A] to-[#COLOR_B]"></div>
    <div class="p-6 flex flex-col">
      <div class="w-11 h-11 rounded-xl bg-[#COLOR]/10 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6 mb-4">
        <span class="material-symbols-outlined text-[#COLOR] text-2xl">icon</span>
      </div>
      <h3 class="font-sora font-bold text-lg text-[#0B3D91] mb-2">Service</h3>
      <p class="text-slate-500 text-sm mb-4">Desc.</p>
      <div class="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="font-bold text-[#0B3D91] text-sm group-hover:text-[#COLOR] transition-colors">Découvrir</span>
        <span class="w-8 h-8 rounded-full bg-[#0B3D91]/5 flex items-center justify-center group-hover:bg-[#COLOR] transition-all">
          <span class="material-symbols-outlined text-[#0B3D91] text-sm group-hover:text-white group-hover:translate-x-0.5 transition-all">arrow_forward</span>
        </span>
      </div>
    </div>
  </a>
</div>
```

---

## 3. Boutons (patterns stables)

### Primary (hero, CTA fort)
```html
<a class="dcb-btn-hover bg-[#F57C00] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3">
  Label <span class="material-symbols-outlined">arrow_forward</span>
</a>
```
Variante classe de composant : `btn btn--primary` (style.css).

### Secondary (hero, tel outline)
```html
<a class="dcb-btn-hover border-2 border-white text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2">
  <span class="material-symbols-outlined">call</span> 04 82 53 05 10
</a>
```
Variante classe de composant : `btn btn--secondary`.

### Règle absolue : CTA orange `#F57C00` UNIQUEMENT sur boutons (jamais section, jamais texte de body).

---

## 4. Icônes

- Library : Material Symbols Outlined (Google Fonts CDN)
- Fill style : `style="font-variation-settings:'FILL' 1"` pour versions pleines
- Tailles standard : `text-2xl` (features), `text-3xl` (trust bar), `text-4xl` (quote), `text-5xl` à `text-6xl` (stats numbers)
- Color : matching section accent ou `text-[#0B3D91]`

Icônes récurrentes par contexte :
- Hero/trust : `verified_user`, `event_available`, `loyalty`, `support_agent`, `check_circle`
- CTA : `arrow_forward`, `call`
- FAQ : `expand_more`
- Témoignages : `format_quote`
- Cross-sell : `arrow_forward` (avec `group-hover:translate-x-0.5`)
- Business : `monitoring`, `campaign`, `inventory_2`, `groups`, `summarize`, `hub`, `lock`, `shield`, `schedule`

---

## 5. Animations (classes du projet)

Scroll reveal (définies dans style.css) :
- `dcb-reveal` : fade-in au scroll
- `dcb-reveal-left` : slide from left
- `dcb-reveal-right` : slide from right
- `dcb-reveal-scale` : scale up
- `dcb-stagger` : reveal séquentiel des enfants

Carousel (data-attributes JS dans scripts.js) :
- `data-dcb-carousel` (wrapper), `data-dcb-track`, `data-dcb-prev`, `data-dcb-next`, `data-dcb-dots`

Counter animé :
- `dcb-counter` + `data-target="12000"`

Hover global : `dcb-btn-hover` (boutons), cards avec `hover:-translate-y-1` + shadow tintée bleu.

---

## 6. Breadcrumb : JSON-LD uniquement (⚠️ pas de breadcrumb visuel sur sous-pages caisse)

**Correction 2026-04-23** : le silo caisse n'a **PAS de breadcrumb visuel** sur les sous-pages. Seul le JSON-LD BreadcrumbList est présent dans le `<head>`.

Les sous-pages caisse (boulangerie, restaurant, etc.) n'affichent pas de `<nav aria-label="Fil d'Ariane">` dans le hero ni ailleurs. Ne pas ajouter de breadcrumb visuel sur les autres silos si l'objectif est la cohérence avec caisse.

Si on VOULAIT ajouter un breadcrumb visuel (choix UX ultérieur), le pattern standard serait :

HTML pattern :
```html
<nav aria-label="Fil d'Ariane" class="max-w-7xl mx-auto px-6 pt-6 text-sm text-slate-500">
  <ol class="flex flex-wrap items-center gap-2">
    <li><a href="../../index.html" class="hover:text-[#0B3D91]">Accueil</a></li>
    <li aria-hidden="true">·</li>
    <li><a href="../index.html" class="hover:text-[#0B3D91]">Caisse enregistreuse</a></li>
    <li aria-hidden="true">·</li>
    <li aria-current="page" class="text-[#0B3D91] font-medium">Page courante</li>
  </ol>
</nav>
```

JSON-LD correspondant :
```json
{
  "@context": "https://schema.org/",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {"@type":"ListItem","position":1,"name":"Accueil","item":"https://dcb-technologies.fr/"},
    {"@type":"ListItem","position":2,"name":"Caisse enregistreuse","item":"https://dcb-technologies.fr/caisse-enregistreuse/"},
    {"@type":"ListItem","position":3,"name":"Page courante"}
  ]
}
```

---

## 7. Date E-E-A-T "Mis à jour le"

Présent sur les 9 pages du silo caisse (Phase 10 validée).

Format exact, placé en bas de page (après FAQ, avant CTA final ou footer) :
```html
<p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">
  Mis à jour le <time datetime="2026-04-23">23 avril 2026</time>
</p>
```
Semantic HTML : `<time datetime="YYYY-MM-DD">texte lisible</time>`.

---

## 8. JSON-LD scaffolds par type

### Service (schema le plus répandu)
```json
{
  "@context": "https://schema.org/",
  "@type": "Service",
  "name": "Nom du service",
  "description": "Description courte.",
  "provider": {"@id": "https://dcb-technologies.fr/#localbusiness"},
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
  "serviceType": "Type de service",
  "url": "https://dcb-technologies.fr/[path]/"
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {"@type":"Question","name":"Q ?","acceptedAnswer":{"@type":"Answer","text":"Réponse."}}
  ]
}
```

### Product (borne, monnayeur)
```json
{
  "@type": "Product",
  "name": "Nom produit",
  "brand": {"@type": "Brand", "name": "Marque"},
  "url": "...",
  "offers": {"@type": "Offer", "price": "XXXX", "priceCurrency": "EUR"}
}
```

### HowTo (borne, monnayeur : 3 étapes d'installation)
Schema présent sur borne-de-commande + monnayeur uniquement.

### BreadcrumbList
Voir section 6.

### LocalBusiness
Défini dans `index.html` racine avec `@id="https://dcb-technologies.fr/#localbusiness"`, référencé par les autres schémas via `@id`.

---

## 9. Narrations observées (descriptif, PAS à généraliser)

Ordre de sections par page (informatif, chaque page garde sa narration unique) :

### Hub `/caisse-enregistreuse/`
1. Hero · 2. 4 cards métiers · 3. Comparatif CashMag vs Hairnet + stats · 4. Produits secondaires (borne, monnayeur) · 5. FAQ · 6. CTA final

### Sous-pages métiers (boulangerie, restaurant, commerce, coiffure)
Hero · Trust bar · Features 3 cols · Sticky sidebar 2x2 · Dual column (feature) · Dual column (feature) · Pricing · Témoignages · FAQ · CTA final · Datestamp

### CashMag (page dédiée)
Hero vert #76B737 · Trust bar · Pourquoi CashMag avec DCB · Accompagnement DCB (sticky) · Google Reserve · Fidélité · Pricing · Témoignages · FAQ · CTA final

### Hairnet (page dédiée)
Hero · Trust bar · Pourquoi Hairnet avec DCB · Accompagnement DCB · Google Reserve · Fidélité & parcours · Pilotage (grille 8) · NF525 compliance · Témoignages · Cross-sell CashMag · Inter-silo (coiffure, IT, web) · FAQ · CTA final

### Borne de commande
Hero · Trust bar · Stats · Features · Process 3 étapes · Produit (visuel) · Témoignages · FAQ · CTA final

### Monnayeur
Hero · Trust bar · Stats · ROI calculation cards · Process · Visuel produit · Témoignages · FAQ · CTA final

---

## 10. Maillage interne présent dans le silo caisse

### Liens systématiques
- CTA final : `href="../../contact/index.html"` (sous-pages)
- Téléphone : `href="tel:0482530510"`
- NF525 externe : `href="https://certification.afnor.org/"` avec `target="_blank" rel="noopener"`

### Cross-sell intra-silo caisse
- Hairnet → CashMag (cross-sell banner section 9b)
- Boulangerie → Monnayeur (mentionné dans CLAUDE.md, à vérifier en page)
- Restaurant → Borne de commande

### Cross-sell inter-piliers (ciblé, sur Hairnet uniquement aujourd'hui)
Section 11 de Hairnet : 3 cards vers coiffure, IT (maintenance), Web.
→ **Ce pattern est à généraliser** sur toutes les sous-pages IT et Web (cf. plan harmonisation).

---

## 11. Anomalies et dette technique observées

1. **Hairnet utilise un accent `#c59c45` en opacity variants peu cohérente** : parfois strong (témoignages, Google Reserve), parfois subtle (badges features). À valider si intentionnel.
2. **Cross-sell inter-silo présent uniquement sur Hairnet** : devrait être répliqué sur toutes les pages (cf. plan).
3. **Breadcrumb présent sur sous-pages mais absent sur les 2 hubs** (caisse, et à auditer pour IT, Web).
4. **Cards métiers sur hub caisse n'ont pas de hauteur fixe** (alignement top, flex) : acceptable mais crée du bruit visuel si contenus très inégaux.
5. **Pricing card featured** : `md:scale-105` + `ring-2` appliqué de façon inégale selon page (CashMag ok, certaines métier pas de featured).

---

## 12. Checklist de réplication (nouvelle page silo)

Pour appliquer ce DNA à une page IT ou Web :

- [ ] Hero section `py-12 lg:py-16` avec accent métier et blob decorations
- [ ] Hero H1 : `font-sora text-4xl md:text-[2.75rem] lg:text-5xl font-bold text-white`
- [ ] Badges en flex wrap avec `bg-white/20 ... border-white/30`
- [ ] CTA primary orange `#F57C00`, CTA secondary border-white
- [ ] Trust bar `py-6 bg-white border-b border-slate-100` avec 4 items et séparateurs `|`
- [ ] Container universel `max-w-7xl mx-auto px-6`
- [ ] Sections en alternance `bg-white` / `bg-[#F8F9FA]`
- [ ] H2 de section : `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]`
- [ ] Label uppercase : `text-[11px] font-bold tracking-[0.2em] text-[#ACCENT] uppercase`
- [ ] Cards features : `bg-white p-6 rounded-xl tonal-shift-elevation`
- [ ] Grids : `grid-cols-1 md:grid-cols-3 gap-6 dcb-stagger`
- [ ] Zéro bordure 1px entre sections (règle absolue)
- [ ] Breadcrumb visuel + JSON-LD BreadcrumbList
- [ ] Témoignages carousel avec `data-dcb-carousel` (4 cards)
- [ ] FAQ accordéon `<details class="faq-item">` (4 à 8 Q/R)
- [ ] CTA final `.cta-final` avec bouton + téléphone
- [ ] Date E-E-A-T en bas : `<time datetime="YYYY-MM-DD">`
- [ ] JSON-LD : Service + FAQPage + BreadcrumbList minimum
- [ ] Cross-sell inter-pilier (3 cards) avant CTA final
- [ ] Animations : `dcb-reveal`, `dcb-stagger` sur les sections et grids
- [ ] Responsive : `grid-cols-1` par défaut, `md:` et `lg:` pour les breakpoints
- [ ] Rebuild Tailwind après modifs : `./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify`
- [ ] Grep `—` sur le fichier final : zéro match attendu

---

**Document généré le 2026-04-23 par analyse exhaustive du silo caisse.**
**À mettre à jour si le silo caisse évolue (source de vérité).**
