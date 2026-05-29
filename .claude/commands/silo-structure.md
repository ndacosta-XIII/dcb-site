---
description: Harmonise le squelette, le design atomique et le maillage interne d'un silo (IT ou Web) sur la base du silo caisse (référence). NE TOUCHE PAS aux narrations uniques de chaque page (Phase 7 "Casser le Template Rigide" respectée).
argument-hint: <informatique|web>
allowed-tools: Read, Write, Edit, Grep, Glob, Bash, Skill, Agent
---

# Workflow — Harmonisation skeleton silo : $ARGUMENTS

Tu vas harmoniser le silo **$ARGUMENTS** pour qu'il soit visuellement et structurellement cohérent avec le silo caisse (source de vérité), tout en préservant les narrations uniques de chaque page.

## Cible selon $ARGUMENTS
- Si `informatique` : 1 hub (`maintenance-informatique/index.html`) + 4 sous-pages (`maintenance-depannage`, `cloud-securite`, `location-vente-installation`, `outils-collaboratifs`)
- Si `web` : 1 hub (`visibilite-web/index.html`) + 3 sous-pages (`creation-site-internet`, `seo-sea-local`, `hebergement`)

## Règle absolue
Phase 7 de `CLAUDE.md` impose que **chaque sous-page a une narration unique** (ordre de sections différent). On harmonise les **atomes visuels et micro-structures**, PAS l'ordre des sections ni le ton narratif de chaque page.

Ce qui est harmonisé :
- Classes Tailwind de section (spacing `py-12 lg:py-16`, `max-w-7xl mx-auto px-6`, etc.)
- Typographie H2 (`font-sora text-3xl md:text-4xl font-bold text-[#0B3D91]`)
- Cards : `tonal-shift-elevation`, `rounded-xl`/`rounded-2xl`, ombres tintées bleu
- Labels : `text-[11px] font-bold tracking-[0.2em] uppercase`
- CTA : `rounded-[14px]`, orange `#F57C00` uniquement
- Breadcrumb, date E-E-A-T "Mis à jour le 23 avril 2026"
- Structure JSON-LD Service
- Maillage interne (cross-sell inter-pilier)

Ce qui reste intact :
- Narration unique de chaque page (urgence, éducation, décision, démo / process, résultats, comparatif)
- Ordre des sections
- Accents métier (`#EF4444`, `#0D9488`, etc.)
- Contenu spécifique (hero copy, trust bars personnalisées)

---

## Étape 1 — Extraire l'ADN caisse (référence) — ~30 min

Utilise **Skill `design:design-system`** sur le silo caisse (9 pages : hub + 8 sous-pages).

Scan `caisse-enregistreuse/**/*.html` et produis `docs/silo-caisse-design-dna.md` contenant :
- Classes Tailwind récurrentes par type de section (hero, stats, trust-bar, features, problème/solution, FAQ, CTA final, breadcrumb)
- Tokens réellement utilisés vs déclarés dans `tailwind.config.js`
- Patterns de cards (classes + structure HTML)
- Structure type du bloc JSON-LD Service
- Forme type du breadcrumb + date E-E-A-T
- Pattern du CTA final

Si `docs/` n'existe pas, créer le dossier.

## Étape 2 — Audit divergences silo $ARGUMENTS — ~40 min

**Spawn 2 agents `general-purpose` en parallèle** (dans une seule réponse, 2 tool calls Agent) :
- Agent 1 : audit du hub du silo $ARGUMENTS
- Agent 2 : audit de toutes les sous-pages du silo $ARGUMENTS

Chaque agent reçoit en input :
- Le DNA caisse (`docs/silo-caisse-design-dna.md`)
- Les pages à auditer
- La consigne : comparer chaque page au DNA et produire un diff actionable

Utilise **Skill `ui-ux-pro-max`** (`--design-system` mode) et **`design:design-critique`** pour les audits.

