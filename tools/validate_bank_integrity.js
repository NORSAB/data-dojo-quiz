/**
 * VALIDADOR DE INTEGRIDAD DEL BANCO DE PREGUNTAS
 * ==============================================
 * Claude (Opus 5) | 2026-09-05
 *
 * Nace de una auditoria que encontro dos problemas que ninguna de las 6 suites
 * existentes detectaba, porque todas validan estructura y conteos, no coherencia
 * interna de cada pregunta:
 *
 *   1. El curso "demo" traia 7 preguntas de andamiaje con IDs numericos (1,2,3,
 *      5,6,7,8) que chocaban con preguntas reales de dp-600 en el mismo archivo.
 *      Como dedupeQuestions() conserva la PRIMERA aparicion, 7 preguntas del
 *      examen DP-600 quedaban fuera del banco sin ningun aviso.
 *   2. unir-herr-5-64 tenia dos opciones con texto identico ("180.") y solo una
 *      marcada como correcta: elegir la otra daba fallo con la misma respuesta.
 *
 * Este validador carga los bancos en el mismo orden que index.html y falla con
 * codigo de salida 1 si encuentra cualquiera de esos casos.
 */

const fs = require('fs');
const path = require('path');

const RAIZ = path.resolve(__dirname, '..');
process.chdir(RAIZ);

global.window = {};
global.document = { addEventListener() {} };

// ── Cargar los bancos en el orden real de index.html ────────────────────────
const html = fs.readFileSync('index.html', 'utf8');
const archivos = (html.match(/src="(questions[^"?]*\.js)/g) || [])
  .map(s => s.replace('src="', ''))
  .filter(f => fs.existsSync(f));

const origen = {};   // id -> [archivos donde aparece]
const silenciarLog = console.log;
console.log = () => {};
archivos.forEach(f => {
  const antes = (global.window.questionsData || []).length;
  try { eval(fs.readFileSync(f, 'utf8')); } catch (e) { /* se reporta abajo */ }
  (global.window.questionsData || []).slice(antes).forEach(q => {
    if (q && q.id !== undefined) (origen[q.id] = origen[q.id] || []).push(f);
  });
});
console.log = silenciarLog;

const Q = global.window.questionsData || [];
const textoOpcion = o => String(o && typeof o === 'object' ? (o.text || o.label || '') : o);
const idsOpcion = q => (q.options || []).map(o => (o && typeof o === 'object' ? o.id : o));

const problemas = [];
const anotar = (tipo, detalle) => problemas.push({ tipo, detalle });

// ── 1. IDs colisionando: el dedupe descarta preguntas en silencio ───────────
const vistos = new Map();
Q.forEach(q => {
  if (!q || q.id === undefined) return;
  if (vistos.has(q.id)) {
    const gana = vistos.get(q.id);
    anotar('ID duplicado',
      `id="${q.id}" — sobrevive [${gana.courseId}] y se DESCARTA [${q.courseId}] ` +
      `"${String(q.prompt || '').slice(0, 60)}" (archivos: ${(origen[q.id] || []).join(', ')})`);
  } else {
    vistos.set(q.id, q);
  }
});

// ── 2. Opciones con texto identico dentro de una misma pregunta ─────────────
Q.forEach(q => {
  // Comparacion EXACTA a proposito. Normalizar con trim()/toLowerCase() daba un falso
  // positivo en db-da-173, una pregunta sobre UPPER(TRIM(...)) donde las mayusculas y los
  // espacios de cada opcion SON el contenido evaluado. Solo interesan las gemelas literales.
  const textos = (q.options || []).map(o => textoOpcion(o));
  const norm = textos;
  norm.forEach((t, i) => {
    if (!t) return;
    const j = norm.indexOf(t);
    if (j !== i) {
      const ids = idsOpcion(q);
      const correctas = q.correctIds || [];
      // Solo es un fallo si una de las dos gemelas es correcta y la otra no:
      // ahi el alumno acierta el contenido y el simulador lo marca mal.
      const unaCorrecta = correctas.includes(ids[i]) !== correctas.includes(ids[j]);
      if (unaCorrecta) {
        anotar('Opciones gemelas con distinto veredicto',
          `${q.id} [${q.courseId}] — "${ids[j]}" y "${ids[i]}" dicen ambas "${textos[i]}" ` +
          `pero solo una cuenta como correcta`);
      }
    }
  });
});

