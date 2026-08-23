# Demostración: tagging y agentes reproducibles

## Cobertura de la fuente

La transcripción proporcionada contiene dos segmentos continuos:

- **Inicio:** 0:00–2:38.
- **Final:** 16:53–20:40.

Existe un salto desde **2:38 hasta 16:53**, equivalente a aproximadamente 14 minutos y 15 segundos. El tramo omitido parece contener la mayor parte de la implementación de tracing y tagging, funciones personalizadas instrumentadas, logging del agente, declaración de dependencias y recursos y la primera validación del agente registrado.

Esta versión documenta únicamente el material capturado. No reconstruye comandos, tags, funciones, parámetros de logging, signatures, declaraciones de recursos ni código de despliegue ausente en la fuente.

## Descripción de la demostración

La demostración presenta organización de traces, estrategias de tagging, logging reproducible del agente, registro en MLflow Model Registry dentro de Unity Catalog, despliegue e inferencia.

Sus objetivos declarados son:

- Organizar los traces del agente.
- Aplicar estrategias de tagging.
- Crear funciones personalizadas con tracing.
- Registrar el agente con MLflow.
- Registrar el agente empaquetado en Unity Catalog.
- Desplegar el agente.
- Ejecutar inferencia con el agente registrado.

La transcripción recibida solo contiene la introducción del ambiente y el segmento final de registro e inferencia.

## Preparación del ambiente

### Compute

El notebook utiliza **Serverless environment version 4**. Serverless es la opción predeterminada, aunque la instructora la selecciona y verifica explícitamente.

### Recursos del laboratorio

El setup prepara:

- El dataset utilizado por las herramientas.
- Funciones de Unity Catalog.
- Las ubicaciones de catálogo y schema.

La demostración utiliza:

- Catálogo: **DBX Academy**.
- Schema: el **lab user schema** individual.
- Dataset: anuncios de Airbnb en San Francisco.

La tabla contiene campos como:

- Identificador y nombre del anuncio.
- Información de resumen.
- Datos del anfitrión.
- Vecindario.
- Ubicación.
- Baños y dormitorios.

La transcripción se interrumpe mientras se exploran estos campos.

## Segmento de implementación ausente

El salto de 2:38–16:53 omite la implementación central de varios objetivos. La fuente no muestra:

- El resto de la exploración del dataset.
- Las definiciones de las funciones utilizadas por el agente.
- El setup exacto de tracing o autologging.
- Las funciones personalizadas instrumentadas.
- Los trace tags y valores utilizados.
- La clase o implementación del agente.
- La configuración completa de `mlflow.pyfunc.log_model()`.
- La inferencia o definición de la model signature.
- La captura de dependencias y declaración de recursos.
- La primera carga y validación de la Python function registrada.
- Los pasos de despliegue, aunque este aparece entre los objetivos.

La transcripción se reanuda después de comprobar que el agente funciona como Python function.

## Registro del agente en Unity Catalog

En 16:53, el agente registrado ya funciona como Python function, pero todavía no se encuentra en Unity Catalog Model Registry.

El proceso descrito es:

1. Configurar MLflow para utilizar el Model Registry de Databricks Unity Catalog.
2. Proporcionar catálogo, schema y nombre del modelo registrado.
3. Utilizar el model URI creado durante el logging anterior de MLflow.
4. Registrar el modelo.

El model URI apunta al agente empaquetado y a sus dependencias capturadas. Los comandos exactos no aparecen en el segmento disponible.

## Versiones del modelo

Registrar otro modelo con el mismo catálogo, schema y nombre crea una nueva versión.

La demostración presenta las versiones 1 y 2 y destaca que cada registro adicional crea una versión nueva en lugar de sobrescribir el snapshot anterior.

El modelo registrado muestra información como:

- Ubicación de almacenamiento.
- Permisos.

Cada versión posee además su propia información detallada.

## Metadata y lineage de las versiones

La página Overview de la versión incluye:

- Source runs con enlaces al run de MLflow.
- Model ID.
- Activity log.
- Input and output signature.
- Lineage.

El lineage graph registra recursos upstream como:

- La tabla de origen.
- Funciones de Unity Catalog.
- Notebooks.

La sección Artifacts presenta los artefactos del modelo empaquetado. La transcripción indica además que para ver los traces desde esa ubicación se necesita un SQL warehouse activo; durante la demostración no hay compute disponible.

