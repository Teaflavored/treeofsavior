import { LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "../actions/actionTypes.js";

const initialState = {
    sessionUser : null,
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
        default:
            return state;
    }
}