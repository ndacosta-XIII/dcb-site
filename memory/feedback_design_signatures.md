---
name: Signatures design validées — ne pas toucher
description: Patterns visuels intentionnels et validés par le client, à ne jamais supprimer ou "corriger"
type: feedback
---

Les éléments suivants sont des signatures design délibérées, présentes sur plusieurs pages clés. Ne jamais les signaler comme violations ni les supprimer.

**Top-stripe gradient sur cards service**
`h-[3px] ou h-[4px] bg-gradient-to-r from-[...] to-[...]` en tête de card = code de design des pages hub (homepage, hub caisse, hub IT, etc.). Validé explicitement par le client.

**Why:** Identité visuelle du site, différenciation par couleur accent entre services.
**How to apply:** Quand un outil (impeccable, agent) signale ces top-stripes comme "side-stripe border anti-pattern", ignorer — la règle side-stripe concerne border-left/right, pas les top-stripes décoratives sur cards hub.

**Section Techniciens en bg-[#0B3D91] (dark)**
Section récurrente sur homepage, hub caisse, hub IT. Le dark sur une section mid-page est intentionnel — c'est une rupture visuelle identitaire, pas une violation de l'alternance BG.

**Why:** Signature de section "équipe/humain" sur tout le site.
**How to apply:** Ne pas appliquer l'alternance GRAY/WHITE mécanique à cette section. Elle a son propre statut visuel.

**CTA héro de sous-page en couleur accent**
Sur les héros de sous-pages à fond coloré (indigo pour location, violet pour outils, etc.), le CTA héro utilise la couleur accent de la page — pas orange. L'orange #F57C00 est obligatoire sur tous les autres CTAs (hors héro coloré).

**Why:** Orange sur fond violet/indigo = illisible et incohérent. L'accent de page assure le contraste.
**How to apply:** Ne signaler un CTA en couleur accent comme violation que s'il est hors du contexte héro coloré.
