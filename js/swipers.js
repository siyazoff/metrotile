const homeSwiper = new Swiper(".swiper-home", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 1200,
  //   autoplay: {
  //     delay: 5500,
  //     disableOnInteraction: false,
  //   },
  pagination: {
    el: ".swiper-home-pagination",
  },
});
