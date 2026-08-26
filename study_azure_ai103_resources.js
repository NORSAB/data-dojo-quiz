// ============================================================
// STUDY RESOURCES — Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)
// Flashcards, Terms/Competencies EN/ES, Architecture Decision Scenarios & Achievements
// ============================================================
(function buildAzureAi103StudyResources() {
  const courseId = 'azure-ai-103';
  const allQuestions = (window.questionsData || []).filter(q => q.courseId === courseId);
  const englishQuestions = allQuestions.filter(q => q.lang === 'en' && !q.id.endsWith('-es'));
  const spanishByEnglishId = new Map(
    allQuestions
      .filter(q => q.lang === 'es' || q.id.endsWith('-es'))
      .map(q => [q.id.replace(/-es$/, ''), q])
  );

  const escapeHtml = value => String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

  const cleanLabel = value => String(value || '')
    .replace(/^(Domain|Dominio)\s+\d+\s*:\s*/i, '')
    .replace(/^(Subdomain|Subdominio)\s+[\d.]+\s*:\s*/i, '')
    .trim();

  const getDomainNumber = value => {
    const match = String(value || '').match(/(?:Domain|Dominio)\s+(\d+)/i);
    return match ? Number(match[1]) : 0;
  };

  const getAnswer = question => {
    const accepted = question.acceptedAnswer || {};
    const optionText = (question.options || [])
      .filter(option => (question.correctIds || []).includes(option.id))
      .map(option => option.text)
      .join(' / ');
    return {
      text: accepted.text || optionText || 'Answer not available',
      explanation: accepted.explanation || question.explanation || ''
    };
  };

  const languageBlock = (language, title, body) => `
    <section class="fc-language-block" data-lang="${language}">
      <span class="fc-language-label">${language === 'en' ? 'ENGLISH' : 'ESPAÑOL'}</span>
      <strong class="fc-language-title">${escapeHtml(title)}</strong>
      <div>${escapeHtml(body).replace(/\n/g, '<br>')}</div>
    </section>`;

  const pairedQuestions = englishQuestions
    .map(en => ({ en, es: spanishByEnglishId.get(en.id) }))
    .filter(pair => pair.es);

  const pairsByDomain = new Map();
  pairedQuestions.forEach(pair => {
    const domainNumber = getDomainNumber(pair.en.domain);
    if (!pairsByDomain.has(domainNumber)) pairsByDomain.set(domainNumber, []);
    pairsByDomain.get(domainNumber).push(pair);
  });

  const flashcards = pairedQuestions.map((pair, index) => {
    const answerEn = getAnswer(pair.en);
    const answerEs = getAnswer(pair.es);
    const domainNumber = getDomainNumber(pair.en.domain);
    return {
      id: `ai103-fc-${index + 1}`,
      domainNumber,
      category: `${cleanLabel(pair.en.domain)} / ${cleanLabel(pair.es.domain)}`,
      subcategory: `${cleanLabel(pair.en.subdomain)} / ${cleanLabel(pair.es.subdomain)}`,
      front:
        languageBlock('en', 'Exam Question / Scenario', pair.en.prompt) +
        languageBlock('es', 'Pregunta / Escenario del Examen', pair.es.prompt),
      back:
        languageBlock('en', 'Key Answer & Official Explanation', `${answerEn.text}\n\n${answerEn.explanation}`) +
        languageBlock('es', 'Respuesta Clave y Explicación Oficial', `${answerEs.text}\n\n${answerEs.explanation}`),
      sourceQuestionId: pair.en.id
    };
  });

  window.studyFlashcards = window.studyFlashcards || {};
  window.studyFlashcards[courseId] = flashcards;
  window.studyResources = window.studyResources || {};
  window.studyResources[courseId] = {
    flashcards,
    terms: [],
    scenarios: [],
    achievements: [
      { id: 'ai103_plan_master', title: 'Foundry Planner', desc: 'Dominio 1: Plan and manage an Azure AI solution', xp: 500 },
      { id: 'ai103_agent_master', title: 'Agentic Architect', desc: 'Dominio 2: Implement generative AI and agentic solutions', xp: 600 },
      { id: 'ai103_vision_master', title: 'Multimodal Vision Pro', desc: 'Dominio 3: Implement computer vision solutions', xp: 300 },
      { id: 'ai103_text_master', title: 'Language & Speech Lead', desc: 'Dominio 4: Implement text analysis solutions', xp: 300 },
      { id: 'ai103_retrieval_master', title: 'Search & Grounding Guru', desc: 'Dominio 5: Implement information extraction solutions', xp: 300 }
    ]
  };
})();
