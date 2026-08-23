# Mapa de imagenes

Este archivo registra el origen y el significado de cada imagen guardada para **Building Single-Agent Applications on Databricks**.

## Modulo 00 - Before we get started

- `before_we_get_started_quick_note.png`: Imagen #1. Diapositiva introductoria que advierte sobre posibles diferencias de nomenclatura, interfaz o contenido debido a la evolucion continua de Databricks.

## Modulo 01 - Foundations of AI Agents and Tools on Databricks

- `agent_framework.png`: Imagen #2 / marcador original `agent-framework.png`. Estructura general de un agent framework: prompts de entrada, IA generativa, herramientas, secuencia de decisiones y respuesta.
- `a4_core_components_of_ai_agents.png`: Imagen #3 / marcador original `a4-core-components-of-ai-agents`. Ejemplo de componentes de un agente: usuario, LLM de Mosaic AI, planificacion, herramientas y memoria en Lakebase/Delta Lake.
- `example_agent_framework_with_uc.png`: Imagen #4 / marcador original `example-agent-framework-with-uc.png`. Extension del framework con herramientas que acceden a datos estructurados y no estructurados gobernados por Unity Catalog, ademas de herramientas externas.
- `example_agent_framework_with_sql_function.png`: Imagen #5 / marcador original `example-agent-framework-with-sql-function.png`. Relacion entre el agente, una herramienta y la estructura basica de una funcion SQL de Unity Catalog documentada para el LLM.

## Modulo 02 - Unity Catalog Functions as Agent Tools

- `sql_function_vs_agent_tool.png`: Imagen #1 / marcador original `sql-fun-vs-agent-tool.png`. Comparacion entre una funcion SQL con metadata minima y una version documentada para que el agente identifique la herramienta y sus parametros.
- `python_function_agent_tool_reasoning.png`: Imagen #2 / marcador original `python-function-diagram.png`. Flujo de razonamiento, planificacion e invocacion de una herramienta Python a partir de su docstring, definicion y metadata.
- `sql_function_registration.png`: Imagen #3 / marcador original `sql-registration-diagram`. Registro de una funcion SQL de Unity Catalog mediante `CREATE OR REPLACE FUNCTION`, usando el calculo del indice de masa corporal como ejemplo.
- `python_function_registration_options.png`: Imagen #4 / marcador original `python-registration-diagram`. Dos formas de registrar una funcion Python: `DatabricksFunctionClient.create_python_function()` o DDL SQL con `LANGUAGE PYTHON`.
- `sql_function_ui_validation.png`: Imagen #5 / marcador original `sql-func-validation.png`. Vista Overview de una funcion SQL registrada, con descripcion, definicion, parametro, retorno, lenguaje y propiedad determinista.
- `python_function_ui_validation.png`: Imagen #6 / marcador original `python-tool-ui.png`. Vista Overview de `get_airbnb_posting_info`, una funcion Python registrada con su definicion y metadata.
- `ai_playground_uc_tool_invocation.png`: Imagen #7 / marcador original `ai-playground-tools.png`. Ejemplo de GPT-5.1 equipado con una funcion de Unity Catalog, incluyendo razonamiento, invocacion y salida de la herramienta.

## Modulo 04 - Authoring Single AI Agents with Mosaic AI Agent Framework

- `single_agent_development_lifecycle.png`: Imagen #1 / marcador original `single-agents-course.png`. Flujo desde ingestion y transformacion con Lakeflow hasta creacion de herramientas, pruebas en AI Playground y desarrollo, evaluacion y registro del agente.
- `mlflow_streaming_trace_ui.png`: Imagen #2 / marcador original `mlflow-ui.png`. Interfaz de MLflow con los eventos `mlflow.chunk.item.*` de una respuesta transmitida por chunks.
- `mlflow_streaming_chunk_aggregation.png`: Imagen #3 / marcador original `mlflow-chunking.png`. Representacion de cuatro eventos delta que se agregan para producir una respuesta final mediante `response.output_item.done`.

## Modulo 06 - Building Agents on Databricks with MLflow

- `mlflow_agent_trace_hierarchy.png`: Imagen #1 / marcador original `tracing-example.png`. Trace jerarquico con operaciones `predict`, `predict_stream`, completions del modelo y ejecucion de una herramienta, junto con detalles de entrada y salida.
- `mlflow_trace_tags.png`: Imagen #2 / marcador original `tagging-example.png`. Tags mutables asociados con un trace, incluidos etapa, tipo de entrada, alcance del span, version, componente y ambiente.
- `mlflow_unity_catalog_agent_registration.png`: Imagen #3 / marcador original `mlflow-with-uc-diagram.png`. Flujo para empaquetar el agente como modelo MLflow y registrarlo en Unity Catalog mediante su model URI.

## Modulo 09 - Single Agents with Agent Bricks

- `agent_bricks_cost_quality_optimization.png`: Imagen #1 / marcador original `agent-bricks-cost.png`. Proceso de alto nivel: definir la tarea, crear benchmarks, optimizar costo y calidad, desplegar e iterar.
- `agent_bricks_automated_interactive_types.png`: Imagen #2 / marcador original `automated-interactive-agents.png`. Clasificacion entre Automated Bricks —Information Extraction y Custom LLM— e Interactive Bricks —Knowledge Assistant, Multi-Agent Supervisor y Genie Agent—.
- `agent_bricks_control_plane_architecture.png`: Imagen #3 / marcador original `agent-bricks-high-level-architecture.png`. Datos, prompts, herramientas y agentes ingresan por la configuracion; Unity Catalog verifica identidad y MLflow registra experimentos y metricas.
- `agent_bricks_quality_improvement_cycle.png`: Imagen #4 / marcador original `setup-architecture-1.png`. Ciclo de despliegue, medicion, deteccion de problemas y feedback en lenguaje natural mediante sesiones con expertos.
- `agent_bricks_databricks_integrations.png`: Imagen #5 / marcador original `agent-bricks-integration.png`. Flujo desde datos gobernados por Unity Catalog hacia Agent Bricks y sus opciones de consumo: batch inference, Databricks Apps, Lakeflow, AI Playground y aplicaciones externas.
