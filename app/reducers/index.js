import usersReducer from "./usersReducers.js";
import authReducer from "./authReducer.js";
import { combineReducers } from "redux";

const app = combineReducers(
    {
        usersReducer,
        authReducer
    }
);

export default app;