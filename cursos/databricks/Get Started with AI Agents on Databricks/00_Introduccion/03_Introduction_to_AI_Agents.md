# 03. Introduction to AI Agents

> **Módulo SCORM 1 — Conferencia Magistral**  
> **Tema:** Principios, Definición, Arquitecturas y Patrones de Razonamiento  
> **Duración estimada:** 30 min  

---

## 📌 Resumen (Overview)

Esta conferencia introduce los agentes de IA y los modelos mentales necesarios para razonar sobre ellos:
1. Define un **agente de IA** como una aplicación inteligente que utiliza un modelo de IA y herramientas para planificar y ejecutar de manera iterativa secuencias de acciones con el fin de completar una tarea compleja.
2. Mapea ese bucle cognitivo con la forma en que una persona razona, busca información y actúa.
3. Distingue los términos: **Sistema de IA**, **IA Agéntica** y **Agente de IA**.
4. Detalla los patrones arquitectónicos comunes (**Agente Conversacional**, **Agente con Llamada a Herramientas** y **Marcos Multi-Agente**).
5. Explora el panorama de complejidad de agentes (de RAG simple a agentes autónomos).
6. Contrasta flujos de trabajo **no agénticos (estáticos)** frente a **agénticos (dinámicos e iterativos)**.
7. Descompone un agente en sus tres componentes fundamentales: **LLM**, **Herramientas (Tools)** y **Memoria (Memory)**.
8. Compara los patrones modernos de razonamiento: **ReAct** (intercalado de razonamiento y acción) vs. **Plan-and-Solve** (planificación previa y ejecución).
9. Analiza casos de uso de IA agéntica en distintas industrias y los cuatro grandes desafíos de producción.

---

## 🎯 Objetivos de Aprendizaje

- **Definir qué es un agente de IA** y cómo utiliza modelos y herramientas en un ciclo de planificación y ejecución.
- **Comparar la resolución de problemas humana con la agéntica** (razonar → recuperar → razonar → actuar → razonar → responder).
- **Diferenciar con precisión:** Sistema de IA, IA Agéntica y Agente de IA.
- **Reconocer la escala de complejidad** de soluciones agénticas en el mercado.
- **Identificar los 3 componentes esenciales:** LLM (cerebro), Herramientas (manos/ojos) y Memoria (estado a corto y largo plazo).
- **Explicar los patrones ReAct y Plan-and-Solve** y cómo inducen el razonamiento paso a paso.
- **Enumerar casos de uso reales** y los desafíos críticos de adopción empresarial.

---

## A. ¿Qué es un Agente de IA?

> ### 💡 Definición Oficial
> Un **agente de IA** es una aplicación inteligente que utiliza un modelo de IA y otras herramientas para planificar y ejecutar iterativamente secuencias de acciones destinadas a resolver una tarea compleja.

### A1. Comparativa: Humano vs. Agente de IA en la misma tarea

**Objetivo compartido:** Crear una devolución para el pedido más reciente, generar la etiqueta de envío y confirmar al cliente.

| Etapa del Bucle | Representante de Soporte Humano | Agente de IA |
|---|---|---|
| **1. Planificar (Plan)** | Decide los pasos a seguir y detalles por confirmar. | Selecciona las herramientas/APIs necesarias y los parámetros requeridos. |
| **2. Buscar Info (Find info)** | Abre el historial de pedidos y la política de devoluciones. | Ejecuta la herramienta para consultar el último pedido y reglas aplicables. |
| **3. Interpretar (Interpret)** | Selecciona los artículos y verifica la opción de envío. | Valida la elegibilidad contra las reglas del negocio y elige la opción adecuada. |
| **4. Actuar (Act)** | Registra la devolución en la interfaz y genera la etiqueta. | Invoca la API `create-return` para obtener la etiqueta y el ID de devolución. |
| **5. Re-verificar (Re-check)** | Confirma el ID de devolución + etiqueta; maneja posibles excepciones. | Valida que el ID y la etiqueta se hayan recibido correctamente; captura errores. |
| **Resultado Final** | *"¡Listo! Aquí tienes tu etiqueta de envío: [enlace]"* | *"¡Listo! Aquí tienes tu etiqueta de envío: [enlace]"* |

