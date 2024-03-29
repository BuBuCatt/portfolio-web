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




function toggleNavMenu() {
  var navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

var menuIcon = document.querySelector('.menu-toggle');
menuIcon.addEventListener('click', function(event) {
  event.preventDefault(); // Prevents the link action
  toggleNavMenu(); // Toggles the 'active' class on or off
});





document.querySelector('.arrow').addEventListener('click', function() {
  window.scrollBy({
      top: 500, // Adjust the value to scroll down by the desired amount of pixels
      left: 0,
      behavior: 'smooth'
  });
});




