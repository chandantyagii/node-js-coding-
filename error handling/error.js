//jab bhi server request server prr jaati hai iske beech hum request ko rok skte hai
//aur kuch performe krte hai is element ko hi middleware khte hai



const express = require('express');
const app = express();




app.get("/about" , (req,resp, next)=>{
    // error aaya to ye jayega console pe

    return
}  );

app.use( (  err , req ,resp  , next )=>{
    console.error(err.stack);
    // bellow wala jayega front end pe
    req.status(500).send('something broke');
})

app.listen(2300);

