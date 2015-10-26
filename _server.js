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
app.use("/api", apiRouter) ;

app.use( (req, res) => {

    res.send("<!DOCTYPE html>\n" + ReactDOM.renderToString(<Html />));
});

app.set('port', port);
const server = http.createServer(app);

server.listen(port);
server.on("listening", () => {
    console.log("server is running on port " + port);
});