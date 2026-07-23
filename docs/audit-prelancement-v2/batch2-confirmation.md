# Mini-audit de confirmation, batch 2 (lecture seule)

Date : 23/07/2026. Repo verifie sur `main` (commit 923f0c4, "Batch 2 audit (arbitrages XIII)"), qui correspond au commit annonce comme pousse en deploy (dbce77a). Live teste sur https://dcb-technologies.fr/new/.

**Marqueur de fraicheur du live** : le title de `https://dcb-technologies.fr/new/visibilite-web/index.html` est bien "Presence en ligne PME : site et referencement | DCB Technologies" (og:title et twitter:title identiques) : **le live est a jour**, Pull/Deploy Plesk deja effectue.

| # | Point | Repo (main, 923f0c4) | Live (/new/) |
|---|---|---|---|
| 1 | Astreinte : plus de "en option" sur hub IT + infogerance-maintenance, FAQ urgences identique desktop/mobile/JSON-LD | OK. Zero occurrence de "en option" sur les 2 fichiers. Hub IT : 4 mentions "astreinte" (comparatif probleme/solution, dupliquees desktop+mobile), formulation identique des 2 cotes. Infogerance-maintenance : 3 mentions "astreinte" (JSON-LD FAQ + FAQ desktop + FAQ mobile), texte "Notre astreinte urgences critiques est disponible 24h/24 7j/7..." mot pour mot identique sur les 3 couches | OK. Meme compte exact en live (4 sur hub IT, 3 sur infogerance-maintenance), zero "en option", meme texte sur les 3 couches |
| 2 | Oxhoo restreint au bandeau partenaires homepage (grep casse-insensible) | OK. Homepage : 5 lignes matchees (bandeau desktop x2 dont 1 aria-hidden dup, liste SEO cachee `<li>`, bandeau mobile x2), toutes dans le bandeau partenaires. materiel-reseaux, borne-de-commande, llms.txt : zero occurrence | OK. Meme perimetre en live (6 occurrences du mot au total car une ligne desktop contient a la fois le nom de fichier et l'alt text = 2 matchs sur 1 ligne, coherent avec le comptage repo par ligne) ; zero sur materiel-reseaux, borne-de-commande, llms.txt |
| 3 | Title hub Web = title + og:title + twitter:title recentres "Presence en ligne PME" | OK. Les 3 balises identiques : "Presence en ligne PME : site et referencement \| DCB Technologies" | OK. Confirme via JS (document.title, meta og:title, meta twitter:title), les 3 identiques au repo |
| 4 | JSON-LD Product borne-de-commande : valide, Brand OXHOO absent, iMin/CashMag/Pedro Porto presents | OK. Bloc `"@type":"Product"` : `brand` = tableau `[iMin, CashMag, Pedro Porto]`, aucune trace OXHOO. Bloc Service voisin porte un `brand` distinct (CashMag seul), hors perimetre de la question | OK. `JSON.parse()` reussi sur le script Product en live, meme tableau de marques exact (iMin, CashMag, Pedro Porto), pas d'OXHOO |
| 5 | Pas de regression : HTTP 200, cache-bust uniforme, pas de mojibake | OK. Cache-bust identique sur les 5 pages : style.css?v=19, mobile.css?v=34, scripts.js?v=50 | OK. Les 5 pages + llms.txt chargent (title correct, pas de page d'erreur), zero "Ã©" detecte sur hub IT, infogerance-maintenance, homepage (bandeau oxhoo), materiel-reseaux et borne-de-commande |

## Remarque hors perimetre (non bloquante)

`llms.txt` (repo et live) contient sur la page depannage-assistance : "monitoring 24/7 en option selon les besoins". Ce n'est pas lie a l'astreinte (feature monitoring distincte) et depannage-assistance n'est pas une des pages du point 1 : ne bloque pas la confirmation du batch 2, mais a signaler si une regle "zero en option" plus large doit s'appliquer un jour.

## Verdict global

**Tous les points du batch 2 sont confirmes, en repo (main, 923f0c4) comme en live.** Le live est a jour (Pull/Deploy Plesk deja fait), aucune regression detectee (5 pages + llms.txt fonctionnels, cache-bust homogene, zero mojibake sur les zones editees).
