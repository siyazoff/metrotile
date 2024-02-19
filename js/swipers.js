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
});

const buildSwiperSlider = (sliderElm) => {
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

const allSliders = document.querySelectorAll(".section-collection__swiper");

allSliders.forEach((slider) => buildSwiperSlider(slider));

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
});
