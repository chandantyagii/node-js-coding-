import express from 'express';
import bcrypt from 'bcrypt';

// this bcrypt is use to encrpt and dcrypt the information

const app = express();


// is route pe jaate hi  "/" function chal jayega

app.get("/",
    (req, resp) => {

// 10 default value hai
        bcrypt.genSalt(10, function (err, salt) {

            //  bs aik random string hai jise salt khte hai
            console.log(salt );

            bcrypt.hash( ".gp258dmw", salt, function (err, hash) {

                // is hash ko hum apna password maan skte hai
                // and store krrr skte hai
              console.log(hash);
              resp.send(hash);
            });



        });






    }



);



app.listen(1200);
