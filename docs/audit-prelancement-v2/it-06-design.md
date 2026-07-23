# IT-06 : Design / grammaire visuelle / a11y (silo IT dégelé)

Auditeur : design-reviewer (opus). Date : 23/07/2026.
Source auditée : worktree `deploy-it` (= origin/deploy = live /new/), 6 pages `maintenance-informatique/` desktop + mobile.
Référentiel : CLAUDE.md repo principal (« Grammaire visuelle ») + docs/front-library.md. Standard de comparaison : silo caisse du MÊME worktree.

## Note : 90/100

Refonte propre. La grammaire des deux familles (hub marque orange multi-accent / sous-pages narration à accent unique) est respectée à la lettre, les accents des anciens slugs ont été correctement reportés sur les nouveaux, les paires accent/accent-dark sont exactes, le CTA final v3 est piloté par variables sans couleur en dur (mieux que restaurant), et tous les atomes (cards, boutons, témoignages, ping dots, hero layered) sont ceux du silo caisse. Zéro tiret cadratin. Zéro bloquant design dur. Les points restants sont des observations post-lancement, dont un contraste hérité du standard (pas une dérive IT).

## Tableau accent par page

| Page | Famille | Accent | Dark | Ancien slug (accent d'origine) | Conforme |
|---|---|---|---|---|---|
| `index.html` (hub) | Marque | `#F57C00` orange | `#E06E00` | hub IT | OUI, multi-accent (89 occ. des 5 accents enfants) + orange identité |
| `infogerance-maintenance` | Narration | `#F59E0B` ambre | `#D97706` | infogerance-pme (ambre) | OUI, accent reporté |
| `depannage-assistance` | Narration | `#EF4444` rouge | `#DC2626` | maintenance-depannage (rouge) | OUI |
| `cybersecurite-sauvegarde` | Narration | `#0D9488` teal | `#0F766E` | cloud-securite (teal) | OUI |
| `emails-pro-collaboration` | Narration | `#A855F7` violet | `#9333EA` | outils-collaboratifs (violet) | OUI |
| `materiel-reseaux` | Narration | `#4F46E5` indigo | `#4338CA` | location-vente-installation (indigo) | OUI |

Un seul accent dominant par sous-page, aucun accent concurrent, aucune paire cassée. Les cinq paires correspondent exactement au registre de CLAUDE.md.

## Bloquants pré-lancement (design)

Aucun.

## Vérifications passées

1. **Orange sur pages narration** : les seules occurrences d'orange `#F57C00` hors hub sont des hovers de cross-sell vers des pages MARQUE (caisse, contact), donc « couleur de destination » conforme : `depannage-assistance:810` (lien « matériel de caisse »), `materiel-reseaux:209` (CTA contact), `materiel-reseaux:536-537` (card « Voir les solutions caisse »). Aucun orange résiduel parasite. `infogerance-maintenance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration` : zéro orange.
2. **CTA final v3 « Le Seuil »** : présent sur les 6 pages (desktop `.d-cta-final` + mobile `.m-cta-final`). Atomes 100 % en `var(--accent)`/`--accent-dark`/`--accent-shadow`, aucune couleur en dur. Exemple propre `depannage-assistance:840-863` (filet, d-tel `aria-label`, icônes `aria-hidden`, `<time datetime>`). C'est plus propre que la dérive en dur signalée par CLAUDE.md sur restaurant.
3. **Animations** : système maison `dcb-reveal`/`dcb-stagger` présent (13 à 20 occurrences/page). Le `hero-blob-a/b` (float 16s/12s infinite) d'`infogerance-maintenance:23-63` est IDENTIQUE au standard du silo caisse (toutes les pages caisse le portent) : ce n'est pas une invention de la refonte, donc pas de l'AI-slop. `animate-ping` sur les status dots est gardé par `prefers-reduced-motion` sur les 6 pages, comme en caisse. Toutes les animations non-triviales ont une garde reduced-motion.
4. **A11y** : 2 `<h1>` par page = pattern dual-shell établi (boulangerie caisse idem), un seul rendu par viewport. FAQ en `<details>/<summary>` natif (clavier + lecteur d'écran gratuits). `skip-link`, `aria-label` sur les liens tel, `aria-hidden` sur les icônes décoratives, `alt` présent sur toutes les `<img>` (testimonials, hero, cross-sell). Cibles tactiles mobiles au format `.chip`/`.btn` standard.
5. **Cohérence atomes vs caisse** : mêmes boutons, cards `rounded-xl/2xl`, séparateurs internes de card `border-t border-slate-100` (dans les cards, pas entre sections), témoignages, ping dots, hero « layered ». Aucune dérive locale d'atome.
6. **Ombres / bordures / pastilles** : ombres de card standard (pas de bordure 1px entre sections, shift tonal respecté), pastilles d'icône en teinte `accent/10` sans ombre. Conforme.
7. **Mobile** : `.m-shell` présent avec contenu complet (hero, chips, scène, sections), aucune largeur fixe ≥100px génératrice de débordement, `mobile.css?v=34` uniforme sur les 6 pages.

## Améliorations post-lancement (non bloquantes)

1. **Contraste blanc sur ambre** (site-wide, PAS une dérive IT) : `infogerance-maintenance:213` `bg-[#F59E0B] text-white` donne un ratio ≈ 2:1 (échec WCAG AA). Constat IDENTIQUE sur la référence `caisse-enregistreuse/boulangerie:149` (même accent ambre) : c'est un défaut hérité du standard, à traiter globalement (assombrir le fond bouton vers `--accent-dark` `#D97706` sur ambre, ou texte foncé), pas page par page dans le dégel IT. Teal `#0D9488` et violet `#A855F7` sur blanc sont limites (~3.5:1, OK en texte large/bold), indigo `#4F46E5` passe.
2. **Couleur des ping dots** : mélange `#10B981` vert « disponible » (hub, infogerance, depannage) et accent de page (cyber teal, emails violet, materiel indigo). Sémantiquement le vert « en ligne » est défendable, mais uniformiser améliorerait la cohérence.
3. **Présence du hero-blob** : seul `infogerance-maintenance` porte le `hero-blob` animé (1/6), les 5 autres sous-pages ne l'ont pas. Purement cosmétique : harmoniser (ajouter aux 5 ou retirer de la 1) pour un rendu de silo homogène.

## Section « IT gelé »

Sans objet : le silo IT est ici la cible de l'audit dégel, pas un placeholder. Aucun constat renvoyé en gelé.

## Delta vs v1 (09-design.md, 89/100)

Le rapport v1 portait sur les anciens slugs. Le point P1 v1 (float `flsp`/`flsp-mon` sans garde reduced-motion sur borne+monnayeur) concernait le silo caisse, hors périmètre IT. Côté IT dégelé : accents correctement migrés, CTA final propre en variables, motion gardée. Note supérieure (90) car aucune dérive de couleur en dur ni motion inventée introduite par la refonte.
