const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
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

app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    // res.status(404).sendFile(
    //     path.join(__dirname, "..", "..", "views", "course-03", "404.html")
    // );
    res.status(404).render("404", { pageTitle: "Page Not Found" });
});

app.listen(3000);
