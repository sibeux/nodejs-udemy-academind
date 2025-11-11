const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "..", "..", "views", "course-03"));

const adminData = require("../../routes/course-03/admin");
const shopRoutes = require("../../routes/course-03/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    res.status(404).sendFile(
        path.join(__dirname, "..", "..", "views", "course-03", "404.html")
    );
});

app.listen(3000);
