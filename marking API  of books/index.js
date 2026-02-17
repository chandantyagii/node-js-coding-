import express from 'express';
import cors from "cors";


const app = express();

app.use(cors());

app.get("/"  , (req,resp)=>{
    resp.send("this is the home page");

});



app.get("/users", (req, resp) => {
    resp.json([
        { id: 1, name: "chandan" },
        { id: 2, name: "aryan" },
        { id: 3, name: "chandan" },
        { id: 4, name: "aryan" },
        { id: 5, name: "cndan" },
        { id: 6, name: "aryan" },
        { id: 7, name: "chandan" },
        { id: 8, name: "aryan" }
    ]);
});



app.listen(12000);

