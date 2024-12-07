/* ==============
 ========= js documentation ==========================

 * theme name: Applex
 * version: 1.0
 * description: 
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. preloader
     -------------------------------------------------
     02. scroll to top button
     -------------------------------------------------
     03. menu
     -------------------------------------------------
     04. Reusable function for show/hide dropdown
     -------------------------------------------------
     05. swiper js slider
     -------------------------------------------------
     06. pricing tab
     -------------------------------------------------
     07. odometer
     -------------------------------------------------
    ==================================================
============== */

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  /**
   * ======================================
   * 01. preloader
   * ======================================
   */
  const preloaderContainerOne = document.querySelector(".preloader-one");
  const preloaderContainerTwo = document.querySelector(".preloader-two");
  const preloaderTop = document.querySelector(".preloader-top");
  const preloaderBottom = document.querySelector(".preloader-bottom");

  setTimeout(function () {
    preloaderTop && preloaderTop.classList.add("active");
    preloaderBottom && preloaderBottom.classList.add("active");
  }, 500);

  setTimeout(() => {
    preloaderContainerOne && preloaderContainerOne.classList.add("hidden");
    preloaderContainerTwo && preloaderContainerTwo.classList.add("hidden");
  }, 1000);
  AOS.init();
  /**
   * ======================================
   * 02. scroll to top button
   * ======================================
   */
  const scrollTopButton = document.querySelector(".scroll-top");
  const handleProgressClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  scrollTopButton &&
    scrollTopButton.addEventListener("click", handleProgressClick);

  window.addEventListener("scroll", function () {
    let scrollHeight = window.scrollY;

    if (scrollHeight > 500) {
      scrollTopButton && scrollTopButton.classList.add("opacity-1");
      scrollTopButton && scrollTopButton.classList.add("visible");
      scrollTopButton && scrollTopButton.classList.remove("invisible");
      scrollTopButton && scrollTopButton.classList.remove("opacity-0");
    } else {
      scrollTopButton && scrollTopButton.classList.remove("opacity-1");
      scrollTopButton && scrollTopButton.classList.remove("visible");
      scrollTopButton && scrollTopButton.classList.add("invisible");
      scrollTopButton && scrollTopButton.classList.add("opacity-0");
    }
  });

  /**
   * ======================================
   * 03. menu
   * ======================================
   */

  // Get the current page URL
  const currentUrl = window.location.pathname;

  let withoutSlash;
  if (currentUrl.length > 1) {
    withoutSlash = currentUrl.split("/")[1];
  } else {
    withoutSlash = currentUrl;
  }

  const singleMenu = document.querySelectorAll(".single-menu");

  singleMenu &&
    singleMenu.forEach((item) => {
      const menuItemUrl = item.getAttribute("href");
      if (withoutSlash === menuItemUrl) {
        item.classList.add("active-nav");
      }
    });

  /**
   * ======================================
   * 04. Reusable function for show/hide dropdown
   * ======================================
   */

  function toggleDropdown(btnId, dropdownId) {
    const dropdownBtn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);

    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
      dropdown.classList.add("show");
      document.addEventListener("click", closeDropdownOutside);
    } else {
      dropdown.classList.add("hide");
      dropdown.classList.remove("show");
      document.removeEventListener("click", closeDropdownOutside);
    }

    function closeDropdownOutside(event) {
      const isClickedInsideDropdown = dropdown.contains(event.target);
      const isClickedOnDropdownBtn = dropdownBtn.contains(event.target);

      if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
        dropdown.classList.add("hide");
        dropdown.classList.remove("show");
        document.removeEventListener("click", closeDropdownOutside);
      }

      const arrow = dropdownBtn.querySelector("#drop-arrow");
      if (arrow) {
        if (dropdown.classList.contains("show")) {
          arrow.classList.add("rotate-180");
        } else {
          arrow.classList.remove("rotate-180");
        }
      }
    }
  }

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  mobileMenuBtn &&
    mobileMenuBtn.addEventListener("click", () =>
      toggleDropdown("mobile-menu-btn", "mobile-menu")
    );

  /**
   * ======================================
   * 05. swiper js slider
   * ======================================
   */

  const brandSlider = new Swiper(".brand-slider", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 2.5,
      },
    },
  });

  const mobileUiSlider = new Swiper(".mobile-ui-slider", {
    spaceBetween: 24,
    speed: 1400,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      bulletClass: "swiper-custom-bullet",
      bulletActiveClass: "swiper-custom-bullet-active",
      clickable: true,
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  /**
   * ======================================
   * 06. pricing tab
   * ======================================
   */

  const pricingButtons = document.querySelectorAll(".tab-links");

  pricingButtons.forEach((pricingButton) => {
    pricingButton.addEventListener("click", function () {
      pricingButtons.forEach((button) => {
        button.classList.remove("bg-accent-2");
        button.classList.remove("border");
      });

      pricingButton.classList.add("bg-accent-2");
      pricingButton.classList.add("border");
    });
  });

  const monthlyButtons = document.querySelector(".button-monthly");
  const yearlyButtons = document.querySelector(".button-yearly");
  const priceOne = document.querySelector(".price-one");
  const priceTwo = document.querySelector(".price-two");
  const priceThree = document.querySelector(".price-three");

  monthlyButtons &&
    monthlyButtons.addEventListener("click", function () {
      priceOne.innerHTML = 150;
      priceTwo.innerHTML = 300;
      priceThree.innerHTML = 475;
    });

  yearlyButtons &&
    yearlyButtons.addEventListener("click", function () {
      priceOne.innerHTML = 100;
      priceTwo.innerHTML = 250;
      priceThree.innerHTML = 350;
    });

  // pricing card check
  const pricingCards = document.querySelectorAll(".pricing-card");

  pricingCards &&
    pricingCards.forEach((pricingCard) => {
      pricingCard.addEventListener("click", function () {
        pricingCards.forEach((card) => {
          let checkbox = card.querySelector(".checkbox");
          checkbox.classList.remove("bg-black-1");
          checkbox.classList.remove("text-white-1");
        });

        let checkbox = pricingCard.querySelector(".checkbox");
        checkbox.classList.add("bg-black-1");
        checkbox.classList.add("text-white-1");
      });
    });

  const tabButtons = document.querySelectorAll(".pricing-card");

  tabButtons &&
    tabButtons.forEach((tab) => {
      tab.addEventListener("click", () => tabClicked(tab));
    });

  function tabClicked(tab) {
    // tabButtons.forEach((tab) => {
    //   tab.classList.remove("active");
    // });
    // tab.classList.add("active");

    const contents = document.querySelectorAll(".tab-content");

    contents.forEach((content) => {
      content.classList.add("hidden");
    });

    const contentId = tab.getAttribute("data-content-id");
    const contentSelected = document.getElementById(contentId);

    contentSelected.classList.remove("hidden");
  }

  /**
   * ======================================
   * 07. odometer
   * ======================================
   */

  const odometerElements = document.querySelectorAll(".odometer");

  function initOdometer(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const odometerElement = entry.target.querySelector(".odometer");

        const elementValue = Number(
          odometerElement.getAttribute("data-counter-value")
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
});
