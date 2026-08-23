const fs = require('fs');
const path = require('path');

const BASE = path.join('D:', '2026', 'Simulador de Preguntas', 'output', 'clases_5_10_separadas');
const SOURCE = path.join(BASE, 'Laboratorios Finales');
const OUT = path.join(BASE, 'Laboratorios Finales Divididos - laboratorio_qltp');

const sourceFiles = {
  l5: 'Laboratorio 5 - Validación de Datos.ipynb',
  l6: 'Laboratorio 6 - Delta Lake y Materialización.ipynb',
  l7: 'Laboratorio 7 - Pipeline Completo Bronze Silver Gold.ipynb',
  l8: 'Laboratorio 8 - Dashboards y Visualizacion Lakeview.ipynb',
  l9: 'Laboratorio 9 - Genie Spaces y SQL Analytics Avanzado.ipynb'
};

const src = Object.fromEntries(Object.entries(sourceFiles).map(([k, f]) => [
  k, JSON.parse(fs.readFileSync(path.join(SOURCE, f), 'utf8'))
]));

const L = (s) => s.trim().split('\n').map((x) => `${x}\n`);
const md = (s) => ({ cell_type: 'markdown', metadata: {}, source: L(s) });
const code = (s, lang = 'sql') => ({
  cell_type: 'code', execution_count: null, metadata: {}, outputs: [],
  source: L((lang === 'sql' ? '%sql\n' : lang === 'python' ? '%python\n' : '') + s)
});

function transformText(text) {
  return text
    .replaceAll('metodos_no_code_lakehouse', 'laboratorio_qltp')
    .replaceAll('METODOS_NO_CODE_LAKEHOUSE', 'LABORATORIO_QLTP')
    .replaceAll('Databricks Assistant', 'Genie Code')
    .replaceAll('LAKEVIEW', 'AI/BI DASHBOARDS')
    .replaceAll('Lakeview', 'AI/BI Dashboards')
    .replaceAll('TEMP VIEW (en memoria)', 'TEMP VIEW (vista temporal de sesión)')
    .replaceAll('Delta Live Tables', 'Lakeflow Spark Declarative Pipelines (antes DLT)')
    .replaceAll('¿QUÉ FALTA PARA ESTAR 100% LISTO PARA EL EXAMEN?',
      '¿QUÉ DEBE REFORZARSE PARA CONTINUAR LA PREPARACIÓN?')
    .replaceAll('CON ESTA SECCIÓN COMPLETAS EL 100% DE SQL AVANZADO PARA EL EXAMEN',
      'ESTA SECCIÓN AMPLÍA LA COBERTURA DE SQL PARA EL EXAMEN')
    .replaceAll('Window Functions: 100% ✅', 'Window Functions: cubiertas en esta ruta')
    .replaceAll('Joins: 100% ✅', 'Joins: cubiertos en esta ruta')
    .replaceAll('Subqueries: 100% ✅', 'Subqueries: cubiertas en esta ruta')
    .replaceAll('CTEs: 100% ✅', 'CTEs: cubiertos en esta ruta')
    .replaceAll('Análisis temporal: 100% ✅', 'Análisis temporal: cubierto en esta ruta')
    .replaceAll('Operaciones de conjuntos: 100% ✅', 'Operaciones de conjuntos: cubiertas en esta ruta')
    .replaceAll('Transformaciones: 100% ✅', 'Transformaciones: cubiertas en esta ruta')
    .replaceAll('EXISTS: Verificar existencia (MÁS EFICIENTE que IN)',
      'EXISTS: Verificar existencia (la elección frente a IN depende de la semántica y del plan)')
    .replaceAll('Databricks SQL no tiene PIVOT nativo, pero se simula con CASE',
      'Databricks SQL admite PIVOT; este ejemplo usa agregación condicional con CASE')
    .replaceAll('Producción 24/7', 'Ingesta incremental continua')
    .replaceAll('CON ESTA SECCIÓN COMPLETAS EL 100% DE LA PREPARACIÓN PARA EL EXAMEN!',
      'ESTA SECCIÓN COMPLETA LA COBERTURA PLANIFICADA DE SEGURIDAD')
    .replaceAll('TOTAL: 100% de preparación',
      'TOTAL: cobertura planificada de los nueve dominios')
    .replaceAll('Esta sección es **100% teórica** porque las funciones avanzadas de Unity Catalog requieren Databricks Enterprise/Premium.',
      'Parte de esta sección es conceptual en Free Edition; los permisos básicos pueden practicarse sobre objetos propios.')
    .replaceAll('ROW_NUMBER() OVER (PARTITION BY id_cliente ORDER BY id_cliente)',
      'ROW_NUMBER() OVER (PARTITION BY id_cliente ORDER BY fecha_archivo DESC, archivo_origen DESC, nombre_cliente)')
    .replaceAll('ROW_NUMBER() OVER (PARTITION BY id_pedido ORDER BY id_pedido)',
      'ROW_NUMBER() OVER (PARTITION BY id_pedido ORDER BY fecha_archivo DESC, archivo_origen DESC, fecha_pedido DESC)')
    .replaceAll('ROW_NUMBER() OVER (PARTITION BY nombre_producto ORDER BY id_producto)',
      'ROW_NUMBER() OVER (PARTITION BY nombre_producto ORDER BY fecha_archivo DESC, archivo_origen DESC, id_producto)');
}

