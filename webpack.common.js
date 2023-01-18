'use strict';

const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    content: './src/content.js',
    pageWorld: '@inboxsdk/core/pageWorld.js',
    background: ['./src/serviceWorker.js', '@inboxsdk/core/background.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        enforce: "pre",
        use: ["source-map-loader"],
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    // Dummy value that will be replaced by a dynamic value at runtime.
    publicPath: 'webpack://',
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "static" },
      ],
    }),
  ],
};
