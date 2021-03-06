import usersReducer from "./usersReducers.js";
import authReducer from "./authReducer.js";
import { routerStateReducer } from 'redux-router';

import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        router: routerStateReducer,
        users: usersReducer,
        auth: authReducer
    }
);

export default rootReducer;