"use strict";
document.addEventListener("DOMContentLoaded", function () {
    $(function ($) {


        // Brand Sliders
        let bradCarousel = document.querySelector('.brad-carousel');
        if (bradCarousel) {
            const swiper = new Swiper(bradCarousel, {
                loop: true,
                speed: 5000,
                autoplay: {
                    delay: 0,
                    disableOnInteraction: false,
                },
                spaceBetween: 50,
                slidesPerView: 0.9,
                breakpoints: {
                    1850: {
                        slidesPerView: 2.7,
                    },
                    1750: {
                        slidesPerView: 2.5,
                    },
                    1650: {
                        slidesPerView: 2.2,
                    },
                    1499: {
                        slidesPerView: 1.5,
                    },
                    1399: {
                        slidesPerView: 1.5,
                    },
                    992: {
                        slidesPerView: 2.5,
                    },
                    768: {
                        slidesPerView: 2.0,
                    },
                    578: {
                        slidesPerView: 1.4,
                    },
                    480: {
                        slidesPerView: 1.4,
                    },
                    375: {
                        slidesPerView: 1,
                    },
                }
            });
        }

        // Categories Top
        // let categoriesCarousel = document.querySelector('.testimonial_slide');
        // let categoriesBtn = document.querySelector('.testimonial_slider_btn');
        // if (categoriesCarousel) {
        //     const swiper = new Swiper(categoriesCarousel, {
        //         loop: true,
        //         autoplay: {
        //             delay: 5000,
        //             disableOnInteraction: false,
        //         },
        //         spaceBetween: 24,
        //         slidesPerView: 1,
        //         paginationClickable: true,
        //         navigation: {
        //             nextEl: categoriesBtn.querySelector('.ara-next'),
        //             prevEl: categoriesBtn.querySelector('.ara-prev'),
        //         },
        //         breakpoints: {
        //             1400: {
        //                 slidesPerView: 1,
        //             },
        //             1200: {
        //                 slidesPerView: 1,
        //             },
        //             992: {
        //                 slidesPerView: 1,
        //             },
        //             768: {
        //                 slidesPerView: 1,
        //             },
        //             578: {
        //                 slidesPerView: 1,
        //             },
        //             375: {
        //                 slidesPerView: 1,
        //             },
        //         }
        //     });
        // }

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

        $(document).ready(function () {
            $(".odometer").each(function () {
                var $odometerElement = $(this);
                var elementValue = Number($odometerElement.attr("counter-value"));

                var od = new Odometer({
                    el: $odometerElement[0],
                    value: 0,
                    format: "",
                    theme: "digital"
                });

                var observer = new IntersectionObserver(function (entries) {
                    entries.forEach(function (entry) {
                        if (entry.isIntersecting) {
                            od.update(elementValue);
                            observer.unobserve(entry.target);
                        }
                    });
                });

                observer.observe($odometerElement.parent()[0]);
            });
        });

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



        // Slider 
        var listArray = ["slide1", "slide2", "slide3"];
        var mySwiper = new Swiper('.swiper-areas', {
            // Optional parameters
            loop: true,
            autoplayDisableOnInteraction: false,
            slidesPerView: 1,
            autoHeight: true,
            autoplay: {
                delay: 3000,
            },
            effect: 'fade',
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: 'true',
                type: 'bullets',
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">' + '<em>' + listArray[index] + '</em>' + '<i></i>' + '<b></b>' + '</span>';
                },

            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

        })

        // Our Values starts
        $(document).ready(function () {
            $('.box').mouseenter(function () {
                $(this).css('width', '65%');
                $('.box').not(this).css('transform', 'translateX(0)');
            });

            $('.box').mouseleave(function () {
                $(this).css('width', '33.33%');
                $('.box').not(this).css('transform', 'translateX(0)');
            });
        });
        // Our Values starts
        // Sing up process starts
        $(document).ready(function () {
            $('.boxx').mouseenter(function () {
                if ($(window).width() >= 768) {
                    $(this).css('width', '58%');
                    $('.boxx').not(this).css('transform', 'translateX(0)');
                } else {
                    $(this).css('width', '100%');
                    $('.boxx').not(this).css('transform', 'translateX(0)');
                }
            });

            $('.boxx').mouseleave(function () {
                if ($(window).width() >= 768) {
                    $(this).css('width', '33.33%');
                $('.boxx').not(this).css('transform', 'translateX(0)');
                }else {
                    $(this).css('width', '70%');
                $('.boxx').not(this).css('transform', 'translateX(0)');
                }
                // $(this).css('width', '33.33%');
                // $('.boxx').not(this).css('transform', 'translateX(0)');
            });
        });
        // Sing up process ends

        // Magnific Popup Starts
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            gallery: {
                enabled: true
            },

            zoom: {
                enabled: true,

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {

                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }

        });
        // Magnific Popup Ends

        // Testimonial Starts
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

        let categoriesX = document.querySelector('.testimonial_slidex');
        let categoriesBtnX = document.querySelector('.testimonial_slider_btn');
        if (categoriesX) {
            const swiper = new Swiper(categoriesX, {
                loop: true,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                spaceBetween: 24,
                slidesPerView: 1,
                paginationClickable: true,
                navigation: {
                    nextEl: categoriesBtnX.querySelector('.ara-next'),
                    prevEl: categoriesBtnX.querySelector('.ara-prev'),
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
        // Testimonial Ends
        // Our Trainers Starts
        $(document).click(function (event) {
            if (!$(event.target).closest('.common_toggles, .common_area, .common_toggles2, .common_area2, .common_toggles3, .common_area3, .common_toggles4, .common_area4, .common_areaname, .common_areaname2, .common_areaname3, .common_areaname4').length) {
                $(".common_area, .common_area2, .common_area3, .common_area4, .common_areaname, .common_areaname2, .common_areaname3, .common_areaname4").removeClass("show");
            }
        });

        $(".common_toggles").click(function (event) {
            event.stopPropagation();
            $(".common_area").toggleClass("show");
            $(".common_area2, .common_area3, .common_area4").removeClass("show");
            $(".common_areaname").toggleClass("show");
            $(".common_areaname2, .common_areaname3, .common_areaname4").removeClass("show");
        });

        $(".common_toggles2").click(function (event) {
            event.stopPropagation();
            $(".common_area2").toggleClass("show");
            $(".common_area, .common_area3, .common_area4").removeClass("show");
            $(".common_areaname2").toggleClass("show");
            $(".common_areaname, .common_areaname3, .common_areaname4").removeClass("show");
        });

        $(".common_toggles3").click(function (event) {
            event.stopPropagation();
            $(".common_area3").toggleClass("show");
            $(".common_area, .common_area2, .common_area4").removeClass("show");
            $(".common_areaname3").toggleClass("show");
            $(".common_areaname, .common_areaname2, .common_areaname4").removeClass("show");
        });

        $(".common_toggles4").click(function (event) {
            event.stopPropagation();
            $(".common_area4").toggleClass("show");
            $(".common_area, .common_area2, .common_area3").removeClass("show");
            $(".common_areaname4").toggleClass("show");
            $(".common_areaname, .common_areaname2, .common_areaname3").removeClass("show");
        });

        // Our Trainers Ends

        // Tabs Starts
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
        // Tabs Ends
    });
});