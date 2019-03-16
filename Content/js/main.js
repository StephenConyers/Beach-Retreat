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
});