import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default {
devtool: 'source-map',
entry: [
path.resolve(__dirname, './client/src/app/index.js')
],
target: 'web',
output: {
path: path.resolve(__dirname, './client/dist'),
publicPath: '/',
filename: 'bundle.js'
},
plugins: [
new HtmlWebpackPlugin({
template: './client/src/app/index.html',
inject: true
}),
new MiniCssExtractPlugin()
],
module: {
rules : [
{
test: /\.[s]css$/,
use: [MiniCssExtractPlugin.loader,'style-loader', 'css-loader', 'sass-loader'],

test: /\.js$/,
exclude: /node_modules/,
use: ['babel-loader'],
},
{
test: /\.css$/,
use: ['style-loader', 'css-loader'],
}
]
}
}