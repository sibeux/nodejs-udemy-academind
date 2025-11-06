const path = require("path");
const express = require("express");
const rootDir = require("../../util/course-03/path");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
    res.sendFile(
        // rootDir merupakan path dari app.js
        path.join(rootDir, "..", "..", "views", "course-03", "shop.html")
    );
});

module.exports = router;
