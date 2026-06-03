// ============================================
// Armor Protocol Assessment — Localization
// Custom Egyptian Arabic + English Medical/Sports Vocab
// ============================================

const I18n = {
  strings: {
    // ==========================================
    // Welcome Screen
    // ==========================================
    'welcome.badge': 'ANKLE ASSESSMENT',
    'welcome.title': 'هل الكاحل عندك ثابت <em>فعلا</em>',
    'welcome.subtitle': 'أداة فحص شاملة للرياضيين. اكتشف مشاكل الـ Instability المخفية، واختبر القدرة الحقيقية للـ Ankle، واعرف خطوات عملية عشان ترجع ثقتك.',
    'welcome.feature1.title': 'Subjective Screen (الفحص الذاتي)',
    'welcome.feature1.desc': 'الـ History، الثقة، والجاهزية النفسية',
    'welcome.feature2.title': 'Physical Stress Tests',
    'welcome.feature2.desc': 'الـ Balance، الـ Endurance، والـ Power',
    'welcome.feature3.title': 'Personalized Results',
    'welcome.feature3.desc': 'مستوى الـ Stability، الـ Deficits، وخطوات عملية',
    'welcome.startBtn': 'ابدأ الـ Assessment',
    'welcome.time': 'هياخد تقريباً ٥ دقايق',

    // ==========================================
    // Progress Labels
    // ==========================================
    'progress.phase1': 'Phase 1',
    'progress.phase2': 'Phase 2',
    'progress.results': 'Results',

    // ==========================================
    // Sport Selection
    // ==========================================
    'sport.title': 'إيه الرياضة الأساسية بتاعتك؟',
    'sport.subtitle': 'اختار الرياضة اللي بتلعبها كـ Main sport.',
    'sport.opt1.label': 'كرة القدم',
    'sport.opt2.label': 'كرة السلة',
    'sport.opt3.label': 'فولي / هاند بول',
    'sport.opt4.label': 'تنس / بادل',
    'sport.opt5.label': 'أخرى',

    // ==========================================
    // Phase 1 — Instability History
    // ==========================================
    'phase1.label': 'Phase 1 — Instability History',

    // Q1 — Sprain Count
    'q1.title': 'جالك Ankle Sprain كام مرة؟',
    'q1.subtitle': 'احسب أي مرة حصل فيها التواء أو حسيت إن المفصل فلت منك (Giving way).',
    'q1.opt1.label': 'ولا مرة',
    'q1.opt1.desc': 'مفيش History لأي التواء',
    'q1.opt2.label': 'مرة واحدة',
    'q1.opt2.desc': 'حصلت مرة واحدة بس',
    'q1.opt3.label': '٢–٣ مرات',
    'q1.opt3.desc': 'أكتر من Sprain على فترات',
    'q1.opt4.label': '٤ مرات أو أكتر',
    'q1.opt4.desc': 'إصابات متكررة (Recurrent)',

    // Q2 — Last Sprain
    'q2.title': 'إمتى كانت آخر مرة جالك فيها Sprain أو المفصل فلت؟',
    'q2.subtitle': 'افتكر آخر مرة حسيت فيها بـ Instability.',
    'q2.opt1.label': 'من أكتر من سنة',
    'q2.opt1.desc': 'عدى أكتر من ١٢ شهر على آخر مرة',
    'q2.opt2.label': '٦–١٢ شهر',
    'q2.opt2.desc': 'خلال السنة اللي فاتت',
    'q2.opt3.label': '١–٦ شهور',
    'q2.opt3.desc': 'إصابة قريبة نسبياً',
    'q2.opt4.label': 'الشهر اللي فات',
    'q2.opt4.desc': 'حديثة جداً — لسه في مرحلة الـ Rehab',

    // Q3 — Giving Way
    'q3.title': 'كل قد إيه بتحس بـ Giving way أو إن الـ Ankle هيخونك؟',
    'q3.subtitle': 'وقت التمرين، المشي على أرض مش مستوية، أو في العادي.',
    'q3.opt1.label': 'أبداً',
    'q3.opt1.desc': 'Stable تماماً مفيش أي مشكلة',
    'q3.opt2.label': 'نادر جداً',
    'q3.opt2.desc': 'بس في المواقف الصعبة أو وقت الـ High Fatigue',
    'q3.opt3.label': 'أحياناً',
    'q3.opt3.desc': 'وقت التمرين أو لو الأرض مش مستوية',
    'q3.opt4.label': 'كتير',
    'q3.opt4.desc': 'حتى في المشي العادي والأنشطة اليومية',

    // ==========================================
    // Phase 1 — Psychological Confidence
    // ==========================================
    'confidence.label': 'Phase 1 — Psychological Confidence',
    'confidence.q1.title': 'عندك ثقة قد إيه في الـ Ankle وقت الـ Cutting، الـ Jumping، أو الـ Landing؟',
    'confidence.q1.subtitle': 'فكر في الحركات المفاجئة والـ High-intensity في رياضتك.',
    'confidence.slider.low': 'مفيش ثقة',
    'confidence.slider.high': 'ثقة ١٠٠٪',
    
    'confidence.q2.title': 'خوفك من الـ Re-injury مأثر على أدائك قد إيه؟',
    'confidence.q2.subtitle': 'هل القلق على الـ Ankle بيخليك Hold back وقت التمرين أو الماتشات؟',
    'confidence.fear.low': 'موقفني دايماً',
    'confidence.fear.high': 'مفيش خوف خالص',
    'confidence.next': 'متابعة',

    // Confidence slider labels (Used by JS)
    'confidence.level.1': 'مفيش ثقة خالص',
    'confidence.level.2': 'ثقة ضعيفة جداً',
    'confidence.level.3': 'ثقة قليلة',
    'confidence.level.4': 'أقل من المتوسط',
    'confidence.level.5': 'ثقة متوسطة',
    'confidence.level.6': 'ثقة معقولة',
    'confidence.level.7': 'ثقة كويسة',
    'confidence.level.8': 'ثقة عالية',
    'confidence.level.9': 'ثقة ممتازة',
    'confidence.level.10': 'ثقة ١٠٠٪',

    // Fear slider labels (Used by JS
