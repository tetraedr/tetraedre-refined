$('.mutualab').on('mouseover', function() {
    $('.container-mutualab').removeClass('hidden');
    $('.container-mutualab').addClass('visible');

    $('.container-norauto').addClass('hidden');
    $('.container-freelance').addClass('hidden');
    $('.container-optimizme').addClass('hidden');
});


$('.norauto').on('mouseover', function() {
    $('.container-norauto').removeClass('hidden');
    $('.container-norauto').addClass('visible');

    $('.container-mutualab').addClass('hidden');
    $('.container-freelance').addClass('hidden');
    $('.container-optimizme').addClass('hidden');
});

$('.freelance').on('mouseover', function() {
    $('.container-freelance').removeClass('hidden');
    $('.container-freelance').addClass('visible');
    
    $('.container-mutualab').addClass('hidden');
    $('.container-norauto').addClass('hidden');
    $('.container-optimizme').addClass('hidden');
});


$('.optimizme').on('mouseover', function() {
    $('.container-optimizme').removeClass('hidden');
    $('.container-optimizme').addClass('visible');
    
    $('.container-mutualab').addClass('hidden');
    $('.container-norauto').addClass('hidden');
    $('.container-freelance').addClass('hidden');
});

