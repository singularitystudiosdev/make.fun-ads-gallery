// make.fun ads gallery: reads ads.json (built by build.py) and renders every ad, grouped and filterable.
const $ = (s) => document.querySelector(s);
const el = (tag, attrs = {}, ...kids) => {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === undefined || v === null || v === false) continue;
    if (k === 'class') n.className = v;
    else if (k === 'style') n.style.cssText = v;
    else if (k.startsWith('on')) n.addEventListener(k.slice(2), v);
    else n.setAttribute(k, v === true ? '' : v);
  }
  for (const c of kids.flat()) if (c !== null && c !== undefined && c !== '') n.append(c);
  return n;
};
const src = (p) => '../' + p.split('/').map(encodeURIComponent).join('/');

const RATIOS = [['9:16', 9 / 16], ['4:5', 4 / 5], ['1:1', 1], ['16:9', 16 / 9], ['1.91:1', 1.91]];
const ratioOf = (f) => {
  const r = f.w / f.h;
  const hit = RATIOS.find(([, v]) => Math.abs(r - v) / v < 0.03);
  return hit ? hit[0] : 'Other';
};
const dur = (s) => (s == null ? '' : `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`);

const state = { set: 'all', kind: 'all', cat: 'all', ratio: 'all', q: '' };
let ADS = [];
let shown = [];

function matches(a) {
  if (state.set !== 'all' && a.set !== state.set) return false;
  if (state.kind !== 'all' && a.main.kind !== state.kind) return false;
  if (state.cat !== 'all' && a.category !== state.cat) return false;
  if (state.ratio !== 'all' && a._ratio !== state.ratio) return false;
  if (state.q) {
    const hay = `${a.brand} ${a.category} ${a.title} ${a.headline} ${a.primary}`.toLowerCase();
    if (!state.q.split(/\s+/).every((w) => hay.includes(w))) return false;
  }
  return true;
}

// Video frames load only near the viewport, so 100+ videos do not all fetch at once.
const lazy = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    const v = e.target;
    v.src = v.dataset.src;
    lazy.unobserve(v);
  }
}, { rootMargin: '600px 0px' });

function thumb(a) {
  const r = a.main.w / a.main.h;
  let media;
  if (a.main.kind === 'image') {
    media = el('img', { src: src(a.main.path), alt: '', loading: 'lazy', decoding: 'async', width: a.main.w, height: a.main.h });
  } else if (a.poster) {
    media = el('img', { src: src(a.poster.path), alt: '', loading: 'lazy', decoding: 'async', width: a.poster.w, height: a.poster.h });
  } else {
    media = el('video', { muted: true, playsinline: true, preload: 'metadata', 'data-src': src(a.main.path) + '#t=0.5', width: a.main.w, height: a.main.h });
    lazy.observe(media);
  }
  const badge = a.main.kind === 'video' ? el('span', { class: 'badge' }, dur(a.main.dur)) : null;
  return el('span', { class: 'thumb', style: `--r:${r}` }, media, badge);
}

function tile(a) {
  const r = a.main.w / a.main.h;
  const label = a.set === 'film' ? a.title : (a.headline || a.title);
  const shape = a._ratio === 'Other' ? `${a.main.w}×${a.main.h}` : a._ratio;
  const meta = a.set === 'film'
    ? [`Film ${a.n}`, a.ratio]
    : [`Ad ${a.n}`, a.main.kind === 'video' ? 'Video' : 'Image', shape, a.files.length > 1 ? `${a.files.length} files` : ''];
  return el('button', {
    type: 'button', class: 'tile', style: `--r:${r}`,
    'aria-label': `Open ${a.brand} ${a.set === 'film' ? 'film' : 'ad'} ${a.n}: ${label}`,
    onclick: () => openViewer(shown.indexOf(a)),
  },
  thumb(a),
  el('span', { class: 'cap' },
    el('span', { class: 't' }, label),
    el('span', { class: 'm' }, meta.filter(Boolean).map((m) => el('span', {}, m)))));
}

