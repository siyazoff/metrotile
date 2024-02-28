document.addEventListener("DOMContentLoaded", function () {
  const headerBurger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");

  headerBurger.addEventListener("click", addActiveClass);

  function addActiveClass() {
    this.classList.toggle("is_active");
    popup.classList.toggle("is_active");
  }

  let prevScrollPos = window.scrollY;
  const header = document.querySelector("#header");
  const headerBox = document.querySelector(".header__box");

  window.addEventListener("scroll", function () {
    const currentScrollPos = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    if (currentScrollPos === 0) {
      header.style.top = isMobile ? "0px" : "14px";
      if (!isMobile) {
        header.style.background = "transparent";
        headerBox.style.maxWidth = "1290px";
        headerBox.style.borderRadius = "20px";
      }
    } else {
      header.style.top = prevScrollPos > currentScrollPos ? "0" : "-150px";
      headerBox.style.maxWidth =
        prevScrollPos > currentScrollPos ? "100%" : "1290px";
      if (!isMobile) {
        header.style.background = "white";
        headerBox.style.borderRadius =
          prevScrollPos > currentScrollPos ? "0" : "20px";
      }
    }

    if (currentScrollPos > prevScrollPos) {
      headerBurger.classList.remove("is_active");
      popup.classList.remove("is_active");
    }

    header.classList.remove("active");
    document
      .querySelectorAll(".burger")
      .forEach((burger) => burger.classList.remove("active"));

    prevScrollPos = currentScrollPos;
  });

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

  if (window.location.pathname.includes("single")) {
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
  }

  if (window.location.pathname.includes("about-2")) {
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
  }

  if (window.location.pathname.includes("location")) {
    let currentActiveCityClass = null;
    let allCities = document.querySelectorAll(".city");
    let allCitiesContent = document.querySelectorAll("[data-city]");
    document
      .querySelectorAll('[data-city="astana"]')
      .forEach(function (element) {
        element.classList.add("active");
      });
    document.querySelectorAll(".city-astana").forEach(function (element) {
      element.classList.add("active");
    });

    allCities.forEach(function (cityElement) {
      cityElement.addEventListener("click", function () {
        let classes = this.getAttribute("class").split(" ");
        let cityClass = classes.find((cls) => cls.startsWith("city-"));
        let city = cityClass.split("-")[1];
        document.querySelectorAll(".city-astana").forEach(function (element) {
          element.classList.remove("active");
        });

        if (currentActiveCityClass && currentActiveCityClass !== cityClass) {
          document
            .querySelectorAll("." + currentActiveCityClass)
            .forEach(function (element) {
              element.classList.remove("active");
            });
        }

        document.querySelectorAll("." + cityClass).forEach(function (element) {
          element.classList.toggle("active");
        });

        allCitiesContent.forEach(function (content) {
          content.classList.remove("active");
        });

        document
          .querySelectorAll(`[data-city="${city}"]`)
          .forEach(function (content) {
            content.classList.add("active");
          });

        currentActiveCityClass = cityClass;
      });
    });
  }
  if (window.location.pathname.includes("cart")) {
    const forms = document.querySelectorAll(".cart-item__form-quantity");

    forms.forEach((form) => {
      const inputCounter = form.querySelector("input[type='number']");
      const minusButton = form.querySelector(".cart-item__minus");
      const plusButton = form.querySelector(".cart-item__plus");

      minusButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (inputCounter.value > inputCounter.min) {
          inputCounter.value--;
        }
      });

      plusButton.addEventListener("click", function (event) {
        event.preventDefault();
        if (inputCounter.value < inputCounter.max || !inputCounter.max) {
          inputCounter.value++;
        }
      });
    });
  }
});
