# Mapa de imagenes

Este archivo registra el origen y el significado de cada imagen guardada para **Generative AI Application Evaluation and Governance**.

## Modulo 00 - Before we get started

- `before_we_get_started_quick_note.png`: Imagen #1. Diapositiva introductoria que advierte sobre posibles diferencias de nomenclatura, interfaz o contenido debido a la evolucion continua de Databricks.

## Modulo 01 - Introduction to Evaluating GenAI Applications

- `learning_objectives_evaluating_genai_applications.png`: Imagen #1. Diapositiva con los cinco objetivos del modulo: necesidades de evaluacion por componente, legalidad del uso de datos, conductas y respuestas perjudiciales, gobierno y riesgos de IA, y tecnicas como licenciamiento y guardrails.

## Modulo 02 - Why Evaluating GenAI Applications

Las doce capturas se conservaron intactas porque constituyen la fuente visual disponible del PDF que no pudo descargarse.

- `why_evaluating_genai_applications_cover.png`: Imagen #1. Portada de la leccion **Why Evaluating GenAI Applications**, dentro del tema Data Legality and Guardrails.
- `why_evaluate_ai_system.png`: Imagen #2. Preguntas para evaluar si el sistema funciona: comportamiento esperado, satisfaccion del usuario, eficacia del LLM, sesgo, etica y costo.
- `ai_system_rag_components.png`: Imagen #3. Componentes de un sistema RAG: datos, modelos, Vector Search, interfaz y herramientas de seguridad y gobierno.
- `evaluating_system_and_components.png`: Imagen #4. Necesidad de evaluar el sistema completo y cada uno de sus componentes.
- `evaluating_data_components.png`: Imagen #5. Matriz de calidad y sesgo/etica para datos de entrenamiento, datos contextuales y entradas/salidas.
- `data_legality_questions.png`: Imagen #6. Preguntas legales sobre propiedad, uso comercial, jurisdiccion, rentabilidad y licencias de datos.
- `harmful_user_behavior_prompt_injection.png`: Imagen #7. Riesgo de comportamiento perjudicial del usuario y ejemplo de prompt injection.
- `bias_ethical_use_example.png`: Imagen #8. Ejemplo de sesgo geográfico causado por un modelo entrenado principalmente con datos sanitarios britanicos.
- `classical_evaluation_challenges_genai.png`: Imagen #9. Comparacion entre machine learning clasico y GenAI en verdad, calidad, sesgo y seguridad.
- `systematic_genai_evaluation.png`: Imagen #10. Enfoque sistematico y basado en componentes para evaluar GenAI.
- `prompt_safety_and_guardrails.png`: Imagen #11. Ejemplo de guardrail mediante instrucciones del system prompt para rechazar solicitudes delictivas.
- `why_evaluating_lesson_completion.png`: Imagen #12. Pantalla de cierre de la leccion.

## Modulo 03 - Demo: Exploring Licensing of Datasets

- `demo_outline_exploring_dataset_licensing.png`: Imagen #1. Esquema de la demostracion: explorar Databricks Marketplace, obtener acceso a un dataset, revisar la licencia e ingerir los datos.

## Modulo 06 - AI System Security

Las trece capturas se conservaron intactas porque constituyen la fuente visual disponible de la leccion.

- `ai_system_security_cover.png`: Imagen #1. Portada de la leccion **AI System Security**.
- `ai_security_risks.png`: Imagen #2. Riesgos de seguridad relacionados con acceso y gobierno de datos, seguimiento de modelos, ataques, exposicion de informacion y drift.
- `security_top_concern_survey.png`: Imagen #3. Encuesta en la que seguridad aparece como la principal preocupacion para cargas AI/ML, con 46 % de menciones totales y 21 % como preocupacion principal.
- `ai_security_challenges.png`: Imagen #4. Desafios causados por la falta de una vision completa entre cientificos de datos, equipos de seguridad e ingenieros de ML.
- `simplifying_ai_system_security_rag.png`: Imagen #5. Descomposicion de un sistema RAG en componentes que deben protegerse y gobernarse.
- `dasf_component_framework_overview.png`: Imagen #6. Vista general del Data and AI Security Framework (DASF), basado en 12 componentes y 55 riesgos asociados.
- `dasf_twelve_components.png`: Imagen #7. Los doce componentes fundacionales de un sistema AI/ML generico centrado en datos.
- `dasf_six_genai_focus_areas.png`: Imagen #8. Seis componentes prioritarios para desarrolladores, ingenieros y cientificos de GenAI.
- `databricks_security_platform_mapping.png`: Imagen #9. Mapeo de los seis componentes prioritarios con Unity Catalog, MLflow, Lakehouse Monitoring, Model Serving, Asset Bundles, CLI, Secrets y la plataforma serverless.
- `key_security_tooling_unity_catalog_mosaic_ai.png`: Imagen #10. Capacidades de seguridad y gobierno de Unity Catalog y Mosaic AI.
- `llama_guard_risk_taxonomy.png`: Imagen #11. Funcionamiento de Llama Guard mediante una taxonomia de riesgos y una directriz de respuesta.
- `llama_guard_input_output_guards.png`: Imagen #12. Flujo de proteccion con Input Guard antes del LLM y Output Guard antes de entregar la respuesta.
- `ai_system_security_completion.png`: Imagen #13. Pantalla de cierre de la leccion.

