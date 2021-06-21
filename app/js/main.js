$(function () {
  $(".icon-search").mouseover(function () {
    $(".header__menu-inner").hide();
    $(".header__search").show();
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
    responsive: [
      {
        breakpoint: 906,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 687,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 463,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
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
    responsive: [
      {
        breakpoint: 906,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".brands__slider").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 906,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 687,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 609,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 370,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 1000,
  });
  $(".category__slider-items").slick({
    slidesPerRow: 1,
    slidesToShow: 1,
    rows: 4,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    appendArrows: $(".popular__slider-arrows"),
    prevArrow:
      '<button class="slick-arrow slick-prew"><span class="icon-long-arrow-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-long-arrow-right"></span></button>',
  });
  $(".icon-list").on("click", function () {
    $(".switch .product").addClass("list");
    $(".icon-list").addClass("active");
    $(".icon-th").removeClass("active");
  });
  $(".icon-th").on("click", function () {
    $(".switch .product").removeClass("list");
    $(".icon-list").removeClass("active");
    $(".icon-th").addClass("active");
  });

  $(".header__account-btn").on("click", function () {
    $(".header__account").slideToggle();
  });
  $(".header__menu-btn").on("click", function () {
    $(".header__menu .menu").animate(
      {
        left: "0px",
      },
      200
    );
  });

  $(document).on("click", function (e) {
    if (!$(e.target).closest(".header__menu-nav").length) {
      $(".header__menu .menu").animate(
        {
          left: "-200px",
        },
        200
      );
    }
  });

  $(".menu__item-furniture .menu__link").on("click", function () {
    $(".dropdown__furniture").slideToggle();
  });
  $(".dropdown__title-slideone").on("click", function () {
    $(".dropdown__wrapp-slideone").slideToggle();
  });
  $(".dropdown__title-slidetwo").on("click", function () {
    $(".dropdown__wrapp-slidetwo").slideToggle();
  });
  $(".dropdown__title-slidethree").on("click", function () {
    $(".dropdown__wrapp-slidethree").slideToggle();
  });
  $(".dropdown__title-slidefour").on("click", function () {
    $(".dropdown__wrapp-slidefour").slideToggle();
  });
  $(".menu__item-bedroom .menu__link").on("click", function () {
    $(".dropdown__bedroom").slideToggle();
  });

  $(".product-one__for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".product-one__nav",
  });
  $(".product-one__nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".product-one__for",
    focusOnSelect: true,
    prevArrow:
      '<button class="slick-arrow slick-prew"><span class="icon-long-arrow-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-long-arrow-right"></span></button>',
  });

  $(".product-one__rate").rateYo({
    rating: 4.4,
    starWidth: "16px",
    readOnly: true,
    spacing: "2px",
  });

  $(".down").on("click", function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".up").on("click", function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  $(".product-one__content-bottom .tab").on("click", function (event) {
    var id = $(this).attr("data-id");
    $(".product-one__content-bottom")
      .find(".tab-item")
      .removeClass("active-tab")
      .hide();
    $(".product-one__content-bottom .tabs").find(".tab").removeClass("active");
    $(this).addClass("active");
    $("#" + id)
      .addClass("active-tab")
      .fadeIn();
    return false;
  });

  $(".tab-item__rate").rateYo({
    starWidth: "16px",
    spacing: "2px",
  });

  $(".related-product__slider-items").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    arrows: true,
    dots: false,
    appendArrows: $(".related-product__slider-arrows"),
    prevArrow:
      '<button class="slick-arrow slick-prew"><span class="icon-long-arrow-left"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-long-arrow-right"></span></button>',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
        {
          breakpoint: 775,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        }
    ],
  });

  $(".shopping-cart__text-address").on("click", function () {
    $(".shopping-cart__address").slideToggle();
  });

  $(".checkout__link-btn--login").on("click", function () {
    $(".checkout__login").slideToggle();
  });
  $(".checkout__link-btn--code").on("click", function () {
    $(".checkout__coupon").slideToggle();
  });
  $(".checkout__link-btn--password").on("click", function () {
    $(".checkout__password").slideToggle();
  });

  $(".furniture__filter-category .furniture__filter--btn").on(
    "click",
    function () {
      if ($(".furniture__filter-menu").css("display") == "none") {
        $(".furniture__filter-menu").slideToggle(200, function () {
          $(".furniture__filter-menu").css("display", "flex");
        });
      } else {
        $(".furniture__filter-menu").slideToggle(300, function () {
          $(".furniture__filter-menu").css("display", "none");
        });
      }
    }
  );

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
});
