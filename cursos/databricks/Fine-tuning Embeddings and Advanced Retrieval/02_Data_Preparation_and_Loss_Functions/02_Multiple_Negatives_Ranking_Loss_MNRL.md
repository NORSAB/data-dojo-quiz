# 🧮 02. Multiple Negatives Ranking Loss (MNRL): Mathematics and In-Batch Negatives

> **Módulo:** 02 — Data Preparation and Loss Functions  
> **Lección de Referencia:** 1.4 — Fine-Tuning  
> **Diapositivas Clave:** Diapositivas 40 a 44  
> **Temas:** Formulación matemática de MNRL, Pérdida InfoNCE, Matriz de Similitud In-Batch, Hiperparámetro de Temperatura $\tau$ e Implementación en PyTorch.

---

## 📌 1. Motivación Teórica: Por Qué MNRL es el Estándar de la Industria

En el entrenamiento de modelos de embeddings para recuperación de información, calcular explícitamente embeddings de pasajes negativos para cada consulta individual es computacionalmente prohibitivo.

**Multiple Negatives Ranking Loss (MNRL)** —también conocida en la literatura como **InfoNCE Loss** (Information Noise-Contrastive Estimation) o *Contrastive Cross-Entropy*— resuelve este problema con una elegancia algorítmica revolucionaria: **reutiliza los pasajes positivos de otros ejemplos dentro del mismo mini-batch como pasajes negativos**.

```
                MATRIZ DE SIMILITUD IN-BATCH (B = 4)
                ────────────────────────────────────

                      p_1^+        p_2^+        p_3^+        p_4^+
                  ┌────────────┬────────────┬────────────┬────────────┐
             q_1  │  POSITIVO  │  Negativo  │  Negativo  │  Negativo  │
                  ├────────────┼────────────┼────────────┼────────────┤
             q_2  │  Negativo  │  POSITIVO  │  Negativo  │  Negativo  │
                  ├────────────┼────────────┼────────────┼────────────┤
             q_3  │  Negativo  │  Negativo  │  POSITIVO  │  Negativo  │
                  ├────────────┼────────────┼────────────┼────────────┤
             q_4  │  Negativo  │  Negativo  │  Negativo  │  POSITIVO  │
                  └────────────┴────────────┴────────────┴────────────┘
```

---

## 📐 2. Derivación Matemática Formal

Consideremos un mini-batch de tamaño $B$ compuesto por $B$ pares ordenados de consultas y pasajes positivos:

$$\mathcal{B} = \{(q_1, p_1^+), (q_2, p_2^+), \dots, (q_B, p_B^+)\}$$

Sean $u_i = f_\theta(q_i)$ y $v_j = f_\theta(p_j^+)$ los vectores de embedding normalizados ($L2=1$) generados por el modelo para la consulta $i$ y el pasaje $j$.

### 2.1. Puntuación de Similitud Escala-Temperatura
La puntuación de afinidad entre la consulta $i$ y el pasaje $j$ se define como el producto punto escalado por un factor de temperatura $\tau > 0$ (o multiplicador de escala $c = 1/\tau$):

$$s(q_i, p_j) = \frac{\langle u_i, v_j \rangle}{\tau} = \frac{u_i \cdot v_j}{\tau}$$

### 2.2. Distribución de Probabilidad Softmax
Para la consulta $q_i$, la probabilidad predicha por la red de que el pasaje $p_k$ sea el documento relevante entre todos los $B$ pasajes del batch se calcula mediante la función Softmax:

$$P(p_k \mid q_i) = \frac{\exp\left(\frac{u_i \cdot v_k}{\tau}\right)}{\sum_{j=1}^B \exp\left(\frac{u_i \cdot v_j}{\tau}\right)}$$

### 2.3. Función de Pérdida de Entropía Cruzada
El objetivo es maximizar la probabilidad asignada al pasaje positivo real $p_i^+$ (es decir, la diagonal de la matriz donde $k = i$). Minimizando la log-verosimilitud negativa promedio en todo el batch:

$$\mathcal{L}_{\text{MNRL}} = -\frac{1}{B} \sum_{i=1}^B \log P(p_i^+ \mid q_i)$$

