const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	mode: 'development',
	//entry: ["babel-polyfill", "./src/app.js"],
	entry: {
		app: './src/app.js'
		//app: ['babel-polyfill', './src/app.js']
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	devtool: 'inline-source-map',
	devServer: {
		headers: {

		},
		//host: '0.0.0.0',
		contentBase: './dist',
		compress: true,
		port: 3000,
		//bonjour: true,
		open: true
	},
	module: {
		rules: [
			{
				test: /\.hbs$/,
				loader: 'handlebars-loader'
			},
			{
				test: /\.js$/, 
				//exclude: /node_modules/, 
				loader: "babel-loader" 
			}
		]
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
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
};