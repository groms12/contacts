$(document).ready(function () {
    $('.card__objects__images__small img').click(function() {
        var srcLittle = this.src;
        var srcBig = $('.card__objects__images__big').src;
        $('.card__objects__images__big').attr('src', srcLittle);
        $('.card__objects__images__small img').attr('src', srcBig);
    })
});