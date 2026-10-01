# 01. Introduction to Agent Bricks

> **Módulo SCORM 4 — Conferencia Magistral**  
> **Tema:** Plano de Control de Agent Bricks, Optimización Automática, Genie, Knowledge Assistant y Agente Supervisor  
> **Duración estimada:** 25 min  

---

## 📌 Resumen (Overview)

**Agent Bricks** es la capacidad insignia de Databricks para construir agentes de IA de alta calidad y listos para producción sin requerir lentos procesos manuales de prueba y error.

Esta conferencia aborda:
1. Las razones por las cuales construir agentes de IA en empresas es complejo hoy en día: evaluación manual tediosa, demasiadas perillas de ajuste (*prompts, modelos, herramientas, parámetros*) y el conflicto constante entre costo y calidad.
2. Los **4 pilares del plano de control de Agent Bricks**:
   - **Razonamiento Contextual:** Capas semánticas y Genie para dar contexto preciso a las búsquedas.
   - **Cualquier Modelo o Framework:** Cero bloqueos de proveedor (*no lock-in*).
   - **Evaluación y Mejora Continua:** Jueces LLM y trazabilidad integrada con MLflow.
   - **Gobernanza Unificada en Unity Catalog:** Un único sistema de registro para datos, modelos, herramientas y linaje.
3. Cómo Agent Bricks crea automáticamente **bancos de evaluación (benchmarks)** y auto-optimiza el agente a partir de una descripción de alto nivel.
4. Las ofertas de Agent Bricks según el tipo de datos:
   - **Datos Estructurados:** Agentes Genie (*Genie Agents*).
   - **Datos No Estructurados:** Knowledge Assistant y AI Functions (`ai_parse_document`, `ai_extract`, `ai_classify`, `ai_prep_search`).
   - **Datos Híbridos (Orquestación):** Agente Supervisor (*Supervisor Agent*).
5. Consulta programática de un Knowledge Assistant mediante la **API Responses compatible con OpenAI**.

---

## 🎯 Objetivos de Aprendizaje

- **Explicar los 3 grandes problemas** que resuelve Agent Bricks: evaluación difícil, demasiadas perillas de ajuste y el dilema costo-calidad.
- **Detallar los 4 pilares** del plano de control de Agent Bricks.
- **Comprender la optimización automática:** cómo Agent Bricks genera benchmarks sintéticos de investigación y afina los parámetros del agente.
- **Identificar el componente correcto según el tipo de datos:**
  - *Genie Agents:* El especialista en datos estructurados (tablas, métricas certificadas, Text-to-SQL).
  - *Knowledge Assistant:* El especialista en documentos no estructurados (PDFs, manuales, políticas con citas bibliográficas).
  - *Supervisor Agent:* El orquestador que coordina a los especialistas en un solo flujo gobernado.
- **Escribir código de integración** para invocar un Knowledge Assistant desplegado mediante el cliente estándar de OpenAI en Python.

---

## A. Los Desafíos de Construir Agentes Hoy

En el desarrollo tradicional de agentes, los equipos se enfrentan a tres cuellos de botella:
1. **La evaluación es mayoritariamente manual:** Requiere semanas de revisión por parte de expertos humanos (SMEs) que no siempre están disponibles.
2. **Demasiadas perillas de configuración (*tuning knobs*):** Elegir entre cientos de modelos, ajustar hiperparámetros de temperatura, redactar instrucciones de sistema complejas y definir esquemas de herramientas se convierte en un juego de ensayo y error.
3. **El dilema Costo vs. Calidad:** Los modelos más inteligentes son exponencialmente más costosos y lentos; los modelos ligeros cometen errores lógicos frecuentes.

---

## B. Agent Bricks: El Plano de Control Empresarial

```
┌────────────────────────────────────────────────────────────────────────┐
│                      AGENT BRICKS CONTROL PLANE                        │
│               Build  ·  Deploy  ·  Evaluate  ·  Govern                 │
├────────────────────┬────────────────────┬──────────────────────────────┤
│ RAZONAMIENTO       │ CUALQUIER MODELO   │ EVALUAR Y MEJORAR            │
│ CONTEXTUAL         │ O FRAMEWORK        │ Jueces LLM integrados        │
│ Semántica + Genie  │ Cero lock-in       │ Trazabilidad MLflow          │
├────────────────────┴────────────────────┴──────────────────────────────┤
│                  GOBERNANZA UNIFICADA EN UNITY CATALOG                 │
│         Agentes · Modelos · Datos · Herramientas · Linaje · Auditoría  │
└────────────────────────────────────────────────────────────────────────┘
```

### Los 4 Pilares Fundamentales:

#### 1. Razonamiento Contextual (Contextual Reasoning)
Los agentes fallan si carecen del contexto de negocio. Agent Bricks suministra:
- **Semántica de Negocio:** Métricas, dimensiones y reglas certificadas que los agentes pueden utilizar con certeza.
- **Semántica Aprendida:** Historial de consultas, linaje y patrones de uso inferidos de la plataforma.
- **Semántica Personalizada:** Reglas de dominio, sinónimos y directivas aportadas por los equipos.
- **Genie (Text-to-SQL):** Preguntas en lenguaje natural traducidas fielmente contra tablas gobernadas.

