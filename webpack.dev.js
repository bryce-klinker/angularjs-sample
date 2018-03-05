const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = webpackMerge(commonConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': 'development'
    })
  ]
});