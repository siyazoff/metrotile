document.addEventListener("DOMContentLoaded", function () {
  const headerBurger = document.querySelector(".header__burger");
  const popup = document.querySelector(".popup");
  const header = document.querySelector("#header");
  const headerBox = document.querySelector(".header__box");

  headerBurger.addEventListener("click", toggleActiveClass);
  window.addEventListener("scroll", handleScroll);

  function toggleActiveClass() {
    this.classList.toggle("is_active");
    popup.classList.toggle("is_active");
  }

  let prevScrollPos = window.scrollY;

  function handleScroll() {
    const currentScrollPos = window.scrollY;
    const isMobile = window.innerWidth <= 768;

    adjustHeaderStyles(currentScrollPos, isMobile);

    if (currentScrollPos > prevScrollPos) {
      removeActiveClasses();
    }

    prevScrollPos = currentScrollPos;
  }

  function adjustHeaderStyles(scrollPos, isMobile) {
    if (scrollPos === 0) {
      setInitialStyles(isMobile);
    } else {
      setScrolledStyles(isMobile);
    }
  }

  function setInitialStyles(isMobile) {
    header.style.top = isMobile ? "0px" : "14px";
    if (!isMobile) {
      header.style.background = "transparent";
      headerBox.style.maxWidth = "1290px";
      headerBox.style.borderRadius = "20px";
    }
  }

  function setScrolledStyles(isMobile) {
    if (!isMobile) {
      header.style.background = "white";
      headerBox.style.borderRadius = "0";
      header.style.top = "0px";
      headerBox.style.maxWidth = "100%";
    }
  }

  function removeActiveClasses() {
    headerBurger.classList.remove("is_active");
    popup.classList.remove("is_active");
    header.classList.remove("active");
    document
      .querySelectorAll(".burger")
      .forEach((burger) => burger.classList.remove("active"));
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
        if (window.innerWidth >= 768) {
          if (window.scrollY >= 2891) {
            element.style.backgroundAttachment = "unset";
            element.style.backgroundPosition = "46.5% 50%";
          } else {
            element.style.backgroundAttachment = "fixed";
            element.style.backgroundPosition = "47% 50%";
          }
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

  if (window.location.pathname.includes("catalog")) {
    const shopping_cart = document.querySelector(".widget_cart");
    const cart_btns = document.querySelectorAll(".catalog-item__add-cart");

    cart_btns.forEach((cart_btn) => {
      cart_btn.onclick = (e) => {
        shopping_cart.classList.add("active");

        let product_count =
          Number(shopping_cart.getAttribute("data-product-count")) || 0;
        shopping_cart.setAttribute("data-product-count", product_count + 1);

        // finding first grand parent of target button

        let target_parent = e.target.closest(".catalog-item");
        console.log(target_parent);

        target_parent.style.zIndex = "100";
        // Creating separate Image
        let img = target_parent.querySelector("img");
        let flying_img = img.cloneNode();
        flying_img.classList.add("flying-img");

        target_parent.appendChild(flying_img);

        // Finding position of flying image

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
          left:
            shopping_cart_pos.left -
            (shopping_cart_pos.width / 2 +
              flying_img_pos.left +
              flying_img_pos.width / 2),
          top: shopping_cart_pos.bottom - flying_img_pos.bottom + 65,
        };

        console.log(data.top);

        flying_img.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;

        setTimeout(() => {
          target_parent.style.zIndex = "";
          target_parent.removeChild(flying_img);
          shopping_cart.classList.remove("active");
        }, 990);
      };
    });
  }

  if (window.location.pathname.includes("single")) {
    const shopping_cart = document.querySelector(".widget_cart");
    const cart_btns = document.querySelectorAll(
      ".section-product__add-to-card"
    );

    cart_btns.forEach((cart_btn) => {
      cart_btn.onclick = (e) => {
        shopping_cart.classList.add("active");

        let product_count =
          Number(shopping_cart.getAttribute("data-product-count")) || 0;
        shopping_cart.setAttribute("data-product-count", product_count + 1);

        // finding first grand parent of target button

        let target_parent = e.target
          .closest(".section-product__box")
          .querySelector(".section-product__left");
        console.log(target_parent);

        target_parent.style.zIndex = "100";
        // Creating separate Image
        let img = target_parent.querySelector("img");
        let flying_img = img.cloneNode();
        flying_img.classList.add("flying-img-single");

        target_parent.appendChild(flying_img);

        // Finding position of flying image

        const flying_img_pos = flying_img.getBoundingClientRect();
        const shopping_cart_pos = shopping_cart.getBoundingClientRect();

        let data = {
          left:
            shopping_cart_pos.left -
            (shopping_cart_pos.width / 2 +
              flying_img_pos.left +
              flying_img_pos.width / 2),
          top: shopping_cart_pos.bottom - flying_img_pos.bottom + 140,
        };

        console.log(data.top);

        flying_img.style.cssText = `
                                --left : ${data.left.toFixed(2)}px;
                                --top : ${data.top.toFixed(2)}px;
                                `;

        setTimeout(() => {
          target_parent.style.zIndex = "";
          target_parent.removeChild(flying_img);
          shopping_cart.classList.remove("active");
        }, 990);
      };
    });
  }

  // Функция для добавления обработчиков открытия и закрытия модалок
  function setupModalTriggers(openButtons, modalElements, closeButtonSelector) {
    openButtons.forEach((button) => {
      button.addEventListener("click", function (event) {
        event.preventDefault();
        modalElements.forEach((modal) => {
          modal.classList.add("is_active");
        });
      });
    });

    modalElements.forEach((modal) => {
      const close = modal.querySelector(closeButtonSelector);
      close.addEventListener("click", function () {
        modal.classList.remove("is_active");
      });
    });
  }

  // Инициализация модалок
  const modalCallers = document.querySelectorAll(".modal-form__caller");
  const modals = document.querySelectorAll(".modal-main");
  setupModalTriggers(modalCallers, modals, ".modal-form__close-btn");

  const modalThxCallers = document.querySelectorAll(".modal-form-thx__caller");
  const modalThxs = document.querySelectorAll(".modal-thx");
  setupModalTriggers(modalThxCallers, modalThxs, ".modal-form-thx__close-btn");

  document.addEventListener("click", function (event) {
    if (
      !event.target.closest(
        ".modal-form, .modal-form__caller, .modal-form-thx__caller "
      )
    ) {
      document.querySelectorAll(".modal").forEach(function (modal) {
        modal.classList.remove("is_active");
      });
    }
  });
});
