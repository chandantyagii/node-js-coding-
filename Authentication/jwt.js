// express → server banane ke liye
import express from 'express';

// jsonwebtoken → token banane/verify karne ke liye
import jwt from 'jsonwebtoken';

// cookie-parser → cookies read karne ke liye
import cookieParser from 'cookie-parser';


const app = express();



// Ab jab bhi request aayegi, cookies automatically req.cookies me convert ho jayengi(object me).
app.use(cookieParser());


app.get("/"   , (req,resp)=>{

 // jwt.sign() ek token string banayega.
 //   resp.cookie() browser me token naam se cookie save karega.
 // Browser ke paas ab token stored hai.

  let tooken =  jwt.sign(   {email:"chandantyagi837@gmail.com"}  , "secret"  );
  resp.cookie("token" , tooken);
  resp.send("done");

});

// above code  se server ne browser me cookie save kar di.
// Ab token browser ke paas store ho gaya.

// 🔹 Ab kya hoga ?

//   Jab bhi tum "/read" ya koi bhi dusra route hit karoge:

// Browser automatically cookie request ke saath bhejega.

// Server req.cookies.token se usse read karega.

app.get("/read", (req,resp)=>{

  console.log(req.cookies.token);
  resp.send(" end it ");
});

app.listen(2300);
