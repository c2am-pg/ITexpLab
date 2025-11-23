const express = require('express'); // turns express on 
const router = express.Router();

 router.get('/', (req,res)=>{
    res.render(`users/list`,{users:users});
});
//router.get('/:id',(re,res)=>{
//    res.send(`Getting User data: ${req.params.id}`);
//});
router.get('/new', (req,res)=>{
       res.render('users/new', { firstName: "" });
});
router.post('/', (req,res)=>{
    //res.send("user created");
    const lastName= req.body.lastName;
    const age= req.body.age;
    const gender= req.body.gender;
    const firstName = req.body.firstName;

    const isValid = firstName !=="" && lastName !==""; // check if they are there
    if(isValid){
    console.log(`Adding User: ${firstName}`);
    users.push({firstName:firstName,lastName:lastName,
         gender:gender, age:age,
         });
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
 //const users =[{firstName:"Cat"},{firstName:"Batman"}];
// router.param("id",(req,res,next,id)=>{
//     console.log(`Accessing User #${id}`);
//     next();
//});

const users=[{
    firstName : "Chris",   
    lastName : "Adams",
    gender : "Male",
    age : 40},
];

module.exports = router;