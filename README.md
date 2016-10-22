# laravel-elixir-stylelint

[![npm version](https://badge.fury.io/js/laravel-elixir-stylelint.svg)](https://badge.fury.io/js/laravel-elixir-stylelint)
[![Build Status](https://travis-ci.org/ponko2/laravel-elixir-stylelint.svg?branch=master)](https://travis-ci.org/ponko2/laravel-elixir-stylelint)

## Install

```sh
$ npm install laravel-elixir-stylelint --save-dev
$ touch .stylelintrc
```

## Usage

### Example Gulpfile

```javascript
var elixir = require('laravel-elixir');

require('laravel-elixir-stylelint');

elixir(function(mix) {
  mix.stylelint();
});
```

### Advanced example

```javascript
var elixir = require('laravel-elixir');
var config = elixir.config;

require('laravel-elixir-stylelint');

elixir(function(mix) {
  mix.sass('app.scss')
    .version(['css/app.css'])
    .stylelint([
      config.get('assets.css.sass.folder') + '/**/*.scss',
      '!' + config.get('public.css.outputFolder') + '/app.css'
    ]);
});
```
