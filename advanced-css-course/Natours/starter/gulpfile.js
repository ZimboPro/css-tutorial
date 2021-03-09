var gulp = require('gulp');
var sass = require('gulp-sass');
var shell = require('gulp-shell');

sass.compiler = require('sass');

gulp.task('sass', function() {
  return gulp.src('sass/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest((file) => {
    file.dirname = 'css';
    file.basename = 'style.css';
    return file
  }));
})

gulp.task('live', shell.task('live-server'))

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', { ignoreInitial: false }, gulp.task('sass'));
});

exports.default = gulp.parallel('sass:watch', 'live')