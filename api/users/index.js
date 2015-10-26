import { USERS, USERS_ID } from "../endpoints.js"

import findUser from "./findUser.js";
import getUsers from "./getUsers.js";
import createUser from "./createUser.js";

export default (router) => {
    router.get(USERS_ID, findUser);
    router.get(USERS, getUsers);
    router.post(USERS, createUser);
}