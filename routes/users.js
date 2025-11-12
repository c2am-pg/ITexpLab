const express = require('express'); // turns express on 
const router = express.Router();

 router.get('/', (req,res)=>{
    res.send('User List');
});
//router.get('/:id',(re,res)=>{
//    res.send(`Getting User data: ${req.params.id}`);
//});
router.get('/new', (req,res)=>{
    res.send('New User Form');
});

//router.post('/',(re,res)=>{
//});

router.route("/:id").get('/:id',(req,res)=>{
    res.send(`Getting User data: ${req.params.id}`);
}).delete((req,res)=>{
    res.send(`Deleting User with id: ${req.params.id}`);
}).put((re,res)=>{
    res.send(`Updating User with id: ${req.params.id}`);
});

module.exports = router;