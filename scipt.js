const processSteps = document.querySelectorAll('.process-step');

const revealSteps = () => {
  console.log('Scroll event triggered'); // Debugging log
  const triggerBottom = window.innerHeight * 0.9;

  processSteps.forEach((step) => {
    const boxTop = step.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      step.classList.add('show');
    } else {
      step.classList.remove('show');
    }
  });
};

// Ensure DOM is fully loaded
window.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', revealSteps);
  revealSteps(); // Trigger initial check
});
