// cookie kaise set karte hai
// bcrypt kaise use karte hai for password encryption
//  jwwt kya hai and kwt mein data kasie store karein and bahar nikaalein


// things kya performe kri one by one


// npm i init
// package.json me index.js ko app.js krr diya


//npm i jsonwebtoken bcrypt

import express from "express";
import cookieParser  from "cookie-parser";

const app =  express();

// ise use krne se hi
app.use(cookieParser());


app.get("/", (req, resp) => {

  // yha hun neeche cookie set krr diya hai
  // server se browser prr kuch save krwate hai

  resp.cookie("name", "chandan  ");
  resp.send("kaam chattis");
});

app.get("/read" , (req,resp)=>{
    resp.send(("read page"));

    // cookie parser set hone ke baad hi hum console.log()  krr skte hai
    // yha hum home route prr set hui cookie dekh skte hai

    console.log(req.cookies);
});

app.listen(2000);
