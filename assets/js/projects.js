$('.tile').on('mouseover', function() {
    $('.tile').removeClass('project-open');
    $('.tile').removeClass('project-min');
    $('.tile').find('.content').addClass('project-min');

    $(this).removeClass('project-min');
    $(this).addClass('project-open');
    $(this).find('.content').addClass('visible');
});

