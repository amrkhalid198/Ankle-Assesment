// ============================================
// Ankle 101 Assessment — Scoring Engine
// Handles score calculation, tier classification,
// personalized insights, and actionable recommendations.
// Uses I18n for all user-facing text.
//
// ── SCORING BREAKDOWN (Total: 100) ──────────
//
//  Category      | Source                  | Max
// ───────────────|─────────────────────────|─────
//  History       | sprain_count (10)       |  30
//                | last_sprain  (10)       |
//                | giving_way   (10)       |
// ───────────────|─────────────────────────|─────
//  Confidence    | movement_confidence(10) |  20
//                | fear_reinjury      (10) |
// ───────────────|─────────────────────────|─────
//  Balance       | balance_hold (timer 30s)|  20
// ───────────────|─────────────────────────|─────
//  Endurance     | calf_raises  (counter)  |  15
// ───────────────|─────────────────────────|─────
//  Power         | sidehop_result (option) |  15
// ───────────────|─────────────────────────|─────
//                                     TOTAL: 100
//
// ── TIER RANGES ─────────────────────────────
//  Severe:   0–30  |  Moderate: 31–55
//  Mild:    56–75  |  Optimal:  76–100
// ============================================

const ScoringEngine = {

  // ------------------------------------------
  // Physical-test scoring thresholds
  // Timer max = 30s, counter is uncapped
  // ------------------------------------------
  physicalTests: {
    balance_hold: {
      // Single-leg balance with eyes closed (max 30 seconds)
      thresholds: [
        { min: 28, score: 20 },   // Excellent — near-full 30s hold
        { min: 18, score: 15 },   // Good — solid hold
        { min: 8,  score: 8  },   // Fair — moderate control
        { min: 0,  score: 3  }    // Poor — minimal/no hold
      ]
    },
    calf_raises: {
      // Single-leg calf raise to failure (reps)
      thresholds: [
        { min: 25, score: 15 },   // Excellent endurance
        { min: 18, score: 11 },   // Good endurance
        { min: 10, score: 6  },   // Fair endurance
        { min: 0,  score: 2  }    // Poor endurance
      ]
    }
    // sidehop_result is scored directly from option selection: 15 / 10 / 5 / 2
  },

  // ------------------------------------------
  // Stability tiers (visual/scoring data only)
  // ------------------------------------------
  tiers: [
    {
      id: 'severe',
      min: 0,   max: 30,
      color: '#C94444',
      colorGlow: 'rgba(201, 68, 68, 0.10)',
      colorRGB: '201, 68, 68',
      emoji: '▼'
    },
    {
      id: 'moderate',
      min: 31,  max: 55,
      color: '#D4923A',
      colorGlow: 'rgba(212, 146, 58, 0.10)',
      colorRGB: '212, 146, 58',
      emoji: '◆'
    },
    {
      id: 'mild',
      min: 56,  max: 75,
      color: '#B8A330',
      colorGlow: 'rgba(184, 163, 48, 0.10)',
      colorRGB: '184, 163, 48',
      emoji: '▲'
    },
    {
      id: 'optimal',
      min: 76,  max: 100,
      color: '#3A9E6E',
      colorGlow: 'rgba(58, 158, 110, 0.10)',
      colorRGB: '58, 158, 110',
      emoji: '●'
    }
  ],

  // ------------------------------------------
  // Score a physical test from its raw value
  // ------------------------------------------
  scorePhysicalTest(testId, rawValue) {
    const test = this.physicalTests[testId];
    if (!test) return rawValue;

    for (const t of test.thresholds) {
      if (rawValue >= t.min) return t.score;
    }
    return test.thresholds[test.thresholds.length - 1].score;
  },

  // ------------------------------------------
  // Main calculation entry point
  // ------------------------------------------
  calculate(answers) {
    const historyScore     = (answers.sprain_count || 0) +
                             (answers.last_sprain  || 0) +
                             (answers.giving_way   || 0);
    const confidenceScore  = (answers.movement_confidence || 0) +
                             (answers.fear_reinjury       || 0);
    const balanceScore     = this.scorePhysicalTest('balance_hold', answers.balance_hold_raw || 0);
    const enduranceScore   = this.scorePhysicalTest('calf_raises',  answers.calf_raises_raw || 0);
    const powerScore = answers.sidehop_result || 0;

    const total = historyScore + confidenceScore + balanceScore +
                  enduranceScore + powerScore;

    const pct = (score, max) => Math.round((score / max) * 100);

    const categories = {
      history:      { score: historyScore,      max: 30, percentage: pct(historyScore, 30),      label: I18n.t('cat.history') },
      confidence:   { score: confidenceScore,   max: 20, percentage: pct(confidenceScore, 20),   label: I18n.t('cat.confidence') },
      balance:      { score: balanceScore,      max: 20, percentage: pct(balanceScore, 20),      label: I18n.t('cat.balance') },
      endurance:    { score: enduranceScore,    max: 15, percentage: pct(enduranceScore, 15),    label: I18n.t('cat.endurance') },
      power:        { score: powerScore,        max: 15, percentage: pct(powerScore, 15),        label: I18n.t('cat.power') }
    };

    return {
      total,
      categories,
      tier:     this.getTier(total),
      isAcute:  this.checkAcuteInjury(answers)
    };
  },

  // ------------------------------------------
  // Tier lookup — adds translated labels
  // ------------------------------------------
  getTier(score) {
    for (const tier of this.tiers) {
      if (score >= tier.min && score <= tier.max) {
        return this._enrichTier(tier);
      }
    }
    return this._enrichTier(this.tiers[0]);
  },

  /** Add translated label/sublabel to a tier object */
  _enrichTier(tier) {
    return Object.assign({}, tier, {
      label:    I18n.t('tier.' + tier.id + '.label'),
      sublabel: I18n.t('tier.' + tier.id + '.sublabel')
    });
  },

  // ------------------------------------------
  // Acute-injury safety gate
  // ------------------------------------------
  checkAcuteInjury(answers) {
    return answers.last_sprain <= 1 && answers.movement_confidence <= 3;
  },

  // ------------------------------------------
  // Section 1: Clinical Diagnosis
  // ------------------------------------------
  getDiagnosis(tier) {
    return I18n.t('diagnosis.' + tier.id);
  },

  // ------------------------------------------
  // Section 2: Reality Check
  // ------------------------------------------
  getRealityCheck(tier) {
    return I18n.t('realityCheck.' + tier.id);
  },

  // ------------------------------------------
  // Section 3: Rehabilitation Blueprint (3 phases)
  // ------------------------------------------
  getBlueprint(tier) {
    var tierId = tier.id;
    return [
      {
        title: I18n.t('results.phase1.title'),
        description: I18n.t('blueprint.' + tierId + '.phase1')
      },
      {
        title: I18n.t('results.phase2.title'),
        description: I18n.t('blueprint.' + tierId + '.phase2')
      },
      {
        title: I18n.t('results.phase3.title'),
        description: I18n.t('blueprint.' + tierId + '.phase3')
      }
    ];
  },

  // ------------------------------------------
  // Section 4: CTA copy per tier
  // ------------------------------------------
  getCTAText(tier) {
    return I18n.t('cta.' + tier.id);
  }
};
