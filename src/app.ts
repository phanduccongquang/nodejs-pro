// const express = require('express')
import express from "express";
import 'dotenv/config';
import webRouter from "routes/web";
const app = express();

//config view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')
const port = process.env.PORT || 8080

//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//config static file
app.use(express.static('public'));


//config router
webRouter(app);




app.listen(port, () => {
    console.log(`sever running on port ${port}`);
})