/**
 * Codex (GPT-5) | 2026-08-23 21:55 CST
 * Valida banco EN/ES, módulo de estudio, subsecciones contraídas y compatibilidad del payload Supabase.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');

function assertJsonEqual(actual, expected, message) {
  assert.strictEqual(JSON.stringify(actual), JSON.stringify(expected), message);
}

function loadQuestionBank(filename) {
  const resolved = path.join(root, filename);
  delete require.cache[require.resolve(resolved)];
  return require(resolved);
}

function validateQuestionShape(question) {
  assert(question.id, 'Pregunta sin id');
  assert.strictEqual(question.courseId, 'databricks-genai-engineer', `courseId inesperado: ${question.id}`);
  assert(['en', 'es'].includes(question.lang), `Idioma inválido: ${question.id}`);
  assert(question.domain, `Dominio vacío: ${question.id}`);
  assert(question.subdomain, `Subdominio vacío: ${question.id}`);
  assert(typeof question.prompt === 'string' && question.prompt.trim(), `Prompt vacío: ${question.id}`);
  assert(Array.isArray(question.options) && question.options.length >= 2, `Opciones inválidas: ${question.id}`);
  assert(Array.isArray(question.correctIds) && question.correctIds.length > 0, `correctIds inválido: ${question.id}`);
  const optionIds = new Set(question.options.map((option) => option.id));
  question.correctIds.forEach((id) => assert(optionIds.has(id), `Respuesta ${id} no existe: ${question.id}`));
}

function assertOneToOneTranslation(english, spanish, field) {
  const variants = new Map();
  const spanishById = new Map(spanish.map((question) => [question.id, question]));

  english.forEach((question) => {
    const twin = spanishById.get(`${question.id}-es`);
    assert(twin, `Falta gemela ES para ${question.id}`);
    if (!variants.has(question[field])) variants.set(question[field], new Set());
    variants.get(question[field]).add(twin[field]);
  });

  const inconsistent = [...variants.entries()].filter(([, translations]) => translations.size !== 1);
  assert.strictEqual(inconsistent.length, 0, `${field}: una etiqueta EN tiene múltiples traducciones ES`);
  return variants;
}

function loadStudyModule() {
  const context = { window: {} };
  const source = fs.readFileSync(path.join(root, 'study_databricks_genai.js'), 'utf8');
  vm.runInNewContext(source, context, { filename: 'study_databricks_genai.js' });
  return context.window.studyData['databricks-genai-engineer'];
}

function loadStudyResources(english, spanish) {
  const context = { window: { questionsData: [...english, ...spanish] } };
  const source = fs.readFileSync(path.join(root, 'study_databricks_genai_resources.js'), 'utf8');
  vm.runInNewContext(source, context, { filename: 'study_databricks_genai_resources.js' });
  return {
    flashcards: context.window.databricksGenAIFlashcards,
    concepts: context.window.conceptosDatabricksGenAI,
    patterns: context.window.databricksGenAIPatterns,
  };
}

function createLocalStorage(seed = {}) {
  const values = new Map(Object.entries(seed));
  return {
    get length() { return values.size; },
    key(index) { return [...values.keys()][index] ?? null; },
    getItem(key) { return values.has(key) ? values.get(key) : null; },
    setItem(key, value) { values.set(String(key), String(value)); },
    removeItem(key) { values.delete(key); },
    snapshot() { return Object.fromEntries(values); },
  };
}

function loadDataSync(localStorage) {
  const context = {
    localStorage,
    document: { addEventListener() {} },
    window: { addEventListener() {} },
    navigator: { sendBeacon() { return true; } },
    Blob: class Blob {},
    console,
    setTimeout() { return 1; },
    clearTimeout() {},
    Date,
  };
  const source = fs.readFileSync(path.join(root, 'supabase-sync.js'), 'utf8');
  vm.runInNewContext(`${source}\nglobalThis.__DataSync = DataSync;`, context, { filename: 'supabase-sync.js' });
  return context.__DataSync;
}

async function validateSupabaseCompatibility() {
  const mastery = { xp: 120, sectionsViewed: ['0-0'] };
  const progress = { answered: 12, correct: 9 };
  const localStorage = createLocalStorage({
    userProfile: JSON.stringify({ name: 'NorSab' }),
    userStats: JSON.stringify({ xp: 7536 }),
    databricks_genai_mastery: JSON.stringify(mastery),
    databricks_genai_progress: JSON.stringify(progress),
    theme: 'dark',
  });
  const DataSync = loadDataSync(localStorage);
  DataSync.deviceId = 'validator-device';

  const payload = DataSync.buildPayload();
  const expectedColumns = new Set([
    'device_id', 'profile', 'stats', 'certified_courses', 'course_progress',
    'course_mastery', 'completed_modules', 'quiz_history', 'dojo_streak',
    'app_state', 'full_backup', 'updated_at',
  ]);
  Object.keys(payload).forEach((key) => assert(expectedColumns.has(key), `Columna no documentada en payload: ${key}`));
  assertJsonEqual(payload.course_mastery.databricks_genai, mastery, 'La maestría GenAI no llegó al payload');
  assertJsonEqual(payload.course_progress.databricks_genai, progress, 'El progreso GenAI no llegó al payload');
  assert.strictEqual(payload.full_backup.theme, 'dark');

  const restoredStorage = createLocalStorage({ _last_sync: '0' });
  const RestoreSync = loadDataSync(restoredStorage);
  RestoreSync.isConfigured = true;
  RestoreSync.deviceId = 'validator-device';
  RestoreSync.client = {
    from() {
      return {
        select() { return this; },
        eq() { return this; },
        async single() {
          return {
            error: null,
            data: {
              updated_at: '2099-01-01T00:00:00.000Z',
              profile: { name: 'NorSab' },
              course_progress: { databricks_genai: progress },
              course_mastery: { databricks_genai: mastery },
              full_backup: null,
            },
          };
        },
      };
    },
  };
  await RestoreSync.loadFromCloud();
  assert.deepStrictEqual(JSON.parse(restoredStorage.getItem('databricks_genai_progress')), progress);
  assert.deepStrictEqual(JSON.parse(restoredStorage.getItem('databricks_genai_mastery')), mastery);
}

async function main() {
  const english = loadQuestionBank('questions_databricks_genai.js');
  const spanish = loadQuestionBank('questions_databricks_genai_es.js');

  assert.strictEqual(english.length, 383, 'El banco EN debe tener 383 preguntas');
  assert.strictEqual(spanish.length, 383, 'El banco ES debe tener 383 preguntas');
  [...english, ...spanish].forEach(validateQuestionShape);
  assert.strictEqual(new Set(english.map((question) => question.id)).size, english.length, 'IDs EN duplicados');
  assert.strictEqual(new Set(spanish.map((question) => question.id)).size, spanish.length, 'IDs ES duplicados');

  const domainMap = assertOneToOneTranslation(english, spanish, 'domain');
  const subdomainMap = assertOneToOneTranslation(english, spanish, 'subdomain');
  assert.strictEqual(domainMap.size, 6, 'Se esperaban 6 dominios EN');
  assert.strictEqual(subdomainMap.size, 65, 'Se esperaban 65 subdominios EN');

  const studySections = loadStudyModule();
  const studyItems = studySections.reduce((total, section) => total + section.items.length, 0);
  assert.strictEqual(studySections.length, 6, 'El módulo de estudio debe tener 6 dominios');
  assert.strictEqual(studyItems, 35, 'El módulo de estudio debe tener 35 temas');

  const resources = loadStudyResources(english, spanish);
  const conceptCount = resources.concepts.reduce((total, group) => total + group.conceptos.length, 0);
  const patternCount = resources.patterns.reduce((total, group) => total + group.items.length, 0);
  assert.strictEqual(resources.flashcards.length, 96, 'GenAI debe ofrecer 96 flashcards');
  assert.strictEqual(new Set(resources.flashcards.map((card) => card.domain)).size, 6, 'Las flashcards deben cubrir 6 dominios');
  assert(resources.flashcards.every((card) => card.front.includes('ENGLISH') && card.front.includes('ESPAÑOL')), 'Hay flashcards sin frente bilingüe');
  assert(resources.flashcards.every((card) => card.back.includes('ENGLISH') && card.back.includes('ESPAÑOL')), 'Hay flashcards sin reverso bilingüe');
  assert.strictEqual(resources.concepts.length, 6, 'Los términos deben agruparse en 6 dominios');
  assert.strictEqual(conceptCount, 65, 'Debe existir un término por cada subdominio validado');
  assert(resources.concepts.every((group) => group.conceptos.every((concept) => concept.contribucion.includes('ENGLISH') && concept.contribucion.includes('ESPAÑOL'))), 'Hay términos sin explicación bilingüe');
  assert.strictEqual(resources.patterns.length, 6, 'Los escenarios deben agruparse en 6 dominios');
  assert.strictEqual(patternCount, 24, 'GenAI debe ofrecer 24 escenarios de decisión');
  assert(resources.patterns.every((group) => group.items.every((item) => item.scenario.includes('ENGLISH') && item.scenario.includes('ESPAÑOL'))), 'Hay escenarios sin contenido bilingüe');

  const indexSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
  const workerSource = fs.readFileSync(path.join(root, 'sw.js'), 'utf8');
  const appSource = fs.readFileSync(path.join(root, 'script.js'), 'utf8');
  assert(indexSource.includes('study_databricks_genai_resources.js'), 'Falta cargar los recursos GenAI en index.html');
  assert(workerSource.includes("'./study_databricks_genai_resources.js'"), 'Falta cachear los recursos GenAI en sw.js');
  assert(appSource.includes("body.setAttribute('hidden', ''); // Start collapsed"), 'Las secciones deben crearse contraídas');
  assert(!appSource.includes('firstItemButton.click()'), 'El primer tema no debe abrirse automáticamente');
  assert((appSource.match(/class="unir-persona-cat-header unir-category-toggle" aria-expanded="false"/g) || []).length >= 4, 'Las categorías internas deben declararse contraídas');
  assert((appSource.match(/class="unir-category-body" id="\$\{categoryId\}" hidden/g) || []).length >= 4, 'El contenido de cada categoría interna debe iniciar oculto');
  assert(appSource.includes('function bindStudyCategoryToggles(panel)'), 'Falta enlazar el control de subsecciones internas');
  assert(appSource.includes("setStudyCategoryExpansion(panel, false);"), 'Contraer todo debe cerrar también las subsecciones internas');

  await validateSupabaseCompatibility();

  console.log('GenAI EN/ES: 383 + 383 preguntas válidas y emparejadas.');
  console.log('Etiquetas: 6 dominios y 65 subdominios EN con traducción ES consistente.');
  console.log('Estudio GenAI: 6 módulos y 35 temas disponibles.');
  console.log('Recursos GenAI: 96 flashcards, 65 términos y 24 escenarios bilingües; estado inicial contraído.');
  console.log('Supabase: payload compatible con el esquema y restauración genérica comprobada.');
}

main().catch((error) => {
  console.error(error.stack || error.message);
  process.exitCode = 1;
});
