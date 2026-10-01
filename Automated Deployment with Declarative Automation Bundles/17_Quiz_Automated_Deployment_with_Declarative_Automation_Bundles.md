# Quiz: Automated Deployment with Declarative Automation Bundles

## Official Score Summary
- **Result:** Passed (100%)
- **Score:** 100 / 100 points (20 / 20 questions correct, 5 points each)
- **Passing Threshold:** 80% (80 / 100)
- **Status:** Completed & Certified

---

## Question Bank & Verified Answer Key

### Question 1
**Prompt:**
A CI engineer at Kestrel Logistics is scripting an automated pipeline. They want to reuse a single bundle definition but supply a different catalog value at deploy time for a one-off validation run, without editing databricks.yml or its variables file. databricks bundle validate --var="target_catalog=kestrel_2_stage" -t stage Considering how variable values are resolved, why does this command successfully use kestrel_2_stage even if variables.yml sets a different default?

**Options:**
- [ ] **A:** Target configuration always overrides command-line values, so kestrel_2_stage is ignored
- [ ] **B:** The --var flag permanently rewrites the default in variables.yml for future runs
- [ ] **C:** Validation ignores all variable values, so the --var flag has no real effect
- [x] **D:** Command-line --var values take precedence over environment variables, override files, target configuration, and defaults

**Correct Answer:**
**Command-line --var values take precedence over environment variables, override files, target configuration, and defaults**

**Official Databricks Answer Notes:**
> The CLI resolves variable values in a precedence order, and command-line --var options rank highest, ahead of environment variables, the override file, target configuration, and defaults. So --var wins for that run. It does not rewrite variables.yml permanently (option b), validation does substitute variables (option c), and target configuration does not outrank the command line (option d). See https://docs.databricks.com/en/dev-tools/bundles/variables

---

### Question 2
**Prompt:**
A data platform lead at Orchard Freight is hardening their deployment for production. They deploy the bundle with a production-mode target and want to understand what additional guardrails production mode enforces compared to development mode. Which of the following is a behavior that production mode enforces (and development mode does not)?

**Options:**
- [ ] **A:** It prepends every job name with a [dev username] prefix for traceability
- [x] **B:** It validates that the deployment's Git branch matches the target's configured branch and prevents cluster definition overrides
- [ ] **C:** It enables concurrent job runs and disables deployment locks to speed up iteration
- [ ] **D:** It pauses all job schedules and triggers by default to avoid accidental runs

**Correct Answer:**
**It validates that the deployment's Git branch matches the target's configured branch and prevents cluster definition overrides**

**Official Databricks Answer Notes:**
> Production mode adds guardrails: it validates that the current Git branch matches the target's configured branch, prevents cluster definition overrides, and recommends service principals. Options a, b, and d all describe development mode behaviors (dev prefix, paused schedules, concurrent runs and disabled locks), which are the opposite of what production mode enforces. See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 3
**Prompt:**
A developer at Poplar Media deploys a bundle from within the Databricks workspace to the development target. Afterward they inspect the .bundle/<bundle_name>/development/files folder and find it empty, even though the deployment succeeded and the job runs. What best explains the empty files folder?

**Options:**
- [ ] **A:** The deployment failed silently and no files were actually deployed
- [ ] **B:** Development mode always deletes deployed files immediately after the run completes
- [ ] **C:** The bundle was missing a resources mapping, so nothing was included
- [x] **D:** Deploying from within the workspace used a source-linked deployment that references existing workspace files instead of copying them

**Correct Answer:**
**Deploying from within the workspace used a source-linked deployment that references existing workspace files instead of copying them**

**Official Databricks Answer Notes:**
> Deploying a bundle from within the Databricks workspace to a development target uses a source-linked deployment: the source files are not copied into the target folder, and the deployment references the existing workspace files directly, so the files folder is empty by design. The job still ran successfully, so it was not a silent failure (option b). Development mode does not delete files after runs (option c), and an empty files folder is unrelated to a missing resources mapping (option d). See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 4
**Prompt:**
A team at Lantern Software maintains one bundle promoted across development, stage, and production. In development and stage the tasks run on a shared classic cluster, but for production they want the job to run on Serverless compute without changing the shared task definitions. Based on how the course configures this, how is Serverless achieved for the production target?

**Options:**
- [ ] **A:** The CLI --serverless flag is passed only during the production deploy
- [ ] **B:** A separate production-only bundle is created with Serverless hard-coded in every task
- [x] **C:** The production target omits the existing_cluster_id override, so tasks fall back to the default Serverless compute
- [ ] **D:** Serverless is enabled by setting mode: serverless in the production target

