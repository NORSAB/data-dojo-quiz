(function() {
    window.studyData = window.studyData || {};

    const styleBox = (type, title) => `
        <div class="content-box box-${type}">
            ${title ? `<strong class="box-title">${title}</strong>` : ''}
    `;

    // Helper to create language sections (unified data-lang for CSS-driven separator)
    const langSection = (lang, content) => `
        <div class="lang-section" data-lang="${lang}">${content}</div>
    `;

    window.studyData["databricks-da"] = [
        // --- 1. Lakehouse Architecture ---
        {
            title: "1. Lakehouse Architecture / Arquitectura Lakehouse",
            items: [
                {
                    title: "Lakehouse Concept / Concepto Lakehouse",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Definition')}
                                The Lakehouse combines the <strong>flexibility</strong> of a Data Lake (low cost, raw files) with the <strong>management</strong> of a Data Warehouse (<strong>ACID transactions via Delta Lake</strong>, schema enforcement).
                            </div>
                            <p>It eliminates data silos by allowing BI and ML to operate on the same data.</p>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Definición')}
                                El Lakehouse combina la <strong>flexibilidad</strong> de un Data Lake (bajo costo, archivos crudos) con la <strong>gestión</strong> de un Data Warehouse (<strong>transacciones ACID vía Delta Lake</strong>, cumplimiento de esquema).
                            </div>
                            <p>Elimina silos de datos permitiendo que BI y ML operen sobre los mismos datos.</p>
                        `)}
                    `
                },
                {
                    title: "Medallion Architecture / Arquitectura Medallion",
                    content: `
                        ${langSection('en', `
                            <div style="margin-left: 20px;">
                                <h4 class="text-bronze"><svg viewBox="0 0 24 24" width="16" height="16" fill="#cd7f32" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Bronze Layer (Raw)</h4>
                                <ul><li>Unvalidated data loaded "as-is". Append-only. Historical archive.</li></ul>
                                <h4 class="text-silver"><svg viewBox="0 0 24 24" width="16" height="16" fill="#c0c0c0" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Silver Layer (Clean)</h4>
                                <ul><li>"Enterprise View". Cleaned, deduped, schema enforced. Source of Truth.</li></ul>
                                <h4 class="text-gold"><svg viewBox="0 0 24 24" width="16" height="16" fill="#ffd700" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Gold Layer (Curated)</h4>
                                <ul><li>"Presentation Layer". Aggregated for BI/Reporting. Star Schemas.</li></ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <div style="margin-left: 20px;">
                                <h4 class="text-bronze"><svg viewBox="0 0 24 24" width="16" height="16" fill="#cd7f32" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Capa Bronce (Crudo)</h4>
                                <ul><li>Datos no validados "tal cual". Solo agregar. Archivo histórico.</li></ul>
                                <h4 class="text-silver"><svg viewBox="0 0 24 24" width="16" height="16" fill="#c0c0c0" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Capa Plata (Limpio)</h4>
                                <ul><li>"Vista Empresarial". Limpios, deduplicados, esquema aplicado. Fuente de la Verdad.</li></ul>
                                <h4 class="text-gold"><svg viewBox="0 0 24 24" width="16" height="16" fill="#ffd700" style="vertical-align:middle;margin-right:4px;"><circle cx="12" cy="12" r="10"/></svg> Capa Oro (Curado)</h4>
                                <ul><li>"Capa de Presentación". Agregados para BI. Esquemas Estrella.</li></ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Exam Rules / Reglas de Examen",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Memory Rule')}
                                <strong>Bronze:</strong> History (Past)<br>
                                <strong>Silver:</strong> Quality (Present)<br>
                                <strong>Gold:</strong> BI/Aggregates (Future)
                            </div>
                            ${styleBox('red', 'Common Trap')}
                                Never perform business aggregations in Bronze. Never store raw messy data in Gold.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Regla de Memoria')}
                                <strong>Bronce:</strong> Historia (Pasado)<br>
                                <strong>Plata:</strong> Calidad (Presente)<br>
                                <strong>Oro:</strong> BI/Agregados (Futuro)
                            </div>
                            ${styleBox('red', 'Trampa Común')}
                                Nunca hagas agregaciones de negocio en Bronce. Nunca guardes datos sucios en Oro.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 2. Data Management ---
        {
            title: "2. Data Management / Gestión de Datos",
            items: [
                {
                    title: "Unity Catalog & Delta Log",
                    content: `
                        ${langSection('en', `
                            ${styleBox('yellow', 'Unity Catalog')}
                                Centralized governance for data and AI assets. Namespace: <code>catalog.schema.table</code>.
                            </div>
                            ${styleBox('blue', 'Delta Log')}
                                Transactional layer (JSON files). Enables ACID guarantees and Time Travel.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('yellow', 'Unity Catalog')}
                                Gobernanza centralizada para datos y AI. Namespace: <code>catálogo.esquema.tabla</code>.
                            </div>
                            ${styleBox('blue', 'Delta Log')}
                                Capa transaccional (archivos JSON). Habilita garantías ACID y Viaje en el Tiempo.
                            </div>
                        `)}
                    `
                },
                {
                    title: "Managed vs External / Gestionadas vs Externas",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Managed</th><th>External</th></tr>
                                <tr><td>Storage</td><td>Unity Catalog Root</td><td>Specific Path (S3/ADLS)</td></tr>
                                <tr><td>DROP Table</td><td class="text-danger">Deletes Data & Metadata</td><td class="text-success">Deletes Metadata Only</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Gestionada</th><th>Externa</th></tr>
                                <tr><td>Almacenamiento</td><td>Raíz Unity Catalog</td><td>Ruta Específica (S3/ADLS)</td></tr>
                                <tr><td>DROP Table</td><td class="text-danger">Borra Datos y Metadatos</td><td class="text-success">Borra solo Metadatos (Archivos quedan)</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "Optimization / Optimización",
                    content: `
                        ${langSection('en', `
                            <h4>Liquid Clustering (Modern)</h4>
                            <p>Dynamic layout. Best for high cardinality or skewed data. Replaces partitioning and Z-Order.</p>
                            <h4>Partitioning (Legacy)</h4>
                            <p>Physical folders. Only good for low cardinality columns (like Year/Month).</p>
                        `)}
                        ${langSection('es', `
                            <h4>Liquid Clustering (Moderno)</h4>
                            <p>Diseño dinámico. Mejor para alta cardinalidad o datos sesgados. Reemplaza particionamiento y Z-Order.</p>
                            <h4>Particionamiento (Legado)</h4>
                            <p>Carpetas físicas. Solo bueno para columnas de baja cardinalidad (como Año/Mes).</p>
                        `)}
                    `
                }
            ]
        },
        // --- 3. Time Travel ---
        {
            title: "3. Time Travel / Viaje en el Tiempo",
            items: [
                {
                    title: "Concepts / Conceptos",
                    content: `
                        ${langSection('en', `
                            <p>Query table as it existed in the past using <strong>Version</strong> or <strong>Timestamp</strong>.</p>
                            <code>DESCRIBE HISTORY table_name;</code>
                            ${styleBox('red', 'VACUUM Warning')}
                                <strong>VACUUM</strong> deletes old physical files to save space. You <strong>cannot</strong> Time Travel to versions older than the retention threshold once VACUUM runs.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Consulta la tabla como existía en el pasado usando <strong>Versión</strong> o <strong>Timestamp</strong>.</p>
                            <code>DESCRIBE HISTORY table_name;</code>
                            ${styleBox('red', 'Advertencia VACUUM')}
                                <strong>VACUUM</strong> borra archivos físicos viejos para ahorrar espacio. <strong>No puedes</strong> viajar en el tiempo a versiones anteriores al límite de retención si se ejecutó VACUUM.
                            </div>
                        `)}
                    `
                },
                {
                    title: "Syntax / Sintaxis",
                    content: `
                        ${langSection('en', `
                            <p><strong>ANSI Standard:</strong></p>
                            <code>SELECT * FROM t TIMESTAMP AS OF '2023-10-01...';</code><br>
                            <code>SELECT * FROM t VERSION AS OF 5;</code>
                            <p><strong>Shorthand (@):</strong></p>
                            <code>SELECT * FROM t@v123;</code>
                        `)}
                        ${langSection('es', `
                            <p><strong>Estándar ANSI:</strong></p>
                            <code>SELECT * FROM t TIMESTAMP AS OF '2023-10-01...';</code><br>
                            <code>SELECT * FROM t VERSION AS OF 5;</code>
                            <p><strong>Abreviado (@):</strong></p>
                            <code>SELECT * FROM t@v123;</code>
                        `)}
                    `
                }
            ]
        },
        // --- 4. Visualization ---
        {
            title: "4. Visualizations / Visualizaciones",
            items: [
                {
                    title: "Parameters & Alerts / Parámetros y Alertas",
                    content: `
                        ${langSection('en', `
                             <h5>Parameters</h5>
                             <p>Values selected in dashboard parameters must be mapped to query variables (<code>{{ param }}</code>). If a chart doesn't update, check mapping.</p>
                             <h5>Alerts</h5>
                             <p>An alert query must return <strong>single row, single value</strong>.</p>
                             ${styleBox('red', 'Trap')}Alerts evaluate based on the parameter's <strong>Default Value</strong>, not current dashboard selection.</div>
                        `)}
                        ${langSection('es', `
                             <h5>Parámetros</h5>
                             <p>Los valores seleccionados deben mapearse a variables en la consulta (<code>{{ param }}</code>). Si un gráfico no actualiza, revisa el mapeo.</p>
                             <h5>Alertas</h5>
                             <p>Una consulta de alerta debe retornar <strong>una sola fila y un solo valor</strong>.</p>
                             ${styleBox('red', 'Trampa')}Las alertas evalúan basándose en el <strong>Valor Por Defecto</strong> del parámetro, no en la selección actual.</div>
                        `)}
                    `
                }
            ]
        },
        // --- 5. Ingestion ---
        {
            title: "5. Ingestion / Ingesta",
            items: [
                {
                    title: "COPY INTO vs CTAS",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Decision Rule')}
                                <strong>Source = Files?</strong> Use <code>COPY INTO</code> (Idempotent, cheaper).<br>
                                <strong>Source = Query/Table?</strong> Use <code>CTAS</code> (Create Table As Select).
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Regla de Decisión')}
                                <strong>¿Fuente = Archivos?</strong> Usa <code>COPY INTO</code> (Idempotente, barato).<br>
                                <strong>¿Fuente = Query/Tabla?</strong> Usa <code>CTAS</code> (Create Table As Select).
                            </div>
                        `)}
                    `
                },
                {
                    title: "Partner Connect",
                    content: `
                        ${langSection('en', `
                            <p>The fastest way to connect to ingestion partners like <strong>Fivetran</strong> or <strong>dbt</strong>.</p>
                            <ul>
                                <li>Automatically creates the hidden SQL Warehouse.</li>
                                <li>Generates API tokens and configures connection permissions.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p>La forma más rápida de conectar partners de ingesta como <strong>Fivetran</strong> o <strong>dbt</strong>.</p>
                            <ul>
                                <li>Crea automáticamente el SQL Warehouse oculto.</li>
                                <li>Genera tokens de API y configura permisos de conexión.</li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // --- 6. Advanced Querying ---
        {
            title: "6. Advanced Querying / Consultas Avanzadas",
            items: [
                {
                     title: "QUALIFY & Joins",
                     content: `
                        ${langSection('en', `
                            <p><strong>QUALIFY:</strong> Filters results based on window functions (avoids nested subqueries).</p>
                            <code>SELECT * ... QUALIFY ROW_NUMBER() OVER(...) = 1</code>
                            <p><strong>SEMI JOIN:</strong> Returns rows from Left that have a match in Right. (No duplicates).</p>
                            <p><strong>ANTI JOIN:</strong> Returns rows from Left that DO NOT match in Right.</p>
                        `)}
                        ${langSection('es', `
                            <p><strong>QUALIFY:</strong> Filtra resultados basados en funciones de ventana (evita subconsultas anidadas).</p>
                            <code>SELECT * ... QUALIFY ROW_NUMBER() OVER(...) = 1</code>
                            <p><strong>SEMI JOIN:</strong> Retorna filas de la Izquierda que tienen coincidencia en la Derecha. (Sin duplicados).</p>
                            <p><strong>ANTI JOIN:</strong> Retorna filas de la Izquierda que NO tienen coincidencia en la Derecha.</p>
                        `)}
                     `
                },
                {
                    title: "PIVOT",
                    content: `
                        ${langSection('en', `
                            <p>Rotates unique column values into multiple columns. <strong>Must</strong> use an aggregation function.</p>
                            <code>PIVOT ( SUM(sales) FOR region IN ('North', 'South') )</code>
                        `)}
                        ${langSection('es', `
                            <p>Rota valores únicos de una columna en múltiples columnas. <strong>Debe</strong> usar una función de agregación.</p>
                            <code>PIVOT ( SUM(ventas) FOR region IN ('Norte', 'Sur') )</code>
                        `)}
                    `
                }
            ]
        },
        // --- 7. Complex Types ---
        {
            title: "7. Complex Types / Tipos Complejos",
            items: [
                {
                    title: "JSON & Arrays",
                    content: `
                        ${langSection('en', `
                            <p><strong>EXPLODE(arr):</strong> Transforms one row with an array into multiple rows (one per item).</p>
                            <p><strong>JSON Extraction:</strong></p>
                            <ul>
                                <li>If column is <code>STRUCT</code>: Use dot notation <code>col.field</code>.</li>
                                <li>If column is <code>STRING</code>: Use <code>from_json()</code> with schema.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p><strong>EXPLODE(arr):</strong> Transforma una fila con array en múltiples filas (una por ítem).</p>
                            <p><strong>Extracción JSON:</strong></p>
                            <ul>
                                <li>Si la columna es <code>STRUCT</code>: Usa notación de punto <code>col.campo</code>.</li>
                                <li>Si la columna es <code>STRING</code>: Usa <code>from_json()</code> con esquema.</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "Higher-Order Functions",
                    content: `
                        ${langSection('en', `
                            <p>Efficiently process arrays without exploding relative to row count.</p>
                            <ul>
                                <li><code>FILTER(arr, x -> x > 100)</code>: Keep items matching condition.</li>
                                <li><code>TRANSFORM(arr, x -> x * 1.2)</code>: Apply math/logic to every item.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p>Procesa arrays eficientemente sin explotar (multiplicar filas).</p>
                            <ul>
                                <li><code>FILTER(arr, x -> x > 100)</code>: Mantiene ítems que cumplen la condición.</li>
                                <li><code>TRANSFORM(arr, x -> x * 1.2)</code>: Aplica lógica a cada ítem.</li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // --- 8. Security ---
        {
            title: "8. Security / Seguridad",
            items: [
                {
                    title: "Hierarchy / Jerarquía",
                    content: `
                         ${langSection('en', `
                             <p>Privileges flow down, but access requires explicit usage on containers.</p>
                             <p><strong>Rule:</strong> To SELECT from a Table, you need:
                             <br>1. <code>USAGE</code> on Catalog
                             <br>2. <code>USAGE</code> on Schema
                             <br>3. <code>SELECT</code> on Table</p>
                         `)}
                         ${langSection('es', `
                             <p>Los privilegios fluyen, pero el acceso requiere uso explícito en contenedores.</p>
                             <p><strong>Regla:</strong> Para hacer SELECT en Tabla, necesitas:
                             <br>1. <code>USAGE</code> en Catálogo
                             <br>2. <code>USAGE</code> en Esquema
                             <br>3. <code>SELECT</code> en Tabla</p>
                         `)}
                    `
                },
                {
                    title: "Row/Column Security",
                    content: `
                        ${langSection('en', `
                            <p><strong>Dynamic Views:</strong></p>
                            <ul>
                                <li>Row Filter: <code>WHERE region = current_user()</code></li>
                                <li>Column Mask: <code>CASE WHEN group='admin' THEN val ELSE '***'</code></li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p><strong>Vistas Dinámicas:</strong></p>
                            <ul>
                                <li>Filtro Fila: <code>WHERE region = current_user()</code></li>
                                <li>Máscara Columna: <code>CASE WHEN group='admin' THEN val ELSE '***'</code></li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // --- 9. Compute ---
        {
            title: "9. Compute / Cómputo",
            items: [
                {
                    title: "SQL Warehouses",
                    content: `
                        ${langSection('en', `
                            <ul>
                                <li><strong>Serverless:</strong> Starts in seconds. Scaling is instant. Best for ad-hoc queries.</li>
                                <li><strong>Pro:</strong> Starts in minutes. Best for production with known load.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <ul>
                                <li><strong>Serverless:</strong> Inicia en segundos. Escalado instantáneo. Mejor para análisis ad-hoc.</li>
                                <li><strong>Pro:</strong> Inicia en minutos. Mejor para producción con carga conocida.</li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // --- 10. Performance ---
        {
            title: "10. Performance / Rendimiento",
            items: [
                {
                    title: "Analysis Tools / Herramientas",
                    content: `
                        ${langSection('en', `
                             <p><strong>Query Profile:</strong> Visual execution plan. Identifies bottlenecks like "Spill to Disk" (Out of Memory) or "Full Table Scans" (Missing indices/pruning).</p>
                        `)}
                        ${langSection('es', `
                             <p><strong>Query Profile:</strong> Plan de ejecución visual. Identifica cuellos de botella como "Spill to Disk" (Falta de Memoria) o "Full Table Scans" (Falta de índices/poda).</p>
                        `)}
                    `
                }
            ]
        },
        // --- 11. Structures ---
        {
            title: "11. Structures / Estructuras",
            items: [
                {
                    title: "CTE vs Views",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr><th>Object</th><th>Scope</th><th>Persistence</th></tr>
                                <tr><td>CTE</td><td>Single Query</td><td>None</td></tr>
                                <tr><td>Temp View</td><td>Session</td><td>Until Logout</td></tr>
                                <tr><td>Global Temp</td><td>Cluster</td><td>Until Cluster Restart</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr><th>Objeto</th><th>Alcance</th><th>Persistencia</th></tr>
                                <tr><td>CTE</td><td>Una Consulta</td><td>Ninguna</td></tr>
                                <tr><td>Temp View</td><td>Sesión</td><td>Hasta Logout</td></tr>
                                <tr><td>Global Temp</td><td>Clúster</td><td>Hasta Reinicio Clúster</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "UDFs (SQL)",
                    content: `
                        ${langSection('en', `
                            <p><strong>User Defined Functions:</strong> Encapsulate reusable logic.</p>
                            <code>CREATE FUNCTION f(x INT) RETURNS INT RETURN x * 2;</code>
                        `)}
                        ${langSection('es', `
                            <p><strong>Funciones Definidas por Usuario:</strong> Encapsulan lógica reutilizable.</p>
                            <code>CREATE FUNCTION f(x INT) RETURNS INT RETURN x * 2;</code>
                        `)}
                    `
                }
            ]
        },
        // --- 12. Genie ---
        {
            title: "12. AI/BI Genie",
            items: [
                {
                    title: "Architecture / Arquitectura",
                    content: `
                        ${langSection('en', `
                            <p><strong>Instructions:</strong> Plain text rules (e.g., "Churn is cancelled subscription").</p>
                            <p><strong>Trusted Assets:</strong> Verified SQL queries used as ground truth.</p>
                        `)}
                        ${langSection('es', `
                            <p><strong>Instrucciones:</strong> Reglas en texto plano (ej. "Churn es suscripción cancelada").</p>
                            <p><strong>Activos Confiables:</strong> Queries SQL verificadas usadas como base de verdad.</p>
                        `)}
                    `
                },
                {
                    title: "Maintenance & Sharing / Mantenimiento y Compartir",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Maintaining a Genie Space')}
                                <ul>
                                    <li><strong>Update Instructions:</strong> Refine text rules based on stakeholder feedback.</li>
                                    <li><strong>Vet Trusted Assets:</strong> Review and approve SQL queries as ground truth.</li>
                                    <li><strong>Refresh Metadata:</strong> Sync Unity Catalog metadata when schemas change.</li>
                                    <li><strong>Validate Accuracy:</strong> Benchmark Genie responses against known queries.</li>
                                </ul>
                            </div>
                            ${styleBox('yellow', 'Sharing & Permissions')}
                                <p>Roles: <strong>Owner</strong> (full control), <strong>Editor</strong> (modify instructions), <strong>Viewer</strong> (ask questions only).</p>
                                <p>Genie permissions are <strong>separate</strong> from table permissions. Limit editor access to domain experts.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Mantenimiento de un Genie Space')}
                                <ul>
                                    <li><strong>Actualizar Instrucciones:</strong> Refinar reglas de texto según retroalimentación.</li>
                                    <li><strong>Verificar Activos Confiables:</strong> Revisar y aprobar queries SQL como verdad base.</li>
                                    <li><strong>Refrescar Metadatos:</strong> Sincronizar metadatos de Unity Catalog cuando cambian esquemas.</li>
                                    <li><strong>Validar Precisión:</strong> Comparar respuestas de Genie contra queries conocidas.</li>
                                </ul>
                            </div>
                            ${styleBox('yellow', 'Compartir y Permisos')}
                                <p>Roles: <strong>Owner</strong> (control total), <strong>Editor</strong> (modificar instrucciones), <strong>Viewer</strong> (solo preguntar).</p>
                                <p>Los permisos de Genie son <strong>independientes</strong> de los permisos de tablas. Limita acceso de editor a expertos del dominio.</p>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 13. Platform Intelligence & AI ---
        {
            title: "13. Platform Intelligence / Inteligencia de Plataforma",
            items: [
                {
                    title: "Data Intelligence Engine",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Definition')}
                                The <strong>Data Intelligence Engine</strong> is the AI brain powering the entire Databricks platform. It understands data semantics, metadata, and usage patterns.
                            </div>
                            <p>It powers:</p>
                            <ul>
                                <li><strong>Databricks Assistant:</strong> AI copilot in Notebooks and SQL Editor.</li>
                                <li><strong>AI/BI Genie:</strong> Natural language analytics for business users.</li>
                                <li><strong>Auto-optimizations:</strong> Query tuning, file layout, and indexing.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Definición')}
                                El <strong>Data Intelligence Engine</strong> es el cerebro de IA que potencia toda la plataforma Databricks. Comprende la semántica de datos, metadatos y patrones de uso.
                            </div>
                            <p>Potencia:</p>
                            <ul>
                                <li><strong>Databricks Assistant:</strong> Copiloto IA en Notebooks y SQL Editor.</li>
                                <li><strong>AI/BI Genie:</strong> Analítica en lenguaje natural para usuarios de negocio.</li>
                                <li><strong>Auto-optimizaciones:</strong> Ajuste de queries, disposición de archivos e indexación.</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "Databricks Assistant",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Key Feature')}
                                An <strong>AI copilot</strong> integrated directly into <strong>Notebooks</strong> and the <strong>SQL Editor</strong>.
                            </div>
                            <p>Capabilities:</p>
                            <ul>
                                <li>Write and debug SQL/Python queries</li>
                                <li>Explain errors and suggest fixes</li>
                                <li>Auto-generate documentation for notebooks</li>
                                <li>Optimize query performance</li>
                            </ul>
                            ${styleBox('red', 'Exam Tip')}
                                Tested in <strong>Domain 4</strong> (Executing Queries). Know where Assistant is available and what it can do.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Característica Clave')}
                                Un <strong>copiloto de IA</strong> integrado directamente en <strong>Notebooks</strong> y el <strong>SQL Editor</strong>.
                            </div>
                            <p>Capacidades:</p>
                            <ul>
                                <li>Escribir y depurar queries SQL/Python</li>
                                <li>Explicar errores y sugerir correcciones</li>
                                <li>Generar documentación automática para notebooks</li>
                                <li>Optimizar rendimiento de queries</li>
                            </ul>
                            ${styleBox('red', 'Dato de Examen')}
                                Se evalúa en el <strong>Dominio 4</strong> (Ejecutar Queries). Saber dónde está disponible y qué puede hacer.
                            </div>
                        `)}
                    `
                },
                {
                    title: "Mosaic AI, Lakeflow Jobs & Marketplace",
                    content: `
                        ${langSection('en', `
                            <h5>Mosaic AI</h5>
                            <p>Unified platform for <strong>ML and GenAI</strong>. Includes Model Serving, Vector Search, and Feature Store. For DA exam: know it <strong>exists as a platform component</strong>.</p>
                            <h5>Lakeflow Jobs</h5>
                            <p>Workflow <strong>orchestration and scheduling</strong>. Chains notebooks, SQL queries, and pipelines with dependencies and alerts. Evolution of Databricks Workflows.</p>
                            <h5>Databricks Marketplace</h5>
                            <p>Open marketplace for discovering <strong>datasets, notebooks, and ML models</strong> from third parties. Allows importing external data without complex pipelines.</p>
                            ${styleBox('green', 'Exam Coverage')}
                                <strong>Domain 1:</strong> All three are platform components.<br>
                                <strong>Domain 3:</strong> Marketplace is a data import method.
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Mosaic AI</h5>
                            <p>Plataforma unificada para <strong>ML y GenAI</strong>. Incluye Model Serving, Vector Search y Feature Store. Para el examen DA: saber que <strong>existe como componente de la plataforma</strong>.</p>
                            <h5>Lakeflow Jobs</h5>
                            <p><strong>Orquestación y scheduling</strong> de workflows. Encadena notebooks, queries SQL y pipelines con dependencias y alertas. Evolución de Databricks Workflows.</p>
                            <h5>Databricks Marketplace</h5>
                            <p>Marketplace abierto para descubrir <strong>datasets, notebooks y modelos ML</strong> de terceros. Permite importar datos externos sin pipelines complejos.</p>
                            ${styleBox('green', 'Cobertura en Examen')}
                                <strong>Dominio 1:</strong> Los tres son componentes de la plataforma.<br>
                                <strong>Dominio 3:</strong> Marketplace es método de importación de datos.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 14. Materialized Views & Federated Queries ---
        {
            title: "14. Materialized Views & Federated Queries / Vistas Materializadas y Consultas Federadas",
            items: [
                {
                    title: "Materialized Views vs Streaming Tables",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Materialized View</th><th>Streaming Table</th></tr>
                                <tr><td>Update</td><td>Must be <strong>REFRESHed</strong> manually or scheduled</td><td>Updates <strong>incrementally</strong> (append-only)</td></tr>
                                <tr><td>Best For</td><td>Expensive aggregations, precomputed results</td><td>Continuous ingestion, real-time data</td></tr>
                                <tr><td>Recomputation</td><td>Full recomputation on refresh</td><td>Only processes new/changed data</td></tr>
                            </table>
                            ${styleBox('red', 'Exam Trap')}
                                <strong>Frequently tested:</strong> When should you use a Materialized View vs a Streaming Table? Answer: MV for precomputed analytics, ST for continuous append-only ingestion.
                            </div>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Vista Materializada</th><th>Streaming Table</th></tr>
                                <tr><td>Actualización</td><td>Debe hacer <strong>REFRESH</strong> manual o programado</td><td>Se actualiza <strong>incrementalmente</strong> (append-only)</td></tr>
                                <tr><td>Mejor Para</td><td>Agregaciones costosas, resultados precalculados</td><td>Ingesta continua, datos en tiempo real</td></tr>
                                <tr><td>Recomputación</td><td>Recomputación completa en refresh</td><td>Solo procesa datos nuevos/cambiados</td></tr>
                            </table>
                            ${styleBox('red', 'Trampa de Examen')}
                                <strong>Pregunta frecuente:</strong> ¿Cuándo usar Vista Materializada vs Streaming Table? Respuesta: MV para analítica precalculada, ST para ingesta continua append-only.
                            </div>
                        `)}
                    `
                },
                {
                    title: "Federated Queries / Consultas Federadas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Definition')}
                                <strong>Federated Queries</strong> allow you to JOIN Delta tables with external data sources (PostgreSQL, MySQL, SQL Server) <strong>without moving data</strong>.
                            </div>
                            <p>How it works:</p>
                            <ul>
                                <li>Uses <strong>Foreign Catalogs</strong> in Unity Catalog to register connections.</li>
                                <li>Queries execute <strong>in-place</strong> — no ETL needed.</li>
                                <li>Enables cross-system analytics in a single query.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Definición')}
                                Las <strong>Consultas Federadas</strong> permiten hacer JOIN entre tablas Delta y fuentes externas (PostgreSQL, MySQL, SQL Server) <strong>sin mover datos</strong>.
                            </div>
                            <p>Cómo funciona:</p>
                            <ul>
                                <li>Usa <strong>Foreign Catalogs</strong> en Unity Catalog para registrar conexiones.</li>
                                <li>Las queries se ejecutan <strong>en sitio</strong> — sin necesidad de ETL.</li>
                                <li>Permite analítica entre sistemas en una sola consulta.</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "Query Caching / Caché de Consultas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Performance Boost')}
                                Databricks SQL <strong>automatically caches</strong> query results. Same query + same data = <strong>instant result from cache</strong>.
                            </div>
                            <ul>
                                <li>No recomputation needed for identical queries.</li>
                                <li>Cache is <strong>automatically invalidated</strong> when underlying data changes.</li>
                                <li>Significantly reduces latency and compute costs.</li>
                            </ul>
                            ${styleBox('yellow', 'Exam Note')}
                                Domain 5 objective: "Using query history and caching to reduce development time and query latency."
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Mejora de Rendimiento')}
                                Databricks SQL <strong>cachea automáticamente</strong> resultados de queries. Misma query + mismos datos = <strong>resultado instantáneo del caché</strong>.
                            </div>
                            <ul>
                                <li>No necesita recomputar queries idénticas.</li>
                                <li>El caché se <strong>invalida automáticamente</strong> cuando los datos cambian.</li>
                                <li>Reduce significativamente la latencia y costos de compute.</li>
                            </ul>
                            ${styleBox('yellow', 'Nota de Examen')}
                                Objetivo Dominio 5: "Usar historial de queries y caché para reducir tiempo de desarrollo y latencia de consultas."
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 15. Dashboard Management ---
        {
            title: "15. Dashboard Management / Gestión de Dashboards",
            items: [
                {
                    title: "Permissions & Sharing / Permisos y Compartir",
                    content: `
                        ${langSection('en', `
                            <h5>Permission Levels</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Level</th><th>Description</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td>Read-only access to the dashboard</td></tr>
                                <tr><td><strong>CAN RUN</strong></td><td>View + refresh/run queries</td></tr>
                                <tr><td><strong>CAN EDIT</strong></td><td>Modify widgets, layout, and queries</td></tr>
                            </table>
                            <h5>Sharing Methods</h5>
                            <ul>
                                <li><strong>Workspace users/groups:</strong> Direct access within the workspace.</li>
                                <li><strong>Shareable links:</strong> External users without Databricks account.</li>
                                <li><strong>Embedded:</strong> Embed dashboards in external applications.</li>
                            </ul>
                            ${styleBox('red', 'Key Rule')}
                                The <strong>Owner</strong> has full control over permissions. Only the Owner can transfer ownership.
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Niveles de Permiso</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Nivel</th><th>Descripción</th></tr>
                                <tr><td><strong>CAN VIEW</strong></td><td>Acceso de solo lectura</td></tr>
                                <tr><td><strong>CAN RUN</strong></td><td>Ver + refrescar/ejecutar queries</td></tr>
                                <tr><td><strong>CAN EDIT</strong></td><td>Modificar widgets, layout y queries</td></tr>
                            </table>
                            <h5>Métodos para Compartir</h5>
                            <ul>
                                <li><strong>Usuarios/grupos del workspace:</strong> Acceso directo dentro del workspace.</li>
                                <li><strong>Enlaces compartibles:</strong> Usuarios externos sin cuenta Databricks.</li>
                                <li><strong>Embebido:</strong> Incrustar dashboards en aplicaciones externas.</li>
                            </ul>
                            ${styleBox('red', 'Regla Clave')}
                                El <strong>Owner</strong> tiene control total sobre permisos. Solo el Owner puede transferir la propiedad.
                            </div>
                        `)}
                    `
                },
                {
                    title: "Scheduling & Refresh / Programación y Refresco",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'How Scheduling Works')}
                                <ul>
                                    <li>Configure <strong>automatic refresh</strong> intervals (1 minute to 1 week).</li>
                                    <li>Each visualization updates its underlying query on refresh.</li>
                                    <li>Uses the <strong>SQL Warehouse</strong> configured for the dashboard.</li>
                                </ul>
                            </div>
                            ${styleBox('yellow', 'Subscribers')}
                                <p>Users can subscribe to receive dashboard <strong>snapshots via email</strong> based on the refresh schedule. Great for stakeholders who don't log in frequently.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Cómo Funciona la Programación')}
                                <ul>
                                    <li>Configura intervalos de <strong>refresco automático</strong> (1 minuto a 1 semana).</li>
                                    <li>Cada visualización actualiza su consulta subyacente al refrescar.</li>
                                    <li>Usa el <strong>SQL Warehouse</strong> configurado para el dashboard.</li>
                                </ul>
                            </div>
                            ${styleBox('yellow', 'Suscriptores')}
                                <p>Los usuarios pueden suscribirse para recibir <strong>snapshots del dashboard por email</strong> según la programación. Ideal para stakeholders que no inician sesión frecuentemente.</p>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 16. Data Modeling ---
        {
            title: "16. Data Modeling / Modelado de Datos",
            items: [
                {
                    title: "Star Schema & Data Vault",
                    content: `
                        ${langSection('en', `
                            <h5>Star Schema</h5>
                            <ul>
                                <li><strong>Fact Table:</strong> Central table with metrics (sales, clicks, transactions).</li>
                                <li><strong>Dimension Tables:</strong> Surrounding tables with descriptors (date, product, customer).</li>
                                <li>Optimized for <strong>BI and analytical queries</strong>.</li>
                            </ul>
                            <h5>Data Vault</h5>
                            <ul>
                                <li><strong>Hubs:</strong> Core business entities (Customer, Product).</li>
                                <li><strong>Links:</strong> Relationships between hubs.</li>
                                <li><strong>Satellites:</strong> Descriptive attributes with history.</li>
                                <li>Designed for <strong>auditability and traceability</strong>.</li>
                            </ul>
                            ${styleBox('green', 'Medallion Alignment')}
                                Both Star Schema and Data Vault align with the <strong>Gold layer</strong> of the Medallion Architecture — the presentation/aggregation layer for BI consumers.
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Esquema Estrella (Star Schema)</h5>
                            <ul>
                                <li><strong>Tabla de Hechos:</strong> Tabla central con métricas (ventas, clics, transacciones).</li>
                                <li><strong>Tablas de Dimensión:</strong> Tablas circundantes con descriptores (fecha, producto, cliente).</li>
                                <li>Optimizado para <strong>BI y queries analíticos</strong>.</li>
                            </ul>
                            <h5>Data Vault</h5>
                            <ul>
                                <li><strong>Hubs:</strong> Entidades de negocio principales (Cliente, Producto).</li>
                                <li><strong>Links:</strong> Relaciones entre hubs.</li>
                                <li><strong>Satellites:</strong> Atributos descriptivos con historial.</li>
                                <li>Diseñado para <strong>auditoría y trazabilidad</strong>.</li>
                            </ul>
                            ${styleBox('green', 'Alineación con Medallion')}
                                Tanto Star Schema como Data Vault se alinean con la <strong>capa Gold</strong> del Medallion Architecture — la capa de presentación/agregación para consumidores de BI.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // --- 17. Data Quality & Lineage ---
        {
            title: "17. Data Quality & Lineage / Calidad de Datos y Linaje",
            items: [
                {
                    title: "Certified Tables & Tags / Tablas Certificadas y Etiquetas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Certified Tables')}
                                <p>Tables can be marked as <strong>Certified</strong> in Unity Catalog to signal they are <strong>trusted, verified data sources</strong>.</p>
                                <p>Users can filter <strong>Catalog Explorer</strong> by certification to find quality data quickly.</p>
                            </div>
                            ${styleBox('yellow', 'Tags')}
                                <p><strong>Key-value labels</strong> for classifying and searching data assets across catalogs.</p>
                                <p>Examples: <code>pii=true</code>, <code>domain=finance</code>, <code>team=analytics</code>.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Tablas Certificadas')}
                                <p>Las tablas pueden marcarse como <strong>Certificadas</strong> en Unity Catalog para señalar que son <strong>fuentes de datos confiables y verificadas</strong>.</p>
                                <p>Los usuarios pueden filtrar en <strong>Catalog Explorer</strong> por certificación para encontrar datos de calidad rápidamente.</p>
                            </div>
                            ${styleBox('yellow', 'Etiquetas (Tags)')}
                                <p><strong>Etiquetas clave-valor</strong> para clasificar y buscar activos de datos en los catálogos.</p>
                                <p>Ejemplos: <code>pii=true</code>, <code>domain=finanzas</code>, <code>team=analitica</code>.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Data Lineage / Linaje de Datos",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Automatic Tracking')}
                                Unity Catalog <strong>automatically tracks</strong> data lineage — where each table/column comes from and what consumes it.
                            </div>
                            <p>Visible in <strong>Catalog Explorer</strong> as an interactive graph. Includes <strong>column-level lineage</strong> for granular tracking.</p>
                            <h5>Use Cases</h5>
                            <ul>
                                <li><strong>Regulatory compliance:</strong> Prove data provenance for audits.</li>
                                <li><strong>Impact analysis:</strong> Know what breaks before changing a schema.</li>
                                <li><strong>Root cause analysis:</strong> Trace data quality issues to their source.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Rastreo Automático')}
                                Unity Catalog <strong>rastrea automáticamente</strong> el linaje de datos — de dónde viene cada tabla/columna y qué la consume.
                            </div>
                            <p>Visible en <strong>Catalog Explorer</strong> como un grafo interactivo. Incluye <strong>linaje a nivel de columna</strong> para rastreo granular.</p>
                            <h5>Casos de Uso</h5>
                            <ul>
                                <li><strong>Cumplimiento regulatorio:</strong> Probar procedencia de datos para auditorías.</li>
                                <li><strong>Análisis de impacto:</strong> Saber qué se rompe antes de cambiar un esquema.</li>
                                <li><strong>Análisis de causa raíz:</strong> Rastrear problemas de calidad hasta su origen.</li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // --- 18. Securing Data (Advanced) ---
        {
            title: "18. Securing Data (Advanced) / Seguridad de Datos (Avanzado)",
            items: [
                {
                    title: "Table Ownership / Propiedad de Tablas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'Critical Concept')}
                                The <strong>Owner</strong> of a table has <strong>full control</strong> over its permissions. Only the Owner or a <strong>Metastore Admin</strong> can GRANT/REVOKE access.
                            </div>
                            <ul>
                                <li>Every securable object has exactly one owner.</li>
                                <li>Ownership can be <strong>transferred</strong> by the current owner or admin.</li>
                                <li>The creator of an object is its initial owner.</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'Concepto Crítico')}
                                El <strong>Owner</strong> de una tabla tiene <strong>control total</strong> sobre sus permisos. Solo el Owner o un <strong>Metastore Admin</strong> puede hacer GRANT/REVOKE.
                            </div>
                            <ul>
                                <li>Cada objeto asegurable tiene exactamente un propietario.</li>
                                <li>La propiedad puede ser <strong>transferida</strong> por el owner actual o admin.</li>
                                <li>El creador de un objeto es su propietario inicial.</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "PII Protection / Protección de PII",
                    content: `
                        ${langSection('en', `
                            <p><strong>PII</strong> = Personally Identifiable Information (names, SSNs, emails).</p>
                            <h5>Column Masks</h5>
                            <p>Hide or transform sensitive column values based on user/group. Non-admin users see masked data (e.g., <code>***-**-1234</code>).</p>
                            <h5>Row Filters</h5>
                            <p>Limit which <strong>rows</strong> a user can see based on their identity or group membership.</p>
                            ${styleBox('green', 'Configuration')}
                                Both Column Masks and Row Filters are configured <strong>directly in Unity Catalog</strong> — no need to create separate views.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p><strong>PII</strong> = Información Personal Identificable (nombres, números de seguro social, emails).</p>
                            <h5>Máscaras de Columna (Column Masks)</h5>
                            <p>Ocultan o transforman valores sensibles según usuario/grupo. Usuarios no-admin ven datos enmascarados (ej. <code>***-**-1234</code>).</p>
                            <h5>Filtros de Fila (Row Filters)</h5>
                            <p>Limitan qué <strong>filas</strong> puede ver un usuario basándose en su identidad o pertenencia a grupo.</p>
                            ${styleBox('green', 'Configuración')}
                                Tanto Column Masks como Row Filters se configuran <strong>directamente en Unity Catalog</strong> — sin necesidad de crear vistas separadas.
                            </div>
                        `)}
                    `
                }
            ]
        }
    ];
})();
