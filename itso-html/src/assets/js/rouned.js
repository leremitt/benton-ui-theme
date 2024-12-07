"use strict";

document.addEventListener("DOMContentLoaded", function () {
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




// Hero Section countdown Starts
(function () {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  //I'm adding this section so I don't have to keep updating this pen every year :-)
  //remove this if you don't need it
  let today = new Date(),
    dd = String(today.getDate()).padStart(2, "0"),
    mm = String(today.getMonth() + 1).padStart(2, "0"),
    yyyy = today.getFullYear(),
    nextYear = yyyy + 1,
    dayMonth = "06/17/",
    birthday = dayMonth + yyyy;

  today = mm + "/" + dd + "/" + yyyy;
  if (today > birthday) {
    birthday = dayMonth + nextYear;
  }
  //end

  const countDown = new Date(birthday).getTime(),
    x = setInterval(function () {

      const now = new Date().getTime(),
        distance = countDown - now;

      document.getElementById("days").innerText = Math.floor(distance / (day)),
        document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

      //do something later when date is reached
      if (distance < 0) {
        document.getElementById("headline").innerText = "It's my birthday!";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("content").style.display = "block";
        clearInterval(x);
      }
      //seconds
    }, 0)
}());

// Countdown ends



});