**Correct Answer:**
**The production target omits the existing_cluster_id override, so tasks fall back to the default Serverless compute**

**Official Databricks Answer Notes:**
> In the course project, development and stage override the tasks with existing_cluster_id pointing at the classic cluster, while production does not specify a cluster, so the tasks use the default Serverless compute. This is the power of one bundle with per-target overrides. There is no need for a separate bundle (option a), no --serverless CLI flag is used (option b), and mode accepts development or production, not serverless (option d). See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 5
**Prompt:**
A new analyst at Summit Outdoor Gear is learning the CI/CD vocabulary used in the course. Their lead explains that one practice automatically pushes every change that passes all tests straight to the live environment with no human gate, while another keeps a manual approval step before that final environment. Which term describes the practice where a change that passes all tests is automatically released to production with no manual approval step?

**Options:**
- [ ] **A:** Continuous integration
- [x] **B:** Continuous deployment
- [ ] **C:** Continuous delivery
- [ ] **D:** Continuous monitoring

**Correct Answer:**
**Continuous deployment**

**Official Databricks Answer Notes:**
> Continuous deployment automatically releases every change that passes tests to production with no manual gate. Continuous delivery is the tempting distractor: it automates everything up to production but keeps a manual approval before the final push. Continuous integration refers to frequently merging and testing code, not releasing it. See https://docs.databricks.com/en/dev-tools/bundles/

---

### Question 6
**Prompt:**
A data engineer at Cascade Freight is reviewing the folder for a new bundle project. They need to confirm which file the Databricks CLI treats as the required root configuration for the bundle. Which file must exist at the root of a bundle project and contain at minimum the top-level bundle mapping?

**Options:**
- [ ] **A:** resources.yml
- [ ] **B:** bundle_config.json
- [ ] **C:** manifest.yaml
- [x] **D:** databricks.yml

**Correct Answer:**
**databricks.yml**

**Official Databricks Answer Notes:**
> A bundle must contain one (and only one) configuration file named databricks.yml at the root of the project, and it must contain at least the top-level bundle mapping. resources.yml can exist as an additional referenced file but is not the required root file. bundle_config.json and manifest.yaml are not the required bundle configuration file name. See https://docs.databricks.com/en/dev-tools/bundles/settings

---

### Question 7
**Prompt:**
A platform engineer at Riverstone Bank is setting up isolation for a CI/CD workflow. Leadership wants development and testing work kept completely away from live production data, and they are deciding how to structure environments within Databricks. Which approach aligns with how the course describes isolating DEV, STAGE, and PROD environments in Databricks?

**Options:**
- [ ] **A:** Use a single workspace and catalog, relying only on notebook naming conventions to separate environments
- [ ] **B:** Use one production workspace and manually delete test tables after each run
- [ ] **C:** Use a single shared catalog but separate Git branches as the only isolation boundary
- [x] **D:** Use multiple workspaces, multiple catalogs, or both, with one per environment

**Correct Answer:**
**Use multiple workspaces, multiple catalogs, or both, with one per environment**

**Official Databricks Answer Notes:**
> The course describes isolating environments using multiple workspaces (one per environment), multiple catalogs (one per environment), or both. Naming conventions alone (option a) or branches alone (option b) do not isolate the actual compute and data. Sharing production and manually cleaning up (option c) defeats the purpose of isolation and risks production data. See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 8
**Prompt:**
A developer at Trellis Insurance defines these variables in their databricks.yml and wants target_catalog to change automatically based on the deployment target. variables:   user_name:     default: labuser99   catalog_dev:     default: ${var.user_name}_1_dev   catalog_prod:     default: ${var.user_name}_3_prod targets:   development:     variables:       target_catalog: ${var.catalog_dev}   production:     variables:       target_catalog: ${var.catalog_prod} The developer removes the top-level target_catalog declaration entirely and defines it only inside each target. When they deploy, validation fails. What is the underlying rule they violated?

**Options:**
- [ ] **A:** Target-level variables must be written in JSON, not YAML
- [ ] **B:** Nested variable references such as ${var.user_name} are not allowed in defaults
- [x] **C:** A variable must have a default defined in the top-level variables mapping for a per-target override to work
- [ ] **D:** Variables can only be referenced inside the resources mapping, never inside targets

**Correct Answer:**
**A variable must have a default defined in the top-level variables mapping for a per-target override to work**

