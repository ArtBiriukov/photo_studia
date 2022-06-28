import './vender/vender.js';
import sliders from './vender/sliders.js';

import showText from './modules/showText.js';
import scrollTop from './modules/scrollTop.js';
import marginMenu from './modules/marginMenu.js';

// import changePhotos from './modules/changePhotos.js';
import openMenu from './modules/openMenu.js';
import smoothScroll from './modules/smoothScroll.js';
import map from './modules/map.js';

sliders();
showText();
// changePhotos();
openMenu();

marginMenu('.header', '.main-screen');
//Плавный скролл
smoothScroll('.menu__link');
smoothScroll('.footer__menu-link');
scrollTop('.btn__top', '#main-screen');

//Карта
map();
