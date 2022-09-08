const HtmlWebpackPlagin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')
const path = require('path');
const ProcessBarWebpackPlugin = require('progress-bar-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./example/index.tsx'],
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
		alias: {
			'@': path.resolve(__dirname, '../example')
		},
	},
  module: {
    rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					},
					{
						loader: 'inline-px-to-vw-loader',
						options: {
							noConvertPropertyList: ['columnCount'],
						}
					},
				]
			},
      { 
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: "babel-loader",
						options: {
							"presets": [
								[
									"@babel/preset-env",
									{
										targets: {
											edge: "17",
											firefox: "60",
											chrome: "67",
											safari: "11.1",
										},
										useBuiltIns: "usage",
										corejs: 2
									}
								],
								"@babel/preset-react"
							],
							plugins: ["@babel/plugin-syntax-import-meta"]
						}
					},
					// {
					// 	loader: path.resolve(__dirname, '../loaders/inlinePxToVW'),
					// 	options: {
					// 		noConvertPropertyList: ['columnCount'],
					// 	}
					// },
				]
			},
			{
				test: /\.(jpg|png|gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name]_[hash].[ext]',
						outputPath: 'images/',
						limit: 2048
					}
				}
			},
			{
				test: /\.(eot|ttf|svg|woff)$/,
				use: {
					loader: 'file-loader'
				}
			},
			{
				test: /\.(sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: false,
						},
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'sass-loader',
					'postcss-loader'
				],
			},
		]
  },
  plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlagin({
			template: './example/index.html',
		}),
		new MiniCssExtractPlugin({
      filename: '[name].css'
		}),
		new webpack.ProvidePlugin({ _	: 'lodash'}),
		new ProcessBarWebpackPlugin(),
		new webpack.DefinePlugin({
			PRODUCTION: JSON.stringify(true),
			VERSION: JSON.stringify('5fa3b9'),
			BROWSER_SUPPORTS_HTML5: true,
			TWO: '1+1',
			'typeof window': JSON.stringify('object'),
			'process.env': {
				NODE_ENV: JSON.stringify(process.env.NODE_ENV)
			},
		})
	],

	optimization: {
		usedExports: true,
		runtimeChunk: 'single',
		minimizer: [],
		splitChunks: {
			chunks: 'all',
			minSize: 2000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      automaticNameMaxLength: 30,
      name: true,
      cacheGroups: {
				pincode: {
          test: /[\\/]node_modules[\\/]?pin-code-react[\\/]/,
					priority: 40,
					chunks: 'all',
					name: 'pincode',
					reuseExistingChunk: true,
        },
				reactjs: {
          test: /[\\/]node_modules[\\/](react-dom|react)[\\/]/,
					priority: 10,
					name: 'reactjs',
					reuseExistingChunk: true,
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
					priority: 0,
					name: 'vendor',
					chunks: 'all',
					reuseExistingChunk: true,
        },
        default: {
          priority: -20,
					reuseExistingChunk: true,
					name: 'common'
        }
      }
		}
	}
}