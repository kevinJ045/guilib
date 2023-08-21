const path = require('path');
const sass = require('sass');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve('./public/js'),
    filename: 'main.js',
  },
  resolve: {
    modules: [path.resolve('./src/'), path.resolve('./node_modules')],
  },
  watch: true,
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
    mangleExports: false
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html' // Path to your HTML template
      })
  ],
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              // Prefer `dart-sass`
              implementation: sass,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
        ]
      }
    ]
  }
}
