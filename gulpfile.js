const gulp = require('gulp'); //Теперь в файл настроек нужно подключить все функции, которые предоставляет Gulp
const concat = require('gulp-concat-css'); //gulp-concat-css — он умеет склеивать CSS-файлы в один;
const plumber = require('gulp-plumber'); //gulp-plumber — плагин, который производит сборку, даже если в коде есть ошибки (как минимум пытается собрать этот код);
const del = require('del'); //del — умеет удалять файлы и папки. Он нам нужен, чтобы при удалении чего-то из исходников, файлы удалялись и из сборки. С ним есть особенность. Мы возьмём его конкретную версию 6.0.0. На момент написания статьи с более поздними версиями происходят баги.
const browserSync = require('browser-sync').create(); //browser-sync — позволит сделать сервер с режимом просмотра результатов в реальном времени;
  // browser-sync мы подключили особенным образом. Этот способ мы нашли в документации browser-sync.
const postcss = require('gulp-postcss'); //постпроцессинг
  const autoprefixer = require('autoprefixer'); //постпроцессинг. для Autoprefixer
    //код поменялся только в итоговом бандле. В исходниках ничего не обновилось.
    //В этом прелесть постпроцессинга — он создаёт оптимальный результат для нужных браузеров, не перегружая исходный код.
  const mediaquery = require('postcss-combine-media-query'); //постпроцессинг. Склейка медиазапросов
  const cssnano = require('cssnano'); //постпроцессинг. Минификация CSS
  const htmlMinify = require('html-minifier'); //постпроцессинг. Минификация HTML
const gulpPug = require('gulp-pug'); /* препроцессинг с Pug */
const sass = require('gulp-sass')(require('sass')); /* препроцессинг для scss */

function serve() {//для browserSync. запуск Сервер
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });
}

//препроцессинг с html
function pug() {
  return gulp.src('gulp-scss/src/**/*.pug') //Gulp находит все файлы с расширением .pug внутри папки src/pages/.
    .pipe(gulpPug({
      pretty: true
    })) //Затем включается преобразование кода на языке Pug в HTML.
    .pipe(gulp.dest('dist/')) //преобразованный код отправляется в папку dist/
    .pipe(browserSync.reload({stream: true})); //Сервер перезагружается, чтобы показать результаты в браузере
}
//препроцессинг с css
function scss() {
  const plugins = [
    autoprefixer(),
    mediaquery(),
    // cssnano() //минификация
  ];
  return gulp.src('gulp-scss/src/layouts/default.scss') // ищет все файлы с расширением .scss внутри папки с исходниками
    //вместо gulp.src('gulp-scss/src/**/*.scss')
    .pipe(sass()) //применяет преобразование из подключённого плагина
    .pipe(concat('bundle.css')) //использовали concat для склеивания CSS в один файл с именем bundle.css
    .pipe(postcss(plugins))//постпроцессинг через postcss
    .pipe(gulp.dest('dist/')) //преобразованный код отправляется в папку dist/
    .pipe(browserSync.reload({stream: true})); //Сервер перезагружается, чтобы показать результаты в браузере
}

//постпроцессинг с html
function html() { //для gulp. все HTML-файлы скопируются
  const options = {
    removeComments: true,
    removeRedundantAttributes: true,
    removeScriptTypeAttributes: true,
    removeStyleLinkTypeAttributes: true,
    sortClassName: true,
    useShortDoctype: true,
    collapseWhitespace: true,
    minifyCSS: true,
    keepClosingSlash: true
  };
  return gulp.src('gulp-scss/src/**/*.html')//сказать Gulp, откуда брать HTML-файлы. мы указали путь до всех файлов с расширением HTML внутри папки src/
    .pipe(plumber()) //Чтобы избежать ошибок при сборке, перед пайпом dest полезно разместить пайп plumber, чтобы в случае ошибок сборка не падала.
    .on('data', function(file) { //для htmlMinify
      const buferFile = Buffer.from(htmlMinify.minify(file.contents.toString(), options))
      return file.contents = buferFile
    })
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));//метод отвечает за отправку файла в точку назначения (папку dist/)
}

//постпроцессинг с css
function css() { //для concat. CSS-файлы склеятся и уедут в виде бандла в папку dist/. В HTML мы подключим стиль из бандла.
  const plugins = [
    autoprefixer(),
    mediaquery(),
    cssnano()
  ];
  return gulp.src('gulp-scss/src/blocks/**/*.css') //указали в методе src путь до всех CSS-файлов в папке blocks/
    .pipe(plumber()) //потом вызвали plumber, чтобы ничего не ломалось
    .pipe(concat('bundle.css')) //использовали concat для склеивания CSS в один файл с именем bundle.css
    .pipe(postcss(plugins))//постпроцессинг через postcss
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.reload({stream: true}));//отправили результат в папку dist/.
}

function images() { //для gulp. перенесём в соответствующие им папки внутри dist/
  return gulp.src('gulp-scss/src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}') //Перечисление форматов изображений в фигурных скобках.
      //Отсутствие пайпа plumber (когда файлы не меняются, ничего не создаст ошибок)
    .pipe(gulp.dest('dist/images'))
    .pipe(browserSync.reload({stream: true}));
}

function clean() {//del. Очистка папки dist/
  return del('dist');
}

function watchFiles() {//Отслеживание изменений в файлах
  //Запуск задачи watchapp следит за файлами в src/ и делает пересборку после каждого изменения этих файлов.
  //Отключить такое слежение в терминале можно клавишами CTRL + C8*
  gulp.watch(['gulp-scss/src/**/*.pug'], pug);
  gulp.watch(['gulp-scss/src/**/*.html'], html);
  gulp.watch(['gulp-scss/src/blocks/**/*.css'], css);
  gulp.watch(['gulp-scss/src/blocks/**/*.scss'], scss);
  gulp.watch(['gulp-scss/src/images/**/*.{jpg,png,svg,gif,ico,webp,avif}'], images);
}

// const build = gulp.series(clean, gulp.parallel(pug, html, css, images)); //для css
const build = gulp.series(clean, gulp.parallel(pug, html, scss, images)); //для scss
const watchapp = gulp.parallel(build, watchFiles, serve); //build + Отслеживание изменений в файлах + запуск сервера


exports.html = html // строчка, которая позволит вызвать эту задачу из терминала. Мы создали функцию с именем html и экспортировали её для вызова из терминала.
exports.css = css;
exports.images = images;
exports.clean = clean;
exports.pug = pug; //Чтобы заработала команда gulp-pug, нужно настроить экспорт получившейся функции.
exports.scss = scss;

exports.build = build;
exports.watchapp = watchapp;
exports.default = watchapp; //просто вызвать gulp в терминале

//Сборка одной командой
//series() — выполняет задачи по очереди
//parallel() — выполняет задачи параллельно



