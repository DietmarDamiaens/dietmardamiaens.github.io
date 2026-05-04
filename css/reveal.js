// Scroll-triggered fade-in for elements with .reveal
(function () {
  const targets = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // small stagger based on order in viewport
        setTimeout(() => entry.target.classList.add('is-visible'), i * 60);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
})();
