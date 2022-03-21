import Swiper, {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay
} from 'swiper';

const sliders = () => {
  new Swiper('.slider__works', {
    slidesPerView: 3,
    centeredSlides: true,
    grabCursor: true,
    initialSlide: 1,
    autoplay: true,
    // loop: true,
    // loopedSlides: 3,

    modules: [Navigation, Pagination, EffectCoverflow, Autoplay],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    effect: 'coverflow',
    coverflowEffect: {
      rotate: 0,
      slideShadows: true,
    },

    autoplay: {
      delay: 3000,
    },
  });

  new Swiper('.slider__locations', {
    slidesPerView: 1,
    grabCursor: true,

    modules: [Navigation, Autoplay],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      961: {
        slidesPerView: 3,
        spaceBetween: 15
      },

      1345: {
        slidesPerView: 3,
        spaceBetween: 27
      }
    },

    autoplay: {
      delay: 3000,
    }
  });

  new Swiper('.slider__reviews', {
    grabCursor: true,

    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    loop: true,

    slideActiveClass: 'slider__slide-active',

    modules: [Navigation, Autoplay],

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      // when window width is >= 896px
      895: {
        slidesPerView: 2,
        spaceBetween: 21
      },
      // when window width is >= 1024px
      1026: {
        slidesPerView: 3,
        spaceBetween: 16,
        centeredSlides: true,
        initialSlide: 1,
        loop: false
      }
    },

    autoplay: {
      delay: 3000,
    },

  });
}

export default sliders;