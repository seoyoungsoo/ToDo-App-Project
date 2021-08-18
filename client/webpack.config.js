const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    historyApiFallback: true,
    port: 3030,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://localhost:3035',
        changeOrigin: true,
      },
    },
  },
};
