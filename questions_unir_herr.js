/**
 * UNIR - Herramientas de Visualización
 * Question Bank — 160 questions across 11 themes
 * courseId: "unir-herramientas-viz"
 */
window.questionsData = (window.questionsData || []).concat(
[
  {
    "id": "unir-herr-1-01",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones es un objetivo principal de las herramientas de visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Simplificar la complejidad de los datos y destacar información relevante."
      },
      {
        "id": "b",
        "text": "Representar datos con diseños complicados para destacar patrones visuales complejos."
      },
      {
        "id": "c",
        "text": "Analizar datos únicamente con métodos estadísticos tradicionales."
      },
      {
        "id": "d",
        "text": "Crear gráficos sin considerar la relevancia del mensaje transmitido."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El propósito del Data Viz no es hacer dibujos bonitos, sino reducir la carga cognitiva del usuario. Al transformar miles de filas en formas y colores, se permite que el cerebro humano identifique tendencias y excepciones de manera casi instantánea.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-02",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Entre las herramientas de visualización para usuarios no desarrolladores, ¿cuál permite integrar datos tabulares con mapas de forma sencilla?",
    "options": [
      {
        "id": "a",
        "text": "PowerBI."
      },
      {
        "id": "b",
        "text": "Tableau."
      },
      {
        "id": "c",
        "text": "D3.js."
      },
      {
        "id": "d",
        "text": "Carto."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Aunque Power BI y Tableau tienen mapas, Carto es una plataforma nacida específicamente para la Inteligencia Geoespacial. Su especialidad es el análisis y la visualización de datos tabulares sobre capas geográficas (GIS) con una interfaz de arrastrar y soltar, optimizada para analistas que no son programadores.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-03",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica distingue a las herramientas de visualización para usuarios desarrolladores?",
    "options": [
      {
        "id": "a",
        "text": "Reducción del tiempo entre necesidad y respuesta."
      },
      {
        "id": "b",
        "text": "Facilidad de uso sin necesidad de programación."
      },
      {
        "id": "c",
        "text": "Altas capacidades de personalización de gráficos."
      },
      {
        "id": "d",
        "text": "Conectividad limitada con fuentes de datos externas."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Mientras que las herramientas No-Code (como Power BI) te limitan a plantillas predefinidas, las librerías para desarrolladores permiten controlar cada píxel, cada animación y cada evento del gráfico, permitiendo crear visualizaciones únicas y totalmente a medida.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-04",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una característica clave de la analítica aumentada en herramientas ABI según Gartner?",
    "options": [
      {
        "id": "a",
        "text": "Creación manual de modelos estadísticos."
      },
      {
        "id": "b",
        "text": "Generación automática de insights utilizando inteligencia artificial."
      },
      {
        "id": "c",
        "text": "Representación estática de datos en gráficos básicos."
      },
      {
        "id": "d",
        "text": "Exclusividad para usuarios avanzados con experiencia en programación."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La Analítica Aumentada utiliza IA y Machine Learning para ``aumentar'' la inteligencia humana. Esto permite que la herramienta encuentre automáticamente correlaciones o anomalías importantes en los datos (insights) sin que el usuario tenga que buscarlas manualmente.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-05",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes librerías utiliza HTML, CSS y JavaScript para crear gráficos avanzados con datos complejos?",
    "options": [
      {
        "id": "a",
        "text": "R."
      },
      {
        "id": "b",
        "text": "Google Chart."
      },
      {
        "id": "c",
        "text": "D3.js."
      },
      {
        "id": "d",
        "text": "Qlik."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "D3.js (Data-Driven Documents) es la librería de JavaScript más potente para la web. A diferencia de otras, no proporciona gráficos ``listos para usar'', sino que te da las herramientas para manipular el DOM (Document Object Model) y vincular datos a elementos SVG o HTML, logrando resultados altamente interactivos y complejos.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-06",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones describe correctamente la estructura de un documento HTML básico?",
    "options": [
      {
        "id": "a",
        "text": "<header> contiene la cabecera del navegador y <footer> el código JavaScript."
      },
      {
        "id": "b",
        "text": "<body> contiene el contenido visible, y <head> contiene los metadatos y enlaces externos."
      },
      {
        "id": "c",
        "text": "<main> siempre debe incluir todos los estilos CSS y JavaScript."
      },
      {
        "id": "d",
        "text": "<div> define el encabezado del documento, mientras que <section> define el pie de página."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En la anatomía de un documento HTML, el <head> es el cerebro (invisible para el usuario, contiene el título de la pestaña, SEO y enlaces a estilos), mientras que el <body> es el cuerpo (todo lo que el usuario ve e interactúa en la página).",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-07",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones utiliza correctamente un selector de clase en CSS?",
    "options": [
      {
        "id": "a",
        "text": "div \\{ color: blue; \\}"
      },
      {
        "id": "b",
        "text": "\\#header \\{ font-size: 20px; \\}"
      },
      {
        "id": "c",
        "text": ".highlight \\{ background-color: yellow; \\}"
      },
      {
        "id": "d",
        "text": "body highlight \\{ text-align: center; \\}"
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En CSS, los selectores de clase se identifican con un punto (.), permitiendo aplicar el mismo estilo a múltiples elementos. El \\# es para IDs únicos y el nombre directo (como div) es para etiquetas generales.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-08",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hace el siguiente código JavaScript? document.getElementById('demo').innerHTML = 'Hola, Mundo!';",
    "options": [
      {
        "id": "a",
        "text": "Reemplaza el contenido HTML del elemento con id demo por el texto \"Hola, Mundo!\"."
      },
      {
        "id": "b",
        "text": "Cambia el color de fondo del elemento con el id demo a azul."
      },
      {
        "id": "c",
        "text": "Elimina el elemento con id demo del DOM."
      },
      {
        "id": "d",
        "text": "Crea un nuevo elemento HTML con el texto \"Hola, Mundo!\"."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Este es un ejemplo clásico de manipulación del DOM. getElementById localiza el objeto específico y .innerHTML accede a su contenido interno para sobreescribirlo con el nuevo valor asignado.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-09",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes es un ejemplo de selector de ID en CSS?",
    "options": [
      {
        "id": "a",
        "text": "\\#menu \\{ font-size: 14px; \\}"
      },
      {
        "id": "b",
        "text": ".menu \\{ color: green; \\}"
      },
      {
        "id": "c",
        "text": "menu \\{ margin: 10px; \\}"
      },
      {
        "id": "d",
        "text": "* \\{ padding: 0; \\}"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Los selectores de ID se definen con el símbolo de numeral (\\#). A diferencia de las clases, un ID debe ser único dentro de un mismo documento HTML, utilizándose para elementos específicos que no se repiten (como un menú principal o un contenedor de logo).",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-10",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se conecta un archivo CSS externo a un documento HTML?",
    "options": [
      {
        "id": "a",
        "text": "<style src=\"styles.css\"></style>"
      },
      {
        "id": "b",
        "text": "<link rel=\"stylesheet\" type=\"text/css\" href=\"styles.css\">"
      },
      {
        "id": "c",
        "text": "<script src=\"styles.css\"></script>"
      },
      {
        "id": "d",
        "text": "<css-link rel=\"stylesheet\" href=\"styles.css\">"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La etiqueta <link> dentro del <head> es el método estándar. Atributos como rel=\"stylesheet\" le indican al navegador que el archivo vinculado contiene las reglas de estilo que debe aplicar al renderizar la estructura HTML.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-11",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una característica clave que distingue a Brackets de otros editores de código?",
    "options": [
      {
        "id": "a",
        "text": "La vista previa en vivo que refleja los cambios en tiempo real."
      },
      {
        "id": "b",
        "text": "La capacidad de dividir el área de trabajo en múltiples paneles."
      },
      {
        "id": "c",
        "text": "El soporte nativo para lenguajes como Python y Ruby."
      },
      {
        "id": "d",
        "text": "Un modo nocturno integrado para mejorar la experiencia visual."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Brackets fue diseñado específicamente para el desarrollo web front-end. Su función ``Live Preview'' abre una conexión directa con el navegador (originalmente Chrome) para que cualquier cambio en el HTML o CSS se vea reflejado instantáneamente sin necesidad de recargar la página manualmente.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-12",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede en Brackets si una etiqueta HTML no está bien cerrada?",
    "options": [
      {
        "id": "a",
        "text": "Se cierra automáticamente al guardar el archivo."
      },
      {
        "id": "b",
        "text": "El archivo se guarda con un mensaje de advertencia sobre el error."
      },
      {
        "id": "c",
        "text": "Se marca en rojo junto con las etiquetas posteriores afectadas."
      },
      {
        "id": "d",
        "text": "Se muestra un cuadro de diálogo solicitando corregir el error."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Brackets incluye un validador visual en tiempo real. Cuando detecta una inconsistencia en la jerarquía del DOM (como una etiqueta de apertura sin su correspondiente cierre), resalta el código en rojo para alertar al desarrollador antes de que el error rompa el diseño en el navegador.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-13",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede editar un estilo CSS asociado a una etiqueta HTML en Brackets sin abrir el archivo CSS correspondiente?",
    "options": [
      {
        "id": "a",
        "text": "Haciendo clic derecho sobre la etiqueta y seleccionando \"Editar estilo\"."
      },
      {
        "id": "b",
        "text": "Presionando \"Ctrl\" + \"E\" sobre la etiqueta para desplegar el estilo asociado."
      },
      {
        "id": "c",
        "text": "Usando la barra de herramientas para abrir el archivo CSS correspondiente."
      },
      {
        "id": "d",
        "text": "Manteniendo pulsado \"Shift\" y haciendo clic en la etiqueta."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Esta es la función de ``Edición Rápida'' (Quick Edit). Permite abrir una ventana emergente dentro del mismo archivo HTML que muestra todas las reglas CSS que afectan a ese elemento, permitiendo modificarlas sin tener que navegar entre archivos.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-14",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué lenguaje de programación no está orientado al uso principal de Brackets?",
    "options": [
      {
        "id": "a",
        "text": "HTML."
      },
      {
        "id": "b",
        "text": "CSS."
      },
      {
        "id": "c",
        "text": "JavaScript."
      },
      {
        "id": "d",
        "text": "Python."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Aunque existen extensiones, Brackets nació como una herramienta especializada en las tecnologías base de la web (front-end): HTML, CSS y JavaScript. Para lenguajes de propósito general o back-end como Python, suelen preferirse editores como VS Code o IDEs como PyCharm.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-1-15",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una ventaja de la interfaz de Brackets según la descripción?",
    "options": [
      {
        "id": "a",
        "text": "Proporciona acceso directo a bases de datos SQL."
      },
      {
        "id": "b",
        "text": "Utiliza una interfaz sencilla con ayudas en la escritura y organización del proyecto."
      },
      {
        "id": "c",
        "text": "Ofrece herramientas avanzadas de depuración para back-end."
      },
      {
        "id": "d",
        "text": "Integra directamente sistemas de control de versiones como Git."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Brackets destaca por su minimalismo. Su interfaz evita menús abrumadores para centrarse en el código, ofreciendo ayudas como el autocompletado de etiquetas y una barra lateral eficiente para gestionar los archivos del proyecto de forma intuitiva.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-herr-2-16",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal función de google.charts.load() en el código de Google Charts?",
    "options": [
      {
        "id": "a",
        "text": "Dibujar el gráfico en el elemento HTML especificado."
      },
      {
        "id": "b",
        "text": "Cargar la estructura de datos requerida para los gráficos."
      },
      {
        "id": "c",
        "text": "Cargar la librería de Google Charts y sus paquetes específicos."
      },
      {
        "id": "d",
        "text": "Crear las opciones de configuración para el gráfico."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Antes de usar cualquier gráfico, es necesario llamar a esta función para traer desde los servidores de Google el núcleo de la API (loader.js) y los paquetes específicos (como 'corechart' para barras y pasteles o 'geochart' para mapas). Sin esta carga, las funciones de dibujo no existirían en el entorno de ejecución.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-17",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de la estructura google.visualization.DataTable()?",
    "options": [
      {
        "id": "a",
        "text": "Representar las opciones de configuración del gráfico."
      },
      {
        "id": "b",
        "text": "Proveer una estructura de datos estándar para almacenar las entradas del gráfico."
      },
      {
        "id": "c",
        "text": "Definir el tipo de gráfico que se dibujará."
      },
      {
        "id": "d",
        "text": "Ejecutar la función de callback una vez que la librería esté lista."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "DataTable es el ``contenedor'' oficial de datos de Google Charts. Organiza la información en columnas (definiendo el tipo de dato: string, number, etc.) y filas, permitiendo que la librería entienda exactamente qué valores debe representar visualmente.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-18",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede si la función drawChart() se ejecuta antes de que la librería esté completamente cargada?",
    "options": [
      {
        "id": "a",
        "text": "El gráfico se renderiza parcialmente."
      },
      {
        "id": "b",
        "text": "Se lanza un error porque los paquetes no están disponibles aún."
      },
      {
        "id": "c",
        "text": "El navegador recarga automáticamente la librería."
      },
      {
        "id": "d",
        "text": "Se dibuja un gráfico vacío sin datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "JavaScript intentará invocar objetos como google.visualization que todavía no han sido definidos globalmente. Por eso se utiliza siempre un callback (setOnLoadCallback), asegurando que el código de dibujo solo se dispare cuando la librería confirme que está lista.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-19",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se personalizan los colores de un gráfico circular en Google Charts?",
    "options": [
      {
        "id": "a",
        "text": "Mediante el uso de la opción is3D."
      },
      {
        "id": "b",
        "text": "Cambiando el tipo de gráfico a otro más visual."
      },
      {
        "id": "c",
        "text": "Especificando una lista de colores en la opción colors."
      },
      {
        "id": "d",
        "text": "Definiendo un nuevo paquete de librerías."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Dentro del objeto de configuración options, existe el atributo colors, el cual acepta un arreglo de cadenas (ej. ['\\#e0440e', '\\#e6693e', '\\#ec8f6e']). Estos colores se asignan automáticamente a las rebanadas del gráfico en el orden en que aparecen los datos.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-20",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia principal entre un gráfico tipo GeoChart y un PieChart?",
    "options": [
      {
        "id": "a",
        "text": "GeoChart no requiere datos mientras que PieChart sí."
      },
      {
        "id": "b",
        "text": "GeoChart utiliza ubicaciones geográficas para visualizar datos mientras que PieChart representa proporciones."
      },
      {
        "id": "c",
        "text": "PieChart solo funciona con gráficos tridimensionales."
      },
      {
        "id": "d",
        "text": "GeoChart no es parte de Google Charts."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Un PieChart se usa para mostrar cómo partes individuales contribuyen a un total (proporciones), mientras que un GeoChart visualiza datos sobre un mapa mundi o regional, sombreando áreas según la intensidad de un valor numérico vinculado a un país o ciudad.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-21",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué paso es necesario para usar una hoja de Google Spreadsheet como fuente de datos en una visualización?",
    "options": [
      {
        "id": "a",
        "text": "Asignar permisos de edición para todos los usuarios."
      },
      {
        "id": "b",
        "text": "Copiar la URL del documento y modificar el código JavaScript para incluirla."
      },
      {
        "id": "c",
        "text": "Crear un archivo CSV del documento y subirlo al servidor."
      },
      {
        "id": "d",
        "text": "Asignar permisos de lectura públicos o para cualquier persona con el enlace."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Para que la API de Google Charts pueda acceder y extraer los datos de la hoja de cálculo de forma externa, es indispensable que el archivo tenga permisos de lectura habilitados. Sin este acceso público o mediante enlace, la consulta será rechazada por el servidor de Google por motivos de privacidad.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-22",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede si se utiliza una URL incorrecta de Google Spreadsheet en el código?",
    "options": [
      {
        "id": "a",
        "text": "El gráfico se genera con los datos disponibles previamente."
      },
      {
        "id": "b",
        "text": "Aparece un error reportado por la función handleQueryResponse."
      },
      {
        "id": "c",
        "text": "El código no genera ningún mensaje de error."
      },
      {
        "id": "d",
        "text": "El gráfico muestra una plantilla vacía."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Esta función es la que procesa la respuesta del servidor. Si la URL apunta a un recurso inexistente o erróneo, el objeto de respuesta indicará un error y el sistema mostrará un mensaje de advertencia visual en el contenedor donde debería ir el gráfico.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-23",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué método de jQuery se utiliza para obtener el contenido de un archivo CSV?",
    "options": [
      {
        "id": "a",
        "text": "\\$.get()"
      },
      {
        "id": "b",
        "text": "\\$.fetch()"
      },
      {
        "id": "c",
        "text": "\\$.read()"
      },
      {
        "id": "d",
        "text": "\\$.load()"
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "\\$.get() es el método abreviado de AJAX en jQuery para realizar peticiones HTTP GET. Se utiliza para cargar el contenido de archivos externos (como un .csv) desde el servidor y manejar la cadena de texto resultante en una función de éxito.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-24",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué parámetros son necesarios al llamar a la función google.visualization.Query?",
    "options": [
      {
        "id": "a",
        "text": "url y params"
      },
      {
        "id": "b",
        "text": "headers y gid"
      },
      {
        "id": "c",
        "text": "url y gid"
      },
      {
        "id": "d",
        "text": "params y headers"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En ciertos flujos de trabajo avanzados de la API de visualización, estos parámetros son esenciales para la configuración de la consulta: headers indica el número de filas que se consideran encabezados y gid especifica el ID de la hoja de cálculo de Google a la que se desea consultar.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-25",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de la función \\$.csv.toArrays al trabajar con un archivo CSV?",
    "options": [
      {
        "id": "a",
        "text": "Convertir un archivo CSV a una tabla HTML."
      },
      {
        "id": "b",
        "text": "Transformar el contenido del archivo CSV en un array bidimensional."
      },
      {
        "id": "c",
        "text": "Generar automáticamente gráficos a partir de un CSV."
      },
      {
        "id": "d",
        "text": "Exportar datos del array a un archivo CSV."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Esta función es vital para ``parsear'' (analizar) el texto plano del archivo CSV y convertirlo en un arreglo de arreglos (matriz). Este formato es el que Google Charts requiere para poder construir una DataTable y renderizar el gráfico correctamente.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-26",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función de Google Charts se utiliza para escuchar y gestionar eventos generados por las visualizaciones?",
    "options": [
      {
        "id": "a",
        "text": "google.visualization.ChartWrapper"
      },
      {
        "id": "b",
        "text": "google.visualization.events.addListener"
      },
      {
        "id": "c",
        "text": "google.visualization.DataTable"
      },
      {
        "id": "d",
        "text": "google.visualization.DataView"
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Esta es la función principal para dotar de interactividad a los gráficos. Permite que el código ``escuche'' acciones del usuario, como clics o cambios de ordenación, y ejecute una función de respuesta personalizada.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-27",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ocurre cuando el evento sort de una tabla es detectado por el listener en el ejemplo de código?",
    "options": [
      {
        "id": "a",
        "text": "Se elimina la visualización de la tabla."
      },
      {
        "id": "b",
        "text": "Se redibuja la tabla con nuevos datos aleatorios."
      },
      {
        "id": "c",
        "text": "Se ordenan los datos en el objeto data y se actualiza el gráfico de barras."
      },
      {
        "id": "d",
        "text": "Se agregan nuevas filas de datos a la tabla."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En los tableros coordinados, el evento sort se captura para sincronizar el orden de los datos subyacentes. Al hacerlo, se garantiza que si el usuario ordena la tabla, el gráfico de barras vinculado refleje ese mismo orden inmediatamente.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-28",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito del método google.visualization.DataView en el ejemplo de código?",
    "options": [
      {
        "id": "a",
        "text": "Formatear los datos con prefijos como \\$."
      },
      {
        "id": "b",
        "text": "Filtrar y seleccionar las columnas que se mostrarán en las visualizaciones."
      },
      {
        "id": "c",
        "text": "Registrar eventos en la tabla de datos."
      },
      {
        "id": "d",
        "text": "Creación de un nuevo objeto de datos para ser compartido entre visualizaciones."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "DataView actúa como una ``máscara'' o ventana sobre la DataTable original. Permite mostrar solo un subconjunto de columnas o filas a un gráfico específico sin alterar la tabla de datos maestra que otros gráficos podrían estar usando.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-29",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué efecto tiene aplicar el método formatter.format(data, 1) al objeto de datos?",
    "options": [
      {
        "id": "a",
        "text": "Cambia el tipo de datos de la columna."
      },
      {
        "id": "b",
        "text": "Aplica un prefijo de formato a la columna especificada, como \\$."
      },
      {
        "id": "c",
        "text": "Crea una nueva tabla con los datos formateados."
      },
      {
        "id": "d",
        "text": "Cambia la estructura de las filas de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los formateadores (como NumberFormat) modifican la apariencia visual de los valores en la tabla (por ejemplo, añadiendo símbolos de moneda o separadores de miles) sin cambiar el valor numérico real con el que se realizan los cálculos.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-2-30",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función es responsable de actualizar el gráfico de barras cuando se ordenan los datos de la tabla?",
    "options": [
      {
        "id": "a",
        "text": "google.visualization.DataView."
      },
      {
        "id": "b",
        "text": "google.visualization.events.addListener."
      },
      {
        "id": "c",
        "text": "chart.draw."
      },
      {
        "id": "d",
        "text": "table.draw."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Aunque el listener detecta el cambio, es la llamada al método .draw() sobre el objeto del gráfico de barras la que efectivamente vuelve a renderizar los rectángulos en la pantalla con las nuevas posiciones de los datos ordenados.",
    "domain": "Tema 2: Google Chart"
  },
  {
    "id": "unir-herr-3-31",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre D3.js es incorrecta?",
    "options": [
      {
        "id": "a",
        "text": "D3.js permite un control granular sobre la apariencia y el comportamiento de las visualizaciones."
      },
      {
        "id": "b",
        "text": "D3.js se limita a crear gráficos estáticos y no soporta interactividad."
      },
      {
        "id": "c",
        "text": "D3.js utiliza SVG para renderizar las visualizaciones."
      },
      {
        "id": "d",
        "text": "D3.js es una biblioteca de JavaScript de código abierto."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Esta afirmación es falsa porque la interactividad y las animaciones fluidas son, de hecho, las mayores fortalezas de D3.js. La librería permite manipular el DOM en respuesta a eventos del usuario (clics, desplazamientos, etc.), creando experiencias altamente dinámicas.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-32",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes conceptos es central en D3.js y se refiere a la vinculación de datos a elementos del DOM?",
    "options": [
      {
        "id": "a",
        "text": "Binding."
      },
      {
        "id": "b",
        "text": "Scaling."
      },
      {
        "id": "c",
        "text": "Transitioning."
      },
      {
        "id": "d",
        "text": "Axis."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El Data Binding es el corazón de D3.js. Es el proceso mediante el cual se ``atan'' o vinculan registros de un conjunto de datos a elementos visuales del documento (como círculos, barras o líneas), permitiendo que las propiedades de esos elementos (altura, color, posición) dependan directamente de los valores de los datos.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-33",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones no es una ventaja de utilizar D3.js para crear visualizaciones de datos?",
    "options": [
      {
        "id": "a",
        "text": "Flexibilidad y personalización."
      },
      {
        "id": "b",
        "text": "Gran comunidad y recursos disponibles."
      },
      {
        "id": "c",
        "text": "Facilidad de uso para principiantes."
      },
      {
        "id": "d",
        "text": "Escalabilidad para grandes conjuntos de datos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "A diferencia de herramientas como Power BI o Tableau, D3.js tiene una curva de aprendizaje muy pronunciada. Requiere conocimientos sólidos de JavaScript, HTML y especialmente de SVG, lo que la hace menos accesible para principiantes en comparación con otras bibliotecas de gráficos ``listas para usar''.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-34",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre SVG es falsa en el contexto de D3.js?",
    "options": [
      {
        "id": "a",
        "text": "SVG permite crear gráficos vectoriales escalables."
      },
      {
        "id": "b",
        "text": "SVG es un estándar web para gráficos 2D."
      },
      {
        "id": "c",
        "text": "SVG es la única opción para renderizar gráficos en D3.js."
      },
      {
        "id": "d",
        "text": "SVG permite crear gráficos interactivos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Aunque SVG es la opción más común y potente para D3 por su integración con el DOM, la biblioteca también puede renderizar visualizaciones utilizando elementos de HTML estándar (como divs para gráficos de barras simples) o incluso el elemento Canvas para manejar miles de puntos de datos con un rendimiento superior.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-35",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones describe mejor el concepto de data-driven documents en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "La capacidad de crear documentos HTML estáticos a partir de datos."
      },
      {
        "id": "b",
        "text": "La vinculación de datos a elementos del DOM para generar visualizaciones dinámicas."
      },
      {
        "id": "c",
        "text": "La transformación de datos en formatos compatibles con D3.js."
      },
      {
        "id": "d",
        "text": "La creación de documentos HTML que se actualizan automáticamente cuando cambian los datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El nombre ``Data-Driven Documents'' (Documentos guiados por datos) se refiere precisamente a que el contenido del documento (el DOM) es transformado y actualizado basándose en los datos proporcionados, estableciendo una relación directa donde la estructura visual es un reflejo fiel de la información.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-36",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes no es una ventaja de utilizar D3.js para la visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Flexibilidad y personalización."
      },
      {
        "id": "b",
        "text": "Gran comunidad y recursos disponibles."
      },
      {
        "id": "c",
        "text": "Facilidad de uso para principiantes sin conocimientos de programación."
      },
      {
        "id": "d",
        "text": "Integración con otros frameworks de JavaScript, como Angular o React."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "D3.js no es una herramienta de ``arrastrar y soltar'' como Power BI. Requiere escribir código JavaScript y entender conceptos de manipulación del DOM y SVG, por lo que no es adecuada para personas sin conocimientos de programación.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-37",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el concepto clave que permite enlazar datos a elementos HTML en D3.js y crear visualizaciones dinámicas?",
    "options": [
      {
        "id": "a",
        "text": "Encadenamiento (chaining)."
      },
      {
        "id": "b",
        "text": "Binding."
      },
      {
        "id": "c",
        "text": "Transformación."
      },
      {
        "id": "d",
        "text": "Selección."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El Data Binding es la esencia de D3.js. Permite asociar arreglos de datos a una selección de elementos, creando una conexión donde cada dato genera o modifica un componente visual específico.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-38",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función de D3.js se utiliza para añadir un nuevo elemento HTML a un elemento existente?",
    "options": [
      {
        "id": "a",
        "text": "select()."
      },
      {
        "id": "b",
        "text": "append()."
      },
      {
        "id": "c",
        "text": "text()."
      },
      {
        "id": "d",
        "text": "data()."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La función .append() crea un nuevo elemento (como un <p>, <div> o <rect>) y lo inserta como el último ``hijo'' del elemento seleccionado previamente. Es fundamental para construir la estructura de los gráficos dinámicamente.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-39",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre D3.js es incorrecta?",
    "options": [
      {
        "id": "a",
        "text": "D3.js requiere de plugins adicionales para funcionar en diferentes navegadores."
      },
      {
        "id": "b",
        "text": "D3.js permite un alto grado de personalización de las visualizaciones."
      },
      {
        "id": "c",
        "text": "D3.js puede trabajar con grandes conjuntos de datos de manera eficiente."
      },
      {
        "id": "d",
        "text": "D3.js es una biblioteca de código abierto."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Esta afirmación es incorrecta porque D3.js se basa en estándares web universales (HTML, SVG y CSS). No necesita plugins; solo requiere un navegador moderno que soporte estos estándares para funcionar correctamente.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-40",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal razón por la que el siguiente código crea un nuevo párrafo con el texto \"Párrafo nuevo\" dentro del elemento <body>?\\newline d3.select(\"body\").append(\"p\").text(\"Párrafo nuevo\");",
    "options": [
      {
        "id": "a",
        "text": "La función onload es la encargada de crear el nuevo párrafo."
      },
      {
        "id": "b",
        "text": "La función text() asigna el texto al elemento body."
      },
      {
        "id": "c",
        "text": "La función draw() ejecuta el código dentro de ella cuando la página se carga."
      },
      {
        "id": "d",
        "text": "La función select() selecciona el elemento body y la función append() añade un párrafo."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Este es un ejemplo de encadenamiento (chaining): primero se localiza el contenedor (select), luego se inyecta el nuevo elemento dentro de él (append) y finalmente se le asigna el contenido textual (text).",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-41",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes funciones de D3.js se utiliza principalmente para seleccionar múltiples elementos HTML?",
    "options": [
      {
        "id": "a",
        "text": "d3.select()."
      },
      {
        "id": "b",
        "text": "d3.selectAll()."
      },
      {
        "id": "c",
        "text": "d3.append()."
      },
      {
        "id": "d",
        "text": "d3.attr()."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Mientras que d3.select() solo devuelve el primer elemento que coincide con el selector, d3.selectAll() busca y devuelve todos los elementos que cumplen con el criterio, permitiendo aplicar cambios o vincular datos a un grupo entero de elementos simultáneamente.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-42",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hace la función each() en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "Añade un nuevo atributo a un elemento."
      },
      {
        "id": "b",
        "text": "Modifica el estilo de todos los elementos seleccionados."
      },
      {
        "id": "c",
        "text": "Itera sobre cada elemento de una selección y ejecuta una función."
      },
      {
        "id": "d",
        "text": "Selecciona un elemento específico por su ID."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El método .each() se utiliza cuando se necesita realizar operaciones personalizadas o complejas en cada elemento individual de una selección múltiple. Permite acceder a los datos vinculados y al índice de cada elemento para ejecutar lógica específica por cada uno.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-43",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función de d3.style() en el siguiente código: d3.select(\"p\\#target\").style(\"font-size\", \"40px\");?",
    "options": [
      {
        "id": "a",
        "text": "Cambia el color del texto."
      },
      {
        "id": "b",
        "text": "Modifica el contenido del elemento."
      },
      {
        "id": "c",
        "text": "Añade una clase CSS al elemento."
      },
      {
        "id": "d",
        "text": "Establece el tamaño de la fuente."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El método .style() se usa para modificar directamente las propiedades CSS de un elemento. En este caso, el primer parámetro es la propiedad (font-size) y el segundo es el valor deseado (40px), lo que resulta en un cambio visual inmediato del tamaño del texto.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-44",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones es la forma correcta de seleccionar un elemento div dentro de un elemento section con ID \"section1\"?",
    "options": [
      {
        "id": "a",
        "text": "d3.select(\"\\#section1 > div\")."
      },
      {
        "id": "b",
        "text": "d3.select(\"\\#section1\").div."
      },
      {
        "id": "c",
        "text": "d3.select(\"\\#section1\").append(\"div\")."
      },
      {
        "id": "d",
        "text": "d3.selectAll(\"div\")."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "D3.js utiliza selectores estándar de CSS de nivel 3. La sintaxis \\#section1 > div localiza el elemento con el ID específico y luego busca el div que es su hijo directo.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-3-45",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hace el siguiente código?\\newline d3.selectAll(\"div\")\\newline ~~.attr(\"class\", \"red box\")\\newline ~~.each(function(d, i) \\{\\newline ~~~~d3.select(this).append(\"h1\").text(i);\\newline ~~\\);}",
    "options": [
      {
        "id": "a",
        "text": "Crea tres nuevos elementos div con la clase red box."
      },
      {
        "id": "b",
        "text": "Selecciona el primer elemento div y le asigna la clase red box."
      },
      {
        "id": "c",
        "text": "Selecciona todos los elementos div, les asigna la clase red box y añade un encabezado h1 con el índice de cada elemento."
      },
      {
        "id": "d",
        "text": "Elimina todos los elementos div del documento."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El código sigue un flujo lógico: selecciona todos los divs, les asigna atributos de clase CSS (attr), y luego usa each para recorrerlos uno por uno, inyectando un título h1 cuyo contenido es el índice numérico (i) de la posición que ocupa cada elemento en la selección.",
    "domain": "Tema 3: D3.js Intro"
  },
  {
    "id": "unir-herr-4-46",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre SVG es incorrecta en el contexto de D3.js?",
    "options": [
      {
        "id": "a",
        "text": "SVG es un formato de imagen vectorial escalable."
      },
      {
        "id": "b",
        "text": "D3.js utiliza SVG para crear gráficos interactivos."
      },
      {
        "id": "c",
        "text": "Los elementos SVG son estáticos y no pueden ser manipulados con JavaScript."
      },
      {
        "id": "d",
        "text": "SVG permite crear gráficos de alta calidad que se adaptan a diferentes tamaños de pantalla."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Esta afirmación es falsa porque la gran ventaja de SVG en la web es que sus elementos (círculos, rectángulos, rutas) forman parte del DOM. Esto significa que pueden ser seleccionados y modificados dinámicamente con JavaScript, lo cual es la base del funcionamiento de D3.js.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-47",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Considerando el código CSV proporcionado, ¿qué función cumple la línea d3.select(\"body\").append(\"p\").text(d.Comida + \" \" + d.Preferencia);?",
    "options": [
      {
        "id": "a",
        "text": "Crea un elemento HTML para cada fila del CSV y muestra el nombre de la comida y su preferencia."
      },
      {
        "id": "b",
        "text": "Carga el archivo CSV."
      },
      {
        "id": "c",
        "text": "Calcula la preferencia promedio de todas las comidas."
      },
      {
        "id": "d",
        "text": "Crea un gráfico de barras para visualizar los datos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En una función de carga de datos, esta línea utiliza el encadenamiento de D3 para inyectar un nuevo párrafo (p) en el cuerpo del documento por cada registro encontrado, concatenando dos campos específicos de los datos (Comida y Preferencia) como contenido de texto.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-48",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal diferencia entre trabajar con datos en formato CSV y JSON en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "CSV es más adecuado para datos numéricos, mientras que JSON es mejor para datos textuales."
      },
      {
        "id": "b",
        "text": "La estructura de los datos es diferente, CSV utiliza comas para separar valores y JSON utiliza llaves y corchetes."
      },
      {
        "id": "c",
        "text": "D3.js no puede leer archivos CSV."
      },
      {
        "id": "d",
        "text": "No hay diferencia significativa entre ambos formatos en D3.js."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Mientras que CSV es un formato tabular plano donde cada línea es un registro separado por delimitadores (comas), JSON es un formato jerárquico basado en pares clave-valor que permite representar estructuras de datos mucho más complejas y anidadas.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-49",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes funciones de D3.js se utiliza típicamente para crear un gráfico de barras?",
    "options": [
      {
        "id": "a",
        "text": "d3.circle()."
      },
      {
        "id": "b",
        "text": "d3.rect()."
      },
      {
        "id": "c",
        "text": "d3.line()."
      },
      {
        "id": "d",
        "text": "d3.text()."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los gráficos de barras se construyen utilizando elementos rectangulares de SVG. La función .append(\"rect\") es la que añade estas formas al lienzo, permitiendo luego definir sus atributos de posición (x, y), ancho (width) y alto (height) basándose en los datos.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-50",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Imagina que quieres crear un gráfico de dispersión donde cada punto represente una ciudad y su temperatura promedio. ¿Qué propiedades de los objetos JSON serían más relevantes para esta visualización?",
    "options": [
      {
        "id": "a",
        "text": "X, Y y color."
      },
      {
        "id": "b",
        "text": "Name, country y population."
      },
      {
        "id": "c",
        "text": "Latitude, longitude y temperature."
      },
      {
        "id": "d",
        "text": "Date, time y value."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Para un gráfico de dispersión geográfico o basado en coordenadas, las propiedades de latitud y longitud determinarían la posición espacial de cada punto, mientras que la temperatura podría usarse para definir el radio del punto o su escala de color, representando así las tres dimensiones necesarias para el análisis solicitado.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-51",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre SVG es correcta?",
    "options": [
      {
        "id": "a",
        "text": "SVG es un formato de imagen rasterizada, lo que significa que puede ser escalado sin perder calidad."
      },
      {
        "id": "b",
        "text": "Los elementos SVG solo pueden ser creados y manipulados a través de hojas de estilo CSS."
      },
      {
        "id": "c",
        "text": "SVG es ideal para crear gráficos estáticos que no requieren interactividad."
      },
      {
        "id": "d",
        "text": "SVG es un formato vectorial que permite crear gráficos escalables y altamente personalizables."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "A diferencia de los formatos rasterizados (como PNG o JPG) que se pixelan al ampliarlos, SVG define las formas mediante fórmulas matemáticas (vectores). Esto permite que los gráficos mantengan una nitidez perfecta en cualquier resolución o nivel de zoom.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-52",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué representan las coordenadas cx y cy en un elemento <circle> de SVG?",
    "options": [
      {
        "id": "a",
        "text": "Los puntos inicial y final de un arco."
      },
      {
        "id": "b",
        "text": "Las coordenadas de la esquina superior izquierda del círculo."
      },
      {
        "id": "c",
        "text": "Las coordenadas del centro del círculo."
      },
      {
        "id": "d",
        "text": "El radio del círculo."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En SVG, la posición de un círculo se define desde su núcleo. cx (center x) y cy (center y) indican la ubicación exacta del punto central dentro del lienzo de coordenadas.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-53",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de utilizar SVG sobre otros formatos de imagen para crear gráficos web?",
    "options": [
      {
        "id": "a",
        "text": "SVG es más ligero y se carga más rápido que otros formatos."
      },
      {
        "id": "b",
        "text": "SVG permite crear gráficos interactivos y animaciones de manera más sencilla."
      },
      {
        "id": "c",
        "text": "SVG es compatible con todos los navegadores web."
      },
      {
        "id": "d",
        "text": "Todas las anteriores."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "SVG combina lo mejor de varios mundos: es código basado en XML (muy ligero), es compatible con los estándares modernos de navegación y, lo más importante para D3.js, permite manipular cada una de sus partes mediante CSS o JavaScript para crear interactividad.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-54",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede lograr un efecto de superposición entre diferentes elementos SVG?",
    "options": [
      {
        "id": "a",
        "text": "Utilizando la propiedad z-index."
      },
      {
        "id": "b",
        "text": "Cambiando el orden en que se declaran los elementos."
      },
      {
        "id": "c",
        "text": "Aplicando transformaciones a los elementos."
      },
      {
        "id": "d",
        "text": "Utilizando la propiedad opacity."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En SVG, a diferencia del HTML estándar, no se suele usar z-index. La ``profundidad'' se determina por el orden de dibujo en el archivo: el primer elemento declarado queda en el fondo y el último declarado aparece ``encima'' de todos los anteriores.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-55",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función de la propiedad stroke-width en un elemento SVG?",
    "options": [
      {
        "id": "a",
        "text": "Define el ancho del relleno del elemento."
      },
      {
        "id": "b",
        "text": "Define el ancho del borde del elemento."
      },
      {
        "id": "c",
        "text": "Define el radio de curvatura de las esquinas del elemento."
      },
      {
        "id": "d",
        "text": "Define la transparencia del elemento."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En la terminología de gráficos vectoriales, fill controla el color interno y stroke controla el contorno. Por lo tanto, stroke-width especifica el grosor de esa línea de contorno o borde en unidades de píxeles.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-56",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué propiedad en CSS asegura que las barras en un gráfico de barras creado con div se alineen horizontalmente?",
    "options": [
      {
        "id": "a",
        "text": "background-color."
      },
      {
        "id": "b",
        "text": "display: inline-block."
      },
      {
        "id": "c",
        "text": "position: absolute."
      },
      {
        "id": "d",
        "text": "float: left."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Por defecto, los elementos div son elementos de bloque y se apilan uno debajo del otro. Al aplicar display: inline-block, permitimos que los elementos se coloquen uno al lado del otro en la misma línea, manteniendo la capacidad de asignarles un ancho y alto, lo cual es esencial para visualizar un gráfico de barras.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-57",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de la función .style(\"height\", function(d) \\{ return d + \"px\"; \\)} en un gráfico de barras creado con D3.js?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el color de las barras."
      },
      {
        "id": "b",
        "text": "Asignar una altura fija a todas las barras."
      },
      {
        "id": "c",
        "text": "Ajustar dinámicamente la altura de las barras según los datos."
      },
      {
        "id": "d",
        "text": "Modificar el ancho de las barras en función de los datos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Esta es la esencia de D3.js. La función toma el valor del dato (d) y lo concatena con la unidad de medida (px). De este modo, la altura visual de la barra en la pantalla será directamente proporcional al valor numérico que representa en el conjunto de datos.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-58",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Al crear un gráfico de barras con SVG, ¿qué cambio en el atributo y asegura que las barras se dibujen desde el fondo hacia arriba?",
    "options": [
      {
        "id": "a",
        "text": "y: d."
      },
      {
        "id": "b",
        "text": "y: 0."
      },
      {
        "id": "c",
        "text": "y: h -- d."
      },
      {
        "id": "d",
        "text": "y: h + d."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En el sistema de coordenadas de SVG, el origen (0,0) está en la esquina superior izquierda. Si dibujamos una barra con altura d en la posición y: 0, la barra crecerá hacia abajo. Para que parezca que crece desde el suelo, restamos el valor del dato (d) a la altura total del lienzo (h), posicionando el inicio de la barra en el punto correcto para que termine justo en el borde inferior.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-59",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué propiedad define la posición horizontal de cada barra en un gráfico de barras utilizando SVG?",
    "options": [
      {
        "id": "a",
        "text": ".attr(\"y\", function(d) \\{ \\ldots\\ \\)}."
      },
      {
        "id": "b",
        "text": ".attr(\"cx\", function(d) \\{ \\ldots\\ \\)}."
      },
      {
        "id": "c",
        "text": ".attr(\"x\", function(d, i) \\{ return i * (w / dataset.length); \\)}."
      },
      {
        "id": "d",
        "text": ".attr(\"height\", function(d) \\{ \\ldots\\ \\)}."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El atributo x controla la ubicación horizontal. Para evitar que todas las barras se amontonen en el mismo lugar, multiplicamos el índice del dato (i) por el ancho disponible dividido entre el total de elementos. Esto distribuye las barras uniformemente a lo largo del eje horizontal.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-4-60",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En un Scatter Plot (Gráfico de dispersión), ¿qué atributo determina el radio de los círculos que representan los puntos?",
    "options": [
      {
        "id": "a",
        "text": "cx."
      },
      {
        "id": "b",
        "text": "cy."
      },
      {
        "id": "c",
        "text": "r."
      },
      {
        "id": "d",
        "text": "fill."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En un elemento <circle> de SVG, el atributo r define el radio. Mientras que cx y cy sitúan el punto en el plano, el radio r determina su tamaño. En visualización de datos, a menudo se vincula r a una tercera variable para crear un ``gráfico de burbujas''.",
    "domain": "Tema 4: D3.js SVG"
  },
  {
    "id": "unir-herr-5-61",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué describe mejor la funcionalidad de las escalas en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "Un método para estilizar los gráficos con colores."
      },
      {
        "id": "b",
        "text": "Una forma de conectar un dominio de entrada con un rango de salida."
      },
      {
        "id": "c",
        "text": "Un método exclusivo para ordenar datos categóricos."
      },
      {
        "id": "d",
        "text": "Una herramienta para animar gráficos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las escalas son funciones matemáticas que mapean un espacio de datos (dominio) a un espacio de visualización (rango). Por ejemplo, permiten convertir un valor de temperatura de 40°C en una posición de 200 píxeles en la pantalla.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-62",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En el siguiente código de D3.js, ¿qué representa el argumento de la función d3.max()?\\newline d3.max(dataset, function(d) \\{ return d[1]; \\);}",
    "options": [
      {
        "id": "a",
        "text": "El valor máximo del rango de salida."
      },
      {
        "id": "b",
        "text": "El valor máximo del segundo elemento en cada sub-array del dataset."
      },
      {
        "id": "c",
        "text": "El valor mínimo del dominio de entrada."
      },
      {
        "id": "d",
        "text": "El ancho de la gráfica definida en el código."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La función d3.max recorre el dataset. La función anónima (el ``accessor'') le indica que debe observar el índice [1] de cada sub-arreglo (comúnmente la coordenada Y en un Scatter Plot) para encontrar y devolver el valor más alto de esa columna específica.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-63",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué el rango del eje Y se define de la forma range([h, 0]) en lugar de [0, h]?",
    "options": [
      {
        "id": "a",
        "text": "Para ajustar los márgenes del eje X automáticamente."
      },
      {
        "id": "b",
        "text": "Para que los valores altos de Y se ubiquen en la parte inferior del gráfico."
      },
      {
        "id": "c",
        "text": "Para invertir el orden de los valores y alinear con las coordenadas del SVG."
      },
      {
        "id": "d",
        "text": "Porque D3.js no permite definir rangos ascendentes para Y."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Como el origen (0,0) de un SVG está en la esquina superior izquierda, un valor de Y grande normalmente empujaría el elemento hacia abajo. Al definir el rango como [h, 0], le decimos a D3 que el valor mínimo del dominio debe estar en la posición h (abajo) y el valor máximo en la posición 0 (arriba), normalizando la visualización para el ojo humano.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-64",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué resultado se espera al ejecutar el siguiente código en D3.js?\\newline var scale = d3.scale.linear().domain([100, 500]).range([10, 350]);\\newline scale(300);",
    "options": [
      {
        "id": "a",
        "text": "180."
      },
      {
        "id": "b",
        "text": "150."
      },
      {
        "id": "c",
        "text": "200."
      },
      {
        "id": "d",
        "text": "180."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Es una interpolación lineal. El valor 300 está exactamente en el centro del dominio (100 a 500). Por lo tanto, el resultado debe ser el punto medio del rango (10 a 350). El cálculo sería: $$(350 - 10) / 2 + 10 = 170 + 10 = 180$$.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-65",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de usar d3.min() y d3.max() para definir el dominio de una escala?",
    "options": [
      {
        "id": "a",
        "text": "Simplifica el diseño gráfico eliminando la necesidad de rangos."
      },
      {
        "id": "b",
        "text": "Garantiza que los márgenes se ajusten automáticamente."
      },
      {
        "id": "c",
        "text": "Convierte datos categóricos en valores numéricos."
      },
      {
        "id": "d",
        "text": "Permite calcular automáticamente los valores mínimos y máximos del dominio basado en los datos."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Al usar estas funciones, el gráfico se vuelve dinámico. No importa si los datos cambian o si el conjunto de datos es nuevo; D3 encontrará los límites actuales y ajustará la escala automáticamente para que todos los puntos quepan perfectamente en el lienzo definido.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-66",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede mover el eje X al borde inferior del gráfico?",
    "options": [
      {
        "id": "a",
        "text": "Cambiando la orientación del eje con .orient(\"top\")."
      },
      {
        "id": "b",
        "text": "Aplicando la transformación .attr(\"transform\", \"translate(0,0)\")."
      },
      {
        "id": "c",
        "text": "Añadiendo .attr(\"transform\", \"translate(0,\" + (h - padding) + \")\")."
      },
      {
        "id": "d",
        "text": "Cambiando la escala con .scale(yScale)."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Por defecto, los ejes se dibujan en el origen (0,0) del SVG (esquina superior izquierda). Para mover el eje X al fondo, debemos usar una transformación de traslación que lo desplace verticalmente la distancia de la altura total (h) menos el margen de seguridad (padding).",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-67",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué propiedad del eje se debe ajustar para limitar el número de divisiones visibles?",
    "options": [
      {
        "id": "a",
        "text": ".ticks(5)."
      },
      {
        "id": "b",
        "text": ".scale(xScale)."
      },
      {
        "id": "c",
        "text": ".orient(\"left\")."
      },
      {
        "id": "d",
        "text": ".translate(0,30)."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El método .ticks() le indica a D3 una sugerencia sobre cuántas marcas de graduación (divisiones) debe mostrar. D3 calculará automáticamente los valores más legibles basándose en ese número para que el eje no se vea saturado de información.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-68",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se pueden aplicar estilos personalizados al eje utilizando CSS?",
    "options": [
      {
        "id": "a",
        "text": "Cambiando las propiedades dentro del método .call(xAxis)."
      },
      {
        "id": "b",
        "text": "Modificando directamente las propiedades del eje con .style(\"color\", \"black\")."
      },
      {
        "id": "c",
        "text": "Definiendo la clase CSS .axis con propiedades específicas para SVG, como stroke."
      },
      {
        "id": "d",
        "text": "No se pueden aplicar estilos a elementos SVG con CSS."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los elementos generados por un eje en D3 son etiquetas estándar de SVG (path, line, text). Al asignar una clase al grupo contenedor (g), podemos usar CSS tradicional con propiedades de SVG para controlar el color de la línea (stroke), el grosor y la tipografía.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-69",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función mueve el eje Y hacia el borde izquierdo del gráfico?",
    "options": [
      {
        "id": "a",
        "text": ".orient(\"bottom\")."
      },
      {
        "id": "b",
        "text": ".attr(\"transform\", \"translate(\" + padding + \",0)\")."
      },
      {
        "id": "c",
        "text": ".ticks(5)."
      },
      {
        "id": "d",
        "text": ".scale(xScale)."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al igual que el eje X, el eje Y aparece originalmente en el borde extremo izquierdo (x=0). Para que las etiquetas no queden cortadas o fuera del lienzo, aplicamos un translate horizontal equivalente al padding para empujar el eje hacia la derecha dentro del área visible.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-70",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál sería el resultado de aplicar el siguiente CSS al eje?\\newline .axis path, .axis line \\{ fill: none; stroke: black; stroke-width: 2; shape-rendering: crispEdges; \\}\\newline .axis text \\{ font-family: sans-serif; font-size: 11px; \\}",
    "options": [
      {
        "id": "a",
        "text": "El eje tendrá líneas y texto con estilos predeterminados del navegador."
      },
      {
        "id": "b",
        "text": "No se aplicará ningún estilo porque CSS no afecta elementos SVG."
      },
      {
        "id": "c",
        "text": "El eje aparecerá con colores aleatorios y el texto no será legible."
      },
      {
        "id": "d",
        "text": "Las líneas del eje serán negras, de 2 píxeles de grosor y el texto será sans-serif de 11px."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El CSS define exactamente esas propiedades: stroke: black y stroke-width: 2 afectan a las líneas, mientras que las reglas de .axis text definen la fuente y el tamaño del texto. shape-rendering: crispEdges asegura que las líneas se vean nítidas y no borrosas.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-71",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal diferencia entre una escala lineal y una escala ordinal en D3?",
    "options": [
      {
        "id": "a",
        "text": "Las escalas lineales distribuyen datos categóricos y las ordinales, datos continuos."
      },
      {
        "id": "b",
        "text": "Las escalas ordinales dividen los datos en bandas discretas, mientras que las lineales utilizan valores continuos."
      },
      {
        "id": "c",
        "text": "Las escalas ordinales son más precisas que las lineales en gráficos con datos numéricos."
      },
      {
        "id": "d",
        "text": "Las escalas lineales no requieren un dominio definido."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Mientras que una escala lineal mapea un rango continuo de números, la escala ordinal se utiliza para datos categóricos o discretos. En visualización de barras, esto permite asignar a cada categoría una ``banda'' de espacio específica y uniforme en el eje.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-72",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hace el parámetro 0.05 en .rangeRoundBands([0, w], 0.05)?",
    "options": [
      {
        "id": "a",
        "text": "Define el tamaño de las bandas dentro del rango total."
      },
      {
        "id": "b",
        "text": "Aumenta el dominio de la escala ordinal."
      },
      {
        "id": "c",
        "text": "Controla la altura de las barras en un bar chart."
      },
      {
        "id": "d",
        "text": "Establece el espacio entre las bandas para una separación visual clara."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Este valor representa el padding o espaciado entre las barras. Se expresa como una fracción del ancho de la banda; en este caso, el 5\\% del espacio asignado a cada categoría se reserva como margen para que las barras no aparezcan pegadas entre sí.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-73",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Dado el siguiente código: .attr(\"width\", xScale.rangeBand()), ¿qué propósito tiene el uso de xScale.rangeBand()?",
    "options": [
      {
        "id": "a",
        "text": "Define el ancho constante de las barras basado en el rango de la escala ordinal."
      },
      {
        "id": "b",
        "text": "Ajusta el ancho dinámicamente según los valores del dominio."
      },
      {
        "id": "c",
        "text": "Calcula la altura de las barras en función del dataset."
      },
      {
        "id": "d",
        "text": "Determina el espacio entre las barras en un gráfico de barras."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El método rangeBand() devuelve el ancho calculado para cada barra después de haber restado el espacio de separación (padding). Esto asegura que todas las barras tengan exactamente el mismo grosor y quepan perfectamente dentro del ancho total del gráfico (w).",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-74",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Si eliminas el parámetro 0.05 de .rangeRoundBands([0, w], 0.05), ¿qué ocurre?",
    "options": [
      {
        "id": "a",
        "text": "Las barras se superpondrán entre sí."
      },
      {
        "id": "b",
        "text": "Las barras ocuparán el rango total sin espacio entre ellas."
      },
      {
        "id": "c",
        "text": "El ancho de las barras aumentará, pero conservarán su separación."
      },
      {
        "id": "d",
        "text": "No habrá ningún cambio visual."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al no declarar un valor de padding, D3 asume que es 0. Como resultado, el rangeBand() ocupará todo el espacio disponible para cada categoría, haciendo que los bordes de las barras se toquen, eliminando el espacio en blanco entre ellas.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-5-75",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué logra el siguiente código al trabajar con una escala ordinal?\\newline .domain(d3.range(dataset.length))",
    "options": [
      {
        "id": "a",
        "text": "Crea un rango continuo basado en el tamaño del dataset."
      },
      {
        "id": "b",
        "text": "Define las etiquetas para un eje categórico."
      },
      {
        "id": "c",
        "text": "Genera un dominio discreto con índices numéricos para cada elemento del dataset."
      },
      {
        "id": "d",
        "text": "Convierte los datos en valores lineales para la escala."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "d3.range(n) genera una lista de números desde 0 hasta n-1. Al usar esto como dominio, le asignamos a la escala ordinal un identificador único (su índice) para cada elemento del conjunto de datos, permitiendo posicionar cada barra de forma independiente y secuencial.",
    "domain": "Tema 5: Escalas y Ejes"
  },
  {
    "id": "unir-herr-6-76",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En el código de Force-Directed Graph proporcionado, ¿cuál es la función del siguiente fragmento?\\newline var force = d3.layout.force().charge(-120).linkDistance(30)...start();",
    "options": [
      {
        "id": "a",
        "text": "Establecer la distancia entre los nodos y la fuerza de repulsión."
      },
      {
        "id": "b",
        "text": "Crear los enlaces entre los nodos y asignarles un color."
      },
      {
        "id": "c",
        "text": "Definir las coordenadas iniciales de los nodos."
      },
      {
        "id": "d",
        "text": "Generar la animación de los nodos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Este fragmento inicializa el motor de simulación física de D3. El método .charge() define la fuerza entre nodos (negativa para repulsión) y .linkDistance() establece la longitud ideal que deben mantener los enlaces que los unen.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-77",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué realiza el siguiente fragmento de código en el contexto del Force-Directed Graph?\\newline force.on(\"tick\", function() \\{ ... \\);}",
    "options": [
      {
        "id": "a",
        "text": "Asignar un color específico a los nodos."
      },
      {
        "id": "b",
        "text": "Inicializar los nodos y enlaces en la visualización."
      },
      {
        "id": "c",
        "text": "Actualizar las posiciones de los nodos y enlaces en cada paso de la simulación."
      },
      {
        "id": "d",
        "text": "Ajustar la distancia entre los nodos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El evento ``tick'' es el corazón de la animación. Se dispara en cada paso del motor físico; dentro de esta función, el código toma las nuevas coordenadas calculadas por la simulación (d.x, d.y) y las aplica a los atributos de los elementos SVG para que se muevan visualmente en la pantalla.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-78",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué efecto tiene la siguiente línea de código en la visualización de D3?\\newline node.call(force.drag);",
    "options": [
      {
        "id": "a",
        "text": "Permite que los nodos sean arrastrados por el usuario."
      },
      {
        "id": "b",
        "text": "Define las propiedades visuales de los nodos."
      },
      {
        "id": "c",
        "text": "Establece el comportamiento de los enlaces entre los nodos."
      },
      {
        "id": "d",
        "text": "Ajusta la distancia entre los nodos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El método .call(force.drag) vincula un comportamiento interactivo a los elementos de los nodos. Esto permite que el usuario haga clic y arrastre un nodo, interactuando directamente con la simulación física en tiempo real.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-79",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de datos se encuentran en el archivo stations\\_graph.json utilizado en el código?",
    "options": [
      {
        "id": "a",
        "text": "Información sobre las líneas de metro."
      },
      {
        "id": "b",
        "text": "Coordenadas geográficas de las estaciones de metro."
      },
      {
        "id": "c",
        "text": "Datos de temperatura y humedad de las estaciones."
      },
      {
        "id": "d",
        "text": "Nodos y enlaces que representan paradas de metro y sus conexiones."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Un gráfico de fuerza requiere una estructura de red específica. El archivo JSON debe contener un arreglo de nodes (los puntos o estaciones) y un arreglo de links (las conexiones o líneas entre estaciones) para que D3 pueda construir el grafo correctamente.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-80",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En el código del Force-Directed Graph, ¿qué efecto tiene la línea charge(-120)?",
    "options": [
      {
        "id": "a",
        "text": "Establecer la distancia entre los nodos."
      },
      {
        "id": "b",
        "text": "Controlar la fuerza de repulsión entre los nodos."
      },
      {
        "id": "c",
        "text": "Definir el color de los nodos."
      },
      {
        "id": "d",
        "text": "Crear los enlaces entre los nodos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En D3 Force, el valor de charge simula la carga eléctrica. Un valor negativo (como -120) hace que los nodos se repelan entre sí, evitando que se encimen y permitiendo que la red se expanda y sea legible. Si fuera positivo, los nodos se atraerían como imanes.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-81",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué elemento en D3.js permite añadir interactividad a un gráfico, como un evento de clic?",
    "options": [
      {
        "id": "a",
        "text": ".transition()."
      },
      {
        "id": "b",
        "text": ".selectAll()."
      },
      {
        "id": "c",
        "text": ".on(\"click\", function() \\{\\ldots\\)}."
      },
      {
        "id": "d",
        "text": ".data()."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "El método .on() es el escuchador de eventos (event listener) estándar en D3.js. Permite capturar acciones del usuario como click, mouseover o mouseout y ejecutar una función de respuesta para modificar la visualización dinámicamente.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-82",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función se usa en D3 para animar una transición, permitiendo que un cambio en las propiedades de un gráfico se realice de manera suave?",
    "options": [
      {
        "id": "a",
        "text": ".delay()."
      },
      {
        "id": "b",
        "text": ".transition()."
      },
      {
        "id": "c",
        "text": ".remove()."
      },
      {
        "id": "d",
        "text": ".duration()."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al insertar .transition() en una cadena de métodos, D3 interpola automáticamente los valores entre el estado actual y el estado final (como cambios de color, posición o tamaño), creando una animación fluida en lugar de un cambio brusco instantáneo.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-83",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo puedes actualizar la altura de las barras en un gráfico de barras al actualizar el dataset en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "Utilizando .attr(\"height\", function(d) \\{\\ldots\\)}."
      },
      {
        "id": "b",
        "text": "Modificando directamente el atributo height en el HTML."
      },
      {
        "id": "c",
        "text": "Usando .append(\"rect\")."
      },
      {
        "id": "d",
        "text": "Llamando a .text()."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Una vez que el nuevo dataset ha sido vinculado a los elementos existentes mediante .data(), se debe volver a llamar a .attr() para que la propiedad height se recalcule basándose en los nuevos valores numéricos de los datos.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-84",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué método en D3.js se utiliza para definir la duración de una transición en milisegundos?",
    "options": [
      {
        "id": "a",
        "text": ".ease()."
      },
      {
        "id": "b",
        "text": ".duration()."
      },
      {
        "id": "c",
        "text": ".delay()."
      },
      {
        "id": "d",
        "text": ".attr()."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El método .duration() se utiliza inmediatamente después de .transition() para especificar cuánto tiempo debe durar la animación. Por ejemplo, .duration(1000) hará que el cambio tome exactamente un segundo.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-85",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ocurre si se aplica una transición solo a los rectángulos (rect) de un gráfico, pero no a los textos (text) asociados en D3.js?",
    "options": [
      {
        "id": "a",
        "text": "Los rectángulos se moverán suavemente, pero el texto permanecerá fijo."
      },
      {
        "id": "b",
        "text": "El texto se moverá, pero los rectángulos permanecerán fijos."
      },
      {
        "id": "c",
        "text": "Ambos se moverán de manera sincronizada."
      },
      {
        "id": "d",
        "text": "Ninguno de los dos se moverá."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En D3.js, las transiciones no son globales; se aplican específicamente a la selección actual. Si los elementos text no reciben explícitamente el método .transition(), cambiarán sus atributos de forma instantánea o no se moverán en absoluto, perdiendo la sincronía visual con las barras.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-86",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede cuando se hace clic en una barra dentro del gráfico creado con D3.js utilizando el siguiente código?\\newline svg.selectAll(\"rect\").on(\"click\", function(d) \\{ alert(d); \\) ...}",
    "options": [
      {
        "id": "a",
        "text": "La barra cambia de color."
      },
      {
        "id": "b",
        "text": "Se muestra el valor asociado a la barra en una ventana emergente."
      },
      {
        "id": "c",
        "text": "Se genera una animación en la barra sin mostrar ningún valor."
      },
      {
        "id": "d",
        "text": "El gráfico cambia de formato a un PDF."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La función alert() en JavaScript dispara un cuadro de diálogo nativo del navegador. Al pasarle como argumento d (que representa el dato vinculado a ese elemento), el navegador mostrará el valor numérico o el objeto de datos correspondiente a esa barra específica al hacer clic.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-87",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ocurre cuando se pasa el ratón sobre una barra dentro del gráfico con el siguiente código?\\newline .on(\"mouseover\", ... .style(\"fill\", \"red\"))\\newline .on(\"mouseout\", ...)",
    "options": [
      {
        "id": "a",
        "text": "La barra cambia a color rojo cuando el ratón pasa por encima y vuelve a su color original al quitar el ratón."
      },
      {
        "id": "b",
        "text": "La barra se mantiene roja permanentemente."
      },
      {
        "id": "c",
        "text": "La barra cambia su tamaño cada vez que el ratón pasa por encima."
      },
      {
        "id": "d",
        "text": "El gráfico se vuelve un archivo SVG cuando el ratón pasa sobre la barra."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El código utiliza dos eventos complementarios: mouseover cambia el estilo de relleno (fill) a rojo, y mouseout utiliza una función para recalcular y restaurar el color original basado en los datos, creando un efecto de ``highlight'' o resaltado temporal.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-88",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal ventaja de exportar un gráfico como SVG en lugar de usar una captura de pantalla (Bitmap)?",
    "options": [
      {
        "id": "a",
        "text": "Los archivos SVG son más pequeños que los archivos Bitmap."
      },
      {
        "id": "b",
        "text": "Los archivos SVG pueden modificarse y escalarse sin pérdida de calidad."
      },
      {
        "id": "c",
        "text": "Los archivos SVG solo se pueden abrir en navegadores web."
      },
      {
        "id": "d",
        "text": "Los archivos SVG no permiten mostrar imágenes."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al ser un formato vectorial, el SVG no depende de píxeles fijos. Esto permite que el gráfico sea reescalado infinitamente para impresiones de gran formato o presentaciones sin que se vea borroso o pixelado, además de permitir la edición posterior de cada elemento (barras, ejes, texto) en programas como Adobe Illustrator o Inkscape.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-89",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede exportar un gráfico de D3.js a formato PDF desde el navegador?",
    "options": [
      {
        "id": "a",
        "text": "Seleccionando el gráfico y copiándolo en un archivo PDF manualmente."
      },
      {
        "id": "b",
        "text": "Utilizando el atajo de teclado ``Ctrl + P'' y eligiendo la opción de imprimir en formato PDF."
      },
      {
        "id": "c",
        "text": "Seleccionando ``Exportar como PDF'' directamente desde el menú de D3.js."
      },
      {
        "id": "d",
        "text": "Haciendo clic derecho sobre el gráfico y seleccionando ``Guardar como PDF''."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Dado que D3.js renderiza elementos estándar de la web, la forma más directa y universal de obtener un PDF es utilizar la función de impresión del navegador. Al seleccionar ``Guardar como PDF'' en el destino de impresión, el navegador convierte el DOM actual (incluyendo el SVG) en un documento PDF vectorial.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-6-90",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué método se recomienda para exportar un gráfico en D3.js a un archivo SVG para edición posterior?",
    "options": [
      {
        "id": "a",
        "text": "Tomando una captura de pantalla del gráfico."
      },
      {
        "id": "b",
        "text": "Usando la opción de exportación en formato Bitmap."
      },
      {
        "id": "c",
        "text": "Inspeccionando el elemento y copiando el contenido entre las etiquetas <svg>\\ldots</svg>."
      },
      {
        "id": "d",
        "text": "Guardando el gráfico como un archivo PNG."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Como el gráfico generado por D3.js vive dentro del código HTML de la página, se puede acceder a él mediante las herramientas de desarrollador del navegador. Copiar el bloque de código que empieza con <svg> y pegarlo en un archivo con extensión .svg preserva toda la estructura vectorial para su uso profesional externo.",
    "domain": "Tema 6: Interactividad"
  },
  {
    "id": "unir-herr-7-91",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica de Power BI lo hace destacar en el análisis de datos empresariales según el cuadrante mágico de Gartner?",
    "options": [
      {
        "id": "a",
        "text": "Su interfaz avanzada y su dificultad técnica."
      },
      {
        "id": "b",
        "text": "Su capacidad para integrar múltiples fuentes de datos y generar visualizaciones interactivas."
      },
      {
        "id": "c",
        "text": "Su diseño exclusivo para expertos en business intelligence."
      },
      {
        "id": "d",
        "text": "Su capacidad para manejar solo pequeñas cantidades de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Power BI se posiciona como líder gracias a su versatilidad para conectar cientos de orígenes de datos (Excel, SQL, Azure, Web) y transformarlos en tableros interactivos que facilitan la toma de decisiones, todo bajo un ecosistema integrado con Microsoft 365.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-92",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la opción de Power BI que permite el análisis personal gratuito sin necesidad de conexión a la nube?",
    "options": [
      {
        "id": "a",
        "text": "Power BI Desktop."
      },
      {
        "id": "b",
        "text": "Power BI Pro."
      },
      {
        "id": "c",
        "text": "Power BI Server."
      },
      {
        "id": "d",
        "text": "Power BI Cloud."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Power BI Desktop es la aplicación gratuita de escritorio diseñada para que cualquier usuario pueda limpiar, modelar y visualizar datos de forma local en su PC sin costo alguno. La conexión a la nube solo es estrictamente necesaria cuando se desea compartir informes a través del servicio de Power BI (SaaS).",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-93",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal del menú lateral izquierdo en Power BI?",
    "options": [
      {
        "id": "a",
        "text": "Permitir la creación de gráficos avanzados."
      },
      {
        "id": "b",
        "text": "Acceder a diferentes vistas de los informes."
      },
      {
        "id": "c",
        "text": "Modificar los filtros de visualización."
      },
      {
        "id": "d",
        "text": "Mostrar los datos en tiempo real."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El menú lateral izquierdo (barra de navegación) permite al usuario alternar entre las tres vistas fundamentales de la herramienta: la vista de Informe (diseño de lienzos), la vista de Datos (tablas y registros) y la vista de Modelo (relaciones entre tablas).",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-94",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se puede hacer en el menú lateral derecho de Power BI?",
    "options": [
      {
        "id": "a",
        "text": "Modificar el tamaño de las gráficas."
      },
      {
        "id": "b",
        "text": "Cambiar la apariencia de la interfaz."
      },
      {
        "id": "c",
        "text": "Aplicar filtros y seleccionar los campos para la visualización."
      },
      {
        "id": "d",
        "text": "Controlar las conexiones de datos en tiempo real."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "En el panel derecho se ubican los paneles de Campos (donde seleccionas las columnas de tus tablas), Visualizaciones (donde eliges el tipo de gráfico y aplicas formato) y Filtros (donde segmentas la información del informe).",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-95",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una de las principales ventajas que ofrece Power BI en cuanto a su interfaz y facilidad de uso?",
    "options": [
      {
        "id": "a",
        "text": "Solo es accesible para usuarios avanzados de business intelligence."
      },
      {
        "id": "b",
        "text": "Su diseño es exclusivo para computadoras de alto rendimiento."
      },
      {
        "id": "c",
        "text": "Su interfaz es intuitiva y fácil de usar, incluso sin conocimientos técnicos avanzados."
      },
      {
        "id": "d",
        "text": "Necesita de un curso avanzado para poder utilizarse correctamente."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Power BI democratiza el análisis de datos mediante una filosofía ``drag and drop'' (arrastrar y soltar) y una interfaz familiar para usuarios de Microsoft Office (como Excel), permitiendo que perfiles de negocio generen valor sin depender totalmente del departamento de IT.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-96",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes es una de las funciones principales de Power BI en el proceso de análisis de datos?",
    "options": [
      {
        "id": "a",
        "text": "Solo recopilar datos de un único origen."
      },
      {
        "id": "b",
        "text": "Modelar datos para crear una estructura que facilite su posterior visualización."
      },
      {
        "id": "c",
        "text": "Exportar todos los datos a archivos de texto."
      },
      {
        "id": "d",
        "text": "Analizar los datos sin necesidad de cargarlos en el sistema."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El modelado es el núcleo de Power BI. Consiste en definir relaciones entre diferentes tablas para que el motor de la herramienta pueda cruzar información de manera coherente, permitiendo que un filtro en una tabla de ``Clientes'' afecte correctamente a una tabla de ``Ventas''.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-97",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué acción realiza el Query Manager de Power BI durante la preparación de los datos?",
    "options": [
      {
        "id": "a",
        "text": "Crea un informe visual con los datos."
      },
      {
        "id": "b",
        "text": "Exporta los datos a otros programas como Excel."
      },
      {
        "id": "c",
        "text": "Genera gráficos para visualizar la información."
      },
      {
        "id": "d",
        "text": "Realiza transformaciones y limpia los datos."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Aunque en la interfaz moderna se conoce principalmente como el Editor de Power Query, su motor (Query Manager) se encarga de ejecutar todos los pasos grabados (como cambiar tipos de datos, reemplazar valores o quitar errores) para asegurar que los datos estén ``limpios'' antes de pasar al informe.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-98",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué herramienta de Power BI se utiliza para transformar y preparar los datos después de su importación?",
    "options": [
      {
        "id": "a",
        "text": "Power Query."
      },
      {
        "id": "b",
        "text": "Power Pivot."
      },
      {
        "id": "c",
        "text": "Query Manager."
      },
      {
        "id": "d",
        "text": "Power BI Desktop."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Power Query es la tecnología de extracción y transformación (ETL). Es una ventana independiente dentro de Power BI donde se procesan los datos mediante un lenguaje llamado M, permitiendo automatizar la limpieza de datos cada vez que el informe se actualiza.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-99",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de la función ``Obtener datos'' en Power BI?",
    "options": [
      {
        "id": "a",
        "text": "Crear visualizaciones directamente."
      },
      {
        "id": "b",
        "text": "Cargar datos desde diferentes fuentes como archivos, bases de datos o servicios en línea."
      },
      {
        "id": "c",
        "text": "Analizar automáticamente los datos sin necesidad de preparación."
      },
      {
        "id": "d",
        "text": "Transformar los datos para su visualización final."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Es el punto de partida de cualquier proyecto. Esta función permite a Power BI conectarse a una amplia gama de conectores (Excel, SQL Server, Salesforce, Google Analytics, etc.) para traer la información al entorno de trabajo.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-100",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué opción se utiliza en Power BI para eliminar columnas o realizar otras transformaciones en los datos antes de cargarlos en el modelo?",
    "options": [
      {
        "id": "a",
        "text": "Query Manager."
      },
      {
        "id": "b",
        "text": "Vista Informe."
      },
      {
        "id": "c",
        "text": "Visualizaciones."
      },
      {
        "id": "d",
        "text": "Filtros."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El Query Manager (Editor de Power Query) es el lugar específico donde se ``prepara'' la carga. Acciones como eliminar columnas innecesarias son fundamentales para optimizar el rendimiento del modelo y reducir el tamaño del archivo final.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-101",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Power BI, al crear una visualización y no seleccionar un tipo específico, ¿qué tipo de visualización se aplica por defecto?",
    "options": [
      {
        "id": "a",
        "text": "Diagrama de dispersión."
      },
      {
        "id": "b",
        "text": "Tabla de datos."
      },
      {
        "id": "c",
        "text": "Gráfico de barras."
      },
      {
        "id": "d",
        "text": "Mapa."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Cuando simplemente arrastras campos numéricos o de texto al lienzo sin haber seleccionado previamente un icono del panel de visualizaciones, Power BI genera automáticamente una tabla. Esta es la forma más básica de mostrar los registros antes de convertirlos en un gráfico específico.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-102",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la herramienta en Power BI que permite aplicar filtros a los datos basados en campos específicos?",
    "options": [
      {
        "id": "a",
        "text": "Segmentación de datos."
      },
      {
        "id": "b",
        "text": "Filtros."
      },
      {
        "id": "c",
        "text": "Gráfico de barras."
      },
      {
        "id": "d",
        "text": "Mapas."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "La Segmentación de datos (Slicer) es un objeto visual que permite filtrar el resto de las gráficas del informe de manera intuitiva. Es fundamental para crear cuadros de mando interactivos donde el usuario puede elegir, por ejemplo, un año o una región específica.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-103",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de gráfico sería más adecuado para visualizar la evolución de un valor a lo largo del tiempo en Power BI?",
    "options": [
      {
        "id": "a",
        "text": "Gráfico de áreas."
      },
      {
        "id": "b",
        "text": "Gráfico de barras."
      },
      {
        "id": "c",
        "text": "Gráfico de dispersión."
      },
      {
        "id": "d",
        "text": "Gráfico de líneas."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Los gráficos de líneas son el estándar para el análisis de series temporales. Permiten identificar tendencias, picos y caídas a través del tiempo de forma mucho más clara que los gráficos de barras, especialmente cuando se manejan muchos periodos.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-104",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué debes hacer si un valor erróneo aparece en una visualización de Power BI debido a datos incorrectos?",
    "options": [
      {
        "id": "a",
        "text": "Filtrar los datos."
      },
      {
        "id": "b",
        "text": "Excluir el valor erróneo haciendo clic sobre él y seleccionando \"Excluir\"."
      },
      {
        "id": "c",
        "text": "Reemplazar el valor erróneo manualmente."
      },
      {
        "id": "d",
        "text": "Eliminar todos los datos relacionados."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Power BI ofrece una función de limpieza rápida directamente en la visualización. Al hacer clic derecho sobre un punto de dato o una barra específica, puedes elegir ``Excluir'', lo cual crea automáticamente un filtro que oculta ese valor específico del gráfico sin afectar la base de datos original.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-7-105",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué sería útil aplicar un filtro para eliminar datos incompletos o erróneos en un análisis de Power BI?",
    "options": [
      {
        "id": "a",
        "text": "Para mejorar la presentación visual."
      },
      {
        "id": "b",
        "text": "Para aumentar la cantidad de datos analizados."
      },
      {
        "id": "c",
        "text": "Para asegurar que el análisis se base solo en datos completos y confiables."
      },
      {
        "id": "d",
        "text": "Para simplificar los cálculos de los gráficos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La integridad de los datos es vital para la toma de decisiones. Filtrar valores nulos, registros incompletos o errores obvios garantiza que los indicadores (KPIs) y promedios reflejen la realidad del negocio y no se vean sesgados por ``ruido'' en la información.",
    "domain": "Tema 7: Power BI"
  },
  {
    "id": "unir-herr-8-106",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué diferencia principal existe entre las versiones de Qlik Sense Business y Enterprise?",
    "options": [
      {
        "id": "a",
        "text": "La versión Business incluye funcionalidades avanzadas, como Qlik GeoAnalytics."
      },
      {
        "id": "b",
        "text": "La versión Enterprise permite la creación de apps en la nube, mientras que la versión Business solo permite el trabajo en escritorio."
      },
      {
        "id": "c",
        "text": "La versión Business tiene un número limitado de espacios y capacidades de integración con API."
      },
      {
        "id": "d",
        "text": "La versión Enterprise no permite la creación de visualizaciones interactivas."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Qlik Sense Business es una solución SaaS diseñada para equipos pequeños, por lo que tiene restricciones en el número de espacios compartidos y en el nivel de personalización mediante APIs en comparación con la versión Enterprise, la cual está pensada para despliegues masivos a gran escala y multinube.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-107",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes opciones es una acción inicial que se realiza al crear una nueva app en Qlik Sense?",
    "options": [
      {
        "id": "a",
        "text": "Añadir un gráfico de barras."
      },
      {
        "id": "b",
        "text": "Seleccionar un conjunto de datos a través de los conectores de Qlik."
      },
      {
        "id": "c",
        "text": "Definir las relaciones entre tablas."
      },
      {
        "id": "d",
        "text": "Establecer dimensiones y medidas para las visualizaciones."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Antes de poder visualizar o modelar, el primer paso lógico tras crear una aplicación vacía es la ingesta de datos. Qlik ofrece diversos conectores para traer información desde archivos locales, bases de datos o servicios en la nube.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-108",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué funcionalidad permite a los usuarios de Qlik Sense crear filtros dinámicos en sus visualizaciones?",
    "options": [
      {
        "id": "a",
        "text": "El panel de filtrado."
      },
      {
        "id": "b",
        "text": "El editor de carga de datos."
      },
      {
        "id": "c",
        "text": "El visor del modelo de datos."
      },
      {
        "id": "d",
        "text": "La opción \"cargar datos\" del menú principal."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El ``Filter Pane'' es un objeto visual que permite a los usuarios finales realizar selecciones sobre campos específicos. Gracias al motor asociativo de Qlik, al seleccionar un valor en este panel, toda la aplicación se actualiza instantáneamente para mostrar solo la información relacionada.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-109",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es lo que define una dimensión en Qlik Sense al crear gráficos?",
    "options": [
      {
        "id": "a",
        "text": "El valor de la medida que se va a mostrar en el gráfico."
      },
      {
        "id": "b",
        "text": "La forma de agrupar los datos en el gráfico."
      },
      {
        "id": "c",
        "text": "La tabla de datos que se utilizará en la visualización."
      },
      {
        "id": "d",
        "text": "El tipo de gráfico que se mostrará."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "En Business Intelligence, las dimensiones son campos categóricos (como ``País'', ``Categoría'' o ``Año'') que determinan cómo se segmentan o agrupan los datos. Son el ``eje'' sobre el cual se calculan las medidas numéricas.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-110",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "En Qlik Sense, ¿qué sucede cuando se hace clic en la opción \"Cargar datos\" al agregar un nuevo dataset a una app?",
    "options": [
      {
        "id": "a",
        "text": "Se inicia el proceso de conexión a una fuente de datos externa."
      },
      {
        "id": "b",
        "text": "Aparece el script de carga para que el usuario lo modifique."
      },
      {
        "id": "c",
        "text": "Los datos se visualizan inmediatamente en el gráfico seleccionado."
      },
      {
        "id": "d",
        "text": "Los datos se cargan y se presentan en un modelo de datos estructurado."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Al ejecutar la carga, Qlik procesa la información, identifica asociaciones automáticas entre tablas (si las hay) y almacena los datos en memoria. Tras este proceso, el usuario puede dirigirse al ``Gestor de datos'' o al ``Visor del modelo de datos'' para verificar la estructura final.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-111",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de utilizar filtros en una visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Resaltar los valores más bajos en los gráficos."
      },
      {
        "id": "b",
        "text": "Aplicar un formato numérico a los ejes."
      },
      {
        "id": "c",
        "text": "Ajustar los datos visualizados según ciertas dimensiones o criterios."
      },
      {
        "id": "d",
        "text": "Cambiar la orientación de la gráfica."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Los filtros permiten aislar subconjuntos de datos específicos (por ejemplo, filtrar por un año determinado o una región) para que el analista pueda enfocarse en la información relevante, eliminando el ``ruido'' de los datos que no son necesarios en ese momento.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-112",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la principal utilidad de una tabla pivotante en la exploración de datos?",
    "options": [
      {
        "id": "a",
        "text": "Crear visualizaciones con colores predeterminados."
      },
      {
        "id": "b",
        "text": "Analizar datos desglosados por diferentes dimensiones y detectar inconsistencias."
      },
      {
        "id": "c",
        "text": "Cambiar el formato de los ejes de las gráficas."
      },
      {
        "id": "d",
        "text": "Aplicar filtros a los datos de manera automática."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Las tablas pivotantes (o dinámicas) son herramientas de resumen potentes que permiten cruzar múltiples dimensiones. Son ideales para detectar rápidamente valores atípicos (outliers), errores de carga o campos vacíos que podrían pasar desapercibidos en un gráfico más abstracto.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-113",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función tienen los marcadores en la herramienta de visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar los colores de la gráfica."
      },
      {
        "id": "b",
        "text": "Almacenar configuraciones de filtros para aplicarlos fácilmente más tarde."
      },
      {
        "id": "c",
        "text": "Modificar la orientación de las gráficas."
      },
      {
        "id": "d",
        "text": "Organizar los datos de manera jerárquica."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los marcadores (bookmarks) funcionan como una ``fotografía'' del estado del informe. Guardan la configuración exacta de filtros, selecciones y visibilidad de objetos, permitiendo al usuario volver a una vista específica del análisis con un solo clic.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-114",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función tiene la opción de etiquetas en las visualizaciones de datos?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el nombre de los campos en los ejes para hacerlos más comprensibles."
      },
      {
        "id": "b",
        "text": "Cambiar el tipo de gráfico."
      },
      {
        "id": "c",
        "text": "Asignar un color aleatorio a cada barra del gráfico."
      },
      {
        "id": "d",
        "text": "Organizar los datos de forma jerárquica."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Las etiquetas de eje y títulos permiten renombrar variables técnicas (como nombres de columnas de base de datos tipo vent\\_net\\_2026) por nombres legibles para el negocio (Ventas Netas 2026), mejorando significativamente la comunicación del informe.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-115",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué ocurre cuando se selecciona la opción \"Por dimensión\" al modificar los colores en una gráfica?",
    "options": [
      {
        "id": "a",
        "text": "Los colores de la gráfica se asignan según los valores de la medida."
      },
      {
        "id": "b",
        "text": "Todos los elementos de la gráfica tienen el mismo color."
      },
      {
        "id": "c",
        "text": "Los colores se asignan mediante un gradiente secuencial."
      },
      {
        "id": "d",
        "text": "Se asigna un color único a cada categoría o dimensión."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Al colorear por dimensión, la herramienta aplica una paleta categórica donde cada valor distinto (por ejemplo, cada país en un gráfico de barras) recibe un color diferente. Esto facilita la diferenciación visual rápida entre las categorías comparadas.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-116",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de utilizar mapas geográficos en las herramientas de visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Crear gráficos de barras sobre una ubicación específica."
      },
      {
        "id": "b",
        "text": "Representar la información de manera visual con datos asociados a la longitud y latitud."
      },
      {
        "id": "c",
        "text": "Insertar imágenes de mapas en las presentaciones."
      },
      {
        "id": "d",
        "text": "Mostrar estadísticas generales de un conjunto de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los mapas permiten transformar coordenadas abstractas (latitud/longitud) o nombres de regiones en representaciones espaciales. Esto facilita la identificación de patrones geográficos, densidades y tendencias regionales que serían difíciles de notar en una tabla simple.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-117",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se debe hacer para cambiar el color de las áreas en un mapa geográfico?",
    "options": [
      {
        "id": "a",
        "text": "Crear una presentación con colores personalizados."
      },
      {
        "id": "b",
        "text": "Agregar una capa de puntos específicos."
      },
      {
        "id": "c",
        "text": "Seleccionar el campo de la población (o medida) y elegir la opción de colores."
      },
      {
        "id": "d",
        "text": "Insertar un gráfico de dispersión con colores."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Para crear un mapa coroplético (donde las áreas tienen diferentes colores según un valor), se debe vincular una medida numérica (como población, ventas o densidad) a la propiedad de color. La herramienta aplicará automáticamente un degradado o paleta basada en la intensidad de ese valor.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-118",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de dato es comúnmente utilizado para representar ubicaciones geográficas en un mapa?",
    "options": [
      {
        "id": "a",
        "text": "Campos sobre tiempos de ejecución."
      },
      {
        "id": "b",
        "text": "Datos sobre eventos deportivos."
      },
      {
        "id": "c",
        "text": "Gráficos de barras."
      },
      {
        "id": "d",
        "text": "Códigos internacionales de países."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Las herramientas de BI utilizan estándares como los códigos ISO de países o ciudades para realizar el geoposicionamiento de forma precisa, evitando ambigüedades de nombres en diferentes idiomas y asegurando que los datos se dibujen en la ubicación correcta del mapa.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-119",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función tienen las opciones de \"Historias\" en las herramientas de visualización de datos?",
    "options": [
      {
        "id": "a",
        "text": "Visualizar gráficos avanzados, como histogramas y gráficos de dispersión."
      },
      {
        "id": "b",
        "text": "Generar tablas de datos para análisis detallados."
      },
      {
        "id": "c",
        "text": "Crear presentaciones interactivas que combinen texto, imágenes y gráficos."
      },
      {
        "id": "d",
        "text": "Crear mapas geográficos con colores personalizados."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Las ``Historias'' (o Storytelling) permiten guiar al espectador a través de una secuencia lógica de hallazgos. A diferencia de un tablero estático, una historia narra el ``por qué'' de los datos, uniendo visualizaciones con anotaciones para explicar conclusiones específicas.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-8-120",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de gráfico se utiliza para mostrar la relación entre dos variables, como la edad y el rendimiento en una actividad?",
    "options": [
      {
        "id": "a",
        "text": "Gráfico de líneas."
      },
      {
        "id": "b",
        "text": "Gráfico de dispersión."
      },
      {
        "id": "c",
        "text": "Gráfico de barras."
      },
      {
        "id": "d",
        "text": "Histograma."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El gráfico de dispersión (Scatter Plot) es la herramienta estadística por excelencia para analizar correlaciones. Al colocar una variable en el eje X y otra en el eje Y, se puede observar visualmente si existe una relación, tendencia o agrupación entre ambas.",
    "domain": "Tema 8: Qlik Sense"
  },
  {
    "id": "unir-herr-9-121",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una de las principales razones por las que Tableau ocupa un lugar destacado en el cuadrante mágico de Gartner?",
    "options": [
      {
        "id": "a",
        "text": "Es gratuita y no requiere licencia de uso."
      },
      {
        "id": "b",
        "text": "Posee un motor de búsqueda integrado para consultar datos no estructurados."
      },
      {
        "id": "c",
        "text": "Es altamente visual y ofrece análisis integral de datos."
      },
      {
        "id": "d",
        "text": "Fue desarrollada exclusivamente para el análisis de datos en tiempo real."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Tableau se distingue por su enfoque pionero en la ``alfabetización visual''. Su capacidad para permitir que los usuarios exploren datos de forma fluida y generen visualizaciones sofisticadas con una interfaz intuitiva le ha permitido mantenerse como líder en el mercado de Business Intelligence durante años.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-122",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es VizQL y por qué es importante en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Es un software que permite programar consultas de bases de datos relacionales usando Java."
      },
      {
        "id": "b",
        "text": "Es un lenguaje de consulta visual que permite transformar consultas en gráficos automáticamente."
      },
      {
        "id": "c",
        "text": "Es un motor de inteligencia artificial que mejora la precisión de los análisis predictivos en Tableau."
      },
      {
        "id": "d",
        "text": "Es un sistema operativo propietario que gestiona grandes volúmenes de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "VizQL (Visual Query Language) es la tecnología patentada que hace a Tableau único. Traduce las acciones de ``arrastrar y soltar'' del usuario en consultas de base de datos optimizadas y, simultáneamente, renderiza la respuesta como una representación visual.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-123",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál fue la contribución principal del sistema Polaris, desarrollado en Stanford, al software Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Introdujo un algoritmo de minería de datos para análisis predictivo."
      },
      {
        "id": "b",
        "text": "Creó un lenguaje de modelado de datos tridimensionales."
      },
      {
        "id": "c",
        "text": "Implementó un sistema de alertas automatizado basado en patrones de datos."
      },
      {
        "id": "d",
        "text": "Proporcionó una interfaz para explorar grandes bases de datos multidimensionales."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El sistema Polaris, nacido de una investigación académica en la Universidad de Stanford por los fundadores de Tableau, fue el precursor que combinó el análisis de tablas dinámicas con la visualización gráfica de bases de datos relacionales y cubos OLAP.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-124",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones es correcta sobre el uso de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Tableau requiere conocimientos avanzados de programación para crear informes."
      },
      {
        "id": "b",
        "text": "Tableau solo puede trabajar con bases de datos relacionales locales."
      },
      {
        "id": "c",
        "text": "Tableau permite crear informes visualmente atractivos sin necesidad de programar."
      },
      {
        "id": "d",
        "text": "Tableau no es compatible con datos almacenados en la nube."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Una de las filosofías centrales de Tableau es permitir que personas que no son programadores puedan analizar datos. Su interfaz está diseñada para que el usuario se enfoque en las preguntas de negocio mientras la herramienta gestiona la complejidad técnica del código en segundo plano.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-125",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hecho marcó un cambio significativo en la historia de Tableau en 2019?",
    "options": [
      {
        "id": "a",
        "text": "La adquisición de Tableau por parte de Salesforce."
      },
      {
        "id": "b",
        "text": "La integración de inteligencia artificial en sus procesos de análisis."
      },
      {
        "id": "c",
        "text": "La creación de un sistema operativo propietario para su software."
      },
      {
        "id": "d",
        "text": "La migración total de su plataforma a sistemas de código abierto."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En 2019, Salesforce adquirió Tableau en una de las operaciones más grandes del sector. Este movimiento permitió integrar las capacidades analíticas de Tableau con el ecosistema de CRM de Salesforce, potenciando la toma de decisiones basada en datos para sus clientes.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-126",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una de las ventajas clave de Tableau Online en comparación con Tableau Server?",
    "options": [
      {
        "id": "a",
        "text": "Permite trabajar en un entorno inhouse dentro de las instalaciones físicas de la empresa."
      },
      {
        "id": "b",
        "text": "Ofrece control completo sobre el software y los datos empleados."
      },
      {
        "id": "c",
        "text": "Requiere una conexión directa a servidores corporativos para su implementación."
      },
      {
        "id": "d",
        "text": "Es una solución SaaS completamente hospedada en la nube, sin necesidad de configuración ni costos de hardware."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Tableau Online (ahora conocido como Tableau Cloud) es la versión de software como servicio (SaaS). A diferencia de Tableau Server, que requiere que la empresa gestione sus propios servidores y mantenimiento, la versión Online permite que Tableau se encargue de toda la infraestructura, facilitando un despliegue rápido y escalable.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-127",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función tiene el motor de datos de Tableau en el manejo de grandes volúmenes de información?",
    "options": [
      {
        "id": "a",
        "text": "Ofrece soporte exclusivamente para datos estructurados en tiempo real."
      },
      {
        "id": "b",
        "text": "Simplifica la carga de datos de múltiples fuentes en servidores inhouse."
      },
      {
        "id": "c",
        "text": "Permite análisis ad hoc rápido de datos masivos, incluso en equipos de prestaciones normales."
      },
      {
        "id": "d",
        "text": "Automatiza la transformación de datos dimensionales en modelos tridimensionales."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Gracias a tecnologías como el motor Hyper, Tableau es capaz de procesar millones de filas de datos en memoria de forma extremadamente eficiente. Esto permite que un usuario con una computadora estándar pueda realizar consultas complejas y obtener respuestas visuales casi instantáneas sin depender de un superordenador.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-128",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito de los estantes de columnas y filas en la interfaz de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Generar pestañas para dividir visualizaciones en hojas individuales."
      },
      {
        "id": "b",
        "text": "Organizar los datos dimensionales y numéricos para crear visualizaciones."
      },
      {
        "id": "c",
        "text": "Exportar las visualizaciones a formatos PDF o Excel."
      },
      {
        "id": "d",
        "text": "Configurar filtros globales que afectan a todo el dashboard."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los estantes de filas (Rows) y columnas (Columns) son el lienzo donde se define la estructura del gráfico. Al arrastrar dimensiones a estos estantes, Tableau crea los ejes o encabezados, y al añadir medidas, genera los elementos visuales (barras, puntos, líneas) que representan los valores.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-129",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué función cumple el bloque de Filtros en la interfaz de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Dividir una vista en una serie de páginas para analizar un campo específico."
      },
      {
        "id": "b",
        "text": "Definir qué datos incluir o excluir en las visualizaciones."
      },
      {
        "id": "c",
        "text": "Controlar las opciones de tamaño, color y etiquetas en los gráficos."
      },
      {
        "id": "d",
        "text": "Configurar opciones avanzadas de transformación de datos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El estante de Filtros permite al autor del informe restringir la información que se muestra en la vista. Se pueden aplicar filtros de dimensiones (por categorías) o de medidas (por rangos de valores) para enfocar el análisis en un subconjunto específico de datos.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-130",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una de las funcionalidades más destacadas del bloque de marcas en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Permite analizar cómo un campo específico afecta a los datos con el tiempo."
      },
      {
        "id": "b",
        "text": "Ayuda a crear campos calculados complejos."
      },
      {
        "id": "c",
        "text": "Configura accesos directos a otras hojas de trabajo relacionadas."
      },
      {
        "id": "d",
        "text": "Ofrece opciones intuitivas para estructurar, dar forma y enriquecer los datos visuales con elementos como color y etiquetas."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "La tarjeta de Marcas (Marks Card) es donde ocurre la magia del diseño visual. Permite asignar campos de datos a propiedades estéticas como el Color, el Tamaño, el Texto (Etiqueta) y el Detalle, transformando datos planos en una representación visual rica en información y fácil de interpretar.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-131",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sucede al arrastrar un campo al estante de columnas y otro al estante de filas en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Se crea un gráfico que muestra la relación entre los dos campos en el formato más adecuado."
      },
      {
        "id": "b",
        "text": "Los campos se ordenan en filas y columnas, pero no afectan a la visualización."
      },
      {
        "id": "c",
        "text": "Solo se crea una visualización de texto en lugar de un gráfico."
      },
      {
        "id": "d",
        "text": "Los campos se suman automáticamente para crear un gráfico de barras."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Tableau utiliza su motor inteligente para proponer la visualización que mejor represente la combinación de campos. Si arrastras una dimensión y una medida, suele generar un gráfico de barras; si son dos medidas, un gráfico de dispersión. Es la base de la exploración visual rápida.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-132",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal de la opción color en la tarjeta marcas de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar la forma de los elementos visualizados."
      },
      {
        "id": "b",
        "text": "Diferenciar visualmente los datos según los valores de un campo."
      },
      {
        "id": "c",
        "text": "Ajustar el tamaño de los objetos en la visualización."
      },
      {
        "id": "d",
        "text": "Añadir información de texto a cada elemento visual."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Al soltar un campo en la propiedad Color, Tableau asigna una paleta de colores distinta a cada categoría (si es una dimensión) o un degradado (si es una medida), permitiendo al usuario identificar patrones o grupos de datos de un solo vistazo sin necesidad de leer etiquetas.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-133",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué efecto tiene la opción de tamaño en la tarjeta marcas?",
    "options": [
      {
        "id": "a",
        "text": "Ajusta la disposición de los elementos en la visualización."
      },
      {
        "id": "b",
        "text": "Cambia el color de los objetos basándose en los valores de un campo."
      },
      {
        "id": "c",
        "text": "Modifica el tamaño de los objetos en función de los valores de un campo."
      },
      {
        "id": "d",
        "text": "Aplica un filtro a los datos visualizados."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La propiedad Tamaño (Size) permite añadir una dimensión adicional al análisis. Por ejemplo, en un mapa de burbujas, el tamaño del círculo puede representar el volumen de ventas, haciendo que los valores más altos destaquen físicamente sobre los menores.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-134",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Para qué se utiliza la opción detalle en la tarjeta marcas de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Para agregar más datos a los estantes de columnas y filas."
      },
      {
        "id": "b",
        "text": "Para proporcionar información adicional sin alterar la estructura principal de la visualización."
      },
      {
        "id": "c",
        "text": "Para cambiar el formato de los gráficos."
      },
      {
        "id": "d",
        "text": "Para aplicar un filtro a los datos visualizados."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El estante de Detalle (Detail) aumenta el nivel de granularidad de la vista. Permite desglosar las marcas (por ejemplo, ver una marca por cada ciudad en lugar de una por país) sin necesidad de crear nuevas filas o columnas en la estructura de la tabla.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-9-135",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué se logra al editar la descripción emergente en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Cambiar el formato visual del gráfico."
      },
      {
        "id": "b",
        "text": "Personalizar el texto que aparece al pasar el cursor sobre un gráfico."
      },
      {
        "id": "c",
        "text": "Modificar los colores de los datos visualizados."
      },
      {
        "id": "d",
        "text": "Ajustar el tamaño de los elementos visualizados."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La Descripción emergente (Tooltip) es una herramienta poderosa de comunicación. Permite al autor formatear el texto, añadir explicaciones o incluso insertar otros gráficos pequeños (Viz in Tooltip) que aparecen solo cuando el usuario interactúa con una marca específica, enriqueciendo el contexto del análisis.",
    "domain": "Tema 9: Tableau Intro"
  },
  {
    "id": "unir-herr-10-136",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal de los filtros en Tableau durante el análisis de datos?",
    "options": [
      {
        "id": "a",
        "text": "Permitir la creación de gráficos automáticos sin intervención del usuario."
      },
      {
        "id": "b",
        "text": "Restringir los datos visibles para enfocar el análisis en criterios específicos."
      },
      {
        "id": "c",
        "text": "Generar múltiples hojas de trabajo a partir de un mismo conjunto de datos."
      },
      {
        "id": "d",
        "text": "Cambiar el diseño de las visualizaciones con un solo clic."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Los filtros actúan como una cláusula ``WHERE'' en una consulta de base de datos. Su propósito es limpiar el ruido visual y permitir que el analista se concentre únicamente en los registros que cumplen con ciertas condiciones, como un rango de fechas, una categoría de producto o una región geográfica particular.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-137",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué permite hacer Tableau para personalizar los filtros más allá de seleccionar valores específicos?",
    "options": [
      {
        "id": "a",
        "text": "Crear condiciones basadas en rangos, umbrales o límites personalizados."
      },
      {
        "id": "b",
        "text": "Combinar diferentes campos en una misma visualización."
      },
      {
        "id": "c",
        "text": "Ajustar automáticamente el diseño gráfico de la hoja de trabajo."
      },
      {
        "id": "d",
        "text": "Generar filtros exclusivamente para campos categóricos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Tableau ofrece filtros avanzados que van más allá de una simple lista de verificación. Permite establecer filtros de ``Condición'' (mediante fórmulas), filtros de ``Sencillo/Superior'' (Top N) y filtros de ``Rango de valores'' para medidas, lo que otorga un control granular sobre qué datos califican para aparecer en la vista.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-138",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de la tarjeta páginas en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Dividir la visualización en unidades para observar cambios en un campo específico."
      },
      {
        "id": "b",
        "text": "Filtrar los datos visibles según criterios personalizados."
      },
      {
        "id": "c",
        "text": "Crear gráficos comparativos entre diferentes campos categóricos."
      },
      {
        "id": "d",
        "text": "Unir diferentes conjuntos de datos en una sola hoja de trabajo."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El estante de Páginas (Pages) permite fragmentar una visualización en una serie de vistas individuales basadas en los valores de un campo (comúnmente el tiempo). Esto es especialmente útil para crear animaciones o pasar ``páginas'' para ver cómo evolucionan los datos paso a paso sin cambiar la estructura del gráfico.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-139",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una diferencia clave entre los filtros y las páginas en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Los filtros cambian automáticamente el diseño gráfico, mientras que las páginas modifican los datos en bruto."
      },
      {
        "id": "b",
        "text": "Los filtros solo funcionan con datos numéricos, mientras que las páginas trabajan con datos categóricos."
      },
      {
        "id": "c",
        "text": "Los filtros eliminan datos de la visualización, mientras que las páginas dividen los datos para analizar un campo específico."
      },
      {
        "id": "d",
        "text": "Los filtros y las páginas realizan exactamente la misma función en Tableau."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Mientras que un filtro excluye permanentemente de la vista los datos que no cumplen el criterio, el estante de páginas mantiene todos los datos ``cargados'' pero los organiza en capas secuenciales, permitiendo al usuario navegar entre ellas sin descartar el resto de la información.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-140",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué característica destaca en los filtros de Tableau respecto a su flexibilidad?",
    "options": [
      {
        "id": "a",
        "text": "Solo permiten la selección de valores individuales sin condiciones adicionales."
      },
      {
        "id": "b",
        "text": "Admiten condiciones avanzadas, como rangos, operaciones matemáticas o límites."
      },
      {
        "id": "c",
        "text": "Se aplican automáticamente a todos los gráficos de una hoja de trabajo."
      },
      {
        "id": "d",
        "text": "Solo funcionan cuando el dataset tiene campos categóricos definidos."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "La flexibilidad de Tableau reside en su capacidad de filtrar datos basándose en lógicas complejas. Por ejemplo, se puede filtrar para mostrar solo los clientes cuyas ventas sumadas superen un umbral matemático específico, combinando así el filtrado con cálculos agregados en tiempo real.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-141",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el propósito principal de un dashboard en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Permitir vincular y analizar datos entre diferentes gráficas de forma eficiente."
      },
      {
        "id": "b",
        "text": "Convertir automáticamente datos en gráficos visuales."
      },
      {
        "id": "c",
        "text": "Sustituir las hojas de trabajo individuales en el análisis de datos."
      },
      {
        "id": "d",
        "text": "Crear informes automáticos basados en datos dinámicos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Un dashboard es una colección de varias hojas de trabajo y objetos relacionados que se presentan juntos. Su valor principal no es solo mostrar gráficos, sino permitir que estos interactúen entre sí para proporcionar una visión holística y multidimensional de los datos en una sola pantalla.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-142",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se vinculan los datos de dos hojas en un dashboard en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Seleccionando \"Crear relación\" en el menú principal."
      },
      {
        "id": "b",
        "text": "Arrastrando ambas hojas a la misma área de trabajo."
      },
      {
        "id": "c",
        "text": "Activando la opción de filtro en la gráfica que se desea usar como referencia."
      },
      {
        "id": "d",
        "text": "Asignando manualmente las métricas en el menú de hojas vinculadas."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La forma más rápida de crear interactividad es usar el icono de ``Embudo'' (Usar como filtro) en el encabezado de un objeto visual dentro del dashboard. Esto hace que, al seleccionar una marca en ese gráfico, todas las demás hojas del dashboard se filtren automáticamente para mostrar solo los datos relacionados.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-143",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el primer paso para crear un dashboard en Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Arrastrar hojas de trabajo a la zona de trabajo del dashboard."
      },
      {
        "id": "b",
        "text": "Hacer clic en el icono de dashboard ubicado en la parte inferior de la pantalla."
      },
      {
        "id": "c",
        "text": "Activar las acciones de vinculación desde el menú principal."
      },
      {
        "id": "d",
        "text": "Crear gráficos personalizados en las hojas de trabajo."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Antes de colocar cualquier elemento, se debe inicializar el lienzo. En la barra de pestañas inferior de Tableau Desktop, existe un icono específico (un cuadrado dividido en cuatro) que abre una nueva pestaña de dashboard, distinta a las pestañas de hojas de trabajo estándar.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-144",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué permite hacer la opción \"Añadir acción\" en un dashboard de Tableau?",
    "options": [
      {
        "id": "a",
        "text": "Modificar el diseño visual de las hojas incluidas."
      },
      {
        "id": "b",
        "text": "Vincular hojas externas al dashboard para un análisis dinámico."
      },
      {
        "id": "c",
        "text": "Exportar automáticamente los datos analizados."
      },
      {
        "id": "d",
        "text": "Cambiar los datos base de las gráficas seleccionadas."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "El menú de Acciones es el nivel avanzado de interactividad. Permite configurar acciones de ``Filtro'', ``Resaltado'' o ``Ir a la hoja'', lo que posibilita que el usuario navegue desde un resumen en el dashboard hacia un nivel de detalle profundo en otra hoja específica del libro de trabajo.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-10-145",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se puede agregar dinamismo a un dashboard para profundizar en el análisis de datos?",
    "options": [
      {
        "id": "a",
        "text": "Configurando acciones que redirijan a otras hojas del cuaderno."
      },
      {
        "id": "b",
        "text": "Creando gráficos adicionales en las hojas de trabajo."
      },
      {
        "id": "c",
        "text": "Añadiendo gráficos animados en la interfaz principal."
      },
      {
        "id": "d",
        "text": "Aplicando filtros globales a todas las gráficas en el dashboard."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El dinamismo real se logra cuando el dashboard deja de ser una imagen estática y se convierte en una herramienta de exploración. Al configurar acciones de navegación, el analista puede ``viajar'' por los datos, pasando de una visión general a una específica de forma fluida y contextual.",
    "domain": "Tema 10: Tableau Avanzado"
  },
  {
    "id": "unir-herr-11-146",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una de las principales ventajas de los sistemas GIS para las organizaciones?",
    "options": [
      {
        "id": "a",
        "text": "Reducir el número de empleados necesarios para procesar datos."
      },
      {
        "id": "b",
        "text": "Facilitar la visualización, análisis e interpretación de datos espaciales."
      },
      {
        "id": "c",
        "text": "Aumentar la velocidad de conexión a Internet."
      },
      {
        "id": "d",
        "text": "Proporcionar acceso a datos geoespaciales sin hardware especializado."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Un Sistema de Información Geográfica (GIS) permite superponer capas de datos sobre un mapa, lo que ayuda a las organizaciones a identificar patrones, relaciones y tendencias que no son visibles en hojas de cálculo tradicionales, mejorando la toma de decisiones basada en el ``dónde''.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-147",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre CARTO es correcta?",
    "options": [
      {
        "id": "a",
        "text": "Fue fundada en 2008 por Google."
      },
      {
        "id": "b",
        "text": "Su tecnología está limitada a compañías tecnológicas pequeñas."
      },
      {
        "id": "c",
        "text": "Es una plataforma que transforma datos de ubicación en decisiones estratégicas."
      },
      {
        "id": "d",
        "text": "Solo se utiliza en aplicaciones gubernamentales."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "CARTO es una de las plataformas líderes en Location Intelligence. Se especializa en permitir que analistas y científicos de datos extraigan valor de los datos geoespaciales mediante análisis predictivo y visualización avanzada, sin requerir necesariamente ser expertos en cartografía tradicional.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-148",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué evento marcó el inicio del auge de la inteligencia de ubicación (LI)?",
    "options": [
      {
        "id": "a",
        "text": "La democratización de los datos por parte de CARTO."
      },
      {
        "id": "b",
        "text": "La incorporación de GPS en smartphones de Apple en 2008."
      },
      {
        "id": "c",
        "text": "La creación de mashups por empresas de inteligencia empresarial."
      },
      {
        "id": "d",
        "text": "La aparición del concepto de big data en la nube."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Aunque la tecnología existía, la llegada del GPS al iPhone 3G masificó la generación de datos de ubicación en tiempo real. Esto creó un ecosistema donde las aplicaciones y empresas empezaron a recopilar y analizar flujos masivos de datos geográficos generados por los usuarios.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-149",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes tecnologías es clave para el análisis de datos de ubicación?",
    "options": [
      {
        "id": "a",
        "text": "Computación en la nube."
      },
      {
        "id": "b",
        "text": "Redes sociales."
      },
      {
        "id": "c",
        "text": "Software de hoja de cálculo."
      },
      {
        "id": "d",
        "text": "Navegadores web."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "El análisis de ubicación moderno maneja volúmenes masivos de datos (Big Data). La computación en la nube proporciona la potencia de procesamiento y el almacenamiento necesarios para ejecutar algoritmos espaciales complejos de forma rápida y escalable, algo que sería imposible en servidores locales limitados.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-150",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué beneficio proporciona la inteligencia de ubicación (LI) en el contexto del IoT?",
    "options": [
      {
        "id": "a",
        "text": "Optimizar procesos como la recolección de basura en ciudades."
      },
      {
        "id": "b",
        "text": "Facilitar el desarrollo de aplicaciones móviles básicas."
      },
      {
        "id": "c",
        "text": "Generar mapas estáticos para gobiernos locales."
      },
      {
        "id": "d",
        "text": "Reducir el uso de datos móviles en dispositivos conectados."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "En el Internet de las Cosas (IoT), los sensores envían su ubicación y estado constantemente. La inteligencia de ubicación permite analizar estos datos para, por ejemplo, trazar rutas de recolección de residuos solo cuando los contenedores están llenos, ahorrando combustible y tiempo en las Smart Cities.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-151",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "CARTO ofrece dos opciones principales para su instalación, cada una adaptada a necesidades específicas de los usuarios. ¿Cuál de las siguientes es una descripción precisa de estas opciones?",
    "options": [
      {
        "id": "a",
        "text": "On-premises: instalación en la infraestructura de la empresa, cumpliendo políticas de seguridad específicas. On the cloud: servicio online con backups automáticos y actualizaciones constantes."
      },
      {
        "id": "b",
        "text": "On-premises: instalación en servidores compartidos por varias empresas. On the cloud: plataforma local con acceso limitado a internet."
      },
      {
        "id": "c",
        "text": "On-premises: servicio online con restricciones de seguridad. On the cloud: despliegue en servidores locales."
      },
      {
        "id": "d",
        "text": "On-premises: solo compatible con pequeñas empresas. On the cloud: accesible únicamente para grandes corporaciones."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Estas son las dos modalidades estándar de despliegue. La opción On-premises es ideal para sectores con regulaciones estrictas de datos (como banca o gobierno), mientras que la versión Cloud (SaaS) permite a los analistas empezar a trabajar de inmediato sin preocuparse por el mantenimiento del servidor.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-152",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Los usuarios de CARTO pueden cargar datos de manera eficiente a través de su interfaz. ¿Cuál es el método más sencillo para hacerlo?",
    "options": [
      {
        "id": "a",
        "text": "Exportar datos desde SQL directamente al dashboard."
      },
      {
        "id": "b",
        "text": "Arrastrar y soltar archivos al apartado de datos en el dashboard."
      },
      {
        "id": "c",
        "text": "Utilizar una API externa para conectar el dataset al sistema."
      },
      {
        "id": "d",
        "text": "Subir los datos a una carpeta local de CARTO."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "CARTO está diseñado para la agilidad. Su interfaz web permite subir archivos (CSV, Excel, GeoJSON, etc.) simplemente arrastrándolos al panel de ``Datasets''. La plataforma se encarga automáticamente de procesar la estructura y preparar la geometría para el mapa.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-153",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "CARTO almacena los datos en un formato tabular que puede mapear ubicaciones. ¿Qué características clave deben incluirse en el dataset para su visualización en un mapa?",
    "options": [
      {
        "id": "a",
        "text": "Solo el nombre del lugar y una columna de identificador."
      },
      {
        "id": "b",
        "text": "Una columna de latitud, longitud y datos de tiempo."
      },
      {
        "id": "c",
        "text": "Exclusivamente datos alfanuméricos y nombres de ciudades."
      },
      {
        "id": "d",
        "text": "Una clave principal y una columna geométrica basada en latitud y longitud."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Para que un registro sea ``mapeable'', CARTO requiere una columna de geometría (usualmente llamada the\\_geom). Esta columna transforma las coordenadas de latitud y longitud en objetos espaciales que el motor del mapa puede renderizar.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-154",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "CARTO permite personalizar mapas para facilitar la visualización de datos. ¿Qué herramientas están disponibles para esta personalización?",
    "options": [
      {
        "id": "a",
        "text": "Añadir capas y cambiar colores, pero sin personalizar el fondo del mapa."
      },
      {
        "id": "b",
        "text": "Modificar datos en la tabla sin impacto en el mapa visual."
      },
      {
        "id": "c",
        "text": "Agregar capas, widgets y cambiar estilos como el fondo del mapa con BaseMap."
      },
      {
        "id": "d",
        "text": "Cambiar únicamente los datos geométricos y la ubicación de los puntos."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "La personalización en CARTO es profunda. Puedes superponer múltiples capas de datos, añadir widgets interactivos (histogramas, filtros de categoría) y elegir un BaseMap (fondo) que se adapte al estilo visual de tu proyecto (oscuro, claro, satelital, etc.).",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-155",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "CARTO destaca en el análisis y visualización de datos de localización. ¿Qué funcionalidad lo diferencia principalmente de otras plataformas similares?",
    "options": [
      {
        "id": "a",
        "text": "Manipular datos directamente en línea, incluyendo consultas SQL específicas."
      },
      {
        "id": "b",
        "text": "Permitir análisis SQL solo fuera de línea."
      },
      {
        "id": "c",
        "text": "Su capacidad de generar mapas estáticos en alta resolución."
      },
      {
        "id": "d",
        "text": "Importar únicamente datos preformateados por software de terceros."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "A diferencia de herramientas de mapas más sencillas, CARTO expone un motor de PostgreSQL/PostGIS en la nube. Esto permite a los analistas escribir consultas SQL directamente en la interfaz para filtrar, unir tablas o realizar análisis espaciales complejos (como crear áreas de influencia o buffers) en tiempo real sobre el mapa.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-156",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la función principal del selector de capas en CARTO?",
    "options": [
      {
        "id": "a",
        "text": "Permite modificar los datos directamente en el mapa."
      },
      {
        "id": "b",
        "text": "Calcula valores agregados a partir de columnas numéricas."
      },
      {
        "id": "c",
        "text": "Se utiliza para crear nuevas categorías en las capas."
      },
      {
        "id": "d",
        "text": "Facilita habilitar o deshabilitar la visualización de diferentes capas."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "Al igual que en otros sistemas GIS, el selector de capas permite gestionar la visibilidad de los diferentes conjuntos de datos superpuestos. Esto es crucial para comparar información (por ejemplo, ver puntos de venta sobre capas de densidad de población) sin saturar la vista del usuario.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-157",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de los siguientes tipos de widgets permite mostrar datos de forma animada a lo largo del tiempo?",
    "options": [
      {
        "id": "a",
        "text": "Categoría."
      },
      {
        "id": "b",
        "text": "Histograma."
      },
      {
        "id": "c",
        "text": "Fórmula."
      },
      {
        "id": "d",
        "text": "Series de tiempo."
      }
    ],
    "correctIds": [
      "d"
    ],
    "explanation": "El widget de Series de tiempo (Time Series) identifica columnas con formato de fecha o marca de tiempo. Al activarlo, añade un reproductor en la parte inferior del mapa que permite animar los puntos o áreas, mostrando cómo evolucionan los datos cronológicamente.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-158",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué opción del menú de estilos en las capas permite cambiar el tamaño de los puntos en el mapa?",
    "options": [
      {
        "id": "a",
        "text": "Agregación."
      },
      {
        "id": "b",
        "text": "Group By."
      },
      {
        "id": "c",
        "text": "Style."
      },
      {
        "id": "d",
        "text": "Create Lines from Points."
      }
    ],
    "correctIds": [
      "c"
    ],
    "explanation": "Dentro del panel de cada capa, la pestaña Style es donde se definen las propiedades estéticas de los marcadores. Aquí se puede ajustar el radio del punto (Point Size), el color de relleno y el contorno (Stroke), ya sea de forma fija o vinculada a una medida numérica.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-159",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de análisis en CARTO permite conectar puntos en orden secuencial y diferenciarlos por color?",
    "options": [
      {
        "id": "a",
        "text": "Transform."
      },
      {
        "id": "b",
        "text": "Create Lines from Points."
      },
      {
        "id": "c",
        "text": "Analyze and Predict."
      },
      {
        "id": "d",
        "text": "Create and Clean."
      }
    ],
    "correctIds": [
      "b"
    ],
    "explanation": "Este es un análisis espacial específico que toma una serie de coordenadas y las une mediante líneas. Es ideal para visualizar rutas de transporte, trayectorias de dispositivos GPS o flujos logísticos, transformando puntos aislados en una estructura de red.",
    "domain": "Tema 11: CARTO"
  },
  {
    "id": "unir-herr-11-160",
    "courseId": "unir-herramientas-viz",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cómo se pueden distinguir mejor las diferentes rutas creadas en un análisis de tipo \"Create Lines from Points\"?",
    "options": [
      {
        "id": "a",
        "text": "Configurando el campo Group By y seleccionando colores específicos en Stroke color."
      },
      {
        "id": "b",
        "text": "Utilizando el widget de Categoría y seleccionando la opción AVG en Style."
      },
      {
        "id": "c",
        "text": "Aplicando el análisis de Transform para agrupar puntos por proximidad."
      },
      {
        "id": "d",
        "text": "Habilitando el selector de capas y ajustando el tamaño de los puntos."
      }
    ],
    "correctIds": [
      "a"
    ],
    "explanation": "Para evitar que todos los puntos se conecten en una sola línea desordenada, se utiliza Group By (usualmente un ID de ruta o vehículo). Al combinar esto con la propiedad Stroke color, se asigna un color único a cada grupo, permitiendo diferenciar visualmente múltiples rutas simultáneas en el mismo mapa.",
    "domain": "Tema 11: CARTO"
  }
]
);
