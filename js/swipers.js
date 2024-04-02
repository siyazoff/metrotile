const homeSwiper = new Swiper(".swiper-home", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 500,
  effect: "fade",
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".section-home__pagination",
  },
});

const collectionTabs = new Swiper(".collection-tabs__thumbs", {
  slidesPerView: 10,
  spaceBetween: 28,
  watchSlidesProgress: true,
  pagination: {
    el: ".collection-tabs__pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".collection-tabs-next",
    prevEl: ".collection-tabs-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 5.6,
    },
    768: {
      slidesPerView: 10,
    },
  },
});

const collectionMainSwiper = new Swiper(".collection-sides-box__swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  speed: 800,
  allowTouchMove: false,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },

  thumbs: {
    swiper: collectionTabs,
  },
});

const collectionThumbs = new Swiper(".section-collection__thumbs", {
  slidesPerView: 4,
  spaceBetween: 17,
  watchSlidesProgress: true,
  grid: {
    rows: 3,
  },

  breakpoints: {
    320: {
      slidesPerView: 6,
      spaceBetween: 8,
      grid: {
        rows: 2,
        fill: "row",
      },
    },

    768: {
      slidesPerView: 4,
      grid: {
        rows: 3,
      },
    },
  },
});

const buildSwiperCollection = (sliderElm) => {
  let sliderIdentifier = sliderElm.dataset.id;

  return new Swiper(`.section-collection__swiper-${sliderIdentifier}`, {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },

    thumbs: {
      swiper: `.section-collection__thumbs-${sliderIdentifier}`,
    },
  });
};

const allCollectionSliders = document.querySelectorAll(
  ".section-collection__swiper"
);

allCollectionSliders.forEach((slider) => buildSwiperCollection(slider));

const youtubeSwiper = new Swiper(".section-youtube__swiper", {
  slidesPerView: 1,
  spaceBetween: 100,
  allowTouchMove: false,
  speed: 800,
  pagination: {
    el: ".section-youtube__swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".section-youtube__swiper-next",
    prevEl: ".section-youtube__swiper-prev",
  },

  breakpoints: {
    320: {
      navigation: {
        nextEl: ".section-youtube__mobile-swiper-next",
        prevEl: ".section-youtube__mobile-swiper-prev",
      },
    },
    768: {
      navigation: {
        nextEl: ".section-youtube__swiper-next",
        prevEl: ".section-youtube__swiper-prev",
      },
    },
  },
});

const newsSwiper = new Swiper(".section-news__swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".section-news__swiper-pagination",
    type: "progressbar",
  },
  navigation: {
    nextEl: ".section-news__swiper-next",
    prevEl: ".section-news__swiper-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.5,
      spaceBetween: 11,
      navigation: {
        nextEl: ".section-news__swiper-mobile-next",
        prevEl: ".section-news__swiper-mobile-prev",
      },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
  },
});

const buildSwiperCatalog = (sliderElm) => {
  let sliderIdentifier = sliderElm.dataset.id;

  return new Swiper(`.catalog-item__swiper-${sliderIdentifier}`, {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    grabCursor: true,

    pagination: {
      el: `.catalog-item__pagination-${sliderIdentifier}`,
    },
    navigation: {
      nextEl: `.catalog-item__next-${sliderIdentifier}`,
      prevEl: `.catalog-item__prev-${sliderIdentifier}`,
    },
  });
};

const allCatalogSliders = document.querySelectorAll(".catalog-item__swiper");

allCatalogSliders.forEach((slider) => buildSwiperCatalog(slider));

const productSwiperThumbs = new Swiper(".section-product__thumbs", {
  slidesPerView: 4,
  spaceBetween: 27,
  watchSlidesProgress: true,
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    320: {
      slidesPerView: 7,
      spaceBetween: 8,
      grid: {
        rows: 1,
        fill: "row",
      },
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 27,
      grid: {
        rows: 2,
        fill: "row",
      },
    },
  },
});

const productColorNameSwiper = new Swiper(
  ".section-product__swiper-color-name",
  {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 800,
    direction: "vertical",
    allowTouchMove: false,
  }
);

const productImgSwiper = new Swiper(".section-product__swiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  thumbs: {
    swiper: productSwiperThumbs,
  },
  controller: {
    control: productColorNameSwiper,
  },
});

const historyThumbs = new Swiper(".swiper-history__thumbs", {
  slidesPerView: 9,
  spaceBetween: 86,
  watchSlidesProgress: true,
  centeredSlides: true,
  speed: 800,

  breakpoints: {
    320: {
      slidesPerView: 5,
      spaceBetween: 25,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 9,
      spaceBetween: 86,
    },
  },
});

const historyContentSwiper = new Swiper(".swiper-history-content", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  allowTouchMove: false,
  controller: {
    control: historyThumbs,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const historyImgSwiper = new Swiper(".swiper-history-img", {
  slidesPerView: 1,
  spaceBetween: 10,
  speed: 800,
  allowTouchMove: false,
  initialSlide: 4,
  thumbs: {
    swiper: historyThumbs,
  },

  navigation: {
    nextEl: ".swiper-history__next",
    prevEl: ".swiper-history__prev",
  },
  controller: {
    control: historyContentSwiper,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 50,
    },

    768: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});

const swiperProductionBest = new Swiper(".swiper-production-best", {
  slidesPerView: 1,
  spaceBetween: 40,
  speed: 800,

  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-production-best__pagination",
  },
});
