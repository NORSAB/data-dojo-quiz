# Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
## Domain 2: Implement generative AI and agentic solutions (117 Preguntas)

> **Total de Preguntas en esta sección**: 117
> **Cobertura Oficial**: Microsoft Learn Exam Guide 2026 (CertSafari AI-103 356 Qs)

---

### Pregunta 105: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 106: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 107: Generative App Workflow 3: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 3: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 108: Generative App Workflow 4: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 4: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 109: Generative App Workflow 5: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 5: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 110: Generative App Workflow 6: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 6: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 111: Generative App Workflow 7: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 7: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 112: Generative App Workflow 8: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 8: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 113: Generative App Workflow 9: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 9: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 114: Generative App Workflow 10: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 10: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 115: Generative App Workflow 11: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 11: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 116: Generative App Workflow 12: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 12: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 117: Generative App Workflow 13: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 13: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 118: Generative App Workflow 14: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 14: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 119: Generative App Workflow 15: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 15: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 120: Generative App Workflow 16: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 16: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 121: Generative App Workflow 17: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 17: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 122: Generative App Workflow 18: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 18: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 123: Generative App Workflow 19: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 19: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 124: Generative App Workflow 20: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 20: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 125: Generative App Workflow 21: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 21: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 126: Generative App Workflow 22: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 22: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 127: Generative App Workflow 23: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 23: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 128: Generative App Workflow 24: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 24: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 129: Generative App Workflow 25: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 25: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 130: Generative App Workflow 26: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 26: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 131: Generative App Workflow 27: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 27: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 132: Generative App Workflow 28: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 28: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 133: Generative App Workflow 29: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 29: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 134: Generative App Workflow 30: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 30: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 135: Generative App Workflow 31: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 31: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 136: Generative App Workflow 32: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 32: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 137: Generative App Workflow 33: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 33: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 138: Generative App Workflow 34: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 34: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 139: Generative App Workflow 35: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 35: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 140: Generative App Workflow 36: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 36: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 141: Generative App Workflow 37: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 37: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 142: Generative App Workflow 38: Which Foundry evaluation metric measures whether the model's generated answer is entirely grounded in and supported by the retrieved context documents, without introducing unverified facts?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: Groundedness Evaluator (evaluates context fidelity / hallucination rate)
- **B**: Fluency Evaluator (evaluates grammar only)
- **C**: Tokens Per Second metric
- **D**: Levenshtein String Distance

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Groundedness Evaluator (evaluates context fidelity / hallucination rate)**

The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.

**Analysis of options:**
• **(A)**: Correct. The Groundedness evaluator verifies that every statement in the model answer can be directly attributed to evidence in the retrieved grounding context.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 38: ¿Qué métrica de evaluación de Foundry mide si la respuesta generada por el modelo está completamente fundamentada y respaldada por los documentos de contexto recuperados, sin introducir hechos no verificados?

- **A**: Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)
- **B**: Fluency Evaluator (evalúa únicamente la gramática)
- **C**: Métrica Tokens Per Second
- **D**: Distancia de cadenas de Levenshtein

**Explicación en Español**:
**Respuesta Correcta: (A) Groundedness Evaluator (evalúa la fidelidad con el contexto / tasa de alucinación)**

El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.

**Análisis de opciones:**
• **(A)**: Correcto. El evaluador de Groundedness verifica que cada afirmación en la respuesta del modelo se pueda atribuir directamente a la evidencia en el contexto de fundamentación recuperado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 143: Generative App Workflow 39: You are building a Python RAG application using the `azure-ai-inference` SDK. You want to enforce structured JSON output adhering to a strict Pydantic model schema. Which model client parameter must be configured?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.1: Build generative applications by using Foundry  

#### Opciones (EN):
- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True without response schema
- **D**: stop=['\n']

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.

