$(document).ready(function () {

    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 2,
        // spaceBetween: 45,
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
            500: {
                slidesPerView: 1,
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

});
