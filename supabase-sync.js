/**
 * SUPABASE DATA SYNC MODULE (Universal Multi-Course Edition)
 * ==========================================================
 * Persists all quiz progress, certified courses, XP, mastery and badges
 * to Supabase cloud database automatically in real time.
 */

// ============================================================================
//  CONFIGURATION — Supabase Project Credentials
// ============================================================================
const SUPABASE_URL = 'https://suplwoyiviapsnowzfcb.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cGx3b3lpdmlhcHNub3d6ZmNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1MTcwODgsImV4cCI6MjEwMzA5MzA4OH0._hoJOBXHwQvd_gdCJgKC2pzOwhDT81pCP3HAzV2Gm8Q';

// Claude (Opus 5) | 2026-09-04 | El ID ya no es un literal compartido: cada dispositivo genera el suyo.
// Fila maestra historica de Norman. Se conserva para poder re-emparejar dispositivos propios
// mediante DataSync.restoreMasterBackup(), nunca como ID por defecto de un visitante nuevo.
const LEGACY_MASTER_DEVICE_ID = 'device_1772569653760_xdufm320z';

// Genera un identificador unico e irrepetible por navegador/dispositivo.
function generateDeviceId() {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return 'device_' + crypto.randomUUID();
    }
    if (typeof crypto !== 'undefined' && typeof crypto.getRandomValues === 'function') {
      const buf = new Uint8Array(16);
      crypto.getRandomValues(buf);
      return 'device_' + Array.from(buf, b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (e) { /* fallback abajo */ }
  return 'device_' + Date.now().toString(36) + '_' + Math.random().toString(36).slice(2, 12);
}

// Unique device identifier (persisted in localStorage)
// Compatibilidad: si el navegador ya tiene un _device_id guardado (incluida la fila maestra
// historica), se respeta tal cual — ningun dispositivo existente pierde su progreso.
function getDeviceId() {
  let deviceId = localStorage.getItem('_device_id');
  if (!deviceId) {
    deviceId = generateDeviceId();
    localStorage.setItem('_device_id', deviceId);
  }
  return deviceId;
}

// ============================================================================
//  SUPABASE SYNC ENGINE
// ============================================================================
const DataSync = {
  client: null,
  deviceId: null,
  isConfigured: false,
  syncInProgress: false,
  lastSyncTime: 0,
  DEBOUNCE_MS: 1500,
  pendingSync: null,

  /**
   * Initialize the sync engine
   */
  init() {
    if (!SUPABASE_URL || !SUPABASE_KEY) {
      console.log('[DataSync] Supabase not configured.');
      this.isConfigured = false;
      return;
    }

    try {
      if (typeof supabase === 'undefined' || !supabase.createClient) {
        console.warn('[DataSync] Supabase client library not loaded. Retrying in 1s...');
        setTimeout(() => this.init(), 1000);
        return;
      }

      this.client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
      this.deviceId = getDeviceId();
      this.isConfigured = true;
      console.log('[DataSync] Cloud sync connected. Device ID:', this.deviceId);
      
      // Auto-load from cloud on startup
      this.loadFromCloud();
    } catch (err) {
      console.error('[DataSync] Init failed:', err);
      this.isConfigured = false;
    }
  },

  /**
   * Build universal payload covering all present and future courses
   */
  buildPayload() {
    const courseMastery = {};
    const courseProgress = {};
    const fullBackup = {};

    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        const val = localStorage.getItem(key);
        // Claude (Opus 5) | 2026-09-05 | quizAppState ya viaja en la columna app_state.
        // Incluirlo tambien aqui duplicaba el dato mas pesado del payload en cada sync.
        if (key === 'quizAppState') continue;

        try {
          const parsed = JSON.parse(val);
          fullBackup[key] = parsed;
          if (key.endsWith('_mastery')) {
            courseMastery[key.replace('_mastery', '')] = parsed;
          }
          if (key.endsWith('_progress')) {
            courseProgress[key.replace('_progress', '')] = parsed;
          }
        } catch(e) {
          fullBackup[key] = val;
        }
      }
    }

    return {
      device_id: this.deviceId,
      profile: JSON.parse(localStorage.getItem('userProfile') || '{}'),
      stats: JSON.parse(localStorage.getItem('userStats') || '{}'),
      certified_courses: JSON.parse(localStorage.getItem('certifiedCourses') || '[]'),
      course_progress: courseProgress,
      course_mastery: courseMastery,
      completed_modules: JSON.parse(localStorage.getItem('completedModules') || '[]'),
      quiz_history: JSON.parse(localStorage.getItem('quizHistory') || '[]'),
      dojo_streak: JSON.parse(localStorage.getItem('dojoStreak') || '{}'),
      app_state: JSON.parse(localStorage.getItem('quizAppState') || '{}'),
      full_backup: fullBackup,
      updated_at: new Date().toISOString()
    };
  },

  /**
   * Save all current localStorage data to Supabase
   */
  async saveToCloud() {
    if (!this.isConfigured || this.syncInProgress) return;

    this.syncInProgress = true;
    try {
      const payload = this.buildPayload();

      const { data, error } = await this.client
        .from('quiz_progress')
        .upsert(payload, { onConflict: 'device_id' });

      if (error) {
        console.error('[DataSync] Save failed:', error.message);
      } else {
        this.lastSyncTime = Date.now();
        console.log('[DataSync] Saved to cloud at', new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error('[DataSync] Save error:', err);
    } finally {
      this.syncInProgress = false;
    }
  },

  /**
   * Load data from Supabase and restore to localStorage
   */
  async loadFromCloud() {
    if (!this.isConfigured) return;

    try {
      const { data, error } = await this.client
        .from('quiz_progress')
        .select('*')
        .eq('device_id', this.deviceId)
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          console.log('[DataSync] No cloud record found yet. Saving current state to cloud...');
          this.saveToCloud();
        } else {
          console.error('[DataSync] Load failed:', error.message);
        }
        return;
      }

      if (data) {
        const cloudTime = new Date(data.updated_at).getTime();
        const localTime = parseInt(localStorage.getItem('_last_sync') || '0');

        // Restore if cloud data is newer or local is empty
        if (cloudTime > localTime || !localStorage.getItem('userProfile')) {
          console.log('[DataSync] Restoring full master backup from Supabase cloud...');

          if (data.full_backup && typeof data.full_backup === 'object') {
            Object.keys(data.full_backup).forEach(key => {
              if (key.startsWith('_')) return;
              const val = data.full_backup[key];
              localStorage.setItem(key, typeof val === 'string' ? val : JSON.stringify(val));
            });
          } else {
            if (data.profile) localStorage.setItem('userProfile', JSON.stringify(data.profile));
            if (data.stats) localStorage.setItem('userStats', JSON.stringify(data.stats));
            if (data.certified_courses) localStorage.setItem('certifiedCourses', JSON.stringify(data.certified_courses));
            if (data.completed_modules) localStorage.setItem('completedModules', JSON.stringify(data.completed_modules));
            if (data.quiz_history) localStorage.setItem('quizHistory', JSON.stringify(data.quiz_history));
            if (data.dojo_streak) localStorage.setItem('dojoStreak', JSON.stringify(data.dojo_streak));
            if (data.app_state) localStorage.setItem('quizAppState', JSON.stringify(data.app_state));
            // Codex (GPT-5) | 2026-08-23 20:35 CST | Recupera también los mapas JSONB genéricos por curso.
            Object.entries(data.course_progress || {}).forEach(([courseId, progress]) => {
              localStorage.setItem(`${courseId}_progress`, JSON.stringify(progress));
            });
            Object.entries(data.course_mastery || {}).forEach(([courseId, mastery]) => {
              localStorage.setItem(`${courseId}_mastery`, JSON.stringify(mastery));
            });
            if (data.theme) localStorage.setItem('theme', data.theme);
          }

          // quizAppState se excluye de full_backup para no duplicarlo: se repone aqui.
          if (data.app_state && Object.keys(data.app_state).length) {
            localStorage.setItem('quizAppState', JSON.stringify(data.app_state));
          }

          localStorage.setItem('_last_sync', String(cloudTime));
          console.log('[DataSync] Cloud data restored successfully!');

          // Claude (Opus 5) | 2026-09-04 | script.js lee hiddenCategories/certifiedCourses
          // UNA sola vez al cargar, en variables de modulo. Este restore corre ~500 ms
          // despues por red, asi que dejaba localStorage correcto pero la UI con el valor
          // viejo — y el siguiente guardado del Modulo Administrativo escribia ese valor
          // viejo encima del bueno. Se avisa para que la UI vuelva a leer.
          window.dispatchEvent(new CustomEvent('datasync:restored', {
            detail: { keys: Object.keys(data.full_backup || {}) }
          }));
        } else {
          console.log('[DataSync] Local data is up to date with cloud.');
        }
      }
    } catch (err) {
      console.error('[DataSync] Load error:', err);
    }
  },

  /**
   * Debounced sync — call this whenever data changes
   */
  scheduleSync() {
    if (!this.isConfigured) return;
    
    if (this.pendingSync) clearTimeout(this.pendingSync);
    this.pendingSync = setTimeout(() => {
      this.saveToCloud();
      localStorage.setItem('_last_sync', String(Date.now()));
    }, this.DEBOUNCE_MS);
  },

  // ==========================================================================
  //  Claude (Opus 5) | 2026-09-04 | EMPAREJAMIENTO MANUAL DE DISPOSITIVOS
  //  Antes, el ID fijo daba sincronizacion multi-dispositivo "gratis" pero a
  //  costa de compartir la misma fila con cualquier visitante del sitio publico.
  //  Ahora cada dispositivo es independiente y el emparejamiento es explicito.
  // ==========================================================================

  /** Devuelve el codigo de este dispositivo, para copiarlo en otro navegador. */
  getPairingCode() {
    const code = this.deviceId || getDeviceId();
    console.log('[DataSync] Codigo de este dispositivo:', code);
    console.log('[DataSync] En tu otro dispositivo ejecuta: DataSync.pairWith("' + code + '")');
    return code;
  },

  /** Vincula ESTE navegador a la fila de otro dispositivo y restaura su progreso. */
  async pairWith(code) {
    if (!code || typeof code !== 'string' || !code.trim()) {
      console.error('[DataSync] pairWith requiere un codigo de dispositivo valido.');
      return false;
    }
    const target = code.trim();
    localStorage.setItem('_device_id', target);
    localStorage.setItem('_last_sync', '0');   // fuerza que la nube gane
    this.deviceId = target;
    console.log('[DataSync] Emparejado con', target, '— restaurando desde la nube...');
    await this.loadFromCloud();
    return true;
  },

  /** Atajo: re-vincula este navegador al respaldo maestro historico de Norman. */
  async restoreMasterBackup() {
    return this.pairWith(LEGACY_MASTER_DEVICE_ID);
  }
};

