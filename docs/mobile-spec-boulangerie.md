# Spec mobile-first : Boulangerie/Patisserie

> Fichier de specification pour l'Agent 2 (integrateur).
> Page source : `caisse-enregistreuse/boulangerie/index.html`
> Breakpoint mobile : 640px. Architecture dual-shell.
> **Zero em-dash dans tout le contenu produit.**

---

## 1. Inventaire sections desktop

La page desktop compte **8 sections** (+ 1 section CTA final), dans cet ordre :

| # | ID/Ancre | Titre H2 / Label | Elements principaux | Role narratif |
|---|---|---|---|---|
| 1 | Hero | "Caisse enregistreuse boulangerie NF525, installée par vos techniciens" | Chips (Boulangerie, Installation, Formation), H1, lede prix (59€/mois), 3 checks, 2 CTA (devis + tel), image hero avec badge monnayeur | Accroche prix + identite metier |
| 2 | Trust bar | (pas de H2) | 4 items : Certifie NF525, Garantie 5 ans, SAV 7j/7 24h/24, Materiel etanche | Validation immediate post-hero |
| 3 | Features metier | "Ce que votre caisse fait pour vous chaque jour" | Sidebar sticky CashMag + 4 feature cards : Formules automatiques, Stocks/fabrication, Cloture/export, Suivi d'activite | Demonstration fonctionnelle |
| 4 | Pricing | "Choisissez votre configuration" | 3 tarifs : Essentiel 59€/mois, Pack Boulangerie 77€/mois (featured), Sur mesure devis + Formulaire devis inline (prenom, email, tel, select offre) | Friction minimale vers conversion prix |
| 5 | Probleme/Solution | "Ce que vivent la plupart des boulangers avant de nous appeler" | 3 cards : file qui s'allonge, fabrication a l'intuition, 30min de cloture | Miroir des douleurs du prospect |
| 6 | Temoignages | "Ce que disent nos clients." | Carrousel 4 temoignages : Isabelle M. (Macon), Franck D. (Villefranche), Philippe B. (Chalon), Nathalie R. (Bourg) | Preuve sociale locale |
| 7 | Cross-sell | "Ne vous arretez pas au comptoir" | 2 cards : Monnayeur automatique (video 3D) + Site web boulangerie | Upsell intra-silo + inter-pilier |
| 8 | FAQ | "Questions frequentes" | 7 questions : NF525 obligatoire, horaires 5h, monnayeur compatible, multi-boutiques, panne samedi, TPE compatible, ventes au poids | Traitement des objections |
| 9 | CTA Final | "Demandez un devis pour votre boulangerie : reponse sous 24h" | Bouton devis + numero tel + lien retour hub + date E-E-A-T | Derniere conversion |

