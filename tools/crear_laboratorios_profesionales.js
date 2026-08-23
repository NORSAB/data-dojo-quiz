const fs = require('fs');
const path = require('path');

const ROOT = path.join(
  'D:', '2026', 'Simulador de Preguntas', 'output',
  'clases_5_10_separadas', 'Laboratorios Profesionales 35 min'
);

function lines(text) {
  return text.trim().split('\n').map((line) => `${line}\n`);
}

function md(text) {
  return { cell_type: 'markdown', metadata: {}, source: lines(text) };
}

function code(text, language = 'sql') {
  const prefix = language === 'sql' ? '%sql\n' : language === 'python' ? '%python\n' : '';
  return {
    cell_type: 'code', execution_count: null, metadata: {}, outputs: [],
    source: lines(prefix + text)
  };
}

function cover(n, title, domain, prerequisite, terms, objectives) {
  return md(`# Laboratorio ${String(n).padStart(2, '0')}: ${title}

**Duración práctica:** 35 minutos  
**Entorno:** Databricks Free Edition, cómputo serverless  
**Dominio de certificación:** ${domain}  
**Prerrequisito:** ${prerequisite}

## Resultado de aprendizaje

${objectives.map((x) => `- ${x}`).join('\n')}

## Términos que deben dominarse

${terms.map((x) => `- ${x}`).join('\n')}

> Este laboratorio continúa sobre los objetos creados anteriormente. No elimine
> catálogos, esquemas o tablas al finalizar.`);
}

function route(items) {
  return md(`## Ruta de 35 minutos

${items.map(([m, t]) => `- **Minutos ${m}:** ${t}`).join('\n')}

**Regla de corte:** cuando falten cinco minutos, detenga la ejecución y pase a
la pregunta de certificación. Las extensiones quedan para práctica autónoma.`);
}

function setupSql() {
  return code(`USE CATALOG workspace;
-- Los esquemas se crean en el Laboratorio 1.
SELECT current_catalog() AS catalogo_actual, current_schema() AS esquema_actual;`);
}

function exam(question, answer, rationale) {
  return md(`## Cierre de certificación

**Question (English)**

${question}

**Correct answer**

${answer}

**Justificación**

${rationale}`);
}

function next(n, title, checkpoint) {
  return md(`## Punto de control

${checkpoint}

**Siguiente:** Laboratorio ${String(n).padStart(2, '0')} - ${title}.`);
}

const labs = [];

labs.push({
  n: 1,
  title: 'Preparación del entorno e ingesta con Volumes y read_files',
  domain: 'Plataforma Databricks e Importación de datos',
  cells: [
    cover(1, 'Preparación del entorno e ingesta con Volumes y read_files',
      'Plataforma Databricks e Importación de datos', 'Ninguno',
      ['control plane y data plane', 'Unity Catalog', 'catálogo, esquema y Volume',
       'UI Upload', 'read_files()', 'tabla administrada', 'TEMP VIEW de sesión'],
      ['Crear la estructura persistente del curso.',
       'Cargar archivos CSV desde un Volume.',
       'Distinguir exploración de archivos y persistencia en una tabla Delta.']),
    route([['0-7', 'revisar arquitectura, nombres y rutas'], ['7-15', 'crear esquemas y Volume'],
      ['15-25', 'subir los CSV o verificar los archivos precargados'],
      ['25-35', 'usar read_files y crear las tablas Bronze']]),
    md(`## Preparación de archivos

En **Catalog Explorer**, abra el volumen
\`workspace.curso_bronze.datos_curso\`. Cree las carpetas \`clientes\`,
\`clientes_raw\`, \`pedidos\`, \`items_pedido\`, \`productos\`, \`pagos\` y
\`devoluciones\`. Suba los tres lotes de cada entidad desde el paquete
\`datos_csv_complementarios_v1\`.

La carga mediante interfaz es parte de la práctica. El instructor debe mantener
una copia precargada para no depender del tiempo de transferencia.`),
    code(`CREATE SCHEMA IF NOT EXISTS workspace.curso_bronze;
CREATE SCHEMA IF NOT EXISTS workspace.curso_silver;
CREATE SCHEMA IF NOT EXISTS workspace.curso_gold;
CREATE SCHEMA IF NOT EXISTS workspace.curso_seguridad;
CREATE VOLUME IF NOT EXISTS workspace.curso_bronze.datos_curso;

SELECT 'Estructura creada' AS estado;`),
    code(`LIST '/Volumes/workspace/curso_bronze/datos_curso/clientes/';`),
    code(`CREATE OR REPLACE TEMP VIEW vista_clientes_archivo AS
SELECT
  id_cliente,
  nombre_cliente,
  region,
  industria,
  _metadata.file_path AS archivo_origen,
  _metadata.file_modification_time AS fecha_archivo
FROM read_files(
  '/Volumes/workspace/curso_bronze/datos_curso/clientes/*.csv',
  format => 'csv', header => true, inferColumnTypes => true
);

SELECT * FROM vista_clientes_archivo LIMIT 10;`),
    code(`CREATE OR REPLACE TABLE workspace.curso_bronze.clientes AS
SELECT *, current_timestamp() AS fecha_ingesta
FROM vista_clientes_archivo;

SELECT count(*) AS filas, count(DISTINCT archivo_origen) AS archivos
FROM workspace.curso_bronze.clientes;`),
    code(`from pyspark.sql.functions import col, current_timestamp

entities = ["pedidos", "items_pedido", "productos", "pagos", "devoluciones"]
base = "/Volumes/workspace/curso_bronze/datos_curso"

for entity in entities:
    source = f"{base}/{entity}/*.csv"
    table = f"workspace.curso_bronze.{entity}"
    df = (
        spark.read.format("csv")
        .option("header", "true")
        .option("inferSchema", "true")
        .load(source)
        .withColumn("archivo_origen", col("_metadata.file_path"))
        .withColumn("fecha_archivo", col("_metadata.file_modification_time"))
        .withColumn("fecha_ingesta", current_timestamp())
    )
    (df.write.format("delta").mode("overwrite")
       .option("overwriteSchema", "true").saveAsTable(table))

display(spark.sql("SHOW TABLES IN workspace.curso_bronze"))`, 'python'),
    md(`### Extensión precargada

El instructor puede crear las demás tablas Bronze repitiendo el patrón anterior.
No se explica cada carga en vivo. La vista temporal no significa "datos en
memoria": es un objeto de sesión que no persiste como tabla.`),
    exam('An analyst wants to inspect a folder of CSV files before creating a table. Which feature is the best first step?',
      '`read_files()` against a Unity Catalog Volume.',
      'Permite consultar los archivos directamente y validar su esquema antes de decidir cómo persistirlos. UI Upload coloca los archivos; no sustituye la consulta.'),
    next(2, 'Validación básica: conteos, nulos y tipos',
      'Debe existir `workspace.curso_bronze.clientes` y el Volume debe conservar los CSV.')
  ]
});

