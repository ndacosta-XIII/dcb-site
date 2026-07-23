# Mini-audit de confirmation, batch 1 (lecture seule)

Date : 23/07/2026. Repo verifie sur `origin/deploy` (= commit c2ae4cc, tip reel pousse sur GitHub). Live teste sur https://dcb-technologies.fr/new/.

**Note technique** : la branche locale `deploy` de ce poste contient un commit local non pousse (`394ad40`, en avance sur `origin/deploy`) qui n'a rien a voir avec le batch 1 (sync d'un ancien lot audit lot 1). Tous les tests ci-dessous portent sur `origin/deploy` (c2ae4cc), la version reellement sur GitHub et donc potentiellement deployee par Plesk.

**Marqueur de fraicheur du live** : `og:` present sur `maintenance-informatique/index.html` en live (7 balises `og:`, `og:image` = og-maintenance-informatique.jpg, HTTP 200) : **le live est a jour**, Pull/Deploy Plesk deja effectue.

| # | Point | Repo (origin/deploy) | Live (/new/) |
|---|---|---|---|
| 1 | commerce-de-detail : plus d'amalgame "technicien sur site" + "24h/24", formule scindee (les 2 shells) | OK. Diff confirme : "sur site 7j/7. Astreinte telephonique 24h/24" (desktop) et "sur site 7j/7. Astreinte 24h/24" (mobile), aucune occurrence residuelle de l'ancien amalgame | OK. Memes formulations retrouvees sur les 2 shells, aucun amalgame residuel |
| 2 | 6 pages IT : 7 og: + 4 twitter: chacune, og:image dediee HTTP 200 | OK. Les 6 pages (hub + cybersecurite-sauvegarde, depannage-assistance, emails-pro-collaboration, infogerance-maintenance, materiel-reseaux) ont exactement 7 og: et 4 twitter:, chacune avec og:image propre | OK. Memes comptes sur les 6 pages en live, 6 og:image (og-maintenance-informatique, og-cybersecurite-sauvegarde, og-depannage-assistance, og-emails-pro-collaboration, og-infogerance-maintenance, og-materiel-reseaux) toutes HTTP 200 |
| 3 | Parite FAQ mobile = desktop = JSON-LD : infogerance-maintenance (7), depannage-assistance (8), cybersecurite-sauvegarde (6), materiel-reseaux (6) | OK. Comptage exact sur les 3 couches (m-shell / d-shell / JSON-LD mainEntity) pour les 4 pages : 7/7/7, 8/8/8, 6/6/6, 6/6/6 | OK. Memes comptes verifies en live sur les 4 pages (summary total = 2x le compte attendu, JSON-LD Question = compte attendu) |
| 4 | Heroes hero-cybersecurite-sauvegarde.jpg, hero-outils-collaboratifs.jpg, hero-location-it.jpg | OK. Presents dans l'arbre origin/deploy | OK. Les 3 fichiers HTTP 200 en live |
| 5 | Assets ex-404 : dept-71.webp, testimonial-ml.webp, nf525.webp, cashmag-demo.mp4 | OK. Presents dans l'arbre origin/deploy | OK. Les 4 fichiers HTTP 200 en live |
| 6 | Formulaires depannage-assistance, cybersecurite-sauvegarde, materiel-reseaux : `<form action="../../send.php" method="post">` complet | OK. Les 3 formulaires ont action/method corrects, honeypot (hp_website), hidden source + page, champs prenom/email/telephone/formule, bouton submit. Aucun POST reel effectue (verification structurelle uniquement) | OK. Memes 3 formulaires retrouves en live avec honeypot et structure identique |
| 7 | Rien de casse : HTTP 200 des 6 pages IT + commerce-de-detail, cache-bust uniforme | OK. cache-bust uniforme style.css?v=19 / scripts.js?v=50 sur les 7 pages dans le repo | OK. Les 7 pages HTTP 200 en live, meme cache-bust v19/v50 sur toutes |

## Verdict global

**Tous les points du batch 1 sont confirmes, en repo (origin/deploy = c2ae4cc) comme en live.** Le live est a jour (Pull/Deploy Plesk deja fait), aucune regression detectee (7 pages testees en HTTP 200, cache-bust homogene, zero tiret cadratin sur les fichiers modifies). Seule remarque non bloquante : la branche locale `deploy` de ce poste a un commit non pousse (394ad40, hors perimetre batch 1) a synchroniser ou ignorer selon le besoin.
