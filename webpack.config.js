const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
console.log(path.resolve(__dirname, './static'))
module.exports = {
   entry: {
     app: './src/app.js'
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './dist'
   },
   plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new ManifestPlugin(),
    new CopyWebpackPlugin([
      {
        from: './static',
        to: './static',
        ignore: ['.*']
      }
    ])
   ],

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};