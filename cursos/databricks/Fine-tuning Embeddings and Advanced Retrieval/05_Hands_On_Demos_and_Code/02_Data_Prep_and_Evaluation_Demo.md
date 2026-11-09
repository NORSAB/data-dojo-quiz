# 🔬 02. Hands-On Demo: Synthetic Data Prep, Hard Negatives, and Retrieval Evaluation

> **Módulo:** 05 — Hands-On Demos and Code  
> **Lección de Referencia:** 1.6 — Data Prep and Evaluation Demo  
> **Recurso LMS:** Resource ID 5785  
> **Herramientas:** Databricks Foundation Model APIs, BM25, MLflow Evaluate, Pandas, PySpark.

---

## 📌 1. Objetivo del Laboratorio Práctico

1. Generar pares sintéticos $(q, p^+)$ a partir de documentos crudos utilizando **Foundation Models en Databricks**.
2. Minar **Hard Negatives** léxicos mediante BM25 para enriquecer el conjunto de entrenamiento.
3. Evaluar el desempeño de recuperación de un modelo baseline utilizando métricas de **Hit Rate@k, MRR@k y NDCG@k**.

---

## 🛠️ 2. Código de Implementación: Generación Sintética y Minado

```python
# COMMAND ----------
# MAGIC %pip install mlflow langchain databricks-vectorsearch rank-bm25
# MAGIC %restart_python

# COMMAND ----------
import json
import mlflow
from langchain.chat_models import ChatDatabricks
from rank_bm25 import BM25Okapi

# 1. Configuración del LLM para Generación Sintética
llm = ChatDatabricks(endpoint="databricks-meta-llama-3-70b-instruct", max_tokens=256)

def generate_synthetic_queries(chunk_text: str) -> list[str]:
    """Genera 2 preguntas sintéticas basadas exclusivamente en el chunk provisto."""
    prompt = f"""
    Eres un ingeniero de IA. A partir del siguiente texto técnico, genera exactamente 2 preguntas técnicas realistas 
    que un ingeniero haría y cuya respuesta exacta está en el texto.
    Devuelve ÚNICAMENTE un array JSON válido de strings con las preguntas, sin explicaciones ni markdown adicional.
    
    [TEXTO]:
    {chunk_text}
    """
    response = llm.predict(prompt)
    try:
        queries = json.loads(response.strip().replace("```json", "").replace("```", ""))
        return queries
    except Exception:
        return []

# COMMAND ----------
# 2. Minado de Hard Negatives con BM25
class HardNegativeMiner:
    def __init__(self, corpus: list[dict]):
        self.corpus = corpus
        # Tokenización básica para BM25
        self.tokenized_corpus = [doc["text"].lower().split() for doc in corpus]
        self.bm25 = BM25Okapi(self.tokenized_corpus)

    def mine_negatives(self, query: str, positive_doc_id: str, top_n: int = 5) -> list[str]:
        """Extrae pasajes con alta afinidad léxica que no sean el documento positivo real."""
        tokenized_query = query.lower().split()
        top_docs = self.bm25.get_top_n(tokenized_query, self.corpus, n=top_n + 1)
        
        # Filtrar el positivo conocido
        hard_negatives = [doc["text"] for doc in top_docs if doc["id"] != positive_doc_id]
        return hard_negatives[:top_n]

# COMMAND ----------
# 3. Pipeline de Evaluación de Recuperación con MLflow
import numpy as np

def evaluate_retriever(retriever_fn, eval_dataset: list[dict], k_values=[1, 5, 10]):
    """
    Evalúa cualquier recuperador sobre un dataset de prueba.
    eval_dataset: [{'query': str, 'expected_doc_id': str}]
    """
    mrr_scores = []
    hits = {k: 0 for k in k_values}
    
    for item in eval_dataset:
        query = item["query"]
        target_id = item["expected_doc_id"]
        
        # Recuperar top-K candidatos
        retrieved_ids = retriever_fn(query, top_k=max(k_values))
        
        # Hit Rate y MRR
        if target_id in retrieved_ids:
            rank = retrieved_ids.index(target_id) + 1
            mrr_scores.append(1.0 / rank)
            for k in k_values:
                if rank <= k:
                    hits[k] += 1
        else:
            mrr_scores.append(0.0)

    total = len(eval_dataset)
    metrics = {f"Hit_Rate@{k}": hits[k] / total for k in k_values}
    metrics["MRR@10"] = float(np.mean(mrr_scores))
    
    print("\n--- MÉTRICAS DE RECUPERACIÓN ---")
    for metric_name, val in metrics.items():
        print(f"{metric_name}: {val:.4f}")
        
    return metrics
```
