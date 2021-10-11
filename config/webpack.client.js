/* eslint-disable @typescript-eslint/no-var-requires */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { createConfig } = require('./webpack.common');

module.exports = (env) => {
  const config = createConfig({ target: 'client', mode: env?.production ? 'production' : 'development' });
  return {
    ...config,

    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/client/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
