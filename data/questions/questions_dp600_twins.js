/**
 * DP-600: gemelas EN->ES de las 198 preguntas en ingles y ES->EN de las 80 en espanol.
 * Claude (Opus 5.5) | 2026-10-08 | Generado con /home/claude/tr/build_q.js a partir de traducciones revisadas.
 * Cada pregunta lleva twinOf con el id original, para que el selector EN/ES encuentre su pareja.
 */
(function(){
  var twins = [
  {
    "id": "1-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que Contoso pueda usar control de versiones para cumplir con los requisitos de análisis de datos y los requisitos generales. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Almacenar los modelos semánticos y los informes en el almacenamiento de Data Lake Gen2."
      },
      {
        "id": "b",
        "text": "Modificar la configuración de las áreas de trabajo de Research para usar un repositorio de GitHub."
      },
      {
        "id": "c",
        "text": "Modificar la configuración de las áreas de trabajo de la división Research para usar un repositorio de Azure Repos."
      },
      {
        "id": "d",
        "text": "Almacenar todos los modelos semánticos e informes en Microsoft OneDrive."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Azure Repos es un repositorio basado en Git dentro de Azure DevOps que proporciona control de versiones, seguimiento y colaboración para código, informes y modelos semánticos. Es la opción más adecuada para controlar las versiones de artefactos de Power BI como conjuntos de datos, informes y modelos semánticos en un área de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 1
  },
  {
    "id": "2-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas recomendar una solución para agrupar las áreas de trabajo de la división Research. ¿Qué debes incluir en la recomendación? (Selecciona el método de agrupación y la herramienta)",
    "options": [
      {
        "id": "a",
        "text": "Método de agrupación: Capacidad"
      },
      {
        "id": "b",
        "text": "Método de agrupación: Dominio"
      },
      {
        "id": "c",
        "text": "Método de agrupación: Inquilino"
      },
      {
        "id": "d",
        "text": "Herramienta: OneLake data hub"
      },
      {
        "id": "e",
        "text": "Herramienta: el Fabric Admin portal"
      },
      {
        "id": "f",
        "text": "Herramienta: el Microsoft Entra admin center"
      }
    ],
    "correctIds": [
      "b",
      "e"
    ],
    "explanation": "Los dominios te permiten agrupar áreas de trabajo según su propósito o contexto de negocio. El Fabric Admin Portal es la interfaz principal de administración de Microsoft Fabric.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 2
  },
  {
    "id": "3-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas actualizar la tabla Orders del departamento Online Sales. La solución debe cumplir con los requisitos del modelo semántico. ¿Qué debes incluir en la solución?",
    "options": [
      {
        "id": "a",
        "text": "una canalización de Azure Data Factory que ejecute una actividad Stored procedure para obtener el valor máximo de la columna OrderID en el lakehouse de destino"
      },
      {
        "id": "b",
        "text": "una canalización de Azure Data Factory que ejecute una actividad Stored procedure para obtener el valor mínimo de la columna OrderID en el lakehouse de destino"
      },
      {
        "id": "c",
        "text": "una canalización de Azure Data Factory que ejecute un flujo de datos para obtener el valor mínimo de la columna OrderID en el lakehouse de destino"
      },
      {
        "id": "d",
        "text": "una canalización de Azure Data Factory que ejecute un flujo de datos para obtener el valor máximo de la columna OrderID en el lakehouse de destino"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Se puede usar un flujo de datos para obtener el número máximo de OrderID (almacenado en la tabla de destino; OrderID es un número secuencial). Este número puede usarse para establecer a partir de qué fila se deben agregar datos a la tabla de destino (implementando una carga incremental).",
    "domain": "Prepare and serve data",
    "twinOf": 3
  },
  {
    "id": "4-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sintaxis debes usar en un notebook para acceder a los datos de la división Research para Productline1?",
    "options": [
      {
        "id": "a",
        "text": "spark.read.format(\"delta\").load(\"Tables/productline1/ResearchProduct\")"
      },
      {
        "id": "b",
        "text": "spark.sql(\"SELECT * FROM Lakehouse1.ResearchProduct\")"
      },
      {
        "id": "c",
        "text": "external_table('Tables/ResearchProduct')"
      },
      {
        "id": "d",
        "text": "external_table(ResearchProduct)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Una vez creada, la línea 'spark.sql(\"SELECT * FROM Lakehouse1.ResearchProduct\")' puede usarse para acceder a los datos correctamente. La sintaxis de C y D es correcta para bases de datos KQL, pero incorrecta aquí.",
    "domain": "Prepare and serve data",
    "twinOf": 4
  },
  {
    "id": "5-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas asignar permisos para el almacén de datos en el área de trabajo AnalyticsPOC. ¿Qué permisos adicionales debes asignar al compartir el almacén de datos con DataEngineers, DataAnalysts y DataScientists?",
    "options": [
      {
        "id": "a",
        "text": "DataEngineers: Read All Apache Spark"
      },
      {
        "id": "b",
        "text": "DataAnalysts: Build Reports on the default dataset"
      },
      {
        "id": "c",
        "text": "DataScientists: Read All SQL analytics endpoint data"
      },
      {
        "id": "d",
        "text": "DataEngineers: Build Reports on the default dataset"
      },
      {
        "id": "e",
        "text": "DataAnalysts: Read All Apache Spark"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Data Engineers: Read all Apache Spark, porque necesitan poder trabajar con Spark para la curación de datos. Data Analysts: Build Reports on the default dataset, porque son creadores de informes. Data Scientists: Read All SQL analytics Endpoints data, porque aprovechan los datos curados (por los ingenieros) para hacer análisis predictivo.",
    "domain": "Prepare and serve data",
    "twinOf": 5
  },
  {
    "id": "6-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas crear una medida DAX para calcular la puntuación promedio de satisfacción general. ¿Cómo debes completar el cálculo de las variables 'Period' y 'Result' del código DAX?",
    "options": [
      {
        "id": "a",
        "text": "Period usa: NumberOfMonths"
      },
      {
        "id": "b",
        "text": "Period usa: 1"
      },
      {
        "id": "c",
        "text": "Result AVERAGEX usa: Period"
      },
      {
        "id": "d",
        "text": "Result AVERAGEX usa: NumberOfMonths"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Period: la variable se define para seleccionar un rango de fechas de 1 año (NumberOfMonths). Puede pasarse directamente en el contexto de filtro de la fórmula Calculate.",
    "domain": "Implement and manage semantic models",
    "twinOf": 6
  },
  {
    "id": "7-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas resolver el problema con la clasificación de grupos de precios. ¿Cómo debes completar la instrucción T-SQL?",
    "options": [
      {
        "id": "a",
        "text": "CREATE VIEW"
      },
      {
        "id": "b",
        "text": "CREATE TABLE"
      },
      {
        "id": "c",
        "text": "CASE WHEN..."
      },
      {
        "id": "d",
        "text": "IIF..."
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "VIEW: a partir de una tabla existente. CASE: sintaxis correcta antes de los WHEN.",
    "domain": "Prepare and serve data",
    "twinOf": 7
  },
  {
    "id": "8-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué debes recomendar usar para ingerir los datos de clientes en el almacén de datos del área de trabajo AnalyticsPOC?",
    "options": [
      {
        "id": "a",
        "text": "un procedimiento almacenado"
      },
      {
        "id": "b",
        "text": "una canalización que contenga una actividad KQL"
      },
      {
        "id": "c",
        "text": "un notebook de Spark"
      },
      {
        "id": "d",
        "text": "un flujo de datos"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Un flujo de datos. Aunque el texto dice 'Data will be loaded without transformation...', en general, los flujos de datos se usan cuando hay transformaciones de datos involucradas después de la ingesta.",
    "domain": "Prepare and serve data",
    "twinOf": 8
  },
  {
    "id": "9-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de almacén de datos debes recomendar en el área de trabajo AnalyticsPOC?",
    "options": [
      {
        "id": "a",
        "text": "un data lake"
      },
      {
        "id": "b",
        "text": "un warehouse"
      },
      {
        "id": "c",
        "text": "un lakehouse"
      },
      {
        "id": "d",
        "text": "un metastore de Hive externo"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Un lakehouse. El almacén de datos debe manejar datos semiestructurados y no estructurados; por lo tanto, un Lakehouse debería ser la solución óptima, ya que admite acceso de lectura con T-SQL y Python.",
    "domain": "Prepare and serve data",
    "twinOf": 9
  },
  {
    "id": "10-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas escribir una consulta T-SQL que devuelva datos del año 2023, que muestre ProductID y ProductName, y que tenga un Amount resumido mayor que 10,000. ¿Qué consulta debes usar?",
    "options": [
      {
        "id": "a",
        "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' GROUP BY ProductID, ProductName HAVING SUM (Amount) > 10000"
      },
      {
        "id": "b",
        "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales GROUP BY ProductID, ProductName HAVING DATEPART(YEAR, SaleDate) = '2023' AND SUM (Amount) > 10000"
      },
      {
        "id": "c",
        "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' AND SUM (Amount) > 10000"
      },
      {
        "id": "d",
        "text": "SELECT ProductID, ProductName, SUM (Amount) AS TotalAmount FROM Staging.Sales WHERE DATEPART(YEAR, SaleDate) = '2023' GROUP BY ProductID, ProductName HAVING TotalAmount > 10000"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La respuesta A es la única con sintaxis válida. El filtro del año debe incluirse en la cláusula WHERE. El filtro sobre SUM(Amount) debe incluirse en la cláusula HAVING, ya que es un agregado.",
    "domain": "Prepare and serve data",
    "twinOf": 10
  },
  {
    "id": "11-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas escribir una consulta T-SQL que devuelva el ID de cliente, el nombre, el código postal y la hora de última actualización de la fila más reciente para cada ID de cliente. ¿Cómo debes completar el código?",
    "options": [
      {
        "id": "a",
        "text": "x = ROW_NUMBER()"
      },
      {
        "id": "b",
        "text": "x = LAST_Value()"
      },
      {
        "id": "c",
        "text": "WHERE X = 1"
      },
      {
        "id": "d",
        "text": "WHERE LastUpdated = Max(LastUpdated)"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "ROW_NUMBER() es una función de ventana que asigna un número secuencial único a cada fila dentro de una partición. La usamos para asignar un número de fila a cada CustomerID, ordenando por LastUpdated DESC. Luego filtramos donde X=1 para obtener la más reciente.",
    "domain": "Prepare and serve data",
    "twinOf": 11
  },
  {
    "id": "12-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecutas el siguiente código: `PBI_visualize = QuickVisualize (get_dataset_config(df))`. ¿Qué afirmación es verdadera?",
    "options": [
      {
        "id": "a",
        "text": "El código inserta un informe de Power BI existente."
      },
      {
        "id": "b",
        "text": "El código crea un informe de Power BI."
      },
      {
        "id": "c",
        "text": "El código muestra un resumen del DataFrame."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El código crea un informe de Power BI. Si el código genera un nuevo informe de Power BI (por ejemplo, usando Python, la API REST de Power BI o la automatización de Power BI Desktop), entonces esto es correcto.",
    "domain": "Explore and visualize data",
    "twinOf": 12
  },
  {
    "id": "13-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Planeas conectarte a Lakehouse1 usando su punto de conexión SQL. ¿Qué podrás hacer después de conectarte a Lakehouse1?",
    "options": [
      {
        "id": "a",
        "text": "Leer Table3 (tabla administrada)."
      },
      {
        "id": "b",
        "text": "Actualizar los datos de Table3."
      },
      {
        "id": "c",
        "text": "Leer Table2 (tabla externa creada por Spark)."
      },
      {
        "id": "d",
        "text": "Actualizar los datos de Table1 (tabla Delta creada mediante acceso directo)."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La respuesta correcta es A. Una tabla administrada se almacena dentro del almacenamiento de Fabric y queda accesible de inmediato a través del punto de conexión SQL al conectarse.",
    "domain": "Prepare and serve data",
    "twinOf": 13
  },
  {
    "id": "14-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas agregar un paso de PowerQuery para identificar los valores máximos de las columnas numéricas. ¿Qué función debes incluir en el paso?",
    "options": [
      {
        "id": "a",
        "text": "Table.MaxN"
      },
      {
        "id": "b",
        "text": "Table.Max"
      },
      {
        "id": "c",
        "text": "Table.Range"
      },
      {
        "id": "d",
        "text": "Table.Profile"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La función Table.Profile de PowerQuery está diseñada específicamente para proporcionar información estadística sobre las columnas de una tabla, incluidos los valores máximos de las columnas numéricas.",
    "domain": "Prepare and serve data",
    "twinOf": 14
  },
  {
    "id": "15-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas usar un modelo de machine learning registrado para generar predicciones mediante la función PREDICT en un notebook de Fabric. ¿Qué dos lenguajes puedes usar para realizar la puntuación del modelo?",
    "options": [
      {
        "id": "a",
        "text": "T-SQL"
      },
      {
        "id": "b",
        "text": "DAX"
      },
      {
        "id": "c",
        "text": "Spark SQL"
      },
      {
        "id": "d",
        "text": "PySpark"
      }
    ],
    "correctIds": [
      "c",
      "d"
    ],
    "explanation": "Spark SQL y PySpark admiten la función PREDICT para la puntuación de modelos de machine learning en notebooks de Fabric.",
    "domain": "Prepare and serve data",
    "twinOf": 15
  },
  {
    "id": "16-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas usar la vista Chart del notebook para explorar los datos manualmente. ¿Qué función debes ejecutar para que los datos estén disponibles en la vista Chart?",
    "options": [
      {
        "id": "a",
        "text": "displayHTML"
      },
      {
        "id": "b",
        "text": "show"
      },
      {
        "id": "c",
        "text": "write"
      },
      {
        "id": "d",
        "text": "display"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La función display está diseñada específicamente para mostrar representaciones visuales de los datos dentro de notebooks interactivos, lo que habilita la vista Chart.",
    "domain": "Explore and visualize data",
    "twinOf": 16
  },
  {
    "id": "17-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un objeto visual de Python en Power BI. Los datos que muestra el objeto visual se agrupan automáticamente y las filas duplicadas NO se muestran. Necesitas que todas las filas aparezcan en el objeto visual. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Hacer referencia a las columnas en el código de Python por índice."
      },
      {
        "id": "b",
        "text": "Modificar la propiedad Sort Column By de todas las columnas."
      },
      {
        "id": "c",
        "text": "Agregar un campo único a cada fila."
      },
      {
        "id": "d",
        "text": "Modificar la propiedad Summarize By de todas las columnas."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Cuando agregas un identificador único (como una columna de ID) a cada fila, Power BI reconoce que cada fila es única y mostrará todas las filas en el objeto visual sin agruparlas.",
    "domain": "Explore and visualize data",
    "twinOf": 17
  },
  {
    "id": "18-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Necesitas escribir una consulta DAX que se ejecutará mediante el punto de conexión XMLA. La consulta debe devolver una tabla de las tiendas que abrieron desde el 1 de diciembre de 2023. Ordena la lógica DAX.",
    "options": [
      {
        "id": "a",
        "text": "DEFINE VAR SalesSince = DATE (2023, 12, 01)"
      },
      {
        "id": "b",
        "text": "EVALUATE"
      },
      {
        "id": "c",
        "text": "FILTER ( SUMMARIZE (Store, Store [Name], Store [OpenDate]), Store [OpenDate] >= SalesSince )"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Primero se define la variable con DEFINE, luego se evalúa la expresión con EVALUATE, la cual filtra la tabla resumida.",
    "domain": "Implement and manage semantic models",
    "twinOf": 18
  },
  {
    "id": "19-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué puedes identificar sobre la columna pickupLongitude con base en el perfil de columna (Distinct count: 935, Unique count: 871, Count: 1000)?",
    "options": [
      {
        "id": "a",
        "text": "La columna tiene valores duplicados."
      },
      {
        "id": "b",
        "text": "Se perfilaron todas las filas de la tabla."
      },
      {
        "id": "c",
        "text": "La columna tiene valores faltantes."
      },
      {
        "id": "d",
        "text": "Hay 935 valores que aparecen solo una vez."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Como el Distinct count (935) es menor que el Count total (1000) y mayor que el Unique count (871), hay valores duplicados.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 19
  },
  {
    "id": "20-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que el acceso de lectura y escritura a DS1 esté disponible mediante el punto de conexión XMLA. ¿Qué se debe modificar primero?",
    "options": [
      {
        "id": "a",
        "text": "la configuración de DS1"
      },
      {
        "id": "b",
        "text": "la configuración de WS1"
      },
      {
        "id": "c",
        "text": "la configuración de C1 (Capacidad)"
      },
      {
        "id": "d",
        "text": "la configuración de Tenant1"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Como XMLA está configurado de forma predeterminada como Read-Only en la capacidad, debes ir a la configuración de la capacidad (C1) para habilitar la lectura y escritura.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 20
  },
  {
    "id": "21-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas recomendar una solución que permita a los usuarios crear y publicar modelos semánticos Direct Lake personalizados mediante herramientas externas. ¿Qué tres acciones en el Fabric Admin portal debes incluir?",
    "options": [
      {
        "id": "a",
        "text": "En Tenant settings, establecer Allow XMLA Endpoints and Analyze in Excel with on-premises datasets en Enabled."
      },
      {
        "id": "b",
        "text": "En Tenant settings, establecer Allow Azure Active Directory guest users to access Microsoft Fabric en Enabled."
      },
      {
        "id": "c",
        "text": "En Tenant settings, seleccionar Users can edit data model in the Power BI service."
      },
      {
        "id": "d",
        "text": "En Capacity settings, establecer XMLA Endpoint en Read Write."
      },
      {
        "id": "e",
        "text": "En Tenant settings, establecer Users can create Fabric items en Enabled."
      },
      {
        "id": "f",
        "text": "En Tenant settings, habilitar Publish to Web."
      }
    ],
    "correctIds": [
      "a",
      "d",
      "e"
    ],
    "explanation": "Allow XMLA Endpoints permite la interacción mediante XMLA. El modo Read Write en XMLA Endpoint es necesario para crear o modificar modelos. También se debe permitir a los usuarios crear elementos de Fabric.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 21
  },
  {
    "id": "22-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Planeas hacer cambios masivos en el modelo usando la extensión Tabular Model Definition Language (TMDL) para VS Code. ¿Qué formato de archivo debes usar?",
    "options": [
      {
        "id": "a",
        "text": "PBIP"
      },
      {
        "id": "b",
        "text": "PBIX"
      },
      {
        "id": "c",
        "text": "PBIT"
      },
      {
        "id": "d",
        "text": "PBIDS"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "PBIP (Power BI Project) es un formato de archivo que admite el formato TMDL de código abierto y está diseñado para integrarse con entornos de desarrollo externos.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 22
  },
  {
    "id": "23-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas asegurarte de que un usuario llamado User1 pueda truncar tablas únicamente en schemaA. ¿Cómo debes completar la instrucción T-SQL?",
    "options": [
      {
        "id": "a",
        "text": "GRANT ALTER"
      },
      {
        "id": "b",
        "text": "GRANT EXECUTE"
      },
      {
        "id": "c",
        "text": "ON SCHEMA::schemaA TO User1"
      },
      {
        "id": "d",
        "text": "ON DATABASE::schemaA TO User1"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "ALTER permite modificar objetos del esquema, incluido el truncamiento. Los permisos deben concederse ON SCHEMA::schemaA.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 23
  },
  {
    "id": "24-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas proporcionar a los desarrolladores de Power BI acceso a la canalización. Asegúrate de que puedan implementar en Dev y Test, pero NO en Production. ¿Qué tres niveles de acceso debes asignar?",
    "options": [
      {
        "id": "a",
        "text": "Permiso Build sobre los modelos semánticos de producción"
      },
      {
        "id": "b",
        "text": "Acceso Admin a la canalización de implementación"
      },
      {
        "id": "c",
        "text": "Acceso Viewer a las áreas de trabajo de Development y Test"
      },
      {
        "id": "d",
        "text": "Acceso Viewer al área de trabajo de Production"
      },
      {
        "id": "e",
        "text": "Acceso Contributor a las áreas de trabajo de Development y Test"
      },
      {
        "id": "f",
        "text": "Acceso Contributor al área de trabajo de Production"
      }
    ],
    "correctIds": [
      "b",
      "d",
      "e"
    ],
    "explanation": "El acceso Admin a la canalización permite administrar las fases. Contributor en Dev/Test permite implementar allí. Viewer en Production impide implementar allí.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 24
  },
  {
    "id": "25-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Tienes un modelo semántico DirectQuery con 500 millones de filas. Necesitas reducir el tiempo de ejecución de las consultas. ¿Qué dos características puedes usar?",
    "options": [
      {
        "id": "a",
        "text": "agregaciones definidas por el usuario"
      },
      {
        "id": "b",
        "text": "agregación automática"
      },
      {
        "id": "c",
        "text": "almacenamiento en caché de consultas"
      },
      {
        "id": "d",
        "text": "integración con OneLake"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "Las agregaciones (tanto las definidas por el usuario como las automáticas) preagregan los datos para reducir la necesidad de examinar conjuntos de datos masivos en las consultas de resumen.",
    "domain": "Implement and manage semantic models",
    "twinOf": 25
  },
  {
    "id": "26-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico que usa archivos CSV (con actualización incremental configurada). La actualización falla después de quedarse sin recursos. ¿Cuál es una posible causa?",
    "options": [
      {
        "id": "a",
        "text": "Se está produciendo el plegado de consultas (query folding)."
      },
      {
        "id": "b",
        "text": "Está seleccionada la opción Only refresh complete days."
      },
      {
        "id": "c",
        "text": "XMLA Endpoint está configurado como Read Only."
      },
      {
        "id": "d",
        "text": "NO se está produciendo el plegado de consultas (query folding)."
      },
      {
        "id": "e",
        "text": "Cambió el tipo delta de la columna usada para particionar los datos."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La actualización incremental requiere el plegado de consultas (query folding) para ser eficiente. Los archivos CSV no admiten el plegado de consultas, lo que provoca el agotamiento de recursos.",
    "domain": "Implement and manage semantic models",
    "twinOf": 26
  },
  {
    "id": "27-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas habilitar el escalado horizontal (scale-out) para un modelo semántico. ¿Qué debes hacer primero?",
    "options": [
      {
        "id": "a",
        "text": "En el nivel del modelo semántico, establecer Large dataset storage format en Off."
      },
      {
        "id": "b",
        "text": "En el nivel del inquilino, establecer Create and use Metrics en Enabled."
      },
      {
        "id": "c",
        "text": "En el nivel del modelo semántico, establecer Large dataset storage format en On."
      },
      {
        "id": "d",
        "text": "En el nivel del inquilino, establecer Data Activator en Enabled."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Establecer 'Large dataset storage format' en On es un requisito previo para habilitar el escalado horizontal (scale-out).",
    "domain": "Implement and manage semantic models",
    "twinOf": 27
  },
  {
    "id": "28-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Creas un modelo semántico Direct Lake que usa tablas Delta y la RLS del warehouse. ¿Qué modo usarán las consultas DAX cuando interviene la RLS?",
    "options": [
      {
        "id": "a",
        "text": "DirectQuery"
      },
      {
        "id": "b",
        "text": "Dual"
      },
      {
        "id": "c",
        "text": "Direct Lake"
      },
      {
        "id": "d",
        "text": "Import"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las consultas de Power BI sobre un warehouse en modo Direct Lake recurrirán al modo DirectQuery para respetar la seguridad de nivel de fila definida en el warehouse.",
    "domain": "Implement and manage semantic models",
    "twinOf": 28
  },
  {
    "id": "29-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un diagrama del modelo. El diagrama debe contener únicamente la tabla Sales y las tablas relacionadas. ¿Qué debes usar de Microsoft Power BI Desktop?",
    "options": [
      {
        "id": "a",
        "text": "categorías de datos"
      },
      {
        "id": "b",
        "text": "Vista de datos (Data view)"
      },
      {
        "id": "c",
        "text": "Vista de modelo (Model view)"
      },
      {
        "id": "d",
        "text": "Vista de consultas DAX (DAX query view)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La vista de modelo (Model view) te permite visualizar y administrar relaciones, y crear diagramas específicos para subconjuntos de tablas.",
    "domain": "Implement and manage semantic models",
    "twinOf": 29
  },
  {
    "id": "30-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas identificar las columnas de uso frecuente que se cargan en memoria para un modelo Direct Lake. ¿Cuáles son dos formas de lograr el objetivo?",
    "options": [
      {
        "id": "a",
        "text": "Usar la característica Analyze in Excel."
      },
      {
        "id": "b",
        "text": "Usar la herramienta Vertipaq Analyzer."
      },
      {
        "id": "c",
        "text": "Consultar la DMV $System.DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS."
      },
      {
        "id": "d",
        "text": "Consultar la DMV DISCOVER_MEMORYGRANT."
      }
    ],
    "correctIds": [
      "b",
      "c"
    ],
    "explanation": "Vertipaq Analyzer proporciona detalles del uso de memoria. La DMV DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS ofrece información sobre el almacenamiento y el uso de las columnas.",
    "domain": "Explore and visualize data",
    "twinOf": 30
  },
  {
    "id": "31-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas crear un modelo de datos dimensional. 1) La relación entre OrderItem y Product debe basarse en: 2) La entidad Company debe:",
    "options": [
      {
        "id": "a",
        "text": "1) La columna ProductID"
      },
      {
        "id": "b",
        "text": "1) Las columnas CompanyID y ProductID"
      },
      {
        "id": "c",
        "text": "2) Omitirse"
      },
      {
        "id": "d",
        "text": "2) Desnormalizarse en las entidades Customer y Product"
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "Una relación basada en ProductID implica que los productos son únicos o que el contexto de la compañía se maneja en otro lugar. Desnormalizar Company en Customer y Product reduce las combinaciones (esquema de estrella).",
    "domain": "Implement and manage semantic models",
    "twinOf": 31
  },
  {
    "id": "32-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas reducir la memoria que usa Model1 (modo Import) y el tiempo que tarda en actualizarse. ¿Qué dos acciones debes realizar?",
    "options": [
      {
        "id": "a",
        "text": "Dividir OrderDateTime en columnas separadas de fecha y hora."
      },
      {
        "id": "b",
        "text": "Reemplazar Total Quantity por una columna calculada."
      },
      {
        "id": "c",
        "text": "Convertir Quantity al tipo de datos Text."
      },
      {
        "id": "d",
        "text": "Reemplazar TotalSalesAmount por una medida."
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "Dividir DateTime mejora la compresión (menor cardinalidad). Reemplazar una columna calculada por una medida ahorra almacenamiento (memoria), ya que las medidas se calculan en el momento de la consulta.",
    "domain": "Implement and manage semantic models",
    "twinOf": 32
  },
  {
    "id": "33-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas evitar que los creadores de informes llenen objetos visuales usando medidas implícitas. ¿Cuáles son dos herramientas que puedes usar?",
    "options": [
      {
        "id": "a",
        "text": "Microsoft Power BI Desktop"
      },
      {
        "id": "b",
        "text": "Tabular Editor"
      },
      {
        "id": "c",
        "text": "Microsoft SQL Server Management Studio (SSMS)"
      },
      {
        "id": "d",
        "text": "DAX Studio"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "Power BI Desktop permite administrar las definiciones de medidas. Tabular Editor permite modificar las propiedades del modelo (Discourage Implicit Measures).",
    "domain": "Implement and manage semantic models",
    "twinOf": 33
  },
  {
    "id": "34-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Tienes un inquilino de Fabric que contiene dos lakehouses. Estás creando un flujo de datos que combinará datos de los lakehouses. 1) [Opción de respuesta] de los pasos de transformación de la consulta se plegarán. 2) El paso Added custom se realizará en [opción de respuesta].",
    "options": [
      {
        "id": "a",
        "text": "1) Todos"
      },
      {
        "id": "b",
        "text": "1) Ninguno"
      },
      {
        "id": "c",
        "text": "1) Algunos"
      },
      {
        "id": "d",
        "text": "2) el motor de consultas de cada lakehouse"
      },
      {
        "id": "e",
        "text": "2) el motor de Microsoft Power Query"
      },
      {
        "id": "f",
        "text": "2) el motor de consultas del lakehouse de origen"
      }
    ],
    "correctIds": [
      "c",
      "e"
    ],
    "explanation": "1) Algunas transformaciones se pliegan (las básicas) y otras no. 2) Los pasos personalizados (Added custom) normalmente no se pueden plegar y los procesa el motor de Power Query.",
    "domain": "Prepare and serve data",
    "twinOf": 34
  },
  {
    "id": "35-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Planeas copiar datos externos a Table1. El esquema de los datos externos cambia con regularidad. Necesitas reemplazar Table1 con el esquema de los datos externos y reemplazar todos los datos. ¿Qué debes hacer en la actividad Copy data?",
    "options": [
      {
        "id": "a",
        "text": "En la pestaña Source, agregar columnas adicionales."
      },
      {
        "id": "b",
        "text": "En la pestaña Destination, establecer Table action en Overwrite."
      },
      {
        "id": "c",
        "text": "En la pestaña Settings, seleccionar Enable staging."
      },
      {
        "id": "d",
        "text": "En la pestaña Source, seleccionar Enable partition discovery."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Establecer 'Table action' en 'Overwrite' en la pestaña Destination garantiza que la tabla se reemplace por completo, incluidos el esquema y los datos, para que coincida con el origen externo.",
    "domain": "Prepare and serve data",
    "twinOf": 35
  },
  {
    "id": "36-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Planeas consultar archivos de datos de ventas (Amazon S3) usando el punto de conexión SQL. Necesitas recomendar qué formato de archivo usar y dónde crear un acceso directo (shortcut).",
    "options": [
      {
        "id": "a",
        "text": "Crear un acceso directo en la sección Files."
      },
      {
        "id": "b",
        "text": "Usar el formato Parquet."
      },
      {
        "id": "c",
        "text": "Usar el formato CSV."
      },
      {
        "id": "d",
        "text": "Crear un acceso directo en la sección Tables."
      },
      {
        "id": "e",
        "text": "Usar el formato delta."
      }
    ],
    "correctIds": [
      "b",
      "d"
    ],
    "explanation": "Parquet es un formato columnar optimizado para análisis. Crear un acceso directo en la sección Tables permite mejores capacidades de consulta SQL en comparación con la sección Files.",
    "domain": "Prepare and serve data",
    "twinOf": 36
  },
  {
    "id": "37-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas convertir archivos CSV de una subcarpeta de un lakehouse al formato delta con la optimización V-Order habilitada. ¿Qué debes hacer desde el Lakehouse explorer?",
    "options": [
      {
        "id": "a",
        "text": "Usar la característica Load to Tables."
      },
      {
        "id": "b",
        "text": "Crear un nuevo acceso directo en la sección Files."
      },
      {
        "id": "c",
        "text": "Crear un nuevo acceso directo en la sección Tables."
      },
      {
        "id": "d",
        "text": "Usar la característica Optimize."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La característica 'Load to Tables' permite convertir archivos (como CSV) en tablas Delta administradas, aplicando la optimización V-Order durante el proceso.",
    "domain": "Prepare and serve data",
    "twinOf": 37
  },
  {
    "id": "38-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Planeas copiar datos a Table1 y particionar la tabla con base en una columna de fecha. Creas una actividad Copy. Necesitas especificar la columna de partición en la configuración de Destination. ¿Qué debes hacer primero?",
    "options": [
      {
        "id": "a",
        "text": "En la pestaña Destination, establecer Mode en Append."
      },
      {
        "id": "b",
        "text": "En la pestaña Destination, seleccionar la columna de partición."
      },
      {
        "id": "c",
        "text": "En la pestaña Source, seleccionar Enable partition discovery."
      },
      {
        "id": "d",
        "text": "En las pestañas Destination, establecer Mode en Overwrite."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Para habilitar las opciones de partición en la configuración de Destination de una actividad Copy hacia una tabla de Lakehouse, normalmente debes seleccionar 'Overwrite' como Table action.",
    "domain": "Prepare and serve data",
    "twinOf": 38
  },
  {
    "id": "39-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Ejecutas: CREATE TABLE test.FactSales AS CLONE OF Dbo.FactSales; Evalúa las afirmaciones: 1) Se crea una réplica de dbo.Sales en el esquema test copiando únicamente los metadatos. 2) Los cambios de esquema adicionales en dbo.FactSales también se aplicarán a test.FactSales.",
    "options": [
      {
        "id": "yes1",
        "text": "1) Sí"
      },
      {
        "id": "no1",
        "text": "1) No"
      },
      {
        "id": "yes2",
        "text": "2) Sí"
      },
      {
        "id": "no2",
        "text": "2) No"
      }
    ],
    "correctIds": [
      "yes1",
      "no2"
    ],
    "explanation": "1) Sí, la clonación crea una réplica sin copia de datos (zero-copy) usando metadatos. 2) No, el clon es independiente; los cambios de esquema en el origen no se propagan al clon.",
    "domain": "Implement and manage semantic models",
    "twinOf": 39
  },
  {
    "id": "40-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una solución para llenar un almacén de datos que admita flujos de datos y garantice que las tablas Delta se optimicen con V-Order y se compacten automáticamente. ¿Qué tipo de almacén de datos debes usar?",
    "options": [
      {
        "id": "a",
        "text": "un lakehouse"
      },
      {
        "id": "b",
        "text": "una base de datos de Azure SQL"
      },
      {
        "id": "c",
        "text": "un warehouse"
      },
      {
        "id": "d",
        "text": "una base de datos KQL"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Un Lakehouse en Fabric admite la optimización V-Order y la compactación automática de tablas Delta, y se integra bien con los flujos de datos.",
    "domain": "Prepare and serve data",
    "twinOf": 40
  },
  {
    "id": "41-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Ejecutas: df.write.partitionBy('year', 'month', 'day').mode('overwrite').parquet('Files/SalesOrder'). Evalúa: 1) Los resultados formarán una jerarquía de carpetas para cada clave de partición. 2) Las particiones de archivos resultantes se pueden leer en paralelo. 3) Las particiones de archivos resultantes usarán compresión de archivos.",
    "options": [
      {
        "id": "yes1",
        "text": "1) Sí"
      },
      {
        "id": "no1",
        "text": "1) No"
      },
      {
        "id": "yes2",
        "text": "2) Sí"
      },
      {
        "id": "no2",
        "text": "2) No"
      },
      {
        "id": "yes3",
        "text": "3) Sí"
      },
      {
        "id": "no3",
        "text": "3) No"
      }
    ],
    "correctIds": [
      "yes1",
      "yes2",
      "yes3"
    ],
    "explanation": "1) El particionamiento crea una jerarquía de carpetas. 2) Las particiones permiten la lectura en paralelo. 3) Los archivos Parquet se comprimen de forma predeterminada (normalmente con Snappy).",
    "domain": "Implement and manage semantic models",
    "twinOf": 41
  },
  {
    "id": "42-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas transformar las columnas de datos en pares atributo-valor (anular dinamización). Seleccionas la columna VendorID. ¿Qué transformación debes seleccionar?",
    "options": [
      {
        "id": "a",
        "text": "Group by"
      },
      {
        "id": "b",
        "text": "Unpivot columns"
      },
      {
        "id": "c",
        "text": "Unpivot other columns"
      },
      {
        "id": "d",
        "text": "Split column"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Como seleccionaste 'VendorID' (el identificador clave) y quieres anular la dinamización del *resto* de las columnas, debes usar 'Unpivot Other Columns'.",
    "domain": "Prepare and serve data",
    "twinOf": 42
  },
  {
    "id": "43-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que la canalización se ejecute cada cuatro horas los lunes y viernes. ¿En qué valor debes establecer Repeat para la programación?",
    "options": [
      {
        "id": "a",
        "text": "Daily"
      },
      {
        "id": "b",
        "text": "By the minute"
      },
      {
        "id": "c",
        "text": "Weekly"
      },
      {
        "id": "d",
        "text": "Hourly"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La programación Weekly permite seleccionar días específicos (lunes, viernes) y luego definir intervalos de tiempo (cada 4 horas) dentro de esos días.",
    "domain": "Prepare and serve data",
    "twinOf": 43
  },
  {
    "id": "44-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Sospechas que Fabric está limitando (throttling) el proceso que usa el warehouse. ¿Qué debes usar para identificar si se está produciendo la limitación?",
    "options": [
      {
        "id": "a",
        "text": "la configuración de Capacity"
      },
      {
        "id": "b",
        "text": "el Monitoring hub"
      },
      {
        "id": "c",
        "text": "las vistas de administración dinámica (DMV)"
      },
      {
        "id": "d",
        "text": "la aplicación Microsoft Fabric Capacity Metrics"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La aplicación Microsoft Fabric Capacity Metrics proporciona visibilidad sobre el uso de la capacidad, el suavizado (smoothing) y los eventos de limitación (throttling).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 44
  },
  {
    "id": "45-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Código de Spark: leer csv, seleccionar columnas, withColumn Year, escribir con partitionBy Year. Evalúa: 1) Spark leerá únicamente las columnas seleccionadas del CSV. 2) Quitar la partición reducirá el tiempo de ejecución. 3) Agregar inferSchema='true' aumentará el tiempo de ejecución.",
    "options": [
      {
        "id": "yes1",
        "text": "1) Sí"
      },
      {
        "id": "no1",
        "text": "1) No"
      },
      {
        "id": "yes2",
        "text": "2) Sí"
      },
      {
        "id": "no2",
        "text": "2) No"
      },
      {
        "id": "yes3",
        "text": "3) Sí"
      },
      {
        "id": "no3",
        "text": "3) No"
      }
    ],
    "correctIds": [
      "no1",
      "no2",
      "yes3"
    ],
    "explanation": "1) No, CSV está basado en filas; Spark lee filas completas antes de seleccionar. 2) No, el particionamiento suele mejorar el rendimiento de lectura posterior; aunque la escritura podría ser un poco más lenta, quitarlo no necesariamente reduce de forma significativa el tiempo total en este contexto. 3) Sí, inferSchema requiere una pasada adicional sobre los datos.",
    "domain": "Prepare and serve data",
    "twinOf": 45
  },
  {
    "id": "46-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Una consulta de informe lleva 45 minutos en ejecución (normalmente tarda 2 minutos). Necesitas identificar qué impide que termine. ¿Qué DMV debes usar?",
    "options": [
      {
        "id": "a",
        "text": "sys.dm_exec_requests"
      },
      {
        "id": "b",
        "text": "sys.dm_exec_sessions"
      },
      {
        "id": "c",
        "text": "sys.dm_exec_connections"
      },
      {
        "id": "d",
        "text": "sys.dm_pdw_exec_requests"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "sys.dm_exec_requests muestra las solicitudes que se están ejecutando actualmente, su estado, el estado de bloqueo y los tipos de espera.",
    "domain": "Prepare and serve data",
    "twinOf": 46
  },
  {
    "id": "47-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Completa el código M de Power Query para garantizar el plegado de consultas (query folding). `Query = [Value](Database, \"SELECT...\", [EnableFolding]=true)`",
    "options": [
      {
        "id": "a",
        "text": "Value"
      },
      {
        "id": "b",
        "text": "NativeQuery"
      },
      {
        "id": "c",
        "text": "EnableFolding"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Value.NativeQuery(Database, 'SQL', [EnableFolding=true]) es el patrón para forzar el plegado en una consulta SQL nativa.",
    "domain": "Prepare and serve data",
    "twinOf": 47
  },
  {
    "id": "48-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Relaciona las acciones con los requisitos: 1) Eliminar archivos no usados. 2) Combinar archivos pequeños.",
    "options": [
      {
        "id": "a",
        "text": "Ejecutar el comando VACUUM"
      },
      {
        "id": "b",
        "text": "Ejecutar el comando OPTIMIZE"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "VACUUM elimina los archivos antiguos. OPTIMIZE compacta los archivos pequeños.",
    "domain": "Prepare and serve data",
    "twinOf": 48
  },
  {
    "id": "49-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas crear un patrón de carga SCD de tipo 1. ¿Qué dos acciones debes incluir?",
    "options": [
      {
        "id": "a",
        "text": "Actualizar las filas cuando los atributos que no son clave hayan cambiado."
      },
      {
        "id": "b",
        "text": "Insertar filas nuevas cuando la clave natural exista y los atributos que no son clave hayan cambiado."
      },
      {
        "id": "c",
        "text": "Actualizar la fecha de fin de vigencia de las filas."
      },
      {
        "id": "d",
        "text": "Insertar registros nuevos cuando la clave natural sea un valor nuevo."
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "El tipo 1 actualiza los registros existentes (sobrescribe el historial) e inserta registros nuevos.",
    "domain": "Prepare and serve data",
    "twinOf": 49
  },
  {
    "id": "50-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Crea un acceso directo a ADLS Gen2. 1) Conexión: [opción] 2) Punto de conexión: [opción]",
    "options": [
      {
        "id": "a",
        "text": "1) https"
      },
      {
        "id": "b",
        "text": "1) abfs"
      },
      {
        "id": "c",
        "text": "2) dfs"
      },
      {
        "id": "d",
        "text": "2) blob"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "La conexión usa 'https' (REST seguro). El punto de conexión para ADLS Gen2 (espacio de nombres jerárquico) es 'dfs'.",
    "domain": "Prepare and serve data",
    "twinOf": 50
  },
  {
    "id": "51-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Planeas crear un panel. Necesitas identificar qué tres elementos se pueden anclar al panel. ¿Qué tres elementos debes identificar?",
    "options": [
      {
        "id": "a",
        "text": "una página de informe"
      },
      {
        "id": "b",
        "text": "un objeto visual de informe"
      },
      {
        "id": "c",
        "text": "un objeto visual personalizado de un informe"
      },
      {
        "id": "d",
        "text": "un objeto visual de cuadro de mandos (scorecard)"
      },
      {
        "id": "e",
        "text": "una segmentación de datos"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Puedes anclar una página de informe completa, un solo objeto visual o un objeto visual personalizado. Las segmentaciones de datos normalmente no se pueden anclar como elementos funcionales de la misma manera.",
    "domain": "Prepare and serve data",
    "twinOf": 51
  },
  {
    "id": "52-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas conceder a un usuario permiso para ver el contenido de un lakehouse, incluido el punto de conexión SQL. La solución debe seguir el principio de privilegios mínimos. ¿Qué rol debes asignar al usuario?",
    "options": [
      {
        "id": "a",
        "text": "Viewer"
      },
      {
        "id": "b",
        "text": "Admin"
      },
      {
        "id": "c",
        "text": "Contributor"
      },
      {
        "id": "d",
        "text": "Member"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El rol Viewer permite ver el contenido (solo lectura) sin la capacidad de modificarlo, lo que cumple con el principio de privilegios mínimos.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 52
  },
  {
    "id": "53-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico que usa un esquema de estrella. Necesitas crear una medida que realice un recuento distinto de una columna de una tabla de dimensiones. La lógica debe recorrer de forma efectiva la relación entre la tabla de hechos y la tabla de dimensiones. ¿Qué función DAX debes usar?",
    "options": [
      {
        "id": "a",
        "text": "RELATED"
      },
      {
        "id": "b",
        "text": "RELATEDTABLE"
      },
      {
        "id": "c",
        "text": "CROSSFILTER"
      },
      {
        "id": "d",
        "text": "USERELATIONSHIP"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "CROSSFILTER permite cambiar la dirección del filtro cruzado de una relación (por ejemplo, a Both) durante el cálculo, lo que habilita los recuentos a través de la relación.",
    "domain": "Implement and manage semantic models",
    "twinOf": 53
  },
  {
    "id": "54-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico grande. Necesitas asegurarte de que el modelo esté optimizado para los informes. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "VertiPaq Analyzer"
      },
      {
        "id": "b",
        "text": "Performance Analyzer"
      },
      {
        "id": "c",
        "text": "Best Practice Analyzer en Tabular Editor"
      },
      {
        "id": "d",
        "text": "SQL Server Profiler"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Best Practice Analyzer (BPA) verifica las mejores prácticas de modelado (por ejemplo, ocultar claves externas, aplicar formato, minimizar columnas) para optimizar el modelo.",
    "domain": "Implement and manage semantic models",
    "twinOf": 54
  },
  {
    "id": "55-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un archivo PBIX que contiene un informe. Planeas usar las canalizaciones de implementación. Necesitas recomendar un formato de archivo para el control de código fuente. ¿Qué formato de archivo debes recomendar?",
    "options": [
      {
        "id": "a",
        "text": "PBIT"
      },
      {
        "id": "b",
        "text": "PBIP"
      },
      {
        "id": "c",
        "text": "PBIDS"
      },
      {
        "id": "d",
        "text": "PBIX"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El formato PBIP (Power BI Project) expone la definición del informe y del conjunto de datos como archivos de texto sin formato, ideal para el control de código fuente (integración con Git).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 55
  },
  {
    "id": "56-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás creando un objeto visual de Python en Power BI Desktop. Necesitas asegurarte de que los datos se traten como un dataframe. ¿Qué biblioteca de Python debes importar?",
    "options": [
      {
        "id": "a",
        "text": "matplotlib"
      },
      {
        "id": "b",
        "text": "pandas"
      },
      {
        "id": "c",
        "text": "seaborn"
      },
      {
        "id": "d",
        "text": "numpy"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Pandas es la biblioteca estándar para la manipulación de datos en Python y se usa para manejar el conjunto de datos como un DataFrame en Power BI.",
    "domain": "Explore and visualize data",
    "twinOf": 56
  },
  {
    "id": "57-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas implementar Row-Level Security (seguridad de nivel de fila, RLS) en un modelo DirectQuery. La solución debe usar el UPN del usuario. ¿Qué función DAX debes usar?",
    "options": [
      {
        "id": "a",
        "text": "USERNAME()"
      },
      {
        "id": "b",
        "text": "USERPRINCIPALNAME()"
      },
      {
        "id": "c",
        "text": "LOOKUPVALUE()"
      },
      {
        "id": "d",
        "text": "RELATED()"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "USERPRINCIPALNAME() devuelve el UPN del usuario (dirección de correo electrónico), que es el estándar para asignar usuarios en RLS.",
    "domain": "Implement and manage semantic models",
    "twinOf": 57
  },
  {
    "id": "58-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un warehouse. Ejecutas una consulta T-SQL que devuelve un error. Necesitas identificar la causa del error. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "sys.dm_exec_requests"
      },
      {
        "id": "b",
        "text": "sys.dm_pdw_exec_requests"
      },
      {
        "id": "c",
        "text": "sys.dm_exec_sessions"
      },
      {
        "id": "d",
        "text": "Query Insights"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Query Insights en Fabric (o en el SQL Analytics Endpoint) proporciona información histórica detallada sobre la ejecución de consultas, incluidos los errores.",
    "domain": "Prepare and serve data",
    "twinOf": 58
  },
  {
    "id": "59-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas crear un modelo semántico que admita el modo Direct Lake. ¿Qué dos orígenes puedes usar?",
    "options": [
      {
        "id": "a",
        "text": "Una base de datos de SQL Server"
      },
      {
        "id": "b",
        "text": "Un warehouse en Fabric"
      },
      {
        "id": "c",
        "text": "Un lakehouse en Fabric"
      },
      {
        "id": "d",
        "text": "Una tabla Delta genérica"
      }
    ],
    "correctIds": [
      "b",
      "c"
    ],
    "explanation": "Direct Lake funciona con Fabric Warehouse y Fabric Lakehouse (tablas Delta).",
    "domain": "Prepare and serve data",
    "twinOf": 59
  },
  {
    "id": "60-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una consulta que realiza una operación de ordenación grande. La consulta falla. Sospechas que hay presión de memoria. ¿Qué DMV debes revisar?",
    "options": [
      {
        "id": "a",
        "text": "sys.dm_pdw_nodes_tran_database_transactions"
      },
      {
        "id": "b",
        "text": "sys.dm_pdw_exec_requests"
      },
      {
        "id": "c",
        "text": "sys.dm_pdw_nodes_os_performance_counters"
      },
      {
        "id": "d",
        "text": "sys.dm_exec_query_memory_grants"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "sys.dm_exec_query_memory_grants proporciona información sobre la memoria solicitada y concedida a las consultas, lo que ayuda a diagnosticar la presión de memoria.",
    "domain": "Prepare and serve data",
    "twinOf": 60
  },
  {
    "id": "61-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Tienes un área de trabajo con 100 informes. Necesitas identificar qué informes no se usan. ¿Qué dos métodos puedes usar?",
    "options": [
      {
        "id": "a",
        "text": "Aplicación Fabric Capacity Metrics"
      },
      {
        "id": "b",
        "text": "El informe de métricas de uso del área de trabajo"
      },
      {
        "id": "c",
        "text": "Área de trabajo Admin monitoring"
      },
      {
        "id": "d",
        "text": "Registro de actividad en Microsoft Purview"
      }
    ],
    "correctIds": [
      "b",
      "c"
    ],
    "explanation": "El informe de métricas de uso ofrece el uso por informe. El área de trabajo Admin monitoring (Feature usage) ofrece una vista de todo el inquilino o del área de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 61
  },
  {
    "id": "62-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas optimizar el rendimiento de un notebook de Spark. El notebook procesa muchos archivos pequeños. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Aumentar el tamaño del ejecutor."
      },
      {
        "id": "b",
        "text": "Usar V-Order."
      },
      {
        "id": "c",
        "text": "Ejecutar el comando OPTIMIZE."
      },
      {
        "id": "d",
        "text": "Particionar los datos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El comando OPTIMIZE (a menudo con ZORDER) compacta los archivos pequeños en archivos más grandes, lo que mejora el rendimiento de lectura.",
    "domain": "Prepare and serve data",
    "twinOf": 62
  },
  {
    "id": "63-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás diseñando un modelo semántico. Necesitas asegurarte de que el modelo admita la característica 'Analyze in Excel'. ¿Qué configuración debes habilitar?",
    "options": [
      {
        "id": "a",
        "text": "XMLA Endpoint Read/Write"
      },
      {
        "id": "b",
        "text": "Allow XMLA endpoints and Analyze in Excel with on-premises datasets"
      },
      {
        "id": "c",
        "text": "Users can work with datasets in Excel using a live connection"
      },
      {
        "id": "d",
        "text": "Featured tables"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Esta configuración del inquilino permite específicamente que los usuarios usen Analyze in Excel (conexión dinámica).",
    "domain": "Implement and manage semantic models",
    "twinOf": 63
  },
  {
    "id": "64-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Tienes un grupo de cálculo. Necesitas dar formato de porcentaje al elemento de cálculo 'YOY %'. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Format String Expression"
      },
      {
        "id": "b",
        "text": "Propiedad Format"
      },
      {
        "id": "c",
        "text": "Propiedad Data Type"
      },
      {
        "id": "d",
        "text": "Dynamic Format String"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Format String Expression en un elemento de cálculo permite definir el formato de forma dinámica (por ejemplo, '0.00%' para 'YOY %').",
    "domain": "Implement and manage semantic models",
    "twinOf": 64
  },
  {
    "id": "65-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una canalización que falla. Necesitas reiniciar la canalización desde la actividad con error. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Volver a ejecutar toda la canalización."
      },
      {
        "id": "b",
        "text": "Usar la opción 'Rerun from failed activity' en el Monitoring hub."
      },
      {
        "id": "c",
        "text": "Eliminar la ejecución con error e iniciar una válida."
      },
      {
        "id": "d",
        "text": "Desencadenar una nueva ejecución."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El Monitoring hub te permite reiniciar una ejecución de canalización específicamente desde el punto del error.",
    "domain": "Prepare and serve data",
    "twinOf": 65
  },
  {
    "id": "66-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Usas una base de datos KQL. Necesitas ingerir datos desde un event hub. ¿Qué elemento debes crear?",
    "options": [
      {
        "id": "a",
        "text": "Una canalización"
      },
      {
        "id": "b",
        "text": "Un flujo de datos"
      },
      {
        "id": "c",
        "text": "Un eventstream"
      },
      {
        "id": "d",
        "text": "Un acceso directo"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los eventstreams en Fabric están diseñados para capturar datos en tiempo real desde orígenes como Event Hubs e ingerirlos en bases de datos KQL o Lakehouses.",
    "domain": "Prepare and serve data",
    "twinOf": 66
  },
  {
    "id": "67-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Creas un acceso directo a un bucket de Google Cloud Storage. Necesitas asegurarte de que los datos estén actualizados. ¿Qué debes verificar?",
    "options": [
      {
        "id": "a",
        "text": "Que el acceso directo use almacenamiento en caché."
      },
      {
        "id": "b",
        "text": "Que los datos de origen no se hayan movido."
      },
      {
        "id": "c",
        "text": "Los accesos directos apuntan a datos en vivo; no se necesita actualización."
      },
      {
        "id": "d",
        "text": "Programar una actualización para el acceso directo."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los accesos directos son punteros a los datos. Proporcionan una vista en vivo de la ubicación de origen, por lo que no se requiere actualizar los datos.",
    "domain": "Prepare and serve data",
    "twinOf": 67
  },
  {
    "id": "68-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas automatizar la implementación de un modelo semántico en el área de trabajo de Production. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "XMLA Endpoint"
      },
      {
        "id": "b",
        "text": "Fabric API (Deployment Pipelines)"
      },
      {
        "id": "c",
        "text": "Power BI Desktop"
      },
      {
        "id": "d",
        "text": "SharePoint"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las API REST de Fabric permiten automatizar el proceso de la canalización de implementación, incluida la implementación en las fases (Prod).",
    "domain": "Implement and manage semantic models",
    "twinOf": 68
  },
  {
    "id": "69-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Tienes un modelo semántico con una tabla 'Sales'. Quieres denegar el acceso a la columna 'Margin' para un grupo específico de usuarios. ¿Qué debes configurar?",
    "options": [
      {
        "id": "a",
        "text": "Row-level security (seguridad de nivel de fila, RLS)"
      },
      {
        "id": "b",
        "text": "Object-level security (seguridad de nivel de objeto, OLS)"
      },
      {
        "id": "c",
        "text": "Seguridad de carpetas"
      },
      {
        "id": "d",
        "text": "Roles del área de trabajo"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La seguridad de nivel de fila filtra filas. La Object-level security (OLS) te permite proteger tablas o columnas específicas (como 'Margin') para que queden ocultas o inaccesibles.",
    "domain": "Implement and manage semantic models",
    "twinOf": 69
  },
  {
    "id": "70-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas supervisar las unidades de capacidad (CU) que consume un área de trabajo específica. ¿Qué objeto visual de la aplicación Metrics debes revisar?",
    "options": [
      {
        "id": "a",
        "text": "Compute - % consumed"
      },
      {
        "id": "b",
        "text": "Timepoint detail"
      },
      {
        "id": "c",
        "text": "Items (by Workspace)"
      },
      {
        "id": "d",
        "text": "Interactive operations"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La página 'Items' permite desglosar el consumo por área de trabajo y luego por elemento.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 70
  },
  {
    "id": "71-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Creas un nuevo lakehouse. Necesitas proteger los datos usando la seguridad de OneLake (RBAC). ¿Cuál es el estado predeterminado?",
    "options": [
      {
        "id": "a",
        "text": "Todos los usuarios tienen acceso."
      },
      {
        "id": "b",
        "text": "Solo el creador tiene acceso."
      },
      {
        "id": "c",
        "text": "Hereda los permisos del área de trabajo."
      },
      {
        "id": "d",
        "text": "Acceso público."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los elementos de Fabric, incluidos los Lakehouses, heredan de forma predeterminada los permisos de los roles del área de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 71
  },
  {
    "id": "72-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Ordena los pasos para habilitar un objeto visual personalizado para la organización: 1) Descargar el .pbiviz. 2) Abrir el Admin Portal. 3) Cargarlo en Organizational Visuals.",
    "options": [
      {
        "id": "a",
        "text": "Paso 1, 2, 3"
      },
      {
        "id": "b",
        "text": "Paso 2, 3, 1"
      },
      {
        "id": "c",
        "text": "Paso 3, 2, 1"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Primero necesitas el archivo (1), luego vas al portal (2) y después lo cargas (3).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 72
  },
  {
    "id": "73-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un dataframe de PySpark 'df'. Quieres filtrarlo para mostrar solo las filas donde 'Sales' > 100. ¿Qué código usas?",
    "options": [
      {
        "id": "a",
        "text": "df.filter(df.Sales > 100)"
      },
      {
        "id": "b",
        "text": "df.where('Sales > 100')"
      },
      {
        "id": "c",
        "text": "Tanto A como B"
      },
      {
        "id": "d",
        "text": "df.select('Sales' > 100)"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En PySpark, .filter() y .where() son alias y ambos pueden recibir expresiones de columna o condiciones en forma de cadena SQL.",
    "domain": "Prepare and serve data",
    "twinOf": 73
  },
  {
    "id": "74-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Estás configurando una Data Pipeline. 1) Para ejecutar actividades en paralelo, usa: [opción]. 2) Para ejecutar actividades de forma condicional, usa: [opción].",
    "options": [
      {
        "id": "a",
        "text": "1) ForEach"
      },
      {
        "id": "b",
        "text": "1) Switch"
      },
      {
        "id": "c",
        "text": "2) If Condition"
      },
      {
        "id": "d",
        "text": "2) Filter"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "El bucle ForEach puede ejecutar las iteraciones en paralelo (si sequential es false). If Condition ejecuta ramas con base en lógica booleana.",
    "domain": "Prepare and serve data",
    "twinOf": 74
  },
  {
    "id": "75-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas reducir el tamaño de un modelo semántico. Encuentras una columna con alta cardinalidad (muchos valores únicos). ¿Qué técnica ayuda más?",
    "options": [
      {
        "id": "a",
        "text": "Dividir la columna"
      },
      {
        "id": "b",
        "text": "Cambiar el tipo de datos a Text"
      },
      {
        "id": "c",
        "text": "Agrupar valores"
      },
      {
        "id": "d",
        "text": "Ordenar la columna"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Por ejemplo, dividir un DateTime en Date y Time reduce drásticamente la cardinalidad (Date tiene ~365 valores por año y Time tiene 86400 por día, frente a los valores únicos combinados de DateTime).",
    "domain": "Implement and manage semantic models",
    "twinOf": 75
  },
  {
    "id": "76-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos formatos de archivo admiten la optimización V-Order en Fabric?",
    "options": [
      {
        "id": "a",
        "text": "Parquet"
      },
      {
        "id": "b",
        "text": "Delta (Parquet)"
      },
      {
        "id": "c",
        "text": "CSV"
      },
      {
        "id": "d",
        "text": "JSON"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "V-Order es una optimización de escritura para archivos Parquet, incluidos los administrados por Delta Lake.",
    "domain": "Prepare and serve data",
    "twinOf": 76
  },
  {
    "id": "77-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas acceder a una tabla de lakehouse usando una vista T-SQL. ¿Dónde debes crear la vista?",
    "options": [
      {
        "id": "a",
        "text": "En el SQL Endpoint del Lakehouse"
      },
      {
        "id": "b",
        "text": "En un notebook de Spark"
      },
      {
        "id": "c",
        "text": "En el modelo semántico"
      },
      {
        "id": "d",
        "text": "En Power Query"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El SQL Analytics Endpoint te permite crear vistas, TVF y administrar la seguridad SQL sobre los datos del lakehouse.",
    "domain": "Prepare and serve data",
    "twinOf": 77
  },
  {
    "id": "78-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Quieres compartir un solo informe con un usuario sin darle acceso al área de trabajo. ¿Qué característica debes usar?",
    "options": [
      {
        "id": "a",
        "text": "App"
      },
      {
        "id": "b",
        "text": "Vínculo para compartir (Share link)"
      },
      {
        "id": "c",
        "text": "Rol Viewer del área de trabajo"
      },
      {
        "id": "d",
        "text": "Deployment Pipeline"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Compartir un informe mediante un vínculo (Share) permite proporcionar acceso a ese elemento específico sin ser miembro del área de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 78
  },
  {
    "id": "79-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Estás creando un proceso ETL complejo. ¿Qué dos actividades pueden ejecutar un Notebook?",
    "options": [
      {
        "id": "a",
        "text": "Actividad Notebook en una canalización"
      },
      {
        "id": "b",
        "text": "Stored Procedure"
      },
      {
        "id": "c",
        "text": "Actividad Lookup"
      },
      {
        "id": "d",
        "text": "Actividad Web (llamando a una API)"
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "La actividad nativa 'Notebook' es la forma principal. Como alternativa, puedes desencadenar un notebook mediante la API de Fabric usando una actividad Web.",
    "domain": "Prepare and serve data",
    "twinOf": 79
  },
  {
    "id": "80-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas controlar las versiones de tu modelo semántico usando la integración con Git. ¿Qué configuración del área de trabajo se requiere?",
    "options": [
      {
        "id": "a",
        "text": "Git integration > Connect"
      },
      {
        "id": "b",
        "text": "OneLake Data Hub"
      },
      {
        "id": "c",
        "text": "Domains"
      },
      {
        "id": "d",
        "text": "Capacidad Premium"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Debes conectar el área de trabajo a un repositorio Git de Azure DevOps en la configuración del área de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 80
  },
  {
    "id": "81-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el principal beneficio de usar Direct Lake en lugar de DirectQuery?",
    "options": [
      {
        "id": "a",
        "text": "No hay límites de consultas."
      },
      {
        "id": "b",
        "text": "Mejor rendimiento (cercano a la velocidad de Import)."
      },
      {
        "id": "c",
        "text": "Compatibilidad con columnas calculadas."
      },
      {
        "id": "d",
        "text": "Funciona con cualquier base de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Direct Lake carga los datos de los archivos Parquet directamente en memoria a petición, lo que ofrece un rendimiento similar al de Import sin la latencia de actualización.",
    "domain": "Implement and manage semantic models",
    "twinOf": 81
  },
  {
    "id": "82-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas consultar datos en una base de datos KQL. Quieres calcular un promedio móvil. ¿Qué operador KQL debes usar?",
    "options": [
      {
        "id": "a",
        "text": "summarize"
      },
      {
        "id": "b",
        "text": "make-series"
      },
      {
        "id": "c",
        "text": "project"
      },
      {
        "id": "d",
        "text": "mv-expand"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El operador make-series crea una serie temporal y permite aplicar funciones como series_moving_avg.",
    "domain": "Implement and manage semantic models",
    "twinOf": 82
  },
  {
    "id": "83-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Identifica el límite de almacenamiento para: 1) Área de trabajo Pro 2) Área de trabajo en capacidad Premium.",
    "options": [
      {
        "id": "a",
        "text": "1) 10 GB/usuario"
      },
      {
        "id": "b",
        "text": "1) 1 GB/usuario"
      },
      {
        "id": "c",
        "text": "2) 100 TB"
      },
      {
        "id": "d",
        "text": "2) Sin límite fijo (administrado por CU)"
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "Los usuarios Pro tienen un límite de 10 GB. Las capacidades Premium/Fabric dependen del consumo de OneLake/CU, por lo que en la práctica no tienen un tope de almacenamiento fijo por área de trabajo (se aplican cargos).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 83
  },
  {
    "id": "84-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que un notebook se ejecute con High Concurrency. ¿Qué debes configurar?",
    "options": [
      {
        "id": "a",
        "text": "Workspace Settings > Spark"
      },
      {
        "id": "b",
        "text": "Notebook Settings > Session"
      },
      {
        "id": "c",
        "text": "Capacity Settings"
      },
      {
        "id": "d",
        "text": "Lakehouse Settings"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "High Concurrency (etiquetas de sesión) se configura en la configuración de sesión del Notebook.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 84
  },
  {
    "id": "85-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas promover un conjunto de datos para que sea la fuente autorizada de la organización. ¿Qué nivel de aprobación (endorsement) debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Promoted"
      },
      {
        "id": "b",
        "text": "Certified"
      },
      {
        "id": "c",
        "text": "Validated"
      },
      {
        "id": "d",
        "text": "Approved"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La certificación implica que el conjunto de datos cumple con los estándares de calidad de la organización y es autorizado. La promoción es para compartir entre pares.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 85
  },
  {
    "id": "86-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos lenguajes puedes usar para escribir un procedimiento almacenado en Fabric Warehouse?",
    "options": [
      {
        "id": "a",
        "text": "Python"
      },
      {
        "id": "b",
        "text": "T-SQL"
      },
      {
        "id": "c",
        "text": "Scala"
      },
      {
        "id": "d",
        "text": "R"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Fabric Warehouse (SQL) admite procedimientos almacenados en T-SQL.",
    "domain": "Prepare and serve data",
    "twinOf": 86
  },
  {
    "id": "87-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas revisar el linaje de un panel para ver qué lakehouse usa. ¿Qué vista debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Vista de lista (List view)"
      },
      {
        "id": "b",
        "text": "Vista de linaje (Lineage view)"
      },
      {
        "id": "c",
        "text": "Vista de mapa (Map view)"
      },
      {
        "id": "d",
        "text": "Vista de grafo (Graph view)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La vista de linaje (Lineage view) del área de trabajo muestra visualmente las dependencias entre elementos (Dashboard -> Report -> Semantic Model -> Lakehouse).",
    "domain": "Implement and manage semantic models",
    "twinOf": 87
  },
  {
    "id": "88-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una tabla Delta. Necesitas devolver el estado de la tabla tal como estaba ayer. ¿Qué característica debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Time Travel"
      },
      {
        "id": "b",
        "text": "Clonación"
      },
      {
        "id": "c",
        "text": "Instantáneas"
      },
      {
        "id": "d",
        "text": "Copias de seguridad"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Time Travel de Delta Lake permite consultar versiones anteriores de la tabla usando la sintaxis 'TIMESTAMP AS OF'.",
    "domain": "Prepare and serve data",
    "twinOf": 88
  },
  {
    "id": "89-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas identificar los cuellos de botella de rendimiento de una consulta DAX. ¿Qué herramienta proporciona el desglose más detallado de Storage Engine frente a Formula Engine?",
    "options": [
      {
        "id": "a",
        "text": "DAX Studio"
      },
      {
        "id": "b",
        "text": "Performance Analyzer de Power BI Desktop"
      },
      {
        "id": "c",
        "text": "SQL Profiler"
      },
      {
        "id": "d",
        "text": "VertiPaq Analyzer"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La característica Server Timings de DAX Studio proporciona una división detallada entre la duración y las consultas de SE (Storage Engine) y FE (Formula Engine).",
    "domain": "Implement and manage semantic models",
    "twinOf": 89
  },
  {
    "id": "90-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un objeto visual lento. Performance Analyzer muestra que 'DAX Query' es lo que más tiempo tarda. ¿Qué debes optimizar?",
    "options": [
      {
        "id": "a",
        "text": "El almacenamiento de columnas en memoria"
      },
      {
        "id": "b",
        "text": "La lógica de la medida"
      },
      {
        "id": "c",
        "text": "La representación del objeto visual"
      },
      {
        "id": "d",
        "text": "La conexión de red"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Si 'DAX Query' es el cuello de botella, se debe optimizar la lógica de cálculo de la medida o la estructura del modelo.",
    "domain": "Implement and manage semantic models",
    "twinOf": 90
  },
  {
    "id": "91-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un conjunto de datos predeterminado para un área de trabajo que se conecte a varios lakehouses. ¿Qué característica facilita esto?",
    "options": [
      {
        "id": "a",
        "text": "Direct Lake"
      },
      {
        "id": "b",
        "text": "Modelos compuestos (Composite Models)"
      },
      {
        "id": "c",
        "text": "Consultas entre bases de datos"
      },
      {
        "id": "d",
        "text": "OneLake Data Hub"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Aunque los modelos compuestos (Composite Models) permiten combinar orígenes, Direct Lake está construido sobre el Lakehouse. Para varios lakehouses, a menudo se usan accesos directos en un lakehouse central o un modelo Direct Lake personalizado.",
    "domain": "Prepare and serve data",
    "twinOf": 91
  },
  {
    "id": "92-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un trabajo de Spark que falla con 'Out of Memory'. ¿Qué configuración podría ayudar?",
    "options": [
      {
        "id": "a",
        "text": "Aumentar spark.executor.memory"
      },
      {
        "id": "b",
        "text": "Disminuir spark.driver.cores"
      },
      {
        "id": "c",
        "text": "Usar un tamaño de nodo más pequeño"
      },
      {
        "id": "d",
        "text": "Deshabilitar las variables de difusión (broadcast)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Aumentar la memoria del ejecutor da más RAM a las tareas que procesan los datos.",
    "domain": "Prepare and serve data",
    "twinOf": 92
  },
  {
    "id": "93-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Usas T-SQL para cargar datos en un warehouse. ¿Qué dos comandos puedes usar?",
    "options": [
      {
        "id": "a",
        "text": "COPY INTO"
      },
      {
        "id": "b",
        "text": "INSERT INTO ... SELECT"
      },
      {
        "id": "c",
        "text": "BULK INSERT"
      },
      {
        "id": "d",
        "text": "OPENROWSET"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "COPY INTO es el comando de carga de alto rendimiento preferido. INSERT INTO ... SELECT también es válido para el movimiento interno.",
    "domain": "Prepare and serve data",
    "twinOf": 93
  },
  {
    "id": "94-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un entorno de prueba que refleje los datos de producción. Quieres evitar duplicar los costos de almacenamiento. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Clonación de tablas (Table Cloning)"
      },
      {
        "id": "b",
        "text": "Copy Activity"
      },
      {
        "id": "c",
        "text": "Flujo de datos"
      },
      {
        "id": "d",
        "text": "Accesos directos"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los clones sin copia de datos (Table Cloning) permiten crear una réplica que hace referencia a los mismos archivos, sin generar inicialmente costos de almacenamiento adicionales.",
    "domain": "Prepare and serve data",
    "twinOf": 94
  },
  {
    "id": "95-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas supervisar el historial de actualizaciones de un Dataflow Gen2. ¿Dónde debes buscar?",
    "options": [
      {
        "id": "a",
        "text": "Settings > Refresh History"
      },
      {
        "id": "b",
        "text": "Monitoring Hub"
      },
      {
        "id": "c",
        "text": "Lineage View"
      },
      {
        "id": "d",
        "text": "Tanto A como B"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Puedes verlo en la configuración del Dataflow o en el Monitoring Hub centralizado.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 95
  },
  {
    "id": "96-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás depurando una canalización. Quieres ver el JSON detallado de entrada y salida de una actividad específica. ¿En qué haces clic?",
    "options": [
      {
        "id": "a",
        "text": "El icono de anteojos (Output) / icono de flecha (Input)"
      },
      {
        "id": "b",
        "text": "El nombre de la actividad"
      },
      {
        "id": "c",
        "text": "El ID de ejecución de la canalización"
      },
      {
        "id": "d",
        "text": "El botón 'Edit'"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En la vista de supervisión, los iconos de entrada y salida de cada fila de actividad proporcionan las cargas útiles JSON.",
    "domain": "Prepare and serve data",
    "twinOf": 96
  },
  {
    "id": "97-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas aplicar automáticamente una etiqueta de confidencialidad a todos los datos nuevos de un área de trabajo específica. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Una directiva de etiquetas en Purview"
      },
      {
        "id": "b",
        "text": "Workspace settings > Default label"
      },
      {
        "id": "c",
        "text": "Directiva DLP"
      },
      {
        "id": "d",
        "text": "Botón Sensitivity en Power BI Desktop"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las directivas de etiquetas de Microsoft Purview Information Protection pueden exigir etiquetas predeterminadas para el contenido nuevo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 97
  },
  {
    "id": "98-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "RLS del modelo semántico: 1) Para definir roles de RLS, usa: [opción]. 2) Para probar roles de RLS, usa: [opción].",
    "options": [
      {
        "id": "a",
        "text": "1) Power BI Desktop / Service"
      },
      {
        "id": "b",
        "text": "1) SQL Endpoint"
      },
      {
        "id": "c",
        "text": "2) View as roles"
      },
      {
        "id": "d",
        "text": "2) Analyze in Excel"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Defines la RLS en Desktop o en el servicio. La validas usando la característica 'View as roles'.",
    "domain": "Implement and manage semantic models",
    "twinOf": 98
  },
  {
    "id": "99-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que un KQL Queryset sea portable y se pueda controlar por versiones. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Guardarlo como archivo .kql"
      },
      {
        "id": "b",
        "text": "Conectar el área de trabajo a Git"
      },
      {
        "id": "c",
        "text": "Copiarlo y pegarlo en el Bloc de notas"
      },
      {
        "id": "d",
        "text": "Exportarlo a CSV"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Conectar el área de trabajo a Git permite confirmar (commit) y versionar los KQL querysets (y otros elementos).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 99
  },
  {
    "id": "100-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás creando un informe con criterios de accesibilidad. Necesitas asegurarte de que los lectores de pantalla lean los datos de los objetos visuales en un orden lógico. ¿Qué debes configurar?",
    "options": [
      {
        "id": "a",
        "text": "Orden de tabulación (Tab order)"
      },
      {
        "id": "b",
        "text": "Orden Z (Z-order)"
      },
      {
        "id": "c",
        "text": "Orden de capas (Layer order)"
      },
      {
        "id": "d",
        "text": "Orden de marcadores (Bookmark order)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El 'Tab order' del panel Selection determina la secuencia en la que las herramientas de accesibilidad navegan por los objetos visuales.",
    "domain": "Implement and manage semantic models",
    "twinOf": 100
  },
  {
    "id": "101-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas proteger las filas de una tabla de Lakehouse con base en el rol del usuario. Planeas usar el SQL Endpoint. ¿Qué debes crear?",
    "options": [
      {
        "id": "a",
        "text": "Una directiva de seguridad"
      },
      {
        "id": "b",
        "text": "Un procedimiento almacenado"
      },
      {
        "id": "c",
        "text": "Una función con valores de tabla (TVF)"
      },
      {
        "id": "d",
        "text": "Una vista"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las funciones insertadas con valores de tabla (TVF) se usan a menudo en SQL para encapsular la lógica de seguridad (predicado de RLS) que se puede aplicar a las tablas.",
    "domain": "Prepare and serve data",
    "twinOf": 101
  },
  {
    "id": "102-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un archivo CSV grande (10 GB) en la sección Files. Necesitas consultarlo de forma eficiente usando T-SQL. ¿Qué debes hacer primero?",
    "options": [
      {
        "id": "a",
        "text": "Crear un acceso directo."
      },
      {
        "id": "b",
        "text": "Cargarlo en una tabla Delta."
      },
      {
        "id": "c",
        "text": "Consultarlo directamente usando OPENROWSET."
      },
      {
        "id": "d",
        "text": "Dividir el archivo."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Cargarlo en formato Delta (Parquet) proporciona un rendimiento mucho mejor para conjuntos de datos grandes en comparación con consultar el CSV sin procesar, gracias a la compresión y las estadísticas.",
    "domain": "Prepare and serve data",
    "twinOf": 102
  },
  {
    "id": "103-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas implementar una Slowly Changing Dimension (SCD) de tipo 2 en un Dataflow Gen2. ¿Qué transformación debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Merge queries"
      },
      {
        "id": "b",
        "text": "Add column from examples"
      },
      {
        "id": "c",
        "text": "Group by"
      },
      {
        "id": "d",
        "text": "Pivot column"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Para implementar una SCD de tipo 2, normalmente combinas los datos entrantes con la tabla de dimensiones existente para identificar los cambios y los registros nuevos.",
    "domain": "Prepare and serve data",
    "twinOf": 103
  },
  {
    "id": "104-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas reducir el tiempo de actualización de un modelo semántico. ¿Qué dos acciones en Power Query Online pueden ayudar a limitar los datos cargados?",
    "options": [
      {
        "id": "a",
        "text": "Quitar columnas"
      },
      {
        "id": "b",
        "text": "Filtrar filas"
      },
      {
        "id": "c",
        "text": "Cambiar los tipos de columna"
      },
      {
        "id": "d",
        "text": "Cambiar el nombre de las columnas"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "Quitar las columnas no usadas y filtrar filas al principio de la consulta reduce el volumen de datos transferidos y procesados.",
    "domain": "Implement and manage semantic models",
    "twinOf": 104
  },
  {
    "id": "105-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás administrando una capacidad. Necesitas suavizar los picos de uso de proceso para evitar la limitación (throttling). ¿Qué concepto usa Fabric?",
    "options": [
      {
        "id": "a",
        "text": "Escalado automático (Autoscale)"
      },
      {
        "id": "b",
        "text": "Bursting y Smoothing"
      },
      {
        "id": "c",
        "text": "Equilibrio de carga"
      },
      {
        "id": "d",
        "text": "Plegado de consultas (query folding)"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las capacidades de Fabric permiten el 'bursting' (usar más CPU de la adquirida durante periodos cortos) y luego 'suavizan' (smoothing) el uso a lo largo del tiempo (normalmente 24 h para operaciones en segundo plano, menos para las interactivas).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 105
  },
  {
    "id": "106-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas conectarte a una base de datos de SQL Server local desde un Dataflow Gen2. ¿Qué necesitas?",
    "options": [
      {
        "id": "a",
        "text": "On-premises data gateway"
      },
      {
        "id": "b",
        "text": "VNET Data Gateway"
      },
      {
        "id": "c",
        "text": "VPN Gateway"
      },
      {
        "id": "d",
        "text": "ExpressRoute"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El On-premises data gateway es necesario para conectar de forma segura los orígenes de datos locales con el servicio en la nube.",
    "domain": "Prepare and serve data",
    "twinOf": 106
  },
  {
    "id": "107-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Clasifica el rendimiento de proceso de un modelo semántico del más rápido al más lento: 1) Formato de conjunto de datos grande. 2) Conjunto de datos pequeño. 3) DirectQuery.",
    "options": [
      {
        "id": "a",
        "text": "1, 2, 3"
      },
      {
        "id": "b",
        "text": "2, 1, 3"
      },
      {
        "id": "c",
        "text": "3, 1, 2"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El modo en memoria (Import) es el más rápido. Los conjuntos de datos grandes pueden ser un poco más lentos que los pequeños debido a la paginación, pero ambos son más rápidos que DirectQuery (que depende de la base de datos de origen).",
    "domain": "Implement and manage semantic models",
    "twinOf": 107
  },
  {
    "id": "108-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una consulta KQL demasiado lenta. Busca una cadena en una columna de texto. `where Column has 'text'`. ¿Cómo la optimizas?",
    "options": [
      {
        "id": "a",
        "text": "Usar `contains` en lugar de `has`"
      },
      {
        "id": "b",
        "text": "Usar `has_cs` (distingue mayúsculas y minúsculas)"
      },
      {
        "id": "c",
        "text": "Asegurarte de que la columna esté indexada"
      },
      {
        "id": "d",
        "text": "Usar `startswith`"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "`has` ya está indexado (búsqueda de términos). `has_cs` puede ser más rápido si es aceptable distinguir mayúsculas y minúsculas. `contains` es mucho más lento (examen completo). `has` es, en general, la mejor opción para la búsqueda de términos.",
    "domain": "Prepare and serve data",
    "twinOf": 108
  },
  {
    "id": "109-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un objeto visual que muestre la distribución de las ventas entre países. ¿Qué objeto visual de mapa es el mejor para sombrear áreas?",
    "options": [
      {
        "id": "a",
        "text": "Bubble Map"
      },
      {
        "id": "b",
        "text": "Filled Map (coroplético)"
      },
      {
        "id": "c",
        "text": "Shape Map"
      },
      {
        "id": "d",
        "text": "Azure Map"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los Filled Maps (coropléticos) están diseñados para sombrear áreas geográficas (países, estados) con base en un valor.",
    "domain": "Prepare and serve data",
    "twinOf": 109
  },
  {
    "id": "110-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una tabla grande. Necesitas crear una relación con otra tabla, pero la columna clave contiene muchos valores en blanco. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Filtrar los valores en blanco en Power Query."
      },
      {
        "id": "b",
        "text": "Reemplazar los valores en blanco por un valor predeterminado (por ejemplo, -1)."
      },
      {
        "id": "c",
        "text": "Usar la opción 'Assume Referential Integrity'."
      },
      {
        "id": "d",
        "text": "Crear una relación de varios a varios."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Reemplazar los valores en blanco por una clave específica (como -1) que exista en la dimensión ('Unknown') garantiza la integridad de los datos y un manejo adecuado en el modelo, en lugar de depender del comportamiento implícito de los valores en blanco.",
    "domain": "Implement and manage semantic models",
    "twinOf": 110
  },
  {
    "id": "111-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas exportar un informe de Power BI a PDF mediante programación. ¿Qué API debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Reports - Export To File"
      },
      {
        "id": "b",
        "text": "Reports - Get Report"
      },
      {
        "id": "c",
        "text": "Dashboards - Get Dashboard"
      },
      {
        "id": "d",
        "text": "Capacities - Get Capacities"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La API 'Export To File' permite exportar informes a PDF, PPTX y PNG.",
    "domain": "Explore and visualize data",
    "twinOf": 111
  },
  {
    "id": "112-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas compartir un conjunto de datos entre distintas áreas de trabajo. ¿Qué dos requisitos se deben cumplir?",
    "options": [
      {
        "id": "a",
        "text": "El usuario debe tener permiso Build sobre el conjunto de datos."
      },
      {
        "id": "b",
        "text": "El conjunto de datos debe estar en un área de trabajo Premium."
      },
      {
        "id": "c",
        "text": "Las áreas de trabajo deben estar en la misma capacidad."
      },
      {
        "id": "d",
        "text": "La configuración del inquilino 'Use datasets across workspaces' debe estar habilitada."
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "Compartir conjuntos de datos (conjuntos de datos compartidos) requiere el permiso Build y que la configuración del inquilino esté habilitada.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 112
  },
  {
    "id": "113-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás escribiendo una consulta DAX. Necesitas obtener una columna de una tabla relacionada que no tiene una relación activa directa, pero sí una inactiva. ¿Qué función usas?",
    "options": [
      {
        "id": "a",
        "text": "RELATED"
      },
      {
        "id": "b",
        "text": "LOOKUPVALUE"
      },
      {
        "id": "c",
        "text": "USERELATIONSHIP"
      },
      {
        "id": "d",
        "text": "TREATAS"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "USERELATIONSHIP se usa dentro de CALCULATE para activar una relación inactiva específica para ese cálculo.",
    "domain": "Implement and manage semantic models",
    "twinOf": 113
  },
  {
    "id": "114-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que tu canalización maneje la deriva de esquema (schema drift) en los archivos de origen (CSV). Se pueden agregar o quitar columnas. ¿Qué actividad de Data Flow debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Mapping Data Flow con 'Allow Schema Drift' habilitado."
      },
      {
        "id": "b",
        "text": "Copy Activity con asignación explícita."
      },
      {
        "id": "c",
        "text": "Stored Procedure."
      },
      {
        "id": "d",
        "text": "Lookup Activity."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los Mapping Data Flows (en ADF/Synapse/Fabric) admiten la deriva de esquema (schema drift) para manejar dinámicamente las columnas que cambian.",
    "domain": "Prepare and serve data",
    "twinOf": 114
  },
  {
    "id": "115-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Planeas usar una fuente personalizada en un informe de Power BI. ¿Cuál es la limitación?",
    "options": [
      {
        "id": "a",
        "text": "Solo puedes usar las fuentes predeterminadas."
      },
      {
        "id": "b",
        "text": "La fuente debe estar instalada en el equipo del usuario para ser visible."
      },
      {
        "id": "c",
        "text": "Las fuentes se insertan en el PBIX."
      },
      {
        "id": "d",
        "text": "Puedes importar cualquier fuente web."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "PBI no inserta las fuentes. Si se usa una fuente personalizada, debe estar presente en el dispositivo de visualización; de lo contrario, se recurre a una fuente predeterminada.",
    "domain": "Prepare and serve data",
    "twinOf": 115
  },
  {
    "id": "116-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas identificar quién eliminó un área de trabajo. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "El registro de auditoría de Microsoft 365 (Microsoft 365 Audit Log)"
      },
      {
        "id": "b",
        "text": "La aplicación Fabric Capacity Metrics"
      },
      {
        "id": "c",
        "text": "La vista de linaje del área de trabajo"
      },
      {
        "id": "d",
        "text": "Azure Monitor"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El registro de auditoría de M365 (Purview Audit) registra actividades administrativas como crear o eliminar áreas de trabajo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 116
  },
  {
    "id": "117-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Estás diseñando una tabla de agregación. ¿Qué dos modos de almacenamiento usa normalmente la tabla de agregación?",
    "options": [
      {
        "id": "a",
        "text": "Import"
      },
      {
        "id": "b",
        "text": "DirectQuery"
      },
      {
        "id": "c",
        "text": "Dual"
      },
      {
        "id": "d",
        "text": "Live Connection"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Las agregaciones son más eficaces cuando se usa el modo Import (por velocidad) para la tabla de resumen. El modo Dual se usa para las tablas de dimensiones para que puedan atender tanto la agregación en Import como el detalle en DirectQuery.",
    "domain": "Implement and manage semantic models",
    "twinOf": 117
  },
  {
    "id": "118-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas ejecutar un notebook según una programación, pero solo si existe un archivo en el Lakehouse. ¿Qué debes combinar en la canalización?",
    "options": [
      {
        "id": "a",
        "text": "Get Metadata + If Condition + Notebook"
      },
      {
        "id": "b",
        "text": "Solo la actividad Notebook"
      },
      {
        "id": "c",
        "text": "Copy Activity"
      },
      {
        "id": "d",
        "text": "Validation Activity"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Get Metadata comprueba si el archivo existe. If Condition evalúa el valor booleano de salida y, si es True, desencadena el Notebook.",
    "domain": "Prepare and serve data",
    "twinOf": 118
  },
  {
    "id": "119-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico. Necesitas actualizar la cadena de conexión del origen de datos mediante programación. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Power BI REST API (Update Parameters)"
      },
      {
        "id": "b",
        "text": "Power BI Desktop"
      },
      {
        "id": "c",
        "text": "Power Automate"
      },
      {
        "id": "d",
        "text": "XMLA Endpoint (TMSL/TOM)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La API 'Update Parameters in Group' (o Update Datasources) permite cambiar los detalles de la conexión.",
    "domain": "Implement and manage semantic models",
    "twinOf": 119
  },
  {
    "id": "120-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Selecciona la visualización correcta: 1) Para mostrar la correlación entre dos variables: [opción]. 2) Para mostrar la composición de un todo: [opción].",
    "options": [
      {
        "id": "a",
        "text": "1) Gráfico de dispersión (Scatter Chart)"
      },
      {
        "id": "b",
        "text": "1) Gráfico de líneas (Line Chart)"
      },
      {
        "id": "c",
        "text": "2) Gráfico circular/de anillo (Pie/Donut Chart)"
      },
      {
        "id": "d",
        "text": "2) Tarjeta (Card)"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "Los gráficos de dispersión son el estándar para la correlación. Los gráficos circulares, de anillo y Treemap son para mostrar la relación de las partes con el todo.",
    "domain": "Explore and visualize data",
    "twinOf": 120
  },
  {
    "id": "121-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas impedir que los usuarios exporten datos de un objeto visual específico. ¿Qué configuración del objeto visual debes cambiar?",
    "options": [
      {
        "id": "a",
        "text": "Header icons > Icons > Export data: Off"
      },
      {
        "id": "b",
        "text": "Tooltip: Off"
      },
      {
        "id": "c",
        "text": "Visual Interaction: None"
      },
      {
        "id": "d",
        "text": "Drill down: Off"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Deshabilitar el icono 'Export data' en la configuración del encabezado del objeto visual impide que los usuarios exporten.",
    "domain": "Explore and visualize data",
    "twinOf": 121
  },
  {
    "id": "122-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas conectarte al punto de conexión XMLA de un área de trabajo. ¿Qué formato de URL es correcto?",
    "options": [
      {
        "id": "a",
        "text": "powerbi://api.powerbi.com/v1.0/myorg/[workspace_name]"
      },
      {
        "id": "b",
        "text": "https://app.powerbi.com/groups/[id]"
      },
      {
        "id": "c",
        "text": "wss://powerbi.com..."
      },
      {
        "id": "d",
        "text": "sql://server_name"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La cadena de conexión para XMLA comienza con 'powerbi://'.",
    "domain": "Implement and manage semantic models",
    "twinOf": 122
  },
  {
    "id": "123-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Ejecutas `vacuume` en una tabla delta. ¿Cuál es el propósito principal?",
    "options": [
      {
        "id": "a",
        "text": "Eliminar los archivos a los que ya no hace referencia el registro de transacciones."
      },
      {
        "id": "b",
        "text": "Compactar los archivos pequeños."
      },
      {
        "id": "c",
        "text": "Calcular estadísticas."
      },
      {
        "id": "d",
        "text": "Ordenar los datos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "VACUUM elimina los archivos de datos antiguos que no forman parte del estado más reciente (más allá del periodo de retención), lo que libera almacenamiento.",
    "domain": "Prepare and serve data",
    "twinOf": 123
  },
  {
    "id": "124-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas implementar un informe en Test y Prod. Quieres asegurarte de que el informe de Test se conecte a la base de datos de Test y el de Prod a la base de datos de Prod. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Reglas de la canalización de implementación (Deployment Pipeline Rules)"
      },
      {
        "id": "b",
        "text": "Parámetros en el conjunto de datos"
      },
      {
        "id": "c",
        "text": "Cambio manual"
      },
      {
        "id": "d",
        "text": "Flujos de datos"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "Defines parámetros para los detalles de la conexión y luego usas las reglas de la canalización de implementación (Deployment Pipeline Rules) para asignar valores de parámetro específicos a cada fase (Test frente a Prod).",
    "domain": "Prepare and serve data",
    "twinOf": 124
  },
  {
    "id": "125-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Revisas la consulta de evaluación de un modelo DirectQuery. Ves `SELECT ... WHERE 1=0`. ¿Qué es esto?",
    "options": [
      {
        "id": "a",
        "text": "Una consulta de prueba de conexión."
      },
      {
        "id": "b",
        "text": "Un error."
      },
      {
        "id": "c",
        "text": "Una verificación del esquema."
      },
      {
        "id": "d",
        "text": "Una verificación de permisos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Power BI envía una consulta con `WHERE 1=0` para validar el esquema (nombres de columnas, tipos) sin recuperar ninguna fila de datos.",
    "domain": "Prepare and serve data",
    "twinOf": 125
  },
  {
    "id": "126-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas usar un notebook para visualizar la distribución de los datos. ¿Qué biblioteca está integrada y optimizada para gráficos sencillos?",
    "options": [
      {
        "id": "a",
        "text": "matplotlib"
      },
      {
        "id": "b",
        "text": "bokeh"
      },
      {
        "id": "c",
        "text": "Widget de gráficos de Fabric"
      },
      {
        "id": "d",
        "text": "Función display() (Chart View)"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El comando `display(df)` ofrece una interfaz integrada para cambiar a Chart View y hacer un perfilado rápido.",
    "domain": "Explore and visualize data",
    "twinOf": 126
  },
  {
    "id": "127-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás creando una medida. Quieres ignorar todos los filtros de la tabla 'Date' pero conservar los filtros de 'Region'. ¿Función?",
    "options": [
      {
        "id": "a",
        "text": "ALL(Date)"
      },
      {
        "id": "b",
        "text": "ALLEXCEPT(Sales, Region)"
      },
      {
        "id": "c",
        "text": "REMOVEFILTERS(Date)"
      },
      {
        "id": "d",
        "text": "Respuesta A o C"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Tanto ALL(Table) como REMOVEFILTERS(Table), usados como modificadores de Calculate, eliminan los filtros de esa tabla.",
    "domain": "Implement and manage semantic models",
    "twinOf": 127
  },
  {
    "id": "128-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas habilitar Q&A para tu dataset. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Crear sinónimos para las columnas."
      },
      {
        "id": "b",
        "text": "Habilitar la configuración de Q&A en la configuración del dataset."
      },
      {
        "id": "c",
        "text": "Agregar un objeto visual de Q&A."
      },
      {
        "id": "d",
        "text": "Todo lo anterior mejora la experiencia."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Aunque Q&A funciona de forma predeterminada, los sinónimos son cruciales. Habilitar la configuración de forma explícita y probar con el objeto visual completa la implementación.",
    "domain": "Explore and visualize data",
    "twinOf": 128
  },
  {
    "id": "129-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un script de Python en Power Query. Falla en el Service. ¿Por qué?",
    "options": [
      {
        "id": "a",
        "text": "Python no es compatible en el Service para workspaces estándar."
      },
      {
        "id": "b",
        "text": "Necesitas un Personal Gateway."
      },
      {
        "id": "c",
        "text": "El script es demasiado largo."
      },
      {
        "id": "d",
        "text": "El Service solo admite R."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los scripts de Python (y de R) en Power Query requieren un Personal Gateway para ejecutarse cuando se actualizan en el Service (a diferencia de los objetos visuales de Python).",
    "domain": "Prepare and serve data",
    "twinOf": 129
  },
  {
    "id": "130-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos roles pueden crear un shortcut en un Lakehouse?",
    "options": [
      {
        "id": "a",
        "text": "Admin"
      },
      {
        "id": "b",
        "text": "Member"
      },
      {
        "id": "c",
        "text": "Contributor"
      },
      {
        "id": "d",
        "text": "Viewer"
      }
    ],
    "correctIds": [
      "a",
      "b",
      "c"
    ],
    "explanation": "Se necesitan permisos de escritura. Admin, Member y Contributor tienen acceso de escritura a los elementos.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 130
  },
  {
    "id": "131-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Evalúa: 1) Los shortcuts de OneLake pueden apuntar a Amazon S3. 2) Los shortcuts de OneLake copian los datos a OneLake.",
    "options": [
      {
        "id": "a",
        "text": "1) Verdadero"
      },
      {
        "id": "b",
        "text": "1) Falso"
      },
      {
        "id": "c",
        "text": "2) Verdadero"
      },
      {
        "id": "d",
        "text": "2) Falso"
      }
    ],
    "correctIds": [
      "a",
      "d"
    ],
    "explanation": "1) Verdadero, S3 es un origen compatible. 2) Falso, los shortcuts son referencias; no duplican (copian) los datos.",
    "domain": "Prepare and serve data",
    "twinOf": 131
  },
  {
    "id": "132-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un informe paginado. ¿Qué herramienta debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Power BI Desktop"
      },
      {
        "id": "b",
        "text": "Power BI Report Builder"
      },
      {
        "id": "c",
        "text": "Excel"
      },
      {
        "id": "d",
        "text": "Notepad"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Power BI Report Builder es la herramienta especializada para crear informes RDL (paginados).",
    "domain": "Explore and visualize data",
    "twinOf": 132
  },
  {
    "id": "133-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás creando un esquema de estrella. Tienes una tabla 'Sales' y otra 'Budget'. Ambas comparten 'Date' y 'Product'. ¿Cómo lo modelas?",
    "options": [
      {
        "id": "a",
        "text": "Combinar Sales y Budget."
      },
      {
        "id": "b",
        "text": "Relacionar Date y Product con Sales y con Budget (tablas de hechos)."
      },
      {
        "id": "c",
        "text": "Relacionar Sales directamente con Budget."
      },
      {
        "id": "d",
        "text": "Crear una tabla puente."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Este es un esquema de estrella clásico con varias tablas de hechos. Las dimensiones compartidas (Conformed Dimensions) deben relacionarse con ambas tablas de hechos.",
    "domain": "Implement and manage semantic models",
    "twinOf": 133
  },
  {
    "id": "134-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas realizar una combinación con coincidencia aproximada (fuzzy match) en Power Query. ¿Qué necesitas configurar?",
    "options": [
      {
        "id": "a",
        "text": "Similarity Threshold"
      },
      {
        "id": "b",
        "text": "Exact Match"
      },
      {
        "id": "c",
        "text": "Case Sensitivity"
      },
      {
        "id": "d",
        "text": "Join Kind: Inner"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El umbral de similitud (de 0.00 a 1.00) determina qué tan parecidas deben ser las cadenas para considerarse una coincidencia.",
    "domain": "Prepare and serve data",
    "twinOf": 134
  },
  {
    "id": "135-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que la columna 'SortOrder' se use para ordenar 'MonthName'. ¿Qué propiedad configuras?",
    "options": [
      {
        "id": "a",
        "text": "Sort by Column"
      },
      {
        "id": "b",
        "text": "Group by Column"
      },
      {
        "id": "c",
        "text": "Data Category"
      },
      {
        "id": "d",
        "text": "Format String"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La característica 'Sort by Column' permite definir un orden personalizado (por ejemplo, cronológico) para una columna de texto.",
    "domain": "Implement and manage semantic models",
    "twinOf": 135
  },
  {
    "id": "136-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas obtener la referencia cultural (idioma) del usuario en un informe para localizar el contenido. ¿Función?",
    "options": [
      {
        "id": "a",
        "text": "USERCULTURE()"
      },
      {
        "id": "b",
        "text": "USERNAME()"
      },
      {
        "id": "c",
        "text": "FORMAT()"
      },
      {
        "id": "d",
        "text": "CULTURE()"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "USERCULTURE() devuelve la configuración regional del navegador o la interfaz del usuario (por ejemplo, 'en-US').",
    "domain": "Implement and manage semantic models",
    "twinOf": 136
  },
  {
    "id": "137-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás optimizando un modelo. Ves que una columna 'TransactionID' usa mucha memoria. No se usa en ningún objeto visual. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Ocultar la columna."
      },
      {
        "id": "b",
        "text": "Eliminar la columna."
      },
      {
        "id": "c",
        "text": "Cambiar el tipo a Text."
      },
      {
        "id": "d",
        "text": "Moverla a una carpeta."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Ocultar no ahorra memoria. Eliminar las columnas que no se usan es la mejor optimización para los modelos Import.",
    "domain": "Implement and manage semantic models",
    "twinOf": 137
  },
  {
    "id": "138-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una nueva medida igual a [Total Sales] * 1.1. ¿Cuál es el mejor lugar para crearla?",
    "options": [
      {
        "id": "a",
        "text": "En el informe (implícita)."
      },
      {
        "id": "b",
        "text": "En el modelo semántico (explícita)."
      },
      {
        "id": "c",
        "text": "En Power Query."
      },
      {
        "id": "d",
        "text": "En la base de datos de origen."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Crear medidas explícitas en el modelo favorece la reutilización, la coherencia y el mantenimiento.",
    "domain": "Implement and manage semantic models",
    "twinOf": 138
  },
  {
    "id": "139-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos operaciones rompen el Query Folding en Power Query?",
    "options": [
      {
        "id": "a",
        "text": "Filtrar filas"
      },
      {
        "id": "b",
        "text": "Agregar una columna de índice (Index Column)"
      },
      {
        "id": "c",
        "text": "Cambiar el tipo de datos (a veces)"
      },
      {
        "id": "d",
        "text": "Selección de columnas"
      }
    ],
    "correctIds": [
      "b",
      "c"
    ],
    "explanation": "Agregar una Index Column requiere cargar los datos en memoria (por lo general). Cambiar los tipos de datos a veces puede romper el folding, según la compatibilidad del origen.",
    "domain": "Prepare and serve data",
    "twinOf": 139
  },
  {
    "id": "140-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas mejorar la experiencia de Q&A. ¿Qué configuración permite definir términos como 'awesome products' = 'Ratings > 4.5'?",
    "options": [
      {
        "id": "a",
        "text": "Teach Q&A"
      },
      {
        "id": "b",
        "text": "Synonyms"
      },
      {
        "id": "c",
        "text": "Relationships"
      },
      {
        "id": "d",
        "text": "Linguistic Schema"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "'Teach Q&A' te permite definir términos o lógica de negocio específicos (phrasings) para el motor.",
    "domain": "Explore and visualize data",
    "twinOf": 140
  },
  {
    "id": "141-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un informe con muchos objetos visuales. Se representa lentamente. Quieres ver cuál es el objeto visual más lento. ¿Herramienta?",
    "options": [
      {
        "id": "a",
        "text": "Performance Analyzer"
      },
      {
        "id": "b",
        "text": "Selection Pane"
      },
      {
        "id": "c",
        "text": "Bookmarks"
      },
      {
        "id": "d",
        "text": "Sync Slicers"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Performance Analyzer registra el tiempo que tarda cada objeto visual en consultar, representarse y en otros procesamientos.",
    "domain": "Implement and manage semantic models",
    "twinOf": 141
  },
  {
    "id": "142-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un título dinámico para un objeto visual según la selección de una segmentación. ¿Qué debes usar?",
    "options": [
      {
        "id": "a",
        "text": "Formato condicional con una medida"
      },
      {
        "id": "b",
        "text": "Un cuadro de texto"
      },
      {
        "id": "c",
        "text": "No es posible."
      },
      {
        "id": "d",
        "text": "Un objeto visual Card agrupado."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Puedes configurar la propiedad de texto Title para usar 'fx' (formato condicional) y seleccionar una medida de texto que construya la cadena dinámica.",
    "domain": "Implement and manage semantic models",
    "twinOf": 142
  },
  {
    "id": "143-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Administras una arquitectura data mesh. Tienes dominios. ¿Qué puedes asignar a un dominio?",
    "options": [
      {
        "id": "a",
        "text": "Workspaces"
      },
      {
        "id": "b",
        "text": "Informes individuales"
      },
      {
        "id": "c",
        "text": "Usuarios"
      },
      {
        "id": "d",
        "text": "Capacidades"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En Fabric, los dominios son agrupaciones lógicas de workspaces.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 143
  },
  {
    "id": "144-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas proporcionar una experiencia de navegación personalizada para una colección de informes. ¿Qué debes crear?",
    "options": [
      {
        "id": "a",
        "text": "Power BI App"
      },
      {
        "id": "b",
        "text": "Dashboard"
      },
      {
        "id": "c",
        "text": "Workspace"
      },
      {
        "id": "d",
        "text": "Carpeta"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las Power BI Apps permiten agrupar contenido relacionado (informes, dashboards) y diseñar un menú de navegación personalizado.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 144
  },
  {
    "id": "145-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que los datos de una columna sean únicos. ¿En Power Query?",
    "options": [
      {
        "id": "a",
        "text": "Remove Duplicates"
      },
      {
        "id": "b",
        "text": "Keep Duplicates"
      },
      {
        "id": "c",
        "text": "Group By"
      },
      {
        "id": "d",
        "text": "Transpose"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Remove Duplicates conserva solo la primera instancia de cada valor en las columnas seleccionadas.",
    "domain": "Prepare and serve data",
    "twinOf": 145
  },
  {
    "id": "146-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una jerarquía 'Product Category' > 'Subcategory'. Quieres explorar en profundidad en una matriz. ¿Qué icono haces clic?",
    "options": [
      {
        "id": "a",
        "text": "Flecha simple hacia abajo (modo de exploración)"
      },
      {
        "id": "b",
        "text": "Flecha doble hacia abajo (ir al siguiente nivel)"
      },
      {
        "id": "c",
        "text": "Flecha bifurcada (expandir hacia abajo)"
      },
      {
        "id": "d",
        "text": "Focus Mode"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La flecha bifurcada (expandir todo un nivel hacia abajo) se usa normalmente para ver el elemento primario Y el secundario de la jerarquía (por ejemplo, filas de Category y Subcategory).",
    "domain": "Prepare and serve data",
    "twinOf": 146
  },
  {
    "id": "147-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un objeto visual KPI. ¿Qué tres campos necesitas?",
    "options": [
      {
        "id": "a",
        "text": "Value, Trend Axis, Target"
      },
      {
        "id": "b",
        "text": "X, Y, Legend"
      },
      {
        "id": "c",
        "text": "Category, Value, Tooltips"
      },
      {
        "id": "d",
        "text": "Latitude, Longitude, Size"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Un objeto visual KPI requiere un indicador (Value), un eje de tendencia (Date) y, opcionalmente, una meta (Target).",
    "domain": "Explore and visualize data",
    "twinOf": 147
  },
  {
    "id": "148-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Quieres que tu informe se vea bien en dispositivos móviles. ¿Qué debes hacer?",
    "options": [
      {
        "id": "a",
        "text": "Crear una vista de diseño móvil (Mobile Layout)."
      },
      {
        "id": "b",
        "text": "Hacer las páginas más pequeñas."
      },
      {
        "id": "c",
        "text": "Usar solo Cards."
      },
      {
        "id": "d",
        "text": "Nada, es automático."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Power BI Desktop te permite diseñar un Mobile Layout específico para orientación vertical.",
    "domain": "Prepare and serve data",
    "twinOf": 148
  },
  {
    "id": "149-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una tabla con 100 columnas. Solo necesitas 10. ¿Mejor práctica?",
    "options": [
      {
        "id": "a",
        "text": "Quitar las demás columnas en Power Query."
      },
      {
        "id": "b",
        "text": "Ocultarlas en la vista de informe."
      },
      {
        "id": "c",
        "text": "Eliminarlas del origen."
      },
      {
        "id": "d",
        "text": "Ignorarlas."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Quitarlas en PQ garantiza que no se carguen en la memoria del modelo.",
    "domain": "Prepare and serve data",
    "twinOf": 149
  },
  {
    "id": "150-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas parametrizar el nombre del servidor en tu implementación. ¿Cómo se llama la característica?",
    "options": [
      {
        "id": "a",
        "text": "Query Parameters"
      },
      {
        "id": "b",
        "text": "Field Parameters"
      },
      {
        "id": "c",
        "text": "What-if Parameters"
      },
      {
        "id": "d",
        "text": "Bookmarks"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Query Parameters te permite definir variables (como ServerName) que se pueden cambiar en cada entorno (Dev/Test/Prod).",
    "domain": "Implement and manage semantic models",
    "twinOf": 150
  },
  {
    "id": "151-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás supervisando un warehouse en Fabric. Observas que las estadísticas están desactualizadas. ¿Qué comando las actualiza?",
    "options": [
      {
        "id": "a",
        "text": "UPDATE STATISTICS"
      },
      {
        "id": "b",
        "text": "CREATE STATISTICS"
      },
      {
        "id": "c",
        "text": "DBCC CHECKDB"
      },
      {
        "id": "d",
        "text": "ALTER INDEX REBUILD"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "UPDATE STATISTICS es el comando de T-SQL para actualizar las estadísticas de distribución que se usan en la optimización de consultas.",
    "domain": "Prepare and serve data",
    "twinOf": 151
  },
  {
    "id": "152-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico. Necesitas asegurarte de que 'Unit Price' nunca se resuma (sume). ¿Qué propiedad?",
    "options": [
      {
        "id": "a",
        "text": "Summarize By (Default Summarization): None"
      },
      {
        "id": "b",
        "text": "Data Type: Text"
      },
      {
        "id": "c",
        "text": "Is Hidden"
      },
      {
        "id": "d",
        "text": "Format: General"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Configurar 'Default Summarization' en 'None' evita que Power BI sume automáticamente la columna al agregarla a un objeto visual.",
    "domain": "Implement and manage semantic models",
    "twinOf": 152
  },
  {
    "id": "153-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una medida DAX que calcule las ventas del año *anterior*. ¿Función?",
    "options": [
      {
        "id": "a",
        "text": "SAMEPERIODLASTYEAR()"
      },
      {
        "id": "b",
        "text": "PREVIOUSDAY()"
      },
      {
        "id": "c",
        "text": "DATESYTD()"
      },
      {
        "id": "d",
        "text": "TOTALYTD()"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "SAMEPERIODLASTYEAR(Dates[Date]) devuelve el conjunto equivalente de fechas desplazado un año hacia atrás.",
    "domain": "Implement and manage semantic models",
    "twinOf": 153
  },
  {
    "id": "154-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un informe que usa el modo Import. Los datos ocupan 2 GB. Necesitas reducir el tamaño. Tienes una columna 'TransactionID' (GUID). ¿Qué haces?",
    "options": [
      {
        "id": "a",
        "text": "Quitar la columna."
      },
      {
        "id": "b",
        "text": "Aplicar un hash a la columna."
      },
      {
        "id": "c",
        "text": "Dividir la columna."
      },
      {
        "id": "d",
        "text": "Cambiar la codificación a RLE."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las columnas de alta cardinalidad, como los GUID, ocupan muchísimo espacio (tamaño del diccionario). Si no se necesitan para informes exactos, quitarlas ahorra una cantidad significativa de memoria.",
    "domain": "Implement and manage semantic models",
    "twinOf": 154
  },
  {
    "id": "155-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas auditar quién vio un informe específico en los últimos 30 días. Las métricas de uso del informe no son suficientes. ¿Herramienta?",
    "options": [
      {
        "id": "a",
        "text": "Microsoft 365 Audit Logs"
      },
      {
        "id": "b",
        "text": "Azure Activity Log"
      },
      {
        "id": "c",
        "text": "Power BI Desktop Diagnostics"
      },
      {
        "id": "d",
        "text": "Gateway Logs"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La actividad 'ViewReport' se registra en los Audit Logs (unificados) de M365 y se puede buscar por usuarios y elementos específicos.",
    "domain": "Prepare and serve data",
    "twinOf": 155
  },
  {
    "id": "156-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas conectarte a un origen de datos que requiere autenticación OAuth2. Estás usando un Dataflow. ¿Dónde se almacena la credencial?",
    "options": [
      {
        "id": "a",
        "text": "En la definición de la conexión (Data Source)"
      },
      {
        "id": "b",
        "text": "En el código del script"
      },
      {
        "id": "c",
        "text": "En la puerta de enlace (gateway)"
      },
      {
        "id": "d",
        "text": "No se almacena."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las credenciales se administran de forma segura como parte del objeto Connection asociado al Dataflow/Dataset, no en el código.",
    "domain": "Prepare and serve data",
    "twinOf": 156
  },
  {
    "id": "157-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo DirectQuery. Quieres agregar algunos datos para mejorar el rendimiento, pero mantener disponible el detalle. ¿Qué característica?",
    "options": [
      {
        "id": "a",
        "text": "User-defined Aggregations"
      },
      {
        "id": "b",
        "text": "Automatic Aggregations"
      },
      {
        "id": "c",
        "text": "Import Mode"
      },
      {
        "id": "d",
        "text": "Tanto A como B"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Tanto las agregaciones automáticas (impulsadas por machine learning) como las definidas por el usuario permiten combinar Import (agregados) y DirectQuery (detalle) para mejorar el rendimiento (modelos compuestos).",
    "domain": "Implement and manage semantic models",
    "twinOf": 157
  },
  {
    "id": "158-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas investigar un error de actualización. El mensaje de error es 'Memory limit exceeded'. ¿Cuál es la causa probable?",
    "options": [
      {
        "id": "a",
        "text": "El dataset es más grande que el límite de la capacidad."
      },
      {
        "id": "b",
        "text": "La puerta de enlace está desconectada."
      },
      {
        "id": "c",
        "text": "El origen no está disponible."
      },
      {
        "id": "d",
        "text": "Se alcanzó el tiempo de espera."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Si el proceso de actualización requiere más RAM de la que permite la SKU (por ejemplo, P1/F64 tiene límites), fallará con errores OOM.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 158
  },
  {
    "id": "159-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Usas `deltaTable` en PySpark. Quieres combinar los datos entrantes (upsert). ¿Comando?",
    "options": [
      {
        "id": "a",
        "text": "deltaTable.alias('t').merge(...).whenMatchedUpdate().whenNotMatchedInsert().execute()"
      },
      {
        "id": "b",
        "text": "df.write.mode('overwrite').save(...)"
      },
      {
        "id": "c",
        "text": "deltaTable.update(...)"
      },
      {
        "id": "d",
        "text": "df.upsert(...)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La sintaxis estándar de merge de Delta Lake implica definir los alias de destino y origen, la condición de combinación y las acciones para coincidencias y no coincidencias.",
    "domain": "Prepare and serve data",
    "twinOf": 159
  },
  {
    "id": "160-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas supervisar la duración de cada actividad en una ejecución de canalización. ¿Vista de Monitoring Hub?",
    "options": [
      {
        "id": "a",
        "text": "Vista de Gantt"
      },
      {
        "id": "b",
        "text": "Vista de lista"
      },
      {
        "id": "c",
        "text": "Vista de matriz"
      },
      {
        "id": "d",
        "text": "Vista de tarjetas"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La vista de ejecución predeterminada en las canalizaciones es un diagrama de Gantt que muestra visualmente el inicio, la duración y las dependencias de las actividades.",
    "domain": "Explore and visualize data",
    "twinOf": 160
  },
  {
    "id": "161-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás creando un modelo semántico a partir de un Warehouse. ¿Qué modo se usa de forma predeterminada?",
    "options": [
      {
        "id": "a",
        "text": "Direct Lake"
      },
      {
        "id": "b",
        "text": "DirectQuery"
      },
      {
        "id": "c",
        "text": "Import"
      },
      {
        "id": "d",
        "text": "Live Connection"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El modelo semántico predeterminado de un Warehouse usa DirectQuery. Direct Lake es el predeterminado para Lakehouse (Data Engineering).",
    "domain": "Implement and manage semantic models",
    "twinOf": 161
  },
  {
    "id": "162-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un objeto visual que muestre un total acumulado de ventas a lo largo del tiempo. ¿Medida?",
    "options": [
      {
        "id": "a",
        "text": "CALCULATE(SUM(Sales), DATESYTD(Date))"
      },
      {
        "id": "b",
        "text": "CALCULATE(SUM(Sales), ALL(Date))"
      },
      {
        "id": "c",
        "text": "SUM(Sales)"
      },
      {
        "id": "d",
        "text": "AVERAGE(Sales)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "DATESYTD crea un total acumulado que se reinicia al comienzo de cada año (Year-To-Date).",
    "domain": "Implement and manage semantic models",
    "twinOf": 162
  },
  {
    "id": "163-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Tienes un informe confidencial. Necesitas impedir que los usuarios lo impriman o exporten. ¿Qué dos características ayudan?",
    "options": [
      {
        "id": "a",
        "text": "Sensitivity Labels (protección)"
      },
      {
        "id": "b",
        "text": "Configuración Export Data en el Admin Portal"
      },
      {
        "id": "c",
        "text": "RLS"
      },
      {
        "id": "d",
        "text": "App Audiences"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "Las Sensitivity Labels (MIP) pueden aplicar cifrado y derechos (sin imprimir ni exportar). La configuración del inquilino en el portal de administración puede deshabilitar Export Data de forma global o por grupo.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 163
  },
  {
    "id": "164-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas habilitar el 'XMLA Endpoint' para una capacidad. ¿Dónde lo configuras?",
    "options": [
      {
        "id": "a",
        "text": "Capacity Settings en el Admin Portal"
      },
      {
        "id": "b",
        "text": "Workspace Settings"
      },
      {
        "id": "c",
        "text": "Dataset Settings"
      },
      {
        "id": "d",
        "text": "Opciones de Power BI Desktop"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El acceso XMLA de lectura y escritura es una configuración a nivel de capacidad.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 164
  },
  {
    "id": "165-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un dataframe de Spark. Quieres guardarlo como una tabla 'MyTable' en el Lakehouse. ¿Código?",
    "options": [
      {
        "id": "a",
        "text": "df.write.saveAsTable('MyTable')"
      },
      {
        "id": "b",
        "text": "df.save('MyTable')"
      },
      {
        "id": "c",
        "text": "df.write.csv('MyTable')"
      },
      {
        "id": "d",
        "text": "CREATE TABLE MyTable ..."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "saveAsTable() escribe el dataframe como una tabla administrada en el Metastore (Lakehouse).",
    "domain": "Prepare and serve data",
    "twinOf": 165
  },
  {
    "id": "166-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas optimizar una consulta T-SQL que combina dos tablas grandes. Verificas que las estadísticas de las columnas estén actualizadas. ¿Qué más debes revisar?",
    "options": [
      {
        "id": "a",
        "text": "Distribución de los datos (sesgo o skew)"
      },
      {
        "id": "b",
        "text": "Color de la tabla"
      },
      {
        "id": "c",
        "text": "Formato de archivo"
      },
      {
        "id": "d",
        "text": "Latencia de red"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El sesgo de datos (distribución desigual) en un sistema distribuido (como Fabric Warehouse) hace que algunos nodos trabajen mucho más que otros, lo que ralentiza las combinaciones.",
    "domain": "Prepare and serve data",
    "twinOf": 166
  },
  {
    "id": "167-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas copiar datos de una base de datos Oracle local a un Lakehouse. ¿Actividad?",
    "options": [
      {
        "id": "a",
        "text": "Copy Activity"
      },
      {
        "id": "b",
        "text": "Notebook"
      },
      {
        "id": "c",
        "text": "Dataflow"
      },
      {
        "id": "d",
        "text": "Todo lo anterior"
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Copy Activity (canalización), Notebook (Spark con JDBC) y Dataflow Gen2 (mediante Gateway) pueden ingerir datos de Oracle.",
    "domain": "Prepare and serve data",
    "twinOf": 167
  },
  {
    "id": "168-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas identificar columnas vacías en un Dataflow. ¿Vista?",
    "options": [
      {
        "id": "a",
        "text": "Column Quality"
      },
      {
        "id": "b",
        "text": "Column Distribution"
      },
      {
        "id": "c",
        "text": "Column Profile"
      },
      {
        "id": "d",
        "text": "Advanced Editor"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Column Quality muestra el porcentaje de valores válidos (Valid), con error (Error) y vacíos (Empty) en la vista previa.",
    "domain": "Prepare and serve data",
    "twinOf": 168
  },
  {
    "id": "169-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico. Necesitas exigir que los usuarios de 'Germany' solo vean los datos donde Country='Germany'. ¿Qué configuras?",
    "options": [
      {
        "id": "a",
        "text": "RLS (Row Level Security)"
      },
      {
        "id": "b",
        "text": "Consulta de filtro"
      },
      {
        "id": "c",
        "text": "Segmentación (slicer)"
      },
      {
        "id": "d",
        "text": "Informes separados"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "RLS es la característica de seguridad para restringir el acceso a los datos (filas) según la identidad del usuario.",
    "domain": "Implement and manage semantic models",
    "twinOf": 169
  },
  {
    "id": "170-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás escribiendo una expresión DAX para comprobar si hay un BLANK. ¿Función?",
    "options": [
      {
        "id": "a",
        "text": "ISBLANK()"
      },
      {
        "id": "b",
        "text": "ISEMPTY()"
      },
      {
        "id": "c",
        "text": "IFBLANK()"
      },
      {
        "id": "d",
        "text": "NULL()"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "ISBLANK() devuelve TRUE si el valor está en blanco.",
    "domain": "Implement and manage semantic models",
    "twinOf": 170
  },
  {
    "id": "171-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas compartir un informe con usuarios externos (invitados). ¿Qué requisito previo se necesita?",
    "options": [
      {
        "id": "a",
        "text": "Invitación de Azure B2B"
      },
      {
        "id": "b",
        "text": "VPN"
      },
      {
        "id": "c",
        "text": "Deben tener una licencia Pro en tu inquilino."
      },
      {
        "id": "d",
        "text": "No es posible."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El uso compartido externo funciona mediante Azure AD B2B. El usuario se invita como Guest User en tu Entra ID.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 171
  },
  {
    "id": "172-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "hotspot",
    "prompt": "Interacciones de objetos visuales: 1) ¿Qué icono desactiva la interacción para un objeto visual específico? 2) ¿Qué icono filtra el objeto visual?",
    "options": [
      {
        "id": "a",
        "text": "1) Círculo con una barra diagonal (None)"
      },
      {
        "id": "b",
        "text": "1) Embudo"
      },
      {
        "id": "c",
        "text": "2) Embudo (Filter)"
      },
      {
        "id": "d",
        "text": "2) Gráfico circular (Highlight)"
      }
    ],
    "correctIds": [
      "a",
      "c"
    ],
    "explanation": "El icono 'None' impide que el objeto visual de origen afecte al de destino. El icono 'Filter' aplica un contexto de filtro.",
    "domain": "Explore and visualize data",
    "twinOf": 172
  },
  {
    "id": "173-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas calcular el % del total de ventas de cada región. ¿Medida?",
    "options": [
      {
        "id": "a",
        "text": "DIVIDE(SUM(Sales), CALCULATE(SUM(Sales), ALL(Region)))"
      },
      {
        "id": "b",
        "text": "SUM(Sales) / SUM(Sales)"
      },
      {
        "id": "c",
        "text": "DIVIDE(SUM(Sales), CALCULATE(SUM(Sales), VALUES(Region)))"
      },
      {
        "id": "d",
        "text": "PERCENTILE(Sales)"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Para obtener el % del total, divides las ventas del contexto actual entre las ventas calculadas sobre TODAS las regiones (quitando el filtro de región).",
    "domain": "Implement and manage semantic models",
    "twinOf": 173
  },
  {
    "id": "174-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una página de informe con segmentaciones sincronizadas. Quieres que la segmentación sea invisible en la página 2, pero que siga filtrándola. ¿Qué marcas?",
    "options": [
      {
        "id": "a",
        "text": "Casilla Sync: ACTIVADA, casilla Visible: DESACTIVADA"
      },
      {
        "id": "b",
        "text": "Casilla Sync: DESACTIVADA, casilla Visible: ACTIVADA"
      },
      {
        "id": "c",
        "text": "Bloquear relación de aspecto"
      },
      {
        "id": "d",
        "text": "Ocultar página"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En el panel Sync Slicers, marcar 'Sync' propaga la selección, mientras que desmarcar 'Visible' oculta el objeto visual de segmentación en esa página.",
    "domain": "Explore and visualize data",
    "twinOf": 174
  },
  {
    "id": "175-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas comprobar si una Power BI Gateway está en línea. ¿Dónde?",
    "options": [
      {
        "id": "a",
        "text": "Manage Gateways en el Admin Portal / Service"
      },
      {
        "id": "b",
        "text": "Power BI Desktop"
      },
      {
        "id": "c",
        "text": "Report Settings"
      },
      {
        "id": "d",
        "text": "My Workspace"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": " La página 'Manage connections and gateways' muestra el estado (Online/Offline) de las puertas de enlace estándar y personales.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 175
  },
  {
    "id": "176-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Estás usando la integración con git. Ves un conflicto en 'Model.bim'. ¿Qué pasó?",
    "options": [
      {
        "id": "a",
        "text": "Dos desarrolladores modificaron la misma parte del modelo."
      },
      {
        "id": "b",
        "text": "El archivo está dañado."
      },
      {
        "id": "c",
        "text": "Git no está disponible."
      },
      {
        "id": "d",
        "text": "OneLake está lleno."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los conflictos ocurren cuando los cambios de dos ramas distintas se superponen y Git no puede combinarlos automáticamente.",
    "domain": "Prepare and serve data",
    "twinOf": 176
  },
  {
    "id": "177-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "¿Qué dos objetos visuales admiten la característica 'Analyze' (explicar el aumento o la disminución)?",
    "options": [
      {
        "id": "a",
        "text": "Gráfico de barras"
      },
      {
        "id": "b",
        "text": "Gráfico de líneas"
      },
      {
        "id": "c",
        "text": "Tabla"
      },
      {
        "id": "d",
        "text": "Segmentación (slicer)"
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "La característica 'Analyze' (Insights) suele estar disponible en gráficos cartesianos, como los gráficos de barras, de columnas y de líneas, para explicar tendencias o diferencias.",
    "domain": "Explore and visualize data",
    "twinOf": 177
  },
  {
    "id": "178-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear un grupo de usuarios en Fabric. ¿Dónde lo haces?",
    "options": [
      {
        "id": "a",
        "text": "Microsoft 365 Admin Center (Entra ID)"
      },
      {
        "id": "b",
        "text": "Fabric Admin Portal"
      },
      {
        "id": "c",
        "text": "Workspace Settings"
      },
      {
        "id": "d",
        "text": "Power BI Desktop"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los grupos de seguridad y las listas de distribución se administran en M365/Entra ID, no directamente en Fabric (aunque Fabric los usa).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 178
  },
  {
    "id": "179-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico con 50 medidas. Quieres organizarlas en carpetas. ¿Vista?",
    "options": [
      {
        "id": "a",
        "text": "Model View"
      },
      {
        "id": "b",
        "text": "Report View"
      },
      {
        "id": "c",
        "text": "Data View"
      },
      {
        "id": "d",
        "text": "DAX View"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Model View permite seleccionar varios campos y asignarlos a una Display Folder.",
    "domain": "Implement and manage semantic models",
    "twinOf": 179
  },
  {
    "id": "180-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas forzar la actualización de un objeto visual de un informe en Power BI Desktop. ¿Dónde haces clic?",
    "options": [
      {
        "id": "a",
        "text": "Botón Refresh en la cinta Home"
      },
      {
        "id": "b",
        "text": "View > Performance Analyzer > Refresh Visuals"
      },
      {
        "id": "c",
        "text": "Save"
      },
      {
        "id": "d",
        "text": "Publish"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El botón 'Refresh' de la cinta actualiza los DATOS (Import). Para actualizar solo la consulta del OBJETO VISUAL (por ejemplo, DirectQuery), Performance Analyzer tiene un botón, o puedes interactuar con una segmentación.",
    "domain": "Implement and manage semantic models",
    "twinOf": 180
  },
  {
    "id": "181-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas impedir que una segmentación filtre un objeto visual específico. ¿Qué usas?",
    "options": [
      {
        "id": "a",
        "text": "Edit Interactions"
      },
      {
        "id": "b",
        "text": "Sync Slicers"
      },
      {
        "id": "c",
        "text": "Selection Pane"
      },
      {
        "id": "d",
        "text": "Lock Object"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Format > Edit Interactions permite controlar qué objetos visuales se ven afectados por una segmentación (Filter frente a None).",
    "domain": "Prepare and serve data",
    "twinOf": 181
  },
  {
    "id": "182-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una información sobre herramientas (tooltip) personalizada para un objeto visual. ¿Pasos?",
    "options": [
      {
        "id": "a",
        "text": "Crear una página nueva > Allow use as tooltip > Asignarla al objeto visual."
      },
      {
        "id": "b",
        "text": "Escribir DAX para el tooltip."
      },
      {
        "id": "c",
        "text": "Usar un cuadro de texto."
      },
      {
        "id": "d",
        "text": "No es posible."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los tooltips de página de informe permiten diseñar una minipágina de informe que aparece al pasar el cursor.",
    "domain": "Implement and manage semantic models",
    "twinOf": 182
  },
  {
    "id": "183-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas cambiar el origen de datos de un archivo PBIX del SQL Server de Dev al de Prod. ¿Característica?",
    "options": [
      {
        "id": "a",
        "text": "Data source settings"
      },
      {
        "id": "b",
        "text": "Options"
      },
      {
        "id": "c",
        "text": "Get Data"
      },
      {
        "id": "d",
        "text": "Security"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Transform Data > Data source settings permite cambiar la ruta del servidor o la base de datos de las conexiones existentes.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 183
  },
  {
    "id": "184-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes una jerarquía 'Year > Quarter > Month'. Quieres ver las ventas de todos los meses en todos los años. ¿Modo de expansión?",
    "options": [
      {
        "id": "a",
        "text": "Expand all down one level"
      },
      {
        "id": "b",
        "text": "Go to next level"
      },
      {
        "id": "c",
        "text": "Drill down"
      },
      {
        "id": "d",
        "text": "Focus"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "'Go to next level' (flecha doble hacia abajo) quita el contexto de Year y agrega por Quarter/Month (por ejemplo, Q1 es la suma de 2023 Q1 + 2024 Q1). 'Expand all' conserva el Year (2023 Q1, 2024 Q1).",
    "domain": "Prepare and serve data",
    "twinOf": 184
  },
  {
    "id": "185-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Verificas un modelo de datos. Ves que 'Auto Date/Time' está creando muchas tablas ocultas. ¿Recomendación?",
    "options": [
      {
        "id": "a",
        "text": "Deshabilitar Auto Date/Time."
      },
      {
        "id": "b",
        "text": "Conservarlo por comodidad."
      },
      {
        "id": "c",
        "text": "Eliminar la columna de fecha."
      },
      {
        "id": "d",
        "text": "Usarlo para las relaciones."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Deshabilitar Auto Date/Time reduce el exceso de tamaño del modelo (tablas de fechas locales ocultas por cada columna de fecha) y fomenta el uso de una dimensión Date central.",
    "domain": "Implement and manage semantic models",
    "twinOf": 185
  },
  {
    "id": "186-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una relación válida entre 'Sales' (Many) y 'Target' (Many) por 'Date'. 'Target' está a nivel de mes. 'Sales' es diario. ¿Qué haces?",
    "options": [
      {
        "id": "a",
        "text": "Crear una tabla puente (dimensión Date) o usar una columna con granularidad común (Month)."
      },
      {
        "id": "b",
        "text": "Forzar Many-to-Many."
      },
      {
        "id": "c",
        "text": "Usar CROSSFILTER."
      },
      {
        "id": "d",
        "text": "Combinarlas."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La mejor práctica es relacionar ambas con una dimensión Date compartida (Conformed Date Dimension). Es posible que necesites una 'MonthKey' en Date para relacionarla con Target.",
    "domain": "Implement and manage semantic models",
    "twinOf": 186
  },
  {
    "id": "187-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico. Necesitas identificar qué medidas no se usan en ningún informe. ¿Herramienta?",
    "options": [
      {
        "id": "a",
        "text": "Bravo for Power BI / VertiPaq Analyzer"
      },
      {
        "id": "b",
        "text": "Power BI Desktop"
      },
      {
        "id": "c",
        "text": "Service Settings"
      },
      {
        "id": "d",
        "text": "Power Query"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Herramientas externas como Bravo o Tabular Editor pueden analizar los metadatos del modelo. (Nota: encontrar el uso en *informes* en todo el servicio requiere la API metadata scanner, pero para limpiar el modelo local, Bravo es lo habitual).",
    "domain": "Implement and manage semantic models",
    "twinOf": 187
  },
  {
    "id": "188-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas usar un objeto visual personalizado de R. ¿Cuál es una limitación?",
    "options": [
      {
        "id": "a",
        "text": "Limitado a 150,000 filas (aprox.)."
      },
      {
        "id": "b",
        "text": "No puede filtrar."
      },
      {
        "id": "c",
        "text": "No puede usar tooltips."
      },
      {
        "id": "d",
        "text": "Requiere una licencia Premium."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los objetos visuales de R (y de Python) tienen límites de tamaño de datos para el dataframe que se pasa al script.",
    "domain": "Explore and visualize data",
    "twinOf": 188
  },
  {
    "id": "189-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas parametrizar una opción de límite de filas en Power Query. `Table.FirstN(Source, 100)`. ¿Cómo haces que '100' sea dinámico?",
    "options": [
      {
        "id": "a",
        "text": "Crear un parámetro Decimal y reemplazar 100."
      },
      {
        "id": "b",
        "text": "Usar un parámetro de texto."
      },
      {
        "id": "c",
        "text": "Usar una función."
      },
      {
        "id": "d",
        "text": "Usar una variable global."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los parámetros (Type: Decimal/Number) se pueden referenciar en el código M: `Table.FirstN(Source, ParameterName)`.",
    "domain": "Prepare and serve data",
    "twinOf": 189
  },
  {
    "id": "190-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "multiple_choice",
    "prompt": "Necesitas mejorar la accesibilidad de un informe. ¿Qué dos acciones ayudan?",
    "options": [
      {
        "id": "a",
        "text": "Agregar Alt Text a los objetos visuales."
      },
      {
        "id": "b",
        "text": "Configurar el Tab Order."
      },
      {
        "id": "c",
        "text": "Usar colores de bajo contraste."
      },
      {
        "id": "d",
        "text": "Quitar los títulos."
      }
    ],
    "correctIds": [
      "a",
      "b"
    ],
    "explanation": "El Alt Text describe los objetos visuales para los lectores de pantalla. El Tab Order garantiza una navegación lógica.",
    "domain": "Prepare and serve data",
    "twinOf": 190
  },
  {
    "id": "191-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas conectarte a una API externa que usa una clave en el encabezado. ¿Función de Power Query?",
    "options": [
      {
        "id": "a",
        "text": "Web.Contents('url', [Headers=[ApiKey='...']])"
      },
      {
        "id": "b",
        "text": "Json.Document()"
      },
      {
        "id": "c",
        "text": "OData.Feed()"
      },
      {
        "id": "d",
        "text": "File.Contents()"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Web.Contents es la función estándar para solicitudes HTTP y permite encabezados personalizados.",
    "domain": "Prepare and serve data",
    "twinOf": 191
  },
  {
    "id": "192-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico que usa DirectQuery a SQL Server. Quieres cambiar la frecuencia de actualización de la caché (15 min de forma predeterminada). ¿Configuración?",
    "options": [
      {
        "id": "a",
        "text": "Scheduled Cache Refresh (configuración del dashboard)"
      },
      {
        "id": "b",
        "text": "Programación de actualización del dataset"
      },
      {
        "id": "c",
        "text": "Programación de la puerta de enlace"
      },
      {
        "id": "d",
        "text": "Es en tiempo real."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Para los iconos de dashboard basados en DirectQuery, puedes configurar la frecuencia de Scheduled Cache Refresh (por ejemplo, de 15 min a 1 hora).",
    "domain": "Implement and manage semantic models",
    "twinOf": 192
  },
  {
    "id": "193-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas ver las dependencias de un Dataflow Gen2. ¿Vista?",
    "options": [
      {
        "id": "a",
        "text": "Lineage View"
      },
      {
        "id": "b",
        "text": "Impact Analysis"
      },
      {
        "id": "c",
        "text": "Query Dependencies (en el editor de PQ)"
      },
      {
        "id": "d",
        "text": "Settings"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La vista Lineage del workspace muestra las dependencias de nivel superior (orígenes) y de nivel inferior (datasets). 'Query Dependencies' dentro del editor muestra las dependencias entre pasos.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 193
  },
  {
    "id": "194-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas crear una métrica en un scorecard. ¿A qué puedes conectarla?",
    "options": [
      {
        "id": "a",
        "text": "Un valor de un informe."
      },
      {
        "id": "b",
        "text": "Entrada manual."
      },
      {
        "id": "c",
        "text": "Una submétrica."
      },
      {
        "id": "d",
        "text": "Todo lo anterior."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Fabric/PBI Metrics (Goals) admite datos conectados, valores manuales y acumulados (rollups).",
    "domain": "Prepare and serve data",
    "twinOf": 194
  },
  {
    "id": "195-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo DirectQuery grande. Quieres definir agregaciones según el uso. ¿Característica?",
    "options": [
      {
        "id": "a",
        "text": "Automatic Aggregations"
      },
      {
        "id": "b",
        "text": "Manual Aggregations"
      },
      {
        "id": "c",
        "text": "Composite Models"
      },
      {
        "id": "d",
        "text": "Hybrid Tables"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Automatic Aggregations analiza los registros de consultas para crear y administrar agregaciones automáticamente.",
    "domain": "Implement and manage semantic models",
    "twinOf": 195
  },
  {
    "id": "196-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "ordering",
    "prompt": "Ordena los pasos para compartir una App: 1) Crear contenido (informes). 2) Crear el workspace. 3) Publicar la App. 4) Agregar contenido a la App.",
    "options": [
      {
        "id": "a",
        "text": "2, 1, 4, 3"
      },
      {
        "id": "b",
        "text": "1, 2, 3, 4"
      },
      {
        "id": "c",
        "text": "4, 3, 2, 1"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Workspace -> contenido -> Update App (agregar contenido) -> Publish.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": 196
  },
  {
    "id": "197-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Necesitas asegurarte de que los nombres de los campos del modelo sean fáciles de entender para los usuarios. ¿Dónde los cambias?",
    "options": [
      {
        "id": "a",
        "text": "Power Query o Model View"
      },
      {
        "id": "b",
        "text": "Base de datos de origen"
      },
      {
        "id": "c",
        "text": "Título del objeto visual"
      },
      {
        "id": "d",
        "text": "Configuración del informe"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Cambiar el nombre de las columnas y medidas en el modelo (o en PQ) garantiza que aparezcan correctamente en la lista de campos para todos los usuarios.",
    "domain": "Implement and manage semantic models",
    "twinOf": 197
  },
  {
    "id": "198-es",
    "courseId": "dp-600",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Tienes un modelo semántico con 'Employee' y 'Manager' (ambos en la tabla Employee). Necesitas contar los empleados por gerente. ¿Relación?",
    "options": [
      {
        "id": "a",
        "text": "Autocombinación (jerarquía primario-secundario)"
      },
      {
        "id": "b",
        "text": "Dimensión de rol múltiple (copia de Manager)"
      },
      {
        "id": "c",
        "text": "Many-to-Many"
      },
      {
        "id": "d",
        "text": "Relación activa"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Una autocombinación con las funciones PATH de DAX permite navegar por la jerarquía primario-secundario dentro de la misma tabla.",
    "domain": "Implement and manage semantic models",
    "twinOf": 198
  },
  {
    "id": "dp600-1-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a semantic model in Microsoft Fabric. You need to ensure that users can see only the data for their own region. Which feature should you use?",
    "options": [
      {
        "id": "A",
        "text": "Row-Level Security (RLS)"
      },
      {
        "id": "B",
        "text": "Object-Level Security (OLS)"
      },
      {
        "id": "C",
        "text": "Dynamic Data Masking"
      },
      {
        "id": "D",
        "text": "Perspective"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "RLS (Row-Level Security) is used to restrict access to data based on the user who runs the query.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-1"
  },
  {
    "id": "dp600-2-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are designing a refresh strategy for a large semantic model. Which type of refresh minimizes processing time and resource consumption?",
    "options": [
      {
        "id": "A",
        "text": "Incremental refresh"
      },
      {
        "id": "B",
        "text": "Full refresh"
      },
      {
        "id": "C",
        "text": "Scheduled refresh"
      },
      {
        "id": "D",
        "text": "On-demand refresh"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Incremental refresh processes only the data that has changed, which is much more efficient than a full refresh.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-2"
  },
  {
    "id": "dp600-3-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which of the following are Microsoft Fabric items? (Select 2)",
    "options": [
      {
        "id": "A",
        "text": "Data Factory"
      },
      {
        "id": "B",
        "text": "Synapse Real-Time Analytics"
      },
      {
        "id": "C",
        "text": "Azure SQL Database"
      },
      {
        "id": "D",
        "text": "Power Automate"
      }
    ],
    "correctIds": [
      "A",
      "B"
    ],
    "explanation": "Data Factory and Synapse Real-Time Analytics are core experiences within Microsoft Fabric.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-3"
  },
  {
    "id": "dp600-4-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which language is primarily used for data transformations in a Dataflow Gen2?",
    "options": [
      {
        "id": "A",
        "text": "Power Query M"
      },
      {
        "id": "B",
        "text": "Python"
      },
      {
        "id": "C",
        "text": "SQL"
      },
      {
        "id": "D",
        "text": "DAX"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Dataflow Gen2 uses Power Query (the M language) for data transformation.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-4"
  },
  {
    "id": "dp600-5-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the steps to create a Lakehouse in Fabric.",
    "options": [
      {
        "id": "A",
        "text": "Create a Workspace"
      },
      {
        "id": "B",
        "text": "Select the Data Engineering experience"
      },
      {
        "id": "C",
        "text": "Click New and select Lakehouse"
      },
      {
        "id": "D",
        "text": "Name the Lakehouse"
      }
    ],
    "correctIds": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "First you need a Workspace, then you go into the appropriate experience and create the artifact.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-5"
  },
  {
    "id": "dp600-6-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to optimize a DAX query that is slow. Which tool should you use first to analyze performance?",
    "options": [
      {
        "id": "A",
        "text": "DAX Studio"
      },
      {
        "id": "B",
        "text": "Performance Analyzer in Power BI Desktop"
      },
      {
        "id": "C",
        "text": "SQL Server Profiler"
      },
      {
        "id": "D",
        "text": "Tabular Editor"
      }
    ],
    "correctIds": [
      "B"
    ],
    "explanation": "Performance Analyzer is the built-in tool for a first review of the performance of visuals and their underlying DAX queries.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-6"
  },
  {
    "id": "dp600-7-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which file format does OneLake use to store table data?",
    "options": [
      {
        "id": "A",
        "text": "Delta Parquet"
      },
      {
        "id": "B",
        "text": "CSV"
      },
      {
        "id": "C",
        "text": "JSON"
      },
      {
        "id": "D",
        "text": "XML"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "OneLake standardizes on the Delta Parquet format for table storage.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-7"
  },
  {
    "id": "dp600-8-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "DirectLake lets you query data directly from OneLake without importing it into the semantic model's memory.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "DirectLake is a key feature that delivers high performance without duplicating data (import).",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-8"
  },
  {
    "id": "dp600-9-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You have a PySpark notebook. You want to write a DataFrame to a Delta table. Which command do you use?",
    "options": [
      {
        "id": "A",
        "text": "df.write.format('delta').saveAsTable('tabla')"
      },
      {
        "id": "B",
        "text": "df.save('tabla')"
      },
      {
        "id": "C",
        "text": "df.write.table('tabla')"
      },
      {
        "id": "D",
        "text": "INSERT INTO tabla VALUES df"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The correct PySpark syntax for writing in Delta format is df.write.format('delta').saveAsTable(...).",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-9"
  },
  {
    "id": "dp600-10-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which DAX function is used to ignore the filters applied to a specific column?",
    "options": [
      {
        "id": "A",
        "text": "CALCULATE"
      },
      {
        "id": "B",
        "text": "ALL"
      },
      {
        "id": "C",
        "text": "REMOVEFILTERS"
      },
      {
        "id": "D",
        "text": "KEEPFILTERS"
      }
    ],
    "correctIds": [
      "C"
    ],
    "explanation": "REMOVEFILTERS (or ALL used as a modifier) removes the filters from the specified columns.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-10"
  },
  {
    "id": "dp600-11-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You are configuring a Deployment Pipeline. What are the three default stages?",
    "options": [
      {
        "id": "A",
        "text": "Development, Test, Production"
      },
      {
        "id": "B",
        "text": "Dev, QA, Perf"
      },
      {
        "id": "C",
        "text": "Alpha, Beta, Gold"
      },
      {
        "id": "D",
        "text": "Build, Test, Deploy"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The standard stages in Fabric are Development, Test, and Production.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-11"
  },
  {
    "id": "dp600-12-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of trigger in Data Factory would you use to run a pipeline every time a new file arrives in a folder?",
    "options": [
      {
        "id": "A",
        "text": "Storage Event Trigger"
      },
      {
        "id": "B",
        "text": "Schedule Trigger"
      },
      {
        "id": "C",
        "text": "Tumbling Window Trigger"
      },
      {
        "id": "D",
        "text": "Manual Trigger"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Storage event triggers react to events such as the creation of blobs (files).",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-12"
  },
  {
    "id": "dp600-13-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to share a dataset with an external organization. Which Fabric feature makes this possible in a secure way?",
    "options": [
      {
        "id": "A",
        "text": "OneLake Shortcuts"
      },
      {
        "id": "B",
        "text": "Data Sharing"
      },
      {
        "id": "C",
        "text": "Export to Excel"
      },
      {
        "id": "D",
        "text": "Email Subscription"
      }
    ],
    "correctIds": [
      "B"
    ],
    "explanation": "External Data Sharing lets you share data with external users without moving it.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-13"
  },
  {
    "id": "dp600-14-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main purpose of a 'Shortcut' in OneLake?",
    "options": [
      {
        "id": "A",
        "text": "To reference data stored in other locations without copying it"
      },
      {
        "id": "B",
        "text": "To create a quick backup"
      },
      {
        "id": "C",
        "text": "To speed up SQL queries"
      },
      {
        "id": "D",
        "text": "To compress the data"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Shortcuts unify data from various sources (Azure, AWS, internal OneLake) by virtualizing it in one location.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-14"
  },
  {
    "id": "dp600-15-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Select two benefits of using notebooks in Fabric for data engineering.",
    "options": [
      {
        "id": "A",
        "text": "Support for multiple languages (PySpark, SQL, Scala)"
      },
      {
        "id": "B",
        "text": "Exclusive drag-and-drop graphical interface"
      },
      {
        "id": "C",
        "text": "Real-time collaboration capability"
      },
      {
        "id": "D",
        "text": "Only allows simple sequential execution"
      }
    ],
    "correctIds": [
      "A",
      "C"
    ],
    "explanation": "Notebooks are versatile in terms of languages and allow teams to collaborate on code.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-15"
  },
  {
    "id": "dp600-16-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a dimensional model, which type of table stores the quantitative metrics?",
    "options": [
      {
        "id": "A",
        "text": "Fact Table"
      },
      {
        "id": "B",
        "text": "Dimension Table"
      },
      {
        "id": "C",
        "text": "Bridge Table"
      },
      {
        "id": "D",
        "text": "Aggregate Table"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Fact tables contain the numbers, the metrics, and the foreign keys to the dimensions.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-16"
  },
  {
    "id": "dp600-17-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which T-SQL command is used to efficiently copy data from external storage into a Warehouse in Fabric?",
    "options": [
      {
        "id": "A",
        "text": "COPY INTO"
      },
      {
        "id": "B",
        "text": "INSERT INTO ... SELECT"
      },
      {
        "id": "C",
        "text": "BULK INSERT"
      },
      {
        "id": "D",
        "text": "MERGE"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "COPY INTO is the recommended and best-performing command for ingesting data into Fabric Warehouses.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-17"
  },
  {
    "id": "dp600-18-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which visualization is best for showing the distribution of a single numeric variable?",
    "options": [
      {
        "id": "A",
        "text": "Histogram"
      },
      {
        "id": "B",
        "text": "Line chart"
      },
      {
        "id": "C",
        "text": "Scatter chart"
      },
      {
        "id": "D",
        "text": "Treemap"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Histograms are specifically designed for viewing frequency distributions.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-18"
  },
  {
    "id": "dp600-19-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "In Fabric, you can use Git for version control of your artifacts.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "Fabric integrates with Azure DevOps and Git for the software development lifecycle (ALM).",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-19"
  },
  {
    "id": "dp600-20-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is 'V-Order' in the context of Delta tables in Fabric?",
    "options": [
      {
        "id": "A",
        "text": "A write optimization that makes reads faster"
      },
      {
        "id": "B",
        "text": "A visual ordering of the columns"
      },
      {
        "id": "C",
        "text": "A version of the Vertex engine"
      },
      {
        "id": "D",
        "text": "A type of data validation"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "V-Order is an optimization of the Parquet format that significantly improves read performance, especially for Power BI.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-20"
  },
  {
    "id": "dp600-21-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the most efficient way to run exploratory analysis queries over large volumes of JSON data in OneLake without defining a rigid schema?",
    "options": [
      {
        "id": "A",
        "text": "KQL (Kusto Query Language)"
      },
      {
        "id": "B",
        "text": "T-SQL"
      },
      {
        "id": "C",
        "text": "DAX"
      },
      {
        "id": "D",
        "text": "MDX"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "KQL and the KQL database in Fabric are optimized for analyzing logs, telemetry, and semi-structured data such as JSON.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-21"
  },
  {
    "id": "dp600-22-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to create a paginated report. Which design tool should you use?",
    "options": [
      {
        "id": "A",
        "text": "Power BI Report Builder"
      },
      {
        "id": "B",
        "text": "Power BI Desktop"
      },
      {
        "id": "C",
        "text": "Excel"
      },
      {
        "id": "D",
        "text": "Word"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Power BI Report Builder is the dedicated tool for creating paginated reports (.rdl).",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-22"
  },
  {
    "id": "dp600-23-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Fabric feature lets you orchestrate complex data workflows visually?",
    "options": [
      {
        "id": "A",
        "text": "Data Pipelines"
      },
      {
        "id": "B",
        "text": "Notebooks"
      },
      {
        "id": "C",
        "text": "Semantic Models"
      },
      {
        "id": "D",
        "text": "Dashboards"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Data Pipelines (based on Azure Data Factory) are the visual orchestration tool.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-23"
  },
  {
    "id": "dp600-24-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the elements of the Fabric hierarchy from highest to lowest.",
    "options": [
      {
        "id": "A",
        "text": "Tenant"
      },
      {
        "id": "B",
        "text": "Capacity"
      },
      {
        "id": "C",
        "text": "Workspace"
      },
      {
        "id": "D",
        "text": "Item (Artifact)"
      }
    ],
    "correctIds": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "The Tenant is the top level, followed by the Capacity, then the Workspaces, and finally the Items.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-24"
  },
  {
    "id": "dp600-25-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of table in a semantic model has NO data storage and is calculated at query time?",
    "options": [
      {
        "id": "A",
        "text": "Calculated Table"
      },
      {
        "id": "B",
        "text": "Imported Table"
      },
      {
        "id": "C",
        "text": "Dual Table"
      },
      {
        "id": "D",
        "text": "DirectQuery Table"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Calculated tables are derived from other tables by using DAX and are recalculated when the model is processed.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-25"
  },
  {
    "id": "dp600-26-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You want to reduce the size of your semantic model. Which action has the greatest impact?",
    "options": [
      {
        "id": "A",
        "text": "Remove high-cardinality columns that are not used"
      },
      {
        "id": "B",
        "text": "Rename columns"
      },
      {
        "id": "C",
        "text": "Create more measures"
      },
      {
        "id": "D",
        "text": "Hide tables"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "High-cardinality columns (many unique values) take up most of the space in columnar models.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-26"
  },
  {
    "id": "dp600-27-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which tool lets you edit 'Calculation Groups' in a semantic model?",
    "options": [
      {
        "id": "A",
        "text": "Tabular Editor"
      },
      {
        "id": "B",
        "text": "DAX Studio"
      },
      {
        "id": "C",
        "text": "SQL Profiler"
      },
      {
        "id": "D",
        "text": "Power Query Editor"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Tabular Editor is the tool (now partially built in, but historically external) for creating Calculation Groups.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-27"
  },
  {
    "id": "dp600-28-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Which two connectivity modes does a Power BI dataset (semantic model) support?",
    "options": [
      {
        "id": "A",
        "text": "Import"
      },
      {
        "id": "B",
        "text": "DirectQuery"
      },
      {
        "id": "C",
        "text": "LiveConnect (to another service)"
      },
      {
        "id": "D",
        "text": "Batch"
      }
    ],
    "correctIds": [
      "A",
      "B"
    ],
    "explanation": "Import and DirectQuery are the fundamental data storage/connection modes.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-28"
  },
  {
    "id": "dp600-29-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the name of the technology that lets Power BI read Delta Parquet files directly with high performance?",
    "options": [
      {
        "id": "A",
        "text": "DirectLake"
      },
      {
        "id": "B",
        "text": "VertiPaq"
      },
      {
        "id": "C",
        "text": "Power Query"
      },
      {
        "id": "D",
        "text": "Analysis Services"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "DirectLake is the direct bridge between the Power BI engine and the Delta files in OneLake.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-29"
  },
  {
    "id": "dp600-30-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a PySpark script, how do you read a CSV file into a DataFrame, including the header?",
    "options": [
      {
        "id": "A",
        "text": "spark.read.option('header', 'true').csv('path')"
      },
      {
        "id": "B",
        "text": "spark.read.csv('path')"
      },
      {
        "id": "C",
        "text": "pandas.read_csv('path')"
      },
      {
        "id": "D",
        "text": "read.table('path')"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "You must set the 'header' option to 'true' so that the first row is treated as column names.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-30"
  },
  {
    "id": "dp600-31-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the `OPTIMIZE` statement used for on a Delta table?",
    "options": [
      {
        "id": "A",
        "text": "To compact small files into larger files"
      },
      {
        "id": "B",
        "text": "To delete old data"
      },
      {
        "id": "C",
        "text": "To create indexes"
      },
      {
        "id": "D",
        "text": "To validate the schema"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "OPTIMIZE improves read performance by consolidating many small files (the small files problem) into fewer files of optimal size.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-31"
  },
  {
    "id": "dp600-32-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What happens to historical data when you use `VACUUM` on a Delta table?",
    "options": [
      {
        "id": "A",
        "text": "Files that are no longer referenced by the transaction log and are older than the retention period are permanently deleted"
      },
      {
        "id": "B",
        "text": "They are archived in cold storage"
      },
      {
        "id": "C",
        "text": "They are compressed"
      },
      {
        "id": "D",
        "text": "Nothing happens; VACUUM is for cleaning up RAM"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "VACUUM cleans up physical storage by deleting obsolete files, which prevents Time Travel to versions older than the retention period.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-32"
  },
  {
    "id": "dp600-33-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "scenario",
    "prompt": "Scenario: You have an ETL process that occasionally fails because of transient network problems. You want the 'Copy Data' activity to retry automatically.",
    "scenarioText": "Pipeline configuration in Data Factory",
    "options": [
      {
        "id": "A",
        "text": "Configure the 'Retry' policy on the activity"
      },
      {
        "id": "B",
        "text": "Use an 'Until' loop around the activity"
      },
      {
        "id": "C",
        "text": "Write a custom script to catch errors"
      },
      {
        "id": "D",
        "text": "Increase the timeout"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Activities in Data Factory have a native 'Retry' setting for handling transient failures.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-33"
  },
  {
    "id": "dp600-34-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which function is used to combine two DataFrames side by side in PySpark (similar to a SQL JOIN)?",
    "options": [
      {
        "id": "A",
        "text": "join"
      },
      {
        "id": "B",
        "text": "union"
      },
      {
        "id": "C",
        "text": "append"
      },
      {
        "id": "D",
        "text": "concat"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The `.join()` method is used to join DataFrames based on a common key.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-34"
  },
  {
    "id": "dp600-35-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main advantage of using 'Variables' in DAX?",
    "options": [
      {
        "id": "A",
        "text": "Improving readability and performance by calculating an expression only once"
      },
      {
        "id": "B",
        "text": "Allowing the data type to change dynamically"
      },
      {
        "id": "C",
        "text": "Exporting values to other reports"
      },
      {
        "id": "D",
        "text": "Encrypting formulas"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Variables (VAR) store the result of an expression, which prevents it from being recalculated multiple times if it is used repeatedly in the measure.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-35"
  },
  {
    "id": "dp600-36-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Power BI visual lets you break down a measure into its contributing factors hierarchically?",
    "options": [
      {
        "id": "A",
        "text": "Decomposition Tree (hierarchical breakdown)"
      },
      {
        "id": "B",
        "text": "Key Influencers"
      },
      {
        "id": "C",
        "text": "Treemap"
      },
      {
        "id": "D",
        "text": "Matrix"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The Decomposition Tree is excellent for root cause analysis and hierarchical breakdowns.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-36"
  },
  {
    "id": "dp600-37-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In Fabric's Lineage View, what can you see?",
    "options": [
      {
        "id": "A",
        "text": "The flow of data from the source to the report"
      },
      {
        "id": "B",
        "text": "The source code of all applications"
      },
      {
        "id": "C",
        "text": "The developers' chat history"
      },
      {
        "id": "D",
        "text": "The list of inactive users"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The lineage view shows the dependencies between artifacts (datasets, dataflows, reports, dashboards).",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-37"
  },
  {
    "id": "dp600-38-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "It is possible to create a Shortcut in a Lakehouse that points to an Amazon S3 bucket.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "OneLake supports shortcuts to S3, ADLS Gen2, and internal OneLake.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-38"
  },
  {
    "id": "dp600-39-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which language is used to define data unit tests in Data Pipelines (e.g., schema validation)?",
    "options": [
      {
        "id": "A",
        "text": "There is no specific language; validation activities or scripts are used"
      },
      {
        "id": "B",
        "text": "Jest"
      },
      {
        "id": "C",
        "text": "JUnit"
      },
      {
        "id": "D",
        "text": "Selenium"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "In Data Factory, you use activities such as 'Validation', 'If Condition', or SQL scripts/Notebooks to validate data.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-39"
  },
  {
    "id": "dp600-40-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which metric helps you identify a 'bottleneck' in a visualization stage?",
    "options": [
      {
        "id": "A",
        "text": "Visual display duration"
      },
      {
        "id": "B",
        "text": "DaX query duration"
      },
      {
        "id": "C",
        "text": "Network latency"
      },
      {
        "id": "D",
        "text": "Dataset refresh time"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "If 'Visual display duration' is high but 'DAX query duration' is low, the problem is in rendering (many data points), not in the query.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-40"
  },
  {
    "id": "dp600-41-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main function of 'OneSecurity' in Fabric (general concept)?",
    "options": [
      {
        "id": "A",
        "text": "Defining security once in OneLake and having it applied across all engines"
      },
      {
        "id": "B",
        "text": "A built-in antivirus"
      },
      {
        "id": "C",
        "text": "A firewall for the SQL endpoints"
      },
      {
        "id": "D",
        "text": "A disk encryption system"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The goal of OneSecurity is to unify security (RLS, OLS) so that you do not have to redefine it in each engine (SQL, Spark, KQL).",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-41"
  },
  {
    "id": "dp600-42-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which DAX command lets you modify the filter context within a measure?",
    "options": [
      {
        "id": "A",
        "text": "CALCULATE"
      },
      {
        "id": "B",
        "text": "SUM"
      },
      {
        "id": "C",
        "text": "AVERAGE"
      },
      {
        "id": "D",
        "text": "RELATED"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "CALCULATE is the most important DAX function because it lets you evaluate an expression in a modified filter context.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-42"
  },
  {
    "id": "dp600-43-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a star schema, how should the tables be related?",
    "options": [
      {
        "id": "A",
        "text": "One-to-many relationships from Dimensions to Facts"
      },
      {
        "id": "B",
        "text": "Many-to-many relationships between Facts"
      },
      {
        "id": "C",
        "text": "One-to-one relationships between all tables"
      },
      {
        "id": "D",
        "text": "No relationships, everything in a single table"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The standard design is for a dimension to filter the fact table through a 1:* relationship.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-43"
  },
  {
    "id": "dp600-44-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the steps for data ingestion using a Dataflow Gen2.",
    "options": [
      {
        "id": "A",
        "text": "Connect to the data source"
      },
      {
        "id": "B",
        "text": "Transform the data (Power Query)"
      },
      {
        "id": "C",
        "text": "Configure the output destination"
      },
      {
        "id": "D",
        "text": "Publish the Dataflow"
      }
    ],
    "correctIds": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "The logical flow is: Connect -> Transform -> Destination -> Publish/Run.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-44"
  },
  {
    "id": "dp600-45-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What can you use to prevent a DAX measure from returning a divide-by-zero error?",
    "options": [
      {
        "id": "A",
        "text": "The DIVIDE function"
      },
      {
        "id": "B",
        "text": "An IF(divisor=0, ...) block"
      },
      {
        "id": "C",
        "text": "The IFERROR function"
      },
      {
        "id": "D",
        "text": "All of the above"
      }
    ],
    "correctIds": [
      "D"
    ],
    "explanation": "They all work, but DIVIDE is the best practice (\"Safe Divide\").",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-45"
  },
  {
    "id": "dp600-46-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Fabric component lets you query data by using T-SQL directly over files in OneLake without provisioning a dedicated Warehouse?",
    "options": [
      {
        "id": "A",
        "text": "Lakehouse SQL Analytics Endpoint"
      },
      {
        "id": "B",
        "text": "KQL Database"
      },
      {
        "id": "C",
        "text": "Spark SQL"
      },
      {
        "id": "D",
        "text": "Dataflow"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Every Lakehouse comes with an automatic SQL Analytics Endpoint that allows T-SQL queries over the Delta tables.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-46"
  },
  {
    "id": "dp600-47-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "Warehouse tables in Fabric are always stored in Delta Parquet format.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "Both the Lakehouse and the Warehouse physically store their data in Delta Parquet in OneLake.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-47"
  },
  {
    "id": "dp600-48-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which tool would you use to schedule a Spark notebook to run at a specific time?",
    "options": [
      {
        "id": "A",
        "text": "Data Pipeline with a Notebook activity"
      },
      {
        "id": "B",
        "text": "Windows Task Scheduler"
      },
      {
        "id": "C",
        "text": "Cron job on your laptop"
      },
      {
        "id": "D",
        "text": "Power Automate Desktop"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Data Pipelines are the native orchestrator for scheduling and running notebooks.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-48"
  },
  {
    "id": "dp600-49-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What does 'Surrogate Key' mean in a Data Warehouse?",
    "options": [
      {
        "id": "A",
        "text": "A system-generated key (usually an integer) that uniquely identifies a row"
      },
      {
        "id": "B",
        "text": "The primary key of the source system"
      },
      {
        "id": "C",
        "text": "A composite key"
      },
      {
        "id": "D",
        "text": "A null foreign key"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Surrogate keys are synthetic keys that are useful for handling changes in business keys and for Slowly Changing Dimensions.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-49"
  },
  {
    "id": "dp600-50-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Spark optimization option helps when you have skewed data in a join?",
    "options": [
      {
        "id": "A",
        "text": "Broadcast Join (if one table is small) or Salting"
      },
      {
        "id": "B",
        "text": "Blindly increase the number of executors"
      },
      {
        "id": "C",
        "text": "Use CSV instead of Parquet"
      },
      {
        "id": "D",
        "text": "Disable the Catalyst optimization"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "A Broadcast Join avoids shuffling the large table. Salting (adding noise to the key) distributes the skewed data.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-50"
  },
  {
    "id": "dp600-51-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the name of the Fabric capability for complying with data residency regulations (storing data in a specific region)?",
    "options": [
      {
        "id": "A",
        "text": "Multi-Geo Capacities"
      },
      {
        "id": "B",
        "text": "Local Storage"
      },
      {
        "id": "C",
        "text": "Region Lock"
      },
      {
        "id": "D",
        "text": "Data Sovereignty Mode"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "You can assign Workspaces to capacities that reside in different geographic regions.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-51"
  },
  {
    "id": "dp600-52-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a bar chart, which axis is normally used for the categorical variable?",
    "options": [
      {
        "id": "A",
        "text": "X axis (or Y in horizontal bar charts)"
      },
      {
        "id": "B",
        "text": "Z axis"
      },
      {
        "id": "C",
        "text": "Legend"
      },
      {
        "id": "D",
        "text": "Tooltip"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The main axis defines the categories being compared.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-52"
  },
  {
    "id": "dp600-53-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which DAX function returns a single-column table that contains the distinct values of the specified column?",
    "options": [
      {
        "id": "A",
        "text": "DISTINCT"
      },
      {
        "id": "B",
        "text": "VALUES"
      },
      {
        "id": "C",
        "text": "Both (with subtle differences regarding the blank row)"
      },
      {
        "id": "D",
        "text": "UNIQUE"
      }
    ],
    "correctIds": [
      "C"
    ],
    "explanation": "Both DISTINCT and VALUES return unique values. VALUES includes the 'blank row' for referential integrity; DISTINCT does not.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-53"
  },
  {
    "id": "dp600-54-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to monitor the CU (Capacity Units) consumption of your Fabric capacity. What do you use?",
    "options": [
      {
        "id": "A",
        "text": "Fabric Capacity Metrics App"
      },
      {
        "id": "B",
        "text": "Azure Portal Cost Management"
      },
      {
        "id": "C",
        "text": "Task Manager"
      },
      {
        "id": "D",
        "text": "Event Viewer"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The capacity metrics app is the dedicated tool for viewing the capacity's usage, throttling, and smoothing.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-54"
  },
  {
    "id": "dp600-55-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is 'Data Activator' in Fabric?",
    "options": [
      {
        "id": "A",
        "text": "A tool for taking automatic actions based on changes in the data (Alerts, Triggers)"
      },
      {
        "id": "B",
        "text": "A button for refreshing data"
      },
      {
        "id": "C",
        "text": "A type of license"
      },
      {
        "id": "D",
        "text": "A database connector"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Data Activator lets you define patterns in the data (e.g., temperature > 100) and trigger actions (email, Teams, flow).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-55"
  },
  {
    "id": "dp600-56-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Select two best practices for data modeling in Power BI.",
    "options": [
      {
        "id": "A",
        "text": "Use a Star Schema"
      },
      {
        "id": "B",
        "text": "Hide the foreign key columns in the report view"
      },
      {
        "id": "C",
        "text": "Keep all the tables in a single huge flat table"
      },
      {
        "id": "D",
        "text": "Use bidirectional relationships by default"
      }
    ],
    "correctIds": [
      "A",
      "B"
    ],
    "explanation": "The star schema is optimal for performance. Hiding technical columns improves usability.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-56"
  },
  {
    "id": "dp600-57-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of authentication is recommended for connecting a Fabric Notebook to an external Azure SQL Database securely and without password management?",
    "options": [
      {
        "id": "A",
        "text": "Entra ID (Managed Identity / Service Principal)"
      },
      {
        "id": "B",
        "text": "SQL Authentication (Username/Password)"
      },
      {
        "id": "C",
        "text": "Anonymous"
      },
      {
        "id": "D",
        "text": "Certificate"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Using the Workspace managed identity or Service Principals avoids hardcoding credentials.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-57"
  },
  {
    "id": "dp600-58-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which visualization format is ideal for showing progress toward a Target?",
    "options": [
      {
        "id": "A",
        "text": "KPI or Gauge"
      },
      {
        "id": "B",
        "text": "Pie Chart"
      },
      {
        "id": "C",
        "text": "Scatter Plot"
      },
      {
        "id": "D",
        "text": "Funnel"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "KPI visuals and gauges are designed to compare a current value against a target.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-58"
  },
  {
    "id": "dp600-59-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "In a Dataflow Gen2, which option lets you save the results to a Lakehouse?",
    "options": [
      {
        "id": "A",
        "text": "Configure a 'Data Destination'"
      },
      {
        "id": "B",
        "text": "It is not possible; it only loads to Warehouses"
      },
      {
        "id": "C",
        "text": "Use a Python script"
      },
      {
        "id": "D",
        "text": "Export to CSV and upload manually"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Dataflow Gen2 lets you configure output destinations, including Lakehouse and Warehouse.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-59"
  },
  {
    "id": "dp600-60-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the 'XMLA Endpoint' in the context of a Fabric semantic model?",
    "options": [
      {
        "id": "A",
        "text": "A connection point that lets external tools (SSMS, Tabular Editor) connect to and manage the model"
      },
      {
        "id": "B",
        "text": "An XML configuration file"
      },
      {
        "id": "C",
        "text": "A connection error"
      },
      {
        "id": "D",
        "text": "An Excel function"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The XMLA endpoint exposes the semantic model as if it were an Analysis Services database, allowing advanced management.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-60"
  },
  {
    "id": "dp600-61-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "ordering",
    "prompt": "Arrange the typical CI/CD workflow for Power BI.",
    "options": [
      {
        "id": "A",
        "text": "Develop in Power BI Desktop"
      },
      {
        "id": "B",
        "text": "Save as PBIP (Project)"
      },
      {
        "id": "C",
        "text": "Commit and Push to Git (Azure DevOps)"
      },
      {
        "id": "D",
        "text": "Deployment pipeline syncs with the Workspace"
      }
    ],
    "correctIds": [
      "A",
      "B",
      "C",
      "D"
    ],
    "explanation": "The modern workflow involves using PBIP for source control and then pipelines for deployment.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-61"
  },
  {
    "id": "dp600-62-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the main difference between a 'Workspace' and a 'Domain' in Fabric?",
    "options": [
      {
        "id": "A",
        "text": "A Workspace is a technical container of artifacts; a Domain is a logical business grouping"
      },
      {
        "id": "B",
        "text": "They are the same"
      },
      {
        "id": "C",
        "text": "A Domain is for external users"
      },
      {
        "id": "D",
        "text": "A Workspace is paid; a Domain is free"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Domains let you group multiple workspaces by business area (e.g., Finance, Sales).",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-62"
  },
  {
    "id": "dp600-63-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which SQL command would you use to view the change history of a Delta table?",
    "options": [
      {
        "id": "A",
        "text": "DESCRIBE HISTORY table_name"
      },
      {
        "id": "B",
        "text": "SHOW CHANGES table_name"
      },
      {
        "id": "C",
        "text": "SELECT * FROM history(table_name)"
      },
      {
        "id": "D",
        "text": "LOG table_name"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "DESCRIBE HISTORY shows the list of commits, operations, and timestamps of the Delta table.",
    "domain": "Plan, implement, and manage a solution for data analytics",
    "twinOf": "dp600-63"
  },
  {
    "id": "dp600-64-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which tool is essential for creating a Composite Model that combines DirectQuery and Import?",
    "options": [
      {
        "id": "A",
        "text": "Power BI Desktop"
      },
      {
        "id": "B",
        "text": "Dataflow Gen2"
      },
      {
        "id": "C",
        "text": "Notebook"
      },
      {
        "id": "D",
        "text": "SQL Endpoint"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Power BI Desktop is where you define the relationships between different data islands (DirectQuery + Import).",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-64"
  },
  {
    "id": "dp600-65-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is 'OneLake File Explorer'?",
    "options": [
      {
        "id": "A",
        "text": "A desktop application that integrates OneLake with Windows File Explorer"
      },
      {
        "id": "B",
        "text": "A web view in the Fabric portal"
      },
      {
        "id": "C",
        "text": "A PowerShell command"
      },
      {
        "id": "D",
        "text": "A web browser"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "It lets you interact with OneLake files as if they were on your local disk (similar to OneDrive).",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-65"
  },
  {
    "id": "dp600-66-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "The DAX RELATED() function works on a many-to-one relationship, from the 'many' side, to bring in data from the 'one' side.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "RELATED climbs the relationship toward the lookup table to get additional columns.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-66"
  },
  {
    "id": "dp600-67-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of 'Gateway' do you need to access an on-premises SQL Server database from a Dataflow Gen2?",
    "options": [
      {
        "id": "A",
        "text": "On-premises Data Gateway"
      },
      {
        "id": "B",
        "text": "VNET Data Gateway"
      },
      {
        "id": "C",
        "text": "Personal Gateway"
      },
      {
        "id": "D",
        "text": "No Gateway is needed"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "To connect the cloud (Fabric) to local (on-premises) resources, the Data Gateway is required.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-67"
  },
  {
    "id": "dp600-68-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is the limit on the number of rows that can be exported from a Power BI visual to CSV in the service?",
    "options": [
      {
        "id": "A",
        "text": "30,000 (approx.)"
      },
      {
        "id": "B",
        "text": "1,000,000"
      },
      {
        "id": "C",
        "text": "150,000"
      },
      {
        "id": "D",
        "text": "Unlimited"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The default limit is 30,000 for CSV and 150,000 for Excel from the service; although it can vary depending on the admin configuration, it is generally low.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-68"
  },
  {
    "id": "dp600-69-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which DAX function would you use to count the rows in a table, ignoring any filter context?",
    "options": [
      {
        "id": "A",
        "text": "COUNTROWS(ALL(Tabla))"
      },
      {
        "id": "B",
        "text": "COUNTROWS(Tabla)"
      },
      {
        "id": "C",
        "text": "COUNTA(Tabla[Columna])"
      },
      {
        "id": "D",
        "text": "DISTINCTCOUNT(Tabla[ID])"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Using ALL(Tabla) removes the filters before counting.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-69"
  },
  {
    "id": "dp600-70-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a 'Reflex' in earlier versions of Fabric (now Data Activator)?",
    "options": [
      {
        "id": "A",
        "text": "The artifact where you define monitors and actions"
      },
      {
        "id": "B",
        "text": "A type of chart"
      },
      {
        "id": "C",
        "text": "A SQL table"
      },
      {
        "id": "D",
        "text": "An admin user"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "A 'Reflex' is the container for the activation logic (now simply part of Data Activator).",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-70"
  },
  {
    "id": "dp600-71-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which file format is recommended for the 'Bronze Layer' (landing zone) in a Medallion architecture if the data arrives as JSON?",
    "options": [
      {
        "id": "A",
        "text": "Keep the original format (JSON) or convert to Parquet"
      },
      {
        "id": "B",
        "text": "Always CSV"
      },
      {
        "id": "C",
        "text": "Compressed XML"
      },
      {
        "id": "D",
        "text": "Excel"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The Bronze layer usually stores the data 'as is' (raw), although Parquet is preferable for efficiency if it can be converted.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-71"
  },
  {
    "id": "dp600-72-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which option in Power BI Desktop lets you see how filters interact between different tables?",
    "options": [
      {
        "id": "A",
        "text": "Model View"
      },
      {
        "id": "B",
        "text": "Data View"
      },
      {
        "id": "C",
        "text": "Query Editor"
      },
      {
        "id": "D",
        "text": "Performance Analyzer"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The model view shows the relationship diagram and the direction of the filters.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-72"
  },
  {
    "id": "dp600-73-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "multiple_choice",
    "prompt": "Select two ways to optimize the performance of a Dataflow Gen2.",
    "options": [
      {
        "id": "A",
        "text": "Enable 'Staging' for intermediate queries"
      },
      {
        "id": "B",
        "text": "Filter rows and columns as early as possible"
      },
      {
        "id": "C",
        "text": "Bring in all the columns and filter at the end"
      },
      {
        "id": "D",
        "text": "Disable parallel loading"
      }
    ],
    "correctIds": [
      "A",
      "B"
    ],
    "explanation": "'Query Folding' and early filtering are key. Staging helps with complex transformations.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-73"
  },
  {
    "id": "dp600-74-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which Fabric feature lets business analysts explore semantic models in Excel with live-connected PivotTables?",
    "options": [
      {
        "id": "A",
        "text": "Analyze in Excel"
      },
      {
        "id": "B",
        "text": "Download PBIX"
      },
      {
        "id": "C",
        "text": "Export Data"
      },
      {
        "id": "D",
        "text": "Get Data -> Web"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "'Analyze in Excel' creates an ODC connection to the semantic model in the cloud.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-74"
  },
  {
    "id": "dp600-75-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What is a 'Mirrored Database' in Fabric?",
    "options": [
      {
        "id": "A",
        "text": "A near real-time replica of an external database (e.g., Cosmos DB, Azure SQL) in OneLake"
      },
      {
        "id": "B",
        "text": "A manual backup"
      },
      {
        "id": "C",
        "text": "A clone of a report"
      },
      {
        "id": "D",
        "text": "A visual mirror on the dashboard"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Mirroring lets you automatically replicate external data to OneLake for analysis without complex ETL.",
    "domain": "Explore and visualize data",
    "twinOf": "dp600-75"
  },
  {
    "id": "dp600-76-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which language does a 'Notebook' use by default if you do not specify anything else?",
    "options": [
      {
        "id": "A",
        "text": "PySpark (Python)"
      },
      {
        "id": "B",
        "text": "Scala"
      },
      {
        "id": "C",
        "text": "SQL"
      },
      {
        "id": "D",
        "text": "R"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "PySpark is the default and most popular language in Fabric notebooks.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-76"
  },
  {
    "id": "dp600-77-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "You need to ensure that a Power BI report is refreshed as soon as the ETL load in Data Factory finishes. What do you do?",
    "options": [
      {
        "id": "A",
        "text": "Add a 'Web' activity that uses the Power BI REST API to refresh the dataset at the end of the pipeline"
      },
      {
        "id": "B",
        "text": "Schedule both at the same time"
      },
      {
        "id": "C",
        "text": "Use DirectQuery only"
      },
      {
        "id": "D",
        "text": "Send an email to the admin"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "The correct orchestration involves chaining the model refresh to the success of the ETL, by using the Refresh API.",
    "domain": "Prepare and serve data",
    "twinOf": "dp600-77"
  },
  {
    "id": "dp600-78-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "Which type of aggregation in a semantic model 'Aggregation Table' improves the performance of high-level queries?",
    "options": [
      {
        "id": "A",
        "text": "Sum, Count, Min, Max pre-calculated by group"
      },
      {
        "id": "B",
        "text": "Concatenated text"
      },
      {
        "id": "C",
        "text": "Binary images"
      },
      {
        "id": "D",
        "text": "Individual dates"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "Aggregation tables summarize the data at a higher level, allowing instant responses to general queries.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-78"
  },
  {
    "id": "dp600-79-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "true_false",
    "prompt": "You can use the 'Fabric Free Trial' to test all capabilities, including OneLake and Data Factory, for 60 days.",
    "options": [
      {
        "id": "true",
        "text": "True"
      },
      {
        "id": "false",
        "text": "False"
      }
    ],
    "correctIds": [
      "true"
    ],
    "explanation": "Microsoft offers a Fabric capacity trial (Trial Capacity) for evaluation.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-79"
  },
  {
    "id": "dp600-80-en",
    "courseId": "dp-600",
    "lang": "en",
    "type": "single_choice",
    "prompt": "What are 'Dynamic Format Strings' in DAX measures?",
    "options": [
      {
        "id": "A",
        "text": "They let you change the format (e.g., currency, percentage) conditionally based on the context"
      },
      {
        "id": "B",
        "text": "They change the font color"
      },
      {
        "id": "C",
        "text": "They let you write C# code"
      },
      {
        "id": "D",
        "text": "It is an Excel function"
      }
    ],
    "correctIds": [
      "A"
    ],
    "explanation": "They are useful when the same measure can display currency or percentage values depending on the user's selection.",
    "domain": "Implement and manage semantic models",
    "twinOf": "dp600-80"
  }
];
  window.questionsData = (window.questionsData || []).concat(twins);
})();
