# Creación de agentes de IA individuales con Databricks Mosaic AI Agent Framework

## Descripción general

Databricks Mosaic AI Agent Framework proporciona una plataforma unificada para crear, desplegar y monitorear agentes de IA. Admite bibliotecas populares como LangChain, LangGraph, DSPy y patrones de OpenAI, al mismo tiempo que se integra con servicios de Databricks como Vector Search, Model Serving, Unity Catalog, AI Gateway y MLflow.

El framework está orientado a producción. Combina tracing automático, evaluación, gobierno, registro de modelos, serving escalable y monitoreo continuo. Estas capacidades permiten implementar desde agentes conversacionales sencillos hasta aplicaciones agénticas y sistemas multiagente más complejos.

## Objetivos de aprendizaje

Al finalizar la lección, se debe poder:

- Comprender la arquitectura y los componentes de Mosaic AI Agent Framework.
- Explicar los beneficios de `ResponsesAgent` para desarrollar agentes preparados para producción.
- Identificar los frameworks de creación compatibles y sus patrones de integración.
- Describir las consideraciones para desplegar agentes.
- Reconocer capacidades avanzadas como streaming, entradas y salidas personalizadas e integración con retrievers.

## A. Introducción a Mosaic AI Agent Framework

Mosaic AI Agent Framework cubre el ciclo de vida completo del agente, desde la preparación de datos y herramientas hasta el despliegue y monitoreo en producción.

### Ciclo de vida de un agente

#### 1. Preparar los datos y crear herramientas

Los ingenieros de IA preparan los datos mediante ETL relacionado con IA usando notebooks, consultas SQL y Lakeflow. Los datos no estructurados suelen convertirse en embeddings e indexarse mediante Vector Search.

Cuando los datos están preparados, se crean herramientas SQL o Python y se registran en Unity Catalog para obtener gobierno centralizado.

#### 2. Prototipado rápido y controles de calidad

AI Playground permite realizar experimentos no-code. El ingeniero puede definir un system prompt, seleccionar foundation models, compararlos en paralelo, conectar herramientas y efectuar una primera revisión cualitativa.

Las capacidades de evaluación de MLflow 3 ayudan a identificar problemas de calidad y sus causas raíz. Después del prototipado, el código puede exportarse desde AI Playground y evaluarse mediante `mlflow.genai.evaluate()`.

#### 3. Evaluar y recopilar feedback

El agente se prueba con conjuntos de evaluación. Entre los métodos disponibles se encuentran:

- LLM judges.
- Etiquetado por stakeholders o expertos del dominio.
- Datos sintéticos.
- Review applications.
- Tracing directo de interacciones.

#### 4. Etiquetar datos y feedback

Las interacciones y salidas se etiquetan para construir benchmarks confiables que permitan probar iteraciones posteriores. Estos conjuntos de evaluación funcionan como ground truth para medir la calidad. Las labeling sessions ofrecen un proceso estructurado para que los expertos revisen el comportamiento de la aplicación GenAI.

#### 5. Mejorar de forma iterativa

El feedback y los benchmarks se utilizan para identificar y corregir las causas raíz de los problemas. Se comparan varias versiones y configuraciones para equilibrar:

- Exactitud.
- Seguridad.
- Costo.
- Latencia.

#### 6. Desplegar en producción

El agente pasa a un ambiente escalable de producción, frecuentemente mediante una REST API respaldada por Mosaic AI Model Serving. Unity Catalog proporciona gobierno unificado de acceso y cumplimiento.

#### 7. Monitorear calidad y rendimiento

Las mismas herramientas de evaluación y tracing utilizadas durante el desarrollo continúan funcionando en producción. Logs, traces, feedback del usuario y jueces automatizados proporcionan señales permanentes de calidad.

Las interacciones de producción pueden incorporarse a futuros conjuntos de evaluación. También se dispone de:

- Inference tables mejoradas por AI Gateway con metadata detallada de las solicitudes.
- Observabilidad end-to-end mediante MLflow Tracing.
- Ejecución automática de scorers de MLflow sobre traces de producción mediante production monitoring for GenAI.

![Ciclo de desarrollo y operacion de un agente individual](../assets/images/single_agent_development_lifecycle.png)

La figura conecta cuatro áreas principales:

1. Ingesta con Lakeflow y procesamiento Bronze, Silver y Gold.
2. Creación, validación y refinamiento iterativos de herramientas SQL, Python, Vector Search y MCP.
3. Selección de foundation models y pruebas de herramientas en AI Playground.
4. Creación del agente con frameworks compatibles, seguida de evaluación con MLflow y registro del modelo en Unity Catalog.