#### ¿Cuál es la diferencia real?
- **Humano:** Emplea juicio subjetivo y navegación manual por interfaces gráficas.
- **Agente de IA:** Emplea llamadas a funciones y APIs; las acciones son programáticas, reproducibles y quedan registradas en logs.
- **Conclusión clave:** Ambos tienen éxito porque repiten el mismo bucle cognitivo:  
  $$\text{Razonar} \longrightarrow \text{Recuperar} \longrightarrow \text{Razonar} \longrightarrow \text{Actuar} \longrightarrow \text{Razonar} \longrightarrow \text{Responder}$$

---

## B. Clarificación de Terminología

1. **Sistema de IA (AI System):**  
   Cualquier software que utiliza modelos de IA o ML (el término más amplio).
2. **IA Agéntica (Agentic AI):**  
   Cualquier sistema de IA que puede incluir o coordinar uno o más agentes de IA para resolver tareas complejas.
3. **Agente de IA (AI Agent):**  
   Un sistema específico compuesto por un modelo de IA con capacidades de **planificación**, **memoria** y **uso de herramientas**.

---

## C. Patrones Comunes de Arquitectura

### Patrón 1: Agente Conversacional (Conversational Agent)
- **Estructura:** Un único LLM que responde turno por turno manteniendo el contexto de mensajes previos.
- **Herramientas:** **Sin herramientas ni recuperación externa.** Responde únicamente con su conocimiento preentrenado y el historial del chat.
- **Determinismo:** Flujo determinista: el usuario escribe, el modelo responde, se repite el ciclo.
- **Caso ideal:** Bots de preguntas frecuentes (FAQ), sesiones de brainstorming y consultoría básica.

### Patrón 2: Agente con Llamada a Herramientas (Tool-Calling Agent)
- **Estructura:** Un LLM operando en un bucle: Razona $\rightarrow$ Decide si necesita una herramienta $\rightarrow$ La invoca $\rightarrow$ Observa el resultado $\rightarrow$ Repite.
- **Herramientas:** Búsqueda documental, consultas SQL a bases de datos, APIs de negocio, calculadoras. Las herramientas se eligen dinámicamente según el contexto, no con un cronograma rígido.
- **Beneficio:** Otorga capacidades en tiempo real más allá de los datos de entrenamiento.
- **Arquitectura:** Un solo "cerebro" tomando todas las decisiones.

### Patrón 3: Marco Multi-Agente (Multi-Agent Framework)
- **Estructura:** Un **Agente Supervisor** descompone el objetivo global y enruta subtareas a agentes especializados (e.g. agente investigador, agente de código, agente redactor).
- **Composición:** Cada subagente puede ser a su vez un agente con llamadas a herramientas.
- **Beneficio:** Separación de responsabilidades, ejecución paralela o secuencial.
- **Complejidad:** Máxima: requiere protocolos de coordinación, estado compartido y contratos de transferencia (handoff).

---

## C1. Panorama Actual de Complejidad de Agentes

| Nivel | Patrón | Descripción | Complejidad |
|:---:|---|---|:---:|
| **1** | **RAG / Recuperación No Estructurada** | Un solo paso de recuperación sobre documentos, luego una pasada de generación. Sin bucles ni ramificaciones. | Mínima |
| **2** | **Text-to-SQL / Recuperación Estructurada** | Pregunta en lenguaje natural $\rightarrow$ Genera SQL $\rightarrow$ Ejecuta $\rightarrow$ Responde. Agrega un paso intermedio estructurado. | Mínima+ |
| **3** | **Enrutamiento / Clasificación** | Clasifica la intención del usuario y la despacha al prompt o manejador adecuado. Ramificación condicional sin iteración. | Baja |
| **4** | **Encadenamiento de Prompts (Prompt Chaining)** | Secuencia fija de llamadas a LLMs donde la salida de un paso alimenta al siguiente. Flujo determinista sin bucles. | Baja+ |
| **5** | **Agente con Llamada a Herramientas** | Selecciona e invoca herramientas dinámicamente en bucle según la retroalimentación de cada llamada. | Media |
| **6** | **Reflexión / Autocorrección** | El agente evalúa y critica su propia salida antes de emitir una respuesta final; bucle evaluativo interno. | Media+ |
| **7** | **Planificación y Descomposición de Tareas** | Descompone una meta en subtareas explícitas antes de ejecutar (ReAct, Plan-and-Solve). | Alta |
| **8** | **Orquestación Multi-Agente** | Supervisor coordinando agentes especializados con múltiples bucles concurrentes de herramientas. | Alta+ |
| **9** | **Agentes Autónomos** | Agentes de larga duración con metas amplias y supervisión humana mínima (agentes investigadores de fondo, agentes de desarrollo de software autónomos). | Máxima |

---

