const path = require('path');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ip = require('ip');



let port = 9000;
process.argv.forEach((i, index) => {
	if (i === '--port') {
		port = Number(process.argv[index + 1].trim());
	}
});



const devConfig = {
		mode: process.env.NODE_ENV,
		devtool: 'cheap-module-eval-source-map',
		devServer: {
			contentBase: path.resolve(__dirname, "../example"),
			compress: true,
			historyApiFallback: true,
			port,
			stats: 'errors-only',
			proxy: {
				'/class': {
					target: 'https://coding.imooc.com',
					pathRewrite: {},
					secure: false,
					changeOrigin: true
				}
			}
		},
		plugins: [
			new MiniCssExtractPlugin({
				filename: '[name].css'
			}),
			new ForkTsCheckerWebpackPlugin(),
			new FriendlyErrorsWebpackPlugin({
				compilationSuccessInfo: {
					messages: [
						`App runing at:`,
						`Local: http://localhost:${port}`,
						`Network: http://${ip.address()}:${port}`
					]
				}
			})
		],
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../dist'),
			publicPath: "/",
		}
}

module.exports = merge(commonConfig, devConfig);