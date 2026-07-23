# 09 · Design / A11y / Cohérence visuelle (audit pré-lancement V2)

Auditeur : design-reviewer (opus). Date : 22/07/2026. Cible : miroir local de https://dcb-technologies.fr/new/.
Référentiel : CLAUDE.md « Grammaire visuelle du site » + docs/front-library.md.
Échantillon audité (desktop ET mobile) : homepage, hub caisse, boulangerie, restaurant, coiffure, page département Rhône, hub Web, creation-site-internet, contact, article blog NF525, plus balayages transverses sur les 28 pages.

## Note : 89/100

Justification : la grammaire visuelle est respectée de façon quasi systématique (zéro backdrop-blur nav, zéro `title` sur `abbr`, zéro tiret cadratin, zéro emoji décoratif, pastilles sans ombre, CTA final piloté par `var(--accent)`, deux familles orange correctement appliquées). Les fondamentaux a11y sont solides (198/198 images avec `alt`, focus-visible défini, 78 attributs ARIA sur les composants injectés, FAQ en `details/summary` natif, skip-link, marquee doublé d'un équivalent lecteur d'écran). Aucun bloquant design/a11y au sens dur (aucun token violé, aucun contraste cassé, aucune parité mobile amputée côté visuel). Les points retirés portent sur des animations hors système maison (AI-slop léger) dont une sans garde `prefers-reduced-motion`, et quelques nuances de cohérence cross-sell.

## BLOQUANTS pré-lancement

Aucun bloquant dur. Un seul point mérite correction avant lancement au titre de l'accessibilité (garde reduced-motion manquante), traité ci-dessous en tête des améliorations car peu coûteux.

## Améliorations (priorisées)

### P1 · Animation en boucle sans garde `prefers-reduced-motion` (a11y)
- Constat : le badge flottant en oscillation continue `flsp` / `flsp-mon` (`@keyframes ... translateY` infini) n'est PAS coupé par le bloc `prefers-reduced-motion`, qui ne couvre que `hero-blob-a/b`.
- Preuve : `caisse-enregistreuse/borne-de-commande/index.html:60` (`@keyframes flsp`) vs garde partielle `:33` (hero-blob uniquement). Idem `caisse-enregistreuse/monnayeur/index.html:60` (`flsp-mon`) vs `:33`.
- Correction : ajouter `.flsp, .flsp-mon { animation:none !important }` dans le bloc `@media (prefers-reduced-motion: reduce)` existant de ces deux pages. Modèle déjà correct sur le hub caisse (`caisse-enregistreuse/index.html:58`, `cm-kpi-badge` couvert).

### P2 · Animations hors système maison (chasse à l'AI-slop)
Le référentiel n'autorise que `dcb-reveal` / `dcb-stagger` + hovers standards ; hero-blob est toléré (documenté front-library). Restent hors système, à justifier ou retirer en phase de-slop :
- `cm-kpi-in-top` / `cm-kpi-in-bot` (entrée des KPI avec rotation 2,5deg) : `caisse-enregistreuse/index.html:54-55`. Garde reduced-motion OK, mais motif d'entrée custom hors `dcb-reveal`.
- `flsp` / `flsp-mon` (oscillation perpétuelle du badge) : borne + monnayeur (cf. P1). Le mouvement perpétuel est le pattern d'AI-slop le plus visible.
- `form-card-in` (entrée de la card formulaire) : `contact/index.html:48-53`. One-off soigné, faible priorité.
- `d-partners-scroll` / `h-partners-scroll` (marquee logos partenaires homepage) : `index.html:73,136`. Acceptable (contenu défilant fonctionnel), à conserver.
Recommandation : aligner cm-kpi et form-card sur `dcb-reveal`/`dcb-reveal-scale` (pattern P-01b déjà utilisé ailleurs) ; supprimer ou figer l'oscillation perpétuelle flsp.

### P3 · Nuance couleur cross-sell (cohérence)
- Constat : deux cross-sell portent l'orange marque au hover au lieu de la couleur de leur page de DESTINATION.
  - `caisse-enregistreuse/coiffure/index.html:295` : lien vers Hairnet en `hover:text-[#F57C00]` (Hairnet a son accent propre violet `#4527A4` + or `#C59C45`).
  - `caisse-enregistreuse/boulangerie/index.html:234` : lien vers CashMag en `hover:text-[#F57C00]` (CashMag a son accent vert partenaire `#76B737`).
