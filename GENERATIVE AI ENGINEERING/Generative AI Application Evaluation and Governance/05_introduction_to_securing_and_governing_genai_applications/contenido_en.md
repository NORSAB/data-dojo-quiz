# Introduction to Securing and Governing GenAI Applications

## Module context

Security is a major concern when building generative AI applications. The previous section introduced some of the reasons these systems are difficult to evaluate and control. This module focuses more directly on why securing and governing GenAI systems is difficult and which Databricks frameworks and tools can help.

## Terminology note

The supplied transcript says **DAFS**, but the official acronym is **DASF: Databricks AI Security Framework**. The transcript's **LamaGuard** has also been normalized to **Llama Guard** in the study materials. The original transcript remains unchanged for traceability.

Official reference: [Databricks security, compliance, and privacy best practices](https://docs.databricks.com/aws/en/lakehouse-architecture/security-compliance-and-privacy/best-practices).

## Learning objectives

This module aims to:

1. Explain the importance of securing and governing generative AI application systems.
2. Identify why securing and governing generative AI systems is difficult.
3. Identify the roles of data scientists and AI developers within the Databricks AI Security Framework (DASF).
4. Describe Databricks tools that help practitioners secure and govern AI applications.

## Security and governance scope

The module introduces two related concerns:

- **Security:** protecting the AI application, its data, models, users, and interfaces against unauthorized access, misuse, and harmful behavior.
- **Governance:** establishing visibility, permissions, accountability, and oversight for the assets and activities that form the AI application.

The introductory lesson establishes these topics as important but does not yet describe the specific threats, responsibilities, or implementation procedures. Those details belong to the following lessons and demonstrations.

## Databricks AI Security Framework

The **Databricks AI Security Framework (DASF)** provides the organizational context mentioned in the module. The course will examine the roles of data scientists and AI developers within that framework.

At this stage, the lesson only identifies those practitioner roles as part of the security model; it does not yet assign detailed controls or responsibilities to them.

## Databricks capabilities introduced

The module will discuss several Databricks capabilities for securing and governing AI applications:

### Unity Catalog

Unity Catalog is introduced as the governance layer associated with:

- Permissions.
- Lineage.
- Auditing.

### Safety Filter and Llama Guard

The module will also revisit safety controls, including the Safety Filter and the Llama Guard framework, through later demonstrations.

## Scope note

This is a short module introduction. It defines the objectives and names the framework and tools that will be developed later; it does not yet demonstrate their configuration.

## Key takeaways

- Security and governance are central concerns for production GenAI applications.
- GenAI systems introduce challenges that require more than traditional application controls.
- The official acronym for the Databricks AI Security Framework is **DASF**.
- Data scientists and AI developers have roles within the security framework.
- Unity Catalog supports governance through permissions, lineage, and auditing.
- Safety Filter and Llama Guard are introduced as safety mechanisms that will be explored later.
