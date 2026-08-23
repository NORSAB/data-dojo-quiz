const fs = require('fs');
const c = fs.readFileSync('questions_databricks.js', 'utf8');

// Extract JSON: everything between .concat( and the last ]);
const startMatch = c.indexOf('.concat(');
if (startMatch === -1) { console.log('No .concat( found'); process.exit(1); }
const jsonStart = startMatch + 8; // skip ".concat("

// Find matching closing bracket - the last ]\n);
const lastBracket = c.lastIndexOf(']');
const jsonStr = c.substring(jsonStart, lastBracket + 1).trim();

// Remove any trailing stuff after the array
let questions;
try {
  questions = JSON.parse(jsonStr);
} catch(e) {
  // Try to find just the array
  console.log('Direct parse failed, trying eval approach...');
  // Write temp file
  const wrapped = 'module.exports = ' + jsonStr + ';';
  fs.writeFileSync('_temp_audit.js', wrapped);
  questions = require('./_temp_audit.js');
  fs.unlinkSync('_temp_audit.js');
}

console.log('Total questions:', questions.length);

const domains = {};
questions.forEach(q => {
  if (!domains[q.domain]) domains[q.domain] = { short: 0, long: 0, total: 0, ids_short: [] };
  domains[q.domain].total++;
  if (q.explanation.length > 400) {
    domains[q.domain].long++;
  } else {
    domains[q.domain].short++;
    if (domains[q.domain].ids_short.length < 3) domains[q.domain].ids_short.push(q.id);
  }
});

console.log('\n=== DOMAIN AUDIT ===');
Object.keys(domains).sort().forEach(d => {
  const info = domains[d];
  const pct = Math.round(info.long / info.total * 100);
  console.log(`  ${d}: ${info.total} total | ${info.long} upgraded (${pct}%) | ${info.short} need upgrade`);
  if (info.ids_short.length > 0) console.log(`    Sample IDs: ${info.ids_short.join(', ')}`);
});

// Show sample upgraded
const ug = questions.find(q => q.explanation.includes('CORRECT'));
if (ug) {
  console.log('\n=== SAMPLE UPGRADED ===');
  console.log('ID:', ug.id, '| Domain:', ug.domain, '| Len:', ug.explanation.length);
  console.log(ug.explanation.substring(0, 400));
}

// Show sample NOT upgraded from Platform Understanding
const nu = questions.find(q => q.domain === 'Platform Understanding' && q.explanation.length < 400);
if (nu) {
  console.log('\n=== SAMPLE NOT UPGRADED (Platform Understanding) ===');
  console.log('ID:', nu.id, '| Len:', nu.explanation.length);
  console.log(nu.explanation);
}
