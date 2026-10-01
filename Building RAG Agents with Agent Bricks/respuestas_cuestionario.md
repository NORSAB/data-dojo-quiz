# Respuestas del cuestionario

## Datos del examen

- **Examen:** Quiz - Building RAG Agents with Agent Bricks
- **Número de preguntas:** 20
- **Preguntas documentadas:** 20 de 20
- **Resultado oficial:** Pendiente

## Registro de respuestas

> Las opciones se mantienen resumidas para evitar duplicar el enunciado recibido; la opción marcada es la correcta.

1. **Context engineering en conversaciones largas**
   - **Correcta:** Manage state across turns by summarizing history, pruning irrelevant or stale context, and keeping persistent instructions in the window while staying within the token budget.
   - **Justificación:** Resume y poda el estado para conservar contexto actual y relevante dentro del presupuesto.

2. **Entrada de `ai_prep_search`**
   - **Correcta:** Pass the full `ai_parse_document` VARIANT per document, not the flattened elements.
   - **Justificación:** La función transforma la salida estructurada del parseo en fragmentos semánticos.

3. **Tamaño de chunks**
   - **Correcta:** Use smaller, focused chunks with modest overlap that fit within the embedding model's token limit.
   - **Justificación:** Mejora precisión, evita truncamiento y reduce el efecto «lost in the middle».

4. **`chunk_to_embed` frente a `chunk_to_retrieve`**
   - **Correcta:** Embed `chunk_to_embed` and give the LLM `chunk_to_retrieve`.
   - **Justificación:** Los metadatos enriquecidos ayudan a encontrar; el texto original mejora la legibilidad de la respuesta.

5. **Tabla de archivos para Knowledge Assistant**
   - **Correcta:** Streaming table o CDF habilitado, con `content` BINARY/STRING y `metadata` struct.
   - **Justificación:** Permite interpretar archivos y detectar incorporaciones o cambios.

6. **Filtros `LENGTH(content)`**
   - **Correcta:** Remove short, low-signal elements; extraction uses a higher bar because it needs more surrounding context.
   - **Justificación:** Elimina números de página y encabezados ruidosos; extracción requiere más contexto.

7. **Base URL del cliente OpenAI**
   - **Correcta:** `serving-endpoints` (`{host}/serving-endpoints`).
   - **Justificación:** Es la ruta base de Databricks Model Serving para solicitudes compatibles con OpenAI.

8. **Modelo de embeddings y similitud coseno**
   - **Correcta:** Query e índice deben usar el mismo modelo; cosine similarity ordena por el ángulo más pequeño.
   - **Justificación:** Modelos distintos generan espacios vectoriales incompatibles; coseno compara dirección.

9. **Trazas y citas**
   - **Correcta:** MLflow trace captures input/output including retrieved context and answer, and Knowledge Assistant returns citations.
   - **Justificación:** La traza muestra el contexto y la respuesta; las citas enlazan documentos fuente.

10. **Índice existente con embeddings de terceros**
    - **Correcta:** El índice debe usar un modelo de embeddings Databricks compatible, como `databricks-gte-large-en`.
    - **Justificación:** Knowledge Assistant requiere semántica de embeddings soportada.

11. **Knowledge Assistant frente a agente personalizado**
    - **Correcta:** Knowledge Assistant para QA administrado; code-first custom agent para orquestación inusual.
    - **Justificación:** El primero acelera document QA; el segundo ofrece control total de herramientas y pasos.

12. **Por qué prompts no corrigen políticas obsoletas**
    - **Correcta:** El LLM base tiene fecha de corte y no accede a documentos privados cambiantes.
    - **Justificación:** Se necesita grounding o recuperación para aportar conocimiento vigente.

13. **Campo de `ai_extract`**
    - **Correcta:** `ext:response.vendor`.
    - **Justificación:** `ai_extract` devuelve un VARIANT con objeto `response` y campos nombrados.

14. **Salida de `ai_parse_document` v2.0**
    - **Correcta:** VARIANT JSON estructurado; la versión fija el esquema v2.0 con descripciones y bounding boxes.
    - **Justificación:** Estabiliza el contrato y habilita salida consciente del diseño.

15. **Delta Sync sin CDF**
    - **Correcta:** Enable Change Data Feed on the source table.
    - **Justificación:** CDF identifica filas modificadas para sincronización incremental eficiente.

16. **Patrón RAG**
    - **Correcta:** Retrieve, Augment, Generate.
    - **Justificación:** Recupera evidencia, la agrega al prompt y genera la respuesta fundamentada.

17. **`pipeline_type`**
    - **Correcta:** Compliance: TRIGGERED; Trading desk: CONTINUOUS.
    - **Justificación:** TRIGGERED controla costos bajo demanda; CONTINUOUS prioriza frescura casi inmediata.

18. **Expandir arreglo VARIANT**
    - **Correcta:** `variant_explode`.
    - **Justificación:** Convierte arreglos u objetos VARIANT en filas con `pos`, `key` y `value`.

19. **Context engineering frente a prompt engineering**
    - **Correcta:** Context engineering is broader and manages the entire input environment; prompt engineering targets instruction text.
    - **Justificación:** Incluye registros recuperados, historial, instrucciones y salidas de herramientas.

20. **Manuales de 80 MB no citados**
    - **Correcta:** Files larger than 50 MB are automatically skipped.
    - **Justificación:** Superan el límite por archivo y nunca se incorporan a la fuente indexada.

## Clave rápida

1-D, 2-B, 3-D, 4-A, 5-B, 6-A, 7-C, 8-B, 9-C, 10-D, 11-B, 12-A, 13-D, 14-B, 15-A, 16-B, 17-C, 18-B, 19-A, 20-C.
