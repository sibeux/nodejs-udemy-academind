const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//     console.log("Request received 1:", req.method, req.url);
//     next(); // Allows the request to proceed to the next middleware
// });

app.use("/", (req, res, next) => {
    console.log("This always runs for /");
    next();
});

app.use("/add-playlist", (req, res, next) => {
    res.send(
        "<form action='/playlist' method='POST'><input type='text' name='title'><button type='submit'>Add Playlist</button></form>"
    );
});

app.post("/playlist", (req, res, next) => {
    console.log("response body:", req.body);
    console.log("Playlist title:", req.body.title);
    res.redirect("/"); // Redirect to home page after form submission
});

// setara degnan "/"
app.use((req, res, next) => {
    console.log("Request received 2:", req.method, req.url);
    res.send("<h1>Hello from Express!</h1>"); // Auto setHeaders as HTML
});

app.listen(3000);
