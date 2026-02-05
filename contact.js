
  const form = document.getElementById("contactForm");
  const popup = document.getElementById("popup");

  form.addEventListener("submit", function(e) {
    e.preventDefault();       // stop page reload
    popup.style.display = "flex";
    form.reset();             // clear form
  });

  function closePopup() {
    popup.style.display = "none";
  }
