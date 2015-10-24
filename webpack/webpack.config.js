var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, ".."),
    entry: {
        main: [
            "bootstrap-sass!./config/bootstrap.config.js",
            "./app/app.js"
        ]
    },
    output: {
        path: "./public/javascripts/",
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel"
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap")
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
    }
};