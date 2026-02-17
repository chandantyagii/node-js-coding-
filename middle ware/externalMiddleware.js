import express from'express';

import morgan from 'morgan'
//  express ki power app  me aagi
const app = express();

// this teel where the route in th eurl
// exists or not
//  if not exist then it will give us error code 404
app.use(  morgan('dev')  ) ;


// yo aik route hai bhai

app.get("/"    , (req,resp)=>{
    resp.send("Home page");
}    );



app.get("/users"   , (req,resp)=>{

    resp.send("users page");
}      );



// here on the terminal we can se after how much time server send the response]
// time aout lga rkha 1 sec ka to teminal bhi 1 sec dikhega
// request resolve hone middleware

app.get("/about"  ,(req,resp)=>{
    setTimeout(  ()=>{

        resp.send("request after 1 second");
    }   ,1000  );

}   );





app.listen(1200);
