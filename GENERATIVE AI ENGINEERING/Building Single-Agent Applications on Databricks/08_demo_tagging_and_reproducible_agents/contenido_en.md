# Demo: Tagging and Reproducible Agents

## Source coverage

The supplied transcript contains two continuous segments:

- **Beginning:** 0:00–2:38.
- **Ending:** 16:53–20:40.

There is a gap from **2:38 to 16:53**, approximately 14 minutes and 15 seconds. The omitted section appears to contain most of the tracing and tagging implementation, custom traced functions, agent logging, dependency and resource declaration, and the first validation of the logged agent.

This study version documents only the captured material. It does not reconstruct commands, tags, functions, logging parameters, model signatures, resource declarations, or deployment code that is absent from the source.

## Demonstration overview

The demonstration introduces tracing organization, tagging strategies, reproducible agent logging, registration in the MLflow Model Registry hosted in Unity Catalog, deployment, and inference.

Its stated objectives are to:

- Organize agent traces.
- Apply tagging strategies.
- Create custom traced functions.
- Log an agent with MLflow.
- Register the logged agent in Unity Catalog.
- Deploy the agent.
- Run inference against the registered agent.

Only the environment introduction and the final registration/inference segment are present in the supplied transcript.

## Environment setup

### Compute

The notebook uses **Serverless environment version 4**. Serverless is the default compute option, although the instructor explicitly selects and verifies it.

### Classroom resources

The setup prepares:

- The dataset used by the tools.
- Unity Catalog functions.
- Catalog and schema locations.

The demonstration uses:

- Catalog: **DBX Academy**.
- Schema: the individual **lab user schema**.
- Dataset: San Francisco Airbnb listings.

The table contains fields such as:

- Listing ID and name.
- Summary information.
- Host details.
- Neighborhood.
- Location.
- Bathrooms and bedrooms.

The transcript stops while the instructor is exploring these fields.

## Missing implementation segment

The 2:38–16:53 gap omits the central implementation of several stated objectives. The supplied source does not show:

- The remaining dataset exploration.
- The function definitions created for the agent.
- The exact tracing or autologging setup.
- The custom trace functions.
- The trace tags and values used during execution.
- The agent class or implementation.
- The complete `mlflow.pyfunc.log_model()` configuration.
- Model signature inference or definition.
- Dependency capture and resource declarations.
- Initial loading and validation of the logged Python function.
- Deployment steps, despite deployment being listed as an objective.

The transcript resumes after the agent has been tested successfully as a Python function.

## Registering the agent in Unity Catalog

At 16:53, the logged agent works as a Python function but has not yet been added to the Unity Catalog Model Registry.

The registration process described in the transcript is:

1. Configure MLflow to use the Databricks Unity Catalog model registry.
2. Provide the catalog, schema, and registered model name.
3. Use the model URI produced by the earlier MLflow logging operation.
4. Register the model.

The model URI points to the packaged agent and its captured dependencies. The exact commands are not present in the supplied segment.

## Model versions

Registering another model under the same catalog, schema, and name creates a new version.

The demonstration shows version 1 and version 2 and emphasizes that repeated registration produces additional versions rather than overwriting the previous snapshot.

The registered model exposes information such as:

- Storage location.
- Permissions.

Each model version also has its own detailed information.

## Model-version metadata and lineage

The version Overview page includes:

- Source runs, with links back to the MLflow run.
- Model ID.
- Activity log.
- Input and output signature.
- Lineage.

The lineage graph captures upstream resources such as:

- The source table.
- Unity Catalog functions.
- Notebooks.

The Artifacts section exposes the packaged model artifacts. The transcript also states that viewing traces from this location requires an active SQL warehouse; none is running during the demonstration.

## Loading the agent from Unity Catalog

After registration, the agent can be loaded from Unity Catalog rather than directly from the MLflow run URI.

The instructor loads the registered Python function through the configured model registry and runs its prediction method. The returned result includes the average listing price.

The exact model URI format and loading command are not included in the transcript.

## Aliases for controlled version selection

Aliases allow applications to refer to a logical deployment label rather than hard-coding a numeric version.

The demonstration describes a `prod` alias and a second alias named `Jade`.

Alias rules shown in the demonstration:

- One alias cannot point to two model versions at the same time.
- One model version can have multiple aliases.
- An alias can be reassigned to a different version when that version becomes the preferred release.
- Applications can request the registered model by alias, such as the version currently labeled `prod`.

> **Transcription note:** one phrase is rendered as “Broad model,” but the following sentence explicitly refers to the `prod` version. This study version treats `prod` as the demonstrated deployment alias and preserves `Jade` as the second alias.

## MLflow tags and Unity Catalog tags

The demonstration distinguishes tagging at two levels:

- **MLflow tags:** attached to runs, traces, and related MLflow tracking artifacts.
- **Unity Catalog tags:** attached to governed catalog assets such as registered models and versions.

Unity Catalog can also use **governed tags**, providing standardized and controlled classification of governed assets.

The exact MLflow trace tags used earlier in the notebook are missing with the central transcript segment.

## Why this supports reproducibility

The available segment demonstrates several reproducibility mechanisms:

- The agent is packaged and referenced through an MLflow model URI.
- Dependencies are captured with the logged model.
- Registration creates distinct versions under one governed model name.
- Source runs connect each registered version to the MLflow execution that produced it.
- Signatures document expected inputs and outputs.
- Lineage records upstream tables, functions, and notebooks.
- Aliases decouple deployment names such as `prod` from a hard-coded version number.
- Permissions and governed tags support controlled enterprise use.

## Demonstration summary

The available transcript covers:

- Serverless environment version 4.
- DBX Academy catalog and the per-user lab schema.
- The San Francisco Airbnb source table.
- Selecting the Unity Catalog MLflow Model Registry.
- Registering a logged Python-function agent by its model URI.
- Automatic creation of model versions.
- Model and version metadata.
- Lineage across tables, functions, and notebooks.
- Loading the agent from Unity Catalog and running prediction.
- Managing versions through aliases.
- MLflow tags, Unity Catalog tags, and governed tags.

The tracing, custom-tagging, model-logging, and initial validation implementation remains absent because of the 2:38–16:53 gap.

## Key facts for the simulator

- The notebook uses Serverless environment version 4.
- Course assets are stored in the DBX Academy catalog and the user’s lab schema.
- The source dataset contains San Francisco Airbnb listings.
- A logged agent must be registered before it appears in the Unity Catalog Model Registry.
- Registration uses the model URI created when MLflow logged the agent.
- The logged model URI represents the packaged agent and its captured dependencies.
- Registering the same catalog/schema/model name again creates a new version.
- Registered versions preserve links to their source runs.
- Version details include model ID, activity log, input/output signature, lineage, and artifacts.
- Lineage can include tables, Unity Catalog functions, and notebooks.
- An active SQL warehouse is required to view traces from the artifact location shown in the demonstration.
- A registered agent can be loaded from Unity Catalog and used for prediction.
- An alias can point to only one version at a time.
- A model version can have multiple aliases.
- Reassigning `prod` allows deployment to move to another version without changing the application’s logical model reference.
- MLflow tags classify tracking artifacts; Unity Catalog tags classify governed catalog assets.
- Governed tags provide standardized control over Unity Catalog tag usage.