**Official Databricks Answer Notes:**
> For a per-target override to work, the variable must first be declared with a default in the top-level variables mapping; the target block then overrides that value. Removing the top-level declaration and defining target_catalog only inside targets breaks that requirement. Variables can be referenced inside targets (so option a is wrong), nested references like ${var.user_name} are explicitly supported (option b), and target variables are still YAML (option c). See https://docs.databricks.com/en/dev-tools/bundles/variables

---

### Question 9
**Prompt:**
A team at Vantage Foods is designing their automated testing strategy for a data pipeline. They want the fastest, most numerous, lowest-cost tests to catch the most issues early, reserving slower end-to-end checks for later stages. They map custom PySpark helper functions, a full workflow run, and interactions between notebooks and pipelines to the testing pyramid. Which mapping correctly matches each test type to its example in the testing pyramid?

**Options:**
- [ ] **A:** Unit test = end-to-end workflow; Integration test = notebook and pipeline interaction; System test = custom PySpark function
- [x] **B:** Unit test = custom PySpark function; Integration test = notebook and pipeline interaction; System test = end-to-end workflow
- [ ] **C:** Unit test = notebook and pipeline interaction; Integration test = end-to-end workflow; System test = custom PySpark function
- [ ] **D:** Unit test = end-to-end workflow; Integration test = custom PySpark function; System test = notebook and pipeline interaction

**Correct Answer:**
**Unit test = custom PySpark function; Integration test = notebook and pipeline interaction; System test = end-to-end workflow**

**Official Databricks Answer Notes:**
> Unit tests sit at the base: they test individual functions or methods in isolation (for example, a custom PySpark function), are fast and low cost. Integration tests test interactions between components (for example, notebooks, pipelines, or jobs). System tests sit at the top and test the entire application end to end (for example, a full data pipeline in a workflow). The other options swap these layers, which inverts the cost and speed relationship the pyramid represents. See https://docs.databricks.com/en/dev-tools/bundles/

---

### Question 10
**Prompt:**
A developer at Harborview Health needs their bundle to reference an existing all-purpose cluster by its ID, but they only know the cluster's name and want the bundle to resolve the ID automatically at deploy time. variables:   my_cluster_id:     description: "Resolve the cluster ID from its name"     lookup:       cluster: "team-analytics-cluster" What does this lookup variable accomplish?

**Options:**
- [ ] **A:** It pauses deployment until an admin approves the cluster
- [ ] **B:** It creates a new cluster named team-analytics-cluster during deployment
- [x] **C:** It resolves the named cluster to its ID and uses that ID as the variable's value
- [ ] **D:** It validates that the cluster name matches the bundle name

**Correct Answer:**
**It resolves the named cluster to its ID and uses that ID as the variable's value**

**Official Databricks Answer Notes:**
> A lookup variable retrieves an object's ID by its name; here the cluster named team-analytics-cluster is resolved to its cluster ID, which becomes the variable's value. Lookups do not create objects (option a), so no new cluster is made. Lookups are supported for object types including cluster, job, pipeline, warehouse, and others. They do not perform name-to-bundle validation (option b) or approval gating (option c). See https://docs.databricks.com/en/dev-tools/bundles/variables

---

### Question 11
**Prompt:**
A data engineering team at Meadowlark Dairy organizes their bundle project into standard folders. They have a folder holding notebooks and Python source files, and they need to know where unit and integration tests conventionally belong in a bundle project structure. In a standard bundle project structure, which folder conventionally contains the unit and integration tests for the project?

**Options:**
- [ ] **A:** src/
- [ ] **B:** targets/
- [x] **C:** tests/
- [ ] **D:** resources/

