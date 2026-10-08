/**
 * VALIDADOR DE COBERTURA BILINGUE
 * Claude (Opus 5.5) | 2026-10-08
 *
 * Norman pidio que todo exista en ingles y en espanol. Este validador carga los bancos en el
 * orden de index.html y falla (exit 1) si una pregunta no tiene su gemela en el otro idioma,
 * usando la misma regla que translate_toggle.js: id / id-es, id / id-en o el campo twinOf.
 * databricks-da es la excepcion historica: su espanol vive en translations_databricks_es.js.
 * Tambien revisa que los modulos de estudio y las flashcards tengan contenido en ambos idiomas.
 */
const fs = require('fs');
const path = require('path');
process.chdir(path.resolve(__dirname, '..'));

global.window = global;
global.document = { addEventListener() {}, getElementById() { return null; }, querySelector() { return null; } };
const log = console.log;
console.log = () => {};

const html = fs.readFileSync('index.html', 'utf8');
const scripts = (html.match(/src="([^"?]+\.js)/g) || []).map(s => s.slice(5))
  .filter(f => /^(questions|study_|flashcards_|translations_|i18n_study)/.test(f) && fs.existsSync(f));
scripts.forEach(f => { try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { /* algunos modulos esperan el DOM */ } });
console.log = log;

const Q = window.questionsData || [];
const problems = [];
const byCourse = {};
Q.forEach(q => (byCourse[q.courseId] = byCourse[q.courseId] || []).push(q));

function hasTwin(q, pool) {
  const id = String(q.id);
  const target = q.lang === 'es' ? 'en' : 'es';
  const base = q.twinOf !== undefined ? String(q.twinOf) : id.replace(/-(es|en)$/, '');
  const ids = new Set([base, `${base}-es`, `${base}-en`]);
  return pool.some(c => c.lang === target && (ids.has(String(c.id)) || String(c.twinOf) === id));
}

log('\n  Cobertura EN/ES por curso:');
Object.entries(byCourse).sort().forEach(([course, qs]) => {
  const en = qs.filter(q => q.lang === 'en').length;
  const es = qs.filter(q => q.lang === 'es').length;
  let missing;
  if (course === 'databricks-da') {
    const dict = window.databricksTranslations || {};
    missing = qs.filter(q => !dict[q.id]).map(q => q.id);
  } else {
    missing = qs.filter(q => !hasTwin(q, qs)).map(q => q.id);
  }
  log(`   ${missing.length ? '✗' : '✓'} ${course.padEnd(40)} EN ${String(en).padStart(4)}  ES ${String(es).padStart(4)}${missing.length ? `  sin pareja: ${missing.length}` : ''}`);
  if (missing.length) problems.push(`${course}: ${missing.length} preguntas sin pareja (${missing.slice(0, 5).join(', ')})`);
});

const study = window.studyData || {};
Object.entries(study).forEach(([course, sections]) => {
  (sections || []).forEach(sec => (sec.items || []).forEach(item => {
    const c = String(item.content || '');
    if (!/data-lang=["']en/.test(c) || !/data-lang=["']es/.test(c)) problems.push(`estudio ${course}: "${item.title}" no tiene bloques en y es`);
  }));
});

['databricksDAFlashcards', 'unirVizFlashcards', 'unirHerrFlashcards', 'unahTesisFlashcards'].forEach(key => {
  (window[key] || []).forEach((card, i) => {
    if (!card.pregunta_en || !card.pregunta_es || !card.respuesta_en || !card.respuesta_es) problems.push(`${key}[${i}] no es bilingue`);
  });
});

if (problems.length) {
  log(`\n  ${problems.length} problema(s):`);
  problems.slice(0, 30).forEach(p => log('   - ' + p));
  process.exit(1);
}
log('\n  COBERTURA BILINGUE VERIFICADA ✓ (preguntas, estudio y flashcards)\n');
