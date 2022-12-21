const { merge } = require('webpack-merge');
const { srcPath, publicUrlOrPath } = require('./paths');
const commonWebpack = require('./webpack.common');

module.exports = merge(commonWebpack, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Access-Control-Allow-Headers': '*',
    },
    compress: true,
    hot: true,
    static: {
      directory: srcPath,
      publicPath: [publicUrlOrPath],
    },
  },
});
