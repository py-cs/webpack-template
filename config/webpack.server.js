import createConfig from './webpack.common';

module.exports = (env) => {
  const config = createConfig({ target: 'server', mode: env.production ? 'production' : 'development' });
  return {
    ...config,

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
    externals: {
      express: 'commonjs express',
      react: 'commonjs react',
      'react-dom/server': 'commonjs react-dom/server',
      'react-router': 'commonjs react-router',
      'react-router-dom': 'commonjs react-router-dom',
      fs: 'commonjs fs',
      path: 'commonjs path',
    },
  };
};
