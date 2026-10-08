/**
 * Codex (GPT-5) | 2026-08-23 22:09 CST
 * Conecta las preguntas bilingües al selector global sin reiniciar examen, tiempo ni posición.
 */
(function connectQuestionTranslation() {
  'use strict';

  function activeCourseId() {
    return typeof window.currentCourseId !== 'undefined' ? window.currentCourseId : null;
  }

  function currentQuestion() {
    const questions = window.currentQuizQuestions || [];
    return questions[window.currentQuestionIndex || 0] || null;
  }

  function findQuestionTwin(question, targetLanguage) {
    if (!question || !window.questionsData) return null;
    if (question.lang === targetLanguage) return question;
    // Claude (Opus 5.5) | 2026-10-08 | Las gemelas pueden ir en cualquier direccion: id / id-es,
    // id / id-en (bancos que nacieron en espanol) o el campo twinOf de los bancos generados.
    const id = String(question.id || '');
    const baseId = question.twinOf !== undefined ? String(question.twinOf) : id.replace(/-(es|en)$/, '');
    const candidates = new Set([baseId, `${baseId}-es`, `${baseId}-en`]);
    return window.questionsData.find(candidate =>
      candidate.courseId === question.courseId &&
      candidate.lang === targetLanguage &&
      (candidates.has(String(candidate.id)) || String(candidate.twinOf) === id)
    ) || null;
  }

  function legacySpanishTranslation(question) {
    if (activeCourseId() !== 'databricks-da' || !window.databricksTranslations) return null;
    return window.databricksTranslations[question.id] || null;
  }

  function renderMarkdown(element, value) {
    if (!element || value === undefined || value === null) return;
    if (window.marked) element.innerHTML = window.marked.parse(String(value), { breaks: true, gfm: true });
    else element.textContent = String(value);
  }

  function renderOptions(sourceQuestion, originalQuestion) {
    const optionsList = document.getElementById('options-list');
    if (!optionsList || !sourceQuestion || !Array.isArray(sourceQuestion.options)) return;
    optionsList.querySelectorAll('.option-item').forEach(item => {
      const optionId = item.dataset.id;
      const sourceOption = sourceQuestion.options.find(option => option.id === optionId);
      const originalOption = (originalQuestion.options || []).find(option => option.id === optionId);
      if (!sourceOption || sourceOption.blocks || originalOption?.blocks) return;
      const savedClass = item.className;
      renderMarkdown(item, sourceOption.text);
      item.dataset.id = optionId;
      item.className = savedClass;
    });
  }

  function renderInstruction(question, language) {
    const instruction = document.getElementById('type-instruction');
    if (!instruction) return;
    const labels = {
      es: {
        single_choice: 'Seleccione una respuesta correcta.',
        multiple_choice: 'Seleccione todas las respuestas correctas.',
        true_false: 'Seleccione Verdadero o Falso.',
        ordering: 'Organice los elementos en el orden correcto.',
        scenario: 'Lea el escenario y responda.',
        matrix_statements: 'Para cada declaración, seleccione Sí o No.',
        case_study: 'Analice el caso de estudio y responda.',
        hotspot: 'Seleccione la opción correcta en cada lista del área de respuesta.',
        drag_drop: 'Arrastre cada opción al destino correcto del área de respuesta.',
      },
      en: {
        single_choice: 'Select one correct answer.',
        multiple_choice: 'Select all correct answers.',
        true_false: 'Select True or False.',
        ordering: 'Arrange the items in the correct order.',
        scenario: 'Read the scenario and answer.',
        matrix_statements: 'For each statement, select Yes or No.',
        case_study: 'Analyze the case study and answer.',
        hotspot: 'Select the correct option in each list of the answer area.',
        drag_drop: 'Drag each option to the correct target in the answer area.',
      },
    };
    instruction.textContent = labels[language][question.type] || labels[language].single_choice;
  }

  function renderExplanation(sourceQuestion, language) {
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    if (!feedbackArea || feedbackArea.classList.contains('hidden') || !feedbackExplanation || !sourceQuestion.explanation) return;
    const answer = window.userAnswers ? window.userAnswers[window.currentQuestionIndex] : null;
    const optionText = id => ((sourceQuestion.options || []).find(o => o.id === id) || {}).text || id;
    const correctText = Array.isArray(sourceQuestion.slots)
      ? sourceQuestion.slots.map(slot => optionText(slot.correct)).join(' | ')
      : (sourceQuestion.correctIds || []).join(', ');
    const prefix = answer && !answer.isCorrect
      ? `<strong>${language === 'es' ? 'Respuesta Correcta:' : 'Correct Answer:'}</strong> ${correctText}. `
      : '';
    renderMarkdown(feedbackExplanation, prefix + sourceQuestion.explanation);
    // Claude (Opus 5.5) | 2026-10-08 | vuelve a mostrar el por qué de cada opción tras reescribir la explicación
    if (typeof window.renderOptionRationales === 'function') window.renderOptionRationales(sourceQuestion, language);
  }

  function renderQuestionData(originalQuestion, sourceQuestion, language) {
    if (!sourceQuestion) return false;
    const questionText = document.getElementById('question-text');
    if (questionText && !originalQuestion.promptBlocks && !sourceQuestion.promptBlocks) {
      renderMarkdown(questionText, sourceQuestion.prompt);
    }
    renderOptions(sourceQuestion, originalQuestion);

    // Update Case Study if present
    const csBox = document.getElementById('case-study-box');
    if (csBox && sourceQuestion.caseStudy) {
      const csTitleEl = csBox.querySelector('.case-study-title span');
      const csBtnEl = csBox.querySelector('.case-study-toggle-btn');
      const csBodyEl = csBox.querySelector('.case-study-body');
      if (csTitleEl) csTitleEl.textContent = sourceQuestion.caseStudy.title || (language === 'es' ? 'Caso de Estudio: Contoso, Ltd' : 'Case Study: Contoso, Ltd');
      if (csBtnEl) csBtnEl.textContent = language === 'es' ? 'Ver contexto de empresa' : 'View enterprise context';
      if (csBodyEl) renderMarkdown(csBodyEl, sourceQuestion.caseStudy.scenario || sourceQuestion.caseStudy.text || '');
    }

    // Update Matrix Statements if present
    if (sourceQuestion.type === 'matrix_statements' && Array.isArray(sourceQuestion.statements)) {
      const rows = document.querySelectorAll('.matrix-row');
      rows.forEach(row => {
        const stmtId = row.dataset.stmtId;
        const stmtObj = sourceQuestion.statements.find(s => s.id === stmtId);
        if (stmtObj) {
          const textEl = row.querySelector('.matrix-stmt-text');
          if (textEl) renderMarkdown(textEl, stmtObj.text);
          const expEl = row.querySelector('.matrix-stmt-exp');
          if (expEl && stmtObj.explanation) expEl.textContent = stmtObj.explanation;
        }
      });
    }

    // Claude (Opus 5.5) | 2026-10-08 | Answer Area de hotspot y arrastrar y soltar
    if (Array.isArray(sourceQuestion.slots)) {
      const optionText = id => ((sourceQuestion.options || []).find(o => o.id === id) || {}).text || '';
      document.querySelectorAll('.slot-row').forEach(row => {
        const slot = sourceQuestion.slots.find(s => s.id === row.dataset.slotId);
        if (!slot) return;
        const code = row.querySelector('.slot-code');
        const label = row.querySelector('.slot-label');
        if (code) code.textContent = slot.label;
        else if (label) label.textContent = slot.label;
        row.querySelectorAll('.slot-select option').forEach(o => {
          if (o.value) o.textContent = optionText(o.value);
          else o.textContent = language === 'es' ? 'Seleccione una opción' : 'Select an option';
        });
      });
      document.querySelectorAll('.dd-item').forEach(chip => { chip.textContent = optionText(chip.dataset.id); });
      const answer = window.userAnswers ? window.userAnswers[window.currentQuestionIndex] : null;
      const chosen = (answer && answer.slotSelections) || {};
      document.querySelectorAll('.slot-row').forEach(row => {
        const zone = row.querySelector('.dd-zone');
        if (!zone) return;
        const id = chosen[row.dataset.slotId];
        zone.textContent = id ? optionText(id) : (language === 'es' ? 'Suelte aquí' : 'Drop here');
      });
    }

    const scenario = document.getElementById('scenario-block');
    if (scenario && sourceQuestion.scenarioText) scenario.textContent = sourceQuestion.scenarioText;
    renderExplanation(sourceQuestion, language);
    renderInstruction(originalQuestion, language);

    if (window.MathJax && questionText) {
      window.MathJax.typesetPromise([questionText, document.getElementById('options-list')]);
    }
    return true;
  }

  function renderLegacySpanish(question, translation) {
    const normalized = {
      ...question,
      prompt: translation.prompt_es || question.prompt,
      explanation: translation.explanation_es || question.explanation,
      options: (question.options || []).map(option => ({
        ...option,
        text: translation.options_es?.[option.id] || option.text,
      })),
    };
    return renderQuestionData(question, normalized, 'es');
  }

  function applyLanguage(language = window.AppI18n?.getLanguage() || 'es') {
    const question = currentQuestion();
    if (!question) return false;

    if (language === 'es') {
      const legacy = legacySpanishTranslation(question);
      if (legacy) return renderLegacySpanish(question, legacy);
    }

    const sourceQuestion = findQuestionTwin(question, language);
    if (!sourceQuestion) return false;
    return renderQuestionData(question, sourceQuestion, language);
  }

  function watchQuestionNavigation() {
    ['next-btn', 'prev-btn', 'check-btn', 'question-map'].forEach(id => {
      const element = document.getElementById(id);
      if (!element || element.dataset.globalLanguageBound) return;
      element.addEventListener('click', () => window.setTimeout(() => applyLanguage(), 0));
      element.dataset.globalLanguageBound = 'true';
    });
  }

  function init() {
    watchQuestionNavigation();
    window.addEventListener('app-language-change', event => {
      window.setTimeout(() => applyLanguage(event.detail.language), 0);
    });
    const observer = new MutationObserver(() => watchQuestionNavigation());
    observer.observe(document.body, { childList: true, subtree: true });
  }

  window.QuestionTranslation = {
    applyLanguage,
    findQuestionTwin,
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
