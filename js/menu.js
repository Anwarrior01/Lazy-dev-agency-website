const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelectorAll(".nav ul li a");

if (menuIcon && navLinks.length) {
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (menuIcon.tagName === "INPUT" && menuIcon.type === "checkbox") {
        menuIcon.checked = false;
      } else {
        menuIcon.classList.remove("open"); 
      }
    });
  });
}