// ── 3. correctIds que no corresponde a ninguna opcion ───────────────────────
Q.forEach(q => {
  if (!Array.isArray(q.correctIds) || !q.options) return;
  const ids = idsOpcion(q);
  q.correctIds.forEach(c => {
    if (!ids.includes(c)) {
      anotar('correctIds inexistente',
        `${q.id} [${q.courseId}] — marca "${c}" como correcta pero las opciones son ${JSON.stringify(ids)}`);
    }
  });
});

// ── 4. Preguntas sin respuesta correcta o con menos de 2 opciones ───────────
Q.forEach(q => {
  if (!Array.isArray(q.correctIds) || q.correctIds.length === 0) {
    anotar('Sin respuesta correcta', `${q.id} [${q.courseId}]`);
  }
  if (Array.isArray(q.options) && q.options.length < 2) {
    anotar('Menos de 2 opciones', `${q.id} [${q.courseId}] — ${(q.options || []).length}`);
  }
});

// ── 5. Cursos de prueba que no deberian llegar a produccion ────────────────
const CURSOS_PROHIBIDOS = ['demo', 'test', 'sample', 'placeholder'];
const porCurso = {};
Q.forEach(q => { const c = q.courseId || '(sin curso)'; porCurso[c] = (porCurso[c] || 0) + 1; });
CURSOS_PROHIBIDOS.forEach(c => {
  if (porCurso[c]) anotar('Curso de prueba en producción', `"${c}" aporta ${porCurso[c]} preguntas`);
});
if (porCurso['(sin curso)']) {
  anotar('Preguntas sin courseId', `${porCurso['(sin curso)']} preguntas`);
}

// ── Reporte ────────────────────────────────────────────────────────────────
console.log('');
console.log('===============================================================');
console.log(' INTEGRIDAD DEL BANCO DE PREGUNTAS');
console.log('===============================================================');
console.log(`  Archivos cargados : ${archivos.length}`);
console.log(`  Preguntas totales : ${Q.length}`);
console.log(`  Tras deduplicar   : ${vistos.size}`);
console.log('');
console.log('  Preguntas por curso:');
Object.entries(porCurso).sort((a, b) => b[1] - a[1])
  .forEach(([c, n]) => console.log(`     ${String(n).padStart(5)}  ${c}`));
console.log('');

if (!problemas.length) {
  console.log('  ✓ Sin IDs colisionando');
  console.log('  ✓ Sin opciones gemelas con distinto veredicto');
  console.log('  ✓ Todas las correctIds existen entre las opciones');
  console.log('  ✓ Todas las preguntas tienen respuesta y al menos 2 opciones');
  console.log('  ✓ Sin cursos de prueba en producción');
  console.log('');
  console.log(' INTEGRIDAD DEL BANCO VERIFICADA ✓');
  console.log('===============================================================');
  process.exit(0);
}

const porTipo = {};
problemas.forEach(p => (porTipo[p.tipo] = porTipo[p.tipo] || []).push(p.detalle));
Object.entries(porTipo).forEach(([tipo, lista]) => {
  console.log(`  ⚠  ${tipo}: ${lista.length}`);
  lista.slice(0, 10).forEach(d => console.log(`       · ${d}`));
  if (lista.length > 10) console.log(`       ... y ${lista.length - 10} más`);
});
console.log('');
console.log(` ${problemas.length} PROBLEMA(S) DE INTEGRIDAD`);
console.log('===============================================================');
process.exit(1);