**Accent couleur** : `#F59E0B` (ambre boulangerie) sur icones, badges, prix, bordures.
**Narration "prix-sensible"** : le prix (59€/mois) apparait des le hero, occupe une section entiere (Pricing en position #4), et revient dans le CTA final. Le prospect price-first est capte avant de descendre vers les arguments.

---

## 2. Mapping desktop vers mobile

| Section desktop | Statut | Pattern/Classe mobile | Notes d'adaptation |
|---|---|---|---|
| 1. Hero | **EXISTE** S1 | `.hero` + `.chips` + `.scene` + `.checks` + `.cta-row` | Gradient hero adapter en marron/ambre boulangerie : `linear-gradient(135deg,#92400E 0%,#B45309 100%)`. Chip gold : "Des 59€/mois". Float1 (orange) : icone `payments`, label "Formules", valeur "Auto". Float2 (bleu) : icone `verified`, label "NF525", valeur "Conforme". 3 checks : formules auto / monnayeur zero erreur / cloture 3 min. Image LCP : `../../assets/placeholder-hero-boulangerie.jpg` (fallback vers URL Google si absent). |
| 2. Trust bar | **EXISTE** S2 | `.marquee` + `.marquee-track` | 5 items specifiques boulangerie : Intervention <4h / Garantie 5 ans / Certifie NF525 / Materiel etanche / Support 7j/7. Identique au hub sauf "Materiel etanche" remplace "Zero sous-traitance" pour coller au metier boulangerie. |
| 3. Features metier | **A CREER** | `.sec.s1` + structure inline inspiree de `.pain` | Pas d'equivalent direct dans le standard (S3 = pain points, pas features). Creer une section `.sec.s1` avec eyebrow "Votre quotidien", H2 "Ce que CashMag fait pour vous chaque matin", puis 4 blocs `.ft` style CashMag card (grid 38px + 1fr) : Formules auto / Stocks fabrication / Cloture Z / Suivi activite. Icones `#F59E0B`. Pas de sidebar sticky (inutile sur mobile). Ajouter lien "En savoir plus sur CashMag" en bas. |
| 4. Pricing | **A CREER** | Pas de pattern standard pour les tarifs | Section critique pour la narration prix-sensible. Creer `.sec` avec eyebrow "Tarification transparente", H2 "Choisissez votre formule". 3 cartes empilees en colonne : Essentiel 59€/mois (liste includes/excludes) / Pack Boulangerie 77€/mois (badge "Le plus choisi", style featured via border `#F59E0B`) / Sur mesure (devis). Chaque carte : titre Sora, prix ambre, liste items, bouton `data-sheet` (pas de redirection contact — ouvre directement la bottom-sheet). Supprimer le formulaire inline desktop (la sheet remplace cet usage sur mobile). |
| 5. Probleme/Solution | **EXISTE** S3 | `.sec.s1` + `.pain` + `.pain .row` x3 | Contenu a adapter au boulanger. Row 01 : "La file s'allonge, des clients repartent" (icone `schedule`). Row 02 : "Vous fabriquez a l'intuition, vous jetez trop" (icone `inventory`). Row 03 : "30 minutes de cloture chaque soir" (icone `calculate`). Numeros en `var(--cta)` (#F57C00) — jamais en `#F59E0B`. |
| 6. Temoignages | **EXISTE** S4 | `.sec` + cards inline style S4 | Garder 2 temoignages maximum sur mobile (pas de carrousel JS pour cette page — utiliser le pattern inline du standard). Temoignage 1 : Isabelle M. / Boulangerie des Halles, Macon (71) — avatar gradient `#F59E0B,#D97706`. Temoignage 2 : Franck D. / Fournil Saint-Vincent, Villefranche (69) — avatar gradient `#0B3D91,#1E5BD9`. |
| 7. Cross-sell Monnayeur | **EXISTE** S8 | `.sec.s1` + `.peri-a` | Adapter `.peri-a` : lien `.b2` vers `../../caisse-enregistreuse/monnayeur/index.html` (video monnayeur-3d.webm, chemin `../../assets/monnayeur-3d.webm`). Supprimer la card "Site web boulangerie" de ce bloc (elle va dans la section cross-sell inter-pilier distincte — voir section 5 ci-dessous). Remplacer `.b1` par un bloc interne : borne de commande snacking optionnelle (`../../caisse-enregistreuse/borne-de-commande/index.html`, image `../../assets/borne-k1.png`). |
| 8. FAQ | **EXISTE** S10 | `.sec` + `.faq` + `<details>/<summary>` | Garder 5 questions (max recommande mobile). Selection : NF525 obligatoire / Horaires 5h / Monnayeur compatible / Panne samedi / CashMag gere les ventes au poids. Supprimer multi-boutiques et TPE (moins prioritaires sur mobile pour un boulanger solo). Questions/reponses doivent correspondre exactement au JSON-LD FAQPage du `<head>`. |
| 9. CTA Final | **EXISTE** S11 | `.final-a` + `.card` | H3 : "Demandez votre devis boulangerie gratuit." Sous-titre : "Reponse d'un technicien sous 24h. Sans engagement." Bouton `data-sheet`. Divider "ou appelez-nous". Bloc `.tel` avec `04 82 53 05 10`. Date E-E-A-T juste apres la section. |
| NF525 conformite | **AJOUTER** S7 | `.sec` + `.nf-pillars-a` + `.nf-alert-a` | Non presente sur la page desktop boulangerie mais presente sur le hub caisse mobile. A inclure sur mobile boulangerie car argument legal fort pour une audience boulangere (peur des controles fiscaux). Reformulation unique : "7 500 € par systeme de caisse non conforme" (ne pas copier le hub). Sentence specifique : "CashMag, que nous installons dans vos boulangeries de Saone-et-Loire, Rhone, Ain et Loire, est certifie NF525. Votre attestation est disponible depuis votre caisse, meme a 5h du matin." |
| Techniciens de proximite | **AJOUTER** S9 | `.tech` | Section transversale commune (identique sur toutes les pages mobiles). Copier-coller depuis le hub caisse sans modification du contenu. SLA : <20min / <4h / <48h. |
| Carousel metiers | **SUPPRIMER** S5 | (n/a) | Le carousel metiers (S5 du hub, avec tabs #tabs/#carou/#dots) n'a pas de sens sur une page metier dediee — le visiteur est deja sur la page boulangerie. Supprimer entierement. Si besoin de lier aux autres metiers, utiliser 2 liens discrets en bas de la section cross-sell. |
| CashMag card | **ADAPTER** S6 | `.sec.s1` + `.cm-card` | Inclure une version allégee de la CashMag card, axee sur les benefices specifiques boulangerie : "Formules detectees automatiquement", "Stocks et fabrication sur mesure", "Cloture Z en 1 clic". Lien `.cm-cta` vers `../../caisse-enregistreuse/cashmag/index.html`. |

---

## 3. Ordre narratif mobile "prix-sensible"

Entonnoir cible : le visiteur arrive via "caisse boulangerie prix" ou "logiciel caisse boulangerie pas cher". Il est sensible au cout, prudent (risque NF525), et veut une solution pratique pour son fournil qui ouvre tot.

**Ordre recommande (11 sections dans .m-shell) :**

1. **Hero** — Accroche prix immediate ("Des 59€/mois"), identite metier (chip Boulangerie/Patisserie), 3 benefices courts, CTA sheet.
   *Justification : le chip "Des 59€/mois" en or capte le prospect prix-sensible en 2 secondes avant tout scroll.*

2. **Trust bar Marquee** — Reassurance post-hero (NF525, 5 ans, 7j/7, <4h).
   *Justification : valide que le prix bas ne signifie pas qualite basse. Reduit l'anxiete immediat.*

3. **Probleme/Solution (Pain points)** — 3 frustrations : file, fabrication intuition, cloture lente.
   *Justification : miroir des douleurs. Le visiteur se reconnait avant de voir la solution. Moment d'empathie.*

4. **Features metier** — Ce que CashMag fait au quotidien (formules, stocks, cloture, suivi).
   *Justification : apres la douleur, la solution concrete. Section courte et specifique boulangerie.*

5. **Pricing** — 3 formules, prix transparents, Pack Boulangerie en featured.
   *Justification : coeur de la narration prix-sensible. Le prospect a maintenant confiance (trust bar + features) et est pret a voir les tarifs. Position centrale maximise la conversion.*

6. **Temoignages** — 2 avis locaux de boulangers (Macon, Villefranche).
   *Justification : apres le prix, la preuve sociale locale rassure sur le choix. "Des gens comme moi ont deja fait ca."*

7. **NF525 conformite** — Argument legal : amende 7 500€, attestation accessible depuis la caisse.
   *Justification : l'argument obligatoire/legal arrive apres le prix et les preuves, pas avant (sinon anxiogene). Position mediane = "en plus, vous etes protege".*

8. **CashMag card** — Presentation du logiciel, 3 features boulangerie, lien vers page CashMag.
   *Justification : approfondir pour les visiteurs encore en phase de consideration apres le pricing.*

9. **Cross-sell peripheriques (Monnayeur + Borne)** — Upsell intra-silo.
   *Justification : le visiteur qui envisage d'acheter est receptif aux complementaires. Position avancee dans l'entonnoir.*

10. **Techniciens de proximite** — Section fond bleu, 4 departements, SLA <4h.
    *Justification : argument SAV comme dernier frein. "Si ca tombe en panne, quelqu'un vient." Ferme les objections residuelles.*

11. **FAQ** — 5 questions cles.
    *Justification : traitement des derniers doutes avant la conversion finale.*

12. **CTA Final** — Bouton devis sheet + telephone.
    *Justification : derniere action claire apres avoir tout parcouru.*

---

## 4. Differences de frame vs hub caisse

Les 7 elements de frame sont architecturalement identiques au hub caisse (`caisse-enregistreuse/index.html`). Quatre differences specifiques a appliquer :

**Difference 1 : Chemins relatifs (depth 2)**
Tous les chemins `../` du hub (depth 1) deviennent `../../` sur la sous-page boulangerie (depth 2).
Exemples concrets :
- Logo header : `../../assets/logo-dcb.svg`
- CSS mobile : `../../m/css/mobile.css`
- JS mobile : `../../m/js/mobile.js`
- Liens footer : `../../caisse-enregistreuse/boulangerie/index.html` etc.
- `form action` dans la sheet : `../../contact/`
- Logo menu : `../../assets/logo-dcb.svg`
- Lien retour accueil logo : `../../index.html`

**Difference 2 : `aria-current="page"` dans le menu**
Sur le hub caisse, le lien actif est `<a href="index.html" aria-current="page">Caisse enregistreuse`.
Sur la page boulangerie, la nav ne dispose pas de sous-niveau dans le menu mobile (le menu liste les 3 piliers + ADN + Blog + Contact). Le lien "Caisse enregistreuse" reste le plus proche de la page courante. Appliquer `aria-current="page"` sur :
```html
<a href="../../caisse-enregistreuse/index.html" aria-current="page">Caisse enregistreuse ...
```
Les autres liens nav n'ont pas `aria-current`.

**Difference 3 : Segment metier pre-selectionne dans la bottom-sheet**
Sur le hub caisse, le segment "Mon metier" propose 4 options avec "Boulangerie" en premier mais non pre-selectionne par defaut (le hub est generaliste).
Sur la page boulangerie, "Boulangerie/Patisserie" doit etre pre-selectionne (`class="on"`, `aria-checked="true"`) car le visiteur est deja sur la page metier :
```html
<button type="button" class="on" role="radio" aria-checked="true">
  <span class="material-symbols-outlined" aria-hidden="true">bakery_dining</span>Boulangerie
</button>
<button type="button" role="radio" aria-checked="false">
  <span class="material-symbols-outlined" aria-hidden="true">restaurant</span>Resto
</button>
<button type="button" role="radio" aria-checked="false">
  <span class="material-symbols-outlined" aria-hidden="true">storefront</span>Commerce
</button>
<button type="button" role="radio" aria-checked="false">
  <span class="material-symbols-outlined" aria-hidden="true">content_cut</span>Beaute
</button>
```

**Difference 4 : `aria-label` du FAB**
Sur le hub : `aria-label="Demander un devis caisse"`
Sur la page boulangerie : `aria-label="Demander un devis caisse boulangerie"`
```html
<button class="b1" id="fabDevis" aria-label="Demander un devis caisse boulangerie">
```

---

## 5. Maillage inter-pilier

| Section d'insertion | URL cible | Texte d'ancre suggere | Emplacement precis |
|---|---|---|---|
| Section CashMag card (S6) | `../../maintenance-informatique/index.html` | "Proteger votre systeme informatique" | Apres le lien `.cm-cta` vers CashMag, ajouter un lien secondaire discret (style `font-size:13px;color:var(--mute)`) : "Vous souhaitez aussi securiser votre reseau ? Decouvrez notre service IT." |
| Section Cross-sell peripheriques (S8) | `../../visibilite-web/creation-site-internet/index.html` | "Creer le site web de votre boulangerie" | Ajouter une 3e card legere apres les 2 cards peripheriques (monnayeur + borne) : card simple sans image, fond `var(--s1)`, icone `language` couleur `#0B3D91`, titre "Visibilite en ligne", texte "Quand vos clients cherchent 'boulangerie pres de moi' sur Google, c'est vous qu'ils trouvent." Lien texte en bas "Creer mon site boulangerie". |
| Section Techniciens de proximite (S9) | `../../maintenance-informatique/cloud-securite/index.html` | "Securiser mes donnees et sauvegardes" | Apres le bouton `.tech-cta`, ajouter une ligne de lien discret : `<a href="../../maintenance-informatique/cloud-securite/index.html" style="display:block;text-align:center;padding:12px 0 0;font-size:12.5px;color:rgba(255,255,255,0.65);text-decoration:underline">Securite informatique et sauvegarde de donnees</a>`. |

---

## 6. Contraintes techniques (checklist integrateur)

### Chemins (depth 2)
- [ ] Tous les assets : `../../assets/`
- [ ] CSS desktop : `../../css/style.css?v=8` et `../../css/tailwind.min.css?v=17`
- [ ] CSS mobile : `<link rel="stylesheet" href="../../m/css/mobile.css" media="screen and (max-width:640px)">`
- [ ] JS mobile IIFE : `s.src='../../m/js/mobile.js'`
- [ ] JS desktop : `../../js/scripts.js?v=14`
- [ ] Tous les liens internes du footer : prefixe `../../`
- [ ] `form action` dans la sheet : `../../contact/`

### Shells CSS (dans `<style>` du `<head>`)
- [ ] Bloc shells obligatoire :
```css
.m-shell { display: none }
@media(max-width:640px) {
  .m-shell { display: block }
  .d-shell { display: none }
  #dcb-phone-fab { display: none !important }
}
```
- [ ] `#dcb-phone-fab{display:none!important}` DANS le `@media(max-width:640px)` — pas en dehors

### IDs mobiles
- [ ] Progress bar : `id="m-pg"` (jamais `id="pg"`)
- [ ] Main mobile : `id="m-main"` (jamais `id="main-content"`)
- [ ] Tous les IDs JS du carousel (`#tabs`, `#carou`, `#dots`) : ABSENTS sur cette page (pas de carousel metiers)

### Couleur accent boulangerie
- [ ] Hero gradient : `linear-gradient(135deg,#92400E 0%,#B45309 100%)`
- [ ] Chips accent, icones features, bordure pricing featured : `#F59E0B`
- [ ] Numeros `.pain .n` : `var(--cta)` = `#F57C00` (JAMAIS `#F59E0B` — regle standard)
- [ ] Etoiles temoignages : `#F59E0B`
- [ ] Avatar gradient temoignages boulangerie : `#F59E0B,#D97706`
- [ ] Eyebrow labels : `var(--cta)` = `#F57C00` (JAMAIS `#F59E0B`)

### NF525 : reformulation unique
- [ ] Ne pas copier la formulation du hub caisse mobile ni du hub desktop
- [ ] Formulation validee pour cette page : "7 500 € par systeme de caisse non conforme" (pas "par poste", pas "par logiciel")
- [ ] Phrase specifique boulangerie a inclure dans `.nf-alert-a .desc` : "CashMag, installe par nos techniciens dans les boulangeries de Saone-et-Loire, Rhone, Ain et Loire, est certifie NF525. Votre attestation reste accessible depuis votre caisse, meme a 5h du matin."

### Date E-E-A-T
- [ ] Inclure juste apres `</section>` du CTA Final (avant `</main>`) :
```html
<p style="font-size:11px;color:#94A3B8;text-align:center;padding:8px 16px 16px">Mis a jour le <time datetime="2026-04-23">23 avril 2026</time></p>
```

### Viewport
- [ ] Ajouter `viewport-fit=cover` : `<meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">`

### Preload LCP mobile
- [ ] Ajouter dans `<head>` :
```html
<link rel="preload" as="image" href="../../assets/placeholder-hero-boulangerie.jpg" fetchpriority="high" media="(max-width:640px)">
```
(Adapter l'extension en `.webp` quand l'image reelle sera fournie par le client)

### Verification finale obligatoire
- [ ] Grep `—` (em-dash U+2014) sur le fichier produit : resultat doit etre 0 match
- [ ] Tester a 375px (iPhone Mini) : hero visible, FAB cache au depart, sheet s'ouvre
- [ ] Tester a 641px : shell mobile invisible, nav desktop fonctionnelle
- [ ] Verifier que `#dcb-phone-fab` n'apparait pas en mobile (invisible via regle CSS shell)
- [ ] Verifier que la section carousel (`#tabs`/`#carou`/`#dots`) est absente du fichier (pas de conflit JS)
- [ ] Verifier que `aria-current="page"` est sur le bon lien dans `#menu` (Caisse enregistreuse)
- [ ] Verifier que le segment "Boulangerie" est `class="on" aria-checked="true"` dans la sheet

---

*Spec produite le 13/05/2026. Agent auteur : Claude Sonnet 4.6.*
*A lire avant integration : `docs/mobile-standard.md` (reference technique complete).*
