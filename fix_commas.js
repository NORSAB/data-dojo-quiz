const fs = require('fs');
let content = fs.readFileSync('questions_databricks.js', 'utf-8');
// Fix double commas after explanation strings
const fixedContent = content.replace(/",,\r?\n/g, '",\n');
fs.writeFileSync('questions_databricks.js', fixedContent, 'utf-8');

// Verify the fix
const count = (content.match(/",,/g) || []).length;
const remaining = (fixedContent.match(/",,/g) || []).length;
console.log('Double commas found:', count, '-> Fixed to:', remaining);

// Also verify the file is valid JS
try {
  global.window = { questionsData: [] };
  delete require.cache[require.resolve('./questions_databricks.js')];
  require('./questions_databricks.js');
  console.log('✅ File is valid JavaScript! Questions loaded:', window.questionsData.length);
} catch (e) {
  console.log('❌ Still has errors:', e.message.substring(0, 200));
}
