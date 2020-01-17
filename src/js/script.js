document.addEventListener("click", function(e) {
  if (event.target.classList.contains("onoffswitch")) {
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
  }
});

document.addEventListener("click", function(e) {
  if (e.target.closest(".e-accordion__short")) {
    e.target
      .closest(".e-accordion__short")
      .nextElementSibling.classList.toggle("e-accordion__more");
  }
});
