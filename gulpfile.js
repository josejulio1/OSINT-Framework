const { src, dest, watch, parallel } = require('gulp');
const plumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const ts = require('gulp-typescript');
const sass = require('gulp-sass')(require('sass'));
const server = require('gulp-express');
const imagemin = require('gulp-imagemin');

// CSS
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

// JavaScript
const terser = require('gulp-terser');

const PATHS = {
    HTML: 'src/**/*.html',
    JAVASCRIPT: 'src/**/*.js',
    TYPESCRIPT: 'src/**/*.ts',
    SASS: 'src/assets/scss/**/*.scss',
    IMAGES: 'src/assets/img/**/*'
}

function html(done) {
    src(PATHS.HTML)
        .pipe(dest('dist'))
    done();
}

function css(done) {
    src(PATHS.SASS)
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([cssnano, autoprefixer]))
        .pipe(dest('dist/assets/css'))
    done();
}

function javaScript(done) {
    src(PATHS.JAVASCRIPT)
        .pipe(terser())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('dist'))
    done();
}

function typeScript(done) {
    src(PATHS.TYPESCRIPT)
        /* .pipe(sourcemaps.init()) */
        .pipe(ts())
        .pipe(terser())
        /* .pipe(sourcemaps.write('.')) */
        .pipe(dest('dist'))
    done();
}

function image(done) {
    src(PATHS.IMAGES)
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(dest('dist/assets/img'))
    done();
}

function dev(done) {
    parallel(html, css, javaScript, typeScript, image)(() => {
        setTimeout(() => {
            server.run(['dist/server/server.js']);
        }, 1000);
    });
    watch(PATHS.HTML, html);
    watch(PATHS.SASS, css);
    watch(PATHS.JAVASCRIPT, javaScript);
    watch(PATHS.TYPESCRIPT, typeScript);
    watch(PATHS.IMAGES, image);
    done();
}

exports.dev = dev;
exports.prod = parallel(html, css, javaScript, typeScript, image);