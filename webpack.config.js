const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/index.tsx'],
    vendor: ['react', 'react-dom'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extension: ['.ts', 'tsx', 'js', 'jsx', '.json']
  },
  devServer: {
    contentBase: './dist',
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
}