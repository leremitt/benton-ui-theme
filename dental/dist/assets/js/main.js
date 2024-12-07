/* ==============
 ========= js documentation ==========================

 * theme name: Dental
 * version: 1.0
 * description: Dental is a dental clinic and dental laboratory template, 
 *              which helps dental clinics and laboratories to showcase their services,
 *              products and services in a professional way. This template is built with
 *              tailwindcss and includes features like swiper js slider, single product
 *              tab, odometer, faq, date picker. It is responsive and includes
 *              a scroll to top button, menu and many more.
 * author: Pixelaxis
 * author-url: https://themeforest.net/user/pixelaxis

    ==================================================

    01. scroll to top button
     -------------------------------------------------
    02. menu
     -------------------------------------------------
    03. Reusable function for show/hide dropdown
     -------------------------------------------------
    04. swiper js slider
     -------------------------------------------------
    05. single product tab
     -------------------------------------------------
    06.  modal close button
     -------------------------------------------------
    07. odometer
     -------------------------------------------------
    08. faq
     -------------------------------------------------
    09. date picker
     -------------------------------------------------
    10. move btn
     -------------------------------------------------
    11. dropdown active
     -------------------------------------------------
    12. contact form
     -------------------------------------------------
    13. video popup
     -------------------------------------------------
    ==================================================
============== */

