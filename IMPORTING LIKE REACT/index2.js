import express from 'express';
import help from './help.js';
import contect from './contect.js';
const app = express();

app.get("", (req, resp) => {

    resp.send("home");
});

app.get("/contect",
    (req, resp) => {
        resp.send(contect());
    });

app.get("/help", (req, resp) => {
    resp.send(help());
});

app.listen(4600);
