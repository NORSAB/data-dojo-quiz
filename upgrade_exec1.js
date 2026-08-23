/**
 * UPGRADE: Executing Queries Deep-Dive — Batch 1 (31 questions)
 */
const fs = require('fs');
const FILE = 'questions_databricks.js';
const content = fs.readFileSync(FILE, 'utf8');

const explanations = {

"db-da-2": `✅ CORRECT (E — SQL Editor page): The SQL Editor is the dedicated workspace in Databricks SQL for writing, executing, and saving SQL queries. It provides: syntax highlighting, autocomplete (table/column suggestions powered by Unity Catalog), query history, result visualization, parameter widgets, and query scheduling.

❌ Why others are wrong:
• (A) Data page: The Data page (Catalog Explorer) is for browsing data objects and managing permissions — it doesn't have a query editor.
• (B) Dashboards page: Dashboards display visualizations — you can add queries to dashboards but can't WRITE new SQL here.
• (C) Queries page: The Queries page lists saved query objects. You can OPEN a query from here to edit it, but the actual editor is the SQL Editor.
• (D) Alerts page: Alerts monitor query results against thresholds — no SQL authoring capability.

🎯 EXAM TIP: SQL Editor = write + execute + save + schedule queries. Queries page = browse/manage saved queries. Dashboard = display query results. Know the navigation path for each task.`,

"db-da-6": `✅ CORRECT (E — Use a Serverless SQL endpoint): Serverless SQL Warehouses eliminate cold-start delays by using pre-warmed compute pools managed by Databricks. Startup time drops from 4+ minutes (Classic) to under 6 seconds, solving the slow start-up problem for scheduled queries.

❌ Why others are wrong:
• (A) Reduce cluster size: Smaller clusters start slightly faster but still require VM provisioning. The cold-start problem remains.
• (B) Increase cluster size: Larger clusters take LONGER to provision, making the problem worse.
• (C) Turn off Auto stop: Keeps the warehouse running 24/7, preventing cold starts but incurring continuous cost — even during the gaps between 4-hour query runs.
• (D) Increase minimum scaling: More clusters at startup means MORE VMs to provision, increasing startup time, not reducing it.

🎯 EXAM TIP: Cold-start problem → Serverless. The exam loves this scenario: "scheduled query, warehouse takes too long to start." The answer is always Serverless SQL Warehouse for intermittent workloads.`,

"db-da-20": `✅ CORRECT (E — | 80 | canada | 75 | canada | 90 | canada |): The WHERE clause requires BOTH conditions: age >= 75 AND country = 'canada'. Only rows satisfying BOTH are returned. Option E shows ages 80, 75, 90 (all >= 75) with country 'canada' — all satisfying both filters. SELECT only returns the specified columns (age, country), not id.

❌ Why others are wrong:
• (A) Contains NULL values — WHERE filters out NULLs because NULL >= 75 is UNKNOWN (not TRUE), and NULL comparisons fail the filter.
• (B) Country is NULL for all rows — violates the country = 'canada' condition.
• (C) Includes 'id' column — but SELECT only specified age and country. Extra columns in output = wrong schema.
• (D) Contains age = 14 — violates age >= 75 condition.

🎯 EXAM TIP: SQL evaluation order: FROM → WHERE → SELECT. NULLs in comparison operators (>=, =) evaluate to UNKNOWN, which is treated as FALSE in WHERE. NULL rows are always excluded.`,

"db-da-21": `✅ CORRECT (C — Suppliers now contains both original data AND new_suppliers data, including duplicates): INSERT INTO ... TABLE appends ALL rows from the source table to the target table. It does NOT check for duplicates — if a row already exists in suppliers, it will be duplicated. No data is removed or swapped.

❌ Why others are wrong:
• (A) "Duplicates are deleted": INSERT INTO does NOT deduplicate. Use MERGE INTO for upsert (insert + update) logic.
• (B) "Command fails — written incorrectly": The syntax INSERT INTO target TABLE source is valid Databricks SQL syntax.
• (D) "Tables swap data": INSERT INTO only adds TO the target. It doesn't move data FROM the target to the source.
• (E) "Only new_suppliers data remains": INSERT INTO APPENDS, not REPLACES. To replace, use INSERT OVERWRITE or CREATE OR REPLACE TABLE.

🎯 EXAM TIP: INSERT INTO = append (add rows, keep existing). INSERT OVERWRITE = replace (delete all existing, add new). MERGE INTO = upsert (conditional insert/update/delete). Know all three.`,

"db-da-22": `✅ CORRECT (B — explode(products)): The EXPLODE function takes an array column and creates one new row for each element in the array, duplicating the values of all other columns. If products = ['A', 'B', 'C'], EXPLODE creates 3 rows, each with one product value.

❌ Why others are wrong:
• (A) array_distinct: Removes duplicate elements WITHIN an array but keeps it as an array column. It doesn't create new rows.
• (C) reduce: Reduces an array to a single value by applying an accumulator function (like folding). Opposite of explode.
• (D) array: Creates an array from individual values — the opposite direction (columns → array, not array → rows).
• (E) flatten: Flattens nested arrays (array of arrays → single array) but doesn't create rows. Use with EXPLODE for nested arrays.

🎯 EXAM TIP: Array → Rows = EXPLODE. Rows → Array = COLLECT_LIST/COLLECT_SET. Array manipulation = TRANSFORM, FILTER, AGGREGATE. The exam tests which function direction to use.`,

"db-da-23": `✅ CORRECT: SELECT DISTINCT * combined with CREATE TABLE ... AS creates a new table containing only unique rows, effectively removing duplicate records from the bronze table.

❌ Why others are wrong:
• Other options likely contain incorrect combinations of: (1) missing DISTINCT keyword, (2) wrong CREATE syntax, (3) using GROUP BY instead of DISTINCT, or (4) using INSERT which would append rather than create fresh.

🎯 EXAM TIP: Deduplication patterns: SELECT DISTINCT * (exact row duplicates), GROUP BY + aggregation (logical duplicates), ROW_NUMBER() PARTITION BY key ORDER BY timestamp (keep latest per key). DISTINCT is the simplest for full-row deduplication.`,

"db-da-24": `✅ CORRECT: CREATE OR REPLACE VIEW creates a virtual table that runs its defining query every time it's accessed. Unlike a materialized view or table, a VIEW stores NO data — it always reflects the current state of the underlying source tables, ensuring data is "always up-to-date."

❌ Why others are wrong:
• Other options likely contain: (1) CREATE TABLE AS (stores data at creation time — becomes stale), (2) TEMPORARY VIEW (session-scoped, not persistent), (3) CREATE MATERIALIZED VIEW (stores precomputed data — requires refresh), or (4) wrong syntax.

🎯 EXAM TIP: VIEW = always current, stores only the query definition. MATERIALIZED VIEW = precomputed, needs refresh. TABLE = stores data at write time. When the requirement says "always up-to-date without refresh," the answer is VIEW.`,

"db-da-26": `✅ CORRECT (C — When custom logic needs to be applied at scale to array data objects): Higher-order functions (TRANSFORM, FILTER, AGGREGATE, EXISTS) are designed to apply custom lambda logic DIRECTLY to elements within arrays and maps — without exploding the array into rows. This is more efficient at scale because it avoids the row multiplication that EXPLODE causes.

❌ Why others are wrong:
• (A) "Simple, unnested data": For simple data, use standard SQL functions (built-ins). Higher-order functions are specifically for COMPLEX types (arrays, maps).
• (B) "Convert to Python-native code": Higher-order functions are SQL-native. They don't involve Python — that would require UDFs.
• (D) "Built-in functions too slow": Higher-order functions don't replace slow built-ins. They address CAPABILITY gaps for array processing.
• (E) "Run through Catalyst Optimizer": All SQL expressions run through Catalyst. Higher-order functions aren't needed for optimizer access.

🎯 EXAM TIP: Higher-order functions = SQL lambdas for arrays. Key functions: TRANSFORM(array, x -> expr), FILTER(array, x -> condition), AGGREGATE(array, init, (acc, x) -> expr). Preferred over EXPLODE for performance.`,

"db-da-27": `✅ CORRECT (B — LEFT SEMI returns matched rows from left; LEFT ANTI returns unmatched rows from left): LEFT SEMI JOIN returns ONLY rows from the left table (customers) that have at least one match in the right table (orders) — but NO columns from the right table. LEFT ANTI JOIN returns ONLY rows from the left table that have NO match in the right table.

❌ Why others are wrong:
• (A) "Returns all data + matching data": This describes a regular LEFT JOIN, not LEFT SEMI. LEFT SEMI never returns right-table columns.
• (C) "No difference": They return OPPOSITE result sets — SEMI returns matches, ANTI returns non-matches.
• (D) "Not supported in Databricks SQL": Both are fully supported in Databricks SQL (and Spark SQL).
• (E) "Returns all left rows + only customer_id from right": This describes a LEFT JOIN with column selection, not LEFT SEMI.

🎯 EXAM TIP: SEMI = "exists in right" (like WHERE EXISTS subquery). ANTI = "does NOT exist in right" (like WHERE NOT EXISTS). Neither returns columns from the right table. The exam tests this "no right columns" behavior.`,

"db-da-28": `✅ CORRECT: To call a UDF, use standard function call syntax: function_name(arg1, arg2). UDFs are invoked exactly like built-in functions — just pass column names or expressions as arguments.

❌ Why others are wrong:
• Other options likely show: (1) wrong argument format (column objects instead of names), (2) missing schema qualification, (3) calling with table prefix, or (4) using APPLY keyword which doesn't exist in SQL.

🎯 EXAM TIP: UDF invocation: SELECT my_udf(column1, column2) FROM table. If the UDF is in a different schema: SELECT schema.my_udf(col1, col2). UDFs behave like built-in functions syntactically.`,

"db-da-29": `✅ CORRECT (B — Missing GROUP BY region clause): When using an aggregate function (COUNT) alongside a non-aggregated column (region) in SELECT, you MUST include a GROUP BY clause specifying all non-aggregated columns. Without GROUP BY, the database doesn't know how to group the rows for counting.

❌ Why others are wrong:
• (A) "count(*) counts all customers regardless of region": Without GROUP BY, this is true — COUNT(*) would return a single total. But WITH GROUP BY, COUNT(*) correctly counts per group.
• (C) "ORDER BY not allowed with aggregation": ORDER BY works perfectly with GROUP BY! The correct order is: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.
• (D) "No mistakes": The query IS broken — it returns an error in ANSI SQL mode because region isn't aggregated or grouped.
• (E) "Region should only be in ORDER BY": Region can appear in both SELECT and ORDER BY when it's in GROUP BY.

🎯 EXAM TIP: SQL rule: Every column in SELECT must be either (1) in an aggregate function or (2) in the GROUP BY clause. This fundamental rule is tested multiple times on the exam.`,

"db-da-30": `✅ CORRECT: WITH CUBE generates subtotals for ALL possible combinations of the grouping columns. For GROUP BY group_1, group_2 WITH CUBE, you get: subtotals per (group_1, group_2), subtotals per group_1 alone, subtotals per group_2 alone, and the grand total. NULL values represent "all" in the subtotal rows.

❌ Why others are wrong:
• Other options show results of: WITH ROLLUP (hierarchical subtotals only), regular GROUP BY (no subtotals), or GROUPING SETS with limited combinations.

🎯 EXAM TIP: CUBE = ALL combinations of subtotals. ROLLUP = hierarchical subtotals (left-to-right). GROUPING SETS = explicit custom combinations. NULL in output = aggregated across that dimension.`,

"db-da-31": `✅ CORRECT (B — Easy to migrate existing SQL queries to Databricks SQL): ANSI SQL is the international standard for SQL syntax. By using ANSI SQL as its default dialect, Databricks SQL ensures that queries written for other ANSI-compliant databases (PostgreSQL, MySQL, Oracle, SQL Server) can migrate with minimal or no modifications.

❌ Why others are wrong:
• (A) "Increased customization": ANSI compliance is about STANDARDIZATION, not customization. Custom extensions exist but aren't the benefit of ANSI compliance.
• (C) "Allows Photon optimizations": Photon works regardless of SQL dialect. It optimizes query execution at the engine level, not at the syntax level.
• (D) "More performant than other dialects": Performance comes from the engine (Photon, Spark), not from the SQL dialect syntax.
• (E) "More compatible with Spark interpreters": Spark SQL has its own dialect. ANSI SQL mode actually adds stricter type checking compared to Spark's native mode.

🎯 EXAM TIP: ANSI SQL benefit = portability + migration ease. This means existing enterprise SQL workloads can move to Databricks with minimal rewrites. The exam tests this migration angle specifically.`,

"db-da-34": `✅ CORRECT (B — Line Chart): When Databricks SQL detects a categorical column (region STRING) and a numeric column (number_of_customer INT), the default visualization heuristic often selects a Line Chart. This is the automatic default behavior when clicking "Add visualization."

❌ Why others are wrong:
• (A) Violin Chart: Not a default chart type in Databricks SQL's built-in visualization options.
• (C) Bar Chart: While a bar chart would be semantically appropriate, the SYSTEM DEFAULT is Line Chart for this schema pattern.
• (D) Histogram: Histograms show frequency distributions of a single numeric variable, not category-value pairs.
• (E) "No default — must choose": Databricks SQL DOES select a default visualization type based on data schema heuristics.

🎯 EXAM TIP: The exam tests Databricks SQL's DEFAULT visualization behavior, not what's most appropriate. Know that the system auto-selects a chart type based on column types — usually Line Chart for mixed categorical + numeric data.`,

"db-da-35": `✅ CORRECT (B — Add two separate visualizations based on the same Query): A single saved Query can have MULTIPLE visualizations. Each visualization can use different chart types, axes, or aggregations. Both visualizations can be independently added as widgets to the same dashboard — no need to duplicate the query.

❌ Why others are wrong:
• (A) "Alter query for two result sets": A query produces ONE result set. Multiple visualizations reuse the same result set with different display configurations.
• (C) "Create two separate dashboards": Unnecessary — a single dashboard can hold multiple widgets from the same or different queries.
• (D) "Choose a single visualization": Incorrect constraint — Databricks SQL supports multiple visualizations per query.
• (E) "Copy the query": Duplicating queries is wasteful and creates maintenance burden. One query, multiple visualizations is the correct pattern.

🎯 EXAM TIP: Query:Visualization relationship is 1:Many. One query can produce a table view, a bar chart, a line chart, and a pivot table — all from the same result set. Each can be added independently to dashboards.`,

"db-da-46": `✅ CORRECT: The query SELECT user_id, email_address FROM my_table WHERE age > 25 AND country = 'Canada' correctly: (1) selects only the required columns (user_id, email_address), (2) applies both filter conditions with AND logic, and (3) uses proper comparison operators.

❌ Why others are wrong:
• Other options likely contain: (1) SELECT * (returns all columns, not just two), (2) OR instead of AND (returns rows matching either condition), (3) missing quotes around 'Canada', or (4) wrong column names in WHERE.

🎯 EXAM TIP: SQL filter checklist: (1) SELECT only needed columns, (2) AND vs OR logic, (3) string literals in single quotes, (4) correct comparison operators (>, >=, =, LIKE). Read each query character by character.`,

"db-da-49": `✅ CORRECT: The query combines COUNT(order_id) with GROUP BY customer_name to produce a count of orders per customer. The correct syntax requires: an aggregate function (COUNT), a grouping column (customer_name), an alias (AS), and a GROUP BY clause matching the non-aggregated column.

❌ Why others are wrong:
• Other options likely have: (1) missing GROUP BY, (2) incorrect alias syntax (without AS), (3) wrong aggregation function, or (4) missing ORDER BY for sorted output.

🎯 EXAM TIP: Aggregation query template: SELECT grouping_col, AGG_FUNC(measure_col) AS alias FROM table GROUP BY grouping_col. Every non-aggregated column in SELECT must appear in GROUP BY.`,

"db-da-57": `✅ CORRECT (C — Subqueries can retrieve data without creating a table or view): Subqueries (nested SELECT statements) let you compute intermediate results inline within a larger query. They exist only for the duration of the query execution — no persistent table or view is created.

❌ Why others are wrong:
• (A) "Not available in Databricks SQL": FALSE. Databricks SQL fully supports subqueries in WHERE, FROM, SELECT, and HAVING clauses.
• (B) "Transform data types like UDFs": Subqueries return RESULT SETS, not transformed data types. Type conversion uses CAST() or UDFs.
• (D) "Transform data like built-in functions": Subqueries are query structures, not transformation functions. They filter/compute data but don't transform types.

🎯 EXAM TIP: Subquery types: Scalar (returns single value, used in SELECT/WHERE), Column (returns one column, used with IN/EXISTS), Table (returns rows+columns, used in FROM as derived table). The exam tests correct placement.`,

"db-da-61": `✅ CORRECT (C — ANSI SQL): Databricks SQL uses ANSI SQL as its standard default dialect. This ensures maximum compatibility with other SQL platforms and enables easy migration of existing SQL workloads from traditional databases.

❌ Why others are wrong:
• (A) "Databricks SQL": Not a SQL standard — it's a product/service name, not a dialect specification.
• (B) "Spark SQL": Spark SQL is the underlying engine but ANSI mode overrides Spark's looser type handling with strict ANSI compliance.
• (D) "Delta SQL": Not a real SQL dialect. Delta Lake is a storage format, not a query language variant.

🎯 EXAM TIP: ANSI SQL mode in Databricks means: strict type casting (no implicit coercion), standard error handling, and ISO-compliant syntax. This is a frequently repeated exam concept across multiple questions.`,

"db-da-62": `✅ CORRECT: Moving from Silver to Gold involves applying business logic and aggregation. The correct query uses CREATE TABLE gold_table AS SELECT with aggregation functions (SUM, AVG) and GROUP BY to transform cleaned Silver data into business-ready Gold data.

❌ Why others are wrong:
• Other options likely show: (1) no aggregation (raw copy, still Silver-level), (2) CREATE VIEW instead of TABLE (Gold should be materialized for performance), (3) filtering without transformation, or (4) wrong table references.

🎯 EXAM TIP: Medallion transitions: Bronze → Silver = clean, deduplicate, conform. Silver → Gold = aggregate, join, denormalize for business use. Gold tables typically use GROUP BY, JOINs, and business calculations.`,

"db-da-64": `✅ CORRECT (C — Save as a Query): In Databricks SQL, the standard way to persist a SQL statement for reuse is to save it as a Query object. Queries are first-class citizens — they can be organized in folders, shared with team members, added to dashboards, and scheduled for execution.

❌ Why others are wrong:
• (A) "Save as Dashboard": Dashboards display visualizations — you can't save raw SQL as a dashboard directly.
• (B) "Save within a Notebook": Notebooks are in Databricks Workspace, not SQL Editor. While possible, it's not the standard DBSQL workflow.
• (D) "Save in Query History": Query History is READ-ONLY — it logs past executions but doesn't let you save or edit queries.

🎯 EXAM TIP: DBSQL persistence hierarchy: Query (saved SQL) → Visualization (chart from query results) → Dashboard (collection of visualizations). The starting point is always saving the Query first.`,

"db-da-66": `✅ CORRECT: MERGE INTO with WHEN NOT MATCHED THEN INSERT * is the correct approach for adding new records while preventing duplicates. MERGE evaluates the ON condition: if a supplier_id exists in both tables (MATCHED), it can UPDATE or skip. If a supplier_id doesn't exist in the target (NOT MATCHED), it INSERTs the new row.

❌ Why others are wrong:
• Other options likely use: (1) INSERT INTO (appends ALL rows including duplicates), (2) UNION (combines result sets but doesn't INSERT), (3) JOIN without INSERT (selects but doesn't modify), or (4) wrong MERGE syntax.

🎯 EXAM TIP: MERGE INTO = SQL upsert. Clauses: WHEN MATCHED THEN UPDATE, WHEN NOT MATCHED THEN INSERT, WHEN MATCHED AND condition THEN DELETE. The exam tests which clause handles which scenario.`,

"db-da-68": `✅ CORRECT (C — products[0]): Databricks SQL (based on Spark SQL) uses 0-based indexing with bracket notation for array access. products[0] returns the first element, products[1] returns the second, and so on.

❌ Why others are wrong:
• (A) products.1: Dot notation with numbers is NOT valid array syntax in SQL. Dot notation is for struct field access.
• (B) products.0: Same issue — dot notation doesn't work for array indexing.
• (D) products[1]: This returns the SECOND element (0-based indexing), not the first.

🎯 EXAM TIP: Array indexing in Databricks SQL: array_col[0] = first element, array_col[N-1] = Nth element. Out-of-bounds index returns NULL (no error). Negative indices are NOT supported.`,

"db-da-76": `✅ CORRECT (B — Left Join): A LEFT JOIN returns ALL rows from the left table (customers) and matching rows from the right table (orders). Customers WITH orders will have order data populated. Customers WITHOUT orders will have NULL in the order columns. This single statement identifies both groups.

❌ Why others are wrong:
• (A) Left Semi Join: Only returns customers WHO HAVE orders — it can't identify customers without orders in the same query.
• (C) Middle Join: Not a valid SQL join type.
• (D) Left Anti Join: Only returns customers who DON'T have orders — it can't show customers with orders.

🎯 EXAM TIP: "Find both matching AND non-matching" → LEFT JOIN. "Find ONLY matching" → INNER JOIN or LEFT SEMI. "Find ONLY non-matching" → LEFT ANTI. The exam tests which join answers which business question.`,

"db-da-77": `✅ CORRECT (C — Stop working and notify supervisor for compliance): When a data analyst discovers unauthorized PII access, the correct protocol is: (1) IMMEDIATELY stop accessing the data, (2) DO NOT modify or delete anything, and (3) ESCALATE to a supervisor or data governance team to ensure proper handling per organizational policies and legal requirements (GDPR, HIPAA, etc.).

❌ Why others are wrong:
• (A) "Delete the table and files": Destroying data could violate data retention policies, destroy evidence, and potentially break other workflows. An analyst should NEVER unilaterally delete data.
• (B) "Proceed with other data": Ignoring the PII exposure is a compliance violation. The issue must be reported regardless of whether the analyst uses the data.
• (D) "Drop the column without notification": Modifying the table structure without authorization could break pipelines and hide the incident from governance teams.

🎯 EXAM TIP: PII discovery protocol: STOP → REPORT → DON'T MODIFY. The exam tests data governance behavior, not just technical SQL skills. The correct answer always involves escalation and compliance.`,

"db-da-84": `✅ CORRECT: CREATE OR REPLACE TABLE database_name.table_name (col1 TYPE1, col2 TYPE2, ...) creates an empty managed table with the specified schema. "OR REPLACE" ensures the table is dropped and recreated if it already exists, guaranteeing a fresh, empty table every time.

❌ Why others are wrong:
• Other options likely use: (1) CREATE TABLE without OR REPLACE (fails if table exists), (2) CREATE TABLE IF NOT EXISTS (keeps existing data, doesn't empty it), (3) DROP + CREATE in separate statements (works but isn't atomic), or (4) CTAS which creates WITH data from a query.

🎯 EXAM TIP: CREATE OR REPLACE TABLE = atomic drop + recreate (guaranteed empty). CREATE TABLE IF NOT EXISTS = keep existing (not empty). TRUNCATE TABLE = empty existing (keeps schema). Know the difference.`,

"db-da-85": `✅ CORRECT (D — Business analyst): Business analysts are the primary persona for Databricks SQL. They use: SQL Editor for writing queries, AI/BI Dashboards for reporting, Alerts for KPI monitoring, and Genie Spaces for natural-language data exploration. DBSQL is designed around their workflow.

❌ Why others are wrong:
• (A) Data scientist: Data scientists primarily use Databricks Machine Learning (notebooks, MLflow, feature store) — DBSQL is secondary.
• (B) Data engineer: Data engineers use Databricks Workspace (notebooks, Spark, DLT pipelines) — DBSQL is for validation/QA only.
• (C) Platform architect: Platform architects focus on infrastructure, networking, and workspace configuration — not day-to-day SQL querying.

🎯 EXAM TIP: Persona → Service mapping: Business/Data/SQL/BI Analyst → Databricks SQL. Data Engineer → Workspace (notebooks + DLT). Data Scientist → ML Runtime + MLflow. This is tested repeatedly.`,

"db-da-86": `✅ CORRECT: SELECT product_id, sale_date, SUM(sale_amount) AS daily_total FROM sales GROUP BY product_id, sale_date correctly collapses multiple sale records into one row per product per day, summing the sale amounts. The GROUP BY includes BOTH dimensions needed for the desired granularity.

❌ Why others are wrong:
• Other options likely have: (1) window function SUM() OVER () which keeps all rows instead of collapsing, (2) missing GROUP BY, (3) GROUP BY with only one column (wrong granularity), or (4) ROW_NUMBER which numbers rows but doesn't aggregate.

🎯 EXAM TIP: "One row per X per Y with total" = GROUP BY X, Y + SUM(). Window functions preserve all rows. GROUP BY collapses rows. The exam tests whether you need aggregation (GROUP BY) vs. annotation (window functions).`

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
  fs.copyFileSync(FILE, FILE + '.bak_exec1');
  fs.writeFileSync(FILE, modified, 'utf8');
  console.log('Saved. Backup: ' + FILE + '.bak_exec1');
}
