# Guia de trabajo para cursos de AI generativa

## Objetivo

La carpeta `GENERATIVE AI ENGINEERING` funciona como contenedor de varios cursos de Databricks. Cada curso tiene una carpeta independiente y debe trabajarse en un chat separado.

## Dinamica de trabajo

1. El usuario inicia un chat nuevo para un solo curso.
2. Al comenzar, indica el nombre del curso o comparte su enlace oficial.
3. El usuario proporciona el plan de estudios, lecciones, transcripciones, textos, capturas e imagenes progresivamente.
4. Codex guarda cada fuente original sin reemplazar material anterior.
5. Codex crea contenido de estudio organizado en ingles y una version traducida y organizada en espanol.
6. Las imagenes se copian a `assets/images/` con nombres descriptivos.
7. Cada traduccion indica que imagen corresponde a cada figura.
8. El `README.md` del curso se actualiza con las lecciones recibidas.
9. La auditoria del curso registra contenido completo, recibido y pendiente.
10. Las preguntas de examen se guardan con opciones, respuesta correcta y explicacion breve.

## Estructura esperada por curso

```text
Nombre del curso/
|-- README.md
|-- INICIO_NUEVO_CHAT.md
|-- VERIFICACION_CURSO.md
|-- 01_nombre_de_la_leccion/
|   |-- original_en.txt
|   |-- contenido_en.md
|   `-- traduccion_es.md
|-- 02_nombre_de_la_leccion/
|   |-- original_en_transcript.txt
|   |-- contenido_en.md
|   `-- traduccion_es.md
|-- assets/
|   `-- images/
|       |-- README.md
|       `-- imagen_descriptiva.png
|-- respuestas_cuestionario.md
`-- resultado_quiz_original.txt
```

Los archivos se crean cuando exista contenido real. No es necesario crear carpetas de lecciones vacias.

## Convenciones

- Numerar lecciones en el orden del plan de estudios: `01_`, `02_`, `03_`.
- Usar nombres de archivos descriptivos y estables.
- Preservar los terminos tecnicos importantes en ingles cuando sea necesario.
- Traducir y organizar el contenido para estudio, no limitarse a una traduccion literal desordenada.
- No inventar codigo, pasos o contenido que no aparezca en la fuente.
- Conservar versiones adicionales de una transcripcion cuando el usuario entregue una fuente nueva.
- Si el usuario confirma que el modulo esta completo aunque una exportacion tenga saltos de tiempo, conservar la discontinuidad como nota de fuente sin marcar la leccion como pendiente.
- Mantener un solo `respuestas_cuestionario.md` por curso.
- Guardar la retroalimentacion oficial del quiz, corregir el banco cuando difiera de una respuesta provisional y registrar la puntuacion final.
- No mezclar material entre cursos.

## Como iniciar cada chat

Dentro de cada carpeta existe `INICIO_NUEVO_CHAT.md`. En el nuevo chat, el usuario puede indicar:

```text
Trabajaremos el curso indicado en INICIO_NUEVO_CHAT.md.
Usa exclusivamente la carpeta especificada y sigue la dinamica de
GUIA_TRABAJO_AI_GENERATIVA.md. Te pasare el contenido leccion por leccion.
```

## Cursos preparados

1. [Building Retrieval Agents on Databricks](<GENERATIVE AI ENGINEERING/Building Retrieval Agents on Databricks/README.md>)
2. [Building Single-Agent Applications on Databricks](<GENERATIVE AI ENGINEERING/Building Single-Agent Applications on Databricks/README.md>) — completo: 13/13; quiz 95/100
3. [Generative AI Application Evaluation and Governance](<GENERATIVE AI ENGINEERING/Generative AI Application Evaluation and Governance/README.md>)
4. [Generative AI Application Deployment and Monitoring](<GENERATIVE AI ENGINEERING/Generative AI Application Deployment and Monitoring/README.md>)
