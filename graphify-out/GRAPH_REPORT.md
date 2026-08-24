# Graph Report - Simulador de Preguntas  (2026-08-23)

## Corpus Check
- cluster-only mode — file stats not available

## Summary
- 135 nodes · 242 edges · 19 communities (15 shown, 4 thin omitted)
- Extraction: 95% EXTRACTED · 5% INFERRED · 0% AMBIGUOUS · INFERRED: 13 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `aa63c4d7`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Core Utilities and State
- Features and Exports
- Study Mastery and Gamification
- Practice Launchers and Plans
- Question Rendering and Interaction
- Spanish Translation Toggle
- Navigation and Initialization
- Exam Completion and History
- Study Streak Tracking
- Flashcard Experience
- Progress Dashboard Charts
- Study Coach Readiness
- Supabase Cloud Sync
- Course Configuration
- Statistics Page
- Administration Settings
- PWA Cache

## God Nodes (most connected - your core abstractions)
1. `init()` - 13 edges
2. `loadQuestion()` - 11 edges
3. `launchDirectQuiz()` - 10 edges
4. `addXP()` - 7 edges
5. `syncToGlobal()` - 7 edges
6. `selectCategory()` - 7 edges
7. `updateGamification()` - 6 edges
8. `saveAdminConfig()` - 6 edges
9. `finishQuiz()` - 6 edges
10. `launchFlashcardMode()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `init()` --indirect_call--> `openAdmin()`  [INFERRED]
  script.js → script.js  _Bridges community 15 → community 6_
- `init()` --indirect_call--> `checkAnswer()`  [INFERRED]
  script.js → script.js  _Bridges community 4 → community 6_
- `init()` --indirect_call--> `tryFinishQuiz()`  [INFERRED]
  script.js → script.js  _Bridges community 6 → community 7_
- `renderBadges()` --calls--> `getGamificationStats()`  [EXTRACTED]
  script.js → script.js  _Bridges community 0 → community 2_
- `renderStudyCoach()` --calls--> `launchDirectQuiz()`  [EXTRACTED]
  features.js → features.js  _Bridges community 11 → community 3_

## Import Cycles
- None detected.

## Communities (19 total, 4 thin omitted)

### Community 0 - "Core Utilities and State"
Cohesion: 0.12
Nodes (7): calculateXP(), getBelt(), loadFC(), refreshSectionHeader(), renderBadges(), renderFlashcardMode(), sectionViewedCount()

### Community 1 - "Features and Exports"
Cohesion: 0.12
Nodes (4): addCertificateButton(), FLASHCARD_MAP, generateCertificate(), SoundFX

### Community 2 - "Study Mastery and Gamification"
Cohesion: 0.27
Nodes (13): addXP(), checkAchievements(), getGamificationStats(), renderComandosSQL(), renderConceptos(), renderPersonajes(), saveGamificationStats(), saveMastery() (+5 more)

### Community 3 - "Practice Launchers and Plans"
Cohesion: 0.17
Nodes (11): launchDirectQuiz(), launchDomainFlashcards(), launchMappingQuiz(), launchQuickQuiz(), renderDomainCards(), renderStudyPlan(), setupMarathonButton(), setupRealExamButton() (+3 more)

### Community 4 - "Question Rendering and Interaction"
Cohesion: 0.27
Nodes (11): checkAnswer(), handleDragOver(), handleDragStart(), handleDrop(), loadQuestion(), renderBlocks(), navigate(), renderQuestionMap() (+3 more)

### Community 5 - "Spanish Translation Toggle"
Cohesion: 0.38
Nodes (10): applySpanish(), buildTranslationFromTwin(), findEsTwin(), hasSpanishSupport(), init(), injectButton(), renderTranslation(), restoreEnglishFromData() (+2 more)

### Community 6 - "Navigation and Initialization"
Cohesion: 0.33
Nodes (9): closeAdmin(), init(), renderCategories(), renderCourses(), returnToMenu(), saveAdminConfig(), selectCategory(), setGlobalTheme() (+1 more)

### Community 7 - "Exam Completion and History"
Cohesion: 0.29
Nodes (7): finishQuiz(), renderHistory(), renderReview(), saveExamResult(), startTimer(), tryFinishQuiz(), updateTimerDisplay()

### Community 8 - "Study Streak Tracking"
Cohesion: 0.53
Nodes (6): checkStreakRisk(), dateDiffDays(), getLocalISODate(), getStreakData(), trackDailyActivity(), updateStreakDisplay()

### Community 9 - "Flashcard Experience"
Cohesion: 0.70
Nodes (5): launchFlashcardMode(), close(), handleKey(), render(), showFlashcardButton()

### Community 10 - "Progress Dashboard Charts"
Cohesion: 0.40
Nodes (4): renderDashRadarChart(), renderDashRecommendation(), renderDashTrendChart(), renderProgressDashboard()

### Community 11 - "Study Coach Readiness"
Cohesion: 0.83
Nodes (4): computeCourseReadiness(), _computeDomainStats(), getStudyTodayRecommendation(), renderStudyCoach()

### Community 13 - "Course Configuration"
Cohesion: 0.67
Nodes (3): applyConfigToData(), loadConfig(), saveConfig()

## Knowledge Gaps
- **5 isolated node(s):** `FLASHCARD_MAP`, `SoundFX`, `DataSync`, `_originalSetItem`, `ASSETS_TO_CACHE`
  These have ≤1 connection - possible missing edges or undocumented components.
- **4 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `launchFlashcardMode()` connect `Flashcard Experience` to `Features and Exports`, `Practice Launchers and Plans`?**
  _High betweenness centrality (0.016) - this node is a cross-community bridge._
- **Why does `loadQuestion()` connect `Question Rendering and Interaction` to `Core Utilities and State`?**
  _High betweenness centrality (0.006) - this node is a cross-community bridge._
- **Why does `renderDashRadarChart()` connect `Progress Dashboard Charts` to `Features and Exports`?**
  _High betweenness centrality (0.005) - this node is a cross-community bridge._
- **Are the 7 inferred relationships involving `init()` (e.g. with `checkAnswer()` and `closeAdmin()`) actually correct?**
  _`init()` has 7 INFERRED edges - model-reasoned connections that need verification._
- **Are the 3 inferred relationships involving `loadQuestion()` (e.g. with `handleDragOver()` and `handleDragStart()`) actually correct?**
  _`loadQuestion()` has 3 INFERRED edges - model-reasoned connections that need verification._
- **What connects `FLASHCARD_MAP`, `SoundFX`, `DataSync` to the rest of the system?**
  _5 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Core Utilities and State` be split into smaller, more focused modules?**
  _Cohesion score 0.12105263157894737 - nodes in this community are weakly interconnected._