// ============================================
// Ankle 101 Assessment — Timer & Counter
// High-precision timer using requestAnimationFrame
// and a simple rep counter with callback support.
// ============================================

class AssessmentTimer {
  /**
   * @param {Object}   opts
   * @param {number}   opts.maxTime    - Maximum seconds before auto-complete (default 30)
   * @param {Function} opts.onTick     - Called each frame with (elapsed, maxTime)
   * @param {Function} opts.onComplete - Called when maxTime is reached
   */
  constructor({ maxTime = 30, onTick, onComplete } = {}) {
    this.maxTime    = maxTime;
    this.onTick     = onTick;
    this.onComplete = onComplete;
    this.startTime  = null;
    this.elapsed    = 0;
    this.running    = false;
    this._raf       = null;
  }

  start() {
    if (this.running) return;
    this.startTime = performance.now();
    this.running   = true;
    this._tick();
  }

  stop() {
    this.running = false;
    if (this._raf) {
      cancelAnimationFrame(this._raf);
      this._raf = null;
    }
    return this.elapsed;
  }

  reset() {
    this.stop();
    this.elapsed   = 0;
    this.startTime = null;
  }

  getElapsed() {
    return this.elapsed;
  }

  /** @private */
  _tick() {
    if (!this.running) return;

    const now = performance.now();
    this.elapsed = (now - this.startTime) / 1000;

    if (this.elapsed >= this.maxTime) {
      this.elapsed = this.maxTime;
      this.running = false;
      if (this.onTick)     this.onTick(this.elapsed, this.maxTime);
      if (this.onComplete) this.onComplete(this.elapsed);
      return;
    }

    if (this.onTick) this.onTick(this.elapsed, this.maxTime);
    this._raf = requestAnimationFrame(() => this._tick());
  }
}

// --------------------------------------------------

class RepCounter {
  /**
   * @param {Function} onChange - Called with the new count on every increment
   */
  constructor(onChange) {
    this.count    = 0;
    this.onChange  = onChange;
  }

  increment() {
    this.count++;
    if (this.onChange) this.onChange(this.count);
    return this.count;
  }

  getCount() {
    return this.count;
  }

  reset() {
    this.count = 0;
    if (this.onChange) this.onChange(this.count);
  }
}
