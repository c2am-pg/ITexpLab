const express = require('express'); // turns express on 
const userRouter= require('./routes/users');
const postRouter= require('./routes/posts');

const app = express();// calling sets up server
app.set('view engine','ejs');
//app.use(logger);
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));

app.use('/users',userRouter);
app.use('/posts',postRouter);

app.get("/",(req,res)=>{
console.log('Here');
res.render("index",{user: "Cam",});
//res.status(500).send("Hello World");
});//runs on acess

//  app.get('/users', (req,res)=>{
//     res.send('User List');// });
// app.get('/users/new', (req,res)=>{
//     res.send('New User Form');// });
// app.get('/users/:id',(req,res)=>{
//     res.send('User data');// });
// app.use('/posts',(req,res)=>{
//     res.send('Post List');// });
// app.get('/posts/new', (req,res)=>{
//     res.send('New Post Form');// });
app.listen(3030);// port its ran on 

function logger(req,res,next){
    console.log(`Page Accessed: ${req.originalUrl}`);
    next();
}