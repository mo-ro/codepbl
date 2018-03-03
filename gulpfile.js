var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('html', function() {
  gulp.src(['./*.html', '!./_*.html'])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  .pipe(browser.reload({
    stream: true
  }))
});


gulp.task("sass", function() {
  gulp.src("./*.scss")
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("."))
    .pipe(browser.reload({
      stream: true
    }))
});

gulp.task("js", function() {
  gulp.src(["./*js", "!./min/*.js"])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
    .pipe(browser.reload({
      stream: true
    }))
});

gulp.task("server", function() {
  browser({
    server: {
      baseDir: "."
    }
  });
});


gulp.task("default", ['server'], function() {
  gulp.watch(["./*.js"], ["js"]);
  gulp.watch("./*.scss", ["sass"]);
  gulp.watch("./*.html", ["html"]);
});