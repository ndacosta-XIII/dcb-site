# 10 · Vérification adversariale (tueur de faux positifs)

**Date :** 22/07/2026
**Rôle :** sceptique. Chaque constat candidat des rapports 01 à 09 a été attaqué sur pièces (repo local miroir du live `dcb-technologies.fr/new/`, octets réels, hashes, comptage script). Verdict : CONFIRMÉ / RÉFUTÉ / REQUALIFIÉ.
**Cadrage :** acquis ETAT.md respectés (tout constat contredisant un acquis serait un faux positif automatique ; aucun rencontré ici).

---

## Tableau des verdicts

| # | Constat | Verdict | Preuve | Sévérité finale |
|---|---|---|---|---|
| B1 | `merci/index.html` sans BOM UTF-8 | **REQUALIFIÉ** | 3 premiers octets = `3C 21 44` (`<!D`), pas `EF BB BF`. Mais `<meta charset="utf-8">` présent (L?), zéro mojibake (`é` stocké en `C3 A9`, 6 occ.), toutes les autres pages prod ont le BOM. | **Mineur** (fait vrai, impact réel nul grâce au meta charset ; corriger par cohérence, fix trivial = préfixer le BOM). Le libellé "bloquant" du rapport 03 surévalue : aucun rendu cassé possible. |
| B2 | commerce-de-detail : "technicien sur site en moins de 4h" + "disponible 7j/7 24h/24" = promesse intenable | **CONFIRMÉ** | Desktop L304 et mobile L727 accolent tous deux "Votre technicien attitré, [...] disponible 7j/7 24h/24" au titre "Technicien sur site en moins de 4h". La formule canonique homepage (L473, L1038) sépare bien : "Sur site sous 4h 7j/7, astreinte 24h/24". Ici le 24h/24 qualifie le technicien sur site. Vraie fusion trompeuse, pas la formule validée. | **Bloquant** (page de conversion, 2 shells, 1 page). |
| M1 | Title hub web dupliquant la tête du title de creation-site-internet | **CONFIRMÉ** | Hub : `Création de site internet et SEO local`. Enfant : `Création Site Internet Professionnel PME`. Tête commune "Création [de] site internet". Les 2 autres hubs (caisse, IT) ne reprennent aucun title d'enfant. | Majeur (proximité title, non bloquant). |
| M2 | JSON-LD contact/ et notre-adn/ divergent sur `addressRegion` / cardinalité, même `@id` | **CONFIRMÉ** | Même `@id` `#localbusiness` : homepage (L284-291) = objet unique, `addressRegion "Auvergne-Rhône-Alpes"`, avec `geo`, avec `streetAddress`. contact/ (L444-459) = tableau de 2 adresses, régions "Rhône"/"Saône-et-Loire", sans `geo`, sans `streetAddress`. notre-adn/ (L44-71) = encore un `@id` distinct (`.../notre-adn/#organization`), même tableau. Trois représentations contradictoires. | Majeur (cohérence d'entité, non bloquant). Recoupe M12. |
| M3 | contact/ : date "Mis à jour" + bloc NAP en `.m-shell` (L714-715) mais absents du `.d-shell` | **CONFIRMÉ** | `.d-shell` = L498-625. Les deux seules occurrences (NAP L714, "Mis à jour" L715) sont dans le `.m-shell` (débute L626). Zéro date/NAP côté desktop. Parité inversée (desktop amputé). | Majeur (défaut de parité E-E-A-T, fix texte-only). |
| M4 | restaurant/ : différenciateur "addition contestée / traçabilité horodatée" desktop seul | **CONFIRMÉ** | L291-292 (desktop, avant `.m-shell` L570). Grep "horodat\|Addition contest\|traçabilit\|litige" ne retourne que ces 2 lignes. Argument unique du site invisible au crawl mobile-first. | Majeur (fond amputé mobile, pas densité). |
| M5 | Badges flsp/flsp-mon sans garde `prefers-reduced-motion` sur borne + monnayeur | **CONFIRMÉ** | borne L33 et monnayeur L33 : le bloc `@media (prefers-reduced-motion: reduce)` ne couvre que `.hero-blob-a, .hero-blob-b`. `flsp` (borne L59-60) / `flsp-mon` (monnayeur L58-60) = oscillation `translateY` infinie, non coupée. | Mineur a11y (fix = ajouter `.flsp,.flsp-mon{animation:none!important}` au bloc existant). |
| M6 | Héros mobiles : téléphone réduit à une icône sans numéro visible | **CONFIRMÉ** | boulangerie L571, restaurant L616, rhone L716, seo-sea-local L461, hub web L942 = `btn btn-icon` icône `call` seule, `aria-label` présent mais aucun libellé/numéro visible. Contraste : homepage mobile L976 = bouton plein "Appeler le 04 82 53 05 10". L'instance hub IT L918 existe aussi mais tombe en IT gelé. | Majeur (canal prioritaire muet au moment le plus chaud, 80% trafic mobile). |
| M7 | Nav desktop : numéro tel `hidden xl:flex` (≥1280px), aucun équivalent 641-1279px | **CONFIRMÉ** | scripts.js L197 = `hidden xl:flex`. FAB `#dcb-phone-fab` : `display:none` par défaut, `display:flex` seulement `@media(max-width:640px)` (L284/L291). Entre 641 et 1279px : ni numéro nav, ni FAB. | Majeur (trou de disponibilité du CTA roi sur laptops). |
| M8 | Homepage : garanties + bandeau logos 100% caisse vs priorité V2 = IT/Web | **CONFIRMÉ** | Bloc "Trois garanties vérifiables" (L523-615) = NF525, CashMag, fondateurs (zéro IT/web). Bandeau (L626-644) = CashMag, NF525, Hair-Net, Oxhoo, AURES, iMin, Lenovo, Pedro Porto, Yavin : 8 caisse/paiement, 1 IT (Lenovo), 0 web. | Majeur stratégique (frein de fond inchangé v1, non bloquant technique). |
| M9 | 12 titles >65c et 15 meta descriptions hors gabarit 140-160 | **CONFIRMÉ (titles) / REQUALIFIÉ (meta)** | Script : titles >65c = 12 exactement (9 hors IT + 3 IT), liste identique au rapport 01. Meta hors 140-160 = 20 réelles (16 hors IT), pas 15 : le rapport n'a compté que les >160 (11 hors IT + 4 IT = 15, exact sur ce sous-ensemble) et a manqué 5 pages <140 (blog 110, cgv 107, confidentialite 95, mentions-legales 88, merci 85). Ces 5 sont des descriptions courtes légitimes (légal/merci sobres). | Majeur SEO finition. L'actionnable réel = ~11 pages hors IT trop longues (>160). Les 5 courtes ne sont pas un défaut. |
| M10 | 4 groupes d'images OG doublons binaires malgré URLs uniques | **CONFIRMÉ** | md5 sur `assets/og-*.jpg` : 4 groupes exactement. `f866491e` = 6 fichiers (ain, caisse-enregistreuse, commerce-de-detail, loire, rhone, saone-et-loire). `6fec9c6c` = 3 (boulangerie, cashmag, coiffure). `e4c38e1e` = 2 (blog, blog-norme-nf525). `96bf8705` = 2 (contact, notre-adn). | Majeur (URLs uniques OK, visuel identique au partage ; à finir avec les photos réelles, déjà tracé). |
| M11 | "Oxhoo" casse incohérente homepage + "Mis a jour" sans accent 6 pages IT | **REQUALIFIÉ (Oxhoo) / CONFIRMÉ (Mis a jour)** | Oxhoo : le rapport 06 dit homepage = anomalie vs "7 occ. OXHOO ailleurs". FAUX : site entier = 78 "Oxhoo" vs 8 "OXHOO". "OXHOO" majuscule n'existe que dans borne-de-commande (1) et location-vente-installation IT (7). "Oxhoo" est la forme DOMINANTE. Canonique CLAUDE.md = "OXHOO". Le vrai correctif est une décision de casse site-wide (78 éditions), pas un patch 2 lignes homepage. "Mis a jour" sans accent : CONFIRMÉ, desktop des 6 pages IT (ex. hub IT L846 vs mobile L1523 correct). | Oxhoo = **Mineur** cosmétique (direction du rapport réfutée). "Mis a jour" = mineur **IT gelé**. |
| M12 | GEO AI : Organization fragmentée notre-adn/blog, FAQPage absente contact/notre-adn/hub blog, pas de WebSite+SearchAction | **CONFIRMÉ** | notre-adn : `Organization` avec `@id` propre `.../notre-adn/#organization` non lié au canonique ; 2 `Person` (L74/L80) sans `@id` alors que homepage déclare `#nathanael`/`#clement`. Article NF525 L236 : `author` Person + `worksFor` Organization sans aucun `@id` (3e nœud anonyme). FAQPage = 0 sur contact, notre-adn, blog hub. `SearchAction`/`potentialAction` = absent de tout le site (`#website` existe L339 sans `potentialAction`). | Majeur post-lancement (fix mécanique, faible risque). |

---

## Contradiction inter-rapports tranchée

**C1 : rapport 03 (QA) vs rapports 01/02 sur les Open Graph, BlogPosting, BreadcrumbList.**
Le rapport 03 liste en "Améliorations post-lancement" : #2 "Ajouter Open Graph images sur 4 pages (blog x2, contact, notre-adn)", #3 "Schema BlogPosting sur article blog", #4 "Fil d'Ariane + BreadcrumbList JSON-LD sous-pages". Ces trois items sont **déjà faits**, vérifié sur pièces :
- OG : `contact/index.html` référence `og-contact.jpg`, `notre-adn/` `og-notre-adn.jpg`, `blog/` `og-blog.jpg`, article NF525 `og-blog-norme-nf525...jpg` (fichiers existants, hashés en M10).
- BlogPosting : présent sur l'article NF525 (1 occurrence).
- BreadcrumbList : présent sur boulangerie, creation-site-internet, article NF525 (échantillon, 1 chacun).

**Tranché en faveur de 01/02.** La section "améliorations" du rapport 03 est un copié périmé de l'ancienne roadmap CLAUDE.md, pas un constat de l'état réel. Les 7 passes de vérification du rapport 03 (em dash, BOM, cache-bust, liens, JSON-LD, dual-shell, Tailwind) restent valides ; seule sa liste d'améliorations est obsolète et ne doit pas alimenter la synthèse.

---

## Synthèse des sévérités après vérification

- **Bloquant pré-lancement réel : 1** (B2, commerce-de-detail 24h/24 sur technicien sur site, 2 shells).
- **Bloquant réfuté / requalifié : 1** (B1 merci BOM : fait vrai mais impact nul, requalifié mineur ; à corriger par cohérence, jamais un vrai blocage fonctionnel).
- **Majeurs confirmés : 9** (M1, M2, M3, M4, M6, M7, M8, M10, M12) + M9 volet titles.
- **Mineurs confirmés : 2** (M5 a11y ; Oxhoo requalifié).
- **IT gelé : 1** ("Mis a jour" sans accent, M11 volet).
- **Requalifications de fond : 3** (B1 sévérité, M9 meta count/framing, M11 direction Oxhoo).
- **Contradiction tranchée : 1** (C1, liste améliorations rapport 03 périmée).

Aucun constat entièrement RÉFUTÉ (tous reposent sur un fait vrai). Les requalifications portent sur la sévérité (B1) ou la caractérisation (M9 meta, M11 Oxhoo), pas sur l'existence du fait.
