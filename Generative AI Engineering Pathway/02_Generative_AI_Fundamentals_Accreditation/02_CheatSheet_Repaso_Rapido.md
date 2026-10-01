# Cheat-Sheet Oficial: Generative AI Fundamentals Accreditation

Este resumen condensa los conceptos clave evaluados en el examen oficial de acreditación de Databricks Academy (`Course ID: 1811`):

---

### 1. Ventana de Contexto (Context Window)
- **Límite de tokens:** Capacidad máxima de tokens que el modelo puede retener simultáneamente (input + output).
- **Efecto de desbordamiento:** Al llenarse la ventana, el modelo **descarta la información más antigua** (FIFO truncation), perdiendo restricciones iniciales y aumentando el riesgo de **alucinaciones**.

### 2. Fundamentación (Grounding)
- **Objetivo:** Anclar las respuestas del modelo en **datos empresariales específicos, verificados y gobernados**.
- **Resultado:** Mitiga las respuestas inventadas y garantiza que los hechos citados provengan de la documentación oficial de la empresa.

### 3. Clasificación de Modelos por Latencia y Costo
- **Small Language Models (SLMs):** Ideales para tareas repetitivas, estrechas y de **alto volumen donde prima la baja latencia (rapidez)** y el bajo costo por token (ej. clasificación, extracción básica).
- **Frontier / Reasoning Models:** Para tareas que requieren deducción lógica compleja, síntesis profunda o planificación multi-paso.

### 4. Parámetros de un LLM
- **Definición:** **Pesos y configuraciones internas aprendidas** durante el entrenamiento que determinan la estructura, los patrones y el comportamiento probabilístico del modelo.

### 5. Ventaja Competitiva Sostenible
- **El modelo es una commodity:** Todo el mundo puede acceder a las mismas APIs públicas (GPT-4, Claude, Llama).
- **El diferenciador es tu data:** La verdadera ventaja competitiva radica en **conectar la IA con tus datos propietarios, gobernados en Unity Catalog, y el conocimiento del dominio**.

### 6. RAG vs. Vanilla LLM
- **Capacidad añadida:** RAG permite al modelo **consultar información en tiempo real desde fuentes externas confiables** antes de redactar la respuesta, evitando el reentrenamiento y manteniendo los datos frescos.

### 7. Agent Bricks: Supervisor Agent
- **Rol principal:** Actúa como un **enrutador inteligente (router / orchestrator)** que clasifica la solicitud del usuario y delega la ejecución en subagentes especializados (Knowledge Assistant, Text-to-SQL, Information Extraction).

### 8. Analogía del "Brilliant Intern" (Pasante Brillante)
- **Comportamiento:** El LLM es extremadamente inteligente y conoce gran cantidad de conceptos generales, pero **interpreta las instrucciones de forma excesivamente literal** y carece de contexto interno del negocio; por ende, requiere guías explícitas, guardrails y contexto.

### 9. LLM-as-a-Judge y Verbosity Bias
- **Sesgo de Verbosidad (Verbosity Bias):** Desventaja documentada donde el modelo evaluador **tiende a calificar mejor las respuestas más largas y detalladas**, incluso cuando una respuesta concisa es más exacta o pertinente.

### 10. GenAI Estándar vs. Agentes de IA
- **GenAI tradicional:** Generación en **un solo paso** (one-shot input $\rightarrow$ output).
- **AI Agents:** Bucle de **razonamiento multi-paso**, uso adaptativo de herramientas (tools), observación y corrección iterativa de errores.
