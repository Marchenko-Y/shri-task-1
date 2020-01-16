"use strict";
const onoffswitch_click_handler = function(e) {
  e.target.classList.toggle("onoffswitch_checked");
  const defaultThemeItems = document.querySelectorAll(
    ".theme_color_project-default"
  );
  const inverseThemeItems = document.querySelectorAll(
    ".theme_color_project-inverse"
  );
  for (let item of defaultThemeItems) {
    item.classList.add("theme_color_project-inverse");
    item.classList.remove("theme_color_project-default");
  }

  for (let item of inverseThemeItems) {
    item.classList.add("theme_color_project-default");
    item.classList.remove("theme_color_project-inverse");
  }
};
const onoffswitchDOMElement = document.querySelector(".onoffswitch");
onoffswitchDOMElement.addEventListener("click", onoffswitch_click_handler);
