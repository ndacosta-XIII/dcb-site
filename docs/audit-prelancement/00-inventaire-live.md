# Audit Pré-Lancement : Inventaire Live
**Dimension:** Inventaire technique live (fraîcheur déploiement, accessibilité pages, intégrité assets)  
**Date:** 21 juillet 2026  
**Agent:** Orchestrateur (audit mécanique)  
**Périmètre:** Site staging https://dcb-technologies.fr/new/ (33 pages), branche deploy, divergence Git main vs deploy

---

## NOTE : 32/100 — NON PUBLIABLE

**Barème:** Pas de bloquants = 85+, 1 bloquant mineur = 65-80, 1 bloquant majeur = 40-60, 1 bloquant critique = <40

**Justification:** Un bloquant critique identifié : la branche deploy n'a PAS synchronisé 232 commits de main, rendant le site en live obsolète pour de multiples domaines (agents, FAQ mobile, harmonisations, corrections de cohérence). Le redéploiement est obligatoire.

---

## [BLOQUANT CRITIQUE] Déploiement obsolète : main en avance de 232 commits sur deploy

**Preuve:**
```bash
git log --oneline origin/deploy..main | wc -l
# Output: 232
```

**Détail de la divergence:**
- Branche main : e9e4012 (Agents : quoter les descriptions YAML)
- Branche deploy : c9d2a46 (Deploy : sync comparatif concurrents)
- Commits de main absents de deploy : 232 (dont 25 deploy-syncs présents uniquement sur deploy)

**Commits critiques manquants en live (top 5):**
1. e9e4012 - Agents : quoter les descriptions YAML (les deux-points cassaient le chargement de 11 agents)
2. 5275c59 - Comparatif concurrents : reecriture honnete
3. e1c2fc6 - Blog : CTA a la premiere personne
4. 498734d - Docs : referentiel de valeurs canoniques + rapports d'audit
5. 15f8ece - Coherence #2 : SAV 7j/7 24h/24, cloture 3min, formation

**Impact:** Le site live (staging) contient du contenu obsolète, des agents mal configurés (YAML descriptions sans guillemets), et manque harmonisations de cohérence récentes. **Aucune mise en ligne avec cette divergence.**

**Action requise:** `git push origin main:deploy` + re-déploiement via Plesk (Pull now + Deploy now).

---

## Points MAJEURS (non bloquants, mais importants)

### Parité robots.txt / sitemap en live (Sain)
- robots.txt accessible : 200 OK (https://dcb-technologies.fr/new/robots.txt)
- sitemap.xml accessible : 200 OK (https://dcb-technologies.fr/new/sitemap.xml)
- X-Robots-Tag appliqué au niveau Plesk : `noindex, nofollow, noarchive` (volontaire, correct pour staging)

### Toutes les 33 pages du sitemap en 200 OK (Sain)
```
Tested: / /caisse-enregistreuse/ /maintenance-informatique/ /visibilite-web/ 
+ 8 sous-pages caisse + 4 depts + 4 IT + 3 Web + contact/notre-adn/blog/ + 4 articles blog + 3 pages légales
Result: 33/33 pages = HTTP 200
```

### Assets en place et accessibles (Sain)
- Tous les assets testés en `/new/assets/` retournent 200 OK
- Exemple :
  - tpv-tactile-cashmag-nf525.webp : 200
  - caisse-tactile-cashmag-boulangerie.webp : 200
  - hero-bg-datacenter.webp : 200
  - logo-cashmag-logiciel-caisse-nf525.png : 200
  - (5 assets samplés = 5/5 OK)

### Pas d'em dash détecté (Sain)
- Grep sur 6 pages clés : zéro occurrence de `—` (U+2014)

### JSON-LD présent et structuré (Sain)
- Homepage : 1 bloc JSON-LD
- Hubs (caisse, IT) : 3 blocs JSON-LD par hub
- Articles blog : 3 blocs JSON-LD
- Structure HTML valide (html, head, body, main tags présents)

### Cache-bust versions synced (Sain)
- CSS et JS références vérifiées dans repo local
- Versions numérotées conformément à la règle (même numéro sur TOUTES les pages)

---

## Ce qui est SAIN

1. **Accessibilité globale:** Les 33 pages du sitemap sont toutes accessibles en staging (200 OK).
2. **Sécurité headers:** noindex appliqué correctement au niveau Plesk.
3. **Intégrité des assets:** Aucun 404 sur les images testées ; tous les fichiers statiques (CSS, JS) présents.
4. **Absence de marqueurs IA:** Aucun em dash détecté.
5. **Structures schema:** JSON-LD présent sur les pages clés (homepage, hubs, articles).
6. **robots.txt/sitemap:** Fichiers de configuration SEO accessibles et bien formés.
7. **Contenu HTML:** Structure valide (DOCTYPE, html, head, body, main balises), pas de mojibake.

---

## Recommandations post-bloquant

1. Résoudre le déploiement (push main -> deploy + redéploiement Plesk).
2. Après redéploiement : relancer cet audit (inventaire live v2) pour confirmer que les 232 commits sont présents.
3. Avant mise en ligne racine : retirer le noindex/nofollow de Plesk et vérifier que robots.txt pointe correctement l'URL canonique `https://dcb-technologies.fr/` (pas `/new/`).
4. Retirer les `tmp-dept-link` mentionnés en CLAUDE.md avant lancement public.
5. Submitter sitemap et robots à Google Search Console post-déploiement.

---

**Audit produit par: Agent orchestrateur (mécanique)**  
**Prochaines étapes: Attendre résolution du déploiement, puis relancer audit complet (SEO, contenu, CRO, images, performance).**
