import express from "express";
import path from "path";
import favicon from "serve-favicon";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import http from "http";
import db from "./_db";
import session from "express-session";
import sessionConfig from "./config/session.js";
import passportConfig from "./config/passport.js";
import passport from "passport";
import React from "react";
import ReactDOM from "react-dom/server";
import Html from "./app/components/html.jsx";

db();
var app = express();

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

app.use( (req, res) => {
    res.send("<!DOCTYPE html>\n" + ReactDOM.renderToString(React.createElement(Html)));
});

var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
server.on("listening", function () {
    console.log("server is running on port " + port);
});