labs.push({
  n: 2,
  title: 'Validación básica: conteos, nulos y tipos',
  domain: 'Gestión de datos',
  cells: [
    cover(2, 'Validación básica: conteos, nulos y tipos', 'Gestión de datos',
      'Laboratorio 1 completado',
      ['data profiling', 'completitud', 'unicidad', 'validez', 'TRY_CAST',
       'schema inference', 'schema enforcement'],
      ['Medir la calidad sin modificar Bronze.', 'Detectar nulos y valores no convertibles.',
       'Crear métricas reutilizables.']),
    route([['0-5', 'verificar tablas'], ['5-15', 'conteos y nulos'],
      ['15-27', 'tipos y TRY_CAST'], ['27-35', 'registrar métricas y responder']]),
    setupSql(),
    code(`SELECT
  count(*) AS total_filas,
  count(id_cliente) AS ids_no_nulos,
  count(DISTINCT id_cliente) AS ids_distintos,
  sum(CASE WHEN nombre_cliente IS NULL OR trim(nombre_cliente) = '' THEN 1 ELSE 0 END) AS nombres_vacios,
  sum(CASE WHEN region IS NULL OR trim(region) = '' THEN 1 ELSE 0 END) AS regiones_vacias
FROM workspace.curso_bronze.clientes;`),
    code(`CREATE OR REPLACE TEMP VIEW clientes_raw_perfil AS
SELECT *
FROM read_files(
  '/Volumes/workspace/curso_bronze/datos_curso/clientes_raw/*.csv',
  format => 'csv', header => true, inferColumnTypes => false
);

SELECT
  count(*) AS filas,
  sum(CASE WHEN try_cast(id_texto AS BIGINT) IS NULL AND id_texto IS NOT NULL THEN 1 ELSE 0 END) AS ids_invalidos,
  sum(CASE WHEN try_cast(fecha_registro_texto AS DATE) IS NULL AND fecha_registro_texto IS NOT NULL THEN 1 ELSE 0 END) AS fechas_invalidas,
  sum(CASE WHEN try_cast(credito_texto AS DECIMAL(18,2)) IS NULL AND credito_texto IS NOT NULL THEN 1 ELSE 0 END) AS creditos_invalidos
FROM clientes_raw_perfil;`),
    code(`CREATE OR REPLACE TABLE workspace.curso_silver.metricas_calidad AS
SELECT 'clientes' AS entidad, 'duplicados_id' AS regla,
       count(*) - count(DISTINCT id_cliente) AS incidencias,
       current_timestamp() AS fecha_medicion
FROM workspace.curso_bronze.clientes
UNION ALL
SELECT 'clientes', 'region_nula',
       sum(CASE WHEN region IS NULL OR trim(region) = '' THEN 1 ELSE 0 END),
       current_timestamp()
FROM workspace.curso_bronze.clientes;

SELECT * FROM workspace.curso_silver.metricas_calidad;`),
    exam('Which function should an analyst use to convert malformed text to a numeric type without failing the entire query?',
      '`TRY_CAST`.',
      '`TRY_CAST` devuelve NULL cuando la conversión falla y permite contar o aislar los registros problemáticos.'),
    next(3, 'Duplicados, integridad referencial y fan-out',
      'Bronze permanece sin limpiar y `curso_silver.metricas_calidad` contiene el primer perfil.')
  ]
});

labs.push({
  n: 3,
  title: 'Duplicados, integridad referencial y fan-out',
  domain: 'Gestión de datos y SQL',
  cells: [
    cover(3, 'Duplicados, integridad referencial y fan-out', 'Gestión de datos y SQL',
      'Laboratorios 1 y 2',
      ['ROW_NUMBER', 'deduplicación determinista', 'anti join', 'integridad referencial',
       'relación 1:N', 'fan-out', 'preagregación'],
      ['Deduplicar conservando una fila explicable.', 'Detectar registros huérfanos.',
       'Evitar duplicar métricas al unir relaciones 1:N.']),
    route([['0-10', 'deduplicación determinista'], ['10-20', 'anti joins'],
      ['20-30', 'comparar fan-out y preagregación'], ['30-35', 'cierre']]),
    setupSql(),
    code(`WITH ordenados AS (
  SELECT *,
         row_number() OVER (
           PARTITION BY id_cliente
           ORDER BY fecha_archivo DESC, archivo_origen DESC
         ) AS rn
  FROM workspace.curso_bronze.clientes
)
SELECT id_cliente, nombre_cliente, region, industria, archivo_origen
FROM ordenados
WHERE rn = 1
ORDER BY id_cliente;`),
    code(`SELECT p.id_cliente, p.id_pedido
FROM workspace.curso_bronze.pedidos p
LEFT ANTI JOIN workspace.curso_bronze.clientes c
  ON p.id_cliente = c.id_cliente
ORDER BY p.id_pedido;`),
    code(`-- Patrón incorrecto: el monto puede repetirse por cada item.
SELECT sum(p.monto) AS monto_inflado
FROM workspace.curso_bronze.pedidos p
JOIN workspace.curso_bronze.items_pedido i USING (id_pedido);

-- Patrón correcto: agregar al grain de pedido antes de unir.
WITH items_por_pedido AS (
  SELECT id_pedido, sum(cantidad * precio_unitario) AS total_items
  FROM workspace.curso_bronze.items_pedido
  GROUP BY id_pedido
)
SELECT sum(p.monto) AS monto_pedidos,
       sum(i.total_items) AS monto_calculado
FROM workspace.curso_bronze.pedidos p
JOIN items_por_pedido i USING (id_pedido);`),
    exam('A query joins orders to order items and then sums the order amount. The result is too high. What should the analyst do?',
      'Aggregate order items to the order grain before joining.',
      'La preagregación evita repetir el monto del pedido por cada detalle y conserva el grain correcto.'),
    next(4, 'Ingesta incremental con COPY INTO y Auto Loader',
      'El participante debe explicar por qué un `ORDER BY` estable es necesario en la deduplicación.')
  ]
});

