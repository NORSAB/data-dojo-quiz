/**
 * Codex (GPT-5) | 2026-08-23 22:09 CST
 * Mantiene un idioma global ES/EN, persistente y aplicable sin abandonar la pantalla activa.
 */
(function createAppI18n() {
  'use strict';

  const STORAGE_KEY = 'app_language';
  const SUPPORTED_LANGUAGES = new Set(['es', 'en']);
  const messages = {
    'language.current': { es: 'Idioma', en: 'Language' },
    'language.switchToEnglish': { es: 'Cambiar toda la aplicación a inglés', en: 'Switch the entire app to English' },
    'language.switchToSpanish': { es: 'Cambiar toda la aplicación a español', en: 'Switch the entire app to Spanish' },
    'header.home': { es: 'Inicio', en: 'Home' },
    'header.profile': { es: 'Perfil', en: 'Profile' },
    'header.achievements': { es: 'Logros', en: 'Achievements' },
    'header.stats': { es: 'Stats', en: 'Stats' },
    'header.study': { es: 'Estudio', en: 'Study' },
    'header.admin': { es: 'Admin', en: 'Admin' },
    'header.theme': { es: 'Tema', en: 'Theme' },
    'header.zen': { es: 'Zen', en: 'Zen' },
    'header.homeTitle': { es: 'Ir al Inicio', en: 'Go Home' },
    'header.achievementsTitle': { es: 'Mis Logros', en: 'My Achievements' },
    'header.statsTitle': { es: 'Estadísticas', en: 'Statistics' },
    'header.studyTitle': { es: 'Centro de estudio', en: 'Study Center' },
    'header.adminTitle': { es: 'Administración', en: 'Administration' },
    'header.themeTitle': { es: 'Cambiar Tema', en: 'Change Theme' },
    'header.zenTitle': { es: 'Modo Zen', en: 'Zen Mode' },
    'header.exitZen': { es: 'Salir de Zen Mode', en: 'Exit Zen Mode' },
    'action.startTraining': { es: 'Iniciar Entrenamiento', en: 'Start Training' },
    'action.startExam': { es: 'Iniciar Examen', en: 'Start Exam' },
    'action.study': { es: 'Estudiar', en: 'Study' },
    'action.close': { es: 'Cerrar', en: 'Close' },
    'action.cancel': { es: 'Cancelar', en: 'Cancel' },
    'action.save': { es: 'Guardar', en: 'Save' },
    'action.back': { es: 'Volver', en: 'Back' },
    'action.backToMenu': { es: 'Volver al menú', en: 'Back to menu' },
    'action.mainMenu': { es: 'Al Menú Principal', en: 'Main Menu' },
    'action.expandAll': { es: 'Expandir Todos', en: 'Expand All' },
    'action.collapseAll': { es: 'Contraer Todos', en: 'Collapse All' },
    'action.markComplete': { es: 'Marcar completo', en: 'Mark complete' },
    'action.completed': { es: 'Completo', en: 'Complete' },
    'action.previous': { es: 'Anterior', en: 'Previous' },
    'action.next': { es: 'Siguiente', en: 'Next' },
    'action.showQuestion': { es: 'Ver Pregunta', en: 'Show Question' },
    'action.showAnswer': { es: 'Ver Respuesta', en: 'Show Answer' },
    'action.showAnswerAlternate': { es: 'Mostrar Respuesta', en: 'Show Answer' },
    'action.finishExam': { es: 'Finalizar Examen', en: 'Finish Exam' },
    'action.openModule': { es: 'Abrir módulo', en: 'Open module' },
    'action.practiceNow': { es: 'Practicar Ahora', en: 'Practice Now' },
    'action.saveChanges': { es: 'Guardar Cambios', en: 'Save Changes' },
    'action.saveConfiguration': { es: 'Guardar Configuración', en: 'Save Configuration' },
    'action.exportBackup': { es: 'Exportar Backup', en: 'Export Backup' },
    'action.importBackup': { es: 'Importar Backup', en: 'Import Backup' },
    'action.delete': { es: 'Borrar', en: 'Delete' },
    'action.restore': { es: 'Restaurar', en: 'Restore' },
    'action.review': { es: 'Revisar', en: 'Review' },
    'action.beginExam': { es: 'Comenzar Examen', en: 'Start Exam' },
    'action.shuffle': { es: 'Aleatorio', en: 'Shuffle' },
    'action.easy': { es: 'Fácil', en: 'Easy' },
    'action.medium': { es: 'Regular', en: 'Medium' },
    'action.hard': { es: 'Difícil', en: 'Hard' },
    'menu.selectCategory': { es: 'Seleccionar Categoría', en: 'Select Category' },
    'menu.categories': { es: 'CATEGORÍAS', en: 'CATEGORIES' },
    'menu.questionBankComplete': { es: 'Banco de preguntas completo', en: 'Complete question bank' },
    'menu.certificationEarned': { es: 'Certificación obtenida', en: 'Certification earned' },
    'menu.basic': { es: 'Básico', en: 'Basic' },
    'menu.intermediate': { es: 'Intermedio', en: 'Intermediate' },
    'menu.advanced': { es: 'Avanzado', en: 'Advanced' },
    'course.visualizationTools': { es: 'Herramientas de Visualización', en: 'Visualization Tools' },
    'course.interactiveVisualization': { es: 'Visualización Interactiva de la Información', en: 'Interactive Information Visualization' },
    'course.hybridThesis': { es: 'Tesis: Modelo Híbrido TCROC-Markov-SSRC', en: 'Thesis: Hybrid TCROC-Markov-SSRC Model' },
    'menu.notAvailable': { es: 'No disponible', en: 'Not available' },
    'menu.comingSoon': { es: 'Próximamente', en: 'Coming soon' },
    'menu.active': { es: 'Activo', en: 'Active' },
    'menu.history': { es: 'Historial', en: 'History' },
    'menu.quickQuiz': { es: 'Quick Quiz', en: 'Quick Quiz' },
    'menu.mappingSimulator': { es: 'Simulador Mapping', en: 'Mapping Simulator' },
    'menu.quickQuizDescription': { es: '10 preguntas aleatorias de todos los cursos', en: '10 random questions from all courses' },
    'menu.mappingDescription': { es: 'Practicar las 48 preguntas del mapping', en: 'Practice the 48 mapping questions' },
    'menu.realExam': { es: 'Examen Simulado Real', en: 'Realistic Practice Exam' },
    'menu.marathon': { es: 'Modo Maratón', en: 'Marathon Mode' },
    'menu.quickFlashcards': { es: 'Flashcards Rápidas', en: 'Quick Flashcards' },
    'menu.errorReview': { es: 'Repaso de Errores', en: 'Mistake Review' },
    'menu.studyPlan': { es: 'Plan de Estudio', en: 'Study Plan' },
    'menu.noData': { es: 'Sin datos', en: 'No data' },
    'menu.new': { es: 'Nuevo', en: 'New' },
    'menu.studyWisdom': { es: '"El dato que buscas está en la pregunta, no en la respuesta."', en: '"The data you seek is in the question, not in the answer."' },
    'menu.todayStudy': { es: 'Qué Estudiar Hoy', en: 'What to Study Today' },
    'menu.readiness': { es: 'Preparación', en: 'Readiness' },
    'home.tagline': { es: 'Forja tu dominio sobre los datos', en: 'Forge your mastery over data' },
    'home.wisdom': { es: 'El ruido de la información es vasto como el océano, pero tu mente será el faro que lo atraviese. Elige tu arma, aspirante.', en: 'The noise of information is vast as the ocean, but your mind will be the beacon that cuts through it. Choose your weapon, aspirant.' },
    'home.sensei': { es: '— Sensei de Datos', en: '— Data Sensei' },
    'home.footer': { es: '© 2026 The Data Dojo — Disciplina · Estructura · Maestría', en: '© 2026 The Data Dojo — Discipline · Structure · Mastery' },
    'home.discipline': { es: 'Disciplina', en: 'Discipline' },
    'home.structure': { es: 'Estructura', en: 'Structure' },
    'home.mastery': { es: 'Maestría', en: 'Mastery' },
    'home.photoAction': { es: 'Haz clic para cambiar tu foto de perfil', en: 'Click to change your profile photo' },
    'home.photo': { es: 'FOTO', en: 'PHOTO' },
    'home.noAttempts': { es: 'Sin intentos aún', en: 'No attempts yet' },
    'home.days': { es: 'días', en: 'days' },
    'home.whiteBelt': { es: 'Cinturón Blanco', en: 'White Belt' },
    'home.yellowBelt': { es: 'Cinturón Amarillo', en: 'Yellow Belt' },
    'home.orangeBelt': { es: 'Cinturón Naranja', en: 'Orange Belt' },
    'home.greenBelt': { es: 'Cinturón Verde', en: 'Green Belt' },
    'home.blueBelt': { es: 'Cinturón Azul', en: 'Blue Belt' },
    'home.purpleBelt': { es: 'Cinturón Morado', en: 'Purple Belt' },
    'home.brownBelt': { es: 'Cinturón Café', en: 'Brown Belt' },
    'home.blackBelt': { es: 'Cinturón Negro', en: 'Black Belt' },
    'study.hub': { es: 'Centro de estudio', en: 'Study Center' },
    'study.paths': { es: 'Rutas de aprendizaje', en: 'Learning paths' },
    'study.loading': { es: 'Cargando módulos de estudio...', en: 'Loading study modules...' },
    'study.hubDescription': { es: 'Repasa conceptos por dominio, registra tu avance y vuelve al examen cuando estés listo.', en: 'Review concepts by domain, track your progress, and return to the exam when you are ready.' },
    'study.material': { es: 'Material de Estudio', en: 'Study Material' },
    'study.selectTopic': { es: 'Seleccione un tema', en: 'Select a topic' },
    'study.characters': { es: 'Personajes', en: 'People' },
    'study.keyConcepts': { es: 'Conceptos Clave', en: 'Key Concepts' },
    'study.terms': { es: 'Términos', en: 'Terms' },
    'study.scenarios': { es: 'Escenarios', en: 'Scenarios' },
    'study.sqlCommands': { es: 'Comandos SQL', en: 'SQL Commands' },
    'study.achievements': { es: 'Logros del Dojo', en: 'Dojo Achievements' },
    'study.allTopics': { es: 'Todos los temas', en: 'All topics' },
    'study.clickFlip': { es: 'Clic para voltear', en: 'Click to flip' },
    'study.unlocked': { es: 'Desbloqueados', en: 'Unlocked' },
    'study.read': { es: 'LEÍDO', en: 'READ' },
    'study.readMarked': { es: 'LEÍDO', en: 'READ' },
    'study.bilingual': { es: 'Bilingüe', en: 'Bilingual' },
    'study.optionsLabel': { es: 'Opciones del módulo de estudio', en: 'Study module options' },
    'study.highFrequency': { es: 'CLAVE = Muy preguntado', en: 'KEY = Frequently tested' },
    'study.examFact': { es: 'Dato para el examen:', en: 'Exam fact:' },
    'study.sqlTitle': { es: 'Comandos SQL para el Examen', en: 'SQL Commands for the Exam' },
    'study.lineByLine': { es: 'Ejemplos explicados línea por línea', en: 'Examples explained line by line' },
    'study.new': { es: 'NUEVO', en: 'NEW' },
    'study.key': { es: 'CLAVE', en: 'KEY' },
    'study.important': { es: 'IMPORTANTE', en: 'IMPORTANT' },
    'study.complementary': { es: 'COMPLEMENTARIO', en: 'SUPPLEMENTARY' },
    'quiz.configuration': { es: 'Configuración del Examen', en: 'Exam Configuration' },
    'quiz.engine': { es: 'Motor de examen', en: 'Exam engine' },
    'quiz.answerOptions': { es: 'Opciones de respuesta', en: 'Answer options' },
    'quiz.selectCount': { es: 'Seleccione la cantidad de preguntas para esta sesión.', en: 'Select the number of questions for this session.' },
    'quiz.bankRange': { es: 'Rango del Banco de Preguntas', en: 'Question Bank Range' },
    'quiz.fromNumber': { es: 'Desde #', en: 'From #' },
    'quiz.toNumber': { es: 'Hasta #', en: 'To #' },
    'quiz.keywordFilter': { es: 'Filtrar por Palabra Clave (Opcional):', en: 'Filter by Keyword (Optional):' },
    'quiz.keywordPlaceholder': { es: 'Ej. Unity Catalog, Delta Live Tables...', en: 'E.g. Unity Catalog, Delta Live Tables...' },
    'quiz.keywordHelp': { es: 'Deja vacío para incluir todas las preguntas.', en: 'Leave blank to include all questions.' },
    'quiz.realMode': { es: 'Modo Examen Real', en: 'Real Exam Mode' },
    'quiz.realModeHelp': { es: 'Sin botón de "Mostrar Respuesta". Feedback solo al final.', en: 'No "Show Answer" button. Feedback only at the end.' },
    'quiz.domainFilter': { es: 'Filtrar por Dominio (Opcional):', en: 'Filter by Domain (Optional):' },
    'quiz.questionOrder': { es: 'Orden de Preguntas:', en: 'Question Order:' },
    'quiz.sequential': { es: 'Secuencial (Orden Doc)', en: 'Sequential (Document Order)' },
    'quiz.allDomains': { es: '-- Todos los Dominios --', en: '-- All Domains --' },
    'quiz.availableQuestions': { es: 'Preguntas Disponibles:', en: 'Available Questions:' },
    'quiz.questionMap': { es: 'Mapa de Preguntas', en: 'Question Map' },
    'quiz.answered': { es: 'Respondida', en: 'Answered' },
    'quiz.current': { es: 'Actual', en: 'Current' },
    'quiz.pending': { es: 'Pendiente', en: 'Pending' },
    'quiz.pendingQuestions': { es: 'Preguntas Pendientes', en: 'Pending Questions' },
    'quiz.completed': { es: '¡Examen Completado!', en: 'Exam Completed!' },
    'quiz.goodJob': { es: '¡Buen trabajo!', en: 'Good job!' },
    'quiz.passed': { es: '¡Felicidades! Has aprobado.', en: 'Congratulations! You passed.' },
    'quiz.failed': { es: 'No has aprobado.', en: 'You did not pass.' },
    'quiz.correct': { es: '¡Correcto!', en: 'Correct!' },
    'quiz.incorrect': { es: 'Incorrecto.', en: 'Incorrect.' },
    'quiz.correctAnswer': { es: 'Respuesta Correcta:', en: 'Correct Answer:' },
    'quiz.single': { es: 'Seleccione una respuesta correcta.', en: 'Select one correct answer.' },
    'quiz.multiple': { es: 'Seleccione todas las respuestas correctas.', en: 'Select all correct answers.' },
    'quiz.trueFalse': { es: 'Seleccione Verdadero o Falso.', en: 'Select True or False.' },
    'quiz.order': { es: 'Organice los elementos en el orden correcto.', en: 'Arrange the items in the correct order.' },
    'quiz.scenario': { es: 'Lea el escenario y responda.', en: 'Read the scenario and answer.' },
    'admin.module': { es: 'Módulo Administrativo', en: 'Administration Module' },
    'admin.courses': { es: 'Cursos', en: 'Courses' },
    'admin.categories': { es: 'Categorías', en: 'Categories' },
    'admin.certifications': { es: 'Certificaciones', en: 'Certifications' },
    'admin.selectCourse': { es: 'Seleccionar Curso:', en: 'Select Course:' },
    'admin.defaultLanguage': { es: 'Idioma Predeterminado:', en: 'Default Language:' },
    'admin.courseStatus': { es: 'Estado del Curso:', en: 'Course Status:' },
    'profile.title': { es: 'Mi Perfil', en: 'My Profile' },
    'profile.fullName': { es: 'Nombre Completo', en: 'Full Name' },
    'profile.nickname': { es: 'Nickname (para saludos)', en: 'Nickname (for greetings)' },
    'profile.sound': { es: 'Activar/Desactivar Sonido', en: 'Enable/Disable Sound' },
    'profile.realNamePlaceholder': { es: 'Tu nombre real...', en: 'Your real name...' },
    'profile.nicknamePlaceholder': { es: 'Como quieres que te llamemos...', en: 'How you want us to address you...' },
    'profile.certifications': { es: 'Certificaciones Obtenidas', en: 'Earned Certifications' },
    'profile.dataManagement': { es: 'Gestión de Datos', en: 'Data Management' },
    'profile.backupHelp': { es: 'Guarda tu progreso en un archivo .json para no perderlo.', en: 'Save your progress in a .json file so you do not lose it.' },
    'stats.global': { es: 'Estadísticas Globales', en: 'Global Statistics' },
    'stats.totalQuestions': { es: 'Preguntas Totales', en: 'Total Questions' },
    'stats.answeredQuestions': { es: 'Preguntas Respondidas', en: 'Answered Questions' },
    'stats.completedExams': { es: 'Exámenes Completados', en: 'Completed Exams' },
    'stats.performanceTrend': { es: 'Tendencia de Rendimiento', en: 'Performance Trend' },
    'stats.domainStrengths': { es: 'Fortalezas por Dominio', en: 'Strengths by Domain' },
    'stats.domainBreakdown': { es: 'Desglose por Dominio', en: 'Breakdown by Domain' },
    'stats.studyRecommendations': { es: 'Recomendaciones de Estudio', en: 'Study Recommendations' },
    'stats.passRate': { es: 'Tasa de Aprobación', en: 'Pass Rate' },
    'stats.globalAccuracy': { es: 'Acierto Global', en: 'Overall Accuracy' },
    'stats.totalXp': { es: 'XP Total', en: 'Total XP' },
    'stats.currentBelt': { es: 'Cinturón Actual', en: 'Current Belt' },
    'stats.bestScore': { es: 'Mejor Score', en: 'Best Score' },
    'stats.estimatedTime': { es: 'Tiempo Estimado', en: 'Estimated Time' },
    'stats.activity': { es: 'Actividad (últimos 90 días)', en: 'Activity (last 90 days)' },
    'stats.less': { es: 'Menos', en: 'Less' },
    'stats.more': { es: 'Más', en: 'More' },
    'stats.globalRadar': { es: 'Radar Global', en: 'Global Radar' },
    'stats.topStrengths': { es: 'Top Fortalezas', en: 'Top Strengths' },
    'stats.domainsToImprove': { es: 'Dominios a Reforzar', en: 'Domains to Improve' },
    'stats.scoreTrend': { es: 'Tendencia de Score', en: 'Score Trend' },
    'stats.courseBreakdown': { es: 'Desglose por Curso', en: 'Breakdown by Course' },
    'status.loadingRecommendation': { es: 'Cargando recomendación...', en: 'Loading recommendation...' },
    'status.noRecentExams': { es: 'No hay exámenes recientes.', en: 'There are no recent exams.' },
    'status.noFlashcards': { es: 'No hay flashcards disponibles.', en: 'No flashcards are available.' },
    'status.loading': { es: 'Cargando...', en: 'Loading...' },
  };

  const esToPair = new Map();
  const enToPair = new Map();
  Object.values(messages).forEach(pair => {
    esToPair.set(pair.es, pair);
    enToPair.set(pair.en, pair);
  });

  const patterns = [
    [/^(\d+) preguntas$/, '$1 questions', /^(\d+) questions$/, '$1 preguntas'],
    [/^Límites: (.+)$/, 'Limits: $1', /^Limits: (.+)$/, 'Límites: $1'],
    [/^(\d+) temas$/, '$1 topics', /^(\d+) topics$/, '$1 temas'],
    [/^(\d+) cursos$/, '$1 courses', /^(\d+) courses$/, '$1 cursos'],
    [/^(\d+) conceptos$/, '$1 concepts', /^(\d+) concepts$/, '$1 conceptos'],
    [/^(\d+) personajes$/, '$1 people', /^(\d+) people$/, '$1 personajes'],
    [/^(\d+) tarjetas disponibles$/, '$1 cards available', /^(\d+) cards available$/, '$1 tarjetas disponibles'],
    [/^Cursos de (.+)$/, 'Courses from $1', /^Courses from (.+)$/, 'Cursos de $1'],
    [/^(\d+) cursos · (\d+) temas$/, '$1 courses · $2 topics', /^(\d+) courses · (\d+) topics$/, '$1 cursos · $2 temas'],
    [/^(\d+) módulos · (\d+) temas$/, '$1 modules · $2 topics', /^(\d+) modules · (\d+) topics$/, '$1 módulos · $2 temas'],
    [/^Pregunta (\d+) de (\d+)$/, 'Question $1 of $2', /^Question (\d+) of (\d+)$/, 'Pregunta $1 de $2'],
    [/^(\d+)\/([\d]+) leídos$/, '$1/$2 read', /^(\d+)\/([\d]+) read$/, '$1/$2 leídos'],
    [/^(\d+)\/([\d]+) leídos — \+5 XP por concepto nuevo$/, '$1/$2 read — +5 XP per new concept', /^(\d+)\/([\d]+) read — \+5 XP per new concept$/, '$1/$2 leídos — +5 XP por concepto nuevo'],
    [/^(\d+)\/([\d]+) leídos — \+8 XP c\/u$/, '$1/$2 read — +8 XP each', /^(\d+)\/([\d]+) read — \+8 XP each$/, '$1/$2 leídos — +8 XP c/u'],
    [/^(\d+)\/([\d]+) leídos — (.+)$/, '$1/$2 read — $3', /^(\d+)\/([\d]+) read — (.+)$/, '$1/$2 leídos — $3'],
    [/^Hola, (.+)!$/, 'Hello, $1!', /^Hello, (.+)!$/, 'Hola, $1!'],
    [/^Cinturón (.+)$/, '$1 Belt', /^(.+) Belt$/, 'Cinturón $1'],
    [/^(\d+) días$/, '$1 days', /^(\d+) days$/, '$1 días'],
    [/^(\d+) intentos$/, '$1 attempts', /^(\d+) attempts$/, '$1 intentos'],
    [/^(\d+) aprobados$/, '$1 passed', /^(\d+) passed$/, '$1 aprobados'],
    [/^(\d+) área\(s\) sin explorar$/, '$1 unexplored area(s)', /^(\d+) unexplored area\(s\)$/, '$1 área(s) sin explorar'],
    [/^(\d+) preguntas sin intentar$/, '$1 unattempted questions', /^(\d+) unattempted questions$/, '$1 preguntas sin intentar'],
    [/^Practicar \((\d+)\) →$/, 'Practice ($1) →', /^Practice \((\d+)\) →$/, 'Practicar ($1) →'],
    [/^Flashcards de (.+)$/, 'Flashcards for $1', /^Flashcards for (.+)$/, 'Flashcards de $1'],
    [/^(\d+) preguntas del banco completo$/, '$1 questions from the complete bank', /^(\d+) questions from the complete bank$/, '$1 preguntas del banco completo'],
    [/^(\d+) preguntas \| (\d+) por dominio \| (\d+) min \| Preguntas actualizadas$/, '$1 questions | $2 per domain | $3 min | Updated questions', /^(\d+) questions \| (\d+) per domain \| (\d+) min \| Updated questions$/, '$1 preguntas | $2 por dominio | $3 min | Preguntas actualizadas'],
    [/^Certificación obtenida$/, 'Certification earned', /^Certification earned$/, 'Certificación obtenida'],
    [/^Tienes (\d+) dominio\(s\) sin practicar\. ¡Empieza por "(.+)"!$/, 'You have $1 unpracticed domain(s). Start with "$2"!', /^You have (\d+) unpracticed domain\(s\)\. Start with "(.+)"!$/, 'Tienes $1 dominio(s) sin practicar. ¡Empieza por "$2"!'],
    [/^Precisión: (\d+)% · Cobertura: (\d+)\/(\d+) dominios$/, 'Accuracy: $1% · Coverage: $2/$3 domains', /^Accuracy: (\d+)% · Coverage: (\d+)\/(\d+) domains$/, 'Precisión: $1% · Cobertura: $2/$3 dominios'],
    [/^(.+) \(Estudio\)$/, '$1 (Study)', /^(.+) \(Study\)$/, '$1 (Estudio)'],
    [/^Desbloqueados: (.+)$/, 'Unlocked: $1', /^Unlocked: (.+)$/, 'Desbloqueados: $1'],
  ];

  let language = SUPPORTED_LANGUAGES.has(localStorage.getItem(STORAGE_KEY))
    ? localStorage.getItem(STORAGE_KEY)
    : 'es';
  let observer = null;
  let applying = false;

  function t(key, variables = {}) {
    const pair = messages[key];
    let value = pair ? pair[language] : key;
    Object.entries(variables).forEach(([name, replacement]) => {
      value = value.replaceAll(`{${name}}`, String(replacement));
    });
    return value;
  }

  function translatePhrase(value, targetLanguage = language) {
    const normalizedValue = String(value).replace(/\s+/g, ' ').trim();
    const pair = esToPair.get(value) || enToPair.get(value) || esToPair.get(normalizedValue) || enToPair.get(normalizedValue);
    if (pair) return pair[targetLanguage];

    for (const [esPattern, enReplacement, enPattern, esReplacement] of patterns) {
      if (targetLanguage === 'en' && esPattern.test(normalizedValue)) return normalizedValue.replace(esPattern, enReplacement);
      if (targetLanguage === 'es' && enPattern.test(normalizedValue)) return normalizedValue.replace(enPattern, esReplacement);
    }
    return value;
  }

  function translateTextNode(node) {
    if (!node || !node.nodeValue || !node.parentElement) return;
    if (node.parentElement.closest('script, style, code, pre, textarea, [data-app-i18n-ignore]')) return;
    const raw = node.nodeValue;
    const core = raw.trim();
    if (!core) return;
    const translated = translatePhrase(core);
    if (translated === core) return;
    node.nodeValue = `${raw.match(/^\s*/)[0]}${translated}${raw.match(/\s*$/)[0]}`;
  }

  function translateAttributes(element) {
    ['title', 'aria-label', 'placeholder'].forEach(attribute => {
      if (!element.hasAttribute || !element.hasAttribute(attribute)) return;
      const current = element.getAttribute(attribute);
      const translated = translatePhrase(current);
      if (translated !== current) element.setAttribute(attribute, translated);
    });
  }

  function applyLocalizedElement(element) {
    const value = element.getAttribute(`data-app-i18n-${language}`);
    if (value !== null && element.textContent !== value) element.textContent = value;
  }

  function apply(root = document.body) {
    if (!root || applying) return;
    applying = true;
    try {
      if (root.nodeType === Node.TEXT_NODE) translateTextNode(root);
      if (root.nodeType === Node.ELEMENT_NODE) {
        translateAttributes(root);
        if (root.matches('[data-app-i18n-en][data-app-i18n-es]')) applyLocalizedElement(root);
      }

      const scope = root.nodeType === Node.ELEMENT_NODE || root.nodeType === Node.DOCUMENT_NODE ? root : root.parentElement;
      if (!scope) return;
      scope.querySelectorAll?.('[data-app-i18n-en][data-app-i18n-es]').forEach(applyLocalizedElement);
      scope.querySelectorAll?.('[title], [aria-label], [placeholder]').forEach(translateAttributes);

      const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) translateTextNode(node);
    } finally {
      applying = false;
    }
  }

  function updateToggle() {
    const button = document.getElementById('global-language-toggle');
    if (!button) return;
    button.querySelectorAll('.global-language-option').forEach(option => {
      const active = option.dataset.language === language;
      option.classList.toggle('active', active);
      option.setAttribute('aria-hidden', String(!active));
    });
    const nextLanguage = language === 'es' ? 'en' : 'es';
    const title = nextLanguage === 'en' ? messages['language.switchToEnglish'].es : messages['language.switchToSpanish'].en;
    button.title = title;
    button.setAttribute('aria-label', title);
    button.setAttribute('data-current-language', language);
  }

  function setLanguage(nextLanguage, options = {}) {
    if (!SUPPORTED_LANGUAGES.has(nextLanguage)) return language;
    const previousLanguage = language;
    language = nextLanguage;
    document.documentElement.lang = language;
    document.documentElement.dataset.appLanguage = language;
    if (options.persist !== false) localStorage.setItem(STORAGE_KEY, language);
    updateToggle();
    apply(document.body);
    if (previousLanguage !== language || options.forceEvent) {
      window.dispatchEvent(new CustomEvent('app-language-change', {
        detail: { language, previousLanguage }
      }));
    }
    window.setTimeout(() => apply(document.body), 0);
    return language;
  }

  function toggleLanguage() {
    setLanguage(language === 'es' ? 'en' : 'es');
  }

  function getLanguage() {
    return language;
  }

  function escapeAttribute(value) {
    return String(value ?? '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  function localizedMarkup(english, spanish, className = '') {
    const selected = language === 'en' ? english : spanish;
    return `<span${className ? ` class="${escapeAttribute(className)}"` : ''} data-app-i18n-en="${escapeAttribute(english)}" data-app-i18n-es="${escapeAttribute(spanish)}">${escapeAttribute(selected)}</span>`;
  }

  function splitBilingual(value, order = 'en-es') {
    const parts = String(value ?? '').split(/\s+\/\s+/, 2);
    if (parts.length < 2) return { en: String(value ?? ''), es: String(value ?? '') };
    return order === 'es-en' ? { es: parts[0], en: parts[1] } : { en: parts[0], es: parts[1] };
  }

  function observe() {
    if (observer || !document.body) return;
    observer = new MutationObserver(mutations => {
      if (applying) return;
      mutations.forEach(mutation => {
        if (mutation.type === 'characterData') apply(mutation.target);
        mutation.addedNodes.forEach(node => apply(node));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  function init() {
    document.documentElement.lang = language;
    document.documentElement.dataset.appLanguage = language;
    updateToggle();
    apply(document.body);
    observe();
  }

  window.AppI18n = {
    apply,
    getLanguage,
    localizedMarkup,
    messages,
    setLanguage,
    splitBilingual,
    t,
    toggleLanguage,
    translatePhrase,
  };
  window.toggleAppLanguage = toggleLanguage;

  document.documentElement.dataset.appLanguage = language;
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
