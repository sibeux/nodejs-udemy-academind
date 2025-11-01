const fs = require("fs");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write(
            "<body><form action='message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>"
        );
        res.write("</html>");
        return res.end;
    }
    if (method === "POST" && url === "/message") {
        const body = [];
        req.on("data", (chunck) => {
            console.log(chunck);
            body.push(chunck);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello from my NodeJS server</h1></body>");
    res.write("</html>");
    res.end;
};

// module.exports.handler = requestHandler;
// module.exports.text = "some text";
// exports.handler = requestHandler;
// exports.text = "some text";
module.exports = {
    handler: requestHandler,
    text: "some text",
};
