import mongoose from "mongoose";

export default function () {
    var dbUrl = process.env.DB_URL,
        dbRetries = process.env.DB_RETRIES || 10;

    if (!dbUrl) {
        console.log("DB_URL must be specified in environment");
        process.exit(0);
        return;
    }

    var connect = function () {
        mongoose.connect(dbUrl, function (err) {
            if (err) {
                console.log("Failed to connect to " + dbUrl);
                dbRetries--;

                if (dbRetries == 0) {
                    console.log("Cannot connect to " + dbUrl);
                    process.exit(0)
                }
            } else {
                console.log ("Successfully connected to mongodb");
            }
        });
    };

    connect();

    mongoose.connection.on('error', console.log);
    mongoose.connection.on('disconnected', connect);
};