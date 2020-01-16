const gulp = require("gulp");
const concatCss = require("gulp-concat-css");
const concatJs = require("gulp-concat");
const run = require("run-sequence");
const minify = require("gulp-csso");

gulp.task("buildCss", function() {
  return (
    gulp
      .src("src/css/style.css")
      .pipe(concatCss("/style.css", { rebaseUrls: false }))
      //.pipe(minify())
      .pipe(gulp.dest("build"))
  );
});

gulp.task("buildJs", function() {
  return gulp
    .src("src/**/*.js")
    .pipe(concatJs("/script.js"))
    .pipe(gulp.dest("build"));
});
gulp.task("copyImg", function() {
  return gulp
    .src(["src/images/**"], {
      base: "src/"
    })
    .pipe(gulp.dest("build"));
});

gulp.task("build", function(done) {
  run("buildCss", "buildJs", "copyImg", done);
});

gulp.task("dev", () => {
  run("buildCss", "buildJs", "copyImg");
  gulp.watch("src/**/*.css", ["buildCss"]);
  gulp.watch("src/**/*.js", ["buildJs"]);
  gulp.watch("src/images/**", ["copyImg"]);

  require("./stub/index");
});
