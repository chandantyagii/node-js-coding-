const http =require('http');
 
const server = http.createServer(

    (req , resp)=>{

        // header is use to set the header for the
        resp.setHeader("Content-Type", "text/html");

        resp.write("  <h2>tyagi g<h2/> ");
        resp.end("end");
    }



    );

server.listen(4200);
