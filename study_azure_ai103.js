// ============================================================
// STUDY MODULE — Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
// Master Cheat-Sheet for all 5 Official Exam Domains & 14 Subdomains (2026 Edition)
// Bilingual EN/ES side-by-side rendering using langSection('en', ...) / langSection('es', ...)
// Pure SVG Iconography — Zero emojis in UI
// Includes deep 2026 topics from official exam dump: Contoso Case Study, OpenTelemetry,
// Semantic Kernel Filters, Agent Service Tools & Weighting, Content Safety Groundedness
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

    const azureAi103DomainSections = [
        // DOMAIN 0: CHEAT-SHEET & DECISION MATRIX
        {
            title: 'D0. Decision Matrices & Golden Rules / D0. Reglas de Oro y Matrices de Decisión (AI-103 2026)',
            items: [
                {
                    title: "0.1 Azure OpenAI Deployment Decision Matrix / Matriz de Despliegue de Azure OpenAI (Serverless vs PTU vs Provisioned)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure OpenAI Deployment Decision Matrix')}
                                Selecting the right deployment tier is critical for balancing cost, throughput, and latency.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Deployment Option</th><th>Billing Model</th><th>Best Use Case</th><th>Latency SLA</th></tr>
                                <tr><td><strong>Standard (Pay-as-you-go)</strong></td><td>Per 1k tokens (prompt + completion)</td><td>Development, low-to-medium variable traffic</td><td>Variable / subject to regional spikes</td></tr>
                                <tr><td><strong>Global Standard</strong></td><td>Per 1k tokens, routed across global regions</td><td>Production apps with bursty traffic wanting higher rate limits</td><td>Dynamic routing for max availability</td></tr>
                                <tr><td><strong>Global Provisioned (PTU)</strong></td><td>Hourly reserved Provisioned Throughput Units</td><td>High-volume enterprise production, predictable budget</td><td>Guaranteed consistent latency</td></tr>
                                <tr><td><strong>Data Zone Standard / Batch</strong></td><td>Discounted per-token batch pricing</td><td>Asynchronous 24h batch jobs, offline document analysis</td><td>No real-time SLA (processed within 24h)</td></tr>
                            </table>
                            ${styleBox('yellow', 'Golden Rule for AI-103')}
                                For predictable latency and guaranteed throughput at scale: <strong>Global Provisioned PTU</strong>. For variable/low traffic with zero idle compute cost: <strong>Serverless / Global Standard</strong>.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Matriz de Decisión de Despliegue de Azure OpenAI')}
                                Seleccionar el nivel de despliegue correcto es fundamental para equilibrar costo, rendimiento y latencia.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Opción de Despliegue</th><th>Modelo de Facturación</th><th>Mejor Caso de Uso</th><th>SLA de Latencia</th></tr>
                                <tr><td><strong>Estándar (Pago por uso)</strong></td><td>Por cada 1k tokens (prompt + respuesta)</td><td>Desarrollo, tráfico variable de bajo a medio</td><td>Variable / sujeto a picos regionales</td></tr>
                                <tr><td><strong>Global Standard</strong></td><td>Por cada 1k tokens, enrutado globalmente</td><td>Apps en producción con tráfico por ráfagas que necesitan mayores límites</td><td>Enrutamiento dinámico para máxima disponibilidad</td></tr>
                                <tr><td><strong>Global Provisioned (PTU)</strong></td><td>Unidades de Rendimiento Aprovisionadas (PTU) reservadas por hora</td><td>Producción empresarial de alto volumen, presupuesto predecible</td><td>Latencia constante garantizada</td></tr>
                                <tr><td><strong>Data Zone Standard / Batch</strong></td><td>Precios con descuento por token para lotes</td><td>Trabajos por lotes asíncronos en 24h, análisis offline de documentos</td><td>Sin SLA en tiempo real (procesado en 24h)</td></tr>
                            </table>
                            ${styleBox('yellow', 'Regla de Oro de AI-103')}
                                Para latencia predecible y rendimiento garantizado a escala: <strong>Global Provisioned PTU</strong>. Para tráfico variable/bajo con cero costo de cómputo inactivo: <strong>Serverless / Global Standard</strong>.
                            </div>
                        `)}
                    `
                },
                {
                    title: "0.2 Agent Tools Selection Matrix / Matriz de Selección de Herramientas para Agentes",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Agent Tools Selection Guide')}
                                Choose the exact tool designed for the specific computational or retrieval requirement.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Agent Tool</th><th>Execution Environment</th><th>Capabilities</th><th>Exam Indicator</th></tr>
                                <tr><td><strong>Code Interpreter</strong></td><td>Sandboxed secure Python runtime</td><td>Data analysis, math calculations, chart/graph generation, CSV processing</td><td>"Generate visualization", "calculate math", "clean tabular data"</td></tr>
                                <tr><td><strong>File Search (Vector Store)</strong></td><td>Managed vector parsing on uploaded files</td><td>Quick RAG on small developer-uploaded documents (PDF, DOCX)</td><td>"Ad-hoc document query", "developer uploaded policy"</td></tr>
                                <tr><td><strong>Azure AI Search Tool</strong></td><td>Enterprise search index connection</td><td>Large-scale hybrid search, semantic reranking, vector store across millions of docs</td><td>"Millions of corporate docs", "hybrid search", "semantic reranker"</td></tr>
                                <tr><td><strong>Bing Grounding Tool</strong></td><td>Public internet search grounding</td><td>Breaking real-time public news, citations, live web facts</td><td>"Current events", "public web lookup", "cite internet sources"</td></tr>
                                <tr><td><strong>OpenAPI / Function Calling</strong></td><td>Custom REST API endpoints / Azure Functions</td><td>Business transactions, database CRUD, triggering external workflows</td><td>"Create support ticket", "query SQL database", "call ERP endpoint"</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Guía de Selección de Herramientas para Agentes')}
                                Elija la herramienta exacta diseñada para el requerimiento computacional o de recuperación específico.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Herramienta del Agente</th><th>Entorno de Ejecución</th><th>Capacidades</th><th>Indicador en el Examen</th></tr>
                                <tr><td><strong>Code Interpreter</strong></td><td>Python en sandbox seguro y aislado</td><td>Análisis de datos, cálculos matemáticos, gráficos, procesamiento CSV</td><td>"Generar visualización", "cálculo matemático", "limpiar datos tabulares"</td></tr>
                                <tr><td><strong>File Search (Vector Store)</strong></td><td>Procesamiento vectorial administrado</td><td>RAG rápido sobre archivos subidos por el desarrollador (PDF, DOCX)</td><td>"Consulta ad-hoc a documentos", "política subida por el desarrollador"</td></tr>
                                <tr><td><strong>Azure AI Search Tool</strong></td><td>Conexión con índice de búsqueda corporativo</td><td>Búsqueda híbrida a gran escala, reclasificación semántica, millones de docs</td><td>"Millones de documentos corporativos", "búsqueda híbrida", "reclasificador semántico"</td></tr>
                                <tr><td><strong>Bing Grounding Tool</strong></td><td>Fundamentación en búsqueda web pública</td><td>Noticias en tiempo real, citas, hechos web en vivo</td><td>"Eventos actuales", "consulta web pública", "citar fuentes de internet"</td></tr>
                                <tr><td><strong>OpenAPI / Function Calling</strong></td><td>Endpoints REST personalizados / Azure Functions</td><td>Transacciones de negocio, operaciones CRUD en base de datos, flujos ERP</td><td>"Crear ticket de soporte", "consultar base de datos SQL", "llamar API de ERP"</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.3 RAG Retrieval Optimization Matrix / Matriz de Optimización RAG (BM25 + Vectors + Reranking)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'RAG Retrieval Optimization Matrix')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Optimization Strategy</th><th>Mechanism</th><th>When to Choose</th></tr>
                                <tr><td><strong>Hybrid Search (BM25 + Dense Vectors)</strong></td><td>Executes keyword search and dense vector search in parallel, merged with RRF (Reciprocal Rank Fusion)</td><td>Always recommended baseline for technical jargon, acronyms, and domain-specific terminology</td></tr>
                                <tr><td><strong>Vector Query Weighting</strong></td><td>Adjusts the contribution of vector similarity relative to text (e.g., <code>vectorQueries[0].weight = 0.7</code>)</td><td>When semantic relevance must dominate while maintaining exact keyword filter matching</td></tr>
                                <tr><td><strong>Semantic Reranking</strong></td><td>Uses deep neural cross-encoder model on top 50 search results from initial query to compute semantic scores</td><td>When search precision on complex questions requires contextual reading comprehension</td></tr>
                                <tr><td><strong>Integrated Vectorization</strong></td><td>Azure AI Search indexer automatically computes embeddings via Azure OpenAI skill during data ingestion</td><td>No custom ETL pipeline needed; auto-vectorizes documents directly from Azure Blob Storage</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Matriz de Optimización en Recuperación RAG')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Estrategia de Optimización</th><th>Mecanismo</th><th>Cuándo Elegirla</th></tr>
                                <tr><td><strong>Búsqueda Híbrida (BM25 + Vectores Densos)</strong></td><td>Ejecuta búsqueda por palabras clave y vectores densos en paralelo, fusionados con RRF (Reciprocal Rank Fusion)</td><td>Línea base siempre recomendada para jerga técnica, acrónimos y términos especializados</td></tr>
                                <tr><td><strong>Ponderación de Consulta Vectorial</strong></td><td>Ajusta la contribución de similitud vectorial frente a texto (ej. <code>vectorQueries[0].weight = 0.7</code>)</td><td>Cuando la relevancia semántica debe predominar mientras se mantienen filtros exactos de palabras clave</td></tr>
                                <tr><td><strong>Reclasificación Semántica (Semantic Reranking)</strong></td><td>Usa modelo neuronal profundo para reclasificar los 50 mejores resultados calculando puntuación semántica</td><td>Cuando la precisión de búsqueda en preguntas complejas requiere comprensión lectora contextual</td></tr>
                                <tr><td><strong>Vectorización Integrada</strong></td><td>El indexador de Azure AI Search calcula embeddings automáticamente con Azure OpenAI durante la ingesta</td><td>No requiere pipeline ETL personalizado; vectoriza automáticamente directo desde Azure Blob Storage</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.4 Case Study Enterprise Blueprint / Blueprint de Caso de Estudio Empresarial (Contoso, Ltd Architecture)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Enterprise Case Study Architecture (Contoso, Ltd)')}
                                Real-world exam scenarios evaluate end-to-end multi-service integration following Microsoft security and governance baselines.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Component</th><th>Recommended Configuration</th><th>Security & Governance Rationale</th></tr>
                                <tr><td><strong>Foundry Hub & Project</strong></td><td>Single secure Hub with multiple child Projects (Claims, Underwriting, Chatbot)</td><td>Centralizes Key Vault, storage, and networking while isolating team experiments and deployments</td></tr>
                                <tr><td><strong>Authentication</strong></td><td><strong>User-Assigned Managed Identity (UAMI)</strong> assigned to AI services</td><td>Eliminates hardcoded API keys; supports granular RBAC role assignments across Search, Storage, and OpenAI</td></tr>
                                <tr><td><strong>Network Perimeter</strong></td><td><strong>Private Endpoints + VNet</strong>; disable public network access</td><td>Ensures all traffic between application backend, Azure AI Search, and Azure OpenAI stays on the Azure backbone</td></tr>
                                <tr><td><strong>Data Encryption</strong></td><td><strong>Customer-Managed Keys (CMK)</strong> backed by Azure Key Vault with Soft-Delete</td><td>Satisfies strict financial/insurance regulatory requirements for cryptographic control over data at rest</td></tr>
                                <tr><td><strong>Content Safety</strong></td><td>Custom Blocklists with regex patterns + Groundedness Detection API</td><td>Enforces zero tolerance for proprietary insurance terms leaking and blocks prompt injections from claim attachments</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura del Caso de Estudio Empresarial (Contoso, Ltd)')}
                                Los escenarios reales de examen evalúan la integración completa multiservicio bajo las líneas base de seguridad de Microsoft.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Componente</th><th>Configuración Recomendada</th><th>Justificación de Seguridad y Gobernanza</th></tr>
                                <tr><td><strong>Foundry Hub & Project</strong></td><td>Un Hub seguro central con múltiples Proyectos secundarios (Reclamos, Suscripción, Chatbot)</td><td>Centraliza Key Vault, almacenamiento y red mientras aísla experimentos y despliegues de cada equipo</td></tr>
                                <tr><td><strong>Autenticación</strong></td><td><strong>User-Assigned Managed Identity (UAMI)</strong> asignada a los servicios de IA</td><td>Elimina claves API en código; permite asignaciones RBAC granulares entre Search, Storage y OpenAI</td></tr>
                                <tr><td><strong>Perímetro de Red</strong></td><td><strong>Private Endpoints + VNet</strong>; deshabilitar acceso a redes públicas</td><td>Garantiza que todo el tráfico entre backend, Azure AI Search y Azure OpenAI viaje por el backbone privado de Azure</td></tr>
                                <tr><td><strong>Cifrado de Datos</strong></td><td><strong>Customer-Managed Keys (CMK)</strong> con Azure Key Vault y Soft-Delete</td><td>Cumple normativas financieras y de seguros para control criptográfico estricto sobre datos en reposo</td></tr>
                                <tr><td><strong>Content Safety</strong></td><td>Listas de Bloqueo Personalizadas con regex + API de Detección de Fundamentación (Groundedness)</td><td>Garantiza cero fuga de términos confidenciales y bloquea inyecciones de avisos en adjuntos de reclamos</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.5 GenAI Observability & OpenTelemetry Matrix / Matriz de Observabilidad y OpenTelemetry para GenAI",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'GenAI Semantic Conventions in OpenTelemetry')}
                                Azure AI applications export distributed traces to Azure Application Insights using standardized GenAI semantic conventions.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Semantic Attribute</th><th>Standard OpenTelemetry Key</th><th>Description & Purpose</th></tr>
                                <tr><td><strong>System Provider</strong></td><td><code>gen_ai.system</code></td><td>Identifies LLM provider (e.g., <code>az.ai.openai</code> or <code>az.ai.agents</code>)</td></tr>
                                <tr><td><strong>Model Identifier</strong></td><td><code>gen_ai.request.model</code></td><td>Deployment name or foundation model (e.g., <code>gpt-4o</code>)</td></tr>
                                <tr><td><strong>Prompt Tokens</strong></td><td><code>gen_ai.usage.prompt_tokens</code></td><td>Number of tokens ingested in the request context</td></tr>
                                <tr><td><strong>Completion Tokens</strong></td><td><code>gen_ai.usage.completion_tokens</code></td><td>Number of tokens generated by the model</td></tr>
                                <tr><td><strong>Finish Reason</strong></td><td><code>gen_ai.response.finish_reasons</code></td><td>Completion status: <code>stop</code>, <code>length</code>, <code>tool_calls</code>, or <code>content_filter</code></td></tr>
                            </table>
                            ${styleBox('yellow', 'Semantic Kernel Filter Pipeline')}
                                <strong>IPromptRenderFilter:</strong> Invoked immediately before the prompt string is sent to the LLM. Ideal for prompt logging, PII sanitization, and runtime prompt modifications.<br>
                                <strong>IFunctionInvocationFilter:</strong> Invoked around plugin function/tool execution. Ideal for auditing arguments, enforcing authorization, caching results, and measuring execution duration.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Convenciones Semánticas de GenAI en OpenTelemetry')}
                                Las aplicaciones de Azure AI exportan trazas distribuidas a Azure Application Insights usando convenciones estandarizadas de GenAI.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Atributo Semántico</th><th>Clave Estándar OpenTelemetry</th><th>Descripción y Propósito</th></tr>
                                <tr><td><strong>Proveedor de Sistema</strong></td><td><code>gen_ai.system</code></td><td>Identifica el proveedor del LLM (ej. <code>az.ai.openai</code> o <code>az.ai.agents</code>)</td></tr>
                                <tr><td><strong>Identificador de Modelo</strong></td><td><code>gen_ai.request.model</code></td><td>Nombre del despliegue o modelo base (ej. <code>gpt-4o</code>)</td></tr>
                                <tr><td><strong>Tokens de Prompt</strong></td><td><code>gen_ai.usage.prompt_tokens</code></td><td>Cantidad de tokens consumidos en el contexto de entrada</td></tr>
                                <tr><td><strong>Tokens de Respuesta</strong></td><td><code>gen_ai.usage.completion_tokens</code></td><td>Cantidad de tokens generados por el modelo</td></tr>
                                <tr><td><strong>Razón de Finalización</strong></td><td><code>gen_ai.response.finish_reasons</code></td><td>Estado de culminación: <code>stop</code>, <code>length</code>, <code>tool_calls</code> o <code>content_filter</code></td></tr>
                            </table>
                            ${styleBox('yellow', 'Pipeline de Filtros en Semantic Kernel')}
                                <strong>IPromptRenderFilter:</strong> Se ejecuta inmediatamente antes de enviar el prompt al LLM. Ideal para auditoría de prompts, sanitización de PII y modificación dinámica en tiempo de ejecución.<br>
                                <strong>IFunctionInvocationFilter:</strong> Se ejecuta envolviendo la invocación de herramientas o funciones nativas. Ideal para auditar argumentos, aplicar autorización, caché de resultados y medir tiempos de respuesta.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 1
        {
            title: 'Domain 1: Plan and manage an Azure AI solution / Dominio 1: Planificar y administrar una solución de Azure AI (25%)',
            items: [
                {
                    title: "1.1 Foundry Services & Architecture / Servicios y Arquitectura de Azure AI Foundry (Hubs vs Projects)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Hub and Project Architecture')}
                                <strong>Hub:</strong> Top-level Azure resource managing security perimeter, Key Vault, Storage Account, compute clusters, and connected Azure OpenAI/AI Search resources.<br>
                                <strong>Project:</strong> Child workspace for development teams. Inherits security and connections from the Hub while isolating experiments, prompt flows, models, and agents.<br>
                                <strong>Connections:</strong> Managed authentication bridges in the Hub to Azure AI Search, Azure OpenAI, GitHub, or custom APIs without storing connection strings in application code.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura de Hub y Project')}
                                <strong>Hub:</strong> Recurso Azure de nivel superior que administra el perímetro de seguridad, Key Vault, Storage Account, clústeres de cómputo y conexiones con Azure OpenAI/AI Search.<br>
                                <strong>Project:</strong> Espacio de trabajo secundario para equipos de desarrollo. Hereda seguridad y conexiones del Hub aislando experimentos, flujos de avisos, modelos y agentes.<br>
                                <strong>Conexiones:</strong> Puentes de autenticación administrados en el Hub hacia Azure AI Search, Azure OpenAI, GitHub o APIs personalizadas sin guardar cadenas de conexión en el código de la app.
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Responsible AI & Content Safety / IA Responsable y Content Safety (Prompt Shields, Groundedness & Protected Material)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure AI Content Safety Capabilities')}
                                <strong>Prompt Shields (Direct):</strong> Detects jailbreak attempts and adversarial prompts from users trying to bypass instructions.<br>
                                <strong>Prompt Shields (Indirect):</strong> Inspects untrusted third-party data (emails, PDFs, web pages) to block hidden injection attacks.<br>
                                <strong>Groundedness Detection API:</strong> Evaluates whether text generated by an LLM is grounded in source materials. Supports two tasks: <code>QnA</code> (question answering) and <code>Summarization</code>. Returns an ungrounded percentage score.<br>
                                <strong>Protected Material for Code:</strong> Scans LLM code outputs against public repositories on GitHub. If a match is detected, provides the license type and URL citation to avoid copyright infringement.<br>
                                <strong>Protected Material for Text:</strong> Detects verbatim excerpts of copyrighted commercial books, lyrics, and articles.<br>
                                <strong>Custom Blocklists:</strong> Regex and exact-string filters that trigger automatic rejection when sensitive organizational keywords appear.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Capacidades de Azure AI Content Safety')}
                                <strong>Prompt Shields (Directos):</strong> Detecta intentos de jailbreak y avisos adversarios de usuarios que intentan evadir instrucciones.<br>
                                <strong>Prompt Shields (Indirectos):</strong> Inspecciona datos no confiables de terceros (correos, PDFs, páginas web) para bloquear ataques ocultos de inyección.<br>
                                <strong>API de Detección de Fundamentación (Groundedness):</strong> Evalúa si el texto generado por el LLM está respaldado por los materiales fuente. Soporta dos tareas: <code>QnA</code> (preguntas y respuestas) y <code>Summarization</code> (resumen). Retorna un porcentaje de falta de fundamentación.<br>
                                <strong>Material Protegido para Código:</strong> Escanea el código generado contra repositorios públicos de GitHub. Si detecta coincidencias, provee el tipo de licencia y la URL de la cita para evitar infracciones de derechos de autor.<br>
                                <strong>Material Protegido para Texto:</strong> Detecta fragmentos textuales de libros comerciales con derechos de autor, canciones y artículos de prensa.<br>
                                <strong>Listas de Bloqueo Personalizadas:</strong> Filtros por expresiones regulares (regex) y cadenas exactas que disparan rechazo automático ante términos organizacionales sensibles.
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.3 RBAC Roles & Managed Identities / Roles RBAC e Identidades Administradas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Role-Based Access Control (RBAC) in Azure AI')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Role Name</th><th>Scope & Permissions</th><th>Least Privilege Use Case</th></tr>
                                <tr><td><strong>Cognitive Services OpenAI User</strong></td><td>Read access to view deployments + infer completions/embeddings</td><td>End-user client applications calling the chat completion API</td></tr>
                                <tr><td><strong>Cognitive Services OpenAI Contributor</strong></td><td>Full model deployment creation, fine-tuning, and deletion</td><td>AI Engineers configuring models and quotas in Foundry</td></tr>
                                <tr><td><strong>Search Index Data Reader</strong></td><td>Read access to documents and vectors inside an index</td><td>RAG query backend executing vector and hybrid searches</td></tr>
                                <tr><td><strong>Search Index Data Contributor</strong></td><td>Full write, update, and delete access to index documents</td><td>Ingestion pipelines writing chunked embeddings into the index</td></tr>
                                <tr><td><strong>Storage Blob Data Reader</strong></td><td>Read and list blobs from Azure Storage containers</td><td>Azure AI Search indexer or Document Intelligence reading raw PDFs</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Control de Acceso Basado en Roles (RBAC) en Azure AI')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Nombre del Rol</th><th>Ámbito y Permisos</th><th>Caso de Uso de Menor Privilegio</th></tr>
                                <tr><td><strong>Cognitive Services OpenAI User</strong></td><td>Acceso de lectura para ver despliegues y generar inferencias/embeddings</td><td>Aplicaciones cliente finales que consumen la API de chat completions</td></tr>
                                <tr><td><strong>Cognitive Services OpenAI Contributor</strong></td><td>Creación, ajuste fino (fine-tuning) y eliminación de despliegues</td><td>Ingenieros de IA configurando modelos y cuotas en Foundry</td></tr>
                                <tr><td><strong>Search Index Data Reader</strong></td><td>Lectura de documentos y vectores dentro del índice</td><td>Backend de consultas RAG ejecutando búsquedas híbridas</td></tr>
                                <tr><td><strong>Search Index Data Contributor</strong></td><td>Escritura, actualización y eliminación de documentos en el índice</td><td>Pipelines de ingesta escribiendo embeddings fragmentados</td></tr>
                                <tr><td><strong>Storage Blob Data Reader</strong></td><td>Lectura y listado de blobs desde contenedores de Azure Storage</td><td>Indexador de Azure AI Search o Document Intelligence leyendo PDFs</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 2
        {
            title: 'Domain 2: Implement generative AI and agentic solutions / Dominio 2: Implementar soluciones generativas y agénticas (30%)',
            items: [
                {
                    title: "2.1 Agent Service Lifecycle & Execution Model / Ciclo de Vida y Ejecución de Azure AI Agent Service",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Agent Execution Architecture')}
                                1. <strong>Agent:</strong> Configured with system instructions, model deployment (e.g., GPT-4o), temperature, and tools.<br>
                                2. <strong>Thread:</strong> State container that persists conversation history, user messages, and assistant replies.<br>
                                3. <strong>Run:</strong> Execution lifecycle object. Status sequence: <code>queued</code> -> <code>in_progress</code> -> <code>requires_action</code> (when a function call must be executed by client) -> <code>completed</code> (or <code>failed</code>/<code>expired</code>).<br>
                                4. <strong>Run Steps:</strong> Granular logs representing individual model thought steps or tool invocations.<br>
                                5. <strong>Truncation Strategy:</strong> Prevents context window exhaustion by automatically retaining the last N messages (<code>type: "last_messages"</code>) or capping max prompt tokens.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura de Ejecución de Agentes')}
                                1. <strong>Agent:</strong> Configurado con instrucciones de sistema, despliegue de modelo (ej. GPT-4o), temperatura y herramientas.<br>
                                2. <strong>Thread:</strong> Contenedor de estado que almacena el historial de la conversación, mensajes de usuario y respuestas del asistente.<br>
                                3. <strong>Run:</strong> Objeto del ciclo de vida de ejecución. Secuencia de estados: <code>queued</code> -> <code>in_progress</code> -> <code>requires_action</code> (cuando el cliente debe ejecutar una función local) -> <code>completed</code>.<br>
                                4. <strong>Run Steps:</strong> Registros detallados de pasos individuales de razonamiento del modelo o invocación de herramientas.<br>
                                5. <strong>Estrategia de Truncamiento:</strong> Evita el desbordamiento de la ventana de contexto reteniendo automáticamente los últimos N mensajes (<code>type: "last_messages"</code>) o limitando los tokens máximos del prompt.
                            </div>
                        `)}
                    `
                },
                {
                    title: "2.2 Multi-Agent Orchestration Patterns / Patrones de Orquestación Multiagente (Handoffs vs Group Chat vs Evaluator)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Multi-Agent Design Patterns')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Orchestration Pattern</th><th>Interaction Topology</th><th>Best Fit For</th></tr>
                                <tr><td><strong>Sequential Pipeline (Handoff)</strong></td><td>Agent A completes task -> Hands off context to Agent B -> Hands off to Agent C</td><td>Deterministic workflows: Data Extraction -> Validation -> Notification</td></tr>
                                <tr><td><strong>Evaluator-Optimizer (Critic Loop)</strong></td><td>Generator Agent produces response -> Critic Agent scores against rubric -> Iterates until passing</td><td>High-precision code generation, legal drafting, complex math proofs</td></tr>
                                <tr><td><strong>Concurrent Group Chat / Broadcast</strong></td><td>Multiple specialized agents converse in a shared thread managed by an orchestrator</td><td>Collaborative decision-making, multidisciplinary analysis (Finance + Legal + Ops)</td></tr>
                                <tr><td><strong>Semantic Kernel Agent Framework</strong></td><td>ChatCompletionAgent with KernelFunction tools and custom termination strategies</td><td>.NET and Python microservices integrating Azure OpenAI natively</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Patrones de Diseño Multiagente')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Patrón de Orquestación</th><th>Topología de Interacción</th><th>Mejor Caso de Uso</th></tr>
                                <tr><td><strong>Pipeline Secuencial (Handoff)</strong></td><td>Agente A completa tarea -> Pasa contexto al Agente B -> Pasa al Agente C</td><td>Flujos de trabajo deterministas: Extracción -> Validación -> Notificación</td></tr>
                                <tr><td><strong>Evaluador-Optimizador (Critic Loop)</strong></td><td>Agente Generador crea respuesta -> Agente Crítico evalúa contra rúbrica -> Itera hasta aprobar</td><td>Generación de código de alta precisión, contratos legales, demostraciones matemáticas</td></tr>
                                <tr><td><strong>Chat Grupal Concurrente / Difusión</strong></td><td>Varios agentes especializados conversan en un hilo compartido coordinado por un orquestador</td><td>Toma de decisiones colaborativa y análisis multidisciplinario (Finanzas + Legal + Ops)</td></tr>
                                <tr><td><strong>Semantic Kernel Agent Framework</strong></td><td>ChatCompletionAgent con herramientas KernelFunction y estrategias de terminación personalizadas</td><td>Microservicios en .NET y Python integrando Azure OpenAI nativamente</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "2.3 Model Fine-Tuning & Evaluation Metrics / Ajuste Fino y Métricas de Evaluación de Modelos",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Supervised Fine-Tuning (SFT) vs Direct Preference Optimization (DPO)')}
                                <strong>SFT (Supervised Fine-Tuning):</strong> Uses JSONL with <code>messages: [{"role": "system"...}, {"role": "user"...}, {"role": "assistant"...}]</code>. Teaches the model specific domain tone, formatting adherence, or specialized task completion.<br>
                                <strong>DPO (Direct Preference Optimization):</strong> Uses JSONL with <code>prompt</code>, <code>chosen</code>, and <code>rejected</code> pairs. Directly optimizes model preferences towards desired outputs without training a separate reward model.<br>
                                <strong>When to Fine-Tune vs RAG:</strong> If you need new facts or changing enterprise documents, use <strong>RAG</strong>. If you need consistent formatting, complex stylistic adherence, or niche domain vocabulary, use <strong>Fine-Tuning</strong>.
                            </div>
                            ${styleBox('yellow', 'Foundry AI-Assisted Evaluation Metrics')}
                                <strong>Groundedness:</strong> Measures whether the generated output is strictly supported by the retrieved context chunks (zero hallucinations).<br>
                                <strong>Relevance:</strong> Measures how pertinent the generated answer is to the user's explicit question.<br>
                                <strong>Coherence:</strong> Measures the structural logic, flow, and grammatical quality of the response.<br>
                                <strong>Fluency:</strong> Measures the linguistic naturalness and readability of the text.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Ajuste Fino Supervisado (SFT) vs Optimización Directa de Preferencias (DPO)')}
                                <strong>SFT (Supervised Fine-Tuning):</strong> Utiliza formato JSONL con <code>messages: [{"role": "system"...}, {"role": "user"...}, {"role": "assistant"...}]</code>. Enseña al modelo un tono de dominio específico, adherencia a formato o tareas estructuradas.<br>
                                <strong>DPO (Direct Preference Optimization):</strong> Utiliza formato JSONL con pares de <code>prompt</code>, <code>chosen</code> (elegido) y <code>rejected</code> (rechazado). Optimiza directamente las preferencias del modelo sin requerir entrenar un modelo de recompensa por separado.<br>
                                <strong>Cuándo hacer Fine-Tuning vs RAG:</strong> Si necesitas hechos nuevos o documentos corporativos dinámicos, usa <strong>RAG</strong>. Si necesitas formato estricto y consistente, estilo especializado o vocabulario de nicho, usa <strong>Fine-Tuning</strong>.
                            </div>
                            ${styleBox('yellow', 'Métricas de Evaluación Asistidas por IA en Foundry')}
                                <strong>Groundedness (Fundamentación):</strong> Mide si la respuesta generada está respaldada estrictamente por los fragmentos de contexto recuperados (cero alucinaciones).<br>
                                <strong>Relevance (Relevancia):</strong> Mide qué tan pertinente es la respuesta generada respecto a la pregunta explícita del usuario.<br>
                                <strong>Coherence (Coherencia):</strong> Mide la lógica estructural, fluidez y calidad gramatical de la respuesta.<br>
                                <strong>Fluency (Fluidez):</strong> Mide la naturalidad lingüística y legibilidad del texto generado.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 3
        {
            title: 'Domain 3: Implement computer vision solutions / Dominio 3: Implementar soluciones de visión por computadora (10%)',
            items: [
                {
                    title: "3.1 Multimodal Vision & Visual Grounding / Visión Multimodal y Fundamentación Visual (GPT-4o & Phi-3.5-vision)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Multimodal Vision Applications')}
                                <strong>GPT-4o Vision:</strong> Analyzes multiple high-resolution images simultaneously. Supports image captioning, chart reading, spatial object detection, and visual reasonings.<br>
                                <strong>Phi-3.5-vision:</strong> Lightweight small language model (SLM) optimized for text-dense documents, charts, tables, and low-latency edge/local deployments.<br>
                                <strong>Visual Grounding:</strong> Returning normalized bounding box coordinates <code>[ymin, xmin, ymax, xmax]</code> (scaled 0 to 1000) around detected items to support visual highlights in user interfaces.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Aplicaciones de Visión Multimodal')}
                                <strong>GPT-4o Vision:</strong> Analiza múltiples imágenes de alta resolución en paralelo. Soporta descripción de imágenes, lectura de diagramas, detección espacial de objetos y razonamiento visual.<br>
                                <strong>Phi-3.5-vision:</strong> Modelo de lenguaje pequeño (SLM) optimizado para documentos con densidad de texto, tablas, gráficos y despliegues en el borde de baja latencia.<br>
                                <strong>Fundamentación Visual (Visual Grounding):</strong> Retorna coordenadas de cajas delimitadoras normalizadas <code>[ymin, xmin, ymax, xmax]</code> (escaladas de 0 a 1000) alrededor de los objetos detectados para resaltado en la UI.
                            </div>
                        `)}
                    `
                },
                {
                    title: "3.2 Azure Content Understanding & Pro Mode / Azure Content Understanding y Modo Pro",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure Content Understanding Architecture')}
                                <strong>Pro Mode vs Standard:</strong> Pro Mode allows developers to define custom target schemas using JSON. Azure Content Understanding automatically routes visual documents (invoices, architectural plans, technical diagrams) to specialized multimodal extractors.<br>
                                <strong>Key-Value Pair Extraction:</strong> Automatically isolates printed and handwritten key-value associations without training custom ML models.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura de Azure Content Understanding')}
                                <strong>Modo Pro vs Estándar:</strong> El Modo Pro permite a los desarrolladores definir esquemas destino personalizados con JSON. Azure Content Understanding enruta automáticamente documentos visuales (facturas, planos, diagramas técnicos) a extractores multimodales especializados.<br>
                                <strong>Extracción de Pares Clave-Valor:</strong> Aísla automáticamente asociaciones clave-valor impresas y manuscritas sin necesidad de entrenar modelos de ML personalizados.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 4
        {
            title: 'Domain 4: Implement text analysis solutions / Dominio 4: Implementar soluciones de análisis de texto (10%)',
            items: [
                {
                    title: "4.1 Language Analysis & PII Masking / Análisis de Lenguaje y Enmascaramiento de PII",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure AI Language Capabilities')}
                                <strong>PII Redaction:</strong> Automatically replaces sensitive personal identifiers (SSNs, credit card numbers, email addresses, names) with entity tags (e.g., <code>[SSN]</code>) or redaction characters before passing prompts to LLMs.<br>
                                <strong>Text Analytics for Health:</strong> Extracts medical entities (Dosage, MedicationName, Condition) and maps relations (e.g., Medication 'DosageOf' Condition) to standardized SNOMED-CT / ICD-10 ontologies.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Capacidades de Azure AI Language')}
                                <strong>Enmascaramiento de PII:</strong> Reemplaza automáticamente identificadores personales sensibles (números de seguro social, tarjetas de crédito, correos, nombres) con etiquetas de entidad (ej. <code>[SSN]</code>) o caracteres de censura antes de enviar los prompts al LLM.<br>
                                <strong>Text Analytics for Health:</strong> Extrae entidades médicas (Dosis, NombreMedicamento, Condición) y mapea relaciones (ej. Medicamento 'DosageOf' Condición) hacia ontologías estandarizadas SNOMED-CT / ICD-10.
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.2 Speech Services: Streaming STT & Neural TTS / Servicios de Voz: STT en Streaming y TTS Neuronal",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure AI Speech Integration')}
                                <strong>Real-Time Speech-to-Text:</strong> Streaming audio transcription over WebSockets using the Speech SDK with automatic interim results and language identification.<br>
                                <strong>Neural Text-to-Speech:</strong> Human-like synthesis supporting Speech Synthesis Markup Language (SSML) for pitch, rate, pause, and expressive styles (e.g., <code>style="customerservice"</code>).<br>
                                <strong>Audio Transcription Pipeline:</strong> Fast transcription API for asynchronous batch processing of recorded call center audio files stored in Azure Blob Storage.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Integración de Azure AI Speech')}
                                <strong>Speech-to-Text en Tiempo Real:</strong> Transcripción de audio por streaming sobre WebSockets utilizando el Speech SDK con resultados intermedios automáticos e identificación de idioma.<br>
                                <strong>Text-to-Speech Neuronal:</strong> Síntesis con voz natural que soporta Speech Synthesis Markup Language (SSML) para tono, velocidad, pausas y estilos expresivos (ej. <code>style="customerservice"</code>).<br>
                                <strong>Pipeline de Transcripción de Audio:</strong> API de transcripción rápida para procesamiento por lotes asíncrono de grabaciones de centros de llamadas almacenadas en Azure Blob Storage.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 5
        {
            title: 'Domain 5: Implement information extraction solutions / Dominio 5: Implementar soluciones de extracción de información (10%)',
            items: [
                {
                    title: "5.1 Azure AI Search: Advanced Indexing & Vector Search / Búsqueda Vectorial Avanzada y Algoritmos de Indexación",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Vector Algorithms & Metric Selection')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Algorithm / Metric</th><th>Mechanism & Trade-Off</th><th>When to Choose</th></tr>
                                <tr><td><strong>HNSW (Hierarchical Navigable Small World)</strong></td><td>Multi-layer graph approximation. Extremely fast query latency with high recall (95%+).</td><td>Production search across large datasets where sub-second latency is required</td></tr>
                                <tr><td><strong>Exhaustive KNN</strong></td><td>Brute-force scan comparing query vector against 100% of index vectors. Perfect 100% recall but slower at scale.</td><td>Small datasets (&lt;50k docs) or ground-truth quality evaluation baselines</td></tr>
                                <tr><td><strong>Cosine Similarity</strong></td><td>Measures angle between vectors: <code>dot(u, v) / (norm(u) * norm(v))</code>. Normalized length independent.</td><td>Standard default for text embeddings generated by Azure OpenAI (e.g., text-embedding-3-small)</td></tr>
                                <tr><td><strong>Dot Product</strong></td><td>Raw inner product calculation. Requires vectors to be pre-normalized to unit length (length = 1.0).</td><td>Fastest computational efficiency on normalized vector sets</td></tr>
                                <tr><td><strong>Euclidean (L2)</strong></td><td>Measures straight-line physical geometric distance between coordinate points.</td><td>Spatial coordinate embeddings or non-normalized continuous numerical features</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Algoritmos Vectoriales y Selección de Métricas')}
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Algoritmo / Métrica</th><th>Mecanismo y Compensación</th><th>Cuándo Elegirlo</th></tr>
                                <tr><td><strong>HNSW (Hierarchical Navigable Small World)</strong></td><td>Aproximación por grafo multicapa. Latencia de consulta extremadamente baja con alta exhaustividad (95%+).</td><td>Búsqueda en producción sobre grandes conjuntos de datos donde se requiere respuesta sub-segundo</td></tr>
                                <tr><td><strong>Exhaustive KNN</strong></td><td>Escaneo exhaustivo que compara el vector de consulta contra el 100% de vectores. Exactitud perfecta (100%) pero más lento a gran escala.</td><td>Datasets pequeños (&lt;50k docs) o como línea base para evaluar calidad de recuperación</td></tr>
                                <tr><td><strong>Similitud Coseno</strong></td><td>Mide el ángulo entre vectores: <code>dot(u, v) / (norm(u) * norm(v))</code>. Independiente de la longitud.</td><td>Estándar por defecto para embeddings de texto de Azure OpenAI (ej. text-embedding-3-small)</td></tr>
                                <tr><td><strong>Producto Punto (Dot Product)</strong></td><td>Cálculo del producto interno. Requiere que los vectores estén pre-normalizados a longitud unitaria (norma = 1.0).</td><td>Máxima eficiencia computacional sobre vectores normalizados</td></tr>
                                <tr><td><strong>Distancia Euclidiana (L2)</strong></td><td>Mide la distancia geométrica en línea recta entre puntos de coordenadas.</td><td>Embeddings de coordenadas espaciales o características numéricas continuas no normalizadas</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "5.2 Integrated Vectorization & Cognitive Skills / Vectorización Integrada y Habilidades Cognitivas",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Automated Ingestion Pipeline (Skillset)')}
                                <strong>SplitSkill:</strong> Splits long raw documents into chunks by page count or sentence length with overlapping token windows.<br>
                                <strong>AzureOpenAIEmbeddingSkill:</strong> Calls an Azure OpenAI embedding deployment to compute dense vectors for each chunk during indexing.<br>
                                <strong>Index Projections:</strong> Defines 1-to-many document mappings so each generated chunk becomes an independent searchable document in the index while retaining the parent document ID.<br>
                                <strong>Change Tracking Policies:</strong> HighWaterMark policy (using <code>_ts</code> timestamp) or Native Blob Soft Delete to detect updates and deletions automatically.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Pipeline de Ingesta Automatizado (Skillset)')}
                                <strong>SplitSkill:</strong> Divide documentos largos en fragmentos por número de páginas o longitud de oraciones con solapamiento de tokens.<br>
                                <strong>AzureOpenAIEmbeddingSkill:</strong> Llama a un despliegue de embeddings de Azure OpenAI para generar vectores densos por cada fragmento durante la indexación.<br>
                                <strong>Index Projections (Proyecciones de Índice):</strong> Define mapeos 1-a-muchos para que cada fragmento generado se convierta en un documento independiente dentro del índice preservando el ID del documento padre.<br>
                                <strong>Políticas de Detección de Cambios:</strong> Política HighWaterMark (usando timestamp <code>_ts</code>) o borrado suave nativo de Blob Storage para detectar altas, bajas y cambios automáticamente.
                            </div>
                        `)}
                    `
                },
                {
                    title: "5.3 Document Intelligence: Layout to Markdown / Extracción con Document Intelligence (Modelo Layout)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Layout to Markdown for RAG Optimization')}
                                The <code>prebuilt-layout</code> model parses complex multi-column documents, tables, selection marks, and reading order, outputting native Markdown optimized for LLM RAG context injection.<br>
                                <strong>Table Extraction:</strong> Converts complex merged table cells into GitHub-flavored Markdown tables, preventing LLMs from misinterpreting column values.<br>
                                <strong>Reading Order:</strong> Automatically handles multi-column journal articles and newsletters, ensuring sentences are not incorrectly combined horizontally across columns.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Diseño a Markdown para Optimización RAG')}
                                El modelo <code>prebuilt-layout</code> analiza documentos complejos de varias columnas, tablas, marcas de selección y orden de lectura, generando Markdown nativo optimizado para inyección de contexto en RAG.<br>
                                <strong>Extracción de Tablas:</strong> Convierte celdas combinadas complejas en tablas Markdown estándar, evitando que los LLMs interpreten erróneamente valores entre columnas adyacentes.<br>
                                <strong>Orden de Lectura:</strong> Gestiona automáticamente artículos y boletines con formato en columnas múltiples, asegurando que las frases no se concatenen horizontalmente de forma incorrecta.
                            </div>
                        `)}
                    `
                }
            ]
        }
    ];

    window.studyData["azure-ai-103"] = azureAi103DomainSections;
})();
