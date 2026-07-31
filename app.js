// Webflow's own CSS already shows the mobile menu via the
// `[data-nav-menu-open]{display:block!important}` rule (kept in style.css) --
// webflow.js used to toggle that attribute on click, so app.js just does the same thing.
const hamburger = document.querySelector('.hamburger-menu-wrapper');
const navMenu = document.querySelector('.header-nav-menu-wrapper');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = navMenu.hasAttribute('data-nav-menu-open');
    if (isOpen) {
      navMenu.removeAttribute('data-nav-menu-open');
      hamburger.classList.remove('w--open');
    } else {
      navMenu.setAttribute('data-nav-menu-open', '');
      hamburger.classList.add('w--open');
    }
  });
  navMenu.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => {
      navMenu.removeAttribute('data-nav-menu-open');
      hamburger.classList.remove('w--open');
    })
  );
}

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealTargets = document.querySelectorAll(
  '.section, .cta-section, .header-wrapper'
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
