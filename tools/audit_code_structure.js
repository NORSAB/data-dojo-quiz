/**
 * Codex (GPT-5) | 2026-08-23 20:35 CST
 * Auditoría estática ligera y reproducible de la capa ejecutable principal.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const coreFiles = [
  'auto_restore_data.js',
  'features.js',
  'hero_data.js',
  'script.js',
  'supabase-sync.js',
  'sw.js',
  'translate_toggle.js',
];

function lineNumber(text, index) {
  return text.slice(0, index).split(/\r?\n/).length;
}

function getFunctionDeclarations(text) {
  const declarations = [];
  const pattern = /^\s*(?:async\s+)?function\s+([A-Za-z_$][\w$]*)\s*\(/gm;
  for (const match of text.matchAll(pattern)) {
    declarations.push({ name: match[1], line: lineNumber(text, match.index) });
  }
  return declarations;
}

const declarationsByName = new Map();
const metrics = [];

coreFiles.forEach((filename) => {
  const text = fs.readFileSync(path.join(root, filename), 'utf8');
  const declarations = getFunctionDeclarations(text);
  declarations.forEach((declaration) => {
    const key = `${filename}:${declaration.name}`;
    if (!declarationsByName.has(key)) declarationsByName.set(key, []);
    declarationsByName.get(key).push(declaration.line);
  });

  metrics.push({
    file: filename,
    lines: text.split(/\r?\n/).length,
    functions: declarations.length,
    domReadyHandlers: (text.match(/DOMContentLoaded/g) || []).length,
    innerHtmlWrites: (text.match(/\.innerHTML\s*=/g) || []).length,
    inlineHandlerFragments: (text.match(/\son[a-z]+=/gi) || []).length,
  });
});

const duplicateFunctions = [...declarationsByName.entries()]
  .filter(([, lines]) => lines.length > 1)
  .map(([key, lines]) => ({ key, lines }));

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
const inlineHandlers = (html.match(/\son[a-z]+=/gi) || []).length;
const css = fs.readFileSync(path.join(root, 'styles.css'), 'utf8');
const colors = new Set(css.match(/#[0-9a-fA-F]{3,8}\b/g) || []);
const gradients = (css.match(/(?:linear|radial)-gradient/g) || []).length;

console.table(metrics);
console.log(`Funciones duplicadas dentro del mismo archivo: ${duplicateFunctions.length}`);
duplicateFunctions.forEach((item) => console.log(`  ${item.key} -> líneas ${item.lines.join(', ')}`));
console.log(`IDs HTML duplicados: ${duplicateIds.length}${duplicateIds.length ? ` (${duplicateIds.join(', ')})` : ''}`);
console.log(`Handlers inline en index.html: ${inlineHandlers}`);
console.log(`Paleta styles.css: ${colors.size} colores hex únicos; ${gradients} gradientes.`);

if (duplicateFunctions.length > 0 || duplicateIds.length > 0) {
  process.exitCode = 1;
}
