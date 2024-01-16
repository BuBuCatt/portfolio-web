// for the hamburger menu active 
function toggleMenu() {
  var nav = document.querySelector('.nav');
  if (nav) {
    nav.classList.toggle('active');
  } else {
    console.error('Navigation element not found!');
  }
}

