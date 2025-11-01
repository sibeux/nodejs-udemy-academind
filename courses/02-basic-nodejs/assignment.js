const http = require("http");

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.write("<html>");
        res.write("<head><title>Enter message</title></head>");
        res.write("<body><h1>Hello there</h1></body>");
        res.write(
            "<body><form action='create-user' method='POST'><input type='text' name='message'><button type='submit'>Send</button></input></form></body>"
        );
        res.write("</html>");
        return res.end;
    }
    if (url === "/users") {
        res.write("<html>");
        res.write("<head><title>Users Page</title></head>");
        res.write("<body><ul><li>User 1</li><li>User 2</li></ul></body>");
        res.write("</html>");
        return res.end;
    }
    if (method === "POST" && url === "/create-user") {
        const body = [];
        req.on("data", (chunck) => {
            console.log(chunck);
            body.push(chunck);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split("=")[1];
            console.log(message);
        });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first page</title></head>");
    res.write("<body><h1>Hello from my NodeJS server</h1></body>");
    res.write("</html>");
    res.end;
};

const server = http.createServer(requestHandler);

server.listen(3000);
