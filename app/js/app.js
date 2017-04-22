
try {
    Typekit.load({async: false});
} catch (e) { }

$(function () {

    $('.slide-modal__close').click(function () {
        $(this).closest('.slide-modal').slideToggle();
        return false;
    });

    //MENU

    $('.header__navigation').scroolly([
        {
            direction: 1,
            from: 'con-top + 41el',
            css: {
                '-transition': 'all .7s',
                position: 'fixed',
                top: '-110px'
            }
        },
        {
            direction: -1,
            from: 'con-top',
            css: {
                '-transition': 'all .7s',
                position: 'fixed',
                top: '41px'
            }
        }
    ], $('body'));

});
//   ./bank
var bankSlider = new Swiper('#bank-programs', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    // autoplay: true,
    speed: 3000
});
//  ./control
var controlSlider = new Swiper('#advant-slide', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    paginationClickable: true,
    // autoplay: true,
    speed: 2000,
    pagination: '#advant-pag',
    loop: false
});
var controlSliderM = new Swiper('#advant-slide-m', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    paginationClickable: true,
    // autoplay: true,
    speed: 2000,
    pagination: '#advant-pag-m',
    loop: false
});