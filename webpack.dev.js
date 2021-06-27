var { merge } = require('webpack-merge')
var webpack = require('webpack')
var baseWebpackConfig = require('./webpack.base')
const { WebpackOpenBrowser } = require('webpack-open-browser')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const port = 9000

const url = 'http://localhost:' + port
module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  target: 'web',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port,
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new WebpackOpenBrowser({ url, browser: 'chrome' }),
    new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './src/**/*.{ts,tsx,js,jsx}'
      }
    })
  ]
})