function transformValidationText(text) {
  const replacements = {
    demo_clientes_raw: 'bronze.clientes_raw',
    demo_clientes: 'bronze.clientes',
    demo_pedidos: 'bronze.pedidos',
    demo_productos: 'bronze.productos',
    demo_items_pedido: 'bronze.items_pedido',
    demo_empleados: 'bronze.empleados',
    demo_categorias_producto: 'bronze.categorias_producto',
    demo_regiones: 'bronze.regiones',
    demo_pagos: 'bronze.pagos',
    demo_devoluciones: 'bronze.devoluciones'
  };
  let out = transformText(text);
  for (const [a, b] of Object.entries(replacements)) out = out.replaceAll(a, b);
  return out;
}

function clone(key, index, validation = false) {
  const original = src[key].cells[index];
  const cell = JSON.parse(JSON.stringify(original));
  const text = (cell.source || []).join('');
  cell.source = L(validation ? transformValidationText(text) : transformText(text));
  if (cell.cell_type === 'code') {
    cell.execution_count = null;
    cell.outputs = [];
  }
  cell.metadata = {};
  return cell;
}

function clones(key, indexes, validation = false) {
  return indexes.map((i) => clone(key, i, validation));
}

function cloneReplace(key, index, replacements) {
  const cell = clone(key, index);
  let text = cell.source.join('');
  for (const [a, b] of Object.entries(replacements)) text = text.replaceAll(a, b);
  cell.source = L(text);
  return cell;
}

function cover(n, title, domain, previous, outcomes) {
  return md(`# LABORATORIO ${String(n).padStart(2, '0')}: ${title.toUpperCase()}

## Información del laboratorio

| Elemento | Detalle |
|---|---|
| Duración práctica | 35 minutos |
| Entorno | Databricks Free Edition, serverless |
| Catálogo del curso | \`laboratorio_qltp\` |
| Dominio de certificación | ${domain} |
| Continuidad | ${previous} |

## Resultados de aprendizaje

${outcomes.map((x) => `- ${x}`).join('\n')}

## Regla de continuidad

Este laboratorio modifica o amplía los objetos construidos anteriormente. No
elimine el catálogo, los esquemas, el Volume ni las tablas al finalizar.`);
}

function route(items, extension) {
  return md(`## Ruta práctica y punto de corte

${items.map(([m, t]) => `- **Minutos ${m}:** ${t}`).join('\n')}

### Punto de corte

Al minuto 35 se detiene la práctica obligatoria. ${extension}`);
}

function context() {
  return code(`USE CATALOG laboratorio_qltp;
SELECT current_catalog() AS catalogo_actual, current_schema() AS esquema_actual;`);
}

function checkpoint(text, next) {
  return md(`## Verificación antes de continuar

${text}

**Siguiente laboratorio:** ${next}.`);
}

const labs = [];

labs.push({ n: 1, title: 'Catálogo, esquemas y Volume del curso', cells: [
  cover(1, 'Catálogo, esquemas y Volume del curso', 'Plataforma Databricks',
    'Inicio de la secuencia', [
      'Verificar si existe el catálogo del curso.',
      'Crear el catálogo y la arquitectura Bronze-Silver-Gold.',
      'Crear el Volume que almacenará los CSV.'
    ]),
  route([['0-8', 'arquitectura de Unity Catalog y control plane/data plane'],
    ['8-18', 'verificar y crear el catálogo'], ['18-27', 'crear esquemas'],
    ['27-35', 'crear y describir el Volume']],
    'Las explicaciones y ejemplos adicionales quedan como lectura posterior.'),
  md(`## Verificación del catálogo

No se presupone que el catálogo existe. La primera consulta lo busca; la segunda
lo crea únicamente cuando hace falta. Para crear catálogos se requiere el
privilegio correspondiente en Unity Catalog.`),
  code(`SHOW CATALOGS LIKE 'laboratorio_qltp';

CREATE CATALOG IF NOT EXISTS laboratorio_qltp
COMMENT 'Catálogo del curso Databricks Data Analyst Associate - Qualtop';

DESCRIBE CATALOG EXTENDED laboratorio_qltp;`),
  ...clones('l5', [17, 18, 19, 20]),
  code(`USE CATALOG laboratorio_qltp;

CREATE SCHEMA IF NOT EXISTS bronze
COMMENT 'Datos crudos, metadatos de ingesta y anomalías conservadas';
CREATE SCHEMA IF NOT EXISTS silver
COMMENT 'Datos validados, deduplicados y conformados';
CREATE SCHEMA IF NOT EXISTS gold
COMMENT 'Datos modelados para analítica, dashboards y Genie';

SHOW SCHEMAS IN laboratorio_qltp;`),
  clone('l5', 3),
  code(`CREATE VOLUME IF NOT EXISTS laboratorio_qltp.bronze.datos_labs
COMMENT 'CSV, esquemas y checkpoints de los laboratorios';

DESCRIBE VOLUME laboratorio_qltp.bronze.datos_labs;
LIST '/Volumes/laboratorio_qltp/bronze/datos_labs/';`),
  checkpoint('Deben existir `bronze`, `silver`, `gold` y el Volume `bronze.datos_labs`.',
    '02 - Carga y verificación de los CSV')
]});

