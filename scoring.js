// ============================================
// Ankle 101 Assessment — Scoring Engine
// Handles score calculation, tier classification,
// personalized insights, and actionable recommendations.
// Uses I18n for all user-facing text.
// ============================================

const ScoringEngine = {

  // ------------------------------------------
  // Physical-test scoring thresholds
  // ------------------------------------------
  physicalTests: {
    balance_hold: {
      thresholds: [
        { min: 45, score: 20 },
        { min: 30, score: 15 },
        { min: 15, score: 8  },
        { min: 0,  score: 3  }
      ]
    },
    calf_raises: {
      thresholds: [
        { min: 25, score: 15 },
        { min: 18, score: 11 },
        { min: 10, score: 6  },
        { min: 0,  score: 2  }
      ]
    }
    // sidehop_result is scored directly from the user's option selection
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
  // Personalized insight paragraphs
  // ------------------------------------------
  getInsights(tier, categories) {
    let text = I18n.t('insight.' + tier.id);

    // Append weakest-category callout
    const weakest = Object.entries(categories)
      .sort((a, b) => a[1].percentage - b[1].percentage)[0];

    if (weakest[1].percentage < 50) {
      text += I18n.t('insight.weakest')
        .replace('{label}', weakest[1].label)
        .replace('{pct}', weakest[1].percentage);
    }

    return text;
  },

  // ------------------------------------------
  // 3 actionable steps per tier
  // ------------------------------------------
  getActionableSteps(tier) {
    var tierId = tier.id;
    return [
      {
        title: I18n.t('action.' + tierId + '.1.title'),
        description: I18n.t('action.' + tierId + '.1.desc')
      },
      {
        title: I18n.t('action.' + tierId + '.2.title'),
        description: I18n.t('action.' + tierId + '.2.desc')
      },
      {
        title: I18n.t('action.' + tierId + '.3.title'),
        description: I18n.t('action.' + tierId + '.3.desc')
      }
    ];
  },

  // ------------------------------------------
  // CTA copy per tier
  // ------------------------------------------
  getCTAText(tier) {
    return I18n.t('cta.' + tier.id);
  }
};
