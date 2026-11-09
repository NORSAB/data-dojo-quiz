# Introduccion a la seguridad y el gobierno de aplicaciones GenAI

## Contexto del modulo

La seguridad es una preocupacion fundamental al construir aplicaciones de IA generativa. La seccion anterior presento algunas razones por las que estos sistemas son dificiles de evaluar y controlar. Este modulo se concentra en explicar por que resulta complejo proteger y gobernar los sistemas GenAI, y que marcos y herramientas de Databricks pueden ayudar.

## Nota terminologica

La transcripcion proporcionada dice **DAFS**, pero el acronimo oficial es **DASF: Databricks AI Security Framework**. El termino **LamaGuard** de la transcripcion tambien se normalizo como **Llama Guard** en los materiales de estudio. El archivo original permanece sin modificaciones para conservar la trazabilidad.

Referencia oficial: [Practicas recomendadas de seguridad, cumplimiento y privacidad de Databricks](https://docs.databricks.com/aws/en/lakehouse-architecture/security-compliance-and-privacy/best-practices).

## Objetivos de aprendizaje

Este modulo busca que el estudiante pueda:

1. Explicar la importancia de proteger y gobernar los sistemas de aplicaciones de IA generativa.
2. Identificar por que resulta dificil proteger y gobernar los sistemas GenAI.
3. Identificar las funciones de los cientificos de datos y desarrolladores de IA dentro del Databricks AI Security Framework (DASF).
4. Describir las herramientas de Databricks que ayudan a los profesionales a proteger y gobernar aplicaciones de IA.

## Alcance de seguridad y gobierno

El modulo presenta dos preocupaciones relacionadas:

- **Seguridad:** proteger la aplicacion de IA, sus datos, modelos, usuarios e interfaces contra acceso no autorizado, uso indebido y comportamientos perjudiciales.
- **Gobierno:** establecer visibilidad, permisos, responsabilidad y supervision sobre los activos y actividades que componen la aplicacion de IA.

La introduccion establece la importancia de estos temas, pero todavia no describe amenazas concretas, responsabilidades detalladas ni procedimientos de implementacion. Esos elementos se desarrollaran en las siguientes lecciones y demostraciones.

## Databricks AI Security Framework

El **Databricks AI Security Framework (DASF)** proporciona el contexto organizativo mencionado en el modulo. El curso examinara las funciones de los cientificos de datos y los desarrolladores de IA dentro de este marco.

En esta etapa, la leccion solamente identifica esos roles como parte del modelo de seguridad; aun no les asigna controles o responsabilidades especificos.

## Capacidades de Databricks presentadas

El modulo abordara varias capacidades de Databricks para proteger y gobernar aplicaciones de IA.

### Unity Catalog

Unity Catalog se presenta como la capa de gobierno relacionada con:

- Permisos.
- Linaje.
- Auditoria.

### Safety Filter y Llama Guard

El modulo tambien retomara los controles de seguridad, incluidos Safety Filter y el framework Llama Guard, mediante demostraciones posteriores.

## Nota de alcance

Esta es una introduccion breve al modulo. Define los objetivos y nombra el framework y las herramientas que se desarrollaran posteriormente; todavia no muestra como configurarlos.

## Conceptos clave para el simulador

- La seguridad y el gobierno son preocupaciones centrales para las aplicaciones GenAI en produccion.
- Los sistemas GenAI introducen desafios que requieren mas que los controles tradicionales de una aplicacion.
- El acronimo oficial del Databricks AI Security Framework es **DASF**.
- Los cientificos de datos y desarrolladores de IA tienen funciones dentro del marco de seguridad.
- Unity Catalog favorece el gobierno mediante permisos, linaje y auditoria.
- Safety Filter y Llama Guard se presentan como mecanismos de seguridad que se exploraran posteriormente.
