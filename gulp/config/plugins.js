import replace from 'gulp-replace'; //поиск и замена
import plumber from 'gulp-plumber'; //Обработка ошибок
import notify from 'gulp-notify'; //Сообщения (подсказки)
import browserSync from 'browser-sync'; //Локальный сервер
import newer from 'gulp-newer'; //Проверка обновления для изображения
import ifPlugin from 'gulp-if'; //Ветвление

export const plugins = {
  replace: replace,
  plumber: plumber,
  notify: notify,
  browserSync: browserSync,
  newer: newer,
  if: ifPlugin,
};
