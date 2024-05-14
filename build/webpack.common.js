const HtmlWebpackPlagin = require('html-webpack-plugin')
const tsImportPluginFactory = require('ts-import-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
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
	externals: {
    'react': 'React',
		'react-dom': 'ReactDOM',
  },
  module: {
    rules: [
			{
        test: /\.worker\.ts$/i,
        loader: "worker-loader",
      },
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
							getCustomTransformers: () => ({
								before: [ tsImportPluginFactory({
									libraryName: 'antd',
									libraryDirectory: 'lib',
									style: 'css',
								}) ]
							}),
						}
					},
				]
			},
			{
				test: /\.(jpg|png|gif|svg)$/,
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
			{
				test: /\.less$/,
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
							importLoaders: 1
						}
					},
					{
						loader: 'less-loader',
					},
				],
			},
		]
  },
  plugins: [
		new CleanWebpackPlugin(),
		new AntdDayjsWebpackPlugin(),
		new HtmlWebpackPlagin({
			template: path.resolve(__dirname, '../public/index.html'),
		}),
		new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
			ignoreOrder: true,
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
		runtimeChunk: 'single',
		splitChunks: {
			minSize: 30000,
			maxSize: 240000,
			chunks: 'all',
      cacheGroups: {
				antIcon: {
          test: /[\\/]node_modules[\\/]@ant-design[\\/]/,
					priority: 40,
					name: 'ant-icon',
        },
				rcTreeAndTable: {
          test: /[\\/]node_modules[\\/](rc-table|rc-tree|rc-select)[\\/]/,
					priority: 43,
					name: 'rc-tree-and-table',
        },
				rcTriggerList: {
          test: /[\\/]node_modules[\\/](rc-align|rc-tree-select|rc-cascader|rc-menu|rc-field-form)[\\/]es/,
					priority: 41,
					name: 'rc-trigger-list',
        },
				rcUtils: {
          test: /[\\/]node_modules[\\/](rc-util|rc-notification|rc-trigger|rc-pagination|rc-virtual-list)[\\/]/,
					priority: 42,
					name: 'rc-util',
        },
				antdLib: {
          test: /[\\/]node_modules[\\/]antd[\\/]lib/,
					priority: 48,
					name: 'antdLib',
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
					priority: 2,
					name: 'vendor',
        },
				initialChunks: {
					priority: 0,
					name: 'initialChunks',
					chunks: 'initial',
				},
				default: {
					minChunks: 2,
          priority: -10,
					name: 'default'
        },
      }
		}
	}
}