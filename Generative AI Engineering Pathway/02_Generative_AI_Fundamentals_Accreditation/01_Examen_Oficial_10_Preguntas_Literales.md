# Examen Oficial: Generative AI Fundamentals Accreditation (10 Preguntas Literales)

> **Curso Oficial:** `Generative AI Fundamentals Accreditation` (`Course ID: 1811`, `LO ID: 12630`)  
> **Plan de Aprendizaje:** `Generative AI Engineering Pathway (LP 315)`  
> **Total de Preguntas:** 10 de 10 (100% de cobertura oficial)  
> **Formato:** Bilingüe (Original English + Traducción Oficial Español), 4 opciones literales completas, respuesta correcta verificada y justificación técnica.

---

## Question 1 of 10 / Pregunta 1 de 10

### English
**Question:** What occurs when a model reaches the limit of its "context window"?

**Options:**
- [x] The model drops the earliest information to make room for new data, potentially leading to hallucinations.
- [ ] The model begins to charge a higher API fee for the overflow.
- [ ] The model automatically switches from a Small Language Model (SLM) to a Frontier model.
- [ ] The model requires a system reboot.

**Correct Answer:** The model drops the earliest information to make room for new data, potentially leading to hallucinations.

**Justification:** A model can only process a limited number of tokens at once. When the available context is exceeded, older information may be truncated or omitted, causing the model to lose relevant details.

### Español
**Pregunta:** ¿Qué ocurre cuando un modelo alcanza el límite de su «ventana de contexto»?

**Opciones:**
- [x] El modelo descarta la información más antigua para dejar espacio a datos nuevos, lo que puede provocar alucinaciones.
- [ ] El modelo comienza a cobrar una tarifa de API mayor por el exceso.
- [ ] El modelo cambia automáticamente de un Small Language Model a un modelo Frontier.
- [ ] El modelo necesita reiniciar el sistema.

**Respuesta Correcta:** El modelo descarta la información más antigua para dejar espacio a datos nuevos, lo que puede provocar alucinaciones.

**Justificación:** La ventana de contexto admite una cantidad limitada de tokens; al excederla, se descartan los primeros tokens, perdiendo detalles contextuales previos y favoreciendo que el modelo invente hechos (alucinaciones).

---

## Question 2 of 10 / Pregunta 2 de 10

### English
**Question:** What does "Grounding" accomplish in an enterprise AI solution?

**Options:**
- [ ] It limits the model's creativity to ensure it only writes in code.
- [x] It anchors the model's responses in specific, verified organizational data to reduce hallucinations.
- [ ] It prevents the model from using any tokens during the reasoning phase.
- [ ] It ensures the model is hosted on a public cloud rather than a private one.

**Correct Answer:** It anchors the model's responses in specific, verified organizational data to reduce hallucinations.

**Justification:** Grounding supplies trusted enterprise context so the model bases its answer on relevant organizational information instead of relying only on general training knowledge.

### Español
**Pregunta:** ¿Qué consigue el «Grounding» en una solución empresarial de IA?

**Opciones:**
- [ ] Limita la creatividad del modelo para que solo escriba código.
- [x] Fundamenta las respuestas del modelo en datos organizacionales específicos y verificados para reducir alucinaciones.
- [ ] Impide que el modelo use tokens durante la fase de razonamiento.
- [ ] Garantiza que el modelo se aloje en una nube pública y no privada.

**Respuesta Correcta:** Fundamenta las respuestas del modelo en datos organizacionales específicos y verificados para reducir alucinaciones.

**Justificación:** El grounding aporta contexto empresarial verificado (vía RAG o bases vectoriales), forzando al modelo a responder sobre fuentes de verdad auditables en lugar de conocimientos probabilísticos genéricos.

---

## Question 3 of 10 / Pregunta 3 de 10

### English
**Question:** Which model class would be most appropriate for a high-volume, repetitive task where low latency (speed) is the priority over deep reasoning?

**Options:**
- [ ] Large Language Models (LLMs)
- [x] Small Language Models (SLMs)
- [ ] Reasoning-focused Models
- [ ] Frontier Models

**Correct Answer:** Small Language Models (SLMs)

**Justification:** SLMs generally require fewer computational resources and provide faster, less expensive inference, making them suitable for narrow, repetitive, high-volume tasks.

### Español
**Pregunta:** ¿Qué clase de modelo sería más apropiada para una tarea repetitiva de alto volumen donde la baja latencia (rapidez) es prioritaria frente al razonamiento profundo?

**Opciones:**
- [ ] Large Language Models (LLMs)
- [x] Small Language Models (SLMs)
- [ ] Modelos centrados en razonamiento
- [ ] Modelos Frontier

**Respuesta Correcta:** Small Language Models (SLMs)

**Justificación:** Los SLMs consumen sustancialmente menos memoria y FLOPS, permitiendo inferencias ultrarrápidas y económicas para tareas específicas como clasificación o extracción básica.

---

## Question 4 of 10 / Pregunta 4 de 10

