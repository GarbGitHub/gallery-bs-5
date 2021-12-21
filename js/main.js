(function($) {


    /* CounterUp */
    $('.counter').counterUp({
        time: 1000
    });

    /* MixitUp */
    $('#portfolio').mixItUp();

    /* Nivo Lightbox*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });

}(jQuery));