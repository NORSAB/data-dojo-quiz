# Introduccion a las tecnicas de evaluacion de GenAI

## Contexto del modulo

Este modulo continua el curso sobre evaluacion y gobierno, y se concentra en las tecnicas utilizadas para evaluar modelos de lenguaje y los sistemas de IA que los incorporan.

![Objetivos de aprendizaje sobre tecnicas de evaluacion de GenAI](../assets/images/learning_objectives_genai_evaluation_techniques.png)

## Objetivos de aprendizaje

El modulo busca que el estudiante pueda:

1. Comparar y contrastar la evaluacion de LLM con la evaluacion tradicional de machine learning.
2. Describir la relacion entre la evaluacion del LLM y la evaluacion del sistema de IA completo.
3. Describir metricas genericas para evaluar LLM, como accuracy, perplexity y toxicity.
4. Explicar por que la evaluacion debe adaptarse de forma mas especifica a la tarea y a las necesidades de la aplicacion.
5. Describir metricas especificas de una tarea, como BLEU y ROUGE.
6. Describir LLM-as-a-judge, tecnica en la que un modelo de lenguaje evalua la salida producida por otro modelo.

## Niveles de evaluacion presentados

### Evaluacion tradicional y evaluacion de LLM

El modulo comparara la evaluacion convencional de machine learning con las necesidades particulares de los LLM. Esta introduccion presenta la comparacion como un objetivo; las diferencias se desarrollaran en la siguiente leccion.

### Evaluacion del modelo y evaluacion del sistema

Evaluar un LLM esta relacionado con evaluar la aplicacion de IA completa, pero no es lo mismo. El modulo examinara como las mediciones a nivel del modelo contribuyen a la evaluacion general del sistema.

## Familias de metricas presentadas

### Metricas genericas para LLM

- **Accuracy:** exactitud.
- **Perplexity:** perplejidad.
- **Toxicity:** toxicidad.

### Metricas especificas de tareas

- **BLEU**
- **ROUGE**

### Evaluacion basada en otro modelo

- **LLM-as-a-judge:** un modelo de lenguaje evalua la salida generada por otro LLM.

## Normalizacion terminologica

La transcripcion original contiene variantes del reconocimiento de voz como `LM`, `blue` y `rouge`. Los materiales de estudio normalizan estos terminos como **LLM**, **BLEU** y **ROUGE**, de acuerdo con el texto de la diapositiva.

## Nota de alcance

Esta leccion introductoria define los objetivos del modulo y nombra las tecnicas que se estudiaran. Todavia no presenta formulas, procedimientos de puntuacion, ventajas ni limitaciones de las metricas.

## Conceptos clave para el simulador

- La evaluacion de LLM difiere de la evaluacion tradicional de machine learning.
- La calidad del modelo es solamente una parte de la calidad del sistema completo.
- Accuracy, perplexity y toxicity se presentan como metricas genericas.
- La evaluacion adecuada depende de la tarea y de los requisitos de la aplicacion.
- BLEU y ROUGE se presentan como metricas especificas de tareas.
- LLM-as-a-judge utiliza un LLM para evaluar la salida de otro modelo.
