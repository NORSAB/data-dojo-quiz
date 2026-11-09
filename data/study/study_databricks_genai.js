// ============================================================
// STUDY MODULE — Databricks Certified Generative AI Engineer Associate
// Cheat-sheet por los 6 dominios oficiales del examen (Marzo 2026)
// Curado a partir de los 65 subdominios reales del banco de 383 preguntas
// + contenido oficial de los cursos Databricks Academy (Retrieval Agents,
// Single-Agent Applications, Deployment & Monitoring, Evaluation & Governance)
// Bilingue EN/ES en el mismo bloque, igual patron que study_databricks_domains.js
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

    const genaiDomainSections = [
        // =====================================================
        // DOMAIN 0: 10 REGLAS DE ORO & MATRIZ DE DECISIÓN (CHEAT-SHEET)
        // =====================================================
        {
            title: 'D0. 10 Reglas de Oro y Matriz de Decisión (Cheat-Sheet) / D0. 10 Golden Rules & Decision Matrix (Cheat-Sheet)',
            items: [
                {
                    title: "0.1 Matriz de Decisión: Prompting vs RAG vs Fine-Tuning vs Pre-training",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Core Architecture Decision Rule')}
                                The exam frequently asks you to select the lowest cost, lowest complexity approach that satisfies business requirements.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Approach</th><th>When to Choose</th><th>Cost / Complexity</th><th>Primary Advantage</th></tr>
                                <tr><td><strong>Prompt Engineering / Few-Shot</strong></td><td>General tasks, output formatting, standard knowledge</td><td>Lowest</td><td>Zero training, instant iteration</td></tr>
                                <tr><td><strong>RAG (Retrieval-Augmented)</strong></td><td>Domain-specific/private data, frequent updates, source attribution</td><td>Medium</td><td>Accurate citations, no retraining needed for new docs</td></tr>
                                <tr><td><strong>Fine-Tuning</strong></td><td>Specific style/tone, highly specialized vocabulary, niche tasks</td><td>High</td><td>Model internalizes style; does NOT solve factual freshness</td></tr>
                                <tr><td><strong>Pre-training (from scratch)</strong></td><td>Unique language/domain with massive novel corpus (rarely right answer)</td><td>Very High ($$$)</td><td>Complete ownership; almost never cost-effective for exam scenarios</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Regla de Decisión de Arquitectura Principal')}
                                El examen pregunta frecuentemente cómo seleccionar el enfoque de menor costo y menor complejidad que satisfaga los requisitos del negocio.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Enfoque</th><th>Cuándo Elegirlo</th><th>Costo / Complejidad</th><th>Ventaja Principal</th></tr>
                                <tr><td><strong>Prompt Engineering / Few-Shot</strong></td><td>Tareas generales, formato de salida, conocimiento estándar</td><td>El más bajo</td><td>Cero entrenamiento, iteración instantánea</td></tr>
                                <tr><td><strong>RAG (Retrieval-Augmented)</strong></td><td>Datos privados/específicos del dominio, actualizaciones frecuentes, atribución de fuentes</td><td>Medio</td><td>Citas precisas, sin reentrenar para nuevos documentos</td></tr>
                                <tr><td><strong>Fine-Tuning</strong></td><td>Estilo/tono específico, vocabulario muy especializado, tareas de nicho</td><td>Alto</td><td>El modelo interioriza el estilo; NO resuelve frescura de hechos</td></tr>
                                <tr><td><strong>Pre-entrenamiento (desde cero)</strong></td><td>Lenguaje/dominio único con corpus masivo nuevo (casi nunca es la respuesta)</td><td>Muy Alto ($$$)</td><td>Control total; casi nunca rentable en escenarios de examen</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.2 Matriz de Model Serving: Pay-per-token vs Provisioned Throughput",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Serving Mode</th><th>Workload Characteristics</th><th>Key Feature</th><th>Exam Trigger Keyword</th></tr>
                                <tr><td><strong>Pay-per-token (Foundation Model APIs)</strong></td><td>Variable, spiky, or low-volume traffic; prototyping</td><td>Zero infrastructure management; scales to zero</td><td><em>"Unpredictable traffic", "Lowest idle cost"</em></td></tr>
                                <tr><td><strong>Provisioned Throughput</strong></td><td>High, predictable, mission-critical production volume</td><td>Guaranteed concurrency (DBUs per hour); strict latency SLA; custom fine-tuned models</td><td><em>"Guaranteed throughput", "Strict SLA", "Custom model"</em></td></tr>
                                <tr><td><strong>External Models (OpenAI / Anthropic)</strong></td><td>Accessing 3rd-party models via Databricks Model Serving</td><td>Managed with Unity Catalog Connections and Databricks Secrets</td><td><em>"Centralized governance for external APIs"</em></td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Modo de Serving</th><th>Características de la Carga</th><th>Característica Clave</th><th>Palabras Clave en el Examen</th></tr>
                                <tr><td><strong>Pay-per-token (Foundation Model APIs)</strong></td><td>Tráfico variable, con picos o bajo volumen; prototipos</td><td>Cero gestión de infraestructura; escala a cero</td><td><em>"Tráfico impredecible", "Menor costo en reposo"</em></td></tr>
                                <tr><td><strong>Provisioned Throughput</strong></td><td>Volumen de producción alto, predecible y crítico</td><td>Concurrencia garantizada (DBUs/hora); SLA de latencia estricto; modelos propios</td><td><em>"Throughput garantizado", "SLA estricto", "Modelo personalizado"</em></td></tr>
                                <tr><td><strong>Modelos Externos (OpenAI / Anthropic)</strong></td><td>Consumo de modelos de terceros vía Databricks Model Serving</td><td>Gobernados con Unity Catalog Connections y Databricks Secrets</td><td><em>"Gobernanza centralizada para APIs externas"</em></td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.3 Matriz de Mosaic AI Vector Search: Delta Sync vs Direct Access",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Index Type</th><th>Embedding Generation</th><th>Underlying Data Source</th><th>Best For</th></tr>
                                <tr><td><strong>Delta Sync (Managed Embeddings)</strong></td><td>Databricks computes embeddings automatically on Delta table updates</td><td>Source Delta table in Unity Catalog</td><td><strong>Recommended default</strong> — zero custom embedding pipeline code</td></tr>
                                <tr><td><strong>Delta Sync (Self-Managed Embeddings)</strong></td><td>User computes embedding vectors and writes them to Delta column</td><td>Source Delta table with pre-computed vector array</td><td>Custom or proprietary embedding models not in Databricks catalog</td></tr>
                                <tr><td><strong>Direct Vector Access Index</strong></td><td>User sends vector directly via REST API</td><td>No Delta table binding</td><td>External microservices writing vectors directly</td></tr>
                            </table>
                            ${styleBox('blue', 'Continuous vs Triggered Sync')}
                                <ul>
                                    <li><strong>Continuous:</strong> Pipeline streams Delta changes with sub-second/seconds latency (higher cost).</li>
                                    <li><strong>Triggered:</strong> Updates on-demand or on a cron schedule (cost-effective for batch updates).</li>
                                </ul>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Tipo de Índice</th><th>Generación de Embeddings</th><th>Fuente de Datos</th><th>Ideal Para</th></tr>
                                <tr><td><strong>Delta Sync (Managed Embeddings)</strong></td><td>Databricks calcula los embeddings automáticamente al actualizar la tabla Delta</td><td>Tabla Delta origen en Unity Catalog</td><td><strong>Opción recomendada por defecto</strong> — cero código de pipeline</td></tr>
                                <tr><td><strong>Delta Sync (Self-Managed Embeddings)</strong></td><td>El usuario genera los vectores y los guarda en una columna de la tabla Delta</td><td>Tabla Delta origen con columna de vectores pre-calculados</td><td>Modelos de embeddings propietarios o externos no soportados</td></tr>
                                <tr><td><strong>Direct Vector Access Index</strong></td><td>El usuario envía el vector directamente vía API REST</td><td>Sin tabla Delta vinculada</td><td>Microservicios externos que escriben vectores directamente</td></tr>
                            </table>
                            ${styleBox('blue', 'Sincronización Continuous vs Triggered')}
                                <ul>
                                    <li><strong>Continuous:</strong> Sincroniza cambios de Delta en streaming con latencia de segundos (mayor costo de cómputo).</li>
                                    <li><strong>Triggered:</strong> Sincroniza bajo demanda o con cron programado (óptimo en costo para actualizaciones por lotes).</li>
                                </ul>
                        `)}
                    `
                },
                {
                    title: "0.4 Matriz de Empaquetado MLflow & Despliegue de Agentes",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>MLflow Flavor</th><th>Use Case</th><th>Advantages</th></tr>
                                <tr><td><code>mlflow.pyfunc</code></td><td>Custom multi-step logic, custom agents, hybrid retrieval, complex pre/post-processing</td><td>Maximum flexibility; deployable to any Databricks Serving endpoint</td></tr>
                                <tr><td><code>mlflow.langchain</code></td><td>Standard LangChain chains, LCEL expressions, LangGraph</td><td>Automatic tracing integration, structured parameter logging</td></tr>
                                <tr><td><code>mlflow.transformers</code></td><td>HuggingFace native pipelines</td><td>Optimized GPU batch inference</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Flavor de MLflow</th><th>Caso de Uso</th><th>Ventajas</th></tr>
                                <tr><td><code>mlflow.pyfunc</code></td><td>Lógica personalizada de múltiples pasos, agentes propios, retrieval híbrido, pre/post-procesamiento</td><td>Máxima flexibilidad; desplegable a cualquier endpoint de Serving</td></tr>
                                <tr><td><code>mlflow.langchain</code></td><td>Cadenas estándar de LangChain, expresiones LCEL, LangGraph</td><td>Integración automática de MLflow Tracing, registro de parámetros</td></tr>
                                <tr><td><code>mlflow.transformers</code></td><td>Pipelines nativos de HuggingFace</td><td>Inferencia por lotes optimizada en GPU</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "0.5 Matriz de Evaluación: Triada RAG & MLflow Tracing",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Metric</th><th>Target Component</th><th>Question it Answers</th><th>Failure Mode</th></tr>
                                <tr><td><strong>Context Relevance</strong></td><td>Retriever</td><td>Did we retrieve chunks that actually contain the answer?</td><td>Noise in prompt; unnecessary token costs</td></tr>
                                <tr><td><strong>Groundedness (Faithfulness)</strong></td><td>Generator (LLM)</td><td>Is the answer strictly supported by the retrieved context?</td><td>Hallucination; invented facts</td></tr>
                                <tr><td><strong>Answer Relevance</strong></td><td>Generator (LLM)</td><td>Does the output directly answer the user's specific prompt?</td><td>Vagueness; answering an unrelated question</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Métrica</th><th>Componente Evaluado</th><th>Pregunta que Responde</th><th>Modo de Falla Detectado</th></tr>
                                <tr><td><strong>Context Relevance</strong></td><td>Retriever</td><td>¿Los fragmentos recuperados contienen realmente la respuesta?</td><td>Ruido en el prompt; consumo innecesario de tokens</td></tr>
                                <tr><td><strong>Groundedness (Faithfulness)</strong></td><td>Generador (LLM)</td><td>¿La respuesta está estrictamente respaldada por el contexto recuperado?</td><td>Alucinación; datos inventados</td></tr>
                                <tr><td><strong>Answer Relevance</strong></td><td>Generador (LLM)</td><td>¿La respuesta contesta directamente lo que el usuario preguntó?</td><td>Vaguedad; responder algo no solicitado</td></tr>
                            </table>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 1: DESIGN APPLICATIONS
        // =====================================================
        {
            title: 'D1. Design Applications / D1. Diseño de Aplicaciones',
            items: [
                {
                    title: "1.1 Prompt Engineering para Salidas con Formato Estricto",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Guaranteed Exam Pattern')}
                                The exam repeatedly tests: "How do you FORCE a strictly formatted response (JSON/XML/CSV) from an LLM?" There is one correct family of answers.
                            </div>
                            <h5>The Winning Combination</h5>
                            <ul>
                                <li><strong>Explicit schema</strong> in the system prompt (JSON schema, XML tag names, CSV header row)</li>
                                <li><strong>One-shot / few-shot example</strong> showing exact input → output</li>
                                <li><strong>Delimiters</strong> to separate instructions from content (triple backticks, XML tags)</li>
                                <li><strong>Structured Outputs / schema enforcement</strong> when the serving API supports it (constrained decoding)</li>
                                <li><strong>Assistant response pre-fill (priming)</strong> — start the assistant turn with the opening token (e.g. <code>{</code> or a CSV header row) so the model continues in that format</li>
                            </ul>
                            ${styleBox('yellow', 'Wrong Answers the Exam Loves to Offer')}
                                <ul>
                                    <li>Raising <strong>temperature</strong> to "give the model more freedom" — this makes formatting <em>worse</em>, not better.</li>
                                    <li>Weak negative instructions like "don't say hello" without a schema or example — frequently fails.</li>
                                    <li>Relying on regex/post-processing over free text instead of constraining the generation itself — brittle.</li>
                                </ul>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Patrón Garantizado en el Examen')}
                                El examen pregunta una y otra vez: "¿Cómo FUERZAS una respuesta con formato estricto (JSON/XML/CSV) de un LLM?" Existe una única familia de respuestas correctas.
                            </div>
                            <h5>La Combinación Ganadora</h5>
                            <ul>
                                <li><strong>Esquema explícito</strong> en el system prompt (JSON schema, nombres de tags XML, fila de encabezado CSV)</li>
                                <li><strong>Ejemplo one-shot / few-shot</strong> mostrando entrada → salida exacta</li>
                                <li><strong>Delimitadores</strong> para separar instrucciones de contenido (triple backticks, tags XML)</li>
                                <li><strong>Structured Outputs / enforcement de esquema</strong> cuando la API de serving lo soporta (constrained decoding)</li>
                                <li><strong>Pre-llenado de la respuesta del asistente (priming)</strong> — iniciar el turno del asistente con el token de apertura (ej. <code>{</code> o la fila de encabezado CSV) para que el modelo continúe en ese formato</li>
                            </ul>
                            ${styleBox('yellow', 'Respuestas Incorrectas que Ama Ofrecer el Examen')}
                                <ul>
                                    <li>Subir la <strong>temperature</strong> para "darle más libertad al modelo" — esto empeora el formato, no lo mejora.</li>
                                    <li>Instrucciones negativas débiles como "no digas hola" sin esquema ni ejemplo — falla frecuentemente.</li>
                                    <li>Depender de regex/post-procesamiento sobre texto libre en vez de restringir la generación misma — frágil.</li>
                                </ul>
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.2 Model Tasks y Chain Components",
                    content: `
                        ${langSection('en', `
                            <p>The exam asks you to map a <strong>business requirement</strong> to the right model <strong>task</strong> and the right <strong>chain component</strong>.</p>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Business Need</th><th>Model Task</th></tr>
                                <tr><td>"Summarize customer tickets"</td><td>Summarization</td></tr>
                                <tr><td>"Answer questions using our docs"</td><td>Retrieval-Augmented Generation (RAG)</td></tr>
                                <tr><td>"Tag support tickets by category"</td><td>Classification</td></tr>
                                <tr><td>"Pull entities from contracts"</td><td>Information / Entity Extraction</td></tr>
                                <tr><td>"Multi-turn assistant"</td><td>Conversational / Chat</td></tr>
                            </table>
                            <h5>Chain Components (a "chain" = pipeline of steps)</h5>
                            <ul>
                                <li><strong>Prompt template</strong> — parameterized instructions</li>
                                <li><strong>Retriever</strong> — fetches context (e.g. from a Vector Search index)</li>
                                <li><strong>LLM / model node</strong> — generates the response</li>
                                <li><strong>Output parser</strong> — validates/structures the final response</li>
                                <li><strong>Tools</strong> — functions the model can call (UC Functions, APIs)</li>
                            </ul>
                            ${styleBox('blue', 'Exam Tip')}
                                If the question describes "input → context lookup → generation → structured output", it is describing a <strong>chain</strong>, and you should pick the component missing from that sequence.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>El examen te pide mapear un <strong>requisito de negocio</strong> a la <strong>tarea</strong> de modelo correcta y al <strong>componente de chain</strong> correcto.</p>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Necesidad de Negocio</th><th>Tarea del Modelo</th></tr>
                                <tr><td>"Resumir tickets de clientes"</td><td>Summarization (resumen)</td></tr>
                                <tr><td>"Responder preguntas usando nuestros documentos"</td><td>Retrieval-Augmented Generation (RAG)</td></tr>
                                <tr><td>"Etiquetar tickets de soporte por categoría"</td><td>Classification (clasificación)</td></tr>
                                <tr><td>"Extraer entidades de contratos"</td><td>Information / Entity Extraction</td></tr>
                                <tr><td>"Asistente multi-turno"</td><td>Conversational / Chat</td></tr>
                            </table>
                            <h5>Componentes de una Chain (chain = pipeline de pasos)</h5>
                            <ul>
                                <li><strong>Prompt template</strong> — instrucciones parametrizadas</li>
                                <li><strong>Retriever</strong> — trae contexto (ej. desde un índice de Vector Search)</li>
                                <li><strong>Nodo LLM / modelo</strong> — genera la respuesta</li>
                                <li><strong>Output parser</strong> — valida/estructura la respuesta final</li>
                                <li><strong>Tools</strong> — funciones que el modelo puede invocar (UC Functions, APIs)</li>
                            </ul>
                            ${styleBox('blue', 'Tip de Examen')}
                                Si la pregunta describe "entrada → búsqueda de contexto → generación → salida estructurada", está describiendo una <strong>chain</strong>, y debes elegir el componente que falta en esa secuencia.
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.3 De Objetivos de Negocio a Diseño de Inputs/Outputs",
                    content: `
                        ${langSection('en', `
                            <p>The exam gives a vague business goal ("reduce support ticket resolution time") and asks you to translate it into concrete <strong>pipeline inputs/outputs</strong>.</p>
                            <ul>
                                <li><strong>Input</strong> = what data enters the system (ticket text, customer metadata, attachments)</li>
                                <li><strong>Output</strong> = what the business actually needs (a category label, a drafted reply, a routing decision) — not just "an LLM response"</li>
                                <li>Always ask: what does the <em>downstream system</em> (a dashboard, a CRM field, an API) expect to receive?</li>
                            </ul>
                            ${styleBox('yellow', 'Exam Pattern')}
                                Correct answers explicitly name both the input format AND the output contract. Answers that only mention "call an LLM" without specifying I/O are usually distractors.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>El examen da un objetivo de negocio vago ("reducir el tiempo de resolución de tickets de soporte") y te pide traducirlo a <strong>inputs/outputs de pipeline</strong> concretos.</p>
                            <ul>
                                <li><strong>Input</strong> = qué datos entran al sistema (texto del ticket, metadata del cliente, adjuntos)</li>
                                <li><strong>Output</strong> = lo que el negocio realmente necesita (una etiqueta de categoría, una respuesta redactada, una decisión de enrutamiento) — no solo "una respuesta del LLM"</li>
                                <li>Siempre pregunta: ¿qué espera recibir el <em>sistema downstream</em> (un dashboard, un campo de CRM, una API)?</li>
                            </ul>
                            ${styleBox('yellow', 'Patrón de Examen')}
                                Las respuestas correctas nombran explícitamente tanto el formato de input COMO el contrato de output. Las respuestas que solo mencionan "llamar a un LLM" sin especificar I/O suelen ser distractores.
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.4 Multi-Stage Reasoning y Orden de Tools (Agentes)",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Agent Reasoning Pattern')}
                                An <strong>agent</strong> = an LLM that reasons step-by-step and decides WHICH tool to call and in WHAT order, instead of following a fixed chain.
                            </div>
                            <ul>
                                <li><strong>ReAct pattern</strong>: Reason → Act (call a tool) → Observe (result) → repeat until an answer is ready</li>
                                <li>Tools must be <strong>ordered logically</strong>: e.g. "look up the customer" BEFORE "check their order history" BEFORE "issue a refund"</li>
                                <li>Tools can gather knowledge (retrievers, search, UC Functions that query data) or take actions (send an email, create a ticket, write a row)</li>
                                <li>The exam tests: given a scenario, which tool sequence is logically valid vs which one is out of order or missing a step</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Patrón de Razonamiento de Agentes')}
                                Un <strong>agente</strong> = un LLM que razona paso a paso y decide QUÉ tool invocar y en QUÉ orden, en vez de seguir una chain fija.
                            </div>
                            <ul>
                                <li><strong>Patrón ReAct</strong>: Razonar → Actuar (invocar una tool) → Observar (resultado) → repetir hasta tener una respuesta</li>
                                <li>Las tools deben estar <strong>ordenadas lógicamente</strong>: ej. "buscar al cliente" ANTES de "revisar su historial de pedidos" ANTES de "emitir un reembolso"</li>
                                <li>Las tools pueden reunir conocimiento (retrievers, búsqueda, UC Functions que consultan datos) o tomar acciones (enviar un correo, crear un ticket, escribir una fila)</li>
                                <li>El examen evalúa: dado un escenario, qué secuencia de tools es lógicamente válida vs cuál está desordenada o le falta un paso</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "1.5 RAG vs Fine-Tuning vs Pre-Training vs Agent Bricks",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Approach</th><th>When to Use</th><th>Cost / Effort</th></tr>
                                <tr><td><strong>RAG</strong></td><td>Knowledge changes often; need citations/freshness; no need to change model behavior</td><td>Low — no training, just retrieval + prompt</td></tr>
                                <tr><td><strong>Fine-tuning</strong></td><td>Need to change tone/style/format consistently, or teach a narrow skill not in the base model</td><td>Medium-High — needs labeled data + training run</td></tr>
                                <tr><td><strong>Pre-training</strong></td><td>Building a foundation model from scratch on domain data (rare — huge cost)</td><td>Very High</td></tr>
                                <tr><td><strong>Agent Bricks</strong></td><td>Need a pre-built, production-ready agent (e.g. Information Extraction, Knowledge Assistant) fast, with built-in evaluation/governance</td><td>Low — configure, don't build from scratch</td></tr>
                            </table>
                            ${styleBox('blue', 'What is Agent Bricks?')}
                                Databricks' pre-built, no/low-code agent templates (e.g. Information Extraction, Knowledge Assistant, Multi-Agent Supervisor) that come pre-integrated with Unity Catalog governance, MLflow evaluation, and Mosaic AI Vector Search out of the box — you configure them instead of writing custom LangChain code.
                            </div>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Enfoque</th><th>Cuándo Usarlo</th><th>Costo / Esfuerzo</th></tr>
                                <tr><td><strong>RAG</strong></td><td>El conocimiento cambia seguido; se necesitan citas/frescura; no hace falta cambiar el comportamiento del modelo</td><td>Bajo — sin entrenamiento, solo retrieval + prompt</td></tr>
                                <tr><td><strong>Fine-tuning</strong></td><td>Se necesita cambiar tono/estilo/formato de forma consistente, o enseñar una habilidad específica que el modelo base no tiene</td><td>Medio-Alto — necesita datos etiquetados + un entrenamiento</td></tr>
                                <tr><td><strong>Pre-training</strong></td><td>Construir un modelo fundacional desde cero con datos de dominio (raro — costo enorme)</td><td>Muy Alto</td></tr>
                                <tr><td><strong>Agent Bricks</strong></td><td>Se necesita un agente pre-construido, listo para producción (ej. Information Extraction, Knowledge Assistant) rápido, con evaluación/gobernanza incorporadas</td><td>Bajo — se configura, no se construye desde cero</td></tr>
                            </table>
                            ${styleBox('blue', '¿Qué es Agent Bricks?')}
                                Plantillas de agentes pre-construidas y de bajo/no código de Databricks (ej. Information Extraction, Knowledge Assistant, Multi-Agent Supervisor) que vienen pre-integradas con gobernanza de Unity Catalog, evaluación de MLflow y Mosaic AI Vector Search — las configuras en vez de escribir código LangChain personalizado.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 2: DATA PREPARATION
        // =====================================================
        {
            title: 'D2. Data Preparation / D2. Preparación de Datos',
            items: [
                {
                    title: "2.1 Estrategias de Chunking",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Chunking Drives RAG Quality')}
                                Chunk size and strategy are the #1 lever for retrieval quality. Too small → loses context. Too large → dilutes relevance and wastes model context window.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Strategy</th><th>Best For</th></tr>
                                <tr><td><strong>Fixed-size (character/token)</strong></td><td>Simple, uniform text; fast baseline</td></tr>
                                <tr><td><strong>Recursive character splitting</strong></td><td>Respects paragraph/sentence boundaries first</td></tr>
                                <tr><td><strong>Document-structure-aware</strong> (by heading, section)</td><td>Structured docs: manuals, contracts, markdown</td></tr>
                                <tr><td><strong>Semantic chunking</strong> (by embedding similarity shifts)</td><td>Long-form prose where topic boundaries aren't marked structurally</td></tr>
                            </table>
                            <p>Advanced strategies also consider <strong>overlap</strong> (a few tokens repeated between chunks so context isn't cut mid-idea) and the <strong>embedding model's max input length</strong> as a hard constraint on chunk size.</p>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — El Chunking Determina la Calidad del RAG')}
                                El tamaño y la estrategia de chunk son la palanca #1 para la calidad del retrieval. Muy pequeño → pierde contexto. Muy grande → diluye relevancia y desperdicia la ventana de contexto del modelo.
                            </div>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Estrategia</th><th>Mejor Para</th></tr>
                                <tr><td><strong>Tamaño fijo (caracteres/tokens)</strong></td><td>Texto simple y uniforme; baseline rápido</td></tr>
                                <tr><td><strong>División recursiva por caracteres</strong></td><td>Respeta primero los límites de párrafo/oración</td></tr>
                                <tr><td><strong>Consciente de la estructura del documento</strong> (por encabezado, sección)</td><td>Documentos estructurados: manuales, contratos, markdown</td></tr>
                                <tr><td><strong>Chunking semántico</strong> (por cambios de similitud de embeddings)</td><td>Prosa extensa donde los límites de tema no están marcados estructuralmente</td></tr>
                            </table>
                            <p>Las estrategias avanzadas también consideran el <strong>overlap</strong> (unos tokens repetidos entre chunks para no cortar una idea a la mitad) y la <strong>longitud máxima de entrada del modelo de embeddings</strong> como restricción dura sobre el tamaño del chunk.</p>
                        `)}
                    `
                },
                {
                    title: "2.2 Filtrado de Contenido Extraño en Documentos Fuente",
                    content: `
                        ${langSection('en', `
                            <p>Content that <strong>degrades RAG quality</strong> and must be filtered before chunking/embedding:</p>
                            <ul>
                                <li>Headers, footers, page numbers repeated on every page</li>
                                <li>Navigation menus, boilerplate legal disclaimers, ads</li>
                                <li>Corrupted OCR artifacts (e.g. <code>Th1s |s 4 t3xt</code>) — fix with regex normalization or a lightweight LLM cleaning pass (<code>ai_query</code>)</li>
                                <li>Duplicate/near-duplicate paragraphs across documents</li>
                            </ul>
                            ${styleBox('yellow', 'Why It Matters')}
                                Noisy chunks get embedded and retrieved just like clean chunks — garbage in the vector index means garbage answers out, even if the LLM itself is excellent.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Contenido que <strong>degrada la calidad del RAG</strong> y debe filtrarse antes de chunking/embedding:</p>
                            <ul>
                                <li>Encabezados, pies de página, números de página repetidos en cada página</li>
                                <li>Menús de navegación, disclaimers legales genéricos, publicidad</li>
                                <li>Artefactos de OCR corruptos (ej. <code>Th1s |s 4 t3xt</code>) — se corrigen con normalización por regex o una pasada de limpieza con un LLM ligero (<code>ai_query</code>)</li>
                                <li>Párrafos duplicados o casi-duplicados entre documentos</li>
                            </ul>
                            ${styleBox('yellow', 'Por Qué Importa')}
                                Los chunks ruidosos se embeben y recuperan igual que los chunks limpios — basura en el índice vectorial significa respuestas basura, incluso si el LLM en sí es excelente.
                            </div>
                        `)}
                    `
                },
                {
                    title: "2.3 Extracción de Contenido: Elegir el Paquete Python Correcto",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Source Format</th><th>Typical Package</th></tr>
                                <tr><td>PDF</td><td><code>unstructured</code>, <code>pypdf</code>/<code>PyPDF2</code>, <code>pdfplumber</code></td></tr>
                                <tr><td>Word (.docx)</td><td><code>python-docx</code></td></tr>
                                <tr><td>HTML / web pages</td><td><code>BeautifulSoup</code></td></tr>
                                <tr><td>Mixed/complex enterprise formats</td><td><code>unstructured</code> (auto-detects and partitions many formats)</td></tr>
                            </table>
                            <p>The exam tests matching the <strong>source format</strong> stated in the scenario to the right package — pick the tool built for that file type, not a generic one.</p>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Formato de Origen</th><th>Paquete Típico</th></tr>
                                <tr><td>PDF</td><td><code>unstructured</code>, <code>pypdf</code>/<code>PyPDF2</code>, <code>pdfplumber</code></td></tr>
                                <tr><td>Word (.docx)</td><td><code>python-docx</code></td></tr>
                                <tr><td>HTML / páginas web</td><td><code>BeautifulSoup</code></td></tr>
                                <tr><td>Formatos empresariales mixtos/complejos</td><td><code>unstructured</code> (detecta y particiona muchos formatos automáticamente)</td></tr>
                            </table>
                            <p>El examen evalúa emparejar el <strong>formato de origen</strong> indicado en el escenario con el paquete correcto — elige la herramienta construida para ese tipo de archivo, no una genérica.</p>
                        `)}
                    `
                },
                {
                    title: "2.4 Escribir Texto Chunked en Delta Lake / Unity Catalog",
                    content: `
                        ${langSection('en', `
                            <p>Typical pipeline sequence tested on the exam:</p>
                            <ol>
                                <li>Parse raw source → extract text</li>
                                <li>Clean/filter extraneous content</li>
                                <li>Apply chunking strategy</li>
                                <li><strong>Write chunks to a Delta table in Unity Catalog</strong> (with columns like <code>chunk_id</code>, <code>chunk_text</code>, <code>source_doc</code>, <code>metadata</code>)</li>
                                <li>Generate embeddings for each chunk</li>
                                <li>Sync to a Vector Search index (Delta Sync Index — auto-updates when the Delta table changes)</li>
                            </ol>
                            ${styleBox('blue', 'Exam Tip')}
                                Storing chunks in a governed Delta/UC table (not a random file) is what enables lineage, governance, and automatic index sync — that's usually the "best practice" answer.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Secuencia típica de pipeline evaluada en el examen:</p>
                            <ol>
                                <li>Parsear la fuente cruda → extraer texto</li>
                                <li>Limpiar/filtrar contenido extraño</li>
                                <li>Aplicar la estrategia de chunking</li>
                                <li><strong>Escribir los chunks en una tabla Delta en Unity Catalog</strong> (con columnas como <code>chunk_id</code>, <code>chunk_text</code>, <code>source_doc</code>, <code>metadata</code>)</li>
                                <li>Generar embeddings para cada chunk</li>
                                <li>Sincronizar a un índice de Vector Search (Delta Sync Index — se actualiza automáticamente cuando cambia la tabla Delta)</li>
                            </ol>
                            ${styleBox('blue', 'Tip de Examen')}
                                Guardar los chunks en una tabla Delta/UC gobernada (no un archivo suelto) es lo que habilita linaje, gobernanza y sincronización automática del índice — esa suele ser la respuesta de "mejor práctica".
                            </div>
                        `)}
                    `
                },
                {
                    title: "2.5 Evaluación de Retrieval: Métricas y Re-ranking",
                    content: `
                        ${langSection('en', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Metric</th><th>Measures</th></tr>
                                <tr><td><strong>Recall@k</strong></td><td>Did the relevant chunk appear anywhere in the top-k results?</td></tr>
                                <tr><td><strong>Precision@k</strong></td><td>Of the top-k retrieved, how many are actually relevant?</td></tr>
                                <tr><td><strong>MRR</strong> (Mean Reciprocal Rank)</td><td>How high up the first relevant result ranks</td></tr>
                                <tr><td><strong>NDCG</strong></td><td>Ranking quality accounting for graded relevance and position</td></tr>
                            </table>
                            <h5>Re-ranking</h5>
                            <p>A two-stage retrieval pipeline: (1) a fast <strong>bi-encoder</strong> retrieves a broad candidate set via vector similarity, then (2) a <strong>cross-encoder re-ranker</strong> does deep query-passage attention to reorder the top candidates for higher precision. Re-ranking trades a bit of latency for materially better relevance in the final top-k passed to the LLM.</p>
                        `)}
                        ${langSection('es', `
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Métrica</th><th>Qué Mide</th></tr>
                                <tr><td><strong>Recall@k</strong></td><td>¿Apareció el chunk relevante en algún lugar del top-k?</td></tr>
                                <tr><td><strong>Precision@k</strong></td><td>De los top-k recuperados, ¿cuántos son realmente relevantes?</td></tr>
                                <tr><td><strong>MRR</strong> (Mean Reciprocal Rank)</td><td>Qué tan arriba queda el primer resultado relevante</td></tr>
                                <tr><td><strong>NDCG</strong></td><td>Calidad del ranking considerando relevancia graduada y posición</td></tr>
                            </table>
                            <h5>Re-ranking</h5>
                            <p>Un pipeline de retrieval de dos etapas: (1) un <strong>bi-encoder</strong> rápido recupera un conjunto amplio de candidatos por similitud vectorial, luego (2) un <strong>re-ranker cross-encoder</strong> hace atención profunda query-pasaje para reordenar los mejores candidatos y ganar precisión. El re-ranking cambia algo de latencia por una relevancia notablemente mejor en el top-k final que se pasa al LLM.</p>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 3: APPLICATION DEVELOPMENT
        // =====================================================
        {
            title: 'D3. Application Development / D3. Desarrollo de Aplicaciones',
            items: [
                {
                    title: "3.1 Frameworks de Orquestación (LangChain y similares)",
                    content: `
                        ${langSection('en', `
                            <p>Orchestration frameworks (LangChain, LlamaIndex, etc.) provide reusable abstractions so you don't hand-write every API call:</p>
                            <ul>
                                <li><strong>Prompt templates</strong> with variable injection</li>
                                <li><strong>Retrievers</strong> that wrap a Vector Search index behind a common interface</li>
                                <li><strong>Chains</strong> that compose steps declaratively</li>
                                <li><strong>Agents</strong> with tool-calling and memory</li>
                            </ul>
                            <p>On Databricks, these integrate with MLflow (for logging/tracing the chain as a model) and Unity Catalog (for governed tools and data access).</p>
                        `)}
                        ${langSection('es', `
                            <p>Los frameworks de orquestación (LangChain, LlamaIndex, etc.) dan abstracciones reutilizables para no escribir a mano cada llamada de API:</p>
                            <ul>
                                <li><strong>Prompt templates</strong> con inyección de variables</li>
                                <li><strong>Retrievers</strong> que envuelven un índice de Vector Search bajo una interfaz común</li>
                                <li><strong>Chains</strong> que componen pasos de forma declarativa</li>
                                <li><strong>Agentes</strong> con tool-calling y memoria</li>
                            </ul>
                            <p>En Databricks, se integran con MLflow (para loggear/tracear la chain como un modelo) y Unity Catalog (para tools y acceso a datos gobernados).</p>
                        `)}
                    `
                },
                {
                    title: "3.2 Evaluación Cualitativa: Calidad y Seguridad",
                    content: `
                        ${langSection('en', `
                            <p>Common qualitative issues to identify in LLM responses:</p>
                            <ul>
                                <li><strong>Hallucination</strong> — confidently stated but false/unsupported claims</li>
                                <li><strong>Toxicity / harmful content</strong></li>
                                <li><strong>Bias</strong> — skewed or unfair outputs across groups</li>
                                <li><strong>Irrelevance</strong> — technically fluent but doesn't answer the question</li>
                                <li><strong>Verbosity/format drift</strong> — ignoring the requested structure</li>
                            </ul>
                            <p>These are typically first caught via human review or an <strong>LLM-as-a-judge</strong> pass before shipping to production (see Domain 6).</p>
                        `)}
                        ${langSection('es', `
                            <p>Problemas cualitativos comunes a identificar en respuestas de LLM:</p>
                            <ul>
                                <li><strong>Alucinación</strong> — afirmaciones dichas con confianza pero falsas/sin sustento</li>
                                <li><strong>Toxicidad / contenido dañino</strong></li>
                                <li><strong>Sesgo (bias)</strong> — salidas desbalanceadas o injustas entre grupos</li>
                                <li><strong>Irrelevancia</strong> — técnicamente fluido pero no responde la pregunta</li>
                                <li><strong>Verbosidad/deriva de formato</strong> — ignora la estructura solicitada</li>
                            </ul>
                            <p>Estos suelen detectarse primero con revisión humana o una pasada de <strong>LLM-as-a-judge</strong> antes de pasar a producción (ver Dominio 6).</p>
                        `)}
                    `
                },
                {
                    title: "3.3 Aumentar el Prompt con Contexto (RAG en el Prompt)",
                    content: `
                        ${langSection('en', `
                            <p><strong>Prompt augmentation</strong> = inserting retrieved context into the prompt before generation, based on key fields, terms, and detected intent from the user's input.</p>
                            <ul>
                                <li>Extract the user's intent/entities first (what are they actually asking?)</li>
                                <li>Retrieve the most relevant chunks for that intent</li>
                                <li>Inject them into the prompt template in a clearly delimited context section</li>
                                <li>Instruct the model to answer <strong>only</strong> using the provided context (reduces hallucination)</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p><strong>Aumento de prompt</strong> = insertar contexto recuperado en el prompt antes de la generación, en base a campos clave, términos e intención detectada en el input del usuario.</p>
                            <ul>
                                <li>Primero extraer la intención/entidades del usuario (¿qué está pidiendo realmente?)</li>
                                <li>Recuperar los chunks más relevantes para esa intención</li>
                                <li>Inyectarlos en el prompt template en una sección de contexto claramente delimitada</li>
                                <li>Instruir al modelo a responder <strong>solo</strong> usando el contexto provisto (reduce alucinaciones)</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "3.4 Guardrails de LLM y Selección del Mejor Modelo",
                    content: `
                        ${langSection('en', `
                            <h5>LLM Guardrails</h5>
                            <p>Prevent negative outcomes with layered controls: input validation (block prompt injection/jailbreaks), content moderation on outputs (toxicity/PII filters), and a strict <strong>system message</strong> establishing persona, constraints, and format contracts across the whole interaction.</p>
                            <h5>Selecting the Best LLM</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Attribute</th><th>Consider</th></tr>
                                <tr><td>Task complexity</td><td>Simple classification → small/cheap model; complex reasoning → larger model</td></tr>
                                <tr><td>Latency requirement</td><td>Real-time chat needs a fast model even if slightly less capable</td></tr>
                                <tr><td>Cost</td><td>Token pricing × expected volume</td></tr>
                                <tr><td>Context window</td><td>Must fit the retrieved context + conversation history</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Guardrails de LLM</h5>
                            <p>Prevenir resultados negativos con controles en capas: validación de entrada (bloquear prompt injection/jailbreaks), moderación de contenido en las salidas (filtros de toxicidad/PII), y un <strong>system message</strong> estricto que establece persona, restricciones y contratos de formato en toda la interacción.</p>
                            <h5>Seleccionar el Mejor LLM</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Atributo</th><th>Considerar</th></tr>
                                <tr><td>Complejidad de la tarea</td><td>Clasificación simple → modelo pequeño/barato; razonamiento complejo → modelo más grande</td></tr>
                                <tr><td>Requisito de latencia</td><td>Chat en tiempo real necesita un modelo rápido aunque sea algo menos capaz</td></tr>
                                <tr><td>Costo</td><td>Precio por token × volumen esperado</td></tr>
                                <tr><td>Ventana de contexto</td><td>Debe caber el contexto recuperado + historial de la conversación</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "3.5 Selección de Embedding Model y de Modelos vía Model Hub",
                    content: `
                        ${langSection('en', `
                            <h5>Embedding Model Context Length</h5>
                            <p>Choose an embedding model whose max input length comfortably fits your chosen chunk size — if chunks exceed the embedding model's limit, they get silently truncated and lose meaning. Balance: larger context length vs cost/latency of embedding at scale.</p>
                            <h5>Model Hub / Marketplace Selection</h5>
                            <p>When picking a model from a hub (e.g. Databricks Marketplace, Hugging Face), read the <strong>model card</strong>: license terms, training data provenance, benchmark scores relevant to your task, parameter count, and known limitations — don't pick by name recognition alone.</p>
                        `)}
                        ${langSection('es', `
                            <h5>Longitud de Contexto del Embedding Model</h5>
                            <p>Elige un modelo de embeddings cuya longitud máxima de entrada cubra cómodamente el tamaño de chunk elegido — si los chunks superan el límite del modelo de embeddings, se truncan silenciosamente y pierden significado. Balance: mayor longitud de contexto vs costo/latencia de embeber a escala.</p>
                            <h5>Selección de Modelo vía Model Hub / Marketplace</h5>
                            <p>Al elegir un modelo desde un hub (ej. Databricks Marketplace, Hugging Face), lee el <strong>model card</strong>: términos de licencia, procedencia de los datos de entrenamiento, puntajes de benchmark relevantes para tu tarea, cantidad de parámetros y limitaciones conocidas — no elijas solo por reconocimiento de nombre.</p>
                        `)}
                    `
                },
                {
                    title: "3.6 MLflow, Agent Framework y el Ciclo de Vida GenAI",
                    content: `
                        ${langSection('en', `
                            <ul>
                                <li><strong>MLflow Experiments</strong> — compare candidate models/prompts using metrics generated per run to pick the best one objectively (not by gut feeling)</li>
                                <li><strong>Databricks Agent Framework</strong> — packages agents as standard MLflow <strong>PyFunc</strong> models (via <code>mlflow.models.set_model()</code> or <code>mlflow.pyfunc.log_model()</code>), so they can be versioned in Unity Catalog and deployed to Model Serving like any other model</li>
                            </ul>
                            ${styleBox('blue', 'Evaluation vs Monitoring')}
                                <strong>Evaluation</strong> happens pre-production, offline, against curated test sets — "is this good enough to ship?" <strong>Monitoring</strong> happens post-production, on live traffic — "is it still performing well now?" The exam frequently tests telling these two phases apart.
                            </div>
                        `)}
                        ${langSection('es', `
                            <ul>
                                <li><strong>MLflow Experiments</strong> — compara modelos/prompts candidatos usando métricas generadas por corrida para elegir el mejor objetivamente (no por intuición)</li>
                                <li><strong>Databricks Agent Framework</strong> — empaqueta agentes como modelos <strong>PyFunc</strong> estándar de MLflow (vía <code>mlflow.models.set_model()</code> o <code>mlflow.pyfunc.log_model()</code>), para poder versionarlos en Unity Catalog y desplegarlos en Model Serving como cualquier otro modelo</li>
                            </ul>
                            ${styleBox('blue', 'Evaluación vs Monitoreo')}
                                La <strong>evaluación</strong> ocurre pre-producción, offline, contra conjuntos de prueba curados — "¿esto está listo para lanzar?" El <strong>monitoreo</strong> ocurre post-producción, sobre tráfico en vivo — "¿sigue funcionando bien ahora?" El examen evalúa seguido distinguir estas dos fases.
                            </div>
                        `)}
                    `
                },
                {
                    title: "3.7 Sistemas Multi-Agente y Genie Spaces",
                    content: `
                        ${langSection('en', `
                            <p><strong>Databricks AI/BI Genie</strong> is a conversational data analytics space over Unity Catalog tables. A multi-agent system can have a specialized agent query a <strong>Genie Space via the Genie REST API (or conversational API)</strong> to get trusted, business-semantics-backed SQL answers and charts — instead of the agent writing raw SQL itself.</p>
                            ${styleBox('yellow', 'Why It Matters')}
                                This lets a supervisor/orchestrator agent delegate "ask the data" questions to Genie, which already has governed, curated semantics over the Lakehouse tables — safer and more accurate than freeform text-to-SQL.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p><strong>Databricks AI/BI Genie</strong> es un espacio de analítica de datos conversacional sobre tablas de Unity Catalog. Un sistema multi-agente puede tener un agente especializado que consulte un <strong>Genie Space vía la Genie REST API (o API conversacional)</strong> para obtener respuestas SQL y gráficos confiables, respaldados por semántica de negocio — en vez de que el agente escriba SQL crudo por su cuenta.</p>
                            ${styleBox('yellow', 'Por Qué Importa')}
                                Esto permite que un agente supervisor/orquestador delegue las preguntas de "consultar los datos" a Genie, que ya tiene semántica gobernada y curada sobre las tablas del Lakehouse — más seguro y preciso que un text-to-SQL libre.
                            </div>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 4: ASSEMBLING AND DEPLOYING APPLICATIONS
        // =====================================================
        {
            title: 'D4. Assembling & Deploying Applications / D4. Ensamblaje y Despliegue de Aplicaciones',
            items: [
                {
                    title: "4.1 Codificar una Chain como Modelo PyFunc",
                    content: `
                        ${langSection('en', `
                            <p>A custom chain is coded as an <strong>MLflow PyFunc model</strong> with explicit <strong>pre-processing</strong> (parse input, retrieve context) and <strong>post-processing</strong> (format/validate output) around the core model call. This makes the whole chain — not just the LLM call — a single deployable, versioned artifact.</p>
                            ${styleBox('blue', 'Exam Tip')}
                                "Code a simple chain according to requirements" questions usually test whether you correctly place retrieval BEFORE generation and formatting/validation AFTER generation, inside a single <code>predict()</code> method.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Una chain personalizada se codifica como un modelo <strong>PyFunc de MLflow</strong> con <strong>pre-procesamiento</strong> explícito (parsear input, recuperar contexto) y <strong>post-procesamiento</strong> (formatear/validar output) alrededor de la llamada al modelo central. Esto convierte a toda la chain — no solo la llamada al LLM — en un único artefacto desplegable y versionado.</p>
                            ${styleBox('blue', 'Tip de Examen')}
                                Las preguntas de "codificar una chain simple según los requisitos" suelen evaluar si colocas correctamente el retrieval ANTES de la generación y el formateo/validación DESPUÉS de la generación, dentro de un único método <code>predict()</code>.
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.2 Control de Acceso en Model Serving Endpoints",
                    content: `
                        ${langSection('en', `
                            <p>Model Serving endpoints must control access to the resources they touch:</p>
                            <ul>
                                <li>Use <strong>service principals</strong> (not personal tokens) for endpoint-to-resource authentication</li>
                                <li>Store secrets (API keys, credentials) in <strong>Databricks Secrets</strong>, never hardcoded</li>
                                <li>Grant the endpoint's identity only the <strong>minimum Unity Catalog permissions</strong> needed (least privilege) on tables, models, and vector indexes it calls</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p>Los endpoints de Model Serving deben controlar el acceso a los recursos que tocan:</p>
                            <ul>
                                <li>Usar <strong>service principals</strong> (no tokens personales) para la autenticación endpoint-a-recurso</li>
                                <li>Guardar secretos (API keys, credenciales) en <strong>Databricks Secrets</strong>, nunca hardcodeados</li>
                                <li>Otorgar a la identidad del endpoint solo los <strong>permisos mínimos de Unity Catalog</strong> necesarios (mínimo privilegio) sobre las tablas, modelos e índices vectoriales que invoca</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "4.3 Elementos Básicos de una Aplicación RAG",
                    content: `
                        ${langSection('en', `
                            <p>To assemble a RAG application in MLflow, you need all of:</p>
                            <ul>
                                <li><strong>Model flavor</strong> (e.g. <code>langchain</code>, <code>pyfunc</code>)</li>
                                <li><strong>Embedding model</strong> reference</li>
                                <li><strong>Retriever</strong> configuration (points to the Vector Search index)</li>
                                <li><strong>Dependencies</strong> (pinned package versions for reproducible serving)</li>
                                <li><strong>Input examples</strong> (sample requests for validation/docs)</li>
                                <li><strong>Model signature</strong> (formal input/output schema)</li>
                            </ul>
                            ${styleBox('yellow', 'Exam Tip')}
                                Missing the <strong>signature</strong> or <strong>input example</strong> is a classic "what's missing from this deployment" distractor.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Para ensamblar una aplicación RAG en MLflow, necesitas todo esto:</p>
                            <ul>
                                <li><strong>Model flavor</strong> (ej. <code>langchain</code>, <code>pyfunc</code>)</li>
                                <li>Referencia al <strong>embedding model</strong></li>
                                <li>Configuración del <strong>retriever</strong> (apunta al índice de Vector Search)</li>
                                <li><strong>Dependencies</strong> (versiones fijas de paquetes para serving reproducible)</li>
                                <li><strong>Input examples</strong> (requests de muestra para validación/documentación)</li>
                                <li><strong>Model signature</strong> (esquema formal de input/output)</li>
                            </ul>
                            ${styleBox('yellow', 'Tip de Examen')}
                                Que falte la <strong>signature</strong> o el <strong>input example</strong> es un distractor clásico de "qué le falta a este despliegue".
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.4 Registrar el Modelo en Unity Catalog con MLflow",
                    content: `
                        ${langSection('en', `
                            <p>After logging a model with MLflow, it is <strong>registered to Unity Catalog</strong> (three-level namespace <code>catalog.schema.model_name</code>) to get: version history, lineage, governed access control, and the ability to promote across environments (dev → staging → prod) using aliases instead of hardcoded version numbers.</p>
                        `)}
                        ${langSection('es', `
                            <p>Después de loggear un modelo con MLflow, se <strong>registra en Unity Catalog</strong> (namespace de tres niveles <code>catalog.schema.nombre_modelo</code>) para obtener: historial de versiones, linaje, control de acceso gobernado, y la capacidad de promoverlo entre ambientes (dev → staging → prod) usando alias en vez de números de versión hardcodeados.</p>
                        `)}
                    `
                },
                {
                    title: "4.5 Mosaic AI Vector Search: Conceptos, Índices y Configuración",
                    content: `
                        ${langSection('en', `
                            <h5>Key Concepts</h5>
                            <ul>
                                <li>Stores embedding vectors and enables low-latency <strong>similarity search</strong> (approximate nearest neighbor)</li>
                                <li><strong>Delta Sync Index</strong> — auto-syncs from a Delta table (recommended, governed, low-maintenance)</li>
                                <li><strong>Direct Access Index</strong> — you manage embeddings/updates yourself via API (more control, more ops overhead)</li>
                            </ul>
                            <h5>Configuring an Index — What to Weigh</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Factor</th><th>Impact</th></tr>
                                <tr><td>Number of embeddings</td><td>Larger indexes need more compute/storage sizing</td></tr>
                                <tr><td>Update frequency</td><td>Frequent updates → prefer Delta Sync (continuous) over manual Direct Access</td></tr>
                                <tr><td>Latency requirement</td><td>Real-time apps need low query latency tiers</td></tr>
                                <tr><td>Cost</td><td>Trade-off against index size and refresh cadence</td></tr>
                            </table>
                        `)}
                        ${langSection('es', `
                            <h5>Conceptos Clave</h5>
                            <ul>
                                <li>Almacena vectores de embeddings y habilita <strong>búsqueda por similitud</strong> de baja latencia (approximate nearest neighbor)</li>
                                <li><strong>Delta Sync Index</strong> — se sincroniza automáticamente desde una tabla Delta (recomendado, gobernado, bajo mantenimiento)</li>
                                <li><strong>Direct Access Index</strong> — tú administras embeddings/actualizaciones vía API (más control, más carga operativa)</li>
                            </ul>
                            <h5>Configurar un Índice — Qué Considerar</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Factor</th><th>Impacto</th></tr>
                                <tr><td>Cantidad de embeddings</td><td>Índices más grandes necesitan más cómputo/almacenamiento</td></tr>
                                <tr><td>Frecuencia de actualización</td><td>Actualizaciones frecuentes → preferir Delta Sync (continuo) sobre Direct Access manual</td></tr>
                                <tr><td>Requisito de latencia</td><td>Apps en tiempo real necesitan niveles de latencia bajos en las consultas</td></tr>
                                <tr><td>Costo</td><td>Trade-off contra el tamaño del índice y la cadencia de refresco</td></tr>
                            </table>
                        `)}
                    `
                },
                {
                    title: "4.6 Foundation Model APIs y Batch Inference con ai_query()",
                    content: `
                        ${langSection('en', `
                            <h5>Foundation Model APIs</h5>
                            <p>Serve an LLM application without hosting your own model: <strong>pay-per-token</strong> endpoints for popular open models, or <strong>provisioned throughput</strong> for guaranteed capacity — both accessed the same way as a custom Model Serving endpoint.</p>
                            <h5>Batch Inference — <code>ai_query()</code></h5>
                            <p>SQL function to call an LLM directly over rows of a Delta table (e.g. classify/summarize every row) — ideal for <strong>batch</strong> workloads where you don't need a live serving endpoint, just a scheduled job over stored data.</p>
                        `)}
                        ${langSection('es', `
                            <h5>Foundation Model APIs</h5>
                            <p>Sirve una aplicación LLM sin hospedar tu propio modelo: endpoints de <strong>pago por token</strong> para modelos abiertos populares, o <strong>provisioned throughput</strong> para capacidad garantizada — ambos se acceden igual que un endpoint de Model Serving personalizado.</p>
                            <h5>Batch Inference — <code>ai_query()</code></h5>
                            <p>Función SQL para invocar un LLM directamente sobre filas de una tabla Delta (ej. clasificar/resumir cada fila) — ideal para cargas <strong>batch</strong> donde no se necesita un endpoint de serving en vivo, solo un job programado sobre datos almacenados.</p>
                        `)}
                    `
                },
                {
                    title: "4.7 Memoria Persistente, CI/CD y Control de Versiones de Prompts",
                    content: `
                        ${langSection('en', `
                            <h5>Persistent Datastore for Agent Memory</h5>
                            <p>Configure a store (Delta table, key-value store) to retain intermediate memory or structured state across turns/sessions — needed for agents that must "remember" earlier steps in a multi-turn interaction.</p>
                            <h5>CI/CD Best Practices</h5>
                            <ul>
                                <li>Automate updating a Vector Search index when source data changes</li>
                                <li>Promote prompts and models across environments (dev → staging → prod) via versioned artifacts, not manual copy-paste</li>
                                <li>Test individual chain/agent components in isolation before integration</li>
                            </ul>
                            <h5>Prompt Version Control</h5>
                            <p>Treat prompts as versioned artifacts (e.g. MLflow Prompt Registry) with a lifecycle — draft, tested, production — so regressions can be traced and rolled back.</p>
                        `)}
                        ${langSection('es', `
                            <h5>Datastore Persistente para Memoria de Agente</h5>
                            <p>Configurar un almacén (tabla Delta, key-value store) para retener memoria intermedia o estado estructurado entre turnos/sesiones — necesario para agentes que deben "recordar" pasos anteriores en una interacción multi-turno.</p>
                            <h5>Mejores Prácticas de CI/CD</h5>
                            <ul>
                                <li>Automatizar la actualización de un índice de Vector Search cuando cambian los datos fuente</li>
                                <li>Promover prompts y modelos entre ambientes (dev → staging → prod) vía artefactos versionados, no copiar-pegar manual</li>
                                <li>Probar componentes individuales de la chain/agente de forma aislada antes de integrarlos</li>
                            </ul>
                            <h5>Control de Versiones de Prompts</h5>
                            <p>Tratar los prompts como artefactos versionados (ej. MLflow Prompt Registry) con un ciclo de vida — borrador, probado, producción — para poder rastrear y revertir regresiones.</p>
                        `)}
                    `
                },
                {
                    title: "4.8 Servidores MCP e Interfaces de Usuario",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Model Context Protocol (MCP)')}
                                MCP is an <strong>open standard protocol</strong> that lets AI models/agents discover, connect, and interact securely with external data sources, tools, and enterprise servers through standardized interfaces — avoiding brittle, one-off custom integrations for every tool.
                            </div>
                            <ul>
                                <li><strong>Managed MCP servers</strong> — hosted/operated by Databricks or a vendor</li>
                                <li><strong>External MCP servers</strong> — third-party servers you connect to</li>
                                <li><strong>Custom MCP servers</strong> — built in-house to expose your own tools/data</li>
                            </ul>
                            <h5>User-Facing Interfaces</h5>
                            <p>Match the interface to the usage scenario: embedded <strong>Databricks Apps</strong> for internal dashboards, <strong>Slack/Teams</strong> bots for conversational workflows already living where users work.</p>
                            <p>Match the interface to the use case: embedded <strong>Databricks Apps</strong> for internal dashboards, <strong>Slack/Teams</strong> bots for conversational workflows where users already work.</p>
                        `)}
                        ${langSection('es', `
                            <p>Emparejar la interfaz con el escenario de uso: <strong>Databricks Apps</strong> embebidas para dashboards internos, bots de <strong>Slack/Teams</strong> para flujos conversacionales donde ya trabajan los usuarios.</p>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 5: GOVERNANCE
        // =====================================================
        {
            title: 'D5. Governance',
            items: [
                {
                    title: "5.1 Enmascaramiento (Masking) como Guardrail",
                    content: `
                        ${langSection('en', `
                            <p><strong>Masking</strong> techniques redact or obfuscate sensitive fields (PII, financial data) before they reach the LLM or before responses are returned — used to meet performance/compliance objectives without blocking the whole pipeline.</p>
                            <ul>
                                <li>Column-level masking in Unity Catalog for structured data feeding the app</li>
                                <li>Regex/NER-based redaction of PII in unstructured text before embedding or prompting</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <p>Las técnicas de <strong>enmascaramiento (masking)</strong> redactan u ofuscan campos sensibles (PII, datos financieros) antes de que lleguen al LLM o antes de devolver las respuestas — se usan para cumplir objetivos de rendimiento/cumplimiento sin bloquear todo el pipeline.</p>
                            <ul>
                                <li>Masking a nivel de columna en Unity Catalog para datos estructurados que alimentan la app</li>
                                <li>Redacción de PII basada en regex/NER en texto no estructurado antes de embeber o promptear</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "5.2 Guardrails Contra Inputs Maliciosos",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Prompt Injection & Jailbreaks')}
                                The exam tests recognizing and mitigating malicious inputs designed to override system instructions.
                            </div>
                            <ul>
                                <li><strong>Prompt injection</strong> — user input tries to override the system prompt ("ignore previous instructions...")</li>
                                <li><strong>Jailbreaking</strong> — crafted inputs trying to bypass safety constraints</li>
                                <li>Mitigations: input/output content filters (Databricks AI Guardrails), strict system message boundaries, instruction hierarchy enforcement, and monitoring flagged interactions</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Prompt Injection y Jailbreaks')}
                                El examen evalúa reconocer y mitigar inputs maliciosos diseñados para anular las instrucciones del sistema.
                            </div>
                            <ul>
                                <li><strong>Prompt injection</strong> — el input del usuario intenta anular el system prompt ("ignora las instrucciones anteriores...")</li>
                                <li><strong>Jailbreaking</strong> — inputs diseñados para evadir las restricciones de seguridad</li>
                                <li>Mitigaciones: filtros de contenido en input/output (Databricks AI Guardrails), límites estrictos en el system message, jerarquía de instrucciones reforzada, y monitoreo de interacciones marcadas</li>
                            </ul>
                        `)}
                    `
                },
                {
                    title: "5.3 Requisitos Legales / de Licenciamiento de Fuentes de Datos",
                    content: `
                        ${langSection('en', `
                            <p>Before using a data source to build/train/retrieve for a GenAI application, verify its <strong>license terms</strong> (commercial use allowed? redistribution allowed?) to avoid legal risk — this applies to both training data and RAG source documents (e.g. copyrighted or restricted-license content).</p>
                        `)}
                        ${langSection('es', `
                            <p>Antes de usar una fuente de datos para construir/entrenar/recuperar en una aplicación GenAI, verifica sus <strong>términos de licencia</strong> (¿se permite uso comercial? ¿redistribución?) para evitar riesgo legal — aplica tanto a datos de entrenamiento como a documentos fuente de RAG (ej. contenido con copyright o licencia restringida).</p>
                        `)}
                    `
                },
                {
                    title: "5.4 Mitigación de Texto Problemático en Fuentes de Datos",
                    content: `
                        ${langSection('en', `
                            <p>When a source document feeding a GenAI application contains problematic text (biased, offensive, or legally risky content), the recommended path is not to silently keep it — options include: excluding the document, redacting the problematic passages, or replacing it with a vetted alternative source that covers the same knowledge.</p>
                        `)}
                        ${langSection('es', `
                            <p>Cuando un documento fuente que alimenta una aplicación GenAI contiene texto problemático (sesgado, ofensivo o de riesgo legal), el camino recomendado no es dejarlo pasar en silencio — las opciones incluyen: excluir el documento, redactar los pasajes problemáticos, o reemplazarlo por una fuente alternativa validada que cubra el mismo conocimiento.</p>
                        `)}
                    `
                }
            ]
        },
        // =====================================================
        // DOMAIN 6: EVALUATION AND MONITORING
        // =====================================================
        {
            title: 'D6. Evaluation & Monitoring',
            items: [
                {
                    title: "6.1 Métricas Tradicionales, sus Límites, y LLM-as-a-Judge",
                    content: `
                        ${langSection('en', `
                            <h5>Traditional Metrics — Know the Limits</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Metric</th><th>Limitation</th></tr>
                                <tr><td>BLEU / ROUGE</td><td>Measure surface n-gram overlap, not meaning — penalize valid paraphrases</td></tr>
                                <tr><td>Perplexity</td><td>Measures fluency, not factual correctness or helpfulness</td></tr>
                                <tr><td>Exact match</td><td>Too strict for open-ended generation</td></tr>
                            </table>
                            <h5>LLM-as-a-Judge</h5>
                            <p>Use a strong LLM with a scoring rubric to evaluate another model's outputs at scale (correctness, groundedness, tone) — captures semantic quality traditional metrics miss, though it needs its own validation (calibrate against human labels).</p>
                        `)}
                        ${langSection('es', `
                            <h5>Métricas Tradicionales — Conocer sus Límites</h5>
                            <table class="table table-bordered">
                                <tr class="table-header"><th>Métrica</th><th>Limitación</th></tr>
                                <tr><td>BLEU / ROUGE</td><td>Miden solapamiento superficial de n-gramas, no significado — penalizan paráfrasis válidas</td></tr>
                                <tr><td>Perplexity</td><td>Mide fluidez, no corrección factual ni utilidad</td></tr>
                                <tr><td>Coincidencia exacta</td><td>Demasiado estricta para generación abierta</td></tr>
                            </table>
                            <h5>LLM-as-a-Judge</h5>
                            <p>Usar un LLM potente con una rúbrica de puntuación para evaluar las salidas de otro modelo a escala (corrección, groundedness, tono) — captura calidad semántica que las métricas tradicionales no ven, aunque necesita su propia validación (calibrar contra etiquetas humanas).</p>
                        `)}
                    `
                },
                {
                    title: "6.2 Tracing para Depurar Respuestas y Rendimiento",
                    content: `
                        ${langSection('en', `
                            <p><strong>MLflow Tracing</strong> captures every step of a chain/agent execution (retrieval calls, tool calls, LLM calls, latencies, intermediate inputs/outputs) as a structured trace — the primary tool to troubleshoot <em>why</em> a specific response was wrong or slow, instead of guessing from the final output alone.</p>
                        `)}
                        ${langSection('es', `
                            <p><strong>MLflow Tracing</strong> captura cada paso de la ejecución de una chain/agente (llamadas de retrieval, llamadas a tools, llamadas al LLM, latencias, inputs/outputs intermedios) como un trace estructurado — la herramienta principal para depurar <em>por qué</em> una respuesta específica salió mal o lenta, en vez de adivinar solo a partir del output final.</p>
                        `)}
                    `
                },
                {
                    title: "6.3 Métricas de Calidad, Costo y Latencia",
                    content: `
                        ${langSection('en', `
                            <p>Production GenAI apps must track all three together — optimizing only one degrades the others:</p>
                            <ul>
                                <li><strong>Quality</strong> — correctness, groundedness, relevance, safety</li>
                                <li><strong>Cost</strong> — tokens consumed per request × volume</li>
                                <li><strong>Latency</strong> — time-to-first-token and total response time</li>
                            </ul>
                            ${styleBox('yellow', 'Exam Pattern')}
                                A scenario describing "the app is accurate but too slow/expensive" is asking you to identify a latency/cost metric or mitigation (e.g. smaller model, caching, shorter context) — not a quality fix.
                            </div>
                        `)}
                        ${langSection('es', `
                            <p>Las apps GenAI en producción deben rastrear las tres juntas — optimizar solo una degrada las otras:</p>
                            <ul>
                                <li><strong>Calidad</strong> — corrección, groundedness, relevancia, seguridad</li>
                                <li><strong>Costo</strong> — tokens consumidos por request × volumen</li>
                                <li><strong>Latencia</strong> — tiempo al primer token y tiempo total de respuesta</li>
                            </ul>
                            ${styleBox('yellow', 'Patrón de Examen')}
                                Un escenario que describe "la app es precisa pero muy lenta/costosa" te está pidiendo identificar una métrica o mitigación de latencia/costo (ej. modelo más pequeño, caching, contexto más corto) — no un arreglo de calidad.
                            </div>
                        `)}
                    `
                },
                {
                    title: "6.4 Diseño de Logging de Métricas Multi-Stakeholder",
                    content: `
                        ${langSection('en', `
                            <p>Different stakeholders need different views of the same monitoring data: engineers need trace-level detail, product owners need aggregate quality/satisfaction trends, and compliance needs audit-ready logs of flagged interactions. Design the logging approach (what gets captured, at what granularity, retained where) to serve all three without duplicating pipelines.</p>
                        `)}
                        ${langSection('es', `
                            <p>Distintos stakeholders necesitan vistas distintas de los mismos datos de monitoreo: los ingenieros necesitan detalle a nivel de trace, los product owners necesitan tendencias agregadas de calidad/satisfacción, y compliance necesita logs auditables de interacciones marcadas. Diseña el enfoque de logging (qué se captura, con qué granularidad, dónde se retiene) para servir a los tres sin duplicar pipelines.</p>
                        `)}
                    `
                },
                {
                    title: "6.5 Inference Tables y Monitoreo de Endpoints Servidos",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', 'CRITICAL — Inference Tables')}
                                Inference Tables (Inference Logging) automatically stream a Model Serving endpoint's incoming requests, outputs, latencies, and metadata into a managed Delta table in Unity Catalog — the foundation for both quality monitoring and cost/latency analysis of live traffic.
                            </div>
                            <p>Set up and query them like any Delta table — schedule jobs (hourly/daily) that run quality checks (e.g. LLM-as-a-judge, groundedness/toxicity scoring) over newly landed rows for continuous production monitoring.</p>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', 'CRÍTICO — Inference Tables')}
                                Las Inference Tables (Inference Logging) transmiten automáticamente los requests entrantes, outputs, latencias y metadata de un endpoint de Model Serving hacia una tabla Delta administrada en Unity Catalog — la base tanto para el monitoreo de calidad como para el análisis de costo/latencia del tráfico en vivo.
                            </div>
                            <p>Se configuran y consultan como cualquier tabla Delta — programa jobs (por hora/día) que ejecuten chequeos de calidad (ej. LLM-as-a-judge, puntuación de groundedness/toxicidad) sobre las filas recién llegadas para monitoreo continuo en producción.</p>
                        `)}
                    `
                },
                {
                    title: "6.6 Ground Truth, Feedback de Stakeholders y Mosaic AI Agent Evaluation",
                    content: `
                        ${langSection('en', `
                            <ul>
                                <li><strong>Ground truth evaluation</strong> — establish a labeled dataset of correct answers and run it regularly against the deployed model/agent to catch regressions objectively</li>
                                <li><strong>Stakeholder feedback loop</strong> — capture human feedback (thumbs up/down, corrections) and feed it back through the agent framework to improve future performance</li>
                                <li><strong>Debugging via human feedback</strong> — when feedback flags a bad response, use tracing (6.2) to find the root cause step</li>
                                <li><strong>Mosaic AI Agent Evaluation</strong> — Databricks' managed framework to monitor deployed agents against quality metrics, judges, and ground truth continuously</li>
                            </ul>
                        `)}
                        ${langSection('es', `
                            <ul>
                                <li><strong>Evaluación con ground truth</strong> — establecer un dataset etiquetado de respuestas correctas y correrlo regularmente contra el modelo/agente desplegado para detectar regresiones objetivamente</li>
                                <li><strong>Loop de feedback de stakeholders</strong> — capturar feedback humano (pulgar arriba/abajo, correcciones) y reinyectarlo a través del agent framework para mejorar el rendimiento futuro</li>
                                <li><strong>Depuración vía feedback humano</strong> — cuando el feedback marca una mala respuesta, usar tracing (6.2) para encontrar el paso raíz del problema</li>
                                <li><strong>Mosaic AI Agent Evaluation</strong> — el framework administrado de Databricks para monitorear agentes desplegados contra métricas de calidad, judges y ground truth de forma continua</li>
                            </ul>
                        `)}
                    `
                }
            ]
        }
    ];

    window.studyData['databricks-genai-engineer'] = genaiDomainSections;
})();
