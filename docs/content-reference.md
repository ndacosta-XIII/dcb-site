# Référence contenu DCB Technologies
# Ce fichier trace les formulations validées par page pour éviter le duplicate content.
# Mise à jour : 2026-06-03

---

## Formulations transversales (utilisables sur toutes les pages, non dupliquées entre elles)

### Hiérarchie d'intervention SAV — règle absolue
Toujours dans cet ordre :
1. Télémaintenance à distance IMMÉDIATE (quelques minutes)
2. Sur site en moins de 4h si déplacement nécessaire

Ne jamais réduire à "intervention en moins de 4h" seul : le cerveau lit ça comme une attente.

### Numéro de téléphone
04 82 53 05 10 — à citer dans Pain SAV de chaque page quand pertinent.

### Zone d'intervention
Saône-et-Loire (71), Rhône (69), Ain (01), Loire (42)
Villes nommées : Lyon, Mâcon, Chalon-sur-Saône, Villefranche-sur-Saône, Bourg-en-Bresse, Roanne, Paray-le-Monial

### NF525 — formulation de référence
"Certifié NF525 par l'AFNOR — attestation accessible à tout moment depuis votre caisse."
Ne pas utiliser : "conforme", "agréé" seul sans mention AFNOR.

### Amende NF525 — formulation de référence
"7 500 € d'amende par caisse non conforme en cas de contrôle fiscal."
Source implicite : loi anti-fraude TVA du 1er janvier 2018.

---

## Hub Caisse Enregistreuse (`caisse-enregistreuse/index.html`)

### Lede hero

**Desktop :**
Votre caisse tombe un samedi matin : on prend la main à distance en quelques minutes. Si un passage est nécessaire, un technicien DCB est chez vous en moins de 4 heures en Saône-et-Loire, Rhône, Ain ou Loire. Packs à partir de 59 €/mois, installés sur place.

**Mobile :**
Panne un samedi matin : prise en main à distance immédiate. Sur place en moins de 4h si besoin. Packs à partir de 59 €/mois, en 71, 69, 01 et 42.

### Pain 1 — SAV

**Desktop :**
Avec SumUp ou un revendeur en ligne, une panne c'est un ticket, un chatbot, et 48 heures à compter vos ventes à la main. Chez DCB, vous appelez le 04 82 53 05 10 : on prend la main à distance immédiatement. Si le problème nécessite un déplacement, un technicien est chez vous en moins de 4 heures.

**Mobile :**
Ailleurs, une panne c'est un ticket et 48h d'attente. Chez DCB, vous appelez le 04 82 53 05 10. Prise en main à distance immédiate. Sur place en moins de 4h si nécessaire.

### CashMag lede

**Desktop + Mobile (identique) :**
On a choisi CashMag parce qu'il est certifié NF525 par l'AFNOR et qu'on maîtrise chaque paramètre de sa configuration. Notre valeur ajoutée : on vient sur place, on prend le temps de comprendre votre activité, et on configure tout avant la mise en service. En cas de problème, vous n'appelez pas un standard. Vous appelez votre technicien, celui qui a installé votre caisse.

### CTA final

**Desktop :**
Parlez à un technicien, pas à un commercial.
[sous-texte bouton] Diagnostic gratuit, sans engagement

**Mobile :**
Parlez à un technicien DCB — diagnostic gratuit, sans engagement.

---

## Sous-pages Caisse (à compléter au fur et à mesure)

### Boulangerie (`caisse-enregistreuse/boulangerie/index.html`)
- Pain SAV : variante "ouverture 5h30, caisse prête avant le premier client"
- NE PAS réutiliser : lede hero hub mot pour mot

### Restaurant (`caisse-enregistreuse/restaurant/index.html`)
- Pain SAV : variante "service du midi, panne à 12h"
- NE PAS réutiliser : lede hero hub mot pour mot

### Commerce de détail (`caisse-enregistreuse/commerce-de-detail/index.html`)
- Pain SAV : variante "samedi marché, file d'attente"
- NE PAS réutiliser : lede hero hub mot pour mot

### Coiffure (`caisse-enregistreuse/coiffure/index.html`)
- Pain SAV : variante "agenda en ligne bloqué, RDV perdus"
- NE PAS réutiliser : lede hero hub mot pour mot

---

## Pages locales Caisse par département

Texte complet rédigé dans `docs/content-departements-redige.md`. Formulations propres par page (garde-fou anti-duplicate). Angle 71 = base technique réelle (atelier Paray-le-Monial). Angle 69 = siège social réel à Dardilly + techniciens salariés (proximité). ATTENTION : DCB n'a PAS de stock/entrepôt local (ni à Lyon/Dardilly) : ne jamais écrire "stock" ou "entrepôt" DCB (faux fait banni le 01/07/2026). Angle 01/42 = réactivité sans base locale (télémaintenance 20 min + sur site <4h), aucune base/stock/agence suggérée.

