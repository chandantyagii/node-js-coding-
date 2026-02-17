const http = require('http');


const userData = [
    {
        name: "chandan",
        age: 19,
        rollno: 1
    },
    {
        name: "chandan",
        age: 19,
        rollno: 1
    },
    {
        name: "chandan",
        age: 19,
        rollno: 1
    }
]


const server =  http.createServer(


(req , resp )=>{

    //  by the bellow code we can understand
    // how api call done
    // console.log(req.method);

    if ( req.url == "/")
    {
        
    }


    // jb bhi api bnti haai to
    //header bhi define krna pdta hai

    resp.setHeader("Content-Type", "application/json")




    //direct js obj nhi pass krr skte
    // ise json format me convert krte hai
    resp.write( JSON.stringify(userData) );

    resp.end( );
}
);

server.listen("6001");
