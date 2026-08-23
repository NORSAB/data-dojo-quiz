# Why Evaluating GenAI Applications

## Lesson purpose

Evaluation determines whether a generative AI application works as intended, produces valuable results, operates at an acceptable cost, and avoids unacceptable legal, ethical, and security risks. Because a GenAI application contains multiple interacting components, evaluation must cover both the complete system and each component separately.

![Key questions for evaluating an AI system](../assets/images/why_evaluate_ai_system.png)

## 1. What does successful evaluation ask?

| Dimension | Key question |
|---|---|
| Reliability | Is the system behaving as expected? |
| Effectiveness | Is the LLM solution effective for its intended task? |
| User value | Are users satisfied with the results? |
| Ethics | Is there bias or another ethical concern? |
| Operations | What are the latency and financial costs of running the system? |

An AI system is successful only when its technical operation and its impact on users both meet expectations.

## 2. An AI system is more than an LLM

![RAG system and its components](../assets/images/ai_system_rag_components.png)

A production AI application combines several component types.

### Data components

- Raw documents and other source information.
- Vector database or another data store.
- User queries and other inputs.
- Generated outputs.

### Model components

- Embedding models for documents and queries.
- Generation models that synthesize responses from the supplied context.

### Supporting components

- Vector Search or another retrieval system.
- User interface.
- Security and governance tooling.
- Production infrastructure.

In a RAG system, documents are embedded and stored. A user query is embedded, relevant information is retrieved from the vector store, and that context is added to the prompt sent to the generation model.

## 3. Evaluate the whole and the parts

![System-level and component-level evaluation](../assets/images/evaluating_system_and_components.png)

The complexity of the architecture creates two complementary evaluation levels:

- **End-to-end evaluation:** determines whether the complete application delivers the intended result.
- **Component-level evaluation:** tests individual parts such as data, retrieval, models, inputs, outputs, security controls, and the user interface.

A structured methodology is needed because a system may fail even when some components work correctly, while a component defect may be hidden by an acceptable-looking final response.

## 4. Evaluate the data lifecycle

![Evaluation concerns for training, contextual, input, and output data](../assets/images/evaluating_data_components.png)

| Data area | Quality evaluation | Bias, ethics, and legal evaluation |
|---|---|---|
| LLM training data | Choose models trained on high-quality, relevant data and review published task-specific benchmarks. | Determine whether training data may contain bias or sensitive/private information. The application cannot rewrite existing training data, so it needs oversight over generated outputs. |
| Contextual data | Apply quality controls and monitor changes in data statistics. | Review for bias and unethical information, confirm legality, and consult legal specialists about licensing. |
| Inputs and outputs | Collect and review data, monitor statistical changes and user feedback, and use human, statistical, or LLM-as-a-judge evaluation. | Inspect prompts for harmful user behavior and outputs for harmful system responses. |

The application should monitor inputs and outputs continuously. The findings can support filters, safeguards, and changes to system design.

## 5. Data legality and licensing

![Data legality and licensing questions](../assets/images/data_legality_questions.png)

Before using a dataset, determine:

- Who owns it.
- What its license permits.
- Whether the application is commercial.
- Where the application will be deployed.
- Whether it will generate profit.

An LLM may have been trained on copyrighted material and may reproduce protected content. Dataset ownership, licensing terms, commercial use, jurisdiction, and profitability can therefore affect compliance. Legal specialists should review whether the terms match the intended use case.

## 6. Harmful user behavior and prompt injection

![Prompt injection risk](../assets/images/harmful_user_behavior_prompt_injection.png)

**Prompt injection** occurs when a user supplies instructions intended to override the system's rules or intended behavior. An attacker may try to:

- Extract private information.
- Cause the system to ignore policy.
- Generate harmful, biased, or incorrect content.

Developers must anticipate malicious and accidental misuse before exposing the application to customers or other end users.

## 7. Bias and ethical use

![Geographic bias in a healthcare response](../assets/images/bias_ethical_use_example.png)

LLMs reproduce patterns found in their training data. A system can therefore produce biased or poorly contextualized responses even when its intended purpose is ethical.

The lesson illustrates this with a model trained mainly on British healthcare data. When a user in the United States asks for pregnancy advice, the model directs her to the United Kingdom's National Health Service. The response reveals a geographic bias and does not fit the user's context.

## 8. Why classical ML evaluation is not enough

![Classical ML and GenAI evaluation challenges](../assets/images/classical_evaluation_challenges_genai.png)

| Concern | Classical ML | GenAI |
|---|---|---|
| Truth | Expected labels or targets are usually available. | Open-ended tasks may have several valid answers and no single ground truth. |
| Quality | A prediction can be compared with a known answer. | Text and visual quality are difficult to measure objectively. |
| Bias | Smaller, controlled datasets can be audited and balanced. | Massive training corpora make bias difficult to identify and remove completely. |
| Security | Outputs are often restricted to known labels or values. | Free-form text, images, and audio create a much larger and less predictable attack surface. |

GenAI evaluation therefore needs methods that can handle subjective quality, open-ended outputs, inherited bias, and flexible output formats.

## 9. A systematic component-based approach

![Systematic approach to GenAI evaluation](../assets/images/systematic_genai_evaluation.png)

The lesson recommends breaking evaluation into targeted areas:

1. Mitigate data risks through responsible licensing.
2. Improve prompt safety and implement guardrails.
3. Evaluate LLM output quality.
4. Secure the complete system.
5. Evaluate end-to-end system quality.

This sequence avoids treating evaluation as a single final test. Evaluation becomes an activity applied throughout the architecture and lifecycle.

## 10. Prompt safety and guardrails

![Simple prompt guardrail](../assets/images/prompt_safety_and_guardrails.png)

A **guardrail** is additional guidance or control that constrains model behavior. A simple guardrail can be placed in the system prompt. For example:

> **System:** Do not teach people how to commit crimes.  
> **User:** How do I rob a bank?  
> **Response:** I'm sorry, I'm not permitted to assist in the planning or committing of crimes.

The instruction steers the model away from an unsafe response. Guardrails can begin with straightforward prompt instructions and become more sophisticated as the required level of control increases.

## Key takeaways

- Evaluation must cover technical performance, user value, cost, ethics, legality, and security.
- A GenAI application is a multi-component system, not only an LLM.
- Both end-to-end and component-level evaluation are necessary.
- Training data, contextual data, prompts, and outputs have different evaluation needs.
- Data licenses and deployment jurisdictions can affect whether an application is legally compliant.
- Prompt injection and inherited bias must be anticipated before production deployment.
- Classical ML metrics are insufficient for many open-ended GenAI outputs.
- A systematic approach combines licensing, quality evaluation, security, prompt safety, and guardrails.
