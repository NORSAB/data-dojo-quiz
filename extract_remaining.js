const fs = require('fs');
global.window = { questionsData: [] };
require('./questions_databricks.js');
const questions = window.questionsData;

const remaining = [
  'Securing Data',
  'Data Modeling',
  'Platform Understanding',
  'Analyzing Queries',
  'Executing Queries'
];

for (const domain of remaining) {
  const qs = questions.filter(q => q.domain === domain);
  let out = `=== ${domain} (${qs.length} questions) ===\n\n`;
  qs.forEach((q, i) => {
    const promptText = typeof q.prompt === 'string' ? q.prompt : 
      q.prompt.filter(p => p.type === 'text').map(p => p.content).join('\n');
    out += `Q${i+1} [${q.id}] type:${q.type}\n`;
    out += `PROMPT: ${promptText.substring(0, 200)}\n`;
    q.options.forEach(o => {
      out += `  ${o.id}) ${typeof o.text === 'string' ? o.text.substring(0, 120) : '[CODE/TABLE]'}${o.correct ? ' ✅' : ''}\n`;
    });
    out += `CURRENT_EXPL: ${q.explanation.substring(0, 200)}\n`;
    out += '---END---\n\n';
  });
  const fname = domain.replace(/[^a-zA-Z]/g, '_').toLowerCase() + '_full.txt';
  fs.writeFileSync(fname, out);
  console.log(`${domain}: ${qs.length} questions → ${fname}`);
}
