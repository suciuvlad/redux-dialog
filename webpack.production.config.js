var webpack = require('webpack');

module.exports = {
  entry: {
    'redux.dialog': __dirname + "/src/index.js",
    'redux.dialog.min': __dirname + "/src/index.js"
  },
  output: {
    path: __dirname + "/build",
    filename: "[name].js"
  },

  externals: [
    'classnames',
    'flex.dialog',
    'react',
    'react-dom',
    'react-redux',
    'jquery',
    'redux'
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
}
