/**
 * Codex (GPT-5) | 2026-08-23 20:35 CST
 * Normaliza colores CSS heredados hacia la paleta compacta de The Data Dojo.
 */
const fs = require('fs');
const path = require('path');

const stylesheetPath = path.resolve(__dirname, '..', 'styles.css');
const replacements = new Map(Object.entries({
  '#0f172a': '#111827',
  '#166534': '#16794a',
  '#1e293b': '#1f2937',
  '#1e40af': '#2447b8',
  '#1f3a72': '#2447b8',
  '#22c55e': '#16794a',
  '#2563eb': '#3157d5',
  '#333': '#172033',
  '#334155': '#374151',
  '#475569': '#667085',
  '#4f6ef7': '#3157d5',
  '#6366f1': '#3157d5',
  '#64748b': '#667085',
  '#666': '#667085',
  '#67e8f9': '#3157d5',
  '#6b7280': '#667085',
  '#7c3aed': '#3157d5',
  '#818cf8': '#3157d5',
  '#854d0e': '#9a6700',
  '#86efac': '#6ee7b7',
  '#888': '#667085',
  '#94a3b8': '#a7b0c0',
  '#991b1b': '#b42318',
  '#999': '#667085',
  '#a5b4fc': '#3157d5',
  '#a78bfa': '#3157d5',
  '#b42318': '#b42318',
  '#b45309': '#9a6700',
  '#be185d': '#3157d5',
  '#c084fc': '#3157d5',
  '#c0c0c0': '#d9dee7',
  '#c4b5fd': '#3157d5',
  '#cbd5e1': '#d9dee7',
  '#ccc': '#d9dee7',
  '#cd7f32': '#9a6700',
  '#d1d5db': '#d9dee7',
  '#d97706': '#9a6700',
  '#e0e7ff': '#f4f6f8',
  '#e2e8f0': '#d9dee7',
  '#eef0f6': '#f4f6f8',
  '#ef4444': '#b42318',
  '#f0f0f0': '#f4f6f8',
  '#f1f5f9': '#f4f6f8',
  '#f3f4f6': '#f4f6f8',
  '#f472b6': '#3157d5',
  '#f59e0b': '#9a6700',
  '#f7f7f9': '#f4f6f8',
  '#f8fafc': '#f4f6f8',
  '#faf9f6': '#f4f6f8',
  '#fbbf24': '#e4b63f',
  '#fca5a5': '#f4aaa4',
  '#fdba74': '#e4b63f',
  '#fde047': '#e4b63f',
  '#fde68a': '#e4b63f',
  '#fef08a': '#f4f6f8',
  '#fef3c7': '#f4f6f8',
  '#fefce8': '#f4f6f8',
  '#fff': '#ffffff',
}));

const original = fs.readFileSync(stylesheetPath, 'utf8');
const normalized = original.replace(/#[0-9a-fA-F]{3,8}\b/g, (color) => {
  return replacements.get(color.toLowerCase()) || color.toLowerCase();
});

if (normalized !== original) {
  fs.writeFileSync(stylesheetPath, normalized, 'utf8');
}

const remaining = [...new Set(normalized.match(/#[0-9a-fA-F]{3,8}\b/g) || [])].sort();
console.log(`Paleta normalizada: ${remaining.length} colores hex únicos.`);