La lección se concentra en la etapa **Agent Framework**.

### A1. Arquitectura del framework

Después de probar las herramientas de UC y externas mediante notebooks, SQL Editor y AI Playground, Mosaic AI Agent Framework proporciona los componentes para crear, desplegar y monitorear aplicaciones agénticas y RAG:

- **Integración con MLflow 3:** seguimiento de experimentos, registro de modelos, tracing, evaluación y gestión del ciclo de vida.
- **Interfaz `ResponsesAgent`:** interfaz orientada a producción y compatible con el esquema OpenAI Responses.
- **Bibliotecas de creación:** integraciones para LangChain, LangGraph, DSPy, OpenAI y patrones Python puros.
- **Databricks AI Bridge:** paquetes que conectan frameworks de terceros con las capacidades de IA de Databricks.
- **Gobierno de agentes:** herramientas y agentes registrados y gobernados en Unity Catalog; AI Gateway y MLflow capturan logs y traces de inferencia.
- **Mosaic AI Model Serving:** infraestructura escalable para servir agentes en producción.
- **Evaluación y monitoreo:** herramientas incorporadas para medir calidad y rendimiento.

### A2. Requisitos y preparación

#### Requisitos principales

- `databricks-agents` 1.2.0 o posterior.
- `mlflow` 3.1.3 o posterior.
- Python 3.10 o posterior.
- Serverless compute o Databricks Runtime 13.3 LTS o posterior.

#### Instalación

```python
%pip install -U -qqqq databricks-agents mlflow
```

#### Paquetes de integración de Databricks AI Bridge

AI Bridge proporciona una capa común de APIs para funciones de Databricks como AI/BI Genie y Vector Search.

| Paquete | Integración prevista |
|---|---|
| `databricks-openai` | Agentes con patrones OpenAI |
| `databricks-langchain` | LangChain y LangGraph |
| `databricks-dspy` | DSPy |
| `databricks-ai-bridge` | Agentes Python puros sin un paquete dedicado |

## B. `ResponsesAgent`: interfaz de producción

Databricks recomienda la interfaz `ResponsesAgent` de MLflow como método principal para crear agentes preparados para producción. Es compatible con el esquema OpenAI Responses y agrega capacidades propias de Databricks.

Para agentes nuevos, `ResponsesAgent` sustituye a la interfaz anterior `ChatAgent`.

### B1. Beneficios de `ResponsesAgent`

#### Capacidades avanzadas

- Compatibilidad con workflows multiagente.
- Salida en streaming mediante chunks en tiempo real.
- Historial completo de mensajes relacionados con tool calling.
- Confirmación antes de ejecutar una herramienta.
- Compatibilidad con herramientas de larga duración.

#### Creación y despliegue simplificados

- **Independiente del framework:** permite envolver agentes existentes para hacerlos compatibles con Databricks.
- Interfaces tipadas y autocompletado en el IDE.
- Inferencia automática de la model signature durante el registro.
- Tracing automático de `predict` y `predict_stream`, incluida la agregación de la respuesta transmitida.
- Inference tables mejoradas por AI Gateway para logging detallado.

Si no se utiliza la interfaz recomendada, se debe definir la signature manualmente o inferirla a partir de ejemplos de entrada mediante MLflow Model Signature.

Un agente sin streaming implementa `predict` y devuelve `ResponsesAgentResponse`. Un agente con streaming puede implementar `predict_stream`. La implementación detallada del streaming supera el alcance central de esta lección.

### B2. Esquema de solicitud y respuesta

#### Entrada: `ResponsesAgentRequest`

```json
{
  "input": [
    {
      "role": "user",
      "content": "What did the data scientist say when their Spark job finally completed?"
    }
  ]
}
```

#### Salida: `ResponsesAgentResponse`

```python
ResponsesAgentResponse(
    output=[
        {
            "type": "message",
            "id": str(uuid.uuid4()),
            "content": [
                {
                    "type": "output_text",
                    "text": "Well, that really sparked joy!"
                }
            ],
            "role": "assistant",
        }
    ]
)
```

### B3. Envolver un agente existente

No es necesario reescribir un agente creado previamente con LangChain, LangGraph, patrones OpenAI u otro framework. Se puede implementar un wrapper que herede de `mlflow.pyfunc.ResponsesAgent`, transforme los mensajes de entrada, invoque el agente existente y convierta el resultado al formato esperado.

