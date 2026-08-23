/**
 * UNIR - Visualización Interactiva de la Información
 * Question Bank — 220 questions across 11 themes
 * courseId: "unir-viz-interactiva"
 */
window.questionsData = (window.questionsData || []).concat([
  // ============================================================================
  // TEMA 1 — Introducción a la Infografía y la Visualización de Datos
  // ============================================================================
  {
    "id": "unir-viz-1-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el objetivo principal de la infografía y la visualización de datos?",
    "options": [
      { "id": "a", "text": "Crear diseños visualmente atractivos sin importar los datos." },
      { "id": "b", "text": "Informar, ampliar el conocimiento e invitar a la reflexión sobre los datos presentados." },
      { "id": "c", "text": "Reemplazar completamente el texto en las publicaciones." },
      { "id": "d", "text": "Entretener al público con animaciones y colores." }
    ],
    "correctIds": ["b"],
    "explanation": "Tanto la infografía como la visualización comparten el objetivo de comunicar información de manera clara y efectiva, permitiendo que el receptor comprenda y reflexione sobre los datos.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de lenguaje utilizan principalmente las infografías para comunicar información?",
    "options": [
      { "id": "a", "text": "Lenguaje exclusivamente textual." },
      { "id": "b", "text": "Lenguaje visual, combinando imágenes, gráficos y texto." },
      { "id": "c", "text": "Lenguaje de programación." },
      { "id": "d", "text": "Lenguaje exclusivamente numérico." }
    ],
    "correctIds": ["b"],
    "explanation": "Las infografías utilizan un lenguaje visual que integra elementos gráficos, imágenes, datos y texto para transmitir información de forma accesible y comprensible.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre una infografía y una visualización de datos?",
    "options": [
      { "id": "a", "text": "No existe diferencia, son sinónimos." },
      { "id": "b", "text": "La infografía es narrativa y cerrada, mientras que la visualización es exploratoria y basada en sistemas." },
      { "id": "c", "text": "La infografía es siempre interactiva y la visualización es siempre estática." },
      { "id": "d", "text": "La infografía usa solo texto y la visualización solo imágenes." }
    ],
    "correctIds": ["b"],
    "explanation": "La infografía presenta una 'historia' completa predefinida por el autor. La visualización de datos suele ser un sistema abierto donde el usuario puede interactuar y explorar libremente.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué significa que la visualización busca 'ampliar la cognición'?",
    "options": [
      { "id": "a", "text": "Que hace que el cerebro crezca físicamente." },
      { "id": "b", "text": "Que permite comprender relaciones y patrones imposibles de detectar mirando solo datos en bruto." },
      { "id": "c", "text": "Que solo sirve para profesionales con alto nivel educativo." },
      { "id": "d", "text": "Que sustituye la necesidad de análisis estadístico." }
    ],
    "correctIds": ["b"],
    "explanation": "La 'amplificación cognitiva' es clave: la visualización actúa como extensión del sistema visual humano, aprovechando la capacidad natural de detección de patrones espaciales.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según el temario, ¿cuál es el orden correcto del proceso de creación de una visualización?",
    "options": [
      { "id": "a", "text": "Elaboración, boceto, investigación, selección, recepción." },
      { "id": "b", "text": "Investigación, selección, boceto (sketch), elaboración, recepción/conocimiento." },
      { "id": "c", "text": "Boceto, selección, investigación, elaboración." },
      { "id": "d", "text": "Selección, investigación, elaboración, boceto." }
    ],
    "correctIds": ["b"],
    "explanation": "Las cinco fases son: (1) Investigación de fuentes, (2) Selección y curación, (3) Boceto/sketch, (4) Elaboración técnica, y (5) Recepción y generación de conocimiento.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-06",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál de las siguientes afirmaciones sobre la relación entre dato, información y conocimiento es correcta?",
    "options": [
      { "id": "a", "text": "Los datos son lo mismo que la información." },
      { "id": "b", "text": "La información se convierte en conocimiento cuando el receptor la comprende y le da significado." },
      { "id": "c", "text": "El conocimiento es menos valioso que el dato en bruto." },
      { "id": "d", "text": "La visualización solo trabaja con conocimiento, nunca con datos." }
    ],
    "correctIds": ["b"],
    "explanation": "Jerarquía: Dato (valor puro) → Información (dato procesado) → Conocimiento (información comprendida que permite tomar decisiones). La visualización facilita este tránsito.",
    "domain": "Tema 1: Introducción"
  },
  {
    "id": "unir-viz-1-07",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué se dice que el sistema visual humano es la base de la visualización de datos?",
    "options": [
      { "id": "a", "text": "Porque los humanos prefieren ver colores brillantes." },
      { "id": "b", "text": "Porque el cerebro detecta patrones visuales a gran velocidad, procesando información casi instantáneamente." },
      { "id": "c", "text": "Porque es más fácil crear gráficos que escribir textos." },
      { "id": "d", "text": "Porque las computadoras son lentas procesando texto." }
    ],
    "correctIds": ["b"],
    "explanation": "El sistema visual es el canal más potente del ser humano. Procesamos imágenes mucho más rápido que texto y detectamos anomalías de forma pre-atentiva.",
    "domain": "Tema 1: Introducción"
  },
  // ============================================================================
  // TEMA 2 — Historia de la Infografía
  // ============================================================================
  {
    "id": "unir-viz-2-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué aportó Leonardo Da Vinci al campo de la visualización?",
    "options": [
      { "id": "a", "text": "Inventó la primera computadora para procesar datos." },
      { "id": "b", "text": "Utilizó el dibujo técnico y anatómico como herramienta de investigación empírica, fusionando ciencia y arte." },
      { "id": "c", "text": "Diseñó el primer gráfico de barras." },
      { "id": "d", "text": "Creó el primer periódico con infografías." }
    ],
    "correctIds": ["b"],
    "explanation": "Da Vinci es pionero porque sus dibujos no eran simples ilustraciones: eran herramientas de investigación para comprender la anatomía, la ingeniería y la naturaleza.",
    "domain": "Tema 2: Historia"
  },
  {
    "id": "unir-viz-2-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es el principal defecto de la proyección de Mercator?",
    "options": [
      { "id": "a", "text": "No permite representar los continentes." },
      { "id": "b", "text": "Distorsiona el tamaño real de las áreas, especialmente en zonas cercanas a los polos." },
      { "id": "c", "text": "Solo funciona para mapas digitales." },
      { "id": "d", "text": "Invierte los hemisferios norte y sur." }
    ],
    "correctIds": ["b"],
    "explanation": "La proyección de Mercator preserva ángulos (útil para navegación) pero agranda enormemente las zonas polares. Groenlandia aparece del tamaño de África cuando es 14 veces menor.",
    "domain": "Tema 2: Historia"
  },
  {
    "id": "unir-viz-2-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué sistema de representación visual crearon Otto Neurath y Gerd Arntz en la década de 1920?",
    "options": [
      { "id": "a", "text": "El sistema RGB para pantallas." },
      { "id": "b", "text": "El Isotype (International System of Typographic Picture Education)." },
      { "id": "c", "text": "La proyección de Peters." },
      { "id": "d", "text": "El sistema de coordenadas cartesianas." }
    ],
    "correctIds": ["b"],
    "explanation": "El Isotype fue un sistema de pictogramas estandarizados para comunicar estadísticas sociales y económicas a personas de cualquier nivel educativo.",
    "domain": "Tema 2: Historia"
  },
  {
    "id": "unir-viz-2-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿En qué año se publicó la primera infografía periodística conocida y en qué periódico?",
    "options": [
      { "id": "a", "text": "En 1982 en el USA Today." },
      { "id": "b", "text": "En 1920 en The New York Times." },
      { "id": "c", "text": "En 1806 en The Times de Londres." },
      { "id": "d", "text": "En 1991 durante la Guerra del Golfo." }
    ],
    "correctIds": ["c"],
    "explanation": "El 7 de abril de 1806, The Times publicó un plano de la escena de un crimen (asesinato de Isaac Blight), considerada una de las primeras infografías periodísticas.",
    "domain": "Tema 2: Historia"
  },
  {
    "id": "unir-viz-2-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué periódico estadounidense revolucionó la prensa con los 'Snapshots' en 1982?",
    "options": [
      { "id": "a", "text": "The New York Times." },
      { "id": "b", "text": "USA Today." },
      { "id": "c", "text": "The Washington Post." },
      { "id": "d", "text": "The Wall Street Journal." }
    ],
    "correctIds": ["b"],
    "explanation": "USA Today introdujo los 'Snapshots' — gráficos diarios, simples y a color que democratizaron la infografía en la prensa diaria.",
    "domain": "Tema 2: Historia"
  },
  {
    "id": "unir-viz-2-06",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué hizo especial la cobertura de la Guerra del Golfo (1991) en la historia de la visualización?",
    "options": [
      { "id": "a", "text": "Fue la primera guerra transmitida por radio." },
      { "id": "b", "text": "Ante la falta de imágenes del frente, los medios recurrieron masivamente a infografías vectoriales y mapas." },
      { "id": "c", "text": "Se usaron exclusivamente fotografías de satélite." },
      { "id": "d", "text": "Fue la primera guerra sin cobertura mediática." }
    ],
    "correctIds": ["b"],
    "explanation": "La Guerra del Golfo consolidó la infografía como recurso indispensable del periodismo cuando la fotografía no podía llegar al frente.",
    "domain": "Tema 2: Historia"
  },
  // ============================================================================
  // TEMA 3 — Trabajar con Datos
  // ============================================================================
  {
    "id": "unir-viz-3-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué significa el principio 'Garbage In, Garbage Out' en el contexto de la visualización?",
    "options": [
      { "id": "a", "text": "Que los gráficos deben ser reciclados después de su uso." },
      { "id": "b", "text": "Que si los datos de entrada son erróneos, las visualizaciones resultantes serán engañosas o inútiles." },
      { "id": "c", "text": "Que toda visualización necesita un contenedor especial." },
      { "id": "d", "text": "Que los datos viejos deben eliminarse antes de visualizar." }
    ],
    "correctIds": ["b"],
    "explanation": "Ningún diseño visual puede compensar datos incorrectos. La calidad del resultado depende directamente de la calidad de los datos de entrada.",
    "domain": "Tema 3: Datos"
  },
  {
    "id": "unir-viz-3-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es el Data Wrangling?",
    "options": [
      { "id": "a", "text": "Un tipo de gráfico interactivo." },
      { "id": "b", "text": "El proceso de limpieza, transformación y preparación de datos crudos para su análisis." },
      { "id": "c", "text": "Un software para crear dashboards." },
      { "id": "d", "text": "Una técnica de animación de gráficos." }
    ],
    "correctIds": ["b"],
    "explanation": "El Data Wrangling incluye eliminar duplicados, tratar valores nulos, normalizar formatos de fecha y reestructurar tablas.",
    "domain": "Tema 3: Datos"
  },
  {
    "id": "unir-viz-3-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre una variable categórica y una variable cuantitativa?",
    "options": [
      { "id": "a", "text": "No existe diferencia, son lo mismo." },
      { "id": "b", "text": "La categórica representa grupos o etiquetas, mientras que la cuantitativa representa magnitudes numéricas." },
      { "id": "c", "text": "La categórica siempre es numérica y la cuantitativa textual." },
      { "id": "d", "text": "La cuantitativa se usa solo en mapas y la categórica solo en barras." }
    ],
    "correctIds": ["b"],
    "explanation": "Variables categóricas: País, Género (se codifican con color/forma). Variables cuantitativas: ventas, temperatura (se codifican con posición/longitud).",
    "domain": "Tema 3: Datos"
  },
  {
    "id": "unir-viz-3-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tareas incluye la fase de preparación de datos?",
    "options": [
      { "id": "a", "text": "Solo crear gráficos y tablas." },
      { "id": "b", "text": "Separar campos, identificar datos incompletos, uniformizar unidades y eliminar duplicados." },
      { "id": "c", "text": "Solo recolectar datos de internet." },
      { "id": "d", "text": "Solo realizar análisis estadísticos avanzados." }
    ],
    "correctIds": ["b"],
    "explanation": "La preparación garantiza integridad y consistencia: normalizar fechas, separar campos compuestos, eliminar duplicados y tratar valores faltantes.",
    "domain": "Tema 3: Datos"
  },
  // ============================================================================
  // TEMA 4 — Psicología Aplicada a la Visualización
  // ============================================================================
  {
    "id": "unir-viz-4-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es la memoria icónica y cuál es su rol en la visualización?",
    "options": [
      { "id": "a", "text": "Es la memoria a largo plazo donde almacenamos símbolos aprendidos." },
      { "id": "b", "text": "Es un tipo de memoria sensorial que opera en milisegundos, captando atributos como color y posición antes de la atención consciente." },
      { "id": "c", "text": "Es la memoria que nos permite recordar nombres y fechas." },
      { "id": "d", "text": "Es un tipo de memoria artificial usada por computadoras." }
    ],
    "correctIds": ["b"],
    "explanation": "La memoria icónica es el primer filtro del sistema visual. Detecta atributos 'preatentivos' (color, tamaño, orientación) de forma automática e inconsciente.",
    "domain": "Tema 4: Psicología"
  },
  {
    "id": "unir-viz-4-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles son los tres tipos de memoria involucrados en la percepción visual?",
    "options": [
      { "id": "a", "text": "Memoria RAM, ROM y caché." },
      { "id": "b", "text": "Memoria icónica (sensorial), memoria a corto plazo (de trabajo) y memoria a largo plazo." },
      { "id": "c", "text": "Memoria visual, auditiva y táctil." },
      { "id": "d", "text": "Memoria declarativa, procedimental y episódica." }
    ],
    "correctIds": ["b"],
    "explanation": "Flujo: (1) icónica capta en milisegundos, (2) corto plazo procesa conscientemente, (3) largo plazo reconoce convenciones y símbolos aprendidos.",
    "domain": "Tema 4: Psicología"
  },
  {
    "id": "unir-viz-4-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué principio de la Gestalt explica que percibimos como grupo los elementos que comparten color, forma o tamaño?",
    "options": [
      { "id": "a", "text": "Proximidad." },
      { "id": "b", "text": "Continuidad." },
      { "id": "c", "text": "Similitud." },
      { "id": "d", "text": "Cierre." }
    ],
    "correctIds": ["c"],
    "explanation": "La ley de la similitud: agrupamos mentalmente los elementos que se parecen entre sí. Puntos del mismo color se perciben como misma categoría.",
    "domain": "Tema 4: Psicología"
  },
  {
    "id": "unir-viz-4-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué principio de la Gestalt se aplica cuando el cerebro 'completa' formas incompletas?",
    "options": [
      { "id": "a", "text": "Proximidad." },
      { "id": "b", "text": "Figura-fondo." },
      { "id": "c", "text": "Cierre (clausura)." },
      { "id": "d", "text": "Destino común." }
    ],
    "correctIds": ["c"],
    "explanation": "La ley del cierre: nuestro cerebro tiende a completar formas inacabadas según patrones previamente conocidos.",
    "domain": "Tema 4: Psicología"
  },
  {
    "id": "unir-viz-4-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué son los atributos 'preatentivos' y por qué son importantes en visualización?",
    "options": [
      { "id": "a", "text": "Son atributos que requieren mucha concentración para ser detectados." },
      { "id": "b", "text": "Son propiedades visuales (color, tamaño, orientación, forma) que el cerebro detecta automática e instantáneamente." },
      { "id": "c", "text": "Son atributos que solo funcionan en visualizaciones impresas." },
      { "id": "d", "text": "Son atributos exclusivos de los gráficos 3D." }
    ],
    "correctIds": ["b"],
    "explanation": "Los atributos preatentivos permiten que un elemento 'destaque' sin que el usuario busque activamente. Se usan para guiar la atención hacia la información más relevante.",
    "domain": "Tema 4: Psicología"
  },
  {
    "id": "unir-viz-4-06",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué principio de la Gestalt explica que agrupamos elementos que están cerca entre sí?",
    "options": [
      { "id": "a", "text": "Similitud." },
      { "id": "b", "text": "Proximidad." },
      { "id": "c", "text": "Continuidad." },
      { "id": "d", "text": "Conexión." }
    ],
    "correctIds": ["b"],
    "explanation": "La ley de proximidad establece que los elementos cercanos se perciben como parte de un grupo, incluso si tienen diferentes formas o colores.",
    "domain": "Tema 4: Psicología"
  },
  // ============================================================================
  // TEMA 5 — Diseño Aplicado a la Visualización
  // ============================================================================
  {
    "id": "unir-viz-5-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre el modelo de color RGB y el modelo CMYK?",
    "options": [
      { "id": "a", "text": "RGB es para impresión y CMYK es para pantallas." },
      { "id": "b", "text": "RGB es aditivo (suma de luces) para pantallas; CMYK es sustractivo (mezcla de tintas) para impresión." },
      { "id": "c", "text": "No hay diferencia, son equivalentes." },
      { "id": "d", "text": "RGB tiene más colores y por eso es mejor." }
    ],
    "correctIds": ["b"],
    "explanation": "En RGB la suma produce blanco (luz). En CMYK la suma produce negro (ausencia de luz reflejada). Clave para preparar visualización según destino.",
    "domain": "Tema 5: Diseño"
  },
  {
    "id": "unir-viz-5-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué las fuentes Serif son más adecuadas para textos impresos y las Sans Serif para pantallas?",
    "options": [
      { "id": "a", "text": "Es solo cuestión de moda." },
      { "id": "b", "text": "Los remates (serifs) guían el ojo en papel. En pantalla, la baja resolución hace que los remates se vean borrosos." },
      { "id": "c", "text": "Las Serif son más modernas." },
      { "id": "d", "text": "Las pantallas no pueden mostrar fuentes Serif." }
    ],
    "correctIds": ["b"],
    "explanation": "Las serifs crean una 'guía visual' en papel. En pantalla, esos remates generan ruido visual, por lo que se prefieren fuentes sin remates.",
    "domain": "Tema 5: Diseño"
  },
  {
    "id": "unir-viz-5-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué formato de imagen es vectorial y se recomienda para visualizaciones web escalables?",
    "options": [
      { "id": "a", "text": "JPEG." },
      { "id": "b", "text": "PNG." },
      { "id": "c", "text": "SVG." },
      { "id": "d", "text": "TIFF." }
    ],
    "correctIds": ["c"],
    "explanation": "SVG (Scalable Vector Graphics) define gráficos mediante fórmulas matemáticas, escalables a cualquier tamaño sin perder calidad.",
    "domain": "Tema 5: Diseño"
  },
  {
    "id": "unir-viz-5-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué significa que 'la forma debe estar al servicio de la función' en diseño de visualización?",
    "options": [
      { "id": "a", "text": "Que los gráficos deben ser siempre cuadrados." },
      { "id": "b", "text": "Que la estética no debe comprometer la claridad del mensaje." },
      { "id": "c", "text": "Que la función es menos importante que la estética." },
      { "id": "d", "text": "Que solo diseñadores profesionales pueden crear visualizaciones." }
    ],
    "correctIds": ["b"],
    "explanation": "Principio fundamental del diseño funcional. Un gráfico puede ser hermoso, pero si dificulta la lectura de los datos, falla en su propósito.",
    "domain": "Tema 5: Diseño"
  },
  {
    "id": "unir-viz-5-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la unidad de medida estándar en diseño digital?",
    "options": [
      { "id": "a", "text": "Milímetro." },
      { "id": "b", "text": "Centímetro." },
      { "id": "c", "text": "Píxel." },
      { "id": "d", "text": "Pulgada." }
    ],
    "correctIds": ["c"],
    "explanation": "El píxel es la unidad mínima de información en imagen digital. En impresión se usan milímetros y DPI.",
    "domain": "Tema 5: Diseño"
  },
  // ============================================================================
  // TEMA 6 — Definición y Anatomía del Gráfico
  // ============================================================================
  {
    "id": "unir-viz-6-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles son los elementos fundamentales que componen la anatomía de un gráfico?",
    "options": [
      { "id": "a", "text": "Solo el título y los datos." },
      { "id": "b", "text": "Título, subtítulo, ejes (X e Y), leyenda, área de datos, etiquetas, fuente, escala y retícula (grid)." },
      { "id": "c", "text": "Solo los ejes y los colores." },
      { "id": "d", "text": "Solo la leyenda y la fuente de datos." }
    ],
    "correctIds": ["b"],
    "explanation": "Cada elemento cumple una función: título captura atención, ejes codifican variables, leyenda descifra símbolos, fuente otorga credibilidad, retícula ayuda a leer valores.",
    "domain": "Tema 6: Anatomía del Gráfico"
  },
  {
    "id": "unir-viz-6-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es un mapa de coropletas?",
    "options": [
      { "id": "a", "text": "Un mapa que muestra rutas de transporte." },
      { "id": "b", "text": "Un mapa que codifica áreas geográficas con colores para representar datos estadísticos por región." },
      { "id": "c", "text": "Un mapa topográfico con curvas de nivel." },
      { "id": "d", "text": "Un mapa que muestra solo fronteras políticas sin datos." }
    ],
    "correctIds": ["b"],
    "explanation": "Los mapas de coropletas usan divisiones territoriales con escala de color proporcional al valor representado (PIB, densidad de población, etc.).",
    "domain": "Tema 6: Anatomía del Gráfico"
  },
  {
    "id": "unir-viz-6-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre un gráfico figurativo y uno no figurativo?",
    "options": [
      { "id": "a", "text": "No hay diferencia." },
      { "id": "b", "text": "El figurativo usa elementos que se parecen a la realidad (mapas); el no figurativo usa formas abstractas (barras, líneas)." },
      { "id": "c", "text": "El figurativo solo usa números." },
      { "id": "d", "text": "El figurativo es siempre mejor." }
    ],
    "correctIds": ["b"],
    "explanation": "Los figurativos mantienen conexión icónica con la realidad. Los no figurativos codifican datos en formas abstractas cuya longitud o posición representa magnitudes.",
    "domain": "Tema 6: Anatomía del Gráfico"
  },
  {
    "id": "unir-viz-6-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tipo de gráfico es el más adecuado para comparar cantidades entre categorías?",
    "options": [
      { "id": "a", "text": "Gráfico de tarta." },
      { "id": "b", "text": "Gráfico de líneas." },
      { "id": "c", "text": "Gráfico de barras." },
      { "id": "d", "text": "Mapa de calor." }
    ],
    "correctIds": ["c"],
    "explanation": "El gráfico de barras es la herramienta visual más precisa para comparar magnitudes entre categorías gracias a la alineación en un eje común.",
    "domain": "Tema 6: Anatomía del Gráfico"
  },
  // ============================================================================
  // TEMA 7 — Codificación Gráfica
  // ============================================================================
  {
    "id": "unir-viz-7-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "Según Cleveland y McGill, ¿cuál es la jerarquía de efectividad de los atributos visuales para datos cuantitativos?",
    "options": [
      { "id": "a", "text": "Color > Área > Ángulo > Longitud > Posición." },
      { "id": "b", "text": "Posición > Longitud > Ángulo > Área > Color." },
      { "id": "c", "text": "Forma > Textura > Color > Posición > Longitud." },
      { "id": "d", "text": "Volumen > Área > Longitud > Posición > Color." }
    ],
    "correctIds": ["b"],
    "explanation": "Jerarquía fundamental: Posición (más preciso, scatter plots) > Longitud (barras) > Ángulo (tartas) > Área (burbujas) > Color (mejor para categóricos).",
    "domain": "Tema 7: Codificación Gráfica"
  },
  {
    "id": "unir-viz-7-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la diferencia entre visualización científica y visualización de información?",
    "options": [
      { "id": "a", "text": "No hay diferencia." },
      { "id": "b", "text": "La científica trabaja con datos de estructura física (anatomía, clima); la de información trabaja con datos abstractos (ventas, redes sociales)." },
      { "id": "c", "text": "La científica es más moderna." },
      { "id": "d", "text": "La de información solo se usa en periodismo." }
    ],
    "correctIds": ["b"],
    "explanation": "La visualización científica 'hereda' la estructura espacial de los datos. La de información debe 'inventar' la codificación porque los datos abstractos no tienen forma inherente.",
    "domain": "Tema 7: Codificación Gráfica"
  },
  {
    "id": "unir-viz-7-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué atributo visual es más adecuado para codificar datos categóricos (tipos de producto)?",
    "options": [
      { "id": "a", "text": "Longitud." },
      { "id": "b", "text": "Posición en eje Y." },
      { "id": "c", "text": "Color (tono)." },
      { "id": "d", "text": "Ángulo." }
    ],
    "correctIds": ["c"],
    "explanation": "El tono del color (rojo vs. azul vs. verde) distingue grupos cualitativos de forma preatentiva sin implicar orden o magnitud numérica.",
    "domain": "Tema 7: Codificación Gráfica"
  },
  {
    "id": "unir-viz-7-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué el color es menos efectivo que la posición para representar datos cuantitativos?",
    "options": [
      { "id": "a", "text": "Porque los monitores no muestran bien los colores." },
      { "id": "b", "text": "Porque el ojo humano tiene dificultades para ordenar intensidades de color con precisión." },
      { "id": "c", "text": "Porque el color solo se ve en pantallas." },
      { "id": "d", "text": "Porque el color no puede representar números." }
    ],
    "correctIds": ["b"],
    "explanation": "Aunque percibimos colores de forma preatentiva, nuestra capacidad para cuantificar 'cuánto más oscuro' es un tono respecto a otro es limitada e imprecisa.",
    "domain": "Tema 7: Codificación Gráfica"
  },
  // ============================================================================
  // TEMA 8 — Visualización Estática
  // ============================================================================
  {
    "id": "unir-viz-8-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la herramienta profesional por excelencia para crear infografías estáticas?",
    "options": [
      { "id": "a", "text": "Microsoft PowerPoint." },
      { "id": "b", "text": "Canva." },
      { "id": "c", "text": "Adobe Illustrator." },
      { "id": "d", "text": "Google Sheets." }
    ],
    "correctIds": ["c"],
    "explanation": "Adobe Illustrator es el estándar de la industria para gráficos vectoriales profesionales, exportando en SVG, EPS y PDF.",
    "domain": "Tema 8: Visualización Estática"
  },
  {
    "id": "unir-viz-8-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué diferencia hay entre una imagen vectorial y una imagen de mapa de bits (raster)?",
    "options": [
      { "id": "a", "text": "No hay diferencia." },
      { "id": "b", "text": "La vectorial se define con fórmulas matemáticas y escala sin perder calidad. La raster se compone de píxeles y se pixela al ampliarla." },
      { "id": "c", "text": "La raster es siempre mejor calidad." },
      { "id": "d", "text": "La vectorial solo sirve para texto." }
    ],
    "correctIds": ["b"],
    "explanation": "Vectores (SVG, AI, EPS) usan matemáticas y escalan infinitamente. Raster (JPEG, PNG, TIFF) son cuadrícula fija de píxeles.",
    "domain": "Tema 8: Visualización Estática"
  },
  {
    "id": "unir-viz-8-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es la resolución estándar recomendada para impresión profesional?",
    "options": [
      { "id": "a", "text": "72 ppp." },
      { "id": "b", "text": "150 ppp." },
      { "id": "c", "text": "300 ppp o más." },
      { "id": "d", "text": "50 ppp." }
    ],
    "correctIds": ["c"],
    "explanation": "Para impresión de alta calidad se requieren al menos 300 ppp (DPI). Las pantallas trabajan con 72-96 ppi.",
    "domain": "Tema 8: Visualización Estática"
  },
  {
    "id": "unir-viz-8-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué formato de imagen NO se puede renderizar nativamente en un navegador web?",
    "options": [
      { "id": "a", "text": "SVG." },
      { "id": "b", "text": "PNG." },
      { "id": "c", "text": "EPS." },
      { "id": "d", "text": "JPEG." }
    ],
    "correctIds": ["c"],
    "explanation": "EPS (Encapsulated PostScript) es para la industria de impresión y no es soportado nativamente por navegadores web.",
    "domain": "Tema 8: Visualización Estática"
  },
  {
    "id": "unir-viz-8-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es Inkscape?",
    "options": [
      { "id": "a", "text": "Un navegador web especializado." },
      { "id": "b", "text": "Un editor de gráficos vectoriales gratuito y de código abierto, alternativa a Illustrator." },
      { "id": "c", "text": "Un formato de imagen vectorial." },
      { "id": "d", "text": "Una base de datos de gráficos." }
    ],
    "correctIds": ["b"],
    "explanation": "Inkscape usa SVG como formato nativo y es la principal alternativa libre a Adobe Illustrator.",
    "domain": "Tema 8: Visualización Estática"
  },
  // ============================================================================
  // TEMA 9 — Visualización Exploratoria
  // ============================================================================
  {
    "id": "unir-viz-9-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué tecnologías web son el estándar para crear visualizaciones interactivas?",
    "options": [
      { "id": "a", "text": "Microsoft Word y Excel." },
      { "id": "b", "text": "HTML (estructura), CSS (estilo) y JavaScript (interactividad)." },
      { "id": "c", "text": "Solo Python y R." },
      { "id": "d", "text": "Solo Adobe Flash." }
    ],
    "correctIds": ["b"],
    "explanation": "HTML define la estructura, CSS controla la apariencia y JavaScript programa la interactividad (filtros, animaciones, tooltips).",
    "domain": "Tema 9: Visualización Exploratoria"
  },
  {
    "id": "unir-viz-9-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué herramienta creada por Hans Rosling es ejemplo emblemático de visualización exploratoria?",
    "options": [
      { "id": "a", "text": "Tableau." },
      { "id": "b", "text": "Power BI." },
      { "id": "c", "text": "Gapminder." },
      { "id": "d", "text": "D3.js." }
    ],
    "correctIds": ["c"],
    "explanation": "Gapminder usa gráficos de burbujas animados para mostrar relaciones entre indicadores globales (esperanza de vida vs. renta per cápita) a lo largo del tiempo.",
    "domain": "Tema 9: Visualización Exploratoria"
  },
  {
    "id": "unir-viz-9-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué relación analiza el ejemplo más famoso de Gapminder World?",
    "options": [
      { "id": "a", "text": "Consumo de energía por continente." },
      { "id": "b", "text": "Producción agrícola frente al cambio climático." },
      { "id": "c", "text": "Esperanza de vida vs. renta per cápita de los países." },
      { "id": "d", "text": "Acceso a internet por país." }
    ],
    "correctIds": ["c"],
    "explanation": "El gráfico de burbujas compara riqueza (eje X) contra salud (eje Y), con el tamaño de la burbuja representando la población.",
    "domain": "Tema 9: Visualización Exploratoria"
  },
  {
    "id": "unir-viz-9-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué diferencia hay entre una visualización estática y una exploratoria?",
    "options": [
      { "id": "a", "text": "No hay diferencia." },
      { "id": "b", "text": "La estática es una pieza cerrada (PDF), mientras que la exploratoria permite al usuario interactuar (filtrar, zoom, seleccionar)." },
      { "id": "c", "text": "La estática es digital y la exploratoria impresa." },
      { "id": "d", "text": "La exploratoria no usa datos." }
    ],
    "correctIds": ["b"],
    "explanation": "La estática cuenta una historia predefinida. La exploratoria pone los datos en manos del usuario para que descubra sus propios patrones.",
    "domain": "Tema 9: Visualización Exploratoria"
  },
  // ============================================================================
  // TEMA 10 — Visualización para Comunicar
  // ============================================================================
  {
    "id": "unir-viz-10-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es Datawrapper?",
    "options": [
      { "id": "a", "text": "Un lenguaje de programación para análisis estadístico." },
      { "id": "b", "text": "Una plataforma web para crear gráficos, mapas y tablas interactivas, muy usada en periodismo." },
      { "id": "c", "text": "Un editor de fotos profesional." },
      { "id": "d", "text": "Un sistema de gestión de bases de datos." }
    ],
    "correctIds": ["b"],
    "explanation": "Datawrapper permite crear visualizaciones limpias y responsivas en minutos, sin programar, adoptada por redacciones de periódicos.",
    "domain": "Tema 10: Comunicación"
  },
  {
    "id": "unir-viz-10-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es Timeline.js y qué institución la desarrolló?",
    "options": [
      { "id": "a", "text": "Software de edición de vídeo de Adobe." },
      { "id": "b", "text": "Herramienta de código abierto para líneas de tiempo interactivas, desarrollada por Knight Lab." },
      { "id": "c", "text": "Base de datos histórica de Google." },
      { "id": "d", "text": "Plugin de WordPress para blogs." }
    ],
    "correctIds": ["b"],
    "explanation": "Timeline.js, del Knight Lab de Northwestern, crea narrativas cronológicas interactivas usando Google Sheets como fuente de datos.",
    "domain": "Tema 10: Comunicación"
  },
  {
    "id": "unir-viz-10-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué es el Data Storytelling (narrativa de datos)?",
    "options": [
      { "id": "a", "text": "Una técnica para inventar datos falsos." },
      { "id": "b", "text": "El arte de guiar al lector a través de los datos con una estructura narrativa (introducción, desarrollo, conclusión)." },
      { "id": "c", "text": "Un tipo de gráfico específico." },
      { "id": "d", "text": "Una base de datos para almacenar historias." }
    ],
    "correctIds": ["b"],
    "explanation": "El Data Storytelling combina datos (evidencia) + visualización (forma) + narrativa (hilo conductor). No solo informa, sino que persuade e inspira.",
    "domain": "Tema 10: Comunicación"
  },
  {
    "id": "unir-viz-10-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuál es una limitación reconocida de Datawrapper?",
    "options": [
      { "id": "a", "text": "No puede crear gráficos de barras." },
      { "id": "b", "text": "Está más orientada a la visualización que al análisis profundo de datos (no reemplaza R o Python)." },
      { "id": "c", "text": "No funciona en navegadores web." },
      { "id": "d", "text": "No es gratuita en ninguna versión." }
    ],
    "correctIds": ["b"],
    "explanation": "Datawrapper es excelente para presentación visual pero no para limpieza, modelado estadístico o machine learning.",
    "domain": "Tema 10: Comunicación"
  },
  // ============================================================================
  // TEMA 11 — Representación Responsable de Datos
  // ============================================================================
  {
    "id": "unir-viz-11-01",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Cuáles son las prácticas más comunes de manipulación visual que distorsionan los datos?",
    "options": [
      { "id": "a", "text": "Usar colores pastel y fuentes grandes." },
      { "id": "b", "text": "Ejes truncados, escalas no lineales sin justificación, 3D innecesario, colores engañosos y cherry-picking de datos." },
      { "id": "c", "text": "Usar siempre gráficos de barras horizontales." },
      { "id": "d", "text": "Incluir el logotipo de la empresa." }
    ],
    "correctIds": ["b"],
    "explanation": "Ejes truncados exageran diferencias. El 3D distorsiona proporciones. El cherry-picking selecciona solo datos que apoyan la narrativa deseada.",
    "domain": "Tema 11: Ética"
  },
  {
    "id": "unir-viz-11-02",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué es importante que el eje Y de un gráfico de barras comience en cero?",
    "options": [
      { "id": "a", "text": "Es solo una convención estética." },
      { "id": "b", "text": "Si no comienza en cero, las diferencias entre barras se exageran visualmente, induciendo a error." },
      { "id": "c", "text": "Los gráficos se ven más bonitos así." },
      { "id": "d", "text": "Solo necesario en gráficos impresos." }
    ],
    "correctIds": ["b"],
    "explanation": "La longitud de la barra codifica la magnitud. Sin base en cero, una diferencia del 2% puede parecer del 200%. Es la manipulación gráfica más común.",
    "domain": "Tema 11: Ética"
  },
  {
    "id": "unir-viz-11-03",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué diseñó Harry Beck en 1933 y cuál es su principal limitación?",
    "options": [
      { "id": "a", "text": "El primer gráfico de barras; no puede mostrar más de 10 categorías." },
      { "id": "b", "text": "El mapa del metro de Londres; no refleja la ubicación real de las estaciones." },
      { "id": "c", "text": "La primera infografía periodística; era en blanco y negro." },
      { "id": "d", "text": "El sistema Isotype; solo usaba pictogramas de personas." }
    ],
    "correctIds": ["b"],
    "explanation": "El mapa de Beck es topológico, no topográfico. Sacrificó precisión geográfica para maximizar legibilidad.",
    "domain": "Tema 11: Ética"
  },
  {
    "id": "unir-viz-11-04",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Por qué se critica frecuentemente el uso de gráficos de tarta (pie charts)?",
    "options": [
      { "id": "a", "text": "Porque son muy complejos de crear." },
      { "id": "b", "text": "Porque el ojo humano tiene dificultades para comparar ángulos y áreas con precisión." },
      { "id": "c", "text": "Porque no se pueden imprimir en papel." },
      { "id": "d", "text": "Porque solo funcionan con datos de dos categorías." }
    ],
    "correctIds": ["b"],
    "explanation": "Edward Tufte documentó que son inherentemente imprecisos. Ángulo y área son atributos de baja efectividad según Cleveland y McGill.",
    "domain": "Tema 11: Ética"
  },
  {
    "id": "unir-viz-11-05",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué principio ético fundamental debe regir toda decisión en la visualización de datos?",
    "options": [
      { "id": "a", "text": "La visualización debe ser lo más colorida y llamativa posible." },
      { "id": "b", "text": "La visualización debe iluminar, no oscurecer. Toda decisión de diseño debe estar al servicio de la verdad." },
      { "id": "c", "text": "Debe seguir las últimas tendencias de diseño." },
      { "id": "d", "text": "Debe priorizar la velocidad de creación sobre la precisión." }
    ],
    "correctIds": ["b"],
    "explanation": "Principio rector de la asignatura: cada elección de color, gráfico, escala o perspectiva debe representar fielmente la realidad de los datos.",
    "domain": "Tema 11: Ética"
  },
  {
    "id": "unir-viz-11-06",
    "courseId": "unir-viz-interactiva",
    "lang": "es",
    "type": "single_choice",
    "prompt": "¿Qué elemento fundamental debe acompañar siempre a los datos en una visualización?",
    "options": [
      { "id": "a", "text": "Una descripción del proceso de recolección." },
      { "id": "b", "text": "La opinión personal del autor." },
      { "id": "c", "text": "La cita completa de la fuente de donde se obtuvieron los datos." },
      { "id": "d", "text": "Un análisis estadístico exhaustivo." }
    ],
    "correctIds": ["c"],
    "explanation": "La transparencia es la base de la ética. Citar la fuente completa permite al lector verificar la veracidad y otorga credibilidad.",
    "domain": "Tema 11: Ética"
  }
]);