- Nuance : le cross-sell vers un HUB (ex. coiffure L483/488 vers la maintenance IT) en orange est CORRECT (le hub est une page marque). Le point ne concerne que les destinations à accent propre (hairnet, cashmag).
- Correction : passer ces deux hovers à la couleur de destination. Impact faible, page par page.

### P4 · Card formulaire contact : bordure 1px au lieu de l'élévation tonale
- Constat : `.form-card` utilise `border: 1px solid #E5E9F0` : `contact/index.html:55`. Le système DCB privilégie `tonal-shift-elevation` (ombre bleutée) plutôt qu'un trait 1px.
- Nuance : ce n'est pas une bordure « entre sections » (règle non violée), mais une entorse au langage d'élévation. La card porte déjà une ombre bleutée cohérente à côté. Cosmétique.

## Ce qui est bon (à ne pas casser)

- Deux familles orange respectées : pages narration à accent dominant unique ; orange résiduel sur sous-pages métier = uniquement cross-sell vers hub/marque (destination) et filet footer. Vérifié boulangerie, restaurant, coiffure.
- CTA final v3 : atomes pilotés par `--accent`/`--accent-dark` en variables, desktop ET mobile. La dérive historique restaurant (couleur en dur, CLAUDE.md) est RÉSOLUE : `caisse-enregistreuse/restaurant/index.html:543` (desktop) et `:906` (mobile) utilisent bien les variables.
- Hub caisse multi-accent : chaque card enfant porte l'accent de sa sous-page (ambre, rouge, teal, violet, indigo, vert), pastilles `bg-[accent]/10` sans ombre. Conforme.
- Zéro backdrop-blur nav, zéro `title` sur `abbr` (partout `data-tooltip` + `aria-label`), zéro tiret cadratin dans le contenu, zéro emoji décoratif (les `★` sont des glyphes d'étoiles d'avis, légitimes).
- Pas de bordure 1px entre sections : les `border-slate-100` relevés sont des diviseurs INTERNES de cards (séparateur prix/features, auteur de témoignage), pas des séparateurs de sections.
- A11y solide : 198/198 `<img>` avec `alt` ; `focus-visible` défini dans `css/style.css` et `m/css/mobile.css` ; 78 attributs ARIA dans `js/scripts.js` (nav, menu, carousel, sheet injectés) ; FAQ en `details/summary` natif ; skip-link mobile ; marquee `aria-hidden` doublé d'une liste `sr-only`.
- Hiérarchie headings : un seul H1 rendu par shell (le compte de 2 par page = H1 desktop + H1 mobile, l'un des deux masqué par `display:none`). H2 standard `font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]` présent sur 25 pages.
- Mobile : `m/css/mobile.css` utilise des largeurs en % et `max-width`, avec breakpoints d'ajustement 375px et 360px. Aucun risque de débordement horizontal par largeur fixe détecté dans le code.

## Section « IT gelé » (maintenance-informatique/, placeholder Clément)

Constats sortis du périmètre actionnable, listés pour mémoire :
- `animate-ping` sur le point « Système Online » du hero dashboard : présent sur les 6 pages IT (`maintenance-informatique/index.html:157`, cloud-securite, infogerance-pme, location-vente-installation, maintenance-depannage, outils-collaboratifs). C'est le pattern documenté front-library P-01b (live-monitoring), avec garde `prefers-reduced-motion` sur les sous-pages (ex. `maintenance-depannage/index.html:35`). Conforme au système, à conserver.
- Accents IT corrects par page (rouge maintenance-depannage, ambre infogerance-pme, teal cloud-securite, violet outils-collaboratifs, indigo location-vente-installation). Grammaire respectée.
- Aucun défaut design bloquant propre au silo IT au-delà du gel de contenu déjà connu.

## Delta avec le rapport v1 (docs/audit-prelancement/)

La campagne v1 n'avait PAS de dimension design/a11y dédiée (v1 = 09a-verification-code + 09b-verification-comptes, orientées code/config). Ce rapport est donc le premier passage design formel de la série pré-lancement. Points v1 connexes confirmés résolus : la dérive « couleur en dur » du CTA final restaurant (mentionnée dans CLAUDE.md) est corrigée. Aucun régression visuelle constatée par rapport à l'état v1.
