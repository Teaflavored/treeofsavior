import UserService from "../services/userService.js";

export default function (Fetchr) {
    Fetchr.registerService(UserService);
}