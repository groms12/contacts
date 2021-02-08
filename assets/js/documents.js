$(document).ready(function () {

    $('.btn').click(function(){
        if ($(window).width() > 800) {
            $('.documents__files').append(
                '<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Обработка материалов</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на формовку</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Презентация новой продукции'+
				'		для заказчиков 2020</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">ДСДШУР - 230006</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на обкатку</p>'+
				'</a>'
            );
        }
        if (($(window).width() > 600) && ($(window).width() <= 800)) {
            $('.documents__files').append(
                '<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Обработка материалов</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на формовку</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Презентация новой продукции'+
				'		для заказчиков 2020</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на обкатку</p>'+
				'</a>'
            );
        }
        if (($(window).width() > 430) && (($(window).width() <= 600)) ) {
            $('.documents__files').append(
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на формовку</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Презентация новой продукции'+
				'		для заказчиков 2020</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на обкатку</p>'+
				'</a>'
            );
        }
        if (($(window).width() <= 430)) {
            $('.documents__files').append(
                '<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Обработка материалов</p>'+
				'</a>'+
				'<a class="documents__files__file">'+
				'	<img src="/assets/img/file.png" alt="" class="documents__files__file__img">'+
				'	<p class="documents__files__file__text">Документы для подачи'+
				'		заявки на обкатку</p>'+
				'</a>'
            );
        }
    });

    $('.btn').trigger('click');  
    $('.btn').trigger('click');  

    if (($(window).width() <= 430)) {
        $('.btn').trigger('click');  
    }
});