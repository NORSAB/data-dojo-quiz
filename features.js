/**
 * DATA DOJO — FUNCTIONAL FEATURES (F1-F20)
 * =========================================
 * F1: Weakness Review Mode (Repaso de Errores)
 * F2: Domain Practice Cards (Practica por Dominio)
 * F3: Simulated Exam with Countdown Timer (Examen Simulado)
 * F4: Certificate Generator (Certificado de Aprobacion)
 * F5: Progress Dashboard (Dashboard KPI + Radar + Trend)
 * F6: Daily Streak Tracker (Racha Diaria)
 * F7: PWA/Offline Support (Service Worker)
 * F8: Sound Feedback (Web Audio API)
 * F9: Quick Quiz (10 Random Questions)
 * F10: Flashcards Quick Access
 * F11: Streak at Risk Banner
 * F12: Time per Question Stats
 * F13: CSV Export
 * F14: Post-Exam Summary
 * F15: Study Plan (Guided Study Mode)
 * F16: Domain-Specific Flashcards
 * F17: Extended History (50 entries)
 * F18: Full Progress Backup/Restore
 * F19: Marathon Mode (Full Question Bank)
 * F20: Dedicated Statistics Page
 */

// Codex (GPT-5) | 2026-08-23 22:17 CST | Evita duplicar bancos gemelos y usa el idioma global en paneles derivados.
function getLocalizedCourseQuestions(courseId) {
    const allQuestions = window.questionsData || [];
    const language = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
    if (courseId) {
        const scoped = allQuestions.filter(q => q.courseId === courseId);
        const localized = scoped.filter(q => q.lang === language);
        return localized.length > 0 ? localized : scoped;
    }
    const byCourse = new Map();
    allQuestions.forEach(question => {
        const key = question.courseId || '__global__';
        if (!byCourse.has(key)) byCourse.set(key, []);
        byCourse.get(key).push(question);
    });
    return [...byCourse.values()].flatMap(scoped => {
        const localized = scoped.filter(q => q.lang === language);
        return localized.length > 0 ? localized : scoped;
    });
}

function getCanonicalQuestionId(questionId) {
    return String(questionId || '').replace(/-es$/, '');
}

// =============================================
// F1: SMART ERROR REVIEW MODE (Repaso Inteligente de Fallos)
// =============================================
function updateWeaknessPanel(courseId) {
    const panel = document.getElementById('weakness-shortcut');
    if (!panel) return;

    const cid = courseId || window.currentCourseId;
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const allQuestions = (typeof getLocalizedCourseQuestions === 'function' ? getLocalizedCourseQuestions(cid) : (window.questionsData || [])).filter(q => !q.courseId || q.courseId === cid);

    // Collect ALL unique missed IDs for this course
    const allMissedIds = new Set();
    history.forEach(h => {
        if (h.courseCheck === cid && h.missedIds && Array.isArray(h.missedIds)) {
            h.missedIds.forEach(id => allMissedIds.add(id));
        }
    });

    // Filter: keep only questions that were wrong in their most recent attempt
    const stillWeak = new Set();
    allMissedIds.forEach(qId => {
        for (let i = 0; i < history.length; i++) {
            const h = history[i];
            if (h.courseCheck === cid && h.questionIds && h.questionIds.includes(qId)) {
                if (h.missedIds && h.missedIds.includes(qId)) {
                    stillWeak.add(qId);
                }
                break;
            }
        }
    });

    const count = stillWeak.size;
    const countEl = document.getElementById('weakness-count');
    if (countEl) countEl.textContent = count;

    if (count === 0) {
        panel.style.display = 'none';
        return;
    }
    panel.style.display = 'block';

    // Domain breakdown chips
    const domainsContainer = document.getElementById('weakness-domains');
    const domainCounts = {};

    stillWeak.forEach(qId => {
        const canonical = typeof getCanonicalQuestionId === 'function' ? getCanonicalQuestionId(qId) : qId;
        const q = allQuestions.find(qq => qq.id === qId || (typeof getCanonicalQuestionId === 'function' && getCanonicalQuestionId(qq.id) === canonical));
        if (q) {
            const domain = q.domain || 'General';
            domainCounts[domain] = (domainCounts[domain] || 0) + 1;
        }
    });

    if (domainsContainer) {
        domainsContainer.innerHTML = '';
        domainsContainer.className = 'weakness-domain-list';
        Object.entries(domainCounts).forEach(([domain, cnt]) => {
            const chip = document.createElement('span');
            chip.className = 'weakness-domain-chip';
            chip.textContent = `${domain} (${cnt})`;
            domainsContainer.appendChild(chip);
        });
    }

    // Start weakness review button
    const startBtn = document.getElementById('start-weakness-btn');
    if (startBtn) {
        startBtn.onclick = () => {
            const weakQuestions = allQuestions.filter(q => {
                const canonical = typeof getCanonicalQuestionId === 'function' ? getCanonicalQuestionId(q.id) : q.id;
                return stillWeak.has(q.id) || stillWeak.has(canonical);
            });
            if (weakQuestions.length === 0) { alert('No hay preguntas de repaso disponibles.'); return; }
            launchDirectQuiz(weakQuestions, 'smart_error_review');
        };
    }
}

window.printReadinessReport = function() {
    window.print();
};


// =============================================
// F2: DOMAIN PRACTICE CARDS
// =============================================
function renderDomainCards(courseId) {
    const container = document.getElementById('domain-cards');
    const wrapper = document.getElementById('domain-cards-container');
    if (!container || !wrapper) return;

    const cid = courseId || window.currentCourseId;
    const allQuestions = getLocalizedCourseQuestions(cid);
    const questions = allQuestions;

    if (!questions || questions.length === 0) { wrapper.style.display = 'none'; return; }

    // Extract unique domains
    const domains = {};
    questions.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, ids: [] };
        domains[d].total++;
        domains[d].ids.push(getCanonicalQuestionId(q.id));
    });

    if (Object.keys(domains).length <= 1) { wrapper.style.display = 'none'; return; }

    // Calculate historical % per domain based on LATEST attempt for that domain
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === cid);

    Object.keys(domains).forEach(domain => {
        let attempted = 0, correct = 0;
        
        // Find the most recent history entry that contains questions from this domain
        let latestAttemptIndex = -1;
        for (let i = 0; i < history.length; i++) {
            const h = history[i];
            if (h.questionIds && h.questionIds.some(qId => domains[domain].ids.includes(getCanonicalQuestionId(qId)))) {
                latestAttemptIndex = i;
                break;
            }
        }

        if (latestAttemptIndex >= 0) {
            const h = history[latestAttemptIndex];
            h.questionIds.forEach((qId, idx) => {
                if (domains[domain].ids.includes(getCanonicalQuestionId(qId))) {
                    attempted++;
                    const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
                    if (ans && ans.isCorrect) correct++;
                }
            });
        }
        
        domains[domain].attempted = attempted;
        domains[domain].pct = attempted > 0 ? Math.round((correct / attempted) * 100) : -1;
    });

    container.innerHTML = '';
    Object.entries(domains).sort((a, b) => a[1].pct - b[1].pct).forEach(([name, data]) => {
        const pctClass = data.pct < 0 ? '' : data.pct >= 70 ? 'good' : data.pct >= 50 ? 'medium' : 'weak';
        const pctText = data.pct < 0 ? 'Sin datos' : `${data.pct}%`;
        const barColor = data.pct >= 70 ? 'var(--success-color)' : data.pct >= 50 ? 'var(--warning-color)' : 'var(--danger-color)';
        const barWidth = data.pct < 0 ? 0 : data.pct;

        const card = document.createElement('div');
        card.className = 'domain-card';
        card.innerHTML = `
            <div class="domain-card-name">${name}</div>
            <div class="domain-card-stats">
                <span class="domain-card-count">${data.total} preguntas</span>
                <span class="domain-card-pct ${pctClass}">${pctText}</span>
            </div>
            <div class="domain-card-bar">
                <div class="domain-card-bar-fill" style="width:${barWidth}%; background:${barColor};"></div>
            </div>
        `;
        card.onclick = () => {
            const domainQuestions = allQuestions.filter(q => data.ids.includes(getCanonicalQuestionId(q.id)));
            launchDirectQuiz(domainQuestions, 'domain');
        };
        container.appendChild(card);
    });
    wrapper.style.display = 'block';
}


// =============================================
// F3: COUNTDOWN TIMER FOR REAL EXAM
// =============================================
let countdownSeconds = 0;
let countdownInterval = null;

function startCountdownTimer(minutes) {
    countdownSeconds = minutes * 60;
    const display = document.getElementById('timer-display');
    if (!display) return;
    display.classList.remove('hidden');
    display.classList.remove('timer-warning');
    updateCountdownDisplay();

    countdownInterval = setInterval(() => {
        countdownSeconds--;
        if (countdownSeconds <= 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            alert('Se acabo el tiempo. El examen se finalizara automaticamente.');
            if (typeof window.tryFinishQuiz === 'function') {
                window.tryFinishQuiz();
            }
            return;
        }
        if (countdownSeconds <= 600) {
            const display = document.getElementById('timer-display');
            if (display) display.classList.add('timer-warning');
        }
        updateCountdownDisplay();
    }, 1000);
}

function updateCountdownDisplay() {
    const display = document.getElementById('timer-display');
    if (!display) return;
    const mins = Math.floor(countdownSeconds / 60);
    const secs = countdownSeconds % 60;
    display.textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function stopCountdownTimer() {
    if (countdownInterval) {
        clearInterval(countdownInterval);
        countdownInterval = null;
    }
}

function setupRealExamButton(courseId) {
    const btn = document.getElementById('start-real-exam-btn');
    if (!btn) return;

    const cid = courseId || window.currentCourseId;
    const allQuestions = getLocalizedCourseQuestions(cid);
    const questions = allQuestions;

    if (questions && questions.length >= 45) {
        btn.style.display = 'flex';
    } else {
        btn.style.display = 'none';
        return;
    }

    btn.onclick = () => {
        // =====================================================
        // DOMAIN-BALANCED EXAM SELECTION (9 domains × 5 = 45)
        // Prioritizes higher IDs (200+) = most updated questions
        // =====================================================
        const QUESTIONS_PER_DOMAIN = 5;

        // 1. Group questions by domain
        const domainMap = {};
        questions.forEach(q => {
            const d = q.domain || 'General';
            if (!domainMap[d]) domainMap[d] = [];
            domainMap[d].push(q);
        });

        const domains = Object.keys(domainMap);
        const examQuestions = [];

        // 2. Helper: extract numeric ID from question ID (e.g. "db-da-250" -> 250)
        function getNumericId(q) {
            const match = q.id.match(/(\d+)$/);
            return match ? parseInt(match[1], 10) : 0;
        }

        // 3. For each domain, pick 5 questions prioritizing higher IDs
        domains.forEach(domain => {
            const pool = [...domainMap[domain]];

            // Sort by numeric ID descending (newest first)
            pool.sort((a, b) => getNumericId(b) - getNumericId(a));

            // Separate recent (ID >= 200) and older questions
            const recent = pool.filter(q => getNumericId(q) >= 200);
            const older = pool.filter(q => getNumericId(q) < 200);

            // Shuffle within each tier for variety
            recent.sort(() => Math.random() - 0.5);
            older.sort(() => Math.random() - 0.5);

            // Pick from recent first, then supplement from older
            const selected = [];
            for (const q of recent) {
                if (selected.length >= QUESTIONS_PER_DOMAIN) break;
                selected.push(q);
            }
            for (const q of older) {
                if (selected.length >= QUESTIONS_PER_DOMAIN) break;
                selected.push(q);
            }

            examQuestions.push(...selected);
        });

        // 4. Shuffle final exam to avoid domain clustering
        examQuestions.sort(() => Math.random() - 0.5);

        // Log distribution for debugging
        const dist = {};
        examQuestions.forEach(q => {
            const d = q.domain || 'General';
            dist[d] = (dist[d] || 0) + 1;
        });
        console.log(`Exam Simulation: ${examQuestions.length} questions, distribution:`, dist);

        launchDirectQuiz(examQuestions, 'simulated_exam', 120);
    };
}


// =============================================
// F4: CERTIFICATE GENERATOR
// =============================================
function generateCertificate(courseName, score, userName, beltName, beltColor) {
    document.fonts.ready.then(() => {
        // M6: Font fallback detection
        const fontAvailable = document.fonts.check('700 36px Inter');
        const ff = fontAvailable ? 'Inter, sans-serif' : 'Segoe UI, system-ui, sans-serif';

        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 800;
        const ctx = canvas.getContext('2d');

        // Background gradient
        const bgGrad = ctx.createLinearGradient(0, 0, 1200, 800);
        bgGrad.addColorStop(0, '#0f172a');
        bgGrad.addColorStop(0.5, '#1e293b');
        bgGrad.addColorStop(1, '#0f172a');
        ctx.fillStyle = bgGrad;
        ctx.fillRect(0, 0, 1200, 800);

        // Decorative border
        ctx.strokeStyle = '#3157d5';
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 30, 1140, 740);
        ctx.strokeStyle = 'rgba(49, 87, 213, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(40, 40, 1120, 720);

        // Header
        ctx.fillStyle = '#3157d5';
        ctx.font = `700 14px ${ff}`;
        ctx.textAlign = 'center';
        ctx.fillText('THE DATA DOJO', 600, 90);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = `800 36px ${ff}`;
        ctx.fillText('CERTIFICADO DE APROBACION', 600, 140);

        // Decorative line
        const lineGrad = ctx.createLinearGradient(300, 160, 900, 160);
        lineGrad.addColorStop(0, 'transparent');
        lineGrad.addColorStop(0.5, '#3157d5');
        lineGrad.addColorStop(1, 'transparent');
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(300, 165);
        ctx.lineTo(900, 165);
        ctx.stroke();

        // Content
        ctx.fillStyle = '#94a3b8';
        ctx.font = `400 18px ${ff}`;
        ctx.fillText('Se certifica que', 600, 230);

        ctx.fillStyle = '#ffffff';
        ctx.font = `700 42px ${ff}`;
        ctx.fillText(userName, 600, 290);

        ctx.fillStyle = '#94a3b8';
        ctx.font = `400 18px ${ff}`;
        ctx.fillText('ha completado exitosamente el examen', 600, 350);

        ctx.fillStyle = '#3157d5';
        ctx.font = `700 28px ${ff}`;
        ctx.fillText(courseName, 600, 400);

        // Score circle
        ctx.beginPath();
        ctx.arc(600, 500, 60, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(49, 87, 213, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#3157d5';
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.fillStyle = '#ffffff';
        ctx.font = `800 36px ${ff}`;
        ctx.fillText(`${score}%`, 600, 510);
        ctx.fillStyle = '#94a3b8';
        ctx.font = `400 14px ${ff}`;
        ctx.fillText('SCORE', 600, 535);

        // Belt
        ctx.fillStyle = beltColor;
        ctx.font = `700 16px ${ff}`;
        ctx.fillText(beltName, 600, 610);

        // Date
        const fecha = new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
        ctx.fillStyle = '#64748b';
        ctx.font = `400 16px ${ff}`;
        ctx.fillText(fecha, 600, 660);

        // Footer
        ctx.fillStyle = '#334155';
        ctx.font = `400 12px ${ff}`;
        ctx.fillText('The Data Dojo — Quiz Simulator', 600, 740);

        // Download
        const link = document.createElement('a');
        link.download = `certificado_${courseName.replace(/\s+/g, '_')}_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}

function addCertificateButton(score, passed) {
    if (!passed) return;
    // Remove previous cert button if exists
    const existing = document.getElementById('cert-download-btn');
    if (existing) existing.remove();

    const toolsDiv = document.querySelector('.result-tools');
    if (!toolsDiv) return;

    const certBtn = document.createElement('button');
    certBtn.id = 'cert-download-btn';
    certBtn.className = 'btn btn-primary btn-sm';
    certBtn.style.marginLeft = '8px';
    certBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" style="vertical-align:middle;margin-right:4px;">
            <path d="M12 15l-5-5h3V4h4v6h3l-5 5zm-7 4v-2h14v2H5z"/>
        </svg>
        Descargar Certificado
    `;

    certBtn.onclick = () => {
        const profile = window.HeroManager ? window.HeroManager.data.profile : { nick: 'Estudiante' };
        const belt = window.HeroManager ? window.HeroManager.getBeltInfo(window.HeroManager.data.stats.xp) : { name: 'Estudiante', color: '#A0A0A0' };
        const cid = window.currentCourseId || 'Quiz';
        const courseTitle = document.querySelector('#course-section-title')?.textContent?.trim() || cid;
        generateCertificate(courseTitle, score, profile.nick || profile.name || 'Estudiante', belt.name, belt.color);
    };
    toolsDiv.appendChild(certBtn);
}


// =============================================
// F5: PROGRESS DASHBOARD
// =============================================
function renderProgressDashboard(courseId) {
    const panel = document.getElementById('dashboard-panel');
    if (!panel) return;

    const cid = courseId || window.currentCourseId;
    let history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    if (cid) history = history.filter(h => h.courseCheck === cid);

    if (history.length < 2) { panel.style.display = 'none'; return; }
    panel.style.display = 'block';

    // KPIs
    const kpiContainer = document.getElementById('dashboard-kpis');
    const totalQuestions = history.reduce((sum, h) => sum + (h.total || 0), 0);
    const totalCorrect = history.reduce((sum, h) => sum + (h.score || 0), 0);
    const globalPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const examsPassed = history.filter(h => h.passed).length;
    const bestScore = Math.max(...history.map(h => h.total > 0 ? Math.round((h.score / h.total) * 100) : 0));
    
    let lastScore = 0;
    if (history.length > 0) {
        const lastH = history[history.length - 1];
        lastScore = lastH.total > 0 ? Math.round((lastH.score / lastH.total) * 100) : 0;
    }

    if (kpiContainer) {
        kpiContainer.innerHTML = `
            <div class="kpi-card"><div class="kpi-value">${totalQuestions}</div><div class="kpi-label">Preguntas Totales</div></div>
            <div class="kpi-card"><div class="kpi-value">${globalPct}%</div><div class="kpi-label">Acierto Global</div></div>
            <div class="kpi-card"><div class="kpi-value">${examsPassed}</div><div class="kpi-label">Exámenes Aprobados</div></div>
            <div class="kpi-card"><div class="kpi-value">${bestScore}%</div><div class="kpi-label">Mejor Score</div></div>
            <div class="kpi-card" style="border: 1px solid var(--primary-color);"><div class="kpi-value" style="color: var(--primary-color);">${lastScore}%</div><div class="kpi-label" style="color: var(--primary-color); font-weight: bold;">Último Score</div></div>
        `;
    }

    // Official Certification UI
    const existingBanner = document.getElementById('official-cert-banner');
    if (existingBanner) existingBanner.remove();

    const pState = typeof window.getProfile === 'function' ? window.getProfile() : JSON.parse(localStorage.getItem('userProfile') || '{"certs":{}}');
    const isDatabricksCertified = pState && pState.certs && pState.certs['databricks-da'];
    
    if (isDatabricksCertified && cid === 'databricks-da') {
        const certBanner = document.createElement('div');
        certBanner.id = 'official-cert-banner';
        certBanner.className = 'kpi-card';
        certBanner.style = 'grid-column: 1 / -1; border: 2px solid #3157d5; background: rgba(49,87,213,0.08); flex-direction: row; justify-content: space-between; align-items: center; padding: 15px 20px;';
        certBanner.innerHTML = `
            <div style="display:flex; align-items:center; gap: 15px;">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#3157d5" stroke-width="2" fill="none"><path d="M12 15l-5-5h3V4h4v6h3l-5 5zm-7 4v-2h14v2H5z"/></svg>
                <div style="text-align:left;">
                    <div style="color:#3157d5; font-weight:bold; font-size:1.1rem;">Oficialmente Certificado</div>
                    <div style="font-size:0.8rem; color:var(--text-muted);">Databricks Certified Data Analyst Associate</div>
                </div>
            </div>
            <div style="font-size:1.5rem; font-weight:900; color:#3157d5;">15-Abr-2026</div>
        `;
        if (kpiContainer) {
            kpiContainer.parentNode.insertBefore(certBanner, kpiContainer);
        }
    }

    renderDashTrendChart(history);
    renderDashRadarChart(history);
    renderDashRecommendation(history);

    const closeBtn = document.getElementById('close-dashboard');
    if (closeBtn) closeBtn.onclick = () => { panel.style.display = 'none'; };
}

function renderDashTrendChart(history) {
    const container = document.getElementById('trend-chart-svg');
    if (!container) return;
    const data = [...history].reverse().slice(-20);
    if (data.length < 2) { container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Necesitas al menos 2 intentos</p>'; return; }

    const w = 400, h = 150, pad = 30;
    const points = data.map((d, i) => {
        const x = pad + (i / (data.length - 1)) * (w - 2 * pad);
        const pct = d.total === 0 ? 0 : (d.score / d.total);
        const y = pad + (1 - pct) * (h - 2 * pad);
        return { x, y, pct: Math.round(pct * 100), passed: d.passed };
    });
    const polyline = points.map(p => `${p.x},${p.y}`).join(' ');
    const passY = pad + (1 - 0.7) * (h - 2 * pad);

    container.innerHTML = `
        <svg width="100%" height="${h}" viewBox="0 0 ${w} ${h}" style="overflow:visible;">
            <line x1="${pad}" y1="${passY}" x2="${w-pad}" y2="${passY}" stroke="var(--success-color)" stroke-dasharray="4" opacity="0.3"/>
            <text x="${w-pad+5}" y="${passY+4}" fill="var(--success-color)" font-size="10" opacity="0.5">70%</text>
            <polyline fill="none" stroke="var(--primary-color)" stroke-width="2.5" stroke-linejoin="round" points="${polyline}"/>
            ${points.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${p.passed ? 'var(--success-color)' : 'var(--danger-color)'}" stroke="var(--card-bg)" stroke-width="2"/>`).join('')}
        </svg>
    `;
}

function renderDashRadarChart(history) {
    const container = document.getElementById('radar-chart-svg');
    if (!container) return;

    const domainStats = {};
    const allQ = window.questionsData || [];
    
    // Evaluate from most recent to oldest to grab the latest attempt (history[0] is newest)
    const sortedHistory = history;
    
    sortedHistory.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        const currentAttemptDomains = new Set();
        
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const domain = q.domain || 'General';
            
            // Skip if domain was already processed in a more recent test
            if (domainStats[domain] && domainStats[domain].completedLatest) return;
            
            if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0, completedLatest: false };
            currentAttemptDomains.add(domain);
            
            domainStats[domain].total++;
            const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
            if (ans && ans.isCorrect) domainStats[domain].correct++;
        });
        
        // Mark domains seen in this history item as completed
        currentAttemptDomains.forEach(domain => {
            if (domainStats[domain]) domainStats[domain].completedLatest = true;
        });
    });

    const domains = Object.entries(domainStats);
    if (domains.length < 3) { container.innerHTML = '<p style="color:var(--text-muted);font-size:0.85rem;">Necesitas datos en al menos 3 dominios</p>'; return; }

    // Dynamic scaling based on domain count to prevent label overlap
    const n = domains.length;
    const isDense = n > 8;
    const size = isDense ? 420 : 320;
    const cx = size / 2, cy = size / 2;
    const rad = isDense ? 100 : 95;
    const labelOffset = isDense ? 55 : 45;
    const fontSize = isDense ? 7 : 8.5;
    const pctFontSize = isDense ? 6.5 : 8;
    const wrapLen = isDense ? 14 : 18;
    const lineH = isDense ? 9 : 11;
    const angleStep = (2 * Math.PI) / n;

    // Helper: wrap text into lines at word boundaries
    function wrapLabel(text, maxLen) {
        if (text.length <= maxLen) return [text];
        const words = text.split(/\s+/);
        const lines = [];
        let current = '';
        words.forEach(w => {
            if ((current + ' ' + w).trim().length > maxLen && current) {
                lines.push(current.trim());
                current = w;
            } else {
                current = current ? current + ' ' + w : w;
            }
        });
        if (current) lines.push(current.trim());
        return lines;
    }

    const dataPoints = domains.map(([name, stats], i) => {
        const pct = stats.total > 0 ? stats.correct / stats.total : 0;
        const angle = -Math.PI / 2 + i * angleStep;
        return {
            x: cx + rad * pct * Math.cos(angle), y: cy + rad * pct * Math.sin(angle),
            labelX: cx + (rad + labelOffset) * Math.cos(angle), labelY: cy + (rad + labelOffset) * Math.sin(angle),
            name: name,
            nameLines: wrapLabel(name, wrapLen),
            pct: Math.round(pct * 100),
            angle
        };
    });

    const gridCircles = [0.25, 0.5, 0.75, 1].map(p => `<circle cx="${cx}" cy="${cy}" r="${rad * p}" fill="none" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="${p < 1 ? '2' : '0'}"/>`).join('');
    const gridLines = domains.map((_, i) => {
        const angle = -Math.PI / 2 + i * angleStep;
        return `<line x1="${cx}" y1="${cy}" x2="${cx + rad * Math.cos(angle)}" y2="${cy + rad * Math.sin(angle)}" stroke="var(--border-color)" stroke-width="0.5"/>`;
    }).join('');
    const polygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ');

    const certMap = {
        "Understanding of Databricks Data Intelligence Platform": 60,
        "Managing Data": 0,
        "Importing Data": 100,
        "Executing queries using Databricks SQL and Databricks SQL Warehouses": 100,
        "Analyzing Queries": 85,
        "Working with Dashboards and Visualizations in Databricks": 100,
        "Developing, Sharing and Maintaining AI/BI Genie spaces": 100,
        "Data Modeling with Databricks SQL": 100,
        "Securing Data": 75
    };
    
    const pState = typeof window.getProfile === 'function' ? window.getProfile() : JSON.parse(localStorage.getItem('userProfile') || '{"certs":{}}');
    const isDatabricksCertified = pState && pState.certs && pState.certs['databricks-da'] && ((window.currentCourseId || 'databricks-da') === 'databricks-da');

    const officialPolygon = isDatabricksCertified ? dataPoints.map(p => {
        const opct = certMap[p.name] !== undefined ? certMap[p.name] / 100 : 0;
        return `${cx + rad * opct * Math.cos(p.angle)},${cy + rad * opct * Math.sin(p.angle)}`;
    }).join(' ') : null;

    const labels = dataPoints.map(p => {
        const anchor = Math.abs(p.angle) < 0.1 || Math.abs(p.angle - Math.PI) < 0.1 || Math.abs(p.angle + Math.PI) < 0.1 ? 'middle' :
                       p.angle > -Math.PI / 2 && p.angle < Math.PI / 2 ? 'start' : 'end';
        const totalTextHeight = p.nameLines.length * lineH;
        const startY = p.labelY - totalTextHeight / 2 + lineH / 2;
        const nameTspans = p.nameLines.map((line, li) => 
            `<tspan x="${p.labelX}" dy="${li === 0 ? 0 : lineH}">${line}</tspan>`
        ).join('');
        
        let officialScoreTxt = '';
        if (isDatabricksCertified && certMap[p.name] !== undefined) {
             officialScoreTxt = `<tspan x="${p.labelX}" dy="${lineH + 2}" fill="#2447b8" font-weight="700" font-size="${pctFontSize}">Oficial: ${certMap[p.name]}%</tspan>`;
        }
        
        return `<text x="${p.labelX}" y="${startY}" text-anchor="${anchor}" font-size="${fontSize}" font-weight="600" fill="var(--text-muted)">${nameTspans}</text>` +
               `<text x="${p.labelX}" y="${startY + totalTextHeight + 2}" text-anchor="${anchor}" font-size="${pctFontSize}" font-weight="700" fill="var(--primary-color)">Actual: ${p.pct}%${officialScoreTxt}</text>`;
    }).join('');

    container.innerHTML = `
        <svg width="100%" height="${size}" viewBox="0 0 ${size} ${size}" style="overflow:visible;">
            <defs>
               <filter id="glowOfficial" x="-20%" y="-20%" width="140%" height="140%">
                   <feGaussianBlur stdDeviation="2" result="blur" />
                   <feComposite in="SourceGraphic" in2="blur" operator="over" />
               </filter>
            </defs>
            ${gridCircles}${gridLines}
            ${isDatabricksCertified ? `<polygon points="${officialPolygon}" fill="rgba(36,71,184,0.08)" stroke="#2447b8" stroke-width="2.5" stroke-dasharray="4" filter="url(#glowOfficial)"/>` : ''}
            <polygon points="${polygon}" fill="rgba(49,87,213,0.15)" stroke="var(--primary-color)" stroke-width="2"/>
            <g class="points">
                ${dataPoints.map(p => {
                    let officialCircle = '';
                    if (isDatabricksCertified && certMap[p.name] !== undefined) {
                        const opct = certMap[p.name] / 100;
                        const ox = cx + rad * opct * Math.cos(p.angle);
                        const oy = cy + rad * opct * Math.sin(p.angle);
                        officialCircle = `<circle cx="${ox}" cy="${oy}" r="4" fill="#2447b8" stroke="var(--card-bg)" stroke-width="1.5" filter="url(#glowOfficial)"/>`;
                    }
                    return officialCircle + `<circle cx="${p.x}" cy="${p.y}" r="3" fill="var(--primary-color)"/>`;
                }).join('')}
            </g>
            ${labels}
        </svg>
    `;
}

function renderDashRecommendation(history) {
    const container = document.getElementById('dashboard-recommendation');
    if (!container) return;

    const domainStats = {};
    const allQ = window.questionsData || [];
    
    // Evaluate from most recent to oldest to grab the latest attempt (history[0] is newest)
    const sortedHistory = history;
    
    sortedHistory.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        const currentAttemptDomains = new Set();
        
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const domain = q.domain || 'General';
            
            // Skip if domain was already processed in a more recent test
            if (domainStats[domain] && domainStats[domain].completedLatest) return;
            
            if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0, completedLatest: false };
            currentAttemptDomains.add(domain);
            
            domainStats[domain].total++;
            const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
            if (ans && ans.isCorrect) domainStats[domain].correct++;
        });
        
        // Mark domains seen in this history item as completed
        currentAttemptDomains.forEach(domain => {
            if (domainStats[domain]) domainStats[domain].completedLatest = true;
        });
    });

    const weakest = Object.entries(domainStats)
        .filter(([_, s]) => s.total >= 3)
        .sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total));

    if (weakest.length === 0) {
        container.innerHTML = '<strong>Sigue practicando</strong> para obtener recomendaciones personalizadas.';
        return;
    }
    const worst = weakest[0];
    const worstPct = Math.round((worst[1].correct / worst[1].total) * 100);
    container.innerHTML = `<strong>Recomendacion:</strong> Tu area mas debil es <strong>${worst[0]}</strong> con ${worstPct}% de acierto. Te recomiendo practicar ese dominio antes de intentar el examen simulado.`;
}


// =============================================
// F6: DAILY STREAK TRACKER
// =============================================

// V2-FIX: Local date helper to avoid UTC timezone issues near midnight
function getLocalISODate() {
    const now = new Date();
    const y = now.getFullYear();
    const m = String(now.getMonth() + 1).padStart(2, '0');
    const d = String(now.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}
function updateStreakDisplay() {
    const widget = document.getElementById('streak-display');
    const countEl = document.getElementById('streak-count');
    if (!widget || !countEl) return;

    const streakData = getStreakData();
    const streak = streakData.currentStreak || 0;
    if (streak > 0) {
        widget.style.display = 'inline-flex';
        countEl.textContent = streak;
        if (streak >= 7) widget.classList.add('on-fire');
        else widget.classList.remove('on-fire');
    } else {
        widget.style.display = 'none';
    }
}

function getStreakData() {
    const data = JSON.parse(localStorage.getItem('dojoStreak') || '{}');
    const today = getLocalISODate();

    if (!data.lastDate) return { currentStreak: 0, lastDate: null };

    const lastDate = data.lastDate;
    const streak = data.currentStreak || 0;

    // Check if streak is still valid (today or yesterday)
    const diff = dateDiffDays(lastDate, today);
    if (diff === 0) return data; // Already tracked today
    if (diff === 1) return data; // Yesterday, streak valid but not incremented
    // More than 1 day ago = streak broken
    return { currentStreak: 0, lastDate: lastDate, bestStreak: data.bestStreak || 0 };
}

function trackDailyActivity() {
    const data = JSON.parse(localStorage.getItem('dojoStreak') || '{}');
    const today = getLocalISODate();

    if (data.lastDate === today) return; // Already tracked today

    const diff = data.lastDate ? dateDiffDays(data.lastDate, today) : 999;
    let newStreak = 1;
    if (diff === 1) {
        newStreak = (data.currentStreak || 0) + 1;
    }

    const best = Math.max(data.bestStreak || 0, newStreak);

    localStorage.setItem('dojoStreak', JSON.stringify({
        currentStreak: newStreak,
        lastDate: today,
        bestStreak: best
    }));

    updateStreakDisplay();
}

// =============================================
// M1: CENTRALIZED DOMAIN STATS UTILITY
// =============================================
function getDomainStats(courseId) {
    const cid = courseId || window.currentCourseId;
    const allQ = getLocalizedCourseQuestions(cid);
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => !cid || h.courseCheck === cid);

    const stats = {};
    allQ.forEach(q => {
        const d = q.domain || 'General';
        if (!stats[d]) stats[d] = { total: 0, seen: new Set(), missed: new Set(), correct: 0, attempted: 0, ids: [] };
        stats[d].total++;
        stats[d].ids.push(getCanonicalQuestionId(q.id));
    });

    history.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        h.questionIds.forEach((qId, idx) => {
            const canonicalId = getCanonicalQuestionId(qId);
            const q = allQ.find(qq => getCanonicalQuestionId(qq.id) === canonicalId);
            if (!q) return;
            const d = q.domain || 'General';
            if (!stats[d]) return;
            stats[d].seen.add(canonicalId);
            stats[d].attempted++;
            const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
            if (ans && ans.isCorrect) {
                stats[d].correct++;
                stats[d].missed.delete(canonicalId);
            } else {
                stats[d].missed.add(canonicalId);
            }
        });
    });

    return stats;
}

function dateDiffDays(d1, d2) {
    const date1 = new Date(d1 + 'T00:00:00'); // FIX-B2: Force local timezone
    const date2 = new Date(d2 + 'T00:00:00');
    return Math.floor((date2 - date1) / (1000 * 60 * 60 * 24));
}

// Wire HeroManager streak methods
if (window.HeroManager) {
    window.HeroManager.getStreakData = getStreakData;
    window.HeroManager.trackDailyActivity = trackDailyActivity;
}

// V1 Gap Fix: showLevelUpModal — called by hero_data.js on belt upgrade
window.showLevelUpModal = function(newBelt) {
    // Play level-up fanfare
    if (typeof SoundFX !== 'undefined') SoundFX.playLevelUp();

    // Show toast notification
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
        z-index: 10000; background: #111827;
        color: #e2e8f0; padding: 16px 28px; border-radius: 16px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.3); display: flex; align-items: center;
        gap: 12px; animation: slideDown 0.4s ease; font-family: var(--font-family, 'Inter', sans-serif);
    `;
    toast.innerHTML = `
        <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="${newBelt.color || '#FFD700'}" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
        <div>
            <div style="font-weight:800; font-size:1rem;">Subiste de Nivel</div>
            <div style="font-size:0.85rem; opacity:0.8; margin-top:2px;">${newBelt.name}</div>
        </div>
    `;
    document.body.appendChild(toast);
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.5s'; }, 3500);
    setTimeout(() => toast.remove(), 4000);
};

// =============================================
// F8: SOUND FEEDBACK (Web Audio API)
// =============================================
const SoundFX = {
    ctx: null,
    init() {
        if (!this.ctx) {
            try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); }
            catch(e) { console.warn('AudioContext not available'); }
        }
    },
    isMuted() {
        return localStorage.getItem('soundMuted') === 'true';
    },
    playCorrect() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;
        const ctx = this.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(523.25, ctx.currentTime);
        osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.1);
        gain.gain.setValueAtTime(0.3, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.3);
    },
    playIncorrect() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;
        const ctx = this.ctx;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(200, ctx.currentTime);
        osc.frequency.setValueAtTime(150, ctx.currentTime + 0.15);
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 0.25);
    },
    playLevelUp() {
        if (this.isMuted()) return;
        this.init();
        if (!this.ctx) return;
        const ctx = this.ctx;
        const notes = [523.25, 659.25, 783.99, 1046.5];
        notes.forEach((freq, i) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            osc.type = 'sine';
            osc.frequency.value = freq;
            gain.gain.setValueAtTime(0.3, ctx.currentTime + i * 0.12);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.3);
            osc.start(ctx.currentTime + i * 0.12);
            osc.stop(ctx.currentTime + i * 0.12 + 0.3);
        });
    }
};


