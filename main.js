const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".navLinks");
const navLink = document.querySelectorAll(".navLink");

menuBtn.addEventListener("click", () => {
  toggle();
});
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    if (menuBtn.classList.contains("open")) {
      toggle();
    }
  });
});

function toggle() {
  menuBtn.classList.toggle("open");
  navLinks.classList.toggle("open");
}