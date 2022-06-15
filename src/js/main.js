import $ from "jquery";

import "slick-slider";
import "jquery-modal";
import { Fancybox } from "@fancyapps/ui";

import "../scss/main.scss";
import "../index.html";

// burger
function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger");
  let links = menu.find(".header__link");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("headerMenu-visible");
  }
}

burgerMenu(".header__menu");

// slider
$(".stock__slider").slick({
  dots: true,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// doctors
$(".doctors__slider").slick({
  focusOnSelect: true,
  slidesToShow: 6,
  vertical: true,
  asNavFor: ".doctors__slider__big",
});

$(".doctors__slider__big").slick({
  fade: true,
  speed: 500,
  asNavFor: ".doctors__slider",
});

// testimonyals;
$(".testimonyals__slider").slick({
  slidesToShow: 2,
  dots: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// achievements__slider
$(".achievements__slider").slick({
  arrows: true,
  slidesToShow: 4,
  dots: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

//about
$(".about__block__slider").slick({
  slidesToShow: 1,
  arrows: false,
  fade: true,
  asNavFor: ".about__slider",
});

$(".about__slider").slick({
  slidesToShow: 4,
  dots: true,
  asNavFor: ".about__block__slider",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

// map

function initMap() {
  let uluru = { lat: 55.1076233320669, lng: 38.74410715096147 };
  let myMap = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: uluru,
  });

  let marker = new google.maps.Marker({
    position: uluru,
    map: myMap,
  });
}

window.initMap = initMap;

// footerBurger
function footerBurgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".footer__burger");
  let links = menu.find(".footer__link");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("footerMenu-visible");
  }
}

footerBurgerMenu(".footer__menu");
