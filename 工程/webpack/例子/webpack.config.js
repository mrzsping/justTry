let path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin') // 打包html
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin') // css改为link引入
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // 清除之前打包的
let webpack = require('webpack')

// let style = new ExtractTextWebpackPlugin('css/style.css')
// let reset = new ExtractTextWebpackPlugin('css/reset.css')

module.exports = {
  entry: { // 入口
    index: './src/index.js'
  },
  output: { // 出口
    filename: '[name].[hash:4].js',
    path: path.resolve('dist')
  },
  module: {
    rules: [ // 各种loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
        // use: ExtractTextWebpackPlugin.extract({
        //   use: ['css-loader', 'postcss-loader'],
        //   publicPath: '../'
        // })
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              outputPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(html|htm)$/, // 引用图片路径
        use: 'html-withimg-loader'
      },
      {
        test: /\.(eot|ttf|woff|svg)$/,
        use: 'file-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      hash: true,
      chunks: ['vendor', 'a']
    }),
    new webpack.HotModuleReplacementPlugin() // 热更新
    // style,
    // reset
  ],
  devServer: { // 静态服务
    contentBase: './dist',
    host: 'localhost',
    port: 3000,
    open: true,
    hot: true
  },
  resolve: { // 别名
    alias: {
      $: './src'
    },
    extensions: ['.js', '.json', '.css'] // 省略后缀
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        utils: {
          chunks: 'initial',
          name: 'utils',
          minSize: 0 
        }
      }
    }
  }
  // mode: 'development'
}