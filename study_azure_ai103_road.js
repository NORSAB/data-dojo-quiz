// ============================================================
// AI-103 — Recorrido de estudio (EN/ES)
// Claude (Opus 5.5) | 2026-10-09 | Pedido de Norman: el roadmap es una calle que avanza por dominios y
// subhabilidades. Cada parada tiene Estudiar, luego Preguntas, y se cierra al 90%. Mismo 90% en
// subhabilidades, dominios y simulacro, sin importar cuántas preguntas haya.
// ============================================================
(function () {
    const COURSE = 'azure-ai-103';
    const THRESHOLD = 0.9;
    const MOCK_WEIGHTS = { 1: 14, 2: 17, 3: 6, 4: 6, 5: 7 };
    const MASTERY_KEY = 'azure_ai103_mastery';
    // Preguntas vigentes que se apoyan en una nota anterior al temario 2026 (HNSW en la 5.1 de Azure AI Search).
    const EXTRA_TOPICS = { '5.1': ['5.1'] };

    const sections = (window.studyData || {})[COURSE];
    if (!Array.isArray(sections)) return;

    const ICON = {
        study: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z"/><path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z"/></svg>',
        quiz: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>',
        target: '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        flag: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 22V4"/><path d="M4 4h12l-2 4 2 4H4"/></svg>',
        gate: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="M9 12l2 2 4-4"/></svg>',
        finish: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="6"/><path d="M8.2 13.4L7 22l5-3 5 3-1.2-8.6"/></svg>',
        check: '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>'
    };

    const TEXT = {
        en: {
            intro: 'Walk the road from the first stop to the finish. Each stop is one official subskill: <strong>1 Study</strong> its topics, <strong>2 Practice</strong> its questions, and <strong>3 Close it</strong> when 90% of its questions are mastered. A question counts as mastered when your latest answer to it was correct. Every domain ends with a checkpoint at 90%, and the road ends with the 50-question mock at 90%.',
            study: 'Study', practice: 'Practice', close: 'Close at 90%',
            practiceBtn: n => 'Practice ' + n + ' questions',
            mastered: (m, n) => m + ' of ' + n + ' mastered',
            needed: n => n + ' needed to close',
            done: 'Closed', here: 'You are here', next: 'Ahead',
            topicsRead: (r, n) => r + ' of ' + n + ' topics read',
            domain: (label, w, k) => label + ' · weight ' + w + ' · ' + k + ' of 50 in the mock',
            gate: (d, n) => 'Domain ' + d + ' checkpoint: 90% of its ' + n + ' questions',
            gateBtn: 'Practice the whole domain',
            finish: 'Finish: 50-question mock with the official weights (14, 17, 6, 6, 7), 100 minutes. Close it at 90% twice in a row.',
            finishBtn: 'Start the mock',
            note: 'Answer keys follow the PDF. Where Microsoft Learn differs, the note is inside the explanation.'
        },
        es: {
            intro: 'Recorre la calle desde la primera parada hasta la meta. Cada parada es una subhabilidad oficial: <strong>1 Estudiar</strong> sus temas, <strong>2 Practicar</strong> sus preguntas y <strong>3 Cerrarla</strong> cuando el 90% de sus preguntas esté dominado. Una pregunta cuenta como dominada si tu última respuesta fue correcta. Cada dominio termina con un control al 90%, y la calle termina con el simulacro de 50 preguntas al 90%.',
            study: 'Estudiar', practice: 'Practicar', close: 'Cierre al 90%',
            practiceBtn: n => 'Practicar ' + n + ' preguntas',
            mastered: (m, n) => m + ' de ' + n + ' dominadas',
            needed: n => 'necesitas ' + n + ' para cerrar',
            done: 'Cerrada', here: 'Estás aquí', next: 'Más adelante',
            topicsRead: (r, n) => r + ' de ' + n + ' temas leídos',
            domain: (label, w, k) => label + ' · peso ' + w + ' · ' + k + ' de 50 en el simulacro',
            gate: (d, n) => 'Control del dominio ' + d + ': 90% de sus ' + n + ' preguntas',
            gateBtn: 'Practicar todo el dominio',
            finish: 'Meta: simulacro de 50 preguntas con los pesos oficiales (14, 17, 6, 6, 7), 100 minutos. Ciérralo al 90% dos veces seguidas.',
            finishBtn: 'Iniciar el simulacro',
            note: 'Las claves siguen el PDF. Donde Microsoft Learn dice otra cosa, la nota está dentro de la explicación.'
        }
    };

    const esc = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    const subskillOf = q => ((q.subdomain || '').match(/(\d)\.(\d)/) || [])[0];
    const domainOf = q => Number(((q.domain || '').match(/(?:Domain|Dominio)\s+(\d)/i) || [])[1]);
    const pair = title => { const p = String(title).split(' / '); return { en: p[0], es: p[1] || p[0] }; };
    const isActiveAi103 = q => q && /^ai103-/.test(q.id) && (q.lang === 'en' || q.lang === 'es');

    function bankByLang(lang) {
        return (window.questionsData || []).filter(q => isActiveAi103(q) && q.lang === lang && subskillOf(q));
    }

    // Subhabilidades y dominios, a partir del banco vigente (176 + 176).
    const en = bankByLang('en');
    const es = bankByLang('es');
    const subskills = {};
    en.forEach(q => {
        const id = subskillOf(q);
        if (!subskills[id]) subskills[id] = { id, domain: domainOf(q), en: q.subdomain.replace(/^Subdomain\s+\d\.\d:\s*/, ''), es: '', pdf: new Set(), count: 0 };
        subskills[id].count++;
        if (q.pdfNum) subskills[id].pdf.add(q.pdfNum);
    });
    es.forEach(q => {
        const s = subskills[subskillOf(q)];
        if (s && !s.es) s.es = q.subdomain.replace(/^Subdominio\s+\d\.\d:\s*/, '');
    });
    const order = Object.keys(subskills).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
    if (!order.length) return;

    // Temas que preparan cada subhabilidad: los suyos y los de otras subhabilidades que cubren sus preguntas.
    function itemByCode(code) {
        for (let d = 0; d < sections.length; d++) {
            const items = sections[d].items || [];
            for (let i = 0; i < items.length; i++) {
                if (String(items[i].title).indexOf(code + ' ') === 0) return { docIdx: d, itemIdx: i, item: items[i] };
            }
        }
        return null;
    }
    const index = window.ai103ExamTopicIndex || [];
    order.forEach(id => {
        const s = subskills[id];
        const own = index.filter(t => t.subskill === id).map(t => t.code);
        const cross = index.filter(t => t.subskill !== id && t.pdfNums.some(n => s.pdf.has(n))).map(t => t.code);
        s.topics = own.concat(cross, EXTRA_TOPICS[id] || []).filter((c, i, a) => a.indexOf(c) === i);
    });

    const domainTitles = {};
    sections.forEach(sec => {
        const m = String(sec.title).match(/^Domain (\d):/);
        if (!m) return;
        const p = pair(sec.title);
        const w = (p.en.match(/\(([^)]+%)\)/) || [])[1] || '';
        domainTitles[m[1]] = { en: p.en.replace(/\s*\([^)]*%\)\s*$/, ''), es: p.es.replace(/\s*\([^)]*%\)\s*$/, ''), weight: w };
    });

    // El título en español no trae el código del tema; se lo agregamos para que coincida con el inglés.
    const topicLabel = (code, title, lang) => { const t = pair(title)[lang]; return /^\d/.test(t) ? t : code + ' ' + t; };

    function buildRoad(lang) {
        const T = TEXT[lang];
        let html = '<div class="ai103-road" data-road-lang="' + lang + '">' +
            '<div class="content-box box-blue">' + T.intro + '</div><ol class="road-track">';
        let lastDomain = null;
        const closeDomain = d => {
            const n = en.filter(q => domainOf(q) === d).length;
            html += '<li class="road-node road-gate" data-road-gate="' + d + '">' +
                '<span class="road-marker">' + ICON.gate + '</span><div class="road-body">' +
                '<div class="road-head"><strong>' + esc(T.gate(d, n)) + '</strong><span class="road-badge" data-road-state></span></div>' +
                '<div class="road-meter" aria-hidden="true"><span class="road-meter-fill" data-road-fill></span><span class="road-meter-target"></span></div>' +
                '<div class="road-row"><span class="road-detail" data-road-detail></span>' +
                '<button type="button" class="road-btn" data-road-action="domain" data-road-domain="' + d + '">' + ICON.quiz + ' ' + esc(T.gateBtn) + '</button></div>' +
                '</div></li>';
        };
        order.forEach(id => {
            const s = subskills[id];
            if (s.domain !== lastDomain) {
                if (lastDomain !== null) closeDomain(lastDomain);
                lastDomain = s.domain;
                const dt = domainTitles[s.domain] || { en: 'Domain ' + s.domain, es: 'Dominio ' + s.domain, weight: '' };
                html += '<li class="road-node road-domain"><span class="road-marker">' + ICON.flag + '</span><div class="road-body">' +
                    '<strong>' + esc(T.domain(dt[lang], dt.weight, MOCK_WEIGHTS[s.domain] || 0)) + '</strong></div></li>';
            }
            const topics = s.topics.map(code => {
                const found = itemByCode(code);
                if (!found) return '';
                return '<li><button type="button" class="road-topic" data-road-action="study" data-road-topic="' + esc(code) + '">' +
                    '<span class="road-topic-check" aria-hidden="true">' + ICON.check + '</span><span>' + esc(topicLabel(code, found.item.title, lang)) + '</span></button></li>';
            }).join('');
            html += '<li class="road-node road-stop" data-road-subskill="' + id + '">' +
                '<span class="road-marker road-marker-num">' + id + '</span><div class="road-body">' +
                '<div class="road-head"><strong>' + esc(s[lang] || s.en) + '</strong><span class="road-badge" data-road-state></span></div>' +
                '<div class="road-step"><span class="road-step-label">' + ICON.study + ' 1 ' + esc(T.study) + ' <span class="road-step-note" data-road-read></span></span><ul class="road-topics">' + topics + '</ul></div>' +
                '<div class="road-step"><span class="road-step-label">' + ICON.quiz + ' 2 ' + esc(T.practice) + '</span>' +
                '<button type="button" class="road-btn" data-road-action="subskill" data-road-subskill="' + id + '">' + esc(T.practiceBtn(s.count)) + '</button></div>' +
                '<div class="road-step"><span class="road-step-label">' + ICON.target + ' 3 ' + esc(T.close) + '</span>' +
                '<div class="road-meter" aria-hidden="true"><span class="road-meter-fill" data-road-fill></span><span class="road-meter-target"></span></div>' +
                '<span class="road-detail" data-road-detail></span></div>' +
                '</div></li>';
        });
        if (lastDomain !== null) closeDomain(lastDomain);
        html += '<li class="road-node road-finish" data-road-finish><span class="road-marker">' + ICON.finish + '</span><div class="road-body">' +
            '<div class="road-head"><strong>' + esc(T.finish) + '</strong><span class="road-badge" data-road-state></span></div>' +
            '<div class="road-row"><button type="button" class="road-btn road-btn-primary" data-road-action="mock">' + ICON.target + ' ' + esc(T.finishBtn) + '</button></div>' +
            '</div></li></ol><p class="road-note">' + esc(T.note) + '</p></div>';
        return html;
    }

    sections.unshift({
        title: 'Roadmap de estudio / Study roadmap',
        items: [{
            title: 'AI-103 study road / Recorrido de estudio AI-103',
            content: '<div class="lang-section" data-lang="en">' + buildRoad('en') + '</div>' +
                '<div class="lang-section" data-lang="es">' + buildRoad('es') + '</div>'
        }]
    });

    // Para los validadores en Node: expone las paradas y sus temas.
    window.ai103Road = order.map(id => ({ id, domain: subskills[id].domain, count: subskills[id].count, topics: subskills[id].topics.filter(c => itemByCode(c)) }));
    if (typeof document === 'undefined' || !document.addEventListener) return;

    // ---- Progreso en vivo: se calcula cada vez que el recorrido aparece en pantalla ----
    function readViewed() {
        try { return (JSON.parse(localStorage.getItem(MASTERY_KEY) || '{}').sectionsViewed) || []; } catch (e) { return []; }
    }
    function readLatest() {
        try { return typeof window.getLatestAnswerByQuestion === 'function' ? window.getLatestAnswerByQuestion(COURSE) : new Map(); } catch (e) { return new Map(); }
    }
    const canonical = id => typeof window.getCanonicalQuestionId === 'function'
        ? window.getCanonicalQuestionId(id) : String(id).replace(/-(es|en)$/, '');

    function scoreOf(questions, latest) {
        let mastered = 0;
        questions.forEach(q => { if (latest.get(canonical(q.id)) === true) mastered++; });
        const total = questions.length;
        return { mastered, total, needed: Math.ceil(total * THRESHOLD), closed: total > 0 && mastered / total >= THRESHOLD };
    }

    function hydrate(road) {
        road.setAttribute('data-road-ready', '1');
        const lang = road.getAttribute('data-road-lang') === 'es' ? 'es' : 'en';
        const T = TEXT[lang];
        const latest = readLatest();
        const viewed = readViewed();
        let currentMarked = false;
        const setState = (node, state) => {
            node.classList.remove('is-done', 'is-current', 'is-ahead');
            node.classList.add(state === 'done' ? 'is-done' : (state === 'current' ? 'is-current' : 'is-ahead'));
            const badge = node.querySelector('[data-road-state]');
            if (badge) badge.textContent = state === 'done' ? T.done : (state === 'current' ? T.here : T.next);
        };
        const paint = (node, sc) => {
            const fill = node.querySelector('[data-road-fill]');
            if (fill) fill.style.width = (sc.total ? Math.round(sc.mastered / sc.total * 100) : 0) + '%';
            const det = node.querySelector('[data-road-detail]');
            if (det) det.textContent = T.mastered(sc.mastered, sc.total) + (sc.closed ? '' : ' · ' + T.needed(sc.needed));
        };
        road.querySelectorAll('.road-node').forEach(node => {
            if (node.classList.contains('road-domain')) {
                node.classList.add(currentMarked ? 'is-ahead' : 'is-done');
                return;
            }
            let sc;
            if (node.hasAttribute('data-road-subskill')) {
                const id = node.getAttribute('data-road-subskill');
                sc = scoreOf(en.filter(q => subskillOf(q) === id), latest);
                let read = 0;
                const topicBtns = node.querySelectorAll('[data-road-topic]');
                topicBtns.forEach(btn => {
                    const found = itemByCode(btn.getAttribute('data-road-topic'));
                    const isRead = !!found && viewed.indexOf(found.docIdx + '-' + found.itemIdx) !== -1;
                    btn.classList.toggle('is-read', isRead);
                    if (isRead) read++;
                });
                const readEl = node.querySelector('[data-road-read]');
                if (readEl) readEl.textContent = '(' + T.topicsRead(read, topicBtns.length) + ')';
            } else if (node.hasAttribute('data-road-gate')) {
                const d = Number(node.getAttribute('data-road-gate'));
                sc = scoreOf(en.filter(q => domainOf(q) === d), latest);
            } else {
                setState(node, currentMarked ? 'ahead' : 'current');
                return;
            }
            paint(node, sc);
            if (sc.closed) setState(node, 'done');
            else if (!currentMarked) { setState(node, 'current'); currentMarked = true; }
            else setState(node, 'ahead');
        });
        // La bandera de cada dominio sigue el estado de su primera parada.
        road.querySelectorAll('.road-domain').forEach(flag => {
            const nextStop = flag.nextElementSibling;
            flag.classList.remove('is-done', 'is-ahead');
            flag.classList.add(nextStop && nextStop.classList.contains('is-ahead') ? 'is-ahead' : 'is-done');
        });
    }

    function hydrateAll() {
        document.querySelectorAll('.ai103-road:not([data-road-ready])').forEach(hydrate);
    }
    if (typeof MutationObserver === 'function' && document.body) {
        new MutationObserver(hydrateAll).observe(document.body, { childList: true, subtree: true });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            if (typeof MutationObserver === 'function') new MutationObserver(hydrateAll).observe(document.body, { childList: true, subtree: true });
        });
    }

    // ---- Acciones: abrir un tema, practicar una subhabilidad o un dominio, iniciar el simulacro ----
    function openTopic(code) {
        const found = itemByCode(code);
        const toc = document.getElementById('unir-toc');
        if (!found || !toc) return;
        const card = toc.querySelector('.unir-section-card[data-doc-idx="' + found.docIdx + '"]');
        if (!card) return;
        const body = card.querySelector('.unir-section-body');
        const toggle = card.querySelector('.unir-section-toggle');
        if (body && body.hasAttribute('hidden') && toggle) toggle.click();
        const buttons = card.querySelectorAll('.unir-topic-item .unir-item-button');
        if (buttons[found.itemIdx]) buttons[found.itemIdx].click();
    }

    function startQuiz(questions) {
        if (!questions.length || typeof window.launchDirectQuiz !== 'function') return;
        if (typeof window.closeStudyMode === 'function') window.closeStudyMode();
        if (typeof window._setCurrentCourseId === 'function') window._setCurrentCourseId(COURSE);
        const ordered = typeof window.prioritizeExamQuestions === 'function' ? window.prioritizeExamQuestions(questions) : questions;
        window.launchDirectQuiz(ordered, 'domain');
    }

    function currentBank() {
        const lang = window.AppI18n && window.AppI18n.getLanguage() === 'en' ? 'en' : 'es';
        return bankByLang(lang);
    }

    document.addEventListener('click', e => {
        const btn = e.target.closest && e.target.closest('.ai103-road [data-road-action]');
        if (!btn) return;
        e.preventDefault();
        const action = btn.getAttribute('data-road-action');
        if (action === 'study') {
            openTopic(btn.getAttribute('data-road-topic'));
        } else if (action === 'subskill') {
            const id = btn.getAttribute('data-road-subskill');
            startQuiz(currentBank().filter(q => subskillOf(q) === id));
        } else if (action === 'domain') {
            const d = Number(btn.getAttribute('data-road-domain'));
            startQuiz(currentBank().filter(q => domainOf(q) === d));
        } else if (action === 'mock') {
            if (typeof window.closeStudyMode === 'function') window.closeStudyMode();
            if (typeof window._setCurrentCourseId === 'function') window._setCurrentCourseId(COURSE);
            if (typeof window.setupRealExamButton === 'function') window.setupRealExamButton(COURSE);
            const examBtn = document.getElementById('start-real-exam-btn');
            if (examBtn && typeof examBtn.onclick === 'function') examBtn.onclick();
        }
    });
})();
