# DCB Technologies : Design System (brief pour skills)

Source de vérité complète : `CLAUDE.md` section "Grammaire visuelle du site" + `docs/front-library.md`. Ce fichier est le résumé pour les skills.

## Règle maîtresse : deux familles de pages
- **Pages marque** (accueil, hubs caisse/IT/web, contact, notre-adn, blog, saone-et-loire, cashmag) : orange #F57C00 = couleur identité (eyebrows, icônes, badges, CTA, CTA final), sur base bleu primaire.
- **Pages narration** (toutes les sous-pages métier/service) : ZÉRO orange, l'accent de la page habille tout. Exceptions : filet signature footer (orange constant), cards cross-sell vers une page marque (orange = couleur de destination). La frame injectée (téléphone nav, FAB, sheet) est encore orange : passage à `--page-accent` prévu, ne pas corriger page par page.

## Colors
- Primary: #0B3D91 (bleu principal, titres, liens actifs, hero)
- Primary Dark: #072B6B (footer, gradient fin de hero marque)
- Primary Light: #E6EEF9 (fond hover, encadrés info)
- Orange DCB: #F57C00 (identité pages marque ; interdit sur pages narration hors exceptions)
- Surface 0: #FFFFFF · Surface 1: #F8F9FA · Surface 2: #F3F4F5 (alternance par shift tonal)
- Text Muted: #4A5568
- Ombre tintée bleue: rgba(7,43,107,0.04) pour les cards

## Accents par page (paires accent / accent-dark)
- boulangerie, infogerance-pme : #F59E0B / #D97706
- restaurant, maintenance-depannage, seo-sea-local : #EF4444 / #DC2626
- commerce-de-detail, cloud-securite, hebergement : #0D9488 / #0F766E
- coiffure, outils-collaboratifs : #A855F7 / #9333EA
- borne-de-commande, location-vente-installation : #4F46E5 / #4338CA
- monnayeur : #059669 / #047857
- creation-site-internet : #7C3AED / #6D28D9
- cashmag : #76B737 / #5E9028
- hairnet : #4527A4 + or #C59C45
- pages marque (orange DCB) : #F57C00 / #E06E00

Règles : un seul accent dominant par sous-page. Cross-sell = couleur de la page de DESTINATION. Hub = multi-accent (chaque card porte l'accent de sa cible). Rouge : référence #EF4444, déclinaisons #F87171 / #DC2626 / #B91C1C uniquement en gradients et dark pairs. Pages légales : zéro accent.

## Typography
- Display/Titres: Sora (font-sora), bold, text-3xl md:text-4xl
- Corps: Inter
- Labels/eyebrows: text-[11px] font-bold tracking-[0.2em] uppercase
- H2 standard: font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]

## Spacing & Layout
- Sections: py-12 lg:py-16
- Container: max-w-7xl mx-auto px-6
- Nav height: h-[76px], main padding-top: pt-[76px]

## Components
- Boutons CTA: rounded-[14px]. Pages marque : orange. Pages narration : couleur accent de la page.
- Cards: rounded-xl ou rounded-2xl, classe tonal-shift-elevation, ombre rgba(7,43,107,0.04)
- CTA final v3 obligatoire en fin de page ("Le Seuil" desktop, "Le Bord Tranché" mobile), piloté par var(--accent)/var(--accent-dark), jamais de couleur en dur. Date E-E-A-T "Mis à jour le ..." incluse.
- Top-stripe colorée sur cards (h-[3px] bg-gradient-to-r) : pattern hérité jugé AI slop, suppression prévue en phase de nettoyage. NE PAS en créer de nouvelles.
- Nav: bg-white (jamais de backdrop-blur), h-[76px]
- Animations : uniquement le système maison dcb-reveal / dcb-stagger + hovers standards.
- Build: Tailwind CSS statique (tailwind.min.css), pas de CDN runtime

## Absolute Rules
- Zéro backdrop-blur sur la nav
- Doctrine orange deux familles (cf. règle maîtresse ci-dessus)
- Séparation sections par shift tonal, jamais de border-top/bottom 1px
- Zéro em dash dans le contenu
