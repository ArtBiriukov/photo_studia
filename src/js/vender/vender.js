//Анимация AOS
import AOS from 'aos';

import './simplebar.min.js';

AOS.init({
  disable: function () {
    let maxWidth = 896;
    return window.innerWidth < maxWidth;
  },
});

//Галлерея и модальное окно
import { Fancybox } from '@fancyapps/ui';

Fancybox.bind('[data-fancybox="gallery-works"]', {
  Thumbs: false,
  Toolbar: false,
  closeButton: false,
  mainClass: 'works-modal-slide',

  Image: {
    wheel: 'slide',
    zoom: false,
    // click: 'close',
  },

  Carousel: {
    Navigation: {
      prevTpl: '<svg class="slider-button__icon" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#slider-arrow"></use></svg>',
      nextTpl: '<svg class="slider-button__icon" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#slider-arrow"></use></svg>',

      classNames: {
        button: 'slider-button',

        next: 'slider-button-next',
        prev: 'slider-button-prev',
      },
    },
  },
});

Fancybox.bind('[data-fancybox="gallery-locations"]', {
  Thumbs: false,
  Toolbar: false,
  closeButton: false,
  mainClass: 'location-modal-slide',

  Image: {
    wheel: 'slide',
    zoom: false,
    // click: 'close',
  },

  Carousel: {
    Navigation: {
      prevTpl: '<svg class="slider-button__icon" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#slider-arrow"></use></svg>',
      nextTpl: '<svg class="slider-button__icon" viewBox="0 0 24 45" fill="none" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#slider-arrow"></use></svg>',

      classNames: {
        button: 'slider-button',

        next: 'slider-button-next',
        prev: 'slider-button-prev',
      },
    },
  },
});

Fancybox.bind('[data-fancybox="modals"]', {
  mainClass: 'modals',
  groupAttr: null,
  dragToClose: false,

  template: {
    closeButton: '<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L22 22" stroke-width="2" stroke-linecap="round" /><path d="M22 1L1 22" stroke-width="2" stroke-linecap="round" /></svg>',
  },

  Carousel: {
    Navigation: {
      classNames: {
        button: 'modal__close',
      },
    },
  },
});
