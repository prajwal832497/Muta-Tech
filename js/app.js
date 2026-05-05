/* ── app.js — Main application logic with mock data ── */

const MOCK = {
  BRCA1: {
    variant: { chr: 'chr17', pos: '43094464', ref: 'G', alt: 'A' },
    path: { score: 87, verdict: 'PATHOGENIC', cls: 'vp', conf: 92 },
    diseases: [
      { name: 'Breast/Ovarian Cancer', prob: 74, color: '#ef4444', desc: 'Hereditary breast and ovarian cancer syndrome caused by BRCA1 loss-of-function. Significantly increases lifetime cancer risk.', inh: 'Autosomal Dominant' },
      { name: 'Other Hereditary Cancer', prob: 12, color: '#f97316', desc: 'Increased risk for pancreatic, prostate, and other cancers associated with BRCA pathway dysfunction.', inh: 'Autosomal Dominant' },
      { name: 'Blood Disorder', prob: 6, color: '#a855f7', desc: 'Rare hematological manifestations in BRCA1 carriers.', inh: 'Varies' },
      { name: 'Colorectal Cancer', prob: 5, color: '#06b6d4', desc: 'Minor association with colorectal cancer risk.', inh: 'Autosomal Dominant' },
      { name: 'Immune/Skin Disorder', prob: 3, color: '#84cc16', desc: 'Minimal association detected.', inh: 'Varies' }
    ],
    gene: { sym: 'BRCA1', loc: 'chr17:43,044,295–43,170,245', fn: 'Tumor suppressor critical for DNA damage repair via homologous recombination. Maintains genomic stability and regulates cell cycle checkpoints following double-strand breaks.', tags: ['Hereditary Breast Cancer', 'Ovarian Cancer Syndrome', 'Fanconi Anemia Type S'] },
    stats: { type: 'Transition', typeSub: 'G→A (purine→purine)', gc: 48, ent: 1.92, cpg: 'Yes', pos: 'Exon 11 · Coding · p.Asp1778Asn' },
    ref: 'ACGTAGCTAGCTGACGATCGATCGATCGATC',
    alt: 'ACGTAGCTAGCTGACGATCAATCGATCGATC',
    mp: 18,
    attn: [.1,.12,.08,.15,.2,.18,.12,.09,.15,.22,.28,.35,.42,.55,.68,.82,.91,.88,.95,.89,.72,.58,.4,.28,.2,.15,.11,.08,.1,.12,.09],
    expl: [
      'High attention on mutated codon — G→A change in exon 11 disrupts DNA-binding domain architecture',
      'CpG dinucleotide context at mutation site elevates predicted functional impact score',
      'Flanking sequence homology matches known pathogenic ClinVar entries at chr17:43094464'
    ],
    similar: [
      { id: 'rs80357914', gene: 'BRCA1', chg: 'G>A', cls: 'Pathogenic' },
      { id: 'rs28897696', gene: 'BRCA1', chg: 'G>T', cls: 'Pathogenic' },
      { id: 'rs1799950', gene: 'BRCA1', chg: 'C>T', cls: 'Likely Benign' }
    ],
    burden: 1847
  },
  CFTR: {
    variant: { chr: 'chr7', pos: '117548628', ref: 'G', alt: 'A' },
    path: { score: 71, verdict: 'LIKELY PATHOGENIC', cls: 'vlp', conf: 78 },
    diseases: [
      { name: 'Cystic Fibrosis', prob: 62, color: '#06b6d4', desc: 'Autosomal recessive disorder affecting the CFTR chloride channel. Causes thick mucus in lungs, pancreas, and other organs.', inh: 'Autosomal Recessive' },
      { name: 'Other Hereditary Cancer', prob: 14, color: '#f97316', desc: 'Secondary associations with cancer pathways.', inh: 'Varies' },
      { name: 'Kidney Disease', prob: 10, color: '#a855f7', desc: 'Renal complications in severe CF cases.', inh: 'Varies' },
      { name: 'Immune/Skin Disorder', prob: 8, color: '#22c55e', desc: 'Skin salt abnormalities in CF patients.', inh: 'Varies' },
      { name: 'Metabolic Disease', prob: 6, color: '#f59e0b', desc: 'Secondary metabolic complications.', inh: 'Varies' }
    ],
    gene: { sym: 'CFTR', loc: 'chr7:117,480,025–117,668,666', fn: 'Chloride channel protein regulating ion and water transport across epithelial membranes. Essential for hydrating mucus in the lungs, pancreas, and sweat glands.', tags: ['Cystic Fibrosis', 'CBAVD', 'Bronchiectasis'] },
    stats: { type: 'Transition', typeSub: 'G→A (purine→purine)', gc: 41, ent: 1.78, cpg: 'No', pos: 'Exon 10 · Transmembrane domain · p.Gly542Arg' },
    ref: 'GATCGATCGATCGATCGGATCGATCGATCGA',
    alt: 'GATCGATCGATCGATCGAATCGATCGATCGA',
    mp: 17,
    attn: [.05,.08,.1,.12,.09,.14,.18,.25,.35,.48,.62,.75,.82,.88,.91,.85,.78,.92,.88,.72,.55,.4,.28,.18,.12,.09,.07,.06,.08,.07,.06],
    expl: [
      'Gly→Arg substitution in transmembrane domain disrupts hydrophobic packing of channel architecture',
      'Flanking sequence aligns with CFTR Class I mutation patterns predicting nonsense-mediated decay',
      'Lower GC content in region reduces transcript stability, compounding functional impact prediction'
    ],
    similar: [
      { id: 'rs113993960', gene: 'CFTR', chg: 'G>A', cls: 'Pathogenic' },
      { id: 'rs74551128', gene: 'CFTR', chg: 'G>T', cls: 'Likely Pathogenic' },
      { id: 'rs199826652', gene: 'CFTR', chg: 'G>C', cls: 'VUS' }
    ],
    burden: 2012
  },
  TP53: {
    variant: { chr: 'chr17', pos: '7674220', ref: 'C', alt: 'T' },
    path: { score: 79, verdict: 'LIKELY PATHOGENIC', cls: 'vlp', conf: 84 },
    diseases: [
      { name: 'Other Hereditary Cancer', prob: 58, color: '#f97316', desc: 'Li-Fraumeni syndrome — greatly increases risk of multiple cancer types, especially in children and young adults.', inh: 'Autosomal Dominant' },
      { name: 'Colorectal Cancer', prob: 18, color: '#ef4444', desc: 'Elevated colorectal cancer risk in Li-Fraumeni spectrum.', inh: 'Autosomal Dominant' },
      { name: 'Breast/Ovarian Cancer', prob: 11, color: '#ec4899', desc: 'TP53 mutations increase breast cancer risk, especially premenopausal.', inh: 'Autosomal Dominant' },
      { name: 'Blood Disorder', prob: 8, color: '#a855f7', desc: 'Leukemia and lymphoma risk elevated.', inh: 'Autosomal Dominant' },
      { name: 'Neuromuscular', prob: 5, color: '#06b6d4', desc: 'Brain tumors (gliomas) in Li-Fraumeni syndrome.', inh: 'Autosomal Dominant' }
    ],
    gene: { sym: 'TP53', loc: 'chr17:7,668,421–7,687,490', fn: '"Guardian of the genome." Master regulator of apoptosis and cell cycle arrest in response to DNA damage. Activated by multiple stress signals including oncogene activation.', tags: ['Li-Fraumeni Syndrome', 'Multiple Tumor Types', 'Adrenocortical Carcinoma'] },
    stats: { type: 'Transition', typeSub: 'C→T (pyrimidine→pyrimidine)', gc: 52, ent: 1.87, cpg: 'Yes', pos: 'Exon 7 · DNA-binding domain · p.Arg248Trp' },
    ref: 'CGATCGATCGATCGACGATCGACGATCGATC',
    alt: 'CGATCGATCGATCGATGATCGACGATCGATC',
    mp: 15,
    attn: [.08,.1,.15,.12,.18,.22,.28,.35,.45,.6,.72,.85,.9,.88,.92,.95,.88,.75,.6,.45,.35,.25,.18,.14,.1,.08,.09,.11,.08,.07,.09],
    expl: [
      'Arg248 is the most frequently mutated residue in human cancer — high prior pathogenicity probability',
      'DNA-binding domain disruption predicted to abolish transcriptional activation of p21 and MDM2',
      'C→T transition at CpG dinucleotide — canonical mutational hotspot mechanism for TP53'
    ],
    similar: [
      { id: 'rs28934578', gene: 'TP53', chg: 'C>T', cls: 'Pathogenic' },
      { id: 'rs1042522', gene: 'TP53', chg: 'C>G', cls: 'Benign' },
      { id: 'rs587782160', gene: 'TP53', chg: 'C>A', cls: 'Likely Pathogenic' }
    ],
    burden: 3241
  }
};

