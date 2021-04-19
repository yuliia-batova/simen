$(function () {
  $(".icon-search").mouseover(function () {
    $(".header__menu-inner").hide();
    $(".header__search").show();
  });
  $(".header__search").mouseout(function () {
    $(".header__search").hide();
    $(".header__menu-inner").show();
  }); 
  $(".header__search").mouseout(function () {
    $(".header__search").hide();
    $(".header__menu-inner").show();
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
    selectors: {
      control: ".latest__btn",
    },
    animation: {
      easing: "ease-in-out",
    },
  });

  var mixitUp = mixitup(".suggest__products", {
    load: {
      filter: ".category-officeChair",
    },
    selectors: {
      control: ".suggest__btn",
    },
    animation: {
      easing: "ease-in-out",
    },
  });

  $(".popular__slider-items").slick({
    slidesToShow: 4,
    rows: 2,
    slidesToScroll: 8,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    appendArrows: $(".popular__slider-arrows"),
    prevArrow:
      '<button class="slick-arrow slick-prew"><span class="icon-long-arrow-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-long-arrow-right"></span></button>',
  });
  $(".posts__slider-items").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    appendArrows: $(".posts__slider-arrows"),
    prevArrow:
      '<button class="slick-arrow slick-prew"><span class="icon-long-arrow-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-long-arrow-right"></span></button>',
  });
  $(".brands__slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});
