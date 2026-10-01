# 🏋️ 03. Hands-On Demo: End-to-End Fine-Tuning an Embedding Model & UC Registry

> **Módulo:** 05 — Hands-On Demos and Code  
> **Lección de Referencia:** 1.7 — Fine-Tuning an Embedding Model Demo  
> **Recurso LMS:** Resource ID 5786  
> **Herramientas:** PyTorch, SentenceTransformers, MLflow Tracking, Unity Catalog, GPU A10G/A100.

---

## 📌 1. Objetivo del Laboratorio Práctico

Implementar un pipeline de entrenamiento completo en Databricks:
1. Cargar el dataset de entrenamiento y validación desde tablas Delta.
2. Instanciar el modelo base `BAAI/bge-large-en-v1.5`.
3. Configurar la función de pérdida **Multiple Negatives Ranking Loss (MNRL)**.
4. Entrenar el modelo con GPU, evaluando periódicamente sobre un conjunto de validación mediante `InformationRetrievalEvaluator`.
5. Registrar los pesos resultantes en MLflow y publicarlo en **Unity Catalog**.

---

## 🛠️ 2. Cuaderno Completo de Entrenamiento (Python / PyTorch)

```python
# COMMAND ----------
# MAGIC %pip install sentence-transformers torch mlflow accelerate
# MAGIC %restart_python

# COMMAND ----------
import os
import mlflow
import torch
from torch.utils.data import DataLoader
from sentence_transformers import SentenceTransformer, InputExample, losses, evaluation

# Verificar disponibilidad de GPU
device = "cuda" if torch.cuda.is_available() else "cpu"
print(f"Dispositivo de Cómputo: {device}")
if device == "cuda":
    print(f"GPU detectada: {torch.cuda.get_device_name(0)}")

# COMMAND ----------
# 1. Configuración de Hiperparámetros
CONFIG = {
    "base_model": "BAAI/bge-large-en-v1.5",
    "batch_size": 32,
    "epochs": 3,
    "learning_rate": 2e-5,
    "warmup_ratio": 0.1,
    "output_dir": "/tmp/checkpoints/bge_finetuned",
    "experiment_path": "/Shared/RAG_Embedding_FineTuning",
    "registered_model_name": "main.rag_models.bge_large_custom_v1"
}

# COMMAND ----------
# 2. Carga y Preparación de Datos desde Delta Lake / Memoria
# Formato: InputExample(texts=[query, positive_passage, (opcional) hard_negative])

# Simulación de datos extraídos de Delta Table:
raw_train_pairs = [
    ("How to optimize shuffle partitions in Spark?", "Use spark.sql.shuffle.partitions to match cluster cores."),
    ("What is Delta Lake transaction log?", "The Delta transaction log is an ordered record of commits in JSON."),
    ("Explain Unity Catalog privilege inheritance.", "Privileges granted on a catalog cascade to schemas and tables.")
]

train_examples = [InputExample(texts=[q, p]) for q, p in raw_train_pairs]
train_dataloader = DataLoader(train_examples, shuffle=True, batch_size=CONFIG["batch_size"])

# 3. Configuración del Evaluador de Recuperación (InformationRetrievalEvaluator)
eval_queries = {"q1": "How to tune shuffle in Spark?"}
eval_corpus = {
    "doc1": "Use spark.sql.shuffle.partitions to match cluster cores.",
    "doc2": "Delta Lake stores ACID logs in _delta_log folder."
}
eval_relevant_docs = {"q1": {"doc1"}}

evaluator = evaluation.InformationRetrievalEvaluator(
    queries=eval_queries,
    corpus=eval_corpus,
    relevant_docs=eval_relevant_docs,
    name="validation_ir_eval",
    score_functions={"cosine": evaluation.SimilarityFunction.COSINE}
)

# COMMAND ----------
# 4. Inicialización del Modelo y Función de Pérdida
print(f"Cargando modelo base: {CONFIG['base_model']}...")
model = SentenceTransformer(CONFIG["base_model"], device=device)

# Multiple Negatives Ranking Loss (utiliza in-batch negatives eficientes)
train_loss = losses.MultipleNegativesRankingLoss(model=model)

# COMMAND ----------
# 5. Ejecución del Entrenamiento con Tracking de MLflow
mlflow.set_experiment(CONFIG["experiment_path"])

with mlflow.start_run(run_name="bge_large_mnrl_run_01") as run:
    mlflow.log_params(CONFIG)
    
    total_steps = len(train_dataloader) * CONFIG["epochs"]
    warmup_steps = int(total_steps * CONFIG["warmup_ratio"])
    print(f"Pasos totales: {total_steps}, Pasos de Warmup: {warmup_steps}")

    # Entrenamiento
    model.fit(
        train_objectives=[(train_dataloader, train_loss)],
        evaluator=evaluator,
        epochs=CONFIG["epochs"],
        evaluation_steps=50,
        warmup_steps=warmup_steps,
        optimizer_params={"lr": CONFIG["learning_rate"]},
        output_path=CONFIG["output_dir"],
        show_progress_bar=True
    )
    
    # 6. Registro del Modelo Fine-Tuned en MLflow y Unity Catalog
    print("Registrando modelo en MLflow y Unity Catalog...")
    mlflow.sentence_transformers.log_model(
        model=model,
        artifact_path="fine_tuned_bge_model",
        registered_model_name=CONFIG["registered_model_name"]
    )
    
    print(f"✅ ¡Entrenamiento completado y modelo registrado en {CONFIG['registered_model_name']}!")
```
