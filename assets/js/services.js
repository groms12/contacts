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
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        930: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        1100: {
            slidesPerView: 5,
            spaceBetween: 10
        },
    }
  });