## Modulo 08 - Introduction to Gen AI Evaluation Techniques

- `learning_objectives_genai_evaluation_techniques.png`: Imagen #1. Seis objetivos del modulo: comparacion con evaluacion tradicional, relacion con el sistema completo, metricas genericas, necesidad de evaluaciones especificas, BLEU/ROUGE y LLM-as-a-judge.

## Modulo 09 - Evaluation Techniques

Las veintidos capturas se conservaron intactas porque constituyen la fuente visual disponible de la leccion.

- `evaluation_techniques_cover.png`: Imagen #1. Portada de la leccion **Evaluation Techniques**.
- `evaluating_llms_vs_ai_systems.png`: Imagen #2. Diferencia entre evaluar el sistema completo y evaluar especificamente sus componentes LLM.
- `llms_vs_classical_ml.png`: Imagen #3. Comparacion entre LLM y machine learning clasico en recursos, metricas e interpretabilidad.
- `foundation_metric_loss.png`: Imagen #4. Loss como diferencia entre la prediccion del siguiente token y la verdad durante entrenamiento o validacion.
- `foundation_metric_perplexity.png`: Imagen #5. Perplexity como medida de confianza del modelo sobre una secuencia.
- `foundation_metric_toxicity.png`: Imagen #6. Toxicity como medida de contenido dañino, ofensivo o inapropiado.
- `task_specific_evaluation_metrics_mlflow.png`: Imagen #7. Necesidad de metricas especificas y evaluadores disponibles mediante `mlflow.evaluate`.
- `task_specific_bleu_rouge.png`: Imagen #8. BLEU para traduccion y ROUGE para resumen.
- `bleu_ngram_comparison.png`: Imagen #9. Comparacion de n-gramas entre salida traducida y referencia mediante BLEU.
- `rouge_ngram_recall_variants.png`: Imagen #10. Formula de recall de ROUGE y variantes ROUGE-1, ROUGE-2, ROUGE-L y ROUGE-Lsum.
- `bleu_rouge_similarities.png`: Imagen #11. Similitudes entre BLEU y ROUGE: metricas por tarea, n-gramas y datasets de referencia.
- `benchmarking_generic_and_application_data.png`: Imagen #12. Uso combinado de grandes datasets genericos y datos propios de la aplicacion.
- `domain_specific_translation_reference_dataset.png`: Imagen #13. Dataset de referencia especifico para traducir documentacion de Databricks.
- `mosaic_ai_gauntlet_benchmarks.png`: Imagen #14. Mosaic AI Gauntlet con 35 fuentes de benchmarks organizadas en seis categorias.
- `evaluation_challenges_without_reference.png`: Imagen #15. Dificultades cuando no existe dataset de referencia, metrica o API para la tarea.
- `llm_as_judge_solution.png`: Imagen #16. LLM-as-a-judge como alternativa para evaluar casos complejos mediante reglas.
- `llm_as_judge_prompt_template.png`: Imagen #17. Plantilla de prompt, few-shot examples, criterios y rubrica para un juez LLM.
- `llm_as_judge_limitations_human_loop.png`: Imagen #18. Limitaciones del juez LLM y human-in-the-loop como mitigacion.
- `mlflow_llm_evaluation_benefits.png`: Imagen #19. Comparaciones batch, experimentacion escalable y ahorro de costos con MLflow Evaluation.
- `mlflow_batch_interactive_evaluation.png`: Imagen #20. Evaluacion batch mediante codigo y evaluacion interactiva en la interfaz.
- `mlflow_custom_llm_judge_workflow.png`: Imagen #21. Flujo de MLflow para crear ejemplos, definir una metrica personalizada y evaluar contra referencias.
- `evaluation_techniques_completion.png`: Imagen #22. Pantalla de cierre de la leccion.

