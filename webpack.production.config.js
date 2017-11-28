var webpack = require('webpack');

module.exports = {
  entry: {
    'redux.dialog': __dirname + "/src/index.js",
    'redux.dialog.min': __dirname + "/src/index.js"
  },
  output: {
    path: __dirname + "/build",
    libraryTarget: 'umd',
    filename: "[name].js"
  },

  externals: [
    'classnames',
    'react',
    'react-dom',
    'react-redux',
    'redux'
  ],

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
