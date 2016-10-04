var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');

gulp.task('nodemon', (cb) => {
  var started = false;

  return nodemon({
    script: 'ap-server.js'
  })
    .on('start', () => {
      if (!started) {
        started = true;
        return cb();
      }
    })
    .on('restart', () => {
      console.log('restarting');
    });

});

gulp.task('test', function() {
  return gulp.src('./tests/*.js')
    .pipe(mocha({reporter: 'spec' }))
    once('error', function() {
        process.exit(1);
    })
    .once('end', function() {
      process.exit();
    });
});

gulp.task('watch', function() {
  gulp.watch('./**/*.js', ['test']);
});