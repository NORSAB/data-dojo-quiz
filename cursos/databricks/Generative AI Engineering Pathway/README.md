# 🥋 Generative AI Engineering Pathway — Databricks Academy

> **Plan de Aprendizaje Oficial:** `Learning Plan 315`  
> **URL Oficial:** [Databricks Academy - Generative AI Engineering Pathway](https://customer-academy.databricks.com/learn/learning-plans/315/generative-ai-engineering-pathway?generated_by=274087&hash=c8f9f9f2cb57897bc03a777d1fdc0624b068e94b)  
> **Estado:** 100% Completado y Documentado (Lectures SCORM + 5 Exámenes Oficiales)  
> **Total de Cursos:** 7 cursos  
> **Total de Lecciones Teóricas Extraídas:** 15 módulos SCORM y guías técnicas con código ejecutable literal, tablas comparativas y diagramas Mermaid.  
> **Total de Preguntas Oficiales Extraídas:** 90 preguntas de examen con enunciados literales, todas sus opciones, respuestas correctas verificadas y justificaciones técnicas oficiales (EN / ES).

---

## 📚 Mapa General de Cursos del Pathway

| # | ID Curso | Nombre del Curso | Tipo | Lecciones Extraídas | Examen Oficial | Preguntas |
|---|---|---|---|---|---|---|
| **01** | `1765` | **Generative AI Fundamentals** | Teórico / SCORM | 2 Lectures (M01, M02) | Evaluado en 1811 | N/A |
| **02** | `1811` | **Generative AI Fundamentals Accreditation** | Acreditación Oficial | CheatSheet Repaso | Examen Oficial de Acreditación | **10 Preguntas** |
| **03** | `5857` | **Building RAG Agents with Agent Bricks** | Práctico / SCORM | 3 Lectures (M01, M02, M03) + Guía Arq. | Quiz - Building RAG Agents | **20 Preguntas** |
| **04** | `5856` | **Building Agentic Applications on Databricks** | Práctico / SCORM | 3 Lectures (M01, M02, M03) + Guía SDK | Quiz - Building Agentic Applications | **20 Preguntas** |
| **05** | `5062` | **Agent Evaluation on Databricks** | Práctico / SCORM | 6 Lectures (M01 a M06) + Guía Judges | Quiz - Agent Evaluation | **20 Preguntas** |
| **06** | `5855` | **Deploying and Monitoring Agent Applications on Databricks** | Práctico / SCORM | 3 Lectures (M01, M02, M03) + Guía Deploy | Quiz - Deploying & Monitoring | **20 Preguntas** |
| **07** | `2683` | **Preparing for Databricks Certification Exams** | Guía Oficial / Rise | Guía Oficial + Estrategia Estudio | Preparación General | N/A |
| **TOTAL** | — | **7 Cursos Integrados** | — | **18 Módulos Teóricos** | **5 Exámenes Oficiales** | **90 Preguntas** |

---

## 🗂️ Estructura Completa de Archivos del Repositorio

```
Generative AI Engineering Pathway/
├── README.md                                                        <- Índice maestro consolidado del Pathway
│
├── 01_Generative_AI_Fundamentals/                                   <- Curso 1765
│   ├── 01_Syllabus_and_Overview.md                                  <- Temario, objetivos y estructura general
│   ├── 02_M01_Lecture_Introduction_to_Generative_AI.md               <- SCORM: Conceptos de GenAI, LLMs y modelos fundacionales
│   └── 03_M02_Lecture_Finding_Success_with_Generative_AI.md          <- SCORM: Casos de uso, ROI, riesgos y gobernanza
│
├── 02_Generative_AI_Fundamentals_Accreditation/                     <- Curso 1811
│   ├── 01_Examen_Oficial_10_Preguntas_Literales.md                  <- 10 preguntas literales EN/ES con justificación técnica
│   └── 02_CheatSheet_Repaso_Rapido.md                               <- Resumen de alta densidad para aprobación inmediata
│
├── 03_Building_RAG_Agents_with_Agent_Bricks/                        <- Curso 5857
│   ├── 01_Syllabus_y_Estructura.md                                  <- Temario, demos y arquitectura RAG
│   ├── 02_Examen_Oficial_20_Preguntas_Literales.md                  <- 20 preguntas oficiales de evaluación EN/ES
│   ├── 03_Arquitectura_RAG_y_Agent_Bricks.md                        <- Pipeline de ingestión, chunking y búsqueda vectorial
│   ├── 04_M01_Agent_Bricks_and_Document_Search.md                   <- SCORM: Agent Bricks, componentes y diseño RAG
│   ├── 05_M02_Document_Preparation_and_Vector_Search.md             <- SCORM: ai_prep_search, embeddings y Vector Search Endpoints
│   └── 06_M03_AI_Gateway_and_App_Integration.md                     <- SCORM: Unity Catalog AI Gateway, rate limits y guardrails
│
├── 04_Building_Agentic_Applications_on_Databricks/                   <- Curso 5856
│   ├── 01_Syllabus_y_Estructura.md                                  <- Temario oficial y patrones agentic
│   ├── 02_Examen_Oficial_20_Preguntas_Literales.md                  <- 20 preguntas oficiales de evaluación EN/ES
│   ├── 03_Orquestacion_Multiagente_OpenAI_SDK.md                    <- Patrones de routing, handoffs y coordinación
│   ├── 04_M01_Agents_MCP_and_AI_Governance.md                       <- SCORM: Model Context Protocol (MCP) y gobernanza en UC
│   ├── 05_M02_Building_Agents_OpenAI_SDK_MLflow.md                  <- SCORM: OpenAI Agents SDK, Runner y MLflow Tracing
│   └── 06_M03_Agent_Bricks_and_Genie.md                             <- SCORM: Integración de Genie Spaces y herramientas analíticas
│
├── 05_Agent_Evaluation_on_Databricks/                               <- Curso 5062
│   ├── 01_Syllabus_y_Estructura.md                                  <- Temario del framework de evaluación MLflow
│   ├── 02_Examen_Oficial_20_Preguntas_Literales.md                  <- 20 preguntas oficiales de evaluación EN/ES
│   ├── 03_Guia_MLflow_Judges_Evaluacion.md                          <- Taxonomía de evaluadores y métricas agregadas
│   ├── 04_M01_Challenge_of_Evaluating_AI_Agents.md                  <- SCORM: El reto no determinista de evaluar agentes
│   ├── 05_M02_MLflows_Evaluation_Framework.md                       <- SCORM: mlflow.genai.evaluate, evaluation datasets y scorers
│   ├── 06_M03_BuiltIn_Judges.md                                     <- SCORM: Jueces built-in (Safety, Relevance, Groundedness)
│   ├── 07_M04_Guideline_Judges.md                                   <- SCORM: Guidelines en lenguaje natural y expectativas
│   ├── 08_M05_Custom_Judges_and_Feedback.md                         <- SCORM: make_judge(), decorador @scorer y serialización
│   └── 09_M06_Offline_vs_Online_Evaluation_Strategies.md           <- SCORM: Evaluación offline en CI/CD vs. online en producción
│
├── 06_Deploying_and_Monitoring_Agent_Applications_on_Databricks/     <- Curso 5855
│   ├── 01_Syllabus_y_Estructura.md                                  <- Ciclo completo: Build, Deploy, Observe, Monitor
│   ├── 02_Examen_Oficial_20_Preguntas_Literales.md                  <- 20 preguntas oficiales de evaluación EN/ES
│   ├── 03_Despliegue_Observabilidad_Monitoreo.md                    <- Databricks Apps, DABs, FastAPI y esquemas OpenTelemetry
│   ├── 04_M01_Agent_Deployment_on_Databricks.md                     <- SCORM: Databricks Apps, Serverless, databricks.yml y secretos
│   ├── 05_M02_Tool_Integration_and_Observability.md                 <- SCORM: Servidores MCP, lifespan FastAPI y trazas en UC
│   └── 06_M03_Production_Evaluation_and_Monitoring.md               <- SCORM: Jueces multi-turn, backfill de métricas y archivo Delta
│
└── 07_Preparing_for_Databricks_Certification_Exams/                 <- Curso 2683
    ├── 01_Guia_Oficial_Certificaciones_Databricks.md                <- Guía oficial completa de acreditaciones y certificaciones
    └── 02_Estrategia_Estudio_y_Examen.md                            <- Metodología y plan de estudio por dominios
```

---

## 🎯 Puntos Clave de Trazabilidad y Calidad

1. **Extracción Verbatim (100% Literal):** Ninguna pregunta, opción de examen ni bloque de código fue modificado, abreviado ni parafraseado.
2. **Código y Configuración Completos:** Incluye snippets funcionales en Python, decoradores `@mlflow.trace` y `@scorer`, manifiestos `databricks.yml`, integraciones FastAPI con lifespan, y consultas SQL sobre tablas Delta OpenTelemetry.
3. **Diagramas de Arquitectura:** Todos los conceptos clave de flujo (MCP lifecycle, multi-agent routing, RAG pipeline, scorer state machine, trace archival) están modelados en diagramas **Mermaid**.
4. **Bilingüe EN / ES:** Los 5 exámenes oficiales (90 preguntas en total) cuentan con su texto original en inglés y traducción técnica al español, con sus 4-5 opciones y la justificación oficial verificada.