```python
from uuid import uuid4
from mlflow.pyfunc import ResponsesAgent
from mlflow.types.responses import ResponsesAgentRequest, ResponsesAgentResponse


class MyWrappedAgent(ResponsesAgent):
    def __init__(self, agent):
        # Referencia al agente existente.
        self.agent = agent

    def prep_msgs_for_llm(self, messages: list[dict]) -> list[dict]:
        # Convierte los mensajes al formato esperado por el agente.
        return messages

    def predict(
        self,
        request: ResponsesAgentRequest,
    ) -> ResponsesAgentResponse:
        messages = self.prep_msgs_for_llm(
            [item.model_dump() for item in request.input]
        )

        agent_response = self.agent.invoke(messages)

        if not isinstance(agent_response, str):
            agent_response = str(agent_response)

        output_item = self.create_text_output_item(
            text=agent_response,
            id=str(uuid4()),
        )
        return ResponsesAgentResponse(output=[output_item])
```

## C. Frameworks compatibles para crear agentes

### C1. LangChain

LangChain es un framework amplio para construir aplicaciones con LLM y dispone de numerosas integraciones.

En Databricks permite:

- Utilizar modelos servidos por Databricks para inferencia y embeddings.
- Integrarse con Mosaic AI Vector Search para almacenamiento y recuperación vectorial.
- Usar MLflow para seguimiento de experimentos y rendimiento.
- Aplicar MLflow Tracing durante desarrollo y producción.
- Cargar PySpark DataFrames.
- Utilizar Spark DataFrame Agent y Databricks SQL Agent para consultas en lenguaje natural.

```python
from databricks_langchain import ChatDatabricks

chat_model = ChatDatabricks(
    endpoint="databricks-gpt-5-1",
    temperature=0.1,
    max_tokens=250,
)

chat_model.invoke("How to use Databricks?")
```

La fuente advierte que las funciones de LangChain para desarrollo con LLM en Databricks son experimentales y sus APIs pueden cambiar.

### C2. DSPy

DSPy define y optimiza programas de IA generativa mediante un enfoque programático de prompt engineering.

#### Componentes principales

- **Modules:** componentes que realizan transformaciones de texto en lugar de depender de prompts escritos manualmente.
- **Signatures:** definiciones en lenguaje natural del comportamiento de entrada y salida, como `question -> answer`.
- **Compiler:** optimiza pipelines ajustando los módulos según métricas de rendimiento.
- **Program:** módulos conectados que forman un pipeline para una tarea compleja.

#### Ventajas

- Optimización automática de prompts.
- Mejora sistemática del agente.
- Optimización de rendimiento incorporada.
- Prompt engineering programático en lugar de manual.

### C3. Integración con OpenAI

Databricks admite patrones familiares de la API de OpenAI mientras utiliza modelos alojados en Databricks. Entre los beneficios se encuentran:

- Patrones de desarrollo conocidos.
- Acceso a Databricks Foundation Model APIs.
- Migración más sencilla desde modelos OpenAI hacia modelos Databricks.
- Respuestas con y sin streaming.
- Tool calling con modelos compatibles de Databricks.

### C4. LangGraph

LangGraph amplía LangChain con orquestación basada en grafos para workflows complejos y con estado:

- Workflows de agentes basados en grafos.
- Gestión de estado entre interacciones.
- Lógica condicional y árboles de decisión complejos.
- Razonamiento de varios pasos y coordinación de herramientas.

## D. Streaming y respuestas en tiempo real

El streaming emite la respuesta de forma incremental en lugar de esperar a que termine por completo para mostrarla. Esto mejora la interactividad y el rendimiento percibido.

MLflow puede mostrar tanto la respuesta final como los chunks intermedios. Estos eventos ayudan a entender por qué el agente eligió —o no eligió— una herramienta determinada.

> **Aclaración de la fuente:** una oración del texto recibido afirma que el streaming espera una respuesta completa. La definición circundante, los tipos de eventos, las capturas y los beneficios describen una entrega incremental; esta versión utiliza esa interpretación coherente.

![Eventos de chunks dentro de una traza de MLflow](../assets/images/mlflow_streaming_trace_ui.png)

La captura muestra una traza de Knowledge Assistant con varios eventos `mlflow.chunk.item.*` que contienen valores `response.output_text.delta`.

### D1. Patrón de implementación

1. Emitir varios eventos `response.output_text.delta` con el mismo `item_id`.
2. Finalizar con un evento `response.output_item.done` que contenga la salida completa.

#### Beneficios

- Feedback inmediato para el usuario.
- Mejor rendimiento percibido.
- Mayor interacción durante operaciones prolongadas.
- Integración automática con MLflow Tracing.
- Respuestas agregadas en las inference tables de AI Gateway.