"use strict";
document.addEventListener("DOMContentLoaded", function () {
  AOS.init();

  /**
   * ======================================
   * 01. scroll to top button
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

  /**
   * ======================================
   * 02. menu
   * ======================================
   */

  const currentUrl = window.location.pathname.split("/").at(1) || "";

  document.querySelectorAll(".single-menu").forEach((item) => {
    const menuItemUrl = item.getAttribute("href");
    item.classList.toggle("active-nav", currentUrl === menuItemUrl);
  });

  /**
   * ======================================
   * 03. Reusable function for show/hide dropdown
   * ======================================
   */

  /**
   * Toggles the visibility of a dropdown menu when a button is clicked.
   *
   * @param {string} btnId - The ID of the button element that triggers the dropdown.
   * @param {string} dropdownId - The ID of the dropdown element to be toggled.
   * @return {void} This function does not return a value.
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

      if (
        !isClickedInsideDropdown &&
        !isClickedOnDropdownBtn &&
        event.key !== "Escape"
      ) {
        dropdown.classList.add("hide");
        dropdown.classList.remove("show");
        document.removeEventListener("click", closeDropdownOutside);
      }

      if (event.key === "Escape") {
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

    document.addEventListener("keydown", closeDropdownOutside);
  }

  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  mobileMenuBtn &&
    mobileMenuBtn.addEventListener("click", () =>
      toggleDropdown("mobile-menu-btn", "mobile-menu")
    );

  /**
   * ======================================
   * 04. swiper js slider
   * ======================================
   */

  const textSlider = new Swiper(".text-slider", {
    spaceBetween: 16,
    speed: 4000,
    loop: true,
    slidesPerView: "auto",
    loopAdditionalSlides: 1,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
  });

  const testimonialImageSlider = new Swiper(".testimonial-image", {
    spaceBetween: 24,
    speed: 1000,
    slidesPerView: 4,
    freeMode: true,
    slidesPerView: "auto",
    watchSlidesProgress: true,
  });
  const testimonialSlider = new Swiper(".testimonial", {
    spaceBetween: 10,
    speed: 1000,
    thumbs: {
      swiper: testimonialImageSlider,
    },
  });

  const thumbSlider = new Swiper(".thumb-image", {
    spaceBetween: 24,
    slidesPerView: 4,
    freeMode: true,
    slidesPerView: "auto",
    watchSlidesProgress: true,
  });
  const mainSlider = new Swiper(".main-image-slider", {
    spaceBetween: 10,
    thumbs: {
      swiper: thumbSlider,
    },
  });

  /**
   * ======================================
   * 05. single product tab
   * ======================================
   */
  const tabButtons = document.querySelectorAll(".single-product-tab");

  tabButtons &&
    tabButtons.forEach((tab) => {
      tab.addEventListener("click", () => tabClicked(tab));
    });

  /**
   * A function that handles when a tab is clicked.
   *
   * @param {Object} tab - The tab element that was clicked.
   * @return {void} No return value.
   */

  function tabClicked(tab) {
    tabButtons.forEach((t) => t.classList.remove("border-b-2"));
    tab.classList.add("border-b-2");

    const contents = document.querySelectorAll(".tab-content");
    contents.forEach((c) => c.classList.add("hidden"));

    const contentId = tab.getAttribute("data-content-id");
    document.getElementById(contentId).classList.remove("hidden");
  }

  /**
   * ======================================
   * 06. modal close button
   * ======================================
   */

  /**
   * Attaches an event listener to a close button within a modal, which hides the modal when clicked.
   *
   * @param {string} closeBtnClass - The class name of the close button element.
   * @param {string} modalContentId - The ID of the modal content element.
   * @return {void} This function does not return a value.
   */
  function modalCloseBtn(closeBtnClass, modalContentId) {
    const closeBtn = document.querySelector(`.${closeBtnClass}`);
    const modal = document.getElementById(modalContentId);

    if (closeBtn && modal) {
      closeBtn.addEventListener("click", () => {
        modal.classList.remove("show");
        modal.classList.add("hide");
      });
    }
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

  /**
   * ======================================
   * 08. faq
   * ======================================
   */

  let accordion = document.querySelectorAll(".faq-accordion");

  accordion.forEach((item, index) => {
    accordion[index].addEventListener("click", function () {
      let faqAnswer = this.nextElementSibling;

      // Close all other accordions
      accordion.forEach((otherAccordion, otherIndex) => {
        if (otherIndex !== index) {
          let otherFaqAnswer = otherAccordion.nextElementSibling;
          otherFaqAnswer.style.height = null;
          otherAccordion.parentElement.classList.remove("bg-secondary");
          otherAccordion.parentElement.classList.remove("text-white-1");
          otherAccordion.querySelector("div").classList.remove("bg-white-1");
          otherAccordion.querySelector("i").classList.remove("text-black-1");
          otherAccordion.querySelector("i").classList.remove("ph-caret-up");
        }
      });

      // Toggle open/close for the clicked accordion
      if (faqAnswer.style.height) {
        faqAnswer.style.height = null;
      } else {
        faqAnswer.style.height = faqAnswer.scrollHeight + "px";
      }
      accordion[index].parentElement.classList.toggle("bg-secondary");
      accordion[index].parentElement.classList.toggle("text-white-1");

      // Toggle classes for the clicked accordion
      accordion[index]
        .querySelector("i")
        .parentElement.classList.toggle("bg-white-1");
      accordion[index].querySelector("i").classList.toggle("text-black-1");
      accordion[index].querySelector("i").classList.toggle("ph-caret-up");
      accordion[index].querySelector("div").classList.toggle("border-black-4");
      accordion[index].querySelector("div").classList.toggle("border-primary");
    });
  });

  /**
   * ======================================
   * 09. date picker
   * ======================================
   */
  const appointmentDate = document.getElementById("appointment-date");
  const appointmentTime = document.getElementById("appointment-time");

  appointmentDate &&
    flatpickr("#appointment-date", {
      dateFormat: "d-M",
      minDate: "today",
      appendTo: document.body,
      disableMobile: "true",
    });

  appointmentTime &&
    flatpickr("#appointment-time", {
      enableTime: true,
      noCalendar: true,
      dateFormat: "H:iK",
      appendTo: document.body,
      disableMobile: "true",
    });

  /**
   * ======================================
   * 10. move btn
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
   * 11. dropdown active
   * ======================================
   */

  function dropdownActive(btnId, dropdownId) {
    const dropdownBtn = document.getElementById(btnId);
    const dropdown = document.getElementById(dropdownId);
    let dropdownList;
    if (dropdown) {
      dropdownList = dropdown.querySelectorAll("li");
    }

    if (dropdownList) {
      dropdownList.forEach((item) => {
        item.addEventListener("click", (event) => {
          // Remove "active" class from all elements
          dropdownList.forEach((otherItem) => {
            otherItem.classList.remove("text-primary");
          });
          dropdownBtn.querySelector("span").innerText = item.innerText;
          // Add "active" class to the clicked element
          item.classList.add("text-primary");
          // Close the dropdown
          toggleDropdown(btnId, dropdownId);
          // Prevent the click event from propagating to the document
          event.stopPropagation();
        });
      });
    }
  }

  const serviceBtn = document.getElementById("service-btn");
  serviceBtn &&
    serviceBtn.addEventListener("click", () =>
      toggleDropdown("service-btn", "service-content")
    );

  dropdownActive("service-btn", "service-content");

  /**
   * ======================================
   * 12. contact form
   * ======================================
   */
  const btn = document.getElementById("contact-submit-btn");
  const form = document.getElementById("contact-form");
  emailjs.init("iCN9_0iEGLNz4Xdcz");
  form &&
    document
      .getElementById("contact-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();

        btn.value = "Sending...";

        const serviceID = "service_llv3is1";
        const templateID = "template_ndmt0ia";

        emailjs.sendForm(serviceID, templateID, this).then(
          () => {
            alert("Sent!");
          },
          (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
          }
        );
      });

  /**
   * ======================================
   * 13. video popup
   * ======================================
   */

  const videoBtn = document.getElementById("video-btn");
  videoBtn &&
    videoBtn.addEventListener("click", () =>
      toggleDropdown("video-btn", "video-content")
    );

  const videoCloseBtn = document.querySelector(".video-close-btn");
  const dropdown = document.getElementById("video-content");

  videoCloseBtn &&
    videoCloseBtn.addEventListener("click", () => {
      dropdown.classList.remove("show");
      dropdown.classList.add("hide");
    });
});
