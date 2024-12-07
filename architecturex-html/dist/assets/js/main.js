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

document.querySelectorAll(".move-btn").forEach((btn) => {
  const oneItem = btn.querySelector(".one");
  const twoItem = btn.querySelector(".two");
  btn.addEventListener("mouseover", () => {
    const oneWidth = oneItem.offsetWidth;
    const twoWidth = twoItem.offsetWidth;
    oneItem.style.transform = `translateX(${twoWidth}px)`;
    twoItem.style.transform = `translateX(${-oneWidth}px)`;
  });
  btn.addEventListener("mouseout", () => {
    oneItem.style.transform = "none";
    twoItem.style.transform = "none";
  });
});


// document.querySelectorAll('.menu-link').forEach(link => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault();

//     const targetId = this.getAttribute('href').substring(1);
//     const targetElement = document.getElementById(targetId);

//     window.scrollTo({
//       top: targetElement.offsetTop,
//       behavior: 'smooth'
//     });
//   });
// });





document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('progress-bar');
  const progressPercentage = document.getElementById('progress-percentage');
  let progress = 0;

  const updateProgressBar = () => {
    if (progress <= 75) {
      progressBar.style.width = progress + '%';
      progressPercentage.textContent = progress + '%';
      progress++;
      setTimeout(updateProgressBar, 100);
    }
  };

  updateProgressBar();
});


// script.js

document.addEventListener('DOMContentLoaded', () => {
  const progressBar1 = document.getElementById('progress-bar-1');
  const progressPercentage1 = document.getElementById('progress-percentage-1');
  let progress1 = 0;

  const updateProgressBar1 = () => {
    if (progress1 <= 90) {
      progressBar1.style.width = progress1 + '%';
      progressPercentage1.textContent = progress1 + '%';
      progress1++;
      setTimeout(updateProgressBar1, 90);
    }
  };

  updateProgressBar1();

  const progressBar2 = document.getElementById('progress-bar-2');
  const progressPercentage2 = document.getElementById('progress-percentage-2');
  let progress2 = 0;

  const updateProgressBar2 = () => {
    if (progress2 <= 75) {
      progressBar2.style.width = progress2 + '%';
      progressPercentage2.textContent = progress2 + '%';
      progress2++;
      setTimeout(updateProgressBar2, 75);
    }
  };

  updateProgressBar2();
});


// Back to demo Starts
const sidebarDemoBtn = document.getElementById("sidebar-demo-btn");
  const sidebarCloseBtn = document.getElementById("sidebar-close-btn");
  sidebarDemoBtn &&
    sidebarDemoBtn.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("translate-x-[100%]");
    });
  sidebarCloseBtn &&
    sidebarCloseBtn.addEventListener("click", () => {
      document.getElementById("sidebar").classList.toggle("translate-x-[100%]");
    });
// Back to demo Ends