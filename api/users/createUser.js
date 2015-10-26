import User from "../../server/models/user.js";
import _ from "lodash";

export default (req, res) => {
    if (req.user) {
        res.send(new Error("Cannot create user."));
    }

    let user = new User(req.body);

    user.save().then(
        (user) => {
            res.send(_.omit(user.toObject(), "password"));
        },
        (err) => {
            res.send({
                message: err.message,
                statusCode: 422
            });
        }
    )
};