labs.push({
  n: 4,
  title: 'Ingesta incremental con COPY INTO y Auto Loader',
  domain: 'Importación de datos',
  cells: [
    cover(4, 'Ingesta incremental con COPY INTO y Auto Loader', 'Importación de datos',
      'Volume y CSV disponibles',
      ['COPY INTO', 'idempotencia', 'Auto Loader', 'cloudFiles', 'schemaLocation',
       'checkpointLocation', 'AvailableNow', 'schema evolution'],
      ['Elegir el método según frecuencia y complejidad.',
       'Probar idempotencia con COPY INTO.', 'Ejecutar Auto Loader con trigger compatible con serverless.']),
    route([['0-8', 'tabla de decisión'], ['8-20', 'COPY INTO y segunda ejecución'],
      ['20-31', 'Auto Loader AvailableNow'], ['31-35', 'comparación final']]),
    setupSql(),
    code(`CREATE OR REPLACE TABLE workspace.curso_bronze.clientes_copy (
  id_cliente BIGINT,
  nombre_cliente STRING,
  region STRING,
  industria STRING
);

COPY INTO workspace.curso_bronze.clientes_copy
FROM '/Volumes/workspace/curso_bronze/datos_curso/clientes/'
FILEFORMAT = CSV
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')
COPY_OPTIONS ('mergeSchema' = 'true');

SELECT count(*) AS filas_primera_ejecucion
FROM workspace.curso_bronze.clientes_copy;`),
    code(`-- Ejecute de nuevo. COPY INTO conserva el historial de archivos cargados.
COPY INTO workspace.curso_bronze.clientes_copy
FROM '/Volumes/workspace/curso_bronze/datos_curso/clientes/'
FILEFORMAT = CSV
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')
COPY_OPTIONS ('mergeSchema' = 'true');

SELECT count(*) AS filas_segunda_ejecucion
FROM workspace.curso_bronze.clientes_copy;`),
    code(`from pyspark.sql.functions import current_timestamp, input_file_name

source = "/Volumes/workspace/curso_bronze/datos_curso/clientes_raw/"
schema_path = "/Volumes/workspace/curso_bronze/datos_curso/_schemas/clientes_raw/"
checkpoint = "/Volumes/workspace/curso_bronze/datos_curso/_checkpoints/clientes_raw/"

query = (
    spark.readStream.format("cloudFiles")
    .option("cloudFiles.format", "csv")
    .option("header", "true")
    .option("cloudFiles.inferColumnTypes", "true")
    .option("cloudFiles.schemaLocation", schema_path)
    .load(source)
    .withColumn("fecha_ingesta", current_timestamp())
    .writeStream.option("checkpointLocation", checkpoint)
    .trigger(availableNow=True)
    .toTable("workspace.curso_bronze.clientes_raw_stream")
)
query.awaitTermination()`, 'python'),
    md(`### Precisión importante

El checkpoint de Structured Streaming sí se utiliza. No debe confundirse con
\`df.checkpoint()\`, que no está soportado en serverless. No dirija COPY INTO y
Auto Loader a la misma tabla usando los mismos archivos.`),
    exam('Files arrive continuously in a cloud folder and schema evolution must be handled incrementally. Which ingestion feature is most appropriate?',
      'Auto Loader with a schema location and checkpoint location.',
      'Auto Loader rastrea archivos y estado incremental. COPY INTO es más simple para lotes controlados que se ejecutan bajo demanda.'),
    next(5, 'Tablas Delta y operaciones CRUD',
      '`clientes_copy` y `clientes_raw_stream` deben ser destinos independientes.')
  ]
});

labs.push({
  n: 5,
  title: 'Tablas Delta y operaciones CRUD',
  domain: 'Gestión de datos',
  cells: [
    cover(5, 'Tablas Delta y operaciones CRUD', 'Gestión de datos', 'Laboratorio 4',
      ['Delta Lake', 'transacción ACID', 'managed table', 'INSERT', 'UPDATE', 'DELETE',
       'DESCRIBE DETAIL', 'DESCRIBE HISTORY'],
      ['Persistir una tabla Silver.', 'Aplicar cambios auditables.', 'Inspeccionar detalle e historia.']),
    route([['0-7', 'crear tabla de trabajo'], ['7-22', 'INSERT, UPDATE y DELETE'],
      ['22-31', 'detalle e historia'], ['31-35', 'cierre']]),
    setupSql(),
    code(`CREATE OR REPLACE TABLE workspace.curso_silver.clientes_trabajo
USING DELTA AS
SELECT * FROM workspace.curso_bronze.clientes_copy;

DESCRIBE DETAIL workspace.curso_silver.clientes_trabajo;`),
    code(`INSERT INTO workspace.curso_silver.clientes_trabajo
VALUES (99991, 'Cliente demostración', 'Centro', 'Educación');

UPDATE workspace.curso_silver.clientes_trabajo
SET region = initcap(trim(region)),
    industria = initcap(trim(industria));

DELETE FROM workspace.curso_silver.clientes_trabajo
WHERE id_cliente IS NULL;

SELECT * FROM workspace.curso_silver.clientes_trabajo
WHERE id_cliente = 99991;`),
    code(`DESCRIBE HISTORY workspace.curso_silver.clientes_trabajo;`),
    exam('Which Delta command displays table-level metadata such as format, location, and number of files?',
      '`DESCRIBE DETAIL`.',
      '`DESCRIBE DETAIL` resume propiedades físicas de una tabla Delta; `DESCRIBE HISTORY` muestra sus operaciones y versiones.'),
    next(6, 'MERGE, historia y Time Travel',
      'La tabla `clientes_trabajo` debe conservar varias operaciones en su historial.')
  ]
});

labs.push({
  n: 6,
  title: 'MERGE, historia y Time Travel',
  domain: 'Gestión de datos',
  cells: [
    cover(6, 'MERGE, historia y Time Travel', 'Gestión de datos', 'Laboratorio 5',
      ['MERGE', 'upsert', 'matched', 'not matched', 'table version', 'Time Travel',
       'RESTORE', 'VACUUM retention'],
      ['Aplicar actualizaciones e inserciones en una sola operación.',
       'Consultar una versión histórica.', 'Relacionar VACUUM con la disponibilidad de versiones.']),
    route([['0-8', 'preparar cambios'], ['8-20', 'ejecutar MERGE'],
      ['20-30', 'consultar historia y versión'], ['30-35', 'cierre']]),
    setupSql(),
    code(`CREATE OR REPLACE TEMP VIEW cambios_clientes AS
SELECT * FROM VALUES
  (99991, 'Cliente demostración actualizado', 'Centro', 'Tecnología'),
  (99992, 'Cliente nuevo por MERGE', 'Norte', 'Servicios')
AS t(id_cliente, nombre_cliente, region, industria);

MERGE INTO workspace.curso_silver.clientes_trabajo AS target
USING cambios_clientes AS source
ON target.id_cliente = source.id_cliente
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;

SELECT * FROM workspace.curso_silver.clientes_trabajo
WHERE id_cliente IN (99991, 99992);`),
    code(`DESCRIBE HISTORY workspace.curso_silver.clientes_trabajo;`),
    md(`### Time Travel

Tome una versión visible en el historial y reemplace \`<version>\` antes de
ejecutar. No restaure todavía la tabla; primero compare el resultado.`),
    code(`-- SELECT *
-- FROM workspace.curso_silver.clientes_trabajo VERSION AS OF <version>
-- WHERE id_cliente IN (99991, 99992);

VACUUM workspace.curso_silver.clientes_trabajo DRY RUN;`),
    exam('After VACUUM removes old data files, what happens to Time Travel for versions that depend on those files?',
      'Those versions can no longer be queried successfully.',
      'El historial lógico puede existir, pero los archivos físicos necesarios ya no están disponibles.'),
    next(7, 'Pipeline Medallion de Bronze a Gold',
      'El participante debe diferenciar historial de operaciones y archivos físicos retenidos.')
  ]
});

