import $ from "jquery";

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
