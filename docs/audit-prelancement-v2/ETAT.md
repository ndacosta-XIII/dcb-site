# AUDIT PRÉ-LANCEMENT V2 : MANIFESTE DE REPRISE

Lancé le 22/07/2026. Cible : version LIVE https://dcb-technologies.fr/new/ (branche deploy, synchro 394ad40 = main f390257). Le repo local reflète le live.

## Règle de reprise (si limite de tokens)
1. Lire ce fichier.
2. Un rapport `0X-*.md` présent et non vide = dimension TERMINÉE, ne pas relancer.
3. Relancer uniquement les dimensions sans rapport, par lots de 3.
4. Quand les 9 rapports existent : phase VÉRIFICATION ADVERSARIALE (10-verification.md), puis RAPPORT-FINAL.md.

## Lots
| # | Dimension | Agent | Modèle | Fichier | Statut |
|---|---|---|---|---|---|
| 1 | SEO technique | seo-expert | sonnet | 01-seo-technique.md | FAIT (82/100) |
| 1 | GEO AI | seo-expert | sonnet | 02-geo-ai.md | TERMINÉ 80/100 (0 bloquant, 3 majeurs post-lancement) |
| 1 | QA mécanique | site-qa | haiku | 03-qa-mecanique.md | TERMINÉ 92/100 (1 bloquant : BOM manquant merci/index.html) |
| 2 | GEO local + fiche Google | seo-expert | sonnet | 04-geo-local-gbp.md | TERMINÉ 74/100 (0 bloquant code, 1 bloquant hors code non re-vérifiable : ancrage GPS GBP) |
| 2 | Cannibalisation | seo-expert | sonnet | 05-cannibalisation.md | TERMINÉ 84/100 (0 bloquant, bloquant v1 hub Web résolu) |
| 2 | Cohérence claims + parité mobile | general-purpose | sonnet | 06-coherence.md | TERMINÉ 92/100 (0 bloquant, 2 majeurs : contact date desktop absente, restaurant argument mobile absent) |
| 3 | Marketing / message | marketing-strategist | opus | 07-marketing.md | TERMINÉ 83/100 (1 bloquant : commerce-de-detail technicien sur site 24h/24 ; frein de fond : preuve homepage caisse-first inchangé v1) |
| 3 | CRO | cro-expert | opus | 08-cro.md | À FAIRE |
| 3 | Design / a11y | design-reviewer | opus | 09-design.md | TERMINÉ 89/100 (0 bloquant dur, P1 a11y : flsp/flsp-mon sans garde reduced-motion sur borne+monnayeur) |
| V | Vérification adversariale | general-purpose | opus | 10-verification.md | TERMINÉ : 1 seul vrai bloquant (B2 commerce 24h/24). B1 BOM merci requalifié mineur (impact nul, meta charset présent). 9 majeurs confirmés + M9 titles ; M9 meta et M11 Oxhoo requalifiés ; contradiction C1 tranchée (améliorations rapport 03 périmées : OG/BlogPosting/breadcrumb déjà faits) |
| S | Synthèse | orchestrateur | : | RAPPORT-FINAL.md | TERMINÉ : note globale 85/100 (v1 76/100, delta +9). 1 seul bloquant restant (commerce-de-detail 24h/24). |

