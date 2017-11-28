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
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
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
    historyApiFallback: true,
    inline: true
  }
}
