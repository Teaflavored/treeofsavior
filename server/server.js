var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require("compression");
var http = require('http');
var fs = require("fs");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

//middleware set up
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());

//logging
app.use(logger("dev", {
    stream: fs.createWriteStream( __dirname + "/logs/app.log", { "flags" : "w" })
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res) {
    res.render("index", {
        title: "test title"
    });
});

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
var server = http.createServer(app);

server.listen(port);
server.on("listening", function () {
    console.log("server is running on port " + port);
});
