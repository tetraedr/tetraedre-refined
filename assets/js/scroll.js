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