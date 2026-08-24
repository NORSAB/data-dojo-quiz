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

// =============================================
// F1: WEAKNESS REVIEW MODE
// =============================================
function updateWeaknessPanel(courseId) {
    const panel = document.getElementById('weakness-shortcut');
    if (!panel) return;

    const cid = courseId || window.currentCourseId;
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]');

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
    const allQuestions = window.questionsData || [];

    stillWeak.forEach(qId => {
        const q = allQuestions.find(qq => qq.id === qId);
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
            const weakQuestions = allQuestions.filter(q => stillWeak.has(q.id));
            if (weakQuestions.length === 0) { alert('No hay preguntas de repaso disponibles.'); return; }
            launchDirectQuiz(weakQuestions, 'weakness');
        };
    }
}


// =============================================
// F2: DOMAIN PRACTICE CARDS
// =============================================
function renderDomainCards(courseId) {
    const container = document.getElementById('domain-cards');
    const wrapper = document.getElementById('domain-cards-container');
    if (!container || !wrapper) return;

    const cid = courseId || window.currentCourseId;
    const allQuestions = window.questionsData || [];
    const questions = allQuestions.filter(q => q.courseId === cid);

    if (!questions || questions.length === 0) { wrapper.style.display = 'none'; return; }

    // Extract unique domains
    const domains = {};
    questions.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, ids: [] };
        domains[d].total++;
        domains[d].ids.push(q.id);
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
            if (h.questionIds && h.questionIds.some(qId => domains[domain].ids.includes(qId))) {
                latestAttemptIndex = i;
                break;
            }
        }

        if (latestAttemptIndex >= 0) {
            const h = history[latestAttemptIndex];
            h.questionIds.forEach((qId, idx) => {
                if (domains[domain].ids.includes(qId)) {
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
            const domainQuestions = allQuestions.filter(q => data.ids.includes(q.id));
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
    const allQuestions = window.questionsData || [];
    const questions = allQuestions.filter(q => q.courseId === cid);

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
        ctx.strokeStyle = '#4f6ef7';
        ctx.lineWidth = 3;
        ctx.strokeRect(30, 30, 1140, 740);
        ctx.strokeStyle = 'rgba(79, 110, 247, 0.3)';
        ctx.lineWidth = 1;
        ctx.strokeRect(40, 40, 1120, 720);

        // Header
        ctx.fillStyle = '#4f6ef7';
        ctx.font = `700 14px ${ff}`;
        ctx.textAlign = 'center';
        ctx.fillText('THE DATA DOJO', 600, 90);

        ctx.fillStyle = '#e2e8f0';
        ctx.font = `800 36px ${ff}`;
        ctx.fillText('CERTIFICADO DE APROBACION', 600, 140);

        // Decorative line
        const lineGrad = ctx.createLinearGradient(300, 160, 900, 160);
        lineGrad.addColorStop(0, 'transparent');
        lineGrad.addColorStop(0.5, '#4f6ef7');
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

        ctx.fillStyle = '#4f6ef7';
        ctx.font = `700 28px ${ff}`;
        ctx.fillText(courseName, 600, 400);

        // Score circle
        ctx.beginPath();
        ctx.arc(600, 500, 60, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(79, 110, 247, 0.15)';
        ctx.fill();
        ctx.strokeStyle = '#4f6ef7';
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
        certBanner.style = 'grid-column: 1 / -1; border: 2px solid #9a6700; background: rgba(154,103,0,0.08); flex-direction: row; justify-content: space-between; align-items: center; padding: 15px 20px;';
        certBanner.innerHTML = `
            <div style="display:flex; align-items:center; gap: 15px;">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="#fbbf24" stroke-width="2" fill="none"><path d="M12 15l-5-5h3V4h4v6h3l-5 5zm-7 4v-2h14v2H5z"/></svg>
                <div style="text-align:left;">
                    <div style="color:#fbbf24; font-weight:bold; font-size:1.1rem; text-shadow: 0 0 10px rgba(251,191,36,0.5);">Oficialmente Certificado</div>
                    <div style="font-size:0.8rem; color:var(--text-muted);">Databricks Certified Data Analyst Associate</div>
                </div>
            </div>
            <div style="font-size:1.5rem; font-weight:900; color:#fbbf24;">15-Abr-2026</div>
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
             officialScoreTxt = `<tspan x="${p.labelX}" dy="${lineH + 2}" fill="#fbbf24" font-weight="700" font-size="${pctFontSize}">Oficial: ${certMap[p.name]}%</tspan>`;
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
            ${isDatabricksCertified ? `<polygon points="${officialPolygon}" fill="rgba(251,191,36,0.15)" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="4" filter="url(#glowOfficial)"/>` : ''}
            <polygon points="${polygon}" fill="rgba(79,110,247,0.15)" stroke="var(--primary-color)" stroke-width="2"/>
            <g class="points">
                ${dataPoints.map(p => {
                    let officialCircle = '';
                    if (isDatabricksCertified && certMap[p.name] !== undefined) {
                        const opct = certMap[p.name] / 100;
                        const ox = cx + rad * opct * Math.cos(p.angle);
                        const oy = cy + rad * opct * Math.sin(p.angle);
                        officialCircle = `<circle cx="${ox}" cy="${oy}" r="4" fill="#fbbf24" stroke="var(--card-bg)" stroke-width="1.5" filter="url(#glowOfficial)"/>`;
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
    const allQ = (window.questionsData || []).filter(q => !cid || q.courseId === cid);
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => !cid || h.courseCheck === cid);

    const stats = {};
    allQ.forEach(q => {
        const d = q.domain || 'General';
        if (!stats[d]) stats[d] = { total: 0, seen: new Set(), missed: new Set(), correct: 0, attempted: 0, ids: [] };
        stats[d].total++;
        stats[d].ids.push(q.id);
    });

    history.forEach(h => {
        if (!h.questionIds || !h.userAnswers) return;
        h.questionIds.forEach((qId, idx) => {
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const d = q.domain || 'General';
            if (!stats[d]) return;
            stats[d].seen.add(qId);
            stats[d].attempted++;
            const ans = h.userAnswers[idx] || h.userAnswers[String(idx)];
            if (ans && ans.isCorrect) {
                stats[d].correct++;
                stats[d].missed.delete(qId);
            } else {
                stats[d].missed.add(qId);
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
            const domainHtml = lesson.domain ? `<span style="display:inline-block; margin-bottom:10px; font-size:0.8rem; background:var(--primary-light, rgba(79,110,247,0.1)); color:var(--primary-color, #4f6ef7); padding:4px 8px; border-radius:4px; font-weight:bold;">${lesson.domain}</span>` : '';
            content.innerHTML += `
                <div style="margin-bottom: 1rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
                    <h3 style="color: var(--primary-color, #4f6ef7); margin-bottom: 4px;">${lesson.title}</h3>
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
    const allQ = window.questionsData || [];
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
    const allQ = window.questionsData || [];
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
    const allQ = (window.questionsData || []).filter(q => q.courseId === cid);
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
            const q = allQ.find(qq => qq.id === qId);
            if (!q) return;
            const d = q.domain || 'General';
            if (!domains[d]) return;
            domains[d].seen.add(qId);
            domains[d].attempted++;
            const ans = h.userAnswers ? (h.userAnswers[idx] || h.userAnswers[String(idx)]) : null;
            if (ans && ans.isCorrect) {
                domains[d].correct++;
                domains[d].missed.delete(qId);
            } else {
                domains[d].missed.add(qId);
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
            questionIds: [...d.missed, ...allQ.filter(q => (q.domain || 'General') === name && !d.seen.has(q.id)).map(q => q.id)]
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
    const allQ = (window.questionsData || []).filter(q => q.courseId === cid);

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
        else if (c.count <= 2) fill = 'rgba(79, 110, 247, 0.35)';
        else if (c.count <= 5) fill = 'rgba(79, 110, 247, 0.6)';
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
            <polygon points="${polygon}" fill="rgba(79,110,247,0.15)" stroke="var(--primary-color)" stroke-width="2"/>
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
                    <span class="stats-legend-cell" style="background:rgba(79,110,247,0.35)"></span>
                    <span class="stats-legend-cell" style="background:rgba(79,110,247,0.6)"></span>
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
    const allQuestions = window.questionsData || [];
    const questions = allQuestions.filter(q => q.courseId === courseId);
    if (!questions.length) return {};

    // Build domain index
    const domains = {};
    questions.forEach(q => {
        const d = q.domain || 'General';
        if (!domains[d]) domains[d] = { total: 0, ids: [], attempted: 0, correct: 0 };
        domains[d].total++;
        domains[d].ids.push(q.id);
    });

    // Accumulate from history
    const history = JSON.parse(localStorage.getItem('quizHistory') || '[]')
        .filter(h => h.courseCheck === courseId);

    Object.keys(domains).forEach(domain => {
        history.forEach(h => {
            if (!h.questionIds || !h.userAnswers) return;
            h.questionIds.forEach((qId, idx) => {
                if (domains[domain].ids.includes(qId)) {
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
    const allQuestions = window.questionsData || [];
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
            barEl.style.background = 'var(--success-color, #22c55e)';
            scoreEl.style.color = 'var(--success-color, #22c55e)';
        } else if (readiness.score >= 60) {
            barEl.style.background = 'var(--warning-color, #f59e0b)';
            scoreEl.style.color = 'var(--warning-color, #f59e0b)';
        } else {
            barEl.style.background = 'var(--danger-color, #ef4444)';
            scoreEl.style.color = 'var(--danger-color, #ef4444)';
        }

        detailEl.textContent = readiness.detail;
    }
}
