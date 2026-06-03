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
    'results.retake': 'إعادة التقييم (Retake)',

    // ==========================================
    // Section Titles (Results Page)
    // ==========================================
    'results.section.diagnosis': 'ماذا يعني هذا',
    'results.section.realityCheck': 'لماذا تفشل الحلول العامة',
    'results.section.blueprint': 'المسار التأهيلي',
    'results.section.cta': 'التقييم كشف المشكلة.. النظام هيحلها',

    // ==========================================
    // Phase Titles (Constant across all tiers)
    // ==========================================
    'results.phase1.title': 'Phase 1: Motor Control & Proprioception',
    'results.phase2.title': 'Phase 2: Dynamic Stability',
    'results.phase3.title': 'Phase 3: Force Absorption',

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
    // Section 1: Clinical Diagnosis per tier
    // ==========================================
    'diagnosis.severe': 'نتيجتك بتوضح إن عندك خلل واضح في الـ (Chronic Ankle Instability) وصل لمرحلة متقدمة. الأرقام بتقول إن الـ (Mechanoreceptors) — وهي الخلايا الحسية اللي جوا الأربطة المسؤولة إنها تقول للمخ الكاحل فين بالظبط في الفراغ — دي اتضررت بشكل كبير.\n\nالنتيجة العملية: الـ (Dynamic Joint Position Sense) عندك شبه مش شغال. ده معناه إن الكاحل بتاعك مش بيعرف يستجيب للأرض في الوقت المناسب — خصوصاً وقت الـ (Sudden Perturbation) زي لما رجلك تلمس الأرض بزاوية مش متوقعة. المشكلة دي مأثرة على الـ (Kinetic Chain) بالكامل لحد الركبة والفخذ، مش الكاحل بس.\n\nمن غير إصلاح الخلل ده على مستوى الـ (Neuromuscular Control)، أي حركة (Reactive) هتفضل بتعرضك لإصابة جديدة.',

    'diagnosis.moderate': 'نتيجتك بتوضح إن عندك (Chronic Ankle Instability) في المرحلة المتوسطة. الكاحل بتاعك مش مكسور ومش ضعيف بالمعنى التقليدي — المشكلة أعمق من كده.\n\nاللي بيحصل: الـ (Sensorimotor System) عندك بقى يعتمد على (Compensatory Patterns) بدل الاستجابة الطبيعية. يعني لما جسمك بيحس بعدم ثبات، بدل ما الكاحل نفسه يعمل الـ (Corrective Response)، العضلات الأكبر زي الـ (Peroneals) والـ (Hip Stabilizers) بتتدخل في وقت مش صح وبطريقة مش مظبوطة.\n\nالنتيجة: إنت ممكن تحس إنك تمام في التمرين العادي، بس في لحظات الـ (High-Velocity Deceleration) — زي الـ (Cutting) المفاجئ أو الـ (Landing) من نطة — الـ (Neuromuscular Timing) عندك متأخر بجزء من الثانية. والجزء ده كافي إن الكاحل يفلت.',

    'diagnosis.mild': 'نتيجتك بتقول إن عندك (Residual Deficit) بسيط في الـ (Chronic Ankle Instability). ده معناه إن الكاحل بتاعك اتعافى بنسبة كبيرة — بس مش بالكامل.\n\nالخلل اللي باقي هو في الـ (Neuromuscular Calibration) الدقيقة — تحديداً في الـ (Rate of Force Development) والـ (Anticipatory Postural Adjustments). ببساطة: الكاحل بتاعك شغال كويس في الظروف العادية، بس تحت ضغط الـ (Fatigue) أو في حركة مفاجئة مش متوقعة، سرعة الاستجابة بتاعته بتقل بدرجة كافية إنها تعرضك لـ (Micro-Trauma) أو التواء جديد.\n\nده بالظبط اللي الأبحاث بتسميه (The Final 10% Problem) — أصعب جزء في التأهيل لأنك بتحس إنك خلاص كويس.',

    'diagnosis.optimal': 'نتيجتك ممتازة. الـ (Neuromuscular Control)، الـ (Proprioceptive Accuracy)، والـ (Force Absorption Capacity) عندك كلهم في المعدل الطبيعي أو أعلى.\n\nده معناه إن الـ (Sensorimotor System) بتاعك شغال بكفاءة والكاحل بيستجيب للـ (Dynamic Perturbations) بشكل سليم.\n\nبس نقطة مهمة: الـ (Neuromuscular Adaptations) دي مش دائمة. من غير (Structured Maintenance)، الأبحاث أثبتت إن الـ (Proprioceptive Gains) بتبدأ تتراجع خلال ٦ لـ ٨ أسابيع.',

    // ==========================================
    // Section 2: Reality Check per tier
    // ==========================================
    'realityCheck.severe': 'لو فكرت تدور على تمارين أونلاين — هتلاقي ناس بتقولك "اعمل Calf Raises" أو "اقف على رجل واحدة على مخدة". المشكلة إن التمارين دي بتفترض إن الـ (Motor Control) عندك شغال أصلاً — وهو مش شغال.\n\nلما تعمل تمرين Balance من غير ما الـ (Neuromuscular Timing) يكون اتصلح الأول، جسمك بيلاقي طرق بديلة يثبت بيها — زي إنه يعتمد على الـ (Hip Strategy) بدل الـ (Ankle Strategy). النتيجة: إنت فاكر إنك بتتحسن، بس في الحقيقة جسمك بيبني (Compensatory Patterns) جديدة فوق الأنماط القديمة المكسورة.\n\nالتمارين العامة بتقوي العضلة. بس مشكلتك مش في القوة — مشكلتك في التوقيت.',

    'realityCheck.moderate': 'أغلب التمارين اللي هتلاقيها عشان "تقوي الكاحل" بتشتغل على الـ (Concentric Strengthening) — يعني بتبني قوة العضلة وهي بتنقبض. بس مشكلتك مش هنا.\n\nالخلل عندك في الـ (Eccentric Control) والـ (Reactive Stabilization) — يعني قدرة العضلة إنها تتحكم في الحركة وهي بتتمدد تحت حمل مفاجئ. ده بالظبط اللي بيحصل في لحظة الـ (Landing) أو الـ (Change of Direction).\n\nلو عملت تمارين Balance عادية أو حتى Calf Raises بأي عدد من التكرارات، إنت بتقوي الجزء اللي مش فيه مشكلة وبتسيب الجزء الحقيقي المأثر. أسوأ من كده — إنت بتدي نفسك إحساس كاذب بالأمان.',

    'realityCheck.mild': 'في المرحلة بتاعتك، الخطر مش إنك تعمل حاجة غلط — الخطر إنك توقف تأهيل بدري لأنك حاسس إنك كويس.\n\nالتمارين العامة اللي ممكن تلاقيها هتحافظلك على المستوى الحالي — بس مش هتسد الفجوة الأخيرة. الـ (Final Phase) من التأهيل محتاج نوع مختلف تماماً من التدرج: تمارين بتحاكي الضغط الحقيقي بتاع الملعب بـ (Progressive Overload) محسوب بدقة.\n\nالمشكلة: أي خطأ في الـ (Load Progression) في المرحلة دي — سواء أكتر من اللازم أو أقل من اللازم — بيضيع كل التقدم اللي عملته. المرحلة دي مفيهاش مساحة للتخمين.',

    'realityCheck.optimal': 'أكبر غلطة بيعملها الرياضي اللي وصل لمستواك هي إنه يفتكر إن القوة اللي عنده دي هتفضل. الـ (Proprioceptive System) محتاج تحفيز مستمر — من غيره، الـ (Neuromuscular Pathways) اللي اتبنت بتبدأ تضعف.\n\nالتمارين العشوائية أو الإحماء العام مش كافيين يحافظوا على المستوى ده. محتاج نظام (Maintenance) مبني على الـ (Periodization) الصح.',

    // ==========================================
    // Section 3: Rehab Blueprint phases per tier
    // ==========================================
    'blueprint.severe.phase1': 'في حالتك، المرحلة دي مش مجرد تمرين Balance — دي إعادة بناء كاملة للثقة بين الجهاز العصبي والأربطة المتضررة. الـ (Mechanoreceptors) محتاجة تتعلم من الأول إنها تقرأ إشارات الأرض وتبعت المعلومة للمخ في الوقت الصح.\n\nبس تنفيذ المرحلة دي بأمان محتاج (Load Management) دقيق جداً و(Progression Models) مبنية على الـ (Clinical Milestones) — مش على الإحساس. أي تسرع هنا بيرجعك للنقطة صفر.',

    'blueprint.severe.phase2': 'بعد ما الـ (Motor Control) يتأسس، المفصل محتاج يتعلم يثبت تحت ضغط متغير — مش بس وإنت واقف ثابت. المرحلة دي بتدخل حركة حقيقية وبتجبر الـ (Stabilizers) يشتغلوا في بيئة غير متوقعة.\n\nالمشكلة: لو الـ (Intensity) زادت قبل ما الأساس يكون جاهز فعلاً، الجسم هيلجأ للـ (Compensatory Patterns) تاني. عشان كده المرحلة دي محتاجة (Progression Criteria) واضحة ومحددة قبل الانتقال.',

    'blueprint.severe.phase3': 'المرحلة الأخيرة بتتعامل مع أخطر لحظة في أي رياضة: لحظة الهبوط وامتصاص القوة. الكاحل لازم يقدر يمتص (Ground Reaction Forces) بتوصل لـ ٣ أضعاف وزن الجسم — من غير ما يفلت.\n\nتنفيذ المرحلة دي من غير نظام (Progression) محسوب بيعني إنك بتعرض المفصل لحمل أكبر من اللي يستحمله. التخمين هنا مش بس بيضيع وقتك — بيعيد الإصابة.',

    'blueprint.moderate.phase1': 'في حالتك، المرحلة دي بتشتغل على تصحيح الـ (Compensatory Motor Patterns) اللي جسمك اتعلمها. الهدف مش بس إنك تثبت — الهدف إنك تثبت بالطريقة الصح، يعني الكاحل نفسه يقود الاستجابة مش العضلات الأكبر.\n\nبس إعادة برمجة الـ (Motor Patterns) دي محتاجة تدرج دقيق في الـ (Load Management) وإن كل تمرين يكون مبني على (Progression Models) واضحة — مش مجرد "زود الصعوبة لما تحس إنك جاهز".',

    'blueprint.moderate.phase2': 'بعد ما الاستجابة الصح ترجع، المفصل محتاج يتعرض لضغط ديناميكي حقيقي — حركات فيها تغيير اتجاه، تباطؤ مفاجئ، وهبوط من ارتفاعات مختلفة. المرحلة دي بتعيد بناء الـ (Reactive Stabilization) اللي بيحميك في الملعب.\n\nلو الـ (Progression) هنا مش مظبوط، جسمك هيرجع يعتمد على نفس الأنماط التعويضية القديمة. عشان كده المرحلة دي لازم تتبنى على (Progression Criteria) مش على الإحساس.',

    'blueprint.moderate.phase3': 'المرحلة دي بتأهلك لامتصاص القوة الحقيقية — الـ (Ground Reaction Forces) اللي بتحصل في كل نطة وكل هبوط. الكاحل لازم يقدر يتعامل مع الحمل ده من غير ما يلجأ لأي (Compensation).\n\nالتنفيذ الآمن للمرحلة دي مبني على (Load Progression) محسوب ومبني على أرقام — مش على "جرب وشوف". أي حمل زيادة عن اللازم في التوقيت الغلط بيرجعك خطوة لورا.',

    'blueprint.mild.phase1': 'في حالتك، المرحلة دي هي (Fine-Tuning) للجهاز العصبي — مش إعادة بناء. الـ (Proprioceptive System) عندك شغال بنسبة كبيرة، بس فيه نقاط دقيقة محتاجة ضبط عشان تقفل الفجوة الأخيرة وتمنع الـ (Micro-Trauma) المتكرر.\n\nبس حتى الـ (Fine-Tuning) ده محتاج (Load Management) محسوب و(Progression Models) مبنية على معايير أداء فعلية — لأن أي زيادة مش محسوبة في المرحلة دي بتقلب من تحسين لإصابة.',

    'blueprint.mild.phase2': 'المرحلة دي بتضيف الضغط الديناميكي اللي بيحاكي الملعب فعلاً — مش مجرد تمارين Balance. الهدف إن الكاحل يثبت تلقائياً في حركات مفاجئة ومتغيرة، زي بالظبط اللي بيحصل في الماتش.\n\nالمشكلة: في المرحلة بتاعتك بالذات، الخط بين التحسن والإصابة رفيع جداً. عشان كده الـ (Progression) لازم يكون مبني على (Clinical Criteria) مش على إحساسك إنك "جاهز".',

    'blueprint.mild.phase3': 'المرحلة الأخيرة بتأهلك لامتصاص القوة الكاملة — يعني الـ (Landing)، الـ (Deceleration)، والـ (Plyometric Loading) بالشكل اللي يحاكي الضغط الحقيقي بتاع رياضتك. دي بالظبط اللي بتحدد لو إنت فعلاً جاهز تنزل الملعب ولا لسه.\n\nالتدرج في المرحلة دي محتاج (Progression Models) مبنية على أرقام الأداء الفعلية — وأي تخمين في الحمل أو التوقيت معناه إنك ممكن ترجع تاني للنقطة اللي فاتت.',

    'blueprint.optimal.phase1': 'حتى مع مستواك الممتاز، الـ (Proprioceptive System) محتاج تحفيز دوري عشان الـ (Neural Pathways) تفضل شغالة بنفس الكفاءة. من غير ده، التراجع بيحصل بشكل بطيء ومش ملحوظ — لحد ما الإصابة تيجي.\n\nالحفاظ على المستوى ده محتاج (Maintenance Progression) مبني على (Periodization) — مش مجرد تكرار لنفس التمارين. النظام لازم يكون متغير ومحسوب.',

    'blueprint.optimal.phase2': 'الحفاظ على الـ (Dynamic Stability) عندك محتاج تعرض مستمر لمواقف حركية غير متوقعة. التكرار في نفس التمارين بيخلي الجهاز العصبي يتعود ويفقد الاستجابة الحقيقية.\n\nالنظام الصح لازم يوفرلك (Variation) مبنية على (Progression Models) عشان الـ (Reactive Stability) تفضل حادة ومش بتتراجع.',

    'blueprint.optimal.phase3': 'الحفاظ على قدرتك على امتصاص القوة محتاج تدريب (Plyometric) دوري بأحمال مدروسة. المستوى اللي إنت فيه مش بيتحافظ عليه بالإحماء العادي — محتاج (Structured Loading) يفضل يتحدى الجهاز.\n\nمن غير نظام (Maintenance) واضح، الأبحاث بتقول إن الـ (Force Absorption Capacity) بتبدأ تقل خلال أسابيع.',

    // ==========================================
    // CTA Text per Tier
    // ==========================================
    'cta.severe': 'التقييم ده حدد بالظبط فين الخلل في الـ (Neuromuscular Control) بتاعك. بس التمارين العامة مش هتعرف توصلك من النقطة دي للنقطة اللي تقدر فيها تنزل الملعب بأمان — لأن المسافة بين حالتك الحالية والـ (Plyometric Readiness) كبيرة ومحتاجة بناء منهجي مش تخمين.\n\nالـ (Armor Protocol) هو النظام الوحيد اللي بيديك الـ (Day-by-Day Progression Models) المبنية على الـ (Clinical Milestones) — كل يوم محسوب بالظبط: إيه التمرين، كام تكرار، بأي حمل، وإمتى تنتقل للمرحلة اللي بعدها. من غير النظام ده، كل محاولة تأهيل هتفضل تبني على أساس مكسور.',

    'cta.moderate': 'التقييم كشف إن عندك (Compensatory Movement Patterns) بتشتغل تحت السطح ومأثرة على الـ (Kinetic Chain) كلها. التمارين اللي على النت ممكن تقوي العضلة، بس مش هتعرف تصحح الـ (Motor Pattern) اللي جسمك اتعلمه غلط.\n\nالـ (Armor Protocol) بيديك الـ (Corrective Progression) اللي بيشتغل على المستوى اللي فيه المشكلة فعلاً — مش بس مستوى القوة. كل مرحلة فيها الـ (Load Management) والـ (Progression Criteria) المحددة اللي بتضمن إنك بتتحرك صح قبل ما تتحرك أسرع.',

    'cta.mild': 'الفجوة بين وضعك الحالي والـ (Full Return to Sport Readiness) بسيطة — بس هي بالظبط الفجوة اللي بتتسبب في الإصابة اللي بعدها. التقييم أثبت إن الـ (Neuromuscular Calibration) الدقيقة لسه فيها نقص مش واضح غير تحت الضغط.\n\nالـ (Armor Protocol) بيديك الـ (Final-Phase Progression Models) اللي بتسد الفجوة دي بشكل آمن ومحسوب — لحد ما توصل لنقطة الـ (Plyometric Readiness) الكاملة. من غيره، هتفضل في المنطقة اللي فيها الإصابة مسألة وقت.',

    'cta.optimal': 'أرقامك ممتازة. بس الأبحاث بتقول إن الـ (Neuromuscular Performance) بيبدأ يتراجع في خلال ٦ لـ ٨ أسابيع من غير (Structured Maintenance). الرياضي اللي بيحافظ على المستوى ده مش بيعمل كده بالصدفة — بيعمله بنظام.\n\nالـ (Armor Protocol) فيه الـ (Maintenance Progression) اللي بيخلي الـ (Proprioceptive System) والـ (Reactive Stability) بتوعك شغالين بنفس الكفاءة — عشان متتفاجئش بإصابة بعد ما كنت فاكر إنك محمي.'
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
