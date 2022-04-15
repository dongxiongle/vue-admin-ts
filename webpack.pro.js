const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge')
const config = require('./webpack.base');
const CompressionPlugin = require('compression-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const prodConfig = {
  mode: 'production',
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash].css",
    }),
    new DefinePlugin({
      APIURL: JSON.stringify('https://www.baidu.com')
    }),
    new CompressionPlugin({
      algorithm: 'gzip'
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    }
  }
}
module.exports = merge(config, prodConfig);