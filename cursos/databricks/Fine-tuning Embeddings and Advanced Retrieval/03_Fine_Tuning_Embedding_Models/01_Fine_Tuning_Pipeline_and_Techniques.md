# 🚀 01. Fine-Tuning Pipeline, Hyperparameters, and MLflow Integration

> **Módulo:** 03 — Fine-Tuning Embedding Models  
> **Lección de Referencia:** 1.4 — Fine-Tuning & 1.7 — Fine-Tuning an Embedding Model Demo  
> **Diapositivas Clave:** Diapositivas 43 a 48  
> **Temas:** Pipeline de Entrenamiento en SentenceTransformers, Estrategia de Hiperparámetros, Prevención de Olvido Catastrófico, Registro en MLflow y Publicación en Unity Catalog.

---

## ⚙️ 1. Arquitectura del Pipeline de Fine-Tuning

El ajuste fino de un modelo de embeddings pre-entrenado (como `BAAI/bge-large-en-v1.5`) adapta sus pesos neuronales para maximizar la separación angular entre documentos relevantes e irrelevantes en la jerga propia de la empresa.

```
                      PIPELINE DE ENTRENAMIENTO EN DATABRICKS
                      ───────────────────────────────────────

  Tablas Delta en UC           DataLoader              Modelo Base
   (q, p+, [p-])        ───>  (Batch Size=64)  ───>  (BGE-Large-EN)
                                                            │
                                                            ▼
                                                   Forward Pass (GPU A10G)
                                                            │
                                                            ▼
                                                   MNRL Loss (InfoNCE)
                                                            │
                                                            ▼
                                                   Backward Pass & AdamW
                                                   (LR Scheduler Cosine)
                                                            │
                                                            ▼
                                                   MLflow Tracking Run
                                                   (Loss, Eval NDCG@10)
                                                            │
                                                            ▼
                                                   Registro Unity Catalog
                                                   (main.rag.bge_finetuned)
```

---

## 🎛️ 2. Selección Rigurosa de Hiperparámetros

A diferencia del entrenamiento desde cero (*pre-training*), el fine-tuning de embeddings es altamente sensible a hiperparámetros agresivos. Una tasa de aprendizaje excesiva destruirá el conocimiento lingüístico previo (**olvido catastrófico**).

| Hiperparámetro | Valor Recomendado | Justificación Técnica |
|---|---|---|
| **Learning Rate ($\eta$)** | $1 \times 10^{-5}$ a $3 \times 10^{-5}$ | Tasas mayores a $5 \times 10^{-5}$ causan divergencia o degradación de generalización; tasas menores a $5 \times 10^{-6}$ aprenden con excesiva lentitud. |
| **Optimizador** | **AdamW** | Decaimiento de peso desacoplado ($\text{weight\_decay} = 0.01$) para regularizar las capas de atención y feed-forward. |
| **Scheduler** | **Cosine Annealing con Warmup** | Rampa lineal durante el primer 10% de pasos (`warmup_ratio = 0.1`) para estabilizar gradientes iniciales, seguida de decaimiento cosenoidal suave hasta 0. |
| **Tamaño de Batch ($B$)** | 32, 64 o 128 (según VRAM) | Para MNRL, **a mayor batch size, mayor número de in-batch negatives ($B(B-1)$)** y mejor calidad del gradiente. |
| **Épocas de Entrenamiento** | 2 a 4 épocas | Los modelos de embeddings convergen rápidamente. Más de 5 épocas sobre datasets pequeños (< 20,000 pares) produce sobreajuste severo (*overfitting*). |
| **Precisión de Cómputo** | **BF16 o FP16 (Mixed Precision)** | Reduce a la mitad el consumo de memoria VRAM en GPUs NVIDIA Ampere/Hopper (A10G, A100, H100) y acelera las operaciones tensoriales. |

---

## 🛡️ 3. Prevención de Olvido Catastrófico (*Catastrophic Forgetting*)

Cuando un modelo se sobre-entrena en un corpus muy restringido, corre el riesgo de perder la capacidad de comprender oraciones generales o variaciones sintácticas.

### Estrategias de Mitigación Oficiales de Databricks:
1. **Regulación por Early Stopping:** Monitorear permanentemente una métrica de validación de recuperación (**NDCG@10** o **MRR@10**) sobre un conjunto retenido de validación (*hold-out split*), deteniendo el entrenamiento si la métrica no mejora durante 2 evaluaciones consecutivas.
2. **Layer-wise Learning Rate Decay (Opcional):** Aplicar tasas de aprendizaje más bajas a las capas iniciales del Transformer (que codifican sintaxis y gramática general) y tasas ligeramente mayores a las últimas capas de atención (que adaptan la semántica).
3. **Weight Decay Moderado:** Mantener `weight_decay = 0.01` evita que los pesos de las matrices de proyección de atención adquieran normas desproporcionadas.

---

## 📊 4. Integración con MLflow Tracking y Unity Catalog

Databricks recomienda estructurar el ciclo de vida del modelo mediante **MLflow**:

```python
import mlflow
from sentence_transformers import SentenceTransformer, losses, InputExample
from torch.utils.data import DataLoader

# 1. Iniciar Experimento en MLflow
mlflow.set_experiment("/Shared/RAG_Embedding_FineTuning_BGE")

with mlflow.start_run(run_name="bge_large_mnrl_inbatch_v1") as run:
    # Registro de Hiperparámetros
    params = {
        "base_model": "BAAI/bge-large-en-v1.5",
        "batch_size": 64,
        "learning_rate": 2e-5,
        "epochs": 3,
        "warmup_ratio": 0.1,
        "loss_function": "MultipleNegativesRankingLoss",
        "temperature": 0.05
    }
    mlflow.log_params(params)

    # 2. Carga de Modelo y Preparación
    model = SentenceTransformer(params["base_model"])
    train_loss = losses.MultipleNegativesRankingLoss(model)

    # 3. Entrenamiento con SentenceTransformers
    # (train_dataloader y evaluator configurados con holdout set)
    warmup_steps = int(len(train_dataloader) * params["epochs"] * params["warmup_ratio"])
    
    model.fit(
        train_objectives=[(train_dataloader, train_loss)],
        epochs=params["epochs"],
        warmup_steps=warmup_steps,
        optimizer_params={"lr": params["learning_rate"]},
        evaluator=evaluator,
        evaluation_steps=100,
        output_path="./checkpoints/best_model",
        show_progress_bar=True
    )

    # 4. Registro del Modelo en Unity Catalog
    catalog_model_name = "main.rag_models.bge_large_finetuned_v1"
    mlflow.sentence_transformers.log_model(
        model=model,
        artifact_path="sentence_transformer_model",
        registered_model_name=catalog_model_name
    )
    print(f"✅ Modelo registrado exitosamente en Unity Catalog: {catalog_model_name}")
```
