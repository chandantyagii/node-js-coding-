import express from 'express'
const app = express();





// to call the midlle ware we have to use the bellow function

app.use(
    function checkRout(req, resp, next) {
    console.log("user is accesing thiss  " + req.url );

       //  yha " next() " ka kaam hota hai request ko next middleware / route tak bhejna.
        next();

});




app.get("/",

    (req, resp) => {
        resp.send("you are at the home page ");
    }

);

app.get("/about", (req, resp) => {

    resp.send("you are at the about page ");

});

app.get(  "/contect"  ,  (req,resp)=>{

    resp.send(" you are at the contect page")
}  );


app.listen(2300);

