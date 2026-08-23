# Demostracion: exploracion del licenciamiento de datasets

## Nota sobre la fuente

La transcripcion proporcionada es continua desde el inicio hasta `3:24`, pero luego salta a `6:53` y continua hasta `9:21`. El intervalo ausente se conserva como una discontinuidad de la fuente. Esta version de estudio no inventa el primer dataset ni las acciones mostradas durante ese tramo.

## Esquema de la demostracion

![Esquema de la demostracion sobre licenciamiento de datasets](../assets/images/demo_outline_exploring_dataset_licensing.png)

La demostracion cubre cuatro actividades:

1. Explorar Databricks Marketplace.
2. Obtener acceso a un dataset.
3. Revisar la informacion de su licencia.
4. Ingerir los datos en un ambiente de Databricks.

Se trata principalmente de una demostracion de gobierno y seleccion de datos, no de un ejercicio de programacion.

## Por que son importantes los datasets externos

Los datasets de alta calidad pueden ser necesarios para:

- Evaluar el rendimiento de un modelo.
- Entrenar un modelo nuevo.
- Hacer fine-tuning de un modelo existente.
- Incorporar informacion de referencia a una aplicacion de Retrieval-Augmented Generation (RAG).

Los buenos datos pueden mejorar el rendimiento del modelo y de la aplicacion. Sin embargo, su uso empresarial tambien requiere una revision cuidadosa del licenciamiento, el copyright y otras restricciones legales.

## Objetivos de aprendizaje

Al finalizar la demostracion, el estudiante debe poder:

- Reconocer posibles problemas legales relacionados con los datasets utilizados por modelos de IA.
- Encontrar datasets disponibles mediante Databricks Marketplace.
- Examinar la licencia y los terminos de servicio antes de utilizar un dataset.
- Comprender el flujo basico para importar datos de Marketplace a Databricks.
- Reconocer cuando debe intervenir el equipo legal para revisar el dataset y su uso previsto.

## Databricks Marketplace

Databricks Marketplace ofrece activos de datos publicados por proveedores externos. En lugar de localizar o recopilar cada dataset de manera independiente, el usuario puede descubrir una publicacion existente y obtener acceso a ella dentro de Databricks.

Esto puede acelerar la adquisicion de datos para casos como:

- Agregar conocimiento externo a una aplicacion RAG.
- Entrenar o hacer fine-tuning de un modelo.
- Construir un dataset de evaluacion.

Que un dataset este disponible en Marketplace no significa automaticamente que sea legalmente apropiado para cualquier aplicacion. La licencia debe revisarse en funcion del uso previsto.

## Comparacion prevista de dos datasets

El instructor indica que la demostracion analizara dos datasets:

- Uno cuyas condiciones serian aceptables para la aplicacion prevista.
- Otro cuyas condiciones no permitirian ese uso.

La revision detallada del primer dataset ocurre dentro del intervalo ausente `3:24`-`6:53` y no puede recuperarse de la transcripcion proporcionada. Despues del salto, el instructor vuelve a mencionar los enlaces del producto y la licencia que ya habia revisado.

## Ejemplo visible: Rearc Personal Income con datos de FRED

El segundo ejemplo visible es un dataset **Rearc Personal Income** cuya fuente es **FRED**. La publicacion indica que los datos se actualizan mensualmente.

El flujo mostrado consiste en:

1. Abrir la publicacion del dataset en Databricks Marketplace.
2. Revisar la fuente y la informacion de la publicacion.
3. Seleccionar la opcion de acceso instantaneo.
4. Elegir un nombre para el activo importado.
5. Revisar y aceptar los terminos y condiciones aplicables.
6. Importar el dataset en Databricks.

Antes de aceptar las condiciones, el usuario debe abrir la licencia o los terminos de servicio y confirmar con el equipo legal que sean compatibles con el uso previsto.

## Localizacion de un dataset ya importado

En la demostracion, otro integrante del workspace ya habia importado el dataset. En lugar de crear un duplicado, el instructor navega al catalogo y localiza el activo existente.

El dataset parece contener dos columnas relacionadas con:

- El ingreso personal.
- El tiempo.

El instructor no puede visualizar las filas de ejemplo debido a sus permisos. Esto recuerda que el acceso a Marketplace, el registro del activo en el catalogo y el permiso para consultar los datos subyacentes son aspectos diferentes.

## Lecciones de gobierno

### Tener acceso no autoriza todos los usos

Un dataset puede ser facil de obtener desde el punto de vista tecnico y, aun asi, imponer restricciones sobre uso comercial, redistribucion, entrenamiento, fine-tuning o salidas generadas.

### Revisar los terminos antes de la ingesta

La licencia y los terminos de servicio deben revisarse antes de aceptar las condiciones de Marketplace o incorporar el dataset a un flujo de IA.

### Relacionar la licencia con el caso de uso

El mismo dataset puede estar permitido para un proposito y prohibido para otro. La revision debe considerar si los datos se utilizaran en RAG, evaluacion, entrenamiento, fine-tuning o un producto comercial.

### Consultar al equipo legal

El equipo tecnico no debe tomar por si solo la decision legal definitiva. Los especialistas legales deben evaluar si la licencia, el copyright y el despliegue previsto son compatibles.

## Conclusion de la demostracion

Databricks Marketplace simplifica el descubrimiento y la importacion de datasets de terceros, pero esa comodidad no elimina la responsabilidad de gobierno. Antes de utilizar datos de Marketplace en una aplicacion de IA generativa, el equipo debe comprender la licencia correspondiente y confirmar que el uso previsto esta legalmente permitido.

## Conceptos clave para el simulador

- Marketplace facilita el acceso tecnico, pero no concede automaticamente derechos para cualquier uso.
- Los datasets pueden utilizarse para RAG, evaluacion, entrenamiento o fine-tuning.
- La licencia debe analizarse antes de aceptar condiciones e ingerir los datos.
- El uso comercial y el proposito de la aplicacion pueden cambiar la compatibilidad legal.
- El catalogo y los permisos de lectura son controles diferentes del acceso a Marketplace.
- La decision final sobre compatibilidad legal debe involucrar al equipo juridico.
