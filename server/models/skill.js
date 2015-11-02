import mongoose from "mongoose";
import shortid from "shortid";

let SkillSchema = new mongoose.Schema({
    _id: {
        type: String,
        unique: true,
        "default": shortid.generate
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    maxLevel: {
        type: Number,
        "default" : 0
    }
});

export default mongoose.model("Skill", SkillSchema);