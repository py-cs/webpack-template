/* eslint-disable @typescript-eslint/no-var-requires */
const nodeExternals = require('webpack-node-externals');
const { createConfig } = require('./webpack.common');

module.exports = (env) => {
  const config = createConfig({ target: 'server', mode: env.production ? 'production' : 'development' });
  return {
    ...config,

    target: 'node',

    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /\.css$/,
          use: 'null-loader',
        },
      ],
    },
    externals: [nodeExternals()],
  };
};
