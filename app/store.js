import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from "./reducers";

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    thunkMiddleware
   // loggerMiddleware
)(createStore);

/*
 App State
 {

 }
 */
export function configureStore (initialState) {
    return createStoreWithMiddleware(reducer, initialState);
};
