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
        slide: function( event, ui ) {
            $( "#amount" ).val( "руб." + ui.value );
        }
    });
    $( "#amount" ).val( "руб." + $( "#apartmen-cost" ).slider( "value" ) );
} );

$( function () {
    $( "#your-savings" ).slider({
        range: "min",
        value: 2006,
        min: 2005,
        max: 2014,
        step: 1000,
        slide: function( event, ui ) {
            $( "#storage" ).val( "руб." + ui.value );
        }
    });
    $( "#storage" ).val( "руб." + $( "#your-savings" ).slider( "value" ) );
} );