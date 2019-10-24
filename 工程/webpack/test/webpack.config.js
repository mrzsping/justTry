const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].[hash:4].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'] // 从右往左
        use: ExtractTextWebpackPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      hash: true,
      chunks: ['index']
    }),
    // new htmlWebpackPlugin({
    //   template: './src/login.html',
    //   filename: 'login.html',
    //   hash: true,
    //   chunks: ['login']
    // })
    new ExtractTextWebpackPlugin('css/style.css')
  ],
  devServer: {

  },
  mode: 'development'
}