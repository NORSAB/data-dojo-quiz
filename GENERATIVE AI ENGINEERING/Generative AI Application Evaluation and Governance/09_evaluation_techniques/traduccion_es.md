# Técnicas de evaluación

## Jerarquía de evaluación

![Evaluación del LLM y del sistema completo](../assets/images/evaluating_llms_vs_ai_systems.png)

La evaluación debe distinguir entre un componente y la aplicación completa:

| Objeto evaluado | Aspectos habituales |
|---|---|
| Sistema de IA completo | Relación costo-valor, feedback de usuarios, seguridad y calidad end-to-end. |
| Componente LLM | Benchmarks, métricas del foundation model, métricas específicas de tareas y evaluación mediante otro modelo. |

La calidad del LLM contribuye a la calidad de la solución, pero no sustituye la evaluación del sistema completo.

## LLM frente a machine learning clásico

![Comparación entre LLM y machine learning clásico](../assets/images/llms_vs_classical_ml.png)

| Área | Machine learning clásico | LLM |
|---|---|---|
| Datos y recursos | Menores requisitos de almacenamiento y cómputo. | Datasets masivos y recursos sustanciales de GPU o TPU. |
| Métricas | Objetivos definidos y métricas como accuracy o F1. | BLEU, ROUGE, perplexity, evaluación humana y LLM-as-a-judge. |
| Interpretabilidad | Puede ofrecer coeficientes interpretables e importancia de variables. | Los modelos grandes suelen comportarse como cajas negras. |

Los LLM generan lenguaje abierto y admiten varias respuestas razonables, por lo que requieren una combinación de métricas automáticas y juicio cualitativo.

## Métricas de foundation models

### Loss

![Curva de loss durante el entrenamiento](../assets/images/foundation_metric_loss.png)

Loss mide la diferencia entre la predicción del siguiente token y el token esperado durante entrenamiento o validación. Una reducción de validation loss indica que el modelo mejora su capacidad de predecir tokens.

Sin embargo, un loss bajo no garantiza respuestas coherentes, verdaderas o útiles. El modelo puede producir texto gramaticalmente correcto que no tenga sentido, y el pre-training no equivale a la alineación con una tarea específica.

### Perplexity

![Perplexity y distribución de probabilidad](../assets/images/foundation_metric_perplexity.png)

Perplexity expresa la incertidumbre predictiva del modelo sobre una secuencia:

- **Perplexity baja:** mayor confianza en la secuencia observada.
- **Perplexity alta:** menor confianza.

Esta métrica ayuda a medir fluidez y predicción lingüística, pero no demuestra que la respuesta sea relevante, exacta o correcta para una tarea downstream.

### Toxicity

![Ejemplos de puntuación de toxicidad](../assets/images/foundation_metric_toxicity.png)

Toxicity estima si una salida contiene lenguaje perjudicial, ofensivo o inapropiado. La diapositiva presenta una frase amable con puntuación `0.1` y un insulto con `0.9`. Normalmente se utiliza un clasificador preentrenado de lenguaje de odio.

Un valor bajo significa menor daño detectado, pero el resultado depende de la calidad y los sesgos del propio clasificador.

## Evaluación específica de tareas

Las métricas genéricas no indican por sí solas si el modelo traduce, resume, responde preguntas, recomienda productos, genera código o resuelve otra tarea correctamente. La evaluación debe reproducir la tarea real y utilizar métricas sensibles a su contexto.

La lección presenta familias de evaluadores de MLflow para regresión, clasificación, question answering y text summarization.

## BLEU

![Comparación de n-gramas mediante BLEU](../assets/images/bleu_ngram_comparison.png)

**BLEU — Bilingual Evaluation Understudy** se utiliza principalmente para evaluar traducciones. Compara la salida generada con una o varias referencias mediante coincidencias de n-gramas:

- Unigramas: palabras individuales.
- Bigramas: secuencias de dos palabras.
- Trigramas: secuencias de tres palabras.

Una mayor coincidencia suele producir una puntuación BLEU más alta. Es una evaluación supervisada porque necesita traducciones de referencia consideradas correctas o de buena calidad.

## ROUGE

![Variantes y recall de ROUGE](../assets/images/rouge_ngram_recall_variants.png)

**ROUGE — Recall-Oriented Understudy for Gisting Evaluation** se utiliza especialmente para evaluar resúmenes. Mide cuánto contenido de la referencia aparece en la salida:

```text
Recall ROUGE-N = n-gramas coincidentes / n-gramas totales de la referencia
```

| Variante | Unidad comparada |
|---|---|
| ROUGE-1 | Palabras o tokens |
| ROUGE-2 | Bigramas |
| ROUGE-L | Subsecuencia común más larga |
| ROUGE-Lsum | ROUGE-L a nivel del resumen |

## Similitudes entre BLEU y ROUGE

![Similitudes entre BLEU y ROUGE](../assets/images/bleu_rouge_similarities.png)

Ambas métricas:

1. Son específicas de tareas.
2. Se aplican a salidas generadas por LLM.
3. Analizan n-gramas, no solamente palabras aisladas.
4. Comparan la salida con datasets de referencia.

Su utilidad depende directamente de disponer de referencias pertinentes y de alta calidad.

## Benchmarking y selección de datos

![Datos genéricos y datos propios para benchmarking](../assets/images/benchmarking_generic_and_application_data.png)

