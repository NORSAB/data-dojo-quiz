/**
 * SICA / MOVE (Terralink) — MOOC 2: Adquisiciones y finanzas de vehículos eléctricos
 * Study Guide Module — 5 Modules + Síntesis de Fórmulas y Casos Prácticos
 * courseId: "terralink-mooc2"
 * Author: Antigravity (Claude Opus 4.6) | 2026-11-02 20:10 CST
 */
(function () {
    window.studyData = window.studyData || {};

    const icon = (path, color = 'currentColor', size = 20) =>
        `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${color}" style="vertical-align:middle;flex-shrink:0;"><path d="${path}"/></svg>`;

    const icons = {
        finance:  'M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z',
        shield:   'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
        check:    'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z',
        doc:      'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z',
        bolt:     'M7 2v11h3v9l7-12h-4l4-8z',
        chart:    'M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z',
        tools:    'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z',
        battery:  'M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z',
        warning:  'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z',
        globe:    'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z'
    };

    const dojoCard = (title, iconKey, content) => `
        <div style="
            border-radius: 14px;
            overflow: hidden;
            margin-bottom: 1.25rem;
            border: 1px solid var(--border-color, #e2e8f0);
            background: var(--bg-card, #ffffff);
        ">
            <div style="
                background: var(--primary-color, #3157d5);
                padding: 12px 18px;
                display: flex;
                align-items: center;
                gap: 10px;
            ">
                ${icon(icons[iconKey] || icons.bolt, '#ffffff', 20)}
                <span style="color: #ffffff; font-weight: 700; font-size: 1rem;">${title}</span>
            </div>
            <div style="padding: 16px 18px; line-height: 1.65; color: var(--text-color, #1e293b);">
                ${content}
            </div>
        </div>`;

    const keyBox = (title, body) => `
        <div style="
            background: var(--bg-surface, #f4f6f8);
            border: 1px solid var(--border-color, #e2e8f0);
            border-radius: 10px;
            padding: 12px 16px;
            margin: 10px 0;
        ">
            <div style="font-weight: 700; margin-bottom: 4px; color: var(--primary-color, #3157d5); font-size: 0.92rem;">
                ${title}
            </div>
            <div style="font-size: 0.9rem; color: var(--text-color, #1e293b);">
                ${body}
            </div>
        </div>`;

    const tableStyled = (headers, rows) => `
        <div style="overflow-x: auto; margin: 12px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 0.86rem;">
                <thead>
                    <tr style="background: var(--bg-surface, #f4f6f8); border-bottom: 2px solid var(--border-color, #cbd5e1);">
                        ${headers.map(h => `<th style="padding: 9px 12px; text-align: left; font-weight: 700; color: var(--text-color);">${h}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${rows.map((r, i) => `
                        <tr style="border-bottom: 1px solid var(--border-color, #e2e8f0); background: ${i % 2 === 0 ? 'transparent' : 'var(--bg-surface, #f8fafc)'};">
                            ${r.map((c, j) => `<td style="padding: 8px 12px; ${j === 0 ? 'font-weight: 600;' : ''}">${c}</td>`).join('')}
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>`;

    const formulaBox = (formula, explanation) => `
        <div style="
            background: var(--bg-surface, #f4f6f8);
            border: 1px solid var(--border-color, #cbd5e1);
            border-radius: 10px;
            padding: 14px 18px;
            margin: 10px 0;
        ">
            <div style="font-family: monospace; font-size: 1rem; font-weight: 700; text-align: center; padding: 8px; color: var(--primary-color, #3157d5);">
                ${formula}
            </div>
            <div style="font-size: 0.88rem; color: var(--text-color, #334155); margin-top: 6px;">
                ${explanation}
            </div>
        </div>`;

    window.studyData['terralink-mooc2'] = [
        // ─────────── MÓDULO 1 ──────────────
        {
            title: 'Módulo 1: Modelos de Financiamiento y Asistencia Técnica',
            items: [
                {
                    title: '1.1 — Comparativa de Modelos de Adquisición y Financiamiento',
                    content: dojoCard('Cinco Esquemas para Incorporar Vehículos Eléctricos', 'finance',
                        `<p>La incorporación de vehículos eléctricos (VE) en instituciones públicas y privadas de la región SICA exige evaluar no solo el precio de compra, sino la distribución de riesgos (batería, valor residual, obsolescencia y mantenimiento) y la capacidad presupuestaria.</p>
                        ${tableStyled(
                            ['Modelo', 'Propiedad del Activo', 'Mantenimiento y Seguros', 'Riesgo Batería / Valor Residual', 'Cuándo Conviene'],
                            [
                                ['Compra directa', 'Institución desde el inicio', 'Se contratan o gestionan por separado', '100% asumido por la institución', 'Alta liquidez inicial, taller propio y horizonte largo de posesión'],
                                ['Leasing financiero', 'Arrendador; opción de compra al final', 'Generalmente a cargo del usuario', 'Asumido por la institución si ejerce la compra', 'Distribuir CAPEX en varios años con objetivo de incorporar el activo al patrimonio'],
                                ['Leasing operativo', 'Proveedor / arrendador', 'Pueden contratarse aparte o parcialmente', 'Mayor proporción en el arrendador', 'Renovación periódica de flota sin interés en propiedad final'],
                                ['Renting', 'Proveedor de renting', 'Integrados en una cuota periódica única (incluye reemplazo)', 'Transferido al proveedor (sujeto a límite de km/año)', 'Restricción de CAPEX, sin taller propio de alto voltaje y alta exigencia de disponibilidad (p. ej. >=95%)'],
                                ['Asociación Público-Privada (APP) / FaaS', 'Sociedad de propósito especial (SPV) o concesionario', 'Integrados en el contrato de largo plazo', 'Compartido / transferido según matriz contractual', 'Proyectos de gran escala (p. ej. >=50 unidades o buses) con horizonte de 10–15 años']
                            ]
                        )}
                        ${keyBox('Caso Instituto Regional (12 VE)', 'Con un tope inicial de USD 150,000 (frente a USD 516,000 de compra directa), límite anual de USD 125,000, plazo máximo de 8 meses para operar (descarta APP de 18 meses y 50 unidades), recorrido de 25,000 km/año y sin taller propio, el <b>Renting</b> (USD 10,300/mes = USD 123,600/año, límite 30,000 km/año, todo incluido) complementado con <b>USD 75,000 de cooperación técnica no reembolsable</b> para cargadores, estudios eléctricos y capacitación es la estructura óptima.')}`
                    )
                },
                {
                    title: '1.2 — Financiamiento Multilateral, Fondos Climáticos y Cooperación Técnica',
                    content: dojoCard('Instrumentos Internacionales y Canales de Acceso en SICA', 'globe',
                        `<p>El financiamiento internacional no reemplaza al crédito comercial, sino que lo complementa reduciendo riesgos y mejorando tasas, plazos o períodos de gracia.</p>
                        ${tableStyled(
                            ['Instrumento', 'Función Principal', 'Aplicación Típica en Movilidad Eléctrica'],
                            [
                                ['Préstamo concesional', 'Tasa menor, mayor plazo o período de gracia frente al mercado', 'Compra de flotas públicas/privadas e infraestructura de recarga con impacto climático'],
                                ['Subvención (Grant)', 'Recursos no reembolsables sujetos a convenio y metas', 'Estudios de factibilidad, pilotos (p. ej. UE/PNUD en Belice), cargadores y capacitación'],
                                ['Garantía parcial de crédito', 'Cubre parte del riesgo crediticio ante la banca local', 'Empresas u operadores con corto historial operativo o sin colateral suficiente'],
                                ['Financiamiento combinado (Blended Finance)', 'Mezcla recursos concesionales/donaciones con capital comercial', 'Movilizar inversión privada o estructurar Fondos de Renovación de Flota Verde'],
                                ['Cooperación técnica', 'Estudios, metodologías, pliegos y fortalecimiento institucional', 'Línea base de emisiones, diseño eléctrico, TCO y preparación de proyectos (Readiness / PPF)']
                            ]
                        )}
                        ${keyBox('Canales de Acceso y Caso Belice (CCAD, 2026)', '<ul><li><b>Fondo Verde para el Clima (GCF):</b> Acceso mediante Entidades Acreditadas y carta de no objeción de la Autoridad Nacional Designada (NDA). Incluye apoyo <i>Readiness</i> y <i>Project Preparation Facility (PPF)</i>.</li><li><b>Fondo para el Medio Ambiente Mundial (GEF-8):</b> Acceso mediante Agencias Implementadoras con aval del Punto Focal Operativo nacional.</li><li><b>Caso Belice:</b> Evolucionó en 3 etapas: (1) Donación UE/PNUD (€4.5M) para probar buses urbanos (ahorro de 41% por km frente a diésel), (2) Cooperación técnica SICA/Taiwán para el estudio de factibilidad, y (3) Estructura financiera (préstamo bilateral para 75 buses interurbanos + propuesta de FaaS para pequeños operadores).</li></ul>')}`
                    )
                }
            ]
        },

        // ─────────── MÓDULO 2 ──────────────
        {
            title: 'Módulo 2: Incentivos Fiscales y Subvenciones Regionales',
            items: [
                {
                    title: '2.1 — Metodología de Cálculo: Tributo por Tributo',
                    content: dojoCard('Cómo Cuantificar el Ahorro Fiscal Real sin Sobreestimar', 'finance',
                        `${formulaBox(
                            'Ahorro Fiscal Total = Σ (Monto del Tributo_i sin incentivo × % Exoneración_i vigente)',
                            'Regla fundamental: El porcentaje de exoneración SIEMPRE se aplica al tributo específico que cubre la ley, NUNCA al precio total o valor CIF del vehículo.'
                        )}
                        <p><b>Caso Comparativo en Tres Países (Valor CIF = US$25,000; Arancel 10% = US$2,500; Selectivo 15% = US$3,750; IVA 13% = US$3,250; Total tributos sin incentivo = US$9,500; Costo sin incentivo = US$34,500):</b></p>
                        ${tableStyled(
                            ['País', 'Régimen Aplicado (Corte Sep 2026)', 'Tributos Pagados', 'Ahorro / Unidad', 'Costo Final / Unidad', 'Trámite Crítico'],
                            [
                                ['Costa Rica', 'Ley 9518 / 10209: 75% exoneración en Aduanero y Selectivo; IVA tarifa reducida 4% en 2026', 'US$2,562.50 (625 + 937.50 + 1,000)', 'US$6,937.50', 'US$27,562.50', 'Autorización previa en sistema EXONET'],
                                ['El Salvador', 'Exención 100% DAI, IVA importación y 1.ª matrícula para VE nuevos', 'US$0.00', 'US$9,500.00', 'US$25,000.00', 'Acuerdo ejecutivo del Ministerio de Hacienda (hasta 60 días hábiles tras nota de salida)'],
                                ['República Dominicana', 'Ley 103-13: Reducción del 50% en derechos e impuestos de importación y 1.ª placa', 'US$4,750.00', 'US$4,750.00', 'US$29,750.00', 'Constancia del fabricante ante DGA; en compra local el ITBIS de venta local no se reduce']
                            ]
                        )}`
                    )
                },
                {
                    title: '2.2 — Reglas Administrativas y Tres Ajustes Antes de Presupuestar',
                    content: dojoCard('Trámites Nacionales y Prevención del Doble Conteo', 'shield',
                        `${keyBox('1. Naturaleza Jurídica de la Institución (Ahorro Incremental)', 'Si la institución pública ya estaba exenta de un tributo por su propia ley orgánica (p. ej. el Estado de Guatemala frente al IPRIMA), el incentivo de movilidad eléctrica no genera ahorro adicional en ese impuesto. En el flujo incremental su valor es <b>cero</b>.')}
                        ${keyBox('2. Evitar el Doble Conteo en Cotizaciones Locales', 'Si la oferta del proveedor indica "precio con exoneraciones aplicadas", el beneficio fiscal ya está descontado del precio. Restarlo nuevamente en la línea de impuestos del TCO o sumarlo como ingreso en el VAN duplica el ahorro.')}
                        ${keyBox('3. Vigencia Temporal y Escalonamiento', 'El porcentaje que vale es el vigente en la fecha en que se liquida el tributo, no cuando se planifica. En Costa Rica, la exoneración del impuesto a la propiedad es de 20% en 2026 y pasa a 0% desde 2027. En Nicaragua, el formato de exoneración en VUCEN se tramita por cada embarque y tiene vigencia de un solo mes.')}
                        ${keyBox('4. Tránsito vs. Tributos y Experiencia de Chile', 'La placa verde/distintiva y la revisión técnica aprobada no sustituyen la resolución fiscal o aduanera. En Chile, además de priorizar el transporte público, la <b>Ley de Eficiencia Energética</b> impulsó la oferta de modelos y redujo precios fijando metas de rendimiento a los importadores con bajo costo fiscal para el Estado.')}`
                    )
                }
            ]
        },

        // ─────────── MÓDULO 3 ──────────────
        {
            title: 'Módulo 3: Negociación con Proveedores de VE y Cargadores',
            items: [
                {
                    title: '3.1 — Sondeo de Mercado y Especificaciones Técnicas Basadas en la Operación',
                    content: dojoCard('De la Necesidad Operativa al Pliego de Condiciones', 'tools',
                        `<p>La preparación de una compra institucional sigue una secuencia estricta: <b>(1) Analizar la operación, (2) Conocer el mercado y (3) Traducir las necesidades en requisitos verificables.</b></p>
                        ${tableStyled(
                            ['Dimensión', 'Error Frecuente', 'Criterio Técnico Correcto'],
                            [
                                ['Autonomía requerida', 'Usar solo el promedio diario o exigir la batería más grande del mercado', 'Definir la autonomía útil para la ruta más exigente (p. ej. 150 km) considerando topografía, carga, climatización, degradación y reserva operativa'],
                                ['Infraestructura y conectores', 'Comprar vehículos y dejar los cargadores para otra etapa', 'Planificar vehículos y cargadores en conjunto; verificar capacidad eléctrica del sitio y compatibilidad de conectores con recarga externa'],
                                ['Identificación del proveedor', 'Asumir que cualquier vendedor tiene respaldo de fábrica', 'Distinguir entre distribuidor/representante autorizado (con aval vigente del fabricante) e importador independiente, verificando taller, herramientas HV y repuestos en el país']
                            ]
                        )}`
                    )
                },
                {
                    title: '3.2 — Garantías, Repuestos Críticos, SLA y Pagos por Hitos',
                    content: dojoCard(' blindaje Contractual y Caso DINSET (10 VE + 11 Cargadores)', 'check',
                        `${keyBox('Garantía de Batería de Tracción vs. Garantía General', 'No basta con ofrecer "8 años o 160,000 km". Debe especificarse por escrito: (1) <b>SoH mínimo garantizado</b> (p. ej. 70%), (2) <b>método técnico de medición</b> del SoH, (3) entidad responsable con equipo de diagnóstico en el país, y (4) solución (reparación de módulos o reemplazo) y plazos de respuesta.')}
                        ${keyBox('Repuestos Críticos y SLA Postventa', 'Un <b>repuesto crítico</b> es aquel cuya falla inmoviliza el vehículo (electrónica de potencia, OBC, módulo de carga, gestión térmica). No todos deben estar físicamente en bodega local, pero deben tener un <b>plazo máximo vinculante de entrega</b> y vehículo de reemplazo. Como referencia, la licitación de buses de Santiago (2020) exigió stock de repuestos críticos por el 10% del valor de compra y respuesta correctiva <= 24 h hábiles.')}
                        ${keyBox('Caso DINSET (US$428,000 -> US$418,000)', 'Ante un presupuesto máximo de US$420,000, la institución negoció por volumen de paquete (10 VE + 11 cargadores AC 11 kW + mantenimiento 8 años) bajando a US$418,000 <b>sin eliminar mantenimiento ni repuestos</b>, y vinculando los pagos a <b>hitos verificables</b> de entrega, instalación, pruebas y aceptación definitiva.')}`
                    )
                }
            ]
        },

        // ─────────── MÓDULO 4 ──────────────
        {
            title: 'Módulo 4: Vida Útil de Baterías y Costos de Reemplazo',
            items: [
                {
                    title: '4.1 — Químicas de Ion-Litio, Degradación (SoC vs. SoH) y Operación',
                    content: dojoCard('Comparativa LFP, NMC y NCA y Factores de Envejecimiento', 'battery',
                        `${tableStyled(
                            ['Química', 'Densidad Energética (Pack)', 'Vida en Ciclos', 'Umbral Térmico', 'Aplicación Institucional Recomendada'],
                            [
                                ['LFP (Litio-Hierro-Fosfato)', '120 – 160 Wh/kg', '2,000 – 4,000+ ciclos', '~270 °C (muy alta estabilidad)', 'Flotas de uso intensivo diario, buses eléctricos (>90% del mercado global) y climas cálidos de la región SICA'],
                                ['NMC (Níquel-Manganeso-Cobalto)', '150 – 220 Wh/kg', '1,000 – 2,000 ciclos', '~210 °C', 'Vehículos livianos y utilitarios que requieren mayor autonomía con peso contenido'],
                                ['NCA (Níquel-Cobalto-Aluminio)', '160 – 220 Wh/kg', '800 – 1,500 ciclos', '~150 °C (menor estabilidad)', 'Menor vida en ciclos; menos favorable para flotas con cargas intensivas diarias en clima cálido']
                            ]
                        )}
                        ${keyBox('SoC vs. SoH y Mecanismos de Degradación', '<ul><li><b>SoC (State of Charge):</b> Qué porcentaje de la capacidad actual disponible está lleno en ese instante.</li><li><b>SoH (State of Health):</b> Qué porcentaje de la capacidad original conserva la batería frente a cuando era nueva.</li><li><b>Mecanismos físicos:</b> Crecimiento de la interfase de electrolito sólido (SEI), depósito de litio metálico (lithium plating) y daño mecánico en los electrodos.</li><li><b>Factores que aceleran la pérdida:</b> Calor ambiental (acelera el envejecimiento calendario incluso con el vehículo estacionado), permanencia prolongada en SoC muy altos (~100%) o muy bajos, y uso habitual innecesario de carga rápida DC (puede duplicar la degradación anual frente a carga AC nocturna).</li></ul>')}`
                    )
                },
                {
                    title: '4.2 — Cálculo del Reemplazo en el TCO y Convenio de Basilea',
                    content: dojoCard('Umbral Operativo, Valor Presente y Gestión Final de la Batería', 'shield',
                        `${formulaBox(
                            'SoH Mínimo Requerido = [ Ruta Exigente / (1 − Margen de Reserva) ] ÷ Autonomía Original',
                            'En el Caso Integrador (batería 60 kWh, consumo 0.20 kWh/km -> autonomía original 300 km; ruta 190 km con 20% de reserva -> requiere 237.5 km): SoH mínimo = 237.5 / 300 = 79.2%. Con degradación de 3.5%/año, al final del año 6 el SoH baja a 79.0% (< 79.2%), activando el reemplazo en el año 6.'
                        )}
                        ${formulaBox(
                            'VP(Reemplazo) = Costo Completo de Reemplazo ÷ (1 + r)^t',
                            'En la Ficha de Reemplazo: Costo completo = USD 10,700 (pack USD 7,920 + instalación/BMS USD 1,100 + logística/tributos USD 1,380 + retiro USD 300). Con crédito de segunda vida y descuento al año 6, el impacto descontado neto se incorpora al TCO (p. ej. USD 5,728). La garantía de 8 años / 70% SoH NO cubre este reemplazo porque al año 6 la batería conserva 79% (> 70%).'
                        )}
                        ${keyBox('Gestión al Final de la Vida Útil y Convenio de Basilea', '<ul><li><b>Auditoría y Trazabilidad:</b> Antes de entregar una batería retirada, la institución debe verificar el alcance específico de la autorización ambiental del gestor (una licencia general de residuos electrónicos o de plomo-ácido no basta) y exigir tanto el acta de entrega como el <b>certificado final de la operación realizada</b>.</li><li><b>Exportación (Convenio de Basilea):</b> Exige el procedimiento de <b>Consentimiento Fundamentado Previo</b> en 4 etapas (8 controles). La carga NO puede salir sin el consentimiento escrito del país importador, las respuestas de los países de tránsito, la autorización del Estado exportador y el documento de movimiento.</li></ul>')}`
                    )
                }
            ]
        },

        // ─────────── MÓDULO 5 ──────────────
        {
            title: 'Módulo 5: Análisis de Retorno de Inversión (ROI, VAN, TIR y TCO)',
            items: [
                {
                    title: '5.1 — Estructura del Flujo Incremental (VE vs. Convencional)',
                    content: dojoCard('Construcción Paso a Paso del Caso Financiero', 'chart',
                        `<p>La decisión de inversión compara el vehículo eléctrico frente al vehículo convencional que la institución compraría en su lugar, registrando únicamente las diferencias (flujo incremental) en dólares constantes del año 0.</p>
                        ${formulaBox(
                            'Año 0 Incremental = − [ (Precio VE + Cargador Atribuible − Incentivo Incremental) − Precio Convencional ]',
                            'Ejemplo base por vehículo: VE (US$30,000) + Cargador instalado (US$2,000) − Convencional (US$24,000) = −US$8,000 en el Año 0.'
                        )}
                        ${formulaBox(
                            'Costo Anual Energía VE = (Recorrido km × Consumo kWh/km ÷ Eficiencia Carga) × Tarifa US$/kWh + Cargo Potencia Incremental',
                            'Ejemplo base (20,000 km/año): Energía VE = 20,000 × 0.18 ÷ 0.90 × 0.18 = US$720/año vs. Combustible Convencional = 20,000 × (8 L/100 km) × 1.20 = US$1,920/año (Ahorro energía = +US$1,200/año). Sumando ahorro en mantenimiento (+US$400/año) y mayor prima de seguro (−US$100/año), el ahorro operativo neto es +US$1,500/año.'
                        )}
                        ${keyBox('De Un Vehículo a una Flota Completa (20 VE)', 'Multiplicar por 20 el VAN de un vehículo es un error porque omite los <b>costos compartidos de la flota</b>: adecuación eléctrica/transformador, ampliación de infraestructura de carga, mantenimiento de cargadores y capacitación del personal. Tampoco debe cometerse doble conteo registrando el cargador en el costo atribuible y otra vez en la ampliación compartida.')}`
                    )
                },
                {
                    title: '5.2 — Indicadores de Rentabilidad, Valor Crítico y Separación del Financiamiento',
                    content: dojoCard('Criterios de Decisión ante Autoridades Institucionales', 'finance',
                        `${tableStyled(
                            ['Indicador', 'Regla de Decisión', 'Comportamiento en Casos Especiales'],
                            [
                                ['Valor Actual Neto (VAN)', 'Aprobar si VAN >= 0 a la tasa institucional (r)', 'Es el indicador principal y más robusto; sigue siendo válido aunque el flujo cambie de signo varias veces (p. ej. por reemplazo de batería en el año 6)'],
                                ['Tasa Interna de Retorno (TIR)', 'Aprobar si TIR >= tasa de descuento (r)', 'No debe usarse como tasa de descuento; pierde validez única cuando el flujo cambia de signo más de una vez'],
                                ['Relación Beneficio-Costo (B/C)', 'Aprobar si B/C >= 1.0', 'Matemáticamente consistente con el VAN: VAN > 0 equivale siempre a B/C > 1.0'],
                                ['Período de Recuperación Simple vs. Descontado', 'Menor al horizonte máximo permitido', 'El simple NO descuenta flujos y subestima el tiempo real de recuperación frente al descontado'],
                                ['Valor Crítico (Switching Value)', 'Umbral de un supuesto que hace VAN = 0', 'En el caso de 20 VE (VAN base −US$13,329.95 con 20,000 km/año), el valor crítico es ~21,600 km/año; asignando la flota a rutas de 24,000 km/año el VAN sube a +US$19,990.81']
                            ]
                        )}
                        ${keyBox('Separación entre Evaluación Económica y Financiamiento (SEGEPLAN / MIDEPLAN)', 'El VAN, la TIR y la relación B/C se calculan sobre el <b>flujo propio del proyecto sin incluir préstamos ni intereses</b>. Si aparece un crédito concesional o una restricción de presupuesto anual (falta de partida plurianual), no se altera la tasa de descuento ni el VAN del proyecto: el crédito y el calendario por fases se presentan en una tabla separada de <b>impacto presupuestario anual</b>.')}`
                    )
                }
            ]
        }
    ];

    console.log('System: SICA / MOVE (Terralink) MOOC 2 study module loaded.');
})();

