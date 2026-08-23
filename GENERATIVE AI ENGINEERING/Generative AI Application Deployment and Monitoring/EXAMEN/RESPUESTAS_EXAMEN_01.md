# Examen 01 — Respuestas correctas

Curso: **Generative AI Application Deployment and Monitoring**

1. **The raw JSON payloads in the Inference Table must be "unpacked" and flattened into a processed table.**
   - Lakehouse Monitoring necesita columnas estructuradas para calcular métricas y perfiles.

2. **Appended to a Delta table in Unity Catalog.**
   - Las Inference Tables registran de forma persistente solicitudes y respuestas en una tabla Delta gobernada por Unity Catalog.

3. **`ai_query()`**
   - Permite invocar desde Databricks SQL un modelo servido mediante un endpoint.

4. **Direct Separation: Using completely separate Databricks workspaces for Development, Staging, and Production.**
   - La separación directa mejora el aislamiento, la seguridad y la escalabilidad.

5. **Develop integration tests that run a few iterations to ensure all monitoring metrics are working correctly.**
   - En Testing se valida que el flujo y sus métricas funcionen antes de producción.

6. **~40 GB.**
   - 10 mil millones de parámetros × 4 bytes por parámetro FP32 ≈ 40 GB por copia, sin contar sobrecarga adicional.

7. **It serves as a centralized store using Aliases (e.g., `@champion`, `@challenger`) to manage lifecycle versions and ACLs.**
   - El Registry centraliza versiones, alias y permisos para facilitar el despliegue gobernado.

8. **The requirement for fast and scalable serving infrastructure, which is costly to build and maintain.**
   - Los sistemas en tiempo real necesitan baja latencia y escalado confiable ante tráfico variable.

9. **Custom Models, Foundation Models APIs, and External Models.**
   - Son las tres categorías administradas por Databricks Model Serving.

10. **It ensures the training/inference pipeline is run in each environment (Dev, Staging, Prod), validating the entire process rather than just moving a static artifact.**
    - Deploy Code valida el proceso reproducible completo en cada ambiente.

11. **vLLM.**
    - Es una biblioteca orientada a transformers para inferencia eficiente en memoria sobre GPU NVIDIA y AMD.

12. **`mlflow.pyfunc`.**
    - Es la interfaz Python genérica de MLflow para registrar, guardar, cargar y predecir.

13. **LLMOps requires packaging entire applications (including chains, prompts, and API calls) rather than just a single model artifact.**
    - En GenAI, la unidad desplegable suele incluir toda la lógica de la aplicación.

14. **The pace of input records is slower than 30 minutes, volume is high, and immediate predictions are not necessary.**
    - El procesamiento batch encaja con alto volumen y resultados que no requieren baja latencia.

15. **To enable "write code once, deploy everywhere" using YAML configurations for artifacts, resources, and CI/CD.**
    - Los Databricks Asset Bundles describen y despliegan recursos y artefactos de forma repetible.

16. **An engineered prompt template, a LangChain "chain," or a lightweight call to an external LLM API service.**
    - En GenAI, cualquiera de estos componentes puede representar la lógica empaquetada y administrada con MLflow.

17. **It serves as an important datasource from Dev to Prod for evaluation, iteration, and augmenting traditional monitoring.**
    - La retroalimentación humana aporta señales de calidad difíciles de capturar únicamente con métricas automáticas.

18. **Autoscaling and scale-to-zero compute.**
    - Estas capacidades absorben picos de tráfico y reducen cómputo cuando no hay solicitudes.

19. **To provide automated insights and out-of-the-box metrics (such as profile and drift metrics) via generated dashboards.**
    - Lakehouse Monitoring genera métricas y paneles para observar calidad y cambios en datos o predicciones.

20. **It allows serving multiple models (e.g., `@champion` and `@challenger`) behind a single serving endpoint with configurable traffic splits.**
    - Los porcentajes configurables permiten despliegues canary y pruebas A/B desde un mismo endpoint.

## Clave rápida

1-A, 2-A, 3-A, 4-C, 5-A, 6-C, 7-A, 8-B, 9-B, 10-C, 11-A, 12-D, 13-B, 14-A, 15-D, 16-A, 17-D, 18-D, 19-B, 20-A.
