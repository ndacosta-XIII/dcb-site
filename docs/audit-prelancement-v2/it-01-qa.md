# AUDIT IT — QA MÉCANIQUE (23/07/2026)

**Note : 72/100 (bloquants majeurs restants)**

## Passes de validation

### 1. Em dash (U+2014) — PASS ✓
Aucun em dash détecté dans les 6 pages IT. Zéro tolérance respectée.

### 2. Encodage UTF-8 avec BOM — FAIL ✗
- ✓ maintenance-informatique/index.html (hub) : BOM présent
- ✓ maintenance-informatique/infogerance-maintenance/index.html : BOM présent
- ✗ maintenance-informatique/cybersecurite-sauvegarde/index.html : **BOM ABSENT**
- ✗ maintenance-informatique/depannage-assistance/index.html : **BOM ABSENT**
- ✗ maintenance-informatique/emails-pro-collaboration/index.html : **BOM ABSENT**
- ✗ maintenance-informatique/materiel-reseaux/index.html : **BOM ABSENT**

**Impact bloquant** : 4 fichiers sur 6 manquent le BOM UTF-8 (EF BB BF). Risque de mojibake lors de la bascule racine si un outils externe traite le fichier en ANSI/CP1252. Bien que `<meta charset="utf-8">` soit présent (mitigation partielle), l'absence de BOM est non-conforme à la norme du projet (cf. CLAUDE.md).

**Correction proposée** : Ajouter BOM UTF-8 à chaque fichier manquant via PowerShell (copie byte-exacte) avant merge.

### 3. Cache-bust — PASS ✓
Tous les fichiers IT utilisent les mêmes versions :
- css/style.css?v=19
- js/scripts.js?v=50

Vérification cross-check avec homepage + caisse + web : uniformité confirmée.

### 4. Liens internes — PASS ✓
Tous les href relatifs des 6 pages IT pointent vers des chemins existants dans le worktree :
- contact/index.html ✓
- caisse-enregistreuse/ ✓
- blog/maintenance-informatique-preventive/ ✓
- maintenance-informatique/(sous-pages) ✓

**Balayage inverse** : Aucun href vers les anciens slugs détecté (infogerance-pme, maintenance-depannage, cloud-securite, outils-collaboratifs, location-vente-installation). Seules traces : noms de fichiers d'assets (infogerance-pme-bureau-supervision.webp, cloud-securite-technicien-baie-reseau.webp) qui ne sont pas des liens rompus.

### 5. Assets référencés — FAIL ✗
Trois images heroes manquent dans assets/ :

| Fichier attendu | Référencé par | Statut |
|---|---|---|
| hero-cybersecurite-sauvegarde.jpg | cybersecurite-sauvegarde/index.html (L115, L403) | **404** |
| hero-outils-collaboratifs.jpg | emails-pro-collaboration/index.html | **404** |
| hero-location-it.jpg | materiel-reseaux/index.html | **404** |

Autres assets vérifiés comme présents :
- hero-infogerance.webp ✓
- hero-maintenance.webp ✓
- Assets fonts/ ✓

**Impact bloquant** : Les 3 pages avec héros manquants afficheront un broken image en production, dégradant l'UX et les Core Web Vitals (LCP impacté).

**Correction proposée** : Fournir les 3 images heroes (Clément), ou utiliser les assets existants (hero-maintenance.webp pour tous) en attendant les images dédiées.

### 6. JSON-LD — PASS ✓
Tous les blocs `<script type="application/ld+json">` sont syntaxiquement valides :
- Hub IT : 2 blocs (FAQPage + LocalBusiness inliné)
- cybersecurite-sauvegarde : 3 blocs (FAQPage + Breadcrumb + Service)
- depannage-assistance : 2 blocs (FAQPage + Service)
- emails-pro-collaboration : 2 blocs (FAQPage + Service)
- infogerance-maintenance : 2 blocs (FAQPage + Service)
- materiel-reseaux : 3 blocs (FAQPage + Breadcrumb + Service)

### 7. Dual-shell (mobile/desktop) — PASS ✓
Toutes les 6 pages contiennent :
- `.d-shell` (desktop) : présent ✓
- `.m-shell` (mobile) : présent ✓
- IDs mobiles préfixés m- : 7 par page ✓
  - m-pg (page), m-main, m-nav, m-menu, m-fab, m-sheet, m-footer

Shells injection par scripts.js : conforme au standard mobile-standard.md.

### 8. .htaccess (redirections) — PASS ✓
Toutes les redirections 301 des anciens slugs IT sont présentes :
- /maintenance-informatique/infogerance-pme/ → /maintenance-informatique/infogerance-maintenance/ ✓
- /maintenance-informatique/maintenance-depannage/ → /maintenance-informatique/depannage-assistance/ ✓
- /maintenance-informatique/cloud-securite/ → /maintenance-informatique/cybersecurite-sauvegarde/ ✓
- /maintenance-informatique/outils-collaboratifs/ → /maintenance-informatique/emails-pro-collaboration/ ✓
- /maintenance-informatique/location-vente-installation/ → /maintenance-informatique/materiel-reseaux/ ✓

Routes v1 (/service-it-360/...) également mappées. Heritage liens external préservé.

---

## Bloquants pré-lancement

### B1 : Encodage BOM (4 fichiers manquent le BOM UTF-8)
**Sévérité** : Critique (risque mojibake post-lancement).
**Fichiers** : cybersecurite-sauvegarde, depannage-assistance, emails-pro-collaboration, materiel-reseaux.
**Correction** : Ajouter BOM via PowerShell avant merge principal.

### B2 : Assets images heroes manquantes (3 fichiers)
**Sévérité** : Critique (visual regression + LCP).
**Fichiers** : hero-cybersecurite-sauvegarde.jpg, hero-outils-collaboratifs.jpg, hero-location-it.jpg.
**Correction** : Livrer les 3 images ou utiliser fallback existant.

---

## Observations post-lancement (non-bloquants)
Aucun lien vers anciens slugs détecté dans le reste du site ; redirections 301 actives. Noms d'assets résiduels (infogerance-pme, cloud-securite dans les noms de fichiers) n'impactent pas le code HTML.

---

## Comparaison v1 → v2
Audit v1 (03-qa-mecanique.md) avait relevé : BOM manquant sur merci/index.html (html racine, corrigé).
Audit IT v2 : nouveau dégel révèle BOM manquant sur 4 pages IT (régrédié vs standard).

---

## Verdict
**BLOCAGES MAJEURS** : 2 bloquants (BOM + assets). **Préparation à la bascule racine indisponible** tant que ces points ne sont pas résolus.
