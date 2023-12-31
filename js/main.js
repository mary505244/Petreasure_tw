(function ($) {
    "use strict";
    
    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Service and team carousel
    $(".service-carousel, .team-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Product carousel
    $(".product-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

    $(document).ready(function () {
        // 按钮点击事件处理
        $("#introduction-link").click(function () {
            $("#introduction").get(0).scrollIntoView({ behavior: "smooth" });
        });

        $("#video-link").click(function () {
            $("#video").get(0).scrollIntoView({ behavior: "smooth" });
        });

        $("#product-link").click(function () {
            $("#product").get(0).scrollIntoView({ behavior: "smooth" });
        });

        $("#store-link").click(function () {
            $("#store").get(0).scrollIntoView({ behavior: "smooth" });
        });

        window.addEventListener('scroll', function() {

            var element = document.querySelector('.section-title');
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
        
            if (elementTop < windowHeight) {
                element.classList.add('animate__animated', 'animate__backInLeft');
            }
        });


        // about-us
        window.addEventListener('scroll', function() {

            var element = document.querySelector('.about-us');
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
        
            if (elementTop < windowHeight) {
                element.classList.add('animate__animated', 'animate__lightSpeedInLeft');
            }
        });


        // our-features
        window.addEventListener('scroll', function() {

            var element = document.querySelector('.our-features');
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
        
            if (elementTop < windowHeight) {
                element.classList.add('animate__animated', 'animate__lightSpeedInRight');
            }
        });


        // cn-title
        window.addEventListener('scroll', function() {

            var element = document.querySelector('.cn-title');
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
        
            if (elementTop < windowHeight) {
                element.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-1s');
            }
        });


        // en-title
        window.addEventListener('scroll', function() {

            var element = document.querySelector('.en-title');
            var elementTop = element.getBoundingClientRect().top;
            var windowHeight = window.innerHeight;
        
            if (elementTop < windowHeight) {
                element.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-1s');
            }
        });


        // icon
        // window.addEventListener('scroll', function() {

        //     var element = document.querySelector('.icon');
        //     var elementTop = element.getBoundingClientRect().top;
        //     var windowHeight = window.innerHeight;
        
        //     if (elementTop < windowHeight) {
        //         element.classList.add('animate__animated', 'animate__jello');
        //     }
        // });

        window.addEventListener('scroll', function() {
            // 使用 querySelectorAll 选择所有带有 '.icon' 类名的元素
            var elements = document.querySelectorAll('.icon');
        
            elements.forEach(function(element) {
                var elementTop = element.getBoundingClientRect().top;
                var windowHeight = window.innerHeight;
        
                if (elementTop < windowHeight) {
                    element.classList.add('animate__animated', 'animate__jello');
                }
            });
        });

        
    });

})(jQuery);