labs.push({
  n: 7,
  title: 'Pipeline Medallion de Bronze a Gold',
  domain: 'Gestión y modelado de datos',
  cells: [
    cover(7, 'Pipeline Medallion de Bronze a Gold', 'Gestión y modelado de datos',
      'Tablas Bronze cargadas',
      ['Bronze', 'Silver', 'Gold', 'grain', 'data quality', 'idempotencia',
       'Lakeflow Spark Declarative Pipelines'],
      ['Crear Silver determinista.', 'Construir una métrica Gold al grain correcto.',
       'Validar conteos entre capas.']),
    route([['0-8', 'definir responsabilidades'], ['8-22', 'crear Silver'],
      ['22-31', 'crear Gold y validar'], ['31-35', 'defender decisiones']]),
    setupSql(),
    code(`CREATE OR REPLACE TABLE workspace.curso_silver.clientes AS
WITH ordenados AS (
  SELECT *, row_number() OVER (
    PARTITION BY id_cliente
    ORDER BY fecha_archivo DESC, archivo_origen DESC
  ) AS rn
  FROM workspace.curso_bronze.clientes
)
SELECT id_cliente, trim(nombre_cliente) AS nombre_cliente,
       initcap(trim(region)) AS region,
       initcap(trim(industria)) AS industria
FROM ordenados
WHERE rn = 1 AND id_cliente IS NOT NULL;`),
    code(`CREATE OR REPLACE TABLE workspace.curso_silver.pedidos AS
SELECT * EXCEPT (rn) FROM (
  SELECT *, row_number() OVER (
    PARTITION BY id_pedido ORDER BY fecha_archivo DESC, archivo_origen DESC
  ) AS rn
  FROM workspace.curso_bronze.pedidos
) WHERE rn = 1 AND id_pedido IS NOT NULL;

CREATE OR REPLACE TABLE workspace.curso_silver.items_pedido AS
SELECT * EXCEPT (rn) FROM (
  SELECT *, row_number() OVER (
    PARTITION BY id_item ORDER BY fecha_archivo DESC, archivo_origen DESC
  ) AS rn
  FROM workspace.curso_bronze.items_pedido
) WHERE rn = 1 AND id_item IS NOT NULL;

CREATE OR REPLACE TABLE workspace.curso_silver.productos AS
SELECT * EXCEPT (rn) FROM (
  SELECT *, row_number() OVER (
    PARTITION BY id_producto ORDER BY fecha_archivo DESC, archivo_origen DESC
  ) AS rn
  FROM workspace.curso_bronze.productos
) WHERE rn = 1 AND id_producto IS NOT NULL;`),
    code(`CREATE OR REPLACE TABLE workspace.curso_gold.ventas_por_cliente AS
WITH items_por_pedido AS (
  SELECT id_pedido,
         sum(cantidad * precio_unitario) AS venta_calculada
  FROM workspace.curso_silver.items_pedido
  GROUP BY id_pedido
)
SELECT c.id_cliente, c.nombre_cliente, c.region, c.industria,
       count(DISTINCT p.id_pedido) AS pedidos,
       sum(i.venta_calculada) AS venta_total
FROM workspace.curso_silver.clientes c
JOIN workspace.curso_silver.pedidos p USING (id_cliente)
JOIN items_por_pedido i USING (id_pedido)
GROUP BY ALL;`),
    code(`SELECT 'Bronze clientes' AS control, count(*) AS filas
FROM workspace.curso_bronze.clientes
UNION ALL
SELECT 'Silver clientes', count(*)
FROM workspace.curso_silver.clientes
UNION ALL
SELECT 'Gold clientes con ventas', count(*)
FROM workspace.curso_gold.ventas_por_cliente;`),
    exam('Which Medallion layer should expose business-ready aggregated metrics to dashboards?',
      'The Gold layer.',
      'Gold representa datos modelados para consumo. Bronze preserva la entrada y Silver limpia y conforma.'),
    next(8, 'SQL Warehouse, SQL Editor, joins y set operations',
      '`curso_gold.ventas_por_cliente` debe tener una fila por cliente.')
  ]
});

labs.push({
  n: 8,
  title: 'SQL Warehouse, SQL Editor, joins y set operations',
  domain: 'SQL y SQL Warehouses',
  cells: [
    cover(8, 'SQL Warehouse, SQL Editor, joins y set operations', 'SQL y SQL Warehouses',
      'Laboratorio 7',
      ['serverless SQL Warehouse', 'SQL Editor', 'Genie Code', 'INNER JOIN',
       'LEFT JOIN', 'SEMI JOIN', 'ANTI JOIN', 'UNION', 'UNION ALL'],
      ['Reconocer el compute que ejecuta SQL.', 'Elegir el join por escenario.',
       'Distinguir UNION de UNION ALL.']),
    route([['0-7', 'ubicar Warehouse, Editor y Genie Code'], ['7-24', 'joins'],
      ['24-31', 'set operations'], ['31-35', 'cierre']]),
    setupSql(),
    code(`-- Clientes con pedidos.
SELECT DISTINCT c.id_cliente, c.nombre_cliente
FROM workspace.curso_silver.clientes c
LEFT SEMI JOIN workspace.curso_bronze.pedidos p USING (id_cliente);

-- Clientes sin pedidos.
SELECT c.id_cliente, c.nombre_cliente
FROM workspace.curso_silver.clientes c
LEFT ANTI JOIN workspace.curso_bronze.pedidos p USING (id_cliente);`),
    code(`SELECT id_cliente, 'con_ventas' AS segmento
FROM workspace.curso_gold.ventas_por_cliente
UNION ALL
SELECT id_cliente, 'sin_pedidos' AS segmento
FROM workspace.curso_silver.clientes c
LEFT ANTI JOIN workspace.curso_bronze.pedidos p USING (id_cliente);`),
    md(`### Free Edition

La práctica utiliza el único SQL Warehouse serverless de la cuenta. Classic SQL
Warehouse se estudia como comparación de examen, no se configura. El nombre
actual del asistente de código es **Genie Code**.`),
    exam('Which join returns rows from the left table only when no matching row exists in the right table?',
      'A left anti join.',
      'El anti join expresa directamente la ausencia de coincidencia y evita el patrón más largo de LEFT JOIN más IS NULL.'),
    next(9, 'Agregaciones y funciones de ventana',
      'Guarde una consulta desde SQL Editor y confirme qué Warehouse la ejecutó.')
  ]
});

