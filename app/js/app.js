
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