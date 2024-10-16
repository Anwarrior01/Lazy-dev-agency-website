const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelectorAll(".nav ul li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuIcon.checked = false;
  });
});
