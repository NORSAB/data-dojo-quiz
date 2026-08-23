# Demostracion: evaluacion mediante benchmarks

## Nota sobre la fuente

La transcripcion proporcionada es continua hasta `4:31`, pero luego salta a `7:53` y continua hasta `11:02`. El intervalo ausente se conserva como una discontinuidad. No se reconstruyeron el nombre del benchmark, el codigo de carga, la llamada exacta a `mlflow.evaluate` ni la primera ejecucion.

## Proposito de la demostracion

La demostracion compara dos LLM en una tarea de resumen mediante un benchmark, MLflow y metricas ROUGE. Presenta un flujo champion-challenger en el que un modelo actual y un posible reemplazo se evaluan contra los mismos datos de referencia.

## Objetivos

La demostracion busca explicar como:

1. Obtener un benchmark para evaluar un LLM en una tarea especifica.
2. Evaluar resumenes mediante metricas propias de esa tarea.
3. Utilizar MLflow para calcular puntuaciones ROUGE.
4. Comparar dos LLM contra el mismo benchmark.
5. Examinar tanto metricas agregadas como generaciones individuales.

## Modelos comparados

La transcripcion contiene variantes producidas por el reconocimiento de voz, pero los modelos identificables son:

- **Llama 2 70B Chat** como modelo existente o baseline.
- **DBRX** como modelo challenger.

El notebook importa Databricks Model Serving y el workspace client, y define una funcion de resumen para cada endpoint. Las funciones utilizan prompts equivalentes para que la comparacion cambie el modelo, no las instrucciones de la tarea.

## Prueba inicial de los endpoints

Antes de ejecutar el benchmark, el instructor envia la frase:

> This is the best frozen pizza I've ever had.

Ambos endpoints responden, lo que confirma que estan disponibles antes de iniciar la evaluacion.

## Diseño del benchmark

La demostracion utiliza un dataset generico de resumen de noticias que contiene:

- Articulos periodisticos como entradas.
- Resumenes escritos por personas como ground truth.

La fuente menciona una pagina del dataset y su paper, pero sus nombres aparecen dentro del intervalo ausente y no estan disponibles en la transcripcion proporcionada.

La muestra utilizada contiene **50 filas**. Cada modelo genera un resumen para los mismos registros y MLflow compara las predicciones con los resumenes de referencia.

## Intervalo ausente de la primera evaluacion

La fuente salta de la descripcion del benchmark en `4:31` a los resultados del primer modelo en `7:53`. Por ello, no se dispone de:

- Identificador ni instruccion de carga del dataset.
- Pasos de preparacion de datos.
- Configuracion exacta del evaluador de MLflow.
- Codigo que genera las primeras 50 predicciones.
- Conjunto completo de metricas de la ejecucion inicial.

## Interpretacion de ROUGE

ROUGE compara el resumen generado con el resumen de referencia. La escala normalizada se interpreta como:

- `0`: ausencia de coincidencia.
- `1`: coincidencia perfecta.

El instructor comenta que valores alrededor de `0.3` o `0.4` pueden indicar una similitud considerable en este ejemplo, pero recomienda revisar tambien el texto y no depender solamente de la puntuacion.

## Resultados del primer modelo

La primera ejecucion evalua Llama 2 70B Chat. MLflow permite consultar:

- El articulo de entrada.
- El resumen generado.
- El resumen ground truth.
- Las puntuaciones ROUGE y los artefactos del run.

Uno de los ejemplos tiene una puntuacion aproximada de `0.4` y produce un resumen razonable relacionado con Baltimore y la necesidad de cambio.

## Evaluacion del challenger

El mismo flujo se repite con DBRX:

1. Cargar la funcion del challenger.
2. Generar predicciones para las mismas 50 filas.
3. Aplicar el evaluador de text summarization.
4. Calcular las mismas metricas ROUGE.
5. Guardar los resultados como otro run de MLflow.

La transcripcion indica que el challenger obtiene valores ligeramente superiores en algunas metricas.

## Comparacion de runs en MLflow

La interfaz del experimento permite seleccionar los dos runs y comparar:

- ROUGE-1.
- ROUGE-2.
- ROUGE-Lsum.
- Tablas de resultados y artefactos.

La grafica facilita la comparacion entre baseline y challenger. La preview de evaluaciones tambien permite revisar visualmente las entradas, los resumenes de referencia y las generaciones de ambos modelos.

## Importancia de la inspeccion cualitativa

Las metricas agregadas ayudan a ordenar modelos, pero el instructor insiste en abrir los resumenes y compararlos directamente con el gold standard. Una mejora numerica no demuestra por si sola que la respuesta sea factualmente correcta, coherente, concisa o util para la aplicacion.

## Flujo champion-challenger

```text
Benchmark y prompt compartidos
        |-> Modelo baseline -> predicciones -> ROUGE -> run de MLflow
        |-> Modelo challenger -> predicciones -> ROUGE -> run de MLflow
                                                   |
                                     Comparar metricas y salidas
```

Para que la comparacion sea justa deben mantenerse constantes el dataset, los prompts, el preprocesamiento, el evaluador y la configuracion de metricas.

## Conclusion

La evaluacion mediante benchmarks es especialmente util cuando existe ground truth. MLflow permite evaluar varios modelos sobre los mismos registros, comparar metricas ROUGE, examinar artefactos y revisar visualmente las salidas. Cuando no existe ground truth, el curso continua con LLM-as-a-judge.

## Conceptos clave para el simulador

- Un benchmark proporciona entradas y referencias comunes para comparar modelos.
- Champion-challenger requiere mantener constante el resto del experimento.
- La demostracion compara Llama 2 70B Chat con DBRX.
- MLflow calcula metricas de resumen y conserva cada evaluacion como un run.
- ROUGE-1, ROUGE-2 y ROUGE-Lsum permiten comparar la superposicion con la referencia.
- Las metricas deben complementarse con inspeccion cualitativa de las generaciones.
- LLM-as-a-judge se utiliza cuando no existe ground truth adecuado.
