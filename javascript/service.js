// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q=>{
  q.addEventListener('click', ()=>{
    q.classList.toggle('active');
    const a = q.nextElementSibling;
    a.style.maxHeight = a.style.maxHeight ? null : a.scrollHeight + "px";
  });
});


  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", function() {
    // Hamburger toggle (if you have it)
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
      });
    }

    // Show Solar Form
    const showFormBtn = document.getElementById('showSolarForm');
    const solarForm = document.getElementById('solarRequest');

    showFormBtn.addEventListener('click', () => {
      solarForm.style.display = 'block'; // show form
      solarForm.scrollIntoView({ behavior: 'smooth' }); // scroll to form
      showFormBtn.style.display = 'none'; // optional: hide button
    });
  });

  
 




