document.addEventListener("DOMContentLoaded", function () {
  const headerBurger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");

  headerBurger.addEventListener("click", addActiveClass);

  function addActiveClass() {
    this.classList.toggle("is_active");
    popup.classList.toggle("is_active");
  }
});
