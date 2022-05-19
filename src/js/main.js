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

// modalVideo
