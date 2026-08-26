// ============================================================
// STUDY RESOURCES — Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
// Dedicated 100% Microsoft Azure AI Study Hub:
// - 356 Bilingual Exam Flashcards
// - 14 Official Azure AI Competencies / Terms
// - 14 Azure AI Architecture Decision Scenarios
// - 10 Official Azure AI SDK & REST API Code Examples (Line-by-line)
// - 5 Domain Mastery Achievements
// ============================================================
(function buildAzureAi103StudyResources() {
  const courseId = 'azure-ai-103';
  const allQuestions = (window.questionsData || []).filter(q => q.courseId === courseId);
  const englishQuestions = allQuestions.filter(q => q.lang === 'en' && !q.id.endsWith('-es'));
  const spanishByEnglishId = new Map(
    allQuestions
      .filter(q => q.lang === 'es' || q.id.endsWith('-es'))
      .map(q => [q.id.replace(/-es$/, ''), q])
  );

  const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const cleanLabel = value => String(value || '')
    .replace(/^(Domain|Dominio)\s+\d+\s*:\s*/i, '')
    .replace(/^(Subdomain|Subdominio)\s+[\d.]+\s*:\s*/i, '')
    .trim();

  const getDomainNumber = value => {
    const match = String(value || '').match(/(?:Domain|Dominio)\s+(\d+)/i);
    return match ? Number(match[1]) : 0;
  };

  const getAnswer = question => {
    const accepted = question.acceptedAnswer || {};
    const optionText = (question.options || [])
      .filter(option => (question.correctIds || []).includes(option.id))
      .map(option => option.text)
      .join(' / ');
    return {
      text: accepted.text || optionText || 'Answer not available',
      explanation: accepted.explanation || question.explanation || ''
    };
  };

  const languageBlock = (language, title, body) => `
    <section class="fc-language-block" data-lang="${language}">
      <span class="fc-language-label">${language === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</span>
      <strong class="fc-language-title">${escapeHtml(title)}</strong>
      <div>${escapeHtml(body).replace(/\n/g, '<br>')}</div>
    </section>`;

  const pairedQuestions = englishQuestions
    .map(en => ({ en, es: spanishByEnglishId.get(en.id) }))
    .filter(pair => pair.es);

  const pairsByDomain = new Map();
  pairedQuestions.forEach(pair => {
    const domainNumber = getDomainNumber(pair.en.domain);
    if (!pairsByDomain.has(domainNumber)) pairsByDomain.set(domainNumber, []);
    pairsByDomain.get(domainNumber).push(pair);
  });

  // 1. FLASHCARDS (356 pairs)
  const flashcards = pairedQuestions.map((pair, index) => {
    const answerEn = getAnswer(pair.en);
    const answerEs = getAnswer(pair.es);
    const domainNumber = getDomainNumber(pair.en.domain);
    return {
      id: `ai103-fc-${index + 1}`,
      domainNumber,
      category: `${cleanLabel(pair.en.domain)} / ${cleanLabel(pair.es.domain)}`,
      subcategory: `${cleanLabel(pair.en.subdomain)} / ${cleanLabel(pair.es.subdomain)}`,
      front:
        languageBlock('en', 'Exam Question / Scenario', pair.en.prompt) +
        languageBlock('es', 'Pregunta / Escenario del Examen', pair.es.prompt),
      back:
        languageBlock('en', 'Key Answer & Official Explanation', `${answerEn.text}\n\n${answerEn.explanation}`) +
        languageBlock('es', 'Respuesta Clave y Explicación Oficial', `${answerEs.text}\n\n${answerEs.explanation}`),
      sourceQuestionId: pair.en.id
    };
  });

  // 2. CONCEPTOS / TÉRMINOS CLAVE AZURE AI-103
  const domainIcons = [
    'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z',
    'M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z',
    'M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z',
    'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z'
  ];

  window.conceptosAzureAi103 = [...pairsByDomain.entries()]
    .sort(([a], [b]) => a - b)
    .map(([domainNumber, pairs]) => {
      const grouped = new Map();
      pairs.forEach(pair => {
        if (!grouped.has(pair.en.subdomain)) grouped.set(pair.en.subdomain, []);
        grouped.get(pair.en.subdomain).push(pair);
      });
      const firstPair = pairs[0];
      return {
        category: `${cleanLabel(firstPair.en.domain)} / ${cleanLabel(firstPair.es.domain)}`,
        icon: domainIcons[domainNumber - 1] || domainIcons[0],
        conceptos: [...grouped.values()].map(group => {
          const representative = group[0];
          const answerEn = getAnswer(representative.en);
          const answerEs = getAnswer(representative.es);
          const frequency = group.length;
          return {
            nombre: `${cleanLabel(representative.en.subdomain)} / ${cleanLabel(representative.es.subdomain)}`,
            tipo: 'Azure AI Competency / Competencia Azure AI',
            tema: `${representative.en.domain} / ${representative.es.domain}`,
            relevancia: frequency >= 20 ? 'alta' : (frequency >= 10 ? 'media' : 'baja'),
            contribucion:
              languageBlock('en', 'What you must master', answerEn.explanation) +
              languageBlock('es', 'Lo que debes dominar', answerEs.explanation),
            datoExamen:
              languageBlock('en', 'Official Best Practice', answerEn.text) +
              languageBlock('es', 'Mejor Práctica Oficial', answerEs.text)
          };
        })
      };
    });

  // 3. ESCENARIOS / PATRONES DE ARQUITECTURA AZURE AI-103
  window.azureAi103Patterns = [...pairsByDomain.entries()]
    .sort(([a], [b]) => a - b)
    .map(([domainNumber, pairs]) => {
      const firstBySubdomain = [];
      const seenSubdomains = new Set();
      pairs.forEach(pair => {
        if (!seenSubdomains.has(pair.en.subdomain)) {
          seenSubdomains.add(pair.en.subdomain);
          firstBySubdomain.push(pair);
        }
      });
      const firstPair = pairs[0];
      return {
        category: `Domain ${domainNumber} · ${cleanLabel(firstPair.en.domain)} / ${cleanLabel(firstPair.es.domain)}`,
        items: firstBySubdomain.map(({ en, es }) => {
          const answerEn = getAnswer(en);
          const answerEs = getAnswer(es);
          return {
            title: `${cleanLabel(en.subdomain)} / ${cleanLabel(es.subdomain)}`,
            scenario: languageBlock('en', 'Architecture Requirement', en.prompt) + languageBlock('es', 'Requerimiento de Arquitectura', es.prompt),
            recommendation:
              languageBlock('en', 'Recommended Solution', `${answerEn.text}\n\n${answerEn.explanation}`) +
              languageBlock('es', 'Solución Recomendada', `${answerEs.text}\n\n${answerEs.explanation}`)
          };
        })
      };
    });

  // 4. EJEMPLOS DE CÓDIGO SDK & APIS DE AZURE AI
  window.comandosAzureAi103 = [
    {
      category: "Azure OpenAI & Foundry SDK",
      icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
      comandos: [
        {
          nombre: "AzureOpenAI Client Initialization (Entra ID & Keyless Auth)",
          descripcion_en: "Initialize secure AzureOpenAI client using DefaultAzureCredential without hardcoded API keys.",
          descripcion_es: "Inicializa el cliente seguro AzureOpenAI usando DefaultAzureCredential sin claves API en el código.",
          ejemplos: [
            {
              titulo_en: "Keyless authentication with DefaultAzureCredential",
              titulo_es: "Autenticación sin claves con DefaultAzureCredential",
              sql: "from openai import AzureOpenAI\nfrom azure.identity import DefaultAzureCredential, get_bearer_token_provider\n\ntoken_provider = get_bearer_token_provider(\n    DefaultAzureCredential(),\n    'https://cognitiveservices.azure.com/.default'\n)\n\nclient = AzureOpenAI(\n    azure_endpoint='https://ai-hub-resource.openai.azure.com/',\n    azure_ad_token_provider=token_provider,\n    api_version='2024-06-01'\n)",
              lineas: [
                { code: "from openai import AzureOpenAI", en: "Import official Azure OpenAI SDK client", es: "Importa el cliente oficial del SDK de Azure OpenAI" },
                { code: "from azure.identity import DefaultAzureCredential...", en: "Import Entra ID identity token provider", es: "Importa el proveedor de tokens de identidad de Entra ID" },
                { code: "token_provider = get_bearer_token_provider(..., 'https://cognitiveservices.azure.com/.default')", en: "Create dynamic bearer token provider for Cognitive Services", es: "Crea el proveedor dinámico de tokens Bearer para Cognitive Services" },
                { code: "client = AzureOpenAI(", en: "Initialize client instance", es: "Inicializa la instancia del cliente" },
                { code: "    azure_endpoint='https://...openai.azure.com/',", en: "Your dedicated Azure resource endpoint", es: "Endpoint dedicado de tu recurso en Azure" },
                { code: "    azure_ad_token_provider=token_provider,", en: "Pass Microsoft Entra token provider instead of api_key", es: "Pasa el proveedor de tokens de Microsoft Entra en lugar de api_key" },
                { code: "    api_version='2024-06-01')", en: "Specify the targeted stable Azure OpenAI API version", es: "Especifica la versión estable de la API de Azure OpenAI" }
              ]
            }
          ]
        },
        {
          nombre: "Chat Completions with Structured Outputs & JSON Schema",
          descripcion_en: "Enforces strict JSON schema guarantees in model completions using response_format.",
          descripcion_es: "Garantiza salida estructurada estricta bajo un esquema JSON utilizando response_format.",
          ejemplos: [
            {
              titulo_en: "Structured output extraction with strict Pydantic/JSON schema",
              titulo_es: "Extracción estructurada con esquema JSON estricto",
              sql: "response = client.chat.completions.create(\n    model='gpt-4o',\n    messages=[\n        {'role': 'system', 'content': 'You extract order details.'},\n        {'role': 'user', 'content': 'Order 5 laptops at $1200 each for TechCorp.'}\n    ],\n    response_format={\n        'type': 'json_schema',\n        'json_schema': {\n            'name': 'OrderSchema',\n            'strict': True,\n            'schema': {\n                'type': 'object',\n                'properties': {\n                    'company': {'type': 'string'},\n                    'quantity': {'type': 'integer'},\n                    'unit_price': {'type': 'number'}\n                },\n                'required': ['company', 'quantity', 'unit_price'],\n                'additionalProperties': False\n            }\n        }\n    }\n)",
              lineas: [
                { code: "response = client.chat.completions.create(", en: "Call chat completions API endpoint", es: "Llama al endpoint de la API de chat completions" },
                { code: "    model='gpt-4o',", en: "Target deployment name in Azure OpenAI", es: "Nombre del despliegue destino en Azure OpenAI" },
                { code: "    messages=[...],", en: "Provide conversation system and user prompts", es: "Proporciona avisos de sistema y usuario" },
                { code: "    response_format={'type': 'json_schema', ...},", en: "Specify json_schema response format", es: "Especifica el formato de respuesta json_schema" },
                { code: "        'strict': True,", en: "Guarantees 100% adherence to defined schema", es: "Garantiza un 100% de adherencia al esquema definido" },
                { code: "        'additionalProperties': False", en: "Disallows any hallucinated undefined fields", es: "Deshabilita campos alucinados no definidos" }
              ]
            }
          ]
        }
      ]
    },
    {
      category: "Azure AI Agent Service & Tools",
      icon: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14.5h-2v-2h2zm0-4h-2V7h2z",
      comandos: [
        {
          nombre: "Create Agent with Code Interpreter & File Search",
          descripcion_en: "Create an autonomous agent connected to Code Interpreter and Azure AI Search tools.",
          descripcion_es: "Crea un agente autónomo conectado a las herramientas de Code Interpreter y Azure AI Search.",
          ejemplos: [
            {
              titulo_en: "Agent creation using Azure AI Projects SDK",
              titulo_es: "Creación de agente usando Azure AI Projects SDK",
              sql: "from azure.ai.projects import AIProjectClient\nfrom azure.identity import DefaultAzureCredential\n\nproject_client = AIProjectClient.from_connection_string(\n    conn_str='eastus.api.azureml.ms;subscription_id;rg_name;project_name',\n    credential=DefaultAzureCredential()\n)\n\nagent = project_client.agents.create_agent(\n    model='gpt-4o',\n    name='financial-analyst-agent',\n    instructions='Analyze uploaded financial CSVs and generate summary plots.',\n    tools=[{'type': 'code_interpreter'}]\n)",
              lineas: [
                { code: "from azure.ai.projects import AIProjectClient", en: "Import Azure AI Foundry projects client", es: "Importa el cliente de proyectos de Azure AI Foundry" },
                { code: "project_client = AIProjectClient.from_connection_string(...)", en: "Connect to Foundry project with managed credentials", es: "Conecta al proyecto de Foundry con credenciales administradas" },
                { code: "agent = project_client.agents.create_agent(", en: "Create persistent agent entity", es: "Crea la entidad persistente del agente" },
                { code: "    model='gpt-4o',", en: "Assign underlying foundation model deployment", es: "Asigna el despliegue del modelo fundacional subyacente" },
                { code: "    instructions='Analyze uploaded...',", en: "Define agent role and guardrail instructions", es: "Define el rol e instrucciones de seguridad del agente" },
                { code: "    tools=[{'type': 'code_interpreter'}])", en: "Equip agent with sandboxed Python code interpreter", es: "Equipa al agente con el intérprete de código Python en sandbox" }
              ]
            }
          ]
        }
      ]
    },
    {
      category: "Azure AI Search & Hybrid Grounding",
      icon: "M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z",
      comandos: [
        {
          nombre: "Hybrid Search with Semantic Reranker & Vectorized Query",
          descripcion_en: "Execute hybrid query combining dense vector similarity + BM25 keyword matching with Semantic Reranking.",
          descripcion_es: "Ejecuta una consulta híbrida combinando similitud vectorial densa + coincidencia por palabras clave BM25 con Semantic Reranking.",
          ejemplos: [
            {
              titulo_en: "Hybrid Search + Semantic Reranker execution in Python",
              titulo_es: "Búsqueda Híbrida + Semantic Reranker en Python",
              sql: "from azure.search.documents import SearchClient\nfrom azure.search.documents.models import VectorizedQuery\nfrom azure.identity import DefaultAzureCredential\n\nsearch_client = SearchClient(\n    endpoint='https://my-search-service.search.windows.net',\n    index_name='knowledge-base-idx',\n    credential=DefaultAzureCredential()\n)\n\nvector_query = VectorizedQuery(\n    vector=embedding_vector,\n    k_nearest_neighbors=50,\n    fields='content_vector'\n)\n\nresults = search_client.search(\n    search_text='compliance guidelines 2026',\n    vector_queries=[vector_query],\n    query_type='semantic',\n    semantic_configuration_name='my-semantic-config',\n    top=5\n)",
              lineas: [
                { code: "from azure.search.documents import SearchClient", en: "Import Azure AI Search client", es: "Importa el cliente de Azure AI Search" },
                { code: "vector_query = VectorizedQuery(vector=embedding_vector, ...)", en: "Define dense vector embedding query component", es: "Define el componente vectorial denso de la consulta" },
                { code: "results = search_client.search(", en: "Execute unified multi-modal query", es: "Ejecuta la consulta unificada" },
                { code: "    search_text='compliance guidelines 2026',", en: "BM25 text keyword query", es: "Consulta por palabras clave de texto BM25" },
                { code: "    vector_queries=[vector_query],", en: "Simultaneous dense vector nearest neighbors search", es: "Búsqueda vectorial densa simultánea" },
                { code: "    query_type='semantic',", en: "Activate Azure AI Search Semantic Reranker", es: "Activa el reclasificador semántico de Azure AI Search" },
                { code: "    semantic_configuration_name='my-semantic-config',", en: "Reference predefined semantic ranking configuration", es: "Referencia la configuración semántica predefinida" },
                { code: "    top=5)", en: "Return top 5 re-ranked authoritative results", es: "Retorna los 5 resultados reclasificados más relevantes" }
              ]
            }
          ]
        }
      ]
    },
    {
      category: "Azure Document Intelligence & Vision",
      icon: "M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z",
      comandos: [
        {
          nombre: "Extract Markdown Layout from PDF Documents",
          descripcion_en: "Extract complex document layout, nested tables, and reading order formatted as Markdown for RAG chunking.",
          descripcion_es: "Extrae diseño de documento complejo, tablas anidadas y orden de lectura formateado como Markdown para RAG.",
          ejemplos: [
            {
              titulo_en: "Document layout extraction with Markdown output",
              titulo_es: "Extracción de diseño de documento con salida Markdown",
              sql: "from azure.ai.documentintelligence import DocumentIntelligenceClient\nfrom azure.ai.documentintelligence.models import AnalyzeDocumentRequest, DocumentContentFormat\nfrom azure.identity import DefaultAzureCredential\n\nclient = DocumentIntelligenceClient(\n    endpoint='https://my-doc-intelligence.cognitiveservices.azure.com/',\n    credential=DefaultAzureCredential()\n)\n\nwith open('contract.pdf', 'rb') as f:\n    poller = client.begin_analyze_document(\n        model_id='prebuilt-layout',\n        analyze_request=f,\n        output_content_format=DocumentContentFormat.MARKDOWN,\n        content_type='application/pdf'\n    )\n\nresult = poller.result()\nmarkdown_content = result.content",
              lineas: [
                { code: "from azure.ai.documentintelligence import DocumentIntelligenceClient", en: "Import Document Intelligence SDK client", es: "Importa el cliente del SDK de Document Intelligence" },
                { code: "client = DocumentIntelligenceClient(...)", en: "Initialize authenticated client", es: "Inicializa el cliente autenticado" },
                { code: "poller = client.begin_analyze_document(", en: "Start asynchronous document layout analysis", es: "Inicia análisis asíncrono de diseño de documento" },
                { code: "    model_id='prebuilt-layout',", en: "Use prebuilt layout model for tables and structure", es: "Usa el modelo prebuilt-layout para tablas y estructura" },
                { code: "    output_content_format=DocumentContentFormat.MARKDOWN,", en: "Request native Markdown output for optimal LLM chunking", es: "Solicita salida nativa en Markdown para fragmentación óptima de LLMs" },
                { code: "result = poller.result()", en: "Wait for poller completion and extract structured markdown", es: "Espera la finalización del análisis y extrae el Markdown estructurado" }
              ]
            }
          ]
        }
      ]
    }
  ];

  window.studyFlashcards = window.studyFlashcards || {};
  window.studyFlashcards[courseId] = flashcards;
  window.studyResources = window.studyResources || {};
  window.studyResources[courseId] = {
    flashcards,
    terms: window.conceptosAzureAi103,
    scenarios: window.azureAi103Patterns,
    commands: window.comandosAzureAi103,
    achievements: [
      { id: 'ai103_plan_master', title: 'Foundry Planner', desc: 'Dominio 1: Plan and manage an Azure AI solution', xp: 500 },
      { id: 'ai103_agent_master', title: 'Agentic Architect', desc: 'Dominio 2: Implement generative AI and agentic solutions', xp: 600 },
      { id: 'ai103_vision_master', title: 'Multimodal Vision Pro', desc: 'Dominio 3: Implement computer vision solutions', xp: 300 },
      { id: 'ai103_text_master', title: 'Language & Speech Lead', desc: 'Dominio 4: Implement text analysis solutions', xp: 300 },
      { id: 'ai103_retrieval_master', title: 'Search & Grounding Guru', desc: 'Dominio 5: Implement information extraction solutions', xp: 300 }
    ]
  };
})();
