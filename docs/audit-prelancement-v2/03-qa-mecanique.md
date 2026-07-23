# AUDIT QA MECANIQUE : RAPPORT V2

**Date** : 22/07/2026  
**Modele** : Haiku 4.5  
**Scope** : Toutes les pages HTML du site (34 pages)

---

## RESULTAT FINAL

**Note** : 92/100

**Verdict** : 1 BLOQUANT (BOM encodage sur page transactionnelle merci/)

**Pages auditees** : 
- Homepage, blog (5 articles)
- Caisse (hub + 8 sous-pages + 4 pages dept)
- IT (hub + 5 sous-pages, GELE)
- Web (hub + 3 sous-pages)
- Pages legales (cgv, confidentialite, mentions-legales)
- Pages editoriales (contact, notre-adn)
- Page de confirmation (merci)

---

## PASSE 1 : EM DASH (U+2014) - ZERO TOLERANCE

**Status** : PASS

**Details** : Aucun caractere em dash deteste dans les 34 pages.

**Exceptions acceptees** : Separateurs box-drawing U+2500 dans commentaires HTML (aucun detecte).

---

## PASSE 2 : ENCODAGE UTF-8 BOM

**Status** : FAIL (5 fichiers)

**Fichiers sans BOM UTF-8** (debut par [3C 21 44] au lieu de [EF BB BF]) :

### Bloquant
- **merci/index.html** (Page transactionnelle post-formulaire - visible par client)

### IT gele
- maintenance-informatique/cloud-securite/index.html
- maintenance-informatique/location-vente-installation/index.html
- maintenance-informatique/maintenance-depannage/index.html
- maintenance-informatique/outils-collaboratifs/index.html

**Correction bloquante** :
```powershell
# merci/index.html : copie binaire + reedition encage UTF-8 avec BOM
```

**Correction IT gelee (non actionnable)** : En attente Clement (placeholder).

---

## PASSE 3 : CACHE-BUST

**Status** : PASS

**Resultats** :
- `style.css?v=18` : uniforme sur 34 pages
- `scripts.js?v=49` : uniforme sur 34 pages
- Compteurs independants (vs et js decouples intentionnellement)

---

## PASSE 4 : LIENS INTERNES

**Status** : PASS

**Details** : 
- Tous les chemins relatifs (../, ./) resolvent correctement
- Ancres verifiees (ex. #metiers dans caisse-enregistreuse/index.html existe)
- Aucun lien 404 ou orphelin parmi les pages cibles

---

## PASSE 5 : JSON-LD VALIDE

**Status** : PASS

**Details** :
- 34 pages auditees
- Tous les blocs `<script type="application/ld+json">` parsent correctement
- Aucune erreur JSON syntaxe

---

## PASSE 6 : DUAL-SHELL (.d-shell / .m-shell)

**Status** : PASS

**Details** :
- Pages editoriales (blog, contact, notre-adn, homepage, silos caisse/web) : .d-shell + .m-shell present
- Pages legales (cgv, confidentialite, mentions-legales) : pas de dual-shell (volontaire, sobres)
- Page transactionnelle (merci) : single-shell (volontaire, simple)

**Aucun probleme** : Structure conforme aux specs.

---

## PASSE 7 : CLASSES TAILWIND

**Status** : PASS

**Details** :
- css/tailwind.min.css present et valid
- Taille : 58.97 KB (coherent)
- Classes arbitraires a valeurs (text-[#hex], bg-[#hex], gap-y-*, etc.) compilees correctement

---

## BLOQUANTS PRE-LANCEMENT

### 1. BOM UTF-8 manquant sur merci/index.html

**Severite** : BLOQUANT (page client visible)

**Fichier** : C:\Users\Dacos\Downloads\dcb-site-clean\merci\index.html (debut : [3C 21 44])

**Preuve** : `Get-Content -Encoding Byte | Select -First 3` retourne `3C 21 44` (absence BOM EF BB BF)

**Impact** : Encodage console potentiel, mojibake sur certains navigateurs legacy

**Correction suggere** :
```powershell
# Option 1: Edit ciblée (via harness Write)
# Lire fichier, re-encoder UTF-8 avec BOM, réécrire

# Option 2: PowerShell direct (si sûr de UTF-8 input)
$content = [System.IO.File]::ReadAllBytes("merci\index.html")
$utf8 = [System.Text.Encoding]::UTF8
$bomBytes = @(0xEF, 0xBB, 0xBF)
$newContent = $bomBytes + $content
[System.IO.File]::WriteAllBytes("merci\index.html", $newContent)
```

---

## SECTION IT GELEE

**Statut** : 4 fichiers sans BOM (maintenance-informatique/ )

Ces fichiers sont des placeholders en attente Clement (branche deploy, silo IT non finalisé). Leur absence de BOM n'est pas critique car ils ne sont pas visites par des utilisateurs.

**Pages concernees** :
- maintenance-informatique/cloud-securite/index.html
- maintenance-informatique/location-vente-installation/index.html
- maintenance-informatique/maintenance-depannage/index.html
- maintenance-informatique/outils-collaboratifs/index.html

**Ne pas corriger** : C'est du travail de Clement, ces pages sont gelees.

---

## AMELIORATIONS POST-LANCEMENT

1. Auto-heberger fonts (woff2 dans /assets/fonts) : gain LCP ~0.3s
2. Ajouter Open Graph images sur 4 pages (blog x2, contact, notre-adn)
3. Schema BlogPosting sur article blog
4. Fil d'Ariane + BreadcrumbList JSON-LD sous-pages

---

## COMPARAISON V1 (non applicable)

Aucun rapport v1 fourni pour cette dimension. C'est la premiere passe V2.

---

## VERDICT

**PRÊT A COMMITTER après correction BOM merci/** (1 ligne PowerShell).

Tout le reste est en conformite. Silo IT gele, pages legales acceptees, dual-shell OK.

**Prochaine etape** : Corriger merci/index.html, puis verifier SEO technique (dimension 01) et GEO AI (dimension 02).

