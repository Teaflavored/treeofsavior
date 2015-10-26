import { CREATE_USER } from "../actions/actionTypes.js";

const initialState = {
    users: []
};

function users(state = initialState, action = {}) {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, { sessionUser: action.sessionUser });
        default:
            return state;
    }
};