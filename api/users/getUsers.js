import User from "../../server/models/user.js";
import _ from "lodash";

export default (req, res) => {
    User.find({}).exec().then(
        (users) => {
            res.send(users.map(
                        user => _.omit(user.toObject(), "password")
            ));
        },
        (err) => {
            res.send({
                message: err.message,
                statusCode: 422
            });
        }
    )
};