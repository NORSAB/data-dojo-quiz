/**
 * Author: Antigravity (Gemini 3.7 Flash) | 2026-08-26 08:58 CST
 * Purpose: Validates complete AI-103 integration (356 EN + 356 ES twin questions, study modules, resources).
 */

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const sandbox = {
  window: {
    questionsData: [],
    studyData: {},
    studyFlashcards: {},
    studyResources: {}
  }
};
vm.createContext(sandbox);

function runFile(relPath) {
  const code = fs.readFileSync(path.join(__dirname, '..', relPath), 'utf8');
  vm.runInContext(code, sandbox);
}

runFile('questions_azure_ai103.js');
runFile('questions_azure_ai103_es.js');
runFile('study_azure_ai103.js');
runFile('study_azure_ai103_resources.js');

const allQuestions = sandbox.window.questionsData.filter(q => q.courseId === 'azure-ai-103');
const enQuestions = allQuestions.filter(q => q.lang === 'en');
const esQuestions = allQuestions.filter(q => q.lang === 'es');

console.log('--- AI-103 Validation Results ---');
console.log(`Total questions for azure-ai-103: ${allQuestions.length}`);
console.log(`English questions: ${enQuestions.length}`);
console.log(`Spanish questions: ${esQuestions.length}`);

if (enQuestions.length !== 356 || esQuestions.length !== 356) {
  console.error(`FAIL: Expected 356 EN and 356 ES, got ${enQuestions.length} and ${esQuestions.length}`);
  process.exit(1);
}

// Verify 1:1 twin mapping
const esMap = new Map(esQuestions.map(q => [q.id, q]));
for (const qEn of enQuestions) {
  const twinId = `${qEn.id}-es`;
  const qEs = esMap.get(twinId);
  if (!qEs) {
    console.error(`FAIL: Missing Spanish twin for ${qEn.id}`);
    process.exit(1);
  }
  if (qEn.correctIds.join(',') !== qEs.correctIds.join(',')) {
    console.error(`FAIL: Correct IDs mismatch between ${qEn.id} and ${twinId}`);
    process.exit(1);
  }
  if (qEn.options.length !== qEs.options.length) {
    console.error(`FAIL: Options count mismatch between ${qEn.id} and ${twinId}`);
    process.exit(1);
  }
}

// Verify Study Data
const studySections = sandbox.window.studyData['azure-ai-103'] || [];
console.log(`Study module sections: ${studySections.length}`);
if (studySections.length < 5) {
  console.error(`FAIL: Expected at least 5 study sections for AI-103, found ${studySections.length}`);
  process.exit(1);
}

// Verify Study Resources
const flashcards = sandbox.window.studyFlashcards['azure-ai-103'] || [];
console.log(`Study flashcards: ${flashcards.length}`);
if (flashcards.length !== 356) {
  console.error(`FAIL: Expected 356 flashcards for AI-103, found ${flashcards.length}`);
  process.exit(1);
}

// Verify AI-103 specific Terms, Scenarios & SDK Code Examples
const conceptos = sandbox.window.conceptosAzureAi103 || [];
const patterns = sandbox.window.azureAi103Patterns || [];
const comandos = sandbox.window.comandosAzureAi103 || [];

console.log(`Azure AI Terms/Competencies categories: ${conceptos.length}`);
console.log(`Azure AI Architecture Scenarios categories: ${patterns.length}`);
console.log(`Azure AI SDK/Code Examples categories: ${comandos.length}`);

if (conceptos.length === 0 || patterns.length === 0 || comandos.length === 0) {
  console.error('FAIL: Missing dedicated Azure AI-103 terms, patterns or SDK code examples.');
  process.exit(1);
}

console.log('SUCCESS: All 356 EN + 356 ES questions and dedicated Azure AI study resources validated perfectly!');
