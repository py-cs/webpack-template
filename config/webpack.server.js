// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createConfig } = require('./webpack.common');

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
      crypto: 'commonjs crypto',
      os: 'commonjs os',
      http: 'commonjs http',
      dns: 'commonjs dns',
      util: 'commonjs util',
      stream: 'commonjs stream',
      tls: 'commonjs tls',
      net: 'commonjs net',
      kerberos: 'commonjs kerberos',
      zlib: 'commonjs zlib',
      bson: 'commonjs bson',
      'bson-ext': 'commonjs bson-ext',
      snappy: 'commonjs snappy',
      aws4: 'commonjs aws4',
      'mongodb-client-encryption': 'mongodb-client-encryption',
    },
  };
};