**Analysis of options:**
• **(A)**: Correct. The `response_format` with `json_schema` and `strict: True` guarantees that the generative model response conforms 100% to the provided JSON Schema.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Flujo de Aplicación Generativa 39: Está construyendo una aplicación RAG en Python usando el SDK `azure-ai-inference`. Desea forzar una salida JSON estructurada que cumpla con el esquema estricto de un modelo Pydantic. ¿Qué parámetro del cliente de modelo debe configurarse?

- **A**: response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}
- **B**: temperature=2.0
- **C**: stream=True sin esquema de respuesta
- **D**: stop=['\n']

**Explicación en Español**:
**Respuesta Correcta: (A) response_format={'type': 'json_schema', 'json_schema': {'name': 'output_schema', 'strict': True, 'schema': pydantic_schema}}**

El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.

**Análisis de opciones:**
• **(A)**: Correcto. El parámetro `response_format` con `json_schema` y `strict: True` garantiza que la respuesta del modelo generativo se ajuste al 100% al JSON Schema proporcionado.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 144: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 145: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 146: Agent Architecture Case 3: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 3: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 147: Agent Architecture Case 4: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 4: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 148: Agent Architecture Case 5: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 5: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 149: Agent Architecture Case 6: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 6: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 150: Agent Architecture Case 7: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 7: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 151: Agent Architecture Case 8: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 8: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 152: Agent Architecture Case 9: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 9: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 153: Agent Architecture Case 10: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 10: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 154: Agent Architecture Case 11: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 11: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 155: Agent Architecture Case 12: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 12: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 156: Agent Architecture Case 13: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 13: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 157: Agent Architecture Case 14: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 14: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 158: Agent Architecture Case 15: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 15: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 159: Agent Architecture Case 16: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 16: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 160: Agent Architecture Case 17: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 17: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 161: Agent Architecture Case 18: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 18: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 162: Agent Architecture Case 19: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 19: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 163: Agent Architecture Case 20: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 20: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 164: Agent Architecture Case 21: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 21: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 165: Agent Architecture Case 22: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 22: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 166: Agent Architecture Case 23: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 23: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 167: Agent Architecture Case 24: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 24: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 168: Agent Architecture Case 25: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 25: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 169: Agent Architecture Case 26: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 26: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 170: Agent Architecture Case 27: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 27: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 171: Agent Architecture Case 28: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 28: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 172: Agent Architecture Case 29: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 29: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 173: Agent Architecture Case 30: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 30: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 174: Agent Architecture Case 31: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 31: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 175: Agent Architecture Case 32: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 32: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 176: Agent Architecture Case 33: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 33: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 177: Agent Architecture Case 34: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 34: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 178: Agent Architecture Case 35: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 35: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 179: Agent Architecture Case 36: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 36: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 180: Agent Architecture Case 37: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 37: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 181: Agent Architecture Case 38: An autonomous agent needs to execute a financial transfer tool that modifies database records. To prevent unintended executions, what pattern should be enforced in the Agent's Run lifecycle?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs
- **B**: Setting agent temperature to 0.0 without human validation
- **C**: Running the tool in an asynchronous background loop without logging
- **D**: Disabling authentication on the database endpoint

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Human-in-the-loop tool approval intercepting the `requires_action` Run status before submitting tool outputs**

When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.

**Analysis of options:**
• **(A)**: Correct. When an agent calls critical side-effect tools, the system pauses at `requires_action`, allowing human operators or approval services to validate parameters before submitting outputs back to the run.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 38: Un agente autónomo necesita ejecutar una herramienta de transferencia financiera que modifica registros de base de datos. Para evitar ejecuciones no deseadas, ¿qué patrón debe aplicarse en el ciclo de vida del Run del agente?

- **A**: Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta
- **B**: Establecer la temperatura del agente en 0.0 sin validación humana
- **C**: Ejecutar la herramienta en un bucle en segundo plano asíncrono sin registro
- **D**: Deshabilitar la autenticación en el endpoint de la base de datos

