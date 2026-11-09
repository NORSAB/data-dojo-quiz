# 📑 01. Data Preparation, Hard Negatives Mining, and Data Formatting

> **Módulo:** 02 — Data Preparation and Loss Functions  
> **Lección de Referencia:** 1.3 — Data Preparation  
> **Diapositivas Clave:** Diapositivas 35 a 42  
> **Temas:** Estructuras de Datos (Pares, Tripletes), Minado de Hard Negatives (BM25 vs Recuperación Densa), Generación Sintética con LLMs y Formato JSONL.

---

## 🎯 1. La Importancia de los Datos en el Aprendizaje Contrastivo

El fine-tuning de embeddings opera bajo el paradigma del **Aprendizaje Contrastivo (Contrastive Learning)**. El objetivo del modelo es aprender un espacio métrico donde:
1. Las representaciones vectoriales de consultas $q$ y sus correspondientes pasajes positivos $p^+$ sean empujadas unas hacia otras (**atracción**).
2. Las representaciones vectoriales de consultas $q$ y pasajes irrelevantes $p^-$ sean empujadas en direcciones opuestas (**repulsión**).

```
                      APRENDIZAJE CONTRASTIVO
                      ───────────────────────

           p^- (Hard Negative)
                 ▲
                 │   Fuerza de Repulsión (∇ Loss)
                 │
            q ───────> p^+ (Positive Passage)
         (Query)   Fuerza de Atracción (∇ Loss)
```

Sin embargo, **no todos los negativos aportan el mismo valor informativo**:

| Tipo de Negativo | Definición | Gradiente de Pérdida | Utilidad en Entrenamiento |
|---|---|---|---|
| **Easy Negatives (Aleatorios)** | Documentos tomados al azar del corpus (ej. consulta sobre "Unity Catalog" emparejada con un pasaje sobre "Recetas de cocina"). | Prácticamente 0 (el modelo ya sabe que son distintos). | Baja. Produce estancamiento del aprendizaje. |
| **Semi-Hard Negatives** | Documentos del mismo dominio general pero claramente sobre otro subtema (ej. "Delta Lake Vacuums"). | Moderado. | Buena para fases iniciales. |
| **Hard Negatives (Negativos Difíciles)** | Documentos que comparten términos clave, entidades y sintaxis con la consulta, pero **no responden a la pregunta**. | Alto y muy informativo. | **Crítica.** Obliga al modelo a aprender discriminación semántica profunda. |

---

## ⛏️ 2. Técnicas de Minado de Negativos Difíciles (Hard Negatives Mining)

Existen dos estrategias complementarias recomendadas por Databricks Academy para extraer negativos duros de un corpus corporativo:

```
                  FLUJO DE MINADO DE NEGATIVOS DUROS
                  ──────────────────────────────────

  Corpus de Documentos
           │
           ├───> Indexación BM25 (Léxica) ───────┐
           │                                     ├──> Top-30 Resultados
           └───> Indexación Densa (Embeddings) ──┘        │
                                                          ▼
                                                  Descartar Positivos
                                                   Conocidos (p^+)
                                                          │
                                                          ▼
                                                  Seleccionar Ranks 2-10
                                                  como [Hard Negatives]
```

### 2.1. Minado Léxico con BM25
1. Se indexa el corpus completo en un motor BM25 (como Elasticsearch, OpenSearch o la librería Python `rank_bm25`).
2. Para cada consulta $q_i$, se ejecuta la búsqueda BM25 extrayendo los 30 documentos más afines léxicamente.
3. Se excluye el documento positivo verificado $p_i^+$.
4. Los documentos ubicados en las posiciones 2 a 10 de BM25 contienen típicamente las mismas palabras clave pero abordan temas diferentes: son **Hard Negatives de alta calidad**.

