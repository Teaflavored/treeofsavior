var path = require("path");
var WebpackIsomorphicTools = require('webpack-isomorphic-tools');
var webpack = require('webpack');

// https://github.com/halt-hammerzeit/webpack-isomorphic-tools
var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');
var webpackIsomorphicToolsPlugin = new WebpackIsomorphicToolsPlugin(require('./webpack-isomorphic-tools'));


module.exports = {
    context: path.resolve(__dirname, ".."),
    devtool: 'inline-source-map',
    entry: {
        main: [
            "bootstrap-sass!./config/bootstrap.config.js",
            "./app/app.js"
        ]
    },
    output: {
        path: path.join(__dirname, '..' ,'public', 'javascripts'),
        filename: '[name]-[hash].js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: "/javascripts/"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.scss$/,
                loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap'
            },
            {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/font-woff"
            },
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=application/octet-stream"
            },
            {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file"
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            }
        ]
    },
    resolve: {
        moduleDirectories: [
            "node_modules",
            "app"
        ],
        extensions: ["", ".json", ".js"]
    },
    plugins: [
        new webpack.IgnorePlugin(/webpack-stats\.json$/),
        webpackIsomorphicToolsPlugin.development()
    ]
};