**Explicación en Español**:
**Respuesta Correcta: (A) Aprobación humana (human-in-the-loop) interceptando el estado del Run `requires_action` antes de enviar las salidas de la herramienta**

Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.

**Análisis de opciones:**
• **(A)**: Correcto. Cuando un agente invoca herramientas críticas con efectos secundarios, el sistema se pausa en `requires_action`, permitiendo a operadores humanos validar parámetros antes de enviar las salidas.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 182: Agent Architecture Case 39: When working with the Azure AI Agent Service in Python (`azure-ai-projects`), what is the correct lifecycle sequence to execute an agent conversation?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.2: Build agents by using Foundry  

#### Opciones (EN):
- **A**: Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages
- **B**: Create Run -> Create Thread -> Delete Agent -> Send Message
- **C**: Create Message -> Execute Model -> Delete Thread
- **D**: Upload File -> Delete Agent -> Create Run directly

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Create Agent -> Create Thread -> Add Message to Thread -> Create and Poll Run -> Retrieve Messages**

The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.

**Analysis of options:**
• **(A)**: Correct. The Azure AI Agent Service architecture follows the OpenAI Assistants specification: Agent -> Thread -> Message -> Run -> Message extraction.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Arquitectura de Agentes 39: Al trabajar con Azure AI Agent Service en Python (`azure-ai-projects`), ¿cuál es la secuencia de ciclo de vida correcta para ejecutar una conversación de agente?

- **A**: Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes
- **B**: Crear Run -> Crear Thread -> Eliminar Agente -> Enviar Mensaje
- **C**: Crear Mensaje -> Ejecutar Modelo -> Eliminar Thread
- **D**: Cargar Archivo -> Eliminar Agente -> Crear Run directamente

**Explicación en Español**:
**Respuesta Correcta: (A) Crear Agente -> Crear Thread -> Agregar Mensaje al Thread -> Crear y Monitorear Run -> Recuperar Mensajes**

La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.

**Análisis de opciones:**
• **(A)**: Correcto. La arquitectura de Azure AI Agent Service sigue la especificación de OpenAI Assistants: Agent -> Thread -> Message -> Run -> Extracción de mensajes.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 183: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 184: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 185: Optimization & Observability Case 3: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 3: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 186: Optimization & Observability Case 4: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 4: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 187: Optimization & Observability Case 5: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 5: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 188: Optimization & Observability Case 6: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 6: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 189: Optimization & Observability Case 7: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 7: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 190: Optimization & Observability Case 8: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 8: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 191: Optimization & Observability Case 9: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 9: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 192: Optimization & Observability Case 10: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 10: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 193: Optimization & Observability Case 11: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 11: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 194: Optimization & Observability Case 12: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 12: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 195: Optimization & Observability Case 13: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 13: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 196: Optimization & Observability Case 14: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 14: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 197: Optimization & Observability Case 15: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 15: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 198: Optimization & Observability Case 16: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 16: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 199: Optimization & Observability Case 17: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 17: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 200: Optimization & Observability Case 18: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 18: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 201: Optimization & Observability Case 19: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 19: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 202: Optimization & Observability Case 20: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 20: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 203: Optimization & Observability Case 21: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 21: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 204: Optimization & Observability Case 22: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 22: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 205: Optimization & Observability Case 23: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 23: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 206: Optimization & Observability Case 24: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 24: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 207: Optimization & Observability Case 25: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 25: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 208: Optimization & Observability Case 26: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 26: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 209: Optimization & Observability Case 27: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 27: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 210: Optimization & Observability Case 28: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 28: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 211: Optimization & Observability Case 29: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 29: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 212: Optimization & Observability Case 30: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 30: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 213: Optimization & Observability Case 31: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 31: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 214: Optimization & Observability Case 32: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 32: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 215: Optimization & Observability Case 33: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 33: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 216: Optimization & Observability Case 34: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 34: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 217: Optimization & Observability Case 35: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 35: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 218: Optimization & Observability Case 36: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 36: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 219: Optimization & Observability Case 37: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 37: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 220: Optimization & Observability Case 38: A generative AI system requires solving complex mathematical and logical deductions. Which prompt engineering pattern encourages the model to generate intermediate reasoning steps before arriving at a final answer?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: Chain-of-Thought (CoT) prompting
- **B**: Zero-shot direct answer extraction with max_tokens=1
- **C**: Setting presence_penalty to 2.0 without instructions
- **D**: Removing all punctuation from the user input

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) Chain-of-Thought (CoT) prompting**

Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.

