// run command  "npm install mysql2"
import express from 'express';

const app = express();
import mysql from 'mysql2';

const db = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: ".gp258dmw",
        database: "mydb"
    }
);


db.connect((err) => {
    if (err) {
        console.log("connection failed");
        console.log(err);
    } else {
        console.log("connection successfully");
    }
});

app.listen(5200);
