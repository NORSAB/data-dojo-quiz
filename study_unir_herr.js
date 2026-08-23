(function() {
    window.studyData = window.studyData || {};

    // â”€â”€ Visual Helpers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    const icon = (path, color = 'currentColor', size = 20) =>
        `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}" style="vertical-align:middle;flex-shrink:0;"><path d="${path}"/></svg>`;

    const icons = {
        eye:      'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        code:     'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
        chart:    'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z',
        data:     'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
        layers:   'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
        explore:  'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z',
        tools:    'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
        star:     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        bolt:     'M7 2v11h3v9l7-12h-4l4-8z',
        map:      'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z',
        shield:   'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
        palette:  'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1-.01-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
        brush:    'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z',
        network:  'M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H3v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-4z',
        table:    'M3 3v18h18V3H3zm8 16H5v-6h6v6zm0-8H5V5h6v6zm8 8h-6v-6h6v6zm0-8h-6V5h6v6z',
        filter:   'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z'
    };

    // Dojo-themed section card with gradient header
    const dojoCard = (title, iconKey, gradient, content) => `
        <div style="
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            margin-bottom: 1.5rem;
            border: 1px solid rgba(79,110,247,0.12);
            background: var(--bg-card, #fff);
        ">
            <div style="
                background: linear-gradient(135deg, ${gradient});
                padding: 14px 20px;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                ${icon(icons[iconKey] || icons.star, '#fff', 22)}
                <span style="color: #fff; font-weight: 700; font-size: 1.05rem; letter-spacing: 0.02em;">${title}</span>
            </div>
            <div style="padding: 18px 20px; line-height: 1.7; color: var(--text-color, #333);">
                ${content}
            </div>
        </div>`;

    // Colored info pill
    const pill = (label, color = '#4f6ef7') => `
        <span style="
            display: inline-block;
            background: ${color}18;
            color: ${color};
            font-weight: 600;
            font-size: 0.82rem;
            padding: 3px 10px;
            border-radius: 20px;
            border: 1px solid ${color}30;
            margin: 2px 3px;
        ">${label}</span>`;

    // Highlight / key concept box
    const keyBox = (title, body, color = '#4f6ef7') => `
        <div style="
            background: ${color}08;
            border-radius: 12px;
            padding: 14px 18px;
            margin: 12px 0;
        ">
            <div style="font-weight: 700; margin-bottom: 6px; color: ${color}; font-size: 0.92rem;">
                ${title}
            </div>
            <div style="font-size: 0.93rem; line-height: 1.65;">${body}</div>
        </div>`;

    // Table with modern styling
    const dojoTable = (headers, rows) => {
        const ths = headers.map(h => `<th style="
            background: linear-gradient(135deg, #4f6ef7, #7c3aed);
            color: #fff;
            padding: 10px 14px;
            font-weight: 600;
            font-size: 0.85rem;
            text-align: left;
            border: none;
        ">${h}</th>`).join('');
        const trs = rows.map(row => {
            const tds = row.map(cell => `<td style="
                padding: 10px 14px;
                border-bottom: 1px solid var(--border-color, #e8e8e8);
                font-size: 0.9rem;
            ">${cell}</td>`).join('');
            return `<tr style="transition: background 0.2s;">${tds}</tr>`;
        }).join('');
        return `<table style="
            width: 100%;
            border-collapse: collapse;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 1px 6px rgba(0,0,0,0.06);
            margin: 12px 0;
        "><thead><tr>${ths}</tr></thead><tbody>${trs}</tbody></table>`;
    };

    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    //  STUDY DATA: Herramientas de VisualizaciÃ³n (UNIR)
    // â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
    window.studyData['unir-herramientas-viz'] = [
        // â”€â”€ TEMA 1 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 1: Introduccion y Herramientas',
            items: [
                {
                    title: 'Panorama de Herramientas',
                    content: `
                        ${dojoCard('Objetivo de la Asignatura', 'tools', '#4f6ef7, #7c3aed', `
                            <p>El objetivo es abordar diferentes <strong>librerias y herramientas de visualizacion</strong> con un enfoque totalmente practico. Se busca:</p>
                            <ul style="padding-left: 20px; margin: 10px 0;">
                                <li>Entender que datos tienes</li>
                                <li>Representarlos graficamente con las herramientas adecuadas</li>
                                <li>Comprobar que los destinatarios entiendan el mensaje</li>
                            </ul>
                        `)}
                        ${dojoCard('Herramientas para Desarrolladores', 'code', '#059669, #10b981', `
                            <p>Requieren conocimientos de programacion pero ofrecen <strong>personalizacion ilimitada</strong>:</p>
                            ${dojoTable(
                                ['Herramienta', 'Descripcion', 'Lenguaje'],
                                [
                                    ['<strong>Google Chart</strong>', 'API de graficos de Google Spreadsheets', 'JavaScript'],
                                    ['<strong>D3.js</strong>', 'Libreria para SVG con datos complejos', 'JavaScript + SVG'],
                                    ['<strong>R</strong>', 'Paquete estadistico para grandes datasets', 'R / Python']
                                ]
                            )}
                        `)}
                        ${dojoCard('Herramientas para No-Desarrolladores', 'chart', '#f59e0b, #ef4444', `
                            <p>Maximizan la <strong>facilidad de uso</strong>. El usuario final puede extraer y manejar datos sin equipo de desarrollo:</p>
                            ${dojoTable(
                                ['Herramienta', 'Ventaja Clave'],
                                [
                                    ['<strong>Tableau</strong>', 'Arrastrar y soltar, actualizacion en tiempo real'],
                                    ['<strong>Power BI</strong>', 'Integracion Microsoft, multiples origenes de datos'],
                                    ['<strong>Qlik Sense</strong>', 'Descubrimiento de datos, modelo asociativo'],
                                    ['<strong>CARTO</strong>', 'Datos tabulares + mapas geograficos']
                                ]
                            )}
                        `)}
                    `
                },
                {
                    title: 'Criterios Gartner y Web',
                    content: `
                        ${dojoCard('15 Capacidades de Gartner para Plataformas ABI', 'shield', '#7c3aed, #a855f7', `
                            <p>Gartner evalua las plataformas de <strong>Analytics and Business Intelligence</strong> con estos criterios:</p>
                            <div style="display: flex; flex-wrap: wrap; gap: 4px; margin: 10px 0;">
                                ${pill('Seguridad', '#4f6ef7')}
                                ${pill('Gestion', '#059669')}
                                ${pill('Cloud', '#0ea5e9')}
                                ${pill('Conectividad', '#8b5cf6')}
                                ${pill('Preparacion de datos', '#f59e0b')}
                                ${pill('Complejidad del modelo', '#ef4444')}
                                ${pill('Catalogo', '#6366f1')}
                                ${pill('Insights automatizados', '#14b8a6')}
                                ${pill('Analisis avanzado', '#e11d48')}
                                ${pill('Visualizacion de datos', '#4f6ef7')}
                                ${pill('Consulta lenguaje natural', '#7c3aed')}
                                ${pill('Narracion de datos', '#059669')}
                                ${pill('Analisis integrado', '#0ea5e9')}
                                ${pill('NLG', '#f59e0b')}
                                ${pill('Presentacion de informes', '#ef4444')}
                            </div>
                            ${keyBox('Ya NO se diferencian por la visualizacion', 'En la actualidad, las plataformas modernas de ABI ya <strong>no se diferencian</strong> por sus capacidades en la visualizacion de datos. Su diferenciacion reside en la <strong>integracion corporativa</strong> y las <strong>capacidades aumentadas</strong> (IA/ML).', '#e11d48')}
                        `)}
                        ${dojoCard('Estructura de una Pagina Web', 'code', '#1e293b, #334155', `
                            ${dojoTable(
                                ['Nivel', 'Funcion', 'Lenguaje'],
                                [
                                    ['<strong>Estructura y Contenido</strong>', 'Textos, imagenes, enlaces, parrafos, tablas', 'HTML'],
                                    ['<strong>Apariencia</strong>', 'Colores, tipografias, fondos, tamanos', 'CSS'],
                                    ['<strong>Comportamiento</strong>', 'Efectos, animaciones, validaciones, APIs', 'JavaScript']
                                ]
                            )}
                            ${keyBox('Selectores CSS', '<strong>Elemento:</strong> div { ... }<br><strong>Identificador (#):</strong> #header { ... } &mdash; unico por pagina<br><strong>Clase (.):</strong> .highlight { ... } &mdash; reutilizable', '#4f6ef7')}
                        `)}
                        ${dojoCard('Brackets: Editor de Codigo Web', 'code', '#6d28d9, #4c1d95', `
                            <p><strong>Brackets</strong> es un editor de codigo de Adobe especializado en desarrollo web front-end (HTML, CSS, JavaScript). No esta orientado a Python ni back-end.</p>
                            ${keyBox('Live Preview', 'Abre una conexion directa con el navegador para que cualquier cambio en HTML o CSS se vea reflejado <strong>instantaneamente sin recargar</strong> la pagina.', '#059669')}
                            ${keyBox('Quick Edit (Ctrl+E)', 'Permite editar el <strong>CSS asociado a una etiqueta HTML</strong> sin abrir el archivo CSS. Se despliega una ventana emergente dentro del mismo archivo.', '#0ea5e9')}
                            ${keyBox('Validacion en Tiempo Real', 'Si una etiqueta HTML no esta bien cerrada, se <strong>marca en rojo</strong> junto con las etiquetas posteriores afectadas.', '#ef4444')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 2 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 2: Google Chart',
            items: [
                {
                    title: 'Google Chart Library',
                    content: `
                        ${dojoCard('Google Chart: Fundamentos', 'chart', '#4285f4, #0d47a1', `
                            <p>API de graficos de Google usada internamente por Google Spreadsheets. Ofrece:</p>
                            <ul style="padding-left: 20px; margin: 10px 0;">
                                <li><strong>Variedad:</strong> Pie Chart, Bar Chart, Line Chart, GeoChart, Scatter Plot, etc.</li>
                                <li><strong>Sencillez:</strong> Pocos pasos para tener una visualizacion funcional</li>
                                <li><strong>Interactividad:</strong> Soporte nativo de eventos</li>
                            </ul>
                            ${keyBox('Pipeline Basico de Google Chart',
                                '1. Cargar libreria: <code>google.charts.load()</code> con <code>setOnLoadCallback(drawChart)</code><br>2. Definir datos: <code>DataTable</code><br>3. Configurar opciones (titulo, colores, <code>is3D: true</code>)<br>4. Renderizar: <code>drawChart()</code> llama a <code>chart.draw()</code>',
                                '#4285f4')}
                            ${keyBox('DataView vs DataTable', '<strong>DataTable:</strong> contenedor principal de datos (columnas con tipo + filas).<br><strong>DataView:</strong> actua como una <strong>mascara</strong> sobre la DataTable, mostrando solo un subconjunto de columnas/filas a un grafico especifico sin alterar los datos originales.', '#7c3aed')}
                            ${keyBox('GeoChart', 'Visualiza datos sobre un <strong>mapa mundi o regional</strong>, sombreando areas segun la intensidad de un valor numerico. A diferencia de PieChart (proporciones), usa <strong>ubicaciones geograficas</strong>.', '#e11d48')}
                        `)}
                        ${dojoCard('Datos Externos y Eventos', 'data', '#059669, #10b981', `
                            ${keyBox('Google Spreadsheets como fuente', 'Se necesitan <strong>permisos de lectura publica</strong> o "cualquier persona con el enlace". Se usa <code>google.visualization.Query</code>. La funcion <code>handleQueryResponse</code> procesa la respuesta (o muestra error si URL incorrecta).', '#059669')}
                            ${keyBox('Archivos CSV', 'Se cargan con <code>$.get()</code> (jQuery) y se parsean con <code>$.csv.toArrays()</code> para convertir a un array bidimensional compatible con DataTable.', '#0ea5e9')}
                            ${keyBox('Eventos', '<code>google.visualization.events.addListener()</code> permite conectar visualizaciones con acciones: click, sort, hover. Permite crear dashboards coordinados.', '#f59e0b')}
                            ${keyBox('Callback y Orden de Ejecucion', 'Si <code>drawChart()</code> se ejecuta <strong>antes</strong> de que la libreria este cargada, se lanza un error. Por eso se usa siempre <code>google.charts.setOnLoadCallback(drawChart)</code> para asegurar el orden correcto.', '#ef4444')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 3 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 3: D3.js Introduccion',
            items: [
                {
                    title: 'D3.js: Conceptos Basicos',
                    content: `
                        ${dojoCard('D3.js: Data-Driven Documents', 'code', '#f59e0b, #d97706', `
                            <p><strong>D3.js</strong> es una libreria JavaScript creada por <strong>Mike Bostock</strong> que utiliza HTML, CSS y SVG para crear visualizaciones avanzadas, dinamicas e interactivas en navegadores web.</p>
                            ${keyBox('Selectores', '<code>d3.select()</code> &mdash; selecciona un elemento<br><code>d3.selectAll()</code> &mdash; selecciona todos los elementos que coincidan', '#4f6ef7')}
                            ${keyBox('Bindeo de datos (Data Binding)', 'El metodo <code>.data()</code> vincula un array de datos a elementos del DOM.<br>Combinado con <code>.enter()</code>, crea nuevos elementos para cada dato sin correspondencia.', '#059669')}
                            ${keyBox('Encadenamiento (Chaining)', '<code>d3.select().data().enter().append().attr().style()</code><br>D3 permite encadenar multiples metodos en una sola expresion fluida.', '#7c3aed')}
                        `)}
                        ${dojoCard('Ventajas de D3.js', 'star', '#059669, #10b981', `
                            <ul style="padding-left: 20px; margin: 10px 0;">
                                <li><strong>Control total</strong> sobre cada pixel de la visualizacion</li>
                                <li>Renderizado en <strong>SVG</strong> (escalable, no pierde calidad)</li>
                                <li>Gran comunidad y <strong>miles de ejemplos</strong> en GitHub</li>
                                <li>Capacidad para visualizaciones <strong>muy avanzadas y personalizadas</strong></li>
                            </ul>
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 4 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 4: D3.js Datos y SVG',
            items: [
                {
                    title: 'Estructuras de Datos y SVG',
                    content: `
                        ${dojoCard('Formatos de Datos en D3', 'data', '#6366f1, #8b5cf6', `
                            ${dojoTable(
                                ['Formato', 'Metodo D3', 'Descripcion'],
                                [
                                    ['<strong>JSON</strong>', '<code>d3.json()</code>', 'Objetos con pares clave-valor, ideal para datos jerarquicos'],
                                    ['<strong>CSV</strong>', '<code>d3.csv()</code>', 'Valores separados por comas, facil de generar desde Excel'],
                                    ['<strong>TSV</strong>', '<code>d3.tsv()</code>', 'Valores separados por tabulaciones']
                                ]
                            )}
                        `)}
                        ${dojoCard('SVG: Scalable Vector Graphics', 'palette', '#e11d48, #f43f5e', `
                            <p>Formato de graficos <strong>vectoriales basado en XML</strong>. Elementos principales:</p>
                            ${dojoTable(
                                ['Elemento', 'Uso', 'Atributos Clave'],
                                [
                                    ['<code>rect</code>', 'Rectangulos (barras)', 'x, y, width, height'],
                                    ['<code>circle</code>', 'Circulos (puntos)', 'cx, cy, r'],
                                    ['<code>line</code>', 'Lineas', 'x1, y1, x2, y2'],
                                    ['<code>text</code>', 'Etiquetas de texto', 'x, y, font-size'],
                                    ['<code>path</code>', 'Trazados complejos', 'd (instrucciones)']
                                ]
                            )}
                            ${keyBox('Sistema de Coordenadas SVG', 'El origen (0,0) esta en la <strong>esquina superior izquierda</strong>. El eje Y crece <strong>hacia abajo</strong>, lo que requiere invertir calculos para graficos convencionales.', '#e11d48')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 5 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 5: D3.js Escalas y Ejes',
            items: [
                {
                    title: 'Escalas y Ejes en D3',
                    content: `
                        ${dojoCard('Escalas (Scales)', 'chart', '#0ea5e9, #0284c7', `
                            <p>Las escalas son <strong>funciones que relacionan un dominio de entrada con un rango de salida</strong> (Mike Bostock).</p>
                            ${dojoTable(
                                ['Tipo', 'Metodo', 'Uso'],
                                [
                                    ['<strong>Lineal</strong>', '<code>d3.scale.linear()</code>', 'Datos continuos, numericos'],
                                    ['<strong>Ordinal</strong>', '<code>d3.scale.ordinal()</code>', 'Datos categoricos, discretos'],
                                    ['<strong>Logaritmica</strong>', '<code>d3.scale.log()</code>', 'Datos con rangos exponenciales']
                                ]
                            )}
                            ${keyBox('Dominio vs Rango', '<strong>Dominio (.domain()):</strong> rango de valores de los datos de entrada<br><strong>Rango (.range()):</strong> rango de pixeles de salida visual<br><br>Ejemplo: dominio [0, 1000] &rarr; rango [0, 500px]', '#0ea5e9')}
                            ${keyBox('rangeRoundBands', '<code>.rangeRoundBands([min, max], padding)</code> divide el espacio disponible en <strong>bandas discretas</strong> para datos categoricos. El parametro de <strong>padding</strong> controla el espaciado entre bandas. Ideal para graficos de barras con categorias.', '#f59e0b')}
                        `)}
                        ${dojoCard('Ejes', 'tools', '#7c3aed, #a855f7', `
                            <p><code>d3.svg.axis()</code> genera automaticamente lineas de referencia, marcas (<strong>ticks</strong>) y etiquetas.</p>
                            ${keyBox('Configuracion de Ejes', '<code>.orient()</code> &mdash; posicion: bottom, left, top, right<br><code>.ticks()</code> &mdash; cantidad de marcas<br><code>.tickFormat()</code> &mdash; formato de etiquetas<br><br>Se aplican estilos CSS a las clases <code>.axis</code>, <code>.tick</code>, <code>path</code> y <code>line</code>.', '#7c3aed')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 6 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 6: Interactividad y Transiciones',
            items: [
                {
                    title: 'Force Layout y Transiciones',
                    content: `
                        ${dojoCard('Force Layout (Grafo de Fuerzas)', 'network', '#ef4444, #dc2626', `
                            <p>Simulacion fisica que posiciona <strong>nodos</strong> automaticamente basandose en fuerzas de repulsion y atraccion.</p>
                            ${keyBox('Parametros Clave', '<code>.charge()</code> &mdash; fuerza de repulsion/atraccion entre nodos<br><code>.linkDistance()</code> &mdash; distancia ideal entre nodos conectados<br><code>force.on("tick", ...)</code> &mdash; actualiza posiciones en cada paso de simulacion', '#ef4444')}
                        `)}
                        ${dojoCard('Transiciones y Eventos', 'bolt', '#f59e0b, #d97706', `
                            ${keyBox('Eventos de Usuario', '<code>.on("click")</code>, <code>.on("mouseover")</code>, <code>.on("mouseout")</code><br>Permiten anadir interactividad a los graficos.', '#059669')}
                            ${keyBox('Transiciones', '<code>.transition()</code> interpola automaticamente valores entre un estado inicial y final.<br><code>.duration()</code> &mdash; duracion en milisegundos<br><code>.delay()</code> &mdash; retardo antes de iniciar', '#f59e0b')}
                            ${keyBox('Patron Enter-Update-Exit', '<code>.enter()</code> &mdash; nuevos datos (crear elementos)<br>Actualizacion directa &mdash; datos existentes<br><code>.exit().remove()</code> &mdash; datos eliminados (quitar elementos)', '#7c3aed')}
                            ${keyBox('Exportacion', '<strong>SVG:</strong> vectorial, editable<br><strong>PDF:</strong> desde el navegador<br><strong>PNG/Bitmap:</strong> rasterizado, pierde escalabilidad', '#4f6ef7')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 7 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 7: Power BI',
            items: [
                {
                    title: 'Microsoft Power BI',
                    content: `
                        ${dojoCard('Power BI: Fundamentos', 'chart', '#4f6ef7, #2563eb', `
                            <p>Herramienta de Microsoft <strong>lider en el cuadrante magico de Gartner</strong>. Integra multiples fuentes de datos y genera visualizaciones interactivas.</p>
                            ${dojoTable(
                                ['Version', 'Descripcion'],
                                [
                                    ['<strong>Desktop</strong>', 'Gratuito, analisis personal'],
                                    ['<strong>Pro</strong>', 'Colaboracion en la nube'],
                                    ['<strong>Premium</strong>', 'Capacidad empresarial'],
                                    ['<strong>Server</strong>', 'On-premises']
                                ]
                            )}
                        `)}
                        ${dojoCard('Interfaz y Funciones', 'layers', '#059669, #10b981', `
                            ${keyBox('Interfaz', '<strong>Panel izquierdo:</strong> Informe, Datos, Modelo<br><strong>Panel derecho:</strong> Visualizaciones y Campos', '#4f6ef7')}
                            ${keyBox('Power Query (ETL)', 'Editor para <strong>transformar datos</strong> antes de cargarlos al modelo. Permite eliminar columnas, filtrar filas, cambiar tipos, combinar consultas.', '#059669')}
                            ${keyBox('Visualizaciones', 'Tabla, graficos de barras, lineas, circular, mapa, dispersion, <strong>Slicers</strong> (segmentacion de datos).', '#f59e0b')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 8 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 8: Qlik Sense',
            items: [
                {
                    title: 'Qlik Sense: Plataforma BI',
                    content: `
                        ${dojoCard('Qlik Sense: Descubrimiento de Datos', 'explore', '#59a14f, #2d6a4f', `
                            <p>Plataforma completa orientada al <strong>descubrimiento de la informacion</strong>. No solo visualizacion, sino capacidades de Business Intelligence completas.</p>
                            ${dojoTable(
                                ['Version', 'Descripcion'],
                                [
                                    ['<strong>Business</strong>', 'SaaS, equipos pequenos, limitaciones en APIs'],
                                    ['<strong>Enterprise</strong>', 'Multinube, despliegue masivo, Nprinting, GeoAnalytics']
                                ]
                            )}
                        `)}
                        ${dojoCard('Conceptos Clave de Qlik Sense', 'data', '#6366f1, #8b5cf6', `
                            ${keyBox('Apps', 'Unidad de trabajo en Qlik Sense. Se crean vacias o desde plantillas y se alimentan con conectores de datos.', '#6366f1')}
                            ${keyBox('Dimensiones vs. Medidas', '<strong>Dimensiones:</strong> categorias de agrupacion<br><strong>Medidas:</strong> valores numericos a calcular (sum, avg, count)', '#059669')}
                            ${keyBox('Funcionalidades', '<strong>Filter Pane:</strong> seleccion interactiva de filtros<br><strong>Tablas Pivotantes:</strong> desglose por multiples dimensiones<br><strong>Stories:</strong> presentaciones narrativas<br><strong>Scatter Plot:</strong> relaciones entre dos variables<br><strong>Bookmarks:</strong> guardar estados de analisis', '#f59e0b')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 9 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 9: Tableau Introduccion',
            items: [
                {
                    title: 'Tableau: Fundamentos',
                    content: `
                        ${dojoCard('Tableau: Plataforma Visual', 'chart', '#e97627, #c75b12', `
                            <p>Herramienta altamente visual y lider en el cuadrante de Gartner. Fundada en la <strong>Universidad de Stanford</strong> por Pat Hanrahan y Chris Stolte.</p>
                            ${keyBox('VizQL (Visual Query Language)', 'Tecnologia patentada que traduce las acciones de <strong>arrastrar y soltar</strong> en consultas de base de datos optimizadas. VizQL formo el nucleo del sistema <strong>Polaris</strong>, la interfaz original para explorar grandes bases de datos multidimensionales.', '#e97627')}
                            ${keyBox('Motor Hyper', 'Permite analisis ad hoc rapido de <strong>datos masivos</strong> incluso en equipos de prestaciones normales.', '#059669')}
                            ${keyBox('Adquisicion por Salesforce', 'En <strong>2019 Salesforce</strong> firmo un acuerdo definitivo para la adquisicion de Tableau, consolidando la plataforma dentro del ecosistema de CRM y analitica empresarial.', '#4f6ef7')}
                        `)}
                        ${dojoCard('Versiones e Interfaz', 'layers', '#4f6ef7, #7c3aed', `
                            ${dojoTable(
                                ['Version', 'Descripcion'],
                                [
                                    ['<strong>Desktop</strong>', 'Analisis personal'],
                                    ['<strong>Server</strong>', 'On-premises'],
                                    ['<strong>Online/Cloud</strong>', 'SaaS'],
                                    ['<strong>Public</strong>', 'Gratuito, datos publicos']
                                ]
                            )}
                            ${keyBox('Elementos de la Interfaz', '<strong>Estantes Filas/Columnas:</strong> definen la estructura del grafico<br><strong>Tarjeta de Marcas (Marks Card):</strong> Color, Tamano, Texto, Detalle, Forma, Tooltip<br><strong>Estante de Filtros:</strong> restringe los datos visibles', '#4f6ef7')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 10 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 10: Tableau Avanzado',
            items: [
                {
                    title: 'Filtros, Dashboards e Historias',
                    content: `
                        ${dojoCard('Filtros y Paginas', 'filter', '#7c3aed, #a855f7', `
                            ${keyBox('Filtros Avanzados', 'Condiciones basadas en rangos, umbrales, <strong>Top N</strong> y formulas personalizadas para control granular.', '#7c3aed')}
                            ${keyBox('Paginas (Pages)', 'Fragmentan la visualizacion en vistas <strong>secuenciales</strong> basadas en un campo (generalmente temporal).<br><br><strong>Diferencia con filtros:</strong> las paginas NO eliminan datos, los organizan en capas navegables.', '#0ea5e9')}
                        `)}
                        ${dojoCard('Dashboards e Historias', 'table', '#059669, #10b981', `
                            ${keyBox('Dashboards', 'Coleccion de <strong>hojas de trabajo interactivas</strong> en una sola pantalla. Se crean desde el icono de la barra inferior.', '#059669')}
                            ${keyBox('Filtro Dinamico en Dashboards', 'Icono de "Embudo" (<strong>Usar como filtro</strong>) para que al seleccionar una marca, las demas hojas se filtren automaticamente.', '#f59e0b')}
                            ${keyBox('Acciones', '<strong>Filtro:</strong> filtrar datos entre hojas<br><strong>Resaltado:</strong> resaltar marcas relacionadas<br><strong>Navegacion:</strong> "Ir a la hoja" para exploracion dinamica', '#4f6ef7')}
                            ${keyBox('Historias (Stories)', 'Presentaciones narrativas que guian al usuario a traves de una <strong>secuencia de visualizaciones</strong>.', '#e11d48')}
                        `)}
                    `
                }
            ]
        },
        // â”€â”€ TEMA 11 â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
        {
            title: 'Tema 11: CARTO - Location Intelligence',
            items: [
                {
                    title: 'CARTO y Datos Geoespaciales',
                    content: `
                        ${dojoCard('CARTO: Inteligencia de Ubicacion', 'map', '#e11d48, #be123c', `
                            <p>Plataforma lider en <strong>Location Intelligence</strong> que transforma datos de ubicacion en decisiones estrategicas. Fundada en 2007, usada por la NASA, Google y Wall Street Journal.</p>
                            ${keyBox('GIS (Sistema de Informacion Geografica)', 'Permite <strong>superponer capas de datos sobre mapas</strong> para identificar patrones espaciales.', '#4f6ef7')}
                            ${keyBox('Inteligencia de Ubicacion', 'Surge con la masificacion del GPS en smartphones (2008). Combina <strong>Big Data, computacion en la nube e IoT</strong> para optimizar procesos geoespaciales.', '#059669')}
                        `)}
                        ${dojoCard('Funcionalidades de CARTO', 'layers', '#6366f1, #8b5cf6', `
                            ${dojoTable(
                                ['Funcion', 'Descripcion'],
                                [
                                    ['<strong>Despliegue</strong>', 'On-premises o SaaS en la nube'],
                                    ['<strong>Carga de datos</strong>', 'Arrastrar y soltar (CSV, Excel, GeoJSON)'],
                                    ['<strong>the_geom</strong>', 'Columna geometrica para mapear registros (lat/long)'],
                                    ['<strong>Widgets</strong>', 'Categoria, Histograma, Formula, Series de tiempo'],
                                    ['<strong>Analisis Espacial</strong>', 'Create Lines from Points, Group By, Transform'],
                                    ['<strong>SQL en linea</strong>', 'Consultas SQL directas en la interfaz']
                                ]
                            )}
                            ${keyBox('Motor PostgreSQL/PostGIS', 'CARTO utiliza PostgreSQL con la extension <strong>PostGIS</strong> en la nube para ejecutar consultas espaciales de alta performance.', '#e11d48')}
                        `)}
                    `
                }
            ]
        }
    ];
})();

