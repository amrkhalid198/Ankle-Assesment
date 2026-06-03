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
    'phase2.transition.label': 'Phase 2',
    'phase2.transition.title': 'Physical Stress Tests',
    'phase2.transition.desc': 'دلوقتي هنختبر الـ Functional Capacity الحقيقية للـ Ankle. هتعمل ٣ اختبارات سريعة عشان نقيم الـ Balance، الـ Endurance، والـ Power.',
    'phase2.transition.start': 'ابدأ الاختبارات',

    // ==========================================
    // Balance Test
    // ==========================================
    'balance.label': 'Phase 2 — Balance Control',
    'balance.title': 'Single-Leg Balance (عيون مقفولة)',
    'balance.purpose': 'عشان نقيم الـ Proprioception والتحكم العصبي العضلي.',
    'balance.instructions.title': 'التعليمات',
    'balance.step1': 'اقف على رجلك المصابة',
    'balance.step2': 'ارفع رجلك التانية من على الأرض',
    'balance.step3': 'غمض عينك وسيب دراعك Relaxed',
    'balance.step4': 'حاول تثبت لأطول فترة ممكنة (الماكسيموم ٣٠ ثانية)',
    'balance.step5': 'دوس "فقدت توازني" أول ما تفقد الـ Balance',
    'balance.timer.unit': 'ثانية',
    'balance.start': 'ابدأ الـ Timer',
    'balance.stop': 'فقدت توازني',

    // ==========================================
    // Calf Raise Test
    // ==========================================
    'calf.label': 'Phase 2 — Calf Endurance',
    'calf.title': 'Single-Leg Calf Raise Endurance',
    'calf.purpose': 'قياس قوة تحمل السمانة (Plantar flexors) وقدرتها على امتصاص الـ Force.',
    'calf.instructions.title': 'التعليمات',
    'calf.step1': 'اقف على رجلك المصابة جنب حيطة عشان تسند خفيف للـ Balance بس',
    'calf.step2': 'اطلع على مشط رجلك لأقصى ارتفاع تقدر عليه',
    'calf.step3': 'انزل تاني بـ Control',
    'calf.step4': 'دوس على الزرار تحت بعد كل عدة (Rep) كاملة',
    'calf.step5': 'وقف أول ما تحس إنك مش قادر تجيب الـ Full Range',
    'calf.counter.label': 'Reps Completed',
    'calf.tapBtn': 'دوس هنا لكل عدة',
    'calf.doneBtn': 'خلصت — مش قادر أكمل',

    // ==========================================
    // Side Hop Test
    // ==========================================
    'sidehop.label': 'Phase 2 — Power & Explosiveness',
    'sidehop.title': 'Side Hop Test',
    'sidehop.purpose': 'تقييم الـ Explosive Power، الـ Dynamic Control، والـ Stability وقت الحركات المتكررة.',
    'sidehop.instructions.title': 'التعليمات',
    'sidehop.step1': 'حط لزق أو حدد خط على الأرض بعرض ٣٠ سم تقريباً',
    'sidehop.step2': 'اقف على رجلك المصابة جنب الخط',
    'sidehop.step3': 'نط للجنب يمين ويسار فوق الخط بأسرع ما يمكن',
    'sidehop.step4': 'كمل لمدة ٣٠ ثانية وحافظ على الـ Control والـ Balance',
    'sidehop.step5': 'ركز إن الـ Landing بتاعك يكون خفيف وStable في كل نطة',
    'sidehop.step6': 'قيم أدائك في الاختبار بصدق تحت',
    
    'sidehop.opt1.label': 'خلصته بسلاسة تامة',
    'sidehop.opt1.desc': '٣٠ ثانية كاملين بـ Control وإيقاع ثابت من غير وجع أو تردد.',
    'sidehop.opt2.label': 'خلصته مع انزعاج بسيط',
    'sidehop.opt2.desc': 'كملت الـ ٣٠ ثانية بس حسيت بـ Mild Instability أو وجع خفيف في الآخر.',
    'sidehop.opt3.label': 'خلصته بالعافية',
    'sidehop.opt3.desc': 'اضطريت أبطأ جداً أو أقف في النص بسبب الـ Instability أو الوجع.',
    'sidehop.opt4.label': 'مقدرتش أكمله',
    'sidehop.opt4.desc': 'وقفت بدري بسبب الوجع، الخوف، أو إني فقدت التوازن خالص.',

    // ==========================================
    // Calculating
    // ==========================================
    'calculating.text': 'بنحلل الـ Results بتاعتك…',

    // ==========================================
    // Results
    // ==========================================
    'results.header': 'نتائج التقييم',
    'results.scoreTotal': '/ ١٠٠',
    'results.acuteWarning.title': 'تنبيه مهم',
    'results.acuteWarning.text': 'بناءً على إجاباتك، ممكن تكون إصابتك لسه في الـ Acute Phase. بننصحك تراجع دكتور أو أخصائي تأهيل قبل ما تبدأ أي Rehab Protocol.',
    'results.insights.title': 'ماذا يعني هذا',
    'results.actionSteps.title': 'الـ Next Steps',
    'results.cta.title': 'جاهز تبدأ الـ System الكامل؟',
    'results.cta.button': 'احصل على الـ System ←',
    'results.retake': 'إعادة التقييم (Retake)',

    // ==========================================
    // CTA Text per Tier
    // ==========================================
    'cta.severe': 'الالـ Ankle بتاعك محتاج تدخل سريع. برنامج الكاحل (Ankle Protocol) هيبدأ معاك خطوة بخطوة — من تقوية الثبات الأساسي (Basic Stability) لحد الرجوع للملعب بثقة كاملة (Return to Sport). كل يوم بتأخر فيه التأهيل (Rehab) بيزود خطر الإصابة من جديد (Re-Injury Risk).',
    'cta.moderate': 'الكاحل بتاعك عنده مشاكل مخفية (Hidden Deficits)، ولو ماتعالجتش دلوقتي الإصابات هتفضل تتكرر. برنامج الكاحل (Ankle Protocol) هيشتغل على نقاط الضعف (Weak Points) اللي التقييم كشفها — خطوة بخطوة لحد ما توصل للجاهزية الكاملة للرجوع للملعب (Full Clearance).',
    'cta.mild': 'أنت قريب جدًا. بس الفرق بين إنك تبقى \"كويس\" وإنك تبقى \"جاهز فعلاً\" (Game Ready) هو اللي بيحميك من الإصابة الجاية. برنامج الكاحل (Ankle Protocol) هيوصلك للمستوى اللي تقدر تنزل الملعب فيه بثقة ومن غير تردد.',
    'cta.optimal': 'أرقامك ممتازة — بس الرياضي الذكي مش بيكتفي بكده. برنامج الكاحل (Ankle Protocol) فيه الـ Maintenance Program اللي هيخلي الكاحل بتاعك يفضل بالقوة والثبات ده ويحميك على المدى الطويل.',

    // ==========================================
    // Email Gateway
    // ==========================================
    'emailGate.title': 'النتيجة بتاعتك جاهزة!',
    'emailGate.desc': 'اكتب الـ Email بتاعك عشان تشوف الـ Report المفصل لحالتك.',
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
    // Insights per tier
    // ==========================================
    'insight.severe': 'الكاحل بتاعك دلوقتي مش ثابت كفاية إنك ترجع تلعب بأمان.\\n\\nالتوازن ضعيف، والقوة مش كافية، والمفصل بيفلت منك كتير. ده معناه إن جسمك لسه مش جاهز يحميك وقت الحركات السريعة.\\n\\nلو رجعت الملعب دلوقتي من غير تأهيل — فرصة الإصابة تاني عالية جداً. لازم تبدأ من الأساس.',
    
    'insight.moderate': 'الكاحل بتاعك اتحسن بس لسه مش جاهز للضغط الحقيقي.\\n\\nفي الجري العادي والتمرين ممكن تحس إنك تمام، بس وقت الماتشات — الـ Cutting السريع والهبوط المفاجئ — الكاحل ممكن يخونك.\\n\\nالمشكلة إن كل مرة المفصل بيفلت، الموضوع بيسوء أكتر. لازم تشتغل على الثبات الديناميكي دلوقتي.',
    
    'insight.mild': 'إنت قريب جداً من الجاهزية الكاملة، بس فيه نقط بسيطة ممكن تأذيك تحت الضغط.\\n\\nمستواك كويس في التمرين العادي، لكن لما الإرهاق بيزيد في الماتشات، الفرق بين \"كويس\" و\"جاهز\" بيبان.\\n\\nالمرحلة دي أخطر مرحلة — لإنك ممكن تحس إنك خلاص تمام وتوقف تأهيل بدري.',
    
    'insight.optimal': 'الكاحل بتاعك ثابت وقوي وجاهز. أرقامك ممتازة في كل الاختبارات.\\n\\nبس الرياضي الذكي مش بيوقف هنا — عشان تفضل في الليفل ده وتحمي نفسك على المدى الطويل، لازم تخلي تمارين الثبات جزء ثابت من الإحماء بتاعك.\\n\\nكمّل شغل على الكاحل حتى لو حاسس إنك مية المية.',
    
    'insight.weakest': '\\n\\nأكبر Deficit عندك موجود في {label} ({pct}٪). المفروض ده يكون تركيزك الأساسي الفتره الجاية.',

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
    return this.strings[key] || key;
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
