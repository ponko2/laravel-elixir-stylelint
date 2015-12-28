# laravel-elixir-stylelint

## Install

```sh
$ npm install laravel-elixir-stylelint --save-dev
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
var scss   = require('postcss-scss');
var config = elixir.config;

require('laravel-elixir-stylelint');

elixir(function(mix) {
  mix.stylelint([
    config.get('assets.css.sass.folder') + '/**/*.scss'
  ], {syntax: scss});
});
```
