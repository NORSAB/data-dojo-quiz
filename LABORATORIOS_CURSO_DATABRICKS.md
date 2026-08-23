# Guía de Laboratorios Prácticos: Databricks Certified Data Analyst Associate

Esta guía contiene los ejercicios prácticos diseñados para entrenar al equipo en escenarios reales del examen. Cada laboratorio incluye el código SQL detallado, explicaciones conceptuales y adaptaciones específicas para poder ejecutarlos tanto en entornos corporativos (con Unity Catalog habilitado) como en la versión gratuita de Databricks (Community Edition).

---

## Laboratorio 1: Ingesta de Datos Incremental e Idempotente con COPY INTO

### Objetivo
Aprender a cargar archivos de almacenamiento cloud de forma eficiente, controlando la duplicación de datos mediante la característica de idempotencia de `COPY INTO`.

### Conceptos del Examen Evaluados
* Idempotencia: Databricks no vuelve a cargar archivos que ya han sido procesados.
* operationMetrics: Registro en el historial que indica el número de filas y archivos cargados.

### Instrucciones y Código SQL

#### 1. Preparación del Entorno
En Databricks Community Edition, utilizaremos la base de datos por defecto para crear una tabla Delta vacía que simulará nuestro repositorio Bronze.

```sql
-- Crear la tabla destino
CREATE OR REPLACE TABLE trips_bronze (
    vendor_id INT,
    pickup_datetime TIMESTAMP,
    dropoff_datetime TIMESTAMP,
    passenger_count INT,
    trip_distance DOUBLE,
    fare_amount DOUBLE,
    input_file_name STRING
);
```

#### 2. Carga Inicial
Ejecutaremos la ingesta desde el catálogo de datos de ejemplo que Databricks incluye en todos sus workspaces (incluido el gratuito).

```sql
-- Cargar datos usando COPY INTO
COPY INTO trips_bronze
FROM 'dbfs:/databricks-datasets/nyctaxi/tripdata/yellow/'
FILEFORMAT = CSV
PATTERN = 'yellow_tripdata_2019-01.csv.gz'
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true')
COPY_OPTIONS ('force' = 'true');
```

#### 3. Verificación de Idempotencia
Si volvemos a ejecutar el comando sin la opción `force = 'true'`, Databricks identificará que el archivo ya fue procesado y no insertará filas duplicadas.

```sql
-- Segunda ejecución (comprobación de idempotencia)
COPY INTO trips_bronze
FROM 'dbfs:/databricks-datasets/nyctaxi/tripdata/yellow/'
FILEFORMAT = CSV
PATTERN = 'yellow_tripdata_2019-01.csv.gz'
FORMAT_OPTIONS ('header' = 'true', 'inferSchema' = 'true');
```

#### 4. Auditoría de la Ingesta
El historial de la tabla nos permite verificar los detalles técnicos de la carga.

```sql
-- Consultar el historial de la tabla Delta
DESCRIBE HISTORY trips_bronze;
```
*Pregunta típica de examen:* Busca en la columna `operationMetrics` del historial los parámetros `numFiles` (archivos cargados) y `numOutputRows` (filas insertadas) para auditar qué sucedió en cada versión.

---

## Laboratorio 2: Limpieza y Estructuración en la Capa Silver

### Objetivo
Transformar los datos crudos de la capa Bronze para generar una fuente limpia y confiable a nivel de fila (capa Silver).

### Conceptos del Examen Evaluados
* Tratamiento de nulos y duplicados.
* Restricciones de calidad de datos informativas en Delta Lake.

### Instrucciones y Código SQL

#### 1. Consulta de Limpieza y Deduplicación
Escribiremos una consulta que elimine registros con valores nulos críticos y descarte duplicados.

```sql
-- Crear tabla Silver con datos limpios
CREATE OR REPLACE TABLE trips_silver AS
SELECT 
    vendor_id,
    pickup_datetime,
    dropoff_datetime,
    passenger_count,
    trip_distance,
    fare_amount,
    current_timestamp() as ingestion_time
FROM trips_bronze
WHERE passenger_count > 0 
  AND trip_distance > 0.0
QUALIFY ROW_NUMBER() OVER (
    PARTITION BY vendor_id, pickup_datetime 
    ORDER BY pickup_datetime DESC
) = 1;
```

#### 2. Adición de Restricciones (Constraints)
Delta Lake permite añadir restricciones para asegurar la integridad de la base de datos.

```sql
-- Agregar restricción de calidad
ALTER TABLE trips_silver ADD CONSTRAINT valid_fare CHECK (fare_amount >= 0);
```

---

## Laboratorio 3: Modelado de Datos en la Capa Gold (Esquema en Estrella)

### Objetivo
Estructurar los datos limpios de la capa Silver en tablas de hechos y dimensiones para optimizar el rendimiento de las consultas analíticas y reportes de BI.

### Conceptos del Examen Evaluados
* Star Schema: Dimensiones (Dim) y Hechos (Fact).
* Uso de agregaciones eficientes y joins.

### Instrucciones y Código SQL

