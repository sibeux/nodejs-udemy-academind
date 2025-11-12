const path = require("path");
const express = require("express");
const rootDir = require("../../util/course-03/path");

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
    // res.send(
    //     "<form action='/admin/add-product' method='POST'><input type='text' name='title'><button type='submit'>Add product</button></form>"
    // );
    // res.sendFile(
    //     // rootDir merupakan path dari app.js
    //     path.join(rootDir, "..", "..", "views", "course-03", "add-product.html")
    // );
    res.render("add-product", { pageTitle: "Add Product" });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
    // console.log("response body:", req.body);
    // console.log("product title:", req.body.title);
    products.push({ title: req.body.title });
    res.redirect("/"); // Redirect to home page after form submission
});

exports.routes = router;
exports.products = products;