labs.push({
  n: 9,
  title: 'Agregaciones y funciones de ventana',
  domain: 'SQL y SQL Warehouses',
  cells: [
    cover(9, 'Agregaciones y funciones de ventana', 'SQL y SQL Warehouses',
      'Laboratorio 8',
      ['GROUP BY', 'HAVING', 'logical query order', 'ROW_NUMBER', 'RANK',
       'DENSE_RANK', 'LAG', 'LEAD', 'PARTITION BY', 'window frame'],
      ['Filtrar grupos con HAVING.', 'Crear rankings por región.',
       'Comparar periodos con LAG.']),
    route([['0-10', 'GROUP BY y HAVING'], ['10-24', 'ranking'],
      ['24-31', 'LAG y cambio porcentual'], ['31-35', 'cierre']]),
    setupSql(),
    code(`SELECT region,
       count(*) AS clientes,
       sum(venta_total) AS ventas
FROM workspace.curso_gold.ventas_por_cliente
GROUP BY region
HAVING sum(venta_total) > 0
ORDER BY ventas DESC;`),
    code(`SELECT region, id_cliente, nombre_cliente, venta_total,
       dense_rank() OVER (
         PARTITION BY region ORDER BY venta_total DESC
       ) AS posicion_region
FROM workspace.curso_gold.ventas_por_cliente
QUALIFY posicion_region <= 3
ORDER BY region, posicion_region;`),
    code(`WITH mensual AS (
  SELECT date_trunc('month', fecha_pedido) AS mes,
         sum(monto) AS ventas
  FROM workspace.curso_silver.pedidos
  GROUP BY 1
), comparado AS (
  SELECT *, lag(ventas) OVER (ORDER BY mes) AS ventas_mes_anterior
  FROM mensual
)
SELECT *,
       round(100 * (ventas - ventas_mes_anterior) /
             nullif(ventas_mes_anterior, 0), 2) AS variacion_pct
FROM comparado
ORDER BY mes;`),
    exam('Which clause filters aggregated groups after GROUP BY?',
      '`HAVING`.',
      '`WHERE` filtra filas antes de la agregación; `HAVING` evalúa resultados agregados por grupo.'),
    next(10, 'Tablas, vistas, CTAS y materialized views',
      'El participante debe explicar la diferencia entre RANK y DENSE_RANK cuando hay empates.')
  ]
});

labs.push({
  n: 10,
  title: 'Tablas, vistas, CTAS y materialized views',
  domain: 'Gestión de datos y SQL',
  cells: [
    cover(10, 'Tablas, vistas, CTAS y materialized views', 'Gestión de datos y SQL',
      'Laboratorio 9',
      ['managed table', 'external table', 'VIEW', 'TEMP VIEW', 'CTAS',
       'materialized view', 'streaming table', 'CREATE OR REPLACE'],
      ['Seleccionar el objeto correcto.', 'Diferenciar cálculo en lectura y materialización.',
       'Reconocer las restricciones de Free Edition.']),
    route([['0-8', 'tabla de decisión'], ['8-20', 'VIEW y CTAS'],
      ['20-30', 'materialized view guiada'], ['30-35', 'cierre']]),
    setupSql(),
    code(`CREATE OR REPLACE VIEW workspace.curso_gold.v_ventas_altas AS
SELECT *
FROM workspace.curso_gold.ventas_por_cliente
WHERE venta_total >= 1000;

CREATE OR REPLACE TABLE workspace.curso_gold.snapshot_ventas_altas AS
SELECT * FROM workspace.curso_gold.v_ventas_altas;

SELECT 'vista' AS objeto, count(*) AS filas
FROM workspace.curso_gold.v_ventas_altas
UNION ALL
SELECT 'tabla CTAS', count(*)
FROM workspace.curso_gold.snapshot_ventas_altas;`),
    md(`## Materialized view: ruta condicionada

Una materialized view real mantiene resultados mediante Lakeflow. No es lo mismo
que una tabla Gold creada con CTAS. Si la opción está habilitada, ejecute la
siguiente celda. Si no, analice la sintaxis y utilice la tabla CTAS como respaldo.`),
    code(`-- CREATE OR REFRESH MATERIALIZED VIEW workspace.curso_gold.mv_ventas_region AS
-- SELECT region, sum(venta_total) AS ventas
-- FROM workspace.curso_gold.ventas_por_cliente
-- GROUP BY region;`),
    md(`### Conceptos solo teóricos en Free Edition

- External table y \`LOCATION\`: requieren almacenamiento y credenciales externos.
- Global temporary view: no está soportada en serverless.
- Lakeflow Spark Declarative Pipelines es el nombre actual; Delta Live Tables
  (DLT) es el nombre anterior.`),
    exam('Which object stores precomputed query results and refreshes them as source data changes?',
      'A materialized view.',
      'Una vista normal conserva la definición; una materialized view conserva resultados administrados. Una tabla CTAS es una instantánea hasta que alguien la reconstruya.'),
    next(11, 'Query History, Query Profile y rendimiento',
      'Deben existir una vista y una tabla CTAS con resultados equivalentes, pero comportamiento diferente.')
  ]
});

