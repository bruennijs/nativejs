var gulp = require('gulp');
var console = require('console');
var exec = require('gulp-exec');
var gdebug = require('gulp-debug');
var gfilemetadata = require('./js/gulp-file-metadata')

gulp.task('ts', function () {
  console.info("Transpiling typescript...");

  var options = {
    continueOnError: false, // default = false, true means don't emit error event
    pipeStdout: false,
    customTemplateThing: 'some string to be templated'
  };

  gulp.src(['ts/**/*.ts'])
      .pipe(gfilemetadata({log: false}))
      .pipe(gdebug({minimal: false}))
      .pipe(exec('node node_modules/typescript/bin/tsc -d -t ES5 --out dist/js/<%= file.name %> <%= file.path %>', options));
});

gulp.task('watch', function () {
  gulp.watch('ts/**/*.ts', ['ts']);
});

gulp.task('build', ['ts']);