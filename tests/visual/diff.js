/**
 * diff.js : DCB Visual Test : comparaison pixel par pixel baseline vs current
 *
 * Lit tous les PNG dans current/, compare avec baseline/ correspondant,
 * ecrit les diffs dans diff/, imprime un recapitulatif PASS/FAIL par page+viewport.
 *
 * Seuil : 0.1% des pixels differents = FAIL
 * Code de sortie non-zero si au moins un FAIL ou une baseline manquante.
 */

'use strict';

const fs        = require('fs');
const path      = require('path');
const { PNG }   = require('pngjs');
const pixelmatch = require('pixelmatch');

const BASELINE_DIR = path.join(__dirname, 'baseline');
const CURRENT_DIR  = path.join(__dirname, 'current');
const DIFF_DIR     = path.join(__dirname, 'diff');

// Seuil de tolerance : fraction de pixels differents acceptee
const THRESHOLD_FRACTION = 0.001; // 0.1 %

// Tolerance pixelmatch par pixel (0..1, 0.1 = tres stricte)
const PIXEL_THRESHOLD = 0.1;

fs.mkdirSync(DIFF_DIR, { recursive: true });

// ── Lecture PNG synchrone ──────────────────────────────────────────────
function readPng(filePath) {
  return new Promise((resolve, reject) => {
    const stream = fs.createReadStream(filePath).pipe(new PNG());
    stream.on('parsed', function () { resolve(this); });
    stream.on('error', reject);
  });
}

// ── Compare deux PNG ───────────────────────────────────────────────────
async function comparePng(baselineFile, currentFile, diffFile) {
  const [imgA, imgB] = await Promise.all([
    readPng(baselineFile),
    readPng(currentFile),
  ]);

  // Si dimensions differentes : FAIL automatique
  if (imgA.width !== imgB.width || imgA.height !== imgB.height) {
    return {
      status: 'FAIL',
      reason: `dimensions differentes (baseline: ${imgA.width}x${imgA.height}, current: ${imgB.width}x${imgB.height})`,
      diffPct: 100,
    };
  }

  const totalPixels = imgA.width * imgA.height;
  const diffImg     = new PNG({ width: imgA.width, height: imgA.height });

  const numDiff = pixelmatch(
    imgA.data, imgB.data, diffImg.data,
    imgA.width, imgA.height,
    { threshold: PIXEL_THRESHOLD, includeAA: false }
  );

  // Ecrire l'image de diff
  const diffBuffer = PNG.sync.write(diffImg);
  fs.writeFileSync(diffFile, diffBuffer);

  const diffPct = (numDiff / totalPixels) * 100;
  const pass    = diffPct <= (THRESHOLD_FRACTION * 100);

  return {
    status:  pass ? 'PASS' : 'FAIL',
    diffPct: diffPct,
    numDiff,
    totalPixels,
    reason:  pass ? null : `${diffPct.toFixed(3)}% des pixels differents (${numDiff}/${totalPixels})`,
  };
}

// ── Main ───────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(CURRENT_DIR)) {
    console.error('Dossier current/ introuvable. Lancez d\'abord : npm run check');
    process.exit(1);
  }
  if (!fs.existsSync(BASELINE_DIR)) {
    console.error('Dossier baseline/ introuvable. Lancez d\'abord : npm run baseline');
    process.exit(1);
  }

  const currentFiles = fs.readdirSync(CURRENT_DIR).filter(f => f.endsWith('.png'));

  if (currentFiles.length === 0) {
    console.error('Aucun PNG dans current/. Lancez d\'abord : npm run check');
    process.exit(1);
  }

  const results = [];
  let failCount = 0;
  let passCount = 0;

  for (const file of currentFiles.sort()) {
    const baselineFile = path.join(BASELINE_DIR, file);
    const currentFile  = path.join(CURRENT_DIR,  file);
    const diffFile     = path.join(DIFF_DIR,      file);

    if (!fs.existsSync(baselineFile)) {
      results.push({ file, status: 'FAIL', reason: 'baseline manquante' });
      failCount++;
      continue;
    }

    try {
      const result = await comparePng(baselineFile, currentFile, diffFile);
      results.push({ file, ...result });
      if (result.status === 'PASS') {
        passCount++;
      } else {
        failCount++;
      }
    } catch (err) {
      results.push({ file, status: 'FAIL', reason: `erreur lecture PNG : ${err.message}` });
      failCount++;
    }
  }

  // ── Affichage du recapitulatif ─────────────────────────────────────
  const colWidth = Math.max(...results.map(r => r.file.length), 20) + 2;

  console.log('\n' + '='.repeat(colWidth + 30));
  console.log('RECAPITULATIF TESTS VISUELS');
  console.log('='.repeat(colWidth + 30));
  console.log(`${'Fichier'.padEnd(colWidth)} ${'Statut'.padEnd(8)} Difference`);
  console.log('-'.repeat(colWidth + 30));

  for (const r of results) {
    const pct    = r.diffPct !== undefined ? `${r.diffPct.toFixed(3)}%` : '';
    const reason = r.reason  || pct;
    const badge  = r.status === 'PASS' ? 'PASS' : 'FAIL';
    console.log(`${r.file.padEnd(colWidth)} ${badge.padEnd(8)} ${reason}`);
  }

  console.log('='.repeat(colWidth + 30));
  console.log(`Total : ${passCount} PASS / ${failCount} FAIL / ${results.length} captures`);
  console.log('='.repeat(colWidth + 30));

  if (failCount > 0) {
    console.log(`\nImages de diff disponibles dans : tests/visual/diff/`);
    console.log(`${failCount} regression(s) detectee(s). Corrigez avant de committer.`);
    process.exit(1);
  } else {
    console.log('\nTous les tests passent. Aucune regression visuelle detectee.');
  }
}

main().catch(err => {
  console.error('Erreur fatale diff.js :', err);
  process.exit(1);
});
