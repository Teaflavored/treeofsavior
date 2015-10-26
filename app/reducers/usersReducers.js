import { CREATE_USER_REQUEST, CREATE_USER_SUCCESS } from "../actions/actionTypes.js";

const initialState = {
    users: [],
    isFetching: false
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case CREATE_USER_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case CREATE_USER_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                users: state.users.concat([action.user])
            });
        default:
            return state;
    }
}