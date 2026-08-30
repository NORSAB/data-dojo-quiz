/**
 * Quiz Applicaton Core Script
 * =============================================================================
 * Handles data loading, quiz configuration, state management, and UI rendering.
 * @version 2.5.0
 * @author System
 * =============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  /* ===========================================================================
   * DATA VALIDATION & UTILITIES
   * =========================================================================== */

  // --- Global SQL Formatter ---
  window.formatSQL = function(sql) {
    if(!sql) return "";
    let html = sql.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const keywords = /\b(SELECT|FROM|WHERE|AND|OR|NOT|IN|JOIN|LEFT|RIGHT|INNER|OUTER|ON|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|CASE|WHEN|THEN|ELSE|END|IS|NULL|LIKE|DISTINCT|INSERT|INTO|VALUES|UPDATE|SET|DELETE|CREATE|TABLE|DROP|ALTER|ADD|COLUMN|PRIMARY|KEY|FOREIGN|REFERENCES|DEFAULT|CONSTRAINT|INDEX|VIEW|PROCEDURE|TRIGGER|FUNCTION|DATABASE|TRUNCATE|UNION|ALL|EXCEPT|INTERSECT|WITH|OVER|PARTITION|ROWS|BETWEEN|PRECEDING|CURRENT|FOLLOWING|UNBOUNDED)\b/gi;
    const functions = /\b(COUNT|SUM|AVG|MIN|MAX|ABS|CEIL|FLOOR|ROUND|TRUNCATE|LENGTH|LOWER|UPPER|TRIM|SUBSTRING|CONCAT|NOW|DATE|YEAR|MONTH|DAY|COALESCE|CAST|CONVERT|IFNULL|DATEDIFF|DATE_ADD|DATE_SUB)\b/gi;
    html = html.replace(keywords, '<span class="sql-kwd">$1</span>').replace(functions, '<span class="sql-fn">$1</span>');
    html = html.replace(/\b(\d+)\b/g, '<span class="sql-num">$1</span>');
    return `<pre style="margin:0;">${html}</pre>`;
  };

  // --- Global Text-to-Speech (TTS) Engine ---
  window.speakText = function(text, lang) {
    if (!('speechSynthesis' in window)) {
      return;
    }
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      return;
    }
    const cleanText = (text || '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
    if (!cleanText) return;
    const utterance = new SpeechSynthesisUtterance(cleanText);
    const targetLang = (lang === 'es' || /[\u00e1\u00e9\u00ed\u00f3\u00fa\u00f1]/i.test(cleanText)) ? 'es-ES' : 'en-US';
    utterance.lang = targetLang;
    utterance.rate = 1.0;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  };

  // Configure marked globally for syntax highlighting SQL blocks
  if (window.marked) {
    const renderer = {
      code(codeOrToken, lang, escaped) {
        let textStr = "";
        let langStr = "";
        
        if (typeof codeOrToken === 'object' && codeOrToken !== null) {
          textStr = codeOrToken.text;
          langStr = codeOrToken.lang;
        } else {
          textStr = codeOrToken;
          langStr = lang;
        }

        if (langStr === 'sql' || langStr === 'code') {
          return `<div class="code-terminal">
            <div class="terminal-header">
              <div class="window-dot dot-red"></div>
              <div class="window-dot dot-yellow"></div>
              <div class="window-dot dot-green"></div>
            </div>
            <div class="terminal-body">${window.formatSQL(textStr)}</div>
          </div>`;
        }
        return false; // Fallback to default
      }
    };
    marked.use({ renderer });
  }

  /**
   * Deduplicates questions based on ID to prevent loading conflicts.
   * @param {Array} questions - Raw question array.
   * @returns {Array} - Deduplicated question array.
   */
  function dedupeQuestions(questions) {
    const map = new Map();
    for (const q of questions) {
      if (!q || !q.id) continue;
      if (!map.has(q.id)) map.set(q.id, q);
    }
    return Array.from(map.values());
  }

  /**
   * Validates the integrity of the question bank.
   * Logs warnings if critical fields (ID, correct answer) are missing.
   * @param {Array} questions - Questions to validate.
   * @returns {Array} - List of error objects found.
   */
  function validateQuestions(questions) {
    const errors = [];
    const ids = new Set();
  
    for (const q of questions) {
      if (!q.id) errors.push({ id: "(missing)", issue: "Missing id" });
      else {
        if (ids.has(q.id)) errors.push({ id: q.id, issue: "Duplicate id" });
        ids.add(q.id);
      }
  
      if (!q.courseId) errors.push({ id: q.id, issue: "Missing courseId" });
      if (!q.lang) errors.push({ id: q.id, issue: "Missing lang" });
      if (!q.type || !["single_choice", "multiple_choice"].includes(q.type)) {
        // Tolerated types (e.g. order, true_false) are skipped in this check
      }
  
      if (typeof q.prompt !== "string" && !Array.isArray(q.promptBlocks)) {
        errors.push({ id: q.id, issue: "prompt must be a string or promptBlocks must be an array" });
      }
  
      if (!Array.isArray(q.options) || q.options.length < 2) {
        errors.push({ id: q.id, issue: "options must be an array with at least 2 items" });
      } else {
        const optIds = new Set(q.options.map(o => o?.id));
        for (const o of q.options) {
          if (!o?.id || (typeof o.text !== "string" && !Array.isArray(o.blocks))) {
            errors.push({ id: q.id, issue: "each option must have {id, text} or {id, blocks}" });
            break;
          }
        }
  
        if (!Array.isArray(q.correctIds) || q.correctIds.length < 1) {
          errors.push({ id: q.id, issue: "correctIds must be a non-empty array" });
        } else {
          for (const cid of q.correctIds) {
            if (!optIds.has(cid)) {
              errors.push({ id: q.id, issue: `correctIds contains '${cid}' not present in options` });
            }
          }
        }
      }
  
      // Optional explanation check omitted for brevity
    }
    return errors;
  }

  // --- Initial Validation execution ---
  window.questionsData = dedupeQuestions(window.questionsData || []);
  const validationErrors = validateQuestions(window.questionsData);
  if (validationErrors.length > 0) {
      console.warn("System: Validation errors detected in question bank.", validationErrors);
  } else {
      console.log("System: Question bank validated successfully. Total:", window.questionsData.length);
  }

  const questionsData = window.questionsData;
  /* ===========================================================================
   * STATE & CONFIGURATION
   * =========================================================================== */
  const defaultProviderData = [
    {
      id: "microsoft",
      name: "Microsoft",
      courses: [
        {
          id: "dp-600",
          name: "Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)",
          status: "active",
        },
        {
          id: "azure-ai-103",
          name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)",
          status: "active",
        },
        {
          id: "dp-700",
          name: "Microsoft Certified: Fabric Data Engineer Associate (DP-700)",
          status: "coming",
        },
      ],
    },
    {
      id: "google",
      name: "Google",
      courses: [
        {
          id: "gcp-ml",
          name: "Google Cloud Professional Machine Learning Engineer",
          status: "coming",
        },
        {
          id: "gcp-data",
          name: "Google Cloud Certified - Associate Data Practitioner",
          status: "coming",
        },
      ],
    },
    {
      id: "databricks",
      name: "Databricks",
      courses: [
        {
          id: "databricks-genai-engineer",
          name: "Databricks Certified Generative AI Engineer Associate",
          status: "active",
        },
        {
          id: "databricks-de",
          name: "Databricks Certified Data Engineer Associate",
          status: "coming",
        },
        {
          id: "databricks-da",
          name: "Databricks Certified Data Analyst Associate",
          status: "active",
        },
        {
          id: "databricks-fundamentals",
          name: "Databricks Fundamentals",
          status: "active",
        },
        {
          id: "databricks-aibi",
          name: "AI/BI for Data Analysts",
          status: "active",
        },
        {
          id: "databricks-sql-analytics",
          name: "SQL Analytics on Databricks",
          status: "active",
        },
        {
          id: "databricks-ml-a",
          name: "Databricks Certified Machine Learning Associate",
          status: "coming",
        },
        {
          id: "databricks-ml-p",
          name: "Databricks Certified Machine Learning Professional",
          status: "coming",
        },
      ],
    },
    {
      id: "python",
      name: "Python",
      courses: [
        { id: "py-basic", name: "Básico", status: "coming" },
        { id: "py-inter", name: "Intermedio", status: "coming" },
        { id: "py-adv", name: "Avanzado", status: "coming" },
        { id: "py-ml", name: "Machine Learning", status: "coming" },
      ],
    },
    {
      id: "tableau",
      name: "Tableau",
      courses: [
        {
          id: "tab-found",
          name: "Salesforce Certified Tableau Desktop Foundations",
          status: "coming",
        },
        {
          id: "tab-data",
          name: "Salesforce Certified Tableau Data Analyst",
          status: "coming",
        },
      ],
    },
    {
      id: "aws",
      name: "AWS",
      courses: [
        {
          id: "aws-ml-spec",
          name: "AWS Certified Machine Learning - Specialty",
          status: "coming",
        },
        {
          id: "aws-ml-eng",
          name: "AWS Certified Machine Learning Engineer - Associate",
          status: "coming",
        },
        {
          id: "aws-data",
          name: "AWS Certified Data Engineer - Associate",
          status: "coming",
        },
      ],
    },
    {
      id: "unir",
      name: "UNIR",
      courses: [
        {
          id: "unir-viz-interactiva",
          name: "Visualización Interactiva de la Información",
          status: "active",
        },
        {
          id: "unir-herramientas-viz",
          name: "Herramientas de Visualización",
          status: "active",
        },
      ],
    },
    {
      id: "unah",
      name: "UNAH",
      courses: [
        {
          id: "unah-tesis",
          name: "Tesis: Modelo Híbrido TCROC-Markov-SSRC",
          status: "active",
        },
      ],
    },
  ];

  // --- State ---
  let providerData = JSON.parse(JSON.stringify(defaultProviderData));
  let courseConfig = {};

  let currentProviderId = null;
  let currentCourseId = null;
  let currentLanguage = window.AppI18n ? window.AppI18n.getLanguage() : "es";

  // Codex (GPT-5) | 2026-08-23 22:09 CST | Fuente única para el idioma activo en navegación, examen y estudio.
  function getActiveLanguage() {
    return window.AppI18n ? window.AppI18n.getLanguage() : currentLanguage;
  }

  // Quiz State
  let currentQuizQuestions = [];
  let currentQuestionIndex = 0;
  let userAnswers = {};
  let score = 0;
  let timerInterval = null;
  let totalSeconds = 0;

  // Expose quiz state for translate_toggle.js (read-only bridge)
  Object.defineProperties(window, {
    currentQuizQuestions: { get() { return currentQuizQuestions; } },
    currentQuestionIndex: { get() { return currentQuestionIndex; } },
    currentCourseId: { get() { return currentCourseId; } },
    userAnswers: { get() { return userAnswers; } }
  });

  // --- DOM Elements ---
  const startScreen = document.getElementById("start-screen");
  const categoryList = document.getElementById("category-list");
  const courseList = document.getElementById("course-list");
  const courseSectionTitle = document.getElementById("course-section-title");

  const adminBtn = document.getElementById("admin-btn");
  const adminModal = document.getElementById("admin-modal");
  const adminCourseSelect = document.getElementById("admin-course-select");
  const adminSaveBtn = document.getElementById("admin-save");
  const adminCancelBtn = document.getElementById("admin-cancel");

  // Config Elements
  const configModal = document.getElementById("quiz-config-modal");
  const configSlider = document.getElementById("config-slider");
  const configCountDisplay = document.getElementById("config-count-display");
  const configTotalQuestions = document.getElementById(
    "config-total-questions"
  );
  const configStartBtn = document.getElementById("config-start");
  const configCancelBtn = document.getElementById("config-cancel");

  const quizUI = document.getElementById("quiz-ui");
  const resultsScreen = document.getElementById("results-screen");
  const themeToggle = document.getElementById("theme-toggle");
  const questionText = document.getElementById("question-text");
  const scenarioBlock = document.getElementById("scenario-block");
  const optionsList = document.getElementById("options-list");
  const checkBtn = document.getElementById("check-btn");
  const nextBtn = document.getElementById("next-btn");
  const prevBtn = document.getElementById("prev-btn");
  const finishBtn = document.getElementById("finish-btn-top");
  const feedbackArea = document.getElementById("feedback-area");
  // const currentScoreSpan = document.getElementById('current-score'); // Removed
  const timerDisplay = document.getElementById("timer-display");
  const typeInstruction = document.getElementById("type-instruction");
  const progressText = document.getElementById("progress-text");
  const questionMap = document.getElementById("question-map");
  const restartBtn = document.getElementById("restart-btn");
  const resultMsg = document.getElementById("result-msg");
  const studyCenterBtn = document.getElementById("study-center-btn");
  const studyHub = document.getElementById("study-hub");
  const studyHubGrid = document.getElementById("study-hub-grid");
  const studyHubSummary = document.getElementById("study-hub-summary");

    /* ===========================================================================
     * INITIALIZATION
     * =========================================================================== */
    /**
     * Main entry point for the application.
     * Loads configuration, renders initial UI, and sets up event listeners.
     */
    function init() {
        console.log("System: Initializing Quiz App...");
        loadConfig();
        renderCategories();
        renderStudyHub();

        if (adminBtn) adminBtn.addEventListener("click", openAdmin);
        
        if (finishBtn) {
            finishBtn.addEventListener("click", tryFinishQuiz);
        }
        
        if (adminCancelBtn) adminCancelBtn.addEventListener("click", closeAdmin);
        if (adminSaveBtn) adminSaveBtn.addEventListener("click", saveAdminConfig);

        // Configuration Modal Listeners
        if (configSlider) {
            configSlider.addEventListener(
                "input",
                (e) => (configCountDisplay.textContent = e.target.value)
            );
        }
        if (configCancelBtn) {
            configCancelBtn.addEventListener("click", () =>
                configModal.classList.add("hidden")
            );
        }

        // Global Event Listeners
        if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
        if (studyCenterBtn) studyCenterBtn.addEventListener("click", openStudyHub);
        if (checkBtn) checkBtn.addEventListener("click", checkAnswer);
        if (nextBtn) nextBtn.addEventListener("click", () => navigate(1));
        if (prevBtn) prevBtn.addEventListener("click", () => navigate(-1));
        if (restartBtn) restartBtn.addEventListener("click", returnToMenu);
        window.addEventListener('app-language-change', (event) => {
            currentLanguage = event.detail.language;
            if (configModal && !configModal.classList.contains('hidden') && currentCourseId) {
                window.startCourse(currentCourseId);
            } else if (currentCourseId && (!quizUI || quizUI.classList.contains('hidden'))) {
                if (typeof renderDomainCards === 'function') renderDomainCards(currentCourseId);
                if (typeof setupRealExamButton === 'function') setupRealExamButton(currentCourseId);
                if (typeof renderStudyPlan === 'function') renderStudyPlan(currentCourseId);
                if (typeof setupMarathonButton === 'function') setupMarathonButton(currentCourseId);
                if (typeof renderStudyCoach === 'function') renderStudyCoach(currentCourseId);
            }
        });

        // Default Category Selection — prefer databricks if visible, else pick first visible
        const databricksVisible = providerData.find(p => p.id === 'databricks' && !hiddenCategories.includes(p.id));
        const firstVisible = providerData.find(p => !hiddenCategories.includes(p.id));
        selectCategory(databricksVisible ? 'databricks' : (firstVisible ? firstVisible.id : 'databricks'));
        
        // Render Initial History
        renderHistory();
    }
  // --- Persistence Logic ---
  function loadConfig() {
    const stored = localStorage.getItem("quizAppConfig");
    if (stored) {
      courseConfig = JSON.parse(stored);
      applyConfigToData();
    }
  }

  function applyConfigToData() {
    providerData.forEach((p) => {
      p.courses.forEach((c) => {
        const conf = courseConfig[c.id];
        if (conf && conf.status) {
          c.status = conf.status;
        }
      });
    });
  }

  function saveConfig() {
    localStorage.setItem("quizAppConfig", JSON.stringify(courseConfig));
    applyConfigToData();
  }
  
  // --- Exam Persistence ---
  function saveState() {
      // Only save if a quiz is active
      if (quizUI.classList.contains("hidden")) return;
      
      const state = {
          courseId: currentCourseId,
          questions: currentQuizQuestions,
          index: currentQuestionIndex,
          answers: userAnswers,
          timer: totalSeconds,
          timestamp: Date.now()
      };
      localStorage.setItem("quizAppState", JSON.stringify(state));
  }
  
  function clearState() {
      localStorage.removeItem("quizAppState");
  }
  
  function loadState() {
      const stored = localStorage.getItem("quizAppState");
      if (!stored) return false;
      
      try {
          const state = JSON.parse(stored);
          if (!state.questions || state.questions.length === 0) return false;
          return state;
      } catch (e) {
          console.error("Error parsing saved state", e);
          return false;
      }
  }

  // Codex (GPT-5) | 2026-08-23 20:35 CST | Conservado como referencia; la implementación activa está más abajo.
  function finishQuizLegacy(questions) {
    const unansweredCount = questions.filter(q => !userAnswers[q.id]).length;
    if (unansweredCount > 0) {
        if (confirm(`You have unanswered questions (${unansweredCount}). Are you sure you want to finish?`)) {
            // Proceed
        } else {
            return;
        }
    }

    clearInterval(timerInterval);
    
    // Aggregate results
    let correctCount = 0;
    const missedIds = []; // For Weakness Mode
    const userAnswersMap = {}; // For Detailed History

    questions.forEach(q => {
        const selected = userAnswers[q.id];
        userAnswersMap[q.id] = selected; // Store answer

        if (selected === q.correctAnswer) {
            correctCount++;
        } else {
            missedIds.push(q.id);
        }
    });

    const score = Math.round((correctCount / questions.length) * 100);
    const passed = score >= 70;
    
    // Save to History with FULL details
    const questionIds = questions.map(q => q.id);
    saveExamResult(score, questions.length, passed, missedIds, questionIds, userAnswersMap);

    showResults(score, correctCount, questions.length, passed);
}

// ...