### English
**Question:** In the context of Large Language Models (LLMs), what are "parameters"?

**Options:**
- [ ] The maximum number of words a model can output in one response.
- [ ] The speed at which a model generates a single token.
- [ ] The specific documents used during the grounding process.
- [x] Internal weights and settings that define the model's structure and intelligence.

**Correct Answer:** Internal weights and settings that define the model's structure and intelligence.

**Justification:** Parameters are learned numerical weights adjusted during training. They encode patterns that determine how the model processes inputs and produces outputs.

### Español
**Pregunta:** En el contexto de los LLM, ¿qué son los «parámetros»?

**Opciones:**
- [ ] La cantidad máxima de palabras que el modelo puede generar en una respuesta.
- [ ] La velocidad con la que genera un token.
- [ ] Los documentos específicos utilizados durante el grounding.
- [x] Pesos y configuraciones internas que definen la estructura y la inteligencia del modelo.

**Respuesta Correcta:** Pesos y configuraciones internas que definen la estructura y la inteligencia del modelo.

**Justificación:** Son los coeficientes numéricos de las matrices de la red neuronal ajustados mediante optimización (backpropagation) durante el preentrenamiento.

---

## Question 5 of 10 / Pregunta 5 de 10

### English
**Question:** What is the primary factor that separates successful organizations from their competitors in the GenAI landscape?

**Options:**
- [ ] High computational power and server clusters.
- [x] Connecting GenAI to unique, proprietary data and domain expertise.
- [ ] Access to the largest and newest frontier models.
- [ ] Using non-deterministic models for all customer-facing tasks.

**Correct Answer:** Connecting GenAI to unique, proprietary data and domain expertise.

**Justification:** General-purpose models are broadly available. Sustainable differentiation comes from combining them with trusted proprietary data, specialized workflows, and organizational expertise.

### Español
**Pregunta:** ¿Cuál es el factor principal que distingue a las organizaciones exitosas de sus competidores en el panorama de GenAI?

**Opciones:**
- [ ] Gran capacidad computacional y clústeres de servidores.
- [x] Conectar GenAI con datos propios y únicos y con conocimiento especializado del dominio.
- [ ] Acceso a los modelos Frontier más grandes y recientes.
- [ ] Usar modelos no deterministas en todas las tareas orientadas al cliente.

**Respuesta Correcta:** Conectar GenAI con datos propios y únicos y con conocimiento especializado del dominio.

**Justificación:** Dado que cualquier competidor puede consumir APIs de modelos frontera comerciales (el modelo es una commodity), la verdadera ventaja competitiva radica en los datos propietarios y gobernados que alimentan el contexto.

---

## Question 6 of 10 / Pregunta 6 de 10

### English
**Question:** How does Retrieval Augmented Generation (RAG) improve upon a "vanilla" LLM?

**Options:**
- [x] It allows the model to look up real-time information from external trusted sources before generating an answer.
- [ ] It reduces the context window to save on computational costs.
- [ ] It retrains the entire foundation model every time a user submits a query.
- [ ] It eliminates the need for tokenization.

**Correct Answer:** It allows the model to look up real-time information from external trusted sources before generating an answer.

**Justification:** RAG retrieves relevant information and adds it to the model's context at inference time, improving freshness, factuality, and domain relevance without retraining the foundation model.

### Español
**Pregunta:** ¿Cómo mejora Retrieval Augmented Generation (RAG) a un LLM «vanilla»?

**Opciones:**
- [x] Permite que el modelo consulte información actual de fuentes externas confiables antes de generar una respuesta.
- [ ] Reduce la ventana de contexto para ahorrar costos computacionales.
- [ ] Reentrena todo el Foundation Model cada vez que un usuario envía una consulta.
- [ ] Elimina la necesidad de tokenización.

**Respuesta Correcta:** Permite que el modelo consulte información actual de fuentes externas confiables antes de generar una respuesta.

**Justificación:** RAG rescata fragmentos relevantes desde un almacén de vectores o base de datos en tiempo de ejecución y los inyecta en el prompt, aportando veracidad sin modificar los pesos del modelo.

---

## Question 7 of 10 / Pregunta 7 de 10

### English
**Question:** Which component of the Agent Bricks suite is specifically designed to act as an intelligent router, directing user requests to specialized sub-agents?

**Options:**
- [ ] Knowledge Assistant Brick
- [ ] AI Gateway
- [ ] Information Extraction Brick
- [x] Supervisor Agent Brick

**Correct Answer:** Supervisor Agent Brick

**Justification:** The Supervisor Agent coordinates a multi-agent system by interpreting a request and routing it to the appropriate specialized agent.

### Español
**Pregunta:** ¿Qué componente de Agent Bricks está diseñado específicamente para actuar como un router inteligente y dirigir las solicitudes a subagentes especializados?

**Opciones:**
- [ ] Knowledge Assistant Brick
- [ ] AI Gateway
- [ ] Information Extraction Brick
- [x] Supervisor Agent Brick

