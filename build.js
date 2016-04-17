var fs = require('fs')
var browserify = require('browserify')

// example
browserify('./app.js')
  .transform('babelify')
  .bundle()
  .pipe(fs.createWriteStream('bundle.js'))
