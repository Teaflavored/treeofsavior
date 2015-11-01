import User from "../server/models/user.js";
import localConfig from "./passport.local.config.js";

export default function (app, passport, config) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id).exec().then(
            function (user) {
                done (null, user);
            },
            function (err) {
                done(err, null);
            }
        );
    });

    //use the following strategies
    passport.use(localConfig);
};