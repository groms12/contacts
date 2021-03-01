$(document).ready(function () {


    if ($(window).width() > 565){
       const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        // spaceBetween: 45,
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
            565: {
                slidesPerView: 1,
                direction: 'horizontal',
            },
            851: {
                slidesPerView: 2,
            },
            965: {
                spaceBetween: 10,
            },
            1020: {
                spaceBetween: 20, 
            },
            1110: {
                spaceBetween: 30, 
            },
            1170: {
                spaceBetween: 45,
            }
          }
      }); 
    }
    
    $('.btn').click(function() {
        $('.rewievs__slider-wrapper').append(
            '<div class="swiper-slide rewievs__slider__slide">'+
            '<div class="rewievs__slider__slide__people">'+
                '<img src="assets/img/rewievs/people.png" alt="" class="rewievs__slider__slide__people__img">'+
                '<div class="rewievs__slider__slide__people__text">'+
                    '<div class="rewievs__slider__slide__people__text__name">Марина</div>'+
                    '<div class="rewievs__slider__slide__people__text__city">Москва</div>'+
                '</div>'+
            '</div>'+
            '<div class="rewievs__slider__slide__description">'+
                '<p class="rewievs__slider__slide__description__text">Очень понравилась работа сотрудников — не просто сделали и забыли, а комплексно подошли к задаче. Сделали проект, купил емкость у вас же, монтаж и пусконаладку, заправку емкости газом.</p>'+
                '<a href="#" class="rewievs__slider__slide__description__more">Читать полностью</a>'+
            '</div>'+
        '</div>'
        )
    });

    $('.rewievs__slider__slide__description__more').click(function (e) {
        e.preventDefault();
        $('.slide__more').css('opacity', '1');
        $('.slide__more').css('visibility', 'visible');
    });

    $('.rewievs__slider__slide__close').click(function (e) {
        $('.slide__more').css('opacity', '0');
        $('.slide__more').css('visibility', 'hidden');
    });

});
