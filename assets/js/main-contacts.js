$(document).ready(function () {

var center_x = 54.987875;
var center_y = 82.912956;

var spinner = $('.ymap-container').children('.loader');
    var check_if_load = 0;
    var myMapTemp, myPlacemarkTemp;    
    
    function init () {
        var myMapTemp = new ymaps.Map("map-yandex", {
            center: [center_x, center_y],
            zoom: 15,
            controls: ['zoomControl', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        });
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        );
        var myPlacemarkTemp = new ymaps.Placemark([center_x, center_y], {
            balloonContent: "Здесь может быть ваш адрес",
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../assets/img/map.png',
            // Размеры метки.
            iconImageSize: [100, 110],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38],
        });
        
        myMapTemp.geoObjects.add(myPlacemarkTemp);       
         myMapTemp.behaviors.disable('scrollZoom');
        
        //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
        var layer = myMapTemp.layers.get(0).get(0);
        
        //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
        waitForTilesLoad(layer).then(function() {
            //Скрываем
            spinner.removeClass('is-active');
        });
    }
    
    function waitForTilesLoad(layer) {
        return new ymaps.vow.Promise(function (resolve, reject) {
            var tc = getTileContainer(layer), readyAll = true;
            tc.tiles.each(function (tile, number) {
                if (!tile.isReady()) {
                    readyAll = false;
                }
            });
            if (readyAll) {
                resolve();
            } else {
                tc.events.once("ready", function() {
                    resolve();
                });
            }
        });
    }
    
    function getTileContainer(layer) {
        for (var k in layer) {
            if (layer.hasOwnProperty(k)) {
                if (
                    layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
                    || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
                    ) {
                        return layer[k];
                    }
                }
            }
            return null;
        }
        
        function loadScript(url, callback){
            
            var script = document.createElement("script");
            
            if (script.readyState){  //IE
                script.onreadystatechange = function(){
                    if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                        script.onreadystatechange = null;
                        callback();
                    }
                };
            } else {  //Другие браузеры
                script.onload = function(){
                    callback();
                };
            }
            
            script.src = url;
            document.getElementsByTagName("head")[0].appendChild(script);
        }
        
        var ymap = function() {
            $('.ymap-container').mouseenter(function(){
                if (check_if_load == 0) {
                    check_if_load = 1;
                    
                    spinner.addClass('is-active');
                    
                    loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
                        ymaps.load(init);
                    });         
                    
                }
            }
            );  
        }
        
        $(function() {            
            //Map Yandex
            ymap();            
        });
    });