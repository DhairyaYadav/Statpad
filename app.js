const express = require('express');
const http = require('http');
const fs = require('fs');
const { url } = require('inspector');
const path = require('path');


const app = express();
const port = 80;


require("./model/conn");
const User = require("./model/user");

app.use(express.static('public'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.status(200).render('home.pug');
})

app.get('/home', (req, res) => {
    res.render('home.pug');
  });

app.get('/feedback',(req,res)=>{
    res.render('feedback.pug');
})

app.get('/teams',(req,res)=>{
    res.status(200).render('teams.pug');
})

app.get('/gt',(req,res)=>{
    res.status(200).render('gt.pug');
})

app.post("/",async (req,res) =>{
    const data = new User(req.body);
    await data.save()
    // res.send("Save Data")
    res.status(200).render("home.pug");
})

//STARTING THE SERVER
app.listen(port,()=>{
    console.log(`The application is running on port ${port}`);
})