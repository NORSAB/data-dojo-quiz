# 01. Building AI Agents on Databricks

> **Módulo SCORM 2 — Conferencia Magistral**  
> **Tema:** Plataforma de Desarrollo, Gobernanza con Unity Catalog, MCP, Marcos GenAI y Prototipado  
> **Duración estimada:** 35 min  

---

## 📌 Resumen (Overview)

Esta conferencia aborda los requisitos indispensables para construir agentes de IA de calidad para producción sobre Databricks:
1. Analiza los desafíos de transición de prototipo a producción: **Control**, **Calidad** y **Costo**.
2. Explica por qué los modelos fundacionales de propósito general fallan en casos de uso empresariales y cómo el enfoque de **Inteligencia de Datos (Data Intelligence)** resuelve esta brecha conectando los modelos a los datos del negocio.
3. Presenta la arquitectura de gobernanza empresarial: **Autenticación Unificada**, **Unity AI Gateway**, **Unity Catalog** y el estándar **Model Context Protocol (MCP)**.
4. Explora las 4 palancas para gestionar costos a escala en agentes que programan o ejecutan tareas intensivas.
5. Compara los principales marcos de orquestación (**LangChain**, **LangGraph**, **LlamaIndex** y **DSPy**) y cómo Databricks adopta una postura agnóstica de frameworks respaldada por **MLflow**.
6. Enseña a construir agentes personalizados: registro de herramientas como funciones SQL o Python en Unity Catalog con cláusulas `COMMENT` descriptivas para los agentes, y prototipado ágil en **AI Playground**.

---

## 🎯 Objetivos de Aprendizaje

- **Identificar los 3 grandes retos** de mover soluciones de IA a producción: Control, Calidad y Costo.
- **Diferenciar Inteligencia General vs. Inteligencia de Datos:** los modelos genéricos carecen del contexto semántico y de seguridad que aporta el Lakehouse.
- **Describir la arquitectura de gobernanza:** Unity Gateway como plano de control centralizado y Unity Catalog como catálogo unificado de activos.
- **Comprender el rol de Model Context Protocol (MCP)** en la exposición segura de herramientas a agentes externos o internos.
- **Aplicar las 4 palancas de optimización de costos:** frontera de eficiencia precio-calidad, enrutamiento dinámico, controles progresivos de gasto y reducción de sobrecarga de tokens.
- **Diseñar herramientas en Unity Catalog:** crear funciones SQL/Python con parámetros tipados y comentarios informativos que orienten la selección del modelo.
- **Acelerar el prototipado en AI Playground** y exportar código limpio y gobernable a producción.

---

## A. El Stack de Databricks para Agentes de IA

