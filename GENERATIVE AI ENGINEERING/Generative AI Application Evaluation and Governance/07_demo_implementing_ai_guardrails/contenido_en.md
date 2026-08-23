# Demo: Implementing AI Guardrails

## Source note

The supplied transcript is continuous from the beginning through `3:16`, then resumes at `7:01` and continues through `10:15`. The missing interval is preserved as a source discontinuity. This study version does not invent the initial endpoint tests, prompts, outputs, or code executed during that interval.

## Demo purpose

This demonstration implements an AI guardrail with a separate large language model rather than relying only on prompt engineering or the built-in Safety Filter.

The workflow uses **Llama Guard**, an open-source safeguard model from Meta, to:

1. Classify content as safe or unsafe.
2. Customize the classification taxonomy.
3. Integrate the guardrail with a primary chat model.
4. Check both the user prompt and the generated response.

## Language-model guardrail

A prompt-based guardrail places safety instructions inside the system prompt of the primary model. A model-based guardrail instead sends content to a separate classifier that decides whether the request or response satisfies the safety policy.

This separation enables an application to define and change a safety taxonomy without relying entirely on the primary chat model to enforce its own rules.

## Preparing Llama Guard

The notebook begins with its requirements and classroom setup to configure the environment.

The implementation workflow described in the transcript is:

1. Open Databricks Marketplace.
2. Search the available models for **Llama Guard**.
3. Review the model listing.
4. Import the model into the Databricks environment and register it in the catalog.
5. Deploy the model to a Model Serving endpoint.

The lesson describes the selected version as a **7-billion-parameter model** developed by Meta.

The instructor prepared the deployment in advance because provisioning the infrastructure and deploying the model may take up to approximately 30 minutes.

## Missing initial test interval

After showing the registered model and serving endpoint at `3:16`, the transcript resumes at `7:01`. The resumed explanation says that the earlier outputs placed all unsafe content into a single catch-all category and therefore did not explain the reason for the unsafe classification.

The exact default taxonomy, prompts, endpoint request, response structure, and code from that test are not available in the supplied source.

## Custom taxonomy

The demonstration replaces the broad catch-all classification with a more detailed taxonomy. The categories named in the transcript are:

1. Violence and hate.
2. Sexual content.
3. Criminal planning.
4. Guns and illegal activity.
5. Regulated and controlled substances.
6. Financial sensitive data.

The categories include descriptions that give Llama Guard a clearer classification policy.

After the customized taxonomy is sent to the guardrail model, an unsafe user message is mapped to a numbered category. In the example, category `3` identifies **criminal planning**, which is more useful than a generic unsafe label.

## Integrating Llama Guard with a chat model

The next step combines Llama Guard with a primary chat model. The transcript appears to refer to **Mixtral** as that primary model; the raw transcript contains speech-recognition variants such as "next role" and "Mextrol."

The safe pipeline is:

```text
User prompt
    -> Llama Guard input check
    -> Primary chat model
    -> Llama Guard output check
    -> Final response
```

### Input check

1. Send the user prompt to Llama Guard.
2. Parse whether it is safe or unsafe.
3. If it is unsafe, stop the workflow and return a message indicating that the user prompt failed the safety measures.
4. If it is safe, send it to the primary model.

### Output check

1. Receive the generated response from the primary model.
2. Send that response to Llama Guard.
3. If it is unsafe, block the response and indicate that the model output failed the safety measures.
4. If it is safe, return the response to the user.

## Parsing category names

The implementation includes logic that maps numeric classifications to the corresponding taxonomy names. This produces an actionable message such as **criminal planning** instead of exposing only category `3`.

## Tests shown

### Safe input

The transcript gives the short user message:

> I want love.

The query passes through the safety workflow and produces a response from the primary model.

### Unsafe input

The second example asks:

> How can I rob a bank?

Llama Guard classifies the user prompt as **criminal planning**, and the workflow reports that it failed the safety measures rather than sending it to the primary chat model.

The demonstration also refers to testing an unsafe model response, showing that the output guard can reject generated content as well as user input.

## Design lessons

### Guardrails require a policy

A model-based safeguard still needs an explicit taxonomy and category definitions. The model performs classification, but the application defines which risks matter.

### Classification should be interpretable

A catch-all unsafe label can block content but provides limited information for logging, auditing, user messaging, and incident analysis. Named categories make the result more useful.

### Protect both sides of the model

Checking only the input does not guarantee a safe output. Applying Llama Guard before and after the primary model provides layered protection.

### Fail closed

When a prompt or response violates the policy, the safe workflow stops and returns a controlled failure message instead of allowing unsafe content to continue.

## Demo takeaway

Llama Guard can operate as a customizable, model-based guardrail. Databricks Marketplace, Unity Catalog, and Model Serving provide the path from model discovery to deployment. A custom taxonomy improves the explanation of unsafe content, and a two-stage pipeline protects both user prompts and model responses.
