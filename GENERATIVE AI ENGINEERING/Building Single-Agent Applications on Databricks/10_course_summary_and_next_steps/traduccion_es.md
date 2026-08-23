# Resumen del curso y próximos pasos

## Finalización del curso

¡Felicitaciones!

Has completado **Building Single-Agent Applications on Databricks**.

El curso recorre el proceso completo: desde los fundamentos de los agentes y las herramientas gobernadas hasta la creación, tracing, registro, despliegue y mejora iterativa de la calidad.

## Resultados de aprendizaje

### 1. Fundamentos y arquitectura de agentes

Ahora debes poder explicar cómo un agente inteligente orientado a tareas combina:

- Un modelo que realiza el razonamiento.
- Herramientas que recuperan información o ejecutan acciones.
- Memoria y contexto.
- Planificación y orquestación.
- Un agent framework que coordina el workflow.

### 2. Herramientas gobernadas mediante Unity Catalog

Debes comprender cómo las funciones SQL y Python se convierten en herramientas gobernadas, incluido el proceso para:

- Crearlas y registrarlas.
- Documentarlas mediante metadata de la función y sus parámetros.
- Permitir que un LLM las descubra y seleccione.
- Protegerlas mediante permisos de Unity Catalog.
- Inspeccionarlas y validarlas desde la interfaz de Databricks.

### 3. Pruebas end-to-end de herramientas

Debes poder probar las herramientas de forma independiente y como parte de un workflow de agente. AI Playground permite realizar comprobaciones funcionales y de comportamiento antes de trasladar la implementación al código del agente.

### 4. Creación de agentes de producción

Debes reconocer los enfoques de creación disponibles en Mosaic AI Agent Framework, incluidos:

- `ResponsesAgent`.
- Agentes basados en LangChain.
- Agent Bricks.
- Otros frameworks y patrones de despliegue compatibles.

### 5. Integración de herramientas y contexto de ejecución

Debes poder conectar funciones de Unity Catalog con un agent framework y proporcionar al modelo:

- Las herramientas correctas.
- Metadata descriptiva.
- Contexto relevante.
- Permisos apropiados.

Estos elementos permiten que el agente atienda casos de uso reales de manera segura y eficaz.

### 6. Observabilidad y debugging con MLflow

Debes comprender cómo MLflow permite analizar y depurar agentes mediante:

- Experiment tracking.
- Tracing automático.
- Tracing personalizado.
- Tags y metadata.
- Spans padre e hijos y grafos de ejecución.
- Análisis de latencia, tokens y costos.
- Inspección de decisiones del modelo y las herramientas.

### 7. Gobierno y reproducibilidad

Debes poder aplicar prácticas empresariales como:

- Registrar agentes con MLflow y Unity Catalog.
- Administrar versiones inmutables.
- Capturar dependencias.
- Registrar lineage y signatures.
- Controlar el acceso mediante Unity Catalog.
- Utilizar aliases y tags.
- Desplegar agentes registrados mediante infraestructura administrada.

### 8. Optimización continua

Debes comprender cómo diseñar y mejorar sistemas de uno o varios agentes mediante:

- Arquitecturas de supervisor.
- Evaluación automática y humana.
- Ciclos de feedback.
- LLM judges y benchmarks.
- Feedback de expertos expresado en lenguaje natural.
- Equilibrios entre calidad, latencia, seguridad y costo.

## Próximo paso: evaluar el curso

Databricks invita a completar una breve [encuesta de un minuto](https://databricks.sjc1.qualtrics.com/jfe/form/SV_6zMiXNxAfa7IQjY?course_id=2716&course_title=Building%20Single-Agent%20Applications%20on%20Databricks).

El feedback se utiliza para mejorar el contenido y la presentación de futuros cursos.

## Conceptos clave para el simulador

- Los modelos aportan razonamiento, las herramientas proporcionan datos y acciones y los frameworks coordinan el comportamiento.
- Unity Catalog gobierna las funciones SQL y Python empleadas como herramientas.
- La documentación de funciones y parámetros ayuda al LLM a seleccionar e invocar correctamente las herramientas.
- AI Playground permite prototipado no-code y validación de herramientas.
- Mosaic AI Agent Framework ofrece patrones de creación y despliegue para producción.
- `ResponsesAgent`, LangChain y Agent Bricks son enfoques centrales del curso.
- MLflow proporciona experiment tracking, tracing automático y personalizado, tagging, evaluación, registro y monitoreo.
- Los traces y spans presentan operaciones intermedias del modelo, herramientas, retrievers y validaciones.
- Unity Catalog y MLflow permiten versionado, captura de dependencias, lineage, permisos, aliases y despliegues reproducibles.
- Agent Bricks utiliza evaluación automática y feedback experto para mejorar la calidad considerando el costo.
- Las arquitecturas de agente individual y multiagente pueden utilizar evaluación y feedback para optimización continua.

