var fs = require('fs')
var browserify = require('browserify')

// example
browserify('example/app.js')
  .transform('babelify')
  .bundle()
  .pipe(fs.createWriteStream('example/bundle.js'))
