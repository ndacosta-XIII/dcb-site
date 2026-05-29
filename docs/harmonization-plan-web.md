# Plan d'harmonisation — Silo Visibilité Web

**Date :** 30 avril 2026
**Sources :** skills site-architecture + ui-ux-pro-max + schema-markup + seo-audit
**Référence :** `docs/silo-it-design-dna.md`

---

## 1. Couleurs accent par page

| Page | Accent actuel (problème) | Accent cible | Hex |
|---|---|---|---|
| Hub `visibilite-web/` | `#F57C00` orange (9 occurrences non-CTA) | Bleu primaire | `#0B3D91` |
| `creation-site-internet/` | `#0B3D91` sans différenciation | Bleu vif | `#2563EB` |
| `seo-sea-local/` | `#F57C00` orange partout | Rouge vif | `#DC2626` |
| `hebergement/` | `#0D9488` teal (conflit IT cloud) | Bleu canard | `#0369A1` |

**Règle :** Orange `#F57C00` uniquement sur les boutons CTA (jamais comme couleur de section ou accent).

---

## 2. Squelette cible par page

### Hub `visibilite-web/index.html` — 10 sections

| # | Type | Titre H2 | Pattern | BG |
|---|---|---|---|---|
| 1 | hero | H1 : Une présence digitale qui convertit | Gradient `#0B3D91 → #072B6B`, stats row blanc | `#0B3D91` |
| 2 | trust-bar | — | 4 métriques + séparateurs | `bg-white` |
| 3 | problème/solution | Les freins digitaux des commerces locaux | 3 cards `tonal-shift-elevation` | `bg-[#F8F9FA]` |
| 4 | expertise-cards | Des solutions web pour le commerce local | 3 cards top-bar colorée : `#2563EB` / `#DC2626` / `#0369A1` | `bg-white` |
| 5 | process | Votre site en ligne en 30 jours | Timeline 4 étapes `01-04`, jalons `J+` en `#0B3D91` | `bg-[#F8F9FA]` |
| 6 | différenciateur | Ni freelance, ni grosse agence | 2 cols 5+7, arguments icône+texte | `bg-[#EFF6FF]` |
| 7 | témoignages | Ils nous font confiance | Grid 2 cols `border-l-4` | `bg-[#F8F9FA]` |
| 8 | techniciens-locaux | Un expert web à côté de chez vous | BG `#0B3D91`, badges départements | `bg-[#0B3D91]` |
| 9 | cross-sell | Découvrez nos autres expertises | 2 cards plein-fond vers caisse + IT | `bg-white` |
| 10 | faq + CTA final | Questions fréquentes | Accordion `.faq-item` + `.cta-final` | `bg-[#F8F9FA]` |

**Corrections couleur :**
- 9 occurrences `text-[#F57C00]` sur labels, stats, jalons → `text-[#0B3D91]`
- BG différenciateur : `#F0FDFA` → `#EFF6FF`
- Section 4 expertise-cards : chaque card prend l'accent de sa sous-page (top-bar 3px colorée)

---

### `creation-site-internet/index.html` — 7 sections (narration process-first)

| # | Type | Titre H2 | Pattern | BG |
|---|---|---|---|---|
| 1 | hero | H1 : Un site web professionnel qui convertit vos visiteurs en clients | Gradient `#0B3D91 → #072B6B`, bloc métriques droite | `#0B3D91` |
| 2 | process | Votre site en 4 étapes | Timeline 4 étapes, numéros géants, jalons `J+` en `#2563EB` | `bg-white` |
| 3 | features | Un site conçu pour performer | Sticky 4+8 cols, 4 features 2×2, icônes `#2563EB` | `bg-[#F8F9FA]` |
| 4 | différenciateur | DCB vs Freelance vs Agence web | 3 colonnes comparatif, `border-[#2563EB]` sur DCB, badge "Recommandé" | `bg-white` |
| 5 | témoignages | Ils nous ont fait confiance | Grid 2 cols, `border-l-4 border-[#2563EB]` | `bg-[#F8F9FA]` |
| 6 | cross-sell | Complétez votre présence digitale | 3 cards sur `bg-[#0B3D91]` : SEO + Hébergement + **Outils collaboratifs** | `bg-[#0B3D91]` |
| 7 | faq + CTA final | Questions fréquentes | Accordion + `.cta-final` | `bg-white` |

