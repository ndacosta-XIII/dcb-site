# Audit pré-lancement DCB : manifeste d'état

Créé le 21/07/2026. Orchestrateur : session Claude Code (Fable 5).
Périmètre validé par XIII : **site entier /new/** (silos Caisse + IT + Web, homepage, pages département, contact, ADN, blog, légales) + **données réelles** (GSC, GA4, Google Ads, fiche GBP).
Version auditée : live `https://dcb-technologies.fr/new/` (branche `deploy`) + repo local comme source.

## Règle de reprise (si session coupée par limite de tokens)

1. Lire ce fichier.
2. Lister les fichiers présents dans `docs/audit-prelancement/`.
3. Un fichier de rapport présent = dimension ACQUISE, ne jamais relancer.
4. Relancer uniquement les agents des fichiers manquants, batch par batch, dans l'ordre ci-dessous.
5. La phase Vérification ne démarre que quand tous les rapports 00 à 08 existent. La Synthèse quand 09 existe.

## Contexte à redonner aux agents en cas de relance

- Le live /new/ porte un header `X-Robots-Tag: noindex` VOLONTAIRE (staging, retiré au lancement racine) : ne pas le compter comme bloquant, juste vérifier qu'il est bien là partout.
- Canoniques/sitemap pointent vers `dcb-technologies.fr` racine (domaine cible, pas encore déployé à la racine) : attendu, pas un bug.
- WordPress encore à la racine du domaine : hors périmètre.
- Interdits dans les rapports : em dash, claims invérifiés. Chaque constat = preuve (fichier:ligne ou URL).
- Bloquants connus de l'audit de juillet (à re-vérifier, pas à recopier) : newsletter fantôme, résidu IA blog, image 404, avis GBP multi-départements, parité mobile amputée, grille tarifaire IT factice, formulaire non branché.

## Décision d'orchestration (21/07, corrigée après redéploiement)

Le "retard de 232 commits" de deploy signalé par 00-inventaire est un ARTEFACT : la branche deploy a un historique séparé fait de commits de sync (SHA différents de main), le comptage git ne mesure pas un retard de contenu. XIII a redéployé le 21/07 (~14h40 GMT, vérifié : Last-Modified du jour + contenu cohérence #2 présent en live + noindex intact). Le bloquant "live obsolète" de 00-inventaire est NEUTRALISÉ, à écarter en phase de vérification. Les agents de contenu auditent le repo main (identique au live désormais).

## Batches et livrables

| # | Fichier livrable | Dimension | Agent | Modèle | Statut |
|---|---|---|---|---|---|
| B1 | `00-inventaire-live.md` | Crawl live : statuts HTTP, noindex, 404 assets, poids, parité repo/deploy | general-purpose | haiku | FAIT (32/100 : deploy en retard de 232 commits sur main, live obsolète ; 33 pages en 200, noindex OK, assets OK) |
| B1 | `01-qa-mecanique.md` | Em dash, cache-bust, liens internes, JSON-LD, parité dual-shell | site-qa | haiku | FAIT (60/100, bloquant cache-bust À CONTRE-VÉRIFIER : v=18 css vs v=49 js est peut-être normal, compteurs indépendants par fichier) |
| B1 | `02-coherence.md` | Claims vs valeurs canoniques, chiffres, parité desktop/mobile (fond) | general-purpose | sonnet | FAIT (80/100 : 3 bloquants : "la majorité" vs 95% hub caisse + commerce, coiffure sans Dardilly, témoignage Malfroy dupliqué homepage+hub IT) |
| B2 | `03-seo-technique.md` | SEO technique + on-page (meta, Hn, canoniques, sitemap, maillage) | seo-expert | sonnet | FAIT (75/100 : 2 bloquants : infogerance-pme absente du sitemap, OG/Twitter absents sur les 6 pages du silo IT ; majeurs : og-image générique x24, titles/metas hors gabarit) |
| B2 | `04-geo-ai.md` | GEO AI search (llms.txt, citabilité, schema, AI Overviews) | seo-expert | sonnet | FAIT (66/100 : 2 bloquants : llms.txt omet ~40% du site dont blog+dept, dates E-E-A-T et lastmod sitemap fausses sur ~30 pages ; entité fragmentée en majeur) |
| B2 | `05-seo-local-gbp.md` | SEO local 71/69/01/42 + audit fiche Google Business Profile | seo-expert | sonnet | FAIT (60/100 : 2 bloquants : pin GPS GBP à ~20km de la vraie adresse, provider LocalBusiness en @id non résolvable sur 19/23 pages ; NAP 100% cohérent, pages dept conformes) |
| B3 | `06-cannibalisation.md` | Cannibalisation via données GSC réelles (hub vs dept vs blog) | seo-expert | sonnet | FAIT (63/100 : 1 bloquant : hub Web duplique verbatim title/H1/FAQPage de ses 2 enfants ; hub caisse validé neutre par données GSC, blog propre) |
| B3 | `07-tracking-ads.md` | Tracking GA4/Ads, keyEvents, readiness SEA des landers | ads-auditor | sonnet | FAIT (51/100 : 4 bloquants config : GA4 zéro Key Event actif, 4 conversion actions Ads liées à des events inexistants, zéro conversion clic-to-call, pixel Meta absent du V2 ; le CODE est devenu sain : send.php OK, dataLayer, Consent Mode v2, GTM 35/35) |
| B4 | `08a-cro.md` | Conversion : parcours, formulaires, ordre sections | cro-expert | opus | FAIT (78/100 : bloquant = grille IT factice (connu) ; majeurs : tel muet sur héros mobiles caisse+seo-sea-local, numéro nav caché sous 1280px ; architecture conversion saine, /merci exemplaire) |
| B4 | `08b-marketing.md` | Positionnement, messages, offre, différenciation | marketing-strategist | opus | FAIT (69/100 : 2 bloquants copy : "Matériel en stock" hero caisse, "SAV 4h 7j/7 24h/24" intenable ; homepage caisse-first vs priorité IT/Web en majeur ; positionnement et ton sains) |
| B5 | `09a-verification-code.md` | Contre-vérification adversariale des bloquants code/repo | general-purpose | sonnet | FAIT (13 vérifiés : 10 CONFIRMÉS, 2 NUANCÉS (hub Web pas verbatim mais collision réelle ; SAV fusionné sur index seulement, pas hub caisse), 1 INFIRMÉ (cache-bust = faux positif, compteurs indépendants uniformes 35/35)) |
| B5 | `09b-verification-comptes.md` | Contre-vérification adversariale des bloquants comptes/données | general-purpose | sonnet | FAIT (4/4 CONFIRMÉS : GA4 zéro Key Event (events phone_call_click et generate_lead arrivent mais non marqués), 4 conversions Ads mortes, campagnes toutes PAUSED, pixel Meta V1 only, pin GBP à 19,8 km ; nuance : 2 conversions AD_CALL le 14/01) |
| B6 | `RAPPORT-FINAL.md` | Synthèse : note /100 par dimension, bloquants hiérarchisés, plan d'action | general-purpose | opus | FAIT (note globale 76/100, 12 bloquants pré-lancement, 6 actions config comptes, sain consolidé) |

## AUDIT TERMINÉ le 21/07/2026. Ce manifeste est archivé, la vérité est dans RAPPORT-FINAL.md.

## Format imposé à chaque rapport de dimension

1. En-tête : dimension, date, agent, périmètre couvert.
2. **Note /100** avec barème explicite (ce qui coûte des points).
3. Bloquants lancement (préfixe `[BLOQUANT]`), chacun avec preuve.
4. Points majeurs / mineurs.
5. Ce qui est SAIN (pour éviter les re-audits inutiles).
6. Zéro em dash, zéro recommandation sans preuve.
