const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  }
}
