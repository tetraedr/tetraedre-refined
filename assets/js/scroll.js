$elem1 = $('.container-hero-img');
$elem2 = $('.hero-img');
var scrollState = 'top';

$(window).scroll(function(){ 
    
    var scrollPos = $(window).scrollTop();

    if( ( scrollPos != 0 ) && ( scrollState === 'top' ) ) {
        $elem2.stop().animate({height: '20vh'}, 300);
        scrollState = 'scrolled';
    }       
    else if( ( scrollPos === 0 ) && ( scrollState === 'scrolled' ) ) {
        $elem2.stop().animate({height: '90vh'}, 300);
        scrollState = 'top';
    }

});

// Fade element on scroll

$(window).scroll(function() {
    $(".back-to-top").css("opacity", 0 + $(window).scrollTop() / 1000);
});

//Slow scroll vvv

$(document).ready(function() {
    $('.slow_scroll').on('click', function() { 
        var page = $(this).attr('href'); 
        var speed = 750; 
        $('html, body').animate({ scrollTop: $(page).offset().top }, speed); // Go
        return false;
    });
});