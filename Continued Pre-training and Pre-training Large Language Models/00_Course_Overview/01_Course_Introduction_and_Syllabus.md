# Continued Pre-training and Pre-training Large Language Models

## Course Overview & Syllabus

- **Course Code:** `ACAD-ALL-SLP-CPPLLM-ENG-V1`
- **Course UID:** `E-07JX2V`
- **Course ID:** `2486`
- **Audience:** Machine Learning Engineers, Generative AI Engineers, Data Scientists, AI Architects
- **Level:** Advanced / Professional
- **Estimated Duration:** 4 hours (14,400 seconds)
- **Delivery Mode:** Self-Paced Video Lectures, Technical Deep Dives, Architectural Blueprints, Code Demos
- **Platform:** Databricks Academy / Mosaic AI

---

## Course Description

Building custom Large Language Models (LLMs) requires mastering the end-to-end spectrum from domain adaptation to training foundation models from scratch. This course provides comprehensive training on **Continued Pre-training (CPT)** and **Full Pre-training (PT)** using the Databricks Mosaic AI platform. 

Learners discover when to move beyond prompt engineering and Retrieval Augmented Generation (RAG) to adapt models with hundreds of billions of proprietary domain tokens, how to chain Continued Pre-training with Instruction Fine-Tuning (IFT), how Databricks built **DBRX** (a 132-billion parameter Mixture-of-Experts model), best practices for multi-terabyte data curation and filtering, formal evaluation using the Mosaic Evaluation Gauntlet, compute scaling laws (Chinchilla calculations), training security considerations (poisoning, backdoor attacks, data privacy), and the core components of the Mosaic AI Training Stack (Composer, StreamingDataset, LLM Foundry, and MegaBlocks).

---

## Learning Objectives

By the end of this course, you will be able to:

1. **Evaluate LLM Adaptation Techniques:** Differentiate between Prompt Engineering, Retrieval-Augmented Generation (RAG), Fine-Tuning (IFT), Continued Pre-training (CPT), and Pre-training from scratch based on compute requirements, cost, latency, and data volume.
2. **Execute Continued Pre-training (CPT):** Prepare multi-gigabyte unstructured text datasets in Unity Catalog Volumes with `<|endoftext|>` token separators, and launch CPT jobs via the Databricks Foundation Model Training API (`task_type="CONTINUED_PRETRAIN"`).
3. **Chain CPT and Instruction Fine-Tuning (IFT):** Implement sequential training workflows that adapt base models to specialized domain knowledge before fine-tuning them for conversational task execution using the Chat and Prompt/Completion schemas.
4. **Deconstruct State-of-the-Art Architectures (DBRX):** Analyze the architectural decisions of DBRX, including fine-grained Mixture-of-Experts (MoE, 16 experts with top-4 routing, 132B total / 36B active parameters), Rotational Position Embeddings (RoPE), SwiGLU activation functions, and Grouped-Query Attention (GQA).
5. **Architect Data Curation Pipelines:** Build scalable ingestion and filtration pipelines incorporating MinHash LSH deduplication, heuristic filtering, perplexity scoring, PII redaction, and multi-domain data mixture curation.
6. **Benchmark LLMs with Evaluation Frameworks:** Apply the Mosaic Evaluation Gauntlet across 30+ benchmarks, interpret MMLU / MMLU-Redux, GSM8K, and HumanEval scores, and mitigate evaluation contamination.
7. **Calculate Compute & Training Durations:** Apply Chinchilla compute-optimal scaling laws ($C \approx 6ND$), derive GPU Model FLOPs Utilization (MFU), and accurately calculate multi-node GPU cluster training schedules.
8. **Mitigate AI Security & Governance Risks:** Identify and defend against data poisoning, backdoor vulnerabilities, model weight extraction, and training data privacy breaches using Unity Catalog governance.
9. **Operate the Mosaic AI Training Stack:** Configure and orchestrate distributed training workloads utilizing Composer, StreamingDataset (MDS format), LLM Foundry, and MegaBlocks.

---

## Detailed Course Syllabus

