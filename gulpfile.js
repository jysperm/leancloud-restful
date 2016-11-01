var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('api-console-scripts', function() {
  gulp.src('node_modules/api-console/dist/scripts/*.js').pipe(uglify({
    mangle: false
  })).pipe(gulp.dest('public/scripts'));
});

gulp.task('api-console', ['api-console-scripts'], function() {
  gulp.src(['node_modules/api-console/dist/{fonts,img,styles}/*']).pipe(gulp.dest('public'));
});

gulp.task('api-reference', function() {
  gulp.src(['leancloud.raml', 'index.html']).pipe(gulp.dest('public'));
})

gulp.task('watch', function() {
  gulp.watch(['leancloud.raml', 'index.html'], ['api-reference']);
});

gulp.task('default', ['api-console', 'api-reference']);
