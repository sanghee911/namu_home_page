$(window).scroll(function(event) {

    var scrollTop = $(window).scrollTop();
    console.log("scrollTop: " + scrollTop);

    if (scrollTop > 1000) {
        $('#back-to-top').css({ right: 0 });
    } else {
        $('#back-to-top').css({ right: "-50px" });
    }

});
