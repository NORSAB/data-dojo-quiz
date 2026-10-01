# 01. Chain-of-Thought and Self-Ask Reasoning

> **Módulo 2:** Prompt Engineering Techniques  
> **Tema:** Técnicas avanzadas de razonamiento: Chain-of-Thought (CoT) frente a Self-Ask Prompting  

---

## 1. Introducción al Razonamiento en Modelos de Lenguaje

Los LLMs generan texto token por token en función de probabilidades estadísticas. Cuando se les enfrenta a un problema de razonamiento complejo (como cálculos financieros de múltiples pasos, deducciones lógicas o diseño de arquitecturas) y se les exige una respuesta inmediata sin espacio para "pensar", tienden a equivocarse porque intentan predecir la respuesta final sin haber computado las variables intermedias.

Las técnicas de razonamiento proporcionan al modelo el espacio computacional (a través de tokens intermedios) necesario para desglosar la lógica antes de emitir la conclusión.

---

## 2. Chain-of-Thought (CoT) Prompting

### Principio Operativo
**Chain-of-Thought (Cadena de Pensamiento)** instruye explícitamente al modelo a **mostrar su razonamiento paso a paso** de manera lineal y transparente antes de proporcionar la respuesta o conclusión final.

> *"Think step-by-step before providing the final answer."*

```
[Problema Complejo] 
       │
       ▼
[Paso 1: Identificar premisas conocidas]
       │
       ▼
[Paso 2: Realizar cálculo o deducción intermedia]
       │
       ▼
[Paso 3: Validar contra restricciones]
       │
       ▼
[Respuesta / Conclusión Final]
```

### Beneficio Principal:
- **Transparencia y Auditabilidad:** Hace que la lógica interna, los cálculos matemáticos y los supuestos del modelo sean completamente visibles para el humano. Si el modelo comete un error, el usuario puede identificar exactamente en qué paso se originó la falla y corregirlo.

### Ejemplo de CoT en Ingeniería de Costos Cloud:
```markdown
### PROBLEMA:
Un clúster de Databricks utiliza 4 nodos de computación tipo `i3.2xlarge`. Cada nodo consume 2 Databricks Units (DBUs) por hora. La tarifa de DBU es de $0.15 y el costo de infraestructura en la nube es de $0.32 por nodo/hora. Si el clúster corre un job ETL durante 4.5 horas diarias durante 20 días al mes:

Calcula el costo total mensual. Muestra tu razonamiento paso a paso antes de dar el resultado final.
```

*Respuesta CoT del Modelo:*
> **Paso 1: Cálculo del consumo de DBUs por hora:**
> - 4 nodos $\times$ 2 DBUs/nodo/hora = 8 DBUs/hora.
> - Costo DBU/hora = 8 $\times$ $0.15 = $1.20/hora.
>
> **Paso 2: Cálculo del costo de infraestructura por hora:**
> - 4 nodos $\times$ $0.32/nodo/hora = $1.28/hora.
>
> **Paso 3: Costo total por hora del clúster:**
> - $1.20 (DBU) + $1.28 (Cloud VM) = $2.48/hora.
>
> **Paso 4: Total de horas al mes:**
> - 4.5 horas/día $\times$ 20 días = 90 horas/mes.
>
> **Paso 5: Costo total mensual:**
> - 90 horas $\times$ $2.48/hora = $223.20.
>
> **Conclusión Final:** El costo total mensual proyectado es de **$223.20**.

---

## 3. Self-Ask Prompting

### Principio Operativo
**Self-Ask (Auto-Pregunta)** es una técnica en la que se instruye al modelo a que, frente a un objetivo complejo o ambiguo, **formule y responda de manera autónoma sus propias sub-preguntas intermedias** antes de intentar resolver la pregunta global.

```
[Pregunta Compleja / Ambigua]
       │
       ▼
¿Se requiere una sub-pregunta? Sí.
  ├── Sub-pregunta 1: ¿Qué información clave falta? ──► Respuesta 1
  ├── Sub-pregunta 2: ¿Cuáles son las dependencias? ──► Respuesta 2
  └── Sub-pregunta 3: ¿Qué riesgos operacionales hay? ──► Respuesta 3
       │
       ▼
[Síntesis y Respuesta Final Fundamentada]
```

### Beneficio Principal:
- **Descubrimiento de Factores Ocultos:** Ayuda a revelar ángulos ciegos, dependencias técnicas no evidentes o información faltante que el usuario humano no había considerado inicialmente.

### Ejemplo de Self-Ask en Migración de Datos:
```markdown
### INSTRUCCIÓN:
Queremos migrar una base de datos analítica heredada en SQL Server (4 TB, 120 tablas) a Databricks Lakehouse con Unity Catalog.
Aplica la técnica de Self-Ask: genera y responde las sub-preguntas diagnósticas indispensables que debemos evaluar antes de proponer la arquitectura de ingesta.
```

*Respuesta Self-Ask del Modelo:*
> **Sub-pregunta 1:** ¿Con qué frecuencia se actualizan las tablas de origen y cuál es la latencia de negocio requerida?  
> *Respuesta:* Si la actualización es por lotes diaria, podemos usar Cloud Fetch o JDBC con Delta Lake; si es en tiempo real o sub-horaria, requerimos Change Data Capture (CDC) con Lakeflow Connect / Delta Live Tables.
>
> **Sub-pregunta 2:** ¿Existen tipos de datos no estándar o procedimientos almacenados con lógica de negocio pesada?  
> *Respuesta:* SQL Server suele almacenar T-SQL procedural que no compila directamente en Spark SQL; será necesario refactorizar la lógica hacia funciones de Spark SQL o dbt.
>
> **Sub-pregunta 3:** ¿Cuál es la estrategia de gobierno y permisos para usuarios finales?  
> *Respuesta:* Unity Catalog debe mapearse creando un Catálogo específico (`sql_server_migracion`) y aislando los esquemas según el modelo de datos medallón (Bronce, Plata, Oro).

---

## 4. Matriz Comparativa: Chain-of-Thought vs. Self-Ask

| Dimensión | Chain-of-Thought (CoT) | Self-Ask Prompting |
|---|---|---|
| **Estructura de Razonamiento** | Lineal y secuencial: sigue un camino lógico predeterminado paso a paso. | Ramificada y exploratoria: el modelo genera y contesta sus propias preguntas. |
| **Punto Fuerte** | Cálculos matemáticos, derivaciones lógicas, deducciones formales. | Problemas abiertos, diseño de sistemas, auditoría de requerimientos y mitigación de vacíos. |
| **Interacción con la Incertidumbre** | Avanza resolviendo las premisas dadas. | Se detiene a interrogar qué factores faltan o son ambiguos. |
| **Control del Humano** | Fácil de seguir paso a paso para detectar errores numéricos o sintácticos. | Permite al humano descubrir preguntas que ni siquiera sabía que debía formularse. |
