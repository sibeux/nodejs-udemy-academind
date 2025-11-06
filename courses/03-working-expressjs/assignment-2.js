const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
    console.log("This always runs for /");
    next();
});

app.use("/users", (req, res, next) => {
    console.log("Request received users page:", req.method, req.url);
    res.send("<h1>The 'users' page</h1>");
});

app.listen(3000);
