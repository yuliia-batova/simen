$(function () {
  $(".icon-search").mouseover(function () {
    $(".header__menu-inner").hide("slow", function () {
      $(".header__search").show();
    });
  });
  $(".header__search").mouseout(function () {
    $(".header__search").hide("slow", function () {
      $(".header__menu-inner").show();
    });
  });
  $(".intro__slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  });

  var mixer = mixitup(".latest__products", {
    load: {
      filter: ".category-latest",
    },
    animation: {
      easing: "ease-in-out",
    },
  });

});
