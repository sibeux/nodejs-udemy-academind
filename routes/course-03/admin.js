const path = require("path");
const express = require("express");

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    // res.send(
    //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
    // );
    res.sendFile(
        // '../../views/course-03/add-product.html', // relative path not work here
        path.join(
            __dirname,
            "..",
            "..",
            "views",
            "course-03",
            "add-product.html"
        )
    );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
    console.log("response body:", req.body);
    console.log("product title:", req.body.title);
    res.redirect("/"); // Redirect to home page after form submission
});

module.exports = router;
