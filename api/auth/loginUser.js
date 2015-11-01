import passport from "passport";
import _ from "lodash";

export default (req, res) => {

    if (req.isAuthenticated()) {
        res.status(422);
        res.send({ error: "Already signed in" });
    }

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            res.send( { error: err.message } );
        } else if (!user) {
            res.send( { error : "Invalid credentials "} );
        } else if (user) {
            req.logIn(user, (err) => {
                if (err) {
                    res.send( { error: "Invalid crednetials "} );
                } else {
                    res.send(_.omit(user.toObject(), "password"));
                }
            });
        }
    })(req, res);
};