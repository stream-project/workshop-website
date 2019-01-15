const path = require('path'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    main: './src',
  },
  module: {
    rules: [
      {
        test: /.scss$/,
        loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
      }
    ]
  },
  output: { filename: '[name].js' },
  plugins: [new ExtractTextPlugin({
    filename: '[name].css',
    allChunks: true,
  })],
  performance: { hints: false }
}
