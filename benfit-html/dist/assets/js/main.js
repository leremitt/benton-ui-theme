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

// Hero Section countdown Starts
// (function () {
//   const second = 1000,
//     minute = second * 60,
//     hour = minute * 60,
//     day = hour * 24;

//   //I'm adding this section so I don't have to keep updating this pen every year :-)
//   //remove this if you don't need it
//   let today = new Date(),
//     dd = String(today.getDate()).padStart(2, "0"),
//     mm = String(today.getMonth() + 1).padStart(2, "0"),
//     yyyy = today.getFullYear(),
//     nextYear = yyyy + 1,
//     dayMonth = "06/17/",
//     birthday = dayMonth + yyyy;

//   today = mm + "/" + dd + "/" + yyyy;
//   if (today > birthday) {
//     birthday = dayMonth + nextYear;
//   }
//   //end

//   const countDown = new Date(birthday).getTime(),
//     x = setInterval(function () {

//       const now = new Date().getTime(),
//         distance = countDown - now;

//       document.getElementById("days").innerText = Math.floor(distance / (day)),
//         document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
//         document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
//         document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

//       //do something later when date is reached
//       if (distance < 0) {
//         document.getElementById("headline").innerText = "It's my birthday!";
//         document.getElementById("countdown").style.display = "none";
//         document.getElementById("content").style.display = "block";
//         clearInterval(x);
//       }
//       //seconds
//     }, 0)
// }());

// Countdown ends

// Circle Text
const text = document.querySelector(".circle-text.first p");
const text2 = document.querySelector(".circle-text.second p");
const text3 = document.querySelector(".circle-text.third p");
if (text) {
  text.innerHTML = text.innerText.split('').map(
    (char, i) =>
      `<span style="transform:rotate(${i * 8.5}deg)">${char}</span>`
  ).join('');
}
if (text2) {
  text2.innerHTML = text2.innerText.split('').map(
    (char, i) =>
      `<span style="transform:rotate(${i * 14}deg)">${char}</span>`
  ).join('');
}
if (text3) {
  text3.innerHTML = text3.innerText.split('').map(
    (char, i) =>
      `<span style="transform:rotate(${i * 12}deg)">${char}</span>`
  ).join('');
}

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


// const odometerElements = document.querySelectorAll(".odometer");
// function initOdometer(entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       const odometerElement = entry.target.querySelector(".odometer");
//       const elementValue = Number(
//         odometerElement.getAttribute("counter-value")
//       );
//       const od = new Odometer({
//         el: odometerElement,
//         value: 0,
//         format: "",
//         theme: "digital",
//       });
//       od.update(elementValue);
//       observer.unobserve(entry.target);
//     }
//   });
// }
// // Initialize IntersectionObserver for each odometer element
// odometerElements &&
//   odometerElements.forEach((item) => {
//     const observer = new IntersectionObserver(initOdometer);
//     observer.observe(item.parentElement);
//   });



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