![Agregacion de chunks en una respuesta completa](../assets/images/mlflow_streaming_chunk_aggregation.png)

La figura muestra cuatro delta chunks que forman progresivamente la oración “I understand you’re looking for the average price for the Mission neighborhood.” El evento final `response.output_item.done` contiene el texto completo.

### D2. Manejo de errores durante streaming

Mosaic AI propaga los errores de streaming en el último token mediante `databricks_output.error`:

```json
{
  "delta": "...",
  "databricks_output": {
    "trace": {},
    "error": {
      "error_code": "BAD_REQUEST",
      "message": "TimeoutException: Tool XYZ failed to execute."
    }
  }
}
```

Las aplicaciones cliente deben detectar y presentar estos errores de manera apropiada.

## E. Funciones avanzadas opcionales

Estos temas se presentan como referencia, pero superan el alcance principal del curso.

### E1. Entradas y salidas personalizadas

Algunas aplicaciones necesitan valores que no deben formar parte del historial normal:

- `custom_inputs`: parámetros adicionales como `client_type` o `session_id`.
- `custom_outputs`: datos de salida adicionales, por ejemplo enlaces a fuentes recuperadas.
- El código del agente accede a las entradas mediante `request.custom_inputs`.
- AI Playground y las review applications admiten configuración JSON de estos campos.

**Limitación:** las Agent Evaluation review apps no renderizan traces de agentes con campos de entrada adicionales.

### E2. Integración y esquema de retrievers

Los agentes suelen utilizar retrievers para acceder a datos no estructurados almacenados en índices de Vector Search. Databricks proporciona tracing y evaluación especializados.

Entre sus beneficios se encuentran:

- Enlaces automáticos a documentos fuente en AI Playground.
- Evaluación automática de groundedness y relevancia del contenido recuperado.
- Integración con herramientas de retriever de Databricks AI Bridge.

```python
import mlflow

mlflow.models.set_retriever_schema(
    name="mlflow_docs_vector_search",
    primary_key="document_id",
    text_column="chunk_text",
    doc_uri="doc_uri",
    other_columns=["title"],
)
```

### E3. Sistemas multiagente

Databricks admite sistemas donde varios agentes especializados colaboran para resolver problemas. La fuente menciona Genie y Agent Bricks como áreas relacionadas para profundizar.

### E4. Agentes con estado

Los stateful agents conservan memoria entre hilos de conversación y permiten establecer checkpoints. Este tema también queda fuera del alcance del curso.

## Conclusión

Mosaic AI Agent Framework proporciona los componentes necesarios para crear, evaluar, registrar, desplegar y monitorear agentes preparados para producción. Su interfaz principal es `ResponsesAgent`, mientras que los paquetes AI Bridge conectan frameworks populares con los servicios de Databricks.

La calidad en producción depende del ciclo completo: datos y herramientas gobernados, prototipado rápido, evaluación, feedback de expertos, mejora iterativa, serving escalable, tracing y monitoreo continuo.

## Conceptos clave para el simulador

- Mosaic AI Agent Framework cubre creación, despliegue, gobierno, evaluación, tracing y monitoreo.
- Las etapas principales son preparación de datos y herramientas, prototipado, evaluación, etiquetado, iteración, despliegue y monitoreo.
- `ResponsesAgent` es la interfaz recomendada para producción y reemplaza a `ChatAgent` en agentes nuevos.
- `predict` devuelve `ResponsesAgentResponse` para solicitudes sin streaming; los agentes con streaming pueden implementar `predict_stream`.
- Los agentes creados con otros frameworks pueden envolverse en lugar de reescribirse.
- Las versiones mínimas indicadas son `databricks-agents >= 1.2.0`, `mlflow >= 3.1.3` y Python 3.10 o posterior.
- El compute debe ser serverless o Databricks Runtime 13.3 LTS o posterior.
- Los paquetes AI Bridge incluyen `databricks-openai`, `databricks-langchain`, `databricks-dspy` y `databricks-ai-bridge`.
- LangChain, LangGraph, DSPy, patrones OpenAI y Python puro son enfoques compatibles.
- DSPy sustituye el ajuste manual de prompts por módulos, signatures, compilación y optimización programáticos.
- El streaming utiliza eventos repetidos `response.output_text.delta` y termina con `response.output_item.done`.
- Los errores de streaming aparecen en `databricks_output.error` dentro del último token.
- `custom_inputs` y `custom_outputs` transportan información fuera del historial del chat.
- `mlflow.models.set_retriever_schema()` describe los campos de un retriever para tracing y evaluación.
- Las inference tables de AI Gateway y MLflow Tracing proporcionan observabilidad en producción.

