$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]:not([class^="carousel-control"])', function () {
        if (!/#/.test(this.href)) return;
        var id = $(this).attr('href');
        if (id === '#') return;
        $('html,body').animate({
            'scrollTop': $(id).offset().top - 80
        }, 1000);
        return false;
    });

    if (document.addEventListener) {
        var wow = new WOW().init();
    }

    var resizeCarousel = function () {
        var wHeight = $(window).height();
        var navHeight = $('[fh-navbar]').outerHeight(true);
        var item = $('.carousel-item:first', '[fh-carousel]');
        var item2 = $('.carousel-inner', '[fh-carousel]');
        $('.carousel-item', '[fh-carousel]').height(wHeight - navHeight - (parseInt(item.css('paddingTop'), 10) + parseInt(item.css('paddingBottom'), 10)));
        $('.carousel-inner', '[fh-carousel]').height(wHeight - navHeight - (parseInt(item2.css('paddingTop'), 10) + parseInt(item2.css('paddingBottom'), 10)));
    };

    $(window).on('resize load', resizeCarousel);
    resizeCarousel();

    var resizeMap = function () {
        var wHeight = $(window).height();
        var navHeight = $('[fh-navbar]').outerHeight(true);
        var item = $('iframe', '#location');
        var item2 = $('.container-fluid', '#location');
        $('iframe', '#location').height(wHeight - navHeight - (parseInt(item.css('paddingTop'), 10) + parseInt(item.css('paddingBottom'), 10)));
        $('.container-fluid', '#location').height(wHeight - navHeight - (parseInt(item2.css('paddingTop'), 10) + parseInt(item2.css('paddingBottom'), 10)));
    };

    $(window).on('resize load', resizeMap);
    resizeMap();
});