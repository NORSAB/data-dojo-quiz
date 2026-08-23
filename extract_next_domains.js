const fs = require('fs');
global.window = { questionsData: [] };
require('./questions_databricks.js');
const qs = window.questionsData;

// Extract AI/BI Genie questions
const genieQs = qs.filter(q => q.domain && q.domain.includes('Genie'));
let output = `=== AI/BI Genie Spaces (${genieQs.length} questions) ===\n\n`;
genieQs.forEach((q, i) => {
  output += `Q${i+1} [${q.id}] type:${q.type}\n`;
  if (typeof q.prompt === 'string') {
    output += `PROMPT: ${q.prompt}\n`;
  } else if (Array.isArray(q.prompt)) {
    q.prompt.forEach(p => {
      if (p.type === 'text') output += `PROMPT: ${p.content}\n`;
    });
  }
  q.options.forEach(o => {
    const correct = q.correctIds.includes(o.id) ? ' ✅' : '';
    const text = typeof o.text === 'string' ? o.text : '[CODE/TABLE]';
    output += `  ${o.id}) ${text}${correct}\n`;
  });
  output += `CURRENT_EXPL: ${q.explanation}\n`;
  output += `---END---\n\n`;
});
fs.writeFileSync('genie_full.txt', output, 'utf-8');
console.log(`Genie: ${genieQs.length} questions extracted`);

// Extract Managing Data questions
const mgmtQs = qs.filter(q => q.domain && q.domain.includes('Managing'));
output = `=== Managing Data (${mgmtQs.length} questions) ===\n\n`;
mgmtQs.forEach((q, i) => {
  output += `Q${i+1} [${q.id}] type:${q.type}\n`;
  if (typeof q.prompt === 'string') {
    output += `PROMPT: ${q.prompt}\n`;
  } else if (Array.isArray(q.prompt)) {
    q.prompt.forEach(p => {
      if (p.type === 'text') output += `PROMPT: ${p.content}\n`;
    });
  }
  q.options.forEach(o => {
    const correct = q.correctIds.includes(o.id) ? ' ✅' : '';
    const text = typeof o.text === 'string' ? o.text : '[CODE/TABLE]';
    output += `  ${o.id}) ${text}${correct}\n`;
  });
  output += `CURRENT_EXPL: ${q.explanation}\n`;
  output += `---END---\n\n`;
});
fs.writeFileSync('managing_full.txt', output, 'utf-8');
console.log(`Managing Data: ${mgmtQs.length} questions extracted`);
