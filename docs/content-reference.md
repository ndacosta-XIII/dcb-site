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