labs.push({
  n: 11,
  title: 'Query History, Query Profile y rendimiento',
  domain: 'Análisis de consultas',
  cells: [
    cover(11, 'Query History, Query Profile y rendimiento', 'Análisis de consultas',
      'SQL Warehouse activo',
      ['Query History', 'Query Profile', 'Query Insights', 'scan', 'shuffle',
       'spill', 'skew', 'Photon', 'result cache', 'data skipping', 'Liquid Clustering'],
      ['Localizar una consulta en Query History.', 'Leer operadores costosos.',
       'Proponer una mejora basada en evidencia.']),
    route([['0-8', 'ejecutar consulta de diagnóstico'], ['8-22', 'abrir Query History y Profile'],
      ['22-30', 'comparar con EXPLAIN'], ['30-35', 'recomendación']]),
    setupSql(),
    code(`EXPLAIN FORMATTED
SELECT c.region, p.estado, sum(i.cantidad * i.precio_unitario) AS ventas
FROM workspace.curso_silver.clientes c
JOIN workspace.curso_bronze.pedidos p USING (id_cliente)
JOIN workspace.curso_bronze.items_pedido i USING (id_pedido)
GROUP BY c.region, p.estado
ORDER BY ventas DESC;`),
    code(`SELECT c.region, p.estado, sum(i.cantidad * i.precio_unitario) AS ventas
FROM workspace.curso_silver.clientes c
JOIN workspace.curso_bronze.pedidos p USING (id_cliente)
JOIN workspace.curso_bronze.items_pedido i USING (id_pedido)
GROUP BY c.region, p.estado
ORDER BY ventas DESC;`),
    md(`## Inspección en la interfaz

1. Abra **Query History** y localice la consulta por hora, usuario y origen.
2. Abra **Query Profile**.
3. Identifique scan, shuffle, filas y operador más costoso.
4. Revise Query Insights, si aparece.
5. Documente una mejora; no recomiende OPTIMIZE sin evidencia.

Free Edition no ofrece Spark UI. Query Profile es la herramienta correcta.
Tampoco soporta \`CACHE TABLE\` ni \`df.cache()\`. El **result cache** es un concepto
distinto administrado por el servicio.`),
    exam('Serverless compute does not provide the Spark UI. Which feature should an analyst use to inspect query operators and execution metrics?',
      'Query Profile.',
      'Query Profile muestra el plan y métricas de ejecución. Query History ayuda a localizar la consulta, pero no sustituye el perfil detallado.'),
    next(12, 'Modelo dimensional: grain, facts y dimensions',
      'Registre el operador más costoso y una recomendación sustentada en el perfil.')
  ]
});

labs.push({
  n: 12,
  title: 'Modelo dimensional: grain, facts y dimensions',
  domain: 'Modelado de datos',
  cells: [
    cover(12, 'Modelo dimensional: grain, facts y dimensions', 'Modelado de datos',
      'Silver disponible',
      ['grain', 'fact table', 'dimension table', 'star schema', 'snowflake schema',
       'surrogate key', 'degenerate dimension', 'PK/FK informational constraint'],
      ['Declarar el grain antes de modelar.', 'Construir dimensiones y una tabla de hechos.',
       'Validar que las métricas no se dupliquen.']),
    route([['0-7', 'definir grain'], ['7-23', 'crear dimensiones y fact'],
      ['23-31', 'validar modelo'], ['31-35', 'cierre']]),
    setupSql(),
    code(`CREATE OR REPLACE TABLE workspace.curso_gold.dim_cliente AS
SELECT id_cliente AS cliente_key, nombre_cliente, region, industria
FROM workspace.curso_silver.clientes;

CREATE OR REPLACE TABLE workspace.curso_gold.dim_producto AS
SELECT DISTINCT id_producto AS producto_key, nombre_producto, categoria
FROM workspace.curso_silver.productos;

CREATE OR REPLACE TABLE workspace.curso_gold.fact_ventas AS
SELECT i.id_item AS venta_key, p.id_pedido,
       p.id_cliente AS cliente_key, i.id_producto AS producto_key,
       cast(p.fecha_pedido AS DATE) AS fecha_venta,
       i.cantidad, i.precio_unitario,
       i.cantidad * i.precio_unitario AS importe
FROM workspace.curso_silver.items_pedido i
JOIN workspace.curso_silver.pedidos p USING (id_pedido);`),
    code(`SELECT
  (SELECT count(*) FROM workspace.curso_gold.fact_ventas) AS filas_fact,
  (SELECT count(DISTINCT venta_key) FROM workspace.curso_gold.fact_ventas) AS grain_unico,
  (SELECT count(*)
   FROM workspace.curso_gold.fact_ventas f
   LEFT ANTI JOIN workspace.curso_gold.dim_cliente d
     ON f.cliente_key = d.cliente_key) AS clientes_huerfanos;`),
    exam('What should be defined before selecting dimensions and measures for a fact table?',
      'The grain of the fact table.',
      'El grain establece qué representa cada fila y evita combinar hechos con distintos niveles de detalle.'),
    next(13, 'Slowly Changing Dimensions Type 1 y Type 2',
      '`fact_ventas` debe tener una fila por `id_item` y las dimensiones no deben multiplicar hechos.')
  ]
});

labs.push({
  n: 13,
  title: 'Slowly Changing Dimensions Type 1 y Type 2',
  domain: 'Modelado de datos',
  cells: [
    cover(13, 'Slowly Changing Dimensions Type 1 y Type 2', 'Modelado de datos',
      'Laboratorio 12',
      ['SCD Type 1', 'SCD Type 2', 'effective date', 'end date', 'current flag',
       'surrogate key', 'MERGE'],
      ['Aplicar Type 1 cuando no se requiere historia.',
       'Representar Type 2 con vigencias.', 'Elegir el patrón por requisito.']),
    route([['0-8', 'comparar requisitos'], ['8-18', 'Type 1'],
      ['18-31', 'Type 2 simplificado'], ['31-35', 'cierre']]),
    setupSql(),
    code(`-- Type 1: sobrescribe el valor anterior.
MERGE INTO workspace.curso_gold.dim_cliente AS d
USING (SELECT 99991 AS cliente_key, 'Cliente demostración' AS nombre_cliente,
              'Centro' AS region, 'Tecnología' AS industria) AS s
ON d.cliente_key = s.cliente_key
WHEN MATCHED THEN UPDATE SET *
WHEN NOT MATCHED THEN INSERT *;`),
    code(`CREATE TABLE IF NOT EXISTS workspace.curso_gold.dim_cliente_scd2 (
  cliente_sk BIGINT GENERATED ALWAYS AS IDENTITY,
  cliente_id BIGINT,
  nombre_cliente STRING,
  region STRING,
  industria STRING,
  valido_desde DATE,
  valido_hasta DATE,
  es_actual BOOLEAN
) USING DELTA;

-- Primera versión del cliente.
INSERT INTO workspace.curso_gold.dim_cliente_scd2
  (cliente_id, nombre_cliente, region, industria, valido_desde, valido_hasta, es_actual)
SELECT 99992, 'Cliente histórico', 'Norte', 'Servicios', current_date(), NULL, true
WHERE NOT EXISTS (
  SELECT 1 FROM workspace.curso_gold.dim_cliente_scd2 WHERE cliente_id = 99992
);

SELECT * FROM workspace.curso_gold.dim_cliente_scd2 WHERE cliente_id = 99992;`),
    md(`### Extensión

Para una nueva versión Type 2 se cierra la fila actual y se inserta otra. No se
debe resolver todo con un único \`UPDATE\`, porque se perdería la historia.`),
    exam('A company must preserve every historical customer region change. Which dimensional pattern should be used?',
      'SCD Type 2.',
      'Type 2 conserva versiones con vigencias. Type 1 sobrescribe y sirve cuando solo interesa el estado actual.'),
    next(14, 'AI/BI Dashboards: datasets y visualizaciones',
      'El participante debe justificar qué atributos requieren historia y cuáles pueden sobrescribirse.')
  ]
});

