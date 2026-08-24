/**
 * Automated Question Bank & Study Data Integrity Validator
 * Data Dojo (Quiz Simulator)
 * 
 * Run with: node tools/validate_bank.js
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const baseDir = path.resolve(__dirname, '..');

const questionFiles = [
  { file: 'questions.js', name: 'Core Questions (Demo + DP-600)' },
  { file: 'questions_databricks.js', name: 'Databricks Data Analyst' },
  { file: 'questions_databricks_genai.js', name: 'Databricks GenAI (EN)' },
  { file: 'questions_databricks_genai_es.js', name: 'Databricks GenAI (ES)' },
  { file: 'questions_unir_viz.js', name: 'UNIR Viz Interactiva' },
  { file: 'questions_unir_herr.js', name: 'UNIR Herramientas Viz' },
  { file: 'questions_unah_tesis.js', name: 'UNAH Tesis' },
  { file: 'questions_databricks_fundamentals.js', name: 'Databricks Fundamentals' },
  { file: 'questions_databricks_aibi.js', name: 'Databricks AI/BI' },
  { file: 'questions_databricks_sql_analytics.js', name: 'Databricks SQL Analytics' }
];

const studyFiles = [
  'study_databricks.js',
  'study_databricks_genai.js',
  'study_unir_viz.js',
  'study_unir_herr.js',
  'study_unah_tesis.js',
  'study_databricks_fundamentals.js',
  'flashcards_databricks.js',
  'conceptos_databricks.js',
  'comandos_sql_databricks.js',
  'comandos_sql_genai.js'
];

console.log('===============================================================');
console.log(' DATA DOJO - QUESTION BANK & STUDY INTEGRITY VALIDATOR');
console.log('===============================================================\n');

let globalTotalQuestions = 0;
let globalErrors = 0;
let globalWarnings = 0;

console.log('---------------------------------------------------------------');
console.log(' QUESTION BANKS VALIDATION');
console.log('---------------------------------------------------------------');

questionFiles.forEach(entry => {
  const filePath = path.join(baseDir, entry.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`  ! File not found: ${entry.file}`);
    return;
  }

  const sandbox = {
    window: {},
    console: { log: () => {}, warn: () => {}, error: () => {} }
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);

  try {
    const code = fs.readFileSync(filePath, 'utf8');
    vm.runInContext(code, sandbox);
  } catch (err) {
    console.error(`  ✗ Syntax error in ${entry.file}:`, err.message);
    globalErrors++;
    return;
  }

  // Extract questions from sandbox
  const questions = sandbox.questionsData || sandbox.window.questionsData ||
                    sandbox.questionsDatabricksGenAI || sandbox.window.questionsDatabricksGenAI ||
                    sandbox.questionsDatabricksGenAIEs || sandbox.window.questionsDatabricksGenAIEs ||
                    sandbox.questionsDatabricks || sandbox.window.questionsDatabricks ||
                    sandbox.questionsUnirViz || sandbox.window.questionsUnirViz ||
                    sandbox.questionsUnirHerr || sandbox.window.questionsUnirHerr ||
                    sandbox.questionsUnahTesis || sandbox.window.questionsUnahTesis ||
                    sandbox.questionsDatabricksFundamentals || sandbox.window.questionsDatabricksFundamentals ||
                    sandbox.questionsDatabricksAibi || sandbox.window.questionsDatabricksAibi ||
                    sandbox.questionsDatabricksSqlAnalytics || sandbox.window.questionsDatabricksSqlAnalytics ||
                    [];

  if (!Array.isArray(questions) || questions.length === 0) {
    console.warn(`  ! No questions array found in: ${entry.file}`);
    return;
  }

  globalTotalQuestions += questions.length;
  let bankErrors = 0;
  let bankWarnings = 0;
  const courseLangIdSet = new Set();

  questions.forEach((q, idx) => {
    const qNum = idx + 1;
    const prefix = `[${entry.name} Q#${qNum}]`;

    // 1. ID Uniqueness scoped by courseId + lang
    if (q.id === undefined || q.id === null || q.id === '') {
      console.error(`  ✗ ${prefix} Missing required 'id'`);
      bankErrors++;
    } else {
      const compositeKey = `${q.courseId || 'default'}:${q.lang || 'all'}:${q.id}`;
      if (courseLangIdSet.has(compositeKey)) {
        console.error(`  ✗ ${prefix} Duplicate ID within course/lang: '${compositeKey}'`);
        bankErrors++;
      }
      courseLangIdSet.add(compositeKey);
    }

    // 2. Prompt check
    if (!q.prompt || typeof q.prompt !== 'string' || q.prompt.trim().length < 4) {
      console.error(`  ✗ ${prefix} Invalid or empty prompt`);
      bankErrors++;
    }

    // 3. Options check (supports text, blocks, or string)
    if (!Array.isArray(q.options) || q.options.length < 2) {
      console.error(`  ✗ ${prefix} Options must be an array with at least 2 items`);
      bankErrors++;
    } else {
      q.options.forEach((opt, optIdx) => {
        if (!opt) {
          console.error(`  ✗ ${prefix} Option #${optIdx + 1} is null/undefined`);
          bankErrors++;
        } else {
          const hasText = typeof opt === 'string' || opt.text !== undefined;
          const hasBlocks = Array.isArray(opt.blocks) && opt.blocks.length > 0;
          if (!hasText && !hasBlocks) {
            console.error(`  ✗ ${prefix} Option #${optIdx + 1} missing both text and blocks property`);
            bankErrors++;
          }
        }
      });
    }

    // 4. Correct Answer check (handles correctIds, correctId, correctAnswer, acceptedAnswer, option.isCorrect)
    const hasCorrectIds = Array.isArray(q.correctIds) && q.correctIds.length > 0;
    const hasCorrectId = q.correctId !== undefined && q.correctId !== null;
    const hasCorrectAnswer = q.correctAnswer !== undefined && q.correctAnswer !== null;
    const hasAcceptedAnswer = q.acceptedAnswer && (q.acceptedAnswer.id || q.acceptedAnswer.text);
    const hasOptionIsCorrect = Array.isArray(q.options) && q.options.some(o => o && (o.isCorrect === true || o.correct === true));

    if (!hasCorrectIds && !hasCorrectId && !hasCorrectAnswer && !hasAcceptedAnswer && !hasOptionIsCorrect) {
      console.error(`  ✗ ${prefix} No correct answer specified`);
      bankErrors++;
    }

    // 5. Explanation check
    const hasExplanation = (typeof q.explanation === 'string' && q.explanation.trim().length > 3) ||
                           (q.acceptedAnswer && typeof q.acceptedAnswer.explanation === 'string' && q.acceptedAnswer.explanation.trim().length > 3) ||
                           (typeof q.feedback === 'string' && q.feedback.trim().length > 3);
    if (!hasExplanation) {
      bankWarnings++;
    }
  });

  globalErrors += bankErrors;
  globalWarnings += bankWarnings;

  const status = bankErrors === 0 ? '✓ VALID' : `✗ ${bankErrors} ERRORS`;
  console.log(`  ${status.padEnd(12)} | ${entry.name.padEnd(32)} | ${String(questions.length).padStart(5)} Qs | ${bankWarnings} warnings | (${entry.file})`);
});

console.log('---------------------------------------------------------------');
console.log(`Total questions verified: ${globalTotalQuestions}`);
console.log(`Total errors:            ${globalErrors}`);
console.log(`Total warnings:          ${globalWarnings}`);
console.log('===============================================================\n');

// 2. Validate Study Hub Data
console.log('---------------------------------------------------------------');
console.log(' STUDY HUB DATA INTEGRITY');
console.log('---------------------------------------------------------------');

const studySandbox = {
  window: {},
  document: { addEventListener: () => {} },
  localStorage: { getItem: () => null, setItem: () => {} },
  console: { log: () => {}, warn: () => {}, error: () => {} }
};
studySandbox.window = studySandbox;
vm.createContext(studySandbox);

studyFiles.forEach(file => {
  const filePath = path.join(baseDir, file);
  if (fs.existsSync(filePath)) {
    try {
      const code = fs.readFileSync(filePath, 'utf8');
      vm.runInContext(code, studySandbox);
      console.log(`  ✓ Loaded: ${file}`);
    } catch (e) {
      console.error(`  ✗ Error in ${file}:`, e.message);
      globalErrors++;
    }
  }
});

const studyData = studySandbox.studyData || studySandbox.window.studyData || {};
const studyCourses = Object.keys(studyData);

console.log('\n  Registered Study Courses:');
studyCourses.forEach(courseId => {
  const course = studyData[courseId];
  if (Array.isArray(course)) {
    let totalItems = 0;
    course.forEach(section => {
      totalItems += (section.items || []).length;
    });
    console.log(`  ✓ ${courseId.padEnd(28)} | ${String(course.length).padStart(2)} secciones | ${String(totalItems).padStart(3)} temas`);
  } else if (course && typeof course === 'object') {
    const flashcardsCount = (course.flashcards || []).length;
    const temasCount = (course.temas || []).length;
    const conceptosCount = (course.conceptos || []).length;
    console.log(`  ✓ ${courseId.padEnd(28)} | ${flashcardsCount} flashcards | ${temasCount} temas | ${conceptosCount} conceptos`);
  }
});

console.log('\n===============================================================');
if (globalErrors === 0) {
  console.log(' ALL QUESTION BANKS AND STUDY MODULES PASSED VALIDATION! ✓');
  console.log('===============================================================\n');
  process.exit(0);
} else {
  console.error(` VALIDATION FAILED WITH ${globalErrors} ERRORS! ✗`);
  console.log('===============================================================\n');
  process.exit(1);
}