labs.push({ n: 2, title: 'Carga y verificación de los CSV', cells: [
  cover(2, 'Carga y verificación de los CSV', 'Importación de datos',
    'Catálogo, esquemas y Volume creados', [
      'Subir y validar los archivos complementarios.',
      'Consultar archivos con read_files.',
      'Persistir nueve entidades Bronze con metadatos de origen.'
    ]),
  route([['0-7', 'subir los CSV al Volume'], ['7-13', 'validar nombres y faltantes'],
    ['13-22', 'explorar clientes con read_files'], ['22-35', 'crear las tablas Bronze']],
    'Si la transferencia consume tiempo, el instructor utiliza el Volume precargado.'),
  context(),
  clone('l5', 4), clone('l5', 5),
  md(`## Estructura requerida en el Volume

Suba los CSV de ` + '`datos_csv_complementarios_v1`' + ` directamente al Volume,
sin subcarpetas. Los nombres ya distinguen entidad y lote, por ejemplo:

- ` + '`batch_01_clientes.csv`' + `
- ` + '`batch_02_pedidos.csv`' + `
- ` + '`batch_03_items_pedido.csv`' + `
- ` + '`catalogo_regiones.csv`' + `
- ` + '`catalogo_categorias_producto.csv`' + `

Ruta final: ` + '`/Volumes/laboratorio_qltp/bronze/datos_labs/`' + `.`),
  code(`LIST '/Volumes/laboratorio_qltp/bronze/datos_labs/';`),
  code(`from pathlib import PurePosixPath

volume = "/Volumes/laboratorio_qltp/bronze/datos_labs/"
required = {
    "batch_01_clientes.csv", "batch_02_clientes.csv", "batch_03_clientes.csv",
    "batch_01_pedidos.csv", "batch_02_pedidos.csv", "batch_03_pedidos.csv",
    "batch_01_items_pedido.csv", "batch_02_items_pedido.csv", "batch_03_items_pedido.csv",
    "batch_01_productos.csv", "batch_02_productos.csv", "batch_03_productos.csv",
    "catalogo_regiones.csv", "catalogo_categorias_producto.csv"
}
entities = ["clientes", "clientes_raw", "pedidos", "items_pedido", "productos",
            "empleados", "pagos", "devoluciones"]
required = {f"batch_{batch:02d}_{entity}.csv"
            for entity in entities for batch in range(1, 4)} | {
                "catalogo_regiones.csv", "catalogo_categorias_producto.csv"
            }
present = {PurePosixPath(f.path).name for f in dbutils.fs.ls(volume)}
missing = sorted(required - present)
assert not missing, f"Faltan archivos en el Volume: {missing}"
print(f"Verificación correcta: {len(present)} archivos disponibles")`, 'python'),
  code(`SELECT *, _metadata.file_name AS archivo_origen
FROM read_files(
  '/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_clientes.csv',
  format => 'csv', header => true, inferColumnTypes => true
)
LIMIT 10;`),
  code(`CREATE OR REPLACE TABLE bronze.clientes AS
SELECT id_cliente, nombre_cliente, region, industria,
       _metadata.file_name AS archivo_origen,
       _metadata.file_modification_time AS fecha_archivo,
       current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_clientes.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.pedidos AS
SELECT id_pedido, id_cliente, fecha_pedido, monto, estado,
       _metadata.file_name AS archivo_origen,
       _metadata.file_modification_time AS fecha_archivo,
       current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_pedidos.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.items_pedido AS
SELECT id_item, id_pedido, id_producto, cantidad, precio_unitario,
       _metadata.file_name AS archivo_origen,
       _metadata.file_modification_time AS fecha_archivo,
       current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_items_pedido.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.productos AS
SELECT id_producto, nombre_producto, categoria,
       _metadata.file_name AS archivo_origen,
       _metadata.file_modification_time AS fecha_archivo,
       current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_productos.csv',
  format => 'csv', header => true, inferColumnTypes => true);`),
  code(`CREATE OR REPLACE TABLE bronze.clientes_raw AS
SELECT id_texto, nombre, fecha_registro_texto, region, credito_texto,
       _metadata.file_name AS archivo_origen,
       current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_clientes_raw.csv',
  format => 'csv', header => true, inferColumnTypes => false);

CREATE OR REPLACE TABLE bronze.empleados AS
SELECT *, _metadata.file_name AS archivo_origen, current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_empleados.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.pagos AS
SELECT *, _metadata.file_name AS archivo_origen, current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_pagos.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.devoluciones AS
SELECT *, _metadata.file_name AS archivo_origen, current_timestamp() AS fecha_ingesta
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/batch_*_devoluciones.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.regiones AS
SELECT row_number() OVER (ORDER BY nombre_region) AS id_region, *
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/catalogo_regiones.csv',
  format => 'csv', header => true, inferColumnTypes => true);

CREATE OR REPLACE TABLE bronze.categorias_producto AS
SELECT row_number() OVER (ORDER BY nombre_categoria) AS id_categoria, *
FROM read_files('/Volumes/laboratorio_qltp/bronze/datos_labs/catalogo_categorias_producto.csv',
  format => 'csv', header => true, inferColumnTypes => true);`),
  code(`SHOW TABLES IN bronze;

SELECT 'clientes' AS entidad, count(*) AS filas FROM bronze.clientes
UNION ALL SELECT 'pedidos', count(*) FROM bronze.pedidos
UNION ALL SELECT 'items_pedido', count(*) FROM bronze.items_pedido
UNION ALL SELECT 'productos', count(*) FROM bronze.productos
UNION ALL SELECT 'clientes_raw', count(*) FROM bronze.clientes_raw
ORDER BY entidad;`),
  md(`## Extensión: construcción de datos mediante SQL

Los siguientes bloques son los originales de la ruta didáctica. Construyen las
entidades con ` + '`CREATE OR REPLACE TEMP VIEW ... AS SELECT * FROM VALUES`' + `.
Se conservan completos para:

- practicar creación de datos directamente con SQL;
- estudiar cada anomalía intencional sin depender de archivos;
- disponer de una ruta de respaldo si no se cargan los CSV;
- comparar datos embebidos con datos ingeridos desde el Volume.

### Importante

La ruta principal del curso continúa utilizando las tablas ` + '`bronze.*`' + `
cargadas desde CSV. Las vistas ` + '`demo_*`' + ` son temporales y no sustituyen
esas tablas a menos que el instructor elija explícitamente la ruta SQL.`),
  ...clones('l5', [23, 24, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38]),
  checkpoint('Las tablas Bronze deben existir y conservar `archivo_origen` y `fecha_ingesta`.',
    '03 - COPY INTO y Auto Loader')
]});

