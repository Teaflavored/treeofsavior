import connectMongo from "connect-mongo";

module.exports = function (session) {
    var MongoStore = connectMongo(session);

    return {
        resave: true,
        saveUninitialized: true,
        key: 'sessionId',
        secret: process.env.SESSION_SECRET,
        cookie: {
            httpOnly: true
        },
        store: new MongoStore({ url: process.env.DB_URL, autoReconnect: true})
    }
};