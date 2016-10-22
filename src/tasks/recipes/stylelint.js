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
  const config = Elixir.config;

  return new Elixir.GulpPaths()
    .src(src || [
      `${config.get('public.css.folder')}/**/*.css`,
      `${config.get('assets.css.folder')}/**/*.css`,
      `${config.get('assets.css.sass.folder')}/**/*.scss`,
    ]);
}

Elixir.extend('stylelint', task);
