/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const process = require('process');
const webpack = require('webpack');
const DotEnvPlugin = require('dotenv-webpack');

require('dotenv').config();

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    watchContentBase: true,
    historyApiFallback: true,
    hot: true,
    port: process.env.PORT || 3000,
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    library: {
      name: 'donpistoleapi',
      type: 'umd',
    },
  },
  plugins: [new DotEnvPlugin()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
};
