'use strict';

var gulp         = require('gulp');
var gutil        = require('gulp-util');
var stylelint    = require('gulp-stylelint');
var objectAssign = require('object-assign');
var Elixir       = require('laravel-elixir');

var config = Elixir.config;

Elixir.extend('stylelint', function (src, options) {
  var paths = new Elixir.GulpPaths()
    .src(src || [
      config.get('assets.css.folder') + '/**/*.css',
      config.get('public.css.outputFolder') + '/**/*.css',
      '!' + config.get('public.css.outputFolder') + '/vendor/**/*.css'
    ]);

  var stylelintOptions = objectAssign({
    failAfterError: false,
    reporters: [{
      formatter: 'string',
      console: true
    }]
  }, options);

  new Elixir.Task('stylelint', function () {

    return gulp.src(paths.src.path)
      .pipe(stylelint(stylelintOptions))
      .pipe(gutil.noop());
  }).watch(paths.src.path);
});