Databricks estructura su plataforma para proporcionar **Contexto**, **Control**, **Costo** y **Elección (Choice)** en cuatro niveles:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. APLICACIONES AGÉNTICAS (Agentic Apps)                               │
│    - AI/BI Apps personalizadas para analítica de negocio               │
│    - Lakewatch (Seguridad Agéntica), CustomerLake (Marketing Agéntico) │
├────────────────────────────────────────────────────────────────────────┤
│ 2. TRABAJO AGÉNTICO (Agentic Work)                                     │
│    - Genie: Compañero de IA conectado a todos los datos empresariales  │
├────────────────────────────────────────────────────────────────────────┤
│ 3. DESARROLLO AGÉNTICO (Agentic Dev)                                   │
│    - Agent Bricks: Plataforma de desarrollo abierto (Build/Deploy/Gov) │
│    - ZeroOps App Builder y Ontología de Genie                          │
├────────────────────────────────────────────────────────────────────────┤
│ 4. GOBERNANZA UNIFICADA (Unified Governance)                           │
│    - Unity Catalog: Acceso, semántica, observabilidad, linaje          │
│    - Unity AI Gateway: Credenciales, rate limits, AI guardrails        │
├────────────────────────────────────────────────────────────────────────┤
│ 5. DATOS AGÉNTICOS E INFRAESTRUCTURA ABIERTA (Agentic Data)            │
│    - Lakeflow (Ingesta y streaming en tiempo real)                     │
│    - Lakehouse / Lakebase (Postgres serverless + SQL Warehouses)       │
│    - Cualquier Nube, Cualquier Modelo, Cualquier Formato Abierto       │
└────────────────────────────────────────────────────────────────────────┘
```

---

## B. Agent Bricks: La Plataforma de Desarrollo de Agentes

Agent Bricks permite construir agentes personalizados sin bloqueos de proveedor (*no lock-in*):

1. **Cualquier Marco (Any Framework):**  
   Desarrolla con LangChain, LangGraph, LlamaIndex, DSPy o código nativo.
2. **Cualquier Modelo (Any Model):**  
   Accede a modelos de Anthropic (Claude), OpenAI (GPT), Google (Gemini) o modelos de código abierto (Llama, DBRX) a través de una API unificada en Unity AI Gateway.
3. **Cómputo Aislado y Seguro (Agent Sandbox):**  
   Sesiones aisladas y seguras que inician en segundos y cuentan con recuperación automática.
4. **Memoria del Agente (Agent Memory):**  
   Almacenamiento de estado a corto y largo plazo gobernado en Unity Catalog.
5. **Herramientas de IA Gobernadas (AI Tools):**  
   Integración nativa con AI Search (búsqueda vectorial), servidores MCP, habilidades y AI Functions.
6. **Trazabilidad y Evaluación:**  
   MLflow Tracing de extremo a extremo, evaluadores con jueces LLM y registro de parámetros y prompts.

---

## C. Arquitectura de Gobernanza Empresarial y Protocolo MCP

Cuando un agente se ejecuta en producción, Databricks gestiona la seguridad y el flujo a través de un plano de control unificado:

```
[Usuario / Aplicación]
         │ 1. Autenticación (Unified Auth)
         ▼
  [Agente de IA]
         │ 2. Enrutamiento con políticas
         ▼
[Unity AI Gateway]  ◄──── Gobernanza Centralizada (Límites de tasa, Guardrails, PII)
   │        │
   │        ├─► [Unity Catalog] ── (Herramientas SQL, Funciones Python, Tablas, Linaje)
   │        │
   │        ├─► [Servidores MCP] ── (Servidores Model Context Protocol: GitHub, Jira, Slack)
   │        │
   │ 3. Inferencia OBO (On-Behalf-Of)
   ▼