let CUR = null;

// Loading Screen Logic
window.addEventListener("load", () => {
  const loader = document.getElementById("muta-loader");
  if (loader) {
    // Wait ~2.2 seconds to let the loading bar animation complete
    setTimeout(() => {
      loader.classList.add("fade-out");
      // Remove from DOM after fade transition completes
      setTimeout(() => {
        loader.remove();
      }, 800);
    }, 2200);
  }
});

// Tab switch
function switchTab(t) {
  document.getElementById('t-single').classList.toggle('on', t === 'single');
  document.getElementById('t-vcf').classList.toggle('on', t === 'vcf');
  document.getElementById('f-single').style.display = t === 'single' ? 'flex' : 'none';
  document.getElementById('f-vcf').style.display = t === 'vcf' ? 'block' : 'none';
}

// Input sanitization
document.addEventListener('DOMContentLoaded', () => {
  ['i-ref', 'i-alt'].forEach(id => {
    document.getElementById(id).addEventListener('input', function () {
      this.value = this.value.toUpperCase().replace(/[^ACGT]/g, '');
    });
  });
  ['i-chr', 'i-pos', 'i-ref', 'i-alt'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => { if (e.key === 'Enter') runAnalysis(); });
  });

  // VCF drop
  const vd = document.getElementById('vdrop'), vi = document.getElementById('vfile');
  if (vd && vi) {
    vd.onclick = () => vi.click();
    vd.ondragover = e => { e.preventDefault(); vd.classList.add('drag-over'); };
    vd.ondragleave = () => vd.classList.remove('drag-over');
    vd.ondrop = e => {
      e.preventDefault(); vd.classList.remove('drag-over');
      const f = e.dataTransfer.files[0];
      vd.innerHTML = `<div class="vcf-icon">✅</div><div class="vcf-txt">${f ? f.name : 'File ready'}<br><small>Click Analyze to process</small></div>`;
    };
  }
});

