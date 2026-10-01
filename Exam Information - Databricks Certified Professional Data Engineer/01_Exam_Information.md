# Databricks Certified Data Engineer Professional — Exam Information

**Official Link:** [Databricks Certified Data Engineer Professional](https://databricks.com/learn/certification/data-engineer-professional)  
**Academy Course ID:** 470  
**Learning Plan:** Data Engineer Learning Plan  
**Exam Guide Reference:** `databricks-certified-data-engineer-professional-exam-guide-oct-2026.pdf` (October 2026 Edition)

---

## Overview

The **Databricks Certified Data Engineer Professional** certification exam validates a candidate's advanced skills in building, optimising, and maintaining production-grade data engineering solutions on the Databricks Data + AI Platform across multi-cloud environments. 

Successful candidates demonstrate deep expertise across core platform features such as:
- **Delta Lake & Storage Architecture:** ACID transactions, time travel, deletion vectors, Liquid Clustering, Change Data Feed (CDF), data skipping, file pruning, and caching.
- **Lakeflow Declarative Pipelines (formerly DLT):** Batch and streaming pipelines, streaming tables vs. materialized views, Auto Loader, AUTO CDC APIs (`APPLY CHANGES`), data quality expectations (quarantine, drop, fail), and pipeline event log monitoring.
- **Lakeflow Jobs & Orchestration:** Complex multi-task orchestration, control-flow operators (If/Else branching, For Each loops), job repairs, parameter overrides, error remediation, and REST API/CLI integration.
- **Compute & Performance Optimization:** Serverless compute environments, dependency management, high-memory notebook tasks, Predictive Optimization, Query Profiler UI, Spark UI stage analysis, and data shuffling reduction.
- **Data Governance & Unity Catalog:** Securable objects hierarchy, permission inheritance model, ABAC policies with governed tags, row filters, column masks, data discovery metadata, and Unity Catalog Metric Views.
- **Security & Compliance:** Least-privilege access control lists (ACLs), anonymization/pseudonymization (hashing, tokenization, suppression, generalization), PII detection/masking pipelines, and GDPR right-to-erasure/data-purging solutions.
- **Data Sharing & Federation:** Delta Sharing (Databricks-to-Databricks D2D and Databricks-to-Open D2O), Clean Rooms, and Lakehouse Federation with connection-level credentials.
- **DevOps, CI/CD & Automation:** Declarative Automation Bundles (DABs / Databricks Asset Bundles), `databricks.yml` target configuration, Git-based CI/CD workflows, Databricks CLI, REST APIs, and automated unit testing (`assertDataFrameEqual`, `assertSchemaEqual`).

---

## Cutover Schedule: Current Exam vs. New Exam

| Version | Availability | Number of Scored Questions | Time Limit | Languages |
|---|---|:---:|:---:|---|
| **Current Exam** | Through **October 8, 2026** | 59 scored questions | 120 minutes | English, Japanese (日本語), Portuguese (pt-BR), Korean (한국어) |
| **New Exam** | From **October 9, 2026** | 60 scored questions | 120 minutes | English |

---

## Exam Domain Weighting Comparison

| Section | Current Exam (Through Oct 8, 2026) | Weight | New Exam (From Oct 9, 2026) | Weight |
|:---:|---|:---:|---|:---:|
| **1** | Developing Code for Data Processing using Python & SQL | **22%** | Developing Code for Data Processing using Python and SQL | **23%** |
| **2** | Data Ingestion & Acquisition | **7%** | Data Ingestion & Acquisition | **12%** |
| **3** | Data Transformation, Cleansing, and Quality | **10%** | Data Manipulation (Semi-structured VARIANT, AI Functions) | **12%** |
| **4** | Data Sharing and Federation | **10%** | Monitoring and Alerting | **10%** |
| **5** | Monitoring and Alerting | **10%** | Cost & Performance Optimization | **15%** |
| **6** | Cost & Performance Optimization | **13%** | Ensuring Data Security and Compliance | **8%** |
| **7** | Ensuring Data Security and Compliance | **10%** | Data Governance | **5%** |
| **8** | Data Governance | **7%** | Debugging and Deploying (DABs, CI/CD) | **10%** |
| **9** | Debugging and Deploying | **10%** | Data Modeling (Liquid Clustering, Metric Views) | **5%** |
| **10** | Data Modeling | **7%** | *(Consolidated into Section 9)* | — |
| **Total** | | **100%** | | **100%** |

---

## Assessment Details

- **Exam Type:** Proctored certification
- **Question Types:** Multiple-choice
- **Possible Unscored Questions:** Up to 10 unscored questions may be included for statistical research without impacting candidate score. Additional time is already factored in.
- **Registration Fee:** USD 200, plus applicable local taxes
- **Delivery Method:** Online proctored (Kryterion Webassessor) or testing center
- **Test Aides:** None allowed
- **Prerequisites:** None required; completion of related Academy courses and 1 year of hands-on data engineering experience strongly recommended.
- **Validity Period:** 2 years
- **Recertification:** Required every two years by taking the current live version of the exam.
- **Primary Coding Languages:** Python / PySpark and SQL.

---

## Recommended Self-Paced Preparation (Databricks Academy)

1. **Advanced Techniques with Apache Spark™ Declarative Pipeline**
2. **Databricks Data Privacy**
3. **Databricks Performance Optimization**
4. **Automated Deployment with Declarative Automation Bundles (DABs)**
