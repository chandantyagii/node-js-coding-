
const http = require('http');

// callback unction is that that passed inside a function and inside that we can it after some time

http.createServer(
    //  callback fucntion
    ( req ,resp )=>{
        resp.write("<h1>hlo i am  the html as reponse</h1>");

        // end krna bohat jarurui hai nhi to loading hoti hi rahegi
        resp.end("server");
    }
).listen(4900);

