(function() {
    window.studyData = window.studyData || {};

    // ── Visual Helpers ──────────────────────────────────────────────────
    const icon = (path, color = 'currentColor', size = 20) =>
        `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}" style="vertical-align:middle;flex-shrink:0;"><path d="${path}"/></svg>`;

    const icons = {
        formula:  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm4.5 5L7 11l2.5 3H11l-2-2.5L11 9H9.5zm5 0H13l2 2.5L13 13h1.5L17 10l-2.5-3z',
        theorem:  'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
        proof:    'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
        chapter:  'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
        data:     'M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z',
        brain:    'M12 2a9 9 0 0 0-9 9c0 3.07 1.98 5.73 4.73 6.73A1 1 0 0 1 8.5 19H12v3h1v-3h3.5a1 1 0 0 1 .77-1.27A7 7 0 0 0 21 11a9 9 0 0 0-9-9z',
        star:     'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        bolt:     'M7 2v11h3v9l7-12h-4l4-8z',
        chart:    'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z',
        tools:    'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
        layers:   'M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z',
        eye:      'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z',
        network:  'M17 16l-4-4V8.82C14.16 8.4 15 7.3 15 6c0-1.66-1.34-3-3-3S9 4.34 9 6c0 1.3.84 2.4 2 2.82V12l-4 4H2v5h5v-3.05l4-4.2 4 4.2V21h5v-5h-3z',
        markov:   'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z',
        trophy:   'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2z',
        fuel:     'M19.77 7.23l.01-.01-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21c0 .55-.45 1-1 1s-1-.45-1-1V14c0-1.1-.9-2-2-2h-1V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0V9c0-.69-.28-1.32-.73-1.77zM12 10H6V5h6v5z',
        book:     'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
        link:     'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z',
        warning:  'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z'
    };

    const dojoCard = (title, iconKey, gradient, content) => `
        <div style="
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            margin-bottom: 1.5rem;
            border: 1px solid rgba(0,100,60,0.12);
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

    const pill = (label, color = '#006644') => `
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

    const keyBox = (title, body, color = '#006644') => `
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

    // Formula display box — renders math in styled HTML, NOT LaTeX
    const formulaBox = (formulaHtml, readAloud, defenseNote, color = '#1a5276') => `
        <div style="
            background: ${color}08;
            border-left: 4px solid ${color};
            border-radius: 0 12px 12px 0;
            padding: 16px 18px;
            margin: 14px 0;
        ">
            <div style="font-size: 1.05rem; font-weight: 600; text-align: center; margin-bottom: 10px; padding: 12px; background: rgba(0,0,0,0.03); border-radius: 8px; font-family: 'Courier New', Consolas, monospace; color: var(--text-color);">
                ${formulaHtml}
            </div>
            <div style="margin-top: 10px;">
                <div style="font-weight: 700; color: #2e86c1; font-size: 0.85rem; margin-bottom: 4px; display:flex; align-items:center; gap:6px;">
                    ${icon(icons.book, '#2e86c1', 16)} Como leerla (sin leer textualmente):
                </div>
                <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color); padding-left: 8px; border-left: 2px solid #2e86c188; margin-left: 4px;">${readAloud}</div>
            </div>
            <div style="margin-top: 10px;">
                <div style="font-weight: 700; color: #8e44ad; font-size: 0.85rem; margin-bottom: 4px; display:flex; align-items:center; gap:6px;">
                    ${icon(icons.trophy, '#8e44ad', 16)} En la defensa (ante maestros y doctores):
                </div>
                <div style="font-size: 0.9rem; line-height: 1.6; color: var(--text-color); padding-left: 8px; border-left: 2px solid #8e44ad88; margin-left: 4px;">${defenseNote}</div>
            </div>
        </div>`;

    const dojoTable = (headers, rows, color = '#006644') => {
        let html = `<div style="overflow-x:auto; margin:10px 0;"><table style="width:100%;border-collapse:collapse;font-size:0.88rem;">`;
        html += `<thead><tr>`;
        headers.forEach(h => { html += `<th style="background:${color}15;color:${color};padding:8px 10px;text-align:left;border-bottom:2px solid ${color}30;font-weight:700;">${h}</th>`; });
        html += `</tr></thead><tbody>`;
        rows.forEach(row => {
            html += `<tr>`;
            row.forEach(cell => { html += `<td style="padding:7px 10px;border-bottom:1px solid #eee;">${cell}</td>`; });
            html += `</tr>`;
        });
        html += `</tbody></table></div>`;
        return html;
    };

    // Math helpers — render formulas as styled HTML (no LaTeX engine needed)
    const m = (text) => `<code style="font-family:'Courier New',Consolas,monospace;background:rgba(0,0,0,0.04);padding:1px 5px;border-radius:4px;font-size:0.95em;">${text}</code>`;
    const sub = (base, s) => `${base}<sub>${s}</sub>`;
    const sup = (base, s) => `${base}<sup>${s}</sup>`;

    // ══════════════════════════════════════════════════════════════════════
    // STUDY DATA: UNAH TESIS
    // ══════════════════════════════════════════════════════════════════════

    window.studyData['unah-tesis'] = [
        // ─────────── CAPITULO 4: TCROC Y SUS VARIANTES ──────────────
        {
            title: '4. TCROC y sus Variantes',
            items: [
                {
                    title: '4.1 — Marco General Unificado (Ecuacion Madre)',
                    content: dojoCard('Ecuacion General TCROC', 'formula', '#1a5276, #2e86c1',
                        `<p>Esta es la <b>ecuacion madre</b> de toda la tesis. Todas las variantes se derivan de ella.</p>
                        ${formulaBox(
                            `${sub('&alpha;','t,&lambda;,W')} = &minus;1 + argmin<sub>&beta;&isin;&reals;</sub> &sum;<sub>k=t&minus;W+1</sub><sup>t</sup> &lambda;<sup>t&minus;k</sup> (v(k) &minus; &beta; &middot; v(k&minus;1))<sup>2</sup>`,
                            `"La tasa de cambio relativa alfa en el tiempo t, con parametros lambda y W, se obtiene restando uno al valor de beta que minimiza la suma ponderada de errores cuadraticos entre el valor observado y su prediccion multiplicativa, evaluados dentro de una ventana de W observaciones con pesos que decaen exponencialmente segun lambda."`,
                            `"Esta ecuacion define un operador de transformacion que convierte la serie cruda en tasas de cambio relativas. Es el fundamento de toda la familia TCROC. La elegancia radica en que admite solucion analitica cerrada, a diferencia de metodos iterativos como MLE o ARIMA, y satisface cuatro axiomas: localidad acotada, proporcionalidad geometrica, convexidad global y estabilidad de Lipschitz."`
                        )}
                        ${keyBox('¿Por que usamos TCROC?', `
                            La serie temporal cruda (PIB, precios de combustibles) es no estacionaria y ruidosa.
                            El operador TCROC transforma esta serie en una secuencia de tasas de cambio relativas que <b>si son estacionarias</b>,
                            lo cual es un prerrequisito para discretizar en cadenas de Markov.
                            Es la base matematica que prepara los datos antes de cualquier modelado estocastico.
                        `)}
                        ${dojoTable(
                            ['Variante', 'Parametros', 'Uso'],
                            [
                                ['TCROC', '&lambda;=1, W=T', 'Linea base teorica (degenerada)'],
                                ['TCROCM', '&lambda;=1, W&lt;T', 'Ventana movil, pesos uniformes'],
                                ['ETCROC', '&lambda;&lt;1, W=T', 'Decaimiento exponencial global'],
                                ['ETCROCM', '&lambda;&lt;1, W&lt;T', 'Forma mas general (usa ambos)']
                            ]
                        )}
                        `)
                },
                {
                    title: '4.2 — Solucion Analitica Cerrada',
                    content: dojoCard('Teorema de Existencia y Unicidad', 'theorem', '#1a5276, #154360',
                        `<p><b>Teorema:</b> Si existe al menos un valor no nulo en la ventana, el minimizador es unico.</p>
                        ${formulaBox(
                            `${sup('&beta;','&#x0302;')}<sub>t,&lambda;,W</sub> = &sum; &lambda;<sup>t&minus;k</sup> v(k) v(k&minus;1) &frasl; &sum; &lambda;<sup>t&minus;k</sup> v(k&minus;1)<sup>2</sup>`,
                            `"Beta sombrero se calcula como el cociente entre la suma ponderada de los productos cruzados de valores consecutivos, y la suma ponderada de los cuadrados de los valores previos, ambas evaluadas dentro de la ventana W con pesos exponenciales lambda."`,
                            `"Este resultado es central porque muestra que nuestro operador tiene solucion cerrada — no necesita iteracion numerica. Es un cociente de dos productos punto ponderados. La prueba reposa en la convexidad estricta de la funcional cuadratica."`
                        )}
                        ${keyBox('Relacion con OLS y GLS', `
                            ${pill('TCROC &equiv; OLS', '#1a5276')} cuando &lambda;=1: coincide con minimos cuadrados ordinarios.<br>
                            ${pill('ETCROC &equiv; GLS', '#8e44ad')} cuando &lambda;&lt;1: coincide con minimos cuadrados generalizados.<br>
                            El Teorema de Gauss-Markov generalizado (Aitken, 1936) garantiza que es BLUE (Best Linear Unbiased Estimator).
                        `)}
                        `)
                },
                {
                    title: '4.3 — Consistencia Asintotica',
                    content: dojoCard('Teorema de Consistencia', 'proof', '#27ae60, #1e8449',
                        `<p><b>Teorema:</b> Bajo un modelo AR(1) estacionario, cuando W &rarr; &infin;, el estimador converge al valor verdadero.</p>
                        ${formulaBox(
                            `${sup('&beta;','&#x0302;')}<sub>t,&lambda;,W</sub> &xrarr;<sup>p</sup> &beta;* &nbsp;&nbsp; y &nbsp;&nbsp; ${sub('&alpha;','t,&lambda;,W')} &xrarr;<sup>p</sup> &beta;* &minus; 1`,
                            `"Beta sombrero converge en probabilidad al verdadero beta estrella conforme la ventana W crece hacia infinito, y en consecuencia alfa converge a beta estrella menos uno."`,
                            `"La consistencia asintotica valida que, con suficientes datos, nuestro estimador se acerca arbitrariamente al valor verdadero. La prueba usa la Ley de Grandes Numeros para sucesiones ponderadas estacionarias y el Lema de Slutsky para manejar el cociente."`
                        )}
                        ${keyBox(icon(icons.warning, '#c0392b', 16) + ' Nota sobre estacionariedad', `
                            Las series economicas como el PIB suelen tener &beta;* &asymp; 1 (raiz unitaria).
                            Sin embargo, el <b>operador &alpha;<sub>t</sub></b> actua como filtro de diferenciacion local,
                            y la serie resultante {&alpha;<sub>t</sub>} si es generalmente estacionaria.
                            Se verifica empiricamente con test ADF (p &lt; 0.01) en el Capitulo 7.
                        `)}
                        `)
                },
                {
                    title: '4.4 — Estabilidad de Lipschitz',
                    content: dojoCard('Lema de Estabilidad', 'theorem', '#d35400, #e67e22',
                        `<p><b>Lema:</b> Perturbaciones acotadas en la serie producen desviaciones controladas en la tasa &alpha;.</p>
                        ${formulaBox(
                            `|&alpha;'<sub>t,&lambda;,W</sub> &minus; ${sub('&alpha;','t,&lambda;,W')}| &le; C<sub>t</sub> &middot; &epsilon;`,
                            `"La diferencia absoluta entre las tasas alfa de la serie perturbada y la original esta acotada por una constante C sub t multiplicada por la magnitud de la perturbacion epsilon."`,
                            `"Este resultado es el Axioma 4 hecho realidad: el operador es robusto ante ruido. Si los datos tienen pequenios errores de medicion, la discretizacion posterior no producira resultados espurios. La prueba usa la formula del cociente y la desigualdad de Cauchy-Schwarz."`
                        )}
                        `)
                },
                {
                    title: '4.5 — Complejidad Algoritmica',
                    content: dojoCard('Complejidad Computacional', 'tools', '#2c3e50, #34495e',
                        dojoTable(
                            ['Metodo', 'Complejidad', 'Ventaja TCROC'],
                            [
                                ['TCROC / ETCROC', 'O(T)', 'Solucion cerrada, lineal'],
                                ['TCROCM / ETCROCM', 'O(T &middot; W)', 'Sin iteracion'],
                                ['MLE (Hamilton)', 'O(T&sup2;) &ndash; O(T&sup3;)', '<b>TCROC es mucho mas rapido</b>'],
                                ['ARIMA', 'O(T&sup2;)', '<b>TCROC no requiere iteracion</b>'],
                                ['Redes Neuronales', 'O(T &middot; L)', 'TCROC no necesita entrenamiento']
                            ]
                        ) +
                        keyBox('Implementacion recursiva ETCROC', `
                            ETCROC admite calculo incremental O(1) por observacion:<br>
                            ${m('S₁(t) = &lambda; S₁(t&minus;1) + v(t)v(t&minus;1)')}<br>
                            ${m('S₂(t) = &lambda; S₂(t&minus;1) + v(t&minus;1)²')}
                        `)
                    )
                }
            ]
        },

        // ─────────── CAPITULO 5: TCROC-MARKOV ──────────────
        {
            title: '5. Integracion TCROC con Cadenas de Markov',
            items: [
                {
                    title: '5.1 — Funcion de Cuantizacion &pi;',
                    content: dojoCard('Discretizacion de Estados', 'layers', '#8e44ad, #6c3483',
                        `<p>La funcion &pi; mapea la tasa continua &alpha;<sub>t</sub> a un estado discreto S<sub>t</sub>.</p>
                        ${formulaBox(
                            `S<sub>t</sub> = &pi;(&alpha;<sub>t,&lambda;,W</sub>)`,
                            `"El estado S en el tiempo t se obtiene aplicando la funcion de cuantizacion pi a la tasa alfa."`,
                            `"La cuantizacion es el puente entre el mundo continuo del operador TCROC y el mundo discreto de las cadenas de Markov. Usamos K-Means en lugar de umbrales fijos porque adapta los puntos de corte a la distribucion empirica de cada serie."`
                        )}
                        ${dojoTable(
                            ['Estado', 'Umbral (teorico)', 'Interpretacion'],
                            [
                                ['s₁', '&alpha; &gt; 0.05', 'Crecimiento fuerte'],
                                ['s₂', '0 &lt; &alpha; &le; 0.05', 'Crecimiento moderado'],
                                ['s₃', '&minus;0.05 &le; &alpha; &le; 0', 'Decrecimiento leve'],
                                ['s₄', '&alpha; &lt; &minus;0.05', 'Decrecimiento severo']
                            ]
                        )}
                        ${keyBox('En la practica: K-Means', `Los umbrales fijos &plusmn;0.05 son teoricos.
                        En los capitulos empiricos, los umbrales se determinan <b>endogenamente por K-Means</b>,
                        adaptandose a la distribucion observada de cada serie.`)}
                        `)
                },
                {
                    title: '5.2 — Estructura Markoviana de Primer Orden',
                    content: dojoCard('Teorema Markoviano', 'markov', '#2c3e50, #1a252f',
                        `<p><b>Teorema:</b> La secuencia {S<sub>t</sub>} satisface la propiedad de Markov de primer orden.</p>
                        ${formulaBox(
                            `P(S<sub>t+1</sub>=s<sub>j</sub> | S<sub>t</sub>=s<sub>i</sub>, S<sub>t&minus;1</sub>, ...) = P(S<sub>t+1</sub>=s<sub>j</sub> | S<sub>t</sub>=s<sub>i</sub>) = P<sub>ji</sub>`,
                            `"La probabilidad de estar en el estado s_j en t+1, dado todo el historial pasado, depende solamente del estado actual s_i."`,
                            `"La prueba procede en tres pasos: primero, &alpha;<sub>t</sub> depende funcionalmente de exactamente W+1 valores (dependencia acotada). Segundo, bajo AR(1) estacionario, el vector bloque z<sub>t</sub> es Markoviano. Tercero, como &pi; es determinista, la Markovianidad se proyecta al proceso discreto."`
                        )}
                        `)
                },
                {
                    title: '5.3 — &phi;-Mixing y Convergencia Ergodica',
                    content: dojoCard('Propiedades Asintoticas', 'chart', '#27ae60, #1e8449',
                        `${formulaBox(
                            `&phi;(n) &le; C<sub>&phi;</sub> &middot; &rho;<sup>n</sup> &nbsp;&nbsp; &forall; n &ge; 1`,
                            `"El coeficiente de mezcla phi decae exponencialmente con el numero de pasos n, a una tasa rho menor que 1."`,
                            `"La propiedad de &phi;-mixing garantiza que la cadena 'olvida' su pasado a tasa geometrica. Es crucial para la validez de los estimadores asintoticos. El gap espectral &gamma; = 1 &minus; |&lambda;₂| cuantifica la velocidad."`
                        )}
                        ${keyBox('Normalidad Asintotica de P&#x0302;', `
                            Cada entrada de la matriz de transicion estimada es asintoticamente normal:<br>
                            ${m('√T (&hat;P<sub>ij</sub> &minus; P<sub>ij</sub>) &xrarr; N(0, P<sub>ij</sub>(1&minus;P<sub>ij</sub>)/&pi;<sub>j</sub>)')}<br>
                            Esto permite construir intervalos de confianza para las probabilidades de transicion.
                        `)}
                        `)
                },
                {
                    title: '5.4 — Cota del Error de Prediccion',
                    content: dojoCard('Error Cuadratico Medio', 'data', '#c0392b, #922b21',
                        `${formulaBox(
                            `ECM(v&#x0302;<sub>T+1</sub>) = &sigma;&sup2;<sub>&epsilon;</sub> + C(&lambda;,W) / W<sub>eff</sub> + o(W<sub>eff</sub><sup>&minus;1</sup>)`,
                            `"El error cuadratico medio de prediccion se descompone en la varianza irreducible del ruido mas un termino que decrece inversamente con el tamanio efectivo de muestra."`,
                            `"Esta descomposicion revela el trade-off fundamental: &sigma;&sup2;<sub>&epsilon;</sub> es irreducible (ruido inherente), mientras que el segundo termino es el error de estimacion que decrece con W<sub>eff</sub>. El tamanio efectivo W<sub>eff</sub> = (1&minus;&lambda;<sup>W</sup>)/(1&minus;&lambda;) generaliza la nocion de tamanio de muestra cuando hay pesos exponenciales."`
                        )}
                        `)
                }
            ]
        },

        // ─────────── CAPITULO 6: MODELO HIBRIDO NNLS ──────────────
        {
            title: '6. Modelo Hibrido TCROC-Markov con NNLS',
            items: [
                {
                    title: '6.1 — Problema de Optimizacion NNLS',
                    content: dojoCard('Estimacion de la Matriz de Transicion', 'formula', '#d35400, #e67e22',
                        `<p>El corazon de la estimacion: encontrar P&#x0302; que sea estocastica por construccion.</p>
                        ${formulaBox(
                            `P&#x0302; = argmin<sub>P&ge;0</sub> &Vert;X₁ &minus; P X₀&Vert;<sub>F</sub>&sup2; &nbsp;&nbsp; s.a. &nbsp;&nbsp; <b>1</b><sup>T</sup> P = <b>1</b><sup>T</sup>`,
                            `"P sombrero es la matriz que minimiza la norma de Frobenius al cuadrado del error entre los estados siguientes X₁ y la prediccion PX₀, sujeta a que todas las entradas sean no negativas y cada columna sume uno."`,
                            `"La ventaja clave de NNLS sobre OLS es que GARANTIZA por construccion una matriz estocastica valida: entradas no negativas y columnas que suman uno. OLS sin restricciones puede producir probabilidades negativas."`
                        )}
                        ${keyBox('Vectorizacion via Kronecker', `
                            El truco algebraico clave: transformar el problema matricial en uno vectorial:<br>
                            ${pill('vec(X₁) = (X₀ᵀ ⊗ Iₙ) vec(P&#x0302;)', '#d35400')}<br>
                            Usando la identidad vec(ABC) = (C<sup>T</sup> ⊗ A) vec(B), permite aplicar el solver NNLS estandar (Lawson & Hanson, 1995).
                        `)}
                        `)
                },
                {
                    title: '6.2 — Algoritmo SRep',
                    content: dojoCard('Implementacion Constructiva', 'tools', '#2c3e50, #34495e',
                        `<p>El Algoritmo SRep formaliza la estimacion de P&#x0302; paso a paso.</p>
                        ${formulaBox(
                            `c&#x0302; = argmin<sub>c&ge;0</sub> &Vert; [A; wC] c &minus; [b; w<b>1</b><sub>N</sub>] &Vert;&sup2;`,
                            `"c sombrero minimiza la norma del sistema aumentado, donde la primera parte captura el ajuste a los datos y la segunda (ponderada por w grande) fuerza que las columnas sumen uno."`,
                            `"El peso w actua como un multiplicador de Lagrange suave: un w muy grande (tipicamente 10⁶) hace que la violacion de la restriccion de suma unitaria sea extremadamente costosa, forzando la estocasticidad."`
                        )}
                        ${dojoTable(
                            ['Paso', 'Descripcion'],
                            [
                                ['1', 'Codificar estados en one-hot: s₁ → [1,0,0,0]ᵀ'],
                                ['2', 'Construir X₀ (estados actuales) y X₁ (siguientes)'],
                                ['3', 'Formar A = X₀ᵀ ⊗ Iₙ (Kronecker)'],
                                ['4', 'Construir sistema aumentado con restriccion w·C'],
                                ['5', 'Resolver NNLS: min&Vert;A&#x0303;c &minus; b&#x0303;&Vert;&sup2; con c &ge; 0'],
                                ['6', 'Reconstruir P&#x0302; = vec⁻¹(c&#x0302;) y normalizar columnas']
                            ]
                        )}
                        `)
                },
                {
                    title: '6.3 — Validacion: PIB Honduras',
                    content: dojoCard('Ejemplo Numerico Real', 'chart', '#27ae60, #1e8449',
                        `<p>Aplicacion al PIB per capita en Lempiras (2000-2023), 22 transiciones observadas.</p>
                        ${keyBox('Matriz de Transicion Estimada', `
                            <div style="font-family:'Courier New',Consolas,monospace; text-align:center; padding:8px;">
                            P&#x0302; =<br>
                            | 0.50 &nbsp; 0.11 &nbsp; 0.14 &nbsp; 0.00 |<br>
                            | 0.25 &nbsp; 0.67 &nbsp; 0.14 &nbsp; 0.00 |<br>
                            | 0.00 &nbsp; 0.22 &nbsp; 0.71 &nbsp; 1.00 |<br>
                            | 0.25 &nbsp; 0.00 &nbsp; 0.00 &nbsp; 0.00 |
                            </div>
                            Lectura por columnas: desde s₁ (contraccion), hay 50% de persistencia, 25% de ir a estabilidad, 25% de rebote fuerte.
                        `)}
                        ${keyBox('Hallazgo clave: El estado s₄ es transitorio', `
                            El crecimiento fuerte (s₄) ocurrio <b>una sola vez</b> (2022, rebote post-COVID).
                            La columna 4 muestra P(s₃|s₄) = 100%: siempre se modera rapidamente.
                            Esta anomalia transitoria no representa dinamica estructural sostenible.
                        `)}
                        `)
                }
            ]
        },

        // ─────────── CAPITULO 7: COMBUSTIBLES ──────────────
        {
            title: '7. Deteccion y Pronostico de Regimenes de Combustibles',
            items: [
                {
                    title: '7.1 — Fenomeno de Degeneracion del Modelo',
                    content: dojoCard('Descubrimiento Critico', 'bolt', '#c0392b, #922b21',
                        `<p><b>Teorema (Degeneracion por sobre-suavizado):</b> Cuando W = T, el operador es constante.</p>
                        ${formulaBox(
                            `W = T &rArr; &alpha;<sub>t</sub>(T) = &alpha;&#x0304; &forall; t &rArr; Var(&alpha;<sub>t</sub>) = 0 &rArr; K<sub>eff</sub> = 1`,
                            `"Si la ventana W iguala la longitud T de la serie, alfa es identico en todos los tiempos, su varianza es cero, K-Means asigna todo a un solo cluster, y la matriz de transicion degenera en la identidad."`,
                            `"Este es un hallazgo original de la tesis. Explica por que una busqueda irrestricta de hiperparametros produce metricas artificialmente buenas pero modelos inutiles. La restriccion W &le; 52 semanas (un ciclo anual) previene la degeneracion y tiene justificacion economica."`
                        )}
                        `)
                },
                {
                    title: '7.2 — Hiperparametros Optimos',
                    content: dojoCard('Resultados de Optimizacion', 'data', '#2e86c1, #1a5276',
                        dojoTable(
                            ['Serie', 'W*', '&lambda;*', 'K*', 'Exactitud', 'RMSE'],
                            [
                                ['Regular', '50', '0.99', '3', '<b>85.10%</b>', '0.8394'],
                                ['Super', '52', '0.99', '4', '62.78%', '0.9769'],
                                ['Diesel', '50', '0.97', '3', '71.56%', '1.0816'],
                                ['Kerosene', '52', '0.98', '5', '68.20%', '1.1714']
                            ]
                        ) +
                        keyBox('Interpretacion', `
                            ${pill('W &asymp; 50-52', '#1a5276')}: Ventanas largas (~1 anio) capturan tendencias de largo plazo.<br>
                            ${pill('&lambda; &asymp; 0.97-0.99', '#27ae60')}: Cercano a pesos uniformes dentro de la ventana.<br>
                            ${pill('K varia de 3 a 5', '#c0392b')}: Jerarquia de complejidad &rarr; Regular (simple) vs. Kerosene (complejo).
                        `)
                    )
                },
                {
                    title: '7.3 — Propiedades Espectrales',
                    content: dojoCard('Analisis Espectral', 'eye', '#8e44ad, #6c3483',
                        `${formulaBox(
                            `t<sub>mix</sub>(&epsilon;) = ⌈ ln(1/&epsilon;) / &gamma; ⌉`,
                            `"El tiempo de mezcla es el techo del logaritmo de uno sobre epsilon, dividido por el gap espectral gamma."`,
                            `"El gap espectral &gamma; = 1 &minus; |&lambda;₂| mide que tan rapido la cadena olvida su estado inicial. Un gap pequenio significa alta inercia del mercado. El Kerosene tiene &gamma; = 0.021 (el menor), con tiempo de mezcla ~47 semanas."`
                        )}
                        ${dojoTable(
                            ['Metrica', 'Regular', 'Diesel', 'Super', 'Kerosene'],
                            [
                                ['|&lambda;₂|', '0.963', '0.960', '0.961', '<b>0.979</b>'],
                                ['Gap &gamma;', '0.037', '0.040', '0.039', '<b>0.021</b>'],
                                ['t<sub>mix</sub> (sem)', '~27', '~25', '~26', '<b>~47</b>']
                            ]
                        )}
                        `)
                },
                {
                    title: '7.4 — Superioridad sobre Alternativas',
                    content: dojoCard('Benchmark Comparativo', 'star', '#d4ac0d, #b7950b',
                        `<p>TCROC-Markov (K-Means) supera estadisticamente a cuantiles fijos y MS-AR clasico.</p>
                        ${keyBox('Resultados clave', `
                            ${pill('Regular: 85.1% exactitud', '#27ae60')} — La serie mas predecible (K=3, estructura simple).<br>
                            ${pill('Kerosene: 68.2%', '#c0392b')} — La mas dificil (K=5, mayor complejidad estructural).<br>
                            ${pill('Superior a MS-AR', '#8e44ad')} — MS-AR fallo en 3 de 4 series por inestabilidad numerica.<br>
                            Tests de Diebold-Mariano con correccion de Holm-Bonferroni confirman significancia estadistica (p &lt; 0.05).
                        `)}
                        `)
                }
            ]
        },

        // ─────────── CAPITULO 8: EXTENSION NO LINEAL ──────────────
        {
            title: '8. Extension No Lineal — Computacion de Reservorio (SSRC)',
            items: [
                {
                    title: '8.1 — Ecuacion Echo State Network (ESN)',
                    content: dojoCard('Mapa de Estado del Reservorio', 'network', '#1a5276, #2e86c1',
                        `${formulaBox(
                            `<b>h</b><sub>t</sub> = &sigma;(<b>W</b><sub>in</sub> <b>u</b><sub>t</sub> + <b>W</b><sub>res</sub> <b>h</b><sub>t&minus;1</sub>)`,
                            `"El vector de estado h en el tiempo t se obtiene aplicando la funcion de activacion sigma al producto de la matriz de entrada por la senial u_t mas el producto de la matriz de reservorio por el estado previo."`,
                            `"El reservorio es una red neuronal recurrente cuyas matrices internas (W<sub>in</sub> y W<sub>res</sub>) se generan aleatoriamente y NO se entrenan. Solo la capa de lectura W<sub>out</sub> se estima. Esto evita backpropagation through time (BPTT)."`
                        )}
                        `)
                },
                {
                    title: '8.2 — Variante Leaky-ESN',
                    content: dojoCard('Integracion de Fuga', 'layers', '#27ae60, #1e8449',
                        `${formulaBox(
                            `<b>h</b><sub>t</sub> = (1&minus;a) <b>h</b><sub>t&minus;1</sub> + a &middot; &sigma;(<b>W</b><sub>in</sub> <b>u</b><sub>t</sub> + <b>W</b><sub>res</sub> <b>h</b><sub>t&minus;1</sub>)`,
                            `"El estado h_t es una mezcla convexa entre el estado previo (con peso 1-a) y la activacion no lineal del nuevo input (con peso a). El factor a controla la escala temporal."`,
                            `"Para mercados con alta persistencia (como combustibles regulados en Honduras), valores a &Lt; 1 enfatizan tendencias de largo plazo. Interpretar como discretizacion de Euler con constante de tiempo &tau; = 1/a: si a = 0.1, la memoria efectiva es ~10 semanas."`
                        )}
                        `)
                },
                {
                    title: '8.3 — Propiedad de Estado de Eco (ESP)',
                    content: dojoCard('Condicion de Estabilidad', 'theorem', '#c0392b, #922b21',
                        `<p><b>Teorema:</b> Si &rho;(<b>W</b><sub>res</sub>) &lt; 1, el reservorio posee la ESP.</p>
                        ${formulaBox(
                            `&rho;(<b>W</b><sub>res</sub>) &lt; 1 &rArr; &Vert;<b>h</b><sub>t</sub> &minus; <b>h</b>'<sub>t</sub>&Vert; &le; &Vert;<b>W</b><sub>res</sub>&Vert;<sup>t</sup> &Vert;<b>h</b>₀ &minus; <b>h</b>'₀&Vert; &rarr; 0`,
                            `"Si el radio espectral de la matriz de reservorio es menor que uno, la diferencia entre dos trayectorias con condiciones iniciales distintas decae exponencialmente a cero."`,
                            `"La ESP garantiza que la salida depende solo de la secuencia de entradas, no de la condicion inicial. Es el requisito fundamental para que el reservorio funcione como codificador de memoria."`
                        )}
                        `)
                },
                {
                    title: '8.4 — Teorema de Inclusion: TCROC-Markov ⊂ SSRC',
                    content: dojoCard('Resultado Central del Capitulo', 'star', '#d4ac0d, #b7950b',
                        `<p><b>Teorema:</b> TCROC-Markov es un caso degenerado del SSRC.</p>
                        ${keyBox('Condiciones de Degeneracion', `
                            ${pill('W<sub>res</sub> = 0', '#c0392b')} — Matriz de reservorio nula (sin recurrencia)<br>
                            ${pill('&sigma; = id', '#2e86c1')} — Activacion identidad (sin no linealidad)<br>
                            ${pill('a = 1', '#27ae60')} — Sin integracion de fuga<br>
                            ${pill('D = K', '#8e44ad')} — Dimension igual al numero de estados
                        `)}
                        ${keyBox('Consecuencia', `
                            Esto establece una <b>jerarquia formal de modelos</b>:<br>
                            TCROC &sub; TCROC-Markov &sub; TCROC-SSRC<br>
                            Cada nivel agrega capacidad expresiva. Por el Teorema de Aproximacion Universal (Grigoryeva & Ortega, 2018),
                            el SSRC puede aproximar <b>cualquier funcional causal continuo sobre secuencias</b>.
                        `)}
                        `)
                },
                {
                    title: '8.5 — Cota de Estabilidad del Pronostico',
                    content: dojoCard('Robustez ante Perturbaciones', 'theorem', '#1a5276, #154360',
                        `${formulaBox(
                            `&Vert;&delta;y&#x0302;<sub>t+1</sub>&Vert; &le; &Vert;W&#x0302;<sub>out</sub>&Vert; &middot; &Vert;W<sub>in</sub>&Vert; &middot; &epsilon; / (1 &minus; &rho;<sub>res</sub>)`,
                            `"La perturbacion en la salida esta acotada por la norma de la matriz de lectura, multiplicada por la norma de la entrada escalada por epsilon, dividido entre uno menos el radio espectral."`,
                            `"El denominador 1 &minus; &rho; actua como amplificador: cuanto mas cercano esta &rho; a 1, mayor es la sensibilidad. Sin embargo, la restriccion NNLS proporciona regularizacion implicita que la cota teorica no captura."`
                        )}
                        `)
                }
            ]
        },

        // ─────────── RESUMEN ESTRATEGICO ──────────────
        {
            title: '9. Resumen Estrategico para la Defensa',
            items: [
                {
                    title: 'Narrativa de la Tesis en 5 Minutos',
                    content: dojoCard('Hilo Conductor', 'brain', '#006644, #004d33',
                        `${keyBox('1. El Problema', 'Las series temporales economicas (PIB, combustibles) son no estacionarias y ruidosas. Los metodos clasicos (MS-AR, ARIMA) requieren optimizacion iterativa costosa y supuestos distribucionales fuertes.')}
                        ${keyBox('2. La Solucion (Cap. 4)', 'Definimos la familia TCROC: un operador con solucion analitica cerrada que transforma la serie en tasas de cambio estacionarias. Cuatro variantes jerarquicamente relacionadas, todas con propiedades demostradas.', '#1a5276')}
                        ${keyBox('3. La Integracion (Caps. 5-6)', 'Integramos TCROC con cadenas de Markov para modelar transiciones entre regimenes economicos. Usamos NNLS para estimar matrices estocasticas por construccion.', '#8e44ad')}
                        ${keyBox('4. La Validacion (Cap. 7)', 'Aplicamos a 4 series de combustibles hondurenios (400+ observaciones). Descubrimos el fenomeno de degeneracion (W&rarr;T) y lo resolvemos. Superamos estadisticamente a MS-AR y cuantiles. Regular: 85.1% exactitud.', '#27ae60')}
                        ${keyBox('5. La Extension (Cap. 8)', 'Generalizamos al SSRC (reservorio no lineal). Demostramos que TCROC-Markov es un caso particular degenerado. El SSRC es un aproximador universal — estrictamente mas poderoso.', '#c0392b')}
                        `)
                },
                {
                    title: 'Preguntas Frecuentes de la Defensa',
                    content: dojoCard('Anticipar las Preguntas', 'eye', '#c0392b, #922b21',
                        `${keyBox(icon(icons.warning, '#c0392b', 16) + ' ¿Por que TCROC y no ARIMA/MS-AR?', 'TCROC tiene solucion cerrada O(T), mientras ARIMA/MS-AR requieren iteracion O(T²&ndash;T³). Ademas, MS-AR fallo numericamente en 3 de 4 series de combustibles.', '#c0392b')}
                        ${keyBox(icon(icons.warning, '#d35400', 16) + ' ¿Por que K-Means y no umbrales fijos?', 'Los umbrales fijos son exogenos. K-Means adapta los puntos de corte a la distribucion empirica de cada serie. Superioridad demostrada con test de Diebold-Mariano.', '#d35400')}
                        ${keyBox(icon(icons.warning, '#8e44ad', 16) + ' ¿Que aporta NNLS sobre OLS?', 'OLS puede producir probabilidades de transicion negativas (inadmisibles). NNLS garantiza por construccion P<sub>ij</sub> &ge; 0 y &sum;P<sub>ij</sub> = 1.', '#8e44ad')}
                        ${keyBox(icon(icons.warning, '#006644', 16) + ' ¿Cual es la contribucion original?', '(1) La familia TCROC con 4 variantes y pruebas axiomaticas. (2) El fenomeno de degeneracion y su solucion. (3) El teorema de inclusion TCROC-Markov &sub; SSRC. (4) Validacion empirica integral con datos reales de Honduras.', '#006644')}
                        `)
                }
            ]
        }
    ];

    console.log('System: UNAH Tesis study module loaded.');
})();