Benchmarking significa comparar modelos contra datasets de evaluación estandarizados. Una estrategia robusta combina:

- Benchmarks genéricos grandes para comparaciones amplias.
- Datasets específicos del dominio y de la tarea.
- Datos propios que reproduzcan el uso real de la aplicación.

Los benchmarks públicos son proxies útiles, pero rara vez representan exactamente los requisitos de una organización.

### Ejemplo de traducción especializada

![Dataset de referencia para traducir documentación](../assets/images/domain_specific_translation_reference_dataset.png)

Para evaluar la traducción de documentación de Databricks, un dataset apropiado podría emparejar texto original en inglés con traducciones oficiales en español o portugués. Esto permite medir terminología técnica y estilo propios del dominio.

### Mosaic AI Gauntlet

La lección presenta Mosaic AI Gauntlet como una colección de **35 fuentes de benchmarks** organizadas en seis categorías:

- Comprensión lectora.
- Razonamiento de sentido común.
- Resolución de problemas.
- Conocimiento del mundo.
- Resolución simbólica de problemas.
- Comprensión del lenguaje.

La evaluación por categorías ofrece una visión más completa de fortalezas y debilidades que una sola puntuación agregada.

## Cuando las referencias no son suficientes

![Desafíos de evaluación sin referencias](../assets/images/evaluation_challenges_without_reference.png)

Las métricas tradicionales dejan vacíos cuando:

- No existe un dataset de referencia.
- La tarea no dispone de una métrica o API establecida.
- Se deben evaluar casos atípicos o edge cases.

Sin ground truth ni benchmarks, se presenta un problema circular: se necesita un buen sistema para crear datos de evaluación, pero se necesitan datos de evaluación para demostrar que el sistema es bueno.

## LLM-as-a-judge

![LLM-as-a-judge como alternativa de evaluación](../assets/images/llm_as_judge_solution.png)

LLM-as-a-judge utiliza un modelo de lenguaje para evaluar las respuestas producidas por otro modelo. El juez recibe reglas, criterios o ejemplos y genera feedback o una puntuación.

### Diseño del prompt del juez

![Plantilla y recomendaciones para el juez LLM](../assets/images/llm_as_judge_prompt_template.png)

Un prompt eficaz debe:

- Definir con precisión la dimensión evaluada.
- Explicar cómo se reconoce una respuesta buena o deficiente.
- Proporcionar ejemplos few-shot puntuados por personas.
- Utilizar una rúbrica por componentes o una escala clara.
- Solicitar feedback estructurado y una puntuación numérica.

El ejemplo de la diapositiva pide valorar la utilidad de una respuesta entre `0` y `10` y justificar la calificación.

### Limitaciones

![Limitaciones y human-in-the-loop](../assets/images/llm_as_judge_limitations_human_loop.png)

Los jueces LLM permiten escalar y reducir costos, pero pueden presentar:

- Falta de comprensión o conciencia contextual.
- Juicios inexactos o alucinados.
- Sesgos y preocupaciones éticas heredadas del modelo evaluador.

Human-in-the-loop permite revisar las métricas, resolver ambigüedades, mejorar la exactitud y conservar supervisión cualitativa.

## Evaluación con MLflow

![Evaluación batch e interactiva con MLflow](../assets/images/mlflow_batch_interactive_evaluation.png)

MLflow permite:

- Comparar foundation models y modelos fine-tuned sobre muchas preguntas.
- Evaluar automáticamente salidas no estructuradas.
- Usar LLM-as-a-judge o datasets con ground truth.
- Comparar visualmente modelos y prompts en la interfaz.
- Probar nuevas consultas de manera iterativa.

### Métricas personalizadas con un juez LLM

![Flujo de métricas personalizadas de MLflow](../assets/images/mlflow_custom_llm_judge_workflow.png)

El flujo descrito tiene tres pasos:

1. Crear registros de ejemplo para evaluación.
2. Crear un objeto de métrica con ejemplos, criterios de puntuación, modelo juez y agregaciones.
3. Evaluar el modelo contra un dataset de referencia mediante la nueva métrica.

MLflow convierte una plantilla conceptual en un proceso repetible de evaluación batch, interactiva y automatizada.

## Guía práctica de selección

| Necesidad | Enfoque apropiado |
|---|---|
| Progreso de entrenamiento | Loss y perplexity |
| Lenguaje perjudicial | Toxicity y revisión de seguridad |
| Traducción | BLEU y referencias específicas del dominio |
| Resumen | ROUGE más revisión humana o mediante juez |
| Comparación general de modelos | Benchmarks de varias categorías |
| Calidad abierta sin referencias | LLM-as-a-judge con rúbrica |
| Casos ambiguos o de alto impacto | Human-in-the-loop |

## Conceptos clave para el simulador

- Ninguna métrica aislada demuestra que un LLM o una aplicación tengan alta calidad.
- Loss y perplexity evalúan modelado del lenguaje, no el cumplimiento completo de una tarea.
- Las métricas específicas necesitan datasets de referencia pertinentes.
- Los benchmarks genéricos deben complementarse con datos propios.
- LLM-as-a-judge amplía la evaluación a tareas abiertas, pero introduce riesgos del modelo evaluador.
- Human-in-the-loop ayuda a controlar sesgo, alucinaciones y ambigüedad.
- MLflow permite operacionalizar evaluación batch, interactiva, con referencias y mediante jueces LLM.
