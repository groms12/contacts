$(document).ready(function () {
    $('.card__gallery__thumbs a').click(function() {
        var srcLittle = $(this).attr('data-img');
        // var srcBig = $('.card__objects__images__big').attr('src');
        $('.card__gallery__thumbs a img').removeClass('activee');
        $(this).find('img').addClass('activee');
        $('.card__gallery__big').attr('src', srcLittle);
        $('.card__gallery__big').attr('width', '680');
        $(this).attr('src', srcBig);
    })
});