import express from 'express';
const app = express();

app.get("/"  , (req ,resp)=>{
    resp.send("home page");
} );


//  yha ager is rout ko access karange to direct
// sara error frontend prr show ho jayega

app.get("/users" , (req,resp)=>{
    resp.send1("users page");
}    );


// error bna bhi skte hai


app.get("/error" ,  (req,resp,next )=>{
    const error =  new Error('');
    error.status = 404;
//     Yaha tum manually error bana rahe ho aur next(error) se Express ko bol rahe ho:
// “Is error ko error middleware ko bhej do”
    next(error);
}   );




// jb bhi code fatega to se msg hoga
function  errorHandle(error , req, resp ,next){

    resp.status(   error.status || 500    ).send("code fatra hai baad me try karain dhanyawad");
}


app.use(errorHandle);
app.listen(1200);
