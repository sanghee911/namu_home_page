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
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict

$(document).ready(function() {
    var margin = 10;
    $('#i').css({ left: 100 + margin + "px", top: 0 + "px" });
    $('#c').css({ left: (100 + margin) * 2 + "px", top: 0 + "px" });
    $('#t').css({ left: (100 + margin) * 3 + "px", top: 0 + "px" });

    $(window).scroll(function(event) {
        
        var scrollTop = $(window).scrollTop();
        console.log("scrollTop: " + scrollTop);

        if (scrollTop >= 0 && scrollTop < 30) {
            $('#i').css({ left: 100 + margin + "px", top: 0 + "px" });
            $('#c').css({ left: (100 + margin) * 2 + "px", top: 0 + "px" });
            $('#t').css({ left: (100 + margin) * 3 + "px", top: 0 + "px" });
            $('.lower').css({ left: "-500px" });
        } else if (scrollTop >= 30 && scrollTop < 70) {
            $('#i').css({ left: 100 + margin + "px", top: 100 + margin + "px" });
            $('#c').css({ left: (100 + margin) * 2 + "px", top: (100 + margin) * 2 + "px" });
            $('#t').css({ left: (100 + margin) * 3 + "px", top: (100 + margin) * 3 + "px" });
        } else if (scrollTop >= 70 && scrollTop <= 700) {
            $('#i').css({ left: 0 + "px", top: 100 + margin + "px" });
            $('#c').css({ left: 0 + "px", top: (100 + margin) * 2 + "px" });
            $('#t').css({ left: 0 + "px", top: (100 + margin) * 3 + "px" });
        }

        if (scrollTop >= 90 && scrollTop <= 1000) {
            $('.lower').css({ left: 0 });
        } 

        if (scrollTop >= 150 && scrollTop <= 1000) {
            $('#background').css({ left: 0 });
        } else if (scrollTop < 400) {
            $('#background').css({ left: "-100%" });
        }

    });

    // DISPLAY ITEM DESCRIPTION WHEN IMAGE CLICKED
    $('#clickMe').click(function() {

        $('#imgPopUp').css('display', 'block');
        $('#imgWrap').animate({top: "50%"}, 500);

    });
    
    // CLOSE ITEM DESCRIPTION WHEN CLOSE BUTTON CLICKED
    $('#imgPopUp').click(function() {

        $('#imgWrap').css({top: "-50%"});
        $('#imgPopUp').css('display', 'none');

    });

    $('#icon-1').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 630) {
            console.log(windowWidth);
            $('#icon-1').css({'background-position-x': '0px',
                              'background-position-y': '-180px'});
        } else {
            $('#icon-1').css({'background-position-x': '0px',
                              'background-position-y': '-360px'});  
        }
        $('#icon-2').attr({'style': ''});
        $('#icon-3').attr({'style': ''});
        $('#icon-4').attr({'style': ''});
        $('#icon-5').attr({'style': ''});
        $('.description').css({'opacity': 0});
        $('#description-1').css({'opacity': 1});

    });

    $('#icon-2').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 630) {
            $('#icon-2').css({'background-position-x': '-60px',
                              'background-position-y': '-180px'});
        } else {
            $('#icon-2').css({'background-position-x': '-120px',
                              'background-position-y': '-360px'});  
        }
        $('#icon-1').attr({'style': ''});
        $('#icon-3').attr({'style': ''});
        $('#icon-4').attr({'style': ''});
        $('#icon-5').attr({'style': ''});
        $('.description').css({'opacity': 0});
        $('#description-2').css({'opacity': 1});
        
    });
    $('#icon-3').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 630) {
            $('#icon-3').css({'background-position-x': '-120px',
                              'background-position-y': '-180px'});
        } else {
            $('#icon-3').css({'background-position-x': '-240px',
                              'background-position-y': '-360px'});  
        }
        $('#icon-1').attr({'style': ''});
        $('#icon-2').attr({'style': ''});
        $('#icon-4').attr({'style': ''});
        $('#icon-5').attr({'style': ''});
        $('.description').css({'opacity': 0});
        $('#description-3').css({'opacity': 1});
        
    });

    $('#icon-4').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 630) {
            $('#icon-4').css({'background-position-x': '-180px',
                              'background-position-y': '-180px'});
        } else {
            $('#icon-4').css({'background-position-x': '-360px',
                              'background-position-y': '-360px'});  
        }
        $('#icon-1').attr({'style': ''});
        $('#icon-2').attr({'style': ''});
        $('#icon-3').attr({'style': ''});
        $('#icon-5').attr({'style': ''});
        $('.description').css({'opacity': 0});
        $('#description-4').css({'opacity': 1});
        
    });

    $('#icon-5').click(function() {
        var windowWidth = $(window).width();
        if (windowWidth <= 630) {
            $('#icon-5').css({'background-position-x': '-240px',
                              'background-position-y': '-180px'});
        } else {
            $('#icon-5').css({'background-position-x': '-480px',
                              'background-position-y': '-360px'});  
        }
        $('#icon-1').attr({'style': ''});
        $('#icon-2').attr({'style': ''});
        $('#icon-3').attr({'style': ''});
        $('#icon-4').attr({'style': ''});
        $('.description').css({'opacity': 0});
        $('#description-5').css({'opacity': 1});
        
    });

    var newHeight = $('#description-4').height();
    $('.description-wrap').height(newHeight);
    
});

$(window).resize(function() {

    var newHeight = $('#description-4').height();
    $('.description-wrap').height(newHeight);

    console.log($(window).width());



    
});
