//console.log("Hello");

const express = require('express');

const app = express();// calling sets up server

app.get('/',(req,res)=>{
console.log('Here');
res.send("Hello World");
});

app.listen(3030);