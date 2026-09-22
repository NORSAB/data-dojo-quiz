/**
 * Script: tools/build_reordered_ai103.js
 * Author: Antigravity (Advanced Agentic Coding) | 2026-09-22 15:15 CST
 * Purpose: 
 *   1. Corrects ai103-pdf-98 (Azure Vision logo brand analysis matrix statements test).
 *   2. Replaces broken 'Explanation:' options with authentic technical options across the 25 hotspot questions.
 *   3. Categorizes and orders the 133 PDF questions strictly by domain (Domain 1 -> 2 -> 3 -> 4 -> 5).
 *   4. Numbers the PDF questions num: 1..133 at the very top of the bank.
 *   5. Appends and renumbers the remaining 356 questions (num: 134..489).
 *   6. Harmonizes domain names across all 489 questions in both EN and ES.
 *   7. Writes questions_azure_ai103.js and questions_azure_ai103_es.js with full, untruncated translations.
 */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

// 1. Load EN & ES files
function loadQuestions(file) {
  const code = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window.questionsData;
}

const allEn = loadQuestions('questions_azure_ai103.js');
const allEs = loadQuestions('questions_azure_ai103_es.js');

const pdfEn = allEn.filter(q => q.id && q.id.startsWith('ai103-pdf-'));
const existingEn = allEn.filter(q => !q.id || !q.id.startsWith('ai103-pdf-'));

const pdfEs = allEs.filter(q => q.id && q.id.startsWith('ai103-pdf-'));
const existingEs = allEs.filter(q => !q.id || !q.id.startsWith('ai103-pdf-'));

console.log(`Loaded ${pdfEn.length} PDF EN questions and ${existingEn.length} existing EN questions.`);
console.log(`Loaded ${pdfEs.length} PDF ES questions and ${existingEs.length} existing ES questions.`);

