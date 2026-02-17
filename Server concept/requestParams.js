const http = require("http");

const server = http.createServer(
    (req, resp) => {

        if (req.url == '/') {
            resp.write("<h1> Home page  </h1>");
        } else if (req.url == '/login') {
            resp.write("<h1> Login page</h1>");
        }
        else if (req.url == '/help') {
            resp.write("<h1>this is the help page <h1/>");
        }else{
            resp.write("<h1>  other page</h1>");
        }

        resp.end();
    }
);

server.listen("5100");
