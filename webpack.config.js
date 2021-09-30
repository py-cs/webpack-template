const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = env => {
  const name = env.server ? 'server' : 'client'
  return {
    mode: env.production ? 'production' : 'development',
    entry: {
      app: [`./src/${name}/index.tsx`],
    },
    output: {
      path: path.resolve(__dirname, `dist${env.server ? '/server' : ''}`),
      filename: `${name}.js`,
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      modules: [
        'node_modules',
        'src'
      ]
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
          use: env.server ? 'null-loader' : [MiniCssExtractPlugin.loader, "css-loader"]
        }
      ],
    },
    externals: env.server ? {
      'express': 'commonjs express',
      'react': 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom',
      'fs': 'commonjs fs',
      'path': 'commonjs path',
    } : {},
    plugins: env.server ? [] :
    [
      new HtmlWebpackPlugin({
        template: './src/client/index.html',
      }),
      new MiniCssExtractPlugin()
    ]
  };
};
