const fs = require('fs');
const content = fs.readFileSync('questions_databricks.js', 'utf-8');

// The question about ranking products has file id "db-da-25" but runtime id "db-da-53"
// Let's find the explanation for the sales_table question and update it
const marker = 'PERCENT_RANK()` calculates the relative rank';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('Marker not found!');
  process.exit(1);
}

// Find the full explanation string
const explKeyStart = content.lastIndexOf('"explanation":', idx);
const valueStart = content.indexOf('"', explKeyStart + '"explanation":'.length);
let valueEnd = valueStart + 1;
while (valueEnd < content.length) {
  if (content[valueEnd] === '\\') { valueEnd += 2; continue; }
  if (content[valueEnd] === '"') break;
  valueEnd++;
}

const newExpl = `✅ CORRECT (D): To rank products WITHIN each region, you need the RANK() or PERCENT_RANK() window function with PARTITION BY region ORDER BY sales DESC. The PARTITION BY clause creates separate ranking groups per region, and ORDER BY sales DESC ranks from highest to lowest sales within each partition.\\n\\nSQL Pattern:\\nSELECT region, product, sales,\\n  PERCENT_RANK() OVER (PARTITION BY region ORDER BY sales DESC) as pct_rank\\nFROM sales_table;\\n\\n❌ Why others are wrong: The other options likely use incorrect syntax — either missing PARTITION BY (which would rank globally, not within regions), using wrong ORDER direction, or using non-window-function approaches like subqueries.\\n\\n🔑 EXAM TIP: Window Function essentials:\\n• PARTITION BY = defines the groups (like GROUP BY but without collapsing rows)\\n• ORDER BY = defines the sort order within each partition\\n• RANK() = allows ties (1,1,3), ROW_NUMBER() = no ties (1,2,3)\\n• DENSE_RANK() = no gaps after ties (1,1,2)\\n• PERCENT_RANK() = relative rank from 0 to 1 within partition`;

const newContent = content.substring(0, valueStart) + '"' + newExpl + '"' + content.substring(valueEnd + 1);
fs.writeFileSync('questions_databricks.js', newContent, 'utf-8');
console.log('✅ db-da-53 (file id db-da-25) explanation upgraded!');

// Verify
try {
  delete require.cache[require.resolve('./questions_databricks.js')];
  global.window = { questionsData: [] };
  require('./questions_databricks.js');
  console.log('✅ File valid! Total questions:', window.questionsData.length);
} catch(e) {
  console.log('❌ Error:', e.message.substring(0, 200));
}
