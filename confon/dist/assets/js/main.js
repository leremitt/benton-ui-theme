/* ==============
 ========= js documentation ==========================

 * theme name: Confon
 * version: 1.0
 * description: Confon-Event Booking Template is a responsive event ticket booking template for organizing and managing events. It is easy to use, fully customizable, and has a clean and modern design.
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
    06. day schedule tab
     -------------------------------------------------
    07. time tab day one
     -------------------------------------------------
    08. time tab day two
     -------------------------------------------------
    09. time tab day three
     -------------------------------------------------
    10.  modal close button
     -------------------------------------------------
    11. video popup
     -------------------------------------------------
    12. speaker modal
     -------------------------------------------------
    13. ticket modal
     -------------------------------------------------
    14. odometer
     -------------------------------------------------
    15. gallery popup
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

  scrollTopButton && scrollTopButton.addEventListener("click", handleProgressClick);

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

      if (!isClickedInsideDropdown && !isClickedOnDropdownBtn && event.key !== "Escape") {
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
  mobileMenuBtn && mobileMenuBtn.addEventListener("click", () => toggleDropdown("mobile-menu-btn", "mobile-menu"));

  /**
   * ======================================
   * 05. swiper js slider
   * ======================================
   */

  const singleCardSlider = new Swiper(".conference-speaker-slider", {
    spaceBetween: 30,
    speed: 2400,
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    effect: "fade",
    pagination: {
      el: ".swiper-pagination-progress",
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
  });

  const scheduleTimeSlider = new Swiper(".schedule-time-slider", {
    spaceBetween: 4,
    speed: 1500,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 4,
      },
    },
  });

  const gallerySlider = new Swiper(".gallery-slider", {
    spaceBetween: 4,
    speed: 1000,
    navigation: {
      nextEl: ".customerSliderNext",
      prevEl: ".customerSliderPrev",
    },
  });

  /**
   * ======================================
   * 06. day schedule tab
   * ======================================
   */
  const tabButtons = document.querySelectorAll(".schedule-day");

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
   * 07. time tab day one
   * ======================================
   */
  const dayOneTimeTabBtn = document.querySelectorAll(".day-one-tab-btn");

  dayOneTimeTabBtn &&
    dayOneTimeTabBtn.forEach((tab) => {
      tab.addEventListener("click", () => dayTabClicked(tab, "day-one"));
    });
  /**
   * ======================================
   * 08. time tab day two
   * ======================================
   */
  const dayTwoTimeTabBtn = document.querySelectorAll(".day-two-tab-btn");

  dayTwoTimeTabBtn &&
    dayTwoTimeTabBtn.forEach((tab) => {
      tab.addEventListener("click", () => dayTabClicked(tab, "day-two"));
    });
  /**
   * ======================================
   * 09. time tab day three
   * ======================================
   */
  const dayThreeTimeTabBtn = document.querySelectorAll(".day-three-tab-btn");

  dayThreeTimeTabBtn &&
    dayThreeTimeTabBtn.forEach((tab) => {
      tab.addEventListener("click", () => dayTabClicked(tab, "day-three"));
    });

  /**
   * A function that handles when a tab is clicked.
   *
   * @param {Object} tab - The tab element that was clicked.
   * @param {string} group - The group of tabs, used to identify which tab group to target.
   * @return {void} No return value.
   */
  function dayTabClicked(tab, group) {
    const tabs = document.querySelectorAll(`.${group}-tab-btn`);
    const contents = document.querySelectorAll(`.${group}-tab-content`);

    tabs.forEach((t) => t.classList.remove("bg-accent-4", "border-accent-4", "text-black-1"));
    tab.classList.add("bg-accent-4", "border-accent-4", "text-black-1");

    contents.forEach((c) => c.classList.add("hidden"));

    const contentId = tab.getAttribute(`${group}-data-content-id`);
    document.getElementById(contentId).classList.remove("hidden");
  }
  /**
   * ======================================
   * 10. modal close button
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
   * 11. video popup
   * ======================================
   */
  const videoBtn = document.getElementById("video-btn");
  videoBtn && videoBtn.addEventListener("click", () => toggleDropdown("video-btn", "video-content"));

  // video modal close button
  modalCloseBtn("video-close-btn", "video-content");

  /**
   * ======================================
   * 12. speaker modal
   * ======================================
   */

  // Define an array of speaker modal IDs
  const speakerModalIds = [
    "speaker-one-modal-open-btn",
    "speaker-two-modal-open-btn",
    "speaker-three-modal-open-btn",
    "speaker-four-modal-open-btn",
    "speaker-five-modal-open-btn",
    "speaker-six-modal-open-btn",
  ];

  // Iterate over the array and attach event listeners
  speakerModalIds.forEach((modalId, index) => {
    const modalOpenBtn = document.getElementById(modalId);
    if (modalOpenBtn) {
      modalOpenBtn.addEventListener("click", () => {
        const modalContentId = `speaker-${index + 1}-modal-content`;
        toggleDropdown(modalId, modalContentId);
      });
    }
  });

  // speaker modal close button
  modalCloseBtn("speaker-modal-close-btn-1", "speaker-1-modal-content");
  modalCloseBtn("speaker-modal-close-btn-2", "speaker-2-modal-content");
  modalCloseBtn("speaker-modal-close-btn-3", "speaker-3-modal-content");
  modalCloseBtn("speaker-modal-close-btn-4", "speaker-4-modal-content");
  modalCloseBtn("speaker-modal-close-btn-5", "speaker-5-modal-content");
  modalCloseBtn("speaker-modal-close-btn-6", "speaker-6-modal-content");

  /**
   * ======================================
   * 13. ticket modal
   * ======================================
   */
  // Define an array of ticket modal IDs
  const ticketModalId = ["buy-ticket-one", "buy-ticket-two", "buy-ticket-three"];

  ticketModalId.forEach((modalId, index) => {
    const modalOpenBtn = document.getElementById(modalId);
    if (modalOpenBtn) {
      modalOpenBtn.addEventListener("click", () => {
        const modalContentId = `buy-ticket-${index + 1}`;
        toggleDropdown(modalId, modalContentId);
      });
    }
  });

  const ticketCloseBtnIds = ["buy-ticket-1", "buy-ticket-2", "buy-ticket-3"];
  ticketCloseBtnIds.forEach((id, index) => {
    modalCloseBtn(`buy-ticket-close-btn-${index + 1}`, id);
  });

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
   * 15. gallery popup
   * ======================================
   */
  const galleryBtnOne = document.getElementById("gallery-btn-1");
  galleryBtnOne && galleryBtnOne.addEventListener("click", () => toggleDropdown("gallery-btn-1", "gallery-content-1"));

  // gallery one modal close button
  modalCloseBtn("gallery-close-btn-1", "gallery-content-1");

  const galleryBtnTwo = document.getElementById("gallery-btn-2");
  galleryBtnTwo && galleryBtnTwo.addEventListener("click", () => toggleDropdown("gallery-btn-2", "gallery-content-2"));

  // gallery two modal close button
  modalCloseBtn("gallery-btn-1", "gallery-content-1");
  modalCloseBtn("gallery-close-btn-2", "gallery-content-2");
});
