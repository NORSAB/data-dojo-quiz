// ============================================================
// EXPANDED STUDY MODULE — Databricks DA Associate
// Covers domains identified as MISSING or SHALLOW in the audit
// This file EXTENDS study_databricks_urgent.js — does NOT replace it
// ============================================================
(function() {
    window.studyData = window.studyData || {};

    const styleBox = (type, title) => `
        <div class="content-box box-${type}">
            ${title ? `<strong class="box-title">${title}</strong>` : ''}
    `;
    const langSection = (lang, content) => `
        <div class="lang-section" data-lang="${lang}">${content}</div>
    `;

    const expandedSections = [
        // =====================================================
        // DOMAIN: EXECUTING QUERIES (70 questions — was ZERO)
        // =====================================================
        {
            title: 'E1. Executing Queries — Window Functions & Aggregations',
            items: [
                {
                    title: "Window Functions: ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD",
                    content: `
                        ${langSection('en', `
                            <h5>Window Functions — The Most Tested SQL Topic</h5>
                            <p>Window functions perform calculations <strong>across rows related to the current row</strong> without collapsing results like GROUP BY. They use the <code>OVER()</code> clause.</p>
                            <pre><code>-- ROW_NUMBER: Unique sequential numbers (no ties)
SELECT employee_id, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
FROM employees;

-- RANK: Allows ties, skips numbers (1,2,2,4)
SELECT employee_id, salary,
  RANK() OVER (ORDER BY salary DESC) AS rank_num
FROM employees;

-- DENSE_RANK: Allows ties, NO skipping (1,2,2,3)
SELECT employee_id, salary,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_num
FROM employees;</code></pre>
                            ${styleBox('blue', 'RANK vs DENSE_RANK vs ROW_NUMBER — Critical Exam Distinction')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Function</th><th>Ties?</th><th>Gaps?</th><th>Example (salary: 100,100,90)</th></tr>
                                    <tr><td><strong>ROW_NUMBER</strong></td><td>No — always unique</td><td>No</td><td>1, 2, 3</td></tr>
                                    <tr><td><strong>RANK</strong></td><td>Yes</td><td>Yes — skips after tie</td><td>1, 1, 3</td></tr>
                                    <tr><td><strong>DENSE_RANK</strong></td><td>Yes</td><td>No — continuous</td><td>1, 1, 2</td></tr>
                                </table>
                            </div>

                            <h5>LAG & LEAD — Access Previous/Next Row</h5>
                            <pre><code>-- LAG: Access the PREVIOUS row's value
SELECT customer_id, order_date, amount,
  LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS prev_amount,
  amount - LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS change
FROM orders;

-- LEAD: Access the NEXT row's value
SELECT customer_id, order_date,
  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS next_order,
  DATEDIFF(LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date), order_date) AS days_between
FROM orders;</code></pre>
                            ${styleBox('yellow', 'Exam Trap: LAG/LEAD with NULL')}
                                <p>The <strong>first row</strong> has no previous row, so <code>LAG()</code> returns <code>NULL</code>. Similarly, the <strong>last row</strong>'s <code>LEAD()</code> returns <code>NULL</code>. Use <code>LAG(col, 1, default_value)</code> to specify a default.</p>
                            </div>

                            <h5>FIRST_VALUE & Aggregate Window Functions</h5>
                            <pre><code>-- FIRST_VALUE: Get the top earner per department
SELECT department, employee_id, salary,
  FIRST_VALUE(employee_id) OVER (
    PARTITION BY department ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS top_earner
FROM employees;

-- Running total using SUM as window function
SELECT order_date, amount,
  SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Funciones de Ventana — El Tema SQL Más Evaluado</h5>
                            <p>Las funciones de ventana realizan cálculos <strong>a través de filas relacionadas con la fila actual</strong> sin colapsar resultados como GROUP BY. Usan la cláusula <code>OVER()</code>.</p>
                            <pre><code>-- ROW_NUMBER: Números secuenciales únicos (sin empates)
SELECT employee_id, department, salary,
  ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS rn
FROM employees;

-- RANK: Permite empates, salta números (1,2,2,4)
SELECT employee_id, salary,
  RANK() OVER (ORDER BY salary DESC) AS rank_num
FROM employees;

-- DENSE_RANK: Permite empates, NO salta (1,2,2,3)
SELECT employee_id, salary,
  DENSE_RANK() OVER (ORDER BY salary DESC) AS dense_rank_num
FROM employees;</code></pre>
                            ${styleBox('blue', 'RANK vs DENSE_RANK vs ROW_NUMBER — Distinción Crítica del Examen')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Función</th><th>Empates?</th><th>Saltos?</th><th>Ejemplo (salario: 100,100,90)</th></tr>
                                    <tr><td><strong>ROW_NUMBER</strong></td><td>No — siempre único</td><td>No</td><td>1, 2, 3</td></tr>
                                    <tr><td><strong>RANK</strong></td><td>Sí</td><td>Sí — salta después del empate</td><td>1, 1, 3</td></tr>
                                    <tr><td><strong>DENSE_RANK</strong></td><td>Sí</td><td>No — continuo</td><td>1, 1, 2</td></tr>
                                </table>
                            </div>

                            <h5>LAG & LEAD — Acceder Fila Anterior/Siguiente</h5>
                            <pre><code>-- LAG: Accede al valor de la fila ANTERIOR
SELECT customer_id, order_date, amount,
  LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS monto_anterior,
  amount - LAG(amount) OVER (PARTITION BY customer_id ORDER BY order_date) AS cambio
FROM orders;

-- LEAD: Accede al valor de la fila SIGUIENTE
SELECT customer_id, order_date,
  LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date) AS prox_orden,
  DATEDIFF(LEAD(order_date) OVER (PARTITION BY customer_id ORDER BY order_date), order_date) AS dias_entre
FROM orders;</code></pre>
                            ${styleBox('yellow', 'Trampa de Examen: LAG/LEAD con NULL')}
                                <p>La <strong>primera fila</strong> no tiene fila anterior, así que <code>LAG()</code> devuelve <code>NULL</code>. Igualmente, la <strong>última fila</strong> con <code>LEAD()</code> devuelve <code>NULL</code>. Usa <code>LAG(col, 1, valor_default)</code> para especificar un default.</p>
                            </div>

                            <h5>FIRST_VALUE & Funciones de Ventana Agregadas</h5>
                            <pre><code>-- FIRST_VALUE: Obtener el mayor salario por departamento
SELECT department, employee_id, salary,
  FIRST_VALUE(employee_id) OVER (
    PARTITION BY department ORDER BY salary DESC
    ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING
  ) AS top_earner
FROM employees;

-- Total acumulado usando SUM como función de ventana
SELECT order_date, amount,
  SUM(amount) OVER (ORDER BY order_date) AS total_acumulado
FROM orders;</code></pre>
                        `)}
                    `
                },
                {
                    title: "CTEs, CASE WHEN, PIVOT & MERGE INTO",
                    content: `
                        ${langSection('en', `
                            <h5>CTEs — Common Table Expressions</h5>
                            <pre><code>-- CTE is a named, reusable subquery
WITH ranked AS (
  SELECT region, salesperson, total_sales,
    ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_sales DESC) AS rn
  FROM sales
)
SELECT region, salesperson, total_sales
FROM ranked
WHERE rn = 1;  -- Top salesperson per region</code></pre>
                            ${styleBox('green', 'CTE Key Facts')}
                                <ul>
                                    <li><strong>Scope:</strong> Only exists for the single query that follows it</li>
                                    <li><strong>Not materialized:</strong> Re-evaluated each time it's referenced (unlike temp tables)</li>
                                    <li><strong>Readable:</strong> Makes complex queries easier to understand vs nested subqueries</li>
                                    <li><strong>Recursive:</strong> Databricks supports recursive CTEs</li>
                                </ul>
                            </div>

                            <h5>CASE WHEN — Conditional Logic</h5>
                            <pre><code>SELECT customer_id, total_purchases,
  CASE
    WHEN total_purchases > 10000 THEN 'Platinum'
    WHEN total_purchases > 5000 THEN 'Gold'
    WHEN total_purchases > 1000 THEN 'Silver'
    ELSE 'Bronze'
  END AS loyalty_tier
FROM customers;</code></pre>

                            <h5>PIVOT — Rows to Columns</h5>
                            <pre><code>-- Transform rows into columns
SELECT * FROM sales
PIVOT (
  SUM(revenue) FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4')
);

-- Result: product | Q1 | Q2 | Q3 | Q4</code></pre>
                            ${styleBox('yellow', 'Exam Trap: PIVOT Syntax')}
                                <p>The <code>FOR column IN (values)</code> syntax requires <strong>string literals in single quotes</strong>. The aggregate function (SUM, COUNT, etc.) is required.</p>
                            </div>

                            <h5>MERGE INTO — Upsert Pattern</h5>
                            <pre><code>MERGE INTO gold.products AS target
USING staging.new_products AS source
ON target.product_id = source.product_id
WHEN MATCHED THEN UPDATE SET
    target.name = source.name,
    target.price = source.price,
    target.updated_at = current_timestamp()
WHEN NOT MATCHED THEN INSERT (product_id, name, price, updated_at)
    VALUES (source.product_id, source.name, source.price, current_timestamp());</code></pre>
                            ${styleBox('red', 'MERGE Critical Exam Facts')}
                                <ul>
                                    <li><strong>Atomic</strong> — all-or-nothing operation</li>
                                    <li>Can have <strong>WHEN MATCHED</strong>, <strong>WHEN NOT MATCHED</strong>, and <strong>WHEN NOT MATCHED BY SOURCE</strong></li>
                                    <li>Used for <strong>SCD Type 1</strong> (overwrite) and <strong>SCD Type 2</strong> (versioning)</li>
                                    <li>The ON clause defines the <strong>match condition</strong> (usually primary key)</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>CTEs — Common Table Expressions</h5>
                            <pre><code>-- CTE es un subquery con nombre, reutilizable
WITH ranking AS (
  SELECT region, vendedor, total_ventas,
    ROW_NUMBER() OVER (PARTITION BY region ORDER BY total_ventas DESC) AS rn
  FROM ventas
)
SELECT region, vendedor, total_ventas
FROM ranking
WHERE rn = 1;  -- Top vendedor por región</code></pre>
                            ${styleBox('green', 'Datos Clave de CTEs')}
                                <ul>
                                    <li><strong>Alcance:</strong> Solo existe para el query que le sigue</li>
                                    <li><strong>No materializado:</strong> Se re-evalúa cada vez que se referencia (a diferencia de tablas temporales)</li>
                                    <li><strong>Legible:</strong> Hace queries complejas más fáciles de entender vs subconsultas anidadas</li>
                                    <li><strong>Recursivo:</strong> Databricks soporta CTEs recursivos</li>
                                </ul>
                            </div>

                            <h5>CASE WHEN — Lógica Condicional</h5>
                            <pre><code>SELECT customer_id, total_purchases,
  CASE
    WHEN total_purchases > 10000 THEN 'Platinum'
    WHEN total_purchases > 5000 THEN 'Gold'
    WHEN total_purchases > 1000 THEN 'Silver'
    ELSE 'Bronze'
  END AS loyalty_tier
FROM customers;</code></pre>

                            <h5>PIVOT — Filas a Columnas</h5>
                            <pre><code>-- Transformar filas en columnas
SELECT * FROM ventas
PIVOT (
  SUM(revenue) FOR quarter IN ('Q1', 'Q2', 'Q3', 'Q4')
);

-- Resultado: producto | Q1 | Q2 | Q3 | Q4</code></pre>
                            ${styleBox('yellow', 'Trampa de Examen: Sintaxis PIVOT')}
                                <p>La sintaxis <code>FOR column IN (values)</code> requiere <strong>literales de cadena entre comillas simples</strong>. La función de agregación (SUM, COUNT, etc.) es requerida.</p>
                            </div>

                            <h5>MERGE INTO — Patrón Upsert</h5>
                            <pre><code>MERGE INTO gold.productos AS target
USING staging.nuevos_productos AS source
ON target.product_id = source.product_id
WHEN MATCHED THEN UPDATE SET
    target.nombre = source.nombre,
    target.precio = source.precio,
    target.updated_at = current_timestamp()
WHEN NOT MATCHED THEN INSERT (product_id, nombre, precio, updated_at)
    VALUES (source.product_id, source.nombre, source.precio, current_timestamp());</code></pre>
                            ${styleBox('red', 'MERGE — Datos Críticos de Examen')}
                                <ul>
                                    <li><strong>Atómico</strong> — operación todo o nada</li>
                                    <li>Puede tener <strong>WHEN MATCHED</strong>, <strong>WHEN NOT MATCHED</strong>, y <strong>WHEN NOT MATCHED BY SOURCE</strong></li>
                                    <li>Usado para <strong>SCD Tipo 1</strong> (sobrescribir) y <strong>SCD Tipo 2</strong> (versionamiento)</li>
                                    <li>La cláusula ON define la <strong>condición de coincidencia</strong> (usualmente clave primaria)</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "JOINs, Set Operations, Subqueries & NULL Handling",
                    content: `
                        ${langSection('en', `
                            <h5>JOIN Types — Complete Reference</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>JOIN Type</th><th>Returns</th><th>Use Case</th></tr>
                                <tr><td><strong>INNER JOIN</strong></td><td>Matching rows from both tables</td><td>Standard relationship queries</td></tr>
                                <tr><td><strong>LEFT JOIN</strong></td><td>All left + matching right (NULL if no match)</td><td>Keep all from primary table</td></tr>
                                <tr><td><strong>RIGHT JOIN</strong></td><td>All right + matching left</td><td>Rarely used</td></tr>
                                <tr><td><strong>FULL OUTER JOIN</strong></td><td>All from both (NULL where no match)</td><td>Finding mismatches</td></tr>
                                <tr><td><strong>CROSS JOIN</strong></td><td>Every row × every row (cartesian)</td><td>Generating combinations</td></tr>
                                <tr><td><strong>LEFT SEMI JOIN</strong></td><td>Left rows that HAVE a match in right</td><td>EXISTS equivalent — filtering only</td></tr>
                                <tr><td><strong>LEFT ANTI JOIN</strong></td><td>Left rows that DO NOT have a match</td><td>NOT EXISTS — finding gaps</td></tr>
                            </table>
                            ${styleBox('red', 'Exam Trap: LEFT SEMI vs LEFT JOIN')}
                                <p><strong>LEFT SEMI JOIN</strong> returns <strong>only columns from the left table</strong> — it never returns columns from the right table. It is strictly for <strong>filtering</strong>. If the exam asks "which columns appear in the output?" — only left table columns.</p>
                                <pre><code>-- LEFT SEMI: Only returns columns from customers
SELECT * FROM customers
LEFT SEMI JOIN orders ON customers.id = orders.customer_id;
-- Result: customer columns ONLY (no order columns)

-- LEFT ANTI: Customers with NO orders
SELECT * FROM customers
LEFT ANTI JOIN orders ON customers.id = orders.customer_id;</code></pre>
                            </div>

                            <h5>Set Operations: UNION, INTERSECT, EXCEPT</h5>
                            <pre><code>-- UNION: Combine results, remove duplicates
SELECT name FROM table_a
UNION
SELECT name FROM table_b;

-- UNION ALL: Combine results, KEEP duplicates (faster!)
SELECT name FROM table_a
UNION ALL
SELECT name FROM table_b;

-- INTERSECT: Only rows in BOTH
SELECT id FROM set_a INTERSECT SELECT id FROM set_b;

-- EXCEPT: Rows in A but NOT in B
SELECT id FROM customers_2024
EXCEPT
SELECT id FROM customers_2025;  -- Churned customers</code></pre>

                            <h5>NULL Handling Functions</h5>
                            <pre><code>-- COALESCE: Returns first non-NULL value
SELECT COALESCE(discount, 0) AS discount FROM orders;

-- NVL: Same as COALESCE for 2 values
SELECT NVL(email, 'no-email@unknown.com') FROM users;

-- IFNULL: Alias for NVL
SELECT IFNULL(phone, 'N/A') FROM contacts;

-- NULL-safe comparison (handles NULLs in WHERE)
WHERE column IS NULL
WHERE column IS NOT NULL
-- Never use: WHERE column = NULL (always false!)</code></pre>
                            ${styleBox('yellow', 'Exam Fact: AVG ignores NULLs')}
                                <p><code>AVG(sales_amount)</code> automatically <strong>skips NULL values</strong>. It divides by the count of <strong>non-NULL</strong> values only. This is a frequently tested concept.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Tipos de JOIN — Referencia Completa</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo JOIN</th><th>Devuelve</th><th>Caso de Uso</th></tr>
                                <tr><td><strong>INNER JOIN</strong></td><td>Filas que coinciden en ambas tablas</td><td>Queries de relación estándar</td></tr>
                                <tr><td><strong>LEFT JOIN</strong></td><td>Todas izquierda + coincidentes derecha (NULL si no coincide)</td><td>Mantener todo de tabla principal</td></tr>
                                <tr><td><strong>RIGHT JOIN</strong></td><td>Todas derecha + coincidentes izquierda</td><td>Raramente usado</td></tr>
                                <tr><td><strong>FULL OUTER JOIN</strong></td><td>Todas de ambas (NULL donde no coincide)</td><td>Encontrar discrepancias</td></tr>
                                <tr><td><strong>CROSS JOIN</strong></td><td>Cada fila × cada fila (cartesiano)</td><td>Generar combinaciones</td></tr>
                                <tr><td><strong>LEFT SEMI JOIN</strong></td><td>Filas izquierda que SÍ tienen coincidencia</td><td>Equivalente a EXISTS — solo filtrado</td></tr>
                                <tr><td><strong>LEFT ANTI JOIN</strong></td><td>Filas izquierda SIN coincidencia</td><td>NOT EXISTS — encontrar brechas</td></tr>
                            </table>
                            ${styleBox('red', 'Trampa: LEFT SEMI vs LEFT JOIN')}
                                <p><strong>LEFT SEMI JOIN</strong> devuelve <strong>solo columnas de la tabla izquierda</strong> — nunca devuelve columnas de la tabla derecha. Es estrictamente para <strong>filtrado</strong>. Si el examen pregunta "qué columnas aparecen en el resultado?" — solo columnas de la tabla izquierda.</p>
                                <pre><code>-- LEFT SEMI: Solo retorna columnas de clientes
SELECT * FROM clientes
LEFT SEMI JOIN ordenes ON clientes.id = ordenes.customer_id;
-- Resultado: columnas de clientes SOLAMENTE

-- LEFT ANTI: Clientes SIN órdenes
SELECT * FROM clientes
LEFT ANTI JOIN ordenes ON clientes.id = ordenes.customer_id;</code></pre>
                            </div>

                            <h5>Operaciones de Conjuntos: UNION, INTERSECT, EXCEPT</h5>
                            <pre><code>-- UNION: Combinar resultados, eliminar duplicados
SELECT nombre FROM tabla_a
UNION
SELECT nombre FROM tabla_b;

-- UNION ALL: Combinar resultados, MANTENER duplicados (¡más rápido!)
SELECT nombre FROM tabla_a
UNION ALL
SELECT nombre FROM tabla_b;

-- INTERSECT: Solo filas en AMBAS
SELECT id FROM set_a INTERSECT SELECT id FROM set_b;

-- EXCEPT: Filas en A pero NO en B
SELECT id FROM clientes_2024
EXCEPT
SELECT id FROM clientes_2025;  -- Clientes perdidos</code></pre>

                            <h5>Manejo de NULL</h5>
                            <pre><code>-- COALESCE: Devuelve primer valor no NULL
SELECT COALESCE(descuento, 0) AS descuento FROM ordenes;

-- NVL: Igual que COALESCE para 2 valores
SELECT NVL(email, 'no-email@unknown.com') FROM usuarios;

-- IFNULL: Alias para NVL
SELECT IFNULL(telefono, 'N/A') FROM contactos;

-- Comparación segura con NULL (manejo de NULLs en WHERE)
WHERE column IS NULL
WHERE column IS NOT NULL
-- Nunca usar: WHERE column = NULL (¡siempre falso!)</code></pre>
                            ${styleBox('yellow', 'Dato de Examen: AVG ignora NULLs')}
                                <p><code>AVG(monto)</code> automáticamente <strong>omite valores NULL</strong>. Divide por el conteo de valores <strong>no-NULL</strong> solamente. Este es un concepto frecuentemente evaluado.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Array Functions, Date Functions & UDFs",
                    content: `
                        ${langSection('en', `
                            <h5>Array Functions — Heavily Tested</h5>
                            <pre><code>-- EXPLODE: Turn array elements into rows
SELECT order_id, EXPLODE(items) AS item
FROM orders;
-- Input: order_id=1, items=['apple','banana']
-- Output: (1,'apple'), (1,'banana')

-- array_contains: Check if element exists
SELECT * FROM main.analytics.events
WHERE array_contains(tags, 'sql');

-- TRANSFORM: Apply function to each element
SELECT TRANSFORM(prices, x -> x * 1.1) AS prices_with_tax
FROM products;

-- FILTER: Keep elements matching condition
SELECT FILTER(scores, x -> x > 80) AS high_scores
FROM students;

-- SIZE: Get array length
SELECT order_id, SIZE(items) AS item_count FROM orders;</code></pre>
                            ${styleBox('yellow', 'Exam: EXPLODE Result Sets')}
                                <p>If a row has 3 elements in an array and you EXPLODE, you get <strong>3 output rows</strong>. The exam loves testing "how many rows?" after EXPLODE.</p>
                            </div>

                            <h5>Date & Time Functions</h5>
                            <pre><code>-- DATEDIFF: Days between two dates
SELECT DATEDIFF(CURRENT_DATE(), order_date) AS days_since
FROM orders;

-- DATE_TRUNC: Truncate to month/year
SELECT DATE_TRUNC('MONTH', order_date) AS month_start,
       SUM(amount) AS monthly_total
FROM orders
GROUP BY DATE_TRUNC('MONTH', order_date);

-- CURRENT_DATE() and CURRENT_TIMESTAMP()
SELECT CURRENT_DATE();      -- 2026-04-13
SELECT CURRENT_TIMESTAMP(); -- 2026-04-13T12:30:00Z

-- DATE_ADD and DATE_SUB
SELECT DATE_ADD(CURRENT_DATE(), 30) AS thirty_days_later;

-- EXTRACT parts
SELECT EXTRACT(YEAR FROM order_date) AS year FROM orders;</code></pre>

                            <h5>String Functions</h5>
                            <pre><code>SELECT
  UPPER(TRIM('  Hello World  ')) AS result,  -- 'HELLO WORLD'
  LOWER('DATABRICKS') AS lower_result,       -- 'databricks'
  CONCAT(first_name, ' ', last_name) AS full_name,
  SUBSTRING(email, 1, INSTR(email, '@') - 1) AS username,
  REPLACE(phone, '-', '') AS clean_phone,
  LENGTH('test') AS len;  -- 4</code></pre>

                            <h5>User-Defined Functions (UDFs)</h5>
                            <pre><code>-- Create a SQL UDF
CREATE OR REPLACE FUNCTION mask_email(email STRING)
RETURNS STRING
RETURN CONCAT(SUBSTRING(email, 1, 2), '***@', SUBSTRING(email, INSTR(email, '@') + 1));

-- Use it in queries
SELECT customer_id, mask_email(email) AS masked
FROM customers;</code></pre>
                            ${styleBox('green', 'When to Use UDFs (Exam)')}
                                <ul>
                                    <li>Custom transformations that are <strong>reused across multiple queries</strong></li>
                                    <li>Encapsulate <strong>business logic</strong> (e.g., custom scoring, masking)</li>
                                    <li>Registered in <strong>Unity Catalog</strong> — governed like tables</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Funciones de Arrays — Muy Evaluadas</h5>
                            <pre><code>-- EXPLODE: Convierte elementos del array en filas
SELECT order_id, EXPLODE(items) AS item
FROM orders;
-- Entrada: order_id=1, items=['apple','banana']
-- Salida: (1,'apple'), (1,'banana')

-- array_contains: Verificar si existe elemento
SELECT * FROM main.analytics.events
WHERE array_contains(tags, 'sql');

-- TRANSFORM: Aplicar función a cada elemento
SELECT TRANSFORM(precios, x -> x * 1.1) AS precios_con_tax
FROM productos;

-- FILTER: Mantener elementos que cumplen condición
SELECT FILTER(scores, x -> x > 80) AS scores_altos
FROM estudiantes;

-- SIZE: Obtener longitud del array
SELECT order_id, SIZE(items) AS conteo_items FROM orders;</code></pre>
                            ${styleBox('yellow', 'Examen: Resultado de EXPLODE')}
                                <p>Si una fila tiene 3 elementos en un array y haces EXPLODE, obtienes <strong>3 filas de salida</strong>. El examen frecuentemente pregunta "cuántas filas?" después de EXPLODE.</p>
                            </div>

                            <h5>Funciones de Fecha y Hora</h5>
                            <pre><code>-- DATEDIFF: Días entre dos fechas
SELECT DATEDIFF(CURRENT_DATE(), order_date) AS dias_desde
FROM orders;

-- DATE_TRUNC: Truncar a mes/año
SELECT DATE_TRUNC('MONTH', order_date) AS inicio_mes,
       SUM(amount) AS total_mensual
FROM orders
GROUP BY DATE_TRUNC('MONTH', order_date);

-- CURRENT_DATE() y CURRENT_TIMESTAMP()
SELECT CURRENT_DATE();      -- 2026-04-13
SELECT CURRENT_TIMESTAMP(); -- 2026-04-13T12:30:00Z

-- DATE_ADD y DATE_SUB
SELECT DATE_ADD(CURRENT_DATE(), 30) AS treinta_dias_despues;

-- EXTRACT partes
SELECT EXTRACT(YEAR FROM order_date) AS anio FROM orders;</code></pre>

                            <h5>Funciones de Cadena</h5>
                            <pre><code>SELECT
  UPPER(TRIM('  Hello World  ')) AS resultado,  -- 'HELLO WORLD'
  LOWER('DATABRICKS') AS minusculas,            -- 'databricks'
  CONCAT(nombre, ' ', apellido) AS nombre_completo,
  SUBSTRING(email, 1, INSTR(email, '@') - 1) AS usuario,
  REPLACE(telefono, '-', '') AS telefono_limpio,
  LENGTH('test') AS longitud;  -- 4</code></pre>

                            <h5>Funciones Definidas por Usuario (UDFs)</h5>
                            <pre><code>-- Crear una SQL UDF
CREATE OR REPLACE FUNCTION mask_email(email STRING)
RETURNS STRING
RETURN CONCAT(SUBSTRING(email, 1, 2), '***@', SUBSTRING(email, INSTR(email, '@') + 1));

-- Usarla en queries
SELECT customer_id, mask_email(email) AS enmascarado
FROM customers;</code></pre>
                            ${styleBox('green', 'Cuándo Usar UDFs (Examen)')}
                                <ul>
                                    <li>Transformaciones personalizadas que se <strong>reusan en múltiples queries</strong></li>
                                    <li>Encapsular <strong>lógica de negocio</strong> (ej., scoring personalizado, enmascaramiento)</li>
                                    <li>Registradas en <strong>Unity Catalog</strong> — gobernadas como tablas</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "DLT, Streaming Tables, Parameterized Queries & WHERE vs HAVING",
                    content: `
                        ${langSection('en', `
                            <h5>Delta Live Tables (DLT)</h5>
                            <pre><code>-- DLT uses declarative SQL with special keywords
CREATE OR REFRESH STREAMING TABLE raw_events
AS SELECT * FROM cloud_files('/data/events/', 'json');

-- Materialized View in DLT
CREATE OR REFRESH MATERIALIZED VIEW daily_summary
AS SELECT DATE(event_date) AS day, COUNT(*) AS events
   FROM LIVE.raw_events
   GROUP BY 1;</code></pre>
                            ${styleBox('blue', 'DLT Key Concepts')}
                                <ul>
                                    <li><strong>Streaming Table:</strong> Append-only, processes new data incrementally</li>
                                    <li><strong>Materialized View:</strong> Re-computed when dependencies change</li>
                                    <li><strong>REFRESH:</strong> Use <code>REFRESH STREAMING TABLE</code> to reprocess all data from scratch</li>
                                    <li><strong>LIVE keyword:</strong> References other tables within the same pipeline</li>
                                </ul>
                            </div>

                            <h5>WHERE vs HAVING — Classic Exam Question</h5>
                            <pre><code>-- WHERE filters BEFORE aggregation
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE salary > 50000          -- Filter individual rows FIRST
GROUP BY department;

-- HAVING filters AFTER aggregation
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;         -- Filter on aggregate result

-- WRONG: This fails!
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE emp_count > 10;  -- ERROR: emp_count not defined yet!</code></pre>
                            ${styleBox('red', 'Exam Trap: WHERE vs HAVING')}
                                <p><strong>WHERE</strong> cannot reference aliases or aggregate results. <strong>HAVING</strong> filters on groups AFTER GROUP BY runs. If the question uses an alias in WHERE, the query <strong>WILL FAIL</strong>.</p>
                            </div>

                            <h5>Parameterized Queries in Dashboards</h5>
                            <pre><code>-- Query with parameters (used in dashboards)
SELECT * FROM sales
WHERE region = :region_param
  AND order_date >= :start_date;

-- Parameter types available:
-- Text Parameter: free-text input
-- Date / Date Range: calendar picker
-- Dropdown List: predefined values
-- Query-based Dropdown: values from a SQL query</code></pre>
                            ${styleBox('yellow', 'Cross-filtering in Dashboards')}
                                <p>In AI/BI Dashboards, clicking a bar in a Bar Chart can <strong>automatically filter</strong> other widgets on the same page. This is called <strong>cross-filtering</strong> — enabled per widget, does NOT require query parameters.</p>
                            </div>

                            <h5>SQL Execution Order (Critical for Debugging)</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
SQL Execution Order:
1. FROM / JOIN    ← Tables are read first
2. WHERE          ← Filter individual rows
3. GROUP BY       ← Create groups
4. HAVING         ← Filter groups
5. SELECT         ← Choose columns & aliases
6. DISTINCT       ← Remove duplicates
7. ORDER BY       ← Sort results
8. LIMIT          ← Restrict output rows
                            </pre>
                        `)}
                        ${langSection('es', `
                            <h5>Delta Live Tables (DLT)</h5>
                            <pre><code>-- DLT usa SQL declarativo con keywords especiales
CREATE OR REFRESH STREAMING TABLE eventos_raw
AS SELECT * FROM cloud_files('/data/events/', 'json');

-- Materialized View en DLT
CREATE OR REFRESH MATERIALIZED VIEW resumen_diario
AS SELECT DATE(event_date) AS dia, COUNT(*) AS eventos
   FROM LIVE.eventos_raw
   GROUP BY 1;</code></pre>
                            ${styleBox('blue', 'Conceptos Clave de DLT')}
                                <ul>
                                    <li><strong>Streaming Table:</strong> Append-only, procesa datos nuevos incrementalmente</li>
                                    <li><strong>Materialized View:</strong> Se re-computa cuando cambian las dependencias</li>
                                    <li><strong>REFRESH:</strong> Usa <code>REFRESH STREAMING TABLE</code> para reprocesar todo desde cero</li>
                                    <li><strong>Keyword LIVE:</strong> Referencia otras tablas dentro del mismo pipeline</li>
                                </ul>
                            </div>

                            <h5>WHERE vs HAVING — Pregunta Clásica del Examen</h5>
                            <pre><code>-- WHERE filtra ANTES de la agregación
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE salary > 50000          -- Filtrar filas individuales PRIMERO
GROUP BY department;

-- HAVING filtra DESPUÉS de la agregación
SELECT department, COUNT(*) AS emp_count
FROM employees
GROUP BY department
HAVING COUNT(*) > 10;         -- Filtrar sobre resultado agregado

-- INCORRECTO: ¡Esto falla!
SELECT department, COUNT(*) AS emp_count
FROM employees
WHERE emp_count > 10;  -- ERROR: ¡emp_count no está definido aún!</code></pre>
                            ${styleBox('red', 'Trampa: WHERE vs HAVING')}
                                <p><strong>WHERE</strong> no puede referenciar aliases ni resultados agregados. <strong>HAVING</strong> filtra sobre grupos DESPUÉS de que GROUP BY se ejecuta. Si el query usa un alias en WHERE, <strong>FALLARÁ</strong>.</p>
                            </div>

                            <h5>Queries Parametrizados en Dashboards</h5>
                            <pre><code>-- Query con parámetros (usado en dashboards)
SELECT * FROM ventas
WHERE region = :param_region
  AND order_date >= :fecha_inicio;

-- Tipos de parámetros disponibles:
-- Text Parameter: entrada de texto libre
-- Date / Date Range: selector de calendario
-- Dropdown List: valores predefinidos
-- Query-based Dropdown: valores desde un SQL query</code></pre>
                            ${styleBox('yellow', 'Cross-filtering en Dashboards')}
                                <p>En dashboards AI/BI, hacer clic en una barra de un gráfico puede <strong>filtrar automáticamente</strong> otros widgets en la misma página. Esto se llama <strong>cross-filtering</strong> — se habilita por widget, NO requiere parámetros de query.</p>
                            </div>

                            <h5>Orden de Ejecución SQL (Crítico para Debugging)</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
Orden de Ejecución SQL:
1. FROM / JOIN    ← Tablas se leen primero
2. WHERE          ← Filtrar filas individuales
3. GROUP BY       ← Crear grupos
4. HAVING         ← Filtrar grupos
5. SELECT         ← Elegir columnas y aliases
6. DISTINCT       ← Remover duplicados
7. ORDER BY       ← Ordenar resultados
8. LIMIT          ← Restringir filas de salida
                            </pre>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: PLATFORM UNDERSTANDING (30 questions — was ZERO)
        // =====================================================
        {
            title: 'E2. Platform Understanding — Lakehouse, Warehouses & Delta Lake',
            items: [
                {
                    title: "Lakehouse Architecture, Medallion Pattern & Delta Lake",
                    content: `
                        ${langSection('en', `
                            <h5>Data Lakehouse Architecture</h5>
                            ${styleBox('blue', 'What Makes a Lakehouse?')}
                                <p>A Lakehouse combines the <strong>best of data warehouses</strong> (ACID transactions, schema enforcement, BI support) with the <strong>best of data lakes</strong> (open formats, scalable storage, ML support).</p>
                                <ul>
                                    <li>Uses <strong>open file formats</strong> (Parquet) on cloud storage</li>
                                    <li><strong>ACID transactions</strong> via Delta Lake transaction log</li>
                                    <li>Supports <strong>both BI and ML</strong> workloads on the same data copy</li>
                                    <li><strong>Decoupled</strong> compute (SQL Warehouses) from storage</li>
                                </ul>
                            </div>

                            <h5>Medallion Architecture (Bronze → Silver → Gold)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Layer</th><th>Purpose</th><th>Data Quality</th><th>Users</th></tr>
                                <tr><td><strong>Bronze</strong></td><td>Raw data, exact copy from source</td><td>Low — may be dirty/duplicated</td><td>Data Engineers</td></tr>
                                <tr><td><strong>Silver</strong></td><td>Cleaned, validated, joined data</td><td>Medium — conforming quality</td><td>Data Engineers & Scientists</td></tr>
                                <tr><td><strong>Gold</strong></td><td>Business-ready aggregations</td><td>High — curated for consumption</td><td><strong>Data Analysts</strong></td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam: "Which layer do data analysts use?"')}
                                <p>The answer is always <strong>Gold</strong>. Data analysts consume the Gold layer for dashboards and reports. They may occasionally query Silver for ad-hoc exploration.</p>
                            </div>

                            <h5>Delta Lake — The Foundation</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>What It Provides</th></tr>
                                <tr><td><strong>Transaction Log</strong></td><td>JSON files tracking every change (the "single source of truth")</td></tr>
                                <tr><td><strong>ACID Transactions</strong></td><td>Atomicity, Consistency, Isolation, Durability</td></tr>
                                <tr><td><strong>Time Travel</strong></td><td>Query previous versions via <code>VERSION AS OF</code> or <code>TIMESTAMP AS OF</code></td></tr>
                                <tr><td><strong>Schema Enforcement</strong></td><td>Rejects writes that don't match the table schema (on by default)</td></tr>
                                <tr><td><strong>Schema Evolution</strong></td><td>Optionally add new columns (<code>mergeSchema</code>)</td></tr>
                                <tr><td><strong>Open Format</strong></td><td>Data stored as Parquet files — not proprietary</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Arquitectura Data Lakehouse</h5>
                            ${styleBox('blue', '¿Qué es un Lakehouse?')}
                                <p>Un Lakehouse combina lo <strong>mejor de data warehouses</strong> (transacciones ACID, schema enforcement, soporte BI) con lo <strong>mejor de data lakes</strong> (formatos abiertos, storage escalable, soporte ML).</p>
                                <ul>
                                    <li>Usa <strong>formatos abiertos</strong> (Parquet) en cloud storage</li>
                                    <li><strong>Transacciones ACID</strong> vía Delta Lake transaction log</li>
                                    <li>Soporta <strong>BI y ML</strong> sobre la misma copia de datos</li>
                                    <li>Compute <strong>desacoplado</strong> (SQL Warehouses) del storage</li>
                                </ul>
                            </div>

                            <h5>Arquitectura Medallion (Bronze → Silver → Gold)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Capa</th><th>Propósito</th><th>Calidad de Datos</th><th>Usuarios</th></tr>
                                <tr><td><strong>Bronze</strong></td><td>Datos raw, copia exacta de fuente</td><td>Baja — puede estar sucio/duplicado</td><td>Data Engineers</td></tr>
                                <tr><td><strong>Silver</strong></td><td>Datos limpios, validados, unidos</td><td>Media — calidad conforme</td><td>Data Engineers & Scientists</td></tr>
                                <tr><td><strong>Gold</strong></td><td>Agregaciones listas para negocio</td><td>Alta — curado para consumo</td><td><strong>Data Analysts</strong></td></tr>
                            </table>
                            ${styleBox('yellow', 'Examen: "¿Qué capa usan los data analysts?"')}
                                <p>La respuesta siempre es <strong>Gold</strong>. Los data analysts consumen la capa Gold para dashboards y reportes. Ocasionalmente pueden consultar Silver para exploración ad-hoc.</p>
                            </div>

                            <h5>Delta Lake — La Fundación</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Qué Provee</th></tr>
                                <tr><td><strong>Transaction Log</strong></td><td>Archivos JSON que rastrean cada cambio (la "fuente única de verdad")</td></tr>
                                <tr><td><strong>Transacciones ACID</strong></td><td>Atomicidad, Consistencia, Aislamiento, Durabilidad</td></tr>
                                <tr><td><strong>Time Travel</strong></td><td>Consultar versiones previas vía <code>VERSION AS OF</code> o <code>TIMESTAMP AS OF</code></td></tr>
                                <tr><td><strong>Schema Enforcement</strong></td><td>Rechaza escrituras que no coinciden con el esquema (activado por defecto)</td></tr>
                                <tr><td><strong>Schema Evolution</strong></td><td>Opcionalmente agregar nuevas columnas (<code>mergeSchema</code>)</td></tr>
                                <tr><td><strong>Formato Abierto</strong></td><td>Datos almacenados como archivos Parquet — no propietario</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "SQL Warehouse Types, Photon & Data Explorer",
                    content: `
                        ${langSection('en', `
                            <h5>SQL Warehouse Types</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Type</th><th>Startup</th><th>Scaling</th><th>Cost</th><th>Best For</th></tr>
                                <tr><td><strong>Classic</strong></td><td>Minutes</td><td>Manual/Auto (clusters)</td><td>$$</td><td>Dev/test, cost-sensitive</td></tr>
                                <tr><td><strong>Pro</strong></td><td>Minutes</td><td>Auto-scaling</td><td>$$$</td><td>Production, Genie, MV support</td></tr>
                                <tr><td><strong>Serverless</strong></td><td><strong><5 seconds</strong></td><td>Instant auto-scaling</td><td>$$$$</td><td><strong>Low-latency, production</strong></td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam: Why Serverless starts faster')}
                                <p>Serverless SQL Warehouses start in <strong>under 5 seconds</strong> because Databricks manages the compute resources. Classic warehouses must provision VMs, which takes minutes.</p>
                            </div>

                            <h5>Auto Stop Setting</h5>
                            <p>SQL Warehouses automatically stop after <strong>idle time</strong> (default: 10 minutes for Serverless, configurable). If a dashboard refresh is scheduled every 15 min and Auto Stop is 10 min, the warehouse will <strong>cold-start every time</strong> — set Auto Stop >= refresh interval.</p>

                            <h5>Photon Engine</h5>
                            <ul>
                                <li><strong>C++ vectorized query engine</strong> — faster than JVM-based Spark for SQL</li>
                                <li>Enabled per SQL Warehouse (Pro and Serverless have it by default)</li>
                                <li>Accelerates <strong>scans, joins, aggregations</strong></li>
                                <li>Does NOT accelerate Python/ML workloads</li>
                            </ul>

                            <h5>Databricks SQL vs Notebooks</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Databricks SQL</th><th>Notebooks</th></tr>
                                <tr><td><strong>Primary language</strong></td><td>SQL</td><td>Python, SQL, R, Scala</td></tr>
                                <tr><td><strong>Dashboards</strong></td><td>AI/BI Dashboards (built-in)</td><td>display() / matplotlib</td></tr>
                                <tr><td><strong>Compute</strong></td><td>SQL Warehouses</td><td>All-purpose clusters</td></tr>
                                <tr><td><strong>Best for</strong></td><td>Analysts: queries, dashboards</td><td>Engineers/Scientists: ETL, ML</td></tr>
                                <tr><td><strong>Visualizations</strong></td><td>Built-in chart editor</td><td>Code-based (display, matplotlib)</td></tr>
                            </table>

                            <h5>Data Explorer / Catalog Explorer</h5>
                            <ul>
                                <li>Browse <strong>catalogs, schemas, tables</strong> in Unity Catalog</li>
                                <li>View <strong>column-level comments</strong> and metadata</li>
                                <li>Check <strong>access permissions</strong> on any data object</li>
                                <li>View <strong>data lineage</strong> (upstream and downstream dependencies)</li>
                                <li>Preview <strong>sample data</strong> from tables</li>
                            </ul>

                            <h5>Alert States</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>State</th><th>Meaning</th><th>Display</th></tr>
                                <tr><td><strong>Triggered</strong></td><td>Alert condition is TRUE</td><td>Red indicator</td></tr>
                                <tr><td><strong>OK</strong></td><td>Alert condition is FALSE</td><td>Green indicator</td></tr>
                                <tr><td><strong>Unknown</strong></td><td>Alert query hasn't run yet or was recently created</td><td>Gray indicator</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Tipos de SQL Warehouse</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo</th><th>Inicio</th><th>Escalamiento</th><th>Costo</th><th>Mejor Para</th></tr>
                                <tr><td><strong>Classic</strong></td><td>Minutos</td><td>Manual/Auto (clusters)</td><td>$$</td><td>Dev/test, sensible al costo</td></tr>
                                <tr><td><strong>Pro</strong></td><td>Minutos</td><td>Auto-scaling</td><td>$$$</td><td>Producción, Genie, soporte MV</td></tr>
                                <tr><td><strong>Serverless</strong></td><td><strong><5 segundos</strong></td><td>Auto-scaling instantáneo</td><td>$$$$</td><td><strong>Baja latencia, producción</strong></td></tr>
                            </table>
                            ${styleBox('yellow', 'Examen: Por qué Serverless inicia más rápido')}
                                <p>SQL Warehouses Serverless inician en <strong>menos de 5 segundos</strong> porque Databricks gestiona los recursos de compute. Los warehouses Classic deben aprovisionar VMs, lo que toma minutos.</p>
                            </div>

                            <h5>Configuración Auto Stop</h5>
                            <p>SQL Warehouses se detienen automáticamente después de <strong>tiempo de inactividad</strong> (default: 10 minutos para Serverless, configurable). Si un refresh de dashboard está programado cada 15 min y Auto Stop es 10 min, el warehouse hará <strong>cold-start cada vez</strong> — configura Auto Stop >= intervalo de refresh.</p>

                            <h5>Motor Photon</h5>
                            <ul>
                                <li><strong>Motor vectorizado en C++</strong> — más rápido que JVM-based Spark para SQL</li>
                                <li>Habilitado por SQL Warehouse (Pro y Serverless lo tienen por default)</li>
                                <li>Acelera <strong>scans, joins, agregaciones</strong></li>
                                <li>NO acelera cargas de Python/ML</li>
                            </ul>

                            <h5>Databricks SQL vs Notebooks</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Databricks SQL</th><th>Notebooks</th></tr>
                                <tr><td><strong>Lenguaje principal</strong></td><td>SQL</td><td>Python, SQL, R, Scala</td></tr>
                                <tr><td><strong>Dashboards</strong></td><td>AI/BI Dashboards (integrado)</td><td>display() / matplotlib</td></tr>
                                <tr><td><strong>Compute</strong></td><td>SQL Warehouses</td><td>Clusters all-purpose</td></tr>
                                <tr><td><strong>Mejor para</strong></td><td>Analistas: queries, dashboards</td><td>Engineers/Scientists: ETL, ML</td></tr>
                                <tr><td><strong>Visualizaciones</strong></td><td>Editor de gráficos integrado</td><td>Code-based (display, matplotlib)</td></tr>
                            </table>

                            <h5>Data Explorer / Catalog Explorer</h5>
                            <ul>
                                <li>Explorar <strong>catálogos, esquemas, tablas</strong> en Unity Catalog</li>
                                <li>Ver <strong>comentarios a nivel de columna</strong> y metadata</li>
                                <li>Verificar <strong>permisos de acceso</strong> en cualquier objeto de datos</li>
                                <li>Ver <strong>lineaje de datos</strong> (dependencias upstream y downstream)</li>
                                <li>Previsualizar <strong>datos de muestra</strong> de tablas</li>
                            </ul>

                            <h5>Estados de Alertas</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Estado</th><th>Significado</th><th>Indicador</th></tr>
                                <tr><td><strong>Triggered</strong></td><td>La condición de alerta es TRUE</td><td>Indicador rojo</td></tr>
                                <tr><td><strong>OK</strong></td><td>La condición de alerta es FALSE</td><td>Indicador verde</td></tr>
                                <tr><td><strong>Unknown</strong></td><td>El query de alerta aún no ha ejecutado o fue creado recientemente</td><td>Indicador gris</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: SECURING DATA (24 questions — was ZERO)
        // =====================================================
        {
            title: 'E3. Securing Data — Governance, Permissions & PII',
            items: [
                {
                    title: "GRANT/REVOKE, Privilege Hierarchy & Row-Level Security",
                    content: `
                        ${langSection('en', `
                            <h5>GRANT & REVOKE — Core Access Control</h5>
                            <pre><code>-- Grant read access on a table
GRANT SELECT ON TABLE catalog.schema.table TO group_name;

-- Grant full modification rights
GRANT MODIFY ON TABLE catalog.schema.table TO etl_team;

-- Grant access to all tables in a schema
GRANT USE SCHEMA ON SCHEMA catalog.schema TO analysts;
GRANT SELECT ON SCHEMA catalog.schema TO analysts;

-- Revoke permissions
REVOKE SELECT ON TABLE catalog.schema.sensitive_table FROM intern_team;

-- Show current grants
SHOW GRANTS ON TABLE catalog.schema.table;</code></pre>

                            <h5>Privilege Hierarchy (Inheritance)</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
Metastore
└── Catalog         ← GRANT USE CATALOG required
    └── Schema      ← GRANT USE SCHEMA required
        └── Table   ← GRANT SELECT/MODIFY here

Privileges INHERIT downward:
  GRANT SELECT ON CATALOG prod → applies to ALL tables in prod
                            </pre>
                            ${styleBox('red', 'Exam Trap: USE CATALOG + USE SCHEMA Required')}
                                <p>Even if a user has <code>SELECT</code> on a table, they <strong>CANNOT access it</strong> without <code>USE CATALOG</code> and <code>USE SCHEMA</code> privileges. The exam tests this with "user has SELECT but still can't query."</p>
                            </div>

                            ${styleBox('yellow', 'Who Can GRANT?')}
                                <ul>
                                    <li><strong>Object Owner</strong> — can GRANT on objects they own</li>
                                    <li><strong>Metastore Admin</strong> — can GRANT on anything</li>
                                    <li>A user with <strong>MODIFY</strong> privilege <strong>CANNOT GRANT</strong> — MODIFY ≠ ownership</li>
                                </ul>
                            </div>

                            <h5>Row-Level Security (Dynamic Views)</h5>
                            <pre><code>-- Create a view that filters by user's group
CREATE VIEW secure_employees AS
SELECT * FROM employees
WHERE department = current_user_group()
   OR IS_ACCOUNT_GROUP_MEMBER('admin_group');

-- Function: current_user()
-- Returns the email of the current user
-- Function: IS_ACCOUNT_GROUP_MEMBER('group')
-- Returns TRUE if user belongs to the group</code></pre>

                            <h5>Column Masking</h5>
                            <pre><code>-- Dynamic column masking with a function
CREATE FUNCTION mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE
  WHEN IS_ACCOUNT_GROUP_MEMBER('hr_admin') THEN ssn
  ELSE CONCAT('***-**-', SUBSTRING(ssn, 8, 4))
END;

-- Apply mask to column
ALTER TABLE employees
ALTER COLUMN ssn SET MASK mask_ssn;</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>GRANT & REVOKE — Control de Acceso Central</h5>
                            <pre><code>-- Otorgar acceso de lectura en una tabla
GRANT SELECT ON TABLE catalog.schema.tabla TO grupo;

-- Otorgar derechos completos de modificación
GRANT MODIFY ON TABLE catalog.schema.tabla TO equipo_etl;

-- Otorgar acceso a todas las tablas en un esquema
GRANT USE SCHEMA ON SCHEMA catalog.schema TO analistas;
GRANT SELECT ON SCHEMA catalog.schema TO analistas;

-- Revocar permisos
REVOKE SELECT ON TABLE catalog.schema.tabla_sensible FROM pasantes;

-- Mostrar grants actuales
SHOW GRANTS ON TABLE catalog.schema.tabla;</code></pre>

                            <h5>Jerarquía de Privilegios (Herencia)</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Metastore
└── Catalog      ← GRANT USE CATALOG requerido
    └── Schema   ← GRANT USE SCHEMA requerido
        └── Table ← GRANT SELECT/MODIFY aquí

Los privilegios se HEREDAN hacia abajo:
  GRANT SELECT ON CATALOG prod → aplica a TODAS las tablas en prod
                            </pre>
                            ${styleBox('red', 'Trampa: USE CATALOG + USE SCHEMA Requeridos')}
                                <p>Aunque un usuario tenga <code>SELECT</code> en la tabla, <strong>NO puede accederla</strong> sin <code>USE CATALOG</code> y <code>USE SCHEMA</code>. El examen prueba esto con "el usuario tiene SELECT pero aún no puede consultar."</p>
                            </div>

                            ${styleBox('yellow', '¿Quién Puede Dar GRANT?')}
                                <ul>
                                    <li><strong>Dueño del Objeto</strong> — puede GRANT en objetos que posee</li>
                                    <li><strong>Metastore Admin</strong> — puede GRANT en cualquier cosa</li>
                                    <li>Un usuario con <strong>MODIFY</strong> <strong>NO PUEDE hacer GRANT</strong> — MODIFY ≠ propiedad</li>
                                </ul>
                            </div>

                            <h5>Seguridad a Nivel de Fila (Vistas Dinámicas)</h5>
                            <pre><code>-- Crear una vista que filtra por grupo del usuario
CREATE VIEW empleados_seguros AS
SELECT * FROM employees
WHERE department = current_user_group()
   OR IS_ACCOUNT_GROUP_MEMBER('admin_group');

-- Función: current_user()
-- Retorna el email del usuario actual
-- Función: IS_ACCOUNT_GROUP_MEMBER('grupo')
-- Retorna TRUE si el usuario pertenece al grupo</code></pre>

                            <h5>Enmascaramiento de Columnas</h5>
                            <pre><code>-- Enmascaramiento dinámico con una función
CREATE FUNCTION mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE
  WHEN IS_ACCOUNT_GROUP_MEMBER('hr_admin') THEN ssn
  ELSE CONCAT('***-**-', SUBSTRING(ssn, 8, 4))
END;

-- Aplicar máscara a columna
ALTER TABLE employees
ALTER COLUMN ssn SET MASK mask_ssn;</code></pre>
                        `)}
                    `
                },
                {
                    title: "PII Handling, ABAC, Data Lineage & Audit",
                    content: `
                        ${langSection('en', `
                            <h5>PII Best Practices</h5>
                            ${styleBox('blue', 'What Data Analysts Must Know About PII')}
                                <ul>
                                    <li><strong>Identify PII fields:</strong> emails, SSN, phone numbers, birthdates, addresses</li>
                                    <li><strong>Never expose in dashboards</strong> unless authorized</li>
                                    <li><strong>Use column masking</strong> (dynamic functions) instead of removing data</li>
                                    <li><strong>Tag columns</strong> with sensitivity labels in Unity Catalog</li>
                                    <li><strong>Row/column filtering:</strong> Use dynamic views so each user sees only their allowed data</li>
                                </ul>
                            </div>

                            <h5>ABAC — Attribute-Based Access Control</h5>
                            <p>Unity Catalog supports tagging data assets with <strong>attributes</strong> (like <code>pii=true</code>, <code>sensitivity=high</code>). Access policies can then reference these tags.</p>
                            <pre><code>-- Tag a table
ALTER TABLE employees SET TAGS ('pii' = 'true', 'sensitivity' = 'high');

-- Tag a column
ALTER TABLE employees ALTER COLUMN ssn SET TAGS ('pii_type' = 'ssn');</code></pre>

                            <h5>Data Lineage</h5>
                            <ul>
                                <li>Unity Catalog <strong>automatically tracks</strong> data lineage at column and table level</li>
                                <li>Shows <strong>upstream</strong> (where data came from) and <strong>downstream</strong> (what depends on it)</li>
                                <li>Visible in <strong>Catalog Explorer</strong> UI under the Lineage tab</li>
                                <li>Exam keyword: "track the origin, transformations, and downstream consumers"</li>
                            </ul>

                            <h5>Audit Logs & System Tables</h5>
                            <pre><code>-- Query audit logs from system tables
SELECT user_identity.email, action_name, request_params.full_name_arg
FROM system.access.audit
WHERE action_name = 'getTable'
  AND request_params.full_name_arg LIKE '%payroll%'
  AND event_date >= '2026-01-01';</code></pre>
                            ${styleBox('yellow', 'Exam: System Tables for Audit')}
                                <ul>
                                    <li><code>system.access.audit</code> — who accessed what and when</li>
                                    <li><code>system.billing.usage</code> — compute cost tracking</li>
                                    <li><code>system.information_schema.*</code> — metadata about tables, columns</li>
                                </ul>
                            </div>

                            <h5>Delta Sharing Security</h5>
                            <ul>
                                <li>Recipients <strong>do NOT need Databricks</strong></li>
                                <li>Provider controls <strong>exactly which tables/views</strong> are shared</li>
                                <li>Data <strong>never leaves the provider's account</strong></li>
                                <li>Provider pays for storage; <strong>recipient pays for compute</strong></li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <h5>Mejores Prácticas para PII</h5>
                            ${styleBox('blue', 'Lo que los Analistas Deben Saber sobre PII')}
                                <ul>
                                    <li><strong>Identificar campos PII:</strong> emails, SSN, teléfonos, fechas de nacimiento, direcciones</li>
                                    <li><strong>Nunca exponer en dashboards</strong> sin autorización</li>
                                    <li><strong>Usar enmascaramiento de columnas</strong> (funciones dinámicas) en vez de eliminar datos</li>
                                    <li><strong>Etiquetar columnas</strong> con niveles de sensibilidad en Unity Catalog</li>
                                    <li><strong>Filtrado de filas/columnas:</strong> Usar vistas dinámicas para que cada usuario vea solo sus datos autorizados</li>
                                </ul>
                            </div>

                            <h5>ABAC — Control de Acceso Basado en Atributos</h5>
                            <p>Unity Catalog soporta etiquetar activos de datos con <strong>atributos</strong> (como <code>pii=true</code>, <code>sensitivity=high</code>). Las políticas de acceso pueden referenciar estas etiquetas.</p>
                            <pre><code>-- Etiquetar una tabla
ALTER TABLE employees SET TAGS ('pii' = 'true', 'sensitivity' = 'high');

-- Etiquetar una columna
ALTER TABLE employees ALTER COLUMN ssn SET TAGS ('pii_type' = 'ssn');</code></pre>

                            <h5>Lineaje de Datos</h5>
                            <ul>
                                <li>Unity Catalog <strong>rastrea automáticamente</strong> el lineaje a nivel de columna y tabla</li>
                                <li>Muestra <strong>upstream</strong> (de dónde vienen los datos) y <strong>downstream</strong> (qué depende de ellos)</li>
                                <li>Visible en <strong>Catalog Explorer</strong> bajo la pestaña Lineage</li>
                                <li>Keyword de examen: "rastrear el origen, transformaciones, y consumidores downstream"</li>
                            </ul>

                            <h5>Logs de Auditoría & Tablas de Sistema</h5>
                            <pre><code>-- Consultar logs de auditoría desde tablas de sistema
SELECT user_identity.email, action_name, request_params.full_name_arg
FROM system.access.audit
WHERE action_name = 'getTable'
  AND request_params.full_name_arg LIKE '%payroll%'
  AND event_date >= '2026-01-01';</code></pre>
                            ${styleBox('yellow', 'Examen: Tablas de Sistema para Auditoría')}
                                <ul>
                                    <li><code>system.access.audit</code> — quién accedió a qué y cuándo</li>
                                    <li><code>system.billing.usage</code> — seguimiento de costos de compute</li>
                                    <li><code>system.information_schema.*</code> — metadata sobre tablas, columnas</li>
                                </ul>
                            </div>

                            <h5>Seguridad de Delta Sharing</h5>
                            <ul>
                                <li>Destinatarios <strong>NO necesitan Databricks</strong></li>
                                <li>El proveedor controla <strong>exactamente qué tablas/vistas</strong> se comparten</li>
                                <li>Los datos <strong>nunca salen de la cuenta del proveedor</strong></li>
                                <li>Proveedor paga almacenamiento; <strong>destinatario paga compute</strong></li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: MANAGING DATA — EXPANDED (35 questions, was 2 items)
        // =====================================================
        {
            title: 'E4. Managing Data — VACUUM, OPTIMIZE, Time Travel & Clones',
            items: [
                {
                    title: "VACUUM, OPTIMIZE, Z-ORDER & Liquid Clustering",
                    content: `
                        ${langSection('en', `
                            <h5>VACUUM — Clean Old Data Files</h5>
                            <pre><code>-- Remove files older than the default retention (7 days)
VACUUM my_catalog.my_schema.my_table;

-- Remove files older than 24 hours (DANGEROUS!)
VACUUM my_table RETAIN 24 HOURS;

-- Dry run: see what would be deleted
VACUUM my_table DRY RUN;</code></pre>
                            ${styleBox('red', 'VACUUM Critical Facts')}
                                <ul>
                                    <li><strong>Default retention: 7 days</strong> (168 hours)</li>
                                    <li>After VACUUM, you <strong>CANNOT time travel</strong> to versions before the retention period</li>
                                    <li>VACUUM deletes the <strong>physical data files</strong> — NOT the transaction log entries</li>
                                    <li>Does NOT remove <code>_delta_log</code> entries — use <strong>log retention</strong> for that</li>
                                    <li>Exam warns: setting retention too low risks losing time travel capability</li>
                                </ul>
                            </div>

                            <h5>OPTIMIZE — Compact Small Files</h5>
                            <pre><code>-- Compact small files into larger ones (target: ~1GB each)
OPTIMIZE gold.sales_data;

-- OPTIMIZE with Z-ORDER (colocate data for faster filtering)
OPTIMIZE gold.sales_data
ZORDER BY (region, product_category);

-- After OPTIMIZE: fewer, larger files = faster queries</code></pre>
                            ${styleBox('blue', 'OPTIMIZE Key Facts')}
                                <ul>
                                    <li>Combines <strong>many small files into fewer, larger files</strong></li>
                                    <li>Target file size: ~1 GB by default</li>
                                    <li><strong>Z-ORDER</strong> clusters data by specified columns for <strong>faster filtering</strong></li>
                                    <li>Z-ORDER best with <strong>high-cardinality columns</strong> (IDs, dates), max 4 columns</li>
                                </ul>
                            </div>

                            <h5>Liquid Clustering (Modern Replacement for Z-ORDER)</h5>
                            <pre><code>-- Create table with Liquid Clustering
CREATE TABLE events (
  event_id BIGINT, user_id BIGINT, event_type STRING, event_date DATE
) CLUSTER BY (event_date, user_id);

-- Change clustering keys (not possible with Z-ORDER!)
ALTER TABLE events CLUSTER BY (event_type, event_date);

-- Trigger clustering optimization
OPTIMIZE events;</code></pre>
                            ${styleBox('green', 'Liquid Clustering vs Z-ORDER')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Feature</th><th>Z-ORDER</th><th>Liquid Clustering</th></tr>
                                    <tr><td>Change keys</td><td>No — must rewrite</td><td><strong>Yes — ALTER TABLE</strong></td></tr>
                                    <tr><td>Incremental</td><td>No — full rewrite</td><td><strong>Yes — only new files</strong></td></tr>
                                    <tr><td>Automatic</td><td>Must run OPTIMIZE manually</td><td>Can be automated (Predictive Optimization)</td></tr>
                                </table>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>VACUUM — Limpiar Archivos Antiguos</h5>
                            <pre><code>-- Eliminar archivos más antiguos que la retención default (7 días)
VACUUM mi_catalogo.mi_schema.mi_tabla;

-- Eliminar archivos más antiguos que 24 horas (¡PELIGROSO!)
VACUUM mi_tabla RETAIN 24 HOURS;

-- Dry run: ver qué se eliminaría
VACUUM mi_tabla DRY RUN;</code></pre>
                            ${styleBox('red', 'Datos Críticos de VACUUM')}
                                <ul>
                                    <li><strong>Retención default: 7 días</strong> (168 horas)</li>
                                    <li>Después de VACUUM, <strong>NO puedes time travel</strong> a versiones anteriores al período de retención</li>
                                    <li>VACUUM elimina los <strong>archivos físicos de datos</strong> — NO las entradas del log de transacciones</li>
                                    <li>NO elimina entradas de <code>_delta_log</code> — usa <strong>retención de log</strong> para eso</li>
                                    <li>Examen advierte: establecer retención muy baja arriesga perder capacidad de time travel</li>
                                </ul>
                            </div>

                            <h5>OPTIMIZE — Compactar Archivos Pequeños</h5>
                            <pre><code>-- Compactar archivos pequeños en más grandes (objetivo: ~1GB cada uno)
OPTIMIZE gold.ventas_data;

-- OPTIMIZE con Z-ORDER (co-ubicar datos para filtrado más rápido)
OPTIMIZE gold.ventas_data
ZORDER BY (region, categoria);

-- Después de OPTIMIZE: menos archivos, más grandes = queries más rápidos</code></pre>
                            ${styleBox('blue', 'Datos Clave de OPTIMIZE')}
                                <ul>
                                    <li>Combina <strong>muchos archivos pequeños en pocos archivos grandes</strong></li>
                                    <li>Tamaño objetivo de archivo: ~1 GB por default</li>
                                    <li><strong>Z-ORDER</strong> agrupa datos por columnas especificadas para <strong>filtrado más rápido</strong></li>
                                    <li>Z-ORDER es mejor con <strong>columnas de alta cardinalidad</strong> (IDs, fechas), máximo 4 columnas</li>
                                </ul>
                            </div>

                            <h5>Liquid Clustering (Reemplazo Moderno de Z-ORDER)</h5>
                            <pre><code>-- Crear tabla con Liquid Clustering
CREATE TABLE events (
  event_id BIGINT, user_id BIGINT, event_type STRING, event_date DATE
) CLUSTER BY (event_date, user_id);

-- Cambiar claves de clustering (¡no posible con Z-ORDER!)
ALTER TABLE events CLUSTER BY (event_type, event_date);

-- Disparar optimización de clustering
OPTIMIZE events;</code></pre>
                            ${styleBox('green', 'Liquid Clustering vs Z-ORDER')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Característica</th><th>Z-ORDER</th><th>Liquid Clustering</th></tr>
                                    <tr><td>Cambiar claves</td><td>No — debe reescribir</td><td><strong>Sí — ALTER TABLE</strong></td></tr>
                                    <tr><td>Incremental</td><td>No — reescritura completa</td><td><strong>Sí — solo archivos nuevos</strong></td></tr>
                                    <tr><td>Automático</td><td>Debe ejecutar OPTIMIZE manualmente</td><td>Puede automatizarse (Predictive Optimization)</td></tr>
                                </table>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Time Travel, DESCRIBE HISTORY, DEEP CLONE & Change Data Feed",
                    content: `
                        ${langSection('en', `
                            <h5>Time Travel — Query Past Versions</h5>
                            <pre><code>-- Query a specific version
SELECT * FROM sales VERSION AS OF 5;

-- Query by timestamp
SELECT * FROM sales TIMESTAMP AS OF '2026-01-01';

-- Restore a table to a previous version
RESTORE TABLE sales TO VERSION AS OF 5;

-- Compare two versions
SELECT * FROM sales VERSION AS OF 10
EXCEPT
SELECT * FROM sales VERSION AS OF 5;</code></pre>

                            <h5>DESCRIBE HISTORY</h5>
                            <pre><code>-- View all operations on a table
DESCRIBE HISTORY catalog.schema.my_table;

-- Output columns:
-- version, timestamp, userId, operation, operationParameters</code></pre>
                            ${styleBox('yellow', 'DESCRIBE HISTORY vs DESCRIBE EXTENDED')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Command</th><th>Shows</th><th>Use For</th></tr>
                                    <tr><td><code>DESCRIBE HISTORY</code></td><td>Operation log (INSERT, DELETE, MERGE, OPTIMIZE)</td><td>Auditing changes over time</td></tr>
                                    <tr><td><code>DESCRIBE EXTENDED</code></td><td>Schema, Type (MANAGED/EXTERNAL), location</td><td>Understanding table structure</td></tr>
                                    <tr><td><code>DESCRIBE DETAIL</code></td><td>File count, size, partition columns</td><td>Performance analysis</td></tr>
                                </table>
                            </div>

                            <h5>DEEP CLONE vs SHALLOW CLONE</h5>
                            <pre><code>-- DEEP CLONE: Full independent copy
CREATE TABLE backup_sales DEEP CLONE gold.sales;

-- SHALLOW CLONE: Lightweight copy (references source files)
CREATE TABLE test_sales SHALLOW CLONE gold.sales;</code></pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>DEEP CLONE</th><th>SHALLOW CLONE</th></tr>
                                <tr><td>Data copied?</td><td><strong>Yes</strong> — full independent copy</td><td><strong>No</strong> — references source files</td></tr>
                                <tr><td>Space</td><td>Full duplication</td><td>Minimal (just metadata)</td></tr>
                                <tr><td>Independent?</td><td>Yes — survives source changes</td><td>No — depends on source files</td></tr>
                                <tr><td>Use case</td><td>Backups, production copies</td><td>Testing, read-only experimentation</td></tr>
                            </table>

                            <h5>Change Data Feed (CDF)</h5>
                            <pre><code>-- Enable CDF on a table
ALTER TABLE silver.orders SET TBLPROPERTIES (delta.enableChangeDataFeed = true);

-- Query changes since version 5
SELECT * FROM table_changes('silver.orders', 5);

-- Query changes between versions
SELECT * FROM table_changes('silver.orders', 5, 10);

-- CDF columns in output:
-- _change_type: insert, update_preimage, update_postimage, delete
-- _commit_version: which version the change happened
-- _commit_timestamp: when the change happened</code></pre>
                            ${styleBox('green', 'CDF Use Cases (Exam)')}
                                <ul>
                                    <li><strong>Auditing:</strong> Track what changed, when, and the before/after values</li>
                                    <li><strong>Incremental ETL:</strong> Process only changed rows downstream</li>
                                    <li><strong>Regulatory compliance:</strong> Prove data lineage and changes</li>
                                </ul>
                            </div>

                            <h5>ALTER TABLE — Schema Modifications</h5>
                            <pre><code>-- Add a column (metadata-only operation — instant!)
ALTER TABLE orders ADD COLUMN loyalty_score DOUBLE;

-- Rename a column
ALTER TABLE orders RENAME COLUMN old_name TO new_name;

-- Change column comment
ALTER TABLE orders ALTER COLUMN amount COMMENT 'Total amount in USD';

-- Set table properties
ALTER TABLE orders SET TBLPROPERTIES ('delta.autoOptimize.optimizeWrite' = 'true');</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Time Travel — Consultar Versiones Pasadas</h5>
                            <pre><code>-- Consultar una versión específica
SELECT * FROM ventas VERSION AS OF 5;

-- Consultar por timestamp
SELECT * FROM ventas TIMESTAMP AS OF '2026-01-01';

-- Restaurar una tabla a una versión anterior
RESTORE TABLE ventas TO VERSION AS OF 5;

-- Comparar dos versiones
SELECT * FROM ventas VERSION AS OF 10
EXCEPT
SELECT * FROM ventas VERSION AS OF 5;</code></pre>

                            <h5>DESCRIBE HISTORY</h5>
                            <pre><code>-- Ver todas las operaciones en una tabla
DESCRIBE HISTORY catalog.schema.mi_tabla;

-- Columnas de salida:
-- version, timestamp, userId, operation, operationParameters</code></pre>
                            ${styleBox('yellow', 'DESCRIBE HISTORY vs DESCRIBE EXTENDED')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Comando</th><th>Muestra</th><th>Usar Para</th></tr>
                                    <tr><td><code>DESCRIBE HISTORY</code></td><td>Log de operaciones (INSERT, DELETE, MERGE, OPTIMIZE)</td><td>Auditar cambios en el tiempo</td></tr>
                                    <tr><td><code>DESCRIBE EXTENDED</code></td><td>Schema, Tipo (MANAGED/EXTERNAL), ubicación</td><td>Entender estructura de tabla</td></tr>
                                    <tr><td><code>DESCRIBE DETAIL</code></td><td>Conteo de archivos, tamaño, columnas de partición</td><td>Análisis de rendimiento</td></tr>
                                </table>
                            </div>

                            <h5>DEEP CLONE vs SHALLOW CLONE</h5>
                            <pre><code>-- DEEP CLONE: Copia completa independiente
CREATE TABLE backup_ventas DEEP CLONE gold.ventas;

-- SHALLOW CLONE: Copia ligera (referencia archivos fuente)
CREATE TABLE test_ventas SHALLOW CLONE gold.ventas;</code></pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>DEEP CLONE</th><th>SHALLOW CLONE</th></tr>
                                <tr><td>Datos copiados?</td><td><strong>Sí</strong> — copia independiente completa</td><td><strong>No</strong> — referencia archivos fuente</td></tr>
                                <tr><td>Espacio</td><td>Duplicación completa</td><td>Mínimo (solo metadata)</td></tr>
                                <tr><td>Independiente?</td><td>Sí — sobrevive cambios en fuente</td><td>No — depende de archivos fuente</td></tr>
                                <tr><td>Caso de uso</td><td>Backups, copias producción</td><td>Testing, experimentación de solo lectura</td></tr>
                            </table>

                            <h5>Change Data Feed (CDF)</h5>
                            <pre><code>-- Habilitar CDF en una tabla
ALTER TABLE silver.ordenes SET TBLPROPERTIES (delta.enableChangeDataFeed = true);

-- Consultar cambios desde versión 5
SELECT * FROM table_changes('silver.ordenes', 5);

-- Consultar cambios entre versiones
SELECT * FROM table_changes('silver.ordenes', 5, 10);

-- Columnas CDF en la salida:
-- _change_type: insert, update_preimage, update_postimage, delete
-- _commit_version: en qué versión ocurrió el cambio
-- _commit_timestamp: cuándo ocurrió el cambio</code></pre>
                            ${styleBox('green', 'Casos de Uso CDF (Examen)')}
                                <ul>
                                    <li><strong>Auditoría:</strong> Rastrear qué cambió, cuándo, y los valores antes/después</li>
                                    <li><strong>ETL incremental:</strong> Procesar solo filas cambiadas downstream</li>
                                    <li><strong>Cumplimiento regulatorio:</strong> Probar lineaje de datos y cambios</li>
                                </ul>
                            </div>

                            <h5>ALTER TABLE — Modificaciones de Esquema</h5>
                            <pre><code>-- Agregar columna (operación solo-metadata — ¡instantáneo!)
ALTER TABLE ordenes ADD COLUMN loyalty_score DOUBLE;

-- Renombrar columna
ALTER TABLE ordenes RENAME COLUMN nombre_viejo TO nombre_nuevo;

-- Cambiar comentario de columna
ALTER TABLE ordenes ALTER COLUMN amount COMMENT 'Monto total en USD';

-- Establecer propiedades de tabla
ALTER TABLE ordenes SET TBLPROPERTIES ('delta.autoOptimize.optimizeWrite' = 'true');</code></pre>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: DASHBOARDS — EXPANDED (40 Q, was 3 items)
        // =====================================================
        {
            title: 'E5. Dashboards — Parameters, Sharing, Embedding & Statistics',
            items: [
                {
                    title: "Query Parameters, Cross-Filtering & Embedding",
                    content: `
                        ${langSection('en', `
                            <h5>Query Parameters in Dashboards</h5>
                            <pre><code>-- Adding a parameter to a query
SELECT * FROM sales
WHERE region = :region_param
  AND order_date BETWEEN :start_date AND :end_date;</code></pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Parameter Type</th><th>Widget</th><th>Use Case</th></tr>
                                <tr><td><strong>Text</strong></td><td>Free text input</td><td>Search terms, custom filters</td></tr>
                                <tr><td><strong>Number</strong></td><td>Numeric input</td><td>Thresholds, amounts</td></tr>
                                <tr><td><strong>Date</strong></td><td>Calendar picker</td><td>Date range filtering</td></tr>
                                <tr><td><strong>Date Range</strong></td><td>Two calendar pickers</td><td>Start/end date filtering</td></tr>
                                <tr><td><strong>Dropdown List</strong></td><td>Predefined options</td><td>Region, category selection</td></tr>
                                <tr><td><strong>Query-based Dropdown</strong></td><td>Options from SQL query</td><td>Dynamic values from tables</td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam: Parameter Not Applied to Widget')}
                                <p>If a parameter exists in the query but the dashboard widget doesn't show the filter, the parameter must be <strong>mapped to the widget</strong> in the dashboard editor. Parameters are NOT automatically connected.</p>
                            </div>

                            <h5>Cross-Filtering</h5>
                            <p>In AI/BI Dashboards, clicking a data point in one widget (e.g., a bar in a bar chart) can <strong>automatically filter other widgets</strong> on the same page. This does <strong>NOT</strong> require query parameters — it's a built-in feature.</p>

                            <h5>Embedding Dashboards</h5>
                            <pre><code>-- Embed via iframe (published dashboards)
&lt;iframe src="https://workspace.databricks.com/embed/dashboards/..."&gt;
&lt;/iframe&gt;</code></pre>
                            <ul>
                                <li>Only <strong>published dashboards</strong> can be embedded</li>
                                <li>Viewers must have <strong>workspace access</strong> (authentication required)</li>
                                <li>Embedding is via <strong>iframe URL</strong></li>
                            </ul>

                            <h5>Sharing & Subscriptions</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Method</th><th>Requires Databricks Account?</th><th>Details</th></tr>
                                <tr><td><strong>Share with users</strong></td><td>Yes</td><td>CAN VIEW / CAN EDIT / CAN MANAGE</td></tr>
                                <tr><td><strong>PDF Subscription</strong></td><td>No</td><td>Email PDF snapshots on schedule</td></tr>
                                <tr><td><strong>Embed (iframe)</strong></td><td>Yes (for auth)</td><td>Published dashboards only</td></tr>
                            </table>
                            ${styleBox('red', 'Exam Trap: Sharing with External Stakeholders')}
                                <p>External stakeholders <strong>without Databricks accounts</strong> can receive dashboards via <strong>PDF email subscriptions</strong>. They CANNOT use embedded dashboards (requires auth).</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Parámetros de Query en Dashboards</h5>
                            <pre><code>-- Agregar un parámetro a un query
SELECT * FROM ventas
WHERE region = :param_region
  AND order_date BETWEEN :fecha_inicio AND :fecha_fin;</code></pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo de Parámetro</th><th>Widget</th><th>Caso de Uso</th></tr>
                                <tr><td><strong>Text</strong></td><td>Entrada de texto libre</td><td>Términos de búsqueda, filtros personalizados</td></tr>
                                <tr><td><strong>Number</strong></td><td>Entrada numérica</td><td>Umbrales, montos</td></tr>
                                <tr><td><strong>Date</strong></td><td>Selector de calendario</td><td>Filtrado por fecha</td></tr>
                                <tr><td><strong>Date Range</strong></td><td>Dos selectores de calendario</td><td>Filtrado inicio/fin</td></tr>
                                <tr><td><strong>Dropdown List</strong></td><td>Opciones predefinidas</td><td>Selección de región, categoría</td></tr>
                                <tr><td><strong>Query-based Dropdown</strong></td><td>Opciones desde SQL query</td><td>Valores dinámicos de tablas</td></tr>
                            </table>
                            ${styleBox('yellow', 'Examen: Parámetro No Aplicado al Widget')}
                                <p>Si un parámetro existe en el query pero el widget del dashboard no muestra el filtro, el parámetro debe <strong>mapearse al widget</strong> en el editor del dashboard. Los parámetros NO se conectan automáticamente.</p>
                            </div>

                            <h5>Cross-Filtering</h5>
                            <p>En dashboards AI/BI, hacer clic en un punto de datos en un widget (ej., una barra en un gráfico) puede <strong>filtrar automáticamente otros widgets</strong> en la misma página. Esto <strong>NO</strong> requiere parámetros de query — es una funcionalidad integrada.</p>

                            <h5>Embedding de Dashboards</h5>
                            <pre><code>-- Embed vía iframe (dashboards publicados)
&lt;iframe src="https://workspace.databricks.com/embed/dashboards/..."&gt;
&lt;/iframe&gt;</code></pre>
                            <ul>
                                <li>Solo <strong>dashboards publicados</strong> pueden embeberse</li>
                                <li>Los viewers deben tener <strong>acceso al workspace</strong> (autenticación requerida)</li>
                                <li>El embedding es vía <strong>URL de iframe</strong></li>
                            </ul>

                            <h5>Compartir & Suscripciones</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Método</th><th>Necesita Cuenta Databricks?</th><th>Detalles</th></tr>
                                <tr><td><strong>Compartir con usuarios</strong></td><td>Sí</td><td>CAN VIEW / CAN EDIT / CAN MANAGE</td></tr>
                                <tr><td><strong>Suscripción PDF</strong></td><td>No</td><td>Envía snapshots PDF por email en horario</td></tr>
                                <tr><td><strong>Embed (iframe)</strong></td><td>Sí (para autenticación)</td><td>Solo dashboards publicados</td></tr>
                            </table>
                            ${styleBox('red', 'Trampa: Compartir con Externos')}
                                <p>Externos <strong>sin cuenta Databricks</strong> pueden recibir dashboards vía <strong>suscripciones PDF por email</strong>. NO PUEDEN usar dashboards embebidos (requiere autenticación).</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Statistical Concepts & Notebooks Visualization",
                    content: `
                        ${langSection('en', `
                            <h5>Descriptive Statistics — Exam Concepts</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Concept</th><th>Definition</th><th>SQL Example</th></tr>
                                <tr><td><strong>Mean</strong></td><td>Average of all values</td><td><code>AVG(salary)</code></td></tr>
                                <tr><td><strong>Median</strong></td><td>Middle value when sorted</td><td><code>PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary)</code></td></tr>
                                <tr><td><strong>Variance</strong></td><td>How spread out values are from the mean (average of squared differences)</td><td><code>VAR_POP(salary)</code></td></tr>
                                <tr><td><strong>Std Dev</strong></td><td>Square root of variance — in same units as data</td><td><code>STDDEV(salary)</code></td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam: When Mean ≠ Median')}
                                <p>Mean and median differ when data is <strong>skewed</strong>. Outliers (extreme high or low values) pull the mean but NOT the median. Example: If most salaries are ~$50K but one is $10M, the mean >> median.</p>
                            </div>

                            <h5>Histogram — Distribution Visualization</h5>
                            <p>A histogram shows <strong>frequency distribution</strong> of a continuous variable. Bins divide the range into intervals, and bar height = count of values in each interval.</p>

                            <h5>Notebook Visualizations</h5>
                            <pre><code>-- In a Databricks notebook:

-- %sql magic command to run SQL
%sql
SELECT region, SUM(amount) AS total FROM sales GROUP BY region;
-- Result appears as a table; click chart icon to visualize

-- Python: display() for built-in charts
display(spark.sql("SELECT * FROM sales"))

-- Python: displayHTML() for custom HTML/JS
displayHTML("&lt;h1&gt;Custom Dashboard&lt;/h1&gt;")</code></pre>
                            ${styleBox('green', 'Notebook vs SQL Dashboard Visualizations')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Feature</th><th>Notebook</th><th>SQL Dashboard</th></tr>
                                    <tr><td>Best for</td><td>Exploratory, ad-hoc</td><td>Production, sharing</td></tr>
                                    <tr><td>Sharing</td><td>Share notebook link</td><td>Permissions, subscriptions</td></tr>
                                    <tr><td>Auto-refresh</td><td>Manual re-run</td><td>Scheduled refresh</td></tr>
                                    <tr><td>Interactivity</td><td>Code-driven (widgets)</td><td>Parameters, cross-filter</td></tr>
                                </table>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Estadística Descriptiva — Conceptos de Examen</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Concepto</th><th>Definición</th><th>Ejemplo SQL</th></tr>
                                <tr><td><strong>Media</strong></td><td>Promedio de todos los valores</td><td><code>AVG(salario)</code></td></tr>
                                <tr><td><strong>Mediana</strong></td><td>Valor del medio cuando se ordena</td><td><code>PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salario)</code></td></tr>
                                <tr><td><strong>Varianza</strong></td><td>Qué tan dispersos están los valores del promedio (promedio de diferencias cuadradas)</td><td><code>VAR_POP(salario)</code></td></tr>
                                <tr><td><strong>Desv. Est.</strong></td><td>Raíz cuadrada de la varianza — en mismas unidades que los datos</td><td><code>STDDEV(salario)</code></td></tr>
                            </table>
                            ${styleBox('yellow', 'Examen: Cuándo Media ≠ Mediana')}
                                <p>Difieren cuando los datos están <strong>sesgados</strong>. Los outliers (valores extremos altos o bajos) mueven la media pero NO la mediana. Ejemplo: Si la mayoría de salarios son ~$50K pero uno es $10M, la media >> mediana.</p>
                            </div>

                            <h5>Histograma — Visualización de Distribución</h5>
                            <p>Un histograma muestra la <strong>distribución de frecuencia</strong> de una variable continua. Los bins dividen el rango en intervalos, y la altura de la barra = conteo de valores en cada intervalo.</p>

                            <h5>Visualizaciones en Notebooks</h5>
                            <pre><code>-- En un notebook de Databricks:

-- Comando mágico %sql para ejecutar SQL
%sql
SELECT region, SUM(amount) AS total FROM sales GROUP BY region;
-- Resultado aparece como tabla; clic en icono de gráfico para visualizar

-- Python: display() para gráficos integrados
display(spark.sql("SELECT * FROM sales"))

-- Python: displayHTML() para HTML/JS personalizado
displayHTML("&lt;h1&gt;Dashboard Personalizado&lt;/h1&gt;")</code></pre>
                            ${styleBox('green', 'Notebook vs SQL Dashboard Visualizaciones')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Característica</th><th>Notebook</th><th>SQL Dashboard</th></tr>
                                    <tr><td>Mejor para</td><td>Exploratorio, ad-hoc</td><td>Producción, compartir</td></tr>
                                    <tr><td>Compartir</td><td>Compartir link de notebook</td><td>Permisos, suscripciones</td></tr>
                                    <tr><td>Auto-refresh</td><td>Re-ejecución manual</td><td>Refresh programado</td></tr>
                                    <tr><td>Interactividad</td><td>Code-driven (widgets)</td><td>Parámetros, cross-filter</td></tr>
                                </table>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: DATA MODELING — EXPANDED (22 Q, was 1 item)
        // =====================================================
        {
            title: 'E6. Data Modeling — Star Schema, Views & Materialized Views',
            items: [
                {
                    title: "Star Schema, Keys & Gold-Layer Design",
                    content: `
                        ${langSection('en', `
                            <h5>Star Schema</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
        dim_customer ─────┐
                          │
        dim_product  ─────┤
                          ├─── fact_sales (center)
        dim_time     ─────┤    • customer_key (FK)
                          │    • product_key (FK)
        dim_store    ─────┘    • time_key (FK)
                               • store_key (FK)
                               • quantity, amount, discount
                            </pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Table Type</th><th>Contains</th><th>Keys</th><th>Updates</th></tr>
                                <tr><td><strong>Fact Table</strong></td><td>Measurable events (sales, clicks)</td><td>Foreign keys to dimensions</td><td>Append-only typically</td></tr>
                                <tr><td><strong>Dimension Table</strong></td><td>Descriptive attributes (who, what, where)</td><td>Primary key (surrogate)</td><td>SCD Type 1 or Type 2</td></tr>
                            </table>

                            <h5>PRIMARY KEY & FOREIGN KEY in Unity Catalog</h5>
                            <pre><code>-- Define PK (informational only — NOT enforced!)
CREATE TABLE dim_customer (
  customer_key BIGINT NOT NULL,
  name STRING,
  CONSTRAINT pk_customer PRIMARY KEY (customer_key)
);

-- Define FK
CREATE TABLE fact_sales (
  sale_id BIGINT,
  customer_key BIGINT,
  amount DECIMAL(10,2),
  CONSTRAINT fk_customer FOREIGN KEY (customer_key)
    REFERENCES dim_customer (customer_key)
);</code></pre>
                            ${styleBox('red', 'Exam Trap: Keys Are INFORMATIONAL Only')}
                                <p>In Unity Catalog, PRIMARY KEY and FOREIGN KEY constraints are <strong>NOT ENFORCED</strong>. They exist for <strong>documentation and BI tool optimization</strong> (Tableau, Power BI use them for join suggestions). You CAN insert duplicate PKs or orphan FKs — Databricks won't stop you.</p>
                            </div>

                            ${styleBox('yellow', 'Exam: Denormalization Pattern')}
                                <p>If a fact table has <code>product_name</code> and <code>product_category</code> columns directly (instead of a FK to dim_product), this is a <strong>denormalization anti-pattern</strong>. It violates star schema. The fix: extract those to a dimension table and use a FK.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Star Schema (Esquema Estrella)</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
        dim_cliente ──────┐
                          │
        dim_producto ─────┤
                          ├─── fact_ventas (centro)
        dim_tiempo  ─────┤    • customer_key (FK)
                          │    • product_key (FK)
        dim_tienda  ─────┘    • time_key (FK)
                               • store_key (FK)
                               • cantidad, monto, descuento
                            </pre>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo de Tabla</th><th>Contiene</th><th>Claves</th><th>Actualizaciones</th></tr>
                                <tr><td><strong>Tabla de Hechos</strong></td><td>Eventos medibles (ventas, clics)</td><td>Claves foráneas a dimensiones</td><td>Típicamente append-only</td></tr>
                                <tr><td><strong>Tabla de Dimensión</strong></td><td>Atributos descriptivos (quién, qué, dónde)</td><td>Clave primaria (surrogate)</td><td>SCD Tipo 1 o Tipo 2</td></tr>
                            </table>

                            <h5>PRIMARY KEY & FOREIGN KEY en Unity Catalog</h5>
                            <pre><code>-- Definir PK (solo informacional — ¡NO se aplica!)
CREATE TABLE dim_cliente (
  customer_key BIGINT NOT NULL,
  nombre STRING,
  CONSTRAINT pk_cliente PRIMARY KEY (customer_key)
);

-- Definir FK
CREATE TABLE fact_ventas (
  sale_id BIGINT,
  customer_key BIGINT,
  amount DECIMAL(10,2),
  CONSTRAINT fk_cliente FOREIGN KEY (customer_key)
    REFERENCES dim_cliente (customer_key)
);</code></pre>
                            ${styleBox('red', 'Trampa de Examen: Claves son INFORMACIONALES')}
                                <p>En Unity Catalog, PRIMARY KEY y FOREIGN KEY <strong>NO SE APLICAN</strong>. Existen para <strong>documentación y optimización de herramientas BI</strong> (Tableau, Power BI las usan para sugerencias de joins). PUEDES insertar PKs duplicados o FKs huérfanos — Databricks no te detendrá.</p>
                            </div>

                            ${styleBox('yellow', 'Examen: Patrón de Desnormalización')}
                                <p>Si una tabla de hechos tiene columnas <code>product_name</code> y <code>product_category</code> directamente (en vez de una FK a dim_producto), esto es un <strong>anti-patrón de desnormalización</strong>. Viola el star schema. La solución: extraer a una tabla de dimensión y usar una FK.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "VIEW vs Materialized View vs Table — Complete Decision",
                    content: `
                        ${langSection('en', `
                            <h5>Three Options for the Gold Layer</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>VIEW</th><th>Materialized View</th><th>TABLE (CTAS)</th></tr>
                                <tr><td><strong>Stores data?</strong></td><td>No — query definition only</td><td>Yes — precomputed</td><td>Yes — full copy</td></tr>
                                <tr><td><strong>Auto-refresh?</strong></td><td>Always live (runs on query)</td><td><strong>Yes — auto when source changes</strong></td><td>No — must rebuild manually</td></tr>
                                <tr><td><strong>Performance</strong></td><td>Slowest (recomputes each time)</td><td><strong>Fastest (precomputed)</strong></td><td>Fast (pre-stored)</td></tr>
                                <tr><td><strong>Storage cost</strong></td><td>None</td><td>Medium</td><td>Full duplication</td></tr>
                                <tr><td><strong>Use case</strong></td><td>Simple transformations, security views</td><td><strong>Dashboard queries, heavy aggregations</strong></td><td>One-time snapshots</td></tr>
                                <tr><td><strong>Stale data risk</strong></td><td>Never stale</td><td>Low (auto-refresh)</td><td>High (manual)</td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam Decision Guide')}
                                <ul>
                                    <li>"Dashboard query is slow, needs optimization" → <strong>Materialized View</strong></li>
                                    <li>"Always need latest data, simple logic" → <strong>VIEW</strong></li>
                                    <li>"One-time export/backup" → <strong>CTAS (Table)</strong></li>
                                    <li>"Restrict row/column access" → <strong>Dynamic VIEW</strong></li>
                                </ul>
                            </div>
                            <pre><code>-- Regular VIEW (no data stored)
CREATE VIEW gold.monthly_summary AS
SELECT DATE_TRUNC('MONTH', order_date) AS month,
       SUM(amount) AS total_revenue
FROM silver.orders GROUP BY 1;

-- Materialized View (precomputed, auto-refreshed in DLT)
CREATE MATERIALIZED VIEW gold.mv_monthly_summary AS
SELECT DATE_TRUNC('MONTH', order_date) AS month,
       SUM(amount) AS total_revenue
FROM silver.orders GROUP BY 1;</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Tres Opciones para la Capa Gold</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>VIEW</th><th>Vista Materializada</th><th>TABLE (CTAS)</th></tr>
                                <tr><td><strong>Almacena datos?</strong></td><td>No — solo definición del query</td><td>Sí — precomputada</td><td>Sí — copia completa</td></tr>
                                <tr><td><strong>Auto-refresh?</strong></td><td>Siempre en vivo (ejecuta al consultar)</td><td><strong>Sí — auto cuando cambia fuente</strong></td><td>No — debe reconstruir manualmente</td></tr>
                                <tr><td><strong>Rendimiento</strong></td><td>Más lento (recalcula cada vez)</td><td><strong>Más rápido (precomputado)</strong></td><td>Rápido (pre-almacenado)</td></tr>
                                <tr><td><strong>Costo almacenamiento</strong></td><td>Ninguno</td><td>Medio</td><td>Duplicación completa</td></tr>
                                <tr><td><strong>Caso de uso</strong></td><td>Transformaciones simples, vistas de seguridad</td><td><strong>Queries de dashboard, agregaciones pesadas</strong></td><td>Snapshots únicos</td></tr>
                                <tr><td><strong>Riesgo de datos obsoletos</strong></td><td>Nunca obsoleto</td><td>Bajo (auto-refresh)</td><td>Alto (manual)</td></tr>
                            </table>
                            ${styleBox('yellow', 'Guía de Decisión del Examen')}
                                <ul>
                                    <li>"Query de dashboard lento, necesita optimización" → <strong>Vista Materializada</strong></li>
                                    <li>"Siempre necesito datos actuales, lógica simple" → <strong>VIEW</strong></li>
                                    <li>"Exportación/backup único" → <strong>CTAS (Table)</strong></li>
                                    <li>"Restringir acceso por filas/columnas" → <strong>VIEW dinámica</strong></li>
                                </ul>
                            </div>
                            <pre><code>-- VIEW regular (no almacena datos)
CREATE VIEW gold.resumen_mensual AS
SELECT DATE_TRUNC('MONTH', order_date) AS mes,
       SUM(amount) AS revenue_total
FROM silver.orders GROUP BY 1;

-- Vista Materializada (precomputada, auto-refreshed en DLT)
CREATE MATERIALIZED VIEW gold.mv_resumen_mensual AS
SELECT DATE_TRUNC('MONTH', order_date) AS mes,
       SUM(amount) AS revenue_total
FROM silver.orders GROUP BY 1;</code></pre>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: AI/BI GENIE — EXPANDED (26 Q, was 2 items)
        // =====================================================
        {
            title: 'E7. AI/BI Genie — Instructions, Trusted Assets & Limits',
            items: [
                {
                    title: "Genie Setup, Instructions & Disambiguation",
                    content: `
                        ${langSection('en', `
                            <h5>Setting Up a Genie Space — Step by Step</h5>
                            <ol>
                                <li><strong>Add tables</strong> from Unity Catalog (recommended: 5-10 max for best accuracy)</li>
                                <li><strong>Write General Instructions</strong> — business context and terminology</li>
                                <li><strong>Add Sample Questions</strong> — teach Genie your common queries</li>
                                <li><strong>Create Trusted Assets</strong> — verified SQL queries for critical answers</li>
                                <li><strong>Test in Draft Mode</strong> before releasing to users</li>
                            </ol>

                            <h5>General Instructions (Critical for Accuracy)</h5>
                            ${styleBox('blue', 'What to Include in Instructions')}
                                <ul>
                                    <li><strong>Business definitions:</strong> "Revenue means total_sales minus returns"</li>
                                    <li><strong>Fiscal calendar:</strong> "Q1 = Feb-Apr, not Jan-Mar"</li>
                                    <li><strong>Column disambiguation:</strong> "When user says 'revenue,' use column <code>net_revenue</code>, not <code>gross_sales</code>"</li>
                                    <li><strong>Join relationships:</strong> "Always join orders to customers on customer_id"</li>
                                    <li><strong>Exclusions:</strong> "Never include test data (region = 'TEST')"</li>
                                </ul>
                            </div>

                            <h5>Table Limits & Column Disambiguation</h5>
                            ${styleBox('yellow', 'Exam: Too Many Tables = Lower Accuracy')}
                                <ul>
                                    <li>Recommended: <strong>5-10 tables max</strong> per Genie space</li>
                                    <li>Too many tables → Genie struggles to pick correct tables for joins</li>
                                    <li>If a table has 50+ columns, add <strong>column-level comments</strong> in Unity Catalog</li>
                                    <li>Rename ambiguous columns (e.g., "id" → "customer_id") or add comments</li>
                                </ul>
                            </div>

                            <h5>Draft Mode vs Released (Published) Mode</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Draft Mode</th><th>Released Mode</th></tr>
                                <tr><td><strong>Who sees it</strong></td><td>Only editors/admins</td><td>All users with access</td></tr>
                                <tr><td><strong>Purpose</strong></td><td>Testing & tuning</td><td>Production use</td></tr>
                                <tr><td><strong>Changes</strong></td><td>Can freely modify</td><td>Must publish again after changes</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Configurar un Genie Space — Paso a Paso</h5>
                            <ol>
                                <li><strong>Agregar tablas</strong> de Unity Catalog (recomendado: 5-10 máximo para mejor precisión)</li>
                                <li><strong>Escribir instrucciones generales</strong> — contexto y terminología del negocio</li>
                                <li><strong>Agregar preguntas de ejemplo</strong> — enseñar a Genie tus queries comunes</li>
                                <li><strong>Crear Trusted Assets</strong> — queries SQL verificados para respuestas críticas</li>
                                <li><strong>Probar en modo Draft</strong> antes de publicar a usuarios</li>
                            </ol>

                            <h5>Instrucciones Generales (Crítico para Precisión)</h5>
                            ${styleBox('blue', 'Qué Incluir en Instrucciones')}
                                <ul>
                                    <li><strong>Definiciones de negocio:</strong> "Revenue = total_sales - devoluciones"</li>
                                    <li><strong>Calendario fiscal:</strong> "Q1 = Feb-Abr, no Ene-Mar"</li>
                                    <li><strong>Desambiguación de columnas:</strong> "Cuando digan 'revenue', usar columna <code>net_revenue</code>, no <code>gross_sales</code>"</li>
                                    <li><strong>Relaciones de JOIN:</strong> "Siempre unir orders a customers por customer_id"</li>
                                    <li><strong>Exclusiones:</strong> "Nunca incluir datos de prueba (region = 'TEST')"</li>
                                </ul>
                            </div>

                            <h5>Límites de Tablas & Desambiguación de Columnas</h5>
                            ${styleBox('yellow', 'Examen: Demasiadas Tablas = Menor Precisión')}
                                <ul>
                                    <li>Recomendado: <strong>5-10 tablas máximo</strong> por espacio Genie</li>
                                    <li>Demasiadas tablas → Genie tiene dificultad para elegir tablas correctas para joins</li>
                                    <li>Si una tabla tiene 50+ columnas, agregar <strong>comentarios a nivel de columna</strong> en Unity Catalog</li>
                                    <li>Renombrar columnas ambiguas (ej., "id" → "customer_id") o agregar comentarios</li>
                                </ul>
                            </div>

                            <h5>Modo Draft vs Modo Released (Publicado)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Modo Draft</th><th>Modo Released</th></tr>
                                <tr><td><strong>Quién lo ve</strong></td><td>Solo editores/admins</td><td>Todos los usuarios con acceso</td></tr>
                                <tr><td><strong>Propósito</strong></td><td>Prueba y ajuste</td><td>Uso en producción</td></tr>
                                <tr><td><strong>Cambios</strong></td><td>Puede modificar libremente</td><td>Debe publicar de nuevo después de cambios</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "Trusted Assets, History Tab, Permissions & Limitations",
                    content: `
                        ${langSection('en', `
                            <h5>Trusted Assets — Verified SQL Answers</h5>
                            ${styleBox('green', 'What Are Trusted Assets?')}
                                <ul>
                                    <li><strong>Pre-verified SQL queries</strong> that Genie will use when a matching question is asked</li>
                                    <li>Ensures <strong>100% accurate, deterministic answers</strong> for critical business questions</li>
                                    <li>Takes <strong>priority over auto-generated SQL</strong></li>
                                    <li>Created by curators from the History tab or manually</li>
                                </ul>
                            </div>
                            <p><strong>Workflow:</strong> User asks question → Genie checks Trusted Assets first → If match, uses trusted SQL → If no match, generates SQL</p>

                            <h5>History Tab & Feedback Loop</h5>
                            <ul>
                                <li>Review <strong>all user questions and Genie's responses</strong></li>
                                <li>Users give <strong>thumbs up/down</strong> on answers</li>
                                <li><strong>Thumbs down</strong> → Curator reviews → Fix instructions or add Trusted Asset</li>
                                <li>Curators can <strong>edit SQL</strong> in responses and save as Trusted Asset</li>
                            </ul>

                            <h5>Genie Permissions</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permission</th><th>Can Ask Questions?</th><th>Can Edit Space?</th><th>Can Manage Users?</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td>Yes</td><td>No</td><td>No</td></tr>
                                <tr><td><strong>CAN MANAGE</strong></td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
                            </table>
                            ${styleBox('yellow', 'Exam: Genie Inherits UC Permissions')}
                                <p>Genie <strong>respects Unity Catalog permissions</strong>. If a user doesn't have SELECT on the underlying table, Genie <strong>will NOT return data</strong> from that table, even if they can access the Genie space.</p>
                            </div>

                            <h5>Key Limitations</h5>
                            <ul>
                                <li>Genie generates <strong>SQL only</strong> — no Python, R, or custom visualizations</li>
                                <li><strong>No cross-database joins</strong> — tables must be in same catalog</li>
                                <li>Cannot create <strong>scheduled reports</strong> or alerts (use SQL Dashboards for that)</li>
                                <li>Accuracy depends heavily on <strong>quality of instructions and column comments</strong></li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <h5>Trusted Assets — Respuestas SQL Verificadas</h5>
                            ${styleBox('green', '¿Qué Son los Trusted Assets?')}
                                <ul>
                                    <li><strong>Queries SQL pre-verificados</strong> que Genie usa cuando se pregunta algo coincidente</li>
                                    <li>Garantiza <strong>respuestas 100% precisas y determinísticas</strong> para preguntas críticas del negocio</li>
                                    <li>Tiene <strong>prioridad sobre SQL auto-generado</strong></li>
                                    <li>Creados por curadores desde la pestaña History o manualmente</li>
                                </ul>
                            </div>
                            <p><strong>Flujo de trabajo:</strong> Usuario pregunta → Genie verifica Trusted Assets primero → Si coincide, usa SQL verificado → Si no coincide, genera SQL</p>

                            <h5>Pestaña History & Ciclo de Feedback</h5>
                            <ul>
                                <li>Revisar <strong>todas las preguntas de usuarios y respuestas de Genie</strong></li>
                                <li>Usuarios dan <strong>thumbs up/down</strong> en respuestas</li>
                                <li><strong>Thumbs down</strong> → Curador revisa → Corrige instrucciones o agrega Trusted Asset</li>
                                <li>Curadores pueden <strong>editar SQL</strong> en respuestas y guardar como Trusted Asset</li>
                            </ul>

                            <h5>Permisos de Genie</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permiso</th><th>Puede Preguntar?</th><th>Puede Editar Espacio?</th><th>Puede Gestionar Usuarios?</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td>Sí</td><td>No</td><td>No</td></tr>
                                <tr><td><strong>CAN MANAGE</strong></td><td>Sí</td><td>Sí</td><td>Sí</td></tr>
                            </table>
                            ${styleBox('yellow', 'Genie Hereda Permisos de UC')}
                                <p>Genie <strong>respeta permisos de Unity Catalog</strong>. Si el usuario no tiene SELECT en la tabla subyacente, Genie <strong>NO retornará datos</strong> de esa tabla, incluso si pueden acceder al espacio Genie.</p>
                            </div>

                            <h5>Limitaciones Clave</h5>
                            <ul>
                                <li>Genie genera <strong>solo SQL</strong> — no Python, R, ni visualizaciones personalizadas</li>
                                <li><strong>No joins entre databases</strong> — tablas deben estar en el mismo catálogo</li>
                                <li>No puede crear <strong>reportes programados</strong> ni alertas (usar SQL Dashboards para eso)</li>
                                <li>Precisión depende fuertemente de la <strong>calidad de instrucciones y comentarios de columnas</strong></li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN: ANALYZING QUERIES — EXPANDED (28 Q, was 2 items)
        // =====================================================
        {
            title: 'E8. Analyzing Queries — Caching, Materialized Views & Predictive Optimization',
            items: [
                {
                    title: "Caching, APPROX_COUNT_DISTINCT & Materialized View Refresh",
                    content: `
                        ${langSection('en', `
                            <h5>Query Result Caching</h5>
                            ${styleBox('blue', 'How Caching Works')}
                                <ul>
                                    <li>SQL Warehouses <strong>cache query results</strong> automatically</li>
                                    <li>Cache hit requires: <strong>same query text + same data</strong> (no changes)</li>
                                    <li>Cache is <strong>invalidated</strong> when underlying data changes</li>
                                    <li>Cache TTL: <strong>24 hours maximum</strong></li>
                                    <li>To check if results came from cache: look at the Query Profile — cached queries show <strong>"Result cached"</strong> indicator</li>
                                </ul>
                            </div>

                            <h5>APPROX_COUNT_DISTINCT</h5>
                            <pre><code>-- Exact count (slow on billions of rows)
SELECT COUNT(DISTINCT session_id) FROM events;

-- Approximate count (much faster, ~2% error)
SELECT APPROX_COUNT_DISTINCT(session_id) FROM events;</code></pre>
                            ${styleBox('yellow', 'When to Use Each')}
                                <ul>
                                    <li><strong>COUNT(DISTINCT)</strong>: When exact count matters (financial, compliance)</li>
                                    <li><strong>APPROX_COUNT_DISTINCT</strong>: When speed matters more than exact precision (dashboards, monitoring)</li>
                                    <li>Uses <strong>HyperLogLog++</strong> algorithm — ~2% margin of error</li>
                                </ul>
                            </div>

                            <h5>Materialized View Refresh Behavior</h5>
                            <ul>
                                <li>MV is refreshed <strong>automatically when underlying data changes</strong> (in DLT pipelines)</li>
                                <li>In Databricks SQL, MV uses <strong>incremental refresh</strong> when possible</li>
                                <li>If MV query changes, requires <strong>full recomputation</strong></li>
                                <li><code>REFRESH MATERIALIZED VIEW mv_name</code> forces manual refresh</li>
                            </ul>

                            <h5>Predictive Optimization</h5>
                            <p>Databricks <strong>automatically</strong> runs OPTIMIZE and VACUUM on Unity Catalog managed tables based on usage patterns. No manual scheduling needed.</p>
                            <ul>
                                <li>Enabled at <strong>catalog or schema level</strong></li>
                                <li>Works only on <strong>managed Delta tables</strong></li>
                                <li>Runs OPTIMIZE when small file problem detected</li>
                                <li>Runs VACUUM when old files accumulate</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <h5>Caché de Resultados de Query</h5>
                            ${styleBox('blue', 'Cómo Funciona la Caché')}
                                <ul>
                                    <li>SQL Warehouses <strong>cachean resultados automáticamente</strong></li>
                                    <li>Hit de caché requiere: <strong>mismo query + mismos datos</strong> (sin cambios)</li>
                                    <li>La caché se <strong>invalida</strong> cuando los datos subyacentes cambian</li>
                                    <li>TTL de caché: <strong>24 horas máximo</strong></li>
                                    <li>Para verificar si los resultados vinieron de caché: ver el Query Profile — queries cacheados muestran indicador <strong>"Result cached"</strong></li>
                                </ul>
                            </div>

                            <h5>APPROX_COUNT_DISTINCT</h5>
                            <pre><code>-- Conteo exacto (lento con billones de filas)
SELECT COUNT(DISTINCT session_id) FROM eventos;

-- Conteo aproximado (mucho más rápido, ~2% error)
SELECT APPROX_COUNT_DISTINCT(session_id) FROM eventos;</code></pre>
                            ${styleBox('yellow', 'Cuándo Usar Cada Uno')}
                                <ul>
                                    <li><strong>COUNT(DISTINCT)</strong>: Cuando el conteo exacto importa (financiero, cumplimiento)</li>
                                    <li><strong>APPROX_COUNT_DISTINCT</strong>: Cuando la velocidad importa más que la precisión exacta (dashboards, monitoreo)</li>
                                    <li>Usa el algoritmo <strong>HyperLogLog++</strong> — ~2% margen de error</li>
                                </ul>
                            </div>

                            <h5>Comportamiento de Refresh de Vistas Materializadas</h5>
                            <ul>
                                <li>MV se refresca <strong>automáticamente cuando cambian los datos subyacentes</strong> (en pipelines DLT)</li>
                                <li>En Databricks SQL, MV usa <strong>refresh incremental</strong> cuando es posible</li>
                                <li>Si el query de la MV cambia, requiere <strong>recomputación completa</strong></li>
                                <li><code>REFRESH MATERIALIZED VIEW nombre_mv</code> fuerza refresh manual</li>
                            </ul>

                            <h5>Predictive Optimization</h5>
                            <p>Databricks <strong>automáticamente</strong> ejecuta OPTIMIZE y VACUUM en tablas managed de Unity Catalog basado en patrones de uso. No requiere programación manual.</p>
                            <ul>
                                <li>Habilitado a nivel de <strong>catálogo o schema</strong></li>
                                <li>Funciona solo en <strong>tablas Delta managed</strong></li>
                                <li>Ejecuta OPTIMIZE cuando detecta problema de archivos pequeños</li>
                                <li>Ejecuta VACUUM cuando se acumulan archivos antiguos</li>
                            </ul>
                        `)}
                    `
                }
            ]
        }
    ];

    // Merge with existing data — NEVER replaces, only appends
    if (window.studyData['databricks-da']) {
        window.studyData['databricks-da'] = window.studyData['databricks-da'].concat(expandedSections);
    }
})();
