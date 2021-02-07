$(document).ready(function () {

    var count = 5;

    if (count > 4) {
        $(".owl-carousel").owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
        });
    } 
    

    

    $('.product-card__object__images__small div img').click(function() {
        var srcLittle = this.src;
        var srcBig = $('.product-card__object__images__big').src;
        $('.product-card__object__images__big').attr('src', srcLittle);
        $('.product-card__object__images__small div img').attr('src', srcBig);
    })
});