labs.push({ n: 3, title: 'COPY INTO, Auto Loader y selección del método', cells: [
  cover(3, 'COPY INTO, Auto Loader y selección del método', 'Importación de datos',
    'CSV disponibles y Bronze inicial creado', [
      'Comprobar la idempotencia de COPY INTO.',
      'Ejecutar Auto Loader con AvailableNow.',
      'Elegir método según el escenario.'
    ]),
  route([['0-8', 'comparar métodos'], ['8-19', 'COPY INTO y segunda ejecución'],
    ['19-30', 'Auto Loader'], ['30-35', 'preguntas de decisión']],
    'Marketplace y la migración entre métodos quedan como lectura ampliada.'),
  context(), ...clones('l5', [7, 9, 10, 11, 12, 13, 14]),
  code(`CREATE OR REPLACE TABLE bronze.clientes_copy (
  id_cliente BIGINT, nombre_cliente STRING, region STRING, industria STRING
) USING DELTA;

COPY INTO bronze.clientes_copy
FROM '/Volumes/laboratorio_qltp/bronze/datos_labs/'
FILEFORMAT = CSV
PATTERN = 'batch_.*_clientes[.]csv'
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true');

SELECT count(*) AS filas_primera_ejecucion FROM bronze.clientes_copy;

COPY INTO bronze.clientes_copy
FROM '/Volumes/laboratorio_qltp/bronze/datos_labs/'
FILEFORMAT = CSV
PATTERN = 'batch_.*_clientes[.]csv'
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true');

SELECT count(*) AS filas_segunda_ejecucion FROM bronze.clientes_copy;`),
  code(`source = "/Volumes/laboratorio_qltp/bronze/datos_labs/"
schema_path = source + "_schemas/clientes_raw/"
checkpoint_path = source + "_checkpoints/clientes_raw/"

query = (
    spark.readStream.format("cloudFiles")
    .option("cloudFiles.format", "csv")
    .option("pathGlobFilter", "batch_*_clientes_raw.csv")
    .option("header", "true")
    .option("cloudFiles.inferColumnTypes", "true")
    .option("cloudFiles.schemaLocation", schema_path)
    .load(source)
    .writeStream.option("checkpointLocation", checkpoint_path)
    .trigger(availableNow=True)
    .toTable("laboratorio_qltp.bronze.clientes_raw_stream")
)
query.awaitTermination()`, 'python'),
  md(`### Precisión para Free Edition

` + '`availableNow=True`' + ` es compatible con serverless. El checkpoint de
streaming conserva el progreso de Auto Loader y no es lo mismo que
` + '`df.checkpoint()`' + `. No use COPY INTO y Auto Loader sobre la misma tabla
destino con los mismos archivos.`),
  checkpoint('Los conteos de las dos ejecuciones de COPY INTO deben ser iguales.',
    '04 - Conteos, duplicados y grain')
]});

labs.push({ n: 4, title: 'Conteos, duplicados, grain y fan-out', cells: [
  cover(4, 'Conteos, duplicados, grain y fan-out', 'Gestión de datos',
    'Tablas Bronze cargadas desde CSV', [
      'Perfilar volumen y unicidad.', 'Identificar el grain de las tablas.',
      'Evitar resultados inflados en relaciones 1:N.'
    ]),
  route([['0-7', 'definir grain'], ['7-18', 'conteos y duplicados'],
    ['18-30', 'deduplicación y fan-out'], ['30-35', 'cierre']],
    'Las consultas de detalle restantes quedan como extensión.'),
  context(), ...clones('l5', [25, 30, 31, 32, 39, 40, 41, 42, 43], true),
  checkpoint('Las anomalías deben seguir en Bronze; todavía no se eliminan.',
    '05 - Nulos y tipos de datos')
]});

labs.push({ n: 5, title: 'Validación de nulos y tipos de datos', cells: [
  cover(5, 'Validación de nulos y tipos de datos', 'Gestión de datos',
    'Perfil básico completado', [
      'Medir completitud por entidad.', 'Detectar conversiones inválidas con TRY_CAST.',
      'Distinguir schema inference y schema enforcement.'
    ]),
  route([['0-16', 'consultas de nulos obligatorias'], ['16-28', 'tipos y TRY_CAST'],
    ['28-35', 'interpretación']], 'Las consultas adicionales permanecen en el notebook para práctica autónoma.'),
  context(), ...clones('l5', Array.from({length: 18}, (_, i) => i + 44), true),
  checkpoint('No se debe haber modificado Bronze; las consultas solo diagnostican.',
    '06 - Integridad referencial y reglas de negocio')
]});

labs.push({ n: 6, title: 'Integridad referencial, rangos y reglas de negocio', cells: [
  cover(6, 'Integridad referencial, rangos y reglas de negocio', 'Gestión de datos',
    'Nulos y tipos revisados', [
      'Detectar claves huérfanas con anti joins.',
      'Validar dominios, fechas, montos y estados.',
      'Separar error técnico de regla de negocio.'
    ]),
  route([['0-15', 'integridad referencial'], ['15-30', 'rangos y reglas'],
    ['30-35', 'priorización']], 'Ejecute como mínimo una regla por entidad y conserve las demás como extensión.'),
  context(), ...clones('l5', Array.from({length: 24}, (_, i) => i + 62), true),
  checkpoint('El participante debe documentar qué registros se rechazarían y cuáles requieren revisión.',
    '07 - Score y reporte consolidado de calidad')
]});

