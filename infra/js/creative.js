/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

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

    // Fit Text Plugin for Main Header
    // $("h1").fitText(
    //     1.2, {
    //         minFontSize: '35px',
    //         maxFontSize: '65px'
    //     }
    // );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict


//------------- start clock control -------------//
// variables for clock parts
var     $window = $(window),
        $html = $('html'),
        $document = $(document),
        myClock = $('.clock'),
        myHourHand = $('.hour_hand'),
        myMinuteHand = $('.minute_hand'),
        mySecondHand = $('.second_hand'),
        nowHour,
        nowMinute,
        nowSecond,
        hourHandRoation,
        minuteHandRotation,
        secondHandRotation;
        
//  function for positioning clock parts
function getPosition() { //------------------------ start "getPosition()"
    var myClcokWidth = myClock.width(),
        myClcokHeight = myClock.height();
    // positioning parts and set size
    myHourHand.css({
                    'width'  : myClcokWidth * 0.065 + 'px',
                    'height' : myClcokWidth * 0.25 + 'px'
    });
                                    
    var myHourHandWidth = myHourHand.width(),
        myHousrHandHeight = myHourHand.height();
    
    myHourHand.css({
                    'left'  : (myClcokWidth - myHourHandWidth)/2 + 'px',
                    'top'   : (myClcokHeight/2) - myHousrHandHeight + 'px'
    });
    
    myMinuteHand.css({
                    'width'     : myClcokWidth * 0.03 + 'px',
                    'height'    : myClcokWidth * 0.35 + 'px'
    });
                                    
    var myMinuteHandWidth = myMinuteHand.width(),
        myMinuteHandHeight = myMinuteHand.height();
    
    myMinuteHand.css({                      
                    'left'  : (myClcokWidth - myMinuteHandWidth)/2 + 'px',
                    'top'   : (myClcokHeight/2) - myMinuteHandHeight + 'px'
    });
    
    mySecondHand.css({
                    'width'     : myClcokWidth * 0.01 + 'px',
                    'height'    : myClcokWidth * 0.4 + 'px'
    });
    
    var mySecondHandWidth = mySecondHand.width(),
        mySecondHandHeight = mySecondHand.height();
    
    mySecondHand.css({
                    'left'  : (myClcokWidth - mySecondHandWidth)/2 + 'px',
                    'top'   : (myClcokHeight/2) - mySecondHandHeight + 'px'
    });

} //-------------------------------------------------------- end "getPosition()"

// function for clock movements
function onTick() { //------------------------ start "onTick()"
    var now = new Date();
    nowHour = now.getHours();
    nowMinute = now.getMinutes();
    nowSecond = now.getSeconds();
    hourHandRotation = nowHour * 30 + nowMinute * 0.5 ;
    minuteHandRotation = nowMinute * 6;
    secondHandRotation = nowSecond * 6;
    myHourHand.css({
        '-webkit-transform' : 'rotate(' + hourHandRotation + 'deg)',
        '-moz-transform' : 'rotate(' + hourHandRotation + 'deg)',
        '-o-transform' : 'rotate(' + hourHandRotation + 'deg)',
        'transform' : 'rotate(' + hourHandRotation + 'deg)'
    });
    myMinuteHand.css({
        '-webkit-transform' : 'rotate(' + minuteHandRotation + 'deg)',
        '-moz-transform' : 'rotate(' + minuteHandRotation + 'deg)',
        '-o-transform' : 'rotate(' + minuteHandRotation + 'deg)',
        'transform' : 'rotate(' + minuteHandRotation + 'deg)'
    });
    mySecondHand.css({
        '-webkit-transform' : 'rotate(' + secondHandRotation + 'deg)',
        '-moz-transform' : 'rotate(' + secondHandRotation + 'deg)',
        '-o-transform' : 'rotate(' + secondHandRotation + 'deg)',
        'transform' : 'rotate(' + secondHandRotation + 'deg)'
    });
} //------------------------------------------------ end "onTick()"

// initialize clock sizing and positioning
getPosition();

// timer for  clock movements
setInterval(function() {
        onTick();
}, 1000);

// reposition and resize parts on resize
$window.resize(function() {
    getPosition();
});
        
//------------- end clock control -------------//   