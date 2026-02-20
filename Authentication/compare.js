import express from 'express';
import bcrypt from 'bcrypt';
const app= express();




app.get("/" , (req,resp)=>{
   bcrypt.compare(".gp258dmw", "$2b$10$c7B6GmBwENPztk6aTKoyPuMsm65PtOu9BROj4uhB0z0OegPZkueKS"    ,
    function (err ,result){
        console.log(result);

    }
     );
    resp.send("hlo ji")
});


app.listen(1300);
