import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "./actionTypes.js";
import { AUTH_ENDPOINT } from "../../api/endpoints.js";
import apiUrlHelper from "./helpers/apiUrlHelper.js";
import actionParser from "./helpers/actionParser.js";
import fetch from "isomorphic-fetch";

function loginUserRequest() {
    return {
        type: LOGIN_USER_REQUEST
    };
}

function loginUserSuccess(user) {
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

export function isLoggedIn(state) {
    return state.auth && state.auth.sessionUser;
}

export function loginUser(body) {
    return (dispatch) => {
        //start logging in user
        dispatch(loginUserRequest());
        let url = apiUrlHelper(AUTH_ENDPOINT);

        fetch(url, {
            method: "POST",
            headers: {
                "content-Type" : "application/json"
            },
            body: JSON.stringify(body),
            credentials: 'same-origin'
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