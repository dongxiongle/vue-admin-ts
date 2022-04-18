const { webpack, DefinePlugin } = require('webpack');
const {merge} = require('webpack-merge');

const config = require('./webpack.base');

const devConfig = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  devServer: {
    port: 8090,
    open: true,
    hot:  true
  },
  plugins: [
    new DefinePlugin({
      APIURL: JSON.stringify('https://www.baidu.com')
    })
  ]
};

module.exports = merge(config, devConfig);