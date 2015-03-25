var gulp = require('gulp');
var webpack = require('gulp-webpack-build');
var path = require('path');

var webpackConfig = {
  useMemoryFs: true,
  progress: true
};

var dist = path.join(__dirname, 'dist');

function pack(overrides) {
  return gulp.src(path.join(__dirname, 'webpack.config.js'))
    .pipe(webpack.configure(webpackConfig))
    .pipe(webpack.overrides(overrides))
    .pipe(webpack.compile())
    .pipe(webpack.format({
      version: false,
      timings: true
    }))
    .pipe(webpack.failAfter({
      errors: true,
      warnings: true
    }));
}

gulp.task('regular', [], function() {
  return pack({
    output: {
      filename: 'ReactTextSplit.js'
    }
  })
  .pipe(gulp.dest(dist));
});

gulp.task('min', [], function() {
  return pack({
    output: {
      filename: 'ReactTextSplit.min.js'
    },
    plugins: [
      new webpack.core.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      })
    ]
  })
  .pipe(gulp.dest(dist));
});
