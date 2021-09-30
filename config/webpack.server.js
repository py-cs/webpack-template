const path = require('path');

module.exports = {
  mode: "development",
  entry: {
    app: ['./src/server/server.tsx'],
  },
  output: {
    path: path.resolve(__dirname, '..', 'dist', 'server'),
    filename: 'main.js',
  },
  devtool: 'source-map',
  resolve: {
    modules: [
      'node_modules',
      'src'
    ],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: 'null-loader'
      }
    ],
  },
  externals: {
    'express': 'commonjs express',
    'react': 'commonjs react',
    'react-dom/server': 'commonjs react-dom/server',
    'react-router': 'commonjs react-router',
    'react-router-dom': 'commonjs react-router-dom',
    'fs': 'commonjs fs',
    'path': 'commonjs path',
  },
};
