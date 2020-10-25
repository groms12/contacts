$(document).ready(function () {

  if($(".input__phone").length>0) {
    $(".input__phone").mask("+7 (999) 999-99-99");
  }

  // panel menu open/close
  $(".pannel__item__wrapper").on("click", function (e) {
    var id = $(this).attr("id");
    $(".pannel__item__wrapper:not(#"+id+")").removeClass("active");
    if(e.target.nodeName != "A") {
      $(this).toggleClass("active");
    }
  });

  // Close tablet menu
  $(".subheader__burger__hidden").on("click", function () {
    $(".subheader__nav__hidden").removeClass("active");
    $(".subheader__burger").removeClass("active");
    $("html").removeClass("overflow");
  });

  // Burger menu open/close
  $(".subheader__burger").on("click", function () {
    $(".subheader__nav__hidden").toggleClass("active");
    $(".subheader__burger").toggleClass("active");
    $("html").toggleClass("overflow");
  });

  $(document).mouseup(function (e){
    var div = $(".subheader__nav__hidden"), burger = $(".subheader__burger"),
        panel_wrapper = $(".pannel__item__wrapper"), panel_subitem = $(".pannel__subitems li a");
    if (!div.is(e.target) && div.has(e.target).length === 0 &&
        !burger.is(e.target) && burger.has(e.target).length === 0) {
      $(".subheader__nav__hidden").removeClass("active");
      $(".subheader__burger").removeClass("active");
      $("html").removeClass("overflow");
    }
    if (!panel_wrapper.is(e.target) && panel_wrapper.has(e.target).length === 0 &&
        !panel_subitem.is(e.target) && panel_subitem.has(e.target).length === 0) {
      $(".pannel__item__wrapper").removeClass("active");
    }
  });

  $("body").on("mouseenter", ".header__location__cont", function() {
    $(this).find("ul").slideDown("fast");
    $(this).addClass("sel");
  });
  $("body").on("mouseleave", ".header__location__cont", function() {
    $(this).find("ul").slideUp("fast");
    $(this).removeClass("sel");
  });

  // обработчик события resize
  $(window).resize(function () {
    if ($(window).width() <= "1199") {
      // Intro Slider
      $("#introSlider")
        .not(".slick-initialized")
        .slick({
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: $("#introNext"),
          prevArrow: $("#introPrev"),
        });
    }

    if ($(window).width() <= "767") {
    }
  });

  // вызовем событие resize
  $(window).resize();

  // Валидация формы
  function validateForm() {
    var username = document.forms["form"]["username"].value;
    var userphone = document.forms["form"]["userphone"].value;
    if (username.trim() == "" || userphone.trim() == "") {
      return false;
    }
  }
});