### Saône-et-Loire (`caisse-enregistreuse/saone-et-loire/index.html`)
- Angle : "Votre technicien ne vient pas de Lyon, il vient de Paray." Base et stock à Paray-le-Monial.
- Trust bar validée : "Intervention sous 4h en Saône-et-Loire" (et non "en 71").
- FAQ H2 validée : "Questions fréquentes en Saône-et-Loire."

### Rhône (`caisse-enregistreuse/rhone/index.html`)
- Angle propre : "Notre siège est à Dardilly, à dix minutes du centre de Lyon." Techniciens salariés sur place (JAMAIS de stock/entrepôt DCB : faux fait).
- Accroche SAV propre : "A Lyon, les revendeurs ne manquent pas. Les techniciens qui répondent, si."
- Card 3 propre : "Un prestataire sans ancrage local" (solutions nationales sans adresse physique).
- Techniciens lede propre : "qui peut sortir de Dardilly en cas d'urgence".
- CTA final : "Parlez à un technicien DCB dans le Rhône."

### Ain (`caisse-enregistreuse/ain/index.html`)
- Angle propre : "La réactivité ne se mesure pas en kilomètres." 8 pannes sur 10 réglées à distance en 20 min.
- Accroche hero propre : "Une panne à Bourg-en-Bresse un samedi matin. Le temps qu'un revendeur lointain vous rappelle, on a déjà pris la main."
- Card 3 propre : "Installé de loin, jamais formé" (caisse reçue par la poste).
- Eyebrow techniciens propre : "Expertise sans frontière".
- Argument Pays de Gex : télémaintenance évite de traverser l'agglomération genevoise.
- CTA final : "Parlez à un technicien DCB dans l'Ain."

### Loire (`caisse-enregistreuse/loire/index.html`)
- Angle propre : "Saint-Etienne, Roanne, Montbrison : trois bassins, une seule équipe." Saint-Etienne = 173 000 hab, peu de spécialistes NF525 qui se déplacent.
- Card 3 propre : "Une caisse pas configurée pour vous" (boucher de Roanne / brasserie stéphanoise / boulangerie de Montbrison).
- Argument stéphanois propre : "la différence entre lever le rideau et le laisser baissé".
- CTA final : "Parlez à un technicien DCB dans la Loire."

### Architecture anti-redondance DE-DUP 2026-06-15 (4 pages dpt)
Chaque zone a un rôle distinct pour ne pas répéter les mêmes arguments :
- Trust bar IDENTIQUE 4 pages (réassurances marque) : "Intervention <4h" / "Garantie 5 ans" / "Certifié NF525" / "Zéro sous-traitance". (71 : item 1 = "Intervention sous 4h en Saône-et-Loire".) Plus de "Télémaintenance 20 min" en trust bar.
- Checklist proximité IDENTIQUE 4 pages (engagements SAV chiffrés) : "Télémaintenance 7j/7 en moins de 20 minutes" / "Sur site en moins de 4h si besoin" / "Remplacement de matériel sous 48h". Sans "8 pannes sur 10" (puce 1) ni "zéro sous-traitance" (déjà trust bar).
- Cards "Pourquoi changer" = 3 PROBLÈMES vécus, 1 mention courte de la solution max (card 1).
- Texte final dans content-departements-redige.md, section "VERSION DE-DUP 2026-06-15".

### Anti-duplicate : blocs partagés assumés (information fonctionnelle/légale)
- Card 2 "Un logiciel non conforme" (NF525 + amende 7 500 €) : quasi identique sur les 4 pages.
- Section 4 métiers, section 7 périphériques, piliers NF525 (section 6) : repris du template 71.
- Ratio cible respecté : 60-65% unique par page.

## Hub IT (`maintenance-informatique/index.html`)
# À remplir

## Hub Web (`visibilite-web/index.html`)
# À remplir

---

## Règles duplicate content

1. Le lede hero du hub = formulation unique. Les sous-pages utilisent leur propre angle métier.
2. La formulation SAV (télémaintenance + <4h) est déclinée différemment sur chaque page : même message, contexte métier différent.
3. La description NF525 peut être identique sur hub + sous-pages caisse (c'est de l'information légale, pas du contenu marketing).
4. Les témoignages : chaque page a ses propres témoignages, pas de répétition entre pages.
5. Les JSON-LD FAQ : questions différentes entre hub et sous-pages.
