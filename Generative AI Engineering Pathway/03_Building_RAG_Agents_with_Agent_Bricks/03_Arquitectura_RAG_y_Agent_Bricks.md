# Arquitectura RAG y Agent Bricks en Databricks

Este documento resume los patrones técnicos y arquitectónicos presentados en el curso **Building RAG Agents with Agent Bricks** (`Course ID: 5857`):

---

## 1. El Pipeline de Ingesta y Parsing con Document Intelligence

```sql
-- 1. Lectura binaria de documentos desde un Volumen de Unity Catalog
CREATE OR REPLACE TABLE raw_documents AS
SELECT
  path,
  modificationTime,
  length,
  content
FROM READ_FILES('/Volumes/my_catalog/my_schema/docs_volume', format => 'binaryFile');

-- 2. Parsing con preservación de maquetación (Schema v2.0)
CREATE OR REPLACE TABLE parsed_documents AS
SELECT
  path,
  ai_parse_document(content, MAP('version', '2.0')) AS parsed
FROM raw_documents;

-- 3. Desanidado de bloques estructurados con variant_explode
CREATE OR REPLACE TABLE document_elements AS
SELECT
  p.path,
  element.value:type::STRING AS element_type,
  element.value:content::STRING AS content,
  element.value:page::INT AS page_number
FROM parsed_documents p,
  LATERAL variant_explode(p.parsed:document:elements) AS element
WHERE element.value:content IS NOT NULL
  AND LENGTH(element.value:content::STRING) > 50; -- Filtro de baja señal
```

---

## 2. Chunking Semántico y Enriquecimiento con `ai_prep_search`

`ai_prep_search` transforma la salida completa `VARIANT` de `ai_parse_document` en fragmentos listos para indexación:

| Columna Generada | Propósito | Destino en Inferencia |
|---|---|---|
| `chunk_to_embed` | Texto enriquecido con títulos jerárquicos, encabezados y metadatos de página | **Vector Search / Embedding Model:** Maximiza la localizabilidad por similitud semántica. |
| `chunk_to_retrieve` | Texto limpio original sin metadatos ruidosos añadidos | **LLM Generador:** Se inyecta en el prompt para redacción fluida y precisa de la respuesta. |

---

## 3. Databricks AI Search (Vector Search): Configuración del Índice

1. **Requisito de Tabla Fuente:**
   - La tabla Delta debe tener habilitado **Change Data Feed (CDF)**:
     ```sql
     ALTER TABLE catalog.schema.chunks_table SET TBLPROPERTIES (delta.enableChangeDataFeed = true);
     ```
2. **Tipos de Sincronización:**
   - **TRIGGERED:** Sincronización bajo demanda o por lotes programados (costo mínimo de DBU, ideal para actualizaciones nocturnas).
   - **CONTINUOUS:** Sincronización en streaming casi en tiempo real (segundos de latencia, cómputo continuo).
3. **Consistencia de Espacio Vectorial:**
   - La consulta en tiempo real **debe** utilizar exactamente el mismo modelo de embedding que el índice (ej. `databricks-gte-large-en`).
   - La similitud coseno mide la cercanía angular entre vectores normalizados; valores más cercanos a 1 indican mayor similitud semántica.

---

## 4. Knowledge Assistant vs. Custom Code-First Agents

```
                        ┌──────────────────────────────────────────────┐
                        │              ¿Qué construir?                 │
                        └──────────────────────┬───────────────────────┘
                                               │
               ┌───────────────────────────────┴───────────────────────────────┐
               ▼                                                               ▼
┌──────────────────────────────┐                              ┌──────────────────────────────┐
│     Knowledge Assistant      │                              │      Custom Agent (Code)     │
├──────────────────────────────┤                              ├──────────────────────────────┤
│ • Declarativo, low-code      │                              │ • Total control de lógica    │
│ • Parsing y chunking auto    │                              │ • Multi-agente, bucles ReAct │
│ • Archivos < 50 MB en UC     │                              │ • OpenAI SDK / LangGraph     │
│ • Citas a fuentes incluidas  │                              │ • Trazas complejas en MLflow │
└──────────────────────────────┘                              └──────────────────────────────┘
```
