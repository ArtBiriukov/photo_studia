import './vender/vender.js';
import sliders from './vender/sliders.js';
import validation from './vender/validation.js';

import showText from './modules/showText.js';
import scrollTop from './modules/scrollTop.js';
import marginMenu from './modules/marginMenu.js';
import selectLocation from './modules/selectLocation.js';
// import changePhotos from './modules/changePhotos.js';
import openMenu from './modules/openMenu.js';
import smoothScroll from './modules/smoothScroll.js';
import map from './modules/map.js';

sliders();
validation();
showText();
// changePhotos();
openMenu();

marginMenu('.header', '.main-screen');
selectLocation();
//Плавный скролл
smoothScroll('.menu__link');
smoothScroll('.footer__menu-link');
scrollTop('.btn__top', '#main-screen');

//Карта
map();