// --- History Logic ---
function saveExamResult(score, total, passed, missedIds = [], questionIds = [], userAnswersMap = {}) {
    const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    const result = {
        id: Date.now(), // Unique ID for finding this specific attempt
        date: new Date().toLocaleString(),
        score: score,
        total: total,
        passed: passed,
        mode: isRealExam ? "Real" : "Estudio",
        courseCheck: currentCourseId,
        missedIds: missedIds, // Store failures for Weakness Mode
        questionIds: questionIds, // SAVED: List of questions
        userAnswers: userAnswersMap // SAVED: User choices
    };
    
    // Keep last 10
    history.unshift(result);
    if (history.length > 50) history.pop(); // F17: Extended to 50 for better analytics
    
    localStorage.setItem("quizHistory", JSON.stringify(history));
    renderHistory();
}
  
  function renderHistory() {
      const container = document.getElementById("history-list");
      if (!container) return;
      
      let history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
      
      // Filter by Course if selected
      if (currentCourseId) {
          history = history.filter(h => h.courseCheck === currentCourseId);
      }
      
      container.innerHTML = "";
      
      // --- Trend Chart (SVG) ---
      if (history.length > 1) {
          const chartContainer = document.createElement("div");
          chartContainer.style.marginBottom = "1rem";
          chartContainer.style.padding = "0.5rem";
          chartContainer.style.background = "rgba(0,0,0,0.02)";
          chartContainer.style.borderRadius = "8px";
          
          // Reverse history for chart (oldest to newest)
          const chartData = [...history].reverse();
          const w = 250, h = 60;
          const points = chartData.map((d, i) => {
              const x = (i / (chartData.length - 1)) * w;
              const pct = d.total === 0 ? 0 : (d.score / d.total);
              const y = h - (pct * h);
              return `${x},${y}`;
          }).join(" ");

          chartContainer.innerHTML = `
            <div style="font-size:0.8rem; font-weight:bold; color:var(--secondary-color); margin-bottom:4px;">Progreso (Últimos ${history.length})</div>
            <svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible;">
                <!-- Border/Grid -->
                <line x1="0" y1="${h}" x2="${w}" y2="${h}" stroke="var(--border-color)" stroke-width="1" />
                <line x1="0" y1="0" x2="${w}" y2="0" stroke="var(--border-color)" stroke-width="1" stroke-dasharray="4" opacity="0.5" />
                
                <!-- Passing Line (70%) -->
                <line x1="0" y1="${h * 0.3}" x2="${w}" y2="${h * 0.3}" stroke="var(--success-color)" stroke-width="1" stroke-dasharray="2" opacity="0.3" />
                
                <!-- Trend Line -->
                <polyline fill="none" stroke="var(--primary-color)" stroke-width="2" points="${points}" />
                
                <!-- Dots -->
                ${chartData.map((d, i) => {
                    const x = (i / (chartData.length - 1)) * w;
                    const pct = d.total === 0 ? 0 : (d.score / d.total);
                    const y = h - (pct * h);
                    const color = pct >= 0.7 ? "var(--success-color)" : "var(--danger-color)";
                    return `<circle cx="${x}" cy="${y}" r="3" fill="${color}" stroke="white" stroke-width="1" />`;
                }).join("")}
            </svg>
          `;
          container.appendChild(chartContainer);
      }

      if (history.length === 0) {
          container.innerHTML = '<p style="color: var(--text-muted, #64748b); font-style: italic;">No hay exámenes recientes.</p>';
          return;
      }
      
      history.forEach(item => {
          const div = document.createElement("div");
          div.style.cssText = "display: flex; justify-content: space-between; padding: 0.5rem; border-bottom: 1px solid var(--border-color); font-size: 0.9rem;";
          
          const scorePercent = item.total === 0 ? 0 : Math.round((item.score / item.total) * 100);
          const color = item.passed ? "var(--success-color)" : "var(--danger-color)";
          
          div.innerHTML = `
            <div>
                 <span>${item.date} <small>(${item.mode})</small></span>
                 <br>
                 <span style="font-size:0.8rem; color:var(--text-muted, #64748b);">${item.courseCheck || "?"}</span>
            </div>
            <div style="text-align:right;">
                <span style="color: ${color}; font-weight: bold; display:block;">${scorePercent}% (${item.score}/${item.total})</span>
                ${item.questionIds ? `<button class="btn btn-sm btn-outline" style="margin-top:4px; transform:scale(0.9);" onclick="window.loadHistoryReview(${item.id})">Review</button>` : ''}
            </div>
          `;
          container.appendChild(div);
      });
  }
  
  const clearHistBtn = document.getElementById("clear-history-btn");
  if(clearHistBtn) {
      clearHistBtn.onclick = () => {
          if(confirm("¿Borrar todo el historial?")) {
              localStorage.removeItem("quizHistory");
              renderHistory();
          }
      };
  }

  // --- Badges UI Logic ---
  function renderBadges() {
      const stats = getGamificationStats();
      const grid = document.getElementById("badges-grid");
      const savedBadges = stats.badges || [];
      
      // Use global badgesConfig
      if(grid && typeof badgesConfig !== 'undefined') {
          grid.innerHTML = "";

          // --- BELT ROADMAP ---
          const currentXP = calculateXP(stats);
          const currentBelt = getBelt(currentXP);
          
          const roadmapDiv = document.createElement("div");
          roadmapDiv.style.gridColumn = "1 / -1";
          roadmapDiv.style.marginBottom = "2rem";
          roadmapDiv.style.background = "rgba(0,0,0,0.05)";
          roadmapDiv.style.padding = "1rem";
          roadmapDiv.style.borderRadius = "8px";
          
          roadmapDiv.innerHTML = `<h4 style="margin-top:0; margin-bottom:10px;"><svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg> Camino del Cinturón</h4>`;
          
          const stepsContainer = document.createElement("div");
          stepsContainer.style.display = "flex";
          stepsContainer.style.overflowX = "auto";
          stepsContainer.style.gap = "1rem";
          stepsContainer.style.paddingBottom = "10px";
          
          beltsConfig.forEach(belt => {
             const isUnlocked = currentXP >= belt.minXP;
             const isCurrent = currentBelt.name === belt.name;
             const opacity = isUnlocked ? 1 : 0.4;
             const border = isCurrent ? `2px solid var(--primary-color)` : `1px solid transparent`;
             const bg = isCurrent ? `var(--bg-card)` : 'transparent';
             
             // Try to approximate date? (Or just show status)
             let statusText = isUnlocked ? "Completado" : `${belt.minXP} XP`;
             if (isCurrent) statusText = "ACTUAL";
             
             stepsContainer.innerHTML += `
                <div style="flex: 0 0 100px; text-align: center; opacity: ${opacity}; border: ${border}; background: ${bg}; padding: 8px; border-radius: 8px;">
                    <div style="font-size: 2rem;">${getBeltSvgIcon(belt)}</div>
                    <div style="font-size: 0.8rem; font-weight: bold; margin: 4px 0;">${belt.name.replace("Cinturón ", "")}</div>
                    <div style="font-size: 0.7rem;">${statusText}</div>
                </div>
             `;
          });
          roadmapDiv.appendChild(stepsContainer);
          grid.appendChild(roadmapDiv);

          // --- BADGES ---
          // --- BADGES ---
          
          // 1. Map to object
          const badgeList = badgesConfig.map(def => ({ 
              def, 
              earned: savedBadges.find(b => b.id === def.id) 
          }));

          // 2. Sort: Unlocked first, then by Rarity
          const rarityMap = { platinum: 4, gold: 3, silver: 2, bronze: 1, secret: 0 };
          badgeList.sort((a, b) => {
              if (a.earned && !b.earned) return -1;
              if (!a.earned && b.earned) return 1;
              return rarityMap[b.def.rarity] - rarityMap[a.def.rarity];
          });

          // 3. Render
          badgeList.forEach(item => {
              const { def, earned } = item;
              const isLocked = !earned;
              const isSecret = def.rarity === 'secret' && isLocked;
              
              const div = document.createElement("div");
              div.className = `badge-card ${earned ? 'badge-' + def.rarity : 'badge-locked'}`;
              
              let icon = getBadgeIcon(def.id);
              let name = def.name;
              let desc = def.desc;
              
              if (isSecret) {
                  icon = '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>';
                  name = "Secreto";
                  desc = def.secret || "???";
              }
              
              // Progress Logic
              let progressHTML = "";
              if (isLocked && def.progress) {
                  const p = def.progress(stats);
                  const pct = Math.min(100, (p.cur / p.max) * 100);
                  progressHTML = `
                      <div class="badge-progress-container">
                          <div class="badge-progress-bar" style="width: ${pct}%"></div>
                      </div>
                      <div style="font-size: 0.7rem; color: var(--text-muted, #64748b); margin-top: 2px;">${p.cur} / ${p.max}</div>
                  `;
              }

              div.innerHTML = `
                  <div style="display:flex; align-items:center; justify-content:center; color: var(--primary-color); margin-bottom: 4px;">${icon}</div>
                  <div style="font-weight: bold; color: var(--text-color);">${name}</div>
                  <div style="font-size: 0.8rem; color: var(--text-muted, #64748b); text-align: center;">${desc}</div>
                  ${progressHTML}
                  ${earned ? `<div style="font-size: 0.7rem; color: var(--success-color); font-weight:bold; margin-top: 4px;"><svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" style="vertical-align:middle;"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg> ${earned.date}</div>` : ''}
              `;
              grid.appendChild(div);
          });
      }
      
      const statsDiv = document.getElementById("gamification-stats");
      if(statsDiv) {
          const statItems = [
              { label: "Preguntas", val: stats.totalQuestions, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M17 3H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm5 10H7v-1c0-2 4-3.1 5-3.1s5 1.1 5 3.1v1z"/></svg>' },
              { label: "Rachas", val: stats.studyStreak, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>' },
              { label: "Exámenes", val: stats.totalExamsTaken || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>' },
              { label: "Cinturón", val: getBelt(calculateXP(stats)).name, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>' },
              { label: "Temas", val: (stats.topicsStudied || []).length, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z"/></svg>' },
              { label: "Flashcards", val: stats.flashcardsViewed || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>' },
              { label: "Personajes", val: stats.personajesViewed || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>' },
              { label: "Conceptos", val: stats.conceptosViewed || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>' },
              { label: "Comandos", val: stats.comandosViewed || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>' },
              { label: "Dominios", val: stats.domainSectionsViewed || 0, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>' },
              { label: "Certificados", val: (JSON.parse(localStorage.getItem('certifiedCourses') || '[]')).length, icon: '<svg viewBox="0 0 24 24" width="24" height="24" fill="var(--primary-color)"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>' }
          ];

          statsDiv.innerHTML = '';
          statsDiv.style.display = 'grid';
          statsDiv.style.gridTemplateColumns = 'repeat(3, 1fr)';
          statsDiv.style.gap = '1rem';
          statsDiv.style.background = 'transparent';
          statsDiv.style.padding = '0';
          
          statItems.forEach(item => {
              const div = document.createElement('div');
              div.className = 'badge-card';
              div.style.border = '1px solid var(--border-color)';
              div.style.justifyContent = 'center';
              div.style.background = 'var(--bg-card)';
              
              let displayVal = item.val;
              if (item.label === "Cinturón") displayVal = displayVal.replace("Cinturón ", ""); // Simplify name 

              div.innerHTML = `
                  <div style="font-size: 2rem; margin-bottom: 5px;">${item.icon}</div>
                  <div style="font-weight: bold; color: var(--text-color); font-size: 0.9rem;">${item.label}</div>
                  <div style="font-size: 1.2rem; color: var(--primary-color); font-weight: bold; margin-top: 2px;">${displayVal}</div>
              `;
              statsDiv.appendChild(div);
          });
      }
      
      const modal = document.getElementById("badges-modal");
      if(modal) modal.classList.remove("hidden");
  }

  const badgesBtn = document.getElementById("badges-btn");
  if(badgesBtn) badgesBtn.onclick = renderBadges;

  // --- Gamification Logic ---
  function getGamificationStats() {
      const defaults = {
          totalQuestions: 0,
          perfectExams: 0,
          studyStreak: 0,
          lastStudyDate: null,
          badges: [],
          // New Stats v2
          consecutiveDays: 0, 
          questionsPerDomain: {}, 
          flashcardsViewed: 0,
          lastStudyTime: null, // HH:MM
          failedQuestionsRevisited: 0,
          perfectConsecutiveExams: 0,
          totalExamsTaken: 0,
          fastExamsCount: 0,
          // New Stats v3 (Advanced)
          topicsStudied: [], // IDs of completed topics
          weekendStudy: { sat: false, sun: false, week: null },
          correctStreak: 0,
          maxCorrectStreak: 0,
          explanationsViewed: 0,
          skepticCount: 0,
          // Stats v4 (Conceptos — Databricks)
          conceptosViewed: 0,
          comandosViewed: 0,
          // Stats v5 (Domain Mastery — Databricks 9 Domains)
          domainsStudied: 0,       // Total domain sections completed
          domainSectionsViewed: 0,  // Total items viewed across all 9 domains
          // Stats v6 (Interactive Systems & Games)
          architecturesValidated: 0,
          survivalHighScore: 0,
          cliChallengesCompleted: 0,
          oralExamsCompleted: 0,
          promptPresetsExplored: 0,
          decisionsExplored: 0,
          rescueDecksReviewed: 0,
          dailyDrillsCompleted: 0,
          interactiveXP: 0
      };
      
      const stored = JSON.parse(localStorage.getItem("userStats") || "{}");
      const stats = { ...defaults, ...stored };
      
      // --- SYNC TOPICS LOGIC ---
      // Ensure we count Mastered AND Learning topics from all courses
      try {
          const dbData = JSON.parse(localStorage.getItem("databricks_progress") || "{}");
          const dpData = JSON.parse(localStorage.getItem("dp600_progress") || "{}");
          
          const uniqueTopics = new Set();
          
          // Helper to collect IDs
          const collectTopics = (progObj) => {
              Object.entries(progObj).forEach(([id, val]) => {
                  let status = val; // simple string format
                  if (typeof val === 'object') status = val.status;
                  
                  if (status === 'Mastered' || status === 'Learning') {
                      uniqueTopics.add(id);
                  }
              });
          };
          
          collectTopics(dbData);
          collectTopics(dpData);
          
          const currentCount = (stats.topicsStudied || []).length;
          if (currentCount !== uniqueTopics.size) {
              // Convert Set to Array
              stats.topicsStudied = Array.from(uniqueTopics);
              saveGamificationStats(stats);
          }
      } catch (e) { console.error("Error syncing topics", e); }

      // --- SYNC CONCEPTOS FROM DOJO MASTERY ---
      // Read conceptosViewed count from all Databricks mastery stores
      try {
          let totalConceptosRead = 0;
          ['databricks_da_mastery', 'databricks_fund_mastery', 'databricks_genai_mastery', 'dp600_mastery'].forEach(mk => {
              const m = JSON.parse(localStorage.getItem(mk) || '{}');
              if (m.conceptosViewed && Array.isArray(m.conceptosViewed)) {
                  totalConceptosRead += m.conceptosViewed.length;
              }
          });
          if (totalConceptosRead > (stats.conceptosViewed || 0)) {
              stats.conceptosViewed = totalConceptosRead;
              saveGamificationStats(stats);
          }
      } catch (e) { console.error("Error syncing conceptos", e); }

      // --- SYNC COMANDOS SQL FROM DOJO MASTERY ---
      try {
          let totalCmdRead = 0;
          ['databricks_da_mastery', 'databricks_fund_mastery', 'databricks_genai_mastery', 'dp600_mastery'].forEach(mk => {
              const m = JSON.parse(localStorage.getItem(mk) || '{}');
              if (m.comandosViewed && Array.isArray(m.comandosViewed)) {
                  totalCmdRead += m.comandosViewed.length;
              }
          });
          if (totalCmdRead > (stats.comandosViewed || 0)) {
              stats.comandosViewed = totalCmdRead;
              saveGamificationStats(stats);
          }
      } catch (e) { console.error("Error syncing comandos", e); }

      // --- SYNC DOMAIN MASTERY STUDY SECTIONS ---
      try {
          const daMastery = JSON.parse(localStorage.getItem('databricks_da_mastery') || '{}');
          const viewed = daMastery.sectionsViewed || [];
          // Domain sections start after the base + expanded study content
          // Count how many domain-specific sections have been viewed
          const domainViewCount = viewed.length; // Total sections viewed (includes base + expanded + domains)
          if (domainViewCount > (stats.domainSectionsViewed || 0)) {
              stats.domainSectionsViewed = domainViewCount;
              saveGamificationStats(stats);
          }
          // Count mastery XP from domain study
          const domainXP = daMastery.xp || 0;
          if (domainXP > 0 && !stats._domainXPSynced) {
              // XP is already tracked via mastery keys in calculateXP, no double-counting needed
          }
      } catch (e) { console.error("Error syncing domain mastery", e); }
      
      return stats;
  }

  function saveGamificationStats(stats) {
      localStorage.setItem("userStats", JSON.stringify(stats));
  }

  window.getGamificationStats = getGamificationStats;
  window.saveGamificationStats = saveGamificationStats;
  window.addXP = function(amount, category) {
    try {
      const stats = getGamificationStats();
      stats.interactiveXP = (stats.interactiveXP || 0) + (Number(amount) || 0);
      if (category) {
        stats[category] = (stats[category] || 0) + 1;
      }
      saveGamificationStats(stats);
      if (typeof updateGamification === 'function') {
        updateGamification({ total: 0, score: 0, passed: false, mode: 'InteractiveXP' });
      }
      if (typeof window.updateGreeting === 'function') {
        window.updateGreeting();
      }
    } catch (e) {
      console.warn('addXP error:', e);
    }
  };


  // Helper: generate SVG belt icon from color (replaces emoji belt icons)
  window.getBeltSvgIcon = function(belt) {
    const c = belt.color || '#999';
    if (belt.name.includes('Dragón')) {
      return `<svg viewBox="0 0 24 24" width="28" height="28" fill="${c}"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="28" height="28" fill="${c}"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>`;
  };

  // --- Advanced Badge Configuration ---
  const beltsConfig = [
    { name: "Cinturón Blanco", minXP: 0, icon: "shield", color: "#f0f0f0" },
    { name: "Cinturón Naranja", minXP: 500, icon: "shield", color: "#fd7e14" },
    { name: "Cinturón Rojo", minXP: 1500, icon: "shield", color: "#dc3545" },
    { name: "Cinturón Verde", minXP: 3000, icon: "shield", color: "#28a745" },
    { name: "Cinturón Café", minXP: 5000, icon: "shield", color: "#795548" },
    { name: "Cinturón Azul", minXP: 8000, icon: "shield", color: "#007bff" },
    { name: "Cinturón Negro", minXP: 12000, icon: "shield", color: "#343a40" },
    { name: "Cinturón Negro (Dragón 1)", minXP: 16000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 2)", minXP: 20000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 3)", minXP: 25000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 4)", minXP: 30000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 5)", minXP: 35000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 6)", minXP: 45000, icon: "dragon", color: "#000000" },
    { name: "Cinturón Negro (Dragón 7)", minXP: 60000, icon: "dragon", color: "#000000" }
];

function calculateXP(stats) {
    let xp = 0;
    
    // Core Activities
    xp += (stats.totalQuestions || 0) * 1;      // 1 XP per question
    xp += (stats.examsPassed || 0) * 100;       // 100 XP per exam passed
    xp += (stats.perfectExams || 0) * 300;      // 300 XP per perfect exam
    
    // Mastery
    const topics = stats.topicsStudied || [];
    xp += topics.length * 50;                   // 50 XP per topic mastered
    
    // Consistency
    xp += (stats.maxCorrectStreak || 0) * 5;    // 5 XP per max streak point

    // Study Mode XP (ALL course modules including GenAI and Azure AI-103)
    try {
        const masteryKeys = [
            'unir_viz_mastery',
            'unir_herr_mastery',
            'databricks_da_mastery',
            'databricks_fund_mastery',
            'databricks_genai_mastery',
            'azure_ai103_mastery',
            'dp600_mastery',
            'unah_tesis_mastery'
        ];
        masteryKeys.forEach(key => {
            const m = JSON.parse(localStorage.getItem(key) || '{}');
            xp += (m.xp || 0);
        });
    } catch(e) { /* ignore parse errors */ }

    // Direct Interactive Systems XP
    xp += (stats.interactiveXP || 0);
    xp += ((stats.architecturesValidated || 0) * 40);
    xp += ((stats.cliChallengesCompleted || 0) * 30);
    xp += ((stats.oralExamsCompleted || 0) * 40);
    xp += ((stats.promptPresetsExplored || 0) * 15);
    xp += ((stats.decisionsExplored || 0) * 20);
    xp += ((stats.dailyDrillsCompleted || 0) * 50);
    xp += ((stats.rescueDecksReviewed || 0) * 25);
    xp += ((stats.caseStudiesCompleted || 0) * 60);
    xp += (stats.survivalHighScore || 0);

    // Certifications bonus
    try {
        const certifiedCount = (JSON.parse(localStorage.getItem('certifiedCourses') || '[]')).length;
        xp += certifiedCount * 500;  // 500 XP per certification obtained
    } catch(e) { /* ignore */ }
    
    return xp;
}

function getBelt(xp) {
    // Find highest belt where xp >= minXP
    return beltsConfig.reduce((prev, curr) => (xp >= curr.minXP ? curr : prev), beltsConfig[0]);
}

// SVG Icon Registry for Badges (replaces all emoji icons)
const badgeSvgIcons = {
  imparable: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>',
  streak3: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>',
  morning: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>',
  earlybird: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z"/></svg>',
  weekend: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',
  novice: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 7.13l.97 2.29.47 1.11 1.2.1 2.47.21-1.88 1.63-.91.79.27 1.18.56 2.41-2.12-1.28L12 14.93l-1.03.63-2.12 1.28.56-2.41.27-1.18-.91-.79-1.88-1.63 2.47-.21 1.2-.1.47-1.11L12 7.13M12 2l-2.45 6.36L3 9.17l4.93 4.27L6.37 20 12 16.45 17.63 20l-1.56-6.56L21 9.17l-6.55-.81L12 2z"/></svg>',
  scholar: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  expert: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>',
  grandmaster: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>',
  perfect: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7-6-4.6h7.6z"/></svg>',
  machine: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M22 14h-1c0-3.87-3.13-7-7-7h-1V5.73A2 2 0 0014 4c0-1.1-.9-2-2-2s-2 .9-2 2c0 .74.4 1.39 1 1.73V7h-1c-3.87 0-7 3.13-7 7H2c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h1v1c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-1h1c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1z"/></svg>',
  sniper: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3-8c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z"/></svg>',
  flash50: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/></svg>',
  polymath: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
  phoenix: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  flash: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',
  scientist: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/></svg>',
  globetrotter: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
  detective: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/></svg>',
  flipmaster: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>',
  skeptic: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"/></svg>',
  survivor: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"/></svg>',
  timeattack: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/></svg>',
  hacker: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/></svg>',
  domain_rookie: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/></svg>',
  domain_explorer: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z"/></svg>',
  domain_warrior: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',
  domain_master: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>',
  domain_sensei: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',
  domain_certified: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>',
  // New Interactive Badges
  arch_rookie: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z"/></svg>',
  arch_master: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
  arch_grandmaster: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/></svg>',
  survival_fighter: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
  survival_hero: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>',
  survival_god: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
  cli_rookie: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.4-1.4 2.1-2.1-2.1-2.1L7.5 10l3.5 3.5-3.5 3.5z"/></svg>',
  cli_ninja: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  cli_guru: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>',
  voice_debater: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15c-.08-.49-.49-.85-.98-.85-.61 0-1.09.54-1 1.14.49 3 2.89 5.35 5.91 5.78V20c0 .55.45 1 1 1s1-.45 1-1v-2.08c3.02-.43 5.42-2.78 5.91-5.78.1-.6-.39-1.14-1-1.14z"/></svg>',
  voice_orator: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>',
  prompt_tuner: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 11-2 0v-.07A7.003 7.003 0 015.07 11H5a1 1 0 010-2h.07A7.003 7.003 0 0111 5.07V5a1 1 0 112 0v.07A7.003 7.003 0 0118.93 11H19a1 1 0 010 2h-.07A7.003 7.003 0 0113 16.93z"/></svg>',
  decision_strategist: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V16h8v-1.26A7 7 0 0012 2z"/></svg>',
  error_slayer: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',
  daily_drill_master: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11z"/></svg>',
  fabric_directlake_pro: '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>'
};

// Helper to get SVG icon for a badge
window.getBadgeIcon = function(badgeId) {
  return badgeSvgIcons[badgeId] || '<svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
};

const badgesConfig = [
      // 1. Constancia (Retention)
      { id: "imparable", name: "Imparable", icon: "calendar", rarity: "gold", desc: "Estudia 7 días seguidos", condition: s => s.studyStreak >= 7, progress: s => ({cur: s.studyStreak, max: 7}) },
      { id: "streak3", name: "Constancia", icon: "fire", rarity: "bronze", desc: "Racha de 3 días seguidos", condition: s => s.studyStreak >= 3, progress: s => ({cur: s.studyStreak, max: 3}) },
      { id: "morning", name: "Búho", icon: "moon", rarity: "silver", desc: "Estudia tarde en la noche (23:00 - 04:00)", condition: s => {
          if (!s.lastStudyTime) return false;
          const h = parseInt(s.lastStudyTime.split(':')[0]);
          return h >= 23 || h < 4;
      }},
      { id: "earlybird", name: "Madrugador", icon: "sun", rarity: "silver", desc: "Estudia temprano (05:00 - 08:00)", condition: s => {
          if (!s.lastStudyTime) return false;
          const h = parseInt(s.lastStudyTime.split(':')[0]);
          return h >= 5 && h <= 8;
      }},
      { id: "weekend", name: "Weekend Warrior", icon: "shield", rarity: "silver", desc: "Estudia sábado y domingo", condition: s => s.weekendStudy && s.weekendStudy.sat && s.weekendStudy.sun },
      
      // 2. Dominio (Mastery)
      { id: "novice", name: "Novato", icon: "star-outline", rarity: "bronze", desc: "Completa tu primer examen", condition: s => s.totalExamsTaken >= 1 },
      { id: "scholar", name: "Estudioso", icon: "star", rarity: "silver", desc: "Responde 100 preguntas", condition: s => s.totalQuestions >= 100, progress: s => ({cur: s.totalQuestions, max: 100}) },
      { id: "expert", name: "Experto", icon: "crown", rarity: "gold", desc: "Responde 500 preguntas", condition: s => s.totalQuestions >= 500, progress: s => ({cur: s.totalQuestions, max: 500}) },
      { id: "grandmaster", name: "Gran Maestro", icon: "crown", rarity: "platinum", desc: "Responde 5,000 preguntas", condition: s => s.totalQuestions >= 5000, progress: s => ({cur: s.totalQuestions, max: 5000}) },
      { id: "perfect", name: "Perfección", icon: "trophy", rarity: "gold", desc: "100% en examen real", condition: s => s.perfectExams >= 1 },
      { id: "machine", name: "La Máquina", icon: "robot", rarity: "platinum", desc: "3 exámenes perfectos seguidos", secret: "Consigue 3 exámenes perfectos seguidos", condition: s => s.perfectConsecutiveExams >= 3, progress: s => ({cur: s.perfectConsecutiveExams, max: 3}) },
      { id: "sniper", name: "Francotirador", icon: "target", rarity: "gold", desc: "Racha de 20 aciertos seguidos", condition: s => s.maxCorrectStreak >= 20, progress: s => ({cur: s.maxCorrectStreak, max: 20}) },
      { id: "flash50", name: "Memoria Fotográfica", icon: "brain", rarity: "silver", desc: "Revisa 50 flashcards", condition: s => s.flashcardsViewed >= 50, progress: s => ({cur: s.flashcardsViewed, max: 50}) },
      { id: "polymath", name: "Erudito", icon: "scroll", rarity: "platinum", desc: "Completa 10 temas de estudio", condition: s => s.topicsStudied && s.topicsStudied.length >= 10, progress: s => ({cur: (s.topicsStudied || []).length, max: 10}) },

      // 3. Resiliencia & Exploración
      { id: "phoenix", name: "Ave Fénix", icon: "phoenix", rarity: "silver", desc: "Reprueba y aprueba el mismo día", condition: s => s.hasFailedAndPassedSameDay }, 
      { id: "flash", name: "Flash", icon: "bolt", rarity: "gold", desc: "Examen aprobado en < 1 min", condition: s => s.fastExamsCount >= 1 },
      { id: "scientist", name: "Científico", icon: "flask", rarity: "bronze", desc: "Juega modo Simulación y Real", condition: s => s.hasPlayedSim && s.hasPlayedReal },
      { id: "globetrotter", name: "Trotamundos", icon: "globe", rarity: "silver", desc: "Juega todas las categorías", condition: s => Object.keys(s.questionsPerDomain || {}).length >= 5 },
      { id: "detective", name: "Detective", icon: "search", rarity: "bronze", desc: "Lee 10 explicaciones", condition: s => (s.explanationsViewed || 0) >= 10, progress: s => ({cur: s.explanationsViewed || 0, max: 10}) },
      { id: "flipmaster", name: "Flip Master", icon: "refresh", rarity: "gold", desc: "Revisa 500 flashcards", condition: s => s.flashcardsViewed >= 500, progress: s => ({cur: s.flashcardsViewed, max: 500}) },

      // 5. Personajes (Visualización)
      { id: "curioso_personas", name: "Curioso", icon: "detective", rarity: "bronze", desc: "Lee 5 personajes clave", condition: s => (s.personajesViewed || 0) >= 5, progress: s => ({cur: s.personajesViewed || 0, max: 5}) },
      { id: "historiador", name: "Historiador", icon: "globetrotter", rarity: "silver", desc: "Lee 15 personajes clave", condition: s => (s.personajesViewed || 0) >= 15, progress: s => ({cur: s.personajesViewed || 0, max: 15}) },
      { id: "cronista", name: "Cronista Visual", icon: "polymath", rarity: "gold", desc: "Lee todos los personajes (30)", condition: s => (s.personajesViewed || 0) >= 30, progress: s => ({cur: s.personajesViewed || 0, max: 30}) },
      { id: "renacentista", name: "El Renacentista", icon: "scientist", rarity: "secret", desc: "Domina personajes y flashcards", secret: "Lee 20+ personajes y 100+ flashcards", condition: s => (s.personajesViewed || 0) >= 20 && (s.flashcardsViewed || 0) >= 100 },

      // 6. Conceptos Clave (Databricks)
      { id: "concepto_aprendiz", name: "Aprendiz Lakehouse", icon: "shield", rarity: "bronze", desc: "Lee 1 concepto Databricks", condition: s => (s.conceptosViewed || 0) >= 1, progress: s => ({cur: s.conceptosViewed || 0, max: 1}) },
      { id: "concepto_explorador", name: "Explorador Delta", icon: "detective", rarity: "bronze", desc: "Lee 5 conceptos Databricks", condition: s => (s.conceptosViewed || 0) >= 5, progress: s => ({cur: s.conceptosViewed || 0, max: 5}) },
      { id: "concepto_architect", name: "Architect Certified", icon: "shield", rarity: "silver", desc: "Lee 15 conceptos Databricks", condition: s => (s.conceptosViewed || 0) >= 15, progress: s => ({cur: s.conceptosViewed || 0, max: 15}) },
      { id: "concepto_unity", name: "Unity Catalog Master", icon: "polymath", rarity: "gold", desc: "Lee 25 conceptos Databricks", condition: s => (s.conceptosViewed || 0) >= 25, progress: s => ({cur: s.conceptosViewed || 0, max: 25}) },
      { id: "concepto_platform", name: "Data Intelligence Master", icon: "expert", rarity: "platinum", desc: "Lee todos los conceptos (37)", condition: s => (s.conceptosViewed || 0) >= 37, progress: s => ({cur: s.conceptosViewed || 0, max: 37}) },
      { id: "concepto_lakehouse", name: "Mente de Lakehouse", icon: "flask", rarity: "secret", desc: "Maestro total de Databricks", secret: "Lee todos los conceptos y 55+ flashcards", condition: s => (s.conceptosViewed || 0) >= 37 && (s.flashcardsViewed || 0) >= 55 },

      // 7. Comandos SQL (Databricks)
      { id: "cmd_rookie", name: "SQL Rookie", icon: "flask", rarity: "bronze", desc: "Lee 1 comando SQL", condition: s => (s.comandosViewed || 0) >= 1, progress: s => ({cur: s.comandosViewed || 0, max: 1}) },
      { id: "cmd_builder", name: "Query Builder", icon: "detective", rarity: "bronze", desc: "Lee 5 comandos SQL", condition: s => (s.comandosViewed || 0) >= 5, progress: s => ({cur: s.comandosViewed || 0, max: 5}) },
      { id: "cmd_sensei", name: "SQL Sensei", icon: "shield", rarity: "silver", desc: "Lee 10 comandos SQL", condition: s => (s.comandosViewed || 0) >= 10, progress: s => ({cur: s.comandosViewed || 0, max: 10}) },
      { id: "cmd_master", name: "Query Master", icon: "expert", rarity: "gold", desc: "Lee todos los comandos SQL", condition: s => (s.comandosViewed || 0) >= 12, progress: s => ({cur: s.comandosViewed || 0, max: 12}) },

      // 8. Domain Mastery (9 Databricks Exam Domains)
      { id: "domain_rookie", name: "Domain Rookie", icon: "novice", rarity: "bronze", desc: "Estudia 5 secciones de dominio", condition: s => (s.domainSectionsViewed || 0) >= 5, progress: s => ({cur: s.domainSectionsViewed || 0, max: 5}) },
      { id: "domain_explorer", name: "Domain Explorer", icon: "detective", rarity: "bronze", desc: "Estudia 10 secciones de dominio", condition: s => (s.domainSectionsViewed || 0) >= 10, progress: s => ({cur: s.domainSectionsViewed || 0, max: 10}) },
      { id: "domain_warrior", name: "Domain Warrior", icon: "shield", rarity: "silver", desc: "Estudia 20 secciones de dominio", condition: s => (s.domainSectionsViewed || 0) >= 20, progress: s => ({cur: s.domainSectionsViewed || 0, max: 20}) },
      { id: "domain_master", name: "Domain Master", icon: "expert", rarity: "gold", desc: "Estudia 40 secciones de dominio", condition: s => (s.domainSectionsViewed || 0) >= 40, progress: s => ({cur: s.domainSectionsViewed || 0, max: 40}) },
      { id: "domain_sensei", name: "9-Domain Sensei", icon: "grandmaster", rarity: "platinum", desc: "Domina las 9 secciones del examen (60+ secciones)", condition: s => (s.domainSectionsViewed || 0) >= 60, progress: s => ({cur: s.domainSectionsViewed || 0, max: 60}) },
      { id: "domain_certified", name: "Certified Ready", icon: "phoenix", rarity: "secret", desc: "Listo para la certificación", secret: "Completa 60+ secciones + 200 preguntas + 10 conceptos", condition: s => (s.domainSectionsViewed || 0) >= 60 && (s.totalQuestions || 0) >= 200 && (s.conceptosViewed || 0) >= 10 },

      // 9. Secret / Fun
      { id: "skeptic", name: "El Escéptico", icon: "question", rarity: "secret", desc: "Corrige su respuesta y acierta", secret: "Cambia una respuesta errónea por la correcta", condition: s => s.skepticCount >= 1 },
      { id: "survivor", name: "Por los pelos", icon: "smile", rarity: "secret", desc: "Aprueba con exactamente 70%", secret: "Aprueba con la nota mínima justa", condition: s => s.survivorUnlock },
      { id: "timeattack", name: "Time Attack", icon: "timer", rarity: "platinum", desc: "Examen Real >10 pgs en <2 min", condition: s => s.timeAttackUnlock },

      // 10. Interactive Systems & Advanced Dojo Features
      { id: "arch_rookie", name: "Arquitecto Aprendiz", icon: "arch_rookie", rarity: "bronze", desc: "Valida tu primera arquitectura en el Canvas", condition: s => (s.architecturesValidated || 0) >= 1, progress: s => ({cur: s.architecturesValidated || 0, max: 1}) },
      { id: "arch_master", name: "Arquitecto de Soluciones", icon: "arch_master", rarity: "gold", desc: "Valida 5 arquitecturas correctamente", condition: s => (s.architecturesValidated || 0) >= 5, progress: s => ({cur: s.architecturesValidated || 0, max: 5}) },
      { id: "arch_grandmaster", name: "Master Cloud Architect", icon: "arch_grandmaster", rarity: "platinum", desc: "Valida 10 arquitecturas en todos los cursos", condition: s => (s.architecturesValidated || 0) >= 10, progress: s => ({cur: s.architecturesValidated || 0, max: 10}) },
      { id: "survival_fighter", name: "Superviviente", icon: "survival_fighter", rarity: "bronze", desc: "Alcanza 5 aciertos en Modo Supervivencia", condition: s => (s.survivalHighScore || 0) >= 5, progress: s => ({cur: s.survivalHighScore || 0, max: 5}) },
      { id: "survival_hero", name: "Superviviente de Acero", icon: "survival_hero", rarity: "silver", desc: "Alcanza 15 aciertos en Modo Supervivencia", condition: s => (s.survivalHighScore || 0) >= 15, progress: s => ({cur: s.survivalHighScore || 0, max: 15}) },
      { id: "survival_god", name: "Inmortal del Dojo", icon: "survival_god", rarity: "platinum", desc: "Alcanza 25 aciertos con combo 4x en Supervivencia", condition: s => (s.survivalHighScore || 0) >= 25, progress: s => ({cur: s.survivalHighScore || 0, max: 25}) },
      { id: "cli_rookie", name: "Terminal Novice", icon: "cli_rookie", rarity: "bronze", desc: "Ejecuta tu primer comando correcto en Cloud Shell", condition: s => (s.cliChallengesCompleted || 0) >= 1, progress: s => ({cur: s.cliChallengesCompleted || 0, max: 1}) },
      { id: "cli_ninja", name: "Terminal Ninja", icon: "cli_ninja", rarity: "silver", desc: "Completa 5 retos en el Terminal CLI", condition: s => (s.cliChallengesCompleted || 0) >= 5, progress: s => ({cur: s.cliChallengesCompleted || 0, max: 5}) },
      { id: "cli_guru", name: "Cloud Shell Master", icon: "cli_guru", rarity: "gold", desc: "Completa 10 retos de Azure y Databricks CLI", condition: s => (s.cliChallengesCompleted || 0) >= 10, progress: s => ({cur: s.cliChallengesCompleted || 0, max: 10}) },
      { id: "voice_debater", name: "Voz Técnica", icon: "voice_debater", rarity: "bronze", desc: "Completa tu primer examen oral por voz", condition: s => (s.oralExamsCompleted || 0) >= 1, progress: s => ({cur: s.oralExamsCompleted || 0, max: 1}) },
      { id: "voice_orator", name: "Orador Maestro", icon: "voice_orator", rarity: "gold", desc: "Completa 5 exámenes orales con >=75% de cobertura", condition: s => (s.oralExamsCompleted || 0) >= 5, progress: s => ({cur: s.oralExamsCompleted || 0, max: 5}) },
      { id: "prompt_tuner", name: "Prompt Engineer", icon: "prompt_tuner", rarity: "bronze", desc: "Experimenta con parámetros LLM en el Playground", condition: s => (s.promptPresetsExplored || 0) >= 3, progress: s => ({cur: s.promptPresetsExplored || 0, max: 3}) },
      { id: "decision_strategist", name: "Estratega de Arquitectura", icon: "decision_strategist", rarity: "silver", desc: "Explora 15 dilemas en las Matrices de Decisión", condition: s => (s.decisionsExplored || 0) >= 15, progress: s => ({cur: s.decisionsExplored || 0, max: 15}) },
      { id: "error_slayer", name: "Cazador de Errores", icon: "error_slayer", rarity: "bronze", desc: "Repasa una baraja de rescate de errores con Flashcards", condition: s => (s.rescueDecksReviewed || 0) >= 1, progress: s => ({cur: s.rescueDecksReviewed || 0, max: 1}) },
      { id: "daily_drill_master", name: "Dosis Diaria de Éxito", icon: "daily_drill_master", rarity: "silver", desc: "Completa 5 Daily Quick Drills", condition: s => (s.dailyDrillsCompleted || 0) >= 5, progress: s => ({cur: s.dailyDrillsCompleted || 0, max: 5}) },
      { id: "fabric_directlake_pro", name: "Fabric Mastermind", icon: "fabric_directlake_pro", rarity: "gold", desc: "Domina la arquitectura Direct Lake de Fabric", condition: s => s.fabricMasteryUnlocked }
  ];

  // --- CENTRAL GAMIFICATION EVENT BUS ---
  // Listens for events from iframes (Study Modules) and Main App
  window.addEventListener('message', (event) => {
      if (!event.data || !event.data.type) return;
      
      const stats = getGamificationStats();
      let changed = false;

      switch (event.data.type) {
          case 'TOPIC_STATUS_UPDATE':
              // Sync logic already exists in getGamificationStats, but we can force a save/check here
              // payload: { courseId, progressObj }
              // We rely on localStorage being updated by the iframe, then we re-sync
              changed = true;
              break;
              
          case 'FLASHCARD_VIEWED':
              stats.flashcardsViewed = (stats.flashcardsViewed || 0) + 1;
              changed = true;
              break;
              
          case 'EXAM_COMPLETED':
              // handled by updateGamification usually, but if iframe runs separate exams:
              // payload: { score, total, passed }
              stats.totalQuestions += event.data.total || 0;
              stats.totalExamsTaken = (stats.totalExamsTaken || 0) + 1;
              if (event.data.passed) stats.examsPassed = (stats.examsPassed || 0) + 1;
              changed = true;
              break;
              
          case 'THEME_SYNC_REQUEST':
              // Child asking for theme
              const currentTheme = document.documentElement.getAttribute("data-theme");
              if (event.source) {
                  event.source.postMessage({ type: 'theme', theme: currentTheme || 'light' }, '*');
              }
              break;
      }
      
      if (changed) {
          saveGamificationStats(stats);
          updateGamification({}); // Re-run badge check (empty result just checks conditions)
          if (window.updateGreeting) window.updateGreeting();
      }
  });

  function updateGamification(result) { // result: { score, total, passed, mode, timeElapsed, correctStreak, skepticCount }
      const stats = getGamificationStats();
      const today = new Date().toDateString();
      const now = new Date();
      const timeStr = `${now.getHours()}:${now.getMinutes()}`;

      // 1. Basic Stats (If result provided)
      if (result.total) { 
          stats.totalQuestions += result.total;
          stats.totalExamsTaken = (stats.totalExamsTaken || 0) + 1;
      }
      stats.lastStudyTime = timeStr;
      
      // Update Mode Flags
      if (result.mode === "Real") stats.hasPlayedReal = true;
      else stats.hasPlayedSim = true;

      // 2. Streak Logic (Daily)
      if (stats.lastStudyDate !== today) {
          const yesterday = new Date();
          yesterday.setDate(yesterday.getDate() - 1);
          if (stats.lastStudyDate === yesterday.toDateString()) {
              stats.studyStreak++;
          } else {
              stats.studyStreak = 1;
          }
          stats.lastStudyDate = today;
      }
      
      // 3. Perfect Logic
      if (result.mode === "Real" && result.score === result.total && result.total > 0) {
          stats.perfectExams++;
          stats.perfectConsecutiveExams = (stats.perfectConsecutiveExams || 0) + 1;
      } else if (result.mode === "Real") {
          stats.perfectConsecutiveExams = 0; // Reset
      }

      // 4. Special Locks & V3 Metrics
      if (result.mode === "Real" && result.passed && result.score === Math.ceil(result.total * 0.7)) {
          stats.survivorUnlock = true;
      }
      if (result.mode === "Real" && result.passed && result.total >= 10 && (result.timeElapsed || 0) < 120) {
           stats.timeAttackUnlock = true;
           stats.fastExamsCount = (stats.fastExamsCount || 0) + 1;
      }

      // Weekend Logic
      if (!stats.weekendStudy) stats.weekendStudy = { sat: false, sun: false };
      if (now.getDay() === 6) stats.weekendStudy.sat = true; // Saturday
      if (now.getDay() === 0) stats.weekendStudy.sun = true; // Sunday
      // Reset logic for weekend could be here, but badges are cumulative usually or check "same week". 
      // For simplicity "Weekend Warrior" just needs Sat & Sun flag true. 
      // If we want strict "same weekend", we need week tracking, which is complex. 
      // User likely satisfied with "Has studied on Sat and Sun at some point" or we reset on Monday.
      if (now.getDay() === 1) stats.weekendStudy = { sat: false, sun: false }; // Reset on Monday

      // Behavior Logic
      if (result.correctStreak) {
          stats.correctStreak = result.correctStreak; // Current session max
          if (result.correctStreak > (stats.maxCorrectStreak || 0)) {
              stats.maxCorrectStreak = result.correctStreak;
          }
      }
      if (result.skepticCount) stats.skepticCount = (stats.skepticCount || 0) + result.skepticCount;

      // CHECK BADGES
      const newBadges = [];
      badgesConfig.forEach(badge => {
          const alreadyEarned = stats.badges.find(b => b.id === badge.id);
          if (!alreadyEarned && badge.condition(stats)) {
              stats.badges.push({ 
                  id: badge.id, 
                  date: new Date().toLocaleDateString(),
                  icon: badge.icon,
                  name: badge.name 
              });
              newBadges.push(badge);
          }
      });

      saveGamificationStats(stats);
      
      if (newBadges.length > 0) {
          if (window.SoundManager) window.SoundManager.play('badge');
          
          const msg = newBadges.map(b => `${b.name}`).join("\n");
          setTimeout(() => alert(`NUEVO LOGRO DESBLOQUEADO!\n\n${msg}`), 500);
      }
      
      // Refresh Header (Belt XP)
      if (window.updateGreeting) window.updateGreeting();
  }

  // --- GLOBAL EVENT LISTENER FOR IFRAMES ---
  window.addEventListener('message', (e) => {
      if (e.data.type === 'GAMIFICATION_EVENT') {
          const stats = getGamificationStats();
          let updated = false;

          if (e.data.action === 'flashcard_viewed') {
              stats.flashcardsViewed = (stats.flashcardsViewed || 0) + 1;
              updated = true;
          }
          
          if (e.data.action === 'topic_mastered') {
              if (!stats.topicsStudied) stats.topicsStudied = [];
              const rawId = e.data.topicId;
              const uniqueId = `${e.data.courseId}_${rawId}`;
              if (!stats.topicsStudied.includes(uniqueId)) {
                  stats.topicsStudied.push(uniqueId);
                  updated = true;
              }
          }
          
          if (updated) {
               saveGamificationStats(stats);
               // Trigger Badge Check using dummy result? 
               // Or manually check specific badges here to avoid alert spam?
               // Let's reuse updateGamification with empty result to trigger checks
               updateGamification({ total: 0, score: 0, passed: false, mode: "StudyTracking" });
          }
      }
  });

  // --- Menu Logic ---
  // --- Theme Logic ---
  // Codex (GPT-5) | 2026-08-23 20:35 CST | El proveedor conserva su logo, pero la interfaz usa un solo acento.
  const globalTheme = { primary: '#3157d5', hover: '#2447b8' };

  function setGlobalTheme() {
      document.documentElement.style.setProperty('--primary-color', globalTheme.primary);
      document.documentElement.style.setProperty('--primary-hover', globalTheme.hover);
  }

  // SVG brand icons for providers
  const providerIcons = {
    microsoft: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none"><rect x="1" y="1" width="10" height="10" fill="#f25022"/><rect x="13" y="1" width="10" height="10" fill="#7fba00"/><rect x="1" y="13" width="10" height="10" fill="#00a4ef"/><rect x="13" y="13" width="10" height="10" fill="#ffb900"/></svg>',
    google: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09A6.97 6.97 0 015.47 12c0-.72.12-1.42.35-2.09V7.07H2.18A11.01 11.01 0 001 12c0 1.77.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/><path d="M12 5.38a5.97 5.97 0 014.21 1.64l3.15-3.15A10.6 10.6 0 0012 1 10.99 10.99 0 002.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z" fill="#EA4335"/></svg>',
    databricks: '<svg viewBox="0 0 24 24" width="16" height="16" fill="#FF3621"><path d="M12 2L2 7.5v9L12 22l10-5.5v-9L12 2zm0 2.18l7.09 3.9L12 12.01 4.91 8.08 12 4.18zM4 9.41l7 3.86v7.32L4 16.73V9.41zm9 11.18v-7.32l7-3.86v7.32l-7 3.86z"/></svg>',
    python: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M11.91 1C6.83 1 7.25 3.15 7.25 3.15l.01 2.22h4.75v.67H4.69S1 5.56 1 10.73s3.22 5 3.22 5h1.92v-2.4s-.1-3.22 3.17-3.22h5.46s3.07.05 3.07-2.96V3.89s.47-2.9-5.93-2.9zm-3.03 1.68a.98.98 0 110 1.96.98.98 0 010-1.96z" fill="#3776AB"/><path d="M12.09 23c5.08 0 4.66-2.15 4.66-2.15l-.01-2.22h-4.75v-.67h7.32S23 18.44 23 13.27s-3.22-5-3.22-5h-1.92v2.4s.1 3.22-3.17 3.22H9.23s-3.07-.05-3.07 2.96v3.26s-.47 2.9 5.93 2.9zm3.03-1.68a.98.98 0 110-1.96.98.98 0 010 1.96z" fill="#FFD43B"/></svg>',
    tableau: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M11.5 2v3h-3v2h3v3h2V7h3V5h-3V2h-2zm-6 5v3H2v2h3.5v3h2v-3H11v-2H7.5V7h-2zm12 0v3H14v2h3.5v3h2v-3H23v-2h-3.5V7h-2zm-6 7v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z" fill="#E97627"/></svg>',
    aws: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M7.16 14.46l-1.1-5.4h-.03l-1.13 5.4H3.14L1.5 6.7h1.7l.89 5.14h.03L5.3 6.7h1.47l1.17 5.19h.03l.9-5.19h1.63l-1.68 7.76H7.16z" fill="#232F3E"/><path d="M13.5 14.46l-1.1-5.4h-.03l-1.13 5.4H9.48L7.84 6.7h1.7l.89 5.14h.03l1.18-5.14h1.47l1.17 5.19h.03l.9-5.19h1.63l-1.68 7.76H13.5z" fill="#232F3E"/><path d="M18.1 14.63c-1.84 0-2.78-1.29-2.78-3.09 0-1.87 1.09-3 2.87-3 .7 0 1.21.16 1.67.46l-.51 1.3c-.31-.22-.65-.36-1.04-.36-.87 0-1.32.72-1.32 1.58 0 .92.39 1.72 1.35 1.72.42 0 .81-.17 1.1-.39l.38 1.33c-.47.31-1.08.45-1.72.45z" fill="#232F3E"/><path d="M6.39 18.9c3.56 1.8 7.98 1.84 12.21.02.37-.16.78.18.47.5-3.72 3.12-9.55 3.44-13.47.1-.32-.28.07-.79.79-.62z" fill="#FF9900"/><path d="M18.8 17.87c.45-.57 1.43-.42 2.22-.32.8.1 1.55.33 1.55.33s-.16.55-.82 1.15c-.61.56-1.31.49-1.56.24-.25-.25-.93-1.15-1.39-.4z" fill="#FF9900"/></svg>',
    unir: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 3L3 7.5v2l9-4.5 9 4.5v-2L12 3z" fill="#ED1C24"/><path d="M12 9L5 12.5v4C5 19.5 8 22 12 22s7-2.5 7-5.5v-4L12 9z" fill="#ED1C24"/><circle cx="12" cy="15" r="2.5" fill="#fff"/><path d="M12 1.5l-1 1v3l1-0.5 1 .5v-3l-1-1z" fill="#ED1C24"/></svg>',
    unah: '<svg viewBox="0 0 24 24" width="16" height="16"><path d="M12 2L4 6v4c0 5.1 3.4 9.8 8 11 4.6-1.2 8-5.9 8-11V6l-8-4z" fill="#006644"/><path d="M12 4l-5.5 2.75v3c0 3.92 2.28 7.37 5.5 8.72 3.22-1.35 5.5-4.8 5.5-8.72v-3L12 4z" fill="#FFD700"/><path d="M12 7l-3 1.5v2c0 2.1 1.2 4 3 4.7 1.8-.7 3-2.6 3-4.7v-2L12 7z" fill="#006644"/><text x="12" y="13" text-anchor="middle" fill="#FFD700" font-size="4" font-weight="bold">U</text></svg>',
  };

  function renderCategories() {
    categoryList.innerHTML = "";
    const visibleProviders = providerData.filter(p => !hiddenCategories.includes(p.id));
    visibleProviders.forEach((provider) => {
      const li = document.createElement("li");
      li.className = "category-item";
      li.innerHTML = `${providerIcons[provider.id] || ''} <span>${provider.name}</span>`;
      li.dataset.id = provider.id;
      li.onclick = () => selectCategory(provider.id);
      categoryList.appendChild(li);
    });
  }

  function selectCategory(providerId) {
    currentProviderId = providerId;
    currentCourseId = null; // Reset course selection
    setGlobalTheme(providerId); // Apply Theme Globally
    
    document.querySelectorAll(".category-item").forEach((el) => {
      el.classList.toggle("active", el.dataset.id === providerId);
    });
    const provider = providerData.find((p) => p.id === providerId);
    courseSectionTitle.textContent = `Cursos de ${provider.name}`;
    renderCourses(provider.courses);
    renderStudyHub();
    renderHistory(); // Update history view (shows all when category changes)

    // Hide all per-course feature panels first
    if (typeof hideFeaturePanels === 'function') hideFeaturePanels();

    // Auto-show features for the first active course in this category
    const firstActiveCourse = provider.courses.find(c => c.status === 'active');
    if (firstActiveCourse) {
      currentCourseId = firstActiveCourse.id;
      try {
        if (typeof renderDomainCards === 'function') renderDomainCards(firstActiveCourse.id);
        if (typeof setupRealExamButton === 'function') setupRealExamButton(firstActiveCourse.id);
        if (typeof updateWeaknessPanel === 'function') updateWeaknessPanel(firstActiveCourse.id);
        if (typeof renderProgressDashboard === 'function') renderProgressDashboard(firstActiveCourse.id);
        if (typeof updateStreakDisplay === 'function') updateStreakDisplay();
        if (typeof showFlashcardButton === 'function') showFlashcardButton(firstActiveCourse.id);
        if (typeof renderStudyPlan === 'function') renderStudyPlan(firstActiveCourse.id);
        if (typeof setupMarathonButton === 'function') setupMarathonButton(firstActiveCourse.id);
        if (typeof renderStudyCoach === 'function') renderStudyCoach(firstActiveCourse.id);
        if (typeof setupLessonsLearnedLauncher === 'function') setupLessonsLearnedLauncher(firstActiveCourse.id);
      } catch(e) { console.warn('Feature auto-init error:', e); }
    }
  }

  function renderCourses(courses) {
    courseList.innerHTML = "";
    // Sort: Active first, then others
    const sortedCourses = [...courses].sort((a, b) => {
        if (a.status === 'active' && b.status !== 'active') return -1;
        if (a.status !== 'active' && b.status === 'active') return 1;
        return 0;
    });

    sortedCourses.forEach((course) => {
      const div = document.createElement("div");
      div.className = `course-item ${
        course.status === "coming" ? "disabled" : ""
      }`;
      const statusLabel =
        course.status === "active" ? "Activo" : "Próximamente";
      const statusClass =
        course.status === "active" ? "status-active" : "status-coming";
      const isCertified = certifiedCourses.includes(course.id);
      div.innerHTML = `
                <div class="course-info">
                    <h4>${course.name}${isCertified ? ' <span class="cert-badge" title="Certificación obtenida"><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>' : ''}</h4>
                    <p>${
                      isCertified
                        ? "Certificación obtenida"
                        : course.status === "active"
                        ? "Banco de preguntas completo"
                        : "No disponible"
                    }</p>
                </div>
                <div class="course-action">
                    ${
                      course.status === "active"
                        ? `<div style="display:flex; gap:0.5rem;">
                             <button class="btn btn-primary btn-sm course-btn-exam" data-course-id="${course.id}" style="position:relative; z-index:5;">Iniciar Examen</button>
                             ${
                               window.studyData && window.studyData[course.id]
                                 ? `<button class="btn btn-secondary btn-sm course-btn-study" data-course-id="${course.id}" style="position:relative; z-index:5;">Estudiar</button>`
                                 : ""
                              }
                           </div>`
                        : `<span class="status-badge ${statusClass}">${statusLabel}</span>`
                    }
                </div>
            `;
      courseList.appendChild(div);

      // Attach event listeners directly (more reliable than inline onclick)
      const examBtn = div.querySelector('.course-btn-exam');
      if (examBtn) {
        examBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          window.startCourse(course.id);
        });
      }
      const studyBtn = div.querySelector('.course-btn-study');
      if (studyBtn) {
        studyBtn.addEventListener('click', function(e) {
          e.stopPropagation();
          window.openStudyMode(course.id);
        });
      }
    });
  }

  // Codex (GPT-5) | 2026-08-23 20:35 CST | Catálogo para descubrir los módulos de estudio de la categoría activa.
  function getStudyCourseCatalog() {
    const courseById = new Map();
    providerData.forEach((provider) => {
      provider.courses.forEach((course) => {
        courseById.set(course.id, { ...course, providerName: provider.name, providerId: provider.id });
      });
    });

    return Object.entries(window.studyData || {})
      .filter(([, sections]) => Array.isArray(sections) && sections.length > 0)
      .map(([courseId, sections]) => {
        const course = courseById.get(courseId) || {
          id: courseId,
          name: courseId.replace(/-/g, " "),
          providerName: "The Data Dojo",
          providerId: null,
        };
        return {
          ...course,
          sections,
          itemCount: sections.reduce(
            (total, section) => total + (Array.isArray(section.items) ? section.items.length : 0),
            0
          ),
          featured: courseId === "databricks-genai-engineer",
        };
      })
      .filter((course) => {
        // 1. Exclude if provider is in hiddenCategories
        if (course.providerId && hiddenCategories.includes(course.providerId)) {
          return false;
        }
        // 2. Only show study modules for the currently active category
        if (currentProviderId && course.providerId) {
          return course.providerId === currentProviderId;
        }
        return true;
      })
      .sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name, "es"));
  }

  function renderStudyHub() {
    if (!studyHubGrid || !studyHubSummary) return;
    const catalog = getStudyCourseCatalog();
    const totalItems = catalog.reduce((total, course) => total + course.itemCount, 0);

    studyHubSummary.textContent = `${catalog.length} cursos · ${totalItems} temas`;
    studyHubGrid.replaceChildren();

    if (catalog.length === 0) {
      const empty = document.createElement("p");
      empty.className = "study-hub-empty";
      empty.textContent = "Todavía no hay módulos de estudio disponibles.";
      studyHubGrid.appendChild(empty);
      return;
    }

    catalog.forEach((course) => {
      const card = document.createElement("article");
      card.className = `study-hub-card${course.featured ? " study-hub-card--featured" : ""}`;

      const top = document.createElement("div");
      top.className = "study-hub-card-top";

      const icon = document.createElement("span");
      icon.className = "study-hub-card-icon";
      icon.setAttribute("aria-hidden", "true");
      icon.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>';
      top.appendChild(icon);

      const provider = document.createElement("span");
      provider.className = "study-hub-provider";
      provider.textContent = course.providerName;
      top.appendChild(provider);

      if (course.featured) {
        const badge = document.createElement("span");
        badge.className = "study-hub-badge";
        badge.textContent = "Bilingüe";
        top.appendChild(badge);
      }

      const title = document.createElement("h3");
      title.textContent = course.name;

      const meta = document.createElement("p");
      meta.className = "study-hub-meta";
      meta.textContent = `${course.sections.length} módulos · ${course.itemCount} temas`;

      const action = document.createElement("button");
      action.type = "button";
      action.className = "study-hub-action";
      action.innerHTML = '<span>Abrir módulo</span><svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
      action.addEventListener("click", () => window.openStudyMode(course.id));

      card.append(top, title, meta, action);
      studyHubGrid.appendChild(card);
    });
  }

  function openStudyHub() {
    const onboardingScreen = document.getElementById("onboarding-screen");
    const studyScreen = document.getElementById("study-screen");
    if (onboardingScreen) onboardingScreen.classList.add("hidden");
    if (studyScreen) studyScreen.classList.add("hidden");
    returnToMenu();

    if (studyHub) {
      studyHub.tabIndex = -1;
      requestAnimationFrame(() => {
        studyHub.scrollIntoView({ behavior: "smooth", block: "start" });
        studyHub.focus({ preventScroll: true });
      });
    }
  }

  window.openStudyHub = openStudyHub;

  // --- Admin Logic ---
  let hiddenCategories = JSON.parse(localStorage.getItem('hiddenCategories') || '[]');
  let certifiedCourses = JSON.parse(localStorage.getItem('certifiedCourses') || '[]');

  function openAdmin() {
    // Tab switching
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.onclick = () => {
        document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById('admin-tab-' + tab.dataset.tab);
        if (target) target.classList.add('active');
      };
    });
    // Reset to first tab
    document.querySelectorAll('.admin-tab')[0].click();

    // TAB 1: Courses (existing)
    adminCourseSelect.innerHTML = "";
    providerData.forEach((p) => {
      const optGroup = document.createElement("optgroup");
      optGroup.label = p.name;
      p.courses.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.textContent = c.name;
        optGroup.appendChild(opt);
      });
      adminCourseSelect.appendChild(optGroup);
    });
    loadAdminCourseSetting(adminCourseSelect.value);
    adminCourseSelect.onchange = (e) => loadAdminCourseSetting(e.target.value);

    // TAB 2: Categories
    const catList = document.getElementById('admin-category-list');
    if (catList) {
      catList.innerHTML = '';
      defaultProviderData.forEach(p => {
        const isHidden = hiddenCategories.includes(p.id);
        const row = document.createElement('label');
        row.className = 'admin-toggle-row';
        row.innerHTML = `
          <span class="admin-toggle-label">${providerIcons[p.id] || ''} ${p.name}</span>
          <span class="admin-toggle-detail">${p.courses.length} curso(s)</span>
          <div class="toggle-switch">
            <input type="checkbox" data-cat-id="${p.id}" ${!isHidden ? 'checked' : ''}>
            <span class="toggle-slider"></span>
          </div>
        `;
        catList.appendChild(row);
      });
    }

    // TAB 3: Certifications
    const certList = document.getElementById('admin-cert-list');
    if (certList) {
      certList.innerHTML = '';
      defaultProviderData.forEach(p => {
        p.courses.forEach(c => {
          const isCertified = certifiedCourses.includes(c.id);
          const row = document.createElement('label');
          row.className = 'admin-toggle-row';
          row.innerHTML = `
            <div class="admin-cert-info">
              <span class="admin-toggle-label">${c.name}</span>
              <span class="admin-toggle-detail">${p.name}</span>
            </div>
            <div class="toggle-switch">
              <input type="checkbox" data-cert-id="${c.id}" ${isCertified ? 'checked' : ''}>
              <span class="toggle-slider"></span>
            </div>
          `;
          certList.appendChild(row);
        });
      });
    }

    adminModal.classList.remove("hidden");
  }

  function loadAdminCourseSetting(courseId) {
    let currentStatus = "coming";
    for (const p of providerData) {
      const c = p.courses.find((x) => x.id === courseId);
      if (c) {
        currentStatus = c.status;
        break;
      }
    }
    document.querySelector(
      `input[name="admin-status"][value="${currentStatus}"]`
    ).checked = true;
  }

  function saveAdminConfig() {
    // TAB 1: Course settings
    const courseId = adminCourseSelect.value;
    const selectedStatus = document.querySelector(
      'input[name="admin-status"]:checked'
    ).value;
    if (!courseConfig[courseId]) courseConfig[courseId] = {};
    courseConfig[courseId].status = selectedStatus;
    saveConfig();

    // TAB 2: Category visibility
    const newHidden = [];
    document.querySelectorAll('#admin-category-list input[data-cat-id]').forEach(cb => {
      if (!cb.checked) newHidden.push(cb.dataset.catId);
    });
    hiddenCategories = newHidden;
    localStorage.setItem('hiddenCategories', JSON.stringify(hiddenCategories));

    // TAB 3: Certifications
    const newCertified = [];
    document.querySelectorAll('#admin-cert-list input[data-cert-id]').forEach(cb => {
      if (cb.checked) newCertified.push(cb.dataset.certId);
    });
    certifiedCourses = newCertified;
    localStorage.setItem('certifiedCourses', JSON.stringify(certifiedCourses));

    alert('Configuración guardada correctamente');
    closeAdmin();

    // Refresh UI
    renderCategories();
    if (currentProviderId) selectCategory(currentProviderId);
  }

  function closeAdmin() {
    adminModal.classList.add("hidden");
  }

  // --- Quiz Logic ---
  let pendingQuestionsPool = []; // Store questions during config phase

  window.startCourse = function (courseId) {
    currentCourseId = courseId;
    renderHistory(); // Filter history for this course immediately
    const lang = getActiveLanguage();

    // Filter questions strictly by courseId and language
    let filtered = questionsData.filter(
      (q) => q.courseId === courseId && q.lang === lang
    );

    if (filtered.length === 0) {
        const fallbackLanguage = lang === 'es' ? 'en' : 'es';
        console.warn(`No questions found for ${lang}, trying fallback to '${fallbackLanguage}'`);
        filtered = questionsData.filter(q => q.courseId === courseId && q.lang === fallbackLanguage);
    }

    if (filtered.length === 0) {
      console.warn(
        `No questions found for course: ${courseId} and lang: ${lang} (or fallback)`
      );
    }

    // Prepare Pool and Show Config 
    pendingQuestionsPool = [...filtered];

    // --- Multi-Domain Filter Logic ---
    const domainCheckboxesContainer = document.getElementById("config-domain-checkboxes");
    const domainToggleAllBtn = document.getElementById("config-domain-toggle-all");
    const domainCounts = {};
    filtered.forEach(q => {
        const d = q.domain || 'General';
        domainCounts[d] = (domainCounts[d] || 0) + 1;
    });
    const uniqueDomains = Object.keys(domainCounts).sort();

    if (domainCheckboxesContainer) {
        domainCheckboxesContainer.innerHTML = "";
        uniqueDomains.forEach(d => {
            const count = domainCounts[d];
            const label = document.createElement("label");
            label.className = "config-domain-item";
            label.innerHTML = `
              <input type="checkbox" class="config-domain-cb" value="${d.replace(/"/g, '&quot;')}" checked style="width: 16px; height: 16px; cursor: pointer; flex-shrink: 0;" />
              <span class="domain-name">${d}</span>
              <span class="quiz-config-card-badge">${count}</span>
            `;
            domainCheckboxesContainer.appendChild(label);
        });
    }

    // Helper for quick question presets (10, 25, 50, 100, Todas)
    window.setQuizConfigPreset = function(preset) {
        const slider = document.getElementById("config-slider");
        const countDisplay = document.getElementById("config-count-display");
        if (!slider) return;
        const maxVal = parseInt(slider.max) || 1;
        const targetVal = preset === "max" ? maxVal : Math.min(parseInt(preset) || 10, maxVal);
        slider.value = Math.max(1, targetVal);
        if (countDisplay) countDisplay.textContent = slider.value;
        slider.dispatchEvent(new Event("input"));
        slider.dispatchEvent(new Event("change"));
    };

    let allDomainsSelected = true;
    if (domainToggleAllBtn) {
        domainToggleAllBtn.textContent = "Desmarcar todos";
        domainToggleAllBtn.onclick = (e) => {
            e.preventDefault();
            const cbs = document.querySelectorAll(".config-domain-cb");
            allDomainsSelected = !allDomainsSelected;
            cbs.forEach(cb => cb.checked = allDomainsSelected);
            domainToggleAllBtn.textContent = allDomainsSelected ? "Desmarcar todos" : "Seleccionar todos";
            updateSliderRange();
        };
    }

    // --- Search Filter Logic ---
    const searchInput = document.getElementById("config-search");
    if (searchInput) searchInput.value = ""; 
    
    // Reset pool on open
    let currentPool = [...pendingQuestionsPool];

    // Range Inputs
    const rangeStart = document.getElementById("config-range-start");
    const rangeEnd = document.getElementById("config-range-end");
    const globalTotalDisplay = document.getElementById("global-total-display");

    function updateSliderRange() {
        const checkedDomains = Array.from(document.querySelectorAll(".config-domain-cb:checked")).map(cb => cb.value);
        const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : "";
        
        let filtered = [...pendingQuestionsPool];

        // 0. GLOBAL RANGE FILTER (Primary)
        const totalBank = pendingQuestionsPool.length;
        if(globalTotalDisplay) globalTotalDisplay.textContent = totalBank;

        if(rangeStart && !rangeStart.value) rangeStart.value = 1;
        if(rangeEnd && !rangeEnd.value) rangeEnd.value = totalBank;
        
        const rStart = parseInt(rangeStart ? rangeStart.value : 1) || 1;
        const rEnd = parseInt(rangeEnd ? rangeEnd.value : totalBank) || totalBank;
        
        const sIndex = Math.max(0, rStart - 1);
        const eIndex = Math.min(totalBank, rEnd);
        
        if (sIndex < eIndex) {
             filtered = filtered.slice(sIndex, eIndex);
        } else if (sIndex === eIndex && sIndex < totalBank) {
             filtered = [filtered[sIndex]];
        } else {
             filtered = []; 
        }

        // 1. Multi-Domain Filter
        if (checkedDomains.length > 0 && checkedDomains.length < uniqueDomains.length) {
            filtered = filtered.filter(q => checkedDomains.includes(q.domain || 'General'));
        } else if (checkedDomains.length === 0 && uniqueDomains.length > 0) {
            filtered = []; // None selected
        }
        
        // 2. Keyword Filter
        if (searchTerm) {
            filtered = filtered.filter(q => {
                const promptMatch = (q.prompt || "").toLowerCase().includes(searchTerm);
                const explMatch = (q.explanation || "").toLowerCase().includes(searchTerm);
                const optionsMatch = q.options && q.options.some(o => (o.text || "").toLowerCase().includes(searchTerm));
                return promptMatch || explMatch || optionsMatch;
            });
        }
        
        currentPool = filtered;

        // Update Slider to reflect available count from the sliced pool
        configTotalQuestions.textContent = currentPool.length;
        configSlider.max = Math.max(1, currentPool.length);
        const currentVal = parseInt(configSlider.value) || 10;
        if (currentVal > currentPool.length) {
             configSlider.value = Math.max(1, currentPool.length);
        }
        if (currentPool.length > 0 && configSlider.value == 0) configSlider.value = 1;

        configCountDisplay.textContent = configSlider.value;
        
        // Disable Start button if 0
        const startBtn = document.getElementById("config-start");
        if (currentPool.length === 0) {
            if (startBtn) {
                 startBtn.disabled = true;
                 startBtn.textContent = "Rango Vacío";
            }
        } else {
            if (startBtn) {
                 startBtn.disabled = false;
                 startBtn.textContent = "Comenzar Examen";
            }
        }
    }
    
    updateSliderRange();

    if (domainCheckboxesContainer) domainCheckboxesContainer.onchange = updateSliderRange;
    if (searchInput) searchInput.oninput = updateSliderRange;
    if (rangeStart) rangeStart.onchange = updateSliderRange;
    if (rangeEnd) rangeEnd.onchange = updateSliderRange;
    if (rangeStart) rangeStart.oninput = updateSliderRange;
    if (rangeEnd) rangeEnd.oninput = updateSliderRange;

    configModal.classList.remove("hidden");
    
    // --- Weakness Mode Logic ---
    const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
    
    // Aggregate ALL missed IDs for this course from history
    const allMissed = new Set();
    history.forEach(h => {
        if (h.courseCheck === courseId && h.missedIds) {
            h.missedIds.forEach(id => allMissed.add(id));
        }
    });

    // Check if we have valid questions for these missed IDs in current data
    const validMissedQuestions = questionsData.filter(q => allMissed.has(q.id) && q.courseId === courseId);
    
    // UI for Weakness Mode
    const weaknessContainer = document.getElementById("config-weakness-container");
    const weaknessCheckbox = document.getElementById("config-weakness-mode");
    const weaknessLabel = document.getElementById("config-weakness-label");

    if (weaknessContainer && weaknessCheckbox) {
        if (validMissedQuestions.length > 0) {
            weaknessContainer.classList.remove("hidden");
            weaknessCheckbox.disabled = false;
            weaknessLabel.textContent = `Repasar Fallos (${validMissedQuestions.length} preguntas)`;
            
            weaknessCheckbox.onclick = () => {
                const isWeakness = weaknessCheckbox.checked;
                if (isWeakness) {
                    currentPool = validMissedQuestions;
                    if (domainCheckboxesContainer) domainCheckboxesContainer.style.opacity = "0.5";
                    if (searchInput) searchInput.disabled = true;
                } else {
                    if (domainCheckboxesContainer) domainCheckboxesContainer.style.opacity = "1";
                    if (searchInput) searchInput.disabled = false;
                    updateSliderRange();
                    return;
                }
                
                configTotalQuestions.textContent = currentPool.length;
                configSlider.max = Math.max(1, currentPool.length);
                configSlider.value = Math.min(45, currentPool.length);
                configCountDisplay.textContent = configSlider.value;
            };
            weaknessCheckbox.checked = false;
            if (domainCheckboxesContainer) domainCheckboxesContainer.style.opacity = "1";
            if (searchInput) searchInput.disabled = false; 
        } else {
            weaknessContainer.classList.add("hidden");
            weaknessCheckbox.checked = false;
        }
    }
    
    // Start Quiz Action with Time Attack and Real Exam flags
    const startBtn = document.getElementById("config-start");
    if(startBtn) {
        startBtn.onclick = () => {
        try {
            const configSlider = document.getElementById('config-slider');
            if(!configSlider) throw new Error("Slider not found");
            const count = parseInt(configSlider.value);
            
            const realModeCb = document.getElementById("config-real-mode");
            isRealExam = realModeCb ? realModeCb.checked : false; 
            
            const timeAttackCb = document.getElementById("config-time-attack");
            window.isTimeAttackMode = timeAttackCb ? timeAttackCb.checked : false;

            // CHECK ORDER MODE
            const orderMode = document.querySelector('input[name="order-mode"]:checked')?.value || "random";
            
            // Prepare questions (Shuffle if needed)
            let finalQuestions = [...currentPool];
            if (orderMode === "random") {
                finalQuestions.sort(() => 0.5 - Math.random());
            }
            
            currentQuizQuestions = finalQuestions.slice(0, count);
            configModal.classList.add("hidden");
    
            startScreen.classList.add("hidden");
            quizUI.classList.remove("hidden");
            timerDisplay.classList.remove("hidden");
    
            currentQuestionIndex = 0;
            score = 0;
            userAnswers = {};
    
            // Init Timer (90s per question)
            totalSeconds = count * 90;
            startTimer();
    
            renderQuestionMap();
            loadQuestion(0);
            saveState(); // Initial Save
        } catch (err) {
            console.error("Start Error:", err);
            alert("Error al iniciar: " + err.message);
        }
    };
   }

    // === Feature Hooks (F1-F6, F15, F19) ===
    try {
        if (typeof renderDomainCards === 'function') renderDomainCards(courseId);
        if (typeof setupRealExamButton === 'function') setupRealExamButton(courseId);
        if (typeof updateWeaknessPanel === 'function') updateWeaknessPanel(courseId);
        if (typeof renderProgressDashboard === 'function') renderProgressDashboard(courseId);
        if (typeof updateStreakDisplay === 'function') updateStreakDisplay();
        if (typeof showFlashcardButton === 'function') showFlashcardButton(courseId);
        if (typeof renderStudyPlan === 'function') renderStudyPlan(courseId);
        if (typeof setupMarathonButton === 'function') setupMarathonButton(courseId);
        if (typeof setupLessonsLearnedLauncher === 'function') setupLessonsLearnedLauncher(courseId);
    } catch(e) { console.warn('Feature hook error:', e); }
  };

  /* REMOVED OLD startQuizFromConfig to avoid duplication */
  /* function startQuizFromConfig() { ... } */

  function startTimer() {
    clearInterval(timerInterval);
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      totalSeconds--;
      updateTimerDisplay();
      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        finishQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const timerText = document.getElementById("timer-text");
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    const formatted = `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    if (timerText) {
      timerText.textContent = formatted;
    } else if (timerDisplay) {
      timerDisplay.textContent = formatted;
    }
    if (totalSeconds < 60) timerDisplay.style.color = "var(--danger-color)";
    else timerDisplay.style.color = "inherit";

    updatePacingTracker();
  }

  function updatePacingTracker() {
    const pacingPill = document.getElementById("quiz-pacing-pill");
    if (!pacingPill) return;
    if (!currentQuizQuestions || currentQuizQuestions.length <= 1) {
      pacingPill.classList.add("hidden");
      return;
    }
    const answeredCount = Object.keys(userAnswers).length;
    if (answeredCount === 0) {
      pacingPill.classList.remove("hidden");
      pacingPill.className = "quiz-pacing-pill pacing-good";
      pacingPill.textContent = "Ritmo Óptimo";
      return;
    }
    const elapsed = Math.max(1, (currentQuizQuestions.length * 90) - totalSeconds);
    const avgSec = Math.round(elapsed / answeredCount);
    pacingPill.classList.remove("hidden");
    const mAvg = Math.floor(avgSec / 60);
    const sAvg = avgSec % 60;
    const paceStr = `${mAvg > 0 ? mAvg + 'm ' : ''}${sAvg}s/q`;

    if (avgSec <= 85) {
      pacingPill.className = "quiz-pacing-pill pacing-good";
      pacingPill.textContent = `🟢 ${paceStr}`;
    } else if (avgSec <= 110) {
      pacingPill.className = "quiz-pacing-pill pacing-warn";
      pacingPill.textContent = `🟡 ${paceStr}`;
    } else {
      pacingPill.className = "quiz-pacing-pill pacing-slow";
      pacingPill.textContent = `🔴 ${paceStr}`;
    }
  }

  function returnToMenu() {
    clearInterval(timerInterval);
    // F3: Stop countdown timer
    if (typeof stopCountdownTimer === 'function') stopCountdownTimer();
    resultsScreen.classList.add("hidden");
    document.getElementById("review-container").innerHTML = ""; // Clear review
    document.getElementById("review-container").classList.add("hidden");
    quizUI.classList.add("hidden");
    startScreen.classList.remove("hidden");
  }

  function loadQuestion(index) {
    try {
        if (index < 0 || index >= currentQuizQuestions.length) return;
        // F12: Start timer for this question
        if (typeof startQuestionTimer === 'function') startQuestionTimer();
        currentQuestionIndex = index;
        const q = currentQuizQuestions[index];
        const lang = getActiveLanguage();
    
        // Label logic
        // Expanded Dictionary
        const lbls =
          lang === "es"
            ? {
                q: "Pregunta",
                of: "de",
                next: "Siguiente",
                prev: "Anterior",
                submit: "Mostrar Respuesta",
                drag: "Arrastra elementos para ordenar",
                finish: "Finalizar Examen",
                map: "Mapa de Preguntas",
                l_ans: "Respondida",
                l_curr: "Actual",
                l_pen: "Pendiente",
                res_title: "¡Examen Completado!",
                res_msg_pass: "¡Felicidades! Has aprobado.",
                res_msg_fail: "No has aprobado.",
                res_btn: "Al Menú Principal",
                config_title: "Configuración del Examen",
                config_avail: "Preguntas Disponibles:",
                config_start: "Iniciar Examen",
                config_cancel: "Cancelar",
                type_single: "Seleccione una respuesta correcta.",
                type_multi: "Seleccione todas las respuestas correctas.",
                type_tf: "Seleccione Verdadero o Falso.",
                type_order: "Organice los elementos en el orden correcto.",
                type_scenario: "Lea el escenario y responda.",
                needs_review: "Revisar",
              }
            : {
                q: "Question",
                of: "of",
                next: "Next",
                prev: "Previous",
                submit: "Show Answer",
                drag: "Drag items to reorder",
                finish: "Finish Exam",
                map: "Question Map",
                l_ans: "Answered",
                l_curr: "Current",
                l_pen: "Pending",
                res_title: "Exam Completed!",
                res_msg_pass: "Congratulations! You passed.",
                res_msg_fail: "You did not pass.",
                res_btn: "Main Menu",
                config_title: "Exam Configuration",
                config_avail: "Available Questions:",
                config_start: "Start Exam",
                config_cancel: "Cancel",
                type_single: "Select one correct answer.",
                type_multi: "Select all correct answers.",
                type_tf: "Select True or False.",
                type_order: "Arrange the items in the correct order.",
                type_scenario: "Read the scenario and answer.",
                needs_review: "In Review",
              };
    
        // Static Localizations (could be done once, but done here to ensure update on nav)
        document.getElementById("map-title").textContent = lbls.map;
        document.getElementById("legend-answered").textContent = lbls.l_ans;
        document.getElementById("legend-current").textContent = lbls.l_curr;
        document.getElementById("legend-pending").textContent = lbls.l_pen;
        document.getElementById("result-title").textContent = lbls.res_title;
        document.getElementById("restart-btn").textContent = lbls.res_btn;
    
        // Modal Localizations (if re-opening config, though usually done at start)
        document.querySelector("#quiz-config-modal h3").textContent =
          lbls.config_title;
        document.querySelector(
          "#quiz-config-modal label"
        ).childNodes[0].textContent = lbls.config_avail + " ";
        document.getElementById("config-start").textContent = lbls.config_start;
        document.getElementById("config-cancel").textContent = lbls.config_cancel;
    
        nextBtn.textContent = lbls.next;
        prevBtn.textContent = lbls.prev;
        checkBtn.textContent = lbls.submit;
        finishBtn.textContent = lbls.finish;
        
        // Ensure buttons visibility
        checkBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    
    // Navigation Visibility
    // Hide Previous if First
    if (index === 0) prevBtn.classList.add("hidden");
    else prevBtn.classList.remove("hidden");

    // Hide Next if Last
    if (index === currentQuizQuestions.length - 1) {
        nextBtn.classList.add("hidden");
    } else {
        nextBtn.classList.remove("hidden");
    }

    // --- DEBUG: Forced UI Update ---
    console.log("Loading Question Index:", index);
    const qt = document.getElementById("question-text");
    const pt = document.getElementById("progress-text");
    
    if (pt) {
        pt.textContent = `${lbls.q} ${index + 1} ${lbls.of} ${currentQuizQuestions.length}`;
    } else {
        alert("CRITICAL ERROR: 'progress-text' element not found!");
    }

    if (!q) {
        alert("CRITICAL ERROR: Question data is null for index " + index);
        return;
    }

    if (!qt) {
        alert("CRITICAL ERROR: 'question-text' element not found!");
        return;
    }
    // -----------------------------
        const splitBtn = document.getElementById("split-pane-toggle-btn");
        const hasScenario = Boolean(q.scenarioText || (q.prompt && q.prompt.length > 280) || q.type === 'scenario');
        if (q.scenarioText) {
          scenarioBlock.textContent = q.scenarioText;
          scenarioBlock.classList.remove("hidden");
        } else {
          scenarioBlock.classList.add("hidden");
        }
        if (splitBtn) {
          if (hasScenario) {
            splitBtn.classList.remove("hidden");
          } else {
            splitBtn.classList.add("hidden");
          }
        }
    
        // Type Instruction
        let instructionText = "";
        switch (q.type) {
          case "single_choice":
            instructionText = lbls.type_single;
            break;
          case "multiple_choice":
            instructionText = lbls.type_multi;
            break;
          case "true_false":
            instructionText = lbls.type_tf;
            break;
          case "ordering":
            instructionText = lbls.type_order;
            break;
          case "scenario":
            instructionText = lbls.type_scenario;
            break;
          default:
            instructionText = lbls.type_single;
        }
        typeInstruction.textContent = instructionText;
    
        // --- Render Blocks Helper ---
        function renderBlocks(container, blocks, fallbackText) {
            container.innerHTML = "";
            if (blocks && Array.isArray(blocks)) {
                blocks.forEach(block => {
                    if (block.type === 'text' || block.type === 'markdown') {
                        const div = document.createElement('div');
                        if (window.marked) {
                            div.innerHTML = marked.parse(block.content || '', { breaks: true, gfm: true });
                        } else {
                            div.textContent = block.content;
                        }
                        container.appendChild(div);

                    } else if (block.type === 'sql' || block.type === 'code') {
                         /* --- Mac Terminal Code Block --- */
                         const term = document.createElement('div');
                         term.className = 'code-terminal';
                         
                         const head = document.createElement('div');
                         head.className = 'terminal-header';
                         head.innerHTML = `
                            <div class="window-dot dot-red"></div>
                            <div class="window-dot dot-yellow"></div>
                            <div class="window-dot dot-green"></div>
                         `;
                         
                         const body = document.createElement('div');
                         body.className = 'terminal-body';
                         
                         if (block.type === 'sql' || block.lang === 'sql') {
                             body.innerHTML = window.formatSQL(block.content);
                         } else {
                             const pre = document.createElement('pre');
                             pre.style.margin = 0;
                             pre.textContent = block.content;
                             body.appendChild(pre);
                         }
                         
                         term.appendChild(head);
                         term.appendChild(body);
                         container.appendChild(term);
                    } else if (block.type === 'table') {
                        const tableObj = block.table;
                        if (tableObj) {
                            const table = document.createElement('table');
                            table.className = 'table table-bordered'; // Bootstrap-like classes
                            if (tableObj.headers) {
                                const thead = document.createElement('thead');
                                const tr = document.createElement('tr');
                                tableObj.headers.forEach(h => {
                                    const th = document.createElement('th');
                                    th.textContent = h;
                                    tr.appendChild(th);
                                });
                                thead.appendChild(tr);
                                table.appendChild(thead);
                            }
                            const tbody = document.createElement('tbody');
                            tableObj.rows.forEach(row => {
                                const tr = document.createElement('tr');
                                row.forEach(cell => {
                                    const td = document.createElement('td');
                                    td.textContent = cell === null ? '—' : cell; // Handle nulls gracefully
                                    tr.appendChild(td);
                                });
                                tbody.appendChild(tr);
                            });
                            table.appendChild(tbody);
                            // container.appendChild(table); // Direct append or wrap in responsive div
                            const responsiveDiv = document.createElement('div');
                            responsiveDiv.style.overflowX = 'auto';
                            responsiveDiv.appendChild(table);
                            container.appendChild(responsiveDiv);
                        }
                    }


                });
            } else {
                 // Fallback to legacy string rendering
                 if (window.marked) {
                   container.innerHTML = marked.parse(fallbackText || '', { breaks: true, gfm: true });
                 } else {
                   container.textContent = fallbackText;
                 }
            }
        }
    
        if (q.promptBlocks) {
            renderBlocks(questionText, q.promptBlocks, q.prompt);
        } else {
            if (window.marked) {
              questionText.innerHTML = marked.parse(q.prompt, { breaks: true, gfm: true });
            } else {
              questionText.textContent = q.prompt;
            }
        }
        
        // Needs Review Badge
        if (q.needsReview) {
            const badge = document.createElement('span');
            badge.className = 'badge bg-warning text-dark ms-2';
            badge.textContent = lbls.needs_review;
            badge.title = q.reviewReason || "Content needs verification";
            // Prepend to question text or append to type instruction
            typeInstruction.appendChild(badge);
        }
    

        const answeredData = userAnswers[index]; // ...
        const isAnswered = !!answeredData;
        const isSubmitted = answeredData && answeredData.submitted;

        // --- Time Attack per-question countdown (60s) ---
        if (window.timeAttackInterval) {
            clearInterval(window.timeAttackInterval);
            window.timeAttackInterval = null;
        }
        const timeAttackContainer = document.getElementById("time-attack-bar-container");
        const timeAttackFill = document.getElementById("time-attack-bar-fill");
        if (window.isTimeAttackMode && !isSubmitted) {
            if (timeAttackContainer) timeAttackContainer.classList.remove("hidden");
            let timeLeft = 60;
            if (timeAttackFill) {
                timeAttackFill.style.width = "100%";
                timeAttackFill.style.backgroundColor = "var(--primary-color)";
            }
            window.timeAttackInterval = setInterval(() => {
                timeLeft--;
                const pct = Math.max(0, (timeLeft / 60) * 100);
                if (timeAttackFill) {
                    timeAttackFill.style.width = pct + "%";
                    if (timeLeft <= 10) {
                        timeAttackFill.style.backgroundColor = "var(--danger-color)";
                    } else if (timeLeft <= 20) {
                        timeAttackFill.style.backgroundColor = "var(--warning-color)";
                    } else {
                        timeAttackFill.style.backgroundColor = "var(--primary-color)";
                    }
                }
                if (timeLeft <= 0) {
                    clearInterval(window.timeAttackInterval);
                    window.timeAttackInterval = null;
                    if (!userAnswers[currentQuestionIndex] || !userAnswers[currentQuestionIndex].submitted) {
                        if (!userAnswers[currentQuestionIndex]) {
                            userAnswers[currentQuestionIndex] = {
                                selected: [],
                                isCorrect: false,
                                submitted: true,
                                timedOut: true
                            };
                        }
                        checkAnswer();
                    }
                }
            }, 1000);
        } else {
            if (timeAttackContainer) timeAttackContainer.classList.add("hidden");
        }

        // SHUFFLE LOGIC (New)
        // Only shuffle for standard choice types if not reviewing
        let optionsToRender = [...q.options];
        if (!isSubmitted && q.type !== "ordering" && q.type !== "true_false") {
            // Check if we already have a shuffled order saved for this question index?
            // If we re-render (e.g. nav back/forth), we don't want to re-shuffle and confuse user?
            // Actually user said "para no aprender la ubicacion", implies predictable shuffling PER SESSION is okay, 
            // but random every time we show it? 
            // Better: Shuffle once and store mapping? 
            // Simplest: Shuffle every render. If user navigates away and back, it shuffles again. 
            // This is actually GOOD for "not memorizing position". Start with this.
            optionsToRender.sort(() => Math.random() - 0.5);
        }

        optionsList.innerHTML = "";


        if (q.type === "ordering") {
          const info = document.createElement("div");
          info.style.fontStyle = "italic";
          info.setAttribute("aria-label", lbls.drag);
          info.textContent = lbls.drag;
          optionsList.appendChild(info);
    
          let itemsToRender = q.options;
          if (isAnswered && answeredData.selected && answeredData.selected.length > 0)
            itemsToRender = answeredData.selected.map((id) =>
              q.options.find((o) => o.id === id)
            );
    
          itemsToRender.forEach((opt, optIdx) => {
            const el = document.createElement("div");
            el.className = "option-item ordering-item ordering-item-enhanced";
            el.dataset.id = opt.id;
            
            const badge = document.createElement("span");
            badge.className = "ordering-step-badge";
            badge.textContent = optIdx + 1;
            el.appendChild(badge);

            const textWrap = document.createElement("div");
            textWrap.style.flex = "1";
            if (window.marked) {
                textWrap.innerHTML = marked.parse(opt.text, { breaks: true, gfm: true });
            } else {
                textWrap.textContent = opt.text;
            }
            el.appendChild(textWrap);

            if (!isSubmitted) {
              const actions = document.createElement("div");
              actions.className = "ordering-actions";
              actions.innerHTML = `
                <button type="button" class="ordering-arrow-btn" onclick="window._moveOrderItem(this, -1)" title="Mover arriba">&#9650;</button>
                <button type="button" class="ordering-arrow-btn" onclick="window._moveOrderItem(this, 1)" title="Mover abajo">&#9660;</button>
              `;
              el.appendChild(actions);
            }

            el.draggable = !isSubmitted;
            if (!isSubmitted) {
              el.addEventListener("dragstart", handleDragStart);
              el.addEventListener("dragover", handleDragOver);
              el.addEventListener("drop", handleDrop);
            } else {
              el.style.backgroundColor = "var(--bg-surface)";
            }
            optionsList.appendChild(el);
          });

          // Show Correct Order if Incorrect
          if (isSubmitted && answeredData && !answeredData.isCorrect) {
              const correctContainer = document.createElement("div");
              correctContainer.style.marginTop = "20px";
              correctContainer.style.padding = "10px";
              correctContainer.style.border = "2px solid var(--success-color)";
              correctContainer.style.borderRadius = "8px";
              const header = document.createElement("h5");
              header.textContent = lbls.ans || "Respuesta Correcta:";
              header.style.color = "var(--success-color)";
              header.style.marginBottom = "10px";
              correctContainer.appendChild(header);

              q.correctIds.forEach(id => {
                  const opt = q.options.find(o => o.id === id);
                  if (opt) {
                      const el = document.createElement("div");
                      el.className = "option-item ordering-item";
                      el.style.cursor = "default";
                      el.style.borderColor = "var(--success-color)";
                      
                      if (window.marked) {
                           el.innerHTML = marked.parse(opt.text, { breaks: true, gfm: true }); 
                      } else {
                           el.textContent = opt.text;
                      }
                      correctContainer.appendChild(el);
                  }
              });
              optionsList.appendChild(correctContainer);
          }
        } else {
           const keyLetters = ["A", "B", "C", "D", "E", "F"];
           optionsToRender.forEach((opt, optIdx) => {
             const el = document.createElement("div");
             el.className = "option-item";
             el.dataset.id = opt.id;
             el.dataset.index = optIdx;

             const badge = document.createElement("span");
             badge.className = "option-key-badge";
             badge.textContent = keyLetters[optIdx] || (optIdx + 1);
             el.appendChild(badge);

             const contentWrapper = document.createElement("div");
             contentWrapper.className = "option-content-wrapper";

             if (opt.blocks) {
                  renderBlocks(contentWrapper, opt.blocks, opt.text);
             } else if (window.marked) {
                  contentWrapper.innerHTML = marked.parse(opt.text, { breaks: true, gfm: true });
             } else {
                  contentWrapper.textContent = opt.text;
             }
             el.appendChild(contentWrapper);

             // Selection state (visual)
             if (isAnswered && answeredData.selected && answeredData.selected.includes(opt.id)) {
                 el.classList.add("selected");
             }
     
             if (isSubmitted) {
               // Show Correct/Incorrect styling immediately if submitted
               if (q.correctIds.includes(opt.id)) el.classList.add("correct");
               else if (answeredData.selected && answeredData.selected.includes(opt.id))
                 el.classList.add("incorrect");
     
               el.style.pointerEvents = "none";
             } else {
               el.onclick = () => selectOption(el, q.type);
             }
             optionsList.appendChild(el);
           });
        }
    
        if (window.MathJax) MathJax.typesetPromise([questionText, optionsList]);
    
        feedbackArea.classList.add("hidden");
        feedbackArea.className = "feedback-section hidden";
    
        if (isSubmitted) {
          showFeedback(q, answeredData ? answeredData.isCorrect : false);
          checkBtn.classList.add("hidden");
        } else {
             if (typeof isRealExam !== 'undefined' && isRealExam) {
                 checkBtn.classList.add("hidden");
             } else {
                 checkBtn.classList.remove("hidden");
             }
        }
        if (typeof updateFlagButtonUI === 'function') updateFlagButtonUI();
        updateQuestionMap();
    } catch (err) {
        console.error("LOAD QUESTION ERROR:", err);
        alert("SYSTEM ERROR loading question:\n" + err.message + "\n" + err.stack);
        const qt = document.getElementById("question-text");
        if (qt) {
             qt.innerHTML = `<div style="color:var(--danger-color, #b42318); font-weight:bold; padding:1rem; border:1px solid var(--danger-color, #b42318);">
             ${err.message}
             <br><small>${err.stack}</small>
             </div>`;
        }
    }
  }

  function selectOption(el, type) {
    // If submitted, do not allow changes
    if (userAnswers[currentQuestionIndex] && userAnswers[currentQuestionIndex].submitted) return;
    
    // UI Update
    if (type !== "multiple_choice") {
      optionsList
        .querySelectorAll(".option-item")
        .forEach((i) => i.classList.remove("selected"));
      el.classList.add("selected");
    } else {
      el.classList.toggle("selected");
    }

    // Auto-save Draft
    const q = currentQuizQuestions[currentQuestionIndex];
    let selectedIds = [];
    
    if (type === "ordering") {
        const items = Array.from(optionsList.querySelectorAll(".ordering-item"));
        selectedIds = items.map((el) => el.dataset.id);
    } else {
        const selectedEls = Array.from(optionsList.querySelectorAll(".selected"));
        selectedIds = selectedEls.map((el) => el.dataset.id);
    }

    // Determine correctness (silent check for draft)
    let isCorrect = false;
    if (type === "ordering") {
         isCorrect = JSON.stringify(selectedIds) === JSON.stringify(q.correctIds);
    } else {
         isCorrect = selectedIds.length === q.correctIds.length &&
                     selectedIds.every((id) => q.correctIds.includes(id));
    }

    // Initialize or Retrieve existing answer state
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = {
            selected: [],
            isCorrect: false,
            submitted: false,
            initialSelection: null // Track first choice
        };
    }
    
    // Track Initial Selection (First time they select something valid)
    // Only if single choice or multiple choice where they commit? 
    // Logic: If they selected something WRONG first, and now selected RIGHT. 
    // We capture the FIRST non-empty selection state.
    if (userAnswers[currentQuestionIndex].initialSelection === null && selectedIds.length > 0) {
        userAnswers[currentQuestionIndex].initialSelection = { 
            ids: [...selectedIds], 
            isCorrect: isCorrect 
        };
    }

    userAnswers[currentQuestionIndex].selected = selectedIds;
    userAnswers[currentQuestionIndex].isCorrect = isCorrect;
    userAnswers[currentQuestionIndex].submitted = false; // Draft mode
    
    updateQuestionMap();
  }

  function checkAnswer() {
    if (window.timeAttackInterval) {
        clearInterval(window.timeAttackInterval);
        window.timeAttackInterval = null;
    }
    const timeAttackContainer = document.getElementById("time-attack-bar-container");
    if (timeAttackContainer) timeAttackContainer.classList.add("hidden");

    // Auto-save for ordering if no interaction/selection yet
    const q = currentQuizQuestions[currentQuestionIndex];
    if (q && q.type === 'ordering' && !userAnswers[currentQuestionIndex]) {
         selectOption(null, 'ordering');
    }
    // If empty/timed-out, create submission record
    if (!userAnswers[currentQuestionIndex]) {
        userAnswers[currentQuestionIndex] = {
            selected: [],
            isCorrect: false,
            submitted: true,
            timedOut: true
        };
    }
    
    // Mark as submitted and show feedback
    const ans = userAnswers[currentQuestionIndex];
    ans.submitted = true;
    // F12: Record time spent on this question
    if (typeof recordQuestionTime === 'function') recordQuestionTime(currentQuestionIndex);
    if (ans.isCorrect) score++;

    loadQuestion(currentQuestionIndex);
  }

  function showFeedback(q, isCorrect) {
    // Play Sound (F8: SoundFX integration)
    if (typeof SoundFX !== 'undefined') {
        if (isCorrect) SoundFX.playCorrect();
        else SoundFX.playIncorrect();
    } else if (window.SoundManager) {
        window.SoundManager.play(isCorrect ? 'correct' : 'wrong');
    }

    // F6: Track daily streak
    if (window.HeroManager && typeof window.HeroManager.trackDailyActivity === 'function') {
        window.HeroManager.trackDailyActivity();
    }

    feedbackArea.classList.remove("hidden");
    feedbackArea.classList.add(isCorrect ? "correct" : "incorrect");
    const lang = getActiveLanguage();
    const lbls =
      lang === "es"
        ? { cor: "¡Correcto!", inc: "Incorrecto.", ans: "Respuesta Correcta:" }
        : { cor: "Correct!", inc: "Incorrect.", ans: "Correct Answer:" };

    document.getElementById("feedback-title").textContent = isCorrect
      ? lbls.cor
      : lbls.inc;
    let explanation = q.explanation;
    if (!isCorrect) {
      explanation =
        `<strong>${lbls.ans}</strong> ${q.correctIds.join(", ")}. ` +
        explanation;
    }
    if (q.explanationBlocks) {
         renderBlocks(document.getElementById("feedback-explanation"), q.explanationBlocks, q.explanation);
    } else if (window.marked) {
         document.getElementById("feedback-explanation").innerHTML = marked.parse(explanation);
    } else {
         document.getElementById("feedback-explanation").innerHTML = explanation;
    }
    
    // Documentation Link
    if (q.docLink) {
        const docDiv = document.createElement("div");
        docDiv.style.marginTop = "0.75rem";
        docDiv.innerHTML = `<a href="${q.docLink}" target="_blank" class="btn btn-sm btn-outline" style="text-decoration:none;"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg> Read Documentation / Reference</a>`;
        document.getElementById("feedback-explanation").appendChild(docDiv);
    }

    // TTS Audio button for explanation
    const ttsDiv = document.createElement("div");
    ttsDiv.style.marginTop = "0.6rem";
    ttsDiv.style.display = "flex";
    ttsDiv.style.flexWrap = "wrap";
    ttsDiv.style.gap = "8px";
    ttsDiv.style.alignItems = "center";
    
    ttsDiv.innerHTML = `
      <button type="button" class="btn btn-sm btn-outline" style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:14px;font-size:0.75rem;cursor:pointer;"><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg> <span>${lang === 'es' ? 'Escuchar Explicación' : 'Listen Explanation'}</span></button>
      <button type="button" class="btn btn-sm btn-outline" onclick="window.AICoach ? window.AICoach.toggleBreakdown(${currentQuestionIndex}) : null" style="display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:14px;font-size:0.75rem;cursor:pointer;border-color:#3157d5;color:#3157d5;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7V5.73C7.4 5.39 7 4.74 7 4a2 2 0 012-2h3zM9 13a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/></svg>
        <span>${lang === 'es' ? 'Desglose AI Coach' : 'AI Coach Breakdown'}</span>
      </button>
    `;
    ttsDiv.querySelector("button").onclick = () => window.speakText(q.explanation, lang);
    document.getElementById("feedback-explanation").appendChild(ttsDiv);

    // AI Coach Expandable Breakdown Box
    const coachBox = document.createElement("div");
    coachBox.id = `ai-coach-breakdown-${currentQuestionIndex}`;
    coachBox.style.cssText = "display:none;margin-top:10px;padding:14px 16px;background:rgba(49,87,213,0.06);border:1.5px solid rgba(49,87,213,0.25);border-radius:14px;font-size:0.85rem;line-height:1.6;color:var(--text-color);";
    
    const coachData = window.AICoach ? window.AICoach.generateBreakdown(q) : null;
    coachBox.innerHTML = `
      <div style="font-weight:700;color:#3157d5;margin-bottom:8px;display:flex;align-items:center;gap:6px;">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
        ${lang === 'es' ? 'Desglose Situacional de Examen Oficial' : 'Official Exam Situational Breakdown'}
      </div>
      <div style="margin-bottom:6px;"><strong><svg viewBox="0 0 24 24" width="13" height="13" fill="#3157d5" style="vertical-align:middle;margin-right:4px"><circle cx="12" cy="12" r="10" fill="none" stroke="#3157d5" stroke-width="2"/><circle cx="12" cy="12" r="6" fill="none" stroke="#3157d5" stroke-width="2"/><circle cx="12" cy="12" r="2" fill="#3157d5"/></svg>${lang === 'es' ? 'Clave de Certificación' : 'Exam Key'}:</strong> ${coachData ? coachData.examKey : ''}</div>
      <div style="margin-bottom:6px;"><strong><svg viewBox="0 0 24 24" width="13" height="13" fill="#d97706" style="vertical-align:middle;margin-right:4px"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>${lang === 'es' ? 'Trampa Frecuente' : 'Common Pitfall'}:</strong> ${coachData ? coachData.pitfalls : ''}</div>
      <div><strong><svg viewBox="0 0 24 24" width="13" height="13" fill="#3157d5" style="vertical-align:middle;margin-right:4px"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>${lang === 'es' ? 'Regla Mnemotécnica' : 'Rule of Thumb'}:</strong> ${coachData ? coachData.ruleOfThumb : ''}</div>
    `;
    document.getElementById("feedback-explanation").appendChild(coachBox);
  }

  function renderQuestionMap() {
    questionMap.innerHTML = "";
    currentQuizQuestions.forEach((_, idx) => {
      const node = document.createElement("div");
      node.className = "map-node";
      node.textContent = idx + 1;
      node.id = `map-node-${idx}`;
      node.onclick = () => loadQuestion(idx);
      questionMap.appendChild(node);
    });
    updateQuestionMap();
  }

  function toggleStudyFocusMode() {
    const studyScreen = document.getElementById("study-screen");
    const focusBtn = document.getElementById("study-focus-mode-btn");
    if (!studyScreen) return;
    const isFocus = studyScreen.classList.toggle("study-focus-mode");
    if (focusBtn) {
      focusBtn.classList.toggle("bookmarked", isFocus);
      focusBtn.innerHTML = isFocus
        ? `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg> Salir`
        : `<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/></svg> Enfoque`;
    }
  }
  window.toggleStudyFocusMode = toggleStudyFocusMode;

  window._copyCodeSnippet = function(btn, e) {
    if (e && e.stopPropagation) e.stopPropagation();
    const card = btn.closest('.unir-persona-card') || btn.closest('div').parentElement;
    const codeEl = card ? card.querySelector('code') : null;
    if (!codeEl) return;
    navigator.clipboard.writeText(codeEl.textContent || '').then(() => {
      const origHtml = btn.innerHTML;
      btn.innerHTML = `<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> Copiado`;
      btn.style.color = "var(--success-color, #28a745)";
      setTimeout(() => {
        btn.innerHTML = origHtml;
        btn.style.color = "";
      }, 1500);
    });
  };

  window._moveOrderItem = function(btn, dir) {
    const item = btn.closest('.ordering-item');
    if (!item) return;
    const parent = item.parentElement;
    if (dir === -1 && item.previousElementSibling && !item.previousElementSibling.classList.contains('ordering-info')) {
      parent.insertBefore(item, item.previousElementSibling);
    } else if (dir === 1 && item.nextElementSibling) {
      parent.insertBefore(item.nextElementSibling, item);
    }
    const allItems = parent.querySelectorAll('.ordering-item');
    allItems.forEach((it, idx) => {
      const badge = it.querySelector('.ordering-step-badge');
      if (badge) badge.textContent = idx + 1;
    });
    const currentIds = Array.from(allItems).map(it => it.dataset.id);
    const q = currentQuizQuestions[currentQuestionIndex];
    if (q) {
      userAnswers[currentQuestionIndex] = {
        selected: currentIds,
        isCorrect: JSON.stringify(currentIds) === JSON.stringify(q.correctIds)
      };
      updateQuestionMap();
    }
  };

  // --- Modal Elements ---
  const confirmModal = document.getElementById("confirm-modal");
  const confirmContinueBtn = document.getElementById("confirm-continue");
  const confirmFinishBtn = document.getElementById("confirm-finish");
  const finishBtnTop = document.getElementById("finish-btn-top");

  // --- Question Flagging (Mark for Review) ---
  const flaggedQuestions = new Set();
  window.flaggedQuestions = flaggedQuestions;

  function toggleFlagCurrentQuestion() {
    if (flaggedQuestions.has(currentQuestionIndex)) {
      flaggedQuestions.delete(currentQuestionIndex);
    } else {
      flaggedQuestions.add(currentQuestionIndex);
    }
    updateFlagButtonUI();
    updateQuestionMap();
  }
  window.toggleFlagCurrentQuestion = toggleFlagCurrentQuestion;

  function toggleSplitPaneView() {
    const card = document.getElementById("question-card");
    const btn = document.getElementById("split-pane-toggle-btn");
    if (!card) return;
    const isActive = card.classList.toggle("split-pane-active");
    if (btn) {
      btn.classList.toggle("active", isActive);
    }
  }
  window.toggleSplitPaneView = toggleSplitPaneView;

  function updateFlagButtonUI() {
    const flagBtn = document.getElementById("flag-question-btn");
    if (!flagBtn) return;
    const isFlagged = flaggedQuestions.has(currentQuestionIndex);
    const lang = getActiveLanguage();
    if (isFlagged) {
      flagBtn.classList.add("flagged");
      flagBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg> <span>${lang === 'es' ? 'Marcada (F)' : 'Flagged (F)'}</span>`;
    } else {
      flagBtn.classList.remove("flagged");
      flagBtn.innerHTML = `<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/></svg> <span>${lang === 'es' ? 'Marcar (F)' : 'Flag (F)'}</span>`;
    }
  }
  window.updateFlagButtonUI = updateFlagButtonUI;

  function updateQuestionMap() {
    // Reset all specific statuses first, keep base class
    document.querySelectorAll(".map-node").forEach((n) => {
        n.className = "map-node"; // Reset
        n.style = ""; // Clear inline styles
    });

    Object.keys(userAnswers).forEach((idxStr) => {
      const idx = parseInt(idxStr);
      const ans = userAnswers[idx];
      const node = document.getElementById(`map-node-${idx}`);
      
      if (node && ans && ans.selected && ans.selected.length > 0) {
          node.classList.add("answered");
      }
    });

    // Mark flagged nodes
    flaggedQuestions.forEach((idx) => {
      const node = document.getElementById(`map-node-${idx}`);
      if (node) node.classList.add("flagged");
    });

    // Current overrides everything with Yellow/Active
    const current = document.getElementById(`map-node-${currentQuestionIndex}`);
    if (current) {
        current.classList.remove("answered");
        current.className = `map-node active${flaggedQuestions.has(currentQuestionIndex) ? ' flagged' : ''}`;
    }
  }

  let currentReviewFilter = 'all';

  function openExamReviewModal() {
    const total = currentQuizQuestions.length;
    const answeredCount = Object.values(userAnswers).filter(a => a.selected && a.selected.length > 0).length;
    const unansweredCount = total - answeredCount;
    const flaggedCount = flaggedQuestions.size;
    
    // Populate KPIs
    const kpiAns = document.getElementById("review-kpi-answered");
    const kpiUnans = document.getElementById("review-kpi-unanswered");
    const kpiFlag = document.getElementById("review-kpi-flagged");
    if (kpiAns) kpiAns.textContent = answeredCount;
    if (kpiUnans) kpiUnans.textContent = unansweredCount;
    if (kpiFlag) kpiFlag.textContent = flaggedCount;

    const lang = getActiveLanguage();
    const msgEl = document.getElementById("confirm-msg");
    if (msgEl) {
      if (unansweredCount === 0 && flaggedCount === 0) {
        msgEl.innerHTML = lang === 'es' 
          ? '¡Excelente! Has respondido todas las preguntas. Puedes revisar el grid o entregar el examen.' 
          : 'Great job! You have answered all questions. You can review or submit the exam.';
      } else {
        const pendingStr = unansweredCount > 0 
          ? (lang === 'es' ? ' <span style="color:var(--danger-color);font-weight:600;">' + unansweredCount + ' pendientes</span>.' : ' <span style="color:var(--danger-color);font-weight:600;">' + unansweredCount + ' pending</span>.')
          : '';
        const flagStr = flaggedCount > 0
          ? (lang === 'es' ? ' <span style="color:#d97706;font-weight:600;">' + flaggedCount + ' marcadas para revisión</span>.' : ' <span style="color:#d97706;font-weight:600;">' + flaggedCount + ' flagged</span>.')
          : '';
        msgEl.innerHTML = lang === 'es'
          ? 'Tienes <strong>' + answeredCount + '/' + total + '</strong> respondidas.' + pendingStr + flagStr
          : 'You have <strong>' + answeredCount + '/' + total + '</strong> answered.' + pendingStr + flagStr;
      }
    }

    renderReviewGrid(currentReviewFilter);

    if (confirmModal) confirmModal.classList.remove("hidden");

    if (confirmContinueBtn) confirmContinueBtn.onclick = () => {
      if (confirmModal) confirmModal.classList.add("hidden");
    };
    if (confirmFinishBtn) confirmFinishBtn.onclick = () => {
      if (confirmModal) confirmModal.classList.add("hidden");
      finishQuiz();
    };
  }

  function renderReviewGrid(filter) {
    const grid = document.getElementById("review-question-grid");
    if (!grid) return;
    grid.innerHTML = "";
    
    currentQuizQuestions.forEach((_, idx) => {
      const ans = userAnswers[idx];
      const isAnswered = ans && ans.selected && ans.selected.length > 0;
      const isFlagged = flaggedQuestions.has(idx);

      if (filter === 'unanswered' && isAnswered) return;
      if (filter === 'flagged' && !isFlagged) return;

      const btn = document.createElement("button");
      btn.type = "button";
      btn.style.cssText = `
        padding: 8px 4px;
        border-radius: 6px;
        font-weight: 700;
        font-size: 0.85rem;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2px;
        transition: all 0.15s ease;
        ${isAnswered ? 'background: rgba(40, 167, 69, 0.12); color: var(--success-color); border: 1px solid var(--success-color);' : 'background: rgba(220, 53, 69, 0.08); color: var(--danger-color); border: 1px dashed var(--danger-color);'}
        ${idx === currentQuestionIndex ? 'box-shadow: 0 0 0 2px var(--primary-color);' : ''}
      `;

      let flagIndicator = isFlagged ? `<span style="display:inline-flex;margin-left:2px;">${svgIcon(SVG.star, 10, '#d97706')}</span>` : '';
      btn.innerHTML = `<span>${idx + 1}</span>${flagIndicator}`;
      btn.title = `Pregunta ${idx + 1}: ${isAnswered ? 'Respondida' : 'Sin responder'}${isFlagged ? ' (Marcada)' : ''}`;
      
      btn.onclick = () => {
        if (confirmModal) confirmModal.classList.add("hidden");
        loadQuestion(idx);
      };

      grid.appendChild(btn);
    });

    if (grid.children.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1 / -1; text-align: center; color: var(--text-muted); padding: 1.5rem; font-size: 0.85rem;">No hay preguntas en esta categoría.</div>`;
    }
  }

  window._filterReviewGrid = function(filter) {
    currentReviewFilter = filter;
    const allBtn = document.getElementById("filter-review-all");
    const unansBtn = document.getElementById("filter-review-unanswered");
    const flagBtn = document.getElementById("filter-review-flagged");
    if (allBtn) allBtn.className = `btn btn-sm ${filter === 'all' ? 'btn-primary' : 'btn-outline'} review-filter-btn`;
    if (unansBtn) unansBtn.className = `btn btn-sm ${filter === 'unanswered' ? 'btn-primary' : 'btn-outline'} review-filter-btn`;
    if (flagBtn) flagBtn.className = `btn btn-sm ${filter === 'flagged' ? 'btn-primary' : 'btn-outline'} review-filter-btn`;
    renderReviewGrid(filter);
  };

  function tryFinishQuiz() {
    console.log("tryFinishQuiz triggered -> opening review screen");
    const total = currentQuizQuestions.length;
    const answeredCount = Object.values(userAnswers).filter(a => a.selected && a.selected.length > 0).length;
    const unansweredCount = total - answeredCount;
    const flaggedCount = flaggedQuestions.size;

    if (unansweredCount > 0 || flaggedCount > 0) {
       openExamReviewModal();
    } else {
       // All answered, show modal to confirm final submission or submit
       openExamReviewModal();
    }
  }

  function finishQuiz() {
    try {
        if (typeof timerInterval !== 'undefined') clearInterval(timerInterval);
        // F3: Stop countdown timer
        if (typeof stopCountdownTimer === 'function') stopCountdownTimer();
        
        quizUI.classList.add("hidden");
        timerDisplay.classList.add("hidden");
        // Ensure modal is gone
        if (confirmModal) confirmModal.classList.add("hidden");
        
        resultsScreen.classList.remove("hidden");

        const total = currentQuizQuestions.length;
        let totalScore = 0; // Changed from correctCount (integer) to float
        let correctCount = 0; // Keep tracking "perfect" answers for streaks/legacy
        
        // Re-calculate score and track additional metrics
        let currentStreak = 0;
        let maxStreak = 0;
        let skeptic = 0; 

        currentQuizQuestions.forEach((q, idx) => {
            const ans = userAnswers[idx];
            if (ans) {
                // Determine correctness 
                let isCorrect = false;
                let partialScore = 0;

                if (q.type === "ordering") {
                     isCorrect = JSON.stringify(ans.selected) === JSON.stringify(q.correctIds);
                     if(isCorrect) partialScore = 1;

                } else if (q.type === "multiple_choice") {
                     // PARTIAL CREDIT LOGIC
                     // Count valid selections
                     const correctIds = q.correctIds || [];
                     const totalCorrectOptions = correctIds.length;
                     
                     // "Divide entre las opciones y ver cuantas buenas..."
                     // Score = Selected Correct / Total Correct Available
                     // If user selects wrong ones, we usually ignore them or penalize?
                     // User said "solo considerar las buenas". We will just sum the value of good ones.
                     
                     const userCorrectSelections = ans.selected.filter(id => correctIds.includes(id)).length;
                     
                     if (totalCorrectOptions > 0) {
                         partialScore = userCorrectSelections / totalCorrectOptions;
                     }
                     
                     // Strict "isCorrect" for Streak/Review (Must be perfect)
                     isCorrect = ans.selected.length === correctIds.length &&
                                 ans.selected.every((id) => correctIds.includes(id));
                
                } else {
                     // Single Choice / True False
                     isCorrect = ans.selected.length === q.correctIds.length &&
                                 ans.selected.every((id) => q.correctIds.includes(id));
                     if(isCorrect) partialScore = 1;
                }
                
                // Add to Total Score (Accumulate Partial)
                totalScore += partialScore;

                // Update the object for the review screen
                ans.isCorrect = isCorrect;
                ans.submitted = true; 
                
                if (isCorrect) {
                  correctCount++; // Integers for stats
                  currentStreak++;
                  
                  // Skeptic Check
                  if (ans.initialSelection && !ans.initialSelection.isCorrect) {
                       skeptic++;
                  }

                } else {
                  if(currentStreak > maxStreak) maxStreak = currentStreak;
                  currentStreak = 0;
                }
            } else {
                if(currentStreak > maxStreak) maxStreak = currentStreak;
                currentStreak = 0;
            }
        });
        if(currentStreak > maxStreak) maxStreak = currentStreak;

        // Calculate Percentage (Based on Total Score now, not just count)
        const finalPct = total === 0 ? 0 : Math.round((totalScore / total) * 100);
        const passed = finalPct >= 70; // 70% to pass

        // Identify Missed Questions (Strictly wrong or not perfect)
        const missedIds = [];
        currentQuizQuestions.forEach((q, idx) => {
            const ans = userAnswers[idx];
            if (ans && !ans.isCorrect) {
                missedIds.push(q.id);
            }
        });

        // SAVE HISTORY
        // We save 'correctCount' still? Or should we save 'totalScore'?
        // The saveExamResult signature is (score, total, ...). 
        // If we pass a float, it might look weird in history list "4.5/10".
        // Let's pass the rounded score or raw? 
        // User history view shows "score/total". 
        // Let's pass the float but maybe formatted?
        // Actually, let's keep it accurate.
        const scoreToSave = parseFloat(totalScore.toFixed(2));

        const questionIds = currentQuizQuestions.map(q => q.id);
        const userAnswersMap = {};
        Object.keys(userAnswers).forEach(k => userAnswersMap[k] = userAnswers[k]);
        saveExamResult(scoreToSave, total, passed, missedIds, questionIds, userAnswersMap);
        
        // Update Gamification Stats
        if (typeof updateGamification === 'function') {
            updateGamification({ 
                score: correctCount, // Gamification usually expects integers (XP per question). Keep strictly correct for XP? 
                                     // Or partial XP? Let's give partial XP logic inside gamification later if needed.
                                     // For now, pass strict correctCount for conservative XP.
                total: total, 
                passed: passed, 
                mode: isRealExam ? "Real" : "Estudio",
                correctStreak: maxStreak, 
                skepticCount: skeptic
            });
        }



        document.getElementById("final-score").textContent = finalPct;
        const scoreFraction = document.getElementById("score-fraction");
        if (scoreFraction) {
            scoreFraction.textContent = `${correctCount} / ${total} correctas`;
        }

        // --- Export PDF Button ---
        // Dynamically add or ensure exists. 
        // We can append it to the actions container if it exists, or create one.
        // Assuming there's a container for "Review", "Retry", "Finish".
        // Let's look for .result-actions or similar?
        // Actually, let's just insert it after the score fraction or in the header.
        
        let exportBtn = document.getElementById("export-pdf-btn");
        if (!exportBtn) {
            // Create container if needed, or append to result message container
            const container = document.getElementById("final-score").parentElement; // .score-circle usually
            // Better to put it below the circle
            const actionContainer = document.querySelector(".result-actions") || document.querySelector("#results-screen");
            
            // Create a dedicated actions div if missing in HTML, but let's assume valid HTML structure or append near retry button.
            // Let's create a specific container for tools
            const toolsDiv = document.createElement("div");
            toolsDiv.className = "result-tools no-print";
            toolsDiv.style.marginTop = "1rem";
            toolsDiv.style.textAlign = "center";
            
            exportBtn = document.createElement("button");
            exportBtn.id = "export-pdf-btn";
            exportBtn.className = "btn btn-secondary btn-sm";
            exportBtn.innerHTML = '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg> Guardar como PDF';
            exportBtn.onclick = () => window.print();
            
            toolsDiv.appendChild(exportBtn);
            
            // Insert after result message
            const resMsg = document.getElementById("result-message");
            if (resMsg) {
                resMsg.insertAdjacentElement('afterend', toolsDiv);
            }
        } else {
            // Ensure visibility if it was hidden?
            exportBtn.style.display = "inline-block";
        }

        // F4: Certificate download button (only on pass)
        if (typeof addCertificateButton === 'function') {
            addCertificateButton(finalPct, passed);
        }


        // Localization for Result Msg
        const lang = getActiveLanguage();
        const lbls =
        lang === "es"
            ? {
                pass: "¡Felicidades! Has aprobado el examen.",
                fail: "No has aprobado. Se requiere un 70% para aprobar.",
                review_title: "Revisión Detallada de Preguntas",
                domain_title: "Reporte de Fortalezas y Debilidades",
                q_num: "Pregunta",
                your_ans: "Tu Respuesta:",
                corr_ans: "Respuesta Correcta:",
                not_ans: "No respondida",
                exp: "Explicación:",
                strength: "Fortaleza",
                weakness: "Debilidad",
                perf: "Desempeño",
                correct: "Correcta",
                incorrect: "Incorrecta",
                skipped: "Omitida",
                points: "Puntos"
            }
            : {
                pass: "Congratulations! You passed the exam.",
                fail: "You did not pass. 70% is required to pass.",
                review_title: "Detailed Question Review",
                domain_title: "Strengths and Weaknesses Report",
                q_num: "Question",
                your_ans: "Your Answer:",
                corr_ans: "Correct Answer:",
                not_ans: "Not answered",
                exp: "Explanation:",
                strength: "Strength",
                weakness: "Weakness",
                perf: "Performance",
                correct: "Correct",
                incorrect: "Incorrect",
                skipped: "Skipped",
                points: "Points"
            };

        if (passed) {
            resultMsg.textContent = lbls.pass;
            resultMsg.style.color = "var(--success-color)";
        } else {
            resultMsg.textContent = lbls.fail;
            resultMsg.style.color = "var(--danger-color)";
        }

        // --- Domain Breakdown ---
        const domainBreakdownContainer = document.getElementById("domain-breakdown-container");
        if (domainBreakdownContainer) {
            domainBreakdownContainer.innerHTML = "";
            
            if (currentQuizQuestions.some(q => q.domain)) {
                const domainStats = {};
                currentQuizQuestions.forEach((q, idx) => {
                    const d = q.domain || "Other";
                    if (!domainStats[d]) domainStats[d] = { total: 0, correct: 0 };
                    domainStats[d].total++;
                    if (userAnswers[idx] && userAnswers[idx].isCorrect) domainStats[d].correct++;
                });

                const domainTitle = document.createElement("h3");
                domainTitle.textContent = lbls.domain_title;
                domainTitle.style.marginBottom = "1rem";
                domainBreakdownContainer.appendChild(domainTitle);

                const domainList = document.createElement("div");
                domainList.style.display = "flex";
                domainList.style.flexDirection = "column";
                domainList.style.gap = "0.75rem";

                Object.entries(domainStats).forEach(([domain, stats]) => {
                    const pct = Math.round((stats.correct / stats.total) * 100);
                    const isStrength = pct >= 70;
                    

                    const item = document.createElement("div");
                    item.className = isStrength ? "result-bar strength" : "result-bar weakness";
                    
                    item.innerHTML = `
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.25rem;">
                            <strong style="font-size: 0.95rem;">${domain}</strong>
                            <span class="badge ${isStrength ? 'bg-success' : 'bg-danger'}">
                                ${isStrength ? lbls.strength : lbls.weakness}
                            </span>
                        </div>
                        <div class="progress-track">
                            <div class="progress-fill ${isStrength ? 'fill-success' : 'fill-danger'}" style="width: ${pct}%;"></div>
                        </div>
                        <div style="text-align: right; font-weight: bold; font-size: 0.85rem; margin-top: 4px;">${pct}%</div>
                    `;

                    domainList.appendChild(item);
                });
                domainBreakdownContainer.appendChild(domainList);
                domainBreakdownContainer.classList.remove("hidden");
            } else {
                domainBreakdownContainer.classList.add("hidden");
            }
        }

        // Diagnostic Mode Gap Analysis
        if (window.isDiagnosticMode && window.DiagnosticMode) {
            let gapBox = document.getElementById("diagnostic-gap-analysis-container");
            if (!gapBox) {
                gapBox = document.createElement("div");
                gapBox.id = "diagnostic-gap-analysis-container";
                if (domainBreakdownContainer) {
                    domainBreakdownContainer.insertAdjacentElement('afterend', gapBox);
                } else if (resultsScreen) {
                    resultsScreen.appendChild(gapBox);
                }
            }
            window.DiagnosticMode.renderGapAnalysis(gapBox, userAnswers, currentQuizQuestions, window.currentCourseId);
            window.isDiagnosticMode = false;
        }

        if (window.DailyQuickDrill) {
            window.DailyQuickDrill.markCompletedToday();
        }

        // --- Generate Review (Refactored) ---
        renderReview(currentQuizQuestions, finalPct, passed);

    } catch (e) {
        console.error("Error in finishQuiz:", e);
    }
}

