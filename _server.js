import express from "express";
import path from "path";
import favicon from "serve-favicon";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import http from "http";
import session from "express-session";
import passport from "passport";
import React from "react";
import ReactDOM from "react-dom/server";
import db from "./server/_db";
import sessionConfig from "./config/session.js";
import passportConfig from "./config/passport.js";
import Html from "./app/components/html.jsx";

import registerApiEndpoints from "./api"
import { configureStore } from "./app/store.js";

//import index from "./app/app.js";


db();
const app = express();
const port = process.env.PORT || '3000';


//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sessionConfig(session)));

//passport
passportConfig(app, passport);
app.use(passport.initialize());
app.use(passport.session());

//services
const apiRouter = express.Router();
registerApiEndpoints(apiRouter);
app.use("/api", apiRouter);

import { createUser } from "./app/actions/userActions.js";

/*app.use( (req, res) => {

    //used for testing
    const store = configureStore();

    const promise = store.dispatch(createUser({
        email: "random" + Math.random() + "@gmail.com",
        password: "testThis"
    }));

    promise.then( () => {
        console.log(store.getState());
        res.send("<!DOCTYPE html>\n" + ReactDOM.renderToString(<Html store={store}/>));
    });
   
});*/


/*app.use('/*', function(req, res) {
    res.sendFile(__dirname + '/app/index.html');
});*/
app.use(express.static(path.join(__dirname, 'app')));

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
    console.log("server is running on port " + port);
});

/*Webpack Hot loader*/
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack/webpack.config');

new WebpackDevServer(webpack(config), {
	  contentBase: __dirname,
	  publicPath: config.output.publicPath,
  	hot: true,
  	historyApiFallback: true,
    stats: { colors: true },
    proxy: {
     "*": "http://localhost:3000"
   }
}).listen('3001', "localhost", function(err, result) {
  if (err) {
     console.log(err);
  }
  console.log('WebpackDevServer is listening at localhost:3001');
});

