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
    'cta.severe': 'الكاحل بتاعك محتاج تدخل دلوقتي. برنامج الكاحل هيبدأ معاك خطوة بخطوة — من أول تقوية الثبات لحد ما ترجع الملعب بثقة كاملة. كل يوم بتأخره بيزود خطر إنك تتأذى تاني.',
    'cta.moderate': 'الكاحل بتاعك عنده مشاكل مخفية — ولو مشتغلتش عليها دلوقتي، الإصابات هتفضل تتكرر. البرنامج هيشتغل على النقاط الضعيفة اللي التقييم كشفها، خطوة بخطوة، لحد ما تبقى جاهز تنزل الملعب بثقة.',
    'cta.mild': 'أنت قريب جداً. بس الفرق بين إنك تبقى كويس وإنك تبقى جاهز فعلاً هو اللي بيحميك من الإصابة الجاية. البرنامج هيوصلك للمستوى ده من غير تردد.',
    'cta.optimal': 'أرقامك ممتازة — بس الرياضي الذكي مش بيوقف هنا. البرنامج فيه خطة صيانة هتخلي الكاحل بتاعك يفضل قوي وثابت ويحميك على المدى الطويل.',

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
    'tier.severe.label': 'Severe Instability — عدم ثبات شديد',
    'tier.severe.sublabel': 'خطورة عالية',
    'tier.moderate.label': 'Moderate Instability — عدم ثبات متوسط',
    'tier.moderate.sublabel': 'خطورة متوسطة',
    'tier.mild.label': 'Mild Instability — عدم ثبات خفيف',
    'tier.mild.sublabel': 'يحتاج متابعة',
    'tier.optimal.label': 'Optimal — ثبات ممتاز',
    'tier.optimal.sublabel': 'خطورة منخفضة',

    // ==========================================
    // Category Labels
    // ==========================================
    'cat.history': 'تاريخ الإصابة',
    'cat.confidence': 'الثقة النفسية',
    'cat.balance': 'التوازن',
    'cat.endurance': 'التحمل',
    'cat.power': 'القوة والسرعة',

    // ==========================================
    // Insights per tier
    // ==========================================
    'insight.severe': 'الكاحل بتاعك دلوقتي مش ثابت كفاية إنك ترجع تلعب بأمان.\n\nالتوازن ضعيف، والقوة مش كافية، والكاحل بيفلت منك كتير. ده معناه إن جسمك لسه مش جاهز يحميك وقت الحركات السريعة.\n\nلو رجعت الملعب دلوقتي من غير تأهيل، خطر الإصابة تاني عالي جداً. لازم تبدأ من الأساس.',

    'insight.moderate': 'الكاحل بتاعك اتحسن، بس لسه مش جاهز للضغط الحقيقي.\n\nفي الجري العادي ممكن تحس إنك تمام، بس وقت الماتشات — وقت التغيير السريع في الاتجاه أو الهبوط المفاجئ — الكاحل ممكن يخونك.\n\nكل مرة يفلت فيها بتزود المشكلة. لازم تشتغل على تقويته دلوقتي.',

    'insight.mild': 'أنت قريب جداً من الجاهزية الكاملة، بس في نقط بسيطة ممكن تأذيك وقت الضغط.\n\nمستواك كويس في التمرين العادي، بس لما التعب يزيد وقت المباريات، الفرق بين "كويس" و"جاهز" بيبان.\n\nالمرحلة دي أخطر مرحلة — لأنك ممكن تحس إنك تمام وتوقف التأهيل بدري.',

    'insight.optimal': 'الكاحل بتاعك ثابت وقوي وجاهز. أرقامك ممتازة في كل الاختبارات.\n\nبس الرياضي الذكي مش بيوقف هنا — عشان تفضل في المستوى ده وتحمي نفسك على المدى الطويل، لازم تخلي تمارين التوازن والثبات جزء من إحماءك.\n\nاشتغل على الكاحل باستمرار حتى لو حاسس إنك مية المية.',

    'insight.weakest': '\n\nأكبر ضعف عندك موجود في {label} ({pct}٪). ده المفروض يكون تركيزك الأساسي الفترة الجاية.',

    // ==========================================
    // Action Steps per tier
    // ==========================================
    'action.severe.1.title': 'تمرين التوازن اليومي',
    'action.severe.1.desc': 'اقف على رجلك المصابة دقيقتين كل يوم — عيونك مفتوحة في الأول، وبعدين أقفلها. ده بيرجع يبني حس الكاحل للأرض اللي بيفقده بعد الإصابة.',
    'action.severe.2.title': 'Calf Raises بتحكم',
    'action.severe.2.desc': 'اعمل ٣ مجاميع من ٨ عدات Calf Raise على رجل واحدة مع ثبات ٣ ثواني فوق. ركز على الثبات مش السرعة — ده بيبني قدرة الرجل على تحمل الثقل.',
    'action.severe.3.title': 'ماتنطش وماتقطعش دلوقتي',
    'action.severe.3.desc': 'ماتحاولش تعمل حركات انفجارية أو تغيير اتجاه سريع لحد ما تقدر تقف على رجل واحدة ٣٠ ثانية بثبات. ابني الأساس الأول.',

    'action.moderate.1.title': 'التوازن على سطح مش ثابت',
    'action.moderate.1.desc': 'اتمرن على التوازن فوق مخدة أو إسفنجة — ٣ مجاميع × ٣٠ ثانية. ده بيضغط على حس الكاحل أكتر من الأرض الثابتة وبيجهزه للأرض الحقيقية.',
    'action.moderate.2.title': 'تدريب ردود الفعل',
    'action.moderate.2.desc': 'وإنت واقف على رجل واحدة، خلي حد يزقك خفيف. الكاحل لازم يتعلم يتعامل مع الدفشة المفاجئة — مش بس يثبت على أرض ثابتة.',
    'action.moderate.3.title': 'نط واثبت',
    'action.moderate.3.desc': 'ابدأ تنط لقدام وللجنب على رجل واحدة، واثبت في الهبوط ٣ ثواني من غير ما تتزعزع قبل ما تنط تاني.',

    'action.mild.1.title': 'القفز في كل الاتجاهات',
    'action.mild.1.desc': 'ابدأ تنط على رجل واحدة قدام وجنب ودياجونال. كل هبوط لازم يكون ثابت لمدة ثانيتين.',
    'action.mild.2.title': 'تدريب التوقف المفاجئ والهبوط',
    'action.mild.2.desc': 'ادخل تمارين تغيير الاتجاه والوقوف المفاجئ بشدة متوسطة. ركز على الهبوط المضبوط — دي أكتر لحظة الكاحل بيكون فيها ضعيف.',
    'action.mild.3.title': 'اختبار الهبوط من ارتفاع',
    'action.mild.3.desc': 'هل تقدر تنزل من ارتفاع ٢٠ سم على رجل واحدة من غير ما تتزعزع؟ لما تعمله ١٠ من ١٠ مرات بثبات كامل، إنت كده جاهز فعلاً.',

    'action.optimal.1.title': 'حافظ على تمارين ردود الفعل',
    'action.optimal.1.desc': 'خلي تمارين التوازن التفاعلي في إحماءك مرتين أو تلاتة في الأسبوع. ٥ دقايق بتكفي عشان تحافظ على استجابة الكاحل.',
    'action.optimal.2.title': 'تمارين القفز المتقدمة',
    'action.optimal.2.desc': 'ادخل تمارين قفز أصعب زي النزول من ارتفاع والقفز الجانبي تحت ضغط التعب. الهدف إنك تؤدي كويس حتى وإنت تعبان.',
    'action.optimal.3.title': 'اعمل التقييم من جديد كل فترة',
    'action.optimal.3.desc': 'عيد التقييم ده كل ٤ لـ ٦ أسابيع. إنك تلاقي أي تراجع بدري — قبل ما يتحول لإصابة — ده اللي بيميز الرياضي الذكي.'
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
