const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval',
  resolve: {
    extensions:['.jsx', '.js'],
  },

  entry: {
    app: ['./client'],
  },

  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env',  {
          targets: {
            browsers: ['> 1% in KR'],
          },
        }],
         '@babel/preset-react'],
      },
    }],
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'dist'),
  },
};