```
====================================================================================================
MODULE / SECTION                                                  LESSON TYPE     SLIDE RANGE
====================================================================================================
01. Motivation & Foundations                                      Lecture         Slides 3 – 5
    - The LLM Adaptation Spectrum
    - Trade-off Matrix: Compute, Cost, Latency, Data Scale
----------------------------------------------------------------------------------------------------
02. Continued Pre-training (CPT)                                  Lecture & Code  Slides 6 – 13
    - Definition and Purpose of Continued Pre-training
    - CPT vs. Full Pre-training Comparison Table
    - Data Preparation & Formatting (.txt in UC Volumes)
    - Python Training API (ft.create with CONTINUED_PRETRAIN)
----------------------------------------------------------------------------------------------------
03. Instruction Fine-Tuning (IFT) & Chat                          Lecture & Code  Slides 14 – 20
    - Mechanics of Supervised Fine-Tuning
    - Prompt/Response vs. Chat JSONL Schemas
    - Unity Catalog Volumes vs. Delta Tables Integration
    - Python Training API (ft.create with INSTRUCTION_FINETUNE)
----------------------------------------------------------------------------------------------------
04. CPT + IFT Combined Workflow                                   Architecture    Slides 21 – 24
    - The Sequential Domain-Adaptation Pipeline
    - Checkpoint Chaining via MLflow / Volume Path
    - Risks, Challenges, and Catastrophic Forgetting
----------------------------------------------------------------------------------------------------
05. Full Pre-training Foundations                                 Deep Dive       Slides 25 – 50
    - When CPT and IFT are Insufficient
    - Causal Language Modeling Mechanics
    - Decoder-Only Architectures and Attention Mechanisms
    - Tokenization: BPE, Byte-Level BPE, Vocabulary Trade-offs
----------------------------------------------------------------------------------------------------
06. Building LLMs on Databricks: DBRX                             Case Study      Slides 51 – 65
    - DBRX Specifications: 132B Total / 36B Active Parameters
    - Fine-Grained Mixture of Experts (16 Experts, Top-4 Routing)
    - Modern Architectural Innovations: RoPE, SwiGLU, GQA
    - Hardware & Scale: 3,072 H100 GPUs, MegaBlocks, 12T Tokens
    - Empirical Proof: Impact of Superior Data Quality
----------------------------------------------------------------------------------------------------
07. Pre-training Data Best Practices                              Data Eng        Slides 66 – 74
    - Data Processing Pipeline Architecture
    - Deduplication: Exact Matching, MinHash LSH, Suffix Arrays
    - Quality Filtering: Heuristic Rules and Perplexity Scoring
    - PII Redaction, Safety Masking, and Domain Mixing
----------------------------------------------------------------------------------------------------
08. Evaluation & The Mosaic Evaluation Gauntlet                   Benchmarking    Slides 75 – 84
    - Limitations of Human Evaluation & Heuristic Loss
    - The Mosaic Evaluation Gauntlet (6 Core Competencies)
    - Key Academic Benchmarks: MMLU, GSM8K, HumanEval
    - Detecting and Preventing Evaluation Contamination
----------------------------------------------------------------------------------------------------
09. Compute Scaling Laws & Training Time Calculations             Mathematics     Slides 85 – 94
    - Chinchilla Scaling Laws (N_tokens ≈ 20 × N_params)
    - Theoretical FLOPs Formula: C ≈ 6 × N × D
    - Hardware Specifications: A100 vs. H100 Peak FLOP/s
    - Model FLOPs Utilization (MFU) Calculation
    - Step-by-Step Practical Calculation Example
----------------------------------------------------------------------------------------------------
10. Security Risks, Privacy & Governance                          Governance      Slides 95 – 104
    - Data Poisoning & Trigger-Based Backdoor Attacks
    - Secret, Sensitive, and PII Extraction / Memorization
    - Copyright and Intellectual Property Compliance
    - Unity Catalog and Delta Lake Lineage Controls
----------------------------------------------------------------------------------------------------
11. The Mosaic AI Pre-training Stack                              Infrastructure  Slides 105 – 114
    - Composer: PyTorch Distributed Training Engine
    - StreamingDataset (MDS): Elastic, Cloud-Native Streaming
    - LLM Foundry: Production Training & Evaluation Harness
    - MegaBlocks: Efficient Sparse MoE GPU Execution
----------------------------------------------------------------------------------------------------
12. Practitioner Advice & Hyperparameter Tuning                   Best Practices  Slides 115 – 121
    - Scaling Strategy: Starting Small and Verifying Early
    - Learning Rate Schedules: Cosine Decay with Warmup
    - AdamW Optimizer Hyperparameters (β1, β2, Weight Decay)
    - Gradient Clipping and Diagnosing Loss Spikes
----------------------------------------------------------------------------------------------------
13. Practical Demos & Code Execution                              Demos           Lesson 3.13–3.14
    - Foundation Model Training API Demo
    - Mosaic ML CLI (mcli) and YAML Cluster Configuration
====================================================================================================
```

---

## Course Navigation Guide

The materials extracted from the Databricks Academy platform are organized into modular, self-contained study units:

- **`00_Course_Overview/`**: Course syllabus, structural index, and pedagogical goals.
- **`01_Motivation_and_Foundations/`**: Theoretical comparison of customization techniques and decision criteria.
- **`02_Continued_Pre_Training_and_IFT/`**: Mechanics, APIs, data formats, and pipelines for CPT and IFT.
- **`03_Full_Pre_Training_and_DBRX/`**: Deep dive into full pre-training architectures and the DBRX MoE model.
- **`04_Data_Curation_and_Best_Practices/`**: Multi-stage data processing, deduplication, filtering, and mixing.
- **`05_Evaluation_Compute_and_Security/`**: Evaluation gauntlets, Chinchilla scaling math, and LLM security vectors.
- **`06_Mosaic_AI_Stack_and_Demos/`**: Infrastructure tooling (Composer, StreamingDataset, LLM Foundry, MegaBlocks) and practical code demos.
- **`07_Slides_Reference_Deck/`**: Complete 121-slide canonical reference catalog with high-resolution links and summary takeaways.