function render() {
  shown = ADS.filter(matches);
  const out = $('#results');
  out.replaceChildren();
  const films = shown.filter((a) => a.set === 'film');
  const brandAds = shown.filter((a) => a.set === 'brand');
  shown = [...films, ...brandAds];

  if (films.length) {
    out.append(el('section', { class: 'films', 'aria-labelledby': 's-films' },
      el('h1', { class: 'section-title', id: 's-films' }, 'Frontend films ', el('span', { class: 'n' }, String(films.length))),
      el('div', { class: 'group' }, el('div', { class: 'row' }, films.map(tile)))));
  }
  if (brandAds.length) {
    const byBrand = new Map();
    for (const a of brandAds) {
      if (!byBrand.has(a.brand)) byBrand.set(a.brand, []);
      byBrand.get(a.brand).push(a);
    }
    out.append(el('section', { class: 'brands', 'aria-labelledby': 's-brands' },
      el('h1', { class: 'section-title', id: 's-brands' }, 'Converted brand ads ', el('span', { class: 'n' }, String(brandAds.length))),
      [...byBrand].map(([brand, list]) => el('div', { class: 'group' },
        el('div', { class: 'group-head' },
          el('h2', {}, brand),
          el('span', { class: 'about' }, list[0].category),
          el('span', { class: 'about' }, `${list.length} ${list.length === 1 ? 'ad' : 'ads'}`),
          list[0].source ? el('a', { class: 'about', href: list[0].source, target: '_blank', rel: 'noopener' }, 'Source brand site') : null),
        el('div', { class: 'row' }, list.map(tile))))));
  }
  $('#empty').hidden = shown.length > 0;
  $('#count').textContent = `Showing ${shown.length} of ${ADS.length}`;
}

function seg(id, key, options) {
  const box = $(id);
  for (const [value, label, n] of options) {
    box.append(el('button', {
      type: 'button', role: 'radio', 'aria-checked': String(state[key] === value), 'data-v': value,
      onclick: () => {
        state[key] = value;
        for (const b of box.children) b.setAttribute('aria-checked', String(b.dataset.v === value));
        render();
      },
    }, label, el('span', { class: 'n' }, String(n))));
  }
}

function select(id, key, label, values) {
  const s = $(id);
  s.append(el('option', { value: 'all' }, `All ${label}`));
  for (const [v, n] of values) s.append(el('option', { value: v }, `${v} (${n})`));
  s.addEventListener('change', () => { state[key] = s.value; render(); });
}

const tally = (f) => {
  const m = new Map();
  for (const a of ADS) m.set(f(a), (m.get(f(a)) || 0) + 1);
  return [...m].sort((x, y) => y[1] - x[1]);
};

// Viewer
const dlg = $('#viewer');
let cur = -1;

function showFile(a, f) {
  const box = $('#v-media');
  box.replaceChildren(f.kind === 'video'
    ? el('video', { src: src(f.path), controls: true, autoplay: true, playsinline: true, poster: a.poster && f === a.main ? src(a.poster.path) : null })
    : el('img', { src: src(f.path), alt: `${a.brand} ${a.title}`, width: f.w, height: f.h }));
  $('#v-file').textContent = `${f.path}  ${f.w}×${f.h}${f.dur ? `  ${dur(f.dur)}` : ''}`;
  for (const b of $('#v-variants').children) b.setAttribute('aria-pressed', String(b.dataset.p === f.path));
}

