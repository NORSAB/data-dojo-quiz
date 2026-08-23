// M5: Version hash with build timestamp
const BUILD_TIMESTAMP = '20260405g';
const CACHE_NAME = `simulador-v15-${BUILD_TIMESTAMP}`;
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './features.js',
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
  './translate_toggle.js',
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
