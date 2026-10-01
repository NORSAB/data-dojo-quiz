# Lesson 04: Demo — Course Setup and Authentication

> **Course:** Automated Deployment with Declarative Automation Bundles (Course ID: 3489)  
> **Pathway:** Databricks Certified Professional Data Engineer  
> **Lesson ID:** 34041  
> **Type:** In-Product Walkthrough Video (Duration: 8min 56sec)  
> **Captures:**
> - [capturas/04_demo_course_setup.jpg](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/04_demo_course_setup.jpg)
> - [capturas/04_demo_course_setup_02.jpg](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/04_demo_course_setup_02.jpg)

---

## 1. Overview & Setup Prerequisites

![Course Setup Notebook](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/04_demo_course_setup.jpg)

This hands-on walkthrough establishes the mandatory configuration and credential plumbing required across all course demonstrations and lab exercises in the Databricks Academy environment.

### Workspace Folder Architecture
The course repository is structured into modular demonstration and lab directories:
- `01 - Deploying a Simple DAB`
- `02L - Deploy a Simple DAB (Lab)`
- `03 - Deploying a DAB to Multiple Environments`
- `04L - Deploy a DAB to Multiple Environments (Lab)`
- `05L - Use a Databricks Default DAB Template (Lab)`
- `06 - Continuous Integration and Continuous Deployment with DABs`
- `07L - Adding ML to Engineering Workflows with DABs (Lab)`
- `08 Bonus - Using VSCode with Databricks`
- `Includes/`
  - `0 - REQUIRED - Course Setup and Authentication` (Root initialization script)
- `var_<your_user_name>/` (User-isolated configuration and token persistence)

---

## 2. Generating Personal Access Tokens (PAT) & Credentials

In a production enterprise architecture, PATs should never be stored in plain text; instead, organizations must enforce OAuth M2M service principals, secret scopes (`dbutils.secrets`), or cloud-native identity tokens (AWS IAM / Azure Managed Identity).

For the controlled lab environment:
1. Navigate to **User Settings** from the upper-right account menu.
2. Select **Developer** → **Access tokens** → **Manage**.
3. Select **Generate new token** with appropriate expiration and comment description.
4. Return to the initialization notebook and execute:
   ```python
   DA.get_credentials()
   ```
5. Input the generated PAT and Databricks Host URL into the rendered text widgets. The helper saves the credentials into the user's isolated workspace directory `var_<user_id>`.

---

## 3. Validating Databricks CLI Authentication

![Databricks CLI Help Output](file:///D:/2026/Simulador%20de%20Preguntas/Automated%20Deployment%20with%20Declarative%20Automation%20Bundles/capturas/04_demo_course_setup_02.jpg)

The notebook tests that the Databricks CLI v0.200+ is functioning inside the `%sh` environment:

```bash
%sh
databricks --help
```

### Core CLI Resource Groups Verified:
- **Workflows & Compute:**
  - `jobs`: Create, run, and manage multi-task orchestration workflows.
  - `pipelines`: Manage Delta Live Tables / Lakeflow Spark Declarative Pipelines.
  - `clusters`: Provision and inspect all-purpose and job compute clusters.
  - `warehouses`: Manage serverless and pro SQL warehouses.
- **Unity Catalog CLI Commands:**
  - `catalogs`: First layer of the 3-level namespace (`catalog.schema.table`).
  - `schemas`: Second layer organizing tables and views.
  - `volumes`: Governance for unstructured and semi-structured files.
  - `external-locations`: Bound storage credentials for cloud object storage paths.
  - `grants`: Declarative privilege management (secure by default).
- **Declarative Automation Bundles (DABs):**
  - `bundle`: Validate, deploy, and run declarative YAML bundle projects as infrastructure-as-code.
