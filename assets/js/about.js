$(document).ready(function () {
  $("a.gallery").colorbox({
    rel: 'gallery',
    maxHeight: "90%",
    current: "Изображение {current} из {total}",
    opacity: 0.6
  });

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
        // '<img src="/assets/img/certificates/img4.png" alt="" class="about__media__img">'+
        // '<img src="/assets/img/certificates/img1.png" alt="" class="about__media__img">'+
        // '<img src="/assets/img/certificates/img3.png" alt="" class="about__media__img">'+
        '<a href="assets/img/certificates/img2.png" class="about__media__img gallery"><img src="assets/img/certificates/img2.png" alt=""></a>'+
        '<a href="assets/img/certificates/img4.png" class="about__media__img gallery"><img src="assets/img/certificates/img4.png" alt=""></a>'+
        '<a href="assets/img/certificates/img3.png" class="about__media__img gallery"><img src="assets/img/certificates/img3.png" alt=""></a>'
      )
      $("a.gallery").colorbox({
        rel: 'gallery',
        maxHeight: "90%",
        current: "Изображение {current} из {total}",
        opacity: 0.6
      });
    })

});