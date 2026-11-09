/**
 * Codex (GPT-5) | 2026-08-23 21:19 CST | Genera flashcards y términos bilingües de GenAI desde el banco validado EN/ES.
 */
(function buildDatabricksGenAIStudyResources() {
  const courseId = 'databricks-genai-engineer';
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

  const selectedPairs = [];
  [...pairsByDomain.entries()]
    .sort(([a], [b]) => a - b)
    .forEach(([, pairs]) => {
      const firstBySubdomain = [];
      const seenSubdomains = new Set();
      pairs.forEach(pair => {
        if (!seenSubdomains.has(pair.en.subdomain)) {
          seenSubdomains.add(pair.en.subdomain);
          firstBySubdomain.push(pair);
        }
      });
      const representativeIds = new Set(firstBySubdomain.map(pair => pair.en.id));
      const remaining = pairs.filter(pair => !representativeIds.has(pair.en.id));
      selectedPairs.push(...firstBySubdomain.concat(remaining).slice(0, 16));
    });

  window.databricksGenAIFlashcards = selectedPairs.map(({ en, es }) => {
    const answerEn = getAnswer(en);
    const answerEs = getAnswer(es);
    const domainNumber = getDomainNumber(en.domain);
    const topic = `D${domainNumber} · ${cleanLabel(en.domain)} / ${cleanLabel(es.domain)}`;
    return {
      id: `fc-${en.id}`,
      tema: topic,
      domain: `${en.domain} / ${es.domain}`,
      category: `${cleanLabel(en.subdomain)} / ${cleanLabel(es.subdomain)}`,
      front: languageBlock('en', 'Question', en.prompt) + languageBlock('es', 'Pregunta', es.prompt),
      back:
        languageBlock('en', 'Correct answer', `${answerEn.text}\n\n${answerEn.explanation}`) +
        languageBlock('es', 'Respuesta correcta', `${answerEs.text}\n\n${answerEs.explanation}`),
      pregunta: `${en.prompt} / ${es.prompt}`,
      respuesta: `${answerEn.text} / ${answerEs.text}`
    };
  });

  window.databricksGenAIPatterns = [...pairsByDomain.entries()]
    .sort(([a], [b]) => a - b)
    .map(([domainNumber, pairs]) => {
      const firstBySubdomain = [];
      const seenSubdomains = new Set();
      pairs.forEach(pair => {
        if (!seenSubdomains.has(pair.en.subdomain)) {
          seenSubdomains.add(pair.en.subdomain);
          firstBySubdomain.push(pair);
        }
      });
      const firstPair = pairs[0];
      return {
        category: `D${domainNumber} · ${cleanLabel(firstPair.en.domain)} / ${cleanLabel(firstPair.es.domain)}`,
        items: firstBySubdomain.slice(0, 4).map(({ en, es }) => {
          const answerEn = getAnswer(en);
          const answerEs = getAnswer(es);
          return {
            title: `${cleanLabel(en.subdomain)} / ${cleanLabel(es.subdomain)}`,
            scenario: languageBlock('en', 'Scenario', en.prompt) + languageBlock('es', 'Escenario', es.prompt),
            recommendation:
              languageBlock('en', 'Recommended approach', `${answerEn.text}\n\n${answerEn.explanation}`) +
              languageBlock('es', 'Enfoque recomendado', `${answerEs.text}\n\n${answerEs.explanation}`)
          };
        })
      };
    });

  const conceptIcons = [
    'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    'M3 5h18v2H3V5zm2 5h14v2H5v-2zm4 5h6v2H9v-2z',
    'M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z',
    'M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z',
    'M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z',
    'M15.5 14h-.79l-.28-.27A6.5 6.5 0 1014 14.43l.27.28v.79l5 4.99L20.49 19l-4.99-5z'
  ];

  window.conceptosDatabricksGenAI = [...pairsByDomain.entries()]
    .sort(([a], [b]) => a - b)
    .map(([domainNumber, pairs]) => {
      const grouped = new Map();
      pairs.forEach(pair => {
        if (!grouped.has(pair.en.subdomain)) grouped.set(pair.en.subdomain, []);
        grouped.get(pair.en.subdomain).push(pair);
      });
      const firstPair = pairs[0];
      return {
        category: `${cleanLabel(firstPair.en.domain)} / ${cleanLabel(firstPair.es.domain)}`,
        icon: conceptIcons[domainNumber - 1] || conceptIcons[0],
        conceptos: [...grouped.values()].map(group => {
          const representative = group[0];
          const answerEn = getAnswer(representative.en);
          const answerEs = getAnswer(representative.es);
          const frequency = group.length;
          return {
            nombre: `${cleanLabel(representative.en.subdomain)} / ${cleanLabel(representative.es.subdomain)}`,
            tipo: 'Exam competency / Competencia del examen',
            tema: `${representative.en.domain} / ${representative.es.domain}`,
            relevancia: frequency >= 6 ? 'alta' : (frequency >= 3 ? 'media' : 'baja'),
            contribucion:
              languageBlock('en', 'What you must understand', answerEn.explanation) +
              languageBlock('es', 'Lo que debes comprender', answerEs.explanation),
            datoExamen:
              languageBlock('en', 'Key answer', answerEn.text) +
              languageBlock('es', 'Respuesta clave', answerEs.text)
          };
        })
      };
    });
})();
