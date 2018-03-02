const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
        test: /.(css|scss)$/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader?limit=10000'
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'src', 'index.html'),
      inject: 'body'
    })
  ]
};
