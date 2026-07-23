# AUDIT DÉGEL SILO IT : SEO TECHNIQUE + INTÉGRATION

Source auditée : worktree `deploy-it` (= branche `deploy` = live `https://dcb-technologies.fr/new/`, contre-vérifications HTTP faites par échantillon). Périmètre : `maintenance-informatique/` hub + 5 sous-pages (`infogerance-maintenance`, `depannage-assistance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration`, `materiel-reseaux`) + `sitemap.xml`, `llms.txt`, `.htaccess`, maillage (`js/scripts.js`, `index.html`, `visibilite-web/index.html`).

## Note : 58/100

Justification : le dégel a livré du contenu réel (FAQ, JSON-LD Service/FAQPage/BreadcrumbList, zone 71/69/01/42 restaurée, zéro em dash, zéro prix factice) mais **aucun des points techniques de la checklist du dégel n'est réellement fait** : OG/Twitter toujours à zéro, LocalBusiness toujours non inliné, meta descriptions systématiquement hors gabarit (pire qu'avant), sitemap toujours désynchronisé. Le silo a été retravaillé sur le fond narratif, pas sur la technique.

---

## Tableau checklist du dégel (FAIT / PAS FAIT)

| Item (checklist RAPPORT-FINAL.md, section 6) | Statut | Preuve |
|---|---|---|
| Sitemap : nouveaux slugs présents, anciens absents | **FAIT** | `sitemap.xml` lignes 110-137 : 6 URLs aux nouveaux slugs (`infogerance-maintenance`, `depannage-assistance`, `cybersecurite-sauvegarde`, `materiel-reseaux`, `emails-pro-collaboration` + hub). Grep des 5 anciens slugs sur `sitemap.xml` : 0 résultat. |
| Sitemap : lastmod cohérent avec date E-E-A-T | **PAS FAIT** | Hub : `lastmod` 2026-06-24 (`sitemap.xml:21`) vs "Mis à jour le 23 avril 2026" affiché (`maintenance-informatique/index.html:1038`). `infogerance-maintenance` : `lastmod` 2026-07-22 (`sitemap.xml:112`) vs date affichée 24 avril 2026 (`infogerance-maintenance/index.html:807`). Même défaut déjà relevé pré-dégel, non corrigé, étendu à une 2e page. |
| OG images dédiées (silo IT) | **PAS FAIT** | `assets/` : og-images existent pour tous les autres silos (`og-caisse-enregistreuse.jpg`, `og-visibilite-web.jpg`, `og-boulangerie.jpg`, etc.), **aucune `og-maintenance-informatique*.jpg` ni équivalent par sous-page**. |
| Balises Open Graph / Twitter Card sur les 6 pages | **PAS FAIT (régression totale)** | `grep -c "og:"` et `grep -c "twitter:"` = 0 sur les 6 fichiers (`maintenance-informatique/index.html` et les 5 sous-pages). Le standard silo caisse a 8 balises OG+Twitter par page (`caisse-enregistreuse/boulangerie/index.html:11-21`). |
| Meta `robots` | **PAS FAIT** | 0 occurrence sur les 6 pages. Non bloquant (l'absence de balise robots = comportement par défaut `index,follow`, acceptable), mais absent alors que le reste du site en dispose par endroits. |
| LocalBusiness inliné (provider du Service) | **PAS FAIT** | Les 6 pages : `"provider": {"@id": "https://dcb-technologies.fr/#localbusiness"}`, référence nue, **aucun objet `LocalBusiness` inliné**. Standard caisse : `provider` contient l'objet complet (`@type`, `name`, `telephone`, `email`, `address`) en plus de l'`@id` (`caisse-enregistreuse/boulangerie/index.html:82-96`). `grep -c "LocalBusiness"` = 0 sur les 6 pages IT vs 1 sur chaque page caisse testée. |
| llms.txt à jour avec les nouveaux slugs | **FAIT** | `llms.txt` lignes 29-35 : les 5 sous-pages listées avec les nouveaux slugs et des résumés à jour (dépannage, cybersécurité, matériel, emails pro). Aucun ancien slug résiduel. |
| Dates E-E-A-T "Mis à jour le" | **FAIT partiellement** | Présentes sur les 6 pages, desktop + mobile. Mais 2/6 dates figées (hub 23/04, infogérance 24/04) pendant que le reste du silo affiche 22/07 ; et l'accent est perdu côté desktop sur les 6 pages ("Mis a jour" au lieu de "Mis à jour", cf. section Encodage). |
| Anciens slugs supprimés sans 301 (hypothèse de la commande) | **INFIRMÉ, en fait FAIT** | Voir section dédiée ci-dessous : les redirections existent dans `.htaccess`. |

---

## 1. Titles, meta descriptions, canonicals, OG, robots (les 6 pages)

| Page | Title (car.) | Meta desc (car.) | Canonical |
|---|---|---|---|
| Hub `maintenance-informatique/` | 72 : "Maintenance Informatique PME : dépannage, infogérance \| DCB Technologies" | **179** | `https://dcb-technologies.fr/maintenance-informatique/` ✓ nouveau slug |
| `infogerance-maintenance/` | **78** : "Infogérance et Maintenance Informatique Sur Mesure pour PME \| DCB Technologies" | **201** | ✓ |
| `depannage-assistance/` | 67 : "Dépannage informatique & assistance utilisateurs \| DCB Technologies" | **180** | ✓ |
| `cybersecurite-sauvegarde/` | 49 : "Cybersécurité & sauvegarde PME \| DCB Technologies" | **179** | ✓ |
| `emails-pro-collaboration/` | **95** : "Email professionnel & outils collaboratifs : Microsoft 365, Google Workspace \| DCB Technologies" | **198** | ✓ |
| `materiel-reseaux/` | 64 : "Matériel Informatique et Réseaux d'Entreprise \| DCB Technologies" | **194** | ✓ |

**Constat : 6/6 meta descriptions hors gabarit 140-160 (179 à 201 caractères)**, contre 4/6 avant le dégel. C'est une régression par rapport à l'état initial audité, pas juste un point non traité : les nouvelles descriptions rédigées pour le rename sont toutes trop longues, alors que le standard silo caisse tient à 141-176 caractères (`caisse-enregistreuse/boulangerie/index.html`, `restaurant/index.html`). Google tronque au-delà d'environ 155-160 caractères sur desktop : l'argument commercial de fin de description ("Devis gratuit.", "Départements 71, 69, 01, 42.") est perdu dans les SERP sur les 6 pages.

**Titles** : `emails-pro-collaboration` à 95 caractères sera tronqué sévèrement (perte de "DCB Technologies" et une partie du nom des outils). `infogerance-maintenance` à 78 caractères également trop long. Les 4 autres sont dans une zone acceptable (49-72c).

**Canonicals** : corrects sur les 6 pages, alignés sur les nouveaux slugs, sans `/new/` (conforme à la doctrine acquise : domaine cible sans le préfixe de staging).

**OG/Twitter** : absents à 100%, cf. tableau checklist. Aucune image OG dédiée dans `assets/` pour le silo IT.

**Robots** : absent, non bloquant.

---

## 2. JSON-LD : validité et alignement sur le standard caisse

Les 6 pages contiennent 3 blocs JSON-LD chacune : `FAQPage`, `BreadcrumbList`, `Service`. **Tous parsent sans erreur** (validation `JSON.parse` automatisée sur les 18 blocs, 0 erreur de syntaxe).

**areaServed** : conforme à la doctrine 71/69/01/42 sur les 6 pages, zéro résidu Allier (vérifié après le commit `795fc36` "retour zone 4 départements, retrait de l'Allier partout"). Bon point.

**Gaps vs standard caisse :**
- **`provider` non inliné** (cf. checklist ci-dessus) : sur les 6 pages, `"provider": {"@id": "..."}`  seul, jamais l'objet `LocalBusiness` complet. C'est le point technique le plus significatif du dégel raté.
- **Pas de `@id` propre sur le `Service`** : le standard caisse pose `"@id": "https://dcb-technologies.fr/caisse-enregistreuse/boulangerie/#service"` sur chaque `Service`. Aucune des 6 pages IT n'a de `@id` sur son objet `Service`.
- **`infogerance-maintenance/index.html:145-155`** : `areaServed` toujours sans la ville `Paray-le-Monial`, alors que les 4 autres sous-pages (`depannage-assistance`, `cybersecurite-sauvegarde`, `emails-pro-collaboration`, `materiel-reseaux`) et le hub l'incluent tous. Défaut identique à celui relevé avant le renommage sur `infogerance-pme`, non corrigé, juste transporté sous le nouveau nom de fichier.
- Point positif confirmé : la contradiction "92% / 95%" relevée dans le rapport pré-dégel a disparu (`grep "92%"` = 0 sur `infogerance-maintenance/index.html`).

`BreadcrumbList` : correcte structurellement sur les 6 pages (Accueil > Maintenance informatique > [sous-page]), mais **aucune ne réplique visuellement en HTML** (pas de fil d'Ariane visible) : cohérent avec l'état du reste du site (roadmap Sprint 6 générale, pas un défaut spécifique IT).

---

## 3. sitemap.xml

- 34 `<loc>` au total (cohérent avec le nombre de pages réelles du site).
- Les 6 URLs IT présentes aux nouveaux slugs, aucun ancien slug résiduel dans le fichier.
- `changefreq`/`priority` cohérents (hub 0.9, sous-pages 0.7, alignés sur le silo caisse).
- **Désynchronisation lastmod / date affichée sur 2 des 6 pages** (hub et `infogerance-maintenance`), cf. checklist. Les 4 autres sous-pages ont `lastmod` = date affichée (22/07/2026), cohérent.

---

## 4. llms.txt

Section "Pages maintenance informatique" (lignes 29-35) à jour : les 5 sous-pages sont listées avec les nouvelles URLs et des résumés reflétant le contenu réel (contrat à la carte, télémaintenance <20 min, intervention <4h, etc.). Aucun ancien slug résiduel. **FAIT.**

---

## 5. Renommage des slugs : redirections 301

**La prémisse de la commande ("anciens slugs supprimés sans redirection 301 dans .htaccess, constaté") est infirmée par l'inspection du fichier.**

`.htaccess` du worktree contient bien les redirections, en deux blocs :
```
# Migration slug /service-it-360/ → /maintenance-informatique/ (ancienne migration)
Redirect 301 /service-it-360/maintenance-depannage/ /maintenance-informatique/depannage-assistance/
Redirect 301 /service-it-360/cloud-securite/ /maintenance-informatique/cybersecurite-sauvegarde/
Redirect 301 /service-it-360/location-vente-installation/ /maintenance-informatique/materiel-reseaux/
Redirect 301 /service-it-360/outils-collaboratifs/ /maintenance-informatique/emails-pro-collaboration/
Redirect 301 /service-it-360/ /maintenance-informatique/

# 5bis. Migration slugs silo IT (22/07/2026)
Redirect 301 /maintenance-informatique/infogerance-pme/ /maintenance-informatique/infogerance-maintenance/
Redirect 301 /maintenance-informatique/location-vente-installation/ /maintenance-informatique/materiel-reseaux/
Redirect 301 /maintenance-informatique/maintenance-depannage/ /maintenance-informatique/depannage-assistance/
Redirect 301 /maintenance-informatique/cloud-securite/ /maintenance-informatique/cybersecurite-sauvegarde/
Redirect 301 /maintenance-informatique/outils-collaboratifs/ /maintenance-informatique/emails-pro-collaboration/
```
Les 5 anciens slugs du 22/07 sont couverts, chacun redirigé directement vers son nouveau slug (pas de chaîne de redirections).

**Vérification HTTP** : `https://dcb-technologies.fr/new/maintenance-informatique/infogerance-pme/` et `.../cloud-securite/` renvoient **404**, pas de 301. Ce n'est **pas une preuve que la règle est cassée** : les directives `.htaccess` ciblent des chemins racine (`/maintenance-informatique/...`) sans le préfixe `/new/`, alors que le staging sert actuellement depuis `/httpdocs/new/`. Un test à la racine du domaine (sans `/new/`) échoue aussi en 404, mais c'est attendu : la racine sert encore l'ancien WordPress (acquis connu, hors périmètre). **Il est donc impossible de vérifier en HTTP aujourd'hui que ces redirections fonctionneront** ; seule l'inspection statique du fichier permet de conclure.

**Ce qu'il faut vérifier au lancement (bascule racine) :** au moment où `/new/` disparaît et où le contenu de la branche `deploy` prend la racine, tester en direct les 2 anciens slugs `/maintenance-informatique/infogerance-pme/` et `/maintenance-informatique/location-vente-installation/` (et les 3 autres) pour confirmer le 301 réel. Comme les anciens slugs n'ont jamais été publics ni indexés (silo resté noindex depuis sa création), l'enjeu SEO est faible (pas de link equity ni de positions Google à préserver) ; l'enjeu réel est uniquement pour les liens éventuellement déjà partagés en interne (devis, emails clients) pointant vers l'ancien slug avant le lancement.

**Verdict : pas de bloquant sur ce point.** Le mécanisme est en place, seule sa vérification est différée au lancement.

---

## 6. Maillage

**Entrant (vers le silo IT) :**
- Homepage (`index.html`) : lien vers le hub via nouveau slug (`./maintenance-informatique/index.html`), JSON-LD `hasOfferCatalog` à jour (`@id` et `url` corrects). **FAIT.**
- `js/scripts.js` (footer + méga-menu desktop/mobile + sitemap footer) : **tous les liens vers les 5 sous-pages et le hub utilisent les nouveaux slugs**, aucun résidu de l'ancien nommage (`infogerance-pme`, `cloud-securite`, etc. absents). Vérifié sur les 6 zones du fichier (méga-menu desktop l.67-72, mobile l.102-107, couleurs l.144-148, nav l.177, footer sitemap l.243-247/456-461, mobile sheet l.594-597/1224-1227). **FAIT, propre.**
- Hub `visibilite-web/index.html` : cross-sell vers le hub IT présent (desktop `cx-card` l.776, mobile `peri-photo` l.1218), nouveau slug. **FAIT.**
- Hub `caisse-enregistreuse/` : **0 lien entrant vers le silo IT**, confirmé (grep vide). C'est un état préexistant déjà documenté (mémoire projet : "cross-sell IT=0"), pas une régression du dégel, mais toujours vrai après.

**Sortant (depuis le silo IT vers les autres piliers) :**
- `materiel-reseaux/` : cross-sell vers `caisse-enregistreuse/` (desktop + mobile). ✓
- `depannage-assistance/` : mention inline en texte de paragraphe vers `caisse-enregistreuse/` (pas de card dédiée). Faible mais présent.
- `infogerance-maintenance/`, `cybersecurite-sauvegarde/`, `emails-pro-collaboration/` : **0 cross-sell sortant**, ni vers la caisse ni vers `visibilite-web/`.
- **Aucune des 5 sous-pages IT ne pointe vers `visibilite-web/`** (0 occurrence sur les 5 fichiers).

Le standard silo caisse pose systématiquement 2 `cx-card` par sous-page (1 intra-silo, 1 inter-pilier). Le silo IT est à 2/5 sous-pages avec cross-sell sortant, aucune vers le pilier web. C'est cohérent avec le point roadmap `CLAUDE.md` "Cross-sell inter-piliers sur sous-pages IT et Web (Sprint 5)" déjà identifié comme non fait : pas une découverte nouvelle, mais un rappel que le dégel n'a pas avancé ce chantier.

**Fil d'Ariane visuel** : absent sur les 5 sous-pages (JSON-LD seul), cohérent avec le reste du site (Sprint 6, non spécifique IT).

---

## 7. Dates "Mis à jour le"

| Page | Desktop (`d-updated`) | Mobile (`m-updated`) | Cohérent avec sitemap ? |
|---|---|---|---|
| Hub | 23 avril 2026 | 23 avril 2026 | Non (sitemap 24/06) |
| `infogerance-maintenance` | 24 avril 2026 | 24 avril 2026 | Non (sitemap 22/07) |
| `depannage-assistance` | 22 juillet 2026 | 22 juillet 2026 | Oui |
| `cybersecurite-sauvegarde` | 22 juillet 2026 | 22 juillet 2026 | Oui |
| `emails-pro-collaboration` | 22 juillet 2026 | 22 juillet 2026 | Oui |
| `materiel-reseaux` | 22 juillet 2026 | 22 juillet 2026 | Oui |

Présentes sur les 6 pages, desktop + mobile, format cohérent (`<time datetime="YYYY-MM-DD">`). Mais **défaut d'encodage sur les 6 versions desktop** : `Mis a jour le` au lieu de `Mis à jour le` (accent grave perdu, byte `0x61` "a" nu, pas du mojibake, une vraie perte de caractère). Version mobile correcte partout ("Mis à jour le"). Exemple : `maintenance-informatique/index.html:1038` vs `:1755`. Ce point recoupe le périmètre QA mécanique (`it-01-qa.md`), signalé ici pour mémoire sans le noter dans la note SEO.

---

## 8. Image cassée détectée en cours d'audit (hors périmètre strict mais bloquante pour l'intégration)

`emails-pro-collaboration/index.html:190` et `:805` référencent `../../assets/hero-outils-collaboratifs.jpg`, **fichier absent de `assets/`**. Confirmé en live : `https://dcb-technologies.fr/new/assets/hero-outils-collaboratifs.jpg` → **404**. Dégradation propre via `onerror` vers `placeholder-photo.svg` (pas de icône cassée visible), mais l'image hero (desktop layered ET mobile, `fetchpriority="high"`) affiche un placeholder générique sur la page la plus stratégique du rename. À corriger avant lancement : fournir la vraie photo ou renommer une image existante équivalente.

---

## Bloquants pré-lancement

1. **OG/Twitter totalement absents sur les 6 pages IT + aucune image OG dédiée dans `assets/`.** Preuve : `grep -c "og:"` = 0 partout, `assets/og-maintenance*` inexistant. Partage social (LinkedIn, Facebook, WhatsApp) affichera une carte vide ou une image aléatoire pour tout le silo IT au lancement.
2. **LocalBusiness jamais inliné dans le `provider` du `Service` sur les 6 pages** (`{"@id":...}` nu). Écart avec le standard appliqué sur 16 pages du reste du site (commit `f390257`). Risque : moteurs de recherche et IA ne peuvent pas résoudre l'entité `LocalBusiness` sans stitching cross-document fiable.
3. **6/6 meta descriptions hors gabarit (179-201c au lieu de 140-160c)**, régression par rapport à l'état pré-dégel (4/6). Troncature Google systématique, perte de l'argument de clôture (devis gratuit, zone).
4. **Image hero cassée sur `emails-pro-collaboration/`** (`hero-outils-collaboratifs.jpg`, 404 confirmé en live), dégradée en placeholder générique.

## Améliorations post-lancement (non bloquantes)

- Resynchroniser `lastmod` du hub et de `infogerance-maintenance` dans `sitemap.xml` avec leur date "Mis à jour" réelle (ou bumper la date affichée puisque le contenu a changé le 22/07).
- Ajouter `Paray-le-Monial` à l'`areaServed` de `infogerance-maintenance` (seule sous-page à l'omettre).
- Ajouter un `@id` propre sur chaque `Service` (`.../#service`), à l'image du silo caisse.
- Raccourcir les 2 titles hors gabarit (`emails-pro-collaboration` 95c, `infogerance-maintenance` 78c).
- Ajouter au moins 1 cross-sell sortant (`cx-card`) par sous-page IT, incluant systématiquement une carte vers `visibilite-web/` (0 lien actuellement).
- Vérifier réellement les 5 redirections 301 en HTTP au moment de la bascule racine (post-lancement immédiat).
- Renommer à terme les assets images héritant des anciens slugs (`infogerance-pme-*.webp`, `cloud-securite-*.webp`, `maintenance-depannage-*.webp`) pour cohérence nom de fichier / URL (cosmétique, sans impact SEO direct).
- Corriger l'accent perdu "Mis a jour" → "Mis à jour" côté desktop sur les 6 pages (recoupe QA mécanique).

## Comparaison avec le rapport v1 (`01-seo-technique.md`, section 6 du RAPPORT-FINAL.md)

| Point | État avant dégel (ancien slug) | État après dégel (nouveau slug) | Delta |
|---|---|---|---|
| OG/Twitter | Absents (6 pages) | Absents (6 pages) | = (aucun progrès) |
| Sitemap : sous-page manquante | `infogerance-pme` absente (33/34 URLs) | Les 6 présentes aux nouveaux slugs | + (corrigé) |
| lastmod hub désynchronisé | Oui | Oui, + `infogerance-maintenance` désormais aussi désynchronisée | - (régression, 1 page de plus touchée) |
| `provider` non inliné | Oui (6 pages) | Oui (6 pages) | = |
| Titles hors gabarit | 3/6 (>65c) | 2/6 nettement hors gabarit (78c, 95c), les 4 autres dans une zone correcte | légère amélioration mais toujours 2 titres à corriger |
| Meta descriptions hors gabarit | 4/6 (166-182c) | 6/6 (179-201c) | - (régression, pire qu'avant) |
| Date figée hub 23/04 | Oui | Oui, inchangée | = |
| `infogerance-pme` sans Paray-le-Monial | Oui | Oui (`infogerance-maintenance`) | = (transporté tel quel) |
| Contradiction 92%/95% | Oui | Non, disparue | + (corrigé) |
| Zone Allier | N/A (pas encore introduite) | Résidu 0 après retour à 4 départements | + (conforme doctrine) |
| Redirections 301 anciens→nouveaux slugs | N/A | Présentes dans `.htaccess`, non vérifiables en HTTP avant bascule racine | + (nouveau, correctement anticipé) |

**Synthèse du delta** : le contenu et les schémas de fond ont progressé (zone correcte, contradiction chiffrée corrigée, redirections anticipées), mais **la checklist technique du dégel n'a pas été traitée** : OG/Twitter, LocalBusiness inliné et gabarit des meta descriptions restent au milieu du gué, voire régressent légèrement sur les descriptions. Le travail de Clément a porté sur le texte et la structure des schémas, pas sur les balises de partage social ni sur l'alignement JSON-LD avec le standard du reste du site.
