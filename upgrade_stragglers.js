/**
 * UPGRADE: Stragglers — 3 remaining short explanations
 */
const fs = require('fs');
const FILE = 'questions_databricks.js';
const content = fs.readFileSync(FILE, 'utf8');

const explanations = {

"db-da-53": `✅ CORRECT: To rank products WITHIN each region, you need a window function with PARTITION BY region ORDER BY sales DESC. The PARTITION BY clause creates separate ranking groups for each region, while ORDER BY sales DESC ranks products from highest to lowest sales within each region.

❌ Why others are wrong:
• Options without PARTITION BY: Would rank ALL products globally across all regions, not within each individual region.
• Options using GROUP BY without window function: GROUP BY collapses rows and can't produce rankings — it's for aggregation, not ordering.
• Options with wrong ORDER BY: Ascending order (ASC) would rank lowest sales first, which is the opposite of the intent.
• Options using RANK vs ROW_NUMBER: Both work for ranking, but produce different results for ties (RANK skips numbers, ROW_NUMBER is always unique).

🎯 EXAM TIP: "Rank within each group" = RANK/DENSE_RANK/ROW_NUMBER with PARTITION BY group_col ORDER BY metric. PARTITION BY = GROUP boundary. ORDER BY = ranking order. Without PARTITION BY, ranking is global.`,

"db-da-220": `✅ CORRECT: Marking verified and frequently used queries as 'Trusted Assets' in a Genie space signals quality and governance. Trusted Assets are queries that have been reviewed and validated by an analyst or team lead. When users see a Trusted Asset badge, they know this query produces reliable, approved results — reducing the risk of ad-hoc queries producing incorrect business insights.

❌ Why others are wrong:
• (A) Disabling domain instructions: Domain instructions provide critical business context that helps Genie map natural language to correct SQL. Disabling them REDUCES accuracy, not improves it.
• (C) Automatic generation without review: Auto-generated queries may contain errors or misinterpret business logic. Every Genie-generated query should be reviewed before being trusted by the organization.
• (D) Editing source data directly: Modifying source data to fit the Genie space introduces data integrity risks. The Genie space should adapt to the data, not the other way around.

🎯 EXAM TIP: Genie space optimization: Trusted Assets (verified queries) + column descriptions + domain instructions + example queries. Each layer adds context for better natural language understanding. Trusted Assets add the GOVERNANCE dimension.`,

"db-da-361": `✅ CORRECT: The recommended Delta table maintenance pattern for this scenario is: (1) Run OPTIMIZE regularly to compact 15,000 small files into fewer, larger files (~1GB target), and (2) Run VACUUM with the default 7-day retention (168 hours) to clean up old, unreferenced data files and reclaim storage space.

❌ Why others are wrong:
• VACUUM with 0 hours: Dangerous — destroys Time Travel capability entirely. If you need to roll back a bad load, you can't recover. The 7-day default exists as a safety net.
• Rebuilding/recreating the table: Wasteful and disruptive — requires downtime, loses table history, and may break downstream consumers. OPTIMIZE handles compaction in-place.
• Auto Loader: Auto Loader controls data INGESTION, not storage optimization. It doesn't compact or clean existing files — that's OPTIMIZE + VACUUM territory.
• OPTIMIZE alone without VACUUM: OPTIMIZE creates new compacted files but the OLD small files remain on storage. Without VACUUM, storage costs keep growing because old files aren't deleted.

🎯 EXAM TIP: Delta maintenance workflow: OPTIMIZE (compact files) → VACUUM (cleanup old files). Order matters — OPTIMIZE first creates new files, then VACUUM removes the old ones. Default VACUUM retention = 7 days (168 hours). Never use 0 hours in production.`

};

// Apply
let modified = content;
let upgraded = 0, skipped = 0;
Object.entries(explanations).forEach(([id, newExpl]) => {
  const jsonSafe = newExpl.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n').replace(/\t/g, '\\t');
  const idPattern = new RegExp(`("id":\\s*"${id}"[\\s\\S]*?"explanation":\\s*")([^"]*?)(")`);
  if (modified.match(idPattern)) {
    modified = modified.replace(idPattern, `$1${jsonSafe}$3`);
    upgraded++;
    console.log(`  ✓ ${id} (${newExpl.length} chars)`);
  } else {
    skipped++;
    console.log(`  ✗ ${id} NOT FOUND`);
  }
});
console.log(`\nUpgraded: ${upgraded} | Skipped: ${skipped}`);
if (upgraded > 0) {
  fs.copyFileSync(FILE, FILE + '.bak_stragglers');
  fs.writeFileSync(FILE, modified, 'utf8');
  console.log('Saved.');
}
