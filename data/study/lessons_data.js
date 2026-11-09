window.lessonsData = {
    "databricks": [
        {
            title: "1. PK/FK Constraints in Unity Catalog (Pregunta 5)",
            domain: "Data Modeling / Unity Catalog",
            es: "En Databricks, las restricciones PK/FK son <strong>SOLO INFORMATIVAS (Informational Only)</strong>. El sistema no prohíbe que insertes datos huérfanos o violes las claves foráneas; la inserción simplemente tendrá éxito. Estas claves sirven para que el optimizador de consultas trabaje más rápido, pero no validan la calidad del dato al escribir.",
            en: "In Databricks, PK/FK constraints are <strong>INFORMATIONAL ONLY</strong>. The system does not prevent inserting orphaned data or violating foreign keys; the insertion will simply succeed. These keys help the query optimizer run faster, but do not validate data quality upon writing."
        },
        {
            title: "2. Tablas vs. Vistas en la Capa Gold (Pregunta 18)",
            domain: "Data Modeling / Medallion Architecture",
            es: "Si un dashboard tiene usuarios concurrentes (ej. 20) y lee información a partir de millones de filas, una VIEW obligaría a recalcular todo localmente. Para la capa Gold de tableros de alta demanda, <strong>SIEMPRE debes materializarlos creando una TABLA (CTAS)</strong>.",
            en: "If a dashboard has concurrent users (e.g. 20) and reads information from millions of rows, a VIEW would force recalculating everything each time. For Gold layer dashboards with high demand, <strong>ALWAYS materialize them by creating a TABLE (CTAS)</strong>."
        },
        {
            title: "3. Slowly Changing Dimensions (SCD Tipo 2) en Delta Lake (Pregunta 19)",
            domain: "Data Modeling",
            es: "El estándar de SCD Tipo 2 (mantener historial activando un nuevo registro y \"cerrando\" el anterior con fechas) requiere instrucción <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">MERGE INTO</code> con lógica condicional</strong>, no funciona automáticamente con CDF (Change Data Feed).",
            en: "The SCD Type 2 standard (maintaining history by activating a new record and \"closing\" the previous one with dates) requires <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">MERGE INTO</code> with conditional logic</strong>; it does not happen automatically via CDF."
        },
        {
            title: "4. Llaves Sustitutas (Surrogate Keys) en Esquemas de Estrella (Pregunta 16)",
            domain: "Data Modeling",
            es: "Las claves naturales pueden mutar, rompiendo relaciones. Usar <strong>Llaves Sustitutas (IDs autogenerados e inmutables)</strong> desvincula tu Data Warehouse de cambios en el origen.",
            en: "Natural keys can mutate, breaking relationships. Using <strong>Surrogate Keys (auto-generated and immutable IDs)</strong> decouples your Data Warehouse from source changes."
        },
        {
            title: "5. Peligros de la Desnormalización (Pregunta 20)",
            domain: "Data Modeling",
            es: "El problema de desnormalizar dimensiones en la Fact Table son las anomalías de actualización y pérdida de integridad histórica al cambiar descriptores como categorías. Las Dimensiones se mantienen separadas para que los remapeos se adapten limpiamente a todo el historial.",
            en: "The problem with denormalizing dimensions directly in the Fact Table is update anomalies and loss of historical integrity. Dimensions are kept separate so any remapping cleanly applies to the entire history."
        },
        {
            title: "6. Interacción entre VACUUM y Time Travel (Pregunta 22)",
            domain: "Data Management / Architecture",
            es: "Delta Lake facilita el Time Travel reteniendo archivos viejos. El comando <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">VACUUM</code></strong> borra físicamente <code>archivos .parquet</code> obsoletos. Si haces VACUUM fuera de su margen de retención, las versiones antiguas previas <strong>fallarán</strong> porque los archivos base originales se han eliminado de forma irrecuperable.",
            en: "Delta Lake facilitates Time Travel by retaining old files. The <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">VACUUM</code></strong> command physically deletes obsolete <code>.parquet</code> files. If you run VACUUM beyond retention margins, old Time Travel versions will <strong>fail</strong> because the original base files are permanently deleted."
        },
        {
            title: "7. Ingestión Incremental con Evolución de Esquema (Auto Loader)",
            domain: "Importing Data",
            es: "<strong>Auto Loader (<code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">read_files()</code> con <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">cloud_files</code>)</strong> está diseñado específicamente para cargas incrementales que requieren evolución de esquema. <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">COPY INTO</code> es útil para cargas idempotentes pero su soporte para evolución continua de esquemas es limitado frente a Auto Loader.",
            en: "<strong>Auto Loader (<code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">read_files()</code> with <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">cloud_files</code>)</strong> is specifically designed for incremental loads that require schema evolution. <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">COPY INTO</code> is useful for idempotent loads but its support for continuous schema evolution is limited compared to Auto Loader."
        },
        {
            title: "8. Auditoría de Ingestas y Transacciones (DESCRIBE HISTORY)",
            domain: "Importing Data",
            es: "El comando <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">DESCRIBE HISTORY</code></strong> muestra el log de transacciones completo de una tabla Delta (quién hizo qué, cuándo, y qué archivos). <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">DESCRIBE DETAIL</code> solo muestra una foto actual, y <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">table_changes</code> es para ver los cambios a nivel de fila (CDF).",
            en: "The <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">DESCRIBE HISTORY</code></strong> command shows the complete transaction log of a Delta table (who did what, when, and which files). <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">DESCRIBE DETAIL</code> only shows a current snapshot, and <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">table_changes</code> is for row-level changes (CDF)."
        },
        {
            title: "9. Jerarquía de Seguridad en Unity Catalog (Storage Credential)",
            domain: "Importing Data",
            es: "En Unity Catalog, el orden estricto de creación para acceso externo es: 1️⃣ <strong>Storage Credential</strong> (identidad IAM) ➡️ 2️⃣ <strong>External Location</strong> (ruta específica mapeada a la credencial) ➡️ 3️⃣ <strong>External Table</strong> (apuntando a la ubicación). ¡No puedes crear una Location sin haber creado la Credential primero!",
            en: "In Unity Catalog, the strict creation order for external access is: 1️⃣ <strong>Storage Credential</strong> (IAM identity) ➡️ 2️⃣ <strong>External Location</strong> (specific path mapped to the credential) ➡️ 3️⃣ <strong>External Table</strong> (pointing to the location). You cannot create a Location without first creating the Credential!"
        },
        {
            title: "10. Ingesta Incremental Idempotente (COPY INTO)",
            domain: "Importing Data",
            es: "Para ingerir archivos nuevos a medida que llegan a un bucket sin duplicar data (idempotencia), <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">COPY INTO</code></strong> es ideal. <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">INSERT INTO</code> re-lee todos los archivos siempre (duplica) y <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">MERGE INTO</code> evalúa toda la data de nuevo. COPY INTO usa un checkpoint interno automático.",
            en: "To ingest new files as they arrive in a bucket without duplication (idempotency), <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">COPY INTO</code></strong> is ideal. <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">INSERT INTO</code> always re-reads all files (duplicates data) and <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">MERGE INTO</code> evaluates all data again. COPY INTO uses an automatic internal checkpoint."
        },
        {
            title: "11. Consultas Directas a Archivos Físicos (Ad-hoc)",
            domain: "Importing Data",
            es: "Databricks permite hacer consultas directas a archivos usando la sintaxis basada en rutas: <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">SELECT * FROM formato.`ruta`</code></strong>. Ejemplo: <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">SELECT * FROM parquet.`s3://...`</code>. Los <em>backticks</em> (comillas invertidas) son requeridos, ¡y no necesitas registrar la tabla!",
            en: "Databricks allows direct queries to files using path-based syntax: <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">SELECT * FROM format.`path`</code></strong>. Example: <code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">SELECT * FROM parquet.`s3://...`</code>. Backticks are required, and you do not need to register the table first!"
        },
        {
            title: "12. Carga de Archivos via UI en Databricks",
            domain: "Importing Data",
            es: "Cuando subes un archivo (como un CSV) mediante la interfaz gráfica (Drag-and-Drop / Wizard), Databricks crea <strong>automáticamente una Tabla Delta MANAGED</strong> en Unity Catalog. No será una vista temporal, ni un CSV en el Storage externo o Workspace: se almacena en el location administrado de Unity Catalog.",
            en: "When you upload a file (like a CSV) via the Databricks UI (Drag-and-Drop / Wizard), Databricks <strong>automatically creates a MANAGED Delta Table</strong> in Unity Catalog. It will not be a temporary view, nor a CSV in external storage or Workspace: it is stored in the managed location of Unity Catalog."
        },
        {
            title: "13. Errores al Crear Tablas Externas",
            domain: "Importing Data",
            es: "La causa principal al fallar un <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">CREATE EXTERNAL TABLE</code></strong> es la omisión del <strong>External Location</strong>. Siempre asegúrate de que haya una ubicación externa gobernada por Unity Catalog mapeando el bucket o ruta (ej. abfss://) a un Storage Credential válido.",
            en: "The primary cause for failures in <strong><code style=\"background:#1e293b; color:#fff; padding:2px 6px; border-radius:4px; font-family:monospace;\">CREATE EXTERNAL TABLE</code></strong> is the omission of an <strong>External Location</strong>. Always ensure there is a governed external location mapping the bucket/path (e.g. abfss://) to a valid Storage Credential."
        }
    ]
};
