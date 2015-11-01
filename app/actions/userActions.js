import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE }from "./actionTypes.js";
import { USERS_ENDPOINT } from "../../api/endpoints.js";
import apiUrlHelper from "./helpers/apiUrlHelper.js";
import actionParser from "./helpers/actionParser.js";
import fetch from "isomorphic-fetch";

function createUserRequest() {
    return {
        type: CREATE_USER_REQUEST
    };
}



function createUserSuccess(user) {
    return {
        type: CREATE_USER_SUCCESS,
        user: user
    };
}

function createUserFailure(error) {
    return {
        type: CREATE_USER_FAILURE,
        error
    }
}

export function createUser(body) {
    return (dispatch) => {
        dispatch( createUserRequest() );

        let url = apiUrlHelper(USERS_ENDPOINT);
        return fetch(url, {
            method: "POST",
            headers: {
                "content-Type" : "application/json"
            },
            body: JSON.stringify(body),
            credentials: 'same-origin'
        })
        .then( actionParser )
        .then(
                json => dispatch( createUserSuccess(json) ),
                errorPromise => {
                    errorPromise.then(
                            errorJson => dispatch( createUserFailure(errorJson.error) )
                    )
                });
    }
}