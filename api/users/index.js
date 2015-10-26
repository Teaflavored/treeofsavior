import { USERS_ENDPOINT, USERS_ID_ENDPOINT } from "../endpoints.js"

import findUser from "./findUser.js";
import getUsers from "./getUsers.js";
import createUser from "./createUser.js";

export default (router) => {
    router.get(USERS_ID_ENDPOINT, findUser);
    router.get(USERS_ENDPOINT, getUsers);
    router.post(USERS_ENDPOINT, createUser);
}