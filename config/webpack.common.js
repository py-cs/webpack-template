import path from 'path';

const createConfig = ({ target, mode }) => {
  const root = path.join(__dirname, '../');
  const src = path.join(root, 'src');
  const name = '[name].js';
  const dist = path.join(root, 'dist', target);

  return {
    name: target,
    entry: path.join(src, target),

    mode,

    output: {
      path: dist,
      filename: name,
    },

    resolve: {
      modules: [
        'node_modules',
        'src',
      ],
      extensions: ['.tsx', '.ts', '.js'],
    },

    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
  };
};

module.exports = {
  createConfig,
};
