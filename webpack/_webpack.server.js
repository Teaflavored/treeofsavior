/*Webpack Hot loader*/
import Express from "express";
import webpack from "webpack";
import config from "./webpack.config.js";
import WebpackDevServer from "webpack-dev-server";

const app = new Express();
const host = "localhost";
const port = 3001;

const webpackServer = new WebpackDevServer(webpack(config),
    {
        contentBase: `http://${host}:${port}`,
        publicPath: config.output.publicPath,
        hot: true,
        historyApiFallback: true,
        stats: { colors: true },
        headers: {'Access-Control-Allow-Origin': '*'},
        proxy:  {
            "*" : "http://localhost:3000"
        }
    }
);

webpackServer.listen(port, host, (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(`WebpackDevServer is listening at ${host}:${port}`);
});