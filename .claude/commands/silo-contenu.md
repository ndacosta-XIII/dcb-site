---
description: Enrichit le contenu d'un silo (IT ou Web) avec placeholders, FAQ, témoignages, JSON-LD, une fois la structure harmonisée. Respecte la règle absolue "zéro em dash" et le ton DCB.
argument-hint: <informatique|web>
allowed-tools: Read, Write, Edit, Grep, Glob, Bash, Skill, Agent
---

# Workflow — Rédaction contenu silo : $ARGUMENTS

Tu vas enrichir le contenu des pages du silo **$ARGUMENTS** avec des placeholders de qualité production, dans la structure harmonisée issue de `/silo-structure $ARGUMENTS`.

## Prérequis
- `/silo-structure $ARGUMENTS` doit avoir été exécuté en premier. Vérifier que `docs/harmonization-plan-$ARGUMENTS.md` existe.
- Si absent, demander à l'utilisateur s'il veut lancer `/silo-structure $ARGUMENTS` d'abord.

## Cible selon $ARGUMENTS
- Si `informatique` : hub + 4 sous-pages (`maintenance-depannage`, `cloud-securite`, `location-vente-installation`, `outils-collaboratifs`)
- Si `web` : hub + 3 sous-pages (`creation-site-internet`, `seo-sea-local`, `hebergement`)

## Règle absolue — ZÉRO EM DASH
`—` (tiret cadratin) est **interdit** dans tout contenu écrit. Remplacer par :
- `:` pour introduction/explication
- `.` ou `,` dans une phrase continue
- `|` ou `·` comme séparateur dans titres/meta
- `(...)` en incise si nécessaire

S'applique à : titres HTML, meta description, H1/H2/H3, body, FAQ, JSON-LD, options formulaires, alt texts.

**Workflow obligatoire après chaque édition** : `grep -n "—" <fichier_modifié>`. Si un match apparaît, corriger avant de répondre.

## Ton DCB
- B2B local français, Saône-et-Loire / Rhône / Ain / Loire
- Ton pragmatique, direct, pas de corporate-speak
- Vocabulaire concret (TPV, NF525, CashMag, OXHOO, AURES) quand pertinent
- Preuves chiffrées > adjectifs flous
- Cohérent avec le ton du silo caisse (source de vérité)

---

## Étape 1 — Gap analysis par page — ~20 min

**Skill `content-strategy`**.

Pour chaque page du silo $ARGUMENTS, liste ce qui manque ou est thin par rapport au silo caisse :
- Sections thin (body trop court)
- FAQ absente ou insuffisante (cible : 4 à 6 questions par sous-page, 40 à 60 mots par réponse)
- Témoignages manquants sur le hub (cible : 4 témoignages placeholders)
- Trust bar à personnaliser (chiffres génériques → spécifiques)
- Hero copy à affiner selon narration de la page
- Meta description (si absente ou générique)

Sortie : `docs/content-plan-$ARGUMENTS.md` structuré par page, avec pour chacune les blocs de contenu à produire.

## Étape 2 — Page pilote — ~45 min

**Skill `copywriting`** en mode solo.

Choisis la page **pilote** (la plus stratégique SEO) :
- IT : `maintenance-informatique/maintenance-depannage/index.html` (narration urgence, volume SEO)
- Web : `visibilite-web/seo-sea-local/index.html` (narration résultats)

Rédige intégralement le contenu manquant selon le plan de l'étape 1 :
- Hero copy aligné sur narration
- Body des sections thin
- FAQ complète (4-6 Q/R, 40-60 mots)
- Trust bar personnalisée
- Meta description optimisée (150-160 chars, mot-clé primaire, CTA implicite)
- Liens internes dans le body (cross-sell inter-pilier du plan harmonisation)

Cette page devient le **gabarit qualité** pour les suivantes. Valide avec l'utilisateur avant de répliquer.

## Étape 3 — Application batch sur les autres pages — ~1h à 1h30

