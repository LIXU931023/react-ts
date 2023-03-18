const path = require('path');
const commonConfig = require('./webpack.common');
const merge = require('webpack-merge');
const WorkboxPlugin = require('workbox-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const productConfig = {
  mode: process.env.NODE_ENV,
  plugins: [
		new WorkboxPlugin.GenerateSW({
			clientsClaim: true,
			skipWaiting: true
		}),
		new BundleAnalyzerPlugin(),
	],
	optimization: {
		minimizer: [new TerserPlugin({
			parallel: true,
			cache: true,
		}), new OptimizeCssAssetsPlugin({}) ],
	},
	output: {
		filename: '[name].[contenthash].js',
		path: path.resolve(__dirname, '../dist'),
		publicPath: "/",
		chunkFilename: '[name].[contenthash].js',
	}
}
module.exports = merge(commonConfig, productConfig);