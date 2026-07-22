# 08a. Audit pré-lancement : CONVERSION (CRO)

- **Dimension** : Conversion / CRO (hiérarchie CTA, ordre des sections, formulaires, frictions, réassurance, cohérence message-page SEA)
- **Date** : 21/07/2026
- **Agent** : cro-expert
- **Périmètre audité** : homepage (desktop + mobile), hub caisse + sous-pages métier (boulangerie, restaurant), 4 landers département (rhone, ain, loire, saone-et-loire), seo-sea-local, contact, page de confirmation /merci, silo IT (maintenance-depannage pour la grille tarifaire), frame partagée (scripts.js nav + FAB + bottom-sheet, mobile.js). Analyse statique du code, desktop `.d-shell` et mobile `.m-shell`.
- **Objectif de conversion** : appel téléphonique (04 82 53 05 10) prioritaire, formulaire/bottom-sheet secondaire. Trafic majoritairement mobile.

---

## NOTE : 78 / 100

### Barème
| Critère | Poids | Score | Justification courte |
|---|---|---|---|
| Hiérarchie CTA et dominance de l'appel | 30 | 21 | Homepage exemplaire (appel = bouton primaire). Mais tout le silo caisse mobile rétrograde le tel en icône seule ; numéro nav caché sous 1280px. |
| Ordre des sections (preuve avant demande) | 20 | 18 | Trust bar post-hero, témoignages et NF525 avant le CTA final sur toutes les pages critiques. |
| Formulaires et friction | 20 | 18 | Champs minimaux, honeypot, confirmation /merci excellente, tracking source/page/métier. |
| Réassurance authentique (zéro factice) | 15 | 7 | Témoignages = vrais avis Google nommés (SAIN). Mais grille tarifaire IT factice (89€/149€) toujours live. |
| Cohérence message-page pour clic SEA | 15 | 14 | H1 localisés ville par ville sur les 4 départements + seo-sea-local. FAQ localisées. |

**Verdict** : publiable côté conversion APRÈS levée du bloquant tarif IT (déjà connu et attribué à Clément). L'architecture de conversion est saine : appel bien positionné, preuve avant demande, formulaires courts, confirmation soignée. Le principal levier d'optimisation propre au CRO est la rétrogradation systématique du téléphone en icône muette sur les héros mobiles du silo caisse, en tension directe avec la doctrine "l'appel est le CTA roi".

---

## [BLOQUANT]

### B1. Grille tarifaire IT factice toujours en ligne (connu, à confirmer levé avant prod)
- **Preuve** : `maintenance-informatique/maintenance-depannage/index.html` L376 `89€/mois`, L392 `149€/mois` (desktop), L814 et L830 (mobile), et injectés en options de formulaire L441 `Starter · 89€/mois (jusqu'à 5 postes)`, L442 `Business · 149€/mois (jusqu'à 15 postes)`.
- **Impact conversion** : des montants précis mais faux engagent un prix dans l'esprit du prospect et dans le lead (l'option choisie part dans le POST). Écart à la découverte du vrai tarif = perte de confiance sur la différenciation "transparence". Blocage connu (grille réelle attendue de Clément) : cet audit confirme seulement que l'état est inchangé, il ne le redécouvre pas.
- **Action** : remplacer par la grille réelle OU basculer en "sur devis après audit gratuit" (la FAQ le dit déjà L625, cohérent) avant mise en ligne racine.

---

## MAJEURS

### M1. Héros mobiles du silo caisse : le téléphone est rétrogradé en icône sans numéro
- **Preuve** : pattern systémique. `caisse-enregistreuse/boulangerie/index.html` L556 bouton primaire pleine largeur `data-sheet` "Demander un devis", L557 téléphone en `btn btn-icon` (icône `call` seule, aucun numéro visible). Identique sur `caisse-enregistreuse/rhone/index.html` L701 et L702, et sur le lander `visibilite-web/seo-sea-local/index.html` L446 et L447.
- **Contraste** : la homepage fait l'inverse et bien (`index.html` L976 mobile : "Appeler le 04 82 53 05 10" = bouton orange primaire, devis secondaire).
- **Impact** : sur 80% de trafic mobile et des landers SEA à forte intention, le moment le plus chaud (au-dessus de la ligne de flottaison) pousse le formulaire et masque le numéro. En tension avec la règle "le téléphone convertit mieux en B2B local". Le FAB et le CTA final portent bien l'appel, mais pas le héros.
- **Reco** : donner à l'appel une présence libellée co-primaire dans le héros mobile des landers (bouton "Appeler" visible avec numéro ou libellé, à parité visuelle avec le devis), plutôt qu'une pastille icône. Levier : réduction de la friction cognitive (le canal le plus rassurant doit être nommé, pas deviné).

### M2. Numéro de téléphone absent de la nav sur laptop (1024 à 1279px) et pas de FAB tel desktop
- **Preuve** : `js/scripts.js` L197 le numéro nav est en `hidden xl:flex` (n'apparaît qu'à partir de 1280px). Le FAB téléphone `#dcb-phone-fab` est en `display:none` sauf `@media(max-width:640px)` (L284 et L291). Résultat : entre 1024 et 1279px, seul le bouton "Demander un devis" subsiste dans la nav, et aucun rappel d'appel persistant pendant le scroll.
- **Impact** : une part des écrans desktop/laptop perd le canal prioritaire hors héros et CTA final.
- **Reco** : afficher le numéro nav dès `lg` (1024px) au lieu de `xl`. Effort faible, un seul point dans la source partagée. Levier : disponibilité constante du CTA roi.

---

