const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        app:  './src/index.js',
        game:  './src/js/game.js',
    },
    devtool: 'inline-source-map',
    devServer: {
	contentBase: './dist',
    },
    plugins: [
	new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            title: 'Game Click Duplo',
        }),
    ],
    output: {
	filename: '[name].bundle.js',
	path: path.resolve(__dirname, 'dist'),
	publicPath: '/',
    },
    module: {
	rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
	    {
		test: /\.(png|svg|jpg|gif)$/,
		use: ['file-loader',],
	    },
	],
    },
};
