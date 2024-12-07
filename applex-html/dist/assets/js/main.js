/* ==============
 ========= js documentation ==========================

 * theme name: Applex
 * version: 1.0
 * description: 
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

     01. scroll to top button
     -------------------------------------------------
     02. menu
     -------------------------------------------------
     03. move button
     -------------------------------------------------
     04. Reusable function for show/hide dropdown
     -------------------------------------------------
     05. swiper js slider
     -------------------------------------------------
     06. faq
     -------------------------------------------------
     07. copy email address
     -------------------------------------------------
     08. pricing tab
     -------------------------------------------------
     09. odometer
     -------------------------------------------------
    ==================================================
============== */

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  const scrollTopButton = document.querySelector(".scroll-top");
  AOS.init();
  /**
   * ======================================
   * 01. scroll to top button
   * ======================================
   */
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
   * 02. menu
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
   * 03. move button
   * ======================================
   */

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
        slidesPerView: 3.5,
      },
    },
  });

  const textSlide = new Swiper(".text-slider", {
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
        slidesPerView: 3.5,
      },
    },
  });

  const mobileUiSlider = new Swiper(".mobile-ui-slider", {
    speed: 1000,
    direction: "horizontal",
    effect: "fade",
    slidesPerView: 1,
    centeredSlides: true,
    mousewheel: {
      sensitivity: 5,
      releaseOnEdges: true,
    },
  });

  const customerSlider = new Swiper(".customer-slider", {
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
        slidesPerView: 4,
      },
    },
  });

  const customerSliderReverse = new Swiper(".customer-slider-reverse", {
    spaceBetween: 24,
    speed: 6000,
    loop: true,

    autoplay: {
      delay: 1,
      disableOnInteraction: false,
      reverseDirection: true,
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
        slidesPerView: 4,
      },
    },
  });

  /**
   * ======================================
   * 06. faq
   * ======================================
   */

  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = accordion[index].parentElement;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.classList.remove("text-primary");
          otherAccordion.classList.remove("pb-6");
          otherAccordion.querySelector("i").classList.remove("ph-minus");
          otherAccordion.querySelector("i").classList.add("ph-plus");
          otherAccordion
            .querySelector("div")
            .classList.remove("border-primary");
          otherAccordion.querySelector("div").classList.add("border-black-4");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      // Toggle classes for the clicked accordion
      accordion[index].classList.toggle("text-primary");
      accordion[index].classList.toggle("pb-6");
      accordion[index].querySelector("i").classList.toggle("ph-plus");
      accordion[index].querySelector("i").classList.toggle("ph-minus");
      accordion[index].querySelector("div").classList.toggle("border-black-4");
      accordion[index].querySelector("div").classList.toggle("border-primary");
    });
  });

  /**
   * ======================================
   * 07. copy email address
   * ======================================
   */

  const emailField = document.querySelector(".copy-email");

  if (emailField) {
    emailField.onclick = function () {
      document.execCommand("copy");
    };
  }

  emailField &&
    emailField.addEventListener("copy", function (event) {
      event.preventDefault();
      if (event.clipboardData) {
        event.clipboardData.setData("text/plain", emailField.textContent);
        console.log(event.clipboardData.getData("text"));
      }
    });
  /**
   * ======================================
   * 08. pricing tab
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
          checkbox.classList.remove("bg-white-1");
          // checkbox.classList.remove("text-primary");
        });

        let checkbox = pricingCard.querySelector(".checkbox");
        checkbox.classList.add("bg-white-1");
        checkbox.classList.add("text-white-3");
      });
    });

  const tabButtons = document.querySelectorAll(".pricing-card");

  tabButtons &&
    tabButtons.forEach((tab) => {
      tab.addEventListener("click", () => tabClicked(tab));
    });

  function tabClicked(tab) {
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
   * 09. odometer
   * ======================================
   */

  const odometerElements = document.querySelectorAll(".odometer");

  /**
   * Initializes odometer elements when they become visible in the viewport.
   *
   * @param {Array} entries - The array of IntersectionObserver entries.
   * @param {IntersectionObserver} observer - The IntersectionObserver instance.
   */
  function initOdometer(entries, observer) {
    // Loop through each IntersectionObserver entry
    entries.forEach((entry) => {
      // If the target element is visible in the viewport
      if (entry.isIntersecting) {
        // Select the odometer element within the target element
        const odometerElement = entry.target.querySelector(".odometer");

        // Get the value attribute from the odometer element
        const elementValue = Number(
          odometerElement.getAttribute("data-counter-value")
        );

        // Create a new Odometer instance
        const od = new Odometer({
          el: odometerElement, // Set the element to be the odometer element
          value: 0, // Set the initial value to 0
          format: "", // Use the default format
          theme: "digital", // Use the digital theme
        });

        // Update the odometer with the element value
        od.update(elementValue);

        // Stop observing the target element once it's initialized
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
