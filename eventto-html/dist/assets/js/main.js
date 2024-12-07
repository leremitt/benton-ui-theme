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

// Header Ends


document.querySelectorAll(".tablinks .nav-links").forEach(function (element) {
  var targetTab = element.closest(".singletab");
  targetTab.querySelectorAll(".tablinks .nav-links").forEach(function (navBtn) {
    navBtn.addEventListener('click', function () {
      var navBtns = targetTab.querySelectorAll(".tablinks .nav-links");
      navBtns.forEach(function (btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
      var indexNum = Array.from(this.closest("li").parentNode.children).indexOf(this.closest("li"));
      var tabcontent = targetTab.querySelectorAll(".tabcontents .tabitem");
      tabcontent.forEach(function (item) {
        item.classList.remove('active');
      });
      tabcontent[indexNum].classList.add('active');
    });
  });
});


const odometerElements = document.querySelectorAll(".odometer");
function initOdometer(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const odometerElement = entry.target.querySelector(".odometer");
      const elementValue = Number(
        odometerElement.getAttribute("counter-value")
      );
      const od = new Odometer({
        el: odometerElement,
        value: 0,
        format: "",
        theme: "digital",
      });
      od.update(elementValue);
      observer.unobserve(entry.target);
    }
  });
}
// Initialize IntersectionObserver for each odometer element
odometerElements &&
  odometerElements.forEach((item) => {
    const observer = new IntersectionObserver(initOdometer);
    observer.observe(item.parentElement);
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

