import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import createConfig from './webpack.common';

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
