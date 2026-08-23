global.window = { questionsData: [] };
require('./questions_databricks.js');

const allQ = window.questionsData;
const domain = process.argv[2] || 'Dashboards & Visualizations';
const qs = allQ.filter(x => x.domain === domain);

console.log('=== ' + domain + ' (' + qs.length + ' questions) ===\n');
qs.forEach((q, i) => {
  console.log('Q' + (i+1) + ' [' + q.id + '] type:' + q.type);
  console.log('PROMPT: ' + q.prompt);
  q.options.forEach(o => {
    const isCorrect = q.correctIds.includes(o.id) ? ' ✅' : '';
    console.log('  ' + o.id + ') ' + (o.text || o.label || '') + isCorrect);
  });
  console.log('CURRENT_EXPL: ' + q.explanation);
  console.log('---END---\n');
});
