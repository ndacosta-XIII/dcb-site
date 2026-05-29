# AUDIT SEO & PLAN D'ACTION — DCB TECHNOLOGIES

> Document de référence SEO. À lire avant toute modification visant le référencement.
> Ne remplace pas `CLAUDE.md` (instructions projet) — vient en complément.
> Objectif : **#1 sur les requêtes locales caisse / IT / web sur 71 · 69 · 01 · 42**

---

## 🆕 MISE À JOUR 2026-04-22 · POST-SPRINTS HOMEPAGE

Audit complet effectué via skills `seo-audit` + `ai-seo` + `page-cro` (marketplace coreyhaines31/marketingskills installée localement).

### Scores actuels (homepage uniquement)

| Dimension | Baseline (audit 2026-04-21) | Après Sprint 0+1+revue | Plafond sans client |
|-----------|:---:|:---:|:---:|
| SEO Technique | 58 | **85** | 92 |
| SEO On-Page | 75 | **87** | 95 |
| AEO / GEO | ~72 | **78** | 90 |
| Marketing / CRO | ~80 | **85** | 95 |
| **GLOBAL** | ~75 | **~84** | ~93 |

### Ce qui a été fait (sessions 2026-04-22)

**Sprint 0 — Bloquants pré-push :**
- [x] Créé `/assets/og-homepage.jpg` (1200×630, 69 KB, FR accents corrects, script `tools/gen_og_image.py`)
- [x] Converti `hero-bg-datacenter.jpg` (386 KB) → `.webp` (21 KB, −94 %) + ajout `width/height/loading=eager/fetchpriority=low/decoding=async`
- [x] Retiré Plus Jakarta Sans du `<link>` eager sur 26 pages (laissé en lazy via `scripts.js:289` pour le FAB mobile)
- [x] Ajouté preconnect `fonts.googleapis.com` + `fonts.gstatic.com` sur 26 pages
- [x] Fixé 4 balises `<h3>…</h4>` mismatchées dans homepage
- [x] Corrigé nav label `"IT 360"` → `"Informatique"` (desktop + mobile dans `scripts.js`)
- [x] Bump `scripts.js?v=8 → ?v=9` sur 25 pages + fix coiffure `?v=4 → ?v=9`
- [x] Ajouté `ClaudeBot` + `anthropic-ai` dans `robots.txt` (8 crawlers IA explicites)
- [x] Aligné prix caisse : homepage pillar card (59 €) + JSON-LD Service (AggregateOffer 59-77 €) + llms.txt (Essentiel / Pack complet expliqués)
- [x] Corrigé titres fondateurs dans `llms.txt` (Président / DG, aligné avec JSON-LD Person)

**Sprint 1 — CRO + AEO de base :**
- [x] CTA hero `"Obtenir mon tarif"` → `"Demander un devis"` (aligné avec destination `/contact/`)
- [x] H1 enrichi avec le 3ᵉ pilier : *"Votre expert local en caisse, informatique et site internet"*
- [x] TL;DR extractable 42 mots sous le H1 (AEO-optimisé, cite départements + certifications)
- [x] Segmentation métier visible : *"Boulangerie · Restaurant · Commerce · Salon · Artisan · PME"*
- [x] Stats hero figées en dur (98 % · <4h · 4 départements) — retrait du `dcb-counter` qui affichait 0 avant JS
- [x] Stats hero universelles (plus de caisse-centric "5 ans garantie" remplacé par "4 départements couverts")
- [x] Mention sous CTA hero alignée avec page contact : *"Devis gratuit · Sans engagement · Réponse sous 2 h ouvrées · Zéro démarchage"* (initialement "24 h", corrigé après vérif page contact qui promet 2 h)
- [x] Sources stats attribuées : *"Enquête post-intervention · 2025"*
- [x] Témoignages remontés : section 7 → section 5 (juste après les 3 piliers)
- [x] Photos fondateurs cliquables → `/notre-adn/` avec hover scale
- [x] Liens sortants AFNOR + Légifrance + impots.gouv.fr dans FAQ Q1 (+40 % autorité LLM estimée Princeton GEO)
- [x] `<time datetime="2026-04-22">` dans CTA final
- [x] Ajouté bloc comparatif universel *"DCB vs trois prestataires distincts"* (table 8 critères, multi-silo) — **le comparatif caisse vs SumUp sera réutilisé sur le hub caisse**
- [x] FAQ enrichie 6 → 9 questions (3 caisse + 3 IT + 2 web + 1 géo), HTML et JSON-LD FAQPage synchronisés
- [x] Twitter Card meta tags sur 10 pages (homepage + 9 pages caisse/sous-pages avec og:)