function renderReview(questions, finalPct, passed) {
    const reviewContainer = document.getElementById("review-container");
    if (!reviewContainer) return;

    // Localization Labels (Re-derived for context)
      const lang = getActiveLanguage();
    const lbls = lang === "es"
        ? {
            review_title: "Revisión Detallada de Preguntas",
            q_num: "Pregunta",
            your_ans: "Tu Respuesta:",
            corr_ans: "Respuesta Correcta:",
            not_ans: "No respondida",
            exp: "Explicación:",
            correct: "Correcta",
            incorrect: "Incorrecta",
            skipped: "Omitida"
        }
        : {
            review_title: "Detailed Question Review",
            q_num: "Question",
            your_ans: "Your Answer:",
            corr_ans: "Correct Answer:",
            not_ans: "Not answered",
            exp: "Explanation:",
            correct: "Correct",
            incorrect: "Incorrect",
            skipped: "Skipped"
        };

    reviewContainer.innerHTML = "";
    const title = document.createElement("h3");
    title.textContent = lbls.review_title;
    title.style.margin = "2rem 0 1rem 0";
    title.style.textAlign = "center";
    reviewContainer.appendChild(title);

    questions.forEach((q, index) => {
        // We use q.id to lookup in userAnswers if userAnswers is a MAP by ID? 
        // In finishQuiz, 'userAnswers' is an object keyed by INDEX (0..N) or ID?
        // Let's check userAnswers definition. Global userAnswers normally keyed by question ID? 
        // In startQuiz: userAnswers = {};
        // In selectOption: userAnswers[question.id] = ...
        // So global userAnswers is by ID.
        // But 'loadHistoryReview' sets userAnswers to the saved map (which is by ID).
        // So we should lookup by q.id, NOT index.
        
        // Try lookup by ID first (robustness), then by Index (current implementation)
        const ansObj = userAnswers[q.id] || userAnswers[index];
        
        const div = document.createElement("div");
        div.className = "review-item";
        
        let statusLabel = lbls.skipped;
        let statusClass = "text-secondary";
        let borderColor = "#ccc";

        if (ansObj) {
            if (ansObj.isCorrect) {
                statusLabel = lbls.correct;
                statusClass = "text-success";
                borderColor = "var(--success-color)";
            } else {
                statusLabel = lbls.incorrect;
                statusClass = "text-danger";
                borderColor = "var(--danger-color)";
            }
        }
        div.style.borderLeft = `4px solid ${borderColor}`;

        const getTextDetails = (ids) => {
            return q.options
                .filter((o) => ids.includes(o.id))
                .map((o) => {
                    if (o.blocks) {
                        const txtBlock = o.blocks.find(b => b.type === 'text');
                        return txtBlock ? txtBlock.content : '[Code/Table Option]';
                    }
                    return o.text;
                })
                .join(", ");
        };

        const userText = ansObj ? getTextDetails(ansObj.selected) : lbls.not_ans;
        const correctText = getTextDetails(q.correctIds);
        
        let displayPrompt = q.prompt;
        if (!displayPrompt && q.promptBlocks) {
            const firstTxt = q.promptBlocks.find(b => b.type === 'text');
            displayPrompt = firstTxt ? firstTxt.content : "[Visual Question]";
        }

        div.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 0.5rem;">
                <div class="review-q-num">${lbls.q_num} ${index + 1}</div>
                <strong class="${statusClass}">${statusLabel}</strong>
            </div>
            <div class="review-prompt" style="margin-bottom: 0.75rem; font-weight: 500;">${displayPrompt}</div>
            <div style="margin-bottom: 0.3rem; font-size: 0.9rem;">
                <span style="color: var(--secondary-color);">${lbls.your_ans}</span> 
                <span style="font-weight: ${ansObj && !ansObj.isCorrect ? 'bold' : 'normal'}; color: ${ansObj && !ansObj.isCorrect ? 'var(--danger-color)' : 'inherit'};">
                    ${userText}
                </span>
            </div>
            <div style="margin-bottom: 0.75rem; font-size: 0.9rem;">
                <span style="color: var(--secondary-color);">${lbls.corr_ans}</span> 
                <span style="font-weight: bold; color: var(--success-color);">${correctText}</span>
            </div>
            <div class="review-feedback" style="background: rgba(0,0,0,0.03); padding: 0.75rem; border-radius: 4px; font-size: 0.9rem;">
                <strong>${lbls.exp}</strong> ${q.explanation}
            </div>
        `;
        reviewContainer.appendChild(div);
    });
    reviewContainer.classList.remove("hidden");

    // F12: Render time statistics
    if (typeof renderTimeStats === 'function') {
        renderTimeStats(reviewContainer, currentQuizQuestions);
    }

    // F14: Render post-exam summary
    if (typeof renderPostExamSummary === 'function') {
        renderPostExamSummary(reviewContainer, currentQuizQuestions, userAnswers, finalPct, passed);
    }
}

  function navigate(dir) {
    const newIndex = currentQuestionIndex + dir;
    if (newIndex >= 0 && newIndex < currentQuizQuestions.length)
      loadQuestion(newIndex);
  }

  function toggleTheme() {
    const doc = document.documentElement;
    let newTheme = "light";
    if (doc.getAttribute("data-theme") === "dark") {
      doc.removeAttribute("data-theme");
      localStorage.setItem("theme", "light");
      // themeToggle.textContent = "Dark Mode"; // REMOVED to protect SVG
    } else {
      doc.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      // themeToggle.textContent = "Light Mode"; // REMOVED to protect SVG
      newTheme = "dark";
    }

    // Attempt to update button title if it exists, without breaking HTML
    const btn = document.getElementById("theme-toggle");
    if (btn) {
        btn.title = newTheme === "dark" ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro";
    }

    // Sync with iframe if active
    const frame = document.getElementById("studyFrame");
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage({ type: "theme", theme: newTheme }, "*");
    }
  }

  // DnD Helpers
  let draggedItem = null;
  function handleDragStart(e) {
    draggedItem = this;
    e.dataTransfer.effectAllowed = "move";
  }
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }
  function handleDrop(e) {
    e.stopPropagation();
    if (draggedItem !== this) {
      const allItems = Array.from(
        optionsList.querySelectorAll(".ordering-item")
      );
      const dragIdx = allItems.indexOf(draggedItem);
      const dropIdx = allItems.indexOf(this);
      if (dragIdx < dropIdx)
        this.parentNode.insertBefore(draggedItem, this.nextSibling);
      else this.parentNode.insertBefore(draggedItem, this);
      
      // Trigger Save
      selectOption(this, 'ordering');
    }
    return false;
  }

  // --- Study Mode Logic ---
  window.openStudyMode = function (courseId) {
    // ===================================================================
    // Dojo Data Study Mode — Unified Inline Renderer
    // Supports: UNIR, UNAH, and Databricks courses
    // ===================================================================
    if (courseId === "unir-viz-interactiva" || courseId === "unir-herramientas-viz" || courseId === "unah-tesis" || courseId === "databricks-da" || courseId === "databricks-fundamentals" || courseId === "dp-600" || courseId === "databricks-genai-engineer" || courseId === "azure-ai-103") {
      const startScreen = document.getElementById("start-screen");
      const studyScreen = document.getElementById("study-screen");
      startScreen.classList.add("hidden");
      studyScreen.classList.remove("hidden");
      studyScreen.style.overflow = "hidden";

      const data = window.studyData && window.studyData[courseId];
      if (!data) return;

      const studyI18n = window.AppI18n;
      const localizedMarkup = (english, spanish, className = '') => studyI18n
        ? studyI18n.localizedMarkup(english, spanish, className)
        : spanish;
      const bilingualParts = (value, order = 'en-es') => studyI18n
        ? studyI18n.splitBilingual(value, order)
        : { en: String(value ?? ''), es: String(value ?? '') };
      const bilingualMarkup = (value, order = 'en-es', className = '') => {
        const pair = bilingualParts(value, order);
        return localizedMarkup(pair.en, pair.es, className);
      };

      // XP / Mastery state from localStorage — each course has its own key
      const storageKey = courseId === 'unir-herramientas-viz' ? 'unir_herr_mastery' : (courseId === 'unah-tesis' ? 'unah_tesis_mastery' : (courseId === 'databricks-da' ? 'databricks_da_mastery' : (courseId === 'databricks-fundamentals' ? 'databricks_fund_mastery' : (courseId === 'dp-600' ? 'dp600_mastery' : (courseId === 'databricks-genai-engineer' ? 'databricks_genai_mastery' : (courseId === 'azure-ai-103' ? 'azure_ai103_mastery' : 'unir_viz_mastery'))))));
      let mastery = JSON.parse(localStorage.getItem(storageKey) || '{}');
      if (!mastery.xp) mastery = { xp: 0, sectionsViewed: [], flashcardsViewed: 0, personajesViewed: [], conceptosViewed: [], comandosViewed: [], achievements: [] };
      if (!mastery.personajesViewed) mastery.personajesViewed = []; // Migrate existing data
      if (!mastery.conceptosViewed) mastery.conceptosViewed = []; // Migrate for Databricks conceptos
      if (!mastery.comandosViewed) mastery.comandosViewed = []; // Migrate for SQL commands

      function saveMastery() { localStorage.setItem(storageKey, JSON.stringify(mastery)); }

      function addXP(amount) {
        mastery.xp += amount;
        saveMastery();
        updateMasteryUI();
        if (typeof updateGamification === 'function') updateGamification({ total: 0, score: 0, passed: false, mode: 'StudyTracking' });
        if (typeof window.updateGreeting === 'function') window.updateGreeting();
      }

      // Sync course XP events to global gamification stats
      function syncToGlobal(eventType, extra) {
        try {
          const stats = typeof getGamificationStats === 'function' ? getGamificationStats() : JSON.parse(localStorage.getItem('userStats') || '{}');
          if (eventType === 'flashcard') {
            stats.flashcardsViewed = (stats.flashcardsViewed || 0) + 1;
          } else if (eventType === 'personaje') {
            stats.personajesViewed = (stats.personajesViewed || 0) + 1;
          } else if (eventType === 'concepto') {
            stats.conceptosViewed = (stats.conceptosViewed || 0) + 1;
          } else if (eventType === 'comando') {
            stats.comandosViewed = (stats.comandosViewed || 0) + 1;
          }
          if (typeof saveGamificationStats === 'function') saveGamificationStats(stats);
          else localStorage.setItem('userStats', JSON.stringify(stats));
          if (typeof updateGamification === 'function') updateGamification({ total: 0, score: 0, passed: false, mode: 'StudyTracking' });
          if (window.updateGreeting) window.updateGreeting();
        } catch (e) { console.warn('syncToGlobal error', e); }
      }

      // Codex (GPT-5) & Antigravity | 2026-08-30 | Resuelve recursos complementarios por curso sin mezclar bancos de certificaciones distintas.
      const isAzureAi103 = courseId === 'azure-ai-103';
      const isDatabricksGenAI = courseId === 'databricks-genai-engineer';
      const isDP600 = courseId === 'dp-600';
      const isDatabricksDA = courseId === 'databricks-da' || courseId === 'databricks-fundamentals' || courseId === 'databricks-aibi' || courseId === 'databricks-sql-analytics';
      const isGenAICourse = isDatabricksGenAI || isAzureAi103;
      const isDatabricksCourse = isDatabricksDA || isDatabricksGenAI || isDP600;
      const hasPersonajes = courseId === 'unir-viz-interactiva' && window.personajesUnirViz;
      const conceptos = isAzureAi103
        ? (window.conceptosAzureAi103 || [])
        : (isDatabricksGenAI
          ? (window.conceptosDatabricksGenAI || [])
          : (isDP600
            ? (window.conceptosDP600 || window.conceptosDatabricks || [])
            : (isDatabricksCourse ? (window.conceptosDatabricks || []) : [])));
      const genAIPatterns = isAzureAi103
        ? (window.azureAi103Patterns || [])
        : (isDatabricksGenAI
          ? (window.databricksGenAIPatterns || [])
          : (isDP600
            ? (window.dp600Patterns || [])
            : (window.databricksDAPatterns || [])));
      const comandosSql = isAzureAi103
        ? (window.comandosAzureAi103 || [])
        : (isDatabricksGenAI
          ? (window.comandosSqlDatabricksGenAI || [])
          : (isDP600
            ? (window.comandosFabricDP600 || window.comandosSqlDatabricks || [])
            : (!isGenAICourse && isDatabricksCourse ? (window.comandosSqlDatabricks || []) : [])));
      const hasConceptos = conceptos.length > 0;
      const hasGenAIPatterns = genAIPatterns.length > 0;
      const hasComandosSQL = comandosSql.length > 0;

      // Achievements config — dynamic based on course type
      const baseAchievements = [
        { id: 'first_section', name: 'Primer Paso', desc: 'Lee tu primera sección', xpReq: 0, icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z', condition: () => mastery.sectionsViewed.length >= 1 },
        { id: 'five_sections', name: 'Explorador', desc: 'Lee 5 secciones', xpReq: 0, icon: 'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z', condition: () => mastery.sectionsViewed.length >= 5 },
        { id: 'all_sections', name: 'Maestro del Dojo', desc: 'Lee todas las secciones', xpReq: 0, icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', condition: () => { let total = 0; data.forEach(s => total += s.items.length); return mastery.sectionsViewed.length >= total; } },
        { id: 'flash_10', name: 'Memoria Activa', desc: 'Revisa 10 flashcards', xpReq: 0, icon: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z', condition: () => mastery.flashcardsViewed >= 10 },
        { id: 'flash_50', name: 'Memoria Fotográfica', desc: 'Revisa 50 flashcards', xpReq: 0, icon: 'M12 2a9 9 0 0 0-9 9c0 3.07 1.98 5.73 4.73 6.73A1 1 0 0 1 8.5 19H12v3h1v-3h3.5a1 1 0 0 1 .77-1.27A7 7 0 0 0 21 11a9 9 0 0 0-9-9z', condition: () => mastery.flashcardsViewed >= 50 },
        { id: 'xp_100', name: 'Centurión', desc: 'Acumula 100 XP', xpReq: 100, icon: 'M7 2v11h3v9l7-12h-4l4-8z', condition: () => mastery.xp >= 100 },
        { id: 'xp_500', name: 'Sensei del Dato', desc: 'Acumula 500 XP', xpReq: 500, icon: 'M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z', condition: () => mastery.xp >= 500 },
        { id: 'xp_1000', name: 'Gran Sensei', desc: 'Acumula 1000 XP', xpReq: 1000, icon: 'M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z', condition: () => mastery.xp >= 1000 }
      ];

      // Domain Mastery achievements (Databricks DA course only)
      const domainMasteryAchievements = (courseId === 'databricks-da' || courseId === 'databricks-genai-engineer' || courseId === 'azure-ai-103') ? [
        { id: 'domain_first', name: 'Primer Dominio', desc: 'Lee tu primera sección de dominio', xpReq: 0, icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', condition: () => mastery.sectionsViewed.length >= 1 },
        { id: 'domain_half', name: 'Medio Camino', desc: 'Completa la mitad de las secciones', xpReq: 0, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', condition: () => { const half = Math.ceil(totalSections / 2); return mastery.sectionsViewed.length >= half; } },
        { id: 'domain_xp_300', name: 'Dominator 300', desc: 'Acumula 300 XP de estudio de dominios', xpReq: 300, icon: 'M7 2v11h3v9l7-12h-4l4-8z', condition: () => mastery.xp >= 300 },
        { id: 'domain_complete', name: 'Certificación Lista', desc: 'Completa TODAS las secciones', xpReq: 0, icon: 'M12 2l2.4 7.4h7.6l-6 4.6 2.3 7L12 16.4 5.7 21l2.3-7-6-4.6h7.6z', condition: () => mastery.sectionsViewed.length >= totalSections }
      ] : [];

      // Personajes achievements (UNIR only)
      const personajesAchievements = hasPersonajes ? [
        { id: 'first_persona', name: 'Conocedor', desc: 'Lee tu primer personaje', xpReq: 0, icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', condition: () => mastery.personajesViewed.length >= 1 },
        { id: 'five_personas', name: 'Curioso', desc: 'Lee 5 personajes', xpReq: 0, icon: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5z', condition: () => mastery.personajesViewed.length >= 5 },
        { id: 'ten_personas', name: 'Historiador', desc: 'Lee 10 personajes', xpReq: 0, icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z', condition: () => mastery.personajesViewed.length >= 10 },
        { id: 'twenty_personas', name: 'Erudito Histórico', desc: 'Lee 20 personajes', xpReq: 0, icon: 'M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z', condition: () => mastery.personajesViewed.length >= 20 },
        { id: 'all_personas', name: 'Cronista Visual', desc: 'Lee todos los personajes', xpReq: 0, icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z', condition: () => { const total = window.personajesUnirViz ? window.personajesUnirViz.reduce((a,c) => a + c.personas.length, 0) : 30; return mastery.personajesViewed.length >= total; } },
        { id: 'davinci_secret', name: 'Mente de Da Vinci', desc: '???', xpReq: 0, icon: 'M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z', condition: () => { const total = window.personajesUnirViz ? window.personajesUnirViz.reduce((a,c) => a + c.personas.length, 0) : 30; return mastery.personajesViewed.length >= total && mastery.flashcardsViewed >= 50; } }
      ] : [];

      // Conceptos achievements (Databricks only)
      const conceptosAchievements = hasConceptos ? [
        { id: 'first_concepto', name: 'Aprendiz Lakehouse', desc: 'Lee tu primer concepto', xpReq: 0, icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', condition: () => mastery.conceptosViewed.length >= 1 },
        { id: 'five_conceptos', name: 'Explorador Delta', desc: 'Lee 5 conceptos', xpReq: 0, icon: 'M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z', condition: () => mastery.conceptosViewed.length >= 5 },
        { id: 'ten_conceptos', name: 'Architect Certified', desc: 'Lee 10 conceptos', xpReq: 0, icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', condition: () => mastery.conceptosViewed.length >= 10 },
        { id: 'all_conceptos', name: isGenAICourse ? 'GenAI Vocabulary Master' : 'Unity Catalog Master', desc: 'Lee todos los conceptos', xpReq: 0, icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z', condition: () => mastery.conceptosViewed.length >= conceptos.reduce((a,c) => a + c.conceptos.length, 0) },
        { id: 'lakehouse_secret', name: isGenAICourse ? 'Mente GenAI' : 'Mente de Lakehouse', desc: '???', xpReq: 0, icon: 'M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z', condition: () => mastery.conceptosViewed.length >= conceptos.reduce((a,c) => a + c.conceptos.length, 0) && mastery.flashcardsViewed >= 30 }
      ] : [];

      // Comandos SQL achievements (Databricks only)
      const comandosAchievements = hasComandosSQL ? [
        { id: 'first_comando', name: 'SQL Rookie', desc: 'Lee tu primer comando SQL', xpReq: 0, icon: 'M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z', condition: () => mastery.comandosViewed.length >= 1 },
        { id: 'five_comandos', name: 'Query Builder', desc: 'Lee 5 comandos SQL', xpReq: 0, icon: 'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', condition: () => mastery.comandosViewed.length >= 5 },
        { id: 'ten_comandos', name: 'SQL Sensei', desc: 'Lee 10 comandos SQL', xpReq: 0, icon: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z', condition: () => mastery.comandosViewed.length >= 10 },
        { id: 'all_comandos', name: 'Query Master', desc: 'Lee todos los comandos SQL', xpReq: 0, icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z', condition: () => { const total = window.comandosSqlDatabricks ? window.comandosSqlDatabricks.reduce((a,c) => a + c.comandos.length, 0) : 12; return mastery.comandosViewed.length >= total; } }
      ] : [];

      const achievementsDef = [...baseAchievements, ...domainMasteryAchievements, ...personajesAchievements, ...conceptosAchievements, ...comandosAchievements];

      function checkAchievements() {
        let newUnlocks = [];
        achievementsDef.forEach(a => {
          if (!mastery.achievements.includes(a.id) && a.condition()) {
            mastery.achievements.push(a.id);
            newUnlocks.push(a);
          }
        });
        if (newUnlocks.length > 0) {
          saveMastery();
          newUnlocks.forEach(a => showAchievementToast(a));
        }
      }

      function showAchievementToast(a) {
        const toast = document.createElement('div');
        toast.style.cssText = 'position:fixed;top:20px;right:20px;z-index:10000;background:#3157d5;color:#fff;padding:16px 24px;border-radius:16px;box-shadow:0 8px 32px rgba(49,87,213,0.3);display:flex;align-items:center;gap:12px;animation:slideInRight 0.5s ease-out;font-family:Inter,sans-serif;';
        toast.innerHTML = `<svg viewBox="0 0 24 24" width="28" height="28" fill="#ffffff"><path d="${a.icon}"/></svg><div><div style="font-weight:700;font-size:1rem;display:flex;align-items:center;gap:6px;"><svg viewBox="0 0 24 24" width="18" height="18" fill="#ffffff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Logro Desbloqueado</div><div style="font-size:0.85rem;opacity:0.9;">${a.name}: ${a.desc}</div></div>`;
        document.body.appendChild(toast);
        setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; setTimeout(() => toast.remove(), 500); }, 3500);
      }

      // Calculate total sections
      let totalSections = 0;
      data.forEach(s => totalSections += s.items.length);

      function updateMasteryUI() {
        const bar = document.getElementById('unir-mastery-bar');
        const text = document.getElementById('unir-mastery-text');
        const xpEl = document.getElementById('unir-xp-display');
        if (!bar) return;
        const pct = Math.min(100, (mastery.sectionsViewed.length / totalSections) * 100);
        bar.style.width = pct + '%';
        text.textContent = `${mastery.sectionsViewed.length}/${totalSections} (${Math.round(pct)}%)`;
        if (xpEl) xpEl.textContent = mastery.xp + ' XP';
        // Update achievement count
        const achEl = document.getElementById('unir-ach-count');
        if (achEl) achEl.textContent = `${mastery.achievements.length}/${achievementsDef.length}`;
        checkAchievements();
      }

      // Flashcard data (from course content) — explicit per-course map, empty
      // array (not another course's cards) for any course without its own bank.
      const STUDY_FLASHCARD_SOURCES = {
        'unir-herramientas-viz': () => window.unirHerrFlashcards,
        'unah-tesis': () => window.unahTesisFlashcards,
        'unir-viz-interactiva': () => window.unirVizFlashcards,
        'databricks-da': () => window.databricksDAFlashcards,
        'databricks-fundamentals': () => window.databricksDAFlashcards,
        'databricks-aibi': () => window.databricksDAFlashcards,
        'databricks-sql-analytics': () => window.databricksDAFlashcards,
        'dp-600': () => window.dp600Flashcards || window.databricksDAFlashcards,
        'databricks-genai-engineer': () => window.databricksGenAIFlashcards,
        'azure-ai-103': () => (window.studyFlashcards && window.studyFlashcards['azure-ai-103']) || [],
      };
      const flashcards = (STUDY_FLASHCARD_SOURCES[courseId] && STUDY_FLASHCARD_SOURCES[courseId]()) || [];
      const hasFlashcards = flashcards.length > 0;

      // SVG icon paths (no emojis anywhere)
      const SVG = {
        star: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
        shield: 'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
        eye: 'M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
        flip: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
        trophy: 'M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z',
        check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
        shuffle: 'M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z',
        chevronDown: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z',
        checkCircle: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
        thumbUp: 'M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2z',
        thumbDown: 'M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z',
        bolt: 'M7 2v11h3v9l7-12h-4l4-8z',
        back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
        menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
      };
      const svgIcon = (path, size=16, fill='currentColor', extra='') => `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="${fill}" ${extra}><path d="${path}"/></svg>`;

      // Codex (GPT-5) | 2026-08-23 21:32 CST | Unifica el Centro de Estudio con el acento principal y estados semánticos.
      // --- Build the Dojo-styled study UI (OPEN LAYOUT — no boxes) ---
      studyScreen.innerHTML = `
        <style>
          @keyframes slideInRight { from { transform: translateX(80px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
          @keyframes fadeUp { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

          .unir-root {
            --study-accent: var(--primary-color, #3157d5);
            --study-accent-soft: var(--primary-light, rgba(49,87,213,0.1));
            --study-success: var(--success-color, #16794a);
            --study-success-soft: var(--success-light, rgba(22,121,74,0.1));
            --study-warning: var(--warning-color, #9a6700);
            --study-danger: var(--danger-color, #b42318);
            height: 100%; overflow-y: auto; overflow-x: hidden; padding: 0; font-family: 'Inter', sans-serif;
          }
          body.zen-mode .unir-root { padding-top: 56px; }
          .unir-root button:focus-visible, .unir-root summary:focus-visible { outline: 3px solid var(--study-accent-soft); outline-offset: 2px; }
          .unir-root button svg, .unir-root summary svg, .unir-root .unir-section-header svg, .unir-root .unir-persona-cat-header svg { fill: currentColor !important; stroke: currentColor !important; }

          /* Floating mastery pill - Double Width & High Contrast */
          .unir-mastery-pill { max-width: 1680px; width: 95%; margin: 20px auto 0; display: flex; align-items: center; gap: 16px; padding: 12px 24px; border-radius: 40px; background: #111827; box-shadow: 0 4px 20px rgba(17,24,39,0.2); }
          .unir-mastery-pill .m-track { flex: 1; height: 8px; background: rgba(255,255,255,0.15); border-radius: 99px; overflow: hidden; }
          .unir-mastery-pill .m-fill { height: 100%; background: var(--study-accent); border-radius: 99px; transition: width 0.6s ease; }
          .unir-mastery-pill .m-label { color: #f3f4f6; font-size: 0.95rem; font-weight: 600; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
          .unir-study-back { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: #f3f4f6; border-radius: 20px; padding: 7px 18px; cursor: pointer; font-size: 0.95rem; font-weight: 600; display: flex; align-items: center; gap: 6px; transition: background 0.2s; }
          .unir-study-back:hover { background: rgba(255,255,255,0.18); }

          /* Tab row — Double Width */
          .unir-tabs-row { max-width: 1680px; width: 95%; margin: 18px auto 0; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
          .unir-tab { min-height: 48px; padding: 10px 24px; cursor: pointer; font-family: inherit; font-weight: 600; font-size: 1.05rem; color: var(--text-muted, #64748b); border: 1.5px solid var(--border-color, #e5e7eb); border-radius: 28px; transition: all 0.2s; display: flex; align-items: center; gap: 8px; background: var(--bg-card, #fff); }
          .unir-tab:hover { color: var(--study-accent); border-color: var(--study-accent); background: var(--study-accent-soft); }
          .unir-tab.active { color: #fff; border-color: var(--study-accent); background: var(--study-accent); }
          .unir-tab-count { background: var(--study-accent-soft); color: currentColor; padding: 3px 10px; border-radius: 12px; font-size: 0.85rem; font-weight: 700; }
          .unir-tab.active .unir-tab-count { background: rgba(255,255,255,0.18); }

          /* Personajes / Terms panel styles - Enriched Typography */
          .unir-persona-category { margin-bottom: 14px; }
          .unir-persona-cat-header { width: 100%; display: flex; align-items: center; gap: 12px; padding: 14px 20px; background: #1f2937; border: 0; border-radius: 14px; color: #f3f4f6; font-family: inherit; font-weight: 700; font-size: 1.08rem; text-align: left; cursor: pointer; }
          .unir-persona-cat-header svg { flex-shrink: 0; color: #f3f4f6; }
          .unir-persona-cat-header:hover { background: #111827; }
          .unir-category-chevron { display: inline-flex; transition: transform 0.2s ease; transform: rotate(-90deg); }
          .unir-persona-cat-header[aria-expanded="true"] .unir-category-chevron { transform: rotate(0deg); }
          .unir-category-body { margin-top: 10px; }
          .unir-category-body[hidden] { display: none; }
          .unir-persona-card { background: var(--bg-card, #fff); border: 1px solid var(--border-color, #e5e7eb); border-radius: 12px; overflow: hidden; margin-bottom: 8px; box-shadow: 0 1px 4px rgba(0,0,0,0.04); transition: all 0.2s; }
          .unir-persona-header { padding: 14px 20px; cursor: pointer; display: flex; align-items: center; gap: 12px; transition: all 0.15s; user-select: none; }
          .unir-persona-header:hover { background: var(--study-accent-soft); }
          .unir-persona-header .p-chevron { transition: transform 0.25s ease; flex-shrink: 0; }
          .unir-persona-header.open .p-chevron { transform: rotate(180deg); }
          .unir-persona-header .p-name { font-weight: 700; font-size: 1.18rem; color: var(--text-color, #1e293b); flex: 1; }
          .unir-persona-header .p-epoch { font-size: 0.85rem; color: var(--text-muted, #64748b); padding: 3px 12px; border-radius: 12px; background: var(--bg-surface, #f1f5f9); white-space: nowrap; }
          .unir-persona-header .p-badge-alta { background: var(--study-accent-soft); color: var(--study-accent); font-size: 0.82rem; font-weight: 700; padding: 3px 10px; border-radius: 8px; }
          .unir-persona-header .p-badge-media, .unir-persona-header .p-badge-baja { background: var(--bg-surface, #f4f6f8); color: var(--text-muted, #667085); font-size: 0.82rem; font-weight: 700; padding: 3px 10px; border-radius: 8px; }
          .unir-persona-body { display: none; border-top: 1px solid var(--border-color, #e5e7eb); padding: 24px 40px 28px; animation: fadeUp 0.25s ease; }
          .unir-persona-body.open { display: block; }
          .unir-persona-body .p-contribucion { font-size: 1.15rem; line-height: 1.8; color: var(--text-color, #333); margin-bottom: 16px; padding-right: 8px; }
          .unir-persona-body .p-contribucion strong { color: var(--study-accent); }
          .unir-persona-body .p-dato-examen { background: var(--bg-surface, #f1f5f9); padding: 18px 24px; border-radius: 10px; font-size: 1.08rem; line-height: 1.75; color: var(--text-color); display: flex; align-items: flex-start; gap: 12px; position: relative; border-left: 4px solid var(--border-color, #e5e7eb); }
          .unir-persona-body .p-dato-examen::before { display: none; }
          .unir-persona-card.is-read { background: rgba(22,121,74,0.05); }
          .unir-persona-card.is-read .p-name { color: var(--study-success); }
          .unir-persona-body .p-dato-examen svg { flex-shrink: 0; margin-top: 2px; }
          .unir-persona-body .p-tema { font-size: 0.85rem; color: var(--text-muted, #64748b); margin-top: 14px; font-weight: 600; }

          /* Study panel — Double Width & Scaled Typography */
          .unir-panel { max-width: 1680px; width: 95%; margin: 0 auto; padding: 20px 24px 60px; animation: fadeUp 0.3s ease; }
          .unir-panel[hidden] { display: none; }

          /* Topic chips — horizontal scrollable nav */
          .unir-topic-nav { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 20px; justify-content: center; }
          .unir-topic-chip { padding: 8px 18px; border-radius: 20px; font-size: 0.95rem; font-weight: 600; cursor: pointer; border: 1.5px solid var(--border-color, #e5e7eb); color: var(--text-muted, #64748b); background: var(--bg-card, #fff); transition: all 0.2s; white-space: nowrap; display: flex; align-items: center; gap: 6px; }
          .unir-topic-chip:hover { border-color: var(--study-accent); color: var(--study-accent); }
          .unir-topic-chip.active { background: var(--study-accent); color: #fff; border-color: var(--study-accent); }
          .unir-topic-chip .chip-check { width: 16px; height: 16px; border-radius: 50%; border: 1.5px solid currentColor; display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0; opacity: 0.5; }
          .unir-topic-chip .chip-check.done { background: var(--study-success); border-color: var(--study-success); opacity: 1; }

          /* Section items list — dropdown cards */
          .unir-section-card { background: var(--bg-card, #fff); border: 1.5px solid var(--border-color, #e5e7eb); border-radius: 14px; overflow: hidden; margin-bottom: 14px; box-shadow: 0 2px 8px rgba(0,0,0,0.04); transition: all 0.2s; }
          .unir-section-card.completed { border-color: var(--study-success); }
          .unir-section-header { padding: 0 12px 0 0; font-weight: 700; font-size: 1.1rem; text-transform: uppercase; letter-spacing: 0.5px; color: var(--primary-color, #3157d5); background: var(--bg-card, #fff); display: flex; align-items: center; gap: 10px; transition: all 0.2s; user-select: none; }
          .unir-section-header:hover { background: var(--study-accent-soft); }
          .unir-section-toggle { flex: 1; min-width: 0; min-height: 52px; padding: 12px 8px 12px 20px; border: 0; color: inherit; background: transparent; cursor: pointer; display: flex; align-items: center; gap: 10px; text-align: left; font: inherit; text-transform: inherit; letter-spacing: inherit; }
          .unir-section-header .hdr-chevron { transition: transform 0.25s ease; flex-shrink: 0; }
          .unir-section-header.open .hdr-chevron { transform: rotate(180deg); }
          .unir-section-header .hdr-title { flex: 1; }
          .unir-section-header .hdr-progress { font-size: 0.85rem; font-weight: 700; padding: 4px 12px; border-radius: 12px; background: var(--study-accent-soft); color: var(--study-accent); white-space: nowrap; }
          .unir-section-header .hdr-progress.all-done { background: var(--study-success-soft); color: var(--study-success); }
          .unir-section-header .hdr-complete-btn { min-height: 40px; font-size: 0.85rem; font-weight: 700; padding: 4px 14px; border-radius: 12px; border: 1.5px solid var(--study-accent); color: var(--study-accent); background: var(--study-accent-soft); cursor: pointer; white-space: nowrap; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
          .unir-section-header .hdr-complete-btn:hover { background: var(--study-accent); color: #fff; border-color: var(--study-accent); }
          .unir-section-header .hdr-complete-btn.is-done { background: var(--study-success); color: #fff; border-color: var(--study-success); pointer-events: none; }
          .unir-section-items { list-style: none; padding: 0; margin: 0; border-top: 1px solid var(--border-color, #e5e7eb); }
          .unir-section-items[hidden] { display: none; }
          .unir-section-body[hidden] { display: none; }
          .unir-section-items > li.unir-topic-item { padding: 0; font-size: 1.08rem; color: var(--text-color, #333); transition: all 0.15s; border-bottom: 1px solid var(--border-color, #e5e7eb08); }
          .unir-section-items > li.unir-topic-item:last-of-type { border-bottom: none; }
          .unir-item-button { width: 100%; min-height: 50px; padding: 12px 22px; border: 0; background: transparent; color: inherit; cursor: pointer; font: inherit; text-align: left; display: flex; align-items: center; gap: 12px; }
          .unir-section-items > li.unir-topic-item:hover { background: var(--study-accent-soft); color: var(--study-accent); }
          .unir-section-items > li.unir-topic-item.active { background: var(--primary-light, rgba(49,87,213,0.1)); color: var(--primary-color, #3157d5); font-weight: 700; }
          .unir-section-items .li-check { width: 20px; height: 20px; border-radius: 50%; border: 2px solid #d1d5db; flex-shrink: 0; display: flex; align-items: center; justify-content: center; }
          .unir-section-items .li-check.done { background: var(--study-success); border-color: var(--study-success); }

          /* Content display — inserted after active item inside ul */
          .unir-item-content { display: block; list-style: none; border-top: 1px solid var(--border-color, #e5e7eb); padding: 28px 36px 36px; animation: fadeUp 0.25s ease; color: var(--text-color, #e2e8f0); background: var(--bg-card, #fff); border-radius: 0 0 10px 10px; margin: 0; font-size: 1.15rem; line-height: 1.8; }
          .unir-item-content:empty { display: none; padding: 0; border: none; }
          .unir-item-content h2 { margin: 0 0 16px; color: var(--text-color, #1e293b); font-size: 1.7rem; font-weight: 800; }
          .unir-item-content div { color: var(--text-color); line-height: 1.8; }

          /* Flashcard mode — Double Width & Enriched Typography */
          .unir-fc-wrap { display: flex; flex-direction: column; align-items: center; padding: 24px 0 50px; width: 100%; max-width: 1680px; margin: 0 auto; }
          .unir-fc-card { width: 100%; max-width: 1480px; min-height: 480px; height: 520px; perspective: 1200px; cursor: pointer; }
          .unir-fc-inner { width: 100%; height: 100%; position: relative; transition: transform 0.6s cubic-bezier(.4,0,.2,1); transform-style: preserve-3d; border-radius: 24px; box-shadow: 0 8px 32px rgba(49,87,213,0.12); }
          .unir-fc-card.flipped .unir-fc-inner { transform: rotateY(180deg); }
          .unir-fc-face { position: absolute; inset: 0; backface-visibility: hidden; border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px 48px; overflow-y: auto; }
          .unir-fc-front { background: #1f2937; color: #fff; }
          .unir-fc-back { background: var(--bg-card, #fff); color: var(--text-color, #333); transform: rotateY(180deg); border: 1px solid var(--border-color, #e5e7eb); overflow-y: auto; }
          .unir-fc-nav { display: flex; align-items: center; gap: 16px; margin-top: 24px; }
          .unir-fc-btn { width: 50px; height: 50px; border-radius: 50%; border: 1.5px solid var(--border-color, #e5e7eb); background: var(--bg-card, #fff); color: var(--study-accent); font-size: 1.5rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
          .unir-fc-btn:hover, .unir-fc-btn.primary { background: var(--study-accent); color: #fff; border-color: var(--study-accent); }
          .unir-fc-count { font-weight: 700; font-size: 1.1rem; color: var(--text-muted, #64748b); min-width: 90px; text-align: center; }
          .unir-fc-actions { display: flex; gap: 12px; margin-top: 18px; }
          .unir-fc-diff-btn { padding: 8px 20px; border-radius: 24px; border: 1.5px solid; cursor: pointer; font-size: 0.95rem; font-weight: 700; transition: all 0.2s; display: flex; align-items: center; gap: 6px; }
          .unir-fc-diff-btn.easy { border-color: var(--study-success); color: var(--study-success); background: var(--study-success-soft); }
          .unir-fc-diff-btn.medium { border-color: var(--study-warning); color: var(--study-warning); background: var(--warning-light, rgba(154,103,0,0.1)); }
          .unir-fc-diff-btn.hard { border-color: var(--study-danger); color: var(--study-danger); background: var(--danger-light, rgba(180,35,24,0.1)); }
          .unir-fc-diff-btn:hover { transform: scale(1.05); }
          .fc-language-block { width: 100%; text-align: left; padding: 16px 0; border-bottom: 1px solid var(--border-color, rgba(255,255,255,0.2)); }
          .fc-language-block:last-child { border-bottom: 0; }
          .fc-language-label { display: inline-block; margin-bottom: 8px; color: #f3f4f6; font-size: 0.85rem; font-weight: 800; letter-spacing: 0.12em; }
          .unir-fc-back .fc-language-label { color: var(--primary-color, #3157d5); }
          .fc-language-title { display: block; margin-bottom: 8px; font-size: 1.25rem; font-weight: 800; }
          .fc-language-block > div { font-size: 1.22rem; line-height: 1.75; }
          .genai-pattern-card summary { min-height: 52px; padding: 14px 20px; cursor: pointer; display: flex; align-items: center; gap: 12px; color: var(--text-color, #1e293b); font-size: 1.2rem; font-weight: 700; list-style: none; }
          .genai-pattern-card summary::-webkit-details-marker { display: none; }
          .genai-pattern-card summary svg { flex-shrink: 0; transition: transform 0.2s ease; }
          .genai-pattern-card[open] summary svg { transform: rotate(180deg); }
          .genai-pattern-content { border-top: 1px solid var(--border-color, #e5e7eb); padding: 12px 24px 24px; font-size: 1.12rem; line-height: 1.8; }

          /* Achievements grid */
          .unir-ach-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 16px; }
          .unir-ach-card { padding: 20px; border-radius: 14px; background: var(--bg-card, #fff); border: 1.5px solid var(--border-color, #e5e7eb); text-align: center; transition: all 0.2s; font-size: 1.05rem; }
          .unir-ach-card.unlocked { border-color: var(--study-accent); box-shadow: 0 4px 16px rgba(49,87,213,0.12); }
          .unir-ach-card.locked { opacity: 0.4; filter: grayscale(1); border-style: dashed; }

          /* ====== Language Section Divider ====== */
          .lang-section { padding: 20px 0; }
          .lang-section[data-lang="en"] { border-bottom: none; }
          .lang-section[data-lang="es"] { position: relative; padding-top: 32px; margin-top: 16px; }
          .lang-section[data-lang="es"]::before {
            content: '— ESPAÑOL —';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            text-align: center;
            font-size: 0.85rem;
            font-weight: 800;
            letter-spacing: 2px;
            color: var(--study-accent);
            background: var(--study-accent-soft);
            border-top: 2px solid rgba(49,87,213,0.22);
            padding: 8px 0 6px;
          }
          .lang-section[data-lang="en"]::before {
            content: 'ENGLISH';
            display: block;
            font-size: 0.8rem;
            font-weight: 800;
            letter-spacing: 2px;
            color: var(--study-accent);
            margin-bottom: 12px;
            padding: 5px 14px;
            background: var(--study-accent-soft);
            border-radius: 6px;
            width: fit-content;
          }

          /* ====== Content Boxes (Callouts) ====== */
          .content-box {
            border-radius: 12px;
            padding: 18px 24px;
            margin: 16px 0;
            font-size: 1.12rem;
            line-height: 1.75;
            border-left: 5px solid;
          }
          .content-box .box-title {
            display: block;
            font-weight: 800;
            margin-bottom: 8px;
            font-size: 1.2rem;
          }
          .box-red, .box-green, .box-blue, .box-yellow { background: var(--study-accent-soft); border-color: var(--study-accent); }
          .box-red .box-title, .box-green .box-title, .box-blue .box-title, .box-yellow .box-title { color: var(--study-accent); }

          /* Code blocks inside study content */
          .unir-item-content pre { background: #111827; color: #f3f4f6; padding: 18px 22px; border-radius: 10px; font-size: 1.05rem; overflow-x: auto; margin: 14px 0; border: 1px solid rgba(255,255,255,0.08); }
          .unir-item-content code { font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace; font-size: 1.02rem; }
          .unir-item-content pre code { color: #f3f4f6; }
          .unir-item-content :not(pre) > code { background: var(--study-accent-soft); color: var(--study-accent); padding: 3px 8px; border-radius: 5px; font-size: 0.95em; font-weight: 600; }
          .unir-item-content table { width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 1.08rem; }
          .unir-item-content table th, .unir-item-content table td { padding: 12px 16px; border: 1px solid var(--border-color, #e5e7eb); text-align: left; }
          .unir-item-content table th, .unir-item-content .table-header th { background: var(--study-accent-soft); font-weight: 800; color: var(--study-accent); }
          .unir-item-content table tr:nth-child(even) { background: rgba(0,0,0,0.02); }
          .unir-item-content h5 { color: var(--text-color, #1e293b); font-size: 1.35rem; font-weight: 700; margin: 24px 0 10px; padding-bottom: 6px; border-bottom: 1.5px solid rgba(49,87,213,0.14); }
          .unir-item-content ul { padding-left: 24px; margin: 12px 0; }
          .unir-item-content li { margin-bottom: 6px; }

          /* Codex (GPT-5) | 2026-08-23 21:49 CST | Conserva contraste en oscuro sin añadir otro acento. */
          [data-theme="dark"] .unir-section-header { color: #a7b0c0; }
          [data-theme="dark"] .unir-section-header .hdr-progress { color: #f3f4f6; background: rgba(49,87,213,0.28); }
          [data-theme="dark"] .unir-section-header .hdr-complete-btn { color: #f3f4f6; border-color: #3157d5; background: rgba(49,87,213,0.18); }
          [data-theme="dark"] .unir-topic-chip:hover, [data-theme="dark"] .unir-persona-body .p-contribucion strong { color: #f3f4f6; }
          [data-theme="dark"] #unir-persona-progress, [data-theme="dark"] #unir-concepto-progress, [data-theme="dark"] #unir-cmd-progress { color: #a7b0c0 !important; }
        </style>

        <div class="unir-root">
          <!-- Floating Mastery Pill -->
          <div class="unir-mastery-pill">
            <button id="unir-study-back" class="unir-study-back" type="button">${svgIcon(SVG.back, 14)} ${localizedMarkup('Back', 'Volver')}</button>
            <button id="study-focus-mode-btn" class="topic-bookmark-btn" type="button" onclick="window.toggleStudyFocusMode()" title="Modo Enfoque / Lectura Zen" style="border-radius:20px;padding:3px 10px;font-weight:600;">${svgIcon(SVG.eye, 13)} Enfoque</button>
            <div class="m-label">${svgIcon(SVG.star, 13)} <span id="unir-xp-display">${mastery.xp} XP</span></div>
            <div class="m-track"><div class="m-fill" id="unir-mastery-bar" style="width:0%"></div></div>
            <span class="m-label" id="unir-mastery-text">0/${totalSections}</span>
            <div class="m-label">${svgIcon(SVG.trophy, 13)} <span id="unir-ach-count">${mastery.achievements.length}/${achievementsDef.length}</span></div>
          </div>

          <!-- Tab Pills — centered row -->
          <div class="unir-tabs-row" role="tablist" aria-label="Opciones del módulo de estudio">
            <button type="button" class="unir-tab active" id="unir-tab-study" role="tab" aria-selected="true" aria-controls="unir-panel-study" onclick="window._unirSwitchTab('study')">
              ${svgIcon(SVG.eye, 15)} ${localizedMarkup('Study', 'Estudiar')}
            </button>
            ${hasPersonajes ? `<button type="button" class="unir-tab" id="unir-tab-personajes" role="tab" aria-selected="false" aria-controls="unir-panel-personajes" tabindex="-1" onclick="window._unirSwitchTab('personajes')">
              ${svgIcon('M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', 15)} ${localizedMarkup('People', 'Personajes')} <span class="unir-tab-count">${window.personajesUnirViz.reduce((a,c) => a + c.personas.length, 0)}</span>
            </button>` : ''}
            ${hasConceptos ? `<button type="button" class="unir-tab" id="unir-tab-conceptos" role="tab" aria-selected="false" aria-controls="unir-panel-conceptos" tabindex="-1" onclick="window._unirSwitchTab('conceptos')">
              ${svgIcon('M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', 15)} ${isGenAICourse ? localizedMarkup('Terms', 'Términos') : localizedMarkup('Key Concepts', 'Conceptos Clave')} <span class="unir-tab-count">${conceptos.reduce((a,c) => a + c.conceptos.length, 0)}</span>
            </button>` : ''}
            ${hasComandosSQL ? `<button type="button" class="unir-tab" id="unir-tab-comandos" role="tab" aria-selected="false" aria-controls="unir-panel-comandos" tabindex="-1" onclick="window._unirSwitchTab('comandos')">
              ${svgIcon('M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', 15)} ${isAzureAi103 ? localizedMarkup('SDK & Code', 'SDK & Código') : (isDatabricksGenAI ? localizedMarkup('AI Functions', 'Funciones AI') : localizedMarkup('SQL Commands', 'Comandos SQL'))} <span class="unir-tab-count">${comandosSql.reduce((a,c) => a + c.comandos.length, 0)}</span>
            </button>` : ''}
            ${hasGenAIPatterns ? `<button type="button" class="unir-tab" id="unir-tab-patterns" role="tab" aria-selected="false" aria-controls="unir-panel-patterns" tabindex="-1" onclick="window._unirSwitchTab('patterns')">
              ${svgIcon('M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V16h8v-1.26A7 7 0 0012 2z', 15)} ${localizedMarkup('Scenarios', 'Escenarios')} <span class="unir-tab-count">${genAIPatterns.reduce((a,c) => a + c.items.length, 0)}</span>
            </button>` : ''}
            ${hasFlashcards ? `<button type="button" class="unir-tab" id="unir-tab-flashcards" role="tab" aria-selected="false" aria-controls="unir-panel-flashcards" tabindex="-1" onclick="window._unirSwitchTab('flashcards')">
              ${svgIcon(SVG.flip, 15)} Flashcards <span class="unir-tab-count">${flashcards.length}</span>
            </button>` : ''}
            <button type="button" class="unir-tab" id="unir-tab-decisions" role="tab" aria-selected="false" aria-controls="unir-panel-decisions" tabindex="-1" onclick="window._unirSwitchTab('decisions')">
              ${svgIcon('M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V16h8v-1.26A7 7 0 0012 2z', 15)} ${localizedMarkup('Decisions', 'Decisiones')}
            </button>
            <button type="button" class="unir-tab" id="unir-tab-sql-sandbox" role="tab" aria-selected="false" aria-controls="unir-panel-sql-sandbox" tabindex="-1" onclick="window._unirSwitchTab('sql-sandbox')">
              ${svgIcon('M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z', 15)} ${localizedMarkup('SQL Sandbox', 'Sandbox SQL')}
            </button>
            <button type="button" class="unir-tab" id="unir-tab-cli-terminal" role="tab" aria-selected="false" aria-controls="unir-panel-cli-terminal" tabindex="-1" onclick="window._unirSwitchTab('cli-terminal')">
              ${svgIcon('M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.4-1.4 2.1-2.1-2.1-2.1L7.5 10l3.5 3.5-3.5 3.5z', 15)} ${localizedMarkup('Terminal CLI', 'Terminal CLI')}
            </button>
            <button type="button" class="unir-tab" id="unir-tab-architecture" role="tab" aria-selected="false" aria-controls="unir-panel-architecture" tabindex="-1" onclick="window._unirSwitchTab('architecture')">
              ${svgIcon('M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z', 15)} ${localizedMarkup('Architecture', 'Arquitectura')}
            </button>
            <button type="button" class="unir-tab" id="unir-tab-llm-params" role="tab" aria-selected="false" aria-controls="unir-panel-llm-params" tabindex="-1" onclick="window._unirSwitchTab('llm-params')">
              ${svgIcon('M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17a1 1 0 11-2 0v-.07A7.003 7.003 0 015.07 11H5a1 1 0 010-2h.07A7.003 7.003 0 0111 5.07V5a1 1 0 112 0v.07A7.003 7.003 0 0118.93 11H19a1 1 0 010 2h-.07A7.003 7.003 0 0113 16.93z', 15)} ${localizedMarkup('LLM Playground', 'Playground LLM')}
            </button>
            <button type="button" class="unir-tab" id="unir-tab-achievements" role="tab" aria-selected="false" aria-controls="unir-panel-achievements" tabindex="-1" onclick="window._unirSwitchTab('achievements')">
              ${svgIcon(SVG.trophy, 15)} ${localizedMarkup('Achievements', 'Logros')}
            </button>
          </div>

          <!-- PANEL: Study -->
          <div class="unir-panel" id="unir-panel-study" role="tabpanel" aria-labelledby="unir-tab-study">
            <div class="unir-search-container">
              <div class="unir-search-box">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="color:var(--text-muted, #64748b); flex-shrink:0;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <input type="text" id="unir-study-search" class="unir-search-input" placeholder="${getActiveLanguage() === 'en' ? 'Search concepts, topics, rules...' : 'Buscar conceptos, temas, reglas...'}">
                <button type="button" id="unir-study-search-clear" class="unir-search-clear" style="display:none;" title="Limpiar búsqueda">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
              </div>
              <div id="unir-study-search-count" class="unir-search-results-count" style="display:none;"></div>
            </div>
            <div id="unir-toc"></div>
          </div>

          <!-- PANEL: Personajes -->
          ${hasPersonajes ? '<div class="unir-panel" id="unir-panel-personajes" role="tabpanel" aria-labelledby="unir-tab-personajes" hidden></div>' : ''}

          <!-- PANEL: Conceptos Clave (Databricks) -->
          ${hasConceptos ? '<div class="unir-panel" id="unir-panel-conceptos" role="tabpanel" aria-labelledby="unir-tab-conceptos" hidden></div>' : ''}

          <!-- PANEL: Comandos SQL (Databricks) -->
          ${hasComandosSQL ? '<div class="unir-panel" id="unir-panel-comandos" role="tabpanel" aria-labelledby="unir-tab-comandos" hidden></div>' : ''}

          ${hasGenAIPatterns ? '<div class="unir-panel" id="unir-panel-patterns" role="tabpanel" aria-labelledby="unir-tab-patterns" hidden></div>' : ''}

          <!-- PANEL: Decisions -->
          <div class="unir-panel" id="unir-panel-decisions" role="tabpanel" aria-labelledby="unir-tab-decisions" hidden></div>

          <!-- PANEL: Flashcards -->
          ${hasFlashcards ? '<div class="unir-panel" id="unir-panel-flashcards" role="tabpanel" aria-labelledby="unir-tab-flashcards" hidden></div>' : ''}

          <!-- PANEL: SQL Sandbox -->
          <div class="unir-panel" id="unir-panel-sql-sandbox" role="tabpanel" aria-labelledby="unir-panel-sql-sandbox" hidden></div>

          <!-- PANEL: CLI Terminal Simulator -->
          <div class="unir-panel" id="unir-panel-cli-terminal" role="tabpanel" aria-labelledby="unir-tab-cli-terminal" hidden></div>

          <!-- PANEL: Architecture Canvas -->
          <div class="unir-panel" id="unir-panel-architecture" role="tabpanel" aria-labelledby="unir-tab-architecture" hidden></div>

          <!-- PANEL: LLM Parameters Playground -->
          <div class="unir-panel" id="unir-panel-llm-params" role="tabpanel" aria-labelledby="unir-tab-llm-params" hidden></div>

          <!-- PANEL: Achievements -->
          <div class="unir-panel" id="unir-panel-achievements" role="tabpanel" aria-labelledby="unir-tab-achievements" hidden></div>
        </div>
      `;

      const unifiedStudyBack = document.getElementById('unir-study-back');
      if (unifiedStudyBack) unifiedStudyBack.addEventListener('click', window.closeStudyMode);

      // Codex (GPT-5) | 2026-08-23 21:19 CST | Mantiene un orden estable de pestañas y añade escenarios prácticos para GenAI.
      const allTabs = ['study'];
      if (hasPersonajes) allTabs.push('personajes');
      if (hasConceptos) allTabs.push('conceptos');
      if (hasComandosSQL) allTabs.push('comandos');
      if (hasGenAIPatterns) allTabs.push('patterns');
      allTabs.push('decisions');
      if (hasFlashcards) allTabs.push('flashcards');
      allTabs.push('sql-sandbox');
      allTabs.push('cli-terminal');
      allTabs.push('architecture');
      allTabs.push('llm-params');
      allTabs.push('achievements');
      window._unirSwitchTab = function(tab) {
        allTabs.forEach(t => {
          const tabEl = document.getElementById('unir-tab-' + t);
          if (tabEl) {
            const isActive = t === tab;
            tabEl.classList.toggle('active', isActive);
            tabEl.setAttribute('aria-selected', String(isActive));
            tabEl.tabIndex = isActive ? 0 : -1;
          }
          const panel = document.getElementById('unir-panel-' + t);
          if (panel) { if (t === tab) panel.removeAttribute('hidden'); else panel.setAttribute('hidden', ''); }
        });
        if (tab === 'flashcards') renderFlashcardMode();
        if (tab === 'sql-sandbox' && window.SQLSandbox) window.SQLSandbox.render(document.getElementById('unir-panel-sql-sandbox'));
        if (tab === 'cli-terminal' && window.CliSimulator) window.CliSimulator.renderTerminal(document.getElementById('unir-panel-cli-terminal'), courseId);
        if (tab === 'architecture' && window.ArchitectureCanvas) window.ArchitectureCanvas.render(document.getElementById('unir-panel-architecture'), courseId);
        if (tab === 'llm-params' && window.PromptPlayground) window.PromptPlayground.render(document.getElementById('unir-panel-llm-params'));
        if (tab === 'achievements') renderAchievements();
        if (tab === 'personajes') renderPersonajes();
        if (tab === 'conceptos') renderConceptos();
        if (tab === 'comandos') renderComandosSQL();
        if (tab === 'patterns') renderGenAIPatterns();
        if (tab === 'decisions' && window.DecisionNavigator) window.DecisionNavigator.renderMatrix(document.getElementById('unir-panel-decisions'), courseId);
      };

      // Codex (GPT-5) | 2026-08-23 21:55 CST | Controla el nivel intermedio para que cada subsección de estudio inicie contraída.
      function setStudyCategoryExpansion(panel, expanded) {
        if (!panel) return;
        panel.querySelectorAll('.unir-category-toggle').forEach(toggle => {
          const body = document.getElementById(toggle.getAttribute('aria-controls'));
          toggle.setAttribute('aria-expanded', String(expanded));
          if (body) body.hidden = !expanded;
        });
      }

      function bindStudyCategoryToggles(panel) {
        if (!panel) return;
        panel.querySelectorAll('.unir-category-toggle').forEach(toggle => {
          toggle.addEventListener('click', () => {
            const expanded = toggle.getAttribute('aria-expanded') !== 'true';
            const body = document.getElementById(toggle.getAttribute('aria-controls'));
            toggle.setAttribute('aria-expanded', String(expanded));
            if (body) body.hidden = !expanded;
          });
        });
      }

      window._unirSetStudyCategoryExpansion = function(panelId, expanded) {
        setStudyCategoryExpansion(document.getElementById(panelId), expanded);
      };

      window._unirCollapseStudyPanel = function(panelId) {
        const panel = document.getElementById(panelId);
        if (!panel) return;
        setStudyCategoryExpansion(panel, false);
        panel.querySelectorAll('.unir-persona-body').forEach(body => body.classList.remove('open'));
        panel.querySelectorAll('.unir-persona-header').forEach(header => header.classList.remove('open'));
        panel.querySelectorAll('details[open]').forEach(details => details.removeAttribute('open'));
      };

      // --- PERSONAJES PANEL RENDERER ---
      function renderPersonajes() {
        const panel = document.getElementById('unir-panel-personajes');
        if (!panel || !window.personajesUnirViz) return;
        if (panel.dataset.rendered) return; // Only render once
        panel.dataset.rendered = '1';

        const personaIcon = (path, sz=18, fill='currentColor') => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="${fill}"><path d="${path}"/></svg>`;
        const alertIcon = 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
        const badgeLabel = { alta: 'CLAVE', media: 'IMPORTANTE', baja: 'COMPLEMENTARIO' };
        const totalPersonajes = window.personajesUnirViz.reduce((a,c) => a + c.personas.length, 0);

        let html = `<div style="text-align:center;margin-bottom:18px;">
          <h2 style="margin:0 0 4px;font-size:1.3rem;color:var(--text-color,#1e293b);">Personajes para el Examen</h2>
          <p style="margin:0;font-size:0.85rem;color:var(--text-muted,#64748b);">Despliega cada personaje para ver su contribución y dato clave para el examen.</p>
          <div id="unir-persona-progress" style="margin-top:8px;font-size:0.8rem;color:var(--primary-color,#3157d5);font-weight:600;">${svgIcon(SVG.star, 14)} ${mastery.personajesViewed.length}/${totalPersonajes} leídos — +5 XP por personaje nuevo</div>
          <div style="display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap;">
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--primary-light);color:var(--primary-color);">CLAVE = Muy preguntado</span>
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--bg-surface);color:var(--text-muted);">IMPORTANTE</span>
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--bg-surface);color:var(--text-muted);">COMPLEMENTARIO</span>
          </div>
        </div>`;

        // Track personaje XP on expand
        window._unirPersonaToggle = function(ci, pi) {
          const uid = `persona-${ci}-${pi}`;
          const b = document.getElementById(uid + '-body');
          const h = document.getElementById(uid + '-hdr');
          if (b.classList.contains('open')) {
            b.classList.remove('open'); h.classList.remove('open');
          } else {
            b.classList.add('open'); h.classList.add('open');
            // Award XP on first view
            const key = `${ci}-${pi}`;
            if (!mastery.personajesViewed.includes(key)) {
              mastery.personajesViewed.push(key);
              addXP(5);
              syncToGlobal('personaje');
              // Update progress counter
              const progEl = document.getElementById('unir-persona-progress');
              if (progEl) progEl.innerHTML = `${personaIcon(SVG.star, 14)} ${mastery.personajesViewed.length}/${totalPersonajes} leídos — +5 XP por personaje nuevo`;
              // Mark card as read visually
              const card = h.closest('.unir-persona-card');
              if (card) card.style.borderLeft = '3px solid var(--success-color)';
              const nameEl = h.querySelector('.p-name');
              if (nameEl) nameEl.style.color = 'var(--success-color)';
              // Add LEÍDO badge if not already present
              if (!h.querySelector('.p-leido-badge')) {
                const leidoBadge = document.createElement('span');
                leidoBadge.className = 'p-leido-badge';
                leidoBadge.style.cssText = 'font-size:0.65rem;color:var(--success-color);font-weight:700;margin-left:6px;display:inline-flex;align-items:center;gap:3px;';
                leidoBadge.innerHTML = `${svgIcon(SVG.check, 10, 'var(--success-color)')} LEÍDO`;
                h.appendChild(leidoBadge);
              }
            }
          }
        };

        // Expand All with XP tracking
        window._unirExpandAllPersonas = function() {
          let newCount = 0;
          setStudyCategoryExpansion(panel, true);
          window.personajesUnirViz.forEach((cat, ci) => {
            cat.personas.forEach((p, pi) => {
              const key = `${ci}-${pi}`;
              const uid = `persona-${ci}-${pi}`;
              const body = document.getElementById(uid + '-body');
              const hdr = document.getElementById(uid + '-hdr');
              if (body) body.classList.add('open');
              if (hdr) hdr.classList.add('open');
              if (!mastery.personajesViewed.includes(key)) {
                mastery.personajesViewed.push(key);
                newCount++;
                // Add visual LEÍDO markers
                if (hdr) {
                  const card = hdr.closest('.unir-persona-card');
                  if (card) card.style.borderLeft = '3px solid var(--success-color)';
                  const nameEl = hdr.querySelector('.p-name');
                  if (nameEl) nameEl.style.color = 'var(--success-color)';
                  if (!hdr.querySelector('.p-leido-badge')) {
                    const leidoBadge = document.createElement('span');
                    leidoBadge.className = 'p-leido-badge';
                    leidoBadge.style.cssText = 'font-size:0.65rem;color:var(--success-color);font-weight:700;margin-left:6px;display:inline-flex;align-items:center;gap:3px;';
                    leidoBadge.innerHTML = `${svgIcon(SVG.check, 10, 'var(--success-color)')} LEÍDO`;
                    hdr.appendChild(leidoBadge);
                  }
                }
              }
            });
          });
          if (newCount > 0) {
            addXP(newCount * 5);
            for (let i = 0; i < newCount; i++) syncToGlobal('personaje');
            const progEl = document.getElementById('unir-persona-progress');
            if (progEl) progEl.innerHTML = `${personaIcon(SVG.star, 14)} ${mastery.personajesViewed.length}/${totalPersonajes} leídos — +5 XP por personaje nuevo`;
          }
        };

        window.personajesUnirViz.forEach((cat, ci) => {
          const categoryId = `persona-category-${ci}`;
          html += `<div class="unir-persona-category">`;
          html += `<button type="button" class="unir-persona-cat-header unir-category-toggle" aria-expanded="false" aria-controls="${categoryId}">${personaIcon(cat.icon, 20)} <span>${cat.category}</span><span style="margin-left:auto;font-size:0.72rem;opacity:0.7;">${cat.personas.length} personajes</span><span class="unir-category-chevron">${personaIcon(SVG.chevronDown, 16)}</span></button>`;
          html += `<div class="unir-category-body" id="${categoryId}" hidden>`;

          cat.personas.forEach((p, pi) => {
            const uid = `persona-${ci}-${pi}`;
            const key = `${ci}-${pi}`;
            const isRead = mastery.personajesViewed.includes(key);
            const badgeCls = `p-badge-${p.relevancia}`;
            html += `<div class="unir-persona-card${isRead ? ' is-read' : ''}" style="${isRead ? 'border-left:3px solid var(--success-color);' : ''}">`;
            html += `  <div class="unir-persona-header" id="${uid}-hdr" onclick="window._unirPersonaToggle(${ci},${pi})">` ;
            html += `    <span class="p-chevron">${personaIcon('M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z', 16)}</span>`;
            html += `    <span class="p-name" style="${isRead ? 'color:var(--success-color);' : ''}">${p.nombre}</span>`;
            html += `    <span class="p-epoch">${p.epoca}</span>`;
            html += `    <span class="${badgeCls}">${badgeLabel[p.relevancia]}</span>`;
            html += `    ${isRead ? `<span style="font-size:0.65rem;color:var(--success-color);font-weight:700;display:inline-flex;align-items:center;gap:3px;">${svgIcon(SVG.check, 10, 'var(--success-color)')} LEÍDO</span>` : ''}`;
            html += `  </div>`;
            html += `  <div class="unir-persona-body" id="${uid}-body" style="padding:20px 36px 24px;">`;
            html += `    <div class="p-contribucion">${p.contribucion}</div>`;
            html += `    <div class="p-dato-examen" style="padding:16px 24px;margin-left:16px;margin-right:8px;">${personaIcon(alertIcon, 16)} <div><strong style="color:var(--primary-color);">Dato para el examen:</strong> ${p.datoExamen}</div></div>`;
            html += `    <div class="p-tema">${personaIcon('M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z', 12, '#64748b')} ${p.tema}</div>`;
            html += `  </div>`;
            html += `</div>`;
          });

          html += `</div></div>`;
        });

        // Expand all / collapse all buttons
        html += `<div style="display:flex;gap:8px;justify-content:center;margin-top:16px;">
          <button onclick="window._unirExpandAllPersonas()" style="padding:6px 16px;border-radius:20px;border:1px solid var(--primary-color);color:var(--primary-color);background:var(--primary-light);cursor:pointer;font-size:0.8rem;font-weight:600;transition:all 0.2s;">Expandir Todos</button>
          <button onclick="window._unirCollapseStudyPanel('unir-panel-personajes')" style="padding:6px 16px;border-radius:20px;border:1px solid var(--border-color,#e5e7eb);color:var(--text-muted,#64748b);background:var(--bg-card,#fff);cursor:pointer;font-size:0.8rem;font-weight:600;transition:all 0.2s;">Contraer Todos</button>
        </div>`;

        panel.innerHTML = html;
        bindStudyCategoryToggles(panel);
      }

      // --- CONCEPTOS CLAVE PANEL RENDERER (Databricks) ---
      function renderConceptos() {
        const panel = document.getElementById('unir-panel-conceptos');
        if (!panel || !hasConceptos) return;
        if (panel.dataset.rendered) return; // Only render once
        panel.dataset.rendered = '1';

        const cIcon = (path, sz=18, fill='currentColor') => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="${fill}"><path d="${path}"/></svg>`;
        const alertIcon = 'M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z';
        const badgeLabel = { alta: 'CLAVE', media: 'IMPORTANTE', baja: 'COMPLEMENTARIO' };
        const totalConceptos = conceptos.reduce((a,c) => a + c.conceptos.length, 0);

        let html = `<div style="text-align:center;margin-bottom:18px;">
          <h2 style="margin:0 0 4px;font-size:1.3rem;color:var(--text-color,#1e293b);">${isAzureAi103 ? localizedMarkup('Azure AI Terms & Competencies', 'Términos y Competencias de Azure AI') : (isGenAICourse ? localizedMarkup('Terms and competencies', 'Términos y competencias') : localizedMarkup('Key Concepts for the Exam', 'Conceptos Clave para el Examen'))}</h2>
          <p style="margin:0;font-size:0.85rem;color:var(--text-muted,#64748b);">${isAzureAi103 ? localizedMarkup('Each competency includes official Azure AI patterns and exam facts. Everything starts collapsed.', 'Cada competencia incluye patrones oficiales de Azure AI y datos clave del examen. Todo inicia contraído.') : (isGenAICourse ? localizedMarkup('Each term includes an explanation and key answer. Everything starts collapsed.', 'Cada término incluye explicación y respuesta clave. Todo inicia contraído.') : localizedMarkup('Open each concept to see its description and key exam fact.', 'Despliega cada concepto para ver su descripción y dato clave para el examen.'))}</p>
          <div id="unir-concepto-progress" style="margin-top:8px;font-size:0.8rem;color:var(--primary-color,#3157d5);font-weight:600;">${cIcon(SVG.star, 14)} ${mastery.conceptosViewed.length}/${totalConceptos} le&iacute;dos &mdash; +5 XP por concepto nuevo</div>
          <div style="display:flex;gap:8px;justify-content:center;margin-top:10px;flex-wrap:wrap;">
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--primary-light);color:var(--primary-color);">CLAVE = Muy preguntado</span>
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--bg-surface);color:var(--text-muted);">IMPORTANTE</span>
            <span style="font-size:0.72rem;font-weight:700;padding:3px 10px;border-radius:8px;background:var(--bg-surface);color:var(--text-muted);">COMPLEMENTARIO</span>
          </div>
        </div>`;

        // Toggle concepto with XP tracking
        window._unirConceptoToggle = function(ci, pi) {
          const uid = `concepto-${ci}-${pi}`;
          const b = document.getElementById(uid + '-body');
          const h = document.getElementById(uid + '-hdr');
          if (b.classList.contains('open')) {
            b.classList.remove('open'); h.classList.remove('open');
          } else {
            b.classList.add('open'); h.classList.add('open');
            const key = `${ci}-${pi}`;
            if (!mastery.conceptosViewed.includes(key)) {
              mastery.conceptosViewed.push(key);
              addXP(5);
              syncToGlobal('concepto'); // Databricks conceptos use their own counter
              const progEl = document.getElementById('unir-concepto-progress');
              if (progEl) progEl.innerHTML = `${cIcon(SVG.star, 14)} ${mastery.conceptosViewed.length}/${totalConceptos} le&iacute;dos &mdash; +5 XP por concepto nuevo`;
              const card = h.closest('.unir-persona-card');
              if (card) card.style.borderLeft = '3px solid var(--success-color)';
              const nameEl = h.querySelector('.p-name');
              if (nameEl) nameEl.style.color = 'var(--success-color)';
              if (!h.querySelector('.p-leido-badge')) {
                const leidoBadge = document.createElement('span');
                leidoBadge.className = 'p-leido-badge';
                leidoBadge.style.cssText = 'font-size:0.65rem;color:var(--success-color);font-weight:700;margin-left:6px;';
                leidoBadge.textContent = '\u2713 LE\u00cdDO';
                h.appendChild(leidoBadge);
              }
            }
          }
        };

        // Expand All Conceptos
        window._unirExpandAllConceptos = function() {
          let newCount = 0;
          setStudyCategoryExpansion(panel, true);
          conceptos.forEach((cat, ci) => {
            cat.conceptos.forEach((c, pi) => {
              const key = `${ci}-${pi}`;
              const uid = `concepto-${ci}-${pi}`;
              const body = document.getElementById(uid + '-body');
              const hdr = document.getElementById(uid + '-hdr');
              if (body) body.classList.add('open');
              if (hdr) hdr.classList.add('open');
              if (!mastery.conceptosViewed.includes(key)) {
                mastery.conceptosViewed.push(key);
                newCount++;
                if (hdr) {
                  const card = hdr.closest('.unir-persona-card');
                  if (card) card.style.borderLeft = '3px solid var(--success-color)';
                  const nameEl = hdr.querySelector('.p-name');
                  if (nameEl) nameEl.style.color = 'var(--success-color)';
                  if (!hdr.querySelector('.p-leido-badge')) {
                    const leidoBadge = document.createElement('span');
                    leidoBadge.className = 'p-leido-badge';
                    leidoBadge.style.cssText = 'font-size:0.65rem;color:var(--success-color);font-weight:700;margin-left:6px;';
                    leidoBadge.textContent = '\u2713 LE\u00cdDO';
                    hdr.appendChild(leidoBadge);
                  }
                }
              }
            });
          });
          if (newCount > 0) {
            addXP(newCount * 5);
            for (let i = 0; i < newCount; i++) syncToGlobal('concepto');
            const progEl = document.getElementById('unir-concepto-progress');
            if (progEl) progEl.innerHTML = `${cIcon(SVG.star, 14)} ${mastery.conceptosViewed.length}/${totalConceptos} le&iacute;dos &mdash; +5 XP por concepto nuevo`;
          }
        };

        conceptos.forEach((cat, ci) => {
          const categoryId = `concepto-category-${ci}`;
          html += `<div class="unir-persona-category">`;
          html += `<button type="button" class="unir-persona-cat-header unir-category-toggle" aria-expanded="false" aria-controls="${categoryId}">${cIcon(cat.icon, 20)} ${bilingualMarkup(cat.category)}<span style="margin-left:auto;font-size:0.72rem;opacity:0.7;">${cat.conceptos.length} conceptos</span><span class="unir-category-chevron">${cIcon(SVG.chevronDown, 16)}</span></button>`;
          html += `<div class="unir-category-body" id="${categoryId}" hidden>`;

          cat.conceptos.forEach((c, pi) => {
            const uid = `concepto-${ci}-${pi}`;
            const key = `${ci}-${pi}`;
            const isRead = mastery.conceptosViewed.includes(key);
            const badgeCls = `p-badge-${c.relevancia}`;
            html += `<div class="unir-persona-card${isRead ? ' is-read' : ''}" style="${isRead ? 'border-left:3px solid var(--success-color);' : ''}">`;
            html += `  <div class="unir-persona-header" id="${uid}-hdr" onclick="window._unirConceptoToggle(${ci},${pi})">`;
            html += `    <span class="p-chevron">${cIcon('M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z', 16)}</span>`;
            html += `    ${bilingualMarkup(c.nombre, 'en-es', 'p-name')}`;
            html += `    ${bilingualMarkup(c.tipo, 'en-es', 'p-epoch')}`;
            html += `    <span class="${badgeCls}">${badgeLabel[c.relevancia]}</span>`;
            html += `    ${isRead ? '<span style="font-size:0.65rem;color:var(--success-color);font-weight:700;">\u2713 LE\u00cdDO</span>' : ''}`;
            html += `  </div>`;
            html += `  <div class="unir-persona-body" id="${uid}-body" style="padding:20px 36px 24px;">`;
            html += `    <div class="p-contribucion">${c.contribucion}</div>`;
            html += `    <div class="p-dato-examen" style="padding:16px 24px;margin-left:16px;margin-right:8px;">${cIcon(alertIcon, 16)} <div><strong style="color:var(--primary-color);">Dato para el examen:</strong> ${c.datoExamen}</div></div>`;
            html += `    <div class="p-tema">${cIcon('M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6z', 12, '#64748b')} ${bilingualMarkup(c.tema)}</div>`;
            html += `  </div>`;
            html += `</div>`;
          });

          html += `</div></div>`;
        });

        // Expand all / collapse all buttons
        html += `<div style="display:flex;gap:8px;justify-content:center;margin-top:16px;">
          <button onclick="window._unirExpandAllConceptos()" style="padding:6px 16px;border-radius:20px;border:1px solid var(--primary-color);color:var(--primary-color);background:var(--primary-light);cursor:pointer;font-size:0.8rem;font-weight:600;transition:all 0.2s;">Expandir Todos</button>
          <button onclick="window._unirCollapseStudyPanel('unir-panel-conceptos')" style="padding:6px 16px;border-radius:20px;border:1px solid var(--border-color,#e5e7eb);color:var(--text-muted,#64748b);background:var(--bg-card,#fff);cursor:pointer;font-size:0.8rem;font-weight:600;transition:all 0.2s;">Contraer Todos</button>
        </div>`;

        panel.innerHTML = html;
        bindStudyCategoryToggles(panel);
      }

      // Codex (GPT-5) | 2026-08-23 21:19 CST | Presenta escenarios GenAI bilingües con elementos details cerrados por defecto.
      function renderGenAIPatterns() {
        const panel = document.getElementById('unir-panel-patterns');
        if (!panel || !hasGenAIPatterns || panel.dataset.rendered) return;
        panel.dataset.rendered = '1';

        const totalPatterns = genAIPatterns.reduce((total, group) => total + group.items.length, 0);
        let html = `
          <div style="text-align:center;margin-bottom:18px;">
            <h2 style="margin:0 0 4px;font-size:1.3rem;color:var(--text-color,#1e293b);">${localizedMarkup('Decision scenarios', 'Escenarios de decisión')}</h2>
            <p style="margin:0;color:var(--text-muted,#64748b);font-size:0.85rem;">${localizedMarkup(`${totalPatterns} representative exam situations. All scenarios start collapsed.`, `${totalPatterns} situaciones representativas del examen. Todos los escenarios inician contraídos.`)}</p>
            <button type="button" id="genai-patterns-collapse" class="btn btn-secondary btn-sm" style="margin-top:12px;">${localizedMarkup('Collapse all', 'Contraer todo')}</button>
          </div>`;

        genAIPatterns.forEach((group, groupIndex) => {
          const categoryId = `pattern-category-${groupIndex}`;
          html += `<section class="unir-persona-category">`;
          html += `<button type="button" class="unir-persona-cat-header unir-category-toggle" aria-expanded="false" aria-controls="${categoryId}">${svgIcon(SVG.shield, 18)} ${bilingualMarkup(group.category)}<span style="margin-left:auto;font-size:0.72rem;opacity:0.7;">${group.items.length}</span><span class="unir-category-chevron">${svgIcon(SVG.chevronDown, 16)}</span></button>`;
          html += `<div class="unir-category-body" id="${categoryId}" hidden>`;
          group.items.forEach(item => {
            html += `
              <details class="unir-persona-card genai-pattern-card">
                <summary>${svgIcon(SVG.chevronDown, 16, '#3157d5')}${bilingualMarkup(item.title)}</summary>
                <div class="genai-pattern-content">
                  ${item.scenario}
                  ${item.recommendation}
                </div>
              </details>`;
          });
          html += `</div></section>`;
        });

        panel.innerHTML = html;
        bindStudyCategoryToggles(panel);
        document.getElementById('genai-patterns-collapse')?.addEventListener('click', () => {
          window._unirCollapseStudyPanel('unir-panel-patterns');
        });
      }

      // --- COMANDOS SQL / FUNCIONES AI PANEL RENDERER ---
      function renderComandosSQL() {
        const panel = document.getElementById('unir-panel-comandos');
        const list = comandosSql;
        if (!panel || !list || list.length === 0) return;
        if (panel.dataset.rendered) return;
        panel.dataset.rendered = '1';
        const cIcon = (path, sz=18, fill='currentColor') => `<svg viewBox="0 0 24 24" width="${sz}" height="${sz}" fill="${fill}"><path d="${path}"/></svg>`;
        const totalComandos = list.reduce((a,c) => a + c.comandos.length, 0);
        let html = `<div style="text-align:center;margin-bottom:18px;">
          <h2 style="margin:0 0 4px;font-size:1.3rem;color:var(--text-color,#1e293b);">${isAzureAi103 ? localizedMarkup('Azure AI SDK & API Code Examples', 'Ejemplos de Código SDK & API de Azure AI') : (isDatabricksGenAI ? localizedMarkup('Databricks GenAI & AI Functions', 'Funciones de IA & SQL GenAI') : localizedMarkup('SQL Commands for Exam', 'Comandos SQL para el Examen'))}</h2>
          <p style="margin:0;color:var(--text-muted,#64748b);font-size:0.85rem;">${isAzureAi103 ? localizedMarkup('Official Azure OpenAI, Agent Service, Search & Document Intelligence SDK patterns explained line-by-line. Everything starts collapsed.', 'Patrones oficiales del SDK de Azure OpenAI, Agent Service, Search y Document Intelligence explicados línea por línea. Todo inicia contraído.') : (isDatabricksGenAI ? localizedMarkup('Unity Catalog AI functions explained line-by-line. Everything starts collapsed.', 'Funciones de IA de Unity Catalog explicadas línea por línea. Todo inicia contraído.') : localizedMarkup('Commands with line-by-line explanations', 'Ejemplos explicados línea por línea'))}</p>
          <div id="unir-cmd-progress" style="margin-top:8px;font-size:0.8rem;color:var(--primary-color,#3157d5);font-weight:600;">${cIcon(SVG.star, 14)} ${mastery.comandosViewed.length}/${totalComandos} le&iacute;dos &mdash; +8 XP c/u</div>
        </div>`;
        window._cmdRead = function(key) {
          if (!mastery.comandosViewed.includes(key)) {
            mastery.comandosViewed.push(key); addXP(8); syncToGlobal('comando'); saveMastery(); checkAchievements();
            const p = document.getElementById('unir-cmd-progress');
            if(p) p.innerHTML = `${cIcon(SVG.star,14)} ${mastery.comandosViewed.length}/${totalComandos} le&iacute;dos &mdash; +8 XP c/u`;
            const b = document.getElementById('cb-'+key.replace(/[^a-z0-9]/gi,''));
            if(b){b.style.background='var(--success-color)';b.innerHTML=svgIcon(SVG.check, 10, '#fff');}
          }
        };
        list.forEach((cat, ci) => {
          const categoryId = `command-category-${ci}`;
          html += `<section class="unir-persona-category">`;
          html += `<button type="button" class="unir-persona-cat-header unir-category-toggle" aria-expanded="false" aria-controls="${categoryId}">${cIcon(cat.icon,20)} <span>${cat.category}</span><span style="margin-left:auto;font-size:0.72rem;opacity:0.7;">${cat.comandos.length}</span><span class="unir-category-chevron">${cIcon(SVG.chevronDown,16)}</span></button>`;
          html += `<div class="unir-category-body" id="${categoryId}" hidden>`;
          cat.comandos.forEach((cmd, pi) => {
            const key = `cmd-${ci}-${pi}`, sk = key.replace(/[^a-z0-9]/gi,''), isR = mastery.comandosViewed.includes(key);
            html += `<div class="unir-persona-card" style="border-left:3px solid ${isR?'var(--success-color)':'var(--primary-color)'};">
              <div class="unir-persona-header" onclick="this.classList.toggle('open');this.nextElementSibling.classList.toggle('open');window._cmdRead('${key}');">
                <div style="display:flex;align-items:center;gap:8px;flex:1;"><span style="font-weight:700;color:var(--text-color,#1e293b);font-size:0.95rem;">${cmd.nombre}</span>
                <span id="cb-${sk}" style="font-size:0.65rem;padding:2px 8px;border-radius:10px;background:${isR?'var(--success-color)':'var(--primary-color)'};color:#fff;font-weight:700;display:inline-flex;align-items:center;justify-content:center;">${isR?svgIcon(SVG.check, 10, '#fff'):'NUEVO'}</span></div>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="var(--text-muted,#64748b)"><path d="M7 10l5 5 5-5z"/></svg>
              </div>
              <div class="unir-persona-body"><div style="padding:12px 16px;">
                <p class="cmd-lt" data-lang="es" style="color:var(--text-muted,#64748b);font-size:0.85rem;margin:0 0 12px;">${cmd.descripcion_es}</p>
                <p class="cmd-lt" data-lang="en" style="color:var(--text-muted,#64748b);font-size:0.85rem;margin:0 0 12px;display:none;">${cmd.descripcion_en}</p>`;
            cmd.ejemplos.forEach((ej, ei) => {
              html += `<div style="margin-bottom:14px;border:1px solid var(--border-color,#e5e7eb);border-radius:10px;overflow:hidden;">
                <div style="background:var(--bg-card,#f8fafc);padding:6px 12px;border-bottom:1px solid var(--border-color,#e5e7eb);font-size:0.8rem;font-weight:600;display:flex;justify-content:space-between;align-items:center;">
                  <div><span class="cmd-lt" data-lang="es">Ej ${ei+1}: ${ej.titulo_es}</span><span class="cmd-lt" data-lang="en" style="display:none">Ex ${ei+1}: ${ej.titulo_en}</span></div>
                  <button type="button" class="code-copy-btn" onclick="window._copyCodeSnippet(this, event)">${svgIcon(SVG.copy, 12)} Copiar</button>
                </div>
                <pre style="margin:0;padding:12px;background:#0d1117;color:#e6edf3;font-size:0.82rem;line-height:1.6;overflow-x:auto;font-family:'Cascadia Code','Fira Code',monospace;"><code>${ej.sql.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code></pre>
                <div style="padding:8px 12px;background:var(--bg-secondary,#f1f5f9);">
                  <div style="font-size:0.7rem;font-weight:700;color:var(--text-muted,#64748b);margin-bottom:4px;text-transform:uppercase;letter-spacing:0.5px;">
                    <span class="cmd-lt" data-lang="es">Desglose:</span><span class="cmd-lt" data-lang="en" style="display:none">Breakdown:</span></div>`;
              ej.lineas.forEach(l => {
                html += `<div style="display:flex;gap:8px;padding:3px 0;font-size:0.8rem;border-bottom:1px solid var(--border-color,#e5e7eb22);">
                  <code style="color:var(--primary-color);font-weight:600;white-space:nowrap;font-size:0.76rem;">${l.code.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</code>
                  <span class="cmd-lt" data-lang="es" style="color:var(--text-color,#1e293b);">&rarr; ${l.es}</span>
                  <span class="cmd-lt" data-lang="en" style="color:var(--text-color,#1e293b);display:none">&rarr; ${l.en}</span></div>`;
              });
              html += `</div></div>`;
            });
            html += `</div></div></div>`;
          });
          html += `</div></section>`;
        });
        html += `<div style="display:flex;gap:8px;justify-content:center;margin-top:16px;">
          <button onclick="window._unirSetStudyCategoryExpansion('unir-panel-comandos',true);document.querySelectorAll('#unir-panel-comandos .unir-persona-body').forEach(b=>b.classList.add('open'));document.querySelectorAll('#unir-panel-comandos .unir-persona-header').forEach(h=>h.classList.add('open'));" style="padding:6px 16px;border-radius:20px;border:1px solid var(--primary-color);color:var(--primary-color);background:var(--primary-light);cursor:pointer;font-size:0.8rem;font-weight:600;">Expandir</button>
          <button onclick="window._unirCollapseStudyPanel('unir-panel-comandos')" style="padding:6px 16px;border-radius:20px;border:1px solid var(--border-color,#e5e7eb);color:var(--text-muted,#64748b);background:var(--bg-card,#fff);cursor:pointer;font-size:0.8rem;font-weight:600;">Contraer</button></div>`;
        panel.innerHTML = html;
        bindStudyCategoryToggles(panel);
      }

      // Render TOC as dropdown section cards
      const tocEl = document.getElementById('unir-toc');

      // Helper: check if all items in a section are viewed
      function isSectionComplete(docIdx, itemCount) {
        for (let i = 0; i < itemCount; i++) {
          if (!mastery.sectionsViewed.includes(`${docIdx}-${i}`)) return false;
        }
        return true;
      }
      function sectionViewedCount(docIdx, itemCount) {
        let c = 0;
        for (let i = 0; i < itemCount; i++) {
          if (mastery.sectionsViewed.includes(`${docIdx}-${i}`)) c++;
        }
        return c;
      }

      // Helper: refresh a section header's progress indicator
      function refreshSectionHeader(card, docIdx, itemCount) {
        const viewed = sectionViewedCount(docIdx, itemCount);
        const done = viewed === itemCount;
        const progEl = card.querySelector('.hdr-progress');
        const btnEl = card.querySelector('.hdr-complete-btn');
        if (progEl) {
          progEl.textContent = `${viewed}/${itemCount}`;
          progEl.classList.toggle('all-done', done);
        }
        if (btnEl) {
          if (done) {
            btnEl.classList.add('is-done');
            btnEl.innerHTML = `${svgIcon(SVG.checkCircle, 12, '#fff')} Completo`;
          }
        }
        card.classList.toggle('completed', done);
      }

      data.forEach((section, docIdx) => {
        const card = document.createElement('div');
        card.className = 'unir-section-card';
        card.dataset.docIdx = docIdx;
        const allDone = isSectionComplete(docIdx, section.items.length);
        if (allDone) card.classList.add('completed');
        const viewedN = sectionViewedCount(docIdx, section.items.length);

        const header = document.createElement('div');
        header.className = 'unir-section-header';

        const sectionToggle = document.createElement('button');
        sectionToggle.type = 'button';
        sectionToggle.className = 'unir-section-toggle';
        sectionToggle.setAttribute('aria-expanded', 'false');
        sectionToggle.setAttribute('aria-controls', `unir-section-body-${docIdx}`);
        sectionToggle.innerHTML = `
          <span class="hdr-chevron">${svgIcon(SVG.chevronDown, 16)}</span>
          <span class="hdr-title">${bilingualMarkup(section.title)}</span>
          <span class="hdr-progress ${allDone ? 'all-done' : ''}">${viewedN}/${section.items.length}</span>
        `;

        const completeBtn = document.createElement('button');
        completeBtn.type = 'button';
        completeBtn.className = `hdr-complete-btn ${allDone ? 'is-done' : ''}`;
        completeBtn.dataset.doc = docIdx;
        completeBtn.dataset.count = section.items.length;
        completeBtn.innerHTML = allDone
          ? `${svgIcon(SVG.checkCircle, 12, '#fff')} Completo`
          : `${svgIcon(SVG.checkCircle, 12)} Marcar completo`;

        header.append(sectionToggle, completeBtn);
        card.appendChild(header);

        // Body wrapper — contains items list + floating content area
        const body = document.createElement('div');
        body.className = 'unir-section-body';
        body.id = `unir-section-body-${docIdx}`;
        body.setAttribute('hidden', ''); // Start collapsed

        const ul = document.createElement('ul');
        ul.className = 'unir-section-items';
        const contentArea = document.createElement('li');
        contentArea.className = 'unir-item-content';

        section.items.forEach((item, itemIdx) => {
          const li = document.createElement('li');
          li.className = 'unir-topic-item';
          const key = `${docIdx}-${itemIdx}`;
          const isViewed = mastery.sectionsViewed.includes(key);
          const itemButton = document.createElement('button');
          itemButton.type = 'button';
          itemButton.className = 'unir-item-button';
          itemButton.innerHTML = `<span class="li-check ${isViewed ? 'done' : ''}">${isViewed ? svgIcon(SVG.check, 10, '#fff') : ''}</span><span>${bilingualMarkup(item.title)}</span>`;
          itemButton.addEventListener('click', (e) => {
            e.stopPropagation();
            // Deactivate all items across all cards
            tocEl.querySelectorAll('.unir-topic-item').forEach(l => l.classList.remove('active'));
            // Clear any other card's content areas
            tocEl.querySelectorAll('.unir-item-content').forEach(a => a.innerHTML = '');
            li.classList.add('active');
            // Render content and insert RIGHT AFTER the clicked item
            contentArea.innerHTML = `<h2>${bilingualMarkup(item.title)}</h2><div>${item.content}</div>`;
            // Move contentArea to be a sibling right after this li
            li.after(contentArea);
            if (!mastery.sectionsViewed.includes(key)) {
              mastery.sectionsViewed.push(key);
              addXP(10);
              li.querySelector('.li-check').classList.add('done');
              li.querySelector('.li-check').innerHTML = svgIcon(SVG.check, 10, '#fff');
            }
            refreshSectionHeader(card, docIdx, section.items.length);
            updateMasteryUI();
            contentArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          });
          li.appendChild(itemButton);
          ul.appendChild(li);
        });
        body.appendChild(ul);
        card.appendChild(body);

        // Toggle dropdown on header click (not on the complete button)
        sectionToggle.addEventListener('click', () => {
          const isOpen = !body.hasAttribute('hidden');
          if (isOpen) {
            body.setAttribute('hidden', '');
            header.classList.remove('open');
            sectionToggle.setAttribute('aria-expanded', 'false');
            contentArea.innerHTML = '';
          } else {
            body.removeAttribute('hidden');
            header.classList.add('open');
            sectionToggle.setAttribute('aria-expanded', 'true');
          }
        });

        // "Mark complete" button handler
        completeBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (isSectionComplete(docIdx, section.items.length)) return;
          let newCount = 0;
          section.items.forEach((item, itemIdx) => {
            const key = `${docIdx}-${itemIdx}`;
            if (!mastery.sectionsViewed.includes(key)) {
              mastery.sectionsViewed.push(key);
              newCount++;
            }
          });
          if (newCount > 0) addXP(newCount * 10);
          // Update all check marks in this section
          ul.querySelectorAll('.li-check').forEach(chk => {
            chk.classList.add('done');
            chk.innerHTML = svgIcon(SVG.check, 10, '#fff');
          });
          refreshSectionHeader(card, docIdx, section.items.length);
          updateMasteryUI();
        });

        tocEl.appendChild(card);
      });

      // Real-time Instant Search for Study Mode
      const searchInput = document.getElementById('unir-study-search');
      const searchClear = document.getElementById('unir-study-search-clear');
      const searchCount = document.getElementById('unir-study-search-count');

      if (searchInput) {
        searchInput.addEventListener('input', () => {
          const rawQuery = searchInput.value.trim();
          const query = rawQuery.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

          if (searchClear) searchClear.style.display = rawQuery ? 'flex' : 'none';

          if (!query) {
            if (searchCount) searchCount.style.display = 'none';
            // Reset all cards and items
            tocEl.querySelectorAll('.unir-toc-card').forEach(card => {
              card.style.display = '';
              const body = card.querySelector('.unir-toc-body');
              const header = card.querySelector('.unir-toc-header');
              const toggle = card.querySelector('.unir-section-toggle');
              if (body) body.setAttribute('hidden', '');
              if (header) header.classList.remove('open');
              if (toggle) toggle.setAttribute('aria-expanded', 'false');
              card.querySelectorAll('.unir-toc-item').forEach(item => {
                item.style.display = '';
                const textEl = item.querySelector('.li-text');
                if (textEl && textEl.dataset.originalText) {
                  textEl.innerHTML = textEl.dataset.originalText;
                }
              });
            });
            return;
          }

          let totalMatches = 0;
          tocEl.querySelectorAll('.unir-toc-card').forEach(card => {
            let cardHasMatch = false;
            const items = card.querySelectorAll('.unir-toc-item');
            
            items.forEach(item => {
              const textEl = item.querySelector('.li-text');
              if (!textEl) return;
              if (!textEl.dataset.originalText) textEl.dataset.originalText = textEl.innerHTML;

              const plainText = textEl.textContent.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              if (plainText.includes(query)) {
                item.style.display = '';
                cardHasMatch = true;
                totalMatches++;
                // Highlight keyword
                try {
                  const reg = new RegExp(`(${rawQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
                  textEl.innerHTML = textEl.dataset.originalText.replace(reg, '<mark class="search-highlight">$1</mark>');
                } catch(e) {}
              } else {
                item.style.display = 'none';
                textEl.innerHTML = textEl.dataset.originalText;
              }
            });

            if (cardHasMatch) {
              card.style.display = '';
              const body = card.querySelector('.unir-toc-body');
              const header = card.querySelector('.unir-toc-header');
              const toggle = card.querySelector('.unir-section-toggle');
              if (body) body.removeAttribute('hidden');
              if (header) header.classList.add('open');
              if (toggle) toggle.setAttribute('aria-expanded', 'true');
            } else {
              card.style.display = 'none';
            }
          });

          if (searchCount) {
            searchCount.style.display = 'block';
            const lang = getActiveLanguage();
            searchCount.textContent = lang === 'es'
              ? `${totalMatches} tema${totalMatches === 1 ? '' : 's'} encontrado${totalMatches === 1 ? '' : 's'}`
              : `${totalMatches} topic${totalMatches === 1 ? '' : 's'} found`;
          }
        });

        if (searchClear) {
          searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchInput.dispatchEvent(new Event('input'));
            searchInput.focus();
          });
        }
      }

      // Codex (GPT-5) | 2026-08-23 21:19 CST | El Centro de estudio abre con todos los dominios y temas contraídos.
      let fcFiltered = [...flashcards];

      let isSRSEnabled = false;

      function renderFlashcardMode() {
        const panel = document.getElementById('unir-panel-flashcards');
        if (!panel) return;
        if (flashcards.length === 0) {
          panel.innerHTML = '<div style="text-align:center;color:var(--text-muted,#64748b);">No hay flashcards disponibles.</div>';
          return;
        }
        fcFiltered = isSRSEnabled && window.SRSManager ? window.SRSManager.getDueCards(flashcards) : [...flashcards];
        if (fcFiltered.length === 0) fcFiltered = [...flashcards];
        fcIdx = 0;

        const srsStats = window.SRSManager ? window.SRSManager.getStats(flashcards) : { due: 0, learned: 0 };

        panel.innerHTML = `
          <div class="unir-fc-wrap">
            <!-- SRS & Podcast Mode Toolbar -->
            <div style="margin-bottom:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:center;">
              <div id="unir-srs-status-pill" style="font-size:0.82rem;background:rgba(49,87,213,0.08);border:1px solid #3157d5;padding:5px 14px;border-radius:16px;color:var(--text-color);font-weight:600;display:flex;align-items:center;gap:6px;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="#3157d5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Repaso SRS: <strong>${srsStats.due}</strong> pendientes hoy</span>
              </div>
              <button type="button" class="btn btn-sm ${isSRSEnabled ? 'btn-primary' : 'btn-outline'}" onclick="window._unirToggleSRS()" style="border-radius:16px;font-size:0.82rem;padding:5px 14px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>
                <span>${isSRSEnabled ? 'Modo Repaso Hoy (Activo)' : 'Filtrar Repaso Hoy (SRS)'}</span>
              </button>
              <button type="button" class="btn btn-sm btn-primary" onclick="window.PodcastMode.start(fcFiltered, fcIdx)" style="border-radius:16px;font-size:0.82rem;padding:5px 16px;cursor:pointer;display:inline-flex;align-items:center;gap:6px;">
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0114 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z"/></svg>
                <span>Iniciar Modo Podcast</span>
              </button>
            </div>

            <div style="margin-bottom:16px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:center;">
              <select id="unir-fc-filter" onchange="window._unirFilterFC()" style="padding:7px 14px;border-radius:20px;border:1px solid var(--border-color,#e5e7eb);font-size:0.85rem;background:var(--bg-card,#fff);color:var(--text-color,#333);">
                <option value="all">Todos los temas</option>
                ${[...new Set(flashcards.map(f => f.tema))].map(t => `<option value="${t}">${t}</option>`).join('')}
              </select>
              <button class="unir-fc-btn" onclick="window._unirShuffleFC()" title="Aleatorio" style="width:36px;height:36px;">${svgIcon(SVG.shuffle, 16)}</button>
            </div>

            <div class="unir-fc-card" id="unir-fc-card" onclick="this.classList.toggle('flipped')">
              <div class="unir-fc-inner">
                <div class="unir-fc-face unir-fc-front">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
                    <div id="unir-fc-tema" style="text-transform:uppercase;font-size:0.78rem;letter-spacing:1px;opacity:0.7;"></div>
                    <button type="button" class="unir-fc-speak-btn" onclick="window._unirSpeakCurrentFC('front', event)" title="Escuchar en audio" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:30px;height:30px;color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                    </button>
                  </div>
                  <div id="unir-fc-question" style="font-size:1.35rem;font-weight:700;text-align:center;line-height:1.5;"></div>
                  <div style="margin-top:24px;font-size:0.8rem;opacity:0.5;display:flex;align-items:center;gap:6px;">${svgIcon(SVG.flip, 14, 'rgba(255,255,255,0.5)')} Clic para voltear</div>
                </div>
                <div class="unir-fc-face unir-fc-back">
                  <div style="display:flex;justify-content:flex-end;margin-bottom:12px;">
                    <button type="button" class="unir-fc-speak-btn" onclick="window._unirSpeakCurrentFC('back', event)" title="Escuchar respuesta" style="background:rgba(255,255,255,0.15);border:none;border-radius:50%;width:30px;height:30px;color:#fff;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;">
                      <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>
                    </button>
                  </div>
                  <div id="unir-fc-answer" style="font-size:1.05rem;line-height:1.7;text-align:left;"></div>
                </div>
              </div>
            </div>
            <div class="unir-fc-nav">
              <button class="unir-fc-btn" onclick="window._unirPrevFC()">&#8249;</button>
              <span class="unir-fc-count" id="unir-fc-count">1 / ${fcFiltered.length}</span>
              <button class="unir-fc-btn primary" onclick="window._unirNextFC()">&#8250;</button>
            </div>
            <div class="unir-fc-actions">
              <button class="unir-fc-diff-btn easy" onclick="window._unirRateFC('easy')">${svgIcon(SVG.thumbUp, 13)} Fácil (+6d)</button>
              <button class="unir-fc-diff-btn medium" onclick="window._unirRateFC('medium')">${svgIcon(SVG.star, 13)} Regular (+3d)</button>
              <button class="unir-fc-diff-btn hard" onclick="window._unirRateFC('hard')">${svgIcon(SVG.thumbDown, 13)} Difícil (+1d)</button>
            </div>
          </div>
        `;
        loadFC();
      }

      window._unirToggleSRS = function() {
        isSRSEnabled = !isSRSEnabled;
        renderFlashcardMode();
      };

      window._unirSpeakCurrentFC = function(side, e) {
        if (e && e.stopPropagation) e.stopPropagation();
        if (!fcFiltered || fcFiltered.length === 0) return;
        const fc = fcFiltered[fcIdx];
        if (!fc) return;
        const text = side === 'front' ? (fc.front || fc.pregunta) : (fc.back || fc.respuesta);
        window.speakText(text, getActiveLanguage());
      };

      function loadFC() {
        if (!fcFiltered || fcFiltered.length === 0) return;
        const fc = fcFiltered[fcIdx];
        const card = document.getElementById('unir-fc-card');
        if (card) card.classList.remove('flipped');
        const temaEl = document.getElementById('unir-fc-tema');
        const qEl = document.getElementById('unir-fc-question');
        const aEl = document.getElementById('unir-fc-answer');
        const countEl = document.getElementById('unir-fc-count');
        if (temaEl) temaEl.innerHTML = bilingualMarkup(fc.tema);
        if (qEl) {
          if (fc.front) qEl.innerHTML = fc.front;
          else qEl.textContent = fc.pregunta;
        }
        if (aEl) aEl.innerHTML = fc.back || fc.respuesta;
        if (countEl) countEl.textContent = `${fcIdx + 1} / ${fcFiltered.length}`;
        const panelEl = document.getElementById('unir-panel-flashcards');
        if (studyI18n && panelEl) studyI18n.apply(panelEl);
      }

      window._unirNextFC = function() {
        if (fcIdx < fcFiltered.length - 1) { fcIdx++; loadFC(); }
        mastery.flashcardsViewed++;
        addXP(2);
        syncToGlobal('flashcard');
      };
      window._unirPrevFC = function() {
        if (fcIdx > 0) { fcIdx--; loadFC(); }
      };
      window._unirShuffleFC = function() {
        fcFiltered = [...fcFiltered].sort(() => Math.random() - 0.5);
        fcIdx = 0;
        loadFC();
      };
      window._unirFilterFC = function() {
        const sel = document.getElementById('unir-fc-filter');
        const v = sel ? sel.value : 'all';
        fcFiltered = v === 'all' ? [...flashcards] : flashcards.filter(f => f.tema === v);
        fcIdx = 0;
        loadFC();
      };
      window._unirRateFC = function(difficulty) {
        const xpMap = { easy: 1, medium: 3, hard: 5 };
        addXP(xpMap[difficulty] || 1);
        syncToGlobal('flashcard');
        if (window.SRSManager && fcFiltered[fcIdx]) {
          window.SRSManager.processReview(fcFiltered[fcIdx], difficulty);
        }
        if (fcIdx < fcFiltered.length - 1) { fcIdx++; loadFC(); }
      };

      // Achievement rendering — all SVG, no emojis
      function renderAchievements() {
        const panel = document.getElementById('unir-panel-achievements');
        panel.innerHTML = `
          <div style="max-width:800px;margin:0 auto;">
            <h2 style="color:var(--text-color,#1e293b);margin-bottom:8px;display:flex;align-items:center;gap:10px;">${svgIcon(SVG.trophy, 24, 'var(--primary-color,#3157d5)')} Logros del Dojo</h2>
            <p style="color:var(--text-muted,#64748b);margin-bottom:20px;">Desbloqueados: ${mastery.achievements.length}/${achievementsDef.length}</p>
            <div class="unir-ach-grid">
              ${achievementsDef.map(a => {
                const unlocked = mastery.achievements.includes(a.id);
                const isSecret = a.desc === '???';
                const showName = (isSecret && !unlocked) ? 'Misterioso' : a.name;
                const showDesc = (isSecret && !unlocked) ? 'Descubre c\u00f3mo desbloquearlo...' : a.desc;
                const showIcon = (isSecret && !unlocked) ? 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z' : a.icon;
                return `<div class="unir-ach-card ${unlocked ? 'unlocked' : 'locked'}${isSecret && !unlocked ? ' secret-ach' : ''}" style="${isSecret && !unlocked ? 'border:1px dashed var(--border-color);background:var(--bg-card);' : ''}">
                  ${svgIcon(showIcon, 32, unlocked ? 'var(--primary-color,#3157d5)' : 'var(--text-muted,#667085)', 'style="margin-bottom:8px;"')}
                  <div style="font-weight:700;font-size:0.88rem;margin-bottom:4px;${isSecret && !unlocked ? 'font-style:italic;color:var(--text-muted);' : ''}">${showName}</div>
                  <div style="font-size:0.78rem;color:var(--text-muted,#64748b);">${showDesc}</div>
                  ${unlocked ? `<div style="margin-top:6px;font-size:0.7rem;color:var(--success-color);font-weight:600;display:flex;align-items:center;justify-content:center;gap:4px;">${svgIcon(SVG.check, 12)} Completado</div>` : ''}
                </div>`;
              }).join('')}
            </div>
          </div>
        `;
      }

      // Keyboard shortcuts for flashcards
      const unirKeyHandler = (e) => {
        const fcPanel = document.getElementById('unir-panel-flashcards');
        if (fcPanel && fcPanel.style.display !== 'none') {
          if (e.code === 'Space') { e.preventDefault(); const c = document.getElementById('unir-fc-card'); if(c) c.classList.toggle('flipped'); }
          if (e.code === 'ArrowRight') window._unirNextFC();
          if (e.code === 'ArrowLeft') window._unirPrevFC();
        }
      };
      document.addEventListener('keydown', unirKeyHandler);

      // Store cleanup ref
      studyScreen._unirKeyHandler = unirKeyHandler;

      updateMasteryUI();
      return;
    }

    // DP-600 now uses the Dojo inline renderer above (migrated from iframe)

    // Fallback for other courses (Old Logic)
    if (!window.studyData || !window.studyData[courseId]) return;

    const fallbackData = window.studyData[courseId];
    const conf = courseConfig[courseId] || {};

    // Hide Menu, Show Study
    startScreen.classList.add("hidden");
    document.getElementById("study-screen").classList.remove("hidden");

    document.getElementById("study-course-title").textContent =
      "Material de Estudio: " + courseId.toUpperCase();

    // Render TOC
    const tocContainer = document.getElementById("study-toc");
    tocContainer.innerHTML = "";

    fallbackData.forEach((section, docIdx) => {
      const h4 = document.createElement("h4");
      h4.textContent = section.title;
      tocContainer.appendChild(h4);

      const ul = document.createElement("ul");
      section.items.forEach((item, itemIdx) => {
        const li = document.createElement("li");
        li.textContent = item.title;
        li.onclick = () => showStudyContent(courseId, docIdx, itemIdx, li);
        ul.appendChild(li);
      });
      tocContainer.appendChild(ul);
    });

    // Show first item by default
    if (fallbackData.length > 0 && fallbackData[0].items.length > 0) {
      const firstLi = tocContainer.querySelector("li");
      if (firstLi) firstLi.click();
    } else {
      document.getElementById("study-item-title").textContent =
        "Seleccione un tema";
      document.getElementById("study-item-body").textContent = "";
    }
  };

  window.closeStudyMode = function () {
    const studyScreen = document.getElementById("study-screen");
    const startScreen = document.getElementById("start-screen");

    studyScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");

    // Codex (GPT-5) | 2026-08-23 20:35 CST | Restaura el acento global único al salir del estudio.
    setGlobalTheme();

    // Cleanup UNIR study mode keyboard handler
    if (studyScreen._unirKeyHandler) {
      document.removeEventListener('keydown', studyScreen._unirKeyHandler);
      studyScreen._unirKeyHandler = null;
    }

    // Reset content to default structure to avoid iframe buildup or state issues
    // We verify if the default structure exists, if not we recreate it (simple reset)
    // For cleanliness, we reset if it was an iframe or UNIR custom layout
    if (studyScreen.querySelector("iframe") || studyScreen.querySelector(".unir-root")) {
      studyScreen.innerHTML = `
                <div class="study-layout">
                <aside class="study-sidebar">
                    <button class="btn btn-secondary btn-sm" id="study-back-btn" type="button" style="margin-bottom:1rem; width:100%;">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                      Volver al menú
                    </button>
                    <h3 id="study-course-title">Material de Estudio</h3>
                    <div id="study-toc" class="study-toc"></div>
                </aside>
                <main class="study-content">
                    <h2 id="study-item-title">Seleccione un tema</h2>
                    <div id="study-item-body" class="study-body-text"></div>
                </main>
                </div>
             `;
      bindStudyBackButton();
    }
  };

  function showStudyContent(courseId, docIdx, itemIdx, liRel) {
    // Highlight active
    document
      .querySelectorAll(".study-toc li")
      .forEach((l) => l.classList.remove("active-topic"));
    if (liRel) liRel.classList.add("active-topic");

    const item = window.studyData[courseId][docIdx].items[itemIdx];
    document.getElementById("study-item-title").textContent = item.title;
    document.getElementById("study-item-body").innerHTML = item.content;
  }

  function bindStudyBackButton() {
    const studyBackBtn = document.getElementById("study-back-btn");
    if (studyBackBtn) studyBackBtn.onclick = window.closeStudyMode;
  }

  bindStudyBackButton();

  // --- Keyboard Shortcuts ---
  document.addEventListener("keydown", (e) => {
      // Ignore if modal is open or typing in input
      if (document.querySelector("dialog[open]")) return;
      if (document.querySelector(".modal:not(.hidden)")) return;
      if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;
      if (quizUI.classList.contains("hidden")) return; // Only if in quiz

      switch(e.key) {
          case "ArrowRight":
              navigate(1);
              break;
          case "ArrowLeft":
              navigate(-1);
              break;
          case "f":
          case "F":
              toggleFlagCurrentQuestion();
              break;
          case "v":
          case "V":
              toggleSplitPaneView();
              break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
              // Select option logic
              const q = currentQuizQuestions[currentQuestionIndex];
              if (q && q.options) {
                  const idx = parseInt(e.key) - 1;
                  if (idx >= 0 && idx < q.options.length) {
                      selectOption(currentQuestionIndex, q.options[idx].id);
                      updateQuestionMap(); // Refresh map
                  }
              }
              break;
          case "Enter":
              // "Smart" Enter:
              // 1. If "Check Answer" is visible and not clicked -> Click it
              // 2. If "Next" is visible -> Click it
              // 3. If Last Question -> Trigger Finish Logic
              
              const checkBtn = document.getElementById("check-answer-btn");
              const nextBtn = document.getElementById("next-btn");
              const finishBtn = document.getElementById("finish-btn-top"); // or bottom
              
              const isCheckVisible = checkBtn && !checkBtn.classList.contains("hidden");
              const isNextVisible = nextBtn && !nextBtn.classList.contains("hidden"); // check style.visibility too?
              
              // In this app, hidden is class 'hidden'.
              // But check logic:
              // If we are in "Real Exam", check button might be hidden or disabled?
              // Let's assume standard flow.
              
              if (isCheckVisible) {
                  checkBtn.click();
              } else if (isNextVisible) {
                  navigate(1); // Same as clicking next
              } else if (currentQuestionIndex === currentQuizQuestions.length - 1) {
                  // Last question, maybe Finish?
                  // Let's rely on user clicking Finish explicitly to avoid accidents, 
                  // or trigger the confirmation modal logic.
                  tryFinishQuiz();
              }
              break;
      }
  });

  window.loadHistoryReview = function(id) {
      const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
      const item = history.find(h => h.id === id);
      if (!item || !item.questionIds) {
          alert("Detailed history not available for this exam.");
          return;
      }

      // 1. Reconstruct Questions
      let allQuestions = [];
      if (window.questionData) {
           Object.values(window.questionData).forEach(arr => allQuestions.push(...arr));
      } else {
           console.error("No question data found"); 
           return;
      }
      
      currentQuizQuestions = item.questionIds.map(qid => allQuestions.find(q => q.id === qid)).filter(q => q);
      
      // 2. Restore Answers
      userAnswers = item.userAnswers || {};

      // 3. Switch View
      if(document.getElementById("history-screen")) document.getElementById("history-screen").classList.add("hidden");
      if(document.getElementById("results-screen")) document.getElementById("results-screen").classList.remove("hidden");
      
      // 4. Update Header
      if(document.getElementById("final-score")) document.getElementById("final-score").textContent = item.score;
      
      const resMsg = document.getElementById("result-message");
      if (resMsg) { 
        resMsg.textContent = "Historical Review - " + item.date;
        resMsg.className = item.passed ? "text-success" : "text-danger";
      }
      
      // 5. Render Components
      // We need to ensure these functions exist and work with global state we just set
      if(typeof renderDomainBreakdown === 'function') renderDomainBreakdown();
      // renderReview usually takes an argument in some versions, but looking at source it operates on globals or args.
      // Line 1382 calls showResults -> renderReview(questions). 
      // So detailed review needs renderReview to accept questions.
      // Let's assume renderReview(currentQuizQuestions) works.
      if(typeof renderReview === 'function') renderReview(currentQuizQuestions);
  };

  // --- PROFILE & PERSISTENCE ---
  window.getProfile = function() {
      return JSON.parse(localStorage.getItem("userProfile") || '{"name":"","nick":"","certs":{}}');
  };

  window.openProfile = function() {
      const p = window.getProfile();
      document.getElementById('profile-fullname').value = p.name || "";
      document.getElementById('profile-nick').value = p.nick || "";
      
      // Certs
      const certs = p.certs || {};
      const cb1 = document.getElementById('cert-databricks-da');
      const cb2 = document.getElementById('cert-dp-600');
      const cb3 = document.getElementById('cert-azure-ai-103');
      if(cb1) cb1.checked = !!certs['databricks-da'];
      if(cb2) cb2.checked = !!certs['dp-600'];
      if(cb3) cb3.checked = !!certs['azure-ai-103'];
      
      document.getElementById('profile-modal').classList.remove('hidden');
  };

  window.saveProfile = function() {
      const name = document.getElementById('profile-fullname').value;
      const nick = document.getElementById('profile-nick').value;
      
      const cb1 = document.getElementById('cert-databricks-da');
      const cb2 = document.getElementById('cert-dp-600');
      const cb3 = document.getElementById('cert-azure-ai-103');

      const certs = {
          'databricks-da': cb1 ? cb1.checked : false,
          'dp-600': cb2 ? cb2.checked : false,
          'azure-ai-103': cb3 ? cb3.checked : false
      };

      const p = { name, nick, certs };
      localStorage.setItem("userProfile", JSON.stringify(p));
      
      // Force HeroManager to reload and update immediately
      if(window.HeroManager) {
          window.HeroManager.data.profile = { ...window.HeroManager.data.profile, ...p };
          window.HeroManager.save(); // This also calls updateDashboard
          window.HeroManager.updateDashboard();
      }
      
      if(typeof window.renderProgressDashboard === 'function') {
          window.renderProgressDashboard();
      }
      
      window.updateGreeting(); // Legacy header update
      document.getElementById('profile-modal').classList.add('hidden');
      alert("Perfil actualizado! Tus datos de Hero se han refrescado.");
  };

  window.updateGreeting = function() {
      const p = window.getProfile();
      const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
      const xp = calculateXP(stats);
      const belt = getBelt(xp);
      const nextBelt = beltsConfig[beltsConfig.indexOf(belt) + 1];
      
      const title = document.getElementById('app-title');
      const brand = "The Data Dojo";
      const toriiSvg = `<svg viewBox="0 0 64 64" width="24" height="24" fill="currentColor" style="opacity:0.9; flex-shrink:0;"><rect x="8" y="8" width="48" height="6" rx="2"/><rect x="4" y="6" width="56" height="4" rx="2"/><rect x="14" y="14" width="36" height="4" rx="1"/><rect x="12" y="14" width="4" height="46" rx="1"/><rect x="48" y="14" width="4" height="46" rx="1"/><rect x="6" y="56" width="16" height="4" rx="1"/><rect x="42" y="56" width="16" height="4" rx="1"/></svg>`;
      
      // Header: just torii + brand (clean, same size)
      if (title) {
          title.innerHTML = `<div style="display:flex; align-items:center; gap:10px;">${toriiSvg}<span style="font-size:1.3rem; letter-spacing:0.5px;">${brand}</span></div>`;
          title.parentElement.style.display = "flex";
          title.parentElement.style.alignItems = "center";
      }

      // Profile Card: belt, XP, avatar in the menu area
      const profileCard = document.getElementById('menu-profile-card');
      if (profileCard && p.nick) {
          const xpText = nextBelt ? `${xp}/${nextBelt.minXP} XP` : `${xp} XP (Max)`;
          const xpPercent = nextBelt ? Math.min(100, Math.round((xp / nextBelt.minXP) * 100)) : 100;
          const initials = p.nick.split(' ').map(w => w[0]).join('').toUpperCase().slice(0,2);
          const avatarColor = belt.color || '#1e293b';
          // Use a visible gradient for very light belt colors (white belt)
          const isLightBelt = belt.color === '#f0f0f0' || belt.color === '#ffffff' || !belt.color;
          const xpBarColor = isLightBelt ? '#3157d5' : avatarColor;
          const savedPhoto = localStorage.getItem('profilePhoto');
          const avatarContent = savedPhoto 
              ? `<img src="${savedPhoto}" alt="Foto de perfil"/>${initials}` 
              : initials;
          
          profileCard.innerHTML = `
            <div class="profile-avatar" style="background:${avatarColor};" onclick="document.getElementById('avatar-upload-input').click();" title="Haz clic para cambiar tu foto de perfil">
                ${avatarContent}
                <span class="avatar-upload-hint">FOTO</span>
            </div>
            <div class="profile-info">
                <div class="profile-name">Hola, ${p.nick}!</div>
                <div class="profile-belt">
                    <span style="display:inline-flex;">${getBeltSvgIcon(belt)}</span>
                    ${belt.name}
                </div>
            </div>
            <div class="xp-section">
                <div class="xp-bar"><div class="xp-bar-fill" style="width:${xpPercent}%; background:${xpBarColor};"></div></div>
                <span class="xp-text">${xpText}</span>
            </div>`;

          // Create hidden file input if it doesn't exist
          if (!document.getElementById('avatar-upload-input')) {
              const fileInput = document.createElement('input');
              fileInput.type = 'file';
              fileInput.id = 'avatar-upload-input';
              fileInput.accept = 'image/*';
              fileInput.style.display = 'none';
              fileInput.addEventListener('change', function(e) {
                  const file = e.target.files[0];
                  if (!file) return;
                  if (file.size > 5000000) {
                      alert('La imagen es muy grande. Máximo 5MB.');
                      return;
                  }
                  const reader = new FileReader();
                  reader.onload = function(ev) {
                      openCropModal(ev.target.result);
                  };
                  reader.readAsDataURL(file);
                  fileInput.value = ''; // Reset for re-upload
              });
              document.body.appendChild(fileInput);
          }
      } else if (profileCard) {
          profileCard.innerHTML = '';
      }
  };

  // --- PHOTO CROP MODAL ---
  window.openCropModal = function(imageSrc) {
      // Remove existing modal
      const existing = document.getElementById('crop-modal');
      if (existing) existing.remove();

      const modal = document.createElement('div');
      modal.id = 'crop-modal';
      modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;';
      
      modal.innerHTML = `
        <div style="background:var(--card-bg,#fff);border-radius:16px;padding:24px;max-width:500px;width:90%;text-align:center;position:relative;">
            <h3 style="margin:0 0 8px;font-size:1.1rem;color:var(--text-color,#1e293b);">Ajustar foto de perfil</h3>
            <p style="margin:0 0 16px;font-size:0.8rem;opacity:0.6;">Arrastra el recuadro para elegir la zona del rostro</p>
            <div id="crop-container" style="position:relative;display:inline-block;max-width:100%;max-height:400px;overflow:hidden;border-radius:8px;cursor:default;user-select:none;">
                <img id="crop-image" src="${imageSrc}" style="display:block;max-width:100%;max-height:380px;" draggable="false"/>
                <div id="crop-overlay" style="position:absolute;border:3px solid #3157d5;border-radius:50%;cursor:move;box-shadow:0 0 0 9999px rgba(0,0,0,0.5);background:transparent;"></div>
            </div>
            <div style="display:flex;gap:12px;justify-content:center;margin-top:16px;">
                <button id="crop-cancel" style="padding:8px 24px;border:1px solid var(--border-color,#ddd);border-radius:8px;background:transparent;cursor:pointer;font-size:0.85rem;color:var(--text-color,#333);">Cancelar</button>
                <button id="crop-save" style="padding:8px 24px;border:none;border-radius:8px;background:#3157d5;color:white;cursor:pointer;font-size:0.85rem;font-weight:600;">Guardar</button>
            </div>
        </div>`;
      
      document.body.appendChild(modal);

      const cropImg = document.getElementById('crop-image');
      const cropOverlay = document.getElementById('crop-overlay');
      
      cropImg.onload = function() {
          const rect = cropImg.getBoundingClientRect();
          const containerEl = document.getElementById('crop-container');
          const contRect = containerEl.getBoundingClientRect();
          
          const imgW = rect.width;
          const imgH = rect.height;
          const cropSize = Math.min(imgW, imgH, 200);
          
          let cropX = (imgW - cropSize) / 2;
          let cropY = (imgH - cropSize) / 2;
          
          cropOverlay.style.width = cropSize + 'px';
          cropOverlay.style.height = cropSize + 'px';
          cropOverlay.style.left = cropX + 'px';
          cropOverlay.style.top = cropY + 'px';

          // Drag logic
          let isDragging = false;
          let startX, startY, startLeft, startTop;

          cropOverlay.addEventListener('mousedown', function(e) {
              isDragging = true;
              startX = e.clientX;
              startY = e.clientY;
              startLeft = cropX;
              startTop = cropY;
              e.preventDefault();
          });

          document.addEventListener('mousemove', function(e) {
              if (!isDragging) return;
              const dx = e.clientX - startX;
              const dy = e.clientY - startY;
              cropX = Math.max(0, Math.min(imgW - cropSize, startLeft + dx));
              cropY = Math.max(0, Math.min(imgH - cropSize, startTop + dy));
              cropOverlay.style.left = cropX + 'px';
              cropOverlay.style.top = cropY + 'px';
          });

          document.addEventListener('mouseup', function() {
              isDragging = false;
          });

          // Touch support
          cropOverlay.addEventListener('touchstart', function(e) {
              isDragging = true;
              const t = e.touches[0];
              startX = t.clientX;
              startY = t.clientY;
              startLeft = cropX;
              startTop = cropY;
              e.preventDefault();
          });

          document.addEventListener('touchmove', function(e) {
              if (!isDragging) return;
              const t = e.touches[0];
              const dx = t.clientX - startX;
              const dy = t.clientY - startY;
              cropX = Math.max(0, Math.min(imgW - cropSize, startLeft + dx));
              cropY = Math.max(0, Math.min(imgH - cropSize, startTop + dy));
              cropOverlay.style.left = cropX + 'px';
              cropOverlay.style.top = cropY + 'px';
          });

          document.addEventListener('touchend', function() {
              isDragging = false;
          });

          // Save
          document.getElementById('crop-save').onclick = function() {
              const canvas = document.createElement('canvas');
              const outputSize = 200;
              canvas.width = outputSize;
              canvas.height = outputSize;
              const ctx = canvas.getContext('2d');

              // Calculate source coordinates relative to natural image size
              const scaleX = cropImg.naturalWidth / imgW;
              const scaleY = cropImg.naturalHeight / imgH;
              
              ctx.drawImage(cropImg, 
                  cropX * scaleX, cropY * scaleY, 
                  cropSize * scaleX, cropSize * scaleY,
                  0, 0, outputSize, outputSize
              );

              const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
              localStorage.setItem('profilePhoto', dataUrl);
              modal.remove();
              window.updateGreeting();
          };
      };
      
      // Cancel
      document.getElementById('crop-cancel').onclick = function() {
          modal.remove();
      };
      
      // Click outside to close
      modal.addEventListener('click', function(e) {
          if (e.target === modal) modal.remove();
      });
  };

  // --- BACKUP SYSTEM (F18: Full Progress Export/Import) ---
  window.exportData = function() {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          if (key) {
              const val = localStorage.getItem(key);
              try { data[key] = JSON.parse(val); } catch(e) { data[key] = val; }
          }
      }

      data._exportDate = new Date().toISOString();
      data._appVersion = 'Data Dojo V3';
      data._totalKeys = Object.keys(data).filter(k => !k.startsWith('_')).length;

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = url;
      a.download = `data_dojo_backup_${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
  };

  window.importData = function(input) {
      const file = input.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
          try {
              const data = JSON.parse(e.target.result);

              // Validate backup
              if (!data._exportDate && !data.quizHistory && !data.userStats) {
                  alert('El archivo no es un backup válido de Data Dojo.');
                  return;
              }

              const dateStr = data._exportDate
                  ? new Date(data._exportDate).toLocaleDateString()
                  : 'fecha desconocida';
              const version = data._appVersion || 'versión anterior';
              const keyCount = data._totalKeys || Object.keys(data).filter(k => !k.startsWith('_')).length;

              if (!confirm(`¿Importar backup de ${dateStr} (${version})?\n${keyCount} categorías de datos.\n\nEsto reemplazará tu progreso actual.`)) return;

              // Restore each key
              Object.keys(data).forEach(key => {
                  if (key.startsWith('_')) return;
                  localStorage.setItem(key, typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]));
              });

              alert('Progreso importado exitosamente. La página se recargará.');
              location.reload();
          } catch (err) {
              alert('Error al leer el archivo de respaldo: ' + err.message);
          }
      };
      reader.readAsText(file);
  };

  // Initial Greeting Update
  window.updateGreeting();

  // --- AUDIO SYSTEM — M3: Unified via SoundFX bridge ---
  window.SoundManager = {
      muted: localStorage.getItem("soundMuted") === "true",
      
      play: function(type) {
          // M3: Delegate to SoundFX (features.js) to avoid duplicated audio code
          if (typeof SoundFX !== 'undefined') {
              switch (type) {
                  case 'correct': SoundFX.playCorrect(); break;
                  case 'wrong': SoundFX.playIncorrect(); break;
                  case 'badge': SoundFX.playLevelUp(); break;
              }
          }
      },

      triggerConfetti: function() {
        const canvas = document.createElement('canvas');
        canvas.style.position = 'fixed';
        canvas.style.top = '0'; canvas.style.left = '0';
        canvas.style.width = '100vw'; canvas.style.height = '100vh';
        canvas.style.zIndex = '9999'; canvas.style.pointerEvents = 'none';
        document.body.appendChild(canvas);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth; canvas.height = window.innerHeight;
        const p = [];
        for(let i=0; i<150; i++) p.push({x:canvas.width/2, y:canvas.height/2, vx:(Math.random()-0.5)*20, vy:(Math.random()-0.5)*20, c:`hsl(${Math.random()*360},100%,50%)`, life:1});
        function t(){
            ctx.clearRect(0,0,canvas.width,canvas.height); 
            let a=false; 
            p.forEach(k=>{
                if(k.life>0){a=true; k.x+=k.vx; k.y+=k.vy; k.vy+=0.5; k.life-=0.015; ctx.fillStyle=k.c; ctx.globalAlpha=k.life; ctx.fillRect(k.x,k.y,8,8);}
            }); 
            if(a)requestAnimationFrame(t); else document.body.removeChild(canvas);
        }
        t();
    },
      
      toggleMute: function() {
          this.muted = !this.muted;
          localStorage.setItem("soundMuted", this.muted);
          return this.muted;
      }
  };

    init();

    // --- EASTER EGGS ---
    // --- EXPOSE QUIZ STATE SETTERS FOR EXTERNAL FEATURES (F1-F3) ---
    window._setQuizState = function(questions, isRealMode) {
        currentQuizQuestions = questions;
        currentQuestionIndex = 0;
        score = 0;
        userAnswers = {};
        isRealExam = isRealMode || false;

        // Init Timer (90s per question unless overridden by countdown)
        if (!isRealMode) {
            totalSeconds = questions.length * 90;
            startTimer();
        } else {
            // Real exam mode: countdown timer from features.js handles timing
            clearInterval(timerInterval);
        }
        renderQuestionMap();
        // F12: Reset time tracking for new quiz
        if (typeof resetQuestionTimings === 'function') resetQuestionTimings();
        loadQuestion(0);
        saveState();
    };

    window._loadQuizQuestion = function(idx) {
        loadQuestion(idx);
    };

    window.tryFinishQuiz = function() {
        tryFinishQuiz();
    };

    // --- EASTER EGGS ---
    const configSearchInput = document.getElementById("config-search");
    if (configSearchInput) {
        configSearchInput.addEventListener("input", (e) => {
            const val = e.target.value.toUpperCase().trim();
            if (val === "SELECT * FROM ANSWERS") {
                e.target.value = ""; // Clear trace
                unlockBadge("hacker");
                alert("ACCESS GRANTED: HACKER MODE ENABLED (Just kidding, but you found a secret!)");
            } else if (val === "SUDO MODE") {
                e.target.value = "";
                if (window.SoundManager) window.SoundManager.play('badge');
                alert("GOD MODE: ACTIVATED");
            }
        });
    }
});

function unlockBadge(id) {
    const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
    if (!stats.badges) stats.badges = [];
    
    // Check if already has it
    if (stats.badges.find(b => b.id === id)) return; // Already unlocked

    // Define Secret Badges if not in main config (or map them)
    const secretBadges = {
        "hacker": { 
             id: "hacker", name: "Hacker", icon: "hacker", desc: "Encontraste el código secreto", rarity: "platinum" 
        }
    };
    
    const badge = secretBadges[id];
    if (badge) {
        stats.badges.push({ 
            id: badge.id, 
            date: new Date().toLocaleDateString(),
            icon: badge.icon,
            name: badge.name 
        });
        saveGamificationStats(stats);
        
        // Trigger generic unlock effects
        if (window.SoundManager) window.SoundManager.play('badge');
        setTimeout(() => alert(`SECRETO DESBLOQUEADO!\n\n${badge.name}`), 500);
        if (window.updateGreeting) window.updateGreeting();
    }
}

window.toggleSound = function() {
    if (window.SoundManager) {
        const isMuted = window.SoundManager.toggleMute();
        const btn = document.getElementById('sound-toggle-btn');
        if (btn) btn.innerHTML = isMuted ? '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>' : '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>';
    }
};

// --- PWA Registration ---
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW Registered'))
      .catch(err => console.log('SW Failed', err));
  });
}
// Bind global alias
if (window.SoundManager && window.SoundManager.triggerConfetti) {
    window.triggerConfetti = () => window.SoundManager.triggerConfetti();
}

window.toggleZenMode = function() {
    const body = document.body;
    body.classList.toggle('zen-mode');
    
    if (body.classList.contains('zen-mode')) {
        // Add floating exit button
        const btn = document.createElement('button');
        btn.id = 'zen-exit';
        btn.className = 'zen-exit-btn';
        btn.innerHTML = '<svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style="vertical-align:middle;margin-right:4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> Exit Zen';
        btn.onclick = window.toggleZenMode;
        body.appendChild(btn);
        
        // Notification
        const notif = document.createElement('div');
        notif.style.position = 'fixed'; notif.style.top = '50%'; notif.style.left = '50%'; 
        notif.style.transform = 'translate(-50%, -50%)'; notif.style.background = 'rgba(0,0,0,0.8)';
        notif.style.color = 'white'; notif.style.padding = '20px 40px'; notif.style.borderRadius = '10px';
        notif.style.zIndex = '10000'; notif.innerText = 'Zen Mode Activated (Press Esc to exit)';
        body.appendChild(notif);
        setTimeout(() => body.removeChild(notif), 2000);
        
        // Listener for ESC
        const escHandler = (e) => {
            if (e.key === 'Escape') {
                window.toggleZenMode();
                document.removeEventListener('keydown', escHandler);
            }
        };
        document.addEventListener('keydown', escHandler);
        
    } else {
        const btn = document.getElementById('zen-exit');
        if(btn) body.removeChild(btn);
    }
};

window.updateSensei = function() {
    const stats = JSON.parse(localStorage.getItem('userStats') || '{}');
    const streak = stats.streak || 0;
    const questions = stats.questionsAnswered || 0;
    
    // Advice Pool
    const wisdom = [
        "El dato que buscas está en la pregunta, no en la respuesta.",
        "Un JOIN mal hecho es como un café sin cafeína: decepcionante.",
        "La paciencia es amarga, pero sus frutos son dulces... como un query optimizado.",
        "No temas al NULL, teme no saber cómo manejarlo.",
        "El verdadero maestro revisa sus errores más que sus aciertos.",
        "Cada fallo es un escalón hacia el Cinturón Negro.",
        "La consistencia vence a la intensidad. Sigue así."
    ];
    
    let msg = wisdom[Math.floor(Math.random() * wisdom.length)];
    
    // Dynamic Overrides
    if (streak > 5) msg = "¡Tu Ki está ardiendo! Mantén esa racha.";
    if (questions > 100 && streak < 2) msg = "Incluso los sabios tropiezan. Levántate y sigue.";
    if (streak === 0) msg = "El mejor momento para empezar fue ayer. El segundo mejor es ahora.";
    
    // DOM Update
    const widget = document.querySelector('#sensei-widget div:last-child');
    if(widget) widget.innerText = `"${msg}"`;
};

// Hook into updates
const originalUpdate = window.updateGreeting;
window.updateGreeting = function() {
    if(originalUpdate) originalUpdate();
    if(window.updateSensei) window.updateSensei();
};

// --- DOJO LIBRARY SYSTEM ---
window.switchModalTab = function(tab) {
    const badgesView = document.getElementById('view-badges');
    const libraryView = document.getElementById('view-library');
    const btnBadges = document.getElementById('tab-badges-btn');
    const btnLibrary = document.getElementById('tab-library-btn');
    
    if(tab === 'badges') {
        badgesView.style.display = 'block';
        libraryView.style.display = 'none';
        btnBadges.classList.replace('btn-outline', 'btn-primary');
        btnLibrary.classList.replace('btn-primary', 'btn-outline');
    } else {
        badgesView.style.display = 'none';
        libraryView.style.display = 'block';
        btnBadges.classList.replace('btn-primary', 'btn-outline');
        btnLibrary.classList.replace('btn-outline', 'btn-primary');
        renderLibrary();
    }
};

window.renderLibrary = function() {
    const container = document.getElementById('library-grid');
    container.innerHTML = '';
    
    // Get User Belt Level
    const stats = JSON.parse(localStorage.getItem("userStats") || "{}");
    const xp = stats.xp || 0;
    const currentBeltInfo = getBelt(xp);
    const userRank = currentBeltInfo.rank;

    const resources = [
        {
            id: 'sql_cheat',
            title: 'SQL Cheat Sheet',
            desc: 'Domina SELECT, JOIN, WINDOW y más.',
            type: 'PDF',
            reqRank: 2, // Orange Belt
            reqName: 'Orange Belt',
            link: '#sql-cheat-sheet',
            icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/></svg>',
            color: '#3157d5' // Codex (GPT-5) | 2026-08-23 21:32 CST | Recurso con el acento principal.
        },
        {
            id: 'git_guide',
            title: 'Git Commands',
            desc: 'Guía rápida de control de versiones.',
            type: 'PDF',
            reqRank: 3, // Green Belt
            reqName: 'Green Belt',
            link: '#', 
            icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93z"/></svg>',
            color: '#3157d5' // Codex (GPT-5) | 2026-08-23 21:32 CST | Recurso con el acento principal.
        },
        {
            id: 'spark_opt',
            title: 'Spark Optimization',
            desc: 'Trucos de rendimiento.',
            type: 'Guide',
            reqRank: 5, // Black Belt
            reqName: 'Black Belt',
            link: '#', 
            icon: '<svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"><path d="M7 2v11h3v9l7-12h-4l4-8z"/></svg>',
            color: '#3157d5' // Codex (GPT-5) | 2026-08-23 21:32 CST | Recurso con el acento principal.
        }
    ];
    
    // SORTING LOGIC: Unlocked First, then by Rank
    resources.sort((a, b) => {
        const aUnlocked = userRank >= a.reqRank;
        const bUnlocked = userRank >= b.reqRank;
        
        if (aUnlocked && !bUnlocked) return -1;
        if (!aUnlocked && bUnlocked) return 1;
        
        return a.reqRank - b.reqRank; // Ascending difficulty
    });

    resources.forEach(res => {
        const isUnlocked = userRank >= res.reqRank;
        
        const div = document.createElement("div");
        // Use badge-card class for identical layout/spacing
        div.className = "badge-card";
        
        // Manual styling to match specific Belt colors
        const opacity = isUnlocked ? '1' : '0.6';
        const filter = isUnlocked ? 'none' : 'grayscale(100%)';
        const border = isUnlocked ? `2px solid ${res.color}` : '1px dashed var(--secondary-color)';
        
        div.style.border = border;
        div.style.opacity = opacity;
        div.style.filter = filter;
        div.style.justifyContent = "space-between"; // Ensure button sticks to bottom if needed

        const actionBtn = isUnlocked
            ? `<a href="${res.link}" target="_blank" class="btn btn-sm btn-primary" style="width:100%; text-decoration:none;">Abrir ${res.type}</a>`
            : `<button class="btn btn-sm btn-secondary" style="width:100%; cursor:not-allowed;" disabled><svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle; margin-right:4px;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>Cinturón ${res.reqName}</button>`;

        div.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 5px;">${res.icon}</div>
            <div style="font-weight: bold; color: var(--text-color); text-align: center;">${res.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted, #64748b); text-align: center; flex: 1;">${res.desc}</div>
            <div style="width: 100%; margin-top: 10px;">
                ${actionBtn}
            </div>
        `;
        container.appendChild(div);
    });
};

// START EXAM HANDLER (GLOBAL FUNCTION - NUCLEAR FIX)
window.startQuizAction = function() {
    console.log('DEBUG: startQuizAction Triggered (Restored)');
    
    // 1. Get Settings
    const slider = document.getElementById('config-slider');
    if (!slider) {
        alert('Critical Error: Slider element not found');
        return;
    }
    const count = parseInt(slider.value) || 10;
    const keyword = document.getElementById('config-search')?.value.toLowerCase();
    const domainSelect = document.getElementById('config-domain-select');
    const domain = domainSelect ? domainSelect.value : '';
    const isAttackMode = document.getElementById('config-weakness-mode')?.checked || false;
    const isRealExam = document.getElementById('config-real-mode')?.checked || false;

    if (!window.questionsData) {
        alert('Error: questionsData is undefined');
        return;
    }

    // 2. Filter Questions
    const courseId = currentCourseId || window.currentCourseId || 'azure-ai-103';
    let questions = window.questionsData.filter(q => q.course === courseId || q.courseId === courseId || (!q.course && !q.courseId && courseId === 'azure-ai-103'));
    
    if (keyword) questions = questions.filter(q => JSON.stringify(q).toLowerCase().includes(keyword));
    if (domain) questions = questions.filter(q => q.domain === domain);
    
    const onlyMissed = (document.getElementById('chip-filter-missed') && document.getElementById('chip-filter-missed').checked) || isAttackMode;
    const onlyUnseen = document.getElementById('chip-filter-unseen') && document.getElementById('chip-filter-unseen').checked;
    const onlyCode = document.getElementById('chip-filter-code') && document.getElementById('chip-filter-code').checked;
    const onlyOrder = document.getElementById('chip-filter-order') && document.getElementById('chip-filter-order').checked;

    const stats = JSON.parse(localStorage.getItem('userStats') || '{}');
    if (onlyMissed) {
        const failedIds = stats.wrongQuestions || stats.failedQuestions || [];
        questions = questions.filter(q => failedIds.includes(q.id));
    }
    if (onlyCode) {
        questions = questions.filter(q => (q.prompt && q.prompt.includes('```')) || (q.code && q.code.length > 0));
    }
    if (onlyOrder) {
        questions = questions.filter(q => q.type === 'order' || q.type === 'reorder');
    }

    // 3. Shuffle & Slice
    questions.sort(() => Math.random() - 0.5);
    currentQuizQuestions = questions.slice(0, count);

    if (currentQuizQuestions.length === 0) {
        alert('Error: No se encontraron preguntas con esta configuración.');
        return;
    }

    // 4. Configure & Launch
    currentQuestionIndex = 0;
    userAnswers = {};
    
    // Hide Modal
    const modal = document.getElementById('quiz-config-modal');
    if (modal) modal.classList.add('hidden');
    
    if (typeof startQuiz === 'function') {
        startQuiz(); 
    } else {
        // Fallback if startQuiz() is not exposed or named differently in this backup
        // Adapting legacy start logic if needed
        console.warn('startQuiz not found, attempting inline launch...');
        const startScreen = document.getElementById('start-screen');
        const quizUI = document.getElementById('quiz-ui');
        
        if(startScreen) startScreen.classList.add('hidden');
        if(quizUI) quizUI.classList.remove('hidden');
        
        loadQuestion(0);
        updateMap();
        startTimer();
    }
};


/* --- RESTORED UI ACTIONS (Apple-Style Buttons Fix) --- */

window.toggleZenMode = function() {
    document.body.classList.toggle('zen-mode');
    const isZen = document.body.classList.contains('zen-mode');
    
    // Timer Relocation Logic
    const timer = document.getElementById("timer-display");
    const sidebar = document.querySelector(".sidebar");
    const headerControls = document.querySelector(".header-controls");
    const zenBtn = document.getElementById("zen-mode-toggle");

    if(timer && sidebar && headerControls) {
        if(isZen) {
            // Move to sidebar (Below Map)
            sidebar.appendChild(timer);
            // Add specific style for sidebar context
            timer.classList.add("timer-zen-sidebar"); 
            // Ensure visible 
            timer.classList.remove("hidden");
        } else {
            // Move back to header (Insert before Zen Button to maintain order)
            if(zenBtn) {
                headerControls.insertBefore(timer, zenBtn);
            } else {
                headerControls.appendChild(timer);
            }
            timer.classList.remove("timer-zen-sidebar");
        }
    }
};

window.returnToMenu = function() {
    // Hide all major screens
    const screens = ['quiz-ui', 'results-screen', 'study-screen', 'history-screen', 'profile-modal', 'admin-modal', 'quiz-config-modal'];
    screens.forEach(id => {
        const el = document.getElementById(id);
        if(el) el.classList.add('hidden');
    });

    // Check if Onboarding should be shown (redundant if we just want to go to menu, 
    // but good practice to check logic, or just force Hero+Menu)
    // For 'Home' button, we usually want the Hero/Menu dashboard.
    
    document.body.classList.remove('zen-mode'); // Auto-exit Zen if home is clicked
    
    const startScreen = document.getElementById('start-screen');
    const onboarding = document.getElementById('onboarding-screen');
    
    // If we want to return the user to the "Landing" experience:
    if(startScreen) {
        startScreen.classList.remove('hidden');
        startScreen.classList.add('vertical-layout');
    }
    
    if(onboarding) {
        onboarding.classList.add('hidden'); // Ensure onboarding is hidden when returning home explicitly
    }
    
    // Refresh Hero Logic
    if(window.HeroManager && typeof window.HeroManager.updateDashboard === 'function') {
        window.HeroManager.updateDashboard();
    }
    
    // Refresh History Header
    if(typeof renderHistoryList === 'function') renderHistoryList();
  };

  // ===========================================================================
  // GLOBAL SEARCH & CONCEPT FINDER (Ctrl+K)
  // ===========================================================================
  function initGlobalSearch() {
    const launcherBtn = document.getElementById("global-search-launcher-btn");
    const modal = document.getElementById("global-search-modal");
    const input = document.getElementById("global-search-input");
    const filterSelect = document.getElementById("global-search-course-filter");
    const countEl = document.getElementById("global-search-count");
    const resultsContainer = document.getElementById("global-search-results");
    const practiceBtn = document.getElementById("global-search-practice-btn");
    const practiceCount = document.getElementById("global-search-practice-count");

    if (!modal || !input) return;

    let currentMatches = [];

    function openSearchModal() {
      modal.classList.remove("hidden");
      input.value = "";
      input.focus();
      renderSearchResults([]);
    }

    function closeSearchModal() {
      modal.classList.add("hidden");
    }

    if (launcherBtn) launcherBtn.onclick = openSearchModal;
    window.openGlobalSearch = openSearchModal;
    window.closeGlobalSearch = closeSearchModal;

    // Helper to gather all questions across known course globals
    function getAllQuestions() {
      const all = Array.isArray(window.questionsData) ? window.questionsData : [];
      const seen = new Set();
      return all.filter(q => {
        if (!q) return false;
        const key = `${q.courseId || ''}:${q.lang || ''}:${q.id || ''}`;
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    }

    function performSearch() {
      const q = (input.value || "").trim().toLowerCase();
      const courseFilter = filterSelect ? filterSelect.value : "all";

      if (q.length < 2) {
        if (countEl) countEl.textContent = "Escribe al menos 2 caracteres";
        if (practiceBtn) practiceBtn.style.display = "none";
        resultsContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">Busca preguntas y términos en todos los bancos de certificación.</div>`;
        currentMatches = [];
        return;
      }

      const all = getAllQuestions();
      const filtered = all.filter(item => {
        if (courseFilter !== "all" && item.courseId !== courseFilter) return false;
        const text = `${item.prompt || ''} ${item.domain || ''} ${item.subdomain || ''} ${item.explanation || ''} ${(item.options || []).map(o => o.text).join(' ')}`.toLowerCase();
        return text.includes(q);
      });

      currentMatches = filtered;

      if (countEl) countEl.textContent = `${filtered.length} resultado${filtered.length === 1 ? '' : 's'} encontrado${filtered.length === 1 ? '' : 's'}`;
      if (practiceBtn && practiceCount) {
        if (filtered.length > 0) {
          practiceBtn.style.display = "inline-flex";
          practiceCount.textContent = filtered.length;
          practiceBtn.onclick = () => {
            closeSearchModal();
            startCustomQuizSession(currentMatches);
          };
        } else {
          practiceBtn.style.display = "none";
        }
      }

      renderSearchResults(filtered, q);
    }

    function renderSearchResults(items, query) {
      if (!items || items.length === 0) {
        if (query && query.length >= 2) {
          resultsContainer.innerHTML = `<div style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.9rem;">No se encontraron preguntas con el término <strong>"${query}"</strong>.</div>`;
        }
        return;
      }

      let html = "";
      items.slice(0, 50).forEach((item) => {
        const promptSnippet = (item.prompt || "").replace(/<[^>]*>/g, '');
        const domainLabel = item.domain || item.courseId || "General";
        
        // Highlight query in text
        const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
        const highlightedPrompt = promptSnippet.length > 180 ? promptSnippet.substring(0, 180) + '...' : promptSnippet;
        const finalPrompt = highlightedPrompt.replace(regex, '<mark style="background:rgba(255,212,59,0.35);color:inherit;padding:1px 4px;border-radius:3px;">$1</mark>');

        html += `
          <div class="search-result-card" style="padding: 12px; border: 1px solid var(--border-color); border-radius: 8px; background: var(--bg-card); display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--primary-color); background: var(--primary-light, rgba(49,87,213,0.1)); padding: 2px 8px; border-radius: 10px;">
                ${item.courseId || 'Certificación'}
              </span>
              <span style="font-size: 0.72rem; color: var(--text-muted);">${domainLabel}</span>
            </div>
            <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-color); line-height: 1.4;">
              ${finalPrompt}
            </div>
            <div style="display: flex; justify-content: flex-end; margin-top: 4px;">
              <button type="button" class="btn btn-sm btn-outline" style="font-size: 0.75rem; padding: 3px 8px; border-radius: 6px;" onclick="window._startSingleQuestionPractice('${item.id}')">
                Practicar esta pregunta &rarr;
              </button>
            </div>
          </div>
        `;
      });

      if (items.length > 50) {
        html += `<div style="text-align: center; padding: 8px; color: var(--text-muted); font-size: 0.8rem;">Mostrando las primeras 50 de ${items.length} preguntas.</div>`;
      }

      resultsContainer.innerHTML = html;
    }

    let debounceTimer = null;
    input.addEventListener("input", () => {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(performSearch, 180);
    });

    if (filterSelect) {
      filterSelect.addEventListener("change", performSearch);
    }

    window._startSingleQuestionPractice = function(qId) {
      const q = getAllQuestions().find(x => x.id === qId);
      if (q) {
        closeSearchModal();
        startCustomQuizSession([q]);
      }
    };
  }

  function startCustomQuizSession(questionsList) {
    if (!questionsList || questionsList.length === 0) return;
    currentQuizQuestions = JSON.parse(JSON.stringify(questionsList));
    currentQuestionIndex = 0;
    userAnswers = {};
    score = 0;
    totalSeconds = 0;
    flaggedQuestions.clear();

    if (startScreen) startScreen.classList.add("hidden");
    if (resultsScreen) resultsScreen.classList.add("hidden");
    if (studyScreen) studyScreen.classList.add("hidden");
    if (quizUI) quizUI.classList.remove("hidden");
    if (timerDisplay) timerDisplay.classList.remove("hidden");

    loadQuestion(0);
    renderQuestionMap();
    startTimer();
  }

  document.addEventListener('DOMContentLoaded', () => {
    initGlobalSearch();
  });

window.renderBadges = function() {
    const xp = (window.HeroManager && window.HeroManager.data) ? window.HeroManager.data.stats.xp : 0;
    const belt = (window.HeroManager) ? window.HeroManager.getBeltInfo(xp) : { name: 'Desconocido', icon: '?' };
    
    alert(' TUS LOGROS \n\n' +
          'Nivel Actual: ' + belt.name + ' ' + belt.icon + '\n' +
          'XP Total: ' + xp + '\n\n' + 
          'Sigue estudiando para desbloquear más insignias!');
};

/* --- APP STARTUP LOGIC --- */
window.openOnboarding = function() {
    const ob = document.getElementById('onboarding-screen');
    const start = document.getElementById('start-screen');
    if(ob) ob.classList.remove('hidden');
    if(start) start.classList.add('hidden');
    if(typeof renderOnboardingPaths === 'function') renderOnboardingPaths();
};

window.closeOnboarding = function() {
    const ob = document.getElementById('onboarding-screen');
    const start = document.getElementById('start-screen');
    if(ob) ob.classList.add('hidden');
    if(start) {
        start.classList.remove('hidden');
        start.classList.add('vertical-layout');
    }
    if(window.HeroManager) window.HeroManager.updateDashboard();
};

// Bind Skip Button
document.addEventListener('DOMContentLoaded', () => {
   const skipBtn = document.getElementById('skip-onboarding-btn');
   if(skipBtn) skipBtn.onclick = window.closeOnboarding;
   
   window.openOnboarding();
   
   const p = localStorage.getItem('userProfile');
   if(p && p !== '{}') {
       setTimeout(() => {
           if(window.HeroManager) window.HeroManager.updateDashboard();
       }, 500);
   }
});

/* =============================================================================
   POWER-USER GLOBAL KEYBOARD SHORTCUTS
   ============================================================================= */
document.addEventListener('keydown', (e) => {
  // Global shortcut: Ctrl+K or Cmd+K to open Search
  if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
    e.preventDefault();
    if (typeof window.openGlobalSearch === 'function') {
      window.openGlobalSearch();
    }
    return;
  }

  // Global shortcut: ESC closes any open modal/drawer
  if (e.key === 'Escape') {
    if (window.PodcastPlaylist && document.getElementById('podcast-playlist-modal') && !document.getElementById('podcast-playlist-modal').classList.contains('hidden')) {
      window.PodcastPlaylist.close();
      return;
    }
    if (window.CaseStudySimulator && document.getElementById('case-study-modal') && !document.getElementById('case-study-modal').classList.contains('hidden')) {
      window.CaseStudySimulator.close();
      return;
    }
    if (window.ExamReadinessRadar && document.getElementById('readiness-radar-modal') && !document.getElementById('readiness-radar-modal').classList.contains('hidden')) {
      window.ExamReadinessRadar.close();
      return;
    }
    if (window.OralExamMode && document.getElementById('oral-exam-modal') && !document.getElementById('oral-exam-modal').classList.contains('hidden')) {
      window.OralExamMode.close();
      return;
    }
    if (window.SurvivalMode && document.getElementById('survival-mode-modal') && !document.getElementById('survival-mode-modal').classList.contains('hidden')) {
      window.SurvivalMode.close();
      return;
    }
    if (window.LiveSyncStatus && document.getElementById('sync-popover-modal') && !document.getElementById('sync-popover-modal').classList.contains('hidden')) {
      window.LiveSyncStatus.closePopover();
      return;
    }
    const openModals = document.querySelectorAll('.modal-overlay:not(.hidden)');
    if (openModals.length > 0) {
      openModals.forEach(m => m.classList.add('hidden'));
      return;
    }
  }

  const targetTag = e.target && e.target.tagName ? e.target.tagName.toUpperCase() : '';
  if (targetTag === 'INPUT' || targetTag === 'TEXTAREA' || targetTag === 'SELECT' || (e.target && e.target.isContentEditable)) {
    return;
  }

  // Quiz Mode Active
  const quizUI = document.getElementById('quiz-ui');
  if (quizUI && !quizUI.classList.contains('hidden')) {
    const key = e.key.toUpperCase();

    // 1-5 or A-E to select options
    const optionItems = Array.from(document.querySelectorAll('#options-list .option-item'));
    const keyMap = {
      '1': 0, 'A': 0,
      '2': 1, 'B': 1,
      '3': 2, 'C': 2,
      '4': 3, 'D': 3,
      '5': 4, 'E': 4,
      '6': 5
    };

    if (key in keyMap) {
      const idx = keyMap[key];
      if (optionItems[idx]) {
        e.preventDefault();
        optionItems[idx].click();
        return;
      }
    }

    // 'F' key toggles Flag for Review
    if (key === 'F' && !(e.ctrlKey || e.metaKey || e.altKey)) {
      e.preventDefault();
      if (typeof window.toggleFlagCurrentQuestion === 'function') {
        window.toggleFlagCurrentQuestion();
      }
      return;
    }

    // 'Enter' key checks answer or advances to next
    if (e.key === 'Enter') {
      const checkBtn = document.getElementById('check-btn');
      const nextBtn = document.getElementById('next-btn');
      if (checkBtn && !checkBtn.classList.contains('hidden')) {
        e.preventDefault();
        checkBtn.click();
        return;
      } else if (nextBtn && !nextBtn.classList.contains('hidden')) {
        e.preventDefault();
        nextBtn.click();
        return;
      }
    }

    // Left and Right arrows to navigate
    if (e.key === 'ArrowLeft') {
      const prevBtn = document.getElementById('prev-btn');
      if (prevBtn && !prevBtn.classList.contains('hidden')) {
        e.preventDefault();
        prevBtn.click();
        return;
      }
    }
    if (e.key === 'ArrowRight') {
      const nextBtn = document.getElementById('next-btn');
      if (nextBtn && !nextBtn.classList.contains('hidden')) {
        e.preventDefault();
        nextBtn.click();
        return;
      }
    }
  }

  // Flashcards Active
  const studyScreen = document.getElementById('study-screen');
  const fcPanel = document.getElementById('unir-panel-flashcards');
  if (studyScreen && !studyScreen.classList.contains('hidden') && fcPanel && !fcPanel.hasAttribute('hidden')) {
    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      const fcCard = document.getElementById('unir-fc-card');
      if (fcCard) fcCard.classList.toggle('flipped');
      return;
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      if (typeof window._unirNextFC === 'function') window._unirNextFC();
      return;
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      if (typeof window._unirPrevFC === 'function') window._unirPrevFC();
      return;
    }
  }
});

// Global backdrop click listener to close modals
document.addEventListener('click', (e) => {
  if (e.target && e.target.classList && e.target.classList.contains('modal-overlay') && !e.target.classList.contains('hidden')) {
    const modalId = e.target.id;
    if (modalId === 'podcast-playlist-modal' && window.PodcastPlaylist) {
      window.PodcastPlaylist.close();
    } else if (modalId === 'case-study-modal' && window.CaseStudySimulator) {
      window.CaseStudySimulator.close();
    } else if (modalId === 'readiness-radar-modal' && window.ExamReadinessRadar) {
      window.ExamReadinessRadar.close();
    } else if (modalId === 'oral-exam-modal' && window.OralExamMode) {
      window.OralExamMode.close();
    } else if (modalId === 'survival-mode-modal' && window.SurvivalMode) {
      window.SurvivalMode.close();
    } else if (modalId === 'sync-popover-modal' && window.LiveSyncStatus) {
      window.LiveSyncStatus.closePopover();
    } else {
      e.target.classList.add('hidden');
    }
  }
});