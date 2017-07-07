/* eslint-disable class-methods-use-this, global-require */

let gutil, stylelint;

export default class StylelintTask extends Elixir.Task {
  /**
   * Create a new StylelintTask instance.
   *
   * @param {string}      name    Task name
   * @param {GulpPaths}   paths   Gulp src and output paths
   * @param {object|null} options Stylelint options
   */
  constructor(name, paths, options) {
    super(name, null, paths);

    this.output  = '\u200B';
    this.options = Object.assign({
      failAfterError: true,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }, options);
  }

  /**
   * Lazy load the task dependencies.
   *
   * @returns {void}
   */
  loadDependencies() {
    gutil = require('gulp-util');
    stylelint = require('gulp-stylelint');
  }

  /**
   * Build up the Gulp task.
   *
   * @returns {void}
   */
  gulpTask() {
    return gulp.src(this.src.path)
      .pipe(this.lint())
      .on('error', this.onError())
      .pipe(gutil.buffer());
  }

  /**
   * Register file watchers.
   *
   * @returns {void}
   */
  registerWatchers() {
    this.watch(this.src.path);
  }

  /**
   * Lint task
   *
   * @returns {Stream} Object stream usable in Gulp pipes.
   */
  lint() {
    this.recordStep(`Executing ${this.ucName()}`);
    return stylelint(this.options);
  }
}
