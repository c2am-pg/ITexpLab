const express = require('express'); // turns express on 
const app = express();// calling sets up server
const userRouter= require('./routes/users');
const postRouter= require('./routes/posts');
app.set('view engine','ejs');

app.get('/',(req,res)=>{
console.log('Here');
res.render("index",{user: "Cam",});
//res.status(500).send("Hello World");
});//runs on acess

 app.get('/users', (req,res)=>{
    res.send('User List');
});
app.get('/users/new', (req,res)=>{
    res.send('New User Form');
});
app.use('/posts',postRrouter);
app.listen(3030);// port its ran on 