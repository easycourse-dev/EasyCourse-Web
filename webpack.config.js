/** ********************** EasyCourse-Web Server Script ******************** **/
/** ************************************************************************ **/

/** ************************* Webpack Configuration ************************ **/
'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'app/app.jsx')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].jsx',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  resolve: {
    root: path.resolve('./'),
    alias: {
      jsx: 'app/jsx',
      components: 'app/jsx/components',
      utils: 'app/jsx/utils'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        "presets": ["react", "es2015", "stage-0", "react-hmre"]
      }
    }, {
      test: /\.json?$/,
      loader: 'json'
    }, {
      test: /\.css$/,
      loader: 'style!css'
    }, {
      test: /img.*\.(jpg|jpeg|gif|png|svg)$/i,
      loader: 'url-loader?name=/app/img/[name].[ext]'
    }, {
      test: /\.ico$/,
      loader: 'file-loader?name=app/img/[name].[ext]'
    }]
  }
};