function loadEx(k) {
  const d = MOCK[k];
  document.getElementById('i-chr').value = d.variant.chr;
  document.getElementById('i-pos').value = d.variant.pos;
  document.getElementById('i-ref').value = d.variant.ref;
  document.getElementById('i-alt').value = d.variant.alt;
  runAnalysis(k);
}

// Dynamically point to backend (works for localhost and network IPs)
// If opened directly from file system, fallback to localhost.
const API_BASE = (window.location.protocol === 'file:' || !window.location.hostname) 
  ? 'http://localhost:8000' 
  : window.location.protocol + '//' + window.location.hostname + ':8000';
let USE_API = true; // Will auto-fallback to mock if API unavailable

// Check API health on load
document.addEventListener('DOMContentLoaded', () => {
  fetch(API_BASE + '/health', { signal: AbortSignal.timeout(3000) })
    .then(r => r.json())
    .then(h => {
      USE_API = h.model_loaded;
      const metaEl = document.querySelector('.hdr-meta');
      if (metaEl) metaEl.textContent = USE_API ? 'DNABERT-2 · Dual Model · Live' : 'DNABERT-2 · Mock Mode';
      console.log('API health:', h);
    })
    .catch(() => {
      USE_API = false;
      console.log('API unavailable, using mock data');
    });
});

function apiToFrontend(api, chr, pos, ref, alt) {
  const score = Math.round(api.pathogenicity.pathogenic * 100);
  const conf = Math.round(Math.max(api.pathogenicity.pathogenic, api.pathogenicity.benign) * 100);
  let verdict, cls;
  if (score >= 80) { verdict = 'PATHOGENIC'; cls = 'vp'; }
  else if (score >= 60) { verdict = 'LIKELY PATHOGENIC'; cls = 'vlp'; }
  else if (score >= 40) { verdict = 'UNCERTAIN (VUS)'; cls = 'vv'; }
  else if (score >= 20) { verdict = 'LIKELY BENIGN'; cls = 'vlb'; }
  else { verdict = 'BENIGN'; cls = 'vb'; }

  const stats = api.variant_stats;
  const mp = Math.floor((api.ref_sequence || '').length / 2);

  return {
    variant: { chr, pos, ref, alt },
    path: { score, verdict, cls, conf },
    diseases: (api.disease_predictions || []).map(d => ({
      name: d.name, prob: d.prob, color: d.color || '#06b6d4',
      desc: d.desc || '', inh: d.inh || 'Unknown'
    })),
    gene: api.gene || { sym: '?', loc: '?', fn: '?', tags: [] },
    stats: {
      type: stats.type || 'Unknown',
      typeSub: stats.type_sub || '?',
      gc: Math.round((stats.gc_content || 0) * 100),
      ent: stats.entropy || 0,
      cpg: stats.cpg ? 'Yes' : 'No',
      pos: `chr${chr}:${pos}`
    },
    ref: api.ref_sequence || '',
    alt: api.alt_sequence || '',
    mp,
    attn: api.attention_weights || [],
    expl: api.explanations || [],
    similar: api.similar_variants || [],
    burden: 0
  };
}

