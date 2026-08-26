// ============================================================
// STUDY MODULE — Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
// Master Cheat-Sheet for all 5 Official Exam Domains & 14 Subdomains (2026 Edition)
// Bilingual EN/ES side-by-side rendering using langSection('en', ...) / langSection('es', ...)
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
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg> D0. 10 Reglas de Oro y Matriz de Decisión AI-103 (Cheat-Sheet)',
            items: [
                {
                    title: "0.1 Matriz de Decisión: Despliegues de Azure OpenAI (Serverless vs PTU vs Provisioned)",
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
                    title: "0.2 Matriz de Herramientas de Agentes: Code Interpreter vs File Search vs Azure AI Search vs OpenAPI",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Agent Tools Selection Guide')}
                                Choose the exact tool designed for the specific computational or retrieval requirement.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Agent Tool</th><th>Execution Environment</th><th>Capabilities</th></tr>
                                <tr><td><strong>Code Interpreter</strong></td><td>Sandboxed secure Python runtime</td><td>Data analysis, math calculations, chart/graph generation, CSV processing</td></tr>
                                <tr><td><strong>File Search</strong></td><td>Managed vector parsing on uploaded files</td><td>Quick RAG on small developer-uploaded documents (PDF, DOCX)</td></tr>
                                <tr><td><strong>Azure AI Search Tool</strong></td><td>Enterprise search index connection</td><td>Large-scale hybrid search, semantic reranking, vector store across millions of docs</td></tr>
                                <tr><td><strong>Bing Web Search</strong></td><td>Public internet search grounding</td><td>Breaking real-time public news, citations, live web facts</td></tr>
                                <tr><td><strong>OpenAPI / Function Calling</strong></td><td>Custom REST API endpoints / Azure Functions</td><td>Business transactions, database CRUD, triggering external workflows</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Guía de Selección de Herramientas para Agentes')}
                                Elija la herramienta exacta diseñada para el requerimiento computacional o de recuperación específico.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Herramienta de Agente</th><th>Entorno de Ejecución</th><th>Capacidades</th></tr>
                                <tr><td><strong>Code Interpreter</strong></td><td>Entorno de ejecución Python en sandbox seguro</td><td>Análisis de datos, cálculos matemáticos, generación de gráficos, procesamiento CSV</td></tr>
                                <tr><td><strong>File Search</strong></td><td>Análisis vectorial administrado en archivos subidos</td><td>RAG rápido en documentos pequeños subidos por el desarrollador (PDF, DOCX)</td></tr>
                                <tr><td><strong>Azure AI Search Tool</strong></td><td>Conexión con índice de búsqueda empresarial</td><td>Búsqueda híbrida a gran escala, reranker semántico, almacén vectorial en millones de docs</td></tr>
                                <tr><td><strong>Bing Web Search</strong></td><td>Fundamentación en búsqueda web pública</td><td>Noticias públicas de última hora en tiempo real, citas, datos web en vivo</td></tr>
                                <tr><td><strong>OpenAPI / Function Calling</strong></td><td>Endpoints de API REST personalizados / Azure Functions</td><td>Transacciones de negocio, CRUD de base de datos, activación de flujos externos</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 1
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/></svg> Domain 1: Plan and manage an Azure AI solution (25%)',
            items: [
                {
                    title: "1.1 Foundry Services & Architecture: Hubs vs Projects",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Hub and Project Architecture')}
                                <strong>Hub:</strong> Top-level Azure resource managing security perimeter, Key Vault, Storage Account, compute clusters, and connected Azure OpenAI/AI Search resources.<br>
                                <strong>Project:</strong> Child workspace for development teams. Inherits security and connections from the Hub while isolating experiments, prompt flows, models, and agents.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Arquitectura de Hub y Project')}
                                <strong>Hub:</strong> Recurso Azure de nivel superior que administra el perímetro de seguridad, Key Vault, Storage Account, clústeres de cómputo y conexiones con Azure OpenAI/AI Search.<br>
                                <strong>Project:</strong> Espacio de trabajo secundario para equipos de desarrollo. Hereda seguridad y conexiones del Hub aislando experimentos, flujos de avisos, modelos y agentes.
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Responsible AI & Prompt Shields",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Azure AI Content Safety & Shields')}
                                <strong>Prompt Shields (Direct):</strong> Detects jailbreak attempts and adversarial prompts from users trying to bypass instructions.<br>
                                <strong>Prompt Shields (Indirect):</strong> Inspects untrusted third-party data (emails, PDFs, web pages) to block hidden injection attacks.<br>
                                <strong>Protected Material Detection:</strong> Detects verbatim copyrighted text or proprietary code snippets in completions.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Azure AI Content Safety y Escudos de Avisos')}
                                <strong>Prompt Shields (Directos):</strong> Detecta intentos de jailbreak y avisos adversarios de usuarios que intentan evadir instrucciones.<br>
                                <strong>Prompt Shields (Indirectos):</strong> Inspecciona datos no confiables de terceros (correos, PDFs, páginas web) para bloquear ataques ocultos.<br>
                                <strong>Detección de Material Protegido:</strong> Detecta texto con copyright textual o fragmentos de código propietario en respuestas.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 2
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z"/></svg> Domain 2: Implement generative AI and agentic solutions (30%)',
            items: [
                {
                    title: "2.1 Azure AI Agent Service Lifecycle",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Agent Execution Flow')}
                                1. <strong>Agent:</strong> Configured with instructions, model deployment, and tools (Code Interpreter, Search, Functions).<br>
                                2. <strong>Thread:</strong> State container representing a conversation session.<br>
                                3. <strong>Run:</strong> Execution object. Transitions through <code>queued</code> -> <code>in_progress</code> -> <code>requires_action</code> (if calling custom tools) -> <code>completed</code>.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Flujo de Ejecución de Agentes')}
                                1. <strong>Agent:</strong> Configurado con instrucciones, despliegue de modelo y herramientas.<br>
                                2. <strong>Thread:</strong> Contenedor de estado que representa una sesión conversacional.<br>
                                3. <strong>Run:</strong> Objeto de ejecución. Transiciona por <code>queued</code> -> <code>in_progress</code> -> <code>requires_action</code> (para llamadas a herramientas) -> <code>completed</code>.
                            </div>
                        `)}
                    `
                },
                {
                    title: "2.2 Foundry Evaluation Metrics (Groundedness, Relevance, Coherence)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Evaluation Metrics')}
                                <strong>Groundedness:</strong> Measures if the answer is completely supported by retrieved context (detects hallucinations).<br>
                                <strong>Relevance:</strong> Measures if the answer directly addresses the user query.<br>
                                <strong>Coherence:</strong> Measures logical flow, syntax, and clarity of the output.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Métricas de Evaluación')}
                                <strong>Groundedness (Fundamentación):</strong> Mide si la respuesta está completamente respaldada por el contexto (detecta alucinaciones).<br>
                                <strong>Relevance (Relevancia):</strong> Mide si la respuesta aborda directamente la consulta del usuario.<br>
                                <strong>Coherence (Coherencia):</strong> Mide el flujo lógico, sintaxis y claridad del texto generado.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 3
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg> Domain 3: Implement computer vision solutions (10%)',
            items: [
                {
                    title: "3.1 Multimodal Vision & Content Understanding",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Multimodal Vision Models')}
                                Use <strong>GPT-4o</strong> or <strong>Phi-3.5-vision</strong> for visual question answering, accessibility alt-text, and multi-image context synthesis. Use <strong>Azure Content Understanding</strong> in Pro Mode for custom structured extraction from visual diagrams.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Modelos de Visión Multimodal')}
                                Utilice <strong>GPT-4o</strong> o <strong>Phi-3.5-vision</strong> para preguntas y respuestas visuales, texto alternativo de accesibilidad y síntesis de contexto de múltiples imágenes. Utilice <strong>Azure Content Understanding</strong> en Pro Mode para extracción estructurada personalizada de diagramas visuales.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 4
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/></svg> Domain 4: Implement text analysis solutions (10%)',
            items: [
                {
                    title: "4.1 Language Analysis & Speech Integration",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Text & Speech Services')}
                                <strong>PII Redaction:</strong> Azure AI Language prebuilt entity masking.<br>
                                <strong>Real-time Speech:</strong> Low-latency streaming STT via WebSockets.<br>
                                <strong>Neural TTS:</strong> Human-quality voice generation with SSML styles.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Servicios de Texto y Voz')}
                                <strong>Redacción de PII:</strong> Enmascaramiento de entidades prediseñadas en Azure AI Language.<br>
                                <strong>Voz en Tiempo Real:</strong> STT por streaming de baja latencia mediante WebSockets.<br>
                                <strong>Neural TTS:</strong> Generación de voz con calidad humana y estilos SSML.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // DOMAIN 5
        {
            title: '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Domain 5: Implement information extraction solutions (10%)',
            items: [
                {
                    title: "5.1 Azure AI Search: Hybrid Search & Semantic Reranker",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Hybrid Search & RRF')}
                                <strong>Hybrid Query:</strong> Runs BM25 Keyword Search + Vector Dense Search simultaneously.<br>
                                <strong>RRF (Reciprocal Rank Fusion):</strong> Merges keyword and vector rank scores into a single optimal list.<br>
                                <strong>Semantic Reranker:</strong> Deep learning model that reranks top 50 RRF results using semantic context understanding.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Búsqueda Híbrida y RRF')}
                                <strong>Consulta Híbrida:</strong> Ejecuta búsqueda por palabras clave BM25 + búsqueda densa vectorial simultáneamente.<br>
                                <strong>RRF (Reciprocal Rank Fusion):</strong> Fusiona las puntuaciones de palabras clave y vectoriales en una lista clasificada óptima.<br>
                                <strong>Semantic Reranker:</strong> Modelo de aprendizaje profundo que reclasifica los 50 mejores resultados de RRF utilizando comprensión semántica.
                            </div>
                        `)}
                    `
                }
            ]
        }
    ];

    window.studyData["azure-ai-103"] = azureAi103DomainSections;
})();
