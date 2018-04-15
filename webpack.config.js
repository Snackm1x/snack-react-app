const webpack = require('webpack');
const path = require("path");

const config = {
  entry: "./src/index.jsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    inline: false,
    contentBase: "./dist"
  },
  resolve: {
      extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
          test: /\.jsx$|\.js$/,
          loaders: ['babel-loader'],
          exclude: /node_modules/,
          include: path.resolve(__dirname, './src')
        }
      ]
  }
};

module.exports = config;
