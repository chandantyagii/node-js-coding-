import express from 'express';
import bcrypt from 'bcrypt';

// this bcrypt is use to encrpt and dcrypt the information

const app =  express();


app.get( "/"   ,(req,resp)=>{



 bcrypt.genSalt(saltRounds, function (err, salt) {

    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
        // Store hash in your password DB.
    });



}     );
}



);



app.listedn(1200);
