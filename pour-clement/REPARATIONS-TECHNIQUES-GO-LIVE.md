# Chantier technique go-live, DCB V2 (pour Clément)

> Rédigé le 24/06/2026. Côté contenu/SEO/GEO/mobile, les pages sont rendues publication-ready une par une (Nathanaël + agents). Ce document liste ce qui relève de l'INFRA et du TRACKING, à ta charge, pour que la mise en ligne soit réelle et pilotable. Source : `STRATEGIE-ACQUISITION-MASTER.md` (doc maître Council + seo-expert + ads-auditor).

**Règle d'or rappelée : aucun euro de média ne repart tant qu'un appel ET un formulaire test ne remontent pas dans GA4 + Google Ads. Cap dur 10 jours.**

---

## P0 — BLOQUANTS (rien ne se lance sans ça)

### 1. Hébergement + HTTPS
- [ ] Choisir et provisionner l'hébergement de production (il n'y a PAS de version live aujourd'hui ; l'ancien Plesk = V1 obsolète).
- [ ] Domaine `dcb-technologies.fr` pointé sur la V2, **HTTPS forcé** (certificat + redirection 301 http→https).
- [ ] `www` → apex (ou inverse) en 301, une seule version canonique.
- **Test d'acceptation :** `https://dcb-technologies.fr/` charge la V2, le http et le www redirigent en 301 vers la version canonique.

### 2. Redirections 301 V1 → V2 (protéger le jus organique)
À écrire dans `.htaccess`. Sans ça, le référencement IT/Web déjà acquis est perdu.
- [ ] `/service-it-360/` → `/maintenance-informatique/`
- [ ] `/site-internet/` → `/visibilite-web/`
- [ ] Recenser toutes les URLs V1 indexées (GSC > Pages) et mapper chacune vers son équivalent V2.
- [ ] **Ne pas casser** `/caisse-enregistreuse/saone-et-loire/` (seul actif organique qui marche, CTR 15%) : URL conservée, aucune collision de canonical V1/V2 pendant la bascule.
- **Test d'acceptation :** chaque ancienne URL renvoie un 301 (pas 302, pas 404) vers la bonne cible V2.

### 3. Tracking de conversion (aujourd'hui : keyEvents = 0 sur 90 jours)
Ordre d'exécution :
- [ ] **Call-tracking d'abord** (la caisse se vend au téléphone) : numéro de renvoi (forwarding Google gratuit côté Ads, numéro dédié côté Meta). Événement `phone_click` sur tous les points d'appel (nav, FAB, CTA, footer) dans `scripts.js`.
- [ ] Page `/merci.html` avec snippet de conversion au chargement (déclencheur fiable en site statique).
- [ ] Événement `contact_form_submit` (paramètre `offre` = caisse/it/web) dans `scripts.js`, marqué **Événement clé** dans GA4.
- [ ] Purger les 5 actions de conversion orphelines du compte Google Ads ; ne garder que 3 actions propres (Lead formulaire, Appel annonce, Appel site).
- [ ] Importer les événements clés GA4 → Google Ads.
- [ ] Pixel Meta + événement Lead sur `/merci`.
- [ ] **Consent Mode V2** (bandeau cookies conforme RGPD avant tout tag).
- **Test d'acceptation (binaire, end-to-end) :** un formulaire test ET un clic-to-call test apparaissent dans GA4 DebugView **et** dans Google Ads, avant de remettre 1 € en média.

### 4. Sitemap + indexation
- [ ] Ajouter `/caisse-enregistreuse/hairnet/` au `sitemap.xml` (absente aujourd'hui).
- [ ] Vérifier que `sitemap.xml` ne liste que des URLs V2 canoniques en 200.
- [ ] Post-bascule : soumettre `sitemap.xml` à Google Search Console + Bing Webmaster Tools, puis demande d'indexation des money pages.

---

## P1 — À FAIRE DANS LA FOULÉE (visibilité locale + propreté)

### 5. Google Business Profile (levier n°1 du Local Pack, action côté toi/client)
- [ ] Corriger le **bug GPS** de la fiche (mauvaise localisation).
- [ ] Catégories secondaires : vendeur de caisses, services informatiques, agence web.
- [ ] Lancer la campagne d'avis (cible 20-25 avis à M+3).
- [ ] Photos réelles + posts hebdo.
- [ ] Récupérer l'URL officielle de la fiche pour compléter `sameAs` du JSON-LD LocalBusiness.

### 6. Nettoyage avant publication (déjà repéré côté projet)
- [ ] Retirer les liens temporaires footer vers les pages département (`tmp-dept-link` dans `scripts.js`).
- [ ] Retrait de l'atlas zone d'intervention du footer (déjà acté, zéro gain SEO).

### 7. Performance / RGPD (gain LCP + conformité)
- [ ] Auto-héberger les fonts (woff2 dans `/assets/fonts/`) au lieu de Google Fonts.
- [ ] Remplacer les URLs `lh3.googleusercontent.com` (photos produits) par des images auto-hébergées (RGPD + LCP).

---

## Ce qui n'est PAS de ton ressort (géré côté contenu/agents)
Pour info, pour qu'on ne se marche pas dessus : meta/title, JSON-LD, maillage interne, FAQ, textes, mobile, images WebP `width`/`height`, Open Graph. Tout ça est traité page par page côté Nathanaël.

---

## Séquence conseillée
1. Hébergement + HTTPS (P0-1).
2. En parallèle : tracking complet (P0-3) sur l'environnement de prod ou recette.
3. Redirections 301 (P0-2) au moment exact de la bascule.
4. Sitemap + soumission GSC/Bing (P0-4) juste après la bascule.
5. GBP (P1-5) dès que le site est live.
6. Test end-to-end tracking validé → feu vert média.
