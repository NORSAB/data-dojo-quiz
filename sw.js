// Codex (GPT-5) | 2026-08-23 20:35 CST | Invalida caché por nuevo centro de estudio y design system.
// Codex (GPT-5) | 2026-08-23 21:32 CST | Publica la unificación de paleta y el control previo al despliegue.
// Codex (GPT-5) | 2026-08-23 21:49 CST | Ajusta contraste oscuro tras el QA visual de producción.
// Codex (GPT-5) | 2026-08-23 21:55 CST | Fuerza la actualización del estado contraído en todas las subsecciones de estudio.
// Codex (GPT-5) | 2026-08-23 22:00 CST | Versiona también script.js tras detectar caché HTTP anterior en GitHub Pages.
// Codex (GPT-5) | 2026-08-23 22:17 CST | Publica el selector global persistente y sus puentes de traducción.
const BUILD_TIMESTAMP = '20260824b';
const CACHE_NAME = `simulador-v25-${BUILD_TIMESTAMP}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css?v=20260824a',
  './app_i18n.js?v=20260824a',
  './script.js?v=20260824a',
  './features.js?v=20260824a',
  './hero_data.js',
  './auto_restore_data.js',
  './manifest.json',
  './app_icon.png',
  './questions.js',
  './questions_databricks.js',
  './questions_databricks_fundamentals.js',
  './questions_databricks_aibi.js',
  './questions_databricks_sql_analytics.js',
  './questions_databricks_genai.js',
  './questions_databricks_genai_es.js',
  './study_databricks_genai.js',
  './study_databricks_genai_resources.js',
  './questions_unir_viz.js',
  './questions_unir_herr.js',
  './questions_unah_tesis.js',
  './study_data.js',
  './study_databricks.js',
  './study_databricks_urgent.js',
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
  './translate_toggle.js?v=20260823i',
  './supabase-sync.js',
  './comandos_sql_databricks.js'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .catch(err => console.warn('SW cache error:', err))
  );
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
