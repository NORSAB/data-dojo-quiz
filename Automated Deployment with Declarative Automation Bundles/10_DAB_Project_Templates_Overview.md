# Lecture: DAB Project Templates Overview

## Overview
In this lecture, you learn how to scaffold Databricks Asset Bundles rapidly using built-in project templates without starting from scratch. You will examine the official default templates provided by Databricks, discover how to architect custom enterprise templates, and learn the CLI initialization commands.

---

## Learning Objectives
By the end of this lecture, you will be able to:
- **Use** a Databricks default bundle template to create a pre-configured bundle project.
- **Describe** the mandatory components and architecture of a custom bundle template.
- **Initialize** projects from local directories or remote Git repositories using `databricks bundle init`.

---

## A. Bundle Project Templates

### A1. Default Databricks Bundle Templates
Databricks includes pre-built official templates tailored for common data engineering, analytics, and machine learning architectures:

| Default Template | Primary Use Case | Scaffolded Assets |
| :--- | :--- | :--- |
| **`default-python`** | Python-based data pipelines | Python notebooks, tasks, unit tests, and CI/CD workflows. |
| **`default-sql`** | SQL and Lakeflow workflows | SQL queries, Lakeflow Jobs, and dashboard definitions. |
| **`dbt-sql`** | dbt Core on Databricks | dbt project folder, connection profiles, and dbt task wrappers. |
| **`mlops-stacks`** | Production Machine Learning | MLflow experiment tracking, Feature Store integration, and model deployment stacks. |

#### CLI Command:
To initialize a project using an official default template:

```bash
databricks bundle init default-python
```

When invoked, the CLI launches an interactive setup wizard prompting for:
1. Bundle name.
2. Root catalog and schema.
3. Cloud workspace URLs and target environment names.

---

## B. Custom Bundle Templates

Organizations can standardize bundle conventions across data teams by building custom internal templates.

### B1. Core Architecture and Minimum Requirements
A valid custom DAB template requires two core files at its root:

```text
my-custom-template/
├── databricks_template_schema.json     # REQUIRED: Defines interactive user prompts and variable validation rules
└── databricks.yml.tmpl                 # REQUIRED: Jinja-templated YAML configuration file
```

#### The Two Mandatory Files:
1. **`databricks_template_schema.json`**:
   - Outlines the interactive prompts displayed to the user when `databricks bundle init` runs.
   - Specifies variable names, data types, descriptions, default values, and validation patterns.
2. **`databricks.yml.tmpl`**:
   - The template file parsed by the CLI engine.
   - Contains placeholder expressions (e.g. `{{.project_name}}`, `{{.catalog_name}}`) substituted with values entered by the user during the initialization wizard.

### B2. Customization Capabilities
- **Custom Folder Hierarchies:** Embed standardized `resources/`, `src/`, `tests/`, and `.github/workflows/` directories.
- **Pre-Configured Governance:** Enforce organizational Unity Catalog naming conventions, service principal definitions, and tagging rules.
- **Boilerplate Code:** Include reusable Python helper utilities, SQL template transformations, or testing fixtures.

### B3. Initializing from Custom Path or URL
You can initialize a project directly from a local filesystem path or a remote Git URL:

```bash
# Initialize from local directory path
databricks bundle init /projects/templates/test-template

# Initialize from remote Git repository
databricks bundle init https://github.com/my-enterprise-org/databricks-bundle-template.git
```

---

## C. Conclusion
- Databricks eliminates manual configuration overhead with default bundle templates (`default-python`, `default-sql`, `dbt-sql`, `mlops-stacks`).
- Teams can build **custom templates** to enforce engineering standards, requiring only `databricks_template_schema.json` and `databricks.yml.tmpl`.
- The CLI command `databricks bundle init` handles both built-in templates and custom local/remote templates seamlessly.

---

## Next Steps
In the next lecture, you will review end-to-end CI/CD project architecture, branch strategies, and automation triggers when deploying DABs in production teams.
