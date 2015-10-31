import express from "express";
import path from "path";
import favicon from "serve-favicon";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";
import http from "http";
import session from "express-session";
import logger from "morgan";
import passport from "passport";
import React from "react";
import ReactDOM from "react-dom/server";
import db from "./server/_db";
import sessionConfig from "./config/session.js";
import passportConfig from "./config/passport.js";
import Html from "./app/components/html.js";
import registerApiEndpoints from "./api";
import getRoutes from "./app/routes.js";
import createHistory from 'history/lib/createMemoryHistory';
import WebpackIsomorphicTools from "webpack-isomorphic-tools";
import webpackIsomorphicToolsConfig from "./webpack/webpack-isomorphic-tools.js";
import { ReduxRouter } from "redux-router";
import { reduxReactRouter, match } from "redux-router/server";
import { configureStore } from "./app/store.js";
import { Provider } from 'react-redux';

db();
const app = express();
const port = process.env.PORT || '3000';
const webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig);
const resolveAssets = webpackIsomorphicTools.development(process.env.NODE_ENV == "development").server(path.resolve(__dirname, "."));

resolveAssets.then(
    () => {
        console.log("server assets resolved!");
        app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        app.use(compression());
        app.use(logger("dev"));
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

        app.use( (req, res) => {
            //used for testing
            if (process.env.NODE_ENV == "development") {
                // Do not cache webpack stats: the script file would change since
                // hot module replacement is enabled in the development env
                webpackIsomorphicTools.refresh();
            }

            const store = configureStore(reduxReactRouter, getRoutes, createHistory);
            store.dispatch(
                match(req.originalUrl, (error, redirectLocation, routerState) => {
                    const component = (

                        <Provider store={store} key="provider">
                            <ReduxRouter/>
                        </Provider>
                    );

                    const html = ReactDOM.renderToString(<Html assets={webpackIsomorphicTools.assets()} store={store} component={component} />);
                    res.send("<!DOCTYPE html>\n" + html);
                })
            );
        });

        app.set('port', port);
        const server = http.createServer(app);

        server.listen(port);
        server.on("listening", () => {
            console.log("server is running on port " + port);
        });
    },
    (err) => {
        console.log(err);
        process.exit(0);
    }
);

