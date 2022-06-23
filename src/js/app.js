import './vender/vender.js';
import sliders from './vender/sliders.js';

import showText from './modules/showText.js';
import scrollTop from './modules/scrollTop.js';
import changePhotos from './modules/changePhotos.js';
import openMenu from './modules/openMenu.js';
import smoothScroll from './modules/smoothScroll.js';
import map from './modules/map.js';
import modals from './modules/modals.js';

sliders();
showText();
scrollTop('.btn__top', '#main-screen');
changePhotos();
openMenu();

//Плавный скролл
smoothScroll('.menu__link');
smoothScroll('.footer__menu-link');
smoothScroll('.order__call');
smoothScroll('.order__icon');

//Карта
map();
// modals('.btn__contact', ".modal__backvoice");
// modals('.reviews__btn', ".modal__review");