labs.push({
  n: 14,
  title: 'AI/BI Dashboards: datasets y visualizaciones',
  domain: 'Dashboards y visualizaciones',
  cells: [
    cover(14, 'AI/BI Dashboards: datasets y visualizaciones', 'Dashboards y visualizaciones',
      'Modelo Gold disponible',
      ['AI/BI Dashboards', 'dataset', 'canvas', 'counter', 'bar chart', 'line chart',
       'table', 'visual encoding'],
      ['Crear datasets simples.', 'Elegir una visualización por pregunta.',
       'Construir una primera página de dashboard.']),
    route([['0-7', 'crear consultas dataset'], ['7-25', 'crear dashboard y visualizaciones'],
      ['25-31', 'validar lectura'], ['31-35', 'cierre']]),
    setupSql(),
    code(`CREATE OR REPLACE VIEW workspace.curso_gold.ds_kpi_ventas AS
SELECT sum(importe) AS ventas, count(DISTINCT id_pedido) AS pedidos,
       count(DISTINCT cliente_key) AS clientes
FROM workspace.curso_gold.fact_ventas;

CREATE OR REPLACE VIEW workspace.curso_gold.ds_ventas_region AS
SELECT d.region, sum(f.importe) AS ventas
FROM workspace.curso_gold.fact_ventas f
JOIN workspace.curso_gold.dim_cliente d USING (cliente_key)
GROUP BY d.region;

CREATE OR REPLACE VIEW workspace.curso_gold.ds_ventas_mes AS
SELECT date_trunc('month', fecha_venta) AS mes, sum(importe) AS ventas
FROM workspace.curso_gold.fact_ventas
GROUP BY 1;`),
    md(`## Construcción en la interfaz

1. Abra **Dashboards** y cree un **AI/BI Dashboard**.
2. Agregue los tres objetos Gold como datasets.
3. Use counters para KPIs, barras para comparar regiones y línea para tendencia.
4. Muestre etiquetas y unidades; evite pie chart cuando haya muchas categorías.

**Nombre actualizado:** AI/BI Dashboards. **Lakeview** es el nombre anterior.`),
    exam('Which visualization is generally best for showing a metric trend over time?',
      'A line chart.',
      'La posición sobre un eje temporal facilita reconocer tendencia y cambios. Un counter solo muestra el estado puntual.'),
    next(15, 'AI/BI Dashboards: filtros, publicación y permisos',
      'El dashboard debe contener al menos un KPI, una comparación y una tendencia.')
  ]
});

labs.push({
  n: 15,
  title: 'AI/BI Dashboards: filtros, publicación y permisos',
  domain: 'Dashboards y visualizaciones',
  cells: [
    cover(15, 'AI/BI Dashboards: filtros, publicación y permisos',
      'Dashboards y visualizaciones', 'Laboratorio 14',
      ['filter widget', 'parameter', 'draft', 'published dashboard', 'refresh schedule',
       'subscription', 'CAN VIEW', 'CAN EDIT', 'data permissions'],
      ['Agregar interacción.', 'Publicar una versión controlada.',
       'Distinguir permiso del dashboard y permiso de los datos.']),
    route([['0-8', 'filtro y parámetro'], ['8-21', 'publicar y compartir'],
      ['21-30', 'refresh y suscripción'], ['30-35', 'cierre']]),
    setupSql(),
    code(`-- Ejemplo para un dataset parametrizado en SQL Editor.
-- En AI/BI Dashboards, el filtro puede conectarse al campo region.
SELECT d.region, sum(f.importe) AS ventas
FROM workspace.curso_gold.fact_ventas f
JOIN workspace.curso_gold.dim_cliente d USING (cliente_key)
GROUP BY d.region
ORDER BY ventas DESC;`),
    md(`## Tareas en la interfaz

1. Agregue un filtro de región y compruebe que afecta las visualizaciones.
2. Publique el dashboard y compare Draft con Published.
3. Revise CAN VIEW y CAN EDIT.
4. Explique por qué compartir el dashboard no concede automáticamente SELECT.
5. Configure refresh o suscripción si la opción aparece. Si no aparece, utilice
   la captura precargada y resuelva el escenario.

El envío por correo y embedding son extensiones; no bloquean el laboratorio.`),
    exam('A user can open a dashboard but the underlying dataset returns a permission error. What is the likely issue?',
      'The user has dashboard access but lacks the required permissions on the data objects.',
      'Los permisos del artefacto visual y los privilegios de Unity Catalog son controles diferentes.'),
    next(16, 'AI/BI Genie: creación y contexto de negocio',
      'Debe existir una versión publicada y el participante debe describir sus permisos efectivos.')
  ]
});

labs.push({
  n: 16,
  title: 'AI/BI Genie: creación y contexto de negocio',
  domain: 'AI/BI Genie',
  cells: [
    cover(16, 'AI/BI Genie: creación y contexto de negocio', 'AI/BI Genie',
      'Tablas Gold y SQL Warehouse disponibles',
      ['Genie Space', 'data sources', 'warehouse', 'instructions', 'synonym',
       'table relationship', 'business context', 'generated SQL'],
      ['Crear un Space acotado.', 'Agregar contexto y relaciones.',
       'Validar el SQL generado antes de confiar en la respuesta.']),
    route([['0-8', 'crear Space y seleccionar Warehouse'], ['8-20', 'agregar tablas y relaciones'],
      ['20-30', 'instructions y preguntas'], ['30-35', 'validación']]),
    setupSql(),
    md(`## Configuración guiada

1. Cree un Genie Space llamado **Ventas - Curso Analyst**.
2. Seleccione el SQL Warehouse serverless.
3. Agregue \`fact_ventas\`, \`dim_cliente\` y \`dim_producto\`.
4. Defina las relaciones por \`cliente_key\` y \`producto_key\`.
5. Agregue la instrucción: "Ventas significa SUM(importe). Cliente activo es
   cualquier cliente con al menos una venta".
6. Añada sinónimos: ventas/ingresos, cliente/comprador, región/zona.
7. Pregunte: **What are total sales by region?**
8. Abra y revise el SQL generado.`),
    code(`-- Consulta de referencia para validar la respuesta de Genie.
SELECT d.region, sum(f.importe) AS ventas
FROM workspace.curso_gold.fact_ventas f
JOIN workspace.curso_gold.dim_cliente d USING (cliente_key)
GROUP BY d.region
ORDER BY ventas DESC;`),
    exam('What is the best way to improve Genie when business terms are ambiguous?',
      'Add clear instructions, synonyms, descriptions, and table relationships to the Genie Space.',
      'Genie necesita contexto semántico administrado. Repetir la pregunta sin corregir ese contexto no resuelve la ambigüedad.'),
    next(17, 'AI/BI Genie: Sample SQL, Trusted Assets y mantenimiento',
      'La respuesta de Genie debe compararse con la consulta SQL de referencia.')
  ]
});