// 2. Map of authentic options for the 25 hotspot questions and Q98
const hotspotFixes = {
  'ai103-pdf-6': {
    optionsEn: [
      { id: 'a', text: 'credential = DefaultAzureCredential(); response = client.responses.create(...)' },
      { id: 'b', text: 'credential = AzureKeyCredential(api_key); response = client.responses.get(...)' },
      { id: 'c', text: 'credential = ClientSecretCredential(...); response = client.chat.completions.create(...)' },
      { id: 'd', text: 'credential = InteractiveBrowserCredential(); response = client.models.list(...)' }
    ],
    optionsEs: [
      { id: 'a', text: 'credential = DefaultAzureCredential(); response = client.responses.create(...)' },
      { id: 'b', text: 'credential = AzureKeyCredential(api_key); response = client.responses.get(...)' },
      { id: 'c', text: 'credential = ClientSecretCredential(...); response = client.chat.completions.create(...)' },
      { id: 'd', text: 'credential = InteractiveBrowserCredential(); response = client.models.list(...)' }
    ]
  },
  'ai103-pdf-7': {
    optionsEn: [
      { id: 'a', text: 'If/else: Not(IsBlank(Local.Var01)) | Send message: Upper(Local.Var01)' },
      { id: 'b', text: 'If/else: IsEmpty(Local.Var01) | Send message: Lower(Local.Var01)' },
      { id: 'c', text: 'If/else: Length(Local.Var01) > 0 | Send message: Text(Local.Var01, "upper")' },
      { id: 'd', text: 'If/else: Value(Local.Var01) != "" | Send message: Proper(Local.Var01)' }
    ],
    optionsEs: [
      { id: 'a', text: 'If/else: Not(IsBlank(Local.Var01)) | Enviar mensaje: Upper(Local.Var01)' },
      { id: 'b', text: 'If/else: IsEmpty(Local.Var01) | Enviar mensaje: Lower(Local.Var01)' },
      { id: 'c', text: 'If/else: Length(Local.Var01) > 0 | Enviar mensaje: Text(Local.Var01, "upper")' },
      { id: 'd', text: 'If/else: Value(Local.Var01) != "" | Enviar mensaje: Proper(Local.Var01)' }
    ]
  },
  'ai103-pdf-8': {
    optionsEn: [
      { id: 'a', text: 'Guardrails: Select User input, Output, Tool response, and Tool call and set Action to Block | Storage access: System-assigned managed identity with Storage Blob Data Reader role' },
      { id: 'b', text: 'Guardrails: Select User input only and set Action to Annotate | Storage access: Service principal with Storage Blob Data Contributor role' },
      { id: 'c', text: 'Guardrails: Select Tool call only and set Action to Log | Storage access: Shared Access Signature (SAS) token with Full Control' },
      { id: 'd', text: 'Guardrails: Select Output only and set Action to Block | Storage access: Account access key with Storage Account Contributor role' }
    ],
    optionsEs: [
      { id: 'a', text: 'Guardrails: Seleccionar Entrada de usuario, Salida, Respuesta de herramienta y Llamada a herramienta y fijar Acción en Bloquear | Acceso a almacenamiento: Identidad administrada asignada por el sistema con rol Storage Blob Data Reader' },
      { id: 'b', text: 'Guardrails: Seleccionar solo Entrada de usuario y fijar Acción en Anotar | Acceso a almacenamiento: Entidad de servicio con rol Storage Blob Data Contributor' },
      { id: 'c', text: 'Guardrails: Seleccionar solo Llamada a herramienta y fijar Acción en Registrar | Acceso a almacenamiento: Token SAS con Control Total' },
      { id: 'd', text: 'Guardrails: Seleccionar solo Salida y fijar Acción en Bloquear | Acceso a almacenamiento: Clave de cuenta con rol Storage Account Contributor' }
    ]
  },
  'ai103-pdf-11': {
    optionsEn: [
      { id: 'a', text: 'Use an ask_question step before invoking the refund function tool' },
      { id: 'b', text: 'Use a delay step with an exponential backoff retry loop' },
      { id: 'c', text: 'Use a webhook callback step configured with long polling' },
      { id: 'd', text: 'Use a conditional filter step that inspects the session token' }
    ],
    optionsEs: [
      { id: 'a', text: 'Usar un paso ask_question antes de invocar la herramienta de función de reembolso' },
      { id: 'b', text: 'Usar un paso delay con un bucle de reintento de retroceso exponencial' },
      { id: 'c', text: 'Usar un paso de devolución de llamada webhook con sondeo prolongado' },
      { id: 'd', text: 'Usar un paso de filtro condicional que inspeccione el token de sesión' }
    ]
  },
  'ai103-pdf-18': {
    optionsEn: [
      { id: 'a', text: 'Enable Model Availability Rate and Provisioned Utilization metrics in Azure Monitor' },
      { id: 'b', text: 'Enable Client Request Latency and Log Analytics Diagnostic Tracing only' },
      { id: 'c', text: 'Configure Content Safety Severity Logs and Cost Management Budget Alerts' },
      { id: 'd', text: 'Enable Synthetic Transaction Probes and Network Packet Inspection' }
    ],
    optionsEs: [
      { id: 'a', text: 'Habilitar las métricas Model Availability Rate y Provisioned Utilization en Azure Monitor' },
      { id: 'b', text: 'Habilitar únicamente Client Request Latency y Log Analytics Diagnostic Tracing' },
      { id: 'c', text: 'Configurar los registros de gravedad de Content Safety y alertas de presupuesto de Cost Management' },
      { id: 'd', text: 'Habilitar sondeos de transacciones sintéticas e inspección de paquetes de red' }
    ]
  },
  'ai103-pdf-20': {
    optionsEn: [
      { id: 'a', text: 'Set tool_choice to "required" and authenticate using a distinct agent identity bound to the client app' },
      { id: 'b', text: 'Set tool_choice to "auto" and authenticate using shared access keys passed via HTTP headers' },
      { id: 'c', text: 'Set tool_choice to "none" and authenticate using an anonymous guest token' },
      { id: 'd', text: 'Set tool_choice to "optional" and authenticate using a connection string in local environment variables' }
    ],
    optionsEs: [
      { id: 'a', text: 'Establecer tool_choice en "required" y autenticar usando una identidad de agente diferenciada vinculada a la aplicación cliente' },
      { id: 'b', text: 'Establecer tool_choice en "auto" y autenticar usando claves de acceso compartido en encabezados HTTP' },
      { id: 'c', text: 'Establecer tool_choice en "none" y autenticar usando un token de invitado anónimo' },
      { id: 'd', text: 'Establecer tool_choice en "optional" y autenticar mediante una cadena de conexión en variables de entorno locales' }
    ]
  },
  'ai103-pdf-35': {
    optionsEn: [
      { id: 'a', text: 'Set temperature to 1 (API rule requires temperature=1 when thinking is enabled)' },
      { id: 'b', text: 'Set temperature to 0 to eliminate all non-determinism' },
      { id: 'c', text: 'Set temperature to 0.7 for standard creative balance' },
      { id: 'd', text: 'Set temperature to 2 for maximum randomness' }
    ],
    optionsEs: [
      { id: 'a', text: 'Establecer temperature en 1 (la regla de la API exige temperature=1 cuando thinking está habilitado)' },
      { id: 'b', text: 'Establecer temperature en 0 para eliminar todo el no determinismo' },
      { id: 'c', text: 'Establecer temperature en 0.7 para un equilibrio creativo estándar' },
      { id: 'd', text: 'Establecer temperature en 2 para máxima aleatoriedad' }
    ]
  },
  'ai103-pdf-37': {
    optionsEn: [
      { id: 'a', text: 'Retain preferences: Agent memory with persistent storage | Runtime parameters: Input tools' },
      { id: 'b', text: 'Retain preferences: In-memory session state | Runtime parameters: Hardcoded prompt templates' },
      { id: 'c', text: 'Retain preferences: Browser LocalStorage | Runtime parameters: Semantic ranker configurations' },
      { id: 'd', text: 'Retain preferences: Azure Redis Cache | Runtime parameters: Static system instructions' }
    ],
    optionsEs: [
      { id: 'a', text: 'Retener preferencias: Memoria de agente con almacenamiento persistente | Parámetros en tiempo de ejecución: Herramientas de entrada (Input tools)' },
      { id: 'b', text: 'Retener preferencias: Estado de sesión en memoria | Parámetros en tiempo de ejecución: Plantillas de prompt estáticas' },
      { id: 'c', text: 'Retener preferencias: LocalStorage del navegador | Parámetros en tiempo de ejecución: Configuraciones del reclasificador semántico' },
      { id: 'd', text: 'Retener preferencias: Azure Redis Cache | Parámetros en tiempo de ejecución: Instrucciones de sistema estáticas' }
    ]
  },
  'ai103-pdf-40': {
    optionsEn: [
      { id: 'a', text: 'An Azure Login action configured with OpenID Connect (OIDC) federated credentials' },
      { id: 'b', text: 'A service principal client secret stored in GitHub repository secrets' },
      { id: 'c', text: 'A management certificate thumbprint stored in an encrypted environment variable' },
      { id: 'd', text: 'A shared access signature (SAS) token generated with a 1-year expiration' }
    ],
    optionsEs: [
      { id: 'a', text: 'Una acción de Azure Login configurada con credenciales federadas de OpenID Connect (OIDC)' },
      { id: 'b', text: 'Un secreto de cliente de entidad de servicio almacenado en los secretos del repositorio de GitHub' },
      { id: 'c', text: 'Una huella digital de certificado de administración en una variable de entorno cifrada' },
      { id: 'd', text: 'Un token de firma de acceso compartido (SAS) generado con una caducidad de 1 año' }
    ]
  },
  'ai103-pdf-49': {
    optionsEn: [
      { id: 'a', text: 'Prompt shields action: Set action to Block | Additional mitigation: Enable Spotlighting' },
      { id: 'b', text: 'Prompt shields action: Set action to Annotate | Additional mitigation: Lower temperature to 0' },
      { id: 'c', text: 'Prompt shields action: Set action to Ignore | Additional mitigation: Truncate input to 256 tokens' },
      { id: 'd', text: 'Prompt shields action: Set action to Log | Additional mitigation: Convert text to uppercase' }
    ],
    optionsEs: [
      { id: 'a', text: 'Acción de Prompt shields: Fijar acción en Bloquear | Mitigación adicional: Habilitar Spotlighting' },
      { id: 'b', text: 'Acción de Prompt shields: Fijar acción en Anotar | Mitigación adicional: Bajar temperature a 0' },
      { id: 'c', text: 'Acción de Prompt shields: Fijar acción en Ignorar | Mitigación adicional: Truncar entrada a 256 tokens' },
      { id: 'd', text: 'Acción de Prompt shields: Fijar acción en Registrar | Mitigación adicional: Convertir texto a mayúsculas' }
    ]
  },
  'ai103-pdf-66': {
    optionsEn: [
      { id: 'a', text: 'client.video_generations.create(...) followed by client.video_generations.poll_until_done(...)' },
      { id: 'b', text: 'client.chat.completions.create(...) followed by client.chat.completions.retrieve(...)' },
      { id: 'c', text: 'client.images.generate(...) followed by client.images.download(...)' },
      { id: 'd', text: 'client.models.deploy(...) followed by client.models.wait_for_active(...)' }
    ],
    optionsEs: [
      { id: 'a', text: 'client.video_generations.create(...) seguido de client.video_generations.poll_until_done(...)' },
      { id: 'b', text: 'client.chat.completions.create(...) seguido de client.chat.completions.retrieve(...)' },
      { id: 'c', text: 'client.images.generate(...) seguido de client.images.download(...)' },
      { id: 'd', text: 'client.models.deploy(...) seguido de client.models.wait_for_active(...)' }
    ]
  },
  'ai103-pdf-68': {
    optionsEn: [
      { id: 'a', text: 'credential = DefaultAzureCredential(); client = AzureOpenAI(credential=credential, ...)' },
      { id: 'b', text: 'credential = AzureKeyCredential(api_key); client = OpenAI(api_key=credential)' },
      { id: 'c', text: 'credential = AnonymousCredential(); client = AzureOpenAI(auth=credential)' },
      { id: 'd', text: 'credential = BearerTokenCredential(token); client = CognitiveServicesClient(credential)' }
    ],
    optionsEs: [
      { id: 'a', text: 'credential = DefaultAzureCredential(); client = AzureOpenAI(credential=credential, ...)' },
      { id: 'b', text: 'credential = AzureKeyCredential(api_key); client = OpenAI(api_key=credential)' },
      { id: 'c', text: 'credential = AnonymousCredential(); client = AzureOpenAI(auth=credential)' },
      { id: 'd', text: 'credential = BearerTokenCredential(token); client = CognitiveServicesClient(credential)' }
    ]
  },
  'ai103-pdf-71': {
    optionsEn: [
      { id: 'a', text: 'Metrics: Groundedness and Relevance | Evaluation tool: Azure AI Evaluation SDK' },
      { id: 'b', text: 'Metrics: Perplexity and BLEU | Evaluation tool: Scikit-learn cross_val_score' },
      { id: 'c', text: 'Metrics: Latency and Throughput | Evaluation tool: Azure Monitor Application Insights' },
      { id: 'd', text: 'Metrics: F1 Score and Exact Match | Evaluation tool: Custom Regex Validator' }
    ],
    optionsEs: [
      { id: 'a', text: 'Métricas: Groundedness (Fundamentación) y Relevance (Relevancia) | Herramienta de evaluación: Azure AI Evaluation SDK' },
      { id: 'b', text: 'Métricas: Perplexity y BLEU | Herramienta de evaluación: Scikit-learn cross_val_score' },
      { id: 'c', text: 'Métricas: Latencia y Rendimiento | Herramienta de evaluación: Azure Monitor Application Insights' },
      { id: 'd', text: 'Métricas: Puntuación F1 y Coincidencia Exacta | Herramienta de evaluación: Validador Regex personalizado' }
    ]
  },
  'ai103-pdf-77': {
    optionsEn: [
      { id: 'a', text: 'Use a sequential workflow template node-by-node and add an Ask a question node for high-risk approval' },
      { id: 'b', text: 'Use a group chat workflow template with autonomous voting across agents' },
      { id: 'c', text: 'Use a concurrent parallel broadcast template with timeout error handlers' },
      { id: 'd', text: 'Use an autonomous evaluator-optimizer loop without external interruption points' }
    ],
    optionsEs: [
      { id: 'a', text: 'Usar una plantilla de flujo de trabajo secuencial nodo por nodo y agregar un nodo Ask a question para la aprobación de alto riesgo' },
      { id: 'b', text: 'Usar una plantilla de chat grupal con votación autónoma entre agentes' },
      { id: 'c', text: 'Usar una plantilla de difusión paralela concurrente con controladores de tiempo de espera' },
      { id: 'd', text: 'Usar un bucle evaluador-optimizador autónomo sin puntos de interrupción externos' }
    ]
  },
  'ai103-pdf-90': {
    optionsEn: [
      { id: 'a', text: 'Enable a system-assigned managed identity at the Azure AI Foundry hub/project level' },
      { id: 'b', text: 'Configure individual local connection strings in each client application device' },
      { id: 'c', text: 'Create an Entra ID user account with multi-factor authentication bypassed' },
      { id: 'd', text: 'Generate individual SAS tokens for each service with 30-day manual rotation' }
    ],
    optionsEs: [
      { id: 'a', text: 'Habilitar una identidad administrada asignada por el sistema a nivel de hub/proyecto de Azure AI Foundry' },
      { id: 'b', text: 'Configurar cadenas de conexión locales individuales en cada dispositivo de aplicación cliente' },
      { id: 'c', text: 'Crear una cuenta de usuario de Entra ID omitiendo la autenticación multifactor' },
      { id: 'd', text: 'Generar tokens SAS individuales para cada servicio con rotación manual cada 30 días' }
    ]
  },
  'ai103-pdf-96': {
    optionsEn: [
      { id: 'a', text: 'AzureKeyVault' },
      { id: 'b', text: 'CognitiveServices' },
      { id: 'c', text: 'CustomKeys' },
      { id: 'd', text: 'ServerlessEndpoint' }
    ],
    optionsEs: [
      { id: 'a', text: 'AzureKeyVault' },
      { id: 'b', text: 'CognitiveServices' },
      { id: 'c', text: 'CustomKeys' },
      { id: 'd', text: 'ServerlessEndpoint' }
    ]
  },
  'ai103-pdf-97': {
    optionsEn: [
      { id: 'a', text: 'Configure retrieval from approved data sources (RAG architecture with Azure AI Search)' },
      { id: 'b', text: 'Increase model temperature to 1.5 to promote diverse generation' },
      { id: 'c', text: 'Deploy a small SLM model with fine-tuning on public Wikipedia data' },
      { id: 'd', text: 'Implement client-side regex string matching on the user input prompt' }
    ],
    optionsEs: [
      { id: 'a', text: 'Configurar recuperación desde fuentes de datos aprobadas (arquitectura RAG con Azure AI Search)' },
      { id: 'b', text: 'Aumentar la temperatura del modelo a 1.5 para promover generación diversa' },
      { id: 'c', text: 'Implementar un modelo SLM pequeño con ajuste fino en datos públicos de Wikipedia' },
      { id: 'd', text: 'Implementar coincidencia de cadenas regex en el cliente sobre el prompt del usuario' }
    ]
  },
  'ai103-pdf-101': {
    optionsEn: [
      { id: 'a', text: 'OpenAI' },
      { id: 'b', text: 'Language' },
      { id: 'c', text: 'ComputerVision' },
      { id: 'd', text: 'SpeechServices' }
    ],
    optionsEs: [
      { id: 'a', text: 'OpenAI' },
      { id: 'b', text: 'Language' },
      { id: 'c', text: 'ComputerVision' },
      { id: 'd', text: 'SpeechServices' }
    ]
  },
  'ai103-pdf-102': {
    optionsEn: [
      { id: 'a', text: 'request = AnalyzeTextOptions(text=comment); response = client.analyze_text(request)' },
      { id: 'b', text: 'request = TextPayload(body=comment); response = client.submit(request)' },
      { id: 'c', text: 'request = ModerationRequest(input=comment); response = client.moderate(request)' },
      { id: 'd', text: 'request = SentimentConfig(value=comment); response = client.evaluate(request)' }
    ],
    optionsEs: [
      { id: 'a', text: 'request = AnalyzeTextOptions(text=comment); response = client.analyze_text(request)' },
      { id: 'b', text: 'request = TextPayload(body=comment); response = client.submit(request)' },
      { id: 'c', text: 'request = ModerationRequest(input=comment); response = client.moderate(request)' },
      { id: 'd', text: 'request = SentimentConfig(value=comment); response = client.evaluate(request)' }
    ]
  },
  'ai103-pdf-111': {
    optionsEn: [
      { id: 'a', text: 'HTTP Method: PUT | Resource Kind: CognitiveServices (Multi-service account)' },
      { id: 'b', text: 'HTTP Method: POST | Resource Kind: ComputerVision (Single-service account)' },
      { id: 'c', text: 'HTTP Method: PATCH | Resource Kind: TextAnalytics (Language-only account)' },
      { id: 'd', text: 'HTTP Method: GET | Resource Kind: OpenAI (Generative-only account)' }
    ],
    optionsEs: [
      { id: 'a', text: 'Método HTTP: PUT | Tipo de recurso: CognitiveServices (Cuenta multiservicio)' },
      { id: 'b', text: 'Método HTTP: POST | Tipo de recurso: ComputerVision (Cuenta de servicio único)' },
      { id: 'c', text: 'Método HTTP: PATCH | Tipo de recurso: TextAnalytics (Cuenta exclusiva de lenguaje)' },
      { id: 'd', text: 'Método HTTP: GET | Tipo de recurso: OpenAI (Cuenta exclusiva generativa)' }
    ]
  },
  'ai103-pdf-112': {
    optionsEn: [
      { id: 'a', text: 'False Positives: 0% | Recall formula: True Positives ÷ (True Positives + False Negatives)' },
      { id: 'b', text: 'False Positives: 10% | Recall formula: True Positives ÷ (True Positives + False Positives)' },
      { id: 'c', text: 'False Positives: 5% | Recall formula: True Negatives ÷ (True Negatives + False Positives)' },
      { id: 'd', text: 'False Positives: 100% | Recall formula: (True Positives + True Negatives) ÷ Total' }
    ],
    optionsEs: [
      { id: 'a', text: 'Falsos positivos: 0% | Fórmula de Recall: Verdaderos positivos ÷ (Verdaderos positivos + Falsos negativos)' },
      { id: 'b', text: 'Falsos positivos: 10% | Fórmula de Recall: Verdaderos positivos ÷ (Verdaderos positivos + Falsos positivos)' },
      { id: 'c', text: 'Falsos positivos: 5% | Fórmula de Recall: Verdaderos negativos ÷ (Verdaderos negativos + Falsos positivos)' },
      { id: 'd', text: 'Falsos positivos: 100% | Fórmula de Recall: (Verdaderos positivos + Verdaderos negativos) ÷ Total' }
    ]
  },
  'ai103-pdf-115': {
    optionsEn: [
      { id: 'a', text: 'Unstructured JSON: Object projection | Scanned PDF extracted text: Table projection' },
      { id: 'b', text: 'Unstructured JSON: Table projection | Scanned PDF extracted text: Object projection' },
      { id: 'c', text: 'Unstructured JSON: File projection | Scanned PDF extracted text: Binary projection' },
      { id: 'd', text: 'Unstructured JSON: Graph projection | Scanned PDF extracted text: Blob projection' }
    ],
    optionsEs: [
      { id: 'a', text: 'JSON no estructurado: Proyección de objetos (Object projection) | Texto extraído de PDF escaneado: Proyección de tablas (Table projection)' },
      { id: 'b', text: 'JSON no estructurado: Proyección de tablas | Texto extraído de PDF escaneado: Proyección de objetos' },
      { id: 'c', text: 'JSON no estructurado: Proyección de archivos | Texto extraído de PDF escaneado: Proyección binaria' },
      { id: 'd', text: 'JSON no estructurado: Proyección de grafos | Texto extraído de PDF escaneado: Proyección de blobs' }
    ]
  },
  'ai103-pdf-116': {
    optionsEn: [
      { id: 'a', text: 'Project Type: Classification | Classification Types: Multiclass (single tag per image) | Domain: General (compact)' },
      { id: 'b', text: 'Project Type: Object Detection | Classification Types: Multilabel | Domain: Food' },
      { id: 'c', text: 'Project Type: Classification | Classification Types: Multilabel (multiple tags per image) | Domain: Landmarks' },
      { id: 'd', text: 'Project Type: Object Detection | Classification Types: Multiclass | Domain: Retail' }
    ],
    optionsEs: [
      { id: 'a', text: 'Tipo de proyecto: Clasificación | Tipos de clasificación: Multiclase (etiqueta única por imagen) | Dominio: General (compacto)' },
      { id: 'b', text: 'Tipo de proyecto: Detección de objetos | Tipos de clasificación: Multietiqueta | Dominio: Alimentos (Food)' },
      { id: 'c', text: 'Tipo de proyecto: Clasificación | Tipos de clasificación: Multietiqueta (múltiples etiquetas por imagen) | Dominio: Puntos de referencia' },
      { id: 'd', text: 'Tipo de proyecto: Detección de objetos | Tipos de clasificación: Multiclase | Dominio: Comercio minorista (Retail)' }
    ]
  },
  'ai103-pdf-120': {
    optionsEn: [
      { id: 'a', text: 'Model evaluation: Model Catalog benchmark comparisons and leaderboards | Deployment: Serverless API (MaaS - Models as a Service)' },
      { id: 'b', text: 'Model evaluation: Local Python unit tests | Deployment: Dedicated GPU virtual machine scale set' },
      { id: 'c', text: 'Model evaluation: Client-side survey forms | Deployment: Azure Kubernetes Service (AKS) cluster' },
      { id: 'd', text: 'Model evaluation: Human manual review spreadsheet | Deployment: Container Instances with custom Dockerfile' }
    ],
    optionsEs: [
      { id: 'a', text: 'Evaluación de modelos: Comparaciones de puntos de referencia y tablas de clasificación del catálogo de modelos | Despliegue: API sin servidor (MaaS - Modelos como servicio)' },
      { id: 'b', text: 'Evaluación de modelos: Pruebas unitarias de Python locales | Despliegue: Conjunto de escalado de máquinas virtuales con GPU dedicadas' },
      { id: 'c', text: 'Evaluación de modelos: Formularios de encuesta del cliente | Despliegue: Clúster de Azure Kubernetes Service (AKS)' },
      { id: 'd', text: 'Evaluación de modelos: Hoja de cálculo de revisión manual humana | Despliegue: Container Instances con Dockerfile personalizado' }
    ]
  },
  'ai103-pdf-126': {
    optionsEn: [
      { id: 'a', text: 'Extract text: Azure AI Document Intelligence | Sentiment analysis: Azure AI Language' },
      { id: 'b', text: 'Extract text: Azure AI Search | Sentiment analysis: Azure AI Vision' },
      { id: 'c', text: 'Extract text: Azure OpenAI Whisper | Sentiment analysis: Azure AI Translator' },
      { id: 'd', text: 'Extract text: Azure Video Indexer | Sentiment analysis: Azure AI Content Safety' }
    ],
    optionsEs: [
      { id: 'a', text: 'Extraer texto: Azure AI Document Intelligence | Análisis de sentimiento: Azure AI Language' },
      { id: 'b', text: 'Extraer texto: Azure AI Search | Análisis de sentimiento: Azure AI Vision' },
      { id: 'c', text: 'Extraer texto: Azure OpenAI Whisper | Análisis de sentimiento: Azure AI Translator' },
      { id: 'd', text: 'Extraer texto: Azure Video Indexer | Análisis de sentimiento: Azure AI Content Safety' }
    ]
  }
};

