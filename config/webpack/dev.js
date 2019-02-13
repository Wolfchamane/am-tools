const config = require('./base');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
        filename : 'index.html',
        template : 'index.html',
        inject   : true
    })
]);

module.exports = config;