[Proveedores de LLMs] (Anthropic Claude Sonnet 5, OpenAI, Gemini, etc.)
```

### El Rol de Model Context Protocol (MCP)
- **MCP** es el estándar abierto para conectar modelos con herramientas y fuentes de contexto.
- Databricks proporciona servidores MCP de primera clase para exponer herramientas de Unity Catalog, permitiendo que agentes internos o externos (como Claude Code, Codex o agentes personalizados) consuman herramientas de datos de manera segura y auditada.

---

## C1. Las 4 Palancas para Gestionar Costos a Escala

Al desplegar agentes a escala empresarial, el gasto no debe descontrolarse. Databricks define 4 palancas operativas:

### Palanca 1: Usar la Frontera de Eficiencia Precio-Calidad
- **Frontera de Inteligencia:** La calidad más alta a cualquier costo.
- **Frontera de Eficiencia:** La mejor calidad para un nivel de costo determinado.
- Los modelos más nuevos y costosos no siempre justifican su precio para tareas operativas rutinarias; se debe mantener un portafolio de modelos aprobados y reevaluarlos periódicamente.

### Palanca 2: Enrutamiento Dinámico de Peticiones y Tareas
- **A nivel de solicitud:** Unity Gateway Smart Routing selecciona el modelo de menor costo capaz de responder la consulta.
- **A nivel de tarea:** Un meta-arnés (*meta-harness*, como Omnigent) asigna tareas completas al arnés y modelo óptimos (e.g. delegar a modelos económicos y escalar a modelos frontier solo ante excepciones complejas).

### Palanca 3: Reemplazar Cortes Duros con Controles de Gasto Progresivos
- Las cuotas duras que cortan la ejecución a mitad de camino arruinan la productividad y la experiencia.
- En su lugar: visibilidad de gasto en tiempo real $\rightarrow$ alertas en umbrales $\rightarrow$ *downshifting* automático a modelos más ligeros $\rightarrow$ suspensión solo como último recurso.

### Palanca 4: Reducir la Sobrecarga de Tokens (Token Overhead)
- Con frecuencia, el prompt del usuario representa solo una pequeña fracción del total de tokens consumidos en un bucle agéntico.
- Los mayores generadores de costo son: instrucciones de sistema repetitivas, exploración redundante de código y salidas excesivamente verbosas de herramientas. La optimización del arnés y el almacenamiento en caché de contexto reducen drásticamente los tokens sin perder calidad.

---

## D. Comparación de Marcos de Generación de IA

Databricks es **agnóstico de frameworks**. Puedes desarrollar tu agente con el que mejor se adapte a tu equipo y gestionarlo con MLflow:

| Framework | Enfoque Principal | Puntos Fuertes | Cuándo Usarlo |
|---|---|---|---|
| **LangChain** | Tuberías imperativas paso a paso | Enorme ecosistema de conectores e integraciones listas para usar | Prototipos rápidos, flujos RAG estándar y encadenamiento secuencial |
| **LangGraph** | Estructuras en grafo con ciclos y persistencia | Manejo de estado persistente entre sesiones y visualización de flujos no lineales | Agentes multi-paso complejos con bucles condicionales y coordinación |
| **LlamaIndex** | Indexación y recuperación de datos | Conexión profunda entre LLMs y fuentes de datos diversas y jerárquicas | Motores de búsqueda avanzados y estructuración de documentos empresariales |
| **DSPy** | Optimización algorítmica de prompts | Trata los prompts como parámetros optimizables mediante compilación y métricas | Ajuste sistemático de prompts eliminando la prueba y error manual |

### El Factor Común: MLflow en Databricks
- **Trazabilidad Automática:** Con `mlflow.autolog()` se capturan todas las llamadas, latencias y pasos sin importar el marco.
- **Evaluación y Comparación:** Jueces LLM automáticos con `mlflow.genai.evaluate()`.
- **Empaquetado y Despliegue:** Registro como modelo estándar MLflow servido en Databricks Model Serving con linaje en Unity Catalog.

---

## E. Construcción de Herramientas Gobernadas en Unity Catalog

En Databricks, las herramientas del agente se registran como **funciones de Unity Catalog** (en SQL o Python).

### Ejemplo Oficial de Herramienta en SQL con AI Vector Search:
```sql
CREATE OR REPLACE FUNCTION shop.catalog.search_product_docs(
  search_term STRING COMMENT 'Search term for relevant product documentation'
)
RETURNS TABLE
COMMENT 'Searches product documentation using AI Search.'
RETURN (
  SELECT product_name, indexed_doc AS doc
  FROM vector_search(
    index => 'shop.catalog.product_docs_index',
    query => search_term,
    num_results => 2
  )
);
```

### Ejemplo Oficial de Consulta Estructurada con Filtros:
```sql
CREATE OR REPLACE FUNCTION support.data.get_customer_interactions(
  customer_email STRING COMMENT 'Email of the customer to look up'
)
RETURNS TABLE (
  interaction_date DATE,
  issue_category STRING,
  issue_description STRING,
  customer_name STRING
)
COMMENT 'Returns the 5 most recent support interactions for a customer.'
RETURN (
  SELECT CAST(date_time AS DATE), issue_category, issue_description, name
  FROM support.data.cust_service_data
  WHERE email = customer_email
  ORDER BY date_time DESC
  LIMIT 5
);
```

> ### ⚠️ Regla de Oro sobre las cláusulas `COMMENT`
> Los comentarios (`COMMENT`) en la función y en sus parámetros **NO son cosméticos ni opcionales**. El LLM del agente lee estas descripciones para saber qué hace la herramienta, cuándo debe invocarla y qué valores debe suministrarle en cada argumento.

---

## F. Prototipado Sin Código en AI Playground

El **AI Playground** de Databricks permite:
1. Probar modelos de lenguaje (Claude Sonnet 5, Gemini, GPT) en una interfaz interactiva.
2. Adjuntar herramientas gobernadas de Unity Catalog directamente con un clic.
3. Evaluar respuestas con jueces LLM integrados.
4. **Exportar el código del agente listo para producción** en cuadernos de Python con la clase `mlflow.pyfunc` de agente de herramientas para desplegarlo de inmediato.
