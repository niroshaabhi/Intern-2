document.addEventListener("DOMContentLoaded", function () {

 
  /* -------- Search Bar -------- */
  const searchInput = document.getElementById("searchInput");

  if (searchInput) {
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        alert(`Searching for: ${searchInput.value}`);
      }
    });
  }

  /* -------- Solar Slider / Advertisement -------- */
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");

  if (slides.length > 0) {
    slides[0].classList.add("active");

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 4000); // 4 seconds
  }

});
// === Scroll-triggered fade-in for solar section ===
document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("hidden");
      }
    });
  }, { threshold: 0.3 });

  const section = document.querySelector(".solar-section");
  if (section) observer.observe(section);
});
/* === Auto Sliding Solar Banner === */
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".solar-slider .slide");
  let currentIndex = 0;

  // Function to show the current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.opacity = "0";
      if (i === index) {
        slide.classList.add("active");
        slide.style.opacity = "1";
      }
    });
  }

  // Auto slide every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000); // 5000ms = 5 seconds
});
// === LOGIN MODAL LOGIC ===
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn"); // your header button
  const loginOverlay = document.getElementById("loginOverlay");
  const closeLogin = document.getElementById("closeLogin");

  // Open modal
  loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    loginOverlay.classList.add("active");
  });

  // Close modal
  closeLogin.addEventListener("click", () => {
    loginOverlay.classList.remove("active");
  });

  // Close when clicking outside modal
  loginOverlay.addEventListener("click", (e) => {
    if (e.target === loginOverlay) {
      loginOverlay.classList.remove("active");
    }
  });
});





