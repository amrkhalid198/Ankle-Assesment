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
    'screen-sport',        // 1  (Legal gateway drops users here)
    'screen-q1',           // 2  sprain_count
    'screen-q3',           // 3  giving_way
    'screen-q4',           // 4  post_session_symptoms  ← NEW
    'screen-confidence',   // 5
    'screen-phase2',       // 6
    'screen-balance',      // 7
    'screen-calfraise',    // 8
    'screen-sidehop',      // 9
    'screen-email-gate',   // 10
    'screen-results'       // 11
  ];

  const PHASE_1_END   = 5;   // confidence is last Phase-1 screen
  const PHASE_2_END   = 9;   // sidehop is last Phase-2 screen
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
    const BALANCE_STEP   = 7;   // updated: was 6
    const CALFRAISE_STEP = 8;   // updated: was 7

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
  function gateNavigate(currentId, nextId) {
    const current = $(currentId);
    const next = $(nextId);
    
    if (current) {
      current.classList.remove('active');
      current.classList.add('hidden');
    }
    if (next) {
      next.classList.remove('hidden');
      setTimeout(() => next.classList.add('active'), 50);
    }
    updateBackButton();
  }

  function setupClinicalGate() {
    const btnLegalNext  = $('btn-legal-next');
    const legalCheckbox = $('legal-checkbox');

    // Welcome "Start" → Legal disclaimer
    $('startBtn').addEventListener('click', () => {
      state.onLegalScreen = true;
      gateNavigate('screen-welcome', 'screen-legal');
      updateBackButton();
    });

    // Checkbox enables the proceed button
    if (legalCheckbox) {
      legalCheckbox.addEventListener('change', (e) => {
        btnLegalNext.disabled = !e.target.checked;
      });
    }

    // Legal "موافق" → straight into the assessment (Step 1: Sport Selection)
    if (btnLegalNext) {
      btnLegalNext.addEventListener('click', () => {
        state.onLegalScreen = false;
        gateNavigate('screen-legal', null); // hide legal screen
        goToStep(1);                        // enter main flow
      });
    }
  }

  // ============================================
  // Back Navigation
  // ============================================
  function prevStep() {
    const legal = $('screen-legal');
    const isVisible = (el) => el && el.classList.contains('active') && !el.classList.contains('hidden');

    if (state.onLegalScreen) {
      // Legal → Welcome
      gateNavigate('screen-legal', null);
      state.onLegalScreen = false;
      state.currentStep = 0;
      $('screen-welcome').classList.remove('hidden');
      $('screen-welcome').classList.add('active');
    } else if (state.currentStep === 1) {
      // First test screen → Legal
      const current = $(SCREENS[1]);
      if (current) current.classList.remove('active');
      state.currentStep = 0;
      $('progressContainer').style.display = 'none';
      state.onLegalScreen = true;
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

    // Only screen-legal remains as a gateway screen
    const legalEl = $('screen-legal');
    const legalActive = legalEl && legalEl.classList.contains('active') && !legalEl.classList.contains('hidden');

    if (legalActive || state.onLegalScreen || (state.currentStep >= 1 && state.currentStep < RESULTS_STEP)) {
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
  var slidersInitialized = false;

  function setupSliders() {
    const confSlider = $('confidenceSlider');
    const fearSlider = $('fearSlider');

    // Hardcoded Egyptian Arabic Labels
    function getConfLabel(v) {
      if (v <= 3) return "مفيش ثقة خالص"; // No confidence
      if (v <= 7) return "ثقة متوسطة";    // Moderate
      return "ثقة كاملة";                 // Full confidence
    }
    
    function getFearLabel(v) {
      if (v <= 3) return "مأثر عليا جداً"; // Affecting me a lot
      if (v <= 7) return "تأثير متوسط";    // Moderate effect
      return "مفيش خوف خالص";              // No fear at all
    }

    function sync(slider, numEl, labelEl, labelFn) {
      const v = parseInt(slider.value, 10);
      numEl.textContent   = v;
      labelEl.textContent = labelFn(v);
      
      // Fill the track
      const pct = ((v - 1) / 9) * 100;
      slider.style.background =
        'linear-gradient(to right, var(--accent) ' + pct + '%, var(--bg-card) ' + pct + '%)';
    }

    // Only attach event listeners once
    if (!slidersInitialized) {
      confSlider.addEventListener('input', () =>
        sync(confSlider, $('confidenceValue'), $('confidenceLabel'), getConfLabel));
      fearSlider.addEventListener('input', () =>
        sync(fearSlider, $('fearValue'), $('fearLabel'), getFearLabel));

      $('confidenceNext').addEventListener('click', () => {
        state.answers.movement_confidence = parseInt(confSlider.value, 10);
        state.answers.fear_reinjury       = parseInt(fearSlider.value, 10);
        nextStep();
      });

      slidersInitialized = true;
    }

    // Always sync visuals when screen loads
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
    // Only auto-advance if the user is still on the balance screen (now step 7)
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
    try {
      animateScore(total, tier);
    } catch (e) { /* score ring is non-critical */ }

    // ── Tier badge ──
    try {
      $('tierBadge').innerHTML =
        '<div class="tier-badge-inner" style="background:' + tier.colorGlow +
        ';border:1px solid ' + tier.color +
        ';color:' + tier.color + ';">' +
        tier.emoji + ' ' + tier.label +
        ' <span class="tier-sublabel">— ' + tier.sublabel + '</span></div>';
    } catch (e) { /* tier badge is non-critical */ }

    // ── Acute warning ──
    try {
      if (isAcute) $('acuteWarning').style.display = 'block';
    } catch (e) { /* acute warning is non-critical */ }

    // ── Radar chart ──
    // Isolated in its own try/catch — a drawing error here must never
    // prevent category bars, insights, action steps, or the CTA below
    // from rendering (each of those is itself isolated too).
    try {
      const chartData = [
        { label: categories.history.label,      value: categories.history.percentage },
        { label: categories.confidence.label,   value: categories.confidence.percentage },
        { label: categories.balance.label,      value: categories.balance.percentage },
        { label: categories.endurance.label,    value: categories.endurance.percentage },
        { label: categories.power.label,        value: categories.power.percentage }
      ];

      // First attempt at 300ms — catches most cases
      // Second attempt at 1000ms — guaranteed fallback if layout not yet settled
      var drawChart = function() {
        try {
          RadarChart.draw('radarChart', chartData, {
            accentColor: tier.color,
            accentRGB:   tier.colorRGB
          });
        } catch (e) { /* chart drawing is non-critical */ }
      };
      setTimeout(drawChart, 300);
      setTimeout(drawChart, 1000);
    } catch (e) { /* chart setup is non-critical */ }

    // ── Category bars ──
    try {
      renderCategoryBars(categories);
    } catch (e) { /* category bars failure must not block insights below */ }

    // ── Diagnosis ──
    try {
      var insightsContent = ScoringEngine.getInsights(tier, categories) || '';
      $('insightsText').innerHTML = insightsContent
        ? insightsContent.replace(/\n/g, '<br>')
        : 'لا توجد بيانات متاحة حالياً.';
    } catch (e) {
      // Diagnosis failure must not block the CTA below
      var insightsTextEl = $('insightsText');
      if (insightsTextEl) insightsTextEl.innerHTML = 'لا توجد بيانات متاحة حالياً.';
    }

    // ── CTA ──
    try {
      $('ctaText').textContent = ScoringEngine.getCTAText(tier);
    } catch (e) { /* CTA is non-critical */ }

    // ── Sticky CTA ──
    try {
      setupStickyCta(total, tier);
    } catch (e) { /* sticky bar is an enhancement, never block the page */ }
  }

  // ============================================
  // Sticky CTA bar
  // Shows once the score ring has scrolled out of view, hides again
  // when the full CTA card is on screen so the two never stack.
  // ============================================
  var stickyScrollBound = false;

  function setupStickyCta(total, tier) {
    var bar = $('stickyCta');
    if (!bar) return;

    // Carry the personal result into the bar — the pitch stays tied to their score
    var scoreEl = $('stickyCtaScore');
    var tierEl  = $('stickyCtaTier');
    if (scoreEl) {
      scoreEl.innerHTML = total + '<small>/100</small>';
      scoreEl.style.color = tier.color;
    }
    // Short clinical name only — the full bilingual label is too long for the
    // bar and truncates mid-word. The full version stays in the tier badge.
    if (tierEl) tierEl.textContent = String(tier.label).split('(')[0].trim();

    var screen = $('screen-results');
    if (screen && !stickyScrollBound) {
      var ticking = false;
      var onScroll = function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
          ticking = false;
          updateStickyCta();
        });
      };
      // The document scrolls in tall layouts, the screen element in short ones —
      // listen to both so the bar tracks either way.
      window.addEventListener('scroll', onScroll, { passive: true });
      screen.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('resize', onScroll, { passive: true });
      stickyScrollBound = true;
    }

    updateStickyCta();
  }

  function updateStickyCta() {
    var bar = $('stickyCta');
    if (!bar) return;

    var screen  = $('screen-results');
    var realBtn = $('ctaButton');

    var onResults = screen &&
      screen.classList.contains('active') &&
      !screen.classList.contains('hidden');

    var show = false;
    if (onResults && realBtn) {
      // A short flick of the thumb is enough to bring the bar in — tying it to
      // an element's position made it arrive at different points on different
      // screen sizes. Hysteresis (120 in / 80 out) stops it flickering when
      // someone rests right on the threshold.
      var scrolled   = Math.max(window.scrollY || 0, screen.scrollTop || 0);
      var wasVisible = bar.classList.contains('visible');
      var scrolledIn = scrolled > (wasVisible ? 80 : 120);

      // Track the real button, not its card — the card is ~600px tall, so its
      // top edge scrolls into view long before the button the bar duplicates.
      var viewportH = window.innerHeight || document.documentElement.clientHeight;
      var btnInView = realBtn.getBoundingClientRect().top < viewportH - 60;
      show = scrolledIn && !btnInView;
    }

    bar.classList.toggle('visible', show);
    bar.setAttribute('aria-hidden', show ? 'false' : 'true');
    var btn = $('stickyCtaBtn');
    if (btn) btn.setAttribute('tabindex', show ? '0' : '-1');
  }

  function hideStickyCta() {
    var bar = $('stickyCta');
    if (!bar) return;
    bar.classList.remove('visible');
    bar.setAttribute('aria-hidden', 'true');
    var btn = $('stickyCtaBtn');
    if (btn) btn.setAttribute('tabindex', '-1');
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
  const REGISTRATION_ENDPOINT = '__APPS_SCRIPT_DEPLOYMENT_URL__';

  function saveRegistration(registration) {
    return new Promise(function (resolve, reject) {
      const responseFrame = document.createElement('iframe');
      responseFrame.name = 'assessment-signup-' + registration.id;
      responseFrame.hidden = true;
      responseFrame.setAttribute('aria-hidden', 'true');
      responseFrame.referrerPolicy = 'no-referrer';

      const request = document.createElement('form');
      request.hidden = true;
      request.method = 'post';
      request.action = REGISTRATION_ENDPOINT;
      request.target = responseFrame.name;

      const payload = document.createElement('input');
      payload.type = 'hidden';
      payload.name = 'payload';
      payload.value = JSON.stringify(registration);
      request.append(payload);

      function finish(error) {
        clearTimeout(timeout);
        window.removeEventListener('message', receive);
        request.remove();
        responseFrame.remove();
        if (error) reject(error);
        else resolve();
      }

      function receive(event) {
        const trustedOrigin = event.origin === 'https://script.google.com' ||
          /^https:\/\/(?:[a-z0-9-]+-)?script\.googleusercontent\.com$/.test(event.origin);
        const reply = event.data;
        if (!trustedOrigin || !event.source || event.source.top !== window ||
            reply?.type !== 'ankle-registration' || reply.id !== registration.id) return;

        finish(reply.ok === true ? null : new Error(reply.error));
      }

      const timeout = setTimeout(function () { finish(new Error('timeout')); }, 35000);
      window.addEventListener('message', receive);
      try {
        document.body.append(responseFrame, request);
        request.submit();
      } catch (error) {
        finish(error);
      }
    });
  }

  function setupEmailGate() {
    const form = $('gateEmailForm');
    const input = $('gateEmailInput');
    const optIn = $('gateProgramOptIn');
    const submit = $('gateEmailSubmit');
    const error = $('gateEmailError');
    let previous;
    let saving = false;

    function showError(message) {
      error.textContent = message;
      error.hidden = !message;
    }

    form.addEventListener('input', function () {
      input.removeAttribute('aria-invalid');
      showError('');
    });

    form.addEventListener('reset', function () {
      previous = undefined;
      input.removeAttribute('aria-invalid');
      showError('');
    });

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      if (saving) return;
      showError('');
      if (!input.validity.valid || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim())) {
        input.setAttribute('aria-invalid', 'true');
        showError(I18n.t('emailGate.error'));
        input.focus();
        return;
      }

      const result = ScoringEngine.calculate(state.answers);
      const registration = {
        email: input.value.trim(),
        score: result.total,
        tier: result.tier.id,
        optIn: optIn.checked
      };
      const key = JSON.stringify(registration);
      const id = previous?.key === key ? previous.id : crypto.randomUUID();
      previous = { key, id };

      saving = true;
      input.disabled = optIn.disabled = submit.disabled = true;
      submit.textContent = I18n.t('emailGate.saving');
      try {
        await saveRegistration({ ...registration, id });
        if (previous?.id === id) {
          previous = undefined;
          if (state.currentStep === EMAIL_GATE) showCalculating();
        }
      } catch (failure) {
        if (previous?.id === id && state.currentStep === EMAIL_GATE) {
          showError(I18n.t(failure.message === 'rate_limited' ? 'emailGate.rateLimit' : 'emailGate.saveError'));
        }
      } finally {
        saving = false;
        input.disabled = optIn.disabled = submit.disabled = false;
        submit.textContent = I18n.t('emailGate.submit');
      }
    });
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
      hideStickyCta();

      // Reset visual state
      $$('.option-card.selected').forEach(function (c) { c.classList.remove('selected'); });
      $('confidenceSlider').value = 5;
      $('fearSlider').value       = 5;
      $('timerValue').textContent  = '0.0';
      var calfCountEl = $('calfCount');
      if (calfCountEl) {
        calfCountEl.textContent = '0';
        calfCountEl.style.transform = 'scale(1)';
      }
      $('balanceStart').style.display = 'block';
      $('balanceStop').style.display  = 'none';
      $('progressContainer').style.display = 'none';
      $('gateEmailForm').reset();
      if($('acuteWarning')) $('acuteWarning').style.display = 'none';

      // Reset both SVG rings
      var timerCirc = 2 * Math.PI * 90;
      var scoreCirc = 2 * Math.PI * 80;
      var timerRing = $('timerRingFill');
      var scoreRing = $('scoreRingFill');
      if (timerRing) timerRing.style.strokeDashoffset = timerCirc;
      if (scoreRing) {
        scoreRing.style.strokeDashoffset = scoreCirc;
        scoreRing.style.stroke = 'var(--accent)';
      }

      // Clear stale results DOM
      var tierBadgeEl = $('tierBadge');
      var categoryBarsEl = $('categoryBars');
      var insightsTextEl = $('insightsText');
      if (tierBadgeEl)      tierBadgeEl.innerHTML      = '';
      if (categoryBarsEl)   categoryBarsEl.innerHTML   = '';
      if (insightsTextEl)   insightsTextEl.innerHTML   = '';

      var scoreValueEl = $('scoreValue');
      if (scoreValueEl) { scoreValueEl.textContent = '0'; scoreValueEl.style.color = ''; }

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
