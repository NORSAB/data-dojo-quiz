# Seguridad de sistemas de IA

## Propósito de la lección

La seguridad de un sistema de IA protege la aplicación completa: datos, modelos, prompts, salidas, infraestructura, usuarios y procesos de auditoría. La lección explica por qué este trabajo resulta difícil, presenta un framework de seguridad basado en componentes, relaciona los riesgos prioritarios con herramientas de Databricks e introduce Llama Guard como protección para prompts y respuestas.

![Riesgos de seguridad de los sistemas de IA](../assets/images/ai_security_risks.png)

## 1. Principales riesgos de seguridad

| Área de riesgo | Preocupación de seguridad |
|---|---|
| Acceso y gobierno de datos | Acceso no autorizado, permisos débiles, ausencia de linaje y desconocimiento del origen o uso de los datos. |
| Seguimiento y auditoría de modelos | Imposibilidad de determinar qué modelo se utilizó, cómo fue evaluado, qué cambió o quién accedió a él. |
| Poisoning e injection | Actores maliciosos manipulan datos, prompts, modelos o flujos para modificar el comportamiento. |
| Información sensible | Datos confidenciales o de identificación personal pueden exponerse mediante entradas, estado interno o salidas. |
| Drift y calidad | Los cambios en los datos o en el comportamiento del modelo pueden reducir la calidad e introducir nuevas vulnerabilidades. |
| Activos de terceros | Los modelos open source o desarrollados externamente pueden incorporar riesgos que la organización no controla por completo. |

La seguridad debe abordar tanto ataques intencionales como fallos operativos.

## 2. Por qué la seguridad es prioritaria

![Encuesta que presenta la seguridad como la principal preocupación](../assets/images/security_top_concern_survey.png)

La gráfica de la encuesta sitúa la seguridad por encima del costo y la confiabilidad:

- **Seguridad:** 21 % como preocupación principal y 46 % como preocupación.
- **Costo:** 19 % como preocupación principal y 43 % como preocupación.
- **Confiabilidad:** 11 % como preocupación principal y 41 % como preocupación.

El resultado ilustra la presión que enfrentan las organizaciones al desplegar cargas de IA y machine learning. Otros asuntos de gobierno —costo, confiabilidad, facilidad de administración, soberanía y recursos— también importan, pero la seguridad encabeza la gráfica.

## 3. Por qué la seguridad de IA es difícil

![Desafíos de seguridad entre diferentes equipos](../assets/images/ai_security_challenges.png)

Normalmente ningún grupo profesional posee por sí solo la visión completa:

- Los científicos de datos pueden asumir la seguridad de los datos y del desarrollo de modelos sin contar con experiencia previa en seguridad.
- Los especialistas en seguridad pueden no estar familiarizados con el comportamiento probabilístico de la IA.
- Los ingenieros de ML pueden pasar de arquitecturas relativamente simples a enormes redes neuronales distribuidas.
- Los equipos de producción deben detectar incidentes y responder a ellos en tiempo real.

Los sistemas de IA son probabilísticos, no deterministas, por lo que su comportamiento resulta menos predecible que el del software convencional. Red teaming, pruebas adversariales, monitoreo y respuesta rápida a incidentes se convierten en responsabilidades compartidas.

## 4. Descomponer el sistema en componentes

![Descomposición de seguridad de una arquitectura RAG](../assets/images/simplifying_ai_system_security_rag.png)

Una forma práctica de simplificar la seguridad consiste en identificar y proteger cada componente. En un sistema RAG se deben proteger y gobernar:

1. La consulta de entrada.
2. El modelo de embeddings.
3. Los documentos.
4. La base de datos vectorial.
5. El modelo generativo.
6. La respuesta de salida.
7. Los datos y metadatos generados.

El mismo principio se aplica a arquitecturas más complejas: proteger el sistema completo y, al mismo tiempo, asignar controles a cada componente e interfaz.

## 5. DASF y su modelo de componentes

![Vista general del framework DASF](../assets/images/dasf_component_framework_overview.png)

El framework presentado en la lección surgió de talleres con la industria e identifica:

- **12 componentes de un sistema de IA.**
- **55 riesgos asociados.**
- Enfoques de mitigación aplicables a diferentes roles relacionados con IA.

### Nota sobre el nombre

Las diapositivas desarrollan DASF como **Data and AI Security Framework**. Los materiales oficiales actuales de Databricks utilizan **Databricks AI Security Framework**. En este curso, ambas referencias aluden al framework basado en componentes identificado mediante el acrónimo DASF.

