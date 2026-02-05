// Optional: Log or animate icon clicks
document.querySelectorAll('.helper-icon').forEach((icon) => {
  icon.addEventListener('click', () => {
    console.log(`Clicked: ${icon.id}`);
  });
});

// Optional: Pulse animation on page load
window.addEventListener('load', () => {
  const icons = document.querySelectorAll('.helper-icon');
  icons.forEach((icon, index) => {
    setTimeout(() => {
      icon.style.transform = 'scale(1.15)';
      setTimeout(() => (icon.style.transform = 'scale(1)'), 300);
    }, index * 200);
  });
});

