"use strict";

var gulp = require('gulp');
var mocha = require('gulp-mocha');
var appFiles = ['arrayFunc.js', 'bin/**/*.js'];
var testFiles = [__dirname + '/test/**/*.js'];

gulp.task('mocha:test', function(){
  return gulp.src(testFiles)
  .pipe(mocha());
});

gulp.task('mocha', ['mocha:test']);
gulp.task('default', ['mocha:test']);
