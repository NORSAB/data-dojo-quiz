# Diferencia entre USE y USAGE en Databricks

### 1. USE (Sentencia de Sesión)
Es el comando SQL utilizado para cambiar el catálogo o esquema activo de tu sesión actual.

**Código de ejemplo:**
```sql
USE CATALOG corp_data;
USE SCHEMA reporting;

-- Ahora puedes consultar directamente la tabla
SELECT * FROM sales_data;
```

---

### 2. USAGE (Privilegio de Unity Catalog)
Es el permiso de seguridad que otorgas o revocas a los usuarios para permitirles "atravesar" y ver objetos dentro de catálogos y esquemas. 

*(Ojo: en el examen te pueden poner opciones falsas como "GRANT USE", pero el privilegio correcto es USAGE).*

**Código de ejemplo:**
```sql
-- Otorgar permiso para ver el catálogo
GRANT USAGE ON CATALOG finance_catalog TO `analysts`;

-- Revocar permiso sobre un esquema
REVOKE USAGE ON SCHEMA reporting FROM `developers`;
```

---

### 3. system.billing.usage (Tabla de Sistema)
Es la tabla interna de Unity Catalog donde puedes consultar programáticamente el consumo de recursos y costos (DBUs) de tus bases de datos y almacenes SQL.

**Código de ejemplo:**
```sql
SELECT 
    usage_date, 
    sku_name, 
    usage_quantity AS dbus_consumed
FROM 
    system.billing.usage
ORDER BY 
    usage_date DESC;
```
