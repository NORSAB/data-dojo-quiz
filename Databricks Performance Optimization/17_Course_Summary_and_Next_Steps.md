# Lesson 17: Course Summary and Next Steps

> **Course:** Databricks Performance Optimization (Course ID: 2967)  
> **Pathway:** Databricks Certified Professional Data Engineer  
> **Lesson ID:** 25614  
> **Type:** HTML Content  
> **Capture:** [capturas/17_course_summary.png](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/17_course_summary.png)

---

## 1. Course Completion & Core Learning Objectives

![Course Summary Screenshot](file:///D:/2026/Simulador%20de%20Preguntas/Databricks%20Performance%20Optimization/capturas/17_course_summary.png)

### Official Learning Outcomes Achieved
Having completed the core instructional curriculum of the **Databricks Performance Optimization** course, candidates have developed mastery across two primary competencies:

1. **Describe strategies and best practices for optimizing workloads on Databricks:**
   - **Data Layout:** Mitigating file explosion via Auto-Optimize / Auto-Compaction (`optimizeWrite`), replacing legacy Hive-style multi-column partitioning with multidimensional **Liquid Clustering** (`CLUSTER BY`), and maximizing Parquet data skipping.
   - **Code & Query Execution:** Identifying and eliminating computational skew (AQE skew join handling, manual salting), minimizing wide shuffles (Broadcast Hash Joins, partition pruning), preventing memory spill to disk, avoiding expensive serialization penalties, and inlining user-defined logic into native Databricks SQL / Python UDFs accelerated by **Photon**.
   - **Cluster Architecture & Sizing:** Applying the empirical IFTTT decision tree to select instance families across AWS, Azure, and GCP, targeting the 1 core per 128 MB–2 GB read ratio, constraining worker memory below 128 GB to prevent GC overhead, utilizing stable spot markets (`r5d`, `m6gd`), and sizing driver nodes appropriately for heavy Delta commits.

2. **Analyze information presented in the Spark UI, Ganglia UI, and Cluster UI to assess performance and debug applications:**
   - **Spark UI:** Navigating Jobs, Stages, Tasks, Storage, Executors, and SQL/Dataframe query plans (visualized DAGs).
   - **SQL Execution DAGs:** Inspecting operator details (`Scan parquet`, `HashAggregate`, `SortMergeJoin`, `ShuffleExchange`) for metrics like `number of files read`, `filesystem read data size`, `spill size (memory / disk)`, and task duration distributions.
   - **Cluster & Ganglia Metrics:** Monitoring cluster-wide CPU utilization, cluster memory distribution, network bytes transmitted, and Ganglia load metrics to detect idle workers or node-level bottlenecks.
   - **Cluster Event Log:** Identifying spot instance preemption events, cluster resizing cycles, and autoscaling oscillations.

---

## 2. Next Steps & Continuous Learning

- **Feedback & Course Evaluation:** Complete the official Databricks Academy course survey.
- **Databricks Academy Pathway:** Continue along the **Databricks Certified Professional Data Engineer** track, preparing for advanced distributed system design and streaming optimization assessments.
