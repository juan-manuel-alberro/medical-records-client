const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const cssnext = require('postcss-cssnext');
const impy = require('postcss-import');
const common = require('./webpack.common');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'eventsource-polyfill',
    'webpack-hot-middleware/client',
    './src/App'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot-loader/webpack', 'babel'],
        path: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.png$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpg|gif)$/,
        loader: 'file-loader'
      }
    ]
  },
  postcss: common.postcss(impy, cssnext, autoprefixer)
};
