(function($) {

    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin

    $(window).load(function() {
        $('.preloader').delay(2500).fadeOut("slow");
    });

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

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

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

//------------- start digital-clock -------------// 


var setTime = function(){
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var diem = "am";
    var time;
    var styles = {
        'color': 'hsla(' + (s*3) +', 90%, 50%, 1)',
        'textShadow': '0px 0px 5px hsla(' + (s*3) +', 100%, 70%, .5)',
        'borderColor': 'hsla(' + (s*3) +', 50%, 20%, .4)',
        'backgroundColor': 'hsla(' + (s*3) +', 80%, 20%, .9)'
    };

    if (h == 0) {
        h = 12;
    }   else if (h > 12) {
        h = h - 12;
        diem = "pm";
    }

    if (m < 10) {
        m = "0" + m;
    }

    if (s < 10) {
        s = "0" + s;
    }

    time = h + ":" + m + ":" + s + " " + diem;

  $('.digital-clock h1').text(time).css(styles);

  // console.log(time);

  setTimeout(setTime, 1000);
}
setTime();

//------------- end digital-clock -------------// 

//------------- start logo animation -------------// 
var colors = ['#B31B28', '#131426', '#3078C0', '#F2C230', '#203880', '#256F6E', '#E74C2E', '#2FBFBF', "#8B3628", "#48AE43"];
var counter = 0;
var nextColor;
var letterN = document.getElementById("letter-n");
var letterA = document.getElementById("letter-a");
var letterM = document.getElementById("letter-m");
var letterU = document.getElementById("letter-u");
var svgCircle = document.getElementById("svg-circle");

function colorChange() {
    var number = Math.ceil(Math.random() * (colors.length - 1));
    nextColor = colors[number];
    letterN.style.fill = nextColor;

    number = (number + 1) % colors.length;
    nextColor = colors[number];
    letterA.style.fill = nextColor;

    number = (number + 1) % colors.length;
    nextColor = colors[number];
    letterM.style.fill = nextColor;

    number = (number + 1) % colors.length;
    nextColor = colors[number];
    letterU.style.fill = nextColor;

    number = (number + 1) % colors.length;
    nextColor = colors[number];
    svgCircle.style.fill = nextColor;
}

setInterval(colorChange, 3000);
//------------- end logo animation -------------// 

$(document).ready(function($) {

    $(window).scroll(function(event) {
        
        var y =$(this).scrollTop();

        if (y >= 1700) {

            $('#cover').removeClass('top-0');
            $('#cover').addClass('slide-to-bottom');

        } else {
            $('#cover').addClass('top-0');
            $('#cover').removeClass('slide-to-bottom');
        }

    });

    $('#logo-animation-wrap').mouseenter(function() {
        $('#logo-animation').attr("src", "img/namu_logo_animation_black_small.gif");
    })

    $('#block-left').click(function(event) {
        $('#digital-clock').toggleClass('up');
        $('#digital-clock').toggleClass('down');
    });
});

    
