const { src, dest, watch, parallel, series } = require("gulp");

const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const imagemin = require("gulp-imagemin");

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "app/",
    },
  });
}

function cleanDist() {
  return del("dist");
}

function scss() {
  return src("app/scss/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 10 version"],
        grid: true,
      })
    )
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function style() {
  return src([
    "node_modules/normalize.css/normalize.css",    
    "node_modules/slick-carousel/slick/slick.css",
    "node_modules/magnific-popup/dist/magnific-popup.css",
  ])
    .pipe(concat("libs.min.css"))
    .pipe(dest("app/css"))
    .pipe(browserSync.stream());
}

function scripts() {
  return src(["app/js/main.js"])
    .pipe(concat("main.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function js() {
  return src([
    "node_modules/jquery/dist/jquery.min.js", 
     "node_modules/slick-carousel/slick/slick.min.js",
    "node_modules/magnific-popup/dist/jquery.magnific-popup.js",
  ])
    .pipe(concat("libs.min.js"))
    .pipe(uglify())
    .pipe(dest("app/js"))
    .pipe(browserSync.stream());
}

function images() {
  return src("app/images/**/*")
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest("dist/images"));
}

function build() {
  return src(
    [
      "app/*.html",
      "app/css/*.min.css",
      "app/js/*.min.js",
      "app/fonts/**/*",
      "app/img/**/*.*",
    ],
    { base: "app" }
  ).pipe(dest("dist"));
}

function watching() {
  watch(["app/*.html"]).on("change", browserSync.reload);
  watch(["app/scss/**/*.scss"], scss);
  watch(["app/js/**/*.js", "!app/js/main.min.js"], scripts);
}

exports.scss = scss;
exports.style = style;
exports.watching = watching;
exports.browsersync = browsersync;
exports.scripts = scripts;
exports.js = js;
exports.images = images;
exports.cleanDist = cleanDist;

exports.build = series(cleanDist, images, build);
exports.default = parallel(js, style, scss, scripts, browsersync, watching);
