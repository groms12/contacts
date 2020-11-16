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
                                    '<a href="#" class="guide__objects__object__description__link guide__objects__object__description__link--'+k+'">Читать подробнее</a>'+
                                '</div>'+
                            '</div>'+
                            '<img src="assets/img/guide/object.png" class="guide__objects__object__img">'+
                        '</div>'+
                        '<div class="description description--nonactive description--'+k+'">'+
                            '<div class="description__txt">'+
                                '<img align="left" src="assets/img/guide/details.png" alt="" class="description__img">'+
                                '<img src="assets/img/guide/big-details.png" alt="" class="description__img__big">'+
                                '<span class="description__text">'+
                                    'Выпускаемые ныне напольные газовые котлы безопасны для пользователя. Они изготавливаются из чугуна и стали. Их КПД достигает 90%, они обеспечены автоматическим управлением.<br><br>'+
                                    'Ограничением в использовании является требование недопустимости его остывания ниже 55°С, поскольку такие котлы рассчитаны на график 90/70 (температуры «подачи» и «обратки» соответственно), и при работе их на температурах, ниже указанных, происходит процесс коррозии чугунного теплообменника.<br><br>'+
                                    'Поэтому для создания условий работы, соответствующей требованиям производителей, а также расширения диапазона температур подачи, в отопительную систему встраиваются устройства для смешивания ( насосы, узлы). <br><br>'+
                                    'Изменение мощности этих котлов допускается в «вилке» от 70 до 100% от максимума при наличии устройства плавной модуляции. Одноступенчатая модуляция мощности позволяет установить выключение котла при достижении требуемой температуры. Промежуточный же вариант между двумя описанными выше вариантами модуляций — двухступенчатая, где первая — максимум мощности, вторая — 70% от него.<br><br>'+
            'Напольные газовые котлы производятся обычно с механизмом свободного вывода продуктов сгорания в систему дымохода. Но в любом случае, даже в варианте «турбо», когда газы принудительно отбрасываются, необходимо обеспечить дымоход из кирпича специальной устойчивой к кислоте вставкой из нержавеющего металла, поскольку сгорание хоть природного газа, хоть пропана приводит к образованию конденсата с содержанием кислот. Диаметр такой вставки указывается в технических документах и завит от его мощности.<br><br>'+
            'Для поступления воздуха в модификациях с открытой камерой сгорания должна быть предусмотрена отдушина. Приблизительная ее площадь в квадратных сантиметрах рассчитывается путем умножения мощности в кВт на десять.<br><br>'+
            'Для напольных газовых котлов большое значение имеет чистота теплоносителя, поскольку 1 мм отложений накипи в теплообменнике уменьшает КПД котла на 5-7%, из-за чего увеличится потребление газа при тех же выходных параметрах. Поэтому на подпитке необходима организация химводоподготовки.<br><br>'+
            'Основной же аргумент за такой котел — возможность работы без электричества. Такие модели выпускаются преимущественно в России, однако есть аналоги и у зарубежных производителей («Thermona», «Protherm»). Для таких котлов с пилотной горелкой требуется отопительная система, предусматривающая естественную циркуляцию. Необходима также установка сверху расширительного бака сверху. Однако, появившиеся в продаже источники бесперебойного питания укрепили позиции котлов с принудительной циркуляцией электронасосами.<br><br>'+
            'Следует также отметить необходимость соблюдения режима подпитки отопительной системы в соответствии с рекомендациями производителей, поскольку поступление слишком холодного теплоносителя в разогретый теплообменник из чугуна обычно приводит к выходу из строя последнего.<br><br>'+
            'Срок эксплуатации напольного газового котла, выпущенного добросовестным производителем, при выполнении всех перечисленных выше рекомендаций достигает 15-20 лет.'+
                                '</span>'+
                            '</div>'+
                            '<div class="description__links  description__links--'+k+'">'+
                                '<a href="#" class="description__link description__link__prev"><img  class="description__link description__link__prev__img" src="assets/img/arrow-left-blue.svg" alt=""><span>Предыдущая</span></a>'+
                                '<a href="#" class="description__link description__link__next"><span>Следующая</span> <img class="description__link description__link__next__img" src="assets/img/arrow-right.svg" alt=""></a>'+
                            '</div>'+
                        '</div>'
                        );
                        k++;
        }
        if (k >= 16) {
            $('.btn').css('display', 'none');
        }
    });

    $('body').on('click', '.guide__objects__object__description__link', function(e) {
        e.preventDefault();
        var text = $(this).attr('class');
        var num = text.split('--');
        $('.guide__objects__object').css('display', 'none');
        $('.btn').css('display', 'none');
        $('.guide__title').text('Особенности эксплуатации напольных газовых котлов');
        $('.guide__title').css('text-align', 'left');
        $('.description--'+num[1]+'').css('display', 'block');
        var destination = $('.biblioteka').offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
    });

    function roughScale(x, base) {
        const parsed = parseInt(x, base);
        if (isNaN(parsed)) { return 0; }
        return parsed;
    }  

    $('body').on('click', '.description__link__prev', function(e) {
        e.preventDefault();
        var parent = $(this).parent().attr('class');
        var num = parent.split('--');
        var k = roughScale(num[1], '10');
        if (num[1] != 1){
            $('.description--'+num[1]+'').css('display', 'none');
            $('.description--'+(k - 1)+'').css('display', 'block'); 
        }
        var destination = $('.biblioteka').offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
    });

    $('body').on('click', '.description__link__next', function(e) {
        e.preventDefault();
        var parent = $(this).parent().attr('class');
        var num = parent.split('--');
        var kn = roughScale(num[1], '10');
        if (num[1] != k-1){
            $('.description--'+num[1]+'').css('display', 'none');
            $('.description--'+(kn + 1)+'').css('display', 'block'); 
        }
        var destination = $('.biblioteka').offset().top;
        $('html, body').animate({ scrollTop: destination }, 600);
    });
    
});
