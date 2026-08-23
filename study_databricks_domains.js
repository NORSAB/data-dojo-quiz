// ============================================================
// DOMAIN MASTERY MODULE — Databricks DA Associate
// Deep-dive content for ALL 9 exam domains
// Extracted from 300-question bank analysis
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

    const domainSections = [
        // =====================================================
        // DOMAIN 1: UNDERSTANDING DATABRICKS PLATFORM (80%)
        // 30 questions — Your strongest domain
        // Focus: Lakehouse architecture, personas, Medallion
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#22c55e" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#22c55e" stroke-width="2"/><path d="M9 12l2 2 4-4" fill="none" stroke="#22c55e" stroke-width="2"/></svg> D1. Databricks Platform — Architecture & Personas',
            items: [
                {
                    title: "1.1 Lakehouse Architecture — Control Plane vs Data Plane",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Architecture Questions Are Guaranteed')}
                                The exam ALWAYS tests the separation between Control Plane and Data Plane. Understand what lives where.
                            </div>
                            <h5>Control Plane (Managed by Databricks)</h5>
                            <ul>
                                <li><strong>Workspace UI</strong> — notebooks, SQL editor, dashboards</li>
                                <li><strong>Cluster management</strong> — starting/stopping compute</li>
                                <li><strong>Job scheduler</strong> — Databricks Workflows orchestration</li>
                                <li><strong>Unity Catalog metastore</strong> — metadata, permissions, lineage</li>
                                <li><strong>User management</strong> — authentication, SCIM, SSO</li>
                            </ul>
                            <h5>Data Plane (In YOUR Cloud Account)</h5>
                            <ul>
                                <li><strong>Data files</strong> — stored in YOUR S3/ADLS/GCS buckets</li>
                                <li><strong>Compute resources</strong> — clusters and warehouses run in your VPC</li>
                                <li><strong>Delta tables</strong> — Parquet files + transaction logs</li>
                                <li>Databricks <strong>never sees your raw data</strong> — only metadata</li>
                            </ul>

                            ${styleBox('yellow', 'Exam Decision Pattern')}
                                <p><strong>Q: "Where does Databricks store customer data?"</strong></p>
                                <ul>
                                    <li>"Databricks cloud" or "Control plane" → <strong>WRONG</strong></li>
                                    <li>"Customer's cloud account" or "Data plane" → <strong>CORRECT</strong></li>
                                </ul>
                                <p><strong>Key principle:</strong> Databricks manages the <em>orchestration</em>, your cloud manages the <em>data</em>.</p>
                            </div>

                            <h5>Lakehouse = Data Warehouse + Data Lake</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Data Lake</th><th>Data Warehouse</th><th>Lakehouse</th></tr>
                                <tr><td><strong>Storage</strong></td><td>Cheap object storage</td><td>Proprietary format</td><td>Open format (Delta/Parquet) on object storage</td></tr>
                                <tr><td><strong>ACID</strong></td><td>No</td><td>Yes</td><td>Yes (Delta Lake)</td></tr>
                                <tr><td><strong>Schema</strong></td><td>Schema-on-read</td><td>Schema-on-write</td><td>Both (schema enforcement + evolution)</td></tr>
                                <tr><td><strong>Data types</strong></td><td>All (structured + unstructured)</td><td>Structured only</td><td>All types</td></tr>
                                <tr><td><strong>Performance</strong></td><td>Slow queries</td><td>Fast queries</td><td>Fast queries + cheap storage</td></tr>
                            </table>

                            ${styleBox('blue', 'Why Lakehouse Exists')}
                                <p>Organizations used to maintain <strong>two separate systems</strong>: a data lake for cheap storage + AI/ML, and a data warehouse for BI. This caused:</p>
                                <ul>
                                    <li><strong>Data duplication</strong> — same data in two places</li>
                                    <li><strong>Stale data</strong> — warehouse copy always lags behind lake</li>
                                    <li><strong>Governance chaos</strong> — two systems = two permission models</li>
                                </ul>
                                <p>The Lakehouse <strong>unifies both</strong> into a single platform with one copy of data.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Preguntas de Arquitectura Son Garantizadas')}
                                El examen SIEMPRE evalúa la separación entre Control Plane y Data Plane. Entiende qué vive dónde.
                            </div>
                            <h5>Control Plane (Administrado por Databricks)</h5>
                            <ul>
                                <li><strong>Workspace UI</strong> — notebooks, SQL editor, dashboards</li>
                                <li><strong>Gestión de clusters</strong> — iniciar/detener cómputo</li>
                                <li><strong>Programador de jobs</strong> — orquestación con Databricks Workflows</li>
                                <li><strong>Unity Catalog metastore</strong> — metadata, permisos, linaje</li>
                                <li><strong>User management</strong> — autenticación, SCIM, SSO</li>
                            </ul>
                            <h5>Data Plane (En TU Cuenta Cloud)</h5>
                            <ul>
                                <li><strong>Archivos de datos</strong> — almacenados en TUS buckets S3/ADLS/GCS</li>
                                <li><strong>Recursos de cómputo</strong> — clusters y warehouses corren en tu VPC</li>
                                <li><strong>Tablas Delta</strong> — archivos Parquet + logs de transacciones</li>
                                <li>Databricks <strong>nunca ve tus datos raw</strong> — solo metadata</li>
                            </ul>

                            ${styleBox('yellow', 'Patrón de Decisión de Examen')}
                                <p><strong>P: "¿Dónde almacena Databricks los datos del cliente?"</strong></p>
                                <ul>
                                    <li>"Nube de Databricks" o "Control plane" → <strong>INCORRECTO</strong></li>
                                    <li>"Cuenta cloud del cliente" o "Data plane" → <strong>CORRECTO</strong></li>
                                </ul>
                                <p><strong>Principio clave:</strong> Databricks administra la <em>orquestación</em>, tu nube administra los <em>datos</em>.</p>
                            </div>

                            <h5>Lakehouse = Data Warehouse + Data Lake</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Característica</th><th>Data Lake</th><th>Data Warehouse</th><th>Lakehouse</th></tr>
                                <tr><td><strong>Almacenamiento</strong></td><td>Object storage barato</td><td>Formato propietario</td><td>Formato abierto (Delta/Parquet) en object storage</td></tr>
                                <tr><td><strong>ACID</strong></td><td>No</td><td>Sí</td><td>Sí (Delta Lake)</td></tr>
                                <tr><td><strong>Esquema</strong></td><td>Schema-on-read</td><td>Schema-on-write</td><td>Ambos (enforcement + evolution)</td></tr>
                                <tr><td><strong>Tipos de datos</strong></td><td>Todos (estructurados + no estructurados)</td><td>Solo estructurados</td><td>Todos los tipos</td></tr>
                                <tr><td><strong>Rendimiento</strong></td><td>Queries lentos</td><td>Queries rápidos</td><td>Queries rápidos + storage barato</td></tr>
                            </table>

                            ${styleBox('blue', 'Por Qué Existe el Lakehouse')}
                                <p>Las organizaciones solían mantener <strong>dos sistemas separados</strong>: un data lake para almacenamiento barato + AI/ML, y un data warehouse para BI. Esto causaba:</p>
                                <ul>
                                    <li><strong>Datos duplicados</strong> — mismos datos en dos lugares</li>
                                    <li><strong>Datos obsoletos</strong> — la copia del warehouse siempre se atrasa respecto al lake</li>
                                    <li><strong>Caos de gobernanza</strong> — dos sistemas = dos modelos de permisos</li>
                                </ul>
                                <p>El Lakehouse <strong>unifica ambos</strong> en una sola plataforma con una única copia de datos.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Medallion Architecture — Bronze, Silver, Gold",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Medallion Layers Map to Roles')}
                                <p><strong>EXAM TIP:</strong> Bronze = ingestion (engineers), Silver = cleaning (engineers), Gold = analytics (analysts). The exam tests persona-to-layer mapping.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Layer</th><th>Purpose</th><th>Data Quality</th><th>Who Uses It</th></tr>
                                <tr>
                                    <td><strong>Bronze</strong> (Raw)</td>
                                    <td>Raw data "as-is" from sources. Append-only, no transformations.</td>
                                    <td>Low — may have duplicates, nulls, schema issues</td>
                                    <td>Data Engineers (ingestion)</td>
                                </tr>
                                <tr>
                                    <td><strong>Silver</strong> (Cleaned)</td>
                                    <td>Cleaned, deduplicated, joined. <strong>Single Source of Truth</strong>.</td>
                                    <td>Medium — validated, conformed schema</td>
                                    <td>Data Engineers, advanced analysts</td>
                                </tr>
                                <tr>
                                    <td><strong>Gold</strong> (Business)</td>
                                    <td>Business-level aggregations, Star Schema, KPIs. Dashboard-ready.</td>
                                    <td>High — curated, aggregated, documented</td>
                                    <td>Data Analysts, BI Analysts, Executives</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Exam Trap: "Source of Truth"')}
                                <p>When the exam asks "Which layer is the single source of truth?", the answer is <strong>Silver</strong>.</p>
                                <ul>
                                    <li>Bronze is raw and has quality issues</li>
                                    <li>Gold is aggregated (you lose row-level detail)</li>
                                    <li><strong>Silver = cleaned, row-level, validated data = source of truth</strong></li>
                                </ul>
                            </div>

                            <h5>Data Flow Visualization</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Sources (APIs, DBs, Files)
    │
    ▼
┌─────────┐   COPY INTO / Auto Loader
│ BRONZE  │   Raw, append-only, no transforms
│ (Raw)   │   Schema enforcement ON
└────┬────┘
     │  Filter, deduplicate, join, cast types
     ▼
┌─────────┐   
│ SILVER  │   Cleaned, validated, conformed
│ (Clean) │   SINGLE SOURCE OF TRUTH
└────┬────┘
     │  Aggregate, model, Star Schema
     ▼
┌─────────┐
│  GOLD   │   Business KPIs, dashboards
│ (Biz)   │   What analysts query daily
└─────────┘</pre>

                            ${styleBox('green', 'Delta Lake Makes This Possible')}
                                <ul>
                                    <li><strong>ACID transactions</strong> — safe concurrent reads/writes at each layer</li>
                                    <li><strong>Time Travel</strong> — <code>VERSION AS OF</code> / <code>TIMESTAMP AS OF</code> to see historical state</li>
                                    <li><strong>Schema Enforcement</strong> — rejects bad data at Bronze/Silver boundaries</li>
                                    <li><strong>OPTIMIZE + ZORDER</strong> — compact small files for fast Gold queries</li>
                                    <li><strong>Delta = Parquet files + Transaction Log (JSON)</strong></li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Capas Medallion Mapean a Roles')}
                                <p><strong>DATO DE EXAMEN:</strong> Bronze = ingesta (ingenieros), Silver = limpieza (ingenieros), Gold = análisis (analistas). El examen evalúa mapeo persona-a-capa.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Capa</th><th>Propósito</th><th>Calidad de Datos</th><th>Quién la Usa</th></tr>
                                <tr>
                                    <td><strong>Bronze</strong> (Raw)</td>
                                    <td>Datos crudos "tal cual" de las fuentes. Solo agregar, sin transformaciones.</td>
                                    <td>Baja — puede tener duplicados, nulos, problemas de esquema</td>
                                    <td>Data Engineers (ingesta)</td>
                                </tr>
                                <tr>
                                    <td><strong>Silver</strong> (Limpio)</td>
                                    <td>Limpio, deduplicado, unido. <strong>Fuente Única de Verdad</strong>.</td>
                                    <td>Media — validado, esquema conformado</td>
                                    <td>Data Engineers, analistas avanzados</td>
                                </tr>
                                <tr>
                                    <td><strong>Gold</strong> (Negocio)</td>
                                    <td>Agregaciones de negocio, Star Schema, KPIs. Listo para dashboards.</td>
                                    <td>Alta — curado, agregado, documentado</td>
                                    <td>Data Analysts, BI Analysts, Ejecutivos</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Trampa de Examen: "Fuente de Verdad"')}
                                <p>Cuando el examen pregunta "¿Cuál capa es la fuente única de verdad?", la respuesta es <strong>Silver</strong>.</p>
                                <ul>
                                    <li>Bronze es raw y tiene problemas de calidad</li>
                                    <li>Gold es agregado (pierdes detalle a nivel de fila)</li>
                                    <li><strong>Silver = datos limpios, a nivel de fila, validados = fuente de verdad</strong></li>
                                </ul>
                            </div>

                            <h5>Visualización de Flujo de Datos</h5>
                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Fuentes (APIs, DBs, Archivos)
    │
    ▼
┌─────────┐   COPY INTO / Auto Loader
│ BRONZE  │   Raw, solo agregar, sin transforms
│ (Raw)   │   Schema enforcement ON
└────┬────┘
     │  Filtrar, deduplicar, unir, cambiar tipos
     ▼
┌─────────┐   
│ SILVER  │   Limpio, validado, conformado
│ (Limpio)│   FUENTE ÚNICA DE VERDAD
└────┬────┘
     │  Agregar, modelar, Star Schema
     ▼
┌─────────┐
│  GOLD   │   KPIs de negocio, dashboards
│(Negocio)│   Lo que analistas consultan a diario
└─────────┘</pre>

                            ${styleBox('green', 'Delta Lake Hace Esto Posible')}
                                <ul>
                                    <li><strong>Transacciones ACID</strong> — lecturas/escrituras concurrentes seguras en cada capa</li>
                                    <li><strong>Time Travel</strong> — <code>VERSION AS OF</code> / <code>TIMESTAMP AS OF</code> para ver estado histórico</li>
                                    <li><strong>Schema Enforcement</strong> — rechaza datos malos en los límites de Bronze/Silver</li>
                                    <li><strong>OPTIMIZE + ZORDER</strong> — compacta archivos pequeños para queries rápidos en Gold</li>
                                    <li><strong>Delta = Archivos Parquet + Transaction Log (JSON)</strong></li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.3 Personas & Services — Who Uses What",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Persona-to-Service Mapping')}
                                <p>The exam tests which service each persona uses. This is a <strong>guaranteed question type</strong>.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Persona</th><th>Primary Service</th><th>What They Do</th></tr>
                                <tr>
                                    <td><strong>Data Engineer</strong></td>
                                    <td>Workspace (Notebooks + Spark)</td>
                                    <td>Build ETL pipelines, ingest data, manage Bronze/Silver layers</td>
                                </tr>
                                <tr>
                                    <td><strong>Data Analyst / BI Analyst</strong></td>
                                    <td><strong>Databricks SQL</strong> (SQL Editor + SQL Warehouses)</td>
                                    <td>Write queries, build dashboards, analyze Gold layer</td>
                                </tr>
                                <tr>
                                    <td><strong>Data Scientist</strong></td>
                                    <td>Workspace (Notebooks + MLflow)</td>
                                    <td>Train models, experiment tracking, feature engineering</td>
                                </tr>
                                <tr>
                                    <td><strong>Business User</strong></td>
                                    <td>Dashboards + <strong>AI/BI Genie</strong></td>
                                    <td>View dashboards, ask natural language questions</td>
                                </tr>
                            </table>

                            ${styleBox('blue', 'Databricks SQL vs External BI Tools')}
                                <p>Think of Databricks SQL as the <strong>"inner loop" BI</strong> (explore, prototype, validate) and tools like Tableau/Power BI as the <strong>"outer loop" BI</strong> (polished reports for stakeholders).</p>
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Feature</th><th>Databricks SQL</th><th>External BI (Tableau/Power BI)</th></tr>
                                    <tr><td>Best for</td><td>Fast exploration, prototyping</td><td>Polished executive reports</td></tr>
                                    <tr><td>Data size</td><td><strong>Huge datasets</strong> (pushes queries to warehouse)</td><td>May struggle with very large data</td></tr>
                                    <tr><td>Sharing</td><td>Within Databricks workspace</td><td>Enterprise-wide distribution</td></tr>
                                    <tr><td>Connected via</td><td>Native</td><td>Partner Connect / JDBC/ODBC</td></tr>
                                </table>
                            </div>

                            ${styleBox('yellow', 'Exam Decision Pattern')}
                                <p>Q: "A data analyst needs to quickly explore a large dataset and build a prototype dashboard..."</p>
                                <ul>
                                    <li>"Tableau" → Wrong (too complex for quick exploration)</li>
                                    <li>"Databricks SQL" → <strong>CORRECT</strong> (built-in, fast, native access to data)</li>
                                </ul>
                                <p>Q: "A polished dashboard needs to be shared with 500 executives who don't have Databricks access..."</p>
                                <ul>
                                    <li>"Databricks SQL dashboard" → Partial answer (embedded dashboards work for this)</li>
                                    <li>"External BI tool via Partner Connect" → Also valid depending on context</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Mapeo Persona-a-Servicio')}
                                <p>El examen evalúa qué servicio usa cada persona. Este es un <strong>tipo de pregunta garantizada</strong>.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Persona</th><th>Servicio Principal</th><th>Qué Hacen</th></tr>
                                <tr>
                                    <td><strong>Data Engineer</strong></td>
                                    <td>Workspace (Notebooks + Spark)</td>
                                    <td>Construir pipelines ETL, ingestar datos, gestionar capas Bronze/Silver</td>
                                </tr>
                                <tr>
                                    <td><strong>Data Analyst / BI Analyst</strong></td>
                                    <td><strong>Databricks SQL</strong> (SQL Editor + SQL Warehouses)</td>
                                    <td>Escribir queries, construir dashboards, analizar capa Gold</td>
                                </tr>
                                <tr>
                                    <td><strong>Data Scientist</strong></td>
                                    <td>Workspace (Notebooks + MLflow)</td>
                                    <td>Entrenar modelos, tracking de experimentos, feature engineering</td>
                                </tr>
                                <tr>
                                    <td><strong>Business User</strong></td>
                                    <td>Dashboards + <strong>AI/BI Genie</strong></td>
                                    <td>Ver dashboards, hacer preguntas en lenguaje natural</td>
                                </tr>
                            </table>

                            ${styleBox('blue', 'Databricks SQL vs Herramientas BI Externas')}
                                <p>Piensa en Databricks SQL como el <strong>"BI de loop interno"</strong> (explorar, prototipar, validar) y herramientas como Tableau/Power BI como el <strong>"BI de loop externo"</strong> (reportes pulidos para stakeholders).</p>
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Característica</th><th>Databricks SQL</th><th>BI Externo (Tableau/Power BI)</th></tr>
                                    <tr><td>Mejor para</td><td>Exploración rápida, prototipado</td><td>Reportes ejecutivos pulidos</td></tr>
                                    <tr><td>Tamaño de datos</td><td><strong>Grandes volúmenes</strong> (empuja queries al warehouse)</td><td>Puede sufrir con datos muy grandes</td></tr>
                                    <tr><td>Compartir</td><td>Dentro del workspace de Databricks</td><td>Distribución en toda la empresa</td></tr>
                                    <tr><td>Conexión vía</td><td>Nativa</td><td>Partner Connect / JDBC/ODBC</td></tr>
                                </table>
                            </div>

                            ${styleBox('yellow', 'Patrón de Decisión de Examen')}
                                <p>P: "Un analista de datos necesita explorar rápidamente un conjunto grande de datos y armar un dashboard prototipo..."</p>
                                <ul>
                                    <li>"Tableau" → Incorrecto (muy complejo para exploración rápida)</li>
                                    <li>"Databricks SQL" → <strong>CORRECTO</strong> (incorporado, rápido, acceso nativo a datos)</li>
                                </ul>
                                <p>P: "Un dashboard pulido debe compartirse con 500 ejecutivos que no tienen acceso a Databricks..."</p>
                                <ul>
                                    <li>"Databricks SQL dashboard" → Respuesta parcial (dashboards embebidos sirven para esto)</li>
                                    <li>"Herramienta BI externa vía Partner Connect" → También válida dependiendo del contexto</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.4 Delta Lake — The Foundation of Everything",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Delta Lake = Parquet + Transaction Log')}
                                <p>Every table in Databricks is a Delta table by default. Understanding Delta is foundational for the entire exam.</p>
                            </div>

                            <h5>What Makes Delta Lake Special</h5>
                            <pre><code>Delta Lake = Parquet files + Transaction Log (JSON)
                            
-- The transaction log (_delta_log/) records every change:
-- - What files were added/removed
-- - Schema changes
-- - Checkpoint files every 10 commits</code></pre>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>What It Does</th><th>Exam Keyword</th></tr>
                                <tr><td><strong>ACID Transactions</strong></td><td>Atomic writes, no partial updates visible</td><td>"concurrent reads and writes safely"</td></tr>
                                <tr><td><strong>Time Travel</strong></td><td>Query previous versions of data</td><td>"historical data", "previous version"</td></tr>
                                <tr><td><strong>Schema Enforcement</strong></td><td>Rejects writes that don't match schema</td><td>"prevent bad data", "strict schema"</td></tr>
                                <tr><td><strong>Schema Evolution</strong></td><td>Adds new columns automatically</td><td>"new columns", "evolve", "mergeSchema"</td></tr>
                                <tr><td><strong>OPTIMIZE</strong></td><td>Compacts small files into larger ones</td><td>"small file problem", "performance"</td></tr>
                                <tr><td><strong>ZORDER BY</strong></td><td>Co-locates related data in same files</td><td>"filter performance", "selective queries"</td></tr>
                                <tr><td><strong>Liquid Clustering</strong></td><td>Automatic replacement for ZORDER (2025+)</td><td>"automatic", "no manual tuning"</td></tr>
                            </table>

                            <h5>Time Travel Syntax</h5>
                            <pre><code>-- Query a specific version
SELECT * FROM sales VERSION AS OF 5;

-- Query at a specific timestamp
SELECT * FROM sales TIMESTAMP AS OF '2024-01-15T10:00:00';

-- Restore to a previous version
RESTORE TABLE sales TO VERSION AS OF 3;

-- View table history
DESCRIBE HISTORY sales;</code></pre>

                            ${styleBox('yellow', 'Time Travel + VACUUM Interaction (Exam Trap!)')}
                                <p><strong>VACUUM</strong> deletes old files that are no longer referenced by the current version. Default retention: <strong>7 days</strong>.</p>
                                <p>After VACUUM runs, <strong>Time Travel to versions older than the retention period will FAIL</strong> because the underlying files have been deleted.</p>
                                <pre><code>-- Default: keep 7 days of history
VACUUM sales;

-- Custom retention (at least 7 days recommended)
VACUUM sales RETAIN 30 HOURS;

-- WARNING: This breaks Time Travel for old versions!
VACUUM sales RETAIN 0 HOURS; -- Dangerous!</code></pre>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Delta Lake = Parquet + Transaction Log')}
                                <p>Cada tabla en Databricks es una tabla Delta por defecto. Entender Delta es fundamental para todo el examen.</p>
                            </div>

                            <h5>Qué Hace Especial a Delta Lake</h5>
                            <pre><code>Delta Lake = Archivos Parquet + Transaction Log (JSON)

-- El log de transacciones (_delta_log/) registra cada cambio:
-- - Qué archivos se agregaron/removieron
-- - Cambios de esquema
-- - Checkpoints cada 10 commits</code></pre>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Qué Hace</th><th>Keyword de Examen</th></tr>
                                <tr><td><strong>ACID Transactions</strong></td><td>Escrituras atómicas, no se ven updates parciales</td><td>"lecturas y escrituras concurrentes seguras"</td></tr>
                                <tr><td><strong>Time Travel</strong></td><td>Consultar versiones previas de los datos</td><td>"datos históricos", "versión anterior"</td></tr>
                                <tr><td><strong>Schema Enforcement</strong></td><td>Rechaza escrituras que no coinciden con el esquema</td><td>"prevenir datos malos", "esquema estricto"</td></tr>
                                <tr><td><strong>Schema Evolution</strong></td><td>Agrega columnas nuevas automáticamente</td><td>"nuevas columnas", "evolve", "mergeSchema"</td></tr>
                                <tr><td><strong>OPTIMIZE</strong></td><td>Compacta archivos pequeños en archivos más grandes</td><td>"problema de archivos pequeños", "rendimiento"</td></tr>
                                <tr><td><strong>ZORDER BY</strong></td><td>Co-localiza datos relacionados en los mismos archivos</td><td>"rendimiento de filtros", "queries selectivos"</td></tr>
                                <tr><td><strong>Liquid Clustering</strong></td><td>Reemplazo automático para ZORDER (2025+)</td><td>"automático", "no tuning manual"</td></tr>
                            </table>

                            <h5>Sintaxis de Time Travel</h5>
                            <pre><code>-- Consultar una versión específica
SELECT * FROM ventas VERSION AS OF 5;

-- Consultar en un timestamp específico
SELECT * FROM ventas TIMESTAMP AS OF '2024-01-15T10:00:00';

-- Restaurar a una versión previa
RESTORE TABLE ventas TO VERSION AS OF 3;

-- Ver historial de tabla
DESCRIBE HISTORY ventas;</code></pre>

                            ${styleBox('yellow', 'Time Travel + VACUUM Interacción (¡Trampa de Examen!)')}
                                <p><strong>VACUUM</strong> elimina archivos viejos que ya no son referenciados por la versión actual. Retención por defecto: <strong>7 días</strong>.</p>
                                <p>Después de VACUUM, <strong>Time Travel a versiones anteriores al período de retención FALLARÁ</strong> porque los archivos subyacentes fueron eliminados.</p>
                                <pre><code>-- Por defecto: mantiene 7 días de historial
VACUUM ventas;

-- Retención personalizada (recomendado al menos 7 días)
VACUUM ventas RETAIN 30 HOURS;

-- ADVERTENCIA: ¡Esto rompe Time Travel para versiones viejas!
VACUUM ventas RETAIN 0 HOURS; -- ¡Peligroso!</code></pre>
                            </div>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 4: EXECUTING QUERIES (77%)
        // 70 questions — LARGEST domain in the exam!
        // Focus: SQL Warehouses, SQL Editor, scheduling,
        //        SQL syntax, NULLs, window functions
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/><path d="M9 12l2 2 4-4" fill="none" stroke="#f59e0b" stroke-width="2"/></svg> D4. Executing Queries — SQL Warehouses & SQL Syntax (70 Questions!)',
            items: [
                {
                    title: "4.1 SQL Warehouse Types — Classic vs Pro vs Serverless",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Warehouse Selection Is Heavily Tested')}
                                <p>The exam tests <strong>when to choose each warehouse type</strong> and <strong>cost implications</strong>. This is the most important decision pattern in Section 4.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Classic</th><th>Pro</th><th>Serverless</th></tr>
                                <tr><td><strong>Photon Engine</strong></td><td>No</td><td><strong>Yes</strong></td><td><strong>Yes</strong></td></tr>
                                <tr><td><strong>Startup Time</strong></td><td>5-10 minutes</td><td>5-10 minutes</td><td><strong>2-6 seconds</strong></td></tr>
                                <tr><td><strong>Auto-scaling</strong></td><td>Manual config</td><td>Manual config</td><td><strong>AI-driven automatic</strong></td></tr>
                                <tr><td><strong>Infrastructure</strong></td><td>Your cloud</td><td>Your cloud</td><td><strong>Databricks-managed</strong></td></tr>
                                <tr><td><strong>Cost model</strong></td><td>DBU/hour</td><td>DBU/hour (higher)</td><td><strong>DBU/second</strong> (no idle costs)</td></tr>
                                <tr><td><strong>Best for</strong></td><td>Basic queries, budget</td><td>Complex analytics</td><td><strong>Scheduled queries, fast startup</strong></td></tr>
                                <tr><td><strong>Materialized Views</strong></td><td>No</td><td><strong>Yes</strong></td><td><strong>Yes</strong></td></tr>
                            </table>

                            ${styleBox('yellow', 'Exam Decision Patterns')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Exam Scenario</th><th>Choose</th><th>Why</th></tr>
                                    <tr><td>"Cold-start problem / warehouse takes too long to start"</td><td><strong>Serverless</strong></td><td>2-6 second startup eliminates cold-start</td></tr>
                                    <tr><td>"Scheduled query runs at midnight, warehouse must be ready"</td><td><strong>Serverless</strong></td><td>Instant startup, no idle cost waiting</td></tr>
                                    <tr><td>"Complex analytical queries need maximum performance"</td><td><strong>Pro</strong></td><td>Photon engine without serverless markup</td></tr>
                                    <tr><td>"Need Materialized Views for dashboard performance"</td><td><strong>Pro or Serverless</strong></td><td>Classic doesn't support MVs</td></tr>
                                    <tr><td>"Minimize costs, basic queries only"</td><td><strong>Classic</strong></td><td>Lowest DBU rate</td></tr>
                                    <tr><td>"Unpredictable workload patterns"</td><td><strong>Serverless</strong></td><td>AI-driven autoscaling adapts automatically</td></tr>
                                </table>
                            </div>

                            <h5>Auto Stop Configuration</h5>
                            <pre><code>-- Auto Stop = warehouse shuts down after idle period
-- Default: 10 minutes of no queries
-- Minimum: 5 minutes (cannot set lower)
-- Best practice: Align with dashboard refresh schedule

-- Example: If dashboard refreshes every 15 min,
-- set Auto Stop to 20 min to avoid restart between refreshes</code></pre>

                            ${styleBox('green', 'Cost Optimization Tips')}
                                <ul>
                                    <li><strong>Auto Stop</strong> prevents idle warehouse costs — always configure</li>
                                    <li><strong>Cluster size</strong> (T-shirt sizes: 2X-Small to 4X-Large) — start small, scale up</li>
                                    <li><strong>Scaling policy</strong>: min/max clusters for concurrency handling</li>
                                    <li>Serverless has <strong>no idle costs</strong> — you only pay when queries run</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Selección de Warehouse Es Muy Evaluada')}
                                <p>El examen evalúa <strong>cuándo elegir cada tipo de warehouse</strong> e <strong>implicaciones de costo</strong>. Este es el patrón de decisión más importante en la Sección 4.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Classic</th><th>Pro</th><th>Serverless</th></tr>
                                <tr><td><strong>Motor Photon</strong></td><td>No</td><td><strong>Sí</strong></td><td><strong>Sí</strong></td></tr>
                                <tr><td><strong>Tiempo de Arranque</strong></td><td>5-10 minutos</td><td>5-10 minutos</td><td><strong>2-6 segundos</strong></td></tr>
                                <tr><td><strong>Auto-scaling</strong></td><td>Config manual</td><td>Config manual</td><td><strong>Automático con IA</strong></td></tr>
                                <tr><td><strong>Infraestructura</strong></td><td>Tu nube</td><td>Tu nube</td><td><strong>Administrada por Databricks</strong></td></tr>
                                <tr><td><strong>Modelo de costo</strong></td><td>DBU/hora</td><td>DBU/hora (más alto)</td><td><strong>DBU/segundo</strong> (sin costos idle)</td></tr>
                                <tr><td><strong>Mejor para</strong></td><td>Queries básicos, presupuesto</td><td>Analítica compleja</td><td><strong>Queries programados, arranque rápido</strong></td></tr>
                                <tr><td><strong>Vistas Materializadas</strong></td><td>No</td><td><strong>Sí</strong></td><td><strong>Sí</strong></td></tr>
                            </table>

                            ${styleBox('yellow', 'Patrones de Decisión del Examen')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Escenario de Examen</th><th>Elegir</th><th>Por qué</th></tr>
                                    <tr><td>"Problema de cold-start / warehouse tarda mucho en arrancar"</td><td><strong>Serverless</strong></td><td>Arranque en 2-6 segundos elimina cold-start</td></tr>
                                    <tr><td>"Query programado a medianoche, warehouse debe estar listo"</td><td><strong>Serverless</strong></td><td>Arranque instantáneo, sin costo idle esperando</td></tr>
                                    <tr><td>"Queries analíticos complejos necesitan máximo rendimiento"</td><td><strong>Pro</strong></td><td>Motor Photon sin sobrecargo serverless</td></tr>
                                    <tr><td>"Necesita Vistas Materializadas para rendimiento de dashboard"</td><td><strong>Pro o Serverless</strong></td><td>Classic no soporta MVs</td></tr>
                                    <tr><td>"Minimizar costos, solo queries básicos"</td><td><strong>Classic</strong></td><td>Tasa DBU más baja</td></tr>
                                    <tr><td>"Patrones de carga de trabajo impredecibles"</td><td><strong>Serverless</strong></td><td>Autoscaling con IA se adapta automáticamente</td></tr>
                                </table>
                            </div>

                            <h5>Configuración de Auto Stop</h5>
                            <pre><code>-- Auto Stop = el warehouse se apaga tras un período de inactividad
-- Por defecto: 10 minutos sin queries
-- Mínimo: 5 minutos (no se puede configurar menos)
-- Mejor práctica: Alinear con el horario de recarga del dashboard

-- Ejemplo: Si el dashboard recarga cada 15 min,
-- pon Auto Stop a 20 min para evitar reinicios entre llamadas</code></pre>

                            ${styleBox('green', 'Tips de Optimización de Costos')}
                                <ul>
                                    <li><strong>Auto Stop</strong> previene costos de warehouse inactivo — siempre configurar</li>
                                    <li><strong>Tamaño del cluster</strong> (T-shirt sizes: 2X-Small a 4X-Large) — iniciar pequeño, luego subir</li>
                                    <li><strong>Política de escalado</strong>: min/max clusters para manejo de concurrencia</li>
                                    <li>Serverless <strong>no tiene costos inactivos (idle)</strong> — solo se paga cuando corren queries</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.2 SQL Editor, Queries Page & Scheduling",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Three Distinct Interfaces — Know the Difference')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Interface</th><th>Purpose</th><th>Key Capabilities</th></tr>
                                    <tr>
                                        <td><strong>SQL Editor</strong></td>
                                        <td>Write + execute + save + <strong>schedule</strong> queries</td>
                                        <td>Code editor, autocomplete, results panel, schedule button</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Queries Page</strong></td>
                                        <td>Browse/manage <strong>saved queries</strong></td>
                                        <td>List view, search, filter by owner, share queries</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Query History</strong></td>
                                        <td><strong>Monitor</strong> past query executions</td>
                                        <td>Duration, I/O, cache hits, warehouse used, who ran it</td>
                                    </tr>
                                </table>
                            </div>

                            <h5>Scheduling Queries</h5>
                            ${styleBox('red', 'Scheduling Rules (Heavily Tested)')}
                                <ul>
                                    <li><strong>Who can schedule:</strong> Query Owner or users with <code>Can Manage</code> permission</li>
                                    <li><strong>NO admin role needed</strong> to schedule — just ownership or manage permission</li>
                                    <li><strong>Scheduled queries DO need an active SQL Warehouse</strong> — if warehouse is stopped and Auto Stop was triggered, the scheduled query will restart it</li>
                                    <li><strong>Frequency options:</strong> Every X minutes, hourly, daily, weekly, monthly, cron expression</li>
                                    <li><strong>Scheduled queries run as the owner</strong> — the owner's permissions determine data access</li>
                                </ul>
                            </div>

                            <h5>Databricks SQL Alerts</h5>
                            <pre><code>-- Alerts monitor a SINGLE NUMERIC VALUE from a query
-- Step 1: Create a query that returns ONE number
SELECT COUNT(*) AS error_count
FROM logs
WHERE level = 'ERROR'
  AND timestamp > CURRENT_TIMESTAMP() - INTERVAL 1 HOUR;

-- Step 2: Set alert condition
-- "Trigger when error_count > 100"
-- Alert destinations: Email, Slack, Webhook, PagerDuty</code></pre>

                            ${styleBox('yellow', 'Alert Limitations (Exam Traps)')}
                                <ul>
                                    <li>Alerts require <strong>single numeric value</strong> — cannot alert on text or multiple rows</li>
                                    <li>Parameters in alerts: <strong>only dropdowns</strong>, no date pickers</li>
                                    <li>Alert evaluation: runs on a <strong>schedule</strong>, not real-time</li>
                                    <li>Cannot create alerts from dashboard visualizations directly — must use a query</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Tres Interfaces Distintas — Conoce la Diferencia')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Interfaz</th><th>Propósito</th><th>Capacidades Clave</th></tr>
                                    <tr>
                                        <td><strong>SQL Editor</strong></td>
                                        <td>Escribir + ejecutar + guardar + <strong>programar</strong> queries</td>
                                        <td>Editor de código, autocompletado, panel de resultados, botón de programar</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Queries Page</strong></td>
                                        <td>Navegar/gestionar <strong>queries guardados</strong></td>
                                        <td>Vista de lista, búsqueda, filtrar por propietario, compartir queries</td>
                                    </tr>
                                    <tr>
                                        <td><strong>Query History</strong></td>
                                        <td><strong>Monitorear</strong> ejecuciones pasadas</td>
                                        <td>Duración, I/O, cache hits, warehouse usado, quién lo corrió</td>
                                    </tr>
                                </table>
                            </div>

                            <h5>Programación de Queries</h5>
                            ${styleBox('red', 'Reglas de Programación (Muy Evaluadas)')}
                                <ul>
                                    <li><strong>Quién puede programar:</strong> Owner del query o usuarios con permiso <code>Can Manage</code></li>
                                    <li><strong>NO se necesita rol de admin</strong> para programar — solo ownership o permiso manage</li>
                                    <li>Los queries programados <strong>SÍ necesitan un SQL Warehouse activo</strong> — si el warehouse está detenido y se activó Auto Stop, el query programado lo reiniciará</li>
                                    <li><strong>Opciones de frecuencia:</strong> Cada X minutos, por hora, diario, semanal, mensual, expresión cron</li>
                                    <li>Los queries programados <strong>corren como el owner</strong> — los permisos del owner determinan el acceso a datos</li>
                                </ul>
                            </div>

                            <h5>Databricks SQL Alerts</h5>
                            <pre><code>-- Las Alertas monitorean UN SOLO VALOR NUMÉRICO desde un query
-- Paso 1: Crea un query que devuelva UN número
SELECT COUNT(*) AS error_count
FROM logs
WHERE level = 'ERROR'
  AND timestamp > CURRENT_TIMESTAMP() - INTERVAL 1 HOUR;

-- Paso 2: Establece la condición de la alerta
-- "Disparar cuando error_count > 100"
-- Destinos de alerta: Email, Slack, Webhook, PagerDuty</code></pre>

                            ${styleBox('yellow', 'Limitaciones de las Alertas (Trampas de Examen)')}
                                <ul>
                                    <li>Las Alertas requieren <strong>un solo valor numérico</strong> — no pueden alertar sobre texto o múltiples filas</li>
                                    <li>Parámetros en alertas: <strong>solo dropdowns</strong>, no selectores de fecha</li>
                                    <li>Evaluación de alerta: corre con una <strong>programación periódica</strong>, no en tiempo real</li>
                                    <li>No se pueden crear alertas desde visualizaciones de dashboard directamente — debes usar un query</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.3 SQL Fundamentals — NULLs, Evaluation Order, CTEs",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — SQL Evaluation Order')}
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
SQL Evaluation Order (NOT the order you write it!):
1. FROM / JOIN   → Which tables?
2. WHERE         → Filter rows BEFORE grouping
3. GROUP BY      → Group rows
4. HAVING        → Filter groups AFTER grouping
5. SELECT        → Choose columns, apply functions
6. DISTINCT      → Remove duplicates
7. ORDER BY      → Sort results
8. LIMIT         → Cap number of rows</pre>
                            </div>

                            <h5>NULL Handling — Most Common Exam Trap</h5>
                            ${styleBox('red', 'NULLs in Comparisons = UNKNOWN (Not FALSE!)')}
                                <p>NULLs in comparison operators (<code>>=</code>, <code>=</code>, <code><</code>) evaluate to <strong>UNKNOWN</strong>, which is treated as <strong>FALSE</strong> in WHERE clauses. This means NULL rows are silently excluded.</p>
                                <pre><code>-- This query EXCLUDES rows where amount IS NULL!
SELECT * FROM sales WHERE amount >= 100;

-- To INCLUDE nulls, explicitly handle them:
SELECT * FROM sales WHERE amount >= 100 OR amount IS NULL;

-- COALESCE replaces NULL with a default value:
SELECT COALESCE(amount, 0) AS safe_amount FROM sales;

-- NULL-safe equality (IS NOT DISTINCT FROM):
SELECT * FROM a WHERE a.val IS NOT DISTINCT FROM b.val;</code></pre>
                            </div>

                            <h5>Common Table Expressions (CTEs)</h5>
                            <pre><code>-- CTEs make complex queries readable
WITH monthly_totals AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS month,
        SUM(amount) AS total
    FROM sales
    GROUP BY 1
),
ranked AS (
    SELECT *, 
        RANK() OVER (ORDER BY total DESC) AS rank
    FROM monthly_totals
)
SELECT * FROM ranked WHERE rank <= 3;</code></pre>

                            ${styleBox('green', 'CTE Best Practices for Exam')}
                                <ul>
                                    <li>CTEs are <strong>temporary, named result sets</strong> that exist only during query execution</li>
                                    <li>They <strong>improve readability</strong> — the exam prefers CTEs over nested subqueries</li>
                                    <li>CTEs can <strong>reference each other</strong> in sequence (monthly_totals → ranked)</li>
                                    <li>They are NOT stored as objects — unlike views or temp tables</li>
                                </ul>
                            </div>

                            <h5>CASE WHEN — Conditional Logic</h5>
                            <pre><code>SELECT 
    product_name,
    amount,
    CASE 
        WHEN amount > 1000 THEN 'Premium'
        WHEN amount > 100 THEN 'Standard'
        ELSE 'Basic'
    END AS tier
FROM sales;</code></pre>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Orden de Evaluación SQL')}
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Orden de Evaluación SQL (¡NO el orden en que lo escribes!):
1. FROM / JOIN   → ¿Cuáles tablas?
2. WHERE         → Filtrar filas ANTES de agrupar
3. GROUP BY      → Agrupar filas
4. HAVING        → Filtrar grupos DESPUÉS de agrupar
5. SELECT        → Elegir columnas, aplicar funciones
6. DISTINCT      → Eliminar duplicados
7. ORDER BY      → Ordenar resultados
8. LIMIT         → Limitar número de filas</pre>
                            </div>

                            <h5>Manejo de NULLs — La Trampa Más Común</h5>
                            ${styleBox('red', 'NULLs en Comparaciones = UNKNOWN (¡No FALSE!)')}
                                <p>NULLs en operadores de comparación (<code>>=</code>, <code>=</code>, <code><</code>) evalúan a <strong>UNKNOWN</strong>, que se trata como <strong>FALSE</strong> en cláusulas WHERE. Esto significa que las filas NULL se excluyen silenciosamente.</p>
                                <pre><code>-- ¡Este query EXCLUYE filas donde amount ES NULL!
SELECT * FROM sales WHERE amount >= 100;

-- Para INCLUIR nulls, manéjalos explícitamente:
SELECT * FROM sales WHERE amount >= 100 OR amount IS NULL;

-- COALESCE reemplaza NULL con un valor por defecto:
SELECT COALESCE(amount, 0) AS monto_seguro FROM sales;

-- Igualdad segura para NULLs (IS NOT DISTINCT FROM):
SELECT * FROM a WHERE a.val IS NOT DISTINCT FROM b.val;</code></pre>
                            </div>

                            <h5>Common Table Expressions (CTEs)</h5>
                            <pre><code>-- Los CTEs hacen que los queries complejos sean legibles
WITH totales_mensuales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS mes,
        SUM(amount) AS total
    FROM sales
    GROUP BY 1
),
rankeados AS (
    SELECT *, 
        RANK() OVER (ORDER BY total DESC) AS rank
    FROM totales_mensuales
)
SELECT * FROM rankeados WHERE rank <= 3;</code></pre>

                            ${styleBox('green', 'Mejores Prácticas de CTE para el Examen')}
                                <ul>
                                    <li>Los CTEs son <strong>conjuntos de resultados temporales y nombrados</strong> que existen solo durante la ejecución del query</li>
                                    <li><strong>Mejoran la legibilidad</strong> — el examen prefiere CTEs sobre subqueries anidados</li>
                                    <li>Los CTEs pueden <strong>referenciarse entre sí</strong> en secuencia (totales_mensuales → rankeados)</li>
                                    <li>NO se almacenan como objetos — a diferencia de las vistas o tablas temporales</li>
                                </ul>
                            </div>

                            <h5>CASE WHEN — Lógica Condicional</h5>
                            <pre><code>SELECT 
    product_name,
    amount,
    CASE 
        WHEN amount > 1000 THEN 'Premium'
        WHEN amount > 100 THEN 'Standard'
        ELSE 'Basic'
    END AS tier
FROM sales;</code></pre>
                        `)}
                    `
                },
                {
                    title: "4.4 Window Functions — RANK, ROW_NUMBER, LAG/LEAD",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Window Functions — Perform Calculations Across Rows')}
                                <p>Window functions compute values across a set of rows related to the current row — <strong>without collapsing rows</strong> like GROUP BY does.</p>
                            </div>

                            <h5>Ranking Functions</h5>
                            <pre><code>-- ROW_NUMBER: Unique sequential number (no ties)
-- RANK: Same rank for ties, then skips (1,2,2,4)
-- DENSE_RANK: Same rank for ties, no skip (1,2,2,3)

SELECT 
    employee_name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;</code></pre>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Function</th><th>Ties Handling</th><th>Example (values: 100, 90, 90, 80)</th></tr>
                                <tr><td><strong>ROW_NUMBER()</strong></td><td>Always unique</td><td>1, 2, 3, 4</td></tr>
                                <tr><td><strong>RANK()</strong></td><td>Same rank for ties, skip next</td><td>1, 2, 2, <strong>4</strong></td></tr>
                                <tr><td><strong>DENSE_RANK()</strong></td><td>Same rank for ties, no skip</td><td>1, 2, 2, <strong>3</strong></td></tr>
                            </table>

                            <h5>LAG and LEAD — Previous/Next Row Values</h5>
                            <pre><code>-- LAG: Get value from PREVIOUS row
-- LEAD: Get value from NEXT row
SELECT 
    month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY month) AS prev_month_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY month) AS month_over_month_change,
    LEAD(revenue, 1) OVER (ORDER BY month) AS next_month_revenue
FROM monthly_sales;</code></pre>

                            ${styleBox('yellow', 'Exam Decision: When to Use Each')}
                                <ul>
                                    <li><strong>"Top N per category"</strong> → <code>ROW_NUMBER()</code> with <code>PARTITION BY</code>, filter <code>WHERE row_num <= N</code></li>
                                    <li><strong>"Rank with ties"</strong> → <code>RANK()</code> or <code>DENSE_RANK()</code></li>
                                    <li><strong>"Month-over-month change"</strong> → <code>LAG()</code></li>
                                    <li><strong>"Compare with next period"</strong> → <code>LEAD()</code></li>
                                    <li><strong>"Running total"</strong> → <code>SUM() OVER (ORDER BY ...)</code></li>
                                    <li><strong>"Moving average"</strong> → <code>AVG() OVER (ORDER BY ... ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)</code></li>
                                </ul>
                            </div>

                            <h5>Running Totals & Moving Averages</h5>
                            <pre><code>SELECT 
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    AVG(amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS seven_day_avg
FROM daily_sales;</code></pre>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Funciones de Ventana — Cálculos Sobre Filas')}
                                <p>Las funciones de ventana calculan valores sobre un conjunto de filas relacionadas a la fila actual — <strong>sin colapsar filas</strong> como hace GROUP BY.</p>
                            </div>

                            <h5>Funciones de Ranking</h5>
                            <pre><code>-- ROW_NUMBER: Número secuencial único (sin empates)
-- RANK: Mismo rank para empates, luego salta (1,2,2,4)
-- DENSE_RANK: Mismo rank para empates, no salta (1,2,2,3)

SELECT 
    employee_name,
    department,
    salary,
    ROW_NUMBER() OVER (PARTITION BY department ORDER BY salary DESC) AS row_num,
    RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS rank,
    DENSE_RANK() OVER (PARTITION BY department ORDER BY salary DESC) AS dense_rank
FROM employees;</code></pre>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Función</th><th>Manejo de Empates</th><th>Ejemplo (valores: 100, 90, 90, 80)</th></tr>
                                <tr><td><strong>ROW_NUMBER()</strong></td><td>Siempre único</td><td>1, 2, 3, 4</td></tr>
                                <tr><td><strong>RANK()</strong></td><td>Mismo rank para empates, salta siguiente</td><td>1, 2, 2, <strong>4</strong></td></tr>
                                <tr><td><strong>DENSE_RANK()</strong></td><td>Mismo rank para empates, no salta</td><td>1, 2, 2, <strong>3</strong></td></tr>
                            </table>

                            <h5>LAG y LEAD — Valores de Fila Anterior/Siguiente</h5>
                            <pre><code>-- LAG: Obtener valor de la fila ANTERIOR
-- LEAD: Obtener valor de la fila SIGUIENTE
SELECT 
    month,
    revenue,
    LAG(revenue, 1) OVER (ORDER BY month) AS prev_month_revenue,
    revenue - LAG(revenue, 1) OVER (ORDER BY month) AS month_over_month_change,
    LEAD(revenue, 1) OVER (ORDER BY month) AS next_month_revenue
FROM monthly_sales;</code></pre>

                            ${styleBox('yellow', 'Decisión de Examen: Cuándo Usar Cada Una')}
                                <ul>
                                    <li><strong>"Top N por categoría"</strong> → <code>ROW_NUMBER()</code> con <code>PARTITION BY</code>, filtrar <code>WHERE row_num <= N</code></li>
                                    <li><strong>"Rank con empates"</strong> → <code>RANK()</code> o <code>DENSE_RANK()</code></li>
                                    <li><strong>"Cambio mes a mes"</strong> → <code>LAG()</code></li>
                                    <li><strong>"Comparar con siguiente período"</strong> → <code>LEAD()</code></li>
                                    <li><strong>"Total acumulado"</strong> → <code>SUM() OVER (ORDER BY ...)</code></li>
                                    <li><strong>"Promedio móvil"</strong> → <code>AVG() OVER (ORDER BY ... ROWS BETWEEN 2 PRECEDING AND CURRENT ROW)</code></li>
                                </ul>
                            </div>

                            <h5>Totales Acumulados & Promedios Móviles</h5>
                            <pre><code>SELECT 
    order_date,
    amount,
    SUM(amount) OVER (ORDER BY order_date) AS running_total,
    AVG(amount) OVER (
        ORDER BY order_date 
        ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS seven_day_avg
FROM daily_sales;</code></pre>
                        `)}
                    `
                },
                {
                    title: "4.5 MERGE INTO, UPDATE, DELETE — DML Operations",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — MERGE INTO Is the Most Tested DML Command')}
                                <p>MERGE INTO performs <strong>upsert</strong> (update + insert) in a single atomic operation. This is the Gold standard for maintaining slowly changing dimensions.</p>
                            </div>

                            <pre><code>-- MERGE INTO — Upsert pattern
MERGE INTO gold.customers AS target
USING silver.new_customers AS source
ON target.customer_id = source.customer_id
WHEN MATCHED THEN
    UPDATE SET 
        target.name = source.name,
        target.email = source.email,
        target.updated_at = CURRENT_TIMESTAMP()
WHEN NOT MATCHED THEN
    INSERT (customer_id, name, email, created_at, updated_at)
    VALUES (source.customer_id, source.name, source.email, 
            CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
WHEN NOT MATCHED BY SOURCE THEN
    DELETE;</code></pre>

                            <h5>MERGE Components</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Clause</th><th>When It Fires</th><th>Use Case</th></tr>
                                <tr><td><strong>WHEN MATCHED</strong></td><td>Source row exists in target</td><td>Update existing records</td></tr>
                                <tr><td><strong>WHEN NOT MATCHED</strong></td><td>Source row doesn't exist in target</td><td>Insert new records</td></tr>
                                <tr><td><strong>WHEN NOT MATCHED BY SOURCE</strong></td><td>Target row doesn't exist in source</td><td>Delete outdated records</td></tr>
                            </table>

                            <h5>Other DML Commands</h5>
                            <pre><code>-- UPDATE — Modify existing rows
UPDATE sales
SET status = 'refunded', updated_at = CURRENT_TIMESTAMP()
WHERE order_id = 'ORD-12345';

-- DELETE — Remove rows
DELETE FROM logs
WHERE timestamp < '2023-01-01';

-- INSERT OVERWRITE — Replace ALL data in a table
INSERT OVERWRITE gold.summary
SELECT region, SUM(amount) AS total
FROM silver.sales
GROUP BY region;</code></pre>

                            ${styleBox('yellow', 'Exam Decision: INSERT INTO vs INSERT OVERWRITE')}
                                <ul>
                                    <li><strong>INSERT INTO</strong> = <strong>APPEND</strong> new rows to existing data</li>
                                    <li><strong>INSERT OVERWRITE</strong> = <strong>REPLACE ALL</strong> existing data with new query result</li>
                                    <li>Exam trap: "Replace all data in a table with fresh calculation" → INSERT OVERWRITE</li>
                                    <li>Exam trap: "Add new daily records" → INSERT INTO</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — MERGE INTO Es el Comando DML Más Evaluado')}
                                <p>MERGE INTO realiza <strong>upsert</strong> (update + insert) en una sola operación atómica. Es el estándar de oro para mantener dimensiones que cambian lentamente.</p>
                            </div>

                            <pre><code>-- MERGE INTO — Patrón upsert
MERGE INTO gold.clientes AS target
USING silver.nuevos_clientes AS source
ON target.customer_id = source.customer_id
WHEN MATCHED THEN
    UPDATE SET 
        target.nombre = source.nombre,
        target.email = source.email,
        target.updated_at = CURRENT_TIMESTAMP()
WHEN NOT MATCHED THEN
    INSERT (customer_id, nombre, email, created_at, updated_at)
    VALUES (source.customer_id, source.nombre, source.email, 
            CURRENT_TIMESTAMP(), CURRENT_TIMESTAMP())
WHEN NOT MATCHED BY SOURCE THEN
    DELETE;</code></pre>

                            <h5>Componentes de MERGE</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Cláusula</th><th>Cuándo se Ejecuta</th><th>Caso de Uso</th></tr>
                                <tr><td><strong>WHEN MATCHED</strong></td><td>La fila de origen existe en el objetivo</td><td>Actualizar registros existentes</td></tr>
                                <tr><td><strong>WHEN NOT MATCHED</strong></td><td>La fila de origen no existe en el objetivo</td><td>Insertar nuevos registros</td></tr>
                                <tr><td><strong>WHEN NOT MATCHED BY SOURCE</strong></td><td>La fila objetivo no existe en el origen</td><td>Eliminar registros obsoletos</td></tr>
                            </table>

                            <h5>Otros Comandos DML</h5>
                            <pre><code>-- UPDATE — Modificar filas existentes
UPDATE sales
SET status = 'refunded', updated_at = CURRENT_TIMESTAMP()
WHERE order_id = 'ORD-12345';

-- DELETE — Eliminar filas
DELETE FROM logs
WHERE timestamp < '2023-01-01';

-- INSERT OVERWRITE — Reemplazar TODOS los datos de una tabla
INSERT OVERWRITE gold.summary
SELECT region, SUM(amount) AS total
FROM silver.sales
GROUP BY region;</code></pre>

                            ${styleBox('yellow', 'Decisión de Examen: INSERT INTO vs INSERT OVERWRITE')}
                                <ul>
                                    <li><strong>INSERT INTO</strong> = <strong>AGREGAR</strong> filas nuevas a datos existentes</li>
                                    <li><strong>INSERT OVERWRITE</strong> = <strong>REEMPLAZAR TODOS</strong> los datos existentes con nuevo resultado de query</li>
                                    <li>Trampa de examen: "Reemplazar todos los datos en una tabla con cálculo fresco" → INSERT OVERWRITE</li>
                                    <li>Trampa de examen: "Agregar nuevos registros diarios" → INSERT INTO</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.6 UDFs, Parameters & Query Optimization",
                    content: `
                        ${langSection('en', `
                            <h5>User-Defined Functions (UDFs)</h5>
                            ${styleBox('blue', 'UDF Decision Rule')}
                                <p>Can you do it with <strong>built-in functions</strong>? → Use built-in (faster, optimized).</p>
                                <p>Can't? → Create a UDF. UDFs are <strong>slower</strong> because they can't be optimized by the query engine.</p>
                            </div>

                            <pre><code>-- Create a SQL UDF
CREATE OR REPLACE FUNCTION mask_email(email STRING)
RETURNS STRING
RETURN CONCAT(LEFT(email, 2), '***@***', 
              SUBSTRING(email, INSTR(email, '.', -1)));

-- Use it in queries
SELECT name, mask_email(email) AS masked
FROM customers;</code></pre>

                            <h5>Query Parameters</h5>
                            <pre><code>-- Parameters create dynamic, reusable queries
-- Use {{ parameter_name }} syntax in Databricks SQL

SELECT * FROM sales
WHERE region = {{ region_filter }}
  AND order_date >= {{ start_date }}
  AND order_date <= {{ end_date }};

-- Parameter types: Text, Number, Date, Date Range,
-- Dropdown List, Query-Based Dropdown</code></pre>

                            ${styleBox('yellow', 'Query Optimization Tips (Exam-tested)')}
                                <ul>
                                    <li><strong>OPTIMIZE</strong> — compact small files into larger ones for faster reads</li>
                                    <li><strong>ZORDER BY</strong> — co-locate data by frequently-filtered columns</li>
                                    <li><strong>Caching</strong> — Databricks SQL automatically caches query results</li>
                                    <li><strong>Predicate pushdown</strong> — WHERE clauses filter data at storage level (Delta)</li>
                                    <li><strong>Avoid SELECT *</strong> — select only needed columns (columnar benefit)</li>
                                    <li><strong>Filter early</strong> — put WHERE before JOINs when possible</li>
                                </ul>
                            </div>

                            <pre><code>-- OPTIMIZE compacts small files
OPTIMIZE gold.sales;

-- ZORDER sorts data within files for faster filtering
OPTIMIZE gold.sales ZORDER BY (region, product_category);

-- Liquid Clustering (2025+) — replaces ZORDER, automatic
ALTER TABLE gold.sales CLUSTER BY (region, product_category);</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Funciones Definidas por el Usuario (UDFs)</h5>
                            ${styleBox('blue', 'Regla de Decisión para UDFs')}
                                <p>¿Puedes hacerlo con <strong>funciones built-in</strong>? → Usa built-in (más rápido, optimizado).</p>
                                <p>¿No puedes? → Crea un UDF. Los UDFs son <strong>más lentos</strong> porque no pueden ser optimizados por el motor de queries.</p>
                            </div>

                            <pre><code>-- Crear un SQL UDF
CREATE OR REPLACE FUNCTION mask_email(email STRING)
RETURNS STRING
RETURN CONCAT(LEFT(email, 2), '***@***', 
              SUBSTRING(email, INSTR(email, '.', -1)));

-- Usarlo en queries
SELECT name, mask_email(email) AS masked
FROM customers;</code></pre>

                            <h5>Parámetros de Query</h5>
                            <pre><code>-- Los parámetros crean queries dinámicos y reutilizables
-- Usa sintaxis {{ parameter_name }} en Databricks SQL

SELECT * FROM sales
WHERE region = {{ region_filter }}
  AND order_date >= {{ start_date }}
  AND order_date <= {{ end_date }};

-- Tipos de parámetros: Texto, Número, Fecha, Rango de fechas,
-- Lista desplegable, Desplegable basado en Query</code></pre>

                            ${styleBox('yellow', 'Tips de Optimización de Queries (Evaluados en Examen)')}
                                <ul>
                                    <li><strong>OPTIMIZE</strong> — compactar archivos pequeños en más grandes para lecturas más rápidas</li>
                                    <li><strong>ZORDER BY</strong> — co-localizar datos por columnas frecuentemente filtradas</li>
                                    <li><strong>Caching</strong> — Databricks SQL cachea resultados automáticamente</li>
                                    <li><strong>Predicate pushdown</strong> — Cláusulas WHERE filtran datos a nivel de almacenamiento (Delta)</li>
                                    <li><strong>Evitar SELECT *</strong> — seleccionar solo columnas necesarias (beneficio columnar)</li>
                                    <li><strong>Filtrar temprano</strong> — poner WHERE antes de JOINs cuando sea posible</li>
                                </ul>
                            </div>

                            <pre><code>-- OPTIMIZE compacta archivos pequeños
OPTIMIZE gold.sales;

-- ZORDER ordena datos dentro de archivos para filtrado rápido
OPTIMIZE gold.sales ZORDER BY (region, product_category);

-- Liquid Clustering (2025+) — reemplaza ZORDER, automático
ALTER TABLE gold.sales CLUSTER BY (region, product_category);</code></pre>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 5: ANALYZING QUERIES (71%) — EXPANDED
        // 28 questions — Focus: Query History, debugging,
        // performance analysis, caching, built-in functions
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#f59e0b" stroke-width="2"/><path d="M12 8v4l3 3" fill="none" stroke="#f59e0b" stroke-width="2"/></svg> D5. Analyzing Queries — Query History & Performance (Expanded)',
            items: [
                {
                    title: "5.1 Query History — The Single Source of Truth",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Query History vs SQL Editor')}
                                <ul>
                                    <li><strong>Query History</strong> = <strong>passive monitoring</strong> (what happened). View execution details: duration, I/O, cache hits, warehouse used, and query text.</li>
                                    <li><strong>SQL Editor</strong> = <strong>active execution</strong> (schedule, run). Write and execute queries.</li>
                                    <li>The exam tests the <strong>boundary</strong> between these two features.</li>
                                </ul>
                            </div>

                            <h5>What Query History Shows</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Metric</th><th>What It Tells You</th><th>Exam Scenario</th></tr>
                                <tr><td><strong>Duration</strong></td><td>Total execution time</td><td>"Which query takes longest?"</td></tr>
                                <tr><td><strong>Rows Read/Written</strong></td><td>I/O volume</td><td>"Why is this query slow?" → too many rows scanned</td></tr>
                                <tr><td><strong>Cache Hit</strong></td><td>Whether results came from cache</td><td>"Query ran faster second time" → cache hit</td></tr>
                                <tr><td><strong>Warehouse</strong></td><td>Which warehouse executed it</td><td>"Identify which warehouse is overloaded"</td></tr>
                                <tr><td><strong>Status</strong></td><td>Success, failed, cancelled</td><td>"Troubleshoot failed scheduled queries"</td></tr>
                                <tr><td><strong>User</strong></td><td>Who ran the query</td><td>"Audit who queried sensitive data"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Exam Decision Pattern')}
                                <p><strong>Q: "An analyst wants to find out why a scheduled query has been running slower recently..."</strong></p>
                                <ul>
                                    <li>"SQL Editor" → Wrong (that's for writing queries)</li>
                                    <li>"Dashboard" → Wrong (that displays results)</li>
                                    <li><strong>"Query History"</strong> → CORRECT (shows execution metrics over time)</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Query History vs SQL Editor')}
                                <ul>
                                    <li><strong>Query History</strong> = <strong>monitoreo pasivo</strong> (qué pasó). Ver detalles de ejecución: duración, I/O, cache hits, warehouse usado y query text.</li>
                                    <li><strong>SQL Editor</strong> = <strong>ejecución activa</strong> (programar, ejecutar). Escribir y ejecutar queries.</li>
                                    <li>El examen evalúa el <strong>límite</strong> entre estas dos funcionalidades.</li>
                                </ul>
                            </div>

                            <h5>Qué Muestra Query History</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Métrica</th><th>Qué Te Dice</th><th>Escenario de Examen</th></tr>
                                <tr><td><strong>Duration</strong></td><td>Tiempo total de ejecución</td><td>"¿Qué query tarda más?"</td></tr>
                                <tr><td><strong>Rows Read/Written</strong></td><td>Volumen de I/O</td><td>"¿Por qué es lento?" → lee muchas filas</td></tr>
                                <tr><td><strong>Cache Hit</strong></td><td>Si los resultados vinieron del caché</td><td>"Query corrió más rápido la 2da vez" → cache hit</td></tr>
                                <tr><td><strong>Warehouse</strong></td><td>Qué warehouse lo ejecutó</td><td>"Identificar warehouse sobrecargado"</td></tr>
                                <tr><td><strong>Status</strong></td><td>Éxito, fallido, cancelado</td><td>"Solucionar fallas en queries programados"</td></tr>
                                <tr><td><strong>User</strong></td><td>Quién corrió el query</td><td>"Auditar quién consultó datos sensibles"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Patrón de Decisión del Examen')}
                                <p><strong>P: "Un analista quiere saber por qué un query programado ha estado corriendo más lento últimamente..."</strong></p>
                                <ul>
                                    <li>"SQL Editor" → Incorrecto (eso es para escribir queries)</li>
                                    <li>"Dashboard" → Incorrecto (eso muestra resultados)</li>
                                    <li><strong>"Query History"</strong> → CORRECTO (muestra métricas de ejecución a lo largo del tiempo)</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "5.2 Built-in Functions & Type Casting",
                    content: `
                        ${langSection('en', `
                            <h5>Essential Built-in Functions</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Category</th><th>Functions</th><th>Exam Usage</th></tr>
                                <tr><td><strong>String</strong></td><td><code>UPPER, LOWER, TRIM, CONCAT, SUBSTRING, REPLACE, LENGTH, SPLIT</code></td><td>"Clean text data"</td></tr>
                                <tr><td><strong>Date/Time</strong></td><td><code>CURRENT_DATE, CURRENT_TIMESTAMP, DATE_TRUNC, DATEDIFF, DATE_ADD, EXTRACT</code></td><td>"Calculate time differences"</td></tr>
                                <tr><td><strong>Aggregate</strong></td><td><code>COUNT, SUM, AVG, MIN, MAX, COUNT(DISTINCT)</code></td><td>"Summarize data"</td></tr>
                                <tr><td><strong>Conditional</strong></td><td><code>CASE WHEN, IF, COALESCE, NULLIF, IIF</code></td><td>"Handle NULLs, categorize"</td></tr>
                                <tr><td><strong>Type Cast</strong></td><td><code>CAST(x AS type), TRY_CAST(x AS type), x::type</code></td><td>"Convert data types"</td></tr>
                            </table>

                            <h5>CAST vs TRY_CAST</h5>
                            <pre><code>-- CAST: Throws ERROR if conversion fails
SELECT CAST('abc' AS INT);  -- ERROR!

-- TRY_CAST: Returns NULL if conversion fails
SELECT TRY_CAST('abc' AS INT);  -- Returns NULL

-- Shorthand cast syntax
SELECT '2024-01-15'::DATE;</code></pre>

                            ${styleBox('yellow', 'Exam Tip: CAST vs TRY_CAST')}
                                <p><strong>Q: "A column contains mixed data (numbers and text). The analyst needs to convert it to integers without failing..."</strong></p>
                                <p><strong>A:</strong> Use <code>TRY_CAST</code> — it returns NULL for invalid values instead of throwing an error.</p>
                            </div>

                            <h5>Date Functions Cheat Sheet</h5>
                            <pre><code>-- Current date/time
SELECT CURRENT_DATE();           -- 2024-06-15
SELECT CURRENT_TIMESTAMP();      -- 2024-06-15 14:30:00

-- Date arithmetic
SELECT DATE_ADD('2024-01-01', 30);    -- 2024-01-31
SELECT DATEDIFF('2024-12-31', '2024-01-01');  -- 365

-- Truncate to month/year
SELECT DATE_TRUNC('MONTH', '2024-06-15');  -- 2024-06-01
SELECT DATE_TRUNC('YEAR', '2024-06-15');   -- 2024-01-01

-- Extract parts
SELECT EXTRACT(YEAR FROM '2024-06-15');    -- 2024
SELECT EXTRACT(MONTH FROM '2024-06-15');   -- 6</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Funciones Built-in Esenciales</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Categoría</th><th>Funciones</th><th>Uso en Examen</th></tr>
                                <tr><td><strong>Texto</strong></td><td><code>UPPER, LOWER, TRIM, CONCAT, SUBSTRING, REPLACE, LENGTH, SPLIT</code></td><td>"Limpiar datos de texto"</td></tr>
                                <tr><td><strong>Fecha/Hora</strong></td><td><code>CURRENT_DATE, CURRENT_TIMESTAMP, DATE_TRUNC, DATEDIFF, DATE_ADD, EXTRACT</code></td><td>"Calcular diferencias de tiempo"</td></tr>
                                <tr><td><strong>Agregado</strong></td><td><code>COUNT, SUM, AVG, MIN, MAX, COUNT(DISTINCT)</code></td><td>"Resumir datos"</td></tr>
                                <tr><td><strong>Condicional</strong></td><td><code>CASE WHEN, IF, COALESCE, NULLIF, IIF</code></td><td>"Manejar NULLs, categorizar"</td></tr>
                                <tr><td><strong>Tipo</strong></td><td><code>CAST(x AS type), TRY_CAST(x AS type), x::type</code></td><td>"Convertir tipos de datos"</td></tr>
                            </table>

                            <h5>CAST vs TRY_CAST</h5>
                            <pre><code>-- CAST: Lanza ERROR si la conversión falla
SELECT CAST('abc' AS INT);  -- ¡ERROR!

-- TRY_CAST: Retorna NULL si la conversión falla
SELECT TRY_CAST('abc' AS INT);  -- Retorna NULL

-- Sintaxis corta de cast
SELECT '2024-01-15'::DATE;</code></pre>

                            ${styleBox('yellow', 'Dato de Examen: CAST vs TRY_CAST')}
                                <p><strong>P: "Una columna contiene datos mixtos. El analista necesita convertir a enteros sin fallar..."</strong></p>
                                <p><strong>R:</strong> Usa <code>TRY_CAST</code> — retorna NULL para valores inválidos en vez de lanzar error.</p>
                            </div>

                            <h5>Cheat Sheet de Funciones de Fecha</h5>
                            <pre><code>-- Fecha/hora actual
SELECT CURRENT_DATE();           -- 2024-06-15
SELECT CURRENT_TIMESTAMP();      -- 2024-06-15 14:30:00

-- Aritmética de fechas
SELECT DATE_ADD('2024-01-01', 30);    -- 2024-01-31
SELECT DATEDIFF('2024-12-31', '2024-01-01');  -- 365

-- Truncar a mes/año
SELECT DATE_TRUNC('MONTH', '2024-06-15');  -- 2024-06-01
SELECT DATE_TRUNC('YEAR', '2024-06-15');   -- 2024-01-01

-- Extraer partes
SELECT EXTRACT(YEAR FROM '2024-06-15');    -- 2024
SELECT EXTRACT(MONTH FROM '2024-06-15');   -- 6</code></pre>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 6: DASHBOARDS & VISUALIZATIONS (57%) — EXPANDED
        // 40 questions — Focus: dashboard creation, sharing,
        // visualization types, parameters, cross-filtering
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><path d="M3 3v18h18" fill="none" stroke="#ef4444" stroke-width="2"/><path d="M7 14l4-4 4 4 4-8" fill="none" stroke="#ef4444" stroke-width="2"/></svg> D6. Dashboards & Visualizations — Complete Guide (Expanded)',
            items: [
                {
                    title: "6.1 Dashboard Creation, Widgets & Markdown",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Markdown is the ONLY Way to Add Text')}
                                <p>Markdown text boxes are the <strong>ONLY</strong> way to add descriptive text, headings, and section dividers in a Databricks dashboard. You cannot add static text through any other mechanism.</p>
                            </div>

                            <h5>Dashboard Widget Types</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Widget Type</th><th>Purpose</th><th>Exam Notes</th></tr>
                                <tr><td><strong>Visualization</strong></td><td>Charts, tables from query results</td><td>Each visualization links to ONE query</td></tr>
                                <tr><td><strong>Markdown Text</strong></td><td>Headings, descriptions, section dividers</td><td>Only way to add static text</td></tr>
                                <tr><td><strong>Filter</strong></td><td>Interactive parameter dropdowns</td><td>Can filter multiple visualizations</td></tr>
                            </table>

                            <h5>Visualization Type Selection</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Need to Show</th><th>Use This Chart</th><th>Exam Keyword</th></tr>
                                <tr><td>Trends over time</td><td><strong>Line Chart</strong></td><td>"time-series", "trend", "over time"</td></tr>
                                <tr><td>Comparing categories</td><td><strong>Bar Chart</strong></td><td>"compare", "categories"</td></tr>
                                <tr><td>Part-to-whole</td><td><strong>Pie Chart</strong></td><td>"proportion", "percentage", "share"</td></tr>
                                <tr><td>Distribution</td><td><strong>Histogram</strong></td><td>"distribution", "frequency"</td></tr>
                                <tr><td>Correlation between 2 variables</td><td><strong>Scatter Plot</strong></td><td>"relationship", "correlation"</td></tr>
                                <tr><td>Flow/journey</td><td><strong>Sankey Diagram</strong></td><td>"flow", "path", "journey"</td></tr>
                                <tr><td>Geographic data</td><td><strong>Map</strong></td><td>"location", "geographic", "by region"</td></tr>
                                <tr><td>Single KPI</td><td><strong>Counter</strong></td><td>"single value", "KPI", "metric"</td></tr>
                                <tr><td>Hierarchical data</td><td><strong>Treemap</strong></td><td>"hierarchy", "nested categories"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Exam Trap: Sankey Diagram')}
                                <p><strong>Q: "A data analyst has been asked to produce a visualization that shows the flow of users through a website..."</strong></p>
                                <p><strong>A:</strong> <strong>Sankey diagram</strong> — specifically designed for visualizing flows and transitions between stages.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Markdown es la ÚNICA Forma de Agregar Texto')}
                                <p>Los cuadros de texto Markdown son la <strong>ÚNICA</strong> forma de agregar texto descriptivo, encabezados y divisiones de sección en un dashboard de Databricks. No puedes agregar texto estático por ningún otro mecanismo.</p>
                            </div>

                            <h5>Tipos de Widgets en Dashboard</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo de Widget</th><th>Propósito</th><th>Notas de Examen</th></tr>
                                <tr><td><strong>Visualización</strong></td><td>Gráficos, tablas de resultados de un query</td><td>Cada visualización se vincula a UN query</td></tr>
                                <tr><td><strong>Markdown Text</strong></td><td>Encabezados, descripciones, divisores</td><td>Única forma de agregar texto estático</td></tr>
                                <tr><td><strong>Filtro</strong></td><td>Desplegables interactivos para parámetros</td><td>Pueden filtrar múltiples visualizaciones</td></tr>
                            </table>

                            <h5>Selección de Tipo de Visualización</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Necesitas Mostrar</th><th>Usa Este Gráfico</th><th>Keyword de Examen</th></tr>
                                <tr><td>Tendencias en el tiempo</td><td><strong>Gráfico de Líneas</strong></td><td>"time-series", "trend", "over time"</td></tr>
                                <tr><td>Comparar categorías</td><td><strong>Gráfico de Barras</strong></td><td>"compare", "categories"</td></tr>
                                <tr><td>Parte del todo</td><td><strong>Gráfico de Pie</strong></td><td>"proportion", "percentage", "share"</td></tr>
                                <tr><td>Distribución</td><td><strong>Histograma</strong></td><td>"distribution", "frequency"</td></tr>
                                <tr><td>Correlación entre 2 variables</td><td><strong>Gráfico de Dispersión</strong></td><td>"relationship", "correlation"</td></tr>
                                <tr><td>Flujo/journey</td><td><strong>Diagrama Sankey</strong></td><td>"flow", "path", "journey"</td></tr>
                                <tr><td>Datos geográficos</td><td><strong>Mapa</strong></td><td>"location", "geographic", "by region"</td></tr>
                                <tr><td>KPI individual</td><td><strong>Contador</strong></td><td>"single value", "KPI", "metric"</td></tr>
                                <tr><td>Datos jerárquicos</td><td><strong>Treemap</strong></td><td>"hierarchy", "nested categories"</td></tr>
                            </table>

                            ${styleBox('yellow', 'Trampa de Examen: Diagrama Sankey')}
                                <p><strong>P: "Un analista de datos debe producir una visualización que muestre el flujo de usuarios a través de un sitio web..."</strong></p>
                                <p><strong>R:</strong> <strong>Diagrama Sankey</strong> — diseñado específicamente para visualizar flujos y transiciones entre etapas.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "6.2 Dashboard Sharing, Permissions & Subscriptions",
                    content: `
                        ${langSection('en', `
                            <h5>Two Permission Layers</h5>
                            ${styleBox('red', 'Dashboard Permissions vs Data Permissions are SEPARATE')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Layer</th><th>Controls</th><th>Managed Through</th></tr>
                                    <tr><td><strong>Dashboard Permission</strong></td><td>Who can view/edit the dashboard itself</td><td>Dashboard sharing settings</td></tr>
                                    <tr><td><strong>Data Permission</strong></td><td>What data the user can see in the dashboard</td><td>Unity Catalog GRANT/REVOKE</td></tr>
                                </table>
                                <p><strong>Key insight:</strong> A user can have VIEW access to a dashboard but see <strong>NO DATA</strong> if they lack SELECT permissions on the underlying tables.</p>
                            </div>

                            <h5>"Run as" Setting</h5>
                            ${styleBox('blue', 'Run as Owner vs Run as Viewer')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Mode</th><th>Data Access</th><th>Use When</th></tr>
                                    <tr><td><strong>Run as Owner</strong></td><td>Uses owner's permissions → everyone sees same data</td><td>Sharing with users who lack direct table access</td></tr>
                                    <tr><td><strong>Run as Viewer</strong></td><td>Uses viewer's permissions → each person sees their own data</td><td>Row-level security, personalized views</td></tr>
                                </table>
                            </div>

                            <h5>Sharing with External Users (No Workspace Access)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Method</th><th>How</th><th>Limitations</th></tr>
                                <tr><td><strong>PDF/Image export</strong></td><td>Download snapshot, share via email</td><td>Static, no interactivity</td></tr>
                                <tr><td><strong>Embedded Dashboard</strong></td><td>iFrame embed in external app/website</td><td>Requires setup, authentication considerations</td></tr>
                                <tr><td><strong>Dashboard Subscriptions</strong></td><td>Automated email delivery of dashboard snapshots</td><td>Read-only, scheduled delivery</td></tr>
                            </table>

                            ${styleBox('yellow', 'Subscriptions vs Alerts (Exam Trap)')}
                                <ul>
                                    <li><strong>Subscriptions</strong> = <strong>scheduled email</strong> with full dashboard snapshot (like a newsletter)</li>
                                    <li><strong>Alerts</strong> = <strong>event-driven notification</strong> when a single metric crosses a threshold</li>
                                    <li>Subscriptions send regardless of data changes; alerts only fire when conditions are met</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Dos Capas de Permisos</h5>
                            ${styleBox('red', 'Permisos de Dashboard vs Permisos de Datos son SEPARADOS')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Capa</th><th>Controla</th><th>Gestionado Mediante</th></tr>
                                    <tr><td><strong>Permiso de Dashboard</strong></td><td>Quién puede ver/editar el dashboard</td><td>Configuración de compartir del dashboard</td></tr>
                                    <tr><td><strong>Permiso de Datos</strong></td><td>Qué datos puede ver el usuario en el dashboard</td><td>Unity Catalog GRANT/REVOKE</td></tr>
                                </table>
                                <p><strong>Insight clave:</strong> Un usuario puede tener acceso VIEW al dashboard pero ver <strong>SIN DATOS</strong> si no tiene permisos SELECT en las tablas subyacentes.</p>
                            </div>

                            <h5>Configuración "Run as"</h5>
                            ${styleBox('blue', 'Run as Owner vs Run as Viewer')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Modo</th><th>Acceso a Datos</th><th>Cuándo Usarlo</th></tr>
                                    <tr><td><strong>Run as Owner</strong></td><td>Usa permisos del propietario → todos ven los mismos datos</td><td>Compartir con usuarios que no tienen acceso directo a las tablas</td></tr>
                                    <tr><td><strong>Run as Viewer</strong></td><td>Usa permisos del visor → cada persona ve sus propios datos</td><td>Seguridad a nivel de fila (RLS), vistas personalizadas</td></tr>
                                </table>
                            </div>

                            <h5>Compartir con Usuarios Externos (Sin Acceso al Workspace)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Método</th><th>Cómo</th><th>Limitaciones</th></tr>
                                <tr><td><strong>Exportar PDF/Imagen</strong></td><td>Descargar snapshot, enviar por correo</td><td>Estático, sin interactividad</td></tr>
                                <tr><td><strong>Dashboard Embebido</strong></td><td>Embeber con iFrame en app/web externa</td><td>Requiere configuración y consideraciones de autenticación</td></tr>
                                <tr><td><strong>Suscripciones al Dashboard</strong></td><td>Envío automático por correo de snapshots del dashboard</td><td>Solo lectura, envío programado</td></tr>
                            </table>

                            ${styleBox('yellow', 'Subscriptions vs Alerts (Trampa de Examen)')}
                                <ul>
                                    <li><strong>Subscriptions</strong> = <strong>email programado</strong> con snapshot completo del dashboard (como un boletín)</li>
                                    <li><strong>Alerts</strong> = <strong>notificación por evento</strong> cuando una métrica individual cruza un umbral</li>
                                    <li>Las suscripciones se envían independientemente de cambios en los datos; las alertas solo se disparan cuando se cumplen las condiciones</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "6.3 Parameters, Cross-Filtering & Trend Lines",
                    content: `
                        ${langSection('en', `
                            <h5>Parameters in Dashboards</h5>
                            <pre><code>-- Query with parameter for dashboard filtering
SELECT region, product, SUM(amount) AS total
FROM sales
WHERE region = {{ region_param }}
  AND order_date BETWEEN {{ start_date }} AND {{ end_date }}
GROUP BY region, product;</code></pre>

                            ${styleBox('blue', 'Parameter Workflow')}
                                <ol>
                                    <li>Create a query with <code>{{ param_name }}</code> placeholders</li>
                                    <li>Add the query as a visualization widget on the dashboard</li>
                                    <li>Add a <strong>Filter widget</strong> connected to the parameter</li>
                                    <li>Filter widget appears as dropdown/date picker for end users</li>
                                    <li>One filter can control <strong>multiple visualizations</strong> simultaneously</li>
                                </ol>
                            </div>

                            <h5>Cross-Filtering</h5>
                            ${styleBox('green', 'Cross-Filtering Key Facts')}
                                <ul>
                                    <li>Click on a data point in one visualization to <strong>filter all other visualizations</strong> on the dashboard</li>
                                    <li>Works between visualizations that share <strong>common columns</strong></li>
                                    <li>Must be <strong>explicitly enabled</strong> in dashboard settings</li>
                                    <li>Provides <strong>interactive exploration</strong> without writing new queries</li>
                                </ul>
                            </div>

                            <h5>Trend Lines</h5>
                            ${styleBox('yellow', 'Trend Lines Exam Usage')}
                                <p>Trend Lines are the go-to feature for:</p>
                                <ul>
                                    <li><strong>Identifying patterns</strong> in time-series data</li>
                                    <li><strong>Forecasting direction</strong> (up/down trends)</li>
                                    <li>Available in line charts and scatter plots</li>
                                    <li>Types: Linear, Polynomial, Logarithmic</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Parámetros en Dashboards</h5>
                            <pre><code>-- Query con parámetro para filtro de dashboard
SELECT region, product, SUM(amount) AS total
FROM sales
WHERE region = {{ region_param }}
  AND order_date BETWEEN {{ start_date }} AND {{ end_date }}
GROUP BY region, product;</code></pre>

                            ${styleBox('blue', 'Flujo de Parámetros')}
                                <ol>
                                    <li>Crear un query con placeholders <code>{{ param_name }}</code></li>
                                    <li>Agregar el query como widget de visualización en el dashboard</li>
                                    <li>Agregar un <strong>widget de Filtro</strong> conectado al parámetro</li>
                                    <li>El widget de filtro aparece como desplegable/selector de fecha para el usuario</li>
                                    <li>Un filtro puede controlar <strong>múltiples visualizaciones</strong> simultáneamente</li>
                                </ol>
                            </div>

                            <h5>Cross-Filtering</h5>
                            ${styleBox('green', 'Datos Clave de Cross-Filtering')}
                                <ul>
                                    <li>Click en un punto de datos en una visualización para <strong>filtrar todas las demás visualizaciones</strong> en el dashboard</li>
                                    <li>Funciona entre visualizaciones que comparten <strong>columnas comunes</strong></li>
                                    <li>Debe ser <strong>habilitado explícitamente</strong> en configuración del dashboard</li>
                                    <li>Provee <strong>exploración interactiva</strong> sin tener que escribir nuevos queries</li>
                                </ul>
                            </div>

                            <h5>Líneas de Tendencia (Trend Lines)</h5>
                            ${styleBox('yellow', 'Uso en Examen de Líneas de Tendencia')}
                                <p>Las líneas de tendencia son la funcionalidad principal para:</p>
                                <ul>
                                    <li><strong>Identificar patrones</strong> en datos de series de tiempo</li>
                                    <li><strong>Proyectar dirección</strong> (tendencias al alza/baja)</li>
                                    <li>Están disponibles en gráficos de líneas y gráficos de dispersión</li>
                                    <li>Tipos: Lineal, Polinomial, Logarítmica</li>
                                </ul>
                            </div>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 7: AI/BI GENIE SPACES (60%) — EXPANDED
        // 26 questions — Focus: setup, trusted assets,
        // accuracy improvement, permissions, metadata
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#ef4444" style="vertical-align:middle;margin-right:4px"><path d="M12 2a7 7 0 017 7c0 2.5-1.5 4.5-3 6v2H8v-2c-1.5-1.5-3-3.5-3-6a7 7 0 017-7z" fill="none" stroke="#ef4444" stroke-width="2"/><path d="M9 21h6M10 17h4" fill="none" stroke="#ef4444" stroke-width="2"/></svg> D7. AI/BI Genie Spaces — Natural Language Analytics (Expanded)',
            items: [
                {
                    title: "7.1 Genie Space Setup & Configuration Hierarchy",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Genie Setup Checklist')}
                                <ol>
                                    <li><strong>Select tables</strong> from Unity Catalog (only tables Genie will query)</li>
                                    <li><strong>Add column descriptions</strong> — the more descriptive, the better Genie understands</li>
                                    <li><strong>Define domain instructions</strong> — business context and terminology mapping</li>
                                    <li><strong>Create Trusted Assets</strong> — pre-verified SQL queries as templates</li>
                                    <li><strong>Add sample questions</strong> — examples that guide user interactions</li>
                                </ol>
                            </div>

                            <h5>Three Pillars of Genie Accuracy</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Pillar</th><th>What It Does</th><th>How to Configure</th></tr>
                                <tr>
                                    <td><strong>1. Column Descriptions</strong></td>
                                    <td>Tells Genie what each column means in business terms</td>
                                    <td><code>ALTER TABLE t ALTER COLUMN c COMMENT 'description'</code></td>
                                </tr>
                                <tr>
                                    <td><strong>2. Domain Instructions</strong></td>
                                    <td>Provides business context and vocabulary mapping</td>
                                    <td>Free-text in Genie Space settings</td>
                                </tr>
                                <tr>
                                    <td><strong>3. Trusted Assets</strong></td>
                                    <td>Pre-verified SQL queries that Genie uses as templates</td>
                                    <td>Saved queries tagged as "trusted" in Genie Space</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Genie CANNOT Be Fine-Tuned')}
                                <p>You improve Genie through <strong>context, not training</strong>:</p>
                                <ul>
                                    <li>Better column descriptions → Genie understands data semantics</li>
                                    <li>Domain instructions → Genie maps business terms to SQL</li>
                                    <li>Trusted Assets → Genie has verified query templates</li>
                                    <li>Example questions → Guide users toward supported patterns</li>
                                </ul>
                                <p><strong>Exam trap:</strong> Any answer suggesting "retrain", "fine-tune", or "customize the model" is <strong>WRONG</strong>.</p>
                            </div>

                            <h5>Handling Ambiguous Business Terms</h5>
                            <pre><code>-- Problem: "revenue" could mean gross, net, or adjusted
-- Solution: Use Domain Instructions to map terms

Domain Instructions example:
"When users say 'revenue', always use the 'net_revenue' column.
 'sales' refers to gross_revenue.
 'profit' = net_revenue - total_costs.
 Fiscal year starts April 1."</code></pre>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Checklist de Configuración de Genie')}
                                <ol>
                                    <li><strong>Seleccionar tablas</strong> de Unity Catalog (solo las tablas que Genie consultará)</li>
                                    <li><strong>Agregar descripciones de columnas</strong> — mientras más descriptivo, mejor entiende Genie</li>
                                    <li><strong>Definir instrucciones de dominio</strong> — contexto de negocio y mapeo de terminología</li>
                                    <li><strong>Crear Trusted Assets</strong> — queries SQL pre-verificados como plantillas</li>
                                    <li><strong>Agregar preguntas de ejemplo</strong> — guían las interacciones del usuario</li>
                                </ol>
                            </div>

                            <h5>Tres Pilares de Precisión de Genie</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Pilar</th><th>Qué Hace</th><th>Cómo Configurar</th></tr>
                                <tr>
                                    <td><strong>1. Column Descriptions</strong></td>
                                    <td>Dice a Genie qué significa cada columna en términos de negocio</td>
                                    <td><code>ALTER TABLE t ALTER COLUMN c COMMENT 'description'</code></td>
                                </tr>
                                <tr>
                                    <td><strong>2. Domain Instructions</strong></td>
                                    <td>Provee contexto de negocio y mapeo de vocabulario</td>
                                    <td>Texto libre en la configuración de Genie Space</td>
                                </tr>
                                <tr>
                                    <td><strong>3. Trusted Assets</strong></td>
                                    <td>Queries SQL pre-verificados que Genie usa como plantillas</td>
                                    <td>Queries guardados y etiquetados como "trusted" en Genie Space</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Genie NO Puede Ser Fine-Tuned')}
                                <p>Mejoras Genie a través de <strong>contexto, no entrenamiento</strong>:</p>
                                <ul>
                                    <li>Mejores descripciones de columnas → Genie entiende semántica de datos</li>
                                    <li>Instrucciones de dominio → Genie mapea términos de negocio a SQL</li>
                                    <li>Trusted Assets → Genie tiene plantillas de queries verificados</li>
                                    <li>Preguntas de ejemplo → Guían a los usuarios hacia patrones soportados</li>
                                </ul>
                                <p><strong>Trampa de examen:</strong> Cualquier respuesta sugiriendo "reentrenar", "fine-tune", o "personalizar el modelo" es <strong>INCORRECTA</strong>.</p>
                            </div>

                            <h5>Manejo de Términos de Negocio Ambiguos</h5>
                            <pre><code>-- Problema: "revenue" (ingresos) podría significar brutos, netos, o ajustados
-- Solución: Usar Instructions de Dominio para mapear términos

Ejemplo de Domain Instructions:
"Cuando los usuarios dicen 'revenue', usa siempre la columna 'net_revenue'.
 'sales' se refiere a gross_revenue.
 'profit' = net_revenue - total_costs.
 Año fiscal comienza el 1 de Abril."</code></pre>
                        `)}
                    `
                },
                {
                    title: "7.2 Trusted Assets & Permissions",
                    content: `
                        ${langSection('en', `
                            <h5>Trusted Assets — What They Are</h5>
                            ${styleBox('blue', 'Definition')}
                                <p>A <strong>Trusted Asset</strong> is a saved query that has been <strong>verified by an analyst</strong> and added to a Genie Space. When users ask questions, Genie uses these as <strong>SQL templates</strong> to generate accurate answers.</p>
                            </div>

                            <h5>When to Use Trusted Assets</h5>
                            <ul>
                                <li><strong>Complex calculations</strong> that Genie might get wrong (e.g., fiscal year aggregations)</li>
                                <li><strong>Business-specific logic</strong> that requires domain knowledge</li>
                                <li><strong>Frequently asked questions</strong> — pre-building the answer ensures consistency</li>
                                <li><strong>Custom joins</strong> that Genie might not infer correctly</li>
                            </ul>

                            ${styleBox('yellow', 'Preventing Incorrect Genie Joins')}
                                <p><strong>Q:</strong> "Genie is struggling to correctly join tables because the relationship between <code>orders.cust_id</code> and <code>customers.id</code> isn't obvious..."</p>
                                <p><strong>Solutions:</strong></p>
                                <ol>
                                    <li><strong>Add PK/FK relationships</strong> between tables in Unity Catalog</li>
                                    <li><strong>Add column descriptions</strong> explaining what each ID represents</li>
                                    <li><strong>Create Trusted Assets</strong> with the correct JOIN already written</li>
                                    <li><strong>Domain instructions</strong>: "To join orders and customers, use orders.cust_id = customers.id"</li>
                                </ol>
                            </div>

                            <h5>Two Permission Layers for Genie</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Layer</th><th>Controls</th><th>Set Where</th></tr>
                                <tr><td><strong>Genie Space Permission</strong></td><td>Who can open and interact with the Genie Space</td><td>Genie Space sharing settings</td></tr>
                                <tr><td><strong>Data Permission</strong></td><td>What data the user can query through Genie</td><td>Unity Catalog GRANT/REVOKE</td></tr>
                            </table>

                            ${styleBox('green', 'Genie + Security')}
                                <ul>
                                    <li>Genie respects <strong>Unity Catalog permissions</strong> — users can only query data they have access to</li>
                                    <li>Row-level security and column masking <strong>apply automatically</strong> to Genie queries</li>
                                    <li>Genie <strong>cannot bypass</strong> access controls — it runs as the user</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Trusted Assets — Qué Son</h5>
                            ${styleBox('blue', 'Definición')}
                                <p>Un <strong>Trusted Asset</strong> es un query guardado que ha sido <strong>verificado por un analista</strong> y agregado a un Genie Space. Cuando los usuarios hacen preguntas, Genie los usa como <strong>plantillas SQL</strong> para generar respuestas precisas.</p>
                            </div>

                            <h5>Cuándo Usar Trusted Assets</h5>
                            <ul>
                                <li><strong>Cálculos complejos</strong> donde Genie podría equivocarse (ej. agregaciones de año fiscal)</li>
                                <li><strong>Lógica específica del negocio</strong> que requiere conocimiento de dominio</li>
                                <li><strong>Preguntas frecuentes</strong> — pre-construir la respuesta asegura constancia</li>
                                <li><strong>Joins personalizados</strong> que Genie podría no inferir correctamente</li>
                            </ul>

                            ${styleBox('yellow', 'Prevenir Joins Incorrectos de Genie')}
                                <p><strong>P:</strong> "Genie tiene problemas para hacer join correcto de tablas porque la relación entre <code>orders.cust_id</code> y <code>customers.id</code> no es obvia..."</p>
                                <p><strong>Soluciones:</strong></p>
                                <ol>
                                    <li><strong>Agregar relaciones PK/FK</strong> entre tablas en Unity Catalog</li>
                                    <li><strong>Agregar descripciones de columnas</strong> explicando qué representa cada ID</li>
                                    <li><strong>Crear Trusted Assets</strong> con el JOIN correcto ya escrito</li>
                                    <li><strong>Instrucciones de dominio</strong>: "Para hacer join orders con customers, usa orders.cust_id = customers.id"</li>
                                </ol>
                            </div>

                            <h5>Dos Capas de Permisos para Genie</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Capa</th><th>Controla</th><th>Dónde se Configura</th></tr>
                                <tr><td><strong>Genie Space Permission</strong></td><td>Quién puede abrir y usar el Genie Space</td><td>Configuración de Compartir del Genie Space</td></tr>
                                <tr><td><strong>Data Permission</strong></td><td>Qué datos puede consultar el usuario vía Genie</td><td>Unity Catalog GRANT/REVOKE</td></tr>
                            </table>

                            ${styleBox('green', 'Genie + Seguridad')}
                                <ul>
                                    <li>Genie respeta <strong>permisos de Unity Catalog</strong> — usuarios solo pueden consultar datos que tengan permiso de leer</li>
                                    <li>Row-level security (RLS) y column masking <strong>aplican automáticamente</strong> a los queries de Genie</li>
                                    <li>Genie <strong>no puede saltar</strong> controles de acceso — se ejecuta en nombre del usuario</li>
                                </ul>
                            </div>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 8: DATA MODELING (66%) — EXPANDED
        // 22 questions — Focus: Star Schema, views, PK/FK,
        // Medallion, SCD types, MERGE patterns
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="#f59e0b" stroke-width="2" stroke-linecap="round"/></svg> D8. Data Modeling — Star Schema, Views & SCDs (Expanded)',
            items: [
                {
                    title: "8.1 Star Schema vs Snowflake — The Gold Layer Blueprint",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Star Schema Is the Default Gold Layer Pattern')}
                                <p>The exam assumes Star Schema for Gold layer tables unless stated otherwise.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspect</th><th>Star Schema</th><th>Snowflake Schema</th></tr>
                                <tr><td><strong>Dimension normalization</strong></td><td>Denormalized (flat)</td><td>Normalized (multi-level)</td></tr>
                                <tr><td><strong>Number of JOINs</strong></td><td>Few (fact → dimension)</td><td>Many (fact → dim → sub-dim)</td></tr>
                                <tr><td><strong>Query performance</strong></td><td><strong>Faster</strong> (fewer JOINs)</td><td>Slower (more JOINs)</td></tr>
                                <tr><td><strong>Storage</strong></td><td>More (redundant data in dims)</td><td>Less (normalized)</td></tr>
                                <tr><td><strong>Best for</strong></td><td><strong>BI dashboards, analytics</strong></td><td>Complex data warehouses</td></tr>
                                <tr><td><strong>Exam preference</strong></td><td><strong>Default answer</strong></td><td>Only if "normalized" is specified</td></tr>
                            </table>

                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Star Schema Layout:

    dim_customer ──┐
                   │
    dim_product ───┤──── fact_sales ────┤── dim_date
                   │                    │
    dim_store ─────┘                    └── dim_promotion

Fact table: Numeric measures (amount, quantity, cost)
Dimension tables: Descriptive attributes (name, category, region)</pre>

                            <h5>PK/FK Constraints in Databricks</h5>
                            ${styleBox('yellow', 'PK/FK Are INFORMATIONAL Only — NOT ENFORCED!')}
                                <pre><code>-- Define PK/FK for documentation and Genie optimization
ALTER TABLE dim_customer ADD CONSTRAINT pk_customer 
    PRIMARY KEY (customer_id);

ALTER TABLE fact_sales ADD CONSTRAINT fk_customer 
    FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id);

-- CRITICAL: Databricks does NOT enforce these constraints!
-- You CAN insert invalid foreign keys — no error thrown
-- They exist for: Query optimization hints, Genie joins, Documentation</code></pre>
                                <p><strong>Exam trap:</strong> "Will inserting an invalid FK fail?" → <strong>NO, it succeeds</strong>. Constraints are metadata-only.</p>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Star Schema Es el Patrón Default de la Capa Gold')}
                                <p>El examen asume Star Schema para tablas de la capa Gold a menos que se indique lo contrario.</p>
                            </div>

                            <table class="table table-bordered">
                                <tr class="table-header"><th>Aspecto</th><th>Star Schema</th><th>Snowflake Schema</th></tr>
                                <tr><td><strong>Normalización de Dimensiones</strong></td><td>Desnormalizado (plano)</td><td>Normalizado (multi-nivel)</td></tr>
                                <tr><td><strong>Número de JOINs</strong></td><td>Pocos (fact → dimension)</td><td>Muchos (fact → dim → sub-dim)</td></tr>
                                <tr><td><strong>Rendimiento de Consultas</strong></td><td><strong>Más rápido</strong> (menos JOINs)</td><td>Más lento (más JOINs)</td></tr>
                                <tr><td><strong>Almacenamiento</strong></td><td>Más (datos redundantes en dims)</td><td>Menos (normalizado)</td></tr>
                                <tr><td><strong>Mejor para</strong></td><td><strong>Dashboards BI, analytics</strong></td><td>Data warehouses complejos</td></tr>
                                <tr><td><strong>Preferencia de Examen</strong></td><td><strong>Respuesta Default</strong></td><td>Solo si se especifica "normalizado"</td></tr>
                            </table>

                            <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Estructura Star Schema:

    dim_customer ──┐
                   │
    dim_product ───┤──── fact_sales ────┤── dim_date
                   │                    │
    dim_store ─────┘                    └── dim_promotion

Tabla Fact: Medidas Numéricas (cantidad, monto, costo)
Tablas Dimension: Atributos Descriptivos (nombre, categoría, región)</pre>

                            <h5>Limitaciones PK/FK en Databricks</h5>
                            ${styleBox('yellow', 'PK/FK Son SOLO INFORMACIONALES — ¡NO SE EXIGEN (NOT ENFORCED)!')}
                                <pre><code>-- Definir PK/FK para documentación e indexación Genie
ALTER TABLE dim_customer ADD CONSTRAINT pk_customer 
    PRIMARY KEY (customer_id);

ALTER TABLE fact_sales ADD CONSTRAINT fk_customer 
    FOREIGN KEY (customer_id) REFERENCES dim_customer(customer_id);

-- CRÍTICO: ¡Databricks NO impone estas restricciones u obligaciones!
-- PUEDES insertar foreign keys inválidas — no se lanza ningún error
-- Solo existen para: Hints de Query Optimization, joins Genie, y Documentación</code></pre>
                                <p><strong>Trampa de examen:</strong> "¿Fallaría la inserción de un FK inválido?" → <strong>NO, tiene éxito</strong>. Las restricciones son solo metadata.</p>
                            </div>
                        `)}
                    `
                },
                {
                    title: "8.2 Views — Standard, Temp & Materialized",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Type</th><th>Definition</th><th>Data Storage</th><th>Freshness</th></tr>
                                <tr>
                                    <td><strong>VIEW</strong></td>
                                    <td>Named query, re-executes each time</td>
                                    <td>No data stored (just SQL definition)</td>
                                    <td><strong>Always current</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>TEMPORARY VIEW</strong></td>
                                    <td>Session-scoped, disappears when session ends</td>
                                    <td>No data stored</td>
                                    <td>Current within session</td>
                                </tr>
                                <tr>
                                    <td><strong>MATERIALIZED VIEW</strong></td>
                                    <td>Pre-computed results, stored as data</td>
                                    <td><strong>Data is stored</strong> (like a table)</td>
                                    <td>Stale until refreshed</td>
                                </tr>
                            </table>

                            <pre><code>-- Standard View
CREATE VIEW gold.vw_monthly_revenue AS
SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS total_revenue
FROM silver.orders
GROUP BY 1;

-- Temporary View (session only)
CREATE TEMPORARY VIEW temp_analysis AS
SELECT * FROM sales WHERE year = 2024;

-- Materialized View (requires Pro or Serverless warehouse)
CREATE MATERIALIZED VIEW gold.mv_daily_summary AS
SELECT order_date, COUNT(*) AS orders, SUM(amount) AS revenue
FROM silver.orders
GROUP BY order_date;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW gold.mv_daily_summary;</code></pre>

                            ${styleBox('yellow', 'VIEW vs TABLE Decision (Exam Test)')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Use</th><th>When</th></tr>
                                    <tr><td><strong>VIEW</strong></td><td>Always need <strong>latest data</strong>, simple transformations, no performance concern</td></tr>
                                    <tr><td><strong>TABLE (CTAS)</strong></td><td>Need <strong>fast queries</strong>, data snapshot at a point in time</td></tr>
                                    <tr><td><strong>MATERIALIZED VIEW</strong></td><td>Need fast queries + <strong>refreshable freshness</strong>, complex aggregations</td></tr>
                                </table>
                            </div>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo</th><th>Definición</th><th>Almacenamiento de Datos</th><th>Frescura</th></tr>
                                <tr>
                                    <td><strong>VIEW</strong></td>
                                    <td>Query con nombre, se re-ejecuta cada vez</td>
                                    <td>Sin datos almacenados (solo def. SQL)</td>
                                    <td><strong>Siempre actual</strong></td>
                                </tr>
                                <tr>
                                    <td><strong>TEMPORARY VIEW</strong></td>
                                    <td>Alcance de sesión, desaparece al cerrar sesión</td>
                                    <td>Sin datos almacenados</td>
                                    <td>Actual en la sesión</td>
                                </tr>
                                <tr>
                                    <td><strong>MATERIALIZED VIEW</strong></td>
                                    <td>Resultados pre-computados, almacenados como datos</td>
                                    <td><strong>Datos se almacenan</strong> (como tabla)</td>
                                    <td>Desactualizado hasta refresh</td>
                                </tr>
                            </table>

                            <pre><code>-- Standard View
CREATE VIEW gold.vw_monthly_revenue AS
SELECT DATE_TRUNC('month', order_date) AS month,
       SUM(amount) AS total_revenue
FROM silver.orders
GROUP BY 1;

-- Temporary View (session only)
CREATE TEMPORARY VIEW temp_analysis AS
SELECT * FROM sales WHERE year = 2024;

-- Materialized View (requiere Pro o Serverless warehouse)
CREATE MATERIALIZED VIEW gold.mv_daily_summary AS
SELECT order_date, COUNT(*) AS orders, SUM(amount) AS revenue
FROM silver.orders
GROUP BY order_date;

-- Refresh materialized view
REFRESH MATERIALIZED VIEW gold.mv_daily_summary;</code></pre>

                            ${styleBox('yellow', 'VIEW vs TABLE Decisión (Evaluado en Examen)')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Usar</th><th>Cuándo</th></tr>
                                    <tr><td><strong>VIEW</strong></td><td>Siempre necesitas <strong>datos más recientes</strong>, transformaciones simples, sin preocupación de rendimiento</td></tr>
                                    <tr><td><strong>TABLE (CTAS)</strong></td><td>Necesitas <strong>queries rápidos</strong>, snapshot de datos en un punto en el tiempo</td></tr>
                                    <tr><td><strong>MATERIALIZED VIEW</strong></td><td>Queries rápidos + <strong>frescura refrescable</strong>, agregaciones complejas</td></tr>
                                </table>
                            </div>
                        `)}
                    `
                },
                {
                    title: "8.3 Slowly Changing Dimensions (SCDs) & MERGE Pattern",
                    content: `
                        ${langSection('en', `
                            <h5>SCD Types</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Type</th><th>Strategy</th><th>History</th><th>Example</th></tr>
                                <tr><td><strong>SCD Type 1</strong></td><td>Overwrite the old value</td><td><strong>No history</strong> kept</td><td>Fix a typo in customer name</td></tr>
                                <tr><td><strong>SCD Type 2</strong></td><td>Add a new row with new values + effective dates</td><td><strong>Full history</strong> preserved</td><td>Customer changes address → old row gets end_date, new row added</td></tr>
                                <tr><td><strong>SCD Type 3</strong></td><td>Add a column for previous value</td><td><strong>Limited history</strong> (only previous)</td><td>Add "previous_address" column</td></tr>
                            </table>

                            <pre><code>-- SCD Type 1 with MERGE (overwrite)
MERGE INTO dim_customer AS target
USING staging_customer AS source
ON target.customer_id = source.customer_id
WHEN MATCHED THEN
    UPDATE SET target.address = source.address,
               target.phone = source.phone
WHEN NOT MATCHED THEN
    INSERT *;

-- SCD Type 2 with MERGE (add new row, close old)
-- Step 1: Close existing active records
MERGE INTO dim_customer AS target
USING staging_customer AS source
ON target.customer_id = source.customer_id 
   AND target.is_current = true
WHEN MATCHED AND target.address != source.address THEN
    UPDATE SET target.is_current = false,
               target.end_date = CURRENT_DATE();

-- Step 2: Insert new active records
INSERT INTO dim_customer
SELECT customer_id, address, phone, 
       CURRENT_DATE() AS start_date, 
       NULL AS end_date, 
       true AS is_current
FROM staging_customer;</code></pre>

                            ${styleBox('yellow', 'Exam Decision: Which SCD Type?')}
                                <ul>
                                    <li><strong>"No history needed"</strong> → SCD Type 1 (Overwrite)</li>
                                    <li><strong>"Must track all historical changes"</strong> → SCD Type 2 (New rows)</li>
                                    <li><strong>"Only need to know the previous value"</strong> → SCD Type 3 (Add column)</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Tipos de SCD (Dimensiones que Cambian Lentamente)</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo</th><th>Estrategia</th><th>Historial</th><th>Ejemplo</th></tr>
                                <tr><td><strong>SCD Tipo 1</strong></td><td>Sobrescribir el valor viejo</td><td><strong>Sin historial</strong></td><td>Corregir un typo en nombre de cliente</td></tr>
                                <tr><td><strong>SCD Tipo 2</strong></td><td>Agregar fila nueva con nuevos valores + fechas efectivas</td><td><strong>Historial completo</strong></td><td>Cliente cambia dirección</td></tr>
                                <tr><td><strong>SCD Tipo 3</strong></td><td>Agregar columna para valor anterior</td><td><strong>Historial limitado</strong> (solo anterior)</td><td>Agregar columna "dirección_anterior"</td></tr>
                            </table>

                            <pre><code>-- SCD Tipo 1 con MERGE (sobrescribir)
MERGE INTO dim_customer AS target
USING staging_customer AS source
ON target.customer_id = source.customer_id
WHEN MATCHED THEN
    UPDATE SET target.address = source.address,
               target.phone = source.phone
WHEN NOT MATCHED THEN
    INSERT *;

-- SCD Tipo 2 con MERGE (agregar fila nueva, cerrar la vieja)
-- Paso 1: Cerrar registros activos existentes
MERGE INTO dim_customer AS target
USING staging_customer AS source
ON target.customer_id = source.customer_id 
   AND target.is_current = true
WHEN MATCHED AND target.address != source.address THEN
    UPDATE SET target.is_current = false,
               target.end_date = CURRENT_DATE();

-- Paso 2: Insertar nuevos registros activos
INSERT INTO dim_customer
SELECT customer_id, address, phone, 
       CURRENT_DATE() AS start_date, 
       NULL AS end_date, 
       true AS is_current
FROM staging_customer;</code></pre>

                            ${styleBox('yellow', 'Decisión de Examen: ¿Qué Tipo de SCD?')}
                                <ul>
                                    <li><strong>"No se necesita historial"</strong> → SCD Tipo 1 (Sobrescribir)</li>
                                    <li><strong>"Debe rastrear todos los cambios históricos"</strong> → SCD Tipo 2 (Filas nuevas)</li>
                                    <li><strong>"Solo necesito saber el valor anterior"</strong> → SCD Tipo 3 (Agregar columna)</li>
                                </ul>
                            </div>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 2: MANAGING DATA (66%) — EXPANDED
        // 35 questions — Focus: DESCRIBE EXTENDED, table types,
        // Unity Catalog, ownership, UNDROP
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#f59e0b" style="vertical-align:middle;margin-right:4px"><path d="M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" fill="none" stroke="#f59e0b" stroke-width="2"/><path d="M12 8v8M8 12h8" fill="none" stroke="#f59e0b" stroke-width="2"/></svg> D2. Managing Data — Tables, Metadata & Ownership (Expanded)',
            items: [
                {
                    title: "2.1 DESCRIBE EXTENDED — Metadata Deep Dive",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — DESCRIBE EXTENDED Reveals Everything')}
                                <p>This is the exam's go-to command for inspecting table metadata. Know every field it returns.</p>
                            </div>

                            <pre><code>-- Three levels of DESCRIBE
DESCRIBE TABLE sales;              -- Column names, types, comments
DESCRIBE EXTENDED sales;           -- Everything above + table metadata
DESCRIBE DETAIL sales;             -- File-level details (size, files, partitions)

-- Key DESCRIBE EXTENDED output fields:
-- Type: MANAGED or EXTERNAL
-- Location: Where data files are stored
-- Provider: delta, csv, json, parquet
-- Owner: Who owns this table
-- Created Time: When it was created
-- Table Properties: Custom key-value metadata
-- Comment: Table-level description</code></pre>

                            <h5>Ownership in Unity Catalog</h5>
                            ${styleBox('blue', 'Ownership Rules')}
                                <ul>
                                    <li>The <strong>creator</strong> of a table is automatically the owner</li>
                                    <li>Only the <strong>owner</strong> or <strong>Metastore Admin</strong> can <code>GRANT</code> or <code>REVOKE</code> permissions</li>
                                    <li>Ownership can be <strong>transferred</strong>: <code>ALTER TABLE t SET OWNER TO user_or_group</code></li>
                                    <li>Tables created by a service principal are owned by that service principal</li>
                                </ul>
                            </div>

                            <h5>SHOW Commands</h5>
                            <pre><code>-- List all catalogs you can access
SHOW CATALOGS;

-- List schemas in a catalog
SHOW SCHEMAS IN my_catalog;

-- List tables in a schema
SHOW TABLES IN my_catalog.my_schema;

-- List views
SHOW VIEWS IN my_catalog.my_schema;

-- Show table creation SQL
SHOW CREATE TABLE my_catalog.my_schema.my_table;

-- Show grants on a table
SHOW GRANTS ON TABLE my_catalog.my_schema.my_table;</code></pre>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — DESCRIBE EXTENDED Revela Todo')}
                                <p>Este es el comando predilecto del examen para inspeccionar metadata de tablas.</p>
                            </div>

                            <pre><code>-- Tres niveles de DESCRIBE
DESCRIBE TABLE ventas;              -- Nombres de columnas, tipos, comentarios
DESCRIBE EXTENDED ventas;           -- Todo lo anterior + metadata de tabla
DESCRIBE DETAIL ventas;             -- Detalles a nivel de archivo (tamaño, archivos, particiones)

-- Campos clave de DESCRIBE EXTENDED:
-- Type: MANAGED o EXTERNAL
-- Location: Dónde están los archivos de datos
-- Provider: delta, csv, json, parquet
-- Owner: Quién es dueño de la tabla
-- Created Time: Cuándo fue creada
-- Table Properties: Metadata customizada clave-valor
-- Comment: Descripción a nivel de tabla</code></pre>

                            <h5>Propiedad en Unity Catalog</h5>
                            ${styleBox('blue', 'Reglas de Propiedad (Ownership)')}
                                <ul>
                                    <li>El <strong>creador</strong> de una tabla es automáticamente el owner</li>
                                    <li>Solo el <strong>owner</strong> o <strong>Metastore Admin</strong> pueden <code>GRANT</code> o <code>REVOKE</code></li>
                                    <li>La propiedad se puede <strong>transferir</strong>: <code>ALTER TABLE t SET OWNER TO usuario_o_grupo</code></li>
                                    <li>Tablas creadas por un service principal pertenecen a ese service principal</li>
                                </ul>
                            </div>

                            <h5>Comandos SHOW</h5>
                            <pre><code>-- Listar todos los catálogos a los que tienes acceso
SHOW CATALOGS;

-- Listar esquemas en un catálogo
SHOW SCHEMAS IN my_catalog;

-- Listar tablas en un esquema
SHOW TABLES IN my_catalog.my_schema;

-- Listar vistas
SHOW VIEWS IN my_catalog.my_schema;

-- Mostrar el SQL de creación de una tabla
SHOW CREATE TABLE my_catalog.my_schema.my_table;

-- Mostrar permisos concedidos sobre una tabla
SHOW GRANTS ON TABLE my_catalog.my_schema.my_table;</code></pre>
                        `)}
                    `
                },
                {
                    title: "2.2 DROP TABLE, UNDROP & Table Recovery",
                    content: `
                        ${langSection('en', `
                            <h5>DROP TABLE Behavior</h5>
                            ${styleBox('red', 'DROP Behavior Depends on Table Type!')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Table Type</th><th>DROP Effect</th><th>Data Recoverable?</th></tr>
                                    <tr><td><strong>Managed</strong></td><td>Deletes metadata AND data files</td><td>Yes, via <code>UNDROP</code> (within retention period)</td></tr>
                                    <tr><td><strong>External</strong></td><td>Deletes metadata ONLY</td><td>Data files remain untouched; re-register with CREATE TABLE + LOCATION</td></tr>
                                </table>
                            </div>

                            <pre><code>-- UNDROP TABLE — Recovery for managed tables
-- Must be done within 7-day retention period
UNDROP TABLE my_catalog.my_schema.accidentally_dropped_table;

-- Note: UNDROP restores:
-- ✅ Table metadata (in metastore)
-- ✅ Table data files  
-- ✅ Table history (Time Travel versions)
-- ❌ Does NOT restore GRANTS — must re-apply permissions</code></pre>

                            ${styleBox('yellow', 'UNDROP Exam Traps')}
                                <ul>
                                    <li><strong>UNDROP</strong> only works within <strong>retention period</strong> (default 7 days)</li>
                                    <li>After VACUUM with 0 retention + DROP → data is <strong>permanently gone</strong></li>
                                    <li>UNDROP restores data but <strong>NOT grants/permissions</strong></li>
                                    <li>UNDROP only works for <strong>managed tables</strong> (external tables just lose metadata)</li>
                                </ul>
                            </div>

                            <h5>ALTER TABLE — Common Operations</h5>
                            <pre><code>-- Rename a table
ALTER TABLE sales RENAME TO sales_archive;

-- Add a column
ALTER TABLE sales ADD COLUMN discount DECIMAL(5,2);

-- Change column comment
ALTER TABLE sales ALTER COLUMN amount COMMENT 'Total sale amount in USD';

-- Set table properties
ALTER TABLE sales SET TBLPROPERTIES ('quality' = 'gold', 'team' = 'analytics');

-- Transfer ownership
ALTER TABLE sales SET OWNER TO analytics_team;</code></pre>
                        `)}
                        ${langSection('es', `
                            <h5>Comportamiento de DROP TABLE</h5>
                            ${styleBox('red', '¡El Comportamiento de DROP Depende del Tipo de Tabla!')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Tipo de Tabla</th><th>Efecto de DROP</th><th>¿Datos Recuperables?</th></tr>
                                    <tr><td><strong>Managed</strong></td><td>Elimina metadata Y archivos de datos</td><td>Sí, vía <code>UNDROP</code> (dentro del período de retención)</td></tr>
                                    <tr><td><strong>External</strong></td><td>Elimina SOLO metadata</td><td>Archivos permanecen intactos; re-registrar con CREATE TABLE + LOCATION</td></tr>
                                </table>
                            </div>

                            <pre><code>-- UNDROP TABLE — Recuperación para tablas managed
-- Debe hacerse dentro del período de 7 días de retención
UNDROP TABLE my_catalog.my_schema.accidentally_dropped_table;

-- Nota: UNDROP restaura:
-- ✅ Metadata de la tabla (en el metastore)
-- ✅ Archivos de datos de la tabla  
-- ✅ Historial de la tabla (Versiones de Time Travel)
-- ❌ NO restaura GRANTS — debes reaplicar los permisos</code></pre>

                            ${styleBox('yellow', 'Trampas de UNDROP en el Examen')}
                                <ul>
                                    <li><strong>UNDROP</strong> solo funciona dentro del <strong>período de retención</strong> (default 7 días)</li>
                                    <li>Tras VACUUM con retención 0 + DROP → datos están <strong>perdidos permanentemente</strong></li>
                                    <li>UNDROP restaura datos pero <strong>NO grants/permisos</strong></li>
                                    <li>UNDROP solo funciona para <strong>tablas managed</strong> (tablas external solo pierden metadata)</li>
                                </ul>
                            </div>

                            <h5>ALTER TABLE — Operaciones Comunes</h5>
                            <pre><code>-- Renombrar una tabla
ALTER TABLE sales RENAME TO sales_archive;

-- Agregar una columna
ALTER TABLE sales ADD COLUMN discount DECIMAL(5,2);

-- Cambiar comentario de columna
ALTER TABLE sales ALTER COLUMN amount COMMENT 'Total sale amount en USD';

-- Establecer propiedades a la tabla
ALTER TABLE sales SET TBLPROPERTIES ('quality' = 'gold', 'team' = 'analytics');

-- Transferir propiedad (ownership)
ALTER TABLE sales SET OWNER TO analytics_team;</code></pre>
                        `)}
                    `
                },
                {
                    title: "2.3 Tags, Comments & Table Properties",
                    content: `
                        ${langSection('en', `
                            <h5>Three Ways to Add Metadata</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Syntax</th><th>Best For</th></tr>
                                <tr>
                                    <td><strong>Comments</strong></td>
                                    <td><code>COMMENT ON TABLE t IS 'description'</code></td>
                                    <td>Human-readable documentation, column descriptions for Genie</td>
                                </tr>
                                <tr>
                                    <td><strong>Tags</strong></td>
                                    <td><code>ALTER TABLE t SET TAGS ('pii' = 'true')</code></td>
                                    <td>Governance, classification, search/filter (ABAC)</td>
                                </tr>
                                <tr>
                                    <td><strong>Table Properties</strong></td>
                                    <td><code>ALTER TABLE t SET TBLPROPERTIES ('key' = 'val')</code></td>
                                    <td>Custom metadata, quality markers, team ownership</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Tags vs Comments vs Properties — Exam Test')}
                                <ul>
                                    <li><strong>"Mark a table as deprecated"</strong> → <code>SET TAGS ('deprecated' = 'true')</code> or <code>COMMENT ON TABLE</code></li>
                                    <li><strong>"Classify PII data"</strong> → <code>SET TAGS ('pii' = 'true')</code></li>
                                    <li><strong>"Help Genie understand a column"</strong> → <code>ALTER COLUMN c COMMENT 'description'</code></li>
                                    <li><strong>"Track data quality level"</strong> → <code>SET TBLPROPERTIES ('quality' = 'gold')</code></li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Tres Formas de Agregar Metadata</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Feature</th><th>Sintaxis</th><th>Mejor Para</th></tr>
                                <tr>
                                    <td><strong>Comments</strong></td>
                                    <td><code>COMMENT ON TABLE t IS 'descripción'</code></td>
                                    <td>Documentación legible para humanos, descripciones de columnas para Genie</td>
                                </tr>
                                <tr>
                                    <td><strong>Tags</strong></td>
                                    <td><code>ALTER TABLE t SET TAGS ('pii' = 'true')</code></td>
                                    <td>Gobernanza, clasificación de datos, búsqueda/filtro (ABAC)</td>
                                </tr>
                                <tr>
                                    <td><strong>Table Properties</strong></td>
                                    <td><code>ALTER TABLE t SET TBLPROPERTIES ('key' = 'val')</code></td>
                                    <td>Metadata personalizada, marcadores de calidad, propiedad de equipo</td>
                                </tr>
                            </table>

                            ${styleBox('yellow', 'Tags vs Comments vs Properties — Test de Examen')}
                                <ul>
                                    <li><strong>"Marcar tabla como depreciada/obsoleta"</strong> → <code>SET TAGS ('deprecated' = 'true')</code> o <code>COMMENT ON TABLE</code></li>
                                    <li><strong>"Clasificar datos PII"</strong> → <code>SET TAGS ('pii' = 'true')</code></li>
                                    <li><strong>"Ayudar a Genie a entender la columna"</strong> → <code>ALTER COLUMN c COMMENT 'description'</code></li>
                                    <li><strong>"Rastrear el nivel de calidad de datos"</strong> → <code>SET TBLPROPERTIES ('quality' = 'gold')</code></li>
                                </ul>
                            </div>
                        `)}
                    `
                }
            ]
        },

        // =====================================================
        // DOMAIN 9: SECURING DATA (75%) — EXPANDED
        // 24 questions — Focus: GRANT/REVOKE, row filters,
        // column masking, USAGE chain, dynamic views
        // =====================================================
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#22c55e" style="vertical-align:middle;margin-right:4px"><path d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z" fill="none" stroke="#22c55e" stroke-width="2"/><path d="M9 12l2 2 4-4" fill="none" stroke="#22c55e" stroke-width="2"/></svg> D9. Securing Data — Permissions, Masking & Row Filters (Expanded)',
            items: [
                {
                    title: "9.1 The USAGE Chain — Most Tested Security Concept",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — The USAGE Chain')}
                                <p>To access a table, a user needs <strong>ALL THREE</strong> permissions in the hierarchy:</p>
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
To SELECT from catalog.schema.table, the user needs:

1. USE CATALOG on the catalog    ← Without this, can't see the catalog
2. USE SCHEMA on the schema      ← Without this, can't see the schema  
3. SELECT on the table           ← Without this, can't read the data

All THREE are required! Missing ANY one = Access Denied.</pre>
                            </div>

                            <pre><code>-- Grant the full access chain
GRANT USE CATALOG ON CATALOG analytics TO analyst_group;
GRANT USE SCHEMA ON SCHEMA analytics.gold TO analyst_group;
GRANT SELECT ON TABLE analytics.gold.sales TO analyst_group;

-- Common mistake: Granting SELECT but forgetting USE CATALOG/SCHEMA
-- Result: "Permission denied" even though SELECT was granted</code></pre>

                            ${styleBox('yellow', 'Exam Scenario')}
                                <p><strong>Q:</strong> "An analyst has been granted SELECT on a table but still gets 'Permission denied'. What's missing?"</p>
                                <p><strong>A:</strong> They are missing <code>USE CATALOG</code> and/or <code>USE SCHEMA</code> permissions. The USAGE chain requires all three levels.</p>
                            </div>

                            <h5>Permission Types</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permission</th><th>Level</th><th>What It Allows</th></tr>
                                <tr><td><strong>USE CATALOG</strong></td><td>Catalog</td><td>Navigate into the catalog</td></tr>
                                <tr><td><strong>USE SCHEMA</strong></td><td>Schema</td><td>Navigate into the schema</td></tr>
                                <tr><td><strong>SELECT</strong></td><td>Table/View</td><td>Read data</td></tr>
                                <tr><td><strong>MODIFY</strong></td><td>Table</td><td>INSERT, UPDATE, DELETE, MERGE</td></tr>
                                <tr><td><strong>CREATE TABLE</strong></td><td>Schema</td><td>Create new tables in the schema</td></tr>
                                <tr><td><strong>ALL PRIVILEGES</strong></td><td>Any level</td><td>Full access at that level</td></tr>
                            </table>

                            <pre><code>-- Privilege inheritance: higher level grants cascade DOWN
GRANT ALL PRIVILEGES ON CATALOG analytics TO admin_group;
-- This gives access to ALL schemas and tables within the catalog

-- REVOKE removes permissions
REVOKE SELECT ON TABLE sales FROM analyst_group;

-- Show who has access
SHOW GRANTS ON TABLE analytics.gold.sales;</code></pre>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — La Cadena USAGE')}
                                <p>Para acceder a una tabla, un usuario necesita <strong>LOS TRES</strong> permisos en la jerarquía:</p>
                                <pre style="background:#1a1a2e;color:#e0e0ff;padding:12px;border-radius:8px">
Para SELECT de catalog.schema.table, el usuario necesita:

1. USE CATALOG en el catálogo    ← Sin esto, no puede ver el catálogo
2. USE SCHEMA en el schema       ← Sin esto, no puede ver el schema
3. SELECT en la tabla            ← Sin esto, no puede leer los datos

¡Los TRES son requeridos! Faltar CUALQUIERA = Acceso Denegado.</pre>
                            </div>

                            <pre><code>-- Otorgar la cadena completa de acceso
GRANT USE CATALOG ON CATALOG analytics TO analyst_group;
GRANT USE SCHEMA ON SCHEMA analytics.gold TO analyst_group;
GRANT SELECT ON TABLE analytics.gold.sales TO analyst_group;

-- Error común: Otorgar SELECT pero olvidar USE CATALOG/SCHEMA
-- Resultado: "Permission denied" a pesar de tener SELECT</code></pre>

                            ${styleBox('yellow', 'Escenario de Examen')}
                                <p><strong>P:</strong> "Un analista tiene SELECT en una tabla pero recibe 'Permission denied'. ¿Qué falta?"</p>
                                <p><strong>R:</strong> Le faltan permisos <code>USE CATALOG</code> y/o <code>USE SCHEMA</code>. La cadena USAGE requiere los tres niveles.</p>
                            </div>

                            <h5>Tipos de Permisos</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Permiso</th><th>Nivel</th><th>Qué Permite</th></tr>
                                <tr><td><strong>USE CATALOG</strong></td><td>Catálogo</td><td>Navegar por el catálogo</td></tr>
                                <tr><td><strong>USE SCHEMA</strong></td><td>Schema</td><td>Navegar por el schema</td></tr>
                                <tr><td><strong>SELECT</strong></td><td>Tabla/Vista</td><td>Leer datos</td></tr>
                                <tr><td><strong>MODIFY</strong></td><td>Tabla</td><td>INSERT, UPDATE, DELETE, MERGE</td></tr>
                                <tr><td><strong>CREATE TABLE</strong></td><td>Schema</td><td>Crear nuevas tablas en el schema</td></tr>
                                <tr><td><strong>ALL PRIVILEGES</strong></td><td>Cualquier nivel</td><td>Acceso completo en ese nivel</td></tr>
                            </table>

                            <pre><code>-- Herencia de privilegios: permisos de más alto nivel caen en cascada
GRANT ALL PRIVILEGES ON CATALOG analytics TO admin_group;
-- Esto da acceso a TODOS los schemas y tablas dentro del catálogo

-- REVOKE remueve permisos
REVOKE SELECT ON TABLE sales FROM analyst_group;

-- Mostrar quién tiene acceso
SHOW GRANTS ON TABLE analytics.gold.sales;</code></pre>
                        `)}
                    `
                },
                {
                    title: "9.2 Column Masking & Row Filters",
                    content: `
                        ${langSection('en', `
                            <h5>Column Masking — Hide Sensitive Column Values</h5>
                            <pre><code>-- Create a masking function
CREATE FUNCTION mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE 
    WHEN IS_MEMBER('hr_group') THEN ssn
    ELSE CONCAT('XXX-XX-', RIGHT(ssn, 4))
END;

-- Apply to a column
ALTER TABLE employees 
ALTER COLUMN ssn SET MASK mask_ssn;</code></pre>

                            <h5>Row Filters — Hide Entire Rows</h5>
                            <pre><code>-- Create a filter function
CREATE FUNCTION region_filter(region STRING)
RETURNS BOOLEAN
RETURN CASE
    WHEN IS_MEMBER('global_analysts') THEN TRUE
    WHEN IS_MEMBER('us_analysts') THEN region = 'US'
    WHEN IS_MEMBER('eu_analysts') THEN region = 'EU'
    ELSE FALSE
END;

-- Apply to a table  
ALTER TABLE sales SET ROW FILTER region_filter ON (region);</code></pre>

                            ${styleBox('blue', 'Column Masking vs Row Filters vs Dynamic Views')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Feature</th><th>What It Hides</th><th>Granularity</th><th>Applied At</th></tr>
                                    <tr><td><strong>Column Masking</strong></td><td>Column values</td><td>Column-level</td><td>Table definition (Unity Catalog)</td></tr>
                                    <tr><td><strong>Row Filters</strong></td><td>Entire rows</td><td>Row-level</td><td>Table definition (Unity Catalog)</td></tr>
                                    <tr><td><strong>Dynamic Views</strong></td><td>Both columns and rows</td><td>Both</td><td>View definition (SQL logic)</td></tr>
                                </table>
                            </div>

                            ${styleBox('yellow', 'Exam Decision: Column Masking vs Dynamic Views')}
                                <ul>
                                    <li><strong>"Apply security at the TABLE level"</strong> → Column Masking / Row Filters</li>
                                    <li><strong>"Apply security at the VIEW level"</strong> → Dynamic Views with <code>IS_MEMBER()</code></li>
                                    <li><strong>"Security that follows the data everywhere"</strong> → Column Masking / Row Filters (applied to table, not view)</li>
                                    <li><strong>"Legacy approach"</strong> → Dynamic Views (older method)</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Column Masking — Ocultar Valores de Columnas Sensibles</h5>
                            <pre><code>-- Crear función de enmascaramiento
CREATE FUNCTION mask_ssn(ssn STRING)
RETURNS STRING
RETURN CASE 
    WHEN IS_MEMBER('hr_group') THEN ssn
    ELSE CONCAT('XXX-XX-', RIGHT(ssn, 4))
END;

-- Aplicar a una columna
ALTER TABLE empleados 
ALTER COLUMN ssn SET MASK mask_ssn;</code></pre>

                            <h5>Row Filters — Ocultar Filas Enteras</h5>
                            <pre><code>-- Crear función de filtro
CREATE FUNCTION region_filter(region STRING)
RETURNS BOOLEAN
RETURN CASE
    WHEN IS_MEMBER('analistas_globales') THEN TRUE
    WHEN IS_MEMBER('analistas_us') THEN region = 'US'
    WHEN IS_MEMBER('analistas_eu') THEN region = 'EU'
    ELSE FALSE
END;

-- Aplicar a una tabla  
ALTER TABLE sales SET ROW FILTER region_filter ON (region);</code></pre>

                            ${styleBox('blue', 'Column Masking vs Row Filters vs Dynamic Views')}
                                <table class="table table-bordered">
                                    <tr class="table-header"><th>Característica</th><th>Qué Oculta</th><th>Granularidad</th><th>Dónde se Aplica</th></tr>
                                    <tr><td><strong>Column Masking</strong></td><td>Valores de columna</td><td>Nivel de columna</td><td>Definición de tabla (Unity Catalog)</td></tr>
                                    <tr><td><strong>Row Filters</strong></td><td>Filas enteras</td><td>Nivel de fila</td><td>Definición de tabla (Unity Catalog)</td></tr>
                                    <tr><td><strong>Dynamic Views</strong></td><td>Ambos</td><td>Ambos</td><td>Definición de vista (lógica SQL)</td></tr>
                                </table>
                            </div>

                            ${styleBox('yellow', 'Decisión de Examen: Column Masking vs Dynamic Views')}
                                <ul>
                                    <li><strong>"Seguridad a nivel de TABLA"</strong> → Column Masking / Row Filters</li>
                                    <li><strong>"Seguridad a nivel de VISTA"</strong> → Dynamic Views con <code>IS_MEMBER()</code></li>
                                    <li><strong>"Seguridad que sigue a los datos a todas partes"</strong> → Column Masking / Row Filters (aplicado a tabla, no vista)</li>
                                    <li><strong>"Enfoque legacy (antiguo)"</strong> → Dynamic Views</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "9.3 Delta Sharing, Lineage & Audit Logs",
                    content: `
                        ${langSection('en', `
                            <h5>Delta Sharing — Cross-Organization Data Sharing</h5>
                            ${styleBox('blue', 'Key Facts for Exam')}
                                <ul>
                                    <li>Open protocol — recipients <strong>don't need Databricks</strong></li>
                                    <li>Data stays in provider's account — <strong>no data movement</strong></li>
                                    <li>Compute costs paid by the <strong>consumer</strong> (whoever runs the query)</li>
                                    <li>Can share: tables, views, volumes, ML models</li>
                                    <li>Governed by Unity Catalog — provider controls what's shared</li>
                                </ul>
                            </div>

                            <h5>Data Lineage</h5>
                            ${styleBox('green', 'Lineage Use Cases')}
                                <ul>
                                    <li><strong>Impact analysis</strong> — "If I change this column, which dashboards break?"</li>
                                    <li><strong>Root cause analysis</strong> — "Where did this bad data originate?"</li>
                                    <li><strong>Compliance</strong> — "Show me all tables derived from PII data"</li>
                                    <li>Unity Catalog provides <strong>automatic column-level lineage</strong> from Bronze → Gold</li>
                                </ul>
                            </div>

                            <h5>Audit Logs</h5>
                            <ul>
                                <li><strong>System tables</strong> in Unity Catalog record all access events</li>
                                <li><strong>Immutable</strong> — no one can modify or delete audit logs</li>
                                <li>Track: who accessed what data, when, from which IP</li>
                                <li>Compliance requirement for GDPR, HIPAA, SOC2</li>
                            </ul>

                            ${styleBox('yellow', 'PII Handling Best Practices (Exam-tested)')}
                                <ul>
                                    <li><strong>Classify PII</strong> with Tags: <code>SET TAGS ('pii' = 'true', 'pii_type' = 'ssn')</code></li>
                                    <li><strong>Mask PII</strong> with Column Masking functions</li>
                                    <li><strong>Restrict access</strong> with Row Filters and GRANT/REVOKE</li>
                                    <li><strong>Audit access</strong> with system tables and lineage</li>
                                    <li><strong>Monitor</strong> with Alerts on suspicious query patterns</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            <h5>Delta Sharing — Compartir Datos Entre Organizaciones</h5>
                            ${styleBox('blue', 'Datos Clave para el Examen')}
                                <ul>
                                    <li>Protocolo abierto — los destinatarios <strong>no necesitan Databricks</strong></li>
                                    <li>Los datos permanecen en la cuenta del proveedor — <strong>sin movimiento de datos</strong></li>
                                    <li>Costos de cómputo pagados por el <strong>consumidor</strong> (quien ejecuta el query)</li>
                                    <li>Se pueden compartir: tablas, vistas, volúmenes, modelos ML</li>
                                    <li>Gobernado por Unity Catalog — el proveedor controla qué se comparte</li>
                                </ul>
                            </div>

                            <h5>Linaje de Datos (Data Lineage)</h5>
                            ${styleBox('green', 'Casos de Uso del Linaje')}
                                <ul>
                                    <li><strong>Análisis de impacto</strong> — "Si cambio esta columna, ¿qué dashboards se rompen?"</li>
                                    <li><strong>Análisis de causa raíz</strong> — "¿De dónde provienen estos datos erróneos?"</li>
                                    <li><strong>Cumplimiento (Compliance)</strong> — "Muéstrame todas las tablas derivadas de datos PII"</li>
                                    <li>Unity Catalog provee <strong>linaje automático a nivel de columna</strong> desde Bronze → Gold</li>
                                </ul>
                            </div>

                            <h5>Logs de Auditoría (Audit Logs)</h5>
                            <ul>
                                <li><strong>Tablas de sistema</strong> en Unity Catalog registran todos los eventos de acceso</li>
                                <li><strong>Inmutables</strong> — nadie puede modificar o eliminar audit logs</li>
                                <li>Rastrean: quién accedió a qué datos, cuándo, desde qué IP</li>
                                <li>Requisito de cumplimiento para GDPR, HIPAA, SOC2</li>
                            </ul>

                            ${styleBox('yellow', 'Mejores Prácticas para PII (Evaluadas en Examen)')}
                                <ul>
                                    <li><strong>Clasificar PII</strong> con Tags: <code>SET TAGS ('pii' = 'true', 'pii_type' = 'ssn')</code></li>
                                    <li><strong>Enmascarar PII</strong> con funciones de Column Masking</li>
                                    <li><strong>Restringir acceso</strong> con Row Filters y GRANT/REVOKE</li>
                                    <li><strong>Auditar acceso</strong> con tablas de sistema y linaje</li>
                                    <li><strong>Monitorear</strong> con Alertas sobre patrones de consultas sospechosos</li>
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
        window.studyData['databricks-da'] = window.studyData['databricks-da'].concat(domainSections);
    }
})();