**Analysis of options:**
• **(A)**: Correct. Chain-of-Thought prompting directs the LLM to articulate step-by-step reasoning, dramatically improving accuracy on multi-step logic and calculations.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 38: Un sistema de IA generativa requiere resolver deducciones lógicas y matemáticas complejas. ¿Qué patrón de ingeniería de avisos anima al modelo a generar pasos de razonamiento intermedios antes de llegar a una respuesta final?

- **A**: Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)
- **B**: Extracción directa de respuesta zero-shot con max_tokens=1
- **C**: Establecer presence_penalty en 2.0 sin instrucciones
- **D**: Eliminar toda la puntuación de la entrada del usuario

**Explicación en Español**:
**Respuesta Correcta: (A) Avisos de Cadena de Pensamiento (Chain-of-Thought - CoT)**

Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.

**Análisis de opciones:**
• **(A)**: Correcto. Los avisos de cadena de pensamiento (CoT) guían al LLM para articular el razonamiento paso a paso, mejorando drásticamente la precisión en cálculos y lógica de múltiples pasos.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

### Pregunta 221: Optimization & Observability Case 39: To achieve comprehensive end-to-end tracing and latency breakdown across multi-agent calls and retrieval steps in Foundry, which observability framework is natively supported via Application Insights?

**Dominio**: Domain 2: Implement generative AI and agentic solutions  
**Subdominio**: Subdomain 2.3: Optimize and operationalize generative AI systems  

#### Opciones (EN):
- **A**: OpenTelemetry with Azure Monitor instrumentation
- **B**: Custom print statements logged to local disk text files
- **C**: SNMP v1 network polling
- **D**: Windows Event Log viewer only

**Respuesta Correcta**: **A**

#### Explicación Oficial (EN):
**Correct Answer: (A) OpenTelemetry with Azure Monitor instrumentation**

Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.

**Analysis of options:**
• **(A)**: Correct. Azure AI Foundry integrates natively with OpenTelemetry standards, exporting spans, token counts, and tool execution traces to Azure Application Insights.
• **(B)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(C)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.
• **(D)**: Incorrect. Not the recommended Microsoft Azure pattern for this scenario.

#### Traducción al Español (ES):
**Pregunta**: Caso de Optimización y Observabilidad 39: Para lograr un seguimiento integral de extremo a extremo y un desglose de latencia en llamadas multiagente y pasos de recuperación en Foundry, ¿qué marco de observabilidad es compatible de forma nativa mediante Application Insights?

- **A**: OpenTelemetry con instrumentación de Azure Monitor
- **B**: Instrucciones print personalizadas registradas en archivos de texto locales en disco
- **C**: Sondeo de red SNMP v1
- **D**: Visor de eventos de Windows exclusivamente

**Explicación en Español**:
**Respuesta Correcta: (A) OpenTelemetry con instrumentación de Azure Monitor**

Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.

**Análisis de opciones:**
• **(A)**: Correcto. Azure AI Foundry se integra de forma nativa con los estándares de OpenTelemetry, exportando tramos (spans), recuentos de tokens y trazas de herramientas a Azure Application Insights.
• **(B)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(C)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.
• **(D)**: Incorrecto. No es el patrón recomendado de Microsoft Azure para este escenario.

---

