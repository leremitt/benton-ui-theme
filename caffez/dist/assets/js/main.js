/* ==============
 ========= js documentation ==========================

 * theme name: Caffez
 * version: 1.0
 * description: Caffez is a modern coffee shop website template that is perfect for businesses that want to showcase their coffee offerings, promote their brand, and engage with customers. The template features a clean and minimalistic design, a responsive layout, and a variety of page templates for different purposes. It is built with a focus on user experience and aesthetics, making it a great choice for coffee shops and related businesses.
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
     06. pricing tab
     -------------------------------------------------
     07. video popup
     -------------------------------------------------
     08. FAQ accordion
     -------------------------------------------------
     09. dropdown Active
     -------------------------------------------------
     10. date picker
     -------------------------------------------------
     11. Contact form
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
  mobileMenuBtn && mobileMenuBtn.addEventListener("click", () => toggleDropdown("mobile-menu-btn", "mobile-menu"));

  /**
   * ======================================
   * 05. swiper js slider
   * ======================================
   */

  const singleCardSlider = new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    speed: 2400,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
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
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
    },
  });

  /**
   * ======================================
   * 06. pricing tab
   * ======================================
   */

  const tabButtons = document.querySelectorAll(".type-tab");

  tabButtons &&
    tabButtons.forEach((tab) => {
      tab.addEventListener("click", () => tabClicked(tab));
    });

  function tabClicked(tab) {
    tabButtons.forEach((tab) => {
      tab.classList.remove("border-b-2");
    });
    tab.classList.add("border-b-2");

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

  /**
   * ======================================
   * 08. FAQ accordion
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
          otherAccordion.querySelector("i").classList.remove("ti-minus");
          otherAccordion.querySelector("i").classList.add("ti-plus");
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
      accordion[index].querySelector("i").classList.toggle("ph-caret-down");
      accordion[index].querySelector("i").classList.toggle("ph-caret-up");
      accordion[index].querySelector("div").classList.toggle("border-black-4");
      accordion[index].querySelector("div").classList.toggle("border-primary");
    });
  });

  /**
   * ======================================
   * 09. dropdown Active
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
  serviceBtn && serviceBtn.addEventListener("click", () => toggleDropdown("service-btn", "service-content"));

  dropdownActive("service-btn", "service-content");

  /**
   * ======================================
   * 10. date picker
   * ======================================
   */
  // const appointmentDate = document.getElementById("appointment-date");
  const appointmentDate = document.querySelector("#appointment-date");
  const appointmentTime = document.getElementById("appointment-time");

  appointmentDate &&
    flatpickr(appointmentDate, {
      dateFormat: "d-m-Y : H:i",
      appendTo: document.body,
      disableMobile: "true",
      enableTime: true,
      minTime: "09:00",
      maxTime: "22:00",
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
   * 11. contact form
   * ======================================
   */
  const form = document.getElementById("contact-form");
  const btn = document.getElementById("contact-submit-btn");
  emailjs.init("iCN9_0iEGLNz4Xdcz");
  form &&
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      btn.value = "Sending...";

      const serviceID = "service_llv3is1";
      const templateID = "template_ndmt0ia";

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

  // +++++++++++++++++++++++++++++++++++++++ Custom js ++++++++++++++++++++++++++++++++
  // hover image animations start
  const handleMouseMove = (event) => {
    const caseStudyItems = document.querySelectorAll(".hover-image");
    const deviceWidth = window.innerWidth;

    if (deviceWidth > 576) {
      caseStudyItems.forEach((item) => {
        const contentBox = item.getBoundingClientRect();
        const dx = event.clientX - contentBox.x;
        const dy = event.clientY - contentBox.y;
        const thirdChild = item.children[2];
        if (thirdChild) {
          thirdChild.style.transform = `translate(${dx}px, ${dy}px) rotate(10deg)`;
        }
      });
    }
  };

  window.addEventListener("mousemove", handleMouseMove);

  // Clean up event listener
  window.addEventListener("beforeunload", () => {
    window.removeEventListener("mousemove", handleMouseMove);
  });

  // slider

  const textSlider = new Swiper(".about-slider", {
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
});
