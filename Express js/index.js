// express aik nodes js ka framework hai
// jisse hum easyly
// 1.api aaram se bna skte hai



// ye express nikli hai ye executable nhi ha

const express = require("express");

//  ab is app ke ander puri ki puri express js hai
const app = express();

app.get(""  ,(req , resp)=>{
    resp.send("<h1> Home page  </h2>")
}   );

app.get("/help"  , (req , resp)=>{
    resp.send("  <h1>this   is  the help page </h1>")
}  );


app.listen(2200);
