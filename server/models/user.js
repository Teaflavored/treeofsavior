import mongoose from "mongoose";
import bcrypt from "bcrypt-nodejs";
import shortid from "shortid";

let UserSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        'default': shortid.generate
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', (next) => {
    let user = this;
    if (!user.isModified('password')) return next();

    bcrypt.genSalt(5, (err, salt) => {
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, null, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods = {
    comparePassword: function(candidatePassword, cb) {
        bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
            if(err) {
                return cb(err);
            }

            cb(null, isMatch);
        })
    }
};

export default mongoose.model('User', UserSchema);