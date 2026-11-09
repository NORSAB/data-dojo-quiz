window.studyData = {
    "dp-600": [
        {
            title: "Conceptos Clave de Fabric",
            items: [
                { 
                    title: "Direct Lake", 
                    content: "<strong>Direct Lake</strong> es una característica innovadora de los modelos semánticos en Power BI dentro de Microsoft Fabric. Permite cargar datos directamente desde el lago de datos (OneLake) en el motor de Power BI sin tener que importar los datos ni usar DirectQuery. Esto ofrece el rendimiento del modo Import con la frescura de datos en tiempo real." 
                },
                { 
                    title: "OneLake", 
                    content: "<strong>OneLake</strong> es un lago de datos lógico, único y unificado para toda la organización. Es el 'OneDrive para datos'. Todos los artefactos de Fabric (Lakehouses, Warehouses, bases de datos KQL) almacenan sus datos automáticamente en OneLake en formato Delta Parquet." 
                },
                {
                    title: "Delta Parquet",
                    content: "El formato de almacenamiento subyacente en Fabric. <strong>Parquet</strong> es un formato de columna altamente comprimido, y <strong>Delta</strong> añade una capa de registro de transacciones (ACID) y control de tiempo (Time Travel) sobre los archivos Parquet."
                }
            ]
        },
        {
            title: "Modelado y DAX",
            items: [
                { 
                    title: "Esquema Estrella (Star Schema)", 
                    content: "El diseño recomendado para modelos de Power BI. Consiste en una tabla de <strong>Hechos</strong> central (métricas, transacciones) rodeada de tablas de <strong>Dimensiones</strong> (atributos descriptivos). Ofrece el mejor rendimiento y simplicidad para DAX." 
                },
                { 
                    title: "CALCULATE()", 
                    content: "La función más importante en DAX. Evalúa una expresión en un contexto de filtro modificado. <br><code>CALCULATE(Medida, Filtro1, Filtro2...)</code>. Es esencial para Time Intelligence y cálculos de porcentajes." 
                }
            ]
        },
        {
            title: "Procesos de Ciclo de Vida",
            items: [
                { 
                    title: "Deployment Pipelines", 
                    content: "Herramienta para gestionar el ciclo de vida del contenido (ALM). Permite mover contenido entre etapas: <strong>Desarrollo</strong>, <strong>Prueba</strong> y <strong>Producción</strong>. Soporta reglas de despliegue para cambiar parámetros (como cadenas de conexión) entre etapas." 
                },
                { 
                    title: "Integración con Git", 
                    content: "Fabric permite sincronizar espacios de trabajo con un repositorio Git (Azure DevOps). Esto habilita el control de versiones, la colaboración multi-desarrollador y el respaldo del código fuente (archivos .pbip, .bim, etc.)." 
                }
            ]
        }
    ]
};
