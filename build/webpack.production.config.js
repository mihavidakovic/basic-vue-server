const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const config = require('../config/production.config')


module.exports = merge(base, {
	module: {
		rules: [
			{
				test: /\.sass$/,
				use: ExtractTextPlugin.extract({
					fallback: 'vue-style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: 'css/app.css'
		}),
		new UglifyJsPlugin(),
		new OptimizeCssAssetsPlugin(),
		new webpack.DefinePlugin({
			'process': {
				env: config
			}
		})
	]
})