const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const errorController = require("../../controllers/course-05/error");
// const expressHbs = require("express-handlebars");

const app = express();

// Pakai Handlebars sebagai View Engine
// app.engine(
//     "hbs",
//     expressHbs({
//         layoutsDir: "views/layouts/course-04/",
//         defaultLayout: "main-layout",
//         extname: "hbs",
//     })
// );
// app.set("view engine", "hbs");
// Namanya bebas, nanti ext menyesuaikan
// app.engine('handlebars', expressHbs());
app.set("view engine", "ejs");
// app.set("view engine", "handlebars");
// app.set("view engine", "pug");
app.set("views", path.join(__dirname, "..", "..", "views", "course-03"));

const adminRoutes = require("../../routes/course-03/admin");
const shopRoutes = require("../../routes/course-03/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "..", "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.pageNotFound);

app.listen(3000);
