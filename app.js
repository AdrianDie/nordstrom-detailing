const menuBtn = document.getElementById('mobileMenuBtn');
const menuOverlay = document.getElementById('mobileNavOverlay');

if (menuBtn && menuOverlay) {
  const closeMenu = () => {
    menuBtn.classList.remove('is-open');
    menuOverlay.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  const openMenu = () => {
    menuBtn.classList.add('is-open');
    menuOverlay.classList.add('is-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };
  menuBtn.addEventListener('click', () => {
    if (menuOverlay.classList.contains('is-open')) closeMenu();
    else openMenu();
  });
  menuOverlay.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', closeMenu)
  );
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.section, .cta-section'
);

if (window.gsap && !prefersReduced) {
  gsap.registerPlugin(ScrollTrigger);
  revealTargets.forEach(el => {
    gsap.from(el, {
      opacity: 0,
      y: 24,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
      },
    });
  });
}
