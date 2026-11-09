# Lesson 18: Additional Resources

> **Course:** Databricks Performance Optimization (Course ID: 2967)  
> **Pathway:** Databricks Certified Professional Data Engineer  
> **Lesson ID:** 44406  
> **Type:** HTML / Reference Hub  
> **Capture:** [capturas/18_resources.png](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/18_resources.png)

---

## 1. Key External References and Architectural Foundations

### Massively Parallel Processing (MPP) Architecture
- **Reference Document:** [Massively parallel - Wikipedia](https://en.wikipedia.org/wiki/Massively_parallel)
- **Architectural Context:** The underlying distributed architecture of Apache Spark and Databricks is built upon massively parallel processing (MPP). In an MPP architecture:
  - Workloads are segmented across independent shared-nothing execution nodes (workers).
  - Each processing unit (core) executes instructions on localized partition slices.
  - High-throughput interconnects handle shuffle stages when data must be redistributed across hash partitions.
  - Performance optimization centers on maximizing parallel computation while minimizing synchronization overhead, network transfers, disk spills, and skew.

---

## 2. Official Databricks Performance & Best Practice Resources

### 1. Data Layout & Delta Lake
- **Liquid Clustering Documentation:** Official guide on replacing legacy partition schemes (`PARTITIONED BY`) with mutable multidimensional Z-order clustering (`CLUSTER BY`) for optimal data skipping.
- **Auto-Compaction & Optimize Write:** Configuration parameters and automatic background maintenance for eliminating the small-file problem ("file explosion").
- **Delta Caching:** Utilizing worker-local SSDs to cache remote object storage blocks in decompressed form.

### 2. Query Optimization & Execution Engine
- **Photon Engine Guide:** In-depth architectural review of the C++ vectorized execution engine, off-heap memory management, SIMD instruction pipelines, and operator coverage.
- **Adaptive Query Execution (AQE):** Mechanics of runtime plan adaptation, dynamic coalesce of shuffle partitions, dynamically handling skewed joins, and converting SortMergeJoins into BroadcastHashJoins.
- **Spark UI & Query Plan Profiling:** Official Databricks guide to reading physical plans (`Explain(formatted=True)`), identifying Stage dependencies, evaluating task metrics, and spotting skew or spill in SQL DAG graphs.

### 3. Cluster Configuration & Compute Sizing
- **Databricks Compute Sizing Best Practices:** Driver and worker sizing, memory constraints ($<128\text{ GB}$ per node), core-to-read ratios ($1\text{ core} : 128\text{ MB} - 2\text{ GB}$), and spot instance stability profiles (e.g., preferring `r5d`/`m6gd` over legacy `i3` instances).
