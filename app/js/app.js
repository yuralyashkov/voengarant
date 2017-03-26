
try {
    Typekit.load({async: false});
} catch (e) { }

$(function () {

    $('.slide-modal__close').click(function () {
        $(this).closest('.slide-modal').slideToggle();
        return false;
    });

});