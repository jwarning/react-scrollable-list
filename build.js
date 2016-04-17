var fs = require('fs')
var browserify = require('browserify')

// src
browserify('index.js')
  .transform('babelify', { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(fs.createWriteStream('dist/react-scrollable-list.js'))

// example
browserify('./app.js')
  .transform('babelify', { presets: ['es2015', 'react'] })
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'))
