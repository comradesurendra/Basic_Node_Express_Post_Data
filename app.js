'use strict';

const express=require('express');
const expresshandlebar=require('express-handlebars');
const bodyparser=require('body-parser');

const app=express();
app.engine('handlebars',expresshandlebar({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('index',{title :'Home Page'});
});

app.post('/',(req,res)=>{

    let firstname=req.body.first;
    let lastname=req.body.last;
    let emailid=req.body.email;

    // res.write();
    // res.write();
    // res.write();

    res.send("<h5>First Name : </h5>"+ firstname +"<br>"+ "<h5>Last Name : </h5>"+ lastname +"<br>"+ "<h5>Email id : </h5>"+ emailid );
});

app.get('/about',(req,res)=>{
    res.render('about',{title:'About Page'});
});

app.listen('8080',()=>{
    console.log("Server started on port 8080.");
});