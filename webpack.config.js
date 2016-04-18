var path = require('path')
var webpack = require('webpack')

var config = {
  entry: [
    './example/app'
  ],
  output: {
    path: './dist',
    filename: './example/bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        unused: true,
        dead_code: true
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: '/node_modules/',
        include: __dirname
      }
    ]
  }
}

module.exports = config
