import User from "../../server/models/user.js";
import _ from "lodash";

export default (req, res) => {
    let id = req.params.id;

    User.findById(id).exec().then(
        (user) => {
            res.send(_.omit(user.toObject(), "password"));
        },
        (err) => {
            res.send({
                message: err,
                statusCode: 422
            });
        }
    );
};