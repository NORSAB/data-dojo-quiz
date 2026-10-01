# Lecture: Variable Substitutions in DABs

## Overview
In this lecture, you will learn how variables make Declarative Automation Bundles dynamic, configurable, and reusable. You will examine the built-in substitutions Databricks provides, learn how to declare simple, complex, and lookup variables, explore target-specific overrides, and understand the core architectural benefits of parameterization in DABs.

---

## Learning Objectives
By the end of this lecture, you will be able to:
- **Use** the default variable substitutions available in a bundle.
- **Define** simple custom variables, complex variables, and lookup variables.
- **Override** variable values for a specific target environment.
- **Explain** the benefits of using variables in Declarative Automation Bundles.

---

## A. Variables Overview

Declarative Automation Bundles support both **default substitutions** and **custom variables**, both of which allow values to be resolved dynamically when the bundle is validated, deployed, and executed. All substitutions and variables are referenced using the `${...}` syntax.

### A1. Built-In Default Substitutions
Databricks automatically provides built-in context variables that require no manual declaration:

| Substitution | Description |
| :--- | :--- |
| **`${bundle.name}`** | Name of the bundle defined in the root `bundle:` mapping. |
| **`${bundle.target}`** | Name of the target environment currently being deployed (e.g., `development`, `production`). |
| **`${workspace.file_path}`** | Full workspace path where bundle files are synchronized. |
| **`${workspace.root_path}`** | Root workspace directory for the bundle deployment. |
| **`${resources.jobs.<job-key>.id}`** | The runtime Databricks Job ID generated in the workspace. |
| **`${resources.models.<model-key>.name}`** | Name of the registered MLflow model resource. |
| **`${resources.pipelines.<pipeline-key>.name}`**| Name of the Spark Declarative Pipeline resource. |

---

## B. Defining Custom Variables

Custom variables are declared in the root `databricks.yml` file within the top-level **`variables`** mapping.

### B1. Simple Custom Variables
By default, variables are treated as strings. Variables can reference other variables using the `${var.<variable_name>}` syntax:

```yaml
bundle:
  name: demo08_bundle

variables:
  my_lab_user_name:
    description: "Your user name"
    default: labuser23904

  catalog_dev:
    description: "Development catalog reference"
    default: ${var.my_lab_user_name}_1_dev

  catalog_prod:
    description: "Production catalog reference"
    default: ${var.my_lab_user_name}_3_prod
```

### B2. Defining Complex Variables
To pass structured data or configurations (such as cluster definitions, compute specs, or nested parameters), set **`type: complex`**:

```yaml
variables:
  my_cluster:
    description: "My custom cluster configuration"
    type: complex
    default:
      spark_version: "15.4.x-scala2.11"
      node_type_id: "Standard_DS3_v2"
      num_workers: 2
```

### B3. Lookup Variables
Lookup variables resolve human-readable platform object names into their internal Databricks IDs dynamically at deploy time. This eliminates hardcoding environment-specific resource IDs:

```yaml
variables:
  my_cluster_id:
    description: "Get the cluster ID using a lookup variable"
    lookup:
      cluster: myclustername
```

### B4. Supported Lookup Object Types
You can configure dynamic lookups for a comprehensive set of Databricks workspace objects:
- **`cluster`** & **`cluster_policy`**
- **`job`**
- **`pipeline`** (SDP)
- **`warehouse`** (SQL Warehouse)
- **`instance_pool`**
- **`metastore`**
- **`service_principal`**
- **`dashboard`**
- **`alert`**
- **`query`**
- **`notification_destination`**

---

## C. Target Environment Overrides

### C1. Overriding Variables per Environment
Use the **`targets`** mapping to supply environment-specific overrides for variables declared in the `variables:` block:

```yaml
variables:
  target_catalog:
    description: "Catalog used for pipeline tables"
    default: labuser23904_1_dev   # REQUIRED: Default value must exist!

targets:
  development:
    mode: development
    default: true
    variables:
      target_catalog: ${var.catalog_dev}

  production:
    mode: production
    variables:
      target_catalog: ${var.catalog_prod}
```

> [!IMPORTANT]
> **Strict Rule:** A `default` value for the variable **MUST** be defined in the top-level `variables:` mapping in order for a target-specific override to work during bundle validation and deployment.

---

## D. Why Variables Matter

1. **Customizable for Different Environments:** Easily modify configurations (catalog names, schemas, database connections, cloud storage file paths, compute sizing) across development, staging, and production without touching underlying code.
2. **Reusability Across Projects and Workspaces:** The same bundle template can be shared across multiple engineering squads, projects, or regional cloud workspaces simply by adjusting input variables.
3. **Easy Maintenance and Centralized Updates:** Modifying a variable in a single central location propagates consistently across all referenced jobs, pipelines, and tasks, dramatically reducing human error.

---

## E. Conclusion
- Bundles supply built-in substitutions like `${bundle.name}` and `${workspace.root_path}` out of the box.
- Developers define **simple** (strings), **complex** (nested maps), and **lookup** (dynamic ID resolution) custom variables.
- Target overrides allow environment-tailored parameters while keeping a single source of truth.
- Variables make Declarative Automation Bundles modular, portable, and production-ready.

---

## Next Steps
In the next demo, you will observe multi-environment deployments in action using variable substitutions and target overrides.