function runAnalysis(key) {
  const chr = document.getElementById('i-chr').value.trim();
  const pos = document.getElementById('i-pos').value.trim();
  const ref = document.getElementById('i-ref').value.trim().toUpperCase();
  const alt = document.getElementById('i-alt').value.trim().toUpperCase();
  const vEl = document.getElementById('fval');

  if (!key) {
    if (!chr || !pos) { vEl.style.display = 'block'; vEl.textContent = '⚠ Enter chromosome and position'; return; }
    if (!['A', 'C', 'G', 'T'].includes(ref) || !['A', 'C', 'G', 'T'].includes(alt)) {
      vEl.style.display = 'block'; vEl.textContent = '⚠ Ref and Alt must be A, C, G, or T'; return;
    }
    if (ref === alt) { vEl.style.display = 'block'; vEl.textContent = '⚠ Ref and Alt must differ'; return; }
  }
  vEl.style.display = 'none';

  // Loading state
  const btn = document.getElementById('azBtn');
  const sp = document.getElementById('az-spin');
  const lbl = document.getElementById('az-lbl');
  btn.disabled = true;
  sp.style.display = 'block';
  lbl.textContent = 'Analyzing…';
  document.getElementById('welcome').classList.add('off');
  document.getElementById('results').classList.remove('vis');

  // Determine input values (from key or form)
  const inputChr = key ? MOCK[key]?.variant.chr : chr;
  const inputPos = key ? MOCK[key]?.variant.pos : pos;
  const inputRef = key ? MOCK[key]?.variant.ref : ref;
  const inputAlt = key ? MOCK[key]?.variant.alt : alt;

  if (USE_API) {
    // Try real API
    fetch(API_BASE + '/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chromosome: inputChr.replace('chr', ''),
        position: parseInt(String(inputPos).replace(/,/g, '')),
        ref_allele: inputRef,
        alt_allele: inputAlt
      }),
      signal: AbortSignal.timeout(30000)
    })
    .then(r => {
      if (!r.ok) throw new Error(`API error: ${r.status}`);
      return r.json();
    })
    .then(apiData => {
      btn.disabled = false; sp.style.display = 'none'; lbl.textContent = 'Analyze Variant';
      CUR = apiToFrontend(apiData, inputChr, inputPos, inputRef, inputAlt);
      renderResults(CUR);
      const metaEl = document.querySelector('.hdr-meta');
      if (metaEl) metaEl.textContent = 'DNABERT-2 · Live Prediction';
    })
    .catch(err => {
      console.warn('API call failed, falling back to mock:', err.message);
      fallbackToMock(key, btn, sp, lbl);
    });
  } else {
    // Mock fallback
    setTimeout(() => fallbackToMock(key, btn, sp, lbl), 1100);
  }
}

function fallbackToMock(key, btn, sp, lbl) {
  if (!key) {
    const chr = document.getElementById('i-chr').value.trim();
    const ref = document.getElementById('i-ref').value.trim().toUpperCase();
    const alt = document.getElementById('i-alt').value.trim().toUpperCase();
    if (chr.includes('17') && ref === 'G' && alt === 'A') key = 'BRCA1';
    else if (chr.includes('17') && ref === 'C') key = 'TP53';
    else if (chr.includes('7')) key = 'CFTR';
    else key = 'BRCA1';
  }
  const data = MOCK[key];
  if (!data) return;
  btn.disabled = false; sp.style.display = 'none'; lbl.textContent = 'Analyze Variant';
  CUR = data;
  renderResults(data);
  const metaEl = document.querySelector('.hdr-meta');
  if (metaEl) metaEl.textContent = 'DNABERT-2 · Mock Mode';
}

