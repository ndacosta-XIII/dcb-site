# Audit AI-slop : site DCB Technologies

> Audit en lecture seule, 11/06/2026. Périmètre : 23 pages HTML de contenu (les relances `Logo et images/` sont hors site, ignorées) + références motion. Méthode : grep systématique des fingerprints de slop + lecture ciblée, croisée avec la grammaire visuelle (CLAUDE.md), `docs/front-library.md` et l'anti-checklist motion. La doctrine "orange frame des pages narration = cible non implémentée (trigger 13header/13footer)" est respectée : non comptée comme slop. Pages légales volontairement sobres : non auditées sur l'accent.

## 1. Synthèse

| Catégorie | Critique | Majeur | Mineur | Total |
|---|---|---|---|---|
| 10. Animation hors système maison (looping breathe, spinners, kpi-breathe) | 0 | 2 | 7 | 9 |
| 11. Easing overshoot / spring sur élément non ludique (badge-pop bounce) | 0 | 1 | 0 | 1 |
| Accessibilité motion : `prefers-reduced-motion` absent sur page animée | 0 | 4 | 3 | 7 |
| 1. Top-stripes dégradés en haut de cards (dette connue phase 2) | 0 | 0 | 7 | 7 (×26 occ.) |
| 5. Blobs radial/blur décoratifs hero | 0 | 0 | inventaire | 23 instances (canonique) |
| 4. Glow/halo boutons | 0 | 0 | 0 | 0 (rien trouvé) |
| 3. backdrop-blur / glassmorphism | 0 | 0 | 0 | 0 |
| 6. Bordures 1px entre sections | 0 | 0 | 0 | 0 |
| 7. Couleur en dur contournant --accent | 0 | 0 | 0 | 0 (CTA conformes) |
| 8. Emojis comme icônes | 0 | 0 | 0 | 0 (★ = glyphe typo, OK) |
| 9. Ombres non tintées bleu | 0 | 0 | contextuel | 0 bloquant |
| 13. Em dash | 0 | 0 | 0 | 0 |
| 12/14. Tics de langage IA / placeholders | 0 | 1 | 1 | 2 |

**Verdict global : GO avec réserves.** Aucun défaut critique. Le site est globalement propre et discipliné (zéro backdrop-blur, zéro em dash, zéro halo bouton, CTA finaux pilotés par `--accent`). Deux foyers de slop motion à traiter (silo Web : breathe loops + spring bounce sans garde reduced-motion) et une dette visuelle connue (top-stripes dégradés des cards hub/cross-sell).

## 2. Findings détaillés par page

### Silo Web (foyer principal de slop motion)

| Fichier | Section | Ligne(s) | Pattern | Sévérité | Correction |
|---|---|---|---|---|---|
| visibilite-web/seo-sea-local/index.html | Hero mockup téléphone | 88-89 | `animation:phone-breathe ... infinite` (loop float hors système dcb-reveal) | Majeur | Supprimer le loop OU le passer en `dcb-reveal` au scroll. Sinon ajouter garde reduced-motion. |
| visibilite-web/seo-sea-local/index.html | Badges flottants SERP | 94, 101 | `badge-pop ... cubic-bezier(0.34,1.56,0.64,1)` : easing overshoot (bounce) sur élément non ludique | Majeur | Remplacer par une entrée `dcb-reveal` (opacity+translateY, easing standard). |
| visibilite-web/seo-sea-local/index.html | Tout le mockup animé | tête de `<style>` | Aucun `@media (prefers-reduced-motion)` alors que la page anime en boucle | Majeur | Ajouter le bloc reduced-motion (modèle : boulangerie L33). |
| visibilite-web/index.html | Hero mockup iPhone | 91-92 | `animation:iphone-breathe ... infinite` loop hors système | Majeur | Idem : convertir en reveal ou garder statique. |
| visibilite-web/index.html | `<style>` | global | `prefers-reduced-motion` absent | Majeur | Ajouter la garde. |
| visibilite-web/creation-site-internet/index.html | Hero mockup iPhone | 84-85 | `animation:iphone-breathe ... infinite` loop hors système | Mineur | Convertir en reveal / statique. |
| visibilite-web/creation-site-internet/index.html | `<style>` | global | `prefers-reduced-motion` absent | Mineur | Ajouter la garde. |
| visibilite-web/index.html | Cards cross-sell silo | 449, 473, 497 | Top-stripe `h-[3px] bg-gradient-to-r` (dette phase 2) | Mineur | Phase 2 : remplacer la barre dégradée par un aplat couleur destination ou supprimer. |

