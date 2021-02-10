$(document).ready(function () {

    var countSale = 4;
    var width = $(window).width();
    var countDev = 5;
    if (width >= 915) {
      if (countDev > 4) {
        $(".slide-one").owlCarousel({
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
    
    // if (countSale >= 4) {
        $(".slide-two").owlCarousel({
            margin: 10,
            items: 3,
            dots: false,
            nav: true,   
        });
    // }   

    $('.product-card__object__images__small div img').click(function() {
        var srcLittle = this.src;
        var srcBig = $('.product-card__object__images__big').src;
        $('.product-card__object__images__big').attr('src', srcLittle);
        $('.product-card__object__images__small div img').attr('src', srcBig);
    })
});