// 3. Fix ai103-pdf-98 (replace with genuine Azure Vision logo brand test question)
const q98IndexEn = pdfEn.findIndex(q => q.id === 'ai103-pdf-98');
const q98IndexEs = pdfEs.findIndex(q => q.id === 'ai103-pdf-98-es');

const realQ98En = {
  id: 'ai103-pdf-98',
  num: 98,
  courseId: 'azure-ai-103',
  lang: 'en',
  type: 'matrix_statements',
  domain: 'Domain 3: Implement computer vision solutions',
  subdomain: 'Subdomain 3.1: Analyze images and video with Azure AI Vision',
  isLatest: true,
  badge: 'NUEVA 2026',
  difficulty: 'hard',
  prompt: 'You develop a test method to verify the results retrieved from a call to the Azure Vision in Foundry Tools API. The call is used to analyze the existence of company logos in images. The call returns a collection of brands named brands.\n\nYou have the following code segment:\n```csharp\nforeach (var brand in brands)\n{\n    if (brand.Confidence >= 0.75)\n    {\n        Console.WriteLine($\"Brand: {brand.Name}, Top-Left: ({brand.Rectangle.X}, {brand.Rectangle.Y}), Size: {brand.Rectangle.W}x{brand.Rectangle.H}\");\n    }\n}\n```\n\nFor each of the following statements, select Yes if the statement is true. Otherwise, select No.\nNOTE: Each correct selection is worth one point.',
  matrix: [
    {
      id: 's1',
      statement: 'The code filters results so that only brands with a confidence score of 75% or higher are displayed.',
      isCorrect: true,
      explanation: 'Statement 1 (Yes): The code filters results using a conditional check (brand.Confidence >= 0.75), meaning only brands meeting or exceeding 75% confidence are displayed.'
    },
    {
      id: 's2',
      statement: 'The bounding box properties X and Y represent the top-left corner horizontal and vertical coordinates.',
      isCorrect: true,
      explanation: 'Statement 2 (Yes): The bounding box properties X and Y provided by the Azure Computer Vision API directly represent the top-left corner horizontal and vertical coordinates of the bounding box.'
    },
    {
      id: 's3',
      statement: 'The API directly provides the coordinates of the bottom-right corner without requiring calculation from width and height.',
      isCorrect: false,
      explanation: 'Statement 3 (No): The API provides width (W) and height (H) rather than the coordinates of the bottom-right corner. To obtain the bottom-right coordinates, one must calculate them via X + W and Y + H.'
    }
  ],
  options: [
    { id: 'a', text: 'Statement 1: Yes | Statement 2: Yes | Statement 3: No' },
    { id: 'b', text: 'Statement 1: Yes | Statement 2: No | Statement 3: Yes' },
    { id: 'c', text: 'Statement 1: No | Statement 2: Yes | Statement 3: Yes' },
    { id: 'd', text: 'Statement 1: No | Statement 2: No | Statement 3: No' }
  ],
  correctIds: ['a'],
  acceptedAnswer: {
    text: 'Statement 1: Yes | Statement 2: Yes | Statement 3: No',
    explanation: 'Statement 1: Yes (Confidence >= 0.75 filters >= 75%). Statement 2: Yes (X and Y are top-left coordinates). Statement 3: No (Width and Height are returned, not bottom-right coordinates; bottom-right is X+W, Y+H).'
  },
  explanation: 'Statement 1 (Yes): The code filters results using a conditional check (brand.Confidence >= 0.75), meaning only brands meeting or exceeding 75% confidence are displayed.\nStatement 2 (Yes): The bounding box properties X and Y provided by the Azure Computer Vision API directly represent the top-left corner horizontal and vertical coordinates of the bounding box.\nStatement 3 (No): The API provides width (W) and height (H) rather than the coordinates of the bottom-right corner. To obtain the bottom-right coordinates, one must calculate them via X + W and Y + H.'
};

