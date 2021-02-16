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

    $('.slider-item').slick({ 
        infinite: false, 
        vertical: false, 
        // centerMode: true, 
        slidesToShow: 3, 
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 441,
                settings: {
                    vertical: true, 
                    slidesToShow: 3,
                }
            }
        ]
    });
    

    $('.product-card__object__images__small a').click(function() {
        var srcLittle = $(this).attr('data-img');
        $('.product-card__object__images__small a').removeClass('active');
        $(this).addClass('active');
        var srcBig = $('.product-card__object__images__big').src;
        $('.product-card__object__images__big').attr('src', srcLittle);
        $('.product-card__object__images__small a img').attr('src', srcBig);
    })
});
