import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS, CREATE_USER_FAILURE } from "../actions/actionTypes.js";

const initialState = {
    users: [],
    error: "",
    isFetching: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: ""
            });
        case CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                users: state.users.concat([action.user])
            });
        case CREATE_USER_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error
            });
        default:
            return state;
    }
}