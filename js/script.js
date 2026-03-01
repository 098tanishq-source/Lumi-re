// Loader
window.addEventListener('load', () => setTimeout(() => document.getElementById('loader').classList.add('done'), 1500));

// Nav scroll
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
  checkReveal();
  checkCounters();
});

// Reveal
function checkReveal() {
  document.querySelectorAll('.reveal,.reveal-l,.reveal-r').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) el.classList.add('vis');
  });
}
checkReveal();

// Counters
let cStarted = false;
function checkCounters() {
  if (cStarted) return;
  const el = document.querySelector('[data-target]');
  if (!el || el.getBoundingClientRect().top > window.innerHeight - 60) return;
  cStarted = true;
  document.querySelectorAll('[data-target]').forEach(n => {
    const t = +n.dataset.target; let c = 0; const s = t / 50;
    const iv = setInterval(() => { c = Math.min(c + s, t); n.textContent = Math.round(c); if (c >= t) clearInterval(iv); }, 28);
  });
}
checkCounters();

// Menu cats
document.querySelectorAll('.menu-cats li').forEach(li => {
  li.addEventListener('click', () => {
    document.querySelectorAll('.menu-cats li').forEach(x => x.classList.remove('active'));
    li.classList.add('active');
  });
});

// Testi hover
document.querySelectorAll('.testi-card').forEach(c => {
  c.addEventListener('mouseenter', () => {
    document.querySelectorAll('.testi-card').forEach(x => x.classList.remove('is-active'));
    c.classList.add('is-active');
  });
});

// Form
function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submit-btn');
  btn.textContent = '✓ Reservation Confirmed — See you soon!';
  btn.style.background = '#4a7c59';
  setTimeout(() => { btn.textContent = 'Confirm Reservation'; btn.style.background = ''; }, 4000);
}

// Hero parallax
window.addEventListener('scroll', () => {
  const img = document.querySelector('.hero-img');
  if (img) img.style.transform = `scale(1) translateY(${window.scrollY * 0.5}px)`;
});