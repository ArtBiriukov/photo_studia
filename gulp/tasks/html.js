import fileinclude from 'gulp-file-include';
//import webpHtmlNosvg from 'gulp-webp-html-nosvg'; // !!! Выключить если что
//import versionNumder from "gulp-version-numder";

export const html = () => {
  return (
    app.gulp
    .src(app.path.src.html)
    .pipe(
      app.plugins.plumber(
        app.plugins.notify.onError({
          title: 'HTML',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(fileinclude())
    //webp обертка
    //.pipe(app.plugins.if(app.isBuild, webpHtmlNosvg()))

    /*.pipe(versionNumder({
    'value': '%DT%',
    'append': {
      'key': '_v',
      'cover': 0,
      'to': [
        'css',
        'js',
      ]
    },
    'output': {
      'file': 'gulp/version.json'
    }
  }))*/

    .pipe(app.plugins.replace(/@images\//g, 'images/'))
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream())
  );
};