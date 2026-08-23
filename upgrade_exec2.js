/**
 * UPGRADE: Executing Queries Deep-Dive — Batch 2 (remaining 33 questions)
 */
const fs = require('fs');
const FILE = 'questions_databricks.js';
const content = fs.readFileSync(FILE, 'utf8');

const explanations = {

"db-da-89": `✅ CORRECT (C — Lakeflow Spark Declarative Pipelines): Lakeflow Spark Declarative Pipelines (Delta Live Tables) enable declarative ETL. Analysts define WHAT data should look like using SQL/Python, and the platform handles HOW — orchestration, dependency resolution, error handling, and automatic quality enforcement via EXPECTATIONS.

❌ Why others are wrong:
• (A) Lakeflow Jobs: Jobs schedules and orchestrates notebooks/scripts but doesn't provide declarative transformation definitions or built-in quality expectations.
• (B) Lakeflow Tables: Not a real product name. Delta Live Tables is the declarative pipeline system.
• (D) Lakeflow Connect: Handles data ingestion connectors to external sources but doesn't define declarative transformations.

🎯 EXAM TIP: DLT/Declarative Pipelines keywords: "declarative," "quality expectations," "automatic orchestration," "data quality constraints." When you see these together, the answer is Lakeflow Spark Declarative Pipelines (DLT).`,

"db-da-92": `✅ CORRECT (D + E — Add Unity Catalog column descriptions + Include example queries): Column descriptions in Unity Catalog (D) give Genie semantic context about what columns mean. Example queries (E) show Genie how business users phrase questions and map them to SQL logic. Together, they dramatically improve natural language → SQL translation accuracy.

❌ Why others are wrong:
• (A) "Provide sample values": While helpful, sample values alone don't explain business semantics (e.g., what "CHN" means in region_code).
• (B) "Write domain-specific instructions": Instructions help but are less structured than column descriptions + examples for consistent query generation.
• (C) "Add more columns": More columns without descriptions adds noise, not signal. Quality of context > quantity of columns.

🎯 EXAM TIP: Genie optimization hierarchy: (1) Unity Catalog descriptions (structured metadata), (2) Example queries (behavioral patterns), (3) Instructions (business rules). The exam tests which combination best improves Genie's accuracy.`,

"db-da-105": `✅ CORRECT (A — Create a materialized view for precomputed daily aggregation): Materialized views store precomputed query results. Since the data changes once daily, the MV is fresh for all subsequent report runs throughout the day — avoiding expensive re-aggregation of the large transactions table each time.

❌ Why others are wrong:
• (B) "Dynamic view": A standard VIEW re-executes the full aggregation query every time, providing no performance benefit for repeated runs.
• (C) "Standard view + scheduled notebook cache": Over-engineered — materialized views provide this capability natively without external scheduling.
• (D) "Streaming table for real-time ingestion": The data changes ONCE daily, not continuously. Streaming is overkill for daily batch updates.

🎯 EXAM TIP: Materialized View use case: expensive aggregation + source data changes infrequently + results read frequently. If data changes continuously, consider streaming tables instead.`,

"db-da-106": `✅ CORRECT (C — Use display() or %sql, then click + icon in result cell): Databricks notebooks have built-in visualization capabilities. After running a SQL query with %sql or display(), a "+" icon appears above the result table. Clicking it opens the visualization editor where you can create line charts, bar charts, scatter plots, and more — no code required.

❌ Why others are wrong:
• (A) "Export to Excel for charting": Unnecessary — Databricks has native visualization. Exporting loses interactivity and real-time data connection.
• (B) "Python plotly express": While possible, it's more complex than the built-in visualization for simple charts. The question asks for the easiest approach.
• (D) "Copy to dashboard": You don't need to copy to a dashboard to visualize — the notebook result cell has built-in charting.

🎯 EXAM TIP: Notebook visualization flow: Run query → Click "+" on results → Choose chart type → Configure axes. No code or external tools needed. This is the fastest path from query to chart in notebooks.`,

"db-da-127": `✅ CORRECT (B — Databricks Git Folders / Repos): Git Folders (formerly Repos) integrate Git version control directly into Databricks. Analysts can save SQL files to Git repositories (GitHub, Azure DevOps, GitLab), track changes with commits, collaborate using branches, and implement CI/CD workflows.

❌ Why others are wrong:
• (A) Query History: Records past query executions but doesn't provide version control, branching, or collaboration features.
• (C) Workspace Browser: Navigates files and folders in the Databricks workspace but doesn't offer Git-based version control.
• (D) System Tables: Store telemetry, billing, and audit data — no version control functionality.

🎯 EXAM TIP: Version control in Databricks = Git Folders (Repos). Key capabilities: branch management, commit history, pull requests, and CI/CD integration. The exam tests this for software engineering best practices questions.`,

"db-da-129": `✅ CORRECT (B — Ignores/skips NULL values completely): Standard SQL aggregate functions (AVG, SUM, MIN, MAX, COUNT(col)) automatically SKIP NULL values. For AVG([10, NULL, 20]): only 10 and 20 are counted, so AVG = (10 + 20) / 2 = 15, NOT (10 + 0 + 20) / 3 = 10.

❌ Why others are wrong:
• (A) "Treats NULLs as 0": FALSE. NULL ≠ 0. If NULLs were treated as 0, averages would be incorrect (the denominator would include NULL rows).
• (C) "Returns NULL if any value is NULL": FALSE. This would make aggregate functions useless on real data. Only non-aggregate expressions can propagate NULLs.
• (D) "Throws runtime error": FALSE. NULLs are expected in data. Aggregate functions handle them gracefully by skipping.

🎯 EXAM TIP: NULL handling in aggregates: AVG, SUM, MIN, MAX = skip NULLs. COUNT(*) = counts ALL rows. COUNT(column) = counts only non-NULL values. The exam tests COUNT(*) vs COUNT(col) distinction.`,

"db-da-133": `✅ CORRECT (B — RESTORE TABLE my_table TO VERSION AS OF 5): This command restores the ENTIRE table to its state at version 5, creating a new version that reflects the version 5 content. All changes made after version 5 are effectively undone. The table is immediately usable at the restored state.

❌ Why others are wrong:
• (A) "ROLLBACK TABLE": Not valid Databricks SQL syntax. ROLLBACK is for transaction management, not table versioning.
• (C) "SELECT * FROM table VERSION AS OF 5": This QUERIES data at version 5 but does NOT restore the table. The table remains at its current version.
• (D) "UNDO TABLE": Not valid SQL syntax.
• (E) "RESET TABLE": Not valid SQL syntax.

🎯 EXAM TIP: RESTORE = action (changes the table state). VERSION AS OF = read-only time travel (queries historical data). The exam ALWAYS has both options to test if you know the difference. RESTORE creates a new version, it's NOT destructive.`,

"db-da-151": `✅ CORRECT (B — REFRESH STREAMING TABLE my_table FULL): FULL refresh truncates the existing streaming table data and reprocesses ALL records from the source from scratch. This is needed when the table definition changes (new columns, modified logic) and incremental processing would miss the changes.

❌ Why others are wrong:
• (A) "REFRESH... INCREMENTAL": Incremental only processes NEW records since the last checkpoint. It won't reprocess historical data with the updated definition.
• (C) "TRUNCATE TABLE": Truncate removes data but doesn't trigger a refresh. The table would be empty with no reprocessing.
• (D) "DROP AND RECREATE": Destructive and unnecessary — FULL refresh handles reprocessing without losing the table definition or pipeline configuration.
• (E) "ALTER TABLE SET REFRESH MODE = FULL": Not valid syntax. Refresh mode is specified on the REFRESH command, not as a table property.

🎯 EXAM TIP: Streaming table refresh modes: INCREMENTAL (default, process only new data) vs. FULL (reprocess everything). Use FULL when: definition changed, source schema evolved, or data corruption needs repair.`,

"db-da-155": `✅ CORRECT (B — Increase maximum number of clusters): When queries are queueing, the warehouse needs more concurrent processing capacity. Increasing the max clusters allows the warehouse to scale out — each additional cluster can handle its own set of queries, reducing queue wait times during peak hours.

❌ Why others are wrong:
• (A) "Reduce cluster size": Smaller clusters have less compute power per cluster, making each query slower — worsening the problem.
• (C) "Switch from Serverless to Pro": Both types support scaling. The issue is the max cluster limit (1), not the warehouse type.
• (D) "Disable auto-stop": Auto-stop affects startup time, not concurrency. The warehouse is already running during peak hours.
• (E) "Enable Photon": Photon speeds up individual queries but doesn't add concurrent capacity. If queries are queueing, you need more clusters.

🎯 EXAM TIP: Query queueing = concurrency problem → increase max clusters (horizontal scaling). Slow individual queries = performance problem → increase cluster SIZE (vertical scaling) or enable Photon. Different problems, different solutions.`,

"db-da-157": `✅ CORRECT (B — UNION): UNION combines two result sets and automatically removes duplicate rows from the combined output. It performs an implicit DISTINCT operation on the merged data.

❌ Why others are wrong:
• (A) UNION ALL: Combines result sets but KEEPS all duplicates. If the same row exists in both sets, it appears twice.
• (C) INTERSECT: Returns ONLY rows that appear in BOTH result sets — not a union, but an intersection.
• (D) EXCEPT: Returns rows from the first set that do NOT appear in the second set — a subtraction, not a union.
• (E) CROSS JOIN: Produces the Cartesian product (every row × every row) — completely different from combining result sets.

🎯 EXAM TIP: UNION = merge + deduplicate. UNION ALL = merge + keep duplicates (faster). INTERSECT = common rows only. EXCEPT = first minus second. The exam requires knowing all four set operations.`,

"db-da-158": `✅ CORRECT (B — NULL): LAG() returns the value from the PREVIOUS row in the window defined by ORDER BY. For the FIRST row in the result set, there IS no previous row, so LAG() returns NULL by default. You can specify a default: LAG(salary, 1, 0) would return 0 instead.

❌ Why others are wrong:
• (A) "Same salary value": LAG returns the PREVIOUS row's value, not the current row's value. That would be the column itself.
• (C) "0": LAG returns NULL by default, not 0. You'd need LAG(salary, 1, 0) to get 0 as a default.
• (D) "Error thrown": No error — LAG gracefully handles boundary cases by returning NULL.
• (E) "Last row's salary": LAG looks BACKWARD, not to the end. Wrapping around would require custom logic.

🎯 EXAM TIP: Window function boundaries: LAG at first row = NULL. LEAD at last row = NULL. Default values change this: LAG(col, 1, default_val). The exam tests both NULL behavior and default value syntax.`,

"db-da-159": `✅ CORRECT (B — Gold): CASE WHEN evaluates conditions TOP-TO-BOTTOM and returns the result for the FIRST matching condition. For total_purchases = 750: (1) 750 >= 1000? FALSE → skip. (2) 750 >= 500? TRUE → return 'Gold'. Remaining conditions are NOT evaluated.

❌ Why others are wrong:
• (A) Platinum: 750 >= 1000 is FALSE, so Platinum is skipped.
• (C) Silver: 750 >= 500 matches BEFORE the Silver condition is reached. CASE stops at the first TRUE.
• (D) Bronze: Bronze is never evaluated because Gold already matched.
• (E) NULL: NULL only occurs if NO conditions match AND there's no ELSE clause.

🎯 EXAM TIP: CASE WHEN = short-circuit evaluation (first match wins). Order matters! If you swap conditions (>= 500 before >= 1000), 1000+ values would incorrectly match Gold instead of Platinum. The exam tests this ordering behavior.`,

"db-da-160": `✅ CORRECT: COALESCE returns the FIRST non-NULL argument from its parameter list. For discount = NULL: COALESCE(NULL, 0) skips NULL and returns 0. COALESCE is the standard way to replace NULLs with default values.

❌ Why others are wrong:
• (A) NULL: COALESCE specifically EXISTS to avoid returning NULL. If the first argument is NULL, it moves to the next.
• (C) 10: 10 would only be returned if discount = 10 (first argument is non-NULL, so COALESCE returns it directly).
• (D) "Error because NULL can't be compared": COALESCE doesn't compare NULL — it checks for NULL to determine which argument to return.

🎯 EXAM TIP: COALESCE(a, b, c) = first non-NULL value. Common patterns: COALESCE(nullable_col, 0) for numbers, COALESCE(nullable_col, 'Unknown') for strings. NVL(a, b) is shorthand for COALESCE with 2 arguments.`,

"db-da-161": `✅ CORRECT: DATE_TRUNC('MONTH', sale_date) truncates a date to the first day of its month (e.g., 2025-03-15 → 2025-03-01), preserving the year. Combined with SUM and GROUP BY, it correctly aggregates daily sales into monthly totals. MONTH(sale_date) alone loses the year, causing cross-year mixing.

❌ Why others are wrong:
• The other options likely use MONTH() function alone (loses year — March 2024 and March 2025 would merge), or EXTRACT without year component, or incorrect GROUP BY.

🎯 EXAM TIP: Date aggregation: DATE_TRUNC('MONTH', date) preserves year (RECOMMENDED). MONTH(date) returns only month number (1-12, LOSES year). DATE_FORMAT(date, 'yyyy-MM') returns string (works but changes type). The exam tests which preserves year context.`,

"db-da-162": `✅ CORRECT (B — Alice appears with order_id = NULL and amount = NULL): LEFT JOIN returns ALL rows from the left table (customers) regardless of whether matches exist in the right table (orders). When there's no match, the right table columns are filled with NULL — not 0, not empty string, specifically NULL.

❌ Why others are wrong:
• (A) "Alice excluded": That would be an INNER JOIN behavior. LEFT JOIN always includes all left-table rows.
• (C) "order_id = 0 and amount = 0": NULL ≠ 0. SQL treats missing data as NULL, not as zero.
• (D) "Error thrown": LEFT JOIN handles non-matches gracefully — no error.
• (E) "Empty string and 0": SQL doesn't fill unmatched columns with empty strings. NULL is the standard for "no matching data."

🎯 EXAM TIP: LEFT JOIN non-matches → NULL columns from right table. INNER JOIN non-matches → row excluded entirely. This NULL-vs-excluded distinction is fundamental and tested frequently.`,

"db-da-163": `✅ CORRECT (A — PIVOT rotates quarter rows into columns): PIVOT transposes row values into column headers. The syntax PIVOT (SUM(revenue) FOR quarter IN ('Q1','Q2','Q3','Q4')) creates separate columns for each quarter value, with SUM(revenue) as the cell values. Output: product | Q1 | Q2 | Q3 | Q4.

❌ Why others are wrong:
• (B) "GROUP BY creates the pivot": GROUP BY aggregates but doesn't restructure rows into columns. The output would still have quarter as a column, not separate Q1/Q2/Q3/Q4 columns.
• (C) "UNPIVOT transforms rows to columns": UNPIVOT does the OPPOSITE — it converts columns into rows. PIVOT = rows→columns. UNPIVOT = columns→rows.
• (D) "Both A and B correct": Only PIVOT restructures the data layout.

🎯 EXAM TIP: PIVOT = rows become columns (wide format). UNPIVOT = columns become rows (long format). Know the syntax: PIVOT (agg_func(value_col) FOR category_col IN (val1, val2, ...)).`,

"db-da-164": `✅ CORRECT (B — 6 rows): EXPLODE generates one row per array element. Order 1: ['laptop','mouse'] = 2 rows. Order 2: ['keyboard'] = 1 row. Order 3: ['monitor','cable','adapter'] = 3 rows. Total: 2 + 1 + 3 = 6 rows.

❌ Why others are wrong:
• (A) 3 rows: That would be the original table (3 orders). EXPLODE expands, it doesn't preserve rows.
• (C) 1 row: That would be an aggregation, not an explosion.
• (D) "Error — EXPLODE can't be used in SELECT": FALSE. EXPLODE works in SELECT, FROM (LATERAL VIEW), and is fully supported.
• (E) 9 rows: This would require all arrays having 3 elements each. Only order 3 has 3 elements.

🎯 EXAM TIP: EXPLODE row count = sum of array lengths across all rows. Practice: count elements in each array, then add them up. The exam gives exact array values for you to count.`,

"db-da-165": `✅ CORRECT (B — 1, 2, 2, 3): DENSE_RANK assigns the same rank to tied values AND does NOT skip ranks after ties. With salaries 100K, 90K, 90K, 80K (DESC): 100K→1, 90K→2, 90K→2 (tie), 80K→3 (next consecutive number, no gap).

❌ Why others are wrong:
• (A) 1,2,3,4: This would be ROW_NUMBER (unique rank, no ties recognized).
• (C) 1,2,2,4: This would be RANK (same rank for ties BUT skips ranks — goes 1,2,2,4 instead of 1,2,2,3).
• (D) 1,2,3,3: Wrong tie handling — 90K appears twice but would need same rank.
• (E) 1,1,2,3: 100K and 90K are different values, they can't both be rank 1.

🎯 EXAM TIP: ROW_NUMBER = 1,2,3,4 (always unique). RANK = 1,2,2,4 (ties + skip). DENSE_RANK = 1,2,2,3 (ties + no skip). This is one of the MOST tested SQL concepts on the exam.`,

"db-da-166": `✅ CORRECT (A — WHERE can't reference alias; use HAVING COUNT(*) > 5): SQL execution order: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY. WHERE runs BEFORE GROUP BY, so aggregate functions and column aliases don't exist yet. HAVING runs AFTER GROUP BY and can filter on aggregate results.

❌ Why others are wrong:
• (B) "Remove WHERE clause entirely": This removes the filter — the analyst wants to filter, just in the right place (HAVING).
• (C) "GROUP BY before WHERE": GROUP BY already comes after WHERE in standard SQL syntax. The issue isn't order, it's using the wrong clause.
• (D) "Change COUNT(*) to SUM(1)": SUM(1) produces the same result as COUNT(*) — the issue is WHERE vs. HAVING, not the function.
• (E) "Add ORDER BY before WHERE": ORDER BY always comes LAST in SQL execution. This would be a syntax error.

🎯 EXAM TIP: WHERE = row-level filter (before aggregation). HAVING = group-level filter (after aggregation). If it involves an aggregate function (COUNT, SUM, AVG) → HAVING. If it involves a column value → WHERE. This is tested 2-3 times per exam.`,

"db-da-167": `✅ CORRECT (B — Exactly one row per region with the top salesperson): ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC) assigns rank 1 to the highest total_sales in each region. The WHERE rn = 1 filter keeps only the top row per partition. Unlike RANK/DENSE_RANK, ROW_NUMBER always assigns unique numbers, so even ties produce exactly one row.

❌ Why others are wrong:
• (A) "All salespeople from all regions": The WHERE rn = 1 filter removes everyone except rank 1.
• (C) "Single top across all regions": PARTITION BY region creates separate rankings per region, not a global ranking.
• (D) "CTEs can't use window functions": FALSE. CTEs support all SQL expressions including window functions.
• (E) "Multiple rows for ties": ROW_NUMBER gives unique numbers even for ties (arbitrary tiebreaker). RANK or DENSE_RANK would need additional filtering for ties.

🎯 EXAM TIP: "Top N per group" pattern: ROW_NUMBER() OVER (PARTITION BY group ORDER BY metric DESC) + WHERE rn <= N. This is the standard SQL pattern for top-N analysis per category.`,

"db-da-168": `✅ CORRECT (A or D — EXCEPT correctly finds customers in 2024 but not in 2025): EXCEPT returns rows from the first query that are NOT present in the second query. SELECT customer_id FROM orders WHERE YEAR = 2024 EXCEPT SELECT customer_id FROM orders WHERE YEAR = 2025 gives customers who ordered in 2024 but NOT in 2025.

❌ Why others are wrong:
• Other incorrect options use: (1) WHERE with both year conditions in one query (impossible — a single row can't be in 2024 AND 2025), (2) LEFT ANTI JOIN without proper setup, or (3) NOT IN with syntax errors.

🎯 EXAM TIP: "In A but NOT in B" = EXCEPT (or NOT EXISTS/NOT IN). "In both A AND B" = INTERSECT. "In A or B or both" = UNION. These set operations map directly to set theory concepts.`,

"db-da-169": `✅ CORRECT (B — Query is correct, calculates salary percentage of department total): SUM(salary) OVER (PARTITION BY department) computes the department total salary WITHOUT collapsing rows. Each row retains its individual salary and gets the department total as a window calculation. Dividing salary by this total and multiplying by 100 gives the percentage.

❌ Why others are wrong:
• (A) "Fails because SUM with OVER isn't allowed": FALSE. Window functions (SUM, AVG, COUNT) with OVER clauses are fully supported.
• (C) "Returns 100% for every row": That would only happen if each employee were in their own department (salary/salary = 1).
• (D) "Requires GROUP BY": Window functions specifically AVOID GROUP BY. They compute across partitions without collapsing rows.
• (E) "Returns NULL for all rows": No reason for NULL — all values are numeric.

🎯 EXAM TIP: Window functions PRESERVE all rows while computing across partitions. GROUP BY COLLAPSES rows. When you need both individual values AND group totals in the same row, use window functions.`,

"db-da-170": `✅ CORRECT (B — NULL): LEAD() returns the value from the NEXT row in the window. For the LAST row in each partition (customer), there IS no next row, so LEAD() returns NULL by default. You can specify a default: LEAD(order_date, 1, '9999-12-31').

❌ Why others are wrong:
• (A) "Same value": LEAD gets the NEXT row's value, not the current row's value.
• (C) "Wraps around to first": Window functions don't wrap — they return NULL at boundaries.
• (D) "Error thrown": LEAD handles boundaries gracefully with NULL, no error.
• (E) "CURRENT_DATE()": LEAD doesn't substitute system functions for missing values.

🎯 EXAM TIP: LAG = previous row (NULL at first row). LEAD = next row (NULL at last row). Both support default values as third argument. The exam tests boundary behavior for both functions.`,

"db-da-171": `✅ CORRECT (B — Existing row is updated with source name and current timestamp): When MERGE finds a matching id in both tables (WHEN MATCHED), it executes the UPDATE clause — setting t.name = s.name and t.updated_at = CURRENT_TIMESTAMP(). No rows are inserted or deleted for this match.

❌ Why others are wrong:
• (A) "Duplicate row inserted": INSERT only fires for NOT MATCHED rows. A matched id triggers UPDATE, not INSERT.
• (C) "Deleted from both tables": MERGE can include DELETE clauses but this one only has UPDATE and INSERT.
• (D) "Error — can't have both MATCHED and NOT MATCHED": FALSE. Multiple WHEN clauses is the standard MERGE pattern (upsert).
• (E) "Nothing happens — only NOT MATCHED processes": Both clauses execute independently based on the match condition.

🎯 EXAM TIP: MERGE clause execution: matched id → WHEN MATCHED runs. Unmatched source id → WHEN NOT MATCHED runs. They're independent. MERGE can also have WHEN NOT MATCHED BY SOURCE for handling deleted-from-source records.`,

"db-da-172": `✅ CORRECT (C — Row is excluded because 25 is NOT > 30): DATEDIFF(CURRENT_DATE(), '2026-03-01') with today = 2026-03-26 gives 25 days. The WHERE clause requires days > 30, and 25 does NOT satisfy this condition. The entire row is excluded from the output — you wouldn't see it at all.

❌ Why others are wrong:
• (A) "25": That would be the days_since_order value IF the row passed the filter — but it doesn't pass (25 is not > 30).
• (B) "30": Incorrect DATEDIFF calculation.
• (D) "26": Incorrect DATEDIFF calculation.
• (E) "1": Incorrect DATEDIFF calculation.

🎯 EXAM TIP: DATEDIFF(end, start) = end - start in days. WHERE filtering happens AFTER computation — even though the SELECT shows the calculated column, the WHERE condition determines whether the row appears at all.`,

"db-da-173": `✅ CORRECT (B — HELLO WORLD): Functions evaluate from INSIDE OUT. Step 1: TRIM('  Hello World  ') removes leading/trailing spaces → 'Hello World'. Step 2: UPPER('Hello World') converts all characters to uppercase → 'HELLO WORLD'. No leading/trailing spaces remain.

❌ Why others are wrong:
• (A) "  Hello World  ": This would mean neither TRIM nor UPPER was applied.
• (C) "  HELLO WORLD  ": UPPER applied but TRIM not applied — wrong order. TRIM runs first (inner function).
• (D) "hello world": LOWER would produce this, not UPPER.
• (E) "Hello World": Only TRIM applied, not UPPER.

🎯 EXAM TIP: Nested function evaluation: innermost first → outermost last. UPPER(TRIM(x)): TRIM first, then UPPER. The exam tests this with 2-3 nested functions. Trace each step carefully.`,

"db-da-174": `✅ CORRECT (C — employee_id of highest-paid employee, same for all rows in department): FIRST_VALUE(employee_id) OVER (PARTITION BY department ORDER BY salary DESC) returns the first value in the window frame. Since the window is ordered by salary DESC, the first value is the HIGHEST salary's employee_id. This value is identical for ALL rows in the same department.

❌ Why others are wrong:
• (A) "Lowest-paid": ORDER BY salary DESC puts highest first. For lowest, you'd need ORDER BY salary ASC.
• (B) "First hired": The window is ordered by SALARY, not hire date. Order determines which value is "first."
• (D) "Different for each row": FIRST_VALUE returns the SAME first value for every row in the partition — that's its purpose.
• (E) "NULL for all": There's data in the partition, so FIRST_VALUE returns a valid employee_id.

🎯 EXAM TIP: FIRST_VALUE + ORDER BY DESC = highest value. FIRST_VALUE + ORDER BY ASC = lowest value. LAST_VALUE with UNBOUNDED frame = opposite end. The ORDER BY direction determines what "first" means.`,

"db-da-175": `✅ CORRECT: CASE WHEN evaluates top-to-bottom with short-circuit logic. quantity = 120, unit_price = 50. First condition: 120 > 100? TRUE → return 50 * 0.80 = 40. The 80% discount rate is applied because the first matching condition wins.

❌ Why others are wrong:
• (A) 50: Would mean no discount applied — but 120 > 100 matches the first condition.
• (B) 45: Would require 0.90 multiplier — but that's the second condition which is never reached.
• (D) 36: Not a valid result from any of the CASE branches.
• (E) NULL: Would only result if no conditions match and no ELSE clause.

🎯 EXAM TIP: CASE WHEN math: Identify which condition matches FIRST, then compute the arithmetic. The exam combines conditional logic with multiplication — trace both the condition AND the calculation.`,

"db-da-182": `✅ CORRECT (B or C — INNER JOIN with compound ON condition): To join on BOTH customer_id AND region_id, you need either: ON orders.customer_id = customers.customer_id AND orders.region_id = customers.region_id (explicit, option C) or USING (customer_id, region_id) (shorthand when column names match, option B).

❌ Why others are wrong:
• (A) "JOIN ON customer_id only": Missing the region_id condition — would join based on only one key.
• (D) "LEFT JOIN with both conditions": LEFT JOIN changes semantics (includes non-matching rows). The requirement says "ONLY rows where BOTH match" = INNER JOIN.

🎯 EXAM TIP: Multi-key JOIN syntax: ON t1.col1 = t2.col1 AND t1.col2 = t2.col2 (explicit) or USING (col1, col2) (shorthand). USING requires same column names in both tables. The exam tests both syntaxes.`,

"db-da-183": `✅ CORRECT (A — GROUP BY then HAVING with both COUNT and AVG conditions): Correct SQL order: SELECT → FROM → GROUP BY → HAVING. HAVING filters AFTER aggregation, so aggregate conditions (COUNT(*) > 10 AND AVG(price) > 50) belong in HAVING, not WHERE.

❌ Why others are wrong:
• (B) "WHERE COUNT(*) > 10 ... HAVING AVG": COUNT is an aggregate — it CAN'T go in WHERE (WHERE runs before GROUP BY).
• (C) "HAVING before GROUP BY": Invalid syntax order — GROUP BY must precede HAVING.
• (D) "GROUP BY ... WHERE aggregate": WHERE can't contain aggregate functions.

🎯 EXAM TIP: SQL clause order: SELECT ... FROM ... WHERE (row filter) ... GROUP BY ... HAVING (group filter) ... ORDER BY. Aggregates ONLY in HAVING or SELECT, NEVER in WHERE. This is tested multiple times per exam.`,

"db-da-223": `✅ CORRECT (D — WHERE order_quantity != -1): For simple row-level value exclusion, WHERE with an inequality operator (!=) is the most direct and performant approach. It filters out all rows where order_quantity equals -1 while keeping all other values including NULLs and positive numbers.

❌ Why others are wrong:
• (A) "WHERE IS NOT NULL AND > 0": Overly restrictive — removes NULLs and zeros, which might be valid data. The requirement is ONLY to exclude -1 values.
• (B) "WHERE ABS(order_quantity) != 1": ABS(-1) = 1 and ABS(1) = 1, so this would also exclude legitimate order_quantity = 1 values.
• (C) "HAVING order_quantity != -1": HAVING is for aggregate filtering after GROUP BY. This query has no aggregation, so HAVING is inappropriate.

🎯 EXAM TIP: Filter precision: exclude EXACTLY the stated value, nothing more. Read carefully — "exclude -1" means != -1, not "keep only positives" (which would also remove NULLs and zeros).`,

"db-da-224": `✅ CORRECT (B — Use parameter markers :region, :year with input boxes): Databricks SQL supports named parameters prefixed with a colon (e.g., :region, :year). When detected in the SQL Editor, the UI automatically renders input widgets above the editor. The analyst enters values, clicks Run, and the query executes with those parameter values.

❌ Why others are wrong:
• (A) "Hard-code values and rerun": Inefficient and error-prone. Parameters allow testing multiple values without editing the query.
• (C) "Question marks for prompts": While ? is used in some JDBC drivers, Databricks SQL Editor uses the :name syntax for interactive parameter widgets.
• (D) "Python notebook variables": This would work in a notebook but the question specifies the SQL Editor workflow.

🎯 EXAM TIP: DBSQL parameters: :parameter_name in SQL Editor → auto-generated input widget. Parameter types: text, number, dropdown, date, query-based. When added to dashboards, parameters become interactive filters.`,

"db-da-232": `✅ CORRECT (C — HyperLogLog++ for fast approximate counts with ~2% error): APPROX_COUNT_DISTINCT uses HyperLogLog++ to estimate distinct counts using fixed memory regardless of data size. On billions of records, it runs orders of magnitude faster than COUNT(DISTINCT) with approximately 2% error tolerance — perfect for dashboards and trend monitoring.

❌ Why others are wrong:
• (A) "APPROX provides exact, COUNT DISTINCT provides estimates": REVERSED. COUNT(DISTINCT) is exact. APPROX_COUNT_DISTINCT is the approximate one.
• (B) "Only works with string columns": Works with ALL data types — strings, numbers, dates, timestamps.
• (D) "Stores only first 1000 values": HLL++ doesn't store actual values — it maintains a compact probabilistic sketch regardless of cardinality.

🎯 EXAM TIP: APPROX_COUNT_DISTINCT: use for billions of rows where ~2% error is acceptable (dashboards, metrics). COUNT(DISTINCT): use when exact precision is required (financial reporting, auditing). The exam tests when to use which.`

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
  fs.copyFileSync(FILE, FILE + '.bak_exec2');
  fs.writeFileSync(FILE, modified, 'utf8');
  console.log('Saved. Backup: ' + FILE + '.bak_exec2');
}
