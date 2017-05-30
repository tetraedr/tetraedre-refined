// Fade element on scroll

$(window).scroll(function() {
    $(".back-to-top").css("opacity", 0 + $(window).scrollTop() / 1000);
});

//Slow scroll vvv

$(document).ready(function() {
    $('.slow_scroll').on('click', function() { 
        var page = $(this).attr('href'); 
        var speed = 750; 
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed);
        return false;
    });
});