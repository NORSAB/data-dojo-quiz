(function() {
    window.studyData = window.studyData || {};

    // ── Visual Helpers ──────────────────────────────────────────────────
    const icon = (path, color = 'currentColor', size = 20) =>
        `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}" style="vertical-align:middle;flex-shrink:0;"><path d="${path}"/></svg>`;

    const icons = {
        eye:      'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        brain:    'M12 2a9 9 0 0 0-9 9c0 3.07 1.98 5.73 4.73 6.73A1 1 0 0 1 8.5 19H12v3h1v-3h3.5a1 1 0 0 1 .77-1.27A7 7 0 0 0 21 11a9 9 0 0 0-9-9z',
        history:  'M13 3a9 9 0 0 0-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0 0 13 21a9 9 0 0 0 0-18zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z',
        data:     'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
        palette:  'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-1-.01-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
        chart:    'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z',
        code:     'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
        brush:    'M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 0 0-1.41 0L9 12.25 11.75 15l8.96-8.96a.996.996 0 0 0 0-1.41z',
        map:      'M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z',
        layers:   'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
        explore:  'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z',
        megaphone: 'M18 11v2h4v-2h-4zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61zM20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4zM4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1l5 3V6L5 9H4zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34z',
        shield:   'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
        warning:  'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
        star:     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        bolt:     'M7 2v11h3v9l7-12h-4l4-8z',
        tools:    'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z'
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

    // ── Study Data ──────────────────────────────────────────────────────
    window.studyData["unir-viz-interactiva"] = [
        // ═══════════════════════════════════════════════════════════════
        // TEMA 1
        // ═══════════════════════════════════════════════════════════════
        {
            title: "1. Introducción a la Infografía y Visualización",
            items: [
                {
                    title: "Conceptos Fundamentales",
                    content: `
                        ${dojoCard('Objetivo de la Visualización', 'eye', '#4f6ef7, #7c3aed', `
                            <p style="font-size:1.05em; margin-top:0;"><strong>Informar, ampliar el conocimiento e invitar a la reflexión</strong> — la visualización extiende la capacidad del sistema visual humano.</p>
                            ${keyBox('Amplificación Cognitiva', 'La visualización aprovecha la capacidad natural del ojo humano para detectar patrones a gran velocidad (percepción pre-atentiva). Es una extensión del sistema visual.', '#4f6ef7')}
                        `)}
                        ${dojoCard('Infografía vs Visualización', 'layers', '#f97316, #ef4444', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#f973160a; border-radius:12px; padding:14px; border:1px solid #f9731620;">
                                    <div style="font-weight:700; color:#f97316; margin-bottom:6px;">Infografía</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.9rem;">
                                        <li><strong>Narrativa y cerrada</strong></li>
                                        <li>El autor cuenta una historia predefinida</li>
                                        <li>Pieza fija, un solo recorrido</li>
                                    </ul>
                                </div>
                                <div style="background:#4f6ef70a; border-radius:12px; padding:14px; border:1px solid #4f6ef720;">
                                    <div style="font-weight:700; color:#4f6ef7; margin-bottom:6px;">Visualización</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.9rem;">
                                        <li><strong>Exploratoria y abierta</strong></li>
                                        <li>El usuario interactúa y descubre</li>
                                        <li>Sistema dinámico con filtros</li>
                                    </ul>
                                </div>
                            </div>
                        `)}
                        ${dojoCard('Jerarquía del Dato', 'data', '#10b981, #059669', `
                            <div style="display:flex; align-items:center; justify-content:center; gap:12px; padding:10px; flex-wrap:wrap;">
                                ${pill('Dato (valor puro)', '#6b7280')}
                                <span style="font-size:1.3em; color:#10b981;">→</span>
                                ${pill('Información (dato procesado)', '#f59e0b')}
                                <span style="font-size:1.3em; color:#10b981;">→</span>
                                ${pill('Conocimiento (comprensión)', '#10b981')}
                            </div>
                            <p style="text-align:center; font-size:0.9em; color:#666; margin-bottom:0;">La visualización facilita este tránsito al hacer los datos comprensibles.</p>
                        `)}
                    `
                },
                {
                    title: "5 Fases del Proceso",
                    content: `
                        ${dojoCard('Proceso de Creación', 'tools', '#8b5cf6, #6d28d9', `
                            <div style="display:flex; flex-direction:column; gap:8px;">
                                ${['1. Investigación — Recopilar fuentes y datos', '2. Selección — Curar y filtrar lo relevante', '3. Boceto (Sketch) — Planificar la estructura visual', '4. Elaboración — Construir la pieza con herramientas', '5. Recepción — El receptor genera conocimiento'].map((step, i) => `
                                    <div style="display:flex; align-items:center; gap:12px; padding:10px 14px; background:${i%2===0 ? 'rgba(139,92,246,0.05)' : 'transparent'}; border-radius:10px;">
                                        <div style="
                                            width:32px; height:32px; border-radius:50%;
                                            background: linear-gradient(135deg, #8b5cf6, #6d28d9);
                                            color: #fff; font-weight:700; font-size:0.85rem;
                                            display:flex; align-items:center; justify-content:center;
                                            flex-shrink:0;
                                        ">${i+1}</div>
                                        <span style="font-size:0.95rem;">${step.substring(3)}</span>
                                    </div>
                                `).join('')}
                            </div>
                        `)}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 2
        // ═══════════════════════════════════════════════════════════════
        {
            title: "2. Historia de la Infografía",
            items: [
                {
                    title: "Hitos Históricos",
                    content: `
                        ${dojoCard('Línea de Tiempo', 'history', '#f59e0b, #d97706', `
                            ${dojoTable(
                                ['Hito', 'Fecha', 'Detalle'],
                                [
                                    ['<strong>Da Vinci</strong>', 'Renacimiento', 'Dibujo técnico como investigación empírica'],
                                    ['<strong>Mercator</strong>', '1569', 'Proyección: preserva ángulos, distorsiona tamaños'],
                                    ['<strong>L\'Encyclopédie</strong>', 's. XVIII', 'Diderot y D\'Alembert: grabados técnicos'],
                                    ['<strong>Isotype</strong>', '1920s', 'Neurath y Arntz: pictogramas estandarizados'],
                                    ['<strong>The Times</strong>', '1806', 'Primera infografía periodística'],
                                    ['<strong>USA Today</strong>', '1982', 'Snapshots: gráficos diarios a color'],
                                    ['<strong>Guerra del Golfo</strong>', '1991', 'Infografías reemplazaron fotografía']
                                ]
                            )}
                        `)}
                        ${keyBox('Trampa de Examen — Mercator', 'La proyección de Mercator (1569) preserva <strong>ángulos</strong> (navegación) pero distorsiona <strong>tamaños</strong> en zonas polares. Groenlandia aparece del tamaño de África cuando en realidad es <strong>14 veces menor</strong>.', '#ef4444')}
                        ${keyBox('Isotype (1920s)', 'Neurath y Arntz crearon un sistema de <strong>pictogramas estandarizados</strong> para comunicar estadísticas sociales y económicas a personas de cualquier nivel educativo o idioma.', '#8b5cf6')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 3
        // ═══════════════════════════════════════════════════════════════
        {
            title: "3. Trabajar con Datos",
            items: [
                {
                    title: "Tipos de Variables y Data Wrangling",
                    content: `
                        ${dojoCard('Variables', 'data', '#10b981, #059669', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#10b98110; border-radius:12px; padding:14px; border:1px solid #10b98125;">
                                    <div style="font-weight:700; color:#10b981; margin-bottom:6px;">Categóricas</div>
                                    <p style="margin:0; font-size:0.9rem;">Grupos / etiquetas<br>Ej: País, Género, Tipo<br>Codificación: ${pill('Color', '#10b981')} ${pill('Forma', '#10b981')}</p>
                                </div>
                                <div style="background:#3b82f610; border-radius:12px; padding:14px; border:1px solid #3b82f625;">
                                    <div style="font-weight:700; color:#3b82f6; margin-bottom:6px;">Cuantitativas</div>
                                    <p style="margin:0; font-size:0.9rem;">Magnitudes numéricas<br>Ej: Ventas, Temperatura<br>Codificación: ${pill('Posición', '#3b82f6')} ${pill('Longitud', '#3b82f6')}</p>
                                </div>
                            </div>
                        `)}
                        ${dojoCard('Escalas NOIR (Tipos de Medida)', 'chart', '#6366f1, #4f46e5', `
                            <p>Los datos se clasifican en <strong>cualitativo</strong> vs <strong>cuantitativo</strong>, y se miden en 4 escalas:</p>
                            ${dojoTable(
                                ['Escala', 'Tipo', 'Ejemplo', 'Operaciones'],
                                [
                                    ['<strong>Nominal</strong>', pill('Cualitativo', '#10b981'), 'País, Color, Género', '= ≠'],
                                    ['<strong>Ordinal</strong>', pill('Cualitativo', '#10b981'), 'Bajo/Medio/Alto, Ranking', '= ≠ < >'],
                                    ['<strong>Intervalo</strong>', pill('Cuantitativo', '#3b82f6'), 'Temperatura °C, Fecha', '= ≠ < > + −'],
                                    ['<strong>Razón</strong>', pill('Cuantitativo', '#3b82f6'), 'Peso, Ingreso, Distancia', '= ≠ < > + − × ÷']
                                ]
                            )}
                            ${keyBox('Diferencia clave: Intervalo vs Razón', '<strong>Intervalo:</strong> el cero es arbitrario (0°C no es "ausencia de temperatura").<br><strong>Razón:</strong> el cero es absoluto (0 kg = sin peso). Solo Razón permite decir "el doble de...".', '#6366f1')}
                        `)}
                        ${dojoCard('Data Wrangling', 'tools', '#f59e0b, #d97706', `
                            <p>Proceso de limpieza, transformación y preparación de datos crudos:</p>
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px;">
                                ${['Eliminar duplicados', 'Tratar valores nulos', 'Normalizar fechas', 'Reestructurar tablas'].map(t => `
                                    <div style="display:flex; align-items:center; gap:8px; padding:8px 12px; background:#f59e0b08; border-radius:8px; border:1px solid #f59e0b15;">
                                        ${icon(icons.tools, '#f59e0b', 16)} <span style="font-size:0.9rem;">${t}</span>
                                    </div>
                                `).join('')}
                            </div>
                        `)}
                        ${keyBox('Garbage In, Garbage Out', 'Si los datos de entrada son erróneos, <strong>ningún diseño visual puede compensarlo</strong>. La calidad del resultado depende directamente de la calidad de los datos.', '#ef4444')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 4
        // ═══════════════════════════════════════════════════════════════
        {
            title: "4. Psicología de la Percepción (Gestalt)",
            items: [
                {
                    title: "Tipos de Memoria",
                    content: `
                        ${dojoCard('Sistema de Memoria Visual', 'brain', '#8b5cf6, #7c3aed', `
                            ${dojoTable(
                                ['Tipo', 'Función', 'Velocidad'],
                                [
                                    ['<strong style="color:#ef4444;">Icónica</strong> (sensorial)', 'Primer filtro: capta color, posición', '<em>Milisegundos</em>'],
                                    ['<strong style="color:#f59e0b;">Corto plazo</strong> (trabajo)', 'Procesa conscientemente la información', '<em>Segundos</em>'],
                                    ['<strong style="color:#10b981;">Largo plazo</strong>', 'Convenciones y símbolos aprendidos', '<em>Permanente</em>']
                                ]
                            )}
                            ${keyBox('Atributos Preatentivos', 'Propiedades detectadas <strong>automática e instantáneamente</strong>: color, tamaño, orientación, forma. Son la base del diseño porque guían la atención sin esfuerzo consciente.', '#4f6ef7')}
                        `)}
                    `
                },
                {
                    title: "Principios de Gestalt",
                    content: `
                        ${dojoCard('Leyes de la Percepción', 'eye', '#ec4899, #db2777', `
                            ${dojoTable(
                                ['Principio', 'Qué Dice', 'Ejemplo en Visualización'],
                                [
                                    ['<strong>Proximidad</strong>', 'Elementos cercanos = grupo', 'Puntos juntos en scatter plot'],
                                    ['<strong>Similitud</strong>', 'Elementos parecidos = grupo', 'Mismo color = misma categoría'],
                                    ['<strong>Continuidad</strong>', 'El ojo sigue líneas fluidas', 'Gráfico de líneas suave'],
                                    ['<strong>Cierre</strong>', 'Cerebro completa formas incompletas', 'Arcos percibidos como círculos'],
                                    ['<strong>Figura-fondo</strong>', 'Separamos objeto del fondo', 'Datos sobre fondo neutro'],
                                    ['<strong>Conexión</strong>', 'Línea que une = relación', 'Nodos conectados en diagrama']
                                ]
                            )}
                        `)}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 5
        // ═══════════════════════════════════════════════════════════════
        {
            title: "5. Diseño Aplicado a la Visualización",
            items: [
                {
                    title: "Tipografía y Color",
                    content: `
                        ${dojoCard('Tipografía', 'brush', '#f97316, #ea580c', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#f9731610; border-radius:12px; padding:14px; border:1px solid #f9731625; text-align:center;">
                                    <div style="font-family: Georgia, serif; font-size:1.6rem; color:#f97316; margin-bottom:4px;">Aa</div>
                                    <div style="font-weight:700; margin-bottom:4px;">Serif</div>
                                    <p style="margin:0; font-size:0.85rem;">Con remates. Guían el ojo.<br><strong>Mejor para: papel impreso</strong></p>
                                </div>
                                <div style="background:#4f6ef710; border-radius:12px; padding:14px; border:1px solid #4f6ef725; text-align:center;">
                                    <div style="font-family: Arial, sans-serif; font-size:1.6rem; color:#4f6ef7; margin-bottom:4px;">Aa</div>
                                    <div style="font-weight:700; margin-bottom:4px;">Sans Serif</div>
                                    <p style="margin:0; font-size:0.85rem;">Sin remates. Limpio.<br><strong>Mejor para: pantallas</strong></p>
                                </div>
                            </div>
                        `)}
                        ${dojoCard('Modelos de Color', 'palette', '#4f6ef7, #7c3aed', `
                            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:12px;">
                                <div style="background: linear-gradient(135deg, #ff000020, #00ff0020, #0000ff20); border-radius:12px; padding:14px; border:1px solid #4f6ef720; text-align:center;">
                                    <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">RGB</div>
                                    <p style="margin:0; font-size:0.85rem;">Aditivo (luces)<br>${pill('Pantallas', '#3b82f6')}</p>
                                </div>
                                <div style="background: linear-gradient(135deg, #00ffff20, #ff00ff20, #ffff0020); border-radius:12px; padding:14px; border:1px solid #8b5cf620; text-align:center;">
                                    <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">CMYK</div>
                                    <p style="margin:0; font-size:0.85rem;">Sustractivo (tintas)<br>${pill('Impresión', '#8b5cf6')}</p>
                                </div>
                                <div style="background: linear-gradient(135deg, #e11d4820, #f59e0b20, #10b98120); border-radius:12px; padding:14px; border:1px solid #f59e0b20; text-align:center;">
                                    <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">HSL / HSB</div>
                                    <p style="margin:0; font-size:0.85rem;">Tono, Saturación, Luminosidad<br>${pill('Intuitivo', '#f59e0b')}</p>
                                </div>
                            </div>
                            ${keyBox('Procesamiento Pre-atentivo del Color', 'El cerebro detecta diferencias de <strong>tono (hue)</strong> de forma <strong>pre-atentiva</strong> (antes de razonar), lo que permite identificar categorías al instante. Por ello el color es ideal para datos cualitativos/categóricos, pero <strong>no para magnitudes cuantitativas</strong>.', '#7c3aed')}
                        `)}
                    `
                },
                {
                    title: "Formatos de Imagen",
                    content: `
                        ${dojoCard('Formatos', 'code', '#10b981, #059669', `
                            ${dojoTable(
                                ['Formato', 'Tipo', 'Uso Principal'],
                                [
                                    ['<strong>SVG</strong>', pill("Vectorial", "#10b981"), 'Web — escalable sin límite'],
                                    ['<strong>JPEG</strong>', pill("Raster", "#f59e0b"), 'Fotografías web (con pérdida)'],
                                    ['<strong>PNG</strong>', pill("Raster", "#f59e0b"), 'Transparencias web (sin pérdida)'],
                                    ['<strong>TIFF</strong>', pill("Raster", "#f59e0b"), 'Impresión profesional'],
                                    ['<strong>EPS</strong>', pill("Vectorial", "#10b981"), 'Impresión — NO funciona en navegadores']
                                ]
                            )}
                        `)}
                        ${keyBox('Principio Fundamental', '<strong>"La forma debe estar al servicio de la función"</strong> — la estética nunca debe comprometer la claridad del mensaje de los datos.', '#8b5cf6')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 6
        // ═══════════════════════════════════════════════════════════════
        {
            title: "6. Anatomía del Gráfico",
            items: [
                {
                    title: "Elementos y Tipos de Gráficos",
                    content: `
                        ${dojoCard('Elementos de un Gráfico', 'chart', '#3b82f6, #2563eb', `
                            <div style="display:flex; flex-wrap:wrap; gap:6px; justify-content:center; padding:10px 0;">
                                ${['Título', 'Subtítulo', 'Eje X', 'Eje Y', 'Leyenda', 'Área de datos', 'Etiquetas', 'Fuente', 'Escala', 'Retícula'].map(el => pill(el, '#3b82f6')).join(' → ')}
                            </div>
                        `)}
                        ${dojoCard('Tipos de Gráficos', 'layers', '#8b5cf6, #6d28d9', `
                            ${dojoTable(
                                ['Tipo', 'Mejor Para'],
                                [
                                    ['<strong>Barras</strong>', 'Comparar categorías'],
                                    ['<strong>Líneas</strong>', 'Tendencias temporales'],
                                    ['<strong>Tarta (circular)</strong>', 'Relación parte-todo (criticado por imprecisión)'],
                                    ['<strong>Coropletas</strong>', 'Datos estadísticos por región geográfica'],
                                    ['<strong>Línea de tiempo</strong>', 'Ubicar eventos en cronología']
                                ]
                            )}
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-top:12px;">
                                <div style="text-align:center; padding:10px; background:#f9731610; border-radius:10px; border:1px solid #f9731620;">
                                    <strong style="color:#f97316;">Figurativo</strong><br>
                                    <span style="font-size:0.85rem;">Se parece a la realidad (mapas, ilustraciones)</span>
                                </div>
                                <div style="text-align:center; padding:10px; background:#4f6ef710; border-radius:10px; border:1px solid #4f6ef720;">
                                    <strong style="color:#4f6ef7;">No Figurativo</strong><br>
                                    <span style="font-size:0.85rem;">Formas abstractas (barras, líneas, áreas)</span>
                                </div>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 7 — EL MÁS IMPORTANTE
        // ═══════════════════════════════════════════════════════════════
        {
            title: "7. Codificación Gráfica",
            items: [
                {
                    title: "Jerarquía de Cleveland y McGill",
                    content: `
                        ${dojoCard('CONCEPTO CRÍTICO DE EXAMEN', 'bolt', '#ef4444, #dc2626', `
                            <div style="
                                text-align:center;
                                padding: 20px;
                                background: linear-gradient(135deg, #ef444410, #dc262610);
                                border-radius: 12px;
                                margin-bottom: 12px;
                            ">
                                <div style="font-weight:800; font-size:1.1rem; margin-bottom:12px; color:#ef4444;">Jerarquía de Efectividad (más → menos preciso)</div>
                                <div style="display:flex; align-items:center; justify-content:center; gap:6px; flex-wrap:wrap; font-size:0.95rem;">
                                    ${pill('Posición', '#10b981')}
                                    <span style="color:#ef4444; font-weight:700;">></span>
                                    ${pill('Longitud', '#3b82f6')}
                                    <span style="color:#ef4444; font-weight:700;">></span>
                                    ${pill('Ángulo', '#f59e0b')}
                                    <span style="color:#ef4444; font-weight:700;">></span>
                                    ${pill('Área', '#f97316')}
                                    <span style="color:#ef4444; font-weight:700;">></span>
                                    ${pill('Color', '#ef4444')}
                                </div>
                            </div>
                            ${dojoTable(
                                ['Atributo', 'Precisión', 'Ejemplo'],
                                [
                                    ['<strong>Posición</strong>', pill("Máxima", "#10b981"), 'Scatter plots, puntos'],
                                    ['<strong>Longitud</strong>', pill("Muy alta", "#3b82f6"), 'Gráficos de barras'],
                                    ['<strong>Ángulo</strong>', pill("Media", "#f59e0b"), 'Tartas — ¡criticados!'],
                                    ['<strong>Área</strong>', pill("Baja", "#f97316"), 'Gráficos de burbujas'],
                                    ['<strong>Color</strong>', pill("Categórico", "#ef4444"), 'Mejor para tipos, NO magnitudes']
                                ]
                            )}
                        `)}
                        ${dojoCard('Dos Ramas de la Visualización', 'explore', '#4f6ef7, #7c3aed', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#10b98110; border-radius:12px; padding:14px; border:1px solid #10b98125;">
                                    <div style="font-weight:700; color:#10b981; margin-bottom:6px;">Viz. Científica</div>
                                    <p style="margin:0; font-size:0.9rem;">Datos con <strong>estructura física</strong>: anatomía, clima, moléculas, terreno.</p>
                                </div>
                                <div style="background:#4f6ef710; border-radius:12px; padding:14px; border:1px solid #4f6ef725;">
                                    <div style="font-weight:700; color:#4f6ef7; margin-bottom:6px;">Viz. de Información</div>
                                    <p style="margin:0; font-size:0.9rem;">Datos <strong>abstractos</strong>: ventas, redes sociales, finanzas, logística.</p>
                                </div>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 8
        // ═══════════════════════════════════════════════════════════════
        {
            title: "8. Visualización Estática",
            items: [
                {
                    title: "Herramientas y Formatos",
                    content: `
                        ${dojoCard('Herramientas Profesionales', 'brush', '#f97316, #ea580c', `
                            ${dojoTable(
                                ['Herramienta', 'Tipo', 'Uso'],
                                [
                                    ['<strong>Adobe Illustrator</strong>', pill('Profesional', '#f97316'), 'Estándar de la industria para infografías vectoriales'],
                                    ['<strong>Inkscape</strong>', pill('Libre', '#10b981'), 'Alternativa open-source (SVG nativo)'],
                                    ['<strong>Canva</strong>', pill('Web', '#e11d48'), 'Plantillas drag-and-drop, no requiere diseño'],
                                    ['<strong>Infogram</strong>', pill('Web', '#3b82f6'), 'Crear infografías y gráficos interactivos online'],
                                    ['<strong>Piktochart</strong>', pill('Web', '#8b5cf6'), 'Infografías rápidas con plantillas'],
                                    ['<strong>Easelly</strong>', pill('Web', '#059669'), 'Infografías simples con arrastrar y soltar'],
                                    ['<strong>Tableau</strong>', pill('Dashboard', '#e97627'), 'Dashboards interactivos, KPIs, análisis visual']
                                ]
                            )}
                        `)}
                        ${dojoCard('Resoluciones', 'eye', '#8b5cf6, #7c3aed', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="text-align:center; padding:14px; background:#8b5cf610; border-radius:12px;">
                                    <div style="font-size:2rem; font-weight:800; color:#8b5cf6;">300</div>
                                    <div style="font-weight:600; font-size:0.85rem;">ppp (DPI) — Impresión</div>
                                </div>
                                <div style="text-align:center; padding:14px; background:#6b728010; border-radius:12px;">
                                    <div style="font-size:2rem; font-weight:800; color:#6b7280;">72-96</div>
                                    <div style="font-weight:600; font-size:0.85rem;">ppi — Pantallas</div>
                                </div>
                            </div>
                        `)}
                        ${keyBox('Trampa de Examen', '<strong>EPS</strong> es vectorial para impresión pero <strong>NO es compatible</strong> con navegadores web. <strong>SVG</strong> es el vectorial web.', '#ef4444')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 9
        // ═══════════════════════════════════════════════════════════════
        {
            title: "9. Visualización Exploratoria",
            items: [
                {
                    title: "Herramientas y Tecnologías",
                    content: `
                        ${dojoCard('Tecnologías Web', 'code', '#4f6ef7, #7c3aed', `
                            <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap; padding:10px 0;">
                                <div style="padding: 10px 20px; background: linear-gradient(135deg, #f97316, #ea580c); border-radius:10px; color:#fff; font-weight:700;">HTML<br><span style="font-size:0.75rem; opacity:0.8;">Estructura</span></div>
                                <div style="padding: 10px 20px; background: linear-gradient(135deg, #3b82f6, #2563eb); border-radius:10px; color:#fff; font-weight:700;">CSS<br><span style="font-size:0.75rem; opacity:0.8;">Estilo</span></div>
                                <div style="padding: 10px 20px; background: linear-gradient(135deg, #f59e0b, #d97706); border-radius:10px; color:#fff; font-weight:700;">JavaScript<br><span style="font-size:0.75rem; opacity:0.8;">Interactividad</span></div>
                            </div>
                        `)}
                        ${dojoCard('Herramientas Clave', 'explore', '#10b981, #059669', `
                            ${dojoTable(
                                ['Herramienta', 'Tipo', 'Característica'],
                                [
                                    ['<strong>Gapminder</strong>', 'Viz. animada', 'Bubbles, ~200 indicadores, open data'],
                                    ['<strong>Google Data Explorer</strong>', 'Exploración', 'Banco Mundial, OCDE, Eurostat'],
                                    ['<strong>CartoDB (CARTO)</strong>', 'Mapas interactivos', 'Cuenta gratuita 12 meses'],
                                    ['<strong>Flourish</strong>', 'Storytelling visual', 'Plantillas interactivas para periodismo de datos'],
                                    ['<strong>Tableau</strong>', 'Dashboards y KPIs', 'Arrastrar y soltar, zoom interactivo, filtros']
                                ]
                            )}
                        `)}
                        ${keyBox('Gapminder World — Hans Rosling', 'Gráfico de burbujas animado: <strong>esperanza de vida</strong> (eje Y) vs <strong>renta per cápita</strong> (eje X). El tamaño de la burbuja = población. Datos de fuentes públicas (<strong>open data</strong>).', '#10b981')}
                        ${keyBox('Mantra de Shneiderman', '<strong>"Overview first, zoom and filter, then details-on-demand"</strong><br>Principio fundamental de la visualización exploratoria: primero una vista general, luego zoom para filtrar y finalmente detalles bajo demanda.', '#4f6ef7')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 10
        // ═══════════════════════════════════════════════════════════════
        {
            title: "10. Visualización para Comunicar",
            items: [
                {
                    title: "Datawrapper, Timeline y Data Storytelling",
                    content: `
                        ${dojoCard('Herramientas de Comunicación', 'megaphone', '#ec4899, #db2777', `
                            ${dojoTable(
                                ['Herramienta', 'Qué es', 'Limitación'],
                                [
                                    ['<strong>Datawrapper</strong>', 'Plataforma web: gráficos, mapas, tablas', 'Orientada a viz., no análisis profundo'],
                                    ['<strong>Timeline.js</strong>', 'Línea de tiempo interactiva (Knight Lab)', 'Necesita Google Sheets como fuente']
                                ]
                            )}
                        `)}
                        ${dojoCard('Data Storytelling', 'star', '#f59e0b, #d97706', `
                            <div style="display:flex; align-items:center; justify-content:center; gap:12px; padding:10px 0; flex-wrap:wrap; margin-bottom:10px;">
                                ${pill('Datos (evidencia)', '#3b82f6')}
                                <span style="font-size:1.5em; color:#f59e0b;">+</span>
                                ${pill('Visualización (forma)', '#10b981')}
                                <span style="font-size:1.5em; color:#f59e0b;">+</span>
                                ${pill('Narrativa (hilo conductor)', '#8b5cf6')}
                            </div>
                            ${keyBox('Estructura Narrativa', '<strong>Introducción</strong> → <strong>Desarrollo</strong> → <strong>Conclusión</strong><br>Objetivo: no solo informar, sino <strong>persuadir e inspirar</strong>.', '#f59e0b')}
                        `)}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // TEMA 11
        // ═══════════════════════════════════════════════════════════════
        {
            title: "11. Ética y Representación Responsable",
            items: [
                {
                    title: "Buenas y Malas Prácticas",
                    content: `
                        ${dojoCard('Edward Tufte — Data-Ink Ratio', 'star', '#6366f1, #4f46e5', `
                            ${keyBox('Data-Ink Ratio', '<strong>Edward Tufte</strong> acuñó el concepto de "ratio data-ink": la proporción de tinta dedicada a los datos vs. el total. Objetivo: <strong>maximizar la tinta que comunica datos</strong> y eliminar el <strong>chartjunk</strong> (decoraciones innecesarias).', '#6366f1')}
                            ${keyBox('Chartjunk', 'Elementos visuales que NO aportan información: bordes 3D, sombras decorativas, fondos con tramas, efectos que distraen de los datos reales.', '#ef4444')}
                        `)}
                        ${dojoCard('Buenas Prácticas', 'shield', '#10b981, #059669', `
                            <div style="display:flex; flex-direction:column; gap:6px;">
                                ${['Eje Y comienza en cero (en barras)', 'Escalas proporcionales y lineales', 'Citar la fuente original de los datos', 'Leyendas claras y descriptivas', 'Usar "Elaboración propia" cuando corresponda'].map(t => `
                                    <div style="display:flex; align-items:center; gap:10px; padding:8px 12px; background:#10b98108; border-radius:8px;">
                                        <span style="color:#10b981; font-size:1.1rem;">✓</span>
                                        <span style="font-size:0.9rem;">${t}</span>
                                    </div>
                                `).join('')}
                            </div>
                        `)}
                        ${dojoCard('Malas Prácticas (Banderas Rojas)', 'warning', '#ef4444, #dc2626', `
                            <div style="display:flex; flex-direction:column; gap:6px;">
                                ${[
                                    ['Ejes truncados', 'Exageran diferencias pequeñas'],
                                    ['3D innecesario', 'Distorsiona proporciones (especialmente tartas)'],
                                    ['Cherry-picking', 'Seleccionar solo datos que apoyen la narrativa'],
                                    ['Colores engañosos', 'Inducen asociaciones incorrectas'],
                                    ['Escalas no lineales', 'Sin justificación técnica'],
                                    ['Chartjunk (Tufte)', 'Decoraciones que no aportan información']
                                ].map(([title, desc]) => `
                                    <div style="display:flex; align-items:center; gap:10px; padding:8px 12px; background:#ef444408; border-radius:8px;">
                                        <span style="color:#ef4444; font-size:1.1rem;">✗</span>
                                        <div><strong style="font-size:0.9rem;">${title}:</strong> <span style="font-size:0.85rem; color:#666;">${desc}</span></div>
                                    </div>
                                `).join('')}
                            </div>
                        `)}
                    `
                },
                {
                    title: "Principio Rector",
                    content: `
                        ${dojoCard('Principio Fundamental', 'shield', '#4f6ef7, #7c3aed', `
                            <div style="
                                text-align:center;
                                padding: 30px 20px;
                                background: linear-gradient(135deg, #4f6ef708, #7c3aed08);
                                border-radius: 16px;
                                border: 2px solid #4f6ef720;
                            ">
                                <div style="font-size:2.5rem; margin-bottom:12px;">${icon(icons.eye, '#4f6ef7', 40)}</div>
                                <div style="
                                    font-size: 1.25rem;
                                    font-weight: 800;
                                    background: linear-gradient(135deg, #4f6ef7, #7c3aed);
                                    -webkit-background-clip: text;
                                    -webkit-text-fill-color: transparent;
                                    margin-bottom: 12px;
                                ">"La visualización debe iluminar, no oscurecer."</div>
                                <p style="margin:0; font-size:0.95rem; color:var(--text-color, #555);">
                                    Cada elección de color, gráfico, escala o perspectiva debe representar <strong>fielmente</strong> la realidad de los datos.
                                </p>
                            </div>
                        `)}
                        ${keyBox('Caso: Mapa del Metro de Londres (Harry Beck, 1933)', '<strong>Positivo:</strong> extremadamente funcional — fácil de usar y leer.<br><strong>Crítica:</strong> es un <strong>diagrama topológico</strong>, no refleja la ubicación geográfica real de las estaciones. Sacrificó precisión geográfica por legibilidad.', '#f59e0b')}
                        ${keyBox('Crítica a los Gráficos de Tarta', 'Ángulo y área son atributos de <strong>baja efectividad</strong> según Cleveland y McGill. Alternativa superior: <strong>gráfico de barras</strong> (la longitud es más precisa que el ángulo).', '#ef4444')}
                    `
                }
            ]
        },
        // ═══════════════════════════════════════════════════════════════
        // SECCIÓN ESPECIAL: TEMAS FRECUENTES DE EXAMEN
        // (Basado en preguntas reportadas por compañeros)
        // ═══════════════════════════════════════════════════════════════
        {
            title: "12. TEMAS FRECUENTES DE EXAMEN",
            items: [
                {
                    title: "Tipografía en Profundidad",
                    content: `
                        ${dojoCard('Tipografía — Conceptos Clave para Examen', 'brush', '#f97316, #ea580c', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:14px;">
                                <div style="background:#f9731610; border-radius:12px; padding:14px; border:1px solid #f9731625; text-align:center;">
                                    <div style="font-family: Georgia, 'Times New Roman', serif; font-size:2rem; color:#f97316; margin-bottom:6px;">Aa</div>
                                    <div style="font-weight:700; margin-bottom:4px; font-size:1.05rem;">SERIF (Con remates)</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem; text-align:left;">
                                        <li>Tienen <strong>pequeños trazos decorativos</strong> al final de cada letra</li>
                                        <li>Guían el ojo horizontalmente en texto largo</li>
                                        <li><strong>Mejor para: PAPEL IMPRESO</strong></li>
                                        <li>Ejemplos: <em>Times New Roman, Georgia, Garamond</em></li>
                                        <li>Transmiten: tradición, seriedad, confianza</li>
                                    </ul>
                                </div>
                                <div style="background:#4f6ef710; border-radius:12px; padding:14px; border:1px solid #4f6ef725; text-align:center;">
                                    <div style="font-family: Arial, Helvetica, sans-serif; font-size:2rem; color:#4f6ef7; margin-bottom:6px;">Aa</div>
                                    <div style="font-weight:700; margin-bottom:4px; font-size:1.05rem;">SANS SERIF (Sin remates)</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem; text-align:left;">
                                        <li><strong>Sin trazos decorativos</strong>, aspecto limpio</li>
                                        <li>Mejor legibilidad a tamaños pequeños en pantalla</li>
                                        <li><strong>Mejor para: PANTALLAS DIGITALES</strong></li>
                                        <li>Ejemplos: <em>Arial, Helvetica, Inter, Roboto</em></li>
                                        <li>Transmiten: modernidad, limpieza, tecnología</li>
                                    </ul>
                                </div>
                            </div>
                            ${dojoTable(
                                ['Propiedad', 'Serif', 'Sans Serif'],
                                [
                                    ['Remates', '✓ Con remates (patitas)', '✗ Sin remates'],
                                    ['Medio ideal', pill('Impresión / papel', '#f97316'), pill('Pantallas digitales', '#4f6ef7')],
                                    ['Lectura larga', 'Mejor en papel (guían ojo)', 'Mejor en pantalla (nitidez)'],
                                    ['Sensación', 'Tradición, autoridad', 'Modernidad, simplicidad'],
                                    ['En visualización', 'Títulos formales', 'Etiquetas, ejes, datos']
                                ]
                            )}
                            ${keyBox('Otros tipos de fuente (complementario)', '<strong>Monoespaciada:</strong> Cada carácter ocupa el mismo ancho (Courier, Consolas). Útil para código y tablas de datos.<br><strong>Display/Decorativa:</strong> Solo para títulos grandes. NUNCA para cuerpo de texto ni etiquetas de datos — reduce la legibilidad.', '#8b5cf6')}
                            ${keyBox('TRAMPA DE EXAMEN — Tipografía', '¿Qué tipo de fuente es mejor para <strong>pantallas</strong>? → <strong>Sans Serif</strong>.<br>¿Qué tipo guía mejor el ojo en <strong>papel impreso</strong>? → <strong>Serif</strong>.<br>La clave es recordar: <strong>Serif = papel, Sans Serif = pantalla</strong>.', '#ef4444')}
                        `)}
                    `
                },
                {
                    title: "Color, Forma y Elementos Visuales",
                    content: `
                        ${dojoCard('Teoría del Color en Visualización', 'palette', '#8b5cf6, #6d28d9', `
                            <h4 style="margin:0 0 10px; color:#8b5cf6;">Propiedades del Color</h4>
                            ${dojoTable(
                                ['Propiedad', 'Qué controla', 'Uso en Visualización'],
                                [
                                    ['<strong>Tono (Hue)</strong>', 'El color en sí (rojo, azul, verde)', pill('Datos CATEGÓRICOS', '#10b981') + ' — distinguir grupos'],
                                    ['<strong>Saturación</strong>', 'Intensidad del color (vivo vs gris)', 'Destacar vs atenuar elementos'],
                                    ['<strong>Luminosidad/Valor</strong>', 'Claro vs oscuro', pill('Datos SECUENCIALES', '#3b82f6') + ' — magnitud gradual'],
                                    ['<strong>Opacidad/Alfa</strong>', 'Transparencia del color', 'Superponer capas de datos']
                                ]
                            )}
                            ${keyBox('Regla Fundamental del Color', 'El <strong>TONO</strong> es ideal para datos <strong>categóricos/cualitativos</strong> (distinguir grupos al instante).<br>El color <strong>NO es adecuado para datos cuantitativos</strong> — el ojo humano no puede ordenar intensidades con precisión.<br>Para magnitudes usa: <strong>posición y longitud</strong>.', '#ef4444')}
                        `)}
                        ${dojoCard('Modelos de Color — RGB vs CMYK', 'palette', '#3b82f6, #2563eb', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:14px;">
                                <div style="background: linear-gradient(135deg, #ff000015, #00ff0015, #0000ff15); border-radius:14px; padding:18px; border:2px solid #3b82f630;">
                                    <div style="font-weight:800; font-size:1.2rem; text-align:center; margin-bottom:8px;">RGB</div>
                                    <div style="text-align:center; margin-bottom:8px;">
                                        <span style="color:#ff0000; font-weight:700; font-size:1.1rem;">R</span>
                                        <span style="color:#00aa00; font-weight:700; font-size:1.1rem;">G</span>
                                        <span style="color:#0000ff; font-weight:700; font-size:1.1rem;">B</span>
                                    </div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Modelo <strong>ADITIVO</strong> (suma luces)</li>
                                        <li>Rojo + Verde + Azul</li>
                                        <li>La suma de todos = <strong>BLANCO</strong></li>
                                        <li>Ausencia de luz = <strong>NEGRO</strong></li>
                                        <li>Uso: <strong>PANTALLAS</strong> (monitores, TV, móviles)</li>
                                        <li>Creador: <strong>Thomas Young</strong> y <strong>Hermann von Helmholtz</strong> (Teoría Tricromática, s. XIX)</li>
                                    </ul>
                                </div>
                                <div style="background: linear-gradient(135deg, #00ffff15, #ff00ff15, #ffff0015); border-radius:14px; padding:18px; border:2px solid #8b5cf630;">
                                    <div style="font-weight:800; font-size:1.2rem; text-align:center; margin-bottom:8px;">CMYK</div>
                                    <div style="text-align:center; margin-bottom:8px;">
                                        <span style="color:#00bcd4; font-weight:700; font-size:1.1rem;">C</span>
                                        <span style="color:#e91e63; font-weight:700; font-size:1.1rem;">M</span>
                                        <span style="color:#fdd835; font-weight:700; font-size:1.1rem;">Y</span>
                                        <span style="color:#333; font-weight:700; font-size:1.1rem;">K</span>
                                    </div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Modelo <strong>SUSTRACTIVO</strong> (mezcla tintas)</li>
                                        <li>Cian + Magenta + Amarillo + Key (negro)</li>
                                        <li>La suma de todos = <strong>NEGRO</strong></li>
                                        <li>Ausencia de tinta = <strong>BLANCO</strong> (papel)</li>
                                        <li>Uso: <strong>IMPRESIÓN</strong> (documentos, pósters, revistas)</li>
                                        <li>Se añade K (Key=negro) porque CMY puros no dan negro puro</li>
                                    </ul>
                                </div>
                            </div>
                            <div style="background:#f59e0b10; border-radius:12px; padding:14px; border:1px solid #f59e0b25; margin-bottom:10px;">
                                <div style="font-weight:700; color:#f59e0b; margin-bottom:6px;">HSL / HSB — Modelo Intuitivo</div>
                                <p style="margin:0; font-size:0.9rem;">
                                    <strong>H</strong> = Hue (tono, 0°-360°) • <strong>S</strong> = Saturation (saturación, 0-100%) • <strong>L</strong> = Lightness (luminosidad, 0-100%)<br>
                                    Es el modelo más <strong>intuitivo para diseñadores</strong> porque permite seleccionar color, viveza y brillo por separado.
                                </p>
                            </div>
                            ${keyBox('TRAMPA DE EXAMEN — RGB vs CMYK', '<strong>RGB = Pantallas</strong> (aditivo, suma=blanco). <strong>CMYK = Impresión</strong> (sustractivo, suma=negro).<br>Los colores en pantalla pueden verse diferentes al imprimirlos porque RGB tiene un <strong>gamut</strong> (rango de colores) más amplio que CMYK.', '#ef4444')}
                        `)}
                        ${dojoCard('Elementos Visuales: Forma y Codificación', 'layers', '#10b981, #059669', `
                            <p>En visualización, los <strong>elementos visuales</strong> son las piezas que codifican datos:</p>
                            ${dojoTable(
                                ['Elemento', 'Tipo de Dato Ideal', 'Efectividad'],
                                [
                                    ['<strong>Posición</strong> (en ejes X/Y)', pill('Cuantitativo', '#3b82f6'), pill('Máxima', '#10b981')],
                                    ['<strong>Longitud</strong> (barras)', pill('Cuantitativo', '#3b82f6'), pill('Muy Alta', '#3b82f6')],
                                    ['<strong>Forma</strong> (círculo, triángulo, cuadrado)', pill('Categórico', '#10b981'), pill('Media', '#f59e0b')],
                                    ['<strong>Color (Tono)</strong>', pill('Categórico', '#10b981'), pill('Alta para categorías', '#8b5cf6')],
                                    ['<strong>Tamaño</strong> (área)', pill('Cuantitativo', '#3b82f6'), pill('Baja', '#ef4444')],
                                    ['<strong>Orientación</strong> (ángulo de marca)', pill('Categórico', '#10b981'), pill('Baja', '#ef4444')],
                                    ['<strong>Textura</strong> (patrón de relleno)', pill('Categórico', '#10b981'), pill('Baja', '#ef4444')]
                                ]
                            )}
                            ${keyBox('Forma como Elemento Visual', 'La <strong>forma</strong> (círculo, cuadrado, triángulo, estrella) es un atributo <strong>pre-atentivo</strong> — el cerebro lo detecta instantáneamente. Se usa para distinguir <strong>categorías</strong>, no magnitudes. Ejemplo: en un scatter plot, diferentes formas representan diferentes grupos.', '#10b981')}
                        `)}
                    `
                },
                {
                    title: "Cartografía: Historia y Proyecciones",
                    content: `
                        ${dojoCard('Historia de la Cartografía', 'map', '#3b82f6, #1d4ed8', `
                            <p style="font-size:1.02em; margin-top:0;">La cartografía es el arte y ciencia de representar la Tierra en mapas. Es una de las <strong>formas más antiguas de visualización de información</strong>.</p>
                            ${dojoTable(
                                ['Personaje', 'Época', 'Contribución'],
                                [
                                    ['<strong>Claudio Ptolomeo</strong>', 'Siglo II d.C.', 'Autor de <em>Geographía</em>: primeros <strong>mapamundis</strong> con coordenadas. Base de la cartografía occidental por más de 1000 años.'],
                                    ['<strong>Eratóstenes</strong>', 'Siglo III a.C.', 'Primera <strong>medición de la circunferencia de la Tierra</strong> (~40.000 km). Creó las bases de la cartografía antigua.'],
                                    ['<strong>Gerhardus Mercator</strong>', '1569', 'Creó la <strong>proyección cartográfica más famosa</strong>. Permitió a los marineros trazar rutas como líneas rectas (loxodromas).'],
                                    ['<strong>Abraham Ortelius</strong>', '1570', 'Publicó el <em>Theatrum Orbis Terrarum</em>, considerado el <strong>primer atlas moderno</strong>.'],
                                    ['<strong>John Snow</strong>', '1854', 'Mapa del <strong>cólera en Londres</strong>: pionero de la visualización geoespacial para análisis epidemiológico.']
                                ]
                            )}
                        `)}
                        ${dojoCard('Proyección de Mercator — Detalle Clave', 'map', '#ef4444, #dc2626', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:12px;">
                                <div style="background:#10b98110; border-radius:12px; padding:14px; border:1px solid #10b98125;">
                                    <div style="font-weight:700; color:#10b981; margin-bottom:6px;">✓ Lo que PRESERVA</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.9rem;">
                                        <li><strong>ÁNGULOS</strong> (conforme)</li>
                                        <li>Las formas locales mantienen su proporción</li>
                                        <li>Ideal para <strong>navegación marítima</strong> — las rutas son líneas rectas</li>
                                    </ul>
                                </div>
                                <div style="background:#ef444410; border-radius:12px; padding:14px; border:1px solid #ef444425;">
                                    <div style="font-weight:700; color:#ef4444; margin-bottom:6px;">✗ Lo que DISTORSIONA</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.9rem;">
                                        <li><strong>TAMAÑOS (áreas)</strong> en zonas polares</li>
                                        <li>Groenlandia parece del tamaño de África</li>
                                        <li>En realidad, África es <strong>14 veces mayor</strong></li>
                                    </ul>
                                </div>
                            </div>
                            ${keyBox('¿Quién creó la proyección cartográfica más famosa?', '<strong>Gerhardus Mercator</strong> (Gerardo Mercator) en <strong>1569</strong>. Fue un cartógrafo, geógrafo y matemático flamenco. Su proyección cilíndrica <strong>conforme</strong> se convirtió en el estándar para mapas de navegación y sigue siendo la más utilizada en aplicaciones web como Google Maps.', '#3b82f6')}
                        `)}
                    `
                },
                {
                    title: "Resolución: DPI, PPI y Formatos",
                    content: `
                        ${dojoCard('Resolución: DPI vs PPI', 'eye', '#8b5cf6, #7c3aed', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px; margin-bottom:14px;">
                                <div style="text-align:center; padding:20px; background:linear-gradient(135deg, #8b5cf610, #6d28d910); border-radius:14px; border:2px solid #8b5cf630;">
                                    <div style="font-size:3rem; font-weight:900; color:#8b5cf6;">300</div>
                                    <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">DPI</div>
                                    <div style="font-size:0.85rem; color:#666;">Dots Per Inch</div>
                                    <div style="margin-top:8px; font-size:0.9rem;"><strong>IMPRESIÓN</strong></div>
                                    <p style="font-size:0.82rem; margin:6px 0 0;">Resolución mínima para impresión profesional de calidad. Revistas, pósters, libros.</p>
                                </div>
                                <div style="text-align:center; padding:20px; background:linear-gradient(135deg, #6b728010, #37415110); border-radius:14px; border:2px solid #6b728030;">
                                    <div style="font-size:3rem; font-weight:900; color:#6b7280;">72-96</div>
                                    <div style="font-weight:700; font-size:1.1rem; margin-bottom:4px;">PPI</div>
                                    <div style="font-size:0.85rem; color:#666;">Pixels Per Inch</div>
                                    <div style="margin-top:8px; font-size:0.9rem;"><strong>PANTALLAS</strong></div>
                                    <p style="font-size:0.82rem; margin:6px 0 0;">Resolución estándar de monitores y pantallas web. Suficiente para visualización digital.</p>
                                </div>
                            </div>
                            ${dojoTable(
                                ['Concepto', 'Significado', 'Medio'],
                                [
                                    ['<strong>DPI</strong> (Dots Per Inch)', 'Puntos de tinta por pulgada', pill('Impresión', '#8b5cf6')],
                                    ['<strong>PPI</strong> (Pixels Per Inch)', 'Píxeles por pulgada en pantalla', pill('Pantallas', '#6b7280')],
                                    ['<strong>Resolución Alta</strong> (Retina)', '≥ 200 PPI en pantallas modernas', pill('Móviles/Tablets', '#3b82f6')]
                                ]
                            )}
                            ${keyBox('TRAMPA DE EXAMEN — DPI', '<strong>300 DPI</strong> = impresión profesional.<br><strong>72-96 PPI</strong> = pantallas web estándar.<br>Una imagen de 72 PPI se verá bien en pantalla pero <strong>borrosa al imprimirla</strong>. Siempre diseñar en 300 DPI si el producto final es impreso.', '#ef4444')}
                        `)}
                        ${dojoCard('Vectorial vs Raster — Recordatorio', 'code', '#10b981, #059669', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#10b98110; border-radius:12px; padding:14px; border:1px solid #10b98125;">
                                    <div style="font-weight:700; color:#10b981; margin-bottom:6px;">VECTORIAL</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Fórmulas matemáticas</li>
                                        <li>Escala <strong>infinitamente</strong> sin perder calidad</li>
                                        <li>Formatos: SVG, AI, EPS</li>
                                        <li>Ideal: logos, gráficos, iconos, infografías</li>
                                    </ul>
                                </div>
                                <div style="background:#f5920b10; border-radius:12px; padding:14px; border:1px solid #f59e0b25;">
                                    <div style="font-weight:700; color:#f59e0b; margin-bottom:6px;">RASTER (Mapa de Bits)</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Cuadrícula de píxeles</li>
                                        <li>Se <strong>pixela</strong> al ampliar</li>
                                        <li>Formatos: JPEG, PNG, TIFF, GIF</li>
                                        <li>Ideal: fotografías, imágenes complejas</li>
                                    </ul>
                                </div>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Charles Minard — La Mejor Infografía de la Historia",
                    content: `
                        ${dojoCard('El Mapa de Minard (1869)', 'map', '#ef4444, #b91c1c', `
                            <div style="text-align:center; padding:16px; background:linear-gradient(135deg, #ef444408, #b91c1c08); border-radius:14px; border:1px solid #ef444420; margin-bottom:14px;">
                                <div style="font-size:1.2rem; font-weight:800; color:#ef4444; margin-bottom:8px;">La Campaña de Napoleón en Rusia (1812-1813)</div>
                                <p style="margin:0; font-size:0.95rem;">Considerada por Edward Tufte como <strong>"la mejor gráfica estadística jamás creada"</strong>.</p>
                            </div>
                            <p><strong>Charles Joseph Minard</strong> (1781-1870) fue un ingeniero civil francés que revolucionó la visualización de datos con sus mapas de flujo.</p>
                            <h4 style="color:#ef4444; margin:14px 0 8px;">¿Qué muestra el mapa?</h4>
                            <p style="font-size:0.93rem;">El mapa de Minard representa simultáneamente <strong>6 variables</strong> en una sola imagen estática:</p>
                            ${dojoTable(
                                ['Variable', 'Cómo se Codifica'],
                                [
                                    ['<strong>1. Tamaño del ejército</strong>', 'Ancho de la banda/línea'],
                                    ['<strong>2. Ubicación geográfica</strong>', 'Posición en el mapa (latitud/longitud)'],
                                    ['<strong>3. Dirección del movimiento</strong>', pill('Dorado = avance', '#f59e0b') + ' ' + pill('Negro = retirada', '#333')],
                                    ['<strong>4. Temperatura</strong>', 'Gráfico inferior (hasta -37°C en la retirada)'],
                                    ['<strong>5. Fechas</strong>', 'Marcadas en el gráfico de temperatura'],
                                    ['<strong>6. Ríos y geografía</strong>', 'Elementos del mapa base']
                                ]
                            )}
                            ${keyBox('Dato Impactante', 'Napoleón inició la campaña con <strong>422.000 soldados</strong>. Solo <strong>10.000</strong> regresaron. El mapa muestra esta devastación de forma visual e inmediata — el ancho de la banda se reduce drásticamente.', '#ef4444')}
                            ${keyBox('¿Por qué importa para el examen?', '1. Es el ejemplo clásico de <strong>visualización multivariable estática</strong> efectiva.<br>2. Demuestra que se pueden representar <strong>múltiples dimensiones sin interactividad</strong>.<br>3. Tufte lo usa como referencia del <strong>data-ink ratio</strong> ideal: todo el espacio comunica datos.<br>4. Minard fue pionero de los <strong>mapas de flujo (flow maps)</strong>.', '#4f6ef7')}
                        `)}
                    `
                },
                {
                    title: "Psicología Visual y Percepción",
                    content: `
                        ${dojoCard('Psicología de la Percepción Visual', 'brain', '#8b5cf6, #7c3aed', `
                            <h4 style="margin:0 0 10px; color:#8b5cf6;">Procesamiento Visual Humano</h4>
                            <p>El sistema visual humano es el <strong>canal sensorial más potente</strong>. Procesamos imágenes mucho más rápido que texto.</p>
                            ${dojoTable(
                                ['Tipo de Memoria', 'Velocidad', 'Capacidad', 'Función en Visualización'],
                                [
                                    ['<strong style="color:#ef4444;">Icónica</strong> (sensorial)', 'Milisegundos', 'Grande pero fugaz', 'Capta color, posición, orientación automáticamente'],
                                    ['<strong style="color:#f59e0b;">Corto Plazo</strong> (trabajo)', 'Segundos', '~7 ítems (±2)', 'Procesa conscientemente la información visual'],
                                    ['<strong style="color:#10b981;">Largo Plazo</strong>', 'Permanente', 'Ilimitada', 'Reconoce convenciones y símbolos aprendidos']
                                ]
                            )}
                            <div style="display:flex; align-items:center; justify-content:center; gap:10px; padding:12px; margin:12px 0; background:#8b5cf608; border-radius:10px;">
                                ${pill('Icónica', '#ef4444')}
                                <span style="font-size:1.3em; color:#8b5cf6;">→</span>
                                ${pill('Corto Plazo', '#f59e0b')}
                                <span style="font-size:1.3em; color:#8b5cf6;">→</span>
                                ${pill('Largo Plazo', '#10b981')}
                            </div>
                        `)}
                        ${dojoCard('Atributos Pre-atentivos', 'bolt', '#f59e0b, #d97706', `
                            <p>Son propiedades visuales que el cerebro detecta <strong>automática e instantáneamente</strong>, sin esfuerzo consciente (en menos de 250 ms):</p>
                            <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; margin:12px 0;">
                                ${[['Color (tono)','🔴🔵🟢','#ef4444'],['Tamaño','● ◉ ⬤','#3b82f6'],['Orientación','/ | \\','#10b981'],['Forma','● ■ ▲','#f59e0b'],['Movimiento','→ ⟹','#8b5cf6'],['Posición','· · ·','#ec4899']].map(function(a){return '<div style="text-align:center;padding:12px;background:'+a[2]+'08;border-radius:10px;border:1px solid '+a[2]+'20;"><div style="font-size:1.3rem;margin-bottom:4px;">'+a[1]+'</div><div style="font-weight:600;font-size:0.85rem;color:'+a[2]+';">'+a[0]+'</div></div>';}).join('')}
                            </div>
                            ${keyBox('Para el Examen', 'Los atributos pre-atentivos son la base del diseño de visualización porque permiten al usuario <strong>detectar patrones sin pensar</strong>. El <strong>tono (hue)</strong> es el más efectivo para distinguir categorías. El <strong>tamaño y la posición</strong> son mejores para magnitudes.', '#4f6ef7')}
                        `)}
                        ${dojoCard('Carga Cognitiva', 'brain', '#ec4899, #db2777', `
                            <p>La <strong>carga cognitiva</strong> es el esfuerzo mental para procesar información visual:</p>
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="background:#10b98110; border-radius:12px; padding:14px;">
                                    <div style="font-weight:700; color:#10b981; margin-bottom:6px;">✓ Baja Carga (ideal)</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Diseño limpio y claro</li>
                                        <li>Máximo 7 colores por gráfico</li>
                                        <li>Jerarquía visual clara</li>
                                        <li>Pre-atentivos bien usados</li>
                                    </ul>
                                </div>
                                <div style="background:#ef444410; border-radius:12px; padding:14px;">
                                    <div style="font-weight:700; color:#ef4444; margin-bottom:6px;">✗ Alta Carga (evitar)</div>
                                    <ul style="margin:0; padding-left:18px; font-size:0.88rem;">
                                        <li>Demasiados elementos</li>
                                        <li>Colores sin lógica</li>
                                        <li>Chartjunk (decoraciones inútiles)</li>
                                        <li>Falta de jerarquía visual</li>
                                    </ul>
                                </div>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Principios de Gestalt — Ampliado",
                    content: `
                        ${dojoCard('Leyes de la Gestalt en Visualización', 'eye', '#ec4899, #db2777', `
                            <p>La <strong>Gestalt</strong> (del alemán: "forma" o "configuración") es una corriente de la psicología que estudia <strong>cómo percibimos patrones y organizamos información visual</strong>.</p>
                            ${dojoTable(
                                ['Principio', 'Definición', 'Ejemplo en Viz.', 'Importancia'],
                                [
                                    ['<strong>Proximidad</strong>', 'Elementos cercanos se perciben como grupo', 'Puntos cercanos en scatter plot = cluster', pill('MUY ALTA', '#ef4444')],
                                    ['<strong>Similitud</strong>', 'Elementos con misma forma/color = grupo', 'Mismo color = misma categoría', pill('MUY ALTA', '#ef4444')],
                                    ['<strong>Continuidad</strong>', 'El ojo sigue líneas y curvas fluidas', 'Gráfico de líneas: seguimos la tendencia', pill('ALTA', '#f59e0b')],
                                    ['<strong>Cierre (Clausura)</strong>', 'El cerebro completa formas incompletas', 'Arcos percibidos como círculos enteros', pill('ALTA', '#f59e0b')],
                                    ['<strong>Figura-Fondo</strong>', 'Separamos un objeto (figura) del fondo', 'Datos resaltados sobre fondo neutro', pill('MEDIA', '#3b82f6')],
                                    ['<strong>Destino Común</strong>', 'Elementos que se mueven juntos = grupo', 'Animaciones de datos en misma dirección', pill('MEDIA', '#3b82f6')],
                                    ['<strong>Conexión</strong>', 'Línea que une dos puntos = relación', 'Diagramas de red, grafos, árboles', pill('ALTA', '#f59e0b')]
                                ]
                            )}
                            ${keyBox('IMPORTANTE para el Examen', 'Los 4 principios <strong>más preguntados</strong> son: <strong>Proximidad, Similitud, Cierre y Continuidad</strong>.<br>Recuerda: la Gestalt explica <strong>por qué</strong> un buen gráfico funciona — porque aprovecha cómo nuestro cerebro <strong>organiza automáticamente</strong> la información visual.', '#ec4899')}
                        `)}
                        ${dojoCard('Gestalt Aplicada al Diseño de Gráficos', 'chart', '#4f6ef7, #3b44d1', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:14px;">
                                <div style="padding:14px; background:#4f6ef708; border-radius:12px;">
                                    <strong style="color:#4f6ef7;">Proximidad en acción:</strong><br>
                                    <span style="font-size:0.9rem;">En un gráfico de barras agrupadas, las barras de la misma categoría están <strong>juntas</strong>, separadas de las demás por un espacio mayor.</span>
                                </div>
                                <div style="padding:14px; background:#10b98108; border-radius:12px;">
                                    <strong style="color:#10b981;">Similitud en acción:</strong><br>
                                    <span style="font-size:0.9rem;">Todas las barras del mismo grupo usan el <strong>mismo color</strong>. El ojo las agrupa instantáneamente como "la misma cosa".</span>
                                </div>
                                <div style="padding:14px; background:#f59e0b08; border-radius:12px;">
                                    <strong style="color:#f59e0b;">Cierre en acción:</strong><br>
                                    <span style="font-size:0.9rem;">Los gráficos de dona usan un arco parcial — nuestro cerebro <strong>completa el círculo</strong> mentalmente.</span>
                                </div>
                                <div style="padding:14px; background:#ef444408; border-radius:12px;">
                                    <strong style="color:#ef4444;">Continuidad en acción:</strong><br>
                                    <span style="font-size:0.9rem;">En gráficos de línea, seguimos la tendencia naturalmente gracias al principio de <strong>continuidad</strong>.</span>
                                </div>
                            </div>
                        `)}
                    `
                },
                {
                    title: "Ética en la Visualización — Ampliado",
                    content: `
                        ${dojoCard('Ética y Responsabilidad en Visualización', 'shield', '#6366f1, #4f46e5', `
                            <p>La ética en visualización se refiere al <strong>deber de representar los datos fielmente</strong>, sin manipular la percepción del lector.</p>
                            
                            <h4 style="color:#6366f1; margin:14px 0 8px;">Edward Tufte — Pilares de la Ética Visual</h4>
                            ${dojoTable(
                                ['Concepto', 'Definición', 'Consecuencia'],
                                [
                                    ['<strong>Data-Ink Ratio</strong>', 'Proporción de tinta dedicada a datos vs total', 'Maximizar → más datos, menos decoración'],
                                    ['<strong>Chartjunk</strong>', 'Elementos que NO aportan información', 'Eliminar: 3D, sombras, gradientes decorativos'],
                                    ['<strong>Lie Factor</strong>', 'Efecto visual / Efecto en datos', '= 1 fiel · > 1 exagera · < 1 minimiza'],
                                    ['<strong>Data Density</strong>', 'Cantidad de datos por unidad de área', 'Más datos en menos espacio = más eficiente']
                                ]
                            )}
                        `)}
                        ${dojoCard('Manipulaciones Visuales — Banderas Rojas', 'warning', '#ef4444, #dc2626', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
                                ${[['Ejes Truncados','Cortar el eje Y en un valor alto para exagerar diferencias. Ejemplo: barras que muestran 98% vs 99% como si fueran enormemente diferentes.','#ef4444'],['3D Innecesario','Proyección tridimensional en tartas y barras que distorsiona proporciones. El ángulo de perspectiva cambia la percepción de tamaño.','#f97316'],['Cherry-Picking','Seleccionar solo datos que apoyan una narrativa e ignorar los que la contradicen. Sesgo de confirmación visual.','#f59e0b'],['Doble Eje Engañoso','Dos ejes Y con escalas diferentes para sugerir correlaciones falsas entre variables no relacionadas.','#8b5cf6'],['Colores Engañosos','Usar rojo para crecimiento y verde para descenso (invertido) o colores que inducen asociaciones incorrectas.','#ec4899'],['Escala No Lineal','Usar escalas logarítmicas sin indicarlo, haciendo que diferencias enormes parezcan pequeñas.','#3b82f6']].map(function(a){return '<div style="padding:14px;background:'+a[2]+'08;border-radius:12px;border:1px solid '+a[2]+'20;"><div style="font-weight:700;color:'+a[2]+';margin-bottom:4px;font-size:0.95rem;">✗ '+a[0]+'</div><p style="margin:0;font-size:0.85rem;line-height:1.5;">'+a[1]+'</p></div>';}).join('')}
                            </div>
                            ${keyBox('Principio Rector', '"<strong>La visualización debe iluminar, no oscurecer.</strong>" — Cada elección (color, gráfico, escala, perspectiva) debe representar <strong>fielmente</strong> la realidad de los datos.', '#6366f1')}
                        `)}
                    `
                },
                {
                    title: "Tipos de Gráficos — Guía Completa",
                    content: `
                        ${dojoCard('Selección de Gráficos por Propósito', 'chart', '#4f6ef7, #3b44d1', `
                            ${dojoTable(
                                ['Gráfico', 'Propósito', 'Variables', 'Efectividad'],
                                [
                                    ['<strong>Barras</strong>', 'Comparar categorías', pill('Categórica + Cuantitativa', '#3b82f6'), pill('Máxima', '#10b981')],
                                    ['<strong>Líneas</strong>', 'Tendencia temporal', pill('Temporal + Cuantitativa', '#3b82f6'), pill('Máxima', '#10b981')],
                                    ['<strong>Scatter (Dispersión)</strong>', 'Relación entre 2 variables', pill('2 Cuantitativas', '#3b82f6'), pill('Muy Alta', '#3b82f6')],
                                    ['<strong>Burbujas</strong>', 'Como scatter + 3ª variable', pill('3 Cuantitativas', '#3b82f6'), pill('Alta', '#f59e0b')],
                                    ['<strong>Tarta (Circular)</strong>', 'Parte del todo', pill('Categórica', '#10b981'), pill('BAJA ⚠️', '#ef4444')],
                                    ['<strong>Coropletas</strong>', 'Datos por región geográfica', pill('Geográfica + Cuantitativa', '#8b5cf6'), pill('Alta', '#f59e0b')],
                                    ['<strong>Cartograma</strong>', 'Áreas deformadas por dato', pill('Geográfica + Cuantitativa', '#8b5cf6'), pill('Media', '#f59e0b')],
                                    ['<strong>Treemap</strong>', 'Jerarquías por área', pill('Jerárquica + Cuantitativa', '#ec4899'), pill('Media', '#f59e0b')],
                                    ['<strong>Sparkline</strong>', 'Micro-tendencia inline', pill('Temporal', '#6b7280'), pill('Contextual', '#6b7280')],
                                    ['<strong>Mapa de calor</strong>', 'Densidad o intensidad', pill('2 Categóricas + 1 Cuantitativa', '#f97316'), pill('Alta', '#f59e0b')]
                                ]
                            )}
                        `)}
                        ${dojoCard('Crítica a los Gráficos de Tarta', 'warning', '#ef4444, #dc2626', `
                            <div style="text-align:center; padding:16px; background:#ef444408; border-radius:14px; border:1px solid #ef444420; margin-bottom:12px;">
                                <div style="font-size:1.1rem; font-weight:800; color:#ef4444; margin-bottom:8px;">¿Por qué los gráficos de tarta están criticados?</div>
                            </div>
                            <ul style="padding-left:20px; font-size:0.93rem; line-height:1.8;">
                                <li>Usan <strong>ángulo y área</strong> → niveles <strong>BAJOS</strong> en la jerarquía de Cleveland y McGill</li>
                                <li>El ojo humano tiene <strong>dificultades para comparar ángulos</strong> con precisión</li>
                                <li>Con más de 5-6 categorías, se vuelven <strong>ilegibles</strong></li>
                                <li>Alternativa superior: <strong>gráfico de barras</strong> (longitud > ángulo en precisión)</li>
                            </ul>
                            ${keyBox('Jerarquía de Cleveland y McGill — Recordatorio', 'De MÁS a MENOS preciso para datos cuantitativos:<br><strong>Posición > Longitud > Ángulo > Área > Color</strong><br>Las BARRAS (longitud) siempre ganan a las TARTAS (ángulo).', '#4f6ef7')}
                        `)}
                        ${dojoCard('Figurativo vs No Figurativo', 'layers', '#10b981, #059669', `
                            <div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">
                                <div style="text-align:center; padding:14px; background:#f9731610; border-radius:12px; border:1px solid #f9731625;">
                                    <div style="font-weight:700; color:#f97316; font-size:1.05rem; margin-bottom:6px;">Figurativo</div>
                                    <p style="margin:0; font-size:0.9rem;">Se parece a la realidad: <strong>mapas, pictogramas, ilustraciones</strong>.<br>Más <strong>intuitivo</strong> pero menos preciso.</p>
                                </div>
                                <div style="text-align:center; padding:14px; background:#4f6ef710; border-radius:12px; border:1px solid #4f6ef725;">
                                    <div style="font-weight:700; color:#4f6ef7; font-size:1.05rem; margin-bottom:6px;">No Figurativo</div>
                                    <p style="margin:0; font-size:0.9rem;">Formas abstractas: <strong>barras, líneas, áreas, scatter</strong>.<br>Más <strong>preciso</strong> pero requiere aprendizaje.</p>
                                </div>
                            </div>
                        `)}
                    `
                }
            ]
        }
    ];
})();
