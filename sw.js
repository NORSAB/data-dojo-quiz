// Codex (GPT-5) | 2026-08-23 20:35 CST | Invalida caché por nuevo centro de estudio y design system.
// Codex (GPT-5) | 2026-08-23 21:32 CST | Publica la unificación de paleta y el control previo al despliegue.
// Codex (GPT-5) | 2026-08-23 21:49 CST | Ajusta contraste oscuro tras el QA visual de producción.
// Codex (GPT-5) | 2026-08-23 21:55 CST | Fuerza la actualización del estado contraído en todas las subsecciones de estudio.
// Codex (GPT-5) | 2026-08-23 22:00 CST | Versiona también script.js tras detectar caché HTTP anterior en GitHub Pages.
// Codex (GPT-5) & Antigravity | 2026-08-24 14:30 CST | Integra SM-2 SRS, Podcast Mode manos libres, Sandbox SQL interactivo y AI Coach.
// Antigravity (Gemini 3.7 Flash) | 2026-08-26 08:55 CST | Agrega certificación Microsoft Azure AI-103 con 356 Qs bilingües y centro de estudio.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 03:40 CST | Calibra partículas ambientales a una cantidad equilibrada (12 elementos) con tamaño y resplandor óptimo.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 03:58 CST | Elimina origen LaTeX e incorpora generador de Guías de Estudio oficiales en PDF por dominio y banco completo.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 04:10 CST | Corrige títulos de módulos de estudio y sanitización bilingüe contra tags SVG escapados.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 04:25 CST | Rediseño espacioso y organizado en 2 columnas del modal de configuración del examen con presets rápidos.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 04:30 CST | Maximiza altura del filtrado de dominios y organiza opciones inferiores en matriz 2x2.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 07:30 CST | Integra Drag-and-Drop y mezclas en Architecture Canvas y expande Matrices de Decisión con tarjetas y filtros.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:15 CST | Expande gamificación (16 nuevos logros, XP interactivo) y unifica recursos de estudio (DP-600, Databricks DA, GenAI, Azure AI).
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:30 CST | Integra suite de 7 capacidades (Casos de Estudio, Radar SVG, Pipeline Animation, Podcast Playlist con Voces, Custom Builder, Mistakes Exporter, Live Sync).
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:36 CST | Podcast Multi-Curso y Selector de Múltiples Episodios / Álbumes Temáticos por Examen Oficial.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:40 CST | Speech Humanizer: Eliminación total de ruidos LaTeX, Markdown, guiones y sintaxis de código para locución natural continua.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:42 CST | Ajuste de overflow y truncation elíptica en pistas de playlist para layout perfecto.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:48 CST | Distribución limpia, botones de cierre visibles (modal-close-btn), footer Volver y escape global.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:52 CST | Conversión a 4 selectores dropdown independientes en grid 2x2 (Curso, Episodio, Voz, Velocidad).
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 14:56 CST | Dropdowns en columna vertical, selector de idioma ES/EN, voces filtradas por idioma y speech cleaner sin ruido.
// Antigravity (Gemini 3.7 Flash) | 2026-08-30 17:25 CST | Curva de Olvido Ebbinghaus, Heatmap de Consistencia, Tech Comparator, Pearson Vue Mode y Step Ordering.
// Claude (Opus 5) | 2026-09-04 03:10 CST | ID de dispositivo unico por navegador, guardado final por fetch keepalive (el sendBeacon salia sin apikey y moria en 401) y saneo de archivos internos publicados.
// Claude (Opus 5) | 2026-09-04 22:45 CST | Corrige la perdida de categorias activas: 'hiddenCategories' no disparaba sync y el restore de la nube no avisaba a la UI, que sobrescribia el valor bueno.
// Claude (Opus 5) | 2026-09-05 | Podcast con voz natural: voces neuronales priorizadas, locucion por frases con prosodia y micro-pausas, y keepalive contra el corte a los 15s de Chrome.
// Claude (Opus 5) | 2026-09-05 | Caché incremental (deja de re-bajar 6.5 MB por deploy), estado de examen por IDs (-99%), payload de sync sin duplicar, emparejamiento de dispositivos en la UI y CI de 6 suites.
const BUILD_TIMESTAMP = '20260905a';
const CACHE_NAME = `simulador-v52-${BUILD_TIMESTAMP}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=20260905a',
  './app_i18n.js?v=20260905a',
  './script.js?v=20260905a',
  './features.js?v=20260905a',
  './hero_data.js',
  './auto_restore_data.js',
  './manifest.json',
  './app_icon.png',
  './questions.js',
  './questions_azure_ai103.js',
  './questions_azure_ai103_es.js',
  './study_azure_ai103.js',
  './study_azure_ai103_resources.js',
  './questions_databricks.js',
  './questions_databricks_fundamentals.js',
  './questions_databricks_aibi.js',
  './questions_databricks_sql_analytics.js',
  './questions_databricks_genai.js',
  './questions_databricks_genai_es.js',
  './study_databricks_genai.js',
  './study_databricks_genai_resources.js',
  './study_fabric_dp600_resources.js',
  './study_databricks_da_resources.js',
  './questions_unir_viz.js',
  './questions_unir_herr.js',
  './questions_unah_tesis.js',
  './study_data.js',
  './study_databricks.js',
  './study_databricks_urgent.js',
  './study_databricks_expanded.js',
  './study_databricks_domains.js',
  './study_databricks_fundamentals.js',
  './study_unir_viz.js',
  './study_unir_herr.js',
  './study_unah_tesis.js',
  './flashcards_databricks.js',
  './flashcards_unir_viz.js',
  './flashcards_unir_herr.js',
  './flashcards_unah_tesis.js',
  './databricks_study_module.html',
  './marked.min.js',
  './conceptos_databricks.js',
  './personajes_unir_viz.js',
  './translations_databricks_es.js',
  './translate_toggle.js?v=20260905a',
  './supabase-sync.js?v=20260905a',
  './comandos_sql_databricks.js',
  './comandos_sql_genai.js'
];

// Claude (Opus 5) | 2026-09-05 | Antes cada bump de BUILD_TIMESTAMP creaba un CACHE_NAME
// nuevo y 'activate' borraba el anterior entero, asi que TODOS los assets se volvian a
// descargar: ~7.9 MB por despliegue, de los cuales ~6.5 MB son bancos de preguntas que
// no habian cambiado una sola linea. Ahora el install reutiliza del cache viejo lo que
// sigue siendo identico (misma URL, incluida su query ?v=) y solo baja de la red lo que
// cambio de verdad. Los archivos versionados cambian de URL, asi que se refrescan solos.
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil((async () => {
    try {
      const cache = await caches.open(CACHE_NAME);
      const oldNames = (await caches.keys()).filter(k => k !== CACHE_NAME);
      const oldCaches = await Promise.all(oldNames.map(n => caches.open(n)));

      let reutilizados = 0, descargados = 0;

      await Promise.all(ASSETS_TO_CACHE.map(async (url) => {
        for (const oc of oldCaches) {
          const hit = await oc.match(url);
          if (hit) {
            await cache.put(url, hit.clone());
            reutilizados++;
            return;
          }
        }
        try {
          await cache.add(url);
          descargados++;
        } catch (e) {
          // Un asset suelto que falle no debe abortar la instalacion entera
          console.warn('SW: no se pudo cachear', url, e);
        }
      }));

      console.log(`SW ${CACHE_NAME}: ${reutilizados} reutilizados de cache, ${descargados} descargados`);
    } catch (err) {
      console.warn('SW cache error:', err);
    }
  })());
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            )
        ).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
  // Network First Strategy
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
        });
        return response;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
