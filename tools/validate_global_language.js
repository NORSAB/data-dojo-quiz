#!/usr/bin/env node
/**
 * Codex (GPT-5) | 2026-08-23 22:17 CST
 * Verifica el selector global persistente, su alcance y el cambio de preguntas sin reiniciar el módulo.
 */
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.resolve(__dirname, '..');
const read = (filename) => fs.readFileSync(path.join(root, filename), 'utf8');

const index = read('index.html');
const styles = read('styles.css');
const appI18n = read('app_i18n.js');
const script = read('script.js');
const questionBridge = read('translate_toggle.js');
const features = read('features.js');
const serviceWorker = read('sw.js');

assert.strictEqual((index.match(/id="global-language-toggle"/g) || []).length, 1, 'Debe existir un único selector global ES/EN.');
assert(index.includes('onclick="toggleAppLanguage()"'), 'El selector global no expone una activación disponible en todas las pantallas.');
assert(index.indexOf('app_i18n.js') < index.indexOf('script.js?v='), 'app_i18n.js debe cargarse antes de script.js.');
assert(!index.includes('name="admin-lang"'), 'El administrador no debe conservar un idioma local que contradiga al selector global.');
assert(!index.includes('translate-toggle-btn'), 'No debe existir el selector local anterior dentro del examen.');

assert(appI18n.includes("const STORAGE_KEY = 'app_language'"), 'El idioma global no se persiste con una clave estable.');
assert(appI18n.includes("window.dispatchEvent(new CustomEvent('app-language-change'"), 'Falta el evento global de cambio de idioma.');
assert(appI18n.includes('document.documentElement.dataset.appLanguage = language'), 'Falta reflejar el idioma en el documento.');
assert(appI18n.includes('window.toggleAppLanguage = toggleLanguage'), 'Falta el puente estable del botón global.');
assert(appI18n.includes('new MutationObserver'), 'Falta traducir las pantallas creadas dinámicamente.');
assert(styles.includes('html[data-app-language="es"] .lang-section[data-lang="en"]'), 'Falta controlar los bloques bilingües de estudio desde el idioma global.');
assert(styles.includes('body.zen-mode #global-language-toggle'), 'El selector global debe seguir disponible en modo Zen.');

assert(script.includes('function getActiveLanguage()'), 'La aplicación no consulta una fuente única de idioma.');
assert(script.includes("window.addEventListener('app-language-change'"), 'script.js no escucha el cambio global.');
assert(!script.includes('loadQuestion(currentQuestionIndex);\n            } else if (configModal'), 'El cambio global no debe recargar la pregunta ni reiniciar sus métricas.');
assert(!script.includes('window._cmdLang'), 'Los comandos SQL no deben conservar un selector de idioma independiente.');
assert(features.includes('function getLocalizedCourseQuestions(courseId)'), 'Los paneles derivados no filtran bancos gemelos por idioma global.');
assert(features.includes('window.AppI18n.getLanguage()'), 'Los paneles derivados no consultan el idioma global.');

assert(questionBridge.includes('function findQuestionTwin(question, targetLanguage)'), 'Falta el emparejamiento bidireccional EN/ES de preguntas.');
assert(questionBridge.includes("window.addEventListener('app-language-change'"), 'Las preguntas no escuchan el selector global.');
assert(!questionBridge.includes('injectButton'), 'El puente de preguntas no debe volver a inyectar un botón local.');

const english = { id: 'genai-001', courseId: 'databricks-genai-engineer', lang: 'en' };
const spanish = { id: 'genai-001-es', courseId: 'databricks-genai-engineer', lang: 'es' };
const context = {
  window: { questionsData: [english, spanish] },
  document: { readyState: 'loading', addEventListener() {} },
};
vm.runInNewContext(questionBridge, context, { filename: 'translate_toggle.js' });
assert.strictEqual(context.window.QuestionTranslation.findQuestionTwin(english, 'es'), spanish, 'No se encontró la gemela española.');
assert.strictEqual(context.window.QuestionTranslation.findQuestionTwin(spanish, 'en'), english, 'No se encontró la gemela inglesa.');

const build = serviceWorker.match(/BUILD_TIMESTAMP\s*=\s*'([^']+)'/)[1];
for (const asset of ['styles.css', 'app_i18n.js', 'script.js', 'features.js', 'translate_toggle.js']) {
  assert(index.includes(`${asset}?v=${build}`), `${asset} no usa la versión global ${build} en index.html.`);
  assert(serviceWorker.includes(`'./${asset}?v=${build}'`), `${asset} no está precargado con la versión global ${build}.`);
}

console.log('IDIOMA GLOBAL: OK');
console.log('- Un selector ES/EN persistente en el encabezado y disponible en modo Zen');
console.log('- Pantallas dinámicas, estudio y preguntas conectadas al mismo estado global');
console.log('- Cambio bidireccional de preguntas sin recargar la posición activa');
console.log(`- Caché PWA coherente: ${build}`);
