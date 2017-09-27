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