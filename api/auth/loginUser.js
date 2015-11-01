import passport from "passport";
import _ from "lodash";

export default (req, res) => {

    if (req.isAuthenticated()) {
        res.status(422);
        res.send({ error: "Already signed in" });
    }

    const error = "Invalid email or password";

    passport.authenticate("local", (err, user, info) => {
        if (err) {
            res.status(422);
            res.send( { error: err.message } );
        } else if (!user) {
            res.status(422);
            res.send( { error  } );
        } else if (user) {
            req.logIn(user, (err) => {
                if (err) {
                    res.status(422);
                    res.send( { error } );
                } else {
                    res.send(_.omit(user.toObject(), "password"));
                }
            });
        }
    })(req, res);
};