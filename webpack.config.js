const path = require('path');
const sass = require('sass');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    path: path.resolve('./public/js'),
    filename: 'main.js',
  },
  resolve: {
    modules: [path.resolve('./src/'), path.resolve('./node_modules')],
    extensions: [".ts", ".tsx", ".js"]
  },
  watch: true,
  optimization: {
    chunkIds: 'named',
    moduleIds: 'named',
    mangleExports: false
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: [
          'babel-loader',
          'ts-loader'
        ],
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
    //   {
    //     test: /\.js$/,
    //     exclude: /node_modules/,
    //     use: {
    //       loader: 'babel-loader',
    //       options: {
    //         presets: [
    //           ['./preset-f7-jsx.js']
    //         ]
    //       }
    //     }
    //   }
    // ],
  }
}