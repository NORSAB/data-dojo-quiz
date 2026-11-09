# Lesson 12: Spill — Mechanics, Spark UI Metrics, and Mitigation Strategies

> **Course:** Databricks Performance Optimization (Course ID: 2967)  
> **Section:** 3. Code Optimization  
> **Lesson:** 12 of 19 — Spill (Authoring ID: 815 / Lesson ID: 44374)  
> **Source Material:** Official Databricks Academy Slide Deck (6 Slides)  
> **Local Slides Archive:** `D:\2026\Simulador de Preguntas\Databricks Performance Optimization\capturas\12_spill_slide_01.png` to `06.png`

---

## Executive Summary & Core Architectural Concepts

In Apache Spark, **Spill** is the defensive mechanism by which an executor moves intermediate execution data from **RAM to local disk**, and subsequently reads it back from disk into RAM when needed for downstream computation.

```mermaid
flowchart LR
    A[Oversized Partition in RAM] -->|Exceeds Execution Memory Pool| B[Spill to Disk: Serialize & Compress]
    B -->|Local NVMe/EBS Storage| C[Spill Disk File]
    C -->|Read & Decompress on Demand| D[Reload into RAM for Computation]
```

### The Dual Role of Spill
1. **Defensive Protection:** Without spill, any task whose memory consumption exceeds available JVM heap/off-heap limits immediately crashes the executor with an `OutOfMemoryError` (`java.lang.OutOfMemoryError: Java heap space`), causing task failures, retries, and job termination.
2. **Performance Killer:** Disk reads and writes—even on high-speed NVMe solid-state drives—are orders of magnitude slower than direct memory access (nanoseconds vs. milliseconds). A query that spills can run **10x to 100x slower** than an in-memory equivalent.

---

## Slide Breakdown & Verbatim Lecture Analysis

### Slide 1: Introduction to Spill

![Slide 01 — Spill Title](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_01.png)

* **Key Concept:** Spill represents the third of the four major Spark performance bottlenecks (Skew, Shuffles, **Spill**, Serialization).

---

### Slide 2: The Physical Nature of Spill

![Slide 02 — What is Spill](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_02.png)

#### Verbatim Transcript & Principles:
* **Definition:** *"Spill is the term used to refer to the act of moving data from RAM to disk, and later back into RAM again."*
* **Trigger Condition:** Occurs when a single partition is simply too large to fit into allocated JVM execution memory during an operation such as an aggregation, sort, or join.
* **Cost:** Spark is forced into expensive disk serialization, writing blocks to local storage, and later deserializing them back into RAM.
* **Objective:** All of this costly I/O is incurred solely to prevent the fatal **OOM Error**.

---

### Slide 3: Root Causes & Code Examples

![Slide 03 — Spill Examples](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_03.png)

The lecture highlights the most frequent programmatic triggers of spill:

| Trigger Scenario | Mechanism & Impact | Recommended Action |
| :--- | :--- | :--- |
| **`spark.sql.files.maxPartitionBytes` too high** | Default is **128 MB**. Setting this value too high forces massive partitions into executor RAM during initial scan stages. | Retain default 128 MB or reduce to 64 MB for memory-constrained clusters. |
| **The `explode()` of arrays** | Exploding nested arrays or maps multiplies row counts exponentially in memory, rapidly exhausting available executor heap. | Explode selectively; filter before exploding; drop unused columns prior to explode. |
| **`join()` or `crossJoin()` generating Cartesian products** | Missing or non-selective join predicates create massive row multiplication, exceeding memory capacity. | Eliminate unintended cross joins; audit join conditions. |
| **Joins on skewed keys** | All rows matching a heavy key route to a single partition, creating a massive partition that exceeds worker RAM. | Enable AQE Skew Join (`spark.sql.adaptive.skewJoin.enabled`); apply salting. |
| **`groupBy()` on low cardinality columns** | Grouping by a column with very few distinct values can concentrate data into a few large buckets. | Use composite group keys or multi-phase aggregation. |
| **`countDistinct()` and `size(collect_set())`** | Building huge internal hash sets in memory to track distinct elements across millions of rows causes severe heap exhaustion. | Use `approx_count_distinct()` when exact precision is not mandatory. |
| **`spark.sql.shuffle.partitions` too low** | Default is 200 in open-source Spark. If processing terabytes of data, each shuffle partition becomes gigabytes in size, spilling continuously. | Allow AQE auto-coalesce or calculate: `Total Shuffle Data / Target Partition Size (128–200MB)`. |
| **Incorrect `repartition()`** | Explicitly repartitioning into too few partitions creates artificial data density per core. | Use `repartition(col)` carefully; verify target partition counts. |

