# Tests visuels DCB Site

Filet de regression visuelle : captures pleine page (desktop 1440x900 + mobile 390x844) pour les 28 pages du site.

## Installation (une seule fois)

```bash
cd tests/visual
npm install
npx playwright install chromium
```

## Utilisation

```bash
# Capturer la reference (avant un lot de modifications)
npm run baseline

# Verifier les regressions (apres modifications)
npm run check
```

`npm run check` affiche un tableau PASS/FAIL par page+viewport avec le pourcentage de pixels differents.
Code de sortie non-zero si au moins une regression (> 0.1% de pixels).
Les images de diff sont dans `diff/` (pixels differents en rouge).

## Quand refaire une baseline

Apres validation d'un lot de modifications voulu (ex. nouveau design d'une section),
relancer `npm run baseline` pour que ce nouvel etat devienne la nouvelle reference.

## Lire un diff

Ouvrir l'image dans `diff/` : les zones rouges indiquent les pixels modifies.
Comparer avec `baseline/` et `current/` pour identifier la source du changement.

## Dossiers (non versiones)

| Dossier     | Contenu                          |
|-------------|----------------------------------|
| `baseline/` | Reference (avant modifications)  |
| `current/`  | Capture apres modifications      |
| `diff/`     | Images de diff (rouge = modifie) |
