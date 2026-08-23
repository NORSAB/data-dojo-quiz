// Auto-restore master backup dataset if localStorage is empty or missing profile/stats
(function() {
  try {
    const backupData = {
      "userProfile": {
        "name": "Norman Reynaldo Sabillon Castro",
        "nick": "NorSab",
        "certs": {
          "databricks-da": false,
          "dp-600": true
        }
      },
      "certifiedCourses": [
        "dp-600",
        "databricks-da",
        "databricks-fundamentals",
        "databricks-aibi",
        "databricks-sql-analytics",
        "unir-viz-interactiva",
        "unir-herramientas-viz"
      ],
      "userStats": {
        "totalQuestions": 605,
        "perfectExams": 0,
        "studyStreak": 1,
        "lastStudyDate": "Wed Apr 15 2026",
        "badges": [
          { "id": "novice", "date": "1/9/2026", "icon": "🥉", "name": "Novato" },
          { "id": "scientist", "date": "1/9/2026", "icon": "🧪", "name": "Científico" },
          { "id": "skeptic", "date": "1/9/2026", "icon": "🤔", "name": "El Escéptico" },
          { "id": "polymath", "date": "1/12/2026", "icon": "📜", "name": "Erudito" },
          { "id": "streak3", "date": "1/14/2026", "icon": "🔥", "name": "Constancia" },
          { "id": "earlybird", "date": "1/14/2026", "icon": "🌅", "name": "Madrugador" },
          { "id": "scholar", "date": "1/14/2026", "icon": "🥈", "name": "Estudioso" },
          { "id": "morning", "date": "1/15/2026", "icon": "🦉", "name": "Búho" },
          { "id": "sniper", "date": "1/15/2026", "icon": "🎯", "name": "Francotirador" },
          { "id": "curioso_personas", "date": "3/10/2026", "icon": "detective", "name": "Curioso" },
          { "id": "historiador", "date": "3/10/2026", "icon": "globetrotter", "name": "Historiador" },
          { "id": "cronista", "date": "3/10/2026", "icon": "polymath", "name": "Cronista Visual" },
          { "id": "flash50", "date": "3/11/2026", "icon": "brain", "name": "Memoria Fotográfica" },
          { "id": "concepto_aprendiz", "date": "3/27/2026", "icon": "shield", "name": "Aprendiz Lakehouse" },
          { "id": "expert", "date": "3/30/2026", "icon": "crown", "name": "Experto" },
          { "id": "cmd_rookie", "date": "4/5/2026", "icon": "flask", "name": "SQL Rookie" },
          { "id": "concepto_explorador", "date": "4/5/2026", "icon": "detective", "name": "Explorador Delta" },
          { "id": "concepto_architect", "date": "4/5/2026", "icon": "shield", "name": "Architect Certified" },
          { "id": "concepto_unity", "date": "4/6/2026", "icon": "polymath", "name": "Unity Catalog Master" },
          { "id": "concepto_platform", "date": "4/7/2026", "icon": "expert", "name": "Data Intelligence Master" },
          { "id": "concepto_lakehouse", "date": "4/7/2026", "icon": "flask", "name": "Mente de Lakehouse" },
          { "id": "cmd_builder", "date": "4/7/2026", "icon": "detective", "name": "Query Builder" },
          { "id": "cmd_sensei", "date": "4/7/2026", "icon": "shield", "name": "SQL Sensei" },
          { "id": "cmd_master", "date": "4/7/2026", "icon": "expert", "name": "Query Master" },
          { "id": "domain_rookie", "date": "4/15/2026", "icon": "novice", "name": "Domain Rookie" },
          { "id": "domain_explorer", "date": "4/15/2026", "icon": "detective", "name": "Domain Explorer" },
          { "id": "domain_warrior", "date": "4/15/2026", "icon": "shield", "name": "Domain Warrior" },
          { "id": "domain_master", "date": "4/15/2026", "icon": "expert", "name": "Domain Master" },
          { "id": "domain_sensei", "date": "4/15/2026", "icon": "grandmaster", "name": "9-Domain Sensei" },
          { "id": "domain_certified", "date": "4/15/2026", "icon": "phoenix", "name": "Certified Ready" }
        ],
        "consecutiveDays": 0,
        "questionsPerDomain": {},
        "flashcardsViewed": 99,
        "lastStudyTime": "13:19",
        "failedQuestionsRevisited": 0,
        "perfectConsecutiveExams": 0,
        "totalExamsTaken": 40,
        "fastExamsCount": 0,
        "topicsStudied": [
          "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21"
        ],
        "weekendStudy": { "sat": false, "sun": false },
        "correctStreak": 9,
        "maxCorrectStreak": 45,
        "explanationsViewed": 0,
        "skepticCount": 20,
        "conceptosViewed": 53,
        "comandosViewed": 12,
        "domainsStudied": 0,
        "domainSectionsViewed": 101,
        "hasPlayedReal": true,
        "hasPlayedSim": true,
        "personajesViewed": 30
      },
      "databricks_da_mastery": {
        "xp": 1394,
        "sectionsViewed": [
          "0-0", "0-1", "0-2", "18-0", "1-0", "1-1", "1-2", "2-0", "2-1", "3-0", "4-0", "4-1", "5-0", "5-1", "6-0", "6-1", "7-0", "7-1", "8-0", "9-0", "10-0", "10-1", "11-0", "11-1", "12-0", "12-1", "12-2", "13-0", "13-1", "13-2", "14-0", "14-1", "15-0", "16-0", "16-1", "17-0", "17-1", "18-1", "18-2", "19-0", "19-1", "19-2", "20-0", "20-1", "21-0", "21-1", "22-0", "23-0", "23-1", "18-3", "18-4", "18-5", "18-6", "33-3", "33-0", "33-1", "33-2", "34-0", "34-1", "34-2", "25-0", "20-2", "22-1", "24-0", "24-1", "25-1", "25-2", "25-3", "25-4", "26-0", "26-1", "27-0", "27-1", "28-0", "28-1", "29-0", "29-1", "30-0", "30-1", "31-0", "31-1", "32-0", "34-3", "34-4", "34-5", "35-0", "35-1", "36-0", "36-1", "36-2", "37-0", "37-1", "38-0", "38-1", "38-2", "39-0", "39-1", "39-2", "40-0", "40-1", "40-2"
        ],
        "flashcardsViewed": 15,
        "personajesViewed": [],
        "conceptosViewed": [
          "0-0", "0-1", "0-2", "0-3", "1-0", "1-1", "1-2", "1-3", "2-0", "2-1", "2-2", "2-3", "3-0", "3-1", "3-2", "3-3", "4-0", "4-1", "4-2", "4-3", "5-0", "5-1", "5-2", "5-3", "5-4", "6-0", "6-1", "6-2", "6-3", "7-0", "6-4", "7-1", "7-2", "7-3", "8-0", "8-1", "8-2", "9-0", "10-0", "10-1", "11-0", "11-1", "11-2", "11-3", "11-4", "12-0", "12-1", "12-2", "12-3", "13-0", "13-1", "13-2", "13-3"
        ],
        "achievements": [
          "first_section", "first_concepto", "five_sections", "xp_100", "first_comando", "xp_500", "all_sections", "five_conceptos", "ten_conceptos", "flash_10", "all_conceptos", "five_comandos", "ten_comandos", "all_comandos", "domain_first", "domain_half", "domain_xp_300", "xp_1000", "domain_complete"
        ],
        "comandosViewed": [
          "cmd-0-0", "cmd-4-0", "cmd-0-1", "cmd-1-0", "cmd-1-1", "cmd-1-2", "cmd-2-0", "cmd-2-1", "cmd-3-0", "cmd-3-1", "cmd-3-2"
        ]
      },
      "dojoStreak": {
        "currentStreak": 1,
        "lastDate": "2026-08-23",
        "bestStreak": 4
      },
      "unir_viz_mastery": {
        "xp": 420,
        "sectionsViewed": [
          "0-0", "0-1", "1-0", "2-0", "3-0", "3-1", "4-0", "4-1", "5-0", "6-0", "7-0", "8-0", "9-0", "10-0", "10-1", "11-0", "11-1", "11-2", "11-3", "11-4", "11-5", "11-6", "11-7", "11-8"
        ],
        "flashcardsViewed": 15,
        "achievements": [
          "first_section", "five_sections", "xp_100", "all_sections", "first_persona", "five_personas", "ten_personas", "twenty_personas", "all_personas", "flash_10"
        ],
        "personajesViewed": [
          "0-0", "0-1", "0-2", "0-3", "0-4", "0-5", "0-6", "0-7", "1-0", "1-1", "1-2", "1-3", "2-0", "2-1", "2-2", "3-0", "3-1", "4-0", "4-1", "5-1", "5-2", "5-3", "5-5", "5-4", "5-0", "4-4", "4-3", "4-2", "3-3", "3-2"
        ]
      },
      "unir_herr_mastery": {
        "xp": 222,
        "sectionsViewed": [
          "0-0", "1-0", "0-1", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0", "8-0", "9-0", "10-0"
        ],
        "flashcardsViewed": 51,
        "achievements": [
          "first_section", "flash_10", "xp_100", "five_sections", "all_sections", "flash_50"
        ],
        "personajesViewed": []
      },
      "unah_tesis_mastery": {
        "xp": 60,
        "sectionsViewed": ["0-0", "0-1", "0-2", "0-3", "0-4", "4-1"],
        "flashcardsViewed": 0,
        "personajesViewed": [],
        "achievements": ["first_section", "five_sections"]
      },
      "dp600_mastery": {
        "xp": 10,
        "sectionsViewed": ["0-0"],
        "flashcardsViewed": 0,
        "personajesViewed": [],
        "conceptosViewed": [],
        "achievements": ["first_section"]
      },
      "databricks_progress": {
        "0": { "status": "Mastered", "note": "", "viewed": true },
        "1": { "status": "Mastered", "note": "", "viewed": true },
        "2": { "status": "Mastered", "note": "", "viewed": true },
        "3": { "status": "Mastered", "note": "", "viewed": true },
        "4": { "status": "Mastered", "note": "", "viewed": true },
        "5": { "status": "Mastered", "note": "", "viewed": true },
        "6": { "status": "Mastered", "note": "", "viewed": true },
        "7": { "status": "Mastered", "note": "", "viewed": true },
        "8": { "status": "Mastered", "note": "", "viewed": false },
        "9": { "status": "Mastered", "note": "", "viewed": true },
        "10": { "status": "Mastered", "note": "", "viewed": false },
        "11": { "status": "Mastered", "note": "", "viewed": true },
        "12": { "status": "Mastered", "note": "" },
        "13": { "status": "Mastered", "note": "", "viewed": true },
        "14": { "status": "Mastered", "note": "", "viewed": false },
        "15": { "status": "Mastered", "note": "", "viewed": true },
        "16": { "status": "Mastered", "note": "", "viewed": false },
        "17": { "status": "Mastered", "note": "", "viewed": true },
        "18": { "status": "Mastered", "note": "", "viewed": false },
        "19": { "status": "Mastered", "note": "", "viewed": true },
        "20": { "status": "Mastered", "note": "", "viewed": false },
        "21": { "status": "Mastered", "note": "", "viewed": true }
      },
      "completedModules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      "theme": "dark"
    };

    // If localStorage is fresh / has no userProfile or totalQuestions is 0, auto-seed with master backup
    const currentProfile = localStorage.getItem('userProfile');
    const currentStats = localStorage.getItem('userStats');
    if (!currentProfile || !currentStats || currentStats === '{}') {
      console.log('[DataDojo] Auto-restoring master backup data into localStorage...');
      Object.keys(backupData).forEach(key => {
        localStorage.setItem(key, typeof backupData[key] === 'string' ? backupData[key] : JSON.stringify(backupData[key]));
      });
    }
  } catch(e) {
    console.warn('[DataDojo] Auto-restore error:', e);
  }
})();
