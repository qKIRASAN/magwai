'use strict';

const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const bsync = require('browser-sync').create();
const cssnano = require('cssnano');
const del = require('del');
const path = require('path');
const webpack = require('webpack-stream');

const debug = require('gulp-debug');
const gulpIf = require('gulp-if');
const imagemin = require('gulp-imagemin');
const include = require('posthtml-include');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const posthtml = require('gulp-posthtml');
const remember = require('gulp-remember');
const rename = require('gulp-rename');
const replace = require('gulp-replace');
const sass = require('gulp-sass')(require('sass'));
const svgSprite = require('gulp-svg-sprite');
const sourcemap = require('gulp-sourcemaps');
const webp = require('gulp-webp');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const src= {
  root: 'src/',
  fonts: 'src/fonts/',
  img: 'src/img/',
  favicon: 'src/img/favicon/',
  styles: 'src/scss/',
  js: 'src/js/',
};

const dist= {
  root: 'public/',
  fonts: 'public/fonts/',
  img: 'public/img/',
  favicon: 'public/img/favicon/',
  styles: 'public/css/',
  js: 'public/js/'
};

function createServer() {
  const config = {
    server: dist.root,
    notify: false,
    cors: true,
    ui: false
  };

  bsync.init(config);
  bsync.watch(dist.root)
  .on('change', bsync.reload);
}

function clean() {
  return del(dist.root)
}

function createHtml() {
  return gulp.src(`${src.root}*.html`, {since: gulp.lastRun(createHtml)})
  .pipe(posthtml(
    [include({root: src.root})]
  ))
  .pipe(gulpIf(!isDevelopment, replace(
    /href=".\/css\/style.css"/,
    'href="./css/style.min.css"'
  )))
  .pipe(remember('html'))
  .pipe(debug({
    title: 'html'
  }))
  .pipe(gulp.dest(dist.root));
}

function createCss() {
  const importFilesPath = {
    includePaths: [path.resolve(src.styles)]
  };
  const plugins = [
    autoprefixer(),
    cssnano(),
  ];

  return gulp.src(`${src.styles}*.scss`, {since: gulp.lastRun(createCss)})
  .pipe(plumber({errorHandler: sass.logError}))
  .pipe(remember('styles'))
  .pipe(gulpIf(isDevelopment, sourcemap.init()))
  .pipe(debug({
    title: 'styles'
  }))
  .pipe(sass(importFilesPath))
  .pipe(gulpIf(isDevelopment, sourcemap.write('.')))
  .pipe(gulp.dest(dist.styles))
  .pipe(gulpIf(!isDevelopment, postcss(plugins)))
  .pipe(gulpIf(!isDevelopment, rename('style.min.css')))
  .pipe(gulp.dest(dist.styles))
}

function createImages() {
  const configJpeg = {
    quality: 85,
    progressive: true,
    interlaced: true,
  };
  const configPng = {
    optimizationLevel: 5
  };

  return gulp.src(`${src.img}*.{png,jpg}`, {since: gulp.lastRun(createImages)})
  .pipe(imagemin([
    imagemin.mozjpeg({configJpeg}),
    imagemin.optipng({configPng})
  ]))
  .pipe(remember('images'))
  .pipe(debug({
    title: 'images'
  }))
  .pipe(gulp.dest(dist.img));
}

function createWebp() {
  const configWebp = {
    quality: 90
  };

  return gulp.src(`${src.img}webp/*.{png,jpg}`, {base: `${src.img}webp`, since: gulp.lastRun(createWebp)})
  .pipe(webp({configWebp}))
  .pipe(debug({
    title: 'webp'
  }))
  .pipe(gulp.dest(dist.img));
}

function createSprite() {
  const configSvg = {
    dest: dist.img,
    svg: {
      xmlDeclaration: false
    },
    mode: {
      symbol: {
        dest: '.',
        sprite: 'sprite.svg',
      }
    }
  };

  return gulp.src(`${src.img}sprite/*.svg`)
  .pipe(svgSprite(configSvg))
  .pipe(gulp.dest(dist.img))
}

function createScript() {
  const config = {
    mode: isDevelopment ? 'development' : 'production',
    devtool: isDevelopment ? 'inline-source-map' : 'none',
    entry: path.resolve(`${src.js}main.js`),
    output: {
      filename: '[name].js',
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            filename: 'vendor.js',
            enforce: true
          },
        },
      },
    },
    target: 'web'
  };

  return gulp.src(`${src.js}*.js`, {since: gulp.lastRun(createScript)})
  .pipe(webpack({config}))
  .pipe(remember('js'))
  .pipe(debug({
    title: 'js'
  }))
  .pipe(gulp.dest(dist.js))
}

function copy() {
  return gulp.src([`${src.fonts}*.*`, `${src.favicon}*.*`], {since: gulp.lastRun(copy)})
  .pipe(remember('copy'))
  .pipe(gulp.dest(function(file) {
    return file.extname === `.woff` || file.extname === `.woff2` ?
      dist.fonts :
      dist.favicon;
  }))
}

function watch() {
  gulp.watch(`${src.root}*.html`, gulp.series(createHtml))
  .on('unlink', function(filepath) {
    remember.forget('html', path.resolve(filepath));
  });

  gulp.watch(`${src.styles}**/*.scss`, gulp.series(createCss))
  .on('unlink', function(filepath) {
    remember.forget('styles', path.resolve(filepath));
  });

  gulp.watch(`${src.img}*.*`, gulp.series(createImages))
  .on('unlink', function(filepath) {
    remember.forget('images', path.resolve(filepath));
  });

  gulp.watch(`${src.img}webp/*.*`, gulp.series(createWebp))
  .on('unlink', function(filepath) {
    remember.forget('webp', path.resolve(filepath));
  });

  gulp.watch([`${src.fonts}*.*`, `${src.favicon}*.*`], gulp.series(copy))
  .on('unlink', function(filepath) {
    remember.forget('copy', path.resolve(filepath));
  });

  gulp.watch(`${src.img}sprite/*.svg`, gulp.series(createSprite));
  gulp.watch(`${src.js}**/*.js`, gulp.series(createScript));
}

const build = gulp.series(
  clean,
  gulp.parallel(createHtml, createCss, createSprite, copy, createScript),
  gulp.parallel(createImages, createWebp),
);

exports.html = createHtml;
exports.css = createCss;
exports.js = createScript;
exports.sprite = createSprite;
exports.build = build;
exports.default = gulp.series(
  build,
  gulp.parallel(
    createServer,
    watch
  )
);
