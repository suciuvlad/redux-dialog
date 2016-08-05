var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/examples/index.js",
  output: {
    path: __dirname + "/dist",
    publicPath: '/',
    filename: "index.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },

      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/examples/index.tmpl.html"
    })
  ],

  devServer: {
    contentBase: "./public",
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}