// =============================================
// DIRECT QUIZ LAUNCHER (F1, F2, F3 bridge)
// =============================================
function launchDirectQuiz(questions, mode, timerMinutes) {
    if (!questions || questions.length === 0) {
        alert('No hay preguntas disponibles.');
        return;
    }

    const startScreen = document.getElementById('start-screen');
    const quizUI = document.getElementById('quiz-ui');
    const timerDisplay = document.getElementById('timer-display');
    const configModal = document.getElementById('quiz-config-modal');

    if (configModal) configModal.classList.add('hidden');
    if (startScreen) startScreen.classList.add('hidden');
    if (quizUI) quizUI.classList.remove('hidden');
    if (timerDisplay) timerDisplay.classList.remove('hidden');

    // Use exposed setter from the IIFE
    if (typeof window._setQuizState === 'function') {
        window._setQuizState(questions, mode === 'simulated_exam');
    }

    // Start countdown timer for simulated exam
    if (timerMinutes && timerMinutes > 0) {
        startCountdownTimer(timerMinutes);
    }
}


// =============================================
// HIDE ALL FEATURE PANELS (on category switch)
// =============================================
function hideFeaturePanels() {
    const ids = ['domain-cards-container', 'start-real-exam-btn', 'weakness-shortcut', 'dashboard-panel', 'start-flashcards-btn', 'study-plan-panel', 'start-marathon-btn', 'study-coach-panel', 'lessons-learned-launcher'];
    ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.style.display = 'none';
    });
}

// Also hide when returning to menu
const origReturnToMenu = window.returnToMenu;
if (typeof origReturnToMenu === 'function') {
    window.returnToMenu = function() {
        hideFeaturePanels();
        origReturnToMenu.apply(this, arguments);
    };
}

// =============================================
// Fxx: LESSONS LEARNED LAUNCHER
// =============================================
function setupLessonsLearnedLauncher(courseId) {
    const launcher = document.getElementById('lessons-learned-launcher');
    const content = document.getElementById('lessons-learned-content');
    if (!launcher || !content) return;
    
    // Determine provider/category from courseId
    let provider = null;
    if (courseId && courseId.startsWith('databricks')) {
        provider = 'databricks';
    }
    
    // Only show if there's data for this provider
    if (provider && window.lessonsData && window.lessonsData[provider]) {
        const data = window.lessonsData[provider];
        content.innerHTML = '';
        data.forEach(lesson => {
            const domainHtml = lesson.domain ? `<span style="display:inline-block; margin-bottom:10px; font-size:0.8rem; background:var(--primary-light, rgba(49,87,213,0.1)); color:var(--primary-color, #3157d5); padding:4px 8px; border-radius:4px; font-weight:bold;">${lesson.domain}</span>` : '';
            content.innerHTML += `
                <div style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
                    <h3 style="color: var(--primary-color, #3157d5); margin-bottom: 4px;">${lesson.title}</h3>
                    ${domainHtml}
                    <p style="margin-bottom: 8px;"><strong>Español:</strong> ${lesson.es}</p>
                    <p><strong>English:</strong> ${lesson.en}</p>
                </div>
            `;
        });
        launcher.style.display = 'block';
    } else {
        launcher.style.display = 'none';
    }
}

// =============================================
// F7: PWA OFFLINE SUPPORT — SW registration in script.js (single registration point)


// =============================================
// INIT: Run on page load
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize streak display
    setTimeout(() => {
        updateStreakDisplay();
        checkStreakRisk(); // F11
    }, 1000);

    // Track daily activity on page load
    trackDailyActivity();

    // F9: Quick Quiz button
    const quickQuizBtn = document.getElementById('quick-quiz-btn');
    if (quickQuizBtn) {
        quickQuizBtn.addEventListener('click', launchQuickQuiz);
    }

    const mappingQuizBtn = document.getElementById('mapping-quiz-btn');
    if (mappingQuizBtn) {
        mappingQuizBtn.addEventListener('click', launchMappingQuiz);
    }

    // F11: Streak risk dismiss
    const riskDismiss = document.getElementById('streak-risk-dismiss');
    if (riskDismiss) {
        riskDismiss.addEventListener('click', () => {
            const banner = document.getElementById('streak-risk-banner');
            if (banner) banner.style.display = 'none';
            sessionStorage.setItem('streakRiskDismissed', '1');
        });
    }
});


// =============================================
// F9: QUICK QUIZ MODE (10 random questions)
// =============================================
function launchQuickQuiz() {
    const allQ = getLocalizedCourseQuestions();
    if (allQ.length === 0) {
        alert('No hay preguntas disponibles todavía.');
        return;
    }

    // Shuffle and pick 10
    const shuffled = [...allQ].sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, 10);

    // Launch quiz without real exam mode
    launchDirectQuiz(selected, 'quick_quiz', 0);

    console.log('F9: Quick Quiz launched with', selected.length, 'questions from', allQ.length, 'total');
}

function launchMappingQuiz() {
    const allQ = getLocalizedCourseQuestions();
    // Filter questions mapped with mapping_missing true
    const mappingQs = allQ.filter(q => q.isMapping === true);

    if (mappingQs.length === 0) {
        alert('No hay preguntas del mapping disponibles. Revisa que questions_mapping_missing.js esté cargado.');
        return;
    }

    // Lanza las 48
    launchDirectQuiz(mappingQs, 'mapping_quiz', 0);

    console.log('Mapping Quiz launched with', mappingQs.length, 'questions');
}

// =======================================================
// F10: FLASHCARD QUICK ACCESS
// =============================================
const FLASHCARD_MAP = {
    'databricks-da':        () => window.databricksDAFlashcards,
    'databricks-genai-engineer': () => window.databricksGenAIFlashcards,
    'databricks-fund':      () => window.databricksFundFlashcards,
    'dp-600':               () => window.dp600Flashcards,
    'unir-viz':             () => window.unirVizFlashcards,
    'unir-herr':            () => window.unirHerrFlashcards,
    'unah-tesis':           () => window.unahTesisFlashcards,
};

function showFlashcardButton(courseId) {
    const btn = document.getElementById('start-flashcards-btn');
    if (!btn) return;

    const getter = FLASHCARD_MAP[courseId];
    const cards = getter ? getter() : null;

    if (cards && cards.length > 0) {
        const label = document.getElementById('flashcard-count-label');
        if (label) label.textContent = cards.length + ' tarjetas disponibles';
        btn.style.display = 'flex';
        btn.onclick = () => launchFlashcardMode(cards, courseId);
    } else {
        btn.style.display = 'none';
    }
}

function launchFlashcardMode(cards, courseId) {
    if (!cards || cards.length === 0) return;

    // Normalize card structure
    const normalized = cards.map(c => ({
        front: c.front || c.pregunta || c.question || c.term || c.concepto || 'Sin contenido',
        back:  c.back  || c.respuesta || c.answer   || c.definition || c.definicion || 'Sin respuesta'
    }));

    let idx = 0;
    let flipped = false;
    const shuffled = [...normalized].sort(() => Math.random() - 0.5);

    // Create overlay — M7: Added accessibility attributes
    const overlay = document.createElement('div');
    overlay.id = 'flashcard-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-label', 'Modo Flashcard');
    overlay.style.cssText = `
        position: fixed; inset: 0; z-index: 9999;
        background: rgba(0,0,0,0.7); backdrop-filter: blur(8px);
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        padding: 20px; font-family: var(--font-family, 'Inter', sans-serif);
    `;

    function render() {
        const card = shuffled[idx];
        overlay.innerHTML = `
            <div style="color:white;margin-bottom:16px;font-size:0.85rem;opacity:0.7;">
                ${idx + 1} / ${shuffled.length}
            </div>
            <div id="fc-card" style="
                width: 100%; max-width: 600px; min-height: 280px;
                background: ${flipped ? '#3157d5' : 'var(--card-bg, #fff)'};
                color: ${flipped ? '#fff' : 'var(--text-color, #1e293b)'};
                border-radius: 16px; padding: 32px; cursor: pointer;
                display: flex; align-items: center; justify-content: center;
                text-align: center; font-size: 1.1rem; line-height: 1.6;
                box-shadow: 0 8px 32px rgba(0,0,0,0.3);
                transition: transform 0.3s ease, background 0.3s ease;
                user-select: none;
            ">
                ${flipped ? card.back : card.front}
            </div>
            <div style="display:flex;gap:12px;margin-top:20px;">
                <button id="fc-prev" style="padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:white;cursor:pointer;font-size:0.9rem;"
                    ${idx === 0 ? 'disabled style="opacity:0.3;padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:white;cursor:not-allowed;font-size:0.9rem;"' : ''}>
                    Anterior
                </button>
                <button id="fc-flip" style="padding:10px 24px;border-radius:10px;border:none;background:#3157d5;color:white;cursor:pointer;font-weight:700;font-size:0.9rem;">
                    ${flipped ? 'Ver Pregunta' : 'Ver Respuesta'}
                </button>
                <button id="fc-next" style="padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:white;cursor:pointer;font-size:0.9rem;"
                    ${idx >= shuffled.length - 1 ? 'disabled style="opacity:0.3;padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.1);color:white;cursor:not-allowed;font-size:0.9rem;"' : ''}>
                    Siguiente
                </button>
                <button id="fc-close" style="padding:10px 20px;border-radius:10px;border:1px solid rgba(255,255,255,0.3);background:rgba(239,68,68,0.2);color:#fca5a5;cursor:pointer;font-size:0.9rem;">
                    Cerrar
                </button>
            </div>
            <div style="color:rgba(255,255,255,0.4);margin-top:12px;font-size:0.75rem;">
                Teclas: Espacio = voltear | \u2190\u2192 = navegar | Esc = cerrar
            </div>
        `;

        // Wire buttons
        document.getElementById('fc-card').addEventListener('click', () => { flipped = !flipped; render(); });
        document.getElementById('fc-flip').addEventListener('click', () => { flipped = !flipped; render(); });
        document.getElementById('fc-prev').addEventListener('click', () => { if (idx > 0) { idx--; flipped = false; render(); } });
        document.getElementById('fc-next').addEventListener('click', () => { if (idx < shuffled.length - 1) { idx++; flipped = false; render(); } });
        document.getElementById('fc-close').addEventListener('click', close);

        // FIX-B3: Removed trackAction call (method does not exist in HeroManager)
    }

    function close() {
        overlay.remove();
        document.removeEventListener('keydown', handleKey);
    }

    function handleKey(e) {
        if (e.key === 'Escape') close();
        else if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flipped = !flipped; render(); }
        else if (e.key === 'ArrowRight' && idx < shuffled.length - 1) { idx++; flipped = false; render(); }
        else if (e.key === 'ArrowLeft' && idx > 0) { idx--; flipped = false; render(); }
    }

    document.addEventListener('keydown', handleKey);
    document.body.appendChild(overlay);
    render();
    console.log('F10: Flashcard mode launched with', shuffled.length, 'cards for', courseId);
}


// =============================================
// F11: STREAK AT RISK NOTIFICATION
// =============================================
function checkStreakRisk() {
    if (sessionStorage.getItem('streakRiskDismissed') === '1') return;

    const banner = document.getElementById('streak-risk-banner');
    if (!banner) return;

    const streak = getStreakData();
    if (!streak || streak.currentStreak < 2) {
        banner.style.display = 'none';
        return;
    }

    // Check if user has practiced TODAY — FIX-B4: Use ISO string comparison to avoid timezone issues
    const today = getLocalISODate();
    const lastActivity = streak.lastDate || null;

    if (lastActivity === today) {
        // Already practiced today
        banner.style.display = 'none';
        return;
    }

    // Show risk banner
    const textEl = document.getElementById('streak-risk-text');
    if (textEl) textEl.textContent = `Racha de ${streak.currentStreak} d\u00edas en riesgo`;
    banner.style.display = 'flex';
    console.log('F11: Streak risk banner shown. Current streak:', streak.currentStreak);
}


// =============================================
// F12: TIME PER QUESTION TRACKING
// =============================================
window._questionTimings = [];
window._questionStartTime = null;

function startQuestionTimer() {
    window._questionStartTime = Date.now();
}

function recordQuestionTime(questionIndex) {
    if (!window._questionStartTime) return;
    const elapsed = (Date.now() - window._questionStartTime) / 1000;
    window._questionTimings[questionIndex] = elapsed;
    window._questionStartTime = Date.now(); // Reset for next question
}

function resetQuestionTimings() {
    window._questionTimings = [];
    window._questionStartTime = null;
}

function renderTimeStats(container, questions) {
    const timings = window._questionTimings;
    if (!timings || timings.length === 0) return;

    const validTimings = timings.filter(t => t != null && t > 0 && t < 600);
    if (validTimings.length === 0) return;

    const avg = validTimings.reduce((a, b) => a + b, 0) / validTimings.length;
    const fastest = Math.min(...validTimings);
    const slowest = Math.max(...validTimings);

    // Find top 3 slowest questions
    const indexed = timings.map((t, i) => ({ idx: i, time: t || 0 })).filter(x => x.time > 0);
    indexed.sort((a, b) => b.time - a.time);
    const top3 = indexed.slice(0, 3);

    const panel = document.createElement('div');
    panel.className = 'time-stats-panel';
    panel.innerHTML = `
        <h4>
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle;margin-right:6px;">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
            </svg>
            Estad\u00edsticas de Tiempo
        </h4>
        <div class="time-kpis">
            <div class="time-kpi">
                <div class="time-kpi-value">${avg.toFixed(1)}s</div>
                <div class="time-kpi-label">Promedio</div>
            </div>
            <div class="time-kpi">
                <div class="time-kpi-value">${fastest.toFixed(1)}s</div>
                <div class="time-kpi-label">M\u00e1s r\u00e1pida</div>
            </div>
            <div class="time-kpi">
                <div class="time-kpi-value">${slowest.toFixed(1)}s</div>
                <div class="time-kpi-label">M\u00e1s lenta</div>
            </div>
        </div>
        <div class="time-slowest">
            <strong>Preguntas que m\u00e1s tiempo tomaron:</strong>
            ${top3.map(item => {
                const q = questions && questions[item.idx];
                const label = q ? (q.prompt || q.question || q.text || '').substring(0, 60) + '...' : `Pregunta ${item.idx + 1}`; // FIX-B5: Use q.prompt first
                return `<div class="time-slow-item"><span>${label}</span><span class="time-slow-value">${item.time.toFixed(1)}s</span></div>`;
            }).join('')}
        </div>
    `;
    container.appendChild(panel);
    console.log('F12: Time stats rendered. Avg:', avg.toFixed(1), 's');
}


// =============================================
// F13: EXPORT QUIZ HISTORY TO CSV
// =============================================
function exportHistoryCSV() {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    if (history.length === 0) {
        alert('No hay historial para exportar.');
        return;
    }

    // BOM for UTF-8 Excel compatibility
    const BOM = '\uFEFF';
    const headers = ['Fecha', 'Curso', 'Modo', 'Correctas', 'Total', 'Porcentaje', 'Resultado'];
    const rows = history.map(h => [
        h.date || '',
        h.courseCheck || h.course || '',
        h.mode || 'practice',
        h.score || 0,
        h.total || 0,
        h.total ? ((h.score / h.total) * 100).toFixed(1) + '%' : '0%',
        h.passed ? 'Aprobado' : 'No Aprobado'
    ]);

    const csvContent = BOM + [headers, ...rows].map(r =>
        r.map(cell => `"${String(cell).replace(/"/g, '""')}"`).join(',')
    ).join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data_dojo_historial_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    console.log('F13: Exported', history.length, 'records to CSV');
}


// =============================================
// F14: POST-EXAM SUMMARY PANEL
// =============================================
function renderPostExamSummary(container, questions, userAnswers, finalPct, passed) {
    if (!questions || questions.length === 0) return;

    // Build domain stats
    const domainStats = {};
    questions.forEach((q, idx) => {
        const domain = q.domain || q.category || 'General';
        if (!domainStats[domain]) {
            domainStats[domain] = { correct: 0, total: 0 };
        }
        domainStats[domain].total++;

        const ans = userAnswers[idx];
        if (ans && ans.isCorrect) {
            domainStats[domain].correct++;
        }
    });

    // Sort domains by performance (weakest first)
    const sortedDomains = Object.entries(domainStats)
        .map(([name, stats]) => ({
            name,
            correct: stats.correct,
            total: stats.total,
            pct: stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
        }))
        .sort((a, b) => a.pct - b.pct);

    // Get weakest domains
    const weakDomains = sortedDomains.filter(d => d.pct < 70);
    const strongDomains = sortedDomains.filter(d => d.pct >= 80);

    // Grade SVG icons
    const passIcon = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><path d="M22 4L12 14.01l-3-3"/></svg>`;
    const failIcon = `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>`;

    // Build domain rows HTML
    const domainRowsHTML = sortedDomains.map(d => {
        const barColor = d.pct >= 80 ? 'var(--success-color)' : d.pct >= 60 ? 'var(--warning-color)' : 'var(--danger-color)';
        const scoreColor = d.pct >= 80 ? 'var(--success-color)' : d.pct >= 60 ? 'var(--warning-color)' : 'var(--danger-color)';
        return `
            <div class="domain-row">
                <span class="domain-row-name">${d.name}</span>
                <span class="domain-row-score" style="color:${scoreColor}">${d.pct}%</span>
                <div class="domain-row-bar">
                    <div class="domain-row-bar-fill" style="width:${d.pct}%;background:${barColor}"></div>
                </div>
                <span style="font-size:0.75rem;color:var(--text-muted);min-width:40px">${d.correct}/${d.total}</span>
            </div>
        `;
    }).join('');

    // Generate study tips
    const tips = [];

    if (weakDomains.length > 0) {
        const weakestName = weakDomains[0].name;
        tips.push({
            icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--danger-color)" stroke-width="2"><path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
            title: 'Debilidad Principal',
            text: `Refuerza "${weakestName}" con las flashcards y practica dirigida. Obtuviste ${weakDomains[0].pct}%.`
        });
    }

    if (finalPct < 70) {
        const needed = Math.ceil(questions.length * 0.7);
        const got = Math.round((finalPct / 100) * questions.length);
        tips.push({
            icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--warning-color)" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`,
            title: 'Para Aprobar',
            text: `Necesitas ${needed} correctas de ${questions.length}. Obtuviste ${got}. Faltan ${needed - got} respuestas m\u00e1s.`
        });
    }

    if (strongDomains.length > 0) {
        tips.push({
            icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--success-color)" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,
            title: 'Fortaleza',
            text: `"${strongDomains[strongDomains.length - 1].name}" es tu mejor \u00e1rea con ${strongDomains[strongDomains.length - 1].pct}%. Mant\u00e9n ese nivel.`
        });
    }

    // Time tip
    const timings = window._questionTimings || [];
    const validTimings = timings.filter(t => t != null && t > 0 && t < 600);
    if (validTimings.length > 0) {
        const avg = validTimings.reduce((a, b) => a + b, 0) / validTimings.length;
        const recTime = avg > 90 ? 'Intenta reducir tu tiempo promedio. Apunta a menos de 90 segundos por pregunta.' :
                        avg > 45 ? 'Buen ritmo. Podr\u00edas optimizar leyendo las opciones antes de analizar.' :
                        'Excelente velocidad. Aseg\u00farate de no sacrificar precisi\u00f3n por rapidez.';
        tips.push({
            icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="var(--primary-color)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,
            title: `Tiempo: ${avg.toFixed(0)}s promedio`,
            text: recTime
        });
    }

    const tipsHTML = tips.map(t => `
        <div class="study-tip-card">
            <h5>${t.icon} ${t.title}</h5>
            <p>${t.text}</p>
        </div>
    `).join('');

    // Build full panel
    const panel = document.createElement('div');
    panel.className = 'post-exam-summary';
    panel.innerHTML = `
        <h3>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M9 17H5a2 2 0 00-2 2 2 2 0 002 2h14a2 2 0 002-2 2 2 0 00-2-2h-4"/>
                <path d="M12 17V3"/>
                <path d="M5 10l7-7 7 7"/>
            </svg>
            Resumen del Examen
        </h3>

        <div class="post-exam-grade ${passed ? 'pass' : 'fail'}">
            <div class="grade-emoji">${passed ? passIcon : failIcon}</div>
            <div class="grade-text">
                <h4>${passed ? 'Examen Aprobado' : 'Examen No Aprobado'}</h4>
                <p>Obtuviste ${finalPct}% — ${passed ? 'cumples el umbral de 70% requerido.' : 'necesitas al menos 70% para aprobar.'}</p>
            </div>
        </div>

        <div class="domain-breakdown">
            <h4>Desglose por Dominio</h4>
            ${domainRowsHTML}
        </div>

        ${tips.length > 0 ? `
            <div>
                <h4 style="font-size:0.9rem;font-weight:700;margin-bottom:12px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.5px;">Recomendaciones de Estudio</h4>
                <div class="study-tips">
                    ${tipsHTML}
                </div>
            </div>
        ` : ''}
    `;

    container.appendChild(panel);
    console.log('F14: Post-exam summary rendered.', sortedDomains.length, 'domains analyzed.');
}

