import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE } from "../actions/actionTypes.js";

const initialState = {
    sessionUser : null,
    error: "",
    isFetching: false
};

export default (state = initialState, action = {} ) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return Object.assign({}, state,
                {
                    isFetching: true
                }
            );
        case LOGIN_USER_SUCCESS:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    sessionUser: action.sessionUser
                }
            );
        case LOGIN_USER_FAILURE:
            return Object.assign({}, state,
                {
                    isFetching: false,
                    error: action.error
                }
            );
        default:
            return state;
    }
}