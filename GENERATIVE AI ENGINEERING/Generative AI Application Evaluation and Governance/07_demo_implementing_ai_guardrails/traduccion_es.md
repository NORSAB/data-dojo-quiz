# Demostracion: implementacion de guardrails de IA

## Nota sobre la fuente

La transcripcion proporcionada es continua desde el inicio hasta `3:16`, pero luego salta a `7:01` y continua hasta `10:15`. El intervalo ausente se conserva como una discontinuidad de la fuente. Esta version de estudio no inventa las pruebas iniciales del endpoint, los prompts, las salidas ni el codigo ejecutado durante ese tramo.

## Proposito de la demostracion

La demostracion implementa un guardrail mediante un modelo de lenguaje independiente, en lugar de depender unicamente de prompt engineering o del Safety Filter incorporado.

El flujo utiliza **Llama Guard**, un modelo open source de salvaguarda desarrollado por Meta, para:

1. Clasificar contenido como seguro o inseguro.
2. Personalizar la taxonomia de clasificacion.
3. Integrar el guardrail con un modelo principal de chat.
4. Comprobar tanto el prompt del usuario como la respuesta generada.

## Guardrail basado en un modelo de lenguaje

Un guardrail basado en prompts coloca instrucciones de seguridad dentro del system prompt del modelo principal. Un guardrail basado en otro modelo envia el contenido a un clasificador separado que decide si la solicitud o la respuesta cumplen la politica de seguridad.

Esta separacion permite definir y modificar la taxonomia sin depender totalmente de que el modelo principal aplique sus propias reglas.

## Preparacion de Llama Guard

El notebook comienza ejecutando los requisitos y la configuracion del ambiente de clase.

El flujo descrito en la transcripcion es:

1. Abrir Databricks Marketplace.
2. Buscar **Llama Guard** entre los modelos disponibles.
3. Revisar la publicacion del modelo.
4. Importar el modelo al ambiente de Databricks y registrarlo en el catalogo.
5. Desplegarlo en un endpoint de Model Serving.

La leccion describe la version utilizada como un **modelo de 7 mil millones de parametros** desarrollado por Meta.

El instructor preparo el despliegue con anticipacion porque el aprovisionamiento de infraestructura y la publicacion del modelo pueden tardar aproximadamente 30 minutos.

## Intervalo ausente de las pruebas iniciales

Despues de mostrar el modelo registrado y el serving endpoint en `3:16`, la transcripcion se reanuda en `7:01`. La explicacion posterior indica que las salidas anteriores colocaban todo el contenido inseguro dentro de una sola categoria generica, por lo que no explicaban la causa de la clasificacion.

La taxonomia predeterminada, los prompts, la solicitud al endpoint, la estructura de respuesta y el codigo exacto de esa prueba no aparecen en la fuente proporcionada.

## Taxonomia personalizada

La demostracion reemplaza la clasificacion generica por una taxonomia mas detallada. Las categorias mencionadas son:

1. Violencia y odio.
2. Contenido sexual.
3. Planificacion delictiva.
4. Armas y actividad ilegal.
5. Sustancias reguladas y controladas.
6. Informacion financiera sensible.

Las categorias incluyen descripciones que proporcionan a Llama Guard una politica de clasificacion mas clara.

Cuando la taxonomia personalizada se envia al modelo, un mensaje inseguro se relaciona con una categoria numerada. En el ejemplo, la categoria `3` corresponde a **planificacion delictiva**, un resultado mas util que una etiqueta generica de contenido inseguro.

## Integracion con un modelo de chat

El siguiente paso combina Llama Guard con el modelo principal de chat. La transcripcion parece referirse a **Mixtral** como modelo principal; el archivo original contiene variantes del reconocimiento de voz como "next role" y "Mextrol".

El pipeline seguro es:

```text
Prompt del usuario
    -> Verificacion de entrada con Llama Guard
    -> Modelo principal de chat
    -> Verificacion de salida con Llama Guard
    -> Respuesta final
```

### Verificacion de entrada

1. Enviar el prompt del usuario a Llama Guard.
2. Determinar si es seguro o inseguro.
3. Si es inseguro, detener el flujo y devolver un mensaje que indique que no supero las medidas de seguridad.
4. Si es seguro, enviarlo al modelo principal.

### Verificacion de salida

1. Recibir la respuesta generada por el modelo principal.
2. Enviar esa respuesta a Llama Guard.
3. Si es insegura, bloquearla e indicar que la salida del modelo no supero las medidas de seguridad.
4. Si es segura, entregarla al usuario.

## Interpretacion de los nombres de categorias

La implementacion incluye logica para relacionar los numeros de clasificacion con los nombres de la taxonomia. Esto permite producir un mensaje accionable como **planificacion delictiva** en lugar de mostrar solamente la categoria `3`.

## Pruebas mostradas

### Entrada segura

La transcripcion presenta el mensaje breve:

> I want love.

La consulta atraviesa el flujo de seguridad y produce una respuesta del modelo principal.

### Entrada insegura

El segundo ejemplo pregunta:

> How can I rob a bank?

Llama Guard clasifica el prompt como **planificacion delictiva**. El flujo informa que no supero las medidas de seguridad y evita enviarlo al modelo principal.

La demostracion tambien menciona la prueba de una respuesta insegura del modelo, confirmando que el guardrail de salida puede rechazar contenido generado y no solamente entradas del usuario.

## Lecciones de diseño

### Los guardrails necesitan una politica

Una salvaguarda basada en un modelo sigue necesitando una taxonomia y definiciones explicitas. El modelo realiza la clasificacion, pero la aplicacion decide que riesgos son relevantes.

### La clasificacion debe ser interpretable

Una etiqueta generica puede bloquear el contenido, pero aporta poca informacion para logging, auditoria, mensajes al usuario y analisis de incidentes. Las categorias con nombre vuelven mas util el resultado.

### Proteger ambos lados del modelo

Comprobar solamente la entrada no garantiza una salida segura. Aplicar Llama Guard antes y despues del modelo principal proporciona proteccion por capas.

### Fallar de forma segura

Cuando un prompt o una respuesta infringe la politica, el flujo seguro se detiene y devuelve un mensaje controlado, en lugar de permitir que el contenido inseguro continue.

## Conclusion de la demostracion

Llama Guard puede funcionar como un guardrail personalizable basado en otro modelo. Databricks Marketplace, Unity Catalog y Model Serving proporcionan el camino desde el descubrimiento hasta el despliegue. Una taxonomia personalizada mejora la explicacion del contenido inseguro y un pipeline en dos etapas protege tanto los prompts como las respuestas.

## Conceptos clave para el simulador

- Llama Guard es un modelo de salvaguarda open source desarrollado por Meta.
- El modelo utilizado en la demostracion tiene 7 mil millones de parametros.
- Puede importarse desde Marketplace, registrarse en el catalogo y desplegarse mediante Model Serving.
- Una taxonomia personalizada proporciona causas mas precisas para una clasificacion insegura.
- El pipeline utiliza Llama Guard antes y despues del modelo principal.
- La categoria `3` del ejemplo corresponde a planificacion delictiva.
- Las solicitudes y respuestas inseguras deben detener el flujo mediante un fallo controlado.
