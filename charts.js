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
    'welcome.subtitle': 'فحص شامل للرياضيين. اكتشف مشاكل عدم الثبات، اختبر قوة وأداء الكاحل، واعرف طريقك للعودة بثقة.',
    'welcome.feature1.title': 'الفحص الذاتي',
    'welcome.feature1.desc': 'تاريخ الإصابة، الثقة والجاهزية النفسية',
    'welcome.feature2.title': 'اختبارات التحمل البدني',
    'welcome.feature2.desc': 'التوازن، التحمل، والقوة الانفجارية',
    'welcome.feature3.title': 'نتائج مخصصة لك',
    'welcome.feature3.desc': 'مستوى الثبات، نقاط الضعف، والخطوات العملية',
    'welcome.startBtn': 'ابدأ التقييم',
    'welcome.time': 'هياخد تقريباً ٥ دقايق',

    // ==========================================
    // Progress Labels
    // ==========================================
    'progress.phase1': 'المرحلة 1',
    'progress.phase2': 'المرحلة 2',
    'progress.results': 'النتائج',

    // ==========================================
    // Sport Selection
    // ==========================================
    'sport.title': 'إيه الرياضة الأساسية بتاعتك؟',
    'sport.subtitle': 'اختار الرياضة اللي بتلعبها كـ Main sport.',
    'sport.opt1.label': 'كرة القدم',
    'sport.opt2.label': 'كرة السلة',
    'sport.opt3.label': 'كرة الطائرة / كرة اليد',
    'sport.opt4.label': 'تنس / بادل',
    'sport.opt5.label': 'أخرى',

    // ==========================================
    // Phase 1 — Instability History
    // ==========================================
    'phase1.label': 'المرحلة الأولى — تاريخ عدم الثبات',

    // Q1 — Sprain Count
    'q1.title': 'جالك Ankle Sprain كام مرة؟',
    'q1.subtitle': 'احسب أي مرة حصل فيها التواء أو حسيت إن المفصل فلت منك (Giving way).',
    'q1.opt1.label': 'ولا مرة',
    'q1.opt1.desc': 'مفيش تاريخ لأي التواء',
    'q1.opt2.label': 'مرة واحدة',
    'q1.opt2.desc': 'حصلت مرة واحدة بس',
    'q1.opt3.label': '٢–٣ مرات',
    'q1.opt3.desc': 'أكتر من التواء على فترات',
    'q1.opt4.label': '٤ مرات أو أكتر',
    'q1.opt4.desc': 'إصابات متكررة (Recurrent)',

    // Q2 — Last Sprain (kept for reference; screen removed from flow)
    'q2.title': 'آخر مرة حصلك التواء في الكاحل أو حسيت إن الكاحل فلت منك كانت إمتى؟',
    'q2.subtitle': 'افتكر آخر مرة حسيت فيها بعدم ثبات.',
    'q2.opt1.label': 'من أكتر من سنة',
    'q2.opt1.desc': 'عدى أكتر من ١٢ شهر على آخر مرة',
    'q2.opt2.label': '٦–١٢ شهر',
    'q2.opt2.desc': 'خلال السنة اللي فاتت',
    'q2.opt3.label': '١–٦ شهور',
    'q2.opt3.desc': 'إصابة قريبة نسبياً',
    'q2.opt4.label': 'الشهر اللي فات',
    'q2.opt4.desc': 'حديثة — لسه في مرحلة التعافي',

    // Q3 — Giving Way
    'q3.title': 'كل قد إيه بتحس إن الكاحل بيخونك أو بيديّك إحساس إنه هيقع؟',
    'q3.subtitle': 'وقت التمرين، المشي على أرض مش مستوية، أو في العادي.',
    'q3.opt1.label': 'أبداً',
    'q3.opt1.desc': 'ثابت تماماً، مفيش أي مشكلة',
    'q3.opt2.label': 'نادر جداً',
    'q3.opt2.desc': 'بس في المواقف الصعبة أو وقت الإجهاد العالي',
    'q3.opt3.label': 'أحياناً',
    'q3.opt3.desc': 'وقت التمرين أو لو الأرض مش مستوية',
    'q3.opt4.label': 'كتير',
    'q3.opt4.desc': 'حتى في المشي العادي والأنشطة اليومية',

    // Q3_NEW — Post-Session Symptoms
    'q3_new.title': 'بتحس بأي ورم، وجع، أو تيبس بعد التمرين؟',
    'q3_new.subtitle': 'قيّم حالة الكاحل بعد أي مجهود أو تمرينة تقيلة.',
    'q3_new.opt1.label': 'مفيش خالص',
    'q3_new.opt1.desc': 'طبيعي جداً ومفيش أي مشكلة بعد التمرين',
    'q3_new.opt2.label': 'حاجة بسيطة',
    'q3_new.opt2.desc': 'تيبس خفيف تاني يوم الصبح بس بيفك بسرعة',
    'q3_new.opt3.label': 'متوسط ومزعج',
    'q3_new.opt3.desc': 'ورم أو وجع ملحوظ بياخد يوم بحاله عشان يروح',
    'q3_new.opt4.label': 'شديد ومستمر',
    'q3_new.opt4.desc': 'ورم مستمر بيمنعني أنزل التمرينة اللي بعدها',

    // ==========================================
    // Phase 1 — Psychological Confidence
    // ==========================================
    'confidence.label': 'المرحلة الأولى — الثقة في الحركة',
    'confidence.q1.title': 'مدى ثقتك في الكاحل أثناء تغيير الاتجاه، القفز، أو الهبوط؟',
    'confidence.q1.subtitle': 'فكر في الحركات المفاجئة والشدة العالية في رياضتك.',
    'confidence.slider.low': 'مفيش ثقة',
    'confidence.slider.high': 'ثقة ١٠٠٪',
    
    'confidence.q2.title': 'خوفك من تكرار الإصابة مأثر على أدائك قد إيه؟',
    'confidence.q2.subtitle': 'هل خوفك على الكاحل بيخليك تتراجع أو تقلل أداءك في التمرين أو الماتش؟',
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

    // Fear slider labels (Used by JS)
    'fear.level.1': 'مأثر عليا وموقفني دايماً',
    'fear.level.2': 'عائق كبير جداً',
    'fear.level.3': 'خوف ملحوظ',
    'fear.level.4': 'خوف واضح بيقلقني',
    'fear.level.5': 'تأثير متوسط',
    'fear.level.6': 'قلق بسيط',
    'fear.level.7': 'نادر لما بيشغلني',
    'fear.level.8': 'شبه مش موجود',
    'fear.level.9': 'تأثير لا يذكر',
    'fear.level.10': 'مفيش خوف خالص',

    // ==========================================
    // Phase 2 — Transition
    // ==========================================
    'phase2.transition.label': 'المرحلة 2',
    'phase2.transition.title': 'اختبارات التحمل البدني',
    'phase2.transition.desc': 'دلوقتي هنختبر القدرة الوظيفية الحقيقية للكاحل. هتعمل 3 اختبارات سريعة عشان نقيم التوازن، التحمل، والقوة الانفجارية.',
    'phase2.transition.start': 'ابدأ الاختبارات',

    // ==========================================
    // Balance Test
    // ==========================================
    'balance.label': 'المرحلة الثانية — التحكم في التوازن',
    'balance.title': 'Single-Leg Balance (عيون مقفولة)',
    'balance.purpose': 'عشان نقيم الـ Proprioception والتحكم العصبي العضلي.',
    'balance.instructions.title': 'التعليمات',
    'balance.step1': 'اقف على رجلك المصابة',
    'balance.step2': 'ارفع رجلك التانية من على الأرض',
    'balance.step3': 'غمّض عينك وخلي دراعك مرتاح.',
    'balance.step4': 'حاول تثبت لأطول فترة ممكنة (أعلى مدة ٣٠ ثانية)',
    'balance.step5': 'اضغط "فقدت توازني" أول ما تحس إنك فقدت التوازن.',
    'balance.timer.unit': 'ثانية',
    'balance.start': 'ابدأ المؤقت',
    'balance.stop': 'فقدت توازني',

    // ==========================================
    // Calf Raise Test
    // ==========================================
    'calf.label': 'المرحلة الثانية — تحمل عضلة السمانة',
    'calf.title': 'Single-Leg Calf Raise Endurance',
    'calf.purpose': 'قياس قوة تحمل السمانة (Plantar flexors) وقدرتها على امتصاص القوة.',
    'calf.instructions.title': 'التعليمات',
    'calf.step1': 'اقف على رجلك المصابة جنب حيطة عشان تسند للتوازن بس',
    'calf.step2': 'اطلع على مشط رجلك لأقصى ارتفاع تقدر عليه',
    'calf.step3': 'انزل تاني بتحكم',
    'calf.step4': 'دوس على الزرار تحت بعد كل عدة (Rep) كاملة',
    'calf.step5': 'وقف أول ما تحس إنك مش قادر تجيب المدى الحركي كامل',
    'calf.counter.label': 'Reps Completed',
    'calf.tapBtn': 'دوس هنا لكل عدة',
    'calf.doneBtn': 'خلصت — مش قادر أكمل',

    // ==========================================
    // Side Hop Test
    // ==========================================
    'sidehop.label': 'المرحلة الثانية — القدرة الانفجارية',
    'sidehop.title': 'Side Hop Test',
    'sidehop.purpose': 'تقييم القوة الانفجارية، التحكم الحركي، والثبات أثناء الحركات المتكررة.',
    'sidehop.instructions.title': 'التعليمات',
    'sidehop.step1': 'حط لزق أو حدد خط على الأرض بعرض ٣٠ سم تقريباً',
    'sidehop.step2': 'اقف على رجلك المصابة جنب الخط',
    'sidehop.step3': 'نط للجنب يمين ويسار فوق الخط بأسرع ما يمكن',
    'sidehop.step4': 'كمل لمدة ٣٠ ثانية وحافظ على التوازن والتحكم',
    'sidehop.step5': 'ركز إن الهبوط يكون خفيف وثابت في كل قفزة.',
    'sidehop.step6': 'قيم أدائك في الاختبار بصدق تحت',
    
    'sidehop.opt1.label': 'خلصته بسلاسة تامة',
    'sidehop.opt1.desc': '٣٠ ثانية كاملين بتحكم وإيقاع ثابت من غير وجع أو تردد.',
    'sidehop.opt2.label': 'خلصته مع انزعاج بسيط',
    'sidehop.opt2.desc': 'كملت الـ ٣٠ ثانية بس حسيت بعدم ثبات بسيط أو وجع خفيف في الآخر.',
    'sidehop.opt3.label': 'خلصته بصعوبة',
    'sidehop.opt3.desc': 'اضطريت أبطأ جداً أو أقف في النص بسبب عدم الثبات أو الوجع.',
    'sidehop.opt4.label': 'مقدرتش أكمله',
    'sidehop.opt4.desc': 'وقفت بدري بسبب الوجع، الخوف، أو إني فقدت التوازن خالص.',

    // ==========================================
    // Calculating
    // ==========================================
    'calculating.text': 'بنحلل النتائج بتاعتك…',

    // ==========================================
    // Results
    // ==========================================
    'results.header': 'نتائج التقييم',
    'results.scoreTotal': '/ 100',
    'results.acuteWarning.title': 'تنبيه مهم',
    'results.acuteWarning.text': 'بناءً على إجاباتك، قد تكون الإصابة ما زالت في المرحلة الحادة. يُفضّل مراجعة مختص قبل بدء التأهيل.',
    'results.insights.title': 'ماذا يعني هذا',
    'results.actionSteps.title': 'الخطوات القادمة',
    'results.cta.title': 'جاهز تبدأ النظام الكامل؟',
    'results.cta.button': 'احصل على الـ System ←',
    'results.retake': 'إعادة التقييم (Retake)',

    // ==========================================
    // CTA Text per Tier — unified conversion body
    // ==========================================
    'cta.severe': 'فيديوهات اليوتيوب مش هتعالج المشكلة دي، وممكن تزود الـ (Compensatory Patterns). عشان ترجع لرياضتك بأمان محتاج خطة تأهيل مبنية على تدرج علمي في الأحمال. الـ (Ankle Protocol) هو النظام الكامل اللي هياخدك خطوة بخطوة عشان تحل الفجوة دي وتمنع الإصابة إنها تتكرر.',
    'cta.moderate': 'فيديوهات اليوتيوب مش هتعالج المشكلة دي، وممكن تزود الـ (Compensatory Patterns). عشان ترجع لرياضتك بأمان محتاج خطة تأهيل مبنية على تدرج علمي في الأحمال. الـ (Ankle Protocol) هو النظام الكامل اللي هياخدك خطوة بخطوة عشان تحل الفجوة دي وتمنع الإصابة إنها تتكرر.',
    'cta.mild': 'فيديوهات اليوتيوب مش هتعالج المشكلة دي، وممكن تزود الـ (Compensatory Patterns). عشان ترجع لرياضتك بأمان محتاج خطة تأهيل مبنية على تدرج علمي في الأحمال. الـ (Ankle Protocol) هو النظام الكامل اللي هياخدك خطوة بخطوة عشان تحل الفجوة دي وتمنع الإصابة إنها تتكرر.',
    'cta.optimal': 'فيديوهات اليوتيوب مش هتعالج المشكلة دي، وممكن تزود الـ (Compensatory Patterns). عشان تفضل على هذا المستوى وتحمي نفسك على المدى الطويل، محتاج نظام (Maintenance Protocol) مبني علمياً. الـ (Ankle Protocol) هيضمن إن الكاحل يفضل على نفس المستوى ده تحت الضغط.',

    // ==========================================
    // Email Gateway
    // ==========================================
    'emailGate.title': 'النتيجة بتاعتك جاهزة!',
    'emailGate.desc': 'اكتب الـ Email بتاعك عشان تشوف التقرير المفصل لحالتك.',
    'emailGate.placeholder': 'البريد الإلكتروني',
    'emailGate.submit': 'عرض النتيجة',
    'emailGate.error': 'أدخل إيميل صحيح من فضلك',

    // ==========================================
    // Tier Labels
    // ==========================================
    'tier.severe.label': 'Severe Instability (عدم ثبات شديد)',
    'tier.severe.sublabel': 'High Risk (خطورة مرتفعة)',
    'tier.moderate.label': 'Moderate CAI (عدم ثبات مزمن خطورة متوسطة)',
    'tier.moderate.sublabel': 'Elevated Risk',
    'tier.mild.label': 'Mild Instability',
    'tier.mild.sublabel': 'Needs Monitoring',
    'tier.optimal.label': 'Optimal Baseline',
    'tier.optimal.sublabel': 'Low Risk',

    // ==========================================
    // Category Labels
    // ==========================================
    'cat.history': 'تاريخ الإصابة',
    'cat.confidence': 'الثقة',
    'cat.balance': 'التوازن',
    'cat.endurance': 'التحمل',
    'cat.power': 'القوة والانفجارية',

    // ==========================================
    // Insights per tier — short clinical diagnoses (2-3 sentences max)
    // ==========================================
    'insight.severe': 'امتصاص الصدمة (Force Absorption) وثبات الكاحل عندك متأثرين بشكل واضح. أي نشاط فيه تحميل أو احتكاك عالي يعتبر غير آمن حالياً، لأن الأربطة لسه معندهاش الـ (Motor Control) الكافي إنها تحمي وتثبت المفصل. التأخير في التأهيل بيزود الـ (Re-Injury Risk) وبيرسّخ الأنماط التعويضية الغلط.',

    'insight.moderate': 'الكاحل عندك بيعتمد على أنماط تعويضية (Compensatory Patterns) عشان يتعامل مع الحركة والتحميل. ده معناه إن الثبات الديناميكي (Dynamic Stability) متأثر، وتحت الضغط الحقيقي في اللعب الإصابة ممكن تحصل في أي لحظة. كل مرة المفصل بيفلت من غير تدخل، الـ (Neuromuscular Deficit) بيتعمق أكتر.',

    'insight.mild': 'فيه ضعف بسيط في الـ (Neuromuscular Timing) بتاع الكاحل. ممكن تحس إن الدنيا تمام في التمرين العادي، لكن مع الـ (Cutting) السريع أو أي (Landing) مفاجئ، الكاحل ممكن يخذلك. المرحلة دي أخطر مرحلة لأنك ممكن توقف التأهيل بدري وتتفاجأ بإصابة جديدة.',

    'insight.optimal': 'الكاحل عندك يملك مستوى جيد من الـ (Neuromuscular Control) و(Dynamic Stability). للحفاظ على هذا المستوى وحماية نفسك على المدى الطويل، تمارين الثبات لازم تفضل جزء ثابت من الإحماء. التراجع في هذه المرحلة غير محسوس في البداية لكن تداعياته تظهر تحت الضغط.',

    'insight.weakest': 'أكبر (Deficit) عندك موجود في {label} ({pct}٪)، وده المحور الأساسي اللي لازم يكون تركيزك عليه.',

    // ==========================================
    // Action Steps per tier
    // ==========================================
    'action.severe.1.title': 'Daily Balance Training',
    'action.severe.1.desc': 'اقف على رجلك المصابة لمدة دقيقتين كل يوم — عيونك مفتوحة في الأول، وبعدين أقفلها. ده بيرجع يبني الـ Proprioception اللي الـ Ankle فقده.',
    'action.severe.2.title': 'Controlled Calf Raises',
    'action.severe.2.desc': 'العب ٣ مجاميع × ٨ عدات Single-leg calf raise مع ثبات ٣ ثواني فوق. ركز على الـ Stability مش السرعة عشان تبني نظام امتصاص الصدمات.',
    'action.severe.3.title': 'Avoid Reactive Training — For Now',
    'action.severe.3.desc': 'ماتحاولش تعمل Cutting أو نط أو أي حركات Explosive لحد ما تقدر تقف على رجل واحدة لـ ٣٠+ ثانية بانتظام. ابني الأساس الأول.',
    
    'action.moderate.1.title': 'Unstable Surface Balance',
    'action.moderate.1.desc': 'اتمرن على الـ Balance على مخدة أو Foam pad — ٣ مجاميع × ٣٠ ثانية. ده هيعمل Challenge للـ Proprioception أكتر من الأرض الثابتة.',
    'action.moderate.2.title': 'Perturbation Training',
    'action.moderate.2.desc': 'وإنت واقف على رجل واحدة، خلي حد يزقك خفيف من كتفك أو وسطك. الـ Ankle لازم يتعلم يعمل React للقوة المفاجئة — مش بس يثبت.',
    'action.moderate.3.title': 'Low-Level Reactive Drills',
    'action.moderate.3.desc': 'ابتدأ بـ Hop-and-stick (نط واثبت). نط لقدام وبعدين للجنب. اثبت في الـ Landing ٣ ثواني من غير أي Wobble قبل ما تنط تاني.',
    
    'action.mild.1.title': 'Multi-Directional Hop Series',
    'action.mild.1.desc': 'ابدأ اعمل Single-leg hops في كل الاتجاهات — قدام، جنب، دايَجونال، وبدوران. كل Landing لازم يكون Controlled لمدة ثانيتين.',
    'action.mild.2.title': 'Sport-Specific Deceleration',
    'action.mild.2.desc': 'دخل تمارين الـ Cutting والوقوف المفاجئ بـ Intensity ٧٠٪. ركز على الـ Controlled Deceleration — دي أكتر لحظة الـ Ankle بيكون فيها Vulnerable.',
    'action.mild.3.title': 'The Box Drop Benchmark',
    'action.mild.3.desc': 'هل تقدر تعمل Single-leg landing من ارتفاع ٢٠ سم من غير أي Wobble؟ خلي ده الـ Benchmark بتاعك. لما تقدر تعمله ١٠/١٠ مرات، إنت كده جاهز.',
    
    'action.optimal.1.title': 'Maintain Reactive Training',
    'action.optimal.1.desc': 'خلي تمارين الـ Reactive balance في الإحماء بتاعك مرتين أو تلاتة في الأسبوع. ٥ دقايق كفاية عشان تحافظ على استجابة الـ Nervous system.',
    'action.optimal.2.title': 'High-Level Plyometrics',
    'action.optimal.2.desc': 'ادخل في تمارين بليومتريك أتقل زي الـ Depth jumps والـ Lateral bounds تحت ضغط الإرهاق. الهدف هنا الأداء تحت الضغط.',
    'action.optimal.3.title': 'Periodic Retesting',
    'action.optimal.3.desc': 'عيد الـ Assessment ده كل ٤ لـ ٦ أسابيع. إنك تلحق أي تراجع في المستوى بدري — قبل ما يتحول لإصابة — ده اللي بيميز الرياضي المحترف.'
  },

  // ------------------------------------------
  // Simple Getter
  // ------------------------------------------
  t(key) {
    return I18n.strings[key] || key;
  },

  // ------------------------------------------
  // Initialize (Replaces old multi-lang logic)
  // ------------------------------------------
  init() {
    // Force RTL direction for Arabic text flow
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';

    // Inject the mapped Egyptian/English strings directly into the DOM elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = this.t(key);
      
      // Handle input placeholders vs standard text elements
      if (el.tagName === 'INPUT' && el.type !== 'range') {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });
    
    // Completely hide the language toggle button from the UI
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.style.display = 'none';
    }
  }
};
