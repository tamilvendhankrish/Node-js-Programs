//add express package by C:user> npm install express --save
//go to project folder
//npm init 
//run the node app

//simple program using express & building an express app
const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Works');});

app.get('/test',(req,res)=>{
    res.send('test page');});

app.listen(port, ()=>{return console.log("ready and running");});

//localhost:3000/
//in browser Works is written
//localhost:3000/test
//in browser test is written
