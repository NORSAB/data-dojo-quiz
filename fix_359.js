const fs = require('fs');
const filePath = './questions_databricks.js';
let content = fs.readFileSync(filePath, 'utf-8');

// Find by the question ID directly in the file
const idIdx = content.indexOf('"db-da-359"');
if (idIdx === -1) {
  console.log('ID not found in file');
  process.exit(1);
}

// Find explanation field after this ID
const explStart = content.indexOf('"explanation":', idIdx);
if (explStart === -1 || explStart - idIdx > 5000) {
  console.log('Explanation not found in range');
  process.exit(1);
}

const valueStart = content.indexOf('"', explStart + '"explanation":'.length);
let valueEnd = valueStart + 1;
while (valueEnd < content.length) {
  if (content[valueEnd] === '\\') { valueEnd += 2; continue; }
  if (content[valueEnd] === '"') break;
  valueEnd++;
}

const newExpl = `✅ CORRECT (A): Schema Enforcement (also called Schema Validation) in Delta Lake rejects writes whose schema doesn't match the target table. The error occurs because the source has a column (loyalty_tier) that doesn't exist in the target table.\\n\\nResolution options:\\n1. ALTER TABLE silver.customers ADD COLUMN loyalty_tier STRING — explicitly add the column\\n2. Enable Schema Evolution: SET spark.databricks.delta.schema.autoMerge.enabled = true — automatically adds new columns\\n\\n❌ Why others are wrong:\\n• (B) Data type mismatch: The error message explicitly says \\"Column not found,\\" not \\"type mismatch.\\" This is a missing column, not a type issue.\\n• (C) INSERT blocked on Silver tables: FALSE. INSERT works on ANY Delta table regardless of the medallion layer.\\n• (D) Different catalogs: Cross-catalog INSERT is supported as long as the user has proper permissions.\\n• (E) Only applies to Parquet: FALSE. Schema Enforcement is a DELTA LAKE feature — it applies to all Delta tables.\\n\\n🔑 EXAM TIP: Schema Enforcement vs. Evolution:\\n• Enforcement (default ON): REJECTS writes with mismatched schemas\\n• Evolution (default OFF): ACCEPTS writes and automatically adds new columns\\n• Enable evolution: .option('mergeSchema', 'true') or SET spark.databricks.delta.schema.autoMerge.enabled = true\\n• ALTER TABLE ADD COLUMN: Manual, explicit schema change`;

content = content.substring(0, valueStart) + '"' + newExpl + '"' + content.substring(valueEnd + 1);
fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ db-da-359 fixed!');

// Verify
try {
  delete require.cache[require.resolve(filePath)];
  global.window = { questionsData: [] };
  require(filePath);
  console.log('✅ File valid! Total questions:', window.questionsData.length);
} catch(e) {
  console.log('❌ Syntax error:', e.message.substring(0, 300));
}
