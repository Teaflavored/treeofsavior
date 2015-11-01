import loginUser from "./loginUser.js";
import logoutUser from "./logoutUser.js";

export default (router) => {
    router.post("/login", loginUser);
};