**Respuesta Correcta:** Supervisor Agent Brick

**Justificación:** En la arquitectura multiagente de Databricks Agent Bricks, el Supervisor Agent actúa como enrutador y director de orquesta, clasificando la intención del usuario y transfiriendo el control (handoff) al subagente experto correspondiente.

---

## Question 8 of 10 / Pregunta 8 de 10

### English
**Question:** How does the "Brilliant Intern" analogy describe the behavior of an LLM?

**Options:**
- [ ] It is a worker that performs slowly but with 100% deterministic accuracy.
- [ ] It is a creative genius that understands business context intuitively.
- [ ] It is a system that only functions correctly when given vague, open-ended prompts.
- [x] It is highly knowledgeable but takes instructions extremely literally and lacks specific business context.

**Correct Answer:** It is highly knowledgeable but takes instructions extremely literally and lacks specific business context.

**Justification:** Like a brilliant new intern, an LLM has broad knowledge and capability but needs explicit instructions, context, and organizational guidance to perform the intended task reliably.

### Español
**Pregunta:** ¿Cómo describe la analogía del «Brilliant Intern» el comportamiento de un LLM?

**Opciones:**
- [ ] Es un trabajador lento, pero con exactitud determinista del 100 %.
- [ ] Es un genio creativo que comprende intuitivamente el contexto empresarial.
- [ ] Es un sistema que solo funciona correctamente con prompts vagos y abiertos.
- [x] Posee muchos conocimientos, pero interpreta las instrucciones de manera extremadamente literal y carece de contexto empresarial específico.

**Respuesta Correcta:** Posee muchos conocimientos, pero interpreta las instrucciones de manera extremadamente literal y carece de contexto empresarial específico.

**Justificación:** Un LLM cuenta con amplia formación general, pero no asume intenciones implícitas de la empresa; necesita instrucciones precisas, guías y datos del negocio para ser efectivo.

---

## Question 9 of 10 / Pregunta 9 de 10

### English
**Question:** In model evaluation, what is a documented "con" of using the "LLM as Judge" technique?

**Options:**
- [x] It may exhibit "verbosity bias," favoring longer responses regardless of accuracy.
- [ ] It is significantly more expensive than hiring human experts.
- [ ] It cannot provide a written rationale for the scores it gives.
- [ ] It is slower than human review and cannot scale.

**Correct Answer:** It may exhibit "verbosity bias," favoring longer responses regardless of accuracy.

**Justification:** An LLM judge may incorrectly associate greater length or detail with higher quality, even when a shorter response is more accurate or relevant.

### Español
**Pregunta:** En la evaluación de modelos, ¿cuál es una desventaja documentada de la técnica «LLM as Judge»?

**Opciones:**
- [x] Puede presentar «sesgo de verbosidad» y favorecer respuestas largas independientemente de su exactitud.
- [ ] Es mucho más costosa que contratar expertos humanos.
- [ ] No puede proporcionar una justificación escrita de sus puntuaciones.
- [ ] Es más lenta que la revisión humana y no puede escalar.

**Respuesta Correcta:** Puede presentar «sesgo de verbosidad» y favorecer respuestas largas independientemente de su exactitud.

**Justificación:** El "verbosity bias" es un sesgo cognitivo común donde el modelo juez asigna calificaciones más altas a respuestas extensas y detalladas, aun si contienen redundancias o inexactitudes sutiles.

---

## Question 10 of 10 / Pregunta 10 de 10

### English
**Question:** What is the fundamental distinction between a standard GenAI model and an AI Agent?

**Options:**
- [ ] AI agents are always cheaper to run than standalone LLMs.
- [ ] GenAI requires a context window, whereas AI agents do not.
- [x] GenAI is for single-step generation, while agents use reasoning for multi-step, adaptive workflows.
- [ ] GenAI models use tokens, while AI agents use full words only.

**Correct Answer:** GenAI is for single-step generation, while agents use reasoning for multi-step, adaptive workflows.

**Justification:** A standard generative model produces an output from an input, whereas an agent can plan, choose tools, perform actions, observe results, and adapt across multiple steps.

### Español
**Pregunta:** ¿Cuál es la diferencia fundamental entre un modelo GenAI estándar y un agente de IA?

**Opciones:**
- [ ] Los agentes de IA siempre son más baratos que los LLM independientes.
- [ ] GenAI necesita una ventana de contexto, pero los agentes no.
- [x] GenAI realiza generación de un solo paso, mientras que los agentes razonan en flujos adaptativos de múltiples pasos.
- [ ] Los modelos GenAI usan tokens, mientras que los agentes usan únicamente palabras completas.

**Respuesta Correcta:** GenAI realiza generación de un solo paso, mientras que los agentes razonan en flujos adaptativos de múltiples pasos.

**Justificación:** Un modelo GenAI genera texto en una sola llamada basada en su prompt; un agente ejecuta un bucle dinámico (planificar, invocar herramientas, analizar respuestas y ajustar el plan) hasta resolver tareas complejas.