## D. Flujos No Agénticos vs. Flujos Agénticos

### Flujo No Agéntico (Estático)
- Respuestas fijas basadas en prompts predeterminados o pipelines rígidos con acciones codificadas en duro.
- Acciones deterministas: la secuencia siempre es $A \rightarrow B \rightarrow C$.
- No existe toma de decisiones ni evaluación sobre la marcha.

### Flujo Agéntico (Dinámico e Iterativo)
- La IA es responsable de la **planificación** y de la **ejecución**.
- Selección y llamada a herramientas en tiempo de ejecución.
- Acciones no deterministas: el agente decide qué pasos dar y en qué orden según los resultados intermedios.

### Los Tres Componentes Centrales de un Agente
1. **LLM (El Cerebro):** Realiza el razonamiento verbal, la interpretación de intenciones y la toma de decisiones.
2. **Herramientas (Las Manos y Ojos):** Permiten al agente interactuar con el entorno exterior (bases de datos, APIs REST, motores de búsqueda vectorial).
3. **Memoria (El Registro de Estado):**
   - **Memoria a corto plazo:** Mantiene el estado de la sesión activa y el hilo conversacional.
   - **Memoria a largo plazo:** Almacena conocimiento episódico, semántico y procedimental entre múltiples sesiones.

---

## E. Patrones Modernos de Razonamiento en LLMs

```
┌────────────────────────────────────────────────────────┐
│           PATRÓN 1: ReAct (Reason + Act)               │
│         Razonamiento y acción intercalados             │
├────────────────────────────────────────────────────────┤
│ Thought:   "Necesito buscar el último pedido."          │
│ Action 1:  get_last_order()                            │
│ Observe:   "Pedido #1234 realizado hace 5 días."       │
│ Thought:   "¿Es elegible? Debo revisar la política."    │
│ Action 2:  query_return_policy()                       │
│ Observe:   "Ventana de 30 días: es elegible."          │
│ Thought:   "Puedo generar la etiqueta ahora."          │
│ Action 3:  create_return(1234)                         │
│ Observe:   "Etiqueta generada exitosamente."           │
│ Final:     "Listo, aquí está tu etiqueta: [link]"      │
└────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────┐
│        PATRÓN 2: Plan-and-Solve (Planificar y Resolver)│
│          Planificación inicial previa a la acción      │
├────────────────────────────────────────────────────────┤
│ Plan:      1) Obtener pedido                           │
│            2) Verificar política                       │
│            3) Generar devolución                       │
│ Action 1:  get_last_order() -> #1234                   │
│ Action 2:  query_return_policy() -> Elegible           │
│ Action 3:  create_return(1234) -> Etiqueta             │
│ Final:     "Listo, aquí está tu etiqueta: [link]"      │
└────────────────────────────────────────────────────────┘
```

---

## F. Casos de Uso por Industria (Reporte State of AI Agents 2026)

- **Manufactura y Automotriz:** Mantenimiento predictivo (35%).
- **Energía y Servicios Públicos:** Mantenimiento predictivo y optimización de redes (33%).
- **Ciencias de la Salud:** Síntesis y análisis de literatura médica (23%).
- **Servicios Financieros:** Inteligencia de mercado y originación de créditos (19%).
- **Retail y Bienes de Consumo:** Inteligencia de mercado y atención hiperpersonalizada (14%).
- **Medios y Telecomunicaciones:** Defensoría y atención al cliente (14%).

---

## G. Los Cuatro Grandes Desafíos para Llevar Agentes a Producción

El reto principal para las empresas no es elegir el modelo base, sino poner la aplicación en producción de forma confiable:

1. **Razonamiento Contextual (Contextual Reasoning):**  
   RAG estándar y Text2SQL tradicional no entienden la semántica profunda del negocio; los agentes alucinan o fallan si carecen del contexto empresarial adecuado.
2. **Gobernanza Unificada (Unified Governance):**  
   La proliferación descontrolada de agentes ("agent sprawl") impide saber qué agentes existen, quién los construyó y a qué datos tienen acceso.
3. **Flexibilidad de Modelos (Run Any Model / Framework):**  
   Evitar el bloqueo de proveedor ("vendor lock-in") para poder cambiar modelos y librerías (LangChain, LangGraph, LlamaIndex, DSPy) como piezas intercambiables.
4. **Evaluación y Mejora Continua (Evaluate & Improve):**  
   La dificultad para medir objetivamente si los agentes están funcionando, detectar degradaciones de calidad en producción y depurar fallos paso a paso.