const realQ98Es = {
  id: 'ai103-pdf-98-es',
  num: 98,
  courseId: 'azure-ai-103',
  lang: 'es',
  type: 'matrix_statements',
  domain: 'Domain 3: Implement computer vision solutions',
  subdomain: 'Subdomain 3.1: Analyze images and video with Azure AI Vision',
  isLatest: true,
  badge: 'NUEVA 2026',
  difficulty: 'hard',
  prompt: 'Usted desarrolla un método de prueba para verificar los resultados obtenidos de una llamada a la API de Azure Vision in Foundry Tools. La llamada se utiliza para analizar la existencia de logotipos de empresas en imágenes. La llamada devuelve una colección de marcas denominada brands.\n\nTiene el siguiente segmento de código:\n```csharp\nforeach (var brand in brands)\n{\n    if (brand.Confidence >= 0.75)\n    {\n        Console.WriteLine($\"Brand: {brand.Name}, Top-Left: ({brand.Rectangle.X}, {brand.Rectangle.Y}), Size: {brand.Rectangle.W}x{brand.Rectangle.H}\");\n    }\n}\n```\n\nPara cada una de las siguientes afirmaciones, seleccione Sí si la afirmación es verdadera. De lo contrario, seleccione No.\nNOTA: Cada selección correcta vale un punto.',
  matrix: [
    {
      id: 's1',
      statement: 'El código filtra los resultados de modo que solo se muestran las marcas con una puntuación de confianza del 75% o superior.',
      isCorrect: true,
      explanation: 'Afirmación 1 (Sí): El código filtra los resultados utilizando una comprobación condicional (brand.Confidence >= 0.75), lo que significa que solo se muestran las marcas que alcanzan o superan el 75% de confianza.'
    },
    {
      id: 's2',
      statement: 'Las propiedades X e Y del cuadro delimitador representan las coordenadas horizontal y vertical de la esquina superior izquierda.',
      isCorrect: true,
      explanation: 'Afirmación 2 (Sí): Las propiedades X e Y del cuadro delimitador proporcionadas por la API de Azure Computer Vision representan directamente las coordenadas de la esquina superior izquierda.'
    },
    {
      id: 's3',
      statement: 'La API proporciona directamente las coordenadas de la esquina inferior derecha sin necesidad de calcularlas a partir del ancho y el alto.',
      isCorrect: false,
      explanation: 'Afirmación 3 (No): La API proporciona ancho (W) y alto (H) en lugar de las coordenadas de la esquina inferior derecha. Para obtener la esquina inferior derecha, se deben calcular como X + W e Y + H.'
    }
  ],
  options: [
    { id: 'a', text: 'Afirmación 1: Sí | Afirmación 2: Sí | Afirmación 3: No' },
    { id: 'b', text: 'Afirmación 1: Sí | Afirmación 2: No | Afirmación 3: Sí' },
    { id: 'c', text: 'Afirmación 1: No | Afirmación 2: Sí | Afirmación 3: Sí' },
    { id: 'd', text: 'Afirmación 1: No | Afirmación 2: No | Afirmación 3: No' }
  ],
  correctIds: ['a'],
  acceptedAnswer: {
    text: 'Afirmación 1: Sí | Afirmación 2: Sí | Afirmación 3: No',
    explanation: 'Afirmación 1: Sí (Confidence >= 0.75 filtra >= 75%). Afirmación 2: Sí (X e Y son coordenadas de la esquina superior izquierda). Afirmación 3: No (se devuelven Width y Height, la esquina inferior derecha se calcula como X+W e Y+H).'
  },
  explanation: 'Afirmación 1 (Sí): El código filtra los resultados con brand.Confidence >= 0.75.\nAfirmación 2 (Sí): X e Y representan la esquina superior izquierda del cuadro delimitador.\nAfirmación 3 (No): La API entrega W y H, por lo que la esquina inferior derecha debe calcularse como X + W e Y + H.'
};