## Carga del agente desde Unity Catalog

Después del registro, el agente puede cargarse desde Unity Catalog en lugar de hacerlo directamente mediante el URI del run de MLflow.

La instructora carga la Python function registrada a través del Model Registry configurado y ejecuta su método de predicción. El resultado incluye el precio promedio de los anuncios.

La transcripción no conserva el formato exacto del model URI ni el comando de carga.

## Aliases para seleccionar versiones

Los aliases permiten que las aplicaciones utilicen una etiqueta lógica de despliegue en lugar de codificar un número de versión.

La demostración describe un alias `prod` y un segundo alias llamado `Jade`.

Reglas mostradas:

- Un alias no puede apuntar a dos versiones simultáneamente.
- Una versión puede tener múltiples aliases.
- Un alias puede reasignarse cuando otra versión se convierte en la preferida.
- Las aplicaciones pueden solicitar el modelo mediante un alias, como la versión etiquetada actualmente como `prod`.

> **Nota de transcripción:** una frase aparece como “Broad model”, pero la oración posterior se refiere explícitamente a la versión `prod`. Esta versión considera `prod` como alias de despliegue y conserva `Jade` como segundo alias.

## Tags de MLflow y Unity Catalog

La demostración diferencia dos niveles de tagging:

- **MLflow tags:** asociados con runs, traces y otros artefactos de tracking.
- **Unity Catalog tags:** asociados con activos gobernados, como modelos y versiones registrados.

Unity Catalog también admite **governed tags**, que permiten una clasificación estandarizada y controlada de sus activos.

Los trace tags exactos usados anteriormente en el notebook no aparecen debido al segmento ausente.

## Relación con la reproducibilidad

El segmento disponible demuestra varios mecanismos:

- El agente se empaqueta y referencia mediante un MLflow model URI.
- Las dependencias se capturan con el modelo registrado.
- El registro crea versiones distintas bajo un nombre gobernado.
- Los source runs vinculan cada versión con la ejecución de MLflow que la generó.
- Las signatures documentan las entradas y salidas esperadas.
- El lineage registra tablas, funciones y notebooks upstream.
- Los aliases separan nombres de despliegue como `prod` de los números de versión.
- Los permisos y governed tags permiten uso empresarial controlado.

## Resumen de la demostración

La transcripción disponible cubre:

- Serverless environment version 4.
- Catálogo DBX Academy y lab user schema individual.
- Tabla fuente de Airbnb San Francisco.
- Selección de Unity Catalog MLflow Model Registry.
- Registro de un agente Python function mediante model URI.
- Creación automática de versiones.
- Metadata del modelo y sus versiones.
- Lineage entre tablas, funciones y notebooks.
- Carga del agente desde Unity Catalog y ejecución de predicción.
- Gestión de versiones mediante aliases.
- MLflow tags, Unity Catalog tags y governed tags.

La implementación de tracing, custom tagging, logging y validación inicial sigue ausente debido al salto de 2:38–16:53.

## Conceptos clave para el simulador

- El notebook utiliza Serverless environment version 4.
- Los recursos se encuentran en DBX Academy y el lab user schema.
- El dataset contiene anuncios de Airbnb en San Francisco.
- Un agente registrado debe inscribirse para aparecer en Unity Catalog Model Registry.
- El registro utiliza el model URI creado durante el logging con MLflow.
- El model URI representa el agente empaquetado y sus dependencias capturadas.
- Registrar nuevamente el mismo catálogo, schema y nombre crea una versión nueva.
- Las versiones conservan enlaces a sus source runs.
- Los detalles incluyen model ID, activity log, input/output signature, lineage y artifacts.
- El lineage puede incluir tablas, funciones de Unity Catalog y notebooks.
- Se necesita un SQL warehouse activo para ver traces desde la ubicación de artifacts mostrada.
- El agente registrado puede cargarse desde Unity Catalog y utilizarse para predicción.
- Un alias solo puede apuntar a una versión a la vez.
- Una versión puede tener varios aliases.
- Reasignar `prod` permite cambiar la versión desplegada sin modificar la referencia lógica de la aplicación.
- Los MLflow tags clasifican artefactos de tracking; los Unity Catalog tags clasifican activos gobernados.
- Los governed tags estandarizan y controlan el uso de tags en Unity Catalog.

