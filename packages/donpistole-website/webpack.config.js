require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DotEnvPlugin = require('dotenv-webpack');

const webpackEnv = process.env.WEBPACK_ENV;

const isEnvDevelopment = webpackEnv === 'development';
const isEnvProduction = webpackEnv === 'production';

console.log('process.env.WEBPACK_ENV: ', process.env.WEBPACK_ENV);

module.exports = {
  mode: isEnvProduction ? 'production' : 'development',
  devtool: isEnvProduction ? 'cheap-source-map' : 'eval-source-map',
  entry: './src/index.tsx',
  output: {
    library: {
      name: 'donpistolewebsite',
      type: 'umd',
    },
    filename: isEnvProduction ? '[name].[hash].js' : 'dev-bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: process.env.PUBLIC_PATH || '/',
    clean: true,
  },
  devServer: {
    static: './dist',
    historyApiFallback: true,
    port: process.env.PORT || 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
    new DotEnvPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.ts|tsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(woff|woff2|ttf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]',
        },
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.svg$|\.wav$|\.mp3$/,
        loader: 'file-loader',
        options: {
          limit: 4096,
          name: 'assets/[name].[ext]',
        },
      },
    ],
  },
  resolve: {
    alias: {
      // alias react to allow for symlinked development to packages with their own react instances
      react: path.resolve(__dirname, '../../node_modules/react'),
      'react-dom': path.resolve(__dirname, '../../node_modules/react-dom'),
    },
    modules: ['node_modules', 'src/'],
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
    fallback: {
      path: false,
      fs: false,
    },
  },
};
