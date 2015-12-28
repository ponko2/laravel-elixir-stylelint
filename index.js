'use strict';

var gulp      = require('gulp');
var postcss   = require('gulp-postcss');
var stylelint = require('stylelint');
var reporter  = require('postcss-reporter');
var Elixir    = require('laravel-elixir');

var notify = new Elixir.Notification();
var config = Elixir.config;

Elixir.extend('stylelint', function (src, options) {
  var paths = new Elixir.GulpPaths()
    .src(src || [
      config.get('assets.css.folder') + '/**/*.css',
      config.get('public.css.outputFolder') + '/**/*.css',
      '!' + config.get('public.css.outputFolder') + '/vendor/**/*.css'
    ]);

  var onError = function (err) {
    notify.error(err, 'stylelint failed');
    this.emit('end');
  };

  new Elixir.Task('stylelint', function () {
    this.log(paths.src);

    return gulp.src(paths.src.path)
      .pipe(postcss([
        stylelint({}),
        reporter({
          clearMessages: true,
          throwError: true
        })
      ], options || {}))
      .on('error', onError);
  }).watch(paths.src.path);
});