#### 1. Creación de la Dimensión Tiempo
```sql
CREATE OR REPLACE TABLE dim_date AS
SELECT 
    CAST(date_format(date, 'yyyyMMdd') AS INT) as date_key,
    date,
    year(date) as year,
    month(date) as month,
    day(date) as day,
    date_format(date, 'EEEE') as day_name
FROM (
    SELECT explode(sequence(to_date('2019-01-01'), to_date('2019-12-31'), interval 1 day)) as date
);
```

#### 2. Creación de la Dimensión Proveedor
```sql
CREATE OR REPLACE TABLE dim_vendor AS
SELECT DISTINCT
    vendor_id as vendor_key,
    CASE 
        WHEN vendor_id = 1 THEN 'Creative Mobile Technologies Services'
        WHEN vendor_id = 2 THEN 'VeriFone Inc'
        ELSE 'Generic Vendor'
    END as vendor_name
FROM trips_silver;
```

#### 3. Creación de la Tabla de Hechos Agregada (Capa Gold)
```sql
CREATE OR REPLACE TABLE fact_daily_trips AS
SELECT 
    CAST(date_format(pickup_datetime, 'yyyyMMdd') AS INT) as date_key,
    vendor_id as vendor_key,
    count(1) as total_trips,
    sum(passenger_count) as total_passengers,
    sum(trip_distance) as total_distance,
    sum(fare_amount) as total_revenue,
    avg(fare_amount) as average_fare
FROM trips_silver
GROUP BY 
    CAST(date_format(pickup_datetime, 'yyyyMMdd') AS INT), 
    vendor_id;
```

---

## Laboratorio 4: Seguridad y Enmascaramiento de Datos (PII)

### Objetivo
Proteger la información confidencial mediante el uso de vistas dinámicas basadas en las funciones del sistema de Databricks.

### Conceptos del Examen Evaluados
* Column Masking: Enmascarar columnas según pertenencia a grupos.
* Row Filtering: Filtrar filas de manera dinámica por usuario o rol.

### Instrucciones y Código SQL

#### 1. Simulación de Usuarios en Entorno de Pruebas
Dado que Databricks Community Edition no cuenta con configuración de grupos de seguridad empresariales, emularemos la lógica utilizando variables de sesión de usuario.

```sql
-- Crear tabla de usuarios de ejemplo
CREATE OR REPLACE TABLE user_roles (
    username STRING,
    role STRING
);

INSERT INTO user_roles VALUES 
('instructor@capacitacion.com', 'admin'),
('analista@equipo.com', 'viewer');
```

#### 2. Creación de la Vista Segura
Implementaremos una vista dinámica sobre una tabla con datos sensibles. Si el usuario actual no está registrado como administrador, los datos se ocultarán.

```sql
-- Vista que enmascara el ingreso económico y filtra registros
CREATE OR REPLACE VIEW secure_fact_daily_trips AS
SELECT 
    date_key,
    vendor_key,
    total_trips,
    -- Enmascaramiento de columna (Column Masking)
    CASE 
        WHEN current_user() IN (SELECT username FROM user_roles WHERE role = 'admin') 
        THEN total_revenue 
        ELSE 0.0 
    END AS total_revenue,
    total_passengers
FROM fact_daily_trips;
```

---

## Laboratorio 5: Optimización y Mantenimiento del Almacenamiento Delta

### Objetivo
Mejorar el rendimiento de lectura de las consultas y aprender a limpiar archivos huérfanos de almacenamiento sin comprometer el historial transaccional.

### Conceptos del Examen Evaluados
* OPTIMIZE: Compactación de archivos pequeños.
* Z-ORDER: Organización de datos en disco basada en columnas de filtro recurrente.
* VACUUM: Eliminación de archivos obsoletos. Interacción con Time Travel.

### Instrucciones y Código SQL

#### 1. Compactación y Ordenación de Datos
```sql
-- Compactar la tabla de hechos y ordenar por la llave de fecha
OPTIMIZE fact_daily_trips
ZORDER BY (date_key);
```

#### 2. Limpieza de Archivos Obsoletos
```sql
-- Eliminar archivos que no pertenezcan al estado actual y tengan más de 7 días
VACUUM fact_daily_trips;
```

#### 3. Simulación de Conflicto con Time Travel
*Pregunta típica de examen:* Si ejecutas un `VACUUM` configurando la retención a 0 horas (forzando la eliminación de todos los archivos antiguos):

```sql
-- Configurar la sesión para permitir retención cero (operación peligrosa)
SET spark.databricks.delta.vacuum.parallelDelete.enabled = true;
-- Comando que elimina todo el historial físico
VACUUM fact_daily_trips RETAIN 0 HOURS;
```

Al intentar realizar una consulta de Time Travel hacia una versión anterior, la base de datos arrojará un error porque los archivos subyacentes ya no existen en disco, aunque el registro de transacciones (Delta Log) siga conservando los metadatos de esa versión.

```sql
-- Esta consulta fallará tras el comando anterior
SELECT * FROM fact_daily_trips VERSION AS OF 1;
```