**Correct Answer:**
**tests/**

**Official Databricks Answer Notes:**
> The tests/ folder conventionally holds unit and integration tests. src/ holds source files like notebooks and Python files, and resources/ holds additional YAML configuration files. targets/ is not a standard folder; targets is a mapping inside databricks.yml, not a directory. See https://docs.databricks.com/en/dev-tools/bundles/

---

### Question 12
**Prompt:**
An engineer at Foxglove Media deploys a bundle and then opens Jobs & Pipelines. They notice the deployed job is named "[dev jsmith] daily_ingest" and carries a dev tag, even though the YAML defined the job name as simply daily_ingest. Given this behavior, what is the most likely reason the job name was automatically prefixed and tagged?

**Options:**
- [ ] **A:** The CLI version was outdated and appended debugging information
- [ ] **B:** The bundle used a lookup variable that renamed the job
- [x] **C:** The bundle was deployed to a target running in development mode
- [ ] **D:** The production target enforced a required naming convention

**Correct Answer:**
**The bundle was deployed to a target running in development mode**

**Official Databricks Answer Notes:**
> In development mode, bundles prepend resources that are not deployed as files or notebooks with the prefix [dev ${workspace.current_user.short_name}] and tag each deployed job and pipeline with a dev tag. This prevents dev deployments from colliding with production. A lookup variable resolves an object ID, it does not rename jobs. Production mode does the opposite of adding a dev prefix, and the CLI does not append debugging text to names. See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 13
**Prompt:**
An engineer at Beacon Health promotes one bundle across dev, stage, and production. Each environment must read from a different catalog and raw data path, but the job and pipeline definitions should stay identical. In the development target the tasks pin an existing cluster, while stage overrides target_catalog and raw_data_path, and production overrides those variables but specifies no cluster. Which design principle does this configuration best demonstrate?

**Options:**
- [ ] **A:** Variables cannot be overridden per target, so values must be hard-coded in each task
- [x] **B:** The same bundle and code are promoted across targets, with per-target overrides changing only environment-specific values
- [ ] **C:** Each environment requires its own separate bundle to guarantee isolation
- [ ] **D:** Production must always reuse the exact compute defined in development for consistency

**Correct Answer:**
**The same bundle and code are promoted across targets, with per-target overrides changing only environment-specific values**

**Official Databricks Answer Notes:**
> The core DABs pattern is "write code once, deploy everywhere": the same bundle and code move across targets, and only environment-specific values (catalog, data path, compute) are overridden per target. Separate bundles per environment (option a) contradicts this. Variables can be overridden per target as long as a default exists (so option b is wrong), and production intentionally differs here by using Serverless rather than the dev cluster (so option d is wrong). See https://docs.databricks.com/en/dev-tools/bundles/deployment-modes

---

### Question 14
**Prompt:**
An engineer at Quartz Retail runs the following command from their bundle project directory. databricks bundle destroy --auto-approve What is the effect of running this command?

**Options:**
- [ ] **A:** It removes only the local databricks.yml file, leaving deployed resources intact
- [ ] **B:** It redeploys the bundle after clearing cached artifacts
- [x] **C:** It permanently deletes previously deployed jobs, pipelines, and artifacts without prompting for confirmation
- [ ] **D:** It validates the bundle and reports resources that would be deleted, but deletes nothing

**Correct Answer:**
**It permanently deletes previously deployed jobs, pipelines, and artifacts without prompting for confirmation**

**Official Databricks Answer Notes:**
> databricks bundle destroy deletes previously deployed jobs, pipelines, resources, and artifacts, and --auto-approve skips the interactive confirmation prompts, making the deletion automatic and permanent. It is not a redeploy (option a), and it does delete (so option c is wrong). It removes deployed workspace resources, not the local configuration file (option d). See https://docs.databricks.com/en/dev-tools/cli/bundle-commands

---

### Question 15
**Prompt:**
A data engineer at Alpine Rail wants a single variable in their bundle to hold structured cluster settings (Spark version, node type, and worker count) rather than a single string value. variables:   job_cluster:     description: "Cluster settings for the batch job"     default:       spark_version: "15.4.x-scala2.12"       node_type_id: "<node-type-id>"       num_workers: 4 The bundle fails validation with this definition. What change makes this variable valid?

**Options:**
- [ ] **A:** Rename the variable to start with an underscore
- [ ] **B:** Move the default block under the targets mapping
- [ ] **C:** Wrap the default values in quotation marks
- [x] **D:** Add type: complex to the variable definition

**Correct Answer:**
**Add type: complex to the variable definition**

**Official Databricks Answer Notes:**
> A custom variable is assumed to be type string unless you declare type: complex. Validation fails if a variable has a structured (multi-value) default without being marked complex, so adding type: complex resolves it. Moving the default to targets does not change the type problem, variable names do not require underscores, and quoting the values would not turn the structured object into a valid string. See https://docs.databricks.com/en/dev-tools/bundles/variables

---

### Question 16
**Prompt:**
A data engineer at Cedar Peak Logistics has one bundle they want to deploy to a staging environment. They want to run the deploy while pointing at the stage target defined in their databricks.yml. Which command deploys the bundle specifically to the stage target?

**Options:**
- [ ] **A:** databricks bundle deploy --target=stage --run
- [ ] **B:** databricks bundle stage deploy
- [ ] **C:** databricks bundle deploy stage
- [x] **D:** databricks bundle deploy -t stage

**Correct Answer:**
**databricks bundle deploy -t stage**

**Official Databricks Answer Notes:**
> The -t flag (short for --target) specifies which target to deploy to, so databricks bundle deploy -t stage is correct. deploy does not take a --run flag (option b), passing stage as a bare positional argument (option c) is not the expected syntax, and there is no bundle stage subcommand (option d). See https://docs.databricks.com/en/dev-tools/cli/bundle-commands

---

### Question 17
**Prompt:**
A developer at Sable Analytics wants to scaffold a brand-new Python bundle project rather than writing every file by hand. They recall the course showed a way to generate a starter bundle from a provided template. Which command initializes a new bundle from a Databricks default template?

**Options:**
- [x] **A:** databricks bundle init default-python
- [ ] **B:** databricks bundle new --template python
- [ ] **C:** databricks bundle create default-python
- [ ] **D:** databricks bundle scaffold default-python

**Correct Answer:**
**databricks bundle init default-python**

**Official Databricks Answer Notes:**
> databricks bundle init is used to initialize a bundle from a template, and default-python is one of the Databricks default templates (along with default-sql, dbt-sql, and mlops-stacks). create, new, and scaffold are not the bundle subcommands used for this. See https://docs.databricks.com/en/dev-tools/cli/bundle-commands

---

### Question 18
**Prompt:**
A data engineer at Ironwood Manufacturing built a job in the Databricks UI and now wants to capture its exact configuration as YAML to paste into their bundle's databricks.yml, rather than hand-writing the tasks. Based on the demo, what is the most efficient way to obtain the YAML for an existing job?

**Options:**
- [x] **A:** Open the job, use the "View as code" option, and copy the YAML configuration
- [ ] **B:** Export the job from the Jobs REST API and manually convert the JSON to YAML by hand
- [ ] **C:** Re-create the job from scratch in the databricks.yml until the UI matches
- [ ] **D:** Run databricks bundle validate, which prints the YAML for all existing jobs

**Correct Answer:**
**Open the job, use the "View as code" option, and copy the YAML configuration**

**Official Databricks Answer Notes:**
> The demo uses the job page's kebab menu "View as code" option, which can display the job configuration as YAML (or Python or JSON) and lets you copy it directly into a bundle. Manually converting REST JSON by hand (option a) is error-prone and unnecessary. validate checks configuration, it does not emit YAML for existing jobs (option c), and re-creating from scratch (option d) defeats the purpose. See https://docs.databricks.com/en/jobs/automate

---

### Question 19
**Prompt:**
A retail analytics team at Northwind Grocers is standardizing how they package their Databricks notebooks, jobs, and pipeline definitions so the whole project can be version-controlled and deployed consistently. A teammate asks what a Declarative Automation Bundle (DAB) actually uses to describe the artifacts, resources, and configuration of the project. What format does a Declarative Automation Bundle use to specify a Databricks project's resources and configuration?

**Options:**
- [ ] **A:** A Terraform HCL module maintained by administrators
- [ ] **B:** A JSON file processed only through the REST API
- [x] **C:** YAML files driven through the Databricks CLI
- [ ] **D:** A Python wheel built during continuous integration

**Correct Answer:**
**YAML files driven through the Databricks CLI**

**Official Databricks Answer Notes:**
> DABs use YAML files to specify a project's artifacts, resources, and configurations, and are driven through the Databricks CLI's bundle commands. Option a is tempting because the REST API is a real deployment tool, but bundles are defined in YAML (not raw JSON through the API) and are driven by the CLI. Terraform and Python wheels are related concepts but are not how a bundle itself is declared. See https://docs.databricks.com/en/dev-tools/bundles/

---

### Question 20
**Prompt:**
An engineer at Blue Harbor Insurance has finished editing a databricks.yml file and wants to confirm it is syntactically correct before deploying anything to the workspace. Which Databricks CLI command checks the bundle configuration for correctness without deploying resources?

**Options:**
- [ ] **A:** databricks bundle run
- [x] **B:** databricks bundle validate
- [ ] **C:** databricks bundle destroy
- [ ] **D:** databricks bundle deploy

**Correct Answer:**
**databricks bundle validate**

**Official Databricks Answer Notes:**
> databricks bundle validate checks that the bundle configuration files are syntactically correct and returns warnings for unknown resource properties, without deploying anything. deploy provisions resources to the workspace, run executes a deployed job or pipeline, and destroy deletes previously deployed resources. See https://docs.databricks.com/en/dev-tools/cli/bundle-commands

---

