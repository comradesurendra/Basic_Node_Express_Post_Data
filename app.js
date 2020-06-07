'use strict';

const express=require('express');
const expresshandlebar=require('express-handlebars');
const bodyparser=require('body-parser');

const app=express();
app.engine('handlebars',expresshandlebar({defaultLayout:'main'}));
app.set('view engine','handlebars');
app.use(bodyparser.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.render('registration',{title :'Home Page'});
});

app.get('/handleform',(req,res)=>{
    res.render('handleform',{
            title :'Form Data',
            'data':{
            'name':req.query.name,
            'email':req.query.email,
            'password':req.query.password,
            'phone':req.query.phone
    }});
});

app.post('/handleform',(req,res)=>{
   res.render('handleform',{
    title :'Form Data',
       data:req.body
   })
});


app.listen('8080',()=>{
    console.log("Server started on port 8080.");
});