// ============================================
// Ankle 101 Assessment — Radar Chart Renderer
// Pure Canvas API — no external libraries.
// ============================================

const RadarChart = {

  /**
   * Draw a radar / spider chart on the given canvas.
   *
   * @param {string} canvasId  - DOM id of the <canvas>
   * @param {Array}  data      - [{ label: string, value: 0–100 }, …]
   * @param {Object} options
   *   accentColor  {string}  e.g. '#FF6B00'
   *   accentRGB    {string}  e.g. '255, 107, 0'
   *   levels       {number}  grid rings (default 5)
   */
  draw(canvasId, data, options = {}) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;

    // Size to CSS dimensions × devicePixelRatio for sharp rendering
    const rect = canvas.getBoundingClientRect();
    canvas.width  = rect.width  * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const W = rect.width;
    const H = rect.height;
    const cx = W / 2;
    const cy = H / 2;
    const radius = Math.min(W, H) / 2 - 55;
    const levels = options.levels || 5;
    const count  = data.length;
    const step   = (Math.PI * 2) / count;
    const start  = -Math.PI / 2;            // 12 o'clock

    const accent    = options.accentColor || '#E8663D';
    const accentRGB = options.accentRGB   || '232, 102, 61';
    const gridColor = 'rgba(255, 255, 255, 0.04)';
    const axisColor = 'rgba(255, 255, 255, 0.06)';
    const labelClr  = 'rgba(232, 230, 225, 0.50)';

    ctx.clearRect(0, 0, W, H);

    // ---- Grid rings ----
    for (let l = levels; l >= 1; l--) {
      const r = (radius / levels) * l;
      ctx.beginPath();
      for (let i = 0; i < count; i++) {
        const a = start + i * step;
        const x = cx + r * Math.cos(a);
        const y = cy + r * Math.sin(a);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.strokeStyle = gridColor;
      ctx.lineWidth   = 1;
      ctx.stroke();
    }

    // ---- Axes ----
    for (let i = 0; i < count; i++) {
      const a = start + i * step;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + radius * Math.cos(a), cy + radius * Math.sin(a));
      ctx.strokeStyle = axisColor;
      ctx.lineWidth   = 1;
      ctx.stroke();
    }

    // ---- Data polygon (fill + stroke) ----
    ctx.beginPath();
    for (let i = 0; i < count; i++) {
      const a = start + i * step;
      const v = (data[i].value / 100) || 0.02;   // tiny min so polygon is visible
      const x = cx + radius * v * Math.cos(a);
      const y = cy + radius * v * Math.sin(a);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();

    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    grad.addColorStop(0, 'rgba(' + accentRGB + ', 0.30)');
    grad.addColorStop(1, 'rgba(' + accentRGB + ', 0.05)');
    ctx.fillStyle = grad;
    ctx.fill();

    ctx.strokeStyle = accent;
    ctx.lineWidth   = 2.5;
    ctx.stroke();

    // ---- Data points ----
    for (let i = 0; i < count; i++) {
      const a = start + i * step;
      const v = (data[i].value / 100) || 0.02;
      const x = cx + radius * v * Math.cos(a);
      const y = cy + radius * v * Math.sin(a);

      // glow
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + accentRGB + ', 0.30)';
      ctx.fill();

      // dot
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fillStyle = accent;
      ctx.fill();
    }

    // ---- Labels + percentages ----
    for (let i = 0; i < count; i++) {
      const a   = start + i * step;
      const lr  = radius + 38;
      const lx  = cx + lr * Math.cos(a);
      const ly  = cy + lr * Math.sin(a);

      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';

      // label
      ctx.font      = '12px Inter, sans-serif';
      ctx.fillStyle = labelClr;
      ctx.fillText(data[i].label, lx, ly - 9);

      // percentage
      ctx.font      = 'bold 13px Inter, sans-serif';
      ctx.fillStyle = accent;
      ctx.fillText(Math.round(data[i].value) + '%', lx, ly + 9);
    }
  }
};
