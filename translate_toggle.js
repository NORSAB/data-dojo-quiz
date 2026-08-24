/**
 * Translate Toggle for Bilingual Courses
 * ==========================================
 * Adds a EN/ES toggle button that translates questions in-place
 * WITHOUT resetting the exam, timer, or current question.
 *
 * Strategy:
 *   - To translate EN→ES:
 *       - courseId === 'databricks-da' (legacy): DOM text from window.databricksTranslations
 *       - any other course: look up the Spanish twin question in window.questionsData
 *         (same courseId, id === `${originalId}-es`) — the same convention used by
 *         translate_genai_questions.py and the courseConfig[courseId].lang filter.
 *   - To restore ES→EN: Re-render from the original JS data objects (q.prompt, q.options[].text)
 *   - NO MutationObserver on the toggle logic itself — zero race conditions
 *
 * The button only appears once Spanish content actually exists for the active course
 * (legacy databricksTranslations, or at least one lang:'es' question sharing its courseId).
 * A course with only English questions (e.g. GenAI before translate_genai_questions.py
 * has been run) simply won't show the button yet — no code change needed once the
 * Spanish bank is added, it activates automatically.
 */
(function() {
    'use strict';

    let currentLang = 'en';

    /** Does the currently active course have Spanish content to toggle to? */
    function hasSpanishSupport(courseId) {
        if (!courseId) return false;
        if (courseId === 'databricks-da') return !!window.databricksTranslations;
        return !!(window.questionsData && window.questionsData.some(
            (q) => q.courseId === courseId && q.lang === 'es'
        ));
    }

    /** Generic lookup: the Spanish twin of a question lives under id `${id}-es`. */
    function findEsTwin(q) {
        if (!q || !window.questionsData) return null;
        return window.questionsData.find((x) => x.id === `${q.id}-es`) || null;
    }

    function init() {
        if (document.getElementById('translate-toggle-btn')) return;

        const observer = new MutationObserver(() => {
            const quizUI = document.getElementById('quiz-ui');
            if (quizUI && !quizUI.classList.contains('hidden')) {
                injectButton();
                observer.disconnect();
            }
        });
        observer.observe(document.body, { childList: true, subtree: true, attributes: true });

        const quizUI = document.getElementById('quiz-ui');
        if (quizUI && !quizUI.classList.contains('hidden')) {
            injectButton();
        }
    }

    function injectButton() {
        if (document.getElementById('translate-toggle-btn')) return;
        if (!hasSpanishSupport(typeof currentCourseId !== 'undefined' ? currentCourseId : null)) return;

        const finishBtn = document.getElementById('finish-btn-top');
        if (!finishBtn) return;

        const headerBar = finishBtn.parentElement;
        
        const btn = document.createElement('button');
        btn.id = 'translate-toggle-btn';
        btn.className = 'btn btn-sm';
        // Codex (GPT-5) | 2026-08-23 21:32 CST | El selector bilingüe hereda el único acento visual de la aplicación.
        btn.style.cssText = `
            background: var(--primary-color, #3157d5);
            color: white;
            border: none;
            padding: 6px 14px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 600;
            cursor: pointer;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.3s ease;
            margin-right: 8px;
            box-shadow: 0 2px 8px rgba(49, 87, 213, 0.3);
        `;

        btn.innerHTML = `
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 8l6 6"/>
                <path d="M4 14l6-6 2-3"/>
                <path d="M2 5h12"/>
                <path d="M7 2h1"/>
                <path d="M22 22l-5-10-5 10"/>
                <path d="M14 18h6"/>
            </svg>
            <span id="translate-label">ES</span>
        `;

        btn.title = 'Traducir a Español';

        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-1px)';
            btn.style.boxShadow = '0 4px 12px rgba(49, 87, 213, 0.4)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
            btn.style.boxShadow = '0 2px 8px rgba(49, 87, 213, 0.3)';
        });

        btn.addEventListener('click', toggleTranslation);
        headerBar.insertBefore(btn, finishBtn);
    }

    function toggleTranslation() {
        const courseId = typeof currentCourseId !== 'undefined' ? currentCourseId : null;
        if (!hasSpanishSupport(courseId)) {
            console.warn('Translate toggle: no Spanish content available yet for', courseId);
            return;
        }

        const btn = document.getElementById('translate-toggle-btn');
        const label = document.getElementById('translate-label');

        if (currentLang === 'en') {
            currentLang = 'es';
            label.textContent = 'EN';
            btn.title = 'Switch to English';
            btn.style.background = 'var(--primary-color, #3157d5)';
            applySpanish();
        } else {
            currentLang = 'en';
            label.textContent = 'ES';
            btn.title = 'Traducir a Español';
            btn.style.background = 'var(--primary-color, #3157d5)';
            restoreEnglishFromData();
        }
    }

    /**
     * Restore English by re-rendering from the original JS data objects.
     * This reads q.prompt, q.options[].text, and q.explanation directly.
     * No saved HTML needed — the source of truth is the JS data.
     */
    function restoreEnglishFromData() {
        if (typeof currentQuizQuestions === 'undefined' || typeof currentQuestionIndex === 'undefined') return;

        const q = currentQuizQuestions[currentQuestionIndex];
        if (!q) return;

        const questionText = document.getElementById('question-text');
        const optionsList = document.getElementById('options-list');
        const feedbackExplanation = document.getElementById('feedback-explanation');
        const typeInstruction = document.getElementById('type-instruction');

        // Restore prompt from original data
        if (questionText && !q.promptBlocks && q.prompt) {
            if (window.marked) {
                questionText.innerHTML = marked.parse(q.prompt, { breaks: true, gfm: true });
            } else {
                questionText.textContent = q.prompt;
            }
        }

        // Restore options from original data
        if (optionsList) {
            const items = optionsList.querySelectorAll('.option-item');
            items.forEach(item => {
                const optId = item.dataset.id;
                if (!optId) return;
                const opt = q.options.find(o => o.id === optId);
                if (opt && !opt.blocks && opt.text) {
                    const savedId = item.dataset.id;
                    const savedClass = item.className;
                    if (window.marked) {
                        item.innerHTML = marked.parse(opt.text, { breaks: true, gfm: true });
                    } else {
                        item.textContent = opt.text;
                    }
                    item.dataset.id = savedId;
                    item.className = savedClass;
                }
            });
        }

        // Restore explanation from original data (if visible)
        if (feedbackExplanation && q.explanation) {
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea && !feedbackArea.classList.contains('hidden')) {
                const corrIds = q.correctIds || [];
                let prefix = '';
                const ans = typeof userAnswers !== 'undefined' ? userAnswers[currentQuestionIndex] : null;
                if (ans && !ans.isCorrect) {
                    prefix = `<strong>Correct Answer:</strong> ${corrIds.join(', ')}. `;
                }
                if (window.marked) {
                    feedbackExplanation.innerHTML = marked.parse(prefix + q.explanation);
                } else {
                    feedbackExplanation.innerHTML = prefix + q.explanation;
                }
            }
        }

        // Restore type instruction
        if (typeInstruction) {
            const instrMapReverse = {
                'Seleccione una respuesta correcta.': 'Select one correct answer.',
                'Seleccione todas las respuestas correctas.': 'Select all correct answers.',
                'Seleccione Verdadero o Falso.': 'Select True or False.',
                'Organice los elementos en el orden correcto.': 'Arrange the items in the correct order.',
                'Lea el escenario y responda.': 'Read the scenario and answer.',
            };
            const currentText = typeInstruction.textContent.trim();
            if (instrMapReverse[currentText]) {
                typeInstruction.textContent = instrMapReverse[currentText];
            }
        }

        if (window.MathJax && questionText) {
            MathJax.typesetPromise([questionText, optionsList]);
        }
    }

    /** Apply Spanish translation to the current question (dispatches by course). */
    function applySpanish() {
        if (typeof currentQuizQuestions === 'undefined' || typeof currentQuestionIndex === 'undefined') return;

        const q = currentQuizQuestions[currentQuestionIndex];
        if (!q) return;

        const courseId = typeof currentCourseId !== 'undefined' ? currentCourseId : null;
        const t = courseId === 'databricks-da'
            ? (window.databricksTranslations && window.databricksTranslations[q.id])
            : buildTranslationFromTwin(q);
        if (!t) return;

        renderTranslation(q, t);
    }

    /** Generic path: normalize the Spanish twin question into the same {prompt_es, options_es, explanation_es} shape. */
    function buildTranslationFromTwin(q) {
        const twin = findEsTwin(q);
        if (!twin) return null;
        const options_es = {};
        (twin.options || []).forEach((opt) => { options_es[opt.id] = opt.text; });
        return {
            prompt_es: twin.prompt,
            options_es,
            explanation_es: twin.explanation,
        };
    }

    /** Render a normalized {prompt_es, options_es, explanation_es} translation into the current question DOM. */
    function renderTranslation(q, t) {
        const questionText = document.getElementById('question-text');
        const optionsList = document.getElementById('options-list');
        const feedbackExplanation = document.getElementById('feedback-explanation');
        const typeInstruction = document.getElementById('type-instruction');

        // Translate prompt
        if (t.prompt_es && questionText && !q.promptBlocks) {
            if (window.marked) {
                questionText.innerHTML = marked.parse(t.prompt_es, { breaks: true, gfm: true });
            } else {
                questionText.textContent = t.prompt_es;
            }
        }

        // Translate options
        if (t.options_es && optionsList) {
            const items = optionsList.querySelectorAll('.option-item');
            items.forEach(item => {
                const optId = item.dataset.id;
                if (optId && t.options_es[optId]) {
                    const opt = q.options.find(o => o.id === optId);
                    if (opt && !opt.blocks) {
                        const savedId = item.dataset.id;
                        const savedClass = item.className;
                        if (window.marked) {
                            item.innerHTML = marked.parse(t.options_es[optId], { breaks: true, gfm: true });
                        } else {
                            item.textContent = t.options_es[optId];
                        }
                        item.dataset.id = savedId;
                        item.className = savedClass;
                    }
                }
            });
        }

        // Translate explanation (if visible)
        if (t.explanation_es && feedbackExplanation) {
            const feedbackArea = document.getElementById('feedback-area');
            if (feedbackArea && !feedbackArea.classList.contains('hidden')) {
                const corrIds = q.correctIds || [];
                let prefix = '';
                const ans = typeof userAnswers !== 'undefined' ? userAnswers[currentQuestionIndex] : null;
                if (ans && !ans.isCorrect) {
                    prefix = `<strong>Respuesta Correcta:</strong> ${corrIds.join(', ')}. `;
                }
                if (window.marked) {
                    feedbackExplanation.innerHTML = marked.parse(prefix + t.explanation_es);
                } else {
                    feedbackExplanation.innerHTML = prefix + t.explanation_es;
                }
            }
        }

        // Translate instruction
        if (typeInstruction) {
            const instrMap = {
                'Select one correct answer.': 'Seleccione una respuesta correcta.',
                'Select all correct answers.': 'Seleccione todas las respuestas correctas.',
                'Select True or False.': 'Seleccione Verdadero o Falso.',
                'Arrange the items in the correct order.': 'Organice los elementos en el orden correcto.',
                'Read the scenario and answer.': 'Lea el escenario y responda.',
            };
            const currentText = typeInstruction.textContent.trim();
            if (instrMap[currentText]) {
                typeInstruction.textContent = instrMap[currentText];
            }
        }

        if (window.MathJax && questionText) {
            MathJax.typesetPromise([questionText, optionsList]);
        }
    }

    /**
     * Watch navigation to re-apply Spanish when user moves between questions.
     * No MutationObserver — just click handlers on navigation buttons.
     */
    function watchNavigation() {
        const nextBtn = document.getElementById('next-btn');
        const prevBtn = document.getElementById('prev-btn');
        const checkBtn = document.getElementById('check-btn');

        [nextBtn, prevBtn].forEach(btn => {
            if (btn && !btn._translateWatched) {
                btn.addEventListener('click', () => {
                    if (currentLang === 'es') {
                        setTimeout(() => applySpanish(), 120);
                    }
                });
                btn._translateWatched = true;
            }
        });

        if (checkBtn && !checkBtn._translateWatched) {
            checkBtn.addEventListener('click', () => {
                if (currentLang === 'es') {
                    setTimeout(() => applySpanish(), 200);
                }
            });
            checkBtn._translateWatched = true;
        }

        const questionMap = document.getElementById('question-map');
        if (questionMap && !questionMap._translateWatched) {
            questionMap.addEventListener('click', (e) => {
                if (e.target.classList.contains('map-node') && currentLang === 'es') {
                    setTimeout(() => {
                        injectButton();
                        applySpanish();
                    }, 150);
                }
            });
            questionMap._translateWatched = true;
        }
    }

    // Master init
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            init();
            setTimeout(() => watchNavigation(), 1000);
        });
    } else {
        init();
        setTimeout(() => watchNavigation(), 1000);
    }

    let checkCount = 0;
    const rechecker = setInterval(() => {
        checkCount++;
        if (checkCount > 30) { clearInterval(rechecker); return; }
        
        const quizUI = document.getElementById('quiz-ui');
        if (quizUI && !quizUI.classList.contains('hidden')) {
            injectButton();
            watchNavigation();
            clearInterval(rechecker);
        }
    }, 500);

})();
