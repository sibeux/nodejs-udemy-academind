const path = require("path");
const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
    res.sendFile(
        // '../../views/course-03/shop.html', // relative path not work here
        path.join(__dirname, "..", "..", "views", "course-03", "shop.html")
    );
});

module.exports = router;
