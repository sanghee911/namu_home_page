(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin


    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function($) {
    $(window).scroll(function(event) {

        var scrollTop           = $(window).scrollTop(),
            desktopOffsetTop    = $('#desktop').offset().top,
            serverOffsetTop     = $('#server').offset().top,
            desktopDistance     = (desktopOffsetTop - scrollTop),
            serverDistance      = (serverOffsetTop - scrollTop);

        console.log("scrollTop: " + scrollTop);
        console.log("desktopOffsetTop: " + desktopOffsetTop);
        console.log("serverOffsetTop: " + serverOffsetTop);


        if (scrollTop > desktopOffsetTop && scrollTop < serverOffsetTop) {
            $('#header-image').removeClass();
            $('#header-image').addClass('header-image-2');
            $('#header-text').css({ opacity: 0 });

        } else if (scrollTop > serverOffsetTop) {
            $('#header-image').removeClass();
            $('#header-image').addClass('header-image-3');
            $('#header-text').css({ opacity: 0 });
        } else if (scrollTop < desktopOffsetTop) {
            $('#header-image').removeClass();
            $('#header-image').addClass('header-image-1');
            $('#header-text').css({ opacity: 1 });
        }

    });

});
    