## Modulo 12 - Introduction to End-to-end Application Evaluation

- `learning_objectives_end_to_end_application_evaluation.png`: Imagen #1. Cinco objetivos: rendimiento y costo total, arquitectura multicomponente, evaluacion de componentes, metricas personalizadas y evaluacion online a escala.

## Modulo 13 - End-to-end App. Evaluation

Las veintitres capturas se conservaron intactas porque constituyen la fuente visual disponible de la leccion.

- `end_to_end_evaluation_cover.png`: Imagen #1. Portada de la leccion **End-to-end App. Evaluation**.
- `ai_system_architecture_components.png`: Imagen #2. Arquitectura RAG y recordatorio de que un sistema de IA esta formado por componentes que tambien deben evaluarse en conjunto.
- `evaluating_whole_system_cost_performance.png`: Imagen #3. Evaluacion del sistema completo mediante costo, rendimiento y metricas personalizadas.
- `performance_metrics_section.png`: Imagen #4. Separador de la seccion **Performance Metrics**.
- `evaluating_rag_pipeline_components.png`: Imagen #5. Componentes que deben medirse por separado y juntos: chunking, embeddings, vector store, retrieval, reranker y generador.
- `rag_evaluation_relationships.png`: Imagen #6. Relaciones entre Query, Context, Response y Ground Truth utilizadas por las metricas RAG.
- `context_precision.png`: Imagen #7. Context Precision como relacion señal-ruido y calidad del ranking del contexto recuperado.
- `context_relevancy.png`: Imagen #8. Context Relevancy como alineacion tematica entre la consulta y el contexto.
- `context_recall.png`: Imagen #9. Context Recall como cobertura de la informacion necesaria segun el ground truth.
- `faithfulness.png`: Imagen #10. Faithfulness como respaldo factual de la respuesta en el contexto recuperado.
- `answer_relevancy.png`: Imagen #11. Answer Relevancy como alineacion de la respuesta con la intencion de la consulta.
- `answer_correctness.png`: Imagen #12. Answer Correctness como similitud semantica y factual respecto del ground truth.
- `custom_metrics_section.png`: Imagen #13. Separador de la seccion **Custom Metrics**.
- `custom_system_metrics_business_goals.png`: Imagen #14. Ejemplos de metricas personalizadas: latencia, costo, demanda y satisfaccion del cliente.
- `custom_metrics_mlflow.png`: Imagen #15. Creacion de metricas LLM personalizadas en MLflow mediante una rubrica y LLM-as-a-judge.
- `human_feedback_monitoring_section.png`: Imagen #16. Separador de la seccion **Human Feedback and Monitoring**.
- `offline_vs_online_evaluation.png`: Imagen #17. Comparacion entre evaluacion offline antes del despliegue y evaluacion online con usuarios reales.
- `human_feedback_explicit_implicit.png`: Imagen #18. Feedback humano explicito e implicito y necesidad de almacenarlo de manera estructurada.
- `ongoing_component_evaluation.png`: Imagen #19. Monitoreo continuo para detectar drift mediante Lakehouse Monitoring.
- `agent_evaluation_section.png`: Imagen #20. Separador de **Mosaic AI Agent Framework - Agent Evaluation**.
- `mosaic_ai_agent_framework_overview.png`: Imagen #21. Suite para crear, desplegar, evaluar y gobernar aplicaciones generativas de alta calidad.
- `mosaic_ai_agent_evaluation_features.png`: Imagen #22. Tracing, metricas RAG, Review App y Databricks LLM Judges dentro de Agent Evaluation.
- `end_to_end_evaluation_completion.png`: Imagen #23. Pantalla de cierre de la leccion.

## Quiz - Generative AI Application Evaluation and Governance

- `quiz_evaluation_governance_overview.png`: Portada del examen. Indica 20 preguntas, sin limite de tiempo, intentos ilimitados, puntuacion minima de 80 sobre 100 y que el examen no se puede pausar.
