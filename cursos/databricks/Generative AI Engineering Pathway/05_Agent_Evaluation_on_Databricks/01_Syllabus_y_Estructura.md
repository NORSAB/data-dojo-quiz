# Curso 5: Agent Evaluation on Databricks (ID 5062)

## Información del Curso
- **Código LMS:** `5062`
- **Nombre Oficial:** Agent Evaluation on Databricks
- **Proveedor:** Databricks Academy
- **Tipo de Contenido:** Lecciones Teóricas SCORM + Demos Técnicas en Video + Laboratorios + Examen Oficial
- **Evaluación Asociada:** `Quiz - Agent Evaluation on Databricks` (`LO ID: 52434`, 20 preguntas)

---

## 📋 Estructura de Módulos y Lecciones

| Módulo / Lección | ID LO | Tipo | Contenido y Objetivos |
|---|---|---|---|
| **Before we get started** | `52347` | Authoring | Requisitos del laboratorio y variables de entorno |
| **Course Logistics Review** | `52441` | HTML Page | Introducción al framework de evaluación de Databricks |
| **The Challenge of Evaluating AI Agents** | `52875` | SCORM Package | Naturaleza no determinista de los LLMs, insuficiencia de pruebas tradicionales basadas en aserciones |
| **Demo: Agent Setup** | `52855` | Video | Configuración del agente base y objeto `DA` (Databricks Academy) |
| **MLflow's Evaluation Framework** | `52871` | SCORM Package | Componentes de `mlflow.genai.evaluate()`: dataset, scorers (jueces) y función de predicción |
| **Built-In Judges** | `64737` | SCORM Package | Jueces predefinidos: `Correctness` (requiere ground truth), `RetrievalGroundedness`, `RelevanceToQuery`, `Safety` |
| **Demo: Using MLflow Built-In Judges** | `52851` | Video | Ejecución práctica de jueces estándar en un experimento MLflow |
| **Guideline Judges** | `64738` | SCORM Package | Jueces basados en políticas y reglas de negocio (`Guidelines`, `ExpectationsGuidelines`) que retornan `Feedback` (yes/no) |
| **Demo: Guideline Judges with MLflow** | `52847` | Video | Configuración de directrices lingüísticas y de estilo (ej. regla de idioma español) |
| **Custom Judges and Feedback** | `64739` | SCORM Package | Creación de evaluadores basados en trazas (`make_judge`), scorers programáticos y feedback humano de SMEs |
| **Demo: Custom Judges with MLflow** | `52843` | Video | Validación de herramientas y parámetros inspeccionando spans de trazas |
| **Offline vs. Online Evaluation Strategies** | `52863` | SCORM Package | Ciclo de retroalimentación continua: inferencia en producción $\rightarrow$ curación de casos límite $\rightarrow$ validación offline |
| **Course Summary and Next Steps** | `52376` | HTML Page | Resumen de gobernanza de calidad y preparación de examen |
| **Quiz - Agent Evaluation on Databricks** | `52434` | Test | Evaluación oficial de 20 preguntas |

---

## 🎯 Competencias Clave Evaluadas

1. **Inadecuación de Pruebas Tradicionales:** Las aserciones deterministas de código (`assert output == "expected"`) fallan con LLMs porque estos son no deterministas y existen infinitas respuestas sintácticamente distintas pero semánticamente correctas.
2. **Los 3 Componentes de `mlflow.genai.evaluate()`:**
   - **Evaluation Dataset:** Conjunto representativo de entradas de prueba (consultas, contexto, expectativas).
   - **Scorers / Judges:** Uno o más evaluadores (built-in, directrices o personalizados).
   - **Predict Function:** La función o endpoint que produce la salida del agente a evaluar.
3. **Jueces Integrados (Built-In Judges):**
   - `Correctness`: Requiere obligatoriamente **Ground Truth** (`expectations` en el dataset).
   - `RetrievalGroundedness`: Evalúa si la respuesta está respaldada por el contexto recuperado (no alucinada).
   - `RelevanceToQuery`: Mide si la respuesta atiende la intención del usuario.
   - `Safety`: Valida toxicidad, lenguaje ofensivo o violaciones de seguridad.
4. **Jueces de Directrices (Guideline Judges):**
   - Evalúan cumplimiento de políticas mediante reglas en lenguaje natural; retornan objetos `Feedback` con valores categóricos `yes` o `no`.
5. **Importancia del campo `rationale`:**
   - Cada juez debe emitir una justificación (`rationale`) para permitir la depuración humana, verificar que el juez razona correctamente y detectar patrones de falla sistemáticos.
6. **El Ciclo Virtuoso Offline-Online:**
   - Despliegue con logging en Inference Tables $\rightarrow$ Detección de fallas y casos difíciles en producción $\rightarrow$ Inclusión de trazas de producción en el dataset offline $\rightarrow$ Reevaluación y mejora antes del siguiente redespliegue.
