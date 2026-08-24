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
    const baseId = String(question.id || '').replace(/-es$/, '');
    const targetId = targetLanguage === 'es' ? `${baseId}-es` : baseId;
    return window.questionsData.find(candidate =>
      candidate.id === targetId && candidate.courseId === question.courseId
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
      },
      en: {
        single_choice: 'Select one correct answer.',
        multiple_choice: 'Select all correct answers.',
        true_false: 'Select True or False.',
        ordering: 'Arrange the items in the correct order.',
        scenario: 'Read the scenario and answer.',
      },
    };
    instruction.textContent = labels[language][question.type] || labels[language].single_choice;
  }

  function renderExplanation(sourceQuestion, language) {
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    if (!feedbackArea || feedbackArea.classList.contains('hidden') || !feedbackExplanation || !sourceQuestion.explanation) return;
    const answer = window.userAnswers ? window.userAnswers[window.currentQuestionIndex] : null;
    const correctIds = sourceQuestion.correctIds || [];
    const prefix = answer && !answer.isCorrect
      ? `<strong>${language === 'es' ? 'Respuesta Correcta:' : 'Correct Answer:'}</strong> ${correctIds.join(', ')}. `
      : '';
    renderMarkdown(feedbackExplanation, prefix + sourceQuestion.explanation);
  }

  function renderQuestionData(originalQuestion, sourceQuestion, language) {
    if (!sourceQuestion) return false;
    const questionText = document.getElementById('question-text');
    if (questionText && !originalQuestion.promptBlocks && !sourceQuestion.promptBlocks) {
      renderMarkdown(questionText, sourceQuestion.prompt);
    }
    renderOptions(sourceQuestion, originalQuestion);

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
