import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from "./reducers";

export function configureStore (reduxReactRouter, getRoutes, createHistory, initialState) {
    const loggerMiddleware = createLogger();

    const store = compose(
        applyMiddleware(thunkMiddleware),
        reduxReactRouter({
                getRoutes,
                createHistory
        })
    )(createStore)(reducer, initialState);

    return store;
}