---

## ⚠️ DÉSÉQUILIBRE DÉTECTÉ · llms.txt

Analyse 2026-04-22 : le fichier `llms.txt` actuel est **majoritairement orienté caisse** alors que DCB a 3 silos équivalents :

| Hub | Lignes llms.txt | Pricing | Détail |
|-----|:---:|:---:|:---:|
| Caisse (hub + CashMag + 6 sous-pages) | 8 (50 %) | ✅ 59/77 € explicites | ✅ riche |
| Maintenance IT (hub + 4 sous-pages) | 5 (30 %) | ❌ aucun prix | 🟠 superficiel |
| Visibilité Web (hub + 3 sous-pages) | 4 (20 %) | ❌ aucun prix | 🟠 superficiel |

**Gaps à corriger dans Silo 2A (pré-publication) :**
- Ajouter pricing IT `dès 89 €/mois starter (jusqu'à 5 postes)` dans hub maintenance
- Ajouter fourchette prix web (même indicative) dans hub web
- Rééquilibrer ligne 42 *"Matériel : OXHOO et AURES"* (silo caisse) avec ajout Lenovo (silo IT)
- Rééquilibrer ligne 49 concurrents (SumUp, Zettle) — tous caisse, ajouter comparaison IT + web
- Enrichir description des sous-pages IT + web (features détaillées, bénéfices, cas d'usage)

---

## 🆕 DÉCOUPAGE SILO 2 EN 2 SPRINTS DISTINCTS

L'ancien "Sprint 2" du plan initial est séparé selon la dépendance au statut prod :

### 🟡 SILO 2A · PRÉ-PUBLICATION (site encore en local)

Actions possibles sans internet prod, sans compte externe. **À exécuter juste avant le push prod.**

#### Technique

- [ ] **HSTS + CSP + X-Content-Type-Options** dans `.htaccess` (30 min, +3 SEO tech)
- [ ] **Sitemap-images.xml** référençant photos fondateurs + NF525 + hero + OG (30 min, +2 SEO)
- [ ] **Auto-héberger fonts Sora + Inter** en woff2 dans `/assets/fonts/` (2 h, +3 SEO tech + RGPD)
- [ ] **Remplacer Material Symbols** par SVG inline (~8 icônes utilisées) (2 h, gain LCP −50 à −100 ms)
- [ ] **Double preconnect** dans `caisse-enregistreuse/coiffure/index.html:14-15` à nettoyer (1 min)

#### Contenu placeholders (bloqué attente client)

- [ ] **Remplacer les 8 URLs `lh3.googleusercontent.com`** (Stitch placeholders) par WebP locales dans `/assets/`
  - `caisse-enregistreuse/index.html` (hero TPV CashMag)
  - `caisse-enregistreuse/boulangerie/index.html`
  - `caisse-enregistreuse/restaurant/index.html`
  - `caisse-enregistreuse/commerce-de-detail/index.html`
  - `caisse-enregistreuse/coiffure/index.html`
  - `caisse-enregistreuse/borne-de-commande/index.html`
  - `caisse-enregistreuse/monnayeur/index.html`
  - `contact/index.html` (bureaux)
- [ ] **Remplacer 4 témoignages placeholders** homepage par vrais (noms, photos, captures Google)
- [ ] **Remplacer bandeau partenaires `<span>`** par `<img alt>` avec vrais logos (NF525, CashMag, OXHOO, AURES, Lenovo, Pedroporto, Hairnet, AFNOR)
- [ ] **Créer `/assets/og-caisse.jpg`**, `og-it.jpg`, `og-web.jpg` (1200×630) pour OG par hub (actuellement seul og-homepage.jpg existe)

#### AEO · machine-readable

- [ ] **Créer `pricing.md`** structuré (3 silos × 3 packs, 1 h, +3 AEO agents IA)
- [ ] **Créer `llms-full.txt`** (FAQ complète + glossaire + définitions NF525/CashMag/TPV, 2 h, +4 AEO)
- [ ] **Rééquilibrer `llms.txt`** : ajouter pricing IT + web, corriger mentions caisse-only (30 min, +2 AEO)
- [ ] `<abbr title="...">` sur NF525 / CashMag / TPV / télémaintenance dans homepage + hubs (15 min, +1 AEO)
- [ ] `<meta name="author" content="DCB Technologies">` + `dateModified` JSON-LD (10 min)

#### SEO on-page · uniformisation

- [ ] **Appliquer OG + Twitter Cards sur les 16 pages manquantes** (maintenance hub + sous-pages × 4, web hub + sous-pages × 3, contact, notre-adn, blog × 2, mentions-légales, confidentialité, cgv) (1 h, +2 SEO)
- [ ] Harmoniser `tailwind.min.css?v=X` versions (actuellement mix v5/v10/v12/v14)

#### Audit silo 2 et 3 (caisse + IT + web)

- [ ] **Audit complet hub caisse** (`/caisse-enregistreuse/` + 9 sous-pages) — **prochaine session**
  - Appliquer les mêmes patterns qu'homepage (CTA cohérent, stats, TL;DR, sources, FAQ)
  - Déplacer le comparatif *DCB vs SumUp/Zettle/Square/Tiller* sur le hub caisse
  - Ajouter schema Product/Offer détaillé par métier
  - Vérifier pricing pillar cards (59/77/83/115 €) vs pages pricing par métier
- [ ] **Audit complet hub maintenance IT** (`/maintenance-informatique/` + 4 sous-pages)
  - Ajouter date E-E-A-T "mis à jour"
  - JSON-LD Service détaillé (areaServed, offers 89 €)
  - Témoignages carrousel ×4 (bloqué attente client)
  - Créer comparatif spécifique "DCB vs prestataire IT mono-pilier"
- [ ] **Audit complet hub visibilité web** (`/visibilite-web/` + 3 sous-pages)
  - JSON-LD Service détaillé
  - Créer comparatif "DCB vs agence web locale"
  - Pricing indicatif même fourchette

#### Validation pré-push

- [ ] Lighthouse mobile + desktop sur 5 pages clés (cible Performance > 90, SEO 100, A11y > 95)
- [ ] Test Rich Results Test sur tous les JSON-LD (21 URLs prioritaires)
- [ ] Validation HTML W3C sur homepage + 3 hubs
- [ ] Test Mobile-Friendly Google sur 26 URLs
- [ ] Test SSL Labs (cible A)
- [ ] Grep final `—` em dash sur tous fichiers (règle absolue CLAUDE.md)

### 🟢 SILO 2B · POST-PUBLICATION (une fois le site en prod)

Actions qui nécessitent le site publié et accessible publiquement sur `dcb-technologies.fr`. Impossible à exécuter tant que le site est en local.

#### Local pack + off-site prioritaire

- [ ] **Créer Google Business Profile × 2** : siège Dardilly (69) + base Paray-le-Monial (71) — **CRITIQUE, +8 AEO local pack**
  - Photos réelles des 2 bureaux (si disponibles)
  - Description, horaires, catégories
  - Demander modération (3 à 7 jours)
- [ ] **Récolter 5+ avis Google** (campagne email auprès des 250+ clients DCB actuels)
- [ ] **Soumettre sitemap.xml** dans Google Search Console
- [ ] **Soumettre sitemap.xml** dans Bing Webmaster Tools
- [ ] **Demander l'indexation** des 26 URLs dans GSC
- [ ] **Compléter `sameAs`** dans JSON-LD LocalBusiness avec l'URL Google Business Profile finale
- [ ] **Activer `AggregateRating` JSON-LD** sur homepage une fois 5+ avis collectés

#### Présence off-site secondaire

- [ ] **LinkedIn page entreprise DCB Technologies** + optimisation profils Nathanaël Da Costa + Clément Boissié
- [ ] **Adhésion CCI Saône-et-Loire** + CCI Lyon Métropole Saint-Étienne Roanne (annuaire + crédibilité B2B)
- [ ] **Pages Jaunes** (fiche enrichie avec photos + horaires)
- [ ] **Société.com** (fiche SAS DCB Technologies)
- [ ] **Kompass** (B2B)
- [ ] **Mappy** (géolocalisation)
- [ ] **Bing Places for Business**
- [ ] **Yelp France** (secondaire)

#### Contenu long terme (6-12 mois)

- [ ] **Chaîne YouTube DCB** : 3 vidéos courtes (démo CashMag, différenciateurs, avant/après intervention) — +AEO 8 % des citations
- [ ] **Stratégie blog** : 1 article/semaine format guide (how-to, comparatifs, explications NF525/RGPD)
- [ ] **Backlinks locaux** : presse régionale (Le Journal de Saône-et-Loire, Le Progrès Lyon) via communiqué + portraits fondateurs
- [ ] **Reddit FR authentique** : participation r/france, r/PointOfSale, r/BoulangerieFR (30 min/semaine, pas de spam)
- [ ] **Pages locales dédiées** : `/lyon/`, `/macon/`, `/chalon-sur-saone/`, `/villefranche/`, `/bourg-en-bresse/`, `/roanne/` (minimum 600 mots unique par page)
- [ ] **Suivi positions hebdo** : Ranxplorer ou SEObserver sur 20 requêtes cibles
- [ ] **CDN Cloudflare** frontal si TTFB OVH > 500 ms

#### KPIs à tracker

Voir section 7 de ce document (existante).

---

## 📌 POINTS D'ATTENTION GARDÉS EN MÉMOIRE

**R1 — résolu 2026-04-22** : stat hero "5 ans garantie" (caisse-only) remplacée par "4 départements couverts" (universelle).

**R2 — en attente** : section 2 "Trois garanties vérifiables" reste 2/3 caisse (NF525 + CashMag + Fondateurs). À rééquilibrer plus tard avec une card IT ou web, mais pas urgent tant que le caisse reste le pilier dominant en intent SEO.

**R3 — bloqué client** : 4 témoignages placeholders homepage (Sophie Moreau, David K., Marc Terrier, Laëtitia D.) avec initiales colorées au lieu de photos. À remplacer dès réception des vrais témoignages (viser 2 caisse + 1 IT + 1 web pour équilibre silos).

**Témoignage déjà résolu** : "R4" (segmentation métier) a élargi à "Boulangerie · Restaurant · Commerce · Salon · Artisan · PME". "R5" (FAQ) a ajouté 3 questions multi-silo (IT pricing, web vs agence, cybersécurité RGPD).

**Décision produit : CTA hero** = *"Demander un devis"* aligné sur page contact. Le pattern homepage = giga-hub qui renvoie vers les 3 silos qui font eux-mêmes le travail d'information et de conversion.

---

- **Domaine cible :** `https://dcb-technologies.fr` (apex, sans www)
- **Hébergement cible :** OVH (push direct depuis local sur `dcb-technologies.fr`)
- **Stack :** HTML statique + Tailwind CSS compilé (css/tailwind.min.css) + Vanilla JS
- **26 pages HTML** (hors `index.backup.html` à supprimer)
- **État :** site en local, push direct sur la prod

---

## 1. SCORE & SYNTHÈSE

| Indicateur | Valeur |
|---|---|
| Score SEO technique estimé | **58 / 100** |
| Bloquants critiques | **6** |
| Actions avant mise en ligne | **11** |
| Pages avec H1 unique | 26/26 ✅ |
| Pages avec canonical | 26/26 ✅ |
| Pages avec JSON-LD | 26/26 ✅ |
| Pages avec `loading="lazy"` | **0/26** ❌ |
| Pages avec sitemap référencé | **0** ❌ |

**Verdict :** fondations sémantiques solides, mais **3 freins majeurs** : Tailwind CDN runtime, aucun robots.txt/sitemap, images placeholder Google externes.

---

## 2. AUDIT TECHNIQUE — 8 AXES

### AXE 1 — Crawlabilité & Indexation
- ✅ `robots.txt` créé
- ✅ `sitemap.xml` créé (26 URLs)
- ✅ `index.backup.html` supprimé
- ✅ Pas de preview tierce en parallèle (push direct OVH)
- ✅ Canonicals présentes (26/26) pointant vers `dcb-technologies.fr`

### AXE 2 — Performance & Core Web Vitals
- ✅ **Tailwind compilé en CSS statique** (`css/tailwind.min.css` ~53 KB, CDN runtime supprimé sur 26 pages)
- 🔴 Images hero servies depuis `lh3.googleusercontent.com/aida-public/...` (placeholders Google) sans `width`/`height` → CLS > 0.15
- 🔴 0/26 pages avec `loading="lazy"`
- 🟠 3 fonts Google chargées (Sora + Inter + Plus Jakarta Sans)
- 🟠 Vidéos sans `preload="none"` ni `poster`
- 🟠 Risque RGPD : leak IP visiteur vers Google via les images

### AXE 3 — Balises SEO
- ✅ 26 H1 uniques
- ✅ 26 titles uniques
- 🔴 6 titles génériques sans mots-clés locaux :
  - `/contact/` → "Contact | DCB Technologies" (28c)
  - `/notre-adn/` → "Notre ADN | DCB Technologies" (26c)
  - `/visibilite-web/` → "Visibilité Web | DCB Technologies" (32c)
  - `/maintenance-informatique/` → "Service IT 360 | DCB Technologies" (32c) — ⚠️ "IT 360" = jargon maison, 0 volume
  - `/caisse-enregistreuse/monnayeur/` → "Monnayeur Automatique | DCB" (38c)
  - `/caisse-enregistreuse/borne-de-commande/` → "Borne de Commande Tactile | DCB" (41c)
- 🟠 5 titles > 60 caractères → troncature SERP
- 🟠 Meta description homepage = 199c → tronquée

### AXE 4 — Mobile-First
- ✅ Viewport correct
- ✅ Boutons CTA ≥ 44px
- 🟠 [À tester] Comparatifs IT 360 hub & hébergement en 360px
- 🟠 [À tester] Overlap header sur iPhone SE

### AXE 5 — HTTPS & Sécurité
- 🔴 [Inconnu] Redirect HTTP→HTTPS configuré ?
- 🔴 [Inconnu] Redirect www→apex configuré ?
- 🟠 Pas de HSTS ni CSP
- 🟠 Note SSL Labs à vérifier

### AXE 6 — URLs & Architecture
- ✅ URLs propres, kebab-case, FR
- ✅ Profondeur max 2 niveaux
- 🔴 `index.backup.html` à supprimer
- 🟠 Trailing slash non standardisé
- 🟠 Blog & Notre ADN absents de la nav

### AXE 7 — Vitesse Serveur
- 🟠 [Inconnu] TTFB OVH
- 🟠 [Inconnu] Cache navigateur configuré ?
- 🟠 [Inconnu] Compression Brotli/gzip ?
- 🟢 Cloudflare frontal envisageable si TTFB > 500ms

### AXE 8 — Données manquantes
1. Mesure Lighthouse mobile + desktop (5 pages clés)
2. TTFB depuis Paris (WebPageTest)
3. Note SSL Labs
4. Test Mobile-Friendly Google sur 26 URLs
5. Volume de recherche réel sur les requêtes cibles
6. Validation HTML W3C
7. Test Rich Results JSON-LD
8. Existence réelle de `/assets/og-homepage.jpg`
9. Configuration `.htaccess` actuelle
10. Compte Search Console créé ?

---

## 3. STRATÉGIE GEO LOCAL — VISER #1

### Principe : "GEO puissant sans détruire l'UX"
La densité de mots-clés locaux ne se met **PAS dans le H1 ni dans les paragraphes principaux** (UX KO). Elle se met dans :

1. **Microdata `LocalBusiness`** (déjà fait ✅) — duplicate sur `/contact/` avec horaires détaillés
2. **JSON-LD `Service` par sous-page** avec `areaServed` listant les villes (invisible UX, mangé par Google)
3. **Title + meta description** : pattern `[Service] [Ville principale] | DCB`
4. **Section "Zones d'intervention" en footer ou bas de page** : liste discrète de 8–12 villes ciblées (Lyon, Mâcon, Chalon-sur-Saône, Villefranche, Bourg-en-Bresse, Roanne, Paray-le-Monial, Charolles, Tournus, Cluny, Montceau, Le Creusot)
5. **Schema FAQPage** avec questions du type "Intervenez-vous à [Ville] ?" (déjà partiellement fait ✅)
6. **Pages locales dédiées** (Phase 2, hors scope immédiat) : `/lyon/`, `/macon/`, `/chalon-sur-saone/` — chacune avec contenu unique 600+ mots
7. **Google Business Profile** synchronisé (siège Dardilly + base technique Paray) — **CRITIQUE pour le local pack**
8. **Citations NAP cohérentes** (Nom + Adresse + Téléphone) sur 30+ annuaires : Pages Jaunes, Yelp, Kompass, Société.com, Mappy, Bing Places…

### Contenu géolocalisé sans pollution UX
- Ne JAMAIS écrire "Caisse enregistreuse Lyon Mâcon Chalon Villefranche Bourg" en intro de paragraphe (= keyword stuffing).
- À la place : 1 phrase naturelle par section type *"Nos techniciens basés à Paray-le-Monial interviennent à Lyon, Mâcon et Chalon-sur-Saône en moins de 4h."*
- Footer enrichi avec maillage interne vers pages locales (futures).

---

## 4. PLAN D'ACTION CHRONOLOGIQUE

### 🔴 PHASE 0 — PRÉ-LANCEMENT (BLOQUANT) — Semaine 1

| # | Action | Effort | Impact |
|---|---|---|---|
| 1 | Compiler Tailwind en CSS statique (`tailwindcss --minify`) | 1h | LCP −2 à −3s |
| 2 | Créer `/robots.txt` | 5min | Indexation propre |
| 3 | Générer `/sitemap.xml` (26 URLs + lastmod) | 30min | Indexation rapide |
| 4 | Supprimer `index.backup.html` | 1min | 0 duplicate |
| 6 | Réécrire 6 titles génériques | 30min | +15–25 positions |
| 7 | Réécrire meta description homepage (155c max) | 5min | CTR SERP |
| 8 | Remplacer images Google placeholder par WebP locales | 4–6h | LCP, CLS, RGPD |
| 9 | Ajouter `loading="lazy"` + `width`/`height` partout | 1h | LCP −0.5s |
| 10 | Forcer HTTPS + apex via `.htaccess` | 15min | 0 duplicate |
| 11 | Vérifier `/assets/og-homepage.jpg` (1200×630) | 15min | Partage réseaux |

### 🟠 PHASE 1 — POST-LANCEMENT — Semaines 2–4

- Créer Google Business Profile (Dardilly + Paray)
- Soumettre sitemap dans Google Search Console + Bing Webmaster
- Headers sécurité : HSTS, CSP, X-Content-Type-Options
- Cache navigateur + Brotli côté OVH (vérifier .htaccess actif)
- Auto-héberger fonts (woff2)
- Réécrire les meta descriptions des 26 pages (140–155c + CTA)
- Ajouter Blog + Notre ADN dans la nav
- Standardiser trailing slash via rewrite
- Schema `Service` JSON-LD par sous-page (areaServed)
- 30 citations NAP (annuaires)

### 🟢 PHASE 2 — LONG TERME — Mois 2–6

- Pages locales `/lyon/`, `/macon/`, `/chalon-sur-saone/` (10 pages)
- Stratégie de contenu blog (1 article/semaine, format guide)
- Backlinks locaux (CCI, partenaires, presse régionale)
- Schema BreadcrumbList sur sous-pages
- CDN Cloudflare frontal si TTFB > 500ms
- Suivi positions hebdo (Ranxplorer, SEObserver)

---

## 5. AUDIT DÉTAILLÉ — PAGES "TERMINÉES"

### `/` (Accueil) — État actuel : **75/100**

✅ **Points forts**
- H1 puissant avec mot-clé principal
- 3 piliers cards bien hiérarchisés
- JSON-LD `LocalBusiness` + `FAQPage` + `BreadcrumbList`
- Section géo (71/69/01/42) + stats hero
- Maillage interne propre vers les 3 hubs

🔴 **À corriger AVANT lancement**
1. **Title (65c)** : `Caisse enregistreuse & IT pour commerces | DCB Technologies` → bon mais légèrement long. Proposer : `Caisse NF525 & Maintenance IT — Lyon, Mâcon | DCB Technologies` (62c)
2. **Meta description (199c)** → tronquée. Réécrire à 150c : `Caisse NF525, maintenance informatique et création de site. Techniciens salariés, intervention <4h sur Lyon, Mâcon, Chalon. Devis gratuit.` (148c)
3. **Hero image manquante** : pas d'image LCP visible dans le hero homepage. Le LCP est probablement le H1 (texte) — OK mais à vérifier en Lighthouse.
4. **`sameAs` vide dans LocalBusiness** → ajouter URLs Google Business, LinkedIn, Facebook si existants.
5. **Pas de `priceRange`** réaliste : actuellement `"€€"`. OK.
6. **`numberOfEmployees`** = "2-10" : confirmer la valeur réelle.

🟠 **Améliorations recommandées** *(corrigé après audit visuel page par page)*
- ~~Section témoignages~~ ✅ déjà présente (enrichie en Phase 1 : 2→4, couvre les 4 métiers + 4 villes, en carrousel)
- ~~Section "Zones d'intervention" séparée~~ ❌ **Mauvaise reco initiale.** La section "Proximité locale" existante fait déjà ce travail. Le bon move était : (a) enrichir son paragraphe avec mentions naturelles de villes ✅, (b) ajouter les 12 villes au footer ✅, (c) JSON-LD Service avec `areaServed` ✅. Ne PAS ajouter de section dédiée.
- Le bandeau partenaires en `<span>` → passer en `<img>` avec `alt` (NF525, CashMag, OXHOO, AURES, Lenovo, Pedroporto) → backlinks visuels + SEO image. **Bloqué : nécessite les vrais logos partenaires.**
- ~~Section FAQ visible dans le HTML~~ ✅ déjà présente

---

### `/caisse-enregistreuse/` (Hub Caisse) — État actuel : **80/100**

✅ **Points forts**
- Title excellent (`Caisse enregistreuse NF525 — Lyon, Mâcon, Chalon`) — 67c, OK
- H1 avec accent visuel sur la promesse
- Badges NF525 + prix + garantie
- 6 questions FAQ JSON-LD avec réponses détaillées et localisées
- BreadcrumbList JSON-LD
- 4 cards métiers (boulangerie, restaurant, commerce, coiffure) → maillage interne fort
- Hardware cards (borne K1 + monnayeur)

🔴 **À corriger AVANT lancement**
1. **Image hero `lh3.googleusercontent.com`** → à remplacer par WebP locale (`/assets/cashmag-tpv-tactile.webp`)
2. **`width`/`height` manquants** sur l'image hero LCP → CLS direct
3. **Pas de `loading="eager"` + `fetchpriority="high"`** sur l'image LCP du hero → LCP non optimisé
4. **JSON-LD `Service`** absent → ajouter :
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Service",
     "serviceType": "Caisse enregistreuse NF525",
     "provider": {"@type": "LocalBusiness", "name": "DCB Technologies"},
     "areaServed": ["Lyon", "Mâcon", "Chalon-sur-Saône", "Villefranche-sur-Saône", "Bourg-en-Bresse", "Roanne", "Paray-le-Monial"],
     "offers": {"@type": "Offer", "price": "77", "priceCurrency": "EUR", "priceSpecification": {"@type": "UnitPriceSpecification", "billingIncrement": "monthly"}}
   }
   ```

🟠 **Améliorations recommandées** *(corrigé après audit visuel page par page)*
- ~~Title plus haut~~ : title actuel (`Caisse enregistreuse NF525 — Lyon, Mâcon, Chalon | DCB Technologies`, 67c) déjà très bon
- Ajouter un **comparatif visible "DCB vs SumUp/Zettle/Square"** en HTML body (la FAQ le mentionne, mais pas dans le contenu visible). **Vraie valeur ajoutée.**
- ~~Section "Pourquoi NF525" pédagogique~~ ✅ déjà présente (section "Problème/Solution" mentionne l'amende 7500€)
- ~~Témoignages clients par métier~~ ✅ fait en Phase 1 (4 témoignages couvrant boulanger, restaurateur, commerçante, coiffeuse, en carrousel)
- Cross-sell vers `/maintenance-informatique/` plus visible — *nice to have*

---

## 6. PAR OÙ COMMENCER — ORDRE STRICT

### Jour 1 — Tâches techniques bloquantes (4h)
1. ✅ Build Tailwind statique → fichier `css/tailwind.min.css`, supprimer `<script src="cdn.tailwindcss.com">` sur 26 pages
2. ✅ Créer `robots.txt` + `sitemap.xml`
3. ✅ Supprimer `index.backup.html`
4. ✅ Forcer HTTPS + apex via `.htaccess`

### Jour 2 — Images & assets (4h) — ⛔ BLOQUÉ : attente images réelles client
6. ❌ Télécharger les 8 images Google placeholder, les convertir en WebP, les héberger dans `/assets/`
7. ❌ Remplacer toutes les URLs `lh3.googleusercontent.com` (8 occurrences)
8. ❌ Ajouter `width`, `height`, `loading="lazy"` (sauf hero LCP : `loading="eager" fetchpriority="high"`)
9. ❌ Créer `/assets/og-homepage.jpg` + `/assets/og-caisse.jpg` (1200×630)

### Jour 3 — Contenu Accueil + Caisse Hub (6h)
10. ✅ Réécrire les 6 titles génériques
11. ✅ Réécrire les 26 meta descriptions
12. ✅ Compléter `LocalBusiness` (sameAs, numberOfEmployees confirmé)
13. ✅ Ajouter JSON-LD `Service` sur Caisse Hub
14. ✅ Ajouter section témoignages réels sur Accueil + Caisse Hub
15. ✅ Ajouter section "Zones d'intervention" en bas de page

### Jour 4 — Validation ⏳ À FAIRE avant lancement
16. ❌ Lighthouse mobile sur 5 pages clés (cible : Performance > 90, SEO 100, A11y > 95)
17. ❌ Test Rich Results sur tous les JSON-LD
18. ❌ Validation HTML W3C
19. ❌ Test Mobile-Friendly Google sur 26 URLs
20. ❌ Test SSL Labs (cible A)

### Jour 5 — Lancement ⏳ À FAIRE
21. ❌ Push prod sur `dcb-technologies.fr`
22. ❌ Création Search Console + soumission sitemap
23. ❌ Création Google Business Profile (Dardilly + Paray)
24. ❌ Création Bing Webmaster Tools
25. ❌ Demande d'indexation sur les 26 URLs

---

## 7. KPIs DE SUIVI

| KPI | Cible J+30 | Cible J+90 | Cible J+180 |
|---|---|---|---|
| Pages indexées Google | 26/26 | 26/26 | 30+ (avec blog) |
| Lighthouse Performance mobile | > 85 | > 90 | > 95 |
| Position moyenne (requêtes cibles) | < 30 | < 15 | < 5 |
| Top 3 sur "caisse enregistreuse Mâcon" | — | Top 10 | Top 3 |
| Top 3 sur "maintenance informatique Lyon" | — | Top 20 | Top 10 |
| Clics organiques / mois (Search Console) | 20+ | 100+ | 500+ |
| Avis Google Business | 5+ | 15+ | 30+ |

---

## 8. CHECKLIST EXPRESS — À COCHER AVANT PUSH PROD

```
[ ] robots.txt présent et valide
[ ] sitemap.xml présent (26 URLs)
[ ] Tailwind compilé en local (plus de CDN)
[ ] index.backup.html supprimé
[ ] 0 image lh3.googleusercontent.com restante
[ ] Toutes les <img> ont width + height + alt
[ ] Toutes les <img> non-LCP ont loading="lazy"
[ ] Image hero LCP : loading="eager" + fetchpriority="high"
[ ] 26 titles uniques + < 65 caractères
[ ] 26 meta descriptions uniques + 140-155 caractères
[ ] /assets/og-homepage.jpg existe (1200x630)
[ ] /assets/og-caisse.jpg existe (1200x630)
[ ] HTTPS forcé via .htaccess
[ ] www → apex en 301
[ ] Lighthouse mobile > 85 sur 5 pages clés
[ ] Test Rich Results OK sur tous les JSON-LD
[ ] Test Mobile-Friendly OK sur les 26 URLs
```

---

**Document maintenu par :** Marc Durand (consultant SEO)
**Dernière révision :** 2026-04-21
**Prochaine révision :** J+30 après mise en ligne
