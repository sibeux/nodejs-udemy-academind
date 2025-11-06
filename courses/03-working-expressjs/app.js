const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("../../routes/course-03/admin");
const shopRoutes = require("../../routes/course-03/shop");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

// app.use((req, res, next) => {
//     console.log("Request received 1:", req.method, req.url);
//     next(); // Allows the request to proceed to the next middleware
// });

// app.use("/", (req, res, next) => {
//     console.log("This always runs for /");
//     next();
// });

// setara degnan "/"
// app.use((req, res, next) => {
//     console.log("Request received 2:", req.method, req.url);
//     res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
// });

app.listen(3000);
