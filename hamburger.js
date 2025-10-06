const hamburger = document.getElementById(".hamburger");
const navLinks = document.getElementById(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("open");
});


const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamBurger.classList.remove('active');
    navToggle.classList.remove('active');
  });
});