function renderResults(d) {
  document.getElementById('welcome').classList.add('off');
  document.getElementById('results').classList.add('vis');

  const sEl = document.getElementById('status');
  sEl.classList.add('vis');
  document.getElementById('s-txt').textContent =
    `Analysis complete — ${d.gene.sym}  ${d.variant.chr}:${d.variant.pos}  ${d.variant.ref}→${d.variant.alt}`;
  document.getElementById('s-time').textContent = new Date().toLocaleTimeString();

  drawGauge(d.path.score);
  setVerdict(d.path.score, d.path.verdict, d.path.cls);

  document.getElementById('cv').textContent = d.path.conf + '%';
  document.getElementById('conf-badge').textContent = d.path.conf + '% confidence';
  setTimeout(() => { document.getElementById('cf').style.width = d.path.conf + '%'; }, 250);

  renderBars(d.diseases);
  drawDNA(d);

  document.getElementById('g-sym').textContent = d.gene.sym;
  document.getElementById('g-loc').textContent = d.gene.loc;
  document.getElementById('g-fn').textContent = d.gene.fn;
  document.getElementById('g-tags').innerHTML = d.gene.tags.map(t => `<span class="g-tag">${t}</span>`).join('');

  document.getElementById('sv-type').textContent = d.stats.type;
  document.getElementById('sv-type').style.color = d.stats.type === 'Transition' ? 'var(--acc)' : 'var(--warn)';
  document.getElementById('sv-type-s').textContent = d.stats.typeSub;
  document.getElementById('sv-gc').textContent = d.stats.gc + '%';
  document.getElementById('sv-ent').textContent = d.stats.ent.toFixed(2);
  document.getElementById('sv-cpg').textContent = d.stats.cpg;
  document.getElementById('sv-cpg').style.color = d.stats.cpg === 'Yes' ? 'var(--warn)' : 'var(--ben)';
  document.getElementById('sv-pos').textContent = d.stats.pos;

  document.getElementById('exp-list').innerHTML = d.expl.map((e, i) => `
    <div class="exp-item">
      <div class="exp-num">${i + 1}</div>
      <div class="exp-txt">${e}</div>
    </div>`).join('');

  const classColor = c => c === 'Pathogenic' ? 'var(--path)' : c === 'Likely Pathogenic' ? '#ff6020' :
    c === 'VUS' ? 'var(--warn)' : c === 'Likely Benign' ? '#30c880' : 'var(--ben)';
  document.getElementById('sim-list').innerHTML = d.similar.map(s => `
    <div class="sv-item">
      <div>
        <div class="sv-id">${s.id}</div>
        <div class="sv-info">${s.gene} · ${s.chg}</div>
      </div>
      <span class="sv-cls" style="background:${classColor(s.cls)}22;color:${classColor(s.cls)}">${s.cls}</span>
    </div>`).join('');

  // Gene burden
  document.getElementById('burden-val').textContent = (d.burden || 0).toLocaleString();
  document.getElementById('burden-gene').textContent = d.gene.sym;

  // Radar
  renderRadar(d.diseases);

  document.getElementById('fab').classList.add('vis');
}

// Resize handler for DNA viewer
window.addEventListener('resize', () => { if (CUR) drawDNA(CUR); });

// Interactive hover effect for cards and global cursor glow
const cursorGlow = document.getElementById('cursor-glow');
document.addEventListener('mousemove', e => {
  // Global cursor glow
  if (cursorGlow) {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  }
  
  // Card-specific radial gradients
  for (const card of document.querySelectorAll('.card')) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }
});

// Theme toggle
let isLightMode = false;
function toggleTheme() {
  isLightMode = !isLightMode;
  const video = document.getElementById('video-bg');
  const btn = document.getElementById('theme-btn');
  
  if (isLightMode) {
    document.documentElement.setAttribute('data-theme', 'light');
    video.src = 'assets/bg-video-light.mp4';
    btn.textContent = '🌙';
  } else {
    document.documentElement.removeAttribute('data-theme');
    video.src = 'assets/bg-video.mp4';
    btn.textContent = '☀️';
  }
  
  // Re-render radar chart to update grid colors for the new theme
  if (typeof CUR !== 'undefined' && CUR && CUR.diseases) {
    renderRadar(CUR.diseases);
  }
}

// About toggle
let aboutOpen = false;
function toggleAbout() {
  aboutOpen = !aboutOpen;
  const abt = document.getElementById('about-page');
  const wel = document.getElementById('welcome');
  const res = document.getElementById('results');
  const bpa = document.querySelector('.batch-panel');

  if (aboutOpen) {
    abt.style.display = 'block';
    wel.classList.add('off');
    res.classList.remove('vis');
    bpa.classList.remove('vis');
  } else {
    abt.style.display = 'none';
    if (!CUR) {
      wel.classList.remove('off');
    } else {
      if (document.getElementById('t-single').classList.contains('on')) {
        res.classList.add('vis');
      } else {
        bpa.classList.add('vis');
      }
    }
  }
}