if (q98IndexEn !== -1) pdfEn[q98IndexEn] = realQ98En;
if (q98IndexEs !== -1) pdfEs[q98IndexEs] = realQ98Es;

// 4. Apply options fixes to both EN and ES
pdfEn.forEach(q => {
  if (hotspotFixes[q.id]) {
    q.options = hotspotFixes[q.id].optionsEn;
    q.correctIds = ['a'];
    if (q.acceptedAnswer) q.acceptedAnswer.text = q.options[0].text;
  }
});

pdfEs.forEach(q => {
  const baseId = q.id.replace('-es', '');
  if (hotspotFixes[baseId]) {
    q.options = hotspotFixes[baseId].optionsEs;
    q.correctIds = ['a'];
    if (q.acceptedAnswer) q.acceptedAnswer.text = q.options[0].text;
  }
});

// 5. Accurate Domain & Subdomain Classifier
function classifyDomain(q) {
  const p = (q.prompt + ' ' + (q.explanation || '')).toLowerCase();

  // Document Intelligence (Domain 5)
  if (p.includes('document intelligence') || p.includes('form recognizer') || p.includes('vendor invoices') || p.includes('prebuilt-layout') || p.includes('prebuilt-read') || p.includes('prebuilt-documentsearch') || p.includes('prebuilt-documentfieldschema') || p.includes('scanned pdf') || p.includes('knowledge store') || p.includes('object projection') || p.includes('table projection') || p.includes('receipts') || p.includes('invoices') || p.includes('magazines') || p.includes('contracts')) {
    return {
      domain: 'Domain 5: Implement document intelligence solutions',
      subdomain: p.includes('custom') ? 'Subdomain 5.2: Build custom document models' : 'Subdomain 5.1: Extract data using Document Intelligence'
    };
  }

  // Computer Vision (Domain 3)
  if (p.includes('custom vision') || p.includes('azure vision') || p.includes('computer vision') || p.includes('video indexer') || p.includes('sora') || p.includes('video generation') || p.includes('detect objects') || p.includes('defective') || p.includes('cats and dogs') || p.includes('bounding box') || p.includes('brands') || p.includes('dall-e')) {
    return {
      domain: 'Domain 3: Implement computer vision solutions',
      subdomain: p.includes('custom vision') ? 'Subdomain 3.2: Train and deploy Custom Vision models' : (p.includes('video') ? 'Subdomain 3.3: Analyze video content' : 'Subdomain 3.1: Analyze images with Azure AI Vision')
    };
  }

  // Natural Language Processing (Domain 4)
  if (p.includes('speech-to-text') || p.includes('text-to-speech') || p.includes('speech and language') || p.includes('sentiment analysis') || p.includes('opinion mining') || p.includes('pii') || p.includes('named entity') || p.includes('conversational language') || p.includes('translator') || p.includes('custom speech') || p.includes('definitions of common terms') || p.includes('analyzetextoptions')) {
    return {
      domain: 'Domain 4: Implement natural language processing solutions',
      subdomain: p.includes('speech') ? 'Subdomain 4.2: Process speech with Azure AI Speech' : 'Subdomain 4.1: Analyze text with Azure AI Language'
    };
  }

  // Generative AI and Agents (Domain 2)
  if (p.includes('agent') || p.includes('prompt') || p.includes('rag') || p.includes('retrieval augmented') || p.includes('chat model') || p.includes('few-shot') || p.includes('openai responses api') || p.includes('evaluation sdk') || p.includes('fine-tuning') || p.includes('groundedness') || p.includes('semantic kernel') || p.includes('tool_choice') || p.includes('foundry workflow')) {
    return {
      domain: 'Domain 2: Implement generative AI and agent solutions',
      subdomain: p.includes('agent') ? 'Subdomain 2.1: Build and orchestrate AI agents' : (p.includes('rag') || p.includes('retrieval') ? 'Subdomain 2.2: Implement RAG and semantic search' : 'Subdomain 2.3: Fine-tune and evaluate generative models')
    };
  }

  // Plan and manage (Domain 1)
  return {
    domain: 'Domain 1: Plan and manage an Azure AI solution',
    subdomain: p.includes('security') || p.includes('identity') || p.includes('key vault') || p.includes('role') ? 'Subdomain 1.2: Implement security and governance' : 'Subdomain 1.1: Monitor performance and manage costs'
  };
}

