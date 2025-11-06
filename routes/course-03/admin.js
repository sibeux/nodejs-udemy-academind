const express = require('express');

const router = express.Router();

// /admin/add-playlist => GET
router.get("/add-playlist", (req, res, next) => {
    res.send(
        "<form action='/admin/add-playlist' method='POST'><input type='text' name='title'><button type='submit'>Add Playlist</button></form>"
    );
});

// /admin/add-playlist => POST
router.post("/add-playlist", (req, res, next) => {
    console.log("response body:", req.body);
    console.log("Playlist title:", req.body.title);
    res.redirect("/"); // Redirect to home page after form submission
});

module.exports = router;