$$\mathcal{L}_{\text{MNRL}} = -\frac{1}{B} \sum_{i=1}^B \log \left[ \frac{\exp\left(\frac{u_i \cdot v_i}{\tau}\right)}{\sum_{j=1}^B \exp\left(\frac{u_i \cdot v_j}{\tau}\right)} \right]$$

Desglosando en términos del logaritmo:

$$\mathcal{L}_{\text{MNRL}} = \frac{1}{B} \sum_{i=1}^B \left[ -\frac{u_i \cdot v_i}{\tau} + \log \left( \sum_{j=1}^B \exp\left(\frac{u_i \cdot v_j}{\tau}\right) \right) \right]$$

---

## ⚡ 3. La Eficiencia Algorítmica del Muestreo In-Batch

Supongamos que entrenamos con un tamaño de batch $B = 64$:

1. **Número de Forward Passes en GPU:** Solo se procesan $64$ consultas y $64$ pasajes ($128$ secuencias en total).
2. **Comparaciones Negativas Generadas:**
   - Cada consulta $q_i$ se compara contra $1$ positivo ($p_i$) y $B - 1 = 63$ negativos ($p_j$ para $j \neq i$).
   - Total de pares contrastados en el batch:
     $$N_{\text{contrast}} = B \times B = 64 \times 64 = 4,096 \text{ pares}$$
   - **¡Se obtienen 4,032 pares negativos gratuitos por cada paso de gradiente sin consumir memoria de cómputo adicional!**
3. **Escalabilidad con Batch Size Grande:** Entre mayor sea el tamaño de batch $B$ que quepa en la memoria de la GPU (ej. usando A100 con $B = 256$ o $B = 512$), más difícil y rico se vuelve el problema de clasificación, mejorando sustancialmente la calidad del embedding final.

---

## 🌡️ 4. El Rol del Hiperparámetro de Temperatura ($\tau$)

La temperatura $\tau$ controla la agudeza (*sharpness*) de la distribución Softmax:

- **$\tau$ muy alta ($\tau \to \infty$):** Las probabilidades se vuelven casi uniformes ($P \approx 1/B$). El gradiente pierde fuerza directiva y el modelo no discrimina diferencias sutiles.
- **$\tau$ muy baja ($\tau \to 0$):** La distribución colapsa en el negativo más difícil (*hardest negative*), ignorando el resto de los pasajes. Puede provocar inestabilidad numérica y explosión de gradientes.
- **Valor Óptimo en SentenceTransformers / BGE:** Típicamente $\tau = 0.05$ (equivalente a un factor multiplicativo de escala $c = 20.0$).

---

## 💻 5. Implementación Matemática en PyTorch Puro

```python
import torch
import torch.nn as nn
import torch.nn.functional as F

class MultipleNegativesRankingLoss(nn.Module):
    """
    Implementación en PyTorch puro de MNRL / InfoNCE Loss.
    """
    def __init__(self, temperature: float = 0.05):
        super().__init__()
        self.temperature = temperature
        self.cross_entropy = nn.CrossEntropyLoss()

    def forward(self, query_embeddings: torch.Tensor, passage_embeddings: torch.Tensor) -> torch.Tensor:
        """
        query_embeddings: Tensor de forma (B, d)
        passage_embeddings: Tensor de forma (B, d)
        """
        # 1. Normalización L2 unitaria
        q_norm = F.normalize(query_embeddings, p=2, dim=1)
        p_norm = F.normalize(passage_embeddings, p=2, dim=1)

        # 2. Matriz de similitud coseno: (B, d) @ (d, B) -> (B, B)
        similarity_matrix = torch.matmul(q_norm, p_norm.T)

        # 3. Escalamiento por temperatura
        scaled_logits = similarity_matrix / self.temperature

        # 4. Las etiquetas objetivo son los índices de la diagonal (0, 1, 2, ..., B-1)
        batch_size = query_embeddings.size(0)
        labels = torch.arange(batch_size, device=query_embeddings.device)

        # 5. Pérdida de entropía cruzada multi-clase
        loss = self.cross_entropy(scaled_logits, labels)
        return loss

# Verificación numérica
batch_size = 4
dim = 768
q_emb = torch.randn(batch_size, dim)
p_emb = torch.randn(batch_size, dim)

criterion = MultipleNegativesRankingLoss(temperature=0.05)
loss_val = criterion(q_emb, p_emb)
print(f"Valor de Pérdida MNRL calculada: {loss_val.item():.4f}")
```
