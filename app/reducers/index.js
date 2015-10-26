import usersReducer from "./usersReducers.js";
import authReducer from "./authReducer.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers(
    {
        usersReducer,
        authReducer
    }
);

export default rootReducer;