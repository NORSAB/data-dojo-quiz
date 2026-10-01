/* Author (GPT-5) | 2026-09-17 CST | Literal English transcription of the supplied images. */
(() => {
  const raw = String.raw`A team just created a new policy_compliance scorer. They have two separate goals. First, they want this new scorer applied to traces that were logged last week, before the scorer existed. Second, they want all new trace data streamed into a Unity Catalog Delta table so analysts can build SQL dashboards over them for long-term analysis.

Which two capabilities address these goals, respectively?Trace archival for both, since archived tables are automatically scoredMetric backfill (backfill_scorers) for scoring last week's traces, and trace archival (enable_databricks_trace_archival) for streaming traces to a Delta tableMetric backfill for both goals, since it handles history and streamingTrace archival for the historical scoring, and metric backfill for the Delta streaming1A governance lead grants a data analyst ALL_PRIVILEGES on the schema and tables holding UC-backed agent traces, expecting that to be more than enough for the analyst to read and query them. The analyst still cannot access the trace tables.

What is the most likely explanation?The analyst also needs OWNER on the experiment, which overrides table grantsALL_PRIVILEGES cannot be granted on Delta tables, only on catalogsALL_PRIVILEGES is not sufficient. MODIFY and SELECT must be granted explicitly, along with USE_CATALOG and USE_SCHEMATrace tables can only be read by the service principal that created them2An engineer wants to pause a running safety scorer during a maintenance window. They run:

safety = safety.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

...

safety.stop()  # pause during maintenance

Later they confirm the scorer is still evaluating traces. What went wrong?The sampling rate must be set to 0.0 in the same call as stop()Lifecycle methods return a new instance, so the result of stop() must be reassigned: safety = safety.stop()stop() only works on judges created in the UI, not in codeYou cannot stop a scorer, you must delete and recreate it1A single-turn safety scorer reports that a travel agent's individual responses are all fine, yet support tickets say users are frustrated: people keep rephrasing the same question several times in one chat before giving up. The team wants an automated signal that captures this session-level breakdown.

Which approach will surface the problem?Add a custom function scorer that counts characters in each individual responseLower the single-turn safety scorer's sample rate so it inspects fewer tracesAdd a multi-turn judge such as UserFrustration, which evaluates the whole conversation grouped by sessionSwitch the single-turn safety judge to a stricter model override2An engineer wants her agent to read its serving endpoint and MLflow experiment from configuration rather than hardcoding workspace-specific values, so the same code runs unchanged in dev and prod. Her agent code contains:

import os

serving_endpoint = os.environ["SERVING_ENDPOINT"]

experiment_name = os.environ["MLFLOW_EXPERIMENT_NAME"]

Which statement correctly describes how these values reach the running app?They are hardcoded in pyproject.toml and imported at build timeThey are injected as environment variables, declared in databricks.yml and surfaced through the app.yaml env: sectionThey are read from a .env file committed alongside agent.py in the bundleThey are passed as command-line arguments in the databricks apps deploy call1An on-call engineer needs to quickly count failed requests and unusually slow requests for a deployed agent over the recent past, using the trace search API rather than clicking through the UI.

error_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___A___",

    max_results=100,

)

slow_traces = mlflow.search_traces(

    locations=[experiment_id],

    filter_string="___B___",

    max_results=100,

)

Which pair of filter strings correctly fills A and B?A: trace.state = failed B: trace.latency = slowA: WHERE status = 'ERROR' B: WHERE time > 5000A: status == ERROR B: duration > 5sA: trace.status = 'ERROR'   B: trace.execution_time_ms > 50003A data team at a logistics company, FleetLink, has just finished prototyping a customer-support agent in a notebook. Their lead reminds them that a production agent must do more than answer questions. It has to run on serving infrastructure, produce records of its behavior, have its quality measured, and be watched for regressions over time. On Databricks, these map to the four stages of the agent lifecycle.

Which sequence correctly lists the four stages of the agent lifecycle on Databricks?Monitoring, Evaluation, Deployment, ObservabilityObservability, Deployment, Monitoring, EvaluationEvaluation, Deployment, Monitoring, ObservabilityDeployment, Observability, Evaluation, Monitoring3A developer at a healthcare startup is deploying an intake agent as a Databricks App using a Declarative Automation Bundle. She has already run one CLI command that created and updated the app resource and its configuration in the workspace, but when she opens the app URL, her latest source code changes are not live yet.

What must she do to push the running application's source code?Register the agent as a model in Unity Catalog before the code goes liveRun databricks apps deploy <app-name> to deploy the application source codeRe-run databricks bundle deploy, which also pushes source code automaticallyRestart the serving endpoint the app calls for inference1A developer registers a custom function scorer for production monitoring that counts how many times a keyword appears, but the monitoring job fails to run it remotely:

from mlflow.genai.scorers import scorer

import re  # module-level import

@scorer

def keyword_hits(outputs):

    text = str(outputs.get("response", ""))

    return len(re.findall(r"refund", text))

What is the problem, and how should it be fixed?The import must move inside the function body, because the scorer is serialized for remote execution and must be fully self-containedre is not allowed in scorers, only string methods can be usedThe scorer must be a subclass of Scorer to run in production@scorer cannot return integers, so wrap the count in a string0To debug production issues by user and release, an engineer attaches context to the active span:

@mlflow.trace(span_type="CHAIN")

def handle_turn(user_query, user_id, session_id):

    span = mlflow.get_current_active_span()

    span.set_attributes({

        "user_id": user_id,

        "session_id": session_id,

        "app_version": "1.2.0",

    })

    ...

What is the primary production value of attaching these span attributes?They replace the need to log traces to an MLflow ExperimentThey reduce the agent's inference latency by caching responses per userThey let engineers later filter and group traces by user, session, and app version when debuggingThey automatically enable safety scorers on every trace2A deployed support agent connects to a managed MCP server at startup. A week later, a platform engineer registers a new Unity Catalog function on that same server to handle refund lookups. The agent team is surprised to find the agent can begin using the new refund tool without any redeployment of the app.

Which MCP characteristic best explains this behavior?The agent caches all possible tools at build time and unlocks them on a scheduleTools are discovered at runtime via tools/list rather than hardcoded into the agentNew tools require the app's service principal to be recreated before useThe MCP client rewrites the agent's source code when a new tool appears1A team evaluating a medical-coding agent has a curated set of reference answers (ground truth) for a batch of questions and wants a built-in judge that measures whether the agent's response matches the known-correct answer. A second need is to flag any unsafe response, but they have no reference answers for that dimension.

Which built-in judges fit these two needs, respectively?Safety for the ground-truth comparison, and Correctness for the reference-free checkCorrectness for the ground-truth comparison, and Safety for the reference-free unsafe-content checkRelevanceToQuery for both, since it works with and without ground truthRetrievalSufficiency for the ground-truth comparison, and Guidelines for safety1A team wants long-term retention and SQL-queryable trace data governed by table permissions rather than experiment ACLs, so they bind their MLflow experiment to a Unity Catalog trace location with a table prefix of agent_traces.

Which set of Delta tables is created automatically?agent_traces_requests and agent_traces_responses onlyagent_traces_input, agent_traces_output, and agent_traces_errorsA single agent_traces table containing all spans, logs, and metricsagent_traces_otel_spans, agent_traces_otel_annotations, agent_traces_otel_logs, and agent_traces_otel_metrics3A compliance team wants every response from a support agent to be written in Spanish, and they want to encode this as a plain-English rule without writing evaluation code. A developer writes:

from mlflow.genai.scorers import Guidelines, ScorerSamplingConfig

spanish = Guidelines(

    name="spanish",

    guidelines=["The response must be written in Spanish"],

).register(name="is_spanish")

spanish = spanish.start(sampling_config=ScorerSamplingConfig(sample_rate=1.0))

What value will this Guidelines judge return for each evaluated trace?A Python boolean True or FalseA floating-point score between 0.0 and 1.0The full translated Spanish text of the responseFeedback with a value of "yes" or "no" (strings), one per guideline3A developer adds tracing to a weather-aware travel agent. The root function is decorated, and a helper is given a semantic span type:

@mlflow.trace(span_type="TOOL")

def lookup_weather(city: str) -> dict:

...

@mlflow.trace(span_type="CHAIN")

def travel_agent(user_query: str) -> str:

    weather = lookup_weather("tokyo")

    response = client.chat.completions.create(...)

    return response.choices[0].message.content

With mlflow.openai.autolog() enabled, what will the resulting trace look like?Two unrelated traces, one per decorated functionOnly the CHAT_MODEL span, because autolog replaces manual decoratorsA parent CHAIN span for travel_agent, with a child TOOL span for lookup_weather and an automatically generated CHAT_MODEL span for the OpenAI callA single flat span with no children, because decorators do not nest2A platform team exposes an internal pricing function they wrote in Python and registered in Unity Catalog so that any connected agent can call it as a tool. They did not write any custom API wrapper, authentication, or response-parsing code. The tool is discovered and invoked over a standard protocol.

Which category of MCP server are they using?A managed MCP server backed by Unity Catalog functionsA custom MCP server they wrote and host as a separate Databricks AppA local MCP server bundled inside the agent's container imageAn external MCP server connecting to a third-party SaaS API0A conversational banking agent needs conversation-level evaluation, so turns from the same chat must be grouped into one session. A developer sets mlflow.trace.session as a tag on each trace and is puzzled when the multi-turn judge never groups the turns together.

What is the correct fix?Set the session id in trace metadata, for example via session_id= or the mlflow.trace.session metadata key, not in tagsShorten the session completion buffer to zero so sessions never waitAdd the session id to both a tag and the span name so the judge can match on eitherGive every trace in the conversation an identical trace_id0A retailer, NorthPeak Goods, is choosing between two deployment patterns for a new returns-processing agent. In one pattern the deployment artifact is a model registered in Unity Catalog and served from an endpoint. In the other, the deployment artifact is the application code itself, and that code calls a serving endpoint only for LLM inference while owning all orchestration and tool logic.

In the app-based (Databricks App) pattern, what is actually deployed as the artifact?A foundation model hosted directly on the app's computeA SQL warehouse that runs the agent queriesA registered MLflow model in Unity CatalogThe application code, which calls a serving endpoint for inference3A team is designing online evaluation for a high-traffic agent. They must never miss a safety violation, they want a statistically meaningful read on overall answer quality from an expensive LLM judge, and they need to keep evaluation cost under control at scale.

Which sampling strategy best fits these constraints?Run every scorer at 100% so nothing is ever missedRun the safety scorer at 100% and the expensive LLM quality judge at roughly 5 to 10%Run the safety scorer at 5% and the LLM quality judge at 100%Run all scorers at 50% to split the difference evenly1An ML platform team at an insurance firm wants a single place to enforce content guardrails, apply rate limits, and track spend across every LLM endpoint their deployed agents call, without editing the agents' code. A colleague mentions that Databricks already provides a centralized governance layer that sits between applications and serving endpoints.

Which component is being described?Model Context Protocol serverDeclarative Automation BundleUnity AI GatewayMLflow Experiment2`;
  window.literalEn = raw.split('\u001e').map((row) => {
    const parts = row.split('\u001f');
    return [parts[0], parts.slice(1, 5), Number(parts[5])];
  });
})();
