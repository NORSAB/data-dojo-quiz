/**
 * HERO DATA MANAGER v2
 * Centralizes User Profile, Stats, Belts and Dashboard Updates.
 * Source of Truth for "The Data Dojo".
 */

window.HeroManager = {
    data: {
        profile: {
            nick: "Estudiante",
            name: "Estudiante",
            joinDate: new Date().toLocaleDateString()
        },
        stats: {
            xp: 0,
            belt: "Cinturón Blanco",
            level: 1,
            streak: 0
        }
    },

    belts: [
        { name: "Cinturón Blanco", minXP: 0, color: "#A0A0A0", icon: "shield" },
        { name: "Cinturón Amarillo", minXP: 100, color: "#FFD700", icon: "shield" },
        { name: "Cinturón Naranja", minXP: 500, color: "#FF8C00", icon: "shield" },
        { name: "Cinturón Rojo", minXP: 1500, color: "#dc3545", icon: "shield" },
        { name: "Cinturón Verde", minXP: 3000, color: "#28a745", icon: "shield" },
        { name: "Cinturón Café", minXP: 5000, color: "#795548", icon: "shield" },
        { name: "Cinturón Azul", minXP: 8000, color: "#007bff", icon: "shield" },
        { name: "Cinturón Negro", minXP: 12000, color: "#343a40", icon: "shield" },
        { name: "Cinturón Negro (Dragón 1)", minXP: 16000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 2)", minXP: 20000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 3)", minXP: 25000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 4)", minXP: 30000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 5)", minXP: 35000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 6)", minXP: 45000, color: "#000000", icon: "dragon" },
        { name: "Cinturón Negro (Dragón 7)", minXP: 60000, color: "#000000", icon: "dragon" },
    ],

    init: function() {
        this.load();
        
        this.updateDashboard();
        
        // Polling (Zombie Killer) - Keep this
        let attempts = 0;
        const poller = setInterval(() => {
            this.updateDashboard();
            attempts++;
            if(attempts > 10) clearInterval(poller);
        }, 500);

        window.addEventListener('storage', (e) => {
            if(e.key === 'userStats' || e.key === 'userProfile') {
                this.load();
                this.updateDashboard();
            }
        });
    },

    load: function() {
        try {
            const pRaw = localStorage.getItem("userProfile");
            if (pRaw) {
                const p = JSON.parse(pRaw);
                if(p.nick && p.nick.trim() !== "") {
                    this.data.profile = { ...this.data.profile, ...p };
                }
            }

            const sRaw = localStorage.getItem("userStats");
            let calculatedXP = 0;
            
            if (sRaw) {
                const s = JSON.parse(sRaw);
                this.data.stats = { ...this.data.stats, ...s };
                
                // Calculate XP using standard weightings
                // 1 pt per Question, 100 pt per Exam, etc.
                calculatedXP += (s.totalQuestions || 0) * 1;
                calculatedXP += (s.examsPassed || 0) * 100;
                calculatedXP += (s.perfectExams || 0) * 300;
                calculatedXP += (s.topicsStudied || []).length * 50;
                calculatedXP += (s.maxCorrectStreak || 0) * 5;
            } else {
                 // Fallback: Estimate from History if Stats are missing
                 const history = JSON.parse(localStorage.getItem("quizHistory") || "[]");
                 history.forEach(h => {
                    calculatedXP += (h.score * 10); 
                 });
            }
            

            
            if(calculatedXP > 0) {
                this.data.stats.xp = calculatedXP;
            }

            // Recalculate Belt based on final XP
            this.checkLevelUp();
            

        } catch (e) {
            console.error("HeroManager Load Error:", e);
        }
    },

    save: function() {
        localStorage.setItem("userProfile", JSON.stringify(this.data.profile));
        localStorage.setItem("userStats", JSON.stringify(this.data.stats));
        this.updateDashboard();
    },

    // --- SIMULATION TOOLS ---
    simulateLevelUp: function() {
        // Create modal overlay
        const overlay = document.createElement('div');
        overlay.className = 'modal-overlay';
        overlay.style.display = 'flex';
        
        // Create modal content (using the BLUE styles now)
        overlay.innerHTML = `
            <div class="levelup-card">
                <div class="levelup-header">
                    <h2>¡Nivel Completado!</h2>
                </div>
                <div class="levelup-body">
                    <div style="font-size: 4rem; margin: 1rem 0;">🥋</div>
                    <h3 style="color: #fff; margin-bottom: 1rem;">Has alcanzado el Nivel ${this.data.stats.level + 1}</h3>
                    <p style="color: rgba(199, 210, 254, 0.9);">¡Tu disciplina está dando frutos! Continúa tu camino hacia la maestría.</p>
                </div>
                <button class="btn btn-primary" style="margin-top: 2rem; background: white; color: var(--primary-color);" onclick="this.closest('.modal-overlay').remove()">¡Continuar!</button>
            </div>
        `;
        
        document.body.appendChild(overlay);
    },

    addXP: function(amount) {
        let current = Number(this.data.stats.xp) || 0;
        this.data.stats.xp = current + amount;
        this.checkLevelUp();
        this.save();
    },

    checkLevelUp: function() {
        const newBelt = this.getBeltInfo(this.data.stats.xp);
        if (newBelt.name !== this.data.stats.belt) {
            this.data.stats.belt = newBelt.name;
            if(window.showLevelUpModal) window.showLevelUpModal(newBelt);
        }
    },

    getBeltInfo: function(xp) {
        xp = Number(xp) || 0;
        let current = this.belts[0];
        for (const belt of this.belts) {
            if (xp >= belt.minXP) {
                current = belt;
            }
        }
        return current;
    },
    
    getNextLevelInfo: function(xp) {
        xp = Number(xp) || 0;
        for (let i = 0; i < this.belts.length; i++) {
             if (xp < this.belts[i].minXP) {
                 return { nextXP: this.belts[i].minXP, nextName: this.belts[i].name };
             }
        }
        return { nextXP: 5000, nextName: "Gran Maestro" }; 
    },

    updateDashboard: function() {
        try {
            // Data Preparation
            const p = this.data.profile;
            let displayName = "Estudiante";
            let nick = p.nick || "Estudiante"; 
            
            // Name Priority: Full Name > Nickname > Default
            if(p.name && p.name.trim() !== "") {
                displayName = p.name;
            } else if (p.nick && p.nick.trim() !== "") {
                displayName = p.nick;
            }
            
            // V2: Seeds neutralized — no force override
            
            const xp = Number(this.data.stats.xp) || 0;
            const belt = this.getBeltInfo(xp);

            // Header Status Button Update
            const headerBtn = document.getElementById('legacy-header-btn');
            if (headerBtn) {
                headerBtn.style.display = 'flex';
                headerBtn.style.visibility = 'visible';
                
                headerBtn.innerHTML = `
                    <div style="display: flex; align-items: center; gap: 8px;">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="${belt.color}" stroke="${belt.color}" stroke-width="0">
                             <path d="M2 12h20M7 12v4a3 3 0 0 0 3 3h4a3 3 0 0 0 3-3v-4"/>
                             <circle cx="12" cy="12" r="3" fill="rgba(255,255,255,0.3)" />
                        </svg>
                        <span style="font-weight: 500; font-size: 0.9rem; letter-spacing: -0.01em;">
                            ${belt.name} <span style="opacity: 0.6; font-size: 0.85em; margin: 0 4px;">|</span> ${nick}
                        </span>
                    </div>
                `;
            }
        } catch(e) {
            console.error("HeroManager update error:", e);
        }
    }
};

// Robust Auto-Launch
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => window.HeroManager.init());
} else {
    // If loaded generically, wait a tick then init
    setTimeout(() => window.HeroManager.init(), 50);
}
