module.exports = {
    entry: ["./app/app.js"],
    output: {
        path: "./public/javascripts/",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: "babel"
            }
        ]
    }
};