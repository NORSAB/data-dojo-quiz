/**
 * UNIR — Herramientas de Visualización
 * Flashcard Data Bank — 55 flashcards across all 11 themes
 * Used by the Dojo Data Study Mode
 */
window.unirHerrFlashcards = [
  // ══════════════════════════════════════════════════════════════
  // TEMA 1 — Introducción a las Herramientas
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuáles son los tres pasos fundamentales para explicar una historia basada en datos?",
    respuesta: "<ol style='padding-left:20px;'><li>Entender los <strong>datos disponibles</strong>.</li><li>Ser capaz de <strong>representarlos gráficamente</strong> con las herramientas adecuadas.</li><li>Comprobar que los destinatarios entiendan el <strong>mismo mensaje</strong> que pretendes explicar.</li></ol>"
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuál es la diferencia entre herramientas para desarrolladores y para no-desarrolladores?",
    respuesta: "<strong>Desarrolladores:</strong> Requieren programación pero ofrecen personalización ilimitada (Google Chart, D3.js, R).<br><br><strong>No-Desarrolladores:</strong> Maximizan la facilidad de uso con arrastrar y soltar (Tableau, Power BI, Qlik, CARTO)."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuáles son los tres niveles de una página web?",
    respuesta: "<strong>1. Estructura y Contenido (HTML):</strong> textos, imágenes, enlaces, tablas.<br><br><strong>2. Apariencia (CSS):</strong> colores, tipografías, fondos, tamaños.<br><br><strong>3. Comportamiento (JavaScript):</strong> efectos, animaciones, validaciones, APIs."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuáles son los tres tipos de selectores CSS?",
    respuesta: "<strong>1. De elemento:</strong> <code>div { ... }</code> — selecciona todas las etiquetas del tipo.<br><br><strong>2. De identificador (#):</strong> <code>#header { ... }</code> — único por página.<br><br><strong>3. De clase (.):</strong> <code>.highlight { ... }</code> — reutilizable en múltiples elementos."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "Según Gartner, ¿qué caracteriza actualmente a las plataformas modernas de ABI?",
    respuesta: "Las plataformas modernas de Analytics and Business Intelligence ya <strong>no se diferencian</strong> por sus capacidades en la visualización de datos.<br><br>Su diferenciación reside en:<br>- <strong>Integración corporativa</strong><br>- <strong>Capacidades aumentadas</strong> (IA/ML para insights automáticos)"
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 2 — Google Chart
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 2: Google Chart",
    pregunta: "¿Cuáles son los pasos básicos para crear un gráfico con Google Chart?",
    respuesta: "<ol style='padding-left:20px;'><li>Cargar la librería: <code>google.charts.load()</code></li><li>Definir datos: <code>DataTable</code></li><li>Configurar opciones (título, colores, etc.)</li><li>Renderizar: <code>draw()</code></li></ol>"
  },
  {
    tema: "Tema 2: Google Chart",
    pregunta: "¿Cómo se conecta Google Spreadsheets como fuente de datos?",
    respuesta: "Se necesitan <strong>permisos de lectura pública</strong> o 'cualquier persona con el enlace'.<br><br>Se usa <code>google.visualization.Query</code> para consultar la hoja de cálculo y el método <code>handleQueryResponse</code> para procesar la respuesta."
  },
  {
    tema: "Tema 2: Google Chart",
    pregunta: "¿Cómo se gestionan eventos en Google Chart?",
    respuesta: "<code>google.visualization.events.addListener(chart, 'select', handler)</code><br><br>Permite que los gráficos respondan a acciones del usuario como <strong>click, sort, hover</strong> y conectar visualizaciones entre sí para crear dashboards coordinados."
  },
  {
    tema: "Tema 2: Google Chart",
    pregunta: "¿Qué es un DataView en Google Charts?",
    respuesta: "<code>DataView</code> actúa como una <strong>'máscara'</strong> sobre la DataTable original.<br><br>Permite mostrar solo un subconjunto de columnas o filas a un gráfico específico sin alterar la tabla de datos maestra."
  },
  {
    tema: "Tema 2: Google Chart",
    pregunta: "¿Cómo se personalizan los colores de un gráfico circular en Google Charts?",
    respuesta: "Especificando una lista de colores en la opción <code>colors</code> del objeto de configuración:<br><br><code>options: { colors: ['#e0440e', '#e6693e', '#ec8f6e'] }</code><br><br>Los colores se asignan automáticamente a las rebanadas en orden de los datos."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 3 — D3.js Introducción
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 3: D3.js Intro",
    pregunta: "¿Qué es D3.js y quién lo creó?",
    respuesta: "<strong>D3.js (Data-Driven Documents)</strong> es una librería JavaScript creada por <strong>Mike Bostock</strong>.<br><br>Utiliza HTML, CSS y SVG para crear visualizaciones avanzadas, dinámicas e interactivas en navegadores web."
  },
  {
    tema: "Tema 3: D3.js Intro",
    pregunta: "¿Qué son los selectores en D3.js?",
    respuesta: "<code>d3.select()</code> — selecciona el <strong>primer</strong> elemento que coincida con el selector CSS.<br><br><code>d3.selectAll()</code> — selecciona <strong>todos</strong> los elementos que coincidan.<br><br>Son la base para manipular el DOM con D3."
  },
  {
    tema: "Tema 3: D3.js Intro",
    pregunta: "¿Qué es el encadenamiento de métodos (chaining) en D3?",
    respuesta: "D3 permite encadenar múltiples métodos en una sola expresión fluida:<br><br><code>d3.select('body')<br>&nbsp;&nbsp;.data(dataset)<br>&nbsp;&nbsp;.enter()<br>&nbsp;&nbsp;.append('div')<br>&nbsp;&nbsp;.attr('class', 'bar')<br>&nbsp;&nbsp;.style('height', d => d + 'px')</code>"
  },
  {
    tema: "Tema 3: D3.js Intro",
    pregunta: "¿Qué hace el método .data() combinado con .enter() en D3?",
    respuesta: "<code>.data()</code> vincula un <strong>array de datos</strong> a elementos del DOM.<br><br><code>.enter()</code> crea <strong>nuevos elementos</strong> para cada dato que no tiene un elemento DOM correspondiente.<br><br>Es el mecanismo fundamental del 'data binding' en D3."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 4 — D3.js Datos, SVG y Gráficas
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 4: D3.js SVG",
    pregunta: "¿Qué formatos de datos soporta D3.js y cómo se cargan?",
    respuesta: "<strong>JSON:</strong> <code>d3.json()</code> — objetos clave-valor, ideal para datos jerárquicos.<br><br><strong>CSV:</strong> <code>d3.csv()</code> — valores separados por comas.<br><br><strong>TSV:</strong> <code>d3.tsv()</code> — valores separados por tabulaciones."
  },
  {
    tema: "Tema 4: D3.js SVG",
    pregunta: "¿Cuáles son los principales elementos SVG?",
    respuesta: "<code>rect</code> — rectángulos (barras): x, y, width, height<br><code>circle</code> — círculos (puntos): cx, cy, r<br><code>line</code> — líneas: x1, y1, x2, y2<br><code>text</code> — etiquetas: x, y, font-size<br><code>path</code> — trazados complejos: atributo d"
  },
  {
    tema: "Tema 4: D3.js SVG",
    pregunta: "¿Cuál es la particularidad del sistema de coordenadas SVG?",
    respuesta: "El origen (0,0) está en la <strong>esquina superior izquierda</strong>.<br><br>El eje Y crece <strong>hacia abajo</strong>, lo que es contraintuitivo para gráficos convencionales.<br><br>Se requiere <strong>invertir cálculos</strong> para que las barras crezcan hacia arriba."
  },
  {
    tema: "Tema 4: D3.js SVG",
    pregunta: "¿Cómo se construye un Bar Chart desde cero en D3?",
    respuesta: "Se construye con elementos <code>rect</code> en SVG:<br><br>- <code>.attr('x', ...)</code> — posición horizontal<br>- <code>.attr('y', ...)</code> — posición vertical (invertida)<br>- <code>.attr('width', ...)</code> — ancho de la barra<br>- <code>.attr('height', ...)</code> — alto basado en los datos"
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 5 — D3.js Escalas y Ejes
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 5: Escalas y Ejes",
    pregunta: "¿Qué son las escalas (scales) en D3.js?",
    respuesta: "Son <strong>funciones que mapean un dominio de datos de entrada a un rango de salida visual</strong> (pixeles).<br><br>Tipos: lineal (<code>d3.scale.linear()</code>), ordinal (<code>d3.scale.ordinal()</code>), logarítmica (<code>d3.scale.log()</code>)."
  },
  {
    tema: "Tema 5: Escalas y Ejes",
    pregunta: "¿Cuál es la diferencia entre dominio y rango en D3?",
    respuesta: "<strong>Dominio (.domain()):</strong> rango de valores de los datos de entrada (ej: [0, 1000]).<br><br><strong>Rango (.range()):</strong> rango de pixeles de salida visual (ej: [0, 500]).<br><br>Ejemplo: un valor de 500 en el dominio se mapea a 250px en el rango."
  },
  {
    tema: "Tema 5: Escalas y Ejes",
    pregunta: "¿Cómo se crean ejes en D3?",
    respuesta: "<code>d3.svg.axis()</code> genera automáticamente:<br>- <strong>Líneas de referencia</strong><br>- <strong>Marcas (ticks)</strong><br>- <strong>Etiquetas</strong><br><br>Se configura con <code>.orient()</code> para la posición y <code>.ticks()</code> para la cantidad de marcas."
  },
  {
    tema: "Tema 5: Escalas y Ejes",
    pregunta: "¿Qué es rangeRoundBands en D3?",
    respuesta: "<code>.rangeRoundBands()</code> divide el espacio disponible en <strong>bandas discretas</strong> para datos categóricos.<br><br>Incluye un parámetro de <strong>padding</strong> para controlar el espaciado entre bandas. Ideal para gráficos de barras con categorías."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 6 — Interactividad y Transiciones
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 6: Interactividad",
    pregunta: "¿Qué es un Force Layout en D3?",
    respuesta: "Es una <strong>simulación física</strong> que posiciona nodos automáticamente usando fuerzas de repulsión y atracción.<br><br>Parámetros clave:<br>- <code>.charge()</code> — fuerza de repulsión/atracción<br>- <code>.linkDistance()</code> — distancia ideal entre nodos<br>- <code>force.on('tick', ...)</code> — actualiza posiciones"
  },
  {
    tema: "Tema 6: Interactividad",
    pregunta: "¿Qué es el patrón enter-update-exit en D3?",
    respuesta: "<strong>Enter:</strong> <code>.enter()</code> — para datos nuevos, crea elementos.<br><br><strong>Update:</strong> actualización directa — para datos existentes, modifica propiedades.<br><br><strong>Exit:</strong> <code>.exit().remove()</code> — para datos eliminados, quita elementos del DOM."
  },
  {
    tema: "Tema 6: Interactividad",
    pregunta: "¿Cómo funcionan las transiciones en D3?",
    respuesta: "<code>.transition()</code> interpola automáticamente valores entre un estado inicial y final.<br><br><code>.duration(750)</code> — duración en milisegundos<br><code>.delay(100)</code> — retardo antes de iniciar<br><br>Permite animaciones fluidas sin código complejo."
  },
  {
    tema: "Tema 6: Interactividad",
    pregunta: "¿Qué formatos de exportación soporta D3?",
    respuesta: "<strong>SVG:</strong> vectorial, editable, escalable sin pérdida.<br><br><strong>PDF:</strong> exportación desde el navegador.<br><br><strong>PNG/Bitmap:</strong> rasterizado, pierde escalabilidad al ampliar."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 7 — Power BI
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 7: Power BI",
    pregunta: "¿Cuáles son las versiones de Power BI?",
    respuesta: "<strong>Desktop:</strong> gratuito, análisis personal.<br><strong>Pro:</strong> colaboración en la nube.<br><strong>Premium:</strong> capacidad empresarial.<br><strong>Server:</strong> on-premises.<br><br>Power BI es líder en el cuadrante mágico de Gartner junto a Tableau y Qlik."
  },
  {
    tema: "Tema 7: Power BI",
    pregunta: "¿Qué es Power Query en Power BI?",
    respuesta: "Es el <strong>editor ETL</strong> (Extract, Transform, Load) de Power BI.<br><br>Permite:<br>- Eliminar columnas innecesarias<br>- Filtrar filas<br>- Cambiar tipos de datos<br>- Combinar consultas de múltiples fuentes<br><br>Todo <strong>antes</strong> de cargar los datos al modelo de análisis."
  },
  {
    tema: "Tema 7: Power BI",
    pregunta: "¿Cuáles son las tres vistas principales de Power BI Desktop?",
    respuesta: "<strong>1. Informe:</strong> donde se crean las visualizaciones.<br><br><strong>2. Datos:</strong> donde se ven las tablas de datos cargadas.<br><br><strong>3. Modelo:</strong> donde se gestionan las relaciones entre tablas."
  },
  {
    tema: "Tema 7: Power BI",
    pregunta: "¿Qué son los Slicers en Power BI?",
    respuesta: "Los <strong>Slicers</strong> (segmentadores de datos) son filtros visuales interactivos que permiten al usuario seleccionar valores específicos para filtrar todas las visualizaciones del informe simultáneamente.<br><br>Son fundamentales para crear dashboards interactivos."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 8 — Qlik Sense
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 8: Qlik Sense",
    pregunta: "¿Qué es Qlik Sense y cuáles son sus versiones?",
    respuesta: "Plataforma completa de <strong>Business Intelligence</strong> orientada al descubrimiento de datos.<br><br><strong>Business:</strong> SaaS, equipos pequeños, limitaciones en APIs y espacios.<br><br><strong>Enterprise:</strong> multinube, despliegue masivo, incluye Nprinting, GeoAnalytics."
  },
  {
    tema: "Tema 8: Qlik Sense",
    pregunta: "¿Cuál es la diferencia entre dimensiones y medidas en Qlik Sense?",
    respuesta: "<strong>Dimensiones:</strong> definen las <strong>categorías de agrupación</strong> (ej: país, mes, producto).<br><br><strong>Medidas:</strong> definen los <strong>valores numéricos a calcular</strong> (ej: sum(ventas), avg(precio), count(pedidos))."
  },
  {
    tema: "Tema 8: Qlik Sense",
    pregunta: "¿Qué son las Stories en Qlik Sense?",
    respuesta: "Son presentaciones <strong>narrativas</strong> creadas a partir de visualizaciones existentes.<br><br>Permiten contar una historia guiada con datos, combinando gráficos con texto explicativo para comunicar hallazgos de forma persuasiva."
  },
  {
    tema: "Tema 8: Qlik Sense",
    pregunta: "¿Qué es un Filter Pane en Qlik Sense?",
    respuesta: "Es un panel de filtros que permite <strong>seleccionar y combinar filtros</strong> para explorar subconjuntos de datos interactivamente.<br><br>Los estados de filtro seleccionados se aplican globalmente a todas las visualizaciones de la app."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 9 — Tableau Introducción
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 9: Tableau Intro",
    pregunta: "¿Qué es VizQL en Tableau?",
    respuesta: "<strong>VizQL (Visual Query Language)</strong> es la tecnología patentada de Tableau que traduce las acciones de <strong>arrastrar y soltar</strong> en consultas de base de datos optimizadas y representaciones visuales automáticas.<br><br>Fue desarrollado en la Universidad de Stanford como parte del sistema Polaris."
  },
  {
    tema: "Tema 9: Tableau Intro",
    pregunta: "¿Qué es la Tarjeta de Marcas (Marks Card) en Tableau?",
    respuesta: "Es el panel que asigna campos a <strong>propiedades estéticas</strong> del gráfico:<br><br>- <strong>Color:</strong> diferenciar categorías<br>- <strong>Tamaño:</strong> representar magnitud<br>- <strong>Texto/Etiqueta:</strong> valores en las marcas<br>- <strong>Detalle:</strong> nivel de granularidad<br>- <strong>Forma:</strong> tipo de marcador<br>- <strong>Tooltip:</strong> información emergente"
  },
  {
    tema: "Tema 9: Tableau Intro",
    pregunta: "¿Qué versiones de Tableau existen?",
    respuesta: "<strong>Desktop:</strong> análisis personal, licencia individual.<br><strong>Server:</strong> on-premises, compartir en la organización.<br><strong>Online/Cloud:</strong> SaaS, sin infraestructura.<br><strong>Public:</strong> gratuito, datos deben ser públicos.<br><br>En 2019 fue adquirido por <strong>Salesforce</strong>."
  },
  {
    tema: "Tema 9: Tableau Intro",
    pregunta: "¿Qué es el Motor Hyper de Tableau?",
    respuesta: "Es el motor de datos de Tableau que permite <strong>análisis ad hoc rápido de datos masivos</strong> incluso en equipos de prestaciones normales.<br><br>Optimiza las consultas para ofrecer respuestas interactivas sin necesidad de pre-agregar los datos."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 10 — Tableau Avanzado
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 10: Tableau Avanzado",
    pregunta: "¿Cuál es la diferencia entre Filtros y Páginas en Tableau?",
    respuesta: "<strong>Filtros:</strong> <strong>eliminan</strong> datos de la visualización basándose en condiciones.<br><br><strong>Páginas:</strong> <strong>organizan</strong> los datos en capas navegables secuenciales (generalmente por tiempo). Los datos NO se eliminan, solo se fragmentan en vistas."
  },
  {
    tema: "Tema 10: Tableau Avanzado",
    pregunta: "¿Cómo se crea un Dashboard interactivo en Tableau?",
    respuesta: "1. Crear <strong>hojas de trabajo</strong> individuales.<br>2. Abrir un <strong>nuevo Dashboard</strong> desde la barra inferior.<br>3. Arrastrar las hojas al canvas.<br>4. Usar el icono de <strong>'Embudo' (Usar como filtro)</strong> para que las selecciones filtren las demás hojas.<br>5. Configurar <strong>acciones</strong> (filtro, resaltado, navegación)."
  },
  {
    tema: "Tema 10: Tableau Avanzado",
    pregunta: "¿Qué tipos de acciones existen en Tableau?",
    respuesta: "<strong>Filtro:</strong> filtrar datos en otras hojas según la selección.<br><br><strong>Resaltado:</strong> resaltar marcas relacionadas sin eliminar datos.<br><br><strong>Navegación:</strong> 'Ir a la hoja' para exploración dinámica entre vistas."
  },
  {
    tema: "Tema 10: Tableau Avanzado",
    pregunta: "¿Qué son las Historias (Stories) en Tableau?",
    respuesta: "Son <strong>presentaciones narrativas</strong> que guían al usuario a través de una secuencia de visualizaciones.<br><br>Cada 'punto de historia' puede ser una hoja de trabajo o dashboard con anotaciones, creando un relato basado en datos."
  },
  // ══════════════════════════════════════════════════════════════
  // TEMA 11 — CARTO
  // ══════════════════════════════════════════════════════════════
  {
    tema: "Tema 11: CARTO",
    pregunta: "¿Qué es CARTO y para qué sirve?",
    respuesta: "Es una plataforma líder en <strong>Location Intelligence</strong> que transforma datos de ubicación en decisiones estratégicas.<br><br>Fundada en 2007, utilizada por la NASA, Google y el Wall Street Journal. Motor: <strong>PostgreSQL/PostGIS</strong> en la nube."
  },
  {
    tema: "Tema 11: CARTO",
    pregunta: "¿Qué es la columna the_geom en CARTO?",
    respuesta: "Es la <strong>columna geométrica</strong> requerida para mapear registros. Transforma pares de <strong>latitud/longitud</strong> en objetos espaciales renderizables sobre el mapa.<br><br>Sin ella, los datos no pueden representarse geográficamente."
  },
  {
    tema: "Tema 11: CARTO",
    pregunta: "¿Qué tipos de widgets ofrece CARTO?",
    respuesta: "<strong>Categoría:</strong> filtra por valores categóricos.<br><strong>Histograma:</strong> distribución de valores numéricos.<br><strong>Fórmula:</strong> cálculos agregados (sum, avg, count).<br><strong>Series de tiempo:</strong> evolución temporal de los datos."
  },
  {
    tema: "Tema 11: CARTO",
    pregunta: "¿Qué análisis espaciales ofrece CARTO?",
    respuesta: "<strong>Create Lines from Points:</strong> conectar puntos secuencialmente.<br><strong>Group By:</strong> diferenciar rutas o categorías.<br><strong>Transform:</strong> transformaciones geométricas.<br><strong>Analyze and Predict:</strong> análisis predictivos espaciales.<br><br>También permite <strong>SQL en línea</strong> directamente en la interfaz."
  },
  {
    tema: "Tema 11: CARTO",
    pregunta: "¿Qué es la Inteligencia de Ubicación (Location Intelligence)?",
    respuesta: "Surge con la masificación del <strong>GPS en smartphones (2008)</strong>.<br><br>Combina Big Data, computación en la nube e IoT para optimizar procesos geoespaciales: rutas de entrega, marketing conductual, ubicaciones estratégicas de tiendas."
  }
];
