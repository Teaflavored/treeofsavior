import usersApi from "./users/index.js";
import authApi from "./auth/index.js";
import skillsApi from "./skills/index.js";

export default (router) => {
    usersApi(router);
    authApi(router);
    skillsApi(router);
};