### 2.2. Minado Denso con Modelo Previo (*Dense Retrieval Mining*)
1. Se utiliza un modelo de embeddings base (ej. `bge-base-en-v1.5`) para generar embeddings de todo el corpus.
2. Para cada consulta, se buscan los vecinos más cercanos mediante búsqueda vectorial (Databricks Vector Search).
3. Se seleccionan aquellos pasajes con alta similitud coseno (ej. $\cos \in [0.75, 0.88]$) que **no** han sido etiquetados como la respuesta correcta.

---

## 🤖 3. Generación Sintética de Consultas con LLMs

En la mayoría de las empresas, se dispone de abundante documentación interna (Delta Tables, manuales PDF, Confluence), pero **no se cuenta con pares anotados de (consulta, pasaje)**.

La metodología oficial de Databricks consiste en utilizar un LLM fundacional mediante **Databricks Foundation Model APIs** (ej. `databricks-meta-llama-3-70b-instruct` o `databricks-dbrx-instruct`) para sintetizar preguntas realistas:

### Plantilla de Prompting de Generación Sintética:
```text
Eres un ingeniero de datos y científico de machine learning que utiliza Databricks.
Dado el siguiente fragmento de documentación técnica corporativa, genera 3 preguntas
específicas y realistas que un colega podría formular y cuya respuesta exacta esté
contenida únicamente en el texto provisto.

Reglas:
1. No utilices frases genéricas como "¿De qué trata este texto?".
2. Haz preguntas directas y orientadas a problemas prácticos.
3. Devuelve únicamente un objeto JSON con la clave "questions".

[DOCUMENTO TÉCNICO]:
{chunk_text}
```

---

## 💾 4. Formatos de Datos Estándar (JSONL)

Para entrenar con `sentence-transformers`, los datos deben organizarse en estructuras estandarizadas:

### 4.1. Formato de Pares (Pares Positivos para MNRL)
Utilizado cuando se entrena con **Multiple Negatives Ranking Loss**, donde los negativos se obtienen del propio batch:

```json
{"query": "How do I set retention period for Delta table vacuum?", "positive": "The VACUUM command removes data files no longer referenced by a Delta table. Set the spark.databricks.delta.vacuum.parallelDelete.enabled to true, and specify RETAIN 168 HOURS for 7 days retention."}
{"query": "What is the default isolation level in Unity Catalog?", "positive": "Unity Catalog ensures ACID transactions on Lakehouse tables using WriteSerializable as the default isolation level for concurrent transactions."}
```

### 4.2. Formato de Tripletes con Negativos Explícitos
Utilizado cuando se dispone de negativos duros minados previamente:

```json
{
  "query": "How do I configure Unity Catalog metastore admin?",
  "positive": "A metastore admin can assign owners to securable objects in Unity Catalog and manage storage credentials. To assign a metastore admin, use the Databricks account console under Metastore settings.",
  "negative": "Workspace admins have admin privileges within a single workspace, such as managing compute clusters and user access to workspace notebooks, but do not automatically administer the metastore."
}
```

---

## 🛠️ 5. Script de Validación de Formato en Python

```python
import json
from pathlib import Path

def validate_training_dataset(filepath: str):
    """Valida la integridad de un archivo de entrenamiento contrastivo en JSONL."""
    path = Path(filepath)
    assert path.exists(), f"El archivo {filepath} no existe."
    
    total_records = 0
    with open(path, "r", encoding="utf-8") as f:
        for line_idx, line in enumerate(f, start=1):
            line = line.strip()
            if not line:
                continue
            data = json.loads(line)
            
            # Comprobación de claves obligatorias
            assert "query" in data, f"Línea {line_idx} no contiene 'query'"
            assert "positive" in data, f"Línea {line_idx} no contiene 'positive'"
            assert len(data["query"]) >= 10, f"Query en línea {line_idx} demasiado corta"
            assert len(data["positive"]) >= 20, f"Positive en línea {line_idx} demasiado corto"
            
            total_records += 1
            
    print(f"✅ Dataset validado con éxito: {total_records} muestras listas para fine-tuning.")
```
