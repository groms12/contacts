$(document).ready(function () {

    var n = 4;
    var k = n + 1;
     
    $('.guide__btn').click(function() {
        for (var i = 1; i <= n; i++) {
            $('.guide__objects').append('<div class="guide__objects__object guide__objects__object--'+k+'">'+
                            '<div class="guide__objects__object__description">'+
                                '<div class="guide__objects__object__description__name">Особенности эксплуатации напольных газовых котлов</div>'+
                                '<span class="guide__objects__object__description__text">Выпускаемые ныне напольные газовые котлы безопасны для пользователя.</span>'+
                                '<div>'+
                                    '<span class="guide__objects__object__description__date">14.07.2014</span>'+
                                    '<a href="#" class="guide__objects__object__description__link">Читать подробнее</a>'+
                                '</div>'+
                            '</div>'+
                            '<img src="assets/img/guide/object.png" class="guide__objects__object__img">'+
                        '</div>');
                        k++;
        }
        if (k >= 16) {
            $('.btn').css('display', 'none');
        }
    });

    $('.guide__objects__object__description__link').click(function(e) {
        e.preventDefault();
        $('.guide').css('display', 'none');
        $('.description').css('display', 'block');
    });
    
});
