import { AUTH_ENDPOINT } from "../endpoints.js";
import loginUser from "./loginUser.js";
import logoutUser from "./logoutUser.js";

export default (router) => {
    router.post(AUTH_ENDPOINT, loginUser);
    router.delete(AUTH_ENDPOINT, logoutUser);
};