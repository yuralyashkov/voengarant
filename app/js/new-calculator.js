/**
 * Created by Katya on 14.04.2017.
 */

$( function() {
    $( "#apartmen-cost" ).slider({
        range: "min",
        value: 6.7,
        min: 1,
        max: 15,
        step: 0.1,
        animate: true,
        slide: function( event, ui ) {
            $( "#amount" ).val( "руб." + ui.value );
        }
    });
    $( "#amount" ).val( "руб." + $( "#apartmen-cost" ).slider( "value" ) );

    $( "#apartmen-cost-mob" ).slider({
        range: "min",
        value: 6.7,
        min: 1,
        max: 15,
        step: 0.1,
        animate: true,
        slide: function( event, ui ) {
            $( "#amount-mob" ).val( "руб." + ui.value );
        }
    });
    $( "#amount-mob" ).val( "руб." + $( "#apartmen-cost-mob" ).slider( "value" ) );

    $( "#year" ).slider({
        range: "min",
        value: 2,
        min: 1,
        max: 11,
        step: 1,
        orientation: "horizontal",
        animate: true
    });

    $( "#year-mob" ).slider({
        range: "min",
        value: 2,
        min: 1,
        max: 11,
        step: 1,
        orientation: "horizontal",
        animate: true
    });

    $( "#month" ).slider({
        value: 10,
        min: 1,
        max: 12,
        step: 1,
        orientation: "horizontal",
        range: "min",
        animate: true
    });

    $( "#month-mob" ).slider({
        value: 10,
        min: 1,
        max: 12,
        step: 1,
        orientation: "horizontal",
        range: "min",
        animate: true
    });

    $( "#age" ).slider({
        value: 30,
        min: 25,
        max: 45,
        step: 1,
        orientation: "horizontal",
        range: "min",
        animate: true
    });

    $( "#age-mob" ).slider({
        value: 30,
        min: 25,
        max: 45,
        step: 1,
        orientation: "horizontal",
        range: "min",
        animate: true
    });
} );
