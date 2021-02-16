$(document).ready(function () {
    $('.card__objects__images__small a').click(function() {
        var srcLittle = $(this).attr('data-img');
        // var srcBig = $('.card__objects__images__big').attr('src');
        $('.card__objects__images__small a').removeClass('active');
        $(this).addClass('active');
        $('.card__objects__images__big').attr('src', srcLittle);
        $('.card__objects__images__big').attr('width', '680');
        $(this).attr('src', srcBig);
    })
});