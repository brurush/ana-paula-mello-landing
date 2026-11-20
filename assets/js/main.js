clearTimeout(window.__apmWatchdog);

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (reduceMotion.matches || !('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-in'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
}

function initYear() {
  const target = document.getElementById('ano');
  if (target) target.textContent = String(new Date().getFullYear());
}

function initTriage() {
  const form = document.getElementById('triage');
  const link = document.getElementById('triage-link');
  if (!form || !link) return;

  const number = form.dataset.whatsapp;
  if (!number) return;

  const tipo = form.querySelector('#tipo');
  const vinculo = form.querySelector('#vinculo');
  const cidade = form.querySelector('#cidade');

  const build = () => {
    const parts = ['Olá, Ana Paula. Vim pelo site.'];
    if (tipo && tipo.value) parts.push(`Meu caso: ${tipo.value}.`);
    if (vinculo && vinculo.value) parts.push(vinculo.value);
    const local = cidade && cidade.value.trim();
    if (local) parts.push(`Cidade: ${local}.`);
    parts.push('Gostaria de orientação sobre os próximos passos.');
    return `https://wa.me/${number}?text=${encodeURIComponent(parts.join(' '))}`;
  };

  const sync = () => {
    link.href = build();
  };

  [tipo, vinculo].forEach((field) => {
    if (field) field.addEventListener('change', sync);
  });
  if (cidade) cidade.addEventListener('input', sync);

  sync();
}

initReveal();
initYear();
initTriage();
