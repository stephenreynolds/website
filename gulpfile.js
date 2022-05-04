const { parallel, series, src, dest } = require("gulp");
const clean = require("gulp-clean");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const postcssNormalize = require("postcss-normalize");

const cleanDist = () => {
  return src("dist", { read: false })
    .pipe(clean());
};

const packJs = () => {
  return src("src/js/*.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/js"));
};

const packCss = () => {
  const plugins = [
    postcssNormalize(),
    autoprefixer(),
    cssnano()
  ];

  return src("src/css/*.css")
    .pipe(sourcemaps.init())
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist/css"));
};

const packPublic = () => {
  return src("public/**/*")
    .pipe(dest("dist"));
};

const packHtml = () => {
  return src("src/*.html")
    .pipe(dest("dist"));
};

exports.default = series(cleanDist, parallel(packJs, packCss, packPublic, packHtml));