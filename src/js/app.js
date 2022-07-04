//Сторонние библиотеки
import './vender/vender.js';
import preloader from './modules/preloader.js';
import sliders from './vender/sliders.js';
import validation from './vender/validation.js';

//Модули
import showText from './modules/showText.js';
import scrollTop from './modules/scrollTop.js';
import marginMenu from './modules/marginMenu.js';
import selectLocation from './modules/selectLocation.js';
import { priceFrom } from './modules/pricesForm.js';
import openMenu from './modules/openMenu.js';
import smoothScroll from './modules/smoothScroll.js';
import map from './modules/map.js';

//Прелоэдер
preloader();
//Слайдер
sliders();
//Валидация форм
validation();
//Показать текст в текстовом блоке
showText();
//Выбор прайса
priceFrom();
//Бургер меню
openMenu();
//Добавление верхнего отступа для первого блока
marginMenu('.header', '.main-screen');
//Выбор лакации в модалке Location
selectLocation();
//Плавный скролл
smoothScroll('.menu__link');
smoothScroll('.footer__menu-link');
scrollTop('.btn__top', '#main-screen');
//Карта
map();