---

### Slide 4: Diagnosing Spill in the Spark UI — Memory vs. Disk Metrics

![Slide 04 — Spill Memory & Disk](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_04.png)

#### The Two Core Metrics
Whenever a task spills, Spark UI reports two complementary metrics:

$$\text{Spill (Memory)} > \text{Spill (Disk)}$$

1. **`Spill (Memory)`:** The exact size of the spilled partition data as it resided uncompressed in JVM memory.
2. **`Spill (Disk)`:** The actual size of the data written to disk after undergoing internal serialization and compression.
3. **Compression Ratio:** `Spill (Disk)` is always significantly smaller than `Spill (Memory)` because Spark applies compression algorithms (e.g., LZ4, Zstandard) when writing spill blocks to disk.

#### Critical Spark UI Diagnostic Rule:
* **The "Invisible Column" Rule:** In the Spark UI (under the **Stages** tab details: Summary Metrics, Aggregated Metrics by Executor, and the Tasks table), **the Spill columns do not appear at all if no spill occurred**.
* **Significance:** If you see `Spill (Memory)` and `Spill (Disk)` columns rendered in the Spark UI, **it guarantees that spill has occurred in that stage**. You never have to wonder if a query spilled—if the column exists, it spilled!

---

### Slide 5: Comprehensive Mitigation Strategies

![Slide 05 — Spill Mitigations](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_05.png)

#### 1. Cluster Sizing: Increase RAM per Core
* Standard compute instances often provide **4 GB of RAM per vCPU** (e.g., Azure `D8s_v5`, AWS `m5.2xlarge`).
* Switching to **Memory-Optimized instances** provides **8 GB to 16 GB of RAM per vCPU** (e.g., Azure `E8s_v5`, AWS `r5.2xlarge`, GCP `n2-highmem`).
* Doubling RAM per core doubles the execution memory pool available to each concurrent task, allowing large partitions to stay entirely in-memory.

#### 2. Address Skew Directly
* Skew and spill are frequently co-dependent: an imbalanced partition creates memory pressure that triggers spill.
* Resolving skew via AQE partition splitting or salting automatically eliminates spill in that partition.

#### 3. Manage Spark Partition Sizing
* Target partition size in memory should generally be **100 MB to 200 MB**.
* Tune `spark.sql.files.maxPartitionBytes` (input scan stage).
* Tune `spark.sql.shuffle.partitions` or configure AQE advisory partition size:
  ```python
  spark.conf.set("spark.sql.adaptive.advisoryPartitionSizeInBytes", "134217728") # 128MB
  ```

#### 4. Avoid and Refactor Expensive Operations
* Avoid raw `explode()` on unbounded nested arrays.
* Replace exact distinct counts with HyperLogLog approximations (`approx_count_distinct(col, rsd=0.05)`).
* Audit joins to ensure Cartesian products are never generated accidentally.

#### 5. Preemptive Data Pruning
* **Projection Pruning:** Select only essential columns before wide transformations and joins.
* **Filter Pushdown:** Filter out unneeded records at the earliest possible stage in the execution graph.

---

### Slide 6: Lesson Conclusion

![Slide 06 — Conclusion](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/12_spill_slide_06.png)

---

## Spark UI Diagnosis Quick Reference: Spill

```
+----------------------------------------------------------------------------------------------------+
| Stage Details: Stage 12                                                                            |
| Tasks: 200 Total, 200 Succeeded                                                                    |
+---------------------+-------------------+-------------------+-------------------+------------------+
| Metric              | Min               | 25th Percentile   | Median            | Max              |
+---------------------+-------------------+-------------------+-------------------+------------------+
| Duration            | 1.2 s             | 1.5 s             | 1.8 s             | 48.0 s (Straggler)
| Spill (Memory)      | 0.0 B             | 0.0 B             | 0.0 B             | 4.2 GiB (!)      |
| Spill (Disk)        | 0.0 B             | 0.0 B             | 0.0 B             | 1.1 GiB (!)      |
| Shuffle Read Size   | 12.1 MiB          | 14.5 MiB          | 15.0 MiB          | 850.0 MiB        |
+---------------------+-------------------+-------------------+-------------------+------------------+
* Diagnosis: Severe partition skew on 1 task caused 4.2 GiB memory spill (1.1 GiB compressed on disk),
  inflating task duration to 48 seconds while median tasks completed in 1.8 seconds.
```