### Hubs (top-stripes : dette connue, couleur = destination donc signal légitime, forme à nettoyer)

| Fichier | Section | Ligne(s) | Pattern | Sévérité | Correction |
|---|---|---|---|---|---|
| index.html (accueil) | 3 cards piliers | 434, 452, 470 | `linear-gradient(...) top/100% 3px` top-stripe | Mineur | Phase 2 : aplat couleur destination. |
| caisse-enregistreuse/index.html | Cards métier | 397, 429, 468, 500 | Top-stripe `h-[3px] bg-gradient-to-r` | Mineur | Phase 2. |
| caisse-enregistreuse/saone-et-loire/index.html | Cards métier | 199, 231, 270, 302 | Top-stripe `h-[3px]` | Mineur | Phase 2. |
| caisse-enregistreuse/cashmag/index.html | Cards (2 grilles) | 458,470,482,494,623,635,647 | Top-stripe `h-[3px]` ×7 | Mineur | Phase 2. |
| maintenance-informatique/index.html | Cards services | 218 (`h-[4px]`), 259, 290, 328, 359 | Top-stripe ×5 (dont une `h-[4px]`, incohérence d'épaisseur) | Mineur | Phase 2 + uniformiser l'épaisseur. |

### Hub caisse : badges flottants animés

| Fichier | Section | Ligne(s) | Pattern | Sévérité | Correction |
|---|---|---|---|---|---|
| caisse-enregistreuse/index.html | KPI badges mockup CashMag | 79-80 | `animation:kpi-top-breathe / kpi-bot-breathe ... infinite` loop hors système maison | Mineur | Tolérable (garde reduced-motion présente L44). Idéalement convertir en reveal one-shot. |

### Pages avec "live indicator" animé (canonique : présent dans front-library L423)

Pattern `animate-ping` / `animate-pulse` sur point de statut. C'est un pattern **documenté dans la bibliothèque** (donc non-slop), MAIS plusieurs pages qui l'utilisent n'ont pas de garde `prefers-reduced-motion` (le loop `animate-ping` tourne en boucle infinie).

| Fichier | Ligne | Élément | Sévérité | Note |
|---|---|---|---|---|
| maintenance-informatique/cloud-securite/index.html | 131 | `animate-ping` sans reduced-motion | Mineur | Garde absente. |
| maintenance-informatique/outils-collaboratifs/index.html | 131 | `animate-ping` sans reduced-motion | Mineur | Garde absente. |
| maintenance-informatique/maintenance-depannage/index.html | 130 | `animate-ping` sans reduced-motion | Mineur | Garde absente. |
| maintenance-informatique/location-vente-installation/index.html | 123 | `animate-ping` sans reduced-motion | Mineur | Garde absente. |
| caisse-enregistreuse/hairnet/index.html | 235 | `animate-pulse` sur dot (anti-checklist : pulsing indicator) sans reduced-motion | Mineur | Préférer un dot statique (Emil : pulsing = slop quasi systématique). |
| maintenance-informatique/index.html, infogerance-pme | 130 / 129 | `animate-ping` | OK | Ces pages ONT la garde reduced-motion. |

### Contenu

| Fichier | Ligne | Pattern | Sévérité | Correction |
|---|---|---|---|---|
| caisse-enregistreuse/monnayeur/index.html | 537 | Parallélisme négatif "ce n'est pas une caisse..., c'est un système..." (tic IA classique) | Majeur | Reformuler en affirmation directe (déléguer copywriter-site). |
| maintenance-informatique/outils-collaboratifs/index.html | 505, 845 | "Prêt à booster la collaboration" : verbe marketing creux ("booster") | Mineur | Reformuler avec un bénéfice concret. |

> Note : "Booster ma visibilité" (hebergement L521, L860) est un libellé de lien cross-sell vers SEO/SEA, acceptable en contexte. Les ★★★★★ sont des glyphes typographiques de notation (pas des emojis), usage cohérent : RAS.

## 3. Top 10 des corrections prioritaires

1. **seo-sea-local** : remplacer `badge-pop` (easing bounce 1.56) par une entrée `dcb-reveal` standard (L94, L101).
2. **seo-sea-local** : supprimer/convertir `phone-breathe` loop infini (L88-89) + ajouter garde reduced-motion.
3. **visibilite-web hub** : supprimer/convertir `iphone-breathe` (L91-92) + ajouter reduced-motion.
4. **creation-site-internet** : idem `iphone-breathe` (L84-85) + reduced-motion.
5. **monnayeur** : reformuler le parallélisme négatif L537 (copywriter-site).
6. **Pages narration IT** (cloud-securite, outils, maintenance-depannage, location) : ajouter `prefers-reduced-motion` couvrant `animate-ping` (4 fichiers).
7. **hairnet** : remplacer `animate-pulse` du dot (L235) par un état statique + reduced-motion.
8. **Top-stripes hub** (phase 2 planifiée) : convertir les barres dégradées en aplat couleur destination, en commençant par maintenance-informatique (uniformiser le `h-[4px]` L218 vers `h-[3px]`).
9. **Hub caisse** : convertir `kpi-top/bot-breathe` (L79-80) en reveal one-shot.
10. **Audit de cohérence reduced-motion global** : seules 12/23 pages ont la garde ; aligner les 11 restantes qui contiennent du mouvement.

## 4. Ce qui est bon (à ne pas casser)

- **Zéro `backdrop-blur` / glassmorphism** sur l'ensemble du site (nav et ailleurs). Conforme à la doctrine.
- **Zéro em dash** dans les 23 pages de contenu (les caractères U+2014 trouvés sont uniquement dans le corpus de test d'un skill, hors site).
- **Zéro halo/glow décoratif sur les boutons** : la roadmap mentionnait un risque glow pricing IT, non confirmé dans le code actuel.
- **CTA finaux conformes** : aucune couleur en dur contournant `--accent`/`--accent-dark` détectée (le grep box-shadow non-bleu retourne 0).
- **Système hero-blob canonique** : les 23 instances de blobs blur-3xl suivent le pattern front-library (L67-71, L263), avec garde reduced-motion sur les pages caisse/accueil. Cohérent, pas slop (forme uniforme = intentionnelle et documentée).
- **Système reveal/stagger maison** respecté sur la majorité des pages ; pas de stagger-spam multi-listes détecté.
- **Date E-E-A-T "Mis à jour le"** présente sur les 23 pages : signature transverse intacte.
- **Étoiles de notation** en glyphes typographiques (pas d'emoji-icône) avec couleur = accent de page : cohérent.
- **Pills hero** `border border-white/20` : bordures intentionnelles sur fond foncé, pas des séparateurs inter-sections 1px (la règle "zéro bordure 1px entre sections" est respectée, le site fonctionne au shift tonal).

## Annexe : ce qui N'EST PAS du slop (faux positifs écartés)

- `animate-ping` "live indicator" : documenté front-library L423, pattern canonique.
- hero-blob blur-3xl : pattern canonique (front-library section 1).
- gradients `linear-gradient(135deg, accent, accent-dark)` sur icônes/avatars : paires accent/accent-dark de la grammaire, pas des gradients "SaaS IA" hors palette.
- `.nf-pillars::before` (ligne timeline 2px) : connecteur visuel de process, pas un top-stripe de card.
- spinners `@keyframes spin` (contact, blog) : loaders de formulaire, fonctionnels et justifiés.
- frame orange des pages narration : cible non implémentée (13header/13footer), exclue par doctrine.
