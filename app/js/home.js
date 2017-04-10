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
/**
 * Drop-down
 * @param seo
 */
function textMsg(seo) {
    $('#seo').slideToggle();
}


/**
 * Drop-down li in burger menu
 */
$(function () {
    /**
     * Drop-down in burger menu
     */
    $("a.burger__down").click(function () {
        if( $('body').css('overflow') == "hidden"){
            $('body').css({"overflow":"inherit"});
        }
        else {
            $('body').css({"overflow":"hidden"});
        }

        $('.profile__menu').css({"display":"none"});
        $(this).closest(".burger").find(".burger__menu").slideToggle();
        if($(this).closest(".burger").find(".burger__button").css("position") == "fixed"){
            $(this).closest(".burger").find(".burger__button").css({"position":"inherit"});
        }
        else{
            $(this).closest(".burger").find(".burger__button").css({"position":"fixed"});
        }

        return false;
    });
    /**
     * Drop-down li in burger menu
     */
    $("a.drop__down").click(function () {
        $(this).toggleClass("drop__down__active");
        $(this).closest("li").find(".drop__down__menu").slideToggle();
        return false;

    });
    /**
     * Drop-down li in burger menu
     */
    $("a.burger__button").click(function () {
        $(this).closest(".burger").find(".burger__menu").slideToggle();
        return false;

    });
    /**
     * Drop-down profile menu
     */
    $("a.profile__down").click(function () {
        $('body').css({"overflow":"hidden"});
        $('.burger__menu').css({"display":"none"});
        $(this).closest(".profile").find(".profile__menu").slideToggle();
        return false;
    });

    /**
     * Change position of block
     */
    var min_width = 1024;
    $(window).on('resize', function() {
        var new_width = $(window).width();
        var container = $('#container');
        if (new_width <= min_width && !container.hasClass('compact')) {
            container.addClass('compact');
            $('#third').insertBefore($('#first'));

        }
    }).trigger('resize');
});
