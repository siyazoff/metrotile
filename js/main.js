document.addEventListener("DOMContentLoaded", function () {
  const headerBurger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");

  headerBurger.addEventListener("click", addActiveClass);

  function addActiveClass() {
    this.classList.toggle("is_active");
    popup.classList.toggle("is_active");
  }

  const faq = document.querySelectorAll(".faq");

  faq.forEach((el) => {
    el.addEventListener("click", function () {
      this.classList.toggle("active");
      let faqBody = this.querySelector(".faq__body");
      if (faqBody.style.maxHeight) {
        faqBody.style.maxHeight = null;
      } else {
        faqBody.style.maxHeight = faqBody.scrollHeight + "px";
      }
    });
  });

  const inputProductCounter = document.querySelector("input.input-counter");
  const minusButtonProduc = document.querySelector(".minus-product");
  const plusButtonProduc = document.querySelector(".plus-product");

  minusButtonProduc.addEventListener("click", function () {
    if (inputProductCounter.value > inputProductCounter.min) {
      inputProductCounter.value--;
    }
  });

  plusButtonProduc.addEventListener("click", function () {
    if (
      inputProductCounter.value < inputProductCounter.max ||
      !inputProductCounter.max
    ) {
      inputProductCounter.value++;
    }
  });
});

window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".background-change");
  elements.forEach(function (element) {
    if (window.scrollY >= 2891) {
      element.style.backgroundAttachment = "unset";
      element.style.backgroundPosition = "46.5% 50%";
    } else {
      element.style.backgroundAttachment = "fixed";
      element.style.backgroundPosition = "47% 50%";
    }
  });
});
