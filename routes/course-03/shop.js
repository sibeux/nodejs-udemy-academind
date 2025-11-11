const path = require("path");
const express = require("express");
const rootDir = require("../../util/course-03/path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res, next) => {
    // res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
    console.log("shop.js adminData.products:", adminData.products);
    // res.sendFile(
    // // rootDir merupakan path dari app.js
    //     path.join(rootDir, "..", "..", "views", "course-03", "shop.html")
    // );
    res.render("shop", { prods: adminData.products, docTitle: "Shop" });
});

module.exports = router;
