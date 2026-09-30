# Lecture: Handling Task Failures and Monitoring Jobs Performance

**Curso:** Deploy Workloads with Lakeflow Jobs  
**Módulo:** Gestión de Fallos y Monitoreo  
**Tipo de Contenido:** SCORM Interactivo  
**Captura de Pantalla Completa:** `capturas/11_Handling_Task_Failures_and_Monitoring_Jobs_Performance_full.png`

---

## Overview

In this lecture, you will learn how to recover from task failures and monitor Lakeflow Jobs performance. You will see how **Repair and Rerun** supports efficient recovery from unsuccessful job runs, and how **system tables** and **Spark UI** details help you monitor jobs performance.

---

## Learning Objectives

By the end of this lecture, you will be able to:
1. **Utilize the repair run feature** to efficiently recover from failed job runs.
2. **Optimize performance monitoring and cost management** using system tables (`system.lakeflow`) and Spark UI insights to identify bottlenecks, track SLAs, and implement resource efficiency measures.

---

## A. Handling Task Failures

Failure handling isn't just about restarting tasks — it's about building resilient systems that can recover efficiently and maintain data consistency even when components fail.

### A1. Repair and Rerun

The **Repair** feature allows you to re-run and override task parameters:
- **Reduces the time and resources** required to recover from unsuccessful job runs.
- In case of Task Failure, you can:
  - **Modify the task** and run again.
  - **Modify the parameters** and run again.

#### Additional Notes: Repair Feature Architecture
The Repair feature represents a sophisticated approach to failure recovery:
- **Targeted Recovery:** Instead of restarting entire workflows, you can modify specific failed tasks and rerun only what's necessary. This saves significant time and computational resources.
- **Parameter Override Capability:** The ability to modify parameters during repair runs enables you to fix configuration issues, adjust resource allocation, or change processing logic without rebuilding the entire job.
- **Recovery Scenarios:**
  - **Configuration Fixes:** Correct parameter values that caused task failures.
  - **Resource Adjustments:** Increase memory or compute resources for tasks that failed due to resource constraints.
  - **Code Updates:** Deploy fixes for logic errors and rerun only affected tasks.
  - **Data Quality Issues:** Adjust processing logic to handle data quality problems discovered during execution.
- **Cost Efficiency:** By rerunning only failed tasks, you minimize unnecessary computation and reduce costs, especially important for large, complex workflows.

---

### A2. Repair Run

- Allows you to run **only failed tasks**, saving you time and money by only re-running the necessary tasks instead of the entire job.
- Click the highlighted failed task to open the job run details.

#### Additional Notes: Selective Re-Execution Benefits
The selective re-execution capability provides massive operational benefits:
- **Resource Optimization:** Running only failed tasks instead of entire workflows can reduce recovery time by **80–90%** in complex pipelines, saving both time and money.
- **Reduced Risk:** Smaller recovery operations have less impact on system resources and reduce the risk of cascading failures during recovery attempts.
- **Faster Resolution:** Teams can respond to failures more quickly when they don't need to wait for entire workflows to complete, improving SLA adherence and business responsiveness.

> **Critical Operational Distinction:**  
> **Fixing a task in a Repair Run does NOT automatically update the original Job definition.**  
> *Example:* If you pass the wrong parameter and fix it using the repair run feature, you **still need to edit that parameter in your base Job configuration** so that future scheduled runs succeed.

---

### A3. After Repair Run

After re-running the task, your final job run history displays the updated execution status.

#### Additional Notes: Governance and Audit
- **Audit Trail:** Complete visibility into what was repaired, when, and by whom, providing essential information for troubleshooting and process improvement.
- **Success Validation:** Clear indication of which tasks were recovered successfully, enabling confidence in the repair process.
- **Learning Opportunities:** Historical repair data helps teams identify patterns in failures and improve initial job design to prevent future issues.

---

## B. Monitoring Jobs Performance

Monitoring jobs performance requires both high-level telemetry and granular execution profiling:

### B1. System Tables (`system.lakeflow`)

`system.lakeflow` is a built-in, read-only catalog that logs all job activity across workspaces in the region.

#### Timeline Tables
Timeline tables slice long runs hourly using `period_start_time` and `period_end_time`, enabling reliable duration, concurrency, and SLA analytics.

#### Key Tables Catalog

| Table | Description |
|---|---|
| `jobs` | Job basic info and metadata |
| `job_tasks` | Task basic definitions and configurations |
| `job_run_timeline` | Each job run over time (sliced hourly) |
| `job_task_run_timeline` | Each task run over time (sliced hourly) |
| `pipelines` | Pipelines basic info (Spark Declarative Pipelines) |

#### Additional Notes: Enterprise Monitoring Capabilities
- **Comprehensive Logging:** All job activity across all workspaces in the region is automatically logged, providing complete visibility into workflow execution patterns and performance trends.
- **Timeline Analysis:** Timeline tables use `period_start_time` and `period_end_time` to slice long-running jobs into hourly segments, enabling accurate duration analysis, concurrency tracking, and SLA measurement even for complex, long-running workflows.
- **Analytics Capabilities:** This data enables sophisticated analytics including cost analysis, performance trending, SLA compliance tracking, and resource utilization optimization.

---

### B2. Spark UI Insights

The Spark UI provides detailed performance insights for optimization:

- **Timeline in Job Run:** Highlights task start/end, duration, and overlap to spot bottlenecks fast.
- **Task-Level Details:** Click a task to see status, timestamps, duration, cluster/runtime, logs, and quick I/O.
- **Query / Code Details:** Click for full text, run ID, wall-clock split (optimizing/pruning vs. executing), files read/written details, files & partitions, and data spill details.

#### Performance Diagnostic Matrix

| Bottleneck Observed | Probable Cause | Actionable Remediation |
|---|---|---|
| **High Planning Time** | Excessive metadata scanning, unpruned partitions | Improve partition pruning, optimize table partitioning strategy, run `ANALYZE TABLE` |
| **High Execution Time** | Expensive joins, skewed data partitions | Optimize joins/aggregations (broadcast joins, handle skew with skew hints/AQE) |
| **Data Spill (Disk / Memory)** | Insufficient executor memory for shuffle partitions | Increase cluster worker size, tune `spark.sql.shuffle.partitions`, optimize broadcast thresholds |

---

## C. Conclusion

1. **Repair runs** let you re-run only failed tasks, override parameters, reduce recovery time/cost, and track the recovery in job run history.
2. **`system.lakeflow`** logs job activity and provides timeline tables for duration, concurrency, and SLA analytics.
3. **Spark UI** helps identify bottlenecks by showing task timing, overlaps, planning time, and execution time for optimization.

### Next Steps
In the next demo, you will get hands-on experience with the complete failure handling lifecycle.
