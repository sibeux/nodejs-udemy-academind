const path = require("path");
const express = require("express");
const rootDir = require("../../util/course-03/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
    const products = adminData.products;
    console.log("shop.js adminData.products:", products);
    // res.sendFile(
    // // rootDir merupakan path dari app.js
    //     path.join(rootDir, "..", "..", "views", "course-03", "shop.html")
    // );
    res.render("shop", {
        prods: products,
        pageTitle: "Shop",
        path: "/",
        hasProduct: products.length > 0,
        activeShop: true,
    });
});

module.exports = router;
