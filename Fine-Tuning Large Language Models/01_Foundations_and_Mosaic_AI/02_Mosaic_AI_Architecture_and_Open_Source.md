# Mosaic AI Architecture & Open-Source Foundations

> **Lesson IDs:** `24246` (`2.2 - What is Mosaic AI?`), `24248` (`2.4 - How does Mosaic AI simplify data prep and fine-tuning?`)  
> **Slide References:** Slides 15, 20, 25, 30  
> **Key Technologies:** `composer`, `streaming`, Mosaic Data Shards (`.mds`), Serverless Compute  

---

## 1. What is Mosaic AI?

**Mosaic AI** is the unified enterprise platform within Databricks for building, deploying, fine-tuning, and governing Generative AI models. Rather than operating as an isolated point solution, Mosaic AI is natively integrated into the Databricks Data Intelligence Platform, connecting model development directly to enterprise data governed by **Unity Catalog**.

The Mosaic AI training stack bridges two worlds:
1. **World-Class Open Source Libraries:** High-performance distributed training and data streaming packages created by MosaicML (`composer` and `streaming`).
2. **Enterprise Managed Lakehouse Services:** Serverless GPU infrastructure, automated checkpointing, Unity Catalog Volumes governance, MLflow tracking, and single-click Model Serving deployment.

