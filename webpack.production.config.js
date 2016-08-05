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
    'flex.dialog',
    'react',
    'react-dom',
    'react-redux',
    'jquery',
    'redux'
  ],

  // externals: {
  //   react: 'React',
  //   'classnames': 'classnames',
  //   'react-redux': 'react-redux',
  //   'jquery': 'jquery',
  //   'redux': 'redux',
  //   'flex.dialog': 'flex.dialog',
  //   'react-dom': 'ReactDOM'
  // },

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
