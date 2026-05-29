# DCB Technologies — Design System

## Colors
- Primary: #0B3D91 (bleu principal, titres, liens actifs, hero)
- Primary Dark: #072B6B (footer, gradient fin)
- Primary Light: #E6EEF9 (fond hover, encadrés info)
- CTA: #F57C00 (orange — boutons CTA uniquement)
- Surface 0: #FFFFFF
- Surface 1: #F8F9FA (sections alternées légères)
- Surface 2: #F3F4F5 (sections alternées medium)
- Text Muted: #4A5568 (texte secondaire)
- Ombre tintée bleue: rgba(7,43,107,0.04) pour les cards

## Industry Accents
- Boulangerie: #F59E0B (ambre)
- Restaurant: #EF4444 (coral)
- Commerce: #0D9488 (teal)
- Coiffure: #A855F7 (violet)
- IT Maintenance: #EF4444 (urgence)
- IT Cloud: #0D9488 (éducation)
- IT Location: #4F46E5 (indigo — décision)
- IT Outils: #A855F7 (violet — demo)
- IT Infogérance: #F59E0B (ambre — seul accent disponible du silo, hero gradient #92400E→#B45309)

## Typography
- Display/Titres: Sora (font-sora), bold, text-3xl md:text-4xl
- Corps: Inter
- Labels: text-[11px] font-bold tracking-[0.2em] uppercase
- H2 standard: font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]

## Spacing & Layout
- Sections: py-12 lg:py-16
- Container: max-w-7xl mx-auto px-6
- Nav height: h-[76px], main padding-top: pt-[76px]

## Components
- Boutons: rounded-lg (14px), CTA orange #F57C00 — exception: héro de sous-page à fond coloré (accent silo), le CTA héro utilise la couleur accent de la page
- Cards: rounded-xl ou rounded-2xl, ombre rgba(7,43,107,0.04)
- Cards service hub: top-stripe `h-[3px] ou h-[4px] bg-gradient-to-r` en couleur accent = signature design validée (homepage, hub caisse, hub IT, etc.) — ne pas supprimer
- Nav: bg-white (jamais de backdrop-blur), h-[76px]
- Build: Tailwind CSS statique (tailwind.min.css), pas de CDN runtime

## Absolute Rules
- Zéro backdrop-blur sur la nav
- Orange uniquement sur CTA
- Séparation sections par shift tonal, jamais de border-top/bottom 1px
- Zéro em dash dans le contenu
