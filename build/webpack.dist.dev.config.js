const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpackBaseConfig = require('./webpack.base.config.js');

process.env.NODE_ENV = 'production';

module.exports = merge(webpackBaseConfig, {
  devtool: 'source-map',
  entry: {
    main: './src/index.js'
  },
  mode: 'development',

  output: {
    path: path.resolve(__dirname, '../dist'),
    // publicPath: '/dist/',
    publicPath: '/',
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'tis',
    umdNamedDefine: true
  },
  resolve:{
    extensions: ['.js', '.vue','css','.less'],
    alias: {
      '@':path.resolve(__dirname,'../src'),
      '_c':path.resolve(__dirname,'../src/components')
      // XXXXXX: path.resolve(__dirname, 'config')
    }
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  plugins: [
    // @todo
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new VueLoaderPlugin()
  ]
});
