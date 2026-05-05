/* ── charts.js — Custom gauge + disease bars + radar ── */

function scoreCol(s) {
  if (s < 20) return '#22c55e';
  if (s < 40) return '#30c880';
  if (s < 60) return '#f59e0b';
  if (s < 80) return '#f97316';
  return '#ef4444';
}

function drawGauge(score) {
  const cv = document.getElementById('gcv');
  const ctx = cv.getContext('2d');
  cv.width = 190; cv.height = 124;
  const cx = 95, cy = 106, R = 72, SA = Math.PI, EA = 2 * Math.PI;
  const trackCol = 'rgba(255,255,255,.06)';

  function draw(pct) {
    ctx.clearRect(0, 0, 190, 124);
    ctx.beginPath(); ctx.arc(cx, cy, R, SA, EA);
    ctx.strokeStyle = trackCol; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.stroke();
    for (let i = 0; i <= 10; i++) {
      const a = SA + (EA - SA) * (i / 10);
      const ix = cx + (R + 18) * Math.cos(a), iy = cy + (R + 18) * Math.sin(a);
      const ox = cx + (R + 22) * Math.cos(a), oy = cy + (R + 22) * Math.sin(a);
      ctx.beginPath(); ctx.moveTo(ix, iy); ctx.lineTo(ox, oy);
      ctx.strokeStyle = 'rgba(255,255,255,.12)'; ctx.lineWidth = 1.5; ctx.stroke();
    }
    if (pct <= 0) return;
    const ang = SA + (EA - SA) * pct;
    const g = ctx.createLinearGradient(20, cy, 170, cy);
    g.addColorStop(0, '#22c55e'); g.addColorStop(.38, '#f59e0b');
    g.addColorStop(.65, '#f97316'); g.addColorStop(1, '#ef4444');
    ctx.beginPath(); ctx.arc(cx, cy, R, SA, ang);
    ctx.strokeStyle = g; ctx.lineWidth = 12; ctx.lineCap = 'round'; ctx.stroke();
    const nx = cx + R * Math.cos(ang), ny = cy + R * Math.sin(ang);
    const col = scoreCol(pct * 100);
    ctx.beginPath(); ctx.arc(nx, ny, 12, 0, Math.PI * 2);
    ctx.fillStyle = col + '28'; ctx.fill();
    ctx.beginPath(); ctx.arc(nx, ny, 5, 0, Math.PI * 2);
    ctx.fillStyle = col; ctx.fill();
    ctx.beginPath(); ctx.arc(nx, ny, 2.5, 0, Math.PI * 2);
    ctx.fillStyle = '#fff'; ctx.fill();
    const sc = Math.round(pct * 100);
    document.getElementById('g-sc').textContent = sc;
    document.getElementById('g-sc').style.color = scoreCol(sc);
  }

  let st = performance.now();
  const tgt = score / 100;
  (function anim(now) {
    const t = Math.min((now - st) / 1400, 1);
    const e = 1 - Math.pow(1 - t, 3);
    draw(e * tgt);
    if (t < 1) requestAnimationFrame(anim);
  })(st);
}

function setVerdict(score, verdict, cls) {
  const b = document.getElementById('vbadge');
  b.textContent = verdict;
  b.className = 'vbadge ' + cls;
  [0, 1, 2, 3, 4].forEach(i => {
    const active = (i === 0 && score < 20) || (i === 1 && score >= 20 && score < 40) ||
      (i === 2 && score >= 40 && score < 60) || (i === 3 && score >= 60 && score < 80) || (i === 4 && score >= 80);
    document.getElementById('th' + i).classList.toggle('on', active);
  });
}

function renderBars(diseases) {
  const c = document.getElementById('d-bars');
  c.innerHTML = diseases.map((d, i) => `
    <div class="d-item">
      <div class="d-hd">
        <span class="d-name">${d.name}</span>
        <span class="d-pct">${d.prob}%</span>
      </div>
      <div class="d-track">
        <div class="d-fill" id="db${i}" style="background:${d.color}"></div>
      </div>
    </div>`).join('');

  // Expandable cards
  const cardsHtml = diseases.map((d, i) => `
    <div class="dc" id="dc-${i}" onclick="this.classList.toggle('open')">
      <div class="dc-hd">
        <span>${d.name}</span>
        <span class="dc-arr">▼</span>
      </div>
      <div class="dc-body">
        <p>${d.desc || 'Associated genetic condition identified by AI model prediction.'}</p>
        <div class="dc-meta">
          <span>🧬 ${d.inh || 'Autosomal'}</span>
          <span>📊 ${d.prob}%</span>
        </div>
      </div>
    </div>`).join('');
  c.innerHTML += cardsHtml;

  setTimeout(() => {
    diseases.forEach((d, i) => {
      setTimeout(() => {
        const el = document.getElementById('db' + i);
        if (el) el.style.width = d.prob + '%';
      }, i * 110);
    });
  }, 300);
}

// Radar chart
let radarChart = null;

function renderRadar(diseases) {
  const canvas = document.getElementById('radar-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (radarChart) radarChart.destroy();

  const labels = diseases.map(d => d.name.length > 18 ? d.name.slice(0, 16) + '…' : d.name);
  const data = diseases.map(d => d.prob);

  radarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels,
      datasets: [{
        label: 'Disease Risk %',
        data,
        backgroundColor: 'rgba(255,51,0,.12)',
        borderColor: '#ff3300',
        borderWidth: 2,
        pointBackgroundColor: data.map(v => v > 30 ? '#ff3b5c' : '#ff3300'),
        pointRadius: data.map(v => v > 30 ? 5 : 3),
        pointBorderColor: '#fff',
        pointBorderWidth: 1
      }]
    },
    options: {
      responsive: true, maintainAspectRatio: true,
      scales: {
        r: {
          beginAtZero: true, max: 100,
          grid: { color: document.documentElement.getAttribute('data-theme') === 'light' ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.06)' },
          angleLines: { color: document.documentElement.getAttribute('data-theme') === 'light' ? 'rgba(0,0,0,.08)' : 'rgba(255,255,255,.06)' },
          pointLabels: { color: '#6e86b0', font: { size: 9, family: 'DM Sans' } },
          ticks: { display: false }
        }
      },
      plugins: { legend: { display: false } },
      animation: { duration: 1000, easing: 'easeOutQuart' }
    }
  });
}
