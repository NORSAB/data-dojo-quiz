#!/usr/bin/env node
/* Codex (GPT-5) | 2026-08-23 22:00 CST | Bloquea paletas fuera de norma y recursos estáticos con versiones de caché incoherentes. */

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');
const failures = [];
const assert = (condition, message) => {
  if (!condition) failures.push(message);
};

const styles = read('styles.css');
const index = read('index.html');
const script = read('script.js');
const features = read('features.js');
const translate = read('translate_toggle.js');
const serviceWorker = read('sw.js');

const providerIconsStart = script.indexOf('const providerIcons = {');
const providerIconsEnd = script.indexOf('\n  };', providerIconsStart);
const scriptWithoutBrandLogos = providerIconsStart >= 0 && providerIconsEnd > providerIconsStart
  ? `${script.slice(0, providerIconsStart)}${script.slice(providerIconsEnd + 5)}`
  : script;

const activeInterface = [
  ['styles.css', styles],
  ['index.html', index],
  ['script.js', scriptWithoutBrandLogos],
  ['features.js', features],
  ['translate_toggle.js', translate],
];

const forbiddenDecorativeColors = [
  '#4f6ef7', '#6366f1', '#818cf8', '#93c5fd', '#c084fc', '#8b5cf6',
  '#3b82f6', '#14b8a6', '#22c55e', '#10b981', '#f59e0b', '#ef4444',
  '#ff3621',
];

for (const [file, source] of activeInterface) {
  const lower = source.toLowerCase();
  assert(!/(?:linear|radial)-gradient\s*\(/i.test(source), `${file}: contiene un gradiente decorativo activo.`);
  assert(!/rgba?\(\s*79\s*,\s*110\s*,\s*247/i.test(source), `${file}: conserva el azul legado rgb(79,110,247).`);
  assert(!/rgba?\(\s*124\s*,\s*58\s*,\s*237/i.test(source), `${file}: conserva un morado decorativo legado.`);
  for (const color of forbiddenDecorativeColors) {
    assert(!lower.includes(color), `${file}: usa el color decorativo no permitido ${color}.`);
  }
}

const uniqueStyleHex = [...new Set((styles.match(/#[0-9a-f]{6}\b/gi) || []).map((value) => value.toLowerCase()))];
assert(uniqueStyleHex.length <= 18, `styles.css: la paleta creció a ${uniqueStyleHex.length} colores hex (máximo 18).`);
assert(styles.includes('--primary-color: #3157d5;'), 'styles.css: falta el token principal #3157d5.');
assert(styles.includes('.wisdom-bonsai svg [fill]'), 'styles.css: el bonsái decorativo no está normalizado por el acento principal.');

const studyStart = script.indexOf('// --- Build the Dojo-styled study UI');
const studyEnd = script.indexOf('</style>', studyStart);
const studyStyle = studyStart >= 0 && studyEnd > studyStart ? script.slice(studyStart, studyEnd) : '';
assert(studyStyle.length > 0, 'script.js: no se encontró el bloque visual del Centro de Estudio.');
assert(studyStyle.includes('--study-accent: var(--primary-color'), 'Centro de Estudio: falta el token --study-accent.');
assert(studyStyle.includes('fill: currentColor !important'), 'Centro de Estudio: los SVG no heredan currentColor.');
assert(studyStyle.includes('.box-red, .box-green, .box-blue, .box-yellow'), 'Centro de Estudio: las cajas informativas no están unificadas.');
assert(studyStyle.includes('.unir-tab-count'), 'Centro de Estudio: los contadores de pestañas no usan la clase neutralizada.');

const forbiddenStudyColors = forbiddenDecorativeColors.filter((color) => color !== '#22c55e');
for (const color of forbiddenStudyColors) {
  assert(!studyStyle.toLowerCase().includes(color), `Centro de Estudio: conserva ${color} dentro de su interfaz.`);
}

assert(translate.includes('background: var(--primary-color, #3157d5);'), 'Selector EN/ES: no hereda el acento principal.');

const buildMatch = serviceWorker.match(/BUILD_TIMESTAMP\s*=\s*['"]([^'"]+)['"]/);
const cssVersionMatch = index.match(/styles\.css\?v=([^"']+)/);
const scriptVersionMatch = index.match(/script\.js\?v=([^"']+)/);
assert(buildMatch && cssVersionMatch && scriptVersionMatch, 'PWA: no se pudo leer BUILD_TIMESTAMP, styles.css?v o script.js?v.');
if (buildMatch && cssVersionMatch && scriptVersionMatch) {
  assert(buildMatch[1] === cssVersionMatch[1], `PWA: BUILD_TIMESTAMP ${buildMatch[1]} y styles.css?v=${cssVersionMatch[1]} no coinciden.`);
  assert(buildMatch[1] === scriptVersionMatch[1], `PWA: BUILD_TIMESTAMP ${buildMatch[1]} y script.js?v=${scriptVersionMatch[1]} no coinciden.`);
  assert(serviceWorker.includes(`'./styles.css?v=${buildMatch[1]}'`), 'PWA: el CSS versionado no está precargado en el service worker.');
  assert(serviceWorker.includes(`'./script.js?v=${buildMatch[1]}'`), 'PWA: el JavaScript versionado no está precargado en el service worker.');
}

if (failures.length > 0) {
  console.error('VALIDACIÓN DE PALETA: FALLÓ');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log('VALIDACIÓN DE PALETA: OK');
console.log(`- styles.css: ${uniqueStyleHex.length} colores hex únicos, 0 gradientes decorativos`);
console.log('- Centro de Estudio: acento principal, SVG currentColor y cajas informativas unificadas');
console.log('- Selector EN/ES y caché PWA: coherentes con el design system');
