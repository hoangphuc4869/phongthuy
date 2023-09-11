var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  speed: 900,
  fadeEffect: { crossFade: true },
});

var swiper = new Swiper(".Swiper_perView", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".swiper_freemode", {
  slidesPerView: "auto",
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  allowSlidePrev: true,
  allowSlideNext: true,
});

//share btn

const link = encodeURI(window.location.href);
const linkedIn = document.querySelector("#linkedIn");
linkedIn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${link}`;
const fb = document.querySelector("#facebook");
fb.href = `https://www.facebook.com/share.php?u=${link}`;
const Print = document.querySelector("#print");
Print.addEventListener("click", () => window.print());