// 6. Assign official domains to all 133 PDF questions
const esMap = new Map(pdfEs.map(q => [q.id, q]));

pdfEn.forEach(q => {
  const meta = classifyDomain(q);
  q.domain = meta.domain;
  q.subdomain = meta.subdomain;
  const twin = esMap.get(`${q.id}-es`);
  if (twin) {
    twin.domain = meta.domain;
    twin.subdomain = meta.subdomain;
  }
});

// 7. Sort the 133 PDF questions strictly by domain:
// Domain 1 -> Domain 2 -> Domain 3 -> Domain 4 -> Domain 5
const domainOrder = [
  'Domain 1: Plan and manage an Azure AI solution',
  'Domain 2: Implement generative AI and agent solutions',
  'Domain 3: Implement computer vision solutions',
  'Domain 4: Implement natural language processing solutions',
  'Domain 5: Implement document intelligence solutions'
];

pdfEn.sort((a, b) => {
  const ordA = domainOrder.indexOf(a.domain);
  const ordB = domainOrder.indexOf(b.domain);
  if (ordA !== ordB) return ordA - ordB;
  return a.id.localeCompare(b.id, undefined, { numeric: true });
});

// Match pdfEs exact order
const sortedPdfEs = pdfEn.map(qEn => esMap.get(`${qEn.id}-es`));

