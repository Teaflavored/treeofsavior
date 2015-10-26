import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./actionTypes.js";
import { AUTH_ENDPOINT } from "../../api/endpoints.js";
import fetch from "isomorphic-fetch";

function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}

function loginUserSuccess(data) {
    return {
        type: LOGIN_USER_SUCCESS,
        sessionUser: data.user
    }
}

export function loginUser() {
    return (dispatch) => {

        //start logging in user
        dispatch(loginUserRequest());

        fetch(AUTH_ENDPOINT)
        .then( response => response.json())
        .then( json => dispatch(loginUserSuccess(json)))

    }
}