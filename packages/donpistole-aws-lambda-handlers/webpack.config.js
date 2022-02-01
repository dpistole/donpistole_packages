/* eslint-disable @typescript-eslint/no-var-requires */

const webpack = require('webpack');
const path = require('path');
const ZipPlugin = require('zip-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  target: 'node',
  plugins: [
    new ZipPlugin({
      filename: 'handlers.zip',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    node: '12',
                  },
                },
              ],
              ['@babel/preset-typescript'],
            ],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['node_modules', './src/'],
    extensions: ['.ts', '.js'],
    symlinks: false,
  },
  externals: {
    'aws-sdk': 'aws-sdk',
    'aws-crt': 'aws-crt',
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
};
