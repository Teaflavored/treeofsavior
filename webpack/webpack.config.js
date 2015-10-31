var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    context: path.resolve(__dirname, ".."),
    devtool: 'eval',
    entry:  [
            "bootstrap-sass!./config/bootstrap.config.js",
            "./app/app.js"
    ],
    output: {
        path: path.join(__dirname, '..' ,'public', 'javascripts'),
        filename: "main.js",
        publicPath: "/public/javascripts"
    },
    plugins: [
        new ExtractTextPlugin("styles.css", { allChunks: true })
    ],
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
                loader: ExtractTextPlugin.extract("style-loader", "css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap", { publicPath: "/public/stylesheets" })
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
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            }
        ]
    },
    resolve: {
        moduleDirectories: [
            "node_modules",
            "app"
        ],
        extensions: ["", ".json", ".js", "jsx"]
    }
};