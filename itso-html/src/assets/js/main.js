"user strict";
// Header Starts
// Gets the Mobile Nav icon by its ID
let bars = document.getElementById('bars');

// Gets the Mobile Nav container
let mobileMenu = document.getElementById('mobileMenu');

// Displays the Mobile Nav when clicked and changes the Nav Icon from three bars to an 'X'
bars.addEventListener('click', function () {
  mobileMenu.classList.toggle('show');
  bars.classList.toggle('fa-times');
});

// Select all elements with class 'clickable-active'
var clickableActiveElements = document.querySelectorAll('.clickable-active');

// Add event listener to each element
clickableActiveElements.forEach(function (element) {
  element.addEventListener('click', function () {
    // Remove 'active' class from all elements
    clickableActiveElements.forEach(function (item) {
      item.classList.remove('active');
    });
    // Add 'active' class to clicked element
    this.classList.add('active');
  });
});

const navLinks = document.querySelectorAll('nav ul li a');
const currentPath = window.location.pathname;

navLinks.forEach((link) => {
  const linkPath = link.pathname; // Get the path of the link
  if (linkPath === currentPath) {
    link.classList.add('active');
  }
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.forEach((otherLink) => {
      otherLink.classList.remove('active');
    });
    link.classList.add('active');
  });
});

// Navbar open close script
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
