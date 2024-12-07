"use strict";
document.addEventListener("DOMContentLoaded", function () {

    //initialize wow
    new WOW().init();

    // Brand Sliders
    let bradCarousel = document.querySelector('.brad-carousel');
    if (bradCarousel) {
        const swiper = new Swiper(bradCarousel, {
            loop: true,
            speed: 5000,
            autoplay: {
                delay: 500,
                disableOnInteraction: false,
            },
            spaceBetween: 16,
            slidesPerView: 'auto',

            // breakpoints: {
            //     1850: {
            //         slidesPerView: 4,
            //     },
            //     1750: {
            //         slidesPerView: 2.5,
            //     },
            //     1650: {
            //         slidesPerView: 2.2,
            //     },
            //     1499: {
            //         slidesPerView: 1.5,
            //     },
            //     1399: {
            //         slidesPerView: 1.5,
            //     },
            //     992: {
            //         slidesPerView: 2.5,
            //     },
            //     768: {
            //         slidesPerView: 2.0,
            //     },
            //     578: {
            //         slidesPerView: 1.4,
            //     },
            //     480: {
            //         slidesPerView: 1.4,
            //     },
            //     375: {
            //         slidesPerView: 1,
            //     },
            // }
            
        });
    }



    // Brand Sliders Mini
    let bradCarouselmini = document.querySelector('.brad-carouselmini');
    if (bradCarouselmini) {
        const swiper = new Swiper(bradCarouselmini, {
            loop: true,
            speed: 5000,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            spaceBetween: 50,
            slidesPerView: 'auto',

            // breakpoints: {
            //     1850: {
            //         slidesPerView: 4,
            //     },
            //     1750: {
            //         slidesPerView: 2.5,
            //     },
            //     1650: {
            //         slidesPerView: 2.2,
            //     },
            //     1499: {
            //         slidesPerView: 1.5,
            //     },
            //     1399: {
            //         slidesPerView: 1.5,
            //     },
            //     992: {
            //         slidesPerView: 2.5,
            //     },
            //     768: {
            //         slidesPerView: 2.0,
            //     },
            //     578: {
            //         slidesPerView: 1.4,
            //     },
            //     480: {
            //         slidesPerView: 1.4,
            //     },
            //     375: {
            //         slidesPerView: 1,
            //     },
            // }
            
        });
    }


    // Define common options for Swiper initialization
    const commonOptions = {
        speed: 5000,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
        },
        spaceBetween: 50,
        direction: 'vertical',
        slidesPerView: 1,
        breakpoints: {
            1850: { slidesPerView: 4 },
            1750: { slidesPerView: 2.5 },
            1650: { slidesPerView: 2.2 },
            1499: { slidesPerView: 1.5 },
            1399: { slidesPerView: 1.5 },
            992: { slidesPerView: 2.5 },
            768: { slidesPerView: 2.0 },
            578: { slidesPerView: 1.4 },
            480: { slidesPerView: 1.4 },
            375: { slidesPerView: 1 },
        }
    };

    // Function to initialize Swiper instances
    function initializeCarousels(carouselConfigs) {
        carouselConfigs.forEach(({ selector, options }) => {
            const carousel = document.querySelector(selector);
            if (carousel) {
                new Swiper(carousel, options);
            }
        });
    }

    // Define carousels to be initialized
    const carousels = [
        { selector: '.brad-carousel3', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel4', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel5', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel6', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel7', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel8', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel9', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel10', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel11', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel12', options: { ...commonOptions, loop: true } },
        { selector: '.brad-carousel13', options: { ...commonOptions, loop: true } },
        // Add more carousels here if needed
    ];
    // Initialize carousels
    initializeCarousels(carousels);



    // Initialize the testimonial carousel
    let categoriesCarousel = document.querySelector('.testimonial_slider');
    if (categoriesCarousel) {
        const swiper = new Swiper(categoriesCarousel, {
            // Loop through the slides
            loop: true,
            // Autoplay the slides
            autoplay: {
                delay: 5000, // Delay between transitions (in ms)
                disableOnInteraction: false, // Pause autoplay on interaction
            },
            // Spacing between slides
            spaceBetween: 8,
            // Number of slides to display at a time
            slidesPerView: 2,
            // Enable clickable pagination
            paginationClickable: true,
            // Adjust settings based on screen size
            breakpoints: {
                1799: {
                    slidesPerView: 2.1,
                },
                1400: {
                    slidesPerView: 1.5,
                },
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                578: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
            }
        });
    }

    // Initialize the testimonial carousel
    let categoriesCarousel21 = document.querySelector('.testimonial_slider21');
    if (categoriesCarousel21) {
        const swiper = new Swiper(categoriesCarousel21, {
            // Loop through the slides
            loop: true,
            // Autoplay the slides
            // autoplay: {
            //     delay: 5000, // Delay between transitions (in ms)
            //     disableOnInteraction: false, // Pause autoplay on interaction
            // },
            // Spacing between slides
            spaceBetween: 8,
            // Number of slides to display at a time
            slidesPerView: 1,
            // Enable clickable pagination
            paginationClickable: true,
            // Adjust settings based on screen size
            breakpoints: {
                1799: {
                    slidesPerView: 1,
                },
                1400: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                578: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
            }
        });
    }

    let teamCarousel = document.querySelector('.team_slider');
    if (teamCarousel) {
        const swiper = new Swiper(teamCarousel, {
            // Loop through the slides
            loop: true,
            // Autoplay the slides
            autoplay: {
                delay: 5000, // Delay between transitions (in ms)
                disableOnInteraction: false, // Pause autoplay on interaction
            },
            // Spacing between slides
            spaceBetween: 8,
            // Number of slides to display at a time
            slidesPerView: 2,
            // Enable clickable pagination
            paginationClickable: true,
            // Adjust settings based on screen size
            breakpoints: {
                1799: {
                    slidesPerView: 1,
                },
                1400: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                578: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
            }
        });
    }

    // team slider two
    let teamCarouseltwo = document.querySelector('.team_slidertwo');
    if (teamCarouseltwo) {
        const swiper = new Swiper(teamCarouseltwo, {
            // Loop through the slides
            loop: true,
            // Autoplay the slides
            autoplay: {
                delay: 5000, // Delay between transitions (in ms)
                disableOnInteraction: false, // Pause autoplay on interaction
            },
            // Spacing between slides
            spaceBetween: 8,
            // Number of slides to display at a time
            slidesPerView: 1,
            // Enable clickable pagination
            paginationClickable: true,
            // Adjust settings based on screen size
            breakpoints: {
                1799: {
                    slidesPerView: 1,
                },
                1400: {
                    slidesPerView: 1,
                },
                1200: {
                    slidesPerView: 1,
                },
                992: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 1,
                },
                578: {
                    slidesPerView: 1,
                },
                375: {
                    slidesPerView: 1,
                },
            }
        });
    }
    
    // PopUp video
    $(function () {
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    });

    // custom Accordion
    $('.accordion-single .header-area').on('click', function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
            $(this).closest(".accordion-single").removeClass("active");
            $(this).next(".content-area").slideUp();
        } else {
            $(".accordion-single").removeClass("active");
            $(this).closest(".accordion-single").addClass("active");
            $(".content-area").not($(this).next(".content-area")).slideUp();
            $(this).next(".content-area").slideToggle();
        }
    });

    // Tabs starts
    $(".tablinks .nav-links").each(function () {
        var targetTab = $(this).closest(".singletab");
        targetTab.find(".tablinks .nav-links").each(function () {
            var navBtn = targetTab.find(".tablinks .nav-links");
            navBtn.click(function () {
                navBtn.removeClass('active');
                $(this).addClass('active');
                var indexNum = $(this).closest("li").index();
                var tabcontent = targetTab.find(".tabcontents .tabitem");
                $(tabcontent).removeClass('active');
                $(tabcontent).eq(indexNum).addClass('active');
            });
        });
    });
    // Tabs ends

    //--== Aos Animation ==--//
    $(document).ready(function () {
        $('.title').attr({
            "data-aos": "zoom-in",
            "data-aos-duration": "2000"
        });
        AOS.init({
            once: true,
        });
    });
    //--== Aos Animation ==--//



});