Referencia oficial: [Prácticas recomendadas de seguridad, cumplimiento y privacidad de Databricks](https://docs.databricks.com/aws/en/lakehouse-architecture/security-compliance-and-privacy/best-practices).

## 6. Los doce componentes fundamentales

![Los doce componentes de DASF](../assets/images/dasf_twelve_components.png)

| # | Componente | # | Componente |
|---:|---|---:|---|
| 1 | Raw Data | 7 | Models |
| 2 | Data Prep | 8 | Model Management |
| 3 | Datasets | 9 | Model Serving and Inference Request |
| 4 | Data Catalog and Governance | 10 | Model Serving and Inference Response |
| 5 | Algorithms | 11 | Operations |
| 6 | Evaluation | 12 | Platform Security |

El curso destaca los componentes **4, 5, 6, 8, 11 y 12** para desarrolladores, ingenieros y científicos que trabajan con GenAI.

## 7. Seis áreas prioritarias para profesionales de GenAI

![Seis áreas prioritarias del framework DASF](../assets/images/dasf_six_genai_focus_areas.png)

| Componente | Responsabilidad profesional |
|---|---|
| 4. Data Catalog and Governance | Centralizar permisos, linaje, auditoría, descubrimiento, calidad y confiabilidad durante el ciclo de vida de los datos. |
| 5. Algorithms | Abordar la mayor superficie de ataque de los LLM, incluidos poisoning y comportamientos adversariales en sistemas en línea. |
| 6. Evaluation | Detectar deterioros de rendimiento o calidad provocados por fallos de seguridad en el sistema o sus componentes. |
| 8. Model Management | Rastrear, descubrir, gobernar, cifrar y controlar el acceso a modelos desde desarrollo hasta producción. |
| 11. Operations | Incorporar seguridad en validación, pruebas, monitoreo y colaboración de MLOps y LLMOps. |
| 12. Platform Security | Proteger la plataforma mediante penetration testing, bug bounties, monitoreo, respuesta a incidentes y cumplimiento. |

Estas áreas conectan el gobierno, el comportamiento de los modelos, los controles del ciclo de vida, las operaciones y la infraestructura.

## 8. Capacidades de seguridad de Databricks

![Áreas de DASF relacionadas con la plataforma Databricks](../assets/images/databricks_security_platform_mapping.png)

| Área de seguridad | Herramientas presentadas |
|---|---|
| Catálogo y gobierno | Unity Catalog |
| Algoritmos | Model Serving y Lakehouse Monitoring |
| Evaluación | MLflow y Lakehouse Monitoring |
| Administración de modelos | MLflow y Unity Catalog |
| Operaciones | Asset Bundles, CLI y Secrets |
| Seguridad de plataforma | Arquitectura cloud y servicios serverless |

La plataforma representada también incluye Mosaic AI, Delta Live Tables, Workflows, Databricks SQL, DatabricksIQ, Unity Catalog y Delta Lake UniForm.

## 9. Unity Catalog y Mosaic AI

![Herramientas principales de seguridad en Unity Catalog y Mosaic AI](../assets/images/key_security_tooling_unity_catalog_mosaic_ai.png)

### Unity Catalog

Unity Catalog proporciona gobierno centralizado para datos y activos de IA mediante:

- Administración de permisos y acceso.
- Gobierno de modelos GenAI.
- Seguimiento de linaje end-to-end.
- Gobierno de índices de Vector Search utilizados para recuperar documentos.
- Uso de activos entre diferentes workspaces.

Estos controles permiten determinar qué datos se utilizaron, cómo se desplazaron, dónde está desplegado un modelo y quién puede acceder a cada activo.

### Mosaic AI

Mosaic AI aporta controles de producción y evaluación mediante:

- Model Serving escalable y seguro.
- Guardrails como Safety Filter y Llama Guard.
- MLflow Experiment Tracking.
- `mlflow.evaluate`.
- Monitoreo continuo de calidad y rendimiento.

## 10. Llama Guard

![Taxonomía de riesgos utilizada por Llama Guard](../assets/images/llama_guard_risk_taxonomy.png)

Llama Guard es un modelo de salvaguarda que clasifica riesgos relacionados con prompts y respuestas de un LLM. Necesita dos elementos:

1. Una **taxonomía de riesgos** para realizar la clasificación.
2. Una **directriz** que establezca la acción correspondiente después de detectar el riesgo.

La taxonomía presentada contiene:

- Violencia y odio.
- Contenido sexual.
- Armas de fuego y armas ilegales.
- Sustancias reguladas o controladas.
- Suicidio y autolesiones.
- Planificación delictiva.

Este control basado en otro modelo resulta más robusto que depender únicamente de una instrucción escrita dentro del prompt.

## 11. Input Guard y Output Guard

![Protecciones de entrada y salida alrededor de un LLM](../assets/images/llama_guard_input_output_guards.png)

La salvaguarda puede operar a ambos lados del LLM:

```text
Consulta del usuario -> Input Guard -> LLM -> Output Guard -> Respuesta
```

- **Input Guard:** clasifica la solicitud antes de que el LLM la procese.
- **Output Guard:** clasifica la respuesta generada antes de entregarla al usuario.

Este diseño por capas puede bloquear un prompt malicioso en la entrada y también impedir una salida perjudicial si el primer control no detectó el riesgo.

## Conceptos clave para el simulador

- La seguridad de IA comprende datos, modelos, aplicaciones, infraestructura, usuarios y auditorías.
- Es compleja porque los sistemas son probabilísticos, distribuidos y compartidos entre varias disciplinas profesionales.
- La descomposición por componentes vuelve más manejable un problema de seguridad complejo.
- DASF identifica 12 componentes y 55 riesgos asociados.
- El curso prioriza catálogo y gobierno, algoritmos, evaluación, administración de modelos, operaciones y seguridad de plataforma.
- Unity Catalog proporciona permisos centralizados, linaje, auditoría y gobierno de activos de IA.
- Mosaic AI, MLflow, Model Serving y Lakehouse Monitoring apoyan el despliegue y la evaluación segura.
- Llama Guard puede clasificar prompts y respuestas mediante protecciones de entrada y salida.
