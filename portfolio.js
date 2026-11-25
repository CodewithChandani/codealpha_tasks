const themeButton = document.querySelector("#theme-toggle");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeButton.textContent = "Dark mode";
  } else {
    themeButton.textContent = "Light mode";
  }
});
