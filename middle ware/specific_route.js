import express from 'express';
const app = express();

function checkAge(req,resp)
{
    if(!req.query.age || req.query.age <18 )
    {
        resp.send("you are less then 18  by middleware");
    }   else {
        next();
    }
}

// second paramerter me middleware bhej diya

app.get("/", checkAge , (req,resp)=>{
    resp.send("you are at the home page");
} );



app.get("/about", checkAge , (req,resp)=>{
    resp.send("you are at the about page ")
} );

app.get("/contect", checkAge ,(req ,resp)=>{
    resp.send(" you are at the contect page");
});



app.listen(1000);
