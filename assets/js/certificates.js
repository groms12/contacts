$(document).ready(function () {

    var n = 3;

    if ($(window).width() > 768)
        n = 4;
     
    $('.cert').click(function() {
        for (var i = 1; i <= n; i++) {
            $('.certificates__images').append('<img src="assets/img/certificates/img'+i+'.png" alt="" class="certificates__images__photo">')
        }
    });

    $(".certificates__images").on('click', '.certificates__images__photo', function(){	
        if ($(window).width() > 360){
		var src = $(this).attr('src'); // Достаем из этого изображения путь до картинки
		$(".certificates__images").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						 "</div>"); 
		$(".popup").fadeIn(800); // Медленно выводим изображение
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(800);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
        });}
    });
    
    $('.cert').trigger('click');
    if ($(window).width() > 360) {
        $('.cert').trigger('click');
    }
});
