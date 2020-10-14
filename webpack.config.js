const webpack = require('webpack')

module.exports = {
  mode: 'development',
  // mode: 'production',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', // adds the CSS into the DOM injecting the <style> tag
        'css-loader', // interprets @import, ulr()...
      ]
    }]
  }
}
