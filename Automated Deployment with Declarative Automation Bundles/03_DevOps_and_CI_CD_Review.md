# Lesson 03: DevOps and CI/CD Review

> **Course:** Automated Deployment with Declarative Automation Bundles (Course ID: 3489)  
> **Pathway:** Databricks Certified Professional Data Engineer  
> **Lesson ID:** 65355:3595  
> **Type:** SCORM Interactive Lecture (Articulate Rise)  
> **Captures:** [capturas/03_devops_ci_cd_view.png](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/03_devops_ci_cd_view.png)

---

## 1. Overview & Learning Objectives

![DevOps and CI/CD Review Overview](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/03_devops_ci_cd_view.png)

In this lecture, you will review the DevOps and CI/CD foundations that the rest of this course builds on. These topics are prerequisites, so the review moves quickly and establishes a shared vocabulary before you begin deploying Databricks projects with **Declarative Automation Bundles (DABs)**.

### Official Learning Objectives
By the end of this lecture, you will be able to:
1. **Describe** the core concepts and benefits of DevOps and explain how they extend to data engineering as **DataOps**.
2. **Explain** Continuous Integration and Continuous Delivery/Deployment (CI/CD), and distinguish **Continuous Delivery** from **Continuous Deployment**.
3. **Describe** the role of automated testing across **Unit**, **Integration**, and **System** tests.
4. **Explain** how environments and data are isolated across **DEV**, **STAGE**, and **PROD**.
5. **Identify** the tools available to deploy Databricks projects: the **REST API**, the **Databricks SDKs**, and the **Databricks CLI**.

---

## 2. Section A: DevOps Review

### A1. What is DevOps?
DevOps sits at the intersection of **Software Engineering Best Practices** and **IT Operations**:
- Fosters **collaboration** between development and operations teams to **automate jobs** and **streamline processes**.
- **Key benefits include:**
  - *Faster deployments*
  - *Improved collaboration*
  - *Enhanced reliability*
  - *Better scalability*

### A2. The DevOps Lifecycle
DevOps is a process for continuously integrating, testing, and deploying your code across:
`Plan → Code → Build → Test → Release → Deploy → Operate → Monitor`.

### A3 & A4. DataOps = DevOps for Data Engineering
- The same DevOps principles extend to data pipelines as **DataOps**, and to machine learning as **MLOps**.
- **DataOps** applies the same principles of automation, collaboration, and continuous improvement to your data workflows.
- Thinking about how DevOps principles and culture can be applied directly to **Data Engineering pipelines** ensures consistent, testable, and reliable data delivery.

---

## 3. Section B: Continuous Integration and Continuous Delivery/Deployment (CI/CD)

### B1. The Role of CI/CD in DevOps
CI/CD is a key subset of DevOps that automates code integration, testing, and delivery. It splits into two complementary halves:
1. **Continuous Integration (CI):** Integration and testing of code changes into a central repository.
2. **Continuous Delivery/Deployment (CD):** Releasing and deploying the tested code into target staging and production environments.

### B2. Continuous Integration (CI) High-Level Overview
CI involves regularly merging code changes from multiple contributors into a central repository and running automated tests to ensure code quality:
- **Early Detection:** Catch issues sooner before they compound.
- **Faster Cycle:** Ship features and bug fixes faster.
- **Collaboration:** Cleaner code with fewer merge conflicts.
- **Automated Testing:** Stable code protected by regression suites.

### B3. Testing Pyramid in Data Engineering
Automated testing follows the **Testing Pyramid**: fast, cheap tests at the base run constantly; slower, broader tests at the top run less often:
1. **Unit Tests (Base — Fast, Cheap, High Coverage):**
   - Test individual functions or methods in isolation.
   - *Example:* Custom PySpark functions, data transformation utilities.
2. **Integration Tests (Middle — Slower, Moderate Scope):**
   - Test the interaction between different components or systems.
   - *Example:* Databricks Notebooks, Spark Declarative Pipelines (SDP), Lakeflow Jobs tasks.
3. **System Tests (Top — Slowest, Broadest, Realistic):**
   - Test the entire application end-to-end, ensuring all parts function together in a real-world scenario.
   - *Example:* End-to-end data pipeline in a Workflow orchestration.

