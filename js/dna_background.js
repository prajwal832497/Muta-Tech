/* ── dna_background.js — Animated DNA double helix background ── */

(function() {
  const canvas = document.getElementById('dna-bg');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, mx = 0.5, my = 0.5;
  const BASES = ['A', 'T', 'G', 'C'];
  const BASE_COL = { A: '#22c55e', T: '#ef4444', G: '#f59e0b', C: '#3b82f6' };
  const PAIRS = { A: 'T', T: 'A', G: 'C', C: 'G' };

  // Floating particles
  const particles = [];
  const NUM_PARTICLES = 35;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Init particles
  for (let i = 0; i < NUM_PARTICLES; i++) {
    const b = BASES[Math.floor(Math.random() * 4)];
    particles.push({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.25 - 0.1,
      base: b, size: 8 + Math.random() * 6,
      alpha: 0.08 + Math.random() * 0.12,
      phase: Math.random() * Math.PI * 2
    });
  }

  // Mouse parallax
  document.addEventListener('mousemove', e => {
    mx = e.clientX / W;
    my = e.clientY / H;
  });

  // Double helix parameters
  const HELIX_COUNT = 3;
  const helices = [];
  for (let h = 0; h < HELIX_COUNT; h++) {
    helices.push({
      x: W * (0.15 + h * 0.35),
      amp: 40 + h * 15,
      freq: 0.012 + h * 0.003,
      speed: 0.0006 + h * 0.0002,
      baseSize: 3 + h,
      alpha: 0.06 + h * 0.02,
      rungs: 12 + h * 4
    });
  }

  let time = 0;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    time++;

    const px = (mx - 0.5) * 20;
    const py = (my - 0.5) * 15;

    // Draw helices
    helices.forEach((hx, hi) => {
      const cx = hx.x + px * (hi + 1) * 0.3;
      const phase = time * hx.speed;

      // Draw rungs (base pairs)
      for (let i = 0; i < hx.rungs; i++) {
        const yPos = (H / hx.rungs) * i + (time * 0.3 + hi * 100) % (H / hx.rungs);
        const actualY = yPos % H;

        const x1 = cx + Math.sin(actualY * hx.freq + phase) * hx.amp;
        const x2 = cx + Math.sin(actualY * hx.freq + phase + Math.PI) * hx.amp;

        // Rung connection
        ctx.beginPath();
        ctx.moveTo(x1, actualY + py);
        ctx.lineTo(x2, actualY + py);
        ctx.strokeStyle = `rgba(0, 212, 255, ${hx.alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Base letters on each end
        const bi = (i + hi * 3) % 4;
        const b1 = BASES[bi];
        const b2 = PAIRS[b1];

        ctx.font = `600 ${hx.baseSize + 3}px 'IBM Plex Mono', monospace`;
        ctx.fillStyle = BASE_COL[b1] + '30';
        ctx.textAlign = 'center';
        ctx.fillText(b1, x1, actualY + py + 3);
        ctx.fillStyle = BASE_COL[b2] + '30';
        ctx.fillText(b2, x2, actualY + py + 3);
      }

      // Draw strand 1
      ctx.beginPath();
      for (let y = 0; y < H; y += 3) {
        const x = cx + Math.sin(y * hx.freq + phase) * hx.amp;
        if (y === 0) ctx.moveTo(x, y + py);
        else ctx.lineTo(x, y + py);
      }
      ctx.strokeStyle = `rgba(0, 212, 255, ${hx.alpha})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw strand 2
      ctx.beginPath();
      for (let y = 0; y < H; y += 3) {
        const x = cx + Math.sin(y * hx.freq + phase + Math.PI) * hx.amp;
        if (y === 0) ctx.moveTo(x, y + py);
        else ctx.lineTo(x, y + py);
      }
      ctx.strokeStyle = `rgba(165, 110, 255, ${hx.alpha * 0.7})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
    });

    // Draw floating particles
    particles.forEach(p => {
      p.x += p.vx + Math.sin(time * 0.01 + p.phase) * 0.15;
      p.y += p.vy;
      if (p.x < -20) p.x = W + 20;
      if (p.x > W + 20) p.x = -20;
      if (p.y < -20) p.y = H + 20;
      if (p.y > H + 20) p.y = -20;

      const dx = p.x + px * 0.5;
      const dy = p.y + py * 0.5;

      // Glow
      const g = ctx.createRadialGradient(dx, dy, 0, dx, dy, p.size * 2);
      g.addColorStop(0, BASE_COL[p.base] + Math.round(p.alpha * 255 * 0.5).toString(16).padStart(2, '0'));
      g.addColorStop(1, 'transparent');
      ctx.fillStyle = g;
      ctx.fillRect(dx - p.size * 2, dy - p.size * 2, p.size * 4, p.size * 4);

      // Letter
      ctx.font = `700 ${p.size}px 'IBM Plex Mono', monospace`;
      ctx.fillStyle = BASE_COL[p.base] + Math.round(p.alpha * 255).toString(16).padStart(2, '0');
      ctx.textAlign = 'center';
      ctx.fillText(p.base, dx, dy + p.size * 0.35);
    });

    requestAnimationFrame(draw);
  }

  draw();
})();
