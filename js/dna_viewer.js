/* ── dna_viewer.js — Canvas DNA sequence viewer with attention heatmap ── */

const BC = { A: '#22c55e', T: '#ef4444', G: '#f59e0b', C: '#3b82f6' };

function drawDNA(d) {
  const cv = document.getElementById('dna-cv');
  const ctx = cv.getContext('2d');
  const ref = d.ref, alt = d.alt, attn = d.attn, mp = d.mp;
  const len = ref.length;
  const BW = 22;
  const W = Math.max(580, len * BW + 40);
  cv.width = W; cv.height = 118;

  ctx.clearRect(0, 0, W, 118);
  ctx.fillStyle = '#050a12';
  ctx.fillRect(0, 0, W, 118);

  const sx = 20;

  // Attention heatmap row
  for (let i = 0; i < len; i++) {
    const a = attn[i] || 0;
    const x = sx + i * BW;
    const r = Math.round(255 * a);
    const g = Math.round(60 * (1 - a));
    ctx.fillStyle = `rgba(${r},${g},0,${a * 0.62})`;
    ctx.fillRect(x, 2, BW - 2, 13);
  }
  ctx.fillStyle = 'rgba(255,255,255,.22)';
  ctx.font = '8px IBM Plex Mono,monospace';
  ctx.fillText('ATT', 2, 11);

  // Ruler
  ctx.fillStyle = 'rgba(255,255,255,.18)';
  ctx.font = '7.5px IBM Plex Mono,monospace';
  for (let i = 0; i < len; i += 5) {
    const x = sx + i * BW;
    ctx.fillText(i, x, 29);
    ctx.fillRect(x, 30, 1, 3.5);
  }

  // Row labels
  ctx.font = 'bold 8.5px IBM Plex Mono,monospace';
  ctx.fillStyle = 'rgba(255,255,255,.32)';
  ctx.fillText('REF', 2, 63);
  ctx.fillText('ALT', 2, 95);

  function rrect(cx, cy, cw, ch, cr) {
    ctx.beginPath();
    ctx.moveTo(cx + cr, cy);
    ctx.lineTo(cx + cw - cr, cy);
    ctx.quadraticCurveTo(cx + cw, cy, cx + cw, cy + cr);
    ctx.lineTo(cx + cw, cy + ch - cr);
    ctx.quadraticCurveTo(cx + cw, cy + ch, cx + cw - cr, cy + ch);
    ctx.lineTo(cx + cr, cy + ch);
    ctx.quadraticCurveTo(cx, cy + ch, cx, cy + ch - cr);
    ctx.lineTo(cx, cy + cr);
    ctx.quadraticCurveTo(cx, cy, cx + cr, cy);
    ctx.closePath();
  }

  function drawSeq(seq, y, isAlt) {
    ctx.font = 'bold 11px IBM Plex Mono,monospace';
    for (let i = 0; i < seq.length; i++) {
      const b = seq[i];
      const x = sx + i * BW;
      if (i === mp) {
        if (isAlt) {
          ctx.fillStyle = 'rgba(255,59,92,.22)';
          rrect(x - 1, y - 13, BW, 16, 3);
          ctx.fill();
          ctx.strokeStyle = '#ef4444';
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          ctx.fillStyle = 'rgba(255,255,255,.07)';
          rrect(x - 1, y - 13, BW, 16, 3);
          ctx.fill();
        }
      }
      ctx.fillStyle = (isAlt && i === mp) ? '#ef4444' : (BC[b] || '#888');
      ctx.fillText(b, x + 3.5, y);
    }
  }

  drawSeq(ref, 63, false);
  drawSeq(alt, 95, true);

  // Mutation connector
  const mxx = sx + mp * BW + BW / 2;
  ctx.strokeStyle = 'rgba(239,68,68,.35)';
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 3]);
  ctx.beginPath();
  ctx.moveTo(mxx, 71);
  ctx.lineTo(mxx, 83);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.fillStyle = '#ef4444';
  ctx.font = '8px sans-serif';
  ctx.fillText('▲', mxx - 3.5, 82);
}
