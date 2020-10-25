$(document).ready(function () {
var num = 49; // общее кол-во записей
var numArticles = 10; // кол-во записей на странице
var count = 5;

 // создание слайдеров
var mySwiper = new Swiper ('.swiper-container', {
   loop: false,
   preloadImages: false,
   lazy: true,
   pagination: {
       el: '.swiper-pagination',
       clickable: true,
       renderBullet: function(index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
     },
     navigation: {
       nextEl: '.swiper-next',
       prevEl: '.swiper-prev',
     },
});

// вызвать псевдоклик
$('.galery__text__num-1').click(function(e){
    $('.galery__text__num-1').addClass('galery__text__num--active');
    $('.galery__text__num-2').removeClass('galery__text__num--active');
    $('.galery__text__num-3').removeClass('galery__text__num--active');
    numArticles = 10;
    
    if (num > numArticles) 
        count = Math.ceil(num/numArticles); // кол-во слайдов
    else
        count = 1;

    var str = '';
    for (var i = 1; i <= count; i++) {
        str += '<div class="swiper-slide galery__slider__slide"></div>';
    }
    $('.galery__slider').html(str);
    var str = '';
    for (var i = 1; i <= numArticles; i++){
        str += '<div class="galery__slider__slide__block">'+
        '<div class="galery__slider__slide__block__group">'+
        '<img src="assets/img/galery/img.png" alt="фото" class="galery__slider__slide__block__img">'+
        '<div class="galery__slider__slide__block__description">'+
        '<span class="galery__slider__slide__block__description__name">Газгольдер</span>'+
        '<span class="galery__slider__slide__block__description__title">BAXI Luma 3 comfort</span>'+
        '<span class="galery__slider__slide__block__description__brand">'+
        '<span>Производитель (Бренд) </span><span class="points"></span><span class="galery__slider__slide__block__description__brand-name">Baki</span>'+
        '</span><span class="galery__slider__slide__block__description__num">Артикул <span>210000017</span></span>'+
        '</div></div><div class="galery__slider__slide__block__cost">'+
        '<div class="galery__slider__slide__block__cost__num">74 000 &#8381;</div>'+
        '<a href="#" class="galery__slider__slide__block__cost__btn">Заказать</a></div></div>';
    }
    $('.galery__slider__slide').html(str);
    mySwiper.update();
    var bullets = $('.swiper-pagination-bullet');
    $('.navigation').css('max-width', count*bullets.width() + count*20 + 50);
});

$('.galery__text__num-2').click(function(e){
    $('.galery__text__num-2').addClass('galery__text__num--active');
    $('.galery__text__num-1').removeClass('galery__text__num--active');
    $('.galery__text__num-3').removeClass('galery__text__num--active');
    numArticles = 20;

    if (num > numArticles) 
        count = Math.ceil(num/numArticles); // кол-во слайдов
    else
        count = 1;

    var str = '';
    for (var i = 1; i <= count; i++) {
        str += '<div class="swiper-slide galery__slider__slide"></div>';
    }
    $('.galery__slider').html(str);
    var str = '';
    for (var i = 1; i <= numArticles; i++){
        str += '<div class="galery__slider__slide__block">'+
        '<div class="galery__slider__slide__block__group">'+
        '<img src="assets/img/galery/img.png" alt="фото" class="galery__slider__slide__block__img">'+
        '<div class="galery__slider__slide__block__description">'+
        '<span class="galery__slider__slide__block__description__name">Газгольдер</span>'+
        '<span class="galery__slider__slide__block__description__title">BAXI Luma 3 comfort</span>'+
        '<span class="galery__slider__slide__block__description__brand">'+
        '<span>Производитель (Бренд)</span><span class="points"></span><span class="galery__slider__slide__block__description__brand-name">Baki</span>'+
        '</span><span class="galery__slider__slide__block__description__num">Артикул 210000017</span>'+
        '</div></div><div class="galery__slider__slide__block__cost">'+
        '<div class="galery__slider__slide__block__cost__num">74 000 &#8381;</div>'+
        '<a href="#" class="galery__slider__slide__block__cost__btn">Заказать</a></div></div>';
    }
    $('.galery__slider__slide').html(str);
    mySwiper.update();
    var bullets = $('.swiper-pagination-bullet');
    $('.navigation').css('max-width', count*bullets.width() + count*20 + 50);
});

$('.galery__text__num-3').click(function(e){
    $('.galery__text__num-3').addClass('galery__text__num--active');
    $('.galery__text__num-2').removeClass('galery__text__num--active');
    $('.galery__text__num-1').removeClass('galery__text__num--active');
    numArticles = 100;

    if (num > numArticles) 
        count = Math.ceil(num/numArticles); // кол-во слайдов
    else
        count = 1;

    var str = '';
    for (var i = 1; i <= count; i++) {
        str += '<div class="swiper-slide galery__slider__slide"></div>';
    }
    $('.galery__slider').html(str);
    var str = '';
    for (var i = 1; i <= numArticles; i++){
        str += '<div class="galery__slider__slide__block">'+
        '<div class="galery__slider__slide__block__group">'+
        '<img src="assets/img/galery/img.png" alt="фото" class="galery__slider__slide__block__img">'+
        '<div class="galery__slider__slide__block__description">'+
        '<span class="galery__slider__slide__block__description__name">Газгольдер</span>'+
        '<span class="galery__slider__slide__block__description__title">BAXI Luma 3 comfort</span>'+
        '<span class="galery__slider__slide__block__description__brand">'+
        '<span>Производитель (Бренд) </span><span class="points"></span><span class="galery__slider__slide__block__description__brand-name"> Baki</span>'+
        '</span><span class="galery__slider__slide__block__description__num">Артикул 210000017</span>'+
        '</div></div><div class="galery__slider__slide__block__cost">'+
        '<div class="galery__slider__slide__block__cost__num">74 000 &#8381;</div>'+
        '<a href="#" class="galery__slider__slide__block__cost__btn">Заказать</a></div></div>';
    }
    $('.galery__slider__slide').html(str);
    mySwiper.update();
    var bullets = $('.swiper-pagination-bullet');
    $('.navigation').css('max-width', count*bullets.width() + count*20 + 50);
});
var cnt = num - 10; // кол-во оставшихся записей при max-width: 780px

$('.more').click(function(){
    var str = '';
    if (cnt >= 5){
        for (var i = 1; i <= 5; i++){
            str += '<div class="galery__slider__slide__block">'+
            '<div class="galery__slider__slide__block__group">'+
            '<img src="assets/img/galery/img.png" alt="фото" class="galery__slider__slide__block__img">'+
            '<div class="galery__slider__slide__block__description">'+
            '<span class="galery__slider__slide__block__description__name">Газгольдер</span>'+
            '<span class="galery__slider__slide__block__description__title">BAXI Luma 3 comfort</span>'+
            '<span class="galery__slider__slide__block__description__brand">'+
            '<span>Производитель (Бренд) </span><span class="points"></span><span class="galery__slider__slide__block__description__brand-name"> Baki</span>'+
            '</span><span class="galery__slider__slide__block__description__num">Артикул 210000017</span>'+
            '</div></div><div class="galery__slider__slide__block__cost">'+
            '<div class="galery__slider__slide__block__cost__num">74 000 &#8381;</div>'+
            '<a href="#" class="galery__slider__slide__block__cost__btn">Заказать</a></div></div>';
        }
        cnt -= 5;
    }
    else {
       for (var i = 1; i <= cnt; i++){
            str += '<div class="galery__slider__slide__block">'+
            '<div class="galery__slider__slide__block__group">'+
            '<img src="assets/img/galery/img.png" alt="фото" class="galery__slider__slide__block__img">'+
            '<div class="galery__slider__slide__block__description">'+
            '<span class="galery__slider__slide__block__description__name">Газгольдер</span>'+
            '<span class="galery__slider__slide__block__description__title">BAXI Luma 3 comfort</span>'+
            '<span class="galery__slider__slide__block__description__brand">'+
            '<span>Производитель (Бренд) </span><span class="points"></span><span class="galery__slider__slide__block__description__brand-name"> Baki</span>'+
            '</span><span class="galery__slider__slide__block__description__num">Артикул 210000017</span>'+
            '</div></div><div class="galery__slider__slide__block__cost">'+
            '<div class="galery__slider__slide__block__cost__num">74 000 &#8381;</div>'+
            '<a href="#" class="galery__slider__slide__block__cost__btn">Заказать</a></div></div>';
        } 
        cnt = 0;
        $('.btn').css('display', 'none');
    } 
    $('.galery__slider__slide').append(str);
});

$('#trig').trigger('click');
if(mySwiper.activeIndex == 0) {
  $('.swiper-prev').addClass('swiper-prev--active');
}

mySwiper.on('slideChange', function () {
    if(this.activeIndex == count-1) {
        $('.swiper-next').addClass('swiper-next--active');
    }
    if(mySwiper.activeIndex == 0) {
        $('.swiper-prev').addClass('swiper-prev--active');
    }
    if (this.activeIndex != 0) {
        $('.swiper-prev').removeClass('swiper-prev--active');
    }
    if (this.activeIndex != count-1) {
        $('.swiper-next').removeClass('swiper-next--active');
    }
});

});