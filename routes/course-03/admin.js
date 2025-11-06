const express = require('express');

const router = express.Router();

router.get("/add-playlist", (req, res, next) => {
    res.send(
        "<form action='/playlist' method='POST'><input type='text' name='title'><button type='submit'>Add Playlist</button></form>"
    );
});

router.post("/playlist", (req, res, next) => {
    console.log("response body:", req.body);
    console.log("Playlist title:", req.body.title);
    res.redirect("/"); // Redirect to home page after form submission
});

module.exports = router;