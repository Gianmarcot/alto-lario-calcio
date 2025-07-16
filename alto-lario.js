// BUTTONS ANIMATION
document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll('.b_text');

  targets.forEach(el => {
    const split = new SplitText(el, {
      type: "chars",
      charsClass: "char"
    });

    split.chars.forEach((char, index) => {
      char.style.transitionDelay = `${index * 0.01}s`;
    });
  });
});

// NAVBAR ANIMATION
const dropdown = document.querySelector('.navbar6_menu-dropdown');
const navbar = document.querySelector('.navbar6_component');

// Colori iniziali
const originalBg = window.getComputedStyle(navbar).backgroundColor;
const originalColor = window.getComputedStyle(navbar).color;

// Nuovo colore
const newTextColor = 'var(--_primitives---brand--blue-zodiac)';

dropdown.addEventListener('mouseenter', () => {
  gsap.to(navbar, {
    backgroundColor: '#ffffff',
    color: newTextColor,
    duration: 0.3,
    ease: 'power1.out'
  });
});

dropdown.addEventListener('mouseleave', () => {
  gsap.to(navbar, {
    backgroundColor: originalBg,
    color: originalColor,
    duration: 0.3,
    ease: 'power1.out'
  });
});