labs.push({ n: 7, title: 'Score y reporte consolidado de calidad', cells: [
  cover(7, 'Score y reporte consolidado de calidad', 'Gestión de datos y Dashboards',
    'Reglas de calidad definidas', [
      'Consolidar incidencias y scores.', 'Persistir resultados para seguimiento.',
      'Interpretar un semáforo sin ocultar la regla subyacente.'
    ]),
  route([['0-12', 'análisis de calidad'], ['12-25', 'reporte consolidado'],
    ['25-31', 'persistencia'], ['31-35', 'cierre']], 'Los ejercicios y retos avanzados se mantienen después del punto de corte.'),
  context(), ...clones('l5', Array.from({length: 20}, (_, i) => i + 86), true),
  checkpoint('Debe existir un resultado consolidado reutilizable por un dashboard.',
    '08 - Fundamentos Delta y CRUD')
]});

labs.push({ n: 8, title: 'Fundamentos Delta y operaciones CRUD', cells: [
  cover(8, 'Fundamentos Delta y operaciones CRUD', 'Gestión de datos',
    'Bronze perfilado', [
      'Diferenciar vista, tabla Delta y tabla administrada.',
      'Aplicar INSERT, UPDATE, DELETE y MERGE.',
      'Relacionar cada cambio con una transacción Delta.'
    ]),
  route([['0-9', 'fundamentos Delta'], ['9-14', 'crear respaldo de trabajo'],
    ['14-30', 'CRUD y MERGE'], ['30-35', 'verificar historial']], 'Las explicaciones completas quedan dentro del notebook.'),
  context(), clone('l6', 18),
  code(`CREATE OR REPLACE TABLE bronze.clientes_crud AS
SELECT id_cliente, nombre_cliente, region, industria
FROM bronze.clientes;

CREATE OR REPLACE TABLE bronze.pedidos_crud AS
SELECT id_pedido, id_cliente, fecha_pedido, monto, estado
FROM bronze.pedidos;`),
  clone('l6', 26),
  ...[27, 28, 29, 30].map((i) => cloneReplace('l6', i, {
    'bronze.clientes': 'bronze.clientes_crud',
    'bronze.pedidos': 'bronze.pedidos_crud'
  })),
  clone('l6', 31),
  md(`### Adaptación del laboratorio

Las operaciones se ejecutan sobre ` + '`bronze.clientes_crud`' + ` y
` + '`bronze.pedidos_crud`' + ` para conservar intactas las tablas Bronze
cargadas desde los CSV.`),
  checkpoint('Las tablas `_crud` deben mostrar INSERT, UPDATE, DELETE y MERGE sin alterar Bronze original.',
    '09 - Historia, Time Travel y capa Silver')
]});

labs.push({ n: 9, title: 'Historia, Time Travel y capa Silver', cells: [
  cover(9, 'Historia, Time Travel y capa Silver', 'Gestión de datos',
    'Operaciones Delta ejecutadas', [
      'Leer DESCRIBE HISTORY.', 'Consultar una versión anterior.',
      'Construir tablas Silver con reglas explícitas.'
    ]),
  route([['0-13', 'historia y Time Travel'], ['13-18', 'respaldo o RESTORE conceptual'],
    ['18-32', 'crear Silver'], ['32-35', 'comparar capas']], 'La restauración real es opcional; no se destruye el estado de trabajo.'),
  context(), clone('l6', 32),
  ...[33, 34, 35, 36].map((i) => cloneReplace('l6', i, {
    'bronze.clientes': 'bronze.clientes_crud'
  })),
  ...clones('l6', [37, 38, 39, 40]),
  md(`### Ajuste de continuidad

Para revisar los cambios del laboratorio anterior, aplique las consultas de
historia a ` + '`bronze.clientes_crud`' + `. Las tablas Silver sí se construyen
desde las tablas Bronze originales cargadas desde CSV.`),
  checkpoint('Deben existir `silver.clientes_validados`, `silver.pedidos_validados` y `silver.productos_validados`.',
    '10 - Optimización, materialización y Gold')
]});

labs.push({ n: 10, title: 'Optimización, materialización y capa Gold', cells: [
  cover(10, 'Optimización, materialización y capa Gold', 'Gestión y análisis de consultas',
    'Silver disponible', [
      'Diferenciar OPTIMIZE, Z-ORDER y VACUUM.',
      'Distinguir tabla Gold y materialized view.',
      'Crear objetos Gold para consumo analítico.'
    ]),
  route([['0-9', 'optimización y data skipping'], ['9-14', 'VACUUM conceptual'],
    ['14-30', 'crear tablas Gold'], ['30-35', 'validar pipeline']], 'No se ejecuta VACUUM destructivo durante la clase.'),
  context(), ...clones('l6', [41, 42, 43, 44, 45, 46, 47, 48, 49, 50]),
  ...clones('l7', [11, 12, 13, 14, 15, 16, 17]),
  md(`### Terminología corregida

` + '`CREATE OR REPLACE TABLE gold... AS SELECT`' + ` crea una tabla Gold
precalculada; no crea una materialized view. Una materialized view real se crea
con ` + '`CREATE OR REFRESH MATERIALIZED VIEW`' + ` y su disponibilidad depende
de Lakeflow/serverless. Z-ORDER se conserva para el examen y se compara con
Liquid Clustering como enfoque actual.`),
  checkpoint('Gold debe contener al menos `resumen_ventas_diario`, `top_productos` y `calidad_datos_historico`.',
    '11 - Joins y set operations')
]});

