const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/wordler-app.js',
  },
  devtool: 'source-map',
  // plugins: [
  //   new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  //   new HtmlWebpackPlugin({
  //     template: './index.html',
  //   }),
  // ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
    ],
  },
};
