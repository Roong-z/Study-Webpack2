const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   mode: 'development',
   entry: { index: './source/index.js', about: './source/about.js' },
   output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name]_bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './source/study1.html',
         filename: './study1.html',
         chunks: ['study1'],
      }),
      new HtmlWebpackPlugin({
         template: './source/study2.html',
         filename: './study2.html',
         chunks: ['study2'],
      }),
   ],
};
