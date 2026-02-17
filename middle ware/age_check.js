import express from 'express';

const app =  express();




/*

🔹 Difference
if (!age)


Means:

age is undefined

OR age is null

OR age is ""

OR age is "0"

OR age is 0

Any falsy value.
*/





function check_input_age(req,resp,next)
{

    //  yha req.query.age undifiend ko handle nhi krr skta isliye useing => !req.query.age

    if(  !req.query.age ||  req.query.age < 18 )
    {
        resp.send("you are not eligible ");
    }else{
        next();
    }
}

// app.use is use to elecute this

app.use(check_input_age);


// defailt or home route
app.get("/" ,(req,resp)=>{
    resp.send("you at home");
});



//
app.get("/contect", (req, resp) => {
    resp.send("you contect page ");
});

app.get("/login" , (req ,resp)=>{
    resp.send("you logedin ");
});


app.listen(2000);
