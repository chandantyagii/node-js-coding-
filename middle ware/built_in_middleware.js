import express from 'express';
const app = express();


app.get("/", (req, resp) => {

    resp.send("home page");
});

// it is a built in middleware of express js 

app.use( express.urlencoded( { extended:false } ) ) ;

app.get("/login",
    (req, resp) => {
    resp.send(`
           <form action="/submit" method="post" >
        <input type = "text" placeholder ="enter email" name="email" >
        <input type="text" placeholder="enter password" name="password"   >
            <button>Login</button>
        </form>`);
});


app.post("/submit" ,   (req,resp)=>{
     //  yha req.body hume form data nhi deti undefined deti hai
     console.log("user login details" , req.body);

     resp.send("form is submited sucessfully");

}   );

app.listen(1500);
