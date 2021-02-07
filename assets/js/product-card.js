$(document).ready(function () {


    var width = $(window).width();
    var count = 5;
    if (width >= 915) {
      if (count > 4) {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            responsive: {
                915: {
                    items: 3,
                },
                1197: {
                    items: 4, 
                },
            }     
        });
    }   
    }
    
    

    

    $('.product-card__object__images__small div img').click(function() {
        var srcLittle = this.src;
        var srcBig = $('.product-card__object__images__big').src;
        $('.product-card__object__images__big').attr('src', srcLittle);
        $('.product-card__object__images__small div img').attr('src', srcBig);
    })
});