function openViewer(i) {
  if (i < 0 || i >= shown.length) return;
  cur = i;
  const a = shown[i];
  $('#v-brand').textContent = a.set === 'film' ? `Frontend film ${a.n}` : `${a.brand}, ${a.category}, ad ${a.n}`;
  $('#v-title').textContent = a.title;
  const rows = a.set === 'film'
    ? [['Ratio', a.ratio], ['Length', dur(a.main.dur)]]
    : [['Headline', a.headline], ['Post text', a.primary], ['Call to action', a.cta]];
  $('#v-copy').replaceChildren(...rows.filter(([, v]) => v).flatMap(([k, v]) => [el('dt', {}, k), el('dd', {}, v)]));
  const links = Object.entries(a.links).map(([k, href]) => el('a', { href, target: '_blank', rel: 'noopener' }, `${k} on GitHub`));
  if (a.source) links.push(el('a', { href: a.source, target: '_blank', rel: 'noopener' }, 'Source brand site'));
  $('#v-links').replaceChildren(...links);
  const variants = $('#v-variants');
  variants.replaceChildren(...(a.files.length > 1 ? a.files.map((f) => el('button', {
    type: 'button', 'data-p': f.path, 'aria-pressed': 'false', onclick: () => showFile(a, f),
  }, `${f.file}  ${ratioOf(f)}`)) : []));
  showFile(a, a.main);
  $('#v-prev').disabled = i === 0;
  $('#v-next').disabled = i === shown.length - 1;
  history.replaceState(null, '', '#' + encodeURIComponent(a.id));
  if (!dlg.open) dlg.showModal();
}

function closeViewer() {
  $('#v-media').replaceChildren();
  history.replaceState(null, '', location.pathname + location.search);
  if (dlg.open) dlg.close();
}

dlg.addEventListener('close', () => { $('#v-media').replaceChildren(); history.replaceState(null, '', location.pathname + location.search); });
dlg.addEventListener('click', (e) => { if (e.target === dlg) closeViewer(); });
$('#v-close').addEventListener('click', closeViewer);
$('#v-prev').addEventListener('click', () => openViewer(cur - 1));
$('#v-next').addEventListener('click', () => openViewer(cur + 1));
document.addEventListener('keydown', (e) => {
  if (dlg.open) {
    if (e.target.tagName === 'VIDEO') return;
    if (e.key === 'ArrowRight') { e.preventDefault(); openViewer(cur + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); openViewer(cur - 1); }
    return;
  }
  if (e.key === '/' && !/INPUT|SELECT|TEXTAREA/.test(document.activeElement.tagName)) {
    e.preventDefault();
    $('#q').focus();
  }
});

let qTimer;
$('#q').addEventListener('input', (e) => {
  clearTimeout(qTimer);
  qTimer = setTimeout(() => { state.q = e.target.value.trim().toLowerCase(); render(); }, 120);
});
$('#clear').addEventListener('click', () => {
  Object.assign(state, { set: 'all', kind: 'all', cat: 'all', ratio: 'all', q: '' });
  $('#q').value = '';
  $('#f-cat').value = 'all';
  $('#f-ratio').value = 'all';
  for (const box of [$('#f-set'), $('#f-kind')]) for (const b of box.children) b.setAttribute('aria-checked', String(b.dataset.v === 'all'));
  render();
});

const res = await fetch('ads.json');
ADS = (await res.json()).map((a) => ({ ...a, _ratio: a.ratio || ratioOf(a.main) }));
const films = ADS.filter((a) => a.set === 'film').length;
const videos = ADS.filter((a) => a.main.kind === 'video').length;
seg('#f-set', 'set', [['all', 'All', ADS.length], ['film', 'Frontend films', films], ['brand', 'Brand ads', ADS.length - films]]);
seg('#f-kind', 'kind', [['all', 'Any format', ADS.length], ['video', 'Video', videos], ['image', 'Image', ADS.length - videos]]);
select('#f-cat', 'cat', 'categories', tally((a) => a.category));
select('#f-ratio', 'ratio', 'ratios', tally((a) => a._ratio));
render();
if (location.hash.length > 1) {
  const id = decodeURIComponent(location.hash.slice(1));
  openViewer(shown.findIndex((a) => a.id === id));
}
