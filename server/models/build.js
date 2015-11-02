import mongoose from "mongoose";
import shortid from "shortid";

/*
    character builds, easiest way is to save a json blob with a reference to the user
    votes up and down
 */
let buildSchema