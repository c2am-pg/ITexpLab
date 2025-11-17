const express = require('express'); // turns express on 
const router = express.Router();

 router.get('/', (req,res)=>{
    res.render(`users/list`,{users:users});
});
//router.get('/:id',(re,res)=>{
//    res.send(`Getting User data: ${req.params.id}`);
//});
router.get('/new', (req,res)=>{
   // res.send('New User Form');
});
router.post('/', (req,res)=>{
    //res.send("user created");
    const name = req.body.firstName;
    const isValid = firstName !==""; // check if they are there
    if(isValid){
    console.log(`Adding User: ${firstname}`);
    users.push({name:firstname});
    console.log(`New Set if Users: ${users}`);
    res.send("User Created");
    }else{
        console.log("Error adding user");
        res.render("users/new",{firstName:firstName});
    }
});

router.route("/:id").get((req,res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting User with id: ${req.params.id}`);
}).put((req,res)=>{
    res.send(`Updating User with id: ${req.params.id}`);
});
const users = [{name:"Cat"},{name:"Batman"}];
router.param("id",(req,res,next,id)=>{
    console.log(`Accessing User #${id}`);
    next();
});

module.exports = router;