**Skill `copywriting`** en batch, ou **spawn 2 agents parallèles** si beaucoup de pages :
- Agent 1 : moitié des pages restantes
- Agent 2 : autre moitié

Chaque agent applique le pattern pilote à ses pages :
- Rédige dans la structure harmonisée existante (ne pas bouger les sections)
- Respecte la narration unique de chaque page (cf. `CLAUDE.md` tableau Narrations)
- Hero copy spécifique à la narration
- FAQ spécifique au métier/service

## Étape 4 — Témoignages placeholders (hubs uniquement) — ~30 min

Si les vrais témoignages ne sont pas encore fournis, rédige 4 témoignages placeholders crédibles pour le hub du silo $ARGUMENTS. Format : prénom + initiale nom + entreprise fictive plausible + ville de la zone d'intervention + quote courte (2-3 phrases) ancrée sur un bénéfice concret.

Marquer clairement dans le HTML avec un commentaire `<!-- PLACEHOLDER : à remplacer par vrai témoignage client -->` autour de chaque bloc.

## Étape 5 — Schema FAQPage + enrichissement JSON-LD — ~20 min

**Skill `schema-markup`**.

Pour chaque page avec nouvelle FAQ, ajoute ou met à jour le bloc `FAQPage` JSON-LD correspondant. Forme identique au silo caisse (cf. `docs/silo-caisse-design-dna.md`).

Vérifie aussi que le bloc `Service` JSON-LD est cohérent avec le nouveau contenu (serviceType, description, offers si prix mentionnés).

## Étape 6 — Passe hygiène globale — ~30 min

**Skills `humanizer` + `copy-editing`** en séquence sur les pages modifiées du silo $ARGUMENTS.

`humanizer` traque :
- Em dashes résiduels (règle absolue)
- Patterns IA (inflated symbolism, rule of three, AI vocabulary)
- Promotional language creux
- Vague attributions

`copy-editing` vérifie :
- Cohérence du ton DCB sur l'ensemble du silo
- Pas de redondance entre pages (anti duplicate content)
- Densité des mots-clés raisonnable

## Étape 7 — Vérification finale — ~15 min

1. **Grep em dash global** sur toutes les pages modifiées :
   ```bash
   grep -rn "—" <pages modifiées>
   ```
   Zéro match attendu.

2. **Skill `seo-audit`** passe légère :
   - Meta descriptions uniques et dans la fourchette 150-160 chars
   - Title tags uniques
   - H1 unique par page
   - Densité mot-clé raisonnable
   - Maillage interne effectif

3. **Rebuild Tailwind** :
   ```bash
   ./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
   ```

---

## Livrables attendus

1. `docs/content-plan-$ARGUMENTS.md` — gap analysis par page
2. Pages du silo $ARGUMENTS enrichies (hero, FAQ, trust bar, body)
3. Témoignages placeholders sur le hub (marqués comme placeholders)
4. Blocs FAQPage + Service JSON-LD à jour
5. Zéro em dash dans le silo (vérifié par grep)
6. `CLAUDE.md` mis à jour : cocher les items TODO du silo traité

## Règles à respecter pendant l'exécution

- **Zéro em dash** (règle absolue, grep de vérification après chaque fichier)
- Respecter la narration unique de chaque sous-page (cf. tableau `CLAUDE.md` Phase 7)
- Ne jamais modifier header/footer sans trigger `13header`/`13footer`
- Ne pas toucher aux classes Tailwind harmonisées par `/silo-structure`
- Marquer explicitement les placeholders (témoignages, chiffres non confirmés)
- Si un chiffre/stat est incertain, demander à l'utilisateur plutôt que d'inventer

## Handoff

Une fois terminé, propose à l'utilisateur de lancer :
- `/silo-structure web` puis `/silo-contenu web` si c'était `informatique` qu'on vient de traiter (ou inverse)
- Une passe finale de `seo-audit` globale sur le site avant mise en prod
