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

