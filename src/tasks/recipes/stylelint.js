import StylelintTask from '../StylelintTask';

/**
 * Stylelint Task
 *
 * @param {string|Array|null} src     Glob or array of globs
 * @param {object|null}       options Stylelint options
 * @returns {void}
 */
function task(src, options = {}) {
  // eslint-disable-next-line no-new
  new StylelintTask('stylelint', getPaths(src), options);
}

/**
 * Prep the Gulp src paths.
 *
 * @param {string|Array|null} src Glob or array of globs
 * @returns {GulpPaths} Gulp src paths
 */
function getPaths(src) {
  return new Elixir.GulpPaths()
    .src(src || [
      `${Elixir.config.get('assets.css.folder')}/**/*.css`,
      `${Elixir.config.get('assets.css.sass.folder')}/**/*.scss`,
      `${Elixir.config.get('public.css.outputFolder')}/**/*.css`,
      `!${Elixir.config.get('public.css.outputFolder')}/vendor/**/*.css`
    ]);
}

Elixir.extend('stylelint', task);
