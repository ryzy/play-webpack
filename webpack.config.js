const HtmlWebpackPlugin = require('html-webpack-plugin');
const marked = require('marked');

module.exports = {
  // entry: 'src/index.js',
  // output: { path: __dirname + '/dist', filename: 'main.js' },
  resolve: {
    modules: [
      './src',
      './node_modules'
    ],
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ],
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'html-loader'
          },
          {
            loader: 'markdown-loader',
            options: {
              pedantic: true,
              renderer: new marked.Renderer(),
            }
          }
        ]
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
