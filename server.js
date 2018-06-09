const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  // res.send('<h1>hello Express!</h1>');
  res.send({
    name:'adrew',
    like:['food','poutine']
  });
});

app.get('/about',(req,res)=>{
  res.send('about page');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage: 'Unable to load request'
  });
});
app.listen(3000);
