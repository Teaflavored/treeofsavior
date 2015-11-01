import usersApi from "./users";
import authApi from "./auth";

export default (router) => {
    usersApi(router);
    authApi(router);
};