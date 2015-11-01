import {
        LOGIN_USER_REQUEST,
        LOGIN_USER_SUCCESS,
        LOGIN_USER_FAILURE,
        LOGOUT_USER_REQUEST,
        LOGOUT_USER_SUCCESS,
        LOGOUT_USER_FAILURE
    } from "./actionTypes.js";

import { AUTH_ENDPOINT } from "../../api/endpoints.js";
import apiUrlHelper from "./helpers/apiUrlHelper.js";
import actionParser from "./helpers/actionParser.js";
import fetch from "isomorphic-fetch";

function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}

export function loginUserSuccess(user) {
    return {
        type: LOGIN_USER_SUCCESS,
        sessionUser: user
    };
}

function loginUserFailure(error) {
    return {
        type: LOGIN_USER_FAILURE,
        error: error
    };
}

function logoutUserRequest() {
    return {
        type: LOGOUT_USER_REQUEST
    };
}

function logoutUserSuccess() {
    return {
        type: LOGOUT_USER_SUCCESS
    };
}

function logoutUserFailure(error) {
    return {
        type: LOGOUT_USER_FAILURE,
        error: error
    };
}

export function isLoggedIn(state) {
    return !!(state.auth && state.auth.sessionUser);
}

const url = apiUrlHelper(AUTH_ENDPOINT);

export function logoutUser() {
    return (dispatch) => {
        dispatch(logoutUserRequest());
        fetch(url, {
            method: "DELETE",
            headers: {
                "content-Type" : "application/json"
            },
            credentials: "same-origin"
        })
        .then(actionParser)
        .then(json => dispatch(logoutUserSuccess()),
                errorPromise => {
                    errorPromise.then(
                        errorJson => dispatch( logoutUserFailure(errorJson.error) )
                    )
                });
    }
}

export function loginUser(body) {
    return (dispatch) => {
        //start logging in user
        dispatch(loginUserRequest());

        fetch(url, {
            method: "POST",
            headers: {
                "content-Type" : "application/json"
            },
            body: JSON.stringify(body),
            credentials: "same-origin"
        })
        .then(actionParser)
        .then( json => dispatch(loginUserSuccess(json)),
                errorPromise => {
                errorPromise.then(
                        errorJson => dispatch( loginUserFailure(errorJson.error) )
                )
            });

    }
}