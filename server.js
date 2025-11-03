const express = require('express'); // turns express on 
const userRouter= require('./routes/users');
const app = express();// calling sets up server
app.set('view engine','ejs');

app.get('/',(req,res)=>{
console.log('Here');
res.render("index",{user: "Cam",});
//res.status(500).send("Hello World");

});

app.listen(3030);
// port its ran on 