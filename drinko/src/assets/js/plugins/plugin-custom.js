"use strict";
document.addEventListener("DOMContentLoaded", function () {

  //initialize aos
AOS.init()



    let reviewSlider = document.querySelector('.testimonial-slider-carousel');
    if (reviewSlider) {
      const swiper = new Swiper(reviewSlider, {
        loop: true,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 24,
        autoplay:{
          delay:3000,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable:true,
          renderBullet: function (index, className) {
            return (
              '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>"
            );
          },
        },
      });
    }
    



});