# laravel-elixir-stylelint

[![npm version](https://badge.fury.io/js/laravel-elixir-stylelint.svg)](https://badge.fury.io/js/laravel-elixir-stylelint)
[![Build Status](https://travis-ci.org/ponko2/laravel-elixir-stylelint.svg?branch=master)](https://travis-ci.org/ponko2/laravel-elixir-stylelint)

## Install

### Laravel Elixir >=3.0.0-0 <6.0.0-0

```sh
$ npm install laravel-elixir-stylelint --save-dev
$ touch .stylelintrc
```

### Laravel Elixir >=6.0.0-11

```sh
$ npm install laravel-elixir-stylelint@beta --save-dev
$ touch .stylelintrc
```

## Usage

```javascript
// gulpfile.js
var elixir = require('laravel-elixir');

require('laravel-elixir-stylelint');

elixir(function(mix) {
  mix.stylelint();
});
```

```javascript
// gulpfile.js
var elixir = require('laravel-elixir');
var config = elixir.config;

require('laravel-elixir-stylelint');

elixir(function(mix) {
  mix.stylelint([
    config.get('assets.css.sass.folder') + '/**/*.scss'
  ]);
});
```
