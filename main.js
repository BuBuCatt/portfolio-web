// for the hamburger menu active 

function toggleMenu() {
  const menu = document.querySelector(".nav-menu");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