// =============================================
// F15: STUDY PLAN GENERATOR
// =============================================
function renderStudyPlan(courseId) {
    const panel = document.getElementById('study-plan-panel');
    const content = document.getElementById('study-plan-content');
    if (!panel || !content) return;

    const cid = courseId || window.currentCourseId;
    const allQ = getLocalizedCourseQuestions(cid);
    if (allQ.length === 0) { panel.style.display = 'none'; return; }

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === cid);

    // 1. Categorize each domain
    const domains = {};
    allQ.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, seen: new Set(), missed: new Set(), correct: 0, attempted: 0 };
        domains[d].total++;
    });

    // 2. Analyze history
    history.forEach(h => {
        if (!h.questionIds) return;
        h.questionIds.forEach((qId, idx) => {
            const canonicalId = getCanonicalQuestionId(qId);
            const q = allQ.find(qq => getCanonicalQuestionId(qq.id) === canonicalId);
            if (!q) return;
            const d = q.domain || 'General';
            if (!domains[d]) return;
            domains[d].seen.add(canonicalId);
            domains[d].attempted++;
            const ans = h.userAnswers ? (h.userAnswers[idx] || h.userAnswers[String(idx)]) : null;
            if (ans && ans.isCorrect) {
                domains[d].correct++;
                domains[d].missed.delete(canonicalId);
            } else {
                domains[d].missed.add(canonicalId);
            }
        });
    });

    // 3. Calculate priority per domain
    const plan = Object.entries(domains).map(([name, d]) => {
        const pct = d.attempted > 0 ? Math.round((d.correct / d.attempted) * 100) : -1;
        const unseenCount = d.total - d.seen.size;
        const missedCount = d.missed.size;

        let priority = 0;
        if (pct >= 0 && pct < 50) priority += 30;
        else if (pct >= 0 && pct < 70) priority += 20;
        else if (pct >= 0 && pct < 85) priority += 10;

        priority += Math.min(unseenCount, 20);
        priority += missedCount * 2;
        if (pct < 0) priority += 15;

        const level = pct < 0 ? 'new' : pct < 70 ? 'weak' : pct < 85 ? 'review' : 'strong';

        return {
            name, pct, unseenCount, missedCount,
            total: d.total, seen: d.seen.size,
            priority, level,
            questionIds: allQ
                .filter(q => (q.domain || 'General') === name)
                .filter(q => d.missed.has(getCanonicalQuestionId(q.id)) || !d.seen.has(getCanonicalQuestionId(q.id)))
                .map(q => q.id)
        };
    }).sort((a, b) => b.priority - a.priority);

    // 4. Filter actionable domains
    const actionable = plan.filter(d => d.level !== 'strong' || d.unseenCount > 0);

    if (actionable.length === 0) {
        content.innerHTML = `
            <div style="text-align:center; padding:20px; color:var(--success-color);">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                    <path d="M22 4L12 14.01l-3-3"/>
                </svg>
                <p style="margin-top:8px; font-weight:700;">Dominas todos los dominios de este curso</p>
                <p style="font-size:0.85rem; color:var(--text-muted);">Sigue practicando para mantener tu nivel</p>
            </div>
        `;
        panel.style.display = 'block';
        return;
    }

    // 5. Render plan (top 5)
    const top = actionable.slice(0, 5);
    const subtitle = document.getElementById('study-plan-subtitle');
    if (subtitle) {
        const weakCount = top.filter(d => d.level === 'weak').length;
        const newCount = top.filter(d => d.level === 'new').length;
        subtitle.textContent = weakCount > 0
            ? `${weakCount} área(s) necesitan refuerzo`
            : newCount > 0
                ? `${newCount} área(s) sin explorar`
                : 'Revisión general recomendada';
    }

    const hasFlashcards = FLASHCARD_MAP[cid] && FLASHCARD_MAP[cid]();

    content.innerHTML = top.map(d => {
        const priorityClass = d.level === 'weak' ? 'priority-high' : d.level === 'new' ? 'priority-medium' : 'priority-low';
        const badgeClass = d.level === 'weak' ? 'weak' : d.level === 'new' ? 'new' : 'review';
        const badgeText = d.level === 'weak' ? 'Débil' : d.level === 'new' ? 'Nuevo' : 'Repasar';
        const detail = d.pct < 0
            ? `${d.unseenCount} preguntas sin intentar`
            : `${d.pct}% acierto | ${d.missedCount} falladas | ${d.unseenCount} nuevas`;
        const actionText = d.questionIds.length > 0
            ? `Practicar (${Math.min(d.questionIds.length, 15)})`
            : 'Ver';
        const flashBtn = hasFlashcards
            ? `<button class="study-plan-fc-btn" data-fc-domain="${d.name}" title="Flashcards de ${d.name}" onclick="event.stopPropagation()">
                   <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                       <rect x="2" y="3" width="20" height="14" rx="2"/>
                       <path d="M8 21h8M12 17v4"/>
                   </svg>
               </button>`
            : '';

        return `
            <div class="study-plan-item ${priorityClass}" data-domain="${d.name}" data-ids='${JSON.stringify(d.questionIds.slice(0, 15))}'>
                <div class="study-plan-info">
                    <div class="study-plan-domain">${d.name}</div>
                    <div class="study-plan-detail">${detail}</div>
                </div>
                <span class="study-plan-badge ${badgeClass}">${badgeText}</span>
                ${flashBtn}
                <span class="study-plan-action">${actionText} →</span>
            </div>
        `;
    }).join('');

    // Click handlers for quiz launch
    content.querySelectorAll('.study-plan-item').forEach(item => {
        item.addEventListener('click', () => {
            let ids;
            try { ids = JSON.parse(item.dataset.ids); } catch(e) { ids = []; }
            if (ids.length === 0) return;

            const questions = allQ.filter(q => ids.includes(q.id));
            if (questions.length > 0) {
                questions.sort(() => Math.random() - 0.5);
                launchDirectQuiz(questions, 'study_plan', 0);
            }
        });
    });

    // F16: Click handlers for flashcard buttons
    content.querySelectorAll('.study-plan-fc-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const domainName = btn.dataset.fcDomain;
            if (domainName) launchDomainFlashcards(domainName, cid);
        });
    });

    panel.style.display = 'block';
    console.log('F15: Study plan rendered. Top domains:', top.map(d => d.name));
}

// =============================================
// F16: DOMAIN-SPECIFIC FLASHCARD LAUNCHER
// =============================================
function launchDomainFlashcards(domainName, courseId) {
    const cid = courseId || window.currentCourseId;
    const getter = FLASHCARD_MAP[cid];
    const allCards = getter ? getter() : null;

    if (!allCards || allCards.length === 0) {
        alert('No hay flashcards disponibles para este curso.');
        return;
    }

    // Filter flashcards that match the domain — M4: Improved precision
    const domainLower = domainName.toLowerCase();
    const filtered = allCards.filter(c => {
        // Priority 1: explicit domain/category field
        if (c.domain && c.domain.toLowerCase().includes(domainLower)) return true;
        if (c.category && c.category.toLowerCase().includes(domainLower)) return true;
        // Priority 2: search in front/question only (not in answer)
        const front = (c.front || c.pregunta || c.question || c.term || c.concepto || '').toLowerCase();
        return front.includes(domainLower);
    });

    // Use filtered if enough, otherwise all
    const cardsToShow = filtered.length >= 3 ? filtered : allCards;
    launchFlashcardMode(cardsToShow, cid);
}

// =============================================
// F18: FULL PROGRESS BACKUP/RESTORE
// =============================================
function exportFullProgress() {
    const keys = [
        'quizHistory', 'dojoStreak', 'userStats', 'userProfile',
        'databricks_progress', 'dp600_progress',
        'unir_viz_mastery', 'unir_herr_mastery',
        'soundMuted', 'theme', 'quizAppConfig'
    ];

    const data = {};
    keys.forEach(key => {
        const val = localStorage.getItem(key);
        if (val) {
            try { data[key] = JSON.parse(val); }
            catch(e) { data[key] = val; }
        }
    });

    data._exportDate = new Date().toISOString();
    data._appVersion = 'Data Dojo V4';
    data._totalKeys = Object.keys(data).filter(k => !k.startsWith('_')).length;

    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `data_dojo_backup_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    console.log('F18: Full progress exported.', Object.keys(data).length, 'keys.');
}

function importFullProgress(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const data = JSON.parse(e.target.result);

            if (!data._exportDate) {
                alert('El archivo no es un backup v\u00e1lido de Data Dojo.');
                return;
            }

            const dateStr = new Date(data._exportDate).toLocaleDateString('es-ES');
            const keyCount = data._totalKeys || Object.keys(data).filter(k => !k.startsWith('_')).length;
            if (!confirm(`Importar backup del ${dateStr}?\n${keyCount} datos encontrados.\n\nEsto reemplazar\u00e1 tu progreso actual.`)) return;

            Object.keys(data).forEach(key => {
                if (key.startsWith('_')) return;
                localStorage.setItem(key, typeof data[key] === 'string' ? data[key] : JSON.stringify(data[key]));
            });

            alert('Progreso importado exitosamente. La p\u00e1gina se recargar\u00e1.');
            location.reload();
        } catch(err) {
            alert('Error al leer el archivo: ' + err.message);
        }
    };
    reader.readAsText(file);
}


// =============================================
// F19: MARATHON MODE
// =============================================
function setupMarathonButton(courseId) {
    const cid = courseId || window.currentCourseId;
    const allQ = getLocalizedCourseQuestions(cid);

    const examBtn = document.getElementById('start-real-exam-btn');
    if (!examBtn) return;

    let marathonBtn = document.getElementById('start-marathon-btn');
    if (!marathonBtn) {
        marathonBtn = document.createElement('button');
        marathonBtn.id = 'start-marathon-btn';
        marathonBtn.className = 'btn-quick-quiz';
        examBtn.insertAdjacentElement('afterend', marathonBtn);
    }

    marathonBtn.innerHTML = `
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
        <div>
            <strong>Modo Maratón</strong>
            <small>${allQ.length} preguntas del banco completo</small>
        </div>
    `;

    if (allQ.length < 10) {
        marathonBtn.style.display = 'none';
        return;
    }

    marathonBtn.style.display = 'flex';
    marathonBtn.onclick = () => {
        if (!confirm(`¿Iniciar maratón de ${allQ.length} preguntas?\nEsto puede tomar bastante tiempo.`)) return;
        const shuffled = [...allQ].sort(() => Math.random() - 0.5);
        launchDirectQuiz(shuffled, 'marathon', 0);
    };

    console.log('F19: Marathon button ready.', allQ.length, 'questions for', cid);
}

// =============================================
// F20: DEDICATED STATISTICS PAGE
// =============================================
function openStatsPage() {
    // Remove existing overlay if any
    const existing = document.getElementById('stats-page-overlay');
    if (existing) existing.remove();

    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const allQ = window.questionsData || [];
    const heroData = window.HeroManager ? window.HeroManager.data : null;

    // ---- GLOBAL KPIs ----
    const totalQuestions = history.reduce((s, h) => s + (h.total || 0), 0);
    const totalCorrect  = history.reduce((s, h) => s + (h.score || 0), 0);
    const globalPct     = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
    const examsTotal    = history.length;
    const examsPassed   = history.filter(h => h.passed).length;
    const passRate      = examsTotal > 0 ? Math.round((examsPassed / examsTotal) * 100) : 0;
    const bestScore     = examsTotal > 0 ? Math.max(...history.map(h => h.total > 0 ? Math.round((h.score / h.total) * 100) : 0)) : 0;
    const xp            = heroData ? (Number(heroData.stats.xp) || 0) : 0;
    const belt          = heroData ? heroData.stats.belt : 'N/A';
    const studyMinutes  = Math.round(totalQuestions * 1.5); // ~1.5 min per question estimate

    // ---- ACTIVITY HEATMAP (90 days) ----
    const today = new Date();
    today.setHours(0,0,0,0);
    const activityMap = {};
    history.forEach(h => {
        if (!h.date) return;
        const d = new Date(h.date);
        if (isNaN(d.getTime())) return;
        const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        activityMap[key] = (activityMap[key] || 0) + 1;
    });

    let heatmapHTML = '';
    const daysToShow = 91;
    const cellSize = 14;
    const cellGap = 3;
    const totalCellSize = cellSize + cellGap;

    // Organize into weeks (columns) — similar to GitHub
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - daysToShow + 1);
    // Adjust to start on a Sunday
    const startDow = startDate.getDay();

    const cells = [];
    for (let i = 0; i < daysToShow; i++) {
        const d = new Date(startDate);
        d.setDate(d.getDate() + i);
        const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
        const count = activityMap[key] || 0;
        const dow = d.getDay();
        const weekIdx = Math.floor((i + startDow) / 7);
        cells.push({ key, count, dow, weekIdx, date: d });
    }

    const maxWeek = cells.length > 0 ? cells[cells.length - 1].weekIdx : 0;
    const heatW = (maxWeek + 1) * totalCellSize + 30;
    const heatH = 7 * totalCellSize + 25;

    const dayLabels = ['', 'L', '', 'M', '', 'V', ''];
    const dayLabelsSVG = dayLabels.map((l, i) =>
        l ? `<text x="0" y="${20 + i * totalCellSize + cellSize - 2}" font-size="9" fill="var(--text-muted)" font-family="inherit">${l}</text>` : ''
    ).join('');

    // Month labels
    const monthNames = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
    const monthLabels = [];
    let lastMonth = -1;
    cells.forEach(c => {
        const m = c.date.getMonth();
        if (m !== lastMonth) {
            monthLabels.push(`<text x="${22 + c.weekIdx * totalCellSize}" y="12" font-size="9" fill="var(--text-muted)" font-family="inherit">${monthNames[m]}</text>`);
            lastMonth = m;
        }
    });

    const cellsSVG = cells.map(c => {
        const x = 22 + c.weekIdx * totalCellSize;
        const y = 20 + c.dow * totalCellSize;
        let fill;
        if (c.count === 0) fill = 'var(--border-color)';
        else if (c.count <= 2) fill = 'rgba(49, 87, 213, 0.35)';
        else if (c.count <= 5) fill = 'rgba(49, 87, 213, 0.6)';
        else fill = 'var(--primary-color)';
        const title = `${c.key}: ${c.count} sesion(es)`;
        return `<rect x="${x}" y="${y}" width="${cellSize}" height="${cellSize}" rx="3" fill="${fill}" data-tip="${title}"><title>${title}</title></rect>`;
    }).join('');

    const heatmapSVG = `<svg width="100%" height="${heatH}" viewBox="0 0 ${heatW} ${heatH}" style="overflow:visible;">${dayLabelsSVG}${monthLabels.join('')}${cellsSVG}</svg>`;

    // ---- GLOBAL DOMAIN ANALYSIS ----
    const domainStats = {};
    history.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const domain = q.domain || 'General';
            if (!domainStats[domain]) domainStats[domain] = { total: 0, correct: 0, course: q.courseId };
            domainStats[domain].total++;
            const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
            if (ans && ans.isCorrect) domainStats[domain].correct++;
        });
    });

    const sortedDomains = Object.entries(domainStats)
        .map(([name, s]) => ({ name, pct: s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0, total: s.total, correct: s.correct, course: s.course }))
        .sort((a, b) => a.pct - b.pct);

    const weakest = sortedDomains.slice(0, 5);
    const strongest = [...sortedDomains].sort((a, b) => b.pct - a.pct).slice(0, 5);

    function domainRow(d, isStrong) {
        const color = isStrong ? 'var(--success-color)' : 'var(--danger-color)';
        const barW = Math.max(d.pct, 5);
        return `
            <div class="stats-domain-row">
                <div class="stats-domain-name">${d.name}</div>
                <div class="stats-domain-bar-wrap">
                    <div class="stats-domain-bar" style="width:${barW}%;background:${color};"></div>
                </div>
                <span class="stats-domain-pct" style="color:${color}">${d.pct}%</span>
            </div>`;
    }

    // ---- GLOBAL RADAR ----
    let radarSVG = '';
    if (sortedDomains.length >= 3) {
        const domains = sortedDomains.slice(0, 9); // cap at 9 for readability
        const n = domains.length;
        const size = 300;
        const cx = size / 2, cy = size / 2, rad = 95;
        const angleStep = (2 * Math.PI) / n;

        const gridCircles = [0.25, 0.5, 0.75, 1].map(p =>
            `<circle cx="${cx}" cy="${cy}" r="${rad * p}" fill="none" stroke="var(--border-color)" stroke-width="0.5" stroke-dasharray="${p < 1 ? '2' : '0'}"/>`
        ).join('');
        const gridLines = domains.map((_, i) => {
            const a = -Math.PI / 2 + i * angleStep;
            return `<line x1="${cx}" y1="${cy}" x2="${cx + rad * Math.cos(a)}" y2="${cy + rad * Math.sin(a)}" stroke="var(--border-color)" stroke-width="0.5"/>`;
        }).join('');

        const pts = domains.map((d, i) => {
            const pct = d.pct / 100;
            const a = -Math.PI / 2 + i * angleStep;
            return {
                x: cx + rad * pct * Math.cos(a), y: cy + rad * pct * Math.sin(a),
                lx: cx + (rad + 40) * Math.cos(a), ly: cy + (rad + 40) * Math.sin(a),
                name: d.name, pct: d.pct, angle: a
            };
        });
        const polygon = pts.map(p => `${p.x},${p.y}`).join(' ');
        const labels = pts.map(p => {
            const anchor = Math.abs(Math.cos(p.angle)) < 0.3 ? 'middle' : Math.cos(p.angle) > 0 ? 'start' : 'end';
            const shortName = p.name.length > 16 ? p.name.substring(0, 14) + '…' : p.name;
            return `<text x="${p.lx}" y="${p.ly}" text-anchor="${anchor}" font-size="8" fill="var(--text-muted)">${shortName}</text>
                    <text x="${p.lx}" y="${p.ly + 11}" text-anchor="${anchor}" font-size="8" font-weight="700" fill="var(--primary-color)">${p.pct}%</text>`;
        }).join('');

        radarSVG = `<svg width="100%" height="${size}" viewBox="0 0 ${size} ${size}" style="overflow:visible;">
            ${gridCircles}${gridLines}
            <polygon points="${polygon}" fill="rgba(49,87,213,0.15)" stroke="var(--primary-color)" stroke-width="2"/>
            ${pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="3.5" fill="var(--primary-color)"/>`).join('')}
            ${labels}
        </svg>`;
    }

    // ---- SCORE TREND ----
    let trendSVG = '';
    if (history.length >= 2) {
        const data = [...history].reverse().slice(-20);
        const tw = 500, th = 160, pad = 35;
        const pts = data.map((d, i) => {
            const x = pad + (i / (data.length - 1)) * (tw - 2 * pad);
            const pct = d.total === 0 ? 0 : d.score / d.total;
            const y = pad + (1 - pct) * (th - 2 * pad);
            return { x, y, pct: Math.round(pct * 100), passed: d.passed };
        });
        const polyline = pts.map(p => `${p.x},${p.y}`).join(' ');
        const passY = pad + (1 - 0.7) * (th - 2 * pad);

        // Area fill
        const area = `M ${pts[0].x},${th - pad} ${pts.map(p => `L ${p.x},${p.y}`).join(' ')} L ${pts[pts.length-1].x},${th - pad} Z`;

        trendSVG = `<svg width="100%" height="${th}" viewBox="0 0 ${tw} ${th}" style="overflow:visible;">
            <path d="${area}" fill="rgba(49,87,213,0.1)"/>
            <line x1="${pad}" y1="${passY}" x2="${tw-pad}" y2="${passY}" stroke="var(--success-color)" stroke-dasharray="4" opacity="0.4"/>
            <text x="${tw-pad+5}" y="${passY+4}" fill="var(--success-color)" font-size="10" opacity="0.6">70%</text>
            <polyline fill="none" stroke="var(--primary-color)" stroke-width="2.5" stroke-linejoin="round" points="${polyline}"/>
            ${pts.map(p => `<circle cx="${p.x}" cy="${p.y}" r="4" fill="${p.passed ? 'var(--success-color)' : 'var(--danger-color)'}" stroke="var(--card-bg)" stroke-width="2"/>`).join('')}
        </svg>`;
    }

    // ---- PREDICTION ----
    let predictionHTML = '';
    if (history.length >= 3) {
        const scores = [...history].reverse().map(h => h.total > 0 ? (h.score / h.total) * 100 : 0);
        // Simple linear regression
        const n = scores.length;
        const xMean = (n - 1) / 2;
        const yMean = scores.reduce((a, b) => a + b, 0) / n;
        let num = 0, den = 0;
        scores.forEach((y, i) => {
            num += (i - xMean) * (y - yMean);
            den += (i - xMean) * (i - xMean);
        });
        const slope = den !== 0 ? num / den : 0;
        const predicted = Math.round(Math.min(100, Math.max(0, yMean + slope * n)));
        const trend = slope > 0.5 ? 'ascendente' : slope < -0.5 ? 'descendente' : 'estable';
        const trendColor = slope > 0.5 ? 'var(--success-color)' : slope < -0.5 ? 'var(--danger-color)' : 'var(--warning-color)';
        const trendIcon = slope > 0.5 ? 'M7 14l5-5 5 5' : slope < -0.5 ? 'M7 10l5 5 5-5' : 'M4 12h16';
        const willPass = predicted >= 70;

        predictionHTML = `
            <div class="stats-prediction">
                <div class="stats-prediction-score" style="color:${willPass ? 'var(--success-color)' : 'var(--danger-color)'}">
                    ${predicted}%
                </div>
                <div class="stats-prediction-label">Score predicho para el próximo examen</div>
                <div class="stats-prediction-trend" style="color:${trendColor}">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="${trendIcon}"/></svg>
                    Tendencia ${trend}
                </div>
                <div class="stats-prediction-detail">
                    ${willPass
                        ? 'Basado en tu progreso, estás en camino de aprobar.'
                        : 'Enfócate en tus dominios débiles para mejorar tu predicción.'}
                </div>
            </div>`;
    }

    // ---- COURSES BREAKDOWN ----
    const courseIds = [...new Set(history.map(h => h.courseCheck).filter(Boolean))];
    const courseBreakdownHTML = courseIds.map(cid => {
        const cHist = history.filter(h => h.courseCheck === cid);
        const cTotal = cHist.reduce((s, h) => s + (h.total || 0), 0);
        const cCorrect = cHist.reduce((s, h) => s + (h.score || 0), 0);
        const cPct = cTotal > 0 ? Math.round((cCorrect / cTotal) * 100) : 0;
        const cPassed = cHist.filter(h => h.passed).length;
        return `
            <div class="stats-course-card">
                <div class="stats-course-name">${cid}</div>
                <div class="stats-course-metrics">
                    <span>${cHist.length} intentos</span>
                    <span>${cPassed} aprobados</span>
                    <span style="font-weight:700;color:${cPct >= 70 ? 'var(--success-color)' : 'var(--danger-color)'}">${cPct}%</span>
                </div>
            </div>`;
    }).join('');

    // ---- RENDER OVERLAY ----
    const overlay = document.createElement('div');
    overlay.id = 'stats-page-overlay';
    overlay.className = 'stats-overlay';
    overlay.innerHTML = `
        <div class="stats-page">
            <div class="stats-header">
                <h2>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4-3h2v13h-2V8z"/>
                    </svg>
                    Estadísticas Globales
                </h2>
                <button class="stats-close-btn" onclick="document.getElementById('stats-page-overlay').remove()">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                </button>
            </div>

            <!-- KPIs -->
            <div class="stats-kpi-grid">
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${totalQuestions}</div>
                    <div class="stats-kpi-label">Preguntas Respondidas</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${examsTotal}</div>
                    <div class="stats-kpi-label">Exámenes Completados</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value" style="color:${passRate >= 70 ? 'var(--success-color)' : 'var(--danger-color)'}">${passRate}%</div>
                    <div class="stats-kpi-label">Tasa de Aprobación</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${globalPct}%</div>
                    <div class="stats-kpi-label">Acierto Global</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${xp.toLocaleString()}</div>
                    <div class="stats-kpi-label">XP Total</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value stats-kpi-belt">${belt}</div>
                    <div class="stats-kpi-label">Cinturón Actual</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${bestScore}%</div>
                    <div class="stats-kpi-label">Mejor Score</div>
                </div>
                <div class="stats-kpi">
                    <div class="stats-kpi-value">${studyMinutes >= 60 ? Math.floor(studyMinutes / 60) + 'h ' + (studyMinutes % 60) + 'm' : studyMinutes + 'm'}</div>
                    <div class="stats-kpi-label">Tiempo Estimado</div>
                </div>
            </div>

            <!-- Activity Heatmap -->
            <div class="stats-section">
                <h3>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="3" y="4" width="18" height="18" rx="2"/>
                        <path d="M16 2v4M8 2v4M3 10h18"/>
                    </svg>
                    Actividad (últimos 90 días)
                </h3>
                <div class="stats-heatmap-wrap">${heatmapSVG}</div>
                <div class="stats-heatmap-legend">
                    <span>Menos</span>
                    <span class="stats-legend-cell" style="background:var(--border-color)"></span>
                    <span class="stats-legend-cell" style="background:rgba(49,87,213,0.35)"></span>
                    <span class="stats-legend-cell" style="background:rgba(49,87,213,0.6)"></span>
                    <span class="stats-legend-cell" style="background:var(--primary-color)"></span>
                    <span>Más</span>
                </div>
            </div>

            <!-- Two columns: Radar + Strengths/Weaknesses -->
            <div class="stats-two-col">
                <div class="stats-section">
                    <h3>
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/><polygon points="12,2 15,9 22,9 16.5,14 18,21 12,17 6,21 7.5,14 2,9 9,9"/>
                        </svg>
                        Radar Global
                    </h3>
                    ${radarSVG || '<p style="color:var(--text-muted);font-size:0.85rem;padding:20px;">Necesitas datos en al menos 3 dominios</p>'}
                </div>

                <div class="stats-section">
                    <h3 style="color:var(--success-color)">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 14l5-5 5 5"/></svg>
                        Top Fortalezas
                    </h3>
                    ${strongest.length > 0 ? strongest.map(d => domainRow(d, true)).join('') : '<p style="color:var(--text-muted);font-size:0.85rem;">Sin datos aún</p>'}

                    <h3 style="color:var(--danger-color);margin-top:20px;">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 10l5 5 5-5"/></svg>
                        Dominios a Reforzar
                    </h3>
                    ${weakest.length > 0 ? weakest.map(d => domainRow(d, false)).join('') : '<p style="color:var(--text-muted);font-size:0.85rem;">Sin datos aún</p>'}
                </div>
            </div>

            <!-- Score Trend -->
            <div class="stats-section">
                <h3>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                    Tendencia de Score
                </h3>
                ${trendSVG || '<p style="color:var(--text-muted);font-size:0.85rem;">Necesitas al menos 2 intentos</p>'}
            </div>

            <!-- Prediction -->
            ${predictionHTML ? `<div class="stats-section">${predictionHTML}</div>` : ''}

            <!-- Courses Breakdown -->
            ${courseBreakdownHTML ? `
            <div class="stats-section">
                <h3>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
                        <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
                    </svg>
                    Desglose por Curso
                </h3>
                <div class="stats-courses-grid">${courseBreakdownHTML}</div>
            </div>` : ''}
        </div>
    `;

    document.body.appendChild(overlay);

    // Animate in
    requestAnimationFrame(() => overlay.classList.add('visible'));

    // Close on overlay click
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
    });

    // Close on Escape
    const escHandler = (e) => {
        if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', escHandler); }
    };
    document.addEventListener('keydown', escHandler);
}


