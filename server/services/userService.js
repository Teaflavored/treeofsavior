import User from "../models/user.js";

const FAILED_TO_CREATE_ERROR = new Error("Cannot create user");
export default {
    name: "users",
    read: function (req, resource, params, config, callback) {
        User.findById(params).exec().then(
            function(user) {
                return callback(null, user);
            },
            function(err) {
                err.statusCode = 422;
                return callback(err);
            }
        );
    },
    create: function (req, resource, params, body, config, callback) {
        if (req.user) {
            return callback(FAILED_TO_CREATE_ERROR);
        }

        var user = new User(body);

        user.save().then(
            function (user) {
                return callback(null, user);
            },
            function (err) {
                err.statusCode = 422;
                return callback(err);
            }
        )
    }
};