Sortie : `docs/harmonization-plan-$ARGUMENTS.md` structuré :
```
## page: <path>
### divergences spacing
  - <problème → correctif>
### divergences typographie
  - ...
### divergences cards
  - ...
### divergences CTA
  - ...
### JSON-LD
  - présent/absent/incomplet
### breadcrumb
  - présent/absent
### date E-E-A-T
  - présent/absent
```

## Étape 3 — Plan maillage interne — ~20 min

**Skill `site-architecture`**.

Définis la matrice de cross-sell inter-pilier en te basant sur le Sprint 5 du master plan. Pour chaque page du silo $ARGUMENTS, identifie 2 à 3 liens sortants contextuels vers les autres silos (caisse + l'autre).

Exemples :
- IT cloud-securite → caisse NF525 (sécurité données caisse) + web hebergement (continuité infra)
- IT maintenance-depannage → caisse (SAV matériel) + web (monitoring site)
- Web creation-site → IT outils-collaboratifs + caisse (intégration click & collect)

Sortie : ajoute une section "maillage inter-pilier" dans `docs/harmonization-plan-$ARGUMENTS.md` avec par page les liens exacts à insérer (URL + ancre suggérée + emplacement approximatif).

## Étape 4 — Application batch — ~2 h

Pas de skill. Edit ciblés guidés par le plan.

1. **Page pilote** : traite la page la plus riche du silo à 100 % d'abord :
   - IT : `maintenance-informatique/maintenance-depannage/index.html` (narration urgence)
   - Web : `visibilite-web/seo-sea-local/index.html` (narration résultats)
2. Valide avec l'utilisateur que le pattern pilote est correct avant de répliquer.
3. **Hubs d'abord** (priorité SEO) puis les autres sous-pages.
4. Applique les corrections du plan à chaque page. Ne touche jamais au header/footer (règle CLAUDE.md sans trigger `13header`/`13footer`).

Après chaque groupe de 2-3 pages, rebuild Tailwind :
```bash
./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
```

## Étape 5 — Schema cohérent — ~30 min

**Skill `schema-markup`**.

Génère en batch les blocs JSON-LD Service pour les pages du silo $ARGUMENTS qui n'en ont pas ou dont la forme diverge du pattern caisse. Inclure :
- `areaServed` (Saône-et-Loire, Rhône, Ain, Loire)
- `provider` (LocalBusiness DCB Technologies)
- `offers` quand pertinent
- `serviceType` cohérent

Harmonise aussi les blocs `FAQPage` existants sur le même modèle que le silo caisse.

## Étape 6 — Vérification — ~15 min

**Skill `seo-audit`** en passe légère sur les pages modifiées du silo $ARGUMENTS :
- Maillage interne effectif (les liens cross-sell sont-ils présents et fonctionnels ?)
- Signaux E-E-A-T (date présente sur toutes les pages)
- Cohérence titles/meta vs silo caisse
- JSON-LD valide (check visuel de structure)

Rebuild Tailwind final.

---

## Livrables attendus

1. `docs/silo-caisse-design-dna.md` — référentiel réutilisable
2. `docs/harmonization-plan-$ARGUMENTS.md` — diff + plan maillage
3. Pages du silo $ARGUMENTS alignées visuellement et structurellement
4. JSON-LD Service sur toutes les pages
5. Breadcrumb + date E-E-A-T présents partout
6. Cross-sell inter-pilier effectif

## Règles à respecter pendant l'exécution

- **Zéro em dash** dans tout contenu écrit ou modifié (règle absolue CLAUDE.md)
- Ne jamais modifier header/footer (pas de trigger `13header`/`13footer`)
- Rebuild Tailwind après modifications de classes
- Si une divergence nécessite un arbitrage utilisateur (ex. conflit avec narration), demande avant de trancher
- Update `CLAUDE.md` à la fin en cochant les items TODO correspondants du silo traité

## Handoff

Une fois terminé, propose à l'utilisateur de lancer `/silo-contenu $ARGUMENTS` pour enrichir le contenu dans la structure harmonisée.