## MINEURS

- **m1. Homepage et landers desktop, CTA secondaire "Demander un devis" pointe vers /contact** (`index.html` L454, `caisse-enregistreuse/rhone/index.html` L162). C'est un changement de page plutôt qu'une action légère. Acceptable, l'appel primaire est bien placé ; à surveiller si le taux de rebond /contact monte.
- **m2. seo-sea-local, héros : appel en bouton secondaire bordé** (`visibilite-web/seo-sea-local/index.html` L129, primaire = "Auditer mon référencement" L128). Défendable pour un lead web (audit), mais pour un clic SEA local l'appel gagnerait à être co-primaire.
- **m3. Bottom-sheet, sous-titre "Réponse d'un technicien sous 2h ouvrées"** (`js/scripts.js` L501) vs page /merci "sous 2h ouvrées" : cohérent, bon. Vérifier que send.php respecte réellement la promesse (hors périmètre CRO).

---

## Ce qui est SAIN (à ne pas casser)

- **Homepage phone-first** : héros desktop (`index.html` L453) et mobile (L976) placent "Appeler le 04 82 53 05 10" en bouton orange primaire, devis en secondaire. Modèle à répliquer sur les landers.
- **Témoignages authentiques** : vrais avis Google nommés et attribués (Camille Simon, Teddy Malfroy, Groupe QPS, Adrien Desforges, Antoine Lacroix), libellés "Avis Google", répliqués de façon cohérente homepage (`index.html` L657 à L720) et landers département (`caisse-enregistreuse/ain/index.html` L346 à L386). Aucun témoignage placeholder détecté sur les pages de conversion. Aucune métrique client inventée dans les héros.
- **Page de confirmation /merci exemplaire** : `merci/index.html` L89 à L104 : accusé de réception clair, rappel d'appel prioritaire (bouton orange), triple réassurance ("Réponse sous 2h ouvrées", "Zéro démarchage", "Interlocuteur unique"), FAB devis désactivé (L20). Parfait next-step post-formulaire.
- **Formulaires courts et propres** : contact (`contact/index.html` L568 à L601) = nom, email, téléphone, message (tel optionnel sur mobile L690) ; bottom-sheet (`js/scripts.js` L502 à L539) = métier, formule, prénom, téléphone, email. Honeypot `hp_website` présent partout, champs cachés source/page/métier pour tracer l'origine du lead (`m/js/mobile.js` L409 à L415), anti double-submit, validation téléphone minimale.
- **Ordre des sections respecte la preuve avant la demande** : sur homepage et landers, trust bar juste après le héros, puis problème, métiers, témoignages, NF525, proximité, FAQ, et seulement en fin le CTA final avec appel. Aucune promesse orpheline de CTA sur les pages critiques.
- **Cohérence message-page SEA solide** : H1 localisés par ville sur les 4 départements (Lyon/Rhône `rhone` L150, Saint-Étienne/Loire `loire` L142, Mâcon/Saône-et-Loire `saone-et-loire` L148, Ain) et FAQ localisées ("Intervenez-vous dans l'Ain", "Pays de Gex et Ferney-Voltaire" `ain` L575 à L579). Un clic sur une annonce locale tient sa promesse.
- **Patch appel pour borne et monnayeur** : la bottom-sheet remplace le sélecteur métier par un nudge d'appel direct sur ces deux produits à cycle long (`js/scripts.js` L646 à L666), bon réflexe de qualification par téléphone.
- **FAB mobile omniprésent** : injecté sur toutes les pages `.m-shell` avec un bouton appel (`b2`) toujours présent, et un bouton devis contextuel (sheet sur caisse, lien contact ailleurs, `js/scripts.js` L546 à L558).

---

## Briefs prêts à transmettre

### Brief mobile-builder (M1) : appel co-primaire dans les héros mobiles landers
Sur les héros mobiles du silo caisse (sous-pages métier + 4 départements) et de seo-sea-local, remonter le téléphone d'une pastille icône (`btn btn-icon`) à un bouton libellé à parité visuelle avec le devis. Cible : deux boutons pleine largeur empilés, appel avec numéro ou libellé "Appeler" visible. Ne pas inventer de pattern : reprendre exactement le duo du héros mobile homepage (`index.html` L976 et L977). Conserver `data-sheet` sur le devis. Fichiers : `caisse-enregistreuse/*/index.html` (blocs `.m-shell` héros), `visibilite-web/seo-sea-local/index.html`. Rebuild Tailwind si classes nouvelles, sinon inline. Passage site-qa avant commit.

### Brief front-builder (M2) : numéro nav visible dès lg
Dans `js/scripts.js` L197, changer `hidden xl:flex` en `hidden lg:flex` sur le lien `tel:` de la nav desktop, pour rendre le numéro visible sur les laptops 1024 à 1279px. Vérifier qu'aucun débordement n'apparaît sur la barre nav entre 1024 et 1279px (les liens menu tiennent). Rebuild Tailwind (classe déjà présente au build), incrémenter le cache-bust de scripts.js sur toutes les pages. Passage site-qa.

### Brief marketing-strategist / Clément (B1) : grille tarifaire IT réelle
Fournir la grille réelle du contrat de maintenance IT, ou valider le basculement en "sur devis après audit gratuit". Remplacements dans `maintenance-informatique/maintenance-depannage/index.html` : L376, L392 (desktop), L814, L830 (mobile), L441, L442 (options de formulaire). Vérifier les autres pages IT portant du `€/mois` (`cloud-securite`, `outils-collaboratifs`) au même moment. Ne pas mettre en ligne racine avec les montants actuels.
