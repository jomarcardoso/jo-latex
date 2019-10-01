const gulp = require('gulp');
const gulpSass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

function sass() {
  return gulp.src('./assets/css/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(gulpSass({outputStyle: 'compressed'}).on('error', gulpSass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./assets/css/'));
}

function watch() {
  return gulp.watch('./assets/**/*.scss', sass)
}

exports.default = gulp.parallel(sass, watch);