### B4. Continuous Delivery vs. Continuous Deployment
Both share the same automated pipeline up to staging:
- **Continuous Delivery (CD) — Manual Push to Production:**
  - `Develop → Version Control → AUTO Build → AUTO Test → AUTO Deploy to Stage → MANUAL Deploy to Production`.
  - Automatically pushes changes to staging/pre-production, with the ability to manually trigger production deployment at any approved time.
- **Continuous Deployment (CD) — Automatic Push to Production:**
  - `Develop → Version Control → AUTO Build → AUTO Test → AUTO Deploy to Stage → AUTO Deploy to Production`.
  - A fully automated process where each change that passes all tests and quality gates is immediately deployed to live production without human intervention.

### B5. High-Level CI/CD Workflow Overview
The unified lifecycle combines:
- **CI:** Develop, Build, Test, Version Control.
- **CD:** Deploy to Stage, Deploy to Production.

---

## 4. Section C: Environment & Data Isolation

### B6. Isolating Environments for CI/CD
A CI/CD workflow keeps development and testing isolated from live production. In Databricks, environments are isolated using:
1. **Multiple Workspaces:** Dedicated Databricks workspaces for **DEV**, **STAGE**, and **PROD**.
2. **Multiple Catalogs:** Unity Catalog isolation with separate catalogs for **DEV**, **STAGE**, and **PROD** (e.g., `dev_catalog`, `stage_catalog`, `prod_catalog`).
3. **Hybrid (Workspaces + Catalogs):** Binding catalogs to specific workspaces for complete security and network perimeter enforcement.

### B7. Setting Up Your Data for CI/CD
Each environment uses data suited to its purpose:
- **DEV Data:**
  - Small static subset of production data.
  - Anonymized or synthetic datasets.
  - Supports rapid development, low compute cost, and strict privacy/integrity.
- **STAGE Data:**
  - Mirrors production structure, schema, and volume (typically static snapshot).
  - Anonymized or scrubbed of sensitive PII.
  - Ensures realistic testing, performance validation, and regression benchmarking.
- **PROD Data:**
  - Live and fully operational.
  - Contains real user data, continuously updated.
  - Requires maximum security, encryption, privacy compliance (GDPR/HIPAA), and audit logging.

---

## 5. Section D: Deployment Tools in Databricks

### B8. Deployment Tools Overview
Databricks offers three primary ways to automate deployment:
1. **REST API:** Direct HTTP requests to Databricks endpoints. Requires manual payload construction and token header management.
2. **Databricks SDKs:** Accelerate programmatic development covering public REST API operations across **Python**, **Java**, **Go**, and **R**.
3. **Databricks CLI:** Command-line interface for terminal and CI/CD pipelines. Uses **Declarative Automation Bundles (DABs)** to define and deploy infrastructure-as-code (IaC). *This is the core methodology of this course.*

### B9. Connecting and Authenticating the Databricks CLI
Three primary connection environments:
- **Web Terminal:** Run CLI commands directly inside the Databricks UI. Authenticates automatically as the current user.
- **VS Code:** Local development environment using the Databricks VS Code Extension with OAuth / PAT authentication.
- **Databricks Notebook (`%sh`):** Execute shell commands directly in a notebook cluster cell. Authenticate via personal access token (PAT) or Databricks secrets. *Main method utilized throughout this course's hands-on demos.*

---

## 6. Conclusion & Critical Next Step

- **DevOps Core:** Integrates code, tests, and deployments across the full lifecycle; applied to data pipelines it is **DataOps**.
- **Delivery vs Deployment:** Delivery retains a manual gate before production; Deployment is 100% automated.
- **Testing Pyramid:** Unit tests at base (fast, custom PySpark), Integration tests in middle (Notebooks/Pipelines), System tests at top (full Workflows).
- **Isolation:** Multi-workspace and multi-catalog architectures with tiered synthetic, staged, and live production data.

> [!IMPORTANT]
> **Mandatory Setup Prerequisite:** Before continuing, you must execute the setup notebook `./02 - REQUIRED - Course Setup and Authentication`. It provisions the isolated catalogs (`dev_...`, `stage_...`, `prod_...`) and configures Databricks CLI authentication used in every subsequent demo and lab.
