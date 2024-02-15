// adding sticky navbar

/* 
    searches the document for the first element 
    that matches the <header> tag
    and assigns it to the variable header.
  */
const header = document.querySelector("header");

/* 
    registers an event listener for the scroll event on the window object.
    Whenever the user scrolls up or down the page, the specified function 
    (the anonymous function provided as the second argument) will be called.
  */

/*

    If the condition is true 
    (meaning the page has been scrolled down 55 pixels or more), 
    the "sticky" class is added to the header.
    If the condition is false (the page is scrolled less than 55 pixels), 
    the "sticky" class is removed.

*/

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY >= 55 );
});




// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Select the menu icon
  const menuIcon = document.getElementById('menu-icon');

  // Select the navigation menu
  const navMenu = document.querySelector('.nav-menu');

  // Listen for a click event on the menu icon
  menuIcon.addEventListener('click', function() {
      // Check if the nav menu is currently displayed
      if (navMenu.style.display === 'block') {
          // If it is, hide it
          navMenu.style.display = 'none';
      } else {
          // Otherwise, show it
          navMenu.style.display = 'block';
      }
  });
});