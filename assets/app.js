'use strict';

/* ─── GoatCounter ────────────────────────────────────────────── */
document.addEventListener('click', function (e) {
  const el = e.target.closest('[data-gc-event]');
  if (!el) return;
  const name = el.getAttribute('data-gc-event');
  if (window.goatcounter && window.goatcounter.count) {
    window.goatcounter.count({ path: name, title: name, event: true });
  }
});

/* ─── Nav Scrolled ───────────────────────────────────────────── */
(function () {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  function update() {
    nav.classList.toggle('scrolled', window.scrollY > 10);
  }
  window.addEventListener('scroll', update, { passive: true });
  update();
})();

/* ─── Mobile Menu ────────────────────────────────────────────── */
(function () {
  const btn = document.getElementById('nav-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    const open = menu.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.setAttribute('aria-expanded', false);
      document.body.style.overflow = '';
    });
  });
})();

/* ─── FAQ Accordion ──────────────────────────────────────────── */
(function () {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function (i) {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', false);
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', true);
      }
    });
  });
})();

/* ─── Scroll Reveal ──────────────────────────────────────────── */
(function () {
  if (typeof IntersectionObserver === 'undefined') return;
  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
})();
