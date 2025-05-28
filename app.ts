// const express = require('express')
import express from "express";
const app = express()
app.get("/", (req, res) => {
    res.send('hello work');
})
app.listen(8000, () => {
    console.log("sever running on port 8000");
})