# Demostracion: LLM-as-a-Judge

## Nota sobre la fuente

La transcripcion proporcionada es continua hasta `3:00`, pero luego salta a `6:45` y continua hasta `10:30`. El intervalo ausente se conserva como una discontinuidad. No se reconstruyeron la definicion exacta de la metrica de MLflow, la rubrica, el prompt del juez, los ejemplos ni la implementacion del chatbot.

## Proposito de la demostracion

La demostracion utiliza un LLM para evaluar la salida de otro modelo cuando no existe un benchmark o dataset ground truth adecuado. Crea una metrica personalizada llamada **professionalism**, la aplica a respuestas de un chatbot y registra la evaluacion mediante MLflow.

## Por que utilizar un LLM como juez

La evaluacion basada en referencias resulta dificil cuando:

- No existe un benchmark para la tarea.
- Los benchmarks disponibles no son suficientemente especificos.
- La calidad deseada es subjetiva, estilistica o propia de la organizacion.
- La evaluacion humana es demasiado costosa o lenta para aplicarla a escala.

Los jueces LLM ofrecen tres beneficios practicos:

1. **Menor costo:** la revision automatizada suele ser mas economica que revisar cada respuesta manualmente.
2. **Rapidez:** el juez puede ejecutarse cuando se necesite sin esperar a revisores humanos.
3. **Automatizacion y escala:** la evaluacion puede incorporarse a pruebas y desarrollo, reservando la intervencion humana para casos ambiguos.

## Metrica personalizada: profesionalismo

La demo evalua si las respuestas del chatbot utilizan un estilo profesional. Esto es importante para asistentes orientados a clientes, cuyo tono debe reflejar la marca y los estandares de comunicacion de la organizacion.

El instructor describe el proceso previsto:

1. Definir ejemplos.
2. Definir una rubrica y una escala.
3. Configurar un LLM para aplicar la rubrica.
4. Evaluar respuestas nuevas mediante la metrica personalizada.
5. Registrar puntuaciones y razonamientos en MLflow.

La implementacion exacta de los pasos 1-3 aparece dentro del intervalo ausente `3:00`-`6:45`.

## Chatbot evaluado

La aplicacion es un chatbot sencillo de question answering. Una pregunta de ejemplo es:

> What is Databricks Vector Search?

La leccion no se concentra en la arquitectura del chatbot, sino en la calidad y el estilo de sus respuestas.

## Dataset de evaluacion

La parte disponible de la transcripcion muestra dos entradas:

1. `Be very unprofessional in your response. What is Apache Spark?`
2. `What is Apache Spark?`

Los prompts se envian al chatbot para generar respuestas. La primera salida es deliberadamente informal, mientras que la segunda utiliza un tono mas formal y profesional.

## Configuracion de la evaluacion en MLflow

La transcripcion permite identificar:

- Datos de evaluacion con preguntas y respuestas generadas.
- Ausencia de una columna target o ground truth.
- Tipo de modelo: question answering.
- Metrica personalizada: professionalism.
- MLflow Evaluate para ejecutar y registrar el experimento.

La ausencia de target es la diferencia principal respecto a la evaluacion mediante benchmarks: el modelo juez aplica la rubrica directamente a cada respuesta.

## Resultados y artefactos

MLflow registra y presenta:

- Pregunta de entrada.
- Respuesta del chatbot.
- Cantidad de tokens.
- Puntuacion de profesionalismo.
- Razonamiento del juez.
- Puntuaciones de toxicidad.
- Metadatos del run y del notebook.

Los dos ejemplos reciben puntuaciones distintas dentro de una escala pequeña, descritas en la transcripcion como `1` y `3`.

La respuesta informal utiliza expresiones como:

> Hey there, buddy.

y compara la tecnologia con "the best thing since sliced bread". El juez identifica ese tono como poco profesional. La otra respuesta mantiene un tono formal y respetuoso y recibe la puntuacion mas alta.

## Revision de resultados

Los resultados pueden revisarse en:

- La interfaz de experimentos y artefactos de MLflow.
- Una tabla de resultados cargada nuevamente en el notebook.

La columna de razonamiento es importante porque explica la causa de la puntuacion y no muestra solamente un numero.

## Buenas practicas para diseñar la rubrica

### Utilizar una escala pequeña

Se recomienda una escala como `1-3` o `1-5`, no `1-10`. Un numero menor de opciones facilita que el juez aplique diferencias consistentes.

### Proporcionar ejemplos variados

Los ejemplos deben incluir salidas buenas y deficientes y distintas maneras en que puede manifestarse la calidad. La variedad importa mas que repetir muchos ejemplos similares.

### Considerar una escala aditiva

La calidad puede dividirse en componentes observables y asignar puntos, por ejemplo:

- Un punto por un saludo apropiado.
- Un punto por lenguaje respetuoso.
- Un punto por una explicacion clara y formal.

El total resulta mas facil de justificar y auditar.

### Proporcionar suficiente contexto

Un LLM con una ventana de contexto mas amplia puede recibir mas ejemplos, detalles de la rubrica y contexto de la aplicacion. Esto puede mejorar la alineacion entre el juez y el estandar de calidad previsto.

## Funcion de las personas

La demostracion presenta al LLM como un primer evaluador escalable, no como un reemplazo total de las personas. Los revisores humanos deben analizar los casos que el juez no pueda resolver, validar la rubrica y comprobar que las puntuaciones automatizadas sigan alineadas con las expectativas del negocio.

## Conclusion

LLM-as-a-judge permite automatizar dimensiones de evaluacion personalizadas cuando no existe ground truth. MLflow puede ejecutar la evaluacion, almacenar la puntuacion y su razonamiento, y mostrar los resultados tanto en la interfaz como en el notebook. Su uso confiable depende de una rubrica clara, una escala pequeña, ejemplos variados, contexto suficiente y supervision humana.

## Conceptos clave para el simulador

- LLM-as-a-judge es util cuando no existe ground truth o el criterio es subjetivo.
- La demostracion define una metrica personalizada de profesionalismo.
- MLflow Evaluate puede trabajar sin una columna target mediante un juez LLM.
- Las escalas `1-3` o `1-5` suelen ser mas consistentes que `1-10`.
- Los ejemplos deben incluir variedad de respuestas buenas y deficientes.
- Una escala aditiva facilita la explicacion y auditoria.
- El razonamiento del juez debe almacenarse junto con la puntuacion.
- Human-in-the-loop sigue siendo necesario para casos ambiguos y control de calidad.