**Signature visuelle :** Comparatif 3 colonnes Freelance/DCB/Agence (section #4).

**Corrections couleur :**
- Hero checkmarks : `text-[#F57C00]` → `text-[#2563EB]`
- Features icônes : `text-[#0B3D91]` → `text-[#2563EB]`
- Différenciateur border/badge : `#0B3D91` → `#2563EB`
- Témoignages border : `#0B3D91` → `#2563EB`

**Maillage à ajouter :** 3e carte cross-sell vers `../../maintenance-informatique/outils-collaboratifs/index.html`

---

### `seo-sea-local/index.html` — 7 sections (narration résultats)

| # | Type | Titre H2 | Pattern | BG |
|---|---|---|---|---|
| 1 | hero | H1 : Dominez Google dans votre ville | Gradient `#7F1D1D → #991B1B`, 3 blocs stats verticaux droite | `#7F1D1D` |
| 2 | stats | Résultats mesurés après 6 mois | 3 stats géantes `text-5xl/6xl text-[#DC2626]` sur fond blanc pur | `bg-white` |
| 3 | problème/solution | Vos clients vous cherchent sur Google. Vous trouvent-ils ? | 3 cards `tonal-shift-elevation` | `bg-[#F8F9FA]` |
| 4 | features | Tout pour dominer Google localement | Sticky 4+8, 4 features 2×2, icônes `#DC2626` | `bg-white` |
| 5 | témoignages | Ils dominent Google grâce à nous | Grid 2 cols, `border-l-4 border-[#DC2626]` | `bg-[#F8F9FA]` |
| 6 | cross-sell | Complétez votre présence en ligne | 3 cards sur `bg-[#0B3D91]` : Création site + Hébergement + **Maintenance dépannage** | `bg-[#0B3D91]` |
| 7 | faq + CTA final | Questions fréquentes | Accordion + `.cta-final` | `bg-[#F8F9FA]` |

**Signature visuelle :** 3 stats géantes rouge vif sur fond blanc pur, sans encadré, pleine largeur (section #2).

**Corrections couleur :**
- Hero fond : `from-[#7C2D12] to-[#9A3412]` → `from-[#7F1D1D] to-[#991B1B]`
- Stats, features icônes, témoignages border, labels : `#F57C00` → `#DC2626`

**Maillage à ajouter :** 3e carte cross-sell vers `../../maintenance-informatique/maintenance-depannage/index.html`

---

### `hebergement/index.html` — 7 sections (narration comparatif)

| # | Type | Titre H2 | Pattern | BG |
|---|---|---|---|---|
| 1 | hero | H1 : Hébergement web rapide, sécurisé, hébergé en France | Gradient `#0C4A6E → #075985`, bloc métriques droite | `#0C4A6E` |
| 2 | comparatif | Hébergement mutualisé classique vs DCB | 2 colonnes `gap-px bg-slate-200`, badge "Recommandé" `bg-[#0369A1]` | `bg-[#F8F9FA]` |
| 3 | features | Un hébergement pensé pour les pros | Sticky 4+8, 4 features 2×2, icônes `#0369A1` | `bg-white` |
| 4 | stats | 99,9% de disponibilité, zéro compromis | 3 stats centrées, chiffres `text-[#0369A1]` | `bg-[#F8F9FA]` |
| 5 | témoignages | Ils nous font confiance | Grid 2 cols, `border-l-4 border-[#0369A1]`, cards `bg-white` | `bg-white` |
| 6 | cross-sell | Complétez votre présence en ligne | 3 cards sur `bg-[#0B3D91]` : Création site + SEO/SEA + **Cloud sécurité** | `bg-[#0B3D91]` |
| 7 | faq + CTA final | Questions fréquentes | Accordion + `.cta-final` | `bg-[#F8F9FA]` |

**Signature visuelle :** Comparatif `gap-px` 2 colonnes avec badge cerclé `ring-[#0369A1]/5` (section #2).

**Corrections couleur :**
- Hero fond : `from-[#115E59] to-[#0F6E56]` → `from-[#0C4A6E] to-[#075985]`
- Toutes les occurrences `#0D9488` → `#0369A1`

**Maillage à ajouter :** 3e carte cross-sell vers `../../maintenance-informatique/cloud-securite/index.html`

---

## 3. Maillage inter-pilier — Delta à implémenter

### Liens existants (à conserver)
- Intra-silo web (2 cartes) en section 6 des 3 sous-pages : OK
- Hub visibilite-web → hub caisse + hub IT (section 9) : OK
- Breadcrumbs sur toutes les sous-pages : OK

### Cartes cross-sell à ajouter (1 par sous-page)

| Page | Destination | Ancre | URL relative |
|---|---|---|---|
| `creation-site-internet/` | Outils collaboratifs | "Connectez votre site à vos outils collaboratifs" | `../../maintenance-informatique/outils-collaboratifs/index.html` |
| `seo-sea-local/` | Maintenance dépannage | "Garantir la disponibilité de votre site" | `../../maintenance-informatique/maintenance-depannage/index.html` |
| `hebergement/` | Cloud sécurité | "Sécuriser votre infrastructure cloud" | `../../maintenance-informatique/cloud-securite/index.html` |

**HTML de la 3e carte (pattern IT DNA) :**
```html
<a href="../../maintenance-informatique/SOUS-PAGE/index.html"
   class="group bg-white/10 border border-white/20 rounded-2xl overflow-hidden no-underline hover:-translate-y-1 transition-all duration-300 grid grid-cols-1 sm:grid-cols-2">
  <div class="p-7 flex flex-col justify-center">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-rotate-6">
        <span class="material-symbols-outlined text-white text-2xl" style="font-variation-settings:'FILL' 1">ICONE</span>
      </div>
      <span class="text-[11px] font-bold uppercase tracking-widest text-white bg-white/15 px-3 py-1 rounded-full">Badge court</span>
    </div>
    <h3 class="font-sora font-bold text-xl text-white mb-2">Titre service IT</h3>
    <p class="text-white/70 text-sm mb-4">Description courte (lien logique avec la page Web courante).</p>
    <div class="pt-4 border-t border-white/15 flex items-center justify-between">
      <span class="font-bold text-white text-sm group-hover:text-[#F57C00] transition-colors">Ancre descriptive</span>
      <span class="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#F57C00] transition-all">
        <span class="material-symbols-outlined text-white text-sm group-hover:translate-x-0.5 transition-all">arrow_forward</span>
      </span>
    </div>
  </div>
  <div class="bg-gradient-to-br from-[COULEUR_ACCENT_IT] to-[COULEUR_SOMBRE] flex items-center justify-center p-4 relative overflow-hidden min-h-[160px] sm:min-h-0">
    <span class="material-symbols-outlined text-white/70 relative z-10" style="font-size:80px; font-variation-settings:'FILL' 1, 'wght' 300;">ICONE</span>
  </div>
</a>
```

---

## 4. SEO technique — Corrections par page

### Titles corrigés

| Page | Title actuel | Title cible |
|---|---|---|
| Hub | `Création site internet & SEO local — Mâcon, Lyon \| DCB` (em dash!) | `Visibilité Web pour PME et Commerces \| DCB Technologies` |
| Création site | `Création de Site Internet Professionnel \| DCB Technologies` | `Création Site Internet Professionnel PME \| DCB Technologies` |
| SEO/SEA | `SEO & SEA Local \| DCB Technologies` (trop court) | `SEO et SEA Local : Référencement Google PME \| DCB Technologies` |
| Hébergement | `Hébergement Web Sécurisé France \| DCB Technologies` | `Hébergement Web Professionnel Sécurisé \| DCB Technologies` |

### JSON-LD Service à insérer

**Hub :** `"serviceType": "Marketing digital et visibilité web"`, offers 29-499€
**Création site :** `"serviceType": "Création de site internet"`, offers 990-3500€
**SEO/SEA :** `"serviceType": "Référencement local SEO et SEA"`, offers 149-499€
**Hébergement :** `"serviceType": "Hébergement web"`, offers 29-99€

*(Blocs complets disponibles dans l'output de l'agent SEO)*

### BreadcrumbList à corriger

| Page | Problème | Correction |
|---|---|---|
| Hub | Manque `"item"` sur le niveau 2 | Ajouter `"item": "https://dcb-technologies.fr/visibilite-web/"` |
| Création site | `"Creation Site Internet"` sans accents | `"Création de site internet"` |
| SEO/SEA | `"Seo Sea Local"` minuscules | `"SEO et SEA local"` |
| Hébergement | `"Hebergement"` sans accent | `"Hébergement web"` |

### Date E-E-A-T à ajouter (toutes les pages)

```html
<p class="text-xs text-slate-400 mt-12 lg:mt-16 text-center">
  Mis à jour le <time datetime="2026-04-30">30 avril 2026</time>
</p>
```

Emplacement : dans la section CTA final, avant `</main>`.

---

## 5. Ordre d'application recommandé

1. **Page pilote :** `visibilite-web/seo-sea-local/index.html`
   - Narration résultats, corrections couleur les plus nombreuses, pattern le plus distinctif
   - Valider avec l'utilisateur avant les 3 autres

2. **Hub** `visibilite-web/index.html`
   - Priorité SEO (page agrégateur), corrections couleur simples (chercher/remplacer `#F57C00`)

3. **`hebergement/index.html`**
   - Changement de couleur hero + toutes occurrences `#0D9488`

4. **`creation-site-internet/index.html`**
   - Corrections les plus légères, ajout 3e carte cross-sell

5. **Rebuild Tailwind** après chaque groupe de 2 pages :
   ```bash
   ./tools/tailwindcss.exe -c tailwind.config.js -i css/tailwind-input.css -o css/tailwind.min.css --minify
   ```

---

## 6. Nice to have (à valider client)

- Section pricing 3 formules sur `hebergement/` (prix 29€/mois déjà cité en FAQ — fort signal de conversion)
- Jalons `J+` dans la timeline process de `creation-site-internet/` (actuellement steps numérotés sans dates)
- Liens depuis les sous-pages IT (`cloud-securite/`, `outils-collaboratifs/`) vers le silo Web (maillage retour)
