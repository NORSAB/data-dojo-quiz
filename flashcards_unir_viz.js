/**
 * UNIR — Visualización Interactiva de la Información
 * Flashcard Data Bank — 55 flashcards across all 11 themes
 * Used by the Dojo Data Study Mode
 */
window.unirVizFlashcards = [
  // ══════════════════════════════════════════════════
  // TEMA 1 — Introducción a la Infografía y Visualización
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuál es la diferencia fundamental entre infografía y visualización de datos?",
    respuesta: "<strong>Infografía:</strong> Es una pieza narrativa <em>cerrada</em> donde el autor cuenta una historia predefinida.<br><br><strong>Visualización de datos:</strong> Es un sistema <em>abierto y exploratorio</em> donde el usuario puede interactuar, filtrar y descubrir sus propios patrones.<br><br><strong>Nota:</strong> Ambas comparten el objetivo de comunicar datos, pero difieren en autonomía del usuario."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Qué significa 'amplificar la cognición' en el contexto de la visualización?",
    respuesta: "Significa que la visualización actúa como una <strong>extensión del sistema visual humano</strong>, permitiendo comprender relaciones y patrones que serían imposibles de detectar mirando solo datos en bruto (tablas, números).<br><br>El cerebro humano procesa información visual mucho más rápido que texto, detectando anomalías de forma <strong>pre-atentiva</strong> (automática e inconsciente)."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuáles son las 5 fases del proceso de creación de una visualización?",
    respuesta: "<ol style='padding-left:20px;'><li><strong>Investigación</strong> de fuentes</li><li><strong>Selección</strong> y curación de datos</li><li><strong>Boceto</strong> (sketch)</li><li><strong>Elaboración</strong> técnica</li><li><strong>Recepción</strong> y generación de conocimiento</li></ol>"
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Cuál es la jerarquía Dato → Información → Conocimiento?",
    respuesta: "<strong>Dato:</strong> Valor puro sin contexto (ej: '42')<br><br><strong>Información:</strong> Dato procesado con significado (ej: '42°C de temperatura')<br><br><strong>Conocimiento:</strong> Información comprendida que permite tomar decisiones (ej: '42°C = fiebre, necesita atención médica')<br><br><strong>Nota:</strong> La visualización facilita este tránsito de dato a conocimiento."
  },
  {
    tema: "Tema 1: Introducción",
    pregunta: "¿Por qué el sistema visual humano es la base de la visualización de datos?",
    respuesta: "Porque el cerebro <strong>detecta patrones visuales a gran velocidad</strong>, procesando información casi instantáneamente. Es el canal sensorial más potente del ser humano.<br><br>Procesamos imágenes mucho más rápido que texto y detectamos anomalías de forma <strong>pre-atentiva</strong> (antes de la atención consciente)."
  },
  // ══════════════════════════════════════════════════
  // TEMA 2 — Historia de la Infografía
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 2: Historia",
    pregunta: "¿Qué aportó Leonardo Da Vinci a la visualización?",
    respuesta: "Da Vinci fue pionero porque sus dibujos <strong>no eran simples ilustraciones</strong>: eran <strong>herramientas de investigación empírica</strong> para comprender la anatomía, la ingeniería y la naturaleza.<br><br>Fusionó ciencia y arte a través del dibujo técnico y anatómico."
  },
  {
    tema: "Tema 2: Historia",
    pregunta: "¿Qué es el Isotype y quiénes lo crearon?",
    respuesta: "El <strong>Isotype</strong> (International System of Typographic Picture Education) fue un sistema de <strong>pictogramas estandarizados</strong> creado por <strong>Otto Neurath y Gerd Arntz</strong> en la década de 1920.<br><br>Servía para comunicar estadísticas sociales y económicas a personas de cualquier nivel educativo."
  },
  {
    tema: "Tema 2: Historia",
    pregunta: "¿Cuándo se publicó la primera infografía periodística y dónde?",
    respuesta: "El <strong>7 de abril de 1806</strong> en <strong>The Times de Londres</strong>. Se publicó un plano de la escena de un crimen (asesinato de Isaac Blight).<br><br>Otros hitos:<br>• <strong>1982:</strong> USA Today lanza los 'Snapshots'<br>• <strong>1991:</strong> Guerra del Golfo consolida la infografía en periodismo"
  },
  {
    tema: "Tema 2: Historia",
    pregunta: "¿Cuál es el principal defecto de la proyección de Mercator?",
    respuesta: "<strong>Distorsiona el tamaño real de las áreas</strong>, especialmente en zonas cercanas a los polos.<br><br>Ejemplo: Groenlandia aparece del tamaño de África cuando en realidad es <strong>14 veces menor</strong>.<br><br>La proyección preserva ángulos (útil para navegación) pero sacrifica las proporciones de área."
  },
  {
    tema: "Tema 2: Historia",
    pregunta: "¿Qué hizo especial la cobertura de la Guerra del Golfo (1991)?",
    respuesta: "Ante la <strong>falta de imágenes del frente de batalla</strong>, los medios recurrieron masivamente a <strong>infografías vectoriales y mapas</strong>.<br><br>Esto consolidó la infografía como <strong>recurso indispensable del periodismo</strong> cuando la fotografía no podía llegar al frente."
  },
  // ══════════════════════════════════════════════════
  // TEMA 3 — Trabajar con Datos
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 3: Datos",
    pregunta: "¿Qué significa 'Garbage In, Garbage Out' (GIGO)?",
    respuesta: "Si los <strong>datos de entrada son erróneos</strong>, las visualizaciones resultantes serán <strong>engañosas o inútiles</strong>.<br><br>Ningún diseño visual puede compensar datos incorrectos. La calidad del resultado depende directamente de la calidad de los datos de entrada."
  },
  {
    tema: "Tema 3: Datos",
    pregunta: "¿Qué es el Data Wrangling?",
    respuesta: "Es el proceso de <strong>limpieza, transformación y preparación</strong> de datos crudos para su análisis. Incluye:<br><br>• Eliminar duplicados<br>• Tratar valores nulos/faltantes<br>• Normalizar formatos (fechas, unidades)<br>• Reestructurar tablas<br>• Separar campos compuestos"
  },
  {
    tema: "Tema 3: Datos",
    pregunta: "¿Cuál es la diferencia entre variables categóricas y cuantitativas?",
    respuesta: "<strong>Categóricas:</strong> Representan grupos o etiquetas (País, Género). Se codifican con <em>color/forma</em>.<br><br><strong>Cuantitativas:</strong> Representan magnitudes numéricas (ventas, temperatura). Se codifican con <em>posición/longitud</em>.<br><br><strong>Nota:</strong> Elegir el atributo visual correcto según el tipo de variable es fundamental."
  },
  {
    tema: "Tema 3: Datos",
    pregunta: "¿Cuáles son las escalas de medida de datos (NOIR)?",
    respuesta: "<strong>N</strong>ominal: Sin orden (colores, países)<br><strong>O</strong>rdinal: Con orden pero sin distancia fija (bajo/medio/alto)<br><strong>I</strong>ntervalo: Con distancia fija pero sin cero absoluto (temperatura °C)<br><strong>R</strong>atio: Con cero absoluto (peso, ingresos)<br><br><strong>Nota:</strong> El tipo de escala determina qué operaciones y gráficos son válidos."
  },
  // ══════════════════════════════════════════════════
  // TEMA 4 — Psicología Aplicada a la Visualización
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 4: Psicología",
    pregunta: "¿Qué es la memoria icónica?",
    respuesta: "Es un tipo de <strong>memoria sensorial</strong> que opera en <strong>milisegundos</strong>, captando atributos visuales como color, posición y orientación <strong>antes de la atención consciente</strong>.<br><br>Es el primer filtro del sistema visual y detecta atributos 'preatentivos' de forma automática e inconsciente."
  },
  {
    tema: "Tema 4: Psicología",
    pregunta: "¿Cuáles son los 3 tipos de memoria en la percepción visual?",
    respuesta: "<ol style='padding-left:20px;'><li><strong>Memoria icónica</strong> (sensorial): Capta en milisegundos</li><li><strong>Memoria a corto plazo</strong> (de trabajo): Procesa conscientemente (~7 ítems)</li><li><strong>Memoria a largo plazo:</strong> Reconoce convenciones y símbolos aprendidos</li></ol><br><strong>Nota:</strong> El flujo va de sensorial → corto plazo → largo plazo."
  },
  {
    tema: "Tema 4: Psicología",
    pregunta: "¿Qué son los atributos preatentivos?",
    respuesta: "Son propiedades visuales que el cerebro detecta <strong>automática e instantáneamente</strong>, sin esfuerzo consciente:<br><br>• <strong>Color</strong> (tono, saturación)<br>• <strong>Tamaño</strong><br>• <strong>Orientación</strong><br>• <strong>Forma</strong><br>• <strong>Movimiento</strong><br><br>Se usan para guiar la atención hacia la información más relevante en una visualización."
  },
  {
    tema: "Tema 4: Psicología",
    pregunta: "Nombra 4 principios de la Gestalt relevantes para visualización.",
    respuesta: "<strong>1. Proximidad:</strong> Elementos cercanos se perciben como grupo<br><strong>2. Similitud:</strong> Elementos con misma forma/color se agrupan<br><strong>3. Cierre (Clausura):</strong> El cerebro completa formas incompletas<br><strong>4. Continuidad:</strong> Seguimos líneas y curvas fluidas<br><br>Otros: Figura-fondo, Destino común, Conexión."
  },
  {
    tema: "Tema 4: Psicología",
    pregunta: "¿Qué principio de la Gestalt usa la similitud?",
    respuesta: "El principio de <strong>similitud</strong> establece que percibimos como grupo los elementos que <strong>comparten color, forma o tamaño</strong>.<br><br>En visualización: puntos del mismo color se perciben como la misma categoría, sin necesidad de leer la leyenda."
  },
  // ══════════════════════════════════════════════════
  // TEMA 5 — Diseño Aplicado a la Visualización
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 5: Diseño",
    pregunta: "¿Cuál es la diferencia entre RGB y CMYK?",
    respuesta: "<strong>RGB (Aditivo):</strong> Suma de luces (Rojo + Verde + Azul). Se usa en <em>pantallas</em>. La suma produce blanco.<br><br><strong>CMYK (Sustractivo):</strong> Mezcla de tintas (Cian + Magenta + Amarillo + Key/negro). Se usa en <em>impresión</em>. La suma produce negro.<br><br><strong>Nota:</strong> Hay que preparar la visualización según su destino (pantalla vs. impresión)."
  },
  {
    tema: "Tema 5: Diseño",
    pregunta: "¿Por qué Serif para impresión y Sans Serif para pantalla?",
    respuesta: "<strong>Serif (con remates):</strong> Los remates crean una 'guía visual' que ayuda a leer en papel impreso.<br><br><strong>Sans Serif (sin remates):</strong> En pantalla, los remates generan ruido visual por la baja resolución, por lo que se prefieren fuentes limpias sin remates.<br><br>Ejemplos: Times New Roman (serif) vs. Inter, Roboto (sans serif)."
  },
  {
    tema: "Tema 5: Diseño",
    pregunta: "¿Qué significa que 'la forma debe estar al servicio de la función'?",
    respuesta: "Es un principio fundamental del diseño funcional: la <strong>estética no debe comprometer la claridad del mensaje</strong>.<br><br>Un gráfico puede ser hermoso, pero si dificulta la lectura de los datos, <strong>falla en su propósito</strong>.<br><br>La función (comunicar datos) siempre tiene prioridad sobre la forma (decoración visual)."
  },
  {
    tema: "Tema 5: Diseño",
    pregunta: "¿Cuál es la unidad de medida estándar en diseño digital vs. impresión?",
    respuesta: "<strong>Digital:</strong> El <strong>píxel</strong> es la unidad mínima de información. Resolución típica: 72-96 ppi.<br><br><strong>Impresión:</strong> Se usan <strong>milímetros</strong> y <strong>DPI (dots per inch)</strong>. Para impresión profesional: mínimo <strong>300 DPI</strong>."
  },
  // ══════════════════════════════════════════════════
  // TEMA 6 — Definición y Anatomía del Gráfico
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 6: Anatomía del Gráfico",
    pregunta: "¿Cuáles son los elementos de la anatomía de un gráfico?",
    respuesta: "• <strong>Título:</strong> Captura atención<br>• <strong>Subtítulo:</strong> Contexto adicional<br>• <strong>Ejes X e Y:</strong> Codifican variables<br>• <strong>Leyenda:</strong> Descifra símbolos/colores<br>• <strong>Área de datos:</strong> El gráfico en sí<br>• <strong>Etiquetas:</strong> Valores puntuales<br>• <strong>Fuente:</strong> Credibilidad<br>• <strong>Escala:</strong> Unidades de medida<br>• <strong>Retícula (Grid):</strong> Ayuda a leer valores"
  },
  {
    tema: "Tema 6: Anatomía del Gráfico",
    pregunta: "¿Qué es un mapa de coropletas?",
    respuesta: "Un mapa que <strong>codifica áreas geográficas con colores</strong> para representar datos estadísticos por región.<br><br>Usa divisiones territoriales con una escala de color proporcional al valor representado.<br><br>Ejemplos: PIB por países, densidad de población por estados, tasa de desempleo por municipios."
  },
  {
    tema: "Tema 6: Anatomía del Gráfico",
    pregunta: "¿Cuál es la diferencia entre gráficos figurativos y no figurativos?",
    respuesta: "<strong>Figurativos:</strong> Mantienen conexión icónica con la realidad. Se parecen a lo que representan (mapas, pictogramas).<br><br><strong>No figurativos:</strong> Usan formas <em>abstractas</em> cuya longitud o posición representa magnitudes (barras, líneas, áreas).<br><br><strong>Nota:</strong> Los no figurativos son más precisos; los figurativos son más intuitivos."
  },
  {
    tema: "Tema 6: Anatomía del Gráfico",
    pregunta: "¿Cuál es el gráfico más adecuado para comparar cantidades entre categorías?",
    respuesta: "El <strong>gráfico de barras</strong>. Es la herramienta visual más precisa para comparar magnitudes entre categorías gracias a la <strong>alineación en un eje común</strong>.<br><br>Según Cleveland y McGill, la longitud/posición son los atributos visuales más precisos."
  },
  // ══════════════════════════════════════════════════
  // TEMA 7 — Codificación Gráfica
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 7: Codificación Gráfica",
    pregunta: "¿Cuál es la jerarquía de Cleveland y McGill para datos cuantitativos?",
    respuesta: "De más a menos preciso:<br><br><strong>1. Posición</strong> (scatter plots) — Más preciso<br><strong>2. Longitud</strong> (barras)<br><strong>3. Ángulo</strong> (gráfico de tarta)<br><strong>4. Área</strong> (burbujas)<br><strong>5. Color/Saturación</strong> — Menos preciso<br><br><strong>Nota:</strong> Por eso las barras son mejores que las tartas para comparar valores."
  },
  {
    tema: "Tema 7: Codificación Gráfica",
    pregunta: "¿Cuál es la diferencia entre visualización científica y de información?",
    respuesta: "<strong>Científica:</strong> Trabaja con datos de estructura física (anatomía, clima, moléculas). 'Hereda' la estructura espacial de los datos.<br><br><strong>De información:</strong> Trabaja con datos abstractos (ventas, redes sociales). Debe 'inventar' la codificación porque los datos no tienen forma inherente."
  },
  {
    tema: "Tema 7: Codificación Gráfica",
    pregunta: "¿Qué atributo visual es mejor para datos categóricos vs. cuantitativos?",
    respuesta: "<strong>Categóricos (tipos, grupos):</strong> → <strong>Color (tono)</strong> — rojo vs. azul vs. verde distingue grupos sin implicar orden.<br><br><strong>Cuantitativos (magnitudes):</strong> → <strong>Posición/Longitud</strong> — permite comparar valores con precisión.<br><br><strong>Importante:</strong> Evitar color para cuantitativos: el ojo no puede ordenar intensidades con precisión."
  },
  {
    tema: "Tema 7: Codificación Gráfica",
    pregunta: "¿Por qué los gráficos de tarta (pie charts) son criticados?",
    respuesta: "Porque usan <strong>ángulo y área</strong>, que están en los <strong>niveles más bajos</strong> de la jerarquía de Cleveland y McGill.<br><br>El ojo humano tiene dificultades para comparar ángulos con precisión.<br><br><strong>Alternativa superior:</strong> Gráfico de barras (la longitud es un atributo mucho más preciso que el ángulo)."
  },
  // ══════════════════════════════════════════════════
  // TEMA 8 — Visualización Estática
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 8: Visualización Estática",
    pregunta: "¿Cuál es la herramienta profesional por excelencia para infografías estáticas?",
    respuesta: "<strong>Adobe Illustrator</strong> — Es el estándar de la industria para gráficos vectoriales profesionales.<br><br>Exporta en SVG, EPS y PDF.<br><br><strong>Alternativa libre:</strong> Inkscape (usa SVG como formato nativo)."
  },
  {
    tema: "Tema 8: Visualización Estática",
    pregunta: "¿Cuál es la diferencia entre imagen vectorial y raster (mapa de bits)?",
    respuesta: "<strong>Vectorial</strong> (SVG, AI, EPS):<br>• Se define con fórmulas matemáticas<br>• Escala infinitamente sin perder calidad<br>• Ideal para logos, gráficos, iconos<br><br><strong>Raster</strong> (JPEG, PNG, TIFF):<br>• Cuadrícula fija de píxeles<br>• Se pixela al ampliarla<br>• Ideal para fotografías"
  },
  {
    tema: "Tema 8: Visualización Estática",
    pregunta: "¿Qué resolución se necesita para impresión profesional vs. pantalla?",
    respuesta: "<strong>Pantalla:</strong> 72-96 ppi (suficiente para monitores)<br><br><strong>Impresión profesional:</strong> Mínimo <strong>300 ppp (DPI)</strong><br><br><strong>Nota:</strong> Un archivo pensado para web (72 ppi) se verá borroso al imprimir. Siempre hay que preparar el archivo según su destino."
  },
  {
    tema: "Tema 8: Visualización Estática",
    pregunta: "¿Qué formato de imagen NO se renderiza en navegadores web?",
    respuesta: "<strong>EPS</strong> (Encapsulated PostScript). Es un formato para la industria de impresión y no es soportado nativamente por navegadores web.<br><br>Formatos que SÍ funcionan en web: SVG, PNG, JPEG, GIF, WebP."
  },
  // ══════════════════════════════════════════════════
  // TEMA 9 — Visualización Exploratoria
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 9: Visualización Exploratoria",
    pregunta: "¿Cuál es la tríada tecnológica para visualizaciones web interactivas?",
    respuesta: "<strong>HTML:</strong> Define la estructura del documento<br><strong>CSS:</strong> Controla la apariencia y el estilo<br><strong>JavaScript:</strong> Programa la interactividad (filtros, animaciones, tooltips)<br><br><strong>Nota:</strong> Librerías clave: D3.js, Chart.js, Plotly, Vega-Lite"
  },
  {
    tema: "Tema 9: Visualización Exploratoria",
    pregunta: "¿Qué es Gapminder y quién lo creó?",
    respuesta: "Herramienta creada por <strong>Hans Rosling</strong>. Es el ejemplo emblemático de <strong>visualización exploratoria</strong>.<br><br>Usa gráficos de <strong>burbujas animados</strong> para mostrar relaciones entre indicadores globales:<br>• Eje X: Renta per cápita<br>• Eje Y: Esperanza de vida<br>• Tamaño burbuja: Población<br>• Color: Continente"
  },
  {
    tema: "Tema 9: Visualización Exploratoria",
    pregunta: "¿Cuál es la diferencia entre visualización estática y exploratoria?",
    respuesta: "<strong>Estática:</strong> Pieza cerrada (PDF, imagen). Cuenta una historia predefinida por el autor. No permite interacción.<br><br><strong>Exploratoria:</strong> Permite al usuario interactuar (filtrar, zoom, seleccionar, animar). Pone los datos en manos del usuario para que descubra sus propios patrones."
  },
  {
    tema: "Tema 9: Visualización Exploratoria",
    pregunta: "¿Qué es D3.js?",
    respuesta: "<strong>D3.js</strong> (Data-Driven Documents) es una librería de JavaScript para crear visualizaciones dinámicas e interactivas en el navegador.<br><br>• Manipula el DOM basándose en datos<br>• Trabaja con SVG, HTML y CSS<br>• Ofrece control total sobre cada elemento visual<br>• Curva de aprendizaje alta pero máxima flexibilidad"
  },
  // ══════════════════════════════════════════════════
  // TEMA 10 — Visualización para Comunicar
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 10: Comunicar",
    pregunta: "¿Qué es el Data Storytelling?",
    respuesta: "El arte de guiar al lector a través de los datos con una <strong>estructura narrativa</strong>:<br><br><strong>1. Introducción:</strong> Contexto y pregunta<br><strong>2. Desarrollo:</strong> Descubrimientos y evidencia visual<br><strong>3. Conclusión:</strong> Hallazgos y call-to-action<br><br>Combina: Datos + Visualización + Narrativa."
  },
  {
    tema: "Tema 10: Comunicar",
    pregunta: "¿Qué es Datawrapper?",
    respuesta: "Una <strong>plataforma web</strong> para crear gráficos, mapas y tablas interactivas, muy usada en <strong>periodismo</strong>.<br><br>• No requiere programación<br>• Crea visualizaciones limpias y responsivas en minutos<br>• Adoptada por redacciones de periódicos importantes<br>• Permite embeber gráficos en sitios web"
  },
  {
    tema: "Tema 10: Comunicar",
    pregunta: "¿Qué es Timeline.js y qué institución lo desarrolló?",
    respuesta: "Herramienta de <strong>código abierto</strong> para crear líneas de tiempo interactivas, desarrollada por <strong>Knight Lab</strong> (Northwestern University).<br><br>Usa Google Sheets como fuente de datos para crear narrativas cronológicas interactivas que se embeben en páginas web."
  },
  {
    tema: "Tema 10: Comunicar",
    pregunta: "¿Por qué es importante el 'Scrollytelling'?",
    respuesta: "Es una técnica narrativa que convierte el <strong>scroll del usuario en una línea temporal de la historia</strong>.<br><br>A medida que el usuario baja por la página, la visualización se transforma, revela datos progresivamente y guía la narrativa de forma fluida.<br><br>Ejemplos: New York Times, The Pudding, Bloomberg."
  },
  // ══════════════════════════════════════════════════
  // TEMA 11 — Ética en la Visualización
  // ══════════════════════════════════════════════════
  {
    tema: "Tema 11: Ética",
    pregunta: "¿Cuáles son las malas prácticas más comunes en visualización?",
    respuesta: "• <strong>Ejes truncados:</strong> Exageran diferencias pequeñas<br>• <strong>3D innecesario:</strong> Distorsiona proporciones (especialmente tartas)<br>• <strong>Cherry-picking:</strong> Seleccionar solo datos convenientes<br>• <strong>Colores engañosos:</strong> Inducen asociaciones incorrectas<br>• <strong>Escalas no lineales:</strong> Sin justificación técnica"
  },
  {
    tema: "Tema 11: Ética",
    pregunta: "¿Cuáles son las buenas prácticas éticas en visualización?",
    respuesta: "• El eje Y debe comenzar en cero (en gráficos de barras)<br>• Usar escalas proporcionales y lineales<br>• Citar la fuente original de los datos<br>• Leyendas claras y descriptivas<br>• Usar 'Elaboración propia' cuando corresponda<br>• No manipular la percepción del lector"
  },
  {
    tema: "Tema 11: Ética",
    pregunta: "¿Por qué el mapa del metro de Londres es tanto un éxito como una crítica?",
    respuesta: "<strong>Éxito:</strong> El diseño de <strong>Harry Beck (1933)</strong> es extremadamente funcional — fácil de usar y leer.<br><br><strong>Crítica:</strong> Es un <strong>diagrama topológico</strong>, no refleja la ubicación geográfica real de las estaciones. Sacrificó precisión geográfica por legibilidad.<br><br><strong>Nota:</strong> Caso de estudio sobre el equilibrio forma vs. función."
  },
  {
    tema: "Tema 11: Ética",
    pregunta: "¿Qué es el principio rector de la visualización ética?",
    respuesta: "<div style='text-align:center;padding:16px;background:linear-gradient(135deg,#4f6ef708,#7c3aed08);border-radius:12px;border:2px solid #4f6ef720;'><div style='font-size:1.15rem;font-weight:800;background:linear-gradient(135deg,#4f6ef7,#7c3aed);-webkit-background-clip:text;-webkit-text-fill-color:transparent;'>\"La visualización debe iluminar, no oscurecer.\"</div><br>Cada elección de color, gráfico, escala o perspectiva debe representar <strong>fielmente</strong> la realidad de los datos.</div>"
  },
  // ══════════════════════════════════════════════════
  // CONCEPTOS TRANSVERSALES
  // ══════════════════════════════════════════════════
  {
    tema: "Conceptos Clave",
    pregunta: "¿Qué es SVG y por qué es ideal para visualización web?",
    respuesta: "<strong>SVG</strong> (Scalable Vector Graphics) define gráficos mediante fórmulas matemáticas.<br><br>Ventajas:<br>• Escalable a cualquier tamaño sin perder calidad<br>• Manipulable con CSS y JavaScript<br>• Accesible (texto legible por screen readers)<br>• Ligero en peso<br>• Soportado nativamente por todos los navegadores"
  },
  {
    tema: "Conceptos Clave",
    pregunta: "¿Cuál es el ratio dato-tinta según Edward Tufte?",
    respuesta: "Tufte propuso maximizar el <strong>ratio dato-tinta</strong>: la proporción de tinta dedicada a representar datos reales vs. decoración.<br><br><strong>Regla:</strong> Eliminar todo elemento visual que no comunique información.<br><br>Ejemplo: Quitar bordes innecesarios, fondos de color sin propósito, efectos 3D decorativos."
  },
  {
    tema: "Conceptos Clave",
    pregunta: "¿Qué es la 'Lie Factor' (Factor de Mentira) de Tufte?",
    respuesta: "<strong>Lie Factor = Tamaño del efecto en el gráfico / Tamaño del efecto en los datos</strong><br><br>Si el Lie Factor ≠ 1, el gráfico está distorsionando la realidad.<br><br>• Lie Factor > 1: Exagera las diferencias<br>• Lie Factor < 1: Minimiza las diferencias<br>• Lie Factor = 1: Representación fiel"
  }
];