// =============================================
// F21: STUDY COACH — What to Study + Readiness
// =============================================

/**
 * Computes per-domain stats for a given course from quiz history.
 * Returns { domainName: { total, attempted, correct, pct } }
 */
function _computeDomainStats(courseId) {
    const questions = getLocalizedCourseQuestions(courseId);
    if (!questions.length) return {};

    // Build domain index
    const domains = {};
    questions.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, ids: [], attempted: 0, correct: 0 };
        domains[d].total++;
        domains[d].ids.push(getCanonicalQuestionId(q.id));
    });

    // Accumulate from history
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === courseId);

    Object.keys(domains).forEach(domain => {
        history.forEach(h => {
            if (!h.questionIds || !h.userAnswers) return;
            h.questionIds.forEach((qId, idx) => {
                if (domains[domain].ids.includes(getCanonicalQuestionId(qId))) {
                    domains[domain].attempted++;
                    const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
                    if (ans && ans.isCorrect) domains[domain].correct++;
                }
            });
        });
        domains[domain].pct = domains[domain].attempted > 0
            ? Math.round((domains[domain].correct / domains[domain].attempted) * 100)
            : -1;
    });

    return domains;
}

/**
 * Finds the weakest practiced domain for a course.
 * Returns { name, pct, total } or null if no data.
 */
function getStudyTodayRecommendation(courseId) {
    const stats = _computeDomainStats(courseId);
    const ranked = Object.entries(stats)
        .filter(([_, s]) => s.attempted >= 3) // Only domains with enough data
        .map(([name, s]) => ({
            name,
            pct: s.pct,
            total: s.total,
            attempted: s.attempted
        }))
        .sort((a, b) => a.pct - b.pct);

    return ranked[0] || null;
}

/**
 * Computes a 0-100 readiness score for a course.
 * 70% accuracy + 30% domain coverage.
 */
function computeCourseReadiness(courseId) {
    const stats = _computeDomainStats(courseId);
    const domains = Object.values(stats);
    if (!domains.length) return { score: -1, detail: '' };

    const totalAttempted = domains.reduce((n, d) => n + d.attempted, 0);
    const totalCorrect = domains.reduce((n, d) => n + d.correct, 0);
    const coveredDomains = domains.filter(d => d.attempted > 0).length;
    const totalDomains = domains.length;

    if (totalAttempted === 0) return { score: -1, detail: 'Sin intentos aún' };

    const accuracyScore = (totalCorrect / totalAttempted) * 100;
    const coverageScore = (coveredDomains / totalDomains) * 100;
    const score = Math.round((accuracyScore * 0.7) + (coverageScore * 0.3));

    const accuracyPct = Math.round(accuracyScore);
    const coveragePct = Math.round(coverageScore);
    const detail = `Precisión: ${accuracyPct}% · Cobertura: ${coveredDomains}/${totalDomains} dominios`;

    return { score, detail, accuracyPct, coveragePct };
}

/**
 * Renders the Study Coach panel on the dashboard.
 * Called from selectCategory() when a course is active.
 */
function renderStudyCoach(courseId) {
    const panel = document.getElementById('study-coach-panel');
    if (!panel) return;

    const cid = courseId || window.currentCourseId;
    const allQuestions = getLocalizedCourseQuestions(cid);
    const hasCourseQuestions = allQuestions.some(q => q.courseId === cid);

    if (!hasCourseQuestions) {
        panel.style.display = 'none';
        return;
    }

    panel.style.display = 'block';

    // --- What to Study Today ---
    const textEl = document.getElementById('study-today-text');
    const ctaEl = document.getElementById('study-today-cta');
    const rec = getStudyTodayRecommendation(cid);

    if (rec) {
        textEl.textContent = `Tu dominio más débil es "${rec.name}" con ${rec.pct}% de acierto. ¡Refuérzalo!`;
        ctaEl.style.display = 'inline-flex';
        ctaEl.onclick = () => {
            const domainQuestions = allQuestions.filter(q => q.courseId === cid && (q.domain || 'General') === rec.name);
            if (domainQuestions.length > 0 && typeof launchDirectQuiz === 'function') {
                launchDirectQuiz(domainQuestions, 'domain');
            }
        };
    } else {
        // No practiced domains or not enough data
        const stats = _computeDomainStats(cid);
        const unpracticed = Object.entries(stats).filter(([_, s]) => s.attempted === 0);
        if (unpracticed.length > 0) {
            textEl.textContent = `Tienes ${unpracticed.length} dominio(s) sin practicar. ¡Empieza por "${unpracticed[0][0]}"!`;
            ctaEl.style.display = 'inline-flex';
            ctaEl.onclick = () => {
                const domainQuestions = allQuestions.filter(q => q.courseId === cid && (q.domain || 'General') === unpracticed[0][0]);
                if (domainQuestions.length > 0 && typeof launchDirectQuiz === 'function') {
                    launchDirectQuiz(domainQuestions, 'domain');
                }
            };
        } else {
            textEl.textContent = 'Completa al menos un quiz para recibir recomendaciones.';
            ctaEl.style.display = 'none';
        }
    }

    // --- Course Readiness ---
    const scoreEl = document.getElementById('readiness-score');
    const barEl = document.getElementById('readiness-bar-fill');
    const detailEl = document.getElementById('readiness-detail');
    const readiness = computeCourseReadiness(cid);

    if (readiness.score < 0) {
        scoreEl.textContent = '—';
        barEl.style.width = '0%';
        barEl.style.background = 'var(--text-muted)';
        detailEl.textContent = readiness.detail || 'Realiza quizzes para medir tu preparación';
    } else {
        scoreEl.textContent = readiness.score;
        barEl.style.width = readiness.score + '%';

        // Color based on score
        if (readiness.score >= 80) {
            barEl.style.background = 'var(--success-color, #16794a)';
            scoreEl.style.color = 'var(--success-color, #16794a)';
        } else if (readiness.score >= 60) {
            barEl.style.background = 'var(--warning-color, #9a6700)';
            scoreEl.style.color = 'var(--warning-color, #9a6700)';
        } else {
            barEl.style.background = 'var(--danger-color, #b42318)';
            scoreEl.style.color = 'var(--danger-color, #b42318)';
        }

        detailEl.textContent = readiness.detail;
    }
}

// ===========================================================================
// F21: SPACED REPETITION SYSTEM (SM-2 SRS ALGORITHM FOR FLASHCARDS)
// ===========================================================================
window.SRSManager = {
    STORAGE_KEY: 'data_dojo_srs_state',

    getState() {
        try {
            return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '{}');
        } catch (e) {
            return {};
        }
    },

    saveState(state) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error('Error saving SRS state:', e);
        }
    },

    getCardKey(card) {
        if (!card) return 'unknown';
        const str = (card.tema || '') + '::' + (card.front || card.pregunta || '').slice(0, 40);
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = ((hash << 5) - hash) + str.charCodeAt(i);
            hash |= 0;
        }
        return 'card_' + Math.abs(hash);
    },

    processReview(card, rating) {
        // rating: 'hard' (grade 1), 'medium' (grade 3), 'easy' (grade 5)
        const key = this.getCardKey(card);
        const state = this.getState();
        let cardState = state[key] || {
            repetitions: 0,
            interval: 1,
            easeFactor: 2.5,
            dueDate: Date.now(),
            history: []
        };

        const grade = rating === 'easy' ? 5 : (rating === 'medium' ? 3 : 1);

        if (grade >= 3) {
            if (cardState.repetitions === 0) {
                cardState.interval = 1;
            } else if (cardState.repetitions === 1) {
                cardState.interval = 6;
            } else {
                cardState.interval = Math.round(cardState.interval * cardState.easeFactor);
            }
            cardState.repetitions += 1;
        } else {
            cardState.repetitions = 0;
            cardState.interval = 1;
        }

        // SM-2 Ease Factor calculation
        cardState.easeFactor = Math.max(1.3, cardState.easeFactor + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02)));
        cardState.dueDate = Date.now() + (cardState.interval * 24 * 60 * 60 * 1000);
        cardState.lastReviewed = Date.now();
        cardState.history.push({ date: Date.now(), grade, interval: cardState.interval });

        state[key] = cardState;
        this.saveState(state);
        return cardState;
    },

    getDueCards(cards) {
        if (!Array.isArray(cards)) return [];
        const state = this.getState();
        const now = Date.now();
        return cards.filter(card => {
            const key = this.getCardKey(card);
            const cardState = state[key];
            if (!cardState) return true; // Unreviewed cards are due
            return cardState.dueDate <= now;
        });
    },

    getStats(cards) {
        if (!Array.isArray(cards)) return { total: 0, due: 0, learned: 0 };
        const state = this.getState();
        const now = Date.now();
        let due = 0;
        let learned = 0;

        cards.forEach(card => {
            const key = this.getCardKey(card);
            const cardState = state[key];
            if (!cardState || cardState.dueDate <= now) {
                due++;
            } else if (cardState.repetitions >= 3) {
                learned++;
            }
        });

        return { total: cards.length, due, learned };
    }
};

