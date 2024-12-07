/* ==============
 ========= js documentation ==========================

 * theme name: Carfterx
 * version: 1.0
 * description: Expert Car Repair Services You Can Trust
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================
     01. Menu
     -------------------------------------------------
     02. reservation accordion
     -------------------------------------------------
     03. move button
     -------------------------------------------------
     04. Reusable function for show/hide dropdown
     -------------------------------------------------
     05. swiper js slider
     -------------------------------------------------
     06. pricing tab
     -------------------------------------------------
     07. FAQ accordion
     -------------------------------------------------
     08. Contact form
     -------------------------------------------------
    ==================================================
============== */

"use strict";

document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  /**
   * ======================================
   * 01. Menu
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
  const singleMenuMobile = document.querySelectorAll(".single-menu-mobile");

  singleMenu &&
    singleMenu.forEach((item) => {
      const menuItemUrl = item.getAttribute("href");
      if (`./${withoutSlash}` === menuItemUrl) {
        item.classList.add("active-nav");
      }
    });

  singleMenuMobile &&
    singleMenuMobile.forEach((item) => {
      const menuItemUrl = item.getAttribute("href");
      if (`./${withoutSlash}` === menuItemUrl) {
        item.classList.add("text-primary");
      }
    });
  /**
   * ======================================
   * 02. reservation accordion
   * ======================================
   */
  let reservationAccordion = document.querySelectorAll(".reservation-accordion");

  reservationAccordion.forEach((item, index) => {
    reservationAccordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;
      let parent = reservationAccordion[index].parentElement;

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }

      // Toggle classes for the clicked accordion
      reservationAccordion[index].querySelector("i").classList.toggle("ph-caret-down");
      reservationAccordion[index].querySelector("i").classList.toggle("ph-caret-up");
    });
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

  // pricing plan
  const monthly = document.getElementById("monthly");
  const yearly = document.getElementById("yearly");
  const basicServices = document.getElementById("basic-services");
  const standardWash = document.getElementById("standard-wash");
  const deluxeWash = document.getElementById("deluxe-wash");

  monthly &&
    monthly.addEventListener("click", () => {
      basicServices.innerText = "$11.99";
      standardWash.innerText = "$15.99";
      deluxeWash.innerText = "$20.99";
      yearly.classList.remove("bg-primary", "text-neutral-3");
      monthly.classList.add("bg-primary", "text-neutral-3");
    });

  yearly &&
    yearly.addEventListener("click", () => {
      basicServices.innerText = "$9.99";
      standardWash.innerText = "$12.99";
      deluxeWash.innerText = "$15.99";
      monthly.classList.remove("bg-primary", "text-neutral-3");
      yearly.classList.add("bg-primary", "text-neutral-3");
    });

  /**
   * ======================================
   * 07. video popup
   * ======================================
   */

  const videoBtn = document.getElementById("video-btn");
  videoBtn && videoBtn.addEventListener("click", () => toggleDropdown("video-btn", "video-content"));

  const videoCloseBtn = document.querySelector(".video-close-btn");
  const dropdown = document.getElementById("video-content");

  videoCloseBtn &&
    videoCloseBtn.addEventListener("click", () => {
      dropdown.classList.remove("show");
      dropdown.classList.add("hide");
    });

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

  function toggleMenuDropdown(btnId, dropdownId) {
    const dropdownBtn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);

    if (dropdown.classList.contains("hide")) {
      dropdown.classList.remove("hide");
      dropdown.classList.add("show");
      dropdownBtn.classList.remove("ph-list");
      dropdownBtn.classList.add("ph-x");
      document.addEventListener("click", closeDropdownOutside);
    } else {
      dropdown.classList.add("hide");
      dropdown.classList.remove("show");
      dropdownBtn.classList.add("ph-list");
      dropdownBtn.classList.remove("ph-x");
      document.removeEventListener("click", closeDropdownOutside);
    }

    function closeDropdownOutside(event) {
      const isClickedInsideDropdown = dropdown.contains(event.target);
      const isClickedOnDropdownBtn = dropdownBtn.contains(event.target);

      if (!isClickedInsideDropdown && !isClickedOnDropdownBtn) {
        dropdown.classList.add("hide");
        dropdown.classList.remove("show");
        dropdownBtn.classList.add("ph-list");
        dropdownBtn.classList.remove("ph-x");
        document.removeEventListener("click", closeDropdownOutside);
      }
    }
  }
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  mobileMenuBtn &&
    mobileMenuBtn.addEventListener("click", () => {
      toggleMenuDropdown("mobile-menu-btn", "mobile-menu");
    });

  /**
   * ======================================
   * 05. swiper js slider
   * ======================================
   */
  const testimonialSlider = new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    speed: 2400,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".testimonial-pagination-progress",
      clickable: "true",
      type: "bullets",

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>";
      },
    },
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });

  const singleServiceSlider = new Swiper(".single-service-slider", {
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 2400,
    loop: true,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination-progress",
      clickable: "true",
      type: "bullets",

      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + "<i></i>" + "<b></b>" + "</span>";
      },
    },
  });

  const brandSlider = new Swiper(".brand-slider", {
    spaceBetween: 24,
    slidesPerView: 1,
    speed: 2400,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 5,
      },
    },
  });

  // *********************************************************************************************************************************************************************************************
  /**
   * ======================================
   * 14. odometer
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
        const elementValue = Number(odometerElement.getAttribute("data-counter-value"));

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

  /**
   * ======================================
   * 06. pricing tab
   * ======================================
   */
  const pricingTabsContent = document.querySelectorAll(".pricing-tab-content");
  const pricingTabsBtn = document.querySelectorAll(".pricing-tab-btn");

  pricingTabsBtn &&
    pricingTabsBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        pricingTabsBtn.forEach((btn) => {
          btn.classList.remove("bg-primary");
          btn.classList.remove("text-neutral-2");
        });
        btn.classList.add("bg-primary");
        btn.classList.add("text-neutral-2");

        const contentId = btn.getAttribute("data-content-id");
        pricingTabsContent.forEach((content) => {
          content.classList.add("hidden");
          if (contentId === content.id) {
            content.classList.remove("hidden");
            content.classList.add("flex");
          }
        });
      });
    });

  /**
   * ======================================
   * 07. FAQ accordion
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
          otherAccordion.querySelector("div").classList.remove("border-primary");
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
      accordion[index].querySelector("i").classList.toggle("ph-plus");
      accordion[index].querySelector("i").classList.toggle("ph-minus");
      accordion[index].querySelector("div").classList.toggle("border-black-4");
    });
  });

  /**
   * ======================================
   * 08. contact form
   * ======================================
   */
  const btn = document.getElementById("contact-submit-btn");
  const contactForm = document.getElementById("contact-form");
  emailjs.init("iCN9_0iEGLNz4Xdcz");

  contactForm &&
    document.getElementById("contact-form").addEventListener("submit", function (event) {
      event.preventDefault();

      btn.value = "Sending...";

      const serviceID = "";
      const templateID = "";

      emailjs.sendForm(serviceID, templateID, this).then(
        () => {
          btn.value = "Send Email";
          alert("Sent!");
          document.querySelector("#name").value = "";
          document.querySelector("#email").value = "";
          document.querySelector("#text-area").value = "";
        },
        (err) => {
          btn.value = "Send Email";
          alert(JSON.stringify(err));
        }
      );
    });
});