```
┌────────────────────────────────────────────────────────────────────────┐
│                      MOSAIC AI ARCHITECTURE STACK                      │
├────────────────────────────────────────────────────────────────────────┤
│  USER INTERFACE / SDK                                                  │
│    • Databricks UI (Model Training GUI)                                │
│    • databricks.model_training.foundation_model Python SDK             │
│    • MLflow 2.11+ Automated Run Tracking & Model Registry              │
├────────────────────────────────────────────────────────────────────────┤
│  ORCHESTRATION & STORAGE LAYER                                         │
│    • Unity Catalog: Catalogs, Schemas, Volumes (Train/Eval Data)       │
│    • Ephemeral Serverless GPU Compute (A100 / H100 clusters)           │
│    • Resilient Checkpointing directly to Cloud Object Storage          │
├────────────────────────────────────────────────────────────────────────┤
│  CORE OPEN SOURCE ENGINES                                              │
│    ┌──────────────────────────────────┬─────────────────────────────┐  │
│    │            COMPOSER              │          STREAMING          │  │
│    │ • PyTorch Distributed Training   │ • High-Throughput Streaming │  │
│    │ • FSDP / DDP / ZeRO Optimization │ • Mosaic Data Shards (.mds) │  │
│    │ • FlashAttention-2 & BF16 Mix    │ • Deterministic Shuffling   │  │
│    │ • Auto-Elastic Fault Recovery    │ • Zero Local Disk Bottleneck│  │
│    └──────────────────────────────────┴─────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Composer: Distributed PyTorch Training Engine

[`composer`](https://github.com/mosaicml/composer) is an open-source PyTorch library specifically engineered to maximize training throughput, simplify distributed orchestration, and make state-of-the-art training techniques turnkey.

### Core Capabilities of Composer in Mosaic AI:

1. **Distributed Parallelism (FSDP & DDP):**
   - Implements **Fully Sharded Data Parallel (FSDP)**, sharding model parameters, optimizer states, and gradients across all available GPUs.
   - Allows fine-tuning of massive models (such as Llama 3 70B and DBRX 132B) without running out of GPU VRAM (OOM).

2. **Elastic Fault Recovery & Checkpointing:**
   - Training large models on distributed clusters inevitably encounters hardware hiccups or spot instance preemptions.
   - Composer writes atomic, sharded checkpoints directly to Unity Catalog Volumes / Cloud Storage.
   - If a node fails, Composer automatically resumes training from the exact batch and epoch without losing progress.

3. **Speedup Algorithms & Mixed Precision:**
   - **BFloat16 (BF16) Mixed Precision:** Native execution in BF16 prevents numeric overflow issues common in traditional FP16, maintaining numerical stability without requiring loss scalers.
   - **FlashAttention-2 Integration:** Replaces naive quadratic attention memory layouts with fused GPU kernel operations, dramatically increasing tokens-per-second processing speed and reducing peak activation memory.
   - **Decoupled Weight Decay:** Standardized integration of AdamW to ensure proper regularization without interfering with adaptive learning rate moments.

---

## 3. Streaming: Zero-Disk-Bottleneck Distributed Data Loader

Traditional deep learning data loaders assume that the training dataset is either stored in RAM or copied to the local SSD of each worker node before training begins. In modern multi-node cloud environments, this creates severe bottlenecks:
- Downloading multi-gigabyte or terabyte datasets to every GPU node before training wastes tens of minutes of expensive GPU idle time.
- Node local disks frequently run out of space when handling extensive corporate corpora.

[`streaming`](https://github.com/mosaicml/streaming) solves this by enabling PyTorch models to stream training samples directly from cloud storage (AWS S3, Azure Data Lake Gen2, Google Cloud Storage, or Databricks Unity Catalog Volumes).

### Key Architectural Advantages:

```
┌────────────────────────────────────────────────────────────────────────┐
│                 TRADITIONAL LOADER vs STREAMING LOADER                 │
├──────────────────────────────────┬─────────────────────────────────────┤
│      TRADITIONAL DATA LOADER     │       MOSAIC STREAMING LOADER       │
├──────────────────────────────────┼─────────────────────────────────────┤
│ 1. Launch 8 GPU Nodes            │ 1. Launch 8 GPU Nodes               │
│ 2. Download 50 GB to Node 1..8   │ 2. Stream shard 0001 immediately    │
│    (GPUs sit idle for 15-30 mins)│ 3. Training begins in < 3 SECONDS   │
│ 3. Load entire dataset into RAM  │ 4. Read-ahead buffer caches next    │
│ 4. If node crashes: re-download  │    shards; deletes processed shards │
│    everything from scratch       │ 5. Instant checkpoint resumption    │
└──────────────────────────────────┴─────────────────────────────────────┘
```

1. **Sub-Second Initialization:** Workers begin training as soon as the first minimal chunk (shard) arrives.
2. **Deterministic Shuffling:** Guarantees mathematically reproducible, pseudorandom sample ordering across arbitrary cluster configurations (e.g., whether training on 1 GPU, 8 GPUs, or 64 GPUs).
3. **RAM & Disk Bounded:** Uses a fixed-size FIFO local cache. Once a shard is consumed by all workers on a node, it is evicted, allowing infinite dataset sizes on modest local SSDs.
4. **Resilience to Transient Network Drops:** Automatic exponential backoff retries when fetching shards from cloud object stores.

---

## 4. Mosaic Data Shards (`.mds` Binary Format)

Under the hood, both Instruction Fine-Tuning and Pre-training leverage the **Mosaic Data Shard (`.mds`)** binary container format.

### Anatomy of an MDS Dataset:

```
my_tokenized_dataset.mds/
├── index.json                     # Metadata manifest (schema, shards, counts)
├── shard.00000.mds                # Binary container with samples 0 to 49,999
├── shard.00001.mds                # Binary container with samples 50,000 to 99,999
└── shard.00002.mds                # Binary container with samples 100,000 to ...
```

### 1. `index.json` Structure
The manifest file details the exact byte offsets, compression codec, column definitions, and sample counts:
```json
{
  "version": 2,
  "shards": [
    {
      "column_encodings": ["str", "str"],
      "column_names": ["prompt", "response"],
      "column_sizes": [null, null],
      "compression": "zstd",
      "format": "mds",
      "raw_data": {
        "byte_count": 52428800,
        "hashes": {"sha1": "3a8c..."},
        "samples": 50000
      },
      "samples": 50000,
      "zip_data": null
    }
  ]
}
```

### 2. Binary Shard Mechanics
- Each `.mds` shard file consists of a header detailing sample boundaries followed by raw, compressed byte payloads (using `zstd` or uncompressed).
- Samples are pre-tokenized into integers (e.g., `uint32`), eliminating the CPU tokenization bottleneck during training. The GPU receives tensors directly into memory without tokenization latency.

---

## 5. Serverless Training Compute in Databricks

Mosaic AI abstracts all low-level infrastructure operations through **Serverless Model Training**:
- **Zero Cluster Management:** Practitioners do not need to configure Kubernetes pods, CUDA drivers, PyTorch NCCL flags, or SSH keys.
- **Dynamic Right-Sizing:** The service selects optimal GPU shapes (NVIDIA A100 80GB, H100 80GB) based on the target foundation model size (8B vs. 70B) and dataset volume.
- **Pay-for-Compute Economics:** Compute instances are provisioned on demand and automatically terminated the millisecond training, evaluation, and model registration conclude.
