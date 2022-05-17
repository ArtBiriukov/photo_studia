import showText from './modules/showText.js';
import scrollTop from './modules/scrollTop.js';
import modals from './modules/modals.js';

import './vender/vender.js';
import sliders from './vender/sliders.js';

sliders();
showText();
scrollTop('.btn__top', '#main-screen');
modals('.btn__contact', ".modal__backvoice");
modals('.reviews__btn', ".modal__review");