"use strict";

document.addEventListener("DOMContentLoaded", function () {
  // Header Starts
  // Gets the Mobile Nav icon by its ID
  let bars = document.getElementById('bars');

  // Gets the Mobile Nav container
  let mobileMenu = document.getElementById('mobileMenu');

});

// Navbar open close script
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
// // Header Ends

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