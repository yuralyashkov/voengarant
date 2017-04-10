/**
 * Created by Yuriy Liashkov on 26.03.2017.
 */
var HomeSlider = new Swiper ('.slider-home', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: '.swiper-pagination',
    paginationClickable: true
});

$(function () {

    $('.developer-tab a').click(function () {
        var id = $(this).data('id');
        $('.developer-tab a').removeClass('active');

        $(this).addClass('active');
        $('.tab-content').hide();
        $('#'+id).fadeIn();
        return false;
    });

    $('.special__content a').click(function () {
        $('#special-order').slideDown();
        $('html, body').animate({ scrollTop: $('#special-order').offset().top - 200 }, 500);
        return false;
    });
    $('.seo a').click(function () {
        $('#seo').slideDown();
        $('html, body').animate({ scrollTop: $('#seo').offset().top - 200 }, 500);
        return false;
    });

});

function textMsg(seo) {
    $('#seo').slideToggle();
}