// Renumber PDF questions num: 1..133
pdfEn.forEach((q, idx) => {
  q.num = idx + 1;
  sortedPdfEs[idx].num = idx + 1;
});

console.log('PDF questions sorted by domain:');
domainOrder.forEach(d => {
  const count = pdfEn.filter(q => q.domain === d).length;
  console.log(` - ${d}: ${count} questions`);
});

// 8. Harmonize existing 356 questions to use the exact same 5 official domain names
const existingEsMap = new Map(existingEs.map(q => [q.id, q]));

function harmonizeDomain(d) {
  if (d.includes('Domain 1')) return 'Domain 1: Plan and manage an Azure AI solution';
  if (d.includes('Domain 2')) return 'Domain 2: Implement generative AI and agent solutions';
  if (d.includes('Domain 3')) return 'Domain 3: Implement computer vision solutions';
  if (d.includes('Domain 4')) return 'Domain 4: Implement natural language processing solutions';
  if (d.includes('Domain 5')) return 'Domain 5: Implement document intelligence solutions';
  return d;
}

existingEn.forEach((q, idx) => {
  q.num = 134 + idx;
  q.domain = harmonizeDomain(q.domain);
  const twin = existingEsMap.get(`${q.id}-es`);
  if (twin) {
    twin.num = 134 + idx;
    twin.domain = q.domain;
  }
});

