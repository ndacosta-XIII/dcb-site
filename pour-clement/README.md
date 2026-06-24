# Analyse SEO DCB Technologies — Dossier de travail

Ce dossier contient les **5 modules d'analyse SEO** + le **plan de synthèse global**.

## Méthode

```
Phase A — Récolte des analyses
  ├─ MODULE_1_audit-technique.md     ← Audit technique SEO
  ├─ MODULE_2_???.md                  ← (à recevoir)
  ├─ MODULE_3_architecture.md         ← Architecture & maillage interne
  ├─ MODULE_4_???.md                  ← (à recevoir)
  └─ MODULE_5_???.md                  ← (à recevoir)

Phase B — Synthèse
  └─ MASTER_PLAN.md                   ← Plan d'exécution chronologique
                                        (croise les 5 modules, déduplique,
                                        priorise par effort/impact)

Phase C — Exécution
  └─ (sprints de 1-2h max, validés visuellement après chaque sprint)
```

## Statut actuel

| Module | Statut | Fichier |
|---|---|---|
| 1 — Audit technique | ✅ Terminé (Phase 0 partiellement exécutée) | `MODULE_1_audit-technique.md` (= ../AUDIT_SEO.md) |
| 2 — Référencement local & Local Pack | ✅ Terminé + enrichi avec données GBP réelles | `MODULE_2_referencement-local.md` |
| 3 — Architecture & maillage | ✅ Terminé | `MODULE_3_architecture.md` |
| 4 — Données structurées Schema.org | ✅ Terminé | `MODULE_4_donnees-structurees.md` |
| **MASTER_PLAN** | ✅ **Créé — prêt à exécuter** | **`MASTER_PLAN.md`** |

## Découvertes critiques en cours d'analyse

### 🔍 Module 2 — révélations après audit GBP réel
- ✅ DCB **possède déjà une fiche GBP** (KGMID `/g/11xvy54gzr`) — l'hypothèse initiale "0 fiche, en créer 2" était fausse
- 🔴 Fiche **sous-optimisée** : pas de catégories secondaires, mode SAB non activé, nom en minuscule
- 🔴 **Incohérence NAP** : coordonnées GPS GBP (45.6356, 4.7311 = sud-ouest Lyon) ≠ adresse JSON-LD du site (Dardilly)
- ✅ DCB n'a **aucun lieu d'accueil clients** → mode **Service-Area Business obligatoire**, **1 seule fiche** (pas 2)
- ✅ Note actuelle : 5,0/5 sur 4 avis (excellent ratio mais base trop petite)
- ⚠️ Avis "Théo Boissié" : vrai client mais lien familial avec Clément Boissié → **garder l'avis, diluer par volume**

## Règle d'or

**Pas d'exécution sur le code tant que les 5 modules ne sont pas reçus et que le MASTER_PLAN n'est pas validé par l'utilisateur.**

Cela évite :
- de refaire du travail si un module ultérieur change la priorité
- de créer des conflits entre recommandations de modules différents
- de perdre du temps sur des items qui seront déprioritisés au final

## Travail Phase 1 contenu déjà en cours

Indépendamment de cette analyse, le **Module 1 contenu Accueil + Caisse Hub** est en cours d'exécution (cf. `../CLAUDE.md` § "Phase 1 SEO/Contenu — Module Accueil + Caisse Hub").

Reste à finaliser sur ces 2 pages :
- [ ] Bandeau partenaires (bloqué : images)
- [ ] Comparatif "DCB vs SumUp" en HTML body sur Caisse Hub
- [ ] Cross-sell IT visible sur Caisse Hub

Ces items peuvent attendre la fin de la phase d'analyse, ou être faits en parallèle si tu le souhaites.
