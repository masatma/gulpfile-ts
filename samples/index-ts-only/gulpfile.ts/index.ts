var gulp = require("gulp");
var ts = require("gulp-typescript");
var clean = require('gulp-clean');
var tsProject = ts.createProject("./tsconfig.json");
gulp.task("build", function () {
  return tsProject.src().pipe(tsProject()).js.pipe(gulp.dest("dist"));
});
gulp.task("clean", function() {
  return gulp.src(["dist"], { read: false, allowEmpty: true }).pipe(clean({force: true}));
});