## AUDIT DÉGEL SILO IT (lancé le 23/07/2026)
Clément a livré la refonte du silo IT DIRECTEMENT sur la branche deploy (commits d6cb24b, 131c562, fd64274, 795fc36). Le main local ne la contient PAS.
**Source à auditer : le worktree** `C:\Users\Dacos\AppData\Local\Temp\claude\C--Users-Dacos-Downloads-dcb-site-clean\93bc607d-a97b-42c3-9224-485b14efdacc\scratchpad\deploy-it` (= origin/deploy = live https://dcb-technologies.fr/new/, vérifié par HTTP).
Nouveaux slugs : infogerance-maintenance, depannage-assistance, cybersecurite-sauvegarde, emails-pro-collaboration, materiel-reseaux (+ hub). Anciens slugs SUPPRIMÉS (infogerance-pme, maintenance-depannage, cloud-securite, outils-collaboratifs, location-vente-installation) : le live renvoie 404 dessus, aucune redirection constatée.
Faits des commits Clément à vérifier : « sur devis » généralisé (conforme doctrine), zéro prix, formulaire câblé send.php, aller-retour Allier (ajouté puis retiré : ZÉRO résidu 03 toléré, la zone reste 71/69/01/42).
Référence : la section « IT gelé » consolidée de RAPPORT-FINAL.md = checklist du dégel (sitemap, OG, LocalBusiness, llms.txt, dates, BOM, accents).

| Dimension IT | Agent | Modèle | Fichier | Statut |
|---|---|---|---|---|
| QA mécanique IT | site-qa | haiku | it-01-qa.md | TERMINÉ 72/100 (2 bloquants : BOM ×4 pages, assets ×3 images) |
| SEO technique + intégration IT | seo-expert | sonnet | it-02-seo.md | TERMINÉ 58/100 (4 bloquants : OG/Twitter absents 6 pages, LocalBusiness jamais inliné, 6/6 meta descriptions hors gabarit, image hero cassée emails-pro-collaboration) |
| Cannibalisation IT | seo-expert | sonnet | it-03-cannibalisation.md | TERMINÉ 71/100 (0 bloquant, 2 majeurs : title hub reprend mot pour mot dépannage+infogérance de ses 2 sous-pages, FAQ hub/infogerance-maintenance question identique ; chevauchement emails-pro-collaboration/hebergement sans lien croisé) |
| Cohérence + parité mobile IT | general-purpose | sonnet | it-04-coherence.md | TERMINÉ 68/100 (4 bloquants : astreinte "en option" IT vs "24h/24" homepage, infogerance-maintenance sans Paray-le-Monial dans areaServed (déjà signalé v1, non corrigé), FAQ mobile tronquée sur 4/6 pages, accent "Mis a jour" absent desktop sur 6/6 pages ; résidu Allier = 0 sur les 6 pages/2 shells/JSON-LD) |
| CRO + formulaires IT | cro-expert | opus | it-05-cro-formulaires.md | TERMINÉ 82/100 (0 bloquant : send.php unifié + live + tracking generate_lead intact, mécanisme identique à contact/caisse, pas deux backends ; 1 majeur A1 : asymétrie de friction, silo IT sans formulaire inline desktop ni bottom-sheet mobile (FAB rewired vers contact) vs caisse ; mineurs : ?offre= non lus par contact, CTA « audit gratuit » jamais sur le bouton, date infogerance périmée 24 avril) |
| Design / grammaire visuelle IT | design-reviewer | opus | it-06-design.md | TERMINÉ 90/100 (0 bloquant design ; accents des anciens slugs correctement migrés, 5 paires accent/accent-dark exactes, un accent dominant/page, CTA final v3 en variables sans couleur en dur, motion maison gardée reduced-motion ; post-lancement non IT : contraste blanc/ambre hérité du standard boulangerie) |
| Vérification adversariale IT | general-purpose | opus | it-07-verification.md | TERMINÉ : 6 confirmés, 0 réfuté, 4 requalifiés. 3 vrais bloquants (B2 heroes 404, B3 OG/Twitter absents, B8 FAQ mobile amputée 4 pages). B6 astreinte = arbitrage XIII (décision produit). B1 BOM requalifié mineur (meta charset OK, mojibake 0). B4/B5/B7/M1/M3 = majeurs. Contradiction 301 tranchée pour it-02 (règles dormantes sous /new/, actives à la bascule racine). 3 faux positifs internes isolés : it-01 prétend à tort LocalBusiness inliné sur le hub (faux), it-01 « 301 actives » surévalué, it-05 « aucun form sur les 5 sous-pages » inexact (emails-pro a un form desktop). |
| Synthèse IT | orchestrateur | : | RAPPORT-IT-DEGEL.md | TERMINÉ : note globale silo IT 74/100 (moyenne des 6 dimensions). 3 bloquants (B2 heroes 404, B3 OG/Twitter, B8 FAQ mobile amputée), 1 arbitrage XIII (B6 astreinte), 5 majeurs (B4/B5/B7/M1/M3), 6 mineurs. Écart de 11 points vs le reste du site (85/100). |

## Corrections : état des batchs (23/07/2026)
- Batch 0 (rapatriement deploy→main) : FAIT (369919c). Batch 1 (4 bloquants + 3 formulaires IT inertes câblés) : FAIT (c514d98, 0391ecd), déployé (c2ae4cc), confirmé live 7/7 (batch1-confirmation.md). Batch 2 (arbitrages : astreinte sans « en option », Oxhoo bandeau seul, title hub Web) : FAIT (923f0c4), deploy dbce77a.
- Arbitrages XIII rendus : astreinte = argument commercial sans précision contractuelle ; Oxhoo uniquement bandeau partenaires homepage ; title hub Web validé via reco SEO.
- AJOUTS XIII 23/07 : (a) CTA « Demander un devis » sur pages IT illogique (pas de prix) → reformuler, batch 4 ; (b) heroes IT placeholder (cybersécu, emails-pro, matériel) à remplacer dès réception photos XIII, noms de fichiers figés ; (c) batch de test dédié de TOUS les formulaires IT (structurel + envois réels coordonnés avec XIII) ; (d) batch 4.7 : UNIFORMISER les formulaires IT (aucun n'est pareil), sur le standard du silo caisse (mêmes champs/ordre/style/microcopy), imbriqué avec 4.5 (forms manquants hub+infogérance) et 4.6 (CTA).
- Batch 3 : FAIT (9cb8382), deploy a193654. Marques : règle finale = visibles uniquement bandeau partenaires ; JSON-LD/llms.txt = liste fournisseurs factuelle autorisée.

## Acquis : INTERDIT de re-flaguer (faux positifs connus / décisions XIII)
- « Matériel en stock » : formulation de XIII, validée, dé-bannie du référentiel.
- Réutilisation des 7 avis clients sur plusieurs pages : assumée (base clients jeune).
- Pixel Meta + GA4 : câblés via GTM-MXK7RX9P (vérifié dans le gtm.js publié). Un grep du repo ne les voit PAS, c'est normal.
- Cache-bust css/js : compteurs INDÉPENDANTS par fichier. Seule l'uniformité inter-pages d'un même fichier compte.
- Branche deploy : orpheline, le comptage de commits vs main ne veut rien dire.
- noindex X-Robots-Tag sur /new : INTENTIONNEL (staging), retiré à la bascule racine. Pas un constat.
- Canonicals/sitemap pointant dcb-technologies.fr racine (sans /new) : intentionnel (domaine cible).
- Jamais d'aggregateRating/Review schema (self-serving, pénalisé). Jamais de plan/kit d'avis GBP (XIII gère, 80% des clients en laissent).
- Dardilly (siège social) + Paray-le-Monial (base technique) : deux adresses réelles, ne pas « corriger ».
- NF525 : plus obligatoire depuis fév. 2026 (certificat OU attestation). Le site est aligné, ne pas réécrire « obligatoire ».
- SAV : « Sur site sous 4h 7j/7, astreinte 24h/24 » = formulation corrigée validée.
- SILO IT (maintenance-informatique/) : GELÉ, placeholder en attente Clément. L'auditer mais sortir TOUS ses constats dans une section séparée « IT gelé », jamais en bloquant actionnable.

## Format de rapport imposé (chaque dimension)
- Note /100 + justification.
- BLOQUANTS pré-lancement : constat, preuve (URL/fichier:ligne), correction proposée.
- Améliorations post-lancement.
- Section « IT gelé » séparée si concerné.
- Comparaison avec le rapport v1 correspondant dans docs/audit-prelancement/ (délta).
- Français, ZÉRO tiret cadratin (—).