// Expuesto para poder emparejar dispositivos desde la consola del navegador.
window.DataSync = DataSync;

// ============================================================================
//  AUTO-SYNC: Intercept localStorage changes
// ============================================================================
const _originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
  _originalSetItem(key, value);
  
  // Trigger cloud sync for all progress, mastery, quiz, and profile keys
  // Claude (Opus 5) | 2026-09-04 | 'hiddenCategories' (visibilidad de categorias del
  // Modulo Administrativo) no coincidia con ningun patron, asi que un cambio de
  // categorias no programaba sincronizacion propia: solo viajaba a la nube de rebote,
  // si algo mas se guardaba despues. Se agrega 'Categories' a la lista.
  if (
    key.includes('Profile') ||
    key.includes('Stats') ||
    key.includes('progress') ||
    key.includes('mastery') ||
    key.includes('certified') ||
    key.includes('Categories') ||
    key.includes('Modules') ||
    key.includes('quiz') ||
    key.includes('Streak')
  ) {
    DataSync.scheduleSync();
  }
};

// ============================================================================
//  INITIALIZE ON DOM LOAD
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => DataSync.init(), 500);
});

// Also save before user leaves
// Claude (Opus 5) | 2026-09-04 | navigator.sendBeacon NO puede fijar cabeceras, asi que el POST
// salia sin apikey/Authorization y Supabase lo rechazaba con 401 en silencio: el guardado final
// al cerrar la pestana nunca llegaba. Se sustituye por fetch({keepalive:true}) con cabeceras
// completas, disparado en pagehide y visibilitychange (fiables tambien en moviles iOS/Android).
const FLUSH_MIN_INTERVAL_MS = 5000;
let lastFlushAt = 0;

function flushOnExit() {
  if (!DataSync.isConfigured) return;

  // visibilitychange dispara en cada cambio de pestana y el payload lleva todo el
  // localStorage. Solo se envia si hay cambios sin guardar (pendingSync) o si ya
  // paso el intervalo minimo, para no saturar Supabase con upserts identicos.
  const now = Date.now();
  if (!DataSync.pendingSync && (now - lastFlushAt) < FLUSH_MIN_INTERVAL_MS) return;
  lastFlushAt = now;

  // El guardado diferido ya no aplica: se envia ahora mismo, sincronamente.
  if (DataSync.pendingSync) {
    clearTimeout(DataSync.pendingSync);
    DataSync.pendingSync = null;
  }

  try {
    const payload = DataSync.buildPayload();
    fetch(`${SUPABASE_URL}/rest/v1/quiz_progress?on_conflict=device_id`, {
      method: 'POST',
      keepalive: true,
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'resolution=merge-duplicates,return=minimal'
      },
      body: JSON.stringify(payload)
    }).catch(() => {});
    localStorage.setItem('_last_sync', String(Date.now()));
  } catch (e) { /* nunca bloquear el cierre de la pestana */ }
}

window.addEventListener('pagehide', flushOnExit);
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') flushOnExit();
});