labs.push({ n: 11, title: 'Joins y set operations', cells: [
  cover(11, 'Joins y set operations', 'SQL y SQL Warehouses',
    'Silver y Gold disponibles', [
      'Elegir INNER, LEFT, RIGHT, FULL, SEMI y ANTI JOIN.',
      'Distinguir UNION y UNION ALL.', 'Evitar duplicaciones por grain.'
    ]),
  route([['0-8', 'mapa de joins'], ['8-18', 'SEMI y ANTI JOIN'],
    ['18-28', 'UNION/UNION ALL y FULL JOIN'], ['28-35', 'escenario de examen']],
    'CROSS JOIN y SELF JOIN quedan como extensión en el mismo notebook.'),
  context(),
  md(`# JOINS Y SET OPERATIONS

## Decisión por escenario

- **INNER JOIN:** solo coincidencias.
- **LEFT JOIN:** todas las filas izquierdas y coincidencias derechas.
- **LEFT SEMI JOIN:** filas izquierdas que tienen coincidencia.
- **LEFT ANTI JOIN:** filas izquierdas sin coincidencia.
- **FULL OUTER JOIN:** filas de ambos lados, coincidan o no.
- **UNION ALL:** concatena y conserva duplicados.
- **UNION:** concatena y elimina duplicados, con costo adicional.`),
  code(`SELECT c.id_cliente, c.nombre_cliente
FROM silver.clientes_validados c
LEFT SEMI JOIN silver.pedidos_validados p USING (id_cliente);

SELECT c.id_cliente, c.nombre_cliente
FROM silver.clientes_validados c
LEFT ANTI JOIN silver.pedidos_validados p USING (id_cliente);`),
  ...clones('l9', [20, 21, 22, 24, 25]),
  checkpoint('El participante debe poder justificar el join sin depender de memorizar sintaxis.',
    '12 - Agregaciones, ventanas y CTE')
]});

labs.push({ n: 12, title: 'Agregaciones, funciones de ventana y CTE', cells: [
  cover(12, 'Agregaciones, funciones de ventana y CTE', 'SQL y SQL Warehouses',
    'Consultas de joins completadas', [
      'Distinguir GROUP BY de funciones de ventana.',
      'Aplicar ROW_NUMBER, RANK, DENSE_RANK, LAG y LEAD.',
      'Estructurar consultas con CTE.'
    ]),
  route([['0-8', 'GROUP BY frente a ventanas'], ['8-22', 'ranking y navegación'],
    ['22-31', 'CTE modular'], ['31-35', 'cierre']], 'El ejercicio avanzado de múltiples CTE queda como extensión.'),
  context(), ...clones('l9', [3, 4, 5, 6, 7, 8, 9, 10]),
  checkpoint('Debe explicarse la diferencia entre RANK y DENSE_RANK cuando hay empates.',
    '13 - Análisis temporal y SQL avanzado')
]});

labs.push({ n: 13, title: 'Análisis temporal y SQL avanzado', cells: [
  cover(13, 'Análisis temporal y SQL avanzado', 'SQL y SQL Warehouses',
    'Funciones de ventana y CTE dominadas', [
      'Aplicar DATE_TRUNC, DATEDIFF y EXTRACT.',
      'Calcular running totals y moving averages.',
      'Resolver consultas integradoras tipo examen.'
    ]),
  route([['0-10', 'funciones temporales'], ['10-20', 'tendencia y comparación'],
    ['20-30', 'running total o RFM'], ['30-35', 'cierre']], 'Las consultas complejas adicionales permanecen como retos.'),
  context(), ...clones('l9', [11, 12, 13, 14, 15, 16, 17, 19, 23, 26, 27, 28, 29, 30]),
  md(`### Corrección sobre PIVOT

Databricks SQL sí admite la cláusula ` + '`PIVOT`' + `. La agregación condicional
con ` + '`CASE`' + ` también es válida y puede ser más explícita. No debe
enseñarse que PIVOT no existe.`),
  checkpoint('El participante debe identificar el frame de ventana y el orden temporal correcto.',
    '14 - Query History, Query Profile y rendimiento')
]});

