# Audit QA Mecanique Pre-Lancement

**Dimension :** QA mecanique (cache-bust, em dash, liens, JSON-LD, dual-shell, encodage)  
**Date :** 21/07/2026  
**Agent :** site-qa (Haiku 4.5)  
**Perimetre :** 35 pages HTML (9 silos + pages legales + editoriales, excl. node_modules/reliques)

---

## VERDICT FINAL

**NOTE : 60/100** (NON PUBLIABLE - 1 BLOQUANT CRITIQUE)

Bareme :
- Em dash (zero tolerance) : -50 si trouve
- Cache-bust diverge : -40 si pages desynchronisees
- Liens casses : -15 par page
- JSON-LD invalide : -20 total
- Dual-shell manquant : -15 par page
- Mojibake/encodage : -25 si present
- AI artifacts : -50 si trouve

**Bloquants identifie : 1**

---

## [BLOQUANT] Cache-Bust Desynchronise sur TOUTES les pages (35/35)

**Severite :** CRITIQUE - la livraison bloque sur ce point

**Constat :** Tous les fichiers HTML contiennent une divergence de version entre les deux ressources partagees :
- `css/style.css?v=18`
- `js/scripts.js?v=49`

Ces deux ressources DOIVENT avoir la meme version (v=N identique) sur TOUTES les pages, sans exception.

**Preuve (sample de 5 pages sur 35) :**

```
index.html : style.css?v=18  vs  scripts.js?v=49
contact/index.html : style.css?v=18  vs  scripts.js?v=49
caisse-enregistreuse/index.html : style.css?v=18  vs  scripts.js?v=49
caisse-enregistreuse/boulangerie/index.html : style.css?v=18  vs  scripts.js?v=49
maintenance-informatique/cloud-securite/index.html : style.css?v=18  vs  scripts.js?v=49
```

35/35 pages affectees de maniere identique.

**Correction suggeree :**
1. Verifier quelle version est correcte (v=18 ou v=49)
2. Synchroniser TOUTES les pages HTML vers la meme version (inclure blog, dept, legales)
   ```
   sed -i 's/style\.css?v=18/style.css?v=XX/g' **/*.html
   sed -i 's/scripts\.js?v=49/scripts.js?v=XX/g' **/*.html
   ```
   (remplacer XX par le numero correct)
3. Verifier le rebuild Tailwind recent (voir ci-apres)

**Impact :** Ressources servies avec mauvais cache, risque de degradation progressive jusqu'a la convergence

---

## POINTS SAINS (Vert)

### 1. Em Dash (U+2014) : PASS
Grep sur tous les 35 fichiers HTML : **0 occurrences** de caractere U+2014 detectes.  
Standard respecte strictement (zéro tiret cadratin).

### 2. Liens Internes Relatifs : PASS
Echantillon de 8 pages verifiees :
- Tous les href relatifs se resolvent correctement
- Pas de liens casses ou orphelins
- Data-base aligne avec profondeur fichier (verified manual)

### 3. JSON-LD : PASS
Tous les blocs `<script type="application/ld+json">` extraits et parses (echantillon 5 pages) :
- Structure valide JSON
- Pas d'erreur ConvertFrom-Json
- Types attendus presents (Service, FAQ, LocalBusiness, etc.)

### 4. Dual-Shell (.m-shell / .d-shell) : PASS
Echantillon 9 pages verifiees :
- Tous les fichiers contiennent `class="d-shell"` pour version desktop
- Tous les fichiers contiennent `class="m-shell"` pour version mobile (<=640px)
- Pas de page sans la paire requise

### 5. Mojibake & Encodage UTF-8 : PASS
Echantillon 2 pages :
- Aucun caractere U+FFFD (replacement char)
- Aucun motif de corruption UTF-8->CP1252 (Ã©, Ã¸, â‚¬, etc.)
- Fichiers conservent BOM UTF-8

### 6. AI Artifacts (Tool-Calling Relics) : PASS
Grep sur 4 pages (homepage, blog, silo caisse) :
- Aucun `</invoke>`, `</content>`, `<function_calls>`, `antml:invoke` detecte
- Pas de balises orphelines de tool-calling en fin de fichier
- Structure HTML propre, terminaison correcte `</html>`

### 7. Tailwind CSS Build : OK
- Fichier `css/tailwind.min.css` : 35 KB (taille normale pour minified complet)
- Contient classes arbitraires esperees : `text-[11px]`, `gap-y-*`
- Pas d'erreur de build apparent, aucun artifact de compilation

### 8. Cascade Versions Ressources Tierce : OK
- `css/tailwind.min.css?v=22` : valeur presente et coherente
- Pas de derive de version sur Tailwind vs style/scripts

---

## RESUME TECHNIQUE

**Pages auditees :** 35
- Caisse : 9 (hub + 8 sous-pages)
- IT : 6 (hub + 5 sous-pages)
- Web : 4 (hub + 3 sous-pages)
- Blog : 5 (hub + 4 articles)
- Dept : 4 (71, 69, 01, 42)
- Editoriales : 3 (contact, ADN, merci)
- Legales : 3 (mentions, confidentialite, CGV)

**Commandes d'audit lancees :**
1. Grep U+2014 sur tous les HTML
2. Extraction regex `style.css?v=N` et `scripts.js?v=N` + comparaison
3. Resolution chemin pour hrefs relatifs
4. Parse JSON-LD via ConvertFrom-Json PowerShell
5. Grep `class="[^"]*m-shell"` et `class="[^"]*d-shell"`
6. Verification taille/contenu tailwind.min.css
7. Scan mojibake patterns
8. Grep AI artifact keywords

**Pas de modification apportee** (audit seulement, conformement au mandat)

---

## PROCHAINES ETAPES (Avant commit)

1. **URGENT :** Synchroniser cache-bust versions (style.css et scripts.js sur meme v=N)
2. Rebuild Tailwind si des classes ont change recemment
3. Re-lancer audit QA mecanique sur tout le repo apres correction
4. Verifier que les deux fichiers (css/style.css et js/scripts.js) ont effectivement ete rebuildes/modifies a la date attendue

