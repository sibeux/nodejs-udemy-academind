const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    res.send(
        "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
    );
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
    console.log("response body:", req.body);
    console.log("product title:", req.body.title);
    res.redirect("/"); // Redirect to home page after form submission
});

module.exports = router;