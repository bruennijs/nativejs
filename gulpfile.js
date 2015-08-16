var gulp = require('gulp');
var console = require('console');
var exec = require('gulp-exec');

gulp.task('ts', function () {
  console.info("Transpiling typescript...");

  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false,
    customTemplateThing: 'some string to be templated'
  };

  gulp.src(['ts/**/*.ts'])
      .pipe(exec('node node_modules/typescript/bin/tsc -d -t ES5 --out dist/js/<%= file.path %> <%= file.path %>', options));
});

gulp.task('watch', function () {
  gulp.watch('ts/**/*.ts', ['ts']);
});

gulp.task('build', ['ts']);