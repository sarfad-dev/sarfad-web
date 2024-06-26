const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require("dotenv").config();

const app = express();
const port = 3000;
const ejs = require('ejs');
const path = require('path');

const public_path = path.join(__dirname,"../public");
const views_path = path.join(__dirname, "../views");

app.set('view engine', 'ejs');
app.set('views', views_path);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(public_path));

app.get("/", (req, res) => {
    res.render('index');
});


app.listen(port, () => {
    console.log(`Listening - http://localhost:${port}/`);
});
