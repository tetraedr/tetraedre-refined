$('.mutualab').on('mouseover', function() {
    $('.container-mutualab').css('opacity', '1');

    $('.container-norauto').css('opacity', '0');
    $('.container-freelance').css('opacity', '0');
    $('.container-optimizme').css('opacity', '0');
});


$('.norauto').on('mouseover', function() {
    $('.container-norauto').css('opacity', '1');

    $('.container-mutualab').css('opacity', '0');
    $('.container-freelance').css('opacity', '0');
    $('.container-optimizme').css('opacity', '0');
});

$('.freelance').on('mouseover', function() {
    $('.container-freelance').css('opacity', '1');
    
    $('.container-mutualab').css('opacity', '0');
    $('.container-norauto').css('opacity', '0');
    $('.container-optimizme').css('opacity', '0');
});


$('.optimizme').on('mouseover', function() {
    $('.container-optimizme').css('opacity', '1');
    
    $('.container-mutualab').css('opacity', '0');
    $('.container-norauto').css('opacity', '0');
    $('.container-freelance').css('opacity', '0');
});