labs.push({ n: 14, title: 'Query History, Query Profile y rendimiento', cells: [
  cover(14, 'Query History, Query Profile y rendimiento', 'Análisis de consultas',
    'Consultas complejas disponibles', [
      'Localizar una ejecución en Query History.',
      'Interpretar scan, shuffle, spill y skew en Query Profile.',
      'Relacionar Photon, data skipping y result cache.'
    ]),
  route([['0-8', 'ejecutar consulta y EXPLAIN'], ['8-22', 'abrir History y Profile'],
    ['22-30', 'identificar el operador costoso'], ['30-35', 'recomendación basada en evidencia']],
    'Liquid Clustering, small files y cache se profundizan en la lectura.'),
  context(),
  md(`# ANÁLISIS DE CONSULTAS EN SERVERLESS

Free Edition no ofrece Spark UI. Para análisis del SQL se utilizan:

1. **Query History:** quién, cuándo, origen, duración, estado y cache.
2. **Query Profile:** operadores, filas, scan, shuffle, spill y skew.
3. **Query Insights:** observaciones automáticas cuando están disponibles.
4. **EXPLAIN:** plan lógico y físico antes de ejecutar.

Photon es el motor vectorizado. Result cache no es lo mismo que ejecutar
` + '`CACHE TABLE`' + `, comando que no está soportado en serverless.`),
  code(`EXPLAIN FORMATTED
SELECT c.region, p.estado,
       sum(i.cantidad * i.precio_unitario) AS ventas
FROM silver.clientes_validados c
JOIN silver.pedidos_validados p USING (id_cliente)
JOIN bronze.items_pedido i USING (id_pedido)
GROUP BY c.region, p.estado
ORDER BY ventas DESC;`),
  code(`SELECT c.region, p.estado,
       sum(i.cantidad * i.precio_unitario) AS ventas
FROM silver.clientes_validados c
JOIN silver.pedidos_validados p USING (id_cliente)
JOIN bronze.items_pedido i USING (id_pedido)
GROUP BY c.region, p.estado
ORDER BY ventas DESC;`),
  md(`## Guía de lectura

- Un scan alto puede indicar demasiadas columnas, poca selectividad o falta de data skipping.
- Shuffle elevado suele aparecer en joins y agregaciones distribuidas.
- Spill significa que una operación excedió memoria y utilizó almacenamiento.
- Skew indica distribución desigual de claves.
- No recomiende OPTIMIZE, Z-ORDER o Liquid Clustering sin relacionarlo con el patrón de acceso.`),
  checkpoint('Registre el operador más costoso y una mejora sustentada en el perfil.',
    '15 - Modelo dimensional y SCD')
]});

labs.push({ n: 15, title: 'Modelo dimensional, grain y SCD', cells: [
  cover(15, 'Modelo dimensional, grain y SCD', 'Modelado de datos',
    'Silver validado', [
      'Definir grain antes de construir hechos.',
      'Crear un star schema con fact y dimensions.',
      'Distinguir SCD Type 1 y Type 2.'
    ]),
  route([['0-7', 'definir grain y relaciones'], ['7-20', 'crear fact y dimensions'],
    ['20-30', 'comparar SCD Type 1 y 2'], ['30-35', 'validación']],
    'La implementación completa de SCD Type 2 queda como ejercicio ampliado.'),
  context(),
  md(`# MODELO DIMENSIONAL PARA ANALÍTICA

## Grain

El grain declara qué representa una fila. En ` + '`fact_ventas`' + ` será una
línea de pedido (` + '`id_item`' + `). Las dimensiones describen cliente,
producto y fecha. Definirlo antes evita fan-out y medidas duplicadas.

## SCD

- **Type 1:** sobrescribe el atributo; no conserva historia.
- **Type 2:** cierra la versión anterior e inserta otra con vigencias.
- Las PK/FK en Unity Catalog pueden documentar relaciones, pero no sustituyen
  la validación de calidad del dato.`),
  code(`CREATE OR REPLACE TABLE gold.dim_cliente AS
SELECT id_cliente AS cliente_key, nombre_cliente, region, industria
FROM silver.clientes_validados;

CREATE OR REPLACE TABLE gold.dim_producto AS
SELECT id_producto AS producto_key, nombre_producto, categoria
FROM silver.productos_validados;

CREATE OR REPLACE TABLE gold.fact_ventas AS
SELECT i.id_item AS venta_key, i.id_pedido,
       p.id_cliente AS cliente_key, i.id_producto AS producto_key,
       p.fecha_pedido AS fecha_venta,
       i.cantidad, i.precio_unitario,
       i.cantidad * i.precio_unitario AS importe
FROM bronze.items_pedido i
JOIN silver.pedidos_validados p USING (id_pedido)
WHERE i.cantidad > 0 AND i.precio_unitario > 0;`),
  code(`SELECT
  (SELECT count(*) FROM gold.fact_ventas) AS filas_fact,
  (SELECT count(DISTINCT venta_key) FROM gold.fact_ventas) AS grain_unico,
  (SELECT count(*) FROM gold.fact_ventas f
   LEFT ANTI JOIN gold.dim_cliente d ON f.cliente_key = d.cliente_key) AS clientes_huerfanos,
  (SELECT count(*) FROM gold.fact_ventas f
   LEFT ANTI JOIN gold.dim_producto d ON f.producto_key = d.producto_key) AS productos_huerfanos;`),
  code(`CREATE TABLE IF NOT EXISTS gold.dim_cliente_scd2 (
  cliente_sk BIGINT GENERATED ALWAYS AS IDENTITY,
  cliente_id BIGINT,
  nombre_cliente STRING,
  region STRING,
  industria STRING,
  valido_desde DATE,
  valido_hasta DATE,
  es_actual BOOLEAN
) USING DELTA;`),
  checkpoint('El número de filas de la fact debe coincidir con su grain y no debe crecer al unir dimensiones.',
    '16 - AI/BI Dashboards')
]});

labs.push({ n: 16, title: 'AI-BI Dashboards de principio a publicación', cells: [
  cover(16, 'AI/BI Dashboards de principio a publicación', 'Dashboards y visualizaciones',
    'Gold y star schema disponibles', [
      'Crear datasets y elegir visualizaciones.', 'Agregar filtros y parámetros.',
      'Publicar y distinguir permisos del dashboard y de los datos.'
    ]),
  route([['0-8', 'ejecutar y guardar datasets'], ['8-22', 'crear visualizaciones'],
    ['22-29', 'agregar filtro'], ['29-35', 'publicar y revisar permisos']],
    'Refresh, subscriptions y visualizaciones opcionales permanecen como extensión.'),
  context(),
  md(`# ACLARACIÓN DE NOMBRE

El nombre profesional actual es **AI/BI Dashboards**. **Lakeview** es el nombre
anterior y puede aparecer en material histórico. No son dos productos que deban
configurarse por separado.`),
  ...clones('l8', [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]),
  checkpoint('Debe existir un dashboard publicado con KPI, comparación, tendencia y filtro.',
    '17 - AI/BI Genie y curación')
]});

