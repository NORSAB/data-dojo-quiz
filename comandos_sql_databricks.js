// =============================================================================
// COMANDOS SQL — Databricks Certified Data Analyst Associate
// SQL commands with line-by-line explanations for exam preparation
// =============================================================================
window.comandosSqlDatabricks = [
  {
    category: "JOIN Types",
    icon: "M17 20h-5v-2h5a3 3 0 000-6h-1.5l-.5-2A5 5 0 005 11a5 5 0 004 9h-2",
    comandos: [
      {
        nombre: "LEFT SEMI JOIN",
        descripcion_en: "Returns rows from the LEFT table that HAVE a match in the right table. No columns from right table are returned. No duplicates.",
        descripcion_es: "Retorna filas de la tabla IZQUIERDA que TIENEN coincidencia en la tabla derecha. No retorna columnas de la derecha. Sin duplicados.",
        ejemplos: [
          {
            titulo_en: "Find customers who placed orders",
            titulo_es: "Encontrar clientes que hicieron pedidos",
            sql: "SELECT *\nFROM customers\nLEFT SEMI JOIN orders\n  ON customers.customer_id = orders.customer_id;",
            lineas: [
              { code: "SELECT *", en: "Select all columns — but ONLY from the left table (customers)", es: "Selecciona todas las columnas — pero SOLO de la tabla izquierda (customers)" },
              { code: "FROM customers", en: "Left table: the one whose rows we want to keep", es: "Tabla izquierda: la que queremos conservar" },
              { code: "LEFT SEMI JOIN orders", en: "Only keep customers that exist in orders", es: "Solo conservar clientes que existan en orders" },
              { code: "ON customers.customer_id = orders.customer_id", en: "Match condition between both tables", es: "Condición de coincidencia entre ambas tablas" }
            ]
          },
          {
            titulo_en: "Products with recent sales",
            titulo_es: "Productos con ventas recientes",
            sql: "SELECT p.product_id, p.name, p.price\nFROM products p\nLEFT SEMI JOIN sales s\n  ON p.product_id = s.product_id\n  AND s.sale_date >= '2024-01-01';",
            lineas: [
              { code: "SELECT p.product_id, p.name, p.price", en: "Only columns from left table (products)", es: "Solo columnas de la tabla izquierda (products)" },
              { code: "FROM products p", en: "Left table aliased as 'p'", es: "Tabla izquierda con alias 'p'" },
              { code: "LEFT SEMI JOIN sales s", en: "Keep products that appear in sales", es: "Conservar productos que aparecen en ventas" },
              { code: "ON p.product_id = s.product_id", en: "Match on product ID", es: "Coincidir por ID de producto" },
              { code: "AND s.sale_date >= '2024-01-01'", en: "Additional filter: only recent sales count", es: "Filtro adicional: solo cuentan ventas recientes" }
            ]
          },
          {
            titulo_en: "Employees in active departments",
            titulo_es: "Empleados en departamentos activos",
            sql: "SELECT e.employee_name, e.role\nFROM employees e\nLEFT SEMI JOIN departments d\n  ON e.dept_id = d.dept_id\n  AND d.status = 'active';",
            lineas: [
              { code: "SELECT e.employee_name, e.role", en: "Columns from left table only", es: "Columnas solo de la tabla izquierda" },
              { code: "FROM employees e", en: "Source: employees table", es: "Fuente: tabla de empleados" },
              { code: "LEFT SEMI JOIN departments d", en: "Filter to employees with matching dept", es: "Filtrar a empleados con departamento coincidente" },
              { code: "ON e.dept_id = d.dept_id", en: "Join key", es: "Clave de unión" },
              { code: "AND d.status = 'active'", en: "Only active departments qualify", es: "Solo califican departamentos activos" }
            ]
          },
          {
            titulo_en: "Users who logged in this month",
            titulo_es: "Usuarios que iniciaron sesión este mes",
            sql: "SELECT u.user_id, u.email\nFROM users u\nLEFT SEMI JOIN login_events l\n  ON u.user_id = l.user_id\n  AND l.login_date >= DATE_TRUNC('month', CURRENT_DATE());",
            lineas: [
              { code: "SELECT u.user_id, u.email", en: "Return user info only", es: "Retornar solo info del usuario" },
              { code: "FROM users u", en: "Left table: all users", es: "Tabla izquierda: todos los usuarios" },
              { code: "LEFT SEMI JOIN login_events l", en: "Keep users with login events", es: "Conservar usuarios con eventos de login" },
              { code: "ON u.user_id = l.user_id", en: "Match by user ID", es: "Coincidir por ID de usuario" },
              { code: "AND l.login_date >= DATE_TRUNC('month', CURRENT_DATE())", en: "Only this month's logins", es: "Solo logins de este mes" }
            ]
          },
          {
            titulo_en: "Regions with warehouses",
            titulo_es: "Regiones con almacenes",
            sql: "SELECT r.region_name, r.country\nFROM regions r\nLEFT SEMI JOIN warehouses w\n  ON r.region_id = w.region_id;",
            lineas: [
              { code: "SELECT r.region_name, r.country", en: "Region details only", es: "Solo detalles de la región" },
              { code: "FROM regions r", en: "Left table: regions", es: "Tabla izquierda: regiones" },
              { code: "LEFT SEMI JOIN warehouses w", en: "Keep regions that have warehouses", es: "Conservar regiones que tienen almacenes" },
              { code: "ON r.region_id = w.region_id", en: "Match on region ID", es: "Coincidir por ID de región" }
            ]
          }
        ]
      },
      {
        nombre: "LEFT ANTI JOIN",
        descripcion_en: "Returns rows from the LEFT table that DO NOT have a match in the right table. The opposite of SEMI JOIN.",
        descripcion_es: "Retorna filas de la tabla IZQUIERDA que NO tienen coincidencia en la tabla derecha. Lo opuesto a SEMI JOIN.",
        ejemplos: [
          {
            titulo_en: "Customers who never ordered",
            titulo_es: "Clientes que nunca ordenaron",
            sql: "SELECT *\nFROM customers\nLEFT ANTI JOIN orders\n  ON customers.customer_id = orders.customer_id;",
            lineas: [
              { code: "SELECT *", en: "All columns from LEFT table only", es: "Todas las columnas SOLO de la tabla izquierda" },
              { code: "FROM customers", en: "Left table: all customers", es: "Tabla izquierda: todos los clientes" },
              { code: "LEFT ANTI JOIN orders", en: "Exclude customers found in orders", es: "Excluir clientes encontrados en orders" },
              { code: "ON customers.customer_id = orders.customer_id", en: "Match condition", es: "Condición de coincidencia" }
            ]
          },
          {
            titulo_en: "Products never sold",
            titulo_es: "Productos nunca vendidos",
            sql: "SELECT p.product_id, p.name\nFROM products p\nLEFT ANTI JOIN sales s\n  ON p.product_id = s.product_id;",
            lineas: [
              { code: "SELECT p.product_id, p.name", en: "Product details for unsold items", es: "Detalles de productos no vendidos" },
              { code: "FROM products p", en: "All products as source", es: "Todos los productos como fuente" },
              { code: "LEFT ANTI JOIN sales s", en: "Exclude those that appear in sales", es: "Excluir los que aparecen en ventas" },
              { code: "ON p.product_id = s.product_id", en: "Match key", es: "Clave de coincidencia" }
            ]
          },
          {
            titulo_en: "Employees without manager",
            titulo_es: "Empleados sin gerente",
            sql: "SELECT e.employee_name, e.dept\nFROM employees e\nLEFT ANTI JOIN employees m\n  ON e.manager_id = m.employee_id;",
            lineas: [
              { code: "SELECT e.employee_name, e.dept", en: "Names of employees without managers", es: "Nombres de empleados sin gerente" },
              { code: "FROM employees e", en: "All employees", es: "Todos los empleados" },
              { code: "LEFT ANTI JOIN employees m", en: "Self-join: exclude those whose manager exists", es: "Self-join: excluir aquellos cuyo gerente existe" },
              { code: "ON e.manager_id = m.employee_id", en: "Manager lookup", es: "Búsqueda de gerente" }
            ]
          },
          {
            titulo_en: "Inactive subscribers",
            titulo_es: "Suscriptores inactivos",
            sql: "SELECT s.subscriber_id, s.email\nFROM subscribers s\nLEFT ANTI JOIN activity_log a\n  ON s.subscriber_id = a.user_id\n  AND a.activity_date >= CURRENT_DATE() - INTERVAL 90 DAYS;",
            lineas: [
              { code: "SELECT s.subscriber_id, s.email", en: "Subscriber details", es: "Detalles del suscriptor" },
              { code: "FROM subscribers s", en: "All subscribers", es: "Todos los suscriptores" },
              { code: "LEFT ANTI JOIN activity_log a", en: "Exclude those with recent activity", es: "Excluir los que tienen actividad reciente" },
              { code: "ON s.subscriber_id = a.user_id", en: "Match by ID", es: "Coincidir por ID" },
              { code: "AND a.activity_date >= CURRENT_DATE() - INTERVAL 90 DAYS", en: "Only last 90 days count as active", es: "Solo los últimos 90 días cuentan como activo" }
            ]
          },
          {
            titulo_en: "New files not yet loaded",
            titulo_es: "Archivos nuevos sin cargar",
            sql: "SELECT f.file_path, f.file_size\nFROM staging_files f\nLEFT ANTI JOIN loaded_files l\n  ON f.file_path = l.file_path;",
            lineas: [
              { code: "SELECT f.file_path, f.file_size", en: "Details of unloaded files", es: "Detalles de archivos sin cargar" },
              { code: "FROM staging_files f", en: "All files in staging", es: "Todos los archivos en staging" },
              { code: "LEFT ANTI JOIN loaded_files l", en: "Exclude already loaded", es: "Excluir los ya cargados" },
              { code: "ON f.file_path = l.file_path", en: "Match by file path", es: "Coincidir por ruta de archivo" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Window Functions",
    icon: "M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z",
    comandos: [
      {
        nombre: "PERCENT_RANK()",
        descripcion_en: "Calculates the relative rank of a row (0 to 1) within a partition. Formula: (rank - 1) / (total_rows - 1).",
        descripcion_es: "Calcula el rango relativo de una fila (0 a 1) dentro de una partición. Fórmula: (rango - 1) / (filas_totales - 1).",
        ejemplos: [
          {
            titulo_en: "Rank products by sales within region",
            titulo_es: "Clasificar productos por ventas dentro de región",
            sql: "SELECT\n  region,\n  product,\n  PERCENT_RANK() OVER (\n    PARTITION BY region\n    ORDER BY sales DESC\n  ) AS pct_rank\nFROM sales_table;",
            lineas: [
              { code: "SELECT region, product", en: "Columns to display", es: "Columnas a mostrar" },
              { code: "PERCENT_RANK() OVER (", en: "Window function: relative rank 0-1", es: "Función ventana: rango relativo 0-1" },
              { code: "PARTITION BY region", en: "Calculate rank separately per region", es: "Calcular rango por separado por región" },
              { code: "ORDER BY sales DESC", en: "Highest sales = rank 0 (top)", es: "Mayores ventas = rango 0 (arriba)" },
              { code: ") AS pct_rank", en: "Alias for the calculated column", es: "Alias para la columna calculada" }
            ]
          },
          {
            titulo_en: "Employee salary percentile",
            titulo_es: "Percentil de salario de empleado",
            sql: "SELECT\n  employee_name,\n  department,\n  salary,\n  PERCENT_RANK() OVER (\n    PARTITION BY department\n    ORDER BY salary\n  ) AS salary_percentile\nFROM employees;",
            lineas: [
              { code: "SELECT employee_name, department, salary", en: "Employee info with salary", es: "Info del empleado con salario" },
              { code: "PERCENT_RANK() OVER (", en: "Relative position within department", es: "Posición relativa dentro del departamento" },
              { code: "PARTITION BY department", en: "Each department is independent", es: "Cada departamento es independiente" },
              { code: "ORDER BY salary", en: "Lowest salary = 0, highest = 1", es: "Menor salario = 0, mayor = 1" },
              { code: ") AS salary_percentile", en: "Result column name", es: "Nombre de columna resultado" }
            ]
          },
          {
            titulo_en: "Student score ranking",
            titulo_es: "Ranking de notas de estudiantes",
            sql: "SELECT\n  student_name,\n  course,\n  score,\n  PERCENT_RANK() OVER (\n    ORDER BY score DESC\n  ) AS global_percentile\nFROM exam_results;",
            lineas: [
              { code: "SELECT student_name, course, score", en: "Student details", es: "Detalles del estudiante" },
              { code: "PERCENT_RANK() OVER (", en: "Global percentile (no partition)", es: "Percentil global (sin partición)" },
              { code: "ORDER BY score DESC", en: "Highest score = top percentile", es: "Nota más alta = percentil más alto" },
              { code: ") AS global_percentile", en: "Single ranking across all students", es: "Ranking único entre todos los estudiantes" }
            ]
          },
          {
            titulo_en: "Revenue rank by quarter",
            titulo_es: "Rank de ingresos por trimestre",
            sql: "SELECT\n  quarter,\n  product_line,\n  revenue,\n  PERCENT_RANK() OVER (\n    PARTITION BY quarter\n    ORDER BY revenue DESC\n  ) AS rev_pct\nFROM quarterly_sales;",
            lineas: [
              { code: "PARTITION BY quarter", en: "Independent ranking per quarter", es: "Ranking independiente por trimestre" },
              { code: "ORDER BY revenue DESC", en: "Top revenue = 0.0", es: "Mayor ingreso = 0.0" }
            ]
          },
          {
            titulo_en: "Page load time percentile",
            titulo_es: "Percentil de tiempo de carga",
            sql: "SELECT\n  page_url,\n  load_time_ms,\n  PERCENT_RANK() OVER (\n    ORDER BY load_time_ms\n  ) AS speed_percentile\nFROM web_metrics;",
            lineas: [
              { code: "ORDER BY load_time_ms", en: "Fastest pages = 0.0, slowest = 1.0", es: "Páginas más rápidas = 0.0, más lentas = 1.0" }
            ]
          }
        ]
      },
      {
        nombre: "ROW_NUMBER()",
        descripcion_en: "Assigns a unique sequential integer to each row within a partition. No ties — each row gets a different number.",
        descripcion_es: "Asigna un entero secuencial único a cada fila dentro de una partición. Sin empates — cada fila recibe un número diferente.",
        ejemplos: [
          {
            titulo_en: "Latest record per customer (dedup)",
            titulo_es: "Registro más reciente por cliente (dedup)",
            sql: "SELECT * FROM (\n  SELECT *,\n    ROW_NUMBER() OVER (\n      PARTITION BY customer_id\n      ORDER BY updated_at DESC\n    ) AS rn\n  FROM customers\n)\nWHERE rn = 1;",
            lineas: [
              { code: "SELECT * FROM (", en: "Outer query filters the numbered rows", es: "Query externa filtra las filas numeradas" },
              { code: "ROW_NUMBER() OVER (", en: "Assign sequential number per group", es: "Asignar número secuencial por grupo" },
              { code: "PARTITION BY customer_id", en: "Restart numbering for each customer", es: "Reiniciar numeración para cada cliente" },
              { code: "ORDER BY updated_at DESC", en: "Most recent gets row number 1", es: "El más reciente obtiene número 1" },
              { code: ") AS rn", en: "Column alias for the row number", es: "Alias de columna para el número de fila" },
              { code: "WHERE rn = 1", en: "Keep only the latest row per customer", es: "Conservar solo la fila más reciente por cliente" }
            ]
          },
          {
            titulo_en: "Top 3 products per category",
            titulo_es: "Top 3 productos por categoría",
            sql: "SELECT * FROM (\n  SELECT\n    category, product_name, sales,\n    ROW_NUMBER() OVER (\n      PARTITION BY category\n      ORDER BY sales DESC\n    ) AS rank\n  FROM products\n)\nWHERE rank <= 3;",
            lineas: [
              { code: "PARTITION BY category", en: "Rank within each category", es: "Clasificar dentro de cada categoría" },
              { code: "ORDER BY sales DESC", en: "Highest sales first", es: "Mayores ventas primero" },
              { code: "WHERE rank <= 3", en: "Keep only top 3 per category", es: "Conservar solo top 3 por categoría" }
            ]
          },
          {
            titulo_en: "Paginate results",
            titulo_es: "Paginar resultados",
            sql: "SELECT * FROM (\n  SELECT *,\n    ROW_NUMBER() OVER (ORDER BY created_at) AS row_num\n  FROM orders\n)\nWHERE row_num BETWEEN 101 AND 200;",
            lineas: [
              { code: "ROW_NUMBER() OVER (ORDER BY created_at)", en: "Global sequential numbering", es: "Numeración secuencial global" },
              { code: "WHERE row_num BETWEEN 101 AND 200", en: "Page 2: rows 101-200", es: "Página 2: filas 101-200" }
            ]
          },
          {
            titulo_en: "First login per user",
            titulo_es: "Primer login por usuario",
            sql: "SELECT user_id, login_date, device FROM (\n  SELECT *,\n    ROW_NUMBER() OVER (\n      PARTITION BY user_id\n      ORDER BY login_date ASC\n    ) AS rn\n  FROM logins\n)\nWHERE rn = 1;",
            lineas: [
              { code: "ORDER BY login_date ASC", en: "Earliest login gets rn = 1", es: "Login más antiguo obtiene rn = 1" },
              { code: "WHERE rn = 1", en: "First ever login per user", es: "Primer login de cada usuario" }
            ]
          },
          {
            titulo_en: "Remove exact duplicates",
            titulo_es: "Eliminar duplicados exactos",
            sql: "SELECT * FROM (\n  SELECT *,\n    ROW_NUMBER() OVER (\n      PARTITION BY col1, col2, col3\n      ORDER BY col1\n    ) AS dup_num\n  FROM raw_data\n)\nWHERE dup_num = 1;",
            lineas: [
              { code: "PARTITION BY col1, col2, col3", en: "Group by ALL columns to find exact duplicates", es: "Agrupar por TODAS las columnas para encontrar duplicados exactos" },
              { code: "WHERE dup_num = 1", en: "Keep first occurrence only", es: "Conservar solo la primera ocurrencia" }
            ]
          }
        ]
      },
      {
        nombre: "QUALIFY",
        descripcion_en: "Filters rows AFTER window functions are calculated. Eliminates the need for subqueries. Databricks-specific clause.",
        descripcion_es: "Filtra filas DESPUÉS de que se calculan las funciones ventana. Elimina la necesidad de subconsultas. Cláusula específica de Databricks.",
        ejemplos: [
          {
            titulo_en: "Latest record per ID (cleaner dedup)",
            titulo_es: "Registro más reciente por ID (dedup más limpio)",
            sql: "SELECT *\nFROM customers\nQUALIFY ROW_NUMBER() OVER (\n  PARTITION BY customer_id\n  ORDER BY updated_at DESC\n) = 1;",
            lineas: [
              { code: "SELECT *", en: "All columns, no subquery needed", es: "Todas las columnas, sin subconsulta" },
              { code: "FROM customers", en: "Direct from source table", es: "Directo de la tabla fuente" },
              { code: "QUALIFY ROW_NUMBER() OVER (", en: "Filter based on window function result", es: "Filtrar basado en resultado de función ventana" },
              { code: "PARTITION BY customer_id", en: "Group by customer", es: "Agrupar por cliente" },
              { code: "ORDER BY updated_at DESC", en: "Most recent first", es: "Más reciente primero" },
              { code: ") = 1", en: "Keep only row #1 per group", es: "Conservar solo fila #1 por grupo" }
            ]
          },
          {
            titulo_en: "Top earner per department",
            titulo_es: "Mayor salario por departamento",
            sql: "SELECT employee_name, department, salary\nFROM employees\nQUALIFY RANK() OVER (\n  PARTITION BY department\n  ORDER BY salary DESC\n) = 1;",
            lineas: [
              { code: "QUALIFY RANK() OVER (", en: "RANK allows ties (vs ROW_NUMBER)", es: "RANK permite empates (vs ROW_NUMBER)" },
              { code: ") = 1", en: "Only the highest salary per dept", es: "Solo el salario más alto por depto" }
            ]
          },
          {
            titulo_en: "Most recent order per product",
            titulo_es: "Pedido más reciente por producto",
            sql: "SELECT product_id, order_date, quantity\nFROM orders\nQUALIFY ROW_NUMBER() OVER (\n  PARTITION BY product_id\n  ORDER BY order_date DESC\n) = 1;",
            lineas: [
              { code: "PARTITION BY product_id", en: "One result per product", es: "Un resultado por producto" },
              { code: "ORDER BY order_date DESC", en: "Latest order first", es: "Pedido más reciente primero" }
            ]
          },
          {
            titulo_en: "Keep top 2 scores per student",
            titulo_es: "Conservar top 2 notas por estudiante",
            sql: "SELECT student_id, subject, score\nFROM exam_results\nQUALIFY ROW_NUMBER() OVER (\n  PARTITION BY student_id\n  ORDER BY score DESC\n) <= 2;",
            lineas: [
              { code: ") <= 2", en: "Keep top 2 rows instead of just 1", es: "Conservar top 2 filas en vez de solo 1" }
            ]
          },
          {
            titulo_en: "First transaction per account",
            titulo_es: "Primera transacción por cuenta",
            sql: "SELECT account_id, txn_date, amount\nFROM transactions\nQUALIFY ROW_NUMBER() OVER (\n  PARTITION BY account_id\n  ORDER BY txn_date ASC\n) = 1;",
            lineas: [
              { code: "ORDER BY txn_date ASC", en: "Earliest transaction first", es: "Transacción más antigua primero" },
              { code: ") = 1", en: "Only the very first transaction", es: "Solo la primera transacción" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Array & Nested Data",
    icon: "M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z",
    comandos: [
      {
        nombre: "EXPLODE()",
        descripcion_en: "Transforms an array column into multiple rows — one row per element. Duplicates all other columns for each array element.",
        descripcion_es: "Transforma una columna de array en múltiples filas — una fila por elemento. Duplica todas las demás columnas para cada elemento.",
        ejemplos: [
          {
            titulo_en: "Expand product array from transactions",
            titulo_es: "Expandir array de productos de transacciones",
            sql: "SELECT\n  order_id,\n  customer_id,\n  explode(products) AS product\nFROM transactions;",
            lineas: [
              { code: "SELECT order_id, customer_id", en: "Scalar columns repeated per array element", es: "Columnas escalares repetidas por elemento del array" },
              { code: "explode(products) AS product", en: "Each array element becomes its own row", es: "Cada elemento del array se convierte en su propia fila" },
              { code: "FROM transactions", en: "Source table with array column", es: "Tabla fuente con columna de array" }
            ]
          },
          {
            titulo_en: "Explode tags for analysis",
            titulo_es: "Explotar tags para análisis",
            sql: "SELECT\n  article_id,\n  explode(tags) AS tag\nFROM articles;",
            lineas: [
              { code: "explode(tags) AS tag", en: "Array of tags becomes individual rows", es: "Array de tags se convierte en filas individuales" }
            ]
          },
          {
            titulo_en: "Count items per category from arrays",
            titulo_es: "Contar items por categoría desde arrays",
            sql: "SELECT\n  tag,\n  COUNT(*) AS tag_count\nFROM (\n  SELECT explode(tags) AS tag\n  FROM articles\n)\nGROUP BY tag\nORDER BY tag_count DESC;",
            lineas: [
              { code: "SELECT explode(tags) AS tag", en: "Inner query: flatten the arrays", es: "Query interna: aplanar los arrays" },
              { code: "GROUP BY tag", en: "Aggregate the exploded values", es: "Agregar los valores explotados" },
              { code: "ORDER BY tag_count DESC", en: "Most common tag first", es: "Tag más común primero" }
            ]
          },
          {
            titulo_en: "Explode map column (key-value)",
            titulo_es: "Explotar columna de mapa (clave-valor)",
            sql: "SELECT\n  user_id,\n  explode(preferences) AS (pref_key, pref_value)\nFROM user_settings;",
            lineas: [
              { code: "explode(preferences) AS (pref_key, pref_value)", en: "Map explode produces TWO columns: key and value", es: "Explotar mapa produce DOS columnas: clave y valor" }
            ]
          },
          {
            titulo_en: "Explode with struct array",
            titulo_es: "Explotar con array de structs",
            sql: "SELECT\n  order_id,\n  item.product_name,\n  item.quantity,\n  item.price\nFROM orders\nLATERAL VIEW explode(items) AS item;",
            lineas: [
              { code: "LATERAL VIEW explode(items) AS item", en: "Alternative syntax: LATERAL VIEW + explode", es: "Sintaxis alternativa: LATERAL VIEW + explode" },
              { code: "item.product_name", en: "Access struct fields from exploded element", es: "Acceder a campos del struct del elemento explotado" }
            ]
          }
        ]
      },
      {
        nombre: "FILTER() / TRANSFORM()",
        descripcion_en: "Higher-order functions that process arrays WITHOUT exploding them. FILTER keeps matching elements. TRANSFORM applies an expression to each element.",
        descripcion_es: "Funciones de orden superior que procesan arrays SIN explotarlos. FILTER conserva elementos que coinciden. TRANSFORM aplica una expresión a cada elemento.",
        ejemplos: [
          {
            titulo_en: "Filter array to keep expensive items",
            titulo_es: "Filtrar array para conservar items costosos",
            sql: "SELECT\n  order_id,\n  FILTER(items, x -> x.price > 100) AS expensive_items\nFROM orders;",
            lineas: [
              { code: "FILTER(items, x -> x.price > 100)", en: "Keep only elements where price > 100", es: "Conservar solo elementos donde precio > 100" },
              { code: "AS expensive_items", en: "Result is still an array (not exploded)", es: "El resultado sigue siendo un array (no explotado)" }
            ]
          },
          {
            titulo_en: "Transform prices to include tax",
            titulo_es: "Transformar precios para incluir impuesto",
            sql: "SELECT\n  order_id,\n  TRANSFORM(prices, p -> p * 1.15) AS prices_with_tax\nFROM orders;",
            lineas: [
              { code: "TRANSFORM(prices, p -> p * 1.15)", en: "Multiply each element by 1.15 (15% tax)", es: "Multiplicar cada elemento por 1.15 (15% impuesto)" },
              { code: "AS prices_with_tax", en: "Returns modified array, same length", es: "Retorna array modificado, misma longitud" }
            ]
          },
          {
            titulo_en: "Filter and count",
            titulo_es: "Filtrar y contar",
            sql: "SELECT\n  order_id,\n  SIZE(FILTER(items, x -> x.category = 'Electronics')) AS electronics_count\nFROM orders;",
            lineas: [
              { code: "SIZE(FILTER(...))", en: "COUNT elements matching condition without EXPLODE", es: "CONTAR elementos que cumplen condición sin EXPLODE" }
            ]
          },
          {
            titulo_en: "Transform strings to uppercase",
            titulo_es: "Transformar strings a mayúsculas",
            sql: "SELECT\n  user_id,\n  TRANSFORM(tags, t -> UPPER(t)) AS upper_tags\nFROM user_profiles;",
            lineas: [
              { code: "TRANSFORM(tags, t -> UPPER(t))", en: "Apply UPPER() to each array element", es: "Aplicar UPPER() a cada elemento del array" }
            ]
          },
          {
            titulo_en: "Combine FILTER + TRANSFORM",
            titulo_es: "Combinar FILTER + TRANSFORM",
            sql: "SELECT\n  order_id,\n  TRANSFORM(\n    FILTER(items, x -> x.qty > 0),\n    x -> x.price * x.qty\n  ) AS line_totals\nFROM orders;",
            lineas: [
              { code: "FILTER(items, x -> x.qty > 0)", en: "Step 1: Remove zero-quantity items", es: "Paso 1: Remover items con cantidad cero" },
              { code: "x -> x.price * x.qty", en: "Step 2: Calculate line total for each", es: "Paso 2: Calcular total de línea para cada uno" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "Data Management",
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    comandos: [
      {
        nombre: "CREATE OR REPLACE VIEW",
        descripcion_en: "Creates a virtual table defined by a query. Does NOT store data. Always reflects the latest data from source tables.",
        descripcion_es: "Crea una tabla virtual definida por una consulta. NO almacena datos. Siempre refleja los datos más recientes de las tablas fuente.",
        ejemplos: [
          {
            titulo_en: "Sales by employee view",
            titulo_es: "Vista de ventas por empleado",
            sql: "CREATE OR REPLACE VIEW sales_by_employee AS\n  SELECT\n    employees.employee_name AS sales_person,\n    sales.sales\n  FROM sales\n  JOIN employees\n    ON sales.employee_id = employees.employee_id;",
            lineas: [
              { code: "CREATE OR REPLACE VIEW sales_by_employee AS", en: "Create/update virtual table — no data stored", es: "Crear/actualizar tabla virtual — no almacena datos" },
              { code: "SELECT employees.employee_name AS sales_person", en: "Rename column in the view", es: "Renombrar columna en la vista" },
              { code: "JOIN employees ON ...", en: "View query can include JOINs", es: "La consulta de la vista puede incluir JOINs" }
            ]
          },
          {
            titulo_en: "Secure view with row filter",
            titulo_es: "Vista segura con filtro de fila",
            sql: "CREATE OR REPLACE VIEW my_region_data AS\n  SELECT *\n  FROM sales_data\n  WHERE region = current_user();",
            lineas: [
              { code: "WHERE region = current_user()", en: "Dynamic filter: each user sees only their data", es: "Filtro dinámico: cada usuario ve solo sus datos" }
            ]
          },
          {
            titulo_en: "Aggregation view for dashboard",
            titulo_es: "Vista de agregación para dashboard",
            sql: "CREATE OR REPLACE VIEW monthly_summary AS\n  SELECT\n    DATE_TRUNC('month', order_date) AS month,\n    SUM(amount) AS total_revenue,\n    COUNT(*) AS order_count\n  FROM orders\n  GROUP BY 1;",
            lineas: [
              { code: "DATE_TRUNC('month', order_date)", en: "Truncate date to month level", es: "Truncar fecha a nivel mensual" },
              { code: "GROUP BY 1", en: "Group by first SELECT column", es: "Agrupar por primera columna del SELECT" }
            ]
          },
          {
            titulo_en: "View with UNION",
            titulo_es: "Vista con UNION",
            sql: "CREATE OR REPLACE VIEW all_customers AS\n  SELECT customer_id, name, 'US' AS country FROM us_customers\n  UNION ALL\n  SELECT customer_id, name, 'EU' AS country FROM eu_customers;",
            lineas: [
              { code: "UNION ALL", en: "Combine both tables keeping all rows", es: "Combinar ambas tablas conservando todas las filas" }
            ]
          },
          {
            titulo_en: "Deduplicated view with QUALIFY",
            titulo_es: "Vista deduplicada con QUALIFY",
            sql: "CREATE OR REPLACE VIEW latest_customers AS\n  SELECT *\n  FROM raw_customers\n  QUALIFY ROW_NUMBER() OVER (\n    PARTITION BY customer_id\n    ORDER BY updated_at DESC\n  ) = 1;",
            lineas: [
              { code: "QUALIFY ROW_NUMBER() OVER (...) = 1", en: "Built-in dedup inside the view definition", es: "Dedup integrado dentro de la definición de la vista" }
            ]
          }
        ]
      },
      {
        nombre: "DESCRIBE HISTORY / TIME TRAVEL",
        descripcion_en: "View the version history of a Delta table and query past versions of data. Essential for auditing and recovery.",
        descripcion_es: "Ver el historial de versiones de una tabla Delta y consultar versiones pasadas de datos. Esencial para auditoría y recuperación.",
        ejemplos: [
          {
            titulo_en: "View table history",
            titulo_es: "Ver historial de tabla",
            sql: "DESCRIBE HISTORY my_table;",
            lineas: [
              { code: "DESCRIBE HISTORY my_table", en: "Shows all versions, operations, timestamps, and users", es: "Muestra todas las versiones, operaciones, timestamps y usuarios" }
            ]
          },
          {
            titulo_en: "Query a specific version",
            titulo_es: "Consultar una versión específica",
            sql: "SELECT * FROM my_table VERSION AS OF 5;",
            lineas: [
              { code: "VERSION AS OF 5", en: "Read data as it was at version 5", es: "Leer datos como estaban en la versión 5" }
            ]
          },
          {
            titulo_en: "Query by timestamp",
            titulo_es: "Consultar por timestamp",
            sql: "SELECT * FROM my_table\nTIMESTAMP AS OF '2024-01-15T10:00:00';",
            lineas: [
              { code: "TIMESTAMP AS OF '2024-01-15T10:00:00'", en: "Read data as of specific date/time", es: "Leer datos a partir de fecha/hora específica" }
            ]
          },
          {
            titulo_en: "Restore to previous version",
            titulo_es: "Restaurar a versión anterior",
            sql: "RESTORE TABLE my_table TO VERSION AS OF 3;",
            lineas: [
              { code: "RESTORE TABLE my_table TO VERSION AS OF 3", en: "Roll back table to version 3 (creates new version)", es: "Revertir tabla a versión 3 (crea nueva versión)" }
            ]
          },
          {
            titulo_en: "Compare versions (diff)",
            titulo_es: "Comparar versiones (diff)",
            sql: "SELECT * FROM my_table VERSION AS OF 5\nEXCEPT\nSELECT * FROM my_table VERSION AS OF 4;",
            lineas: [
              { code: "EXCEPT", en: "Returns rows in v5 that are NOT in v4 (new/changed)", es: "Retorna filas en v5 que NO están en v4 (nuevas/cambiadas)" }
            ]
          }
        ]
      },
      {
        nombre: "CTAS (CREATE TABLE AS SELECT)",
        descripcion_en: "Creates a new table and populates it with the result of a SELECT query. Stores physical data (unlike a VIEW).",
        descripcion_es: "Crea una nueva tabla y la llena con el resultado de una consulta SELECT. Almacena datos físicos (a diferencia de una VIEW).",
        ejemplos: [
          {
            titulo_en: "Create deduplicated table",
            titulo_es: "Crear tabla deduplicada",
            sql: "CREATE OR REPLACE TABLE clean_customers AS\n  SELECT DISTINCT *\n  FROM raw_customers;",
            lineas: [
              { code: "CREATE OR REPLACE TABLE clean_customers AS", en: "Create physical table with query results", es: "Crear tabla física con resultados de consulta" },
              { code: "SELECT DISTINCT *", en: "Remove exact duplicates", es: "Eliminar duplicados exactos" }
            ]
          },
          {
            titulo_en: "Gold table from Silver",
            titulo_es: "Tabla Gold desde Silver",
            sql: "CREATE TABLE gold.monthly_revenue AS\n  SELECT\n    DATE_TRUNC('month', order_date) AS month,\n    SUM(total) AS revenue\n  FROM silver.orders\n  GROUP BY 1;",
            lineas: [
              { code: "CREATE TABLE gold.monthly_revenue AS", en: "New table in gold schema", es: "Nueva tabla en esquema gold" },
              { code: "GROUP BY 1", en: "Aggregate by month", es: "Agregar por mes" }
            ]
          },
          {
            titulo_en: "Filtered subset table",
            titulo_es: "Tabla de subconjunto filtrado",
            sql: "CREATE TABLE us_customers AS\n  SELECT * FROM customers\n  WHERE country = 'US';",
            lineas: [
              { code: "WHERE country = 'US'", en: "Only US customers in new table", es: "Solo clientes de US en nueva tabla" }
            ]
          },
          {
            titulo_en: "Join result as new table",
            titulo_es: "Resultado de join como nueva tabla",
            sql: "CREATE TABLE enriched_orders AS\n  SELECT o.*, c.segment, c.region\n  FROM orders o\n  JOIN customers c ON o.customer_id = c.customer_id;",
            lineas: [
              { code: "SELECT o.*, c.segment, c.region", en: "All order columns + customer enrichment", es: "Todas las columnas de order + enriquecimiento de cliente" }
            ]
          },
          {
            titulo_en: "CTAS with partitioning",
            titulo_es: "CTAS con particionamiento",
            sql: "CREATE TABLE partitioned_sales\n  PARTITIONED BY (region)\n  AS SELECT * FROM raw_sales;",
            lineas: [
              { code: "PARTITIONED BY (region)", en: "Physical data organization by region", es: "Organización física de datos por región" }
            ]
          }
        ]
      }
    ]
  },
  {
    category: "CTE & Subqueries",
    icon: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
    comandos: [
      {
        nombre: "WITH (CTE)",
        descripcion_en: "Common Table Expression — a named temporary result set that exists only for the duration of the query. Improves readability.",
        descripcion_es: "Common Table Expression — un conjunto de resultados temporal con nombre que existe solo durante la consulta. Mejora la legibilidad.",
        ejemplos: [
          {
            titulo_en: "Step-by-step aggregation",
            titulo_es: "Agregación paso a paso",
            sql: "WITH monthly_sales AS (\n  SELECT\n    DATE_TRUNC('month', sale_date) AS month,\n    SUM(amount) AS total\n  FROM sales\n  GROUP BY 1\n)\nSELECT month, total,\n  LAG(total) OVER (ORDER BY month) AS prev_month\nFROM monthly_sales;",
            lineas: [
              { code: "WITH monthly_sales AS (", en: "Define named temporary result set", es: "Definir conjunto de resultados temporal con nombre" },
              { code: ")", en: "End of CTE definition", es: "Fin de definición del CTE" },
              { code: "LAG(total) OVER (ORDER BY month)", en: "Use CTE result with window function", es: "Usar resultado del CTE con función ventana" }
            ]
          },
          {
            titulo_en: "Multiple CTEs chained",
            titulo_es: "Múltiples CTEs encadenados",
            sql: "WITH orders_enriched AS (\n  SELECT o.*, c.region\n  FROM orders o JOIN customers c\n    ON o.customer_id = c.customer_id\n),\nregion_totals AS (\n  SELECT region, SUM(amount) AS total\n  FROM orders_enriched\n  GROUP BY region\n)\nSELECT * FROM region_totals\nORDER BY total DESC;",
            lineas: [
              { code: "WITH orders_enriched AS (", en: "First CTE: enrich orders with customer data", es: "Primer CTE: enriquecer orders con datos de cliente" },
              { code: "), region_totals AS (", en: "Second CTE uses the first one", es: "Segundo CTE usa el primero" },
              { code: "SELECT * FROM region_totals", en: "Final query uses last CTE", es: "Query final usa el último CTE" }
            ]
          },
          {
            titulo_en: "CTE for dedup then filter",
            titulo_es: "CTE para dedup y luego filtrar",
            sql: "WITH deduped AS (\n  SELECT *, ROW_NUMBER() OVER (\n    PARTITION BY id ORDER BY ts DESC\n  ) AS rn\n  FROM raw_data\n)\nSELECT * FROM deduped\nWHERE rn = 1 AND status = 'active';",
            lineas: [
              { code: "WITH deduped AS (", en: "CTE handles deduplication logic", es: "CTE maneja la lógica de deduplicación" },
              { code: "WHERE rn = 1 AND status = 'active'", en: "Main query adds business filter", es: "Query principal agrega filtro de negocio" }
            ]
          },
          {
            titulo_en: "CTE with UNION",
            titulo_es: "CTE con UNION",
            sql: "WITH all_events AS (\n  SELECT user_id, 'login' AS event FROM logins\n  UNION ALL\n  SELECT user_id, 'purchase' AS event FROM purchases\n)\nSELECT user_id, COUNT(*) AS total_events\nFROM all_events\nGROUP BY user_id;",
            lineas: [
              { code: "UNION ALL", en: "Combine different event sources", es: "Combinar diferentes fuentes de eventos" }
            ]
          },
          {
            titulo_en: "Recursive-style analysis",
            titulo_es: "Análisis estilo recursivo",
            sql: "WITH daily_metrics AS (\n  SELECT sale_date, SUM(amount) AS daily_total\n  FROM sales GROUP BY 1\n)\nSELECT sale_date, daily_total,\n  AVG(daily_total) OVER (\n    ORDER BY sale_date\n    ROWS BETWEEN 6 PRECEDING AND CURRENT ROW\n  ) AS rolling_7day_avg\nFROM daily_metrics;",
            lineas: [
              { code: "ROWS BETWEEN 6 PRECEDING AND CURRENT ROW", en: "7-day rolling window (current + 6 prior)", es: "Ventana rodante de 7 días (actual + 6 anteriores)" }
            ]
          }
        ]
      }
    ]
  }
];
