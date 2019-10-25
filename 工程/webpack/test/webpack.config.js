const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
let common = new ExtractTextWebpackPlugin('./css/common.css')
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
        use: common.extract({
          use: ['css-loader', 'postcss-loader'],
          publicPath: '../'
        })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: 'images/'   // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(htm|html)$/,
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
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
    // }),
    common
  ],
  devServer: {

  },
  mode: 'development'
}