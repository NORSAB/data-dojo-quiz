// ============================================================
// URGENT STUDY MODULE — Databricks DA Associate
// Deep-dive content for weak exam domains (Jan 2026 results)
// This file EXTENDS study_databricks.js — does NOT replace it
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

    // Concatenate urgent sections to the existing array
    const urgentSections = [
        // =====================================================
        // DOMAIN 3: IMPORTING DATA — COMPREHENSIVE DEEP DIVE
        // Expanded from 3 items to 7 for exam mastery
        // =====================================================
        {
            title: 'U1. Importing Data — Complete Guide / Guía Completa de Importación',
            items: [
                {
                    title: "1.1 COPY INTO — Batch File Ingestion (Deep Dive)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Highly Tested Command')}
                                This is the most testable SQL command for file ingestion. Master every option and know exactly when to use it vs. alternatives.
                            </div>
                            <h5>What is COPY INTO?</h5>
                            <p>A <strong>SQL command</strong> that loads data from files in cloud storage into a Delta table. It is <strong>idempotent</strong> — it tracks which files have already been loaded and skips them on re-runs. This means you can safely schedule it to run repeatedly without duplicating data.</p>

                            <h5>Full Syntax with All Options</h5>
                            <pre><code>COPY INTO my_catalog.my_schema.target_table
FROM '/Volumes/catalog/schema/volume/data/'
FILEFORMAT = CSV
FORMAT_OPTIONS (
  'header' = 'true',
  'inferSchema' = 'true',
  'delimiter' = ',',
  'mergeSchema' = 'true',
  'encoding' = 'UTF-8',
  'quote' = '"',
  'escape' = '\\\\',
  'multiLine' = 'false',
  'nullValue' = 'NA',
  'dateFormat' = 'yyyy-MM-dd',
  'timestampFormat' = 'yyyy-MM-dd HH:mm:ss'
)
COPY_OPTIONS (
  'mergeSchema' = 'true',
  'force' = 'false'
);</code></pre>

                            <h5>FORMAT_OPTIONS — What Each One Does</h5>
                            ${styleBox('blue', 'Key FORMAT_OPTIONS for Exam')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Option</th><th>Values</th><th>Why it Matters</th></tr>
                                    <tr><td><code>header</code></td><td>'true' / 'false'</td><td>If CSV has column headers. <strong>Default is false</strong> — forgetting this creates col1, col2... columns</td></tr>
                                    <tr><td><code>inferSchema</code></td><td>'true' / 'false'</td><td>Auto-detect data types. Default false = all STRING columns. Set true for proper types</td></tr>
                                    <tr><td><code>delimiter</code></td><td>',', '\\t', '|'</td><td>Column separator. Default comma. TSV files need '\\t'</td></tr>
                                    <tr><td><code>mergeSchema</code></td><td>'true' / 'false'</td><td>Allows new columns to be added to target table if source file has extra columns</td></tr>
                                    <tr><td><code>multiLine</code></td><td>'true' / 'false'</td><td>Handle JSON records spanning multiple lines. Default false for performance</td></tr>
                                    <tr><td><code>rescuedDataColumn</code></td><td>'_rescued_data'</td><td>Puts malformed/extra columns into a rescue column instead of failing</td></tr>
                                </table>
                            </div>

                            <h5>COPY_OPTIONS — Control Behavior</h5>
                            ${styleBox('yellow', 'Key COPY_OPTIONS for Exam')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Option</th><th>Effect</th><th>Exam Scenario</th></tr>
                                    <tr><td><code>force = 'true'</code></td><td>Reloads ALL files, even previously loaded ones</td><td>"The analyst needs to reload all files after a schema change"</td></tr>
                                    <tr><td><code>force = 'false'</code></td><td><strong>Default</strong>. Skips already-loaded files (idempotent behavior)</td><td>"Run safely on a schedule without duplicates"</td></tr>
                                    <tr><td><code>mergeSchema = 'true'</code></td><td>Evolves target table schema if new columns appear</td><td>"New CSV files have an extra column"</td></tr>
                                </table>
                            </div>

                            <h5>How Idempotency Works Internally</h5>
                            <ul>
                                <li>COPY INTO stores a <strong>file-level manifest</strong> of loaded file paths in the Delta table's transaction log</li>
                                <li>On each run, it <strong>lists the source directory</strong> and compares against the manifest</li>
                                <li>Only <strong>new files</strong> (not in the manifest) are processed</li>
                                <li>This is why it's called <strong>exactly-once semantics</strong></li>
                                <li><strong>Limitation:</strong> If you modify an already-loaded file, COPY INTO will NOT re-process it (unless <code>force = 'true'</code>)</li>
                            </ul>

                            <h5>Supported File Formats</h5>
                            <p><code>CSV</code>, <code>JSON</code>, <code>PARQUET</code>, <code>AVRO</code>, <code>ORC</code>, <code>XML</code>, <code>TEXT</code>, <code>BINARYFILE</code></p>

                            <h5>Supported Source Locations</h5>
                            <ul>
                                <li><code>/Volumes/catalog/schema/volume/</code> — Unity Catalog Volumes (recommended)</li>
                                <li><code>s3://bucket/path/</code> — AWS S3</li>
                                <li><code>abfss://container@account.dfs.core.windows.net/</code> — Azure Data Lake</li>
                                <li><code>gs://bucket/path/</code> — Google Cloud Storage</li>
                                <li><code>dbfs:/mnt/path/</code> — Legacy DBFS mounts (not recommended for new work)</li>
                            </ul>

                            ${styleBox('green', 'When to Choose COPY INTO')}
                                <ul>
                                    <li>Batch ingestion of <strong>thousands</strong> of files (not millions)</li>
                                    <li>One-time historical backfills</li>
                                    <li>Periodic scheduled loads (daily/weekly via Databricks Workflows)</li>
                                    <li>Ad-hoc ingestion or proof-of-concept</li>
                                    <li>When you want a <strong>pure SQL solution</strong> (no Python/PySpark needed)</li>
                                </ul>
                            </div>

                            ${styleBox('red', 'When NOT to Use COPY INTO')}
                                <ul>
                                    <li><strong>Millions of files</strong> → Directory listing becomes too slow → Use <strong>Auto Loader</strong></li>
                                    <li><strong>Real-time/continuous ingestion</strong> → Use <strong>Auto Loader</strong> (streaming)</li>
                                    <li><strong>Data from another table/query</strong> → Use <strong>CTAS</strong> or <strong>INSERT INTO...SELECT</strong></li>
                                    <li><strong>Modified files you need to re-read</strong> → Auto Loader handles this better</li>
                                </ul>
                            </div>

                            ${styleBox('yellow', 'Exam Decision Pattern')}
                                <p><strong>Q: "A data analyst needs to load CSV files from cloud storage into a Delta table..."</strong></p>
                                <p>Look for these keywords:</p>
                                <ul>
                                    <li>"batch" + "files" + "cloud storage" + "SQL" → <strong>COPY INTO</strong></li>
                                    <li>"idempotent" or "without duplicates" → <strong>COPY INTO</strong></li>
                                    <li>"scheduled" + "periodic" → <strong>COPY INTO</strong></li>
                                    <li>"scalable" or "millions" or "continuous" → <strong>Auto Loader</strong></li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Comando Altamente Evaluado')}
                                Este es el comando SQL más evaluado para ingesta de archivos. Domina cada opción y sabe exactamente cuándo usarlo vs. alternativas.
                            </div>
                            <h5>¿Qué es COPY INTO?</h5>
                            <p>Un <strong>comando SQL</strong> que carga datos desde archivos en almacenamiento cloud hacia una tabla Delta. Es <strong>idempotente</strong> — rastrea qué archivos ya fueron cargados y los omite al re-ejecutar. Puedes programarlo para correr repetidamente sin duplicar datos.</p>

                            <h5>Sintaxis Completa con Todas las Opciones</h5>
                            <pre><code>COPY INTO mi_catalogo.mi_schema.tabla_destino
FROM '/Volumes/catalog/schema/volume/data/'
FILEFORMAT = CSV
FORMAT_OPTIONS (
  'header' = 'true',
  'inferSchema' = 'true',
  'delimiter' = ',',
  'mergeSchema' = 'true',
  'encoding' = 'UTF-8',
  'quote' = '"',
  'escape' = '\\\\',
  'multiLine' = 'false',
  'nullValue' = 'NA',
  'dateFormat' = 'yyyy-MM-dd',
  'timestampFormat' = 'yyyy-MM-dd HH:mm:ss'
)
COPY_OPTIONS (
  'mergeSchema' = 'true',
  'force' = 'false'
);</code></pre>

                            <h5>FORMAT_OPTIONS — ¿Qué Hace Cada Una?</h5>
                            ${styleBox('blue', 'FORMAT_OPTIONS Clave para el Examen')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Opción</th><th>Valores</th><th>Por qué Importa</th></tr>
                                    <tr><td><code>header</code></td><td>'true' / 'false'</td><td>Si el CSV tiene encabezados. <strong>Default es false</strong> — sin esto crea columnas col1, col2...</td></tr>
                                    <tr><td><code>inferSchema</code></td><td>'true' / 'false'</td><td>Auto-detectar tipos de datos. Default false = todas las columnas como STRING</td></tr>
                                    <tr><td><code>delimiter</code></td><td>',', '\\t', '|'</td><td>Separador de columnas. Default coma. Archivos TSV necesitan '\\t'</td></tr>
                                    <tr><td><code>mergeSchema</code></td><td>'true' / 'false'</td><td>Permite agregar columnas nuevas si el archivo fuente tiene columnas extra</td></tr>
                                    <tr><td><code>multiLine</code></td><td>'true' / 'false'</td><td>Manejar registros JSON que abarcan múltiples líneas. Default false por rendimiento</td></tr>
                                    <tr><td><code>rescuedDataColumn</code></td><td>'_rescued_data'</td><td>Pone columnas malformadas/extra en una columna de rescate en vez de fallar</td></tr>
                                </table>
                            </div>

                            <h5>COPY_OPTIONS — Controlar Comportamiento</h5>
                            ${styleBox('yellow', 'COPY_OPTIONS Clave para el Examen')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Opción</th><th>Efecto</th><th>Escenario de Examen</th></tr>
                                    <tr><td><code>force = 'true'</code></td><td>Recarga TODOS los archivos, incluso los previamente cargados</td><td>"El analista necesita recargar todos los archivos después de un cambio de esquema"</td></tr>
                                    <tr><td><code>force = 'false'</code></td><td><strong>Default</strong>. Omite archivos ya cargados (comportamiento idempotente)</td><td>"Ejecutar de forma segura en un horario sin duplicados"</td></tr>
                                    <tr><td><code>mergeSchema</code></td><td>Evoluciona el esquema de la tabla destino si aparecen columnas nuevas</td><td>"Nuevos archivos CSV tienen una columna extra"</td></tr>
                                </table>
                            </div>

                            <h5>Cómo Funciona la Idempotencia Internamente</h5>
                            <ul>
                                <li>COPY INTO almacena un <strong>manifiesto a nivel de archivo</strong> de rutas cargadas en el log de transacciones de Delta</li>
                                <li>En cada ejecución, <strong>lista el directorio fuente</strong> y compara contra el manifiesto</li>
                                <li>Solo procesa <strong>archivos nuevos</strong> (que no están en el manifiesto)</li>
                                <li>Por eso se llama <strong>semántica exactly-once</strong></li>
                                <li><strong>Limitación:</strong> Si modificas un archivo ya cargado, COPY INTO NO lo re-procesará (a menos que uses <code>force = 'true'</code>)</li>
                            </ul>

                            <h5>Formatos de Archivo Soportados</h5>
                            <p><code>CSV</code>, <code>JSON</code>, <code>PARQUET</code>, <code>AVRO</code>, <code>ORC</code>, <code>XML</code>, <code>TEXT</code>, <code>BINARYFILE</code></p>

                            <h5>Ubicaciones Fuente Soportadas</h5>
                            <ul>
                                <li><code>/Volumes/catalog/schema/volume/</code> — Unity Catalog Volumes (recomendado)</li>
                                <li><code>s3://bucket/path/</code> — AWS S3</li>
                                <li><code>abfss://container@account.dfs.core.windows.net/</code> — Azure Data Lake</li>
                                <li><code>gs://bucket/path/</code> — Google Cloud Storage</li>
                                <li><code>dbfs:/mnt/path/</code> — Legacy DBFS mounts (no recomendado para trabajo nuevo)</li>
                            </ul>

                            ${styleBox('green', 'Cuándo Elegir COPY INTO')}
                                <ul>
                                    <li>Ingesta batch de <strong>miles</strong> de archivos (no millones)</li>
                                    <li>Backfills históricos de una sola vez</li>
                                    <li>Cargas periódicas programadas (diario/semanal vía Databricks Workflows)</li>
                                    <li>Ingesta ad-hoc o prueba de concepto</li>
                                    <li>Cuando quieres una <strong>solución puramente SQL</strong> (no necesitas Python/PySpark)</li>
                                </ul>
                            </div>

                            ${styleBox('red', 'Cuándo NO Usar COPY INTO')}
                                <ul>
                                    <li><strong>Millones de archivos</strong> → El listado de directorio se vuelve muy lento → Usa <strong>Auto Loader</strong></li>
                                    <li><strong>Ingesta continua/tiempo real</strong> → Usa <strong>Auto Loader</strong> (streaming)</li>
                                    <li><strong>Datos de otra tabla/query</strong> → Usa <strong>CTAS</strong> o <strong>INSERT INTO...SELECT</strong></li>
                                    <li><strong>Archivos modificados que necesitas releer</strong> → Auto Loader maneja esto mejor</li>
                                </ul>
                            </div>

                            ${styleBox('yellow', 'Patrón de Decisión en el Examen')}
                                <p><strong>Pregunta: "Un analista necesita cargar archivos CSV desde cloud storage a una tabla Delta..."</strong></p>
                                <p>Busca estas palabras clave:</p>
                                <ul>
                                    <li>"batch" + "archivos" + "cloud storage" + "SQL" → <strong>COPY INTO</strong></li>
                                    <li>"idempotente" o "sin duplicados" → <strong>COPY INTO</strong></li>
                                    <li>"programado" + "periódico" → <strong>COPY INTO</strong></li>
                                    <li>"escalable" o "millones" o "continuo" → <strong>Auto Loader</strong></li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Auto Loader (cloudFiles) — When Scale Matters",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Definition')}
                                <strong>Auto Loader</strong> automatically detects and processes <strong>new files</strong> as they arrive in cloud storage. It uses Structured Streaming with the <code>cloudFiles</code> data source. <strong>Databricks recommends Auto Loader over COPY INTO</strong> for production workloads.
                            </div>

                            <h5>Why Auto Loader Exists</h5>
                            <p>COPY INTO works by <strong>listing the entire directory</strong> every time it runs. When you have millions of files, this listing operation becomes extremely slow and expensive. Auto Loader solves this by using <strong>file notification</strong> (cloud events) instead of directory listing.</p>

                            <h5>Two File Discovery Modes</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Mode</th><th>How It Works</th><th>Best For</th></tr>
                                <tr>
                                    <td><strong>Directory Listing</strong><br><code>cloudFiles.useNotifications = false</code></td>
                                    <td>Incrementally lists directory, tracks progress via RocksDB checkpoint</td>
                                    <td>Quick setup, <10K files per batch, testing</td>
                                </tr>
                                <tr>
                                    <td><strong>File Notification</strong><br><code>cloudFiles.useNotifications = true</code></td>
                                    <td>Sets up cloud notifications (S3 Events/Azure Events/GCS Pub/Sub) to detect new files in near real-time</td>
                                    <td><strong>Production</strong>, millions+ files, lowest latency</td>
                                </tr>
                            </table>

                            <h5>Schema Evolution (Automatic)</h5>
                            ${styleBox('green', 'Auto Loader Schema Features')}
                                <ul>
                                    <li><strong>Schema inference:</strong> Automatically detects schema from the first batch of files</li>
                                    <li><strong>Schema evolution:</strong> When new columns appear in source files, Auto Loader can automatically add them to the Delta table</li>
                                    <li><strong>Schema hints:</strong> You can optionally provide <code>cloudFiles.schemaHints</code> to override inferred types</li>
                                    <li><strong>Rescued data column:</strong> Columns that don't match the schema go into <code>_rescued_data</code> instead of being dropped</li>
                                </ul>
                            </div>

                            <h5>COPY INTO vs Auto Loader — Complete Comparison</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>COPY INTO</th><th>Auto Loader</th></tr>
                                <tr><td><strong>Language</strong></td><td>Pure SQL</td><td>PySpark / DLT (SQL wrapper exists in DLT)</td></tr>
                                <tr><td><strong>Scale</strong></td><td>Thousands of files</td><td><strong>Millions/Billions</strong> of files</td></tr>
                                <tr><td><strong>Mode</strong></td><td>Batch only</td><td><strong>Streaming + Batch</strong> (trigger once)</td></tr>
                                <tr><td><strong>File Discovery</strong></td><td>Full directory listing each run</td><td><strong>File notification</strong> (event-driven)</td></tr>
                                <tr><td><strong>Schema</strong></td><td>mergeSchema option manually</td><td><strong>Automatic inference & evolution</strong></td></tr>
                                <tr><td><strong>Checkpointing</strong></td><td>File path tracking in Delta log</td><td><strong>RocksDB checkpoint</strong> (more efficient)</td></tr>
                                <tr><td><strong>Exactly-once</strong></td><td>Yes, via file manifest</td><td>Yes, via checkpoint + idempotent writes</td></tr>
                                <tr><td><strong>Recommended for</strong></td><td>Ad-hoc, PoC, small scheduled batches</td><td><strong>Production pipelines</strong></td></tr>
                                <tr><td><strong>Works with DLT</strong></td><td>No</td><td><strong>Yes — primary ingestion method for DLT</strong></td></tr>
                            </table>

                            ${styleBox('yellow', 'Exam Tip — How to Decide')}
                                <p>The exam tests <strong>WHY</strong> you choose one over the other. Decision criteria:</p>
                                <ul>
                                    <li><strong>Scalability needed?</strong> → Auto Loader (directories with millions of files)</li>
                                    <li><strong>Continuous/streaming ingestion?</strong> → Auto Loader</li>
                                    <li><strong>Pure SQL requirement?</strong> → COPY INTO (no need for notebook/PySpark)</li>
                                    <li><strong>Production pipeline?</strong> → Databricks recommends Auto Loader</li>
                                    <li><strong>DLT pipeline?</strong> → Auto Loader is the standard ingestion source for DLT</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Definición')}
                                <strong>Auto Loader</strong> detecta y procesa automáticamente <strong>archivos nuevos</strong> conforme llegan al almacenamiento cloud. Usa Structured Streaming con la fuente <code>cloudFiles</code>. <strong>Databricks recomienda Auto Loader sobre COPY INTO</strong> para cargas de trabajo en producción.
                            </div>

                            <h5>¿Por Qué Existe Auto Loader?</h5>
                            <p>COPY INTO funciona <strong>listando todo el directorio</strong> cada vez que se ejecuta. Con millones de archivos, esta operación de listado se vuelve extremadamente lenta y costosa. Auto Loader resuelve esto usando <strong>notificaciones de archivos</strong> (eventos cloud) en vez de listar directorios.</p>

                            <h5>Dos Modos de Descubrimiento de Archivos</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Modo</th><th>Cómo Funciona</th><th>Mejor Para</th></tr>
                                <tr>
                                    <td><strong>Listado de Directorio</strong><br><code>cloudFiles.useNotifications = false</code></td>
                                    <td>Lista directorio incrementalmente, rastrea progreso vía checkpoint RocksDB</td>
                                    <td>Setup rápido, <10K archivos por batch, pruebas</td>
                                </tr>
                                <tr>
                                    <td><strong>Notificación de Archivos</strong><br><code>cloudFiles.useNotifications = true</code></td>
                                    <td>Configura notificaciones cloud (S3 Events/Azure Events/GCS Pub/Sub) para detectar archivos nuevos en casi tiempo real</td>
                                    <td><strong>Producción</strong>, millones+ de archivos, menor latencia</td>
                                </tr>
                            </table>

                            <h5>Evolución de Esquema (Automática)</h5>
                            ${styleBox('green', 'Características de Esquema de Auto Loader')}
                                <ul>
                                    <li><strong>Inferencia de esquema:</strong> Detecta automáticamente el esquema del primer batch de archivos</li>
                                    <li><strong>Evolución de esquema:</strong> Cuando aparecen columnas nuevas, Auto Loader puede agregarlas automáticamente a la tabla Delta</li>
                                    <li><strong>Schema hints:</strong> Puedes proveer <code>cloudFiles.schemaHints</code> para sobrescribir tipos inferidos</li>
                                    <li><strong>Columna de datos rescatados:</strong> Columnas que no coinciden van a <code>_rescued_data</code> en vez de perderse</li>
                                </ul>
                            </div>

                            <h5>COPY INTO vs Auto Loader — Comparación Completa</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>COPY INTO</th><th>Auto Loader</th></tr>
                                <tr><td><strong>Lenguaje</strong></td><td>SQL puro</td><td>PySpark / DLT (wrapper SQL existe en DLT)</td></tr>
                                <tr><td><strong>Escala</strong></td><td>Miles de archivos</td><td><strong>Millones/Billones</strong> de archivos</td></tr>
                                <tr><td><strong>Modo</strong></td><td>Solo batch</td><td><strong>Streaming + Batch</strong> (trigger once)</td></tr>
                                <tr><td><strong>Descubrimiento</strong></td><td>Listado completo de directorio cada vez</td><td><strong>Notificación de archivos</strong> (event-driven)</td></tr>
                                <tr><td><strong>Esquema</strong></td><td>mergeSchema manualmente</td><td><strong>Inferencia y evolución automática</strong></td></tr>
                                <tr><td><strong>Checkpointing</strong></td><td>Rastreo de rutas en Delta log</td><td><strong>Checkpoint RocksDB</strong> (más eficiente)</td></tr>
                                <tr><td><strong>Exactly-once</strong></td><td>Sí, vía manifiesto de archivos</td><td>Sí, vía checkpoint + escrituras idempotentes</td></tr>
                                <tr><td><strong>Recomendado para</strong></td><td>Ad-hoc, PoC, batches programados pequeños</td><td><strong>Pipelines de producción</strong></td></tr>
                                <tr><td><strong>Funciona con DLT</strong></td><td>No</td><td><strong>Sí — método principal de ingesta para DLT</strong></td></tr>
                            </table>

                            ${styleBox('yellow', 'Dato de Examen — Cómo Decidir')}
                                <p>El examen evalúa <strong>POR QUÉ</strong> eliges uno sobre el otro. Criterios de decisión:</p>
                                <ul>
                                    <li><strong>¿Necesitas escalabilidad?</strong> → Auto Loader (directorios con millones de archivos)</li>
                                    <li><strong>¿Ingesta continua/streaming?</strong> → Auto Loader</li>
                                    <li><strong>¿Requisito de SQL puro?</strong> → COPY INTO (no necesita notebook/PySpark)</li>
                                    <li><strong>¿Pipeline de producción?</strong> → Databricks recomienda Auto Loader</li>
                                    <li><strong>¿Pipeline DLT?</strong> → Auto Loader es la fuente estándar de ingesta para DLT</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.3 CTAS, read_files() & INSERT INTO...SELECT",
                    content: `
                        ${langSection('en', `
                            <h5>CREATE TABLE AS SELECT (CTAS)</h5>
                            <pre><code>-- Create a new table from a query result
CREATE TABLE gold.clean_sales AS
SELECT 
    customer_id,
    product_name,
    CAST(amount AS DECIMAL(10,2)) AS amount,
    order_date
FROM bronze.raw_sales
WHERE region IS NOT NULL
  AND amount > 0;</code></pre>
                            <p><strong>Key facts for the exam:</strong></p>
                            <ul>
                                <li><strong>NOT idempotent</strong> — running it twice FAILS because the table already exists</li>
                                <li>Creates a <strong>new managed Delta table</strong> by default</li>
                                <li>Data is <strong>copied</strong> at creation time (snapshot, not live link)</li>
                                <li>Schema comes from the SELECT query — you don't define columns manually</li>
                                <li>Best for <strong>one-time transformations</strong> (bronze → silver → gold)</li>
                            </ul>

                            <h5>CREATE OR REPLACE TABLE AS SELECT</h5>
                            <pre><code>-- Idempotent version — replaces if exists
CREATE OR REPLACE TABLE gold.clean_sales AS
SELECT * FROM bronze.raw_sales
WHERE region IS NOT NULL;</code></pre>
                            <p><code>CREATE OR REPLACE</code> makes CTAS idempotent. The entire table is <strong>replaced</strong> each time — all previous data is gone.</p>

                            <h5>INSERT INTO...SELECT</h5>
                            <pre><code>-- Append data from one table to another
INSERT INTO gold.daily_summary
SELECT 
    DATE(order_date) AS day,
    COUNT(*) AS order_count,
    SUM(amount) AS total_revenue
FROM silver.orders
WHERE order_date = CURRENT_DATE() - INTERVAL 1 DAY;</code></pre>
                            <p><strong>Key difference from CTAS:</strong> INSERT INTO <strong>appends</strong> data to an existing table. It does NOT create a new table. The target table must already exist and have a compatible schema.</p>

                            <h5>INSERT INTO...TABLE (from another table)</h5>
                            <pre><code>-- Copy ALL data from source table into target table
INSERT INTO stakeholders.suppliers
TABLE stakeholders.new_suppliers;</code></pre>
                            <p>The <code>TABLE</code> keyword is shorthand for <code>SELECT * FROM</code>. <strong>Includes duplicates</strong> — it does NOT deduplicate.</p>

                            <h5>read_files() — Ad-hoc File Exploration</h5>
                            <pre><code>-- Read files directly without creating a table
SELECT * FROM read_files(
  '/Volumes/catalog/schema/vol/sales_2024.csv',
  format => 'csv',
  header => true,
  inferSchema => true
);

-- Combine with CTAS for quick table creation
CREATE TABLE bronze.raw_data AS
SELECT * FROM read_files(
  '/Volumes/catalog/schema/vol/*.json',
  format => 'json',
  multiLine => true
);</code></pre>
                            ${styleBox('green', 'When to Use read_files()')}
                                <ul>
                                    <li>Quick <strong>data exploration</strong> without creating tables</li>
                                    <li><strong>Preview</strong> file contents before deciding on ingestion method</li>
                                    <li>Supports <strong>auto schema detection</strong> and rescued data column</li>
                                    <li>Works inside <code>SELECT</code> statements — great for ad-hoc SQL queries</li>
                                    <li>Can use wildcards: <code>/path/*.csv</code>, <code>/path/**/*.json</code></li>
                                </ul>
                            </div>

                            ${styleBox('yellow', 'Exam Decision: CTAS vs INSERT INTO vs COPY INTO')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Scenario</th><th>Use This</th><th>Why</th></tr>
                                    <tr><td>Create new table from query result</td><td><strong>CTAS</strong></td><td>One-time snapshot from another table/query</td></tr>
                                    <tr><td>Append rows to existing table</td><td><strong>INSERT INTO...SELECT</strong></td><td>Table already exists, add new data</td></tr>
                                    <tr><td>Load files from cloud storage</td><td><strong>COPY INTO</strong></td><td>Files, not tables, are the source</td></tr>
                                    <tr><td>Quick file preview</td><td><strong>read_files()</strong></td><td>No table creation needed</td></tr>
                                </table>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>CREATE TABLE AS SELECT (CTAS)</h5>
                            <pre><code>-- Crear una tabla nueva desde un resultado de query
CREATE TABLE gold.ventas_limpias AS
SELECT 
    customer_id,
    product_name,
    CAST(amount AS DECIMAL(10,2)) AS monto,
    order_date
FROM bronze.ventas_raw
WHERE region IS NOT NULL
  AND amount > 0;</code></pre>
                            <p><strong>Datos clave para el examen:</strong></p>
                            <ul>
                                <li><strong>NO es idempotente</strong> — ejecutar dos veces FALLA porque la tabla ya existe</li>
                                <li>Crea una <strong>tabla Delta administrada</strong> por defecto</li>
                                <li>Los datos se <strong>copian</strong> al momento de creación (snapshot, no enlace en vivo)</li>
                                <li>El esquema viene del query SELECT — no defines columnas manualmente</li>
                                <li>Ideal para <strong>transformaciones únicas</strong> (bronze → silver → gold)</li>
                            </ul>

                            <h5>CREATE OR REPLACE TABLE AS SELECT</h5>
                            <pre><code>-- Versión idempotente — reemplaza si existe
CREATE OR REPLACE TABLE gold.ventas_limpias AS
SELECT * FROM bronze.ventas_raw
WHERE region IS NOT NULL;</code></pre>
                            <p><code>CREATE OR REPLACE</code> hace CTAS idempotente. La tabla completa se <strong>reemplaza</strong> cada vez — todos los datos previos se eliminan.</p>

                            <h5>INSERT INTO...SELECT</h5>
                            <pre><code>-- Agregar datos de una tabla a otra
INSERT INTO gold.resumen_diario
SELECT 
    DATE(order_date) AS dia,
    COUNT(*) AS total_ordenes,
    SUM(amount) AS ingresos_totales
FROM silver.ordenes
WHERE order_date = CURRENT_DATE() - INTERVAL 1 DAY;</code></pre>
                            <p><strong>Diferencia clave con CTAS:</strong> INSERT INTO <strong>agrega</strong> datos a una tabla existente. NO crea una tabla nueva. La tabla destino debe existir y tener un esquema compatible.</p>

                            <h5>INSERT INTO...TABLE (desde otra tabla)</h5>
                            <pre><code>-- Copiar TODOS los datos de tabla fuente a tabla destino
INSERT INTO stakeholders.suppliers
TABLE stakeholders.new_suppliers;</code></pre>
                            <p>La palabra <code>TABLE</code> es atajo para <code>SELECT * FROM</code>. <strong>Incluye duplicados</strong> — NO deduplica.</p>

                            <h5>read_files() — Exploración Ad-hoc</h5>
                            <pre><code>-- Leer archivos directamente sin crear tabla
SELECT * FROM read_files(
  '/Volumes/catalog/schema/vol/ventas_2024.csv',
  format => 'csv',
  header => true,
  inferSchema => true
);

-- Combinar con CTAS para creación rápida de tabla
CREATE TABLE bronze.datos_raw AS
SELECT * FROM read_files(
  '/Volumes/catalog/schema/vol/*.json',
  format => 'json',
  multiLine => true
);</code></pre>

                            ${styleBox('green', 'Cuándo Usar read_files()')}
                                <ul>
                                    <li><strong>Exploración de datos</strong> rápida sin crear tablas</li>
                                    <li><strong>Previsualizar</strong> contenido de archivos antes de decidir método de ingesta</li>
                                    <li>Soporta <strong>detección automática de esquema</strong> y columna de datos rescatados</li>
                                    <li>Funciona dentro de sentencias <code>SELECT</code> — ideal para queries SQL ad-hoc</li>
                                    <li>Puede usar wildcards: <code>/path/*.csv</code>, <code>/path/**/*.json</code></li>
                                </ul>
                            </div>

                            ${styleBox('yellow', 'Decisión de Examen: CTAS vs INSERT INTO vs COPY INTO')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Escenario</th><th>Usar Esto</th><th>Por Qué</th></tr>
                                    <tr><td>Crear tabla nueva desde query</td><td><strong>CTAS</strong></td><td>Snapshot único desde otra tabla/query</td></tr>
                                    <tr><td>Agregar filas a tabla existente</td><td><strong>INSERT INTO...SELECT</strong></td><td>La tabla ya existe, agregar datos nuevos</td></tr>
                                    <tr><td>Cargar archivos desde cloud</td><td><strong>COPY INTO</strong></td><td>Archivos, no tablas, son la fuente</td></tr>
                                    <tr><td>Vista previa rápida de archivo</td><td><strong>read_files()</strong></td><td>No se necesita crear tabla</td></tr>
                                </table>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.4 External Tables & LOCATION Clause",
                    content: `
                        ${langSection('en', `
                            <h5>External Tables — Data Lives Outside Databricks</h5>
                            <p>An <strong>external table</strong> (also called "unmanaged table") stores its data in a location YOU specify, outside the managed storage of Unity Catalog. When you DROP the table, <strong>only the metadata is removed</strong> — the data files remain untouched.</p>

                            <h5>Creating an External Table with LOCATION</h5>
                            <pre><code>-- The LOCATION clause specifies where the data files live
CREATE TABLE my_catalog.my_schema.external_sales (
    id INT,
    product STRING,
    amount DECIMAL(10,2),
    sale_date DATE
)
USING DELTA
LOCATION 's3://my-bucket/data/sales/';

-- Or using object storage path directly
CREATE TABLE external_logs
USING CSV
LOCATION 'abfss://container@account.dfs.core.windows.net/logs/'
OPTIONS (header = 'true', inferSchema = 'true');</code></pre>

                            <h5>Managed vs External Tables — Critical Exam Topic</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Behavior</th><th>Managed Table</th><th>External Table</th></tr>
                                <tr><td><strong>Data location</strong></td><td>Controlled by Unity Catalog</td><td>You choose via <code>LOCATION</code></td></tr>
                                <tr><td><strong>DROP TABLE effect</strong></td><td>Deletes <strong>metadata AND data files</strong></td><td>Deletes <strong>metadata ONLY</strong> — data files remain</td></tr>
                                <tr><td><strong>Created with</strong></td><td><code>CREATE TABLE</code> (no LOCATION)</td><td><code>CREATE TABLE ... LOCATION</code></td></tr>
                                <tr><td><strong>Data governance</strong></td><td>Full Unity Catalog control</td><td>UC controls metadata; storage admin controls files</td></tr>
                                <tr><td><strong>Use case</strong></td><td>Standard analytics tables</td><td>Shared data, legacy systems, cross-platform access</td></tr>
                            </table>

                            ${styleBox('red', 'Common Exam Trap')}
                                <p><strong>Q: "After running DROP TABLE, the data files still exist. Why?"</strong></p>
                                <p><strong>A:</strong> Because the table was <strong>EXTERNAL</strong>. When you drop an external table, Databricks only removes the metadata from the metastore. The underlying data files in the external storage location remain untouched.</p>
                                <p><strong>How to verify:</strong> Run <code>DESCRIBE EXTENDED table_name</code> and check the <code>Type</code> field. If it says <code>EXTERNAL</code>, dropping won't delete data.</p>
                            </div>

                            <pre><code>-- Check if a table is managed or external
DESCRIBE EXTENDED my_catalog.my_schema.my_table;

-- Look for these fields in the output:
-- Type: MANAGED  →  DROP deletes everything
-- Type: EXTERNAL →  DROP keeps data files</code></pre>

                            ${styleBox('yellow', 'Why LOCATION and Not FROM or PATH?')}
                                <p>The exam may try to trick you with fake keywords:</p>
                                <ul>
                                    <li><code>LOCATION</code> — <strong>Correct</strong>. Standard SQL clause for specifying external data path</li>
                                    <li><code>FROM</code> — <strong>Wrong</strong>. FROM is for SELECT queries, not table creation</li>
                                    <li><code>PATH</code> — <strong>Wrong</strong>. Not a valid keyword in CREATE TABLE syntax</li>
                                    <li><code>OPTIONS(path = '...')</code> — Valid but not the standard approach for external tables</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Tablas Externas — Los Datos Viven Fuera de Databricks</h5>
                            <p>Una <strong>tabla externa</strong> (también llamada "tabla no administrada") almacena sus datos en una ubicación que TÚ especificas, fuera del almacenamiento administrado de Unity Catalog. Al hacer DROP, <strong>solo se elimina la metadata</strong> — los archivos de datos permanecen intactos.</p>

                            <h5>Crear una Tabla Externa con LOCATION</h5>
                            <pre><code>-- La cláusula LOCATION especifica dónde viven los archivos
CREATE TABLE mi_catalogo.mi_schema.ventas_externas (
    id INT,
    producto STRING,
    monto DECIMAL(10,2),
    fecha_venta DATE
)
USING DELTA
LOCATION 's3://mi-bucket/data/ventas/';

-- O usando ruta de object storage directamente
CREATE TABLE logs_externos
USING CSV
LOCATION 'abfss://container@account.dfs.core.windows.net/logs/'
OPTIONS (header = 'true', inferSchema = 'true');</code></pre>

                            <h5>Managed vs External — Tema Crítico de Examen</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Comportamiento</th><th>Tabla Managed</th><th>Tabla External</th></tr>
                                <tr><td><strong>Ubicación de datos</strong></td><td>Controlada por Unity Catalog</td><td>Tú eliges vía <code>LOCATION</code></td></tr>
                                <tr><td><strong>Efecto de DROP TABLE</strong></td><td>Elimina <strong>metadata Y archivos de datos</strong></td><td>Elimina <strong>solo metadata</strong> — archivos permanecen</td></tr>
                                <tr><td><strong>Creada con</strong></td><td><code>CREATE TABLE</code> (sin LOCATION)</td><td><code>CREATE TABLE ... LOCATION</code></td></tr>
                                <tr><td><strong>Gobernanza de datos</strong></td><td>Control total de Unity Catalog</td><td>UC controla metadata; admin de storage controla archivos</td></tr>
                                <tr><td><strong>Caso de uso</strong></td><td>Tablas analíticas estándar</td><td>Datos compartidos, sistemas legacy, acceso multi-plataforma</td></tr>
                            </table>

                            ${styleBox('red', 'Trampa Común de Examen')}
                                <p><strong>P: "Después de ejecutar DROP TABLE, los archivos de datos aún existen. ¿Por qué?"</strong></p>
                                <p><strong>R:</strong> Porque la tabla era <strong>EXTERNAL</strong>. Al eliminar una tabla externa, Databricks solo remueve la metadata del metastore. Los archivos de datos subyacentes permanecen intactos.</p>
                                <p><strong>Cómo verificar:</strong> Ejecuta <code>DESCRIBE EXTENDED nombre_tabla</code> y revisa el campo <code>Type</code>. Si dice <code>EXTERNAL</code>, hacer dropping no borrará datos.</p>
                            </div>

                            <pre><code>-- Verificar si una tabla es managed o external
DESCRIBE EXTENDED mi_catalogo.mi_schema.mi_tabla;

-- Busca estos campos en la salida:
-- Type: MANAGED  →  DROP elimina todo
-- Type: EXTERNAL →  DROP mantiene archivos de datos</code></pre>

                            ${styleBox('yellow', '¿Por Qué LOCATION y No FROM o PATH?')}
                                <p>El examen puede intentar engañarte con keywords falsos:</p>
                                <ul>
                                    <li><code>LOCATION</code> — <strong>Correcto</strong>. Cláusula SQL estándar para rutas de datos externos</li>
                                    <li><code>FROM</code> — <strong>Incorrecto</strong>. FROM es para queries SELECT</li>
                                    <li><code>PATH</code> — <strong>Incorrecto</strong>. No es un keyword válido en CREATE TABLE</li>
                                    <li><code>OPTIONS(path = '...')</code> — Válido pero no es el enfoque estándar para tablas externas</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.5 Partner Connect, Delta Sharing & Marketplace",
                    content: `
                        ${langSection('en', `
                            <h5>Partner Connect — One-Click Integrations</h5>
                            <p>Partner Connect provides <strong>automated setup</strong> for third-party integrations. When you connect a partner tool, Databricks automatically:</p>
                            <ul>
                                <li>Creates a <strong>SQL Warehouse</strong> (not a cluster!) for the partner to interact with</li>
                                <li>Generates a <strong>Service Principal</strong> with appropriate permissions</li>
                                <li>Provides the partner with connection credentials</li>
                            </ul>

                            <h5>Supported Partners (Exam-relevant)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Partner</th><th>Category</th><th>What It Does</th></tr>
                                <tr><td><strong>Fivetran</strong></td><td>Data Ingestion</td><td>Extracts data from 300+ SaaS sources (Salesforce, HubSpot, etc.) into Databricks</td></tr>
                                <tr><td><strong>dbt</strong></td><td>Transformation</td><td>SQL-based transformation framework for the data warehouse</td></tr>
                                <tr><td><strong>Rivery</strong></td><td>Data Integration</td><td>ELT platform for data pipelines</td></tr>
                                <tr><td><strong>Tableau</strong></td><td>Visualization</td><td>Enterprise BI and visualization</td></tr>
                                <tr><td><strong>Power BI</strong></td><td>Visualization</td><td>Microsoft BI tool with DirectQuery support</td></tr>
                            </table>

                            ${styleBox('red', 'Exam Trap — Partner Connect Creates SQL Warehouse, NOT Cluster')}
                                <p>The exam often tests whether Partner Connect creates a "cluster" or "SQL warehouse." The answer is always <strong>SQL Warehouse</strong> (formerly SQL endpoint). Options mentioning "cluster" are distractors.</p>
                            </div>

                            <h5>Delta Sharing — Cross-Organization Data Sharing</h5>
                            <pre><code>-- Provider: Share a table
CREATE SHARE my_share;
ALTER SHARE my_share ADD TABLE gold.public_metrics;

-- Provider: Grant access to a recipient
CREATE RECIPIENT partner_org
  USING ID 'sharing_identifier';
GRANT SELECT ON SHARE my_share TO RECIPIENT partner_org;</code></pre>
                            <ul>
                                <li>Open protocol for sharing <strong>live data across organizations</strong> without copying data</li>
                                <li>Recipients <strong>don't need Databricks</strong> — they can use any client that supports Delta Sharing (Spark, pandas, Power BI)</li>
                                <li>Supports sharing <strong>tables, views, volumes, and ML models</strong></li>
                                <li>Data stays in the provider's account — <strong>no data movement</strong></li>
                            </ul>

                            <h5>Databricks Marketplace</h5>
                            <ul>
                                <li>Discover and import <strong>third-party datasets, notebooks, and models</strong></li>
                                <li>Built on top of <strong>Delta Sharing</strong></li>
                                <li>No need to build ingestion pipelines for commonly-used public datasets</li>
                                <li>Examples: weather data, financial data, demographic data</li>
                            </ul>

                            <h5>Unity Catalog Volumes</h5>
                            <pre><code>-- Create a managed volume
CREATE VOLUME my_catalog.my_schema.raw_files;

-- Create an external volume
CREATE EXTERNAL VOLUME my_catalog.my_schema.ext_files
LOCATION 's3://bucket/non-tabular-data/';

-- Reference files with POSIX-style paths
SELECT * FROM read_files(
  '/Volumes/my_catalog/my_schema/raw_files/data.csv',
  format => 'csv', header => true
);</code></pre>
                            ${styleBox('blue', 'Volumes Extend Governance to Non-Tabular Files')}
                                <ul>
                                    <li>Govern <strong>non-tabular files</strong>: PDFs, images, logs, model artifacts</li>
                                    <li>POSIX-style paths: <code>/Volumes/catalog/schema/volume_name/</code></li>
                                    <li>Can be <strong>managed</strong> (UC controls storage) or <strong>external</strong> (you choose location)</li>
                                    <li>Permissions controlled through Unity Catalog</li>
                                </ul>
                            </div>

                            <h5>File Upload (UI)</h5>
                            <p>Upload files up to <strong>5 GB</strong> via workspace UI directly to Unity Catalog Volumes. Best for quick ad-hoc loads of small files.</p>
                        `)}
                        ${langSection('es', `
                            <h5>Partner Connect — Integraciones con Un Clic</h5>
                            <p>Partner Connect proporciona <strong>configuración automatizada</strong> para integraciones de terceros. Al conectar un partner, Databricks automáticamente:</p>
                            <ul>
                                <li>Crea un <strong>SQL Warehouse</strong> (¡no un cluster!) para que el partner interactúe</li>
                                <li>Genera un <strong>Service Principal</strong> con permisos apropiados</li>
                                <li>Proporciona al partner las credenciales de conexión</li>
                            </ul>

                            <h5>Partners Soportados (Relevantes para Examen)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Partner</th><th>Categoría</th><th>Qué Hace</th></tr>
                                <tr><td><strong>Fivetran</strong></td><td>Ingesta de Datos</td><td>Extrae datos de 300+ fuentes SaaS (Salesforce, HubSpot, etc.) hacia Databricks</td></tr>
                                <tr><td><strong>dbt</strong></td><td>Transformación</td><td>Framework de transformación basado en SQL para data warehouse</td></tr>
                                <tr><td><strong>Rivery</strong></td><td>Integración de Datos</td><td>Plataforma ELT para pipelines de datos</td></tr>
                                <tr><td><strong>Tableau</strong></td><td>Visualización</td><td>BI empresarial y visualización</td></tr>
                                <tr><td><strong>Power BI</strong></td><td>Visualización</td><td>Herramienta BI de Microsoft con soporte DirectQuery</td></tr>
                            </table>

                            ${styleBox('red', 'Trampa de Examen — Partner Connect Crea SQL Warehouse, NO Cluster')}
                                <p>El examen frecuentemente evalúa si Partner Connect crea un "cluster" o "SQL warehouse." La respuesta es siempre <strong>SQL Warehouse</strong>. Las opciones que mencionan "cluster" son distractores.</p>
                            </div>

                            <h5>Delta Sharing — Compartir Datos Entre Organizaciones</h5>
                            <pre><code>-- Proveedor: Compartir una tabla
CREATE SHARE mi_share;
ALTER SHARE mi_share ADD TABLE gold.metricas_publicas;

-- Proveedor: Dar acceso a un destinatario
CREATE RECIPIENT org_partner
  USING ID 'sharing_identifier';
GRANT SELECT ON SHARE mi_share TO RECIPIENT org_partner;</code></pre>
                            <ul>
                                <li>Protocolo abierto para compartir <strong>datos en vivo entre organizaciones</strong> sin copiar datos</li>
                                <li>Los destinatarios <strong>no necesitan Databricks</strong> — pueden usar cualquier cliente que soporte Delta Sharing (Spark, pandas, Power BI)</li>
                                <li>Soporta compartir <strong>tablas, vistas, volúmenes y modelos ML</strong></li>
                                <li>Los datos permanecen en la cuenta del proveedor — <strong>sin movimiento de datos</strong></li>
                            </ul>

                            <h5>Databricks Marketplace</h5>
                            <ul>
                                <li>Descubre e importa <strong>datasets, notebooks y modelos de terceros</strong></li>
                                <li>Construido sobre <strong>Delta Sharing</strong></li>
                                <li>Sin necesidad de construir pipelines de ingesta para datasets públicos comunes</li>
                                <li>Ejemplos: datos climáticos, financieros, demográficos</li>
                            </ul>

                            <h5>Unity Catalog Volumes</h5>
                            <pre><code>-- Crear un volumen administrado
CREATE VOLUME mi_catalogo.mi_schema.archivos_raw;

-- Crear un volumen externo
CREATE EXTERNAL VOLUME mi_catalogo.mi_schema.archivos_ext
LOCATION 's3://bucket/datos-no-tabulares/';

-- Referenciar archivos con rutas POSIX
SELECT * FROM read_files(
  '/Volumes/mi_catalogo/mi_schema/archivos_raw/data.csv',
  format => 'csv', header => true
);</code></pre>
                            ${styleBox('blue', 'Volumes Extienden Gobernanza a Archivos No Tabulares')}
                                <ul>
                                    <li>Gobernar <strong>archivos no tabulares</strong>: PDFs, imágenes, logs, artefactos de modelos</li>
                                    <li>Rutas POSIX: <code>/Volumes/catalog/schema/volume_name/</code></li>
                                    <li>Pueden ser <strong>managed</strong> (UC controla almacenamiento) o <strong>external</strong> (tú eliges ubicación)</li>
                                    <li>Permisos controlados a través de Unity Catalog</li>
                                </ul>
                            </div>

                            <h5>Carga de Archivos (UI)</h5>
                            <p>Sube archivos de hasta <strong>5 GB</strong> vía la UI del workspace directamente a Unity Catalog Volumes. Ideal para cargas rápidas ad-hoc de archivos pequeños.</p>
                        `)}
                    `
                },
                {
                    title: "1.6 Error Handling & Data Quality in Imports",
                    content: `
                        ${langSection('en', `
                            <h5>Error Handling Modes</h5>
                            <p>When importing data, some records may be malformed (wrong types, missing fields, corrupt rows). Databricks gives you options for how to handle these:</p>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Mode</th><th>Behavior</th><th>Use When</th></tr>
                                <tr>
                                    <td><strong>PERMISSIVE</strong> (default)</td>
                                    <td>Puts malformed fields as <code>null</code> and optionally saves raw data in <code>_corrupt_record</code> or <code>_rescued_data</code></td>
                                    <td>You want to load all data and fix issues later</td>
                                </tr>
                                <tr>
                                    <td><strong>FAILFAST</strong></td>
                                    <td>Throws an exception immediately when any malformed record is encountered</td>
                                    <td>Data quality is critical — you want to know immediately if something is wrong</td>
                                </tr>
                                <tr>
                                    <td><strong>DROPMALFORMED</strong></td>
                                    <td>Silently drops/skips rows that don't match the expected schema</td>
                                    <td>You can tolerate some data loss in exchange for clean data</td>
                                </tr>
                            </table>

                            <h5>Rescued Data Column</h5>
                            <pre><code>-- Use rescued data column to capture mismatched data
COPY INTO my_table
FROM '/Volumes/catalog/schema/vol/data/'
FILEFORMAT = JSON
FORMAT_OPTIONS (
  'rescuedDataColumn' = '_rescued_data'
);

-- Then query to find problematic records
SELECT _rescued_data, *
FROM my_table
WHERE _rescued_data IS NOT NULL;</code></pre>
                            ${styleBox('green', 'What Goes Into _rescued_data?')}
                                <ul>
                                    <li>Columns that <strong>don't match the target schema</strong> (extra columns in source file)</li>
                                    <li>Values that <strong>can't be cast</strong> to the expected data type</li>
                                    <li>Stored as a <strong>JSON string</strong> so you can inspect and fix issues</li>
                                    <li>This is the <strong>safest approach</strong> — you never lose data, just redirect issues</li>
                                </ul>
                            </div>

                            <h5>Schema Enforcement vs Schema Evolution</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Schema Enforcement</th><th>Schema Evolution</th></tr>
                                <tr><td><strong>What it does</strong></td><td>Rejects writes that don't match the table schema</td><td>Automatically adds new columns from source data</td></tr>
                                <tr><td><strong>Default behavior</strong></td><td><strong>Enabled by default</strong> on Delta tables</td><td>Disabled by default — must opt in</td></tr>
                                <tr><td><strong>Activate with</strong></td><td>Automatic (Delta feature)</td><td><code>mergeSchema = 'true'</code></td></tr>
                                <tr><td><strong>Exam keyword</strong></td><td>"reject", "prevent", "strict"</td><td>"add columns", "evolve", "merge"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Exam Scenario: "New CSV files have additional columns..."')}
                                <p><strong>Q:</strong> "A data analyst receives new CSV files with an extra 'discount' column that doesn't exist in the target table. What should they do?"</p>
                                <p><strong>A:</strong> Use <code>mergeSchema = 'true'</code> in either <code>FORMAT_OPTIONS</code> or <code>COPY_OPTIONS</code> to automatically add the new column to the Delta table.</p>
                                <pre><code>COPY INTO sales_table
FROM '/Volumes/data/new_files/'
FILEFORMAT = CSV
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')
COPY_OPTIONS ('mergeSchema' = 'true');</code></pre>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Modos de Manejo de Errores</h5>
                            <p>Al importar datos, algunos registros pueden estar malformados (tipos incorrectos, campos faltantes, filas corruptas). Databricks te da opciones para manejarlos:</p>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Modo</th><th>Comportamiento</th><th>Usar Cuando</th></tr>
                                <tr>
                                    <td><strong>PERMISSIVE</strong> (default)</td>
                                    <td>Pone campos malformados como <code>null</code> y opcionalmente guarda datos raw en <code>_corrupt_record</code> o <code>_rescued_data</code></td>
                                    <td>Quieres cargar todos los datos y arreglar problemas después</td>
                                </tr>
                                <tr>
                                    <td><strong>FAILFAST</strong></td>
                                    <td>Lanza una excepción inmediatamente cuando encuentra un registro malformado</td>
                                    <td>La calidad de datos es crítica — quieres saber inmediatamente si algo está mal</td>
                                </tr>
                                <tr>
                                    <td><strong>DROPMALFORMED</strong></td>
                                    <td>Descarta/omite silenciosamente filas que no coinciden con el esquema esperado</td>
                                    <td>Puedes tolerar algo de pérdida de datos a cambio de datos limpios</td>
                                </tr>
                            </table>

                            <h5>Columna de Datos Rescatados</h5>
                            <pre><code>-- Usar columna de datos rescatados para capturar datos que no coinciden
COPY INTO mi_tabla
FROM '/Volumes/catalog/schema/vol/data/'
FILEFORMAT = JSON
FORMAT_OPTIONS (
  'rescuedDataColumn' = '_rescued_data'
);

-- Luego consultar para encontrar registros problemáticos
SELECT _rescued_data, *
FROM mi_tabla
WHERE _rescued_data IS NOT NULL;</code></pre>

                            ${styleBox('green', '¿Qué Va en _rescued_data?')}
                                <ul>
                                    <li>Columnas que <strong>no coinciden con el esquema destino</strong></li>
                                    <li>Valores que <strong>no se pueden convertir</strong> al tipo de dato esperado</li>
                                    <li>Se almacena como <strong>string JSON</strong> para que puedas inspeccionar y arreglar</li>
                                    <li>Es el <strong>enfoque más seguro</strong> — nunca pierdes datos</li>
                                </ul>
                            </div>

                            <h5>Schema Enforcement vs Schema Evolution</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Schema Enforcement</th><th>Schema Evolution</th></tr>
                                <tr><td><strong>Qué hace</strong></td><td>Rechaza escrituras que no coinciden con el esquema</td><td>Agrega automáticamente columnas nuevas desde datos fuente</td></tr>
                                <tr><td><strong>Comportamiento default</strong></td><td><strong>Habilitado por default</strong> en tablas Delta</td><td>Deshabilitado — debes activarlo</td></tr>
                                <tr><td><strong>Activar con</strong></td><td>Automático (feature de Delta)</td><td><code>mergeSchema = 'true'</code></td></tr>
                                <tr><td><strong>Keyword de examen</strong></td><td>"rechazar", "prevenir", "estricto"</td><td>"agregar columnas", "evolucionar", "merge"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Escenario de Examen: "Archivos CSV nuevos tienen columnas adicionales..."')}
                                <p><strong>P:</strong> "Un analista recibe archivos CSV nuevos con una columna extra 'descuento'. ¿Qué debe hacer?"</p>
                                <p><strong>R:</strong> Usar <code>mergeSchema = 'true'</code> en <code>FORMAT_OPTIONS</code> o <code>COPY_OPTIONS</code> para agregar automáticamente la nueva columna a la tabla Delta.</p>
                                <pre><code>COPY INTO tabla_ventas
FROM '/Volumes/data/archivos_nuevos/'
FILEFORMAT = CSV
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')
COPY_OPTIONS ('mergeSchema' = 'true');</code></pre>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.7 Master Decision Tree & Exam Strategy",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'MASTER THIS: Complete Decision Tree')}
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
Where does the data come from?
│
├── FILES in cloud storage (S3/ADLS/GCS/Volumes)
│   ├── How many files?
│   │   ├── Thousands, batch loads → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── Millions+, production scale → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   ├── How frequently?
│   │   ├── One-time or scheduled → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── Continuous / near real-time → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   ├── What language?
│   │   ├── Pure SQL needed → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── PySpark/DLT available → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   └── Just exploring? → <strong style="color:#10b981">read_files()</strong>
│
├── ANOTHER TABLE or QUERY RESULT
│   ├── Create new table → <strong style="color:#10b981">CTAS</strong>
│   ├── Append to existing table → <strong style="color:#10b981">INSERT INTO...SELECT</strong>
│   └── Full replace → <strong style="color:#10b981">CREATE OR REPLACE TABLE AS</strong>
│
├── EXTERNAL SaaS/API (Salesforce, HubSpot, etc.)
│   └── → <strong style="color:#10b981">Partner Connect</strong> (Fivetran, Rivery)
│
├── ANOTHER ORGANIZATION's data
│   └── → <strong style="color:#10b981">Delta Sharing</strong>
│
├── PUBLIC DATASETS (weather, financial, etc.)
│   └── → <strong style="color:#10b981">Databricks Marketplace</strong>
│
└── SMALL LOCAL FILE (< 5 GB)
    └── → <strong style="color:#10b981">UI File Upload</strong> to Volumes
                                </pre>
                            </div>

                            <h5>Quick Reference: Exam Keyword → Answer Mapping</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>If the Question Says...</th><th>The Answer Is...</th><th>Why</th></tr>
                                <tr><td>"load files from cloud storage" + "SQL"</td><td><strong>COPY INTO</strong></td><td>SQL command for file ingestion</td></tr>
                                <tr><td>"scalable" + "millions of files"</td><td><strong>Auto Loader</strong></td><td>File notification handles scale</td></tr>
                                <tr><td>"continuous" or "streaming" ingestion</td><td><strong>Auto Loader</strong></td><td>Structured Streaming based</td></tr>
                                <tr><td>"production pipeline" + "recommended"</td><td><strong>Auto Loader</strong></td><td>Databricks official recommendation</td></tr>
                                <tr><td>"create table from query"</td><td><strong>CTAS</strong></td><td>No file source, just SQL logic</td></tr>
                                <tr><td>"append data to existing table"</td><td><strong>INSERT INTO</strong></td><td>Table already exists</td></tr>
                                <tr><td>"connect Fivetran" or "Partner Connect"</td><td><strong>SQL Warehouse</strong></td><td>Partner Connect creates SQL Warehouse (NOT cluster)</td></tr>
                                <tr><td>"share data without copying"</td><td><strong>Delta Sharing</strong></td><td>Open protocol, no data movement</td></tr>
                                <tr><td>"external table" + "DROP" + "data remains"</td><td><strong>LOCATION clause</strong></td><td>External tables only drop metadata</td></tr>
                                <tr><td>"cloud storage path" + "CREATE TABLE"</td><td><strong>LOCATION</strong></td><td>Not FROM, not PATH—only LOCATION</td></tr>
                                <tr><td>"new columns in source files"</td><td><strong>mergeSchema = true</strong></td><td>Schema evolution</td></tr>
                                <tr><td>"malformed data" + "don't lose"</td><td><strong>rescuedDataColumn</strong></td><td>Captures bad data instead of dropping</td></tr>
                                <tr><td>"explore file without table"</td><td><strong>read_files()</strong></td><td>Ad-hoc file reading</td></tr>
                                <tr><td>"govern non-tabular files"</td><td><strong>Unity Catalog Volumes</strong></td><td>PDFs, images, logs governance</td></tr>
                            </table>

                            ${styleBox('yellow', 'Top 5 Exam Traps to Avoid')}
                                <ol>
                                    <li><strong>COPY INTO is NOT for table-to-table operations</strong> — Use CTAS or INSERT INTO for that</li>
                                    <li><strong>Partner Connect creates SQL Warehouse, NOT cluster</strong> — Any option with "cluster" is wrong</li>
                                    <li><strong>External table DROP keeps data files</strong> — Managed table DROP deletes everything</li>
                                    <li><strong>COPY INTO does NOT re-process modified files</strong> — Use <code>force = 'true'</code> or Auto Loader</li>
                                    <li><strong>The keyword is LOCATION, not FROM or PATH</strong> — For external table data path</li>
                                </ol>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'DOMINA ESTO: Árbol de Decisión Completo')}
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:16px;border-radius:8px;font-size:13px;line-height:1.8">
¿De dónde vienen los datos?
│
├── ARCHIVOS en cloud storage (S3/ADLS/GCS/Volumes)
│   ├── ¿Cuántos archivos?
│   │   ├── Miles, cargas batch → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── Millones+, escala producción → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   ├── ¿Con qué frecuencia?
│   │   ├── Una vez o programado → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── Continuo / casi tiempo real → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   ├── ¿Qué lenguaje?
│   │   ├── SQL puro necesario → <strong style="color:#10b981">COPY INTO</strong>
│   │   └── PySpark/DLT disponible → <strong style="color:#10b981">Auto Loader</strong>
│   │
│   └── ¿Solo explorando? → <strong style="color:#10b981">read_files()</strong>
│
├── OTRA TABLA o RESULTADO DE QUERY
│   ├── Crear tabla nueva → <strong style="color:#10b981">CTAS</strong>
│   ├── Agregar a tabla existente → <strong style="color:#10b981">INSERT INTO...SELECT</strong>
│   └── Reemplazo completo → <strong style="color:#10b981">CREATE OR REPLACE TABLE AS</strong>
│
├── SaaS/API EXTERNO (Salesforce, HubSpot, etc.)
│   └── → <strong style="color:#10b981">Partner Connect</strong> (Fivetran, Rivery)
│
├── DATOS DE OTRA ORGANIZACIÓN
│   └── → <strong style="color:#10b981">Delta Sharing</strong>
│
├── DATASETS PÚBLICOS
│   └── → <strong style="color:#10b981">Databricks Marketplace</strong>
│
└── ARCHIVO LOCAL PEQUEÑO (< 5 GB)
    └── → <strong style="color:#10b981">UI File Upload</strong> a Volumes
                                </pre>
                            </div>

                            <h5>Referencia Rápida: Palabra Clave de Examen → Respuesta</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Si la Pregunta Dice...</th><th>La Respuesta Es...</th><th>Por Qué</th></tr>
                                <tr><td>"cargar archivos desde cloud storage" + "SQL"</td><td><strong>COPY INTO</strong></td><td>Comando SQL para ingesta de archivos</td></tr>
                                <tr><td>"escalable" + "millones de archivos"</td><td><strong>Auto Loader</strong></td><td>Notificación de archivos maneja escala</td></tr>
                                <tr><td>"continuo" o "streaming"</td><td><strong>Auto Loader</strong></td><td>Basado en Structured Streaming</td></tr>
                                <tr><td>"pipeline de producción" + "recomendado"</td><td><strong>Auto Loader</strong></td><td>Recomendación oficial de Databricks</td></tr>
                                <tr><td>"crear tabla desde query"</td><td><strong>CTAS</strong></td><td>Sin fuente de archivos, solo lógica SQL</td></tr>
                                <tr><td>"conectar Fivetran" o "Partner Connect"</td><td><strong>SQL Warehouse</strong></td><td>Partner Connect crea SQL Warehouse (NO cluster)</td></tr>
                                <tr><td>"compartir datos sin copiar"</td><td><strong>Delta Sharing</strong></td><td>Protocolo abierto, sin mover datos</td></tr>
                                <tr><td>"tabla externa" + "DROP" + "datos permanecen"</td><td><strong>Cláusula LOCATION</strong></td><td>Tablas externas solo eliminan metadata</td></tr>
                                <tr><td>"columnas nuevas en archivos fuente"</td><td><strong>mergeSchema = true</strong></td><td>Evolución de esquema</td></tr>
                                <tr><td>"datos malformados" + "no perder"</td><td><strong>rescuedDataColumn</strong></td><td>Captura datos malos en vez de descartarlos</td></tr>
                                <tr><td>"agregar datos a tabla existente"</td><td><strong>INSERT INTO</strong></td><td>La tabla ya existe</td></tr>
                                <tr><td>"ruta cloud storage" + "CREATE TABLE"</td><td><strong>LOCATION</strong></td><td>No FROM, no PATH—solo LOCATION</td></tr>
                                <tr><td>"explorar archivo sin crear tabla"</td><td><strong>read_files()</strong></td><td>Lectura ad-hoc de archivos</td></tr>
                                <tr><td>"gobernar archivos no tabulares"</td><td><strong>Unity Catalog Volumes</strong></td><td>Gobernanza de PDFs, imágenes, logs</td></tr>
                            </table>

                            ${styleBox('yellow', 'Top 5 Trampas de Examen a Evitar')}
                                <ol>
                                    <li><strong>COPY INTO NO es para operaciones tabla-a-tabla</strong> — Usa CTAS o INSERT INTO para eso</li>
                                    <li><strong>Partner Connect crea SQL Warehouse, NO cluster</strong> — Cualquier opción con "cluster" es incorrecta</li>
                                    <li><strong>DROP de tabla externa mantiene archivos de datos</strong> — DROP de tabla managed elimina todo</li>
                                    <li><strong>COPY INTO NO re-procesa archivos modificados</strong> — Usa <code>force = 'true'</code> o Auto Loader</li>
                                    <li><strong>El keyword es LOCATION, no FROM ni PATH</strong> — Para ruta de datos de tabla externa</li>
                                </ol>
                            </div>
                        `)}
                    `
                }
            ]
        },
        {
            title: 'U1.B Importing Data — Advanced Concepts (Exam Gaps)',
            items: [
                {
                    title: "1.8 INSERT OVERWRITE, Temp Views & CREATE TABLE LIKE",
                    content: `
                        ${langSection('en', `
                            <h5>INSERT OVERWRITE — Truncate + Reload Pattern</h5>
                            <pre><code>-- Replaces ALL existing data in the table with the query result
INSERT OVERWRITE gold.daily_summary
SELECT 
    DATE(order_date) AS day,
    COUNT(*) AS order_count,
    SUM(amount) AS total_revenue
FROM silver.orders
WHERE order_date >= CURRENT_DATE() - INTERVAL 30 DAY;

-- Important: INSERT OVERWRITE is ATOMIC (all-or-nothing)
-- If the query fails, the original data remains intact</code></pre>
                            ${styleBox('blue', 'INSERT OVERWRITE vs INSERT INTO vs CTAS')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Command</th><th>Creates Table?</th><th>Keeps Old Data?</th><th>Idempotent?</th></tr>
                                    <tr><td><code>INSERT INTO</code></td><td>No — table must exist</td><td>Yes — appends</td><td>No — duplicates on re-run</td></tr>
                                    <tr><td><code>INSERT OVERWRITE</code></td><td>No — table must exist</td><td>No — replaces all rows</td><td>Yes — same result each run</td></tr>
                                    <tr><td><code>CTAS</code></td><td>Yes — creates new table</td><td>N/A</td><td>No — fails if table exists</td></tr>
                                    <tr><td><code>CREATE OR REPLACE</code></td><td>Yes — drops + recreates</td><td>No — full replace</td><td>Yes</td></tr>
                                </table>
                            </div>
                            ${styleBox('yellow', 'Exam Trap: INSERT OVERWRITE vs DELETE + INSERT')}
                                <p><strong>Q:</strong> "An analyst wants to refresh a summary table daily with only the latest 30 days. What approach is best?"</p>
                                <p><strong>A:</strong> <code>INSERT OVERWRITE</code> — It atomically replaces all data. Using <code>DELETE</code> followed by <code>INSERT INTO</code> is <strong>NOT atomic</strong> — if the INSERT fails, you lose data.</p>
                            </div>

                            <h5>Temporary Views — Session-Scoped SQL Objects</h5>
                            <pre><code>-- Create a temporary view (only exists for current session)
CREATE TEMP VIEW recent_orders AS
SELECT * FROM gold.orders
WHERE order_date >= CURRENT_DATE() - INTERVAL 7 DAY;

-- Use it like a table
SELECT region, SUM(amount) FROM recent_orders
GROUP BY region;

-- Also valid syntax:
CREATE TEMPORARY VIEW my_view AS ...
CREATE OR REPLACE TEMP VIEW my_view AS ...</code></pre>
                            ${styleBox('green', 'Key Facts About Temp Views')}
                                <ul>
                                    <li><strong>Session-scoped</strong> — disappears when session ends or notebook detaches</li>
                                    <li><strong>Not stored in Unity Catalog</strong> — invisible to other users</li>
                                    <li><strong>No data stored</strong> — it's just a named query (like a CTE that you can reuse)</li>
                                    <li><strong>Perfect for:</strong> exploratory analysis, staging complex queries, notebook-based workflows</li>
                                    <li><strong>Cannot be shared</strong> across sessions, notebooks, or users</li>
                                </ul>
                            </div>
                            ${styleBox('red', 'Exam Trap: Temp View vs Persistent View vs Table')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Feature</th><th>Temp View</th><th>View</th><th>Table</th></tr>
                                    <tr><td><strong>Stores data?</strong></td><td>No</td><td>No</td><td>Yes</td></tr>
                                    <tr><td><strong>Persists after session?</strong></td><td>No</td><td>Yes</td><td>Yes</td></tr>
                                    <tr><td><strong>In Unity Catalog?</strong></td><td>No</td><td>Yes</td><td>Yes</td></tr>
                                    <tr><td><strong>Shareable?</strong></td><td>No</td><td>Yes (with permissions)</td><td>Yes</td></tr>
                                </table>
                            </div>

                            <h5>CREATE TABLE LIKE — Copy Schema Without Data</h5>
                            <pre><code>-- Create a new table with the SAME schema but NO data
CREATE TABLE staging.sales_backup
LIKE gold.sales;

-- Then populate it:
INSERT INTO staging.sales_backup
SELECT * FROM gold.sales WHERE year = 2024;</code></pre>
                            <p><strong>Exam context:</strong> "The analyst needs a new empty table with the same structure." The answer is <code>CREATE TABLE LIKE</code>, NOT <code>CTAS</code> (which copies data too).</p>
                        `)}
                        ${langSection('es', `
                            <h5>INSERT OVERWRITE — Patrón Truncar + Recargar</h5>
                            <pre><code>-- Reemplaza TODOS los datos existentes con el resultado del query
INSERT OVERWRITE gold.resumen_diario
SELECT 
    DATE(order_date) AS dia,
    COUNT(*) AS total_ordenes,
    SUM(amount) AS ingresos
FROM silver.ordenes
WHERE order_date >= CURRENT_DATE() - INTERVAL 30 DAY;

-- INSERT OVERWRITE es ATÓMICO (todo o nada)
-- Si el query falla, los datos originales permanecen intactos</code></pre>
                            ${styleBox('blue', 'INSERT OVERWRITE vs INSERT INTO vs CTAS')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Comando</th><th>Crea Tabla?</th><th>Mantiene Datos Viejos?</th><th>Idempotente?</th></tr>
                                    <tr><td><code>INSERT INTO</code></td><td>No — tabla debe existir</td><td>Sí — agrega</td><td>No — duplica al re-ejecutar</td></tr>
                                    <tr><td><code>INSERT OVERWRITE</code></td><td>No — tabla debe existir</td><td>No — reemplaza todo</td><td>Sí — mismo resultado cada vez</td></tr>
                                    <tr><td><code>CTAS</code></td><td>Sí — crea tabla nueva</td><td>N/A</td><td>No — falla si tabla existe</td></tr>
                                    <tr><td><code>CREATE OR REPLACE</code></td><td>Sí — elimina + recrea</td><td>No — reemplazo total</td><td>Sí</td></tr>
                                </table>
                            </div>
                            ${styleBox('yellow', 'Trampa de Examen: INSERT OVERWRITE vs DELETE + INSERT')}
                                <p><strong>P:</strong> "Un analista quiere refrescar una tabla resumen diariamente con solo los últimos 30 días. ¿Cuál es el mejor enfoque?"</p>
                                <p><strong>R:</strong> <code>INSERT OVERWRITE</code> — Reemplaza atómicamente. Usar <code>DELETE</code> seguido de <code>INSERT INTO</code> <strong>NO es atómico</strong> — si falla el INSERT, pierdes datos.</p>
                            </div>

                            <h5>Vistas Temporales — Objetos SQL de Sesión</h5>
                            <pre><code>-- Crear una vista temporal (solo existe en la sesión actual)
CREATE TEMP VIEW ordenes_recientes AS
SELECT * FROM gold.ordenes
WHERE order_date >= CURRENT_DATE() - INTERVAL 7 DAY;

-- Usarla como tabla
SELECT region, SUM(monto) FROM ordenes_recientes
GROUP BY region;

-- Sintaxis también válida:
CREATE TEMPORARY VIEW mi_vista AS ...
CREATE OR REPLACE TEMP VIEW mi_vista AS ...</code></pre>
                            ${styleBox('green', 'Datos Clave sobre Vistas Temporales')}
                                <ul>
                                    <li><strong>Alcance de sesión</strong> — desaparece cuando la sesión termina o el notebook se desconecta</li>
                                    <li><strong>No se almacena en Unity Catalog</strong> — invisible para otros usuarios</li>
                                    <li><strong>No almacena datos</strong> — es solo un query con nombre (como un CTE reutilizable)</li>
                                    <li><strong>Perfecta para:</strong> análisis exploratorio, staging de queries complejos, workflows con notebooks</li>
                                    <li><strong>No se puede compartir</strong> entre sesiones, notebooks o usuarios</li>
                                </ul>
                            </div>
                            ${styleBox('red', 'Trampa de Examen: Temp View vs Vista Persistente vs Tabla')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Característica</th><th>Temp View</th><th>Vista</th><th>Tabla</th></tr>
                                    <tr><td><strong>¿Almacena datos?</strong></td><td>No</td><td>No</td><td>Sí</td></tr>
                                    <tr><td><strong>¿Persiste tras sesión?</strong></td><td>No</td><td>Sí</td><td>Sí</td></tr>
                                    <tr><td><strong>¿En Unity Catalog?</strong></td><td>No</td><td>Sí</td><td>Sí</td></tr>
                                    <tr><td><strong>¿Compartible?</strong></td><td>No</td><td>Sí (con permisos)</td><td>Sí</td></tr>
                                </table>
                            </div>

                            <h5>CREATE TABLE LIKE — Copiar Esquema Sin Datos</h5>
                            <pre><code>-- Crear tabla nueva con el MISMO esquema pero SIN datos
CREATE TABLE staging.ventas_backup
LIKE gold.ventas;

-- Luego poblarla:
INSERT INTO staging.ventas_backup
SELECT * FROM gold.ventas WHERE anio = 2024;</code></pre>
                            <p><strong>Contexto de examen:</strong> "El analista necesita una tabla vacía con la misma estructura." La respuesta es <code>CREATE TABLE LIKE</code>, NO <code>CTAS</code> (que copia datos también).</p>
                        `)}
                    `
                },
                {
                    title: "1.9 Unity Catalog Namespace & Lakeflow Connect",
                    content: `
                        ${langSection('en', `
                            <h5>Unity Catalog 3-Level Namespace</h5>
                            <p>Every data object in Databricks follows the <strong>3-level namespace</strong>:</p>
                            <pre><code>catalog.schema.object

-- Examples:
SELECT * FROM main.default.customers;
CREATE TABLE analytics.sales.monthly_revenue AS ...;
GRANT SELECT ON TABLE prod.finance.budget TO analyst_team;</code></pre>
                            ${styleBox('blue', 'Namespace Hierarchy')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Level</th><th>Purpose</th><th>Analogy</th></tr>
                                    <tr><td><strong>Catalog</strong></td><td>Top-level container (like a database server)</td><td>Environment (prod, dev, staging)</td></tr>
                                    <tr><td><strong>Schema</strong></td><td>Logical grouping within a catalog (like a database)</td><td>Department or domain (sales, finance)</td></tr>
                                    <tr><td><strong>Object</strong></td><td>Table, View, Volume, Function, Model</td><td>The actual data asset</td></tr>
                                </table>
                            </div>
                            ${styleBox('yellow', 'Exam Questions Test This Constantly')}
                                <ul>
                                    <li>"Which statement correctly references a table?" → <code>catalog.schema.table</code></li>
                                    <li>Options with 2 levels (<code>schema.table</code>) are wrong unless a <strong>default catalog</strong> is set</li>
                                    <li><code>USE CATALOG my_catalog;</code> sets the default catalog for the session</li>
                                    <li><code>USE SCHEMA my_schema;</code> sets the default schema</li>
                                    <li>With both defaults set, you can use just the table name</li>
                                </ul>
                            </div>

                            <h5>Lakeflow Connect — No-Code Data Ingestion</h5>
                            ${styleBox('blue', 'What is Lakeflow Connect?')}
                                <p>Databricks-native, <strong>no-code/low-code ingestion</strong> tool that connects to external databases and applications:</p>
                                <ul>
                                    <li><strong>Databases:</strong> MySQL, PostgreSQL, SQL Server, Oracle</li>
                                    <li><strong>Applications:</strong> Salesforce, Workday, SAP</li>
                                    <li><strong>Streaming:</strong> Kafka, Kinesis</li>
                                </ul>
                                <p><strong>Key distinction from Partner Connect:</strong></p>
                                <ul>
                                    <li><strong>Lakeflow Connect</strong> = Databricks-native connectors (built-in, managed by Databricks)</li>
                                    <li><strong>Partner Connect</strong> = Third-party tools (Fivetran, dbt) that Databricks configures for you</li>
                                </ul>
                            </div>

                            <h5>Data Import Method — Complete Summary</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Method</th><th>Source Type</th><th>Language</th><th>Scale</th><th>Best For</th></tr>
                                <tr><td><strong>COPY INTO</strong></td><td>Cloud files</td><td>SQL</td><td>Thousands</td><td>Batch, scheduled, ad-hoc</td></tr>
                                <tr><td><strong>Auto Loader</strong></td><td>Cloud files</td><td>PySpark</td><td>Millions+</td><td>Production, streaming</td></tr>
                                <tr><td><strong>read_files()</strong></td><td>Cloud files</td><td>SQL</td><td>Any</td><td>Exploration, preview</td></tr>
                                <tr><td><strong>CTAS</strong></td><td>Query/Table</td><td>SQL</td><td>Any</td><td>One-time transformation</td></tr>
                                <tr><td><strong>INSERT INTO</strong></td><td>Query/Table</td><td>SQL</td><td>Any</td><td>Append to existing</td></tr>
                                <tr><td><strong>INSERT OVERWRITE</strong></td><td>Query/Table</td><td>SQL</td><td>Any</td><td>Atomic full refresh</td></tr>
                                <tr><td><strong>Partner Connect</strong></td><td>SaaS/API</td><td>UI</td><td>Varies</td><td>Third-party tools</td></tr>
                                <tr><td><strong>Lakeflow Connect</strong></td><td>DB/Apps</td><td>UI</td><td>Large</td><td>Native connectors</td></tr>
                                <tr><td><strong>Delta Sharing</strong></td><td>Org-to-Org</td><td>SQL</td><td>Any</td><td>Cross-org, no copy</td></tr>
                                <tr><td><strong>Marketplace</strong></td><td>Public data</td><td>UI</td><td>Any</td><td>Pre-built datasets</td></tr>
                                <tr><td><strong>UI Upload</strong></td><td>Local file</td><td>UI</td><td><5 GB</td><td>Quick ad-hoc upload</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Namespace de 3 Niveles en Unity Catalog</h5>
                            <p>Cada objeto de datos en Databricks sigue el <strong>namespace de 3 niveles</strong>:</p>
                            <pre><code>catalogo.esquema.objeto

-- Ejemplos:
SELECT * FROM main.default.customers;
CREATE TABLE analytics.ventas.ingreso_mensual AS ...;
GRANT SELECT ON TABLE prod.finanzas.presupuesto TO equipo_analistas;</code></pre>
                            ${styleBox('blue', 'Jerarquía del Namespace')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Nivel</th><th>Propósito</th><th>Analogía</th></tr>
                                    <tr><td><strong>Catalog</strong></td><td>Contenedor de nivel superior</td><td>Ambiente (prod, dev, staging)</td></tr>
                                    <tr><td><strong>Schema</strong></td><td>Agrupación lógica dentro de un catálogo</td><td>Departamento o dominio (ventas, finanzas)</td></tr>
                                    <tr><td><strong>Object</strong></td><td>Tabla, Vista, Volumen, Función, Modelo</td><td>El activo de datos real</td></tr>
                                </table>
                            </div>
                            ${styleBox('yellow', 'El Examen Evalúa Esto Constantemente')}
                                <ul>
                                    <li>"¿Qué statement referencia correctamente una tabla?" → <code>catalog.schema.table</code></li>
                                    <li>Opciones con 2 niveles (<code>schema.tabla</code>) son incorrectas a menos que haya un <strong>catálogo default</strong></li>
                                    <li><code>USE CATALOG mi_catalogo;</code> establece el catálogo default para la sesión</li>
                                    <li><code>USE SCHEMA mi_schema;</code> establece el esquema default</li>
                                    <li>Con ambos defaults establecidos, puedes usar solo el nombre de la tabla</li>
                                </ul>
                            </div>

                            <h5>Lakeflow Connect — Ingesta Sin Código</h5>
                            ${styleBox('blue', '¿Qué es Lakeflow Connect?')}
                                <p>Herramienta nativa de Databricks para ingesta <strong>no-code/low-code</strong> que conecta bases de datos y aplicaciones externas:</p>
                                <ul>
                                    <li><strong>Bases de datos:</strong> MySQL, PostgreSQL, SQL Server, Oracle</li>
                                    <li><strong>Aplicaciones:</strong> Salesforce, Workday, SAP</li>
                                    <li><strong>Streaming:</strong> Kafka, Kinesis</li>
                                </ul>
                                <p><strong>Distinción clave con Partner Connect:</strong></p>
                                <ul>
                                    <li><strong>Lakeflow Connect</strong> = Conectores nativos de Databricks (built-in)</li>
                                    <li><strong>Partner Connect</strong> = Herramientas de terceros (Fivetran, dbt) que Databricks configura por ti</li>
                                </ul>
                            </div>

                            <h5>Métodos de Importación — Resumen Completo</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Método</th><th>Tipo de Fuente</th><th>Lenguaje</th><th>Escala</th><th>Mejor Para</th></tr>
                                <tr><td><strong>COPY INTO</strong></td><td>Archivos cloud</td><td>SQL</td><td>Miles</td><td>Batch, programado, ad-hoc</td></tr>
                                <tr><td><strong>Auto Loader</strong></td><td>Archivos cloud</td><td>PySpark</td><td>Millones+</td><td>Producción, streaming</td></tr>
                                <tr><td><strong>read_files()</strong></td><td>Archivos cloud</td><td>SQL</td><td>Cualquiera</td><td>Exploración, preview</td></tr>
                                <tr><td><strong>CTAS</strong></td><td>Query/Tabla</td><td>SQL</td><td>Cualquiera</td><td>Transformación única</td></tr>
                                <tr><td><strong>INSERT INTO</strong></td><td>Query/Tabla</td><td>SQL</td><td>Cualquiera</td><td>Agregar a existente</td></tr>
                                <tr><td><strong>INSERT OVERWRITE</strong></td><td>Query/Tabla</td><td>SQL</td><td>Cualquiera</td><td>Refresh atómico completo</td></tr>
                                <tr><td><strong>Partner Connect</strong></td><td>SaaS/API</td><td>UI</td><td>Variable</td><td>Herramientas de terceros</td></tr>
                                <tr><td><strong>Lakeflow Connect</strong></td><td>DB/Apps</td><td>UI</td><td>Grande</td><td>Conectores nativos</td></tr>
                                <tr><td><strong>Delta Sharing</strong></td><td>Org a Org</td><td>SQL</td><td>Cualquiera</td><td>Cross-org, sin copia</td></tr>
                                <tr><td><strong>Marketplace</strong></td><td>Datos públicos</td><td>UI</td><td>Cualquiera</td><td>Datasets pre-construidos</td></tr>
                                <tr><td><strong>UI Upload</strong></td><td>Archivo local</td><td>UI</td><td><5 GB</td><td>Carga ad-hoc rápida</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 6: DASHBOARDS & VISUALIZATIONS (57%)
        // =====================================================
        {
            title: 'U2. Dashboards Deep Dive / Dashboards en Profundidad',
            items: [
                {
                    title: "Visualization Types & Selection Guide",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Complete Visualization Catalog')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Type</th><th>Best For</th><th>Key Exam Detail</th></tr>
                                    <tr><td><strong>Counter</strong></td><td>Single KPI value</td><td>Shows one number prominently + optional sparkline & comparison</td></tr>
                                    <tr><td><strong>Table</strong></td><td>Raw data display</td><td>Supports conditional formatting, hyperlinks, custom column ordering</td></tr>
                                    <tr><td><strong>Pivot Table</strong></td><td>Cross-tabulation</td><td>Max 1000×1000 cells; supports cross-filtering</td></tr>
                                    <tr><td><strong>Detail</strong></td><td>Single record focus</td><td>Shows one row's details in card layout</td></tr>
                                    <tr><td><strong>Line</strong></td><td>Trends over time</td><td>Supports forecasting (2025 feature)</td></tr>
                                    <tr><td><strong>Bar</strong></td><td>Category comparison</td><td>Horizontal or vertical; supports stacking</td></tr>
                                    <tr><td><strong>Pie</strong></td><td>Part-of-whole</td><td>Limit to 5-7 categories for readability</td></tr>
                                    <tr><td><strong>Scatter</strong></td><td>Correlation</td><td>Two numerical axes; optional bubble size</td></tr>
                                    <tr><td><strong>Heatmap</strong></td><td>Density/intensity</td><td>Two categorical axes + color intensity</td></tr>
                                    <tr><td><strong>Funnel</strong></td><td>Conversion stages</td><td>New in 2025; shows drop-off rates</td></tr>
                                </table>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Catálogo Completo de Visualizaciones')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Tipo</th><th>Mejor Para</th><th>Detalle de Examen</th></tr>
                                    <tr><td><strong>Counter</strong></td><td>KPI individual</td><td>Un número prominente + sparkline y comparación opcionales</td></tr>
                                    <tr><td><strong>Table</strong></td><td>Datos crudos</td><td>Formato condicional, hipervínculos, orden de columnas</td></tr>
                                    <tr><td><strong>Pivot Table</strong></td><td>Tabulación cruzada</td><td>Máx 1000×1000 celdas; soporta cross-filtering</td></tr>
                                    <tr><td><strong>Detail</strong></td><td>Registro individual</td><td>Muestra los detalles de una fila en layout de tarjeta</td></tr>
                                    <tr><td><strong>Line</strong></td><td>Tendencias en tiempo</td><td>Soporta forecasting (feature 2025)</td></tr>
                                    <tr><td><strong>Bar</strong></td><td>Comparar categorías</td><td>Horizontal o vertical; soporta stacking</td></tr>
                                    <tr><td><strong>Pie</strong></td><td>Parte del todo</td><td>Limitar a 5-7 categorías para legibilidad</td></tr>
                                    <tr><td><strong>Scatter</strong></td><td>Correlación</td><td>Dos ejes numéricos; tamaño de burbuja opcional</td></tr>
                                    <tr><td><strong>Heatmap</strong></td><td>Densidad/intensidad</td><td>Dos ejes categóricos + intensidad de color</td></tr>
                                    <tr><td><strong>Funnel</strong></td><td>Etapas de conversión</td><td>Nuevo en 2025; muestra tasas de abandono</td></tr>
                                </table>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Dashboard Permissions — CAN VIEW / CAN RUN / CAN EDIT / CAN MANAGE",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permission</th><th>View</th><th>Run/Refresh</th><th>Edit Widgets</th><th>Change Permissions</th><th>Transfer Owner</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN RUN</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN EDIT</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN MANAGE</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>OWNER</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td></tr>
                            </table>
                            ${styleBox('red', 'Exam Traps')}
                                <ul>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> <strong>CAN VIEW</strong> users can subscribe to schedules but <strong>cannot refresh</strong> queries.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> Only the <strong>Owner</strong> can transfer ownership (not CAN MANAGE).</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> <strong>Published dashboards</strong> with shared credentials let viewers run queries using the <strong>publisher's</strong> credentials.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Workspace admins</strong> automatically have CAN MANAGE on all objects.</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permiso</th><th>Ver</th><th>Ejecutar/Refrescar</th><th>Editar Widgets</th><th>Cambiar Permisos</th><th>Transferir Owner</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN RUN</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN EDIT</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>CAN MANAGE</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>OWNER</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td></tr>
                            </table>
                            ${styleBox('red', 'Trampas de Examen')}
                                <ul>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> Usuarios <strong>CAN VIEW</strong> pueden suscribirse pero <strong>no pueden refrescar</strong> queries.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> Solo el <strong>Owner</strong> puede transferir propiedad (no CAN MANAGE).</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#ef4444" stroke-width="2"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" stroke="#ef4444" stroke-width="2"/></svg> Dashboards <strong>publicados</strong> con credenciales compartidas ejecutan queries con las credenciales del <strong>publicador</strong>.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> <strong>Workspace admins</strong> automáticamente tienen CAN MANAGE en todos los objetos.</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Scheduling, Subscriptions & Alerts",
                    content: `
                        ${langSection('en', `
                            <h5>Dashboard Scheduling</h5>
                            <ul>
                                <li>Set <strong>automatic refresh intervals</strong> (1 min to 1 week).</li>
                                <li>Uses the dashboard's configured <strong>SQL Warehouse</strong>.</li>
                                <li>Populates a <strong>shared result cache</strong> — all viewers benefit.</li>
                            </ul>
                            <h5>Subscriptions</h5>
                            <ul>
                                <li>Users subscribe to receive <strong>dashboard snapshots via email, Slack, or Teams</strong>.</li>
                                <li>CAN VIEW users can subscribe to <strong>existing</strong> schedules.</li>
                                <li>Dashboard authors can add channels as subscribers.</li>
                            </ul>
                            <h5>SQL Alerts</h5>
                            ${styleBox('red', 'CRITICAL Exam Detail')}
                                <ul>
                                    <li>Alerts evaluate a query that returns <strong>one row, one column</strong>.</li>
                                    <li>Compares against a <strong>threshold</strong> (above, below, equals).</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> When a query has parameters, the alert evaluates with the <strong>DEFAULT value</strong>, not the current selection.</li>
                                    <li>Notification channels: Email, Slack, Webhooks.</li>
                                </ul>
                            </div>
                            <h5>Embedding Dashboards</h5>
                            <p>Dashboards can be embedded via <strong>iframe</strong> in external apps. Since 2025, external users (without Databricks accounts) can view embedded dashboards using a <strong>service principal</strong>.</p>
                        `)}
                        ${langSection('es', `
                            <h5>Programación de Dashboards</h5>
                            <ul>
                                <li>Intervalos de <strong>refresco automático</strong> (1 min a 1 semana).</li>
                                <li>Usa el <strong>SQL Warehouse</strong> configurado del dashboard.</li>
                                <li>Llena un <strong>caché compartido de resultados</strong> — beneficia a todos.</li>
                            </ul>
                            <h5>Suscripciones</h5>
                            <ul>
                                <li>Usuarios se suscriben para recibir <strong>snapshots de dashboards via email, Slack o Teams</strong>.</li>
                                <li>Usuarios CAN VIEW pueden suscribirse a programaciones <strong>existentes</strong>.</li>
                                <li>Los autores del dashboard pueden agregar canales como suscriptores.</li>
                            </ul>
                            <h5>SQL Alerts</h5>
                            ${styleBox('red', 'Detalle CRÍTICO de Examen')}
                                <ul>
                                    <li>Alerts evalúan query de <strong>una fila, una columna</strong>.</li>
                                    <li>Compara contra un <strong>umbral</strong> (arriba, abajo, igual).</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> Con parámetros, el alert evalúa con el <strong>valor DEFAULT</strong>, no la selección actual.</li>
                                    <li>Canales de notificación: Email, Slack, Webhooks.</li>
                                </ul>
                            </div>
                            <h5>Dashboards Embebidos</h5>
                            <p>Los dashboards pueden embeberse vía <strong>iframe</strong> en apps externas. Desde 2025, usuarios externos (sin cuenta Databricks) pueden ver dashboards embebidos usando un <strong>service principal</strong>.</p>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 7: AI/BI GENIE (60%)
        // =====================================================
        {
            title: 'U3. AI/BI Genie — Complete Mastery / Dominio Completo',
            items: [
                {
                    title: "Genie Space Architecture & Setup",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Complete Architecture')}
                                <p>A Genie Space is a <strong>conversational analytics interface</strong> where business users ask questions in natural language.</p>
                            </div>
                            <h5>Core Components</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Component</th><th>What It Is</th><th>Example</th></tr>
                                <tr><td><strong>Tables/Views</strong></td><td>Unity Catalog datasets (max <strong>30</strong> per space)</td><td>sales.gold.monthly_revenue</td></tr>
                                <tr><td><strong>Instructions</strong></td><td>Natural language business rules</td><td>"Churn = subscription cancelled within 30 days"</td></tr>
                                <tr><td><strong>Trusted Assets</strong></td><td>Pre-verified SQL queries (ground truth)</td><td>Parameterized query for monthly ARR calculation</td></tr>
                                <tr><td><strong>Sample Questions</strong></td><td>Example questions to guide Genie</td><td>"What was last quarter's revenue by region?"</td></tr>
                            </table>
                            ${styleBox('yellow', 'Best Practice: Start with 5-10 tables, < 50 columns each')}
                                Semantically connected tables perform best. Use views to clean and simplify your data before exposing it to Genie.
                            </div>
                            <h5>What Powers Genie?</h5>
                            <p>The <strong>Data Intelligence Engine</strong> uses Unity Catalog metadata, data lineage, documentation, and query history to understand your data's semantics.</p>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura Completa')}
                                <p>Un Genie Space es una <strong>interfaz de analítica conversacional</strong> donde usuarios de negocio preguntan en lenguaje natural.</p>
                            </div>
                            <h5>Componentes Principales</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Componente</th><th>Qué Es</th><th>Ejemplo</th></tr>
                                <tr><td><strong>Tables/Views</strong></td><td>Datasets de Unity Catalog (máx <strong>30</strong>)</td><td>ventas.gold.ingresos_mensuales</td></tr>
                                <tr><td><strong>Instructions</strong></td><td>Reglas de negocio en lenguaje natural</td><td>"Churn = suscripción cancelada en 30 días"</td></tr>
                                <tr><td><strong>Trusted Assets</strong></td><td>Queries SQL pre-verificadas (ground truth)</td><td>Query parametrizada para cálculo de ARR</td></tr>
                                <tr><td><strong>Sample Questions</strong></td><td>Preguntas de ejemplo para guiar a Genie</td><td>"¿Cuál fue el ingreso del último trimestre por región?"</td></tr>
                            </table>
                            ${styleBox('yellow', 'Mejor Práctica: Empieza con 5-10 tablas, < 50 columnas cada una')}
                                Tablas semánticamente conectadas funcionan mejor. Usa views para limpiar y simplificar datos antes de exponerlos a Genie.
                            </div>
                            <h5>¿Qué Impulsa a Genie?</h5>
                            <p>El <strong>Data Intelligence Engine</strong> usa metadata de Unity Catalog, linaje de datos, documentación, e historial de queries para entender la semántica de tus datos.</p>
                        `)}
                    `
                },
                {
                    title: "Genie Permissions & Trusted Assets Deep Dive",
                    content: `
                        ${langSection('en', `
                            <h5>Permission Levels</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Role</th><th>Ask Questions</th><th>Edit Instructions</th><th>Manage Trusted Assets</th><th>Change Permissions</th></tr>
                                <tr><td><strong>Viewer</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>Editor</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>Owner</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td></tr>
                            </table>
                            ${styleBox('red', 'Key Exam Points')}
                                <ul>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> Genie permissions are <strong>separate from table permissions</strong>. A user needs BOTH Genie access AND table SELECT.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> Users also need <strong>Databricks SQL access</strong> entitlement + <strong>CAN USE</strong> on the SQL Warehouse.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> When Genie uses a Trusted Asset, the response is <strong>explicitly tagged</strong> for transparency.</li>
                                </ul>
                            </div>
                            <h5>Trusted Assets vs Instructions</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspect</th><th>Instructions</th><th>Trusted Assets</th></tr>
                                <tr><td>Format</td><td>Natural language text</td><td><strong>SQL queries</strong> or UDFs</td></tr>
                                <tr><td>Purpose</td><td>Transfer business context</td><td>Provide <strong>verified, exact answers</strong></td></tr>
                                <tr><td>Trust Level</td><td>Guides Genie's interpretation</td><td><strong>Ground truth</strong> — guaranteed correct</td></tr>
                                <tr><td>Parameterized?</td><td>No</td><td><strong>Yes</strong> — SQL with parameters</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Niveles de Permiso</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Rol</th><th>Preguntar</th><th>Editar Instrucciones</th><th>Gestionar Trusted Assets</th><th>Cambiar Permisos</th></tr>
                                <tr><td><strong>Viewer</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>Editor</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg></td></tr>
                                <tr><td><strong>Owner</strong></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg></td></tr>
                            </table>
                            ${styleBox('red', 'Puntos Clave de Examen')}
                                <ul>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> Permisos de Genie son <strong>separados de permisos de tabla</strong>. Se necesitan AMBOS.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg> Usuarios necesitan <strong>Databricks SQL access</strong> + <strong>CAN USE</strong> en el SQL Warehouse.</li>
                                    <li><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Cuando Genie usa un Trusted Asset, la respuesta se <strong>etiqueta explícitamente</strong> para transparencia.</li>
                                </ul>
                            </div>
                            <h5>Trusted Assets vs Instructions</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspecto</th><th>Instructions</th><th>Trusted Assets</th></tr>
                                <tr><td>Formato</td><td>Texto en lenguaje natural</td><td><strong>Queries SQL</strong> o UDFs</td></tr>
                                <tr><td>Propósito</td><td>Transferir contexto de negocio</td><td>Proveer <strong>respuestas verificadas y exactas</strong></td></tr>
                                <tr><td>Nivel de Confianza</td><td>Guía la interpretación de Genie</td><td><strong>Ground truth</strong> — garantizado correcto</td></tr>
                                <tr><td>¿Parametrizado?</td><td>No</td><td><strong>Sí</strong> — SQL con parámetros</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 5: ANALYZING QUERIES (71%)
        // =====================================================
        {
            title: 'U4. Analyzing Queries / Análisis de Queries',
            items: [
                {
                    title: "Query Profile & Spill to Disk",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Query Profile')}
                                <p>A visual <strong>execution plan</strong> in the Databricks SQL query editor. Shows each operator as a node with metrics: CPU time, I/O wait, rows processed, and <strong>spill to disk</strong>.</p>
                            </div>
                            <h5>What is "Spill to Disk"?</h5>
                            <p>Occurs when a SQL Warehouse <strong>runs out of memory</strong> and writes temporary results to disk. This is <strong>significantly slower</strong> than in-memory processing.</p>
                            <h5>How to Fix Spill to Disk</h5>
                            <ul>
                                <li><strong>Increase warehouse size</strong> (more memory per worker).</li>
                                <li><strong>Filter early</strong> — add WHERE clauses before JOINs.</li>
                                <li><strong>Reduce data skew</strong> — use salting or repartitioning.</li>
                                <li><strong>Simplify joins</strong> — break complex queries into CTEs.</li>
                                <li><strong>Apply Liquid Clustering</strong> — improves data layout for filtering.</li>
                            </ul>
                            ${styleBox('yellow', 'EXPLAIN Command')}
                                <pre><code>EXPLAIN EXTENDED SELECT * FROM sales WHERE region = 'LATAM';</code></pre>
                                <p>Shows parsed, analyzed, optimized, and physical execution plans. Look for: <strong>Photon Scans</strong>, <strong>Shuffle Exchanges</strong>, <strong>Full Table Scans</strong>.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Query Profile')}
                                <p>Plan de <strong>ejecución visual</strong> en el editor SQL. Muestra cada operador como nodo con métricas: CPU, I/O, filas procesadas y <strong>spill to disk</strong>.</p>
                            </div>
                            <h5>¿Qué es "Spill to Disk"?</h5>
                            <p>Ocurre cuando el SQL Warehouse <strong>se queda sin memoria</strong> y escribe resultados temporales a disco. Es <strong>significativamente más lento</strong>.</p>
                            <h5>Cómo Resolver Spill to Disk</h5>
                            <ul>
                                <li><strong>Aumentar tamaño del warehouse</strong> (más memoria por worker).</li>
                                <li><strong>Filtrar temprano</strong> — agregar WHERE antes de JOINs.</li>
                                <li><strong>Reducir data skew</strong> — usar salting o repartitioning.</li>
                                <li><strong>Simplificar joins</strong> — dividir queries complejas en CTEs.</li>
                                <li><strong>Aplicar Liquid Clustering</strong> — mejora layout para filtrado.</li>
                            </ul>
                            ${styleBox('yellow', 'Comando EXPLAIN')}
                                <pre><code>EXPLAIN EXTENDED SELECT * FROM ventas WHERE region = 'LATAM';</code></pre>
                                <p>Muestra planes de ejecución. Buscar: <strong>Photon Scans</strong>, <strong>Shuffle Exchanges</strong>, <strong>Full Table Scans</strong>.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Query History & Optimization Strategies",
                    content: `
                        ${langSection('en', `
                            <h5>Query History</h5>
                            <ul>
                                <li>Access via <strong>SQL Editor → Query History</strong> tab or <code>system.query.history</code> system table.</li>
                                <li>Shows: status (Queued/Running/Finished/Failed), user, warehouse, duration, rows scanned.</li>
                                <li>Use to: establish <strong>performance baselines</strong>, detect bottlenecks, analyze cost trends.</li>
                            </ul>
                            <h5>Key Optimization Techniques</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Technique</th><th>What It Does</th><th>When to Use</th></tr>
                                <tr><td><strong>Liquid Clustering</strong></td><td>Automatically organizes data files by specified columns</td><td>Replace partitioning & Z-ORDER</td></tr>
                                <tr><td><strong>Predictive Optimization</strong></td><td>Auto-compacts files, applies clustering, collects stats</td><td>Managed Delta tables</td></tr>
                                <tr><td><strong>AQE</strong></td><td>Dynamically adjusts query plans at runtime</td><td>Enabled by default</td></tr>
                                <tr><td><strong>Photon</strong></td><td>Vectorized C++ query engine</td><td>SQL and Delta workloads</td></tr>
                                <tr><td><strong>Broadcast Join</strong></td><td>Sends small table to all workers</td><td>Small table < 10MB</td></tr>
                                <tr><td><strong>Query Result Cache</strong></td><td>Reuses results for identical queries</td><td>Auto-invalidates on data change</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Historial de Queries</h5>
                            <ul>
                                <li>Acceso: <strong>SQL Editor → Query History</strong> o tabla de sistema <code>system.query.history</code>.</li>
                                <li>Muestra: estado, usuario, warehouse, duración, filas escaneadas.</li>
                                <li>Para: establecer <strong>baselines de rendimiento</strong>, detectar cuellos de botella.</li>
                            </ul>
                            <h5>Técnicas de Optimización</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Técnica</th><th>Qué Hace</th><th>Cuándo Usar</th></tr>
                                <tr><td><strong>Liquid Clustering</strong></td><td>Organiza archivos automáticamente por columnas</td><td>Reemplaza partitioning y Z-ORDER</td></tr>
                                <tr><td><strong>Predictive Optimization</strong></td><td>Auto-compacta, aplica clustering, recolecta stats</td><td>Tablas Delta managed</td></tr>
                                <tr><td><strong>AQE</strong></td><td>Ajusta planes de query en runtime</td><td>Habilitado por defecto</td></tr>
                                <tr><td><strong>Photon</strong></td><td>Motor de queries vectorizado en C++</td><td>Workloads SQL y Delta</td></tr>
                                <tr><td><strong>Broadcast Join</strong></td><td>Envía tabla pequeña a todos los workers</td><td>Tabla pequeña < 10MB</td></tr>
                                <tr><td><strong>Query Result Cache</strong></td><td>Reutiliza resultados de queries idénticos</td><td>Se invalida automáticamente</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 8: DATA MODELING (66%)
        // =====================================================
        {
            title: 'U5. Data Modeling Deep Dive / Modelado en Profundidad',
            items: [
                {
                    title: "SCD Type 1 & Type 2 — Slowly Changing Dimensions",
                    content: `
                        ${langSection('en', `
                            <h5>Why SCDs Matter for the Exam</h5>
                            <p>SCDs manage <strong>historical changes in dimension tables</strong>. The exam tests when to use each type.</p>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspect</th><th>SCD Type 1</th><th>SCD Type 2</th></tr>
                                <tr><td>Strategy</td><td><strong>Overwrite</strong> the old value</td><td><strong>Add new row</strong> with version</td></tr>
                                <tr><td>History</td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> No history preserved</td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Full history preserved</td></tr>
                                <tr><td>Extra Columns</td><td>None needed</td><td><code>effective_date</code>, <code>end_date</code>, <code>is_current</code></td></tr>
                                <tr><td>Use Case</td><td>Corrections (fix typo in email)</td><td>Tracking changes (address history)</td></tr>
                                <tr><td>Implementation</td><td><code>MERGE ... WHEN MATCHED THEN UPDATE</code></td><td><code>MERGE</code> + insert new + close old</td></tr>
                            </table>
                            <h5>Surrogate Keys</h5>
                            <p>System-generated IDs (not business keys). Use <code>IDENTITY</code> columns for auto-increment:</p>
                            <pre><code>CREATE TABLE dim_customer (
  sk_customer BIGINT GENERATED ALWAYS AS IDENTITY,
  customer_id STRING,
  name STRING,
  effective_date DATE,
  is_current BOOLEAN
);</code></pre>
                            ${styleBox('green', 'Exam Connection')}
                                Star Schema + SCD Type 2 = Gold layer pattern for BI. Fact tables reference surrogate keys from dimension tables.
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Por Qué SCDs Importan para el Examen</h5>
                            <p>Los SCDs gestionan <strong>cambios históricos en tablas de dimensión</strong>.</p>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspecto</th><th>SCD Tipo 1</th><th>SCD Tipo 2</th></tr>
                                <tr><td>Estrategia</td><td><strong>Sobrescribir</strong> el valor antiguo</td><td><strong>Agregar fila nueva</strong> con versión</td></tr>
                                <tr><td>Historial</td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#ef4444" style="vertical-align:middle"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg> No se preserva</td><td><svg viewBox="0 0 24 24" width="14" height="14" fill="#22c55e" style="vertical-align:middle"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> Historial completo</td></tr>
                                <tr><td>Columnas Extra</td><td>Ninguna</td><td><code>effective_date</code>, <code>end_date</code>, <code>is_current</code></td></tr>
                                <tr><td>Caso de Uso</td><td>Correcciones (fix typo en email)</td><td>Rastrear cambios (historial de direcciones)</td></tr>
                                <tr><td>Implementación</td><td><code>MERGE ... WHEN MATCHED THEN UPDATE</code></td><td><code>MERGE</code> + insertar nueva + cerrar anterior</td></tr>
                            </table>
                            <h5>Surrogate Keys</h5>
                            <p>IDs generados por sistema (no claves de negocio). Usar columnas <code>IDENTITY</code> para auto-incremento:</p>
                            <pre><code>CREATE TABLE dim_cliente (
  sk_cliente BIGINT GENERATED ALWAYS AS IDENTITY,
  cliente_id STRING,
  nombre STRING,
  fecha_efectiva DATE,
  es_actual BOOLEAN
);</code></pre>
                            ${styleBox('green', 'Conexión con Examen')}
                                Star Schema + SCD Tipo 2 = patrón capa Gold para BI. Tablas de hechos referencian surrogate keys de dimensiones.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 2: MANAGING DATA (66%)
        // =====================================================
        {
            title: 'U6. Managing Data — Deep Dive / Gestión de Datos en Profundidad',
            items: [
                {
                    title: "Managed vs External Tables — Complete Rules",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspect</th><th>Managed Table</th><th>External Table</th></tr>
                                <tr><td>Storage</td><td>Unity Catalog <strong>manages</strong> location</td><td>You specify <strong>LOCATION</strong> path</td></tr>
                                <tr><td>DROP behavior</td><td><strong>Deletes metadata + data files</strong></td><td><strong>Deletes metadata only</strong> (files remain)</td></tr>
                                <tr><td>Best for</td><td>Standard analytics tables</td><td>Shared data across multiple platforms</td></tr>
                                <tr><td>Delta format?</td><td>Always Delta</td><td>Can be CSV, Parquet, JSON, Delta</td></tr>
                                <tr><td>Governance</td><td>Full Unity Catalog control</td><td>Partial — file access separate</td></tr>
                            </table>
                            ${styleBox('red', 'The #1 Exam Question')}
                                <p><strong>"What happens when you DROP an external table?"</strong></p>
                                <p>Answer: Only <strong>metadata is removed</strong> from Unity Catalog. The data files in cloud storage <strong>remain untouched</strong>.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspecto</th><th>Tabla Managed</th><th>Tabla External</th></tr>
                                <tr><td>Almacenamiento</td><td>Unity Catalog <strong>gestiona</strong> la ubicación</td><td>Tú especificas ruta <strong>LOCATION</strong></td></tr>
                                <tr><td>Comportamiento DROP</td><td><strong>Borra metadata + archivos de datos</strong></td><td><strong>Solo borra metadata</strong> (archivos permanecen)</td></tr>
                                <tr><td>Mejor para</td><td>Tablas analíticas estándar</td><td>Datos compartidos entre múltiples plataformas</td></tr>
                                <tr><td>Formato Delta?</td><td>Siempre Delta</td><td>Puede ser CSV, Parquet, JSON, Delta</td></tr>
                                <tr><td>Gobernanza</td><td>Control completo de Unity Catalog</td><td>Parcial — acceso a archivos separado</td></tr>
                            </table>
                            ${styleBox('red', 'La Pregunta #1 del Examen')}
                                <p><strong>"¿Qué pasa al hacer DROP de una tabla external?"</strong></p>
                                <p>Solo se <strong>elimina la metadata</strong>. Los archivos en cloud storage <strong>permanecen intactos</strong>.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Unity Catalog Namespace & Governance Essentials",
                    content: `
                        ${langSection('en', `
                            <h5>Three-Level Namespace</h5>
                            <pre><code>catalog.schema.table
-- Example: production.sales.monthly_revenue</code></pre>
                            <p>Every data object in Databricks uses this <strong>three-level hierarchy</strong>. The Metastore sits above all catalogs.</p>
                            <h5>Privilege Hierarchy</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Metastore Admin (highest)
└── Catalog Owner
    └── Schema Owner
        └── Table Owner
            └── GRANT SELECT/MODIFY/CREATE</pre>
                            <h5>Key SQL Commands</h5>
                            <pre><code>-- Grant read access
GRANT SELECT ON TABLE catalog.schema.table TO group_name;

-- Grant schema-level access (inherits to all tables)
GRANT USE SCHEMA ON SCHEMA catalog.schema TO group_name;

-- Transfer ownership
ALTER TABLE catalog.schema.table OWNER TO new_owner;</code></pre>
                            ${styleBox('yellow', 'Exam Essentials')}
                                <ul>
                                    <li><strong>USE CATALOG</strong> + <strong>USE SCHEMA</strong> are required to access a table.</li>
                                    <li>Privileges <strong>inherit downward</strong> (catalog → schema → table).</li>
                                    <li>Only <strong>Owner</strong> or <strong>Metastore Admin</strong> can GRANT/REVOKE.</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Namespace de Tres Niveles</h5>
                            <pre><code>catalog.schema.table
-- Ejemplo: produccion.ventas.ingresos_mensuales</code></pre>
                            <p>Todo objeto de datos usa esta <strong>jerarquía de tres niveles</strong>. El Metastore está por encima de todos los catálogos.</p>
                            <h5>Jerarquía de Privilegios</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Metastore Admin (más alto)
└── Catalog Owner
    └── Schema Owner
        └── Table Owner
            └── GRANT SELECT/MODIFY/CREATE</pre>
                            <h5>Comandos SQL Clave</h5>
                            <pre><code>-- Otorgar acceso de lectura
GRANT SELECT ON TABLE catalogo.esquema.tabla TO nombre_grupo;

-- Otorgar acceso a nivel de esquema (hereda a todas las tablas)
GRANT USE SCHEMA ON SCHEMA catalogo.esquema TO nombre_grupo;

-- Transferir propiedad
ALTER TABLE catalogo.esquema.tabla OWNER TO nuevo_propietario;</code></pre>
                            ${styleBox('yellow', 'Esenciales de Examen')}
                                <ul>
                                    <li><strong>USE CATALOG</strong> + <strong>USE SCHEMA</strong> son necesarios para acceder a una tabla.</li>
                                    <li>Los privilegios se <strong>heredan hacia abajo</strong> (catalog → schema → table).</li>
                                    <li>Solo el <strong>Owner</strong> o <strong>Metastore Admin</strong> pueden GRANT/REVOKE.</li>
                                </ul>
                            </div>
                        `)}
                    `
                }
            ]
        }
    ];

    // Merge with existing data — NEVER replaces, only appends
    if (window.studyData['databricks-da']) {
        window.studyData['databricks-da'] = window.studyData['databricks-da'].concat(urgentSections);
    }
})();
