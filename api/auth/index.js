import loginUser from "./loginUser.js";

export default (router) => {
    router.get("/login", loginUser);
};