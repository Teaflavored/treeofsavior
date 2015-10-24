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

db();
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

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

app.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

var port = process.env.PORT || '3000';
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
server.on("listening", function () {
    console.log("server is running on port " + port);
});
