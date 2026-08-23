const fs = require('fs');
const path = require('path');

const sourcePath = path.join(
  'D:', '2026', 'Simulador de Preguntas', 'output', 'clases_5_10_separadas',
  'Laboratorios Finales', 'Laboratorio 5 - Validación de Datos.ipynb'
);
const outputPath = path.join(
  'D:', '2026', 'Simulador de Preguntas', 'output', 'clases_5_10_separadas',
  'INSERTS_DETALLADOS_7_TABLAS.sql'
);

const notebook = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));
const cells = [26, 27, 28, 29, 34, 37, 38];
const sections = [];

for (const index of cells) {
  const source = notebook.cells[index].source.join('').replace(/^%sql\s*/i, '');
  const match = source.match(
    /CREATE OR REPLACE TEMP VIEW demo_(\w+) AS\s*SELECT \* FROM VALUES\s*([\s\S]*?)\s*AS demo_\w+\s*\(([\s\S]*?)\);\s*$/i
  );
  if (!match) throw new Error(`Could not parse source cell ${index}`);
  const [, table, values, columns] = match;
  sections.push([
    '-- ============================================================================',
    `-- ${table.toUpperCase()} - datos detallados de la celda original ${index}`,
    '-- ============================================================================',
    `INSERT INTO bronze.${table} (`,
    columns.split(',').map((c) => `  ${c.trim()}`).join(',\n'),
    ')',
    'VALUES',
    `${values.trim()};`,
    ''
  ].join('\n'));
}

const header = `-- Datos detallados extraídos del Laboratorio 5 final.
-- Ejecutar una sola vez después de crear las tablas Bronze.
-- Estos INSERT conservan las anomalías intencionales de la práctica.

USE CATALOG laboratorio_qltp;

`;

fs.writeFileSync(outputPath, header + sections.join('\n'), 'utf8');
console.log(outputPath);