#### 2. Cualquier Modelo o Framework (Any Model or Framework)
No impone modelos propietarios. Los modelos son componentes intercambiables en función del precio y el rendimiento.

#### 3. Evaluar y Mejorar (Evaluate & Improve)
- **Generación Automática de Benchmarks:** Si no dispones de datos etiquetados, genera datasets de evaluación sintéticos respaldados por investigación (*synthetic data generation*).
- **Auto-Optimización:** A partir de una descripción en lenguaje natural de la tarea, Agent Bricks ajusta automáticamente los prompts, la recuperación y los modelos para encontrar el equilibrio ideal entre costo y calidad.

#### 4. Catálogo y Gobernanza Unificada (Unified Governance)
Unity Catalog actúa como la única fuente de verdad para controlar permisos, rastrear el linaje de datos hacia los modelos y auditar cada decisión del agente.

---

## C. Especialización de Agentes según el Tipo de Datos

Agent Bricks divide el trabajo agéntico según la naturaleza de la información:

```
┌─────────────────────────────────┬─────────────────────────────────┐
│     DATOS ESTRUCTURADOS         │     DATOS NO ESTRUCTURADOS      │
│  (Tablas, métricas, reglas SQL) │  (PDFs, contratos, wikis, docs) │
├─────────────────────────────────┼─────────────────────────────────┤
│          GENIE AGENTS           │       KNOWLEDGE ASSISTANT       │
│  Especialista en datos          │  Respuestas fundamentadas con   │
│  estructurados empresariales.   │  citas precisas a documentos.   │
│                                 ├─────────────────────────────────┤
│                                 │          AI FUNCTIONS           │
│                                 │  ai_parse_document, ai_extract, │
│                                 │  ai_classify, ai_prep_search    │
└─────────────────────────────────┴─────────────────────────────────┘
                                 ▲
                                 │ Orquesta ambos mundos
┌────────────────────────────────┴──────────────────────────────────┐
│                         SUPERVISOR AGENT                          │
│ Capa de orquestación que coordina Genie Agents, Knowledge         │
│ Assistant, agentes custom y servidores MCP en un único flujo.     │
└───────────────────────────────────────────────────────────────────┘
```

### 1. Datos Estructurados: Genie Agents
- No son simples cajas de texto a SQL genéricas; son agentes de dominio configurados con tablas confiables, métricas de negocio y consultas de ejemplo.
- Capaces de analizar volúmenes y realizar analítica empresarial compleja.

### 2. Datos No Estructurados: Knowledge Assistant y AI Functions
- **Knowledge Assistant:** Permite a usuarios de negocio desplegar asistentes de preguntas y respuestas directamente desde la interfaz gráfica sobre fuentes de conocimiento en AI Search, devolviendo **respuestas fundamentadas con citas directas** a los documentos fuente.
- **Funciones SQL de IA (AI Functions):**
  - `ai_parse_document`: Extrae texto y estructura de documentos escaneados, haciéndolos consultables en SQL.
  - `ai_extract`: Extrae entidades clave (fechas, montos, nombres).
  - `ai_classify`: Clasifica textos o incidencias en categorías.
  - `ai_prep_search`: Prepara textos para indexación vectorial.

### 3. Orquestación Híbrida: Supervisor Agent
- No es un especialista en un dato específico, sino el director de orquesta.
- Recibe la petición del usuario, consulta a Genie para cifras numéricas en bases de datos relacionales, consulta a Knowledge Assistant para cláusulas en contratos o manuales en PDF, y genera una respuesta única consolidada.

---

## D. Consulta Programática de un Knowledge Assistant

Cuando un Knowledge Assistant se despliega mediante la interfaz de Agent Bricks, queda publicado tras un endpoint de **Model Serving**.

Puedes consultarlo de forma programática utilizando el cliente oficial de OpenAI en Python:

```python
from openai import OpenAI

# Configuración del cliente con el token y URL de Databricks
client = OpenAI(
    api_key="<DATABRICKS_PERSONAL_ACCESS_TOKEN>",
    base_url="https://<databricks-instance>/serving-endpoints"
)

# Invocación mediante la API Responses
# Nota: El parámetro 'model' corresponde al nombre del endpoint del asistente (ka-XXXXXXXX-endpoint)
response = client.responses.create(
    model="ka-3f1c9a2b-endpoint",
    input=[
        {"role": "user", "content": "¿Cuáles son las condiciones de garantía del producto BlendMaster Elite 4000?"}
    ]
)

print(response.output_text)
```

> ### 💡 Clave para Evaluaciones y Arquitectura
> Al invocar un Knowledge Assistant desplegado, el valor de `model` **NO es el nombre del modelo fundacional (como claude o gpt)**, sino el nombre del endpoint asignado al asistente (visible en el panel *Get code* del asistente). Cada petición consulta el endpoint ya servido y no reentrena al modelo.
