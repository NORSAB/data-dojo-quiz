# Introduccion a la evaluacion end-to-end de aplicaciones

## Contexto del modulo

Este es el ultimo modulo del curso sobre evaluacion y gobierno. Amplia la evaluacion desde un modelo o una metrica individual hacia la aplicacion de IA completa, sus componentes, el valor para el negocio, el costo operativo y el comportamiento a largo plazo en produccion.

![Objetivos de aprendizaje sobre evaluacion end-to-end](../assets/images/learning_objectives_end_to_end_application_evaluation.png)

## Objetivos de aprendizaje

El modulo busca que el estudiante pueda:

1. Explicar por que debe evaluarse el sistema de IA completo respecto a su rendimiento total y los costos incurridos.
2. Recordar la arquitectura multicomponente de los sistemas de IA generativa.
3. Describir como la evaluacion de componentes individuales puede mejorar el rendimiento total del sistema.
4. Describir metricas personalizadas para componentes individuales que ayuden a alcanzar los objetivos del sistema.
5. Describir la evaluacion online dentro de una estrategia de evaluacion a largo plazo y a escala.

## Rendimiento, valor y costo

La evaluacion end-to-end debe equilibrar tres aspectos relacionados:

- **Rendimiento predictivo o de la tarea:** que tan bien completa el sistema el trabajo previsto.
- **Valor para el cliente:** si ese rendimiento genera un resultado util para el usuario o para el negocio.
- **Costo de infraestructura:** si el gasto de computo y operacion se justifica mediante el valor entregado.

Un sistema tecnicamente potente puede no ser viable si su costo supera el valor que produce. Del mismo modo, un sistema de menor costo puede ser inaceptable si no cumple la tarea o genera una experiencia deficiente.

## Sistemas con varios componentes

Las aplicaciones de IA generativa contienen multiples componentes, no un unico modelo aislado. El modulo retomara esta arquitectura y examinara como cada componente contribuye a la calidad, latencia, confiabilidad y costo totales.

## Mejora a nivel de componentes

El proceso previsto evalua componentes individuales, identifica cuellos de botella o fallos y los mejora de acuerdo con los objetivos end-to-end. Esto evita suponer que todos los problemas provienen del LLM.

## Metricas personalizadas

Los distintos componentes pueden necesitar metricas diferentes. El modulo explicara como conectar las mediciones de cada componente con los objetivos de la aplicacion completa.

## Evaluacion online

Las pruebas offline anteriores al despliegue ofrecen solamente una instantanea. La evaluacion online monitorea la aplicacion durante el tiempo y a escala de produccion, lo que permite detectar cambios de comportamiento, rendimiento, costo o resultados para el usuario.

## Nota de alcance

Esta introduccion define los objetivos del modulo. Todavia no especifica las metricas por componente, la arquitectura de produccion, la implementacion del monitoreo ni el procedimiento de optimizacion.

## Conceptos clave para el simulador

- La calidad end-to-end combina rendimiento, valor de la tarea y costo.
- Las aplicaciones GenAI deben evaluarse como sistemas multicomponente.
- Las metricas por componente deben contribuir a objetivos del sistema completo.
- El LLM es solamente una de las posibles fuentes de problemas.
- La evaluacion online permite analizar el sistema a largo plazo y a escala de produccion.
