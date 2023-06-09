const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js'
  },
  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        router: () => 'http://localhost:8000'
      }
    }
  }
})
