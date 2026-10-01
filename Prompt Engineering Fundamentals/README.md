# 🧠 Prompt Engineering Fundamentals

> **Proveedor:** Databricks Academy  
> **Código de Curso:** `ACAD-ALL-SLP-FREE-PEF-ENG-v1`  
> **Course ID:** `4733`  
> **Rol:** Generative AI Engineer / All Enterprise Roles  
> **Nivel:** Introductory  
> **Duración estimada:** 2 horas  
> **Accredible ID:** `AA-Prompt Engineering Fundamentals`  
> **Estado en Databricks Academy:** Completado 100% (`completed`)  
> **Puntuación en Examen de Acreditación:** 50.00 / 50.00 (100%)  
> **Fecha de Finalización:** 2026-09-21 02:12:55 UTC  
> **Enlace Oficial:** [Databricks Academy - Prompt Engineering Fundamentals](https://customer-academy.databricks.com/learn/courses/4733/prompt-engineering-fundamentals)

---

## 📌 Resumen Ejecutivo del Curso

El curso **Prompt Engineering Fundamentals** de Databricks Academy capacita a ingenieros y usuarios de negocio para maximizar el rendimiento y la precisión de los asistentes de Inteligencia Artificial empresariales (tales como Databricks Assistant, Mosaic AI Agent Framework y modelos de lenguaje fundacionales).

El programa aborda la mecánica interna de los modelos de lenguaje y los sistemas **RAG (Retrieval-Augmented Generation)**, establece el principio rector de **"Trust but Verify"** y la analogía del **"Brilliant Intern"**, y enseña la formulación estructurada de prompts mediante el marco **COIE** (*Context, Outcome, Instruction, Example*). Además, profundiza en el espectro técnico de técnicas de prompting: desde **Zero-Shot** y **Few-Shot**, hasta patrones avanzados de razonamiento como **Chain-of-Thought (CoT)**, **Self-Ask**, **Meta-Prompting** y encadenamiento secuencial (**Prompt Chaining**).

---

## 🎯 Objetivos de Aprendizaje Oficiales

1. **Arquitectura de Asistentes RAG:** Comprender el funcionamiento de un asistente RAG, cómo recupera activos de conocimiento empresarial internos y cuáles son sus límites operacionales.
2. **Marco COIE:** Aplicar de forma sistemática el marco *Context, Outcome, Instruction, Example* para redactar prompts rigurosos, orientados a resultados empresariales.
3. **Taxonomía de Técnicas de Prompting:** Diferenciar entre técnicas generativas (*Zero-Shot*, *Few-Shot*), técnicas de razonamiento (*Chain-of-Thought*, *Self-Ask*) y técnicas de flujo de trabajo (*Meta-Prompting*, *Prompt Chaining*), sabiendo cuándo aplicar cada una.
4. **Encadenamiento y Flujos Complejos:** Descomponer tareas multidimensionales en pipelines secuenciales de prompts donde la salida $O_t$ alimenta como contexto a la instrucción $I_{t+1}$.
5. **Evaluación y Verificación Crítica:** Auditar y refinar las respuestas generadas por IA mediante listas de verificación de exactitud, relevancia y mitigación de alucinaciones.

---

## 🧭 Estructura del Repositorio de Contenido

```
📁 Prompt Engineering Fundamentals/
├── 📄 README.md                                                  # Blueprint maestro y metadatos
├── 📁 00_Course_Overview/
│   └── 📄 01_Course_Introduction_and_Syllabus.md                # Sílabo, prerrequisitos y taxonomía
├── 📁 01_Prompt_Engineering_Foundations/
│   ├── 📄 01_AI_Assistants_and_Trust_but_Verify.md             # Analogía del "Brilliant Intern" y RAG
│   └── 📄 02_The_COIE_Framework_Deep_Dive.md                   # Context, Outcome, Instruction, Example
├── 📁 02_Content_Generation_Techniques/
│   ├── 📄 01_Zero_Shot_Prompting.md                             # Principios, casos de uso y limitaciones
│   └── 📄 02_Few_Shot_Prompting.md                              # Guía de tono, estructura y selección de ejemplos
├── 📁 03_Reasoning_and_Workflow_Techniques/
│   ├── 📄 01_Chain_of_Thought_and_Self_Ask_Reasoning.md        # CoT vs Self-Ask, resolución de problemas
│   └── 📄 02_Meta_Prompting_and_Prompt_Chaining.md             # Co-diseño de prompts y pipelines multi-etapa
└── 📁 04_Accreditation_Exam/
    ├── 📄 01_Official_Accreditation_Exam_Bank_10_Questions.md   # Banco 100% verificado (50/50) con justificaciones
    └── 📄 02_Accreditation_Status_and_Badge_Details.md         # Acreditación oficial y detalles de emisión
```

---

## 📊 Matriz Comparativa de Técnicas de Prompting

| Técnica | Categoría | Cuándo Usar | Entrada Típica | Beneficio Clave |
|---|---|---|---|---|
| **Zero-Shot** | Generación de Contenido | Tareas directas, consultas fácticas, resúmenes estándar donde el formato y tono no son críticos. | Instrucción clara directa + contexto. | Rapidez, menor costo en tokens, sin necesidad de curar ejemplos. |
| **Few-Shot** | Generación de Contenido | Cuando se requiere adherencia estricta a un formato, tono corporativo o esquema de salida (JSON/Markdown). | Instrucción + 1 a 3 pares de Entrada/Salida representativos. | Modela el comportamiento y formato sin necesidad de fine-tuning. |
| **Chain-of-Thought (CoT)** | Razonamiento | Problemas lógicos, deducciones de negocio, cálculos o auditorías de procesos. | Prompt con instrucción de pensar "paso a paso" antes de concluir. | Transparencia total en deducciones y premisas; permite detectar errores lógicos. |
| **Self-Ask** | Razonamiento | Problemas abiertos o ambiguos con dependencias ocultas de información. | Prompt que instruye al modelo a formular y responder sus propias sub-preguntas. | Descubre ángulos ciegos, factores no considerados y desglosa la complejidad. |
| **Meta-Prompting** | Flujo de Trabajo | Diseño de prompts para producción, agentes o plantillas estandarizadas. | Colaboración interactiva pidiéndole a la IA que redacte o refine el prompt óptimo. | Aprovecha el conocimiento del LLM sobre sí mismo para optimizar la formulación. |
| **Prompt Chaining** | Flujo de Trabajo | Procesos empresariales complejos con múltiples fases (ej. extraer $\to$ analizar $\to$ redactar). | Salida de un prompt conectada como entrada del siguiente ($O_t \to I_{t+1}$). | Mantiene el contexto enfocado, aísla fallos y garantiza calidad en cada hito. |

---

## 🏆 Acreditación Oficial Databricks Academy

- **Evaluación:** `Prompt Engineering Fundamentals - Accreditation` (ID Objeto: `48471`)
- **Puntuación obtenida:** **50 / 50 puntos (100%)**
- **Insignia Digital:** Emitida vía plataforma **Accredible** (`AA-Prompt Engineering Fundamentals`).
- **Validación del Banco:** 10 de 10 preguntas extraídas, analizadas y justificadas conforme a la documentación oficial de Databricks.
