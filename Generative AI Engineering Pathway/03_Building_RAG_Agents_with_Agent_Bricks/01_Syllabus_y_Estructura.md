# Curso 3: Building RAG Agents with Agent Bricks (ID 5857)

## Información del Curso
- **Código LMS:** `5857`
- **Nombre Oficial:** Building RAG Agents with Agent Bricks
- **Proveedor:** Databricks Academy
- **Tipo de Contenido:** Lecciones Teóricas SCORM + Demos Técnicas en Video + Examen Oficial
- **Evaluación Asociada:** `Quiz - Building RAG Agents with Agent Bricks` (`LO ID: 64375`, 20 preguntas)

---

## 📋 Estructura de Módulos y Lecciones

| Módulo / Lección | ID LO | Tipo | Contenido y Objetivos |
|---|---|---|---|
| **Before we get started** | `63867` | Authoring | Requisitos técnicos y configuración de workspace |
| **Course Logistics Review** | `64356` | HTML Page | Resumen de logística y objetivos |
| **Agent Bricks for Retrieval and Context Engineering** | `64405` | SCORM Package | Fundamentos de RAG, Knowledge Assistant, límites de contexto y arquitectura declarativa |
| **Demo: Exploring the Knowledge Assistant** | `64371` | Video | Configuración de fuentes en Unity Catalog (Volumes y Tables) e interacción con Knowledge Assistant |
| **Document Parsing and Chunking Strategies** | `64401` | SCORM Package | `ai_parse_document`, parsing estructurado, `ai_prep_search`, estrategias de chunking y filtros de longitud |
| **Demo: Transforming PDFs to Structured Data** | `64367` | Video | Procesamiento de PDFs no estructurados con `READ_FILES` y `variant_explode` en Databricks SQL |
| **AI Search on Databricks** | `64397` | SCORM Package | Databricks AI Search (Vector Search), Delta Sync, Change Data Feed, pipelines CONTINUOUS vs TRIGGERED |
| **Demo: Chunking PDFs and Vector Search** | `64363` | Video | Creación de índices vectoriales, cálculo de embeddings y búsqueda por similitud coseno |
| **Course Summary and Next Steps** | `63881` | HTML Page | Resumen del curso y preparación para el examen |
| **Quiz - Building RAG Agents with Agent Bricks** | `64375` | Test | Evaluación oficial de 20 preguntas |

---

## 🎯 Competencias Clave Evaluadas

1. **Context Engineering:** Diferenciación fundamental entre *prompt engineering* (redacción de instrucciones) y *context engineering* (diseño integral del entorno de entrada: documentos recuperados, historial, instrucciones del sistema y herramientas dentro del presupuesto de tokens).
2. **Pipelines de Document Intelligence:** Uso de `ai_parse_document(content, MAP('version', '2.0'))` para obtener JSON estructurado (VARIANT) con información de layout, coordenadas y figuras.
3. **Explosión y Filtrado en SQL:** Uso de `variant_explode(parsed:document:elements)` para convertir arreglos VARIANT en filas, aplicando `LENGTH(content) > 50` para eliminar ruido de baja señal.
4. **Estrategias de Chunking y Enriquecimiento:**
   - Entrada correcta para `ai_prep_search`: El VARIANT completo de `ai_parse_document`.
   - Separación entre `chunk_to_embed` (enriquecido con metadatos y títulos para maximizar la localizabilidad) y `chunk_to_retrieve` (texto original limpio para evitar ruido al LLM).
   - Tamaño de chunks: fragmentos pequeños y focalizados con solapamiento moderado para mitigar el efecto *lost-in-the-middle* y respetar el límite de tokens del modelo de embedding.
5. **Databricks AI Search (Vector Search):**
   - Requisito obligatorio de Change Data Feed (CDF) en Delta Sync para sincronización incremental eficiente.
   - Modos de pipeline: `TRIGGERED` (control de costos para lotes nocturnos) vs `CONTINUOUS` (actualización en segundos para baja latencia).
   - Compatibilidad de modelos: Query e índice deben utilizar estrictamente el mismo modelo de embeddings (ej. `databricks-gte-large-en`).
6. **Límites de Ingesta:** Restricción de 50 MB por archivo en volúmenes de Unity Catalog al usar Knowledge Assistant.
