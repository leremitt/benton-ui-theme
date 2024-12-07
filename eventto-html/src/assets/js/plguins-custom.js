"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {


        // Brand Sliders
        let bradCarousel = document.querySelector('.brad-carousel');
        if (bradCarousel) {
            const swiper = new Swiper(bradCarousel, {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                spaceBetween: 50,
                slidesPerView: 4,
                breakpoints: {
                    1599: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 8,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                    992: {
                        slidesPerView: 6,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                    578: {
                        slidesPerView: 5,
                    },
                    375: {
                        slidesPerView: 4,
                    },
                }
            });
        }

        let bradCarousel2 = document.querySelector('.brad-carousel2');
        if (bradCarousel2) {
            const swiper = new Swiper(bradCarousel2, {
                loop: true,
                speed: 2000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                spaceBetween: 50,
                slidesPerView: 4,
                breakpoints: {
                    1599: {
                        slidesPerView: 4,
                    },
                    1400: {
                        slidesPerView: 8,
                    },
                    1200: {
                        slidesPerView: 7,
                    },
                    992: {
                        slidesPerView: 6,
                    },
                    768: {
                        slidesPerView: 6,
                    },
                    578: {
                        slidesPerView: 5,
                    },
                    375: {
                        slidesPerView: 4,
                    },
                }
            });
        }

        // Categories Top
        let categoriesCarousel = document.querySelector('.testimonial_slider');
        let categoriesBtn = document.querySelector('.testimonial_slider_btn');
        if (categoriesCarousel) {
            const swiper = new Swiper(categoriesCarousel, {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                paginationClickable: true,
                navigation: {
                    nextEl: categoriesBtn.querySelector('.ara-next'),
                    prevEl: categoriesBtn.querySelector('.ara-prev'),
                },
                breakpoints: {
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


        // Odometer Init 
        let windowHeight = $(window).height();
        $('.odometer').children().each(function () {
            if ($(this).isInViewport({ "tolerance": windowHeight, "toleranceForLast": windowHeight, "debug": false })) {
                var section = $(this).closest(".counters");
                section.find(".odometer").each(function () {
                    $(this).html($(this).attr("data-odometer-final"));
                });
            }
        });

        // Odometer
        // $(".odometer").each(function () {
        //     $(this).isInViewport(function (status) {
        //         if (status === "entered") {
        //             var section = $(this).closest(".counters");
        //             section.find(".odometer").each(function () {
        //                 $(this).html($(this).attr("data-odometer-final"));
        //             });
        //         }
        //     });
        // });


        // $(".tablinks .nav-links").each(function () {
        //     var targetTab = $(this).closest(".singletab");
        //     targetTab.find(".tablinks .nav-links").each(function() {
        //       var navBtn = targetTab.find(".tablinks .nav-links");
        //       navBtn.click(function(){
        //         navBtn.removeClass('active');
        //         $(this).addClass('active');
        //         var indexNum = $(this).closest("li").index();
        //         var tabcontent = targetTab.find(".tabcontents .tabitem");
        //         $(tabcontent).removeClass('active');
        //         $(tabcontent).eq(indexNum).addClass('active');
        //       });
        //     });
        //   });

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
        
    });
});
