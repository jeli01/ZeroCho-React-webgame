const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다.
  resolve: {
    extensions: ['.js', '.jsx'] 
  },
  entry: {
    app: ['./client'],
  }, // 입력
  
  module: {
    rules: [{
      test: /\.jsx?/,
      loader: 'babel-loader',  // 바벨을 적용하겠다.
      options: {               // 바벨의 옵션을 넣자.
        presets: [
          ['@babel/preset-env', {
          targets: {
            browsers: ['> 1% in KR'],
          },
          debug: true,   // 개발용
        }],  '@babel/preset-react'],
        plugins: ['@babel/plugin-proposal-class-properties'],
      }
    }],
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({ debug: true}),
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  }, // 출력
};