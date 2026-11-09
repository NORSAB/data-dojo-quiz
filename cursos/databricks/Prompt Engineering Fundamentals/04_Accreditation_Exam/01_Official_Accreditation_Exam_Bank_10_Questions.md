# 01. Banco Oficial del Examen de Acreditación (10 Preguntas Verificadas)

> **Evaluación:** Prompt Engineering Fundamentals - Accreditation  
> **ID de Objeto Docebo:** `48471`  
> **Puntuación Obtenida:** **50.00 / 50.00 puntos (100% de Aprobación)**  
> **Acreditación Emitida:** Databricks Academy Accreditation (`AA-Prompt Engineering Fundamentals`)  
> **Estado:** 10 de 10 preguntas extraídas literalmente, verificadas y documentadas con explicaciones técnicas.

---

### Pregunta 1
**Enunciado / Pregunta:**  
Why is context critical when crafting a prompt for an AI assistant?

**Opciones de Respuesta:**
- [ ] A) It allows the AI to prioritize speed over quality.
- [ ] B) It guarantees the AI will not make any errors.
- [ ] C) It restricts the AI to only answering yes-or-no questions.
- [x] **D) It provides the AI with relevant background to generate accurate, tailored responses.**

> **💡 Justificación y Explicación Técnica:**  
> El contexto suministra al modelo los antecedentes del negocio, las limitaciones operativas, los perfiles de la audiencia y la información del dominio necesarios para que la respuesta no sea una generalización vaga, sino una solución ajustada a la realidad específica de la empresa.  
> **🔗 Referencia Databricks:** *Introduction to Prompt Engineering - The COIE Framework (Context Pillar).*

---

### Pregunta 2
**Enunciado / Pregunta:**  
What is the key difference between Chain-of-Thought and Self-Ask prompting techniques?

**Opciones de Respuesta:**
- [ ] A) Chain-of-Thought is only for math problems, while Self-Ask is only for writing tasks.
- [x] **B) Self-Ask generates its own questions, while Chain-of-Thought follows a predefined path.**
- [ ] C) Self-Ask is used exclusively for summarizing text, while Chain-of-Thought is for generating ideas.
- [ ] D) Chain-of-Thought requires examples, while Self-Ask does not.

> **💡 Justificación y Explicación Técnica:**  
> Mientras que *Chain-of-Thought* (CoT) guía al modelo a desplegar su razonamiento paso a paso a lo largo de una trayectoria lineal directa, *Self-Ask* dota al modelo de la iniciativa para descomponer un problema formulando y respondiendo de manera autónoma sus propias sub-preguntas diagnósticas intermedias.  
> **🔗 Referencia Databricks:** *Prompt Engineering Techniques - Reasoning Techniques: Chain-of-Thought and Self-Ask.*

---

### Pregunta 3
**Enunciado / Pregunta:**  
Which of the following best describes a RAG (Retrieval-Augmented Generation) system?

**Opciones de Respuesta:**
- [ ] A) A tool that formats prompts for the user.
- [ ] B) A machine learning model trained only on social media posts.
- [ ] C) An algorithm that corrects grammar and punctuation in AI responses.
- [x] **D) A system that retrieves internal knowledge assets to augment LLM responses.**

> **💡 Justificación y Explicación Técnica:**  
> Un sistema RAG conecta el modelo de lenguaje fundacional con una base de conocimiento empresarial indexada (como Databricks Vector Search o Unity Catalog Volumes). Antes de generar la respuesta, el sistema busca y recupera fragmentos de documentos internos relevantes y los inyecta en el prompt para que el LLM fundamente su respuesta en datos corporativos reales.  
> **🔗 Referencia Databricks:** *Introduction to Prompt Engineering - How AI Assistants Work.*

---

### Pregunta 4
**Enunciado / Pregunta:**  
"Trust but Verify" refers to...

**Opciones de Respuesta:**
- [ ] A) Assuming the AI's first answer is always the most accurate.
- [ ] B) Allowing the AI to make decisions without human oversight.
- [ ] C) Only using the AI for tasks where errors have no consequences.
- [x] **D) Ensuring AI output is cross-checked with internal, verified sources.**

> **💡 Justificación y Explicación Técnica:**  
> En entornos corporativos regulados, los LLMs pueden alucinar o simplificar detalles críticos. El principio rector de "Trust but Verify" dicta que, aunque se aproveche al máximo la capacidad analítica y de síntesis de la IA, todo entregable, cifra o código debe ser validado contra fuentes autorizadas y datos maestros internos antes de su uso productivo.  
> **🔗 Referencia Databricks:** *Introduction to Prompt Engineering - Core Principles & Governance.*

---

### Pregunta 5
**Enunciado / Pregunta:**  
How do examples improve the effectiveness of a prompt in Few-Shot prompting?

**Opciones de Respuesta:**
- [ ] A) They reduce the time it takes the AI to generate a response.
- [ ] B) They eliminate the need to provide any instructions.
- [x] **C) They help the AI learn the desired tone, structure, and format.**
- [ ] D) They prevent the AI from accessing external databases.

