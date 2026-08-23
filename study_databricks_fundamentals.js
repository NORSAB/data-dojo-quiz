(function() {
    window.studyData = window.studyData || {};

    const styleBox = (type, title) => `
        <div class="content-box box-${type}">
            ${title ? `<strong class="box-title">${title}</strong>` : ''}
    `;

    // Helper to create language sections (unified data-lang for CSS-driven separator)
    const langSection = (lang, content) => `
        <div class="lang-section" data-lang="${lang}">${content}</div>
    `;

    // Flashcard Helper
    const fc = (q, a) => `
        <div style="margin-bottom:12px; padding:12px; background:var(--bg-body); border-radius:6px; border-left:4px solid var(--primary);">
            <div style="font-weight:600; margin-bottom:4px; color:var(--primary);">Q: ${q}</div>
            <div style="color:var(--text-main);">A: ${a}</div>
        </div>
    `;

    window.studyData["databricks-fundamentals"] = [
        // ============================================================
        // TEMA 1: Historia de Databricks y el “por qué” del Lakehouse
        // ============================================================
        {
            title: "1. Vision & History / Visión e Historia",
            items: [
                {
                    title: "1.1 Overview: What is Databricks? / Visión general",
                    content: `
                        ${langSection('en', `
                            ${fc('How is Databricks presented?', 'As a <strong>unified platform</strong> for all <strong>data practitioners</strong> to work in one place: <strong>ingestion</strong>, <strong>transformation</strong>, <strong>analytics</strong>, and <strong>AI apps</strong>, with integrated <strong>governance and security</strong>.')}
                            ${fc('What is the general goal for clients?', 'To <strong>reduce complexity</strong>, <strong>reduce TCO</strong>, ensure <strong>high quality/secure/consumable data</strong>, and facilitate the path from <strong>data → AI → production</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Cómo se presenta Databricks en la transcripción?', 'Como una <strong>plataforma unificada</strong> para que <strong>todos los data practitioners</strong> trabajen en un solo lugar: <strong>ingestión</strong>, <strong>transformación</strong>, <strong>analítica</strong> y <strong>apps de AI</strong>, con <strong>gobernanza y seguridad integradas</strong>.')}
                            ${fc('¿Qué intenta lograr Databricks para sus clientes a nivel general?', '<strong>Reducir complejidad</strong>, <strong>reducir TCO</strong>, asegurar <strong>datos de alta calidad/seguros/consumibles</strong>, y facilitar el paso de <strong>datos → AI → producción</strong>.')}
                        `)}
                    `
                },
                {
                    title: "1.2 The Problem: Fragmentation / El Problema: Fragmentación",
                    content: `
                        ${langSection('en', `
                            ${styleBox('red', '1.2.1 Fragmentation & Complexity')}
                                ${fc('How is the current state of data & AI described?', '<strong>Highly fragmented and complex</strong>.')}
                                ${fc('Mention 3 characteristics of the current state.', '<strong>Complicated tech stacks</strong>, <strong>siloed teams</strong>, <strong>multiple data warehouses</strong> (due to acquisitions/legacy).')}
                                ${fc('What impact does this complexity have on business?', '<strong>Slower decisions</strong> and <strong>much higher costs</strong>.')}
                            </div>
                            <br>
                            ${styleBox('red', '1.2.2 Causes')}
                                ${fc('Why do many orgs end up with multiple data warehouses?', 'Due to <strong>acquisitions</strong>, <strong>independent business units</strong>, and <strong>legacy systems</strong>.')}
                                ${fc('What happened with the arrival of GenAI?', 'It added <strong>more platforms and needs</strong>, increasing complexity.')}
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('red', '1.2.1 Fragmentación y complejidad')}
                                ${fc('¿Cómo describe la transcripción el estado actual de sistemas de data y AI?', '<strong>Altamente fragmentado y complejo</strong>.')}
                                ${fc('Menciona 3 características del estado actual de data y AI en organizaciones.', '<strong>Stacks tecnológicos complicados</strong>, <strong>equipos en silos</strong>, <strong>múltiples data warehouses</strong> (por adquisiciones/legacy/unidades).')}
                                ${fc('¿Qué impacto causa esta complejidad en el negocio?', '<strong>Decisiones más lentas</strong> y <strong>costos mucho más altos</strong>.')}
                            </div>
                            <br>
                            ${styleBox('red', '1.2.2 Causas comunes')}
                                ${fc('¿Por qué muchas organizaciones terminan con múltiples data warehouses?', 'Por <strong>adquisiciones</strong>, <strong>unidades de negocio independientes</strong> y <strong>sistemas legacy</strong>.')}
                                ${fc('¿Qué ha ocurrido con la llegada de GenAI en los últimos años respecto a plataformas?', 'Se agregan <strong>más plataformas y necesidades</strong>, aumentando la complejidad.')}
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.3 Business Priorities / Prioridades del Negocio",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', '1. TCO Reduction')}
                                ${fc('What is the first priority when talking to companies?', '<strong>Cost reduction</strong>: CFOs seek <strong>lower TCO</strong>.')}
                                ${fc('Why do CFOs want to lower TCO?', 'To <strong>free up budget</strong> and <strong>fund new initiatives</strong>.')}
                            </div>
                            ${styleBox('blue', '2. Data Quality & Security')}
                                ${fc('What does the business ask for as a second priority?', 'Data must be <strong>high quality</strong>, <strong>secure</strong>, and <strong>accessible</strong> organized-wide.')}
                                ${fc('What three qualities must data have?', '<strong>Quality</strong>, <strong>security</strong>, <strong>accessibility</strong>.')}
                            </div>
                            ${styleBox('blue', '3. AI-Driven Transformation')}
                                ${fc('What is the third key priority?', '<strong>AI-driven transformation</strong>.')}
                                ${fc('What do companies seek with AI?', 'For AI to drive <strong>internal innovation</strong> and <strong>improve customer experiences</strong>.')}
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', '1. Reducción de costos / TCO')}
                                ${fc('¿Cuál es la primera prioridad que aparece al hablar con empresas?', '<strong>Reducción de costos</strong>: CFOs buscan <strong>menor TCO</strong>.')}
                                ${fc('¿Por qué los CFOs quieren bajar el TCO según la transcripción?', 'Para <strong>liberar presupuesto</strong> y <strong>financiar nuevas iniciativas</strong>.')}
                            </div>
                            ${styleBox('blue', '2. Calidad y seguridad de datos')}
                                ${fc('¿Qué pide el negocio en la segunda prioridad?', 'Que los datos sean de <strong>alta calidad</strong>, <strong>seguros</strong> y <strong>accesibles</strong> a través de la organización.')}
                                ${fc('¿Qué tres cualidades deben cumplirse para que los datos “sirvan” a la organización?', '<strong>Calidad</strong>, <strong>seguridad</strong>, <strong>accesibilidad</strong> (a nivel organización).')}
                            </div>
                            ${styleBox('blue', '3. Transformación impulsada por AI')}
                                ${fc('¿Cuál es la tercera prioridad clave?', '<strong>Transformación impulsada por AI</strong>.')}
                                ${fc('¿Qué buscan las empresas con AI según la transcripción?', 'Que la AI impulse <strong>innovación interna</strong> y <strong>mejore experiencias del cliente</strong>.')}
                            </div>
                        `)}
                    `
                },
                {
                    title: "1.4 The Patchwork Problem / El Patchwork",
                    content: `
                        ${langSection('en', `
                            ${fc('What is a “patchwork” of data environments?', 'An accumulation of environments/platforms to move fast, even if they <strong>don\'t integrate well</strong> or <strong>integrate at all</strong>.')}
                            ${fc('Why can patchwork seem like the “easy way out” initially?', 'Because it allows <strong>moving fast</strong> when full integration is hard/slow.')}
                            ${fc('What does patchwork cause over time?', '<strong>More silos</strong>, <strong>more complexity</strong>, and <strong>inefficiencies</strong>.')}
                            ${fc('How does it affect leveraging data?', 'Prevents the org from <strong>leveraging data effectively</strong> due to silos/complexity.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué es un “patchwork” de ambientes de datos?', 'Una acumulación de entornos/plataformas para avanzar rápido, aunque <strong>no integren bien</strong> o <strong>no integren</strong>.')}
                            ${fc('¿Por qué el patchwork puede parecer “la salida más fácil” al inicio?', 'Porque permite <strong>moverse rápido</strong> cuando la integración completa es difícil/lenta.')}
                            ${fc('¿Qué provoca el patchwork con el tiempo?', '<strong>Más silos</strong>, <strong>más complejidad</strong> e <strong>ineficiencias</strong>.')}
                            ${fc('¿Cómo afecta el patchwork la capacidad de aprovechar los datos?', 'Impide que la organización <strong>aproveche los datos efectivamente</strong> por silos/complejidad/ineficiencia.')}
                        `)}
                    `
                },
                {
                    title: "1.5 Duplication / Duplicación",
                    content: `
                        ${langSection('en', `
                            ${fc('What happens if duplicate platforms exist?', '<strong>Costs grow</strong> and there is <strong>less money</strong> to invest in other areas.')}
                            ${fc('What is the direct trade-off of duplicating platforms?', '<strong>Costs go up</strong> → <strong>budget for innovation goes down</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué pasa si existen plataformas duplicadas que hacen lo mismo o casi lo mismo?', 'Los <strong>costos crecen</strong> y queda <strong>menos dinero</strong> para invertir en otras áreas del negocio.')}
                            ${fc('¿Cuál es el “trade-off” directo de duplicar plataformas según la transcripción?', '<strong>Suben costos</strong> → <strong>baja presupuesto disponible</strong> para innovación.')}
                        `)}
                    `
                },
                {
                    title: "1.6 Single Source of Truth / Fuente Única de Verdad",
                    content: `
                        ${langSection('en', `
                            ${fc('What problem appears when data lives in multiple locations?', 'Confusion arises: <strong>which data to use?</strong> and <strong>what happens when updated?</strong>')}
                            ${fc('What critical question arises without a single source of truth?', '“If data is in multiple places, <strong>which one should the team use?</strong>”')}
                            ${fc('What becomes difficult without a clear single source of truth?', 'Ensuring data is <strong>high quality</strong>, <strong>secure</strong>, and <strong>consumable</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué problema aparece cuando los datos viven en múltiples ubicaciones o se mueven entre lugares?', 'Surge confusión: <strong>¿qué datos usar?</strong> y <strong>¿qué pasa cuando se actualizan?</strong>')}
                            ${fc('¿Qué pregunta crítica surge sin una single source of truth?', '“Si el dato está en varios lugares, <strong>¿cuál debe usar el equipo?</strong>”')}
                            ${fc('¿Qué se vuelve difícil sin una single source of truth clara y bien definida?', 'Asegurar datos <strong>de alta calidad</strong>, <strong>seguros</strong> y <strong>consumibles</strong>.')}
                        `)}
                    `
                },
                {
                    title: "1.7 AI Production Gap / Brecha de IA",
                    content: `
                        ${langSection('en', `
                            ${fc('What is mentioned about the fate of many AI projects?', 'Many <strong>never reach production</strong> and stay in <strong>draft/testing</strong>.')}
                            ${fc('What does this imply for the business?', '<strong>Time and money</strong> invested without capturing value.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué se menciona sobre el destino de muchos proyectos de AI?', 'Muchos <strong>no llegan a producción</strong> y se quedan en <strong>draft/testing</strong>.')}
                            ${fc('¿Qué implica para el negocio que proyectos de AI no lleguen a producción?', '<strong>Tiempo y dinero</strong> invertidos sin capturar valor; podrían usarse mejor en otros fines.')}
                        `)}
                    `
                },
                {
                    title: "1.8 Value Proposition / Propuesta de Valor",
                    content: `
                        ${langSection('en', `
                            ${fc('What does Databricks seek by “lessening complexity”?', '<strong>Reduce complexity</strong> to <strong>lower TCO</strong>.')}
                            ${fc('What does Databricks guarantee/aspire regarding data?', '<strong>High quality</strong>, <strong>secure</strong>, and <strong>easily consumable/transformable</strong> data.')}
                            ${fc('What does Databricks seek regarding the “AI journey”?', 'Help start/advance the AI path and facilitate moving from <strong>concept to production</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué busca Databricks al “lessen complexity”?', '<strong>Reducir complejidad</strong> para <strong>bajar TCO</strong>.')}
                            ${fc('¿Qué garantiza/aspira Databricks sobre los datos?', 'Datos de <strong>alta calidad</strong>, <strong>seguros</strong> y <strong>fácilmente consumibles/transformables</strong>.')}
                            ${fc('¿Qué busca Databricks respecto al “AI journey”?', 'Ayudar a iniciar y avanzar en el camino hacia AI, y facilitar pasar de <strong>concepto a producción</strong>.')}
                        `)}
                    `
                },
                {
                    title: "1.9 Theme 1 Summary / Resumen Tema 1",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Summary')}
                                The current problem is <strong>fragmentation/patchwork</strong>, which causes <strong>slow decisions/high costs</strong> and hinders a <strong>single source of truth</strong>. Databricks seeks to <strong>reduce complexity/TCO</strong> and ensure <strong>quality/security/consumption</strong> to enable <strong>AI from concept to production</strong>.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Resumen Mega-Flashcard')}
                                <p><strong>Q:</strong> Completa: El problema actual es _____ (fragmentación/patchwork/silos), lo que causa _____ (decisiones lentas y costos altos) y dificulta _____ (single source of truth). Databricks busca _____ (reducir complejidad/TCO) y asegurar _____ (calidad/seguridad/consumo) para habilitar _____ (AI de concepto a producción).</p>
                                <p><strong>A:</strong> Fragmentación y patchwork; decisiones lentas y costos altos; single source of truth; reducir complejidad/TCO; calidad/seguridad/consumo; AI a producción.</p>
                            </div>
                        `)}
                    `
                }
            ]
        },
        // ============================================================
        // TEMA 2: Data Warehouses vs Data Lakes vs Data Lakehouse
        // ============================================================
        {
            title: "2. Lakehouse Architecture / Arquitectura Lakehouse",
            items: [
                {
                    title: "2.1 Context / Contexto",
                    content: `
                        ${langSection('en', `
                            ${fc('Why is the lakehouse concept taught?', 'Because the <strong>lakehouse is the foundation</strong> and <strong>essential</strong> for a <strong>Data Intelligence Platform</strong>.')}
                            ${fc('Which two traditional systems are compared?', '<strong>Data warehouses</strong> and <strong>data lakes</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué se enseña el concepto de lakehouse al hablar de Databricks?', 'Porque el <strong>lakehouse es la base</strong> y es <strong>esencial</strong> para una <strong>Data Intelligence Platform</strong>.')}
                            ${fc('¿Qué dos sistemas tradicionales se comparan para entender el origen del lakehouse?', '<strong>Data warehouses</strong> y <strong>data lakes</strong>.')}
                        `)}
                    `
                },
                {
                    title: "2.2 Data Warehouse / Data Warehouse",
                    content: `
                        ${langSection('en', `
                            ${styleBox('blue', 'Definition')}
                                Structured repository, organized, single source of truth for <strong>BI and analytics</strong>. Data is <strong>clean, transformed, integrated</strong>.
                            </div>
                            ${fc('What type of data works best?', '<strong>Structured data</strong> (e.g., Excel format, rows/cols).')}
                            ${styleBox('red', 'Limitations')}
                                ${fc('What data types are not supported well?', '<strong>Unstructured</strong> and <strong>semi-structured</strong> (images, audio, video, free text).')}
                                ${fc('Why are they expensive to scale?', 'Vendor costs associated with <strong>compute</strong> and <strong>storage</strong>.')}
                                ${fc('What means "proprietary"?', 'Formats/encoding that can only be used by that vendor (<strong>Vendor lock-in</strong>).')}
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('blue', 'Definición y Objetivo')}
                                ${fc('¿Qué es un data warehouse tradicional?', 'Repositorio <strong>estructurado</strong>, organizado; busca ser <strong>single source of truth</strong> para <strong>BI y analytics</strong>. Datos <strong>limpios, transformados e integrados</strong>.')}
                                ${fc('¿Cuál es el objetivo central?', 'Proveer una <strong>single source of truth</strong> para <strong>inteligencia de negocio y analítica</strong>.')}
                            </div>
                            <br>
                            ${fc('¿Con qué tipo de datos funciona mejor?', 'Con datos <strong>estructurados</strong> (ejemplo: formato tipo Excel).')}
                            <br>
                            ${styleBox('red', 'Limitaciones')}
                                ${fc('¿Qué tipos de datos no soportan bien?', 'Datos <strong>no estructurados</strong> y <strong>semi-estructurados</strong> (imágenes, audio, videos, texto).')}
                                ${fc('¿Por qué son caros de escalar?', 'Por <strong>costos del vendor</strong> asociados a <strong>cómputo</strong> y <strong>almacenamiento</strong>.')}
                                ${fc('¿Qué significa que sea “propietario”?', 'Usa formatos nativos/cerrados. Riesgo de <strong>vendor lock-in</strong>.')}
                            </div>
                        `)}
                    `
                },
                {
                    title: "2.3 Data Lake / Data Lake",
                    content: `
                        ${langSection('en', `
                             ${styleBox('blue', 'Definition')}
                                ${fc('What is a data lake?', '<strong>Unstructured/Semi-structured</strong> repository, stores huge volumes in <strong>original format</strong>. No predefined schema.')}
                             </div>
                             ${fc('Why are they important today?', 'Support semi/unstructured data, critical for <strong>ML</strong> and <strong>advanced analytics</strong>.')}
                             ${fc('What is a "Data Swamp"?', 'A poorly managed pool of dirty, unverified data with no <strong>governance or security</strong>.')}
                        `)}
                        ${langSection('es', `
                             ${styleBox('blue', 'Definición')}
                                ${fc('¿Qué es un data lake?', 'Repositorio <strong>no estructurado o semi-estructurado</strong>, grandes volúmenes en <strong>formato original</strong> sin esquema predefinido.')}
                             </div>
                             ${styleBox('green', 'Fortalezas')}
                                ${fc('¿Por qué son importantes?', 'Soportan datos semi/no estructurados, crítico para <strong>machine learning</strong> y <strong>advanced analytics</strong>.')}
                                ${fc('¿Para qué se usan?', 'Para <strong>consolidar</strong> datos de la organización en una ubicación central.')}
                             </div>
                             ${styleBox('red', 'Riesgos')}
                                ${fc('¿Qué es un “data swamp”?', 'Un data lake mal configurado, con datos sucios, sin control y problemas de <strong>gobernanza y seguridad</strong>.')}
                             </div>
                        `)}
                    `
                },
                {
                    title: "2.4 The Separation Problem / El Problema de Separación",
                    content: `
                        ${langSection('en', `
                            ${fc('Why was it hard to combine them?', 'Differing rules for <strong>governance</strong> and <strong>security</strong> led to copying data.')}
                            ${fc('What happens when copying data?', 'It is <strong>slow, inefficient</strong>, causes <strong>duplication</strong>, <strong>fragmented governance</strong>, and <strong>compliance risks</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué no era fácil combinarlos?', 'Cada uno tenía reglas propias de <strong>gobernanza</strong> y <strong>seguridad</strong>.')}
                            ${fc('¿Qué ocurre cuando copias datos entre sistemas?', 'Es <strong>lento e ineficiente</strong>, genera <strong>duplicación</strong>, <strong>gobernanza fragmentada</strong> y <strong>riesgos de compliance</strong>.')}
                        `)}
                    `
                },
                {
                    title: "2.5 Data Lakehouse / Data Lakehouse",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Definition')}
                                "Best of both worlds": Built on a <strong>data lake</strong> (all data types) but implements <strong>management features/structures</strong> of <strong>data warehouses</strong>.
                            </div>
                            ${fc('Benefit for teams?', 'Teams move faster with a <strong>unified architecture</strong> for <strong>all</strong> data & AI needs.')}
                            ${fc('Supported workloads?', '<strong>Data analytics, BI, ML, data engineering, GenAI</strong>.')}
                            ${fc('Why cost-efficient?', 'Uses <strong>cheap cloud storage</strong> and facilitates scalability.')}
                        `)}
                        ${langSection('es', `
                            ${styleBox('green', 'Definición Central')}
                                “Lo mejor de ambos mundos”: construido sobre un <strong>data lake</strong> (todo tipo de datos) e implementa <strong>estructuras y features de gestión</strong> de <strong>data warehouses</strong>.
                            </div>
                            ${fc('¿Qué permite lograr?', 'Que los equipos se muevan más rápido con una <strong>arquitectura unificada</strong> para <strong>todas</strong> sus necesidades.')}
                            ${fc('¿Qué workloads soporta?', '<strong>Data analytics, BI, ML, data engineering y GenAI</strong>.')}
                            ${fc('¿Por qué es costo-eficiente?', 'Usa <strong>almacenamiento barato en la nube</strong> como base.')}
                        `)}
                    `
                },
                {
                    title: "2.6 Theme 2 Summary / Resumen Tema 2",
                    content: `
                        ${langSection('en', `
                             ${fc('Summary in 1 sentence', 'Avoids copying/syncing data (duplication, broken governance) by offering a <strong>unified architecture</strong> combining lake storage with warehouse management.')}
                        `)}
                        ${langSection('es', `
                             ${fc('Resume en 1 frase', 'Evita copiar/sincronizar datos (duplicación, gobernanza fragmentada) al ofrecer <strong>una arquitectura unificada</strong> que combina almacenamiento tipo lake con gestión tipo warehouse.')}
                             ${styleBox('green', 'Cloze / Repaso')}
                                Data warehouse = Estructurado/BI, pero caro. Data Lake = Barato/Formato Original, riesgo Data Swamp. Lakehouse = Ambos + Gestión + Abierto.
                             </div>
                        `)}
                    `
                }
            ]
        },
        // ============================================================
        // TEMA 3: Data Intelligence & Platform
        // ============================================================
        {
            title: "3. Data Intelligence / Inteligencia de Datos",
            items: [
                {
                    title: "3.2 Definition / Definición",
                    content: `
                        ${langSection('en', `
                            ${fc('What is “Data Intelligence”?', 'Using AI to <strong>learn, understand, and reason</strong> about org data, enabling <strong>custom AI apps</strong> and <strong>democratizing access</strong>.')}
                            ${fc('Two core goals?', '1) Create <strong>custom AI apps</strong>. 2) <strong>Democratize</strong> data access.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué es “Data Intelligence”?', 'El proceso de usar AI para <strong>aprender, entender y razonar</strong> sobre los datos, habilitando <strong>apps de AI personalizadas</strong> y <strong>democratizando</strong> el acceso.')}
                            ${fc('¿Cuáles son los dos objetivos centrales?', '1) Crear <strong>aplicaciones de AI personalizadas</strong> 2) <strong>Democratizar</strong> el acceso a data.')}
                        `)}
                    `
                },
                {
                    title: "3.3 How it Works / Cómo funciona",
                    content: `
                        ${langSection('en', `
                            ${fc('AI Types used?', '<strong>Generative AI</strong> and <strong>Traditional AI</strong> models.')}
                            ${fc('Learns from what signals? (4 examples)', '<strong>Data catalog</strong>, <strong>SQL queries</strong>, <strong>BI dashboards</strong>, <strong>Notebooks</strong>.')}
                            ${fc('What does it understand?', 'Nuanced <strong>business concepts</strong>, <strong>semantics</strong>, and unique data environment.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué tipos de modelos utiliza?', '<strong>Generative AI</strong> y <strong>modelos tradicionales de AI</strong>.')}
                            ${fc('¿De qué señales aprende? (4 ejemplos)', '<strong>Data catalog</strong>, <strong>SQL queries</strong>, <strong>BI dashboards</strong>, <strong>Notebooks</strong>, pipelines, documentación.')}
                            ${fc('¿Qué comprensión logra?', 'Un entendimiento “matizado” de los <strong>conceptos del negocio</strong>, la <strong>semántica</strong> y el <strong>entorno único</strong>.')}
                        `)}
                    `
                },
                {
                    title: "3.4 Better than naive LLMs / Mejor que LLMs genéricos",
                    content: `
                        ${langSection('en', `
                            ${fc('Why is it more precise than a generic LLM?', 'Because it learns from the <strong>real company context</strong> (catalog, queries, etc.), not just public internet data.')}
                            ${fc('Key difference?', 'Tuned to the <strong>environment, semantics, and usage</strong> of the enterprise data estate.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Por qué es más preciso que un LLM genérico?', 'Porque aprende del <strong>contexto real de la empresa</strong>, no solo de datos públicos.')}
                            ${fc('¿Diferencia clave?', 'Está ajustada al <strong>entorno, semántica y uso</strong> del data estate de la empresa.')}
                        `)}
                    `
                },
                {
                    title: "3.5 Platform Composition / Composición Plataforma",
                    content: `
                        ${langSection('en', `
                            ${styleBox('purple', 'Formula')}
                                <strong>Lakehouse Foundation</strong> (Unified Data & Governance) + <strong>AI Tuned on Business</strong> = <strong>Data Intelligence Platform</strong>.
                            </div>
                            ${fc('Promised results?', '<strong>Easier to use</strong>, <strong>cost-efficient</strong>, <strong>more performant</strong>.')}
                        `)}
                        ${langSection('es', `
                            ${styleBox('purple', 'Fórmula')}
                                <strong>Lakehouse Foundation</strong> (Datos+Gobierno unificado) + <strong>AI ajustada al negocio</strong> = <strong>Databricks Data Intelligence Platform</strong>.
                            </div>
                            ${fc('¿Qué efectos promete?', 'Más <strong>fácil de usar</strong>, más <strong>costo-eficiente</strong> y más <strong>performante</strong>.')}
                        `)}
                    `
                },
                {
                    title: "3.6 Democratization / Democratización",
                    content: `
                        ${langSection('en', `
                            ${fc('For technical users?', 'They "feel at home" (integral platform).')}
                            ${fc('For non-technical users?', 'Get insights via <strong>natural language</strong> (e.g., AI/BI Genie).')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Para usuarios técnicos?', '“Se sienten como en casa” (plataforma integral).')}
                            ${fc('¿Para no técnicos?', 'Obtienen insights con <strong>soporte de lenguaje natural</strong>.')}
                        `)}
                    `
                },
                {
                    title: "3.7 GenAI & MosaicML / GenAI y MosaicML",
                    content: `
                        ${langSection('en', `
                            ${fc('Why MosaicML?', 'Acquired to support <strong>GenAI models/tools</strong> and advance democratization.')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Para qué se menciona MosaicML?', 'Adquisición para apoyar herramientas/modelos de <strong>GenAI</strong> y avanzar la misión de democratizar data y AI.')}
                        `)}
                    `
                },
                {
                    title: "3.8 Theme 3 Summary / Resumen Tema 3",
                    content: `
                        ${langSection('en', `
                            ${fc('Summary', 'AI that <strong>learns/understands/reasons</strong> about enterprise data using internal signals (catalog, queries) to democratize access and enable AI apps.')}
                        `)}
                        ${langSection('es', `
                            ${fc('Resumen', 'Es AI que <strong>aprende/entiende/razona</strong> sobre el enterprise data usando señales internas (catálogo, queries, dashboards) para democratizar acceso y habilitar apps de AI, con mayor precisión que LLMs genéricos.')}
                        `)}
                    `
                }
            ]
        },
        // ============================================================
        // TEMA 4: Architecture & Compute
        // ============================================================
        {
            title: "4. Architecture & Compute / Arquitectura",
            items: [
                {
                    title: "4.2 Data Journey / Viaje del Dato",
                    content: `
                        ${langSection('en', `
                            ${fc('Where does data start?', 'Multiple sources: warehouses, cloud, local, etc.')}
                            ${styleBox('blue', 'Steps')}
                                <ol>
                                    <li><strong>Ingestion:</strong> Import/Process/Store. (Structured, semi, unstructured). Reliable/Scalable.</li>
                                    <li><strong>Transformation:</strong> Convert <strong>raw</strong> to <strong>usable</strong> datasets. (Deduplication, refinement).</li>
                                </ol>
                            </div>
                        `)}
                        ${langSection('es', `
                            ${fc('¿Dónde suele vivir la data antes?', 'Múltiples fuentes: data warehouse, cloud, local, etc.')}
                            ${styleBox('blue', 'Pasos')}
                                <ol>
                                    <li><strong>Ingestión:</strong> Importar/Procesar/Almacenar. (Estructurado a no estructurado). Confiable y escalable.</li>
                                    <li><strong>Transformación:</strong> Convertir data <strong>raw</strong> en <strong>datasets usables</strong>. (Ej: Deduplicación, refinado).</li>
                                </ol>
                            </div>
                        `)}
                    `
                },
                {
                    title: "4.3 Products in Architecture / Productos",
                    content: `
                        ${langSection('en', `
                            ${fc('Databricks SQL', 'Analysts create <strong>queries and dashboards</strong> from preferred environments.')}
                            ${fc('Lakeflow', 'Unifies ingestion, transformation, orchestration. Connects to MySQL, Salesforce, etc.')}
                            ${fc('AI/BI Genie', 'Natural language questions for self-service analytics.')}
                        `)}
                        ${langSection('es', `
                            ${fc('Databricks SQL', 'Permite a analistas crear <strong>queries y dashboards</strong> desde sus entornos preferidos.')}
                            ${fc('Lakeflow', 'Unifica ingestión, transformación, orquestación. Conecta a MySQL, Salesforce, Workday, etc.')}
                            ${fc('AI/BI Genie', 'Insights haciendo preguntas en <strong>lenguaje natural</strong>.')}
                        `)}
                    `
                },
                {
                    title: "4.4 Compute (Serverless) / Cómputo",
                    content: `
                        ${langSection('en', `
                            ${styleBox('green', 'Serverless Benefits')}
                                <ul>
                                    <li><strong>Simple, Reliable, Efficient.</strong></li>
                                    <li><strong>Instant Availability:</strong> No waiting/boot times.</li>
                                    <li><strong>Dynamic Scaling:</strong> Avoids bottlenecks.</li>
                                    <li><strong>Less Mgmt:</strong> No overhead for admins.</li>
                                    <li><strong>Cost:</strong> Pay for what you use (no idle cost).</li>
                                </ul>
                            </div>
                            ${fc('What if Serverless is not allowed?', 'Use <strong>Pro Compute</strong> (for regulatory needs).')}
                        `)}
                        ${langSection('es', `
                            ${fc('¿Qué es Databricks Compute?', 'Recursos de cómputo, destacando <strong>Serverless</strong>.')}
                            ${styleBox('green', 'Beneficios Serverless')}
                                <ul>
                                    <li><strong>Simple, Confiable, Eficiente.</strong></li>
                                    <li><strong>Disponibilidad Instantánea:</strong> No hay esperas.</li>
                                    <li><strong>Escalado Dinámico:</strong> Evita bottlenecks.</li>
                                    <li><strong>Menos Gestión:</strong> Menos "diales y knobs" para admins.</li>
                                    <li><strong>Costo:</strong> Paga por consumo (sin costo idle).</li>
                                </ul>
                            </div>
                            ${fc('¿Alternativa por regulación?', '<strong>Pro Compute</strong>.')}
                        `)}
                    `
                },
                {
                    title: "4.5 Journey Order / Orden del Viaje",
                    content: `
                        ${langSection('en', `
                            <strong>Sources → Ingestion → Transformation → Consumption (Analytics/BI/AI)</strong>
                        `)}
                        ${langSection('es', `
                            <strong>Fuentes → Ingestión → Transformación → Consumo (analytics/BI/AI)</strong>
                        `)}
                    `
                }
            ]
        },
        // ============================================================
        // TEMA 5: Products, Governance, Marketplace
        // ============================================================
        {
            title: "5. Products & Governance / Productos y Gobernanza",
            items: [
                {
                    title: "5.1 Pillars / Pilares",
                    content: `
                        ${langSection('en', `
                            1) Data Engineering<br>
                            2) Data Warehousing<br>
                            3) Business Intelligence<br>
                            4) Machine Learning / Data Science / AI
                        `)}
                        ${langSection('es', `
                            1) Data Engineering<br>
                            2) Data Warehousing<br>
                            3) Business Intelligence<br>
                            4) Machine Learning / Data Science / AI
                        `)}
                    `
                },
                {
                    title: "5.2 Lakeflow (Engineering) / Ingeniería",
                    content: `
                        ${langSection('en', `
                            ${fc('Lakeflow Role', 'Unifies ingestion, transformation, orchestration.')}
                            ${fc('Lakeflow Connect', '<strong>No-code connectors</strong>. Safe, secure, governed.')}
                            ${fc('DLT (Delta Live Tables)', 'Declarative ETL framework. "Treat data as code". Autoscales infrastructure.')}
                            ${fc('Lakeflow Jobs', '<strong>Orchestration</strong> (control flows, triggers, monitoring).')}
                        `)}
                        ${langSection('es', `
                            ${fc('Rol de Lakeflow', 'Unifica ingestión, transformación y orquestación.')}
                            ${fc('Lakeflow Connect', 'Conectores <strong>no-code</strong>. Seguros y gobernados.')}
                            ${fc('DLT (Delta Live Tables)', 'Framework ETL declarativo. "Data as code". Administra infraestructura automáticamente.')}
                            ${fc('Lakeflow Jobs', '<strong>Orquestación</strong> (control flows, triggers, monitoreo).')}
                        `)}
                    `
                },
                {
                    title: "5.5 Governance (Unity Catalog) / Gobernanza",
                    content: `
                        ${langSection('en', `
                            ${fc('Definition', 'Unified governance model for ALL Data & AI assets.')}
                            ${fc('Define once, secure everywhere', 'Manage access policies in one place for all workspaces.')}
                            ${fc('What does it capture?', '<strong>User-level audit logs</strong> and <strong>lineage</strong> (upstream/downstream).')}
                            ${fc('System Tables', 'Tables to query operational data (audit, billing, lineage).')}
                        `)}
                        ${langSection('es', `
                            ${fc('Definición', 'Modelo de gobernanza unificada para <strong>todos</strong> los activos de Data y AI.')}
                            ${fc('Define once, secure everywhere', 'Un solo lugar para administrar políticas de acceso.')}
                            ${fc('¿Qué captura?', '<strong>Audit logs</strong> a nivel usuario y <strong>lineage</strong>.')}
                            ${fc('System Tables', 'Tablas para consultar datos operativos (auditoría, billing, lineage).')}
                        `)}
                    `
                },
                {
                    title: "5.6 & 5.7 Sharing & Marketplace / Marketplace",
                    content: `
                        ${langSection('en', `
                            ${styleBox('purple', 'Delta Sharing')}
                                Centralized governance for sharing. <strong>No duplication</strong>. Privacy-safe clean rooms.
                            </div>
                            ${styleBox('purple', 'Marketplace')}
                                Open market for datasets, notebooks, dashboards, AI models.
                                <strong>Powered by Delta Sharing, Backed by Unity Catalog</strong>.
                                Does NOT require recipient to have a workspace.
                            </div>
                        `)}
                        ${langSection('es', `
                            ${styleBox('purple', 'Delta Sharing')}
                                Gobernanza centralizada para compartir. <strong>Sin duplicación</strong>. Data clean rooms seguros.
                            </div>
                            ${styleBox('purple', 'Marketplace')}
                                Mercado abierto de datasets, notebooks, dashboards, modelos AI.
                                <strong>Powered by Delta Sharing, Backed by Unity Catalog</strong>.
                                <strong>No depende</strong> de que el receptor tenga workspace.
                            </div>
                        `)}
                    `
                },
                {
                    title: "5.8 Workspace / Espacio de Trabajo",
                    content: `
                        ${langSection('en', `
                            ${fc('Home', 'Shortcuts for common tasks. Intelligent Search.')}
                            ${fc('Notebooks', 'Core component for coding (Python, SQL, Scala). Supported by <strong>Databricks Assistant</strong>.')}
                            ${fc('Catalog Explorer', 'Window to Unity Catalog (Schemes, Tables, Lineage, Metadata).')}
                        `)}
                        ${langSection('es', `
                            ${fc('Home', 'Accesos directos. Búsqueda inteligente.')}
                            ${fc('Notebooks', 'Componente core para código (Python, SQL, Scala). Apoyo de <strong>Databricks Assistant</strong>.')}
                            ${fc('Catalog Explorer', 'Ventana a Unity Catalog (Schemas, Tablas, Lineage, Metadata).')}
                        `)}
                    `
                },
                {
                    title: "5.9 Theme 5 Summary / Resumen Tema 5",
                    content: `
                        ${langSection('en', `
                            4 pillars (Eng, Warehouse, BI, ML). Unity Catalog for governance ("define once"). Delta Sharing for sharing without copy. Marketplace for exchange.
                        `)}
                        ${langSection('es', `
                            4 pilares. Unity Catalog unifica gobernanza ("define once"). Delta Sharing permite compartir sin copiar. Marketplace para intercambio y monetización.
                        `)}
                    `
                }
            ]
        }
    ];
})();
