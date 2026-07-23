# 08. Audit pré-lancement V2 : CONVERSION (CRO)

- **Dimension** : Conversion / CRO (hiérarchie CTA par intention, ordre des sections, formulaires, frictions, réassurance à l'action, parité mobile)
- **Date** : 22/07/2026
- **Agent** : cro-expert (opus)
- **Cible** : version LIVE https://dcb-technologies.fr/new/ (repo local miroir)
- **Périmètre audité** : homepage (desktop + mobile), hub caisse + sous-pages métier (boulangerie, restaurant) + landers département (rhone), hub IT, hub Web + lander seo-sea-local, contact, page /merci, frame partagée (`js/scripts.js` nav + FAB + bottom-sheet, `m/js/mobile.js`). Silo IT audité mais sorti en section « IT gelé ».
- **Objectif de conversion** : appel téléphonique (04 82 53 05 10) prioritaire, formulaire / bottom-sheet secondaire. Tracking GTM-MXK7RX9P câblé (generate_lead, phone_call_click) : acquis, non re-constaté.

---

## NOTE : 85 / 100

### Barème
| Critère | Poids | Score | Justification courte |
|---|---|---|---|
| Hiérarchie CTA par intention | 30 | 24 | Bon CTA dominant par type de page (appel caisse, audit/diagnostic IT+Web). Mais héros mobile rétrograde le tel en icône muette sur toutes les sous-pages. |
| Ordre des sections (preuve avant demande) | 20 | 19 | Trust bar post-hero, témoignages et NF525 avant le CTA final sur toutes les pages critiques. Aucun trou dans l'échelle. |
| Formulaires et friction | 20 | 19 | Champs minimaux, honeypot, promesse sous le bouton, /merci exemplaire, tracking source/page/métier. |
| Réassurance authentique à l'action | 15 | 13 | Avis Google nommés, SAV, NF525, interlocuteur unique. In-scope 100% authentique (le tarif factice est en silo IT gelé, hors périmètre bloquant). |
| Parité mobile / desktop des CTA | 15 | 10 | Contenu à parité, mais le canal prioritaire (appel) perd son libellé et son numéro sur le héros mobile alors qu'il les garde sur desktop. |

**Verdict** : PUBLIABLE côté conversion, zéro bloquant pré-lancement dans le périmètre in-scope. L'architecture de conversion est saine : CTA dominant cohérent par intention, preuve systématiquement avant la demande, formulaires courts, confirmation /merci soignée, phone omniprésent (FAB mobile + footer + CTA final). Le seul vrai levier CRO restant est la parité du téléphone sur les héros mobiles (identifié en v1, toujours vrai), qui reste une amélioration et non un bloquant car l'appel est joignable par au moins trois autres points sur chaque page mobile.

---

## Parcours de conversion par type de page (constat)

| Type de page | CTA dominant | Bon choix ? | Constat |
|---|---|---|---|
| Homepage | Appel (héros desktop L453 + mobile L976 orange primaire, numéro visible) | Oui | Modèle phone-first exemplaire, à répliquer. |
| Sous-pages caisse (boulangerie, restaurant) | Devis (bottom-sheet) primaire, appel secondaire | Oui | Cohérent : sheet qualifie le métier ; appel présent partout ailleurs. |
| Lander département (rhone) | Devis primaire ; desktop héros = appel orange primaire L174 | Oui | Desktop phone-first, mobile devis-first. |
| Hub IT | Diagnostic gratuit → /contact, appel secondaire | Oui | Intention IT = diagnostic, appel bien secondaire. |
| Hub Web + seo-sea-local | Audit gratuit → /contact, appel secondaire | Oui | Intention web = audit ; appel co-présent avec numéro sur desktop. |
| Contact | Formulaire (nom, email, tel optionnel, message) | Oui | Promesse « Réponse sous 2h ouvrées · Zéro démarchage » sous le bouton L607. |

Le CTA dominant est le bon par intention sur chaque famille. Aucune promesse orpheline de CTA détectée. Échelle de persuasion complète (hero → trust bar → problème → solution/métiers → témoignages → NF525 → proximité → FAQ → CTA final), sans trou.

---

## BLOQUANTS pré-lancement

Aucun bloquant CRO dans le périmètre in-scope (caisse, web, contact, frame, /merci).

Note : le tarif factice IT (89€/149€) qui était le bloquant B1 du rapport v1 est désormais reclassé en section « IT gelé » ci-dessous, silo IT étant explicitement gelé pour cette V2. Il n'est donc pas compté comme bloquant actionnable, conformément à ETAT.md.

---

## AMÉLIORATIONS post-lancement

### A1. Héros mobiles : le téléphone reste une icône muette (majeur, ex-M1 v1, toujours vrai)
- **Preuve** : pattern systémique dans les `cta-row` de héros mobile. `caisse-enregistreuse/boulangerie/index.html` L570 bouton primaire `data-sheet` « Demander un devis », L571 tel en `btn btn-icon` (icône `call` seule, sans numéro). Identique : `caisse-enregistreuse/restaurant/index.html` L615/L616, `caisse-enregistreuse/rhone/index.html` L715/L716, `visibilite-web/seo-sea-local/index.html` L460/L461. Étendu aussi aux héros mobile des hubs : `visibilite-web/index.html` L941/L942, `maintenance-informatique/index.html` L916/L918.
- **Contraste** : la homepage fait l'inverse et bien : `index.html` L976 mobile = « Appeler le 04 82 53 05 10 » bouton orange primaire, devis secondaire.
- **Impact** : sur 80% de trafic mobile et des landers SEA à forte intention, le moment le plus chaud (au-dessus de la ligne de flottaison) masque le numéro du canal qui convertit le mieux en B2B local. Le FAB, le footer et le CTA final portent l'appel, mais pas le héros.
- **Reco** : donner à l'appel une présence libellée co-primaire dans le héros mobile (bouton « Appeler » avec numéro ou libellé, à parité visuelle avec le devis), plutôt qu'une pastille icône. Reprendre exactement le duo du héros mobile homepage. Levier psychologique : réduction de la friction cognitive (le canal le plus rassurant doit être nommé, pas deviné).

### A2. Numéro nav absent 1024 à 1279px et pas de FAB tel desktop (majeur, ex-M2 v1, toujours vrai)
- **Preuve** : `js/scripts.js` L197 le numéro nav est en `hidden xl:flex` (visible seulement dès 1280px). Le FAB `#dcb-phone-fab` est `display:none` sauf `@media(max-width:640px)` (L284 et L291). Entre 1024 et 1279px, seul « Demander un devis » subsiste dans la nav, aucun rappel d'appel persistant au scroll.
- **Impact** : une part des laptops perd le canal prioritaire hors héros et CTA final.
- **Reco** : passer L197 de `hidden xl:flex` à `hidden lg:flex` (numéro visible dès 1024px). Effort faible, un seul point dans la source partagée. Vérifier l'absence de débordement nav 1024 à 1279px. Levier : disponibilité constante du CTA roi.

### A3. seo-sea-local, héros : appel en secondaire bordé (mineur, ex-m2 v1)
- **Preuve** : `visibilite-web/seo-sea-local/index.html` L142 primaire « Auditer mon référencement », L143 appel bordé secondaire (avec numéro visible sur desktop, bien). Défendable pour un lead web (l'audit qualifie), mais pour un clic SEA local très chaud l'appel gagnerait à être co-primaire. À tester (A/B) plutôt qu'à imposer.

### A4. CTA finaux et CTA secondaires desktop pointant vers /contact (mineur, ex-m1 v1)
- **Preuve** : sur homepage (`index.html` L1340 « Obtenir mon devis » → `/contact`) et landers, le devis desktop est un changement de page, pas une action légère. Acceptable car l'appel co-présent (L1342 dpx-tel). À surveiller si le rebond /contact monte après lancement.

---

## Ce qui est SAIN (à ne pas casser)

- **Homepage phone-first** : héros desktop (L453) et mobile (L976) placent « Appeler le 04 82 53 05 10 » en bouton orange primaire. Référence pour A1.
- **Page /merci exemplaire** (`merci/index.html`) : accusé clair L89, rappel « Nathanaël ou Clément vous recontacte sous 2h ouvrées » L90, bouton appel prioritaire L93, triple réassurance « Réponse sous 2h · Zéro démarchage · Interlocuteur unique » L101 à L103, FAB devis désactivé L20. Next-step post-conversion parfait, noindex correct L11.
- **Formulaires courts et propres** : contact (`contact/index.html` L568 à L609) = nom, email, tel optionnel, message ; promesse sous le bouton L607. Bottom-sheet (`js/scripts.js` L493 à L540) = métier, formule, prénom, tel, email, sous-titre « Réponse d'un technicien sous 2h ouvrées. Sans engagement. » L501. Honeypot `hp_website` partout, champs cachés source/page/métier pour tracer l'origine (L504 à L506).
- **Patch appel borne + monnayeur** : la bottom-sheet remplace le sélecteur métier par un nudge d'appel direct sur ces deux produits à cycle long (`js/scripts.js` L645 à L667). Bonne qualification par téléphone.
- **FAB mobile omniprésent** : bouton appel `b2` toujours présent, devis contextuel (sheet sur caisse, lien contact ailleurs) `js/scripts.js` L546 à L558.
- **Ordre des sections** : preuve avant demande sur toutes les pages critiques, échelle de persuasion complète.
- **Date E-E-A-T dans le CTA final** : présente desktop (`d-updated`) et mobile (`m-updated`) sur homepage L949/L1343, restaurant L559/L913, hub web L835/L1278. Numéro correct partout.
- **Cohérence message-page SEA** : H1 localisés par ville, FAQ localisées, devis « sur mesure après audit gratuit » cohérent avec la FAQ (seo-sea-local L64/L384).

---

## Parité mobile / desktop (point 7)

Le fond est à parité (mêmes promesses, mêmes preuves des deux côtés). L'écart est purement sur le canal appel : sur desktop le téléphone est un bouton libellé avec numéro (héros, nav dès 1280px, CTA final), sur mobile il devient une icône muette dans le héros (compensée par le FAB). La conversion mobile n'est donc pas aussi directe que desktop AU MOMENT DU HÉROS. A1 corrige exactement ce point.

---

## Réassurance à l'action (point 6)

Présente et authentique aux points de conversion : proximité (interlocuteur unique Nathanaël/Clément sur /merci et /contact), SAV 4h, NF525 (abbr avec tooltip data-tooltip, sans title), avis Google nommés avant le CTA final, « Sans engagement » et « Zéro démarchage » sous les boutons. Les 7 avis réutilisés = assumé, non flaggé.

---

## Section « IT gelé » (hors périmètre bloquant)

- **Grille tarifaire IT factice toujours en ligne** : `maintenance-informatique/maintenance-depannage/index.html` L376 `89€/mois`, L392 `149€/mois` (desktop), L814 (mobile), options de formulaire L441 `Starter · 89€/mois`, L442 `Business · 149€/mois`. Ces montants factices partent dans le POST via `?offre=maintenance-starter` (L386). Impact CRO connu : un prix précis mais faux ancre une attente et heurte la promesse de transparence à la découverte du vrai tarif. À remplacer par la grille réelle OU basculer en « sur devis après diagnostic gratuit » (cohérent avec le CTA du hub IT) avant dégel du silo. Non compté comme bloquant V2 : silo IT gelé en attente Clément.
- Vérifier au dégel les autres pages IT portant du `€/mois` (`cloud-securite`, `outils-collaboratifs`).

---

## Delta avec le rapport v1 (docs/audit-prelancement/08a-cro.md)

| Item v1 | Statut v2 |
|---|---|
| Note 78/100 | 85/100 (le seul bloquant B1 sort du périmètre bloquant, silo IT gelé ; reste 2 majeurs mobiles) |
| B1 tarif IT factice (bloquant) | Reclassé « IT gelé », inchangé dans le code, non bloquant V2 |
| M1 héros mobile tel en icône | Toujours vrai (A1). Constat élargi : touche aussi les héros mobile des hubs IT et Web |
| M2 nav tel `hidden xl:flex` + pas de FAB desktop | Toujours vrai (A2), `js/scripts.js` L197 inchangé |
| m1 devis desktop → /contact | Toujours vrai (A4), acceptable |
| m2 seo-sea-local appel secondaire | Toujours vrai (A3), à A/B tester |
| /merci, formulaires, ordre sections, avis authentiques | Inchangés, sains |

---

## Briefs prêts à transmettre

### Brief mobile-builder (A1) : appel co-primaire dans les héros mobiles
Sur les héros mobiles du silo caisse (sous-pages + landers département) et des hubs IT/Web, remonter le téléphone d'une pastille icône (`btn btn-icon`) à un bouton libellé à parité visuelle avec le CTA primaire. Deux boutons pleine largeur empilés, appel avec numéro ou libellé « Appeler » visible. Ne pas inventer de pattern : reprendre exactement le duo du héros mobile homepage (`index.html` L976 et suivant). Conserver `data-sheet` sur le devis caisse et les liens `/contact` sur IT/Web. Fichiers : `caisse-enregistreuse/*/index.html`, `visibilite-web/index.html` L941, `visibilite-web/seo-sea-local/index.html` L460, `maintenance-informatique/index.html` L916 (héros mobile uniquement). Rebuild Tailwind si classes neuves sinon inline. Passage site-qa avant commit.

### Brief front-builder (A2) : numéro nav visible dès lg
Dans `js/scripts.js` L197, changer `hidden xl:flex` en `hidden lg:flex` sur le lien `tel:` de la nav desktop (visible sur laptops 1024 à 1279px). Vérifier l'absence de débordement de la barre nav entre 1024 et 1279px. Rebuild Tailwind, incrémenter le cache-bust de scripts.js sur toutes les pages. Passage site-qa.

### Brief Clément (IT gelé) : grille tarifaire IT réelle
Au dégel du silo IT, fournir la grille réelle du contrat de maintenance ou valider le basculement en « sur devis après diagnostic gratuit ». Remplacements dans `maintenance-informatique/maintenance-depannage/index.html` : L376, L392 (desktop), L814 (mobile), L441, L442 (options formulaire), et le paramètre `?offre=` L386. Vérifier `cloud-securite` et `outils-collaboratifs` au même moment.
