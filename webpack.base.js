const HtmlWebpackPlugin = require('html-webpack-plugin');
const {ProvidePlugin} = require("webpack");
const {resolve, join} = require('path');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
  entry: './src/main.ts',
  output: {
    filename: 'static/js/[name].[chunkhash:6].js',
    path: resolve(__dirname, 'dist'),
    clean: true
  },
  resolve: {
    extensions: ['.ts','.js']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.tsx?$/,
        loader: 'swc-loader',
        // loader: 'ts-loader',
        include: resolve(__dirname, 'src'),
        options: {
          // appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
        generator: {
          filename: 'static/images/[name][contenthash:6][ext][query]'
        }
      },
      {
        test: /\.(mp3|mp4)(\?.*)?$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name][contenthash:6][ext][query]'
        }
      },
      {
        test: /\.(xlsx|txt)(\?.*)?$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
        generator: {
          filename: 'static/files/[name][contenthash:6][ext][query]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        dependency: { not: ['url'] },
        type: 'asset/resource',
        generator: {
          filename: 'static/fonts/[name][contenthash:6][ext][query]'
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: 'vue-admin-ts',
      template: resolve(__dirname, 'index.html')
    }),
    new ProvidePlugin({
      $Ajax: [resolve(join(__dirname, 'src/common/api.ts')), 'default'],
      $FormPost: [resolve(join(__dirname, 'src/common/api.ts')), 'formPost']
    })
  ]
}