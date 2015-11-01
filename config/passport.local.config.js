import mongoose from "mongoose";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../server/models/user.js";

export default new LocalStrategy(
    {
        usernameField: "email"
    },
    (email, password, done) => {
        User.findOne( { email: email }).exec().then(
            (user) => {
                user.comparePassword(password, (err, isMatch) => {
                    if(isMatch) {
                        return done(null, user);
                    } else {
                        return done(null, false, { message: 'Invalid email or password'});
                    }
                });
            },
            (err) => {
                if (err) {
                    return done (null, false, { message: "Email " + email + " not found."});
                }
            }
        );
    }
);