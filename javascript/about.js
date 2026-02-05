const loginBtn = document.getElementById("openLogin");
const loginOverlay = document.getElementById("loginOverlay");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener("click", e => {
  e.preventDefault();
  loginOverlay.classList.add("active");
  document.body.style.overflow = "hidden";
});

closeLogin.addEventListener("click", () => {
  loginOverlay.classList.remove("active");
  document.body.style.overflow = "auto";
});

loginOverlay.addEventListener("click", e => {
  if (e.target === loginOverlay) {
    loginOverlay.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});



