$(document).ready(function () {
  //Смена темы
  $(".theme-block").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $("body").toggleClass("light");
  });

  //Выпадашка подсказок для поиска
  let $searchInput = $(".search-form__input");
  $searchInput.focusin(function () {
    $searchInput.siblings(".prompt-list").show();
  });
  $searchInput.focusout(function () {
    setTimeout(function () {
      $searchInput.siblings(".prompt-list").hide();
    }, 300);
  });

  //Акктордеон ответов на вопросы
  $(".faq-accordeon__link").click(function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).siblings(".faq-accordeon__content").slideToggle();
  });

  //Подключаем слайдер на главной с баннерами
  $(".slider-banner").on("init", function (event, slick) {
    $(this).css("visibility", "visible");
  });

  if ($(".slider-banner").length > 0) {
    $(".slider-banner").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      speed: 1000,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
    });
  }

  //Языковый селект
  if ($(window).width() < 992) {
    $(".header .labguage-block").remove();
  }
  const select = document.querySelector(".language-select-list");
  const baseUrl = "../img";

  function formatState(state) {
    if (!state.id) {
      return state.text;
    }

    const currentState = document.createElement("span");
    currentState.classList.add("selected-element");
    currentState.innerHTML =
      '<img width="20" height="20" class="selection-flag" /> <span class="selection-text"></span>';

    // Use .text() instead of HTML string concatenation to avoid script injection issues
    currentState.querySelector(".selection-text").textContent = state.text;
    currentState
      .querySelector(".selection-flag")
      .setAttribute("src", baseUrl + "/" + state.element.value + ".svg");

    return currentState;
  }

  function formatCountry(country) {
    if (!country.id) {
      return country.text;
    }

    const currentState = document.createElement("span");
    changedCountry = document.createElement("span");
    changedCountry.classList.add("selected-element");
    changedCountry.innerHTML =
      '<img width="20" height="20" class="selection-flag" /> <span class="selection-text"></span>';

    changedCountry.querySelector(".selection-text").textContent = country.text;
    changedCountry
      .querySelector(".selection-flag")
      .setAttribute("src", baseUrl + "/" + country.element.value + ".svg");
    return changedCountry;
  }
  const select2 = new TsSelect2(select, {
    templateSelection: formatState,
    templateResult: formatCountry,
    minimumResultsForSearch: Infinity,
    width: `87px`,
  });

  //Открываем меню
  $(".open-menu").click(function (e) {
    e.preventDefault();
    $(".sidebar-wrp").addClass("visible");
    $(".basic-section-wrp").addClass("swipe");
    $(".header").addClass("hide-header");
  });

  //Закрываем меню
  $(".close-menu").click(function (e) {
    e.preventDefault();
    $(".sidebar-wrp").removeClass("visible");
    $(".basic-section-wrp").removeClass("swipe");
    $(".header").removeClass("hide-header");
  });

  //Загрузка картинки в форму
  $(".upload-actions__input").change(function () {
    let $uploadInput = $(this);
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $uploadInput
          .closest(".upload-image")
          .find(".upload-image__image")
          .attr("src", e.target.result);
        $(".upload-actions__remove-image").removeClass("disabled");
      };
      reader.readAsDataURL(this.files[0]);
    }
  });

  $(".upload-actions__remove-image").click(function (e) {
    e.preventDefault();
    $(this).addClass("disabled");
    $(this)
      .closest(".upload-image")
      .find(".upload-image__image")
      .attr("src", "");
  });

  $(".modal").on("shown.bs.modal", function () {
    $(".sidebar-wrp").removeClass("visible");
    $(".basic-section-wrp").removeClass("swipe");
    $(".header").removeClass("hide-header");
  });

  //Уведомления в шапке
  $(".header-actions__notifications").click(function (e) {
    e.preventDefault();
    let $notificationHeader = $(this);
    if ($notificationHeader.hasClass("visible")) {
      $notificationHeader.removeClass("visible");
      $notificationHeader.siblings(".header-notifications-block").fadeOut();
    } else {
      $notificationHeader.addClass("visible");
      $notificationHeader.siblings(".header-notifications-block").fadeIn();
    }
  });

  $(document).mouseup(function (e) {
    var notificationDiv = $(".header-notifications");
    if (
      !notificationDiv.is(e.target) &&
      notificationDiv.has(e.target).length === 0
    ) {
      $(".header-notifications-block").fadeOut();
      $(".header-actions__notifications").removeClass("visible");
    }
  });

  //Корзина в шапке
  $(".header-actions__bag").click(function (e) {
    e.preventDefault();
    let $bagHeader = $(this);
    if ($bagHeader.hasClass("visible")) {
      $bagHeader.removeClass("visible");
      $bagHeader.siblings(".header-bag-block").fadeOut();
    } else {
      $bagHeader.addClass("visible");
      $bagHeader.siblings(".header-bag-block").fadeIn();
    }
  });

  $(document).mouseup(function (e) {
    var bagDiv = $(".header-bag");
    if (!bagDiv.is(e.target) && bagDiv.has(e.target).length === 0) {
      $(".header-bag-block").fadeOut();
      $(".header-actions__bag").removeClass("visible");
    }
  });

  //Слайдер с продуктами (роботами)
  $(window).on("load resize orientationchange", function () {
    $(".robots-slider").each(function () {
      var $productSlider = $(this);
      var $status = $(".slide-counter");
      if ($(window).width() > 767) {
        if ($productSlider.hasClass("slick-initialized")) {
          $productSlider.slick("unslick");
        }
      } else {
        if (!$productSlider.hasClass("slick-initialized")) {
          $productSlider.on(
            "init reInit afterChange",
            function (event, slick, currentSlide, nextSlide) {
              $(this).css("visibility", "visible");
              var i = (currentSlide ? currentSlide : 0) + 1;
              $status.text(i + "  /  " + slick.slideCount);
            }
          );
          $productSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: $(".robot-slider-nav__prev"),
            nextArrow: $(".robot-slider-nav__next"),
          });
        }
      }
    });
  });

  //Добавления контента в модалку покупки или тестирования робота
  $(".robot-item__actions a").click(function (e) {
    e.preventDefault();
    let robotContent = $(this).closest(".robot-item").clone();
    $(".modal-robot-left").html(robotContent);
  });

  $(".buy-robot").click(function (e) {
    e.preventDefault();
    $(".buy-robot-form__head")
      .find(".modal-content-block__title.buy-title")
      .show();
    $(".buy-robot-actions").find(".add-to-basket").show();
  });

  $(".test-robot").click(function (e) {
    e.preventDefault();
    $(".buy-robot-form__head")
      .find(".modal-content-block__title.test-title")
      .show();
    $(".buy-robot-form__head").find(".buy-robot-form__test-descript").show();
    $(".buy-robot-actions").find(".send-request").show();
  });

  $("#modal-buy-robot").on("hide.bs.modal", function (event) {
    setTimeout(function () {
      $(".modal-content-block__title.buy-title").hide();
      $(".modal-content-block__title.test-title").hide();
      $(".buy-robot-form__test-descript").hide();
      $(".modal-robot-left").html("");
      $(".buy-robot-actions").find("button").hide();
    }, 300);
  });

  //Инициализируем стайлер для селектов
  if ($(".js-formstyller-style").length > 0) {
    setTimeout(function () {
      $(".js-formstyller-style").css("visibility", "visible");
    }, 500);
    $(".js-formstyller-style").styler();
  }

  //Слайдер с серверами
  $(window).on("load resize orientationchange", function () {
    $(".rent-server-slider").each(function () {
      var $serverSlider = $(this);
      var $status2 = $(".slide-counter");
      if ($(window).width() > 640) {
        if ($serverSlider.hasClass("slick-initialized")) {
          $serverSlider.slick("unslick");
        }
      } else {
        if (!$serverSlider.hasClass("slick-initialized")) {
          $serverSlider.on(
            "init reInit afterChange",
            function (event, slick, currentSlide, nextSlide) {
              $(this).css("visibility", "visible");
              var i = (currentSlide ? currentSlide : 0) + 1;
              $status2.text(i + "  /  " + slick.slideCount);
            }
          );
          $serverSlider.slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 700,
            arrows: true,
            dots: false,
            infinite: false,
            prevArrow: $(".robot-slider-nav__prev"),
            nextArrow: $(".robot-slider-nav__next"),
          });
        }
      }
    });
  });

  $("#modal-rent-server").on("shown.bs.modal", function () {
    $(".rent-server-slider").slick("setPosition");
    setTimeout(function () {
      $(".rent-server-slider-wrp").css("opacity", "1");
    }, 500);
  });

  //Подключаем карту
  if (typeof ymaps !== "undefined" && $("#map").length > 0) {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("map", {
        center: [55.79454991788003, 49.114893898151045],
        zoom: 16,
        controls: ["zoomControl"],
      });

      myMap.controls.add("fullscreenControl", {
        float: "left",
      });
      // Создаем геообъект с типом геометрии "Точка".
      myGeoObject = new ymaps.GeoObject();
      myMap.behaviors.disable("scrollZoom");
      myMap.geoObjects.add(
        new ymaps.Placemark(
          [55.79454991788003, 49.114893898151045],
          {
            //balloonContent: 'Ул. Юности, 8'
          },
          {
            // Опции.
            iconLayout: "default#image",
            iconImageHref: "../img/pin.svg",
            iconImageSize: [16, 16],
            iconImageOffset: [-15, -30],
          }
        )
      );
      myMap.controls.remove("geolocationControl");
      myMap.controls.remove("searchControl");
      myMap.controls.remove("trafficControl");
      myMap.controls.remove("typeSelector");
      myMap.controls.remove("fullscreenControl");
      myMap.controls.remove("rulerControl");
      myMap.behaviors.disable(["scrollZoom"]);
    }
  }
});