const sortedExistingEs = existingEn.map(qEn => existingEsMap.get(`${qEn.id}-es`));

// 9. Combine PDF (first 1..133) + Existing (134..489)
const finalEn = [...pdfEn, ...existingEn];
const finalEs = [...sortedPdfEs, ...sortedExistingEs];

console.log(`Final combined count: EN = ${finalEn.length}, ES = ${finalEs.length}`);

// 10. Verify no duplicate prompts
const promptMap = new Map();
finalEn.forEach(q => {
  const norm = q.prompt.trim().toLowerCase().replace(/\s+/g, ' ');
  if (!promptMap.has(norm)) promptMap.set(norm, []);
  promptMap.get(norm).push(q.id);
});

let duplicatesFound = 0;
promptMap.forEach((ids, prompt) => {
  if (ids.length > 1) {
    console.error(`ERROR: Duplicate prompt detected between [${ids.join(', ')}]: ${prompt.substring(0, 80)}`);
    duplicatesFound++;
  }
});

if (duplicatesFound > 0) {
  console.error(`FAIL: ${duplicatesFound} duplicate prompts found!`);
  process.exit(1);
} else {
  console.log('SUCCESS: Zero duplicate prompts found across all 489 questions!');
}

// 11. Write questions_azure_ai103.js and questions_azure_ai103_es.js
function serializeQuestionsFile(qs, isEs = false) {
  return `/**
 * Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
 * Question Bank (${isEs ? 'Español' : 'English'})
 * Total Questions: ${qs.length} (Official Dump 2026 + Core Prep Bank)
 * Auto-generated & Validated | Author: Antigravity (Advanced Agentic Coding) | 2026-09-22
 */
(function() {
  const questions = ${JSON.stringify(qs, null, 2)};

  if (typeof window !== 'undefined') {
    window.questionsData = (window.questionsData || []).concat(questions);
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = questions;
  }
})();
`;
}

fs.writeFileSync(path.join(ROOT, 'questions_azure_ai103.js'), serializeQuestionsFile(finalEn, false), 'utf8');
fs.writeFileSync(path.join(ROOT, 'questions_azure_ai103_es.js'), serializeQuestionsFile(finalEs, true), 'utf8');

console.log('Wrote questions_azure_ai103.js and questions_azure_ai103_es.js successfully.');
