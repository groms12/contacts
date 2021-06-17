const swiper = new Swiper('.swiper-container', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },
    breakpoints: {
        319: {
          slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        640: {
            slidesPerView: 4,
            spaceBetween: 0
        },
        840: {
            slidesPerView: 4
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 10
        },
    }
  });