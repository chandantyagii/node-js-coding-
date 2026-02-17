// cookie kaise set karte hai
// bcrypt kaise use karte hai for password encryption
//  jwwt kya hai and kwt mein data kasie store karein and bahar nikaalein


// things kya performe kri one by one


// npm i init
// package.json me index.js ko app.js krr diya
//npm i jsonwebtoken bcrypt

import express from "express";
const app =  express();
app.get("/", (req, resp) => {

  // yha hun neeche cookie set krr diya hai 
  resp.cookie("name", "chandan");
  resp.send("kaam chattis");
});

app.get("/read" , (req,resp)=>{
    resp.send(("read page"));
});

app.listen(2000);