labs.push({ n: 17, title: 'AI-BI Genie, contexto y activos confiables', cells: [
  cover(17, 'AI/BI Genie, contexto y activos confiables', 'AI/BI Genie',
    'Tablas Gold y SQL Warehouse disponibles', [
      'Crear un Genie Space acotado.', 'Configurar relaciones e instrucciones.',
      'Usar Sample SQL, Trusted Assets, History y feedback.'
    ]),
  route([['0-8', 'crear Space y seleccionar datos'], ['8-18', 'relaciones e instrucciones'],
    ['18-28', 'Sample SQL y validación'], ['28-35', 'Trusted Asset y publicación']],
    'Las preguntas adicionales quedan para práctica autónoma.'),
  context(), clone('l9', 2),
  md(`# CURACIÓN PROFESIONAL DEL GENIE SPACE

## Elementos que deben agregarse

1. **Relaciones:** ` + '`fact_ventas.cliente_key = dim_cliente.cliente_key`' + ` y
   ` + '`fact_ventas.producto_key = dim_producto.producto_key`' + `.
2. **Instructions:** ventas significa ` + '`SUM(importe)`' + `; documentar moneda,
   filtros y significado de cliente activo.
3. **Synonyms:** ventas/ingresos, cliente/comprador, región/zona.
4. **Sample question:** muestra al usuario una pregunta sugerida.
5. **Sample SQL:** enseña una consulta que ya fue validada.
6. **Trusted Asset:** promover solo después de validar SQL, resultado y alcance.
7. **Draft y Released:** controlar cuándo los cambios llegan a usuarios.
8. **History y feedback:** revisar fallos y corregir el contexto, no solo el texto final.`),
  code(`SELECT d.region, sum(f.importe) AS ventas
FROM gold.fact_ventas f
JOIN gold.dim_cliente d USING (cliente_key)
GROUP BY d.region
ORDER BY ventas DESC;`),
  checkpoint('Compare la respuesta de Genie con el SQL validado antes de promover un Trusted Asset.',
    '18 - Unity Catalog y seguridad')
]});

labs.push({ n: 18, title: 'Unity Catalog, permisos y protección de datos', cells: [
  cover(18, 'Unity Catalog, permisos y protección de datos', 'Seguridad',
    'Todos los objetos del curso disponibles', [
      'Explicar la jerarquía de privilegios.', 'Distinguir row filters, masks y dynamic views.',
      'Separar práctica de Free Edition y administración empresarial.'
    ]),
  route([['0-9', 'jerarquía y mínimo privilegio'], ['9-20', 'SHOW GRANTS y GRANT'],
    ['20-30', 'protección de PII'], ['30-35', 'lineage y cierre']],
    'SSO, SCIM, account console y redes privadas quedan como teoría.'),
  context(), clone('l9', 0),
  code(`SHOW GRANTS ON TABLE laboratorio_qltp.gold.fact_ventas;

-- Sustituya el principal antes de ejecutar:
-- GRANT USE CATALOG ON CATALOG laboratorio_qltp TO ` + '`usuario@empresa.com`' + `;
-- GRANT USE SCHEMA ON SCHEMA laboratorio_qltp.gold TO ` + '`usuario@empresa.com`' + `;
-- GRANT SELECT ON TABLE laboratorio_qltp.gold.fact_ventas TO ` + '`usuario@empresa.com`' + `;`),
  code(`CREATE OR REPLACE VIEW laboratorio_qltp.gold.v_clientes_protegidos AS
SELECT cliente_key,
       concat('Cliente ', cliente_key) AS cliente_visible,
       region,
       industria
FROM laboratorio_qltp.gold.dim_cliente;

SELECT * FROM laboratorio_qltp.gold.v_clientes_protegidos LIMIT 20;`),
  md(`## Alcance de Free Edition

Se practican permisos sobre objetos cuando haya otros usuarios disponibles. Se
explican conceptualmente row filters, column masks, tags ABAC, lineage y PII.
No se intenta configurar account console, SSO, SCIM, PrivateLink, redes privadas
ni compliance enforcement porque Free Edition no los soporta.`),
  md(`## Cierre de la ruta

La secuencia construyó desde el catálogo y los CSV hasta Bronze, Silver, Gold,
SQL avanzado, rendimiento, modelo dimensional, AI/BI Dashboards, Genie y
seguridad. Los notebooks finales originales se mantienen como biblioteca de
extensión y estos 18 notebooks son la ruta docente de clase.`)
]});

function notebook(lab) {
  return {
    cells: lab.cells,
    metadata: {
      language_info: { name: 'python' },
      kernelspec: { display_name: 'Python 3', language: 'python', name: 'python3' },
      curso: { sequence: lab.n, duration_minutes: 35, catalog: 'laboratorio_qltp', source: 'Laboratorios Finales' }
    },
    nbformat: 4,
    nbformat_minor: 5
  };
}

fs.mkdirSync(OUT, { recursive: true });
for (const lab of labs) {
  const safe = lab.title.replace(/[\\/:*?"<>|]/g, '-');
  const filename = `${String(lab.n).padStart(2, '0')} - ${safe}.ipynb`;
  fs.writeFileSync(path.join(OUT, filename), JSON.stringify(notebook(lab), null, 2), 'utf8');
}

console.log(`Created ${labs.length} divided laboratories in ${OUT}`);
