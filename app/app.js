import "babel/polyfill.js";
import React from "react";
import ReactDOM from "react-dom";
import createHistory from "history/lib/createBrowserHistory";
import { configureStore } from "./store.js";
import getRoutes from "./routes.js";
import {Provider} from 'react-redux';
import {reduxReactRouter, ReduxRouter} from 'redux-router';

const root = document.getElementById("root");
const store = configureStore(reduxReactRouter, getRoutes, createHistory, window.__data);

const component = (
    <ReduxRouter routes={getRoutes(store)}/>
);

ReactDOM.render(
    <Provider store={store}>
        { component }
    </Provider>,
    root
);

