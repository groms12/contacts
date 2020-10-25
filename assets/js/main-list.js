$(document).ready(function () {
    var num = 14; // общее кол-во записей
    var count = num - 4; 
    var str = ['<div class="list__block">'+
                    '<div class="list__block__title">Монтаж отопления</div>'+
                    '<img src="assets/img/list/img1.png" alt="фото" class="list__block__img">'+
                    '<span class="list__block__square">до 100 м²</span>'+
                    '<span class="list__block__place">Дом (Дача)</span>'+
                    '<div class="list__block__cost">'+
                        '<div class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Работа</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 185 000 &#8381;</span>'+
                        '</div>'+
                        '<div  class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Материалы</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 205 000 &#8381;</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="list__block__key">'+
                        '<span class="list__block__key__text">под ключ</span>'+
                        '<span class="list__block__key__num"><span>от</span> 124 000 &#8381;</span>'+
                    '</div>'+
                    '<button class="list__block__btn">посмотреть смету</button>'+
                '</div>',
                '<div class="list__block">'+
                    '<div class="list__block__title">Обслуживание отопления</div>'+
                    '<img src="assets/img/list/img2.png" alt="фото" class="list__block__img">'+
                    '<span class="list__block__square">до 200 м²</span>'+
                    '<span class="list__block__place">Дом</span>'+
                    '<div class="list__block__cost">'+
                        '<div class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Работа</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 185 000 &#8381;</span>'+
                        '</div>'+
                        '<div  class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Материалы</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 205 000 &#8381;</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="list__block__key">'+
                        '<span class="list__block__key__text">под ключ</span>'+
                        '<span class="list__block__key__num"><span>от</span> 124 000 &#8381;</span>'+
                    '</div>'+
                    '<button class="list__block__btn">посмотреть смету</button>'+
                '</div>',
            '<div class="list__block">'+
                '<div class="list__block__title">Монтаж водоснабжения</div>'+
                '<img src="assets/img/list/img3.png" alt="фото" class="list__block__img">'+
                '<span class="list__block__square">до 300 м²</span>'+
                '<span class="list__block__place">Коттедж</span>'+
                '<div class="list__block__cost">'+
                    '<div class="list__block__cost__info">'+
                        '<span class="list__block__cost__text">Работа</span>'+
                        '<span class="list__block__cost__num"><span>от</span> 185 000 &#8381;</span>'+
                    '</div>'+
                    '<div  class="list__block__cost__info">'+
                        '<span class="list__block__cost__text">Материалы</span>'+
                        '<span class="list__block__cost__num"><span>от</span> 205 000 &#8381;</span>'+
                    '</div>'+
                '</div>'+
                '<div class="list__block__key">'+
                    '<span class="list__block__key__text">под ключ</span>'+
                    '<span class="list__block__key__num"><span>от</span> 124 000 &#8381;</span>'+
                '</div>'+
                '<button class="list__block__btn">посмотреть смету</button>'+
            '</div>',
            '<div class="list__block">'+
                    '<div class="list__block__title">Монтаж водоснабжения</div>'+
                    '<img src="assets/img/list/img4.png" alt="фото" class="list__block__img">'+
                    '<span class="list__block__square">до 450 м²</span>'+
                    '<span class="list__block__place">Коттедж</span>'+
                    '<div class="list__block__cost">'+
                        '<div class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Работа</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 185 000 &#8381;</span>'+
                        '</div>'+
                        '<div  class="list__block__cost__info">'+
                            '<span class="list__block__cost__text">Материалы</span>'+
                            '<span class="list__block__cost__num"><span>от</span> 205 000 &#8381;</span>'+
                        '</div>'+
                    '</div>'+
                    '<div class="list__block__key">'+
                        '<span class="list__block__key__text">под ключ</span>'+
                        '<span class="list__block__key__num"><span>от</span> 124 000 &#8381;</span>'+
                    '</div>'+
                    '<button class="list__block__btn">посмотреть смету</button>'+
                '</div>'];

$('.list__more').click(function(){
        if (count >= 4) {
            var string = '';
            for (var i = 0; i < 4; i++){
                string += str[i];
            }
            $('.list__exmpls').append(string);
            count -= 4;
        }
        else {
            var string = '';
            for (var i = 0; i < count; i++){
                string += str[i];
            }
            $('.list__exmpls').append(string);
            count = 0;
            $('.btn').css('display', 'none');
        }
    });
    if ($(window).width() > 768){
        $('.list__more').trigger('click');
    }
});