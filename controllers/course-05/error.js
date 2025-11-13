const path = require("../../util/course-03/path");

exports.pageNotFound = (req, res, next) => {
    // res.status(404).send("<h1>Page Not Found</h1>");
    // res.status(404).sendFile(
    //     path.join(__dirname, "..", "..", "views", "course-03", "404.html")
    // );
    res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
};
