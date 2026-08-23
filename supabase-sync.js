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

// Unique device identifier (persisted in localStorage)
function getDeviceId() {
  let deviceId = localStorage.getItem('_device_id');
  if (!deviceId) {
    deviceId = 'device_1772569653760_xdufm320z';
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
      theme: localStorage.getItem('theme') || 'dark',
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
            if (data.theme) localStorage.setItem('theme', data.theme);
          }

          localStorage.setItem('_last_sync', String(cloudTime));
          console.log('[DataSync] Cloud data restored successfully!');
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
  }
};

// ============================================================================
//  AUTO-SYNC: Intercept localStorage changes
// ============================================================================
const _originalSetItem = localStorage.setItem.bind(localStorage);
localStorage.setItem = function(key, value) {
  _originalSetItem(key, value);
  
  // Trigger cloud sync for all progress, mastery, quiz, and profile keys
  if (
    key.includes('Profile') ||
    key.includes('Stats') ||
    key.includes('progress') ||
    key.includes('mastery') ||
    key.includes('certified') ||
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
window.addEventListener('beforeunload', () => {
  if (DataSync.isConfigured) {
    try {
      const payload = DataSync.buildPayload();
      const url = `${SUPABASE_URL}/rest/v1/quiz_progress`;
      navigator.sendBeacon(url, new Blob([JSON.stringify(payload)], { type: 'application/json' }));
    } catch(e) {}
  }
});
