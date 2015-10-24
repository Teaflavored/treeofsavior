import mongoose from "mongoose";
import passportLocal from "passport-local";
import User from "../models/user.js";

var LocalStrategy = passportLocal.Strategy;

module.exports = new LocalStrategy(
    {
        usernameField: "email"
    },
    function (email, password, done) {
        User.findOne( { email: email }).exec().then(
            function (user) {
                user.comparePassword(password, function (err, isMatch) {
                    if(isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Invalid email or password'});
                    }
                });
            },
            function (err) {
                if (err) {
                    return done (null, false, { message: "Email " + email + " not found."});
                }
            }
        );
    }
);