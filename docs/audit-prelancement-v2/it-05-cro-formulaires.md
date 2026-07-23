# IT DÉGEL : CRO + FORMULAIRES

Auditeur : cro-expert (opus). Date : 23/07/2026.
Source auditée : worktree `deploy-it` (= origin/deploy = live https://dcb-technologies.fr/new/, vérifié HTTP).
Périmètre : 6 pages `maintenance-informatique/` (hub + infogerance-maintenance, depannage-assistance, cybersecurite-sauvegarde, emails-pro-collaboration, materiel-reseaux) + chaîne de conversion complète (send.php, bottom-sheet, /merci, tracking GTM).

## Note : 82/100

Justification : la chaîne de conversion est fonctionnelle de bout en bout et vérifiée en live (send.php répond, /merci renvoie 200, PHP 8.3.32 actif). Le backend formulaire est unifié, sécurisé et bien câblé au tracking. Zéro bloquant dur. La note est plafonnée par une asymétrie stratégique : le silo IT, pilier prioritaire V2 à pousser, offre le parcours de conversion le PLUS friction du site (aucun formulaire inline desktop, bottom-sheet mobile désactivée), là où le silo caisse convertit en page. Plus quelques finitions (paramètres `?offre=` morts, libellé de CTA générique, date périmée).

---

## Ce qui est solide (à ne pas défaire)

**1. Backend formulaire unifié, un seul point de traitement.** `send.php` (racine du worktree) traite indifféremment le formulaire contact (`name/email/phone/message`) ET la bottom-sheet devis (`formule/prenom/nom/telephone/ville`). Contact desktop et mobile postent tous deux vers `../send.php` (contact/index.html L568, L673), la bottom-sheet vers `base + 'send.php'` (js/scripts.js L502), le silo caisse vers `../../send.php` (boulangerie L317). **Il n'y a PAS deux backends : le concern est levé.** Le silo IT n'introduit aucun nouveau mécanisme de formulaire, il réutilise la même cible. Un seul point de panne, pas deux.

**2. send.php robuste et vérifié live.** Méthode POST, flux POST > honeypot > validation > mail vers contact@ > redirection 303 vers `/merci/`. Anti-spam sérieux : honeypot `hp_website` (send.php L63), rate-limit 5 envois / 10 min par IP avec lecture `CF-Connecting-IP` derrière Cloudflare (L37-60), protection header-injection (`hdr_safe` L71), `strip_tags` sur tous les champs (L68), validation email (L91), protection open-redirect sur `REQUEST_URI` (L17-20). GET direct sur send.php renvoie 302 vers l'accueil (vérifié live : `HTTP/1.1 302 Found`, `location: /new/`). Aucun POST de test soumis.

**3. Tracking de conversion intact et cohérent avec les pages caisse.** Les déclencheurs GTM-MXK7RX9P vivent en délégation sur `document` (scripts.js L1297), donc couvrent le chrome injecté au runtime. `generate_lead` se déclenche sur la page `/merci` issue de la redirection 303 serveur (L1319-1320) : mécanisme fiable, indépendant du JS de la page d'origine. `phone_call_click` sur tout `a[href^="tel:"]` (L1301), `form_start` au premier focus (L1311), `email_click` (L1303). Les liens `tel:0482530510` du silo IT (heros desktop + mobile, FAB, CTA final) sont tous captés par le même sélecteur. **La conversion lead et appel est trackée identiquement aux pages caisse.**

**4. CTA final « Le Seuil » conforme sur les 6 pages.** Desktop (`.d-cta-final`) + mobile (`.m-cta-final`) présents partout, `--accent` correct par page selon la grammaire visuelle :
- hub `#F57C00` orange (page marque, correct)
- infogerance-maintenance `#F59E0B` ambre
- depannage-assistance `#EF4444` rouge
- cybersecurite-sauvegarde `#0D9488` teal
- emails-pro-collaboration `#A855F7` violet
- materiel-reseaux `#4F46E5` indigo
Numéro 04 82 53 05 10 et date « Mis à jour le » présents dans chaque CTA final.

**5. Page /merci soignée pour la reprise de contact.** Confirmation claire, promesse de rappel « sous 2h ouvrées » nominative (Nathanaël ou Clément), CTA téléphone visible, triple réassurance (réponse 2h, zéro démarchage, interlocuteur unique). FAB masqué sur /merci (pas de sursollicitation). Vérifiée live : 200 OK.

**6. Persuasion ladder correcte sur les sous-pages.** Ex. infogerance : hero > coût caché (douleur) > ce qu'on prend en charge (solution) > CDI IT sans les coûts (valeur) > témoignages (preuve) > 3 étapes (process) > cross-sell infrastructure > FAQ (objections) > CTA final (close). depannage : douleur > preuve > équipe > process > périmètre > devis clair > urgence > FAQ > close. Pas de trou majeur. FAQ présente sur les 6 pages.

**Delta v1 :** le point noir historique du silo (formulaire factice / non branché, cf. audit v1) est RÉSOLU. Les formulaires postent désormais vers un send.php réel, live, sécurisé, avec page de remerciement réelle et `generate_lead` câblé. C'est le gain majeur de la refonte Clément côté conversion.

---

## BLOQUANTS pré-lancement

Aucun bloquant dur. La chaîne de conversion (formulaire contact + appel + /merci + tracking) est fonctionnelle et vérifiée en live sur les 6 pages.

---

## Améliorations (priorisées impact / effort)

### A1. Asymétrie de friction : le silo IT convertit moins bien que le silo caisse (impact fort, effort moyen). LEVIER : réduction de friction, loi de Hick inversée en faveur de l'action.
Constat, prouvé par le code :
- **Desktop** : les sous-pages IT n'ont AUCUN formulaire inline (`data-sheet: 0`, aucun `<form>` sur les 5 sous-pages). Le CTA primaire pointe systématiquement vers `../../contact/index.html` (infogerance L212, L796, L873, L1272 ; idem sur les 5 pages). Le silo caisse, lui, embarque un formulaire devis inline en desktop (`<form id="devis-form" action="../../send.php">`, boulangerie L317).
- **Mobile** : un script inline sur chaque page IT (infogerance L1291-1302, présent sur les 6 pages) remplace le bouton FAB `fabDevis` par un simple lien vers `../../contact/index.html`, **désactivant la bottom-sheet devis** qui est le convertisseur mobile rapide du reste du site.

Conséquence : sur le trafic majoritairement mobile, l'utilisateur IT subit un chargement de page supplémentaire (contact) au lieu d'une bottom-sheet instantanée. Pour un pilier que la stratégie V2 veut pousser, c'est le parcours le plus coûteux du site. Effet tracking secondaire : `sheet_opened` ne se déclenche jamais sur le silo IT (aucun `data-sheet`), donc la micro-conversion mobile est aveugle, même si `generate_lead` reste intact sur /merci.

Recommandation : rebrancher la bottom-sheet devis sur les pages IT (mobile) en source « audit-it » et, en desktop, réutiliser le pattern `#devis-form` inline du silo caisse au moins sur le hub et infogerance-maintenance. Objectif : parité de friction avec la caisse. Brief front-builder / mobile-builder ci-dessous.

### A2. Paramètres `?offre=` morts (impact moyen, effort faible). LEVIER : continuité de contexte, réduction de charge cognitive au closing.
Constat : materiel-reseaux passe `../../contact/index.html?offre=lvi-audit`, `?offre=lvi-leasing`, `?offre=lvi-achat` (L pricing cards). Or la page contact ne lit AUCUN paramètre d'URL (`grep URLSearchParams|location.search|offre contact/index.html` = 0). L'intention (audit vs leasing vs achat) est perdue : le mail lead ne portera pas l'offre choisie, et le champ contact reste `source=contact-desktop` figé. Pré-existant (boulangerie fait de même avec `?offre=`), donc pas propre à l'IT, mais actif dans le silo. send.php est déjà prêt à recevoir `metier`/`formule`/`source`.
Recommandation : faire lire `?offre=` par le JS de la page contact et le déverser dans un champ caché (`source` ou `formule`). Brief front-builder.

### A3. Libellé de CTA générique, l'offre « audit gratuit » n'est jamais le bouton (impact moyen, effort faible). LEVIER : spécificité de la promesse, réciprocité (gratuit).
Constat : le CTA primaire des sous-pages IT dit « Demander le service qu'il vous faut » (infogerance L796, L1272) ou « Décrire votre besoin informatique ». L'hameçon réel du pilier, l'audit gratuit, apparaît en corps de texte et en FAQ (infogerance L755, L1243, « audit gratuit offert » L885) mais jamais sur le bouton.
Recommandation copy : tester « Recevoir mon audit gratuit » ou « Décrire mon besoin, réponse sous 2h » sur le CTA primaire. Brief copywriter-site.

### A4. Hiérarchie CTA : le téléphone n'est pas roi dans les heros IT (impact moyen, effort faible). LEVIER : canal de conversion dominant B2B local (l'appel closes mieux).
Constat : dans les heros IT, le bouton stylé primaire est le lien contact (formulaire), le téléphone est en secondaire. La doctrine DCB pose le téléphone comme CTA roi en B2B local.
Recommandation : test A/B hero « téléphone primaire vs formulaire primaire » sur une sous-page à fort trafic. Structurer via ab-test-setup. Ne pas trancher à l'aveugle.

### A5. Date E-E-A-T périmée sur infogerance-maintenance (impact faible, effort trivial). LEVIER : fraîcheur / crédibilité.
Constat : infogerance affiche « Mis à jour le 24 avril 2026 » (L1277) alors que la refonte IT date du 22 juillet 2026 (date portée par les 4 autres sous-pages). Page retravaillée mais datée d'avant.
Recommandation : aligner sur 22 juillet 2026. Brief copywriter-site (texte only).

---

## Briefs prêts à transmettre

**Pour mobile-builder + front-builder (A1, priorité 1) :**
Objectif : parité de friction conversion IT avec le silo caisse.
- Mobile : sur les 6 pages `maintenance-informatique/`, retirer le script inline `waitFab` qui transforme le FAB en lien contact (infogerance L1291-1302 et équivalents). Rebrancher le FAB sur la bottom-sheet devis standard (`data-sheet`), source `sheet-devis` avec un `metier` IT dédié. Vérifier que `sheet_opened` se déclenche à nouveau et que la sheet hérite de l'`--accent` de la page.
- Desktop : sur le hub et infogerance-maintenance, intégrer le pattern `#devis-form` inline du silo caisse (référence boulangerie L317, action `../../send.php`, honeypot + `source` caché). Ne pas inventer : réutiliser le pattern de docs/front-library.md.
- Ne pas toucher send.php ni /merci. Conserver le fallback lien contact comme secondaire.

**Pour front-builder (A2) :**
Faire lire `?offre=` par le JS de contact/index.html et le déverser dans le champ caché `source` (ou `formule`) du formulaire desktop et mobile, pour que send.php le remonte dans le mail lead. Valeurs actuelles à supporter : `lvi-audit`, `lvi-leasing`, `lvi-achat` (materiel-reseaux) et les `?offre=*-boulangerie` existants.

**Pour copywriter-site (A3, A5, texte only) :**
- A3 : CTA primaire des sous-pages IT, remplacer « Demander le service qu'il vous faut » par « Recevoir mon audit gratuit » (ou variante « Décrire mon besoin, réponse sous 2h »). Zéro tiret cadratin.
- A5 : infogerance-maintenance, corriger la date en « 22 juillet 2026 » (L1277, `datetime="2026-07-22"`).

**Pour cro-expert / ab-test-setup (A4) :**
Structurer un test hero « téléphone primaire vs formulaire primaire » sur infogerance-maintenance (page la plus trafiquée du silo), métrique primaire `phone_call_click` + `generate_lead` combinés.

---

## Comparaison v1

Le rapport CRO v1 (docs/audit-prelancement/08-cro.md) portait sur l'ancien silo IT aux slugs supprimés (infogerance-pme, etc.) avec formulaires non branchés. Delta v2 :
- RÉSOLU : formulaires désormais reliés à un send.php réel, live, sécurisé, avec /merci et `generate_lead`. C'est le gain de conversion majeur de la refonte.
- NOUVEAU point d'attention : la refonte a retiré la bottom-sheet mobile et n'a pas ajouté de formulaire desktop inline sur le silo IT, créant l'asymétrie de friction A1 vs le silo caisse.
- Constant : réassurance (SAV, interlocuteur unique, zéro démarchage) bien présente au point d'action et sur /merci.
