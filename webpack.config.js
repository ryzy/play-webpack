const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // entry: 'src/index.js',
  // output: { path: __dirname + '/dist', filename: 'main.js' },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: 'src/index.html' })
  ],
  optimization: {
    runtimeChunk: true,
  },
};
