# 📊 02. Information Retrieval Evaluation Metrics: MRR@k, NDCG@k, Precision, and Recall

> **Módulo:** 03 — Fine-Tuning Embedding Models  
> **Lección de Referencia:** 1.4 — Fine-Tuning & 1.6 — Data Prep and Evaluation Demo  
> **Diapositivas Clave:** Diapositivas 49 a 55  
> **Temas:** Métricas de Recuperación de Información (IR), Derivaciones Matemáticas de MRR@k, DCG@k, IDCG@k, NDCG@k, MAP y Evaluación Comparativa Antes/Después.

---

## 🎯 1. El Marco de Evaluación en Recuperación Semántica

A diferencia de los modelos de clasificación estándar donde se evalúa precisión y recall global, en los sistemas de recuperación de información (Information Retrieval - IR) y RAG **el orden posicional de los resultados es determinante**:
- Un pasaje relevante ubicado en la posición 1 (`rank = 1`) es infinitamente más útil para el contexto del LLM que uno ubicado en la posición 50 (`rank = 50`), debido a la ventana de contexto limitada y al fenómeno *"Lost in the Middle"*.

```
                      POSICIÓN DE RECUPERACIÓN (RANK)
                      ───────────────────────────────

  Rank 1: [Documento Relevante]   ───> Recibe máxima ponderación (1 / log2(2) = 1.0)
  Rank 2: [Documento Irrelevante] ───> Penalización
  Rank 3: [Documento Relevante]   ───> Ponderación atenuada (1 / log2(4) = 0.5)
  ...
  Rank > k: [Ignorados]           ───> Ponderación cero
```

---

## 📐 2. Definiciones Matemáticas Rigurosas

### 2.1. Hit Rate@k (Recall@k para un único positivo)
Indica si el documento relevante objetivo se encuentra dentro de los primeros $k$ resultados devueltos:

$$\text{Hit@k}(q) = \begin{cases} 1 & \text{si } \text{rank}(p^+) \le k \\ 0 & \text{en caso contrario} \end{cases}$$

$$\text{Hit Rate@k} = \frac{1}{|Q|} \sum_{q \in Q} \text{Hit@k}(q)$$

### 2.2. Precision@k
Mide la proporción de documentos devueltos en las primeras $k$ posiciones que son verdaderamente relevantes:

$$\text{Precision@k} = \frac{|\text{Documentos Relevantes Devueltos} \cap \text{Top-k Devueltos}|}{k}$$

### 2.3. Mean Reciprocal Rank (MRR@k)
Evalúa cuán arriba en la lista aparece el **primer** documento relevante. Para cada consulta $q_i$, se toma el recíproco de la posición $\text{rank}_i$ del primer acierto:

$$\text{MRR@k} = \frac{1}{|Q|} \sum_{i=1}^{|Q|} \text{RR}(q_i)$$

Donde:

$$\text{RR}(q_i) = \begin{cases} \frac{1}{\text{rank}_i} & \text{si } \text{rank}_i \le k \\ 0 & \text{si } \text{rank}_i > k \text{ o no encontrado} \end{cases}$$

- Si el primer documento relevante está en el puesto 1: $\text{RR} = 1.0$.
- Si está en el puesto 2: $\text{RR} = 0.5$.
- Si está en el puesto 5: $\text{RR} = 0.2$.

### 2.4. Normalized Discounted Cumulative Gain (NDCG@k)
Es la métrica más completa y sofisticada en motores de búsqueda, ya que contempla **grados de relevancia graduales** ($\text{rel}_i \in \{0, 1, 2, 3\}$) y penaliza logarítmicamente las posiciones tardías.

#### Paso A: Discounted Cumulative Gain (DCG@k)
$$\text{DCG@k} = \sum_{i=1}^k \frac{2^{\text{rel}_i} - 1}{\log_2(i + 1)}$$

Donde $\text{rel}_i$ es la puntuación de relevancia del documento en la posición $i$.

#### Paso B: Ideal Discounted Cumulative Gain (IDCG@k)
Se calcula el DCG que se obtendría si los documentos se ordenaran de forma perfecta en orden estrictamente decreciente de relevancia:

$$\text{IDCG@k} = \sum_{i=1}^{|R|} \frac{2^{\text{rel}_{(i)}} - 1}{\log_2(i + 1)}$$

#### Paso C: Normalización Final
$$\text{NDCG@k} = \frac{\text{DCG@k}}{\text{IDCG@k}} \in [0, 1]$$

---

## 📈 3. Evaluación Comparativa Antes vs Después de Fine-Tuning

En un caso de estudio típico presentado en Databricks Academy sobre un corpus técnico corporativo (ej. documentación de infraestructura y pipelines ETL):

| Métrica | Modelo Base (`bge-large-en-v1.5`) | Modelo con Fine-Tuning (MNRL 3 épocas) | Mejora Relativa |
|---|---|---|---|
| **Hit Rate@1** | 0.542 | **0.781** | **+44.1%** |
| **Hit Rate@5** | 0.765 | **0.914** | **+19.5%** |
| **Hit Rate@10** | 0.830 | **0.952** | **+14.7%** |
| **MRR@10** | 0.631 | **0.835** | **+32.3%** |
| **NDCG@10** | 0.678 | **0.862** | **+27.1%** |

---

## 💻 4. Implementación en Python de las Métricas de Evaluación

```python
import numpy as np

def calculate_mrr_at_k(ranks: list[int], k: int = 10) -> float:
    """Calcula el MRR@k dada una lista de posiciones del primer resultado relevante."""
    reciprocal_ranks = [1.0 / r if (r is not None and 1 <= r <= k) else 0.0 for r in ranks]
    return float(np.mean(reciprocal_ranks))

def calculate_dcg_at_k(relevances: list[int], k: int = 10) -> float:
    """Calcula DCG@k para una lista de relevancias en orden de ranking."""
    relevances = relevances[:k]
    dcg = 0.0
    for idx, rel in enumerate(relevances, start=1):
        dcg += (2**rel - 1) / np.log2(idx + 1)
    return dcg

def calculate_ndcg_at_k(retrieved_relevances: list[int], ideal_relevances: list[int], k: int = 10) -> float:
    """Calcula NDCG@k comparando DCG real contra el ideal (IDCG)."""
    dcg = calculate_dcg_at_k(retrieved_relevances, k)
    idcg = calculate_dcg_at_k(sorted(ideal_relevances, reverse=True), k)
    if idcg == 0.0:
        return 0.0
    return dcg / idcg

# Ejemplo de prueba:
# Para una consulta con 1 relevante (rel=1) que apareció en la posición 3:
retrieved_rels = [0, 0, 1, 0, 0]  # Rank 3
ideal_rels = [1, 0, 0, 0, 0]      # Ideal: Rank 1

mrr_val = calculate_mrr_at_k([3], k=5)
ndcg_val = calculate_ndcg_at_k(retrieved_rels, ideal_rels, k=5)

print(f"MRR@5:  {mrr_val:.4f}")   # 1/3 = 0.3333
print(f"NDCG@5: {ndcg_val:.4f}")  # DCG@5 / IDCG@5
```