// ===========================================================================
// F22: AUDIO PODCAST / HANDS-FREE COMMUTE MODE
// ===========================================================================
window.PodcastMode = {
    isPlaying: false,
    timer: null,
    cards: [],
    currentIndex: 0,
    pauseSeconds: 5,
    speed: 1.0,
    side: 'front', // 'front' | 'think' | 'back'

    start(cards, startIndex = 0) {
        if (!Array.isArray(cards) || cards.length === 0) return;
        this.cards = cards;
        this.currentIndex = startIndex >= 0 && startIndex < cards.length ? startIndex : 0;
        this.isPlaying = true;
        this.renderOverlay();
        this.playCurrentCard();
    },

    pause() {
        this.isPlaying = false;
        if (this.timer) clearTimeout(this.timer);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        this.updateUI();
    },

    resume() {
        if (this.cards.length === 0) return;
        this.isPlaying = true;
        this.playCurrentCard();
    },

    stop() {
        this.pause();
        const overlay = document.getElementById('podcast-player-overlay');
        if (overlay) overlay.remove();
    },

    next() {
        if (this.timer) clearTimeout(this.timer);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        this.currentIndex = (this.currentIndex + 1) % this.cards.length;
        if (this.isPlaying) {
            this.playCurrentCard();
        } else {
            this.updateUI();
        }
    },

    prev() {
        if (this.timer) clearTimeout(this.timer);
        if ('speechSynthesis' in window) window.speechSynthesis.cancel();
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
        if (this.isPlaying) {
            this.playCurrentCard();
        } else {
            this.updateUI();
        }
    },

    playCurrentCard() {
        if (!this.isPlaying) return;
        const card = this.cards[this.currentIndex];
        if (!card) {
            this.stop();
            return;
        }

        const lang = typeof getActiveLanguage === 'function' ? getActiveLanguage() : 'es';
        const questionText = card.front || card.pregunta || card.prompt || '';
        const answerText = card.back || card.respuesta || card.explanation || '';

        this.side = 'front';
        this.updateUI();

        // 1. Speak Question
        window.speakText(questionText, lang, () => {
            if (!this.isPlaying) return;
            this.side = 'think';
            this.updateUI();

            // 2. Countdown Think Pause
            let remaining = this.pauseSeconds;
            const step = () => {
                if (!this.isPlaying) return;
                const timerEl = document.getElementById('podcast-countdown');
                if (timerEl) timerEl.textContent = `${remaining}s`;
                if (remaining > 0) {
                    remaining--;
                    this.timer = setTimeout(step, 1000);
                } else {
                    // 3. Speak Answer
                    this.side = 'back';
                    this.updateUI();
                    window.speakText(answerText, lang, () => {
                        if (!this.isPlaying) return;
                        // 4. Brief pause before next card
                        this.timer = setTimeout(() => {
                            this.currentIndex = (this.currentIndex + 1) % this.cards.length;
                            this.playCurrentCard();
                        }, 2200);
                    });
                }
            };
            step();
        });
    },

    renderOverlay() {
        let overlay = document.getElementById('podcast-player-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.id = 'podcast-player-overlay';
            overlay.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);width:92%;max-width:760px;background:var(--bg-card,#1e293b);border:1.5px solid #3157d5;border-radius:24px;box-shadow:0 16px 48px rgba(0,0,0,0.35);z-index:10050;padding:18px 24px;color:var(--text-color,#fff);font-family:Inter,sans-serif;animation:slideUp 0.3s ease;';
            document.body.appendChild(overlay);
        }
        this.updateUI();
    },

    updateUI() {
        const overlay = document.getElementById('podcast-player-overlay');
        if (!overlay || this.cards.length === 0) return;
        const card = this.cards[this.currentIndex];
        const cardTitle = card.tema || 'Flashcard';
        const cardText = this.side === 'back' ? (card.back || card.respuesta) : (card.front || card.pregunta);

        overlay.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <span style="display:inline-flex;align-items:center;justify-content:center;width:28px;height:28px;border-radius:50%;background:#3157d5;color:#fff;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 1a9 9 0 00-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2a7 7 0 0114 0v2h-4v8h3c1.66 0 3-1.34 3-3v-7a9 9 0 00-9-9z"/></svg>
                    </span>
                    <span style="font-weight:700;font-size:0.95rem;color:#3157d5;">MODO PODCAST / MANOS LIBRES</span>
                    <span style="font-size:0.8rem;background:rgba(49,87,213,0.15);padding:2px 8px;border-radius:10px;font-weight:600;">${this.currentIndex + 1} / ${this.cards.length}</span>
                </div>
                <div style="display:flex;align-items:center;gap:8px;">
                    <span id="podcast-status-badge" style="font-size:0.78rem;padding:3px 10px;border-radius:12px;font-weight:700;${this.side === 'front' ? 'background:var(--primary-color);color:#fff;' : (this.side === 'think' ? 'background:var(--warning-color,#9a6700);color:#000;' : 'background:var(--success-color);color:#fff;')}">
                        ${this.side === 'front' ? 'Pregunta' : (this.side === 'think' ? 'Pensando...' : 'Respuesta')}
                    </span>
                    <button type="button" onclick="window.PodcastMode.stop()" style="background:transparent;border:none;color:var(--text-muted,#94a3b8);cursor:pointer;padding:4px;" title="Cerrar">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
                    </button>
                </div>
            </div>

            <div style="font-size:0.85rem;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-muted,#94a3b8);margin-bottom:4px;">${cardTitle}</div>
            <div style="font-size:1.05rem;line-height:1.5;max-height:80px;overflow-y:auto;margin-bottom:14px;color:var(--text-color,#f1f5f9);">
                ${cardText}
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:10px;border-top:1px solid rgba(255,255,255,0.1);">
                <div style="display:flex;align-items:center;gap:6px;font-size:0.8rem;">
                    <span>Pausa:</span>
                    <select onchange="window.PodcastMode.pauseSeconds = parseInt(this.value)" style="padding:3px 8px;border-radius:10px;background:rgba(255,255,255,0.1);color:inherit;border:1px solid rgba(255,255,255,0.2);font-size:0.8rem;">
                        <option value="3" ${this.pauseSeconds === 3 ? 'selected' : ''}>3s</option>
                        <option value="5" ${this.pauseSeconds === 5 ? 'selected' : ''}>5s</option>
                        <option value="8" ${this.pauseSeconds === 8 ? 'selected' : ''}>8s</option>
                    </select>
                </div>

                <div style="display:flex;align-items:center;gap:12px;">
                    <button type="button" onclick="window.PodcastMode.prev()" class="btn-icon-modern" style="width:36px;height:36px;border-radius:50%;" title="Anterior">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/></svg>
                    </button>

                    <button type="button" onclick="${this.isPlaying ? 'window.PodcastMode.pause()' : 'window.PodcastMode.resume()'}" style="width:46px;height:46px;border-radius:50%;background:#3157d5;color:#fff;border:none;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 14px rgba(49,87,213,0.4);" title="${this.isPlaying ? 'Pausar' : 'Reanudar'}">
                        ${this.isPlaying 
                            ? '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>'
                            : '<svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'
                        }
                    </button>

                    <button type="button" onclick="window.PodcastMode.next()" class="btn-icon-modern" style="width:36px;height:36px;border-radius:50%;" title="Siguiente">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z"/></svg>
                    </button>
                </div>

                <div id="podcast-countdown" style="font-weight:800;font-size:1.1rem;color:#eab308;min-width:32px;text-align:right;">
                    ${this.side === 'think' ? this.pauseSeconds + 's' : ''}
                </div>
            </div>
        `;
    }
};

// ===========================================================================
// F23: INTERACTIVE CLIENT-SIDE SQL SANDBOX & QUERY RUNNER
// ===========================================================================
window.SQLSandbox = {
    tables: {
        bronze_raw_events: [
            { event_id: 'evt_101', user_id: 'usr_801', event_type: 'page_view', payload_size_kb: 4.2, ingestion_time: '2026-08-24 10:15:00' },
            { event_id: 'evt_102', user_id: 'usr_802', event_type: 'cart_add', payload_size_kb: 8.7, ingestion_time: '2026-08-24 10:15:22' },
            { event_id: 'evt_103', user_id: 'usr_801', event_type: 'checkout_click', payload_size_kb: 12.1, ingestion_time: '2026-08-24 10:16:05' },
            { event_id: 'evt_104', user_id: 'usr_803', event_type: 'page_view', payload_size_kb: 3.9, ingestion_time: '2026-08-24 10:17:40' },
            { event_id: 'evt_105', user_id: 'usr_804', event_type: 'search_query', payload_size_kb: 6.5, ingestion_time: '2026-08-24 10:18:11' }
        ],
        silver_customers: [
            { customer_id: 'c_01', full_name: 'Elena Rostova', email: 'elena@bi-lab.org', segment: 'Enterprise', country: 'Honduras', credit_score: 785 },
            { customer_id: 'c_02', full_name: 'Marcus Vance', email: 'marcus@dataflow.io', segment: 'Growth', country: 'Costa Rica', credit_score: 720 },
            { customer_id: 'c_03', full_name: 'Sofia Chen', email: 'sofia@lakehouse.ai', segment: 'Enterprise', country: 'Guatemala', credit_score: 810 },
            { customer_id: 'c_04', full_name: 'Diego Morales', email: 'diego@unir-viz.es', segment: 'Standard', country: 'Panama', credit_score: 690 },
            { customer_id: 'c_05', full_name: 'Lucia Mendez', email: 'lucia@genai-hub.com', segment: 'Growth', country: 'El Salvador', credit_score: 745 }
        ],
        silver_orders: [
            { order_id: 'ord_501', customer_id: 'c_01', amount_usd: 1450.00, order_date: '2026-08-20', status: 'Delivered', category: 'Analytics Pro' },
            { order_id: 'ord_502', customer_id: 'c_02', amount_usd: 850.50, order_date: '2026-08-21', status: 'Delivered', category: 'Compute Cluster' },
            { order_id: 'ord_503', customer_id: 'c_03', amount_usd: 3200.00, order_date: '2026-08-22', status: 'Delivered', category: 'GenAI Endpoint' },
            { order_id: 'ord_504', customer_id: 'c_01', amount_usd: 950.00, order_date: '2026-08-23', status: 'Processing', category: 'Unity Catalog Addon' },
            { order_id: 'ord_505', customer_id: 'c_04', amount_usd: 420.00, order_date: '2026-08-24', status: 'Delivered', category: 'Analytics Pro' }
        ],
        gold_monthly_sales: [
            { month: '2026-06', category: 'GenAI Endpoint', total_sales_usd: 125000, total_orders: 45, avg_order_val: 2777.78 },
            { month: '2026-07', category: 'GenAI Endpoint', total_sales_usd: 184000, total_orders: 62, avg_order_val: 2967.74 },
            { month: '2026-08', category: 'GenAI Endpoint', total_sales_usd: 215000, total_orders: 78, avg_order_val: 2756.41 },
            { month: '2026-08', category: 'Analytics Pro', total_sales_usd: 98000, total_orders: 85, avg_order_val: 1152.94 }
        ],
        genai_vector_chunks: [
            { chunk_id: 'chk_001', doc_title: 'Databricks Mosaic Vector Search', tokens: 256, similarity_score: 0.94, text_snippet: 'Delta Sync Index automatically synchronizes embeddings when the source Delta table updates.' },
            { chunk_id: 'chk_002', doc_title: 'Model Serving Pay-per-Token', tokens: 198, similarity_score: 0.88, text_snippet: 'Pay-per-token pricing is ideal for spiky workloads and quick agent prototyping without reserved compute.' },
            { chunk_id: 'chk_003', doc_title: 'Unity Catalog AI Functions', tokens: 312, similarity_score: 0.82, text_snippet: 'ai_query and ai_classify allow SQL analysts to invoke LLMs directly inside batch queries.' }
        ]
    },

    presets: [
        {
            title: '1. Clientes Silver con Filtro (WHERE + ORDER BY)',
            sql: 'SELECT customer_id, full_name, segment, country, credit_score\nFROM silver_customers\nWHERE credit_score >= 720\nORDER BY credit_score DESC;'
        },
        {
            title: '2. Total de Ventas por Categoría (GROUP BY + SUM)',
            sql: 'SELECT category, COUNT(*) AS order_count, SUM(amount_usd) AS total_revenue_usd, AVG(amount_usd) AS avg_ticket\nFROM silver_orders\nGROUP BY category\nORDER BY total_revenue_usd DESC;'
        },
        {
            title: '3. Clasificación con Función AI (ai_classify simulado)',
            sql: 'SELECT full_name, segment, credit_score, ai_classify(segment, ARRAY("VIP", "Standard")) AS tier_evaluation\nFROM silver_customers;'
        },
        {
            title: '4. Chunks de Vector Search Relevantes (Similarity >= 0.85)',
            sql: 'SELECT chunk_id, doc_title, similarity_score, text_snippet\nFROM genai_vector_chunks\nWHERE similarity_score >= 0.85\nORDER BY similarity_score DESC;'
        }
    ],

    render(container) {
        if (!container) return;
        const tablesList = Object.keys(this.tables);

        container.innerHTML = `
            <div class="sql-sandbox-wrap" style="padding:20px;max-width:1480px;margin:0 auto;font-family:Inter,sans-serif;">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;flex-wrap:wrap;gap:12px;">
                    <div>
                        <h2 style="margin:0 0 6px;font-size:1.6rem;font-weight:800;display:flex;align-items:center;gap:10px;">
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="#3157d5"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>
                            Mini SQL Sandbox & Lakehouse Playground
                        </h2>
                        <div style="font-size:0.9rem;color:var(--text-muted,#64748b);">Ejecuta consultas SQL en memoria sobre tablas de catálogo Lakehouse (Bronze, Silver, Gold y GenAI).</div>
                    </div>
                    <div style="display:flex;gap:8px;align-items:center;">
                        <select id="sql-sandbox-presets" onchange="window.SQLSandbox.loadPreset(this.value)" style="padding:8px 14px;border-radius:12px;border:1px solid var(--border-color,#e5e7eb);background:var(--bg-card,#fff);color:var(--text-color,#333);font-size:0.85rem;font-weight:600;">
                            <option value="">-- Cargar Consulta de Ejemplo --</option>
                            ${this.presets.map((p, idx) => `<option value="${idx}">${p.title}</option>`).join('')}
                        </select>
                    </div>
                </div>

                <div style="display:grid;grid-template-columns:260px 1fr;gap:20px;align-items:start;">
                    <!-- Sidebar: Tables Explorer -->
                    <div style="background:var(--bg-card,#fff);border:1px solid var(--border-color,#e5e7eb);border-radius:16px;padding:16px;">
                        <div style="font-weight:800;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:12px;color:var(--text-muted,#64748b);display:flex;align-items:center;gap:6px;">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12z"/></svg>
                            Tablas Disponibles
                        </div>
                        <div style="display:flex;flex-direction:column;gap:8px;">
                            ${tablesList.map(tbl => `
                                <div style="padding:8px 12px;border-radius:10px;background:rgba(49,87,213,0.06);border:1px solid rgba(49,87,213,0.12);font-family:monospace;font-size:0.82rem;cursor:pointer;" onclick="window.SQLSandbox.insertTable('${tbl}')" title="Clic para consultar">
                                    <strong>${tbl}</strong>
                                    <div style="font-size:0.75rem;color:var(--text-muted,#64748b);margin-top:2px;">${this.tables[tbl].length} filas</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>

                    <!-- Editor and Results Area -->
                    <div>
                        <div style="background:#111827;border-radius:16px 16px 0 0;padding:12px 18px;display:flex;justify-content:space-between;align-items:center;border:1px solid #1f2937;">
                            <span style="color:#94a3b8;font-family:monospace;font-size:0.82rem;">Databricks SQL Warehouse (Serverless)</span>
                            <div style="display:flex;gap:8px;">
                                <button type="button" onclick="window.SQLSandbox.clearEditor()" class="btn btn-sm" style="background:rgba(255,255,255,0.1);color:#fff;border:none;padding:4px 10px;border-radius:8px;font-size:0.78rem;cursor:pointer;">Limpiar</button>
                                <button type="button" onclick="window.SQLSandbox.executeQuery()" class="btn btn-sm btn-primary" style="padding:4px 14px;border-radius:8px;font-weight:700;font-size:0.82rem;display:inline-flex;align-items:center;gap:6px;">
                                    <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> Ejecutar (Ctrl+Enter)
                                </button>
                            </div>
                        </div>
                        <textarea id="sql-sandbox-input" style="width:100%;height:140px;padding:16px;background:#1e293b;color:#f8fafc;font-family:'JetBrains Mono',monospace;font-size:0.95rem;border:1px solid #1f2937;border-top:none;outline:none;resize:vertical;line-height:1.5;">${this.presets[0].sql}</textarea>

                        <!-- Results Box -->
                        <div id="sql-sandbox-results" style="margin-top:16px;background:var(--bg-card,#fff);border:1px solid var(--border-color,#e5e7eb);border-radius:16px;padding:20px;min-height:160px;">
                            <div style="color:var(--text-muted,#64748b);font-size:0.9rem;text-align:center;padding:2rem;">Haz clic en <strong>Ejecutar</strong> para procesar la consulta SQL.</div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Keyboard shortcut Ctrl+Enter to execute
        const textarea = document.getElementById('sql-sandbox-input');
        if (textarea) {
            textarea.addEventListener('keydown', (e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                    e.preventDefault();
                    this.executeQuery();
                }
            });
        }
    },

    loadPreset(idx) {
        if (idx === '') return;
        const p = this.presets[parseInt(idx)];
        if (!p) return;
        const textarea = document.getElementById('sql-sandbox-input');
        if (textarea) {
            textarea.value = p.sql;
            this.executeQuery();
        }
    },

    insertTable(tbl) {
        const textarea = document.getElementById('sql-sandbox-input');
        if (textarea) {
            textarea.value = `SELECT *\nFROM ${tbl}\nLIMIT 10;`;
            this.executeQuery();
        }
    },

    clearEditor() {
        const textarea = document.getElementById('sql-sandbox-input');
        if (textarea) textarea.value = '';
    },

    executeQuery() {
        const textarea = document.getElementById('sql-sandbox-input');
        const resultsEl = document.getElementById('sql-sandbox-results');
        if (!textarea || !resultsEl) return;

        const rawSql = textarea.value.trim();
        if (!rawSql) {
            resultsEl.innerHTML = '<div style="color:var(--danger-color);">Por favor escribe una consulta SQL.</div>';
            return;
        }

        const t0 = performance.now();

        // 1. Detect target table
        const fromMatch = rawSql.match(/FROM\s+([a-zA-Z0-9_]+)/i);
        if (!fromMatch) {
            resultsEl.innerHTML = '<div style="color:var(--danger-color);">Error de sintaxis: Cláusula FROM no encontrada.</div>';
            return;
        }

        const tableName = fromMatch[1].toLowerCase();
        const sourceData = this.tables[tableName];

        if (!sourceData) {
            resultsEl.innerHTML = `<div style="color:var(--danger-color);">Tabla no encontrada: <code>${tableName}</code>. Tablas válidas: ${Object.keys(this.tables).join(', ')}.</div>`;
            return;
        }

        let rows = [...sourceData];

        // 2. WHERE filter simulation
        const whereMatch = rawSql.match(/WHERE\s+([^GROUP|ORDER|LIMIT|;]+)/i);
        if (whereMatch) {
            const cond = whereMatch[1].trim();
            rows = rows.filter(r => {
                try {
                    if (cond.includes('>=')) {
                        const [col, val] = cond.split('>=').map(s => s.trim().replace(/['"]/g, ''));
                        return Number(r[col]) >= Number(val);
                    } else if (cond.includes('<=')) {
                        const [col, val] = cond.split('<=').map(s => s.trim().replace(/['"]/g, ''));
                        return Number(r[col]) <= Number(val);
                    } else if (cond.includes('=')) {
                        const [col, val] = cond.split('=').map(s => s.trim().replace(/['"]/g, ''));
                        return String(r[col]).toLowerCase() === String(val).toLowerCase();
                    }
                    return true;
                } catch (e) {
                    return true;
                }
            });
        }

        // 3. GROUP BY simulation
        const groupMatch = rawSql.match(/GROUP\s+BY\s+([a-zA-Z0-9_]+)/i);
        if (groupMatch) {
            const groupCol = groupMatch[1].trim();
            const groups = {};
            rows.forEach(r => {
                const key = r[groupCol] || 'Other';
                if (!groups[key]) groups[key] = { items: [], count: 0, sumAmount: 0 };
                groups[key].items.push(r);
                groups[key].count++;
                groups[key].sumAmount += Number(r.amount_usd || r.total_sales_usd || 0);
            });

            rows = Object.keys(groups).map(g => ({
                [groupCol]: g,
                order_count: groups[g].count,
                total_revenue_usd: groups[g].sumAmount.toFixed(2),
                avg_ticket: (groups[g].sumAmount / groups[g].count).toFixed(2)
            }));
        }

        // 4. AI Function simulation (ai_classify)
        if (rawSql.includes('ai_classify')) {
            rows = rows.map(r => ({
                ...r,
                tier_evaluation: (r.credit_score && r.credit_score >= 750) || r.segment === 'Enterprise' ? 'VIP' : 'Standard'
            }));
        }

        // 5. ORDER BY simulation
        const orderMatch = rawSql.match(/ORDER\s+BY\s+([a-zA-Z0-9_]+)(?:\s+(ASC|DESC))?/i);
        if (orderMatch) {
            const orderCol = orderMatch[1].trim();
            const isDesc = (orderMatch[2] || '').toUpperCase() === 'DESC';
            rows.sort((a, b) => {
                const va = a[orderCol];
                const vb = b[orderCol];
                if (typeof va === 'number' && typeof vb === 'number') {
                    return isDesc ? vb - va : va - vb;
                }
                return isDesc ? String(vb).localeCompare(String(va)) : String(va).localeCompare(String(vb));
            });
        }

        const t1 = performance.now();
        const execTimeMs = (t1 - t0).toFixed(2);

        if (rows.length === 0) {
            resultsEl.innerHTML = `
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
                    <span style="font-size:0.82rem;color:var(--text-muted,#64748b);">0 filas devueltas (en ${execTimeMs} ms)</span>
                </div>
                <div style="text-align:center;padding:1.5rem;color:var(--text-muted,#64748b);">Ninguna fila cumple las condiciones especificadas.</div>
            `;
            return;
        }

        const cols = Object.keys(rows[0]);

        resultsEl.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px;">
                <div style="font-size:0.85rem;color:var(--text-muted,#64748b);display:flex;align-items:center;gap:8px;">
                    <span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--success-color);"></span>
                    <span><strong>${rows.length}</strong> fila${rows.length === 1 ? '' : 's'} devuelta${rows.length === 1 ? '' : 's'}</span>
                    <span>•</span>
                    <span>Tiempo de ejecución: <strong>${execTimeMs} ms</strong></span>
                </div>
                <button type="button" onclick="window.SQLSandbox.exportCSV()" class="btn btn-sm btn-outline" style="padding:3px 10px;border-radius:8px;font-size:0.75rem;cursor:pointer;display:inline-flex;align-items:center;gap:4px;">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>
                    <span>Exportar CSV</span>
                </button>
            </div>

            <div style="overflow-x:auto;border:1px solid var(--border-color,#e5e7eb);border-radius:10px;">
                <table style="width:100%;border-collapse:collapse;font-size:0.88rem;text-align:left;">
                    <thead>
                        <tr style="background:var(--study-accent-soft,rgba(49,87,213,0.08));border-bottom:1px solid var(--border-color,#e5e7eb);">
                            ${cols.map(c => `<th style="padding:10px 14px;font-weight:700;color:var(--primary-color,#3157d5);">${c}</th>`).join('')}
                        </tr>
                    </thead>
                    <tbody>
                        ${rows.map(r => `
                            <tr style="border-bottom:1px solid var(--border-color,#e5e7eb);">
                                ${cols.map(c => `<td style="padding:10px 14px;font-family:monospace;font-size:0.84rem;">${r[c] !== undefined && r[c] !== null ? r[c] : 'NULL'}</td>`).join('')}
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        `;

        this._lastRows = rows;
    },

    exportCSV() {
        if (!this._lastRows || this._lastRows.length === 0) return;
        const cols = Object.keys(this._lastRows[0]);
        const csvContent = [
            cols.join(','),
            ...this._lastRows.map(r => cols.map(c => `"${String(r[c] || '').replace(/"/g, '""')}"`).join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `data_dojo_query_${Date.now()}.csv`);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
};

// ===========================================================================
// F24: AI COACH & DEEP EXAM BREAKDOWN GENERATOR
// ===========================================================================
window.AICoach = {
    generateBreakdown(question) {
        if (!question) return null;
        const prompt = question.prompt || '';
        const explanation = question.explanation || '';
        const domain = question.domain || 'Core Knowledge';

        return {
            domain,
            examKey: `Esta pregunta evalúa la capacidad de tomar decisiones arquitectónicas sobre ${domain}. En exámenes oficiales, el criterio prioritario es siempre la gobernanza unificada (Unity Catalog) y la relación costo-rendimiento.`,
            pitfalls: `Los distractores comunes suelen proponer soluciones que aumentan el costo innecesariamente (ej. aprovisionar clusters dedicados cuando Pay-per-token o Serverless es más eficiente) o configurar permisos legacy fuera de Unity Catalog.`,
            ruleOfThumb: `Regla de Oro: Si la carga es intermitente o para prototipos → Serverless / Pay-per-token. Si se requiere sincronización automática de embeddings → Vector Search Delta Sync Index.`
        };
    },

    toggleBreakdown(index) {
        const container = document.getElementById(`ai-coach-breakdown-${index}`);
        if (!container) return;
        const isHidden = container.style.display === 'none';
        container.style.display = isHidden ? 'block' : 'none';
    }
};

// ===========================================================================
// F25: GENERADOR OFICIAL DE GUÍA DE ESTUDIO Y PDF POR DOMINIO / BANCO COMPLETO
// ===========================================================================
window.StudyGuidePDF = {
    courseTitles: {
        'azure-ai-103': 'Microsoft Certified: Azure AI Apps and Agents Developer Associate (AI-103)',
        'databricks-genai-engineer': 'Databricks Certified Generative AI Engineer Associate',
        'dp-600': 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
        'databricks-da': 'Databricks Certified Data Analyst Associate',
        'databricks-fundamentals': 'Databricks Fundamentals',
        'databricks-aibi': 'Databricks AI/BI for Data Analysts',
        'databricks-sql-analytics': 'Databricks SQL Analytics',
        'unir-viz-interactiva': 'UNIR — Visualización Interactiva de la Información',
        'unir-herramientas-viz': 'UNIR — Herramientas de Visualización de Datos',
        'unah-tesis': 'UNAH — Tesis Doctoral Modelo Híbrido'
    },

    openModal(preferredCourseId) {
        const modal = document.getElementById('pdf-guide-modal');
        if (!modal) return;
        
        const courseSelect = document.getElementById('pdf-guide-course');
        const langSelect = document.getElementById('pdf-guide-lang');
        const currentLang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        if (langSelect) langSelect.value = currentLang;

        // Populate courses
        if (courseSelect) {
            const allQuestions = window.questionsData || [];
            const courseIds = [...new Set(allQuestions.map(q => q.courseId).filter(Boolean))];
            courseSelect.innerHTML = courseIds.map(cid => {
                const title = this.courseTitles[cid] || cid;
                return `<option value="${cid}">${title}</option>`;
            }).join('');

            const selectedCid = preferredCourseId || window.currentCourseId || (courseIds.includes('azure-ai-103') ? 'azure-ai-103' : courseIds[0]);
            if (selectedCid) courseSelect.value = selectedCid;
        }

        this.onCourseChange();
        modal.classList.remove('hidden');
    },

    closeModal() {
        const modal = document.getElementById('pdf-guide-modal');
        if (modal) modal.classList.add('hidden');
    },

    onCourseChange() {
        const courseSelect = document.getElementById('pdf-guide-course');
        const domainSelect = document.getElementById('pdf-guide-domain');
        const langSelect = document.getElementById('pdf-guide-lang');
        if (!courseSelect || !domainSelect) return;

        const cid = courseSelect.value;
        const lang = langSelect ? langSelect.value : 'es';
        const allQuestions = window.questionsData || [];
        const scoped = allQuestions.filter(q => q.courseId === cid);
        const localized = scoped.filter(q => q.lang === lang);
        const questions = localized.length > 0 ? localized : scoped;

        const domains = [...new Set(questions.map(q => q.domain).filter(Boolean))];
        domainSelect.innerHTML = domains.map(d => {
            const count = questions.filter(q => q.domain === d).length;
            return `<option value="${d}">${d} (${count} preguntas)</option>`;
        }).join('');

        this.updateStats();
    },

    onScopeChange() {
        const scopeSelect = document.getElementById('pdf-guide-scope');
        const domainGroup = document.getElementById('pdf-guide-domain-group');
        if (!scopeSelect || !domainGroup) return;

        domainGroup.style.display = scopeSelect.value === 'single' ? 'block' : 'none';
        this.updateStats();
    },

    updateStats() {
        const statsEl = document.getElementById('pdf-guide-stats');
        const courseSelect = document.getElementById('pdf-guide-course');
        const scopeSelect = document.getElementById('pdf-guide-scope');
        const domainSelect = document.getElementById('pdf-guide-domain');
        const langSelect = document.getElementById('pdf-guide-lang');
        if (!statsEl || !courseSelect) return;

        const cid = courseSelect.value;
        const scope = scopeSelect ? scopeSelect.value : 'all';
        const selectedDomain = domainSelect ? domainSelect.value : '';
        const lang = langSelect ? langSelect.value : 'es';

        const allQuestions = window.questionsData || [];
        const scoped = allQuestions.filter(q => q.courseId === cid);
        const localized = scoped.filter(q => q.lang === lang);
        let questions = localized.length > 0 ? localized : scoped;

        if (scope === 'single' && selectedDomain) {
            questions = questions.filter(q => q.domain === selectedDomain);
        }

        const uniqueDomains = [...new Set(questions.map(q => q.domain).filter(Boolean))];
        statsEl.innerHTML = `<strong>Resumen a generar:</strong> ${questions.length} preguntas en ${uniqueDomains.length} dominio(s) &bull; Idioma: <strong>${lang.toUpperCase()}</strong> &bull; Candidato: <strong>Norman Reynaldo Sabillon Castro</strong>`;
    },

    generateAndOpen() {
        const courseSelect = document.getElementById('pdf-guide-course');
        const scopeSelect = document.getElementById('pdf-guide-scope');
        const domainSelect = document.getElementById('pdf-guide-domain');
        const langSelect = document.getElementById('pdf-guide-lang');
        const typeSelect = document.getElementById('pdf-guide-type');
        if (!courseSelect) return;

        const cid = courseSelect.value;
        const scope = scopeSelect ? scopeSelect.value : 'all';
        const selectedDomain = domainSelect ? domainSelect.value : '';
        const lang = langSelect ? langSelect.value : 'es';
        const isCheatSheet = typeSelect ? typeSelect.value === 'cheat_sheet' : false;
        const courseTitle = this.courseTitles[cid] || cid;

        let html = '';
        if (isCheatSheet) {
            html = this.buildCheatSheetHTML({ courseTitle, cid, lang });
        } else {
            const allQuestions = window.questionsData || [];
            const scoped = allQuestions.filter(q => q.courseId === cid);
            const localized = scoped.filter(q => q.lang === lang);
            let questions = localized.length > 0 ? localized : scoped;

            if (scope === 'single' && selectedDomain) {
                questions = questions.filter(q => q.domain === selectedDomain);
            }

            if (questions.length === 0) {
                alert('No se encontraron preguntas para los filtros seleccionados.');
                return;
            }

            // Group questions by domain
            const domainMap = new Map();
            questions.forEach(q => {
                const dom = q.domain || (lang === 'es' ? 'Dominio General' : 'General Domain');
                if (!domainMap.has(dom)) domainMap.set(dom, []);
                domainMap.get(dom).push(q);
            });

            // Build Document HTML
            html = this.buildDocumentHTML({
                courseTitle,
                cid,
                lang,
                totalQuestions: questions.length,
                domainMap
            });
        }

        this.closeModal();

        // Open in new printable window
        const printWin = window.open('', '_blank');
        if (printWin) {
            printWin.document.open();
            printWin.document.write(html);
            printWin.document.close();
        } else {
            // Fallback: render overlay in active document if popup blocked
            this.renderPrintOverlay(html);
        }
    },

    buildCheatSheetHTML({ courseTitle, cid, lang }) {
        const dateStr = new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const matrices = window.DecisionNavigator ? (window.DecisionNavigator.matrices[cid] || window.DecisionNavigator.matrices['azure-ai-103']) : [];
        const matrixRows = matrices.map(m => `
            <div style="margin-bottom:8px;padding:6px;border:1px solid #e2e8f0;border-radius:4px;background:#f8fafc;">
                <div style="font-weight:700;color:#1e293b;font-size:11px;">[${m.category}] ${m.decision}</div>
                <div style="font-size:10px;color:#334155;margin-top:2px;">${m.whenToUse}</div>
            </div>
        `).join('');

        return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>Cheat-Sheet & Reglas de Oro — ${this.escapeHtml(courseTitle)}</title>
  <style>
    @page { size: A4 portrait; margin: 12mm; }
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 10px; line-height: 1.35; color: #0f172a; margin: 0; padding: 0; }
    .sheet-header { border-bottom: 2px solid #3157d5; padding-bottom: 8px; margin-bottom: 12px; display: flex; justify-content: space-between; align-items: flex-end; }
    .sheet-title { font-size: 15px; font-weight: 800; color: #0f172a; margin: 0; }
    .sheet-sub { font-size: 10px; color: #64748b; margin-top: 2px; }
    .two-col { column-count: 2; column-gap: 16px; }
    .box { break-inside: avoid; border: 1px solid #cbd5e1; border-radius: 6px; padding: 8px 10px; margin-bottom: 12px; background: #ffffff; }
    .box-title { font-size: 11px; font-weight: 800; color: #3157d5; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 1px solid #e2e8f0; padding-bottom: 4px; margin-bottom: 6px; }
    ul, ol { margin: 0; padding-left: 14px; }
    li { margin-bottom: 4px; }
    @media print { .no-print { display: none; } }
  </style>
</head>
<body>
  <div class="no-print" style="background:#f1f5f9;padding:10px;text-align:center;border-bottom:1px solid #cbd5e1;margin-bottom:12px;">
    <button onclick="window.print()" style="background:#3157d5;color:#fff;border:none;padding:6px 16px;border-radius:4px;font-weight:700;cursor:pointer;">Imprimir / Guardar PDF</button>
  </div>
  <header class="sheet-header">
    <div>
      <h1 class="sheet-title">Hoja de Reglas de Oro & Decisiones Clave</h1>
      <div class="sheet-sub">${this.escapeHtml(courseTitle)} &bull; Candidato: <strong>Norman Reynaldo Sabillon Castro</strong></div>
    </div>
    <div style="text-align:right;font-size:9px;color:#64748b;">
      The Data Dojo &bull; ${dateStr}
    </div>
  </header>
  <div class="two-col">
    <div class="box">
      <div class="box-title">1. Principios Inquebrantables del Examen</div>
      <ul>
        <li><strong>Arquitectura RAG Óptima:</strong> La búsqueda híbrida (Vector + BM25) combinada con Semantic Re-ranker (L2) proporciona la máxima precisión y recall.</li>
        <li><strong>Model Serving & SLAs:</strong> Usa Provisioned Throughput para latencias garantizadas y Foundation Model APIs para variabilidad y prototipado.</li>
        <li><strong>Evaluación con Groundedness:</strong> Mide si la respuesta generada por el LLM está 100% respaldada por los fragmentos recuperados para evitar alucinaciones.</li>
        <li><strong>Gobernanza Unificada:</strong> Todo recurso (datos, modelos, funciones y vectores) debe gobernarse mediante catálogo centralizado y control de acceso RBAC.</li>
      </ul>
    </div>

    <div class="box">
      <div class="box-title">2. Matrices de Decisión ("¿Cuándo usar cuál?")</div>
      ${matrixRows}
    </div>

    <div class="box">
      <div class="box-title">3. Trampas Comunes y Palabras Clave (Pitfalls)</div>
      <ul>
        <li><strong>Fine-Tuning vs RAG:</strong> Nunca uses fine-tuning para enseñar hechos nuevos o datos que cambian frecuentemente; usa RAG. Usa fine-tuning para formato, estilo o dialectos.</li>
        <li><strong>HNSW vs KNN Exhaustivo:</strong> HNSW es aproximado y veloz para millones de vectores; KNN exhaustivo solo para conjuntos diminutos (<1,000) que exijan recall del 100%.</li>
        <li><strong>Redacción de PII:</strong> Aplica redacción antes de almacenar en logs o pasar a modelos públicos de terceros.</li>
      </ul>
    </div>
  </div>
</body>
</html>`;
    },

    buildDocumentHTML({ courseTitle, cid, lang, totalQuestions, domainMap }) {
        const dateStr = new Date().toLocaleDateString(lang === 'es' ? 'es-ES' : 'en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const isEs = lang === 'es';
        let domainIndexHtml = '';
        let domainContentHtml = '';

        let globalIndex = 1;
        let domainNumber = 1;

        domainMap.forEach((qs, domainName) => {
            domainIndexHtml += `
                <li style="margin-bottom:6px;">
                    <strong>${domainName}</strong> &mdash; <span>${qs.length} ${isEs ? 'preguntas' : 'questions'}</span>
                </li>
            `;

            let questionsHtml = '';
            qs.forEach((q) => {
                const options = Array.isArray(q.options) ? q.options : [];
                const correctIdx = typeof q.correct === 'number' ? q.correct : 0;

                const optionsHtml = options.map((opt, oIdx) => {
                    const letter = String.fromCharCode(65 + oIdx);
                    const isCorrect = oIdx === correctIdx;
                    return `
                        <div class="option-row ${isCorrect ? 'correct' : ''}">
                            <span class="option-key">${letter})</span>
                            <span class="option-text">${opt}</span>
                            ${isCorrect ? `<span class="correct-tag">${isEs ? 'CORRECTA' : 'CORRECT'}</span>` : ''}
                        </div>
                    `;
                }).join('');

                const codeSnippet = q.code ? `<pre class="code-block">${this.escapeHtml(q.code)}</pre>` : '';
                const scenarioSnippet = q.scenario ? `<div class="scenario-box"><strong>${isEs ? 'Escenario:' : 'Scenario:'}</strong> ${this.escapeHtml(q.scenario)}</div>` : '';
                const subdomainLabel = q.subdomain ? `<span class="subdomain-tag">${this.escapeHtml(q.subdomain)}</span>` : '';

                questionsHtml += `
                    <div class="question-card">
                        <div class="question-header">
                            <span class="question-badge">${isEs ? 'Pregunta' : 'Question'} #${globalIndex}</span>
                            ${subdomainLabel}
                            <span class="qid-tag">ID: ${q.id}</span>
                        </div>
                        ${scenarioSnippet}
                        ${codeSnippet}
                        <div class="question-prompt">${q.prompt || ''}</div>
                        <div class="options-list">
                            ${optionsHtml}
                        </div>
                        <div class="explanation-box">
                            <strong>${isEs ? 'Explicación Técnica Oficial:' : 'Official Technical Explanation:'}</strong>
                            <div>${q.explanation || ''}</div>
                        </div>
                    </div>
                `;
                globalIndex++;
            });

            domainContentHtml += `
                <section class="domain-block">
                    <div class="domain-header">
                        <h2 class="domain-title">${domainName}</h2>
                        <div class="domain-count">${qs.length} ${isEs ? 'preguntas de práctica oficial' : 'official practice questions'}</div>
                    </div>
                    ${questionsHtml}
                </section>
            `;
            domainNumber++;
        });

        return `<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Guía de Estudio — ${this.escapeHtml(courseTitle)}</title>
  <style>
    @page {
      margin: 14mm 16mm;
      size: A4 portrait;
    }
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #172033;
      background: #ffffff;
      margin: 0;
      padding: 0;
      font-size: 13px;
      line-height: 1.5;
      -webkit-print-color-adjust: exact;
      print-color-adjust: exact;
    }
    .no-print-bar {
      position: sticky;
      top: 0;
      left: 0;
      right: 0;
      background: #111827;
      color: #ffffff;
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      z-index: 9999;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    .print-btn {
      background: #3157d5;
      color: #ffffff;
      border: none;
      padding: 9px 20px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 13px;
      cursor: pointer;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .print-btn:hover { background: #2447b8; }
    .close-btn {
      background: transparent;
      color: #a7b0c0;
      border: 1px solid #374151;
      padding: 8px 14px;
      border-radius: 6px;
      font-size: 13px;
      cursor: pointer;
    }
    .close-btn:hover { color: #fff; border-color: #fff; }
    .document-container {
      max-width: 860px;
      margin: 24px auto 40px;
      padding: 0 20px;
    }
    @media print {
      .no-print-bar { display: none !important; }
      .document-container { margin: 0; padding: 0; max-width: 100%; }
      .domain-block { page-break-before: always; }
      .domain-block:first-of-type { page-break-before: avoid; }
      .question-card { break-inside: avoid; page-break-inside: avoid; }
    }
    .doc-header {
      border-bottom: 3px solid #3157d5;
      padding-bottom: 18px;
      margin-bottom: 24px;
    }
    .doc-eyebrow {
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #3157d5;
      margin-bottom: 4px;
    }
    .doc-title {
      font-size: 24px;
      font-weight: 800;
      color: #111827;
      margin: 0 0 6px 0;
      line-height: 1.25;
    }
    .doc-subtitle {
      font-size: 13px;
      color: #667085;
      margin: 0 0 14px 0;
    }
    .doc-meta-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 8px;
      font-size: 12px;
      background: #f4f6f8;
      padding: 10px 14px;
      border-radius: 6px;
      border: 1px solid #d9dee7;
    }
    .doc-meta-item strong { color: #111827; }
    .toc-card {
      background: #f4f6f8;
      border: 1px solid #d9dee7;
      border-radius: 8px;
      padding: 16px 20px;
      margin-bottom: 28px;
    }
    .toc-title {
      font-size: 14px;
      font-weight: 700;
      margin: 0 0 10px 0;
      color: #111827;
    }
    .toc-list {
      margin: 0;
      padding-left: 20px;
      font-size: 12.5px;
      color: #374151;
    }
    .domain-header {
      background: #f4f6f8;
      border-left: 4px solid #3157d5;
      padding: 12px 16px;
      margin: 28px 0 16px 0;
      border-radius: 0 8px 8px 0;
    }
    .domain-title {
      font-size: 17px;
      font-weight: 800;
      color: #111827;
      margin: 0;
    }
    .domain-count {
      font-size: 12px;
      color: #667085;
      margin-top: 2px;
    }
    .question-card {
      border: 1px solid #d9dee7;
      border-radius: 8px;
      padding: 16px 18px;
      margin-bottom: 18px;
      background: #ffffff;
    }
    .question-header {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 10px;
      flex-wrap: wrap;
    }
    .question-badge {
      font-size: 11px;
      font-weight: 800;
      color: #3157d5;
      background: rgba(49,87,213,0.08);
      padding: 2px 8px;
      border-radius: 4px;
    }
    .subdomain-tag {
      font-size: 11px;
      color: #667085;
      background: #f4f6f8;
      border: 1px solid #d9dee7;
      padding: 2px 8px;
      border-radius: 4px;
    }
    .qid-tag {
      margin-left: auto;
      font-size: 11px;
      font-family: monospace;
      color: #a7b0c0;
    }
    .scenario-box {
      font-size: 12.5px;
      background: rgba(49,87,213,0.04);
      border-left: 3px solid #3157d5;
      padding: 8px 12px;
      border-radius: 0 6px 6px 0;
      margin-bottom: 10px;
      line-height: 1.4;
    }
    .question-prompt {
      font-weight: 700;
      font-size: 13.5px;
      color: #111827;
      margin-bottom: 12px;
      line-height: 1.45;
    }
    .code-block {
      font-family: 'JetBrains Mono', Consolas, monospace;
      font-size: 11.5px;
      background: #172033;
      color: #f4f6f8;
      padding: 10px 12px;
      border-radius: 6px;
      margin-bottom: 12px;
      white-space: pre-wrap;
      overflow-x: auto;
    }
    .options-list {
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 12px;
    }
    .option-row {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      padding: 7px 10px;
      border-radius: 6px;
      border: 1px solid transparent;
      font-size: 12.5px;
    }
    .option-row.correct {
      background: rgba(22, 121, 74, 0.08);
      border-color: rgba(22, 121, 74, 0.35);
      color: #16794a;
      font-weight: 600;
    }
    .option-key {
      font-weight: 800;
      font-family: monospace;
      min-width: 22px;
    }
    .option-text {
      flex: 1;
    }
    .correct-tag {
      margin-left: auto;
      font-size: 10.5px;
      font-weight: 800;
      color: #16794a;
      background: rgba(22, 121, 74, 0.15);
      padding: 2px 7px;
      border-radius: 4px;
      flex-shrink: 0;
    }
    .explanation-box {
      background: #f4f6f8;
      border-left: 3px solid #3157d5;
      padding: 10px 12px;
      border-radius: 0 6px 6px 0;
      font-size: 12px;
      color: #374151;
      line-height: 1.45;
    }
    .explanation-box strong {
      color: #3157d5;
    }
  </style>
</head>
<body>
  <div class="no-print-bar">
    <div style="font-weight:700;font-size:14px;display:flex;align-items:center;gap:8px;">
      <span>The Data Dojo &bull; Guía Oficial de Estudio</span>
      <span style="font-size:12px;opacity:0.7;">(${totalQuestions} preguntas)</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <button type="button" class="print-btn" onclick="window.print()">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>
        <span>Imprimir / Guardar como PDF</span>
      </button>
      <button type="button" class="close-btn" onclick="window.close()">Cerrar</button>
    </div>
  </div>

  <div class="document-container">
    <header class="doc-header">
      <div class="doc-eyebrow">The Data Dojo &bull; Guía Técnica de Certificación</div>
      <h1 class="doc-title">${this.escapeHtml(courseTitle)}</h1>
      <p class="doc-subtitle">Banco estructurado por dominios oficiales con preguntas, opciones, respuestas correctas y explicaciones técnicas completas.</p>
      
      <div class="doc-meta-grid">
        <div class="doc-meta-item"><strong>Candidato:</strong> Norman Reynaldo Sabillon Castro (NorSab)</div>
        <div class="doc-meta-item"><strong>Total Preguntas:</strong> ${totalQuestions}</div>
        <div class="doc-meta-item"><strong>Fecha de Emisión:</strong> ${dateStr}</div>
        <div class="doc-meta-item"><strong>Idioma:</strong> ${isEs ? 'Español (ES)' : 'English (EN)'}</div>
      </div>
    </header>

    <div class="toc-card">
      <h3 class="toc-title">Índice de Dominios Oficiales</h3>
      <ol class="toc-list">
        ${domainIndexHtml}
      </ol>
    </div>

    <main>
      ${domainContentHtml}
    </main>

    <footer style="margin-top:40px;padding-top:16px;border-top:1px solid #d9dee7;text-align:center;color:#667085;font-size:11px;">
      &copy; 2026 The Data Dojo &mdash; Documento de estudio personal para certificaciones técnicas oficiales.
    </footer>
  </div>
</body>
</html>`;
    },

    escapeHtml(str) {
        if (!str) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    renderPrintOverlay(html) {
        const iframe = document.createElement('iframe');
        iframe.style.position = 'fixed';
        iframe.style.top = '0';
        iframe.style.left = '0';
        iframe.style.width = '100vw';
        iframe.style.height = '100vh';
        iframe.style.zIndex = '99999';
        iframe.style.border = 'none';
        iframe.style.background = '#fff';
        document.body.appendChild(iframe);

        const doc = iframe.contentWindow.document;
        doc.open();
        doc.write(html);
        doc.close();
    },

    onTypeChange() {
        const typeSelect = document.getElementById('pdf-guide-type');
        const scopeGroup = document.getElementById('pdf-guide-scope')?.parentElement;
        const domainGroup = document.getElementById('pdf-guide-domain-group');
        if (!typeSelect) return;
        const isCheatSheet = typeSelect.value === 'cheat_sheet';
        if (scopeGroup) scopeGroup.style.display = isCheatSheet ? 'none' : 'block';
        if (domainGroup) domainGroup.style.display = isCheatSheet ? 'none' : (document.getElementById('pdf-guide-scope')?.value === 'single' ? 'block' : 'none');
        this.updateStats();
    }
};

// =============================================================================
// F26: SPOTLIGHT UNIVERSAL SEARCH ENGINE (Ctrl + K)
// =============================================================================
window.SpotlightSearch = {
    activeCategory: 'all',
    selectedIndex: 0,
    currentResults: [],

    init() {
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
                e.preventDefault();
                this.open();
            }
            if (e.key === 'Escape') {
                const modal = document.getElementById('spotlight-search-modal');
                if (modal && !modal.classList.contains('hidden')) {
                    this.close();
                }
            }
        });

        const input = document.getElementById('spotlight-input');
        if (input) {
            input.addEventListener('input', () => this.onInput());
            input.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    this.navigate(1);
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.navigate(-1);
                } else if (e.key === 'Enter') {
                    e.preventDefault();
                    this.selectCurrent();
                }
            });
        }
    },

    open() {
        const modal = document.getElementById('spotlight-search-modal');
        const input = document.getElementById('spotlight-input');
        if (!modal) return;
        modal.classList.remove('hidden');
        if (input) {
            input.value = '';
            input.focus();
        }
        this.selectedIndex = 0;
        this.activeCategory = 'all';
        this.renderDomainFilters();
        this.renderInitialResults();
    },

    close() {
        const modal = document.getElementById('spotlight-search-modal');
        if (modal) modal.classList.add('hidden');
    },

    renderDomainFilters() {
        const cid = window.currentCourseId || 'azure-ai-103';
        const allQuestions = (window.questionsData || []).filter(q => q.courseId === cid);
        const domains = ['all', ...new Set(allQuestions.map(q => q.domain).filter(Boolean))];
        let container = document.getElementById('spotlight-domain-filters-bar');
        if (!container) {
            const catBar = document.querySelector('.spotlight-categories');
            if (catBar) {
                container = document.createElement('div');
                container.id = 'spotlight-domain-filters-bar';
                container.className = 'spotlight-domain-filters';
                catBar.insertAdjacentElement('afterend', container);
            }
        }
        if (container) {
            container.innerHTML = domains.map(d => `
                <button type="button" class="spotlight-domain-pill ${d === (this.activeDomain || 'all') ? 'active' : ''}" onclick="window.SpotlightSearch.setDomain('${d}')">
                    ${d === 'all' ? 'Todos los Dominios' : d}
                </button>
            `).join('');
        }
    },

    setDomain(dom) {
        this.activeDomain = dom;
        document.querySelectorAll('.spotlight-domain-pill').forEach(btn => {
            btn.classList.toggle('active', btn.textContent.trim() === (dom === 'all' ? 'Todos los Dominios' : dom));
        });
        this.onInput();
    },

    setCategory(cat) {
        this.activeCategory = cat;
        document.querySelectorAll('.spotlight-cat-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-cat') === cat);
        });
        this.onInput();
    },

    onInput() {
        const input = document.getElementById('spotlight-input');
        const query = input ? input.value.trim().toLowerCase() : '';
        if (!query) {
            this.renderInitialResults();
            return;
        }
        this.search(query);
    },

    search(query) {
        const results = [];
        const allQuestions = window.questionsData || [];
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';

        // 1. Search Questions
        if (this.activeCategory === 'all' || this.activeCategory === 'questions') {
            allQuestions.filter(q => (q.lang === lang || !q.lang) && (!this.activeDomain || this.activeDomain === 'all' || q.domain === this.activeDomain)).forEach(q => {
                const promptMatch = (q.prompt || '').toLowerCase().includes(query);
                const explMatch = (q.explanation || '').toLowerCase().includes(query);
                const domainMatch = (q.domain || '').toLowerCase().includes(query);
                if (promptMatch || explMatch || domainMatch) {
                    results.push({
                        type: 'question',
                        badge: 'Pregunta',
                        title: q.prompt ? (q.prompt.length > 90 ? q.prompt.slice(0, 90) + '...' : q.prompt) : `Pregunta ${q.id}`,
                        desc: `${q.domain || 'General'} &bull; ${q.courseId || ''}`,
                        action: () => {
                            this.close();
                            if (typeof window.startSingleQuestionPractice === 'function') {
                                window.startSingleQuestionPractice(q);
                            }
                        }
                    });
                }
            });
        }

        // 2. Search Terms / Concepts
        if (this.activeCategory === 'all' || this.activeCategory === 'terms') {
            const azureTerms = window.studyAzureAi103Resources?.terms || [];
            const genAiTerms = window.studyGenAiResources?.terms || [];
            const databricksTerms = window.conceptosDatabricks || [];
            const combinedTerms = [...azureTerms, ...genAiTerms, ...databricksTerms];

            combinedTerms.forEach(cat => {
                (cat.items || cat.conceptos || []).forEach(item => {
                    const term = item.term || item.title || item.concepto || '';
                    const def = item.def || item.definition || item.desc || '';
                    if (term.toLowerCase().includes(query) || def.toLowerCase().includes(query)) {
                        results.push({
                            type: 'term',
                            badge: 'Término',
                            title: term,
                            desc: def.length > 100 ? def.slice(0, 100) + '...' : def,
                            action: () => {
                                this.close();
                                if (typeof window.openStudyCenterTab === 'function') {
                                    window.openStudyCenterTab('conceptos');
                                }
                            }
                        });
                    }
                });
            });
        }

        // 3. Search Study Modules
        if (this.activeCategory === 'all' || this.activeCategory === 'study') {
            const studyData = window.studyData || {};
            Object.keys(studyData).forEach(cid => {
                const modules = studyData[cid] || [];
                modules.forEach(mod => {
                    if ((mod.title || '').toLowerCase().includes(query)) {
                        results.push({
                            type: 'study',
                            badge: 'Estudio',
                            title: mod.title,
                            desc: `Módulo oficial &bull; ${cid}`,
                            action: () => {
                                this.close();
                                if (typeof window.openStudyMode === 'function') {
                                    window.openStudyMode(cid);
                                }
                            }
                        });
                    }
                });
            });
        }

        // Limit results
        this.currentResults = results.slice(0, 25);
        this.selectedIndex = 0;
        this.renderResults();
    },

    renderInitialResults() {
        const container = document.getElementById('spotlight-results');
        if (!container) return;
        container.innerHTML = `
            <div style="padding: 24px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" style="margin-bottom: 8px; opacity: 0.6;"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                <div style="font-weight: 600; color: var(--text-color);">Búsqueda Instantánea en Todo The Data Dojo</div>
                <div style="font-size: 0.8rem; margin-top: 4px;">Escribe palabras clave como "Vector Search", "Document Intelligence", "Direct Lake", etc.</div>
            </div>
        `;
    },

    renderResults() {
        const container = document.getElementById('spotlight-results');
        if (!container) return;

        if (this.currentResults.length === 0) {
            container.innerHTML = `
                <div style="padding: 20px; text-align: center; color: var(--text-muted); font-size: 0.88rem;">
                    No se encontraron resultados para los términos ingresados.
                </div>
            `;
            return;
        }

        container.innerHTML = this.currentResults.map((res, idx) => `
            <div class="spotlight-item ${idx === this.selectedIndex ? 'selected' : ''}" onclick="window.SpotlightSearch.selectIndex(${idx})">
                <span class="spotlight-item-badge">${res.badge}</span>
                <div class="spotlight-item-content">
                    <div class="spotlight-item-title">${this.escapeHtml(res.title)}</div>
                    <div class="spotlight-item-desc">${res.desc}</div>
                </div>
                <span class="spotlight-action-hint">Enter</span>
            </div>
        `).join('');
    },

    navigate(delta) {
        if (this.currentResults.length === 0) return;
        this.selectedIndex = (this.selectedIndex + delta + this.currentResults.length) % this.currentResults.length;
        this.renderResults();
        const selectedEl = document.querySelectorAll('.spotlight-item')[this.selectedIndex];
        if (selectedEl) selectedEl.scrollIntoView({ block: 'nearest' });
    },

    selectIndex(idx) {
        this.selectedIndex = idx;
        this.selectCurrent();
    },

    selectCurrent() {
        const item = this.currentResults[this.selectedIndex];
        if (item && typeof item.action === 'function') {
            item.action();
        }
    },

    escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
};

// =============================================================================
// F27: DAILY QUICK DRILL (Dosis Diaria de 10 Preguntas con SM-2)
// =============================================================================
window.DailyQuickDrill = {
    isCompletedToday() {
        const today = new Date().toISOString().slice(0, 10);
        return localStorage.getItem('dojo_daily_drill_date') === today;
    },

    startDrill() {
        const cid = window.currentCourseId || 'azure-ai-103';
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        const allQuestions = (window.questionsData || []).filter(q => (q.courseId === cid) && (q.lang === lang || !q.lang));
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

        // Collect missed IDs
        const missedSet = new Set();
        history.filter(h => h.courseCheck === cid).forEach(h => {
            (h.missedIds || []).forEach(id => missedSet.add(id));
        });

        const missedPool = allQuestions.filter(q => missedSet.has(q.id));
        const freshPool = allQuestions.filter(q => !missedSet.has(q.id));

        // Shuffle arrays
        const shuffle = arr => [...arr].sort(() => 0.5 - Math.random());
        const selectedMissed = shuffle(missedPool).slice(0, 5);
        const selectedFresh = shuffle(freshPool).slice(0, 10 - selectedMissed.length);

        let drillQuestions = shuffle([...selectedMissed, ...selectedFresh]);
        if (drillQuestions.length === 0) drillQuestions = shuffle(allQuestions).slice(0, 10);

        if (typeof window.startCustomQuizWithQuestions === 'function') {
            window.startCustomQuizWithQuestions(drillQuestions, 'Dosis Diaria (10 Preguntas Críticas)');
        }
    },

    markCompletedToday() {
        const today = new Date().toISOString().slice(0, 10);
        localStorage.setItem('dojo_daily_drill_date', today);
        const badge = document.getElementById('daily-drill-badge');
        const subtitle = document.getElementById('daily-drill-subtitle');
        if (badge) {
            badge.textContent = 'COMPLETADO';
            badge.style.color = 'var(--success-color, #28a745)';
        }
        if (subtitle) {
            subtitle.textContent = '¡Excelente! Dosis de hoy completada (+50 XP).';
        }
    }
};

// =============================================================================
// F28: DIAGNOSTIC BENCHMARK & GAP ANALYSIS ENGINE
// =============================================================================
window.DiagnosticMode = {
    startDiagnostic(courseId) {
        const cid = courseId || window.currentCourseId || 'azure-ai-103';
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        const allQuestions = (window.questionsData || []).filter(q => (q.courseId === cid) && (q.lang === lang || !q.lang));

        if (allQuestions.length === 0) {
            alert('No hay preguntas disponibles para el diagnóstico de este curso.');
            return;
        }

        // Group by domains and sample evenly up to 25 Qs
        const domainMap = new Map();
        allQuestions.forEach(q => {
            const d = q.domain || 'General';
            if (!domainMap.has(d)) domainMap.set(d, []);
            domainMap.get(d).push(q);
        });

        const selected = [];
        const perDomain = Math.max(2, Math.floor(25 / Math.max(1, domainMap.size)));
        domainMap.forEach((qList) => {
            const shuffled = [...qList].sort(() => 0.5 - Math.random());
            selected.push(...shuffled.slice(0, perDomain));
        });

        const finalSample = selected.sort(() => 0.5 - Math.random()).slice(0, 25);
        window.isDiagnosticMode = true;

        if (typeof window.startCustomQuizWithQuestions === 'function') {
            window.startCustomQuizWithQuestions(finalSample, `Test Diagnóstico de Preparación (${cid})`);
        }
    },

    renderGapAnalysis(containerEl, userAnswers, currentQuestions, courseId) {
        if (!containerEl) return;
        const cid = courseId || window.currentCourseId || 'azure-ai-103';

        // Calculate score per domain
        const domainStats = {};
        currentQuestions.forEach((q, idx) => {
            const d = q.domain || 'General';
            if (!domainStats[d]) domainStats[d] = { total: 0, correct: 0 };
            domainStats[d].total += 1;
            const ans = userAnswers[idx];
            if (ans && ans.isCorrect) {
                domainStats[d].correct += 1;
            }
        });

        const domains = Object.keys(domainStats);
        if (domains.length === 0) return;

        // Calculate Pass Probability
        let totalWeighted = 0;
        domains.forEach(d => {
            const s = domainStats[d];
            totalWeighted += (s.correct / s.total);
        });
        const avgScorePct = Math.round((totalWeighted / Math.max(1, domains.length)) * 100);
        let passProbPct = Math.min(98, Math.max(12, Math.round(avgScorePct * 1.04)));
        let verdict = "Listo para el examen oficial";
        let verdictDesc = "Tu rendimiento promedio en todos los dominios supera el umbral de aprobación del 70%.";
        let gaugeColor = "var(--success-color, #28a745)";
        if (avgScorePct < 70) {
            passProbPct = Math.min(65, Math.round(avgScorePct * 0.9));
            verdict = "Brechas Críticas Detectadas";
            verdictDesc = "Se recomienda reforzar los dominios marcados en rojo antes de programar la certificación oficial.";
            gaugeColor = "var(--danger-color, #dc3545)";
        } else if (avgScorePct < 85) {
            verdict = "Aprobación Probable con Refuerzo";
            verdictDesc = "Estás cerca del nivel óptimo. Refuerza los dominios en amarillo para garantizar un margen seguro.";
            gaugeColor = "#d97706";
        }

        const rowsHtml = domains.map(d => {
            const stat = domainStats[d];
            const pct = Math.round((stat.correct / stat.total) * 100);
            let color = 'var(--danger-color, #dc3545)';
            let statusText = 'Brecha Crítica (<70%)';
            if (pct >= 85) {
                color = 'var(--success-color, #28a745)';
                statusText = 'Dominado (Listo)';
            } else if (pct >= 70) {
                color = '#d97706';
                statusText = 'Reforzar (70-84%)';
            }

            return `
                <div class="gap-domain-row">
                    <div class="gap-domain-header">
                        <span>${d}</span>
                        <span style="color:${color}; font-weight:700;">${pct}% (${stat.correct}/${stat.total}) &bull; ${statusText}</span>
                    </div>
                    <div class="gap-domain-bar">
                        <div class="gap-domain-fill" style="width:${pct}%; background:${color};"></div>
                    </div>
                    <div class="gap-domain-actions">
                        <button type="button" class="gap-action-btn" onclick="window.openStudyMode && window.openStudyMode('${cid}')">Repasar en Estudio</button>
                    </div>
                </div>
            `;
        }).join('');

        containerEl.innerHTML = `
            <div class="pass-probability-card">
                <div style="text-align:center; min-width: 90px;">
                    <div class="pass-gauge-score" style="color:${gaugeColor};">${passProbPct}%</div>
                    <span style="font-size:0.75rem; font-weight:700; color:var(--text-muted);">PROBABILIDAD</span>
                </div>
                <div style="border-left:1px solid var(--border-color); padding-left:1rem; flex:1;">
                    <div style="font-size:1.05rem; font-weight:800; color:${gaugeColor};">${verdict}</div>
                    <p style="margin:4px 0 0 0; font-size:0.85rem; color:var(--text-muted);">${verdictDesc}</p>
                </div>
            </div>
            <div class="gap-analysis-card">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <div style="display:flex; align-items:center; gap:8px;">
                        <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="var(--primary-color)" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                        <strong style="font-size:1rem; color:var(--text-color);">Análisis de Brechas por Dominio (Gap Analysis)</strong>
                    </div>
                    <span style="font-size:0.75rem; color:var(--text-muted);">Calibración Oficial</span>
                </div>
                <div style="display:flex; flex-direction:column; gap:8px;">
                    ${rowsHtml}
                </div>
            </div>
        `;
    }
};

// =============================================================================
// F30: PERFORMANCE & PROGRESS REPORT EXPORTER (CSV & JSON)
// =============================================================================
window.exportPerformanceReport = function(format) {
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
    const profile = JSON.parse(localStorage.getItem('userProfile') || '{}');
    const dateStr = new Date().toISOString().slice(0, 10);

    if (format === 'json') {
        const payload = {
            exportDate: new Date().toISOString(),
            candidate: "Norman Reynaldo Sabillon Castro (NorSab)",
            profile,
            examHistory: history,
            masteryData: JSON.parse(localStorage.getItem('courseMastery') || '{}'),
            dojoStreak: JSON.parse(localStorage.getItem('dojo_streak') || '{}')
        };
        const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_dojo_performance_${dateStr}.json`;
        a.click();
        URL.revokeObjectURL(url);
    } else {
        let csv = 'Fecha,Curso,TotalPreguntas,Correctas,Porcentaje,TiempoSegundos,Aprobado,Modo\n';
        history.forEach(h => {
            const date = (h.date || '').replace(/,/g, ' ');
            const course = (h.courseCheck || h.courseTitle || 'general').replace(/,/g, ' ');
            const total = h.totalQuestions || h.total || 0;
            const correct = h.score || h.correctCount || 0;
            const pct = h.percentage || Math.round((correct / Math.max(1, total)) * 100);
            const time = h.timeTaken || 0;
            const passed = pct >= 70 ? 'SI' : 'NO';
            const mode = (h.mode || 'Standard').replace(/,/g, ' ');
            csv += `"${date}","${course}",${total},${correct},${pct}%,${time},${passed},"${mode}"\n`;
        });
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `data_dojo_history_${dateStr}.csv`;
        a.click();
        URL.revokeObjectURL(url);
    }
};

// =============================================================================
// F29: HIGH-YIELD TECHNICAL DECISION MATRICES ("¿CUÁNDO USAR CUÁL?")
// =============================================================================
window.DecisionNavigator = {
    activeCategory: 'all',

    matrices: {
        'azure-ai-103': [
            {
                category: 'Modelos de IA',
                decision: 'Azure OpenAI (GPT-4o / o1) vs Document Intelligence',
                whenToUse: 'Usa <strong>Document Intelligence</strong> para facturas, recibos, IDs y formularios estructurados con coordenadas exactas de tablas. Usa <strong>Azure OpenAI</strong> para razonamiento general, redacción y extracción de texto libre no restringido.'
            },
            {
                category: 'Modelos de IA',
                decision: 'Language Studio vs Azure AI Speech vs Azure AI Vision',
                whenToUse: 'Usa <strong>Language Studio</strong> para CLU, PII y Custom NER. Usa <strong>Azure AI Speech</strong> para transcripción STT con diarización de hablantes y síntesis TTS personalizada. Usa <strong>Azure AI Vision</strong> para OCR de markdown y dense captioning.'
            },
            {
                category: 'Búsqueda & RAG',
                decision: 'HNSW Vector vs Hybrid Search vs Semantic Re-ranker',
                whenToUse: '<strong>Hybrid Search (Vector + BM25)</strong> es la mejor base en Azure AI Search. Añade <strong>Semantic Re-ranker (L2)</strong> para máxima precisión contextual reordenando los 50 mejores resultados con modelos de deep learning de Bing.'
            },
            {
                category: 'Búsqueda & RAG',
                decision: 'text-embedding-3-small vs text-embedding-3-large vs Ada-002',
                whenToUse: 'Usa <strong>text-embedding-3-small (1536d)</strong> para el mejor balance costo/rendimiento. Usa <strong>text-embedding-3-large (3072d)</strong> para dominios jurídicos/médicos complejos. <strong>Ada-002</strong> es legado.'
            },
            {
                category: 'Agentes & Orquestación',
                decision: 'Azure AI Agent Service vs Semantic Kernel vs AutoGen',
                whenToUse: 'Usa <strong>Agent Service</strong> para agentes totalmente gestionados en la nube con Code Interpreter y Bing Search. Usa <strong>Semantic Kernel</strong> para código C#/Python con plugins corporativos. Usa <strong>AutoGen</strong> para conversaciones multi-agente asíncronas complejas.'
            },
            {
                category: 'Seguridad & Gobernanza',
                decision: 'Groundedness Detection vs Prompt Shields vs Protected Material',
                whenToUse: '<strong>Prompt Shields</strong> bloquea ataques de inyección y jailbreaks en tiempo real. <strong>Groundedness Detection</strong> detecta alucinaciones comparando la respuesta del LLM con los documentos fuente. <strong>Protected Material</strong> bloquea generación de texto con derechos de autor.'
            },
            {
                category: 'Cómputo & Despliegue',
                decision: 'Pay-per-token (Serverless) vs Provisioned Throughput Units (PTU)',
                whenToUse: 'Usa <strong>Pay-per-token</strong> para desarrollo, pruebas y tráfico esporádico. Usa <strong>PTU</strong> para cargas de producción con SLAs de latencia garantizados, alto volumen predecible y cumplimiento normativo estricto.'
            },
            {
                category: 'Seguridad & Redes',
                decision: 'System-Assigned vs User-Assigned Managed Identity',
                whenToUse: 'Usa <strong>System-Assigned</strong> cuando la identidad pertenece a un único recurso Azure (ej. un Search Service). Usa <strong>User-Assigned</strong> cuando múltiples servicios comparten el mismo ciclo de vida y permisos de acceso a Azure OpenAI y Key Vault.'
            }
        ],
        'databricks-genai-engineer': [
            {
                category: 'Model Serving',
                decision: 'Pay-per-token vs Provisioned Throughput vs Custom PyFunc',
                whenToUse: 'Usa <strong>Pay-per-token</strong> para prototipado rápido y volumen variable de Foundation Models. Usa <strong>Provisioned Throughput</strong> para SLAs estrictos de latencia y alto QPS. Usa <strong>Custom PyFunc</strong> para pipelines RAG personalizados empaquetados con MLflow.'
            },
            {
                category: 'Vector Search',
                decision: 'Delta Sync (Continuous vs Triggered) vs Direct Access',
                whenToUse: 'Usa <strong>Continuous</strong> para sincronización en segundos con Structured Streaming. Usa <strong>Triggered</strong> para lotes programados de bajo costo. Usa <strong>Direct Access</strong> para inserciones directas vía REST sin tabla Delta fuente.'
            },
            {
                category: 'Adaptación LLM',
                decision: 'Prompt Engineering vs RAG vs LoRA Fine-Tuning vs Pre-training',
                whenToUse: 'Usa <strong>Prompt Engineering</strong> para cambios de formato rápidos. Usa <strong>RAG</strong> para datos dinámicos y gobernanza Unity Catalog. Usa <strong>LoRA Fine-Tuning</strong> para cambiar estilo o aprender sintaxis interna con menor costo de cómputo. Usa <strong>Pre-training</strong> solo para nuevos idiomas o dominios fundacionales masivos.'
            },
            {
                category: 'Almacenamiento & UC',
                decision: 'Unity Catalog Managed Volumes vs External Volumes vs Delta Tables',
                whenToUse: 'Usa <strong>Volumes</strong> para archivos no estructurados (PDFs, audios, imágenes). Usa <strong>Managed Volumes</strong> gobernados por Databricks y <strong>External Volumes</strong> para buckets S3/ADLS existentes. Usa <strong>Delta Tables</strong> para texto estructurado o chunks vectorizados.'
            },
            {
                category: 'Evaluación & MLOps',
                decision: 'MLflow LLM Evaluate vs Databricks AI Quality Lab',
                whenToUse: 'Usa <strong>MLflow Evaluate</strong> para métricas automáticas (exactitud, toxicidad, Flesch-Kincaid). Usa <strong>Quality Lab</strong> para revisión humana con anotadores y benchmarking comparativo LLM-as-a-Judge.'
            }
        ],
        'dp-600': [
            {
                category: 'Almacenamiento & Cómputo',
                decision: 'Lakehouse (Delta) vs Warehouse (T-SQL Relational)',
                whenToUse: 'Usa <strong>Lakehouse</strong> para Spark, Data Engineering y archivos no estructurados/Parquet. Usa <strong>Warehouse</strong> para SQL analítico tradicional con transacciones ACID completas y sintaxis T-SQL estándar.'
            },
            {
                category: 'Modos Power BI',
                decision: 'Direct Lake vs Import vs DirectQuery',
                whenToUse: '<strong>Direct Lake</strong> es el modo óptimo en Fabric: lee directamente Delta Parquet desde OneLake sin duplicar datos ni traducir consultas a SQL. Usa <strong>Import</strong> solo para modelos heredados y <strong>DirectQuery</strong> cuando la fuente no esté en OneLake.'
            },
            {
                category: 'Transformación',
                decision: 'Dataflow Gen2 vs Notebooks Spark',
                whenToUse: 'Usa <strong>Dataflow Gen2</strong> para interfaces visuales Power Query con transformaciones ligeras y analistas de negocio. Usa <strong>Notebooks Spark</strong> para transformaciones masivas a escala de terabytes, machine learning y particionamiento avanzado.'
            },
            {
                category: 'Seguridad',
                decision: 'Row-Level Security (RLS) en Semantic Model vs en Warehouse',
                whenToUse: 'Define <strong>RLS en el Warehouse/Lakehouse</strong> si múltiples herramientas consumen la base de datos. Define <strong>RLS en el Semantic Model</strong> si solo Power BI consume el reporte y se requiere seguridad DAX dinámica (USERPRINCIPALNAME).'
            },
            {
                category: 'Optimización',
                decision: 'V-Order Optimization vs Standard Parquet vs Z-Order',
                whenToUse: '<strong>V-Order</strong> es la ordenación columnar nativa de Fabric que acelera lecturas en Direct Lake. <strong>Z-Order</strong> agrupa datos multidimensionales para saltar archivos durante consultas de filtrado.'
            }
        ],
        'databricks-da': [
            {
                category: 'Gobernanza & UC',
                decision: 'Managed Tables vs External Tables en Unity Catalog',
                whenToUse: 'Usa <strong>Managed Tables</strong> cuando Databricks gestione completamente el ciclo de vida y almacenamiento de los datos en el metastore (al hacer DROP se borran metadatos y datos). Usa <strong>External Tables</strong> cuando los datos deban persistir en un bucket S3 / ADLS Gen2 administrado por un equipo externo (al hacer DROP solo se borran los metadatos de UC).'
            },
            {
                category: 'Cómputo SQL',
                decision: 'Serverless SQL Warehouses vs Pro vs Classic',
                whenToUse: 'Usa <strong>Serverless SQL Warehouses</strong> para arranque instantáneo (&lt;5s), auto-escalado agresivo y menor costo total por TCO sin gestionar VMs en la suscripción del cliente. Usa <strong>Pro SQL Warehouses</strong> cuando se requieran federaciones de consultas o flujos de trabajo avanzados sin soporte serverless en la región.'
            },
            {
                category: 'Transformación SQL',
                decision: 'MERGE INTO vs INSERT OVERWRITE para Ingesta CDC',
                whenToUse: 'Usa <strong>MERGE INTO</strong> para operaciones Upsert (actualizar filas modificadas e insertar nuevas filas según clave primaria) con soporte para eliminación y SCD Tipo 2. Usa <strong>INSERT OVERWRITE</strong> solo cuando se reemplace una partición completa o la tabla entera en una carga batch idempotente.'
            },
            {
                category: 'Delta Lake',
                decision: 'Time Travel: VERSION AS OF vs TIMESTAMP AS OF',
                whenToUse: 'Usa <strong>VERSION AS OF</strong> para auditorías reproducibles y rollbacks a un número de commit exacto del Delta Log. Usa <strong>TIMESTAMP AS OF</strong> para consultar el estado de la tabla en un momento cronológico específico (ej. 2026-08-30).'
            },
            {
                category: 'Seguridad',
                decision: 'Row Filters vs Column Masks en Unity Catalog',
                whenToUse: 'Usa <strong>Row Filters</strong> (funciones SQL UDF) para restringir qué filas puede ver cada usuario/grupo (ej. WHERE region = current_user_region()). Usa <strong>Column Masks</strong> para ofuscar o enmascarar valores sensibles como números de tarjeta o correos (ej. hash o asteriscos).'
            }
        ]
    },

    setFilter(category, btn) {
        this.activeCategory = category;
        document.querySelectorAll('.decision-cat-filter-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        if (typeof window.addXP === 'function') window.addXP(20, 'decisionsExplored');
        const cid = window.currentCourseId || 'azure-ai-103';
        const container = document.getElementById('unir-panel-decisions');
        if (container) this.renderMatrix(container, cid);
    },

    renderMatrix(containerEl, courseId) {
        if (!containerEl) return;
        const cid = courseId || window.currentCourseId || 'azure-ai-103';
        const fullList = this.matrices[cid] || this.matrices['azure-ai-103'];
        const categories = ['all', ...Array.from(new Set(fullList.map(item => item.category)))];

        const filteredList = this.activeCategory === 'all' 
            ? fullList 
            : fullList.filter(item => item.category === this.activeCategory);

        const filterBtnsHtml = categories.map(cat => `
            <button type="button" class="btn btn-sm ${this.activeCategory === cat ? 'btn-primary' : 'btn-outline'} decision-cat-filter-btn" onclick="window.DecisionNavigator.setFilter('${cat}', this)" style="border-radius:99px; padding:3px 12px; font-size:0.78rem;">
                ${cat === 'all' ? 'Todas' : cat}
            </button>
        `).join('');

        const cardsHtml = filteredList.map(item => `
            <div class="decision-card">
                <div class="decision-card-header">
                    <div class="decision-dilemma-title">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle; margin-right:6px;"><path d="M9 18h6M10 22h4M12 2a7 7 0 00-4 12.74V16h8v-1.26A7 7 0 0012 2z"/></svg>
                        ${item.decision}
                    </div>
                    <span class="decision-category-pill">${item.category}</span>
                </div>
                <div class="decision-criteria-box">
                    ${item.whenToUse}
                </div>
            </div>
        `).join('');

        containerEl.innerHTML = `
            <div style="margin-bottom: 12px; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px;">
                <div>
                    <h3 style="margin:0; font-size:1.15rem; color:var(--text-color);">Matrices de Decisión Técnica ("¿Cuándo usar cuál?")</h3>
                    <p style="margin:3px 0 0 0; font-size:0.84rem; color:var(--text-muted);">Criterios de decisión rápida para las preguntas de arquitectura más recurrentes del examen.</p>
                </div>
                <div style="display:flex; gap:6px; flex-wrap:wrap;">${filterBtnsHtml}</div>
            </div>
            <div class="decision-cards-grid">
                ${cardsHtml}
            </div>
        `;
    }
};

// =============================================================================
// F31: INTERACTIVE CLI TERMINAL SIMULATOR (Azure CLI & Databricks CLI)
// =============================================================================
window.CliSimulator = {
    history: [],
    historyIndex: -1,
    currentChallengeIndex: 0,

    challenges: {
        'azure-ai-103': [
            {
                id: 'az-1',
                title: 'Crear Recurso de Azure OpenAI',
                desc: 'Crea un recurso de Azure OpenAI llamado "aoai-norsab-prod" en el grupo de recursos "rg-ai103" en la región "eastus" con SKU "S0".',
                expectedPattern: /az\s+cognitiveservices\s+account\s+create\s+.*--name\s+aoai-norsab-prod.*--resource-group\s+rg-ai103.*--kind\s+OpenAI/i,
                sampleCommand: 'az cognitiveservices account create --name aoai-norsab-prod --resource-group rg-ai103 --kind OpenAI --sku S0 --location eastus --yes',
                hint: 'Usa `az cognitiveservices account create` con `--kind OpenAI`.'
            },
            {
                id: 'az-2',
                title: 'Crear Índice en Azure AI Search',
                desc: 'Crea un índice de búsqueda llamado "products-vector-idx" en el servicio "search-norsab" usando la definición en "schema.json".',
                expectedPattern: /az\s+search\s+index\s+create\s+.*--name\s+products-vector-idx.*--service-name\s+search-norsab/i,
                sampleCommand: 'az search index create --service-name search-norsab --name products-vector-idx --index-def schema.json',
                hint: 'Usa `az search index create --service-name ... --name ...`.'
            },
            {
                id: 'az-3',
                title: 'Desplegar Modelo GPT-4o en Azure OpenAI',
                desc: 'Despliega el modelo "gpt-4o" versión "2024-05-13" con el nombre de despliegue "gpt-4o-prod" en el recurso "aoai-norsab-prod".',
                expectedPattern: /az\s+cognitiveservices\s+account\s+deployment\s+create\s+.*--deployment-name\s+gpt-4o-prod.*--model-name\s+gpt-4o/i,
                sampleCommand: 'az cognitiveservices account deployment create --resource-group rg-ai103 --name aoai-norsab-prod --deployment-name gpt-4o-prod --model-name gpt-4o --model-version "2024-05-13" --model-format OpenAI --sku-capacity 30 --sku-name Standard',
                hint: 'Usa `az cognitiveservices account deployment create` especificando `--deployment-name` y `--model-name`.'
            }
        ],
        'databricks-genai-engineer': [
            {
                id: 'db-1',
                title: 'Crear Índice de Vector Search en Databricks',
                desc: 'Crea un índice Delta Sync de Vector Search llamado "prod_catalog.ai.knowledge_idx" conectado a la tabla "prod_catalog.ai.docs".',
                expectedPattern: /databricks\s+vector-search\s+indexes\s+create\s+.*knowledge_idx/i,
                sampleCommand: 'databricks vector-search indexes create --endpoint-name vs_endpoint --name prod_catalog.ai.knowledge_idx --primary-key id --index-type DELTA_SYNC --delta-sync-index-spec \'{"source_table": "prod_catalog.ai.docs", "pipeline_type": "TRIGGERED"}\'',
                hint: 'Usa `databricks vector-search indexes create` con `--index-type DELTA_SYNC`.'
            },
            {
                id: 'db-2',
                title: 'Crear Endpoint de Model Serving',
                desc: 'Crea un endpoint de serving llamado "dbrx-instruct-endpoint" sirviendo la versión 1 del modelo registrado.',
                expectedPattern: /databricks\s+model-serving\s+endpoints\s+create\s+.*dbrx-instruct-endpoint/i,
                sampleCommand: 'databricks model-serving endpoints create --name dbrx-instruct-endpoint --config-route \'{"served_models": [{"name": "dbrx", "model_name": "prod_catalog.models.dbrx", "model_version": "1", "workload_size": "Small", "scale_to_zero_enabled": true}]}\'',
                hint: 'Usa `databricks model-serving endpoints create --name ...`.'
            }
        ],
        'dp-600': [
            {
                id: 'fab-1',
                title: 'Crear Fabric Lakehouse en Workspace',
                desc: 'Crea un Lakehouse llamado "Sales_Lakehouse" con esquemas habilitados.',
                expectedPattern: /fabric\s+lakehouse\s+create\s+.*Sales_Lakehouse/i,
                sampleCommand: 'fabric lakehouse create --workspace-id ws-sales-prod --name Sales_Lakehouse --enable-schemas true',
                hint: 'Usa `fabric lakehouse create --name Sales_Lakehouse`.'
            }
        ]
    },

    renderTerminal(containerEl, courseId) {
        if (!containerEl) return;
        const cid = courseId || window.currentCourseId || 'azure-ai-103';
        const challengeList = this.challenges[cid] || this.challenges['azure-ai-103'];
        const challenge = challengeList[this.currentChallengeIndex % challengeList.length];
        const isAzure = cid.includes('azure') || cid.includes('dp-600');
        const promptUser = isAzure ? 'norsab@azure-ai:~$ ' : 'norsab@databricks:~$ ';

        containerEl.innerHTML = `
            <div class="cli-challenge-card">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
                    <strong style="color:var(--text-color); font-size:0.95rem;">Desafío CLI ${this.currentChallengeIndex + 1}/${challengeList.length}: ${challenge.title}</strong>
                    <div style="display:flex; gap:6px;">
                        <button type="button" class="btn btn-sm btn-outline" onclick="window.CliSimulator.showHint('${cid}')" style="padding:2px 8px; font-size:0.75rem;">Ver Pista</button>
                        <button type="button" class="btn btn-sm btn-primary" onclick="window.CliSimulator.nextChallenge('${cid}')" style="padding:2px 8px; font-size:0.75rem;">Siguiente Desafío &rarr;</button>
                    </div>
                </div>
                <div style="font-size:0.85rem; color:var(--text-muted); line-height:1.5;">${challenge.desc}</div>
                <div id="cli-hint-box" style="display:none; margin-top:8px; font-size:0.8rem; color:var(--primary-color); background:var(--bg-card); padding:6px 10px; border-radius:4px; border:1px solid var(--border-color);"></div>
            </div>

            <div class="cli-terminal-container">
                <div class="cli-terminal-header">
                    <span>${isAzure ? 'Azure Cloud Shell (Bash)' : 'Databricks CLI v0.200+ (Linux)'}</span>
                    <button type="button" onclick="window.CliSimulator.clearScreen()" style="background:transparent; border:none; color:var(--text-muted); cursor:pointer; font-size:0.75rem;">Limpiar [clear]</button>
                </div>
                <div class="cli-terminal-body" id="cli-terminal-output">
                    <div style="color: #6ee7b7; margin-bottom: 8px;">Conectado a The Data Dojo CLI Sandbox. Escribe comandos oficiales de Azure / Databricks.</div>
                    <div style="color: var(--text-muted); margin-bottom: 12px;">Comandos útiles: <code style="color:#ffffff;">help</code>, <code style="color:#ffffff;">hint</code>, <code style="color:#ffffff;">solution</code>, <code style="color:#ffffff;">clear</code>.</div>
                </div>
                <div class="cli-input-row" style="padding: 0 14px 14px 14px;">
                    <span class="cli-line-prompt">${promptUser}</span>
                    <input type="text" id="cli-terminal-input" class="cli-input-field" placeholder="Escribe un comando y presiona Enter..." autocomplete="off" spellcheck="false">
                </div>
            </div>
        `;

        const input = document.getElementById('cli-terminal-input');
        if (input) {
            input.focus();
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    this.executeCommand(input.value, cid, promptUser);
                    input.value = '';
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    if (this.history.length > 0) {
                        this.historyIndex = Math.min(this.historyIndex + 1, this.history.length - 1);
                        input.value = this.history[this.history.length - 1 - this.historyIndex] || '';
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    if (this.historyIndex > 0) {
                        this.historyIndex--;
                        input.value = this.history[this.history.length - 1 - this.historyIndex] || '';
                    } else {
                        this.historyIndex = -1;
                        input.value = '';
                    }
                } else if (e.key === 'Tab') {
                    e.preventDefault();
                    this.autocomplete(input);
                }
            });
        }
    },

    executeCommand(cmdStr, courseId, promptUser) {
        const raw = cmdStr.trim();
        if (!raw) return;
        this.history.push(raw);
        this.historyIndex = -1;

        const output = document.getElementById('cli-terminal-output');
        if (!output) return;

        const line = document.createElement('div');
        line.innerHTML = `<span class="cli-line-prompt">${promptUser}</span><span style="color:#ffffff;">${this.escapeHtml(raw)}</span>`;
        output.appendChild(line);

        const resp = document.createElement('div');
        resp.style.marginBottom = '8px';

        const challengeList = this.challenges[courseId] || this.challenges['azure-ai-103'];
        const challenge = challengeList[this.currentChallengeIndex % challengeList.length];

        const cmdLower = raw.toLowerCase();

        if (cmdLower === 'clear') {
            output.innerHTML = '';
            return;
        } else if (cmdLower === 'help') {
            resp.innerHTML = `
                <div style="color:var(--text-muted);">Comandos disponibles en Sandbox:</div>
                <div>&bull; <code style="color:#6ee7b7;">az search ...</code> - Comandos de Azure AI Search</div>
                <div>&bull; <code style="color:#6ee7b7;">az cognitiveservices ...</code> - Comandos de Azure OpenAI y Servicios Cognitivos</div>
                <div>&bull; <code style="color:#6ee7b7;">databricks vector-search ...</code> - Comandos de Vector Search</div>
                <div>&bull; <code style="color:#6ee7b7;">databricks model-serving ...</code> - Model Serving</div>
                <div>&bull; <code style="color:#6ee7b7;">hint</code> - Ver pista del desafío actual</div>
                <div>&bull; <code style="color:#6ee7b7;">solution</code> - Ver solución exacta del desafío</div>
            `;
        } else if (cmdLower === 'hint') {
            resp.innerHTML = `<div style="color:var(--warning-color);">Pista: ${challenge.hint}</div>`;
        } else if (cmdLower === 'solution') {
            resp.innerHTML = `<div style="color:var(--primary-color);">Solución: <code style="color:#ffffff;">${challenge.sampleCommand}</code></div>`;
        } else if (challenge.expectedPattern && challenge.expectedPattern.test(raw)) {
            resp.innerHTML = `
                <div class="cli-terminal-success">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle; margin-right:4px;"><polyline points="20 6 9 17 4 12"/></svg>
                    <strong>¡CORRECTO! Desafío superado exitosamente (+25 XP).</strong>
                </div>
                <div style="color:var(--text-muted); font-size:0.8rem; margin-top:2px;">Sintaxis validada contra el esquema oficial.</div>
            `;
            if (typeof window.addXP === 'function') window.addXP(30, 'cliChallengesCompleted');
            else if (typeof addXP === 'function') addXP(30);
        } else if (cmdLower.startsWith('az ') || cmdLower.startsWith('databricks ') || cmdLower.startsWith('fabric ')) {
            resp.innerHTML = `
                <div class="cli-terminal-error">
                    El comando fue ejecutado pero no cumple todos los parámetros requeridos para el desafío actual.
                </div>
                <div style="color:var(--text-muted); font-size:0.8rem;">Escribe <code style="color:#ffffff;">hint</code> o <code style="color:#ffffff;">solution</code> si necesitas ayuda.</div>
            `;
        } else {
            resp.innerHTML = `<div class="cli-terminal-error">Comando no reconocido: "${this.escapeHtml(raw)}". Escribe <code style="color:#ffffff;">help</code> para ver comandos.</div>`;
        }

        output.appendChild(resp);
        output.scrollTop = output.scrollHeight;
    },

    showHint(cid) {
        const box = document.getElementById('cli-hint-box');
        const challengeList = this.challenges[cid] || this.challenges['azure-ai-103'];
        const challenge = challengeList[this.currentChallengeIndex % challengeList.length];
        if (box) {
            box.style.display = box.style.display === 'none' ? 'block' : 'none';
            box.textContent = `Pista: ${challenge.hint} (Solución: ${challenge.sampleCommand})`;
        }
    },

    nextChallenge(cid) {
        const challengeList = this.challenges[cid] || this.challenges['azure-ai-103'];
        this.currentChallengeIndex = (this.currentChallengeIndex + 1) % challengeList.length;
        const container = document.getElementById('unir-panel-cli-terminal');
        if (container) this.renderTerminal(container, cid);
    },

    clearScreen() {
        const output = document.getElementById('cli-terminal-output');
        if (output) output.innerHTML = '';
    },

    autocomplete(input) {
        const val = input.value;
        const candidates = [
            'az search index create',
            'az search skillset create',
            'az cognitiveservices account create',
            'az cognitiveservices account deployment create',
            'databricks vector-search indexes create',
            'databricks model-serving endpoints create',
            'databricks unity-catalog catalogs list',
            'fabric lakehouse create'
        ];
        const match = candidates.find(c => c.startsWith(val.toLowerCase()));
        if (match) input.value = match;
    },

    escapeHtml(str) {
        if (!str) return '';
        return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
};

// =============================================================================
// F32: VOICE ORAL EXAM MODE (Web Speech API Recognition & Semantic Scoring)
// =============================================================================
window.OralExamMode = {
    isRecording: false,
    recognition: null,
    currentTranscript: '',
    currentIndex: 0,

    questions: {
        'azure-ai-103': [
            {
                scenario: 'Explica la arquitectura recomendada para implementar un sistema RAG en Azure con datos estructurados y no estructurados garantizando seguridad y re-clasificación semántica.',
                expectedKeywords: ['azure ai search', 'vector search', 'embeddings', 'semantic ranker', 'document intelligence', 'prompt shield', 'managed identity', 'groundedness'],
                idealExplanation: 'Se ingieren documentos con Azure Document Intelligence, se generan embeddings con Azure OpenAI text-embedding-3, se indexan en Azure AI Search con Hybrid Search + Semantic Re-ranker, y se conectan al modelo GPT-4o usando Managed Identity y Content Safety Prompt Shields.'
            },
            {
                scenario: 'Describe el proceso para construir y desplegar un agente autónomo multi-herramienta con Azure AI Agent Service y Semantic Kernel.',
                expectedKeywords: ['agent service', 'semantic kernel', 'threads', 'runs', 'code interpreter', 'file search', 'function calling'],
                idealExplanation: 'Se instancia el agente con Azure AI Agent Service, se configuran las herramientas de File Search y Code Interpreter, se definen Function Callings y se maneja el estado conversacional mediante Threads y Runs automáticos.'
            }
        ],
        'databricks-genai-engineer': [
            {
                scenario: 'Detalla cómo implementar y evaluar un pipeline de RAG empresarial en Databricks usando Unity Catalog y Mosaic AI.',
                expectedKeywords: ['vector search', 'delta sync', 'mosaic ai', 'mlflow tracing', 'llm judge', 'unity catalog', 'retrieval'],
                idealExplanation: 'Se sincronizan los documentos Delta con Vector Search en modo Triggered/Continuous, se instrumenta el pipeline con MLflow Tracing y se evalúa la fidelidad y relevancia con LLM-as-a-Judge en Mosaic AI Quality Lab.'
            }
        ],
        'dp-600': [
            {
                scenario: 'Explica cuándo utilizar Direct Lake vs Modo Import vs DirectQuery en Microsoft Fabric y sus requisitos técnicos.',
                expectedKeywords: ['direct lake', 'delta lake', 'onelake', 'v-order', 'framing', 'fallback directquery', 'memoria'],
                idealExplanation: 'Direct Lake lee datos Delta en OneLake directamente en memoria sin necesidad de refresco ni duplicación, requiriendo compresión V-Order. Si el modelo supera la memoria de capacidad, hace fallback automático a DirectQuery.'
            }
        ]
    },

    open(courseId) {
        const modal = document.getElementById('oral-exam-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        this.currentIndex = 0;
        this.renderQuestion(courseId || window.currentCourseId || 'azure-ai-103');
    },

    close() {
        this.stopRecording();
        const modal = document.getElementById('oral-exam-modal');
        if (modal) modal.classList.add('hidden');
    },

    renderQuestion(cid) {
        const qList = this.questions[cid] || this.questions['azure-ai-103'];
        const q = qList[this.currentIndex % qList.length];
        const scenarioEl = document.getElementById('oral-scenario-text');
        const kwContainer = document.getElementById('oral-keywords-container');
        const transcriptEl = document.getElementById('oral-transcript-text');
        const scoreBanner = document.getElementById('oral-score-banner');

        if (scenarioEl) scenarioEl.textContent = q.scenario;
        if (transcriptEl) transcriptEl.textContent = 'Presiona el micrófono y responde por voz explicando tu solución técnica...';
        if (scoreBanner) scoreBanner.style.display = 'none';

        if (kwContainer) {
            kwContainer.innerHTML = q.expectedKeywords.map(kw => `
                <span class="oral-keyword-pill" data-kw="${kw}">${kw}</span>
            `).join('');
        }

        // Read scenario aloud automatically
        if (typeof window.speakText === 'function') {
            window.speakText(q.scenario, window.AppI18n ? window.AppI18n.getLanguage() : 'es');
        }
    },

    toggleRecording() {
        if (this.isRecording) {
            this.stopRecording();
        } else {
            this.startRecording();
        }
    },

    startRecording() {
        const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (!SpeechRec) {
            alert('El reconocimiento de voz no está soportado en este navegador. Usa Google Chrome o Microsoft Edge.');
            return;
        }

        this.recognition = new SpeechRec();
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        this.recognition.lang = lang === 'es' ? 'es-ES' : 'en-US';
        this.recognition.continuous = true;
        this.recognition.interimResults = true;

        this.isRecording = true;
        this.currentTranscript = '';

        const micBtn = document.getElementById('oral-mic-btn');
        if (micBtn) micBtn.classList.add('recording');

        const transcriptEl = document.getElementById('oral-transcript-text');
        if (transcriptEl) transcriptEl.textContent = 'Escuchando tu respuesta...';

        this.recognition.onresult = (event) => {
            let interim = '';
            let final = '';
            for (let i = 0; i < event.results.length; i++) {
                if (event.results[i].isFinal) {
                    final += event.results[i][0].transcript + ' ';
                } else {
                    interim += event.results[i][0].transcript;
                }
            }
            this.currentTranscript = final + interim;
            if (transcriptEl) transcriptEl.textContent = this.currentTranscript;
            this.evaluateSpeech(this.currentTranscript);
        };

        this.recognition.onerror = (err) => {
            console.warn('Speech recognition error:', err);
            this.stopRecording();
        };

        this.recognition.start();
    },

    stopRecording() {
        this.isRecording = false;
        const micBtn = document.getElementById('oral-mic-btn');
        if (micBtn) micBtn.classList.remove('recording');
        if (this.recognition) {
            try { this.recognition.stop(); } catch(e) {}
            this.recognition = null;
        }
        if (this.currentTranscript) {
            this.evaluateSpeech(this.currentTranscript, true);
        }
    },

    evaluateSpeech(text, isFinal = false) {
        const cid = window.currentCourseId || 'azure-ai-103';
        const qList = this.questions[cid] || this.questions['azure-ai-103'];
        const q = qList[this.currentIndex % qList.length];
        const lower = text.toLowerCase();

        let foundCount = 0;
        q.expectedKeywords.forEach(kw => {
            const pill = document.querySelector(`.oral-keyword-pill[data-kw="${kw}"]`);
            if (lower.includes(kw.toLowerCase())) {
                foundCount++;
                if (pill) pill.classList.add('found');
            } else {
                if (pill) pill.classList.remove('found');
            }
        });

        const coveragePct = Math.round((foundCount / Math.max(1, q.expectedKeywords.length)) * 100);

        if (isFinal) {
            const banner = document.getElementById('oral-score-banner');
            if (banner) {
                banner.style.display = 'block';
                let color = 'var(--danger-color)';
                let msg = 'Respuesta Incompleta: Faltaron conceptos clave.';
                if (coveragePct >= 75) {
                    color = 'var(--success-color)';
                    msg = '¡Excelente Dominio Oral! Cubriste los conceptos arquitectónicos esenciales.';
                    if (typeof window.addXP === 'function') window.addXP(40, 'oralExamsCompleted');
                    else if (typeof addXP === 'function') addXP(40);
                } else if (coveragePct >= 50) {
                    color = 'var(--warning-color)';
                    msg = 'Respuesta Parcial: Buen enfoque, pero se omitieron términos clave.';
                    if (typeof window.addXP === 'function') window.addXP(20, 'oralExamsCompleted');
                    else if (typeof addXP === 'function') addXP(20);
                }
                banner.innerHTML = `
                    <div style="font-size:1.1rem; font-weight:800; color:${color}; margin-bottom:4px;">${coveragePct}% Cobertura Conceptual &bull; ${msg}</div>
                    <div style="font-size:0.85rem; color:var(--text-muted); margin-top:6px;"><strong>Solución Ideal:</strong> ${q.idealExplanation}</div>
                `;
            }
        }
    },

    nextQuestion() {
        this.stopRecording();
        const cid = window.currentCourseId || 'azure-ai-103';
        const qList = this.questions[cid] || this.questions['azure-ai-103'];
        this.currentIndex = (this.currentIndex + 1) % qList.length;
        this.renderQuestion(cid);
    }
};

// =============================================================================
// F33: INTERACTIVE ARCHITECTURE CANVAS ("CONECTA LOS SERVICIOS")
// =============================================================================
window.ArchitectureCanvas = {
    selectedChip: null,
    currentCaseIndex: 0,
    shuffledServices: [],

    cases: {
        'azure-ai-103': [
            {
                id: 'arch-az-1',
                title: 'Arquitectura RAG Segura con Búsqueda Híbrida',
                desc: 'Organiza y conecta el flujo de datos para un asistente RAG empresarial con ingesta multimodal, búsqueda híbrida y seguridad de contenido.',
                services: [
                    { id: 's1', name: 'Azure Blob Storage', desc: 'Almacén de PDFs y documentos fuente' },
                    { id: 's2', name: 'Document Intelligence', desc: 'Extracción de tablas, texto y jerarquía' },
                    { id: 's3', name: 'Azure OpenAI Embeddings', desc: 'Vectorización (text-embedding-3)' },
                    { id: 's4', name: 'Azure AI Search Hybrid Index', desc: 'Índice con HNSW + Semantic Re-ranker' },
                    { id: 's5', name: 'Azure AI Content Safety', desc: 'Prompt Shields y detección de jailbreaks' },
                    { id: 's6', name: 'Azure OpenAI GPT-4o', desc: 'Generación final fundamentada (Grounded)' }
                ],
                correctSequence: ['s1', 's2', 's3', 's4', 's5', 's6'],
                explanation: 'Flujo oficial: 1. Ingesta en Blob -> 2. Extracción con Document Intelligence -> 3. Embeddings -> 4. Indexación Híbrida en AI Search -> 5. Filtrado con Content Safety Prompt Shield -> 6. Inferencia final fundamentada en GPT-4o.'
            },
            {
                id: 'arch-az-2',
                title: 'Agente Autónomo con Function Calling & Bing Grounding',
                desc: 'Diseña el ciclo de ejecución de un agente de IA que invoca herramientas externas y sintetiza respuestas con datos en vivo.',
                services: [
                    { id: 'ag1', name: 'User Prompt Input', desc: 'Consulta en lenguaje natural del usuario' },
                    { id: 'ag2', name: 'Azure AI Agent Service', desc: 'Orquestación de estado, hilos e historial' },
                    { id: 'ag3', name: 'Function Calling Tool', desc: 'Invocación de API de base de datos interna' },
                    { id: 'ag4', name: 'Bing Search Grounding', desc: 'Búsqueda web en vivo de hechos recientes' },
                    { id: 'ag5', name: 'Azure OpenAI Synthesis', desc: 'Consolidación de contexto y respuesta final' }
                ],
                correctSequence: ['ag1', 'ag2', 'ag3', 'ag4', 'ag5'],
                explanation: 'Flujo oficial de Agentes: 1. Prompt del usuario -> 2. Agent Service planifica -> 3. Invocación de Function Calling -> 4. Enriquecimiento con Bing Grounding -> 5. Síntesis fundamentada en Azure OpenAI.'
            },
            {
                id: 'arch-az-3',
                title: 'Pipeline Multimodal de Voz & NLP Clínico',
                desc: 'Organiza la ingesta de audio, transcripción médica con diarización y extracción de entidades protegidas (PII/PHI).',
                services: [
                    { id: 'v1', name: 'Audio Stream / Micro', desc: 'Captura de audio de consulta médica' },
                    { id: 'v2', name: 'Azure AI Speech (STT)', desc: 'Transcripción con diarización de doctor y paciente' },
                    { id: 'v3', name: 'Language Studio Custom NER', desc: 'Detección de síntomas, fármacos y dosis' },
                    { id: 'v4', name: 'PII/PHI Masking Filter', desc: 'Anonimización de datos personales sensibles' },
                    { id: 'v5', name: 'Azure OpenAI Clinical Summary', desc: 'Generación del informe médico estructurado' }
                ],
                correctSequence: ['v1', 'v2', 'v3', 'v4', 'v5'],
                explanation: 'Flujo oficial de Voz/Salud: 1. Captura de audio -> 2. Speech STT + Diarización -> 3. Language Studio NER -> 4. Anonimización PII/PHI -> 5. Resumen clínico final en Azure OpenAI.'
            },
            {
                id: 'arch-az-4',
                title: 'Evaluación y Red Teaming de Modelos en Foundry',
                desc: 'Conecta el pipeline de benchmarking de calidad y pruebas de seguridad adversaria antes de pasar a producción.',
                services: [
                    { id: 'ev1', name: 'Test Golden Dataset', desc: 'Conjunto de datos de preguntas y verdad base' },
                    { id: 'ev2', name: 'Azure AI Foundry Evaluator', desc: 'Cálculo de métricas de Groundedness y Relevancia' },
                    { id: 'ev3', name: 'Automated Red Teaming', desc: 'Inyección de prompts adversarios y jailbreaks' },
                    { id: 'ev4', name: 'Azure Monitor / App Insights', desc: 'Dashboard de observabilidad y alertas de drift' }
                ],
                correctSequence: ['ev1', 'ev2', 'ev3', 'ev4'],
                explanation: 'Flujo oficial de Evaluación: 1. Golden Dataset -> 2. Foundry Evaluator -> 3. Red Teaming adversario -> 4. Monitoreo continuo en Azure Monitor y Application Insights.'
            }
        ],
        'databricks-genai-engineer': [
            {
                id: 'arch-db-1',
                title: 'Pipeline RAG en Databricks Lakehouse',
                desc: 'Diseña el flujo integral de RAG en Unity Catalog con sincronización continua y observabilidad.',
                services: [
                    { id: 'd1', name: 'Delta Lake Table (UC)', desc: 'Tabla fuente gobernada en Unity Catalog' },
                    { id: 'd2', name: 'Vector Search Delta Sync', desc: 'Sincronización automática de embeddings' },
                    { id: 'd3', name: 'Model Serving Endpoint', desc: 'Inferencia de Foundation Models' },
                    { id: 'd4', name: 'MLflow Tracing / Quality Lab', desc: 'Evaluación con LLM-as-a-Judge' }
                ],
                correctSequence: ['d1', 'd2', 'd3', 'd4'],
                explanation: 'Flujo oficial: 1. Tabla Delta en UC -> 2. Índice Vector Search Delta Sync -> 3. Endpoint de Model Serving -> 4. Evaluación y trazabilidad con MLflow Tracing y Quality Lab.'
            },
            {
                id: 'arch-db-2',
                title: 'Fine-Tuning con LoRA e Inferencia Segura',
                desc: 'Conecta el flujo de adaptación de modelos de código abierto con pesos LoRA y gobernanza en Unity Catalog.',
                services: [
                    { id: 'lora1', name: 'Training Delta Dataset', desc: 'Pares de instrucción-respuesta gobernados en UC' },
                    { id: 'lora2', name: 'Databricks ML Training Run', desc: 'Entrenamiento distribuido con GPU y LoRA PEFT' },
                    { id: 'lora3', name: 'Unity Catalog Model Registry', desc: 'Registro de modelo con firma y linaje' },
                    { id: 'lora4', name: 'Provisioned Throughput Serving', desc: 'Despliegue con throughput garantizado' },
                    { id: 'lora5', name: 'Databricks AI Guardrails', desc: 'Filtrado de toxicidad y alucinaciones en runtime' }
                ],
                correctSequence: ['lora1', 'lora2', 'lora3', 'lora4', 'lora5'],
                explanation: 'Flujo oficial LoRA: 1. Dataset en Delta -> 2. ML Training con LoRA -> 3. Registro en UC -> 4. Despliegue en Provisioned Serving -> 5. Filtrado en tiempo real con AI Guardrails.'
            },
            {
                id: 'arch-db-3',
                title: 'Evaluación con LLM-as-a-Judge y Mosaic AI',
                desc: 'Flujo de evaluación continua de pipelines RAG comparando respuestas de agentes con evaluadores LLM.',
                services: [
                    { id: 'eval1', name: 'Evaluation Ground Truth Table', desc: 'Tabla Delta con preguntas y respuestas de referencia' },
                    { id: 'eval2', name: 'Databricks Agent Invocation', desc: 'Ejecución del pipeline RAG sobre el dataset' },
                    { id: 'eval3', name: 'LLM Judge Evaluation Metric', desc: 'Juez automatizado evaluando exactitud y contexto' },
                    { id: 'eval4', name: 'Mosaic AI Quality Dashboard', desc: 'Visualización de benchmarks y comparación de versiones' }
                ],
                correctSequence: ['eval1', 'eval2', 'eval3', 'eval4'],
                explanation: 'Flujo oficial Mosaic AI: 1. Tabla de verdad base -> 2. Invocación de agentes -> 3. Evaluación con LLM Judge -> 4. Dashboard comparativo en Mosaic AI Quality Lab.'
            }
        ],
        'dp-600': [
            {
                id: 'arch-fab-1',
                title: 'Arquitectura Medallion Direct Lake en Microsoft Fabric',
                desc: 'Conecta el flujo de datos desde el OneLake hasta el reporte analítico sin duplicación de memoria.',
                services: [
                    { id: 'f1', name: 'OneLake Ingestion', desc: 'Carga de datos brutos' },
                    { id: 'f2', name: 'Delta Bronze Lakehouse', desc: 'Almacenamiento crudo en formato Parquet' },
                    { id: 'f3', name: 'Delta Silver (Cleaned)', desc: 'Limpieza y transformación con Spark/Dataflow' },
                    { id: 'f4', name: 'Delta Gold Semantic Model', desc: 'Modelo dimensional en estrella optimizado con V-Order' },
                    { id: 'f5', name: 'Power BI Direct Lake', desc: 'Consumo analítico en memoria sin refrescos' }
                ],
                correctSequence: ['f1', 'f2', 'f3', 'f4', 'f5'],
                explanation: 'Flujo oficial Fabric: OneLake -> Bronze -> Silver -> Gold Semantic Model (V-Order) -> Direct Lake Power BI.'
            },
            {
                id: 'arch-fab-2',
                title: 'Pipeline de Machine Learning y Scoring Batch',
                desc: 'Entrenamiento y ejecución de predicciones por lotes en Fabric con registro de modelos y alertas automáticas.',
                services: [
                    { id: 'ml1', name: 'Silver Delta Lakehouse', desc: 'Datos históricos limpios y agregados' },
                    { id: 'ml2', name: 'Fabric Notebook Spark ML', desc: 'Ingeniería de características y entrenamiento' },
                    { id: 'ml3', name: 'MLflow Model Tracking', desc: 'Registro de experimentos y mejor modelo' },
                    { id: 'ml4', name: 'Gold Predictions Table', desc: 'Escritura de scoring por lotes con V-Order' },
                    { id: 'ml5', name: 'Data Activator Trigger', desc: 'Detección de anomalías y disparo de alertas en Teams' }
                ],
                correctSequence: ['ml1', 'ml2', 'ml3', 'ml4', 'ml5'],
                explanation: 'Flujo oficial Fabric ML: 1. Silver Lakehouse -> 2. Notebook Spark ML -> 3. Tracking en MLflow -> 4. Guardado en Gold Predictions -> 5. Alerta en Data Activator.'
            },
            {
                id: 'arch-fab-3',
                title: 'Flujo de Streaming en Tiempo Real (Eventstream & KQL)',
                desc: 'Ingesta de eventos IoT o telemetría en tiempo real hacia una base de datos KQL con dashboards en vivo.',
                services: [
                    { id: 'rt1', name: 'Eventstream Real-Time Ingest', desc: 'Captura de flujo continuo de eventos' },
                    { id: 'rt2', name: 'Eventstream Stream Transformation', desc: 'Filtrado y particionamiento en memoria' },
                    { id: 'rt3', name: 'KQL Database (Real-Time Analytics)', desc: 'Almacenamiento e indexación para consultas Kusto' },
                    { id: 'rt4', name: 'Real-Time Dashboard / Power BI', desc: 'Visualización interactiva con actualización automática' }
                ],
                correctSequence: ['rt1', 'rt2', 'rt3', 'rt4'],
                explanation: 'Flujo oficial Real-Time: 1. Eventstream Ingest -> 2. Stream Transformation -> 3. KQL Database -> 4. Real-Time Dashboard en Power BI.'
            }
        ]
    },

    shuffleServices(services) {
        const arr = [...services];
        // Fisher-Yates shuffle with guarantee it doesn't match original order
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    },

    render(containerEl, courseId) {
        if (!containerEl) return;
        const cid = courseId || window.currentCourseId || 'azure-ai-103';
        const caseList = this.cases[cid] || this.cases['azure-ai-103'];
        const totalCases = caseList.length;
        const activeCase = caseList[this.currentCaseIndex % totalCases];

        // Shuffle services palette
        this.shuffledServices = this.shuffleServices(activeCase.services);
        this.selectedChip = null;

        const chipsHtml = this.shuffledServices.map(s => `
            <div class="arch-service-chip" id="chip-${s.id}" data-id="${s.id}" draggable="true" ondragstart="window.ArchitectureCanvas.onDragStart(event, '${s.id}')" onclick="window.ArchitectureCanvas.selectChip('${s.id}')">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M3 9h18"/></svg>
                <span>${s.name}</span>
            </div>
        `).join('');

        const slotsHtml = activeCase.services.map((_, idx) => `
            <div class="arch-slot" id="arch-slot-${idx}" data-idx="${idx}" ondragover="window.ArchitectureCanvas.onDragOver(event)" ondragleave="window.ArchitectureCanvas.onDragLeave(event)" ondrop="window.ArchitectureCanvas.onDrop(event, ${idx})" onclick="window.ArchitectureCanvas.placeInSlot(${idx})">
                <span style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Paso ${idx + 1}</span>
                <span class="slot-service-name" style="font-size:0.82rem; font-weight:700; color:var(--text-color); margin-top:4px;">(Arrastra o haz clic)</span>
            </div>
            ${idx < activeCase.services.length - 1 ? '<svg class="arch-arrow" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>' : ''}
        `).join('');

        containerEl.innerHTML = `
            <div class="arch-canvas-container">
                <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
                    <div>
                        <div style="display:flex; align-items:center; gap:8px;">
                            <span style="font-size:0.75rem; font-weight:800; padding:2px 8px; border-radius:99px; background:var(--primary-light, rgba(49, 87, 213, 0.1)); color:var(--primary-color);">Desafío ${(this.currentCaseIndex % totalCases) + 1} de ${totalCases}</span>
                            <h3 style="margin:0; font-size:1.15rem; color:var(--text-color);">${activeCase.title}</h3>
                        </div>
                        <p style="margin:4px 0 0 0; font-size:0.84rem; color:var(--text-muted);">${activeCase.desc}</p>
                    </div>
                    <div style="display:flex; gap:6px;">
                        <button type="button" class="btn btn-sm btn-outline" onclick="window.ArchitectureCanvas.prevCase('${cid}')" title="Desafío Anterior">&larr; Anterior</button>
                        <button type="button" class="btn btn-sm btn-outline" onclick="window.ArchitectureCanvas.nextCase('${cid}')" title="Siguiente Desafío">Siguiente &rarr;</button>
                        <button type="button" class="btn btn-sm btn-outline" onclick="window.ArchitectureCanvas.reset('${cid}')">Reiniciar</button>
                    </div>
                </div>

                <div style="font-size:0.78rem; font-weight:700; color:var(--primary-color); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.5px;">1. Componentes Disponibles (Desordenados &bull; Arrastra o selecciona):</div>
                <div class="arch-service-palette">${chipsHtml}</div>

                <div style="font-size:0.78rem; font-weight:700; color:var(--primary-color); margin-bottom:6px; text-transform:uppercase; letter-spacing:0.5px;">2. Conecta la Secuencia Arquitectónica Oficial:</div>
                <div class="arch-flow-diagram">${slotsHtml}</div>

                <div id="arch-feedback-box" style="display:none; margin-top:1rem; padding:12px 14px; border-radius:var(--radius-md); border:1px solid var(--border-color); background:var(--bg-surface);"></div>

                <div style="display:flex; justify-content:space-between; align-items:center; margin-top:1rem;">
                    <button type="button" class="btn btn-sm btn-outline" onclick="window.ArchitectureCanvas.nextCase('${cid}')">Cambiar de Desafío &rarr;</button>
                    <button type="button" class="btn btn-primary" onclick="window.ArchitectureCanvas.validate('${cid}')">Validar Arquitectura</button>
                </div>
            </div>
        `;
    },

    nextCase(cid) {
        const caseList = this.cases[cid] || this.cases['azure-ai-103'];
        this.currentCaseIndex = (this.currentCaseIndex + 1) % caseList.length;
        const container = document.getElementById('unir-panel-architecture');
        if (container) this.render(container, cid);
    },

    prevCase(cid) {
        const caseList = this.cases[cid] || this.cases['azure-ai-103'];
        this.currentCaseIndex = (this.currentCaseIndex - 1 + caseList.length) % caseList.length;
        const container = document.getElementById('unir-panel-architecture');
        if (container) this.render(container, cid);
    },

    onDragStart(e, id) {
        this.selectedChip = id;
        if (e.dataTransfer) {
            e.dataTransfer.setData('text/plain', id);
        }
        document.querySelectorAll('.arch-service-chip').forEach(c => {
            c.classList.toggle('selected', c.getAttribute('data-id') === id);
        });
    },

    onDragOver(e) {
        e.preventDefault();
        if (e.currentTarget) e.currentTarget.classList.add('drag-over');
    },

    onDragLeave(e) {
        if (e.currentTarget) e.currentTarget.classList.remove('drag-over');
    },

    onDrop(e, slotIdx) {
        e.preventDefault();
        if (e.currentTarget) e.currentTarget.classList.remove('drag-over');
        const srvId = (e.dataTransfer ? e.dataTransfer.getData('text/plain') : null) || this.selectedChip;
        if (srvId) {
            this.placeInSlot(slotIdx, srvId);
        }
    },

    selectChip(id) {
        this.selectedChip = id;
        document.querySelectorAll('.arch-service-chip').forEach(c => {
            c.classList.toggle('selected', c.getAttribute('data-id') === id);
        });
    },

    placeInSlot(idx, overrideId) {
        const chipId = overrideId || this.selectedChip;
        if (!chipId) {
            alert('Primero selecciona un servicio de la paleta arriba o arrástralo hacia el slot.');
            return;
        }
        const cid = window.currentCourseId || 'azure-ai-103';
        const caseList = this.cases[cid] || this.cases['azure-ai-103'];
        const activeCase = caseList[this.currentCaseIndex % caseList.length];
        const srv = activeCase.services.find(s => s.id === chipId);
        if (!srv) return;

        const slot = document.getElementById(`arch-slot-${idx}`);
        if (slot) {
            slot.dataset.assigned = chipId;
            slot.classList.add('filled');
            const nameEl = slot.querySelector('.slot-service-name');
            if (nameEl) nameEl.textContent = srv.name;
        }
    },

    validate(cid) {
        const caseList = this.cases[cid] || this.cases['azure-ai-103'];
        const activeCase = caseList[this.currentCaseIndex % caseList.length];
        let allCorrect = true;

        activeCase.correctSequence.forEach((correctId, idx) => {
            const slot = document.getElementById(`arch-slot-${idx}`);
            if (slot) {
                const assigned = slot.dataset.assigned;
                if (assigned === correctId) {
                    slot.className = 'arch-slot filled correct';
                } else {
                    slot.className = 'arch-slot filled incorrect';
                    allCorrect = false;
                }
            }
        });

        const fb = document.getElementById('arch-feedback-box');
        if (fb) {
            fb.style.display = 'block';
            if (allCorrect) {
                fb.innerHTML = `
                    <div style="font-weight:800; color:var(--success-color); font-size:1rem; margin-bottom:4px;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" style="vertical-align:middle; margin-right:4px;"><polyline points="20 6 9 17 4 12"/></svg>
                        ¡Arquitectura Validada Correctamente! (+40 XP)
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-muted);">${activeCase.explanation}</div>
                `;
                if (typeof window.addXP === 'function') window.addXP(40, 'architecturesValidated');
                else if (typeof addXP === 'function') addXP(40);
            } else {
                fb.innerHTML = `
                    <div style="font-weight:800; color:var(--danger-color); font-size:1rem; margin-bottom:4px;">
                        Secuencia o Conexiones Incorrectas
                    </div>
                    <div style="font-size:0.85rem; color:var(--text-muted);">Revisa los pasos marcados en rojo y consulta el flujo oficial.</div>
                `;
            }
        }
    },

    reset(cid) {
        const container = document.getElementById('unir-panel-architecture');
        if (container) this.render(container, cid);
    }
};

// =============================================================================
// F34: SURVIVAL TIME-ATTACK MODE (3 Lives, Dynamic Clock & Combos)
// =============================================================================
window.SurvivalMode = {
    lives: 3,
    timeLeft: 30,
    timerInterval: null,
    score: 0,
    combo: 1,
    currentQuestion: null,
    missedQuestions: [],

    start() {
        const modal = document.getElementById('survival-mode-modal');
        if (!modal) return;
        modal.classList.remove('hidden');
        this.lives = 3;
        this.timeLeft = 30;
        this.score = 0;
        this.combo = 1;
        this.missedQuestions = [];
        this.updateHearts();
        this.nextQuestion();
        this.startTimer();
    },

    close() {
        clearInterval(this.timerInterval);
        const modal = document.getElementById('survival-mode-modal');
        if (modal) modal.classList.add('hidden');
    },

    startTimer() {
        clearInterval(this.timerInterval);
        const timerEl = document.getElementById('survival-timer-badge');
        this.timerInterval = setInterval(() => {
            this.timeLeft--;
            if (timerEl) timerEl.textContent = `${this.timeLeft}s`;
            if (this.timeLeft <= 0) {
                this.loseLife('timeout');
            }
        }, 1000);
    },

    updateHearts() {
        const hearts = document.querySelectorAll('.survival-heart');
        hearts.forEach((h, idx) => {
            h.classList.toggle('lost', idx >= this.lives);
        });
    },

    nextQuestion() {
        const cid = window.currentCourseId || 'azure-ai-103';
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        const allQuestions = (window.questionsData || []).filter(q => (q.courseId === cid) && (q.lang === lang || !q.lang) && q.options && q.options.length >= 2);

        if (allQuestions.length === 0) return;
        this.currentQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];

        const promptEl = document.getElementById('survival-question-prompt');
        const optsContainer = document.getElementById('survival-options-container');

        if (promptEl) promptEl.textContent = this.currentQuestion.prompt;
        if (optsContainer) {
            optsContainer.innerHTML = this.currentQuestion.options.map((opt, idx) => `
                <div class="option-item" onclick="window.SurvivalMode.selectAnswer('${opt.id}', this)">
                    <span class="option-key-badge">${['A','B','C','D'][idx] || idx+1}</span>
                    <div class="option-content-wrapper">${opt.text}</div>
                </div>
            `).join('');
        }
    },

    selectAnswer(optId, el) {
        if (!this.currentQuestion) return;
        const isCorrect = this.currentQuestion.correctIds.includes(optId);

        if (isCorrect) {
            el.classList.add('correct');
            this.score += 10 * this.combo;
            this.combo = Math.min(4, this.combo + 0.5);
            this.timeLeft = Math.min(60, this.timeLeft + 10);
            const scoreEl = document.getElementById('survival-score-val');
            const comboEl = document.getElementById('survival-combo-badge');
            if (scoreEl) scoreEl.textContent = this.score;
            if (comboEl) comboEl.textContent = `${this.combo}x Combo`;
            setTimeout(() => this.nextQuestion(), 500);
        } else {
            el.classList.add('incorrect');
            this.missedQuestions.push(this.currentQuestion);
            this.combo = 1;
            this.loseLife('wrong');
        }
    },

    loseLife(reason) {
        this.lives--;
        this.updateHearts();
        if (this.lives <= 0) {
            this.gameOver();
        } else {
            if (reason === 'timeout') {
                this.timeLeft = 25;
            }
            setTimeout(() => this.nextQuestion(), 600);
        }
    },

    gameOver() {
        clearInterval(this.timerInterval);
        const container = document.getElementById('survival-game-body');
        if (!container) return;
        const xpGained = Math.max(10, Math.round(this.score * 0.5));
        if (typeof window.addXP === 'function') {
            window.addXP(xpGained);
            const s = window.getGamificationStats ? window.getGamificationStats() : {};
            if ((this.score || 0) > (s.survivalHighScore || 0)) {
                s.survivalHighScore = this.score;
                if (window.saveGamificationStats) window.saveGamificationStats(s);
            }
        } else if (typeof addXP === 'function') {
            addXP(xpGained);
        }

        container.innerHTML = `
            <div style="text-align:center; padding:1.5rem;">
                <div style="font-size:2.5rem; font-weight:800; color:var(--danger-color); margin-bottom:6px;">GAME OVER</div>
                <div style="font-size:1.2rem; font-weight:700; color:var(--text-color); margin-bottom:4px;">Puntaje Final: ${this.score} pts (+${xpGained} XP)</div>
                <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:1.25rem;">Preguntas falladas en la ronda: ${this.missedQuestions.length}</p>
                <div style="display:flex; justify-content:center; gap:8px;">
                    <button type="button" class="btn btn-outline" onclick="window.SurvivalMode.close()">Salir</button>
                    <button type="button" class="btn btn-primary" onclick="window.SurvivalMode.start()">Jugar Otra Vez</button>
                </div>
            </div>
        `;
    }
};

// =============================================================================
// F35: SMART ERROR RESCUE FLASHCARDS (Baraja de Rescate Instantáneo)
// =============================================================================
window.ErrorRescueCards = {
    openRescueDeck() {
        const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');
        const latest = history[history.length - 1];
        const missedIds = latest ? (latest.missedIds || []) : [];
        const cid = window.currentCourseId || 'azure-ai-103';
        const lang = window.AppI18n ? window.AppI18n.getLanguage() : 'es';
        const allQuestions = (window.questionsData || []).filter(q => (q.courseId === cid) && (q.lang === lang || !q.lang));

        let missedQuestions = allQuestions.filter(q => missedIds.includes(q.id));
        if (missedQuestions.length === 0) {
            missedQuestions = allQuestions.slice(0, 5);
        }

        const flashcards = missedQuestions.map(q => {
            const correctOpt = (q.options || []).find(o => (q.correctIds || []).includes(o.id));
            return {
                tema: q.domain || 'Rescate de Error',
                front: q.prompt,
                back: `<strong>Respuesta Correcta:</strong> ${correctOpt ? correctOpt.text : 'Oficial'}<br><br><strong>Regla de Oro:</strong> ${q.explanation ? q.explanation.slice(0, 200) + '...' : 'Revisar documentación oficial.'}`
            };
        });

        if (typeof window.openStudyCenterTab === 'function') {
            window.openStudyCenterTab('flashcards');
        }
    }
};

// =============================================================================
// F36: LLM PARAMETERS & PROMPT PLAYGROUND (Temperature, Top_P, Penalties)
// =============================================================================
window.PromptPlayground = {
    presets: {
        'code': { temp: 0.0, topP: 0.1, freq: 0.0, pres: 0.0, json: true, name: 'Generación de Código Determinista', desc: 'Temperatura 0.0 garantiza salidas reproducibles sin variabilidad ni alucinaciones.' },
        'json': { temp: 0.1, topP: 0.2, freq: 0.0, pres: 0.0, json: true, name: 'Extracción Estructurada de Datos (JSON)', desc: 'Temperatura baja + response_format: json_object para esquemas estrictos de bases de datos.' },
        'creative': { temp: 0.8, topP: 0.9, freq: 0.5, pres: 0.4, json: false, name: 'Chatbot Conversacional Creativo', desc: 'Mayor temperatura y top_p permiten variedad léxica sin caer en incoherencias.' },
        'summary': { temp: 0.2, topP: 0.3, freq: 0.2, pres: 0.0, json: false, name: 'Resumen Estricto de Documentos (Sin Alucinación)', desc: 'Evita invenciones de hechos adhiriéndose estrictamente al contexto recuperado en RAG.' }
    },

    render(containerEl) {
        if (!containerEl) return;
        containerEl.innerHTML = `
            <div class="llm-playground-card">
                <div style="margin-bottom:1rem;">
                    <h3 style="margin:0; font-size:1.15rem; color:var(--text-color);">Playground de Parámetros de Inferencia LLM</h3>
                    <p style="margin:2px 0 0 0; font-size:0.84rem; color:var(--text-muted);">Calibra y experimenta con los parámetros evaluados en las certificaciones de Azure AI y Databricks GenAI.</p>
                </div>

                <div style="font-size:0.78rem; font-weight:700; color:var(--primary-color); margin-bottom:6px; text-transform:uppercase;">Escenarios Oficiales de Examen:</div>
                <div class="llm-presets-bar">
                    <button type="button" class="llm-preset-btn active" onclick="window.PromptPlayground.applyPreset('code', this)">Código Determinista</button>
                    <button type="button" class="llm-preset-btn" onclick="window.PromptPlayground.applyPreset('json', this)">Extracción JSON</button>
                    <button type="button" class="llm-preset-btn" onclick="window.PromptPlayground.applyPreset('creative', this)">Agente Creativo</button>
                    <button type="button" class="llm-preset-btn" onclick="window.PromptPlayground.applyPreset('summary', this)">Resumen RAG Estricto</button>
                </div>

                <div class="llm-slider-row">
                    <div class="llm-slider-header">
                        <strong>Temperature (Aleatoriedad): <span id="val-temp" style="color:var(--primary-color);">0.0</span></strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">0.0 (Determinista) &mdash; 2.0 (Creativo/Caótico)</span>
                    </div>
                    <input type="range" id="slider-temp" class="llm-slider-input" min="0" max="2" step="0.1" value="0.0" oninput="window.PromptPlayground.onSliderChange()">
                </div>

                <div class="llm-slider-row">
                    <div class="llm-slider-header">
                        <strong>Top_p / Nucleus Sampling (Corte de Probabilidad): <span id="val-topp" style="color:var(--primary-color);">0.1</span></strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">Corta el % acumulado de tokens más probables</span>
                    </div>
                    <input type="range" id="slider-topp" class="llm-slider-input" min="0" max="1" step="0.05" value="0.1" oninput="window.PromptPlayground.onSliderChange()">
                </div>

                <div class="llm-slider-row">
                    <div class="llm-slider-header">
                        <strong>Frequency Penalty (Evitar Repetición): <span id="val-freq" style="color:var(--primary-color);">0.0</span></strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">-2.0 a 2.0 (Penaliza tokens por frecuencia)</span>
                    </div>
                    <input type="range" id="slider-freq" class="llm-slider-input" min="-2" max="2" step="0.1" value="0.0" oninput="window.PromptPlayground.onSliderChange()">
                </div>

                <div class="llm-slider-row">
                    <div class="llm-slider-header">
                        <strong>Presence Penalty (Introducir Nuevos Temas): <span id="val-pres" style="color:var(--primary-color);">0.0</span></strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">-2.0 a 2.0 (Incentiva nuevos conceptos)</span>
                    </div>
                    <input type="range" id="slider-pres" class="llm-slider-input" min="-2" max="2" step="0.1" value="0.0" oninput="window.PromptPlayground.onSliderChange()">
                </div>

                <div class="llm-curve-card" id="llm-explanation-card">
                    <strong>Regla de Examen:</strong> Para generación de código SQL o extracción estructurada en Azure OpenAI y Databricks Foundation Models, se recomienda <code>temperature: 0.0</code> y <code>response_format: {"type": "json_object"}</code> asegurando incluir la palabra 'JSON' en el system prompt.
                </div>
            </div>
        `;
    },

    applyPreset(key, btn) {
        const p = this.presets[key];
        if (!p) return;
        document.querySelectorAll('.llm-preset-btn').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');

        document.getElementById('slider-temp').value = p.temp;
        document.getElementById('slider-topp').value = p.topP;
        document.getElementById('slider-freq').value = p.freq;
        document.getElementById('slider-pres').value = p.pres;

        document.getElementById('val-temp').textContent = p.temp;
        document.getElementById('val-topp').textContent = p.topP;
        document.getElementById('val-freq').textContent = p.freq;
        document.getElementById('val-pres').textContent = p.pres;

        const exp = document.getElementById('llm-explanation-card');
        if (exp) {
            exp.innerHTML = `<strong>${p.name}:</strong> ${p.desc}`;
        }
        if (typeof window.addXP === 'function') window.addXP(15, 'promptPresetsExplored');
    },

    onSliderChange() {
        const temp = document.getElementById('slider-temp').value;
        const topp = document.getElementById('slider-topp').value;
        const freq = document.getElementById('slider-freq').value;
        const pres = document.getElementById('slider-pres').value;

        document.getElementById('val-temp').textContent = temp;
        document.getElementById('val-topp').textContent = topp;
        document.getElementById('val-freq').textContent = freq;
        document.getElementById('val-pres').textContent = pres;
    }
};

// Initialize Spotlight Search on load
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => window.SpotlightSearch.init());
    } else {
        window.SpotlightSearch.init();
    }
}




