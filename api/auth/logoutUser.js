export default (req, res) => {
    if (!req.isAuthenticated()) {
        res.status(422);
        res.send({ error: "No logged in user "});
    }

    try {
        req.logout();
        res.send({ success : "success" });
    } catch (err) {
        res.status(422);
        res.send({ error: err.message });
    }

}