global.window = { questionsData: [] };
require('./questions_databricks.js');

const allQ = window.questionsData;

function safeOpts(options) {
  return options.map(o => o.id + ':' + (o.text || o.label || '??').substring(0, 60)).join(' | ');
}

// Dashboard questions
const dashboards = allQ.filter(x => x.domain === 'Dashboards & Visualizations');
console.log('=== DASHBOARDS & VISUALIZATIONS (' + dashboards.length + ' questions) ===\n');
dashboards.forEach((q, i) => {
  console.log('Q' + (i+1) + ' [' + q.id + '] CORRECT:' + q.correctIds.join(','));
  console.log('  EXPL:', q.explanation.substring(0, 200));
  console.log();
});

// AI/BI Genie questions  
const genie = allQ.filter(x => x.domain === 'AI/BI Genie Spaces');
console.log('\n=== AI/BI GENIE SPACES (' + genie.length + ' questions) ===\n');
genie.forEach((q, i) => {
  console.log('Q' + (i+1) + ' [' + q.id + '] CORRECT:' + q.correctIds.join(','));
  console.log('  EXPL:', q.explanation.substring(0, 200));
  console.log();
});

// Managing Data questions
const managing = allQ.filter(x => x.domain === 'Managing Data');
console.log('\n=== MANAGING DATA (' + managing.length + ' questions) ===\n');
managing.forEach((q, i) => {
  console.log('Q' + (i+1) + ' [' + q.id + '] CORRECT:' + q.correctIds.join(','));
  console.log('  EXPL:', q.explanation.substring(0, 200));
  console.log();
});

// Data Modeling questions
const modeling = allQ.filter(x => x.domain === 'Data Modeling');
console.log('\n=== DATA MODELING (' + modeling.length + ' questions) ===\n');
modeling.forEach((q, i) => {
  console.log('Q' + (i+1) + ' [' + q.id + '] CORRECT:' + q.correctIds.join(','));
  console.log('  EXPL:', q.explanation.substring(0, 200));
  console.log();
});
