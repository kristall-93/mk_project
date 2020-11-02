$(document).ready(function () {

    // Слайдеры : 

    $('.banner-slider').slick({
        // dots: true,
        // infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-slider__prev"><img src="images/banner-slider-arrow.svg" alt=""></button>',
        nextArrow: '<button class="banner-slider__next"><img src="images/banner-slider-arrow.svg" alt=""></button>',
    });
    
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__prev"><img src="images/slider-arrow.svg" alt=""></button>',
        nextArrow: '<button class="slider__next"><img src="images/slider-arrow.svg" alt=""></button>',     
    });

    $('.partners__slider').slick({
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button class="partners__prev"><img src="images/slider-arrow.svg" alt=""></button>',
        nextArrow: '<button class="partners__next"><img src="images/slider-arrow.svg" alt=""></button>',
        // responsive: [{
        //     breakpoint: 1760,
        //     settings: {
        //         slidesToShow: 4,
        //     }
        // },
        // {
        //     breakpoint: 1220,
        //     settings: {
        //         slidesToShow: 3,
        //     }
        // },
        // ]
    });



    // появление мобильного меню :
    // $('.menu_btn').on('click', function () {
    //     $('.header_line').slideToggle();
    //     if ($('.menu_btn').hasClass('closed')) {
    //         $(".menu_btn").removeClass('closed');
    //         $(".menu_btn").addClass('opened');
    //         $("body, html").css('overflow', 'hidden');
    //     }
    //     else {
    //         $(".menu_btn").removeClass('opened');
    //         $(".menu_btn").addClass('closed');
    //         $("body, html").css('overflow-y', 'auto');
    //     }

    // });
    // Закрытие меню при клике не на области меню и кнопки 
    // $(document).mouseup(function (e) {
    //     var container_menu = $(".header_line");
    //     var container_menu_btn = $(".menu_btn");
    //     // if the target of the click isn't the container nor a descendant of the container
    //     if (!container_menu.is(e.target) && container_menu.has(e.target).length === 0 && !container_menu_btn.is(e.target) && container_menu_btn.has(e.target).length === 0) {
    //         if ($('.header_line').css('display', 'block')) {
    //             $('.header_line').css('display', 'none');
    //             $(".menu_btn").removeClass('opened');
    //             $(".menu_btn").addClass('closed');

    //         }
    //     }
    // });

    
   


});
