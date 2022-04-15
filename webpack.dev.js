const { webpack, DefinePlugin } = require('webpack');
const {merge} = require('webpack-merge');

const config = require('./webpack.base');

const devConfig = {
  mode: 'development',
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