labs.push({
  n: 17,
  title: 'AI/BI Genie: Sample SQL, Trusted Assets y mantenimiento',
  domain: 'AI/BI Genie',
  cells: [
    cover(17, 'AI/BI Genie: Sample SQL, Trusted Assets y mantenimiento', 'AI/BI Genie',
      'Genie Space creado',
      ['sample question', 'Sample SQL', 'Trusted Asset', 'Draft', 'Released',
       'History', 'feedback', 'curation', 'editor permission'],
      ['Enseñar una consulta validada.', 'Promover respuestas confiables.',
       'Aplicar un ciclo de mejora sin ocultar errores.']),
    route([['0-8', 'revisar History y feedback'], ['8-20', 'agregar Sample SQL'],
      ['20-30', 'crear Trusted Asset y liberar'], ['30-35', 'cierre']]),
    setupSql(),
    code(`-- Sample SQL validado: top 5 productos por ventas.
SELECT p.nombre_producto,
       sum(f.importe) AS ventas
FROM workspace.curso_gold.fact_ventas f
JOIN workspace.curso_gold.dim_producto p USING (producto_key)
GROUP BY p.nombre_producto
ORDER BY ventas DESC
LIMIT 5;`),
    md(`## Curación del Space

1. Agregue la consulta anterior como **Sample SQL**, no solo como pregunta.
2. Formule la misma pregunta en Genie y valide el resultado.
3. Cuando la respuesta sea correcta y reutilizable, promuévala como
   **Trusted Asset**.
4. Compare Draft y Released.
5. Revise History y una respuesta con feedback negativo.
6. Corrija instrucciones o Sample SQL; no edite solo el texto final.

Un Trusted Asset no significa que cualquier respuesta futura sea correcta. Es
un activo validado dentro de un alcance específico.`),
    exam('When should a Genie answer be promoted to a Trusted Asset?',
      'After its SQL, result, business meaning, and reuse scope have been validated.',
      'La confianza requiere validación técnica y semántica. Una respuesta plausible o popular no es suficiente.'),
    next(18, 'Unity Catalog, permisos y protección de datos',
      'El Space debe contener relaciones, instrucciones, Sample SQL y al menos un activo validado.')
  ]
});

labs.push({
  n: 18,
  title: 'Unity Catalog, permisos y protección de datos',
  domain: 'Seguridad',
  cells: [
    cover(18, 'Unity Catalog, permisos y protección de datos', 'Seguridad',
      'Objetos del curso creados',
      ['principal', 'least privilege', 'USE CATALOG', 'USE SCHEMA', 'SELECT',
       'row filter', 'column mask', 'dynamic view', 'PII', 'ABAC', 'lineage'],
      ['Explicar la jerarquía de privilegios.', 'Proteger datos sensibles.',
       'Distinguir lo practicable y lo administrativo en Free Edition.']),
    route([['0-8', 'mapa de permisos'], ['8-20', 'GRANT y SHOW GRANTS'],
      ['20-30', 'vista dinámica o masking conceptual'], ['30-35', 'cierre final']]),
    setupSql(),
    code(`SHOW GRANTS ON TABLE workspace.curso_gold.fact_ventas;

-- Sustituya el principal por un usuario real del workspace antes de ejecutar.
-- GRANT USE CATALOG ON CATALOG workspace TO \`usuario@empresa.com\`;
-- GRANT USE SCHEMA ON SCHEMA workspace.curso_gold TO \`usuario@empresa.com\`;
-- GRANT SELECT ON TABLE workspace.curso_gold.fact_ventas TO \`usuario@empresa.com\`;`),
    code(`CREATE OR REPLACE VIEW workspace.curso_seguridad.v_clientes_protegidos AS
SELECT cliente_key,
       CASE
         WHEN is_account_group_member('admins') THEN nombre_cliente
         ELSE concat('Cliente ', cliente_key)
       END AS nombre_cliente,
       region,
       industria
FROM workspace.curso_gold.dim_cliente;

SELECT * FROM workspace.curso_seguridad.v_clientes_protegidos LIMIT 20;`),
    md(`## Alcance de Free Edition

Practique permisos sobre objetos propios cuando existan otros usuarios. Mantenga
como teoría: account console, SSO, SCIM, PrivateLink, redes privadas, compliance
enforcement y administración empresarial. Row filters, column masks, tags ABAC
y lineage deben explicarse aunque una cuenta concreta no permita configurarlos.

La vista dinámica ilustra protección, pero no reemplaza automáticamente una
política central de row filters o column masks.`),
    exam('A user has SELECT on a table but cannot query it through a three-level name. Which prerequisite privileges may be missing?',
      '`USE CATALOG` and `USE SCHEMA`.',
      'Unity Catalog exige atravesar la jerarquía. SELECT sobre la tabla no sustituye los privilegios de uso del catálogo y el esquema.'),
    md(`## Cierre de la secuencia

Los 18 laboratorios construyeron una solución continua: archivos, Bronze,
calidad, Silver, Gold, SQL, rendimiento, modelo dimensional, dashboards, Genie
y seguridad. El participante debe conservar el workspace para el repaso final
de los nueve dominios.`)
  ]
});

function notebook(lab) {
  return {
    cells: lab.cells,
    metadata: {
      language_info: { name: 'python' },
      kernelspec: { display_name: 'Python 3', language: 'python', name: 'python3' },
      curso: {
        certification: 'Databricks Certified Data Analyst Associate',
        duration_minutes: 35,
        free_edition: true,
        sequence: lab.n
      }
    },
    nbformat: 4,
    nbformat_minor: 5
  };
}

fs.mkdirSync(ROOT, { recursive: true });
for (const lab of labs) {
  const safeTitle = lab.title.replace(/[\\/:*?"<>|]/g, '-');
  const filename = `${String(lab.n).padStart(2, '0')} - ${safeTitle}.ipynb`;
  fs.writeFileSync(path.join(ROOT, filename), JSON.stringify(notebook(lab), null, 2), 'utf8');
}

console.log(`Created ${labs.length} notebooks in ${ROOT}`);
