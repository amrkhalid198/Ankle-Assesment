// ============================================
// Armor Protocol Assessment — Application Controller
// Manages clinical gateway branching, core navigation, 
// timer/counter mechanics, and results rendering.
// Hardcoded for Egyptian Arabic / English mix.
// ============================================

(function () {
  'use strict';

  // ============================================
  // State
  // ============================================
  const state = {
    currentStep: 0,
    onLegalScreen: false,
    answers: {},
    timer: null,
    counter: null,
    results: null
  };

  // Screen ids in core testing step order (Gateway screens handled separately)
  const SCREENS = [
    'screen-welcome',      // 0
    'screen-sport',        // 1 (Green light drops users here)
    'screen-q1',           // 2
    'screen-q2',           // 3
    'screen-q3',           // 4
    'screen-confidence',   // 5
    'screen-phase2',       // 6
    'screen-balance',      // 7
    'screen-calfraise',    // 8
    'screen-sidehop',      // 9
    'screen-email-gate',   // 10
    'screen-results'       // 11
  ];

  const PHASE_1_END   = 5;
  const PHASE_2_END   = 9;
  const EMAIL_GATE    = 10;
  const RESULTS_STEP  = 11;

  // ============================================
  // Helpers
  // ============================================
  const $ = (id) => document.getElementById(id);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ============================================
  // Core Navigation (Main Test Flow)
  // ============================================
  function goToStep(step) {
    const prev = $(SCREENS[state.currentStep]);
    const next = $(SCREENS[step]);

    // Slide previous screen out
    if (prev) {
      prev.classList.remove('active');
      prev.classList.add('exit-left');
      setTimeout(() => prev.classList.remove('exit-left'), 650);
    }

    state.currentStep = step;

    // Slide next screen in
    if (next) {
      setTimeout(() => {
        next.classList.remove('hidden'); // Safety catch
        next.classList.add('active');
        next.scrollTop = 0;
      }, 50);
    }

    // Reset physical test UI whenever we (re)visit those screens
    resetTestScreen(step);

    updateProgress();

    // Show progress bar after entering the main test (Step 1)
    if (step > 0) $('progressContainer').style.display = 'block';
    updateBackButton();
  }

  // Reset a physical test screen to its initial state so it can be retaken
  function resetTestScreen(step) {
    const BALANCE_STEP   = 7;
    const CALFRAISE_STEP = 8;

    if (step === BALANCE_STEP) {
      // Stop any running timer first
      if (state.timer) {
        state.timer.stop();
        state.timer = null;
      }
      // Reset timer ring
      const CIRC = 2 * Math.PI * 90;
      const ring = $('timerRingFill');
      if (ring) {
        ring.style.strokeDasharray  = CIRC;
        ring.style.strokeDashoffset = CIRC;
      }
      // Reset display and buttons
      var tv = $('timerValue');
      if (tv) tv.textContent = '0.0';
      var bs = $('balanceStart');
      var bstop = $('balanceStop');
      if (bs)    bs.style.display   = 'block';
      if (bstop) bstop.style.display = 'none';
      // Clear the stored answer so a fresh result is recorded
      delete state.answers.balance_hold_raw;
    }

    if (step === CALFRAISE_STEP) {
      // Reset counter
      if (state.counter) {
        state.counter.reset();
      }
      var cc = $('calfCount');
      if (cc) cc.textContent = '0';
      // Clear the stored answer
      delete state.answers.calf_raises_raw;
    }
  }

  function nextStep() {
    if (state.currentStep < RESULTS_STEP) goToStep(state.currentStep + 1);
  }

  function updateProgress() {
    const s = state.currentStep;
    const pct = s === 0 ? 0 : (s / (SCREENS.length - 1)) * 100;
    $('progressFill').style.width = pct + '%';

    const p1 = $('phaseLabel1');
    const p2 = $('phaseLabel2');
    const pr = $('phaseLabelR');

    p1.className = 'progress-phase';
    p2.className = 'progress-phase';
    pr.className = 'progress-phase';

    if (s <= PHASE_1_END) {
      p1.classList.add('active');
    } else if (s <= PHASE_2_END) {
      p1.classList.add('completed');
      p2.classList.add('active');
    } else {
      p1.classList.add('completed');
      p2.classList.add('completed');
      pr.classList.add('active');
    }
  }

  // ============================================
  // Clinical Gateway Flow (Armor Protocol)
  // ============================================
  // Track current gateway screen for back navigation
  var currentGatewayScreen = null;

  function gateNavigate(currentId, nextId) {
    const current = $(currentId);
    const next = $(nextId);
    
    if (current) {
      current.classList.remove('active');
      current.classList.add('hidden');
    }
    if (next) {
      currentGatewayScreen = nextId;
      next.classList.remove('hidden');
      setTimeout(() => next.classList.add('active'), 50);
    } else {
      currentGatewayScreen = null;
    }
  }

  function setupClinicalGate() {
    // Buttons & Inputs
    const btnLegalNext = $('btn-legal-next');
    const legalCheckbox = $('legal-checkbox');
    const timelineRadios = document.querySelectorAll('input[name="timeline"]');
    const btnTriageSubmit = $('btn-triage-submit');
    const btnStartTests = $('btn-start-tests');

    // Intercept initial Welcome Screen "Start" button
    $('startBtn').addEventListener('click', () => {
      state.onLegalScreen = true;
      currentGatewayScreen = null; // legal uses onLegalScreen flag, not gateway tracker
      gateNavigate('screen-welcome', 'screen-legal');
      updateBackButton();
    });

    // Phase 1: Legal Gateway
    if (legalCheckbox) {
      legalCheckbox.addEventListener('change', (e) => {
        btnLegalNext.disabled = !e.target.checked;
      });
    }
    
    if (btnLegalNext) {
      btnLegalNext.addEventListener('click', () => {
        state.onLegalScreen = false;
        currentGatewayScreen = null;
        gateNavigate('screen-legal', 'screen-timeline');
      });
    }

    // Phase 2: Timeline Filter
    timelineRadios.forEach(radio => {
      radio.addEventListener('change', (e) => {
        const val = e.target.value;
        if (val === 'acute') {
          // < 1 Month -> Hard Stop
          gateNavigate('screen-timeline', 'screen-hard-stop');
        } else if (val === 'chronic') {
          // > 3 Months -> Skip Triage, Green Light
          gateNavigate('screen-timeline', 'screen-green-light');
        } else if (val === 'sub-acute') {
          // 1 to 3 Months -> Ask Triage Questions
          gateNavigate('screen-timeline', 'screen-triage');
        }
      });
    });

    // Phase 3 & 4: Triage Submission Logic
    if (btnTriageSubmit) {
      btnTriageSubmit.addEventListener('click', () => {
        const q1 = document.querySelector('input[name="q1"]:checked');
        const q2 = document.querySelector('input[name="q2"]:checked');
        const q3 = document.querySelector('input[name="q3"]:checked');

        // Validation
        if (!q1 || !q2 || !q3) {
          alert("Please answer all questions before proceeding. / لازم تجاوب على كل الأسئلة الأول.");
          return;
        }

        // Branching: Any "Yes" -> Hard Stop. All "No" -> Green Light.
        if (q1.value === 'yes' || q2.value === 'yes' || q3.value === 'yes') {
          gateNavigate('screen-triage', 'screen-hard-stop');
        } else {
          gateNavigate('screen-triage', 'screen-green-light');
        }
      });
    }

    // Green Light -> Drop user into actual Assessment Flow (Step 1: Sport Selection)
    if (btnStartTests) {
      btnStartTests.addEventListener('click', () => {
        gateNavigate('screen-green-light', null); // Hide green light screen
        goToStep(1); // Proceed to Phase 1 history
      });
    }

    // Hard Stop -> Restart button (full reset back to welcome)
    var hardStopRestart = $('hardStopRestartBtn');
    if (hardStopRestart) {
      hardStopRestart.addEventListener('click', function() {
        gateNavigate('screen-hard-stop', null);
        currentGatewayScreen = null;
        $('screen-welcome').classList.remove('hidden');
        $('screen-welcome').classList.add('active');
        updateBackButton();
      });
    }
  }

  // ============================================
  // Back Navigation
  // ============================================
  function prevStep() {
    // Gateway back navigation — timeline → legal, triage → timeline, green-light → timeline
    if (currentGatewayScreen === 'screen-timeline') {
      gateNavigate('screen-timeline', null);
      currentGatewayScreen = null;
      state.onLegalScreen = true;
      var legal = $('screen-legal');
      legal.classList.remove('hidden');
      setTimeout(function() { legal.classList.add('active'); }, 50);
      updateBackButton();
      return;
    }
    if (currentGatewayScreen === 'screen-triage') {
      gateNavigate('screen-triage', 'screen-timeline');
      updateBackButton();
      return;
    }
    if (currentGatewayScreen === 'screen-green-light') {
      gateNavigate('screen-green-light', 'screen-timeline');
      updateBackButton();
      return;
    }
    if (state.onLegalScreen) {
      // Legal → Welcome
      gateNavigate('screen-legal', null);
      state.onLegalScreen = false;
      currentGatewayScreen = null;
      state.currentStep = 0;
      $('screen-welcome').classList.remove('hidden');
      $('screen-welcome').classList.add('active');
    } else if (state.currentStep === 1) {
      // First test → Legal
      const current = $(SCREENS[1]);
      if (current) {
        current.classList.remove('active');
      }
      state.currentStep = 0;
      $('progressContainer').style.display = 'none';
      state.onLegalScreen = true;
      const legal = $('screen-legal');
      legal.classList.remove('hidden');
      setTimeout(() => legal.classList.add('active'), 50);
    } else if (state.currentStep > 1 && state.currentStep < RESULTS_STEP) {
      goToStep(state.currentStep - 1);
    }
    updateBackButton();
  }

  function updateBackButton() {
    const btn = $('backBtn');
    if (!btn) return;
    var onGateway = currentGatewayScreen !== null &&
                    currentGatewayScreen !== 'screen-hard-stop'; // hard-stop has its own restart
    if (onGateway || state.onLegalScreen || (state.currentStep >= 1 && state.currentStep < RESULTS_STEP)) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  }

  // ============================================
  // Option-card questions
  // ============================================
  function setupOptionCards() {
    document.addEventListener('click', function (e) {
      const card = e.target.closest('.option-card');
      if (!card) return;

      // FIX: Prevent Gateway timeline cards from triggering the main test auto-advance
      if (card.classList.contains('radio-label-card')) return;

      const container  = card.closest('.option-cards');
      if (!container) return;
      
      const questionId = container.dataset.question;
      if (!questionId) return;

      const score      = parseInt(card.dataset.score, 10);

      // Select
      container.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      // Store
      state.answers[questionId] = score;

      // Auto-advance (sidehop_result goes to email gate)
      if (questionId === 'sidehop_result') {
        setTimeout(function() { goToStep(EMAIL_GATE); }, 450);
      } else {
        setTimeout(nextStep, 400);
      }
    });
  }

  // ============================================
  // Confidence sliders (Egyptian Arabic Hardcoded)
  // ============================================
  var _slidersInitialized = false;

  function syncSliders() {
    var confSlider = $('confidenceSlider');
    var fearSlider = $('fearSlider');
    if (!confSlider || !fearSlider) return;

    function getConfLabel(v) {
      if (v <= 3) return "مفيش ثقة خالص";
      if (v <= 7) return "ثقة متوسطة";
      return "ثقة كاملة";
    }
    function getFearLabel(v) {
      if (v <= 3) return "مأثر عليا جداً";
      if (v <= 7) return "تأثير متوسط";
      return "مفيش خوف خالص";
    }
    function sync(slider, numEl, labelEl, labelFn) {
      var v = parseInt(slider.value, 10);
      numEl.textContent   = v;
      labelEl.textContent = labelFn(v);
      var pct = ((v - 1) / 9) * 100;
      slider.style.background =
        'linear-gradient(to right, var(--accent) ' + pct + '%, var(--bg-card) ' + pct + '%)';
    }
    sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel);
    sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel);
  }

  function setupSliders() {
    var confSlider = $('confidenceSlider');
    var fearSlider = $('fearSlider');
    if (!confSlider || !fearSlider) return;

    function getConfLabel(v) {
      if (v <= 3) return "مفيش ثقة خالص";
      if (v <= 7) return "ثقة متوسطة";
      return "ثقة كاملة";
    }
    function getFearLabel(v) {
      if (v <= 3) return "مأثر عليا جداً";
      if (v <= 7) return "تأثير متوسط";
      return "مفيش خوف خالص";
    }
    function sync(slider, numEl, labelEl, labelFn) {
      var v = parseInt(slider.value, 10);
      numEl.textContent   = v;
      labelEl.textContent = labelFn(v);
      var pct = ((v - 1) / 9) * 100;
      slider.style.background =
        'linear-gradient(to right, var(--accent) ' + pct + '%, var(--bg-card) ' + pct + '%)';
    }

    // Attach listeners only ONCE — retake just resyncs visuals via syncSliders()
    if (!_slidersInitialized) {
      confSlider.addEventListener('input', function() {
        sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel);
      });
      fearSlider.addEventListener('input', function() {
        sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel);
      });
      $('confidenceNext').addEventListener('click', function() {
        state.answers.movement_confidence = parseInt(confSlider.value, 10);
        state.answers.fear_reinjury       = parseInt(fearSlider.value, 10);
        nextStep();
      });
      _slidersInitialized = true;
    }

    // Always sync visuals (init display + retake reset)
    sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel);
    sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel);
  }

  // ============================================
  // Balance timer test
  // ============================================
  function setupBalanceTest() {
    const CIRC = 2 * Math.PI * 90;          // matches SVG r=90
    const ring = $('timerRingFill');
    ring.style.strokeDasharray  = CIRC;
    ring.style.strokeDashoffset = CIRC;

    $('balanceStart').addEventListener('click', () => {
      $('balanceStart').style.display = 'none';
      $('balanceStop').style.display  = 'block';

      state.timer = new AssessmentTimer({
        maxTime: 30,
        onTick(elapsed, max) {
          $('timerValue').textContent = elapsed.toFixed(1);
          ring.style.strokeDashoffset = CIRC - (elapsed / max) * CIRC;
        },
        onComplete(elapsed) {
          finishBalance(elapsed);
        }
      });
      state.timer.start();
    });

    $('balanceStop').addEventListener('click', () => {
      if (state.timer) finishBalance(state.timer.stop());
    });
  }

  function finishBalance(elapsed) {
    state.answers.balance_hold_raw = Math.floor(elapsed);
    var bstop = $('balanceStop');
    if (bstop) bstop.style.display = 'none';
    var tv = $('timerValue');
    if (tv) tv.textContent = Math.floor(elapsed) + 's';
    // Only auto-advance if the user is still on the balance screen
    setTimeout(function() {
      if (state.currentStep === 7) nextStep();
    }, 800);
  }

  // ============================================
  // Calf-raise counter
  // ============================================
  function setupCalfTest() {
    state.counter = new RepCounter(function (count) {
      const el = $('calfCount');
      el.textContent = count;
      el.style.transform = 'scale(1.15)';
      setTimeout(() => { el.style.transform = 'scale(1)'; }, 150);
    });

    $('calfCountBtn').addEventListener('click', function (e) {
      state.counter.increment();

      // Ripple effect
      const btn    = e.currentTarget;
      const rect   = btn.getBoundingClientRect();
      const size   = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.classList.add('tap-ripple');
      ripple.style.width  = size + 'px';
      ripple.style.height = size + 'px';
      ripple.style.left   = (e.clientX - rect.left - size / 2) + 'px';
      ripple.style.top    = (e.clientY - rect.top  - size / 2) + 'px';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });

    $('calfDone').addEventListener('click', () => {
      state.answers.calf_raises_raw = state.counter.getCount();
      nextStep();
    });
  }

  // ============================================
  // Calculating overlay → results
  // ============================================
  function showCalculating() {
    const overlay = $('calculatingOverlay');
    overlay.classList.add('active');

    state.results = ScoringEngine.calculate(state.answers);

    setTimeout(() => {
      overlay.classList.remove('active');
      goToStep(RESULTS_STEP);
      setTimeout(renderResults, 350);
    }, 2000);
  }

  // ============================================
  // Render results page
  // ============================================
  function renderResults() {
    const { total, categories, tier, isAcute } = state.results;

    // ── Animated score ring ──
    animateScore(total, tier);

    // ── Tier badge ──
    $('tierBadge').innerHTML =
      '<div class="tier-badge-inner" style="background:' + tier.colorGlow +
      ';border:1px solid ' + tier.color +
      ';color:' + tier.color + ';">' +
      tier.emoji + ' ' + tier.label +
      ' <span class="tier-sublabel">— ' + tier.sublabel + '</span></div>';

    // ── Acute warning ──
    if (isAcute) $('acuteWarning').style.display = 'block';

    // ── Radar chart ──
    const chartData = [
      { label: categories.history.label,      value: categories.history.percentage },
      { label: categories.confidence.label,   value: categories.confidence.percentage },
      { label: categories.balance.label,      value: categories.balance.percentage },
      { label: categories.endurance.label,    value: categories.endurance.percentage },
      { label: categories.power.label,         value: categories.power.percentage }
    ];

    setTimeout(() => {
      RadarChart.draw('radarChart', chartData, {
        accentColor: tier.color,
        accentRGB:   tier.colorRGB
      });
    }, 500);

    // ── Category bars ──
    renderCategoryBars(categories);

    // -- Insights: read directly from I18n (bypasses old ScoringEngine.getInsights) --
    var insightText = I18n.t('insight.' + tier.id);

    var weakest = Object.entries(categories)
      .sort(function(a, b) { return a[1].percentage - b[1].percentage; })[0];

    if (weakest[1].percentage < 50) {
      insightText += I18n.t('insight.weakest')
        .replace('{label}', weakest[1].label)
        .replace('{pct}', weakest[1].percentage);
    }

    $('insightsText').textContent = insightText;

    // ── Action steps ──
    var steps = ScoringEngine.getActionableSteps(tier);
    $('actionStepsList').innerHTML = steps.map(function (s, i) {
      return '<div class="action-step animate-in" style="animation-delay:' +
        (0.8 + i * 0.15) + 's;">' +
        '<div class="action-step-number">' + (i + 1) + '</div>' +
        '<h4>' + s.title + '</h4>' +
        '<p>' + s.description + '</p></div>';
    }).join('');

    // ── CTA ──
    $('ctaText').textContent = ScoringEngine.getCTAText(tier);
  }

  // ── Animated counter + ring fill ──
  function animateScore(target, tier) {
    const el   = $('scoreValue');
    const ring = $('scoreRingFill');
    const CIRC = 2 * Math.PI * 80;           // SVG r=80

    ring.style.strokeDasharray  = CIRC;
    ring.style.strokeDashoffset = CIRC;
    ring.style.stroke           = tier.color;

    const duration = 1500;
    const t0       = performance.now();

    function frame(now) {
      const p     = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);           // ease-out cubic
      const val   = Math.round(eased * target);

      el.textContent = val;
      el.style.color = tier.color;
      ring.style.strokeDashoffset = CIRC - (eased * target / 100) * CIRC;

      if (p < 1) requestAnimationFrame(frame);
    }

    setTimeout(() => requestAnimationFrame(frame), 300);
  }

  // ── Horizontal bar breakdown ──
  function renderCategoryBars(categories) {
    const order = ['history', 'confidence', 'balance', 'endurance', 'power'];
    var html = order.map(function (key, i) {
      var c = categories[key];
      return '<div class="category-bar animate-in" style="animation-delay:' +
        (0.5 + i * 0.1) + 's;">' +
        '<div class="category-bar-header">' +
        '<span class="category-bar-label">' + c.label + '</span>' +
        '<span class="category-bar-value">' + c.score + '/' + c.max + '</span></div>' +
        '<div class="category-bar-track">' +
        '<div class="category-bar-fill" id="bar-' + key + '" style="width:0%;"></div>' +
        '</div></div>';
    }).join('');

    $('categoryBars').innerHTML = html;

    // Animate after DOM paint
    setTimeout(function () {
      order.forEach(function (key) {
        var bar = document.getElementById('bar-' + key);
        if (bar) bar.style.width = categories[key].percentage + '%';
      });
    }, 800);
  }

  // ============================================
  // Email Gate (mandatory pre-results)
  // ============================================
  var SHEETS_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxagSVSaWBM3Q6Rn2sBsNNmeB6KW6zYvaGBWuDnuNIHrDIzouF4dH9amBMxx0kSZGgU/exec';

  function setupEmailGate() {
    var errorEl = $('gateEmailError');
    if(errorEl) errorEl.style.display = 'none';

    var submitBtn = $('gateEmailSubmit');
    if(submitBtn) {
      submitBtn.addEventListener('click', function () {
        var email = $('gateEmailInput').value.trim();
        if (email && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
          errorEl.style.display = 'none';

          // Pre-calculate results
          var preResults = ScoringEngine.calculate(state.answers);

          // Send to Google Sheets via GET (reliable, no CORS issues)
          try {
            var params = '?email=' + encodeURIComponent(email) +
                         '&score=' + encodeURIComponent(preResults.total) +
                         '&tier='  + encodeURIComponent(preResults.tier.id);
            fetch(SHEETS_ENDPOINT + params, { mode: 'no-cors' });
          } catch (_) { /* silently fail — don't block the user */ }

          showCalculating();
        } else {
          errorEl.style.display = 'block';
          $('gateEmailInput').style.borderColor = 'var(--color-danger)';
          setTimeout(function () { $('gateEmailInput').style.borderColor = ''; }, 2000);
        }
      });
    }
  }

  // ============================================
  // Retake Logic
  // ============================================
  function setupRetake() {
    $('retakeBtn').addEventListener('click', function () {
      state.answers = {};
      state.results = null;
      state.currentStep = 0;
      state.onLegalScreen = false;
      if (state.timer)   state.timer.reset();
      if (state.counter) state.counter.reset();

      // Reset visual state
      $$('.option-card.selected').forEach(function (c) { c.classList.remove('selected'); });
      $('confidenceSlider').value = 5;
      $('fearSlider').value       = 5;
      $('timerValue').textContent  = '0.0';
      $('calfCount').textContent   = '0';
      $('balanceStart').style.display = 'block';
      $('balanceStop').style.display  = 'none';
      $('progressContainer').style.display = 'none';
      $('gateEmailInput').value = '';
      if($('gateEmailError')) $('gateEmailError').style.display = 'none';
      if($('acuteWarning')) $('acuteWarning').style.display = 'none';

      // Reset timer ring
      var circ = 2 * Math.PI * 90;
      $('timerRingFill').style.strokeDashoffset = circ;

      // Reset score ring (so 2nd run doesn't start from old position)
      var scoreCirc = 2 * Math.PI * 80;
      var scoreRing = $('scoreRingFill');
      if (scoreRing) {
        scoreRing.style.strokeDashoffset = scoreCirc;
        scoreRing.style.stroke = 'var(--accent)';
      }
      var scoreVal = $('scoreValue');
      if (scoreVal) { scoreVal.textContent = '0'; scoreVal.style.color = ''; }

      // Clear tier badge and insights so no stale content flashes
      var tb = $('tierBadge');
      if (tb) tb.innerHTML = '';
      var it = $('insightsText');
      if (it) it.textContent = '';
      var al = $('actionStepsList');
      if (al) al.innerHTML = '';
      var cb = $('categoryBars');
      if (cb) cb.innerHTML = '';
      var ct = $('ctaText');
      if (ct) ct.textContent = '';

      // Reset calfCount transform (may be stuck at scale(1.15))
      var calfEl = $('calfCount');
      if (calfEl) calfEl.style.transform = 'scale(1)';

      // Uncheck Gate Radios & Checkboxes
      const legalCheckbox = $('legal-checkbox');
      if (legalCheckbox) legalCheckbox.checked = false;
      if ($('btn-legal-next')) $('btn-legal-next').disabled = true;
      $$('input[type="radio"]').forEach(r => r.checked = false);

      // Hide all standard AND gateway screens
      $$('.screen').forEach(function (s) { 
        s.classList.remove('active', 'exit-left'); 
        if(s.id !== 'screen-welcome') {
          s.classList.add('hidden'); // Ensure gateways stay hidden
        }
      });
      
      // Show Welcome
      $('screen-welcome').classList.remove('hidden');
      $('screen-welcome').classList.add('active');

      // Re-init slider visuals
      setupSliders();
    });
  }

  // ============================================
  // Init
  // ============================================
  function init() {
    setupClinicalGate(); // Initialize the new branching logic

    // Back button
    const backBtn = $('backBtn');
    if (backBtn) backBtn.addEventListener('click', prevStep);
    
    // Original Event Listeners
    $('phase2Start').addEventListener('click', nextStep);

    setupOptionCards();
    setupSliders();
    setupBalanceTest();
    setupCalfTest();
    setupEmailGate();
    setupRetake();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
