import User from "../../server/models/user.js";
import _ from "lodash";

export default (req, res) => {
    if (req.user) {
        res.send(new Error("Cannot create user."));
    }

    let user = new User(req.body);

    user.save().then(
        (user) => {
            req.logIn(user, (err) => {
                if (err) {
                    res.redirect("/");
                }
                res.send(_.omit(user.toObject(), "password"));
            });
        },
        (err) => {
            let error = err.message;
            res.status(422);
            res.send({ error });
        }
    )
};