$(document).ready(function () {

    const swiper = new Swiper('.swiper-container', {
        loop: true,
        slidesPerView: 4,
        spacebetween: 40,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
            spacebetween: 40
          },
          885: {
            slidesPerView: 3,
            spacebetween: 40
          },
          1100: {
            slidesPerView: 4,
            spacebetween: 40
          }
            
        }
      });

    $('.btn').click(function () { 

      $('.about__media').append(
        '<img src="/assets/img/certificates/img4.png" alt="" class="about__media__img">'+
        '<img src="/assets/img/certificates/img1.png" alt="" class="about__media__img">'+
				// '<img src="/assets/img/certificates/img2.png" alt="" class="about__media__img">'+
				'<img src="/assets/img/certificates/img3.png" alt="" class="about__media__img">'
      )
    })

});