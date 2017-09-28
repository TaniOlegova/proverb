$(document).ready(function(){

    $('.main-slider').slick({
        slidesToScroll: 1,
        slidesToShow: 1,
        speed: 1000,
        // autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<span class="arrow-prev"></span>',
        nextArrow: '<span class="arrow-next"></span>'
    });

    $('.mobile-menu i').on('click', function () {
        $('.navigation-menu').stop().slideToggle();
    });
});

$('.people-slider').carousel({


    // the number of images to display
    num: 5,

    // max width of the active image
    maxWidth: 180,

    // min width of the active image
    maxHeight: 200,

    // enable auto play
    autoPlay: false,

    // autoplay interval
    showTime: 1000,

    // animation speed
    animationTime: 300,

    // 0.0 - 1.0
    scale: 0.8,

    // the distance between images
    distance: 85
});