> **💡 Justificación y Explicación Técnica:**  
> Los ejemplos demostrativos (1 a 3 pares representativos de entrada/salida) permiten al modelo captar por aprendizaje en contexto (*in-context learning*) el tono corporativo exacto, las claves sintácticas del formato deseado (JSON, tablas, listas) y la estructura esperada, superando con creces la efectividad de simples descripciones textuales.  
> **🔗 Referencia Databricks:** *Prompt Engineering Techniques - Content Generation: Few-Shot Prompting.*

---

### Pregunta 6
**Enunciado / Pregunta:**  
What is the primary benefit of using the COIE framework in prompt engineering?

**Opciones de Respuesta:**
- [ ] A) It allows the AI to bypass safety filters.
- [ ] B) It speeds up the processing time for AI queries.
- [x] **C) It helps structure prompts for more accurate outcomes.**
- [ ] D) It eliminates the need for human review of AI outputs.

> **💡 Justificación y Explicación Técnica:**  
> El marco COIE (*Context, Outcome, Instruction, Example*) proporciona un andamiaje estructurado y estandarizado que garantiza que no se omita ningún elemento crítico de negocio al formular la solicitud, reduciendo al mínimo la ambigüedad y maximizando la precisión de la salida.  
> **🔗 Referencia Databricks:** *Introduction to Prompt Engineering - The COIE Framework.*

---

### Pregunta 7
**Enunciado / Pregunta:**  
What kind of tasks are best suited for asking an AI assistant to complete a task with just clear instructions and no examples (zero-shot prompting)?

**Opciones de Respuesta:**
- [ ] A) Tasks that require matching a very specific, unique company writing style.
- [x] **B) Straightforward requests where format and tone are not critical.**
- [ ] C) Highly complex data transformations with strict output schemas.
- [ ] D) Ambiguous research projects where the end goal is undefined.

> **💡 Justificación y Explicación Técnica:**  
> El Zero-Shot Prompting es óptimo para solicitudes directas, preguntas fácticas estándar y resúmenes generales donde el modelo puede apoyarse plenamente en su conocimiento preentrenado sin requerir una guía estética o estructural estricta.  
> **🔗 Referencia Databricks:** *Prompt Engineering Techniques - Content Generation: Zero-Shot Prompting.*

---

### Pregunta 8
**Enunciado / Pregunta:**  
When asking the AI to show its reasoning step-by-step before giving a conclusion (chain-of-thought prompting), what is the main benefit?

**Opciones de Respuesta:**
- [ ] A) It significantly reduces token consumption.
- [ ] B) It prevents the model from generating multiple paragraphs.
- [x] **C) It makes the logic and assumptions transparent, so you can verify or adjust them.**
- [ ] D) It guarantees the output is legally binding.

> **💡 Justificación y Explicación Técnica:**  
> Al exigir que el asistente desglose cada cálculo intermedio y deducción lógica de forma visible antes de concluir, el usuario humano puede auditar el razonamiento, validar los supuestos y detectar con exactitud cualquier error o desviación en la cadena lógica.  
> **🔗 Referencia Databricks:** *Prompt Engineering Techniques - Reasoning Techniques: Chain-of-Thought.*

---

### Pregunta 9
**Enunciado / Pregunta:**  
What does the “Brilliant Intern” analogy illustrate about how an AI assistant works?

**Opciones de Respuesta:**
- [ ] A) The AI requires constant supervision and cannot do complex tasks.
- [x] **B) The AI is knowledgeable and tireless, but needs clear instructions.**
- [ ] C) The AI will eventually replace all human employees.
- [ ] D) The AI possesses common sense and institutional experience by default.

> **💡 Justificación y Explicación Técnica:**  
> La analogía del "Becario Brillante" destaca que, al igual que un graduado superdotado, el modelo posee una inmensa capacidad cognitiva y rapidez, pero carece del contexto institucional implícito y del sentido común corporativo, por lo que requiere instrucciones detalladas, claras y supervisión profesional.  
> **🔗 Referencia Databricks:** *Introduction to Prompt Engineering - Mental Models.*

---

### Pregunta 10
**Enunciado / Pregunta:**  
What is the benefit of asking the AI to generate and answer its own follow-up questions during a task (self-ask prompting)?

**Opciones de Respuesta:**
- [ ] A) It reduces the length of the prompt you have to write.
- [x] **B) It helps uncover hidden factors or missing information you may not have considered.**
- [ ] C) It automatically formats the output in JSON.
- [ ] D) It restricts the AI to answering with single-word replies.

> **💡 Justificación y Explicación Técnica:**  
> Al forzar al modelo a interrogarse a sí mismo sobre los prerrequisitos y vacíos de información necesarios para resolver una meta compleja, la técnica *Self-Ask* saca a la superficie dependencias técnicas, variables no previstas y riesgos ocultos que enriquecen el resultado final.  
> **🔗 Referencia Databricks:** *Prompt Engineering Techniques - Reasoning Techniques: Self-Ask Prompting.*
