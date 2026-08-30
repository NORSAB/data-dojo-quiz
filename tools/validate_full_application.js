/**
 * Author: Antigravity (Gemini 3.7 Flash) | 2026-08-30 07:25 CST
 * Purpose: Complete end-to-end audit and verification of all application modules, banks, engines, and assets.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

console.log('================================================================');
console.log('🥋 THE DATA DOJO - EXHAUSTIVE APPLICATION VERIFICATION SUITE');
console.log('================================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let errors = [];

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✓ ${message}`);
  } else {
    errors.push(message);
    console.error(`  ✗ FAIL: ${message}`);
  }
}

// 1. JS SYNTAX CHECK FOR ALL JS FILES
console.log('1. Checking JavaScript Syntax Across All Project Files...');
const jsFiles = fs.readdirSync(ROOT).filter(f => f.endsWith('.js') && !f.startsWith('.'));
for (const file of jsFiles) {
  try {
    const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
    new vm.Script(code);
    assert(true, `Syntax check passed for ${file}`);
  } catch (err) {
    assert(false, `Syntax error in ${file}: ${err.message}`);
  }
}

// 2. SANDBOX ENVIRONMENT LOAD
console.log('\n2. Loading Full Virtual DOM & Environment...');
  function createMockElement() {
    return {
      setAttribute: () => {},
      getAttribute: () => '',
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {}, toggle: () => {} },
      style: {},
      innerHTML: '',
      textContent: '',
      dataset: {},
      querySelector: () => createMockElement(),
      querySelectorAll: () => [createMockElement(), createMockElement()],
      addEventListener: () => {}
    };
  }

  const mockLocalStorage = {};
  const mockDoc = {
    documentElement: { dataset: {}, setAttribute: () => {}, classList: { add: () => {}, remove: () => {}, toggle: () => {} } },
    getElementById: () => createMockElement(),
    querySelector: () => createMockElement(),
    querySelectorAll: () => [createMockElement(), createMockElement()],
    addEventListener: () => {},
    createElement: () => createMockElement(),
    createTreeWalker: () => ({ nextNode: () => null }),
    head: { appendChild: () => {} },
    body: { classList: { add: () => {}, remove: () => {}, toggle: () => {} } },
    readyState: 'complete'
  };

  const sandbox = {
    window: {
      questionsData: [],
      studyData: {},
      studyFlashcards: {},
      studyResources: {},
      addEventListener: () => {},
      removeEventListener: () => {},
      localStorage: {
        getItem: (k) => mockLocalStorage[k] || null,
        setItem: (k, v) => { mockLocalStorage[k] = String(v); },
        removeItem: (k) => { delete mockLocalStorage[k]; },
        clear: () => { for (const k in mockLocalStorage) delete mockLocalStorage[k]; }
      }
    },
    document: mockDoc,
    localStorage: {
      getItem: (k) => mockLocalStorage[k] || null,
      setItem: (k, v) => { mockLocalStorage[k] = String(v); },
      removeItem: (k) => { delete mockLocalStorage[k]; }
    },
    console: console,
    Node: { TEXT_NODE: 3, ELEMENT_NODE: 1 },
    NodeFilter: { SHOW_TEXT: 4 },
    MutationObserver: class { observe() {} disconnect() {} },
    setTimeout: setTimeout,
    clearTimeout: clearTimeout,
    setInterval: setInterval,
    clearInterval: clearInterval
  };
sandbox.window.window = sandbox.window;
sandbox.window.document = sandbox.document;
vm.createContext(sandbox);

function runInSandbox(file) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  vm.runInContext(code, sandbox);
}

// Load Question Banks
const questionBankFiles = [
  'questions.js',
  'questions_databricks.js',
  'questions_databricks_genai.js',
  'questions_databricks_genai_es.js',
  'questions_databricks_fundamentals.js',
  'questions_databricks_aibi.js',
  'questions_databricks_sql_analytics.js',
  'questions_unir_viz.js',
  'questions_unir_herr.js',
  'questions_unah_tesis.js',
  'questions_azure_ai103.js',
  'questions_azure_ai103_es.js'
];

for (const qf of questionBankFiles) {
  if (fs.existsSync(path.join(ROOT, qf))) {
    runInSandbox(qf);
  }
}

// Load Study Modules
const studyFiles = [
  'study_data.js',
  'study_databricks.js',
  'study_databricks_urgent.js',
  'study_databricks_expanded.js',
  'study_databricks_domains.js',
  'study_databricks_genai.js',
  'study_databricks_genai_resources.js',
  'study_azure_ai103.js',
  'study_azure_ai103_resources.js',
  'study_unir_herr.js',
  'study_unah_tesis.js'
];

for (const sf of studyFiles) {
  if (fs.existsSync(path.join(ROOT, sf))) {
    runInSandbox(sf);
  }
}

// Load Core Logic & Features
runInSandbox('app_i18n.js');
runInSandbox('features.js');

console.log('\n3. Verifying Question Banks Integrity...');
const questions = sandbox.window.questionsData || [];
assert(questions.length > 2000, `Total question bank size is robust (${questions.length} questions loaded)`);

const coursesFound = new Set(questions.map(q => q.courseId));
assert(coursesFound.has('azure-ai-103'), 'Course azure-ai-103 loaded');
assert(coursesFound.has('databricks-genai-engineer'), 'Course databricks-genai-engineer loaded');
assert(coursesFound.has('dp-600'), 'Course dp-600 loaded');
assert(coursesFound.has('databricks-da'), 'Course databricks-da loaded');

// Validate questions structure
let validStructureCount = 0;
for (const q of questions) {
  if (q.id && q.prompt && Array.isArray(q.options) && Array.isArray(q.correctIds)) {
    validStructureCount++;
  }
}
assert(validStructureCount === questions.length, `All ${questions.length} questions have valid id, prompt, options, and correctIds`);

console.log('\n4. Verifying Interactive Engines & Modules...');
assert(typeof sandbox.window.CliSimulator === 'object', 'window.CliSimulator module loaded');
assert(typeof sandbox.window.CliSimulator.renderTerminal === 'function', 'CliSimulator.renderTerminal function ready');
assert(typeof sandbox.window.OralExamMode === 'object', 'window.OralExamMode module loaded');
assert(typeof sandbox.window.OralExamMode.open === 'function', 'OralExamMode.open function ready');
assert(typeof sandbox.window.ArchitectureCanvas === 'object', 'window.ArchitectureCanvas module loaded');
assert(typeof sandbox.window.ArchitectureCanvas.render === 'function', 'ArchitectureCanvas.render function ready');
assert(typeof sandbox.window.SurvivalMode === 'object', 'window.SurvivalMode module loaded');
assert(typeof sandbox.window.SurvivalMode.start === 'function', 'SurvivalMode.start function ready');
assert(typeof sandbox.window.ErrorRescueCards === 'object', 'window.ErrorRescueCards module loaded');
assert(typeof sandbox.window.ErrorRescueCards.openRescueDeck === 'function', 'ErrorRescueCards.openRescueDeck function ready');
assert(typeof sandbox.window.PromptPlayground === 'object', 'window.PromptPlayground module loaded');
assert(typeof sandbox.window.PromptPlayground.render === 'function', 'PromptPlayground.render function ready');
assert(typeof sandbox.window.SpotlightSearch === 'object', 'window.SpotlightSearch module loaded');
assert(typeof sandbox.window.DailyQuickDrill === 'object', 'window.DailyQuickDrill module loaded');
assert(typeof sandbox.window.DiagnosticMode === 'object', 'window.DiagnosticMode module loaded');
assert(typeof sandbox.window.StudyGuidePDF === 'object', 'window.StudyGuidePDF module loaded');

console.log('\n5. Verifying PWA Service Worker Cache Consistency...');
const swCode = fs.readFileSync(path.join(ROOT, 'sw.js'), 'utf8');
const indexCode = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const buildTsMatch = swCode.match(/const BUILD_TIMESTAMP = '([^']+)'/);
assert(buildTsMatch && buildTsMatch[1], `BUILD_TIMESTAMP found in sw.js: ${buildTsMatch ? buildTsMatch[1] : 'NONE'}`);
const ts = buildTsMatch[1];

assert(indexCode.includes(`styles.css?v=${ts}`), `index.html references styles.css?v=${ts}`);
assert(indexCode.includes(`script.js?v=${ts}`), `index.html references script.js?v=${ts}`);
assert(indexCode.includes(`features.js?v=${ts}`), `index.html references features.js?v=${ts}`);

// Check all assets in sw.js exist on disk
const assetMatches = swCode.match(/ASSETS_TO_CACHE = \[([\s\S]*?)\];/);
if (assetMatches) {
  const rawList = assetMatches[1].split(',').map(s => s.trim().replace(/['"\s]/g, '')).filter(Boolean);
  let allAssetsExist = true;
  for (const asset of rawList) {
    if (asset === './') continue;
    const cleanPath = asset.replace(/^\.\//, '').split('?')[0];
    const exists = fs.existsSync(path.join(ROOT, cleanPath));
    if (!exists) {
      allAssetsExist = false;
      assert(false, `Cached asset missing on disk: ${cleanPath}`);
    }
  }
  if (allAssetsExist) {
    assert(true, `All ${rawList.length} assets declared in ASSETS_TO_CACHE physically exist on disk`);
  }
}

console.log('\n================================================================');
if (errors.length === 0) {
  console.log(`🎉 ALL MODULES & SUITES VERIFIED PERFECTLY! (${passedChecks}/${totalChecks} checks passed)`);
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error(`❌ VERIFICATION FAILED WITH ${errors.length} ERRORS (${passedChecks}/${totalChecks} checks passed)`);
  console.log('================================================================\n');
  process.exit(1);
}
